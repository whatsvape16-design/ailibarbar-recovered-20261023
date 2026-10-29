const s = /^(.+?\sFlavour Custom Pack)\s*\((.+)\)\s*$/i,
  c = /^(.+?)\s*[×x]\s*(\d+)\s*$/u;
function i(r) {
  const n = new Map();
  for (const o of r) {
    const t = o.trim();
    t && n.set(t, (n.get(t) ?? 0) + 1);
  }
  return [...n.entries()].map(([o, t]) => ({ name: o, qty: t }));
}
function a(r) {
  return i(r)
    .map(({ name: n, qty: o }) => (o > 1 ? `${n} × ${o}` : n))
    .join(", ");
}
function f(r, n) {
  return `${r} (${a(n)})`;
}
function m(r) {
  const n = r.trim();
  if (!n) return { name: "", count: 0 };
  const o = c.exec(n);
  if (o) {
    const t = Number(o[2]);
    if (Number.isFinite(t) && t > 0) return { name: o[1].trim(), count: t };
  }
  return { name: n, count: 1 };
}
function p(r) {
  const n = [];
  for (const o of r.split(/[,，]/)) {
    const { name: t, count: e } = m(o);
    if (!(!t || e <= 0)) for (let u = 0; u < e; u++) n.push(t);
  }
  return n;
}
function d(r) {
  const n = s.exec(r.trim());
  if (!n) return r;
  const o = n[1].trim(),
    t = p(n[2]);
  return t.length === 0 ? r : f(o, t);
}
export { d, m as e, f };
