import { j as e, L as s } from "./react-vendor-R4T0bNIa.js";
import { u as t, a1 as i, S as l, N as o, F as n } from "./index-Bwn3vGAd.js";
import { r as c } from "./research-GE_y4zKV.js";
import { w as d } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
const g = () => {
  t();
  const r = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Alibarbar Australia Research",
        url: "https://www.ailibarbar.com/research",
        description:
          "Original research notes from Alibarbar Australia on disposable vape capacity, specifications and Australian buying context.",
      },
      i([
        { name: "Home", path: "/" },
        { name: "Research", path: "/research" },
      ]),
    ],
  };
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx(l, {
        title: "Research | Alibarbar Australia",
        description:
          "Original research notes on high-puff disposable capacity and Alibarbar Ingot 9000 specifications for Australian adult buyers.",
        path: "/research",
        jsonLd: r,
      }),
      e.jsx(o, {}),
      e.jsx("main", {
        className: "pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24",
        children: e.jsxs("div", {
          className: "container max-w-3xl",
          children: [
            e.jsxs("nav", {
              "aria-label": "Breadcrumb",
              className: "text-sm text-muted-foreground mb-6",
              children: [
                e.jsx(s, {
                  to: "/",
                  className: "hover:text-primary",
                  children: "Home",
                }),
                e.jsx("span", { className: "mx-2", children: "/" }),
                e.jsx("span", {
                  className: "text-foreground",
                  children: "Research",
                }),
              ],
            }),
            e.jsxs("header", {
              className: "mb-10",
              children: [
                e.jsx("p", {
                  className:
                    "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                  children: "Original research",
                }),
                e.jsxs("h1", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                  children: [
                    "Research ",
                    e.jsx("span", {
                      className: "text-gold",
                      children: "Notes",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className:
                    "text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed",
                  children:
                    "Dated, method-stated research for AI citation and human reference — not marketing blurbs.",
                }),
                e.jsx("div", { className: "gold-divider mt-6 max-w-[6rem]" }),
              ],
            }),
            e.jsx("ul", {
              className: "space-y-4",
              children: c.map((a) =>
                e.jsx(
                  "li",
                  {
                    children: e.jsxs(s, {
                      to: `/research/${a.slug}`,
                      className:
                        "reveal group block rounded-2xl border border-gold/20 bg-card/50 p-5 sm:p-6 hover:border-gold/50 transition-colors",
                      children: [
                        e.jsxs("p", {
                          className: "text-xs text-muted-foreground mb-2",
                          children: [a.readTime, " · Updated ", a.dateModified],
                        }),
                        e.jsx("h2", {
                          className:
                            "text-lg sm:text-xl font-bold group-hover:text-gold transition-colors",
                          children: a.title,
                        }),
                        e.jsx("p", {
                          className:
                            "mt-2 text-sm text-muted-foreground leading-relaxed",
                          children: a.description,
                        }),
                        e.jsxs("span", {
                          className:
                            "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary",
                          children: [
                            "Read research ",
                            e.jsx(d, { className: "w-4 h-4" }),
                          ],
                        }),
                      ],
                    }),
                  },
                  a.slug,
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
