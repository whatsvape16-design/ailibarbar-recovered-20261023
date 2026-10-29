import { j as e, L as a } from "./react-vendor-R4T0bNIa.js";
import { u as r, S as i, N as l, K as o, F as n } from "./index-Bwn3vGAd.js";
import { Q as d, w as m } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
const g = () => {
  r();
  const t = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Alibarbar Vape Guides",
        description:
          "Guides and resources for Alibarbar vapes in Australia — Ingot specs, where to buy and flavour picks.",
        url: "https://www.ailibarbar.com/guides",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ailibarbar.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guides",
            item: "https://www.ailibarbar.com/guides",
          },
        ],
      },
    ],
  };
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx(i, {
        title: "Vape Guides & Resources | Alibarbar Australia",
        description:
          "Read Alibarbar vape guides for Australia — where to buy, Ingot 9000 vs 20000, puff counts, flavour picks and buying basics.",
        path: "/guides",
        jsonLd: t,
      }),
      e.jsx(l, {}),
      e.jsx("main", {
        className: "pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24",
        children: e.jsxs("div", {
          className: "container max-w-5xl",
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
                  children: "Guides",
                }),
              ],
            }),
            e.jsxs("header", {
              className: "mb-10 sm:mb-14 max-w-2xl",
              children: [
                e.jsx("p", {
                  className:
                    "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                  children: "Knowledge Centre",
                }),
                e.jsxs("h1", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                  children: [
                    "Alibarbar ",
                    e.jsx("span", {
                      className: "text-gold",
                      children: "Vape Guides",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className:
                    "text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed",
                  children:
                    "Clear, practical guides to the Alibarbar Ingot 9000 — how it works, how long it lasts, how to choose a flavour, and what adult vapers in Australia should know.",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid sm:grid-cols-2 gap-4 sm:gap-6",
              children: o.map((s) =>
                e.jsxs(
                  a,
                  {
                    to: `/guides/${s.slug}`,
                    className:
                      "reveal group rounded-2xl border border-gold/20 bg-card/60 p-6 flex flex-col gap-3 hover:border-gold/50 transition-colors",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-xs uppercase tracking-wide text-primary",
                        children: [
                          e.jsx(d, { className: "w-4 h-4" }),
                          s.category,
                          " · ",
                          s.readTime,
                        ],
                      }),
                      e.jsx("h2", {
                        className:
                          "text-lg sm:text-xl font-bold leading-snug group-hover:text-primary transition-colors",
                        children: s.title,
                      }),
                      e.jsx("p", {
                        className:
                          "text-sm text-muted-foreground leading-relaxed flex-1",
                        children: s.description,
                      }),
                      e.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1 text-sm font-semibold text-gold",
                        children: [
                          "Read guide ",
                          e.jsx(m, {
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
        }),
      }),
      e.jsx(n, {}),
    ],
  });
};
export { g as default };
