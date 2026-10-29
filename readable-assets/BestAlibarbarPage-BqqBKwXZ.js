import { j as e, L as a } from "./react-vendor-R4T0bNIa.js";
import {
  u as o,
  O as m,
  S as n,
  N as c,
  Q as x,
  T as h,
  F as b,
} from "./index-Bwn3vGAd.js";
import { C as p } from "./ContentByline-DZdt81X3.js";
import { C as u } from "./ContentHubLinks-D60vS9Nb.js";
import { C as g, d as j } from "./citations-DtahB83O.js";
import { C as N } from "./CiteThis-BAlrQ0q4.js";
import { K as f } from "./KeyTakeaways-BS73GR4f.js";
import { b as v } from "./best-alibarbar-Bj86B0m0.js";
import { j as y } from "./content-figures-Bki_EQx4.js";
import { C as k } from "./ContentFigure-DsDVXXXr.js";
import { w as C, d as S, $ as A, e as $ } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
import "./CatalogueImage-3ZWkwIDw.js";
const L = {
    gold: { badge: "🥇", border: "border-gold/50", bg: "bg-primary/8" },
    silver: { badge: "🥈", border: "border-gold/30", bg: "bg-card/60" },
    bronze: { badge: "🥉", border: "border-gold/20", bg: "bg-card/40" },
  },
  K = () => {
    o();
    const t = v,
      l = t.path,
      d = [
        { name: "Home", path: "/" },
        { name: "Best Alibarbar Australia", path: l },
      ],
      i = m({
        title: t.title,
        description: t.description,
        path: l,
        datePublished: t.datePublished,
        dateModified: t.dateModified,
        breadcrumbs: d,
        faq: [...t.faq],
        itemList: t.rankingTable.map((s, r) => ({
          position: r + 1,
          name: `Alibarbar Ingot 9000 ${s.flavour}`,
          url: `/product/${s.productSlug}`,
          description: `${s.category} · Cooling ${s.cooling} · Best for ${s.bestFor}`,
        })),
      });
    return e.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        e.jsx(n, {
          title: t.title,
          description: t.description,
          path: l,
          jsonLd: i,
        }),
        e.jsx(c, {}),
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
                  e.jsx("span", {
                    className: "text-foreground",
                    children: "Best Alibarbar Australia",
                  }),
                ],
              }),
              e.jsxs("header", {
                className: "mb-8",
                children: [
                  e.jsx("p", {
                    className:
                      "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                    children: "Ranked Guide · 2026",
                  }),
                  e.jsx("h1", {
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                    children: t.h1,
                  }),
                  e.jsx(p, {
                    datePublished: t.datePublished,
                    dateModified: t.dateModified,
                  }),
                  e.jsx("p", {
                    className:
                      "mt-4 text-muted-foreground leading-[1.75] text-sm sm:text-base",
                    children: t.intro,
                  }),
                  e.jsx(x, { data: t.quickAnswer }),
                  e.jsx(k, { ...y() }),
                  e.jsx("div", { className: "gold-divider mt-6 max-w-[6rem]" }),
                ],
              }),
              e.jsx("div", {
                className: "mb-10",
                children: e.jsx(f, { items: [...t.keyTakeaways] }),
              }),
              e.jsxs("section", {
                className: "mb-12",
                children: [
                  e.jsx("h2", {
                    className: "text-xl sm:text-2xl font-bold mb-2",
                    children: "Best Alibarbar Australia 2026",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground mb-5",
                    children:
                      "Quick winners from our current Ingot 9000 tasting set.",
                  }),
                  e.jsx("div", {
                    className: "grid gap-3",
                    children: t.podium.map((s) => {
                      const r = L[s.place];
                      return e.jsxs(
                        "div",
                        {
                          className: `rounded-2xl border ${r.border} ${r.bg} p-4 sm:p-5 flex gap-4 items-start`,
                          children: [
                            e.jsx("span", {
                              className: "text-2xl shrink-0",
                              "aria-hidden": !0,
                              children: r.badge,
                            }),
                            e.jsxs("div", {
                              className: "min-w-0 flex-1",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-xs uppercase tracking-wide text-primary font-semibold",
                                  children: s.label,
                                }),
                                e.jsx("h3", {
                                  className: "text-lg font-bold mt-0.5",
                                  children: e.jsxs(a, {
                                    to: `/product/${s.productSlug}`,
                                    className: "hover:text-primary",
                                    children: ["Alibarbar ", s.flavour],
                                  }),
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-muted-foreground mt-1 leading-relaxed",
                                  children: s.reason,
                                }),
                                e.jsxs(a, {
                                  to: s.reviewPath,
                                  className:
                                    "inline-flex items-center gap-1 text-sm font-semibold text-gold mt-2",
                                  children: [
                                    "Read review ",
                                    e.jsx(C, { className: "w-4 h-4" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        s.place,
                      );
                    }),
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "mb-12",
                children: [
                  e.jsx("h2", {
                    className: "text-xl sm:text-2xl font-bold mb-4",
                    children: "Flavour comparison table",
                  }),
                  e.jsx("div", {
                    className:
                      "overflow-x-auto rounded-xl border border-gold/20",
                    children: e.jsxs("table", {
                      className: "w-full min-w-[640px] text-sm border-collapse",
                      children: [
                        e.jsx("thead", {
                          children: e.jsxs("tr", {
                            className:
                              "border-b border-gold/30 bg-card/50 text-left",
                            children: [
                              e.jsx("th", {
                                className: "py-3 px-3 font-semibold",
                                children: "Flavour",
                              }),
                              e.jsx("th", {
                                className: "py-3 px-3 font-semibold",
                                children: "Category",
                              }),
                              e.jsx("th", {
                                className: "py-3 px-3 font-semibold",
                                children: "Cooling",
                              }),
                              e.jsx("th", {
                                className: "py-3 px-3 font-semibold",
                                children: "Sweetness",
                              }),
                              e.jsx("th", {
                                className: "py-3 px-3 font-semibold",
                                children: "Best For",
                              }),
                            ],
                          }),
                        }),
                        e.jsx("tbody", {
                          children: t.rankingTable.map((s) =>
                            e.jsxs(
                              "tr",
                              {
                                className: "border-b border-gold/10",
                                children: [
                                  e.jsxs("td", {
                                    className: "py-3 px-3 font-semibold",
                                    children: [
                                      e.jsx(a, {
                                        to: `/product/${s.productSlug}`,
                                        className: "hover:text-primary",
                                        children: s.flavour,
                                      }),
                                      s.reviewSlug
                                        ? e.jsxs(e.Fragment, {
                                            children: [
                                              " · ",
                                              e.jsx(a, {
                                                to: `/reviews/${s.reviewSlug}`,
                                                className:
                                                  "text-xs font-medium text-gold hover:underline",
                                                children: "Review",
                                              }),
                                            ],
                                          })
                                        : null,
                                    ],
                                  }),
                                  e.jsx("td", {
                                    className:
                                      "py-3 px-3 text-muted-foreground",
                                    children: s.category,
                                  }),
                                  e.jsx("td", {
                                    className:
                                      "py-3 px-3 text-muted-foreground",
                                    children: s.cooling,
                                  }),
                                  e.jsx("td", {
                                    className:
                                      "py-3 px-3 text-muted-foreground",
                                    children: s.sweetness,
                                  }),
                                  e.jsx("td", {
                                    className:
                                      "py-3 px-3 text-muted-foreground",
                                    children: s.bestFor,
                                  }),
                                ],
                              },
                              s.productSlug,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "mb-12",
                children: [
                  e.jsx("h2", {
                    className: "text-xl sm:text-2xl font-bold mb-3",
                    children: t.testingMethod.heading,
                  }),
                  e.jsx("p", {
                    className:
                      "text-sm sm:text-base text-muted-foreground leading-[1.75] mb-4",
                    children: t.testingMethod.intro,
                  }),
                  e.jsx("ul", {
                    className: "space-y-2 mb-4",
                    children: t.testingMethod.criteria.map((s) =>
                      e.jsxs(
                        "li",
                        {
                          className:
                            "flex gap-2 text-sm sm:text-base text-muted-foreground",
                          children: [
                            e.jsx(S, {
                              className: "w-4 h-4 mt-1 text-primary shrink-0",
                            }),
                            e.jsx("span", { children: s }),
                          ],
                        },
                        s,
                      ),
                    ),
                  }),
                  e.jsxs("p", {
                    className:
                      "text-sm text-muted-foreground leading-relaxed border-l-2 border-gold/40 pl-4",
                    children: [
                      t.testingMethod.note,
                      " ",
                      e.jsx(a, {
                        to: "/editorial-policy",
                        className: "text-primary hover:underline",
                        children: "Editorial Policy",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "mb-12",
                children: [
                  e.jsx("h2", {
                    className: "text-xl sm:text-2xl font-bold mb-3",
                    children: t.australiaLocal.heading,
                  }),
                  e.jsx("p", {
                    className:
                      "text-sm sm:text-base text-muted-foreground leading-[1.75] mb-5",
                    children: t.australiaLocal.intro,
                  }),
                  e.jsx("div", {
                    className: "space-y-3",
                    children: t.australiaLocal.cities.map((s) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "rounded-xl border border-gold/20 bg-card/40 p-4",
                          children: [
                            e.jsxs("h3", {
                              className:
                                "font-semibold text-sm sm:text-base flex items-center gap-2",
                              children: [
                                e.jsx(A, {
                                  className: "w-4 h-4 text-primary shrink-0",
                                }),
                                s.name,
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "text-sm text-muted-foreground mt-2 leading-relaxed",
                              children: s.tip,
                            }),
                          ],
                        },
                        s.name,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "mb-12",
                children: [
                  e.jsx("h2", {
                    className: "text-xl sm:text-2xl font-bold mb-3",
                    children: t.alsoSearched.heading,
                  }),
                  e.jsx("p", {
                    className:
                      "text-sm sm:text-base text-muted-foreground leading-[1.75] mb-4",
                    children: t.alsoSearched.intro,
                  }),
                  e.jsx("ul", {
                    className: "space-y-2",
                    children: t.alsoSearched.bullets.map((s) =>
                      e.jsxs(
                        "li",
                        {
                          className:
                            "flex gap-2 text-sm sm:text-base text-muted-foreground",
                          children: [
                            e.jsx($, {
                              className: "w-4 h-4 mt-1 text-primary shrink-0",
                            }),
                            e.jsx("span", { children: s }),
                          ],
                        },
                        s,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "mb-12",
                children: [
                  e.jsx("h2", {
                    className: "text-xl sm:text-2xl font-bold mb-4",
                    children: "Topic cluster — keep reading",
                  }),
                  e.jsx("div", {
                    className: "grid sm:grid-cols-2 gap-3",
                    children: t.clusterLinks.map((s) =>
                      e.jsxs(
                        a,
                        {
                          to: s.path,
                          className:
                            "group rounded-xl border border-gold/20 bg-card/50 p-4 hover:border-gold/50 transition-colors",
                          children: [
                            e.jsx("h3", {
                              className:
                                "text-sm font-bold group-hover:text-primary transition-colors",
                              children: s.label,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground mt-1",
                              children: s.description,
                            }),
                          ],
                        },
                        s.path,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "mb-12",
                children: [
                  e.jsx("h2", {
                    className: "text-xl sm:text-2xl font-bold mb-4",
                    children: "Frequently asked questions",
                  }),
                  e.jsx("div", {
                    className: "space-y-4",
                    children: t.faq.map((s) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "rounded-xl border border-gold/20 bg-card/50 p-4",
                          children: [
                            e.jsx("h3", {
                              className: "text-sm sm:text-base font-semibold",
                              children: s.question,
                            }),
                            e.jsx("p", {
                              className:
                                "mt-1 text-sm text-muted-foreground leading-relaxed",
                              children: s.answer,
                            }),
                          ],
                        },
                        s.question,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-14 space-y-6",
                children: [
                  e.jsx(g, { items: j }),
                  e.jsx(N, {
                    title: t.h1,
                    url: `${h}${l}`,
                    dateModified: t.dateModified,
                  }),
                ],
              }),
              e.jsx(u, {}),
            ],
          }),
        }),
        e.jsx(b, {}),
      ],
    });
  };
export { K as default };
