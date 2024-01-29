/*!
 * @license
 * TradingView Lightweight Charts™ v4.1.2
 * Copyright (c) 2024 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!function () {
    "use strict";
    const t = {
        upColor: "#26a69a",
        downColor: "#ef5350",
        wickVisible: !0,
        borderVisible: !0,
        borderColor: "#378658",
        borderUpColor: "#26a69a",
        borderDownColor: "#ef5350",
        wickColor: "#737375",
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350"
    }, i = {upColor: "#26a69a", downColor: "#ef5350", openVisible: !0, thinBars: !0}, n = {
        color: "#2196f3",
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        lineVisible: !0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBorderWidth: 2,
        crosshairMarkerBackgroundColor: "",
        lastPriceAnimation: 0,
        pointMarkersVisible: !1
    }, s = {
        topColor: "rgba( 46, 220, 135, 0.4)",
        bottomColor: "rgba( 40, 221, 100, 0)",
        invertFilledArea: !1,
        lineColor: "#33D778",
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        lineVisible: !0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBorderWidth: 2,
        crosshairMarkerBackgroundColor: "",
        lastPriceAnimation: 0,
        pointMarkersVisible: !1
    }, e = {
        baseValue: {type: "price", price: 0},
        topFillColor1: "rgba(38, 166, 154, 0.28)",
        topFillColor2: "rgba(38, 166, 154, 0.05)",
        topLineColor: "rgba(38, 166, 154, 1)",
        bottomFillColor1: "rgba(239, 83, 80, 0.05)",
        bottomFillColor2: "rgba(239, 83, 80, 0.28)",
        bottomLineColor: "rgba(239, 83, 80, 1)",
        lineWidth: 3,
        lineStyle: 0,
        lineType: 0,
        lineVisible: !0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBorderWidth: 2,
        crosshairMarkerBackgroundColor: "",
        lastPriceAnimation: 0,
        pointMarkersVisible: !1
    }, r = {color: "#26a69a", base: 0}, h = {color: "#2196f3"}, l = {
        title: "",
        visible: !0,
        lastValueVisible: !0,
        priceLineVisible: !0,
        priceLineSource: 0,
        priceLineWidth: 1,
        priceLineColor: "",
        priceLineStyle: 2,
        baseLineVisible: !0,
        baseLineWidth: 1,
        baseLineColor: "#B2B5BE",
        baseLineStyle: 0,
        priceFormat: {type: "price", precision: 2, minMove: .01}
    };
    var a, o;

    function _(t, i) {
        const n = {
            0: [],
            1: [t.lineWidth, t.lineWidth],
            2: [2 * t.lineWidth, 2 * t.lineWidth],
            3: [6 * t.lineWidth, 6 * t.lineWidth],
            4: [t.lineWidth, 4 * t.lineWidth]
        }[i];
        t.setLineDash(n)
    }

    function u(t, i, n, s) {
        t.beginPath();
        const e = t.lineWidth % 2 ? .5 : 0;
        t.moveTo(n, i + e), t.lineTo(s, i + e), t.stroke()
    }

    function c(t, i) {
        if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""))
    }

    function d(t) {
        if (void 0 === t) throw new Error("Value is undefined");
        return t
    }

    function f(t) {
        if (null === t) throw new Error("Value is null");
        return t
    }

    function v(t) {
        return f(d(t))
    }

    !function (t) {
        t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps", t[t.Curved = 2] = "Curved"
    }(a || (a = {})), function (t) {
        t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted"
    }(o || (o = {}));
    const p = {
        khaki: "#f0e68c",
        azure: "#f0ffff",
        aliceblue: "#f0f8ff",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gainsboro: "#dcdcdc",
        gray: "#808080",
        green: "#008000",
        honeydew: "#f0fff0",
        floralwhite: "#fffaf0",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lemonchiffon: "#fffacd",
        hotpink: "#ff69b4",
        lightyellow: "#ffffe0",
        greenyellow: "#adff2f",
        lightgoldenrodyellow: "#fafad2",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        lightcyan: "#e0ffff",
        magenta: "#f0f",
        maroon: "#800000",
        olive: "#808000",
        orange: "#ffa500",
        oldlace: "#fdf5e6",
        mediumblue: "#0000cd",
        transparent: "#0000",
        lime: "#0f0",
        lightpink: "#ffb6c1",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        midnightblue: "#191970",
        orchid: "#da70d6",
        mediumorchid: "#ba55d3",
        mediumturquoise: "#48d1cc",
        orangered: "#ff4500",
        royalblue: "#4169e1",
        powderblue: "#b0e0e6",
        red: "#f00",
        coral: "#ff7f50",
        turquoise: "#40e0d0",
        white: "#fff",
        whitesmoke: "#f5f5f5",
        wheat: "#f5deb3",
        teal: "#008080",
        steelblue: "#4682b4",
        bisque: "#ffe4c4",
        aquamarine: "#7fffd4",
        aqua: "#0ff",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        springgreen: "#00ff7f",
        antiquewhite: "#faebd7",
        burlywood: "#deb887",
        brown: "#a52a2a",
        beige: "#f5f5dc",
        chocolate: "#d2691e",
        chartreuse: "#7fff00",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cadetblue: "#5f9ea0",
        tomato: "#ff6347",
        fuchsia: "#f0f",
        blue: "#00f",
        salmon: "#fa8072",
        blanchedalmond: "#ffebcd",
        slateblue: "#6a5acd",
        slategray: "#708090",
        thistle: "#d8bfd8",
        tan: "#d2b48c",
        cyan: "#0ff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        blueviolet: "#8a2be2",
        black: "#000",
        darkmagenta: "#8b008b",
        darkslateblue: "#483d8b",
        darkkhaki: "#bdb76b",
        darkorchid: "#9932cc",
        darkorange: "#ff8c00",
        darkgreen: "#006400",
        darkred: "#8b0000",
        dodgerblue: "#1e90ff",
        darkslategray: "#2f4f4f",
        dimgray: "#696969",
        deepskyblue: "#00bfff",
        firebrick: "#b22222",
        forestgreen: "#228b22",
        indigo: "#4b0082",
        ivory: "#fffff0",
        lavenderblush: "#fff0f5",
        feldspar: "#d19275",
        indianred: "#cd5c5c",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightskyblue: "#87cefa",
        lightslategray: "#789",
        lightslateblue: "#8470ff",
        snow: "#fffafa",
        lightseagreen: "#20b2aa",
        lightsalmon: "#ffa07a",
        darksalmon: "#e9967a",
        darkviolet: "#9400d3",
        mediumpurple: "#9370d8",
        mediumaquamarine: "#66cdaa",
        skyblue: "#87ceeb",
        lavender: "#e6e6fa",
        lightsteelblue: "#b0c4de",
        mediumvioletred: "#c71585",
        mintcream: "#f5fffa",
        navajowhite: "#ffdead",
        navy: "#000080",
        olivedrab: "#6b8e23",
        palevioletred: "#d87093",
        violetred: "#d02090",
        yellow: "#ff0",
        yellowgreen: "#9acd32",
        lawngreen: "#7cfc00",
        pink: "#ffc0cb",
        paleturquoise: "#afeeee",
        palegoldenrod: "#eee8aa",
        darkolivegreen: "#556b2f",
        darkseagreen: "#8fbc8f",
        darkturquoise: "#00ced1",
        peachpuff: "#ffdab9",
        deeppink: "#ff1493",
        violet: "#ee82ee",
        palegreen: "#98fb98",
        mediumseagreen: "#3cb371",
        peru: "#cd853f",
        saddlebrown: "#8b4513",
        sandybrown: "#f4a460",
        rosybrown: "#bc8f8f",
        purple: "#800080",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        papayawhip: "#ffefd5",
        mediumslateblue: "#7b68ee",
        plum: "#dda0dd",
        mediumspringgreen: "#00fa9a"
    };

    function m(t) {
        return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0
    }

    function b(t) {
        return t <= 0 || t > 0 ? t < 0 ? 0 : t > 1 ? 1 : Math.round(1e4 * t) / 1e4 : 0
    }

    const w = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
        g = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
        M = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
        x = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;

    function S(t) {
        (t = t.toLowerCase()) in p && (t = p[t]);
        {
            const i = x.exec(t) || M.exec(t);
            if (i) return [m(parseInt(i[1], 10)), m(parseInt(i[2], 10)), m(parseInt(i[3], 10)), b(i.length < 5 ? 1 : parseFloat(i[4]))]
        }
        {
            const i = g.exec(t);
            if (i) return [m(parseInt(i[1], 16)), m(parseInt(i[2], 16)), m(parseInt(i[3], 16)), 1]
        }
        {
            const i = w.exec(t);
            if (i) return [m(17 * parseInt(i[1], 16)), m(17 * parseInt(i[2], 16)), m(17 * parseInt(i[3], 16)), 1]
        }
        throw new Error(`Cannot parse color: ${t}`)
    }

    function y(t) {
        const i = S(t);
        return {
            t: `rgb(${i[0]}, ${i[1]}, ${i[2]})`,
            i: (n = i, .199 * n[0] + .687 * n[1] + .114 * n[2] > 160 ? "black" : "white")
        };
        var n
    }

    class k {
        constructor() {
            this.h = []
        }

        l(t, i, n) {
            const s = {o: t, _: i, u: !0 === n};
            this.h.push(s)
        }

        v(t) {
            const i = this.h.findIndex((i => t === i.o));
            i > -1 && this.h.splice(i, 1)
        }

        p(t) {
            this.h = this.h.filter((i => i._ !== t))
        }

        m(t, i, n) {
            const s = [...this.h];
            this.h = this.h.filter((t => !t.u)), s.forEach((s => s.o(t, i, n)))
        }

        M() {
            return this.h.length > 0
        }

        S() {
            this.h = []
        }
    }

    function C(t, ...i) {
        for (const n of i) for (const i in n) void 0 !== n[i] && ("object" != typeof n[i] || void 0 === t[i] || Array.isArray(n[i]) ? t[i] = n[i] : C(t[i], n[i]));
        return t
    }

    function T(t) {
        return "number" == typeof t && isFinite(t)
    }

    function P(t) {
        return "number" == typeof t && t % 1 == 0
    }

    function R(t) {
        return "string" == typeof t
    }

    function D(t) {
        return "boolean" == typeof t
    }

    function O(t) {
        const i = t;
        if (!i || "object" != typeof i) return i;
        let n, s, e;
        for (s in n = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(s) && (e = i[s], n[s] = e && "object" == typeof e ? O(e) : e);
        return n
    }

    function A(t) {
        return null !== t
    }

    function B(t) {
        return null === t ? void 0 : t
    }

    const V = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";

    function z(t, i, n) {
        return void 0 === i && (i = V), `${n = void 0 !== n ? `${n} ` : ""}${t}px ${i}`
    }

    class E {
        constructor(t) {
            this.k = {C: 1, T: 5, P: NaN, R: "", D: "", O: "", A: "", B: 0, V: 0, I: 0, L: 0, N: 0}, this.F = t
        }

        W() {
            const t = this.k, i = this.j(), n = this.H();
            return t.P === i && t.D === n || (t.P = i, t.D = n, t.R = z(i, n), t.L = 2.5 / 12 * i, t.B = t.L, t.V = i / 12 * t.T, t.I = i / 12 * t.T, t.N = 0), t.O = this.$(), t.A = this.U(), this.k
        }

        $() {
            return this.F.W().layout.textColor
        }

        U() {
            return this.F.q()
        }

        j() {
            return this.F.W().layout.fontSize
        }

        H() {
            return this.F.W().layout.fontFamily
        }
    }

    class I {
        constructor() {
            this.Y = []
        }

        X(t) {
            this.Y = t
        }

        K(t, i, n) {
            this.Y.forEach((s => {
                s.K(t, i, n)
            }))
        }
    }

    class L {
        K(t, i, n) {
            t.useMediaCoordinateSpace((t => this.Z(t, i, n)))
        }

        G(t, i, n) {
            t.useMediaCoordinateSpace((t => this.J(t, i, n)))
        }

        J(t, i, n) {
        }
    }

    class N extends L {
        constructor() {
            super(...arguments), this.tt = null
        }

        it(t) {
            this.tt = t
        }

        Z({context: t}) {
            if (null === this.tt || null === this.tt.nt) return;
            const i = this.tt.nt, n = this.tt, s = s => {
                t.beginPath();
                for (let e = i.to - 1; e >= i.from; --e) {
                    const i = n.st[e];
                    t.moveTo(i.et, i.rt), t.arc(i.et, i.rt, s, 0, 2 * Math.PI)
                }
                t.fill()
            };
            n.ht > 0 && (t.fillStyle = n.lt, s(n.ot + n.ht)), t.fillStyle = n._t, s(n.ot)
        }
    }

    function F() {
        return {st: [{et: 0, rt: 0, ut: 0, ct: 0}], _t: "", lt: "", ot: 0, ht: 0, nt: null}
    }

    const W = {from: 0, to: 1};

    class j {
        constructor(t, i) {
            this.dt = new I, this.ft = [], this.vt = [], this.bt = !0, this.F = t, this.wt = i, this.dt.X(this.ft)
        }

        gt(t) {
            const i = this.F.Mt();
            i.length !== this.ft.length && (this.vt = i.map(F), this.ft = this.vt.map((t => {
                const i = new N;
                return i.it(t), i
            })), this.dt.X(this.ft)), this.bt = !0
        }

        xt() {
            return this.bt && (this.St(), this.bt = !1), this.dt
        }

        St() {
            const t = 2 === this.wt.W().mode, i = this.F.Mt(), n = this.wt.yt(), s = this.F.kt();
            i.forEach(((i, e) => {
                var r;
                const h = this.vt[e], l = i.Ct(n);
                if (t || null === l || !i.Tt()) return void (h.nt = null);
                const a = f(i.Pt());
                h._t = l.Rt, h.ot = l.ot, h.ht = l.Dt, h.st[0].ct = l.ct, h.st[0].rt = i.At().Ot(l.ct, a.Bt), h.lt = null !== (r = l.Vt) && void 0 !== r ? r : this.F.zt(h.st[0].rt / i.At().Et()), h.st[0].ut = n, h.st[0].et = s.It(n), h.nt = W
            }))
        }
    }

    class H {
        K(t, i, n) {
            t.useBitmapCoordinateSpace((t => this.Z(t, i, n)))
        }
    }

    class $ extends H {
        constructor(t) {
            super(), this.Lt = t
        }

        Z({context: t, bitmapSize: i, horizontalPixelRatio: n, verticalPixelRatio: s}) {
            if (null === this.Lt) return;
            const e = this.Lt.Nt.Tt, r = this.Lt.Ft.Tt;
            if (!e && !r) return;
            const h = Math.round(this.Lt.et * n), l = Math.round(this.Lt.rt * s);
            t.lineCap = "butt", e && h >= 0 && (t.lineWidth = Math.floor(this.Lt.Nt.ht * n), t.strokeStyle = this.Lt.Nt.O, t.fillStyle = this.Lt.Nt.O, _(t, this.Lt.Nt.Wt), function (t, i, n, s) {
                t.beginPath();
                const e = t.lineWidth % 2 ? .5 : 0;
                t.moveTo(i + e, n), t.lineTo(i + e, s), t.stroke()
            }(t, h, 0, i.height)), r && l >= 0 && (t.lineWidth = Math.floor(this.Lt.Ft.ht * s), t.strokeStyle = this.Lt.Ft.O, t.fillStyle = this.Lt.Ft.O, _(t, this.Lt.Ft.Wt), u(t, l, 0, i.width))
        }
    }

    class U {
        constructor(t) {
            this.bt = !0, this.jt = {
                Nt: {ht: 1, Wt: 0, O: "", Tt: !1},
                Ft: {ht: 1, Wt: 0, O: "", Tt: !1},
                et: 0,
                rt: 0
            }, this.Ht = new $(this.jt), this.$t = t
        }

        gt() {
            this.bt = !0
        }

        xt() {
            return this.bt && (this.St(), this.bt = !1), this.Ht
        }

        St() {
            const t = this.$t.Tt(), i = f(this.$t.Ut()), n = i.qt().W().crosshair, s = this.jt;
            if (2 === n.mode) return s.Ft.Tt = !1, void (s.Nt.Tt = !1);
            s.Ft.Tt = t && this.$t.Yt(i), s.Nt.Tt = t && this.$t.Xt(), s.Ft.ht = n.horzLine.width, s.Ft.Wt = n.horzLine.style, s.Ft.O = n.horzLine.color, s.Nt.ht = n.vertLine.width, s.Nt.Wt = n.vertLine.style, s.Nt.O = n.vertLine.color, s.et = this.$t.Kt(), s.rt = this.$t.Zt()
        }
    }

    function q(t, i, n, s, e, r) {
        t.fillRect(i + r, n, s - 2 * r, r), t.fillRect(i + r, n + e - r, s - 2 * r, r), t.fillRect(i, n, r, e), t.fillRect(i + s - r, n, r, e)
    }

    function Y(t, i, n, s, e, r) {
        t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r, t.fillRect(i, n, s, e), t.restore()
    }

    function X(t, i) {
        return t.map((t => 0 === t ? t : t + i))
    }

    function K(t, i, n, s, e, r) {
        t.beginPath(), t.lineTo(i + s - r[1], n), 0 !== r[1] && t.arcTo(i + s, n, i + s, n + r[1], r[1]), t.lineTo(i + s, n + e - r[2]), 0 !== r[2] && t.arcTo(i + s, n + e, i + s - r[2], n + e, r[2]), t.lineTo(i + r[3], n + e), 0 !== r[3] && t.arcTo(i, n + e, i, n + e - r[3], r[3]), t.lineTo(i, n + r[0]), 0 !== r[0] && t.arcTo(i, n, i + r[0], n, r[0])
    }

    function Z(t, i, n, s, e, r, h = 0, l = [0, 0, 0, 0], a = "") {
        if (t.save(), !h || !a || a === r) return K(t, i, n, s, e, l), t.fillStyle = r, t.fill(), void t.restore();
        const o = h / 2;
        if ("transparent" !== r) {
            K(t, i + h, n + h, s - 2 * h, e - 2 * h, X(l, -h)), t.fillStyle = r, t.fill()
        }
        if ("transparent" !== a) {
            K(t, i + o, n + o, s - h, e - h, X(l, -o)), t.lineWidth = h, t.strokeStyle = a, t.closePath(), t.stroke()
        }
        t.restore()
    }

    function G(t, i, n, s, e, r, h) {
        t.save(), t.globalCompositeOperation = "copy";
        const l = t.createLinearGradient(0, 0, 0, e);
        l.addColorStop(0, r), l.addColorStop(1, h), t.fillStyle = l, t.fillRect(i, n, s, e), t.restore()
    }

    class J {
        constructor(t, i) {
            this.it(t, i)
        }

        it(t, i) {
            this.Lt = t, this.Gt = i
        }

        Et(t, i) {
            return this.Lt.Tt ? t.P + t.L + t.B : 0
        }

        K(t, i, n, s) {
            if (!this.Lt.Tt || 0 === this.Lt.Jt.length) return;
            const e = this.Lt.O, r = this.Gt.t, h = t.useBitmapCoordinateSpace((t => {
                const h = t.context;
                h.font = i.R;
                const l = this.Qt(t, i, n, s), a = l.ti, o = (t, i) => {
                    l.ii ? Z(h, a.ni, a.si, a.ei, a.ri, t, a.hi, [a.ot, 0, 0, a.ot], i) : Z(h, a.li, a.si, a.ei, a.ri, t, a.hi, [0, a.ot, a.ot, 0], i)
                };
                return o(r, "transparent"), this.Lt.ai && (h.fillStyle = e, h.fillRect(a.li, a.oi, a._i - a.li, a.ui)), o("transparent", r), this.Lt.ci && (h.fillStyle = i.A, h.fillRect(l.ii ? a.di - a.hi : 0, a.si, a.hi, a.fi - a.si)), l
            }));
            t.useMediaCoordinateSpace((({context: t}) => {
                const n = h.vi;
                t.font = i.R, t.textAlign = h.ii ? "right" : "left", t.textBaseline = "middle", t.fillStyle = e, t.fillText(this.Lt.Jt, n.pi, (n.si + n.fi) / 2 + n.mi)
            }))
        }

        Qt(t, i, n, s) {
            var e;
            const {context: r, bitmapSize: h, mediaSize: l, horizontalPixelRatio: a, verticalPixelRatio: o} = t,
                _ = this.Lt.ai || !this.Lt.bi ? i.T : 0, u = this.Lt.wi ? i.C : 0, c = i.L + this.Gt.gi,
                d = i.B + this.Gt.Mi, f = i.V, v = i.I, p = this.Lt.Jt, m = i.P, b = n.xi(r, p),
                w = Math.ceil(n.Si(r, p)), g = m + c + d, M = i.C + f + v + w + _, x = Math.max(1, Math.floor(o));
            let S = Math.round(g * o);
            S % 2 != x % 2 && (S += 1);
            const y = u > 0 ? Math.max(1, Math.floor(u * a)) : 0, k = Math.round(M * a), C = Math.round(_ * a),
                T = null !== (e = this.Gt.yi) && void 0 !== e ? e : this.Gt.ki,
                P = Math.round(T * o) - Math.floor(.5 * o), R = Math.floor(P + x / 2 - S / 2), D = R + S,
                O = "right" === s, A = O ? l.width - u : u, B = O ? h.width - y : y;
            let V, z, E;
            return O ? (V = B - k, z = B - C, E = A - _ - f - u) : (V = B + k, z = B + C, E = A + _ + f), {
                ii: O,
                ti: {si: R, oi: P, fi: D, ei: k, ri: S, ot: 2 * a, hi: y, ni: V, li: B, _i: z, ui: x, di: h.width},
                vi: {si: R / o, fi: D / o, pi: E, mi: b}
            }
        }
    }

    class Q {
        constructor(t) {
            this.Ci = {ki: 0, t: "#000", Mi: 0, gi: 0}, this.Ti = {
                Jt: "",
                Tt: !1,
                ai: !0,
                bi: !1,
                Vt: "",
                O: "#FFF",
                ci: !1,
                wi: !1
            }, this.Pi = {
                Jt: "",
                Tt: !1,
                ai: !1,
                bi: !0,
                Vt: "",
                O: "#FFF",
                ci: !0,
                wi: !0
            }, this.bt = !0, this.Ri = new (t || J)(this.Ti, this.Ci), this.Di = new (t || J)(this.Pi, this.Ci)
        }

        Jt() {
            return this.Oi(), this.Ti.Jt
        }

        ki() {
            return this.Oi(), this.Ci.ki
        }

        gt() {
            this.bt = !0
        }

        Et(t, i = !1) {
            return Math.max(this.Ri.Et(t, i), this.Di.Et(t, i))
        }

        Ai() {
            return this.Ci.yi || 0
        }

        Bi(t) {
            this.Ci.yi = t
        }

        Vi() {
            return this.Oi(), this.Ti.Tt || this.Pi.Tt
        }

        zi() {
            return this.Oi(), this.Ti.Tt
        }

        xt(t) {
            return this.Oi(), this.Ti.ai = this.Ti.ai && t.W().ticksVisible, this.Pi.ai = this.Pi.ai && t.W().ticksVisible, this.Ri.it(this.Ti, this.Ci), this.Di.it(this.Pi, this.Ci), this.Ri
        }

        Ei() {
            return this.Oi(), this.Ri.it(this.Ti, this.Ci), this.Di.it(this.Pi, this.Ci), this.Di
        }

        Oi() {
            this.bt && (this.Ti.ai = !0, this.Pi.ai = !1, this.Ii(this.Ti, this.Pi, this.Ci))
        }
    }

    class tt extends Q {
        constructor(t, i, n) {
            super(), this.$t = t, this.Li = i, this.Ni = n
        }

        Ii(t, i, n) {
            if (t.Tt = !1, 2 === this.$t.W().mode) return;
            const s = this.$t.W().horzLine;
            if (!s.labelVisible) return;
            const e = this.Li.Pt();
            if (!this.$t.Tt() || this.Li.Fi() || null === e) return;
            const r = y(s.labelBackgroundColor);
            n.t = r.t, t.O = r.i;
            const h = 2 / 12 * this.Li.P();
            n.gi = h, n.Mi = h;
            const l = this.Ni(this.Li);
            n.ki = l.ki, t.Jt = this.Li.Wi(l.ct, e), t.Tt = !0
        }
    }

    const it = /[1-9]/g;

    class nt {
        constructor() {
            this.Lt = null
        }

        it(t) {
            this.Lt = t
        }

        K(t, i) {
            if (null === this.Lt || !1 === this.Lt.Tt || 0 === this.Lt.Jt.length) return;
            const n = t.useMediaCoordinateSpace((({context: t}) => (t.font = i.R, Math.round(i.ji.Si(t, f(this.Lt).Jt, it)))));
            if (n <= 0) return;
            const s = i.Hi, e = n + 2 * s, r = e / 2, h = this.Lt.$i;
            let l = this.Lt.ki, a = Math.floor(l - r) + .5;
            a < 0 ? (l += Math.abs(0 - a), a = Math.floor(l - r) + .5) : a + e > h && (l -= Math.abs(h - (a + e)), a = Math.floor(l - r) + .5);
            const o = a + e, _ = Math.ceil(0 + i.C + i.T + i.L + i.P + i.B);
            t.useBitmapCoordinateSpace((({context: t, horizontalPixelRatio: n, verticalPixelRatio: s}) => {
                const e = f(this.Lt);
                t.fillStyle = e.t;
                const r = Math.round(a * n), h = Math.round(0 * s), l = Math.round(o * n), u = Math.round(_ * s),
                    c = Math.round(2 * n);
                if (t.beginPath(), t.moveTo(r, h), t.lineTo(r, u - c), t.arcTo(r, u, r + c, u, c), t.lineTo(l - c, u), t.arcTo(l, u, l, u - c, c), t.lineTo(l, h), t.fill(), e.ai) {
                    const r = Math.round(e.ki * n), l = h, a = Math.round((l + i.T) * s);
                    t.fillStyle = e.O;
                    const o = Math.max(1, Math.floor(n)), _ = Math.floor(.5 * n);
                    t.fillRect(r - _, l, o, a - l)
                }
            })), t.useMediaCoordinateSpace((({context: t}) => {
                const n = f(this.Lt), e = 0 + i.C + i.T + i.L + i.P / 2;
                t.font = i.R, t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = n.O;
                const r = i.ji.xi(t, "Apr0");
                t.translate(a + s, e + r), t.fillText(n.Jt, 0, 0)
            }))
        }
    }

    class st {
        constructor(t, i, n) {
            this.bt = !0, this.Ht = new nt, this.jt = {
                Tt: !1,
                t: "#4c525e",
                O: "white",
                Jt: "",
                $i: 0,
                ki: NaN,
                ai: !0
            }, this.wt = t, this.Ui = i, this.Ni = n
        }

        gt() {
            this.bt = !0
        }

        xt() {
            return this.bt && (this.St(), this.bt = !1), this.Ht.it(this.jt), this.Ht
        }

        St() {
            const t = this.jt;
            if (t.Tt = !1, 2 === this.wt.W().mode) return;
            const i = this.wt.W().vertLine;
            if (!i.labelVisible) return;
            const n = this.Ui.kt();
            if (n.Fi()) return;
            t.$i = n.$i();
            const s = this.Ni();
            if (null === s) return;
            t.ki = s.ki;
            const e = n.qi(this.wt.yt());
            t.Jt = n.Yi(f(e)), t.Tt = !0;
            const r = y(i.labelBackgroundColor);
            t.t = r.t, t.O = r.i, t.ai = n.W().ticksVisible
        }
    }

    class et {
        constructor() {
            this.Xi = null, this.Ki = 0
        }

        Zi() {
            return this.Ki
        }

        Gi(t) {
            this.Ki = t
        }

        At() {
            return this.Xi
        }

        Ji(t) {
            this.Xi = t
        }

        Qi(t) {
            return []
        }

        tn() {
            return []
        }

        Tt() {
            return !0
        }
    }

    var rt;
    !function (t) {
        t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet", t[t.Hidden = 2] = "Hidden"
    }(rt || (rt = {}));

    class ht extends et {
        constructor(t, i) {
            super(), this.nn = null, this.sn = NaN, this.en = 0, this.rn = !0, this.hn = new Map, this.ln = !1, this.an = NaN, this.on = NaN, this._n = NaN, this.un = NaN, this.Ui = t, this.cn = i, this.dn = new j(t, this);
            this.fn = ((t, i) => n => {
                const s = i(), e = t();
                if (n === f(this.nn).vn()) return {ct: e, ki: s};
                {
                    const t = f(n.Pt());
                    return {ct: n.pn(s, t), ki: s}
                }
            })((() => this.sn), (() => this.on));
            const n = ((t, i) => () => {
                const n = this.Ui.kt().mn(t()), s = i();
                return n && Number.isFinite(s) ? {ut: n, ki: s} : null
            })((() => this.en), (() => this.Kt()));
            this.bn = new st(this, t, n), this.wn = new U(this)
        }

        W() {
            return this.cn
        }

        gn(t, i) {
            this._n = t, this.un = i
        }

        Mn() {
            this._n = NaN, this.un = NaN
        }

        xn() {
            return this._n
        }

        Sn() {
            return this.un
        }

        yn(t, i, n) {
            this.ln || (this.ln = !0), this.rn = !0, this.kn(t, i, n)
        }

        yt() {
            return this.en
        }

        Kt() {
            return this.an
        }

        Zt() {
            return this.on
        }

        Tt() {
            return this.rn
        }

        Cn() {
            this.rn = !1, this.Tn(), this.sn = NaN, this.an = NaN, this.on = NaN, this.nn = null, this.Mn()
        }

        Pn(t) {
            return null !== this.nn ? [this.wn, this.dn] : []
        }

        Yt(t) {
            return t === this.nn && this.cn.horzLine.visible
        }

        Xt() {
            return this.cn.vertLine.visible
        }

        Rn(t, i) {
            this.rn && this.nn === t || this.hn.clear();
            const n = [];
            return this.nn === t && n.push(this.Dn(this.hn, i, this.fn)), n
        }

        tn() {
            return this.rn ? [this.bn] : []
        }

        Ut() {
            return this.nn
        }

        On() {
            this.wn.gt(), this.hn.forEach((t => t.gt())), this.bn.gt(), this.dn.gt()
        }

        An(t) {
            return t && !t.vn().Fi() ? t.vn() : null
        }

        kn(t, i, n) {
            this.Bn(t, i, n) && this.On()
        }

        Bn(t, i, n) {
            const s = this.an, e = this.on, r = this.sn, h = this.en, l = this.nn, a = this.An(n);
            this.en = t, this.an = isNaN(t) ? NaN : this.Ui.kt().It(t), this.nn = n;
            const o = null !== a ? a.Pt() : null;
            return null !== a && null !== o ? (this.sn = i, this.on = a.Ot(i, o)) : (this.sn = NaN, this.on = NaN), s !== this.an || e !== this.on || h !== this.en || r !== this.sn || l !== this.nn
        }

        Tn() {
            const t = this.Ui.Mt().map((t => t.zn().Vn())).filter(A), i = 0 === t.length ? null : Math.max(...t);
            this.en = null !== i ? i : NaN
        }

        Dn(t, i, n) {
            let s = t.get(i);
            return void 0 === s && (s = new tt(this, i, n), t.set(i, s)), s
        }
    }

    function lt(t) {
        return "left" === t || "right" === t
    }

    class at {
        constructor(t) {
            this.En = new Map, this.In = [], this.Ln = t
        }

        Nn(t, i) {
            const n = function (t, i) {
                return void 0 === t ? i : {Fn: Math.max(t.Fn, i.Fn), Wn: t.Wn || i.Wn}
            }(this.En.get(t), i);
            this.En.set(t, n)
        }

        jn() {
            return this.Ln
        }

        Hn(t) {
            const i = this.En.get(t);
            return void 0 === i ? {Fn: this.Ln} : {Fn: Math.max(this.Ln, i.Fn), Wn: i.Wn}
        }

        $n() {
            this.Un(), this.In = [{qn: 0}]
        }

        Yn(t) {
            this.Un(), this.In = [{qn: 1, Bt: t}]
        }

        Xn(t) {
            this.Kn(), this.In.push({qn: 5, Bt: t})
        }

        Un() {
            this.Kn(), this.In.push({qn: 6})
        }

        Zn() {
            this.Un(), this.In = [{qn: 4}]
        }

        Gn(t) {
            this.Un(), this.In.push({qn: 2, Bt: t})
        }

        Jn(t) {
            this.Un(), this.In.push({qn: 3, Bt: t})
        }

        Qn() {
            return this.In
        }

        ts(t) {
            for (const i of t.In) this.ns(i);
            this.Ln = Math.max(this.Ln, t.Ln), t.En.forEach(((t, i) => {
                this.Nn(i, t)
            }))
        }

        static ss() {
            return new at(2)
        }

        static es() {
            return new at(3)
        }

        ns(t) {
            switch (t.qn) {
                case 0:
                    this.$n();
                    break;
                case 1:
                    this.Yn(t.Bt);
                    break;
                case 2:
                    this.Gn(t.Bt);
                    break;
                case 3:
                    this.Jn(t.Bt);
                    break;
                case 4:
                    this.Zn();
                    break;
                case 5:
                    this.Xn(t.Bt);
                    break;
                case 6:
                    this.Kn()
            }
        }

        Kn() {
            const t = this.In.findIndex((t => 5 === t.qn));
            -1 !== t && this.In.splice(t, 1)
        }
    }

    const ot = ".";

    function _t(t, i) {
        if (!T(t)) return "n/a";
        if (!P(i)) throw new TypeError("invalid length");
        if (i < 0 || i > 16) throw new TypeError("invalid length");
        if (0 === i) return t.toString();
        return ("0000000000000000" + t.toString()).slice(-i)
    }

    class ut {
        constructor(t, i) {
            if (i || (i = 1), T(t) && P(t) || (t = 100), t < 0) throw new TypeError("invalid base");
            this.Li = t, this.rs = i, this.hs()
        }

        format(t) {
            const i = t < 0 ? "−" : "";
            return t = Math.abs(t), i + this.ls(t)
        }

        hs() {
            if (this.os = 0, this.Li > 0 && this.rs > 0) {
                let t = this.Li;
                for (; t > 1;) t /= 10, this.os++
            }
        }

        ls(t) {
            const i = this.Li / this.rs;
            let n = Math.floor(t), s = "";
            const e = void 0 !== this.os ? this.os : NaN;
            if (i > 1) {
                let r = +(Math.round(t * i) - n * i).toFixed(this.os);
                r >= i && (r -= i, n += 1), s = ot + _t(+r.toFixed(this.os) * this.rs, e)
            } else n = Math.round(n * i) / i, e > 0 && (s = ot + _t(0, e));
            return n.toFixed(0) + s
        }
    }

    class ct extends ut {
        constructor(t = 100) {
            super(t)
        }

        format(t) {
            return `${super.format(t)}%`
        }
    }

    class dt {
        constructor(t) {
            this._s = t
        }

        format(t) {
            let i = "";
            return t < 0 && (i = "-", t = -t), t < 995 ? i + this.us(t) : t < 999995 ? i + this.us(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this.us(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this.us(t / 1e9) + "B")
        }

        us(t) {
            let i;
            const n = Math.pow(10, this._s);
            return i = (t = Math.round(t * n) / n) >= 1e-15 && t < 1 ? t.toFixed(this._s).replace(/\.?0+$/, "") : String(t), i.replace(/(\.[1-9]*)0+$/, ((t, i) => i))
        }
    }

    function ft(t, i, n, s, e, r, h) {
        if (0 === i.length || s.from >= i.length || s.to <= 0) return;
        const {context: l, horizontalPixelRatio: a, verticalPixelRatio: o} = t, _ = i[s.from];
        let u = r(t, _), c = _;
        if (s.to - s.from < 2) {
            const i = e / 2;
            l.beginPath();
            const n = {et: _.et - i, rt: _.rt}, s = {et: _.et + i, rt: _.rt};
            l.moveTo(n.et * a, n.rt * o), l.lineTo(s.et * a, s.rt * o), h(t, u, n, s)
        } else {
            const e = (i, n) => {
                h(t, u, c, n), l.beginPath(), u = i, c = n
            };
            let d = c;
            l.beginPath(), l.moveTo(_.et * a, _.rt * o);
            for (let h = s.from + 1; h < s.to; ++h) {
                d = i[h];
                const s = r(t, d);
                switch (n) {
                    case 0:
                        l.lineTo(d.et * a, d.rt * o);
                        break;
                    case 1:
                        l.lineTo(d.et * a, i[h - 1].rt * o), s !== u && (e(s, d), l.lineTo(d.et * a, i[h - 1].rt * o)), l.lineTo(d.et * a, d.rt * o);
                        break;
                    case 2: {
                        const [t, n] = bt(i, h - 1, h);
                        l.bezierCurveTo(t.et * a, t.rt * o, n.et * a, n.rt * o, d.et * a, d.rt * o);
                        break
                    }
                }
                1 !== n && s !== u && (e(s, d), l.moveTo(d.et * a, d.rt * o))
            }
            (c !== d || c === d && 1 === n) && h(t, u, c, d)
        }
    }

    const vt = 6;

    function pt(t, i) {
        return {et: t.et - i.et, rt: t.rt - i.rt}
    }

    function mt(t, i) {
        return {et: t.et / i, rt: t.rt / i}
    }

    function bt(t, i, n) {
        const s = Math.max(0, i - 1), e = Math.min(t.length - 1, n + 1);
        var r, h;
        return [(r = t[i], h = mt(pt(t[n], t[s]), vt), {
            et: r.et + h.et,
            rt: r.rt + h.rt
        }), pt(t[n], mt(pt(t[e], t[i]), vt))]
    }

    function wt(t, i, n, s, e) {
        const {context: r, horizontalPixelRatio: h, verticalPixelRatio: l} = i;
        r.lineTo(e.et * h, t * l), r.lineTo(s.et * h, t * l), r.closePath(), r.fillStyle = n, r.fill()
    }

    class gt extends H {
        constructor() {
            super(...arguments), this.tt = null
        }

        it(t) {
            this.tt = t
        }

        Z(t) {
            var i;
            if (null === this.tt) return;
            const {st: n, nt: s, cs: e, ht: r, Wt: h, ds: l} = this.tt,
                a = null !== (i = this.tt.fs) && void 0 !== i ? i : this.tt.vs ? 0 : t.mediaSize.height;
            if (null === s) return;
            const o = t.context;
            o.lineCap = "butt", o.lineJoin = "round", o.lineWidth = r, _(o, h), o.lineWidth = 1, ft(t, n, l, s, e, this.ps.bind(this), wt.bind(null, a))
        }
    }

    function Mt(t, i, n) {
        return Math.min(Math.max(t, i), n)
    }

    function xt(t, i, n) {
        return i - t <= n
    }

    function St(t) {
        const i = Math.ceil(t);
        return i % 2 == 0 ? i - 1 : i
    }

    class yt {
        bs(t, i) {
            const n = this.ws, {gs: s, Ms: e, xs: r, Ss: h, ys: l, fs: a} = i;
            if (void 0 === this.ks || void 0 === n || n.gs !== s || n.Ms !== e || n.xs !== r || n.Ss !== h || n.fs !== a || n.ys !== l) {
                const n = t.context.createLinearGradient(0, 0, 0, l);
                if (n.addColorStop(0, s), null != a) {
                    const i = Mt(a * t.verticalPixelRatio / l, 0, 1);
                    n.addColorStop(i, e), n.addColorStop(i, r)
                }
                n.addColorStop(1, h), this.ks = n, this.ws = i
            }
            return this.ks
        }
    }

    class kt extends gt {
        constructor() {
            super(...arguments), this.Cs = new yt
        }

        ps(t, i) {
            return this.Cs.bs(t, {gs: i.Ts, Ms: "", xs: "", Ss: i.Ps, ys: t.bitmapSize.height})
        }
    }

    function Ct(t, i) {
        const n = t.context;
        n.strokeStyle = i, n.stroke()
    }

    class Tt extends H {
        constructor() {
            super(...arguments), this.tt = null
        }

        it(t) {
            this.tt = t
        }

        Z(t) {
            if (null === this.tt) return;
            const {st: i, nt: n, cs: s, ds: e, ht: r, Wt: h, Rs: l} = this.tt;
            if (null === n) return;
            const a = t.context;
            a.lineCap = "butt", a.lineWidth = r * t.verticalPixelRatio, _(a, h), a.lineJoin = "round";
            const o = this.Ds.bind(this);
            void 0 !== e && ft(t, i, e, n, s, o, Ct), l && function (t, i, n, s, e) {
                const {horizontalPixelRatio: r, verticalPixelRatio: h, context: l} = t;
                let a = null;
                const o = Math.max(1, Math.floor(r)) % 2 / 2, _ = n * h + o;
                for (let n = s.to - 1; n >= s.from; --n) {
                    const s = i[n];
                    if (s) {
                        const i = e(t, s);
                        i !== a && (l.beginPath(), null !== a && l.fill(), l.fillStyle = i, a = i);
                        const n = Math.round(s.et * r) + o, u = s.rt * h;
                        l.moveTo(n, u), l.arc(n, u, _, 0, 2 * Math.PI)
                    }
                }
                l.fill()
            }(t, i, l, n, o)
        }
    }

    class Pt extends Tt {
        Ds(t, i) {
            return i._t
        }
    }

    function Rt(t, i, n, s, e = 0, r = i.length) {
        let h = r - e;
        for (; 0 < h;) {
            const r = h >> 1, l = e + r;
            s(i[l], n) === t ? (e = l + 1, h -= r + 1) : h = r
        }
        return e
    }

    const Dt = Rt.bind(null, !0), Ot = Rt.bind(null, !1);

    function At(t, i) {
        return t.ut < i
    }

    function Bt(t, i) {
        return i < t.ut
    }

    function Vt(t, i, n) {
        const s = i.Os(), e = i.di(), r = Dt(t, s, At), h = Ot(t, e, Bt);
        if (!n) return {from: r, to: h};
        let l = r, a = h;
        return r > 0 && r < t.length && t[r].ut >= s && (l = r - 1), h > 0 && h < t.length && t[h - 1].ut <= e && (a = h + 1), {
            from: l,
            to: a
        }
    }

    class zt {
        constructor(t, i, n) {
            this.As = !0, this.Bs = !0, this.Vs = !0, this.zs = [], this.Es = null, this.Is = t, this.Ls = i, this.Ns = n
        }

        gt(t) {
            this.As = !0, "data" === t && (this.Bs = !0), "options" === t && (this.Vs = !0)
        }

        xt() {
            return this.Is.Tt() ? (this.Fs(), null === this.Es ? null : this.Ws) : null
        }

        js() {
            this.zs = this.zs.map((t => Object.assign(Object.assign({}, t), this.Is.$s().Hs(t.ut))))
        }

        Us() {
            this.Es = null
        }

        Fs() {
            this.Bs && (this.qs(), this.Bs = !1), this.Vs && (this.js(), this.Vs = !1), this.As && (this.Ys(), this.As = !1)
        }

        Ys() {
            const t = this.Is.At(), i = this.Ls.kt();
            if (this.Us(), i.Fi() || t.Fi()) return;
            const n = i.Xs();
            if (null === n) return;
            if (0 === this.Is.zn().Ks()) return;
            const s = this.Is.Pt();
            null !== s && (this.Es = Vt(this.zs, n, this.Ns), this.Zs(t, i, s.Bt), this.Gs())
        }
    }

    class Et extends zt {
        constructor(t, i) {
            super(t, i, !0)
        }

        Zs(t, i, n) {
            i.Js(this.zs, B(this.Es)), t.Qs(this.zs, n, B(this.Es))
        }

        te(t, i) {
            return {ut: t, ct: i, et: NaN, rt: NaN}
        }

        qs() {
            const t = this.Is.$s();
            this.zs = this.Is.zn().ie().map((i => {
                const n = i.Bt[3];
                return this.ne(i.se, n, t)
            }))
        }
    }

    class It extends Et {
        constructor(t, i) {
            super(t, i), this.Ws = new I, this.ee = new kt, this.re = new Pt, this.Ws.X([this.ee, this.re])
        }

        ne(t, i, n) {
            return Object.assign(Object.assign({}, this.te(t, i)), n.Hs(t))
        }

        Gs() {
            const t = this.Is.W();
            this.ee.it({
                ds: t.lineType,
                st: this.zs,
                Wt: t.lineStyle,
                ht: t.lineWidth,
                fs: null,
                vs: t.invertFilledArea,
                nt: this.Es,
                cs: this.Ls.kt().he()
            }), this.re.it({
                ds: t.lineVisible ? t.lineType : void 0,
                st: this.zs,
                Wt: t.lineStyle,
                ht: t.lineWidth,
                nt: this.Es,
                cs: this.Ls.kt().he(),
                Rs: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0
            })
        }
    }

    class Lt extends H {
        constructor() {
            super(...arguments), this.Lt = null, this.le = 0, this.ae = 0
        }

        it(t) {
            this.Lt = t
        }

        Z({context: t, horizontalPixelRatio: i, verticalPixelRatio: n}) {
            if (null === this.Lt || 0 === this.Lt.zn.length || null === this.Lt.nt) return;
            if (this.le = this.oe(i), this.le >= 2) {
                Math.max(1, Math.floor(i)) % 2 != this.le % 2 && this.le--
            }
            this.ae = this.Lt._e ? Math.min(this.le, Math.floor(i)) : this.le;
            let s = null;
            const e = this.ae <= this.le && this.Lt.he >= Math.floor(1.5 * i);
            for (let r = this.Lt.nt.from; r < this.Lt.nt.to; ++r) {
                const h = this.Lt.zn[r];
                s !== h.ue && (t.fillStyle = h.ue, s = h.ue);
                const l = Math.floor(.5 * this.ae), a = Math.round(h.et * i), o = a - l, _ = this.ae, u = o + _ - 1,
                    c = Math.min(h.ce, h.de), d = Math.max(h.ce, h.de), f = Math.round(c * n) - l,
                    v = Math.round(d * n) + l, p = Math.max(v - f, this.ae);
                t.fillRect(o, f, _, p);
                const m = Math.ceil(1.5 * this.le);
                if (e) {
                    if (this.Lt.fe) {
                        const i = a - m;
                        let s = Math.max(f, Math.round(h.ve * n) - l), e = s + _ - 1;
                        e > f + p - 1 && (e = f + p - 1, s = e - _ + 1), t.fillRect(i, s, o - i, e - s + 1)
                    }
                    const i = a + m;
                    let s = Math.max(f, Math.round(h.pe * n) - l), e = s + _ - 1;
                    e > f + p - 1 && (e = f + p - 1, s = e - _ + 1), t.fillRect(u + 1, s, i - u, e - s + 1)
                }
            }
        }

        oe(t) {
            const i = Math.floor(t);
            return Math.max(i, Math.floor(function (t, i) {
                return Math.floor(.3 * t * i)
            }(f(this.Lt).he, t)))
        }
    }

    class Nt extends zt {
        constructor(t, i) {
            super(t, i, !1)
        }

        Zs(t, i, n) {
            i.Js(this.zs, B(this.Es)), t.me(this.zs, n, B(this.Es))
        }

        be(t, i, n) {
            return {
                ut: t,
                we: i.Bt[0],
                ge: i.Bt[1],
                Me: i.Bt[2],
                xe: i.Bt[3],
                et: NaN,
                ve: NaN,
                ce: NaN,
                de: NaN,
                pe: NaN
            }
        }

        qs() {
            const t = this.Is.$s();
            this.zs = this.Is.zn().ie().map((i => this.ne(i.se, i, t)))
        }
    }

    class Ft extends Nt {
        constructor() {
            super(...arguments), this.Ws = new Lt
        }

        ne(t, i, n) {
            return Object.assign(Object.assign({}, this.be(t, i, n)), n.Hs(t))
        }

        Gs() {
            const t = this.Is.W();
            this.Ws.it({zn: this.zs, he: this.Ls.kt().he(), fe: t.openVisible, _e: t.thinBars, nt: this.Es})
        }
    }

    class Wt extends gt {
        constructor() {
            super(...arguments), this.Cs = new yt
        }

        ps(t, i) {
            const n = this.tt;
            return this.Cs.bs(t, {gs: i.Se, Ms: i.ye, xs: i.ke, Ss: i.Ce, ys: t.bitmapSize.height, fs: n.fs})
        }
    }

    class jt extends Tt {
        constructor() {
            super(...arguments), this.Te = new yt
        }

        Ds(t, i) {
            const n = this.tt;
            return this.Te.bs(t, {gs: i.Pe, Ms: i.Pe, xs: i.Re, Ss: i.Re, ys: t.bitmapSize.height, fs: n.fs})
        }
    }

    class Ht extends Et {
        constructor(t, i) {
            super(t, i), this.Ws = new I, this.De = new Wt, this.Oe = new jt, this.Ws.X([this.De, this.Oe])
        }

        ne(t, i, n) {
            return Object.assign(Object.assign({}, this.te(t, i)), n.Hs(t))
        }

        Gs() {
            const t = this.Is.Pt();
            if (null === t) return;
            const i = this.Is.W(), n = this.Is.At().Ot(i.baseValue.price, t.Bt), s = this.Ls.kt().he();
            this.De.it({
                st: this.zs,
                ht: i.lineWidth,
                Wt: i.lineStyle,
                ds: i.lineType,
                fs: n,
                vs: !1,
                nt: this.Es,
                cs: s
            }), this.Oe.it({
                st: this.zs,
                ht: i.lineWidth,
                Wt: i.lineStyle,
                ds: i.lineVisible ? i.lineType : void 0,
                Rs: i.pointMarkersVisible ? i.pointMarkersRadius || i.lineWidth / 2 + 2 : void 0,
                fs: n,
                nt: this.Es,
                cs: s
            })
        }
    }

    class $t extends H {
        constructor() {
            super(...arguments), this.Lt = null, this.le = 0
        }

        it(t) {
            this.Lt = t
        }

        Z(t) {
            if (null === this.Lt || 0 === this.Lt.zn.length || null === this.Lt.nt) return;
            const {horizontalPixelRatio: i} = t;
            if (this.le = function (t, i) {
                if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
                const n = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI), s = Math.floor(t * n * i),
                    e = Math.floor(t * i), r = Math.min(s, e);
                return Math.max(Math.floor(i), r)
            }(this.Lt.he, i), this.le >= 2) {
                Math.floor(i) % 2 != this.le % 2 && this.le--
            }
            const n = this.Lt.zn;
            this.Lt.Ae && this.Be(t, n, this.Lt.nt), this.Lt.ci && this.Ve(t, n, this.Lt.nt);
            const s = this.ze(i);
            (!this.Lt.ci || this.le > 2 * s) && this.Ee(t, n, this.Lt.nt)
        }

        Be(t, i, n) {
            if (null === this.Lt) return;
            const {context: s, horizontalPixelRatio: e, verticalPixelRatio: r} = t;
            let h = "", l = Math.min(Math.floor(e), Math.floor(this.Lt.he * e));
            l = Math.max(Math.floor(e), Math.min(l, this.le));
            const a = Math.floor(.5 * l);
            let o = null;
            for (let t = n.from; t < n.to; t++) {
                const n = i[t];
                n.Ie !== h && (s.fillStyle = n.Ie, h = n.Ie);
                const _ = Math.round(Math.min(n.ve, n.pe) * r), u = Math.round(Math.max(n.ve, n.pe) * r),
                    c = Math.round(n.ce * r), d = Math.round(n.de * r);
                let f = Math.round(e * n.et) - a;
                const v = f + l - 1;
                null !== o && (f = Math.max(o + 1, f), f = Math.min(f, v));
                const p = v - f + 1;
                s.fillRect(f, c, p, _ - c), s.fillRect(f, u + 1, p, d - u), o = v
            }
        }

        ze(t) {
            let i = Math.floor(1 * t);
            this.le <= 2 * i && (i = Math.floor(.5 * (this.le - 1)));
            const n = Math.max(Math.floor(t), i);
            return this.le <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n
        }

        Ve(t, i, n) {
            if (null === this.Lt) return;
            const {context: s, horizontalPixelRatio: e, verticalPixelRatio: r} = t;
            let h = "";
            const l = this.ze(e);
            let a = null;
            for (let t = n.from; t < n.to; t++) {
                const n = i[t];
                n.Le !== h && (s.fillStyle = n.Le, h = n.Le);
                let o = Math.round(n.et * e) - Math.floor(.5 * this.le);
                const _ = o + this.le - 1, u = Math.round(Math.min(n.ve, n.pe) * r),
                    c = Math.round(Math.max(n.ve, n.pe) * r);
                if (null !== a && (o = Math.max(a + 1, o), o = Math.min(o, _)), this.Lt.he * e > 2 * l) q(s, o, u, _ - o + 1, c - u + 1, l); else {
                    const t = _ - o + 1;
                    s.fillRect(o, u, t, c - u + 1)
                }
                a = _
            }
        }

        Ee(t, i, n) {
            if (null === this.Lt) return;
            const {context: s, horizontalPixelRatio: e, verticalPixelRatio: r} = t;
            let h = "";
            const l = this.ze(e);
            for (let t = n.from; t < n.to; t++) {
                const n = i[t];
                let a = Math.round(Math.min(n.ve, n.pe) * r), o = Math.round(Math.max(n.ve, n.pe) * r),
                    _ = Math.round(n.et * e) - Math.floor(.5 * this.le), u = _ + this.le - 1;
                if (n.ue !== h) {
                    const t = n.ue;
                    s.fillStyle = t, h = t
                }
                this.Lt.ci && (_ += l, a += l, u -= l, o -= l), a > o || s.fillRect(_, a, u - _ + 1, o - a + 1)
            }
        }
    }

    class Ut extends Nt {
        constructor() {
            super(...arguments), this.Ws = new $t
        }

        ne(t, i, n) {
            return Object.assign(Object.assign({}, this.be(t, i, n)), n.Hs(t))
        }

        Gs() {
            const t = this.Is.W();
            this.Ws.it({zn: this.zs, he: this.Ls.kt().he(), Ae: t.wickVisible, ci: t.borderVisible, nt: this.Es})
        }
    }

    class qt {
        constructor(t, i) {
            this.Ne = t, this.Li = i
        }

        K(t, i, n) {
            this.Ne.draw(t, this.Li, i, n)
        }
    }

    class Yt extends zt {
        constructor(t, i, n) {
            super(t, i, !1), this.wn = n, this.Ws = new qt(this.wn.renderer(), (i => {
                const n = t.Pt();
                return null === n ? null : t.At().Ot(i, n.Bt)
            }))
        }

        Fe(t) {
            return this.wn.priceValueBuilder(t)
        }

        We(t) {
            return this.wn.isWhitespace(t)
        }

        qs() {
            const t = this.Is.$s();
            this.zs = this.Is.zn().ie().map((i => Object.assign(Object.assign({
                ut: i.se,
                et: NaN
            }, t.Hs(i.se)), {je: i.He})))
        }

        Zs(t, i) {
            i.Js(this.zs, B(this.Es))
        }

        Gs() {
            this.wn.update({bars: this.zs.map(Xt), barSpacing: this.Ls.kt().he(), visibleRange: this.Es}, this.Is.W())
        }
    }

    function Xt(t) {
        return {x: t.et, time: t.ut, originalData: t.je, barColor: t.ue}
    }

    class Kt extends H {
        constructor() {
            super(...arguments), this.Lt = null, this.$e = []
        }

        it(t) {
            this.Lt = t, this.$e = []
        }

        Z({context: t, horizontalPixelRatio: i, verticalPixelRatio: n}) {
            if (null === this.Lt || 0 === this.Lt.st.length || null === this.Lt.nt) return;
            this.$e.length || this.Ue(i);
            const s = Math.max(1, Math.floor(n)), e = Math.round(this.Lt.qe * n) - Math.floor(s / 2), r = e + s;
            for (let i = this.Lt.nt.from; i < this.Lt.nt.to; i++) {
                const h = this.Lt.st[i], l = this.$e[i - this.Lt.nt.from], a = Math.round(h.rt * n);
                let o, _;
                t.fillStyle = h.ue, a <= e ? (o = a, _ = r) : (o = e, _ = a - Math.floor(s / 2) + s), t.fillRect(l.Os, o, l.di - l.Os + 1, _ - o)
            }
        }

        Ue(t) {
            if (null === this.Lt || 0 === this.Lt.st.length || null === this.Lt.nt) return void (this.$e = []);
            const i = Math.ceil(this.Lt.he * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
                n = Math.round(this.Lt.he * t) - i;
            this.$e = new Array(this.Lt.nt.to - this.Lt.nt.from);
            for (let i = this.Lt.nt.from; i < this.Lt.nt.to; i++) {
                const s = this.Lt.st[i], e = Math.round(s.et * t);
                let r, h;
                if (n % 2) {
                    const t = (n - 1) / 2;
                    r = e - t, h = e + t
                } else {
                    const t = n / 2;
                    r = e - t, h = e + t - 1
                }
                this.$e[i - this.Lt.nt.from] = {Os: r, di: h, Ye: e, Xe: s.et * t, ut: s.ut}
            }
            for (let t = this.Lt.nt.from + 1; t < this.Lt.nt.to; t++) {
                const n = this.$e[t - this.Lt.nt.from], s = this.$e[t - this.Lt.nt.from - 1];
                n.ut === s.ut + 1 && (n.Os - s.di !== i + 1 && (s.Ye > s.Xe ? s.di = n.Os - i - 1 : n.Os = s.di + i + 1))
            }
            let s = Math.ceil(this.Lt.he * t);
            for (let t = this.Lt.nt.from; t < this.Lt.nt.to; t++) {
                const i = this.$e[t - this.Lt.nt.from];
                i.di < i.Os && (i.di = i.Os);
                const n = i.di - i.Os + 1;
                s = Math.min(n, s)
            }
            if (i > 0 && s < 4) for (let t = this.Lt.nt.from; t < this.Lt.nt.to; t++) {
                const i = this.$e[t - this.Lt.nt.from];
                i.di - i.Os + 1 > s && (i.Ye > i.Xe ? i.di -= 1 : i.Os += 1)
            }
        }
    }

    class Zt extends Et {
        constructor() {
            super(...arguments), this.Ws = new Kt
        }

        ne(t, i, n) {
            return Object.assign(Object.assign({}, this.te(t, i)), n.Hs(t))
        }

        Gs() {
            const t = {
                st: this.zs,
                he: this.Ls.kt().he(),
                nt: this.Es,
                qe: this.Is.At().Ot(this.Is.W().base, f(this.Is.Pt()).Bt)
            };
            this.Ws.it(t)
        }
    }

    class Gt extends Et {
        constructor() {
            super(...arguments), this.Ws = new Pt
        }

        ne(t, i, n) {
            return Object.assign(Object.assign({}, this.te(t, i)), n.Hs(t))
        }

        Gs() {
            const t = this.Is.W(), i = {
                st: this.zs,
                Wt: t.lineStyle,
                ds: t.lineVisible ? t.lineType : void 0,
                ht: t.lineWidth,
                Rs: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0,
                nt: this.Es,
                cs: this.Ls.kt().he()
            };
            this.Ws.it(i)
        }
    }

    const Jt = /[2-9]/g;

    class Qt {
        constructor(t = 50) {
            this.Ke = 0, this.Ze = 1, this.Ge = 1, this.Je = {}, this.Qe = new Map, this.tr = t
        }

        ir() {
            this.Ke = 0, this.Qe.clear(), this.Ze = 1, this.Ge = 1, this.Je = {}
        }

        Si(t, i, n) {
            return this.nr(t, i, n).width
        }

        xi(t, i, n) {
            const s = this.nr(t, i, n);
            return ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) / 2
        }

        nr(t, i, n) {
            const s = n || Jt, e = String(i).replace(s, "0");
            if (this.Qe.has(e)) return d(this.Qe.get(e)).sr;
            if (this.Ke === this.tr) {
                const t = this.Je[this.Ge];
                delete this.Je[this.Ge], this.Qe.delete(t), this.Ge++, this.Ke--
            }
            t.save(), t.textBaseline = "middle";
            const r = t.measureText(e);
            return t.restore(), 0 === r.width && i.length || (this.Qe.set(e, {
                sr: r,
                er: this.Ze
            }), this.Je[this.Ze] = e, this.Ke++, this.Ze++), r
        }
    }

    class ti {
        constructor(t) {
            this.rr = null, this.k = null, this.hr = "right", this.lr = t
        }

        ar(t, i, n) {
            this.rr = t, this.k = i, this.hr = n
        }

        K(t) {
            null !== this.k && null !== this.rr && this.rr.K(t, this.k, this.lr, this.hr)
        }
    }

    class ii {
        constructor(t, i, n) {
            this._r = t, this.lr = new Qt(50), this.ur = i, this.F = n, this.j = -1, this.Ht = new ti(this.lr)
        }

        xt() {
            const t = this.F.cr(this.ur);
            if (null === t) return null;
            const i = t.dr(this.ur) ? t.vr() : this.ur.At();
            if (null === i) return null;
            const n = t.pr(i);
            if ("overlay" === n) return null;
            const s = this.F.mr();
            return s.P !== this.j && (this.j = s.P, this.lr.ir()), this.Ht.ar(this._r.Ei(), s, n), this.Ht
        }
    }

    class ni extends H {
        constructor() {
            super(...arguments), this.Lt = null
        }

        it(t) {
            this.Lt = t
        }

        br(t, i) {
            var n;
            if (!(null === (n = this.Lt) || void 0 === n ? void 0 : n.Tt)) return null;
            const {rt: s, ht: e, wr: r} = this.Lt;
            return i >= s - e - 7 && i <= s + e + 7 ? {gr: this.Lt, wr: r} : null
        }

        Z({context: t, bitmapSize: i, horizontalPixelRatio: n, verticalPixelRatio: s}) {
            if (null === this.Lt) return;
            if (!1 === this.Lt.Tt) return;
            const e = Math.round(this.Lt.rt * s);
            e < 0 || e > i.height || (t.lineCap = "butt", t.strokeStyle = this.Lt.O, t.lineWidth = Math.floor(this.Lt.ht * n), _(t, this.Lt.Wt), u(t, e, 0, i.width))
        }
    }

    class si {
        constructor(t) {
            this.Mr = {
                rt: 0,
                O: "rgba(0, 0, 0, 0)",
                ht: 1,
                Wt: 0,
                Tt: !1
            }, this.Sr = new ni, this.bt = !0, this.Is = t, this.Ls = t.qt(), this.Sr.it(this.Mr)
        }

        gt() {
            this.bt = !0
        }

        xt() {
            return this.Is.Tt() ? (this.bt && (this.yr(), this.bt = !1), this.Sr) : null
        }
    }

    class ei extends si {
        constructor(t) {
            super(t)
        }

        yr() {
            this.Mr.Tt = !1;
            const t = this.Is.At(), i = t.kr().kr;
            if (2 !== i && 3 !== i) return;
            const n = this.Is.W();
            if (!n.baseLineVisible || !this.Is.Tt()) return;
            const s = this.Is.Pt();
            null !== s && (this.Mr.Tt = !0, this.Mr.rt = t.Ot(s.Bt, s.Bt), this.Mr.O = n.baseLineColor, this.Mr.ht = n.baseLineWidth, this.Mr.Wt = n.baseLineStyle)
        }
    }

    class ri extends H {
        constructor() {
            super(...arguments), this.Lt = null
        }

        it(t) {
            this.Lt = t
        }

        He() {
            return this.Lt
        }

        Z({context: t, horizontalPixelRatio: i, verticalPixelRatio: n}) {
            const s = this.Lt;
            if (null === s) return;
            const e = Math.max(1, Math.floor(i)), r = e % 2 / 2, h = Math.round(s.Xe.x * i) + r, l = s.Xe.y * n;
            t.fillStyle = s.Cr, t.beginPath();
            const a = Math.max(2, 1.5 * s.Tr) * i;
            t.arc(h, l, a, 0, 2 * Math.PI, !1), t.fill(), t.fillStyle = s.Pr, t.beginPath(), t.arc(h, l, s.ot * i, 0, 2 * Math.PI, !1), t.fill(), t.lineWidth = e, t.strokeStyle = s.Rr, t.beginPath(), t.arc(h, l, s.ot * i + e / 2, 0, 2 * Math.PI, !1), t.stroke()
        }
    }

    const hi = [{Dr: 0, Or: .25, Ar: 4, Br: 10, Vr: .25, zr: 0, Er: .4, Ir: .8}, {
        Dr: .25,
        Or: .525,
        Ar: 10,
        Br: 14,
        Vr: 0,
        zr: 0,
        Er: .8,
        Ir: 0
    }, {Dr: .525, Or: 1, Ar: 14, Br: 14, Vr: 0, zr: 0, Er: 0, Ir: 0}];

    function li(t, i, n, s) {
        return function (t, i) {
            if ("transparent" === t) return t;
            const n = S(t), s = n[3];
            return `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${i * s})`
        }(t, n + (s - n) * i)
    }

    function ai(t, i) {
        const n = t % 2600 / 2600;
        let s;
        for (const t of hi) if (n >= t.Dr && n <= t.Or) {
            s = t;
            break
        }
        c(void 0 !== s, "Last price animation internal logic error");
        const e = (n - s.Dr) / (s.Or - s.Dr);
        return {Pr: li(i, e, s.Vr, s.zr), Rr: li(i, e, s.Er, s.Ir), ot: (r = e, h = s.Ar, l = s.Br, h + (l - h) * r)};
        var r, h, l
    }

    class oi {
        constructor(t) {
            this.Ht = new ri, this.bt = !0, this.Lr = !0, this.Nr = performance.now(), this.Fr = this.Nr - 1, this.Wr = t
        }

        jr() {
            this.Fr = this.Nr - 1, this.gt()
        }

        Hr() {
            if (this.gt(), 2 === this.Wr.W().lastPriceAnimation) {
                const t = performance.now(), i = this.Fr - t;
                if (i > 0) return void (i < 650 && (this.Fr += 2600));
                this.Nr = t, this.Fr = t + 2600
            }
        }

        gt() {
            this.bt = !0
        }

        $r() {
            this.Lr = !0
        }

        Tt() {
            return 0 !== this.Wr.W().lastPriceAnimation
        }

        Ur() {
            switch (this.Wr.W().lastPriceAnimation) {
                case 0:
                    return !1;
                case 1:
                    return !0;
                case 2:
                    return performance.now() <= this.Fr
            }
        }

        xt() {
            return this.bt ? (this.St(), this.bt = !1, this.Lr = !1) : this.Lr && (this.qr(), this.Lr = !1), this.Ht
        }

        St() {
            this.Ht.it(null);
            const t = this.Wr.qt().kt(), i = t.Xs(), n = this.Wr.Pt();
            if (null === i || null === n) return;
            const s = this.Wr.Yr(!0);
            if (s.Xr || !i.Kr(s.se)) return;
            const e = {x: t.It(s.se), y: this.Wr.At().Ot(s.ct, n.Bt)}, r = s.O, h = this.Wr.W().lineWidth,
                l = ai(this.Zr(), r);
            this.Ht.it({Cr: r, Tr: h, Pr: l.Pr, Rr: l.Rr, ot: l.ot, Xe: e})
        }

        qr() {
            const t = this.Ht.He();
            if (null !== t) {
                const i = ai(this.Zr(), t.Cr);
                t.Pr = i.Pr, t.Rr = i.Rr, t.ot = i.ot
            }
        }

        Zr() {
            return this.Ur() ? performance.now() - this.Nr : 2599
        }
    }

    function _i(t, i) {
        return St(Math.min(Math.max(t, 12), 30) * i)
    }

    function ui(t, i) {
        switch (t) {
            case"arrowDown":
            case"arrowUp":
                return _i(i, 1);
            case"circle":
                return _i(i, .8);
            case"square":
                return _i(i, .7)
        }
    }

    function ci(t) {
        return function (t) {
            const i = Math.ceil(t);
            return i % 2 != 0 ? i - 1 : i
        }(_i(t, 1))
    }

    function di(t) {
        return Math.max(_i(t, .1), 3)
    }

    function fi(t, i, n, s, e) {
        const r = ui("square", n), h = (r - 1) / 2, l = t - h, a = i - h;
        return s >= l && s <= l + r && e >= a && e <= a + r
    }

    function vi(t, i, n, s, e) {
        const r = (ui("arrowUp", e) - 1) / 2, h = (St(e / 2) - 1) / 2;
        i.beginPath(), t ? (i.moveTo(n - r, s), i.lineTo(n, s - r), i.lineTo(n + r, s), i.lineTo(n + h, s), i.lineTo(n + h, s + r), i.lineTo(n - h, s + r), i.lineTo(n - h, s)) : (i.moveTo(n - r, s), i.lineTo(n, s + r), i.lineTo(n + r, s), i.lineTo(n + h, s), i.lineTo(n + h, s - r), i.lineTo(n - h, s - r), i.lineTo(n - h, s)), i.fill()
    }

    function pi(t, i, n, s, e, r) {
        return fi(i, n, s, e, r)
    }

    class mi extends L {
        constructor() {
            super(...arguments), this.Lt = null, this.lr = new Qt, this.j = -1, this.H = "", this.Gr = ""
        }

        it(t) {
            this.Lt = t
        }

        ar(t, i) {
            this.j === t && this.H === i || (this.j = t, this.H = i, this.Gr = z(t, i), this.lr.ir())
        }

        br(t, i) {
            if (null === this.Lt || null === this.Lt.nt) return null;
            for (let n = this.Lt.nt.from; n < this.Lt.nt.to; n++) {
                const s = this.Lt.st[n];
                if (wi(s, t, i)) return {gr: s.Jr, wr: s.wr}
            }
            return null
        }

        Z({context: t}, i, n) {
            if (null !== this.Lt && null !== this.Lt.nt) {
                t.textBaseline = "middle", t.font = this.Gr;
                for (let i = this.Lt.nt.from; i < this.Lt.nt.to; i++) {
                    const n = this.Lt.st[i];
                    void 0 !== n.Jt && (n.Jt.$i = this.lr.Si(t, n.Jt.Qr), n.Jt.Et = this.j, n.Jt.et = n.et - n.Jt.$i / 2), bi(n, t)
                }
            }
        }
    }

    function bi(t, i) {
        i.fillStyle = t.O, void 0 !== t.Jt && function (t, i, n, s) {
            t.fillText(i, n, s)
        }(i, t.Jt.Qr, t.Jt.et, t.Jt.rt), function (t, i) {
            if (0 === t.Ks) return;
            switch (t.th) {
                case"arrowDown":
                    return void vi(!1, i, t.et, t.rt, t.Ks);
                case"arrowUp":
                    return void vi(!0, i, t.et, t.rt, t.Ks);
                case"circle":
                    return void function (t, i, n, s) {
                        const e = (ui("circle", s) - 1) / 2;
                        t.beginPath(), t.arc(i, n, e, 0, 2 * Math.PI, !1), t.fill()
                    }(i, t.et, t.rt, t.Ks);
                case"square":
                    return void function (t, i, n, s) {
                        const e = ui("square", s), r = (e - 1) / 2, h = i - r, l = n - r;
                        t.fillRect(h, l, e, e)
                    }(i, t.et, t.rt, t.Ks)
            }
            t.th
        }(t, i)
    }

    function wi(t, i, n) {
        return !(void 0 === t.Jt || !function (t, i, n, s, e, r) {
            const h = s / 2;
            return e >= t && e <= t + n && r >= i - h && r <= i + h
        }(t.Jt.et, t.Jt.rt, t.Jt.$i, t.Jt.Et, i, n)) || function (t, i, n) {
            if (0 === t.Ks) return !1;
            switch (t.th) {
                case"arrowDown":
                case"arrowUp":
                    return pi(0, t.et, t.rt, t.Ks, i, n);
                case"circle":
                    return function (t, i, n, s, e) {
                        const r = 2 + ui("circle", n) / 2, h = t - s, l = i - e;
                        return Math.sqrt(h * h + l * l) <= r
                    }(t.et, t.rt, t.Ks, i, n);
                case"square":
                    return fi(t.et, t.rt, t.Ks, i, n)
            }
        }(t, i, n)
    }

    function gi(t, i, n, s, e, r, h, l, a) {
        const o = T(n) ? n : n.xe, _ = T(n) ? n : n.ge, u = T(n) ? n : n.Me, c = T(i.size) ? Math.max(i.size, 0) : 1,
            d = ci(l.he()) * c, f = d / 2;
        switch (t.Ks = d, i.position) {
            case"inBar":
                return t.rt = h.Ot(o, a), void (void 0 !== t.Jt && (t.Jt.rt = t.rt + f + r + .6 * e));
            case"aboveBar":
                return t.rt = h.Ot(_, a) - f - s.ih, void 0 !== t.Jt && (t.Jt.rt = t.rt - f - .6 * e, s.ih += 1.2 * e), void (s.ih += d + r);
            case"belowBar":
                return t.rt = h.Ot(u, a) + f + s.nh, void 0 !== t.Jt && (t.Jt.rt = t.rt + f + r + .6 * e, s.nh += 1.2 * e), void (s.nh += d + r)
        }
        i.position
    }

    class Mi {
        constructor(t, i) {
            this.bt = !0, this.sh = !0, this.eh = !0, this.rh = null, this.Ht = new mi, this.Wr = t, this.Ui = i, this.Lt = {
                st: [],
                nt: null
            }
        }

        gt(t) {
            this.bt = !0, this.eh = !0, "data" === t && (this.sh = !0)
        }

        xt(t) {
            if (!this.Wr.Tt()) return null;
            this.bt && this.hh();
            const i = this.Ui.W().layout;
            return this.Ht.ar(i.fontSize, i.fontFamily), this.Ht.it(this.Lt), this.Ht
        }

        lh() {
            if (this.eh) {
                if (this.Wr.ah().length > 0) {
                    const t = this.Ui.kt().he(), i = di(t), n = 1.5 * ci(t) + 2 * i;
                    this.rh = {above: n, below: n}
                } else this.rh = null;
                this.eh = !1
            }
            return this.rh
        }

        hh() {
            const t = this.Wr.At(), i = this.Ui.kt(), n = this.Wr.ah();
            this.sh && (this.Lt.st = n.map((t => ({
                ut: t.time,
                et: 0,
                rt: 0,
                Ks: 0,
                th: t.shape,
                O: t.color,
                Jr: t.Jr,
                wr: t.id,
                Jt: void 0
            }))), this.sh = !1);
            const s = this.Ui.W().layout;
            this.Lt.nt = null;
            const e = i.Xs();
            if (null === e) return;
            const r = this.Wr.Pt();
            if (null === r) return;
            if (0 === this.Lt.st.length) return;
            let h = NaN;
            const l = di(i.he()), a = {ih: l, nh: l};
            this.Lt.nt = Vt(this.Lt.st, e, !0);
            for (let e = this.Lt.nt.from; e < this.Lt.nt.to; e++) {
                const o = n[e];
                o.time !== h && (a.ih = l, a.nh = l, h = o.time);
                const _ = this.Lt.st[e];
                _.et = i.It(o.time), void 0 !== o.text && o.text.length > 0 && (_.Jt = {
                    Qr: o.text,
                    et: 0,
                    rt: 0,
                    $i: 0,
                    Et: 0
                });
                const u = this.Wr.oh(o.time);
                null !== u && gi(_, o, u, a, s.fontSize, l, t, i, r.Bt)
            }
            this.bt = !1
        }
    }

    class xi extends si {
        constructor(t) {
            super(t)
        }

        yr() {
            const t = this.Mr;
            t.Tt = !1;
            const i = this.Is.W();
            if (!i.priceLineVisible || !this.Is.Tt()) return;
            const n = this.Is.Yr(0 === i.priceLineSource);
            n.Xr || (t.Tt = !0, t.rt = n.ki, t.O = this.Is._h(n.O), t.ht = i.priceLineWidth, t.Wt = i.priceLineStyle)
        }
    }

    class Si extends Q {
        constructor(t) {
            super(), this.$t = t
        }

        Ii(t, i, n) {
            t.Tt = !1, i.Tt = !1;
            const s = this.$t;
            if (!s.Tt()) return;
            const e = s.W(), r = e.lastValueVisible, h = "" !== s.uh(), l = 0 === e.seriesLastValueMode, a = s.Yr(!1);
            if (a.Xr) return;
            r && (t.Jt = this.dh(a, r, l), t.Tt = 0 !== t.Jt.length), (h || l) && (i.Jt = this.fh(a, r, h, l), i.Tt = i.Jt.length > 0);
            const o = s._h(a.O), _ = y(o);
            n.t = _.t, n.ki = a.ki, i.Vt = s.qt().zt(a.ki / s.At().Et()), t.Vt = o, t.O = _.i, i.O = _.i
        }

        fh(t, i, n, s) {
            let e = "";
            const r = this.$t.uh();
            return n && 0 !== r.length && (e += `${r} `), i && s && (e += this.$t.At().ph() ? t.mh : t.bh), e.trim()
        }

        dh(t, i, n) {
            return i ? n ? this.$t.At().ph() ? t.bh : t.mh : t.Jt : ""
        }
    }

    function yi(t, i, n, s) {
        const e = Number.isFinite(i), r = Number.isFinite(n);
        return e && r ? t(i, n) : e || r ? e ? i : n : s
    }

    class ki {
        constructor(t, i) {
            this.wh = t, this.gh = i
        }

        Mh(t) {
            return null !== t && (this.wh === t.wh && this.gh === t.gh)
        }

        xh() {
            return new ki(this.wh, this.gh)
        }

        Sh() {
            return this.wh
        }

        yh() {
            return this.gh
        }

        kh() {
            return this.gh - this.wh
        }

        Fi() {
            return this.gh === this.wh || Number.isNaN(this.gh) || Number.isNaN(this.wh)
        }

        ts(t) {
            return null === t ? this : new ki(yi(Math.min, this.Sh(), t.Sh(), -1 / 0), yi(Math.max, this.yh(), t.yh(), 1 / 0))
        }

        Ch(t) {
            if (!T(t)) return;
            if (0 === this.gh - this.wh) return;
            const i = .5 * (this.gh + this.wh);
            let n = this.gh - i, s = this.wh - i;
            n *= t, s *= t, this.gh = i + n, this.wh = i + s
        }

        Th(t) {
            T(t) && (this.gh += t, this.wh += t)
        }

        Ph() {
            return {minValue: this.wh, maxValue: this.gh}
        }

        static Rh(t) {
            return null === t ? null : new ki(t.minValue, t.maxValue)
        }
    }

    class Ci {
        constructor(t, i) {
            this.Dh = t, this.Oh = i || null
        }

        Ah() {
            return this.Dh
        }

        Bh() {
            return this.Oh
        }

        Ph() {
            return null === this.Dh ? null : {priceRange: this.Dh.Ph(), margins: this.Oh || void 0}
        }

        static Rh(t) {
            return null === t ? null : new Ci(ki.Rh(t.priceRange), t.margins)
        }
    }

    class Ti extends si {
        constructor(t, i) {
            super(t), this.Vh = i
        }

        yr() {
            const t = this.Mr;
            t.Tt = !1;
            const i = this.Vh.W();
            if (!this.Is.Tt() || !i.lineVisible) return;
            const n = this.Vh.zh();
            null !== n && (t.Tt = !0, t.rt = n, t.O = i.color, t.ht = i.lineWidth, t.Wt = i.lineStyle, t.wr = this.Vh.W().id)
        }
    }

    class Pi extends Q {
        constructor(t, i) {
            super(), this.Wr = t, this.Vh = i
        }

        Ii(t, i, n) {
            t.Tt = !1, i.Tt = !1;
            const s = this.Vh.W(), e = s.axisLabelVisible, r = "" !== s.title, h = this.Wr;
            if (!e || !h.Tt()) return;
            const l = this.Vh.zh();
            if (null === l) return;
            r && (i.Jt = s.title, i.Tt = !0), i.Vt = h.qt().zt(l / h.At().Et()), t.Jt = this.Eh(s.price), t.Tt = !0;
            const a = y(s.axisLabelColor || s.color);
            n.t = a.t;
            const o = s.axisLabelTextColor || a.i;
            t.O = o, i.O = o, n.ki = l
        }

        Eh(t) {
            const i = this.Wr.Pt();
            return null === i ? "" : this.Wr.At().Wi(t, i.Bt)
        }
    }

    class Ri {
        constructor(t, i) {
            this.Wr = t, this.cn = i, this.Ih = new Ti(t, this), this._r = new Pi(t, this), this.Lh = new ii(this._r, t, t.qt())
        }

        Nh(t) {
            C(this.cn, t), this.gt(), this.Wr.qt().Fh()
        }

        W() {
            return this.cn
        }

        Wh() {
            return this.Ih
        }

        jh() {
            return this.Lh
        }

        Hh() {
            return this._r
        }

        gt() {
            this.Ih.gt(), this._r.gt()
        }

        zh() {
            const t = this.Wr, i = t.At();
            if (t.qt().kt().Fi() || i.Fi()) return null;
            const n = t.Pt();
            return null === n ? null : i.Ot(this.cn.price, n.Bt)
        }
    }

    class Di extends et {
        constructor(t) {
            super(), this.Ui = t
        }

        qt() {
            return this.Ui
        }
    }

    const Oi = {
        Bar: (t, i, n, s) => {
            var e;
            const r = i.upColor, h = i.downColor, l = f(t(n, s)), a = v(l.Bt[0]) <= v(l.Bt[3]);
            return {ue: null !== (e = l.O) && void 0 !== e ? e : a ? r : h}
        }, Candlestick: (t, i, n, s) => {
            var e, r, h;
            const l = i.upColor, a = i.downColor, o = i.borderUpColor, _ = i.borderDownColor, u = i.wickUpColor,
                c = i.wickDownColor, d = f(t(n, s)), p = v(d.Bt[0]) <= v(d.Bt[3]);
            return {
                ue: null !== (e = d.O) && void 0 !== e ? e : p ? l : a,
                Le: null !== (r = d.Vt) && void 0 !== r ? r : p ? o : _,
                Ie: null !== (h = d.$h) && void 0 !== h ? h : p ? u : c
            }
        }, Custom: (t, i, n, s) => {
            var e;
            return {ue: null !== (e = f(t(n, s)).O) && void 0 !== e ? e : i.color}
        }, Area: (t, i, n, s) => {
            var e, r, h, l;
            const a = f(t(n, s));
            return {
                ue: null !== (e = a._t) && void 0 !== e ? e : i.lineColor,
                _t: null !== (r = a._t) && void 0 !== r ? r : i.lineColor,
                Ts: null !== (h = a.Ts) && void 0 !== h ? h : i.topColor,
                Ps: null !== (l = a.Ps) && void 0 !== l ? l : i.bottomColor
            }
        }, Baseline: (t, i, n, s) => {
            var e, r, h, l, a, o;
            const _ = f(t(n, s));
            return {
                ue: _.Bt[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor,
                Pe: null !== (e = _.Pe) && void 0 !== e ? e : i.topLineColor,
                Re: null !== (r = _.Re) && void 0 !== r ? r : i.bottomLineColor,
                Se: null !== (h = _.Se) && void 0 !== h ? h : i.topFillColor1,
                ye: null !== (l = _.ye) && void 0 !== l ? l : i.topFillColor2,
                ke: null !== (a = _.ke) && void 0 !== a ? a : i.bottomFillColor1,
                Ce: null !== (o = _.Ce) && void 0 !== o ? o : i.bottomFillColor2
            }
        }, Line: (t, i, n, s) => {
            var e, r;
            const h = f(t(n, s));
            return {
                ue: null !== (e = h.O) && void 0 !== e ? e : i.color,
                _t: null !== (r = h.O) && void 0 !== r ? r : i.color
            }
        }, Histogram: (t, i, n, s) => {
            var e;
            return {ue: null !== (e = f(t(n, s)).O) && void 0 !== e ? e : i.color}
        }
    };

    class Ai {
        constructor(t) {
            this.Uh = (t, i) => void 0 !== i ? i.Bt : this.Wr.zn().qh(t), this.Wr = t, this.Yh = Oi[t.Xh()]
        }

        Hs(t, i) {
            return this.Yh(this.Uh, this.Wr.W(), t, i)
        }
    }

    var Bi;
    !function (t) {
        t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight"
    }(Bi || (Bi = {}));
    const Vi = 30;

    class zi {
        constructor() {
            this.Kh = [], this.Zh = new Map, this.Gh = new Map
        }

        Jh() {
            return this.Ks() > 0 ? this.Kh[this.Kh.length - 1] : null
        }

        Qh() {
            return this.Ks() > 0 ? this.tl(0) : null
        }

        Vn() {
            return this.Ks() > 0 ? this.tl(this.Kh.length - 1) : null
        }

        Ks() {
            return this.Kh.length
        }

        Fi() {
            return 0 === this.Ks()
        }

        Kr(t) {
            return null !== this.il(t, 0)
        }

        qh(t) {
            return this.nl(t)
        }

        nl(t, i = 0) {
            const n = this.il(t, i);
            return null === n ? null : Object.assign(Object.assign({}, this.sl(n)), {se: this.tl(n)})
        }

        ie() {
            return this.Kh
        }

        el(t, i, n) {
            if (this.Fi()) return null;
            let s = null;
            for (const e of n) {
                s = Ei(s, this.rl(t, i, e))
            }
            return s
        }

        it(t) {
            this.Gh.clear(), this.Zh.clear(), this.Kh = t
        }

        tl(t) {
            return this.Kh[t].se
        }

        sl(t) {
            return this.Kh[t]
        }

        il(t, i) {
            const n = this.hl(t);
            if (null === n && 0 !== i) switch (i) {
                case-1:
                    return this.ll(t);
                case 1:
                    return this.al(t);
                default:
                    throw new TypeError("Unknown search mode")
            }
            return n
        }

        ll(t) {
            let i = this.ol(t);
            return i > 0 && (i -= 1), i !== this.Kh.length && this.tl(i) < t ? i : null
        }

        al(t) {
            const i = this._l(t);
            return i !== this.Kh.length && t < this.tl(i) ? i : null
        }

        hl(t) {
            const i = this.ol(t);
            return i === this.Kh.length || t < this.Kh[i].se ? null : i
        }

        ol(t) {
            return Dt(this.Kh, t, ((t, i) => t.se < i))
        }

        _l(t) {
            return Ot(this.Kh, t, ((t, i) => t.se > i))
        }

        ul(t, i, n) {
            let s = null;
            for (let e = t; e < i; e++) {
                const t = this.Kh[e].Bt[n];
                Number.isNaN(t) || (null === s ? s = {cl: t, dl: t} : (t < s.cl && (s.cl = t), t > s.dl && (s.dl = t)))
            }
            return s
        }

        rl(t, i, n) {
            if (this.Fi()) return null;
            let s = null;
            const e = f(this.Qh()), r = f(this.Vn()), h = Math.max(t, e), l = Math.min(i, r),
                a = Math.ceil(h / Vi) * Vi, o = Math.max(a, Math.floor(l / Vi) * Vi);
            {
                const t = this.ol(h), e = this._l(Math.min(l, a, i));
                s = Ei(s, this.ul(t, e, n))
            }
            let _ = this.Zh.get(n);
            void 0 === _ && (_ = new Map, this.Zh.set(n, _));
            for (let t = Math.max(a + 1, h); t < o; t += Vi) {
                const i = Math.floor(t / Vi);
                let e = _.get(i);
                if (void 0 === e) {
                    const t = this.ol(i * Vi), s = this._l((i + 1) * Vi - 1);
                    e = this.ul(t, s, n), _.set(i, e)
                }
                s = Ei(s, e)
            }
            {
                const t = this.ol(o), i = this._l(l);
                s = Ei(s, this.ul(t, i, n))
            }
            return s
        }
    }

    function Ei(t, i) {
        if (null === t) return i;
        if (null === i) return t;
        return {cl: Math.min(t.cl, i.cl), dl: Math.max(t.dl, i.dl)}
    }

    class Ii {
        constructor(t) {
            this.fl = t
        }

        K(t, i, n) {
            this.fl.draw(t)
        }

        G(t, i, n) {
            var s, e;
            null === (e = (s = this.fl).drawBackground) || void 0 === e || e.call(s, t)
        }
    }

    class Li {
        constructor(t) {
            this.Qe = null, this.wn = t
        }

        xt() {
            var t;
            const i = this.wn.renderer();
            if (null === i) return null;
            if ((null === (t = this.Qe) || void 0 === t ? void 0 : t.vl) === i) return this.Qe.pl;
            const n = new Ii(i);
            return this.Qe = {vl: i, pl: n}, n
        }

        ml() {
            var t, i, n;
            return null !== (n = null === (i = (t = this.wn).zOrder) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : "normal"
        }
    }

    function Ni(t) {
        var i, n, s, e, r;
        return {
            Jt: t.text(),
            ki: t.coordinate(),
            yi: null === (i = t.fixedCoordinate) || void 0 === i ? void 0 : i.call(t),
            O: t.textColor(),
            t: t.backColor(),
            Tt: null === (s = null === (n = t.visible) || void 0 === n ? void 0 : n.call(t)) || void 0 === s || s,
            ai: null === (r = null === (e = t.tickVisible) || void 0 === e ? void 0 : e.call(t)) || void 0 === r || r
        }
    }

    class Fi {
        constructor(t, i) {
            this.Ht = new nt, this.bl = t, this.wl = i
        }

        xt() {
            return this.Ht.it(Object.assign({$i: this.wl.$i()}, Ni(this.bl))), this.Ht
        }
    }

    class Wi extends Q {
        constructor(t, i) {
            super(), this.bl = t, this.Li = i
        }

        Ii(t, i, n) {
            const s = Ni(this.bl);
            n.t = s.t, t.O = s.O;
            const e = 2 / 12 * this.Li.P();
            n.gi = e, n.Mi = e, n.ki = s.ki, n.yi = s.yi, t.Jt = s.Jt, t.Tt = s.Tt, t.ai = s.ai
        }
    }

    class ji {
        constructor(t, i) {
            this.gl = null, this.Ml = null, this.xl = null, this.Sl = null, this.yl = null, this.kl = t, this.Wr = i
        }

        Cl() {
            return this.kl
        }

        On() {
            var t, i;
            null === (i = (t = this.kl).updateAllViews) || void 0 === i || i.call(t)
        }

        Pn() {
            var t, i, n, s;
            const e = null !== (n = null === (i = (t = this.kl).paneViews) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : [];
            if ((null === (s = this.gl) || void 0 === s ? void 0 : s.vl) === e) return this.gl.pl;
            const r = e.map((t => new Li(t)));
            return this.gl = {vl: e, pl: r}, r
        }

        tn() {
            var t, i, n, s;
            const e = null !== (n = null === (i = (t = this.kl).timeAxisViews) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : [];
            if ((null === (s = this.Ml) || void 0 === s ? void 0 : s.vl) === e) return this.Ml.pl;
            const r = this.Wr.qt().kt(), h = e.map((t => new Fi(t, r)));
            return this.Ml = {vl: e, pl: h}, h
        }

        Rn() {
            var t, i, n, s;
            const e = null !== (n = null === (i = (t = this.kl).priceAxisViews) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : [];
            if ((null === (s = this.xl) || void 0 === s ? void 0 : s.vl) === e) return this.xl.pl;
            const r = this.Wr.At(), h = e.map((t => new Wi(t, r)));
            return this.xl = {vl: e, pl: h}, h
        }

        Tl() {
            var t, i, n, s;
            const e = null !== (n = null === (i = (t = this.kl).priceAxisPaneViews) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : [];
            if ((null === (s = this.Sl) || void 0 === s ? void 0 : s.vl) === e) return this.Sl.pl;
            const r = e.map((t => new Li(t)));
            return this.Sl = {vl: e, pl: r}, r
        }

        Pl() {
            var t, i, n, s;
            const e = null !== (n = null === (i = (t = this.kl).timeAxisPaneViews) || void 0 === i ? void 0 : i.call(t)) && void 0 !== n ? n : [];
            if ((null === (s = this.yl) || void 0 === s ? void 0 : s.vl) === e) return this.yl.pl;
            const r = e.map((t => new Li(t)));
            return this.yl = {vl: e, pl: r}, r
        }

        Rl(t, i) {
            var n, s, e;
            return null !== (e = null === (s = (n = this.kl).autoscaleInfo) || void 0 === s ? void 0 : s.call(n, t, i)) && void 0 !== e ? e : null
        }

        br(t, i) {
            var n, s, e;
            return null !== (e = null === (s = (n = this.kl).hitTest) || void 0 === s ? void 0 : s.call(n, t, i)) && void 0 !== e ? e : null
        }
    }

    function Hi(t, i, n, s) {
        t.forEach((t => {
            i(t).forEach((t => {
                t.ml() === n && s.push(t)
            }))
        }))
    }

    function $i(t) {
        return t.Pn()
    }

    function Ui(t) {
        return t.Tl()
    }

    function qi(t) {
        return t.Pl()
    }

    class Yi extends Di {
        constructor(t, i, n, s, e) {
            super(t), this.Lt = new zi, this.Ih = new xi(this), this.Dl = [], this.Ol = new ei(this), this.Al = null, this.Bl = null, this.Vl = [], this.zl = [], this.El = null, this.Il = [], this.cn = i, this.Ll = n;
            const r = new Si(this);
            this.hn = [r], this.Lh = new ii(r, this, t), "Area" !== n && "Line" !== n && "Baseline" !== n || (this.Al = new oi(this)), this.Nl(), this.Fl(e)
        }

        S() {
            null !== this.El && clearTimeout(this.El)
        }

        _h(t) {
            return this.cn.priceLineColor || t
        }

        Yr(t) {
            const i = {Xr: !0}, n = this.At();
            if (this.qt().kt().Fi() || n.Fi() || this.Lt.Fi()) return i;
            const s = this.qt().kt().Xs(), e = this.Pt();
            if (null === s || null === e) return i;
            let r, h;
            if (t) {
                const t = this.Lt.Jh();
                if (null === t) return i;
                r = t, h = t.se
            } else {
                const t = this.Lt.nl(s.di(), -1);
                if (null === t) return i;
                if (r = this.Lt.qh(t.se), null === r) return i;
                h = t.se
            }
            const l = r.Bt[3], a = this.$s().Hs(h, {Bt: r}), o = n.Ot(l, e.Bt);
            return {Xr: !1, ct: l, Jt: n.Wi(l, e.Bt), mh: n.Wl(l), bh: n.jl(l, e.Bt), O: a.ue, ki: o, se: h}
        }

        $s() {
            return null !== this.Bl || (this.Bl = new Ai(this)), this.Bl
        }

        W() {
            return this.cn
        }

        Nh(t) {
            const i = t.priceScaleId;
            void 0 !== i && i !== this.cn.priceScaleId && this.qt().Hl(this, i), C(this.cn, t), void 0 !== t.priceFormat && (this.Nl(), this.qt().$l()), this.qt().Ul(this), this.qt().ql(), this.wn.gt("options")
        }

        it(t, i) {
            this.Lt.it(t), this.Yl(), this.wn.gt("data"), this.dn.gt("data"), null !== this.Al && (i && i.Xl ? this.Al.Hr() : 0 === t.length && this.Al.jr());
            const n = this.qt().cr(this);
            this.qt().Kl(n), this.qt().Ul(this), this.qt().ql(), this.qt().Fh()
        }

        Zl(t) {
            this.Vl = t, this.Yl();
            const i = this.qt().cr(this);
            this.dn.gt("data"), this.qt().Kl(i), this.qt().Ul(this), this.qt().ql(), this.qt().Fh()
        }

        Gl() {
            return this.Vl
        }

        ah() {
            return this.zl
        }

        Jl(t) {
            const i = new Ri(this, t);
            return this.Dl.push(i), this.qt().Ul(this), i
        }

        Ql(t) {
            const i = this.Dl.indexOf(t);
            -1 !== i && this.Dl.splice(i, 1), this.qt().Ul(this)
        }

        Xh() {
            return this.Ll
        }

        Pt() {
            const t = this.ta();
            return null === t ? null : {Bt: t.Bt[3], ia: t.ut}
        }

        ta() {
            const t = this.qt().kt().Xs();
            if (null === t) return null;
            const i = t.Os();
            return this.Lt.nl(i, 1)
        }

        zn() {
            return this.Lt
        }

        oh(t) {
            const i = this.Lt.qh(t);
            return null === i ? null : "Bar" === this.Ll || "Candlestick" === this.Ll || "Custom" === this.Ll ? {
                we: i.Bt[0],
                ge: i.Bt[1],
                Me: i.Bt[2],
                xe: i.Bt[3]
            } : i.Bt[3]
        }

        na(t) {
            const i = [];
            Hi(this.Il, $i, "top", i);
            const n = this.Al;
            return null !== n && n.Tt() ? (null === this.El && n.Ur() && (this.El = setTimeout((() => {
                this.El = null, this.qt().sa()
            }), 0)), n.$r(), i.push(n), i) : i
        }

        Pn() {
            const t = [];
            this.ea() || t.push(this.Ol), t.push(this.wn, this.Ih, this.dn);
            const i = this.Dl.map((t => t.Wh()));
            return t.push(...i), Hi(this.Il, $i, "normal", t), t
        }

        ra() {
            return this.ha($i, "bottom")
        }

        la(t) {
            return this.ha(Ui, t)
        }

        aa(t) {
            return this.ha(qi, t)
        }

        oa(t, i) {
            return this.Il.map((n => n.br(t, i))).filter((t => null !== t))
        }

        Qi(t) {
            return [this.Lh, ...this.Dl.map((t => t.jh()))]
        }

        Rn(t, i) {
            if (i !== this.Xi && !this.ea()) return [];
            const n = [...this.hn];
            for (const t of this.Dl) n.push(t.Hh());
            return this.Il.forEach((t => {
                n.push(...t.Rn())
            })), n
        }

        tn() {
            const t = [];
            return this.Il.forEach((i => {
                t.push(...i.tn())
            })), t
        }

        Rl(t, i) {
            if (void 0 !== this.cn.autoscaleInfoProvider) {
                const n = this.cn.autoscaleInfoProvider((() => {
                    const n = this._a(t, i);
                    return null === n ? null : n.Ph()
                }));
                return Ci.Rh(n)
            }
            return this._a(t, i)
        }

        ua() {
            return this.cn.priceFormat.minMove
        }

        ca() {
            return this.da
        }

        On() {
            var t;
            this.wn.gt(), this.dn.gt();
            for (const t of this.hn) t.gt();
            for (const t of this.Dl) t.gt();
            this.Ih.gt(), this.Ol.gt(), null === (t = this.Al) || void 0 === t || t.gt(), this.Il.forEach((t => t.On()))
        }

        At() {
            return f(super.At())
        }

        Ct(t) {
            if (!(("Line" === this.Ll || "Area" === this.Ll || "Baseline" === this.Ll) && this.cn.crosshairMarkerVisible)) return null;
            const i = this.Lt.qh(t);
            if (null === i) return null;
            return {ct: i.Bt[3], ot: this.fa(), Vt: this.va(), Dt: this.pa(), Rt: this.ma(t)}
        }

        uh() {
            return this.cn.title
        }

        Tt() {
            return this.cn.visible
        }

        ba(t) {
            this.Il.push(new ji(t, this))
        }

        wa(t) {
            this.Il = this.Il.filter((i => i.Cl() !== t))
        }

        ga() {
            if (this.wn instanceof Yt != !1) return t => this.wn.Fe(t)
        }

        Ma() {
            if (this.wn instanceof Yt != !1) return t => this.wn.We(t)
        }

        ea() {
            return !lt(this.At().xa())
        }

        _a(t, i) {
            if (!P(t) || !P(i) || this.Lt.Fi()) return null;
            const n = "Line" === this.Ll || "Area" === this.Ll || "Baseline" === this.Ll || "Histogram" === this.Ll ? [3] : [2, 1],
                s = this.Lt.el(t, i, n);
            let e = null !== s ? new ki(s.cl, s.dl) : null;
            if ("Histogram" === this.Xh()) {
                const t = this.cn.base, i = new ki(t, t);
                e = null !== e ? e.ts(i) : i
            }
            let r = this.dn.lh();
            return this.Il.forEach((n => {
                const s = n.Rl(t, i);
                if (null == s ? void 0 : s.priceRange) {
                    const t = new ki(s.priceRange.minValue, s.priceRange.maxValue);
                    e = null !== e ? e.ts(t) : t
                }
                var h, l, a, o;
                (null == s ? void 0 : s.margins) && (h = r, l = s.margins, r = {
                    above: Math.max(null !== (a = null == h ? void 0 : h.above) && void 0 !== a ? a : 0, l.above),
                    below: Math.max(null !== (o = null == h ? void 0 : h.below) && void 0 !== o ? o : 0, l.below)
                })
            })), new Ci(e, r)
        }

        fa() {
            switch (this.Ll) {
                case"Line":
                case"Area":
                case"Baseline":
                    return this.cn.crosshairMarkerRadius
            }
            return 0
        }

        va() {
            switch (this.Ll) {
                case"Line":
                case"Area":
                case"Baseline": {
                    const t = this.cn.crosshairMarkerBorderColor;
                    if (0 !== t.length) return t
                }
            }
            return null
        }

        pa() {
            switch (this.Ll) {
                case"Line":
                case"Area":
                case"Baseline":
                    return this.cn.crosshairMarkerBorderWidth
            }
            return 0
        }

        ma(t) {
            switch (this.Ll) {
                case"Line":
                case"Area":
                case"Baseline": {
                    const t = this.cn.crosshairMarkerBackgroundColor;
                    if (0 !== t.length) return t
                }
            }
            return this.$s().Hs(t).ue
        }

        Nl() {
            switch (this.cn.priceFormat.type) {
                case"custom":
                    this.da = {format: this.cn.priceFormat.formatter};
                    break;
                case"volume":
                    this.da = new dt(this.cn.priceFormat.precision);
                    break;
                case"percent":
                    this.da = new ct(this.cn.priceFormat.precision);
                    break;
                default: {
                    const t = Math.pow(10, this.cn.priceFormat.precision);
                    this.da = new ut(t, this.cn.priceFormat.minMove * t)
                }
            }
            null !== this.Xi && this.Xi.Sa()
        }

        Yl() {
            const t = this.qt().kt();
            if (!t.ya() || this.Lt.Fi()) return void (this.zl = []);
            const i = f(this.Lt.Qh());
            this.zl = this.Vl.map(((n, s) => {
                const e = f(t.ka(n.time, !0)), r = e < i ? 1 : -1;
                return {
                    time: f(this.Lt.nl(e, r)).se,
                    position: n.position,
                    shape: n.shape,
                    color: n.color,
                    id: n.id,
                    Jr: s,
                    text: n.text,
                    size: n.size,
                    originalTime: n.originalTime
                }
            }))
        }

        Fl(t) {
            switch (this.dn = new Mi(this, this.qt()), this.Ll) {
                case"Bar":
                    this.wn = new Ft(this, this.qt());
                    break;
                case"Candlestick":
                    this.wn = new Ut(this, this.qt());
                    break;
                case"Line":
                    this.wn = new Gt(this, this.qt());
                    break;
                case"Custom":
                    this.wn = new Yt(this, this.qt(), d(t));
                    break;
                case"Area":
                    this.wn = new It(this, this.qt());
                    break;
                case"Baseline":
                    this.wn = new Ht(this, this.qt());
                    break;
                case"Histogram":
                    this.wn = new Zt(this, this.qt());
                    break;
                default:
                    throw Error("Unknown chart style assigned: " + this.Ll)
            }
        }

        ha(t, i) {
            const n = [];
            return Hi(this.Il, t, i, n), n
        }
    }

    class Xi {
        constructor(t) {
            this.cn = t
        }

        Ca(t, i, n) {
            let s = t;
            if (0 === this.cn.mode) return s;
            const e = n.vn(), r = e.Pt();
            if (null === r) return s;
            const h = e.Ot(t, r), l = n.Ta().filter((t => t instanceof Yi)).reduce(((t, s) => {
                if (n.dr(s) || !s.Tt()) return t;
                const e = s.At(), r = s.zn();
                if (e.Fi() || !r.Kr(i)) return t;
                const h = r.qh(i);
                if (null === h) return t;
                const l = v(s.Pt());
                return t.concat([e.Ot(h.Bt[3], l.Bt)])
            }), []);
            if (0 === l.length) return s;
            l.sort(((t, i) => Math.abs(t - h) - Math.abs(i - h)));
            const a = l[0];
            return s = e.pn(a, r), s
        }
    }

    class Ki extends H {
        constructor() {
            super(...arguments), this.Lt = null
        }

        it(t) {
            this.Lt = t
        }

        Z({context: t, bitmapSize: i, horizontalPixelRatio: n, verticalPixelRatio: s}) {
            if (null === this.Lt) return;
            const e = Math.max(1, Math.floor(n));
            t.lineWidth = e, function (t, i) {
                t.save(), t.lineWidth % 2 && t.translate(.5, .5), i(), t.restore()
            }(t, (() => {
                const r = f(this.Lt);
                if (r.Pa) {
                    t.strokeStyle = r.Ra, _(t, r.Da), t.beginPath();
                    for (const s of r.Oa) {
                        const r = Math.round(s.Aa * n);
                        t.moveTo(r, -e), t.lineTo(r, i.height + e)
                    }
                    t.stroke()
                }
                if (r.Ba) {
                    t.strokeStyle = r.Va, _(t, r.za), t.beginPath();
                    for (const n of r.Ea) {
                        const r = Math.round(n.Aa * s);
                        t.moveTo(-e, r), t.lineTo(i.width + e, r)
                    }
                    t.stroke()
                }
            }))
        }
    }

    class Zi {
        constructor(t) {
            this.Ht = new Ki, this.bt = !0, this.nn = t
        }

        gt() {
            this.bt = !0
        }

        xt() {
            if (this.bt) {
                const t = this.nn.qt().W().grid, i = {
                    Ba: t.horzLines.visible,
                    Pa: t.vertLines.visible,
                    Va: t.horzLines.color,
                    Ra: t.vertLines.color,
                    za: t.horzLines.style,
                    Da: t.vertLines.style,
                    Ea: this.nn.vn().Ia(),
                    Oa: (this.nn.qt().kt().Ia() || []).map((t => ({Aa: t.coord})))
                };
                this.Ht.it(i), this.bt = !1
            }
            return this.Ht
        }
    }

    class Gi {
        constructor(t) {
            this.wn = new Zi(t)
        }

        Wh() {
            return this.wn
        }
    }

    const Ji = {La: 4, Na: 1e-4};

    function Qi(t, i) {
        const n = 100 * (t - i) / i;
        return i < 0 ? -n : n
    }

    function tn(t, i) {
        const n = Qi(t.Sh(), i), s = Qi(t.yh(), i);
        return new ki(n, s)
    }

    function nn(t, i) {
        const n = 100 * (t - i) / i + 100;
        return i < 0 ? -n : n
    }

    function sn(t, i) {
        const n = nn(t.Sh(), i), s = nn(t.yh(), i);
        return new ki(n, s)
    }

    function en(t, i) {
        const n = Math.abs(t);
        if (n < 1e-15) return 0;
        const s = Math.log10(n + i.Na) + i.La;
        return t < 0 ? -s : s
    }

    function rn(t, i) {
        const n = Math.abs(t);
        if (n < 1e-15) return 0;
        const s = Math.pow(10, n - i.La) - i.Na;
        return t < 0 ? -s : s
    }

    function hn(t, i) {
        if (null === t) return null;
        const n = en(t.Sh(), i), s = en(t.yh(), i);
        return new ki(n, s)
    }

    function ln(t, i) {
        if (null === t) return null;
        const n = rn(t.Sh(), i), s = rn(t.yh(), i);
        return new ki(n, s)
    }

    function an(t) {
        if (null === t) return Ji;
        const i = Math.abs(t.yh() - t.Sh());
        if (i >= 1 || i < 1e-15) return Ji;
        const n = Math.ceil(Math.abs(Math.log10(i))), s = Ji.La + n;
        return {La: s, Na: 1 / Math.pow(10, s)}
    }

    class on {
        constructor(t, i) {
            if (this.Fa = t, this.Wa = i, function (t) {
                if (t < 0) return !1;
                for (let i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
                return !0
            }(this.Fa)) this.ja = [2, 2.5, 2]; else {
                this.ja = [];
                for (let t = this.Fa; 1 !== t;) {
                    if (t % 2 == 0) this.ja.push(2), t /= 2; else {
                        if (t % 5 != 0) throw new Error("unexpected base");
                        this.ja.push(2, 2.5), t /= 5
                    }
                    if (this.ja.length > 100) throw new Error("something wrong with base")
                }
            }
        }

        Ha(t, i, n) {
            const s = 0 === this.Fa ? 0 : 1 / this.Fa;
            let e = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - i)))), r = 0, h = this.Wa[0];
            for (; ;) {
                const t = xt(e, s, 1e-14) && e > s + 1e-14, i = xt(e, n * h, 1e-14), l = xt(e, 1, 1e-14);
                if (!(t && i && l)) break;
                e /= h, h = this.Wa[++r % this.Wa.length]
            }
            if (e <= s + 1e-14 && (e = s), e = Math.max(1, e), this.ja.length > 0 && (l = e, a = 1, o = 1e-14, Math.abs(l - a) < o)) for (r = 0, h = this.ja[0]; xt(e, n * h, 1e-14) && e > s + 1e-14;) e /= h, h = this.ja[++r % this.ja.length];
            var l, a, o;
            return e
        }
    }

    class _n {
        constructor(t, i, n, s) {
            this.$a = [], this.Li = t, this.Fa = i, this.Ua = n, this.qa = s
        }

        Ha(t, i) {
            if (t < i) throw new Error("high < low");
            const n = this.Li.Et(), s = (t - i) * this.Ya() / n, e = new on(this.Fa, [2, 2.5, 2]),
                r = new on(this.Fa, [2, 2, 2.5]), h = new on(this.Fa, [2.5, 2, 2]), l = [];
            return l.push(e.Ha(t, i, s), r.Ha(t, i, s), h.Ha(t, i, s)), function (t) {
                if (t.length < 1) throw Error("array is empty");
                let i = t[0];
                for (let n = 1; n < t.length; ++n) t[n] < i && (i = t[n]);
                return i
            }(l)
        }

        Xa() {
            const t = this.Li, i = t.Pt();
            if (null === i) return void (this.$a = []);
            const n = t.Et(), s = this.Ua(n - 1, i), e = this.Ua(0, i),
                r = this.Li.W().entireTextOnly ? this.Ka() / 2 : 0, h = r, l = n - 1 - r, a = Math.max(s, e),
                o = Math.min(s, e);
            if (a === o) return void (this.$a = []);
            let _ = this.Ha(a, o), u = a % _;
            u += u < 0 ? _ : 0;
            const c = a >= o ? 1 : -1;
            let d = null, f = 0;
            for (let n = a - u; n > o; n -= _) {
                const s = this.qa(n, i, !0);
                null !== d && Math.abs(s - d) < this.Ya() || (s < h || s > l || (f < this.$a.length ? (this.$a[f].Aa = s, this.$a[f].Za = t.Ga(n)) : this.$a.push({
                    Aa: s,
                    Za: t.Ga(n)
                }), f++, d = s, t.Ja() && (_ = this.Ha(n * c, o))))
            }
            this.$a.length = f
        }

        Ia() {
            return this.$a
        }

        Ka() {
            return this.Li.P()
        }

        Ya() {
            return Math.ceil(2.5 * this.Ka())
        }
    }

    function un(t) {
        return t.slice().sort(((t, i) => f(t.Zi()) - f(i.Zi())))
    }

    var cn;
    !function (t) {
        t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100"
    }(cn || (cn = {}));
    const dn = new ct, fn = new ut(100, 1);

    class vn {
        constructor(t, i, n, s) {
            this.Qa = 0, this.io = null, this.Dh = null, this.no = null, this.so = {
                eo: !1,
                ro: null
            }, this.ho = 0, this.lo = 0, this.ao = new k, this.oo = new k, this._o = [], this.uo = null, this.co = null, this.do = null, this.fo = null, this.da = fn, this.vo = an(null), this.po = t, this.cn = i, this.mo = n, this.bo = s, this.wo = new _n(this, 100, this.Mo.bind(this), this.xo.bind(this))
        }

        xa() {
            return this.po
        }

        W() {
            return this.cn
        }

        Nh(t) {
            if (C(this.cn, t), this.Sa(), void 0 !== t.mode && this.So({kr: t.mode}), void 0 !== t.scaleMargins) {
                const i = d(t.scaleMargins.top), n = d(t.scaleMargins.bottom);
                if (i < 0 || i > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);
                if (n < 0 || n > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);
                if (i + n > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i + n}`);
                this.yo(), this.co = null
            }
        }

        ko() {
            return this.cn.autoScale
        }

        Ja() {
            return 1 === this.cn.mode
        }

        ph() {
            return 2 === this.cn.mode
        }

        Co() {
            return 3 === this.cn.mode
        }

        kr() {
            return {Wn: this.cn.autoScale, To: this.cn.invertScale, kr: this.cn.mode}
        }

        So(t) {
            const i = this.kr();
            let n = null;
            void 0 !== t.Wn && (this.cn.autoScale = t.Wn), void 0 !== t.kr && (this.cn.mode = t.kr, 2 !== t.kr && 3 !== t.kr || (this.cn.autoScale = !0), this.so.eo = !1), 1 === i.kr && t.kr !== i.kr && (!function (t, i) {
                if (null === t) return !1;
                const n = rn(t.Sh(), i), s = rn(t.yh(), i);
                return isFinite(n) && isFinite(s)
            }(this.Dh, this.vo) ? this.cn.autoScale = !0 : (n = ln(this.Dh, this.vo), null !== n && this.Po(n))), 1 === t.kr && t.kr !== i.kr && (n = hn(this.Dh, this.vo), null !== n && this.Po(n));
            const s = i.kr !== this.cn.mode;
            s && (2 === i.kr || this.ph()) && this.Sa(), s && (3 === i.kr || this.Co()) && this.Sa(), void 0 !== t.To && i.To !== t.To && (this.cn.invertScale = t.To, this.Ro()), this.oo.m(i, this.kr())
        }

        Do() {
            return this.oo
        }

        P() {
            return this.mo.fontSize
        }

        Et() {
            return this.Qa
        }

        Oo(t) {
            this.Qa !== t && (this.Qa = t, this.yo(), this.co = null)
        }

        Ao() {
            if (this.io) return this.io;
            const t = this.Et() - this.Bo() - this.Vo();
            return this.io = t, t
        }

        Ah() {
            return this.zo(), this.Dh
        }

        Po(t, i) {
            const n = this.Dh;
            (i || null === n && null !== t || null !== n && !n.Mh(t)) && (this.co = null, this.Dh = t)
        }

        Fi() {
            return this.zo(), 0 === this.Qa || !this.Dh || this.Dh.Fi()
        }

        Eo(t) {
            return this.To() ? t : this.Et() - 1 - t
        }

        Ot(t, i) {
            return this.ph() ? t = Qi(t, i) : this.Co() && (t = nn(t, i)), this.xo(t, i)
        }

        Qs(t, i, n) {
            this.zo();
            const s = this.Vo(), e = f(this.Ah()), r = e.Sh(), h = e.yh(), l = this.Ao() - 1, a = this.To(),
                o = l / (h - r), _ = void 0 === n ? 0 : n.from, u = void 0 === n ? t.length : n.to, c = this.Io();
            for (let n = _; n < u; n++) {
                const e = t[n], h = e.ct;
                if (isNaN(h)) continue;
                let l = h;
                null !== c && (l = c(e.ct, i));
                const _ = s + o * (l - r), u = a ? _ : this.Qa - 1 - _;
                e.rt = u
            }
        }

        me(t, i, n) {
            this.zo();
            const s = this.Vo(), e = f(this.Ah()), r = e.Sh(), h = e.yh(), l = this.Ao() - 1, a = this.To(),
                o = l / (h - r), _ = void 0 === n ? 0 : n.from, u = void 0 === n ? t.length : n.to, c = this.Io();
            for (let n = _; n < u; n++) {
                const e = t[n];
                let h = e.we, l = e.ge, _ = e.Me, u = e.xe;
                null !== c && (h = c(e.we, i), l = c(e.ge, i), _ = c(e.Me, i), u = c(e.xe, i));
                let d = s + o * (h - r), f = a ? d : this.Qa - 1 - d;
                e.ve = f, d = s + o * (l - r), f = a ? d : this.Qa - 1 - d, e.ce = f, d = s + o * (_ - r), f = a ? d : this.Qa - 1 - d, e.de = f, d = s + o * (u - r), f = a ? d : this.Qa - 1 - d, e.pe = f
            }
        }

        pn(t, i) {
            const n = this.Mo(t, i);
            return this.Lo(n, i)
        }

        Lo(t, i) {
            let n = t;
            return this.ph() ? n = function (t, i) {
                return i < 0 && (t = -t), t / 100 * i + i
            }(n, i) : this.Co() && (n = function (t, i) {
                return t -= 100, i < 0 && (t = -t), t / 100 * i + i
            }(n, i)), n
        }

        Ta() {
            return this._o
        }

        No() {
            if (this.uo) return this.uo;
            let t = [];
            for (let i = 0; i < this._o.length; i++) {
                const n = this._o[i];
                null === n.Zi() && n.Gi(i + 1), t.push(n)
            }
            return t = un(t), this.uo = t, this.uo
        }

        Fo(t) {
            -1 === this._o.indexOf(t) && (this._o.push(t), this.Sa(), this.Wo())
        }

        jo(t) {
            const i = this._o.indexOf(t);
            if (-1 === i) throw new Error("source is not attached to scale");
            this._o.splice(i, 1), 0 === this._o.length && (this.So({Wn: !0}), this.Po(null)), this.Sa(), this.Wo()
        }

        Pt() {
            let t = null;
            for (const i of this._o) {
                const n = i.Pt();
                null !== n && ((null === t || n.ia < t.ia) && (t = n))
            }
            return null === t ? null : t.Bt
        }

        To() {
            return this.cn.invertScale
        }

        Ia() {
            const t = null === this.Pt();
            if (null !== this.co && (t || this.co.Ho === t)) return this.co.Ia;
            this.wo.Xa();
            const i = this.wo.Ia();
            return this.co = {Ia: i, Ho: t}, this.ao.m(), i
        }

        $o() {
            return this.ao
        }

        Uo(t) {
            this.ph() || this.Co() || null === this.do && null === this.no && (this.Fi() || (this.do = this.Qa - t, this.no = f(this.Ah()).xh()))
        }

        qo(t) {
            if (this.ph() || this.Co()) return;
            if (null === this.do) return;
            this.So({Wn: !1}), (t = this.Qa - t) < 0 && (t = 0);
            let i = (this.do + .2 * (this.Qa - 1)) / (t + .2 * (this.Qa - 1));
            const n = f(this.no).xh();
            i = Math.max(i, .1), n.Ch(i), this.Po(n)
        }

        Yo() {
            this.ph() || this.Co() || (this.do = null, this.no = null)
        }

        Xo(t) {
            this.ko() || null === this.fo && null === this.no && (this.Fi() || (this.fo = t, this.no = f(this.Ah()).xh()))
        }

        Ko(t) {
            if (this.ko()) return;
            if (null === this.fo) return;
            const i = f(this.Ah()).kh() / (this.Ao() - 1);
            let n = t - this.fo;
            this.To() && (n *= -1);
            const s = n * i, e = f(this.no).xh();
            e.Th(s), this.Po(e, !0), this.co = null
        }

        Zo() {
            this.ko() || null !== this.fo && (this.fo = null, this.no = null)
        }

        ca() {
            return this.da || this.Sa(), this.da
        }

        Wi(t, i) {
            switch (this.cn.mode) {
                case 2:
                    return this.Go(Qi(t, i));
                case 3:
                    return this.ca().format(nn(t, i));
                default:
                    return this.Eh(t)
            }
        }

        Ga(t) {
            switch (this.cn.mode) {
                case 2:
                    return this.Go(t);
                case 3:
                    return this.ca().format(t);
                default:
                    return this.Eh(t)
            }
        }

        Wl(t) {
            return this.Eh(t, f(this.Jo()).ca())
        }

        jl(t, i) {
            return t = Qi(t, i), this.Go(t, dn)
        }

        Qo() {
            return this._o
        }

        t_(t) {
            this.so = {ro: t, eo: !1}
        }

        On() {
            this._o.forEach((t => t.On()))
        }

        Sa() {
            this.co = null;
            const t = this.Jo();
            let i = 100;
            null !== t && (i = Math.round(1 / t.ua())), this.da = fn, this.ph() ? (this.da = dn, i = 100) : this.Co() ? (this.da = new ut(100, 1), i = 100) : null !== t && (this.da = t.ca()), this.wo = new _n(this, i, this.Mo.bind(this), this.xo.bind(this)), this.wo.Xa()
        }

        Wo() {
            this.uo = null
        }

        Jo() {
            return this._o[0] || null
        }

        Bo() {
            return this.To() ? this.cn.scaleMargins.bottom * this.Et() + this.lo : this.cn.scaleMargins.top * this.Et() + this.ho
        }

        Vo() {
            return this.To() ? this.cn.scaleMargins.top * this.Et() + this.ho : this.cn.scaleMargins.bottom * this.Et() + this.lo
        }

        zo() {
            this.so.eo || (this.so.eo = !0, this.i_())
        }

        yo() {
            this.io = null
        }

        xo(t, i) {
            if (this.zo(), this.Fi()) return 0;
            t = this.Ja() && t ? en(t, this.vo) : t;
            const n = f(this.Ah()), s = this.Vo() + (this.Ao() - 1) * (t - n.Sh()) / n.kh();
            return this.Eo(s)
        }

        Mo(t, i) {
            if (this.zo(), this.Fi()) return 0;
            const n = this.Eo(t), s = f(this.Ah()), e = s.Sh() + s.kh() * ((n - this.Vo()) / (this.Ao() - 1));
            return this.Ja() ? rn(e, this.vo) : e
        }

        Ro() {
            this.co = null, this.wo.Xa()
        }

        i_() {
            const t = this.so.ro;
            if (null === t) return;
            let i = null;
            const n = this.Qo();
            let s = 0, e = 0;
            for (const r of n) {
                if (!r.Tt()) continue;
                const n = r.Pt();
                if (null === n) continue;
                const h = r.Rl(t.Os(), t.di());
                let l = h && h.Ah();
                if (null !== l) {
                    switch (this.cn.mode) {
                        case 1:
                            l = hn(l, this.vo);
                            break;
                        case 2:
                            l = tn(l, n.Bt);
                            break;
                        case 3:
                            l = sn(l, n.Bt)
                    }
                    if (i = null === i ? l : i.ts(f(l)), null !== h) {
                        const t = h.Bh();
                        null !== t && (s = Math.max(s, t.above), e = Math.max(s, t.below))
                    }
                }
            }
            if (s === this.ho && e === this.lo || (this.ho = s, this.lo = e, this.co = null, this.yo()), null !== i) {
                if (i.Sh() === i.yh()) {
                    const t = this.Jo(), n = 5 * (null === t || this.ph() || this.Co() ? 1 : t.ua());
                    this.Ja() && (i = ln(i, this.vo)), i = new ki(i.Sh() - n, i.yh() + n), this.Ja() && (i = hn(i, this.vo))
                }
                if (this.Ja()) {
                    const t = ln(i, this.vo), n = an(t);
                    if (r = n, h = this.vo, r.La !== h.La || r.Na !== h.Na) {
                        const s = null !== this.no ? ln(this.no, this.vo) : null;
                        this.vo = n, i = hn(t, n), null !== s && (this.no = hn(s, n))
                    }
                }
                this.Po(i)
            } else null === this.Dh && (this.Po(new ki(-.5, .5)), this.vo = an(null));
            var r, h;
            this.so.eo = !0
        }

        Io() {
            return this.ph() ? Qi : this.Co() ? nn : this.Ja() ? t => en(t, this.vo) : null
        }

        n_(t, i, n) {
            return void 0 === i ? (void 0 === n && (n = this.ca()), n.format(t)) : i(t)
        }

        Eh(t, i) {
            return this.n_(t, this.bo.priceFormatter, i)
        }

        Go(t, i) {
            return this.n_(t, this.bo.percentageFormatter, i)
        }
    }

    class pn {
        constructor(t, i) {
            this._o = [], this.s_ = new Map, this.Qa = 0, this.e_ = 0, this.r_ = 1e3, this.uo = null, this.h_ = new k, this.wl = t, this.Ui = i, this.l_ = new Gi(this);
            const n = i.W();
            this.a_ = this.o_("left", n.leftPriceScale), this.__ = this.o_("right", n.rightPriceScale), this.a_.Do().l(this.u_.bind(this, this.a_), this), this.__.Do().l(this.u_.bind(this, this.__), this), this.c_(n)
        }

        c_(t) {
            if (t.leftPriceScale && this.a_.Nh(t.leftPriceScale), t.rightPriceScale && this.__.Nh(t.rightPriceScale), t.localization && (this.a_.Sa(), this.__.Sa()), t.overlayPriceScales) {
                const i = Array.from(this.s_.values());
                for (const n of i) {
                    const i = f(n[0].At());
                    i.Nh(t.overlayPriceScales), t.localization && i.Sa()
                }
            }
        }

        d_(t) {
            switch (t) {
                case"left":
                    return this.a_;
                case"right":
                    return this.__
            }
            return this.s_.has(t) ? d(this.s_.get(t))[0].At() : null
        }

        S() {
            this.qt().f_().p(this), this.a_.Do().p(this), this.__.Do().p(this), this._o.forEach((t => {
                t.S && t.S()
            })), this.h_.m()
        }

        v_() {
            return this.r_
        }

        p_(t) {
            this.r_ = t
        }

        qt() {
            return this.Ui
        }

        $i() {
            return this.e_
        }

        Et() {
            return this.Qa
        }

        m_(t) {
            this.e_ = t, this.b_()
        }

        Oo(t) {
            this.Qa = t, this.a_.Oo(t), this.__.Oo(t), this._o.forEach((i => {
                if (this.dr(i)) {
                    const n = i.At();
                    null !== n && n.Oo(t)
                }
            })), this.b_()
        }

        Ta() {
            return this._o
        }

        dr(t) {
            const i = t.At();
            return null === i || this.a_ !== i && this.__ !== i
        }

        Fo(t, i, n) {
            const s = void 0 !== n ? n : this.g_().w_ + 1;
            this.M_(t, i, s)
        }

        jo(t) {
            const i = this._o.indexOf(t);
            c(-1 !== i, "removeDataSource: invalid data source"), this._o.splice(i, 1);
            const n = f(t.At()).xa();
            if (this.s_.has(n)) {
                const i = d(this.s_.get(n)), s = i.indexOf(t);
                -1 !== s && (i.splice(s, 1), 0 === i.length && this.s_.delete(n))
            }
            const s = t.At();
            s && s.Ta().indexOf(t) >= 0 && s.jo(t), null !== s && (s.Wo(), this.x_(s)), this.uo = null
        }

        pr(t) {
            return t === this.a_ ? "left" : t === this.__ ? "right" : "overlay"
        }

        S_() {
            return this.a_
        }

        y_() {
            return this.__
        }

        k_(t, i) {
            t.Uo(i)
        }

        C_(t, i) {
            t.qo(i), this.b_()
        }

        T_(t) {
            t.Yo()
        }

        P_(t, i) {
            t.Xo(i)
        }

        R_(t, i) {
            t.Ko(i), this.b_()
        }

        D_(t) {
            t.Zo()
        }

        b_() {
            this._o.forEach((t => {
                t.On()
            }))
        }

        vn() {
            let t = null;
            return this.Ui.W().rightPriceScale.visible && 0 !== this.__.Ta().length ? t = this.__ : this.Ui.W().leftPriceScale.visible && 0 !== this.a_.Ta().length ? t = this.a_ : 0 !== this._o.length && (t = this._o[0].At()), null === t && (t = this.__), t
        }

        vr() {
            let t = null;
            return this.Ui.W().rightPriceScale.visible ? t = this.__ : this.Ui.W().leftPriceScale.visible && (t = this.a_), t
        }

        x_(t) {
            null !== t && t.ko() && this.O_(t)
        }

        A_(t) {
            const i = this.wl.Xs();
            t.So({Wn: !0}), null !== i && t.t_(i), this.b_()
        }

        B_() {
            this.O_(this.a_), this.O_(this.__)
        }

        V_() {
            this.x_(this.a_), this.x_(this.__), this._o.forEach((t => {
                this.dr(t) && this.x_(t.At())
            })), this.b_(), this.Ui.Fh()
        }

        No() {
            return null === this.uo && (this.uo = un(this._o)), this.uo
        }

        z_() {
            return this.h_
        }

        E_() {
            return this.l_
        }

        O_(t) {
            const i = t.Qo();
            if (i && i.length > 0 && !this.wl.Fi()) {
                const i = this.wl.Xs();
                null !== i && t.t_(i)
            }
            t.On()
        }

        g_() {
            const t = this.No();
            if (0 === t.length) return {I_: 0, w_: 0};
            let i = 0, n = 0;
            for (let s = 0; s < t.length; s++) {
                const e = t[s].Zi();
                null !== e && (e < i && (i = e), e > n && (n = e))
            }
            return {I_: i, w_: n}
        }

        M_(t, i, n) {
            let s = this.d_(i);
            if (null === s && (s = this.o_(i, this.Ui.W().overlayPriceScales)), this._o.push(t), !lt(i)) {
                const n = this.s_.get(i) || [];
                n.push(t), this.s_.set(i, n)
            }
            s.Fo(t), t.Ji(s), t.Gi(n), this.x_(s), this.uo = null
        }

        u_(t, i, n) {
            i.kr !== n.kr && this.O_(t)
        }

        o_(t, i) {
            const n = Object.assign({visible: !0, autoScale: !0}, O(i)),
                s = new vn(t, n, this.Ui.W().layout, this.Ui.W().localization);
            return s.Oo(this.Et()), s
        }
    }

    class mn {
        constructor(t, i, n = 50) {
            this.Ke = 0, this.Ze = 1, this.Ge = 1, this.Qe = new Map, this.Je = new Map, this.L_ = t, this.N_ = i, this.tr = n
        }

        F_(t) {
            const i = t.time, n = this.N_.cacheKey(i), s = this.Qe.get(n);
            if (void 0 !== s) return s.W_;
            if (this.Ke === this.tr) {
                const t = this.Je.get(this.Ge);
                this.Je.delete(this.Ge), this.Qe.delete(d(t)), this.Ge++, this.Ke--
            }
            const e = this.L_(t);
            return this.Qe.set(n, {W_: e, er: this.Ze}), this.Je.set(this.Ze, n), this.Ke++, this.Ze++, e
        }
    }

    class bn {
        constructor(t, i) {
            c(t <= i, "right should be >= left"), this.j_ = t, this.H_ = i
        }

        Os() {
            return this.j_
        }

        di() {
            return this.H_
        }

        U_() {
            return this.H_ - this.j_ + 1
        }

        Kr(t) {
            return this.j_ <= t && t <= this.H_
        }

        Mh(t) {
            return this.j_ === t.Os() && this.H_ === t.di()
        }
    }

    function wn(t, i) {
        return null === t || null === i ? t === i : t.Mh(i)
    }

    class gn {
        constructor() {
            this.q_ = new Map, this.Qe = null, this.Y_ = !1
        }

        X_(t) {
            this.Y_ = t, this.Qe = null
        }

        K_(t, i) {
            this.Z_(i), this.Qe = null;
            for (let n = i; n < t.length; ++n) {
                const i = t[n];
                let s = this.q_.get(i.timeWeight);
                void 0 === s && (s = [], this.q_.set(i.timeWeight, s)), s.push({
                    index: n,
                    time: i.time,
                    weight: i.timeWeight,
                    originalTime: i.originalTime
                })
            }
        }

        G_(t, i) {
            const n = Math.ceil(i / t);
            return null !== this.Qe && this.Qe.J_ === n || (this.Qe = {Ia: this.Q_(n), J_: n}), this.Qe.Ia
        }

        Z_(t) {
            if (0 === t) return void this.q_.clear();
            const i = [];
            this.q_.forEach(((n, s) => {
                t <= n[0].index ? i.push(s) : n.splice(Dt(n, t, (i => i.index < t)), 1 / 0)
            }));
            for (const t of i) this.q_.delete(t)
        }

        Q_(t) {
            let i = [];
            for (const n of Array.from(this.q_.keys()).sort(((t, i) => i - t))) {
                if (!this.q_.get(n)) continue;
                const s = i;
                i = [];
                const e = s.length;
                let r = 0;
                const h = d(this.q_.get(n)), l = h.length;
                let a = 1 / 0, o = -1 / 0;
                for (let n = 0; n < l; n++) {
                    const l = h[n], _ = l.index;
                    for (; r < e;) {
                        const t = s[r], n = t.index;
                        if (!(n < _)) {
                            a = n;
                            break
                        }
                        r++, i.push(t), o = n, a = 1 / 0
                    }
                    if (a - _ >= t && _ - o >= t) i.push(l), o = _; else if (this.Y_) return s
                }
                for (; r < e; r++) i.push(s[r])
            }
            return i
        }
    }

    class Mn {
        constructor(t) {
            this.tu = t
        }

        iu() {
            return null === this.tu ? null : new bn(Math.floor(this.tu.Os()), Math.ceil(this.tu.di()))
        }

        nu() {
            return this.tu
        }

        static su() {
            return new Mn(null)
        }
    }

    function xn(t, i) {
        return t.weight > i.weight ? t : i
    }

    class Sn {
        constructor(t, i, n, s) {
            this.e_ = 0, this.eu = null, this.ru = [], this.fo = null, this.do = null, this.hu = new gn, this.lu = new Map, this.au = Mn.su(), this.ou = !0, this._u = new k, this.uu = new k, this.cu = new k, this.du = null, this.fu = null, this.vu = [], this.cn = i, this.bo = n, this.pu = i.rightOffset, this.mu = i.barSpacing, this.Ui = t, this.N_ = s, this.bu(), this.hu.X_(i.uniformDistribution)
        }

        W() {
            return this.cn
        }

        wu(t) {
            C(this.bo, t), this.gu(), this.bu()
        }

        Nh(t, i) {
            var n;
            C(this.cn, t), this.cn.fixLeftEdge && this.Mu(), this.cn.fixRightEdge && this.xu(), void 0 !== t.barSpacing && this.Ui.Gn(t.barSpacing), void 0 !== t.rightOffset && this.Ui.Jn(t.rightOffset), void 0 !== t.minBarSpacing && this.Ui.Gn(null !== (n = t.barSpacing) && void 0 !== n ? n : this.mu), this.gu(), this.bu(), this.cu.m()
        }

        mn(t) {
            var i, n;
            return null !== (n = null === (i = this.ru[t]) || void 0 === i ? void 0 : i.time) && void 0 !== n ? n : null
        }

        qi(t) {
            var i;
            return null !== (i = this.ru[t]) && void 0 !== i ? i : null
        }

        ka(t, i) {
            if (this.ru.length < 1) return null;
            if (this.N_.key(t) > this.N_.key(this.ru[this.ru.length - 1].time)) return i ? this.ru.length - 1 : null;
            const n = Dt(this.ru, this.N_.key(t), ((t, i) => this.N_.key(t.time) < i));
            return this.N_.key(t) < this.N_.key(this.ru[n].time) ? i ? n : null : n
        }

        Fi() {
            return 0 === this.e_ || 0 === this.ru.length || null === this.eu
        }

        ya() {
            return this.ru.length > 0
        }

        Xs() {
            return this.Su(), this.au.iu()
        }

        yu() {
            return this.Su(), this.au.nu()
        }

        ku() {
            const t = this.Xs();
            if (null === t) return null;
            const i = {from: t.Os(), to: t.di()};
            return this.Cu(i)
        }

        Cu(t) {
            const i = Math.round(t.from), n = Math.round(t.to), s = f(this.Tu()), e = f(this.Pu());
            return {from: f(this.qi(Math.max(s, i))), to: f(this.qi(Math.min(e, n)))}
        }

        Ru(t) {
            return {from: f(this.ka(t.from, !0)), to: f(this.ka(t.to, !0))}
        }

        $i() {
            return this.e_
        }

        m_(t) {
            if (!isFinite(t) || t <= 0) return;
            if (this.e_ === t) return;
            const i = this.yu(), n = this.e_;
            if (this.e_ = t, this.ou = !0, this.cn.lockVisibleTimeRangeOnResize && 0 !== n) {
                const i = this.mu * t / n;
                this.mu = i
            }
            if (this.cn.fixLeftEdge && null !== i && i.Os() <= 0) {
                const i = n - t;
                this.pu -= Math.round(i / this.mu) + 1, this.ou = !0
            }
            this.Du(), this.Ou()
        }

        It(t) {
            if (this.Fi() || !P(t)) return 0;
            const i = this.Au() + this.pu - t;
            return this.e_ - (i + .5) * this.mu - 1
        }

        Js(t, i) {
            const n = this.Au(), s = void 0 === i ? 0 : i.from, e = void 0 === i ? t.length : i.to;
            for (let i = s; i < e; i++) {
                const s = t[i].ut, e = n + this.pu - s, r = this.e_ - (e + .5) * this.mu - 1;
                t[i].et = r
            }
        }

        Bu(t) {
            return Math.ceil(this.Vu(t))
        }

        Jn(t) {
            this.ou = !0, this.pu = t, this.Ou(), this.Ui.zu(), this.Ui.Fh()
        }

        he() {
            return this.mu
        }

        Gn(t) {
            this.Eu(t), this.Ou(), this.Ui.zu(), this.Ui.Fh()
        }

        Iu() {
            return this.pu
        }

        Ia() {
            if (this.Fi()) return null;
            if (null !== this.fu) return this.fu;
            const t = this.mu,
                i = 5 * (this.Ui.W().layout.fontSize + 4) / 8 * (this.cn.tickMarkMaxCharacterLength || 8),
                n = Math.round(i / t), s = f(this.Xs()), e = Math.max(s.Os(), s.Os() - n),
                r = Math.max(s.di(), s.di() - n), h = this.hu.G_(t, i), l = this.Tu() + n, a = this.Pu() - n,
                o = this.Lu(), _ = this.cn.fixLeftEdge || o, u = this.cn.fixRightEdge || o;
            let c = 0;
            for (const t of h) {
                if (!(e <= t.index && t.index <= r)) continue;
                let n;
                c < this.vu.length ? (n = this.vu[c], n.coord = this.It(t.index), n.label = this.Nu(t), n.weight = t.weight) : (n = {
                    needAlignCoordinate: !1,
                    coord: this.It(t.index),
                    label: this.Nu(t),
                    weight: t.weight
                }, this.vu.push(n)), this.mu > i / 2 && !o ? n.needAlignCoordinate = !1 : n.needAlignCoordinate = _ && t.index <= l || u && t.index >= a, c++
            }
            return this.vu.length = c, this.fu = this.vu, this.vu
        }

        Fu() {
            this.ou = !0, this.Gn(this.cn.barSpacing), this.Jn(this.cn.rightOffset)
        }

        Wu(t) {
            this.ou = !0, this.eu = t, this.Ou(), this.Mu()
        }

        ju(t, i) {
            const n = this.Vu(t), s = this.he(), e = s + i * (s / 10);
            this.Gn(e), this.cn.rightBarStaysOnScroll || this.Jn(this.Iu() + (n - this.Vu(t)))
        }

        Uo(t) {
            this.fo && this.Zo(), null === this.do && null === this.du && (this.Fi() || (this.do = t, this.Hu()))
        }

        qo(t) {
            if (null === this.du) return;
            const i = Mt(this.e_ - t, 0, this.e_), n = Mt(this.e_ - f(this.do), 0, this.e_);
            0 !== i && 0 !== n && this.Gn(this.du.he * i / n)
        }

        Yo() {
            null !== this.do && (this.do = null, this.$u())
        }

        Xo(t) {
            null === this.fo && null === this.du && (this.Fi() || (this.fo = t, this.Hu()))
        }

        Ko(t) {
            if (null === this.fo) return;
            const i = (this.fo - t) / this.he();
            this.pu = f(this.du).Iu + i, this.ou = !0, this.Ou()
        }

        Zo() {
            null !== this.fo && (this.fo = null, this.$u())
        }

        Uu() {
            this.qu(this.cn.rightOffset)
        }

        qu(t, i = 400) {
            if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
            if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
            const n = this.pu, s = performance.now();
            this.Ui.Xn({
                Yu: t => (t - s) / i >= 1, Xu: e => {
                    const r = (e - s) / i;
                    return r >= 1 ? t : n + (t - n) * r
                }
            })
        }

        gt(t, i) {
            this.ou = !0, this.ru = t, this.hu.K_(t, i), this.Ou()
        }

        Ku() {
            return this._u
        }

        Zu() {
            return this.uu
        }

        Gu() {
            return this.cu
        }

        Au() {
            return this.eu || 0
        }

        Ju(t) {
            const i = t.U_();
            this.Eu(this.e_ / i), this.pu = t.di() - this.Au(), this.Ou(), this.ou = !0, this.Ui.zu(), this.Ui.Fh()
        }

        Qu() {
            const t = this.Tu(), i = this.Pu();
            null !== t && null !== i && this.Ju(new bn(t, i + this.cn.rightOffset))
        }

        tc(t) {
            const i = new bn(t.from, t.to);
            this.Ju(i)
        }

        Yi(t) {
            return void 0 !== this.bo.timeFormatter ? this.bo.timeFormatter(t.originalTime) : this.N_.formatHorzItem(t.time)
        }

        Lu() {
            const {handleScroll: t, handleScale: i} = this.Ui.W();
            return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || i.axisDoubleClickReset.time || i.axisPressedMouseMove.time || i.mouseWheel || i.pinch)
        }

        Tu() {
            return 0 === this.ru.length ? null : 0
        }

        Pu() {
            return 0 === this.ru.length ? null : this.ru.length - 1
        }

        ic(t) {
            return (this.e_ - 1 - t) / this.mu
        }

        Vu(t) {
            const i = this.ic(t), n = this.Au() + this.pu - i;
            return Math.round(1e6 * n) / 1e6
        }

        Eu(t) {
            const i = this.mu;
            this.mu = t, this.Du(), i !== this.mu && (this.ou = !0, this.nc())
        }

        Su() {
            if (!this.ou) return;
            if (this.ou = !1, this.Fi()) return void this.sc(Mn.su());
            const t = this.Au(), i = this.e_ / this.mu, n = this.pu + t, s = new bn(n - i + 1, n);
            this.sc(new Mn(s))
        }

        Du() {
            const t = this.ec();
            if (this.mu < t && (this.mu = t, this.ou = !0), 0 !== this.e_) {
                const t = .5 * this.e_;
                this.mu > t && (this.mu = t, this.ou = !0)
            }
        }

        ec() {
            return this.cn.fixLeftEdge && this.cn.fixRightEdge && 0 !== this.ru.length ? this.e_ / this.ru.length : this.cn.minBarSpacing
        }

        Ou() {
            const t = this.rc();
            this.pu > t && (this.pu = t, this.ou = !0);
            const i = this.hc();
            null !== i && this.pu < i && (this.pu = i, this.ou = !0)
        }

        hc() {
            const t = this.Tu(), i = this.eu;
            if (null === t || null === i) return null;
            return t - i - 1 + (this.cn.fixLeftEdge ? this.e_ / this.mu : Math.min(2, this.ru.length))
        }

        rc() {
            return this.cn.fixRightEdge ? 0 : this.e_ / this.mu - Math.min(2, this.ru.length)
        }

        Hu() {
            this.du = {he: this.he(), Iu: this.Iu()}
        }

        $u() {
            this.du = null
        }

        Nu(t) {
            let i = this.lu.get(t.weight);
            return void 0 === i && (i = new mn((t => this.lc(t)), this.N_), this.lu.set(t.weight, i)), i.F_(t)
        }

        lc(t) {
            return this.N_.formatTickmark(t, this.bo)
        }

        sc(t) {
            const i = this.au;
            this.au = t, wn(i.iu(), this.au.iu()) || this._u.m(), wn(i.nu(), this.au.nu()) || this.uu.m(), this.nc()
        }

        nc() {
            this.fu = null
        }

        gu() {
            this.nc(), this.lu.clear()
        }

        bu() {
            this.N_.updateFormatter(this.bo)
        }

        Mu() {
            if (!this.cn.fixLeftEdge) return;
            const t = this.Tu();
            if (null === t) return;
            const i = this.Xs();
            if (null === i) return;
            const n = i.Os() - t;
            if (n < 0) {
                const t = this.pu - n - 1;
                this.Jn(t)
            }
            this.Du()
        }

        xu() {
            this.Ou(), this.Du()
        }
    }

    class yn extends L {
        constructor(t) {
            super(), this.ac = new Map, this.Lt = t
        }

        Z(t) {
        }

        J(t) {
            if (!this.Lt.Tt) return;
            const {context: i, mediaSize: n} = t;
            let s = 0;
            for (const t of this.Lt.oc) {
                if (0 === t.Jt.length) continue;
                i.font = t.R;
                const e = this._c(i, t.Jt);
                e > n.width ? t.ju = n.width / e : t.ju = 1, s += t.uc * t.ju
            }
            let e = 0;
            switch (this.Lt.cc) {
                case"top":
                    e = 0;
                    break;
                case"center":
                    e = Math.max((n.height - s) / 2, 0);
                    break;
                case"bottom":
                    e = Math.max(n.height - s, 0)
            }
            i.fillStyle = this.Lt.O;
            for (const t of this.Lt.oc) {
                i.save();
                let s = 0;
                switch (this.Lt.dc) {
                    case"left":
                        i.textAlign = "left", s = t.uc / 2;
                        break;
                    case"center":
                        i.textAlign = "center", s = n.width / 2;
                        break;
                    case"right":
                        i.textAlign = "right", s = n.width - 1 - t.uc / 2
                }
                i.translate(s, e), i.textBaseline = "top", i.font = t.R, i.scale(t.ju, t.ju), i.fillText(t.Jt, 0, t.fc), i.restore(), e += t.uc * t.ju
            }
        }

        _c(t, i) {
            const n = this.vc(t.font);
            let s = n.get(i);
            return void 0 === s && (s = t.measureText(i).width, n.set(i, s)), s
        }

        vc(t) {
            let i = this.ac.get(t);
            return void 0 === i && (i = new Map, this.ac.set(t, i)), i
        }
    }

    class kn {
        constructor(t) {
            this.bt = !0, this.jt = {
                Tt: !1,
                O: "",
                oc: [],
                cc: "center",
                dc: "center"
            }, this.Ht = new yn(this.jt), this.$t = t
        }

        gt() {
            this.bt = !0
        }

        xt() {
            return this.bt && (this.St(), this.bt = !1), this.Ht
        }

        St() {
            const t = this.$t.W(), i = this.jt;
            i.Tt = t.visible, i.Tt && (i.O = t.color, i.dc = t.horzAlign, i.cc = t.vertAlign, i.oc = [{
                Jt: t.text,
                R: z(t.fontSize, t.fontFamily, t.fontStyle),
                uc: 1.2 * t.fontSize,
                fc: 0,
                ju: 0
            }])
        }
    }

    class Cn extends et {
        constructor(t, i) {
            super(), this.cn = i, this.wn = new kn(this)
        }

        Rn() {
            return []
        }

        Pn() {
            return [this.wn]
        }

        W() {
            return this.cn
        }

        On() {
            this.wn.gt()
        }
    }

    var Tn, Pn, Rn, Dn, On;
    !function (t) {
        t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap"
    }(Tn || (Tn = {}));

    class An {
        constructor(t, i, n) {
            this.mc = [], this.bc = [], this.e_ = 0, this.wc = null, this.gc = new k, this.Mc = new k, this.xc = null, this.Sc = t, this.cn = i, this.N_ = n, this.yc = new E(this), this.wl = new Sn(this, i.timeScale, this.cn.localization, n), this.wt = new ht(this, i.crosshair), this.kc = new Xi(i.crosshair), this.Cc = new Cn(this, i.watermark), this.Tc(), this.mc[0].p_(2e3), this.Pc = this.Rc(0), this.Dc = this.Rc(1)
        }

        $l() {
            this.Oc(at.es())
        }

        Fh() {
            this.Oc(at.ss())
        }

        sa() {
            this.Oc(new at(1))
        }

        Ul(t) {
            const i = this.Ac(t);
            this.Oc(i)
        }

        Bc() {
            return this.wc
        }

        Vc(t) {
            const i = this.wc;
            this.wc = t, null !== i && this.Ul(i.zc), null !== t && this.Ul(t.zc)
        }

        W() {
            return this.cn
        }

        Nh(t) {
            C(this.cn, t), this.mc.forEach((i => i.c_(t))), void 0 !== t.timeScale && this.wl.Nh(t.timeScale), void 0 !== t.localization && this.wl.wu(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.gc.m(), this.Pc = this.Rc(0), this.Dc = this.Rc(1), this.$l()
        }

        Ec(t, i) {
            if ("left" === t) return void this.Nh({leftPriceScale: i});
            if ("right" === t) return void this.Nh({rightPriceScale: i});
            const n = this.Ic(t);
            null !== n && (n.At.Nh(i), this.gc.m())
        }

        Ic(t) {
            for (const i of this.mc) {
                const n = i.d_(t);
                if (null !== n) return {Ut: i, At: n}
            }
            return null
        }

        kt() {
            return this.wl
        }

        Lc() {
            return this.mc
        }

        Nc() {
            return this.Cc
        }

        Fc() {
            return this.wt
        }

        Wc() {
            return this.Mc
        }

        jc(t, i) {
            t.Oo(i), this.zu()
        }

        m_(t) {
            this.e_ = t, this.wl.m_(this.e_), this.mc.forEach((i => i.m_(t))), this.zu()
        }

        Tc(t) {
            const i = new pn(this.wl, this);
            void 0 !== t ? this.mc.splice(t, 0, i) : this.mc.push(i);
            const n = void 0 === t ? this.mc.length - 1 : t, s = at.es();
            return s.Nn(n, {Fn: 0, Wn: !0}), this.Oc(s), i
        }

        k_(t, i, n) {
            t.k_(i, n)
        }

        C_(t, i, n) {
            t.C_(i, n), this.ql(), this.Oc(this.Hc(t, 2))
        }

        T_(t, i) {
            t.T_(i), this.Oc(this.Hc(t, 2))
        }

        P_(t, i, n) {
            i.ko() || t.P_(i, n)
        }

        R_(t, i, n) {
            i.ko() || (t.R_(i, n), this.ql(), this.Oc(this.Hc(t, 2)))
        }

        D_(t, i) {
            i.ko() || (t.D_(i), this.Oc(this.Hc(t, 2)))
        }

        A_(t, i) {
            t.A_(i), this.Oc(this.Hc(t, 2))
        }

        $c(t) {
            this.wl.Uo(t)
        }

        Uc(t, i) {
            const n = this.kt();
            if (n.Fi() || 0 === i) return;
            const s = n.$i();
            t = Math.max(1, Math.min(t, s)), n.ju(t, i), this.zu()
        }

        qc(t) {
            this.Yc(0), this.Xc(t), this.Kc()
        }

        Zc(t) {
            this.wl.qo(t), this.zu()
        }

        Gc() {
            this.wl.Yo(), this.Fh()
        }

        Yc(t) {
            this.wl.Xo(t)
        }

        Xc(t) {
            this.wl.Ko(t), this.zu()
        }

        Kc() {
            this.wl.Zo(), this.Fh()
        }

        Mt() {
            return this.bc
        }

        Jc(t, i, n, s, e) {
            this.wt.gn(t, i);
            let r = NaN, h = this.wl.Bu(t);
            const l = this.wl.Xs();
            null !== l && (h = Math.min(Math.max(l.Os(), h), l.di()));
            const a = s.vn(), o = a.Pt();
            null !== o && (r = a.pn(i, o)), r = this.kc.Ca(r, h, s), this.wt.yn(h, r, s), this.sa(), e || this.Mc.m(this.wt.yt(), {
                x: t,
                y: i
            }, n)
        }

        Qc(t, i, n) {
            const s = n.vn(), e = s.Pt(), r = s.Ot(t, f(e)), h = this.wl.ka(i, !0), l = this.wl.It(f(h));
            this.Jc(l, r, null, n, !0)
        }

        td(t) {
            this.Fc().Cn(), this.sa(), t || this.Mc.m(null, null, null)
        }

        ql() {
            const t = this.wt.Ut();
            if (null !== t) {
                const i = this.wt.xn(), n = this.wt.Sn();
                this.Jc(i, n, null, t)
            }
            this.wt.On()
        }

        nd(t, i, n) {
            const s = this.wl.mn(0);
            void 0 !== i && void 0 !== n && this.wl.gt(i, n);
            const e = this.wl.mn(0), r = this.wl.Au(), h = this.wl.Xs();
            if (null !== h && null !== s && null !== e) {
                const i = h.Kr(r), l = this.N_.key(s) > this.N_.key(e), a = null !== t && t > r && !l,
                    o = this.wl.W().allowShiftVisibleRangeOnWhitespaceReplacement,
                    _ = i && (!(void 0 === n) || o) && this.wl.W().shiftVisibleRangeOnNewBar;
                if (a && !_) {
                    const i = t - r;
                    this.wl.Jn(this.wl.Iu() - i)
                }
            }
            this.wl.Wu(t)
        }

        Kl(t) {
            null !== t && t.V_()
        }

        cr(t) {
            const i = this.mc.find((i => i.No().includes(t)));
            return void 0 === i ? null : i
        }

        zu() {
            this.Cc.On(), this.mc.forEach((t => t.V_())), this.ql()
        }

        S() {
            this.mc.forEach((t => t.S())), this.mc.length = 0, this.cn.localization.priceFormatter = void 0, this.cn.localization.percentageFormatter = void 0, this.cn.localization.timeFormatter = void 0
        }

        sd() {
            return this.yc
        }

        mr() {
            return this.yc.W()
        }

        f_() {
            return this.gc
        }

        ed(t, i, n) {
            const s = this.mc[0], e = this.rd(i, t, s, n);
            return this.bc.push(e), 1 === this.bc.length ? this.$l() : this.Fh(), e
        }

        hd(t) {
            const i = this.cr(t), n = this.bc.indexOf(t);
            c(-1 !== n, "Series not found"), this.bc.splice(n, 1), f(i).jo(t), t.S && t.S()
        }

        Hl(t, i) {
            const n = f(this.cr(t));
            n.jo(t);
            const s = this.Ic(i);
            if (null === s) {
                const s = t.Zi();
                n.Fo(t, i, s)
            } else {
                const e = s.Ut === n ? t.Zi() : void 0;
                s.Ut.Fo(t, i, e)
            }
        }

        Qu() {
            const t = at.ss();
            t.$n(), this.Oc(t)
        }

        ld(t) {
            const i = at.ss();
            i.Yn(t), this.Oc(i)
        }

        Zn() {
            const t = at.ss();
            t.Zn(), this.Oc(t)
        }

        Gn(t) {
            const i = at.ss();
            i.Gn(t), this.Oc(i)
        }

        Jn(t) {
            const i = at.ss();
            i.Jn(t), this.Oc(i)
        }

        Xn(t) {
            const i = at.ss();
            i.Xn(t), this.Oc(i)
        }

        Un() {
            const t = at.ss();
            t.Un(), this.Oc(t)
        }

        ad() {
            return this.cn.rightPriceScale.visible ? "right" : "left"
        }

        od() {
            return this.Dc
        }

        q() {
            return this.Pc
        }

        zt(t) {
            const i = this.Dc, n = this.Pc;
            if (i === n) return i;
            if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.xc || this.xc.Ts !== n || this.xc.Ps !== i) this.xc = {
                Ts: n,
                Ps: i,
                _d: new Map
            }; else {
                const i = this.xc._d.get(t);
                if (void 0 !== i) return i
            }
            const s = function (t, i, n) {
                const [s, e, r, h] = S(t), [l, a, o, _] = S(i),
                    u = [m(s + n * (l - s)), m(e + n * (a - e)), m(r + n * (o - r)), b(h + n * (_ - h))];
                return `rgba(${u[0]}, ${u[1]}, ${u[2]}, ${u[3]})`
            }(n, i, t / 100);
            return this.xc._d.set(t, s), s
        }

        Hc(t, i) {
            const n = new at(i);
            if (null !== t) {
                const s = this.mc.indexOf(t);
                n.Nn(s, {Fn: i})
            }
            return n
        }

        Ac(t, i) {
            return void 0 === i && (i = 2), this.Hc(this.cr(t), i)
        }

        Oc(t) {
            this.Sc && this.Sc(t), this.mc.forEach((t => t.E_().Wh().gt()))
        }

        rd(t, i, n, s) {
            const e = new Yi(this, t, i, n, s), r = void 0 !== t.priceScaleId ? t.priceScaleId : this.ad();
            return n.Fo(e, r), lt(r) || e.Nh(t), e
        }

        Rc(t) {
            const i = this.cn.layout;
            return "gradient" === i.background.type ? 0 === t ? i.background.topColor : i.background.bottomColor : i.background.color
        }
    }

    function Bn(t) {
        return !T(t) && !R(t)
    }

    function Vn(t) {
        return T(t)
    }

    !function (t) {
        t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate"
    }(Pn || (Pn = {})), function (t) {
        t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible"
    }(Rn || (Rn = {})), function (t) {
        t.Solid = "solid", t.VerticalGradient = "gradient"
    }(Dn || (Dn = {})), function (t) {
        t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds"
    }(On || (On = {}));
    const zn = t => t.getUTCFullYear();

    function En(t, i, n) {
        return i.replace(/yyyy/g, (t => _t(zn(t), 4))(t)).replace(/yy/g, (t => _t(zn(t) % 100, 2))(t)).replace(/MMMM/g, ((t, i) => new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {month: "long"}))(t, n)).replace(/MMM/g, ((t, i) => new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, {month: "short"}))(t, n)).replace(/MM/g, (t => _t((t => t.getUTCMonth() + 1)(t), 2))(t)).replace(/dd/g, (t => _t((t => t.getUTCDate())(t), 2))(t))
    }

    class In {
        constructor(t = "yyyy-MM-dd", i = "default") {
            this.ud = t, this.dd = i
        }

        F_(t) {
            return En(t, this.ud, this.dd)
        }
    }

    class Ln {
        constructor(t) {
            this.fd = t || "%h:%m:%s"
        }

        F_(t) {
            return this.fd.replace("%h", _t(t.getUTCHours(), 2)).replace("%m", _t(t.getUTCMinutes(), 2)).replace("%s", _t(t.getUTCSeconds(), 2))
        }
    }

    const Nn = {vd: "yyyy-MM-dd", pd: "%h:%m:%s", md: " ", bd: "default"};

    class Fn {
        constructor(t = {}) {
            const i = Object.assign(Object.assign({}, Nn), t);
            this.wd = new In(i.vd, i.bd), this.gd = new Ln(i.pd), this.Md = i.md
        }

        F_(t) {
            return `${this.wd.F_(t)}${this.Md}${this.gd.F_(t)}`
        }
    }

    function Wn(t) {
        return 60 * t * 60 * 1e3
    }

    function jn(t) {
        return 60 * t * 1e3
    }

    const Hn = [{xd: ($n = 1, 1e3 * $n), Sd: 10}, {xd: jn(1), Sd: 20}, {xd: jn(5), Sd: 21}, {
        xd: jn(30),
        Sd: 22
    }, {xd: Wn(1), Sd: 30}, {xd: Wn(3), Sd: 31}, {xd: Wn(6), Sd: 32}, {xd: Wn(12), Sd: 33}];
    var $n;

    function Un(t, i) {
        if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
        if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
        if (t.getUTCDate() !== i.getUTCDate()) return 50;
        for (let n = Hn.length - 1; n >= 0; --n) if (Math.floor(i.getTime() / Hn[n].xd) !== Math.floor(t.getTime() / Hn[n].xd)) return Hn[n].Sd;
        return 0
    }

    function qn(t) {
        let i = t;
        if (R(t) && (i = Xn(t)), !Bn(i)) throw new Error("time must be of type BusinessDay");
        const n = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, 0, 0, 0));
        return {yd: Math.round(n.getTime() / 1e3), kd: i}
    }

    function Yn(t) {
        if (!Vn(t)) throw new Error("time must be of type isUTCTimestamp");
        return {yd: t}
    }

    function Xn(t) {
        const i = new Date(t);
        if (isNaN(i.getTime())) throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
        return {day: i.getUTCDate(), month: i.getUTCMonth() + 1, year: i.getUTCFullYear()}
    }

    function Kn(t) {
        R(t.time) && (t.time = Xn(t.time))
    }

    class Zn {
        options() {
            return this.cn
        }

        setOptions(t) {
            this.cn = t, this.updateFormatter(t.localization)
        }

        preprocessData(t) {
            Array.isArray(t) ? function (t) {
                t.forEach(Kn)
            }(t) : Kn(t)
        }

        createConverterToInternalObj(t) {
            return f(function (t) {
                return 0 === t.length ? null : Bn(t[0].time) || R(t[0].time) ? qn : Yn
            }(t))
        }

        key(t) {
            return "object" == typeof t && "yd" in t ? t.yd : this.key(this.convertHorzItemToInternal(t))
        }

        cacheKey(t) {
            const i = t;
            return void 0 === i.kd ? new Date(1e3 * i.yd).getTime() : new Date(Date.UTC(i.kd.year, i.kd.month - 1, i.kd.day)).getTime()
        }

        convertHorzItemToInternal(t) {
            return Vn(i = t) ? Yn(i) : Bn(i) ? qn(i) : qn(Xn(i));
            var i
        }

        updateFormatter(t) {
            if (!this.cn) return;
            const i = t.dateFormat;
            this.cn.timeScale.timeVisible ? this.Cd = new Fn({
                vd: i,
                pd: this.cn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m",
                md: "   ",
                bd: t.locale
            }) : this.Cd = new In(i, t.locale)
        }

        formatHorzItem(t) {
            const i = t;
            return this.Cd.F_(new Date(1e3 * i.yd))
        }

        formatTickmark(t, i) {
            const n = function (t, i, n) {
                switch (t) {
                    case 0:
                    case 10:
                        return i ? n ? 4 : 3 : 2;
                    case 20:
                    case 21:
                    case 22:
                    case 30:
                    case 31:
                    case 32:
                    case 33:
                        return i ? 3 : 2;
                    case 50:
                        return 2;
                    case 60:
                        return 1;
                    case 70:
                        return 0
                }
            }(t.weight, this.cn.timeScale.timeVisible, this.cn.timeScale.secondsVisible), s = this.cn.timeScale;
            if (void 0 !== s.tickMarkFormatter) {
                const e = s.tickMarkFormatter(t.originalTime, n, i.locale);
                if (null !== e) return e
            }
            return function (t, i, n) {
                const s = {};
                switch (i) {
                    case 0:
                        s.year = "numeric";
                        break;
                    case 1:
                        s.month = "short";
                        break;
                    case 2:
                        s.day = "numeric";
                        break;
                    case 3:
                        s.hour12 = !1, s.hour = "2-digit", s.minute = "2-digit";
                        break;
                    case 4:
                        s.hour12 = !1, s.hour = "2-digit", s.minute = "2-digit", s.second = "2-digit"
                }
                const e = void 0 === t.kd ? new Date(1e3 * t.yd) : new Date(Date.UTC(t.kd.year, t.kd.month - 1, t.kd.day));
                return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()).toLocaleString(n, s)
            }(t.time, n, i.locale)
        }

        maxTickMarkWeight(t) {
            let i = t.reduce(xn, t[0]).weight;
            return i > 30 && i < 50 && (i = 30), i
        }

        fillWeightsForPoints(t, i) {
            !function (t, i = 0) {
                if (0 === t.length) return;
                let n = 0 === i ? null : t[i - 1].time.yd, s = null !== n ? new Date(1e3 * n) : null, e = 0;
                for (let r = i; r < t.length; ++r) {
                    const i = t[r], h = new Date(1e3 * i.time.yd);
                    null !== s && (i.timeWeight = Un(h, s)), e += i.time.yd - (n || i.time.yd), n = i.time.yd, s = h
                }
                if (0 === i && t.length > 1) {
                    const i = Math.ceil(e / (t.length - 1)), n = new Date(1e3 * (t[0].time.yd - i));
                    t[0].timeWeight = Un(new Date(1e3 * t[0].time.yd), n)
                }
            }(t, i)
        }

        static Td(t) {
            return C({localization: {dateFormat: "dd MMM 'yy"}}, null != t ? t : {})
        }
    }

    function Gn(t) {
        var i = t.width, n = t.height;
        if (i < 0) throw new Error("Negative width is not allowed for Size");
        if (n < 0) throw new Error("Negative height is not allowed for Size");
        return {width: i, height: n}
    }

    function Jn(t, i) {
        return t.width === i.width && t.height === i.height
    }

    var Qn = function () {
        function t(t) {
            var i = this;
            this._resolutionListener = function () {
                return i._onResolutionChanged()
            }, this._resolutionMediaQueryList = null, this._observers = [], this._window = t, this._installResolutionListener()
        }

        return t.prototype.dispose = function () {
            this._uninstallResolutionListener(), this._window = null
        }, Object.defineProperty(t.prototype, "value", {
            get: function () {
                return this._window.devicePixelRatio
            }, enumerable: !1, configurable: !0
        }), t.prototype.subscribe = function (t) {
            var i = this, n = {next: t};
            return this._observers.push(n), {
                unsubscribe: function () {
                    i._observers = i._observers.filter((function (t) {
                        return t !== n
                    }))
                }
            }
        }, t.prototype._installResolutionListener = function () {
            if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed");
            var t = this._window.devicePixelRatio;
            this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(t, "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener)
        }, t.prototype._uninstallResolutionListener = function () {
            null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null)
        }, t.prototype._reinstallResolutionListener = function () {
            this._uninstallResolutionListener(), this._installResolutionListener()
        }, t.prototype._onResolutionChanged = function () {
            var t = this;
            this._observers.forEach((function (i) {
                return i.next(t._window.devicePixelRatio)
            })), this._reinstallResolutionListener()
        }, t
    }();
    var ts = function () {
        function t(t, i, n) {
            var s;
            this._canvasElement = null, this._bitmapSizeChangedListeners = [], this._suggestedBitmapSize = null, this._suggestedBitmapSizeChangedListeners = [], this._devicePixelRatioObservable = null, this._canvasElementResizeObserver = null, this._canvasElement = t, this._canvasElementClientSize = Gn({
                width: this._canvasElement.clientWidth,
                height: this._canvasElement.clientHeight
            }), this._transformBitmapSize = null != i ? i : function (t) {
                return t
            }, this._allowResizeObserver = null === (s = null == n ? void 0 : n.allowResizeObserver) || void 0 === s || s, this._chooseAndInitObserver()
        }

        return t.prototype.dispose = function () {
            var t, i;
            if (null === this._canvasElement) throw new Error("Object is disposed");
            null === (t = this._canvasElementResizeObserver) || void 0 === t || t.disconnect(), this._canvasElementResizeObserver = null, null === (i = this._devicePixelRatioObservable) || void 0 === i || i.dispose(), this._devicePixelRatioObservable = null, this._suggestedBitmapSizeChangedListeners.length = 0, this._bitmapSizeChangedListeners.length = 0, this._canvasElement = null
        }, Object.defineProperty(t.prototype, "canvasElement", {
            get: function () {
                if (null === this._canvasElement) throw new Error("Object is disposed");
                return this._canvasElement
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "canvasElementClientSize", {
            get: function () {
                return this._canvasElementClientSize
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "bitmapSize", {
            get: function () {
                return Gn({width: this.canvasElement.width, height: this.canvasElement.height})
            }, enumerable: !1, configurable: !0
        }), t.prototype.resizeCanvasElement = function (t) {
            this._canvasElementClientSize = Gn(t), this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px"), this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px"), this._invalidateBitmapSize()
        }, t.prototype.subscribeBitmapSizeChanged = function (t) {
            this._bitmapSizeChangedListeners.push(t)
        }, t.prototype.unsubscribeBitmapSizeChanged = function (t) {
            this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter((function (i) {
                return i !== t
            }))
        }, Object.defineProperty(t.prototype, "suggestedBitmapSize", {
            get: function () {
                return this._suggestedBitmapSize
            }, enumerable: !1, configurable: !0
        }), t.prototype.subscribeSuggestedBitmapSizeChanged = function (t) {
            this._suggestedBitmapSizeChangedListeners.push(t)
        }, t.prototype.unsubscribeSuggestedBitmapSizeChanged = function (t) {
            this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter((function (i) {
                return i !== t
            }))
        }, t.prototype.applySuggestedBitmapSize = function () {
            if (null !== this._suggestedBitmapSize) {
                var t = this._suggestedBitmapSize;
                this._suggestedBitmapSize = null, this._resizeBitmap(t), this._emitSuggestedBitmapSizeChanged(t, this._suggestedBitmapSize)
            }
        }, t.prototype._resizeBitmap = function (t) {
            var i = this.bitmapSize;
            Jn(i, t) || (this.canvasElement.width = t.width, this.canvasElement.height = t.height, this._emitBitmapSizeChanged(i, t))
        }, t.prototype._emitBitmapSizeChanged = function (t, i) {
            var n = this;
            this._bitmapSizeChangedListeners.forEach((function (s) {
                return s.call(n, t, i)
            }))
        }, t.prototype._suggestNewBitmapSize = function (t) {
            var i = this._suggestedBitmapSize, n = Gn(this._transformBitmapSize(t, this._canvasElementClientSize)),
                s = Jn(this.bitmapSize, n) ? null : n;
            null === i && null === s || null !== i && null !== s && Jn(i, s) || (this._suggestedBitmapSize = s, this._emitSuggestedBitmapSizeChanged(i, s))
        }, t.prototype._emitSuggestedBitmapSizeChanged = function (t, i) {
            var n = this;
            this._suggestedBitmapSizeChangedListeners.forEach((function (s) {
                return s.call(n, t, i)
            }))
        }, t.prototype._chooseAndInitObserver = function () {
            var t = this;
            this._allowResizeObserver ? new Promise((function (t) {
                var i = new ResizeObserver((function (n) {
                    t(n.every((function (t) {
                        return "devicePixelContentBoxSize" in t
                    }))), i.disconnect()
                }));
                i.observe(document.body, {box: "device-pixel-content-box"})
            })).catch((function () {
                return !1
            })).then((function (i) {
                return i ? t._initResizeObserver() : t._initDevicePixelRatioObservable()
            })) : this._initDevicePixelRatioObservable()
        }, t.prototype._initDevicePixelRatioObservable = function () {
            var t = this;
            if (null !== this._canvasElement) {
                var i = is(this._canvasElement);
                if (null === i) throw new Error("No window is associated with the canvas");
                this._devicePixelRatioObservable = function (t) {
                    return new Qn(t)
                }(i), this._devicePixelRatioObservable.subscribe((function () {
                    return t._invalidateBitmapSize()
                })), this._invalidateBitmapSize()
            }
        }, t.prototype._invalidateBitmapSize = function () {
            var t, i;
            if (null !== this._canvasElement) {
                var n = is(this._canvasElement);
                if (null !== n) {
                    var s = null !== (i = null === (t = this._devicePixelRatioObservable) || void 0 === t ? void 0 : t.value) && void 0 !== i ? i : n.devicePixelRatio,
                        e = this._canvasElement.getClientRects(), r = void 0 !== e[0] ? function (t, i) {
                            return Gn({
                                width: Math.round(t.left * i + t.width * i) - Math.round(t.left * i),
                                height: Math.round(t.top * i + t.height * i) - Math.round(t.top * i)
                            })
                        }(e[0], s) : Gn({
                            width: this._canvasElementClientSize.width * s,
                            height: this._canvasElementClientSize.height * s
                        });
                    this._suggestNewBitmapSize(r)
                }
            }
        }, t.prototype._initResizeObserver = function () {
            var t = this;
            null !== this._canvasElement && (this._canvasElementResizeObserver = new ResizeObserver((function (i) {
                var n = i.find((function (i) {
                    return i.target === t._canvasElement
                }));
                if (n && n.devicePixelContentBoxSize && n.devicePixelContentBoxSize[0]) {
                    var s = n.devicePixelContentBoxSize[0], e = Gn({width: s.inlineSize, height: s.blockSize});
                    t._suggestNewBitmapSize(e)
                }
            })), this._canvasElementResizeObserver.observe(this._canvasElement, {box: "device-pixel-content-box"}))
        }, t
    }();

    function is(t) {
        return t.ownerDocument.defaultView
    }

    var ns = function () {
        function t(t, i, n) {
            if (0 === i.width || 0 === i.height) throw new TypeError("Rendering target could only be created on a media with positive width and height");
            if (this._mediaSize = i, 0 === n.width || 0 === n.height) throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
            this._bitmapSize = n, this._context = t
        }

        return t.prototype.useMediaCoordinateSpace = function (t) {
            try {
                return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio), t({
                    context: this._context,
                    mediaSize: this._mediaSize
                })
            } finally {
                this._context.restore()
            }
        }, t.prototype.useBitmapCoordinateSpace = function (t) {
            try {
                return this._context.save(), this._context.setTransform(1, 0, 0, 1, 0, 0), t({
                    context: this._context,
                    mediaSize: this._mediaSize,
                    bitmapSize: this._bitmapSize,
                    horizontalPixelRatio: this._horizontalPixelRatio,
                    verticalPixelRatio: this._verticalPixelRatio
                })
            } finally {
                this._context.restore()
            }
        }, Object.defineProperty(t.prototype, "_horizontalPixelRatio", {
            get: function () {
                return this._bitmapSize.width / this._mediaSize.width
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "_verticalPixelRatio", {
            get: function () {
                return this._bitmapSize.height / this._mediaSize.height
            }, enumerable: !1, configurable: !0
        }), t
    }();

    function ss(t, i) {
        var n = t.canvasElementClientSize;
        if (0 === n.width || 0 === n.height) return null;
        var s = t.bitmapSize;
        if (0 === s.width || 0 === s.height) return null;
        var e = t.canvasElement.getContext("2d", i);
        return null === e ? null : new ns(e, n, s)
    }

    const es = "undefined" != typeof window;

    function rs() {
        return !!es && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
    }

    function hs() {
        return !!es && /iPhone|iPad|iPod/.test(window.navigator.platform)
    }

    function ls(t) {
        return t + t % 2
    }

    function as(t, i) {
        return t.Pd - i.Pd
    }

    function os(t, i, n) {
        const s = (t.Pd - i.Pd) / (t.ut - i.ut);
        return Math.sign(s) * Math.min(Math.abs(s), n)
    }

    class _s {
        constructor(t, i, n, s) {
            this.Rd = null, this.Dd = null, this.Od = null, this.Ad = null, this.Bd = null, this.Vd = 0, this.zd = 0, this.Ed = t, this.Id = i, this.Ld = n, this.rs = s
        }

        Nd(t, i) {
            if (null !== this.Rd) {
                if (this.Rd.ut === i) return void (this.Rd.Pd = t);
                if (Math.abs(this.Rd.Pd - t) < this.rs) return
            }
            this.Ad = this.Od, this.Od = this.Dd, this.Dd = this.Rd, this.Rd = {ut: i, Pd: t}
        }

        Dr(t, i) {
            if (null === this.Rd || null === this.Dd) return;
            if (i - this.Rd.ut > 50) return;
            let n = 0;
            const s = os(this.Rd, this.Dd, this.Id), e = as(this.Rd, this.Dd), r = [s], h = [e];
            if (n += e, null !== this.Od) {
                const t = os(this.Dd, this.Od, this.Id);
                if (Math.sign(t) === Math.sign(s)) {
                    const i = as(this.Dd, this.Od);
                    if (r.push(t), h.push(i), n += i, null !== this.Ad) {
                        const t = os(this.Od, this.Ad, this.Id);
                        if (Math.sign(t) === Math.sign(s)) {
                            const i = as(this.Od, this.Ad);
                            r.push(t), h.push(i), n += i
                        }
                    }
                }
            }
            let l = 0;
            for (let t = 0; t < r.length; ++t) l += h[t] / n * r[t];
            Math.abs(l) < this.Ed || (this.Bd = {Pd: t, ut: i}, this.zd = l, this.Vd = function (t, i) {
                const n = Math.log(i);
                return Math.log(1 * n / -t) / n
            }(Math.abs(l), this.Ld))
        }

        Xu(t) {
            const i = f(this.Bd), n = t - i.ut;
            return i.Pd + this.zd * (Math.pow(this.Ld, n) - 1) / Math.log(this.Ld)
        }

        Yu(t) {
            return null === this.Bd || this.Fd(t) === this.Vd
        }

        Fd(t) {
            const i = t - f(this.Bd).ut;
            return Math.min(i, this.Vd)
        }
    }

    function us(t, i) {
        const n = f(t.ownerDocument).createElement("canvas");
        t.appendChild(n);
        const s = function (t, i) {
            if ("device-pixel-content-box" === i.type) return new ts(t, i.transform, i.options);
            throw new Error("Unsupported binding target")
        }(n, {
            type: "device-pixel-content-box",
            options: {allowResizeObserver: !1},
            transform: (t, i) => ({width: Math.max(t.width, i.width), height: Math.max(t.height, i.height)})
        });
        return s.resizeCanvasElement(i), s
    }

    function cs(t) {
        var i;
        t.width = 1, t.height = 1, null === (i = t.getContext("2d")) || void 0 === i || i.clearRect(0, 0, 1, 1)
    }

    function ds(t, i, n, s) {
        t.G && t.G(i, n, s)
    }

    function fs(t, i, n, s) {
        t.K(i, n, s)
    }

    function vs(t, i, n, s) {
        const e = t(n, s);
        for (const t of e) {
            const n = t.xt();
            null !== n && i(n)
        }
    }

    function ps(t) {
        es && void 0 !== window.chrome && t.addEventListener("mousedown", (t => {
            if (1 === t.button) return t.preventDefault(), !1
        }))
    }

    class ms {
        constructor(t, i, n) {
            this.Wd = 0, this.jd = null, this.Hd = {
                et: Number.NEGATIVE_INFINITY,
                rt: Number.POSITIVE_INFINITY
            }, this.$d = 0, this.Ud = null, this.qd = {
                et: Number.NEGATIVE_INFINITY,
                rt: Number.POSITIVE_INFINITY
            }, this.Yd = null, this.Xd = !1, this.Kd = null, this.Zd = null, this.Gd = !1, this.Jd = !1, this.Qd = !1, this.tf = null, this.if = null, this.nf = null, this.sf = null, this.ef = null, this.rf = null, this.hf = null, this.lf = 0, this.af = !1, this._f = !1, this.uf = !1, this.cf = 0, this.df = null, this.ff = !hs(), this.vf = t => {
                this.pf(t)
            }, this.mf = t => {
                if (this.bf(t)) {
                    const i = this.wf(t);
                    if (++this.$d, this.Ud && this.$d > 1) {
                        const {gf: n} = this.Mf(gs(t), this.qd);
                        n < 30 && !this.Qd && this.xf(i, this.yf.Sf), this.kf()
                    }
                } else {
                    const i = this.wf(t);
                    if (++this.Wd, this.jd && this.Wd > 1) {
                        const {gf: n} = this.Mf(gs(t), this.Hd);
                        n < 5 && !this.Jd && this.Cf(i, this.yf.Tf), this.Pf()
                    }
                }
            }, this.Rf = t, this.yf = i, this.cn = n, this.Df()
        }

        S() {
            null !== this.tf && (this.tf(), this.tf = null), null !== this.if && (this.if(), this.if = null), null !== this.sf && (this.sf(), this.sf = null), null !== this.ef && (this.ef(), this.ef = null), null !== this.rf && (this.rf(), this.rf = null), null !== this.nf && (this.nf(), this.nf = null), this.Of(), this.Pf()
        }

        Af(t) {
            this.sf && this.sf();
            const i = this.Bf.bind(this);
            if (this.sf = () => {
                this.Rf.removeEventListener("mousemove", i)
            }, this.Rf.addEventListener("mousemove", i), this.bf(t)) return;
            const n = this.wf(t);
            this.Cf(n, this.yf.Vf), this.ff = !0
        }

        Pf() {
            null !== this.jd && clearTimeout(this.jd), this.Wd = 0, this.jd = null, this.Hd = {
                et: Number.NEGATIVE_INFINITY,
                rt: Number.POSITIVE_INFINITY
            }
        }

        kf() {
            null !== this.Ud && clearTimeout(this.Ud), this.$d = 0, this.Ud = null, this.qd = {
                et: Number.NEGATIVE_INFINITY,
                rt: Number.POSITIVE_INFINITY
            }
        }

        Bf(t) {
            if (this.uf || null !== this.Zd) return;
            if (this.bf(t)) return;
            const i = this.wf(t);
            this.Cf(i, this.yf.zf), this.ff = !0
        }

        Ef(t) {
            const i = xs(t.changedTouches, f(this.df));
            if (null === i) return;
            if (this.cf = Ms(t), null !== this.hf) return;
            if (this._f) return;
            this.af = !0;
            const n = this.Mf(gs(i), f(this.Zd)), {If: s, Lf: e, gf: r} = n;
            if (this.Gd || !(r < 5)) {
                if (!this.Gd) {
                    const t = .5 * s, i = e >= t && !this.cn.Nf(), n = t > e && !this.cn.Ff();
                    i || n || (this._f = !0), this.Gd = !0, this.Qd = !0, this.Of(), this.kf()
                }
                if (!this._f) {
                    const n = this.wf(t, i);
                    this.xf(n, this.yf.Wf), ws(t)
                }
            }
        }

        jf(t) {
            if (0 !== t.button) return;
            const i = this.Mf(gs(t), f(this.Kd)), {gf: n} = i;
            if (n >= 5 && (this.Jd = !0, this.Pf()), this.Jd) {
                const i = this.wf(t);
                this.Cf(i, this.yf.Hf)
            }
        }

        Mf(t, i) {
            const n = Math.abs(i.et - t.et), s = Math.abs(i.rt - t.rt);
            return {If: n, Lf: s, gf: n + s}
        }

        $f(t) {
            let i = xs(t.changedTouches, f(this.df));
            if (null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i) return;
            this.df = null, this.cf = Ms(t), this.Of(), this.Zd = null, this.rf && (this.rf(), this.rf = null);
            const n = this.wf(t, i);
            if (this.xf(n, this.yf.Uf), ++this.$d, this.Ud && this.$d > 1) {
                const {gf: t} = this.Mf(gs(i), this.qd);
                t < 30 && !this.Qd && this.xf(n, this.yf.Sf), this.kf()
            } else this.Qd || (this.xf(n, this.yf.qf), this.yf.qf && ws(t));
            0 === this.$d && ws(t), 0 === t.touches.length && this.Xd && (this.Xd = !1, ws(t))
        }

        pf(t) {
            if (0 !== t.button) return;
            const i = this.wf(t);
            if (this.Kd = null, this.uf = !1, this.ef && (this.ef(), this.ef = null), rs()) {
                this.Rf.ownerDocument.documentElement.removeEventListener("mouseleave", this.vf)
            }
            if (!this.bf(t)) if (this.Cf(i, this.yf.Yf), ++this.Wd, this.jd && this.Wd > 1) {
                const {gf: n} = this.Mf(gs(t), this.Hd);
                n < 5 && !this.Jd && this.Cf(i, this.yf.Tf), this.Pf()
            } else this.Jd || this.Cf(i, this.yf.Xf)
        }

        Of() {
            null !== this.Yd && (clearTimeout(this.Yd), this.Yd = null)
        }

        Kf(t) {
            if (null !== this.df) return;
            const i = t.changedTouches[0];
            this.df = i.identifier, this.cf = Ms(t);
            const n = this.Rf.ownerDocument.documentElement;
            this.Qd = !1, this.Gd = !1, this._f = !1, this.Zd = gs(i), this.rf && (this.rf(), this.rf = null);
            {
                const i = this.Ef.bind(this), s = this.$f.bind(this);
                this.rf = () => {
                    n.removeEventListener("touchmove", i), n.removeEventListener("touchend", s)
                }, n.addEventListener("touchmove", i, {passive: !1}), n.addEventListener("touchend", s, {passive: !1}), this.Of(), this.Yd = setTimeout(this.Zf.bind(this, t), 240)
            }
            const s = this.wf(t, i);
            this.xf(s, this.yf.Gf), this.Ud || (this.$d = 0, this.Ud = setTimeout(this.kf.bind(this), 500), this.qd = gs(i))
        }

        Jf(t) {
            if (0 !== t.button) return;
            const i = this.Rf.ownerDocument.documentElement;
            rs() && i.addEventListener("mouseleave", this.vf), this.Jd = !1, this.Kd = gs(t), this.ef && (this.ef(), this.ef = null);
            {
                const t = this.jf.bind(this), n = this.pf.bind(this);
                this.ef = () => {
                    i.removeEventListener("mousemove", t), i.removeEventListener("mouseup", n)
                }, i.addEventListener("mousemove", t), i.addEventListener("mouseup", n)
            }
            if (this.uf = !0, this.bf(t)) return;
            const n = this.wf(t);
            this.Cf(n, this.yf.Qf), this.jd || (this.Wd = 0, this.jd = setTimeout(this.Pf.bind(this), 500), this.Hd = gs(t))
        }

        Df() {
            this.Rf.addEventListener("mouseenter", this.Af.bind(this)), this.Rf.addEventListener("touchcancel", this.Of.bind(this));
            {
                const t = this.Rf.ownerDocument, i = t => {
                    this.yf.tv && (t.composed && this.Rf.contains(t.composedPath()[0]) || t.target && this.Rf.contains(t.target) || this.yf.tv())
                };
                this.if = () => {
                    t.removeEventListener("touchstart", i)
                }, this.tf = () => {
                    t.removeEventListener("mousedown", i)
                }, t.addEventListener("mousedown", i), t.addEventListener("touchstart", i, {passive: !0})
            }
            hs() && (this.nf = () => {
                this.Rf.removeEventListener("dblclick", this.mf)
            }, this.Rf.addEventListener("dblclick", this.mf)), this.Rf.addEventListener("mouseleave", this.iv.bind(this)), this.Rf.addEventListener("touchstart", this.Kf.bind(this), {passive: !0}), ps(this.Rf), this.Rf.addEventListener("mousedown", this.Jf.bind(this)), this.nv(), this.Rf.addEventListener("touchmove", (() => {
            }), {passive: !1})
        }

        nv() {
            void 0 === this.yf.sv && void 0 === this.yf.ev && void 0 === this.yf.rv || (this.Rf.addEventListener("touchstart", (t => this.hv(t.touches)), {passive: !0}), this.Rf.addEventListener("touchmove", (t => {
                if (2 === t.touches.length && null !== this.hf && void 0 !== this.yf.ev) {
                    const i = bs(t.touches[0], t.touches[1]) / this.lf;
                    this.yf.ev(this.hf, i), ws(t)
                }
            }), {passive: !1}), this.Rf.addEventListener("touchend", (t => {
                this.hv(t.touches)
            })))
        }

        hv(t) {
            1 === t.length && (this.af = !1), 2 !== t.length || this.af || this.Xd ? this.lv() : this.av(t)
        }

        av(t) {
            const i = this.Rf.getBoundingClientRect() || {left: 0, top: 0};
            this.hf = {
                et: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
                rt: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2
            }, this.lf = bs(t[0], t[1]), void 0 !== this.yf.sv && this.yf.sv(), this.Of()
        }

        lv() {
            null !== this.hf && (this.hf = null, void 0 !== this.yf.rv && this.yf.rv())
        }

        iv(t) {
            if (this.sf && this.sf(), this.bf(t)) return;
            if (!this.ff) return;
            const i = this.wf(t);
            this.Cf(i, this.yf.ov), this.ff = !hs()
        }

        Zf(t) {
            const i = xs(t.touches, f(this.df));
            if (null === i) return;
            const n = this.wf(t, i);
            this.xf(n, this.yf._v), this.Qd = !0, this.Xd = !0
        }

        bf(t) {
            return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : Ms(t) < this.cf + 500
        }

        xf(t, i) {
            i && i.call(this.yf, t)
        }

        Cf(t, i) {
            i && i.call(this.yf, t)
        }

        wf(t, i) {
            const n = i || t, s = this.Rf.getBoundingClientRect() || {left: 0, top: 0};
            return {
                clientX: n.clientX,
                clientY: n.clientY,
                pageX: n.pageX,
                pageY: n.pageY,
                screenX: n.screenX,
                screenY: n.screenY,
                localX: n.clientX - s.left,
                localY: n.clientY - s.top,
                ctrlKey: t.ctrlKey,
                altKey: t.altKey,
                shiftKey: t.shiftKey,
                metaKey: t.metaKey,
                uv: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type,
                cv: t.type,
                dv: n.target,
                fv: t.view,
                vv: () => {
                    "touchstart" !== t.type && ws(t)
                }
            }
        }
    }

    function bs(t, i) {
        const n = t.clientX - i.clientX, s = t.clientY - i.clientY;
        return Math.sqrt(n * n + s * s)
    }

    function ws(t) {
        t.cancelable && t.preventDefault()
    }

    function gs(t) {
        return {et: t.pageX, rt: t.pageY}
    }

    function Ms(t) {
        return t.timeStamp || performance.now()
    }

    function xs(t, i) {
        for (let n = 0; n < t.length; ++n) if (t[n].identifier === i) return t[n];
        return null
    }

    function Ss(t) {
        return {zc: t.zc, pv: {wr: t.mv.externalId}, bv: t.mv.cursorStyle}
    }

    function ys(t, i, n) {
        for (const s of t) {
            const t = s.xt();
            if (null !== t && t.br) {
                const e = t.br(i, n);
                if (null !== e) return {fv: s, pv: e}
            }
        }
        return null
    }

    function ks(t, i) {
        return n => {
            var s, e, r, h;
            return (null !== (e = null === (s = n.At()) || void 0 === s ? void 0 : s.xa()) && void 0 !== e ? e : "") !== i ? [] : null !== (h = null === (r = n.la) || void 0 === r ? void 0 : r.call(n, t)) && void 0 !== h ? h : []
        }
    }

    class Cs {
        constructor(t, i, n, s) {
            this.Li = null, this.wv = null, this.gv = !1, this.Mv = new Qt(200), this.Gr = null, this.xv = 0, this.Sv = !1, this.yv = () => {
                this.Sv || this.nn.kv().qt().Fh()
            }, this.Cv = () => {
                this.Sv || this.nn.kv().qt().Fh()
            }, this.nn = t, this.cn = i, this.mo = i.layout, this.yc = n, this.Tv = "left" === s, this.Pv = ks("normal", s), this.Rv = ks("top", s), this.Dv = ks("bottom", s), this.Ov = document.createElement("div"), this.Ov.style.height = "100%", this.Ov.style.overflow = "hidden", this.Ov.style.width = "25px", this.Ov.style.left = "0", this.Ov.style.position = "relative", this.Av = us(this.Ov, Gn({
                width: 16,
                height: 16
            })), this.Av.subscribeSuggestedBitmapSizeChanged(this.yv);
            const e = this.Av.canvasElement;
            e.style.position = "absolute", e.style.zIndex = "1", e.style.left = "0", e.style.top = "0", this.Bv = us(this.Ov, Gn({
                width: 16,
                height: 16
            })), this.Bv.subscribeSuggestedBitmapSizeChanged(this.Cv);
            const r = this.Bv.canvasElement;
            r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0";
            const h = {
                Qf: this.Vv.bind(this),
                Gf: this.Vv.bind(this),
                Hf: this.zv.bind(this),
                Wf: this.zv.bind(this),
                tv: this.Ev.bind(this),
                Yf: this.Iv.bind(this),
                Uf: this.Iv.bind(this),
                Tf: this.Lv.bind(this),
                Sf: this.Lv.bind(this),
                Vf: this.Nv.bind(this),
                ov: this.Fv.bind(this)
            };
            this.Wv = new ms(this.Bv.canvasElement, h, {Nf: () => !this.cn.handleScroll.vertTouchDrag, Ff: () => !0})
        }

        S() {
            this.Wv.S(), this.Bv.unsubscribeSuggestedBitmapSizeChanged(this.Cv), cs(this.Bv.canvasElement), this.Bv.dispose(), this.Av.unsubscribeSuggestedBitmapSizeChanged(this.yv), cs(this.Av.canvasElement), this.Av.dispose(), null !== this.Li && this.Li.$o().p(this), this.Li = null
        }

        jv() {
            return this.Ov
        }

        P() {
            return this.mo.fontSize
        }

        Hv() {
            const t = this.yc.W();
            return this.Gr !== t.R && (this.Mv.ir(), this.Gr = t.R), t
        }

        $v() {
            if (null === this.Li) return 0;
            let t = 0;
            const i = this.Hv(), n = f(this.Av.canvasElement.getContext("2d"));
            n.save();
            const s = this.Li.Ia();
            n.font = this.Uv(), s.length > 0 && (t = Math.max(this.Mv.Si(n, s[0].Za), this.Mv.Si(n, s[s.length - 1].Za)));
            const e = this.qv();
            for (let i = e.length; i--;) {
                const s = this.Mv.Si(n, e[i].Jt());
                s > t && (t = s)
            }
            const r = this.Li.Pt();
            if (null !== r && null !== this.wv) {
                const i = this.Li.pn(1, r), s = this.Li.pn(this.wv.height - 2, r);
                t = Math.max(t, this.Mv.Si(n, this.Li.Wi(Math.floor(Math.min(i, s)) + .11111111111111, r)), this.Mv.Si(n, this.Li.Wi(Math.ceil(Math.max(i, s)) - .11111111111111, r)))
            }
            n.restore();
            const h = t || 34;
            return ls(Math.ceil(i.C + i.T + i.V + i.I + 5 + h))
        }

        Yv(t) {
            null !== this.wv && Jn(this.wv, t) || (this.wv = t, this.Sv = !0, this.Av.resizeCanvasElement(t), this.Bv.resizeCanvasElement(t), this.Sv = !1, this.Ov.style.width = `${t.width}px`, this.Ov.style.height = `${t.height}px`)
        }

        Xv() {
            return f(this.wv).width
        }

        Ji(t) {
            this.Li !== t && (null !== this.Li && this.Li.$o().p(this), this.Li = t, t.$o().l(this.ao.bind(this), this))
        }

        At() {
            return this.Li
        }

        ir() {
            const t = this.nn.Kv();
            this.nn.kv().qt().A_(t, f(this.At()))
        }

        Zv(t) {
            if (null === this.wv) return;
            if (1 !== t) {
                this.Gv(), this.Av.applySuggestedBitmapSize();
                const t = ss(this.Av);
                null !== t && (t.useBitmapCoordinateSpace((t => {
                    this.Jv(t), this.Ve(t)
                })), this.nn.Qv(t, this.Dv), this.tp(t), this.nn.Qv(t, this.Pv), this.ip(t))
            }
            this.Bv.applySuggestedBitmapSize();
            const i = ss(this.Bv);
            null !== i && (i.useBitmapCoordinateSpace((({context: t, bitmapSize: i}) => {
                t.clearRect(0, 0, i.width, i.height)
            })), this.np(i), this.nn.Qv(i, this.Rv))
        }

        sp() {
            return this.Av.bitmapSize
        }

        ep(t, i, n) {
            const s = this.sp();
            s.width > 0 && s.height > 0 && t.drawImage(this.Av.canvasElement, i, n)
        }

        gt() {
            var t;
            null === (t = this.Li) || void 0 === t || t.Ia()
        }

        Vv(t) {
            if (null === this.Li || this.Li.Fi() || !this.cn.handleScale.axisPressedMouseMove.price) return;
            const i = this.nn.kv().qt(), n = this.nn.Kv();
            this.gv = !0, i.k_(n, this.Li, t.localY)
        }

        zv(t) {
            if (null === this.Li || !this.cn.handleScale.axisPressedMouseMove.price) return;
            const i = this.nn.kv().qt(), n = this.nn.Kv(), s = this.Li;
            i.C_(n, s, t.localY)
        }

        Ev() {
            if (null === this.Li || !this.cn.handleScale.axisPressedMouseMove.price) return;
            const t = this.nn.kv().qt(), i = this.nn.Kv(), n = this.Li;
            this.gv && (this.gv = !1, t.T_(i, n))
        }

        Iv(t) {
            if (null === this.Li || !this.cn.handleScale.axisPressedMouseMove.price) return;
            const i = this.nn.kv().qt(), n = this.nn.Kv();
            this.gv = !1, i.T_(n, this.Li)
        }

        Lv(t) {
            this.cn.handleScale.axisDoubleClickReset.price && this.ir()
        }

        Nv(t) {
            if (null === this.Li) return;
            !this.nn.kv().qt().W().handleScale.axisPressedMouseMove.price || this.Li.ph() || this.Li.Co() || this.rp(1)
        }

        Fv(t) {
            this.rp(0)
        }

        qv() {
            const t = [], i = null === this.Li ? void 0 : this.Li;
            return (n => {
                for (let s = 0; s < n.length; ++s) {
                    const e = n[s].Rn(this.nn.Kv(), i);
                    for (let i = 0; i < e.length; i++) t.push(e[i])
                }
            })(this.nn.Kv().No()), t
        }

        Jv({context: t, bitmapSize: i}) {
            const {width: n, height: s} = i, e = this.nn.Kv().qt(), r = e.q(), h = e.od();
            r === h ? Y(t, 0, 0, n, s, r) : G(t, 0, 0, n, s, r, h)
        }

        Ve({context: t, bitmapSize: i, horizontalPixelRatio: n}) {
            if (null === this.wv || null === this.Li || !this.Li.W().borderVisible) return;
            t.fillStyle = this.Li.W().borderColor;
            const s = Math.max(1, Math.floor(this.Hv().C * n));
            let e;
            e = this.Tv ? i.width - s : 0, t.fillRect(e, 0, s, i.height)
        }

        tp(t) {
            if (null === this.wv || null === this.Li) return;
            const i = this.Li.Ia(), n = this.Li.W(), s = this.Hv(), e = this.Tv ? this.wv.width - s.T : 0;
            n.borderVisible && n.ticksVisible && t.useBitmapCoordinateSpace((({
                                                                                  context: t,
                                                                                  horizontalPixelRatio: r,
                                                                                  verticalPixelRatio: h
                                                                              }) => {
                t.fillStyle = n.borderColor;
                const l = Math.max(1, Math.floor(h)), a = Math.floor(.5 * h), o = Math.round(s.T * r);
                t.beginPath();
                for (const n of i) t.rect(Math.floor(e * r), Math.round(n.Aa * h) - a, o, l);
                t.fill()
            })), t.useMediaCoordinateSpace((({context: t}) => {
                var r;
                t.font = this.Uv(), t.fillStyle = null !== (r = n.textColor) && void 0 !== r ? r : this.mo.textColor, t.textAlign = this.Tv ? "right" : "left", t.textBaseline = "middle";
                const h = this.Tv ? Math.round(e - s.V) : Math.round(e + s.T + s.V),
                    l = i.map((i => this.Mv.xi(t, i.Za)));
                for (let n = i.length; n--;) {
                    const s = i[n];
                    t.fillText(s.Za, h, s.Aa + l[n])
                }
            }))
        }

        Gv() {
            if (null === this.wv || null === this.Li) return;
            let t = this.wv.height / 2;
            const i = [], n = this.Li.No().slice(), s = this.nn.Kv(), e = this.Hv();
            this.Li === s.vr() && this.nn.Kv().No().forEach((t => {
                s.dr(t) && n.push(t)
            }));
            const r = this.Li.Ta()[0], h = this.Li;
            n.forEach((n => {
                const e = n.Rn(s, h);
                e.forEach((t => {
                    t.Bi(null), t.Vi() && i.push(t)
                })), r === n && e.length > 0 && (t = e[0].ki())
            })), i.forEach((t => t.Bi(t.ki())));
            this.Li.W().alignLabels && this.hp(i, e, t)
        }

        hp(t, i, n) {
            if (null === this.wv) return;
            const s = t.filter((t => t.ki() <= n)), e = t.filter((t => t.ki() > n));
            s.sort(((t, i) => i.ki() - t.ki())), s.length && e.length && e.push(s[0]), e.sort(((t, i) => t.ki() - i.ki()));
            for (const n of t) {
                const t = Math.floor(n.Et(i) / 2), s = n.ki();
                s > -t && s < t && n.Bi(t), s > this.wv.height - t && s < this.wv.height + t && n.Bi(this.wv.height - t)
            }
            for (let t = 1; t < s.length; t++) {
                const n = s[t], e = s[t - 1], r = e.Et(i, !1), h = n.ki(), l = e.Ai();
                h > l - r && n.Bi(l - r)
            }
            for (let t = 1; t < e.length; t++) {
                const n = e[t], s = e[t - 1], r = s.Et(i, !0), h = n.ki(), l = s.Ai();
                h < l + r && n.Bi(l + r)
            }
        }

        ip(t) {
            if (null === this.wv) return;
            const i = this.qv(), n = this.Hv(), s = this.Tv ? "right" : "left";
            i.forEach((i => {
                if (i.zi()) {
                    i.xt(f(this.Li)).K(t, n, this.Mv, s)
                }
            }))
        }

        np(t) {
            if (null === this.wv || null === this.Li) return;
            const i = this.nn.kv().qt(), n = [], s = this.nn.Kv(), e = i.Fc().Rn(s, this.Li);
            e.length && n.push(e);
            const r = this.Hv(), h = this.Tv ? "right" : "left";
            n.forEach((i => {
                i.forEach((i => {
                    i.xt(f(this.Li)).K(t, r, this.Mv, h)
                }))
            }))
        }

        rp(t) {
            this.Ov.style.cursor = 1 === t ? "ns-resize" : "default"
        }

        ao() {
            const t = this.$v();
            this.xv < t && this.nn.kv().qt().$l(), this.xv = t
        }

        Uv() {
            return z(this.mo.fontSize, this.mo.fontFamily)
        }
    }

    function Ts(t, i) {
        var n, s;
        return null !== (s = null === (n = t.ra) || void 0 === n ? void 0 : n.call(t, i)) && void 0 !== s ? s : []
    }

    function Ps(t, i) {
        var n, s;
        return null !== (s = null === (n = t.Pn) || void 0 === n ? void 0 : n.call(t, i)) && void 0 !== s ? s : []
    }

    function Rs(t, i) {
        var n, s;
        return null !== (s = null === (n = t.Qi) || void 0 === n ? void 0 : n.call(t, i)) && void 0 !== s ? s : []
    }

    function Ds(t, i) {
        var n, s;
        return null !== (s = null === (n = t.na) || void 0 === n ? void 0 : n.call(t, i)) && void 0 !== s ? s : []
    }

    class Os {
        constructor(t, i) {
            this.wv = Gn({
                width: 0,
                height: 0
            }), this.lp = null, this.ap = null, this.op = null, this._p = !1, this.up = new k, this.cp = new k, this.dp = 0, this.fp = !1, this.vp = null, this.pp = !1, this.mp = null, this.bp = null, this.Sv = !1, this.yv = () => {
                this.Sv || null === this.wp || this.Ui().Fh()
            }, this.Cv = () => {
                this.Sv || null === this.wp || this.Ui().Fh()
            }, this.gp = t, this.wp = i, this.wp.z_().l(this.Mp.bind(this), this, !0), this.xp = document.createElement("td"), this.xp.style.padding = "0", this.xp.style.position = "relative";
            const n = document.createElement("div");
            n.style.width = "100%", n.style.height = "100%", n.style.position = "relative", n.style.overflow = "hidden", this.Sp = document.createElement("td"), this.Sp.style.padding = "0", this.yp = document.createElement("td"), this.yp.style.padding = "0", this.xp.appendChild(n), this.Av = us(n, Gn({
                width: 16,
                height: 16
            })), this.Av.subscribeSuggestedBitmapSizeChanged(this.yv);
            const s = this.Av.canvasElement;
            s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.Bv = us(n, Gn({
                width: 16,
                height: 16
            })), this.Bv.subscribeSuggestedBitmapSizeChanged(this.Cv);
            const e = this.Bv.canvasElement;
            e.style.position = "absolute", e.style.zIndex = "2", e.style.left = "0", e.style.top = "0", this.kp = document.createElement("tr"), this.kp.appendChild(this.Sp), this.kp.appendChild(this.xp), this.kp.appendChild(this.yp), this.Cp(), this.Wv = new ms(this.Bv.canvasElement, this, {
                Nf: () => null === this.vp && !this.gp.W().handleScroll.vertTouchDrag,
                Ff: () => null === this.vp && !this.gp.W().handleScroll.horzTouchDrag
            })
        }

        S() {
            null !== this.lp && this.lp.S(), null !== this.ap && this.ap.S(), this.Bv.unsubscribeSuggestedBitmapSizeChanged(this.Cv), cs(this.Bv.canvasElement), this.Bv.dispose(), this.Av.unsubscribeSuggestedBitmapSizeChanged(this.yv), cs(this.Av.canvasElement), this.Av.dispose(), null !== this.wp && this.wp.z_().p(this), this.Wv.S()
        }

        Kv() {
            return f(this.wp)
        }

        Tp(t) {
            null !== this.wp && this.wp.z_().p(this), this.wp = t, null !== this.wp && this.wp.z_().l(Os.prototype.Mp.bind(this), this, !0), this.Cp()
        }

        kv() {
            return this.gp
        }

        jv() {
            return this.kp
        }

        Cp() {
            if (null !== this.wp && (this.Pp(), 0 !== this.Ui().Mt().length)) {
                if (null !== this.lp) {
                    const t = this.wp.S_();
                    this.lp.Ji(f(t))
                }
                if (null !== this.ap) {
                    const t = this.wp.y_();
                    this.ap.Ji(f(t))
                }
            }
        }

        Rp() {
            null !== this.lp && this.lp.gt(), null !== this.ap && this.ap.gt()
        }

        v_() {
            return null !== this.wp ? this.wp.v_() : 0
        }

        p_(t) {
            this.wp && this.wp.p_(t)
        }

        Vf(t) {
            if (!this.wp) return;
            this.Dp();
            const i = t.localX, n = t.localY;
            this.Op(i, n, t)
        }

        Qf(t) {
            this.Dp(), this.Ap(), this.Op(t.localX, t.localY, t)
        }

        zf(t) {
            var i;
            if (!this.wp) return;
            this.Dp();
            const n = t.localX, s = t.localY;
            this.Op(n, s, t);
            const e = this.br(n, s);
            this.gp.Bp(null !== (i = null == e ? void 0 : e.bv) && void 0 !== i ? i : null), this.Ui().Vc(e && {
                zc: e.zc,
                pv: e.pv
            })
        }

        Xf(t) {
            null !== this.wp && (this.Dp(), this.Vp(t))
        }

        Tf(t) {
            null !== this.wp && this.zp(this.cp, t)
        }

        Sf(t) {
            this.Tf(t)
        }

        Hf(t) {
            this.Dp(), this.Ep(t), this.Op(t.localX, t.localY, t)
        }

        Yf(t) {
            null !== this.wp && (this.Dp(), this.fp = !1, this.Ip(t))
        }

        qf(t) {
            null !== this.wp && this.Vp(t)
        }

        _v(t) {
            if (this.fp = !0, null === this.vp) {
                const i = {x: t.localX, y: t.localY};
                this.Lp(i, i, t)
            }
        }

        ov(t) {
            null !== this.wp && (this.Dp(), this.wp.qt().Vc(null), this.Np())
        }

        Fp() {
            return this.up
        }

        Wp() {
            return this.cp
        }

        sv() {
            this.dp = 1, this.Ui().Un()
        }

        ev(t, i) {
            if (!this.gp.W().handleScale.pinch) return;
            const n = 5 * (i - this.dp);
            this.dp = i, this.Ui().Uc(t.et, n)
        }

        Gf(t) {
            this.fp = !1, this.pp = null !== this.vp, this.Ap();
            const i = this.Ui().Fc();
            null !== this.vp && i.Tt() && (this.mp = {x: i.Kt(), y: i.Zt()}, this.vp = {x: t.localX, y: t.localY})
        }

        Wf(t) {
            if (null === this.wp) return;
            const i = t.localX, n = t.localY;
            if (null === this.vp) this.Ep(t); else {
                this.pp = !1;
                const s = f(this.mp), e = s.x + (i - this.vp.x), r = s.y + (n - this.vp.y);
                this.Op(e, r, t)
            }
        }

        Uf(t) {
            0 === this.kv().W().trackingMode.exitMode && (this.pp = !0), this.jp(), this.Ip(t)
        }

        br(t, i) {
            const n = this.wp;
            return null === n ? null : function (t, i, n) {
                const s = t.No(), e = function (t, i, n) {
                    var s, e;
                    let r, h;
                    for (const o of t) {
                        const t = null !== (e = null === (s = o.oa) || void 0 === s ? void 0 : s.call(o, i, n)) && void 0 !== e ? e : [];
                        for (const i of t) l = i.zOrder, (!(a = null == r ? void 0 : r.zOrder) || "top" === l && "top" !== a || "normal" === l && "bottom" === a) && (r = i, h = o)
                    }
                    var l, a;
                    return r && h ? {mv: r, zc: h} : null
                }(s, i, n);
                if ("top" === (null == e ? void 0 : e.mv.zOrder)) return Ss(e);
                for (const r of s) {
                    if (e && e.zc === r && "bottom" !== e.mv.zOrder && !e.mv.isBackground) return Ss(e);
                    const s = ys(r.Pn(t), i, n);
                    if (null !== s) return {zc: r, fv: s.fv, pv: s.pv};
                    if (e && e.zc === r && "bottom" !== e.mv.zOrder && e.mv.isBackground) return Ss(e)
                }
                return (null == e ? void 0 : e.mv) ? Ss(e) : null
            }(n, t, i)
        }

        Hp(t, i) {
            f("left" === i ? this.lp : this.ap).Yv(Gn({width: t, height: this.wv.height}))
        }

        $p() {
            return this.wv
        }

        Yv(t) {
            Jn(this.wv, t) || (this.wv = t, this.Sv = !0, this.Av.resizeCanvasElement(t), this.Bv.resizeCanvasElement(t), this.Sv = !1, this.xp.style.width = t.width + "px", this.xp.style.height = t.height + "px")
        }

        Up() {
            const t = f(this.wp);
            t.x_(t.S_()), t.x_(t.y_());
            for (const i of t.Ta()) if (t.dr(i)) {
                const n = i.At();
                null !== n && t.x_(n), i.On()
            }
        }

        sp() {
            return this.Av.bitmapSize
        }

        ep(t, i, n) {
            const s = this.sp();
            s.width > 0 && s.height > 0 && t.drawImage(this.Av.canvasElement, i, n)
        }

        Zv(t) {
            if (0 === t) return;
            if (null === this.wp) return;
            if (t > 1 && this.Up(), null !== this.lp && this.lp.Zv(t), null !== this.ap && this.ap.Zv(t), 1 !== t) {
                this.Av.applySuggestedBitmapSize();
                const t = ss(this.Av);
                null !== t && (t.useBitmapCoordinateSpace((t => {
                    this.Jv(t)
                })), this.wp && (this.qp(t, Ts), this.Yp(t), this.Xp(t), this.qp(t, Ps), this.qp(t, Rs)))
            }
            this.Bv.applySuggestedBitmapSize();
            const i = ss(this.Bv);
            null !== i && (i.useBitmapCoordinateSpace((({context: t, bitmapSize: i}) => {
                t.clearRect(0, 0, i.width, i.height)
            })), this.Kp(i), this.qp(i, Ds))
        }

        Zp() {
            return this.lp
        }

        Gp() {
            return this.ap
        }

        Qv(t, i) {
            this.qp(t, i)
        }

        Mp() {
            null !== this.wp && this.wp.z_().p(this), this.wp = null
        }

        Vp(t) {
            this.zp(this.up, t)
        }

        zp(t, i) {
            const n = i.localX, s = i.localY;
            t.M() && t.m(this.Ui().kt().Bu(n), {x: n, y: s}, i)
        }

        Jv({context: t, bitmapSize: i}) {
            const {width: n, height: s} = i, e = this.Ui(), r = e.q(), h = e.od();
            r === h ? Y(t, 0, 0, n, s, h) : G(t, 0, 0, n, s, r, h)
        }

        Yp(t) {
            const i = f(this.wp).E_().Wh().xt();
            null !== i && i.K(t, !1)
        }

        Xp(t) {
            const i = this.Ui().Nc();
            this.Jp(t, Ps, ds, i), this.Jp(t, Ps, fs, i)
        }

        Kp(t) {
            this.Jp(t, Ps, fs, this.Ui().Fc())
        }

        qp(t, i) {
            const n = f(this.wp).No();
            for (const s of n) this.Jp(t, i, ds, s);
            for (const s of n) this.Jp(t, i, fs, s)
        }

        Jp(t, i, n, s) {
            const e = f(this.wp), r = e.qt().Bc(), h = null !== r && r.zc === s,
                l = null !== r && h && void 0 !== r.pv ? r.pv.gr : void 0;
            vs(i, (i => n(i, t, h, l)), s, e)
        }

        Pp() {
            if (null === this.wp) return;
            const t = this.gp, i = this.wp.S_().W().visible, n = this.wp.y_().W().visible;
            i || null === this.lp || (this.Sp.removeChild(this.lp.jv()), this.lp.S(), this.lp = null), n || null === this.ap || (this.yp.removeChild(this.ap.jv()), this.ap.S(), this.ap = null);
            const s = t.qt().sd();
            i && null === this.lp && (this.lp = new Cs(this, t.W(), s, "left"), this.Sp.appendChild(this.lp.jv())), n && null === this.ap && (this.ap = new Cs(this, t.W(), s, "right"), this.yp.appendChild(this.ap.jv()))
        }

        Qp(t) {
            return t.uv && this.fp || null !== this.vp
        }

        tm(t) {
            return Math.max(0, Math.min(t, this.wv.width - 1))
        }

        im(t) {
            return Math.max(0, Math.min(t, this.wv.height - 1))
        }

        Op(t, i, n) {
            this.Ui().Jc(this.tm(t), this.im(i), n, f(this.wp))
        }

        Np() {
            this.Ui().td()
        }

        jp() {
            this.pp && (this.vp = null, this.Np())
        }

        Lp(t, i, n) {
            this.vp = t, this.pp = !1, this.Op(i.x, i.y, n);
            const s = this.Ui().Fc();
            this.mp = {x: s.Kt(), y: s.Zt()}
        }

        Ui() {
            return this.gp.qt()
        }

        Ip(t) {
            if (!this._p) return;
            const i = this.Ui(), n = this.Kv();
            if (i.D_(n, n.vn()), this.op = null, this._p = !1, i.Kc(), null !== this.bp) {
                const t = performance.now(), n = i.kt();
                this.bp.Dr(n.Iu(), t), this.bp.Yu(t) || i.Xn(this.bp)
            }
        }

        Dp() {
            this.vp = null
        }

        Ap() {
            if (!this.wp) return;
            if (this.Ui().Un(), document.activeElement !== document.body && document.activeElement !== document.documentElement) f(document.activeElement).blur(); else {
                const t = document.getSelection();
                null !== t && t.removeAllRanges()
            }
            !this.wp.vn().Fi() && this.Ui().kt().Fi()
        }

        Ep(t) {
            if (null === this.wp) return;
            const i = this.Ui(), n = i.kt();
            if (n.Fi()) return;
            const s = this.gp.W(), e = s.handleScroll, r = s.kineticScroll;
            if ((!e.pressedMouseMove || t.uv) && (!e.horzTouchDrag && !e.vertTouchDrag || !t.uv)) return;
            const h = this.wp.vn(), l = performance.now();
            if (null !== this.op || this.Qp(t) || (this.op = {
                x: t.clientX,
                y: t.clientY,
                yd: l,
                nm: t.localX,
                sm: t.localY
            }), null !== this.op && !this._p && (this.op.x !== t.clientX || this.op.y !== t.clientY)) {
                if (t.uv && r.touch || !t.uv && r.mouse) {
                    const t = n.he();
                    this.bp = new _s(.2 / t, 7 / t, .997, 15 / t), this.bp.Nd(n.Iu(), this.op.yd)
                } else this.bp = null;
                h.Fi() || i.P_(this.wp, h, t.localY), i.Yc(t.localX), this._p = !0
            }
            this._p && (h.Fi() || i.R_(this.wp, h, t.localY), i.Xc(t.localX), null !== this.bp && this.bp.Nd(n.Iu(), l))
        }
    }

    class As {
        constructor(t, i, n, s, e) {
            this.bt = !0, this.wv = Gn({
                width: 0,
                height: 0
            }), this.yv = () => this.Zv(3), this.Tv = "left" === t, this.yc = n.sd, this.cn = i, this.rm = s, this.hm = e, this.Ov = document.createElement("div"), this.Ov.style.width = "25px", this.Ov.style.height = "100%", this.Ov.style.overflow = "hidden", this.Av = us(this.Ov, Gn({
                width: 16,
                height: 16
            })), this.Av.subscribeSuggestedBitmapSizeChanged(this.yv)
        }

        S() {
            this.Av.unsubscribeSuggestedBitmapSizeChanged(this.yv), cs(this.Av.canvasElement), this.Av.dispose()
        }

        jv() {
            return this.Ov
        }

        $p() {
            return this.wv
        }

        Yv(t) {
            Jn(this.wv, t) || (this.wv = t, this.Av.resizeCanvasElement(t), this.Ov.style.width = `${t.width}px`, this.Ov.style.height = `${t.height}px`, this.bt = !0)
        }

        Zv(t) {
            if (t < 3 && !this.bt) return;
            if (0 === this.wv.width || 0 === this.wv.height) return;
            this.bt = !1, this.Av.applySuggestedBitmapSize();
            const i = ss(this.Av);
            null !== i && i.useBitmapCoordinateSpace((t => {
                this.Jv(t), this.Ve(t)
            }))
        }

        sp() {
            return this.Av.bitmapSize
        }

        ep(t, i, n) {
            const s = this.sp();
            s.width > 0 && s.height > 0 && t.drawImage(this.Av.canvasElement, i, n)
        }

        Ve({context: t, bitmapSize: i, horizontalPixelRatio: n, verticalPixelRatio: s}) {
            if (!this.rm()) return;
            t.fillStyle = this.cn.timeScale.borderColor;
            const e = Math.floor(this.yc.W().C * n), r = Math.floor(this.yc.W().C * s), h = this.Tv ? i.width - e : 0;
            t.fillRect(h, 0, e, r)
        }

        Jv({context: t, bitmapSize: i}) {
            Y(t, 0, 0, i.width, i.height, this.hm())
        }
    }

    function Bs(t) {
        return i => {
            var n, s;
            return null !== (s = null === (n = i.aa) || void 0 === n ? void 0 : n.call(i, t)) && void 0 !== s ? s : []
        }
    }

    const Vs = Bs("normal"), zs = Bs("top"), Es = Bs("bottom");

    class Is {
        constructor(t, i) {
            this.lm = null, this.am = null, this.k = null, this.om = !1, this.wv = Gn({
                width: 0,
                height: 0
            }), this._m = new k, this.Mv = new Qt(5), this.Sv = !1, this.yv = () => {
                this.Sv || this.gp.qt().Fh()
            }, this.Cv = () => {
                this.Sv || this.gp.qt().Fh()
            }, this.gp = t, this.N_ = i, this.cn = t.W().layout, this.um = document.createElement("tr"), this.dm = document.createElement("td"), this.dm.style.padding = "0", this.fm = document.createElement("td"), this.fm.style.padding = "0", this.Ov = document.createElement("td"), this.Ov.style.height = "25px", this.Ov.style.padding = "0", this.vm = document.createElement("div"), this.vm.style.width = "100%", this.vm.style.height = "100%", this.vm.style.position = "relative", this.vm.style.overflow = "hidden", this.Ov.appendChild(this.vm), this.Av = us(this.vm, Gn({
                width: 16,
                height: 16
            })), this.Av.subscribeSuggestedBitmapSizeChanged(this.yv);
            const n = this.Av.canvasElement;
            n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Bv = us(this.vm, Gn({
                width: 16,
                height: 16
            })), this.Bv.subscribeSuggestedBitmapSizeChanged(this.Cv);
            const s = this.Bv.canvasElement;
            s.style.position = "absolute", s.style.zIndex = "2", s.style.left = "0", s.style.top = "0", this.um.appendChild(this.dm), this.um.appendChild(this.Ov), this.um.appendChild(this.fm), this.pm(), this.gp.qt().f_().l(this.pm.bind(this), this), this.Wv = new ms(this.Bv.canvasElement, this, {
                Nf: () => !0,
                Ff: () => !this.gp.W().handleScroll.horzTouchDrag
            })
        }

        S() {
            this.Wv.S(), null !== this.lm && this.lm.S(), null !== this.am && this.am.S(), this.Bv.unsubscribeSuggestedBitmapSizeChanged(this.Cv), cs(this.Bv.canvasElement), this.Bv.dispose(), this.Av.unsubscribeSuggestedBitmapSizeChanged(this.yv), cs(this.Av.canvasElement), this.Av.dispose()
        }

        jv() {
            return this.um
        }

        bm() {
            return this.lm
        }

        wm() {
            return this.am
        }

        Qf(t) {
            if (this.om) return;
            this.om = !0;
            const i = this.gp.qt();
            !i.kt().Fi() && this.gp.W().handleScale.axisPressedMouseMove.time && i.$c(t.localX)
        }

        Gf(t) {
            this.Qf(t)
        }

        tv() {
            const t = this.gp.qt();
            !t.kt().Fi() && this.om && (this.om = !1, this.gp.W().handleScale.axisPressedMouseMove.time && t.Gc())
        }

        Hf(t) {
            const i = this.gp.qt();
            !i.kt().Fi() && this.gp.W().handleScale.axisPressedMouseMove.time && i.Zc(t.localX)
        }

        Wf(t) {
            this.Hf(t)
        }

        Yf() {
            this.om = !1;
            const t = this.gp.qt();
            t.kt().Fi() && !this.gp.W().handleScale.axisPressedMouseMove.time || t.Gc()
        }

        Uf() {
            this.Yf()
        }

        Tf() {
            this.gp.W().handleScale.axisDoubleClickReset.time && this.gp.qt().Zn()
        }

        Sf() {
            this.Tf()
        }

        Vf() {
            this.gp.qt().W().handleScale.axisPressedMouseMove.time && this.rp(1)
        }

        ov() {
            this.rp(0)
        }

        $p() {
            return this.wv
        }

        gm() {
            return this._m
        }

        Mm(t, i, n) {
            Jn(this.wv, t) || (this.wv = t, this.Sv = !0, this.Av.resizeCanvasElement(t), this.Bv.resizeCanvasElement(t), this.Sv = !1, this.Ov.style.width = `${t.width}px`, this.Ov.style.height = `${t.height}px`, this._m.m(t)), null !== this.lm && this.lm.Yv(Gn({
                width: i,
                height: t.height
            })), null !== this.am && this.am.Yv(Gn({width: n, height: t.height}))
        }

        xm() {
            const t = this.Sm();
            return Math.ceil(t.C + t.T + t.P + t.L + t.B + t.ym)
        }

        gt() {
            this.gp.qt().kt().Ia()
        }

        sp() {
            return this.Av.bitmapSize
        }

        ep(t, i, n) {
            const s = this.sp();
            s.width > 0 && s.height > 0 && t.drawImage(this.Av.canvasElement, i, n)
        }

        Zv(t) {
            if (0 === t) return;
            if (1 !== t) {
                this.Av.applySuggestedBitmapSize();
                const i = ss(this.Av);
                null !== i && (i.useBitmapCoordinateSpace((t => {
                    this.Jv(t), this.Ve(t), this.km(i, Es)
                })), this.tp(i), this.km(i, Vs)), null !== this.lm && this.lm.Zv(t), null !== this.am && this.am.Zv(t)
            }
            this.Bv.applySuggestedBitmapSize();
            const i = ss(this.Bv);
            null !== i && (i.useBitmapCoordinateSpace((({context: t, bitmapSize: i}) => {
                t.clearRect(0, 0, i.width, i.height)
            })), this.Cm([...this.gp.qt().Mt(), this.gp.qt().Fc()], i), this.km(i, zs))
        }

        km(t, i) {
            const n = this.gp.qt().Mt();
            for (const s of n) vs(i, (i => ds(i, t, !1, void 0)), s, void 0);
            for (const s of n) vs(i, (i => fs(i, t, !1, void 0)), s, void 0)
        }

        Jv({context: t, bitmapSize: i}) {
            Y(t, 0, 0, i.width, i.height, this.gp.qt().od())
        }

        Ve({context: t, bitmapSize: i, verticalPixelRatio: n}) {
            if (this.gp.W().timeScale.borderVisible) {
                t.fillStyle = this.Tm();
                const s = Math.max(1, Math.floor(this.Sm().C * n));
                t.fillRect(0, 0, i.width, s)
            }
        }

        tp(t) {
            const i = this.gp.qt().kt(), n = i.Ia();
            if (!n || 0 === n.length) return;
            const s = this.N_.maxTickMarkWeight(n), e = this.Sm(), r = i.W();
            r.borderVisible && r.ticksVisible && t.useBitmapCoordinateSpace((({
                                                                                  context: t,
                                                                                  horizontalPixelRatio: i,
                                                                                  verticalPixelRatio: s
                                                                              }) => {
                t.strokeStyle = this.Tm(), t.fillStyle = this.Tm();
                const r = Math.max(1, Math.floor(i)), h = Math.floor(.5 * i);
                t.beginPath();
                const l = Math.round(e.T * s);
                for (let s = n.length; s--;) {
                    const e = Math.round(n[s].coord * i);
                    t.rect(e - h, 0, r, l)
                }
                t.fill()
            })), t.useMediaCoordinateSpace((({context: t}) => {
                const i = e.C + e.T + e.L + e.P / 2;
                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.$(), t.font = this.Uv();
                for (const e of n) if (e.weight < s) {
                    const n = e.needAlignCoordinate ? this.Pm(t, e.coord, e.label) : e.coord;
                    t.fillText(e.label, n, i)
                }
                t.font = this.Rm();
                for (const e of n) if (e.weight >= s) {
                    const n = e.needAlignCoordinate ? this.Pm(t, e.coord, e.label) : e.coord;
                    t.fillText(e.label, n, i)
                }
            }))
        }

        Pm(t, i, n) {
            const s = this.Mv.Si(t, n), e = s / 2, r = Math.floor(i - e) + .5;
            return r < 0 ? i += Math.abs(0 - r) : r + s > this.wv.width && (i -= Math.abs(this.wv.width - (r + s))), i
        }

        Cm(t, i) {
            const n = this.Sm();
            for (const s of t) for (const t of s.tn()) t.xt().K(i, n)
        }

        Tm() {
            return this.gp.W().timeScale.borderColor
        }

        $() {
            return this.cn.textColor
        }

        j() {
            return this.cn.fontSize
        }

        Uv() {
            return z(this.j(), this.cn.fontFamily)
        }

        Rm() {
            return z(this.j(), this.cn.fontFamily, "bold")
        }

        Sm() {
            null === this.k && (this.k = {
                C: 1,
                N: NaN,
                L: NaN,
                B: NaN,
                Hi: NaN,
                T: 5,
                P: NaN,
                R: "",
                ji: new Qt,
                ym: 0
            });
            const t = this.k, i = this.Uv();
            if (t.R !== i) {
                const n = this.j();
                t.P = n, t.R = i, t.L = 3 * n / 12, t.B = 3 * n / 12, t.Hi = 9 * n / 12, t.N = 0, t.ym = 4 * n / 12, t.ji.ir()
            }
            return this.k
        }

        rp(t) {
            this.Ov.style.cursor = 1 === t ? "ew-resize" : "default"
        }

        pm() {
            const t = this.gp.qt(), i = t.W();
            i.leftPriceScale.visible || null === this.lm || (this.dm.removeChild(this.lm.jv()), this.lm.S(), this.lm = null), i.rightPriceScale.visible || null === this.am || (this.fm.removeChild(this.am.jv()), this.am.S(), this.am = null);
            const n = {sd: this.gp.qt().sd()}, s = () => i.leftPriceScale.borderVisible && t.kt().W().borderVisible,
                e = () => t.od();
            i.leftPriceScale.visible && null === this.lm && (this.lm = new As("left", i, n, s, e), this.dm.appendChild(this.lm.jv())), i.rightPriceScale.visible && null === this.am && (this.am = new As("right", i, n, s, e), this.fm.appendChild(this.am.jv()))
        }
    }

    const Ls = !!es && !!navigator.userAgentData && navigator.userAgentData.brands.some((t => t.brand.includes("Chromium"))) && !!es && ((null === (Ns = null === navigator || void 0 === navigator ? void 0 : navigator.userAgentData) || void 0 === Ns ? void 0 : Ns.platform) ? "Windows" === navigator.userAgentData.platform : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
    var Ns;

    class Fs {
        constructor(t, i, n) {
            var s;
            this.Dm = [], this.Om = 0, this.Qa = 0, this.e_ = 0, this.Am = 0, this.Bm = 0, this.Vm = null, this.zm = !1, this.up = new k, this.cp = new k, this.Mc = new k, this.Em = null, this.Im = null, this.Lm = t, this.cn = i, this.N_ = n, this.um = document.createElement("div"), this.um.classList.add("tv-lightweight-charts"), this.um.style.overflow = "hidden", this.um.style.direction = "ltr", this.um.style.width = "100%", this.um.style.height = "100%", (s = this.um).style.userSelect = "none", s.style.webkitUserSelect = "none", s.style.msUserSelect = "none", s.style.MozUserSelect = "none", s.style.webkitTapHighlightColor = "transparent", this.Nm = document.createElement("table"), this.Nm.setAttribute("cellspacing", "0"), this.um.appendChild(this.Nm), this.Fm = this.Wm.bind(this), Ws(this.cn) && this.jm(!0), this.Ui = new An(this.Sc.bind(this), this.cn, n), this.qt().Wc().l(this.Hm.bind(this), this), this.$m = new Is(this, this.N_), this.Nm.appendChild(this.$m.jv());
            const e = i.autoSize && this.Um();
            let r = this.cn.width, h = this.cn.height;
            if (e || 0 === r || 0 === h) {
                const i = t.getBoundingClientRect();
                r = r || i.width, h = h || i.height
            }
            this.qm(r, h), this.Ym(), t.appendChild(this.um), this.Xm(), this.Ui.kt().Gu().l(this.Ui.$l.bind(this.Ui), this), this.Ui.f_().l(this.Ui.$l.bind(this.Ui), this)
        }

        qt() {
            return this.Ui
        }

        W() {
            return this.cn
        }

        Km() {
            return this.Dm
        }

        Zm() {
            return this.$m
        }

        S() {
            this.jm(!1), 0 !== this.Om && window.cancelAnimationFrame(this.Om), this.Ui.Wc().p(this), this.Ui.kt().Gu().p(this), this.Ui.f_().p(this), this.Ui.S();
            for (const t of this.Dm) this.Nm.removeChild(t.jv()), t.Fp().p(this), t.Wp().p(this), t.S();
            this.Dm = [], f(this.$m).S(), null !== this.um.parentElement && this.um.parentElement.removeChild(this.um), this.Mc.S(), this.up.S(), this.cp.S(), this.Gm()
        }

        qm(t, i, n = !1) {
            if (this.Qa === i && this.e_ === t) return;
            const s = function (t) {
                const i = Math.floor(t.width), n = Math.floor(t.height);
                return Gn({width: i - i % 2, height: n - n % 2})
            }(Gn({width: t, height: i}));
            this.Qa = s.height, this.e_ = s.width;
            const e = this.Qa + "px", r = this.e_ + "px";
            f(this.um).style.height = e, f(this.um).style.width = r, this.Nm.style.height = e, this.Nm.style.width = r, n ? this.Jm(at.es(), performance.now()) : this.Ui.$l()
        }

        Zv(t) {
            void 0 === t && (t = at.es());
            for (let i = 0; i < this.Dm.length; i++) this.Dm[i].Zv(t.Hn(i).Fn);
            this.cn.timeScale.visible && this.$m.Zv(t.jn())
        }

        Nh(t) {
            const i = Ws(this.cn);
            this.Ui.Nh(t);
            const n = Ws(this.cn);
            n !== i && this.jm(n), this.Xm(), this.Qm(t)
        }

        Fp() {
            return this.up
        }

        Wp() {
            return this.cp
        }

        Wc() {
            return this.Mc
        }

        tb() {
            null !== this.Vm && (this.Jm(this.Vm, performance.now()), this.Vm = null);
            const t = this.ib(null), i = document.createElement("canvas");
            i.width = t.width, i.height = t.height;
            const n = f(i.getContext("2d"));
            return this.ib(n), i
        }

        nb(t) {
            if ("left" === t && !this.sb()) return 0;
            if ("right" === t && !this.eb()) return 0;
            if (0 === this.Dm.length) return 0;
            return f("left" === t ? this.Dm[0].Zp() : this.Dm[0].Gp()).Xv()
        }

        rb() {
            return this.cn.autoSize && null !== this.Em
        }

        hb() {
            return this.um
        }

        Bp(t) {
            this.Im = t, this.Im ? this.hb().style.setProperty("cursor", t) : this.hb().style.removeProperty("cursor")
        }

        lb() {
            return this.Im
        }

        ab() {
            return d(this.Dm[0]).$p()
        }

        Qm(t) {
            (void 0 !== t.autoSize || !this.Em || void 0 === t.width && void 0 === t.height) && (t.autoSize && !this.Em && this.Um(), !1 === t.autoSize && null !== this.Em && this.Gm(), t.autoSize || void 0 === t.width && void 0 === t.height || this.qm(t.width || this.e_, t.height || this.Qa))
        }

        ib(t) {
            let i = 0, n = 0;
            const s = this.Dm[0], e = (i, n) => {
                let s = 0;
                for (let e = 0; e < this.Dm.length; e++) {
                    const r = this.Dm[e], h = f("left" === i ? r.Zp() : r.Gp()), l = h.sp();
                    null !== t && h.ep(t, n, s), s += l.height
                }
            };
            if (this.sb()) {
                e("left", 0);
                i += f(s.Zp()).sp().width
            }
            for (let s = 0; s < this.Dm.length; s++) {
                const e = this.Dm[s], r = e.sp();
                null !== t && e.ep(t, i, n), n += r.height
            }
            if (i += s.sp().width, this.eb()) {
                e("right", i);
                i += f(s.Gp()).sp().width
            }
            const r = (i, n, s) => {
                f("left" === i ? this.$m.bm() : this.$m.wm()).ep(f(t), n, s)
            };
            if (this.cn.timeScale.visible) {
                const i = this.$m.sp();
                if (null !== t) {
                    let e = 0;
                    this.sb() && (r("left", e, n), e = f(s.Zp()).sp().width), this.$m.ep(t, e, n), e += i.width, this.eb() && r("right", e, n)
                }
                n += i.height
            }
            return Gn({width: i, height: n})
        }

        ob() {
            let t = 0, i = 0, n = 0;
            for (const s of this.Dm) this.sb() && (i = Math.max(i, f(s.Zp()).$v(), this.cn.leftPriceScale.minimumWidth)), this.eb() && (n = Math.max(n, f(s.Gp()).$v(), this.cn.rightPriceScale.minimumWidth)), t += s.v_();
            i = ls(i), n = ls(n);
            const s = this.e_, e = this.Qa, r = Math.max(s - i - n, 0), h = this.cn.timeScale.visible;
            let l = h ? Math.max(this.$m.xm(), this.cn.timeScale.minimumHeight) : 0;
            var a;
            l = (a = l) + a % 2;
            const o = 0 + l, _ = e < o ? 0 : e - o, u = _ / t;
            let c = 0;
            for (let t = 0; t < this.Dm.length; ++t) {
                const s = this.Dm[t];
                s.Tp(this.Ui.Lc()[t]);
                let e = 0, h = 0;
                h = t === this.Dm.length - 1 ? _ - c : Math.round(s.v_() * u), e = Math.max(h, 2), c += e, s.Yv(Gn({
                    width: r,
                    height: e
                })), this.sb() && s.Hp(i, "left"), this.eb() && s.Hp(n, "right"), s.Kv() && this.Ui.jc(s.Kv(), e)
            }
            this.$m.Mm(Gn({
                width: h ? r : 0,
                height: l
            }), h ? i : 0, h ? n : 0), this.Ui.m_(r), this.Am !== i && (this.Am = i), this.Bm !== n && (this.Bm = n)
        }

        jm(t) {
            t ? this.um.addEventListener("wheel", this.Fm, {passive: !1}) : this.um.removeEventListener("wheel", this.Fm)
        }

        _b(t) {
            switch (t.deltaMode) {
                case t.DOM_DELTA_PAGE:
                    return 120;
                case t.DOM_DELTA_LINE:
                    return 32
            }
            return Ls ? 1 / window.devicePixelRatio : 1
        }

        Wm(t) {
            if (!(0 !== t.deltaX && this.cn.handleScroll.mouseWheel || 0 !== t.deltaY && this.cn.handleScale.mouseWheel)) return;
            const i = this._b(t), n = i * t.deltaX / 100, s = -i * t.deltaY / 100;
            if (t.cancelable && t.preventDefault(), 0 !== s && this.cn.handleScale.mouseWheel) {
                const i = Math.sign(s) * Math.min(1, Math.abs(s)), n = t.clientX - this.um.getBoundingClientRect().left;
                this.qt().Uc(n, i)
            }
            0 !== n && this.cn.handleScroll.mouseWheel && this.qt().qc(-80 * n)
        }

        Jm(t, i) {
            var n;
            const s = t.jn();
            3 === s && this.ub(), 3 !== s && 2 !== s || (this.cb(t), this.fb(t, i), this.$m.gt(), this.Dm.forEach((t => {
                t.Rp()
            })), 3 === (null === (n = this.Vm) || void 0 === n ? void 0 : n.jn()) && (this.Vm.ts(t), this.ub(), this.cb(this.Vm), this.fb(this.Vm, i), t = this.Vm, this.Vm = null)), this.Zv(t)
        }

        fb(t, i) {
            for (const n of t.Qn()) this.ns(n, i)
        }

        cb(t) {
            const i = this.Ui.Lc();
            for (let n = 0; n < i.length; n++) t.Hn(n).Wn && i[n].B_()
        }

        ns(t, i) {
            const n = this.Ui.kt();
            switch (t.qn) {
                case 0:
                    n.Qu();
                    break;
                case 1:
                    n.tc(t.Bt);
                    break;
                case 2:
                    n.Gn(t.Bt);
                    break;
                case 3:
                    n.Jn(t.Bt);
                    break;
                case 4:
                    n.Fu();
                    break;
                case 5:
                    t.Bt.Yu(i) || n.Jn(t.Bt.Xu(i))
            }
        }

        Sc(t) {
            null !== this.Vm ? this.Vm.ts(t) : this.Vm = t, this.zm || (this.zm = !0, this.Om = window.requestAnimationFrame((t => {
                if (this.zm = !1, this.Om = 0, null !== this.Vm) {
                    const i = this.Vm;
                    this.Vm = null, this.Jm(i, t);
                    for (const n of i.Qn()) if (5 === n.qn && !n.Bt.Yu(t)) {
                        this.qt().Xn(n.Bt);
                        break
                    }
                }
            })))
        }

        ub() {
            this.Ym()
        }

        Ym() {
            const t = this.Ui.Lc(), i = t.length, n = this.Dm.length;
            for (let t = i; t < n; t++) {
                const t = d(this.Dm.pop());
                this.Nm.removeChild(t.jv()), t.Fp().p(this), t.Wp().p(this), t.S()
            }
            for (let s = n; s < i; s++) {
                const i = new Os(this, t[s]);
                i.Fp().l(this.vb.bind(this), this), i.Wp().l(this.pb.bind(this), this), this.Dm.push(i), this.Nm.insertBefore(i.jv(), this.$m.jv())
            }
            for (let n = 0; n < i; n++) {
                const i = t[n], s = this.Dm[n];
                s.Kv() !== i ? s.Tp(i) : s.Cp()
            }
            this.Xm(), this.ob()
        }

        mb(t, i, n) {
            var s;
            const e = new Map;
            if (null !== t) {
                this.Ui.Mt().forEach((i => {
                    const n = i.zn().nl(t);
                    null !== n && e.set(i, n)
                }))
            }
            let r;
            if (null !== t) {
                const i = null === (s = this.Ui.kt().qi(t)) || void 0 === s ? void 0 : s.originalTime;
                void 0 !== i && (r = i)
            }
            const h = this.qt().Bc(), l = null !== h && h.zc instanceof Yi ? h.zc : void 0,
                a = null !== h && void 0 !== h.pv ? h.pv.wr : void 0;
            return {
                bb: r,
                se: null != t ? t : void 0,
                wb: null != i ? i : void 0,
                gb: l,
                Mb: e,
                xb: a,
                Sb: null != n ? n : void 0
            }
        }

        vb(t, i, n) {
            this.up.m((() => this.mb(t, i, n)))
        }

        pb(t, i, n) {
            this.cp.m((() => this.mb(t, i, n)))
        }

        Hm(t, i, n) {
            this.Mc.m((() => this.mb(t, i, n)))
        }

        Xm() {
            const t = this.cn.timeScale.visible ? "" : "none";
            this.$m.jv().style.display = t
        }

        sb() {
            return this.Dm[0].Kv().S_().W().visible
        }

        eb() {
            return this.Dm[0].Kv().y_().W().visible
        }

        Um() {
            return "ResizeObserver" in window && (this.Em = new ResizeObserver((t => {
                const i = t.find((t => t.target === this.Lm));
                i && this.qm(i.contentRect.width, i.contentRect.height)
            })), this.Em.observe(this.Lm, {box: "border-box"}), !0)
        }

        Gm() {
            null !== this.Em && this.Em.disconnect(), this.Em = null
        }
    }

    function Ws(t) {
        return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel)
    }

    function js(t, i) {
        var n = {};
        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && i.indexOf(s) < 0 && (n[s] = t[s]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var e = 0;
            for (s = Object.getOwnPropertySymbols(t); e < s.length; e++) i.indexOf(s[e]) < 0 && Object.prototype.propertyIsEnumerable.call(t, s[e]) && (n[s[e]] = t[s[e]])
        }
        return n
    }

    function Hs(t, i, n, s) {
        const e = n.value, r = {se: i, ut: t, Bt: [e, e, e, e], bb: s};
        return void 0 !== n.color && (r.O = n.color), r
    }

    function $s(t, i, n, s) {
        const e = n.value, r = {se: i, ut: t, Bt: [e, e, e, e], bb: s};
        return void 0 !== n.lineColor && (r._t = n.lineColor), void 0 !== n.topColor && (r.Ts = n.topColor), void 0 !== n.bottomColor && (r.Ps = n.bottomColor), r
    }

    function Us(t, i, n, s) {
        const e = n.value, r = {se: i, ut: t, Bt: [e, e, e, e], bb: s};
        return void 0 !== n.topLineColor && (r.Pe = n.topLineColor), void 0 !== n.bottomLineColor && (r.Re = n.bottomLineColor), void 0 !== n.topFillColor1 && (r.Se = n.topFillColor1), void 0 !== n.topFillColor2 && (r.ye = n.topFillColor2), void 0 !== n.bottomFillColor1 && (r.ke = n.bottomFillColor1), void 0 !== n.bottomFillColor2 && (r.Ce = n.bottomFillColor2), r
    }

    function qs(t, i, n, s) {
        const e = {se: i, ut: t, Bt: [n.open, n.high, n.low, n.close], bb: s};
        return void 0 !== n.color && (e.O = n.color), e
    }

    function Ys(t, i, n, s) {
        const e = {se: i, ut: t, Bt: [n.open, n.high, n.low, n.close], bb: s};
        return void 0 !== n.color && (e.O = n.color), void 0 !== n.borderColor && (e.Vt = n.borderColor), void 0 !== n.wickColor && (e.$h = n.wickColor), e
    }

    function Xs(t, i, n, s, e) {
        const r = d(e)(n), h = Math.max(...r), l = Math.min(...r), a = r[r.length - 1], o = [a, h, l, a],
            _ = n, {time: u, color: c} = _;
        return {se: i, ut: t, Bt: o, bb: s, He: js(_, ["time", "color"]), O: c}
    }

    function Ks(t) {
        return void 0 !== t.Bt
    }

    function Zs(t, i) {
        return void 0 !== i.customValues && (t.yb = i.customValues), t
    }

    function Gs(t) {
        return (i, n, s, e, r, h) => function (t, i) {
            return i ? i(t) : void 0 === (n = t).open && void 0 === n.value;
            var n
        }(s, h) ? Zs({ut: i, se: n, bb: e}, s) : Zs(t(i, n, s, e, r), s)
    }

    function Js(t) {
        return {
            Candlestick: Gs(Ys),
            Bar: Gs(qs),
            Area: Gs($s),
            Baseline: Gs(Us),
            Histogram: Gs(Hs),
            Line: Gs(Hs),
            Custom: Gs(Xs)
        }[t]
    }

    function Qs(t) {
        return {se: 0, kb: new Map, ia: t}
    }

    function te(t, i) {
        if (void 0 !== t && 0 !== t.length) return {Cb: i.key(t[0].ut), Tb: i.key(t[t.length - 1].ut)}
    }

    function ie(t) {
        let i;
        return t.forEach((t => {
            void 0 === i && (i = t.bb)
        })), d(i)
    }

    class ne {
        constructor(t) {
            this.Pb = new Map, this.Rb = new Map, this.Db = new Map, this.Ob = [], this.N_ = t
        }

        S() {
            this.Pb.clear(), this.Rb.clear(), this.Db.clear(), this.Ob = []
        }

        Ab(t, i) {
            let n = 0 !== this.Pb.size, s = !1;
            const e = this.Rb.get(t);
            if (void 0 !== e) if (1 === this.Rb.size) n = !1, s = !0, this.Pb.clear(); else for (const i of this.Ob) i.pointData.kb.delete(t) && (s = !0);
            let r = [];
            if (0 !== i.length) {
                const n = i.map((t => t.time)), e = this.N_.createConverterToInternalObj(i), h = Js(t.Xh()), l = t.ga(),
                    a = t.Ma();
                r = i.map(((i, r) => {
                    const o = e(i.time), _ = this.N_.key(o);
                    let u = this.Pb.get(_);
                    void 0 === u && (u = Qs(o), this.Pb.set(_, u), s = !0);
                    const c = h(o, u.se, i, n[r], l, a);
                    return u.kb.set(t, c), c
                }))
            }
            n && this.Bb(), this.Vb(t, r);
            let h = -1;
            if (s) {
                const t = [];
                this.Pb.forEach((i => {
                    t.push({timeWeight: 0, time: i.ia, pointData: i, originalTime: ie(i.kb)})
                })), t.sort(((t, i) => this.N_.key(t.time) - this.N_.key(i.time))), h = this.zb(t)
            }
            return this.Eb(t, h, function (t, i, n) {
                const s = te(t, n), e = te(i, n);
                if (void 0 !== s && void 0 !== e) return {Xl: s.Tb >= e.Tb && s.Cb >= e.Cb}
            }(this.Rb.get(t), e, this.N_))
        }

        hd(t) {
            return this.Ab(t, [])
        }

        Ib(t, i) {
            const n = i;
            !function (t) {
                void 0 === t.bb && (t.bb = t.time)
            }(n), this.N_.preprocessData(i);
            const s = this.N_.createConverterToInternalObj([i])(i.time), e = this.Db.get(t);
            if (void 0 !== e && this.N_.key(s) < this.N_.key(e)) throw new Error(`Cannot update oldest data, last time=${e}, new time=${s}`);
            let r = this.Pb.get(this.N_.key(s));
            const h = void 0 === r;
            void 0 === r && (r = Qs(s), this.Pb.set(this.N_.key(s), r));
            const l = Js(t.Xh()), a = t.ga(), o = t.Ma(), _ = l(s, r.se, i, n.bb, a, o);
            r.kb.set(t, _), this.Lb(t, _);
            const u = {Xl: Ks(_)};
            if (!h) return this.Eb(t, -1, u);
            const c = {timeWeight: 0, time: r.ia, pointData: r, originalTime: ie(r.kb)},
                d = Dt(this.Ob, this.N_.key(c.time), ((t, i) => this.N_.key(t.time) < i));
            this.Ob.splice(d, 0, c);
            for (let t = d; t < this.Ob.length; ++t) se(this.Ob[t].pointData, t);
            return this.N_.fillWeightsForPoints(this.Ob, d), this.Eb(t, d, u)
        }

        Lb(t, i) {
            let n = this.Rb.get(t);
            void 0 === n && (n = [], this.Rb.set(t, n));
            const s = 0 !== n.length ? n[n.length - 1] : null;
            null === s || this.N_.key(i.ut) > this.N_.key(s.ut) ? Ks(i) && n.push(i) : Ks(i) ? n[n.length - 1] = i : n.splice(-1, 1), this.Db.set(t, i.ut)
        }

        Vb(t, i) {
            0 !== i.length ? (this.Rb.set(t, i.filter(Ks)), this.Db.set(t, i[i.length - 1].ut)) : (this.Rb.delete(t), this.Db.delete(t))
        }

        Bb() {
            for (const t of this.Ob) 0 === t.pointData.kb.size && this.Pb.delete(this.N_.key(t.time))
        }

        zb(t) {
            let i = -1;
            for (let n = 0; n < this.Ob.length && n < t.length; ++n) {
                const s = this.Ob[n], e = t[n];
                if (this.N_.key(s.time) !== this.N_.key(e.time)) {
                    i = n;
                    break
                }
                e.timeWeight = s.timeWeight, se(e.pointData, n)
            }
            if (-1 === i && this.Ob.length !== t.length && (i = Math.min(this.Ob.length, t.length)), -1 === i) return -1;
            for (let n = i; n < t.length; ++n) se(t[n].pointData, n);
            return this.N_.fillWeightsForPoints(t, i), this.Ob = t, i
        }

        Nb() {
            if (0 === this.Rb.size) return null;
            let t = 0;
            return this.Rb.forEach((i => {
                0 !== i.length && (t = Math.max(t, i[i.length - 1].se))
            })), t
        }

        Eb(t, i, n) {
            const s = {Fb: new Map, kt: {Au: this.Nb()}};
            if (-1 !== i) this.Rb.forEach(((i, e) => {
                s.Fb.set(e, {He: i, Wb: e === t ? n : void 0})
            })), this.Rb.has(t) || s.Fb.set(t, {He: [], Wb: n}), s.kt.jb = this.Ob, s.kt.Hb = i; else {
                const i = this.Rb.get(t);
                s.Fb.set(t, {He: i || [], Wb: n})
            }
            return s
        }
    }

    function se(t, i) {
        t.se = i, t.kb.forEach((t => {
            t.se = i
        }))
    }

    function ee(t) {
        const i = {value: t.Bt[3], time: t.bb};
        return void 0 !== t.yb && (i.customValues = t.yb), i
    }

    function re(t) {
        const i = ee(t);
        return void 0 !== t.O && (i.color = t.O), i
    }

    function he(t) {
        const i = ee(t);
        return void 0 !== t._t && (i.lineColor = t._t), void 0 !== t.Ts && (i.topColor = t.Ts), void 0 !== t.Ps && (i.bottomColor = t.Ps), i
    }

    function le(t) {
        const i = ee(t);
        return void 0 !== t.Pe && (i.topLineColor = t.Pe), void 0 !== t.Re && (i.bottomLineColor = t.Re), void 0 !== t.Se && (i.topFillColor1 = t.Se), void 0 !== t.ye && (i.topFillColor2 = t.ye), void 0 !== t.ke && (i.bottomFillColor1 = t.ke), void 0 !== t.Ce && (i.bottomFillColor2 = t.Ce), i
    }

    function ae(t) {
        const i = {open: t.Bt[0], high: t.Bt[1], low: t.Bt[2], close: t.Bt[3], time: t.bb};
        return void 0 !== t.yb && (i.customValues = t.yb), i
    }

    function oe(t) {
        const i = ae(t);
        return void 0 !== t.O && (i.color = t.O), i
    }

    function _e(t) {
        const i = ae(t), {O: n, Vt: s, $h: e} = t;
        return void 0 !== n && (i.color = n), void 0 !== s && (i.borderColor = s), void 0 !== e && (i.wickColor = e), i
    }

    function ue(t) {
        return {Area: he, Line: re, Baseline: le, Histogram: re, Bar: oe, Candlestick: _e, Custom: ce}[t]
    }

    function ce(t) {
        const i = t.bb;
        return Object.assign(Object.assign({}, t.He), {time: i})
    }

    const de = {
        vertLine: {
            color: "#9598A1",
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: "#131722"
        },
        horzLine: {
            color: "#9598A1",
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: "#131722"
        },
        mode: 1
    }, fe = {
        vertLines: {color: "#D6DCDE", style: 0, visible: !0},
        horzLines: {color: "#D6DCDE", style: 0, visible: !0}
    }, ve = {background: {type: "solid", color: "#FFFFFF"}, textColor: "#191919", fontSize: 12, fontFamily: V}, pe = {
        autoScale: !0,
        mode: 0,
        invertScale: !1,
        alignLabels: !0,
        borderVisible: !0,
        borderColor: "#2B2B43",
        entireTextOnly: !1,
        visible: !1,
        ticksVisible: !1,
        scaleMargins: {bottom: .1, top: .2},
        minimumWidth: 0
    }, me = {
        rightOffset: 0,
        barSpacing: 6,
        minBarSpacing: .5,
        fixLeftEdge: !1,
        fixRightEdge: !1,
        lockVisibleTimeRangeOnResize: !1,
        rightBarStaysOnScroll: !1,
        borderVisible: !0,
        borderColor: "#2B2B43",
        visible: !0,
        timeVisible: !1,
        secondsVisible: !0,
        shiftVisibleRangeOnNewBar: !0,
        allowShiftVisibleRangeOnWhitespaceReplacement: !1,
        ticksVisible: !1,
        uniformDistribution: !1,
        minimumHeight: 0
    }, be = {
        color: "rgba(0, 0, 0, 0)",
        visible: !1,
        fontSize: 48,
        fontFamily: V,
        fontStyle: "",
        text: "",
        horzAlign: "center",
        vertAlign: "center"
    };

    function we() {
        return {
            width: 0,
            height: 0,
            autoSize: !1,
            layout: ve,
            crosshair: de,
            grid: fe,
            overlayPriceScales: Object.assign({}, pe),
            leftPriceScale: Object.assign(Object.assign({}, pe), {visible: !1}),
            rightPriceScale: Object.assign(Object.assign({}, pe), {visible: !0}),
            timeScale: me,
            watermark: be,
            localization: {locale: es ? navigator.language : "", dateFormat: "dd MMM 'yy"},
            handleScroll: {mouseWheel: !0, pressedMouseMove: !0, horzTouchDrag: !0, vertTouchDrag: !0},
            handleScale: {
                axisPressedMouseMove: {time: !0, price: !0},
                axisDoubleClickReset: {time: !0, price: !0},
                mouseWheel: !0,
                pinch: !0
            },
            kineticScroll: {mouse: !1, touch: !0},
            trackingMode: {exitMode: 1}
        }
    }

    class ge {
        constructor(t, i) {
            this.$b = t, this.Ub = i
        }

        applyOptions(t) {
            this.$b.qt().Ec(this.Ub, t)
        }

        options() {
            return this.Li().W()
        }

        width() {
            return lt(this.Ub) ? this.$b.nb(this.Ub) : 0
        }

        Li() {
            return f(this.$b.qt().Ic(this.Ub)).At
        }
    }

    function Me(t, i, n) {
        const s = js(t, ["time", "originalTime"]), e = Object.assign({time: i}, s);
        return void 0 !== n && (e.originalTime = n), e
    }

    const xe = {
        color: "#FF0000",
        price: 0,
        lineStyle: 2,
        lineWidth: 1,
        lineVisible: !0,
        axisLabelVisible: !0,
        title: "",
        axisLabelColor: "",
        axisLabelTextColor: ""
    };

    class Se {
        constructor(t) {
            this.Vh = t
        }

        applyOptions(t) {
            this.Vh.Nh(t)
        }

        options() {
            return this.Vh.W()
        }

        qb() {
            return this.Vh
        }
    }

    class ye {
        constructor(t, i, n, s, e) {
            this.Yb = new k, this.Is = t, this.Xb = i, this.Kb = n, this.N_ = e, this.Zb = s
        }

        S() {
            this.Yb.S()
        }

        priceFormatter() {
            return this.Is.ca()
        }

        priceToCoordinate(t) {
            const i = this.Is.Pt();
            return null === i ? null : this.Is.At().Ot(t, i.Bt)
        }

        coordinateToPrice(t) {
            const i = this.Is.Pt();
            return null === i ? null : this.Is.At().pn(t, i.Bt)
        }

        barsInLogicalRange(t) {
            if (null === t) return null;
            const i = new Mn(new bn(t.from, t.to)).iu(), n = this.Is.zn();
            if (n.Fi()) return null;
            const s = n.nl(i.Os(), 1), e = n.nl(i.di(), -1), r = f(n.Qh()), h = f(n.Vn());
            if (null !== s && null !== e && s.se > e.se) return {barsBefore: t.from - r, barsAfter: h - t.to};
            const l = {
                barsBefore: null === s || s.se === r ? t.from - r : s.se - r,
                barsAfter: null === e || e.se === h ? h - t.to : h - e.se
            };
            return null !== s && null !== e && (l.from = s.bb, l.to = e.bb), l
        }

        setData(t) {
            this.N_, this.Is.Xh(), this.Xb.Gb(this.Is, t), this.Jb("full")
        }

        update(t) {
            this.Is.Xh(), this.Xb.Qb(this.Is, t), this.Jb("update")
        }

        dataByIndex(t, i) {
            const n = this.Is.zn().nl(t, i);
            if (null === n) return null;
            return ue(this.seriesType())(n)
        }

        data() {
            const t = ue(this.seriesType());
            return this.Is.zn().ie().map((i => t(i)))
        }

        subscribeDataChanged(t) {
            this.Yb.l(t)
        }

        unsubscribeDataChanged(t) {
            this.Yb.v(t)
        }

        setMarkers(t) {
            this.N_;
            const i = t.map((t => Me(t, this.N_.convertHorzItemToInternal(t.time), t.time)));
            this.Is.Zl(i)
        }

        markers() {
            return this.Is.Gl().map((t => Me(t, t.originalTime, void 0)))
        }

        applyOptions(t) {
            this.Is.Nh(t)
        }

        options() {
            return O(this.Is.W())
        }

        priceScale() {
            return this.Kb.priceScale(this.Is.At().xa())
        }

        createPriceLine(t) {
            const i = C(O(xe), t), n = this.Is.Jl(i);
            return new Se(n)
        }

        removePriceLine(t) {
            this.Is.Ql(t.qb())
        }

        seriesType() {
            return this.Is.Xh()
        }

        attachPrimitive(t) {
            this.Is.ba(t), t.attached && t.attached({
                chart: this.Zb,
                series: this,
                requestUpdate: () => this.Is.qt().$l()
            })
        }

        detachPrimitive(t) {
            this.Is.wa(t), t.detached && t.detached()
        }

        Jb(t) {
            this.Yb.M() && this.Yb.m(t)
        }
    }

    class ke {
        constructor(t, i, n) {
            this.tw = new k, this.uu = new k, this._m = new k, this.Ui = t, this.wl = t.kt(), this.$m = i, this.wl.Ku().l(this.iw.bind(this)), this.wl.Zu().l(this.nw.bind(this)), this.$m.gm().l(this.sw.bind(this)), this.N_ = n
        }

        S() {
            this.wl.Ku().p(this), this.wl.Zu().p(this), this.$m.gm().p(this), this.tw.S(), this.uu.S(), this._m.S()
        }

        scrollPosition() {
            return this.wl.Iu()
        }

        scrollToPosition(t, i) {
            i ? this.wl.qu(t, 1e3) : this.Ui.Jn(t)
        }

        scrollToRealTime() {
            this.wl.Uu()
        }

        getVisibleRange() {
            const t = this.wl.ku();
            return null === t ? null : {from: t.from.originalTime, to: t.to.originalTime}
        }

        setVisibleRange(t) {
            const i = {from: this.N_.convertHorzItemToInternal(t.from), to: this.N_.convertHorzItemToInternal(t.to)},
                n = this.wl.Ru(i);
            this.Ui.ld(n)
        }

        getVisibleLogicalRange() {
            const t = this.wl.yu();
            return null === t ? null : {from: t.Os(), to: t.di()}
        }

        setVisibleLogicalRange(t) {
            c(t.from <= t.to, "The from index cannot be after the to index."), this.Ui.ld(t)
        }

        resetTimeScale() {
            this.Ui.Zn()
        }

        fitContent() {
            this.Ui.Qu()
        }

        logicalToCoordinate(t) {
            const i = this.Ui.kt();
            return i.Fi() ? null : i.It(t)
        }

        coordinateToLogical(t) {
            return this.wl.Fi() ? null : this.wl.Bu(t)
        }

        timeToCoordinate(t) {
            const i = this.N_.convertHorzItemToInternal(t), n = this.wl.ka(i, !1);
            return null === n ? null : this.wl.It(n)
        }

        coordinateToTime(t) {
            const i = this.Ui.kt(), n = i.Bu(t), s = i.qi(n);
            return null === s ? null : s.originalTime
        }

        width() {
            return this.$m.$p().width
        }

        height() {
            return this.$m.$p().height
        }

        subscribeVisibleTimeRangeChange(t) {
            this.tw.l(t)
        }

        unsubscribeVisibleTimeRangeChange(t) {
            this.tw.v(t)
        }

        subscribeVisibleLogicalRangeChange(t) {
            this.uu.l(t)
        }

        unsubscribeVisibleLogicalRangeChange(t) {
            this.uu.v(t)
        }

        subscribeSizeChange(t) {
            this._m.l(t)
        }

        unsubscribeSizeChange(t) {
            this._m.v(t)
        }

        applyOptions(t) {
            this.wl.Nh(t)
        }

        options() {
            return Object.assign(Object.assign({}, O(this.wl.W())), {barSpacing: this.wl.he()})
        }

        iw() {
            this.tw.M() && this.tw.m(this.getVisibleRange())
        }

        nw() {
            this.uu.M() && this.uu.m(this.getVisibleLogicalRange())
        }

        sw(t) {
            this._m.m(t.width, t.height)
        }
    }

    function Ce(t) {
        if (void 0 === t || "custom" === t.type) return;
        const i = t;
        void 0 !== i.minMove && void 0 === i.precision && (i.precision = function (t) {
            if (t >= 1) return 0;
            let i = 0;
            for (; i < 8; i++) {
                const n = Math.round(t);
                if (Math.abs(n - t) < 1e-8) return i;
                t *= 10
            }
            return i
        }(i.minMove))
    }

    function Te(t) {
        return function (t) {
            if (D(t.handleScale)) {
                const i = t.handleScale;
                t.handleScale = {
                    axisDoubleClickReset: {time: i, price: i},
                    axisPressedMouseMove: {time: i, price: i},
                    mouseWheel: i,
                    pinch: i
                }
            } else if (void 0 !== t.handleScale) {
                const {axisPressedMouseMove: i, axisDoubleClickReset: n} = t.handleScale;
                D(i) && (t.handleScale.axisPressedMouseMove = {
                    time: i,
                    price: i
                }), D(n) && (t.handleScale.axisDoubleClickReset = {time: n, price: n})
            }
            const i = t.handleScroll;
            D(i) && (t.handleScroll = {horzTouchDrag: i, vertTouchDrag: i, mouseWheel: i, pressedMouseMove: i})
        }(t), t
    }

    class Pe {
        constructor(t, i, n) {
            this.ew = new Map, this.rw = new Map, this.hw = new k, this.lw = new k, this.aw = new k, this.ow = new ne(i);
            const s = void 0 === n ? O(we()) : C(O(we()), Te(n));
            this.N_ = i, this.$b = new Fs(t, s, i), this.$b.Fp().l((t => {
                this.hw.M() && this.hw.m(this._w(t()))
            }), this), this.$b.Wp().l((t => {
                this.lw.M() && this.lw.m(this._w(t()))
            }), this), this.$b.Wc().l((t => {
                this.aw.M() && this.aw.m(this._w(t()))
            }), this);
            const e = this.$b.qt();
            this.uw = new ke(e, this.$b.Zm(), this.N_)
        }

        remove() {
            this.$b.Fp().p(this), this.$b.Wp().p(this), this.$b.Wc().p(this), this.uw.S(), this.$b.S(), this.ew.clear(), this.rw.clear(), this.hw.S(), this.lw.S(), this.aw.S(), this.ow.S()
        }

        resize(t, i, n) {
            this.autoSizeActive() || this.$b.qm(t, i, n)
        }

        addCustomSeries(t, i) {
            const n = v(t), s = Object.assign(Object.assign({}, h), n.defaultOptions());
            return this.cw("Custom", s, i, n)
        }

        addAreaSeries(t) {
            return this.cw("Area", s, t)
        }

        addBaselineSeries(t) {
            return this.cw("Baseline", e, t)
        }

        addBarSeries(t) {
            return this.cw("Bar", i, t)
        }

        addCandlestickSeries(i = {}) {
            return function (t) {
                void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor)
            }(i), this.cw("Candlestick", t, i)
        }

        addHistogramSeries(t) {
            return this.cw("Histogram", r, t)
        }

        addLineSeries(t) {
            return this.cw("Line", n, t)
        }

        removeSeries(t) {
            const i = d(this.ew.get(t)), n = this.ow.hd(i);
            this.$b.qt().hd(i), this.dw(n), this.ew.delete(t), this.rw.delete(i)
        }

        Gb(t, i) {
            this.dw(this.ow.Ab(t, i))
        }

        Qb(t, i) {
            this.dw(this.ow.Ib(t, i))
        }

        subscribeClick(t) {
            this.hw.l(t)
        }

        unsubscribeClick(t) {
            this.hw.v(t)
        }

        subscribeCrosshairMove(t) {
            this.aw.l(t)
        }

        unsubscribeCrosshairMove(t) {
            this.aw.v(t)
        }

        subscribeDblClick(t) {
            this.lw.l(t)
        }

        unsubscribeDblClick(t) {
            this.lw.v(t)
        }

        priceScale(t) {
            return new ge(this.$b, t)
        }

        timeScale() {
            return this.uw
        }

        applyOptions(t) {
            this.$b.Nh(Te(t))
        }

        options() {
            return this.$b.W()
        }

        takeScreenshot() {
            return this.$b.tb()
        }

        autoSizeActive() {
            return this.$b.rb()
        }

        chartElement() {
            return this.$b.hb()
        }

        paneSize() {
            const t = this.$b.ab();
            return {height: t.height, width: t.width}
        }

        setCrosshairPosition(t, i, n) {
            const s = this.ew.get(n);
            if (void 0 === s) return;
            const e = this.$b.qt().cr(s);
            null !== e && this.$b.qt().Qc(t, i, e)
        }

        clearCrosshairPosition() {
            this.$b.qt().td(!0)
        }

        cw(t, i, n = {}, s) {
            Ce(n.priceFormat);
            const e = C(O(l), O(i), n), r = this.$b.qt().ed(t, e, s), h = new ye(r, this, this, this, this.N_);
            return this.ew.set(h, r), this.rw.set(r, h), h
        }

        dw(t) {
            const i = this.$b.qt();
            i.nd(t.kt.Au, t.kt.jb, t.kt.Hb), t.Fb.forEach(((t, i) => i.it(t.He, t.Wb))), i.zu()
        }

        fw(t) {
            return d(this.rw.get(t))
        }

        _w(t) {
            const i = new Map;
            t.Mb.forEach(((t, n) => {
                const s = n.Xh(), e = ue(s)(t);
                if ("Custom" !== s) c(function (t) {
                    return void 0 !== t.open || void 0 !== t.value
                }(e)); else {
                    const t = n.Ma();
                    c(!t || !1 === t(e))
                }
                i.set(this.fw(n), e)
            }));
            const n = void 0 === t.gb ? void 0 : this.fw(t.gb);
            return {
                time: t.bb,
                logical: t.se,
                point: t.wb,
                hoveredSeries: n,
                hoveredObjectId: t.xb,
                seriesData: i,
                sourceEvent: t.Sb
            }
        }
    }

    function Re(t, i, n) {
        let s;
        if (R(t)) {
            const i = document.getElementById(t);
            c(null !== i, `Cannot find element in DOM with id=${t}`), s = i
        } else s = t;
        const e = new Pe(s, i, n);
        return i.setOptions(e.options()), e
    }

    const De = Object.assign(Object.assign({}, l), h);
    var Oe = Object.freeze({
        __proto__: null,
        get ColorType() {
            return Dn
        },
        get CrosshairMode() {
            return rt
        },
        get LastPriceAnimationMode() {
            return Pn
        },
        get LineStyle() {
            return o
        },
        get LineType() {
            return a
        },
        get MismatchDirection() {
            return Bi
        },
        get PriceLineSource() {
            return Rn
        },
        get PriceScaleMode() {
            return cn
        },
        get TickMarkType() {
            return On
        },
        get TrackingModeExitMode() {
            return Tn
        },
        createChart: function (t, i) {
            return Re(t, new Zn, Zn.Td(i))
        },
        createChartEx: Re,
        customSeriesDefaultOptions: De,
        isBusinessDay: Bn,
        isUTCTimestamp: Vn,
        version: function () {
            return "4.1.2"
        }
    });
    window.LightweightCharts = Oe
}();