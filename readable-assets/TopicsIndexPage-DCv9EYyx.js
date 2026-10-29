import { j as s, L as a } from "./react-vendor-R4T0bNIa.js";
import { u as t, a1 as o, S as i, N as l, F as n } from "./index-Bwn3vGAd.js";
import { t as m } from "./topics-Ct7Ly1mH.js";
import { t as c } from "./content-figures-Bki_EQx4.js";
import { C as d } from "./ContentFigure-DsDVXXXr.js";
import { w as p } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
import "./CatalogueImage-3ZWkwIDw.js";
const v = () => {
  t();
  const r = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Disposable Vape Topic Hubs | Alibarbar Australia",
        description:
          "Entity hubs for mesh coil, 9000 puff disposables, buying in Australia, Alibarbar Ingot 9000 and competitor comparisons.",
        url: "https://www.ailibarbar.com/topics",
      },
      o([
        { name: "Home", path: "/" },
        { name: "Topics", path: "/topics" },
      ]),
    ],
  };
  return s.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      s.jsx(i, {
        title: "Topic Hubs: Disposable Vapes Australia | Alibarbar",
        description:
          "Explore entity hubs for mesh coil technology, 9000 puff disposables, buying guides, Alibarbar Ingot 9000 and Alibarbar vs IGET comparisons.",
        path: "/topics",
        jsonLd: r,
      }),
      s.jsx(l, {}),
      s.jsx("main", {
        className: "pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24",
        children: s.jsxs("div", {
          className: "container max-w-5xl",
          children: [
            s.jsxs("nav", {
              "aria-label": "Breadcrumb",
              className: "text-sm text-muted-foreground mb-6",
              children: [
                s.jsx(a, {
                  to: "/",
                  className: "hover:text-primary",
                  children: "Home",
                }),
                s.jsx("span", { className: "mx-2", children: "/" }),
                s.jsx("span", {
                  className: "text-foreground",
                  children: "Topics",
                }),
              ],
            }),
            s.jsxs("header", {
              className: "mb-10 sm:mb-14 max-w-2xl",
              children: [
                s.jsx("p", {
                  className:
                    "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                  children: "Entity Hubs",
                }),
                s.jsxs("h1", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                  children: [
                    "Disposable Vape ",
                    s.jsx("span", {
                      className: "text-gold",
                      children: "Topic Hubs",
                    }),
                  ],
                }),
                s.jsx("p", {
                  className:
                    "text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed",
                  children:
                    "Structured knowledge hubs for brand, flavour and comparison long-tail searches. Each hub links guides, products, reviews and comparisons in one place.",
                }),
                s.jsx(d, { ...c() }),
              ],
            }),
            s.jsx("div", {
              className: "grid sm:grid-cols-2 gap-4 sm:gap-6",
              children: m.map((e) =>
                s.jsxs(
                  a,
                  {
                    to: `/topics/${e.slug}`,
                    className:
                      "group rounded-2xl border border-gold/20 bg-card/60 p-5 sm:p-6 flex flex-col gap-3 hover:border-gold/50 transition-colors",
                    children: [
                      s.jsx("h2", {
                        className:
                          "text-lg font-bold leading-snug group-hover:text-primary transition-colors",
                        children: e.title,
                      }),
                      s.jsx("p", {
                        className:
                          "text-sm text-muted-foreground leading-relaxed flex-1",
                        children: e.description,
                      }),
                      s.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1 text-sm font-semibold text-gold",
                        children: [
                          "Read hub ",
                          s.jsx(p, {
                            className:
                              "w-4 h-4 group-hover:translate-x-1 transition-transform",
                          }),
                        ],
                      }),
                    ],
                  },
                  e.slug,
                ),
              ),
            }),
          ],
        }),
      }),
      s.jsx(n, {}),
    ],
  });
};
export { v as default };
