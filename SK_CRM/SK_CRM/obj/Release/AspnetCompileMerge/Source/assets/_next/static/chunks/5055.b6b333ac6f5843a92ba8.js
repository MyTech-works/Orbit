(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5055], {
    2949: function (e, r, t) {
        "use strict";
        t.d(r, {
            Z: function () {
                return o
            }
        });
        var n = t(19756);
        function o(e, r) {
            if (null == e)
                return {};
            var t, o, c = (0,
                n.Z)(e, r);
            if (Object.getOwnPropertySymbols) {
                var u = Object.getOwnPropertySymbols(e);
                for (o = 0; o < u.length; o++)
                    t = u[o],
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (c[t] = e[t])
            }
            return c
        }
    },
    55055: function (e, r, t) {
        "use strict";
        t.r(r);
        var n = t(96156)
            , o = t(85893)
            , c = t(2949)
            , u = (t(67294),
                t(99121))
            , p = t(6411);
        function i(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r && (n = n.filter((function (r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                }
                ))),
                    t.push.apply(t, n)
            }
            return t
        }
        function f(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? i(Object(t), !0).forEach((function (r) {
                    (0,
                        n.Z)(e, r, t[r])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function (r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }
                ))
            }
            return e
        }
        r.default = function (e) {
            e._id,
                e.__component;
            var r = e.copy
                , t = (0,
                    c.Z)(e, ["_id", "__component", "copy"]);
            return (0,
                o.jsx)(p.xu, {
                    width: 1,
                    my: "-20px",
                    children: (0,
                        o.jsx)(u.HeaderBanner, f(f({}, t), {}, {
                            copy: r && (0,
                                o.jsx)(p.xu, {
                                    color: "#fff",
                                    dangerouslySetInnerHTML: {
                                        __html: r
                                    }
                                })
                        }))
                })
        }
    }
}]);
