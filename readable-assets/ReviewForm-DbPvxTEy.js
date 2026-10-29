import { r as p, j as t } from "./react-vendor-R4T0bNIa.js";
import { S as E, b as _, s as q } from "./reviews-api-CwdLLAEm.js";
import { D as Q, a as z, c as Y } from "./dialog-Czj21GWi.js";
import { au as X, b as V, c as J, t as K } from "./index-Bwn3vGAd.js";
import { X as L, B as Z, l as ee } from "./icons-vendor-BquxQ5DR.js";
import { u as x } from "./ui-vendor-DvfZJg73.js";
import { AuthModal as T } from "./AuthModal-DnA7dnTh.js";
import { B as C } from "./button-DuRxsHai.js";
import { T as te } from "./textarea-v45I66dK.js";
const re = "(max-width: 640px) 80px, 112px",
  ae = "min(92vw, 40rem)";
function u(e) {
  const { hiresSrc: r, hiresWidth: a, ...o } = e;
  return { ...o, srcSet: `${o.src} ${o.width}w, ${r} ${a}w` };
}
const oe = [
    u({
      src: "/reviews/review-01.webp",
      alt: "Customer holding a clear bag of gold Alibarbar Ingot 9000 devices",
      width: 480,
      height: 640,
      hiresSrc: "/reviews/review-01-bag-of-devices.webp",
      hiresWidth: 1086,
    }),
    u({
      src: "/reviews/review-02.webp",
      alt: "Two gold Alibarbar Ingot 9000 devices on a dark wooden surface",
      width: 480,
      height: 640,
      hiresSrc: "/reviews/review-02-two-on-dark-wood.webp",
      hiresWidth: 1280,
    }),
    {
      src: "/reviews/review-03.webp",
      alt: "Customer photo of assorted vape devices and boxes on a table",
      width: 480,
      height: 640,
      heldReason:
        "Photo does not clearly show an Alibarbar device, so no high-resolution copy is published",
    },
    {
      src: "/reviews/review-04.webp",
      alt: "Customer photo of pod kit boxes on a shelf",
      width: 640,
      height: 480,
      heldReason:
        "Original shows a parcel shipping label with a tracking barcode",
    },
    {
      src: "/reviews/review-05.webp",
      alt: "Customer photo of a blue and a grey disposable vape on a counter",
      width: 480,
      height: 640,
      heldReason:
        "Photo does not clearly show an Alibarbar device, so no high-resolution copy is published",
    },
    u({
      src: "/reviews/review-06.webp",
      alt: "Gold Alibarbar Ingot 9000 standing next to its retail box",
      width: 480,
      height: 640,
      hiresSrc: "/reviews/review-06-beside-box.webp",
      hiresWidth: 1280,
    }),
    u({
      src: "/reviews/review-07.webp",
      alt: "Gold Alibarbar Ingot 9000 lying on its retail box on a desk mat",
      width: 640,
      height: 480,
      hiresSrc: "/reviews/review-07-on-box-desk-mat.webp",
      hiresWidth: 1707,
    }),
    u({
      src: "/reviews/review-08.webp",
      alt: "Gold Alibarbar Ingot 9000 and its retail box in a car centre console",
      width: 640,
      height: 480,
      hiresSrc: "/reviews/review-08-car-console.webp",
      hiresWidth: 1195,
    }),
    u({
      src: "/reviews/review-09.webp",
      alt: "Two gold Alibarbar Ingot 9000 devices standing on a desk",
      width: 480,
      height: 640,
      hiresSrc: "/reviews/review-09-two-on-desk.webp",
      hiresWidth: 1280,
    }),
    u({
      src: "/reviews/review-10.webp",
      alt: "Two gold Alibarbar Ingot 9000 devices beside their retail box on a wooden table",
      width: 640,
      height: 480,
      hiresSrc: "/reviews/review-10-two-on-box.webp",
      hiresWidth: 1707,
    }),
    u({
      src: "/reviews/review-11.webp",
      alt: "Hand holding a gold Alibarbar Ingot 9000 next to a second device",
      width: 480,
      height: 640,
      hiresSrc: "/reviews/review-11-hand-with-two.webp",
      hiresWidth: 960,
    }),
    u({
      src: "/reviews/review-12.webp",
      alt: "Open hand holding a gold Alibarbar Ingot 9000",
      width: 480,
      height: 640,
      hiresSrc: "/reviews/review-12-open-hand.webp",
      hiresWidth: 960,
    }),
    u({
      src: "/reviews/review-13.webp",
      alt: "Hand holding two gold Alibarbar Ingot 9000 devices",
      width: 480,
      height: 640,
      hiresSrc: "/reviews/review-13-hand-holding-two.webp",
      hiresWidth: 960,
    }),
    {
      src: "/reviews/review-14.webp",
      alt: "Four Alibarbar Ingot 9000 boxes: California Sunset, Blackberry Ice, Quadruple Berry and Chupa Chups Strawberry",
      width: 640,
      height: 360,
      heldReason:
        "Published photo includes an AusPost label that may show a recipient address",
    },
    {
      src: "/reviews/review-15.webp",
      alt: "Rows of gold Alibarbar Ingot 9000 boxes in an open shipping carton",
      width: 360,
      height: 640,
    },
    {
      src: "/reviews/review-16.webp",
      alt: "Shrink-wrapped Alibarbar Ingot 9000 Chupa Chups Strawberry box",
      width: 479,
      height: 640,
    },
    {
      src: "/reviews/review-17.webp",
      alt: "Alibarbar Ingot 9000 Grape Ice box in front of a carton of boxes",
      width: 360,
      height: 640,
    },
    {
      src: "/reviews/review-18.webp",
      alt: "Three open display cartons filled with Alibarbar Ingot 9000 boxes",
      width: 640,
      height: 360,
    },
  ],
  se = new Map(oe.map((e) => [e.src, e]));
function ie(e) {
  const r = se.get(e);
  return r
    ? {
        src: r.src,
        alt: r.alt,
        width: r.width,
        height: r.height,
        srcSet: r.srcSet,
      }
    : { src: e, alt: X };
}
const ne = ({ photos: e, large: r }) => {
  const [a, o] = p.useState(null),
    d = e.map((s) => ie(s));
  return d.length
    ? t.jsxs(t.Fragment, {
        children: [
          t.jsx("ul", {
            className: "flex flex-wrap gap-2",
            children: d.map((s, l) =>
              t.jsx(
                "li",
                {
                  children: t.jsx("button", {
                    type: "button",
                    onClick: () => o(s),
                    className:
                      "block rounded-lg overflow-hidden border border-gold/20 hover:border-gold/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    "aria-label": `View larger: ${s.alt}`,
                    children: t.jsx("img", {
                      src: s.src,
                      alt: s.alt,
                      width: s.width,
                      height: s.height,
                      srcSet: s.srcSet,
                      sizes: s.srcSet ? re : void 0,
                      className: r
                        ? "h-24 w-24 sm:h-28 sm:w-28 object-cover"
                        : "h-20 w-20 sm:h-24 sm:w-24 object-cover",
                      loading: "lazy",
                      decoding: "async",
                    }),
                  }),
                },
                `${s.src}-${l}`,
              ),
            ),
          }),
          t.jsx(Q, {
            open: !!a,
            onOpenChange: (s) => !s && o(null),
            children: t.jsxs(z, {
              className:
                "max-w-[min(100vw-1.5rem,40rem)] border-gold/30 bg-background/95 p-3 sm:p-4 gap-0 [&>button.absolute.right-4]:hidden",
              children: [
                t.jsx(Y, {
                  className: "sr-only",
                  children:
                    (a == null ? void 0 : a.alt) ?? "Customer review photo",
                }),
                a
                  ? t.jsx("img", {
                      src: a.src,
                      alt: a.alt,
                      width: a.width,
                      height: a.height,
                      srcSet: a.srcSet,
                      sizes: a.srcSet ? ae : void 0,
                      className:
                        "w-full max-h-[min(80vh,720px)] object-contain rounded-lg",
                    })
                  : null,
                t.jsx("button", {
                  type: "button",
                  onClick: () => o(null),
                  className:
                    "absolute right-3 top-3 sm:right-4 sm:top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-background/90 text-foreground shadow-lg hover:bg-primary/10 transition-colors",
                  "aria-label": "Close photo",
                  children: t.jsx(L, { className: "h-5 w-5" }),
                }),
              ],
            }),
          }),
        ],
      })
    : null;
};
function w(e) {
  return Array.isArray(e.photos) && e.photos.length > 0;
}
function le(e) {
  return w(e) || !!e.verified || !!e.qualified;
}
function N(e) {
  return [...e].sort((r, a) => {
    const o = Number(w(a)) - Number(w(r));
    return o !== 0
      ? o
      : new Date(a.createdAt).getTime() - new Date(r.createdAt).getTime();
  });
}
const n = "/reviews",
  b = [
    {
      author: "S**i",
      rating: 5,
      body: "They actually came! I was so skeptical because of how hard it is to get authentic Ingot stock in Australia right now — sealed packaging, real gold-bar design and the LED display works perfectly.",
      photos: [`${n}/review-01.webp`],
      createdAt: "2026-07-01",
    },
    {
      author: "D**e",
      rating: 5,
      body: "Absolutely real. Got my products today in excellent condition. Full delivery updates along the way. Flavour matches the box and the device lasts as advertised. Will definitely purchase again.",
      photos: [`${n}/review-02.webp`],
      createdAt: "2026-05-22",
    },
    {
      author: "M**a",
      rating: 5,
      body: "Authentic Ingot 9000 — gold finish looks even better in person. Smooth flavour from the first puff, no burnt taste. Arrived in a few business days to Sydney.",
      photos: [`${n}/review-03.webp`],
      createdAt: "2026-04-09",
    },
    {
      author: "T**s",
      rating: 5,
      body: "Been using these guys for over a year — cheap, reliable and always genuine ALIBARBAR. The perfect way to get your vapes delivered locally in Australia.",
      photos: [`${n}/review-04.webp`],
      createdAt: "2025-01-05",
    },
    {
      author: "J**e",
      rating: 5,
      body: "Legit site — bank transfer was easy and support replied quickly. Packaging was discreet, products sealed and the puff count feels right for a 9000-rated device.",
      photos: [`${n}/review-05.webp`],
      createdAt: "2025-11-28",
    },
    {
      author: "L**n",
      rating: 5,
      body: "Ordered a mixed pack and every flavour slot was correct on the invoice. Devices are genuine with the LED battery and e-liquid indicator. Highly recommend for AU buyers.",
      photos: [`${n}/review-06.webp`],
      createdAt: "2026-03-15",
    },
    {
      author: "S**e",
      rating: 5,
      body: "I am not a bot — my 3rd order and once again super fast delivery, quality, real items, 100% legit site! Pay for express if you want it quicker, tracking updates all the way.",
      photos: [`${n}/review-07.webp`],
      createdAt: "2026-06-18",
    },
    {
      author: "X**o",
      rating: 5,
      body: "Great product. Happy to get it delivered to me in Australia. Definitely would buy through here again — sealed units, smooth draw and the smart display is actually useful.",
      photos: [`${n}/review-08.webp`],
      createdAt: "2025-08-14",
    },
    {
      author: "R**y",
      rating: 5,
      body: "Both units arrived sealed and the gold finish is spot on — matches the photos on the site. LED display works straight out of the box. Already planning my next order.",
      photos: [`${n}/review-09.webp`],
      createdAt: "2026-07-09",
    },
    {
      author: "C**l",
      rating: 5,
      body: "Cool Mint is icy and clean — not harsh at all. Box matches the device and everything was genuine ALIBARBAR Ingot 9000. Fast AU delivery, no drama.",
      photos: [`${n}/review-10.webp`],
      createdAt: "2026-07-09",
    },
    {
      author: "A**n",
      rating: 5,
      body: "Strawberry Watermelon tastes exactly like the label — sweet berry up front, juicy watermelon on the exhale. Device feels solid and the gold body looks premium in hand.",
      photos: [`${n}/review-11.webp`],
      createdAt: "2026-06-30",
    },
    {
      author: "K**e",
      rating: 5,
      body: "Perfect pocket size and surprisingly light for 9000 puffs. Mouthpiece is comfortable and the draw is smooth. Happy to finally find a reliable AU seller for Ingot.",
      photos: [`${n}/review-12.webp`],
      createdAt: "2026-06-25",
    },
    {
      author: "P**a",
      rating: 5,
      body: "Ordered two for me and a mate — both arrived together, both authentic. Gold colour is consistent and the packaging had all the right warning labels. Will reorder.",
      photos: [`${n}/review-13.webp`],
      createdAt: "2026-06-20",
    },
    {
      author: "B**n",
      rating: 5,
      body: "Grabbed four flavours in one order — California Sunset, Blackberry Ice, Quadruple Berry and Chupa Chups Strawberry. Every box arrived sealed with the proper AU warning labels. Genuine Ingot 9000, will be back for more.",
      photos: [`${n}/review-14.webp`],
      createdAt: "2026-07-22",
    },
    {
      author: "H**y",
      rating: 5,
      body: "Went big and ordered a whole carton for me and my mates — Quadruple Berry, Strawberry Coconut Watermelon and Peach Ice. Every single unit sealed and authentic. Best bulk value I've found in Australia by far.",
      photos: [`${n}/review-15.webp`],
      createdAt: "2026-07-20",
    },
    {
      author: "N**k",
      rating: 5,
      body: "Chupa Chups Strawberry arrived factory sealed in shrink wrap — you can feel the embossed ALIBARBAR logo on the box, definitely the real deal. Tastes just like the lolly, sweet without being sickly.",
      photos: [`${n}/review-16.webp`],
      createdAt: "2026-07-18",
    },
    {
      author: "G**m",
      rating: 5,
      body: "Grape Ice is my go-to and this batch is spot on — bold grape with a proper icy finish. Correct warning label on the box and the seal was intact. Took about 3 days to reach Melbourne.",
      photos: [`${n}/review-17.webp`],
      createdAt: "2026-07-15",
    },
    {
      author: "W**l",
      rating: 5,
      body: "Restock day — three full display boxes of Grape Ice, California Sunset and Blackberry Ice. Flavour cards included and everything genuine. Split them with the crew and everyone's stoked.",
      photos: [`${n}/review-18.webp`],
      createdAt: "2026-07-12",
    },
    {
      author: "J**k",
      rating: 5,
      body: "Peach Ice is still the easiest iced SKU. Moderate chill, peach stays readable. Dispatched after the transfer cleared and landed in Perth in the 3–7 day window they list.",
      photos: [],
      createdAt: "2026-08-16",
    },
    {
      author: "M**l",
      rating: 5,
      body: "Quadruple Berry as a daily no-ice fruit, Blackberry Ice when it is hot. Same Ingot 9000 hardware — 22ml, LED, no charging. Third order from this store.",
      photos: [],
      createdAt: "2026-08-15",
    },
    {
      author: "T**i",
      rating: 5,
      body: "Checked the parcel against the how-to-spot-fake guide: packaging, ALIBARBAR branding and the battery/e-liquid LED all lined up.",
      photos: [],
      createdAt: "2026-08-14",
    },
    {
      author: "A**y",
      rating: 5,
      body: "Mango Magic is dense tropical mango with almost no menthol. Lasts like the other 9000-rated sticks. Support replied on orders@ailibarbar.com the same day I asked about tracking.",
      photos: [],
      createdAt: "2026-08-10",
    },
    {
      author: "C**s",
      rating: 5,
      body: "Chupa Chups Strawberry is candy strawberry plus strong ice — not the same as Strawberry Watermelon. Glad the flavour page spelled that out. Device feels genuine, gold bar shape, working display.",
      photos: [],
      createdAt: "2026-08-08",
    },
    {
      author: "L**u",
      rating: 5,
      body: "Bank transfer checkout was clear, age gate at entry, 18+ box at checkout. Parcel was discreet. Grape Ice batch is bold grape with a cold finish — Melbourne metro in four business days.",
      photos: [],
      createdAt: "2026-08-06",
    },
  ],
  de = [
    "Strawberry Watermelon",
    "5 Flavour Custom Pack",
    "10 Flavour Custom Pack",
    "Quadruple Berry",
    "Peach Ice",
    "California Sunset",
    "Ingot 9000",
    "Blackberry Ice",
    "Cool Mint",
    "Strawberry Watermelon",
    "Mango Magic",
    "Grape Ice",
    "",
    "5 Flavour Custom Pack",
    "20 Flavour Custom Pack",
    "Chupa Chups Strawberry",
    "Grape Ice",
    "10 Flavour Custom Pack",
    "Peach Ice",
    "Quadruple Berry",
    "Ingot 9000",
    "Mango Magic",
    "Chupa Chups Strawberry",
    "Grape Ice",
  ],
  I = N(
    b.map((e, r) => ({
      ...e,
      id: `home-${r}`,
      productLabel: de[r],
      verified: w(e),
      qualified: w(e),
    })),
  );
function Ce() {
  const e = I.reduce((r, a) => r + a.rating, 0);
  return { count: I.length, average: Math.round((e / I.length) * 10) / 10 };
}
const ce = {
    "quadruple-berry":
      "The berry blend is lush and smooth — exactly what I wanted from Quadruple Berry.",
    "california-sunset":
      "California Sunset is ripe mango, citrus and pineapple ? sweet and tropical, not chemical.",
    "strawberry-lychee":
      "Strawberry Lychee is sweet strawberry with a soft floral finish.",
    "peach-ice":
      "Peach Ice is juicy with a crisp cool finish — perfect for summer.",
    "blackberry-ice":
      "Blackberry Ice has rich berry flavour with a nice menthol edge.",
    "mango-magic":
      "Mango Magic is tropical and sweet without being overpowering.",
    "strawberry-coconut-watermelon":
      "Strawberry Coconut Watermelon is creamy, fruity and addictive.",
    "grape-ice": "Grape Ice is bold and icy — really moreish.",
    "strawberry-watermelon":
      "Strawberry Watermelon is splashy, sweet and super refreshing.",
    "strawberry-ice":
      "Chupa Chups Strawberry is crisp, sweet and clean all the way through.",
    "custom-5-pack":
      "Best value custom 5-pack — every flavour I chose was fulfilled correctly.",
    "custom-10-pack":
      "Bulk 10-pack saved me money and every unit was authentic Ingot 9000.",
    "custom-20-pack":
      "Stocked up with the 20-pack — free shipping and every flavour I picked arrived sealed.",
  },
  he = [
    "custom-5-pack",
    "custom-10-pack",
    "custom-20-pack",
    "quadruple-berry",
    "california-sunset",
    "strawberry-lychee",
    "peach-ice",
    "blackberry-ice",
    "mango-magic",
    "strawberry-coconut-watermelon",
    "grape-ice",
    "strawberry-watermelon",
    "strawberry-ice",
  ];
function ue(e) {
  const r = he.indexOf(e),
    a = r >= 0 ? r : 0,
    o = b[a % b.length],
    d = b[(a + 5) % b.length],
    s = b[(a + 11) % b.length],
    l = ce[e],
    g = (c, f) => ({
      ...c,
      id: `${e}-${f}`,
      body: l ? `${c.body} ${l}` : c.body,
      verified: w(c),
      qualified: w(c),
    });
  return N([g(o, "a"), g(d, "b"), g(s, "c")]);
}
function ge(e) {
  return ue(e);
}
function pe(e) {
  if (!e.length) return { count: 0, average: 0 };
  const r = e.reduce((a, o) => a + o.rating, 0);
  return { count: e.length, average: Math.round((r / e.length) * 10) / 10 };
}
function Ie(e) {
  return pe(ge(e));
}
function Ne(e) {
  return e.map(({ author: r, rating: a, body: o, createdAt: d }) => ({
    author: r,
    rating: a,
    body: o,
    createdAt: d,
  }));
}
function Be(e, r) {
  return N([...e, ...r]);
}
function Re(e, r) {
  const a = e.count + r.count;
  if (!a) return { count: 0, average: 0 };
  const o = e.average * e.count + r.average * r.count;
  return { count: a, average: Math.round((o / a) * 10) / 10 };
}
function D(e) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(e)) {
    const [r, a, o] = e.split("-");
    return `${r}/${a}/${o}`;
  }
  return new Date(e)
    .toLocaleDateString("en-AU", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/-/g, "/");
}
function W({ photos: e, large: r }) {
  return t.jsx(ne, { photos: e, large: r });
}
const Pe = ({ review: e, showProduct: r = !1, variant: a = "default" }) => {
    const o = r && "productSlug" in e ? V(e.productSlug) : null,
      d = le(e),
      s = e.photos ?? [],
      l = "title" in e ? e.title : "";
    return a === "showcase"
      ? t.jsxs("article", {
          className:
            "rounded-xl sm:rounded-2xl border border-gold/25 bg-card/50 p-4 sm:p-5 flex flex-col gap-4",
          children: [
            t.jsx(W, { photos: s, large: !0 }),
            d
              ? t.jsxs("div", {
                  className:
                    "inline-flex items-center gap-1.5 self-start rounded-full border border-gold/30 bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary",
                  children: [
                    t.jsx(Z, { className: "h-3.5 w-3.5", "aria-hidden": !0 }),
                    "Qualified purchase",
                  ],
                })
              : null,
            t.jsx("p", {
              className: "text-sm leading-relaxed text-foreground/90",
              children: e.body,
            }),
            t.jsxs("div", {
              className:
                "flex items-center justify-between gap-3 border-t border-gold/15 pt-3",
              children: [
                t.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    t.jsx(E, { value: e.rating, size: "sm" }),
                    t.jsx("p", {
                      className: "text-sm font-semibold text-foreground",
                      children: e.author,
                    }),
                  ],
                }),
                t.jsx("time", {
                  className: "text-xs text-muted-foreground shrink-0",
                  children: D(e.createdAt),
                }),
              ],
            }),
            r && "productLabel" in e && e.productLabel
              ? t.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: e.productLabel,
                })
              : null,
          ],
        })
      : t.jsxs("article", {
          className:
            "rounded-xl sm:rounded-2xl border border-gold/20 bg-card/60 p-4 sm:p-5 flex flex-col gap-3",
          children: [
            t.jsxs("div", {
              className: "flex items-start justify-between gap-3",
              children: [
                t.jsxs("div", {
                  className: "space-y-1 min-w-0",
                  children: [
                    t.jsx(E, { value: e.rating, size: "sm" }),
                    t.jsx("p", {
                      className: "text-sm font-semibold text-foreground",
                      children: e.author,
                    }),
                  ],
                }),
                t.jsx("time", {
                  className: "text-xs text-muted-foreground shrink-0",
                  children: D(e.createdAt),
                }),
              ],
            }),
            l
              ? t.jsx("h3", {
                  className: "text-sm sm:text-base font-bold leading-snug",
                  children: l,
                })
              : null,
            t.jsx("p", {
              className: "text-sm text-muted-foreground leading-relaxed",
              children: e.body,
            }),
            t.jsx(W, { photos: s }),
            r && o
              ? t.jsx("p", {
                  className:
                    "text-xs text-muted-foreground border-t border-gold/15 pt-3",
                  children: J(o),
                })
              : null,
          ],
        });
  },
  S = 3,
  O = 4 * 1024 * 1024;
async function be(e) {
  const r = await createImageBitmap(e),
    o = Math.min(1, 1600 / Math.max(r.width, r.height)),
    d = Math.max(1, Math.round(r.width * o)),
    s = Math.max(1, Math.round(r.height * o)),
    l = document.createElement("canvas");
  ((l.width = d), (l.height = s));
  const g = l.getContext("2d");
  if (!g) throw new Error("Could not process photo.");
  (g.drawImage(r, 0, 0, d, s), r.close());
  const c = l.toDataURL("image/jpeg", 0.85);
  if (Math.ceil((c.length - 23) * 0.75) > O)
    throw new Error("Each photo must be under 4 MB after compression.");
  return c;
}
async function we(e) {
  if (!e.type.startsWith("image/"))
    throw new Error("Please choose image files only.");
  if (e.size > 12 * 1024 * 1024)
    throw new Error("Each photo must be under 12 MB before compression.");
  try {
    return await be(e);
  } catch {
    return new Promise((r, a) => {
      const o = new FileReader();
      ((o.onload = () => {
        if (typeof o.result != "string") {
          a(new Error("Could not read photo."));
          return;
        }
        if (Math.ceil((o.result.length - 5) * 0.75) > O) {
          a(new Error("Each photo must be under 4 MB."));
          return;
        }
        r(o.result);
      }),
        (o.onerror = () => a(new Error("Could not read photo."))),
        o.readAsDataURL(e));
    });
  }
}
const Me = ({
  productSlug: e,
  productOptions: r,
  onSubmitted: a,
  compact: o = !1,
}) => {
  const { user: d, token: s } = K(),
    l = p.useRef(null),
    [g, c] = p.useState(!1),
    [f, G] = p.useState(e),
    [B, R] = p.useState(5),
    [A, P] = p.useState(""),
    [m, j] = p.useState([]),
    [M, $] = p.useState(!1),
    F = (i) => {
      j((h) => h.filter((v) => v.id !== i));
    },
    U = async (i) => {
      const h = Array.from(i.target.files ?? []);
      if (((i.target.value = ""), !h.length)) return;
      const v = S - m.length;
      if (v <= 0) {
        x.error(`You can add up to ${S} photos.`);
        return;
      }
      try {
        const k = await Promise.all(
          h.slice(0, v).map(async (y) => ({
            id: `${y.name}-${y.lastModified}`,
            dataUrl: await we(y),
            name: y.name,
          })),
        );
        j((y) => [...y, ...k]);
      } catch (k) {
        x.error(k instanceof Error ? k.message : "Could not add photo.");
      }
    },
    H = async (i) => {
      if ((i.preventDefault(), !s)) {
        c(!0);
        return;
      }
      if (A.trim().length < 4) {
        x.error("Please write a short review.");
        return;
      }
      $(!0);
      try {
        (await q(s, {
          productSlug: f,
          rating: B,
          title: "",
          body: A,
          photos: m.map((h) => h.dataUrl),
        }),
          x.success("Thanks! Your review is awaiting approval."),
          P(""),
          R(5),
          j([]),
          a == null || a());
      } catch (h) {
        x.error(h instanceof Error ? h.message : "Could not submit review.");
      } finally {
        $(!1);
      }
    };
  return d
    ? t.jsxs("div", {
        className: o
          ? ""
          : "rounded-2xl border border-gold/30 bg-background/60 p-5",
        children: [
          t.jsx("h3", {
            className:
              "text-sm uppercase tracking-[0.2em] text-gold font-bold mb-4",
            children: "Write a review",
          }),
          t.jsxs("form", {
            onSubmit: H,
            className: "space-y-3",
            children: [
              r && r.length > 1
                ? t.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      t.jsx("label", {
                        htmlFor: "review-product",
                        className: "text-sm text-muted-foreground",
                        children: "Product",
                      }),
                      t.jsx("select", {
                        id: "review-product",
                        value: f,
                        onChange: (i) => G(i.target.value),
                        className:
                          "flex h-11 w-full rounded-md border border-gold/30 bg-background px-3 py-2 text-sm",
                        children: r.map((i) =>
                          t.jsx(
                            "option",
                            { value: i.slug, children: i.name },
                            i.slug,
                          ),
                        ),
                      }),
                    ],
                  })
                : null,
              t.jsxs("div", {
                children: [
                  t.jsx("p", {
                    className: "text-sm text-muted-foreground mb-1",
                    children: "Your rating",
                  }),
                  t.jsx(_, { value: B, onChange: R }),
                ],
              }),
              t.jsx(te, {
                value: A,
                onChange: (i) => P(i.target.value),
                placeholder:
                  "Share your experience — flavour, battery life, delivery, packaging…",
                rows: 4,
              }),
              t.jsxs("div", {
                className: "space-y-2",
                children: [
                  t.jsxs("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                      t.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Photos (optional)",
                      }),
                      t.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [m.length, "/", S],
                      }),
                    ],
                  }),
                  m.length > 0
                    ? t.jsx("ul", {
                        className: "flex flex-wrap gap-2",
                        children: m.map((i, h) =>
                          t.jsxs(
                            "li",
                            {
                              className: "relative",
                              children: [
                                t.jsx("img", {
                                  src: i.dataUrl,
                                  alt: `Your uploaded review photo ${h + 1}`,
                                  className:
                                    "h-20 w-20 rounded-lg object-cover border border-gold/20",
                                }),
                                t.jsx("button", {
                                  type: "button",
                                  onClick: () => F(i.id),
                                  className:
                                    "absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-background border border-gold/30 text-foreground",
                                  "aria-label": "Remove photo",
                                  children: t.jsx(L, {
                                    className: "h-3.5 w-3.5",
                                  }),
                                }),
                              ],
                            },
                            i.id,
                          ),
                        ),
                      })
                    : null,
                  m.length < S
                    ? t.jsxs(t.Fragment, {
                        children: [
                          t.jsx("input", {
                            ref: l,
                            type: "file",
                            accept: "image/jpeg,image/png,image/webp,image/*",
                            multiple: !0,
                            className: "hidden",
                            onChange: (i) => void U(i),
                          }),
                          t.jsxs(C, {
                            type: "button",
                            variant: "outline",
                            className: "w-full min-h-[44px] gap-2",
                            onClick: () => {
                              var i;
                              return (i = l.current) == null
                                ? void 0
                                : i.click();
                            },
                            children: [
                              t.jsx(ee, { className: "h-4 w-4" }),
                              "Add photos",
                            ],
                          }),
                        ],
                      })
                    : null,
                ],
              }),
              t.jsx(C, {
                type: "submit",
                className: "w-full min-h-[44px]",
                disabled: M,
                children: M ? "Submitting…" : "Submit review",
              }),
              t.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Reviews appear after approval.",
              }),
            ],
          }),
          t.jsx(T, { open: g, onOpenChange: c }),
        ],
      })
    : t.jsxs("div", {
        className: o
          ? "space-y-3"
          : "rounded-2xl border border-gold/30 bg-background/60 p-5 space-y-3",
        children: [
          t.jsx("h3", {
            className: "text-sm uppercase tracking-[0.2em] text-gold font-bold",
            children: "Write a review",
          }),
          t.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "Sign in to share your rating, photos and experience.",
          }),
          t.jsx(C, {
            type: "button",
            className: "w-full min-h-[44px]",
            onClick: () => c(!0),
            children: "Sign in to review",
          }),
          t.jsx(T, { open: g, onOpenChange: c }),
        ],
      });
};
export {
  Pe as R,
  Ie as a,
  Be as b,
  Me as c,
  pe as d,
  Ce as e,
  I as f,
  ge as g,
  w as h,
  Re as m,
  N as s,
  Ne as t,
};
