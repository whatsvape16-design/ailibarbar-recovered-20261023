import { r as g, j as e, L as t } from "./react-vendor-R4T0bNIa.js";
import {
  ac as p,
  X as l,
  T as m,
  af as d,
  ag as x,
  ah as u,
  ad as b,
  a1 as f,
  u as y,
  ai as v,
  S as j,
  N as w,
  Q as N,
  R as I,
  aj as k,
  l as A,
  F,
} from "./index-Bwn3vGAd.js";
import { C as S } from "./ContentByline-DZdt81X3.js";
import { K as B } from "./KeyTakeaways-BS73GR4f.js";
import { A as C, a as q, b as T, c as E } from "./accordion-BBH6Vkfz.js";
import { F as L } from "./FlavourFamilyNav-wkokEJYz.js";
import { C as $ } from "./CatalogueImage-3ZWkwIDw.js";
import { w as P } from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
import "./ui-vendor-DvfZJg73.js";
import "./utils-CytzSlOG.js";
const R = [
    {
      preference: "Berry without strong ice",
      pick: "Quadruple Berry",
      slug: "quadruple-berry",
      reason:
        "A smooth four-berry blend with high sweetness and minimal cooling.",
    },
    {
      preference: "Fruit with a strong chill",
      pick: "Blackberry Ice",
      slug: "blackberry-ice",
      reason:
        "Dark berry flavour with one of the stronger cooling finishes in this catalogue.",
    },
    {
      preference: "A gentler iced fruit",
      pick: "Peach Ice",
      slug: "peach-ice",
      reason:
        "Ripe peach leads, followed by a moderate rather than aggressive cooling finish.",
    },
    {
      preference: "Sweet tropical fruit",
      pick: "Mango Magic",
      slug: "mango-magic",
      reason:
        "The richest mango-led option, with no added cooling in the published taste profile.",
    },
    {
      preference: "Creamy and complex",
      pick: "Strawberry Coconut Watermelon",
      slug: "strawberry-coconut-watermelon",
      reason:
        "A layered fruit blend with a softer coconut character rather than an icy finish.",
    },
    {
      preference: "Light and aromatic",
      pick: "Strawberry Lychee",
      slug: "strawberry-lychee",
      reason:
        "Sweet strawberry with a floral lychee lift, for readers who find dense berry blends too heavy.",
    },
    {
      preference: "One clear berry note",
      pick: "Blueberry Blast",
      slug: "blueberry-blast",
      reason:
        "Blueberry on its own rather than a mixed-berry blend, with no added cooling in the taste profile.",
    },
  ],
  h = [
    {
      question: "Which Alibarbar Ingot 9000 flavour should I choose?",
      answer:
        "Choose by the taste profile you already enjoy. Quadruple Berry is a smooth non-iced berry option, Blackberry Ice and Grape Ice suit stronger cooling preferences, Mango Magic is the sweetest tropical option, Strawberry Lychee is lighter and more aromatic, and Blueberry Blast keeps to a single blueberry note. Taste is subjective, so the ratings on this page are comparison guides rather than guarantees.",
    },
    {
      question: "Which Ingot 9000 flavours in this catalogue are icy?",
      answer:
        "The current iced-fruit group includes Peach Ice, Blackberry Ice, Grape Ice and Chupa Chups Strawberry. Peach Ice has the gentlest published cooling score of those four; Blackberry Ice, Grape Ice and Chupa Chups Strawberry are rated colder.",
    },
    {
      question: "Do all Ingot 9000 flavours use the same device?",
      answer:
        "The single-flavour products in this catalogue use the same Ingot 9000 hardware. The listed difference is the flavour profile. Check the package label for the exact nicotine strength because it can vary by batch and region.",
    },
    {
      question: "Does this page list every Alibarbar flavour sold worldwide?",
      answer:
        "No. It lists the flavours currently published in the ailibarbar.com Australian catalogue. Other sellers and markets may carry additional, renamed or discontinued flavours, and availability can change.",
    },
  ];
function M(i) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...p(),
      {
        "@type": "CollectionPage",
        "@id": l.webpageId("/flavours"),
        name: "Alibarbar Flavours Australia — Alibarbar Ingot 9000 vape flavours",
        description:
          "Compare the current ailibarbar.com Ingot 9000 flavour catalogue by taste family, sweetness and cooling.",
        url: `${m}/flavours`,
        isPartOf: { "@id": l.websiteId },
        about: [{ "@id": l.brandId }, { "@id": l.productGroupId }],
        mainEntity: { "@id": l.productGroupId },
        publisher: { "@id": l.organizationId },
        inLanguage: "en-AU",
        dateModified: d,
      },
      x(),
      {
        "@type": "ItemList",
        name: "Current Alibarbar Ingot 9000 flavour guides",
        numberOfItems: i.length,
        itemListElement: i.map((r, c) => {
          const a = u(r.slug);
          return a
            ? b(a, c + 1, `/flavours/${r.slug}`)
            : {
                "@type": "ListItem",
                position: c + 1,
                name: r.name,
                url: `${m}/flavours/${r.slug}`,
              };
        }),
      },
      {
        "@type": "FAQPage",
        "@id": l.faqId("/flavours"),
        mainEntity: h.map((r) => ({
          "@type": "Question",
          name: r.question,
          acceptedAnswer: { "@type": "Answer", text: r.answer },
        })),
      },
      f([
        { name: "Home", path: "/" },
        { name: "Flavours", path: "/flavours" },
      ]),
    ],
  };
}
const J = () => {
  y();
  const i = v(),
    r = i.flatMap((a) => a.flavours);
  g.useEffect(() => {
    const a = window.location.hash.replace("#", "");
    a &&
      requestAnimationFrame(() => {
        var o;
        (o = document.getElementById(a)) == null ||
          o.scrollIntoView({ behavior: "smooth", block: "start" });
      });
  }, []);
  const c = M(r);
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx(j, {
        title: `Alibarbar Flavours Australia (2026): All ${r.length} Alibarbar Vape Flavours, Ingot 9000`,
        description: `Browse all ${r.length} Alibarbar Ingot 9000 flavours in Australia — compare taste, sweetness and cooling, then buy singles or build a custom pack. 18+.`,
        path: "/flavours",
        jsonLd: c,
      }),
      e.jsx(w, {}),
      e.jsx("main", {
        className: "pt-[calc(6rem+env(safe-area-inset-top))] pb-16 sm:pb-24",
        children: e.jsxs("div", {
          className: "container max-w-5xl",
          children: [
            e.jsxs("nav", {
              "aria-label": "Breadcrumb",
              className: "text-sm text-muted-foreground mb-6",
              children: [
                e.jsx(t, {
                  to: "/",
                  className: "hover:text-primary",
                  children: "Home",
                }),
                e.jsx("span", { className: "mx-2", children: "/" }),
                e.jsx("span", {
                  className: "text-foreground",
                  children: "Flavours",
                }),
              ],
            }),
            e.jsxs("header", {
              className: "mb-8 sm:mb-10 max-w-3xl",
              children: [
                e.jsx("p", {
                  className:
                    "text-xs uppercase tracking-[0.25em] text-primary mb-3 font-semibold",
                  children: "Flavour Centre",
                }),
                e.jsxs("h1", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
                  children: [
                    "Alibarbar ",
                    e.jsx("span", {
                      className: "text-gold",
                      children: "Flavours",
                    }),
                    " ",
                    e.jsx("span", {
                      className:
                        "block mt-2 text-base sm:text-lg font-semibold text-foreground/80",
                      children:
                        "Every Alibarbar Ingot 9000 vape flavour in Australia",
                    }),
                  ],
                }),
                e.jsx(S, { dateModified: d }),
                e.jsxs("p", {
                  className:
                    "text-muted-foreground mt-4 text-sm sm:text-base leading-relaxed",
                  children: [
                    "Compare the ",
                    r.length,
                    " flavours currently published in the ailibarbar.com Ingot 9000 catalogue, with taste notes, sweetness and cooling ratings, and who each profile may suit. Prefer a quick list? Read the",
                    " ",
                    e.jsx(t, {
                      to: "/guides/alibarbar-flavours-guide",
                      className: "text-primary font-semibold hover:text-gold",
                      children: "Alibarbar flavours guide",
                    }),
                    ". Ready to buy?",
                    " ",
                    e.jsx(t, {
                      to: "/ingot-9000",
                      className: "text-primary font-semibold hover:text-gold",
                      children: "Alibarbar Ingot 9000 hub",
                    }),
                    " ",
                    "or the",
                    " ",
                    e.jsx(t, {
                      to: "/shop",
                      className: "text-primary font-semibold hover:text-gold",
                      children: "shop",
                    }),
                    ".",
                  ],
                }),
                e.jsx(N, {
                  data: {
                    question:
                      "Which Alibarbar Ingot 9000 flavour should I choose?",
                    answer:
                      "Start with the taste you already prefer: Quadruple Berry for smooth non-iced berries, Blackberry Ice or Grape Ice for a colder finish, Mango Magic for sweet tropical fruit, Peach Ice for gentler cooling, Strawberry Lychee for a lighter aromatic profile, and Blueberry Blast for straight blueberry. These are editorial taste comparisons, not an objective best-to-worst ranking.",
                  },
                }),
                e.jsx("div", {
                  className: "mt-4",
                  children: e.jsx(B, {
                    items: [
                      `${r.length} currently listed flavours, grouped by taste family`,
                      "Sweetness, cooling and smoothness use the same 1–5 editorial scale",
                      "Availability is catalogue-specific; other markets may list different flavours",
                      "Hardware is shared across the single-flavour Ingot 9000 products",
                    ],
                  }),
                }),
                e.jsx("div", {
                  className: "mt-4",
                  children: e.jsx(I, { compact: !0 }),
                }),
              ],
            }),
            e.jsxs("section", {
              "aria-labelledby": "quick-selector-heading",
              className: "mb-10 sm:mb-14",
              children: [
                e.jsxs("div", {
                  className: "max-w-3xl mb-5",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-xs uppercase tracking-[0.2em] text-primary mb-2 font-semibold",
                      children: "Quick selector",
                    }),
                    e.jsx("h2", {
                      id: "quick-selector-heading",
                      className: "text-2xl sm:text-3xl font-extrabold",
                      children: "Choose by the taste you already like",
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed",
                      children:
                        "This is a preference map, not a sales ranking. Open the taste guide for the full scorecard or go straight to the matching product page.",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",
                  children: R.map((a) =>
                    e.jsxs(
                      "article",
                      {
                        className:
                          "rounded-2xl border border-gold/20 bg-card/60 p-4 sm:p-5",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs uppercase tracking-wide text-muted-foreground",
                            children: "If you prefer",
                          }),
                          e.jsx("h3", {
                            className: "font-bold text-base sm:text-lg mt-1",
                            children: a.preference,
                          }),
                          e.jsx("p", {
                            className:
                              "text-sm text-muted-foreground leading-relaxed mt-2",
                            children: a.reason,
                          }),
                          e.jsxs("div", {
                            className:
                              "flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm font-semibold",
                            children: [
                              e.jsxs(t, {
                                to: `/flavours/${a.slug}`,
                                className: "text-primary hover:text-gold",
                                children: [a.pick, " guide"],
                              }),
                              e.jsx(t, {
                                to: `/product/${a.slug}`,
                                className: "text-gold hover:text-primary",
                                children: "Shop →",
                              }),
                            ],
                          }),
                        ],
                      },
                      a.slug,
                    ),
                  ),
                }),
              ],
            }),
            e.jsx(L, { inPage: !0 }),
            e.jsx("div", {
              className: "space-y-12 sm:space-y-16",
              children: i.map((a) => {
                const o = a.flavours;
                return o.length === 0
                  ? null
                  : e.jsxs(
                      "section",
                      {
                        id: k(a.family),
                        className: "scroll-mt-28",
                        children: [
                          e.jsx("h2", {
                            className:
                              "text-2xl sm:text-3xl font-extrabold mb-5",
                            children: a.family,
                          }),
                          e.jsx("div", {
                            className:
                              "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                            children: o.map((s) => {
                              const n = u(s.slug);
                              return e.jsxs(
                                "article",
                                {
                                  className:
                                    "reveal group rounded-2xl border border-gold/20 bg-card/60 overflow-hidden flex flex-col hover:border-gold/50 transition-colors",
                                  children: [
                                    n
                                      ? e.jsxs(t, {
                                          to: `/flavours/${s.slug}`,
                                          className:
                                            "relative aspect-square bg-gradient-to-br from-secondary to-background",
                                          "aria-label": `${s.name} taste guide`,
                                          children: [
                                            e.jsx($, {
                                              src: n.img,
                                              srcSet: n.imgSrcSet,
                                              alt: n.imgAlt ?? A(s.name),
                                              className:
                                                "w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500",
                                            }),
                                            n.inStock
                                              ? null
                                              : e.jsx("span", {
                                                  className:
                                                    "absolute top-2 left-2 rounded-full bg-background/90 border border-gold/30 px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground",
                                                  children: "Out of stock",
                                                }),
                                          ],
                                        })
                                      : null,
                                    e.jsxs("div", {
                                      className:
                                        "p-4 sm:p-5 flex flex-col gap-2 border-t border-gold/15 flex-1",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] uppercase tracking-wide text-primary",
                                          children: s.family,
                                        }),
                                        e.jsx("h3", {
                                          className:
                                            "text-base sm:text-lg font-bold leading-snug group-hover:text-primary transition-colors",
                                          children: e.jsx(t, {
                                            to: `/flavours/${s.slug}`,
                                            children: s.name,
                                          }),
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-sm text-muted-foreground leading-relaxed flex-1",
                                          children: s.tagline,
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-sm font-semibold",
                                          children: [
                                            e.jsxs(t, {
                                              to: `/flavours/${s.slug}`,
                                              className:
                                                "inline-flex items-center gap-1 text-primary hover:text-gold",
                                              children: [
                                                "Taste guide",
                                                e.jsx(P, {
                                                  className:
                                                    "w-4 h-4 group-hover:translate-x-1 transition-transform",
                                                }),
                                              ],
                                            }),
                                            e.jsx(t, {
                                              to: `/product/${s.slug}`,
                                              className:
                                                "text-gold hover:text-primary",
                                              children: "Shop",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                s.slug,
                              );
                            }),
                          }),
                        ],
                      },
                      a.family,
                    );
              }),
            }),
            e.jsxs("section", {
              className:
                "mt-14 sm:mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10 items-start",
              children: [
                e.jsxs("div", {
                  className:
                    "rounded-2xl border border-gold/20 bg-card/50 p-5 sm:p-6",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-xs uppercase tracking-[0.2em] text-primary mb-2 font-semibold",
                      children: "How we compare",
                    }),
                    e.jsx("h2", {
                      className: "text-2xl sm:text-3xl font-extrabold",
                      children: "A consistent taste scale",
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm sm:text-base text-muted-foreground leading-relaxed mt-3",
                      children:
                        "Each guide scores sweetness, cooling and smoothness from 1 to 5 using the same editorial scale. The scores help compare this catalogue; they are not laboratory measurements, customer-vote totals or claims that one flavour is objectively best.",
                    }),
                    e.jsxs("p", {
                      className:
                        "text-sm text-muted-foreground leading-relaxed mt-3",
                      children: [
                        "Product names and availability were checked against the current store catalogue on ",
                        d,
                        ". Packaging remains the source of truth for the exact contents of an individual unit.",
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  id: "flavour-faq",
                  className: "scroll-mt-28",
                  children: [
                    e.jsx("h2", {
                      className: "text-2xl sm:text-3xl font-extrabold mb-5",
                      children: "Ingot 9000 flavour questions",
                    }),
                    e.jsx(C, {
                      type: "single",
                      collapsible: !0,
                      className:
                        "rounded-2xl border border-gold/25 bg-card/50 px-4 sm:px-6",
                      children: h.map((a, o) =>
                        e.jsxs(
                          q,
                          {
                            value: `flavour-faq-${o}`,
                            className: "border-gold/15",
                            children: [
                              e.jsx(T, {
                                className:
                                  "text-left text-sm sm:text-base font-semibold hover:text-primary",
                                children: a.question,
                              }),
                              e.jsx(E, {
                                className:
                                  "text-sm sm:text-base text-muted-foreground leading-relaxed",
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
              ],
            }),
          ],
        }),
      }),
      e.jsx(F, {}),
    ],
  });
};
export { J as default, M as flavoursIndexJsonLd };
