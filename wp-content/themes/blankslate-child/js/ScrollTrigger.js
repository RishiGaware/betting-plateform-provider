! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, (function(e) {
    "use strict";
    /*!
     * ScrollTrigger 3.4.2
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var t, r, n, o, i, s, a, l, c, f, u, d, p, h, g, v, m, y, b, x, w, T, k, C, O, S = 1,
        P = [],
        M = [],
        E = Date.now,
        L = E(),
        _ = 0,
        R = 1,
        B = function(e) {
            return e
        },
        z = function() {
            return "undefined" != typeof window
        },
        A = function() {
            return t || z() && (t = window.gsap) && t.registerPlugin && t
        },
        N = function(e) {
            return !!~a.indexOf(e)
        },
        I = function(e, t) {
            return ~P.indexOf(e) && P[P.indexOf(e) + 1][t]
        },
        F = function(e, t) {
            var r = t.s,
                n = t.sc,
                o = M.indexOf(e),
                i = ~o ? M[o + 1] : I(e, r) || (N(e) ? n : function(t) {
                    return arguments.length ? e[r] = t : e[r]
                });
            return !~o && M.push(e, i), i
        },
        W = function(e) {
            return I(e, "getBoundingClientRect") || (N(e) ? function() {
                return Je.width = n.innerWidth, Je.height = n.innerHeight, Je
            } : function() {
                return ve(e)
            })
        },
        D = function(e, t) {
            var r = t.s,
                o = t.d2,
                a = t.d,
                l = t.a;
            return (r = "scroll" + o) && (l = I(e, r)) ? l() - W(e)()[a] : N(e) ? Math.max(i[r], s[r]) - (n["inner" + o] || i["client" + o] || s["client" + o]) : e[r] - e["offset" + o]
        },
        H = function(e, t) {
            for (var r = 0; r < w.length; r += 3)(!t || ~t.indexOf(w[r + 1])) && e(w[r], w[r + 1], w[r + 2])
        },
        q = function(e) {
            return "string" == typeof e
        },
        j = function(e) {
            return "function" == typeof e
        },
        X = function(e) {
            return "number" == typeof e
        },
        Y = function(e) {
            return "object" == typeof e
        },
        U = function(e) {
            return j(e) && e()
        },
        V = function(e, t) {
            return function() {
                var r = U(e),
                    n = U(t);
                return function() {
                    U(r), U(n)
                }
            }
        },
        Z = Math.abs,
        $ = "scrollLeft",
        G = "scrollTop",
        J = "left",
        K = "top",
        Q = "right",
        ee = "bottom",
        te = "width",
        re = "height",
        ne = "Right",
        oe = "Left",
        ie = "Top",
        se = "Bottom",
        ae = "padding",
        le = "margin",
        ce = "Width",
        fe = "Height",
        ue = "px",
        de = {
            s: $,
            p: J,
            p2: oe,
            os: Q,
            os2: ne,
            d: te,
            d2: ce,
            a: "x",
            sc: function(e) {
                return arguments.length ? n.scrollTo(e, pe.sc()) : n.pageXOffset || o.scrollLeft || i.scrollLeft || s.scrollLeft || 0
            }
        },
        pe = {
            s: G,
            p: K,
            p2: ie,
            os: ee,
            os2: se,
            d: re,
            d2: fe,
            a: "y",
            op: de,
            sc: function(e) {
                return arguments.length ? n.scrollTo(de.sc(), e) : n.pageYOffset || o.scrollTop || i.scrollTop || s.scrollTop || 0
            }
        },
        he = function(e) {
            return n.getComputedStyle(e)
        },
        ge = function(e, t) {
            for (var r in t) r in e || (e[r] = t[r]);
            return e
        },
        ve = function(e, r) {
            var n = r && "matrix(1, 0, 0, 1, 0, 0)" !== he(e)[m] && t.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                o = e.getBoundingClientRect();
            return n && n.progress(0).kill(), o
        },
        me = function(e, t) {
            var r = t.d2;
            return e["offset" + r] || e["client" + r] || 0
        },
        ye = function(e, t, r, n) {
            return r.split(",").forEach((function(r) {
                return e(t, r, n)
            }))
        },
        be = function(e, t, r) {
            return e.addEventListener(t, r, {
                passive: !0
            })
        },
        xe = function(e, t, r) {
            return e.removeEventListener(t, r)
        },
        we = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Te = {
            toggleActions: "play",
            anticipatePin: 0
        },
        ke = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        Ce = function(e, t) {
            if (q(e)) {
                var r = e.indexOf("="),
                    n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
                n && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in ke ? ke[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
            }
            return e
        },
        Oe = function(e, t, r, n, i, a, l) {
            var c = i.startColor,
                f = i.endColor,
                u = i.fontSize,
                d = i.indent,
                p = i.fontWeight,
                h = o.createElement("div"),
                g = N(r) || "fixed" === I(r, "pinType"),
                v = -1 !== e.indexOf("scroller"),
                m = g ? s : r,
                y = -1 !== e.indexOf("start"),
                b = y ? c : f,
                x = "border-color:" + b + ";font-size:" + u + ";color:" + b + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return x += "position:" + (v && g ? "fixed;" : "absolute;"), (v || !g) && (x += (n === pe ? Q : ee) + ":" + (a + parseFloat(d)) + "px;"), l && (x += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"), h._isStart = y, h.setAttribute("class", "gsap-marker-" + e), h.style.cssText = x, h.innerText = t || 0 === t ? e + "-" + t : e, m.insertBefore(h, m.children[0]), h._offset = h["offset" + n.op.d2], Se(h, 0, n, y), h
        },
        Se = function(e, r, n, o) {
            var i = {
                    display: "block"
                },
                s = n[o ? "os2" : "p2"],
                a = n[o ? "p2" : "os2"];
            e._isFlipped = o, i[n.a + "Percent"] = o ? -100 : 0, i[n.a] = o ? 1 : 0, i["border" + s + ce] = 1, i["border" + a + ce] = 0, i[n.p] = r, t.set(e, i)
        },
        Pe = [],
        Me = {},
        Ee = function() {
            return f || (f = c(Xe))
        },
        Le = function() {
            f || (f = c(Xe), _ || Ie("scrollStart"), _ = E())
        },
        _e = function() {
            return !g && l.restart(!0)
        },
        Re = {},
        Be = [],
        ze = [],
        Ae = function(e) {
            var r = t.ticker.frame,
                o = [],
                i = 0;
            if (O !== r || S) {
                for (De(); i < ze.length; i += 3) n.matchMedia(ze[i]).matches ? o.push(i) : De(1, ze[i]) || j(ze[i + 2]) && ze[i + 2]();
                for (We(), i = 0; i < o.length; i++) C = ze[o[i]], ze[o[i] + 2] = ze[o[i] + 1](e);
                C = 0, He(0, 1), O = r
            }
        },
        Ne = function e() {
            return xe(tt, "scrollEnd", e) || He(!0)
        },
        Ie = function(e) {
            return Re[e] && Re[e].map((function(e) {
                return e()
            })) || Be
        },
        Fe = [],
        We = function(e) {
            for (var t = 0; t < Fe.length; t += 4) e && Fe[t + 3] !== e || (Fe[t].style.cssText = Fe[t + 1], Fe[t + 2].uncache = 1)
        },
        De = function(e, t) {
            var r;
            for (y = 0; y < Pe.length; y++) r = Pe[y], t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
            We(t), t || Ie("revert")
        },
        He = function(e, t) {
            if (!_ || e) {
                var r = Ie("refreshInit");
                for (T && tt.sort(), t || De(), y = 0; y < Pe.length; y++) Pe[y].refresh();
                for (r.forEach((function(e) {
                        return e && e.render && e.render(-1)
                    })), y = Pe.length; y--;) Pe[y].scroll.rec = 0;
                Ie("refresh")
            } else be(tt, "scrollEnd", Ne)
        },
        qe = 0,
        je = 1,
        Xe = function() {
            var e = Pe.length,
                t = E(),
                r = t - L >= 50,
                n = e && Pe[0].scroll();
            if (je = qe > n ? -1 : 1, qe = n, r && (_ && !v && t - _ > 200 && (_ = 0, Ie("scrollEnd")), p = L, L = t), je < 0) {
                for (y = e; y--;) Pe[y].update(0, r);
                je = 1
            } else
                for (y = 0; y < e; y++) Pe[y] && Pe[y].update(0, r);
            f = 0
        },
        Ye = [J, K, ee, Q, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float"],
        Ue = Ye.concat([te, re, "boxSizing", "maxWidth", "maxHeight", "position", le, ae, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]),
        Ve = function(e, t, r, n) {
            if (e.parentNode !== t) {
                for (var o, i = Ye.length, s = t.style, a = e.style; i--;) s[o = Ye[i]] = r[o];
                s.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (s.display = "inline-block"), a.bottom = a.right = "auto", s.overflow = "visible", s.boxSizing = "border-box", s.width = me(e, de) + ue, s.height = me(e, pe) + ue, s.padding = a.margin = a.top = a.left = "0", $e(n), a.width = r.width, a.height = r.height, a.padding = r.padding, e.parentNode.insertBefore(t, e), t.appendChild(e)
            }
        },
        Ze = /([A-Z])/g,
        $e = function(e) {
            if (e)
                for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2) r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Ze, "-$1").toLowerCase())
        },
        Ge = function(e) {
            for (var t = Ue.length, r = e.style, n = [], o = 0; o < t; o++) n.push(Ue[o], r[Ue[o]]);
            return n.t = e, n
        },
        Je = {
            left: 0,
            top: 0
        },
        Ke = function(e, t, r, n, o, a, l, c, f, d, p, h) {
            if (j(e) && (e = e(c)), q(e) && "max" === e.substr(0, 3) && (e = h + ("=" === e.charAt(4) ? Ce("0" + e.substr(3), r) : 0)), X(e)) l && Se(l, r, n, !0);
            else {
                j(t) && (t = t(c));
                var g, v, m, y = u(t)[0] || s,
                    b = ve(y) || {},
                    x = e.split(" ");
                b && (b.left || b.top) || "none" !== he(y).display || (m = y.style.display, y.style.display = "block", b = ve(y), m ? y.style.display = m : y.style.removeProperty("display")), g = Ce(x[0], b[n.d]), v = Ce(x[1] || "0", r), e = b[n.p] - f[n.p] - d + g + o - v, l && Se(l, v, n, r - v < 20 || l._isStart && v > 20), r -= r - v
            }
            if (a) {
                var w = e + r,
                    T = a._isStart;
                h = "scroll" + n.d2, Se(a, w, n, T && w > 20 || !T && (p ? Math.max(s[h], i[h]) : a.parentNode[h]) <= w + 1), p && (f = ve(l), p && (a.style[n.op.p] = f[n.op.p] - n.op.m - a._offset + ue))
            }
            return Math.round(e)
        },
        Qe = /(?:webkit|moz|length)/i,
        et = function(e, r) {
            var n, o = F(e, r),
                i = "_scroll" + r.p2;
            return e[i] = o,
                function r(s, a, l, c, f) {
                    var u = r.tween,
                        d = a.onComplete,
                        p = {};
                    return u && u.kill(), n = o(), a[i] = s, a.modifiers = p, p[i] = function(e) {
                        return Math.abs(o() - n) > 7 ? (u.kill(), r.tween = 0, e = o()) : c && (e = l + c * u.ratio + f * u.ratio * u.ratio), n = Math.round(e)
                    }, a.onComplete = function() {
                        r.tween = 0, d && d.call(u)
                    }, u = r.tween = t.to(e, a)
                }
        };
    de.op = pe;
    var tt = function() {
        function e(n, o) {
            r || e.register(t) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(n, o)
        }
        return e.prototype.init = function(r, a) {
            if (this.progress = 0, this.vars && this.kill(1), R) {
                var l, c, f, h, m, b, x, w, O, M, L, z, A, H, U, V, $, G, J, K, Q, ee, te, re, ne, oe, ie, se, fe, ye, ke, Se, Ee, Re, Be, ze, Ae, Ie, Fe, We = (r = ge(q(r) || X(r) || r.nodeType ? {
                        trigger: r
                    } : r, Te)).horizontal ? de : pe,
                    De = r,
                    He = De.onUpdate,
                    qe = De.toggleClass,
                    Xe = De.id,
                    Ye = De.onToggle,
                    Ue = De.onRefresh,
                    Ze = De.scrub,
                    tt = De.trigger,
                    rt = De.pin,
                    nt = De.pinSpacing,
                    ot = De.invalidateOnRefresh,
                    it = De.anticipatePin,
                    st = De.onScrubComplete,
                    at = De.onSnapComplete,
                    lt = De.once,
                    ct = De.snap,
                    ft = De.pinReparent,
                    ut = !Ze && 0 !== Ze,
                    dt = u(r.scroller || n)[0],
                    pt = t.core.getCache(dt),
                    ht = N(dt),
                    gt = ht || "fixed" === I(dt, "pinType"),
                    vt = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
                    mt = ut && (lt ? "play" : r.toggleActions).split(" "),
                    yt = "markers" in r ? r.markers : Te.markers,
                    bt = ht ? 0 : parseFloat(he(dt)["border" + We.p2 + ce]) || 0,
                    xt = this,
                    wt = r.onRefreshInit && function() {
                        return r.onRefreshInit(xt)
                    },
                    Tt = function(e, t, r) {
                        var o = r.d,
                            i = r.d2,
                            s = r.a;
                        return (s = I(e, "getBoundingClientRect")) ? function() {
                            return s()[o]
                        } : function() {
                            return (t ? n["inner" + i] : e["client" + i]) || 0
                        }
                    }(dt, ht, We),
                    kt = function(e, t) {
                        return !t || ~P.indexOf(e) ? W(e) : function() {
                            return Je
                        }
                    }(dt, ht);
                xt.media = C, it *= 45, Pe.push(xt), xt.scroller = dt, xt.scroll = F(dt, We), m = xt.scroll(), xt.vars = r, a = a || r.animation, "refreshPriority" in r && (T = 1), pt.tweenScroll = pt.tweenScroll || {
                    top: et(dt, pe),
                    left: et(dt, de)
                }, xt.tweenTo = l = pt.tweenScroll[We.p], a && (a.vars.lazy = !1, a._initted || !1 !== a.vars.immediateRender && !1 !== r.immediateRender && a.render(0, !0, !0), xt.animation = a.pause(), a.scrollTrigger = xt, (Ee = X(Ze) && Ze) && (Se = t.to(a, {
                    ease: "power3",
                    duration: Ee,
                    onComplete: function() {
                        return st && st(xt)
                    }
                })), fe = 0, Xe || (Xe = a.vars.id)), ct && (Y(ct) || (ct = {
                    snapTo: ct
                }), t.set(ht ? [s, i] : dt, {
                    scrollBehavior: "auto"
                }), f = j(ct.snapTo) ? ct.snapTo : "labels" === ct.snapTo ? function(e) {
                    return function(r) {
                        var n, o = [],
                            i = e.labels,
                            s = e.duration();
                        for (n in i) o.push(i[n] / s);
                        return t.utils.snap(o, r)
                    }
                }(a) : t.utils.snap(ct.snapTo), Re = ct.duration || {
                    min: .1,
                    max: 2
                }, Re = Y(Re) ? d(Re.min, Re.max) : d(Re, Re), Be = t.delayedCall(ct.delay || Ee / 2 || .1, (function() {
                    if (!_ || _ === ke && !v) {
                        var e = a && !ut ? a.totalProgress() : xt.progress,
                            t = (e - ye) / (E() - p) * 1e3 || 0,
                            r = Z(t / 2) * t / .185,
                            n = e + r,
                            o = d(0, 1, f(n, xt)),
                            i = o - e - r,
                            s = xt.scroll(),
                            c = Math.round(x + o * H),
                            u = l.tween;
                        if (s <= w && s >= x) {
                            if (u && !u._initted) {
                                if (u.data <= Math.abs(c - s)) return;
                                u.kill()
                            }
                            l(c, {
                                duration: Re(Z(.185 * Math.max(Z(n - e), Z(o - e)) / t / .05 || 0)),
                                ease: ct.ease || "power3",
                                data: Math.abs(c - s),
                                onComplete: function() {
                                    fe = ye = a && !ut ? a.totalProgress() : xt.progress, at && at(xt)
                                }
                            }, x + e * H, r * H, i * H)
                        }
                    } else Be.restart(!0)
                })).pause()), Xe && (Me[Xe] = xt), tt = xt.trigger = u(tt || rt)[0], rt = !0 === rt ? tt : u(rt)[0], q(qe) && (qe = {
                    targets: tt,
                    className: qe
                }), rt && (!1 === nt || nt === le || (nt = "flex" !== he(rt.parentNode).display && ae), xt.pin = rt, !1 !== r.force3D && t.set(rt, {
                    force3D: !0
                }), (c = t.core.getCache(rt)).spacer ? U = c.pinState : (c.spacer = G = o.createElement("div"), G.setAttribute("class", "pin-spacer" + (Xe ? " pin-spacer-" + Xe : "")), c.pinState = U = Ge(rt)), xt.spacer = G = c.spacer, se = he(rt), re = se[nt + We.os2], K = t.getProperty(rt), Q = t.quickSetter(rt, We.a, ue), rt.firstChild && !D(rt, We) && (rt.style.overflow = "hidden"), Ve(rt, G, se), $ = Ge(rt)), yt && (A = Y(yt) ? ge(yt, we) : we, L = Oe("scroller-start", Xe, dt, We, A, 0), z = Oe("scroller-end", Xe, dt, We, A, 0, L), J = L["offset" + We.op.d2], O = Oe("start", Xe, dt, We, A, J), M = Oe("end", Xe, dt, We, A, J), gt || ((Fe = dt).style.position = "absolute" === he(Fe).position ? "absolute" : "relative", t.set([L, z], {
                    force3D: !0
                }), oe = t.quickSetter(L, We.a, ue), ie = t.quickSetter(z, We.a, ue))), xt.revert = function(e) {
                    var t = !1 !== e || !xt.enabled,
                        r = g;
                    t !== h && (t && (Ae = Math.max(xt.scroll(), xt.scroll.rec || 0), ze = xt.progress, Ie = a && a.progress()), O && [O, M, L, z].forEach((function(e) {
                        return e.style.display = t ? "none" : "block"
                    })), g = 1, xt.update(t), g = r, rt && (t ? function(e, t, r) {
                        if ($e(r), e.parentNode === t) {
                            var n = t.parentNode;
                            n && (n.insertBefore(e, t), n.removeChild(t))
                        }
                    }(rt, G, U) : Ve(rt, G, he(rt), ne)), h = t)
                }, xt.refresh = function(n) {
                    if (!g && xt.enabled)
                        if (rt && n && _) be(e, "scrollEnd", Ne);
                        else {
                            g = 1, Se && Se.kill(), ot && a && a.progress(0).invalidate(), h || xt.revert();
                            for (var o, i, l, c, f, u, d, p = Tt(), v = kt(), y = D(dt, We), T = 0, k = 0, C = r.end, S = r.endTrigger || tt, P = r.start || (rt || !tt ? "0 0" : "0 100%"), E = tt && Math.max(0, Pe.indexOf(xt)) || 0, R = E; R--;)(d = Pe[R].pin) && (d === tt || d === rt) && Pe[R].revert();
                            for (x = Ke(P, tt, p, We, xt.scroll(), O, L, xt, v, bt, gt, y) || (rt ? -.001 : 0), j(C) && (C = C(xt)), q(C) && !C.indexOf("+=") && (~C.indexOf(" ") ? C = (q(P) ? P.split(" ")[0] : "") + C : (T = Ce(C.substr(2), p), C = q(P) ? P : x + T, S = tt)), w = Math.max(x, Ke(C || (S ? "100% 0" : y), S, p, We, xt.scroll() + T, M, z, xt, v, bt, gt, y)) || -.001, H = w - x || (x -= .01) && .001, T = 0, R = E; R--;)(d = (u = Pe[R]).pin) && u.start - u._pinPush < x && (o = u.end - u.start, d === tt && (T += o), d === rt && (k += o));
                            if (x += T, w += T, xt._pinPush = k, O && T && ((o = {})[We.a] = "+=" + T, t.set([O, M], o)), rt) o = he(rt), c = We === pe, l = xt.scroll(), ee = parseFloat(K(We.a)) + k, Ve(rt, G, o), $ = Ge(rt), i = ve(rt, !0), nt && ((ne = [nt + We.os2, H + k + ue]).t = G, (R = nt === ae ? me(rt, We) + H + k : 0) && ne.push(We.d, R + ue), $e(ne), gt && xt.scroll(Ae)), gt && ((f = {
                                top: i.top + (c ? l - x : 0) + ue,
                                left: i.left + (c ? 0 : l - x) + ue,
                                boxSizing: "border-box",
                                position: "fixed"
                            }).width = f.maxWidth = Math.ceil(i.width) + ue, f.height = f.maxHeight = Math.ceil(i.height) + ue, f.margin = f.marginTop = f.marginRight = f.marginBottom = f.marginLeft = "0", f.padding = o.padding, f.paddingTop = o.paddingTop, f.paddingRight = o.paddingRight, f.paddingBottom = o.paddingBottom, f.paddingLeft = o.paddingLeft, V = function(e, t, r) {
                                for (var n, o = [], i = e.length, s = r ? 8 : 0; s < i; s += 2) n = e[s], o.push(n, n in t ? t[n] : e[s + 1]);
                                return o.t = e.t, o
                            }(U, f, ft)), a ? (a.progress(1, !0), te = K(We.a) - ee + H + k, H !== te && V.splice(V.length - 2, 2), a.progress(0, !0)) : te = H;
                            else if (tt && xt.scroll())
                                for (i = tt.parentNode; i && i !== s;) i._pinOffset && (x -= i._pinOffset, w -= i._pinOffset), i = i.parentNode;
                            for (R = 0; R < E; R++)(u = Pe[R].pin) && (u === tt || u === rt) && Pe[R].revert(!1);
                            xt.start = x, xt.end = w, (m = b = xt.scroll()) < Ae && xt.scroll(Ae), xt.revert(!1), g = 0, Ie && ut && a.progress(Ie, !0), ze !== xt.progress && (Se && a.totalProgress(ze, !0), xt.progress = ze, xt.update()), rt && nt && (G._pinOffset = Math.round(xt.progress * te)), Ue && Ue(xt)
                        }
                }, xt.getVelocity = function() {
                    return (xt.scroll() - b) / (E() - p) * 1e3 || 0
                }, xt.update = function(e, t) {
                    var r, n, o, i, c, f = xt.scroll(),
                        d = e ? 0 : (f - x) / H,
                        h = d < 0 ? 0 : d > 1 ? 1 : d || 0,
                        v = xt.progress;
                    if (t && (b = m, m = f, ct && (ye = fe, fe = a && !ut ? a.totalProgress() : h)), it && !h && rt && !g && !S && _ && x < f + (f - b) / (E() - p) * it && (h = 1e-4), h !== v && xt.enabled) {
                        if (i = (c = (r = xt.isActive = !!h && h < 1) !== (!!v && v < 1)) || !!h != !!v, xt.direction = h > v ? 1 : -1, xt.progress = h, ut || (!Se || g || S ? a && a.totalProgress(h, !!g) : (Se.vars.totalProgress = h, Se.invalidate().restart())), rt)
                            if (e && nt && (G.style[nt + We.os2] = re), gt) {
                                if (i) {
                                    if (o = !e && h > v && w + 1 > f && f + 1 >= D(dt, We), ft) {
                                        if (!g && (r || o)) {
                                            var y = ve(rt, !0),
                                                T = f - x;
                                            rt.style.top = y.top + (We === pe ? T : 0) + ue, rt.style.left = y.left + (We === pe ? 0 : T) + ue
                                        }! function(e, t) {
                                            if (e.parentNode !== t) {
                                                var r, n, o = e.style;
                                                if (t === s)
                                                    for (r in e._stOrig = o.cssText, n = he(e)) + r || Qe.test(r) || !n[r] || "string" != typeof o[r] || "0" === r || (o[r] = n[r]);
                                                else o.cssText = e._stOrig;
                                                t.appendChild(e)
                                            }
                                        }(rt, g || !r && !o ? G : s)
                                    }
                                    $e(r || o ? V : $), te !== H && h < 1 && r || Q(ee + (1 !== h || o ? 0 : te))
                                }
                            } else Q(ee + te * h);
                        !ct || l.tween || g || S || (ke = _, Be.restart(!0)), qe && c && (!lt || r) && u(qe.targets).forEach((function(e) {
                            return e.classList[r ? "add" : "remove"](qe.className)
                        })), He && !ut && !e && He(xt), i && !g ? (n = h && !v ? 0 : 1 === h ? 1 : 1 === v ? 2 : 3, ut && (o = !c && "none" !== mt[n + 1] && mt[n + 1] || mt[n], a && ("complete" === o || "reset" === o || o in a) && ("complete" === o ? a.pause().totalProgress(1) : "reset" === o ? a.restart(!0).pause() : a[o]()), He && He(xt)), !c && k || (Ye && c && Ye(xt), vt[n] && vt[n](xt), lt && (1 === h ? xt.kill(!1, 1) : vt[n] = 0), c || vt[n = 1 === h ? 1 : 3] && vt[n](xt))) : ut && He && !g && He(xt)
                    }
                    ie && (oe(f + (L._isFlipped ? 1 : 0)), ie(f))
                }, xt.enable = function() {
                    xt.enabled || (xt.enabled = !0, be(dt, "resize", _e), be(dt, "scroll", Le), wt && be(e, "refreshInit", wt), a && a.add ? t.delayedCall(.01, xt.refresh) && (H = .01) && (x = w = 0) : xt.refresh())
                }, xt.disable = function(t, r) {
                    if (xt.enabled && (!1 !== t && xt.revert(), xt.enabled = xt.isActive = !1, r || Se && Se.pause(), Ae = 0, c && (c.uncache = 1), wt && xe(e, "refreshInit", wt), Be && (Be.pause(), l.tween && l.tween.kill()), !ht)) {
                        for (var n = Pe.length; n--;)
                            if (Pe[n].scroller === dt && Pe[n] !== xt) return;
                        xe(dt, "resize", _e), xe(dt, "scroll", Le)
                    }
                }, xt.kill = function(e, t) {
                    xt.disable(e, t), Xe && delete Me[Xe];
                    var r = Pe.indexOf(xt);
                    Pe.splice(r, 1), r === y && je > 0 && y--, a && (a.scrollTrigger = null, e && a.render(-1), t && Se || a.kill()), O && [O, M, L, z].forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), c && (c.uncache = 1)
                }, xt.enable()
            } else this.update = this.refresh = this.kill = B
        }, e.register = function(f) {
            if (!r && (t = f || A(), z() && window.document && (n = window, o = document, i = o.documentElement, s = o.body), t && (u = t.utils.toArray, d = t.utils.clamp, t.core.globals("ScrollTrigger", e), s))) {
                c = n.requestAnimationFrame || function(e) {
                    return setTimeout(e, 16)
                }, be(n, "mousewheel", Le), a = [n, o, i, s], be(o, "scroll", Le);
                var p, g = s.style,
                    y = g.borderTop;
                g.borderTop = "1px solid #000", p = ve(s), pe.m = Math.round(p.top + pe.sc()) || 0, de.m = Math.round(p.left + de.sc()) || 0, y ? g.borderTop = y : g.removeProperty("border-top"), h = setInterval(Ee, 200), t.delayedCall(.5, (function() {
                    return S = 0
                })), be(o, "touchcancel", B), be(s, "touchstart", B), ye(be, o, "pointerdown,touchstart,mousedown", (function() {
                    return v = 1
                })), ye(be, o, "pointerup,touchend,mouseup", (function() {
                    return v = 0
                })), m = t.utils.checkPrefix("transform"), Ue.push(m), r = E(), l = t.delayedCall(.2, He).pause(), w = [o, "visibilitychange", function() {
                    var e = n.innerWidth,
                        t = n.innerHeight;
                    o.hidden ? (b = e, x = t) : b === e && x === t || _e()
                }, o, "DOMContentLoaded", He, n, "load", function() {
                    return _ || He()
                }, n, "resize", _e], H(be)
            }
            return r
        }, e.defaults = function(e) {
            for (var t in e) Te[t] = e[t]
        }, e.kill = function() {
            R = 0, Pe.slice(0).forEach((function(e) {
                return e.kill(1)
            }))
        }, e.config = function(e) {
            "limitCallbacks" in e && (k = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(h) || (h = t) && setInterval(Ee, t), "autoRefreshEvents" in e && (H(xe) || H(be, e.autoRefreshEvents || "none"))
        }, e.scrollerProxy = function(e, t) {
            var r = u(e)[0];
            N(r) ? P.unshift(n, t, s, t, i, t) : P.unshift(r, t)
        }, e.matchMedia = function(e) {
            var t, r, o, i, s;
            for (r in e) o = ze.indexOf(r), i = e[r], C = r, "all" === r ? i() : (t = n.matchMedia(r)) && (t.matches && (s = i()), ~o ? (ze[o + 1] = V(ze[o + 1], i), ze[o + 2] = V(ze[o + 2], s)) : (o = ze.length, ze.push(r, i, s), t.addListener ? t.addListener(Ae) : t.addEventListener("change", Ae))), C = 0;
            return ze
        }, e
    }();
    tt.version = "3.4.2", tt.saveStyles = function(e) {
        return e ? u(e).forEach((function(e) {
            var r = Fe.indexOf(e);
            r >= 0 && Fe.splice(r, 4), Fe.push(e, e.style.cssText, t.core.getCache(e), C)
        })) : Fe
    }, tt.revert = function(e, t) {
        return De(!e, t)
    }, tt.create = function(e, t) {
        return new tt(e, t)
    }, tt.refresh = function(e) {
        return e ? _e() : He(!0)
    }, tt.update = Xe, tt.maxScroll = function(e, t) {
        return D(e, t ? de : pe)
    }, tt.getScrollFunc = function(e, t) {
        return F(u(e)[0], t ? de : pe)
    }, tt.getById = function(e) {
        return Me[e]
    }, tt.getAll = function() {
        return Pe.slice(0)
    }, tt.isScrolling = function() {
        return !!_
    }, tt.addEventListener = function(e, t) {
        var r = Re[e] || (Re[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, tt.removeEventListener = function(e, t) {
        var r = Re[e],
            n = r && r.indexOf(t);
        n >= 0 && r.splice(n, 1)
    }, tt.batch = function(e, r) {
        var n, o = [],
            i = {},
            s = r.interval || .016,
            a = r.batchMax || 1e9,
            l = function(e, r) {
                var n = [],
                    o = [],
                    i = t.delayedCall(s, (function() {
                        r(n, o), n = [], o = []
                    })).pause();
                return function(e) {
                    n.length || i.restart(!0), n.push(e.trigger), o.push(e), a <= n.length && i.progress(1)
                }
            };
        for (n in r) i[n] = "on" === n.substr(0, 2) && j(r[n]) && "onRefreshInit" !== n ? l(0, r[n]) : r[n];
        return j(a) && (a = a(), be(tt, "refresh", (function() {
            return a = r.batchMax()
        }))), u(e).forEach((function(e) {
            var t = {};
            for (n in i) t[n] = i[n];
            t.trigger = e, o.push(tt.create(t))
        })), o
    }, tt.sort = function(e) {
        return Pe.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, A() && t.registerPlugin(tt), e.ScrollTrigger = tt, e.default = tt, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));