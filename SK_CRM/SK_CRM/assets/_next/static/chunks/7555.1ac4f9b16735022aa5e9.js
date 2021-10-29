(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7555], {
    97555: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n(85893)
            , s = (n(67294),
                n(99121))
            , a = n(6411);
        e.default = function (t) {
            var e = t.testimonials
                , n = void 0 === e ? [] : e
                , u = t.title
                , l = t.background;
            return n.length ? (0,
                i.jsx)(a.xu, {
                    width: 1,
                    my: "-20px",
                    children: (0,
                        i.jsx)(s.Testimonials, {
                            testimonials: n,
                            title: u,
                            background: l
                        })
                }) : (0,
                    i.jsx)(i.Fragment, {})
        }
    }
}]);
