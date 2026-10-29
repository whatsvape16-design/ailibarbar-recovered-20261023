import { j as e, L as a } from "./react-vendor-R4T0bNIa.js";
const o = [
  {
    label: "Alibarbar Ingot 9000",
    to: "/ingot-9000",
    description: "Specs, price, flavours, charging and how to use",
  },
  {
    label: "Best Alibarbar Australia",
    to: "/best-alibarbar-australia",
    description: "2026 ranked Ingot 9000 guide",
  },
  {
    label: "Topics",
    to: "/topics",
    description: "Entity hubs for brand & comparison searches",
  },
  {
    label: "About Alibarbar Australia",
    to: "/about-alibarbar-australia",
    description: "Canonical Alibarbar facts for AI & humans",
  },
  { label: "Guides", to: "/guides", description: "How-to and product guides" },
  { label: "Compare", to: "/compare", description: "Alibarbar vs competitors" },
  {
    label: "Research",
    to: "/research",
    description: "Original capacity & spec research",
  },
  { label: "Reviews", to: "/reviews", description: "Device & flavour reviews" },
  { label: "FAQ", to: "/faq", description: "40+ answered questions" },
  {
    label: "Documentation",
    to: "/documentation",
    description: "Specs, ordering & safety docs",
  },
  {
    label: "Syndication",
    to: "/syndication",
    description: "Medium / Substack sync map",
  },
  { label: "Shipping", to: "/shipping", description: "Delivery policy" },
];
function s() {
  return e.jsxs("nav", {
    "aria-label": "Explore more",
    className: "mt-14 rounded-2xl border border-gold/20 bg-card/40 p-5 sm:p-6",
    children: [
      e.jsx("h2", {
        className: "text-lg font-bold mb-4",
        children: "Explore Alibarbar Australia",
      }),
      e.jsx("ul", {
        className: "grid sm:grid-cols-2 gap-3",
        children: o.map((r) =>
          e.jsx(
            "li",
            {
              children: e.jsxs(a, {
                to: r.to,
                className:
                  "group block rounded-xl border border-gold/15 bg-background/50 p-3 hover:border-gold/40 transition-colors",
                children: [
                  e.jsx("span", {
                    className:
                      "text-sm font-semibold text-primary group-hover:text-gold",
                    children: r.label,
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground mt-0.5",
                    children: r.description,
                  }),
                ],
              }),
            },
            r.to,
          ),
        ),
      }),
    ],
  });
}
export { s as C };
