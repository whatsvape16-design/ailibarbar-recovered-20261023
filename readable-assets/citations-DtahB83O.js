import { j as i } from "./react-vendor-R4T0bNIa.js";
import { T as s } from "./index-Bwn3vGAd.js";
const n = {
  reddit: "Reddit",
  youtube: "YouTube",
  github: "Docs",
  web: "Web",
  medium: "Medium",
  substack: "Substack",
};
function l({ items: t, title: a = "Sources & citations" }) {
  return t.length === 0
    ? null
    : i.jsxs("aside", {
        className: "rounded-2xl border border-gold/20 bg-card/40 p-5 sm:p-6",
        "aria-label": a,
        children: [
          i.jsx("h2", { className: "text-lg font-bold mb-3", children: a }),
          i.jsx("p", {
            className: "text-xs text-muted-foreground mb-4 leading-relaxed",
            children:
              "External links provide community and media context. Product specs and buying claims on this page are verified against Alibarbar Australia inventory and manufacturer documentation.",
          }),
          i.jsx("ul", {
            className: "space-y-3",
            children: t.map((e) =>
              i.jsxs(
                "li",
                {
                  className: "text-sm",
                  children: [
                    i.jsx("span", {
                      className:
                        "inline-block text-[10px] uppercase tracking-wider text-gold font-semibold mr-2",
                      children: n[e.kind],
                    }),
                    i.jsx("a", {
                      href: e.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "font-semibold text-primary hover:text-gold",
                      children: e.title,
                    }),
                    i.jsx("p", {
                      className:
                        "text-xs text-muted-foreground mt-0.5 leading-relaxed",
                      children: e.note,
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
        ],
      });
}
const o = [
  {
    id: "reddit-au-vapers",
    kind: "reddit",
    title: "r/australianvapers — Australian community discussions",
    url: "https://www.reddit.com/r/australianvapers/",
    note: "Public Australian vaping community threads on device longevity, flavours and buying tips.",
  },
  {
    id: "reddit-disposable-search",
    kind: "reddit",
    title: "Reddit search: disposable vape puff count",
    url: "https://www.reddit.com/search/?q=disposable%20vape%209000%20puff&type=link",
    note: "Community anecdotes about high-puff disposables; used as qualitative context, not clinical evidence.",
  },
  {
    id: "youtube-disposable-overview",
    kind: "youtube",
    title: "YouTube search: Alibarbar Ingot 9000 review",
    url: "https://www.youtube.com/results?search_query=Alibarbar+Ingot+9000+review",
    note: "Independent and brand videos discussing the Ingot 9000 form factor and display.",
  },
  {
    id: "github-docs",
    kind: "github",
    title: "Alibarbar Australia public documentation (Markdown)",
    url: `${s}/documentation`,
    note: "Structured product, ordering and safety docs mirrored from the site knowledge base.",
  },
  {
    id: "medium-hub",
    kind: "medium",
    title: "Syndication hub (Medium / Substack mirrors)",
    url: `${s}/syndication`,
    note: "Canonical articles live on ailibarbar.com; Medium and Substack posts sync and link back.",
  },
  {
    id: "official-site",
    kind: "web",
    title: "Alibarbar Australia — catalogue website",
    url: s,
    note: "Primary source for listed specifications, pricing in code, shipping policy and authenticity checklists. Not a determination of lawful supply.",
  },
  {
    id: "tga-vaping-hub",
    kind: "web",
    title: "TGA vaping hub (Australian Government)",
    url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/vaping-hub",
    note: "Official Australian regulatory source for current vaping supply, advertising and nicotine-strength conditions.",
  },
];
function r(t) {
  const a = new Map(o.map((e) => [e.id, e]));
  return t.map((e) => a.get(e)).filter((e) => !!e);
}
const c = r([
    "tga-vaping-hub",
    "reddit-au-vapers",
    "github-docs",
    "official-site",
  ]),
  p = r([
    "reddit-disposable-search",
    "youtube-disposable-overview",
    "official-site",
  ]);
r([
  "reddit-au-vapers",
  "reddit-disposable-search",
  "youtube-disposable-overview",
  "github-docs",
]);
export { l as C, p as a, r as c, c as d };
