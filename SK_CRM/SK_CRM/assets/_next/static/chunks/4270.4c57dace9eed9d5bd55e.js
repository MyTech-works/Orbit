(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4270], {
    44270: function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(96156)
            , o = r(85893)
            , c = (r(67294),
                r(99121))
            , p = r(94829);
        function i(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    r.push.apply(r, n)
            }
            return r
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(r), !0).forEach((function (t) {
                    (0,
                        n.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        t.default = function (e) {
            var t = e.copy
                , r = (0,
                    p.Z)("(max-width: 768px)");
            return t ? (0,
                o.jsx)(c.FooterCopy, s(s({}, e), {}, {
                    withCollapser: r
                })) : (0,
                    o.jsx)(o.Fragment, {})
        }
    }
}]);
