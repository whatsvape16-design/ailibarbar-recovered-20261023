import {
  r as a,
  j as e,
  L as o,
  i as ce,
  t as ne,
  q as de,
  k as me,
  N as xe,
} from "./react-vendor-R4T0bNIa.js";
import { u as pe } from "./ui-vendor-DvfZJg73.js";
import {
  g as ue,
  a as H,
  c as f,
  u as ge,
  b as he,
  d as be,
  e as fe,
  f as ve,
  j as je,
  h as ye,
  i as Ne,
  k as we,
  S as ke,
  l as I,
  p as Se,
  N as Pe,
  Q as Ae,
  R as Ce,
  m as Re,
  n as Ie,
  F as _e,
} from "./index-Bwn3vGAd.js";
import { P as q } from "./ProductPrice-BJiKzrJ6.js";
import { f as Be, S as Fe } from "./reviews-api-CwdLLAEm.js";
import {
  g as Te,
  a as $e,
  m as Le,
  b as Me,
  R as qe,
  c as Ee,
  h as ze,
  d as He,
  t as Ue,
} from "./ReviewForm-DbPvxTEy.js";
import { C as E, a as Oe } from "./CatalogueImage-3ZWkwIDw.js";
import { g as U, a as Qe } from "./reviews-DJ7_M9DW.js";
import {
  d as Ve,
  a as We,
  b as Ke,
  c as Ye,
  C as Ge,
} from "./ContentByline-DZdt81X3.js";
import { B as De } from "./BestFor-2eWEyLzQ.js";
import { K as Je } from "./KeyTakeaways-BS73GR4f.js";
import { M as Ze } from "./ManufacturerVerifyText-Dr_h7BDx.js";
import { c as Xe } from "./comparisons-BN826Jyq.js";
import {
  S as es,
  a as ss,
  b as ts,
  c as as,
  d as rs,
} from "./select-CFS8SIyg.js";
import { I as ls } from "./IngotSpecStrip-DlvK-vKx.js";
import { I as _ } from "./ingot-hub-CmU4AF5o.js";
import { f as os } from "./custom-pack-CSh3X_LM.js";
import { B as z } from "./BackAwareLink-Brjggm6m.js";
import {
  A as is,
  b as cs,
  c as ns,
  d as O,
  e as ds,
  f as ms,
  g as xs,
  T as ps,
} from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
import "./utils-CytzSlOG.js";
import "./dialog-Czj21GWi.js";
import "./AuthModal-DnA7dnTh.js";
import "./button-DuRxsHai.js";
import "./index-BwobEAja.js";
import "./label--J037EDp.js";
import "./textarea-v45I66dK.js";
const us = ({ slug: c, onAggregate: n, onSchemaData: s }) => {
    const r = a.useMemo(() => Te(c), [c]),
      m = a.useMemo(() => $e(c), [c]),
      [l, P] = a.useState([]),
      [g, N] = a.useState({ count: 0, average: 0 }),
      [A, w] = a.useState(!0),
      d = a.useMemo(() => Le(m, g), [m, g]),
      v = a.useMemo(() => Me(l, r), [l, r]),
      p = a.useCallback(async () => {
        try {
          const u = await Be(c);
          P(u.reviews);
          const k = u.aggregate.perProduct[c] ?? { count: 0, average: 0 };
          N(k);
        } catch {
        } finally {
          w(!1);
        }
      }, [c]);
    return (
      a.useEffect(() => {
        (w(!0), p());
      }, [p]),
      a.useEffect(() => {
        n == null || n(d);
      }, [n, d]),
      a.useEffect(() => {
        s == null || s(l, g);
      }, [g, l, s]),
      e.jsxs("section", {
        className:
          "mt-10 sm:mt-16 rounded-2xl sm:rounded-[1.75rem] border border-gold/25 bg-gradient-to-b from-card/70 to-background/90 p-4 sm:p-6 md:p-9",
        children: [
          e.jsx("div", {
            className:
              "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6",
            children: e.jsxs("div", {
              children: [
                e.jsx("h2", {
                  className: "text-xl sm:text-2xl font-bold",
                  children: "Customer reviews",
                }),
                e.jsxs("div", {
                  className: "mt-2 flex items-center gap-2",
                  children: [
                    e.jsx(Fe, { value: d.average || 5, size: "md" }),
                    e.jsx("span", {
                      className: "text-sm text-muted-foreground",
                      children:
                        d.count > 0
                          ? `${d.average.toFixed(1)} · ${d.count} review${d.count > 1 ? "s" : ""}`
                          : "Verified customer feedback",
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs("div", {
            className:
              "grid lg:grid-cols-[minmax(0,1fr)_360px] gap-6 lg:gap-8 items-start",
            children: [
              e.jsxs("div", {
                className: "space-y-4 order-2 lg:order-1",
                children: [
                  A && l.length === 0
                    ? e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Loading more reviews…",
                      })
                    : null,
                  v.map((u) =>
                    e.jsx(qe, { review: u, variant: "showcase" }, u.id),
                  ),
                ],
              }),
              e.jsx("div", {
                className: "order-1 lg:order-2",
                children: e.jsx(Ee, {
                  productSlug: c,
                  onSubmitted: () => void p(),
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  gs = [
    { label: "Alibarbar Ingot 9000 Australia hub", to: "/ingot-9000" },
    { label: "Shipping & delivery", to: "/shipping" },
    {
      label: "How to spot fakes",
      to: "/guides/how-to-spot-fake-alibarbar-ingot",
    },
    {
      label: "Alibarbar authentication",
      to: "/guides/alibarbar-authentication",
    },
    {
      label: "Alibarbar vape not working",
      to: "/guides/alibarbar-vape-not-working",
    },
    { label: "Why trust us", to: "/why-trust-us" },
    {
      label: "Price guide (AU)",
      to: "/guides/alibarbar-ingot-9000-price-guide-australia",
    },
  ];
function hs({ productSlug: c, productName: n, isCustomPack: s }) {
  const r = s ? void 0 : U(c),
    m = Xe.slice(0, 3).map((l) => ({
      label: `Alibarbar vs ${l.competitor}`,
      to: `/compare/${l.slug}`,
    }));
  return e.jsxs("section", {
    className:
      "mt-8 sm:mt-12 rounded-2xl border border-gold/25 bg-card/50 p-5 sm:p-7",
    "aria-label": "Related guides and trust pages",
    children: [
      e.jsx("h2", {
        className: "text-lg sm:text-xl font-bold mb-2",
        children: "Guides, reviews & trust",
      }),
      e.jsxs("p", {
        className: "text-sm text-muted-foreground mb-5 leading-relaxed",
        children: [
          "Editorial resources for ",
          n,
          " — authenticity guidance, comparisons, and how to buy with confidence.",
        ],
      }),
      e.jsxs("div", {
        className: "grid sm:grid-cols-3 gap-5 sm:gap-6",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h3", {
                className:
                  "text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3",
                children: "Editorial",
              }),
              e.jsxs("ul", {
                className: "space-y-2 text-sm",
                children: [
                  r
                    ? e.jsx("li", {
                        children: e.jsxs(o, {
                          to: `/reviews/${r.slug}`,
                          className:
                            "text-primary font-semibold hover:text-gold",
                          children: [n, " review"],
                        }),
                      })
                    : e.jsx("li", {
                        children: e.jsx(o, {
                          to: "/reviews/alibarbar-ingot-9000-review",
                          className:
                            "text-primary font-semibold hover:text-gold",
                          children: "Ingot 9000 device review",
                        }),
                      }),
                  s
                    ? null
                    : e.jsx("li", {
                        children: e.jsx(o, {
                          to: `/flavours/${c}`,
                          className:
                            "text-primary font-semibold hover:text-gold",
                          children: "Taste profile guide",
                        }),
                      }),
                  e.jsx("li", {
                    children: e.jsx(o, {
                      to: "/guides/alibarbar-buying-guide-australia",
                      className: "text-primary font-semibold hover:text-gold",
                      children: "Australia buying guide",
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("h3", {
                className:
                  "text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3",
                children: "Compare",
              }),
              e.jsxs("ul", {
                className: "space-y-2 text-sm",
                children: [
                  m.map((l) =>
                    e.jsx(
                      "li",
                      {
                        children: e.jsx(o, {
                          to: l.to,
                          className:
                            "text-primary font-semibold hover:text-gold",
                          children: l.label,
                        }),
                      },
                      l.to,
                    ),
                  ),
                  e.jsx("li", {
                    children: e.jsx(o, {
                      to: "/compare/alibarbar-ingot-9000-vs-iget-one",
                      className: "text-primary font-semibold hover:text-gold",
                      children: "Ingot 9000 vs IGET One",
                    }),
                  }),
                  e.jsx("li", {
                    children: e.jsx(o, {
                      to: "/compare",
                      className: "text-muted-foreground hover:text-primary",
                      children: "All comparisons →",
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("h3", {
                className:
                  "text-xs uppercase tracking-[0.2em] text-gold font-bold mb-3",
                children: "Shipping & authenticity",
              }),
              e.jsx("ul", {
                className: "space-y-2 text-sm",
                children: gs.map((l) =>
                  e.jsx(
                    "li",
                    {
                      children: e.jsx(o, {
                        to: l.to,
                        className: "text-primary font-semibold hover:text-gold",
                        children: l.label,
                      }),
                    },
                    l.to,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function bs({ currentSlug: c, isCustomPack: n }) {
  const s = n ? ue() : H();
  return s.length < 2
    ? null
    : e.jsxs("div", {
        className: "pt-1",
        children: [
          e.jsx("p", {
            className:
              "text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-primary/80 font-semibold mb-2",
            children: n ? "Other pack sizes" : "Other Ingot 9000 flavours",
          }),
          e.jsx("ul", {
            className: "flex flex-wrap gap-2",
            children: s.map((r) => {
              const m = r.slug === c;
              return e.jsx(
                "li",
                {
                  children: m
                    ? e.jsx("span", {
                        className:
                          "inline-flex items-center min-h-[36px] px-3 py-1.5 rounded-full border border-gold bg-gold/15 text-xs font-semibold text-primary",
                        children: f(r),
                      })
                    : e.jsx(o, {
                        to: `/product/${r.slug}`,
                        className:
                          "inline-flex items-center min-h-[36px] px-3 py-1.5 rounded-full border border-gold/25 text-xs font-medium text-muted-foreground hover:border-gold hover:text-primary transition-colors",
                        children: f(r),
                      }),
                },
                r.slug,
              );
            }),
          }),
        ],
      });
}
const fs = [
    { icon: ms, label: "Up to 9000 smooth puffs" },
    { icon: xs, label: "Wide flavour selection" },
    { icon: O, label: "No setup — inhale & enjoy" },
    { icon: ps, label: "Fast fulfilment" },
  ],
  Ys = () => {
    var M;
    ge();
    const c = ce(),
      { slug: n } = ne(),
      s = he(n),
      r = (s == null ? void 0 : s.customPackSize) ?? 5,
      m = (M = c.state) == null ? void 0 : M.homeScrollY,
      l =
        typeof m == "number" && !Number.isNaN(m)
          ? { homeScrollY: m, restoreHomeScroll: !0 }
          : void 0,
      P = l != null ? { homeScrollY: l.homeScrollY } : void 0,
      g = de(),
      N = me(),
      { addToCart: A, buyNow: w } = be(),
      [d, v] = a.useState(1),
      [p, u] = a.useState(() => Array(r).fill("")),
      [k, Q] = a.useState([]),
      [vs, V] = a.useState({ count: 0, average: 0 }),
      W = a.useCallback((t, i) => {
        (Q(t), V(i));
      }, []),
      B = a.useMemo(() => (s ? fe(s.slug) : []), [s]),
      K = a.useMemo(() => H(), []),
      S = a.useMemo(() => k.filter(ze), [k]),
      Y = a.useMemo(() => He(S), [S]),
      h = a.useMemo(() => (s ? U(s.slug) : void 0), [s]),
      F = a.useMemo(() => {
        const t = Ue(
          S.map((i) => ({
            author: i.author,
            rating: i.rating,
            body: i.body,
            createdAt: i.createdAt,
          })),
        );
        return h
          ? [
              {
                author: ve().name,
                rating: Qe(h),
                body: h.description,
                createdAt: h.datePublished,
                url: `/reviews/${h.slug}`,
                editorial: !0,
              },
              ...t,
            ]
          : t;
      }, [h, S]);
    if (
      (a.useLayoutEffect(() => {
        !n || N === "POP" || je(0);
      }, [N, n]),
      a.useEffect(() => {
        const t = window.history.scrollRestoration;
        return (
          (window.history.scrollRestoration = "manual"),
          () => {
            window.history.scrollRestoration = t;
          }
        );
      }, []),
      a.useEffect(() => {
        (v(1), u(Array(r).fill("")));
      }, [r, n]),
      !s)
    )
      return e.jsx(xe, { to: "/", replace: !0 });
    const x = f(s),
      T = ye(s.slug) ?? s.img,
      G = s.description
        .split(
          `

`,
        )
        .filter(Boolean),
      C = `/product/${s.slug}`,
      D =
        {
          "blackberry-ice":
            "Blackberry Ice Alibarbar Ingot 9000 — dark blackberry with a clean icy finish. Specs, taste notes and AU pricing for adults 18+.",
          "blueberry-blast":
            "Blueberry Blast Alibarbar Ingot 9000 — jammy single-note blueberry, no ice. Specs, taste notes and AU pricing for adults 18+.",
          "strawberry-lychee":
            "Strawberry Lychee Alibarbar Ingot 9000 — sweet strawberry with floral lychee. Specs, taste notes and AU pricing for adults 18+.",
        }[s.slug] ??
        (s.excerpt.length > 155
          ? `${s.excerpt.slice(0, 152).trim()}...`
          : s.excerpt),
      J = s.isCustomPack
        ? `Alibarbar Ingot 9000 ${s.customPackSize ?? ""} Pack — Mix & Match ${s.customPackSize ?? ""} Flavours | Australia`
        : `Alibarbar Ingot 9000 ${x} | Buy in Australia`,
      R = Ne(s),
      b = we(s.slug),
      Z = Ve(s, b),
      X = We(s, b),
      ee = Ke(s, b),
      se = Ye(s, b),
      $ = Y,
      te = [
        { name: "Home", path: "/" },
        { name: "Ingot 9000", path: _ },
        { name: x, path: C },
      ],
      j = !s.isCustomPack || (p.length === r && p.every(Boolean)),
      L = s.isCustomPack
        ? {
            slug: `${s.slug}-${p.map((t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-")).join("-")}`,
            name: os(s.name, p),
            price: s.price,
            image: s.img,
          }
        : { slug: s.slug, name: s.name, price: s.price, image: s.img },
      ae = () => {
        !s.inStock || !j || A({ ...L, qty: d });
      },
      re = () => {
        !s.inStock || !j || (pe.dismiss(), w({ ...L, qty: d }), g("/checkout"));
      };
    return e.jsxs("div", {
      className: "min-h-screen bg-background relative",
      children: [
        e.jsx(ke, {
          title: J,
          description: D,
          path: C,
          image: T,
          imageAlt: s.imgAlt ?? I(x),
          type: "product",
          jsonLd: s.isPlaceholder
            ? void 0
            : Se({
                name: `Alibarbar Ingot 9000 ${x}`,
                description: s.excerpt,
                image: T,
                price: s.price,
                inStock: s.inStock,
                path: C,
                rating: $.count > 0 ? $ : void 0,
                reviews: F.length > 0 ? F : void 0,
                breadcrumbs: te,
                faq: R,
              }),
        }),
        e.jsxs("div", {
          className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute top-[15%] -left-[10%] w-[min(90vw,520px)] h-[min(90vw,520px)] bg-primary/12 rounded-full blur-[120px]",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-[10%] -right-[15%] w-[min(85vw,480px)] h-[min(85vw,480px)] bg-primary-glow/10 rounded-full blur-[100px]",
            }),
          ],
        }),
        e.jsx(Pe, {}),
        e.jsx("main", {
          className:
            "pt-[calc(5rem+env(safe-area-inset-top))] sm:pt-[calc(6rem+env(safe-area-inset-top))] pb-14 sm:pb-20 md:pb-24",
          children: e.jsxs("div", {
            className: "container max-w-6xl",
            children: [
              e.jsxs("nav", {
                "aria-label": "Breadcrumb",
                className:
                  "mb-8 sm:mb-10 px-1 flex flex-wrap items-center gap-x-2 gap-y-1",
                children: [
                  e.jsxs(z, {
                    to: "/",
                    state: l,
                    className:
                      "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors -ml-2 px-2 py-2 sm:py-0 rounded-lg sm:rounded-none hover:bg-primary/5 sm:hover:bg-transparent",
                    children: [
                      e.jsx(is, { className: "w-4 h-4 shrink-0 opacity-80" }),
                      "Home",
                    ],
                  }),
                  e.jsx("span", {
                    className: "text-muted-foreground/50 text-sm",
                    children: "/",
                  }),
                  e.jsx(z, {
                    to: "/shop",
                    className:
                      "text-sm text-muted-foreground hover:text-primary transition-colors",
                    children: "Shop",
                  }),
                  e.jsx("span", {
                    className: "text-muted-foreground/50 text-sm",
                    children: "/",
                  }),
                  e.jsx(o, {
                    to: _,
                    className:
                      "text-sm text-muted-foreground hover:text-primary transition-colors",
                    children: "Ingot 9000",
                  }),
                  e.jsx("span", {
                    className: "text-muted-foreground/50 text-sm",
                    children: "/",
                  }),
                  e.jsx("span", {
                    className:
                      "text-sm text-foreground font-medium truncate max-w-[12rem]",
                    children: x,
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "grid lg:grid-cols-[1.05fr_1fr] gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-start",
                children: [
                  e.jsx("div", {
                    className:
                      "lg:sticky lg:top-[calc(5.5rem+env(safe-area-inset-top))] xl:top-[calc(6rem+env(safe-area-inset-top))] w-full max-w-xl mx-auto lg:max-w-none lg:mx-0",
                    children: e.jsxs("div", {
                      className: "relative",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute -inset-3 sm:-inset-4 rounded-[2rem] opacity-60 blur-2xl pointer-events-none",
                          style: { background: "var(--gradient-gold-soft)" },
                        }),
                        e.jsxs("div", {
                          className:
                            "relative rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden border border-gold/35 bg-gradient-to-b from-secondary/90 to-background shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_hsl(45_75%_52%/0.12)] aspect-square",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 opacity-[0.35] pointer-events-none",
                              style: {
                                backgroundImage:
                                  "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(45 75% 52% / 0.2), transparent 55%)",
                              },
                            }),
                            e.jsx(E, {
                              src: s.img,
                              srcSet: s.imgSrcSet,
                              sizes: Oe,
                              loading: "eager",
                              alt: s.imgAlt ?? I(x),
                              className:
                                "relative z-[1] w-full h-full object-contain p-4 sm:p-8 md:p-10 lg:p-14 drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]",
                            }),
                            e.jsxs("div", {
                              className:
                                "absolute top-2 left-2 sm:top-4 sm:left-4 md:top-5 md:left-5 z-[2] flex flex-wrap gap-1.5 sm:gap-2 max-w-[calc(100%-1rem)]",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gold/60 bg-background/75 backdrop-blur-md text-primary font-semibold shadow-lg",
                                  children: s.tag,
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-gold/40 bg-primary/15 backdrop-blur-md text-primary font-semibold",
                                  children: "9000 puffs",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "space-y-7 sm:space-y-8 min-w-0",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsx("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: e.jsx("span", {
                              className: `text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${s.inStock ? "border-emerald-500/40 text-emerald-400/95 bg-emerald-500/10" : s.isPlaceholder ? "border-primary/45 text-primary bg-primary/10" : "border-destructive/50 text-destructive bg-destructive/10"}`,
                              children: s.inStock
                                ? "In stock"
                                : s.isPlaceholder
                                  ? "Coming soon"
                                  : "Out of stock",
                            }),
                          }),
                          e.jsxs("h1", {
                            className:
                              "text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold leading-[1.12] tracking-tight",
                            children: [
                              e.jsx("span", {
                                className:
                                  "block text-[11px] sm:text-xs uppercase tracking-[0.28em] text-primary/90 font-semibold mb-2",
                                children: "Alibarbar Ingot 9000",
                              }),
                              " ",
                              x,
                            ],
                          }),
                          e.jsx(bs, {
                            currentSlug: s.slug,
                            isCustomPack: !!s.isCustomPack,
                          }),
                          e.jsxs("div", {
                            className:
                              "flex flex-wrap items-end gap-2 sm:gap-4 pt-1",
                            children: [
                              s.isPlaceholder
                                ? e.jsx("span", {
                                    className:
                                      "text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground",
                                    children: "TBA",
                                  })
                                : e.jsx(q, {
                                    price: s.price,
                                    originalPrice: s.originalPrice,
                                    priceClassName:
                                      "text-3xl sm:text-4xl md:text-5xl",
                                    originalClassName:
                                      "text-lg sm:text-xl pb-1 sm:pb-1.5",
                                  }),
                              e.jsx("span", {
                                className:
                                  "text-xs sm:text-sm text-muted-foreground pb-1 sm:pb-1.5 max-w-[12rem] sm:max-w-none leading-snug",
                                children: s.isCustomPack
                                  ? `${r} devices · choose your flavours`
                                  : "per device · incl. smart display",
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.isPlaceholder
                        ? e.jsx("p", {
                            className:
                              "text-xs sm:text-sm text-primary/85 font-medium leading-relaxed",
                            children:
                              "Placeholder listing — final hero photography, pricing and on-sale date TBA.",
                          })
                        : null,
                      s.isCustomPack && !s.isPlaceholder
                        ? e.jsxs("div", {
                            className:
                              "rounded-2xl border border-gold/35 bg-card/70 p-4 sm:p-6 space-y-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsxs("p", {
                                    className:
                                      "text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-primary/80 font-semibold",
                                    children: ["Choose ", r, " flavours"],
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "mt-1 text-sm text-muted-foreground",
                                    children: [
                                      "Select any ",
                                      r,
                                      " from the current flavour collection. Repeats are allowed.",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "grid sm:grid-cols-2 lg:grid-cols-4 gap-3",
                                children: p.map((t, i) =>
                                  e.jsxs(
                                    es,
                                    {
                                      value: t,
                                      onValueChange: (y) =>
                                        u((le) =>
                                          le.map((oe, ie) =>
                                            ie === i ? y : oe,
                                          ),
                                        ),
                                      children: [
                                        e.jsx(ss, {
                                          className:
                                            "bg-background/70 min-h-[44px] text-base md:text-sm",
                                          children: e.jsx(ts, {
                                            placeholder: `Flavour ${i + 1}`,
                                          }),
                                        }),
                                        e.jsx(as, {
                                          children: K.map((y) =>
                                            e.jsx(
                                              rs,
                                              { value: y.name, children: f(y) },
                                              y.slug,
                                            ),
                                          ),
                                        }),
                                      ],
                                    },
                                    i,
                                  ),
                                ),
                              }),
                              j
                                ? null
                                : e.jsxs("p", {
                                    className: "text-xs text-primary",
                                    children: [
                                      "Please choose all ",
                                      r,
                                      " flavours before adding this pack to cart.",
                                    ],
                                  }),
                            ],
                          })
                        : null,
                      s.isPlaceholder
                        ? null
                        : e.jsxs("div", {
                            className:
                              "rounded-2xl border border-gold/35 bg-gradient-to-br from-card/95 via-card/60 to-background/95 p-4 sm:p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-primary/80 mb-3 sm:mb-4 font-semibold",
                                children: s.isCustomPack
                                  ? "Pack quantity & checkout"
                                  : "Quantity & checkout",
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center rounded-xl border border-gold/45 bg-background/50 overflow-hidden shrink-0",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        "aria-label": "Decrease quantity",
                                        className:
                                          "min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-primary/15 active:bg-primary/20 transition-colors disabled:opacity-35",
                                        disabled: d <= 1,
                                        onClick: () =>
                                          v((t) => Math.max(1, t - 1)),
                                        children: e.jsx(cs, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "min-w-[3rem] text-center text-base font-bold tabular-nums",
                                        children: d,
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        "aria-label": "Increase quantity",
                                        className:
                                          "min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-primary/15 active:bg-primary/20 transition-colors",
                                        onClick: () => v((t) => t + 1),
                                        children: e.jsx(ns, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex flex-col sm:flex-row gap-3 w-full sm:flex-1 sm:min-w-0 sm:max-w-xl",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        disabled: !s.inStock || !j,
                                        onClick: ae,
                                        className:
                                          "flex-1 min-h-[52px] px-6 rounded-xl border-2 border-gold bg-transparent text-primary font-bold uppercase tracking-[0.12em] text-sm hover:bg-gold/15 active:scale-[0.99] transition-all disabled:opacity-40 disabled:pointer-events-none",
                                        children: "Add to cart",
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        disabled: !s.inStock || !j,
                                        onClick: re,
                                        className:
                                          "flex-1 min-h-[52px] px-6 rounded-xl bg-gold text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm shadow-gold hover:opacity-[0.97] active:scale-[0.99] transition-all disabled:opacity-40 disabled:pointer-events-none",
                                        children: "Buy now",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      e.jsx("ul", {
                        className: "flex flex-wrap gap-2 sm:gap-3",
                        children: fs.map(({ icon: t, label: i }) =>
                          e.jsxs(
                            "li",
                            {
                              className:
                                "inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground border border-gold/20 rounded-full pl-1.5 pr-2.5 sm:pl-2 sm:pr-3 py-1.5 sm:py-2 bg-card/40 max-w-full sm:max-w-[calc(50%-0.25rem)] lg:max-w-none",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0",
                                  children: e.jsx(t, {
                                    className: "w-3 h-3 sm:w-3.5 sm:h-3.5",
                                    strokeWidth: 2.25,
                                  }),
                                }),
                                e.jsx("span", {
                                  className: "leading-snug",
                                  children: i,
                                }),
                              ],
                            },
                            i,
                          ),
                        ),
                      }),
                      e.jsxs("div", {
                        className: "space-y-4 border-t border-gold/15 pt-6",
                        children: [
                          s.isPlaceholder
                            ? null
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(Ge, {}),
                                  e.jsx(Ae, { data: Z }),
                                  e.jsx("div", {
                                    className: "mt-3",
                                    children: e.jsx(Ce, { compact: !0 }),
                                  }),
                                  e.jsx("div", {
                                    className: "pt-2",
                                    children: e.jsx(Je, { items: X }),
                                  }),
                                  e.jsx("div", {
                                    className: "pt-2",
                                    children: e.jsx(De, {
                                      bestFor: ee,
                                      avoidFor: se,
                                    }),
                                  }),
                                ],
                              }),
                          e.jsx("blockquote", {
                            className:
                              "pl-3 sm:pl-5 border-l-[3px] border-primary/75 text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg rounded-sm",
                            children: s.excerpt,
                          }),
                          b
                            ? e.jsxs("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                  "New to this one?",
                                  " ",
                                  e.jsxs(o, {
                                    to: `/flavours/${b.slug}`,
                                    className:
                                      "text-primary font-semibold hover:text-gold",
                                    children: [
                                      "Read the full ",
                                      x,
                                      " flavour profile",
                                    ],
                                  }),
                                  " ",
                                  "— taste notes, sweetness & cooling.",
                                ],
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.isCustomPack
                ? null
                : e.jsx("div", {
                    className: "mt-10 sm:mt-12",
                    children: e.jsx(ls, { compact: !0 }),
                  }),
              e.jsx("section", {
                className:
                  "mt-10 sm:mt-16 md:mt-20 lg:mt-24 rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] border border-gold/25 bg-gradient-to-b from-card/70 via-card/40 to-background/90 p-4 sm:p-6 md:p-9 lg:p-11 shadow-[inset_0_1px_0_hsl(45_75%_52%/0.08)]",
                children: e.jsxs("div", {
                  className:
                    "grid lg:grid-cols-12 gap-10 lg:gap-12 lg:items-start",
                  children: [
                    e.jsxs("div", {
                      className: "lg:col-span-7 space-y-5",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("h2", {
                              className: "text-xl sm:text-2xl font-bold mb-1",
                              children: "Product description",
                            }),
                            e.jsx("div", {
                              className:
                                "gold-divider max-w-[4rem] mt-3 mb-6 opacity-90",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "space-y-5 text-muted-foreground leading-[1.75] text-sm sm:text-base",
                          children: G.map((t, i) =>
                            e.jsx("p", { children: t }, i),
                          ),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "lg:col-span-5",
                      children: e.jsxs("div", {
                        className:
                          "rounded-2xl border border-gold/30 bg-background/60 p-6 sm:p-7 h-full",
                        children: [
                          e.jsx("h3", {
                            className:
                              "text-xs uppercase tracking-[0.25em] text-gold font-bold mb-5",
                            children: "What's included",
                          }),
                          e.jsx("ul", {
                            className: "space-y-3.5",
                            children: s.specs.map((t) =>
                              e.jsxs(
                                "li",
                                {
                                  className:
                                    "flex gap-3 text-sm text-muted-foreground leading-snug",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary",
                                      children: e.jsx(O, {
                                        className: "w-3 h-3",
                                        strokeWidth: 3,
                                      }),
                                    }),
                                    e.jsx("span", { children: t }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              e.jsxs("section", {
                className: "mt-8 sm:mt-12 grid lg:grid-cols-2 gap-4 sm:gap-6",
                children: [
                  s.isCustomPack
                    ? null
                    : e.jsxs("div", {
                        className:
                          "rounded-2xl border border-gold/25 bg-card/50 p-5 sm:p-7",
                        children: [
                          e.jsx("h2", {
                            className: "text-lg sm:text-xl font-bold mb-4",
                            children: "Specifications",
                          }),
                          e.jsx("dl", {
                            className: "divide-y divide-gold/10",
                            children: Re.map((t) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-start justify-between gap-4 py-2.5",
                                  children: [
                                    e.jsx("dt", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: t.label,
                                    }),
                                    e.jsx("dd", {
                                      className:
                                        "text-sm font-medium text-right",
                                      children: t.value,
                                    }),
                                  ],
                                },
                                t.label,
                              ),
                            ),
                          }),
                        ],
                      }),
                  e.jsxs("div", {
                    className: `rounded-2xl border border-gold/25 bg-card/50 p-5 sm:p-7 ${s.isCustomPack ? "lg:col-span-2" : ""}`,
                    children: [
                      e.jsx("h2", {
                        className: "text-lg sm:text-xl font-bold mb-4",
                        children: "How to use",
                      }),
                      e.jsx("ol", {
                        className: "space-y-3",
                        children: Ie.map((t, i) =>
                          e.jsxs(
                            "li",
                            {
                              className:
                                "flex gap-3 text-sm text-muted-foreground leading-relaxed",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold",
                                  children: i + 1,
                                }),
                                e.jsx("span", { children: t }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              R.length > 0
                ? e.jsxs("section", {
                    className:
                      "mt-8 sm:mt-12 rounded-2xl border border-gold/25 bg-card/50 p-5 sm:p-7",
                    children: [
                      e.jsxs("h2", {
                        className: "text-lg sm:text-xl font-bold mb-4",
                        children: ["Questions about the ", x],
                      }),
                      e.jsx("div", {
                        className: "space-y-4",
                        children: R.map((t) =>
                          e.jsxs(
                            "div",
                            {
                              children: [
                                e.jsx("h3", {
                                  className:
                                    "text-sm sm:text-base font-semibold",
                                  children: t.question,
                                }),
                                e.jsx("p", {
                                  className:
                                    "mt-1 text-sm text-muted-foreground leading-relaxed",
                                  children: e.jsx(Ze, { text: t.answer }),
                                }),
                              ],
                            },
                            t.question,
                          ),
                        ),
                      }),
                      e.jsxs("p", {
                        className: "mt-5 text-sm text-muted-foreground",
                        children: [
                          "Want more detail? See the",
                          " ",
                          e.jsx(o, {
                            to: _,
                            className:
                              "text-primary font-semibold hover:text-gold",
                            children: "Ingot 9000 Australia hub",
                          }),
                          ",",
                          " ",
                          e.jsx(o, {
                            to: "/guides/how-many-puffs-does-alibarbar-ingot-9000-have",
                            className:
                              "text-primary font-semibold hover:text-gold",
                            children: "how many puffs in an Alibarbar",
                          }),
                          ",",
                          " ",
                          e.jsx(o, {
                            to: "/guides/how-to-open-alibarbar-vape",
                            className:
                              "text-primary font-semibold hover:text-gold",
                            children: "how to open an Alibarbar vape",
                          }),
                          ", our",
                          " ",
                          e.jsx(o, {
                            to: "/guides",
                            className:
                              "text-primary font-semibold hover:text-gold",
                            children: "full guides",
                          }),
                          " or the",
                          " ",
                          e.jsx(o, {
                            to: "/faq",
                            className:
                              "text-primary font-semibold hover:text-gold",
                            children: "full FAQ",
                          }),
                          ".",
                        ],
                      }),
                    ],
                  })
                : null,
              e.jsx(us, { slug: s.slug, onSchemaData: W }),
              e.jsx(hs, {
                productSlug: s.slug,
                productName: x,
                isCustomPack: !!s.isCustomPack,
              }),
              B.length > 0 &&
                e.jsxs("section", {
                  className: "mt-12 sm:mt-16 md:mt-20 lg:mt-28",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8 md:mb-10",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-xs uppercase tracking-[0.25em] text-primary mb-2 font-semibold",
                              children: "You may also like",
                            }),
                            e.jsx("h2", {
                              className:
                                "text-2xl sm:text-3xl font-extrabold tracking-tight",
                              children: "Related products",
                            }),
                          ],
                        }),
                        e.jsxs(o, {
                          to: "/shop",
                          className:
                            "text-sm font-semibold text-primary hover:text-gold transition-colors inline-flex items-center gap-1 self-start sm:self-auto",
                          children: [
                            "View all flavors ",
                            e.jsx(ds, { className: "w-4 h-4" }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6",
                      children: B.map((t) =>
                        e.jsxs(
                          o,
                          {
                            to: `/product/${t.slug}`,
                            state: P,
                            className:
                              "luxe-card rounded-xl sm:rounded-2xl overflow-hidden group flex flex-col border border-gold/20 min-w-0",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "relative aspect-square bg-gradient-to-br from-secondary to-background overflow-hidden",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                                    style: {
                                      background: "var(--gradient-gold-soft)",
                                    },
                                  }),
                                  e.jsx(E, {
                                    src: t.img,
                                    srcSet: t.imgSrcSet,
                                    alt: t.imgAlt ?? I(f(t)),
                                    className:
                                      "relative w-full h-full object-contain p-3 sm:p-5 md:p-6 group-hover:scale-105 transition-transform duration-500",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "p-2.5 sm:p-4 flex flex-col gap-0.5 sm:gap-1 border-t border-gold/15",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-xs sm:text-sm font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2",
                                    children: f(t),
                                  }),
                                  e.jsx(q, {
                                    price: t.price,
                                    originalPrice: t.originalPrice,
                                    priceClassName: "text-sm sm:text-base",
                                  }),
                                ],
                              }),
                            ],
                          },
                          t.slug,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
        }),
        e.jsx(_e, {}),
      ],
    });
  };
export { Ys as default };
