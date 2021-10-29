(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5165], {
    2949: function (e, t, r) {
        "use strict";
        r.d(t, {
            Z: function () {
                return c
            }
        });
        var n = r(19756);
        function c(e, t) {
            if (null == e)
                return {};
            var r, c, o = (0,
                n.Z)(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (c = 0; c < i.length; c++)
                    r = i[c],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
    },
    55165: function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(96156)
            , c = r(85893)
            , o = r(2949)
            , i = (r(67294),
                r(99121))
            , u = r(6411);
        function p(e, t) {
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
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(r), !0).forEach((function (t) {
                    (0,
                        n.Z)(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        t.default = function (e) {
            e._id,
                e.__component;
            var t = (0,
                o.Z)(e, ["_id", "__component"]);
            return (0,
                c.jsx)(u.xu, {
                    width: 1,
                    my: "-20px",
                    children: (0,
                        c.jsx)(i.Services, f({}, t))
                })
        }
    }
}]);
