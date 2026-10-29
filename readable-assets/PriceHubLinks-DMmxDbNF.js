import { j as e, L as a } from "./react-vendor-R4T0bNIa.js";
import { a7 as r } from "./index-Bwn3vGAd.js";
const s = "/guides/alibarbar-ingot-9000-price-guide-australia";
function o({ currentPath: i }) {
  return e.jsxs("aside", {
    className:
      "mt-12 rounded-2xl border border-gold/25 bg-card/50 p-5 sm:p-6 text-sm sm:text-base leading-relaxed",
    children: [
      e.jsx("h2", {
        className: "text-lg font-bold mb-2",
        children: "Buying the Ingot 9000 in Australia",
      }),
      e.jsxs("p", {
        className: "text-muted-foreground",
        children: [
          "Current catalogue prices: A$",
          r.single,
          " single, A$",
          r.pack3,
          " for 3, A$",
          r.pack5,
          " for 5, A$",
          r.pack10,
          " for 10 and A$",
          r.pack20,
          " for 20, with A$10 shipping under 20 devices and free shipping at 20+. Browse flavours and packs on the",
          " ",
          e.jsx(a, {
            to: "/ingot-9000",
            className: "text-primary underline underline-offset-2",
            children: "Ingot 9000 Australia",
          }),
          " ",
          "page",
          i === s
            ? "."
            : e.jsxs(e.Fragment, {
                children: [
                  ", or compare cost per device in the",
                  " ",
                  e.jsx(a, {
                    to: s,
                    className: "text-primary underline underline-offset-2",
                    children: "Ingot 9000 price Australia",
                  }),
                  " ",
                  "guide.",
                ],
              }),
        ],
      }),
    ],
  });
}
export { o as P };
