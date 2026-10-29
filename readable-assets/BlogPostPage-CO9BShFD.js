import { t as y, j as e, N as v, L as a } from "./react-vendor-R4T0bNIa.js";
import { P as w } from "./PriceHubLinks-DMmxDbNF.js";
import { f as k, r as P } from "./hub-link-GeK-zZMD.js";
import {
  u as A,
  b as C,
  K as S,
  O as B,
  S as T,
  N as q,
  Q as L,
  am as M,
  w as d,
  W as H,
  ae as R,
  l as W,
  c as h,
  F as _,
} from "./index-Bwn3vGAd.js";
import { P as F } from "./ProductPrice-BJiKzrJ6.js";
import { e as $, f as D, C as K } from "./ContentByline-DZdt81X3.js";
import { C as O } from "./ContentHubLinks-D60vS9Nb.js";
import { K as Q } from "./KeyTakeaways-BS73GR4f.js";
import { g as E } from "./blog-B2YumUDa.js";
import { C as I } from "./CatalogueImage-3ZWkwIDw.js";
import { e as U, w as p } from "./icons-vendor-BquxQ5DR.js";
import "./ingot-hub-CmU4AF5o.js";
import "./ManufacturerVerifyText-Dr_h7BDx.js";
import "./query-vendor-L3kbwvGJ.js";
import "./utils-CytzSlOG.js";
const ie = () => {
  var c, m;
  A();
  const { slug: g } = y(),
    t = E(g);
  if (!t) return e.jsx(v, { to: "/blog", replace: !0 });
  const o = `/blog/${t.slug}`,
    u = [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: t.title, path: o },
    ],
    i = (t.relatedProducts ?? []).map((s) => C(s)).filter((s) => !!s),
    n = (t.relatedGuides ?? [])
      .map((s) => S.find((l) => l.slug === s))
      .filter((s) => !!s),
    b = B({
      title: t.title,
      description: t.description,
      path: o,
      datePublished: t.datePublished,
      dateModified: t.dateModified,
      image: t.image,
      breadcrumbs: u,
      faq: t.faq,
    }),
    f = k(t.sections),
    j = $(t.title, t.intro, t.quickAnswer),
    N = D(
      t.keyTakeaways,
      (c = t.sections.find((s) => s.bullets)) == null ? void 0 : c.bullets,
      (m = t.faq) == null ? void 0 : m.map((s) => s.answer),
    );
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx(T, {
        title: `${t.title} | Alibarbar Australia`,
        description: t.description,
        path: o,
        type: "article",
        image: t.image,
        imageAlt: t.imageAlt,
        jsonLd: b,
      }),
      e.jsx(q, {}),
      e.jsx("main", {
        className: "pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24",
        children: e.jsxs("article", {
          className: "container max-w-3xl",
          children: [
            e.jsxs("nav", {
              "aria-label": "Breadcrumb",
              className: "text-sm text-muted-foreground mb-6",
              children: [
                e.jsx(a, {
                  to: "/",
                  className: "hover:text-primary",
                  children: "Home",
                }),
                e.jsx("span", { className: "mx-2", children: "/" }),
                e.jsx(a, {
                  to: "/blog",
                  className: "hover:text-primary",
                  children: "Blog",
                }),
                e.jsx("span", { className: "mx-2", children: "/" }),
                e.jsx("span", {
                  className: "text-foreground",
                  children: t.category,
                }),
              ],
            }),
            e.jsxs("header", {
              className: "mb-8",
              children: [
                e.jsxs("p", {
                  className:
                    "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                  children: [t.category, " · ", t.readTime],
                }),
                e.jsx("h1", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                  children: t.title,
                }),
                e.jsx(K, {
                  datePublished: t.datePublished,
                  dateModified: t.dateModified,
                }),
                e.jsx(L, { data: j }),
                e.jsx("div", { className: "gold-divider mt-6 max-w-[6rem]" }),
              ],
            }),
            t.image
              ? e.jsxs("figure", {
                  className:
                    "mb-10 overflow-hidden rounded-2xl border border-gold/25 bg-card/50",
                  children: [
                    e.jsx("img", {
                      src: t.image,
                      alt: M(t),
                      width: 800,
                      height: 1e3,
                      className:
                        "block w-full max-h-[34rem] object-cover object-center",
                      loading: "eager",
                      fetchPriority: "high",
                    }),
                    t.imageCaption
                      ? e.jsx("figcaption", {
                          className:
                            "border-t border-gold/15 px-4 py-3 text-xs sm:text-sm text-muted-foreground",
                          children: t.imageCaption,
                        })
                      : null,
                  ],
                })
              : null,
            e.jsx("div", {
              className: "mb-10",
              children: e.jsx(Q, { items: N }),
            }),
            t.rankings && t.rankings.length > 0
              ? e.jsxs("section", {
                  className: "mb-12 overflow-x-auto",
                  children: [
                    e.jsx("h2", {
                      className: "text-xl sm:text-2xl font-bold mb-4",
                      children: "Best disposable vapes Australia 2026 — ranked",
                    }),
                    e.jsxs("table", {
                      className: "w-full min-w-[640px] text-sm border-collapse",
                      children: [
                        e.jsx("thead", {
                          children: e.jsxs("tr", {
                            className: "border-b border-gold/30 text-left",
                            children: [
                              e.jsx("th", {
                                className: "py-3 pr-3 font-semibold",
                                children: "#",
                              }),
                              e.jsx("th", {
                                className: "py-3 pr-3 font-semibold",
                                children: "Device",
                              }),
                              e.jsx("th", {
                                className: "py-3 pr-3 font-semibold",
                                children: "Brand",
                              }),
                              e.jsx("th", {
                                className: "py-3 pr-3 font-semibold",
                                children: "Puffs",
                              }),
                              e.jsx("th", {
                                className: "py-3 pr-3 font-semibold",
                                children: "Capacity",
                              }),
                              e.jsx("th", {
                                className: "py-3 pr-3 font-semibold",
                                children: "Display",
                              }),
                              e.jsx("th", {
                                className: "py-3 font-semibold",
                                children: "Verdict",
                              }),
                            ],
                          }),
                        }),
                        e.jsx("tbody", {
                          children: t.rankings.map((s) =>
                            e.jsxs(
                              "tr",
                              {
                                className: `border-b border-gold/15 ${s.highlight ? "bg-primary/5" : ""}`,
                                children: [
                                  e.jsx("td", {
                                    className: "py-3 pr-3 font-bold text-gold",
                                    children: s.rank,
                                  }),
                                  e.jsx("td", {
                                    className: "py-3 pr-3 font-semibold",
                                    children: s.name,
                                  }),
                                  e.jsx("td", {
                                    className: "py-3 pr-3",
                                    children: s.brand,
                                  }),
                                  e.jsx("td", {
                                    className: "py-3 pr-3",
                                    children: s.puffs,
                                  }),
                                  e.jsx("td", {
                                    className: "py-3 pr-3",
                                    children: s.capacity,
                                  }),
                                  e.jsx("td", {
                                    className: "py-3 pr-3",
                                    children: s.display,
                                  }),
                                  e.jsx("td", {
                                    className: "py-3 text-muted-foreground",
                                    children: s.verdict,
                                  }),
                                ],
                              },
                              s.rank,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                })
              : null,
            t.editorialVerdict
              ? e.jsxs("section", {
                  className:
                    "mb-12 rounded-2xl border border-gold/30 bg-card/50 p-5 sm:p-6",
                  children: [
                    e.jsx("h2", {
                      className: "text-lg font-bold mb-3",
                      children: "Editor's verdict",
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm sm:text-base text-muted-foreground leading-relaxed",
                      children: t.editorialVerdict,
                    }),
                  ],
                })
              : null,
            e.jsx("div", {
              className: "space-y-8",
              children: t.sections.map((s, l) =>
                e.jsxs(
                  "section",
                  {
                    children: [
                      e.jsx("h2", {
                        className: "text-xl sm:text-2xl font-bold mb-3",
                        children: s.heading,
                      }),
                      e.jsx("div", {
                        className:
                          "space-y-3 text-muted-foreground leading-[1.75] text-sm sm:text-base",
                        children: s.paragraphs.map((r, x) =>
                          e.jsx("p", { children: P(r, l, x, f) }, x),
                        ),
                      }),
                      s.bullets
                        ? e.jsx("ul", {
                            className: "mt-4 space-y-2",
                            children: s.bullets.map((r) =>
                              e.jsxs(
                                "li",
                                {
                                  className:
                                    "flex gap-2 text-sm sm:text-base text-muted-foreground",
                                  children: [
                                    e.jsx(U, {
                                      className:
                                        "w-4 h-4 mt-1 text-primary shrink-0",
                                    }),
                                    e.jsx("span", { children: r }),
                                  ],
                                },
                                r,
                              ),
                            ),
                          })
                        : null,
                    ],
                  },
                  s.heading,
                ),
              ),
            }),
            t.whatsappCta
              ? e.jsxs("section", {
                  className:
                    "mt-12 rounded-2xl border border-gold/30 bg-card/50 p-5 sm:p-6",
                  children: [
                    e.jsxs("h2", {
                      className: "text-lg sm:text-xl font-bold mb-2",
                      children: [
                        "Bulk or wholesale order? Chat with ",
                        d,
                        " on WhatsApp",
                      ],
                    }),
                    e.jsxs("p", {
                      className:
                        "text-sm sm:text-base text-muted-foreground leading-relaxed",
                      children: [
                        "Send ",
                        d,
                        " the number of devices, the flavours you want and your state or postcode, and he will reply with wholesale pricing and current stock. Adults 18+ only.",
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mt-5 flex flex-col sm:flex-row gap-3",
                      children: [
                        e.jsxs("a", {
                          href: H,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white hover:bg-[#1ebe5b] transition-colors",
                          children: [
                            "Message ",
                            d,
                            " on WhatsApp ",
                            e.jsx(p, { className: "w-4 h-4" }),
                          ],
                        }),
                        e.jsx("a", {
                          href: R,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex min-h-11 items-center justify-center rounded-full border border-gold/40 px-6 text-sm font-semibold text-foreground hover:border-gold transition-colors",
                          children: "Join the WhatsApp Community for deals",
                        }),
                      ],
                    }),
                    e.jsxs("p", {
                      className: "mt-4 text-sm text-muted-foreground",
                      children: [
                        "Ordering 20 devices or fewer? The",
                        " ",
                        e.jsx(a, {
                          to: "/product/custom-20-pack",
                          className:
                            "text-primary hover:text-gold font-semibold",
                          children: "20 Flavour Custom Pack",
                        }),
                        " ",
                        "and",
                        " ",
                        e.jsx(a, {
                          to: "/product/custom-10-pack",
                          className:
                            "text-primary hover:text-gold font-semibold",
                          children: "10 Flavour Custom Pack",
                        }),
                        " ",
                        "can be ordered straight from the ",
                        e.jsx(a, {
                          to: "/shop",
                          className:
                            "text-primary hover:text-gold font-semibold",
                          children: "shop",
                        }),
                        ". See the",
                        " ",
                        e.jsx(a, {
                          to: "/wholesale",
                          className:
                            "text-primary hover:text-gold font-semibold",
                          children: "wholesale page",
                        }),
                        " ",
                        "for the full bulk line-up.",
                      ],
                    }),
                  ],
                })
              : null,
            e.jsx(w, { currentPath: `/blog/${t.slug}` }),
            i.length > 0
              ? e.jsxs("section", {
                  className: "mt-14",
                  children: [
                    e.jsx("h2", {
                      className: "text-xl sm:text-2xl font-bold mb-5",
                      children: "Shop the range",
                    }),
                    e.jsx("div", {
                      className:
                        "grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5",
                      children: i.map((s) =>
                        e.jsxs(
                          a,
                          {
                            to: `/product/${s.slug}`,
                            className:
                              "luxe-card rounded-xl overflow-hidden group flex flex-col border border-gold/20",
                            children: [
                              e.jsx("div", {
                                className:
                                  "relative aspect-square bg-gradient-to-br from-secondary to-background overflow-hidden",
                                children: e.jsx(I, {
                                  src: s.img,
                                  srcSet: s.imgSrcSet,
                                  alt: W(h(s)),
                                  className:
                                    "w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500",
                                }),
                              }),
                              e.jsxs("div", {
                                className: "p-3 border-t border-gold/15",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-xs sm:text-sm font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2",
                                    children: h(s),
                                  }),
                                  e.jsx(F, {
                                    price: s.price,
                                    originalPrice: s.originalPrice,
                                    priceClassName: "text-sm",
                                  }),
                                ],
                              }),
                            ],
                          },
                          s.slug,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            n.length > 0
              ? e.jsxs("section", {
                  className: "mt-14",
                  children: [
                    e.jsx("h2", {
                      className: "text-xl sm:text-2xl font-bold mb-5",
                      children: "Related guides",
                    }),
                    e.jsx("div", {
                      className: "grid sm:grid-cols-2 gap-4",
                      children: n.map((s) =>
                        e.jsxs(
                          a,
                          {
                            to: `/guides/${s.slug}`,
                            className:
                              "group rounded-2xl border border-gold/20 bg-card/60 p-5 flex flex-col gap-2 hover:border-gold/50 transition-colors",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "text-base font-bold leading-snug group-hover:text-primary transition-colors",
                                children: s.title,
                              }),
                              e.jsxs("span", {
                                className:
                                  "inline-flex items-center gap-1 text-sm font-semibold text-gold",
                                children: [
                                  "Read ",
                                  e.jsx(p, {
                                    className:
                                      "w-4 h-4 group-hover:translate-x-1 transition-transform",
                                  }),
                                ],
                              }),
                            ],
                          },
                          s.slug,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            t.outboundLinks && t.outboundLinks.length > 0
              ? e.jsxs("section", {
                  className: "mt-14",
                  children: [
                    e.jsx("h2", {
                      className: "text-xl sm:text-2xl font-bold mb-5",
                      children: "Sister store links",
                    }),
                    e.jsx("ul", {
                      className: "space-y-3",
                      children: t.outboundLinks.map((s) => {
                        const r = s.url.startsWith(
                          "https://www.ailibarbar.com/",
                        )
                          ? s.url.replace("https://www.ailibarbar.com", "")
                          : null;
                        return e.jsxs(
                          "li",
                          {
                            className:
                              "rounded-xl border border-gold/20 bg-card/40 p-4",
                            children: [
                              r
                                ? e.jsxs(a, {
                                    to: r,
                                    className:
                                      "font-semibold text-primary hover:text-gold",
                                    children: [s.label, " →"],
                                  })
                                : e.jsxs("a", {
                                    href: s.url,
                                    target: "_blank",
                                    rel: "noopener",
                                    className:
                                      "font-semibold text-primary hover:text-gold",
                                    children: [s.label, " →"],
                                  }),
                              s.note
                                ? e.jsx("p", {
                                    className:
                                      "mt-1 text-sm text-muted-foreground leading-relaxed",
                                    children: s.note,
                                  })
                                : null,
                            ],
                          },
                          s.url,
                        );
                      }),
                    }),
                  ],
                })
              : null,
            t.faq && t.faq.length > 0
              ? e.jsxs("section", {
                  className: "mt-14",
                  children: [
                    e.jsx("h2", {
                      className: "text-xl sm:text-2xl font-bold mb-5",
                      children: "FAQ",
                    }),
                    e.jsx("div", {
                      className: "space-y-4",
                      children: t.faq.map((s) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "rounded-xl border border-gold/15 bg-card/40 p-4",
                            children: [
                              e.jsx("h3", {
                                className: "font-semibold text-sm sm:text-base",
                                children: s.question,
                              }),
                              e.jsx("p", {
                                className:
                                  "text-sm text-muted-foreground mt-2 leading-relaxed",
                                children: s.answer,
                              }),
                            ],
                          },
                          s.question,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            e.jsx(O, {}),
          ],
        }),
      }),
      e.jsx(_, {}),
    ],
  });
};
export { ie as default };
