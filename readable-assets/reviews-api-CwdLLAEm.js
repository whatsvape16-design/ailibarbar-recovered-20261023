import { j as r } from "./react-vendor-R4T0bNIa.js";
import { c as n } from "./utils-CytzSlOG.js";
import { a3 as o } from "./icons-vendor-BquxQ5DR.js";
const f = { sm: "w-3.5 h-3.5", md: "w-4 h-4", lg: "w-5 h-5" },
  d = "fill-primary text-primary",
  m = "fill-transparent text-muted-foreground/35",
  j = ({ value: e, size: t = "md", className: a }) => {
    const s = f[t],
      i = Math.max(0, Math.min(5, e));
    return r.jsx("div", {
      className: n("inline-flex items-center gap-0.5", a),
      role: "img",
      "aria-label": `${i} out of 5 stars`,
      children: [1, 2, 3, 4, 5].map((l) => {
        const h = Math.max(0, Math.min(1, i - (l - 1))),
          p = h >= 1,
          w = h <= 0;
        return p
          ? r.jsx(o, { className: n(s, d), strokeWidth: 1.5 }, l)
          : w
            ? r.jsx(o, { className: n(s, m), strokeWidth: 1.5 }, l)
            : r.jsxs(
                "span",
                {
                  className: "relative inline-flex",
                  children: [
                    r.jsx(o, { className: n(s, m), strokeWidth: 1.5 }),
                    r.jsx("span", {
                      className: "absolute inset-0 overflow-hidden",
                      style: { width: `${h * 100}%` },
                      children: r.jsx(o, {
                        className: n(s, d),
                        strokeWidth: 1.5,
                      }),
                    }),
                  ],
                },
                l,
              );
      }),
    });
  },
  v = ({ value: e, onChange: t, size: a = "lg" }) => {
    const s = f[a];
    return r.jsx("div", {
      className: "inline-flex items-center gap-1",
      role: "radiogroup",
      "aria-label": "Your rating",
      children: [1, 2, 3, 4, 5].map((i) =>
        r.jsx(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": e === i,
            "aria-label": `${i} star${i > 1 ? "s" : ""}`,
            onClick: () => t(i),
            className: "p-1 transition-transform hover:scale-110",
            children: r.jsx(o, {
              className: n(s, i <= e ? d : m),
              strokeWidth: 1.5,
            }),
          },
          i,
        ),
      ),
    });
  };
async function c(e) {
  try {
    return (await e.json()).error ?? `Request failed (${e.status})`;
  } catch {
    return `Request failed (${e.status})`;
  }
}
async function k(e) {
  const t = e ? `/api/reviews?slug=${encodeURIComponent(e)}` : "/api/reviews",
    a = await fetch(t, { cache: "no-store" });
  if (!a.ok) throw new Error(await c(a));
  return await a.json();
}
async function N(e, t) {
  const a = await fetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${e}`,
    },
    body: JSON.stringify(t),
  });
  if (!a.ok) throw new Error(await c(a));
}
async function $(e) {
  const t = await fetch("/api/reviews", {
    headers: { Authorization: `Bearer ${e}` },
    cache: "no-store",
  });
  if (!t.ok) throw new Error(await c(t));
  return await t.json();
}
async function g(e, t, a) {
  const s = await fetch("/api/reviews", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${e}`,
    },
    body: JSON.stringify({ id: t, status: a }),
  });
  if (!s.ok) throw new Error(await c(s));
}
async function E(e, t) {
  const a = await fetch(`/api/reviews?id=${encodeURIComponent(t)}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${e}` },
  });
  if (!a.ok) throw new Error(await c(a));
}
export { j as S, $ as a, v as b, E as d, k as f, g as m, N as s };
