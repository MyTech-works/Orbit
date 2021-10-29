(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6963], {
    36963: function (e, n, r) {
        "use strict";
        r.r(n),
            r.d(n, {
                default: function () {
                    return re
                }
            });
        var t = r(96156)
            , i = r(85893)
            , o = r(67294)
            , u = (r(28375),
                r(78274),
                r(27953),
                r(50676));
        var c = r(82961);
        function s(e) {
            return function (e) {
                if (Array.isArray(e))
                    return (0,
                        u.Z)(e)
            }(e) || function (e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || (0,
                c.Z)(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
        }
        var a = r(87757)
            , l = r.n(a)
            , p = r(92137)
            , f = r(34699)
            , v = r(11163)
            , d = r(99121)
            , y = r(34078)
            , b = r.n(y)
            , m = r(57631)
            , h = r.n(m);
        const g = {
            IN: "",
            MY: "en-my",
            ZA: "en-za",
            LK: "en-lk",
            GB: "en-gb",
            KE: "en-ke",
            PK: "en-pk",
            AU: "en-au",
            CA: "en-ca",
            AE: "en-ae",
            ID: "en-id"
        };
        var O = (e, n) => {
            var r;
            const t = null !== (r = e && g[e]) && void 0 !== r ? r : "en"
                , i = b()("/", t, "refrens-premium");
            n ? window.open(h()(i, {
                business: n
            }), "_blank") : window.open(i, "_blank")
        }
            , P = r(14516)
            , w = r(2544)
            , T = r(93002)
            , E = r(50361)
            , x = r.n(E)
            , I = r(52220)
            , k = r(5904)
            , C = r(81576)
            , L = r(94248)
            , j = r(38291)
            , B = r(71134)
            , D = r(56294)
            , R = r(37211)
            , Z = r(52256)
            , A = function (e) {
                var n = (e || "").match(/^(.*\D)?(\d+)$/);
                if (n) {
                    var r = (0,
                        f.Z)(n, 3)
                        , t = r[1]
                        , i = r[2]
                        , o = (parseInt(i, 10) + 1).toString().padStart(i.length, "0");
                    if (!t)
                        return o;
                    if (i.length === o.length)
                        return t + o
                } else if (e) {
                    var u = String.fromCharCode(e.toString().slice(-1).charCodeAt(0) + 1);
                    return e.replace(/.$/, u)
                }
                return null
            };
        function S(e, n) {
            return N.apply(this, arguments)
        }
        function N() {
            return (N = (0,
                p.Z)(l().mark((function e(n, r) {
                    var t, i, o = arguments;
                    return l().wrap((function (e) {
                        for (; ;)
                            switch (e.prev = e.next) {
                                case 0:
                                    return t = o.length > 2 && void 0 !== o[2] ? o[2] : d.BILL_TYPE.INVOICE,
                                        e.next = 3,
                                        n.findOne({
                                            query: {
                                                billType: t,
                                                status: {
                                                    $ne: "DRAFT"
                                                },
                                                invoiceNumber: r
                                            }
                                        });
                                case 3:
                                    return i = e.sent,
                                        e.abrupt("return", !!i);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
        }
        function _(e, n) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                n && (t = t.filter((function (n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                    r.push.apply(r, t)
            }
            return r
        }
        function F(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? _(Object(r), !0).forEach((function (n) {
                    (0,
                        t.Z)(e, n, r[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }
                ))
            }
            return e
        }
        var Y = d.InvoiceHelpers.getBillingInfo
            , q = d.InvoiceHelpers.getBusinessDocumentConfig
            , K = d.InvoiceHelpers.getInvoiceValuesFromLast
            , U = d.InvoiceHelpers.getInvoiceBillTypeDefaults
            , H = d.InvoiceHelpers.getClientBusinessDefaults;
        function G(e, n, r, i) {
            var u = null === n || void 0 === n ? void 0 : n.configuration.tax.taxName
                , c = U(null === e || void 0 === e ? void 0 : e.billType, null === e || void 0 === e ? void 0 : e.taxType, null === e || void 0 === e ? void 0 : e.isExpenditure, u)
                , s = i ? H(i, n) : {}
                , a = function (e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.BILL_TYPE.INVOICE
                        , t = (0,
                            C.G2)("/businesses/".concat(e, "/invoices"))
                        , i = (0,
                            C.G2)("/businesses/".concat(e, "/purchaseorders"))
                        , u = (0,
                            o.useMemo)((function () {
                                return r === d.BILL_TYPE.PURCHASEORDER ? i : t
                            }
                            ), [e, r, t, i]);
                    return (0,
                        Z.Z)((0,
                            p.Z)(l().mark((function t() {
                                var i, o, c, s;
                                return l().wrap((function (t) {
                                    for (; ;)
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if (i = "00001",
                                                    !e || !n) {
                                                    t.next = 20;
                                                    break
                                                }
                                                return i = A(n),
                                                    t.next = 5,
                                                    S(u, i, r);
                                            case 5:
                                                if (!t.sent) {
                                                    t.next = 20;
                                                    break
                                                }
                                                return o = i.substr(i.length - 1),
                                                    i = "number" === typeof parseInt(o, 10) ? "".concat(i, "-A") : "".concat(i, "-1"),
                                                    t.next = 10,
                                                    S(u, i, r);
                                            case 10:
                                                if (!t.sent) {
                                                    t.next = 20;
                                                    break
                                                }
                                                return t.next = 13,
                                                    u.find({
                                                        query: {
                                                            billType: r,
                                                            status: {
                                                                $ne: "DRAFT"
                                                            },
                                                            $limit: 0
                                                        }
                                                    });
                                            case 13:
                                                return c = t.sent,
                                                    s = c.total,
                                                    i = "".concat(i, "-").concat(s),
                                                    t.next = 18,
                                                    S(u, i, r);
                                            case 18:
                                                if (!t.sent) {
                                                    t.next = 20;
                                                    break
                                                }
                                                i = null;
                                            case 20:
                                                return t.abrupt("return", i);
                                            case 21:
                                            case "end":
                                                return t.stop()
                                        }
                                }
                                ), t)
                            }
                            ))), [e, n, r]).value || "00001"
                }(null === n || void 0 === n ? void 0 : n.urlKey, null === r || void 0 === r ? void 0 : r.invoiceNumber, null === e || void 0 === e ? void 0 : e.billType)
                , f = (null === e || void 0 === e ? void 0 : e.billType) === d.BILL_TYPE.PURCHASEORDER ? "billedTo" : "billedBy";
            if (n) {
                var v = Y(n)
                    , y = q(n, null === e || void 0 === e ? void 0 : e.billType, null === e || void 0 === e ? void 0 : e.isExpenditure)
                    , b = n.locale
                    , m = n.logo
                    , h = n.country
                    , g = R[h] || "INR"
                    , O = {};
                return null !== r && void 0 !== r && r.owner && (O = K(r)),
                    F(F(F(F(F(F({}, c), e), {}, (0,
                        t.Z)({
                            locale: b,
                            logo: m,
                            currency: g
                        }, f, v), y), O), s), {}, {
                        invoiceNumber: a
                    })
            }
            return F(F(F({}, c), e), s)
        }
        var V = r(17701)
            , $ = function (e) {
                var n = e.response
                    , r = e.authType
                    , t = e.eventCategoryPrefix
                    , i = void 0 === t ? "Invoice" : t
                    , o = e.eventActionPrefix
                    , u = void 0 === o ? i : o
                    , c = e.activeBusiness
                    , s = n.billType === d.BILL_TYPE.PURCHASEORDER ? n.billedTo.name : n.billedBy.name
                    , a = n.billType === d.BILL_TYPE.PURCHASEORDER ? n.billedBy.name : n.billedTo.name;
                if ("signup" === r || "google" === r && n.googleSignup ? ((0,
                    V.L9)("FormSubmit", "".concat(u, "AuthForm"), "".concat(i, "AuthForm")),
                    (0,
                        V.L9)("".concat(i, "Onboarding"), "Signup", "Hybrid".concat(i, " -> ").concat(s)),
                    (0,
                        V.L9)("Onboarding", "New".concat(u), "".concat(s, " -> ").concat(a)),
                    (0,
                        V.L9)("".concat(i, "Onboarding"), "NewBusiness", "".concat(s))) : ("google" === r || "signin" === r) && (0,
                            V.L9)("".concat(i, "Onboarding"), "Login", "Hybrid".concat(i)),
                    "signup" !== r && !n.googleSignup) {
                    var l = "DRAFT" === n.status ? "Draft".concat(u) : "New".concat(u);
                    (0,
                        V.L9)("New".concat(i), "".concat(l), "".concat(s, " -> ").concat(a)),
                        c || (0,
                            V.L9)("".concat(i, "Onboarding"), "NewBusiness", "".concat(s))
                }
                if ("INR" !== n.currency) {
                    var p = "".concat(s, " -> currency(").concat(n.currency, ")");
                    (0,
                        V.L9)("".concat(i, "Currency"), "NonInr".concat(u), "".concat(p))
                }
            }
            , z = r(34268)
            , Q = function (e, n) {
                return n ? "expenditures" : e === d.BILL_TYPE.CREDITNOTE ? "credit" : e === d.BILL_TYPE.DEBITNOTE ? "debit" : e === d.BILL_TYPE.QUOTATION ? "quotations" : e === d.BILL_TYPE.PAYMENTRECEIPT ? "payment-receipts" : e === d.BILL_TYPE.DELIVERYCHALLAN ? "delivery-challans" : e === d.BILL_TYPE.PURCHASEORDER ? "purchase-orders" : "invoices"
            };
        function M(e, n) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                n && (t = t.filter((function (n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                    r.push.apply(r, t)
            }
            return r
        }
        function W(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? M(Object(r), !0).forEach((function (n) {
                    (0,
                        t.Z)(e, n, r[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach((function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }
                ))
            }
            return e
        }
        var J = (0,
            I.default)(d.Container).withConfig({
                displayName: "Invoice__InvoiceContainer",
                componentId: "sc-9pl157-0"
            })(["", ""], (function (e) {
                var n = e.theme.breakpoints;
                return (0,
                    I.css)(["@media screen and (max-width:", "){padding:0;}"], n[0])
            }
            ))
            , X = function (e) {
                var n, r = e.defaultValue, u = void 0 === r ? {} : r, c = e.invoiceFormConfig, a = e.stepperTitle, y = e.eventCategoryPrefix, m = e.eventActionPrefix, h = (0,
                    v.useRouter)(), g = h.query, E = void 0 === g ? {} : g, I = h.push, R = (0,
                        k.a)(), Z = R.user, A = R.login, S = (0,
                            T.Z)(), N = (0,
                                f.Z)(S, 2), _ = N[0], F = N[1], Y = (0,
                                    T.Z)(), q = (0,
                                        f.Z)(Y, 2), K = q[0], U = q[1], H = (0,
                                            o.useState)(), M = H[0], X = H[1], ee = (0,
                                                o.useState)(), ne = ee[0], re = ee[1], te = (0,
                                                    o.useState)(), ie = te[0], oe = te[1], ue = (0,
                                                        L.WN)(), ce = (0,
                                                            f.Z)(ue, 1)[0], se = G(u, M, ie, ne), ae = (0,
                                                                o.useRef)(null), le = (0,
                                                                    j.u)(), pe = (0,
                                                                        f.Z)(le, 1)[0].choiceBlockDefaults;
                (0,
                    o.useEffect)((function () {
                        var e;
                        pe && (null === (e = ae.current) || void 0 === e || e.setValues(pe))
                    }
                    ), [pe]);
                var fe = (0,
                    C.G2)("invoices")
                    , ve = (0,
                        C.G2)("purchaseorders")
                    , de = (0,
                        C.G2)("uploadrequest12")
                    , ye = (0,
                        C.G2)("businesses")
                    , be = (0,
                        C.G2)("businesses/".concat(null === ce || void 0 === ce ? void 0 : ce.urlKey, "/clients"))
                    , me = (0,
                        C.G2)("businesses/".concat(null === ce || void 0 === ce ? void 0 : ce.urlKey, "/premiumn"))
                    , he = (0,
                        C.G2)("/businesses/".concat(null === ce || void 0 === ce ? void 0 : ce.urlKey, "/invoices"))
                    , ge = (0,
                        C.G2)("/businesses/".concat(null === ce || void 0 === ce ? void 0 : ce.urlKey, "/purchaseorders"))
                    , Oe = (0,
                        C.G2)("conversion-rate")
                    , Pe = (0,
                        C.G2)("users")
                    , we = E.clientBusiness
                    , Te = E[z.Ar]
                    , Ee = (0,
                        o.useMemo)((function () {
                            var e = u.billType
                                , n = {
                                    billTypeUrlkey: "invoices",
                                    BusinessDocService: he,
                                    DocService: fe
                                };
                            return e === d.BILL_TYPE.QUOTATION && (n.billTypeUrlkey = "quotations"),
                                e === d.BILL_TYPE.PURCHASEORDER && (n.billTypeUrlkey = "purchase-orders",
                                    n.BusinessDocService = ge,
                                    n.DocService = ve),
                                n
                        }
                        ), [u.billType, ge, he, ve, fe])
                    , xe = Ee.BusinessDocService
                    , Ie = Ee.DocService
                    , ke = Ee.billTypeUrlkey
                    , Ce = (0,
                        o.useCallback)(function () {
                            var e = (0,
                                p.Z)(l().mark((function e(n) {
                                    var r, t, i;
                                    return l().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                        de.create({}, {
                                                            query: {
                                                                isPrivate: n
                                                            }
                                                        });
                                                case 2:
                                                    r = e.sent,
                                                        t = r.fields,
                                                        i = r.url,
                                                        n ? F(W(W({}, t), {}, {
                                                            url: i
                                                        })) : U(W(W({}, t), {}, {
                                                            url: i
                                                        }));
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }(), [de])
                    , Le = function () {
                        var e = (0,
                            p.Z)(l().mark((function e(n, r) {
                                var t, i, o, u, c, s, a, p, f, v, h, g, O, P, w, T, E, I;
                                return l().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return o = x()(n),
                                                    u = o.auth,
                                                    c = W({}, r),
                                                    "signin" === (null === u || void 0 === u ? void 0 : u.type) && (s = u.email,
                                                        a = u.password,
                                                        c = W(W({}, c), (0,
                                                            D.Z)(s, a)),
                                                        delete o.auth),
                                                    null === (t = o.auth) || void 0 === t || delete t.type,
                                                    p = ce ? xe : Ie,
                                                    e.next = 8,
                                                    p.create(o, {
                                                        headers: c
                                                    });
                                            case 8:
                                                if (f = e.sent,
                                                    $({
                                                        response: f,
                                                        authType: null === (i = n.auth) || void 0 === i ? void 0 : i.type,
                                                        eventCategoryPrefix: y,
                                                        eventActionPrefix: m,
                                                        activeBusiness: !(null === ce || void 0 === ce || !ce.urlKey)
                                                    }),
                                                    v = f.accessToken,
                                                    h = f.owner,
                                                    g = f._id,
                                                    O = f.status,
                                                    P = f.billType,
                                                    w = f.isExpenditure,
                                                    T = f.billedBy,
                                                    E = h.urlKey,
                                                    !v) {
                                                    e.next = 15;
                                                    break
                                                }
                                                return e.next = 15,
                                                    A({
                                                        accessToken: v
                                                    });
                                            case 15:
                                                return I = "/app/".concat(E, "/").concat(Q(P, w)),
                                                    "DRAFT" !== O && (I = "".concat(I, "/").concat(g),
                                                        [d.BILL_TYPE.INVOICE, d.BILL_TYPE.PROFORMAINV].includes(P) && !w && "IN" === T.country && (I = "".concat(I, "/bank-details"))),
                                                    window.location.href = B.px ? b()(B.Af, I) : I,
                                                    e.abrupt("return", Promise.resolve(f));
                                            case 19:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                        return function (n, r) {
                            return e.apply(this, arguments)
                        }
                    }()
                    , je = (0,
                        o.useCallback)(function () {
                            var e = (0,
                                p.Z)(l().mark((function e(n) {
                                    return l().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return me.create({
                                                        feature: n
                                                    }),
                                                        O(null === M || void 0 === M ? void 0 : M.country, null === M || void 0 === M ? void 0 : M.urlKey),
                                                        (0,
                                                            V.L9)("PremiumFeaturePopup", "PremiumButtonClick_Popup", null === M || void 0 === M ? void 0 : M.name),
                                                        e.abrupt("return", Promise.resolve());
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }(), [me, null === M || void 0 === M ? void 0 : M.country, null === M || void 0 === M ? void 0 : M.name, null === M || void 0 === M ? void 0 : M.urlKey])
                    , Be = (0,
                        o.useCallback)((0,
                            p.Z)(l().mark((function e() {
                                var n;
                                return l().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                    ye.get(ce.urlKey);
                                            case 2:
                                                n = e.sent,
                                                    X(n);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ))), [null === ce || void 0 === ce ? void 0 : ce.urlKey])
                    , De = (0,
                        o.useCallback)((0,
                            p.Z)(l().mark((function e() {
                                var n;
                                return l().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                if ("string" !== typeof we || !Te) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.next = 3,
                                                    ye.get(we, {
                                                        query: (0,
                                                            t.Z)({}, z.Ar, Te)
                                                    });
                                            case 3:
                                                n = e.sent,
                                                    re(n);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ))), [we, Te])
                    , Re = (0,
                        o.useCallback)((0,
                            p.Z)(l().mark((function e() {
                                var n, r;
                                return l().wrap((function (e) {
                                    for (; ;)
                                        switch (e.prev = e.next) {
                                            case 0:
                                                return n = u.billType,
                                                    e.next = 3,
                                                    xe.findOne({
                                                        query: {
                                                            status: {
                                                                $ne: "DRAFT"
                                                            },
                                                            billType: n,
                                                            $limit: 1,
                                                            $sort: {
                                                                invoiceDate: -1
                                                            }
                                                        }
                                                    });
                                            case 3:
                                                r = e.sent,
                                                    oe(r);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ))), [u.billType, xe])
                    , Ze = (0,
                        o.useCallback)(function () {
                            var e = (0,
                                p.Z)(l().mark((function e(n, r) {
                                    var t, i, o;
                                    return l().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                        Oe.get("latest", {
                                                            query: {
                                                                base: n,
                                                                currency: r
                                                            }
                                                        });
                                                case 2:
                                                    return t = e.sent,
                                                        i = t.status,
                                                        o = t.conversionRate,
                                                        e.abrupt("return", i ? o : 0);
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                            return function (n, r) {
                                return e.apply(this, arguments)
                            }
                        }(), [Oe])
                    , Ae = (0,
                        o.useCallback)(function () {
                            var e = (0,
                                p.Z)(l().mark((function e(n, r) {
                                    var t;
                                    return l().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                        Pe.findOne({
                                                            query: {
                                                                email: n
                                                            },
                                                            headers: r
                                                        });
                                                case 2:
                                                    return t = e.sent,
                                                        e.abrupt("return", t.isExistingUser);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                            return function (n, r) {
                                return e.apply(this, arguments)
                            }
                        }(), [Pe])
                    , Se = (0,
                        o.useCallback)(function () {
                            var e = (0,
                                p.Z)(l().mark((function e(n) {
                                    var r, t, i;
                                    return l().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (null !== ce && void 0 !== ce && ce.urlKey) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return", Promise.resolve(!1));
                                                case 2:
                                                    return r = u.billType,
                                                        t = void 0 === r ? d.BILL_TYPE.INVOICE : r,
                                                        e.next = 5,
                                                        xe.findOne({
                                                            query: {
                                                                invoiceNumber: n,
                                                                status: {
                                                                    $ne: "DRAFT"
                                                                },
                                                                billType: t
                                                            }
                                                        });
                                                case 5:
                                                    return i = e.sent,
                                                        e.abrupt("return", Promise.resolve(!(null === i || void 0 === i || !i.invoiceNumber)));
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }(), [null === ce || void 0 === ce ? void 0 : ce.urlKey, u.billType, xe])
                    , Ne = (0,
                        o.useCallback)(function () {
                            var e = (0,
                                p.Z)(l().mark((function e(n) {
                                    var r, i, o, c, s, a;
                                    return l().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    if (!n) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return i = u.billType,
                                                        e.next = 4,
                                                        xe.findOne({
                                                            query: (r = {
                                                                status: {
                                                                    $ne: "DRAFT"
                                                                }
                                                            },
                                                                (0,
                                                                    t.Z)(r, i === d.BILL_TYPE.PURCHASEORDER ? "vendor" : "client", n),
                                                                (0,
                                                                    t.Z)(r, "$limit", 1),
                                                                (0,
                                                                    t.Z)(r, "$sort", {
                                                                        createdAt: -1
                                                                    }),
                                                                r)
                                                        });
                                                case 4:
                                                    (o = e.sent) && (s = o.currency,
                                                        a = o.invoiceType,
                                                        null === (c = ae.current) || void 0 === c || c.setValues({
                                                            currency: s,
                                                            invoiceType: a
                                                        }));
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }(), [u.billType, xe, !!ae.current])
                    , _e = (0,
                        o.useCallback)(function () {
                            var e = (0,
                                p.Z)(l().mark((function e(n) {
                                    var r;
                                    return l().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                        be.create(n);
                                                case 2:
                                                    return r = e.sent,
                                                        X(W(W({}, M), {}, {
                                                            clients: [].concat(s(M.clients), [r])
                                                        })),
                                                        e.abrupt("return", Promise.resolve(r));
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                            return function (n) {
                                return e.apply(this, arguments)
                            }
                        }(), [be, M])
                    , Fe = (0,
                        o.useCallback)(function () {
                            var e = (0,
                                p.Z)(l().mark((function e(n, r, t) {
                                    var i, o, u;
                                    return l().wrap((function (e) {
                                        for (; ;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return i = t.updatePrevious,
                                                        e.next = 3,
                                                        be.patch(n, r, {
                                                            query: {
                                                                updatePreviousInvoices: i
                                                            }
                                                        });
                                                case 3:
                                                    return o = e.sent,
                                                        u = M.clients.map((function (e) {
                                                            return e._id === n ? o : e
                                                        }
                                                        )),
                                                        X(W(W({}, M), {}, {
                                                            clients: u
                                                        })),
                                                        e.abrupt("return", Promise.resolve(o));
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                            return function (n, r, t) {
                                return e.apply(this, arguments)
                            }
                        }(), [be, M])
                    , Ye = (0,
                        o.useCallback)((function (e) {
                            I("/app/".concat(e, "/").concat(ke, "/new"))
                        }
                        ), [ke]);
                return (0,
                    o.useEffect)((function () {
                        De()
                    }
                    ), [we, Te]),
                    (0,
                        P.useBrowserEffect)((function () {
                            Ce(!0),
                                Ce(!1)
                        }
                        ), []),
                    (0,
                        P.useLazyEffect)((function () {
                            ce && (Be(),
                                Re())
                        }
                        ), [ce]),
                    (0,
                        i.jsx)(J, {
                            children: (0,
                                i.jsx)(d.InvoiceForm, {
                                    ref: ae,
                                    auth: !!Z,
                                    defaultValue: se,
                                    invoiceFormConfig: W(W({}, c), {}, {
                                        stepperTitle: a,
                                        billType: u.billType
                                    }),
                                    activeBusiness: M,
                                    businesses: null === Z || void 0 === Z || null === (n = Z.businesses) || void 0 === n ? void 0 : n.filter((function (e) {
                                        return !e.isRemoved
                                    }
                                    )),
                                    onSubmit: Le,
                                    lastInvoice: ie,
                                    description: (0,
                                        i.jsxs)(w.Typography, {
                                            inline: !0,
                                            children: ["We will automatically create your account and email you the final PDF.", " ", (0,
                                                i.jsx)(w.Typography.A, {
                                                    href: "/",
                                                    inline: !0,
                                                    size: "small",
                                                    variant: "none",
                                                    children: "Learn more"
                                                }), " ", "about how Refrens works."]
                                        }),
                                    privateS3Props: _,
                                    publicS3Props: K,
                                    addNewBusiness: function () {
                                        window.location.href = "/app/businesses/new"
                                    },
                                    addNewClient: _e,
                                    onBusinessChange: Ye,
                                    onBusinessEdit: function () {
                                        var e = (0,
                                            p.Z)(l().mark((function e(n, r, t) {
                                                var i;
                                                return l().wrap((function (e) {
                                                    for (; ;)
                                                        switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2,
                                                                    ye.patch(n, r, {
                                                                        query: {
                                                                            updatePreviousInvoices: t
                                                                        }
                                                                    });
                                                            case 2:
                                                                return i = e.sent,
                                                                    X(i),
                                                                    e.abrupt("return", Promise.resolve());
                                                            case 5:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                }
                                                ), e)
                                            }
                                            )));
                                        return function (n, r, t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    onClientChange: Ne,
                                    onClientEdit: Fe,
                                    onCurrencyChange: Ze,
                                    validateEmail: Ae,
                                    checkInvoiceNumber: Se,
                                    onFormError: function (e) {
                                        return function (e) {
                                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Invoice"
                                                , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n;
                                            (0,
                                                V.L9)("FormSubmitError", "ERR_New".concat(r), JSON.stringify(e))
                                        }(e, y, m)
                                    },
                                    requestPremium: je
                                })
                        })
            };
        function ee(e, n) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                n && (t = t.filter((function (n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                    r.push.apply(r, t)
            }
            return r
        }
        function ne(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? ee(Object(r), !0).forEach((function (n) {
                    (0,
                        t.Z)(e, n, r[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ee(Object(r)).forEach((function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }
                ))
            }
            return e
        }
        var re = function (e) {
            var n = e.title
                , r = e.config;
            return (0,
                i.jsx)("div", {
                    id: "refrens-page-form",
                    children: (0,
                        i.jsx)(X, ne(ne({}, r), {}, {
                            stepperTitle: n
                        }))
                })
        }
    },
    56294: function (e, n, r) {
        "use strict";
        r.d(n, {
            Z: function () {
                return o
            }
        });
        var t = r(31483)
            , i = r.n(t);
        function o(e, n) {
            return {
                Authorization: "Basic ".concat(i()("".concat(e, ":").concat(n)))
            }
        }
    },
    94248: function (e, n, r) {
        "use strict";
        r.d(n, {
            r2: function () {
                return y
            },
            P6: function () {
                return b
            },
            WN: function () {
                return m
            },
            RV: function () {
                return h
            },
            qp: function () {
                return g
            }
        });
        var t = r(85893)
            , i = r(96156)
            , o = r(34699)
            , u = r(67294)
            , c = r(89211)
            , s = r(14516)
            , a = r(11163)
            , l = r(5904)
            , p = r(34268);
        function f(e, n) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(e);
                n && (t = t.filter((function (n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                    r.push.apply(r, t)
            }
            return r
        }
        function v(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? f(Object(r), !0).forEach((function (n) {
                    (0,
                        i.Z)(e, n, r[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                }
                ))
            }
            return e
        }
        var d = (0,
            u.createContext)({});
        function y(e) {
            var n, r = e.children, u = (0,
                a.useRouter)().query, f = (0,
                    s.useLocalForage)(p.nv, null), y = (0,
                        o.Z)(f, 2), b = y[0], m = y[1], h = (0,
                            c.Z)(!1), g = (0,
                                o.Z)(h, 2), O = g[0], P = g[1], w = (0,
                                    c.Z)(!0), T = (0,
                                        o.Z)(w, 2), E = T[0], x = T[1], I = ((0,
                                            l.a)().user || {}).businesses, k = void 0 === I ? [] : I, C = k.filter((function (e) {
                                                return !e.isRemoved
                                            }
                                            )), L = (0,
                                                o.Z)(C, 1)[0];
            if (b) {
                var j = k.find((function (e) {
                    return e._id === b
                }
                ));
                j ? L = j : m(null)
            }
            var B = u
                , D = B.utm_medium
                , R = B.utm_source
                , Z = B.utm_campaign
                , A = B.utm_term
                , S = B[p.h6]
                , N = B[p.zW]
                , _ = (0,
                    s.useLocalForage)(p.GN, (n = {},
                        (0,
                            i.Z)(n, p.h6, S),
                        (0,
                            i.Z)(n, p.hT, null),
                        (0,
                            i.Z)(n, p.zW, N),
                        n))
                , F = (0,
                    o.Z)(_, 2)
                , Y = F[0]
                , q = F[1];
            (0,
                s.useLazyEffect)((function () {
                    var e = {};
                    D && R && Z && (e[p.hT] = {
                        medium: D,
                        source: R,
                        campaign: Z,
                        term: "string" === typeof A ? decodeURI(A) : void 0
                    }),
                        "string" === typeof S && (e[p.h6] = S),
                        "string" === typeof S && (e[p.h6] = S),
                        Object.keys(e).length && q(v(v({}, Y), e))
                }
                ), [D, R, Z, A, S, N]);
            var K = {
                activeBusiness: L,
                setActiveBusiness: m,
                crispReady: O,
                markCrispReady: function () {
                    return P(!0)
                },
                asideCollapsed: E,
                setAsideCollapsed: x,
                apiQuery: Y,
                saveAPIQuery: q
            };
            return (0,
                t.jsx)(d.Provider, {
                    value: K,
                    children: r
                })
        }
        function b() {
            return (0,
                u.useContext)(d)
        }
        function m() {
            var e = (0,
                u.useContext)(d);
            return [e.activeBusiness, e.setActiveBusiness]
        }
        function h() {
            var e = (0,
                u.useContext)(d);
            return [e.asideCollapsed, e.setAsideCollapsed]
        }
        function g() {
            var e = (0,
                u.useContext)(d);
            return [e.apiQuery, e.saveAPIQuery]
        }
    },
    27953: function () { },
    28375: function () { }
}]);
