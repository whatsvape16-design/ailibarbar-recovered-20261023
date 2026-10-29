import { i as m, j as e, L as i } from "./react-vendor-R4T0bNIa.js";
import {
  u as n,
  O as c,
  S as x,
  N as b,
  Q as h,
  R as p,
  T as u,
  F as j,
} from "./index-Bwn3vGAd.js";
import { C as g } from "./ContentHubLinks-D60vS9Nb.js";
import { C as N, d as f } from "./citations-DtahB83O.js";
import { C as v } from "./CiteThis-BAlrQ0q4.js";
import { K as y } from "./KeyTakeaways-BS73GR4f.js";
import { b as s } from "./brand-knowledge-CHUGPLTm.js";
import { e as A } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
const w = s.path,
  P = () => {
    n();
    const l = m().pathname === "/about-alibarbar-australia",
      r = w,
      d = [
        { name: "Home", path: "/" },
        { name: l ? "About Alibarbar Australia" : "Brand Knowledge", path: r },
      ],
      o = c({
        title: s.title,
        description: s.description,
        path: r,
        datePublished: s.datePublished,
        dateModified: s.dateModified,
        breadcrumbs: d,
        faq: [...s.faq],
      });
    return e.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        e.jsx(x, {
          title: `${s.title} | Alibarbar Australia`,
          description: s.description,
          path: r,
          jsonLd: o,
        }),
        e.jsx(b, {}),
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
                  e.jsx("span", {
                    className: "text-foreground",
                    children: l
                      ? "About Alibarbar Australia"
                      : "Brand Knowledge",
                  }),
                ],
              }),
              e.jsxs("header", {
                className: "mb-8",
                children: [
                  e.jsx("p", {
                    className:
                      "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                    children: "Entity hub",
                  }),
                  e.jsx("h1", {
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                    children: s.title,
                  }),
                  e.jsx("p", {
                    className:
                      "text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed",
                    children: s.intro,
                  }),
                  e.jsx(h, { data: s.quickAnswer }),
                  e.jsx("div", {
                    className: "mt-4",
                    children: e.jsx(p, { compact: !0 }),
                  }),
                  e.jsx("div", { className: "gold-divider mt-6 max-w-[6rem]" }),
                ],
              }),
              e.jsx("div", {
                className: "mb-10",
                children: e.jsx(y, { items: [...s.keyTakeaways] }),
              }),
              e.jsx("div", {
                className: "space-y-8 mb-10",
                children: s.sections.map((a) =>
                  e.jsxs(
                    "section",
                    {
                      children: [
                        e.jsx("h2", {
                          className: "text-xl sm:text-2xl font-bold mb-3",
                          children: a.heading,
                        }),
                        e.jsx("div", {
                          className:
                            "space-y-3 text-muted-foreground leading-[1.75] text-sm sm:text-base",
                          children: a.paragraphs.map((t) =>
                            e.jsx("p", { children: t }, t.slice(0, 40)),
                          ),
                        }),
                        a.bullets
                          ? e.jsx("ul", {
                              className:
                                "mt-3 space-y-1.5 text-sm sm:text-base text-muted-foreground",
                              children: a.bullets.map((t) =>
                                e.jsxs(
                                  "li",
                                  {
                                    className: "flex gap-2",
                                    children: [
                                      e.jsx(A, {
                                        className:
                                          "w-4 h-4 mt-1 text-primary shrink-0",
                                      }),
                                      e.jsx("span", { children: t }),
                                    ],
                                  },
                                  t,
                                ),
                              ),
                            })
                          : null,
                      ],
                    },
                    a.heading,
                  ),
                ),
              }),
              e.jsxs("section", {
                className: "mb-10",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-4",
                    children: "Related knowledge",
                  }),
                  e.jsx("ul", {
                    className: "grid sm:grid-cols-2 gap-3",
                    children: s.entityLinks.map((a) =>
                      e.jsx(
                        "li",
                        {
                          children: e.jsx(i, {
                            to: a.to,
                            className:
                              "block rounded-xl border border-gold/15 bg-card/50 p-3 text-sm font-semibold text-primary hover:border-gold/40 hover:text-gold transition-colors",
                            children: a.label,
                          }),
                        },
                        a.to,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "mb-10",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-4",
                    children: "FAQ",
                  }),
                  e.jsx("div", {
                    className: "space-y-4",
                    children: s.faq.map((a) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "rounded-xl border border-gold/20 bg-card/50 p-4",
                          children: [
                            e.jsx("h3", {
                              className: "text-sm sm:text-base font-semibold",
                              children: a.question,
                            }),
                            e.jsx("p", {
                              className:
                                "mt-1 text-sm text-muted-foreground leading-relaxed",
                              children: a.answer,
                            }),
                          ],
                        },
                        a.question,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-6 mb-10",
                children: [
                  e.jsx(N, { items: f }),
                  e.jsx(v, {
                    title: s.title,
                    url: `${u}${r}`,
                    dateModified: s.dateModified,
                  }),
                ],
              }),
              e.jsx(g, {}),
            ],
          }),
        }),
        e.jsx(j, {}),
      ],
    });
  };
export { P as default };
