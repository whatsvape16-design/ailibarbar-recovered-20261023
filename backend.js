import { DatabaseSync } from 'node:sqlite';
import { createHash, randomBytes, randomUUID, timingSafeEqual, scryptSync } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dataDir = resolve(process.env.AILIBARBAR_DATA_DIR || new URL('./data/', import.meta.url).pathname);
mkdirSync(dataDir, { recursive: true, mode: 0o700 });
const keyFile = resolve(dataDir, 'admin-key');
if (!existsSync(keyFile)) writeFileSync(keyFile, randomBytes(24).toString('base64url'), { mode: 0o600 });
export const getAdminKey = () => readFileSync(keyFile, 'utf8').trim();

const db = new DatabaseSync(resolve(dataDir, 'operations.sqlite'));
db.exec(`
  PRAGMA journal_mode=WAL;
  CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS orders (number TEXT PRIMARY KEY, data TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS receipts (number TEXT PRIMARY KEY, data_url TEXT NOT NULL, name TEXT, kind TEXT);
  CREATE TABLE IF NOT EXISTS drafts (number TEXT PRIMARY KEY, data TEXT NOT NULL, email TEXT NOT NULL, updated_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS leads (id TEXT PRIMARY KEY, data TEXT NOT NULL, updated_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS products (slug TEXT PRIMARY KEY, data TEXT NOT NULL, updated_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS customers (id TEXT PRIMARY KEY, email TEXT UNIQUE NOT NULL, data TEXT NOT NULL, password_hash TEXT, created_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, customer_id TEXT NOT NULL, expires_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS reviews (id TEXT PRIMARY KEY, data TEXT NOT NULL, created_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS coupons (code TEXT PRIMARY KEY, data TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS outbox (id TEXT PRIMARY KEY, data TEXT NOT NULL, created_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS knowledge (id TEXT PRIMARY KEY, data TEXT NOT NULL, updated_at TEXT NOT NULL);
  CREATE TABLE IF NOT EXISTS audit (id INTEGER PRIMARY KEY AUTOINCREMENT, entity TEXT NOT NULL, action TEXT NOT NULL, detail TEXT NOT NULL, created_at TEXT NOT NULL);
`);
if (!db.prepare("SELECT value FROM meta WHERE key='next_order'").get()) {
  db.prepare("INSERT INTO meta(key,value) VALUES('next_order','10000')").run();
}

const now = () => new Date().toISOString();
const parse = (value) => JSON.parse(value);
const clean = (value, max = 500) => String(value ?? '').trim().slice(0, max);
const email = (value) => clean(value, 254).toLowerCase();
const money = (value) => Math.round(Number(value || 0) * 100) / 100;
const sha = (value) => createHash('sha256').update(value).digest('hex');
const constantEquals = (left, right) => {
  const a = Buffer.from(sha(left));
  const b = Buffer.from(sha(right));
  return timingSafeEqual(a, b);
};
const bearer = (request) => (request.headers.authorization || '').replace(/^Bearer\s+/i, '').trim();
const isAdmin = (request) => !!bearer(request) && constantEquals(bearer(request), getAdminKey());
const audit = (entity, action, detail = {}) => db.prepare('INSERT INTO audit(entity,action,detail,created_at) VALUES(?,?,?,?)').run(entity, action, JSON.stringify(detail), now());

function json(response, status, body, method = 'GET') {
  const data = Buffer.from(JSON.stringify(body));
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(method === 'HEAD' ? undefined : data);
}
function fail(response, status, error, method) { json(response, status, { error }, method); }
function requireAdmin(request, response) {
  if (isAdmin(request)) return true;
  fail(response, 401, 'Unauthorized', request.method);
  return false;
}
async function body(request) {
  let size = 0;
  const chunks = [];
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 12 * 1024 * 1024) throw Object.assign(new Error('Request body is too large'), { status: 413 });
    chunks.push(chunk);
  }
  if (!size) return {};
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { throw Object.assign(new Error('Invalid JSON'), { status: 400 }); }
}
function list(table, field = 'data') {
  return db.prepare(`SELECT ${field} FROM ${table} ORDER BY rowid DESC`).all().map((row) => parse(row[field]));
}
function get(table, keyColumn, key) {
  const row = db.prepare(`SELECT data FROM ${table} WHERE ${keyColumn}=?`).get(key);
  return row ? parse(row.data) : null;
}
function saveOrder(order, action = 'updated') {
  const number = clean(order.orderNumber, 40);
  if (!/^\d{4,12}$/.test(number)) throw Object.assign(new Error('Invalid order number'), { status: 400 });
  const current = get('orders', 'number', number);
  const stamp = now();
  const result = { ...order, orderNumber: number, createdAt: current?.createdAt || order.createdAt || stamp, updatedAt: stamp };
  db.prepare('INSERT INTO orders(number,data,created_at,updated_at) VALUES(?,?,?,?) ON CONFLICT(number) DO UPDATE SET data=excluded.data,updated_at=excluded.updated_at')
    .run(number, JSON.stringify(result), result.createdAt, stamp);
  audit('order', action, { orderNumber: number });
  return result;
}
function orderWithReceipt(order) {
  const receipt = db.prepare('SELECT data_url,name,kind FROM receipts WHERE number=?').get(order.orderNumber);
  return receipt ? { ...order, paymentReceipt: receipt.data_url, paymentReceiptName: receipt.name, paymentReceiptKind: receipt.kind } : order;
}
function allOrders() { return list('orders').map(orderWithReceipt); }
function updateLeadForOrder(order) {
  for (const row of db.prepare('SELECT id,data FROM leads').all()) {
    const lead = parse(row.data);
    if (lead.orderNumber === order.orderNumber || (email(lead.contact?.email) && email(lead.contact?.email) === email(order.billing?.email))) {
      const next = { ...lead, orderNumber: order.orderNumber, status: order.paymentStatus === 'confirmed' ? 'paid' : 'placed', updatedAt: now() };
      db.prepare('UPDATE leads SET data=?,updated_at=? WHERE id=?').run(JSON.stringify(next), next.updatedAt, row.id);
    }
  }
}
function saveCustomer(input, passwordHash = null) {
  const address = email(input.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) throw Object.assign(new Error('Valid email required'), { status: 400 });
  const existing = db.prepare('SELECT id,data,password_hash FROM customers WHERE email=?').get(address);
  const id = existing?.id || randomUUID();
  const previous = existing ? parse(existing.data) : null;
  const user = { ...previous, id, email: address, displayName: clean(input.displayName || input.name || previous?.displayName || address.split('@')[0], 120), phone: clean(input.phone || previous?.phone, 60), createdAt: previous?.createdAt || now() };
  db.prepare('INSERT INTO customers(id,email,data,password_hash,created_at) VALUES(?,?,?,?,?) ON CONFLICT(email) DO UPDATE SET data=excluded.data,password_hash=COALESCE(excluded.password_hash,customers.password_hash)')
    .run(id, address, JSON.stringify(user), passwordHash, user.createdAt);
  return user;
}
function passwordHash(password) {
  const salt = randomBytes(16).toString('hex');
  return `${salt}:${scryptSync(password, salt, 32).toString('hex')}`;
}
function passwordValid(password, stored) {
  if (!stored) return false;
  const [salt, digest] = stored.split(':');
  if (!salt || !digest) return false;
  return timingSafeEqual(scryptSync(password, salt, 32), Buffer.from(digest, 'hex'));
}
function customerForToken(request) {
  const token = bearer(request);
  if (!token) return null;
  const row = db.prepare('SELECT customer_id,expires_at FROM sessions WHERE token_hash=?').get(sha(token));
  if (!row || row.expires_at < now()) return null;
  return get('customers', 'id', row.customer_id);
}
function productSeed() {
  const oldSlug = db.prepare("SELECT data FROM products WHERE slug='chupa-chups-strawberry'").get();
  if (oldSlug && !db.prepare("SELECT slug FROM products WHERE slug='strawberry-ice'").get()) {
    const value = { ...parse(oldSlug.data), slug: 'strawberry-ice' };
    db.prepare("DELETE FROM products WHERE slug='chupa-chups-strawberry'").run();
    db.prepare('INSERT INTO products(slug,data,updated_at) VALUES(?,?,?)').run(value.slug, JSON.stringify(value), now());
  }
  const names = [
    ['blackberry-ice', 'Blackberry Ice'], ['strawberry-coconut-watermelon', 'Strawberry Coconut Watermelon'],
    ['peach-ice', 'Peach Ice'], ['strawberry-watermelon', 'Strawberry Watermelon'],
    ['strawberry-ice', 'Chupa Chups Strawberry'], ['grape-ice', 'Grape Ice'],
    ['mango-magic', 'Mango Magic'], ['quadruple-berry', 'Quadruple Berry'],
    ['california-sunset', 'California Sunset'], ['blueberry-blast', 'Blueberry Blast'],
    ['strawberry-lychee', 'Strawberry Lychee'],
  ];
  const insert = db.prepare('INSERT INTO products(slug,data,updated_at) VALUES(?,?,?)');
  for (const [slug, name] of names) if (!db.prepare('SELECT slug FROM products WHERE slug=?').get(slug)) insert.run(slug, JSON.stringify({ slug, name, sku: slug.toUpperCase().replaceAll('-', '_'), price: 39, stock: null, active: true, description: '', image: '' }), now());
  for (const [size, price] of [[3,110],[5,175],[10,299],[20,560]]) {
    const slug = `custom-${size}-pack`;
    if (!db.prepare('SELECT slug FROM products WHERE slug=?').get(slug)) insert.run(slug, JSON.stringify({ slug, name: `${size} Flavour Custom Pack`, sku: `PACK_${size}`, price, stock: null, active: true, description: 'Choose any current flavours.', image: '' }), now());
  }
}
productSeed();
function validateCheckoutOrder(order, checkStock = true) {
  const lines = Array.isArray(order.lines) ? order.lines : [];
  if (!lines.length) throw Object.assign(new Error('At least one item is required'), { status: 400 });
  let subtotal = 0, deviceCount = 0;
  for (const line of lines) {
    const slug = clean(line.slug, 100), product = get('products', 'slug', slug), qty = Number(line.qty);
    if (!product || !product.active) throw Object.assign(new Error(`Product ${slug || 'unknown'} is unavailable`), { status: 409 });
    if (!Number.isInteger(qty) || qty < 1 || qty > 1000) throw Object.assign(new Error('Invalid item quantity'), { status: 400 });
    if (money(line.price) !== money(product.price)) throw Object.assign(new Error('Product price has changed. Refresh your cart.'), { status: 409 });
    if (checkStock && product.stock != null && product.stock < qty) throw Object.assign(new Error(`${product.name} is out of stock`), { status: 409 });
    subtotal += qty * product.price;
    deviceCount += qty * Number(/^custom-(\d+)-pack$/.exec(slug)?.[1] || 1);
  }
  subtotal = money(subtotal);
  const shipping = deviceCount >= 20 ? 0 : 10;
  const code = clean(order.discountCode, 50).toUpperCase();
  const coupon = code ? get('coupons', 'code', code) : null;
  const discount = coupon?.active && (!coupon.expiresAt || coupon.expiresAt > now()) && deviceCount >= Number(coupon.minDevices || 0) ? money(coupon.amount) : 0;
  const total = money(Math.max(0, subtotal + shipping - discount));
  if (money(order.subtotal) !== subtotal || money(order.shipping) !== shipping || money(order.total) !== total || Number(order.deviceCount) !== deviceCount || money(order.discountAmount) !== discount) {
    throw Object.assign(new Error('Order total has changed. Refresh your cart.'), { status: 409 });
  }
  return { subtotal, shipping, total, deviceCount, discount };
}

export async function handleApi(request, response, url) {
  const method = request.method || 'GET';
  const path = url.pathname;
  try {
    if (path === '/api/local/session' && method === 'GET') return json(response, isAdmin(request) ? 200 : 401, { authorized: isAdmin(request) }, method);
    if (path === '/api/auth') {
      if (method === 'GET') {
        const user = customerForToken(request);
        return user ? json(response, 200, { user }, method) : fail(response, 401, 'Unauthorized', method);
      }
      if (method === 'POST') {
        const input = await body(request), action = clean(input.action, 30), address = email(input.email);
        if (action === 'register') {
          if (!address || clean(input.password, 200).length < 8) return fail(response, 400, 'Email and password of at least 8 characters required', method);
          const existing = db.prepare('SELECT password_hash FROM customers WHERE email=?').get(address);
          if (existing?.password_hash) return fail(response, 409, 'Account already exists', method);
          const user = saveCustomer({ email: address, displayName: input.displayName }, passwordHash(input.password));
          const token = randomBytes(32).toString('base64url');
          db.prepare('INSERT INTO sessions(token_hash,customer_id,expires_at) VALUES(?,?,?)').run(sha(token), user.id, new Date(Date.now()+30*86400000).toISOString());
          return json(response, 201, { token, user, needsVerification: false }, method);
        }
        if (action === 'login') {
          const row = db.prepare('SELECT id,data,password_hash FROM customers WHERE email=?').get(address);
          if (!row || !passwordValid(clean(input.password, 200), row.password_hash)) return fail(response, 401, 'Invalid email or password', method);
          const token = randomBytes(32).toString('base64url');
          db.prepare('INSERT INTO sessions(token_hash,customer_id,expires_at) VALUES(?,?,?)').run(sha(token), row.id, new Date(Date.now()+30*86400000).toISOString());
          return json(response, 200, { token, user: parse(row.data) }, method);
        }
        return fail(response, 501, 'Email verification is not configured for this local system.', method);
      }
    }
    if (path === '/api/auth-password') return fail(response, 501, 'Password reset email is not configured for this local system.', method);
    if (path === '/api/local/summary' && method === 'GET') {
      if (!requireAdmin(request, response)) return;
      const orders = allOrders();
      return json(response, 200, { orders: orders.length, revenue: money(orders.filter(o => o.paymentStatus === 'confirmed').reduce((s,o)=>s+Number(o.total || 0),0)), pending: orders.filter(o => o.paymentStatus !== 'confirmed').length, unshipped: orders.filter(o => o.paymentStatus === 'confirmed' && o.fulfillmentStatus !== 'shipped').length, customers: db.prepare('SELECT count(*) AS n FROM customers').get().n, leads: db.prepare('SELECT count(*) AS n FROM leads').get().n, reviews: db.prepare('SELECT count(*) AS n FROM reviews').get().n }, method);
    }
    if (path === '/api/next-order-number' && method === 'GET') {
      const next = Number(db.prepare("SELECT value FROM meta WHERE key='next_order'").get().value) + 1;
      db.prepare("UPDATE meta SET value=? WHERE key='next_order'").run(String(next));
      return json(response, 200, { orderNumber: String(next) }, method);
    }
    if (path === '/api/save-checkout-draft' && method === 'POST') {
      const input = await body(request), order = input.order || {};
      const number = clean(order.orderNumber, 40), address = email(order.billing?.email);
      if (!/^\d{4,12}$/.test(number) || !address) return fail(response, 400, 'Order number and billing email required', method);
      const draft = { ...order, traffic: input.traffic || order.traffic, deviceCount: Number(input.deviceCount ?? order.deviceCount ?? 0), createdAt: now() };
      db.prepare('INSERT INTO drafts(number,data,email,updated_at) VALUES(?,?,?,?) ON CONFLICT(number) DO UPDATE SET data=excluded.data,email=excluded.email,updated_at=excluded.updated_at').run(number, JSON.stringify(draft), address, now());
      return json(response, 200, { order: draft }, method);
    }
    if (path === '/api/resume-checkout' && method === 'GET') {
      const number = clean(url.searchParams.get('orderNumber'), 40), address = email(url.searchParams.get('email'));
      const row = db.prepare('SELECT data,email FROM drafts WHERE number=?').get(number);
      if (!row || row.email !== address) return fail(response, 404, 'Order draft not found', method);
      return json(response, 200, { order: parse(row.data) }, method);
    }
    if (path === '/api/submit-order' && method === 'POST') {
      const input = await body(request), raw = input.order || {}, number = clean(raw.orderNumber, 40);
      const draft = db.prepare('SELECT email FROM drafts WHERE number=?').get(number);
      if (!draft || draft.email !== email(raw.billing?.email)) return fail(response, 400, 'Matching checkout draft required', method);
      if (!Number.isFinite(Number(raw.total)) || Number(raw.total) < 0) return fail(response, 400, 'Valid order total required', method);
      const existingOrder = get('orders', 'number', number);
      if (existingOrder && JSON.stringify(existingOrder.lines) !== JSON.stringify(raw.lines)) return fail(response, 409, 'Order items cannot be changed after submission', method);
      validateCheckoutOrder(raw, !existingOrder);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email(raw.billing?.email))) return fail(response, 400, 'Valid billing email required', method);
      let savedOrder;
      db.exec('BEGIN IMMEDIATE');
      try {
        const current = get('orders', 'number', number);
        const order = saveOrder({ ...current, ...raw, paymentStatus: current?.paymentStatus || 'pending', fulfillmentStatus: current?.fulfillmentStatus || 'unshipped', adminNote: current?.adminNote, trackingNumber: current?.trackingNumber, carrier: current?.carrier, paymentSubmittedAt: now() }, current ? 'receipt-updated' : 'created');
        if (!current) for (const line of raw.lines) {
          const product = get('products', 'slug', line.slug);
          if (product?.stock != null) db.prepare('UPDATE products SET data=?,updated_at=? WHERE slug=?').run(JSON.stringify({ ...product, stock: product.stock - line.qty }), now(), product.slug);
        }
        if (input.receipt?.dataUrl && /^data:(image\/[\w.+-]+|application\/pdf);base64,/.test(input.receipt.dataUrl)) {
          db.prepare('INSERT INTO receipts(number,data_url,name,kind) VALUES(?,?,?,?) ON CONFLICT(number) DO UPDATE SET data_url=excluded.data_url,name=excluded.name,kind=excluded.kind').run(number, input.receipt.dataUrl, clean(input.receipt.name, 200), clean(input.receipt.kind, 20));
        }
        saveCustomer({ email: raw.billing.email, displayName: `${raw.billing.firstName || ''} ${raw.billing.lastName || ''}`.trim(), phone: raw.billing.phone });
        updateLeadForOrder(order);
        db.exec('COMMIT');
        savedOrder = order;
      } catch (error) { db.exec('ROLLBACK'); throw error; }
      return json(response, 200, { order: orderWithReceipt(savedOrder) }, method);
    }
    if (path === '/api/orders') {
      if (!requireAdmin(request, response)) return;
      if (method === 'GET') return json(response, 200, { orders: allOrders() }, method);
      if (method === 'PATCH') {
        const input = await body(request), number = clean(input.orderNumber, 40), old = get('orders', 'number', number);
        if (!old) return fail(response, 404, 'Order not found', method);
        const patch = {};
        for (const key of ['paymentStatus','fulfillmentStatus','trackingNumber','carrier','adminNote','paymentEmailHtml']) if (key in input) patch[key] = input[key];
        if (patch.paymentStatus && !['pending','confirmed','paid'].includes(patch.paymentStatus)) return fail(response, 400, 'Invalid payment status', method);
        if (patch.fulfillmentStatus && !['unshipped','shipped'].includes(patch.fulfillmentStatus)) return fail(response, 400, 'Invalid fulfillment status', method);
        const stamp = now(), updated = saveOrder({ ...old, ...patch, ...(patch.paymentStatus === 'confirmed' ? { paymentConfirmedAt: stamp } : {}), ...(patch.fulfillmentStatus === 'shipped' ? { shippedAt: stamp } : {}) });
        updateLeadForOrder(updated);
        return json(response, 200, { order: orderWithReceipt(updated), paymentEmailSent: false, paymentEmailError: 'No email provider configured for this local system.' }, method);
      }
      return fail(response, 405, 'Method not allowed', method);
    }
    if (path === '/api/local/orders' && method === 'POST') {
      if (!requireAdmin(request, response)) return;
      const input = await body(request);
      const number = clean(input.orderNumber, 40) || String(Number(db.prepare("SELECT value FROM meta WHERE key='next_order'").get().value) + 1);
      if (get('orders', 'number', number)) return fail(response, 409, 'Order number already exists', method);
      db.prepare("UPDATE meta SET value=? WHERE key='next_order'").run(number);
      const lines = Array.isArray(input.lines) ? input.lines : [];
      if (!lines.length || !email(input.billing?.email)) return fail(response, 400, 'Customer email and at least one line required', method);
      const subtotal = money(lines.reduce((sum, line) => sum + Number(line.qty || 0) * Number(line.price || 0), 0));
      const order = saveOrder({ ...input, orderNumber: number, lines, subtotal, shipping: money(input.shipping), total: money(subtotal + Number(input.shipping || 0)), paymentStatus: 'pending', fulfillmentStatus: 'unshipped', paymentMethod: input.paymentMethod || 'Bank Transfer' }, 'manual-created');
      saveCustomer({ email: input.billing.email, displayName: `${input.billing.firstName || ''} ${input.billing.lastName || ''}`.trim(), phone: input.billing.phone });
      return json(response, 201, { order }, method);
    }
    if (path === '/api/receipt' && method === 'GET') {
      if (!requireAdmin(request, response)) return;
      const receipt = db.prepare('SELECT data_url FROM receipts WHERE number=?').get(clean(url.searchParams.get('orderNumber'), 40));
      if (!receipt) return fail(response, 404, 'Receipt not found', method);
      const match = /^data:([^;]+);base64,(.*)$/.exec(receipt.data_url);
      if (!match) return fail(response, 500, 'Stored receipt is invalid', method);
      const binary = Buffer.from(match[2], 'base64');
      response.writeHead(200, { 'Content-Type': match[1], 'Content-Length': binary.length, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
      return response.end(method === 'HEAD' ? undefined : binary);
    }
    if (path === '/api/ship-order' && method === 'POST') {
      if (!requireAdmin(request, response)) return;
      const input = await body(request), number = clean(input.orderNumber, 40), old = get('orders', 'number', number);
      if (!old) return fail(response, 404, 'Order not found', method);
      if (!clean(input.trackingNumber, 120)) return fail(response, 400, 'Tracking number required', method);
      const order = saveOrder({ ...old, trackingNumber: clean(input.trackingNumber, 120), carrier: clean(input.carrier, 120), fulfillmentStatus: 'shipped', shippedAt: now() }, 'shipped');
      if (input.subject || input.html || input.text) saveOutbox({ to: old.billing?.email, subject: input.subject || `Order ${number} shipped`, html: input.html || '', text: input.text || '', orderNumber: number, status: 'draft' });
      return json(response, 200, { order, emailSent: false, emailError: 'Email saved as a local draft; no provider is configured.' }, method);
    }
    if (path === '/api/checkout-leads') {
      if (method === 'GET') { if (!requireAdmin(request, response)) return; return json(response, 200, { leads: list('leads') }, method); }
      if (method === 'POST') {
        const input = await body(request), id = clean(input.id, 80) || randomUUID();
        const old = get('leads', 'id', id);
        const lead = { ...old, ...input, id, status: old?.status || 'browsing', updatedAt: now() };
        db.prepare('INSERT INTO leads(id,data,updated_at) VALUES(?,?,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data,updated_at=excluded.updated_at').run(id, JSON.stringify(lead), lead.updatedAt);
        return json(response, 200, { lead }, method);
      }
    }
    if (path === '/api/validate-coupon' && method === 'POST') {
      const input = await body(request), code = clean(input.code, 50).toUpperCase();
      const coupon = get('coupons', 'code', code);
      const valid = coupon?.active && (!coupon.expiresAt || coupon.expiresAt > now()) && Number(input.deviceCount || 0) >= Number(coupon.minDevices || 0);
      return json(response, 200, valid ? { valid: true, code, discountAmount: Number(coupon.amount) } : { valid: false, error: 'This discount code is not valid.' }, method);
    }
    if (path === '/api/local/products') {
      if (!requireAdmin(request, response)) return;
      if (method === 'GET') return json(response, 200, { products: list('products') }, method);
      if (method === 'POST') {
        const input = await body(request), slug = clean(input.slug, 100).toLowerCase();
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || !clean(input.name, 200)) return fail(response, 400, 'Name and URL slug required', method);
        const old = get('products', 'slug', slug);
        const product = { ...old, slug, name: clean(input.name, 200), sku: clean(input.sku, 100), description: clean(input.description, 3000), image: clean(input.image, 500), price: money(input.price), stock: input.stock === '' || input.stock == null ? null : Math.max(0, Math.floor(Number(input.stock))), active: input.active !== false };
        db.prepare('INSERT INTO products(slug,data,updated_at) VALUES(?,?,?) ON CONFLICT(slug) DO UPDATE SET data=excluded.data,updated_at=excluded.updated_at').run(slug, JSON.stringify(product), now());
        audit('product', old ? 'updated' : 'created', { slug });
        return json(response, old ? 200 : 201, { product }, method);
      }
    }
    if (path.startsWith('/api/local/products/') && method === 'DELETE') {
      if (!requireAdmin(request, response)) return;
      const slug = decodeURIComponent(path.slice('/api/local/products/'.length));
      db.prepare('DELETE FROM products WHERE slug=?').run(slug); audit('product', 'deleted', { slug });
      return json(response, 200, { ok: true }, method);
    }
    if (path === '/api/local/customers' && method === 'GET') {
      if (!requireAdmin(request, response)) return;
      return json(response, 200, { customers: list('customers'), orders: allOrders().map(({orderNumber,billing,total,paymentStatus}) => ({orderNumber,email:billing?.email,total,paymentStatus})) }, method);
    }
    if (path === '/api/local/customers' && method === 'POST') {
      if (!requireAdmin(request, response)) return;
      const input = await body(request), customer = saveCustomer(input);
      audit('customer','saved',{id:customer.id});
      return json(response, 200, { customer }, method);
    }
    if (path === '/api/admin-users') {
      if (!requireAdmin(request, response)) return;
      if (method === 'GET') return json(response, 200, { users: list('customers') }, method);
      if (method === 'POST') return fail(response, 501, 'Email sending is not configured in this local system.', method);
    }
    if (path === '/api/reviews') {
      if (method === 'GET') {
        const reviews = list('reviews');
        return json(response, 200, { reviews: (isAdmin(request) ? reviews : reviews.filter(r => r.status === 'approved')).filter(r => !url.searchParams.get('slug') || r.slug === url.searchParams.get('slug')) }, method);
      }
      if (method === 'POST') {
        const customer = customerForToken(request);
        if (!isAdmin(request) && !customer) return fail(response, 401, 'Unauthorized', method);
        const input = await body(request), review = { ...input, id: randomUUID(), status: isAdmin(request) ? input.status || 'pending' : 'pending', name: input.name || customer?.displayName || 'Customer', createdAt: now() };
        db.prepare('INSERT INTO reviews(id,data,created_at) VALUES(?,?,?)').run(review.id, JSON.stringify(review), review.createdAt);
        audit('review', 'created', { id: review.id });
        return json(response, 201, { review }, method);
      }
      if (!requireAdmin(request, response)) return;
      if (method === 'PATCH') {
        const input = await body(request), old = get('reviews', 'id', input.id);
        if (!old) return fail(response, 404, 'Review not found', method);
        const review = { ...old, status: ['pending','approved','rejected'].includes(input.status) ? input.status : old.status };
        db.prepare('UPDATE reviews SET data=? WHERE id=?').run(JSON.stringify(review), old.id); audit('review','moderated',{id:old.id,status:review.status});
        return json(response, 200, { review }, method);
      }
      if (method === 'DELETE') { const id = clean(url.searchParams.get('id'), 80); db.prepare('DELETE FROM reviews WHERE id=?').run(id); audit('review','deleted',{id}); return json(response, 200, { ok: true }, method); }
    }
    if (path === '/api/local/coupons') {
      if (!requireAdmin(request, response)) return;
      if (method === 'GET') return json(response, 200, { coupons: list('coupons') }, method);
      if (method === 'POST') {
        const input = await body(request), code = clean(input.code, 50).toUpperCase();
        if (!/^[A-Z0-9_-]{3,50}$/.test(code) || Number(input.amount) <= 0) return fail(response, 400, 'Code and positive discount required', method);
        const coupon = { code, amount: money(input.amount), minDevices: Math.max(0, Math.floor(Number(input.minDevices || 0))), active: input.active !== false, expiresAt: input.expiresAt || null };
        db.prepare('INSERT INTO coupons(code,data) VALUES(?,?) ON CONFLICT(code) DO UPDATE SET data=excluded.data').run(code, JSON.stringify(coupon)); audit('coupon','saved',{code});
        return json(response, 200, { coupon }, method);
      }
      if (method === 'DELETE') { const code = clean(url.searchParams.get('code'), 50).toUpperCase(); db.prepare('DELETE FROM coupons WHERE code=?').run(code); audit('coupon','deleted',{code}); return json(response, 200, { ok: true }, method); }
    }
    if (path === '/api/local/outbox') {
      if (!requireAdmin(request, response)) return;
      if (method === 'GET') return json(response, 200, { messages: list('outbox') }, method);
      if (method === 'POST') { const message = saveOutbox(await body(request)); return json(response, 201, { message }, method); }
    }
    if (path === '/api/local/knowledge') {
      if (!requireAdmin(request, response)) return;
      if (method === 'GET') return json(response, 200, { articles: list('knowledge') }, method);
      if (method === 'POST') {
        const input = await body(request), id = clean(input.id, 80) || randomUUID();
        if (!clean(input.title, 200)) return fail(response, 400, 'Title required', method);
        const article = { id, title: clean(input.title, 200), content: clean(input.content, 30000), updatedAt: now() };
        db.prepare('INSERT INTO knowledge(id,data,updated_at) VALUES(?,?,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data,updated_at=excluded.updated_at').run(id, JSON.stringify(article), article.updatedAt); audit('knowledge','saved',{id});
        return json(response, 200, { article }, method);
      }
      if (method === 'DELETE') { const id = clean(url.searchParams.get('id'), 80); db.prepare('DELETE FROM knowledge WHERE id=?').run(id); audit('knowledge','deleted',{id}); return json(response, 200, { ok: true }, method); }
    }
    if (path === '/api/local/audit' && method === 'GET') {
      if (!requireAdmin(request, response)) return;
      return json(response, 200, { events: db.prepare('SELECT entity,action,detail,created_at AS createdAt FROM audit ORDER BY id DESC LIMIT 100').all().map(x => ({ ...x, detail: parse(x.detail) })) }, method);
    }
    if (path === '/api/admin-email-stats' && method === 'GET') { if (!requireAdmin(request,response)) return; return json(response,200,{ counts: {}, totals: {}, range: url.searchParams.get('range') || '30' },method); }
    if (path.startsWith('/api/mail-')) return fail(response, 501, 'Mail provider not configured. Use the local outbox to save drafts.', method);
    return fail(response, 404, 'API endpoint not found', method);
  } catch (error) {
    console.error('API error:', error);
    fail(response, error.status || 500, error.status ? error.message : 'Internal server error', method);
  }
}

function saveOutbox(input) {
  const message = { id: randomUUID(), to: email(input.to), subject: clean(input.subject, 250), text: clean(input.text || input.body, 30000), html: clean(input.html, 30000), orderNumber: clean(input.orderNumber, 40), status: 'draft', createdAt: now() };
  if (!message.to || !message.subject) throw Object.assign(new Error('Recipient and subject required'), { status: 400 });
  db.prepare('INSERT INTO outbox(id,data,created_at) VALUES(?,?,?)').run(message.id, JSON.stringify(message), message.createdAt);
  audit('outbox','draft-created',{id:message.id});
  return message;
}
