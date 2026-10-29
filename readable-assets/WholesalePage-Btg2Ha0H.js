import { j as e, L as l } from "./react-vendor-R4T0bNIa.js";
import {
  a as A,
  a4 as x,
  a5 as g,
  a6 as f,
  a7 as t,
  w as r,
  s as m,
  a8 as j,
  a9 as N,
  aa as w,
  ab as S,
  g as P,
  u as W,
  ac as I,
  X as c,
  ad as $,
  a1 as E,
  S as L,
  N as C,
  Q as T,
  W as h,
  ae as _,
  H as F,
  l as O,
  c as b,
  F as H,
} from "./index-Bwn3vGAd.js";
import { K as q } from "./KeyTakeaways-BS73GR4f.js";
import { C as U } from "./CatalogueImage-3ZWkwIDw.js";
import "./query-vendor-L3kbwvGJ.js";
import "./icons-vendor-BquxQ5DR.js";
const y = "/assets/hero-device-DmvuUYbE.webp",
  R = "/assets/hero-device-320-CL_4g5r9.webp",
  u = A().length;
function n(a, o, i) {
  return i ? j(a, o, i) : `${a} 320w, ${o} 640w`;
}
const D = [
    {
      name: "ALIBARBAR INGOT 9000",
      img: y,
      imgSrcSet: n(R, y),
      puffs: "9,000",
      flavours: String(u),
      nicotine: "Per packaging",
      type: "Disposable",
      whatsappMessage:
        "Hi, I'd like wholesale pricing for Alibarbar Ingot 9000 single units.",
    },
    {
      name: "5 FLAVOUR CUSTOM PACK",
      img: x,
      imgSrcSet: n(N, x, "custom-5-pack"),
      puffs: "9,000 / device",
      flavours: "5 per pack",
      nicotine: "Per packaging",
      type: "Mixed pack",
      whatsappMessage:
        "Hi, I'd like wholesale pricing for the Alibarbar 5 Flavour Custom Pack.",
    },
    {
      name: "10 FLAVOUR CUSTOM PACK",
      img: g,
      imgSrcSet: n(w, g, "custom-10-pack"),
      puffs: "9,000 / device",
      flavours: "10 per pack",
      nicotine: "Per packaging",
      type: "Bulk pack",
      whatsappMessage:
        "Hi, I'd like wholesale pricing for the Alibarbar 10 Flavour Custom Pack.",
    },
    {
      name: "20 FLAVOUR CUSTOM PACK",
      img: f,
      imgSrcSet: n(S, f, "custom-20-pack"),
      puffs: "9,000 / device",
      flavours: "20 per pack",
      nicotine: "Per packaging",
      type: "Bulk pack",
      whatsappMessage:
        "Hi, I'd like wholesale pricing for the Alibarbar 20 Flavour Custom Pack.",
    },
  ],
  M = ["custom-5-pack", "custom-10-pack", "custom-20-pack"],
  B = "2026-10-19";
function Q(a) {
  return a >= 20 ? "Free" : `A$${m.under20Aud}`;
}
const K = [
  {
    slug: "single",
    label: "Single flavour",
    devices: 1,
    priceAud: t.single,
    path: "/shop",
  },
  {
    slug: "custom-5-pack",
    label: "5 Flavour Custom Pack",
    devices: 5,
    priceAud: t.pack5,
    path: "/product/custom-5-pack",
  },
  {
    slug: "custom-10-pack",
    label: "10 Flavour Custom Pack",
    devices: 10,
    priceAud: t.pack10,
    path: "/product/custom-10-pack",
  },
  {
    slug: "custom-20-pack",
    label: "20 Flavour Custom Pack",
    devices: 20,
    priceAud: t.pack20,
    path: "/product/custom-20-pack",
  },
].map((a) => ({
  ...a,
  perDeviceAud: Math.round((a.priceAud / a.devices) * 100) / 100,
  shipping: Q(a.devices),
}));
function G() {
  return P().filter((a) => M.includes(a.slug));
}
const Y = {
    question: "How do I buy Alibarbar Ingot 9000 wholesale in Australia?",
    answer: `Up to 20 devices, use a website custom pack: A$${t.pack10} for 10 or A$${t.pack20} for 20 (A$${(t.pack20 / 20).toFixed(0)} per device, free shipping). For larger, repeat or custom-split orders, message ${r} on WhatsApp for a wholesale quote. Payment is by bank transfer and orders ship Australia-wide to adults 18+.`,
  },
  V = [
    "Same sealed Ingot 9000 devices as singles: up to 9000 puffs, 22ml, 2350mAh, mesh coil, smart LED.",
    `Published bulk packs: A$${t.pack10} for 10 (A$${(t.pack10 / 10).toFixed(2)} each) and A$${t.pack20} for 20 (A$${(t.pack20 / 20).toFixed(2)} each).`,
    `Shipping is A$${m.under20Aud} for 1–19 devices and free from 20 devices.`,
    `More than 20 devices, regular restocks or a specific flavour split: ${r} quotes wholesale pricing on WhatsApp.`,
    `${u} flavours are currently in stock; mix them freely, repeats allowed.`,
    "Adults 18+ only. Businesses must check the Australian rules that apply to them.",
  ],
  J = [
    "Regular buyers who already know their flavours and would rather restock once than pay shipping on small orders.",
    "Friends, housemates and family who pool one order to reach free shipping and the lower per-device price.",
    "Groups who want a set mix of flavours delivered in one parcel to one address.",
    "Shops and resellers asking about recurring larger quantities — handled directly on WhatsApp.",
  ],
  X = [
    "Total number of devices",
    "Flavours and how many of each",
    "Your state or postcode",
    "Whether it is a one-off or a repeat order",
  ],
  z = [
    `Up to 20 devices: pick a custom pack and choose a flavour for every slot. Larger orders: agree the flavour list and quote with ${r} on WhatsApp.`,
    "Place the order and note the order number on the confirmation page.",
    "Pay by bank transfer, using the order number as the payment reference.",
    "Upload your payment screenshot on the order page so the team can verify the transfer.",
    `Once payment is confirmed the order ships by Regular Post; ${m.typicalDelivery}.`,
  ],
  v = [
    {
      question: "Does Alibarbar Australia offer wholesale pricing?",
      answer: `Yes, for larger orders. The website lists fixed pack prices up to 20 devices (A$${t.pack10} for 10, A$${t.pack20} for 20). For more than that, regular restocks or a specific flavour split, message ${r} on WhatsApp and he will quote wholesale pricing for that order. There is no fixed public price list above 20 devices.`,
    },
    {
      question:
        "What is the cheapest way to buy Ingot 9000 in bulk on the website?",
      answer: `The 20 Flavour Custom Pack at A$${t.pack20} has the lowest listed price per device (A$${(t.pack20 / 20).toFixed(0)}) and ships free, because orders of 20 devices or more get free Regular Post. Two 10-packs also reach the free-shipping threshold.`,
    },
    {
      question: "Can I mix flavours in a bulk order?",
      answer: `Yes. Every slot in the custom packs can be any in-stock Ingot 9000 flavour (${u} currently in stock), and repeats are allowed. For a WhatsApp wholesale order, tell ${r} how many of each flavour you want.`,
    },
    {
      question: "How do I pay for a bulk or wholesale order?",
      answer:
        "By bank transfer. After you place the order, the confirmation page shows the bank details and the total. Use your order number as the payment reference, then upload your payment screenshot so the team can confirm and dispatch the order.",
    },
    {
      question: "Do you deliver bulk orders across Australia?",
      answer: `Yes. Orders ship by Regular Post Australia-wide, including NSW, VIC, QLD, WA, SA, TAS, ACT and NT. Typical delivery is ${m.typicalDelivery}.`,
    },
    {
      question: "Who can place a wholesale order?",
      answer:
        "Adults 18+ only. Businesses are responsible for making sure that stocking or supplying nicotine vaping products complies with the current federal, state and territory requirements that apply to them.",
    },
  ],
  d = "/wholesale",
  k = (a) => `A$${Number.isInteger(a) ? a : a.toFixed(2)}`,
  le = () => {
    W();
    const a = [
        { name: "Home", path: "/" },
        { name: "Wholesale", path: d },
      ],
      o = G(),
      i = {
        "@context": "https://schema.org",
        "@graph": [
          ...I(),
          {
            "@type": "WebPage",
            "@id": c.webpageId(d),
            name: "Wholesale Alibarbar Ingot 9000 Australia",
            url: "https://www.ailibarbar.com/wholesale",
            description:
              "Wholesale and bulk buying for authentic Alibarbar Ingot 9000 disposable vapes in Australia: published 5, 10 and 20-pack prices, free shipping from 20 devices, and WhatsApp quotes for larger orders.",
            inLanguage: "en-AU",
            isPartOf: { "@id": c.websiteId },
            about: { "@id": c.brandId },
            dateModified: B,
          },
          {
            "@type": "ItemList",
            name: "Alibarbar Ingot 9000 bulk packs Australia",
            numberOfItems: o.length,
            itemListElement: o.map((s, p) => $(s, p + 1)),
          },
          {
            "@type": "FAQPage",
            "@id": c.faqId(d),
            mainEntity: v.map((s) => ({
              "@type": "Question",
              name: s.question,
              acceptedAnswer: { "@type": "Answer", text: s.answer },
            })),
          },
          E(a, d),
        ],
      };
    return e.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        e.jsx(L, {
          title: "Wholesale Alibarbar Ingot 9000 Australia | Bulk Pricing",
          description:
            "Wholesale Alibarbar Ingot 9000 for Australian bulk buyers: 10-pack A$299, 20-pack A$560 with free shipping. Message WhatsApp for larger custom quotes.",
          path: "/wholesale",
          jsonLd: i,
        }),
        e.jsx(C, {}),
        e.jsx("div", {
          className:
            "bg-primary/10 border-b border-gold/20 text-center py-2.5 px-4 text-xs sm:text-sm font-medium text-foreground/90 mt-[calc(4rem+env(safe-area-inset-top))] sm:mt-[calc(5rem+env(safe-area-inset-top))]",
          children: "We only deliver to Australia · Authentic Alibarbar stock",
        }),
        e.jsxs("main", {
          className: "pb-16 sm:pb-24",
          children: [
            e.jsx("section", {
              className: "border-b border-gold/20",
              children: e.jsx("div", {
                className: "container py-8 sm:py-12 lg:py-16",
                children: e.jsxs("div", {
                  className:
                    "reveal grid items-center gap-8 rounded-[1.75rem] border border-gold/25 bg-card/40 p-5 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,300px)] lg:gap-12 lg:p-10",
                  children: [
                    e.jsxs("div", {
                      className: "text-center lg:text-left",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[11px] uppercase tracking-[0.22em] text-primary font-semibold",
                          children: "Wholesale",
                        }),
                        e.jsxs("h1", {
                          className:
                            "mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]",
                          children: [
                            "Bulk orders on ",
                            e.jsx("span", {
                              className: "text-gold",
                              children: "WhatsApp",
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className:
                            "mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0",
                          children: [
                            "Scan the code or message ",
                            r,
                            " on WhatsApp for wholesale pricing, stock and mixed-flavour orders. Australia-wide supply, adults 18+ only.",
                          ],
                        }),
                        e.jsx("div", {
                          className: "text-left",
                          children: e.jsx(T, { data: Y }),
                        }),
                        e.jsxs("div", {
                          className:
                            "mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3",
                          children: [
                            e.jsxs("a", {
                              href: h,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex min-h-[44px] items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors",
                              children: ["Message ", r, " on WhatsApp"],
                            }),
                            e.jsx("a", {
                              href: _,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex min-h-[44px] items-center justify-center rounded-full border border-gold/40 px-6 py-2.5 text-sm font-semibold text-foreground hover:border-gold transition-colors",
                              children: "Join the WhatsApp Community for deals",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("a", {
                      href: h,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "mx-auto block w-full max-w-[280px] overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-[0_16px_40px_-24px_rgba(0,0,0,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      children: [
                        e.jsx("img", {
                          src: F,
                          alt: `WhatsApp QR code to message ${r} for Alibarbar wholesale pricing`,
                          width: 640,
                          height: 640,
                          className: "block w-full h-auto p-3",
                          decoding: "async",
                          draggable: !1,
                        }),
                        e.jsxs("span", {
                          className: "sr-only",
                          children: ["Message ", r, " on WhatsApp"],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            e.jsx("section", {
              className: "py-12 sm:py-16 md:py-20",
              children: e.jsxs("div", {
                className: "container",
                children: [
                  e.jsxs("header", {
                    className: "reveal text-center mb-8 sm:mb-12",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3",
                        children: "AU warehouse",
                      }),
                      e.jsxs("h2", {
                        className:
                          "text-2xl sm:text-3xl md:text-4xl font-extrabold",
                        children: [
                          "Wholesale ",
                          e.jsx("span", {
                            className: "text-gold",
                            children: "line-up",
                          }),
                        ],
                      }),
                      e.jsxs("p", {
                        className:
                          "text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto",
                        children: [
                          "Authentic Alibarbar Ingot 9000 devices and mixed custom packs. Get pricing opens WhatsApp with ",
                          r,
                          ".",
                        ],
                      }),
                      e.jsx("div", {
                        className: "gold-divider mt-6 max-w-xs mx-auto",
                      }),
                    ],
                  }),
                  e.jsx("ul", {
                    className:
                      "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                    children: D.map((s, p) =>
                      e.jsxs(
                        "li",
                        {
                          className:
                            "reveal luxe-card rounded-xl sm:rounded-2xl overflow-hidden flex flex-col border border-gold/20",
                          style: { transitionDelay: `${p * 60}ms` },
                          children: [
                            e.jsx("div", {
                              className:
                                "aspect-square bg-background/50 p-4 sm:p-5 flex items-center justify-center",
                              children: e.jsx(U, {
                                src: s.img,
                                srcSet: s.imgSrcSet,
                                alt: O(b(s)),
                                className:
                                  "max-h-full max-w-full object-contain",
                              }),
                            }),
                            e.jsxs("div", {
                              className:
                                "flex flex-col flex-1 p-4 sm:p-5 border-t border-gold/15 bg-card/40",
                              children: [
                                e.jsx("h3", {
                                  className:
                                    "text-xs sm:text-sm font-bold uppercase tracking-wide text-primary leading-snug min-h-[2.5rem]",
                                  children: b(s),
                                }),
                                e.jsxs("dl", {
                                  className:
                                    "mt-3 space-y-1 text-[10px] sm:text-xs text-muted-foreground",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex justify-between gap-2",
                                      children: [
                                        e.jsx("dt", { children: "Puffs" }),
                                        e.jsx("dd", {
                                          className:
                                            "text-foreground/80 font-medium",
                                          children: s.puffs,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex justify-between gap-2",
                                      children: [
                                        e.jsx("dt", { children: "Flavours" }),
                                        e.jsx("dd", {
                                          className:
                                            "text-foreground/80 font-medium",
                                          children: s.flavours,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex justify-between gap-2",
                                      children: [
                                        e.jsx("dt", { children: "Nicotine" }),
                                        e.jsx("dd", {
                                          className:
                                            "text-foreground/80 font-medium",
                                          children: s.nicotine,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex justify-between gap-2",
                                      children: [
                                        e.jsx("dt", { children: "Type" }),
                                        e.jsx("dd", {
                                          className:
                                            "text-foreground/80 font-medium",
                                          children: s.type,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("a", {
                                  href: h,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "mt-4 inline-flex min-h-[40px] items-center justify-center text-sm font-semibold text-primary hover:text-gold transition-colors",
                                  children: "Get pricing →",
                                }),
                              ],
                            }),
                          ],
                        },
                        s.name,
                      ),
                    ),
                  }),
                  e.jsxs("div", {
                    className:
                      "reveal mt-10 sm:mt-14 rounded-2xl border border-gold/20 bg-card/40 p-6 sm:p-8 max-w-3xl mx-auto text-center",
                    children: [
                      e.jsx("h3", {
                        className: "text-lg font-bold mb-2",
                        children: "Retail orders",
                      }),
                      e.jsxs("p", {
                        className:
                          "text-sm text-muted-foreground leading-relaxed",
                        children: [
                          "For single-unit or small mixed packs, shop online with secure bank transfer checkout.",
                          " ",
                          e.jsx(l, {
                            to: "/shop",
                            className:
                              "text-primary font-semibold hover:text-gold",
                            children: "Browse flavours",
                          }),
                          " ",
                          "or",
                          " ",
                          e.jsx(l, {
                            to: "/contact",
                            className:
                              "text-primary font-semibold hover:text-gold",
                            children: "email support",
                          }),
                          ". New to bulk buying? Read our",
                          " ",
                          e.jsx(l, {
                            to: "/blog/alibarbar-wholesale-australia-bulk-buying-whatsapp",
                            className:
                              "text-primary font-semibold hover:text-gold",
                            children: "wholesale and bulk buying guide",
                          }),
                          ".",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("section", {
              className: "pb-12 sm:pb-16",
              "aria-labelledby": "wholesale-prices",
              children: e.jsxs("div", {
                className: "container max-w-4xl space-y-10 sm:space-y-12",
                children: [
                  e.jsx(q, { items: V }),
                  e.jsxs("div", {
                    className: "reveal",
                    children: [
                      e.jsxs("h2", {
                        id: "wholesale-prices",
                        className: "text-2xl sm:text-3xl font-extrabold",
                        children: [
                          "Current bulk pack ",
                          e.jsx("span", {
                            className: "text-gold",
                            children: "prices",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed",
                        children:
                          "Catalogue prices in AUD. Per-device figures are the pack price divided by the number of devices. The product page and checkout are always the source of truth. Orders above 20 devices are quoted on WhatsApp — there is no fixed public price list for them.",
                      }),
                      e.jsx("div", {
                        className:
                          "mt-5 overflow-x-auto rounded-2xl border border-gold/25 bg-card/40",
                        children: e.jsxs("table", {
                          className: "w-full text-left text-xs sm:text-sm",
                          children: [
                            e.jsx("thead", {
                              className:
                                "text-xs uppercase tracking-wide text-muted-foreground border-b border-gold/20",
                              children: e.jsxs("tr", {
                                children: [
                                  e.jsx("th", {
                                    scope: "col",
                                    className: "px-2.5 sm:px-4 py-3",
                                    children: "Option",
                                  }),
                                  e.jsx("th", {
                                    scope: "col",
                                    className: "px-2.5 sm:px-4 py-3",
                                    children: "Devices",
                                  }),
                                  e.jsx("th", {
                                    scope: "col",
                                    className: "px-2.5 sm:px-4 py-3",
                                    children: "Price",
                                  }),
                                  e.jsx("th", {
                                    scope: "col",
                                    className: "px-2.5 sm:px-4 py-3",
                                    children: "Per device",
                                  }),
                                  e.jsx("th", {
                                    scope: "col",
                                    className: "px-2.5 sm:px-4 py-3",
                                    children: "Shipping",
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs("tbody", {
                              children: [
                                K.map((s) =>
                                  e.jsxs(
                                    "tr",
                                    {
                                      className:
                                        "border-b border-gold/10 last:border-0",
                                      children: [
                                        e.jsx("th", {
                                          scope: "row",
                                          className:
                                            "px-2.5 sm:px-4 py-3 font-semibold",
                                          children: e.jsx(l, {
                                            to: s.path,
                                            className:
                                              "text-primary hover:text-gold",
                                            children: s.label,
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className: "px-2.5 sm:px-4 py-3",
                                          children: s.devices,
                                        }),
                                        e.jsx("td", {
                                          className: "px-2.5 sm:px-4 py-3",
                                          children: k(s.priceAud),
                                        }),
                                        e.jsx("td", {
                                          className: "px-2.5 sm:px-4 py-3",
                                          children: k(s.perDeviceAud),
                                        }),
                                        e.jsx("td", {
                                          className: "px-2.5 sm:px-4 py-3",
                                          children: s.shipping,
                                        }),
                                      ],
                                    },
                                    s.slug,
                                  ),
                                ),
                                e.jsxs("tr", {
                                  children: [
                                    e.jsx("th", {
                                      scope: "row",
                                      className:
                                        "px-2.5 sm:px-4 py-3 font-semibold",
                                      children: "More than 20 devices",
                                    }),
                                    e.jsx("td", {
                                      className: "px-2.5 sm:px-4 py-3",
                                      children: "21+",
                                    }),
                                    e.jsxs("td", {
                                      className: "px-2.5 sm:px-4 py-3",
                                      colSpan: 2,
                                      children: ["Wholesale quote from ", r],
                                    }),
                                    e.jsx("td", {
                                      className: "px-2.5 sm:px-4 py-3",
                                      children: "Free",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "reveal grid gap-8 md:grid-cols-2",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("h2", {
                            className: "text-xl sm:text-2xl font-bold",
                            children: "Who wholesale is for",
                          }),
                          e.jsx("ul", {
                            className:
                              "mt-4 list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed",
                            children: J.map((s) =>
                              e.jsx("li", { children: s }, s),
                            ),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h2", {
                            className: "text-xl sm:text-2xl font-bold",
                            children: "Get a quote faster",
                          }),
                          e.jsxs("p", {
                            className:
                              "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
                            children: [
                              "Message ",
                              r,
                              " on WhatsApp with these details and he can confirm current stock before you pay:",
                            ],
                          }),
                          e.jsx("ul", {
                            className:
                              "mt-3 list-disc pl-5 space-y-2 text-sm sm:text-base text-muted-foreground",
                            children: X.map((s) =>
                              e.jsx("li", { children: s }, s),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "reveal",
                    children: [
                      e.jsx("h2", {
                        className: "text-xl sm:text-2xl font-bold",
                        children: "How bulk ordering and payment work",
                      }),
                      e.jsx("ol", {
                        className:
                          "mt-4 list-decimal pl-5 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed",
                        children: z.map((s) => e.jsx("li", { children: s }, s)),
                      }),
                      e.jsxs("p", {
                        className:
                          "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
                        children: [
                          "Bulk orders use the same sealed Ingot 9000 devices as singles. Nicotine strength is read from the printed label on each unit, so check the packaging when your parcel arrives. Orders ship Australia-wide (NSW, VIC, QLD, WA, SA, TAS, ACT and NT); if anything does not match your order, contact",
                          " ",
                          e.jsx("a", {
                            href: "mailto:orders@ailibarbar.com",
                            className: "text-primary hover:text-gold",
                            children: "orders@ailibarbar.com",
                          }),
                          " ",
                          "or message ",
                          r,
                          " with photos.",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "reveal",
                    children: [
                      e.jsx("h2", {
                        className: "text-xl sm:text-2xl font-bold",
                        children: "Buying responsibly",
                      }),
                      e.jsx("p", {
                        className:
                          "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed",
                        children:
                          "ailibarbar.com sells to adults 18+ only and every buyer confirms their age at checkout. If you are buying for a business, it is your responsibility to make sure that stocking or supplying vaping products complies with the federal, state and territory rules that apply to you. Store spare devices at room temperature, out of direct sun and out of reach of children and pets.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "reveal",
                    id: "wholesale-faq",
                    children: [
                      e.jsx("h2", {
                        className: "text-2xl sm:text-3xl font-extrabold",
                        children: "Wholesale questions",
                      }),
                      e.jsx("dl", {
                        className: "mt-5 space-y-5",
                        children: v.map((s) =>
                          e.jsxs(
                            "div",
                            {
                              className:
                                "rounded-2xl border border-gold/20 bg-card/40 p-5",
                              children: [
                                e.jsx("dt", {
                                  className:
                                    "font-semibold text-sm sm:text-base",
                                  children: s.question,
                                }),
                                e.jsx("dd", {
                                  className:
                                    "mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed",
                                  children: s.answer,
                                }),
                              ],
                            },
                            s.question,
                          ),
                        ),
                      }),
                      e.jsxs("p", {
                        className:
                          "mt-6 text-sm text-muted-foreground leading-relaxed",
                        children: [
                          "Related:",
                          " ",
                          e.jsx(l, {
                            to: "/blog/alibarbar-wholesale-australia-bulk-buying-whatsapp",
                            className: "text-primary hover:text-gold",
                            children: "wholesale and bulk buying guide",
                          }),
                          " · ",
                          e.jsx(l, {
                            to: "/guides/alibarbar-custom-pack-guide-australia",
                            className: "text-primary hover:text-gold",
                            children: "custom pack guide",
                          }),
                          " · ",
                          e.jsx(l, {
                            to: "/guides/alibarbar-ingot-9000-price-guide-australia",
                            className: "text-primary hover:text-gold",
                            children: "Ingot 9000 price guide",
                          }),
                          " · ",
                          e.jsx(l, {
                            to: "/ingot-9000",
                            className: "text-primary hover:text-gold",
                            children: "Ingot 9000 hub",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx(H, {}),
      ],
    });
  };
export { le as default };
