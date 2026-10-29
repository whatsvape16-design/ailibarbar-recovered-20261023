import { j as e, L as s } from "./react-vendor-R4T0bNIa.js";
import { u as t, a1 as o, S as i, N as m, F as l } from "./index-Bwn3vGAd.js";
import { c as n } from "./comparisons-BN826Jyq.js";
import { c as d } from "./content-figures-Bki_EQx4.js";
import { C as c } from "./ContentFigure-DsDVXXXr.js";
import { a0 as p, w as x } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
import "./CatalogueImage-3ZWkwIDw.js";
const w = () => {
  t();
  const r = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Alibarbar Vape Comparisons",
        description:
          "SKU-vs-SKU comparisons: Alibarbar Ingot 9000 against named competitor devices, plus flavour-vs-flavour pages.",
        url: "https://www.ailibarbar.com/compare",
      },
      o([
        { name: "Home", path: "/" },
        { name: "Compare", path: "/compare" },
      ]),
    ],
  };
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx(i, {
        title: "Alibarbar SKU Comparisons | Ingot 9000 vs Named Devices",
        description:
          "Side-by-side Alibarbar Ingot 9000 comparisons vs IGET, HQD, Gunnpod, KUZ and Geek Bar: puffs, size, coil, display and who each device suits.",
        path: "/compare",
        jsonLd: r,
      }),
      e.jsx(m, {}),
      e.jsx("main", {
        className: "pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24",
        children: e.jsxs("div", {
          className: "container max-w-4xl",
          children: [
            e.jsxs("nav", {
              "aria-label": "Breadcrumb",
              className: "text-sm text-muted-foreground mb-6",
              children: [
                e.jsx(s, {
                  to: "/",
                  className: "hover:text-primary",
                  children: "Home",
                }),
                e.jsx("span", { className: "mx-2", children: "/" }),
                e.jsx("span", {
                  className: "text-foreground",
                  children: "Compare",
                }),
              ],
            }),
            e.jsxs("header", {
              className: "mb-10 sm:mb-14 max-w-2xl",
              children: [
                e.jsx("p", {
                  className:
                    "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                  children: "Compare",
                }),
                e.jsxs("h1", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                  children: [
                    "Alibarbar vs ",
                    e.jsx("span", {
                      className: "text-gold",
                      children: "named SKUs",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className:
                    "text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed",
                  children:
                    "Side-by-side tables for the Alibarbar Ingot 9000 against a named competitor device — not a whole brand catalogue — plus flavour SKU vs SKU pages on the same hardware.",
                }),
                e.jsx(c, { ...d() }),
              ],
            }),
            e.jsx("div", {
              className: "grid sm:grid-cols-2 gap-4 sm:gap-6",
              children: n.map((a) =>
                e.jsxs(
                  s,
                  {
                    to: `/compare/${a.slug}`,
                    className:
                      "reveal group rounded-2xl border border-gold/20 bg-card/60 p-6 flex flex-col gap-3 hover:border-gold/50 transition-colors",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-xs uppercase tracking-wide text-primary",
                        children: [
                          e.jsx(p, { className: "w-4 h-4" }),
                          a.leftLabel ?? "Alibarbar Ingot 9000",
                          " vs ",
                          a.rightLabel ?? a.competitor,
                        ],
                      }),
                      e.jsx("h2", {
                        className:
                          "text-lg font-bold leading-snug group-hover:text-primary transition-colors",
                        children: a.title,
                      }),
                      e.jsx("p", {
                        className:
                          "text-sm text-muted-foreground leading-relaxed flex-1",
                        children: a.description,
                      }),
                      e.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1 text-sm font-semibold text-gold",
                        children: [
                          "Read comparison ",
                          e.jsx(x, {
                            className:
                              "w-4 h-4 group-hover:translate-x-1 transition-transform",
                          }),
                        ],
                      }),
                    ],
                  },
                  a.slug,
                ),
              ),
            }),
          ],
        }),
      }),
      e.jsx(l, {}),
    ],
  });
};
export { w as default };
