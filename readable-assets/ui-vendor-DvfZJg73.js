import {
  r as s,
  j as p,
  R as x,
  a as ut,
  b as Vn,
  c as Wn,
  u as ha,
  d as ga,
  o as ya,
  s as ba,
  f as wa,
  e as xa,
  g as Ca,
  h as Ea,
  l as Sa,
} from "./react-vendor-R4T0bNIa.js";
function _(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (r) {
    if ((e == null || e(r), n === !1 || !r.defaultPrevented))
      return t == null ? void 0 : t(r);
  };
}
function Sn(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Hn(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const a = Sn(r, t);
      return (!n && typeof a == "function" && (n = !0), a);
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const a = o[r];
          typeof a == "function" ? a() : Sn(e[r], null);
        }
      };
  };
}
function G(...e) {
  return s.useCallback(Hn(...e), e);
}
function Ta(e, t) {
  const n = s.createContext(t),
    o = (a) => {
      const { children: c, ...i } = a,
        d = s.useMemo(() => i, Object.values(i));
      return p.jsx(n.Provider, { value: d, children: c });
    };
  o.displayName = e + "Provider";
  function r(a) {
    const c = s.useContext(n);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function we(e, t = []) {
  let n = [];
  function o(a, c) {
    const i = s.createContext(c),
      d = n.length;
    n = [...n, c];
    const l = (g) => {
      var b;
      const { scope: w, children: f, ...E } = g,
        u = ((b = w == null ? void 0 : w[e]) == null ? void 0 : b[d]) || i,
        v = s.useMemo(() => E, Object.values(E));
      return p.jsx(u.Provider, { value: v, children: f });
    };
    l.displayName = a + "Provider";
    function m(g, w) {
      var u;
      const f = ((u = w == null ? void 0 : w[e]) == null ? void 0 : u[d]) || i,
        E = s.useContext(f);
      if (E) return E;
      if (c !== void 0) return c;
      throw new Error(`\`${g}\` must be used within \`${a}\``);
    }
    return [l, m];
  }
  const r = () => {
    const a = n.map((c) => s.createContext(c));
    return function (i) {
      const d = (i == null ? void 0 : i[e]) || a;
      return s.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: d } }), [i, d]);
    };
  };
  return ((r.scopeName = e), [o, Ra(r, ...t)]);
}
function Ra(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function (a) {
      const c = o.reduce((i, { useScope: d, scopeName: l }) => {
        const g = d(a)[`__scope${l}`];
        return { ...i, ...g };
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Ke(e) {
  const t = Pa(e),
    n = s.forwardRef((o, r) => {
      const { children: a, ...c } = o,
        i = s.Children.toArray(a),
        d = i.find(Na);
      if (d) {
        const l = d.props.children,
          m = i.map((g) =>
            g === d
              ? s.Children.count(l) > 1
                ? s.Children.only(null)
                : s.isValidElement(l)
                  ? l.props.children
                  : null
              : g,
          );
        return p.jsx(t, {
          ...c,
          ref: r,
          children: s.isValidElement(l) ? s.cloneElement(l, void 0, m) : null,
        });
      }
      return p.jsx(t, { ...c, ref: r, children: a });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var cl = Ke("Slot");
function Pa(e) {
  const t = s.forwardRef((n, o) => {
    const { children: r, ...a } = n;
    if (s.isValidElement(r)) {
      const c = _a(r),
        i = Aa(a, r.props);
      return (
        r.type !== s.Fragment && (i.ref = o ? Hn(o, c) : c),
        s.cloneElement(r, i)
      );
    }
    return s.Children.count(r) > 1 ? s.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Ia = Symbol("radix.slottable");
function Na(e) {
  return (
    s.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Ia
  );
}
function Aa(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o],
      a = t[o];
    /^on[A-Z]/.test(o)
      ? r && a
        ? (n[o] = (...i) => {
            const d = a(...i);
            return (r(...i), d);
          })
        : r && (n[o] = r)
      : o === "style"
        ? (n[o] = { ...r, ...a })
        : o === "className" && (n[o] = [r, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function _a(e) {
  var o, r;
  let t =
      (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : o.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (r = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : r.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function ft(e) {
  const t = e + "CollectionProvider",
    [n, o] = we(t),
    [r, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (u) => {
      const { scope: v, children: b } = u,
        h = x.useRef(null),
        y = x.useRef(new Map()).current;
      return p.jsx(r, { scope: v, itemMap: y, collectionRef: h, children: b });
    };
  c.displayName = t;
  const i = e + "CollectionSlot",
    d = Ke(i),
    l = x.forwardRef((u, v) => {
      const { scope: b, children: h } = u,
        y = a(i, b),
        C = G(v, y.collectionRef);
      return p.jsx(d, { ref: C, children: h });
    });
  l.displayName = i;
  const m = e + "CollectionItemSlot",
    g = "data-radix-collection-item",
    w = Ke(m),
    f = x.forwardRef((u, v) => {
      const { scope: b, children: h, ...y } = u,
        C = x.useRef(null),
        S = G(v, C),
        P = a(m, b);
      return (
        x.useEffect(
          () => (
            P.itemMap.set(C, { ref: C, ...y }),
            () => void P.itemMap.delete(C)
          ),
        ),
        p.jsx(w, { [g]: "", ref: S, children: h })
      );
    });
  f.displayName = m;
  function E(u) {
    const v = a(e + "CollectionConsumer", u);
    return x.useCallback(() => {
      const h = v.collectionRef.current;
      if (!h) return [];
      const y = Array.from(h.querySelectorAll(`[${g}]`));
      return Array.from(v.itemMap.values()).sort(
        (P, T) => y.indexOf(P.ref.current) - y.indexOf(T.ref.current),
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [{ Provider: c, Slot: l, ItemSlot: f }, E, o];
}
var Ma = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  M = Ma.reduce((e, t) => {
    const n = Ke(`Primitive.${t}`),
      o = s.forwardRef((r, a) => {
        const { asChild: c, ...i } = r,
          d = c ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          p.jsx(d, { ...i, ref: a })
        );
      });
    return ((o.displayName = `Primitive.${t}`), { ...e, [t]: o });
  }, {});
function Un(e, t) {
  e && ut.flushSync(() => e.dispatchEvent(t));
}
function le(e) {
  const t = s.useRef(e);
  return (
    s.useEffect(() => {
      t.current = e;
    }),
    s.useMemo(
      () =>
        (...n) => {
          var o;
          return (o = t.current) == null ? void 0 : o.call(t, ...n);
        },
      [],
    )
  );
}
function Da(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = le(e);
  s.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return (
      t.addEventListener("keydown", o, { capture: !0 }),
      () => t.removeEventListener("keydown", o, { capture: !0 })
    );
  }, [n, t]);
}
var Oa = "DismissableLayer",
  Ft = "dismissableLayer.update",
  ka = "dismissableLayer.pointerDownOutside",
  ja = "dismissableLayer.focusOutside",
  Tn,
  Kn = s.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  pt = s.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: r,
        onFocusOutside: a,
        onInteractOutside: c,
        onDismiss: i,
        ...d
      } = e,
      l = s.useContext(Kn),
      [m, g] = s.useState(null),
      w =
        (m == null ? void 0 : m.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, f] = s.useState({}),
      E = G(t, (T) => g(T)),
      u = Array.from(l.layers),
      [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
      b = u.indexOf(v),
      h = m ? u.indexOf(m) : -1,
      y = l.layersWithOutsidePointerEventsDisabled.size > 0,
      C = h >= b,
      S = Fa((T) => {
        const N = T.target,
          F = [...l.branches].some((X) => X.contains(N));
        !C ||
          F ||
          (r == null || r(T),
          c == null || c(T),
          T.defaultPrevented || i == null || i());
      }, w),
      P = Ba((T) => {
        const N = T.target;
        [...l.branches].some((X) => X.contains(N)) ||
          (a == null || a(T),
          c == null || c(T),
          T.defaultPrevented || i == null || i());
      }, w);
    return (
      Da((T) => {
        h === l.layers.size - 1 &&
          (o == null || o(T),
          !T.defaultPrevented && i && (T.preventDefault(), i()));
      }, w),
      s.useEffect(() => {
        if (m)
          return (
            n &&
              (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Tn = w.body.style.pointerEvents),
                (w.body.style.pointerEvents = "none")),
              l.layersWithOutsidePointerEventsDisabled.add(m)),
            l.layers.add(m),
            Rn(),
            () => {
              n &&
                l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (w.body.style.pointerEvents = Tn);
            }
          );
      }, [m, w, n, l]),
      s.useEffect(
        () => () => {
          m &&
            (l.layers.delete(m),
            l.layersWithOutsidePointerEventsDisabled.delete(m),
            Rn());
        },
        [m, l],
      ),
      s.useEffect(() => {
        const T = () => f({});
        return (
          document.addEventListener(Ft, T),
          () => document.removeEventListener(Ft, T)
        );
      }, []),
      p.jsx(M.div, {
        ...d,
        ref: E,
        style: {
          pointerEvents: y ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: _(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: _(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: _(e.onPointerDownCapture, S.onPointerDownCapture),
      })
    );
  });
pt.displayName = Oa;
var La = "DismissableLayerBranch",
  zn = s.forwardRef((e, t) => {
    const n = s.useContext(Kn),
      o = s.useRef(null),
      r = G(t, o);
    return (
      s.useEffect(() => {
        const a = o.current;
        if (a)
          return (
            n.branches.add(a),
            () => {
              n.branches.delete(a);
            }
          );
      }, [n.branches]),
      p.jsx(M.div, { ...e, ref: r })
    );
  });
zn.displayName = La;
function Fa(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = le(e),
    o = s.useRef(!1),
    r = s.useRef(() => {});
  return (
    s.useEffect(() => {
      const a = (i) => {
          if (i.target && !o.current) {
            let d = function () {
              Yn(ka, n, l, { discrete: !0 });
            };
            const l = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", r.current),
                (r.current = d),
                t.addEventListener("click", r.current, { once: !0 }))
              : d();
          } else t.removeEventListener("click", r.current);
          o.current = !1;
        },
        c = window.setTimeout(() => {
          t.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        (window.clearTimeout(c),
          t.removeEventListener("pointerdown", a),
          t.removeEventListener("click", r.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function Ba(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = le(e),
    o = s.useRef(!1);
  return (
    s.useEffect(() => {
      const r = (a) => {
        a.target &&
          !o.current &&
          Yn(ja, n, { originalEvent: a }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", r),
        () => t.removeEventListener("focusin", r)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function Rn() {
  const e = new CustomEvent(Ft);
  document.dispatchEvent(e);
}
function Yn(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && r.addEventListener(e, t, { once: !0 }),
    o ? Un(r, a) : r.dispatchEvent(a));
}
var $a = pt,
  Va = zn,
  ne = globalThis != null && globalThis.document ? s.useLayoutEffect : () => {},
  Wa = "Portal",
  mt = s.forwardRef((e, t) => {
    var i;
    const { container: n, ...o } = e,
      [r, a] = s.useState(!1);
    ne(() => a(!0), []);
    const c =
      n ||
      (r &&
        ((i = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : i.body));
    return c ? Vn.createPortal(p.jsx(M.div, { ...o, ref: t }), c) : null;
  });
mt.displayName = Wa;
function Ha(e, t) {
  return s.useReducer((n, o) => t[n][o] ?? n, e);
}
var Pe = (e) => {
  const { present: t, children: n } = e,
    o = Ua(t),
    r =
      typeof n == "function" ? n({ present: o.isPresent }) : s.Children.only(n),
    a = G(o.ref, Ka(r));
  return typeof n == "function" || o.isPresent
    ? s.cloneElement(r, { ref: a })
    : null;
};
Pe.displayName = "Presence";
function Ua(e) {
  const [t, n] = s.useState(),
    o = s.useRef(null),
    r = s.useRef(e),
    a = s.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [i, d] = Ha(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    s.useEffect(() => {
      const l = Je(o.current);
      a.current = i === "mounted" ? l : "none";
    }, [i]),
    ne(() => {
      const l = o.current,
        m = r.current;
      if (m !== e) {
        const w = a.current,
          f = Je(l);
        (e
          ? d("MOUNT")
          : f === "none" || (l == null ? void 0 : l.display) === "none"
            ? d("UNMOUNT")
            : d(m && w !== f ? "ANIMATION_OUT" : "UNMOUNT"),
          (r.current = e));
      }
    }, [e, d]),
    ne(() => {
      if (t) {
        let l;
        const m = t.ownerDocument.defaultView ?? window,
          g = (f) => {
            const u = Je(o.current).includes(f.animationName);
            if (f.target === t && u && (d("ANIMATION_END"), !r.current)) {
              const v = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (l = m.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = v);
                })));
            }
          },
          w = (f) => {
            f.target === t && (a.current = Je(o.current));
          };
        return (
          t.addEventListener("animationstart", w),
          t.addEventListener("animationcancel", g),
          t.addEventListener("animationend", g),
          () => {
            (m.clearTimeout(l),
              t.removeEventListener("animationstart", w),
              t.removeEventListener("animationcancel", g),
              t.removeEventListener("animationend", g));
          }
        );
      } else d("ANIMATION_END");
    }, [t, d]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: s.useCallback((l) => {
        ((o.current = l ? getComputedStyle(l) : null), n(l));
      }, []),
    }
  );
}
function Je(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ka(e) {
  var o, r;
  let t =
      (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : o.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (r = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : r.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var za = Wn[" useInsertionEffect ".trim().toString()] || ne;
function be({ prop: e, defaultProp: t, onChange: n = () => {}, caller: o }) {
  const [r, a, c] = Ya({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    d = i ? e : r;
  {
    const m = s.useRef(e !== void 0);
    s.useEffect(() => {
      const g = m.current;
      (g !== i &&
        console.warn(
          `${o} is changing from ${g ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (m.current = i));
    }, [i, o]);
  }
  const l = s.useCallback(
    (m) => {
      var g;
      if (i) {
        const w = Ga(m) ? m(e) : m;
        w !== e && ((g = c.current) == null || g.call(c, w));
      } else a(m);
    },
    [i, e, a, c],
  );
  return [d, l];
}
function Ya({ defaultProp: e, onChange: t }) {
  const [n, o] = s.useState(e),
    r = s.useRef(n),
    a = s.useRef(t);
  return (
    za(() => {
      a.current = t;
    }, [t]),
    s.useEffect(() => {
      var c;
      r.current !== n &&
        ((c = a.current) == null || c.call(a, n), (r.current = n));
    }, [n, r]),
    [n, o, a]
  );
}
function Ga(e) {
  return typeof e == "function";
}
var Gn = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Xa = "VisuallyHidden",
  Zt = s.forwardRef((e, t) =>
    p.jsx(M.span, { ...e, ref: t, style: { ...Gn, ...e.style } }),
  );
Zt.displayName = Xa;
var Qt = "ToastProvider",
  [Jt, qa, Za] = ft("Toast"),
  [Xn, ll] = we("Toast", [Za]),
  [Qa, vt] = Xn(Qt),
  qn = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: o = 5e3,
        swipeDirection: r = "right",
        swipeThreshold: a = 50,
        children: c,
      } = e,
      [i, d] = s.useState(null),
      [l, m] = s.useState(0),
      g = s.useRef(!1),
      w = s.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Qt}\`. Expected non-empty \`string\`.`,
        ),
      p.jsx(Jt.Provider, {
        scope: t,
        children: p.jsx(Qa, {
          scope: t,
          label: n,
          duration: o,
          swipeDirection: r,
          swipeThreshold: a,
          toastCount: l,
          viewport: i,
          onViewportChange: d,
          onToastAdd: s.useCallback(() => m((f) => f + 1), []),
          onToastRemove: s.useCallback(() => m((f) => f - 1), []),
          isFocusedToastEscapeKeyDownRef: g,
          isClosePausedRef: w,
          children: c,
        }),
      })
    );
  };
qn.displayName = Qt;
var Zn = "ToastViewport",
  Ja = ["F8"],
  Bt = "toast.viewportPause",
  $t = "toast.viewportResume",
  Qn = s.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: o = Ja,
        label: r = "Notifications ({hotkey})",
        ...a
      } = e,
      c = vt(Zn, n),
      i = qa(n),
      d = s.useRef(null),
      l = s.useRef(null),
      m = s.useRef(null),
      g = s.useRef(null),
      w = G(t, g, c.onViewportChange),
      f = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      E = c.toastCount > 0;
    (s.useEffect(() => {
      const v = (b) => {
        var y;
        o.length !== 0 &&
          o.every((C) => b[C] || b.code === C) &&
          ((y = g.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", v),
        () => document.removeEventListener("keydown", v)
      );
    }, [o]),
      s.useEffect(() => {
        const v = d.current,
          b = g.current;
        if (E && v && b) {
          const h = () => {
              if (!c.isClosePausedRef.current) {
                const P = new CustomEvent(Bt);
                (b.dispatchEvent(P), (c.isClosePausedRef.current = !0));
              }
            },
            y = () => {
              if (c.isClosePausedRef.current) {
                const P = new CustomEvent($t);
                (b.dispatchEvent(P), (c.isClosePausedRef.current = !1));
              }
            },
            C = (P) => {
              !v.contains(P.relatedTarget) && y();
            },
            S = () => {
              v.contains(document.activeElement) || y();
            };
          return (
            v.addEventListener("focusin", h),
            v.addEventListener("focusout", C),
            v.addEventListener("pointermove", h),
            v.addEventListener("pointerleave", S),
            window.addEventListener("blur", h),
            window.addEventListener("focus", y),
            () => {
              (v.removeEventListener("focusin", h),
                v.removeEventListener("focusout", C),
                v.removeEventListener("pointermove", h),
                v.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", y));
            }
          );
        }
      }, [E, c.isClosePausedRef]));
    const u = s.useCallback(
      ({ tabbingDirection: v }) => {
        const h = i().map((y) => {
          const C = y.ref.current,
            S = [C, ...fs(C)];
          return v === "forwards" ? S : S.reverse();
        });
        return (v === "forwards" ? h.reverse() : h).flat();
      },
      [i],
    );
    return (
      s.useEffect(() => {
        const v = g.current;
        if (v) {
          const b = (h) => {
            var S, P, T;
            const y = h.altKey || h.ctrlKey || h.metaKey;
            if (h.key === "Tab" && !y) {
              const N = document.activeElement,
                F = h.shiftKey;
              if (h.target === v && F) {
                (S = l.current) == null || S.focus();
                return;
              }
              const W = u({ tabbingDirection: F ? "backwards" : "forwards" }),
                Z = W.findIndex((I) => I === N);
              Nt(W.slice(Z + 1))
                ? h.preventDefault()
                : F
                  ? (P = l.current) == null || P.focus()
                  : (T = m.current) == null || T.focus();
            }
          };
          return (
            v.addEventListener("keydown", b),
            () => v.removeEventListener("keydown", b)
          );
        }
      }, [i, u]),
      p.jsxs(Va, {
        ref: d,
        role: "region",
        "aria-label": r.replace("{hotkey}", f),
        tabIndex: -1,
        style: { pointerEvents: E ? void 0 : "none" },
        children: [
          E &&
            p.jsx(Vt, {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const v = u({ tabbingDirection: "forwards" });
                Nt(v);
              },
            }),
          p.jsx(Jt.Slot, {
            scope: n,
            children: p.jsx(M.ol, { tabIndex: -1, ...a, ref: w }),
          }),
          E &&
            p.jsx(Vt, {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const v = u({ tabbingDirection: "backwards" });
                Nt(v);
              },
            }),
        ],
      })
    );
  });
Qn.displayName = Zn;
var Jn = "ToastFocusProxy",
  Vt = s.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: o, ...r } = e,
      a = vt(Jn, n);
    return p.jsx(Zt, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...r,
      ref: t,
      style: { position: "fixed" },
      onFocus: (c) => {
        var l;
        const i = c.relatedTarget;
        !((l = a.viewport) != null && l.contains(i)) && o();
      },
    });
  });
Vt.displayName = Jn;
var qe = "Toast",
  es = "toast.swipeStart",
  ts = "toast.swipeMove",
  ns = "toast.swipeCancel",
  os = "toast.swipeEnd",
  eo = s.forwardRef((e, t) => {
    const { forceMount: n, open: o, defaultOpen: r, onOpenChange: a, ...c } = e,
      [i, d] = be({ prop: o, defaultProp: r ?? !0, onChange: a, caller: qe });
    return p.jsx(Pe, {
      present: n || i,
      children: p.jsx(ss, {
        open: i,
        ...c,
        ref: t,
        onClose: () => d(!1),
        onPause: le(e.onPause),
        onResume: le(e.onResume),
        onSwipeStart: _(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: _(e.onSwipeMove, (l) => {
          const { x: m, y: g } = l.detail.delta;
          (l.currentTarget.setAttribute("data-swipe", "move"),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${m}px`,
            ),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${g}px`,
            ));
        }),
        onSwipeCancel: _(e.onSwipeCancel, (l) => {
          (l.currentTarget.setAttribute("data-swipe", "cancel"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: _(e.onSwipeEnd, (l) => {
          const { x: m, y: g } = l.detail.delta;
          (l.currentTarget.setAttribute("data-swipe", "end"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${m}px`,
            ),
            l.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${g}px`,
            ),
            d(!1));
        }),
      }),
    });
  });
eo.displayName = qe;
var [rs, as] = Xn(qe, { onClose() {} }),
  ss = s.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: o = "foreground",
        duration: r,
        open: a,
        onClose: c,
        onEscapeKeyDown: i,
        onPause: d,
        onResume: l,
        onSwipeStart: m,
        onSwipeMove: g,
        onSwipeCancel: w,
        onSwipeEnd: f,
        ...E
      } = e,
      u = vt(qe, n),
      [v, b] = s.useState(null),
      h = G(t, (I) => b(I)),
      y = s.useRef(null),
      C = s.useRef(null),
      S = r || u.duration,
      P = s.useRef(0),
      T = s.useRef(S),
      N = s.useRef(0),
      { onToastAdd: F, onToastRemove: X } = u,
      z = le(() => {
        var $;
        ((v == null ? void 0 : v.contains(document.activeElement)) &&
          (($ = u.viewport) == null || $.focus()),
          c());
      }),
      W = s.useCallback(
        (I) => {
          !I ||
            I === 1 / 0 ||
            (window.clearTimeout(N.current),
            (P.current = new Date().getTime()),
            (N.current = window.setTimeout(z, I)));
        },
        [z],
      );
    (s.useEffect(() => {
      const I = u.viewport;
      if (I) {
        const $ = () => {
            (W(T.current), l == null || l());
          },
          O = () => {
            const H = new Date().getTime() - P.current;
            ((T.current = T.current - H),
              window.clearTimeout(N.current),
              d == null || d());
          };
        return (
          I.addEventListener(Bt, O),
          I.addEventListener($t, $),
          () => {
            (I.removeEventListener(Bt, O), I.removeEventListener($t, $));
          }
        );
      }
    }, [u.viewport, S, d, l, W]),
      s.useEffect(() => {
        a && !u.isClosePausedRef.current && W(S);
      }, [a, S, u.isClosePausedRef, W]),
      s.useEffect(() => (F(), () => X()), [F, X]));
    const Z = s.useMemo(() => (v ? io(v) : null), [v]);
    return u.viewport
      ? p.jsxs(p.Fragment, {
          children: [
            Z &&
              p.jsx(is, {
                __scopeToast: n,
                role: "status",
                "aria-live": o === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Z,
              }),
            p.jsx(rs, {
              scope: n,
              onClose: z,
              children: ut.createPortal(
                p.jsx(Jt.ItemSlot, {
                  scope: n,
                  children: p.jsx($a, {
                    asChild: !0,
                    onEscapeKeyDown: _(i, () => {
                      (u.isFocusedToastEscapeKeyDownRef.current || z(),
                        (u.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: p.jsx(M.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": a ? "open" : "closed",
                      "data-swipe-direction": u.swipeDirection,
                      ...E,
                      ref: h,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: _(e.onKeyDown, (I) => {
                        I.key === "Escape" &&
                          (i == null || i(I.nativeEvent),
                          I.nativeEvent.defaultPrevented ||
                            ((u.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: _(e.onPointerDown, (I) => {
                        I.button === 0 &&
                          (y.current = { x: I.clientX, y: I.clientY });
                      }),
                      onPointerMove: _(e.onPointerMove, (I) => {
                        if (!y.current) return;
                        const $ = I.clientX - y.current.x,
                          O = I.clientY - y.current.y,
                          H = !!C.current,
                          q = ["left", "right"].includes(u.swipeDirection),
                          A = ["left", "up"].includes(u.swipeDirection)
                            ? Math.min
                            : Math.max,
                          ee = q ? A(0, $) : 0,
                          re = q ? 0 : A(0, O),
                          k = I.pointerType === "touch" ? 10 : 2,
                          j = { x: ee, y: re },
                          L = { originalEvent: I, delta: j };
                        H
                          ? ((C.current = j), et(ts, g, L, { discrete: !1 }))
                          : Pn(j, u.swipeDirection, k)
                            ? ((C.current = j),
                              et(es, m, L, { discrete: !1 }),
                              I.target.setPointerCapture(I.pointerId))
                            : (Math.abs($) > k || Math.abs(O) > k) &&
                              (y.current = null);
                      }),
                      onPointerUp: _(e.onPointerUp, (I) => {
                        const $ = C.current,
                          O = I.target;
                        if (
                          (O.hasPointerCapture(I.pointerId) &&
                            O.releasePointerCapture(I.pointerId),
                          (C.current = null),
                          (y.current = null),
                          $)
                        ) {
                          const H = I.currentTarget,
                            q = { originalEvent: I, delta: $ };
                          (Pn($, u.swipeDirection, u.swipeThreshold)
                            ? et(os, f, q, { discrete: !0 })
                            : et(ns, w, q, { discrete: !0 }),
                            H.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                u.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  is = (e) => {
    const { __scopeToast: t, children: n, ...o } = e,
      r = vt(qe, t),
      [a, c] = s.useState(!1),
      [i, d] = s.useState(!1);
    return (
      ds(() => c(!0)),
      s.useEffect(() => {
        const l = window.setTimeout(() => d(!0), 1e3);
        return () => window.clearTimeout(l);
      }, []),
      i
        ? null
        : p.jsx(mt, {
            asChild: !0,
            children: p.jsx(Zt, {
              ...o,
              children:
                a && p.jsxs(p.Fragment, { children: [r.label, " ", n] }),
            }),
          })
    );
  },
  cs = "ToastTitle",
  to = s.forwardRef((e, t) => {
    const { __scopeToast: n, ...o } = e;
    return p.jsx(M.div, { ...o, ref: t });
  });
to.displayName = cs;
var ls = "ToastDescription",
  no = s.forwardRef((e, t) => {
    const { __scopeToast: n, ...o } = e;
    return p.jsx(M.div, { ...o, ref: t });
  });
no.displayName = ls;
var oo = "ToastAction",
  ro = s.forwardRef((e, t) => {
    const { altText: n, ...o } = e;
    return n.trim()
      ? p.jsx(so, {
          altText: n,
          asChild: !0,
          children: p.jsx(en, { ...o, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${oo}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
ro.displayName = oo;
var ao = "ToastClose",
  en = s.forwardRef((e, t) => {
    const { __scopeToast: n, ...o } = e,
      r = as(ao, n);
    return p.jsx(so, {
      asChild: !0,
      children: p.jsx(M.button, {
        type: "button",
        ...o,
        ref: t,
        onClick: _(e.onClick, r.onClose),
      }),
    });
  });
en.displayName = ao;
var so = s.forwardRef((e, t) => {
  const { __scopeToast: n, altText: o, ...r } = e;
  return p.jsx(M.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": o || void 0,
    ...r,
    ref: t,
  });
});
function io(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((o) => {
      if (
        (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent),
        us(o))
      ) {
        const r = o.ariaHidden || o.hidden || o.style.display === "none",
          a = o.dataset.radixToastAnnounceExclude === "";
        if (!r)
          if (a) {
            const c = o.dataset.radixToastAnnounceAlt;
            c && t.push(c);
          } else t.push(...io(o));
      }
    }),
    t
  );
}
function et(e, t, n, { discrete: o }) {
  const r = n.originalEvent.currentTarget,
    a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && r.addEventListener(e, t, { once: !0 }),
    o ? Un(r, a) : r.dispatchEvent(a));
}
var Pn = (e, t, n = 0) => {
  const o = Math.abs(e.x),
    r = Math.abs(e.y),
    a = o > r;
  return t === "left" || t === "right" ? a && o > n : !a && r > n;
};
function ds(e = () => {}) {
  const t = le(e);
  ne(() => {
    let n = 0,
      o = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (o = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(o));
      }
    );
  }, [t]);
}
function us(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function fs(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const r = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || r
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Nt(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var dl = qn,
  ul = Qn,
  fl = eo,
  pl = to,
  ml = no,
  vl = ro,
  hl = en,
  ps = (e) => {
    switch (e) {
      case "success":
        return hs;
      case "info":
        return ys;
      case "warning":
        return gs;
      case "error":
        return bs;
      default:
        return null;
    }
  },
  ms = Array(12).fill(0),
  vs = ({ visible: e, className: t }) =>
    x.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      x.createElement(
        "div",
        { className: "sonner-spinner" },
        ms.map((n, o) =>
          x.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${o}`,
          }),
        ),
      ),
    ),
  hs = x.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    x.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  gs = x.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    x.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  ys = x.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    x.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  bs = x.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    x.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  ws = x.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    x.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    x.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  xs = () => {
    let [e, t] = x.useState(document.hidden);
    return (
      x.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Wt = 1,
  Cs = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...o } = e,
            r =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Wt++,
            a = this.toasts.find((i) => i.id === r),
            c = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(r) && this.dismissedToasts.delete(r),
            a
              ? (this.toasts = this.toasts.map((i) =>
                  i.id === r
                    ? (this.publish({ ...i, ...e, id: r, title: n }),
                      { ...i, ...e, id: r, dismissible: c, title: n })
                    : i,
                ))
              : this.addToast({ title: n, ...o, dismissible: c, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let o = e instanceof Promise ? e : e(),
            r = n !== void 0,
            a,
            c = o
              .then(async (d) => {
                if (((a = ["resolve", d]), x.isValidElement(d)))
                  ((r = !1),
                    this.create({ id: n, type: "default", message: d }));
                else if (Ss(d) && !d.ok) {
                  r = !1;
                  let l =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${d.status}`)
                        : t.error,
                    m =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${d.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: l,
                    description: m,
                  });
                } else if (t.success !== void 0) {
                  r = !1;
                  let l =
                      typeof t.success == "function"
                        ? await t.success(d)
                        : t.success,
                    m =
                      typeof t.description == "function"
                        ? await t.description(d)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: l,
                    description: m,
                  });
                }
              })
              .catch(async (d) => {
                if (((a = ["reject", d]), t.error !== void 0)) {
                  r = !1;
                  let l =
                      typeof t.error == "function" ? await t.error(d) : t.error,
                    m =
                      typeof t.description == "function"
                        ? await t.description(d)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: l,
                    description: m,
                  });
                }
              })
              .finally(() => {
                var d;
                (r && (this.dismiss(n), (n = void 0)),
                  (d = t.finally) == null || d.call(t));
              }),
            i = () =>
              new Promise((d, l) =>
                c.then(() => (a[0] === "reject" ? l(a[1]) : d(a[1]))).catch(l),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: i }
            : Object.assign(n, { unwrap: i });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Wt++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  se = new Cs(),
  Es = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Wt++;
    return (se.addToast({ title: e, ...t, id: n }), n);
  },
  Ss = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  Ts = Es,
  Rs = () => se.toasts,
  Ps = () => se.getActiveToasts(),
  Is = Object.assign(
    Ts,
    {
      success: se.success,
      info: se.info,
      warning: se.warning,
      error: se.error,
      custom: se.custom,
      message: se.message,
      promise: se.promise,
      dismiss: se.dismiss,
      loading: se.loading,
    },
    { getHistory: Rs, getToasts: Ps },
  );
function Ns(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    o = document.createElement("style");
  ((o.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(o, n.firstChild)
      : n.appendChild(o),
    o.styleSheet
      ? (o.styleSheet.cssText = e)
      : o.appendChild(document.createTextNode(e)));
}
Ns(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function tt(e) {
  return e.label !== void 0;
}
var As = 3,
  _s = "32px",
  Ms = "16px",
  In = 4e3,
  Ds = 356,
  Os = 14,
  ks = 20,
  js = 200;
function pe(...e) {
  return e.filter(Boolean).join(" ");
}
function Ls(e) {
  let [t, n] = e.split("-"),
    o = [];
  return (t && o.push(t), n && o.push(n), o);
}
var Fs = (e) => {
  var t, n, o, r, a, c, i, d, l, m, g;
  let {
      invert: w,
      toast: f,
      unstyled: E,
      interacting: u,
      setHeights: v,
      visibleToasts: b,
      heights: h,
      index: y,
      toasts: C,
      expanded: S,
      removeToast: P,
      defaultRichColors: T,
      closeButton: N,
      style: F,
      cancelButtonStyle: X,
      actionButtonStyle: z,
      className: W = "",
      descriptionClassName: Z = "",
      duration: I,
      position: $,
      gap: O,
      loadingIcon: H,
      expandByDefault: q,
      classNames: A,
      icons: ee,
      closeButtonAriaLabel: re = "Close toast",
      pauseWhenPageIsHidden: k,
    } = e,
    [j, L] = x.useState(null),
    [te, ae] = x.useState(null),
    [R, K] = x.useState(!1),
    [J, U] = x.useState(!1),
    [B, V] = x.useState(!1),
    [oe, ie] = x.useState(!1),
    [Ae, xe] = x.useState(!1),
    [_e, Ye] = x.useState(0),
    [Le, yn] = x.useState(0),
    Ge = x.useRef(f.duration || I || In),
    bn = x.useRef(null),
    Me = x.useRef(null),
    ia = y === 0,
    ca = y + 1 <= b,
    ce = f.type,
    Fe = f.dismissible !== !1,
    la = f.className || "",
    da = f.descriptionClassName || "",
    Qe = x.useMemo(
      () => h.findIndex((D) => D.toastId === f.id) || 0,
      [h, f.id],
    ),
    ua = x.useMemo(() => {
      var D;
      return (D = f.closeButton) != null ? D : N;
    }, [f.closeButton, N]),
    wn = x.useMemo(() => f.duration || I || In, [f.duration, I]),
    Pt = x.useRef(0),
    Be = x.useRef(0),
    xn = x.useRef(0),
    $e = x.useRef(null),
    [fa, pa] = $.split("-"),
    Cn = x.useMemo(
      () => h.reduce((D, Y, Q) => (Q >= Qe ? D : D + Y.height), 0),
      [h, Qe],
    ),
    En = xs(),
    ma = f.invert || w,
    It = ce === "loading";
  ((Be.current = x.useMemo(() => Qe * O + Cn, [Qe, Cn])),
    x.useEffect(() => {
      Ge.current = wn;
    }, [wn]),
    x.useEffect(() => {
      K(!0);
    }, []),
    x.useEffect(() => {
      let D = Me.current;
      if (D) {
        let Y = D.getBoundingClientRect().height;
        return (
          yn(Y),
          v((Q) => [{ toastId: f.id, height: Y, position: f.position }, ...Q]),
          () => v((Q) => Q.filter((de) => de.toastId !== f.id))
        );
      }
    }, [v, f.id]),
    x.useLayoutEffect(() => {
      if (!R) return;
      let D = Me.current,
        Y = D.style.height;
      D.style.height = "auto";
      let Q = D.getBoundingClientRect().height;
      ((D.style.height = Y),
        yn(Q),
        v((de) =>
          de.find((ue) => ue.toastId === f.id)
            ? de.map((ue) => (ue.toastId === f.id ? { ...ue, height: Q } : ue))
            : [{ toastId: f.id, height: Q, position: f.position }, ...de],
        ));
    }, [R, f.title, f.description, v, f.id]));
  let Ce = x.useCallback(() => {
    (U(!0),
      Ye(Be.current),
      v((D) => D.filter((Y) => Y.toastId !== f.id)),
      setTimeout(() => {
        P(f);
      }, js));
  }, [f, P, v, Be]);
  (x.useEffect(() => {
    if (
      (f.promise && ce === "loading") ||
      f.duration === 1 / 0 ||
      f.type === "loading"
    )
      return;
    let D;
    return (
      S || u || (k && En)
        ? (() => {
            if (xn.current < Pt.current) {
              let Y = new Date().getTime() - Pt.current;
              Ge.current = Ge.current - Y;
            }
            xn.current = new Date().getTime();
          })()
        : Ge.current !== 1 / 0 &&
          ((Pt.current = new Date().getTime()),
          (D = setTimeout(() => {
            var Y;
            ((Y = f.onAutoClose) == null || Y.call(f, f), Ce());
          }, Ge.current))),
      () => clearTimeout(D)
    );
  }, [S, u, f, ce, k, En, Ce]),
    x.useEffect(() => {
      f.delete && Ce();
    }, [Ce, f.delete]));
  function va() {
    var D, Y, Q;
    return ee != null && ee.loading
      ? x.createElement(
          "div",
          {
            className: pe(
              A == null ? void 0 : A.loader,
              (D = f == null ? void 0 : f.classNames) == null
                ? void 0
                : D.loader,
              "sonner-loader",
            ),
            "data-visible": ce === "loading",
          },
          ee.loading,
        )
      : H
        ? x.createElement(
            "div",
            {
              className: pe(
                A == null ? void 0 : A.loader,
                (Y = f == null ? void 0 : f.classNames) == null
                  ? void 0
                  : Y.loader,
                "sonner-loader",
              ),
              "data-visible": ce === "loading",
            },
            H,
          )
        : x.createElement(vs, {
            className: pe(
              A == null ? void 0 : A.loader,
              (Q = f == null ? void 0 : f.classNames) == null
                ? void 0
                : Q.loader,
            ),
            visible: ce === "loading",
          });
  }
  return x.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Me,
      className: pe(
        W,
        la,
        A == null ? void 0 : A.toast,
        (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast,
        A == null ? void 0 : A.default,
        A == null ? void 0 : A[ce],
        (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[ce],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (o = f.richColors) != null ? o : T,
      "data-styled": !(f.jsx || f.unstyled || E),
      "data-mounted": R,
      "data-promise": !!f.promise,
      "data-swiped": Ae,
      "data-removed": J,
      "data-visible": ca,
      "data-y-position": fa,
      "data-x-position": pa,
      "data-index": y,
      "data-front": ia,
      "data-swiping": B,
      "data-dismissible": Fe,
      "data-type": ce,
      "data-invert": ma,
      "data-swipe-out": oe,
      "data-swipe-direction": te,
      "data-expanded": !!(S || (q && R)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": C.length - y,
        "--offset": `${J ? _e : Be.current}px`,
        "--initial-height": q ? "auto" : `${Le}px`,
        ...F,
        ...f.style,
      },
      onDragEnd: () => {
        (V(!1), L(null), ($e.current = null));
      },
      onPointerDown: (D) => {
        It ||
          !Fe ||
          ((bn.current = new Date()),
          Ye(Be.current),
          D.target.setPointerCapture(D.pointerId),
          D.target.tagName !== "BUTTON" &&
            (V(!0), ($e.current = { x: D.clientX, y: D.clientY })));
      },
      onPointerUp: () => {
        var D, Y, Q, de;
        if (oe || !Fe) return;
        $e.current = null;
        let ue = Number(
            ((D = Me.current) == null
              ? void 0
              : D.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          Ee = Number(
            ((Y = Me.current) == null
              ? void 0
              : Y.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          De =
            new Date().getTime() -
            ((Q = bn.current) == null ? void 0 : Q.getTime()),
          fe = j === "x" ? ue : Ee,
          Se = Math.abs(fe) / De;
        if (Math.abs(fe) >= ks || Se > 0.11) {
          (Ye(Be.current),
            (de = f.onDismiss) == null || de.call(f, f),
            ae(
              j === "x" ? (ue > 0 ? "right" : "left") : Ee > 0 ? "down" : "up",
            ),
            Ce(),
            ie(!0),
            xe(!1));
          return;
        }
        (V(!1), L(null));
      },
      onPointerMove: (D) => {
        var Y, Q, de, ue;
        if (
          !$e.current ||
          !Fe ||
          ((Y = window.getSelection()) == null ? void 0 : Y.toString().length) >
            0
        )
          return;
        let Ee = D.clientY - $e.current.y,
          De = D.clientX - $e.current.x,
          fe = (Q = e.swipeDirections) != null ? Q : Ls($);
        !j &&
          (Math.abs(De) > 1 || Math.abs(Ee) > 1) &&
          L(Math.abs(De) > Math.abs(Ee) ? "x" : "y");
        let Se = { x: 0, y: 0 };
        (j === "y"
          ? (fe.includes("top") || fe.includes("bottom")) &&
            ((fe.includes("top") && Ee < 0) ||
              (fe.includes("bottom") && Ee > 0)) &&
            (Se.y = Ee)
          : j === "x" &&
            (fe.includes("left") || fe.includes("right")) &&
            ((fe.includes("left") && De < 0) ||
              (fe.includes("right") && De > 0)) &&
            (Se.x = De),
          (Math.abs(Se.x) > 0 || Math.abs(Se.y) > 0) && xe(!0),
          (de = Me.current) == null ||
            de.style.setProperty("--swipe-amount-x", `${Se.x}px`),
          (ue = Me.current) == null ||
            ue.style.setProperty("--swipe-amount-y", `${Se.y}px`));
      },
    },
    ua && !f.jsx
      ? x.createElement(
          "button",
          {
            "aria-label": re,
            "data-disabled": It,
            "data-close-button": !0,
            onClick:
              It || !Fe
                ? () => {}
                : () => {
                    var D;
                    (Ce(), (D = f.onDismiss) == null || D.call(f, f));
                  },
            className: pe(
              A == null ? void 0 : A.closeButton,
              (r = f == null ? void 0 : f.classNames) == null
                ? void 0
                : r.closeButton,
            ),
          },
          (a = ee == null ? void 0 : ee.close) != null ? a : ws,
        )
      : null,
    f.jsx || s.isValidElement(f.title)
      ? f.jsx
        ? f.jsx
        : typeof f.title == "function"
          ? f.title()
          : f.title
      : x.createElement(
          x.Fragment,
          null,
          ce || f.icon || f.promise
            ? x.createElement(
                "div",
                {
                  "data-icon": "",
                  className: pe(
                    A == null ? void 0 : A.icon,
                    (c = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : c.icon,
                  ),
                },
                f.promise || (f.type === "loading" && !f.icon)
                  ? f.icon || va()
                  : null,
                f.type !== "loading"
                  ? f.icon || (ee == null ? void 0 : ee[ce]) || ps(ce)
                  : null,
              )
            : null,
          x.createElement(
            "div",
            {
              "data-content": "",
              className: pe(
                A == null ? void 0 : A.content,
                (i = f == null ? void 0 : f.classNames) == null
                  ? void 0
                  : i.content,
              ),
            },
            x.createElement(
              "div",
              {
                "data-title": "",
                className: pe(
                  A == null ? void 0 : A.title,
                  (d = f == null ? void 0 : f.classNames) == null
                    ? void 0
                    : d.title,
                ),
              },
              typeof f.title == "function" ? f.title() : f.title,
            ),
            f.description
              ? x.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: pe(
                      Z,
                      da,
                      A == null ? void 0 : A.description,
                      (l = f == null ? void 0 : f.classNames) == null
                        ? void 0
                        : l.description,
                    ),
                  },
                  typeof f.description == "function"
                    ? f.description()
                    : f.description,
                )
              : null,
          ),
          s.isValidElement(f.cancel)
            ? f.cancel
            : f.cancel && tt(f.cancel)
              ? x.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: f.cancelButtonStyle || X,
                    onClick: (D) => {
                      var Y, Q;
                      tt(f.cancel) &&
                        Fe &&
                        ((Q = (Y = f.cancel).onClick) == null || Q.call(Y, D),
                        Ce());
                    },
                    className: pe(
                      A == null ? void 0 : A.cancelButton,
                      (m = f == null ? void 0 : f.classNames) == null
                        ? void 0
                        : m.cancelButton,
                    ),
                  },
                  f.cancel.label,
                )
              : null,
          s.isValidElement(f.action)
            ? f.action
            : f.action && tt(f.action)
              ? x.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: f.actionButtonStyle || z,
                    onClick: (D) => {
                      var Y, Q;
                      tt(f.action) &&
                        ((Q = (Y = f.action).onClick) == null || Q.call(Y, D),
                        !D.defaultPrevented && Ce());
                    },
                    className: pe(
                      A == null ? void 0 : A.actionButton,
                      (g = f == null ? void 0 : f.classNames) == null
                        ? void 0
                        : g.actionButton,
                    ),
                  },
                  f.action.label,
                )
              : null,
        ),
  );
};
function Nn() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Bs(e, t) {
  let n = {};
  return (
    [e, t].forEach((o, r) => {
      let a = r === 1,
        c = a ? "--mobile-offset" : "--offset",
        i = a ? Ms : _s;
      function d(l) {
        ["top", "right", "bottom", "left"].forEach((m) => {
          n[`${c}-${m}`] = typeof l == "number" ? `${l}px` : l;
        });
      }
      typeof o == "number" || typeof o == "string"
        ? d(o)
        : typeof o == "object"
          ? ["top", "right", "bottom", "left"].forEach((l) => {
              o[l] === void 0
                ? (n[`${c}-${l}`] = i)
                : (n[`${c}-${l}`] =
                    typeof o[l] == "number" ? `${o[l]}px` : o[l]);
            })
          : d(i);
    }),
    n
  );
}
var $s = s.forwardRef(function (e, t) {
  let {
      invert: n,
      position: o = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: a,
      closeButton: c,
      className: i,
      offset: d,
      mobileOffset: l,
      theme: m = "light",
      richColors: g,
      duration: w,
      style: f,
      visibleToasts: E = As,
      toastOptions: u,
      dir: v = Nn(),
      gap: b = Os,
      loadingIcon: h,
      icons: y,
      containerAriaLabel: C = "Notifications",
      pauseWhenPageIsHidden: S,
    } = e,
    [P, T] = x.useState([]),
    N = x.useMemo(
      () =>
        Array.from(
          new Set(
            [o].concat(P.filter((k) => k.position).map((k) => k.position)),
          ),
        ),
      [P, o],
    ),
    [F, X] = x.useState([]),
    [z, W] = x.useState(!1),
    [Z, I] = x.useState(!1),
    [$, O] = x.useState(
      m !== "system"
        ? m
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    H = x.useRef(null),
    q = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    A = x.useRef(null),
    ee = x.useRef(!1),
    re = x.useCallback((k) => {
      T((j) => {
        var L;
        return (
          ((L = j.find((te) => te.id === k.id)) != null && L.delete) ||
            se.dismiss(k.id),
          j.filter(({ id: te }) => te !== k.id)
        );
      });
    }, []);
  return (
    x.useEffect(
      () =>
        se.subscribe((k) => {
          if (k.dismiss) {
            T((j) => j.map((L) => (L.id === k.id ? { ...L, delete: !0 } : L)));
            return;
          }
          setTimeout(() => {
            Vn.flushSync(() => {
              T((j) => {
                let L = j.findIndex((te) => te.id === k.id);
                return L !== -1
                  ? [...j.slice(0, L), { ...j[L], ...k }, ...j.slice(L + 1)]
                  : [k, ...j];
              });
            });
          });
        }),
      [],
    ),
    x.useEffect(() => {
      if (m !== "system") {
        O(m);
        return;
      }
      if (
        (m === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? O("dark")
            : O("light")),
        typeof window > "u")
      )
        return;
      let k = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        k.addEventListener("change", ({ matches: j }) => {
          O(j ? "dark" : "light");
        });
      } catch {
        k.addListener(({ matches: L }) => {
          try {
            O(L ? "dark" : "light");
          } catch (te) {
            console.error(te);
          }
        });
      }
    }, [m]),
    x.useEffect(() => {
      P.length <= 1 && W(!1);
    }, [P]),
    x.useEffect(() => {
      let k = (j) => {
        var L, te;
        (r.every((ae) => j[ae] || j.code === ae) &&
          (W(!0), (L = H.current) == null || L.focus()),
          j.code === "Escape" &&
            (document.activeElement === H.current ||
              ((te = H.current) != null &&
                te.contains(document.activeElement))) &&
            W(!1));
      };
      return (
        document.addEventListener("keydown", k),
        () => document.removeEventListener("keydown", k)
      );
    }, [r]),
    x.useEffect(() => {
      if (H.current)
        return () => {
          A.current &&
            (A.current.focus({ preventScroll: !0 }),
            (A.current = null),
            (ee.current = !1));
        };
    }, [H.current]),
    x.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${C} ${q}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      N.map((k, j) => {
        var L;
        let [te, ae] = k.split("-");
        return P.length
          ? x.createElement(
              "ol",
              {
                key: k,
                dir: v === "auto" ? Nn() : v,
                tabIndex: -1,
                ref: H,
                className: i,
                "data-sonner-toaster": !0,
                "data-theme": $,
                "data-y-position": te,
                "data-lifted": z && P.length > 1 && !a,
                "data-x-position": ae,
                style: {
                  "--front-toast-height": `${((L = F[0]) == null ? void 0 : L.height) || 0}px`,
                  "--width": `${Ds}px`,
                  "--gap": `${b}px`,
                  ...f,
                  ...Bs(d, l),
                },
                onBlur: (R) => {
                  ee.current &&
                    !R.currentTarget.contains(R.relatedTarget) &&
                    ((ee.current = !1),
                    A.current &&
                      (A.current.focus({ preventScroll: !0 }),
                      (A.current = null)));
                },
                onFocus: (R) => {
                  (R.target instanceof HTMLElement &&
                    R.target.dataset.dismissible === "false") ||
                    ee.current ||
                    ((ee.current = !0), (A.current = R.relatedTarget));
                },
                onMouseEnter: () => W(!0),
                onMouseMove: () => W(!0),
                onMouseLeave: () => {
                  Z || W(!1);
                },
                onDragEnd: () => W(!1),
                onPointerDown: (R) => {
                  (R.target instanceof HTMLElement &&
                    R.target.dataset.dismissible === "false") ||
                    I(!0);
                },
                onPointerUp: () => I(!1),
              },
              P.filter((R) => (!R.position && j === 0) || R.position === k).map(
                (R, K) => {
                  var J, U;
                  return x.createElement(Fs, {
                    key: R.id,
                    icons: y,
                    index: K,
                    toast: R,
                    defaultRichColors: g,
                    duration:
                      (J = u == null ? void 0 : u.duration) != null ? J : w,
                    className: u == null ? void 0 : u.className,
                    descriptionClassName:
                      u == null ? void 0 : u.descriptionClassName,
                    invert: n,
                    visibleToasts: E,
                    closeButton:
                      (U = u == null ? void 0 : u.closeButton) != null ? U : c,
                    interacting: Z,
                    position: k,
                    style: u == null ? void 0 : u.style,
                    unstyled: u == null ? void 0 : u.unstyled,
                    classNames: u == null ? void 0 : u.classNames,
                    cancelButtonStyle: u == null ? void 0 : u.cancelButtonStyle,
                    actionButtonStyle: u == null ? void 0 : u.actionButtonStyle,
                    removeToast: re,
                    toasts: P.filter((B) => B.position == R.position),
                    heights: F.filter((B) => B.position == R.position),
                    setHeights: X,
                    expandByDefault: a,
                    gap: b,
                    loadingIcon: h,
                    expanded: z,
                    pauseWhenPageIsHidden: S,
                    swipeDirections: e.swipeDirections,
                  });
                },
              ),
            )
          : null;
      }),
    )
  );
});
const gl = Object.freeze(
  Object.defineProperty(
    { __proto__: null, Toaster: $s, toast: Is },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var Vs = Wn[" useId ".trim().toString()] || (() => {}),
  Ws = 0;
function ye(e) {
  const [t, n] = s.useState(Vs());
  return (
    ne(() => {
      n((o) => o ?? String(Ws++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
var At = "focusScope.autoFocusOnMount",
  _t = "focusScope.autoFocusOnUnmount",
  An = { bubbles: !1, cancelable: !0 },
  Hs = "FocusScope",
  tn = s.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: o = !1,
        onMountAutoFocus: r,
        onUnmountAutoFocus: a,
        ...c
      } = e,
      [i, d] = s.useState(null),
      l = le(r),
      m = le(a),
      g = s.useRef(null),
      w = G(t, (u) => d(u)),
      f = s.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (s.useEffect(() => {
      if (o) {
        let u = function (y) {
            if (f.paused || !i) return;
            const C = y.target;
            i.contains(C) ? (g.current = C) : Te(g.current, { select: !0 });
          },
          v = function (y) {
            if (f.paused || !i) return;
            const C = y.relatedTarget;
            C !== null && (i.contains(C) || Te(g.current, { select: !0 }));
          },
          b = function (y) {
            if (document.activeElement === document.body)
              for (const S of y) S.removedNodes.length > 0 && Te(i);
          };
        (document.addEventListener("focusin", u),
          document.addEventListener("focusout", v));
        const h = new MutationObserver(b);
        return (
          i && h.observe(i, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", u),
              document.removeEventListener("focusout", v),
              h.disconnect());
          }
        );
      }
    }, [o, i, f.paused]),
      s.useEffect(() => {
        if (i) {
          Mn.add(f);
          const u = document.activeElement;
          if (!i.contains(u)) {
            const b = new CustomEvent(At, An);
            (i.addEventListener(At, l),
              i.dispatchEvent(b),
              b.defaultPrevented ||
                (Us(Xs(co(i)), { select: !0 }),
                document.activeElement === u && Te(i)));
          }
          return () => {
            (i.removeEventListener(At, l),
              setTimeout(() => {
                const b = new CustomEvent(_t, An);
                (i.addEventListener(_t, m),
                  i.dispatchEvent(b),
                  b.defaultPrevented || Te(u ?? document.body, { select: !0 }),
                  i.removeEventListener(_t, m),
                  Mn.remove(f));
              }, 0));
          };
        }
      }, [i, l, m, f]));
    const E = s.useCallback(
      (u) => {
        if ((!n && !o) || f.paused) return;
        const v = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey,
          b = document.activeElement;
        if (v && b) {
          const h = u.currentTarget,
            [y, C] = Ks(h);
          y && C
            ? !u.shiftKey && b === C
              ? (u.preventDefault(), n && Te(y, { select: !0 }))
              : u.shiftKey &&
                b === y &&
                (u.preventDefault(), n && Te(C, { select: !0 }))
            : b === h && u.preventDefault();
        }
      },
      [n, o, f.paused],
    );
    return p.jsx(M.div, { tabIndex: -1, ...c, ref: w, onKeyDown: E });
  });
tn.displayName = Hs;
function Us(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if ((Te(o, { select: t }), document.activeElement !== n)) return;
}
function Ks(e) {
  const t = co(e),
    n = _n(t, e),
    o = _n(t.reverse(), e);
  return [n, o];
}
function co(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (o) => {
        const r = o.tagName === "INPUT" && o.type === "hidden";
        return o.disabled || o.hidden || r
          ? NodeFilter.FILTER_SKIP
          : o.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function _n(e, t) {
  for (const n of e) if (!zs(n, { upTo: t })) return n;
}
function zs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ys(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Te(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && Ys(e) && t && e.select());
  }
}
var Mn = Gs();
function Gs() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && (n == null || n.pause()), (e = Dn(e, t)), e.unshift(t));
    },
    remove(t) {
      var n;
      ((e = Dn(e, t)), (n = e[0]) == null || n.resume());
    },
  };
}
function Dn(e, t) {
  const n = [...e],
    o = n.indexOf(t);
  return (o !== -1 && n.splice(o, 1), n);
}
function Xs(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Mt = 0;
function lo() {
  s.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? On()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? On()),
      Mt++,
      () => {
        (Mt === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Mt--);
      }
    );
  }, []);
}
function On() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var ge = function () {
  return (
    (ge =
      Object.assign ||
      function (t) {
        for (var n, o = 1, r = arguments.length; o < r; o++) {
          n = arguments[o];
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
        }
        return t;
      }),
    ge.apply(this, arguments)
  );
};
function uo(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
        (n[o[r]] = e[o[r]]);
  return n;
}
function qs(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, a; o < r; o++)
      (a || !(o in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, o)), (a[o] = t[o]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var st = "right-scroll-bar-position",
  it = "width-before-scroll-bar",
  Zs = "with-scroll-bars-hidden",
  Qs = "--removed-body-scroll-bar-size";
function Dt(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function Js(e, t) {
  var n = s.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && ((n.value = o), n.callback(o, r));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var ei = typeof window < "u" ? s.useLayoutEffect : s.useEffect,
  kn = new WeakMap();
function ti(e, t) {
  var n = Js(null, function (o) {
    return e.forEach(function (r) {
      return Dt(r, o);
    });
  });
  return (
    ei(
      function () {
        var o = kn.get(n);
        if (o) {
          var r = new Set(o),
            a = new Set(e),
            c = n.current;
          (r.forEach(function (i) {
            a.has(i) || Dt(i, null);
          }),
            a.forEach(function (i) {
              r.has(i) || Dt(i, c);
            }));
        }
        kn.set(n, e);
      },
      [e],
    ),
    n
  );
}
function ni(e) {
  return e;
}
function oi(e, t) {
  t === void 0 && (t = ni);
  var n = [],
    o = !1,
    r = {
      read: function () {
        if (o)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (a) {
        var c = t(a, o);
        return (
          n.push(c),
          function () {
            n = n.filter(function (i) {
              return i !== c;
            });
          }
        );
      },
      assignSyncMedium: function (a) {
        for (o = !0; n.length; ) {
          var c = n;
          ((n = []), c.forEach(a));
        }
        n = {
          push: function (i) {
            return a(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (a) {
        o = !0;
        var c = [];
        if (n.length) {
          var i = n;
          ((n = []), i.forEach(a), (c = n));
        }
        var d = function () {
            var m = c;
            ((c = []), m.forEach(a));
          },
          l = function () {
            return Promise.resolve().then(d);
          };
        (l(),
          (n = {
            push: function (m) {
              (c.push(m), l());
            },
            filter: function (m) {
              return ((c = c.filter(m)), n);
            },
          }));
      },
    };
  return r;
}
function ri(e) {
  e === void 0 && (e = {});
  var t = oi(null);
  return ((t.options = ge({ async: !0, ssr: !1 }, e)), t);
}
var fo = function (e) {
  var t = e.sideCar,
    n = uo(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var o = t.read();
  if (!o) throw new Error("Sidecar medium not found");
  return s.createElement(o, ge({}, n));
};
fo.isSideCarExport = !0;
function ai(e, t) {
  return (e.useMedium(t), fo);
}
var po = ri(),
  Ot = function () {},
  ht = s.forwardRef(function (e, t) {
    var n = s.useRef(null),
      o = s.useState({
        onScrollCapture: Ot,
        onWheelCapture: Ot,
        onTouchMoveCapture: Ot,
      }),
      r = o[0],
      a = o[1],
      c = e.forwardProps,
      i = e.children,
      d = e.className,
      l = e.removeScrollBar,
      m = e.enabled,
      g = e.shards,
      w = e.sideCar,
      f = e.noRelative,
      E = e.noIsolation,
      u = e.inert,
      v = e.allowPinchZoom,
      b = e.as,
      h = b === void 0 ? "div" : b,
      y = e.gapMode,
      C = uo(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      S = w,
      P = ti([n, t]),
      T = ge(ge({}, C), r);
    return s.createElement(
      s.Fragment,
      null,
      m &&
        s.createElement(S, {
          sideCar: po,
          removeScrollBar: l,
          shards: g,
          noRelative: f,
          noIsolation: E,
          inert: u,
          setCallbacks: a,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: y,
        }),
      c
        ? s.cloneElement(s.Children.only(i), ge(ge({}, T), { ref: P }))
        : s.createElement(h, ge({}, T, { className: d, ref: P }), i),
    );
  });
ht.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ht.classNames = { fullWidth: it, zeroRight: st };
var si = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function ii() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = si();
  return (t && e.setAttribute("nonce", t), e);
}
function ci(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function li(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var di = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = ii()) && (ci(t, n), li(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  ui = function () {
    var e = di();
    return function (t, n) {
      s.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  mo = function () {
    var e = ui(),
      t = function (n) {
        var o = n.styles,
          r = n.dynamic;
        return (e(o, r), null);
      };
    return t;
  },
  fi = { left: 0, top: 0, right: 0, gap: 0 },
  kt = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  pi = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      o = t[e === "padding" ? "paddingTop" : "marginTop"],
      r = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [kt(n), kt(o), kt(r)];
  },
  mi = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return fi;
    var t = pi(e),
      n = document.documentElement.clientWidth,
      o = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, o - n + t[2] - t[0]),
    };
  },
  vi = mo(),
  Ue = "data-scroll-locked",
  hi = function (e, t, n, o) {
    var r = e.left,
      a = e.top,
      c = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Zs,
          ` {
   overflow: hidden `,
        )
        .concat(
          o,
          `;
   padding-right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  body[`,
        )
        .concat(
          Ue,
          `] {
    overflow: hidden `,
        )
        .concat(
          o,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(o, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  r,
                  `px;
    padding-top: `,
                )
                .concat(
                  a,
                  `px;
    padding-right: `,
                )
                .concat(
                  c,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(i, "px ")
                .concat(
                  o,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(i, "px ").concat(o, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          st,
          ` {
    right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(
          it,
          ` {
    margin-right: `,
        )
        .concat(i, "px ")
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(st, " .")
        .concat(
          st,
          ` {
    right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  .`,
        )
        .concat(it, " .")
        .concat(
          it,
          ` {
    margin-right: 0 `,
        )
        .concat(
          o,
          `;
  }
  
  body[`,
        )
        .concat(
          Ue,
          `] {
    `,
        )
        .concat(Qs, ": ")
        .concat(
          i,
          `px;
  }
`,
        )
    );
  },
  jn = function () {
    var e = parseInt(document.body.getAttribute(Ue) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  gi = function () {
    s.useEffect(function () {
      return (
        document.body.setAttribute(Ue, (jn() + 1).toString()),
        function () {
          var e = jn() - 1;
          e <= 0
            ? document.body.removeAttribute(Ue)
            : document.body.setAttribute(Ue, e.toString());
        }
      );
    }, []);
  },
  yi = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      o = e.gapMode,
      r = o === void 0 ? "margin" : o;
    gi();
    var a = s.useMemo(
      function () {
        return mi(r);
      },
      [r],
    );
    return s.createElement(vi, { styles: hi(a, !t, r, n ? "" : "!important") });
  },
  Ht = !1;
if (typeof window < "u")
  try {
    var nt = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Ht = !0), !0);
      },
    });
    (window.addEventListener("test", nt, nt),
      window.removeEventListener("test", nt, nt));
  } catch {
    Ht = !1;
  }
var Ve = Ht ? { passive: !1 } : !1,
  bi = function (e) {
    return e.tagName === "TEXTAREA";
  },
  vo = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !bi(e) && n[t] === "visible")
    );
  },
  wi = function (e) {
    return vo(e, "overflowY");
  },
  xi = function (e) {
    return vo(e, "overflowX");
  },
  Ln = function (e, t) {
    var n = t.ownerDocument,
      o = t;
    do {
      typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
      var r = ho(e, o);
      if (r) {
        var a = go(e, o),
          c = a[1],
          i = a[2];
        if (c > i) return !0;
      }
      o = o.parentNode;
    } while (o && o !== n.body);
    return !1;
  },
  Ci = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      o = e.clientHeight;
    return [t, n, o];
  },
  Ei = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      o = e.clientWidth;
    return [t, n, o];
  },
  ho = function (e, t) {
    return e === "v" ? wi(t) : xi(t);
  },
  go = function (e, t) {
    return e === "v" ? Ci(t) : Ei(t);
  },
  Si = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Ti = function (e, t, n, o, r) {
    var a = Si(e, window.getComputedStyle(t).direction),
      c = a * o,
      i = n.target,
      d = t.contains(i),
      l = !1,
      m = c > 0,
      g = 0,
      w = 0;
    do {
      if (!i) break;
      var f = go(e, i),
        E = f[0],
        u = f[1],
        v = f[2],
        b = u - v - a * E;
      (E || b) && ho(e, i) && ((g += b), (w += E));
      var h = i.parentNode;
      i = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
    } while ((!d && i !== document.body) || (d && (t.contains(i) || t === i)));
    return (
      ((m && (Math.abs(g) < 1 || !r)) || (!m && (Math.abs(w) < 1 || !r))) &&
        (l = !0),
      l
    );
  },
  ot = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Fn = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Bn = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Ri = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Pi = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  Ii = 0,
  We = [];
function Ni(e) {
  var t = s.useRef([]),
    n = s.useRef([0, 0]),
    o = s.useRef(),
    r = s.useState(Ii++)[0],
    a = s.useState(mo)[0],
    c = s.useRef(e);
  (s.useEffect(
    function () {
      c.current = e;
    },
    [e],
  ),
    s.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(r));
          var u = qs([e.lockRef.current], (e.shards || []).map(Bn), !0).filter(
            Boolean,
          );
          return (
            u.forEach(function (v) {
              return v.classList.add("allow-interactivity-".concat(r));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(r)),
                u.forEach(function (v) {
                  return v.classList.remove("allow-interactivity-".concat(r));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var i = s.useCallback(function (u, v) {
      if (
        ("touches" in u && u.touches.length === 2) ||
        (u.type === "wheel" && u.ctrlKey)
      )
        return !c.current.allowPinchZoom;
      var b = ot(u),
        h = n.current,
        y = "deltaX" in u ? u.deltaX : h[0] - b[0],
        C = "deltaY" in u ? u.deltaY : h[1] - b[1],
        S,
        P = u.target,
        T = Math.abs(y) > Math.abs(C) ? "h" : "v";
      if ("touches" in u && T === "h" && P.type === "range") return !1;
      var N = Ln(T, P);
      if (!N) return !0;
      if ((N ? (S = T) : ((S = T === "v" ? "h" : "v"), (N = Ln(T, P))), !N))
        return !1;
      if (
        (!o.current && "changedTouches" in u && (y || C) && (o.current = S), !S)
      )
        return !0;
      var F = o.current || S;
      return Ti(F, v, u, F === "h" ? y : C, !0);
    }, []),
    d = s.useCallback(function (u) {
      var v = u;
      if (!(!We.length || We[We.length - 1] !== a)) {
        var b = "deltaY" in v ? Fn(v) : ot(v),
          h = t.current.filter(function (S) {
            return (
              S.name === v.type &&
              (S.target === v.target || v.target === S.shadowParent) &&
              Ri(S.delta, b)
            );
          })[0];
        if (h && h.should) {
          v.cancelable && v.preventDefault();
          return;
        }
        if (!h) {
          var y = (c.current.shards || [])
              .map(Bn)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(v.target);
              }),
            C = y.length > 0 ? i(v, y[0]) : !c.current.noIsolation;
          C && v.cancelable && v.preventDefault();
        }
      }
    }, []),
    l = s.useCallback(function (u, v, b, h) {
      var y = { name: u, delta: v, target: b, should: h, shadowParent: Ai(b) };
      (t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== y;
          });
        }, 1));
    }, []),
    m = s.useCallback(function (u) {
      ((n.current = ot(u)), (o.current = void 0));
    }, []),
    g = s.useCallback(function (u) {
      l(u.type, Fn(u), u.target, i(u, e.lockRef.current));
    }, []),
    w = s.useCallback(function (u) {
      l(u.type, ot(u), u.target, i(u, e.lockRef.current));
    }, []);
  s.useEffect(function () {
    return (
      We.push(a),
      e.setCallbacks({
        onScrollCapture: g,
        onWheelCapture: g,
        onTouchMoveCapture: w,
      }),
      document.addEventListener("wheel", d, Ve),
      document.addEventListener("touchmove", d, Ve),
      document.addEventListener("touchstart", m, Ve),
      function () {
        ((We = We.filter(function (u) {
          return u !== a;
        })),
          document.removeEventListener("wheel", d, Ve),
          document.removeEventListener("touchmove", d, Ve),
          document.removeEventListener("touchstart", m, Ve));
      }
    );
  }, []);
  var f = e.removeScrollBar,
    E = e.inert;
  return s.createElement(
    s.Fragment,
    null,
    E ? s.createElement(a, { styles: Pi(r) }) : null,
    f
      ? s.createElement(yi, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function Ai(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const _i = ai(po, Ni);
var nn = s.forwardRef(function (e, t) {
  return s.createElement(ht, ge({}, e, { ref: t, sideCar: _i }));
});
nn.classNames = ht.classNames;
var Mi = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  He = new WeakMap(),
  rt = new WeakMap(),
  at = {},
  jt = 0,
  yo = function (e) {
    return e && (e.host || yo(e.parentNode));
  },
  Di = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var o = yo(n);
        return o && e.contains(o)
          ? o
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Oi = function (e, t, n, o) {
    var r = Di(t, Array.isArray(e) ? e : [e]);
    at[n] || (at[n] = new WeakMap());
    var a = at[n],
      c = [],
      i = new Set(),
      d = new Set(r),
      l = function (g) {
        !g || i.has(g) || (i.add(g), l(g.parentNode));
      };
    r.forEach(l);
    var m = function (g) {
      !g ||
        d.has(g) ||
        Array.prototype.forEach.call(g.children, function (w) {
          if (i.has(w)) m(w);
          else
            try {
              var f = w.getAttribute(o),
                E = f !== null && f !== "false",
                u = (He.get(w) || 0) + 1,
                v = (a.get(w) || 0) + 1;
              (He.set(w, u),
                a.set(w, v),
                c.push(w),
                u === 1 && E && rt.set(w, !0),
                v === 1 && w.setAttribute(n, "true"),
                E || w.setAttribute(o, "true"));
            } catch (b) {
              console.error("aria-hidden: cannot operate on ", w, b);
            }
        });
    };
    return (
      m(t),
      i.clear(),
      jt++,
      function () {
        (c.forEach(function (g) {
          var w = He.get(g) - 1,
            f = a.get(g) - 1;
          (He.set(g, w),
            a.set(g, f),
            w || (rt.has(g) || g.removeAttribute(o), rt.delete(g)),
            f || g.removeAttribute(n));
        }),
          jt--,
          jt ||
            ((He = new WeakMap()),
            (He = new WeakMap()),
            (rt = new WeakMap()),
            (at = {})));
      }
    );
  },
  bo = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var o = Array.from(Array.isArray(e) ? e : [e]),
      r = Mi(e);
    return r
      ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))),
        Oi(o, r, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  gt = "Dialog",
  [wo, yl] = we(gt),
  [ki, ve] = wo(gt),
  xo = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: a,
        modal: c = !0,
      } = e,
      i = s.useRef(null),
      d = s.useRef(null),
      [l, m] = be({ prop: o, defaultProp: r ?? !1, onChange: a, caller: gt });
    return p.jsx(ki, {
      scope: t,
      triggerRef: i,
      contentRef: d,
      contentId: ye(),
      titleId: ye(),
      descriptionId: ye(),
      open: l,
      onOpenChange: m,
      onOpenToggle: s.useCallback(() => m((g) => !g), [m]),
      modal: c,
      children: n,
    });
  };
xo.displayName = gt;
var Co = "DialogTrigger",
  ji = s.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(Co, n),
      a = G(t, r.triggerRef);
    return p.jsx(M.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": r.open,
      "aria-controls": r.contentId,
      "data-state": an(r.open),
      ...o,
      ref: a,
      onClick: _(e.onClick, r.onOpenToggle),
    });
  });
ji.displayName = Co;
var on = "DialogPortal",
  [Li, Eo] = wo(on, { forceMount: void 0 }),
  So = (e) => {
    const { __scopeDialog: t, forceMount: n, children: o, container: r } = e,
      a = ve(on, t);
    return p.jsx(Li, {
      scope: t,
      forceMount: n,
      children: s.Children.map(o, (c) =>
        p.jsx(Pe, {
          present: n || a.open,
          children: p.jsx(mt, { asChild: !0, container: r, children: c }),
        }),
      ),
    });
  };
So.displayName = on;
var ct = "DialogOverlay",
  To = s.forwardRef((e, t) => {
    const n = Eo(ct, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...r } = e,
      a = ve(ct, e.__scopeDialog);
    return a.modal
      ? p.jsx(Pe, {
          present: o || a.open,
          children: p.jsx(Bi, { ...r, ref: t }),
        })
      : null;
  });
To.displayName = ct;
var Fi = Ke("DialogOverlay.RemoveScroll"),
  Bi = s.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(ct, n);
    return p.jsx(nn, {
      as: Fi,
      allowPinchZoom: !0,
      shards: [r.contentRef],
      children: p.jsx(M.div, {
        "data-state": an(r.open),
        ...o,
        ref: t,
        style: { pointerEvents: "auto", ...o.style },
      }),
    });
  }),
  Oe = "DialogContent",
  Ro = s.forwardRef((e, t) => {
    const n = Eo(Oe, e.__scopeDialog),
      { forceMount: o = n.forceMount, ...r } = e,
      a = ve(Oe, e.__scopeDialog);
    return p.jsx(Pe, {
      present: o || a.open,
      children: a.modal
        ? p.jsx($i, { ...r, ref: t })
        : p.jsx(Vi, { ...r, ref: t }),
    });
  });
Ro.displayName = Oe;
var $i = s.forwardRef((e, t) => {
    const n = ve(Oe, e.__scopeDialog),
      o = s.useRef(null),
      r = G(t, n.contentRef, o);
    return (
      s.useEffect(() => {
        const a = o.current;
        if (a) return bo(a);
      }, []),
      p.jsx(Po, {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: _(e.onCloseAutoFocus, (a) => {
          var c;
          (a.preventDefault(), (c = n.triggerRef.current) == null || c.focus());
        }),
        onPointerDownOutside: _(e.onPointerDownOutside, (a) => {
          const c = a.detail.originalEvent,
            i = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: _(e.onFocusOutside, (a) => a.preventDefault()),
      })
    );
  }),
  Vi = s.forwardRef((e, t) => {
    const n = ve(Oe, e.__scopeDialog),
      o = s.useRef(!1),
      r = s.useRef(!1);
    return p.jsx(Po, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (a) => {
        var c, i;
        ((c = e.onCloseAutoFocus) == null || c.call(e, a),
          a.defaultPrevented ||
            (o.current || (i = n.triggerRef.current) == null || i.focus(),
            a.preventDefault()),
          (o.current = !1),
          (r.current = !1));
      },
      onInteractOutside: (a) => {
        var d, l;
        ((d = e.onInteractOutside) == null || d.call(e, a),
          a.defaultPrevented ||
            ((o.current = !0),
            a.detail.originalEvent.type === "pointerdown" && (r.current = !0)));
        const c = a.target;
        (((l = n.triggerRef.current) == null ? void 0 : l.contains(c)) &&
          a.preventDefault(),
          a.detail.originalEvent.type === "focusin" &&
            r.current &&
            a.preventDefault());
      },
    });
  }),
  Po = s.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: o,
        onOpenAutoFocus: r,
        onCloseAutoFocus: a,
        ...c
      } = e,
      i = ve(Oe, n),
      d = s.useRef(null),
      l = G(t, d);
    return (
      lo(),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(tn, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: r,
            onUnmountAutoFocus: a,
            children: p.jsx(pt, {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": an(i.open),
              ...c,
              ref: l,
              onDismiss: () => i.onOpenChange(!1),
            }),
          }),
          p.jsxs(p.Fragment, {
            children: [
              p.jsx(Wi, { titleId: i.titleId }),
              p.jsx(Ui, { contentRef: d, descriptionId: i.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  rn = "DialogTitle",
  Io = s.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(rn, n);
    return p.jsx(M.h2, { id: r.titleId, ...o, ref: t });
  });
Io.displayName = rn;
var No = "DialogDescription",
  Ao = s.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(No, n);
    return p.jsx(M.p, { id: r.descriptionId, ...o, ref: t });
  });
Ao.displayName = No;
var _o = "DialogClose",
  Mo = s.forwardRef((e, t) => {
    const { __scopeDialog: n, ...o } = e,
      r = ve(_o, n);
    return p.jsx(M.button, {
      type: "button",
      ...o,
      ref: t,
      onClick: _(e.onClick, () => r.onOpenChange(!1)),
    });
  });
Mo.displayName = _o;
function an(e) {
  return e ? "open" : "closed";
}
var Do = "DialogTitleWarning",
  [bl, Oo] = Ta(Do, { contentName: Oe, titleName: rn, docsSlug: "dialog" }),
  Wi = ({ titleId: e }) => {
    const t = Oo(Do),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      s.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  Hi = "DialogDescriptionWarning",
  Ui = ({ contentRef: e, descriptionId: t }) => {
    const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Oo(Hi).contentName}}.`;
    return (
      s.useEffect(() => {
        var a;
        const r =
          (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
        t && r && (document.getElementById(t) || console.warn(o));
      }, [o, e, t]),
      null
    );
  },
  wl = xo,
  xl = So,
  Cl = To,
  El = Ro,
  Sl = Io,
  Tl = Ao,
  Rl = Mo,
  Ki = "Label",
  ko = s.forwardRef((e, t) =>
    p.jsx(M.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var r;
        n.target.closest("button, input, select, textarea") ||
          ((r = e.onMouseDown) == null || r.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
ko.displayName = Ki;
var Pl = ko,
  yt = "Collapsible",
  [zi, jo] = we(yt),
  [Yi, sn] = zi(yt),
  Lo = s.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        open: o,
        defaultOpen: r,
        disabled: a,
        onOpenChange: c,
        ...i
      } = e,
      [d, l] = be({ prop: o, defaultProp: r ?? !1, onChange: c, caller: yt });
    return p.jsx(Yi, {
      scope: n,
      disabled: a,
      contentId: ye(),
      open: d,
      onOpenToggle: s.useCallback(() => l((m) => !m), [l]),
      children: p.jsx(M.div, {
        "data-state": ln(d),
        "data-disabled": a ? "" : void 0,
        ...i,
        ref: t,
      }),
    });
  });
Lo.displayName = yt;
var Fo = "CollapsibleTrigger",
  Bo = s.forwardRef((e, t) => {
    const { __scopeCollapsible: n, ...o } = e,
      r = sn(Fo, n);
    return p.jsx(M.button, {
      type: "button",
      "aria-controls": r.contentId,
      "aria-expanded": r.open || !1,
      "data-state": ln(r.open),
      "data-disabled": r.disabled ? "" : void 0,
      disabled: r.disabled,
      ...o,
      ref: t,
      onClick: _(e.onClick, r.onOpenToggle),
    });
  });
Bo.displayName = Fo;
var cn = "CollapsibleContent",
  $o = s.forwardRef((e, t) => {
    const { forceMount: n, ...o } = e,
      r = sn(cn, e.__scopeCollapsible);
    return p.jsx(Pe, {
      present: n || r.open,
      children: ({ present: a }) => p.jsx(Gi, { ...o, ref: t, present: a }),
    });
  });
$o.displayName = cn;
var Gi = s.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...a } = e,
    c = sn(cn, n),
    [i, d] = s.useState(o),
    l = s.useRef(null),
    m = G(t, l),
    g = s.useRef(0),
    w = g.current,
    f = s.useRef(0),
    E = f.current,
    u = c.open || i,
    v = s.useRef(u),
    b = s.useRef(void 0);
  return (
    s.useEffect(() => {
      const h = requestAnimationFrame(() => (v.current = !1));
      return () => cancelAnimationFrame(h);
    }, []),
    ne(() => {
      const h = l.current;
      if (h) {
        ((b.current = b.current || {
          transitionDuration: h.style.transitionDuration,
          animationName: h.style.animationName,
        }),
          (h.style.transitionDuration = "0s"),
          (h.style.animationName = "none"));
        const y = h.getBoundingClientRect();
        ((g.current = y.height),
          (f.current = y.width),
          v.current ||
            ((h.style.transitionDuration = b.current.transitionDuration),
            (h.style.animationName = b.current.animationName)),
          d(o));
      }
    }, [c.open, o]),
    p.jsx(M.div, {
      "data-state": ln(c.open),
      "data-disabled": c.disabled ? "" : void 0,
      id: c.contentId,
      hidden: !u,
      ...a,
      ref: m,
      style: {
        "--radix-collapsible-content-height": w ? `${w}px` : void 0,
        "--radix-collapsible-content-width": E ? `${E}px` : void 0,
        ...e.style,
      },
      children: u && r,
    })
  );
});
function ln(e) {
  return e ? "open" : "closed";
}
var Xi = Lo,
  qi = Bo,
  Zi = $o,
  Qi = s.createContext(void 0);
function bt(e) {
  const t = s.useContext(Qi);
  return e || t || "ltr";
}
var he = "Accordion",
  Ji = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [dn, ec, tc] = ft(he),
  [wt, Il] = we(he, [tc, jo]),
  un = jo(),
  Vo = x.forwardRef((e, t) => {
    const { type: n, ...o } = e,
      r = o,
      a = o;
    return p.jsx(dn.Provider, {
      scope: e.__scopeAccordion,
      children:
        n === "multiple"
          ? p.jsx(ac, { ...a, ref: t })
          : p.jsx(rc, { ...r, ref: t }),
    });
  });
Vo.displayName = he;
var [Wo, nc] = wt(he),
  [Ho, oc] = wt(he, { collapsible: !1 }),
  rc = x.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: o,
        onValueChange: r = () => {},
        collapsible: a = !1,
        ...c
      } = e,
      [i, d] = be({ prop: n, defaultProp: o ?? "", onChange: r, caller: he });
    return p.jsx(Wo, {
      scope: e.__scopeAccordion,
      value: x.useMemo(() => (i ? [i] : []), [i]),
      onItemOpen: d,
      onItemClose: x.useCallback(() => a && d(""), [a, d]),
      children: p.jsx(Ho, {
        scope: e.__scopeAccordion,
        collapsible: a,
        children: p.jsx(Uo, { ...c, ref: t }),
      }),
    });
  }),
  ac = x.forwardRef((e, t) => {
    const { value: n, defaultValue: o, onValueChange: r = () => {}, ...a } = e,
      [c, i] = be({ prop: n, defaultProp: o ?? [], onChange: r, caller: he }),
      d = x.useCallback((m) => i((g = []) => [...g, m]), [i]),
      l = x.useCallback((m) => i((g = []) => g.filter((w) => w !== m)), [i]);
    return p.jsx(Wo, {
      scope: e.__scopeAccordion,
      value: c,
      onItemOpen: d,
      onItemClose: l,
      children: p.jsx(Ho, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: p.jsx(Uo, { ...a, ref: t }),
      }),
    });
  }),
  [sc, xt] = wt(he),
  Uo = x.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: o,
        dir: r,
        orientation: a = "vertical",
        ...c
      } = e,
      i = x.useRef(null),
      d = G(i, t),
      l = ec(n),
      g = bt(r) === "ltr",
      w = _(e.onKeyDown, (f) => {
        var N;
        if (!Ji.includes(f.key)) return;
        const E = f.target,
          u = l().filter((F) => {
            var X;
            return !((X = F.ref.current) != null && X.disabled);
          }),
          v = u.findIndex((F) => F.ref.current === E),
          b = u.length;
        if (v === -1) return;
        f.preventDefault();
        let h = v;
        const y = 0,
          C = b - 1,
          S = () => {
            ((h = v + 1), h > C && (h = y));
          },
          P = () => {
            ((h = v - 1), h < y && (h = C));
          };
        switch (f.key) {
          case "Home":
            h = y;
            break;
          case "End":
            h = C;
            break;
          case "ArrowRight":
            a === "horizontal" && (g ? S() : P());
            break;
          case "ArrowDown":
            a === "vertical" && S();
            break;
          case "ArrowLeft":
            a === "horizontal" && (g ? P() : S());
            break;
          case "ArrowUp":
            a === "vertical" && P();
            break;
        }
        const T = h % b;
        (N = u[T].ref.current) == null || N.focus();
      });
    return p.jsx(sc, {
      scope: n,
      disabled: o,
      direction: r,
      orientation: a,
      children: p.jsx(dn.Slot, {
        scope: n,
        children: p.jsx(M.div, {
          ...c,
          "data-orientation": a,
          ref: d,
          onKeyDown: o ? void 0 : w,
        }),
      }),
    });
  }),
  lt = "AccordionItem",
  [ic, fn] = wt(lt),
  Ko = x.forwardRef((e, t) => {
    const { __scopeAccordion: n, value: o, ...r } = e,
      a = xt(lt, n),
      c = nc(lt, n),
      i = un(n),
      d = ye(),
      l = (o && c.value.includes(o)) || !1,
      m = a.disabled || e.disabled;
    return p.jsx(ic, {
      scope: n,
      open: l,
      disabled: m,
      triggerId: d,
      children: p.jsx(Xi, {
        "data-orientation": a.orientation,
        "data-state": Zo(l),
        ...i,
        ...r,
        ref: t,
        disabled: m,
        open: l,
        onOpenChange: (g) => {
          g ? c.onItemOpen(o) : c.onItemClose(o);
        },
      }),
    });
  });
Ko.displayName = lt;
var zo = "AccordionHeader",
  Yo = x.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...o } = e,
      r = xt(he, n),
      a = fn(zo, n);
    return p.jsx(M.h3, {
      "data-orientation": r.orientation,
      "data-state": Zo(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      ...o,
      ref: t,
    });
  });
Yo.displayName = zo;
var Ut = "AccordionTrigger",
  Go = x.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...o } = e,
      r = xt(he, n),
      a = fn(Ut, n),
      c = oc(Ut, n),
      i = un(n);
    return p.jsx(dn.ItemSlot, {
      scope: n,
      children: p.jsx(qi, {
        "aria-disabled": (a.open && !c.collapsible) || void 0,
        "data-orientation": r.orientation,
        id: a.triggerId,
        ...i,
        ...o,
        ref: t,
      }),
    });
  });
Go.displayName = Ut;
var Xo = "AccordionContent",
  qo = x.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...o } = e,
      r = xt(he, n),
      a = fn(Xo, n),
      c = un(n);
    return p.jsx(Zi, {
      role: "region",
      "aria-labelledby": a.triggerId,
      "data-orientation": r.orientation,
      ...c,
      ...o,
      ref: t,
      style: {
        "--radix-accordion-content-height":
          "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width":
          "var(--radix-collapsible-content-width)",
        ...e.style,
      },
    });
  });
qo.displayName = Xo;
function Zo(e) {
  return e ? "open" : "closed";
}
var Nl = Vo,
  Al = Ko,
  _l = Yo,
  Ml = Go,
  Dl = qo;
function $n(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var cc = "Arrow",
  Qo = s.forwardRef((e, t) => {
    const { children: n, width: o = 10, height: r = 5, ...a } = e;
    return p.jsx(M.svg, {
      ...a,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Qo.displayName = cc;
var lc = Qo;
function Jo(e) {
  const [t, n] = s.useState(void 0);
  return (
    ne(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const o = new ResizeObserver((r) => {
          if (!Array.isArray(r) || !r.length) return;
          const a = r[0];
          let c, i;
          if ("borderBoxSize" in a) {
            const d = a.borderBoxSize,
              l = Array.isArray(d) ? d[0] : d;
            ((c = l.inlineSize), (i = l.blockSize));
          } else ((c = e.offsetWidth), (i = e.offsetHeight));
          n({ width: c, height: i });
        });
        return (o.observe(e, { box: "border-box" }), () => o.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var pn = "Popper",
  [er, tr] = we(pn),
  [dc, nr] = er(pn),
  or = (e) => {
    const { __scopePopper: t, children: n } = e,
      [o, r] = s.useState(null);
    return p.jsx(dc, { scope: t, anchor: o, onAnchorChange: r, children: n });
  };
or.displayName = pn;
var rr = "PopperAnchor",
  ar = s.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e,
      a = nr(rr, n),
      c = s.useRef(null),
      i = G(t, c);
    return (
      s.useEffect(() => {
        a.onAnchorChange((o == null ? void 0 : o.current) || c.current);
      }),
      o ? null : p.jsx(M.div, { ...r, ref: i })
    );
  });
ar.displayName = rr;
var mn = "PopperContent",
  [uc, fc] = er(mn),
  sr = s.forwardRef((e, t) => {
    var R, K, J, U, B, V;
    const {
        __scopePopper: n,
        side: o = "bottom",
        sideOffset: r = 0,
        align: a = "center",
        alignOffset: c = 0,
        arrowPadding: i = 0,
        avoidCollisions: d = !0,
        collisionBoundary: l = [],
        collisionPadding: m = 0,
        sticky: g = "partial",
        hideWhenDetached: w = !1,
        updatePositionStrategy: f = "optimized",
        onPlaced: E,
        ...u
      } = e,
      v = nr(mn, n),
      [b, h] = s.useState(null),
      y = G(t, (oe) => h(oe)),
      [C, S] = s.useState(null),
      P = Jo(C),
      T = (P == null ? void 0 : P.width) ?? 0,
      N = (P == null ? void 0 : P.height) ?? 0,
      F = o + (a !== "center" ? "-" + a : ""),
      X =
        typeof m == "number"
          ? m
          : { top: 0, right: 0, bottom: 0, left: 0, ...m },
      z = Array.isArray(l) ? l : [l],
      W = z.length > 0,
      Z = { padding: X, boundary: z.filter(mc), altBoundary: W },
      {
        refs: I,
        floatingStyles: $,
        placement: O,
        isPositioned: H,
        middlewareData: q,
      } = ha({
        strategy: "fixed",
        placement: F,
        whileElementsMounted: (...oe) =>
          ga(...oe, { animationFrame: f === "always" }),
        elements: { reference: v.anchor },
        middleware: [
          ya({ mainAxis: r + N, alignmentAxis: c }),
          d &&
            ba({
              mainAxis: !0,
              crossAxis: !1,
              limiter: g === "partial" ? Sa() : void 0,
              ...Z,
            }),
          d && wa({ ...Z }),
          xa({
            ...Z,
            apply: ({
              elements: oe,
              rects: ie,
              availableWidth: Ae,
              availableHeight: xe,
            }) => {
              const { width: _e, height: Ye } = ie.reference,
                Le = oe.floating.style;
              (Le.setProperty("--radix-popper-available-width", `${Ae}px`),
                Le.setProperty("--radix-popper-available-height", `${xe}px`),
                Le.setProperty("--radix-popper-anchor-width", `${_e}px`),
                Le.setProperty("--radix-popper-anchor-height", `${Ye}px`));
            },
          }),
          C && Ca({ element: C, padding: i }),
          vc({ arrowWidth: T, arrowHeight: N }),
          w && Ea({ strategy: "referenceHidden", ...Z }),
        ],
      }),
      [A, ee] = lr(O),
      re = le(E);
    ne(() => {
      H && (re == null || re());
    }, [H, re]);
    const k = (R = q.arrow) == null ? void 0 : R.x,
      j = (K = q.arrow) == null ? void 0 : K.y,
      L = ((J = q.arrow) == null ? void 0 : J.centerOffset) !== 0,
      [te, ae] = s.useState();
    return (
      ne(() => {
        b && ae(window.getComputedStyle(b).zIndex);
      }, [b]),
      p.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...$,
          transform: H ? $.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: te,
          "--radix-popper-transform-origin": [
            (U = q.transformOrigin) == null ? void 0 : U.x,
            (B = q.transformOrigin) == null ? void 0 : B.y,
          ].join(" "),
          ...(((V = q.hide) == null ? void 0 : V.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: p.jsx(uc, {
          scope: n,
          placedSide: A,
          onArrowChange: S,
          arrowX: k,
          arrowY: j,
          shouldHideArrow: L,
          children: p.jsx(M.div, {
            "data-side": A,
            "data-align": ee,
            ...u,
            ref: y,
            style: { ...u.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
sr.displayName = mn;
var ir = "PopperArrow",
  pc = { top: "bottom", right: "left", bottom: "top", left: "right" },
  cr = s.forwardRef(function (t, n) {
    const { __scopePopper: o, ...r } = t,
      a = fc(ir, o),
      c = pc[a.placedSide];
    return p.jsx("span", {
      ref: a.onArrowChange,
      style: {
        position: "absolute",
        left: a.arrowX,
        top: a.arrowY,
        [c]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[a.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[a.placedSide],
        visibility: a.shouldHideArrow ? "hidden" : void 0,
      },
      children: p.jsx(lc, {
        ...r,
        ref: n,
        style: { ...r.style, display: "block" },
      }),
    });
  });
cr.displayName = ir;
function mc(e) {
  return e !== null;
}
var vc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, b, h;
    const { placement: n, rects: o, middlewareData: r } = t,
      c = ((v = r.arrow) == null ? void 0 : v.centerOffset) !== 0,
      i = c ? 0 : e.arrowWidth,
      d = c ? 0 : e.arrowHeight,
      [l, m] = lr(n),
      g = { start: "0%", center: "50%", end: "100%" }[m],
      w = (((b = r.arrow) == null ? void 0 : b.x) ?? 0) + i / 2,
      f = (((h = r.arrow) == null ? void 0 : h.y) ?? 0) + d / 2;
    let E = "",
      u = "";
    return (
      l === "bottom"
        ? ((E = c ? g : `${w}px`), (u = `${-d}px`))
        : l === "top"
          ? ((E = c ? g : `${w}px`), (u = `${o.floating.height + d}px`))
          : l === "right"
            ? ((E = `${-d}px`), (u = c ? g : `${f}px`))
            : l === "left" &&
              ((E = `${o.floating.width + d}px`), (u = c ? g : `${f}px`)),
      { data: { x: E, y: u } }
    );
  },
});
function lr(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var hc = or,
  gc = ar,
  yc = sr,
  bc = cr;
function dr(e) {
  const t = s.useRef({ value: e, previous: e });
  return s.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var wc = [" ", "Enter", "ArrowUp", "ArrowDown"],
  xc = [" ", "Enter"],
  ke = "Select",
  [Ct, Et, Cc] = ft(ke),
  [ze, Ol] = we(ke, [Cc, tr]),
  St = tr(),
  [Ec, Ie] = ze(ke),
  [Sc, Tc] = ze(ke),
  ur = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: o,
        defaultOpen: r,
        onOpenChange: a,
        value: c,
        defaultValue: i,
        onValueChange: d,
        dir: l,
        name: m,
        autoComplete: g,
        disabled: w,
        required: f,
        form: E,
      } = e,
      u = St(t),
      [v, b] = s.useState(null),
      [h, y] = s.useState(null),
      [C, S] = s.useState(!1),
      P = bt(l),
      [T, N] = be({ prop: o, defaultProp: r ?? !1, onChange: a, caller: ke }),
      [F, X] = be({ prop: c, defaultProp: i, onChange: d, caller: ke }),
      z = s.useRef(null),
      W = v ? E || !!v.closest("form") : !0,
      [Z, I] = s.useState(new Set()),
      $ = Array.from(Z)
        .map((O) => O.props.value)
        .join(";");
    return p.jsx(hc, {
      ...u,
      children: p.jsxs(Ec, {
        required: f,
        scope: t,
        trigger: v,
        onTriggerChange: b,
        valueNode: h,
        onValueNodeChange: y,
        valueNodeHasChildren: C,
        onValueNodeHasChildrenChange: S,
        contentId: ye(),
        value: F,
        onValueChange: X,
        open: T,
        onOpenChange: N,
        dir: P,
        triggerPointerDownPosRef: z,
        disabled: w,
        children: [
          p.jsx(Ct.Provider, {
            scope: t,
            children: p.jsx(Sc, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: s.useCallback((O) => {
                I((H) => new Set(H).add(O));
              }, []),
              onNativeOptionRemove: s.useCallback((O) => {
                I((H) => {
                  const q = new Set(H);
                  return (q.delete(O), q);
                });
              }, []),
              children: n,
            }),
          }),
          W
            ? p.jsxs(
                kr,
                {
                  "aria-hidden": !0,
                  required: f,
                  tabIndex: -1,
                  name: m,
                  autoComplete: g,
                  value: F,
                  onChange: (O) => X(O.target.value),
                  disabled: w,
                  form: E,
                  children: [
                    F === void 0 ? p.jsx("option", { value: "" }) : null,
                    Array.from(Z),
                  ],
                },
                $,
              )
            : null,
        ],
      }),
    });
  };
ur.displayName = ke;
var fr = "SelectTrigger",
  pr = s.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e,
      a = St(n),
      c = Ie(fr, n),
      i = c.disabled || o,
      d = G(t, c.onTriggerChange),
      l = Et(n),
      m = s.useRef("touch"),
      [g, w, f] = Lr((u) => {
        const v = l().filter((y) => !y.disabled),
          b = v.find((y) => y.value === c.value),
          h = Fr(v, u, b);
        h !== void 0 && c.onValueChange(h.value);
      }),
      E = (u) => {
        (i || (c.onOpenChange(!0), f()),
          u &&
            (c.triggerPointerDownPosRef.current = {
              x: Math.round(u.pageX),
              y: Math.round(u.pageY),
            }));
      };
    return p.jsx(gc, {
      asChild: !0,
      ...a,
      children: p.jsx(M.button, {
        type: "button",
        role: "combobox",
        "aria-controls": c.contentId,
        "aria-expanded": c.open,
        "aria-required": c.required,
        "aria-autocomplete": "none",
        dir: c.dir,
        "data-state": c.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": jr(c.value) ? "" : void 0,
        ...r,
        ref: d,
        onClick: _(r.onClick, (u) => {
          (u.currentTarget.focus(), m.current !== "mouse" && E(u));
        }),
        onPointerDown: _(r.onPointerDown, (u) => {
          m.current = u.pointerType;
          const v = u.target;
          (v.hasPointerCapture(u.pointerId) &&
            v.releasePointerCapture(u.pointerId),
            u.button === 0 &&
              u.ctrlKey === !1 &&
              u.pointerType === "mouse" &&
              (E(u), u.preventDefault()));
        }),
        onKeyDown: _(r.onKeyDown, (u) => {
          const v = g.current !== "";
          (!(u.ctrlKey || u.altKey || u.metaKey) &&
            u.key.length === 1 &&
            w(u.key),
            !(v && u.key === " ") &&
              wc.includes(u.key) &&
              (E(), u.preventDefault()));
        }),
      }),
    });
  });
pr.displayName = fr;
var mr = "SelectValue",
  vr = s.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: o,
        style: r,
        children: a,
        placeholder: c = "",
        ...i
      } = e,
      d = Ie(mr, n),
      { onValueNodeHasChildrenChange: l } = d,
      m = a !== void 0,
      g = G(t, d.onValueNodeChange);
    return (
      ne(() => {
        l(m);
      }, [l, m]),
      p.jsx(M.span, {
        ...i,
        ref: g,
        style: { pointerEvents: "none" },
        children: jr(d.value) ? p.jsx(p.Fragment, { children: c }) : a,
      })
    );
  });
vr.displayName = mr;
var Rc = "SelectIcon",
  hr = s.forwardRef((e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return p.jsx(M.span, {
      "aria-hidden": !0,
      ...r,
      ref: t,
      children: o || "▼",
    });
  });
hr.displayName = Rc;
var Pc = "SelectPortal",
  gr = (e) => p.jsx(mt, { asChild: !0, ...e });
gr.displayName = Pc;
var je = "SelectContent",
  yr = s.forwardRef((e, t) => {
    const n = Ie(je, e.__scopeSelect),
      [o, r] = s.useState();
    if (
      (ne(() => {
        r(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const a = o;
      return a
        ? ut.createPortal(
            p.jsx(br, {
              scope: e.__scopeSelect,
              children: p.jsx(Ct.Slot, {
                scope: e.__scopeSelect,
                children: p.jsx("div", { children: e.children }),
              }),
            }),
            a,
          )
        : null;
    }
    return p.jsx(wr, { ...e, ref: t });
  });
yr.displayName = je;
var me = 10,
  [br, Ne] = ze(je),
  Ic = "SelectContentImpl",
  Nc = Ke("SelectContent.RemoveScroll"),
  wr = s.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: o = "item-aligned",
        onCloseAutoFocus: r,
        onEscapeKeyDown: a,
        onPointerDownOutside: c,
        side: i,
        sideOffset: d,
        align: l,
        alignOffset: m,
        arrowPadding: g,
        collisionBoundary: w,
        collisionPadding: f,
        sticky: E,
        hideWhenDetached: u,
        avoidCollisions: v,
        ...b
      } = e,
      h = Ie(je, n),
      [y, C] = s.useState(null),
      [S, P] = s.useState(null),
      T = G(t, (R) => C(R)),
      [N, F] = s.useState(null),
      [X, z] = s.useState(null),
      W = Et(n),
      [Z, I] = s.useState(!1),
      $ = s.useRef(!1);
    (s.useEffect(() => {
      if (y) return bo(y);
    }, [y]),
      lo());
    const O = s.useCallback(
        (R) => {
          const [K, ...J] = W().map((V) => V.ref.current),
            [U] = J.slice(-1),
            B = document.activeElement;
          for (const V of R)
            if (
              V === B ||
              (V == null || V.scrollIntoView({ block: "nearest" }),
              V === K && S && (S.scrollTop = 0),
              V === U && S && (S.scrollTop = S.scrollHeight),
              V == null || V.focus(),
              document.activeElement !== B)
            )
              return;
        },
        [W, S],
      ),
      H = s.useCallback(() => O([N, y]), [O, N, y]);
    s.useEffect(() => {
      Z && H();
    }, [Z, H]);
    const { onOpenChange: q, triggerPointerDownPosRef: A } = h;
    (s.useEffect(() => {
      if (y) {
        let R = { x: 0, y: 0 };
        const K = (U) => {
            var B, V;
            R = {
              x: Math.abs(
                Math.round(U.pageX) -
                  (((B = A.current) == null ? void 0 : B.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(U.pageY) -
                  (((V = A.current) == null ? void 0 : V.y) ?? 0),
              ),
            };
          },
          J = (U) => {
            (R.x <= 10 && R.y <= 10
              ? U.preventDefault()
              : y.contains(U.target) || q(!1),
              document.removeEventListener("pointermove", K),
              (A.current = null));
          };
        return (
          A.current !== null &&
            (document.addEventListener("pointermove", K),
            document.addEventListener("pointerup", J, {
              capture: !0,
              once: !0,
            })),
          () => {
            (document.removeEventListener("pointermove", K),
              document.removeEventListener("pointerup", J, { capture: !0 }));
          }
        );
      }
    }, [y, q, A]),
      s.useEffect(() => {
        const R = () => q(!1);
        return (
          window.addEventListener("blur", R),
          window.addEventListener("resize", R),
          () => {
            (window.removeEventListener("blur", R),
              window.removeEventListener("resize", R));
          }
        );
      }, [q]));
    const [ee, re] = Lr((R) => {
        const K = W().filter((B) => !B.disabled),
          J = K.find((B) => B.ref.current === document.activeElement),
          U = Fr(K, R, J);
        U && setTimeout(() => U.ref.current.focus());
      }),
      k = s.useCallback(
        (R, K, J) => {
          const U = !$.current && !J;
          ((h.value !== void 0 && h.value === K) || U) &&
            (F(R), U && ($.current = !0));
        },
        [h.value],
      ),
      j = s.useCallback(() => (y == null ? void 0 : y.focus()), [y]),
      L = s.useCallback(
        (R, K, J) => {
          const U = !$.current && !J;
          ((h.value !== void 0 && h.value === K) || U) && z(R);
        },
        [h.value],
      ),
      te = o === "popper" ? Kt : xr,
      ae =
        te === Kt
          ? {
              side: i,
              sideOffset: d,
              align: l,
              alignOffset: m,
              arrowPadding: g,
              collisionBoundary: w,
              collisionPadding: f,
              sticky: E,
              hideWhenDetached: u,
              avoidCollisions: v,
            }
          : {};
    return p.jsx(br, {
      scope: n,
      content: y,
      viewport: S,
      onViewportChange: P,
      itemRefCallback: k,
      selectedItem: N,
      onItemLeave: j,
      itemTextRefCallback: L,
      focusSelectedItem: H,
      selectedItemText: X,
      position: o,
      isPositioned: Z,
      searchRef: ee,
      children: p.jsx(nn, {
        as: Nc,
        allowPinchZoom: !0,
        children: p.jsx(tn, {
          asChild: !0,
          trapped: h.open,
          onMountAutoFocus: (R) => {
            R.preventDefault();
          },
          onUnmountAutoFocus: _(r, (R) => {
            var K;
            ((K = h.trigger) == null || K.focus({ preventScroll: !0 }),
              R.preventDefault());
          }),
          children: p.jsx(pt, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: a,
            onPointerDownOutside: c,
            onFocusOutside: (R) => R.preventDefault(),
            onDismiss: () => h.onOpenChange(!1),
            children: p.jsx(te, {
              role: "listbox",
              id: h.contentId,
              "data-state": h.open ? "open" : "closed",
              dir: h.dir,
              onContextMenu: (R) => R.preventDefault(),
              ...b,
              ...ae,
              onPlaced: () => I(!0),
              ref: T,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...b.style,
              },
              onKeyDown: _(b.onKeyDown, (R) => {
                const K = R.ctrlKey || R.altKey || R.metaKey;
                if (
                  (R.key === "Tab" && R.preventDefault(),
                  !K && R.key.length === 1 && re(R.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(R.key))
                ) {
                  let U = W()
                    .filter((B) => !B.disabled)
                    .map((B) => B.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(R.key) &&
                      (U = U.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(R.key))
                  ) {
                    const B = R.target,
                      V = U.indexOf(B);
                    U = U.slice(V + 1);
                  }
                  (setTimeout(() => O(U)), R.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
wr.displayName = Ic;
var Ac = "SelectItemAlignedPosition",
  xr = s.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: o, ...r } = e,
      a = Ie(je, n),
      c = Ne(je, n),
      [i, d] = s.useState(null),
      [l, m] = s.useState(null),
      g = G(t, (T) => m(T)),
      w = Et(n),
      f = s.useRef(!1),
      E = s.useRef(!0),
      {
        viewport: u,
        selectedItem: v,
        selectedItemText: b,
        focusSelectedItem: h,
      } = c,
      y = s.useCallback(() => {
        if (a.trigger && a.valueNode && i && l && u && v && b) {
          const T = a.trigger.getBoundingClientRect(),
            N = l.getBoundingClientRect(),
            F = a.valueNode.getBoundingClientRect(),
            X = b.getBoundingClientRect();
          if (a.dir !== "rtl") {
            const B = X.left - N.left,
              V = F.left - B,
              oe = T.left - V,
              ie = T.width + oe,
              Ae = Math.max(ie, N.width),
              xe = window.innerWidth - me,
              _e = $n(V, [me, Math.max(me, xe - Ae)]);
            ((i.style.minWidth = ie + "px"), (i.style.left = _e + "px"));
          } else {
            const B = N.right - X.right,
              V = window.innerWidth - F.right - B,
              oe = window.innerWidth - T.right - V,
              ie = T.width + oe,
              Ae = Math.max(ie, N.width),
              xe = window.innerWidth - me,
              _e = $n(V, [me, Math.max(me, xe - Ae)]);
            ((i.style.minWidth = ie + "px"), (i.style.right = _e + "px"));
          }
          const z = w(),
            W = window.innerHeight - me * 2,
            Z = u.scrollHeight,
            I = window.getComputedStyle(l),
            $ = parseInt(I.borderTopWidth, 10),
            O = parseInt(I.paddingTop, 10),
            H = parseInt(I.borderBottomWidth, 10),
            q = parseInt(I.paddingBottom, 10),
            A = $ + O + Z + q + H,
            ee = Math.min(v.offsetHeight * 5, A),
            re = window.getComputedStyle(u),
            k = parseInt(re.paddingTop, 10),
            j = parseInt(re.paddingBottom, 10),
            L = T.top + T.height / 2 - me,
            te = W - L,
            ae = v.offsetHeight / 2,
            R = v.offsetTop + ae,
            K = $ + O + R,
            J = A - K;
          if (K <= L) {
            const B = z.length > 0 && v === z[z.length - 1].ref.current;
            i.style.bottom = "0px";
            const V = l.clientHeight - u.offsetTop - u.offsetHeight,
              oe = Math.max(te, ae + (B ? j : 0) + V + H),
              ie = K + oe;
            i.style.height = ie + "px";
          } else {
            const B = z.length > 0 && v === z[0].ref.current;
            i.style.top = "0px";
            const oe = Math.max(L, $ + u.offsetTop + (B ? k : 0) + ae) + J;
            ((i.style.height = oe + "px"), (u.scrollTop = K - L + u.offsetTop));
          }
          ((i.style.margin = `${me}px 0`),
            (i.style.minHeight = ee + "px"),
            (i.style.maxHeight = W + "px"),
            o == null || o(),
            requestAnimationFrame(() => (f.current = !0)));
        }
      }, [w, a.trigger, a.valueNode, i, l, u, v, b, a.dir, o]);
    ne(() => y(), [y]);
    const [C, S] = s.useState();
    ne(() => {
      l && S(window.getComputedStyle(l).zIndex);
    }, [l]);
    const P = s.useCallback(
      (T) => {
        T && E.current === !0 && (y(), h == null || h(), (E.current = !1));
      },
      [y, h],
    );
    return p.jsx(Mc, {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: f,
      onScrollButtonChange: P,
      children: p.jsx("div", {
        ref: d,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: C,
        },
        children: p.jsx(M.div, {
          ...r,
          ref: g,
          style: { boxSizing: "border-box", maxHeight: "100%", ...r.style },
        }),
      }),
    });
  });
xr.displayName = Ac;
var _c = "SelectPopperPosition",
  Kt = s.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: o = "start",
        collisionPadding: r = me,
        ...a
      } = e,
      c = St(n);
    return p.jsx(yc, {
      ...c,
      ...a,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Kt.displayName = _c;
var [Mc, vn] = ze(je, {}),
  zt = "SelectViewport",
  Cr = s.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e,
      a = Ne(zt, n),
      c = vn(zt, n),
      i = G(t, a.onViewportChange),
      d = s.useRef(0);
    return p.jsxs(p.Fragment, {
      children: [
        p.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: o,
        }),
        p.jsx(Ct.Slot, {
          scope: n,
          children: p.jsx(M.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...r,
            ref: i,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...r.style,
            },
            onScroll: _(r.onScroll, (l) => {
              const m = l.currentTarget,
                { contentWrapper: g, shouldExpandOnScrollRef: w } = c;
              if (w != null && w.current && g) {
                const f = Math.abs(d.current - m.scrollTop);
                if (f > 0) {
                  const E = window.innerHeight - me * 2,
                    u = parseFloat(g.style.minHeight),
                    v = parseFloat(g.style.height),
                    b = Math.max(u, v);
                  if (b < E) {
                    const h = b + f,
                      y = Math.min(E, h),
                      C = h - y;
                    ((g.style.height = y + "px"),
                      g.style.bottom === "0px" &&
                        ((m.scrollTop = C > 0 ? C : 0),
                        (g.style.justifyContent = "flex-end")));
                  }
                }
              }
              d.current = m.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Cr.displayName = zt;
var Er = "SelectGroup",
  [Dc, Oc] = ze(Er),
  kc = s.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = ye();
    return p.jsx(Dc, {
      scope: n,
      id: r,
      children: p.jsx(M.div, {
        role: "group",
        "aria-labelledby": r,
        ...o,
        ref: t,
      }),
    });
  });
kc.displayName = Er;
var Sr = "SelectLabel",
  Tr = s.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = Oc(Sr, n);
    return p.jsx(M.div, { id: r.id, ...o, ref: t });
  });
Tr.displayName = Sr;
var dt = "SelectItem",
  [jc, Rr] = ze(dt),
  Pr = s.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: o,
        disabled: r = !1,
        textValue: a,
        ...c
      } = e,
      i = Ie(dt, n),
      d = Ne(dt, n),
      l = i.value === o,
      [m, g] = s.useState(a ?? ""),
      [w, f] = s.useState(!1),
      E = G(t, (h) => {
        var y;
        return (y = d.itemRefCallback) == null ? void 0 : y.call(d, h, o, r);
      }),
      u = ye(),
      v = s.useRef("touch"),
      b = () => {
        r || (i.onValueChange(o), i.onOpenChange(!1));
      };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return p.jsx(jc, {
      scope: n,
      value: o,
      disabled: r,
      textId: u,
      isSelected: l,
      onItemTextChange: s.useCallback((h) => {
        g((y) => y || ((h == null ? void 0 : h.textContent) ?? "").trim());
      }, []),
      children: p.jsx(Ct.ItemSlot, {
        scope: n,
        value: o,
        disabled: r,
        textValue: m,
        children: p.jsx(M.div, {
          role: "option",
          "aria-labelledby": u,
          "data-highlighted": w ? "" : void 0,
          "aria-selected": l && w,
          "data-state": l ? "checked" : "unchecked",
          "aria-disabled": r || void 0,
          "data-disabled": r ? "" : void 0,
          tabIndex: r ? void 0 : -1,
          ...c,
          ref: E,
          onFocus: _(c.onFocus, () => f(!0)),
          onBlur: _(c.onBlur, () => f(!1)),
          onClick: _(c.onClick, () => {
            v.current !== "mouse" && b();
          }),
          onPointerUp: _(c.onPointerUp, () => {
            v.current === "mouse" && b();
          }),
          onPointerDown: _(c.onPointerDown, (h) => {
            v.current = h.pointerType;
          }),
          onPointerMove: _(c.onPointerMove, (h) => {
            var y;
            ((v.current = h.pointerType),
              r
                ? (y = d.onItemLeave) == null || y.call(d)
                : v.current === "mouse" &&
                  h.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: _(c.onPointerLeave, (h) => {
            var y;
            h.currentTarget === document.activeElement &&
              ((y = d.onItemLeave) == null || y.call(d));
          }),
          onKeyDown: _(c.onKeyDown, (h) => {
            var C;
            (((C = d.searchRef) == null ? void 0 : C.current) !== "" &&
              h.key === " ") ||
              (xc.includes(h.key) && b(), h.key === " " && h.preventDefault());
          }),
        }),
      }),
    });
  });
Pr.displayName = dt;
var Xe = "SelectItemText",
  Ir = s.forwardRef((e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...a } = e,
      c = Ie(Xe, n),
      i = Ne(Xe, n),
      d = Rr(Xe, n),
      l = Tc(Xe, n),
      [m, g] = s.useState(null),
      w = G(
        t,
        (b) => g(b),
        d.onItemTextChange,
        (b) => {
          var h;
          return (h = i.itemTextRefCallback) == null
            ? void 0
            : h.call(i, b, d.value, d.disabled);
        },
      ),
      f = m == null ? void 0 : m.textContent,
      E = s.useMemo(
        () =>
          p.jsx(
            "option",
            { value: d.value, disabled: d.disabled, children: f },
            d.value,
          ),
        [d.disabled, d.value, f],
      ),
      { onNativeOptionAdd: u, onNativeOptionRemove: v } = l;
    return (
      ne(() => (u(E), () => v(E)), [u, v, E]),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(M.span, { id: d.textId, ...a, ref: w }),
          d.isSelected && c.valueNode && !c.valueNodeHasChildren
            ? ut.createPortal(a.children, c.valueNode)
            : null,
        ],
      })
    );
  });
Ir.displayName = Xe;
var Nr = "SelectItemIndicator",
  Ar = s.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return Rr(Nr, n).isSelected
      ? p.jsx(M.span, { "aria-hidden": !0, ...o, ref: t })
      : null;
  });
Ar.displayName = Nr;
var Yt = "SelectScrollUpButton",
  _r = s.forwardRef((e, t) => {
    const n = Ne(Yt, e.__scopeSelect),
      o = vn(Yt, e.__scopeSelect),
      [r, a] = s.useState(!1),
      c = G(t, o.onScrollButtonChange);
    return (
      ne(() => {
        if (n.viewport && n.isPositioned) {
          let i = function () {
            const l = d.scrollTop > 0;
            a(l);
          };
          const d = n.viewport;
          return (
            i(),
            d.addEventListener("scroll", i),
            () => d.removeEventListener("scroll", i)
          );
        }
      }, [n.viewport, n.isPositioned]),
      r
        ? p.jsx(Dr, {
            ...e,
            ref: c,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: d } = n;
              i && d && (i.scrollTop = i.scrollTop - d.offsetHeight);
            },
          })
        : null
    );
  });
_r.displayName = Yt;
var Gt = "SelectScrollDownButton",
  Mr = s.forwardRef((e, t) => {
    const n = Ne(Gt, e.__scopeSelect),
      o = vn(Gt, e.__scopeSelect),
      [r, a] = s.useState(!1),
      c = G(t, o.onScrollButtonChange);
    return (
      ne(() => {
        if (n.viewport && n.isPositioned) {
          let i = function () {
            const l = d.scrollHeight - d.clientHeight,
              m = Math.ceil(d.scrollTop) < l;
            a(m);
          };
          const d = n.viewport;
          return (
            i(),
            d.addEventListener("scroll", i),
            () => d.removeEventListener("scroll", i)
          );
        }
      }, [n.viewport, n.isPositioned]),
      r
        ? p.jsx(Dr, {
            ...e,
            ref: c,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: d } = n;
              i && d && (i.scrollTop = i.scrollTop + d.offsetHeight);
            },
          })
        : null
    );
  });
Mr.displayName = Gt;
var Dr = s.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: o, ...r } = e,
      a = Ne("SelectScrollButton", n),
      c = s.useRef(null),
      i = Et(n),
      d = s.useCallback(() => {
        c.current !== null &&
          (window.clearInterval(c.current), (c.current = null));
      }, []);
    return (
      s.useEffect(() => () => d(), [d]),
      ne(() => {
        var m;
        const l = i().find((g) => g.ref.current === document.activeElement);
        (m = l == null ? void 0 : l.ref.current) == null ||
          m.scrollIntoView({ block: "nearest" });
      }, [i]),
      p.jsx(M.div, {
        "aria-hidden": !0,
        ...r,
        ref: t,
        style: { flexShrink: 0, ...r.style },
        onPointerDown: _(r.onPointerDown, () => {
          c.current === null && (c.current = window.setInterval(o, 50));
        }),
        onPointerMove: _(r.onPointerMove, () => {
          var l;
          ((l = a.onItemLeave) == null || l.call(a),
            c.current === null && (c.current = window.setInterval(o, 50)));
        }),
        onPointerLeave: _(r.onPointerLeave, () => {
          d();
        }),
      })
    );
  }),
  Lc = "SelectSeparator",
  Or = s.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return p.jsx(M.div, { "aria-hidden": !0, ...o, ref: t });
  });
Or.displayName = Lc;
var Xt = "SelectArrow",
  Fc = s.forwardRef((e, t) => {
    const { __scopeSelect: n, ...o } = e,
      r = St(n),
      a = Ie(Xt, n),
      c = Ne(Xt, n);
    return a.open && c.position === "popper"
      ? p.jsx(bc, { ...r, ...o, ref: t })
      : null;
  });
Fc.displayName = Xt;
var Bc = "SelectBubbleInput",
  kr = s.forwardRef(({ __scopeSelect: e, value: t, ...n }, o) => {
    const r = s.useRef(null),
      a = G(o, r),
      c = dr(t);
    return (
      s.useEffect(() => {
        const i = r.current;
        if (!i) return;
        const d = window.HTMLSelectElement.prototype,
          m = Object.getOwnPropertyDescriptor(d, "value").set;
        if (c !== t && m) {
          const g = new Event("change", { bubbles: !0 });
          (m.call(i, t), i.dispatchEvent(g));
        }
      }, [c, t]),
      p.jsx(M.select, {
        ...n,
        style: { ...Gn, ...n.style },
        ref: a,
        defaultValue: t,
      })
    );
  });
kr.displayName = Bc;
function jr(e) {
  return e === "" || e === void 0;
}
function Lr(e) {
  const t = le(e),
    n = s.useRef(""),
    o = s.useRef(0),
    r = s.useCallback(
      (c) => {
        const i = n.current + c;
        (t(i),
          (function d(l) {
            ((n.current = l),
              window.clearTimeout(o.current),
              l !== "" && (o.current = window.setTimeout(() => d(""), 1e3)));
          })(i));
      },
      [t],
    ),
    a = s.useCallback(() => {
      ((n.current = ""), window.clearTimeout(o.current));
    }, []);
  return (
    s.useEffect(() => () => window.clearTimeout(o.current), []),
    [n, r, a]
  );
}
function Fr(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t,
    a = n ? e.indexOf(n) : -1;
  let c = $c(e, Math.max(a, 0));
  r.length === 1 && (c = c.filter((l) => l !== n));
  const d = c.find((l) =>
    l.textValue.toLowerCase().startsWith(r.toLowerCase()),
  );
  return d !== n ? d : void 0;
}
function $c(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var kl = ur,
  jl = pr,
  Ll = vr,
  Fl = hr,
  Bl = gr,
  $l = yr,
  Vl = Cr,
  Wl = Tr,
  Hl = Pr,
  Ul = Ir,
  Kl = Ar,
  zl = _r,
  Yl = Mr,
  Gl = Or,
  Tt = "Checkbox",
  [Vc, Xl] = we(Tt),
  [Wc, hn] = Vc(Tt);
function Hc(e) {
  const {
      __scopeCheckbox: t,
      checked: n,
      children: o,
      defaultChecked: r,
      disabled: a,
      form: c,
      name: i,
      onCheckedChange: d,
      required: l,
      value: m = "on",
      internal_do_not_use_render: g,
    } = e,
    [w, f] = be({ prop: n, defaultProp: r ?? !1, onChange: d, caller: Tt }),
    [E, u] = s.useState(null),
    [v, b] = s.useState(null),
    h = s.useRef(!1),
    y = E ? !!c || !!E.closest("form") : !0,
    C = {
      checked: w,
      disabled: a,
      setChecked: f,
      control: E,
      setControl: u,
      name: i,
      form: c,
      value: m,
      hasConsumerStoppedPropagationRef: h,
      required: l,
      defaultChecked: Re(r) ? !1 : r,
      isFormControl: y,
      bubbleInput: v,
      setBubbleInput: b,
    };
  return p.jsx(Wc, { scope: t, ...C, children: zc(g) ? g(C) : o });
}
var Br = "CheckboxTrigger",
  $r = s.forwardRef(
    ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...o }, r) => {
      const {
          control: a,
          value: c,
          disabled: i,
          checked: d,
          required: l,
          setControl: m,
          setChecked: g,
          hasConsumerStoppedPropagationRef: w,
          isFormControl: f,
          bubbleInput: E,
        } = hn(Br, e),
        u = G(r, m),
        v = s.useRef(d);
      return (
        s.useEffect(() => {
          const b = a == null ? void 0 : a.form;
          if (b) {
            const h = () => g(v.current);
            return (
              b.addEventListener("reset", h),
              () => b.removeEventListener("reset", h)
            );
          }
        }, [a, g]),
        p.jsx(M.button, {
          type: "button",
          role: "checkbox",
          "aria-checked": Re(d) ? "mixed" : d,
          "aria-required": l,
          "data-state": Ur(d),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...o,
          ref: u,
          onKeyDown: _(t, (b) => {
            b.key === "Enter" && b.preventDefault();
          }),
          onClick: _(n, (b) => {
            (g((h) => (Re(h) ? !0 : !h)),
              E &&
                f &&
                ((w.current = b.isPropagationStopped()),
                w.current || b.stopPropagation()));
          }),
        })
      );
    },
  );
$r.displayName = Br;
var Uc = s.forwardRef((e, t) => {
  const {
    __scopeCheckbox: n,
    name: o,
    checked: r,
    defaultChecked: a,
    required: c,
    disabled: i,
    value: d,
    onCheckedChange: l,
    form: m,
    ...g
  } = e;
  return p.jsx(Hc, {
    __scopeCheckbox: n,
    checked: r,
    defaultChecked: a,
    disabled: i,
    required: c,
    onCheckedChange: l,
    name: o,
    form: m,
    value: d,
    internal_do_not_use_render: ({ isFormControl: w }) =>
      p.jsxs(p.Fragment, {
        children: [
          p.jsx($r, { ...g, ref: t, __scopeCheckbox: n }),
          w && p.jsx(Hr, { __scopeCheckbox: n }),
        ],
      }),
  });
});
Uc.displayName = Tt;
var Vr = "CheckboxIndicator",
  Kc = s.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...r } = e,
      a = hn(Vr, n);
    return p.jsx(Pe, {
      present: o || Re(a.checked) || a.checked === !0,
      children: p.jsx(M.span, {
        "data-state": Ur(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
Kc.displayName = Vr;
var Wr = "CheckboxBubbleInput",
  Hr = s.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
    const {
        control: o,
        hasConsumerStoppedPropagationRef: r,
        checked: a,
        defaultChecked: c,
        required: i,
        disabled: d,
        name: l,
        value: m,
        form: g,
        bubbleInput: w,
        setBubbleInput: f,
      } = hn(Wr, e),
      E = G(n, f),
      u = dr(a),
      v = Jo(o);
    s.useEffect(() => {
      const h = w;
      if (!h) return;
      const y = window.HTMLInputElement.prototype,
        S = Object.getOwnPropertyDescriptor(y, "checked").set,
        P = !r.current;
      if (u !== a && S) {
        const T = new Event("click", { bubbles: P });
        ((h.indeterminate = Re(a)),
          S.call(h, Re(a) ? !1 : a),
          h.dispatchEvent(T));
      }
    }, [w, u, a, r]);
    const b = s.useRef(Re(a) ? !1 : a);
    return p.jsx(M.input, {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: c ?? b.current,
      required: i,
      disabled: d,
      name: l,
      value: m,
      form: g,
      ...t,
      tabIndex: -1,
      ref: E,
      style: {
        ...t.style,
        ...v,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)",
      },
    });
  });
Hr.displayName = Wr;
function zc(e) {
  return typeof e == "function";
}
function Re(e) {
  return e === "indeterminate";
}
function Ur(e) {
  return Re(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Lt = "rovingFocusGroup.onEntryFocus",
  Yc = { bubbles: !1, cancelable: !0 },
  Ze = "RovingFocusGroup",
  [qt, Kr, Gc] = ft(Ze),
  [Xc, zr] = we(Ze, [Gc]),
  [qc, Zc] = Xc(Ze),
  Yr = s.forwardRef((e, t) =>
    p.jsx(qt.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: p.jsx(qt.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: p.jsx(Qc, { ...e, ref: t }),
      }),
    }),
  );
Yr.displayName = Ze;
var Qc = s.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: o,
        loop: r = !1,
        dir: a,
        currentTabStopId: c,
        defaultCurrentTabStopId: i,
        onCurrentTabStopIdChange: d,
        onEntryFocus: l,
        preventScrollOnEntryFocus: m = !1,
        ...g
      } = e,
      w = s.useRef(null),
      f = G(t, w),
      E = bt(a),
      [u, v] = be({ prop: c, defaultProp: i ?? null, onChange: d, caller: Ze }),
      [b, h] = s.useState(!1),
      y = le(l),
      C = Kr(n),
      S = s.useRef(!1),
      [P, T] = s.useState(0);
    return (
      s.useEffect(() => {
        const N = w.current;
        if (N)
          return (
            N.addEventListener(Lt, y),
            () => N.removeEventListener(Lt, y)
          );
      }, [y]),
      p.jsx(qc, {
        scope: n,
        orientation: o,
        dir: E,
        loop: r,
        currentTabStopId: u,
        onItemFocus: s.useCallback((N) => v(N), [v]),
        onItemShiftTab: s.useCallback(() => h(!0), []),
        onFocusableItemAdd: s.useCallback(() => T((N) => N + 1), []),
        onFocusableItemRemove: s.useCallback(() => T((N) => N - 1), []),
        children: p.jsx(M.div, {
          tabIndex: b || P === 0 ? -1 : 0,
          "data-orientation": o,
          ...g,
          ref: f,
          style: { outline: "none", ...e.style },
          onMouseDown: _(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: _(e.onFocus, (N) => {
            const F = !S.current;
            if (N.target === N.currentTarget && F && !b) {
              const X = new CustomEvent(Lt, Yc);
              if ((N.currentTarget.dispatchEvent(X), !X.defaultPrevented)) {
                const z = C().filter((O) => O.focusable),
                  W = z.find((O) => O.active),
                  Z = z.find((O) => O.id === u),
                  $ = [W, Z, ...z].filter(Boolean).map((O) => O.ref.current);
                qr($, m);
              }
            }
            S.current = !1;
          }),
          onBlur: _(e.onBlur, () => h(!1)),
        }),
      })
    );
  }),
  Gr = "RovingFocusGroupItem",
  Xr = s.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: o = !0,
        active: r = !1,
        tabStopId: a,
        children: c,
        ...i
      } = e,
      d = ye(),
      l = a || d,
      m = Zc(Gr, n),
      g = m.currentTabStopId === l,
      w = Kr(n),
      {
        onFocusableItemAdd: f,
        onFocusableItemRemove: E,
        currentTabStopId: u,
      } = m;
    return (
      s.useEffect(() => {
        if (o) return (f(), () => E());
      }, [o, f, E]),
      p.jsx(qt.ItemSlot, {
        scope: n,
        id: l,
        focusable: o,
        active: r,
        children: p.jsx(M.span, {
          tabIndex: g ? 0 : -1,
          "data-orientation": m.orientation,
          ...i,
          ref: t,
          onMouseDown: _(e.onMouseDown, (v) => {
            o ? m.onItemFocus(l) : v.preventDefault();
          }),
          onFocus: _(e.onFocus, () => m.onItemFocus(l)),
          onKeyDown: _(e.onKeyDown, (v) => {
            if (v.key === "Tab" && v.shiftKey) {
              m.onItemShiftTab();
              return;
            }
            if (v.target !== v.currentTarget) return;
            const b = tl(v, m.orientation, m.dir);
            if (b !== void 0) {
              if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
              v.preventDefault();
              let y = w()
                .filter((C) => C.focusable)
                .map((C) => C.ref.current);
              if (b === "last") y.reverse();
              else if (b === "prev" || b === "next") {
                b === "prev" && y.reverse();
                const C = y.indexOf(v.currentTarget);
                y = m.loop ? nl(y, C + 1) : y.slice(C + 1);
              }
              setTimeout(() => qr(y));
            }
          }),
          children:
            typeof c == "function"
              ? c({ isCurrentTabStop: g, hasTabStop: u != null })
              : c,
        }),
      })
    );
  });
Xr.displayName = Gr;
var Jc = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function el(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
      ? "ArrowRight"
      : e === "ArrowRight"
        ? "ArrowLeft"
        : e;
}
function tl(e, t, n) {
  const o = el(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))
  )
    return Jc[o];
}
function qr(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (
      o === n ||
      (o.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function nl(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var ol = Yr,
  rl = Xr,
  Rt = "Tabs",
  [al, ql] = we(Rt, [zr]),
  Zr = zr(),
  [sl, gn] = al(Rt),
  Qr = s.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: o,
        onValueChange: r,
        defaultValue: a,
        orientation: c = "horizontal",
        dir: i,
        activationMode: d = "automatic",
        ...l
      } = e,
      m = bt(i),
      [g, w] = be({ prop: o, onChange: r, defaultProp: a ?? "", caller: Rt });
    return p.jsx(sl, {
      scope: n,
      baseId: ye(),
      value: g,
      onValueChange: w,
      orientation: c,
      dir: m,
      activationMode: d,
      children: p.jsx(M.div, { dir: m, "data-orientation": c, ...l, ref: t }),
    });
  });
Qr.displayName = Rt;
var Jr = "TabsList",
  ea = s.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: o = !0, ...r } = e,
      a = gn(Jr, n),
      c = Zr(n);
    return p.jsx(ol, {
      asChild: !0,
      ...c,
      orientation: a.orientation,
      dir: a.dir,
      loop: o,
      children: p.jsx(M.div, {
        role: "tablist",
        "aria-orientation": a.orientation,
        ...r,
        ref: t,
      }),
    });
  });
ea.displayName = Jr;
var ta = "TabsTrigger",
  na = s.forwardRef((e, t) => {
    const { __scopeTabs: n, value: o, disabled: r = !1, ...a } = e,
      c = gn(ta, n),
      i = Zr(n),
      d = aa(c.baseId, o),
      l = sa(c.baseId, o),
      m = o === c.value;
    return p.jsx(rl, {
      asChild: !0,
      ...i,
      focusable: !r,
      active: m,
      children: p.jsx(M.button, {
        type: "button",
        role: "tab",
        "aria-selected": m,
        "aria-controls": l,
        "data-state": m ? "active" : "inactive",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        id: d,
        ...a,
        ref: t,
        onMouseDown: _(e.onMouseDown, (g) => {
          !r && g.button === 0 && g.ctrlKey === !1
            ? c.onValueChange(o)
            : g.preventDefault();
        }),
        onKeyDown: _(e.onKeyDown, (g) => {
          [" ", "Enter"].includes(g.key) && c.onValueChange(o);
        }),
        onFocus: _(e.onFocus, () => {
          const g = c.activationMode !== "manual";
          !m && !r && g && c.onValueChange(o);
        }),
      }),
    });
  });
na.displayName = ta;
var oa = "TabsContent",
  ra = s.forwardRef((e, t) => {
    const { __scopeTabs: n, value: o, forceMount: r, children: a, ...c } = e,
      i = gn(oa, n),
      d = aa(i.baseId, o),
      l = sa(i.baseId, o),
      m = o === i.value,
      g = s.useRef(m);
    return (
      s.useEffect(() => {
        const w = requestAnimationFrame(() => (g.current = !1));
        return () => cancelAnimationFrame(w);
      }, []),
      p.jsx(Pe, {
        present: r || m,
        children: ({ present: w }) =>
          p.jsx(M.div, {
            "data-state": m ? "active" : "inactive",
            "data-orientation": i.orientation,
            role: "tabpanel",
            "aria-labelledby": d,
            hidden: !w,
            id: l,
            tabIndex: 0,
            ...c,
            ref: t,
            style: { ...e.style, animationDuration: g.current ? "0s" : void 0 },
            children: w && a,
          }),
      })
    );
  });
ra.displayName = oa;
function aa(e, t) {
  return `${e}-trigger-${t}`;
}
function sa(e, t) {
  return `${e}-content-${t}`;
}
var Zl = Qr,
  Ql = ea,
  Jl = na,
  ed = ra;
export {
  $s as $,
  vl as A,
  hl as B,
  El as C,
  Tl as D,
  pl as E,
  ml as F,
  dl as G,
  _l as H,
  Fl as I,
  gl as J,
  Ql as L,
  Cl as O,
  xl as P,
  wl as R,
  zl as S,
  Sl as T,
  Vl as V,
  Rl as a,
  Jl as b,
  ed as c,
  Zl as d,
  Uc as e,
  Kc as f,
  jl as g,
  Yl as h,
  Bl as i,
  $l as j,
  Wl as k,
  Hl as l,
  Kl as m,
  Ul as n,
  Gl as o,
  kl as p,
  Ll as q,
  cl as r,
  Pl as s,
  Al as t,
  Is as u,
  Ml as v,
  Dl as w,
  Nl as x,
  ul as y,
  fl as z,
};
