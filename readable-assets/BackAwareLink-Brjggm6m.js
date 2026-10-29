import {
  r as u,
  i as f,
  q as c,
  j as d,
  L as m,
} from "./react-vendor-R4T0bNIa.js";
import { I as p, J as x } from "./index-Bwn3vGAd.js";
const K = u.forwardRef(function ({ to: r, onClick: a, ...e }, s) {
  const n = f(),
    o = c(),
    i = (t) => {
      (a == null || a(t),
        !(
          t.defaultPrevented ||
          t.button !== 0 ||
          t.metaKey ||
          t.ctrlKey ||
          t.shiftKey ||
          t.altKey
        ) &&
          p() > 0 &&
          x(n.key) === r &&
          (t.preventDefault(), o(-1)));
    };
  return d.jsx(m, { ref: s, to: r, onClick: i, ...e });
});
export { K as B };
