import { j as e } from "./react-vendor-R4T0bNIa.js";
function i({ title: a, url: t, author: s = "Jason Smith", dateModified: r }) {
  const o = r ? new Date(r).getFullYear() : new Date().getFullYear(),
    l = `${s} (${o}). "${a}." Alibarbar Australia. ${t}`;
  return e.jsxs("aside", {
    className:
      "rounded-2xl border border-dashed border-gold/30 bg-secondary/30 p-5 sm:p-6",
    "aria-label": "How to cite",
    children: [
      e.jsx("h2", {
        className:
          "text-sm font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3",
        children: "Cite this page",
      }),
      e.jsx("p", {
        className:
          "text-sm text-foreground/90 leading-relaxed font-mono break-all",
        children: l,
      }),
    ],
  });
}
export { i as C };
