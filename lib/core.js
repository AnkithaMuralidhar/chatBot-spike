!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t = "undefined" != typeof globalThis ? globalThis : t || self).YveBot =
          e());
  })(this, function () {
    "use strict";
    var r = function (t, e) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        })(t, e);
    };
    function t(t, e) {
      function n() {
        this.constructor = t;
      }
      r(t, e),
        (t.prototype =
          null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
    }
    var c = function () {
      return (c =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var o in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }).apply(this, arguments);
    };
    function s(t, e) {
      var n = {};
      for (o in t)
        Object.prototype.hasOwnProperty.call(t, o) &&
          e.indexOf(o) < 0 &&
          (n[o] = t[o]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols)
        for (var r = 0, o = Object.getOwnPropertySymbols(t); r < o.length; r++)
          e.indexOf(o[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, o[r]) &&
            (n[o[r]] = t[o[r]]);
      return n;
    }
    function l(t, s, u, a) {
      return new (u = u || Promise)(function (n, e) {
        function r(t) {
          try {
            i(a.next(t));
          } catch (t) {
            e(t);
          }
        }
        function o(t) {
          try {
            i(a.throw(t));
          } catch (t) {
            e(t);
          }
        }
        function i(t) {
          var e;
          t.done
            ? n(t.value)
            : ((e = t.value) instanceof u
                ? e
                : new u(function (t) {
                    t(e);
                  })
              ).then(r, o);
        }
        i((a = a.apply(t, s || [])).next());
      });
    }
    function f(n, r) {
      var o,
        i,
        s,
        u = {
          label: 0,
          sent: function () {
            if (1 & s[0]) throw s[1];
            return s[1];
          },
          trys: [],
          ops: [],
        },
        t = { next: e(0), throw: e(1), return: e(2) };
      return (
        "function" == typeof Symbol &&
          (t[Symbol.iterator] = function () {
            return this;
          }),
        t
      );
      function e(e) {
        return function (t) {
          return (function (e) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; u; )
              try {
                if (
                  ((o = 1),
                  i &&
                    (s =
                      2 & e[0]
                        ? i.return
                        : e[0]
                        ? i.throw || ((s = i.return) && s.call(i), 0)
                        : i.next) &&
                    !(s = s.call(i, e[1])).done)
                )
                  return s;
                switch (((i = 0), (e = s ? [2 & e[0], s.value] : e)[0])) {
                  case 0:
                  case 1:
                    s = e;
                    break;
                  case 4:
                    return u.label++, { value: e[1], done: !1 };
                  case 5:
                    u.label++, (i = e[1]), (e = [0]);
                    continue;
                  case 7:
                    (e = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !(s = 0 < (s = u.trys).length && s[s.length - 1]) &&
                      (6 === e[0] || 2 === e[0])
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === e[0] && (!s || (e[1] > s[0] && e[1] < s[3]))) {
                      u.label = e[1];
                      break;
                    }
                    if (6 === e[0] && u.label < s[1]) {
                      (u.label = s[1]), (s = e);
                      break;
                    }
                    if (s && u.label < s[2]) {
                      (u.label = s[2]), u.ops.push(e);
                      break;
                    }
                    s[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                e = r.call(n, u);
              } catch (t) {
                (e = [6, t]), (i = 0);
              } finally {
                o = s = 0;
              }
            if (5 & e[0]) throw e[1];
            return { value: e[0] ? e[1] : void 0, done: !0 };
          })([e, t]);
        };
      }
    }
    function u() {
      for (var t = 0, e = 0, n = arguments.length; e < n; e++)
        t += arguments[e].length;
      for (var r = Array(t), o = 0, e = 0; e < n; e++)
        for (var i = arguments[e], s = 0, u = i.length; s < u; s++, o++)
          r[o] = i[s];
      return r;
    }
    var o =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
    var e,
      n =
        ((function (t) {
          var e, n;
          (e = o),
            (n = function () {
              function i() {}
              var s =
                "undefined" != typeof Promise
                  ? Promise
                  : function () {
                      return {
                        then: function () {
                          throw new Error("Queue.configure() before use Queue");
                        },
                      };
                    };
              function t(t, e, n) {
                (this.options = n = n || {}),
                  (this.pendingPromises = 0),
                  (this.maxPendingPromises = void 0 !== t ? t : 1 / 0),
                  (this.maxQueuedPromises = void 0 !== e ? e : 1 / 0),
                  (this.queue = []);
              }
              return (
                (t.configure = function (t) {
                  s = t;
                }),
                (t.prototype.add = function (r) {
                  var o = this;
                  return new s(function (t, e, n) {
                    o.queue.length >= o.maxQueuedPromises
                      ? e(new Error("Queue limit reached"))
                      : (o.queue.push({
                          promiseGenerator: r,
                          resolve: t,
                          reject: e,
                          notify: n || i,
                        }),
                        o._dequeue());
                  });
                }),
                (t.prototype.getPendingLength = function () {
                  return this.pendingPromises;
                }),
                (t.prototype.getQueueLength = function () {
                  return this.queue.length;
                }),
                (t.prototype._dequeue = function () {
                  var e = this;
                  if (this.pendingPromises >= this.maxPendingPromises) return !1;
                  var n,
                    r = this.queue.shift();
                  if (!r)
                    return this.options.onEmpty && this.options.onEmpty(), !1;
                  try {
                    this.pendingPromises++,
                      ((n = r.promiseGenerator()) && "function" == typeof n.then
                        ? n
                        : new s(function (t) {
                            t(n);
                          })
                      ).then(
                        function (t) {
                          e.pendingPromises--, r.resolve(t), e._dequeue();
                        },
                        function (t) {
                          e.pendingPromises--, r.reject(t), e._dequeue();
                        },
                        function (t) {
                          r.notify(t);
                        }
                      );
                  } catch (t) {
                    e.pendingPromises--, r.reject(t), e._dequeue();
                  }
                  return !0;
                }),
                t
              );
            }),
            t.exports ? (t.exports = n()) : (e.Queue = n());
        })((e = { exports: {} })),
        e.exports),
      i =
        ((a.prototype.define = function (e, n, t) {
          var r = this,
            t = !(t && t.override);
          return (
            "string" != typeof e
              ? Object.keys(e).forEach(function (t) {
                  r.define(t, e[t], n);
                })
              : t && e in this
              ? ((t = typeof this),
                console.warn(
                  "You can't redefine \"" +
                    e +
                    '" in ' +
                    t +
                    ". Force it using { override: true } in options argument."
                ))
              : this.set(e, n),
            this
          );
        }),
        (a.prototype.defineExtension = function () {
          for (var e = this, n = [], t = 0; t < arguments.length; t++)
            n[t] = arguments[t];
          return (
            this.define.apply(this, n),
            function (t) {
              return (t = t[e._moduleName]).define.apply(t, n);
            }
          );
        }),
        (a.prototype.set = function (t, e) {
          this[t] = e;
        }),
        a);
    function a(t) {
      this._moduleName = t;
    }
    var p,
      h = {
        timeout: function (e) {
          return new Promise(function (t) {
            return setTimeout(t, e);
          });
        },
      },
      d = (t(v, (p = i)), v);
    function v() {
      var t = p.call(this, "actions") || this;
      return t.define(h), t;
    }
    var y = Array.isArray,
      g =
        "object" == typeof global && global && global.Object === Object && global,
      m = "object" == typeof self && self && self.Object === Object && self,
      b = g || m || Function("return this")(),
      x = b.Symbol,
      g = Object.prototype,
      w = g.hasOwnProperty,
      _ = g.toString,
      j = x ? x.toStringTag : void 0;
    var P = Object.prototype.toString;
    var O = "[object Null]",
      E = "[object Undefined]",
      I = x ? x.toStringTag : void 0;
    function A(t) {
      return null == t
        ? void 0 === t
          ? E
          : O
        : I && I in Object(t)
        ? (function (t) {
            var e = w.call(t, j),
              n = t[j];
            try {
              var r = !(t[j] = void 0);
            } catch (t) {}
            var o = _.call(t);
            return r && (e ? (t[j] = n) : delete t[j]), o;
          })(t)
        : ((t = t), P.call(t));
    }
    var S = "[object Symbol]";
    function R(t) {
      return (
        "symbol" == typeof t ||
        (null != (e = t) && "object" == typeof e && A(t) == S)
      );
      var e;
    }
    var k = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      T = /^\w*$/;
    function q(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    }
    var F = "[object AsyncFunction]",
      C = "[object Function]",
      M = "[object GeneratorFunction]",
      z = "[object Proxy]";
    var m = b["__core-js_shared__"],
      L = (g = /[^.]+$/.exec((m && m.keys && m.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + g
        : "";
    var N = Function.prototype.toString;
    var $ = /^\[object .+?Constructor\]$/,
      m = Function.prototype,
      g = Object.prototype,
      m = m.toString,
      g = g.hasOwnProperty,
      Q = RegExp(
        "^" +
          m
            .call(g)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function B(t) {
      var e;
      return (
        q(t) &&
        ((e = t), !(L && L in e)) &&
        ((function (t) {
          if (q(t)) {
            t = A(t);
            return t == C || t == M || t == F || t == z;
          }
        })(t)
          ? Q
          : $
        ).test(
          (function (t) {
            if (null != t) {
              try {
                return N.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          })(t)
        )
      );
    }
    function W(t, e) {
      (e = e), (e = null == (t = t) ? void 0 : t[e]);
      return B(e) ? e : void 0;
    }
    var G = W(Object, "create");
    var U = Object.prototype.hasOwnProperty;
    var V = Object.prototype.hasOwnProperty;
    function Y(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    function Z(t, e) {
      return t === e || (t != t && e != e);
    }
    function D(t, e) {
      for (var n = t.length; n--; ) if (Z(t[n][0], e)) return n;
      return -1;
    }
    (Y.prototype.clear = function () {
      (this.__data__ = G ? G(null) : {}), (this.size = 0);
    }),
      (Y.prototype.delete = function (t) {
        return (
          (t = this.has(t) && delete this.__data__[t]),
          (this.size -= t ? 1 : 0),
          t
        );
      }),
      (Y.prototype.get = function (t) {
        var e = this.__data__;
        if (G) {
          var n = e[t];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return U.call(e, t) ? e[t] : void 0;
      }),
      (Y.prototype.has = function (t) {
        var e = this.__data__;
        return G ? void 0 !== e[t] : V.call(e, t);
      }),
      (Y.prototype.set = function (t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = G && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      });
    var H = Array.prototype.splice;
    function J(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (J.prototype.clear = function () {
      (this.__data__ = []), (this.size = 0);
    }),
      (J.prototype.delete = function (t) {
        var e = this.__data__;
        return (
          !((t = D(e, t)) < 0) &&
          (t == e.length - 1 ? e.pop() : H.call(e, t, 1), --this.size, !0)
        );
      }),
      (J.prototype.get = function (t) {
        var e = this.__data__;
        return (t = D(e, t)) < 0 ? void 0 : e[t][1];
      }),
      (J.prototype.has = function (t) {
        return -1 < D(this.__data__, t);
      }),
      (J.prototype.set = function (t, e) {
        var n = this.__data__,
          r = D(n, t);
        return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
      });
    var K = W(b, "Map");
    function X(t, e) {
      var n,
        r = t.__data__;
      return (
        "string" == (t = typeof (n = e)) ||
        "number" == t ||
        "symbol" == t ||
        "boolean" == t
          ? "__proto__" !== n
          : null === n
      )
        ? r["string" == typeof e ? "string" : "hash"]
        : r.map;
    }
    function tt(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (tt.prototype.clear = function () {
      (this.size = 0),
        (this.__data__ = { hash: new Y(), map: new (K || J)(), string: new Y() });
    }),
      (tt.prototype.delete = function (t) {
        return (t = X(this, t).delete(t)), (this.size -= t ? 1 : 0), t;
      }),
      (tt.prototype.get = function (t) {
        return X(this, t).get(t);
      }),
      (tt.prototype.has = function (t) {
        return X(this, t).has(t);
      }),
      (tt.prototype.set = function (t, e) {
        var n = X(this, t),
          r = n.size;
        return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
      });
    var et = "Expected a function";
    function nt(r, o) {
      if ("function" != typeof r || (null != o && "function" != typeof o))
        throw new TypeError(et);
      var i = function () {
        var t = arguments,
          e = o ? o.apply(this, t) : t[0],
          n = i.cache;
        if (n.has(e)) return n.get(e);
        t = r.apply(this, t);
        return (i.cache = n.set(e, t) || n), t;
      };
      return (i.cache = new (nt.Cache || tt)()), i;
    }
    nt.Cache = tt;
    var rt,
      ot,
      it =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      st = /\\(\\)?/g,
      ut =
        ((ot = (rt = nt(
          (rt = function (t) {
            var o = [];
            return (
              46 === t.charCodeAt(0) && o.push(""),
              t.replace(it, function (t, e, n, r) {
                o.push(n ? r.replace(st, "$1") : e || t);
              }),
              o
            );
          }),
          function (t) {
            return 500 === ot.size && ot.clear(), t;
          }
        )).cache),
        rt);
    var at = 1 / 0,
      m = x ? x.prototype : void 0,
      ct = m ? m.toString : void 0;
    function lt(t) {
      if ("string" == typeof t) return t;
      if (y(t))
        return (
          (function (t, e) {
            for (
              var n = -1, r = null == t ? 0 : t.length, o = Array(r);
              ++n < r;
  
            )
              o[n] = e(t[n], n, t);
            return o;
          })(t, lt) + ""
        );
      if (R(t)) return ct ? ct.call(t) : "";
      var e = t + "";
      return "0" == e && 1 / t == -at ? "-0" : e;
    }
    function ft(t, e) {
      return y(t)
        ? t
        : (function (t, e) {
            if (!y(t)) {
              var n = typeof t;
              return (
                "number" == n ||
                "symbol" == n ||
                "boolean" == n ||
                null == t ||
                R(t) ||
                T.test(t) ||
                !k.test(t) ||
                (null != e && t in Object(e))
              );
            }
          })(t, e)
        ? [t]
        : ut(null == (t = t) ? "" : lt(t));
    }
    var pt = 1 / 0;
    function ht(t) {
      if ("string" == typeof t || R(t)) return t;
      var e = t + "";
      return "0" == e && 1 / t == -pt ? "-0" : e;
    }
    function dt(t, e) {
      for (var n = 0, r = (e = ft(e, t)).length; null != t && n < r; )
        t = t[ht(e[n++])];
      return n && n == r ? t : void 0;
    }
    function vt(t, e, n) {
      e = null == t ? void 0 : dt(t, e);
      return void 0 === e ? n : e;
    }
    function yt(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.__data__ = new tt(); ++e < n; ) this.add(t[e]);
    }
    function gt(t) {
      return t != t;
    }
    function mt(t, e, n) {
      return e == e
        ? (function (t, e, n) {
            for (var r = n - 1, o = t.length; ++r < o; ) if (t[r] === e) return r;
            return -1;
          })(t, e, n)
        : (function (t, e, n, r) {
            for (var o = t.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
              if (e(t[i], i, t)) return i;
            return -1;
          })(t, gt, n);
    }
    function bt(t, e) {
      return !!(null == t ? 0 : t.length) && -1 < mt(t, e, 0);
    }
    function xt(t, e, n) {
      for (var r = -1, o = null == t ? 0 : t.length; ++r < o; )
        if (n(e, t[r])) return !0;
      return !1;
    }
    function wt(t, e) {
      return t.has(e);
    }
    (yt.prototype.add = yt.prototype.push =
      function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      }),
      (yt.prototype.has = function (t) {
        return this.__data__.has(t);
      });
    var _t = W(b, "Set");
    function jt(t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t) {
          n[++e] = t;
        }),
        n
      );
    }
    var Pt =
        _t && 1 / jt(new _t([, -0]))[1] == 1 / 0
          ? function (t) {
              return new _t(t);
            }
          : function () {},
      Ot = 200;
    function Et(t) {
      return t && t.length
        ? (function (t, e, n) {
            var r = -1,
              o = bt,
              i = t.length,
              s = !0,
              u = [],
              a = u;
            if (n) (s = !1), (o = xt);
            else if (Ot <= i) {
              var c = e ? null : Pt(t);
              if (c) return jt(c);
              (s = !1), (o = wt), (a = new yt());
            } else a = e ? [] : u;
            t: for (; ++r < i; ) {
              var l = t[r],
                f = e ? e(l) : l,
                l = n || 0 !== l ? l : 0;
              if (s && f == f) {
                for (var p = a.length; p--; ) if (a[p] === f) continue t;
                e && a.push(f), u.push(l);
              } else o(a, f, n) || (a !== u && a.push(f), u.push(l));
            }
            return u;
          })(t)
        : [];
    }
    function It(t) {
      var e,
        n = t;
      return (
        ((n = "string" == typeof n ? { message: n } : n).options = (
          n.options || []
        ).map(function (t) {
          return "string" == typeof t
            ? { value: t }
            : ("string" == typeof t.synonyms &&
                t.synonyms &&
                ((e = t.synonyms),
                (t.synonyms = e.split(",").map(function (t) {
                  return t.trim();
                }))),
              t);
          var e;
        })),
        (n.passive = void 0 === n.passive || n.passive),
        (n.multiline = void 0 === n.multiline || n.multiline),
        void 0 === n.skip
          ? (n.skip = function () {
              return !1;
            })
          : "function" != typeof n.skip &&
            ((e = !!n.skip),
            (n.skip = function () {
              return e;
            })),
        ["actions", "preActions", "postActions", "validators"].forEach(function (
          e
        ) {
          function t(t) {
            t[e] &&
              t[e].length &&
              (t[e] = t[e].map(function (t) {
                var e;
                return "string" == typeof t ? (((e = {})[t] = !0), e) : t;
              }));
          }
          t(n), n.options && n.options.length && n.options.forEach(t);
        }),
        n
      );
    }
    function At(t) {
      if (t.executors) return t;
      var e = t.transform,
        n = t.validators,
        n = void 0 === n ? [] : n,
        t = s(t, ["transform", "validators"]);
      return c({ executors: [{ transform: e, validators: n }] }, t);
    }
    function St(t, i) {
      return t.replace(/{(.*?)}/g, function (t, e) {
        for (var n = i, r = 0, o = e.split("."); r < o.length; r++) n = n[o[r]];
        return n || "";
      });
    }
    function Rt(t, e) {
      e = String(e).toLowerCase();
      return String(t).toLowerCase() === e;
    }
    function kt(t, e) {
      var r = Tt(e);
      return t.filter(function (n) {
        return (
          r.some(function (t) {
            return Rt(t, n.value);
          }) ||
          r.some(function (t) {
            return Rt(t, n.label);
          }) ||
          r.some(function (e) {
            return (n.synonyms || []).some(function (t) {
              return Rt(e, t);
            });
          })
        );
      })[0];
    }
    function Tt(t) {
      return void 0 === t ? [] : t instanceof Array ? t : [t];
    }
    function qt(e, t) {
      return t instanceof Array
        ? t.map(function (t) {
            return kt(e.options, t);
          })
        : [kt(e.options, t)];
    }
    function Ft(o, i, e, t) {
      var n = this,
        r = i[e] || [],
        t = (void 0 !== t ? qt(i, t) : []).filter(function (t) {
          return t && t[e] && 0 < t[e].length;
        });
      t.length &&
        (r = [].concat.apply(
          [],
          t.map(function (t) {
            return t[e];
          })
        ));
      var s = o.store.output();
      return Promise.all(
        r.map(function (r) {
          return l(n, void 0, void 0, function () {
            var e = this;
            return f(this, function (t) {
              return [
                2,
                Promise.all(
                  Object.keys(r).map(function (n) {
                    return l(e, void 0, void 0, function () {
                      var e;
                      return f(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return n in o.actions
                              ? ((e = r[n]),
                                [
                                  4,
                                  o.actions[n](
                                    "string" == typeof e ? St(e, s) : e,
                                    i,
                                    o
                                  ),
                                ])
                              : [3, 2];
                          case 1:
                            return [2, t.sent()];
                          case 2:
                            return [2, null];
                        }
                      });
                    });
                  })
                ),
              ];
            });
          });
        })
      );
    }
    function Ct(t, e) {
      e = t.rules[e] || It({ exit: !0 });
      return c(c({}, t.options.rule), e);
    }
    var Mt =
      ((zt.prototype.reindex = function () {
        var o = this;
        this.bot.rules.forEach(function (t, e) {
          var n = t.name,
            r = t.flow;
          r && (o._indexes[[r, t.flowIdx].join(".")] = e),
            n && ((n = r ? [r, n].join(".") : n), (o._indexes[n] = e));
        });
      }),
      Object.defineProperty(zt.prototype, "indexes", {
        get: function () {
          return this._indexes;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (zt.prototype.run = function (s) {
        return l(this, void 0, void 0, function () {
          var r, o, i;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (r = this.bot),
                  (o = r.store.output()),
                  (i = Ct(r, s)),
                  r.store.set("currentIdx", s),
                  i.skip(o, i, r)
                    ? [2, this.nextRule(i)]
                    : r.options.enableWaitForSleep && "sleep" in i
                    ? [4, r.actions.timeout(i.sleep)]
                    : [3, 2]
                );
              case 1:
                t.sent(), (t.label = 2);
              case 2:
                return [4, Ft(r, i, "preActions")];
              case 3:
                return (
                  t.sent(),
                  (e = r),
                  (
                    !(n = i).message &&
                    n.type &&
                    e.types[n.type] &&
                    "function" == typeof e.types[n.type].requiredMessage
                      ? !e.types[n.type].requiredMessage(n)
                      : n.message
                  )
                    ? [4, this.sendMessage(i.message, i)]
                    : [3, 5]
                );
              case 4:
                t.sent(), (t.label = 5);
              case 5:
                return [4, Ft(r, i, "actions")];
              case 6:
                if ((t.sent(), i.exit)) return r.end(), [2, this];
                if (!i.type) return [2, this.nextRule(i)];
                if (!r.types[i.type])
                  throw new r.exceptions.InvalidAttributeError("type", i);
                return (
                  r.store.set("waitingForAnswer", !0),
                  r.dispatch("hear"),
                  [2, this]
                );
            }
            var e, n;
          });
        });
      }),
      (zt.prototype.sendMessage = function (a, c) {
        return l(this, void 0, void 0, function () {
          var n, s, u;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (n = this.bot),
                  (u = a || ""),
                  n.dispatch("typing"),
                  !n.options.enableWaitForSleep || c.exit
                    ? [3, 4]
                    : "delay" in c
                    ? [4, n.actions.timeout(c.delay)]
                    : [3, 2]
                );
              case 1:
                return t.sent(), [3, 4];
              case 2:
                return (
                  (s = n.options.timePerChar),
                  [4, n.actions.timeout(((e = s), u.length * e))]
                );
              case 3:
                t.sent(), (t.label = 4);
              case 4:
                return (
                  (e = u),
                  (o = (r = n).store.output()),
                  (i = r.controller.indexes),
                  Et(
                    (e.match(/(?!\{)\w+[.]((?:\w+[.])*\w+)(?=\})/g) || []).map(
                      function (t) {
                        return t.split(".")[0];
                      }
                    )
                  ).map(function (t) {
                    var e,
                      n = r.rules[i[t]];
                    n &&
                      n.options.length &&
                      ((e = o[t]),
                      (o[t] = (function () {
                        if (e instanceof Array)
                          return e.map(function (t) {
                            var e = kt(n.options, t);
                            return (
                              (e.toString = function () {
                                return t;
                              }),
                              e
                            );
                          });
                        var t = kt(n.options, e);
                        return (
                          (t.toString = function () {
                            return e;
                          }),
                          t
                        );
                      })()));
                  }),
                  (u = St(e, o).trim()),
                  n.dispatch("talk", u, c),
                  n.dispatch("typed"),
                  [2, this]
                );
            }
            var r, o, i, e;
          });
        });
      }),
      (zt.prototype.receiveMessage = function (a) {
        return l(this, void 0, void 0, function () {
          var r, o, i, s, u;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                if (
                  ((r = this.bot),
                  (o = r.store.get("currentIdx")),
                  (o = Ct(r, o)),
                  r.dispatch("listen", a, o),
                  !r.store.get("waitingForAnswer"))
                )
                  return [2, this];
                t.label = 1;
              case 1:
                return (
                  t.trys.push([1, 3, , 7]),
                  [4, this.executeRuleTypeExecutors(o, a)]
                );
              case 2:
                return (i = t.sent()), [3, 7];
              case 3:
                return ((s = t.sent()),
                (u = !1),
                s instanceof r.exceptions.ValidatorError)
                  ? ((u = !0), [4, this.sendMessage(s.message, o)])
                  : [3, 5];
              case 4:
                return t.sent(), [3, 6];
              case 5:
                s instanceof r.exceptions.PauseRuleTypeExecutors &&
                  ((u = !0), this.incRuleExecutorIndex(o)),
                  (t.label = 6);
              case 6:
                if (u) return r.dispatch("hear"), [2, this];
                throw s;
              case 7:
                return (r.store.set("waitingForAnswer", !1),
                (u = o.output || o.name) && r.store.set("output." + u, i),
                (n = i),
                (s = (
                  (e = o).options.length &&
                  (n =
                    void 0 ===
                    (n = qt(e, n).filter(function (t) {
                      return t && t.replyMessage;
                    })[0])
                      ? null
                      : n) &&
                  n.replyMessage
                    ? n
                    : e
                ).replyMessage))
                  ? ((u = It(c({}, r.options.rule))), [4, this.sendMessage(s, u)])
                  : [3, 9];
              case 8:
                t.sent(), (t.label = 9);
              case 9:
                return [4, Ft(r, o, "postActions", i)];
              case 10:
                return (
                  t.sent(),
                  "PassiveLoop" === o.type ? [2, this] : [2, this.nextRule(o, i)]
                );
            }
            var e, n;
          });
        });
      }),
      (zt.prototype.jumpByName = function (t) {
        var e = this._indexes[t];
        if ("number" != typeof e)
          throw new this.bot.exceptions.RuleNotFound(t, this._indexes);
        return this.run(e);
      }),
      (zt.prototype.nextRule = function (t, e) {
        var n = this.bot,
          r = (function (t, e) {
            if (t.options.length && void 0 !== e) {
              e = kt(t.options, e);
              if (e && e.next) return e.next;
            }
            return t.next || null;
          })(t, e);
        return (
          r
            ? ((e = void 0),
              (e = /flow:/.test(r)
                ? Object.keys(n.controller.indexes).filter(function (t) {
                    return t.startsWith(r.split("flow:")[1]);
                  })[0]
                : /\./.test(r)
                ? r
                : [t.flow, r]
                    .filter(function (t) {
                      return !!t;
                    })
                    .join(".")),
              this.jumpByName(e))
            : ((n = n.store.get("currentIdx") + 1), this.run(n)),
          this
        );
      }),
      (zt.prototype.getRuleExecutorIndex = function (t) {
        return this.bot.store.get("executors." + t.name + ".currentIdx") || 0;
      }),
      (zt.prototype.incRuleExecutorIndex = function (t) {
        this.bot.store.set(
          "executors." + t.name + ".currentIdx",
          this.getRuleExecutorIndex(t) + 1
        );
      }),
      (zt.prototype.resetRuleExecutorIndex = function (t) {
        this.bot.store.unset("executors." + t.name + ".currentIdx");
      }),
      (zt.prototype.executeRuleTypeExecutors = function (s, u) {
        return l(this, void 0, void 0, function () {
          var e,
            n,
            r,
            o,
            i = this;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return s.type
                  ? ((e = this.bot),
                    (o = this.getRuleExecutorIndex(s)),
                    (n = Tt(e.types[s.type].executors)),
                    (o = vt(n.slice(o), 0, {})),
                    (o = o.transform),
                    [
                      4,
                      (void 0 === o
                        ? function () {
                            for (var t = [], e = 0; e < arguments.length; e++)
                              t[e] = arguments[e];
                            return Promise.resolve(t[0]);
                          }
                        : o)(u, s, e).then(function (t) {
                        return (function (o, u, a, i) {
                          return l(this, void 0, void 0, function () {
                            var e,
                              n,
                              s,
                              r = this;
                            return f(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    (e = Tt(u.validators)),
                                    (n = Tt(a.types[u.type].executors)),
                                    (n = vt(n, i, {})),
                                    (n = [].concat(
                                      0 === i ? e : [],
                                      n.validators || []
                                    )),
                                    (s = Tt(o)),
                                    [
                                      4,
                                      Promise.all(
                                        n.map(function (i) {
                                          return Promise.all(
                                            Object.keys(i).map(function (o) {
                                              return l(
                                                r,
                                                void 0,
                                                void 0,
                                                function () {
                                                  var e, n, r;
                                                  return f(this, function (t) {
                                                    switch (t.label) {
                                                      case 0:
                                                        return (e =
                                                          a.validators[o]) &&
                                                          "warning" !== o
                                                          ? ((n = i[o]),
                                                            [
                                                              4,
                                                              Promise.all(
                                                                s.map(function (
                                                                  t
                                                                ) {
                                                                  return e.validate(
                                                                    n,
                                                                    t,
                                                                    u,
                                                                    a
                                                                  );
                                                                })
                                                              ),
                                                            ])
                                                          : [2];
                                                      case 1:
                                                        if (
                                                          ((r = t.sent()),
                                                          !r.every(function (t) {
                                                            return t;
                                                          }))
                                                        )
                                                          throw (
                                                            ((r =
                                                              i.warning ||
                                                              e.warning),
                                                            (r =
                                                              "function" ==
                                                              typeof r
                                                                ? r(n)
                                                                : r),
                                                            new a.exceptions.ValidatorError(
                                                              r,
                                                              u
                                                            ))
                                                          );
                                                        return [2];
                                                    }
                                                  });
                                                }
                                              );
                                            })
                                          );
                                        })
                                      ),
                                    ]
                                  );
                                case 1:
                                  return t.sent(), [2, o];
                              }
                            });
                          });
                        })(t, s, e, i.getRuleExecutorIndex(s));
                      }),
                    ])
                  : [2, u];
              case 1:
                return ((r = t.sent()),
                (o = this.getRuleExecutorIndex(s) === n.length - 1),
                !n.length || o)
                  ? [3, 3]
                  : (this.incRuleExecutorIndex(s),
                    [4, this.executeRuleTypeExecutors(s, r)]);
              case 2:
                return [2, t.sent()];
              case 3:
                return this.resetRuleExecutorIndex(s), [2, r];
            }
          });
        });
      }),
      zt);
    function zt(e) {
      (this.bot = e),
        (this._indexes = {}),
        this.reindex(),
        (function (o, i) {
          var e = this;
          ["run", "receiveMessage"].forEach(function (t) {
            var r = o[t];
            o[t] = function () {
              for (var n = [], t = 0; t < arguments.length; t++)
                n[t] = arguments[t];
              return l(e, void 0, void 0, function () {
                var e;
                return f(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]), [4, r.call.apply(r, u([o], n))]
                      );
                    case 1:
                      return [2, t.sent()];
                    case 2:
                      return (e = t.sent()), i(e), [2, o];
                    case 3:
                      return [2];
                  }
                });
              });
            };
          });
        })(this, function (t) {
          return e.dispatch("error", t);
        });
    }
    function Lt(t) {
      return 0 <= ["string", "number"].indexOf(typeof t);
    }
    var Nt,
      g = Object.freeze({
        __proto__: null,
        ValidatorError: function (t, e) {
          (this.key = "validator"),
            (this.message = t || 'Invalid value for "' + e.type + '" type');
        },
        InvalidAttributeError: function (t, e) {
          (this.key = "invalidAttribute"),
            (this.message = "Invalid " + t + ' attribute "' + e.type + '"');
        },
        RuleNotFound: function (t, e) {
          (this.key = "ruleNotFound"),
            (this.message = 'Rule "' + t + '" not found in indexes'),
            (this.indexes = e);
        },
        PauseRuleTypeExecutors: function (t) {
          (this.key = "pauseRuleTypeExecutors"),
            (this.message = 'Rule "' + t + '" must pause execution');
        },
      }),
      $t = {
        includes: function (t, e) {
          return t instanceof RegExp
            ? $t.regex(t, e)
            : !!Lt(t) && 0 <= e.toLowerCase().indexOf(String(t).toLowerCase());
        },
        equals: function (t, e) {
          return !!Lt(t) && e.toLowerCase() === String(t).toLowerCase();
        },
        regex: function (t, e) {
          return t.test(e);
        },
        function: function (t, e) {
          return t(e);
        },
      },
      x = (t(Qt, (Nt = i)), Qt);
    function Qt() {
      var t = Nt.call(this, "listeners") || this;
      return t.define($t), t;
    }
    var Bt = (function () {
      try {
        var t = W(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch (t) {}
    })();
    var Wt = Object.prototype.hasOwnProperty;
    function Gt(t, e, n) {
      var r = t[e];
      (Wt.call(t, e) && Z(r, n) && (void 0 !== n || e in t)) ||
        ((t = t),
        (n = n),
        "__proto__" == (e = e) && Bt
          ? Bt(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
          : (t[e] = n));
    }
    var Ut = 9007199254740991,
      Vt = /^(?:0|[1-9]\d*)$/;
    function Yt(t, e, n, r) {
      if (!q(t)) return t;
      for (
        var o, i, s = -1, u = (e = ft(e, t)).length, a = u - 1, c = t;
        null != c && ++s < u;
  
      ) {
        var l,
          f = ht(e[s]),
          p = n;
        if ("__proto__" === f || "constructor" === f || "prototype" === f)
          return t;
        s != a &&
          ((l = c[f]),
          void 0 === (p = r ? r(l, f, c) : void 0) &&
            (p = q(l)
              ? l
              : ((o = e[s + 1]),
                (l = i = void 0),
                (l = typeof o),
                (i = null == i ? Ut : i) &&
                ("number" == l || ("symbol" != l && Vt.test(o))) &&
                -1 < o &&
                o % 1 == 0 &&
                o < i
                  ? []
                  : {}))),
          Gt(c, f, p),
          (c = c[f]);
      }
      return t;
    }
    function Zt(t, e) {
      return e.length < 2
        ? t
        : dt(
            t,
            (function (t, e, n) {
              var r = -1,
                o = t.length;
              (n = o < n ? o : n) < 0 && (n += o),
                (o =
                  n < (e = e < 0 ? (o < -e ? 0 : o + e) : e) ? 0 : (n - e) >>> 0),
                (e >>>= 0);
              for (var i = Array(o); ++r < o; ) i[r] = t[r + e];
              return i;
            })(e, 0, -1)
          );
    }
    function Dt(t, e) {
      return (
        null == t ||
        null == (t = Zt((t = t), (e = ft((e = e), t)))) ||
        delete t[ht((e = null == (t = e) ? 0 : t.length) ? t[e - 1] : void 0)]
      );
    }
    var Ht =
      ((Jt.prototype.output = function (t) {
        if (t) return this.get("output." + t);
        t = this.get("output");
        return c({}, t);
      }),
      (Jt.prototype.set = function (t, e) {
        var n;
        (this.data =
          ((n = c({}, this.data)),
          (t = t),
          (e = e),
          null == n ? n : Yt(n, t, e))),
          this.bot.dispatch("storeChanged", this.data);
      }),
      (Jt.prototype.get = function (t) {
        return t ? vt(this.data, t) : this.data;
      }),
      (Jt.prototype.unset = function (t) {
        var e = c({}, this.data);
        Dt(e, t), (this.data = e), this.bot.dispatch("storeChanged", this.data);
      }),
      (Jt.prototype.reset = function () {
        this.data = { currentIdx: 0, output: {}, waitingForAnswer: !1 };
      }),
      (Jt.prototype.replace = function (t) {
        this.reset(), (this.data = c(c({}, this.data), t));
      }),
      Jt);
    function Jt(t) {
      (this.bot = t), this.reset();
    }
    var Kt,
      Xt = {
        Any: {},
        Passive: {},
        PassiveLoop: {},
        String: {
          transform: function (e) {
            return l(void 0, void 0, void 0, function () {
              return f(this, function (t) {
                return [2, String(e)];
              });
            });
          },
        },
        Number: {
          transform: function (e) {
            return l(void 0, void 0, void 0, function () {
              return f(this, function (t) {
                return [2, Number(e)];
              });
            });
          },
          validators: [{ number: !0, warning: "Invalid number" }],
        },
        SingleChoice: {
          transform: function (n, r) {
            return l(void 0, void 0, void 0, function () {
              var e;
              return f(this, function (t) {
                return (e = kt(r.options, n))
                  ? [2, void 0 === e.value ? e.label : e.value]
                  : [2, void 0];
              });
            });
          },
          validators: [
            {
              function: function (t, e) {
                return !!kt(e.options, t);
              },
              warning: "Unknown option",
            },
          ],
          requiredMessage: function (t) {
            return !t.options.length;
          },
        },
        MultipleChoice: {
          transform: function (r, o) {
            return l(void 0, void 0, void 0, function () {
              var n;
              return f(this, function (t) {
                var e;
                return [
                  2,
                  Et(
                    (r instanceof Array
                      ? r
                      : ((n = []),
                        o.options.forEach(function (t) {
                          n.push(String(t.value || t.label)),
                            t.synonyms && (n = n.concat(t.synonyms));
                        }),
                        (e = String(r)),
                        n.filter(function (t) {
                          return 0 <= e.toLowerCase().indexOf(t.toLowerCase());
                        }))
                    )
                      .map(function (t) {
                        t = kt(o.options, t);
                        if (t) return void 0 === t.value ? t.label : t.value;
                      })
                      .filter(function (t) {
                        return void 0 !== t;
                      })
                  ),
                ];
              });
            });
          },
          validators: [
            {
              function: function (t, e) {
                var t = Tt(t),
                  n = e.options.map(function (t) {
                    return String(t.value || t.label);
                  });
                return t.every(function (e) {
                  return n.some(function (t) {
                    return Rt(e, t);
                  });
                });
              },
              warning: "Unknown options",
            },
          ],
          requiredMessage: function (t) {
            return !t.options.length;
          },
        },
      },
      m =
        (t(te, (Kt = i)),
        (te.prototype.extend = function (t, e, n, r) {
          var o = this[e],
            i = o.executors,
            e = s(o, ["executors"]),
            o = At(n),
            n = o.executors,
            o = s(o, ["executors"]);
          return this.define(t, c(c({ executors: u(i, n) }, e), o), r);
        }),
        (te.prototype.set = function (t, e) {
          this[t] = At(e);
        }),
        te);
    function te() {
      var t,
        e = Kt.call(this, "types") || this,
        n = {};
      for (t in Xt) Xt.hasOwnProperty(t) && (n[t] = At(Xt[t]));
      return e.define(n), e;
    }
    function ee(t) {
      return /^\d+$/.test(t);
    }
    function ne(t) {
      return ee(t) ? Number(t) : t.length;
    }
    var re,
      oe = {
        required: {
          validate: function (t, e) {
            return Boolean((e || "").trim()) === t;
          },
          warning: "This is required",
        },
        email: {
          validate: function (t, e) {
            return (
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                e
              ) === t
            );
          },
          warning: "Invalid email format",
        },
        regex: {
          validate: function (t, e) {
            return new RegExp(t).test(e);
          },
          warning: "Invalid answer format",
        },
        minWords: {
          validate: function (t, e) {
            return e.split(" ").length >= t;
          },
          warning: function (t) {
            return "This answer must have at least " + t + " words";
          },
        },
        maxWords: {
          validate: function (t, e) {
            return e.split(" ").length <= t;
          },
          warning: function (t) {
            return "This answer must have a maximum " + t + " words";
          },
        },
        min: {
          validate: function (t, e) {
            return ne(e) >= t;
          },
          warning: function (t) {
            return "This answer length must be min " + t;
          },
        },
        max: {
          validate: function (t, e) {
            return ne(e) <= t;
          },
          warning: function (t) {
            return "This answer length must be max " + t;
          },
        },
        lenght: {
          validate: function (t, e) {
            return ne(e) === t;
          },
          warning: function (t) {
            return "It must have lenght " + t;
          },
        },
        string: {
          validate: function (t, e) {
            return Boolean(!ee(e) && "string" == typeof e) === t;
          },
          warning: "It must be a string",
        },
        number: {
          validate: function (t, e) {
            return ee(e) === t;
          },
          warning: "It must be a number",
        },
        function: {
          validate: function (t, e, n, r) {
            return t(e, n, r);
          },
          warning: "Error on execute a validator function",
        },
      },
      b = (t(ie, (re = i)), ie);
    function ie() {
      var t = re.call(this, "validators") || this;
      return t.define(oe), t;
    }
    Object.defineProperty(se.prototype, "context", {
      get: function () {
        return this.store.get("context");
      },
      enumerable: !1,
      configurable: !0,
    }),
      Object.defineProperty(se.prototype, "types", {
        get: function () {
          return se.types;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(se.prototype, "actions", {
        get: function () {
          return se.actions;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(se.prototype, "listeners", {
        get: function () {
          return se.listeners;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(se.prototype, "validators", {
        get: function () {
          return se.validators;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(se.prototype, "exceptions", {
        get: function () {
          return se.exceptions;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (se.prototype.on = function (t, e) {
        return (
          !(0 <= ["error"].indexOf(t)) && t in this.handlers
            ? this.handlers[t].push(e)
            : (this.handlers[t] = [e]),
          this
        );
      }),
      (se.prototype.listen = function (t) {
        var i = this;
        return (
          this.on("listen", function (r, o) {
            t.every(function (t) {
              var t = ((n = (e = t).passive), c(c({}, e), { passive: n || !1 })),
                e = !t.passive && ["Passive", "PassiveLoop"].indexOf(o.type) < 0,
                n = !o.passive;
              if (!t.next || e || n) return !0;
              n = Object.keys(t).filter(function (t) {
                return "next" !== t && t in i.listeners;
              })[0];
              if (n && i.listeners[n](t[n], r))
                return (
                  i.store.set("waitingForAnswer", !1),
                  i.controller.jumpByName(t.next),
                  !1
                );
              return !0;
            });
          }),
          this
        );
      }),
      (se.prototype.start = function () {
        var t;
        return (
          this.dispatch("start"),
          this.store.get("waitingForAnswer") ||
            ((t = this.store.get("currentIdx") || 0), this.controller.run(t)),
          this
        );
      }),
      (se.prototype.end = function () {
        return this.dispatch("end", this.store.output()), this;
      }),
      (se.prototype.talk = function (n, r) {
        return l(this, void 0, void 0, function () {
          var e;
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (e = c(c({}, this.options.rule), r || {})),
                  [4, this.controller.sendMessage(n, e)]
                );
              case 1:
                return t.sent(), [2, this];
            }
          });
        });
      }),
      (se.prototype.hear = function (e) {
        return l(this, void 0, void 0, function () {
          return f(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this.controller.receiveMessage(e)];
              case 1:
                return t.sent(), this.dispatch("reply", e), [2, this];
            }
          });
        });
      }),
      (se.prototype.dispatch = function (t) {
        for (var e = this, n = [], r = 1; r < arguments.length; r++)
          n[r - 1] = arguments[r];
        if (t in this.handlers) {
          if ("error" === t)
            return void this.handlers.error.map(function (t) {
              return t.apply(void 0, u(n, [e.sessionId]));
            });
          Promise.all(
            this.handlers[t].map(function (t) {
              return e.queue.add(function () {
                try {
                  return Promise.resolve(t.apply(void 0, u(n, [e.sessionId])));
                } catch (t) {
                  return e.dispatch("error", t), Promise.resolve();
                }
              });
            })
          );
        }
        return this;
      }),
      (se.prototype.session = function (t, e) {
        return (
          (e = void 0 === e ? {} : e).rules &&
            ((this.rules = e.rules.map(It)), this.controller.reindex()),
          e.store
            ? this.store.replace(e.store)
            : this.sessionId !== t && this.store.reset(),
          e.context && this.store.set("context", e.context),
          (this.sessionId = t),
          this
        );
      }),
      (se.prototype.addRules = function (t) {
        (this.rules = this.rules.concat(t.map(It))), this.controller.reindex();
      }),
      (i = se);
    function se(t, e) {
      var r;
      (this.sessionId = "session"),
        (this.options = c(c({}, { enableWaitForSleep: !0, timePerChar: 40 }), e)),
        (this.rules =
          ((r = []),
          t.forEach(function (n) {
            "string" != typeof n && "rules" in n && "flow" in n
              ? (r = r.concat(
                  n.rules.map(function (t, e) {
                    return c(c({}, It(t)), { flow: n.flow, flowIdx: e });
                  })
                ))
              : r.push(It(n));
          }),
          r)),
        (this.handlers = {}),
        (this.store = new Ht(this)),
        (this.controller = new Mt(this)),
        (this.queue = new n(1)),
        this.options.context && this.store.set("context", this.options.context),
        this.on("error", function (t) {
          throw t;
        });
    }
    return (
      (i.types = new m()),
      (i.actions = new d()),
      (i.listeners = new x()),
      (i.validators = new b()),
      (i.exceptions = g),
      i
    );
  });
  