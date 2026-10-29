import { j as a, L as m, r as f } from "./react-vendor-R4T0bNIa.js";
import { I as k } from "./ingot-hub-CmU4AF5o.js";
import { ao as h } from "./index-Bwn3vGAd.js";
import { M as c } from "./ManufacturerVerifyText-Dr_h7BDx.js";
const b = /Alibarbar Ingot 9000/i,
  j = /Ingot 9000/i;
function d(r, s) {
  for (let l = 0; l < r.length; l++) {
    const n = r[l].paragraphs;
    for (let e = 0; e < n.length; e++)
      if (s.test(n[e])) return { section: l, paragraph: e, pattern: s };
  }
  return null;
}
function I(r) {
  return d(r, b) ?? d(r, j);
}
function x({ text: r, pattern: s = b }) {
  const l = s.exec(r);
  if (!l) return a.jsx(a.Fragment, { children: r });
  const n = l.index,
    e = n + l[0].length;
  return a.jsxs(a.Fragment, {
    children: [
      r.slice(0, n),
      a.jsx(m, {
        to: k,
        className: "text-primary underline underline-offset-2 hover:text-gold",
        "data-hub-link": "ingot-9000",
        children: r.slice(n, e),
      }),
      r.slice(e),
    ],
  });
}
const g = /\[([^\]]+)\]\(([^)\s]+)\)/g;
function p(r, s = {}) {
  const l = s.linkHub ?? !1;
  if (!r.includes("](") && !l) return r.includes(h) ? a.jsx(c, { text: r }) : r;
  const n = [];
  let e = 0;
  g.lastIndex = 0;
  for (const t of r.matchAll(g)) {
    const u = t.index ?? 0;
    (u > e && n.push({ kind: "text", text: r.slice(e, u) }),
      n.push({ kind: "link", label: t[1], href: t[2] }),
      (e = u + t[0].length));
  }
  (e < r.length && n.push({ kind: "text", text: r.slice(e) }),
    n.length === 0 && n.push({ kind: "text", text: r }));
  let o = !1;
  return a.jsx(a.Fragment, {
    children: n.map((t, u) => {
      if (t.kind === "link") {
        const i = "text-primary underline underline-offset-2 hover:text-gold";
        return t.href === h
          ? a.jsx(
              "a",
              {
                href: t.href,
                target: "_blank",
                rel: "nofollow noopener",
                className: `${i} break-all`,
                children: t.label,
              },
              u,
            )
          : t.href.startsWith("/") && !t.href.startsWith("//")
            ? a.jsx(m, { to: t.href, className: i, children: t.label }, u)
            : a.jsx(f.Fragment, { children: t.label }, u);
      }
      return t.text.includes(h)
        ? a.jsx(c, { text: t.text }, u)
        : l && !o && s.hubPattern && s.hubPattern.test(t.text)
          ? ((o = !0), a.jsx(x, { text: t.text, pattern: s.hubPattern }, u))
          : a.jsx(f.Fragment, { children: t.text }, u);
    }),
  });
}
function E(r, s, l, n) {
  const e = !!(n && n.section === s && n.paragraph === l);
  return r.includes("](")
    ? p(r, { linkHub: e, hubPattern: n == null ? void 0 : n.pattern })
    : e && n
      ? a.jsx(x, { text: r, pattern: n.pattern })
      : r;
}
export { p as a, I as f, E as r };
