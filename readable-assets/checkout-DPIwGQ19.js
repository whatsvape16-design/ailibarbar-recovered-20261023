import { o } from "./index-Bwn3vGAd.js";
const f = "Regular Post",
  e = 10,
  i = 0,
  s = 20;
function t(r) {
  return r <= 0 ? 0 : r >= s ? i : e;
}
function A(r) {
  const n = t(r);
  return n <= 0 && r > 0 ? "Free" : o(n);
}
function c(r) {
  if (r <= 0) return null;
  if (r >= s) return `Free Regular Post unlocked (${s}+ devices).`;
  const n = s - r;
  return `Add ${n} more device${n === 1 ? "" : "s"} for free shipping.`;
}
function P(r, n, a = 0) {
  return n <= 0 ? Math.max(0, r - a) : Math.max(0, r + t(n) - a);
}
const m = {
    accountName: "XINLEI QIU",
    bsb: "063-019",
    accountNumber: "10531547",
    swift: "CTBAAU2S",
    bankName: "Commonwealth Bank of Australia",
    bankAddress:
      "Ground Floor, Tower 1, 201 Sussex Street, Sydney, NSW, 2000, Australia",
  },
  I = "Bank Transfer";
export {
  m as B,
  s as F,
  e as P,
  f as S,
  c as a,
  t as b,
  I as c,
  P as o,
  A as s,
};
