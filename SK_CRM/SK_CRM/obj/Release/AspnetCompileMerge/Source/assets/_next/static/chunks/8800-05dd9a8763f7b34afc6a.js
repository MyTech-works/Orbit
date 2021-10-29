(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8800], {
    23646: function (t, e, n) {
        var r = n(67228);
        t.exports = function (t) {
            if (Array.isArray(t))
                return r(t)
        }
    },
    29754: function (t) {
        function e(n) {
            return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
                ,
                e(n)
        }
        t.exports = e
    },
    2205: function (t, e, n) {
        var r = n(99489);
        t.exports = function (t, e) {
            if ("function" !== typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
                e && r(t, e)
        }
    },
    98206: function (t) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    },
    78585: function (t, e, n) {
        var r = n(50008)
            , o = n(81506);
        t.exports = function (t, e) {
            return !e || "object" !== r(e) && "function" !== typeof e ? o(t) : e
        }
    },
    319: function (t, e, n) {
        var r = n(23646)
            , o = n(46860)
            , i = n(60379)
            , a = n(98206);
        t.exports = function (t) {
            return r(t) || o(t) || i(t) || a()
        }
    },
    36634: function (t, e, n) {
        "use strict";
        n.d(e, {
            yl: function () {
                return oe
            },
            S1: function () {
                return re
            }
        });
        var r = n(38641)
            , o = n(12343);
        var i = function () {
            return (i = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }
            ).apply(this, arguments)
        };
        function a(t, e) {
            var n = "function" === typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var r, o, i = n.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;)
                    a.push(r.value)
            } catch (s) {
                o = {
                    error: s
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
        function s() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(a(arguments[e]));
            return t
        }
        var u = n(46769)
            , c = n(62844)
            , l = n(67597);
        function p(t, e) {
            return void 0 === e && (e = 0),
                "string" !== typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + "..."
        }
        function d(t, e) {
            if (!Array.isArray(t))
                return "";
            for (var n = [], r = 0; r < t.length; r++) {
                var o = t[r];
                try {
                    n.push(String(o))
                } catch (i) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(e)
        }
        function f(t, e) {
            return !!(0,
                l.HD)(t) && ((0,
                    l.Kj)(e) ? e.test(t) : "string" === typeof e && -1 !== t.indexOf(e))
        }
        var h, v = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], y = function () {
            function t(e) {
                void 0 === e && (e = {}),
                    this._options = e,
                    this.name = t.id
            }
            return t.prototype.setupOnce = function () {
                (0,
                    u.c)((function (e) {
                        var n = (0,
                            r.Gd)();
                        if (!n)
                            return e;
                        var o = n.getIntegration(t);
                        if (o) {
                            var i = n.getClient()
                                , a = i ? i.getOptions() : {}
                                , s = o._mergeOptions(a);
                            if (o._shouldDropEvent(e, s))
                                return null
                        }
                        return e
                    }
                    ))
            }
                ,
                t.prototype._shouldDropEvent = function (t, e) {
                    return this._isSentryError(t, e) ? (o.k.warn("Event dropped due to being internal Sentry Error.\nEvent: " + (0,
                        c.jH)(t)),
                        !0) : this._isIgnoredError(t, e) ? (o.k.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + (0,
                            c.jH)(t)),
                            !0) : this._isDeniedUrl(t, e) ? (o.k.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + (0,
                                c.jH)(t) + ".\nUrl: " + this._getEventFilterUrl(t)),
                                !0) : !this._isAllowedUrl(t, e) && (o.k.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + (0,
                                    c.jH)(t) + ".\nUrl: " + this._getEventFilterUrl(t)),
                                    !0)
                }
                ,
                t.prototype._isSentryError = function (t, e) {
                    if (!e.ignoreInternal)
                        return !1;
                    try {
                        return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
                    } catch (n) {
                        return !1
                    }
                }
                ,
                t.prototype._isIgnoredError = function (t, e) {
                    return !(!e.ignoreErrors || !e.ignoreErrors.length) && this._getPossibleEventMessages(t).some((function (t) {
                        return e.ignoreErrors.some((function (e) {
                            return f(t, e)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype._isDeniedUrl = function (t, e) {
                    if (!e.denyUrls || !e.denyUrls.length)
                        return !1;
                    var n = this._getEventFilterUrl(t);
                    return !!n && e.denyUrls.some((function (t) {
                        return f(n, t)
                    }
                    ))
                }
                ,
                t.prototype._isAllowedUrl = function (t, e) {
                    if (!e.allowUrls || !e.allowUrls.length)
                        return !0;
                    var n = this._getEventFilterUrl(t);
                    return !n || e.allowUrls.some((function (t) {
                        return f(n, t)
                    }
                    ))
                }
                ,
                t.prototype._mergeOptions = function (t) {
                    return void 0 === t && (t = {}),
                    {
                        allowUrls: s(this._options.whitelistUrls || [], this._options.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                        denyUrls: s(this._options.blacklistUrls || [], this._options.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                        ignoreErrors: s(this._options.ignoreErrors || [], t.ignoreErrors || [], v),
                        ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal
                    }
                }
                ,
                t.prototype._getPossibleEventMessages = function (t) {
                    if (t.message)
                        return [t.message];
                    if (t.exception)
                        try {
                            var e = t.exception.values && t.exception.values[0] || {}
                                , n = e.type
                                , r = void 0 === n ? "" : n
                                , i = e.value
                                , a = void 0 === i ? "" : i;
                            return ["" + a, r + ": " + a]
                        } catch (s) {
                            return o.k.error("Cannot extract message for event " + (0,
                                c.jH)(t)),
                                []
                        }
                    return []
                }
                ,
                t.prototype._getEventFilterUrl = function (t) {
                    try {
                        if (t.stacktrace) {
                            var e = t.stacktrace.frames;
                            return e && e[e.length - 1].filename || null
                        }
                        if (t.exception) {
                            var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                            return n && n[n.length - 1].filename || null
                        }
                        return null
                    } catch (r) {
                        return o.k.error("Cannot extract url for event " + (0,
                            c.jH)(t)),
                            null
                    }
                }
                ,
                t.id = "InboundFilters",
                t
        }(), m = function () {
            function t() {
                this.name = t.id
            }
            return t.prototype.setupOnce = function () {
                h = Function.prototype.toString,
                    Function.prototype.toString = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        var n = this.__sentry_original__ || this;
                        return h.apply(n, t)
                    }
            }
                ,
                t.id = "FunctionToString",
                t
        }(), _ = n(96893), g = function (t, e) {
            return (g = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var n in e)
                        e.hasOwnProperty(n) && (t[n] = e[n])
                }
            )(t, e)
        };
        function b(t, e) {
            function n() {
                this.constructor = t
            }
            g(t, e),
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                    new n)
        }
        var E = function () {
            return (E = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }
            ).apply(this, arguments)
        };
        function w(t, e) {
            var n = "function" === typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var r, o, i = n.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;)
                    a.push(r.value)
            } catch (s) {
                o = {
                    error: s
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
        function k() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(w(arguments[e]));
            return t
        }
        var x = function (t, e) {
            return (x = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var n in e)
                        e.hasOwnProperty(n) && (t[n] = e[n])
                }
            )(t, e)
        };
        var O = function () {
            return (O = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }
            ).apply(this, arguments)
        };
        function S(t) {
            var e = "function" === typeof Symbol && Symbol.iterator
                , n = e && t[e]
                , r = 0;
            if (n)
                return n.call(t);
            if (t && "number" === typeof t.length)
                return {
                    next: function () {
                        return t && r >= t.length && (t = void 0),
                        {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function j(t, e) {
            var n = "function" === typeof Symbol && t[Symbol.iterator];
            if (!n)
                return t;
            var r, o, i = n.call(t), a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;)
                    a.push(r.value)
            } catch (s) {
                o = {
                    error: s
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
        var I = Object.setPrototypeOf || ({
            __proto__: []
        } instanceof Array ? function (t, e) {
            return t.__proto__ = e,
                t
        }
            : function (t, e) {
                for (var n in e)
                    t.hasOwnProperty(n) || (t[n] = e[n]);
                return t
            }
        );
        var T = function (t) {
            function e(e) {
                var n = this.constructor
                    , r = t.call(this, e) || this;
                return r.message = e,
                    r.name = n.prototype.constructor.name,
                    I(r, n.prototype),
                    r
            }
            return function (t, e) {
                function n() {
                    this.constructor = t
                }
                x(t, e),
                    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
                        new n)
            }(e, t),
                e
        }(Error)
            , R = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
            , D = "Invalid Dsn"
            , C = function () {
                function t(t) {
                    "string" === typeof t ? this._fromString(t) : this._fromComponents(t),
                        this._validate()
                }
                return t.prototype.toString = function (t) {
                    void 0 === t && (t = !1);
                    var e = this
                        , n = e.host
                        , r = e.path
                        , o = e.pass
                        , i = e.port
                        , a = e.projectId;
                    return e.protocol + "://" + e.user + (t && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a
                }
                    ,
                    t.prototype._fromString = function (t) {
                        var e = R.exec(t);
                        if (!e)
                            throw new T(D);
                        var n = j(e.slice(1), 6)
                            , r = n[0]
                            , o = n[1]
                            , i = n[2]
                            , a = void 0 === i ? "" : i
                            , s = n[3]
                            , u = n[4]
                            , c = void 0 === u ? "" : u
                            , l = ""
                            , p = n[5]
                            , d = p.split("/");
                        if (d.length > 1 && (l = d.slice(0, -1).join("/"),
                            p = d.pop()),
                            p) {
                            var f = p.match(/^\d+/);
                            f && (p = f[0])
                        }
                        this._fromComponents({
                            host: s,
                            pass: a,
                            path: l,
                            projectId: p,
                            port: c,
                            protocol: r,
                            user: o
                        })
                    }
                    ,
                    t.prototype._fromComponents = function (t) {
                        this.protocol = t.protocol,
                            this.user = t.user,
                            this.pass = t.pass || "",
                            this.host = t.host,
                            this.port = t.port || "",
                            this.path = t.path || "",
                            this.projectId = t.projectId
                    }
                    ,
                    t.prototype._validate = function () {
                        var t = this;
                        if (["protocol", "user", "host", "projectId"].forEach((function (e) {
                            if (!t[e])
                                throw new T("Invalid Dsn: " + e + " missing")
                        }
                        )),
                            !this.projectId.match(/^\d+$/))
                            throw new T("Invalid Dsn: Invalid projectId " + this.projectId);
                        if ("http" !== this.protocol && "https" !== this.protocol)
                            throw new T("Invalid Dsn: Invalid protocol " + this.protocol);
                        if (this.port && isNaN(parseInt(this.port, 10)))
                            throw new T("Invalid Dsn: Invalid port " + this.port)
                    }
                    ,
                    t
            }();
        function U(t) {
            try {
                for (var e = t, n = [], r = 0, o = 0, i = " > ".length, a = void 0; e && r++ < 5 && !("html" === (a = A(e)) || r > 1 && o + n.length * i + a.length >= 80);)
                    n.push(a),
                        o += a.length,
                        e = e.parentNode;
                return n.reverse().join(" > ")
            } catch (s) {
                return "<unknown>"
            }
        }
        function A(t) {
            var e, n, r, o, i, a = t, s = [];
            if (!a || !a.tagName)
                return "";
            if (s.push(a.tagName.toLowerCase()),
                a.id && s.push("#" + a.id),
                (e = a.className) && (0,
                    l.HD)(e))
                for (n = e.split(/\s+/),
                    i = 0; i < n.length; i++)
                    s.push("." + n[i]);
            var u = ["type", "name", "title", "alt"];
            for (i = 0; i < u.length; i++)
                r = u[i],
                    (o = a.getAttribute(r)) && s.push("[" + r + '="' + o + '"]');
            return s.join("")
        }
        var M = function () {
            function t() {
                this._hasWeakSet = "function" === typeof WeakSet,
                    this._inner = this._hasWeakSet ? new WeakSet : []
            }
            return t.prototype.memoize = function (t) {
                if (this._hasWeakSet)
                    return !!this._inner.has(t) || (this._inner.add(t),
                        !1);
                for (var e = 0; e < this._inner.length; e++) {
                    if (this._inner[e] === t)
                        return !0
                }
                return this._inner.push(t),
                    !1
            }
                ,
                t.prototype.unmemoize = function (t) {
                    if (this._hasWeakSet)
                        this._inner.delete(t);
                    else
                        for (var e = 0; e < this._inner.length; e++)
                            if (this._inner[e] === t) {
                                this._inner.splice(e, 1);
                                break
                            }
                }
                ,
                t
        }()
            , H = "<anonymous>";
        function P(t) {
            try {
                return t && "function" === typeof t && t.name || H
            } catch (e) {
                return H
            }
        }
        function F(t, e, n) {
            if (e in t) {
                var r = t[e]
                    , o = n(r);
                if ("function" === typeof o)
                    try {
                        o.prototype = o.prototype || {},
                            Object.defineProperties(o, {
                                __sentry_original__: {
                                    enumerable: !1,
                                    value: r
                                }
                            })
                    } catch (i) { }
                t[e] = o
            }
        }
        function N(t) {
            if ((0,
                l.VZ)(t)) {
                var e = t
                    , n = {
                        message: e.message,
                        name: e.name,
                        stack: e.stack
                    };
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            if ((0,
                l.cO)(t)) {
                var o = t
                    , i = {};
                i.type = o.type;
                try {
                    i.target = (0,
                        l.kK)(o.target) ? U(o.target) : Object.prototype.toString.call(o.target)
                } catch (a) {
                    i.target = "<unknown>"
                }
                try {
                    i.currentTarget = (0,
                        l.kK)(o.currentTarget) ? U(o.currentTarget) : Object.prototype.toString.call(o.currentTarget)
                } catch (a) {
                    i.currentTarget = "<unknown>"
                }
                for (var r in "undefined" !== typeof CustomEvent && (0,
                    l.V9)(t, CustomEvent) && (i.detail = o.detail),
                    o)
                    Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o);
                return i
            }
            return t
        }
        function L(t) {
            return function (t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(t))
        }
        function q(t, e, n) {
            void 0 === e && (e = 3),
                void 0 === n && (n = 102400);
            var r = G(t, e);
            return L(r) > n ? q(t, e - 1, n) : r
        }
        function B(t, e) {
            return "domain" === e && t && "object" === typeof t && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : "undefined" !== typeof n.g && t === n.g ? "[Global]" : "undefined" !== typeof window && t === window ? "[Window]" : "undefined" !== typeof document && t === document ? "[Document]" : (0,
                l.Cy)(t) ? "[SyntheticEvent]" : "number" === typeof t && t !== t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" === typeof t ? "[Function: " + P(t) + "]" : t
        }
        function W(t, e, n, r) {
            if (void 0 === n && (n = 1 / 0),
                void 0 === r && (r = new M),
                0 === n)
                return function (t) {
                    var e = Object.prototype.toString.call(t);
                    if ("string" === typeof t)
                        return t;
                    if ("[object Object]" === e)
                        return "[Object]";
                    if ("[object Array]" === e)
                        return "[Array]";
                    var n = B(t);
                    return (0,
                        l.pt)(n) ? n : e
                }(e);
            if (null !== e && void 0 !== e && "function" === typeof e.toJSON)
                return e.toJSON();
            var o = B(e, t);
            if ((0,
                l.pt)(o))
                return o;
            var i = N(e)
                , a = Array.isArray(e) ? [] : {};
            if (r.memoize(e))
                return "[Circular ~]";
            for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (a[s] = W(s, i[s], n - 1, r));
            return r.unmemoize(e),
                a
        }
        function G(t, e) {
            try {
                return JSON.parse(JSON.stringify(t, (function (t, n) {
                    return W(t, n, e)
                }
                )))
            } catch (n) {
                return "**non-serializable**"
            }
        }
        function X(t, e) {
            void 0 === e && (e = 40);
            var n = Object.keys(N(t));
            if (n.sort(),
                !n.length)
                return "[object has no keys]";
            if (n[0].length >= e)
                return p(n[0], e);
            for (var r = n.length; r > 0; r--) {
                var o = n.slice(0, r).join(", ");
                if (!(o.length > e))
                    return r === n.length ? o : p(o, e)
            }
            return ""
        }
        var $ = [];
        function z(t) {
            var e = {};
            return function (t) {
                var e = t.defaultIntegrations && s(t.defaultIntegrations) || []
                    , n = t.integrations
                    , r = [];
                if (Array.isArray(n)) {
                    var o = n.map((function (t) {
                        return t.name
                    }
                    ))
                        , i = [];
                    e.forEach((function (t) {
                        -1 === o.indexOf(t.name) && -1 === i.indexOf(t.name) && (r.push(t),
                            i.push(t.name))
                    }
                    )),
                        n.forEach((function (t) {
                            -1 === i.indexOf(t.name) && (r.push(t),
                                i.push(t.name))
                        }
                        ))
                } else
                    "function" === typeof n ? (r = n(e),
                        r = Array.isArray(r) ? r : [r]) : r = s(e);
                var a = r.map((function (t) {
                    return t.name
                }
                ))
                    , u = "Debug";
                return -1 !== a.indexOf(u) && r.push.apply(r, s(r.splice(a.indexOf(u), 1))),
                    r
            }(t).forEach((function (t) {
                e[t.name] = t,
                    function (t) {
                        -1 === $.indexOf(t.name) && (t.setupOnce(u.c, r.Gd),
                            $.push(t.name),
                            o.k.log("Integration installed: " + t.name))
                    }(t)
            }
            )),
                e
        }
        var J, V = function () {
            function t(t, e) {
                this._integrations = {},
                    this._processing = !1,
                    this._backend = new t(e),
                    this._options = e,
                    e.dsn && (this._dsn = new C(e.dsn))
            }
            return t.prototype.captureException = function (t, e, n) {
                var r = this
                    , o = e && e.event_id;
                return this._processing = !0,
                    this._getBackend().eventFromException(t, e).then((function (t) {
                        o = r.captureEvent(t, e, n)
                    }
                    )),
                    o
            }
                ,
                t.prototype.captureMessage = function (t, e, n, r) {
                    var o = this
                        , i = n && n.event_id;
                    return this._processing = !0,
                        ((0,
                            l.pt)(t) ? this._getBackend().eventFromMessage("" + t, e, n) : this._getBackend().eventFromException(t, n)).then((function (t) {
                                i = o.captureEvent(t, n, r)
                            }
                            )),
                        i
                }
                ,
                t.prototype.captureEvent = function (t, e, n) {
                    var r = this
                        , i = e && e.event_id;
                    return this._processing = !0,
                        this._processEvent(t, e, n).then((function (t) {
                            i = t && t.event_id,
                                r._processing = !1
                        }
                        )).then(null, (function (t) {
                            o.k.error(t),
                                r._processing = !1
                        }
                        )),
                        i
                }
                ,
                t.prototype.getDsn = function () {
                    return this._dsn
                }
                ,
                t.prototype.getOptions = function () {
                    return this._options
                }
                ,
                t.prototype.flush = function (t) {
                    var e = this;
                    return this._isClientProcessing(t).then((function (n) {
                        return clearInterval(n.interval),
                            e._getBackend().getTransport().close(t).then((function (t) {
                                return n.ready && t
                            }
                            ))
                    }
                    ))
                }
                ,
                t.prototype.close = function (t) {
                    var e = this;
                    return this.flush(t).then((function (t) {
                        return e.getOptions().enabled = !1,
                            t
                    }
                    ))
                }
                ,
                t.prototype.setupIntegrations = function () {
                    this._isEnabled() && (this._integrations = z(this._options))
                }
                ,
                t.prototype.getIntegration = function (t) {
                    try {
                        return this._integrations[t.id] || null
                    } catch (e) {
                        return o.k.warn("Cannot retrieve integration " + t.id + " from the current Client"),
                            null
                    }
                }
                ,
                t.prototype._isClientProcessing = function (t) {
                    var e = this;
                    return new _.c((function (n) {
                        var r = 0
                            , o = 0;
                        clearInterval(o),
                            o = setInterval((function () {
                                e._processing ? (r += 1,
                                    t && r >= t && n({
                                        interval: o,
                                        ready: !1
                                    })) : n({
                                        interval: o,
                                        ready: !0
                                    })
                            }
                            ), 1)
                    }
                    ))
                }
                ,
                t.prototype._getBackend = function () {
                    return this._backend
                }
                ,
                t.prototype._isEnabled = function () {
                    return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                }
                ,
                t.prototype._prepareEvent = function (t, e, n) {
                    var r = this
                        , o = this.getOptions().normalizeDepth
                        , a = void 0 === o ? 3 : o
                        , s = i(i({}, t), {
                            event_id: t.event_id || (n && n.event_id ? n.event_id : (0,
                                c.DM)()),
                            timestamp: t.timestamp || (0,
                                c._I)()
                        });
                    this._applyClientOptions(s),
                        this._applyIntegrationsMetadata(s);
                    var l = e;
                    n && n.captureContext && (l = u.s.clone(l).update(n.captureContext));
                    var p = _.c.resolve(s);
                    return l && (p = l.applyToEvent(s, n)),
                        p.then((function (t) {
                            return "number" === typeof a && a > 0 ? r._normalizeEvent(t, a) : t
                        }
                        ))
                }
                ,
                t.prototype._normalizeEvent = function (t, e) {
                    if (!t)
                        return null;
                    var n = i(i(i(i(i({}, t), t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map((function (t) {
                            return i(i({}, t), t.data && {
                                data: G(t.data, e)
                            })
                        }
                        ))
                    }), t.user && {
                        user: G(t.user, e)
                    }), t.contexts && {
                        contexts: G(t.contexts, e)
                    }), t.extra && {
                        extra: G(t.extra, e)
                    });
                    return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace),
                        n
                }
                ,
                t.prototype._applyClientOptions = function (t) {
                    var e = this.getOptions()
                        , n = e.environment
                        , r = e.release
                        , o = e.dist
                        , i = e.maxValueLength
                        , a = void 0 === i ? 250 : i;
                    void 0 === t.environment && void 0 !== n && (t.environment = n),
                        void 0 === t.release && void 0 !== r && (t.release = r),
                        void 0 === t.dist && void 0 !== o && (t.dist = o),
                        t.message && (t.message = p(t.message, a));
                    var s = t.exception && t.exception.values && t.exception.values[0];
                    s && s.value && (s.value = p(s.value, a));
                    var u = t.request;
                    u && u.url && (u.url = p(u.url, a))
                }
                ,
                t.prototype._applyIntegrationsMetadata = function (t) {
                    var e = t.sdk
                        , n = Object.keys(this._integrations);
                    e && n.length > 0 && (e.integrations = n)
                }
                ,
                t.prototype._sendEvent = function (t) {
                    this._getBackend().sendEvent(t)
                }
                ,
                t.prototype._processEvent = function (t, e, n) {
                    var r = this
                        , i = this.getOptions()
                        , a = i.beforeSend
                        , s = i.sampleRate;
                    if (!this._isEnabled())
                        return _.c.reject("SDK not enabled, will not send event.");
                    var u = "transaction" === t.type;
                    return !u && "number" === typeof s && Math.random() > s ? _.c.reject("This event has been sampled, will not send event.") : new _.c((function (i, s) {
                        r._prepareEvent(t, n, e).then((function (t) {
                            if (null !== t) {
                                var n = t;
                                if (e && e.data && !0 === e.data.__sentry__ || !a || u)
                                    return r._sendEvent(n),
                                        void i(n);
                                var c = a(t, e);
                                if ("undefined" === typeof c)
                                    o.k.error("`beforeSend` method has to return `null` or a valid event.");
                                else if ((0,
                                    l.J8)(c))
                                    r._handleAsyncBeforeSend(c, i, s);
                                else {
                                    if (null === (n = c))
                                        return o.k.log("`beforeSend` returned `null`, will not send event."),
                                            void i(null);
                                    r._sendEvent(n),
                                        i(n)
                                }
                            } else
                                s("An event processor returned null, will not send event.")
                        }
                        )).then(null, (function (t) {
                            r.captureException(t, {
                                data: {
                                    __sentry__: !0
                                },
                                originalException: t
                            }),
                                s("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                        }
                        ))
                    }
                    ))
                }
                ,
                t.prototype._handleAsyncBeforeSend = function (t, e, n) {
                    var r = this;
                    t.then((function (t) {
                        null !== t ? (r._sendEvent(t),
                            e(t)) : n("`beforeSend` returned `null`, will not send event.")
                    }
                    )).then(null, (function (t) {
                        n("beforeSend rejected with " + t)
                    }
                    ))
                }
                ,
                t
        }();
        !function (t) {
            t.Unknown = "unknown",
                t.Skipped = "skipped",
                t.Success = "success",
                t.RateLimit = "rate_limit",
                t.Invalid = "invalid",
                t.Failed = "failed"
        }(J || (J = {})),
            function (t) {
                t.fromHttpCode = function (e) {
                    return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
                }
            }(J || (J = {}));
        var K, Y = function () {
            function t() { }
            return t.prototype.sendEvent = function (t) {
                return _.c.resolve({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: J.Skipped
                })
            }
                ,
                t.prototype.close = function (t) {
                    return _.c.resolve(!0)
                }
                ,
                t
        }(), Z = function () {
            function t(t) {
                this._options = t,
                    this._options.dsn || o.k.warn("No DSN provided, backend will not do anything."),
                    this._transport = this._setupTransport()
            }
            return t.prototype.eventFromException = function (t, e) {
                throw new T("Backend has to implement `eventFromException` method")
            }
                ,
                t.prototype.eventFromMessage = function (t, e, n) {
                    throw new T("Backend has to implement `eventFromMessage` method")
                }
                ,
                t.prototype.sendEvent = function (t) {
                    this._transport.sendEvent(t).then(null, (function (t) {
                        o.k.error("Error while sending event: " + t)
                    }
                    ))
                }
                ,
                t.prototype.getTransport = function () {
                    return this._transport
                }
                ,
                t.prototype._setupTransport = function () {
                    return new Y
                }
                ,
                t
        }();
        function Q() {
            if (!("fetch" in (0,
                c.Rf)()))
                return !1;
            try {
                return new Headers,
                    new Request(""),
                    new Response,
                    !0
            } catch (t) {
                return !1
            }
        }
        function tt(t) {
            return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        }
        function et() {
            if (!Q())
                return !1;
            try {
                return new Request("_", {
                    referrerPolicy: "origin"
                }),
                    !0
            } catch (t) {
                return !1
            }
        }
        !function (t) {
            t.Fatal = "fatal",
                t.Error = "error",
                t.Warning = "warning",
                t.Log = "log",
                t.Info = "info",
                t.Debug = "debug",
                t.Critical = "critical"
        }(K || (K = {})),
            function (t) {
                t.fromString = function (e) {
                    switch (e) {
                        case "debug":
                            return t.Debug;
                        case "info":
                            return t.Info;
                        case "warn":
                        case "warning":
                            return t.Warning;
                        case "error":
                            return t.Error;
                        case "fatal":
                            return t.Fatal;
                        case "critical":
                            return t.Critical;
                        case "log":
                        default:
                            return t.Log
                    }
                }
            }(K || (K = {}));
        var nt = "?"
            , rt = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
            , ot = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i
            , it = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
            , at = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
            , st = /\((\S*)(?::(\d+))(?::(\d+))\)/
            , ut = /Minified React error #\d+;/i;
        function ct(t) {
            var e = null
                , n = 0;
            t && ("number" === typeof t.framesToPop ? n = t.framesToPop : ut.test(t.message) && (n = 1));
            try {
                if (e = function (t) {
                    if (!t || !t.stacktrace)
                        return null;
                    for (var e, n = t.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, i = n.split("\n"), a = [], s = 0; s < i.length; s += 2) {
                        var u = null;
                        (e = r.exec(i[s])) ? u = {
                            url: e[2],
                            func: e[3],
                            args: [],
                            line: +e[1],
                            column: null
                        } : (e = o.exec(i[s])) && (u = {
                            url: e[6],
                            func: e[3] || e[4],
                            args: e[5] ? e[5].split(",") : [],
                            line: +e[1],
                            column: +e[2]
                        }),
                            u && (!u.func && u.line && (u.func = nt),
                                a.push(u))
                    }
                    if (!a.length)
                        return null;
                    return {
                        message: pt(t),
                        name: t.name,
                        stack: a
                    }
                }(t))
                    return lt(e, n)
            } catch (r) { }
            try {
                if (e = function (t) {
                    if (!t || !t.stack)
                        return null;
                    for (var e, n, r, o = [], i = t.stack.split("\n"), a = 0; a < i.length; ++a) {
                        if (n = rt.exec(i[a])) {
                            var s = n[2] && 0 === n[2].indexOf("native");
                            n[2] && 0 === n[2].indexOf("eval") && (e = st.exec(n[2])) && (n[2] = e[1],
                                n[3] = e[2],
                                n[4] = e[3]),
                                r = {
                                    url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                                    func: n[1] || nt,
                                    args: s ? [n[2]] : [],
                                    line: n[3] ? +n[3] : null,
                                    column: n[4] ? +n[4] : null
                                }
                        } else if (n = it.exec(i[a]))
                            r = {
                                url: n[2],
                                func: n[1] || nt,
                                args: [],
                                line: +n[3],
                                column: n[4] ? +n[4] : null
                            };
                        else {
                            if (!(n = ot.exec(i[a])))
                                continue;
                            n[3] && n[3].indexOf(" > eval") > -1 && (e = at.exec(n[3])) ? (n[1] = n[1] || "eval",
                                n[3] = e[1],
                                n[4] = e[2],
                                n[5] = "") : 0 !== a || n[5] || void 0 === t.columnNumber || (o[0].column = t.columnNumber + 1),
                                r = {
                                    url: n[3],
                                    func: n[1] || nt,
                                    args: n[2] ? n[2].split(",") : [],
                                    line: n[4] ? +n[4] : null,
                                    column: n[5] ? +n[5] : null
                                }
                        }
                        !r.func && r.line && (r.func = nt),
                            o.push(r)
                    }
                    if (!o.length)
                        return null;
                    return {
                        message: pt(t),
                        name: t.name,
                        stack: o
                    }
                }(t))
                    return lt(e, n)
            } catch (r) { }
            return {
                message: pt(t),
                name: t && t.name,
                stack: [],
                failed: !0
            }
        }
        function lt(t, e) {
            try {
                return E(E({}, t), {
                    stack: t.stack.slice(e)
                })
            } catch (n) {
                return t
            }
        }
        function pt(t) {
            var e = t && t.message;
            return e ? e.error && "string" === typeof e.error.message ? e.error.message : e : "No error message"
        }
        function dt(t) {
            var e = ht(t.stack)
                , n = {
                    type: t.name,
                    value: t.message
                };
            return e && e.length && (n.stacktrace = {
                frames: e
            }),
                void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"),
                n
        }
        function ft(t) {
            return {
                exception: {
                    values: [dt(t)]
                }
            }
        }
        function ht(t) {
            if (!t || !t.length)
                return [];
            var e = t
                , n = e[0].func || ""
                , r = e[e.length - 1].func || "";
            return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)),
                -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)),
                e.slice(0, 50).map((function (t) {
                    return {
                        colno: null === t.column ? void 0 : t.column,
                        filename: t.url || e[0].url,
                        function: t.func || "?",
                        in_app: !0,
                        lineno: null === t.line ? void 0 : t.line
                    }
                }
                )).reverse()
        }
        function vt(t, e, n) {
            var r;
            if (void 0 === n && (n = {}),
                (0,
                    l.VW)(t) && t.error)
                return r = ft(ct(t = t.error));
            if ((0,
                l.TX)(t) || (0,
                    l.fm)(t)) {
                var o = t
                    , i = o.name || ((0,
                        l.TX)(o) ? "DOMError" : "DOMException")
                    , a = o.message ? i + ": " + o.message : i;
                return r = yt(a, e, n),
                    (0,
                        c.Db)(r, a),
                    r
            }
            return (0,
                l.VZ)(t) ? r = ft(ct(t)) : (0,
                    l.PO)(t) || (0,
                        l.cO)(t) ? (r = function (t, e, n) {
                            var r = {
                                exception: {
                                    values: [{
                                        type: (0,
                                            l.cO)(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + X(t)
                                    }]
                                },
                                extra: {
                                    __serialized__: q(t)
                                }
                            };
                            if (e) {
                                var o = ht(ct(e).stack);
                                r.stacktrace = {
                                    frames: o
                                }
                            }
                            return r
                        }(t, e, n.rejection),
                            (0,
                                c.EG)(r, {
                                    synthetic: !0
                                }),
                            r) : (r = yt(t, e, n),
                                (0,
                                    c.Db)(r, "" + t, void 0),
                                (0,
                                    c.EG)(r, {
                                        synthetic: !0
                                    }),
                                r)
        }
        function yt(t, e, n) {
            void 0 === n && (n = {});
            var r = {
                message: t
            };
            if (n.attachStacktrace && e) {
                var o = ht(ct(e).stack);
                r.stacktrace = {
                    frames: o
                }
            }
            return r
        }
        function mt(t, e) {
            var n = "transaction" === t.type
                , r = {
                    body: JSON.stringify(t),
                    url: n ? e.getEnvelopeEndpointWithUrlEncodedAuth() : e.getStoreEndpointWithUrlEncodedAuth()
                };
            if (n) {
                var o = JSON.stringify({
                    event_id: t.event_id,
                    sent_at: new Date(1e3 * (0,
                        c._I)()).toISOString()
                }) + "\n" + JSON.stringify({
                    type: t.type
                }) + "\n" + r.body;
                r.body = o
            }
            return r
        }
        var _t = function () {
            function t(t) {
                this.dsn = t,
                    this._dsnObject = new C(t)
            }
            return t.prototype.getDsn = function () {
                return this._dsnObject
            }
                ,
                t.prototype.getBaseApiEndpoint = function () {
                    var t = this._dsnObject
                        , e = t.protocol ? t.protocol + ":" : ""
                        , n = t.port ? ":" + t.port : "";
                    return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
                }
                ,
                t.prototype.getStoreEndpoint = function () {
                    return this._getIngestEndpoint("store")
                }
                ,
                t.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
                    return this.getStoreEndpoint() + "?" + this._encodedAuth()
                }
                ,
                t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
                    return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
                }
                ,
                t.prototype.getStoreEndpointPath = function () {
                    var t = this._dsnObject;
                    return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
                }
                ,
                t.prototype.getRequestHeaders = function (t, e) {
                    var n = this._dsnObject
                        , r = ["Sentry sentry_version=7"];
                    return r.push("sentry_client=" + t + "/" + e),
                        r.push("sentry_key=" + n.user),
                        n.pass && r.push("sentry_secret=" + n.pass),
                    {
                        "Content-Type": "application/json",
                        "X-Sentry-Auth": r.join(", ")
                    }
                }
                ,
                t.prototype.getReportDialogEndpoint = function (t) {
                    void 0 === t && (t = {});
                    var e = this._dsnObject
                        , n = this.getBaseApiEndpoint() + "embed/error-page/"
                        , r = [];
                    for (var o in r.push("dsn=" + e.toString()),
                        t)
                        if ("user" === o) {
                            if (!t.user)
                                continue;
                            t.user.name && r.push("name=" + encodeURIComponent(t.user.name)),
                                t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
                        } else
                            r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
                    return r.length ? n + "?" + r.join("&") : n
                }
                ,
                t.prototype._getEnvelopeEndpoint = function () {
                    return this._getIngestEndpoint("envelope")
                }
                ,
                t.prototype._getIngestEndpoint = function (t) {
                    return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + t + "/"
                }
                ,
                t.prototype._encodedAuth = function () {
                    var t, e = {
                        sentry_key: this._dsnObject.user,
                        sentry_version: "7"
                    };
                    return t = e,
                        Object.keys(t).map((function (e) {
                            return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                        }
                        )).join("&")
                }
                ,
                t
        }()
            , gt = function () {
                function t(t) {
                    this._limit = t,
                        this._buffer = []
                }
                return t.prototype.isReady = function () {
                    return void 0 === this._limit || this.length() < this._limit
                }
                    ,
                    t.prototype.add = function (t) {
                        var e = this;
                        return this.isReady() ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t),
                            t.then((function () {
                                return e.remove(t)
                            }
                            )).then(null, (function () {
                                return e.remove(t).then(null, (function () { }
                                ))
                            }
                            )),
                            t) : _.c.reject(new T("Not adding Promise due to buffer limit reached."))
                    }
                    ,
                    t.prototype.remove = function (t) {
                        return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
                    }
                    ,
                    t.prototype.length = function () {
                        return this._buffer.length
                    }
                    ,
                    t.prototype.drain = function (t) {
                        var e = this;
                        return new _.c((function (n) {
                            var r = setTimeout((function () {
                                t && t > 0 && n(!1)
                            }
                            ), t);
                            _.c.all(e._buffer).then((function () {
                                clearTimeout(r),
                                    n(!0)
                            }
                            )).then(null, (function () {
                                n(!0)
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    t
            }()
            , bt = function () {
                function t(t) {
                    this.options = t,
                        this._buffer = new gt(30),
                        this._api = new _t(this.options.dsn),
                        this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
                }
                return t.prototype.sendEvent = function (t) {
                    throw new T("Transport Class has to implement `sendEvent` method")
                }
                    ,
                    t.prototype.close = function (t) {
                        return this._buffer.drain(t)
                    }
                    ,
                    t
            }()
            , Et = (0,
                c.Rf)()
            , wt = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._disabledUntil = new Date(Date.now()),
                        e
                }
                return b(e, t),
                    e.prototype.sendEvent = function (t) {
                        var e = this;
                        if (new Date(Date.now()) < this._disabledUntil)
                            return Promise.reject({
                                event: t,
                                reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                                status: 429
                            });
                        var n = mt(t, this._api)
                            , r = {
                                body: n.body,
                                method: "POST",
                                referrerPolicy: et() ? "origin" : ""
                            };
                        return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters),
                            void 0 !== this.options.headers && (r.headers = this.options.headers),
                            this._buffer.add(new _.c((function (t, i) {
                                Et.fetch(n.url, r).then((function (n) {
                                    var r = J.fromHttpCode(n.status);
                                    if (r !== J.Success) {
                                        if (r === J.RateLimit) {
                                            var a = Date.now()
                                                , s = n.headers.get("Retry-After");
                                            e._disabledUntil = new Date(a + (0,
                                                c.JY)(a, s)),
                                                o.k.warn("Too many requests, backing off till: " + e._disabledUntil)
                                        }
                                        i(n)
                                    } else
                                        t({
                                            status: r
                                        })
                                }
                                )).catch(i)
                            }
                            )))
                    }
                    ,
                    e
            }(bt)
            , kt = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._disabledUntil = new Date(Date.now()),
                        e
                }
                return b(e, t),
                    e.prototype.sendEvent = function (t) {
                        var e = this;
                        if (new Date(Date.now()) < this._disabledUntil)
                            return Promise.reject({
                                event: t,
                                reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                                status: 429
                            });
                        var n = mt(t, this._api);
                        return this._buffer.add(new _.c((function (t, r) {
                            var i = new XMLHttpRequest;
                            for (var a in i.onreadystatechange = function () {
                                if (4 === i.readyState) {
                                    var n = J.fromHttpCode(i.status);
                                    if (n !== J.Success) {
                                        if (n === J.RateLimit) {
                                            var a = Date.now()
                                                , s = i.getResponseHeader("Retry-After");
                                            e._disabledUntil = new Date(a + (0,
                                                c.JY)(a, s)),
                                                o.k.warn("Too many requests, backing off till: " + e._disabledUntil)
                                        }
                                        r(i)
                                    } else
                                        t({
                                            status: n
                                        })
                                }
                            }
                                ,
                                i.open("POST", n.url),
                                e.options.headers)
                                e.options.headers.hasOwnProperty(a) && i.setRequestHeader(a, e.options.headers[a]);
                            i.send(n.body)
                        }
                        )))
                    }
                    ,
                    e
            }(bt)
            , xt = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return b(e, t),
                    e.prototype.eventFromException = function (t, e) {
                        return function (t, e, n) {
                            var r = vt(e, n && n.syntheticException || void 0, {
                                attachStacktrace: t.attachStacktrace
                            });
                            return (0,
                                c.EG)(r, {
                                    handled: !0,
                                    type: "generic"
                                }),
                                r.level = K.Error,
                                n && n.event_id && (r.event_id = n.event_id),
                                _.c.resolve(r)
                        }(this._options, t, e)
                    }
                    ,
                    e.prototype.eventFromMessage = function (t, e, n) {
                        return void 0 === e && (e = K.Info),
                            function (t, e, n, r) {
                                void 0 === n && (n = K.Info);
                                var o = yt(e, r && r.syntheticException || void 0, {
                                    attachStacktrace: t.attachStacktrace
                                });
                                return o.level = n,
                                    r && r.event_id && (o.event_id = r.event_id),
                                    _.c.resolve(o)
                            }(this._options, t, e, n)
                    }
                    ,
                    e.prototype._setupTransport = function () {
                        if (!this._options.dsn)
                            return t.prototype._setupTransport.call(this);
                        var e = E(E({}, this._options.transportOptions), {
                            dsn: this._options.dsn
                        });
                        return this._options.transport ? new this._options.transport(e) : Q() ? new wt(e) : new kt(e)
                    }
                    ,
                    e
            }(Z)
            , Ot = n(71371)
            , St = 0;
        function jt() {
            return St > 0
        }
        function It() {
            St += 1,
                setTimeout((function () {
                    St -= 1
                }
                ))
        }
        function Tt(t, e, n) {
            if (void 0 === e && (e = {}),
                "function" !== typeof t)
                return t;
            try {
                if (t.__sentry__)
                    return t;
                if (t.__sentry_wrapped__)
                    return t.__sentry_wrapped__
            } catch (i) {
                return t
            }
            var r = function () {
                var r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" === typeof n && n.apply(this, arguments);
                    var o = r.map((function (t) {
                        return Tt(t, e)
                    }
                    ));
                    return t.handleEvent ? t.handleEvent.apply(this, o) : t.apply(this, o)
                } catch (i) {
                    throw It(),
                    (0,
                        Ot.$e)((function (t) {
                            t.addEventProcessor((function (t) {
                                var n = E({}, t);
                                return e.mechanism && ((0,
                                    c.Db)(n, void 0, void 0),
                                    (0,
                                        c.EG)(n, e.mechanism)),
                                    n.extra = E(E({}, n.extra), {
                                        arguments: r
                                    }),
                                    n
                            }
                            )),
                                (0,
                                    Ot.Tb)(i)
                        }
                        )),
                    i
                }
            };
            try {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o])
            } catch (a) { }
            t.prototype = t.prototype || {},
                r.prototype = t.prototype,
                Object.defineProperty(t, "__sentry_wrapped__", {
                    enumerable: !1,
                    value: r
                }),
                Object.defineProperties(r, {
                    __sentry__: {
                        enumerable: !1,
                        value: !0
                    },
                    __sentry_original__: {
                        enumerable: !1,
                        value: t
                    }
                });
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                    get: function () {
                        return t.name
                    }
                })
            } catch (a) { }
            return r
        }
        function Rt(t) {
            if (void 0 === t && (t = {}),
                t.eventId)
                if (t.dsn) {
                    var e = document.createElement("script");
                    e.async = !0,
                        e.src = new _t(t.dsn).getReportDialogEndpoint(t),
                        t.onLoad && (e.onload = t.onLoad),
                        (document.head || document.body).appendChild(e)
                } else
                    o.k.error("Missing dsn option in showReportDialog call");
            else
                o.k.error("Missing eventId option in showReportDialog call")
        }
        var Dt, Ct = (0,
            c.Rf)(), Ut = {}, At = {};
        function Mt(t) {
            if (!At[t])
                switch (At[t] = !0,
                t) {
                    case "console":
                        !function () {
                            if (!("console" in Ct))
                                return;
                            ["debug", "info", "warn", "error", "log", "assert"].forEach((function (t) {
                                t in Ct.console && F(Ct.console, t, (function (e) {
                                    return function () {
                                        for (var n = [], r = 0; r < arguments.length; r++)
                                            n[r] = arguments[r];
                                        Pt("console", {
                                            args: n,
                                            level: t
                                        }),
                                            e && Function.prototype.apply.call(e, Ct.console, n)
                                    }
                                }
                                ))
                            }
                            ))
                        }();
                        break;
                    case "dom":
                        !function () {
                            if (!("document" in Ct))
                                return;
                            Ct.document.addEventListener("click", Wt("click", Pt.bind(null, "dom")), !1),
                                Ct.document.addEventListener("keypress", Gt(Pt.bind(null, "dom")), !1),
                                ["EventTarget", "Node"].forEach((function (t) {
                                    var e = Ct[t] && Ct[t].prototype;
                                    e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (F(e, "addEventListener", (function (t) {
                                        return function (e, n, r) {
                                            return n && n.handleEvent ? ("click" === e && F(n, "handleEvent", (function (t) {
                                                return function (e) {
                                                    return Wt("click", Pt.bind(null, "dom"))(e),
                                                        t.call(this, e)
                                                }
                                            }
                                            )),
                                                "keypress" === e && F(n, "handleEvent", (function (t) {
                                                    return function (e) {
                                                        return Gt(Pt.bind(null, "dom"))(e),
                                                            t.call(this, e)
                                                    }
                                                }
                                                ))) : ("click" === e && Wt("click", Pt.bind(null, "dom"), !0)(this),
                                                    "keypress" === e && Gt(Pt.bind(null, "dom"))(this)),
                                                t.call(this, e, n, r)
                                        }
                                    }
                                    )),
                                        F(e, "removeEventListener", (function (t) {
                                            return function (e, n, r) {
                                                try {
                                                    t.call(this, e, n.__sentry_wrapped__, r)
                                                } catch (o) { }
                                                return t.call(this, e, n, r)
                                            }
                                        }
                                        )))
                                }
                                ))
                        }();
                        break;
                    case "xhr":
                        !function () {
                            if (!("XMLHttpRequest" in Ct))
                                return;
                            var t = []
                                , e = []
                                , n = XMLHttpRequest.prototype;
                            F(n, "open", (function (n) {
                                return function () {
                                    for (var r = [], o = 0; o < arguments.length; o++)
                                        r[o] = arguments[o];
                                    var i = this
                                        , a = r[1];
                                    i.__sentry_xhr__ = {
                                        method: (0,
                                            l.HD)(r[0]) ? r[0].toUpperCase() : r[0],
                                        url: r[1]
                                    },
                                        (0,
                                            l.HD)(a) && "POST" === i.__sentry_xhr__.method && a.match(/sentry_key/) && (i.__sentry_own_request__ = !0);
                                    var s = function () {
                                        if (4 === i.readyState) {
                                            try {
                                                i.__sentry_xhr__ && (i.__sentry_xhr__.status_code = i.status)
                                            } catch (a) { }
                                            try {
                                                var n = t.indexOf(i);
                                                if (-1 !== n) {
                                                    t.splice(n);
                                                    var o = e.splice(n)[0];
                                                    i.__sentry_xhr__ && void 0 !== o[0] && (i.__sentry_xhr__.body = o[0])
                                                }
                                            } catch (a) { }
                                            Pt("xhr", {
                                                args: r,
                                                endTimestamp: Date.now(),
                                                startTimestamp: Date.now(),
                                                xhr: i
                                            })
                                        }
                                    };
                                    return "onreadystatechange" in i && "function" === typeof i.onreadystatechange ? F(i, "onreadystatechange", (function (t) {
                                        return function () {
                                            for (var e = [], n = 0; n < arguments.length; n++)
                                                e[n] = arguments[n];
                                            return s(),
                                                t.apply(i, e)
                                        }
                                    }
                                    )) : i.addEventListener("readystatechange", s),
                                        n.apply(i, r)
                                }
                            }
                            )),
                                F(n, "send", (function (n) {
                                    return function () {
                                        for (var r = [], o = 0; o < arguments.length; o++)
                                            r[o] = arguments[o];
                                        return t.push(this),
                                            e.push(r),
                                            Pt("xhr", {
                                                args: r,
                                                startTimestamp: Date.now(),
                                                xhr: this
                                            }),
                                            n.apply(this, r)
                                    }
                                }
                                ))
                        }();
                        break;
                    case "fetch":
                        !function () {
                            if (!function () {
                                if (!Q())
                                    return !1;
                                var t = (0,
                                    c.Rf)();
                                if (tt(t.fetch))
                                    return !0;
                                var e = !1
                                    , n = t.document;
                                if (n && "function" === typeof n.createElement)
                                    try {
                                        var r = n.createElement("iframe");
                                        r.hidden = !0,
                                            n.head.appendChild(r),
                                            r.contentWindow && r.contentWindow.fetch && (e = tt(r.contentWindow.fetch)),
                                            n.head.removeChild(r)
                                    } catch (i) {
                                        o.k.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
                                    }
                                return e
                            }())
                                return;
                            F(Ct, "fetch", (function (t) {
                                return function () {
                                    for (var e = [], n = 0; n < arguments.length; n++)
                                        e[n] = arguments[n];
                                    var r = {
                                        args: e,
                                        fetchData: {
                                            method: Ft(e),
                                            url: Nt(e)
                                        },
                                        startTimestamp: Date.now()
                                    };
                                    return Pt("fetch", O({}, r)),
                                        t.apply(Ct, e).then((function (t) {
                                            return Pt("fetch", O(O({}, r), {
                                                endTimestamp: Date.now(),
                                                response: t
                                            })),
                                                t
                                        }
                                        ), (function (t) {
                                            throw Pt("fetch", O(O({}, r), {
                                                endTimestamp: Date.now(),
                                                error: t
                                            })),
                                            t
                                        }
                                        ))
                                }
                            }
                            ))
                        }();
                        break;
                    case "history":
                        !function () {
                            if (!function () {
                                var t = (0,
                                    c.Rf)()
                                    , e = t.chrome
                                    , n = e && e.app && e.app.runtime
                                    , r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
                                return !n && r
                            }())
                                return;
                            var t = Ct.onpopstate;
                            function e(t) {
                                return function () {
                                    for (var e = [], n = 0; n < arguments.length; n++)
                                        e[n] = arguments[n];
                                    var r = e.length > 2 ? e[2] : void 0;
                                    if (r) {
                                        var o = Dt
                                            , i = String(r);
                                        Dt = i,
                                            Pt("history", {
                                                from: o,
                                                to: i
                                            })
                                    }
                                    return t.apply(this, e)
                                }
                            }
                            Ct.onpopstate = function () {
                                for (var e = [], n = 0; n < arguments.length; n++)
                                    e[n] = arguments[n];
                                var r = Ct.location.href
                                    , o = Dt;
                                if (Dt = r,
                                    Pt("history", {
                                        from: o,
                                        to: r
                                    }),
                                    t)
                                    return t.apply(this, e)
                            }
                                ,
                                F(Ct.history, "pushState", e),
                                F(Ct.history, "replaceState", e)
                        }();
                        break;
                    case "error":
                        Xt = Ct.onerror,
                            Ct.onerror = function (t, e, n, r, o) {
                                return Pt("error", {
                                    column: r,
                                    error: o,
                                    line: n,
                                    msg: t,
                                    url: e
                                }),
                                    !!Xt && Xt.apply(this, arguments)
                            }
                            ;
                        break;
                    case "unhandledrejection":
                        $t = Ct.onunhandledrejection,
                            Ct.onunhandledrejection = function (t) {
                                return Pt("unhandledrejection", t),
                                    !$t || $t.apply(this, arguments)
                            }
                            ;
                        break;
                    default:
                        o.k.warn("unknown instrumentation type:", t)
                }
        }
        function Ht(t) {
            t && "string" === typeof t.type && "function" === typeof t.callback && (Ut[t.type] = Ut[t.type] || [],
                Ut[t.type].push(t.callback),
                Mt(t.type))
        }
        function Pt(t, e) {
            var n, r;
            if (t && Ut[t])
                try {
                    for (var i = S(Ut[t] || []), a = i.next(); !a.done; a = i.next()) {
                        var s = a.value;
                        try {
                            s(e)
                        } catch (u) {
                            o.k.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + P(s) + "\nError: " + u)
                        }
                    }
                } catch (c) {
                    n = {
                        error: c
                    }
                } finally {
                    try {
                        a && !a.done && (r = i.return) && r.call(i)
                    } finally {
                        if (n)
                            throw n.error
                    }
                }
        }
        function Ft(t) {
            return void 0 === t && (t = []),
                "Request" in Ct && (0,
                    l.V9)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
        }
        function Nt(t) {
            return void 0 === t && (t = []),
                "string" === typeof t[0] ? t[0] : "Request" in Ct && (0,
                    l.V9)(t[0], Request) ? t[0].url : String(t[0])
        }
        var Lt, qt, Bt = 0;
        function Wt(t, e, n) {
            return void 0 === n && (n = !1),
                function (r) {
                    Lt = void 0,
                        r && qt !== r && (qt = r,
                            Bt && clearTimeout(Bt),
                            n ? Bt = setTimeout((function () {
                                e({
                                    event: r,
                                    name: t
                                })
                            }
                            )) : e({
                                event: r,
                                name: t
                            }))
                }
        }
        function Gt(t) {
            return function (e) {
                var n;
                try {
                    n = e.target
                } catch (o) {
                    return
                }
                var r = n && n.tagName;
                r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) && (Lt || Wt("input", t)(e),
                    clearTimeout(Lt),
                    Lt = setTimeout((function () {
                        Lt = void 0
                    }
                    ), 1e3))
            }
        }
        var Xt = null;
        var $t = null;
        var zt = function () {
            function t(e) {
                this.name = t.id,
                    this._options = E({
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0
                    }, e)
            }
            return t.prototype.addSentryBreadcrumb = function (t) {
                this._options.sentry && (0,
                    r.Gd)().addBreadcrumb({
                        category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                        event_id: t.event_id,
                        level: t.level,
                        message: (0,
                            c.jH)(t)
                    }, {
                        event: t
                    })
            }
                ,
                t.prototype.setupOnce = function () {
                    var t = this;
                    this._options.console && Ht({
                        callback: function () {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            t._consoleBreadcrumb.apply(t, k(e))
                        },
                        type: "console"
                    }),
                        this._options.dom && Ht({
                            callback: function () {
                                for (var e = [], n = 0; n < arguments.length; n++)
                                    e[n] = arguments[n];
                                t._domBreadcrumb.apply(t, k(e))
                            },
                            type: "dom"
                        }),
                        this._options.xhr && Ht({
                            callback: function () {
                                for (var e = [], n = 0; n < arguments.length; n++)
                                    e[n] = arguments[n];
                                t._xhrBreadcrumb.apply(t, k(e))
                            },
                            type: "xhr"
                        }),
                        this._options.fetch && Ht({
                            callback: function () {
                                for (var e = [], n = 0; n < arguments.length; n++)
                                    e[n] = arguments[n];
                                t._fetchBreadcrumb.apply(t, k(e))
                            },
                            type: "fetch"
                        }),
                        this._options.history && Ht({
                            callback: function () {
                                for (var e = [], n = 0; n < arguments.length; n++)
                                    e[n] = arguments[n];
                                t._historyBreadcrumb.apply(t, k(e))
                            },
                            type: "history"
                        })
                }
                ,
                t.prototype._consoleBreadcrumb = function (t) {
                    var e = {
                        category: "console",
                        data: {
                            arguments: t.args,
                            logger: "console"
                        },
                        level: K.fromString(t.level),
                        message: d(t.args, " ")
                    };
                    if ("assert" === t.level) {
                        if (!1 !== t.args[0])
                            return;
                        e.message = "Assertion failed: " + (d(t.args.slice(1), " ") || "console.assert"),
                            e.data.arguments = t.args.slice(1)
                    }
                    (0,
                        r.Gd)().addBreadcrumb(e, {
                            input: t.args,
                            level: t.level
                        })
                }
                ,
                t.prototype._domBreadcrumb = function (t) {
                    var e;
                    try {
                        e = t.event.target ? U(t.event.target) : U(t.event)
                    } catch (n) {
                        e = "<unknown>"
                    }
                    0 !== e.length && (0,
                        r.Gd)().addBreadcrumb({
                            category: "ui." + t.name,
                            message: e
                        }, {
                            event: t.event,
                            name: t.name
                        })
                }
                ,
                t.prototype._xhrBreadcrumb = function (t) {
                    if (t.endTimestamp) {
                        if (t.xhr.__sentry_own_request__)
                            return;
                        var e = t.xhr.__sentry_xhr__ || {}
                            , n = e.method
                            , o = e.url
                            , i = e.status_code
                            , a = e.body;
                        (0,
                            r.Gd)().addBreadcrumb({
                                category: "xhr",
                                data: {
                                    method: n,
                                    url: o,
                                    status_code: i
                                },
                                type: "http"
                            }, {
                                xhr: t.xhr,
                                input: a
                            })
                    } else
                        ;
                }
                ,
                t.prototype._fetchBreadcrumb = function (t) {
                    t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? (0,
                        r.Gd)().addBreadcrumb({
                            category: "fetch",
                            data: t.fetchData,
                            level: K.Error,
                            type: "http"
                        }, {
                            data: t.error,
                            input: t.args
                        }) : (0,
                            r.Gd)().addBreadcrumb({
                                category: "fetch",
                                data: E(E({}, t.fetchData), {
                                    status_code: t.response.status
                                }),
                                type: "http"
                            }, {
                                input: t.args,
                                response: t.response
                            })))
                }
                ,
                t.prototype._historyBreadcrumb = function (t) {
                    var e = (0,
                        c.Rf)()
                        , n = t.from
                        , o = t.to
                        , i = (0,
                            c.en)(e.location.href)
                        , a = (0,
                            c.en)(n)
                        , s = (0,
                            c.en)(o);
                    a.path || (a = i),
                        i.protocol === s.protocol && i.host === s.host && (o = s.relative),
                        i.protocol === a.protocol && i.host === a.host && (n = a.relative),
                        (0,
                            r.Gd)().addBreadcrumb({
                                category: "navigation",
                                data: {
                                    from: n,
                                    to: o
                                }
                            })
                }
                ,
                t.id = "Breadcrumbs",
                t
        }()
            , Jt = "5.24.2"
            , Vt = function (t) {
                function e(e) {
                    return void 0 === e && (e = {}),
                        t.call(this, xt, e) || this
                }
                return b(e, t),
                    e.prototype.showReportDialog = function (t) {
                        void 0 === t && (t = {}),
                            (0,
                                c.Rf)().document && (this._isEnabled() ? Rt(E(E({}, t), {
                                    dsn: t.dsn || this.getDsn()
                                })) : o.k.error("Trying to call showReportDialog with Sentry Client disabled"))
                    }
                    ,
                    e.prototype._prepareEvent = function (e, n, r) {
                        return e.platform = e.platform || "javascript",
                            e.sdk = E(E({}, e.sdk), {
                                name: "sentry.javascript.browser",
                                packages: k(e.sdk && e.sdk.packages || [], [{
                                    name: "npm:@sentry/browser",
                                    version: Jt
                                }]),
                                version: Jt
                            }),
                            t.prototype._prepareEvent.call(this, e, n, r)
                    }
                    ,
                    e.prototype._sendEvent = function (e) {
                        var n = this.getIntegration(zt);
                        n && n.addSentryBreadcrumb(e),
                            t.prototype._sendEvent.call(this, e)
                    }
                    ,
                    e
            }(V)
            , Kt = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
            , Yt = function () {
                function t(e) {
                    this.name = t.id,
                        this._options = E({
                            XMLHttpRequest: !0,
                            eventTarget: !0,
                            requestAnimationFrame: !0,
                            setInterval: !0,
                            setTimeout: !0
                        }, e)
                }
                return t.prototype.setupOnce = function () {
                    var t = (0,
                        c.Rf)();
                    (this._options.setTimeout && F(t, "setTimeout", this._wrapTimeFunction.bind(this)),
                        this._options.setInterval && F(t, "setInterval", this._wrapTimeFunction.bind(this)),
                        this._options.requestAnimationFrame && F(t, "requestAnimationFrame", this._wrapRAF.bind(this)),
                        this._options.XMLHttpRequest && "XMLHttpRequest" in t && F(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
                        this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : Kt).forEach(this._wrapEventTarget.bind(this))
                }
                    ,
                    t.prototype._wrapTimeFunction = function (t) {
                        return function () {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            var r = e[0];
                            return e[0] = Tt(r, {
                                mechanism: {
                                    data: {
                                        function: P(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }),
                                t.apply(this, e)
                        }
                    }
                    ,
                    t.prototype._wrapRAF = function (t) {
                        return function (e) {
                            return t.call(this, Tt(e, {
                                mechanism: {
                                    data: {
                                        function: "requestAnimationFrame",
                                        handler: P(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        }
                    }
                    ,
                    t.prototype._wrapEventTarget = function (t) {
                        var e = (0,
                            c.Rf)()
                            , n = e[t] && e[t].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (F(n, "addEventListener", (function (e) {
                            return function (n, r, o) {
                                try {
                                    "function" === typeof r.handleEvent && (r.handleEvent = Tt(r.handleEvent.bind(r), {
                                        mechanism: {
                                            data: {
                                                function: "handleEvent",
                                                handler: P(r),
                                                target: t
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    }))
                                } catch (i) { }
                                return e.call(this, n, Tt(r, {
                                    mechanism: {
                                        data: {
                                            function: "addEventListener",
                                            handler: P(r),
                                            target: t
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }), o)
                            }
                        }
                        )),
                            F(n, "removeEventListener", (function (t) {
                                return function (e, n, r) {
                                    try {
                                        t.call(this, e, n.__sentry_wrapped__, r)
                                    } catch (o) { }
                                    return t.call(this, e, n, r)
                                }
                            }
                            )))
                    }
                    ,
                    t.prototype._wrapXHR = function (t) {
                        return function () {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            var r = this
                                , o = ["onload", "onerror", "onprogress", "onreadystatechange"];
                            return o.forEach((function (t) {
                                t in r && "function" === typeof r[t] && F(r, t, (function (e) {
                                    var n = {
                                        mechanism: {
                                            data: {
                                                function: t,
                                                handler: P(e)
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    };
                                    return e.__sentry_original__ && (n.mechanism.data.handler = P(e.__sentry_original__)),
                                        Tt(e, n)
                                }
                                ))
                            }
                            )),
                                t.apply(this, e)
                        }
                    }
                    ,
                    t.id = "TryCatch",
                    t
            }()
            , Zt = function () {
                function t(e) {
                    this.name = t.id,
                        this._onErrorHandlerInstalled = !1,
                        this._onUnhandledRejectionHandlerInstalled = !1,
                        this._options = E({
                            onerror: !0,
                            onunhandledrejection: !0
                        }, e)
                }
                return t.prototype.setupOnce = function () {
                    Error.stackTraceLimit = 50,
                        this._options.onerror && (o.k.log("Global Handler attached: onerror"),
                            this._installGlobalOnErrorHandler()),
                        this._options.onunhandledrejection && (o.k.log("Global Handler attached: onunhandledrejection"),
                            this._installGlobalOnUnhandledRejectionHandler())
                }
                    ,
                    t.prototype._installGlobalOnErrorHandler = function () {
                        var e = this;
                        this._onErrorHandlerInstalled || (Ht({
                            callback: function (n) {
                                var o = n.error
                                    , i = (0,
                                        r.Gd)()
                                    , a = i.getIntegration(t)
                                    , s = o && !0 === o.__sentry_own_request__;
                                if (a && !jt() && !s) {
                                    var u = i.getClient()
                                        , p = (0,
                                            l.pt)(o) ? e._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : e._enhanceEventWithInitialFrame(vt(o, void 0, {
                                                attachStacktrace: u && u.getOptions().attachStacktrace,
                                                rejection: !1
                                            }), n.url, n.line, n.column);
                                    (0,
                                        c.EG)(p, {
                                            handled: !1,
                                            type: "onerror"
                                        }),
                                        i.captureEvent(p, {
                                            originalException: o
                                        })
                                }
                            },
                            type: "error"
                        }),
                            this._onErrorHandlerInstalled = !0)
                    }
                    ,
                    t.prototype._installGlobalOnUnhandledRejectionHandler = function () {
                        var e = this;
                        this._onUnhandledRejectionHandlerInstalled || (Ht({
                            callback: function (n) {
                                var o = n;
                                try {
                                    "reason" in n ? o = n.reason : "detail" in n && "reason" in n.detail && (o = n.detail.reason)
                                } catch (d) { }
                                var i = (0,
                                    r.Gd)()
                                    , a = i.getIntegration(t)
                                    , s = o && !0 === o.__sentry_own_request__;
                                if (!a || jt() || s)
                                    return !0;
                                var u = i.getClient()
                                    , p = (0,
                                        l.pt)(o) ? e._eventFromIncompleteRejection(o) : vt(o, void 0, {
                                            attachStacktrace: u && u.getOptions().attachStacktrace,
                                            rejection: !0
                                        });
                                p.level = K.Error,
                                    (0,
                                        c.EG)(p, {
                                            handled: !1,
                                            type: "onunhandledrejection"
                                        }),
                                    i.captureEvent(p, {
                                        originalException: o
                                    })
                            },
                            type: "unhandledrejection"
                        }),
                            this._onUnhandledRejectionHandlerInstalled = !0)
                    }
                    ,
                    t.prototype._eventFromIncompleteOnError = function (t, e, n, r) {
                        var o, i = (0,
                            l.VW)(t) ? t.message : t;
                        if ((0,
                            l.HD)(i)) {
                            var a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                            a && (o = a[1],
                                i = a[2])
                        }
                        var s = {
                            exception: {
                                values: [{
                                    type: o || "Error",
                                    value: i
                                }]
                            }
                        };
                        return this._enhanceEventWithInitialFrame(s, e, n, r)
                    }
                    ,
                    t.prototype._eventFromIncompleteRejection = function (t) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: " + t
                                }]
                            }
                        }
                    }
                    ,
                    t.prototype._enhanceEventWithInitialFrame = function (t, e, n, r) {
                        t.exception = t.exception || {},
                            t.exception.values = t.exception.values || [],
                            t.exception.values[0] = t.exception.values[0] || {},
                            t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {},
                            t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
                        var o = isNaN(parseInt(r, 10)) ? void 0 : r
                            , i = isNaN(parseInt(n, 10)) ? void 0 : n
                            , a = (0,
                                l.HD)(e) && e.length > 0 ? e : (0,
                                    c.l4)();
                        return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
                            colno: o,
                            filename: a,
                            function: "?",
                            in_app: !0,
                            lineno: i
                        }),
                            t
                    }
                    ,
                    t.id = "GlobalHandlers",
                    t
            }()
            , Qt = function () {
                function t(e) {
                    void 0 === e && (e = {}),
                        this.name = t.id,
                        this._key = e.key || "cause",
                        this._limit = e.limit || 5
                }
                return t.prototype.setupOnce = function () {
                    (0,
                        u.c)((function (e, n) {
                            var o = (0,
                                r.Gd)().getIntegration(t);
                            return o ? o._handler(e, n) : e
                        }
                        ))
                }
                    ,
                    t.prototype._handler = function (t, e) {
                        if (!t.exception || !t.exception.values || !e || !(0,
                            l.V9)(e.originalException, Error))
                            return t;
                        var n = this._walkErrorTree(e.originalException, this._key);
                        return t.exception.values = k(n, t.exception.values),
                            t
                    }
                    ,
                    t.prototype._walkErrorTree = function (t, e, n) {
                        if (void 0 === n && (n = []),
                            !(0,
                                l.V9)(t[e], Error) || n.length + 1 >= this._limit)
                            return n;
                        var r = dt(ct(t[e]));
                        return this._walkErrorTree(t[e], e, k([r], n))
                    }
                    ,
                    t.id = "LinkedErrors",
                    t
            }()
            , te = (0,
                c.Rf)()
            , ee = function () {
                function t() {
                    this.name = t.id
                }
                return t.prototype.setupOnce = function () {
                    (0,
                        u.c)((function (e) {
                            var n, o, i;
                            if ((0,
                                r.Gd)().getIntegration(t)) {
                                if (!te.navigator && !te.location && !te.document)
                                    return e;
                                var a = (null === (n = e.request) || void 0 === n ? void 0 : n.url) || (null === (o = te.location) || void 0 === o ? void 0 : o.href)
                                    , s = (te.document || {}).referrer
                                    , u = (te.navigator || {}).userAgent
                                    , c = E(E(E({}, null === (i = e.request) || void 0 === i ? void 0 : i.headers), s && {
                                        Referer: s
                                    }), u && {
                                        "User-Agent": u
                                    })
                                    , l = E(E({}, a && {
                                        url: a
                                    }), {
                                        headers: c
                                    });
                                return E(E({}, e), {
                                    request: l
                                })
                            }
                            return e
                        }
                        ))
                }
                    ,
                    t.id = "UserAgent",
                    t
            }()
            , ne = [new y, new m, new Yt, new zt, new Zt, new Qt, new ee];
        function re(t) {
            if (void 0 === t && (t = {}),
                void 0 === t.defaultIntegrations && (t.defaultIntegrations = ne),
                void 0 === t.release) {
                var e = (0,
                    c.Rf)();
                e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
            }
            !function (t, e) {
                !0 === e.debug && o.k.enable();
                var n = (0,
                    r.Gd)()
                    , i = new t(e);
                n.bindClient(i)
            }(Vt, t)
        }
        function oe(t) {
            var e = (0,
                r.Gd)().getClient();
            return e ? e.flush(t) : _.c.reject(!1)
        }
    },
    93367: function (t, e, n) {
        "use strict";
        var r;
        e.__esModule = !0,
            e.AmpStateContext = void 0;
        var o = ((r = n(67294)) && r.__esModule ? r : {
            default: r
        }).default.createContext({});
        e.AmpStateContext = o
    },
    7845: function (t, e, n) {
        "use strict";
        e.__esModule = !0,
            e.isInAmpMode = a,
            e.useAmp = function () {
                return a(o.default.useContext(i.AmpStateContext))
            }
            ;
        var r, o = (r = n(67294)) && r.__esModule ? r : {
            default: r
        }, i = n(93367);
        function a() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , e = t.ampFirst
                , n = void 0 !== e && e
                , r = t.hybrid
                , o = void 0 !== r && r
                , i = t.hasQuery
                , a = void 0 !== i && i;
            return n || o && a
        }
    },
    74287: function (t, e, n) {
        "use strict";
        var r;
        e.__esModule = !0,
            e.HeadManagerContext = void 0;
        var o = ((r = n(67294)) && r.__esModule ? r : {
            default: r
        }).default.createContext({});
        e.HeadManagerContext = o
    },
    57947: function (t, e, n) {
        "use strict";
        n(59713);
        e.__esModule = !0,
            e.defaultHead = l,
            e.default = void 0;
        var r, o = function (t) {
            if (t && t.__esModule)
                return t;
            if (null === t || "object" !== typeof t && "function" !== typeof t)
                return {
                    default: t
                };
            var e = c();
            if (e && e.has(t))
                return e.get(t);
            var n = {}
                , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in t)
                if (Object.prototype.hasOwnProperty.call(t, o)) {
                    var i = r ? Object.getOwnPropertyDescriptor(t, o) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = t[o]
                }
            n.default = t,
                e && e.set(t, n);
            return n
        }(n(67294)), i = (r = n(60617)) && r.__esModule ? r : {
            default: r
        }, a = n(93367), s = n(74287), u = n(7845);
        function c() {
            if ("function" !== typeof WeakMap)
                return null;
            var t = new WeakMap;
            return c = function () {
                return t
            }
                ,
                t
        }
        function l() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                , e = [o.default.createElement("meta", {
                    charSet: "utf-8"
                })];
            return t || e.push(o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
                e
        }
        function p(t, e) {
            return "string" === typeof e || "number" === typeof e ? t : e.type === o.default.Fragment ? t.concat(o.default.Children.toArray(e.props.children).reduce((function (t, e) {
                return "string" === typeof e || "number" === typeof e ? t : t.concat(e)
            }
            ), [])) : t.concat(e)
        }
        var d = ["name", "httpEquiv", "charSet", "itemProp"];
        function f(t, e) {
            return t.reduce((function (t, e) {
                var n = o.default.Children.toArray(e.props.children);
                return t.concat(n)
            }
            ), []).reduce(p, []).reverse().concat(l(e.inAmpMode)).filter(function () {
                var t = new Set
                    , e = new Set
                    , n = new Set
                    , r = {};
                return function (o) {
                    var i = !0
                        , a = !1;
                    if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                        a = !0;
                        var s = o.key.slice(o.key.indexOf("$") + 1);
                        t.has(s) ? i = !1 : t.add(s)
                    }
                    switch (o.type) {
                        case "title":
                        case "base":
                            e.has(o.type) ? i = !1 : e.add(o.type);
                            break;
                        case "meta":
                            for (var u = 0, c = d.length; u < c; u++) {
                                var l = d[u];
                                if (o.props.hasOwnProperty(l))
                                    if ("charSet" === l)
                                        n.has(l) ? i = !1 : n.add(l);
                                    else {
                                        var p = o.props[l]
                                            , f = r[l] || new Set;
                                        "name" === l && a || !f.has(p) ? (f.add(p),
                                            r[l] = f) : i = !1
                                    }
                            }
                    }
                    return i
                }
            }()).reverse().map((function (t, e) {
                var n = t.key || e;
                return o.default.cloneElement(t, {
                    key: n
                })
            }
            ))
        }
        function h(t) {
            var e = t.children
                , n = (0,
                    o.useContext)(a.AmpStateContext)
                , r = (0,
                    o.useContext)(s.HeadManagerContext);
            return o.default.createElement(i.default, {
                reduceComponentsToState: f,
                headManager: r,
                inAmpMode: (0,
                    u.isInAmpMode)(n)
            }, e)
        }
        h.rewind = function () { }
            ;
        var v = h;
        e.default = v
    },
    60617: function (t, e, n) {
        "use strict";
        var r = n(319)
            , o = n(34575)
            , i = n(93913)
            , a = (n(81506),
                n(2205))
            , s = n(78585)
            , u = n(29754);
        function c(t) {
            var e = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }
                    ))),
                        !0
                } catch (t) {
                    return !1
                }
            }();
            return function () {
                var n, r = u(t);
                if (e) {
                    var o = u(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return s(this, n)
            }
        }
        e.__esModule = !0,
            e.default = void 0;
        var l = n(67294)
            , p = function (t) {
                a(n, t);
                var e = c(n);
                function n(t) {
                    var i;
                    return o(this, n),
                        (i = e.call(this, t))._hasHeadManager = void 0,
                        i.emitChange = function () {
                            i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances), i.props))
                        }
                        ,
                        i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances,
                        i
                }
                return i(n, [{
                    key: "componentDidMount",
                    value: function () {
                        this._hasHeadManager && this.props.headManager.mountedInstances.add(this),
                            this.emitChange()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function () {
                        this.emitChange()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this._hasHeadManager && this.props.headManager.mountedInstances.delete(this),
                            this.emitChange()
                    }
                }, {
                    key: "render",
                    value: function () {
                        return null
                    }
                }]),
                    n
            }(l.Component);
        e.default = p
    }
}]);
