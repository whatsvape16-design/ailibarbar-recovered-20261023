import { j as r, r as l } from "./react-vendor-R4T0bNIa.js";
import { ao as e } from "./index-Bwn3vGAd.js";
function m({ text: n }) {
  if (!n.includes(e)) return r.jsx(r.Fragment, { children: n });
  const t = n.split(e);
  return r.jsx(r.Fragment, {
    children: t.map((s, a) =>
      r.jsxs(
        l.Fragment,
        {
          children: [
            a > 0
              ? r.jsx("a", {
                  href: e,
                  target: "_blank",
                  rel: "nofollow noopener",
                  className:
                    "text-primary underline underline-offset-2 hover:text-gold break-all",
                  children: e,
                })
              : null,
            s,
          ],
        },
        a,
      ),
    ),
  });
}
export { m as M };
