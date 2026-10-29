const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/export-orders-excel-D3FBk6DR.js",
      "assets/react-vendor-R4T0bNIa.js",
      "assets/custom-pack-CSh3X_LM.js",
    ]),
) => i.map((i) => d[i]);
import {
  o as F,
  z as ue,
  S as Ke,
  N as We,
  F as Ye,
  _ as ds,
} from "./index-Bwn3vGAd.js";
import { r as n, j as e, L as Ge } from "./react-vendor-R4T0bNIa.js";
import {
  f as Es,
  s as Ls,
  o as ce,
  A as Os,
  a as Ts,
  N as Is,
  b as Rs,
  c as Fs,
  O as Ps,
  d as Ds,
  e as Ms,
  r as _s,
  p as zs,
  i as Bs,
  g as Us,
} from "./OrderShipmentPanel-ZN9lerFj.js";
import { u as b } from "./ui-vendor-DvfZJg73.js";
import { B as v } from "./button-DuRxsHai.js";
import { C as ae } from "./checkbox-Bzjvod8r.js";
import { I as ne, L as X } from "./label--J037EDp.js";
import { T as Ee } from "./textarea-v45I66dK.js";
import {
  D as xe,
  a as be,
  b as he,
  c as fe,
  d as ge,
  e as cs,
} from "./dialog-Czj21GWi.js";
import {
  g as le,
  i as Hs,
  h as Qe,
  j as qs,
  k as Ze,
  b as z,
  p as Le,
  m as Oe,
  P as we,
  F as ke,
  v as Vs,
  n as Ks,
  o as $e,
  q as Ws,
  S as Ys,
  t as Gs,
} from "./orders-api-BZUM9ZAd.js";
import { d as ms } from "./custom-pack-CSh3X_LM.js";
import {
  R as je,
  m as Se,
  n as Y,
  j as Te,
  D as pe,
  e as Qs,
  i as Zs,
  o as Js,
  d as Je,
  p as Xs,
  k as et,
  Z as st,
} from "./icons-vendor-BquxQ5DR.js";
import "./query-vendor-L3kbwvGJ.js";
import "./reviews-api-CwdLLAEm.js";
import "./utils-CytzSlOG.js";
import "./select-CFS8SIyg.js";
import "./index-BwobEAja.js";
function Xe(s, a) {
  return s instanceof Error
    ? s.message === "Unauthorized"
      ? "管理员密钥无效，请重新登录。"
      : s.message.startsWith("Request failed")
        ? a
        : s.message
    : a;
}
function es(s) {
  return new Date(s).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
const tt = ({ initialQuery: s = "" }) => {
  const [a, i] = n.useState([]),
    [m, g] = n.useState(!1),
    [N, p] = n.useState(s);
  n.useEffect(() => {
    p(s);
  }, [s]);
  const [h, c] = n.useState(() => new Set()),
    [S, C] = n.useState(!1),
    [A, o] = n.useState(""),
    [f, E] = n.useState(""),
    [P, w] = n.useState(!1),
    B = n.useCallback(async () => {
      if (le()) {
        g(!0);
        try {
          const l = await Es();
          i(l);
        } catch (l) {
          b.error(Xe(l, "无法加载用户。"));
        } finally {
          g(!1);
        }
      }
    }, []);
  (n.useEffect(() => {
    B();
  }, [B]),
    n.useEffect(() => {
      const l = new Set(a.map((y) => y.id));
      c((y) => {
        const D = new Set([...y].filter((M) => l.has(M)));
        return D.size === y.size ? y : D;
      });
    }, [a]));
  const L = n.useMemo(() => {
      const l = N.trim().toLowerCase();
      return l
        ? a.filter(
            (y) =>
              y.email.toLowerCase().includes(l) ||
              y.displayName.toLowerCase().includes(l) ||
              y.id.toLowerCase().includes(l),
          )
        : a;
    }, [a, N]),
    R = L.filter((l) => h.has(l.id)),
    U = L.length > 0 && R.length === L.length,
    G = R.length > 0 && !U,
    k = (l, y) => {
      c((D) => {
        const M = new Set(D);
        return (y ? M.add(l) : M.delete(l), M);
      });
    },
    T = (l) => {
      c((y) => {
        const D = new Set(y);
        for (const M of L) l ? D.add(M.id) : D.delete(M.id);
        return D;
      });
    },
    q = () => {
      if (h.size === 0) {
        b.error("请先选择用户。");
        return;
      }
      C(!0);
    },
    Q = async () => {
      if (h.size !== 0) {
        w(!0);
        try {
          const l = await Ls({ userIds: [...h], subject: A, body: f });
          (l.failed === 0
            ? b.success(`已发送 ${l.sent} 封（主题前缀 [Alibarbar]）`)
            : b.error(`发送完成：成功 ${l.sent}，失败 ${l.failed}`),
            C(!1),
            o(""),
            E(""));
        } catch (l) {
          b.error(Xe(l, "发送失败。"));
        } finally {
          w(!1);
        }
      }
    };
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsxs("div", {
        className:
          "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        children: [
          e.jsxs("p", {
            className: "text-sm text-muted-foreground",
            children: [
              "共 ",
              a.length,
              " 位注册用户 · 发信使用 orders@ailibarbar.com，主题自动加前缀 [Alibarbar]",
            ],
          }),
          e.jsxs("div", {
            className: "flex flex-wrap gap-2",
            children: [
              e.jsxs(v, {
                type: "button",
                variant: "outline",
                onClick: () => void B(),
                disabled: m,
                children: [
                  e.jsx(je, {
                    className: `h-4 w-4 mr-2 ${m ? "animate-spin" : ""}`,
                  }),
                  "刷新",
                ],
              }),
              e.jsxs(v, {
                type: "button",
                onClick: q,
                disabled: h.size === 0,
                children: [
                  e.jsx(Se, { className: "h-4 w-4 mr-2" }),
                  h.size > 0 ? `发邮件（${h.size}）` : "发邮件",
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "rounded-xl border border-border bg-card p-3 sm:p-4 space-y-3",
        children: [
          e.jsx(ne, {
            value: N,
            onChange: (l) => p(l.target.value),
            placeholder: "搜索邮箱、昵称或用户 ID",
          }),
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx(ae, {
                id: "select-all-users",
                checked: U ? !0 : G ? "indeterminate" : !1,
                onCheckedChange: (l) => T(l === !0),
                disabled: L.length === 0,
                "aria-label": "全选当前列表",
              }),
              e.jsx(X, {
                htmlFor: "select-all-users",
                className: "text-sm font-normal cursor-pointer",
                children: "全选当前列表",
              }),
              e.jsx("span", {
                className: "text-sm text-muted-foreground",
                children:
                  h.size > 0 ? `已选 ${h.size} 人` : "可单选或多选后发送",
              }),
            ],
          }),
        ],
      }),
      m && a.length === 0
        ? e.jsxs("div", {
            className:
              "rounded-xl border border-border bg-card p-8 text-center text-muted-foreground",
            children: [
              e.jsx(Y, { className: "h-5 w-5 animate-spin inline-block mr-2" }),
              "加载用户中…",
            ],
          })
        : L.length === 0
          ? e.jsx("div", {
              className:
                "rounded-xl border border-border bg-card p-8 text-center text-muted-foreground",
              children:
                a.length === 0 ? "暂无注册用户。" : "没有符合搜索的用户。",
            })
          : e.jsx("div", {
              className: "space-y-3",
              children: L.map((l) =>
                e.jsx(
                  "article",
                  {
                    className: `rounded-2xl border p-3 sm:p-4 transition-colors ${h.has(l.id) ? "ring-2 ring-primary/40 border-primary/30" : "border-border bg-card"}`,
                    children: e.jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        e.jsx(ae, {
                          checked: h.has(l.id),
                          onCheckedChange: (y) => k(l.id, y === !0),
                          "aria-label": `选择 ${l.email}`,
                          className: "mt-1",
                        }),
                        e.jsxs("div", {
                          className: "min-w-0 flex-1",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex flex-wrap items-baseline gap-x-3 gap-y-1",
                              children: [
                                e.jsx("p", {
                                  className: "font-semibold text-foreground",
                                  children: l.displayName || "未命名",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-muted-foreground break-all",
                                  children: l.email,
                                }),
                              ],
                            }),
                            e.jsxs("p", {
                              className: "mt-1 text-xs text-muted-foreground",
                              children: [
                                "注册 ",
                                es(l.createdAt),
                                " · ",
                                l.emailVerified === !1
                                  ? "未验证邮箱"
                                  : "已验证",
                                l.lastMarketingEmailAt
                                  ? ` · 上次营销邮件 ${es(l.lastMarketingEmailAt)}`
                                  : "",
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(v, {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          className: "shrink-0",
                          onClick: () => {
                            (c(new Set([l.id])), C(!0));
                          },
                          children: [
                            e.jsx(Se, { className: "h-4 w-4 mr-1.5" }),
                            "发信",
                          ],
                        }),
                      ],
                    }),
                  },
                  l.id,
                ),
              ),
            }),
      e.jsx(xe, {
        open: S,
        onOpenChange: C,
        children: e.jsxs(be, {
          className:
            "w-[calc(100vw-1rem)] max-w-2xl max-h-[90dvh] overflow-y-auto",
          children: [
            e.jsxs(he, {
              children: [
                e.jsxs(fe, { children: ["发邮件（", h.size, " 人）"] }),
                e.jsx(ge, {
                  children:
                    "发件人 orders@ailibarbar.com。主题自动加 [Alibarbar]，正文按 HTML 发送，并自动加问候和页脚。",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-3 py-2",
              children: [
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsx(X, {
                      htmlFor: "admin-email-subject",
                      children: "主题",
                    }),
                    e.jsx(ne, {
                      id: "admin-email-subject",
                      value: A,
                      onChange: (l) => o(l.target.value),
                      placeholder: "例如：本周口味补货通知",
                    }),
                    e.jsxs("p", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        "预览：",
                        A.trim() ? `[Alibarbar] ${A.trim()}` : "[Alibarbar] …",
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsx(X, { htmlFor: "admin-email-body", children: "正文" }),
                    e.jsx(Ee, {
                      id: "admin-email-body",
                      value: f,
                      onChange: (l) => E(l.target.value),
                      rows: 10,
                      className: "font-mono text-xs sm:text-sm",
                      placeholder: `<p>本周 <strong>Peach Ice</strong> 补货。</p>
<p><a href="https://www.ailibarbar.com/shop">去商店</a></p>`,
                    }),
                    e.jsxs("p", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        "可写 HTML。占位符：",
                        "{{name}} {{displayName}} {{firstName}} {{email}}",
                      ],
                    }),
                  ],
                }),
                f.trim()
                  ? e.jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        e.jsx(X, { children: "预览" }),
                        e.jsxs("div", {
                          className:
                            "max-h-56 overflow-auto rounded-lg border border-border bg-white p-3 text-sm text-black",
                          children: [
                            e.jsx("p", { children: "Hi Ada," }),
                            e.jsx("div", {
                              dangerouslySetInnerHTML: {
                                __html: f
                                  .replace(/\{\{name\}\}/g, "Ada")
                                  .replace(/\{\{displayName\}\}/g, "Ada")
                                  .replace(/\{\{firstName\}\}/g, "Ada")
                                  .replace(/\{\{email\}\}/g, "ada@example.com"),
                              },
                            }),
                            e.jsx("p", {
                              className: "mt-4 text-xs text-neutral-500",
                              children:
                                "You received this because you have an account at Alibarbar Australia.",
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            e.jsxs(cs, {
              className: "gap-2 sm:gap-0",
              children: [
                e.jsx(v, {
                  type: "button",
                  variant: "outline",
                  onClick: () => C(!1),
                  disabled: P,
                  children: "取消",
                }),
                e.jsxs(v, {
                  type: "button",
                  onClick: () => void Q(),
                  disabled: P || !A.trim() || !f.trim(),
                  children: [
                    P
                      ? e.jsx(Y, { className: "h-4 w-4 mr-2 animate-spin" })
                      : e.jsx(Se, { className: "h-4 w-4 mr-2" }),
                    "确认发送",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
async function rt() {
  const s = le(),
    a = await fetch("/api/checkout-leads", {
      headers: s ? { Authorization: `Bearer ${s}` } : {},
      cache: "no-store",
    });
  if (!a.ok) {
    let m = `Request failed (${a.status})`;
    try {
      m = (await a.json()).error ?? m;
    } catch {}
    throw new Error(m);
  }
  return (await a.json()).leads ?? [];
}
const ss = { browsing: "未下单", placed: "已下单未付款", paid: "已付款" },
  at = {
    browsing: "border-amber-500/40 bg-amber-500/10 text-amber-600",
    placed: "border-sky-500/40 bg-sky-500/10 text-sky-600",
    paid: "border-emerald-500/40 bg-emerald-500/10 text-emerald-600",
  };
function J(s) {
  return new Date(s).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
function nt(s) {
  const a = s.orderEmails;
  if (a) {
    const i = [];
    return (
      a.placedEmailSentAt
        ? i.push(`已发付款提醒 ${J(a.placedEmailSentAt)}`)
        : s.status === "placed" && i.push("未发付款提醒"),
      a.reminderSentAt
        ? i.push(
            `已发弃单提醒 ${J(a.reminderSentAt)}` +
              (a.couponCode ? ` · 码 ${a.couponCode}` : " · 不带码"),
          )
        : s.status === "placed" && i.push("弃单提醒下单 1–3 天后发"),
      a.lastCallSentAt && i.push(`已发到期提醒 ${J(a.lastCallSentAt)}`),
      i.join(" · ") || "已付款，无需提醒"
    );
  }
  return s.reminderSentAt
    ? [
        `已发提醒 ${J(s.reminderSentAt)}`,
        s.couponCode ? `码 ${s.couponCode}` : "不带码（该邮箱已领过）",
        s.lastCallSentAt ? `已发到期提醒 ${J(s.lastCallSentAt)}` : "",
      ]
        .filter(Boolean)
        .join(" · ")
    : "未发提醒";
}
function lt(s) {
  return [s.apartment, s.street, s.suburb, s.state, s.postcode]
    .filter(Boolean)
    .join(", ");
}
const it = () => {
  const [s, a] = n.useState([]),
    [i, m] = n.useState(!1),
    [g, N] = n.useState(""),
    [p, h] = n.useState("browsing"),
    c = n.useCallback(async () => {
      if (le()) {
        m(!0);
        try {
          a(await rt());
        } catch (o) {
          b.error(
            o instanceof Error && o.message === "Unauthorized"
              ? "管理员密钥无效，请重新登录。"
              : "无法加载结账线索。",
          );
        } finally {
          m(!1);
        }
      }
    }, []);
  n.useEffect(() => {
    c();
  }, [c]);
  const S = n.useMemo(() => {
      const o = { all: s.length, browsing: 0, placed: 0, paid: 0 };
      for (const f of s) o[f.status] += 1;
      return o;
    }, [s]),
    C = n.useMemo(() => {
      const o = g.trim().toLowerCase();
      return s.filter((f) =>
        p !== "all" && f.status !== p
          ? !1
          : o
            ? [
                f.email,
                f.firstName,
                f.lastName,
                f.phone,
                f.suburb,
                f.orderNumber ?? "",
              ].some((E) => E.toLowerCase().includes(o))
            : !0,
      );
    }, [s, g, p]),
    A = async () => {
      const o = [...new Set(C.map((f) => f.email))];
      if (o.length !== 0)
        try {
          (await navigator.clipboard.writeText(
            o.join(`
`),
          ),
            b.success(`已复制 ${o.length} 个邮箱`));
        } catch {
          b.error("复制失败");
        }
    };
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsxs("div", {
        className:
          "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        children: [
          e.jsxs("p", {
            className: "text-sm text-muted-foreground",
            children: [
              "结账页填了邮箱就会自动记录。没下单的 1–3 天后收到带码提醒（1–4 台 A$7，5–19 台 A$10，20 台以上 A$21，每个邮箱只领一次），第 6 天码没用再提醒一次，之后不再发。共 ",
              s.length,
              " 条。",
            ],
          }),
          e.jsxs("div", {
            className: "flex flex-wrap gap-2",
            children: [
              e.jsxs(v, {
                type: "button",
                variant: "outline",
                onClick: () => void A(),
                disabled: C.length === 0,
                children: [
                  e.jsx(Te, { className: "h-4 w-4 mr-2" }),
                  "复制当前邮箱",
                ],
              }),
              e.jsxs(v, {
                type: "button",
                variant: "outline",
                onClick: () => void c(),
                disabled: i,
                children: [
                  e.jsx(je, {
                    className: `h-4 w-4 mr-2 ${i ? "animate-spin" : ""}`,
                  }),
                  "刷新",
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "rounded-xl border border-border bg-card p-3 sm:p-4 space-y-3",
        children: [
          e.jsx(ne, {
            value: g,
            onChange: (o) => N(o.target.value),
            placeholder: "搜索邮箱、姓名、电话、城区或订单号",
          }),
          e.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: ["browsing", "placed", "paid", "all"].map((o) =>
              e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => h(o),
                  className: `rounded-full border px-3 py-1.5 text-sm transition-colors ${p === o ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border text-muted-foreground hover:text-foreground"}`,
                  children: [
                    o === "all" ? "全部" : ss[o],
                    e.jsx("span", {
                      className: "ml-1.5 tabular-nums text-xs",
                      children: S[o],
                    }),
                  ],
                },
                o,
              ),
            ),
          }),
        ],
      }),
      i && s.length === 0
        ? e.jsxs("div", {
            className:
              "rounded-xl border border-border bg-card p-8 text-center text-muted-foreground",
            children: [
              e.jsx(Y, { className: "h-5 w-5 animate-spin inline-block mr-2" }),
              "加载中…",
            ],
          })
        : C.length === 0
          ? e.jsx("div", {
              className:
                "rounded-xl border border-border bg-card p-8 text-center text-muted-foreground",
              children: s.length === 0 ? "暂无记录。" : "没有符合条件的记录。",
            })
          : e.jsx("div", {
              className: "space-y-3",
              children: C.map((o) => {
                var P;
                const f = `${o.firstName} ${o.lastName}`.trim(),
                  E = lt(o);
                return e.jsxs(
                  "article",
                  {
                    className:
                      "rounded-2xl border border-border bg-card p-3 sm:p-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex flex-wrap items-baseline gap-x-3 gap-y-1",
                        children: [
                          e.jsx("p", {
                            className: "font-semibold text-foreground",
                            children: f || "未填姓名",
                          }),
                          e.jsx("p", {
                            className:
                              "text-sm text-muted-foreground break-all",
                            children: o.email,
                          }),
                          e.jsxs("span", {
                            className: `rounded-full border px-2 py-0.5 text-xs ${at[o.status]}`,
                            children: [
                              ss[o.status],
                              o.orderNumber ? ` · #${o.orderNumber}` : "",
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-2 grid gap-1 text-sm text-muted-foreground sm:grid-cols-2",
                        children: [
                          e.jsxs("p", {
                            children: ["电话：", o.phone || "未填"],
                          }),
                          e.jsxs("p", {
                            className: "break-words",
                            children: ["地址：", E || "未填"],
                          }),
                          e.jsxs("p", {
                            children: [
                              "购物车：",
                              o.deviceCount,
                              " 台 · ",
                              F(o.subtotal),
                              typeof o.orderTotal == "number" &&
                              o.orderTotal !== o.subtotal
                                ? ` · 实付 ${F(o.orderTotal)}`
                                : "",
                            ],
                          }),
                          e.jsxs("p", {
                            children: [
                              "首次 ",
                              J(o.createdAt),
                              " · 最后 ",
                              J(o.updatedAt),
                            ],
                          }),
                        ],
                      }),
                      o.lines.length > 0
                        ? e.jsx("p", {
                            className:
                              "mt-2 text-xs text-muted-foreground break-words",
                            children: o.lines
                              .map((w) => `${w.name} ×${w.qty}`)
                              .join("，"),
                          })
                        : null,
                      o.notes
                        ? e.jsxs("p", {
                            className:
                              "mt-1 text-xs text-muted-foreground break-words",
                            children: ["备注：", o.notes],
                          })
                        : null,
                      o.attribution &&
                      (o.attribution.label ||
                        ((P = o.attribution.badges) != null && P.length))
                        ? e.jsxs("div", {
                            className: "mt-2 flex flex-wrap gap-1.5",
                            children: [
                              o.attribution.label
                                ? e.jsxs("span", {
                                    className:
                                      "inline-flex items-center rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-200",
                                    children: [
                                      o.attribution.label,
                                      ue(o.attribution)
                                        ? ` · ${ue(o.attribution)}`
                                        : "",
                                    ],
                                  })
                                : null,
                              (o.attribution.badges ?? []).map((w) =>
                                e.jsx(
                                  "span",
                                  {
                                    className:
                                      "inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-2 py-0.5 text-xs font-medium text-sky-900 dark:text-sky-200",
                                    children: w,
                                  },
                                  w,
                                ),
                              ),
                            ],
                          })
                        : null,
                      e.jsx("p", {
                        className: "mt-1 text-xs text-muted-foreground",
                        children: nt(o),
                      }),
                    ],
                  },
                  o.id,
                );
              }),
            }),
    ],
  });
};
async function ot(s = "30") {
  const a = le(),
    i = await fetch(`/api/admin-email-stats?range=${encodeURIComponent(s)}`, {
      headers: a ? { Authorization: `Bearer ${a}` } : {},
      cache: "no-store",
    });
  if (!i.ok) {
    let m = `Request failed (${i.status})`;
    try {
      m = (await i.json()).error ?? m;
    } catch {}
    throw new Error(m);
  }
  return await i.json();
}
const dt = [
    { key: "orderPlaced", label: "付款提醒（下单 20 分钟，无码）" },
    { key: "abandonReminder", label: "弃单提醒（已下单未付款）" },
    { key: "abandonReminderWithCode", label: "其中带折扣码" },
    { key: "abandonLastCall", label: "码到期提醒（已下单）" },
    { key: "leadReminder", label: "弃单提醒（只填了资料）" },
    { key: "leadReminderWithCode", label: "其中带折扣码" },
    { key: "leadLastCall", label: "码到期提醒（只填了资料）" },
    { key: "welcomeFollowup", label: "注册跟进已结案（含下单后跳过）" },
    { key: "purchaseThanks", label: "感谢邮件第一封" },
    { key: "purchaseThanksSecond", label: "感谢邮件第二封" },
  ],
  ct = [
    { key: "abandon5", label: "弃单码 A$5（旧）" },
    { key: "abandon7", label: "弃单码 A$7（1–4 台）" },
    { key: "abandon10", label: "弃单码 A$10（5–19 台）" },
    { key: "abandon10old", label: "弃单码 A$10（旧，1–4 台）" },
    { key: "abandon21", label: "弃单码 A$21（20+ 台）" },
    { key: "abandon15", label: "弃单码 A$15（旧）" },
    { key: "abandon30", label: "弃单码 A$30（旧）" },
    { key: "repurchase", label: "回购感谢码" },
  ],
  ts = [
    { key: "7", label: "近 7 天" },
    { key: "30", label: "近 30 天" },
    { key: "all", label: "全部" },
  ];
function me({ span: s }) {
  return e.jsxs("span", {
    className: "tabular-nums",
    children: [
      s.all,
      e.jsxs("span", {
        className: "text-muted-foreground",
        children: [" · 近30天 ", s.last30],
      }),
    ],
  });
}
function mt({ label: s, stats: a }) {
  return e.jsxs("article", {
    className: "rounded-2xl border border-border bg-card p-4 space-y-1 text-sm",
    children: [
      e.jsx("p", { className: "font-semibold text-foreground", children: s }),
      e.jsxs("p", { children: ["已发 ", e.jsx(me, { span: a.issued })] }),
      e.jsxs("p", {
        children: [
          "已使用 ",
          e.jsx(me, { span: a.used }),
          " · 当前有效 ",
          a.live,
        ],
      }),
      e.jsxs("p", {
        children: [
          "带来订单 ",
          e.jsx(me, { span: a.orders }),
          " · 成交额 ",
          F(a.revenueAud.all),
          e.jsxs("span", {
            className: "text-muted-foreground",
            children: [" · 近30天 ", F(a.revenueAud.last30)],
          }),
        ],
      }),
    ],
  });
}
const ut = () => {
  var h;
  const [s, a] = n.useState(null),
    [i, m] = n.useState(!1),
    [g, N] = n.useState("30"),
    p = n.useCallback(async () => {
      if (le()) {
        m(!0);
        try {
          a(await ot(g));
        } catch (c) {
          b.error(
            c instanceof Error && c.message === "Unauthorized"
              ? "管理员密钥无效，请重新登录。"
              : "无法加载邮件统计。",
          );
        } finally {
          m(!1);
        }
      }
    }, [g]);
  return (
    n.useEffect(() => {
      p();
    }, [p]),
    e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsxs("div", {
          className:
            "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
          children: [
            e.jsxs("p", {
              className: "text-sm text-muted-foreground",
              children: [
                "发出数和用码成交。下方转化按所选时间范围统计。已退订 ",
                (s == null ? void 0 : s.unsubscribed) ?? 0,
                " 个邮箱。",
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [
                ts.map((c) =>
                  e.jsx(
                    v,
                    {
                      type: "button",
                      size: "sm",
                      variant: g === c.key ? "default" : "outline",
                      onClick: () => N(c.key),
                      disabled: i,
                      children: c.label,
                    },
                    c.key,
                  ),
                ),
                e.jsxs(v, {
                  type: "button",
                  variant: "outline",
                  onClick: () => void p(),
                  disabled: i,
                  children: [
                    e.jsx(je, {
                      className: `h-4 w-4 mr-2 ${i ? "animate-spin" : ""}`,
                    }),
                    "刷新",
                  ],
                }),
              ],
            }),
          ],
        }),
        i && !s
          ? e.jsxs("div", {
              className:
                "rounded-xl border border-border bg-card p-8 text-center text-muted-foreground",
              children: [
                e.jsx(Y, {
                  className: "h-5 w-5 animate-spin inline-block mr-2",
                }),
                "统计中…",
              ],
            })
          : s
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("div", {
                    className:
                      "rounded-2xl border border-border bg-card overflow-x-auto",
                    children: [
                      e.jsxs("div", {
                        className: "px-4 py-3 border-b border-border",
                        children: [
                          e.jsxs("p", {
                            className: "font-semibold text-sm",
                            children: [
                              "邮件挽回转化（",
                              (h = ts.find((c) => c.key === g)) == null
                                ? void 0
                                : h.label,
                              "）",
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground mt-0.5",
                            children:
                              "发送数按邮件发出时间；付款后按「最近一封邮件」归因。优惠码单独统计。",
                          }),
                        ],
                      }),
                      e.jsxs("table", {
                        className: "w-full text-sm",
                        children: [
                          e.jsx("thead", {
                            children: e.jsxs("tr", {
                              className:
                                "text-left text-muted-foreground border-b border-border",
                              children: [
                                e.jsx("th", {
                                  className: "px-4 py-2 font-medium",
                                  children: "类型",
                                }),
                                e.jsx("th", {
                                  className:
                                    "px-4 py-2 font-medium tabular-nums",
                                  children: "发出",
                                }),
                                e.jsx("th", {
                                  className:
                                    "px-4 py-2 font-medium tabular-nums",
                                  children: "付款后",
                                }),
                                e.jsx("th", {
                                  className:
                                    "px-4 py-2 font-medium tabular-nums",
                                  children: "转化%",
                                }),
                                e.jsx("th", {
                                  className:
                                    "px-4 py-2 font-medium tabular-nums",
                                  children: "成交额",
                                }),
                              ],
                            }),
                          }),
                          e.jsx("tbody", {
                            children: (s.conversion ?? []).map((c) =>
                              e.jsxs(
                                "tr",
                                {
                                  className:
                                    "border-b border-border last:border-0",
                                  children: [
                                    e.jsx("td", {
                                      className: "px-4 py-2",
                                      children: c.label,
                                    }),
                                    e.jsx("td", {
                                      className: "px-4 py-2 tabular-nums",
                                      children: c.sent,
                                    }),
                                    e.jsx("td", {
                                      className: "px-4 py-2 tabular-nums",
                                      children: c.paidAfter,
                                    }),
                                    e.jsxs("td", {
                                      className: "px-4 py-2 tabular-nums",
                                      children: [c.conversionPct, "%"],
                                    }),
                                    e.jsx("td", {
                                      className: "px-4 py-2 tabular-nums",
                                      children: F(c.revenueAud),
                                    }),
                                  ],
                                },
                                c.key,
                              ),
                            ),
                          }),
                        ],
                      }),
                      s.coupons
                        ? e.jsxs("div", {
                            className:
                              "px-4 py-3 text-xs text-muted-foreground border-t border-border flex flex-wrap gap-x-4 gap-y-1",
                            children: [
                              e.jsxs("span", {
                                children: [
                                  "弃购券 发出 ",
                                  s.coupons.abandonIssued,
                                  " · 核销 ",
                                  s.coupons.abandonRedeemed,
                                ],
                              }),
                              e.jsxs("span", {
                                children: [
                                  "复购券 发出 ",
                                  s.coupons.repurchaseIssued,
                                  " · 核销 ",
                                  s.coupons.repurchaseRedeemed,
                                ],
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "rounded-2xl border border-border bg-card divide-y divide-border",
                    children: dt.map((c) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "flex flex-wrap items-baseline justify-between gap-2 px-4 py-3 text-sm",
                          children: [
                            e.jsx("span", { children: c.label }),
                            e.jsx(me, {
                              span: s.emails[c.key] ?? { all: 0, last30: 0 },
                            }),
                          ],
                        },
                        c.key,
                      ),
                    ),
                  }),
                  e.jsx("div", {
                    className: "grid gap-3 md:grid-cols-3",
                    children: ct.map((c) =>
                      e.jsx(
                        mt,
                        {
                          label: c.label,
                          stats: s.codes[c.key] ?? {
                            issued: { all: 0, last30: 0 },
                            used: { all: 0, last30: 0 },
                            live: 0,
                            orders: { all: 0, last30: 0 },
                            revenueAud: { all: 0, last30: 0 },
                          },
                        },
                        c.key,
                      ),
                    ),
                  }),
                ],
              })
            : null,
      ],
    })
  );
};
function rs(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function xt(s) {
  var h;
  const a = `VN #${s.orderNumber}`,
    i = ((h = s.firstName) == null ? void 0 : h.trim()) || "there",
    m = s.total.toFixed(2),
    g = `Payment confirmed for ${a}`,
    N = `
    <h2>Payment confirmed</h2>
    <p>Hi ${rs(i)},</p>
    <p>We have checked your bank transfer for order <strong>${rs(a)}</strong> (A$${m}) and confirmed the payment.</p>
    <p>Your order will now be packed and shipped.</p>
  `.trim(),
    p = [
      `Hi ${i},`,
      "",
      `We have checked your bank transfer for ${a} (A$${m}) and confirmed the payment.`,
      "Your order will now be packed and shipped.",
    ].join(`
`);
  return { subject: g, html: N, text: p };
}
const as = async (...s) =>
    (
      await ds(
        async () => {
          const { exportOrdersToExcel: a } = await import(
            "./export-orders-excel-D3FBk6DR.js"
          ).then((i) => i.e);
          return { exportOrdersToExcel: a };
        },
        __vite__mapDeps([0, 1, 2]),
      )
    ).exportOrdersToExcel(...s),
  bt = ["pending", "confirmed"],
  pt = ["unshipped", "shipped"],
  ht = [
    { id: "all", label: "全部付款" },
    { id: "pending", label: "未确认" },
    { id: "confirmed", label: "已确认" },
  ],
  ft = [
    { id: "all", label: "全部发货" },
    { id: "unshipped", label: "未发货" },
    { id: "shipped", label: "已发货" },
  ];
function ns(s) {
  return Ds(s);
}
function oe(s, a) {
  return a === "all" || Le(s) === a;
}
function de(s, a) {
  return a === "all" || Oe(s) === a;
}
function us(s) {
  if (s === "unknown") return "日期未知";
  const [a, i] = s.split("-");
  return `${a}年${Number(i)}月`;
}
function gt(s) {
  const a = new Map();
  for (const i of s) {
    const m = ce(i),
      g = a.get(m);
    g ? g.push(i) : a.set(m, [i]);
  }
  return [...a.entries()]
    .sort(([i], [m]) => m.localeCompare(i))
    .map(([i, m]) => ({ monthKey: i, label: us(i), orders: m }));
}
function xs(s) {
  return new Date(s).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
function jt(s) {
  return [
    ...s.lines.map((i) => `${ms(i.name)} × ${i.qty}    ${F(i.price * i.qty)}`),
    `小计 ${F(s.subtotal)}`,
    `运费 ${F(s.shipping)}`,
    ...(s.discountCode || s.discountAmount
      ? [`折扣 ${s.discountCode ?? ""} −${F(s.discountAmount ?? 0)}`]
      : []),
    `合计 ${F(s.total)}`,
  ].join(`
`);
}
function ls(s) {
  const { billing: a } = s;
  return [
    `${a.firstName} ${a.lastName}`.trim(),
    a.street,
    a.apartment,
    [a.suburb, a.state, a.postcode].filter(Boolean).join(" "),
    a.country,
    a.phone ? `电话 ${a.phone}` : "",
    a.email ? `邮箱 ${a.email}` : "",
  ].filter(Boolean);
}
function Ce(s) {
  var m;
  if ((m = s.shipmentEmailHistory) != null && m.length)
    return s.shipmentEmailHistory;
  if (!s.shipmentEmailSentAt) return [];
  const a = s.trackingNumber ?? "",
    i = s.carrier ?? "Australia Post";
  return [
    {
      id: `legacy-${s.shipmentEmailSentAt}`,
      attemptedAt: s.shipmentEmailSentAt,
      to: s.billing.email,
      subject: `Your order ${z(s.orderNumber)} has shipped`,
      trackingNumber: a,
      carrier: i,
      status: "sent",
    },
  ];
}
function Nt({ order: s, sending: a, onCancel: i, onConfirm: m }) {
  const g = z(s.orderNumber),
    N = xt({
      firstName: s.billing.firstName,
      orderNumber: s.orderNumber,
      total: s.total,
    }),
    [p, h] = n.useState(N.html),
    [c, S] = n.useState(null),
    C = c ?? N.html,
    A = c === null || c === N.html,
    o = () => {
      const f = p.trim();
      if (!f) {
        b.error("邮件正文不能为空。");
        return;
      }
      (S(f),
        b.success(
          f === N.html
            ? "已保存，将使用默认模板。"
            : "已保存，确认发送时使用这份 HTML。",
        ));
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(he, {
        children: [
          e.jsx(fe, { children: "确认付款并发送对账邮件" }),
          e.jsxs(ge, {
            children: [
              "将把 ",
              g,
              " 标为已确认，并发送到 ",
              s.billing.email,
              "。不点保存时使用默认模板。",
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "grid sm:grid-cols-2 gap-2 text-sm rounded-lg border border-border p-3",
        children: [
          e.jsxs("p", {
            children: [
              e.jsx("span", {
                className: "text-muted-foreground",
                children: "订单：",
              }),
              g,
            ],
          }),
          e.jsxs("p", {
            children: [
              e.jsx("span", {
                className: "text-muted-foreground",
                children: "金额：",
              }),
              F(s.total),
            ],
          }),
          e.jsxs("p", {
            className: "sm:col-span-2 break-all",
            children: [
              e.jsx("span", {
                className: "text-muted-foreground",
                children: "收件人：",
              }),
              s.billing.email,
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "space-y-3",
        children: [
          e.jsxs("div", {
            className:
              "rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm",
            children: [
              e.jsx("span", {
                className: "text-muted-foreground",
                children: "主题：",
              }),
              e.jsx("span", {
                className: "font-medium break-words",
                children: N.subject,
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-1.5",
            children: [
              e.jsx(X, {
                htmlFor: `payment-email-html-${s.orderNumber}`,
                children: "HTML 正文",
              }),
              e.jsx(Ee, {
                id: `payment-email-html-${s.orderNumber}`,
                value: p,
                onChange: (f) => h(f.target.value),
                className: "min-h-[140px] font-mono text-xs",
              }),
              e.jsx(v, {
                type: "button",
                variant: "secondary",
                disabled: a,
                onClick: o,
                children: "保存",
              }),
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: A
                  ? "当前将发送默认模板。"
                  : "当前将发送已保存的 HTML。",
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "prose prose-sm max-w-none rounded-lg border border-border bg-background p-4 overflow-auto max-h-[40vh]",
            dangerouslySetInnerHTML: { __html: C },
          }),
        ],
      }),
      e.jsxs(cs, {
        className: "gap-2 sm:gap-0",
        children: [
          e.jsx(v, {
            type: "button",
            variant: "outline",
            disabled: a,
            onClick: i,
            children: "取消",
          }),
          e.jsxs(v, {
            type: "button",
            disabled: a,
            onClick: () => m(A ? void 0 : (c ?? void 0)),
            children: [
              a ? e.jsx(Y, { className: "h-4 w-4 animate-spin" }) : null,
              "确认发送",
            ],
          }),
        ],
      }),
    ],
  });
}
function yt(s, a) {
  return Ms({
    firstName: s.billing.firstName,
    orderNumber: s.orderNumber,
    trackingNumber: a.trackingNumber,
    carrier: a.carrier,
  }).text;
}
function W(s, a) {
  if (!(s instanceof Error)) return a;
  const i = s.message;
  return i === "Unauthorized"
    ? "管理员密钥无效，请重新登录。"
    : i.startsWith("Request failed")
      ? a
      : i;
}
async function Ae(s, a) {
  var i;
  try {
    if ((i = navigator.clipboard) != null && i.writeText)
      await navigator.clipboard.writeText(s);
    else {
      const m = document.createElement("textarea");
      ((m.value = s),
        m.setAttribute("readonly", ""),
        (m.style.position = "fixed"),
        (m.style.left = "-9999px"),
        document.body.appendChild(m),
        m.select());
      const g = document.execCommand("copy");
      if ((document.body.removeChild(m), !g)) throw new Error("copy failed");
    }
    b.success(`已复制${a}`);
  } catch {
    b.error("复制失败，请手动选择文字。");
  }
}
function vt(s) {
  const a = Oe(s),
    i = Le(s);
  return a === "shipped"
    ? "border-border bg-card"
    : i === "confirmed"
      ? "border-emerald-500/40 bg-emerald-500/[0.04]"
      : "border-amber-500/40 bg-amber-500/[0.04]";
}
function is(s, a) {
  return s
    ? a === "amber"
      ? "border-amber-500 bg-amber-500 text-white"
      : a === "orange"
        ? "border-orange-500 bg-orange-500 text-white"
        : "border-emerald-600 bg-emerald-600 text-white"
    : "border-border bg-background text-muted-foreground hover:text-foreground hover:bg-muted/60";
}
const wt = { pending: "amber", confirmed: "emerald" },
  os = ({ title: s, copyLabel: a, onCopy: i }) =>
    e.jsxs("div", {
      className: "flex items-center justify-between gap-2 mb-2",
      children: [
        e.jsx("p", {
          className: "text-xs uppercase tracking-wide text-muted-foreground",
          children: s,
        }),
        e.jsxs(v, {
          type: "button",
          size: "sm",
          variant: "outline",
          className: "h-9 shrink-0 px-3 text-xs",
          onClick: i,
          "aria-label": a,
          children: [e.jsx(Te, { className: "h-3.5 w-3.5" }), "复制"],
        }),
      ],
    }),
  kt = ({ order: s, saving: a, onSave: i }) => {
    const m = s.adminNote ?? "",
      [g, N] = n.useState(m);
    n.useEffect(() => {
      N(m);
    }, [s.orderNumber, m]);
    const p = g !== m;
    return e.jsxs("div", {
      className: "rounded-xl border border-neutral-200 bg-white p-4",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between gap-2 mb-2",
          children: [
            e.jsx("p", {
              className: "text-sm font-semibold text-neutral-950",
              children: "后台备注",
            }),
            e.jsx(v, {
              type: "button",
              size: "sm",
              variant: p ? "default" : "outline",
              className: "h-9 shrink-0 px-3 text-xs",
              disabled: !p || a,
              onClick: () => i(g),
              children: a
                ? e.jsx(Y, { className: "h-3.5 w-3.5 animate-spin" })
                : p
                  ? "保存备注"
                  : "已保存",
            }),
          ],
        }),
        e.jsx(Ee, {
          value: g,
          onChange: (h) => N(h.target.value),
          placeholder: "写给自己看的备注，例如已对账、改地址、等客户补截图",
          rows: 2,
          maxLength: 2e3,
          "aria-label": `后台备注 ${z(s.orderNumber)}`,
          className:
            "min-h-[96px] resize-y border-neutral-300 bg-neutral-50 text-base font-medium leading-relaxed text-neutral-950 placeholder:text-neutral-500",
        }),
      ],
    });
  },
  $t = ({ order: s }) => {
    const a = n.useRef(null),
      [i, m] = n.useState(!1),
      [g, N] = n.useState(0),
      [p, h] = n.useState(null),
      [c, S] = n.useState(null),
      [C, A] = n.useState(!0),
      [o, f] = n.useState(null),
      [E, P] = n.useState(!1);
    (n.useEffect(() => {
      if (typeof IntersectionObserver > "u") {
        m(!0);
        return;
      }
      const k = a.current;
      if (!k) return;
      const T = new IntersectionObserver(
        ([q]) => {
          q != null && q.isIntersecting && m(!0);
        },
        { rootMargin: "600px 0px" },
      );
      return (T.observe(k), () => T.disconnect());
    }, []),
      n.useEffect(() => {
        if (!i) return;
        let k = null,
          T = !1;
        return (
          (async () => {
            var Q;
            (A(!0), f(null), h(null), S(null));
            try {
              if ((Q = s.paymentReceipt) != null && Q.startsWith("data:")) {
                const D = await (await fetch(s.paymentReceipt)).blob();
                if (T) return;
                (S(D), h(s.paymentReceipt));
                return;
              }
              if (!s.paymentReceipt) {
                T ||
                  f(
                    s.noReceipt
                      ? "客户确认已转账但未上传截图，请在银行 App 按参考号核对到账。"
                      : "尚未上传付款截图。",
                  );
                return;
              }
              const { url: l, blob: y } = await Gs(s.orderNumber);
              if (T) {
                URL.revokeObjectURL(l);
                return;
              }
              ((k = l), S(y), h(l));
            } catch (l) {
              T || f(W(l, "无法加载付款截图。"));
            } finally {
              T || A(!1);
            }
          })(),
          () => {
            ((T = !0), k && URL.revokeObjectURL(k));
          }
        );
      }, [i, g, s.orderNumber, s.paymentReceipt, s.noReceipt]));
    const w = z(s.orderNumber),
      B = _s(s),
      L = zs(),
      R = Bs(s, c),
      U = R ? (L ? "保存 PDF" : "下载 PDF") : L ? "保存到相册" : "下载",
      G = async () => {
        if (p)
          try {
            const k = await Us(p, B, c);
            k === "shared"
              ? b.success(
                  R
                    ? "请在弹出菜单里选择「存储到文件」。"
                    : "请在弹出菜单里选择「存储图像」或「保存到相册」。",
                )
              : k === "opened"
                ? b.success(
                    R
                      ? "已在新页面打开 PDF，可用分享按钮保存。"
                      : "已打开大图，长按图片选「存储图像」即可进相册。",
                  )
                : b.success(
                    R ? "已开始下载 PDF 回执。" : "已开始下载转账截图。",
                  );
          } catch (k) {
            if (k instanceof DOMException && k.name === "AbortError") return;
            b.error(
              L ? "无法保存到相册，可长按图片再试。" : "无法下载转账截图。",
            );
          }
      };
    return e.jsxs("div", {
      ref: a,
      className: "space-y-3",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between gap-2",
          children: [
            e.jsx("p", {
              className:
                "text-xs uppercase tracking-wide text-muted-foreground",
              children: "付款截图",
            }),
            p
              ? e.jsxs(v, {
                  type: "button",
                  size: "sm",
                  variant: "outline",
                  className: "h-9 px-3 text-xs",
                  onClick: () => void G(),
                  "aria-label": `${U}转账截图 ${w}`,
                  children: [e.jsx(pe, { className: "h-3.5 w-3.5" }), U],
                })
              : null,
          ],
        }),
        C
          ? e.jsxs("div", {
              className:
                "flex items-center justify-center h-32 text-muted-foreground text-sm",
              children: [
                e.jsx(Y, { className: "h-4 w-4 mr-2 animate-spin" }),
                "加载截图中…",
              ],
            })
          : o || !p
            ? e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: o ?? "尚未上传付款截图。",
                  }),
                  s.paymentReceipt
                    ? e.jsx(v, {
                        type: "button",
                        size: "sm",
                        variant: "outline",
                        className: "h-9 px-3 text-xs",
                        onClick: () => N((k) => k + 1),
                        children: "重新加载",
                      })
                    : null,
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => P(!0),
                    className:
                      "group relative block w-full rounded-lg border border-border bg-black/20 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    "aria-label": `查看完整付款截图 ${w}`,
                    children: [
                      R
                        ? e.jsxs("span", {
                            className:
                              "flex h-32 w-full flex-col items-center justify-center gap-1 text-sm text-foreground",
                            children: [
                              e.jsx(et, {
                                className: "h-8 w-8 text-[#b8942e]",
                              }),
                              "PDF 回执 · 点击查看",
                            ],
                          })
                        : e.jsx("img", {
                            src: p,
                            alt: `${w} 付款截图`,
                            className:
                              "w-full max-h-48 sm:max-h-56 object-contain",
                          }),
                      e.jsxs("span", {
                        className:
                          "pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium sm:opacity-0 sm:group-hover:opacity-100",
                        children: [
                          e.jsx(st, { className: "h-3.5 w-3.5" }),
                          "放大",
                        ],
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground break-all",
                    children: s.paymentReceiptName ?? B,
                  }),
                  s.paymentSubmittedAt
                    ? e.jsxs("p", {
                        className: "text-xs text-muted-foreground",
                        children: ["提交时间：", xs(s.paymentSubmittedAt)],
                      })
                    : null,
                  e.jsx(xe, {
                    open: E,
                    onOpenChange: P,
                    children: e.jsxs(be, {
                      className:
                        "w-[calc(100vw-1rem)] max-w-[min(96vw,1200px)] max-h-[92dvh] overflow-y-auto p-3 sm:p-4 gap-3",
                      children: [
                        e.jsxs(he, {
                          className: "pr-8 text-left",
                          children: [
                            e.jsxs(fe, {
                              className: "text-base",
                              children: [w, " 转账截图"],
                            }),
                            e.jsx(ge, {
                              className: "sr-only",
                              children: "付款截图大图",
                            }),
                          ],
                        }),
                        e.jsxs(v, {
                          type: "button",
                          variant: "outline",
                          className: "w-full sm:w-auto",
                          onClick: () => void G(),
                          children: [
                            e.jsx(pe, { className: "h-4 w-4" }),
                            R ? U : L ? "保存到相册" : "下载截图",
                          ],
                        }),
                        L && !R
                          ? e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children:
                                "点保存后在系统菜单选「存储图像」；也可以长按图片保存。",
                            })
                          : null,
                        R
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("a", {
                                  href: p,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-sm font-medium text-primary underline underline-offset-2",
                                  children: "在新页面打开 PDF",
                                }),
                                e.jsx("iframe", {
                                  src: p,
                                  title: `${w} PDF 回执`,
                                  className:
                                    "h-[70dvh] w-full rounded-md bg-white",
                                }),
                              ],
                            })
                          : e.jsx("img", {
                              src: p,
                              alt: `${w} 付款截图大图`,
                              className:
                                "w-full max-h-[70dvh] object-contain rounded-md bg-black/20",
                            }),
                      ],
                    }),
                  }),
                ],
              }),
      ],
    });
  },
  Ht = () => {
    const [s, a] = n.useState(""),
      [i, m] = n.useState(() => Hs()),
      [g, N] = n.useState(!1),
      [p, h] = n.useState(() => !!Qe()),
      [c, S] = n.useState([]),
      [C, A] = n.useState(""),
      [o, f] = n.useState("all"),
      [E, P] = n.useState("all"),
      [w, B] = n.useState("all"),
      [L, R] = n.useState(() => new Set()),
      [U, G] = n.useState(!1),
      [k, T] = n.useState(null),
      [q, Q] = n.useState(null),
      [l, y] = n.useState("orders"),
      [D, M] = n.useState({}),
      [bs, Ie] = n.useState(null),
      [ps, Re] = n.useState(null),
      [Fe, Pe] = n.useState(null),
      [V, ie] = n.useState(null),
      [te, Ne] = n.useState(() => new Set()),
      ee = n.useCallback(async () => {
        if (Qe()) {
          G(!0);
          try {
            const t = await qs();
            S(t);
          } catch (t) {
            (t instanceof Error &&
              t.message === "Unauthorized" &&
              (Ze(), h(!1), S([])),
              b.error(W(t, "无法加载订单。")));
          } finally {
            G(!1);
          }
        }
      }, []);
    n.useEffect(() => {
      p && ee();
    }, [p, ee]);
    const De = c.length > 0;
    n.useEffect(() => {
      if (!p || !De) return;
      const t = () =>
          void ds(
            () => import("./export-orders-excel-D3FBk6DR.js").then((u) => u.e),
            __vite__mapDeps([0, 1, 2]),
          ).catch(() => {}),
        d = window.requestIdleCallback;
      if (d) {
        d(t, { timeout: 5e3 });
        return;
      }
      const r = window.setTimeout(t, 2e3);
      return () => window.clearTimeout(r);
    }, [p, De]);
    const Me = n.useDeferredValue(C),
      O = n.useMemo(() => {
        const t = Me.trim().toLowerCase(),
          d = t
            ? c.filter((r) => {
                const u = z(r.orderNumber).toLowerCase(),
                  j =
                    `${r.billing.firstName} ${r.billing.lastName}`.toLowerCase();
                return (
                  u.includes(t) ||
                  j.includes(t) ||
                  r.billing.email.toLowerCase().includes(t) ||
                  (r.billing.phone ?? "").toLowerCase().includes(t) ||
                  r.orderNumber.includes(t) ||
                  (r.trackingNumber ?? "").toLowerCase().includes(t) ||
                  (r.adminNote ?? "").toLowerCase().includes(t) ||
                  (r.notes ?? "").toLowerCase().includes(t)
                );
              })
            : c;
        return ns(d);
      }, [c, Me]),
      H = n.useMemo(
        () =>
          O.filter((t) => oe(t, o) && de(t, E) && (w === "all" || ce(t) === w)),
        [O, o, E, w],
      ),
      hs = n.useMemo(
        () =>
          [...new Set(O.map((d) => ce(d)))].sort((d, r) => r.localeCompare(d)),
        [O],
      ),
      fs = n.useMemo(() => gt(H), [H]),
      _e = o === "all" && E === "all",
      gs = () => {
        (f("all"), P("all"));
      },
      ze = (t) => {
        R((d) => {
          const r = new Set(d);
          return (r.has(t) ? r.delete(t) : r.add(t), r);
        });
      },
      Be = H.filter((t) => te.has(t.orderNumber)),
      Ue = H.length > 0 && Be.length === H.length,
      js = Be.length > 0 && !Ue,
      K = n.useMemo(() => ns(c.filter((t) => te.has(t.orderNumber))), [c, te]),
      Z = n.useMemo(() => c.find((t) => t.orderNumber === Fe) ?? null, [c, Fe]);
    n.useEffect(() => {
      const t = new Set(c.map((d) => d.orderNumber));
      Ne((d) => {
        const r = new Set([...d].filter((u) => t.has(u)));
        return r.size === d.size ? d : r;
      });
    }, [c]);
    const Ns = (t, d) => {
        Ne((r) => {
          const u = new Set(r);
          return (d ? u.add(t) : u.delete(t), u);
        });
      },
      ys = (t) => {
        Ne((d) => {
          const r = new Set(d);
          for (const u of H) t ? r.add(u.orderNumber) : r.delete(u.orderNumber);
          return r;
        });
      },
      He = async () => {
        const t = s.trim();
        if (!t) {
          b.error("请输入管理员密钥。");
          return;
        }
        N(!0);
        try {
          (await Vs(t),
            Ks(t, i),
            h(!0),
            b.success(i ? "登录成功，已记住密钥。" : "登录成功。"));
        } catch (d) {
          const r = d instanceof Error ? d.message : "";
          b.error(
            r === "Unauthorized"
              ? "密码错误。"
              : "无法连接运营接口，请稍后重试。",
          );
        } finally {
          N(!1);
        }
      },
      vs = () => {
        (Ze(), m(!1), a(""), h(!1), S([]));
      },
      ye = async (t, d, r) => {
        T(t.orderNumber);
        try {
          const u = await $e(t.orderNumber, d),
            j = u.order;
          if (
            (S(($) => $.map((I) => (I.orderNumber === j.orderNumber ? j : I))),
            d.paymentStatus === "confirmed")
          ) {
            const $ = z(t.orderNumber);
            return (
              u.paymentEmailSent
                ? b.success(`${$} 已确认，对账邮件已发给 ${t.billing.email}`)
                : b.error(
                    `${$} 付款已确认，对账邮件没发出。${u.paymentEmailError ? ` ${u.paymentEmailError}` : ""}`,
                  ),
              !0
            );
          }
          return (b.success(r), !0);
        } catch (u) {
          return (await ee(), b.error(W(u, "无法更新订单。")), !1);
        } finally {
          T(null);
        }
      },
      ws = async (t) => {
        const d = V;
        if (!d) return;
        const r = z(d.orderNumber);
        (await ye(
          d,
          { paymentStatus: "confirmed", ...(t ? { paymentEmailHtml: t } : {}) },
          `${r} 付款状态已改为已确认`,
        )) && ie(null);
      },
      ks = async (t, d) => {
        Q(t.orderNumber);
        try {
          const r = (await $e(t.orderNumber, { adminNote: d })).order;
          (S((u) => u.map((j) => (j.orderNumber === r.orderNumber ? r : j))),
            b.success(`${z(t.orderNumber)} 备注已保存。`));
        } catch (r) {
          (await ee(), b.error(W(r, "无法保存备注。")));
        } finally {
          Q(null);
        }
      },
      ve = (t) =>
        D[t.orderNumber] ?? {
          tracking: t.trackingNumber ?? "",
          carrier: t.carrier ?? "Australia Post",
        },
      $s = async (t) => {
        const d = ve(t),
          r = d.tracking.trim(),
          u = d.carrier.trim() || "Australia Post";
        if (!r) {
          b.error("请先填写运单号。");
          return;
        }
        Ie(t.orderNumber);
        try {
          const j = (await $e(t.orderNumber, { trackingNumber: r, carrier: u }))
            .order;
          (S(($) => $.map((I) => (I.orderNumber === j.orderNumber ? j : I))),
            M(($) => ({
              ...$,
              [t.orderNumber]: {
                tracking: j.trackingNumber ?? r,
                carrier: j.carrier ?? u,
              },
            })),
            b.success(`${z(t.orderNumber)} 运单号已保存。`));
        } catch (j) {
          (await ee(), b.error(W(j, "无法保存运单号。")));
        } finally {
          Ie(null);
        }
      },
      Ss = async (t, d) => {
        const r = ve(t),
          u = r.tracking.trim(),
          j = r.carrier.trim() || "Australia Post";
        if (!u) {
          b.error("请先填写运单号。");
          return;
        }
        Re(t.orderNumber);
        try {
          const $ = await Ws(t.orderNumber, u, j, d);
          (S((I) => I.map((se) => (se.orderNumber === $.orderNumber ? $ : se))),
            M((I) => ({
              ...I,
              [t.orderNumber]: {
                tracking: $.trackingNumber ?? u,
                carrier: $.carrier ?? j,
              },
            })),
            b.success(`已把发货邮件发给 ${t.billing.email}。`));
        } catch ($) {
          if ($ instanceof Ys && $.order) {
            const I = $.order;
            S((se) =>
              se.map((re) => (re.orderNumber === I.orderNumber ? I : re)),
            );
          }
          b.error(W($, "发货邮件没有发出。运单号已尽量保存，可再试一次。"));
        } finally {
          Re(null);
        }
      },
      Cs = async () => {
        if (K.length === 0) {
          b.error("请先勾选要导出的订单，或使用全选。");
          return;
        }
        try {
          (await as(K), b.success(`已导出 ${K.length} 笔订单。`));
        } catch (t) {
          b.error(W(t, "无法导出 Excel 文件。"));
        }
      },
      As = async (t, d, r) => {
        if (r.length === 0) {
          b.error(`${d}没有可导出的订单。`);
          return;
        }
        try {
          const u =
            t === "unknown"
              ? "vape-orders-unknown.xlsx"
              : `vape-orders-${t}.xlsx`;
          (await as(r, u), b.success(`已导出 ${d} ${r.length} 笔订单。`));
        } catch (u) {
          b.error(W(u, "无法导出 Excel 文件。"));
        }
      };
    return p
      ? e.jsxs("div", {
          className: "min-h-screen bg-background",
          children: [
            e.jsx(Ke, {
              title: "Orders Admin | Alibarbar Australia",
              description: "Private Alibarbar Australia order management.",
              path: "/orders2589",
              noindex: !0,
            }),
            e.jsx(We, {}),
            e.jsxs("main", {
              className:
                "container min-w-0 pt-[calc(4.5rem+env(safe-area-inset-top))] sm:pt-[calc(6rem+env(safe-area-inset-top))] pb-28 sm:pb-20 max-w-7xl",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-col gap-4 mb-4 sm:mb-6 lg:flex-row lg:items-center lg:justify-between",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className:
                            "text-xs uppercase tracking-[0.25em] text-primary mb-1",
                          children: "后台管理",
                        }),
                        e.jsx("h1", {
                          className:
                            "text-2xl sm:text-3xl font-semibold text-foreground",
                          children:
                            l === "orders"
                              ? "订单管理"
                              : l === "reviews"
                                ? "评论审核"
                                : l === "leads"
                                  ? "结账线索"
                                  : l === "stats"
                                    ? "邮件统计"
                                    : "用户管理",
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground mt-1",
                          children:
                            l === "orders"
                              ? "云端备份"
                              : l === "reviews"
                                ? "审核并管理商品评论"
                                : l === "leads"
                                  ? "结账页填过邮箱和资料的顾客"
                                  : l === "stats"
                                    ? "发出的邮件、折扣码使用和带来的订单"
                                    : "注册用户列表与群发邮件",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end",
                      children: [
                        l === "orders"
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsxs(v, {
                                  type: "button",
                                  variant: "outline",
                                  className: "w-full sm:w-auto",
                                  onClick: Cs,
                                  disabled: K.length === 0,
                                  children: [
                                    e.jsx(pe, { className: "h-4 w-4 mr-2" }),
                                    K.length > 0
                                      ? `导出 Excel（${K.length}）`
                                      : "导出 Excel",
                                  ],
                                }),
                                e.jsxs(v, {
                                  type: "button",
                                  variant: "outline",
                                  className: "w-full sm:w-auto",
                                  onClick: () => void ee(),
                                  disabled: U,
                                  children: [
                                    e.jsx(je, {
                                      className: `h-4 w-4 mr-2 ${U ? "animate-spin" : ""}`,
                                    }),
                                    "刷新",
                                  ],
                                }),
                              ],
                            })
                          : null,
                        e.jsx(v, {
                          type: "button",
                          variant: "outline",
                          className: "w-full sm:w-auto",
                          onClick: vs,
                          children: "退出登录",
                        }),
                        e.jsx(v, {
                          asChild: !0,
                          className: "w-full sm:w-auto",
                          children: e.jsx(Ge, {
                            to: "/",
                            children: "返回商店",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex flex-wrap gap-2 mb-6",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => y("orders"),
                      className: `rounded-full border px-4 py-2 text-sm transition-colors ${l === "orders" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border text-muted-foreground hover:text-foreground"}`,
                      children: "订单",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => y("users"),
                      className: `rounded-full border px-4 py-2 text-sm transition-colors ${l === "users" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border text-muted-foreground hover:text-foreground"}`,
                      children: "用户管理",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => y("leads"),
                      className: `rounded-full border px-4 py-2 text-sm transition-colors ${l === "leads" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border text-muted-foreground hover:text-foreground"}`,
                      children: "结账线索",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => y("stats"),
                      className: `rounded-full border px-4 py-2 text-sm transition-colors ${l === "stats" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border text-muted-foreground hover:text-foreground"}`,
                      children: "邮件统计",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => y("reviews"),
                      className: `rounded-full border px-4 py-2 text-sm transition-colors ${l === "reviews" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border text-muted-foreground hover:text-foreground"}`,
                      children: "评论审核",
                    }),
                  ],
                }),
                l === "reviews"
                  ? e.jsx(Os, {})
                  : l === "users"
                    ? e.jsx(tt, {})
                    : l === "leads"
                      ? e.jsx(it, {})
                      : l === "stats"
                        ? e.jsx(ut, {})
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs("div", {
                                className: "mb-4 space-y-3",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex flex-wrap items-center gap-2",
                                    children: [
                                      e.jsxs("button", {
                                        type: "button",
                                        "aria-label": `全部订单，${O.length} 笔`,
                                        onClick: () => {
                                          (gs(), B("all"));
                                        },
                                        className: `inline-flex shrink-0 items-center rounded-full border px-3 py-2 text-sm transition-colors ${_e && w === "all" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
                                        children: [
                                          "全部",
                                          e.jsx("span", {
                                            className:
                                              "ml-1.5 tabular-nums text-xs",
                                            children: O.length,
                                          }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: _e
                                          ? "正在显示全部订单，改状态不会把单子移出这里"
                                          : `状态筛选中，显示 ${H.length} / ${O.length} 笔 · 点「全部」可看回全部`,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "shrink-0 self-center text-xs text-muted-foreground",
                                            children: "付款",
                                          }),
                                          ht.map((t) => {
                                            const d =
                                                t.id === "all"
                                                  ? O.filter((u) => de(u, E))
                                                      .length
                                                  : O.filter(
                                                      (u) =>
                                                        oe(u, t.id) && de(u, E),
                                                    ).length,
                                              r = o === t.id;
                                            return e.jsxs(
                                              "button",
                                              {
                                                type: "button",
                                                "aria-label": `${t.label}，${d} 笔`,
                                                onClick: () => f(t.id),
                                                className: `inline-flex shrink-0 items-center rounded-full border px-3 py-2 text-sm transition-colors ${r ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
                                                children: [
                                                  t.label.replace(
                                                    /^全部付款$/,
                                                    "全部",
                                                  ),
                                                  e.jsx("span", {
                                                    className:
                                                      "ml-1.5 tabular-nums text-xs",
                                                    children: d,
                                                  }),
                                                ],
                                              },
                                              t.id,
                                            );
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "shrink-0 self-center text-xs text-muted-foreground",
                                            children: "发货",
                                          }),
                                          ft.map((t) => {
                                            const d =
                                                t.id === "all"
                                                  ? O.filter((u) => oe(u, o))
                                                      .length
                                                  : O.filter(
                                                      (u) =>
                                                        de(u, t.id) && oe(u, o),
                                                    ).length,
                                              r = E === t.id;
                                            return e.jsxs(
                                              "button",
                                              {
                                                type: "button",
                                                "aria-label": `${t.label}，${d} 笔`,
                                                onClick: () => P(t.id),
                                                className: `inline-flex shrink-0 items-center rounded-full border px-3 py-2 text-sm transition-colors ${r ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
                                                children: [
                                                  t.label.replace(
                                                    /^全部发货$/,
                                                    "全部",
                                                  ),
                                                  e.jsx("span", {
                                                    className:
                                                      "ml-1.5 tabular-nums text-xs",
                                                    children: d,
                                                  }),
                                                ],
                                              },
                                              t.id,
                                            );
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "shrink-0 self-center text-xs text-muted-foreground",
                                            children: "月份",
                                          }),
                                          e.jsxs("button", {
                                            type: "button",
                                            "aria-label": `全部月份，${O.length} 笔`,
                                            onClick: () => B("all"),
                                            className: `inline-flex shrink-0 items-center rounded-full border px-3 py-2 text-sm transition-colors ${w === "all" ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
                                            children: [
                                              "全部月份",
                                              e.jsx("span", {
                                                className:
                                                  "ml-1.5 tabular-nums text-xs",
                                                children: O.length,
                                              }),
                                            ],
                                          }),
                                          hs.map((t) => {
                                            const d = O.filter(
                                                (j) => ce(j) === t,
                                              ).length,
                                              r = w === t,
                                              u = us(t);
                                            return e.jsxs(
                                              "button",
                                              {
                                                type: "button",
                                                "aria-label": `${u}，${d} 笔`,
                                                onClick: () => B(t),
                                                className: `inline-flex shrink-0 items-center rounded-full border px-3 py-2 text-sm transition-colors ${r ? "border-primary bg-primary/10 text-primary font-semibold" : "border-border bg-card text-muted-foreground hover:text-foreground"}`,
                                                children: [
                                                  u,
                                                  e.jsx("span", {
                                                    className:
                                                      "ml-1.5 tabular-nums text-xs",
                                                    children: d,
                                                  }),
                                                ],
                                              },
                                              t,
                                            );
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "rounded-xl border border-border bg-card p-3 sm:p-4 mb-4 sm:mb-6 space-y-3",
                                children: [
                                  e.jsx(ne, {
                                    value: C,
                                    onChange: (t) => A(t.target.value),
                                    placeholder:
                                      "搜索单号、姓名、邮箱、电话或备注",
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex flex-wrap items-center justify-between gap-3",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          e.jsx(ae, {
                                            id: "select-all-orders",
                                            checked: Ue
                                              ? !0
                                              : js
                                                ? "indeterminate"
                                                : !1,
                                            onCheckedChange: (t) =>
                                              ys(t === !0),
                                            disabled: H.length === 0,
                                            "aria-label": "全选当前列表",
                                          }),
                                          e.jsx(X, {
                                            htmlFor: "select-all-orders",
                                            className:
                                              "text-sm font-normal cursor-pointer",
                                            children: "全选当前列表",
                                          }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children:
                                          K.length > 0
                                            ? `已选 ${K.length} 笔，导出只包含勾选的订单`
                                            : "勾选订单后导出；可单选，也可全选当前列表",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              U && c.length === 0
                                ? e.jsxs("div", {
                                    className:
                                      "rounded-xl border border-border bg-card p-8 text-center text-muted-foreground",
                                    children: [
                                      e.jsx(Y, {
                                        className:
                                          "h-5 w-5 animate-spin inline-block mr-2",
                                      }),
                                      "加载订单中…",
                                    ],
                                  })
                                : H.length === 0
                                  ? e.jsx("div", {
                                      className:
                                        "rounded-xl border border-border bg-card p-8 text-center",
                                      children: e.jsx("p", {
                                        className: "text-muted-foreground",
                                        children:
                                          O.length === 0
                                            ? "暂无已提交付款截图的订单。"
                                            : "没有符合当前筛选的订单。",
                                      }),
                                    })
                                  : e.jsx("div", {
                                      className: "space-y-6",
                                      children: fs.map((t) => {
                                        const d = L.has(t.monthKey);
                                        return e.jsxs(
                                          "section",
                                          {
                                            className: "space-y-3 sm:space-y-4",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "sticky top-[calc(4.25rem+env(safe-area-inset-top))] z-10 -mx-1 flex items-center justify-between gap-3 rounded-lg border border-border/80 bg-background/95 px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:mx-0",
                                                children: [
                                                  e.jsx("h2", {
                                                    className:
                                                      "text-sm font-semibold text-foreground sm:text-base",
                                                    children: t.label,
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "flex shrink-0 items-center gap-2",
                                                    children: [
                                                      e.jsxs("span", {
                                                        className:
                                                          "text-xs tabular-nums text-muted-foreground",
                                                        children: [
                                                          t.orders.length,
                                                          " 笔",
                                                        ],
                                                      }),
                                                      e.jsxs("button", {
                                                        type: "button",
                                                        "aria-label": `批量导出 ${t.label}`,
                                                        onClick: () =>
                                                          void As(
                                                            t.monthKey,
                                                            t.label,
                                                            t.orders,
                                                          ),
                                                        className:
                                                          "inline-flex h-8 items-center gap-1 rounded-md border border-border px-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                                                        children: [
                                                          e.jsx(pe, {
                                                            className:
                                                              "h-3.5 w-3.5",
                                                          }),
                                                          "批量导出",
                                                        ],
                                                      }),
                                                      e.jsx("button", {
                                                        type: "button",
                                                        "aria-expanded": !d,
                                                        "aria-label": d
                                                          ? `展开 ${t.label}`
                                                          : `折叠 ${t.label}`,
                                                        onClick: () =>
                                                          ze(t.monthKey),
                                                        className:
                                                          "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                                                        children: d
                                                          ? e.jsx(Qs, {
                                                              className:
                                                                "h-4 w-4",
                                                            })
                                                          : e.jsx(Zs, {
                                                              className:
                                                                "h-4 w-4",
                                                            }),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              d
                                                ? null
                                                : t.orders.map((r, u) => {
                                                    var qe, Ve;
                                                    const j = z(r.orderNumber),
                                                      $ =
                                                        u ===
                                                        t.orders.length - 1,
                                                      I = Le(r),
                                                      se = Oe(r),
                                                      re = k === r.orderNumber;
                                                    return e.jsxs(
                                                      "div",
                                                      {
                                                        className: "space-y-3",
                                                        children: [
                                                          e.jsxs("article", {
                                                            className: `min-w-0 rounded-2xl border p-3 sm:p-5 transition-colors ${te.has(r.orderNumber) ? "ring-2 ring-primary/40" : ""} ${vt(r)}`,
                                                            children: [
                                                              r.notifyEmailError
                                                                ? e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "mb-4 flex items-start gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-800 dark:text-amber-200",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            Js,
                                                                            {
                                                                              className:
                                                                                "h-4 w-4 shrink-0 mt-0.5",
                                                                            },
                                                                          ),
                                                                          e.jsxs(
                                                                            "div",
                                                                            {
                                                                              children:
                                                                                [
                                                                                  e.jsx(
                                                                                    "p",
                                                                                    {
                                                                                      className:
                                                                                        "font-medium",
                                                                                      children:
                                                                                        "订单通知邮件发送失败",
                                                                                    },
                                                                                  ),
                                                                                  e.jsx(
                                                                                    "p",
                                                                                    {
                                                                                      className:
                                                                                        "mt-0.5 text-amber-700/90 dark:text-amber-200/80 font-normal break-all",
                                                                                      children:
                                                                                        r.notifyEmailError,
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  )
                                                                : null,
                                                              e.jsxs("div", {
                                                                className:
                                                                  "flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4",
                                                                children: [
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "flex items-start gap-3 min-w-0",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            ae,
                                                                            {
                                                                              checked:
                                                                                te.has(
                                                                                  r.orderNumber,
                                                                                ),
                                                                              onCheckedChange:
                                                                                (
                                                                                  x,
                                                                                ) =>
                                                                                  Ns(
                                                                                    r.orderNumber,
                                                                                    x ===
                                                                                      !0,
                                                                                  ),
                                                                              "aria-label": `选择 ${j}`,
                                                                              className:
                                                                                "mt-1.5",
                                                                            },
                                                                          ),
                                                                          e.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "min-w-0",
                                                                              children:
                                                                                [
                                                                                  e.jsxs(
                                                                                    "div",
                                                                                    {
                                                                                      className:
                                                                                        "flex flex-wrap items-baseline gap-x-3 gap-y-1",
                                                                                      children:
                                                                                        [
                                                                                          e.jsx(
                                                                                            "p",
                                                                                            {
                                                                                              className:
                                                                                                "text-lg font-semibold text-foreground",
                                                                                              children:
                                                                                                j,
                                                                                            },
                                                                                          ),
                                                                                          e.jsx(
                                                                                            "p",
                                                                                            {
                                                                                              className:
                                                                                                "text-lg font-semibold tabular-nums",
                                                                                              children:
                                                                                                F(
                                                                                                  r.total,
                                                                                                ),
                                                                                            },
                                                                                          ),
                                                                                          e.jsx(
                                                                                            Ts,
                                                                                            {
                                                                                              order:
                                                                                                r,
                                                                                            },
                                                                                          ),
                                                                                          r.noReceipt
                                                                                            ? e.jsx(
                                                                                                "span",
                                                                                                {
                                                                                                  "data-no-receipt-tag":
                                                                                                    !0,
                                                                                                  className:
                                                                                                    "inline-flex items-center rounded-full border border-red-400/60 bg-red-500/10 px-2 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300",
                                                                                                  children:
                                                                                                    Is,
                                                                                                },
                                                                                              )
                                                                                            : null,
                                                                                        ],
                                                                                    },
                                                                                  ),
                                                                                  e.jsxs(
                                                                                    "p",
                                                                                    {
                                                                                      className:
                                                                                        "text-sm text-muted-foreground break-words",
                                                                                      children:
                                                                                        [
                                                                                          Rs(
                                                                                            r,
                                                                                          ),
                                                                                          " · ",
                                                                                          r
                                                                                            .billing
                                                                                            .firstName,
                                                                                          " ",
                                                                                          r
                                                                                            .billing
                                                                                            .lastName,
                                                                                        ],
                                                                                    },
                                                                                  ),
                                                                                  e.jsxs(
                                                                                    "p",
                                                                                    {
                                                                                      className:
                                                                                        "text-sm text-muted-foreground break-all",
                                                                                      children:
                                                                                        [
                                                                                          r
                                                                                            .billing
                                                                                            .email,
                                                                                          r
                                                                                            .billing
                                                                                            .phone
                                                                                            ? ` · ${r.billing.phone}`
                                                                                            : "",
                                                                                        ],
                                                                                    },
                                                                                  ),
                                                                                  r.attribution &&
                                                                                  (r
                                                                                    .attribution
                                                                                    .label ||
                                                                                    ((qe =
                                                                                      r
                                                                                        .attribution
                                                                                        .badges) !=
                                                                                      null &&
                                                                                      qe.length) ||
                                                                                    r
                                                                                      .attribution
                                                                                      .trafficSource)
                                                                                    ? e.jsxs(
                                                                                        "div",
                                                                                        {
                                                                                          className:
                                                                                            "mt-2 flex flex-wrap gap-1.5",
                                                                                          children:
                                                                                            [
                                                                                              r
                                                                                                .attribution
                                                                                                .label
                                                                                                ? e.jsxs(
                                                                                                    "span",
                                                                                                    {
                                                                                                      className:
                                                                                                        "inline-flex items-center rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-200",
                                                                                                      children:
                                                                                                        [
                                                                                                          r
                                                                                                            .attribution
                                                                                                            .label,
                                                                                                          ue(
                                                                                                            r.attribution,
                                                                                                          )
                                                                                                            ? ` · ${ue(r.attribution)}`
                                                                                                            : "",
                                                                                                        ],
                                                                                                    },
                                                                                                  )
                                                                                                : null,
                                                                                              (
                                                                                                r
                                                                                                  .attribution
                                                                                                  .badges ??
                                                                                                []
                                                                                              ).map(
                                                                                                (
                                                                                                  x,
                                                                                                ) =>
                                                                                                  e.jsx(
                                                                                                    "span",
                                                                                                    {
                                                                                                      className:
                                                                                                        "inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-2 py-0.5 text-xs font-medium text-sky-900 dark:text-sky-200",
                                                                                                      children:
                                                                                                        x,
                                                                                                    },
                                                                                                    x,
                                                                                                  ),
                                                                                              ),
                                                                                              !r
                                                                                                .attribution
                                                                                                .label &&
                                                                                              r
                                                                                                .attribution
                                                                                                .trafficSource
                                                                                                ? e.jsxs(
                                                                                                    "span",
                                                                                                    {
                                                                                                      className:
                                                                                                        "inline-flex items-center rounded-full border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground",
                                                                                                      children:
                                                                                                        [
                                                                                                          "来源 ",
                                                                                                          r
                                                                                                            .attribution
                                                                                                            .trafficSource,
                                                                                                        ],
                                                                                                    },
                                                                                                  )
                                                                                                : null,
                                                                                            ],
                                                                                        },
                                                                                      )
                                                                                    : null,
                                                                                  (Ve =
                                                                                    r.notes) !=
                                                                                    null &&
                                                                                  Ve.trim()
                                                                                    ? e.jsxs(
                                                                                        "div",
                                                                                        {
                                                                                          className:
                                                                                            "mt-2 max-w-xl rounded-lg border border-amber-300 bg-amber-50 px-3 py-2",
                                                                                          children:
                                                                                            [
                                                                                              e.jsxs(
                                                                                                "div",
                                                                                                {
                                                                                                  className:
                                                                                                    "mb-1 flex items-center justify-between gap-2",
                                                                                                  children:
                                                                                                    [
                                                                                                      e.jsx(
                                                                                                        "p",
                                                                                                        {
                                                                                                          className:
                                                                                                            "text-sm font-semibold text-amber-950",
                                                                                                          children:
                                                                                                            "客户备注",
                                                                                                        },
                                                                                                      ),
                                                                                                      e.jsxs(
                                                                                                        "button",
                                                                                                        {
                                                                                                          type: "button",
                                                                                                          "aria-label": `复制客户备注 ${j}`,
                                                                                                          onClick:
                                                                                                            () => {
                                                                                                              var x;
                                                                                                              return void Ae(
                                                                                                                ((x =
                                                                                                                  r.notes) ==
                                                                                                                null
                                                                                                                  ? void 0
                                                                                                                  : x.trim()) ??
                                                                                                                  "",
                                                                                                                "客户备注",
                                                                                                              );
                                                                                                            },
                                                                                                          className:
                                                                                                            "inline-flex h-7 items-center gap-1 rounded-md border border-amber-400 bg-white px-2 text-xs font-medium text-amber-950 hover:bg-amber-100",
                                                                                                          children:
                                                                                                            [
                                                                                                              e.jsx(
                                                                                                                Te,
                                                                                                                {
                                                                                                                  className:
                                                                                                                    "h-3 w-3",
                                                                                                                },
                                                                                                              ),
                                                                                                              "复制",
                                                                                                            ],
                                                                                                        },
                                                                                                      ),
                                                                                                    ],
                                                                                                },
                                                                                              ),
                                                                                              e.jsx(
                                                                                                "p",
                                                                                                {
                                                                                                  className:
                                                                                                    "text-base font-medium whitespace-pre-wrap break-words leading-relaxed text-amber-950",
                                                                                                  children:
                                                                                                    r.notes.trim(),
                                                                                                },
                                                                                              ),
                                                                                            ],
                                                                                        },
                                                                                      )
                                                                                    : null,
                                                                                ],
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "flex w-full flex-col gap-2 xl:w-[320px] xl:shrink-0",
                                                                      children:
                                                                        [
                                                                          e.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-1.5",
                                                                              children:
                                                                                [
                                                                                  e.jsx(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "text-xs text-muted-foreground",
                                                                                      children:
                                                                                        "付款",
                                                                                    },
                                                                                  ),
                                                                                  e.jsx(
                                                                                    "div",
                                                                                    {
                                                                                      className:
                                                                                        "grid grid-cols-2 gap-1",
                                                                                      children:
                                                                                        bt.map(
                                                                                          (
                                                                                            x,
                                                                                          ) => {
                                                                                            const _ =
                                                                                              I ===
                                                                                              x;
                                                                                            return e.jsxs(
                                                                                              "button",
                                                                                              {
                                                                                                type: "button",
                                                                                                disabled:
                                                                                                  re,
                                                                                                "aria-pressed":
                                                                                                  _,
                                                                                                "aria-label": `${we[x]} ${j}`,
                                                                                                onClick:
                                                                                                  () => {
                                                                                                    if (
                                                                                                      !_
                                                                                                    ) {
                                                                                                      if (
                                                                                                        x ===
                                                                                                        "confirmed"
                                                                                                      ) {
                                                                                                        ie(
                                                                                                          r,
                                                                                                        );
                                                                                                        return;
                                                                                                      }
                                                                                                      ye(
                                                                                                        r,
                                                                                                        {
                                                                                                          paymentStatus:
                                                                                                            x,
                                                                                                        },
                                                                                                        `${j} 付款状态已改为${we[x]}`,
                                                                                                      );
                                                                                                    }
                                                                                                  },
                                                                                                className: `inline-flex min-h-9 items-center justify-center gap-1 rounded-full border px-1.5 py-1 text-xs font-medium transition-colors disabled:opacity-60 ${is(_, wt[x])}`,
                                                                                                children:
                                                                                                  [
                                                                                                    _
                                                                                                      ? e.jsx(
                                                                                                          Je,
                                                                                                          {
                                                                                                            className:
                                                                                                              "h-3 w-3",
                                                                                                          },
                                                                                                        )
                                                                                                      : null,
                                                                                                    we[
                                                                                                      x
                                                                                                    ],
                                                                                                  ],
                                                                                              },
                                                                                              x,
                                                                                            );
                                                                                          },
                                                                                        ),
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                            },
                                                                          ),
                                                                          e.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-1.5",
                                                                              children:
                                                                                [
                                                                                  e.jsx(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "text-xs text-muted-foreground",
                                                                                      children:
                                                                                        "发货",
                                                                                    },
                                                                                  ),
                                                                                  e.jsx(
                                                                                    "div",
                                                                                    {
                                                                                      className:
                                                                                        "grid grid-cols-2 gap-1",
                                                                                      children:
                                                                                        pt.map(
                                                                                          (
                                                                                            x,
                                                                                          ) => {
                                                                                            const _ =
                                                                                              se ===
                                                                                              x;
                                                                                            return e.jsxs(
                                                                                              "button",
                                                                                              {
                                                                                                type: "button",
                                                                                                disabled:
                                                                                                  re,
                                                                                                "aria-pressed":
                                                                                                  _,
                                                                                                "aria-label": `${ke[x]} ${j}`,
                                                                                                onClick:
                                                                                                  () => {
                                                                                                    _ ||
                                                                                                      ye(
                                                                                                        r,
                                                                                                        {
                                                                                                          fulfillmentStatus:
                                                                                                            x,
                                                                                                        },
                                                                                                        `${j} 发货状态已改为${ke[x]}`,
                                                                                                      );
                                                                                                  },
                                                                                                className: `inline-flex min-h-9 items-center justify-center gap-1 rounded-full border px-1.5 py-1 text-xs font-medium transition-colors disabled:opacity-60 ${is(_, x === "unshipped" ? "orange" : "emerald")}`,
                                                                                                children:
                                                                                                  [
                                                                                                    _
                                                                                                      ? e.jsx(
                                                                                                          Je,
                                                                                                          {
                                                                                                            className:
                                                                                                              "h-3 w-3",
                                                                                                          },
                                                                                                        )
                                                                                                      : null,
                                                                                                    ke[
                                                                                                      x
                                                                                                    ],
                                                                                                  ],
                                                                                              },
                                                                                              x,
                                                                                            );
                                                                                          },
                                                                                        ),
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                ],
                                                              }),
                                                              e.jsxs("div", {
                                                                className:
                                                                  "mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3",
                                                                children: [
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "min-w-0 rounded-xl border border-border bg-background/40 p-3 sm:p-4",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            os,
                                                                            {
                                                                              title:
                                                                                "商品明细",
                                                                              copyLabel: `复制商品明细 ${j}`,
                                                                              onCopy:
                                                                                () =>
                                                                                  void Ae(
                                                                                    jt(
                                                                                      r,
                                                                                    ),
                                                                                    "商品明细",
                                                                                  ),
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            "ul",
                                                                            {
                                                                              className:
                                                                                "space-y-1.5 text-sm",
                                                                              children:
                                                                                r.lines.map(
                                                                                  (
                                                                                    x,
                                                                                  ) =>
                                                                                    e.jsxs(
                                                                                      "li",
                                                                                      {
                                                                                        className:
                                                                                          "flex items-start justify-between gap-3",
                                                                                        children:
                                                                                          [
                                                                                            e.jsxs(
                                                                                              "span",
                                                                                              {
                                                                                                className:
                                                                                                  "min-w-0 break-words",
                                                                                                children:
                                                                                                  [
                                                                                                    ms(
                                                                                                      x.name,
                                                                                                    ),
                                                                                                    " ",
                                                                                                    e.jsxs(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          "text-muted-foreground",
                                                                                                        children:
                                                                                                          [
                                                                                                            "× ",
                                                                                                            x.qty,
                                                                                                          ],
                                                                                                      },
                                                                                                    ),
                                                                                                  ],
                                                                                              },
                                                                                            ),
                                                                                            e.jsx(
                                                                                              "span",
                                                                                              {
                                                                                                className:
                                                                                                  "shrink-0 tabular-nums",
                                                                                                children:
                                                                                                  F(
                                                                                                    x.price *
                                                                                                      x.qty,
                                                                                                  ),
                                                                                              },
                                                                                            ),
                                                                                          ],
                                                                                      },
                                                                                      `${x.slug}-${x.name}`,
                                                                                    ),
                                                                                ),
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            Fs,
                                                                            {
                                                                              order:
                                                                                r,
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "min-w-0 rounded-xl border border-border bg-background/40 p-3 sm:p-4",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            os,
                                                                            {
                                                                              title:
                                                                                "收货地址",
                                                                              copyLabel: `复制收货地址 ${j}`,
                                                                              onCopy:
                                                                                () =>
                                                                                  void Ae(
                                                                                    ls(
                                                                                      r,
                                                                                    )
                                                                                      .join(`
`),
                                                                                    "收货地址",
                                                                                  ),
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "text-sm space-y-1 leading-relaxed",
                                                                              children:
                                                                                ls(
                                                                                  r,
                                                                                ).map(
                                                                                  (
                                                                                    x,
                                                                                  ) =>
                                                                                    e.jsx(
                                                                                      "p",
                                                                                      {
                                                                                        children:
                                                                                          x,
                                                                                      },
                                                                                      x,
                                                                                    ),
                                                                                ),
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                  e.jsx("div", {
                                                                    className:
                                                                      "min-w-0 rounded-xl border border-border bg-background/40 p-3 sm:p-4 md:col-span-2 xl:col-span-1",
                                                                    children:
                                                                      e.jsx(
                                                                        $t,
                                                                        {
                                                                          order:
                                                                            r,
                                                                        },
                                                                      ),
                                                                  }),
                                                                ],
                                                              }),
                                                              e.jsxs("div", {
                                                                className:
                                                                  "mt-3 grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
                                                                children: [
                                                                  e.jsx(kt, {
                                                                    order: r,
                                                                    saving:
                                                                      q ===
                                                                      r.orderNumber,
                                                                    onSave: (
                                                                      x,
                                                                    ) =>
                                                                      void ks(
                                                                        r,
                                                                        x,
                                                                      ),
                                                                  }),
                                                                  e.jsx(Ps, {
                                                                    order: r,
                                                                    draft:
                                                                      ve(r),
                                                                    shipping:
                                                                      ps ===
                                                                      r.orderNumber,
                                                                    savingTracking:
                                                                      bs ===
                                                                      r.orderNumber,
                                                                    emailLogCount:
                                                                      Ce(r)
                                                                        .length,
                                                                    onDraftChange:
                                                                      (x) =>
                                                                        M(
                                                                          (
                                                                            _,
                                                                          ) => ({
                                                                            ..._,
                                                                            [r.orderNumber]:
                                                                              x,
                                                                          }),
                                                                        ),
                                                                    onSaveTracking:
                                                                      () =>
                                                                        void $s(
                                                                          r,
                                                                        ),
                                                                    onSendEmail:
                                                                      (x) =>
                                                                        void Ss(
                                                                          r,
                                                                          x,
                                                                        ),
                                                                    onOpenEmailLog:
                                                                      () =>
                                                                        Pe(
                                                                          r.orderNumber,
                                                                        ),
                                                                  }),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                          $
                                                            ? e.jsx("div", {
                                                                className:
                                                                  "flex justify-center",
                                                                children:
                                                                  e.jsxs(
                                                                    "button",
                                                                    {
                                                                      type: "button",
                                                                      "aria-label": `收起 ${t.label}`,
                                                                      onClick:
                                                                        () =>
                                                                          ze(
                                                                            t.monthKey,
                                                                          ),
                                                                      className:
                                                                        "inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            Xs,
                                                                            {
                                                                              className:
                                                                                "h-4 w-4",
                                                                            },
                                                                          ),
                                                                          "收起",
                                                                          t.label,
                                                                        ],
                                                                    },
                                                                  ),
                                                              })
                                                            : null,
                                                        ],
                                                      },
                                                      r.orderNumber,
                                                    );
                                                  }),
                                            ],
                                          },
                                          t.monthKey,
                                        );
                                      }),
                                    }),
                            ],
                          }),
                e.jsx(xe, {
                  open: !!V,
                  onOpenChange: (t) => {
                    !t &&
                      k !== (V == null ? void 0 : V.orderNumber) &&
                      ie(null);
                  },
                  children: e.jsx(be, {
                    className:
                      "w-[calc(100vw-1rem)] max-w-3xl max-h-[90dvh] overflow-y-auto p-4 sm:p-6",
                    children: V
                      ? e.jsx(Nt, {
                          order: V,
                          sending: k === V.orderNumber,
                          onCancel: () => ie(null),
                          onConfirm: (t) => void ws(t),
                        })
                      : null,
                  }),
                }),
                e.jsx(xe, {
                  open: !!Z,
                  onOpenChange: (t) => {
                    t || Pe(null);
                  },
                  children: e.jsxs(be, {
                    className:
                      "w-[calc(100vw-1rem)] max-w-3xl max-h-[88dvh] overflow-y-auto p-4 sm:p-6",
                    children: [
                      e.jsxs(he, {
                        children: [
                          e.jsxs(fe, {
                            children: [
                              "发信记录",
                              Z ? ` · ${z(Z.orderNumber)}` : "",
                            ],
                          }),
                          e.jsx(ge, {
                            children:
                              "查看每次发货邮件的结果、收件信息和实际邮件模板。",
                          }),
                        ],
                      }),
                      Z && Ce(Z).length > 0
                        ? e.jsx("div", {
                            className: "space-y-4",
                            children: Ce(Z).map((t) =>
                              e.jsxs(
                                "section",
                                {
                                  className:
                                    "rounded-xl border border-border p-4 space-y-3",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-wrap items-center justify-between gap-2",
                                      children: [
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("p", {
                                              className: "font-medium",
                                              children: t.subject,
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-sm text-muted-foreground",
                                              children: [
                                                xs(t.attemptedAt),
                                                " · 发给 ",
                                                t.to,
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx("span", {
                                          className: `rounded-full px-2.5 py-1 text-xs font-medium border ${t.status === "sent" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300"}`,
                                          children:
                                            t.status === "sent"
                                              ? "发送成功"
                                              : "发送失败",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "grid sm:grid-cols-2 gap-2 text-sm",
                                      children: [
                                        e.jsxs("p", {
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "text-muted-foreground",
                                              children: "承运商：",
                                            }),
                                            t.carrier,
                                          ],
                                        }),
                                        e.jsxs("p", {
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "text-muted-foreground",
                                              children: "运单号：",
                                            }),
                                            t.trackingNumber,
                                          ],
                                        }),
                                      ],
                                    }),
                                    t.error
                                      ? e.jsx("p", {
                                          className:
                                            "rounded-md bg-amber-500/10 px-3 py-2 text-sm text-amber-800 dark:text-amber-200 break-all",
                                          children: t.error,
                                        })
                                      : null,
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-xs uppercase tracking-wide text-muted-foreground mb-2",
                                          children: "邮件模板",
                                        }),
                                        e.jsx("pre", {
                                          className:
                                            "whitespace-pre-wrap break-words rounded-lg border border-border bg-muted/40 p-4 text-sm font-sans leading-relaxed",
                                          children: yt(Z, t),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                            ),
                          })
                        : e.jsx("p", {
                            className: "py-8 text-center text-muted-foreground",
                            children: "还没有发货邮件记录。",
                          }),
                    ],
                  }),
                }),
              ],
            }),
            e.jsx("div", {
              className: "hidden lg:block",
              children: e.jsx(Ye, {}),
            }),
          ],
        })
      : e.jsxs("div", {
          className: "min-h-screen bg-background",
          children: [
            e.jsx(Ke, {
              title: "Orders Admin | Alibarbar Australia",
              description: "Private Alibarbar Australia order management.",
              path: "/orders2589",
              noindex: !0,
            }),
            e.jsx(We, {}),
            e.jsx("main", {
              className:
                "container pt-[calc(6rem+env(safe-area-inset-top))] pb-20 max-w-md",
              children: e.jsxs("div", {
                className:
                  "rounded-2xl border border-border bg-card p-8 space-y-4",
                children: [
                  e.jsx("h1", {
                    className: "text-2xl font-semibold",
                    children: "订单管理后台",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "输入管理员密钥，查看云端订单与付款截图。",
                  }),
                  e.jsx(ne, {
                    type: "password",
                    value: s,
                    onChange: (t) => a(t.target.value),
                    placeholder: "管理员 API 密钥",
                    disabled: g,
                    autoComplete: "current-password",
                    onKeyDown: (t) => {
                      t.key === "Enter" && He();
                    },
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(ae, {
                        id: "remember-admin-key",
                        checked: i,
                        onCheckedChange: (t) => m(t === !0),
                      }),
                      e.jsx(X, {
                        htmlFor: "remember-admin-key",
                        className: "text-sm font-normal cursor-pointer",
                        children: "记住密钥",
                      }),
                    ],
                  }),
                  e.jsx(v, {
                    className: "w-full",
                    onClick: () => void He(),
                    disabled: g,
                    children: g ? "正在连接接口…" : "登录",
                  }),
                  e.jsx(v, {
                    asChild: !0,
                    variant: "outline",
                    className: "w-full",
                    children: e.jsx(Ge, { to: "/", children: "返回商店" }),
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "hidden lg:block",
              children: e.jsx(Ye, {}),
            }),
          ],
        });
  };
export { Ht as default };
