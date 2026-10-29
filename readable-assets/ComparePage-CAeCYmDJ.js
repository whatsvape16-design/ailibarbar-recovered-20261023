import { j as e, t as f, N, L as i } from "./react-vendor-R4T0bNIa.js";
import {
  u as y,
  O as v,
  S as k,
  N as w,
  R as C,
  Q as S,
  T as A,
  F as L,
} from "./index-Bwn3vGAd.js";
import { e as P, f as q, g as F, C as R } from "./ContentByline-DZdt81X3.js";
import { C as $ } from "./ContentHubLinks-D60vS9Nb.js";
import { C as T, a as I } from "./citations-DtahB83O.js";
import { C as M } from "./CiteThis-BAlrQ0q4.js";
import { K as B } from "./KeyTakeaways-BS73GR4f.js";
import { g as K } from "./comparisons-BN826Jyq.js";
import { a as o } from "./hub-link-GeK-zZMD.js";
import { i as Q } from "./content-figures-Bki_EQx4.js";
import { a as E, b as H } from "./ContentFigure-DsDVXXXr.js";
import { e as p, d as O } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
import "./ingot-hub-CmU4AF5o.js";
import "./ManufacturerVerifyText-Dr_h7BDx.js";
import "./CatalogueImage-3ZWkwIDw.js";
function U({
  competitor: n,
  leftLabel: s = "Alibarbar Ingot 9000",
  rightLabel: d,
  alibarbar: r,
  competitorPick: a,
}) {
  const c = d ?? n;
  return e.jsxs("aside", {
    className:
      "rounded-2xl border border-gold/30 bg-gradient-to-br from-card/80 to-secondary/40 p-5 sm:p-6",
    "aria-label": "Which is better",
    children: [
      e.jsx("p", {
        className:
          "text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-2",
        children: "Which is better?",
      }),
      e.jsxs("h2", {
        className: "text-base sm:text-lg font-bold leading-snug mb-3",
        children: [s, " vs ", c],
      }),
      e.jsxs("div", {
        className:
          "space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed",
        children: [
          e.jsxs("p", {
            children: [
              e.jsx("span", {
                className: "font-semibold text-foreground",
                children: "Short answer: ",
              }),
              r,
            ],
          }),
          e.jsx("p", { children: a }),
        ],
      }),
    ],
  });
}
const ie = () => {
  var h;
  y();
  const { slug: n } = f(),
    s = K(n);
  if (!s) return e.jsx(N, { to: "/compare", replace: !0 });
  const d = `/compare/${s.slug}`,
    r = s.leftLabel ?? "Alibarbar Ingot 9000",
    a = s.rightLabel ?? s.competitor,
    c = [
      { name: "Home", path: "/" },
      { name: "Compare", path: "/compare" },
      { name: s.headline ?? `${r} vs ${a}`, path: d },
    ],
    u = v({
      title: s.title,
      description: s.description,
      path: d,
      datePublished: s.datePublished,
      dateModified: s.dateModified,
      breadcrumbs: c,
      faq: s.faq,
    }),
    b = P(s.title, s.intro, s.quickAnswer),
    g = q(s.keyTakeaways, s.alibarbarStrengths),
    x = F(s),
    m = Q(s);
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx(k, {
        title: `${s.title} | Alibarbar Australia`,
        description: s.description,
        path: d,
        type: "article",
        jsonLd: u,
      }),
      e.jsx(w, {}),
      e.jsx("main", {
        className: "pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24",
        children: e.jsxs("article", {
          className: "container max-w-3xl",
          children: [
            e.jsxs("nav", {
              "aria-label": "Breadcrumb",
              className: "text-sm text-muted-foreground mb-6",
              children: [
                e.jsx(i, {
                  to: "/",
                  className: "hover:text-primary",
                  children: "Home",
                }),
                e.jsx("span", { className: "mx-2", children: "/" }),
                e.jsx(i, {
                  to: "/compare",
                  className: "hover:text-primary",
                  children: "Compare",
                }),
                e.jsx("span", { className: "mx-2", children: "/" }),
                e.jsxs("span", {
                  className: "text-foreground",
                  children: ["vs ", a],
                }),
              ],
            }),
            e.jsxs("header", {
              className: "mb-8",
              children: [
                e.jsx("p", {
                  className:
                    "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                  children: "Comparison",
                }),
                e.jsx("h1", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                  children: s.headline ?? s.title,
                }),
                e.jsx(R, {
                  datePublished: s.datePublished,
                  dateModified: s.dateModified,
                }),
                s.audienceNote
                  ? e.jsx("blockquote", {
                      className:
                        "mt-4 border-l-2 border-gold/40 pl-4 text-sm text-muted-foreground",
                      children: s.audienceNote,
                    })
                  : null,
                s.audienceNote
                  ? e.jsx("div", {
                      className: "mt-4",
                      children: e.jsx(C, { compact: !0 }),
                    })
                  : null,
                e.jsxs("div", {
                  className: "mt-6 space-y-6",
                  children: [
                    e.jsx(U, {
                      competitor: s.competitor,
                      leftLabel: r,
                      rightLabel: a,
                      alibarbar: x.alibarbar,
                      competitorPick: x.competitor,
                    }),
                    e.jsx(S, { data: b }),
                  ],
                }),
                e.jsx("div", { className: "gold-divider mt-6 max-w-[6rem]" }),
              ],
            }),
            m.kind === "products"
              ? e.jsx(E, { slugs: m.slugs })
              : e.jsx(H, { figures: m.figures }),
            e.jsx("div", {
              className: "mb-10",
              children: e.jsx(B, { items: g }),
            }),
            e.jsxs("section", {
              className: "mb-10",
              children: [
                e.jsxs("h2", {
                  className: "text-xl sm:text-2xl font-bold mb-3",
                  children: ["About ", a],
                }),
                e.jsx("div", {
                  className:
                    "space-y-3 text-muted-foreground leading-[1.75] text-sm sm:text-base",
                  children: s.competitorOverview.map((t, l) =>
                    e.jsx("p", { children: o(t) }, l),
                  ),
                }),
              ],
            }),
            e.jsxs("section", {
              className: "mb-10",
              children: [
                e.jsx("h2", {
                  className: "text-xl sm:text-2xl font-bold mb-4",
                  children: "Side-by-side comparison",
                }),
                e.jsx("div", {
                  className: "md:hidden space-y-3",
                  children: s.rows.map((t) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "rounded-2xl border border-gold/25 bg-card/50 p-4 space-y-3",
                        children: [
                          e.jsx("p", {
                            className: "font-semibold text-sm",
                            children: t.feature,
                          }),
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-3 text-sm",
                            children: [
                              e.jsxs("div", {
                                className: "min-w-0",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] uppercase tracking-wide text-gold mb-1 font-semibold",
                                    children: r,
                                  }),
                                  e.jsx("p", {
                                    className: "leading-snug",
                                    children: t.alibarbar,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "min-w-0",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] uppercase tracking-wide text-muted-foreground mb-1 font-semibold",
                                    children: a,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-muted-foreground leading-snug",
                                    children: t.competitor,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      t.feature,
                    ),
                  ),
                }),
                e.jsx("div", {
                  className:
                    "hidden md:block overflow-x-auto rounded-2xl border border-gold/25",
                  children: e.jsxs("table", {
                    className: "w-full text-sm",
                    children: [
                      e.jsx("thead", {
                        children: e.jsxs("tr", {
                          className: "bg-card/70 text-left",
                          children: [
                            e.jsx("th", {
                              className: "p-3 font-semibold",
                              children: "Feature",
                            }),
                            e.jsx("th", {
                              className: "p-3 font-semibold text-gold",
                              children: r,
                            }),
                            e.jsx("th", {
                              className: "p-3 font-semibold",
                              children: a,
                            }),
                          ],
                        }),
                      }),
                      e.jsx("tbody", {
                        children: s.rows.map((t) =>
                          e.jsxs(
                            "tr",
                            {
                              className: "border-t border-gold/15",
                              children: [
                                e.jsx("td", {
                                  className:
                                    "p-3 font-medium text-muted-foreground",
                                  children: t.feature,
                                }),
                                e.jsx("td", {
                                  className: "p-3",
                                  children: t.alibarbar,
                                }),
                                e.jsx("td", {
                                  className: "p-3 text-muted-foreground",
                                  children: t.competitor,
                                }),
                              ],
                            },
                            t.feature,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (h = s.sections) == null
              ? void 0
              : h.map((t) =>
                  e.jsxs(
                    "section",
                    {
                      className: "mb-10",
                      children: [
                        e.jsx("h2", {
                          className: "text-xl sm:text-2xl font-bold mb-3",
                          children: t.heading,
                        }),
                        e.jsx("div", {
                          className:
                            "space-y-3 text-muted-foreground leading-[1.75] text-sm sm:text-base",
                          children: t.paragraphs.map((l, j) =>
                            e.jsx("p", { children: o(l) }, j),
                          ),
                        }),
                        t.bullets
                          ? e.jsx("ul", {
                              className: "mt-4 space-y-2",
                              children: t.bullets.map((l) =>
                                e.jsxs(
                                  "li",
                                  {
                                    className:
                                      "flex gap-2 text-sm text-muted-foreground",
                                    children: [
                                      e.jsx(p, {
                                        className:
                                          "w-4 h-4 mt-0.5 text-primary shrink-0",
                                      }),
                                      e.jsx("span", { children: o(l) }),
                                    ],
                                  },
                                  l,
                                ),
                              ),
                            })
                          : null,
                      ],
                    },
                    t.heading,
                  ),
                ),
            e.jsxs("section", {
              className: "mb-10 grid sm:grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  className: "rounded-2xl border border-gold/25 bg-card/50 p-5",
                  children: [
                    e.jsxs("h2", {
                      className: "text-base font-bold mb-3 text-gold",
                      children: [r, " strengths"],
                    }),
                    e.jsx("ul", {
                      className: "space-y-2",
                      children: s.alibarbarStrengths.map((t) =>
                        e.jsxs(
                          "li",
                          {
                            className:
                              "flex gap-2 text-sm text-muted-foreground",
                            children: [
                              e.jsx(O, {
                                className:
                                  "w-4 h-4 mt-0.5 text-primary shrink-0",
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
                e.jsxs("div", {
                  className: "rounded-2xl border border-gold/20 bg-card/40 p-5",
                  children: [
                    e.jsxs("h2", {
                      className: "text-base font-bold mb-3",
                      children: [a, " strengths"],
                    }),
                    e.jsx("ul", {
                      className: "space-y-2",
                      children: s.competitorStrengths.map((t) =>
                        e.jsxs(
                          "li",
                          {
                            className:
                              "flex gap-2 text-sm text-muted-foreground",
                            children: [
                              e.jsx(p, {
                                className:
                                  "w-4 h-4 mt-0.5 text-primary shrink-0",
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
            e.jsxs("section", {
              className: "mb-10",
              children: [
                e.jsx("h2", {
                  className: "text-xl sm:text-2xl font-bold mb-3",
                  children: "Verdict",
                }),
                e.jsx("div", {
                  className:
                    "space-y-3 text-muted-foreground leading-[1.75] text-sm sm:text-base",
                  children: s.verdict.map((t, l) =>
                    e.jsx("p", { children: o(t) }, l),
                  ),
                }),
              ],
            }),
            s.faq.length > 0
              ? e.jsxs("section", {
                  className: "mb-10",
                  children: [
                    e.jsx("h2", {
                      className: "text-xl sm:text-2xl font-bold mb-4",
                      children: "FAQ",
                    }),
                    e.jsx("div", {
                      className: "space-y-4",
                      children: s.faq.map((t) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "rounded-xl border border-gold/20 bg-card/50 p-4",
                            children: [
                              e.jsx("h3", {
                                className: "text-sm sm:text-base font-semibold",
                                children: t.question,
                              }),
                              e.jsx("p", {
                                className:
                                  "mt-1 text-sm text-muted-foreground leading-relaxed",
                                children: o(t.answer),
                              }),
                            ],
                          },
                          t.question,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            s.relatedLinks && s.relatedLinks.length > 0
              ? e.jsxs("section", {
                  className: "mb-10",
                  children: [
                    e.jsx("h2", {
                      className: "text-xl sm:text-2xl font-bold mb-4",
                      children: "Related pages",
                    }),
                    e.jsx("ul", {
                      className: "space-y-2 text-sm",
                      children: s.relatedLinks.map((t) =>
                        e.jsx(
                          "li",
                          {
                            children: e.jsx(i, {
                              to: t.href,
                              className:
                                "text-primary underline underline-offset-2 hover:text-gold",
                              children: t.label,
                            }),
                          },
                          t.href,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            e.jsxs("div", {
              className:
                "rounded-2xl border border-gold/25 bg-card/60 p-6 text-center",
              children: [
                e.jsx("p", {
                  className: "text-sm text-muted-foreground mb-4",
                  children: s.flavourCompare
                    ? "Both SKUs use the same Ingot 9000 hardware — choose the fill."
                    : "Ready to try the Alibarbar Ingot 9000 for yourself?",
                }),
                e.jsx("div", {
                  className:
                    "flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center",
                  children:
                    s.flavourCompare && s.leftProductSlug && s.rightProductSlug
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs(i, {
                              to: `/product/${s.leftProductSlug}`,
                              className:
                                "inline-flex items-center justify-center min-h-[48px] px-8 rounded-full bg-gold text-primary-foreground font-bold uppercase tracking-widest text-xs shadow-gold hover:opacity-95 transition",
                              children: ["Shop ", r],
                            }),
                            e.jsxs(i, {
                              to: `/product/${s.rightProductSlug}`,
                              className:
                                "inline-flex items-center justify-center min-h-[48px] px-8 rounded-full border border-gold text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary/10 transition",
                              children: ["Shop ", a],
                            }),
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(i, {
                              to: "/shop",
                              className:
                                "inline-flex items-center justify-center min-h-[48px] px-8 rounded-full bg-gold text-primary-foreground font-bold uppercase tracking-widest text-xs shadow-gold hover:opacity-95 transition",
                              children: "Shop Ingot 9000",
                            }),
                            e.jsx(i, {
                              to: "/flavours",
                              className:
                                "inline-flex items-center justify-center min-h-[48px] px-8 rounded-full border border-gold text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary/10 transition",
                              children: "Explore flavours",
                            }),
                          ],
                        }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "mt-10 space-y-6",
              children: [
                e.jsx(T, { items: I }),
                e.jsx(M, {
                  title: s.title,
                  url: `${A}${d}`,
                  dateModified: s.dateModified,
                }),
              ],
            }),
            e.jsx($, {}),
          ],
        }),
      }),
      e.jsx(L, {}),
    ],
  });
};
export { ie as default };
