System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        !function (n, t) {
          "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((n = n || self).immer = {});
        }(this, function (n) {
          function t(n) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1; e < t; e++) {
              r[e - 1] = arguments[e];
            }

            throw Error("[Immer] minified error nr: " + n + (r.length ? " " + r.join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
          }

          function r(n) {
            return !!n && !!n[B];
          }

          function e(n) {
            return !!n && (function (n) {
              if (!n || "object" != typeof n) return !1;
              var t = Object.getPrototypeOf(n);
              return !t || t === Object.prototype;
            }(n) || Array.isArray(n) || !!n[q] || !!n.constructor[q] || c(n) || v(n));
          }

          function i(n, t, r) {
            void 0 === r && (r = !1), 0 === u(n) ? (r ? Object.keys : H)(n).forEach(function (r) {
              return t(r, n[r], n);
            }) : n.forEach(function (r, e) {
              return t(e, r, n);
            });
          }

          function u(n) {
            var t = n[B];
            return t ? t.t > 3 ? t.t - 4 : t.t : Array.isArray(n) ? 1 : c(n) ? 2 : v(n) ? 3 : 0;
          }

          function o(n, t) {
            return 2 === u(n) ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
          }

          function f(n, t) {
            return 2 === u(n) ? n.get(t) : n[t];
          }

          function a(n, t) {
            return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
          }

          function c(n) {
            return C && n instanceof Map;
          }

          function v(n) {
            return I && n instanceof Set;
          }

          function s(n) {
            return n.i || n.u;
          }

          function p(n, r) {
            if (void 0 === r && (r = !1), Array.isArray(n)) return n.slice();
            var e = Object.create(Object.getPrototypeOf(n));
            return i(n, function (i) {
              if (i !== B) {
                var u = Object.getOwnPropertyDescriptor(n, i),
                    o = u.value;
                u.get && (r || t(1), o = u.get.call(n)), u.enumerable ? e[i] = o : Object.defineProperty(e, i, {
                  value: o,
                  writable: !0,
                  configurable: !0
                });
              }
            }), e;
          }

          function h(n, t) {
            r(n) || d(n) || !e(n) || (u(n) > 1 && (n.set = n.add = n.clear = n.delete = l), Object.freeze(n), t && i(n, function (n, t) {
              return h(t, !0);
            }, !0));
          }

          function l() {
            t(2);
          }

          function d(n) {
            return null == n || "object" != typeof n || Object.isFrozen(n);
          }

          function _(n) {
            var r = L[n];
            return r || t(19, n), r;
          }

          function y(n, t) {
            L[n] = t;
          }

          function b() {
            return N;
          }

          function m(n, t) {
            t && (_("Patches"), n.o = [], n.v = [], n.s = t);
          }

          function j(n) {
            O(n), n.p.forEach(w), n.p = null;
          }

          function O(n) {
            n === N && (N = n.h);
          }

          function S(n) {
            return N = {
              p: [],
              h: N,
              l: n,
              _: !0,
              m: 0
            };
          }

          function w(n) {
            var t = n[B];
            0 === t.t || 1 === t.t ? t.j() : t.O = !0;
          }

          function P(n, r) {
            r.m = r.p.length;
            var i = r.p[0],
                u = void 0 !== n && n !== i;
            return r.l.S || _("ES5").P(r, n, u), u ? (i[B].M && (j(r), t(4)), e(n) && (n = M(r, n), r.h || A(r, n)), r.o && _("Patches").g(i[B], n, r.o, r.v)) : n = M(r, i, []), j(r), r.o && r.s(r.o, r.v), n !== X ? n : void 0;
          }

          function M(n, t, r) {
            if (d(t)) return t;
            var e = t[B];
            if (!e) return i(t, function (i, u) {
              return g(n, e, t, i, u, r);
            }, !0), t;
            if (e.A !== n) return t;
            if (!e.M) return A(n, e.u, !0), e.u;

            if (!e.R) {
              e.R = !0, e.A.m--;
              var u = 4 === e.t || 5 === e.t ? e.i = p(e.k, !0) : e.i;
              i(u, function (t, i) {
                return g(n, e, u, t, i, r);
              }), A(n, u, !1), r && n.o && _("Patches").F(e, r, n.o, n.v);
            }

            return e.i;
          }

          function g(n, t, i, c, v, s) {
            if (r(v)) {
              var p = M(n, v, s && t && 3 !== t.t && !o(t.D, c) ? s.concat(c) : void 0);
              if (l = c, d = p, 2 === (_ = u(h = i)) ? h.set(l, d) : 3 === _ ? (h.delete(l), h.add(d)) : h[l] = d, !r(p)) return;
              n._ = !1;
            }

            var h, l, d, _;

            if ((!t || !a(v, f(t.u, c))) && e(v)) {
              if (!n.l.J && n.m < 1) return;
              M(n, v), t && t.A.h || A(n, v);
            }
          }

          function A(n, t, r) {
            void 0 === r && (r = !1), n.l.J && n._ && h(t, r);
          }

          function x(n, t) {
            var r = n[B],
                e = Reflect.getOwnPropertyDescriptor(r ? s(r) : n, t);
            return e && e.value;
          }

          function z(n) {
            if (!n.M) {
              if (n.M = !0, 0 === n.t || 1 === n.t) {
                var t = n.i = p(n.u);
                i(n.p, function (n, r) {
                  t[n] = r;
                }), n.p = void 0;
              }

              n.h && z(n.h);
            }
          }

          function E(n) {
            n.i || (n.i = p(n.u));
          }

          function R(n, t, r) {
            var e = c(t) ? _("MapSet").K(t, r) : v(t) ? _("MapSet").N(t, r) : n.S ? function (n, t) {
              var r = Array.isArray(n),
                  e = {
                t: r ? 1 : 0,
                A: t ? t.A : b(),
                M: !1,
                R: !1,
                D: {},
                h: t,
                u: n,
                k: null,
                p: {},
                i: null,
                j: null,
                $: !1
              },
                  i = e,
                  u = Q;
              r && (i = [e], u = T);
              var o = Proxy.revocable(i, u),
                  f = o.revoke,
                  a = o.proxy;
              return e.k = a, e.j = f, a;
            }(t, r) : _("ES5").C(t, r);
            return (r ? r.A : b()).p.push(e), e;
          }

          function k(n, t) {
            n.S ? z(t) : _("ES5").I(t);
          }

          function F() {
            function n(n, t) {
              var r = n[B];

              if (r && !r.W) {
                r.W = !0;
                var e = n[t];
                return r.W = !1, e;
              }

              return n[t];
            }

            function u(n) {
              n.M || (n.M = !0, n.h && u(n.h));
            }

            function f(n) {
              n.i || (n.i = c(n.u));
            }

            function c(n) {
              var t = n && n[B];

              if (t) {
                t.W = !0;
                var r = p(t.k, !0);
                return t.W = !1, r;
              }

              return p(n);
            }

            function v(n) {
              for (var t = n.length - 1; t >= 0; t--) {
                var r = n[t][B];
                if (!r.M) switch (r.t) {
                  case 5:
                    l(r) && u(r);
                    break;

                  case 4:
                    h(r) && u(r);
                }
              }
            }

            function h(n) {
              for (var t = n.u, r = n.k, e = Object.keys(r), i = e.length - 1; i >= 0; i--) {
                var u = e[i],
                    f = t[u];
                if (void 0 === f && !o(t, u)) return !0;
                var c = r[u],
                    v = c && c[B];
                if (v ? v.u !== f : !a(c, f)) return !0;
              }

              return e.length !== Object.keys(t).length;
            }

            function l(n) {
              var t = n.k;
              if (t.length !== n.u.length) return !0;
              var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
              return !(!r || r.get);
            }

            function d(n) {
              n.O && t(3, JSON.stringify(s(n)));
            }

            var _ = {};
            y("ES5", {
              C: function C(t, r) {
                var o = Array.isArray(t),
                    v = c(t);
                i(v, function (r) {
                  !function (t, r, i) {
                    var o = _[r];
                    o ? o.enumerable = i : _[r] = o = {
                      enumerable: i,
                      get: function get() {
                        return function (t, r) {
                          d(t);
                          var i = n(s(t), r);
                          return t.W ? i : i === n(t.u, r) && e(i) ? (f(t), t.i[r] = R(t.A.l, i, t)) : i;
                        }(this[B], r);
                      },
                      set: function set(t) {
                        !function (t, r, e) {
                          if (d(t), t.D[r] = !0, !t.M) {
                            if (a(e, n(s(t), r))) return;
                            u(t), f(t);
                          }

                          t.i[r] = e;
                        }(this[B], r, t);
                      }
                    }, Object.defineProperty(t, r, o);
                  }(v, r, o || function (n, t) {
                    var r = Object.getOwnPropertyDescriptor(n, t);
                    return !(!r || !r.enumerable);
                  }(t, r));
                });
                var p = {
                  t: o ? 5 : 4,
                  A: r ? r.A : b(),
                  M: !1,
                  W: !1,
                  R: !1,
                  D: {},
                  h: r,
                  u: t,
                  k: v,
                  i: null,
                  O: !1,
                  $: !1
                };
                return Object.defineProperty(v, B, {
                  value: p,
                  writable: !0
                }), v;
              },
              I: u,
              P: function P(n, t, e) {
                n.p.forEach(function (n) {
                  n[B].W = !0;
                }), e ? r(t) && t[B].A === n && v(n.p) : (n.o && function n(t) {
                  if (t && "object" == typeof t) {
                    var r = t[B];

                    if (r) {
                      var e = r.u,
                          f = r.k,
                          a = r.D,
                          c = r.t;
                      if (4 === c) i(f, function (t) {
                        t !== B && (void 0 !== e[t] || o(e, t) ? a[t] || n(f[t]) : (a[t] = !0, u(r)));
                      }), i(e, function (n) {
                        void 0 !== f[n] || o(f, n) || (a[n] = !1, u(r));
                      });else if (5 === c) {
                        if (l(r) && (u(r), a.length = !0), f.length < e.length) for (var v = f.length; v < e.length; v++) {
                          a[v] = !1;
                        } else for (var s = e.length; s < f.length; s++) {
                          a[s] = !0;
                        }

                        for (var p = Math.min(f.length, e.length), h = 0; h < p; h++) {
                          void 0 === a[h] && n(f[h]);
                        }
                      }
                    }
                  }
                }(n.p[0]), v(n.p));
              }
            });
          }

          function D() {
            function n(t) {
              if (!t || "object" != typeof t) return t;
              if (Array.isArray(t)) return t.map(n);
              if (c(t)) return new Map(Array.from(t.entries()).map(function (t) {
                return [t[0], n(t[1])];
              }));
              if (v(t)) return new Set(Array.from(t).map(n));
              var r = Object.create(Object.getPrototypeOf(t));

              for (var e in t) {
                r[e] = n(t[e]);
              }

              return r;
            }

            function e(t) {
              return r(t) ? n(t) : t;
            }

            var a = "add";
            y("Patches", {
              X: function X(r, e) {
                return e.forEach(function (e) {
                  for (var i = e.path, o = e.op, c = r, v = 0; v < i.length - 1; v++) {
                    "object" != typeof (c = f(c, i[v])) && t(15, i.join("/"));
                  }

                  var s = u(c),
                      p = n(e.value),
                      h = i[i.length - 1];

                  switch (o) {
                    case "replace":
                      switch (s) {
                        case 2:
                          return c.set(h, p);

                        case 3:
                          t(16);

                        default:
                          return c[h] = p;
                      }

                    case a:
                      switch (s) {
                        case 1:
                          return c.splice(h, 0, p);

                        case 2:
                          return c.set(h, p);

                        case 3:
                          return c.add(p);

                        default:
                          return c[h] = p;
                      }

                    case "remove":
                      switch (s) {
                        case 1:
                          return c.splice(h, 1);

                        case 2:
                          return c.delete(h);

                        case 3:
                          return c.delete(e.value);

                        default:
                          return delete c[h];
                      }

                    default:
                      t(17, o);
                  }
                }), r;
              },
              F: function F(n, t, r, u) {
                switch (n.t) {
                  case 0:
                  case 4:
                  case 2:
                    return function (n, t, r, u) {
                      var c = n.u,
                          v = n.i;
                      i(n.D, function (n, i) {
                        var s = f(c, n),
                            p = f(v, n),
                            h = i ? o(c, n) ? "replace" : a : "remove";

                        if (s !== p || "replace" !== h) {
                          var l = t.concat(n);
                          r.push("remove" === h ? {
                            op: h,
                            path: l
                          } : {
                            op: h,
                            path: l,
                            value: p
                          }), u.push(h === a ? {
                            op: "remove",
                            path: l
                          } : "remove" === h ? {
                            op: a,
                            path: l,
                            value: e(s)
                          } : {
                            op: "replace",
                            path: l,
                            value: e(s)
                          });
                        }
                      });
                    }(n, t, r, u);

                  case 5:
                  case 1:
                    return function (n, t, r, i) {
                      var u = n.u,
                          o = n.D,
                          f = n.i;

                      if (f.length < u.length) {
                        var c = [f, u];
                        u = c[0], f = c[1];
                        var v = [i, r];
                        r = v[0], i = v[1];
                      }

                      for (var s = f.length - u.length, p = 0; u[p] === f[p] && p < u.length;) {
                        ++p;
                      }

                      for (var h = u.length; h > p && u[h - 1] === f[h + s - 1];) {
                        --h;
                      }

                      for (var l = p; l < h; ++l) {
                        if (o[l] && f[l] !== u[l]) {
                          var d = t.concat([l]);
                          r.push({
                            op: "replace",
                            path: d,
                            value: e(f[l])
                          }), i.push({
                            op: "replace",
                            path: d,
                            value: e(u[l])
                          });
                        }
                      }

                      for (var _ = r.length, y = h + s - 1; y >= h; --y) {
                        var b = t.concat([y]);
                        r[_ + y - h] = {
                          op: a,
                          path: b,
                          value: e(f[y])
                        }, i.push({
                          op: "remove",
                          path: b
                        });
                      }
                    }(n, t, r, u);

                  case 3:
                    return function (n, t, r, e) {
                      var i = n.u,
                          u = n.i,
                          o = 0;
                      i.forEach(function (n) {
                        if (!u.has(n)) {
                          var i = t.concat([o]);
                          r.push({
                            op: "remove",
                            path: i,
                            value: n
                          }), e.unshift({
                            op: a,
                            path: i,
                            value: n
                          });
                        }

                        o++;
                      }), o = 0, u.forEach(function (n) {
                        if (!i.has(n)) {
                          var u = t.concat([o]);
                          r.push({
                            op: a,
                            path: u,
                            value: n
                          }), e.unshift({
                            op: "remove",
                            path: u,
                            value: n
                          });
                        }

                        o++;
                      });
                    }(n, t, r, u);
                }
              },
              g: function g(n, t, r, e) {
                r.push({
                  op: "replace",
                  path: [],
                  value: t
                }), e.push({
                  op: "replace",
                  path: [],
                  value: n.u
                });
              }
            });
          }

          function J() {
            function n(n, t) {
              function r() {
                this.constructor = n;
              }

              _o(n, t), n.prototype = (r.prototype = t.prototype, new r());
            }

            function r(n) {
              n.i || (n.D = new Map(), n.i = new Map(n.u));
            }

            function i(n) {
              n.i || (n.i = new Set(), n.u.forEach(function (t) {
                if (e(t)) {
                  var r = R(n.A.l, t, n);
                  n.p.set(t, r), n.i.add(r);
                } else n.i.add(t);
              }));
            }

            function u(n) {
              n.O && t(3, JSON.stringify(s(n)));
            }

            var _o = function o(n, t) {
              return (_o = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (n, t) {
                n.__proto__ = t;
              } || function (n, t) {
                for (var r in t) {
                  t.hasOwnProperty(r) && (n[r] = t[r]);
                }
              })(n, t);
            },
                f = function () {
              function t(n, t) {
                return this[B] = {
                  t: 2,
                  h: t,
                  A: t ? t.A : b(),
                  M: !1,
                  R: !1,
                  i: void 0,
                  D: void 0,
                  u: n,
                  k: this,
                  $: !1,
                  O: !1
                }, this;
              }

              n(t, Map);
              var i = t.prototype;
              return Object.defineProperty(i, "size", {
                get: function get() {
                  return s(this[B]).size;
                }
              }), i.has = function (n) {
                return s(this[B]).has(n);
              }, i.set = function (n, t) {
                var e = this[B];
                return u(e), s(e).get(n) !== t && (r(e), k(e.A.l, e), e.D.set(n, !0), e.i.set(n, t), e.D.set(n, !0)), this;
              }, i.delete = function (n) {
                if (!this.has(n)) return !1;
                var t = this[B];
                return u(t), r(t), k(t.A.l, t), t.D.set(n, !1), t.i.delete(n), !0;
              }, i.clear = function () {
                var n = this[B];
                return u(n), r(n), k(n.A.l, n), n.D = new Map(), n.i.clear();
              }, i.forEach = function (n, t) {
                var r = this;
                s(this[B]).forEach(function (e, i) {
                  n.call(t, r.get(i), i, r);
                });
              }, i.get = function (n) {
                var t = this[B];
                u(t);
                var i = s(t).get(n);
                if (t.R || !e(i)) return i;
                if (i !== t.u.get(n)) return i;
                var o = R(t.A.l, i, t);
                return r(t), t.i.set(n, o), o;
              }, i.keys = function () {
                return s(this[B]).keys();
              }, i.values = function () {
                var n,
                    t = this,
                    r = this.keys();
                return (n = {})[G] = function () {
                  return t.values();
                }, n.next = function () {
                  var n = r.next();
                  return n.done ? n : {
                    done: !1,
                    value: t.get(n.value)
                  };
                }, n;
              }, i.entries = function () {
                var n,
                    t = this,
                    r = this.keys();
                return (n = {})[G] = function () {
                  return t.entries();
                }, n.next = function () {
                  var n = r.next();
                  if (n.done) return n;
                  var e = t.get(n.value);
                  return {
                    done: !1,
                    value: [n.value, e]
                  };
                }, n;
              }, i[G] = function () {
                return this.entries();
              }, t;
            }(),
                a = function () {
              function t(n, t) {
                return this[B] = {
                  t: 3,
                  h: t,
                  A: t ? t.A : b(),
                  M: !1,
                  R: !1,
                  i: void 0,
                  u: n,
                  k: this,
                  p: new Map(),
                  O: !1,
                  $: !1
                }, this;
              }

              n(t, Set);
              var r = t.prototype;
              return Object.defineProperty(r, "size", {
                get: function get() {
                  return s(this[B]).size;
                }
              }), r.has = function (n) {
                var t = this[B];
                return u(t), t.i ? !!t.i.has(n) || !(!t.p.has(n) || !t.i.has(t.p.get(n))) : t.u.has(n);
              }, r.add = function (n) {
                var t = this[B];
                return u(t), this.has(n) || (i(t), k(t.A.l, t), t.i.add(n)), this;
              }, r.delete = function (n) {
                if (!this.has(n)) return !1;
                var t = this[B];
                return u(t), i(t), k(t.A.l, t), t.i.delete(n) || !!t.p.has(n) && t.i.delete(t.p.get(n));
              }, r.clear = function () {
                var n = this[B];
                return u(n), i(n), k(n.A.l, n), n.i.clear();
              }, r.values = function () {
                var n = this[B];
                return u(n), i(n), n.i.values();
              }, r.entries = function () {
                var n = this[B];
                return u(n), i(n), n.i.entries();
              }, r.keys = function () {
                return this.values();
              }, r[G] = function () {
                return this.values();
              }, r.forEach = function (n, t) {
                for (var r = this.values(), e = r.next(); !e.done;) {
                  n.call(t, e.value, e.value, this), e = r.next();
                }
              }, t;
            }();

            y("MapSet", {
              K: function K(n, t) {
                return new f(n, t);
              },
              N: function N(n, t) {
                return new a(n, t);
              }
            });
          }

          var K,
              N,
              $ = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
              C = "undefined" != typeof Map,
              I = "undefined" != typeof Set,
              W = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
              X = $ ? Symbol("immer-nothing") : ((K = {})["immer-nothing"] = !0, K),
              q = $ ? Symbol("immer-draftable") : "__$immer_draftable",
              B = $ ? Symbol("immer-state") : "__$immer_state",
              G = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator",
              H = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
            return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
          } : Object.getOwnPropertyNames,
              L = {},
              Q = {
            get: function get(n, t) {
              if (t === B) return n;
              var r = n.p;
              if (!n.M && o(r, t)) return r[t];
              var i = s(n)[t];
              if (n.R || !e(i)) return i;

              if (n.M) {
                if (i !== x(n.u, t)) return i;
                r = n.i;
              }

              return r[t] = R(n.A.l, i, n);
            },
            has: function has(n, t) {
              return t in s(n);
            },
            ownKeys: function ownKeys(n) {
              return Reflect.ownKeys(s(n));
            },
            set: function set(n, t, r) {
              if (!n.M) {
                var e = x(n.u, t);
                if (r ? a(e, r) || r === n.p[t] : a(e, r) && t in n.u) return !0;
                E(n), z(n);
              }

              return n.D[t] = !0, n.i[t] = r, !0;
            },
            deleteProperty: function deleteProperty(n, t) {
              return void 0 !== x(n.u, t) || t in n.u ? (n.D[t] = !1, E(n), z(n)) : n.D[t] && delete n.D[t], n.i && delete n.i[t], !0;
            },
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(n, t) {
              var r = s(n),
                  e = Reflect.getOwnPropertyDescriptor(r, t);
              return e && (e.writable = !0, e.configurable = 1 !== n.t || "length" !== t), e;
            },
            defineProperty: function defineProperty() {
              t(11);
            },
            getPrototypeOf: function getPrototypeOf(n) {
              return Object.getPrototypeOf(n.u);
            },
            setPrototypeOf: function setPrototypeOf() {
              t(12);
            }
          },
              T = {};
          i(Q, function (n, t) {
            T[n] = function () {
              return arguments[0] = arguments[0][0], t.apply(this, arguments);
            };
          }), T.deleteProperty = function (n, t) {
            return Q.deleteProperty.call(this, n[0], t);
          }, T.set = function (n, t, r) {
            return Q.set.call(this, n[0], t, r, n[0]);
          };

          var U = function () {
            function n(n) {
              this.S = W, this.J = !1, "boolean" == typeof (null == n ? void 0 : n.useProxies) && this.setUseProxies(n.useProxies), "boolean" == typeof (null == n ? void 0 : n.autoFreeze) && this.setAutoFreeze(n.autoFreeze), this.produce = this.produce.bind(this), this.produceWithPatches = this.produceWithPatches.bind(this);
            }

            var i = n.prototype;
            return i.produce = function (n, r, i) {
              if ("function" == typeof n && "function" != typeof r) {
                var u = r;
                r = n;
                var o = this;
                return function (n) {
                  var t = this;
                  void 0 === n && (n = u);

                  for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), f = 1; f < e; f++) {
                    i[f - 1] = arguments[f];
                  }

                  return o.produce(n, function (n) {
                    var e;
                    return (e = r).call.apply(e, [t, n].concat(i));
                  });
                };
              }

              var f;

              if ("function" != typeof r && t(6), void 0 !== i && "function" != typeof i && t(7), e(n)) {
                var a = S(this),
                    c = R(this, n, void 0),
                    v = !0;

                try {
                  f = r(c), v = !1;
                } finally {
                  v ? j(a) : O(a);
                }

                return "undefined" != typeof Promise && f instanceof Promise ? f.then(function (n) {
                  return m(a, i), P(n, a);
                }, function (n) {
                  throw j(a), n;
                }) : (m(a, i), P(f, a));
              }

              if ((f = r(n)) !== X) return void 0 === f && (f = n), this.J && h(f, !0), f;
            }, i.produceWithPatches = function (n, t) {
              var r,
                  e,
                  i = this;
              return "function" == typeof n ? function (t) {
                for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++) {
                  e[u - 1] = arguments[u];
                }

                return i.produceWithPatches(t, function (t) {
                  return n.apply(void 0, [t].concat(e));
                });
              } : [this.produce(n, t, function (n, t) {
                r = n, e = t;
              }), r, e];
            }, i.createDraft = function (n) {
              e(n) || t(8);
              var r = S(this),
                  i = R(this, n, void 0);
              return i[B].$ = !0, O(r), i;
            }, i.finishDraft = function (n, t) {
              var r = (n && n[B]).A;
              return m(r, t), P(void 0, r);
            }, i.setAutoFreeze = function (n) {
              this.J = n;
            }, i.setUseProxies = function (n) {
              W || t(20), this.S = n;
            }, i.applyPatches = function (n, t) {
              var e;

              for (e = t.length - 1; e >= 0; e--) {
                var i = t[e];

                if (0 === i.path.length && "replace" === i.op) {
                  n = i.value;
                  break;
                }
              }

              var u = _("Patches").X;

              return r(n) ? u(n, t) : this.produce(n, function (n) {
                return u(n, t.slice(e + 1));
              });
            }, n;
          }(),
              V = new U(),
              Y = V.produce,
              Z = V.produceWithPatches.bind(V),
              nn = V.setAutoFreeze.bind(V),
              tn = V.setUseProxies.bind(V),
              rn = V.applyPatches.bind(V),
              en = V.createDraft.bind(V),
              un = V.finishDraft.bind(V);

          n.Immer = U, n.applyPatches = rn, n.castDraft = function (n) {
            return n;
          }, n.castImmutable = function (n) {
            return n;
          }, n.createDraft = en, n.default = Y, n.enableAllPlugins = function () {
            F(), J(), D();
          }, n.enableES5 = F, n.enableMapSet = J, n.enablePatches = D, n.finishDraft = un, n.immerable = q, n.isDraft = r, n.isDraftable = e, n.nothing = X, n.original = function (n) {
            if (n && n[B]) return n[B].u;
          }, n.produce = Y, n.produceWithPatches = Z, n.setAutoFreeze = nn, n.setUseProxies = tn, Object.defineProperty(n, "__esModule", {
            value: !0
          });
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=abd7b509288459cdf153985b1582d67ec691a72f.js.map