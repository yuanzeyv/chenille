System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _Immer, _applyPatches, _castDraft, _castImmutable, _createDraft, _default, _enableAllPlugins, _enableES5, _enableMapSet, _enablePatches, _finishDraft, _immerable, _isDraft, _isDraftable, _nothing, _original, _produce, _produceWithPatches, _setAutoFreeze, _setUseProxies, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        function t(t) {
          for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) {
            r[e - 1] = arguments[e];
          }

          throw Error("[Immer] minified error nr: " + t + (r.length ? " " + r.join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
        }

        function n(t) {
          return !!t && !!t[q];
        }

        function r(t) {
          return !!t && (function (t) {
            if (!t || "object" != typeof t) return !1;
            var n = Object.getPrototypeOf(t);
            return !n || n === Object.prototype;
          }(t) || Array.isArray(t) || !!t[X] || !!t.constructor[X] || a(t) || c(t));
        }

        function e(t, n, r) {
          void 0 === r && (r = !1), 0 === i(t) ? (r ? Object.keys : G)(t).forEach(function (r) {
            return n(r, t[r], t);
          }) : t.forEach(function (r, e) {
            return n(e, r, t);
          });
        }

        function i(t) {
          var n = t[q];
          return n ? n.t > 3 ? n.t - 4 : n.t : Array.isArray(t) ? 1 : a(t) ? 2 : c(t) ? 3 : 0;
        }

        function u(t, n) {
          return 2 === i(t) ? t.has(n) : Object.prototype.hasOwnProperty.call(t, n);
        }

        function o(t, n) {
          return 2 === i(t) ? t.get(n) : t[n];
        }

        function f(t, n) {
          return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
        }

        function a(t) {
          return $ && t instanceof Map;
        }

        function c(t) {
          return C && t instanceof Set;
        }

        function s(t) {
          return t.i || t.u;
        }

        function v(n, r) {
          if (void 0 === r && (r = !1), Array.isArray(n)) return n.slice();
          var i = Object.create(Object.getPrototypeOf(n));
          return e(n, function (e) {
            if (e !== q) {
              var u = Object.getOwnPropertyDescriptor(n, e),
                  o = u.value;
              u.get && (r || t(1), o = u.get.call(n)), u.enumerable ? i[e] = o : Object.defineProperty(i, e, {
                value: o,
                writable: !0,
                configurable: !0
              });
            }
          }), i;
        }

        function p(t, u) {
          n(t) || l(t) || !r(t) || (i(t) > 1 && (t.set = t.add = t.clear = t.delete = h), Object.freeze(t), u && e(t, function (t, n) {
            return p(n, !0);
          }, !0));
        }

        function h() {
          t(2);
        }

        function l(t) {
          return null == t || "object" != typeof t || Object.isFrozen(t);
        }

        function d(n) {
          var r = H[n];
          return r || t(19, n), r;
        }

        function _(t, n) {
          H[t] = n;
        }

        function y() {
          return K;
        }

        function b(t, n) {
          n && (d("Patches"), t.o = [], t.s = [], t.v = n);
        }

        function m(t) {
          j(t), t.p.forEach(x), t.p = null;
        }

        function j(t) {
          t === K && (K = t.h);
        }

        function O(t) {
          return K = {
            p: [],
            h: K,
            l: t,
            _: !0,
            m: 0
          };
        }

        function x(t) {
          var n = t[q];
          0 === n.t || 1 === n.t ? n.j() : n.O = !0;
        }

        function S(n, e) {
          e.m = e.p.length;
          var i = e.p[0],
              u = void 0 !== n && n !== i;
          return e.l.S || d("ES5").P(e, n, u), u ? (i[q].M && (m(e), t(4)), r(n) && (n = w(e, n), e.h || M(e, n)), e.o && d("Patches").g(i[q], n, e.o, e.s)) : n = w(e, i, []), m(e), e.o && e.v(e.o, e.s), n !== W ? n : void 0;
        }

        function w(t, n, r) {
          if (l(n)) return n;
          var i = n[q];
          if (!i) return e(n, function (e, u) {
            return P(t, i, n, e, u, r);
          }, !0), n;
          if (i.A !== t) return n;
          if (!i.M) return M(t, i.u, !0), i.u;

          if (!i.R) {
            i.R = !0, i.A.m--;
            var u = 4 === i.t || 5 === i.t ? i.i = v(i.k, !0) : i.i;
            e(u, function (n, e) {
              return P(t, i, u, n, e, r);
            }), M(t, u, !1), r && t.o && d("Patches").F(i, r, t.o, t.s);
          }

          return i.i;
        }

        function P(t, e, a, c, s, v) {
          if (n(s)) {
            var p = w(t, s, v && e && 3 !== e.t && !u(e.D, c) ? v.concat(c) : void 0);
            if (l = c, d = p, 2 === (_ = i(h = a)) ? h.set(l, d) : 3 === _ ? (h.delete(l), h.add(d)) : h[l] = d, !n(p)) return;
            t._ = !1;
          }

          var h, l, d, _;

          if ((!e || !f(s, o(e.u, c))) && r(s)) {
            if (!t.l.J && t.m < 1) return;
            w(t, s), e && e.A.h || M(t, s);
          }
        }

        function M(t, n, r) {
          void 0 === r && (r = !1), t.l.J && t._ && p(n, r);
        }

        function g(t, n) {
          var r = t[q],
              e = Reflect.getOwnPropertyDescriptor(r ? s(r) : t, n);
          return e && e.value;
        }

        function A(t) {
          if (!t.M) {
            if (t.M = !0, 0 === t.t || 1 === t.t) {
              var n = t.i = v(t.u);
              e(t.p, function (t, r) {
                n[t] = r;
              }), t.p = void 0;
            }

            t.h && A(t.h);
          }
        }

        function z(t) {
          t.i || (t.i = v(t.u));
        }

        function E(t, n, r) {
          var e = a(n) ? d("MapSet").K(n, r) : c(n) ? d("MapSet").N(n, r) : t.S ? function (t, n) {
            var r = Array.isArray(t),
                e = {
              t: r ? 1 : 0,
              A: n ? n.A : y(),
              M: !1,
              R: !1,
              D: {},
              h: n,
              u: t,
              k: null,
              p: {},
              i: null,
              j: null,
              $: !1
            },
                i = e,
                u = L;
            r && (i = [e], u = Q);
            var o = Proxy.revocable(i, u),
                f = o.revoke,
                a = o.proxy;
            return e.k = a, e.j = f, a;
          }(n, r) : d("ES5").C(n, r);
          return (r ? r.A : y()).p.push(e), e;
        }

        function R(t, n) {
          t.S ? A(n) : d("ES5").I(n);
        }

        function k() {
          function i(t, n) {
            var r = t[q];

            if (r && !r.W) {
              r.W = !0;
              var e = t[n];
              return r.W = !1, e;
            }

            return t[n];
          }

          function o(t) {
            t.M || (t.M = !0, t.h && o(t.h));
          }

          function a(t) {
            t.i || (t.i = c(t.u));
          }

          function c(t) {
            var n = t && t[q];

            if (n) {
              n.W = !0;
              var r = v(n.k, !0);
              return n.W = !1, r;
            }

            return v(t);
          }

          function p(t) {
            for (var n = t.length - 1; n >= 0; n--) {
              var r = t[n][q];
              if (!r.M) switch (r.t) {
                case 5:
                  l(r) && o(r);
                  break;

                case 4:
                  h(r) && o(r);
              }
            }
          }

          function h(t) {
            for (var n = t.u, r = t.k, e = Object.keys(r), i = e.length - 1; i >= 0; i--) {
              var o = e[i],
                  a = n[o];
              if (void 0 === a && !u(n, o)) return !0;
              var c = r[o],
                  s = c && c[q];
              if (s ? s.u !== a : !f(c, a)) return !0;
            }

            return e.length !== Object.keys(n).length;
          }

          function l(t) {
            var n = t.k;
            if (n.length !== t.u.length) return !0;
            var r = Object.getOwnPropertyDescriptor(n, n.length - 1);
            return !(!r || r.get);
          }

          function d(n) {
            n.O && t(3, JSON.stringify(s(n)));
          }

          var b = {};

          _("ES5", {
            C: function C(t, n) {
              var u = Array.isArray(t),
                  v = c(t);
              e(v, function (n) {
                !function (t, n, e) {
                  var u = b[n];
                  u ? u.enumerable = e : b[n] = u = {
                    enumerable: e,
                    get: function get() {
                      return function (t, n) {
                        d(t);
                        var e = i(s(t), n);
                        return t.W ? e : e === i(t.u, n) && r(e) ? (a(t), t.i[n] = E(t.A.l, e, t)) : e;
                      }(this[q], n);
                    },
                    set: function set(t) {
                      !function (t, n, r) {
                        if (d(t), t.D[n] = !0, !t.M) {
                          if (f(r, i(s(t), n))) return;
                          o(t), a(t);
                        }

                        t.i[n] = r;
                      }(this[q], n, t);
                    }
                  }, Object.defineProperty(t, n, u);
                }(v, n, u || function (t, n) {
                  var r = Object.getOwnPropertyDescriptor(t, n);
                  return !(!r || !r.enumerable);
                }(t, n));
              });
              var p = {
                t: u ? 5 : 4,
                A: n ? n.A : y(),
                M: !1,
                W: !1,
                R: !1,
                D: {},
                h: n,
                u: t,
                k: v,
                i: null,
                O: !1,
                $: !1
              };
              return Object.defineProperty(v, q, {
                value: p,
                writable: !0
              }), v;
            },
            I: o,
            P: function P(t, r, i) {
              t.p.forEach(function (t) {
                t[q].W = !0;
              }), i ? n(r) && r[q].A === t && p(t.p) : (t.o && function t(n) {
                if (n && "object" == typeof n) {
                  var r = n[q];

                  if (r) {
                    var i = r.u,
                        f = r.k,
                        a = r.D,
                        c = r.t;
                    if (4 === c) e(f, function (n) {
                      n !== q && (void 0 !== i[n] || u(i, n) ? a[n] || t(f[n]) : (a[n] = !0, o(r)));
                    }), e(i, function (t) {
                      void 0 !== f[t] || u(f, t) || (a[t] = !1, o(r));
                    });else if (5 === c) {
                      if (l(r) && (o(r), a.length = !0), f.length < i.length) for (var s = f.length; s < i.length; s++) {
                        a[s] = !1;
                      } else for (var v = i.length; v < f.length; v++) {
                        a[v] = !0;
                      }

                      for (var p = Math.min(f.length, i.length), h = 0; h < p; h++) {
                        void 0 === a[h] && t(f[h]);
                      }
                    }
                  }
                }
              }(t.p[0]), p(t.p));
            }
          });
        }

        function F() {
          function r(t) {
            if (!t || "object" != typeof t) return t;
            if (Array.isArray(t)) return t.map(r);
            if (a(t)) return new Map(Array.from(t.entries()).map(function (t) {
              return [t[0], r(t[1])];
            }));
            if (c(t)) return new Set(Array.from(t).map(r));
            var n = Object.create(Object.getPrototypeOf(t));

            for (var e in t) {
              n[e] = r(t[e]);
            }

            return n;
          }

          function f(t) {
            return n(t) ? r(t) : t;
          }

          var s = "add";

          _("Patches", {
            X: function X(n, e) {
              return e.forEach(function (e) {
                for (var u = e.path, f = e.op, a = n, c = 0; c < u.length - 1; c++) {
                  "object" != typeof (a = o(a, u[c])) && t(15, u.join("/"));
                }

                var v = i(a),
                    p = r(e.value),
                    h = u[u.length - 1];

                switch (f) {
                  case "replace":
                    switch (v) {
                      case 2:
                        return a.set(h, p);

                      case 3:
                        t(16);

                      default:
                        return a[h] = p;
                    }

                  case s:
                    switch (v) {
                      case 1:
                        return a.splice(h, 0, p);

                      case 2:
                        return a.set(h, p);

                      case 3:
                        return a.add(p);

                      default:
                        return a[h] = p;
                    }

                  case "remove":
                    switch (v) {
                      case 1:
                        return a.splice(h, 1);

                      case 2:
                        return a.delete(h);

                      case 3:
                        return a.delete(e.value);

                      default:
                        return delete a[h];
                    }

                  default:
                    t(17, f);
                }
              }), n;
            },
            F: function F(t, n, r, i) {
              switch (t.t) {
                case 0:
                case 4:
                case 2:
                  return function (t, n, r, i) {
                    var a = t.u,
                        c = t.i;
                    e(t.D, function (t, e) {
                      var v = o(a, t),
                          p = o(c, t),
                          h = e ? u(a, t) ? "replace" : s : "remove";

                      if (v !== p || "replace" !== h) {
                        var l = n.concat(t);
                        r.push("remove" === h ? {
                          op: h,
                          path: l
                        } : {
                          op: h,
                          path: l,
                          value: p
                        }), i.push(h === s ? {
                          op: "remove",
                          path: l
                        } : "remove" === h ? {
                          op: s,
                          path: l,
                          value: f(v)
                        } : {
                          op: "replace",
                          path: l,
                          value: f(v)
                        });
                      }
                    });
                  }(t, n, r, i);

                case 5:
                case 1:
                  return function (t, n, r, e) {
                    var i = t.u,
                        u = t.D,
                        o = t.i;

                    if (o.length < i.length) {
                      var a = [o, i];
                      i = a[0], o = a[1];
                      var c = [e, r];
                      r = c[0], e = c[1];
                    }

                    for (var v = o.length - i.length, p = 0; i[p] === o[p] && p < i.length;) {
                      ++p;
                    }

                    for (var h = i.length; h > p && i[h - 1] === o[h + v - 1];) {
                      --h;
                    }

                    for (var l = p; l < h; ++l) {
                      if (u[l] && o[l] !== i[l]) {
                        var d = n.concat([l]);
                        r.push({
                          op: "replace",
                          path: d,
                          value: f(o[l])
                        }), e.push({
                          op: "replace",
                          path: d,
                          value: f(i[l])
                        });
                      }
                    }

                    for (var _ = r.length, y = h + v - 1; y >= h; --y) {
                      var b = n.concat([y]);
                      r[_ + y - h] = {
                        op: s,
                        path: b,
                        value: f(o[y])
                      }, e.push({
                        op: "remove",
                        path: b
                      });
                    }
                  }(t, n, r, i);

                case 3:
                  return function (t, n, r, e) {
                    var i = t.u,
                        u = t.i,
                        o = 0;
                    i.forEach(function (t) {
                      if (!u.has(t)) {
                        var i = n.concat([o]);
                        r.push({
                          op: "remove",
                          path: i,
                          value: t
                        }), e.unshift({
                          op: s,
                          path: i,
                          value: t
                        });
                      }

                      o++;
                    }), o = 0, u.forEach(function (t) {
                      if (!i.has(t)) {
                        var u = n.concat([o]);
                        r.push({
                          op: s,
                          path: u,
                          value: t
                        }), e.unshift({
                          op: "remove",
                          path: u,
                          value: t
                        });
                      }

                      o++;
                    });
                  }(t, n, r, i);
              }
            },
            g: function g(t, n, r, e) {
              r.push({
                op: "replace",
                path: [],
                value: n
              }), e.push({
                op: "replace",
                path: [],
                value: t.u
              });
            }
          });
        }

        function D() {
          function n(t, n) {
            function r() {
              this.constructor = t;
            }

            _o(t, n), t.prototype = (r.prototype = n.prototype, new r());
          }

          function e(t) {
            t.i || (t.D = new Map(), t.i = new Map(t.u));
          }

          function i(t) {
            t.i || (t.i = new Set(), t.u.forEach(function (n) {
              if (r(n)) {
                var e = E(t.A.l, n, t);
                t.p.set(n, e), t.i.add(e);
              } else t.i.add(n);
            }));
          }

          function u(n) {
            n.O && t(3, JSON.stringify(s(n)));
          }

          var _o = function o(t, n) {
            return (_o = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (t, n) {
              t.__proto__ = n;
            } || function (t, n) {
              for (var r in n) {
                n.hasOwnProperty(r) && (t[r] = n[r]);
              }
            })(t, n);
          },
              f = function () {
            function t(t, n) {
              return this[q] = {
                t: 2,
                h: n,
                A: n ? n.A : y(),
                M: !1,
                R: !1,
                i: void 0,
                D: void 0,
                u: t,
                k: this,
                $: !1,
                O: !1
              }, this;
            }

            n(t, Map);
            var i = t.prototype;
            return Object.defineProperty(i, "size", {
              get: function get() {
                return s(this[q]).size;
              }
            }), i.has = function (t) {
              return s(this[q]).has(t);
            }, i.set = function (t, n) {
              var r = this[q];
              return u(r), s(r).get(t) !== n && (e(r), R(r.A.l, r), r.D.set(t, !0), r.i.set(t, n), r.D.set(t, !0)), this;
            }, i.delete = function (t) {
              if (!this.has(t)) return !1;
              var n = this[q];
              return u(n), e(n), R(n.A.l, n), n.D.set(t, !1), n.i.delete(t), !0;
            }, i.clear = function () {
              var t = this[q];
              return u(t), e(t), R(t.A.l, t), t.D = new Map(), t.i.clear();
            }, i.forEach = function (t, n) {
              var r = this;
              s(this[q]).forEach(function (e, i) {
                t.call(n, r.get(i), i, r);
              });
            }, i.get = function (t) {
              var n = this[q];
              u(n);
              var i = s(n).get(t);
              if (n.R || !r(i)) return i;
              if (i !== n.u.get(t)) return i;
              var o = E(n.A.l, i, n);
              return e(n), n.i.set(t, o), o;
            }, i.keys = function () {
              return s(this[q]).keys();
            }, i.values = function () {
              var t,
                  n = this,
                  r = this.keys();
              return (t = {})[B] = function () {
                return n.values();
              }, t.next = function () {
                var t = r.next();
                return t.done ? t : {
                  done: !1,
                  value: n.get(t.value)
                };
              }, t;
            }, i.entries = function () {
              var t,
                  n = this,
                  r = this.keys();
              return (t = {})[B] = function () {
                return n.entries();
              }, t.next = function () {
                var t = r.next();
                if (t.done) return t;
                var e = n.get(t.value);
                return {
                  done: !1,
                  value: [t.value, e]
                };
              }, t;
            }, i[B] = function () {
              return this.entries();
            }, t;
          }(),
              a = function () {
            function t(t, n) {
              return this[q] = {
                t: 3,
                h: n,
                A: n ? n.A : y(),
                M: !1,
                R: !1,
                i: void 0,
                u: t,
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
                return s(this[q]).size;
              }
            }), r.has = function (t) {
              var n = this[q];
              return u(n), n.i ? !!n.i.has(t) || !(!n.p.has(t) || !n.i.has(n.p.get(t))) : n.u.has(t);
            }, r.add = function (t) {
              var n = this[q];
              return u(n), this.has(t) || (i(n), R(n.A.l, n), n.i.add(t)), this;
            }, r.delete = function (t) {
              if (!this.has(t)) return !1;
              var n = this[q];
              return u(n), i(n), R(n.A.l, n), n.i.delete(t) || !!n.p.has(t) && n.i.delete(n.p.get(t));
            }, r.clear = function () {
              var t = this[q];
              return u(t), i(t), R(t.A.l, t), t.i.clear();
            }, r.values = function () {
              var t = this[q];
              return u(t), i(t), t.i.values();
            }, r.entries = function () {
              var t = this[q];
              return u(t), i(t), t.i.entries();
            }, r.keys = function () {
              return this.values();
            }, r[B] = function () {
              return this.values();
            }, r.forEach = function (t, n) {
              for (var r = this.values(), e = r.next(); !e.done;) {
                t.call(n, e.value, e.value, this), e = r.next();
              }
            }, t;
          }();

          _("MapSet", {
            K: function K(t, n) {
              return new f(t, n);
            },
            N: function N(t, n) {
              return new a(t, n);
            }
          });
        }

        var J;
        Object.defineProperty(exports, "__esModule", {
          value: !0
        });
        var K,
            N = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
            $ = "undefined" != typeof Map,
            C = "undefined" != typeof Set,
            I = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
            W = N ? Symbol("immer-nothing") : ((J = {})["immer-nothing"] = !0, J),
            X = N ? Symbol("immer-draftable") : "__$immer_draftable",
            q = N ? Symbol("immer-state") : "__$immer_state",
            B = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator",
            G = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (t) {
          return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
        } : Object.getOwnPropertyNames,
            H = {},
            L = {
          get: function get(t, n) {
            if (n === q) return t;
            var e = t.p;
            if (!t.M && u(e, n)) return e[n];
            var i = s(t)[n];
            if (t.R || !r(i)) return i;

            if (t.M) {
              if (i !== g(t.u, n)) return i;
              e = t.i;
            }

            return e[n] = E(t.A.l, i, t);
          },
          has: function has(t, n) {
            return n in s(t);
          },
          ownKeys: function ownKeys(t) {
            return Reflect.ownKeys(s(t));
          },
          set: function set(t, n, r) {
            if (!t.M) {
              var e = g(t.u, n);
              if (r ? f(e, r) || r === t.p[n] : f(e, r) && n in t.u) return !0;
              z(t), A(t);
            }

            return t.D[n] = !0, t.i[n] = r, !0;
          },
          deleteProperty: function deleteProperty(t, n) {
            return void 0 !== g(t.u, n) || n in t.u ? (t.D[n] = !1, z(t), A(t)) : t.D[n] && delete t.D[n], t.i && delete t.i[n], !0;
          },
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, n) {
            var r = s(t),
                e = Reflect.getOwnPropertyDescriptor(r, n);
            return e && (e.writable = !0, e.configurable = 1 !== t.t || "length" !== n), e;
          },
          defineProperty: function defineProperty() {
            t(11);
          },
          getPrototypeOf: function getPrototypeOf(t) {
            return Object.getPrototypeOf(t.u);
          },
          setPrototypeOf: function setPrototypeOf() {
            t(12);
          }
        },
            Q = {};
        e(L, function (t, n) {
          Q[t] = function () {
            return arguments[0] = arguments[0][0], n.apply(this, arguments);
          };
        }), Q.deleteProperty = function (t, n) {
          return L.deleteProperty.call(this, t[0], n);
        }, Q.set = function (t, n, r) {
          return L.set.call(this, t[0], n, r, t[0]);
        };

        var T = function () {
          function e(t) {
            this.S = I, this.J = !1, "boolean" == typeof (null == t ? void 0 : t.useProxies) && this.setUseProxies(t.useProxies), "boolean" == typeof (null == t ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze), this.produce = this.produce.bind(this), this.produceWithPatches = this.produceWithPatches.bind(this);
          }

          var i = e.prototype;
          return i.produce = function (n, e, i) {
            if ("function" == typeof n && "function" != typeof e) {
              var u = e;
              e = n;
              var o = this;
              return function (t) {
                var n = this;
                void 0 === t && (t = u);

                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++) {
                  i[f - 1] = arguments[f];
                }

                return o.produce(t, function (t) {
                  var r;
                  return (r = e).call.apply(r, [n, t].concat(i));
                });
              };
            }

            var f;

            if ("function" != typeof e && t(6), void 0 !== i && "function" != typeof i && t(7), r(n)) {
              var a = O(this),
                  c = E(this, n, void 0),
                  s = !0;

              try {
                f = e(c), s = !1;
              } finally {
                s ? m(a) : j(a);
              }

              return "undefined" != typeof Promise && f instanceof Promise ? f.then(function (t) {
                return b(a, i), S(t, a);
              }, function (t) {
                throw m(a), t;
              }) : (b(a, i), S(f, a));
            }

            if ((f = e(n)) !== W) return void 0 === f && (f = n), this.J && p(f, !0), f;
          }, i.produceWithPatches = function (t, n) {
            var r,
                e,
                i = this;
            return "function" == typeof t ? function (n) {
              for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++) {
                e[u - 1] = arguments[u];
              }

              return i.produceWithPatches(n, function (n) {
                return t.apply(void 0, [n].concat(e));
              });
            } : [this.produce(t, n, function (t, n) {
              r = t, e = n;
            }), r, e];
          }, i.createDraft = function (n) {
            r(n) || t(8);
            var e = O(this),
                i = E(this, n, void 0);
            return i[q].$ = !0, j(e), i;
          }, i.finishDraft = function (t, n) {
            var r = (t && t[q]).A;
            return b(r, n), S(void 0, r);
          }, i.setAutoFreeze = function (t) {
            this.J = t;
          }, i.setUseProxies = function (n) {
            I || t(20), this.S = n;
          }, i.applyPatches = function (t, r) {
            var e;

            for (e = r.length - 1; e >= 0; e--) {
              var i = r[e];

              if (0 === i.path.length && "replace" === i.op) {
                t = i.value;
                break;
              }
            }

            var u = d("Patches").X;
            return n(t) ? u(t, r) : this.produce(t, function (t) {
              return u(t, r.slice(e + 1));
            });
          }, e;
        }(),
            U = new T(),
            V = U.produce,
            Y = U.produceWithPatches.bind(U),
            Z = U.setAutoFreeze.bind(U),
            tt = U.setUseProxies.bind(U),
            nt = U.applyPatches.bind(U),
            rt = U.createDraft.bind(U),
            et = U.finishDraft.bind(U);

        exports.Immer = T, exports.applyPatches = nt, exports.castDraft = function (t) {
          return t;
        }, exports.castImmutable = function (t) {
          return t;
        }, exports.createDraft = rt, exports.default = V, exports.enableAllPlugins = function () {
          k(), D(), F();
        }, exports.enableES5 = k, exports.enableMapSet = D, exports.enablePatches = F, exports.finishDraft = et, exports.immerable = X, exports.isDraft = n, exports.isDraftable = r, exports.nothing = W, exports.original = function (t) {
          if (t && t[q]) return t[q].u;
        }, exports.produce = V, exports.produceWithPatches = Y, exports.setAutoFreeze = Z, exports.setUseProxies = tt; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Immer = module.exports.Immer;
        _applyPatches = module.exports.applyPatches;
        _castDraft = module.exports.castDraft;
        _castImmutable = module.exports.castImmutable;
        _createDraft = module.exports.createDraft;
        _default = module.exports.default;
        _enableAllPlugins = module.exports.enableAllPlugins;
        _enableES5 = module.exports.enableES5;
        _enableMapSet = module.exports.enableMapSet;
        _enablePatches = module.exports.enablePatches;
        _finishDraft = module.exports.finishDraft;
        _immerable = module.exports.immerable;
        _isDraft = module.exports.isDraft;
        _isDraftable = module.exports.isDraftable;
        _nothing = module.exports.nothing;
        _original = module.exports.original;
        _produce = module.exports.produce;
        _produceWithPatches = module.exports.produceWithPatches;
        _setAutoFreeze = module.exports.setAutoFreeze;
        _setUseProxies = module.exports.setUseProxies;
      }, {});
    }
  };
});
//# sourceMappingURL=d09f87c58373f47cb73561e9ca2b9a74b8202c39.js.map