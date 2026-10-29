import { j as e, L as n } from "./react-vendor-R4T0bNIa.js";
import { P as d } from "./ProductPrice-BJiKzrJ6.js";
import { g as c, a7 as r, l as x } from "./index-Bwn3vGAd.js";
import { C as g } from "./CatalogueImage-3ZWkwIDw.js";
import { w as p } from "./icons-vendor-BquxQ5DR.js";
import "./utils-CytzSlOG.js";
import "./query-vendor-L3kbwvGJ.js";
const u = {
  3: "A small mixed starter — any three flavours, repeats allowed.",
  5: "A compact mixed selection — any five flavours, repeats allowed.",
  10: "A larger mixed pack for exploring more of the Ingot 9000 range.",
  20: "Full mixed selection with free Regular Post shipping included.",
};
function y({
  heading: a = "Build your Ingot 9000 pack",
  intro:
    l = "Choose a pack size, then mix and match from the current Ingot 9000 flavour range. Repeats are allowed.",
}) {
  const o = c();
  return e.jsx("section", {
    id: "build-pack",
    className: "py-12 sm:py-16 md:py-20 relative scroll-mt-24",
    children: e.jsxs("div", {
      className: "container",
      children: [
        e.jsxs("div", {
          className: "text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-1",
          children: [
            e.jsx("p", {
              className:
                "text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-3 font-semibold",
              children: "Choose your pack",
            }),
            e.jsx("h2", {
              className:
                "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
              children: a,
            }),
            e.jsx("p", {
              className:
                "text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base",
              children: l,
            }),
            e.jsxs("p", {
              className: "mt-2 text-xs sm:text-sm text-muted-foreground",
              children: [
                "Singles from A$",
                r.single,
                ". Packs from A$",
                r.pack3,
                ".",
              ],
            }),
            e.jsx("div", {
              className: "gold-divider mt-6 sm:mt-8 max-w-xs mx-auto",
            }),
          ],
        }),
        e.jsx("div", {
          className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
          children: o.map((s) => {
            const t = s.customPackSize ?? 5,
              i = Number.parseFloat(s.price) / t,
              m = `A$${Math.round(i)}`;
            return e.jsxs(
              n,
              {
                to: `/product/${s.slug}`,
                className:
                  "luxe-card rounded-2xl overflow-hidden group flex flex-col border border-gold/20",
                children: [
                  e.jsxs("div", {
                    className:
                      "relative aspect-[4/3] bg-gradient-to-br from-secondary to-background",
                    children: [
                      e.jsx(g, {
                        src: s.img,
                        srcSet: s.imgSrcSet,
                        alt: s.imgAlt ?? x(s.name),
                        className:
                          "w-full h-full object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500",
                      }),
                      e.jsx("span", {
                        className:
                          "absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-gold bg-background/70 text-primary font-semibold",
                        children: s.tag,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "p-4 sm:p-5 flex flex-col gap-2 border-t border-gold/15 flex-1",
                    children: [
                      e.jsx("h3", {
                        className:
                          "text-lg sm:text-xl font-bold group-hover:text-primary transition-colors",
                        children: s.name,
                      }),
                      e.jsx("p", {
                        className:
                          "text-sm text-muted-foreground leading-relaxed flex-1",
                        children: u[t] ?? s.excerpt,
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-wrap items-end justify-between gap-2 pt-1",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx(d, {
                                price: s.price,
                                originalPrice: s.originalPrice,
                                priceClassName: "text-xl sm:text-2xl",
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-[11px] text-muted-foreground mt-0.5",
                                children: [t, " devices"],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col items-end gap-0.5",
                            children: [
                              e.jsxs("p", {
                                className:
                                  "text-lg font-bold text-gold leading-none",
                                children: [
                                  m,
                                  e.jsx("span", {
                                    className:
                                      "text-[11px] font-normal text-muted-foreground ml-1",
                                    children: "each",
                                  }),
                                ],
                              }),
                              e.jsxs("span", {
                                className:
                                  "inline-flex items-center gap-1 text-sm font-semibold text-gold",
                                children: [
                                  "Build pack ",
                                  e.jsx(p, {
                                    className:
                                      "w-4 h-4 group-hover:translate-x-1 transition-transform",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              s.slug,
            );
          }),
        }),
      ],
    }),
  });
}
export { y as IngotPackBuilder };
