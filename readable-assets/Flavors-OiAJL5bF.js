import { q as u, j as e, L as i } from "./react-vendor-R4T0bNIa.js";
import { u as b } from "./ui-vendor-DvfZJg73.js";
import {
  G as m,
  V as v,
  aA as x,
  d as f,
  c as y,
  l as N,
} from "./index-Bwn3vGAd.js";
import { P as j } from "./ProductPrice-BJiKzrJ6.js";
import { F as k } from "./FlavourFamilyNav-wkokEJYz.js";
import { C } from "./CatalogueImage-3ZWkwIDw.js";
import "./query-vendor-L3kbwvGJ.js";
import "./icons-vendor-BquxQ5DR.js";
import "./utils-CytzSlOG.js";
const p = ({ f: s, revealIndex: r, goToProduct: a }) => {
    const o = u(),
      { addToCart: t, buyNow: l } = f(),
      n = y(s),
      d = { slug: s.slug, name: s.name, price: s.price, image: s.img },
      g = () => {
        if (s.isCustomPack) {
          a(s.slug);
          return;
        }
        t(d);
      },
      h = () => {
        if (s.isCustomPack) {
          a(s.slug);
          return;
        }
        (b.dismiss(), l(d), o("/checkout"));
      };
    return e.jsxs("article", {
      className:
        "reveal luxe-card rounded-xl sm:rounded-2xl overflow-hidden group flex flex-col min-w-0",
      style: { transitionDelay: `${r * 80}ms` },
      children: [
        e.jsxs(i, {
          to: `/product/${s.slug}`,
          onClick: (c) => {
            (c.preventDefault(), a(s.slug));
          },
          className:
            "relative aspect-square bg-gradient-to-br from-secondary to-background overflow-hidden block text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "aria-label": `View ${n} product page`,
          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
              style: { background: "var(--gradient-gold-soft)" },
            }),
            e.jsx(C, {
              src: s.img,
              srcSet: s.imgSrcSet,
              alt: s.imgAlt ?? N(n),
              className:
                "w-full h-full object-contain p-3 sm:p-5 md:p-6 group-hover:scale-110 transition-transform duration-700",
            }),
            e.jsx("span", {
              className:
                "absolute top-2 left-2 sm:top-3 sm:left-3 text-[8px] sm:text-[10px] uppercase tracking-widest px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-gold bg-background/60 backdrop-blur text-primary max-w-[calc(100%-0.75rem)] truncate",
              children: s.tag,
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "p-2.5 sm:p-4 md:p-6 flex flex-col gap-2 sm:gap-3 md:gap-4 flex-1",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col gap-1 min-[480px]:flex-row min-[480px]:items-start min-[480px]:justify-between gap-x-2",
              children: [
                e.jsx(i, {
                  to: `/product/${s.slug}`,
                  onClick: (c) => {
                    (c.preventDefault(), a(s.slug));
                  },
                  className:
                    "text-sm min-[480px]:text-base sm:text-lg font-bold leading-snug break-words hover:text-primary transition-colors min-w-0 line-clamp-2",
                  children: n,
                }),
                s.isPlaceholder
                  ? e.jsx("span", {
                      className:
                        "shrink-0 text-sm sm:text-base md:text-lg font-bold text-muted-foreground",
                      children: "TBA",
                    })
                  : e.jsx(j, {
                      price: s.price,
                      originalPrice: s.originalPrice,
                      className: "shrink-0",
                      priceClassName: "text-sm sm:text-base md:text-lg",
                    }),
              ],
            }),
            e.jsx("p", {
              className:
                "text-[11px] sm:text-xs text-muted-foreground leading-snug line-clamp-2 min-h-[2lh]",
              children: s.isCustomPack
                ? `${s.customPackSize ?? 5} pcs · Choose any ${s.customPackSize ?? 5} flavours`
                : "9000 puffs · Smart display · Mesh coil",
            }),
            s.inStock
              ? e.jsxs("div", {
                  className: "mt-auto grid grid-cols-2 gap-2",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      className:
                        "min-h-[44px] py-2.5 rounded-full border border-gold text-primary font-semibold uppercase tracking-wide text-[10px] sm:text-xs hover:bg-gold/15 active:bg-gold/25 transition-all",
                      onClick: g,
                      children: s.isCustomPack ? "Choose" : "Add",
                    }),
                    e.jsx("button", {
                      type: "button",
                      className:
                        "min-h-[44px] py-2.5 rounded-full bg-gold text-primary-foreground font-semibold uppercase tracking-wide text-[10px] sm:text-xs hover:opacity-95 active:opacity-90 transition-all",
                      onClick: h,
                      children: s.isCustomPack ? "Select" : "Buy now",
                    }),
                  ],
                })
              : e.jsx("button", {
                  type: "button",
                  disabled: !0,
                  className:
                    "mt-auto w-full min-h-[44px] py-2.5 rounded-full border border-gold text-primary font-semibold uppercase tracking-wider text-xs opacity-45 pointer-events-none",
                  children: s.isPlaceholder ? "Coming soon" : "Unavailable",
                }),
          ],
        }),
      ],
    });
  },
  D = () => {
    const s = u(),
      r = (t) => {
        s(`/product/${t}`, { state: { homeScrollY: window.scrollY } });
      },
      a = [
        ...m.filter((t) => t.inStock && !t.isPlaceholder && !t.isCustomPack),
        ...m.filter((t) => !t.inStock && !t.isPlaceholder && !t.isCustomPack),
      ],
      o = m.filter((t) => t.isPlaceholder && !t.isCustomPack);
    return e.jsxs("section", {
      id: "flavors",
      className:
        "pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-28 relative scroll-mt-20",
      children: [
        e.jsx("div", {
          className: "absolute inset-0 -z-10 opacity-50",
          style: { background: "var(--gradient-radial)" },
        }),
        e.jsxs("div", {
          className: "container",
          children: [
            e.jsxs("div", {
              className:
                "text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-16 reveal px-1",
              children: [
                e.jsx("p", {
                  className:
                    "text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-3 sm:mb-4",
                  children: "The Collection",
                }),
                e.jsxs("h2", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                  children: [
                    "Explore Ingot 9000 ",
                    e.jsx("span", {
                      className: "text-gold",
                      children: "flavours",
                    }),
                  ],
                }),
                e.jsxs("p", {
                  className:
                    "text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base px-2",
                  children: [
                    v,
                    " flavours in stock",
                    x.length ? ` (${x.length} temporarily sold out)` : "",
                    ". Hardware is identical — only the e-liquid changes.",
                  ],
                }),
                e.jsx("div", {
                  className: "gold-divider mt-6 sm:mt-8 max-w-xs mx-auto",
                }),
              ],
            }),
            e.jsx(k, {}),
            e.jsx("div", {
              className:
                "grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8",
              children: a.map((t, l) =>
                e.jsx(p, { f: t, revealIndex: l, goToProduct: r }, t.slug),
              ),
            }),
            o.length > 0
              ? e.jsx("div", {
                  className: "mt-6 sm:mt-8 md:mt-10",
                  children: e.jsx("div", {
                    className:
                      "grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:gap-8 lg:max-w-4xl lg:mx-auto",
                    children: o.map((t, l) =>
                      e.jsx(
                        p,
                        { f: t, revealIndex: a.length + l, goToProduct: r },
                        t.slug,
                      ),
                    ),
                  }),
                })
              : null,
            e.jsxs("div", {
              className: "text-center mt-8 sm:mt-12 reveal",
              children: [
                e.jsx(i, {
                  to: "/ingot-9000",
                  className:
                    "inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition-colors",
                  children: "Alibarbar Ingot 9000 Australia →",
                }),
                e.jsx("span", {
                  className: "mx-2 text-muted-foreground",
                  children: "·",
                }),
                e.jsx(i, {
                  to: "/flavours",
                  className:
                    "inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition-colors",
                  children: "Compare taste notes →",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { D as Flavors };
