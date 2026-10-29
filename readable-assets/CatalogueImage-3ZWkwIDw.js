import { j as r } from "./react-vendor-R4T0bNIa.js";
const p = "(max-width: 1023px) 45vw, 360px",
  u = "(max-width: 1023px) min(92vw, 36rem), 36rem";
function w({
  src: m,
  srcSet: a,
  sizes: s = p,
  loading: t = "lazy",
  decoding: i = "async",
  width: o = 400,
  height: x = 400,
  alt: n,
  ...e
}) {
  return r.jsx("img", {
    src: m,
    srcSet: a,
    sizes: a ? s : void 0,
    alt: n,
    loading: t,
    decoding: i,
    width: o,
    height: x,
    ...e,
  });
}
export { w as C, u as a };
