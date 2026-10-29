import { j as e, L as t } from "./react-vendor-R4T0bNIa.js";
import {
  G as r,
  ac as n,
  X as s,
  T as m,
  ag as c,
  ad as d,
  a1 as x,
  u as p,
  S as g,
  N as u,
  l as h,
  c as l,
  F as b,
} from "./index-Bwn3vGAd.js";
import { P as f } from "./ProductPrice-BJiKzrJ6.js";
import { F as j } from "./FlavourFamilyNav-wkokEJYz.js";
import { IngotPackBuilder as N } from "./IngotPackBuilder-duO6IeYR.js";
import { C as v } from "./CatalogueImage-3ZWkwIDw.js";
import { w as k } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
import "./utils-CytzSlOG.js";
const o = [
    ...r.filter((a) => !a.isPlaceholder && a.isCustomPack && a.inStock),
    ...r.filter((a) => !a.isPlaceholder && !a.isCustomPack && a.inStock),
    ...r.filter((a) => !a.isPlaceholder && !a.isCustomPack && !a.inStock),
  ],
  A = o.filter((a) => !a.isCustomPack),
  w = {
    "@context": "https://schema.org",
    "@graph": [
      ...n(),
      {
        "@type": "CollectionPage",
        "@id": s.webpageId("/shop"),
        name: "Alibarbar Australia Online Store",
        description:
          "Shop Alibarbar vapes online in Australia — authentic Ingot 9000 flavours and custom packs with clear pricing, stock status and local shipping.",
        url: `${m}/shop`,
        isPartOf: { "@id": s.websiteId },
        about: [{ "@id": s.brandId }, { "@id": s.productGroupId }],
        mainEntity: { "@id": s.storeId },
        publisher: { "@id": s.organizationId },
        inLanguage: "en-AU",
      },
      c(),
      {
        "@type": "ItemList",
        name: "Alibarbar vape shop Australia — products for sale",
        numberOfItems: o.length,
        itemListElement: o.map((a, i) => d(a, i + 1)),
      },
      x([
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
      ]),
    ],
  },
  T = () => (
    p(),
    e.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        e.jsx(g, {
          title:
            "Shop Alibarbar Ingot 9000 Australia | A$39 Singles, Packs from A$110",
          description:
            "Shop authentic Alibarbar Ingot 9000 online in Australia: A$39 singles plus 3/5/10/20 custom packs. Browse 11 flavours with Australia-wide delivery. 18+.",
          path: "/shop",
          jsonLd: w,
        }),
        e.jsx(u, {}),
        e.jsxs("main", {
          className: "pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24",
          children: [
            e.jsxs("div", {
              className: "container max-w-6xl",
              children: [
                e.jsxs("nav", {
                  "aria-label": "Breadcrumb",
                  className: "text-sm text-muted-foreground mb-6",
                  children: [
                    e.jsx(t, {
                      to: "/",
                      className: "hover:text-primary",
                      children: "Home",
                    }),
                    e.jsx("span", { className: "mx-2", children: "/" }),
                    e.jsx("span", {
                      className: "text-foreground",
                      children: "Shop",
                    }),
                  ],
                }),
                e.jsxs("header", {
                  className: "mb-10 sm:mb-14 max-w-2xl",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                      children: "Alibarbar vape shop",
                    }),
                    e.jsxs("h1", {
                      className:
                        "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                      children: [
                        "Alibarbar Australia ",
                        e.jsx("span", {
                          className: "text-gold",
                          children: "online store",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed",
                      children:
                        "Shop Alibarbar Ingot 9000 online in Australia. Build a mixed pack or pick a single flavour — authentic devices, clear pricing, then check out with secure bank transfer. Adults 18+ only.",
                    }),
                    e.jsxs("p", {
                      className: "mt-3 text-sm text-muted-foreground",
                      children: [
                        "Prefer the full product hub?",
                        " ",
                        e.jsx(t, {
                          to: "/ingot-9000",
                          className:
                            "text-primary font-semibold hover:text-gold",
                          children: "Alibarbar Ingot 9000 Australia",
                        }),
                        ". Taste notes live in the",
                        " ",
                        e.jsx(t, {
                          to: "/flavours",
                          className:
                            "text-primary font-semibold hover:text-gold",
                          children: "flavour guide",
                        }),
                        ".",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(N, { heading: "Build an Ingot 9000 pack" }),
            e.jsxs("div", {
              className: "container max-w-6xl",
              children: [
                e.jsx("h2", {
                  className: "text-2xl sm:text-3xl font-extrabold mb-6",
                  children: "Single flavours",
                }),
                e.jsx(j, {}),
                e.jsx("div", {
                  className:
                    "grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8",
                  children: A.map((a) =>
                    e.jsxs(
                      t,
                      {
                        to: `/product/${a.slug}`,
                        className:
                          "reveal group rounded-xl sm:rounded-2xl border border-gold/20 bg-card/60 overflow-hidden flex flex-col min-w-0 hover:border-gold/50 transition-colors",
                        children: [
                          e.jsxs("div", {
                            className:
                              "relative aspect-square bg-gradient-to-br from-secondary to-background",
                            children: [
                              e.jsx(v, {
                                src: a.img,
                                srcSet: a.imgSrcSet,
                                alt: h(l(a)),
                                className:
                                  "w-full h-full object-contain p-3 sm:p-5 group-hover:scale-105 transition-transform duration-500",
                              }),
                              a.inStock
                                ? null
                                : e.jsx("span", {
                                    className:
                                      "absolute top-2 left-2 sm:top-3 sm:left-3 rounded-full bg-background/90 border border-gold/30 px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] uppercase tracking-wide text-muted-foreground",
                                    children: "Out of stock",
                                  }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "p-2.5 sm:p-4 md:p-5 flex flex-col gap-1.5 sm:gap-2 border-t border-gold/15 flex-1",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[8px] sm:text-[10px] uppercase tracking-wide text-primary truncate",
                                children: a.tag,
                              }),
                              e.jsx("h3", {
                                className:
                                  "text-sm sm:text-base md:text-lg font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors",
                                children: l(a),
                              }),
                              e.jsx(f, {
                                price: a.price,
                                originalPrice: a.originalPrice,
                                className: "text-sm",
                                priceClassName: "text-sm sm:text-base",
                              }),
                              e.jsxs("span", {
                                className:
                                  "inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-gold mt-auto pt-1",
                                children: [
                                  a.inStock ? "View product" : "View details",
                                  e.jsx(k, {
                                    className:
                                      "w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform",
                                  }),
                                ],
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
          ],
        }),
        e.jsx(b, {}),
      ],
    })
  );
export { T as default, w as shopJsonLd };
