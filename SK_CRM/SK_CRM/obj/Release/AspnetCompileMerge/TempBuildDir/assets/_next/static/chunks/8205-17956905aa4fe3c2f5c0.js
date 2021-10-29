(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8205], {
    92137: function (e, t, r) {
        "use strict";
        function n(e, t, r, n, o, i, s) {
            try {
                var a = e[i](s)
                    , c = a.value
            } catch (u) {
                return void r(u)
            }
            a.done ? t(c) : Promise.resolve(c).then(n, o)
        }
        function o(e) {
            return function () {
                var t = this
                    , r = arguments;
                return new Promise((function (o, i) {
                    var s = e.apply(t, r);
                    function a(e) {
                        n(s, o, i, a, c, "next", e)
                    }
                    function c(e) {
                        n(s, o, i, a, c, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
        }
        r.d(t, {
            Z: function () {
                return o
            }
        })
    },
    2949: function (e, t, r) {
        "use strict";
        r.d(t, {
            Z: function () {
                return o
            }
        });
        var n = r(19756);
        function o(e, t) {
            if (null == e)
                return {};
            var r, o, i = (0,
                n.Z)(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (o = 0; o < s.length; o++)
                    r = s[o],
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
            }
            return i
        }
    },
    35979: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.AuthenticationClient = void 0;
        const n = r(93009)
            , o = r(67480)
            , i = (e, t) => {
                const r = new RegExp(`(?:&?)${t}=([^&]*)`)
                    , n = e.hash ? e.hash.match(r) : null;
                if (null !== n) {
                    const [, e] = n;
                    return [e, r]
                }
                return [null, r]
            }
            ;
        t.AuthenticationClient = class {
            constructor(e, t) {
                const r = e.io || e.primus
                    , n = new o.StorageWrapper(e.get("storage") || t.storage);
                this.app = e,
                    this.options = t,
                    this.authenticated = !1,
                    this.app.set("storage", n),
                    r && this.handleSocket(r)
            }
            get service() {
                return this.app.service(this.options.path)
            }
            get storage() {
                return this.app.get("storage")
            }
            handleSocket(e) {
                const t = this.app.io ? "connect" : "open"
                    , r = this.app.io ? "disconnect" : "disconnection";
                e.on(r, (() => {
                    const r = new Promise((r => e.once(t, (() => r())))).then((() => this.authenticated ? this.reAuthenticate(!0) : null));
                    this.app.set("authentication", r)
                }
                ))
            }
            getFromLocation(e) {
                const [t, r] = i(e, this.options.locationKey);
                if (null !== t)
                    return e.hash = e.hash.replace(r, ""),
                        Promise.resolve(t);
                const [o, s] = i(e, this.options.locationErrorKey);
                return null !== o ? (e.hash = e.hash.replace(s, ""),
                    Promise.reject(new n.NotAuthenticated(decodeURIComponent(o)))) : Promise.resolve(null)
            }
            setAccessToken(e) {
                return this.storage.setItem(this.options.storageKey, e)
            }
            getAccessToken() {
                return this.storage.getItem(this.options.storageKey).then((e => !e && "undefined" !== typeof window && window.location ? this.getFromLocation(window.location) : e || null))
            }
            removeAccessToken() {
                return this.storage.removeItem(this.options.storageKey)
            }
            reset() {
                return this.app.set("authentication", null),
                    this.authenticated = !1,
                    Promise.resolve(null)
            }
            handleError(e, t) {
                if (401 === e.code || 403 === e.code) {
                    const r = this.removeAccessToken().then((() => this.reset()));
                    return "logout" === t ? r : r.then((() => Promise.reject(e)))
                }
                return Promise.reject(e)
            }
            reAuthenticate(e = !1) {
                const t = this.app.get("authentication");
                return t && !0 !== e ? t : this.getAccessToken().then((e => {
                    if (!e)
                        throw new n.NotAuthenticated("No accessToken found in storage");
                    return this.authenticate({
                        strategy: this.options.jwtStrategy,
                        accessToken: e
                    })
                }
                ))
            }
            authenticate(e, t) {
                if (!e)
                    return this.reAuthenticate();
                const r = this.service.create(e, t).then((e => {
                    const { accessToken: t } = e;
                    return this.authenticated = !0,
                        this.app.emit("login", e),
                        this.app.emit("authenticated", e),
                        this.setAccessToken(t).then((() => e))
                }
                )).catch((e => this.handleError(e, "authenticate")));
                return this.app.set("authentication", r),
                    r
            }
            logout() {
                return Promise.resolve(this.app.get("authentication")).then((() => this.service.remove(null).then((e => this.removeAccessToken().then((() => this.reset())).then((() => (this.app.emit("logout", e),
                    e))))))).catch((e => this.handleError(e, "logout")))
            }
        }
    },
    47954: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.authentication = void 0;
        const n = r(26936);
        t.authentication = () => e => {
            const { app: t, params: r, path: o, method: i, app: { authentication: s } } = e;
            return n.stripSlashes(s.options.path) === o && "create" === i ? e : Promise.resolve(t.get("authentication")).then((t => (t && (e.params = Object.assign({}, t, r)),
                e)))
        }
    },
    89157: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(47954);
        Object.defineProperty(t, "authentication", {
            enumerable: !0,
            get: function () {
                return n.authentication
            }
        });
        var o = r(66383);
        Object.defineProperty(t, "populateHeader", {
            enumerable: !0,
            get: function () {
                return o.populateHeader
            }
        })
    },
    66383: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.populateHeader = void 0,
            t.populateHeader = () => e => {
                const { app: t, params: { accessToken: r } } = e
                    , n = t.authentication;
                if (t.rest && r) {
                    const { scheme: t, header: o } = n.options
                        , i = `${t} ${r}`;
                    e.params.headers = Object.assign({}, {
                        [o]: i
                    }, e.params.headers)
                }
                return e
            }
    },
    63522: function (e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
            void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[r]
                    }
                })
        }
            : function (e, t, r, n) {
                void 0 === n && (n = r),
                    e[n] = t[r]
            }
        )
            , o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
                : function (e, t) {
                    e.default = t
                }
            )
            , i = this && this.__importStar || function (e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        "default" !== r && Object.hasOwnProperty.call(e, r) && n(t, e, r);
                return o(t, e),
                    t
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.defaults = t.defaultStorage = t.hooks = t.MemoryStorage = t.AuthenticationClient = t.getDefaultStorage = void 0;
        const s = r(35979);
        Object.defineProperty(t, "AuthenticationClient", {
            enumerable: !0,
            get: function () {
                return s.AuthenticationClient
            }
        });
        const a = i(r(89157));
        t.hooks = a;
        const c = r(67480);
        Object.defineProperty(t, "MemoryStorage", {
            enumerable: !0,
            get: function () {
                return c.MemoryStorage
            }
        }),
            t.getDefaultStorage = () => {
                try {
                    return new c.StorageWrapper(window.localStorage)
                } catch (e) { }
                return new c.MemoryStorage
            }
            ,
            t.defaultStorage = t.getDefaultStorage(),
            t.defaults = {
                header: "Authorization",
                scheme: "Bearer",
                storageKey: "feathers-jwt",
                locationKey: "access_token",
                locationErrorKey: "error",
                jwtStrategy: "jwt",
                path: "/authentication",
                Authentication: s.AuthenticationClient,
                storage: t.defaultStorage
            };
        const u = (e = {}) => {
            const r = Object.assign({}, t.defaults, e)
                , { Authentication: n } = r;
            return e => {
                const t = new n(e, r);
                e.authentication = t,
                    e.authenticate = t.authenticate.bind(t),
                    e.reAuthenticate = t.reAuthenticate.bind(t),
                    e.logout = t.logout.bind(t),
                    e.hooks({
                        before: {
                            all: [a.authentication(), a.populateHeader()]
                        }
                    })
            }
        }
            ;
        t.default = u,
            e.exports = Object.assign(u, e.exports)
    },
    67480: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.StorageWrapper = t.MemoryStorage = void 0;
        t.MemoryStorage = class {
            constructor() {
                this.store = {}
            }
            getItem(e) {
                return Promise.resolve(this.store[e])
            }
            setItem(e, t) {
                return Promise.resolve(this.store[e] = t)
            }
            removeItem(e) {
                const t = this.store[e];
                return delete this.store[e],
                    Promise.resolve(t)
            }
        }
            ;
        t.StorageWrapper = class {
            constructor(e) {
                this.storage = e
            }
            getItem(e) {
                return Promise.resolve(this.storage.getItem(e))
            }
            setItem(e, t) {
                return Promise.resolve(this.storage.setItem(e, t))
            }
            removeItem(e) {
                return Promise.resolve(this.storage.removeItem(e))
            }
        }
    },
    43479: function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.enableHooks = t.processHooks = t.getHooks = t.isHookObject = t.convertHookData = t.makeArguments = t.defaultMakeArguments = t.createHookObject = t.ACTIVATE_HOOKS = void 0;
        const n = r(92231)
            , { each: o, pick: i } = n._;
        function s(e) {
            const t = [];
            return "undefined" !== typeof e.id && t.push(e.id),
                e.data && t.push(e.data),
                t.push(e.params || {}),
                t
        }
        function a(e) {
            let t = {};
            return Array.isArray(e) ? t = {
                all: e
            } : "object" !== typeof e ? t = {
                all: [e]
            } : o(e, (function (e, r) {
                t[r] = Array.isArray(e) ? e : [e]
            }
            )),
                t
        }
        function c(e) {
            return "object" === typeof e && "string" === typeof e.method && "string" === typeof e.type
        }
        t.ACTIVATE_HOOKS = n.createSymbol("__feathersActivateHooks"),
            t.createHookObject = function (e, t = {}) {
                const r = {};
                return Object.defineProperty(r, "toJSON", {
                    value() {
                        return i(this, "type", "method", "path", "params", "id", "data", "result", "error")
                    }
                }),
                    Object.assign(r, t, {
                        method: e,
                        get path() {
                            const { app: e, service: r } = t;
                            return r && e && e.services ? Object.keys(e.services).find((t => e.services[t] === r)) : null
                        }
                    })
            }
            ,
            t.defaultMakeArguments = s,
            t.makeArguments = function (e) {
                switch (e.method) {
                    case "find":
                        return [e.params];
                    case "get":
                    case "remove":
                        return [e.id, e.params];
                    case "update":
                    case "patch":
                        return [e.id, e.data, e.params];
                    case "create":
                        return [e.data, e.params]
                }
                return s(e)
            }
            ,
            t.convertHookData = a,
            t.isHookObject = c,
            t.getHooks = function (e, t, r, n, o = !1) {
                const i = e.__hooks[r][n] || []
                    , s = t.__hooks[r][n] || [];
                return o ? s.concat(i) : i.concat(s)
            }
            ,
            t.processHooks = function (e, t) {
                let r = t;
                const n = e => {
                    if (e) {
                        if (!c(e))
                            throw new Error(`${r.type} hook for '${r.method}' method returned invalid hook object`);
                        r = e
                    }
                    return r
                }
                    ;
                return e.reduce(((e, t) => {
                    const r = t.bind(this);
                    return e.then((e => r(e))).then(n)
                }
                ), Promise.resolve(r)).then((() => r)).catch((e => {
                    throw e.hook = r,
                    e
                }
                ))
            }
            ,
            t.enableHooks = function (e, t, r) {
                if ("function" === typeof e.hooks)
                    return e;
                const n = {};
                return r.forEach((e => {
                    n[e] = {}
                }
                )),
                    Object.defineProperty(e, "__hooks", {
                        configurable: !0,
                        value: n,
                        writable: !0
                    }),
                    Object.assign(e, {
                        hooks(e) {
                            return o(e, ((e, r) => {
                                if (!this.__hooks[r])
                                    throw new Error(`'${r}' is not a valid hook type`);
                                const n = a(e);
                                o(n, ((e, r) => {
                                    if ("all" !== r && -1 === t.indexOf(r))
                                        throw new Error(`'${r}' is not a valid hook method`)
                                }
                                )),
                                    t.forEach((e => {
                                        const t = this.__hooks[r][e] || (this.__hooks[r][e] = []);
                                        n.all && t.push.apply(t, n.all),
                                            n[e] && t.push.apply(t, n[e])
                                    }
                                    ))
                            }
                            )),
                                this
                        }
                    })
            }
    },
    26936: function (e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
            void 0 === n && (n = r),
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                        return t[r]
                    }
                })
        }
            : function (e, t, r, n) {
                void 0 === n && (n = r),
                    e[n] = t[r]
            }
        )
            , o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            }
                : function (e, t) {
                    e.default = t
                }
            )
            , i = this && this.__importStar || function (e) {
                if (e && e.__esModule)
                    return e;
                var t = {};
                if (null != e)
                    for (var r in e)
                        "default" !== r && Object.hasOwnProperty.call(e, r) && n(t, e, r);
                return o(t, e),
                    t
            }
            , s = this && this.__exportStar || function (e, t) {
                for (var r in e)
                    "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            }
            ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.hooks = void 0;
        const a = i(r(43479));
        s(r(92231), t),
            t.hooks = a
    },
    92231: function (e, t, r) {
        "use strict";
        var n = r(34155);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.createSymbol = t.makeUrl = t.isPromise = t._ = t.stripSlashes = void 0,
            t.stripSlashes = function (e) {
                return e.replace(/^(\/+)|(\/+)$/g, "")
            }
            ,
            t._ = {
                each(e, r) {
                    e && "function" === typeof e.forEach ? e.forEach(r) : t._.isObject(e) && Object.keys(e).forEach((t => r(e[t], t)))
                },
                some: (e, t) => Object.keys(e).map((t => [e[t], t])).some((([e, r]) => t(e, r))),
                every: (e, t) => Object.keys(e).map((t => [e[t], t])).every((([e, r]) => t(e, r))),
                keys: e => Object.keys(e),
                values: e => t._.keys(e).map((t => e[t])),
                isMatch: (e, r) => t._.keys(r).every((t => e[t] === r[t])),
                isEmpty: e => 0 === t._.keys(e).length,
                isObject: e => "object" === typeof e && !Array.isArray(e) && null !== e,
                isObjectOrArray: e => "object" === typeof e && null !== e,
                extend: (e, ...t) => Object.assign(e, ...t),
                omit(e, ...r) {
                    const n = t._.extend({}, e);
                    return r.forEach((e => delete n[e])),
                        n
                },
                pick: (e, ...t) => t.reduce(((t, r) => (void 0 !== e[r] && (t[r] = e[r]),
                    t)), {}),
                merge: (e, r) => (t._.isObject(e) && t._.isObject(r) && Object.keys(r).forEach((n => {
                    t._.isObject(r[n]) ? (e[n] || Object.assign(e, {
                        [n]: {}
                    }),
                        t._.merge(e[n], r[n])) : Object.assign(e, {
                            [n]: r[n]
                        })
                }
                )),
                    e)
            },
            t.isPromise = function (e) {
                return t._.isObject(e) && "function" === typeof e.then
            }
            ,
            t.makeUrl = function (e, r = {}) {
                const o = "function" === typeof r.get ? r.get.bind(r) : () => { }
                    , i = o("env") || "production"
                    , s = o("host") || n.env.HOST_NAME || "localhost"
                    , a = "development" === i || "test" === i || void 0 === i ? "http" : "https"
                    , c = o("port") || n.env.PORT || 3030;
                return e = e || "",
                    `${a}://${s}${"development" === i || "test" === i || void 0 === i ? `:${c}` : ""}/${t.stripSlashes(e)}`
            }
            ,
            t.createSymbol = function (e) {
                return "undefined" !== typeof Symbol ? Symbol(e) : e
            }
    },
    93009: function (e, t, r) {
        const n = r(11227)("@feathersjs/errors");
        function o(e, t, r, i, s) {
            let a, c, u;
            (e = e || "Error") instanceof Error ? (c = e.message || "Error",
                e.errors && (a = e.errors)) : "object" === typeof e ? (c = e.message || "Error",
                    s = e) : c = e,
                s && (u = JSON.parse(JSON.stringify(s)),
                    u.errors ? (a = u.errors,
                        delete u.errors) : s.errors && (a = JSON.parse(JSON.stringify(s.errors)))),
                this.type = "FeathersError",
                this.name = t,
                this.message = c,
                this.code = r,
                this.className = i,
                this.data = u,
                this.errors = a || {},
                n(`${this.name}(${this.code}): ${this.message}`),
                n(this.errors),
                Error.captureStackTrace ? Error.captureStackTrace(this, o) : this.stack = (new Error).stack
        }
        function i(e, t) {
            e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e
        }
        function s(e, t) {
            o.call(this, e, "BadRequest", 400, "bad-request", t)
        }
        function a(e, t) {
            o.call(this, e, "NotAuthenticated", 401, "not-authenticated", t)
        }
        function c(e, t) {
            o.call(this, e, "PaymentError", 402, "payment-error", t)
        }
        function u(e, t) {
            o.call(this, e, "Forbidden", 403, "forbidden", t)
        }
        function l(e, t) {
            o.call(this, e, "NotFound", 404, "not-found", t)
        }
        function f(e, t) {
            o.call(this, e, "MethodNotAllowed", 405, "method-not-allowed", t)
        }
        function p(e, t) {
            o.call(this, e, "NotAcceptable", 406, "not-acceptable", t)
        }
        function h(e, t) {
            o.call(this, e, "Timeout", 408, "timeout", t)
        }
        function d(e, t) {
            o.call(this, e, "Conflict", 409, "conflict", t)
        }
        function y(e, t) {
            o(this, e, "Gone", 410, "gone")
        }
        function m(e, t) {
            o.call(this, e, "LengthRequired", 411, "length-required", t)
        }
        function g(e, t) {
            o.call(this, e, "Unprocessable", 422, "unprocessable", t)
        }
        function v(e, t) {
            o.call(this, e, "TooManyRequests", 429, "too-many-requests", t)
        }
        function b(e, t) {
            o.call(this, e, "GeneralError", 500, "general-error", t)
        }
        function O(e, t) {
            o.call(this, e, "NotImplemented", 501, "not-implemented", t)
        }
        function j(e, t) {
            o.call(this, e, "BadGateway", 502, "bad-gateway", t)
        }
        function w(e, t) {
            o.call(this, e, "Unavailable", 503, "unavailable", t)
        }
        i(o, Error),
            Object.defineProperty(o.prototype, "toJSON", {
                value: function () {
                    return {
                        name: this.name,
                        message: this.message,
                        code: this.code,
                        className: this.className,
                        data: this.data,
                        errors: this.errors
                    }
                }
            }),
            i(s, o),
            i(a, o),
            i(c, o),
            i(u, o),
            i(l, o),
            i(f, o),
            i(p, o),
            i(h, o),
            i(d, o),
            i(y, o),
            i(m, o),
            i(g, o),
            i(v, o),
            i(b, o),
            i(O, o),
            i(j, o),
            i(w, o);
        const C = {
            FeathersError: o,
            BadRequest: s,
            NotAuthenticated: a,
            PaymentError: c,
            Forbidden: u,
            NotFound: l,
            MethodNotAllowed: f,
            NotAcceptable: p,
            Timeout: h,
            Conflict: d,
            Gone: y,
            LengthRequired: m,
            Unprocessable: g,
            TooManyRequests: v,
            GeneralError: b,
            NotImplemented: O,
            BadGateway: j,
            Unavailable: w,
            400: s,
            401: a,
            402: c,
            403: u,
            404: l,
            405: f,
            406: p,
            408: h,
            409: d,
            410: y,
            411: m,
            422: g,
            429: v,
            500: b,
            501: O,
            502: j,
            503: w
        };
        e.exports = Object.assign({
            convert: function (e) {
                if (!e)
                    return e;
                const t = C[e.name]
                    , r = t ? new t(e.message, e.data) : new Error(e.message || e);
                return "object" === typeof e && Object.assign(r, e),
                    r
            }
        }, C)
    },
    66386: function (e, t, r) {
        const n = r(11227)("feathers:application")
            , { stripSlashes: o } = r(26936)
            , i = r(32489)
            , s = r(82156)
            , a = r(42640)
            , c = r(12002)
            , u = i.extend({
                create: null
            })
            , l = {
                init() {
                    Object.assign(this, {
                        version: c,
                        methods: ["find", "get", "create", "update", "patch", "remove"],
                        mixins: [],
                        services: {},
                        providers: [],
                        _setup: !1,
                        settings: {}
                    }),
                        this.configure(a()),
                        this.configure(s())
                },
                get(e) {
                    return this.settings[e]
                },
                set(e, t) {
                    return this.settings[e] = t,
                        this
                },
                disable(e) {
                    return this.settings[e] = !1,
                        this
                },
                disabled(e) {
                    return !this.settings[e]
                },
                enable(e) {
                    return this.settings[e] = !0,
                        this
                },
                enabled(e) {
                    return !!this.settings[e]
                },
                configure(e) {
                    return e.call(this, this),
                        this
                },
                service(e, t) {
                    if ("undefined" !== typeof t)
                        throw new Error("Registering a new service with `app.service(path, service)` is no longer supported. Use `app.use(path, service)` instead.");
                    const r = o(e) || "/"
                        , n = this.services[r];
                    return "undefined" === typeof n && "function" === typeof this.defaultService ? this.use(r, this.defaultService(r)).service(r) : n
                },
                use(e, t, r = {}) {
                    if ("string" !== typeof e)
                        throw new Error(`'${e}' is not a valid service path.`);
                    const i = o(e) || "/"
                        , s = "function" === typeof t.service && t.services
                        , a = this.methods.concat("setup").some((e => "function" === typeof t[e]));
                    if (s) {
                        const e = t;
                        return Object.keys(e.services).forEach((t => this.use(`${i}/${t}`, e.service(t)))),
                            this
                    }
                    if (!a)
                        throw new Error(`Invalid service object passed for path \`${i}\``);
                    const c = u.isPrototypeOf(t) ? t : u.extend(t);
                    return n(`Registering new service at \`${i}\``),
                        this.mixins.forEach((e => e.call(this, c, i, r))),
                        "function" === typeof c._setup && c._setup(this, i),
                        this.providers.forEach((e => e.call(this, c, i, r))),
                        this._isSetup && "function" === typeof c.setup && (n(`Setting up service for \`${i}\``),
                            c.setup(this, i)),
                        this.services[i] = c,
                        this
                },
                setup() {
                    return Object.keys(this.services).forEach((e => {
                        const t = this.services[e];
                        n(`Setting up service for \`${e}\``),
                            "function" === typeof t.setup && t.setup(this, e)
                    }
                    )),
                        this._isSetup = !0,
                        this
                }
            };
        e.exports = l
    },
    82156: function (e, t, r) {
        const { EventEmitter: n } = r(17187)
            , o = r(32489)
            , i = t.eventHook = function () {
                return function (e) {
                    const { app: t, service: r } = e
                        , n = null === e.event ? e.event : t.eventMappings[e.method]
                        , o = r._hookEvents && -1 !== r._hookEvents.indexOf(n);
                    if (n && o && "error" !== e.type) {
                        (Array.isArray(e.result) ? e.result : [e.result]).forEach((t => r.emit(n, t, e)))
                    }
                }
            }
            , s = t.eventMixin = function (e) {
                if (e._serviceEvents)
                    return;
                const t = this
                    , r = "function" === typeof e.on && "function" === typeof e.emit;
                "function" !== typeof e.mixin || r || e.mixin(n.prototype),
                    Object.defineProperties(e, {
                        _serviceEvents: {
                            value: Array.isArray(e.events) ? e.events.slice() : []
                        },
                        _hookEvents: {
                            value: []
                        }
                    }),
                    Object.keys(t.eventMappings).forEach((r => {
                        const n = t.eventMappings[r]
                            , o = -1 !== e._serviceEvents.indexOf(n);
                        "function" !== typeof e[r] || o || (e._serviceEvents.push(n),
                            e._hookEvents.push(n))
                    }
                    ))
            }
            ;
        e.exports = function () {
            return function (e) {
                Object.assign(e, {
                    eventMappings: {
                        create: "created",
                        update: "updated",
                        remove: "removed",
                        patch: "patched"
                    }
                }),
                    e.hooks({
                        finally: i()
                    }),
                    o.mixin(n.prototype, e),
                    e.mixins.push(s)
            }
        }
    },
    85054: function (e, t, r) {
        const { _: n } = r(26936);
        e.exports = [e => {
            const { service: t, method: r } = e
                , n = t.methods[r];
            return e.arguments.forEach(((t, r) => {
                e[n[r]] = t
            }
            )),
                e.params || (e.params = {}),
                e
        }
            , e => {
                const { service: t, method: r, path: o } = e
                    , i = t.methods[r];
                if (i.includes("id") && void 0 === e.id)
                    throw new Error(`An id must be provided to the '${o}.${r}' method`);
                if (i.includes("data") && !n.isObjectOrArray(e.data))
                    throw new Error(`A data object must be provided to the '${o}.${r}' method`);
                return e
            }
        ]
    },
    42640: function (e, t, r) {
        const { hooks: n, isPromise: o } = r(26936)
            , i = r(85054)
            , { createHookObject: s, getHooks: a, processHooks: c, enableHooks: u, ACTIVATE_HOOKS: l } = n
            , f = function ({ app: e, service: t, method: r, original: n }) {
                return (a = {}) => {
                    const u = e.hookTypes.reduce(((e, t) => {
                        const r = a[t] || [];
                        return e[t] = Array.isArray(r) ? r : [r],
                            e
                    }
                    ), {});
                    return function (...a) {
                        const l = !0 === a[a.length - 1] && a.pop()
                            , f = s(r, {
                                type: "before",
                                arguments: a,
                                service: t,
                                app: e
                            });
                        return Promise.resolve(f).then((e => c.call(t, i.concat(u.before), e))).then((e => {
                            if ("undefined" !== typeof e.result)
                                return e;
                            return new Promise((i => {
                                const s = n || t[r]
                                    , a = t.methods[r].map((t => e[t]))
                                    , c = s.apply(t, a);
                                if (!o(c))
                                    throw new Error(`Service method '${e.method}' for '${e.path}' service must return a promise`);
                                i(c)
                            }
                            )).then((t => (e.result = t,
                                e))).catch((t => {
                                    throw t.hook = e,
                                    t
                                }
                                ))
                        }
                        )).then((e => {
                            const r = Object.assign({}, e, {
                                type: "after"
                            });
                            return c.call(t, u.after, r)
                        }
                        )).catch((e => {
                            const r = Object.assign({}, e.hook, {
                                type: "error",
                                original: e.hook,
                                error: e,
                                result: void 0
                            });
                            return c.call(t, u.error, r).catch((e => Object.assign({}, e.hook, {
                                error: e,
                                result: void 0
                            })))
                        }
                        )).then((e => c.call(t, u.finally, e).catch((e => Object.assign({}, e.hook, {
                            error: e,
                            result: void 0
                        }))))).then((e => "undefined" !== typeof e.error && "undefined" === typeof e.result ? Promise.reject(l ? e : e.error) : l ? e : e.result))
                    }
                }
            }
            , p = t.hookMixin = function (e) {
                if ("function" === typeof e.hooks)
                    return;
                e.methods = Object.getOwnPropertyNames(e).filter((t => "function" === typeof e[t] && e[t][l])).reduce(((t, r) => (t[r] = e[r][l],
                    t)), e.methods || {}),
                    Object.assign(e.methods, {
                        find: ["params"],
                        get: ["id", "params"],
                        create: ["data", "params"],
                        update: ["id", "data", "params"],
                        patch: ["id", "data", "params"],
                        remove: ["id", "params"]
                    });
                const t = this
                    , r = Object.keys(e.methods)
                    , n = r.reduce(((r, n) => ("function" !== typeof e[n] || (r[n] = function () {
                        const e = this
                            , r = Array.from(arguments)
                            , o = e._super.bind(e);
                        return f({
                            app: t,
                            service: e,
                            method: n,
                            original: o
                        })({
                            before: a(t, e, "before", n),
                            after: a(t, e, "after", n, !0),
                            error: a(t, e, "error", n, !0),
                            finally: a(t, e, "finally", n, !0)
                        })(...r)
                    }
                    ),
                        r)), {});
                u(e, r, t.hookTypes),
                    e.mixin(n)
            }
            ;
        e.exports = function () {
            return function (e) {
                Object.assign(e, {
                    hookTypes: ["before", "after", "error", "finally"]
                }),
                    u(e, e.methods, e.hookTypes),
                    e.mixins.push(p)
            }
        }
            ,
            e.exports.withHooks = f,
            e.exports.ACTIVATE_HOOKS = l,
            e.exports.activateHooks = function (e) {
                return t => (Object.defineProperty(t, l, {
                    value: e
                }),
                    t)
            }
    },
    42854: function (e, t, r) {
        const n = r(32489)
            , o = r(66386)
            , i = r(12002)
            , { ACTIVATE_HOOKS: s, activateHooks: a } = r(42640)
            , c = Object.create(null);
        function u() {
            const e = Object.create(c);
            return n.mixin(o, e),
                e.init(),
                e
        }
        u.version = i,
            u.ACTIVATE_HOOKS = s,
            u.activateHooks = a,
            e.exports = u,
            e.exports.default = u
    },
    12002: function (e) {
        e.exports = "4.5.8"
    },
    61515: function (e, t, r) {
        const n = r(27940);
        e.exports = class extends n {
            request(e, t) {
                const r = this.connection
                    , n = this.options.HttpHeaders;
                if (!r || !n)
                    throw new Error("Please pass angular's 'httpClient' (instance) and and object with 'HttpHeaders' (class) to feathers-rest");
                const o = e.url
                    , { connection: i = {} } = t
                    , s = new n(Object.assign({
                        Accept: "application/json"
                    }, this.options.headers, e.headers, i.headers))
                    , a = Object.assign({
                        body: e.body
                    }, t.connection, {
                        headers: s
                    });
                return new Promise(((t, n) => {
                    r.request(e.method, o, a).subscribe(t, n)
                }
                )).catch((e => {
                    const t = e.error;
                    if (t)
                        throw "string" === typeof t ? JSON.parse(t) : t;
                    throw e
                }
                ))
            }
        }
    },
    26310: function (e, t, r) {
        const n = r(27940);
        e.exports = class extends n {
            request(e, t) {
                const r = this.connection
                    , n = this.options.Headers;
                if (!r || !n)
                    throw new Error("Please pass angular's 'http' (instance) and and object with 'Headers' (class) to feathers-rest");
                const o = e.url
                    , { connection: i = {} } = t
                    , s = new n(Object.assign({
                        Accept: "application/json"
                    }, this.options.headers, e.headers, i.headers))
                    , a = Object.assign({
                        method: e.method,
                        body: e.body
                    }, i, {
                        headers: s
                    });
                return new Promise(((e, t) => {
                    r.request(o, a).subscribe(e, t)
                }
                )).then((e => e.json())).catch((e => {
                    const t = e.response || e;
                    throw t instanceof Error ? t : t.json() || t
                }
                ))
            }
        }
    },
    50108: function (e, t, r) {
        const n = r(27940);
        e.exports = class extends n {
            request(e, t) {
                const r = Object.assign({
                    url: e.url,
                    method: e.method,
                    data: e.body,
                    headers: Object.assign({
                        Accept: "application/json"
                    }, this.options.headers, e.headers)
                }, t.connection);
                return this.connection.request(r).then((e => e.data)).catch((e => {
                    const t = e.response || e;
                    throw t instanceof Error ? t : t.data || t
                }
                ))
            }
        }
    },
    27940: function (e, t, r) {
        const n = r(80129)
            , { Unavailable: o } = r(93009)
            , { _: i } = r(26936)
            , { stripSlashes: s } = r(26936)
            , { convert: a } = r(93009);
        function c(e) {
            if ("ECONNREFUSED" === e.code)
                throw new o(e.message, i.pick(e, "address", "port", "config"));
            throw a(e)
        }
        e.exports = class {
            constructor(e) {
                this.name = s(e.name),
                    this.options = e.options,
                    this.connection = e.connection,
                    this.base = `${e.base}/${this.name}`
            }
            makeUrl(e, t) {
                e = e || {};
                let r = this.base;
                return "undefined" !== typeof t && null !== t && (r += `/${encodeURIComponent(t)}`),
                    r + this.getQuery(e)
            }
            getQuery(e) {
                if (0 !== Object.keys(e).length) {
                    return `?${n.stringify(e)}`
                }
                return ""
            }
            find(e = {}) {
                return this.request({
                    url: this.makeUrl(e.query),
                    method: "GET",
                    headers: Object.assign({}, e.headers)
                }, e).catch(c)
            }
            get(e, t = {}) {
                return "undefined" === typeof e ? Promise.reject(new Error("id for 'get' can not be undefined")) : this.request({
                    url: this.makeUrl(t.query, e),
                    method: "GET",
                    headers: Object.assign({}, t.headers)
                }, t).catch(c)
            }
            create(e, t = {}) {
                return this.request({
                    url: this.makeUrl(t.query),
                    body: e,
                    method: "POST",
                    headers: Object.assign({
                        "Content-Type": "application/json"
                    }, t.headers)
                }, t).catch(c)
            }
            update(e, t, r = {}) {
                return "undefined" === typeof e ? Promise.reject(new Error("id for 'update' can not be undefined, only 'null' when updating multiple entries")) : this.request({
                    url: this.makeUrl(r.query, e),
                    body: t,
                    method: "PUT",
                    headers: Object.assign({
                        "Content-Type": "application/json"
                    }, r.headers)
                }, r).catch(c)
            }
            patch(e, t, r = {}) {
                return "undefined" === typeof e ? Promise.reject(new Error("id for 'patch' can not be undefined, only 'null' when updating multiple entries")) : this.request({
                    url: this.makeUrl(r.query, e),
                    body: t,
                    method: "PATCH",
                    headers: Object.assign({
                        "Content-Type": "application/json"
                    }, r.headers)
                }, r).catch(c)
            }
            remove(e, t = {}) {
                return "undefined" === typeof e ? Promise.reject(new Error("id for 'remove' can not be undefined, only 'null' when removing multiple entries")) : this.request({
                    url: this.makeUrl(t.query, e),
                    method: "DELETE",
                    headers: Object.assign({}, t.headers)
                }, t).catch(c)
            }
        }
    },
    99411: function (e, t, r) {
        const n = r(27940);
        e.exports = class extends n {
            request(e, t) {
                let r = Object.assign({}, e, t.connection);
                r.headers = Object.assign({
                    Accept: "application/json"
                }, this.options.headers, r.headers),
                    e.body && (r.body = JSON.stringify(e.body));
                return (0,
                    this.connection)(e.url, r).then(this.checkStatus).then((e => 204 === e.status ? null : e.json()))
            }
            checkStatus(e) {
                return e.ok ? e : e.json().then((t => {
                    throw t.response = e,
                    t
                }
                ))
            }
        }
    },
    735: function (e, t, r) {
        const n = r(77408)
            , o = r(69823)
            , i = r(14070)
            , s = r(99411)
            , a = r(50108)
            , c = r(26310)
            , u = r(27940)
            , l = r(61515)
            , f = {
                jquery: n,
                superagent: o,
                request: i,
                fetch: s,
                axios: a,
                angular: c,
                angularHttpClient: l
            };
        function p(e = "") {
            const t = {
                Base: u
            };
            return Object.keys(f).forEach((r => {
                t[r] = function (t, n = {}, o = f[r]) {
                    if (!t)
                        throw new Error(`${r} has to be provided to feathers-rest`);
                    "function" === typeof n && (o = n,
                        n = {});
                    const i = function (r) {
                        return new o({
                            base: e,
                            name: r,
                            connection: t,
                            options: n
                        })
                    }
                        , s = function (e) {
                            if ("function" === typeof e.defaultService)
                                throw new Error("Only one default client provider can be configured");
                            e.rest = t,
                                e.defaultService = i
                        };
                    return s.Service = o,
                        s.service = i,
                        s
                }
            }
            )),
                t
        }
        e.exports = Object.assign(p, {
            SuperagentClient: o,
            FetchClient: s,
            jQueryClient: n,
            RequestClient: i,
            AxiosClient: a,
            AngularClient: c,
            AngularHttpClient: l
        }),
            e.exports.default = p
    },
    77408: function (e, t, r) {
        const n = r(27940);
        e.exports = class extends n {
            request(e, t) {
                const { connection: r = {} } = t
                    , n = Object.assign({}, e.headers, this.options.headers, r.headers)
                    , o = Object.assign({
                        dataType: e.type || "json"
                    }, r, e, {
                        headers: n
                    });
                return e.body && (o.data = JSON.stringify(e.body),
                    o.contentType = "application/json"),
                    delete o.type,
                    delete o.body,
                    new Promise(((e, t) => {
                        this.connection.ajax(o).then(e, (e => {
                            let r = e.responseText;
                            try {
                                r = JSON.parse(r)
                            } catch (n) {
                                r = new Error(e.responseText)
                            }
                            r.xhr = r.response = e,
                                t(r)
                        }
                        ))
                    }
                    ))
            }
        }
    },
    14070: function (e, t, r) {
        const n = r(27940);
        e.exports = class extends n {
            request(e, t) {
                return new Promise(((r, n) => {
                    const { connection: o = {} } = t
                        , i = Object.assign({}, e.headers, o.headers);
                    this.connection(Object.assign({
                        json: !0
                    }, e, t.connection, {
                        headers: i
                    }), (function (e, t, o) {
                        return e ? n(e) : !e && t.statusCode >= 400 ? "string" === typeof o ? n(new Error(o)) : (o.response = t,
                            n(Object.assign(new Error(o.message), o))) : void r(o)
                    }
                    ))
                }
                ))
            }
        }
    },
    69823: function (e, t, r) {
        const n = r(27940);
        e.exports = class extends n {
            request(e, t) {
                const r = this.connection(e.method, e.url).set(this.options.headers || {}).set("Accept", "application/json").set(t.connection || {}).set(e.headers || {}).type(e.type || "json");
                return new Promise(((t, n) => {
                    r.set(e.headers),
                        e.body && r.send(e.body),
                        r.end((function (e, r) {
                            if (e) {
                                try {
                                    const t = e.response;
                                    (e = JSON.parse(e.response.text)).response = t
                                } catch (o) { }
                                return n(e)
                            }
                            t(r && r.body)
                        }
                        ))
                }
                ))
            }
        }
    },
    19522: function (e, t, r) {
        "use strict";
        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.CookieStorage = void 0;
        var o = r(10015)
            , i = r(55457)
            , s = function () {
                function e(t) {
                    if (function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this._defaultOptions = Object.assign({
                            domain: null,
                            expires: null,
                            path: null,
                            secure: !1
                        }, t),
                        "undefined" !== typeof Proxy)
                        return new Proxy(this, a)
                }
                var t, r, s;
                return t = e,
                    (r = [{
                        key: "clear",
                        value: function () {
                            var e = this
                                , t = i.parseCookies(this._getCookie());
                            Object.keys(t).forEach((function (t) {
                                return e.removeItem(t)
                            }
                            ))
                        }
                    }, {
                        key: "getItem",
                        value: function (e) {
                            var t = i.parseCookies(this._getCookie());
                            return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : null
                        }
                    }, {
                        key: "key",
                        value: function (e) {
                            var t = i.parseCookies(this._getCookie())
                                , r = Object.keys(t).sort();
                            return e < r.length ? r[e] : null
                        }
                    }, {
                        key: "removeItem",
                        value: function (e, t) {
                            var r = Object.assign(Object.assign(Object.assign({}, this._defaultOptions), t), {
                                expires: new Date(0)
                            })
                                , n = o.formatCookie(e, "", r);
                            this._setCookie(n)
                        }
                    }, {
                        key: "setItem",
                        value: function (e, t, r) {
                            var n = Object.assign(Object.assign({}, this._defaultOptions), r)
                                , i = o.formatCookie(e, t, n);
                            this._setCookie(i)
                        }
                    }, {
                        key: "_getCookie",
                        value: function () {
                            return "undefined" === typeof document || "undefined" === typeof document.cookie ? "" : document.cookie
                        }
                    }, {
                        key: "_setCookie",
                        value: function (e) {
                            document.cookie = e
                        }
                    }, {
                        key: "length",
                        get: function () {
                            var e = i.parseCookies(this._getCookie());
                            return Object.keys(e).length
                        }
                    }]) && n(t.prototype, r),
                    s && n(t, s),
                    e
            }();
        t.CookieStorage = s;
        var a = {
            defineProperty: function (e, t, r) {
                return e.setItem(t.toString(), String(r.value)),
                    !0
            },
            deleteProperty: function (e, t) {
                return e.removeItem(t.toString()),
                    !0
            },
            get: function (e, t, r) {
                if ("string" === typeof t && t in e)
                    return e[t];
                var n = e.getItem(t.toString());
                return null !== n ? n : void 0
            },
            getOwnPropertyDescriptor: function (e, t) {
                if (!(t in e))
                    return {
                        configurable: !0,
                        enumerable: !0,
                        value: e.getItem(t.toString()),
                        writable: !0
                    }
            },
            has: function (e, t) {
                return "string" === typeof t && t in e || null !== e.getItem(t.toString())
            },
            ownKeys: function (e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var n = e.key(r);
                    null !== n && t.push(n)
                }
                return t
            },
            preventExtensions: function (e) {
                throw new TypeError("can't prevent extensions on this proxy object")
            },
            set: function (e, t, r, n) {
                return e.setItem(t.toString(), String(r)),
                    !0
            }
        }
    },
    10015: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.formatCookie = void 0;
        var r = function (e) {
            var t = e.path
                , r = e.domain
                , n = e.expires
                , o = e.secure
                , i = function (e) {
                    var t = e.sameSite;
                    return "undefined" === typeof t ? null : ["none", "lax", "strict"].indexOf(t.toLowerCase()) >= 0 ? t : null
                }(e);
            return ["undefined" === typeof t || null === t ? "" : ";path=" + t, "undefined" === typeof r || null === r ? "" : ";domain=" + r, "undefined" === typeof n || null === n ? "" : ";expires=" + n.toUTCString(), "undefined" === typeof o || !1 === o ? "" : ";secure", null === i ? "" : ";SameSite=" + i].join("")
        };
        t.formatCookie = function (e, t, n) {
            return [encodeURIComponent(e), "=", encodeURIComponent(t), r(n)].join("")
        }
    },
    67509: function (e, t, r) {
        "use strict";
        var n = r(19522);
        Object.defineProperty(t, "eR", {
            enumerable: !0,
            get: function () {
                return n.CookieStorage
            }
        });
        var o = r(10015);
        var i = r(55457)
    },
    55457: function (e, t) {
        "use strict";
        function r(e, t) {
            return function (e) {
                if (Array.isArray(e))
                    return e
            }(e) || function (e, t) {
                if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var r = []
                    , n = !0
                    , o = !1
                    , i = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value),
                        !t || r.length !== t); n = !0)
                        ;
                } catch (c) {
                    o = !0,
                        i = c
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return r
            }(e, t) || function (e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return n(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return n(e, t)
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.parseCookies = void 0;
        t.parseCookies = function (e) {
            if (0 === e.length)
                return {};
            var t = {}
                , n = new RegExp("\\s*;\\s*");
            return e.split(n).forEach((function (e) {
                var n = r(e.split("="), 2)
                    , o = n[0]
                    , i = n[1]
                    , s = decodeURIComponent(o)
                    , a = decodeURIComponent(i);
                t[s] = a
            }
            )),
                t
        }
    },
    11227: function (e, t, r) {
        var n = r(34155);
        t.log = function (...e) {
            return "object" === typeof console && console.log && console.log(...e)
        }
            ,
            t.formatArgs = function (t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff),
                    !this.useColors)
                    return;
                const r = "color: " + this.color;
                t.splice(1, 0, r, "color: inherit");
                let n = 0
                    , o = 0;
                t[0].replace(/%[a-zA-Z%]/g, (e => {
                    "%%" !== e && (n++,
                        "%c" === e && (o = n))
                }
                )),
                    t.splice(o, 0, r)
            }
            ,
            t.save = function (e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (r) { }
            }
            ,
            t.load = function () {
                let e;
                try {
                    e = t.storage.getItem("debug")
                } catch (r) { }
                !e && "undefined" !== typeof n && "env" in n && (e = n.env.DEBUG);
                return e
            }
            ,
            t.useColors = function () {
                if ("undefined" !== typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
                    return !0;
                if ("undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                    return !1;
                return "undefined" !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }
            ,
            t.storage = function () {
                try {
                    return localStorage
                } catch (e) { }
            }(),
            t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
            e.exports = r(82447)(t);
        const { formatters: o } = e.exports;
        o.j = function (e) {
            try {
                return JSON.stringify(e)
            } catch (t) {
                return "[UnexpectedJSONParseError]: " + t.message
            }
        }
    },
    82447: function (e, t, r) {
        e.exports = function (e) {
            function t(e) {
                let t = 0;
                for (let r = 0; r < e.length; r++)
                    t = (t << 5) - t + e.charCodeAt(r),
                        t |= 0;
                return n.colors[Math.abs(t) % n.colors.length]
            }
            function n(e) {
                let r;
                function s(...e) {
                    if (!s.enabled)
                        return;
                    const t = s
                        , o = Number(new Date)
                        , i = o - (r || o);
                    t.diff = i,
                        t.prev = r,
                        t.curr = o,
                        r = o,
                        e[0] = n.coerce(e[0]),
                        "string" !== typeof e[0] && e.unshift("%O");
                    let a = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, ((r, o) => {
                        if ("%%" === r)
                            return r;
                        a++;
                        const i = n.formatters[o];
                        if ("function" === typeof i) {
                            const n = e[a];
                            r = i.call(t, n),
                                e.splice(a, 1),
                                a--
                        }
                        return r
                    }
                    )),
                        n.formatArgs.call(t, e);
                    (t.log || n.log).apply(t, e)
                }
                return s.namespace = e,
                    s.enabled = n.enabled(e),
                    s.useColors = n.useColors(),
                    s.color = t(e),
                    s.destroy = o,
                    s.extend = i,
                    "function" === typeof n.init && n.init(s),
                    n.instances.push(s),
                    s
            }
            function o() {
                const e = n.instances.indexOf(this);
                return -1 !== e && (n.instances.splice(e, 1),
                    !0)
            }
            function i(e, t) {
                const r = n(this.namespace + ("undefined" === typeof t ? ":" : t) + e);
                return r.log = this.log,
                    r
            }
            function s(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return n.debug = n,
                n.default = n,
                n.coerce = function (e) {
                    if (e instanceof Error)
                        return e.stack || e.message;
                    return e
                }
                ,
                n.disable = function () {
                    const e = [...n.names.map(s), ...n.skips.map(s).map((e => "-" + e))].join(",");
                    return n.enable(""),
                        e
                }
                ,
                n.enable = function (e) {
                    let t;
                    n.save(e),
                        n.names = [],
                        n.skips = [];
                    const r = ("string" === typeof e ? e : "").split(/[\s,]+/)
                        , o = r.length;
                    for (t = 0; t < o; t++)
                        r[t] && ("-" === (e = r[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
                    for (t = 0; t < n.instances.length; t++) {
                        const e = n.instances[t];
                        e.enabled = n.enabled(e.namespace)
                    }
                }
                ,
                n.enabled = function (e) {
                    if ("*" === e[e.length - 1])
                        return !0;
                    let t, r;
                    for (t = 0,
                        r = n.skips.length; t < r; t++)
                        if (n.skips[t].test(e))
                            return !1;
                    for (t = 0,
                        r = n.names.length; t < r; t++)
                        if (n.names[t].test(e))
                            return !0;
                    return !1
                }
                ,
                n.humanize = r(57824),
                Object.keys(e).forEach((t => {
                    n[t] = e[t]
                }
                )),
                n.instances = [],
                n.names = [],
                n.skips = [],
                n.formatters = {},
                n.selectColor = t,
                n.enable(n.load()),
                n
        }
    },
    17187: function (e) {
        "use strict";
        var t, r = "object" === typeof Reflect ? Reflect : null, n = r && "function" === typeof r.apply ? r.apply : function (e, t, r) {
            return Function.prototype.apply.call(e, t, r)
        }
            ;
        t = r && "function" === typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function (e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
            : function (e) {
                return Object.getOwnPropertyNames(e)
            }
            ;
        var o = Number.isNaN || function (e) {
            return e !== e
        }
            ;
        function i() {
            i.init.call(this)
        }
        e.exports = i,
            e.exports.once = function (e, t) {
                return new Promise((function (r, n) {
                    function o() {
                        void 0 !== i && e.removeListener("error", i),
                            r([].slice.call(arguments))
                    }
                    var i;
                    "error" !== t && (i = function (r) {
                        e.removeListener(t, o),
                            n(r)
                    }
                        ,
                        e.once("error", i)),
                        e.once(t, o)
                }
                ))
            }
            ,
            i.EventEmitter = i,
            i.prototype._events = void 0,
            i.prototype._eventsCount = 0,
            i.prototype._maxListeners = void 0;
        var s = 10;
        function a(e) {
            if ("function" !== typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function c(e) {
            return void 0 === e._maxListeners ? i.defaultMaxListeners : e._maxListeners
        }
        function u(e, t, r, n) {
            var o, i, s, u;
            if (a(r),
                void 0 === (i = e._events) ? (i = e._events = Object.create(null),
                    e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, r.listener ? r.listener : r),
                        i = e._events),
                        s = i[t]),
                void 0 === s)
                s = i[t] = r,
                    ++e._eventsCount;
            else if ("function" === typeof s ? s = i[t] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r),
                (o = c(e)) > 0 && s.length > o && !s.warned) {
                s.warned = !0;
                var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                l.name = "MaxListenersExceededWarning",
                    l.emitter = e,
                    l.type = t,
                    l.count = s.length,
                    u = l,
                    console && console.warn && console.warn(u)
            }
            return e
        }
        function l() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                    this.fired = !0,
                    0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function f(e, t, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            }
                , o = l.bind(n);
            return o.listener = r,
                n.wrapFn = o,
                o
        }
        function p(e, t, r) {
            var n = e._events;
            if (void 0 === n)
                return [];
            var o = n[t];
            return void 0 === o ? [] : "function" === typeof o ? r ? [o.listener || o] : [o] : r ? function (e) {
                for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                    t[r] = e[r].listener || e[r];
                return t
            }(o) : d(o, o.length)
        }
        function h(e) {
            var t = this._events;
            if (void 0 !== t) {
                var r = t[e];
                if ("function" === typeof r)
                    return 1;
                if (void 0 !== r)
                    return r.length
            }
            return 0
        }
        function d(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n)
                r[n] = e[n];
            return r
        }
        Object.defineProperty(i, "defaultMaxListeners", {
            enumerable: !0,
            get: function () {
                return s
            },
            set: function (e) {
                if ("number" !== typeof e || e < 0 || o(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                s = e
            }
        }),
            i.init = function () {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
                    this._eventsCount = 0),
                    this._maxListeners = this._maxListeners || void 0
            }
            ,
            i.prototype.setMaxListeners = function (e) {
                if ("number" !== typeof e || e < 0 || o(e))
                    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e,
                    this
            }
            ,
            i.prototype.getMaxListeners = function () {
                return c(this)
            }
            ,
            i.prototype.emit = function (e) {
                for (var t = [], r = 1; r < arguments.length; r++)
                    t.push(arguments[r]);
                var o = "error" === e
                    , i = this._events;
                if (void 0 !== i)
                    o = o && void 0 === i.error;
                else if (!o)
                    return !1;
                if (o) {
                    var s;
                    if (t.length > 0 && (s = t[0]),
                        s instanceof Error)
                        throw s;
                    var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                    throw a.context = s,
                    a
                }
                var c = i[e];
                if (void 0 === c)
                    return !1;
                if ("function" === typeof c)
                    n(c, this, t);
                else {
                    var u = c.length
                        , l = d(c, u);
                    for (r = 0; r < u; ++r)
                        n(l[r], this, t)
                }
                return !0
            }
            ,
            i.prototype.addListener = function (e, t) {
                return u(this, e, t, !1)
            }
            ,
            i.prototype.on = i.prototype.addListener,
            i.prototype.prependListener = function (e, t) {
                return u(this, e, t, !0)
            }
            ,
            i.prototype.once = function (e, t) {
                return a(t),
                    this.on(e, f(this, e, t)),
                    this
            }
            ,
            i.prototype.prependOnceListener = function (e, t) {
                return a(t),
                    this.prependListener(e, f(this, e, t)),
                    this
            }
            ,
            i.prototype.removeListener = function (e, t) {
                var r, n, o, i, s;
                if (a(t),
                    void 0 === (n = this._events))
                    return this;
                if (void 0 === (r = n[e]))
                    return this;
                if (r === t || r.listener === t)
                    0 === --this._eventsCount ? this._events = Object.create(null) : (delete n[e],
                        n.removeListener && this.emit("removeListener", e, r.listener || t));
                else if ("function" !== typeof r) {
                    for (o = -1,
                        i = r.length - 1; i >= 0; i--)
                        if (r[i] === t || r[i].listener === t) {
                            s = r[i].listener,
                                o = i;
                            break
                        }
                    if (o < 0)
                        return this;
                    0 === o ? r.shift() : function (e, t) {
                        for (; t + 1 < e.length; t++)
                            e[t] = e[t + 1];
                        e.pop()
                    }(r, o),
                        1 === r.length && (n[e] = r[0]),
                        void 0 !== n.removeListener && this.emit("removeListener", e, s || t)
                }
                return this
            }
            ,
            i.prototype.off = i.prototype.removeListener,
            i.prototype.removeAllListeners = function (e) {
                var t, r, n;
                if (void 0 === (r = this._events))
                    return this;
                if (void 0 === r.removeListener)
                    return 0 === arguments.length ? (this._events = Object.create(null),
                        this._eventsCount = 0) : void 0 !== r[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete r[e]),
                        this;
                if (0 === arguments.length) {
                    var o, i = Object.keys(r);
                    for (n = 0; n < i.length; ++n)
                        "removeListener" !== (o = i[n]) && this.removeAllListeners(o);
                    return this.removeAllListeners("removeListener"),
                        this._events = Object.create(null),
                        this._eventsCount = 0,
                        this
                }
                if ("function" === typeof (t = r[e]))
                    this.removeListener(e, t);
                else if (void 0 !== t)
                    for (n = t.length - 1; n >= 0; n--)
                        this.removeListener(e, t[n]);
                return this
            }
            ,
            i.prototype.listeners = function (e) {
                return p(this, e, !0)
            }
            ,
            i.prototype.rawListeners = function (e) {
                return p(this, e, !1)
            }
            ,
            i.listenerCount = function (e, t) {
                return "function" === typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
            }
            ,
            i.prototype.listenerCount = h,
            i.prototype.eventNames = function () {
                return this._eventsCount > 0 ? t(this._events) : []
            }
    },
    40427: function (e) {
        e.exports = function () {
            return function (e) {
                e.mixins.push((function (e) {
                    e.findOne = function (t) {
                        return (t = t || {}).query = t.query || {},
                            t.query.$limit = 1,
                            e.find(t).then((function (e) {
                                var t = e.data || e;
                                return Array.isArray(t) ? t[0] : t
                            }
                            ))
                    }
                }
                ))
            }
        }
    },
    57824: function (e) {
        var t = 1e3
            , r = 60 * t
            , n = 60 * r
            , o = 24 * n
            , i = 7 * o
            , s = 365.25 * o;
        function a(e, t, r, n) {
            var o = t >= 1.5 * r;
            return Math.round(e / r) + " " + n + (o ? "s" : "")
        }
        e.exports = function (e, c) {
            c = c || {};
            var u = typeof e;
            if ("string" === u && e.length > 0)
                return function (e) {
                    if ((e = String(e)).length > 100)
                        return;
                    var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                    if (!a)
                        return;
                    var c = parseFloat(a[1]);
                    switch ((a[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return c * s;
                        case "weeks":
                        case "week":
                        case "w":
                            return c * i;
                        case "days":
                        case "day":
                        case "d":
                            return c * o;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return c * n;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return c * r;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return c * t;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return c;
                        default:
                            return
                    }
                }(e);
            if ("number" === u && isFinite(e))
                return c.long ? function (e) {
                    var i = Math.abs(e);
                    if (i >= o)
                        return a(e, i, o, "day");
                    if (i >= n)
                        return a(e, i, n, "hour");
                    if (i >= r)
                        return a(e, i, r, "minute");
                    if (i >= t)
                        return a(e, i, t, "second");
                    return e + " ms"
                }(e) : function (e) {
                    var i = Math.abs(e);
                    if (i >= o)
                        return Math.round(e / o) + "d";
                    if (i >= n)
                        return Math.round(e / n) + "h";
                    if (i >= r)
                        return Math.round(e / r) + "m";
                    if (i >= t)
                        return Math.round(e / t) + "s";
                    return e + "ms"
                }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    },
    11163: function (e, t, r) {
        e.exports = r(72441)
    },
    55798: function (e, t, r) {
        "use strict";
        var n = String.prototype.replace
            , o = /%20/g
            , i = r(12769)
            , s = {
                RFC1738: "RFC1738",
                RFC3986: "RFC3986"
            };
        e.exports = i.assign({
            default: s.RFC3986,
            formatters: {
                RFC1738: function (e) {
                    return n.call(e, o, "+")
                },
                RFC3986: function (e) {
                    return String(e)
                }
            }
        }, s)
    },
    80129: function (e, t, r) {
        "use strict";
        var n = r(58261)
            , o = r(55235)
            , i = r(55798);
        e.exports = {
            formats: i,
            parse: o,
            stringify: n
        }
    },
    55235: function (e, t, r) {
        "use strict";
        var n = r(12769)
            , o = Object.prototype.hasOwnProperty
            , i = Array.isArray
            , s = {
                allowDots: !1,
                allowPrototypes: !1,
                arrayLimit: 20,
                charset: "utf-8",
                charsetSentinel: !1,
                comma: !1,
                decoder: n.decode,
                delimiter: "&",
                depth: 5,
                ignoreQueryPrefix: !1,
                interpretNumericEntities: !1,
                parameterLimit: 1e3,
                parseArrays: !0,
                plainObjects: !1,
                strictNullHandling: !1
            }
            , a = function (e) {
                return e.replace(/&#(\d+);/g, (function (e, t) {
                    return String.fromCharCode(parseInt(t, 10))
                }
                ))
            }
            , c = function (e, t) {
                return e && "string" === typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
            }
            , u = function (e, t, r, n) {
                if (e) {
                    var i = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e
                        , s = /(\[[^[\]]*])/g
                        , a = r.depth > 0 && /(\[[^[\]]*])/.exec(i)
                        , u = a ? i.slice(0, a.index) : i
                        , l = [];
                    if (u) {
                        if (!r.plainObjects && o.call(Object.prototype, u) && !r.allowPrototypes)
                            return;
                        l.push(u)
                    }
                    for (var f = 0; r.depth > 0 && null !== (a = s.exec(i)) && f < r.depth;) {
                        if (f += 1,
                            !r.plainObjects && o.call(Object.prototype, a[1].slice(1, -1)) && !r.allowPrototypes)
                            return;
                        l.push(a[1])
                    }
                    return a && l.push("[" + i.slice(a.index) + "]"),
                        function (e, t, r, n) {
                            for (var o = n ? t : c(t, r), i = e.length - 1; i >= 0; --i) {
                                var s, a = e[i];
                                if ("[]" === a && r.parseArrays)
                                    s = [].concat(o);
                                else {
                                    s = r.plainObjects ? Object.create(null) : {};
                                    var u = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a
                                        , l = parseInt(u, 10);
                                    r.parseArrays || "" !== u ? !isNaN(l) && a !== u && String(l) === u && l >= 0 && r.parseArrays && l <= r.arrayLimit ? (s = [])[l] = o : s[u] = o : s = {
                                        0: o
                                    }
                                }
                                o = s
                            }
                            return o
                        }(l, t, r, n)
                }
            };
        e.exports = function (e, t) {
            var r = function (e) {
                if (!e)
                    return s;
                if (null !== e.decoder && void 0 !== e.decoder && "function" !== typeof e.decoder)
                    throw new TypeError("Decoder has to be a function.");
                if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                var t = "undefined" === typeof e.charset ? s.charset : e.charset;
                return {
                    allowDots: "undefined" === typeof e.allowDots ? s.allowDots : !!e.allowDots,
                    allowPrototypes: "boolean" === typeof e.allowPrototypes ? e.allowPrototypes : s.allowPrototypes,
                    arrayLimit: "number" === typeof e.arrayLimit ? e.arrayLimit : s.arrayLimit,
                    charset: t,
                    charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
                    comma: "boolean" === typeof e.comma ? e.comma : s.comma,
                    decoder: "function" === typeof e.decoder ? e.decoder : s.decoder,
                    delimiter: "string" === typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
                    depth: "number" === typeof e.depth || !1 === e.depth ? +e.depth : s.depth,
                    ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                    interpretNumericEntities: "boolean" === typeof e.interpretNumericEntities ? e.interpretNumericEntities : s.interpretNumericEntities,
                    parameterLimit: "number" === typeof e.parameterLimit ? e.parameterLimit : s.parameterLimit,
                    parseArrays: !1 !== e.parseArrays,
                    plainObjects: "boolean" === typeof e.plainObjects ? e.plainObjects : s.plainObjects,
                    strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling
                }
            }(t);
            if ("" === e || null === e || "undefined" === typeof e)
                return r.plainObjects ? Object.create(null) : {};
            for (var l = "string" === typeof e ? function (e, t) {
                var r, u = {}, l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, f = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, p = l.split(t.delimiter, f), h = -1, d = t.charset;
                if (t.charsetSentinel)
                    for (r = 0; r < p.length; ++r)
                        0 === p[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === p[r] ? d = "utf-8" : "utf8=%26%2310003%3B" === p[r] && (d = "iso-8859-1"),
                            h = r,
                            r = p.length);
                for (r = 0; r < p.length; ++r)
                    if (r !== h) {
                        var y, m, g = p[r], v = g.indexOf("]="), b = -1 === v ? g.indexOf("=") : v + 1;
                        -1 === b ? (y = t.decoder(g, s.decoder, d, "key"),
                            m = t.strictNullHandling ? null : "") : (y = t.decoder(g.slice(0, b), s.decoder, d, "key"),
                                m = n.maybeMap(c(g.slice(b + 1), t), (function (e) {
                                    return t.decoder(e, s.decoder, d, "value")
                                }
                                ))),
                            m && t.interpretNumericEntities && "iso-8859-1" === d && (m = a(m)),
                            g.indexOf("[]=") > -1 && (m = i(m) ? [m] : m),
                            o.call(u, y) ? u[y] = n.combine(u[y], m) : u[y] = m
                    }
                return u
            }(e, r) : e, f = r.plainObjects ? Object.create(null) : {}, p = Object.keys(l), h = 0; h < p.length; ++h) {
                var d = p[h]
                    , y = u(d, l[d], r, "string" === typeof e);
                f = n.merge(f, y, r)
            }
            return n.compact(f)
        }
    },
    58261: function (e, t, r) {
        "use strict";
        var n = r(12769)
            , o = r(55798)
            , i = Object.prototype.hasOwnProperty
            , s = {
                brackets: function (e) {
                    return e + "[]"
                },
                comma: "comma",
                indices: function (e, t) {
                    return e + "[" + t + "]"
                },
                repeat: function (e) {
                    return e
                }
            }
            , a = Array.isArray
            , c = Array.prototype.push
            , u = function (e, t) {
                c.apply(e, a(t) ? t : [t])
            }
            , l = Date.prototype.toISOString
            , f = o.default
            , p = {
                addQueryPrefix: !1,
                allowDots: !1,
                charset: "utf-8",
                charsetSentinel: !1,
                delimiter: "&",
                encode: !0,
                encoder: n.encode,
                encodeValuesOnly: !1,
                format: f,
                formatter: o.formatters[f],
                indices: !1,
                serializeDate: function (e) {
                    return l.call(e)
                },
                skipNulls: !1,
                strictNullHandling: !1
            }
            , h = function e(t, r, o, i, s, c, l, f, h, d, y, m, g) {
                var v, b = t;
                if ("function" === typeof l ? b = l(r, b) : b instanceof Date ? b = d(b) : "comma" === o && a(b) && (b = n.maybeMap(b, (function (e) {
                    return e instanceof Date ? d(e) : e
                }
                )).join(",")),
                    null === b) {
                    if (i)
                        return c && !m ? c(r, p.encoder, g, "key") : r;
                    b = ""
                }
                if ("string" === typeof (v = b) || "number" === typeof v || "boolean" === typeof v || "symbol" === typeof v || "bigint" === typeof v || n.isBuffer(b))
                    return c ? [y(m ? r : c(r, p.encoder, g, "key")) + "=" + y(c(b, p.encoder, g, "value"))] : [y(r) + "=" + y(String(b))];
                var O, j = [];
                if ("undefined" === typeof b)
                    return j;
                if (a(l))
                    O = l;
                else {
                    var w = Object.keys(b);
                    O = f ? w.sort(f) : w
                }
                for (var C = 0; C < O.length; ++C) {
                    var k = O[C]
                        , _ = b[k];
                    if (!s || null !== _) {
                        var E = a(b) ? "function" === typeof o ? o(r, k) : r : r + (h ? "." + k : "[" + k + "]");
                        u(j, e(_, E, o, i, s, c, l, f, h, d, y, m, g))
                    }
                }
                return j
            };
        e.exports = function (e, t) {
            var r, n = e, c = function (e) {
                if (!e)
                    return p;
                if (null !== e.encoder && void 0 !== e.encoder && "function" !== typeof e.encoder)
                    throw new TypeError("Encoder has to be a function.");
                var t = e.charset || p.charset;
                if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                var r = o.default;
                if ("undefined" !== typeof e.format) {
                    if (!i.call(o.formatters, e.format))
                        throw new TypeError("Unknown format option provided.");
                    r = e.format
                }
                var n = o.formatters[r]
                    , s = p.filter;
                return ("function" === typeof e.filter || a(e.filter)) && (s = e.filter),
                {
                    addQueryPrefix: "boolean" === typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                    allowDots: "undefined" === typeof e.allowDots ? p.allowDots : !!e.allowDots,
                    charset: t,
                    charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                    delimiter: "undefined" === typeof e.delimiter ? p.delimiter : e.delimiter,
                    encode: "boolean" === typeof e.encode ? e.encode : p.encode,
                    encoder: "function" === typeof e.encoder ? e.encoder : p.encoder,
                    encodeValuesOnly: "boolean" === typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
                    filter: s,
                    formatter: n,
                    serializeDate: "function" === typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                    skipNulls: "boolean" === typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                    sort: "function" === typeof e.sort ? e.sort : null,
                    strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
                }
            }(t);
            "function" === typeof c.filter ? n = (0,
                c.filter)("", n) : a(c.filter) && (r = c.filter);
            var l, f = [];
            if ("object" !== typeof n || null === n)
                return "";
            l = t && t.arrayFormat in s ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
            var d = s[l];
            r || (r = Object.keys(n)),
                c.sort && r.sort(c.sort);
            for (var y = 0; y < r.length; ++y) {
                var m = r[y];
                c.skipNulls && null === n[m] || u(f, h(n[m], m, d, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.formatter, c.encodeValuesOnly, c.charset))
            }
            var g = f.join(c.delimiter)
                , v = !0 === c.addQueryPrefix ? "?" : "";
            return c.charsetSentinel && ("iso-8859-1" === c.charset ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"),
                g.length > 0 ? v + g : ""
        }
    },
    12769: function (e) {
        "use strict";
        var t = Object.prototype.hasOwnProperty
            , r = Array.isArray
            , n = function () {
                for (var e = [], t = 0; t < 256; ++t)
                    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                return e
            }()
            , o = function (e, t) {
                for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n)
                    "undefined" !== typeof e[n] && (r[n] = e[n]);
                return r
            };
        e.exports = {
            arrayToObject: o,
            assign: function (e, t) {
                return Object.keys(t).reduce((function (e, r) {
                    return e[r] = t[r],
                        e
                }
                ), e)
            },
            combine: function (e, t) {
                return [].concat(e, t)
            },
            compact: function (e) {
                for (var t = [{
                    obj: {
                        o: e
                    },
                    prop: "o"
                }], n = [], o = 0; o < t.length; ++o)
                    for (var i = t[o], s = i.obj[i.prop], a = Object.keys(s), c = 0; c < a.length; ++c) {
                        var u = a[c]
                            , l = s[u];
                        "object" === typeof l && null !== l && -1 === n.indexOf(l) && (t.push({
                            obj: s,
                            prop: u
                        }),
                            n.push(l))
                    }
                return function (e) {
                    for (; e.length > 1;) {
                        var t = e.pop()
                            , n = t.obj[t.prop];
                        if (r(n)) {
                            for (var o = [], i = 0; i < n.length; ++i)
                                "undefined" !== typeof n[i] && o.push(n[i]);
                            t.obj[t.prop] = o
                        }
                    }
                }(t),
                    e
            },
            decode: function (e, t, r) {
                var n = e.replace(/\+/g, " ");
                if ("iso-8859-1" === r)
                    return n.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(n)
                } catch (o) {
                    return n
                }
            },
            encode: function (e, t, r) {
                if (0 === e.length)
                    return e;
                var o = e;
                if ("symbol" === typeof e ? o = Symbol.prototype.toString.call(e) : "string" !== typeof e && (o = String(e)),
                    "iso-8859-1" === r)
                    return escape(o).replace(/%u[0-9a-f]{4}/gi, (function (e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    }
                    ));
                for (var i = "", s = 0; s < o.length; ++s) {
                    var a = o.charCodeAt(s);
                    45 === a || 46 === a || 95 === a || 126 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 ? i += o.charAt(s) : a < 128 ? i += n[a] : a < 2048 ? i += n[192 | a >> 6] + n[128 | 63 & a] : a < 55296 || a >= 57344 ? i += n[224 | a >> 12] + n[128 | a >> 6 & 63] + n[128 | 63 & a] : (s += 1,
                        a = 65536 + ((1023 & a) << 10 | 1023 & o.charCodeAt(s)),
                        i += n[240 | a >> 18] + n[128 | a >> 12 & 63] + n[128 | a >> 6 & 63] + n[128 | 63 & a])
                }
                return i
            },
            isBuffer: function (e) {
                return !(!e || "object" !== typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
            },
            isRegExp: function (e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            },
            maybeMap: function (e, t) {
                if (r(e)) {
                    for (var n = [], o = 0; o < e.length; o += 1)
                        n.push(t(e[o]));
                    return n
                }
                return t(e)
            },
            merge: function e(n, i, s) {
                if (!i)
                    return n;
                if ("object" !== typeof i) {
                    if (r(n))
                        n.push(i);
                    else {
                        if (!n || "object" !== typeof n)
                            return [n, i];
                        (s && (s.plainObjects || s.allowPrototypes) || !t.call(Object.prototype, i)) && (n[i] = !0)
                    }
                    return n
                }
                if (!n || "object" !== typeof n)
                    return [n].concat(i);
                var a = n;
                return r(n) && !r(i) && (a = o(n, s)),
                    r(n) && r(i) ? (i.forEach((function (r, o) {
                        if (t.call(n, o)) {
                            var i = n[o];
                            i && "object" === typeof i && r && "object" === typeof r ? n[o] = e(i, r, s) : n.push(r)
                        } else
                            n[o] = r
                    }
                    )),
                        n) : Object.keys(i).reduce((function (r, n) {
                            var o = i[n];
                            return t.call(r, n) ? r[n] = e(r[n], o, s) : r[n] = o,
                                r
                        }
                        ), a)
            }
        }
    },
    32489: function (e, t) {
        var r, n, o;
        n = [],
            void 0 === (o = "function" === typeof (r = function () {
                var e = "function" === typeof Object.getOwnPropertySymbols;
                function t(t, r, n, o) {
                    var i = "function" === typeof r
                        , s = function () {
                            var e = this._super;
                            this._super = i ? r : t[n];
                            var s = o.apply(this, arguments);
                            return this._super = e,
                                s
                        };
                    return i && (Object.keys(r).forEach((function (e) {
                        s[e] = r[e]
                    }
                    )),
                        e && Object.getOwnPropertySymbols(r).forEach((function (e) {
                            s[e] = r[e]
                        }
                        ))),
                        s
                }
                return {
                    create: function () {
                        var e = Object.create(this)
                            , t = "string" === typeof e.__init ? e.__init : "init";
                        return "function" === typeof e[t] && e[t].apply(e, arguments),
                            e
                    },
                    mixin: function (r, n) {
                        var o = n || this
                            , i = /\b_super\b/
                            , s = Object.getPrototypeOf(o) || o.prototype
                            , a = {}
                            , c = r
                            , u = function (e) {
                                var t = Object.getOwnPropertyDescriptor(c, e);
                                !a[e] && t && (a[e] = t)
                            };
                        do {
                            Object.getOwnPropertyNames(c).forEach(u),
                                e && Object.getOwnPropertySymbols(c).forEach(u)
                        } while ((c = Object.getPrototypeOf(c)) && Object.getPrototypeOf(c));
                        var l = function (e) {
                            var r = a[e];
                            "function" === typeof r.value && i.test(r.value) && (r.value = t(s, o[e], e, r.value)),
                                Object.defineProperty(o, e, r)
                        };
                        return Object.keys(a).forEach(l),
                            e && Object.getOwnPropertySymbols(a).forEach(l),
                            o
                    },
                    extend: function (e, t) {
                        return this.mixin(e, Object.create(t || this))
                    },
                    proxy: function (e) {
                        var t = this[e]
                            , r = Array.prototype.slice.call(arguments, 1);
                        return r.unshift(this),
                            t.bind.apply(t, r)
                    }
                }
            }
            ) ? r.apply(t, n) : r) || (e.exports = o)
    }
}]);
