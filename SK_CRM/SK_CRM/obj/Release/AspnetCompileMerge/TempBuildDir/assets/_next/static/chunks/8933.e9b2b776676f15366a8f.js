(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8933], {
    57631: function (e, r, n) {
        e = n.nmd(e);
        var t = n(17673)
            , o = n(94470)
            , u = n(10861);
        function i(e, r, n) {
            var t = []
                , o = !1;
            return Array.isArray(e) && n && (o = !0),
                Object.keys(e).forEach((function (u) {
                    var c, a, s = e[u];
                    if (c = n ? n + "[" + (o ? "" : u) + "]" : u,
                        null === s) {
                        if (r.removeNull)
                            return;
                        a = r.encodeComponents ? encodeURIComponent(c) : c
                    } else
                        a = "object" === typeof s ? i(s, r, c) : r.encodeComponents ? encodeURIComponent(c) + "=" + encodeURIComponent(s) : c + "=" + s;
                    t.push(a)
                }
                )),
                t.join("&")
        }
        e.defaults = {
            encodeComponents: !0,
            removeNull: !1
        },
            e.exports = function (r, n, c) {
                var a = u.parse(r, !0)
                    , s = (a.query,
                        "string" === typeof n ? t.parse(n) : n)
                    , f = o(!0, {}, a.query, s);
                c = o({}, e.defaults, c || {});
                a.query = null;
                var l = i(f, c);
                return a.search = l ? "?" + l : null,
                    u.format(a)
            }
    },
    1674: function (e, r, n) {
        e.exports = function (e, r) {
            const t = function () {
                if ("undefined" !== typeof globalThis)
                    return globalThis;
                if ("undefined" !== typeof self)
                    return self;
                if ("undefined" !== typeof window)
                    return window;
                if ("undefined" !== typeof n.g)
                    return n.g;
                throw new Error("unable to locate global object")
            }();
            return new Promise(((n, o) => {
                let u;
                const i = () => {
                    t[e] && (n(t[e]),
                        clearInterval(u))
                }
                    ;
                u = setInterval(i, r || 300),
                    i()
            }
            ))
        }
    },
    94470: function (e) {
        var r = Object.prototype.hasOwnProperty
            , n = Object.prototype.toString
            , t = Object.defineProperty
            , o = Object.getOwnPropertyDescriptor
            , u = function (e) {
                return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
            }
            , i = function (e) {
                "use strict";
                if (!e || "[object Object]" !== n.call(e))
                    return !1;
                var t, o = r.call(e, "constructor"), u = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
                if (e.constructor && !o && !u)
                    return !1;
                for (t in e)
                    ;
                return "undefined" === typeof t || r.call(e, t)
            }
            , c = function (e, r) {
                t && "__proto__" === r.name ? t(e, r.name, {
                    enumerable: !0,
                    configurable: !0,
                    value: r.newValue,
                    writable: !0
                }) : e[r.name] = r.newValue
            }
            , a = function (e, n) {
                if ("__proto__" === n) {
                    if (!r.call(e, n))
                        return;
                    if (o)
                        return o(e, n).value
                }
                return e[n]
            };
        e.exports = function e() {
            "use strict";
            var r, n, t, o, s, f, l = arguments[0], p = 1, d = arguments.length, v = !1;
            for ("boolean" === typeof l && (v = l,
                l = arguments[1] || {},
                p = 2),
                (null == l || "object" !== typeof l && "function" !== typeof l) && (l = {}); p < d; ++p)
                if (null != (r = arguments[p]))
                    for (n in r)
                        t = a(l, n),
                            l !== (o = a(r, n)) && (v && o && (i(o) || (s = u(o))) ? (s ? (s = !1,
                                f = t && u(t) ? t : []) : f = t && i(t) ? t : {},
                                c(l, {
                                    name: n,
                                    newValue: e(v, f, o)
                                })) : "undefined" !== typeof o && c(l, {
                                    name: n,
                                    newValue: o
                                }));
            return l
        }
    },
    36808: function (e, r, n) {
        var t, o;
        !function (u) {
            if (void 0 === (o = "function" === typeof (t = u) ? t.call(r, n, r, e) : t) || (e.exports = o),
                !0,
                e.exports = u(),
                !!0) {
                var i = window.Cookies
                    , c = window.Cookies = u();
                c.noConflict = function () {
                    return window.Cookies = i,
                        c
                }
            }
        }((function () {
            function e() {
                for (var e = 0, r = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var t in n)
                        r[t] = n[t]
                }
                return r
            }
            function r(e) {
                return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
            }
            return function n(t) {
                function o() { }
                function u(r, n, u) {
                    if ("undefined" !== typeof document) {
                        "number" === typeof (u = e({
                            path: "/"
                        }, o.defaults, u)).expires && (u.expires = new Date(1 * new Date + 864e5 * u.expires)),
                            u.expires = u.expires ? u.expires.toUTCString() : "";
                        try {
                            var i = JSON.stringify(n);
                            /^[\{\[]/.test(i) && (n = i)
                        } catch (s) { }
                        n = t.write ? t.write(n, r) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                            r = encodeURIComponent(String(r)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                        var c = "";
                        for (var a in u)
                            u[a] && (c += "; " + a,
                                !0 !== u[a] && (c += "=" + u[a].split(";")[0]));
                        return document.cookie = r + "=" + n + c
                    }
                }
                function i(e, n) {
                    if ("undefined" !== typeof document) {
                        for (var o = {}, u = document.cookie ? document.cookie.split("; ") : [], i = 0; i < u.length; i++) {
                            var c = u[i].split("=")
                                , a = c.slice(1).join("=");
                            n || '"' !== a.charAt(0) || (a = a.slice(1, -1));
                            try {
                                var s = r(c[0]);
                                if (a = (t.read || t)(a, s) || r(a),
                                    n)
                                    try {
                                        a = JSON.parse(a)
                                    } catch (f) { }
                                if (o[s] = a,
                                    e === s)
                                    break
                            } catch (f) { }
                        }
                        return e ? o[e] : o
                    }
                }
                return o.set = u,
                    o.get = function (e) {
                        return i(e, !1)
                    }
                    ,
                    o.getJSON = function (e) {
                        return i(e, !0)
                    }
                    ,
                    o.remove = function (r, n) {
                        u(r, "", e(n, {
                            expires: -1
                        }))
                    }
                    ,
                    o.defaults = {},
                    o.withConverter = n,
                    o
            }((function () { }
            ))
        }
        ))
    },
    71168: function (e) {
        function r(e) {
            this.message = e
        }
        r.prototype = new Error,
            r.prototype.name = "InvalidCharacterError",
            e.exports = "undefined" !== typeof window && window.atob && window.atob.bind(window) || function (e) {
                var n = String(e).replace(/=+$/, "");
                if (n.length % 4 == 1)
                    throw new r("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var t, o, u = 0, i = 0, c = ""; o = n.charAt(i++); ~o && (t = u % 4 ? 64 * t + o : o,
                    u++ % 4) ? c += String.fromCharCode(255 & t >> (-2 * u & 6)) : 0)
                    o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);
                return c
            }
    },
    84491: function (e, r, n) {
        var t = n(71168);
        e.exports = function (e) {
            var r = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (r.length % 4) {
                case 0:
                    break;
                case 2:
                    r += "==";
                    break;
                case 3:
                    r += "=";
                    break;
                default:
                    throw "Illegal base64url string!"
            }
            try {
                return function (e) {
                    return decodeURIComponent(t(e).replace(/(.)/g, (function (e, r) {
                        var n = r.charCodeAt(0).toString(16).toUpperCase();
                        return n.length < 2 && (n = "0" + n),
                            "%" + n
                    }
                    )))
                }(r)
            } catch (n) {
                return t(r)
            }
        }
    },
    46489: function (e, r, n) {
        "use strict";
        var t = n(84491);
        function o(e) {
            this.message = e
        }
        o.prototype = new Error,
            o.prototype.name = "InvalidTokenError",
            e.exports = function (e, r) {
                if ("string" !== typeof e)
                    throw new o("Invalid token specified");
                var n = !0 === (r = r || {}).header ? 0 : 1;
                try {
                    return JSON.parse(t(e.split(".")[n]))
                } catch (u) {
                    throw new o("Invalid token specified: " + u.message)
                }
            }
            ,
            e.exports.InvalidTokenError = o
    },
    5425: function (e, r, n) {
        "use strict";
        n.r(r);
        var t = n(85893)
            , o = n(96156)
            , u = n(87757)
            , i = n.n(u)
            , c = n(92137)
            , a = n(34699)
            , s = n(2949)
            , f = n(67294)
            , l = n(99121)
            , p = n(11163)
            , d = n(57631)
            , v = n.n(d)
            , b = n(94248)
            , y = n(5904)
            , m = n(81576)
            , w = n(17701)
            , g = n(34268);
        function h(e, r) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                r && (t = t.filter((function (r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                }
                ))),
                    n.push.apply(n, t)
            }
            return n
        }
        function O(e) {
            for (var r = 1; r < arguments.length; r++) {
                var n = null != arguments[r] ? arguments[r] : {};
                r % 2 ? h(Object(n), !0).forEach((function (r) {
                    (0,
                        o.Z)(e, r, n[r])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function (r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }
                ))
            }
            return e
        }
        r.default = function (e) {
            e._id,
                e.__component;
            var r = e.productId
                , n = e.cta
                , u = (0,
                    s.Z)(e, ["_id", "__component", "productId", "cta"])
                , d = (0,
                    f.useState)(null)
                , h = d[0]
                , x = d[1]
                , C = (0,
                    f.useState)(!1)
                , k = C[0]
                , j = C[1]
                , P = (0,
                    b.WN)()
                , _ = (0,
                    a.Z)(P, 1)[0]
                , I = (0,
                    y.a)().user
                , Z = (0,
                    p.useRouter)()
                , E = Z.push
                , A = Z.query
                , R = (0,
                    f.useMemo)((function () {
                        if (A.business && null !== I && void 0 !== I && I.businesses) {
                            var e = I.businesses.find((function (e) {
                                return e.urlKey === A.business
                            }
                            ));
                            if (e)
                                return e
                        }
                        return _
                    }
                    ), [_, A.business, null === I || void 0 === I ? void 0 : I.businesses])
                , S = (0,
                    m.G2)("demands")
                , D = (0,
                    m.G2)("businesses")
                , U = (0,
                    m.G2)("/businesses/".concat(null === R || void 0 === R ? void 0 : R.urlKey, "/leads"))
                , N = (0,
                    m.G2)("/businesses/".concat(null === R || void 0 === R ? void 0 : R.urlKey, "/premiumn"))
                , B = (0,
                    f.useCallback)((0,
                        c.Z)(i().mark((function e() {
                            var r;
                            return i().wrap((function (e) {
                                for (; ;)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                N.create({
                                                    feature: "Direct"
                                                });
                                        case 2:
                                            if (!(r = e.sent).lead) {
                                                e.next = 6;
                                                break
                                            }
                                            return x(r.lead._id),
                                                e.abrupt("return", r.lead);
                                        case 6:
                                            return e.abrupt("return", null);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        ))), [N])
                , K = (0,
                    f.useCallback)((0,
                        c.Z)(i().mark((function e() {
                            var r, n, t;
                            return i().wrap((function (e) {
                                for (; ;)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if (null === R || void 0 === R || !R.urlKey) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 3,
                                                D.get(R.urlKey);
                                        case 3:
                                            r = e.sent,
                                                n = r.preferences,
                                                t = ((void 0 === n ? {} : n) || {}).premiumn,
                                                j(void 0 !== t && t);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        ))), [D, null === R || void 0 === R ? void 0 : R.urlKey])
                , T = (0,
                    f.useCallback)((0,
                        c.Z)(i().mark((function e() {
                            var r;
                            return i().wrap((function (e) {
                                for (; ;)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if (!R) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 3,
                                                U.findOne({
                                                    query: {
                                                        source: "PREMIUMN",
                                                        clientBusiness: R._id
                                                    },
                                                    route: {
                                                        business: R.urlKey
                                                    }
                                                });
                                        case 3:
                                            if (r = e.sent) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return", B());
                                        case 6:
                                            return x(r._id),
                                                e.abrupt("return", r);
                                        case 8:
                                            return e.abrupt("return", null);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                            }
                            ), e)
                        }
                        ))), [R, U, B])
                , q = (0,
                    f.useCallback)(function () {
                        var e = (0,
                            c.Z)(i().mark((function e(n, t) {
                                var u, c, s, f, l, p, d;
                                return i().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if (!t) {
                                                    e.next = 4;
                                                    break
                                                }
                                                window.location.href = "/app",
                                                    e.next = 25;
                                                break;
                                            case 4:
                                                if (!R) {
                                                    e.next = 24;
                                                    break
                                                }
                                                if (u = h) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.next = 9,
                                                    T();
                                            case 9:
                                                (c = e.sent) && (u = c._id);
                                            case 11:
                                                if (!u) {
                                                    e.next = 21;
                                                    break
                                                }
                                                return e.next = 14,
                                                    S.patch(u, {
                                                        pricePlan: n,
                                                        product: r
                                                    });
                                            case 14:
                                                s = e.sent,
                                                    f = (0,
                                                        a.Z)(s.proforma, 1),
                                                    l = f[0],
                                                    p = s.recurrences,
                                                    d = (p || {}).period,
                                                    (0,
                                                        w.L9)("PremiumPricingPage", "PremiumButtonClick_Page", "".concat(R.name, "_").concat(d)),
                                                    window.location.href = v()("/app/payments/".concat(l._id), (0,
                                                        o.Z)({}, g.Cu, l.shareId)),
                                                    e.next = 22;
                                                break;
                                            case 21:
                                                E("/login");
                                            case 22:
                                                e.next = 25;
                                                break;
                                            case 24:
                                                E("/login");
                                            case 25:
                                                return e.abrupt("return", Promise.resolve());
                                            case 26:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                        return function (r, n) {
                            return e.apply(this, arguments)
                        }
                    }(), [r, R, h, S]);
            return (0,
                f.useEffect)((function () {
                    K(),
                        n || T()
                }
                ), [R]),
                n && k ? (0,
                    t.jsx)(t.Fragment, {}) : (0,
                        t.jsx)(l.PremiumPlans, O(O({}, u), {}, {
                            business: !(null === R || void 0 === R || !R.urlKey),
                            cta: n,
                            currentPlan: k,
                            onPlanClick: q
                        }))
        }
    },
    94248: function (e, r, n) {
        "use strict";
        n.d(r, {
            r2: function () {
                return b
            },
            P6: function () {
                return y
            },
            WN: function () {
                return m
            },
            RV: function () {
                return w
            },
            qp: function () {
                return g
            }
        });
        var t = n(85893)
            , o = n(96156)
            , u = n(34699)
            , i = n(67294)
            , c = n(89211)
            , a = n(14516)
            , s = n(11163)
            , f = n(5904)
            , l = n(34268);
        function p(e, r) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                r && (t = t.filter((function (r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                }
                ))),
                    n.push.apply(n, t)
            }
            return n
        }
        function d(e) {
            for (var r = 1; r < arguments.length; r++) {
                var n = null != arguments[r] ? arguments[r] : {};
                r % 2 ? p(Object(n), !0).forEach((function (r) {
                    (0,
                        o.Z)(e, r, n[r])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function (r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }
                ))
            }
            return e
        }
        var v = (0,
            i.createContext)({});
        function b(e) {
            var r, n = e.children, i = (0,
                s.useRouter)().query, p = (0,
                    a.useLocalForage)(l.nv, null), b = (0,
                        u.Z)(p, 2), y = b[0], m = b[1], w = (0,
                            c.Z)(!1), g = (0,
                                u.Z)(w, 2), h = g[0], O = g[1], x = (0,
                                    c.Z)(!0), C = (0,
                                        u.Z)(x, 2), k = C[0], j = C[1], P = ((0,
                                            f.a)().user || {}).businesses, _ = void 0 === P ? [] : P, I = _.filter((function (e) {
                                                return !e.isRemoved
                                            }
                                            )), Z = (0,
                                                u.Z)(I, 1)[0];
            if (y) {
                var E = _.find((function (e) {
                    return e._id === y
                }
                ));
                E ? Z = E : m(null)
            }
            var A = i
                , R = A.utm_medium
                , S = A.utm_source
                , D = A.utm_campaign
                , U = A.utm_term
                , N = A[l.h6]
                , B = A[l.zW]
                , K = (0,
                    a.useLocalForage)(l.GN, (r = {},
                        (0,
                            o.Z)(r, l.h6, N),
                        (0,
                            o.Z)(r, l.hT, null),
                        (0,
                            o.Z)(r, l.zW, B),
                        r))
                , T = (0,
                    u.Z)(K, 2)
                , q = T[0]
                , F = T[1];
            (0,
                a.useLazyEffect)((function () {
                    var e = {};
                    R && S && D && (e[l.hT] = {
                        medium: R,
                        source: S,
                        campaign: D,
                        term: "string" === typeof U ? decodeURI(U) : void 0
                    }),
                        "string" === typeof N && (e[l.h6] = N),
                        "string" === typeof N && (e[l.h6] = N),
                        Object.keys(e).length && F(d(d({}, q), e))
                }
                ), [R, S, D, U, N, B]);
            var G = {
                activeBusiness: Z,
                setActiveBusiness: m,
                crispReady: h,
                markCrispReady: function () {
                    return O(!0)
                },
                asideCollapsed: k,
                setAsideCollapsed: j,
                apiQuery: q,
                saveAPIQuery: F
            };
            return (0,
                t.jsx)(v.Provider, {
                    value: G,
                    children: n
                })
        }
        function y() {
            return (0,
                i.useContext)(v)
        }
        function m() {
            var e = (0,
                i.useContext)(v);
            return [e.activeBusiness, e.setActiveBusiness]
        }
        function w() {
            var e = (0,
                i.useContext)(v);
            return [e.asideCollapsed, e.setAsideCollapsed]
        }
        function g() {
            var e = (0,
                i.useContext)(v);
            return [e.apiQuery, e.saveAPIQuery]
        }
    }
}]);
