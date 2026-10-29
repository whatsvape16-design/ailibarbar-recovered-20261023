import { v as p, r as u, j as t, L as d } from "./react-vendor-R4T0bNIa.js";
import {
  S as m,
  N as h,
  F as f,
  G as x,
  c as b,
  K as g,
  L as y,
} from "./index-Bwn3vGAd.js";
import { c as $ } from "./comparisons-BN826Jyq.js";
import { b as w } from "./blog-B2YumUDa.js";
import { r as j } from "./reviews-DJ7_M9DW.js";
import { b as i } from "./best-alibarbar-Bj86B0m0.js";
import { b as l } from "./brand-knowledge-CHUGPLTm.js";
import { z as N } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
function v(c) {
  const s = c.trim().toLowerCase();
  if (!s) return [];
  const o = [];
  ((`${i.title} ${i.h1} ${i.description}`.toLowerCase().includes(s) ||
    (s.includes("best") && s.includes("alibarbar"))) &&
    o.push({
      title: i.h1,
      description: i.description,
      to: i.path,
      type: "Ranked Guide",
    }),
    (`${l.title} ${l.description}`.toLowerCase().includes(s) ||
      s.includes("about alibarbar") ||
      s.includes("what is alibarbar")) &&
      o.push({
        title: l.title,
        description: l.description,
        to: l.path,
        type: "Brand",
      }));
  for (const e of x.filter((r) => !r.isPlaceholder)) {
    const r = b(e);
    `${r} ${e.name} ${e.excerpt} ${e.tag}`.toLowerCase().includes(s) &&
      o.push({
        title: r,
        description: e.excerpt,
        to: `/product/${e.slug}`,
        type: "Product",
      });
  }
  for (const e of g)
    `${e.title} ${e.description}`.toLowerCase().includes(s) &&
      o.push({
        title: e.title,
        description: e.description,
        to: `/guides/${e.slug}`,
        type: "Guide",
      });
  for (const e of y)
    `${e.question} ${e.answer}`.toLowerCase().includes(s) &&
      o.push({
        title: e.question,
        description: e.answer,
        to: "/faq",
        type: "FAQ",
      });
  for (const e of $)
    `${e.title} ${e.description} ${e.competitor}`.toLowerCase().includes(s) &&
      o.push({
        title: e.title,
        description: e.description,
        to: `/compare/${e.slug}`,
        type: "Compare",
      });
  for (const e of w)
    `${e.title} ${e.description}`.toLowerCase().includes(s) &&
      o.push({
        title: e.title,
        description: e.description,
        to: `/blog/${e.slug}`,
        type: "Blog",
      });
  for (const e of j)
    `${e.title} ${e.description}`.toLowerCase().includes(s) &&
      o.push({
        title: e.title,
        description: e.description,
        to: `/reviews/${e.slug}`,
        type: "Review",
      });
  return o.slice(0, 24);
}
const Q = () => {
  const [c, s] = p(),
    o = c.get("q") ?? "",
    n = u.useMemo(() => v(o), [o]);
  return t.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      t.jsx(m, {
        title: "Search | Alibarbar Australia",
        description:
          "Search Alibarbar Australia for products, guides, comparisons, reviews and FAQs.",
        path: "/search",
        noindex: !0,
      }),
      t.jsx(h, {}),
      t.jsxs("main", {
        className:
          "container pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24 max-w-3xl",
        children: [
          t.jsx("h1", {
            className: "text-3xl sm:text-4xl font-extrabold mb-6",
            children: "Search",
          }),
          t.jsxs("form", {
            className: "relative mb-8",
            onSubmit: (a) => {
              a.preventDefault();
              const e = new FormData(a.currentTarget),
                r = String(e.get("q") ?? "").trim();
              s(r ? { q: r } : {});
            },
            children: [
              t.jsx(N, {
                className:
                  "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
              }),
              t.jsx("input", {
                name: "q",
                type: "search",
                defaultValue: o,
                placeholder: "Search flavours, guides, FAQs…",
                className:
                  "w-full min-h-[48px] pl-12 pr-4 rounded-xl border border-gold/30 bg-card/50 text-base",
                autoComplete: "off",
              }),
            ],
          }),
          o.trim()
            ? n.length === 0
              ? t.jsxs("p", {
                  className: "text-muted-foreground",
                  children: [
                    'No results for "',
                    o,
                    '". Browse our',
                    " ",
                    t.jsx(d, {
                      to: "/flavours",
                      className: "text-primary font-semibold hover:text-gold",
                      children: "flavours",
                    }),
                    " or",
                    " ",
                    t.jsx(d, {
                      to: "/faq",
                      className: "text-primary font-semibold hover:text-gold",
                      children: "FAQ",
                    }),
                    ".",
                  ],
                })
              : t.jsx("ul", {
                  className: "space-y-4",
                  children: n.map((a) =>
                    t.jsx(
                      "li",
                      {
                        children: t.jsxs(d, {
                          to: a.to,
                          className:
                            "block rounded-2xl border border-gold/20 bg-card/50 p-5 hover:border-gold/45 transition-colors",
                          children: [
                            t.jsx("span", {
                              className:
                                "text-[10px] uppercase tracking-widest text-primary font-semibold",
                              children: a.type,
                            }),
                            t.jsx("h2", {
                              className: "text-base sm:text-lg font-bold mt-1",
                              children: a.title,
                            }),
                            t.jsx("p", {
                              className:
                                "text-sm text-muted-foreground mt-1 line-clamp-2",
                              children: a.description,
                            }),
                          ],
                        }),
                      },
                      `${a.type}-${a.to}-${a.title}`,
                    ),
                  ),
                })
            : t.jsx("p", {
                className: "text-muted-foreground text-sm sm:text-base",
                children:
                  'Try "Peach Ice", "how long does it last", or "IGET comparison".',
              }),
        ],
      }),
      t.jsx(f, {}),
    ],
  });
};
export { Q as default };
