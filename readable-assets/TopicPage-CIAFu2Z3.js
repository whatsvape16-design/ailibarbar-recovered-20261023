import { t as x, j as s, N as m, L as i } from "./react-vendor-R4T0bNIa.js";
import {
  u as h,
  O as p,
  S as j,
  N as u,
  Q as g,
  F as b,
} from "./index-Bwn3vGAd.js";
import { C as f } from "./ContentByline-DZdt81X3.js";
import { C as N } from "./ContentHubLinks-D60vS9Nb.js";
import { K as v } from "./KeyTakeaways-BS73GR4f.js";
import { g as y } from "./topics-Ct7Ly1mH.js";
import { h as k } from "./content-figures-Bki_EQx4.js";
import { a as w, b as T } from "./ContentFigure-DsDVXXXr.js";
import { e as n, w as C } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
import "./CatalogueImage-3ZWkwIDw.js";
function r({ title: l, links: e }) {
  return e.length === 0
    ? null
    : s.jsxs("section", {
        className: "mt-10",
        children: [
          s.jsx("h2", {
            className: "text-xl sm:text-2xl font-bold mb-4",
            children: l,
          }),
          s.jsx("div", {
            className: "grid sm:grid-cols-2 gap-3",
            children: e.map((a) =>
              s.jsxs(
                i,
                {
                  to: a.path,
                  className:
                    "group rounded-xl border border-gold/20 bg-card/50 p-4 hover:border-gold/50 transition-colors",
                  children: [
                    s.jsx("h3", {
                      className:
                        "text-sm font-bold group-hover:text-primary transition-colors",
                      children: a.label,
                    }),
                    s.jsx("p", {
                      className: "text-xs text-muted-foreground mt-1",
                      children: a.description,
                    }),
                  ],
                },
                a.path,
              ),
            ),
          }),
        ],
      });
}
const Q = () => {
  h();
  const { slug: l } = x(),
    e = y(l);
  if (!e) return s.jsx(m, { to: "/topics", replace: !0 });
  const a = `/topics/${e.slug}`,
    c = [
      { name: "Home", path: "/" },
      { name: "Topics", path: "/topics" },
      { name: e.title, path: a },
    ],
    o = k(e.slug),
    d = p({
      title: e.title,
      description: e.description,
      path: a,
      datePublished: e.datePublished,
      dateModified: e.dateModified,
      breadcrumbs: c,
      faq: e.faq,
    });
  return s.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      s.jsx(j, {
        title: `${e.title} | Alibarbar Australia`,
        description: e.description,
        path: a,
        jsonLd: d,
      }),
      s.jsx(u, {}),
      s.jsx("main", {
        className: "pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24",
        children: s.jsxs("article", {
          className: "container max-w-3xl",
          children: [
            s.jsxs("nav", {
              "aria-label": "Breadcrumb",
              className: "text-sm text-muted-foreground mb-6",
              children: [
                s.jsx(i, {
                  to: "/",
                  className: "hover:text-primary",
                  children: "Home",
                }),
                s.jsx("span", { className: "mx-2", children: "/" }),
                s.jsx(i, {
                  to: "/topics",
                  className: "hover:text-primary",
                  children: "Topics",
                }),
                s.jsx("span", { className: "mx-2", children: "/" }),
                s.jsx("span", {
                  className: "text-foreground",
                  children: e.slug,
                }),
              ],
            }),
            s.jsxs("header", {
              className: "mb-8",
              children: [
                s.jsx("p", {
                  className:
                    "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                  children: "Topic Hub",
                }),
                s.jsx("h1", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                  children: e.title,
                }),
                s.jsx(f, {
                  datePublished: e.datePublished,
                  dateModified: e.dateModified,
                }),
                s.jsx(g, { data: e.quickAnswer }),
                s.jsx("div", { className: "gold-divider mt-6 max-w-[6rem]" }),
              ],
            }),
            o.kind === "products"
              ? s.jsx(w, { slugs: o.slugs })
              : s.jsx(T, { figures: o.figures }),
            s.jsx("div", {
              className: "mb-10",
              children: s.jsx(v, { items: e.keyTakeaways }),
            }),
            s.jsxs("div", {
              className:
                "space-y-8 text-muted-foreground leading-[1.75] text-sm sm:text-base",
              children: [
                s.jsx("p", { children: e.intro }),
                s.jsxs("section", {
                  children: [
                    s.jsx("h2", {
                      className:
                        "text-xl sm:text-2xl font-bold text-foreground mb-3",
                      children: "Definition",
                    }),
                    s.jsx("p", { children: e.definition }),
                  ],
                }),
                s.jsxs("section", {
                  children: [
                    s.jsx("h2", {
                      className:
                        "text-xl sm:text-2xl font-bold text-foreground mb-3",
                      children: "Key facts",
                    }),
                    s.jsx("ul", {
                      className: "space-y-2",
                      children: e.stats.map((t) =>
                        s.jsxs(
                          "li",
                          {
                            className: "flex gap-2",
                            children: [
                              s.jsx(n, {
                                className: "w-4 h-4 mt-1 text-primary shrink-0",
                              }),
                              s.jsx("span", { children: t }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "grid sm:grid-cols-2 gap-6",
                  children: [
                    s.jsxs("section", {
                      children: [
                        s.jsx("h2", {
                          className: "text-lg font-bold text-foreground mb-3",
                          children: "Pros",
                        }),
                        s.jsx("ul", {
                          className: "space-y-2",
                          children: e.pros.map((t) =>
                            s.jsxs(
                              "li",
                              {
                                className: "flex gap-2 text-sm",
                                children: [
                                  s.jsx(n, {
                                    className:
                                      "w-4 h-4 mt-0.5 text-primary shrink-0",
                                  }),
                                  s.jsx("span", { children: t }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    s.jsxs("section", {
                      children: [
                        s.jsx("h2", {
                          className: "text-lg font-bold text-foreground mb-3",
                          children: "Cons",
                        }),
                        s.jsx("ul", {
                          className: "space-y-2",
                          children: e.cons.map((t) =>
                            s.jsxs(
                              "li",
                              {
                                className: "flex gap-2 text-sm",
                                children: [
                                  s.jsx(n, {
                                    className:
                                      "w-4 h-4 mt-0.5 text-muted-foreground shrink-0",
                                  }),
                                  s.jsx("span", { children: t }),
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
              ],
            }),
            s.jsx(r, { title: "Guides", links: e.guides }),
            s.jsx(r, { title: "Products", links: e.products }),
            s.jsx(r, { title: "Comparisons", links: e.comparisons }),
            s.jsx(r, { title: "Reviews", links: e.reviews }),
            s.jsx(r, { title: "Flavours", links: e.flavours }),
            e.relatedTopics.length > 0
              ? s.jsxs("section", {
                  className: "mt-10",
                  children: [
                    s.jsx("h2", {
                      className: "text-xl sm:text-2xl font-bold mb-4",
                      children: "Related topics",
                    }),
                    s.jsx("div", {
                      className: "grid sm:grid-cols-2 gap-3",
                      children: e.relatedTopics.map((t) =>
                        s.jsxs(
                          i,
                          {
                            to: t.path,
                            className:
                              "group flex items-center justify-between rounded-xl border border-gold/20 bg-card/50 p-4 hover:border-gold/50 transition-colors",
                            children: [
                              s.jsxs("div", {
                                children: [
                                  s.jsx("h3", {
                                    className:
                                      "text-sm font-bold group-hover:text-primary transition-colors",
                                    children: t.label,
                                  }),
                                  s.jsx("p", {
                                    className:
                                      "text-xs text-muted-foreground mt-0.5",
                                    children: t.description,
                                  }),
                                ],
                              }),
                              s.jsx(C, {
                                className: "w-4 h-4 text-gold shrink-0",
                              }),
                            ],
                          },
                          t.path,
                        ),
                      ),
                    }),
                  ],
                })
              : null,
            e.faq.length > 0
              ? s.jsxs("section", {
                  className: "mt-14",
                  children: [
                    s.jsx("h2", {
                      className: "text-xl sm:text-2xl font-bold mb-5",
                      children: "FAQ",
                    }),
                    s.jsx("div", {
                      className: "space-y-4",
                      children: e.faq.map((t) =>
                        s.jsxs(
                          "div",
                          {
                            className:
                              "rounded-xl border border-gold/15 bg-card/40 p-4",
                            children: [
                              s.jsx("h3", {
                                className: "font-semibold text-sm sm:text-base",
                                children: t.question,
                              }),
                              s.jsx("p", {
                                className:
                                  "text-sm text-muted-foreground mt-2 leading-relaxed",
                                children: t.answer,
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
            s.jsx(N, {}),
          ],
        }),
      }),
      s.jsx(b, {}),
    ],
  });
};
export { Q as default };
