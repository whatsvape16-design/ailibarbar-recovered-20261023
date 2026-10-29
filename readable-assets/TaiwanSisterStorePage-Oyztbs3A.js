import { j as e, L as o } from "./react-vendor-R4T0bNIa.js";
import {
  u as l,
  T as i,
  a1 as n,
  S as d,
  N as c,
  F as m,
} from "./index-Bwn3vGAd.js";
import { C as u } from "./ContentHubLinks-D60vS9Nb.js";
import { a8 as p } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
const a = {
    slug: "taiwan-heated-tobacco-store",
    title: "Taiwan Heated-Tobacco Store (Fasoulvape)",
    description:
      "Alibarbar Australia is the AU Ingot 9000 store. For Taiwan heated tobacco and dual-heat devices, see our sister-store overview and how the sites differ.",
    intro:
      "Alibarbar Australia sells authentic Alibarbar Ingot 9000 disposables for adult customers in Australia. We do not sell Fasoul or HiTASTE heated-tobacco devices here. Those Taiwan catalogue pages live on our sister store, fasoulvape.com.",
    dateModified: "2026-10-06",
    links: [
      {
        label: "Fasoulvape homepage",
        url: "https://fasoulvape.com/",
        note: "Taiwan heated-tobacco storefront (zh-TW)",
      },
      {
        label: "Shop devices",
        url: "https://fasoulvape.com/shop",
        note: "Fasoul / HiTASTE dual-heat and related hosts",
      },
      {
        label: "Taiwan buying guides",
        url: "https://fasoulvape.com/guide",
        note: "How dual-heat works, TEREA compatibility, model picks",
      },
      {
        label: "Blog",
        url: "https://fasoulvape.com/blog",
        note: "7-11 pickup, F2 endurance, Q1 vs Q1 PRO and more",
      },
      {
        label: "7-11 pickup guide",
        url: "https://fasoulvape.com/blog/711-pickup",
        note: "Cash on 7-11 pickup flow for Taiwan orders",
      },
    ],
    boundaries: [
      "ailibarbar.com = Australia, Alibarbar Ingot 9000 disposables, AUD checkout, pharmacy-channel rules.",
      "fasoulvape.com = Taiwan, heated tobacco / dual-heat hosts, TEREA–SENTIA sticks, 7-11 pickup payment.",
      "Do not mix HEETS, disposable e-liquid puffs, or AU pharmacy fulfilment into the Taiwan store narrative.",
    ],
  },
  j = () => {
    l();
    const t = `/${a.slug}`,
      r = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            name: a.title,
            description: a.description,
            url: `${i}${t}`,
            dateModified: a.dateModified,
          },
          n([
            { name: "Home", path: "/" },
            { name: a.title, path: t },
          ]),
        ],
      };
    return e.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        e.jsx(d, {
          title: `${a.title} | Alibarbar Australia`,
          description: a.description,
          path: t,
          jsonLd: r,
        }),
        e.jsx(c, {}),
        e.jsx("main", {
          className: "pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24",
          children: e.jsxs("div", {
            className: "container max-w-3xl",
            children: [
              e.jsxs("nav", {
                "aria-label": "Breadcrumb",
                className: "text-sm text-muted-foreground mb-6",
                children: [
                  e.jsx(o, {
                    to: "/",
                    className: "hover:text-primary",
                    children: "Home",
                  }),
                  e.jsx("span", { className: "mx-2", children: "/" }),
                  e.jsx("span", {
                    className: "text-foreground",
                    children: "Taiwan store",
                  }),
                ],
              }),
              e.jsxs("header", {
                className: "mb-10",
                children: [
                  e.jsx("p", {
                    className:
                      "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                    children: "Sister store",
                  }),
                  e.jsxs("h1", {
                    className:
                      "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                    children: [
                      "Taiwan heated-tobacco store",
                      " ",
                      e.jsx("span", {
                        className: "text-gold",
                        children: "Fasoulvape",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className:
                      "text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed",
                    children: a.intro,
                  }),
                  e.jsx("div", { className: "gold-divider mt-6 max-w-[6rem]" }),
                ],
              }),
              e.jsxs("section", {
                className: "mb-10",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-4",
                    children: "Go to fasoulvape.com",
                  }),
                  e.jsx("ul", {
                    className: "space-y-3",
                    children: a.links.map((s) =>
                      e.jsxs(
                        "li",
                        {
                          className:
                            "rounded-2xl border border-gold/20 bg-card/50 p-5",
                          children: [
                            e.jsxs("a", {
                              href: s.url,
                              target: "_blank",
                              rel: "noopener",
                              className:
                                "inline-flex items-center gap-2 text-base font-bold text-primary hover:text-gold",
                              children: [
                                s.label,
                                e.jsx(p, {
                                  className: "h-4 w-4 shrink-0",
                                  "aria-hidden": !0,
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "mt-2 text-sm text-muted-foreground leading-relaxed",
                              children: s.note,
                            }),
                            e.jsx("p", {
                              className:
                                "mt-1 text-xs text-muted-foreground break-all",
                              children: s.url,
                            }),
                          ],
                        },
                        s.url,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "mb-10",
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold mb-3",
                    children: "What stays on ailibarbar.com",
                  }),
                  e.jsx("ul", {
                    className:
                      "space-y-2 text-sm sm:text-base text-muted-foreground",
                    children: a.boundaries.map((s) =>
                      e.jsxs("li", { children: ["• ", s] }, s),
                    ),
                  }),
                ],
              }),
              e.jsxs("p", {
                className: "mb-10 text-sm text-muted-foreground",
                children: [
                  "Prefer a short store note?",
                  " ",
                  e.jsx(o, {
                    to: "/blog/taiwan-fasoulvape-sister-store",
                    className: "font-semibold text-primary hover:text-gold",
                    children: "Read the blog intro →",
                  }),
                ],
              }),
              e.jsx(u, {}),
            ],
          }),
        }),
        e.jsx(m, {}),
      ],
    });
  };
export { j as default };
