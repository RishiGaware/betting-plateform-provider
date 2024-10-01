! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, (function(e) {
    "use strict";
    var t = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        n = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        s = Math.PI / 180,
        r = Math.sin,
        i = Math.cos,
        a = Math.abs,
        o = Math.sqrt,
        h = 1e5,
        u = function(e) {
            return Math.round(e * h) / h || 0
        };

    function f(e, t, n, h, u, f, c, l, g) {
        if (e !== l || t !== g) {
            n = a(n), h = a(h);
            var x = u % 360 * s,
                d = i(x),
                p = r(x),
                y = Math.PI,
                v = 2 * y,
                M = (e - l) / 2,
                m = (t - g) / 2,
                w = d * M + p * m,
                b = -p * M + d * m,
                C = w * w,
                E = b * b,
                N = C / (n * n) + E / (h * h);
            N > 1 && (n = o(N) * n, h = o(N) * h);
            var P = n * n,
                A = h * h,
                S = (P * A - P * E - A * C) / (P * E + A * C);
            S < 0 && (S = 0);
            var D = (f === c ? -1 : 1) * o(S),
                L = D * (n * b / h),
                V = D * (-h * w / n),
                O = (e + l) / 2 + (d * L - p * V),
                _ = (t + g) / 2 + (p * L + d * V),
                j = (w - L) / n,
                q = (b - V) / h,
                G = (-w - L) / n,
                I = (-b - V) / h,
                R = j * j + q * q,
                z = (q < 0 ? -1 : 1) * Math.acos(j / o(R)),
                H = (j * I - q * G < 0 ? -1 : 1) * Math.acos((j * G + q * I) / o(R * (G * G + I * I)));
            isNaN(H) && (H = y), !c && H > 0 ? H -= v : c && H < 0 && (H += v), z %= v, H %= v;
            var Q, T = Math.ceil(a(H) / (v / 4)),
                Z = [],
                U = H / T,
                Y = 4 / 3 * r(U / 2) / (1 + i(U / 2)),
                k = d * n,
                B = p * n,
                F = p * -h,
                J = d * h;
            for (Q = 0; Q < T; Q++) w = i(u = z + Q * U), b = r(u), j = i(u += U), q = r(u), Z.push(w - Y * b, b + Y * w, j + Y * q, q - Y * j, j, q);
            for (Q = 0; Q < Z.length; Q += 2) w = Z[Q], b = Z[Q + 1], Z[Q] = w * k + b * F + O, Z[Q + 1] = w * B + b * J + _;
            return Z[Q - 2] = l, Z[Q - 1] = g, Z
        }
    }
    /*!
     * CustomEase 3.4.2
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var c, l, g = function() {
            return c || "undefined" != typeof window && (c = window.gsap) && c.registerPlugin && c
        },
        x = function() {
            (c = g()) ? (c.registerEase("_CE", M.create), l = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
        },
        d = function(e) {
            return ~~(1e3 * e + (e < 0 ? -.5 : .5)) / 1e3
        },
        p = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        y = /[cLlsSaAhHvVtTqQ]/g,
        v = function e(t, n, s, r, i, a, o, h, u, f, c) {
            var l, g = (t + s) / 2,
                x = (n + r) / 2,
                d = (s + i) / 2,
                p = (r + a) / 2,
                y = (i + o) / 2,
                v = (a + h) / 2,
                M = (g + d) / 2,
                m = (x + p) / 2,
                w = (d + y) / 2,
                b = (p + v) / 2,
                C = (M + w) / 2,
                E = (m + b) / 2,
                N = o - t,
                P = h - n,
                A = Math.abs((s - o) * P - (r - h) * N),
                S = Math.abs((i - o) * P - (a - h) * N);
            return f || (f = [{
                x: t,
                y: n
            }, {
                x: o,
                y: h
            }], c = 1), f.splice(c || f.length - 1, 0, {
                x: C,
                y: E
            }), (A + S) * (A + S) > u * (N * N + P * P) && (l = f.length, e(t, n, g, x, M, m, C, E, u, f, c), e(C, E, w, b, y, v, o, h, u, f, c + 1 + (f.length - l))), f
        },
        M = function() {
            function e(e, t, n) {
                l || x(), this.id = e, this.setData(t, n)
            }
            var s = e.prototype;
            return s.setData = function(e, s) {
                s = s || {};
                var r, i, o, h, u, l, g, x, d, M = (e = e || "0,0,1,1").match(p),
                    m = 1,
                    w = [],
                    b = [],
                    C = s.precision || 1,
                    E = C <= 1;
                if (this.data = e, (y.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (M = function(e) {
                        var s, r, i, o, h, u, c, l, g, x, d, p, y, v, M, m = (e + "").replace(n, (function(e) {
                                var t = +e;
                                return t < 1e-4 && t > -1e-4 ? 0 : t
                            })).match(t) || [],
                            w = [],
                            b = 0,
                            C = 0,
                            E = 2 / 3,
                            N = m.length,
                            P = 0,
                            A = "ERROR: malformed path: " + e,
                            S = function(e, t, n, s) {
                                x = (n - e) / 3, d = (s - t) / 3, c.push(e + x, t + d, n - x, s - d, n, s)
                            };
                        if (!e || !isNaN(m[0]) || isNaN(m[1])) return console.log(A), w;
                        for (s = 0; s < N; s++)
                            if (y = h, isNaN(m[s]) ? u = (h = m[s].toUpperCase()) !== m[s] : s--, i = +m[s + 1], o = +m[s + 2], u && (i += b, o += C), s || (l = i, g = o), "M" === h) c && (c.length < 8 ? w.length -= 1 : P += c.length), b = l = i, C = g = o, c = [i, o], w.push(c), s += 2, h = "L";
                            else if ("C" === h) c || (c = [0, 0]), u || (b = C = 0), c.push(i, o, b + 1 * m[s + 3], C + 1 * m[s + 4], b += 1 * m[s + 5], C += 1 * m[s + 6]), s += 6;
                        else if ("S" === h) x = b, d = C, "C" !== y && "S" !== y || (x += b - c[c.length - 4], d += C - c[c.length - 3]), u || (b = C = 0), c.push(x, d, i, o, b += 1 * m[s + 3], C += 1 * m[s + 4]), s += 4;
                        else if ("Q" === h) x = b + (i - b) * E, d = C + (o - C) * E, u || (b = C = 0), b += 1 * m[s + 3], C += 1 * m[s + 4], c.push(x, d, b + (i - b) * E, C + (o - C) * E, b, C), s += 4;
                        else if ("T" === h) x = b - c[c.length - 4], d = C - c[c.length - 3], c.push(b + x, C + d, i + (b + 1.5 * x - i) * E, o + (C + 1.5 * d - o) * E, b = i, C = o), s += 2;
                        else if ("H" === h) S(b, C, b = i, C), s += 1;
                        else if ("V" === h) S(b, C, b, C = i + (u ? C - b : 0)), s += 1;
                        else if ("L" === h || "Z" === h) "Z" === h && (i = l, o = g, c.closed = !0), ("L" === h || a(b - i) > .5 || a(C - o) > .5) && (S(b, C, i, o), "L" === h && (s += 2)), b = i, C = o;
                        else if ("A" === h) {
                            if (v = m[s + 4], M = m[s + 5], x = m[s + 6], d = m[s + 7], r = 7, v.length > 1 && (v.length < 3 ? (d = x, x = M, r--) : (d = M, x = v.substr(2), r -= 2), M = v.charAt(1), v = v.charAt(0)), p = f(b, C, +m[s + 1], +m[s + 2], +m[s + 3], +v, +M, (u ? b : 0) + 1 * x, (u ? C : 0) + 1 * d), s += r, p)
                                for (r = 0; r < p.length; r++) c.push(p[r]);
                            b = c[c.length - 2], C = c[c.length - 1]
                        } else console.log(A);
                        return (s = c.length) < 6 ? (w.pop(), s = 0) : c[0] === c[s - 2] && c[1] === c[s - 1] && (c.closed = !0), w.totalPoints = P + s, w
                    }(e)[0]), 4 === (r = M.length)) M.unshift(0, 0), M.push(1, 1), r = 8;
                else if ((r - 2) % 6) throw "Invalid CustomEase";
                for (0 == +M[0] && 1 == +M[r - 2] || function(e, t, n) {
                        n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
                        var s, r = -1 * +e[0],
                            i = -n,
                            a = e.length,
                            o = 1 / (+e[a - 2] + r),
                            h = -t || (Math.abs(+e[a - 1] - +e[1]) < .01 * (+e[a - 2] - +e[0]) ? function(e) {
                                var t, n = e.length,
                                    s = 1e20;
                                for (t = 1; t < n; t += 6) + e[t] < s && (s = +e[t]);
                                return s
                            }(e) + i : +e[a - 1] + i);
                        for (h = h ? 1 / h : -o, s = 0; s < a; s += 2) e[s] = (+e[s] + r) * o, e[s + 1] = (+e[s + 1] + i) * h
                    }(M, s.height, s.originY), this.segment = M, h = 2; h < r; h += 6) i = {
                    x: +M[h - 2],
                    y: +M[h - 1]
                }, o = {
                    x: +M[h + 4],
                    y: +M[h + 5]
                }, w.push(i, o), v(i.x, i.y, +M[h], +M[h + 1], +M[h + 2], +M[h + 3], o.x, o.y, 1 / (2e5 * C), w, w.length - 1);
                for (r = w.length, h = 0; h < r; h++) g = w[h], x = w[h - 1] || g, g.x > x.x || x.y !== g.y && x.x === g.x || g === x ? (x.cx = g.x - x.x, x.cy = g.y - x.y, x.n = g, x.nx = g.x, E && h > 1 && Math.abs(x.cy / x.cx - w[h - 2].cy / w[h - 2].cx) > 2 && (E = 0), x.cx < m && (x.cx ? m = x.cx : (x.cx = .001, h === r - 1 && (x.x -= .001, m = Math.min(m, .001), E = 0)))) : (w.splice(h--, 1), r--);
                if (u = 1 / (r = 1 / m + 1 | 0), l = 0, g = w[0], E) {
                    for (h = 0; h < r; h++) d = h * u, g.nx < d && (g = w[++l]), i = g.y + (d - g.x) / g.cx * g.cy, b[h] = {
                        x: d,
                        cx: u,
                        y: i,
                        cy: 0,
                        nx: 9
                    }, h && (b[h - 1].cy = i - b[h - 1].y);
                    b[r - 1].cy = w[w.length - 1].y - i
                } else {
                    for (h = 0; h < r; h++) g.nx < h * u && (g = w[++l]), b[h] = g;
                    l < w.length - 1 && (b[h - 1] = w[w.length - 2])
                }
                return this.ease = function(e) {
                    var t = b[e * r | 0] || b[r - 1];
                    return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy
                }, this.ease.custom = this, this.id && c.registerEase(this.id, this.ease), this
            }, s.getSVGData = function(t) {
                return e.getSVGData(this, t)
            }, e.create = function(t, n, s) {
                return new e(t, n, s).ease
            }, e.register = function(e) {
                c = e, x()
            }, e.get = function(e) {
                return c.parseEase(e)
            }, e.getSVGData = function(t, n) {
                var s, r, i, a, o, h, f, l, g, x, p = (n = n || {}).width || 100,
                    y = n.height || 100,
                    v = n.x || 0,
                    M = (n.y || 0) + y,
                    m = c.utils.toArray(n.path)[0];
                if (n.invert && (y = -y, M = 0), "string" == typeof t && (t = c.parseEase(t)), t.custom && (t = t.custom), t instanceof e) s = function(e) {
                    "number" == typeof e[0] && (e = [e]);
                    var t, n, s, r, i = "",
                        a = e.length;
                    for (n = 0; n < a; n++) {
                        for (r = e[n], i += "M" + u(r[0]) + "," + u(r[1]) + " C", t = r.length, s = 2; s < t; s++) i += u(r[s++]) + "," + u(r[s++]) + " " + u(r[s++]) + "," + u(r[s++]) + " " + u(r[s++]) + "," + u(r[s]) + " ";
                        r.closed && (i += "z")
                    }
                    return i
                }(function(e, t, n, s, r, i, a) {
                    for (var o, h, u, f, c, l = e.length; --l > -1;)
                        for (h = (o = e[l]).length, u = 0; u < h; u += 2) f = o[u], c = o[u + 1], o[u] = f * t + c * s + i, o[u + 1] = f * n + c * r + a;
                    return e._dirty = 1, e
                }([t.segment], p, 0, 0, -y, v, M));
                else {
                    for (s = [v, M], a = 1 / (f = Math.max(5, 200 * (n.precision || 1))), l = 5 / (f += 2), g = d(v + a * p), r = ((x = d(M + t(a) * -y)) - M) / (g - v), i = 2; i < f; i++) o = d(v + i * a * p), h = d(M + t(i * a) * -y), (Math.abs((h - x) / (o - g) - r) > l || i === f - 1) && (s.push(g, x), r = (h - x) / (o - g)), g = o, x = h;
                    s = "M" + s.join(",")
                }
                return m && m.setAttribute("d", s), s
            }, e
        }();
    g() && c.registerPlugin(M), M.version = "3.4.2", e.CustomEase = M, e.default = M, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));