import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createServer } from 'node:net';

async function freePort() {
  return await new Promise((resolve, reject) => {
    const server = createServer();
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    });
  });
}
async function start(dir, port) {
  const child = spawn(process.execPath, ['server.js'], { cwd: new URL('../', import.meta.url), env: { ...process.env, AILIBARBAR_DATA_DIR: dir, PORT: String(port) }, stdio: 'ignore' });
  for (let i = 0; i < 80; i++) {
    if (child.exitCode !== null) throw new Error('Server stopped before ready');
    try { const result = await fetch(`http://127.0.0.1:${port}/api/local/session`); if (result.status === 401) return child; }
    catch {}
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  throw new Error('Server did not start');
}
async function stop(child) {
  child.kill('SIGTERM');
  await new Promise(resolve => child.once('exit', resolve));
}

test('local admin supports checkout, order lifecycle, catalogue and persistent storage', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'alibarbar-admin-test-'));
  const port = await freePort();
  let child;
  try {
    child = await start(dir, port);
    const origin = `http://127.0.0.1:${port}`;
    const key = (await readFile(join(dir, 'admin-key'), 'utf8')).trim();
    const request = async (path, method = 'GET', value, admin = false) => {
      const response = await fetch(`${origin}${path}`, { method, headers: { ...(value ? { 'Content-Type': 'application/json' } : {}), ...(admin ? { Authorization: `Bearer ${key}` } : {}) }, body: value ? JSON.stringify(value) : undefined });
      return { status: response.status, data: await response.json() };
    };
    assert.equal((await request('/api/orders')).status, 401);
    assert.equal((await request('/api/local/session', 'GET', undefined, true)).status, 200);
    const number = (await request('/api/next-order-number')).data.orderNumber;
    const order = { orderNumber:number, billing:{ firstName:'Demo', lastName:'Customer', email:'demo@example.invalid' }, lines:[{slug:'blackberry-ice',name:'Blackberry Ice',qty:2,price:39}], deviceCount:2, subtotal:78,shipping:10,total:88,paymentMethod:'Bank Transfer' };
    await request('/api/local/products','POST',{slug:'blackberry-ice',name:'Blackberry Ice',price:39,stock:2,active:true},true);
    assert.equal((await request('/api/save-checkout-draft','POST',{order,deviceCount:2})).status,200);
    assert.equal((await request(`/api/resume-checkout?orderNumber=${number}&email=demo%40example.invalid`)).data.order.orderNumber,number);
    assert.equal((await request('/api/submit-order','POST',{order,receipt:{dataUrl:'data:image/png;base64,AA==',name:'receipt.png',kind:'image'}})).status,200);
    assert.equal((await request('/api/submit-order','POST',{order,receipt:{dataUrl:'data:image/png;base64,AA==',name:'receipt.png',kind:'image'}})).status,200);
    assert.equal((await request('/api/local/products','GET',undefined,true)).data.products.find(p=>p.slug==='blackberry-ice').stock,0);
    const listed = await request('/api/orders','GET',undefined,true);
    assert.equal(listed.data.orders.length,1);
    assert.equal(listed.data.orders[0].paymentReceiptName,'receipt.png');
    const patched = await request('/api/orders','PATCH',{orderNumber:number,paymentStatus:'confirmed',fulfillmentStatus:'shipped',trackingNumber:'TEST123',carrier:'Australia Post'},true);
    assert.equal(patched.data.order.paymentStatus,'confirmed');
    const summary = await request('/api/local/summary','GET',undefined,true);
    assert.equal(summary.data.revenue,88);
    assert.equal(summary.data.unshipped,0);
    assert.equal((await request('/api/local/products','GET',undefined,true)).data.products.length,15);
    assert.equal((await request('/api/local/products','POST',{slug:'test-product',name:'Test Product',sku:'TP1',price:12,stock:5,active:true},true)).status,201);
    const badNumber = (await request('/api/next-order-number')).data.orderNumber;
    const badOrder = { ...order, orderNumber: badNumber, lines:[{slug:'test-product',name:'Test Product',qty:6,price:12}],deviceCount:6,subtotal:72,shipping:10,total:82 };
    await request('/api/save-checkout-draft','POST',{order:badOrder,deviceCount:6});
    assert.equal((await request('/api/submit-order','POST',{order:badOrder,receipt:{dataUrl:'data:image/png;base64,AA=='}})).status,409);
    assert.equal((await request('/api/local/coupons','POST',{code:'LOCAL5',amount:5,minDevices:2,active:true},true)).status,200);
    assert.deepEqual((await request('/api/validate-coupon','POST',{code:'LOCAL5',email:'demo@example.invalid',deviceCount:2})).data,{valid:true,code:'LOCAL5',discountAmount:5});
    assert.equal((await request('/api/local/outbox','POST',{to:'demo@example.invalid',subject:'Test',text:'Draft only'},true)).data.message.status,'draft');
    assert.equal((await request('/api/local/knowledge','POST',{title:'Shipping notes',content:'Local notes'},true)).status,200);
    assert.equal((await request('/api/reviews','POST',{name:'Demo',rating:5,body:'Test',slug:'blackberry-ice'},true)).status,201);
    assert.equal((await request('/api/reviews')).data.reviews.length,0);
    const registration = await request('/api/auth','POST',{action:'register',email:'local-user@example.invalid',password:'long-local-password',displayName:'Local User'});
    assert.equal(registration.status,201);
    const login = await request('/api/auth','POST',{action:'login',email:'local-user@example.invalid',password:'long-local-password'});
    assert.equal(login.status,200);
    const customerReview = await fetch(`${origin}/api/reviews`, { method:'POST', headers:{'Content-Type':'application/json',Authorization:`Bearer ${login.data.token}`}, body:JSON.stringify({rating:4,body:'Local test review',slug:'blackberry-ice'}) });
    assert.equal(customerReview.status,201);
    assert.equal((await request('/api/reviews')).data.reviews.length,0);
    assert.equal((await request('/api/local/customers','POST',{email:'new-customer@example.invalid',displayName:'New Customer'},true)).status,200);
    await stop(child); child = await start(dir, port);
    assert.equal((await request('/api/orders','GET',undefined,true)).data.orders[0].trackingNumber,'TEST123');
    assert.equal((await request('/api/local/products','GET',undefined,true)).data.products.length,16);
  } finally {
    if (child && child.exitCode === null) await stop(child);
    await rm(dir, { recursive:true, force:true });
  }
});
