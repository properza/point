/*! For license information please see sdk.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("liff", [], t)
    : "object" == typeof exports
    ? (exports.liff = t())
    : (e.liff = t());
})(window, function () {
  return (function (e) {
    function t(t) {
      for (var n, o, i = t[0], a = t[1], s = 0, u = []; s < i.length; s++)
        (o = i[s]),
          Object.prototype.hasOwnProperty.call(r, o) && r[o] && u.push(r[o][0]),
          (r[o] = 0);
      for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
      for (c && c(t); u.length; ) u.shift()();
    }
    var n = {},
      r = { 1: 0 };
    function o(t) {
      if (n[t]) return n[t].exports;
      var r = (n[t] = { i: t, l: !1, exports: {} });
      return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
    }
    (o.e = function (e) {
      var t = [],
        n = r[e];
      if (0 !== n)
        if (n) t.push(n[2]);
        else {
          var i = new Promise(function (t, o) {
            n = r[e] = [t, o];
          });
          t.push((n[2] = i));
          var a,
            s = document.createElement("script");
          (s.charset = "utf-8"),
            (s.timeout = 120),
            o.nc && s.setAttribute("nonce", o.nc),
            (s.src = (function (e) {
              return (
                o.p +
                "" +
                ({ 0: "js-crypto-ec", 2: "vendors_js-crypto-ec" }[e] || e) +
                ".4e893020a107f193b130.js"
              );
            })(e));
          var c = new Error();
          a = function (t) {
            (s.onerror = s.onload = null), clearTimeout(u);
            var n = r[e];
            if (0 !== n) {
              if (n) {
                var o = t && ("load" === t.type ? "missing" : t.type),
                  i = t && t.target && t.target.src;
                (c.message =
                  "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"),
                  (c.name = "ChunkLoadError"),
                  (c.type = o),
                  (c.request = i),
                  n[1](c);
              }
              r[e] = void 0;
            }
          };
          var u = setTimeout(function () {
            a({ type: "timeout", target: s });
          }, 12e4);
          (s.onerror = s.onload = a), document.head.appendChild(s);
        }
      return Promise.all(t);
    }),
      (o.m = e),
      (o.c = n),
      (o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (o.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (o.t = function (e, t) {
        if ((1 & t && (e = o(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (o.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            o.d(
              n,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return n;
      }),
      (o.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return o.d(t, "a", t), t;
      }),
      (o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (o.p = "https://static.line-scdn.net/liff/edge/2/"),
      (o.oe = function (e) {
        throw e;
      });
    var i = (window.webpackJsonpliff = window.webpackJsonpliff || []),
      a = i.push.bind(i);
    (i.push = t), (i = i.slice());
    for (var s = 0; s < i.length; s++) t(i[s]);
    var c = a;
    return o((o.s = 16));
  })([
    function (e, t, n) {
      (function (t) {
        var r = n(12),
          o = "production",
          i = t.env.PORT || 8080,
          a = t.env.CIRCLE_BRANCH || "",
          s = r.version.match(/\d+/g)[0],
          c = t.env.SERVER_END_POINT || "line.me",
          u = t.env.LIFF_END_POINT || null,
          l = t.env.CDN || "https://static.line-scdn.net/liff/edge/" + s + "/";
        e.exports = {
          CDN: l,
          ENV: o,
          PORT: i,
          SERVER_END_POINT: c,
          LIFF_END_POINT: u,
          VERSION: r.version,
          IOS_HOMESCREEN_SHORTCUT_URL: "https://line.me/channel/shortcut",
          SHARE_TARGET_PICKER_SCHEME_URL: "line://picker",
          LIFF_CUSTOM_URL_SCHEME: "liff://",
          BRANCH: a
        };
      }).call(this, n(5));
    },
    function (e, t, n) {
      "use strict";
      t.a = function (e) {
        var t = this.constructor;
        return this.then(
          function (n) {
            return t.resolve(e()).then(function () {
              return n;
            });
          },
          function (n) {
            return t.resolve(e()).then(function () {
              return t.reject(n);
            });
          }
        );
      };
    },
    function (e, t, n) {
      var r, o, i;
      (o = []),
        void 0 ===
          (i =
            "function" ==
            typeof (r = function () {
              var e = function e(t) {
                function n(e, t) {
                  return (e >>> t) | (e << (32 - t));
                }
                for (
                  var r,
                    o,
                    i = Math.pow,
                    a = i(2, 32),
                    s = "",
                    c = [],
                    u = 8 * t.length,
                    l = (e.h = e.h || []),
                    f = (e.k = e.k || []),
                    d = f.length,
                    p = {},
                    h = 2;
                  d < 64;
                  h++
                )
                  if (!p[h]) {
                    for (r = 0; r < 313; r += h) p[r] = h;
                    (l[d] = (i(h, 0.5) * a) | 0),
                      (f[d++] = (i(h, 1 / 3) * a) | 0);
                  }
                for (t += "Â€"; (t.length % 64) - 56; ) t += "\0";
                for (r = 0; r < t.length; r++) {
                  if ((o = t.charCodeAt(r)) >> 8) return;
                  c[r >> 2] |= o << (((3 - r) % 4) * 8);
                }
                for (
                  c[c.length] = (u / a) | 0, c[c.length] = u, o = 0;
                  o < c.length;

                ) {
                  var y = c.slice(o, (o += 16)),
                    v = l;
                  for (l = l.slice(0, 8), r = 0; r < 64; r++) {
                    var m = y[r - 15],
                      w = y[r - 2],
                      g = l[0],
                      b = l[4],
                      _ =
                        l[7] +
                        (n(b, 6) ^ n(b, 11) ^ n(b, 25)) +
                        ((b & l[5]) ^ (~b & l[6])) +
                        f[r] +
                        (y[r] =
                          r < 16
                            ? y[r]
                            : (y[r - 16] +
                                (n(m, 7) ^ n(m, 18) ^ (m >>> 3)) +
                                y[r - 7] +
                                (n(w, 17) ^ n(w, 19) ^ (w >>> 10))) |
                              0);
                    (l = [
                      (_ +
                        ((n(g, 2) ^ n(g, 13) ^ n(g, 22)) +
                          ((g & l[1]) ^ (g & l[2]) ^ (l[1] & l[2])))) |
                        0
                    ].concat(l))[4] = (l[4] + _) | 0;
                  }
                  for (r = 0; r < 8; r++) l[r] = (l[r] + v[r]) | 0;
                }
                for (r = 0; r < 8; r++)
                  for (o = 3; o + 1; o--) {
                    var I = (l[r] >> (8 * o)) & 255;
                    s += (I < 16 ? 0 : "") + I.toString(16);
                  }
                return s;
              };
              return (
                (e.code =
                  'var sha256=function a(b){function c(a,b){return a>>>b|a<<32-b}for(var d,e,f=Math.pow,g=f(2,32),h="length",i="",j=[],k=8*b[h],l=a.h=a.h||[],m=a.k=a.k||[],n=m[h],o={},p=2;64>n;p++)if(!o[p]){for(d=0;313>d;d+=p)o[d]=p;l[n]=f(p,.5)*g|0,m[n++]=f(p,1/3)*g|0}for(b+="\\x80";b[h]%64-56;)b+="\\x00";for(d=0;d<b[h];d++){if(e=b.charCodeAt(d),e>>8)return;j[d>>2]|=e<<(3-d)%4*8}for(j[j[h]]=k/g|0,j[j[h]]=k,e=0;e<j[h];){var q=j.slice(e,e+=16),r=l;for(l=l.slice(0,8),d=0;64>d;d++){var s=q[d-15],t=q[d-2],u=l[0],v=l[4],w=l[7]+(c(v,6)^c(v,11)^c(v,25))+(v&l[5]^~v&l[6])+m[d]+(q[d]=16>d?q[d]:q[d-16]+(c(s,7)^c(s,18)^s>>>3)+q[d-7]+(c(t,17)^c(t,19)^t>>>10)|0),x=(c(u,2)^c(u,13)^c(u,22))+(u&l[1]^u&l[2]^l[1]&l[2]);l=[w+x|0].concat(l),l[4]=l[4]+w|0}for(d=0;8>d;d++)l[d]=l[d]+r[d]|0}for(d=0;8>d;d++)for(e=3;e+1;e--){var y=l[d]>>8*e&255;i+=(16>y?0:"")+y.toString(16)}return i};'),
                e
              );
            })
              ? r.apply(t, o)
              : r) || (e.exports = i);
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      var r = Object.prototype.hasOwnProperty,
        o = Array.isArray,
        i = (function () {
          for (var e = [], t = 0; t < 256; ++t)
            e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
          return e;
        })(),
        a = function (e, t) {
          for (
            var n = t && t.plainObjects ? Object.create(null) : {}, r = 0;
            r < e.length;
            ++r
          )
            void 0 !== e[r] && (n[r] = e[r]);
          return n;
        };
      e.exports = {
        arrayToObject: a,
        assign: function (e, t) {
          return Object.keys(t).reduce(function (e, n) {
            return (e[n] = t[n]), e;
          }, e);
        },
        combine: function (e, t) {
          return [].concat(e, t);
        },
        compact: function (e) {
          for (
            var t = [{ obj: { o: e }, prop: "o" }], n = [], r = 0;
            r < t.length;
            ++r
          )
            for (
              var i = t[r], a = i.obj[i.prop], s = Object.keys(a), c = 0;
              c < s.length;
              ++c
            ) {
              var u = s[c],
                l = a[u];
              "object" == typeof l &&
                null !== l &&
                -1 === n.indexOf(l) &&
                (t.push({ obj: a, prop: u }), n.push(l));
            }
          return (
            (function (e) {
              for (; e.length > 1; ) {
                var t = e.pop(),
                  n = t.obj[t.prop];
                if (o(n)) {
                  for (var r = [], i = 0; i < n.length; ++i)
                    void 0 !== n[i] && r.push(n[i]);
                  t.obj[t.prop] = r;
                }
              }
            })(t),
            e
          );
        },
        decode: function (e, t, n) {
          var r = e.replace(/\+/g, " ");
          if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
          try {
            return decodeURIComponent(r);
          } catch (o) {
            return r;
          }
        },
        encode: function (e, t, n) {
          if (0 === e.length) return e;
          var r = e;
          if (
            ("symbol" == typeof e
              ? (r = Symbol.prototype.toString.call(e))
              : "string" != typeof e && (r = String(e)),
            "iso-8859-1" === n)
          )
            return escape(r).replace(/%u[0-9a-f]{4}/gi, function (e) {
              return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
            });
          for (var o = "", a = 0; a < r.length; ++a) {
            var s = r.charCodeAt(a);
            45 === s ||
            46 === s ||
            95 === s ||
            126 === s ||
            (s >= 48 && s <= 57) ||
            (s >= 65 && s <= 90) ||
            (s >= 97 && s <= 122)
              ? (o += r.charAt(a))
              : s < 128
              ? (o += i[s])
              : s < 2048
              ? (o += i[192 | (s >> 6)] + i[128 | (63 & s)])
              : s < 55296 || s >= 57344
              ? (o +=
                  i[224 | (s >> 12)] +
                  i[128 | ((s >> 6) & 63)] +
                  i[128 | (63 & s)])
              : ((a += 1),
                (s = 65536 + (((1023 & s) << 10) | (1023 & r.charCodeAt(a)))),
                (o +=
                  i[240 | (s >> 18)] +
                  i[128 | ((s >> 12) & 63)] +
                  i[128 | ((s >> 6) & 63)] +
                  i[128 | (63 & s)]));
          }
          return o;
        },
        isBuffer: function (e) {
          return (
            !(!e || "object" != typeof e) &&
            !!(
              e.constructor &&
              e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            )
          );
        },
        isRegExp: function (e) {
          return "[object RegExp]" === Object.prototype.toString.call(e);
        },
        merge: function e(t, n, i) {
          if (!n) return t;
          if ("object" != typeof n) {
            if (o(t)) t.push(n);
            else {
              if (!t || "object" != typeof t) return [t, n];
              ((i && (i.plainObjects || i.allowPrototypes)) ||
                !r.call(Object.prototype, n)) &&
                (t[n] = !0);
            }
            return t;
          }
          if (!t || "object" != typeof t) return [t].concat(n);
          var s = t;
          return (
            o(t) && !o(n) && (s = a(t, i)),
            o(t) && o(n)
              ? (n.forEach(function (n, o) {
                  if (r.call(t, o)) {
                    var a = t[o];
                    a && "object" == typeof a && n && "object" == typeof n
                      ? (t[o] = e(a, n, i))
                      : t.push(n);
                  } else t[o] = n;
                }),
                t)
              : Object.keys(n).reduce(function (t, o) {
                  var a = n[o];
                  return r.call(t, o) ? (t[o] = e(t[o], a, i)) : (t[o] = a), t;
                }, s)
          );
        }
      };
    },
    function (e, t) {
      var n,
        r,
        o = (e.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          r = a;
        }
      })();
      var c,
        u = [],
        l = !1,
        f = -1;
      function d() {
        l &&
          c &&
          ((l = !1), c.length ? (u = c.concat(u)) : (f = -1), u.length && p());
      }
      function p() {
        if (!l) {
          var e = s(d);
          l = !0;
          for (var t = u.length; t; ) {
            for (c = u, u = []; ++f < t; ) c && c[f].run();
            (f = -1), (t = u.length);
          }
          (c = null),
            (l = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function y() {}
      (o.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new h(e, t)), 1 !== u.length || l || s(p);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = y),
        (o.addListener = y),
        (o.once = y),
        (o.off = y),
        (o.removeListener = y),
        (o.removeAllListeners = y),
        (o.emit = y),
        (o.prependListener = y),
        (o.prependOnceListener = y),
        (o.listeners = function (e) {
          return [];
        }),
        (o.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      "use strict";
      var r = String.prototype.replace,
        o = /%20/g,
        i = n(4),
        a = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
      e.exports = i.assign(
        {
          default: a.RFC3986,
          formatters: {
            RFC1738: function (e) {
              return r.call(e, o, "+");
            },
            RFC3986: function (e) {
              return String(e);
            }
          }
        },
        a
      );
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(1),
          o = setTimeout;
        function i(e) {
          return Boolean(e && void 0 !== e.length);
        }
        function a() {}
        function s(e) {
          if (!(this instanceof s))
            throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof e) throw new TypeError("not a function");
          (this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            p(e, this);
        }
        function c(e, t) {
          for (; 3 === e._state; ) e = e._value;
          0 !== e._state
            ? ((e._handled = !0),
              s._immediateFn(function () {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                  var r;
                  try {
                    r = n(e._value);
                  } catch (o) {
                    return void l(t.promise, o);
                  }
                  u(t.promise, r);
                } else (1 === e._state ? u : l)(t.promise, e._value);
              }))
            : e._deferreds.push(t);
        }
        function u(e, t) {
          try {
            if (t === e)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
              var n = t.then;
              if (t instanceof s)
                return (e._state = 3), (e._value = t), void f(e);
              if ("function" == typeof n)
                return void p(
                  ((r = n),
                  (o = t),
                  function () {
                    r.apply(o, arguments);
                  }),
                  e
                );
            }
            (e._state = 1), (e._value = t), f(e);
          } catch (i) {
            l(e, i);
          }
          var r, o;
        }
        function l(e, t) {
          (e._state = 2), (e._value = t), f(e);
        }
        function f(e) {
          2 === e._state &&
            0 === e._deferreds.length &&
            s._immediateFn(function () {
              e._handled || s._unhandledRejectionFn(e._value);
            });
          for (var t = 0, n = e._deferreds.length; t < n; t++)
            c(e, e._deferreds[t]);
          e._deferreds = null;
        }
        function d(e, t, n) {
          (this.onFulfilled = "function" == typeof e ? e : null),
            (this.onRejected = "function" == typeof t ? t : null),
            (this.promise = n);
        }
        function p(e, t) {
          var n = !1;
          try {
            e(
              function (e) {
                n || ((n = !0), u(t, e));
              },
              function (e) {
                n || ((n = !0), l(t, e));
              }
            );
          } catch (r) {
            if (n) return;
            (n = !0), l(t, r);
          }
        }
        (s.prototype.catch = function (e) {
          return this.then(null, e);
        }),
          (s.prototype.then = function (e, t) {
            var n = new this.constructor(a);
            return c(this, new d(e, t, n)), n;
          }),
          (s.prototype.finally = r.a),
          (s.all = function (e) {
            return new s(function (t, n) {
              if (!i(e))
                return n(new TypeError("Promise.all accepts an array"));
              var r = Array.prototype.slice.call(e);
              if (0 === r.length) return t([]);
              var o = r.length;
              function a(e, i) {
                try {
                  if (i && ("object" == typeof i || "function" == typeof i)) {
                    var s = i.then;
                    if ("function" == typeof s)
                      return void s.call(
                        i,
                        function (t) {
                          a(e, t);
                        },
                        n
                      );
                  }
                  (r[e] = i), 0 == --o && t(r);
                } catch (c) {
                  n(c);
                }
              }
              for (var s = 0; s < r.length; s++) a(s, r[s]);
            });
          }),
          (s.resolve = function (e) {
            return e && "object" == typeof e && e.constructor === s
              ? e
              : new s(function (t) {
                  t(e);
                });
          }),
          (s.reject = function (e) {
            return new s(function (t, n) {
              n(e);
            });
          }),
          (s.race = function (e) {
            return new s(function (t, n) {
              if (!i(e))
                return n(new TypeError("Promise.race accepts an array"));
              for (var r = 0, o = e.length; r < o; r++)
                s.resolve(e[r]).then(t, n);
            });
          }),
          (s._immediateFn =
            ("function" == typeof e &&
              function (t) {
                e(t);
              }) ||
            function (e) {
              o(e, 0);
            }),
          (s._unhandledRejectionFn = function (e) {
            "undefined" != typeof console && console;
          }),
          (t.a = s);
      }).call(this, n(9).setImmediate);
    },
    function (e, t, n) {
      "use strict";
      var r = n(13),
        o = n(14),
        i = n(6);
      e.exports = { formats: i, parse: o, stringify: r };
    },
    function (e, t, n) {
      (function (e) {
        var r =
            (void 0 !== e && e) ||
            ("undefined" != typeof self && self) ||
            window,
          o = Function.prototype.apply;
        function i(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (t.setTimeout = function () {
          return new i(o.call(setTimeout, r, arguments), clearTimeout);
        }),
          (t.setInterval = function () {
            return new i(o.call(setInterval, r, arguments), clearInterval);
          }),
          (t.clearTimeout = t.clearInterval =
            function (e) {
              e && e.close();
            }),
          (i.prototype.unref = i.prototype.ref = function () {}),
          (i.prototype.close = function () {
            this._clearFn.call(r, this._id);
          }),
          (t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (t._unrefActive = t.active =
            function (e) {
              clearTimeout(e._idleTimeoutId);
              var t = e._idleTimeout;
              t >= 0 &&
                (e._idleTimeoutId = setTimeout(function () {
                  e._onTimeout && e._onTimeout();
                }, t));
            }),
          n(11),
          (t.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }).call(this, n(3));
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var t = n(7),
          r = n(1),
          o = (function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== e) return e;
            throw new Error("unable to locate global object");
          })();
        "Promise" in o
          ? o.Promise.prototype.finally || (o.Promise.prototype.finally = r.a)
          : (o.Promise = t.a);
      }).call(this, n(3));
    },
    function (e, t, n) {
      (function (e, t) {
        !(function (e, n) {
          "use strict";
          if (!e.setImmediate) {
            var r,
              o,
              i,
              a,
              s,
              c = 1,
              u = {},
              l = !1,
              f = e.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (d = d && d.setTimeout ? d : e),
              "[object process]" === {}.toString.call(e.process)
                ? (r = function (e) {
                    t.nextTick(function () {
                      h(e);
                    });
                  })
                : !(function () {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function () {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? e.MessageChannel
                  ? (((i = new MessageChannel()).port1.onmessage = function (
                      e
                    ) {
                      h(e.data);
                    }),
                    (r = function (e) {
                      i.port2.postMessage(e);
                    }))
                  : f && "onreadystatechange" in f.createElement("script")
                  ? ((o = f.documentElement),
                    (r = function (e) {
                      var t = f.createElement("script");
                      (t.onreadystatechange = function () {
                        h(e),
                          (t.onreadystatechange = null),
                          o.removeChild(t),
                          (t = null);
                      }),
                        o.appendChild(t);
                    }))
                  : (r = function (e) {
                      setTimeout(h, 0, e);
                    })
                : ((a = "setImmediate$" + Math.random() + "$"),
                  (s = function (t) {
                    t.source === e &&
                      "string" == typeof t.data &&
                      0 === t.data.indexOf(a) &&
                      h(+t.data.slice(a.length));
                  }),
                  e.addEventListener
                    ? e.addEventListener("message", s, !1)
                    : e.attachEvent("onmessage", s),
                  (r = function (t) {
                    e.postMessage(a + t, "*");
                  })),
              (d.setImmediate = function (e) {
                "function" != typeof e && (e = new Function("" + e));
                for (
                  var t = new Array(arguments.length - 1), n = 0;
                  n < t.length;
                  n++
                )
                  t[n] = arguments[n + 1];
                var o = { callback: e, args: t };
                return (u[c] = o), r(c), c++;
              }),
              (d.clearImmediate = p);
          }
          function p(e) {
            delete u[e];
          }
          function h(e) {
            if (l) setTimeout(h, 0, e);
            else {
              var t = u[e];
              if (t) {
                l = !0;
                try {
                  !(function (e) {
                    var t = e.callback,
                      n = e.args;
                    switch (n.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(n[0]);
                        break;
                      case 2:
                        t(n[0], n[1]);
                        break;
                      case 3:
                        t(n[0], n[1], n[2]);
                        break;
                      default:
                        t.apply(void 0, n);
                    }
                  })(t);
                } finally {
                  p(e), (l = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
      }).call(this, n(3), n(5));
    },
    function (e) {
      e.exports = JSON.parse(
        '{"name":"@line/liff","version":"2.4.1","main":"dist/lib/index.js","types":"dist/lib","files":["dist/lib","package.json","README.md"],"homepage":"https://developers.line.biz/en/docs/liff/overview/","license":"SEE THE LICENSE SECTION IN README.md","scripts":{"test":"jest","dev:watch:sdk":"webpack -w -c ./webpack.config.js","check:forbidden-urls":"node .circleci/check-forbidden-url.js","prettier":"prettier \'./lib/**\' -c","lint":"eslint \'./lib/**\' --ext .ts --ext .test.js","build:test":"NODE_ENV=test webpack --c ./webpack.config.js","build:beta":"NODE_ENV=beta yarn build_for_deploy","build:rc":"NODE_ENV=rc yarn build_for_deploy","build:master":"NODE_ENV=production yarn build_for_deploy","build:branch":"NODE_ENV=branch yarn build_for_deploy","build_for_deploy":"webpack --c ./webpack.config.js && cp -r dist/${NODE_ENV}/ dist/${NODE_ENV}-copied","deploy:test":"reg test --noTag","deploy:beta":"npm run deploy:beta-edge && npm run deploy:beta-versions","deploy:beta-edge":"reg beta-edge --noTag","deploy:beta-versions":"reg beta-versions --noTag","deploy:rc":"npm run deploy:rc-edge && npm run deploy:rc-versions","deploy:rc-edge":"reg rc-edge --noTag","deploy:rc-versions":"reg rc-versions --noTag","deploy:master":"npm run deploy:master-edge && npm run deploy:master-versions","deploy:master-edge":"reg -r master-edge --noTag","deploy:master-versions":"reg -r master-versions --noTag","deploy:branch":"reg branch --noTag","prepublishOnly":"./build-package.sh"},"dependencies":{"@line/bot-sdk":"^7.0.0","js-crypto-ec":"^0.5.6","promise-polyfill":"^8.1.0","tiny-sha256":"^1.0.2","whatwg-fetch":"^3.0.0"},"devDependencies":{"@babel/core":"^7.7.7","@babel/plugin-proposal-class-properties":"^7.8.3","@babel/plugin-syntax-dynamic-import":"^7.7.4","@babel/preset-env":"^7.7.7","@babel/preset-typescript":"^7.7.7","@linecorp/reg":"^1.7.0","@types/jest":"^24.0.25","@typescript-eslint/eslint-plugin":"^2.13.0","@typescript-eslint/parser":"^2.13.0","babel-jest":"^24.6.0","babel-loader":"^8.0.6","body-parser":"^1.18.3","chalk":"^3.0.0","concurrently":"^5.0.2","css-loader":"^3.3.2","eslint":"^6.8.0","eslint-config-prettier":"^6.8.0","eslint-loader":"^3.0.3","eslint-plugin-jest":"^23.1.1","express":"^4.16.4","fast-check":"^1.21.0","http-proxy-middleware":"^0.20.0","husky":"^3.1.0","jest":"^24.6.0","lint-staged":">=9.5.0","nodemon":"^2.0.2","prettier":"^1.19.1","qs":"^6.9.1","request":"^2.88.0","request-promise":"^4.2.5","serve-handler":"^6.1.2","shelljs":"^0.8.3","terser-webpack-plugin":"^2.3.1","ts-loader":"^6.2.1","tslib":"^1.9.3","typescript":"^3.7.4","vconsole":"^3.3.4","vue":"^2.6.11","vue-loader":"^15.8.1","vue-style-loader":"^4.1.2","vue-template-compiler":"^2.6.11","webpack":"^4.41.4","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.3.10"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.ts":["prettier --write","eslint --fix","git add"],"*.test.js":["prettier --write","eslint --fix","git add"]}}'
      );
    },
    function (e, t, n) {
      "use strict";
      var r = n(4),
        o = n(6),
        i = Object.prototype.hasOwnProperty,
        a = {
          brackets: function (e) {
            return e + "[]";
          },
          comma: "comma",
          indices: function (e, t) {
            return e + "[" + t + "]";
          },
          repeat: function (e) {
            return e;
          }
        },
        s = Array.isArray,
        c = Array.prototype.push,
        u = function (e, t) {
          c.apply(e, s(t) ? t : [t]);
        },
        l = Date.prototype.toISOString,
        f = o.default,
        d = {
          addQueryPrefix: !1,
          allowDots: !1,
          charset: "utf-8",
          charsetSentinel: !1,
          delimiter: "&",
          encode: !0,
          encoder: r.encode,
          encodeValuesOnly: !1,
          format: f,
          formatter: o.formatters[f],
          indices: !1,
          serializeDate: function (e) {
            return l.call(e);
          },
          skipNulls: !1,
          strictNullHandling: !1
        },
        p = function e(t, n, o, i, a, c, l, f, p, h, y, v, m) {
          var w,
            g = t;
          if (
            ("function" == typeof l
              ? (g = l(n, g))
              : g instanceof Date
              ? (g = h(g))
              : "comma" === o && s(g) && (g = g.join(",")),
            null === g)
          ) {
            if (i) return c && !v ? c(n, d.encoder, m, "key") : n;
            g = "";
          }
          if (
            "string" == typeof (w = g) ||
            "number" == typeof w ||
            "boolean" == typeof w ||
            "symbol" == typeof w ||
            "bigint" == typeof w ||
            r.isBuffer(g)
          )
            return c
              ? [
                  y(v ? n : c(n, d.encoder, m, "key")) +
                    "=" +
                    y(c(g, d.encoder, m, "value"))
                ]
              : [y(n) + "=" + y(String(g))];
          var b,
            _ = [];
          if (void 0 === g) return _;
          if (s(l)) b = l;
          else {
            var I = Object.keys(g);
            b = f ? I.sort(f) : I;
          }
          for (var E = 0; E < b.length; ++E) {
            var T = b[E];
            (a && null === g[T]) ||
              (s(g)
                ? u(
                    _,
                    e(
                      g[T],
                      "function" == typeof o ? o(n, T) : n,
                      o,
                      i,
                      a,
                      c,
                      l,
                      f,
                      p,
                      h,
                      y,
                      v,
                      m
                    )
                  )
                : u(
                    _,
                    e(
                      g[T],
                      n + (p ? "." + T : "[" + T + "]"),
                      o,
                      i,
                      a,
                      c,
                      l,
                      f,
                      p,
                      h,
                      y,
                      v,
                      m
                    )
                  ));
          }
          return _;
        };
      e.exports = function (e, t) {
        var n,
          r = e,
          c = (function (e) {
            if (!e) return d;
            if (
              null !== e.encoder &&
              void 0 !== e.encoder &&
              "function" != typeof e.encoder
            )
              throw new TypeError("Encoder has to be a function.");
            var t = e.charset || d.charset;
            if (
              void 0 !== e.charset &&
              "utf-8" !== e.charset &&
              "iso-8859-1" !== e.charset
            )
              throw new TypeError(
                "The charset option must be either utf-8, iso-8859-1, or undefined"
              );
            var n = o.default;
            if (void 0 !== e.format) {
              if (!i.call(o.formatters, e.format))
                throw new TypeError("Unknown format option provided.");
              n = e.format;
            }
            var r = o.formatters[n],
              a = d.filter;
            return (
              ("function" == typeof e.filter || s(e.filter)) && (a = e.filter),
              {
                addQueryPrefix:
                  "boolean" == typeof e.addQueryPrefix
                    ? e.addQueryPrefix
                    : d.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? d.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel:
                  "boolean" == typeof e.charsetSentinel
                    ? e.charsetSentinel
                    : d.charsetSentinel,
                delimiter: void 0 === e.delimiter ? d.delimiter : e.delimiter,
                encode: "boolean" == typeof e.encode ? e.encode : d.encode,
                encoder: "function" == typeof e.encoder ? e.encoder : d.encoder,
                encodeValuesOnly:
                  "boolean" == typeof e.encodeValuesOnly
                    ? e.encodeValuesOnly
                    : d.encodeValuesOnly,
                filter: a,
                formatter: r,
                serializeDate:
                  "function" == typeof e.serializeDate
                    ? e.serializeDate
                    : d.serializeDate,
                skipNulls:
                  "boolean" == typeof e.skipNulls ? e.skipNulls : d.skipNulls,
                sort: "function" == typeof e.sort ? e.sort : null,
                strictNullHandling:
                  "boolean" == typeof e.strictNullHandling
                    ? e.strictNullHandling
                    : d.strictNullHandling
              }
            );
          })(t);
        "function" == typeof c.filter
          ? (r = (0, c.filter)("", r))
          : s(c.filter) && (n = c.filter);
        var l,
          f = [];
        if ("object" != typeof r || null === r) return "";
        l =
          t && t.arrayFormat in a
            ? t.arrayFormat
            : t && "indices" in t
            ? t.indices
              ? "indices"
              : "repeat"
            : "indices";
        var h = a[l];
        n || (n = Object.keys(r)), c.sort && n.sort(c.sort);
        for (var y = 0; y < n.length; ++y) {
          var v = n[y];
          (c.skipNulls && null === r[v]) ||
            u(
              f,
              p(
                r[v],
                v,
                h,
                c.strictNullHandling,
                c.skipNulls,
                c.encode ? c.encoder : null,
                c.filter,
                c.sort,
                c.allowDots,
                c.serializeDate,
                c.formatter,
                c.encodeValuesOnly,
                c.charset
              )
            );
        }
        var m = f.join(c.delimiter),
          w = !0 === c.addQueryPrefix ? "?" : "";
        return (
          c.charsetSentinel &&
            ("iso-8859-1" === c.charset
              ? (w += "utf8=%26%2310003%3B&")
              : (w += "utf8=%E2%9C%93&")),
          m.length > 0 ? w + m : ""
        );
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(4),
        o = Object.prototype.hasOwnProperty,
        i = Array.isArray,
        a = {
          allowDots: !1,
          allowPrototypes: !1,
          arrayLimit: 20,
          charset: "utf-8",
          charsetSentinel: !1,
          comma: !1,
          decoder: r.decode,
          delimiter: "&",
          depth: 5,
          ignoreQueryPrefix: !1,
          interpretNumericEntities: !1,
          parameterLimit: 1e3,
          parseArrays: !0,
          plainObjects: !1,
          strictNullHandling: !1
        },
        s = function (e) {
          return e.replace(/&#(\d+);/g, function (e, t) {
            return String.fromCharCode(parseInt(t, 10));
          });
        },
        c = function (e, t) {
          return e && "string" == typeof e && t.comma && e.indexOf(",") > -1
            ? e.split(",")
            : e;
        },
        u = function (e, t) {
          if (i(e)) {
            for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
            return n;
          }
          return t(e);
        },
        l = function (e, t, n, r) {
          if (e) {
            var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
              a = /(\[[^[\]]*])/g,
              s = n.depth > 0 && /(\[[^[\]]*])/.exec(i),
              u = s ? i.slice(0, s.index) : i,
              l = [];
            if (u) {
              if (
                !n.plainObjects &&
                o.call(Object.prototype, u) &&
                !n.allowPrototypes
              )
                return;
              l.push(u);
            }
            for (
              var f = 0;
              n.depth > 0 && null !== (s = a.exec(i)) && f < n.depth;

            ) {
              if (
                ((f += 1),
                !n.plainObjects &&
                  o.call(Object.prototype, s[1].slice(1, -1)) &&
                  !n.allowPrototypes)
              )
                return;
              l.push(s[1]);
            }
            return (
              s && l.push("[" + i.slice(s.index) + "]"),
              (function (e, t, n, r) {
                for (var o = r ? t : c(t, n), i = e.length - 1; i >= 0; --i) {
                  var a,
                    s = e[i];
                  if ("[]" === s && n.parseArrays) a = [].concat(o);
                  else {
                    a = n.plainObjects ? Object.create(null) : {};
                    var u =
                        "[" === s.charAt(0) && "]" === s.charAt(s.length - 1)
                          ? s.slice(1, -1)
                          : s,
                      l = parseInt(u, 10);
                    n.parseArrays || "" !== u
                      ? !isNaN(l) &&
                        s !== u &&
                        String(l) === u &&
                        l >= 0 &&
                        n.parseArrays &&
                        l <= n.arrayLimit
                        ? ((a = [])[l] = o)
                        : (a[u] = o)
                      : (a = { 0: o });
                  }
                  o = a;
                }
                return o;
              })(l, t, n, r)
            );
          }
        };
      e.exports = function (e, t) {
        var n = (function (e) {
          if (!e) return a;
          if (
            null !== e.decoder &&
            void 0 !== e.decoder &&
            "function" != typeof e.decoder
          )
            throw new TypeError("Decoder has to be a function.");
          if (
            void 0 !== e.charset &&
            "utf-8" !== e.charset &&
            "iso-8859-1" !== e.charset
          )
            throw new TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          var t = void 0 === e.charset ? a.charset : e.charset;
          return {
            allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
            allowPrototypes:
              "boolean" == typeof e.allowPrototypes
                ? e.allowPrototypes
                : a.allowPrototypes,
            arrayLimit:
              "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
            charset: t,
            charsetSentinel:
              "boolean" == typeof e.charsetSentinel
                ? e.charsetSentinel
                : a.charsetSentinel,
            comma: "boolean" == typeof e.comma ? e.comma : a.comma,
            decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
            delimiter:
              "string" == typeof e.delimiter || r.isRegExp(e.delimiter)
                ? e.delimiter
                : a.delimiter,
            depth:
              "number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities:
              "boolean" == typeof e.interpretNumericEntities
                ? e.interpretNumericEntities
                : a.interpretNumericEntities,
            parameterLimit:
              "number" == typeof e.parameterLimit
                ? e.parameterLimit
                : a.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects:
              "boolean" == typeof e.plainObjects
                ? e.plainObjects
                : a.plainObjects,
            strictNullHandling:
              "boolean" == typeof e.strictNullHandling
                ? e.strictNullHandling
                : a.strictNullHandling
          };
        })(t);
        if ("" === e || null == e)
          return n.plainObjects ? Object.create(null) : {};
        for (
          var f =
              "string" == typeof e
                ? (function (e, t) {
                    var n,
                      l = {},
                      f = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                      d =
                        t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                      p = f.split(t.delimiter, d),
                      h = -1,
                      y = t.charset;
                    if (t.charsetSentinel)
                      for (n = 0; n < p.length; ++n)
                        0 === p[n].indexOf("utf8=") &&
                          ("utf8=%E2%9C%93" === p[n]
                            ? (y = "utf-8")
                            : "utf8=%26%2310003%3B" === p[n] &&
                              (y = "iso-8859-1"),
                          (h = n),
                          (n = p.length));
                    for (n = 0; n < p.length; ++n)
                      if (n !== h) {
                        var v,
                          m,
                          w = p[n],
                          g = w.indexOf("]="),
                          b = -1 === g ? w.indexOf("=") : g + 1;
                        -1 === b
                          ? ((v = t.decoder(w, a.decoder, y, "key")),
                            (m = t.strictNullHandling ? null : ""))
                          : ((v = t.decoder(
                              w.slice(0, b),
                              a.decoder,
                              y,
                              "key"
                            )),
                            (m = u(c(w.slice(b + 1), t), function (e) {
                              return t.decoder(e, a.decoder, y, "value");
                            }))),
                          m &&
                            t.interpretNumericEntities &&
                            "iso-8859-1" === y &&
                            (m = s(m)),
                          w.indexOf("[]=") > -1 && (m = i(m) ? [m] : m),
                          o.call(l, v)
                            ? (l[v] = r.combine(l[v], m))
                            : (l[v] = m);
                      }
                    return l;
                  })(e, n)
                : e,
            d = n.plainObjects ? Object.create(null) : {},
            p = Object.keys(f),
            h = 0;
          h < p.length;
          ++h
        ) {
          var y = p[h],
            v = l(y, f[y], n, "string" == typeof e);
          d = r.merge(d, v, n);
        }
        return r.compact(d);
      };
    },
    function (e, t) {
      !(function () {
        if ("function" != typeof window.CustomEvent) {
          function e(e, t) {
            var n = t || {},
              r = n.bubbles,
              o = void 0 !== r && r,
              i = n.cancelable,
              a = void 0 !== i && i,
              s = n.detail,
              c = void 0 === s ? void 0 : s,
              u = document.createEvent("CustomEvent");
            return u.initCustomEvent(e, o, a, c), u;
          }
          (e.prototype = Event.prototype), (window.CustomEvent = e);
        }
      })();
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "liff", function () {
          return Nt;
        });
      var r = "URLSearchParams" in self,
        o = "Symbol" in self && "iterator" in Symbol,
        i =
          "FileReader" in self &&
          "Blob" in self &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (e) {
              return !1;
            }
          })(),
        a = "FormData" in self,
        s = "ArrayBuffer" in self;
      if (s)
        var c = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ],
          u =
            ArrayBuffer.isView ||
            function (e) {
              return e && c.indexOf(Object.prototype.toString.call(e)) > -1;
            };
      function l(e) {
        if (
          ("string" != typeof e && (e = String(e)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
        )
          throw new TypeError("Invalid character in header field name");
        return e.toLowerCase();
      }
      function f(e) {
        return "string" != typeof e && (e = String(e)), e;
      }
      function d(e) {
        var t = {
          next: function () {
            var t = e.shift();
            return { done: void 0 === t, value: t };
          }
        };
        return (
          o &&
            (t[Symbol.iterator] = function () {
              return t;
            }),
          t
        );
      }
      function p(e) {
        (this.map = {}),
          e instanceof p
            ? e.forEach(function (e, t) {
                this.append(t, e);
              }, this)
            : Array.isArray(e)
            ? e.forEach(function (e) {
                this.append(e[0], e[1]);
              }, this)
            : e &&
              Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t]);
              }, this);
      }
      function h(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0;
      }
      function y(e) {
        return new Promise(function (t, n) {
          (e.onload = function () {
            t(e.result);
          }),
            (e.onerror = function () {
              n(e.error);
            });
        });
      }
      function v(e) {
        var t = new FileReader(),
          n = y(t);
        return t.readAsArrayBuffer(e), n;
      }
      function m(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }
      function w() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (e) {
            var t;
            (this._bodyInit = e),
              e
                ? "string" == typeof e
                  ? (this._bodyText = e)
                  : i && Blob.prototype.isPrototypeOf(e)
                  ? (this._bodyBlob = e)
                  : a && FormData.prototype.isPrototypeOf(e)
                  ? (this._bodyFormData = e)
                  : r && URLSearchParams.prototype.isPrototypeOf(e)
                  ? (this._bodyText = e.toString())
                  : s && i && (t = e) && DataView.prototype.isPrototypeOf(t)
                  ? ((this._bodyArrayBuffer = m(e.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : s && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e))
                  ? (this._bodyArrayBuffer = m(e))
                  : (this._bodyText = e = Object.prototype.toString.call(e))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : r &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          i &&
            ((this.blob = function () {
              var e = h(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? h(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(v);
            })),
          (this.text = function () {
            var e,
              t,
              n,
              r = h(this);
            if (r) return r;
            if (this._bodyBlob)
              return (
                (e = this._bodyBlob),
                (t = new FileReader()),
                (n = y(t)),
                t.readAsText(e),
                n
              );
            if (this._bodyArrayBuffer)
              return Promise.resolve(
                (function (e) {
                  for (
                    var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                    r < t.length;
                    r++
                  )
                    n[r] = String.fromCharCode(t[r]);
                  return n.join("");
                })(this._bodyArrayBuffer)
              );
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          a &&
            (this.formData = function () {
              return this.text().then(_);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      (p.prototype.append = function (e, t) {
        (e = l(e)), (t = f(t));
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t;
      }),
        (p.prototype.delete = function (e) {
          delete this.map[l(e)];
        }),
        (p.prototype.get = function (e) {
          return (e = l(e)), this.has(e) ? this.map[e] : null;
        }),
        (p.prototype.has = function (e) {
          return this.map.hasOwnProperty(l(e));
        }),
        (p.prototype.set = function (e, t) {
          this.map[l(e)] = f(t);
        }),
        (p.prototype.forEach = function (e, t) {
          for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
        }),
        (p.prototype.keys = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push(n);
            }),
            d(e)
          );
        }),
        (p.prototype.values = function () {
          var e = [];
          return (
            this.forEach(function (t) {
              e.push(t);
            }),
            d(e)
          );
        }),
        (p.prototype.entries = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push([n, t]);
            }),
            d(e)
          );
        }),
        o && (p.prototype[Symbol.iterator] = p.prototype.entries);
      var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function b(e, t) {
        var n,
          r,
          o = (t = t || {}).body;
        if (e instanceof b) {
          if (e.bodyUsed) throw new TypeError("Already read");
          (this.url = e.url),
            (this.credentials = e.credentials),
            t.headers || (this.headers = new p(e.headers)),
            (this.method = e.method),
            (this.mode = e.mode),
            (this.signal = e.signal),
            o || null == e._bodyInit || ((o = e._bodyInit), (e.bodyUsed = !0));
        } else this.url = String(e);
        if (
          ((this.credentials =
            t.credentials || this.credentials || "same-origin"),
          (!t.headers && this.headers) || (this.headers = new p(t.headers)),
          (this.method =
            ((n = t.method || this.method || "GET"),
            (r = n.toUpperCase()),
            g.indexOf(r) > -1 ? r : n)),
          (this.mode = t.mode || this.mode || null),
          (this.signal = t.signal || this.signal),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && o)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o);
      }
      function _(e) {
        var t = new FormData();
        return (
          e
            .trim()
            .split("&")
            .forEach(function (e) {
              if (e) {
                var n = e.split("="),
                  r = n.shift().replace(/\+/g, " "),
                  o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(o));
              }
            }),
          t
        );
      }
      function I(e, t) {
        t || (t = {}),
          (this.type = "default"),
          (this.status = void 0 === t.status ? 200 : t.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in t ? t.statusText : "OK"),
          (this.headers = new p(t.headers)),
          (this.url = t.url || ""),
          this._initBody(e);
      }
      (b.prototype.clone = function () {
        return new b(this, { body: this._bodyInit });
      }),
        w.call(b.prototype),
        w.call(I.prototype),
        (I.prototype.clone = function () {
          return new I(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url
          });
        }),
        (I.error = function () {
          var e = new I(null, { status: 0, statusText: "" });
          return (e.type = "error"), e;
        });
      var E = [301, 302, 303, 307, 308];
      I.redirect = function (e, t) {
        if (-1 === E.indexOf(t)) throw new RangeError("Invalid status code");
        return new I(null, { status: t, headers: { location: e } });
      };
      var T = self.DOMException;
      try {
        new T();
      } catch (Pt) {
        ((T = function (e, t) {
          (this.message = e), (this.name = t);
          var n = Error(e);
          this.stack = n.stack;
        }).prototype = Object.create(Error.prototype)),
          (T.prototype.constructor = T);
      }
      function O(e, t) {
        return new Promise(function (n, r) {
          var o = new b(e, t);
          if (o.signal && o.signal.aborted)
            return r(new T("Aborted", "AbortError"));
          var a = new XMLHttpRequest();
          function s() {
            a.abort();
          }
          (a.onload = function () {
            var e,
              t,
              r = {
                status: a.status,
                statusText: a.statusText,
                headers:
                  ((e = a.getAllResponseHeaders() || ""),
                  (t = new p()),
                  e
                    .replace(/\r?\n[\t ]+/g, " ")
                    .split(/\r?\n/)
                    .forEach(function (e) {
                      var n = e.split(":"),
                        r = n.shift().trim();
                      if (r) {
                        var o = n.join(":").trim();
                        t.append(r, o);
                      }
                    }),
                  t)
              };
            r.url =
              "responseURL" in a
                ? a.responseURL
                : r.headers.get("X-Request-URL");
            var o = "response" in a ? a.response : a.responseText;
            n(new I(o, r));
          }),
            (a.onerror = function () {
              r(new TypeError("Network request failed"));
            }),
            (a.ontimeout = function () {
              r(new TypeError("Network request failed"));
            }),
            (a.onabort = function () {
              r(new T("Aborted", "AbortError"));
            }),
            a.open(o.method, o.url, !0),
            "include" === o.credentials
              ? (a.withCredentials = !0)
              : "omit" === o.credentials && (a.withCredentials = !1),
            "responseType" in a && i && (a.responseType = "blob"),
            o.headers.forEach(function (e, t) {
              a.setRequestHeader(t, e);
            }),
            o.signal &&
              (o.signal.addEventListener("abort", s),
              (a.onreadystatechange = function () {
                4 === a.readyState && o.signal.removeEventListener("abort", s);
              })),
            a.send(void 0 === o._bodyInit ? null : o._bodyInit);
        });
      }
      (O.polyfill = !0),
        self.fetch ||
          ((self.fetch = O),
          (self.Headers = p),
          (self.Request = b),
          (self.Response = I));
      n(10);
      var k = function (e, t) {
        return (k =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      var A,
        N = function () {
          return (N =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function P(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function c(e) {
            e.done
              ? o(e.value)
              : new n(function (t) {
                  t(e.value);
                }).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function j(e, t) {
        var n,
          r,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(i) {
          return function (s) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return a.label++, { value: i[1], done: !1 };
                    case 5:
                      a.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((o = a.trys),
                        (o = o.length > 0 && o[o.length - 1]) ||
                          (6 !== i[0] && 2 !== i[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        a.label = i[1];
                        break;
                      }
                      if (6 === i[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = i);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(i);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  i = t.call(e, a);
                } catch (s) {
                  (i = [6, s]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, s]);
          };
        }
      }
      function S() {
        if (!A) {
          var e = window.navigator.userAgent.toLowerCase();
          A = /iphone|ipad|ipod/.test(e)
            ? "ios"
            : /android/.test(e)
            ? "android"
            : "web";
        }
        return A;
      }
      function D(e, t) {
        if (e === t) return 0;
        for (
          var n = e.split("."),
            r = t.split("."),
            o = Math.max(n.length, r.length),
            i = 0;
          i < o;
          i++
        ) {
          n[i] || (n[i] = "0"), r[i] || (r[i] = "0");
          var a = parseInt(n[i]) - parseInt(r[i]);
          if (0 !== a) return a > 0 ? 1 : -1;
        }
        return 0;
      }
      function C() {
        var e = navigator.userAgent.match(/Line\/\d+(\.\d+)*/i);
        return e ? e[0].slice(5) : null;
      }
      var x = "INIT_FAILED",
        R = "LIFF_STORE",
        L = {
          ACCESS_TOKEN: "accessToken",
          ID_TOKEN: "IDToken",
          DECODED_ID_TOKEN: "decodedIDToken",
          FEATURE_TOKEN: "featureToken",
          FEATURES: "features",
          LOGIN_TMP: "loginTmp",
          CONFIG: "config",
          CONTEXT: "context",
          EXPIRES: "expires",
          RAW_CONTEXT: "rawContext",
          CLIENT_ID: "clientId",
          IS_SUBSEQUENT_LIFF_APP: "isSubsequentLiffApp"
        },
        F = [
          "context_token",
          "feature_token",
          "access_token",
          "id_token",
          "client_id"
        ],
        U = ["openWindow", "closeWindow"];
      var B = null;
      function M() {
        var e;
        return (
          null === B &&
            (void 0 === e && (e = window.navigator.userAgent),
            (B =
              /Line\/\d+\.\d+\.\d+ LIFF/.test(e) ||
              ((function (e) {
                return (
                  void 0 === e && (e = window.navigator.userAgent),
                  /Line\/\d+\.\d+\.\d+/.test(e)
                );
              })() &&
                /[\#|\&]access_token=/.test(location.hash)) ||
              "1" === sessionStorage.getItem(R + ":isInClient")),
            sessionStorage.setItem(R + ":isInClient", B ? "1" : "0")),
          !!B
        );
      }
      var V = new Set(["400", "401", "403", "404", "429", "500"]),
        W = (function (e) {
          function t(t, n) {
            var r = e.call(this, n) || this;
            return (r.code = t), r;
          }
          return (
            (function (e, t) {
              function n() {
                this.constructor = e;
              }
              k(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            })(t, e),
            t
          );
        })(Error);
      function H(e, t) {
        return new W(e, t || "");
      }
      function G(e) {
        return (function (e, t) {
          if (!t)
            throw H("INVALID_CONFIG", "liffId is necessary for liff.init()");
          var n = (M() ? sessionStorage : localStorage).getItem(
            R + ":" + t + ":" + e
          );
          try {
            return null === n ? null : JSON.parse(n);
          } catch (r) {
            return null;
          }
        })(e, X().liffId);
      }
      function K(e, t) {
        var n = X().liffId;
        if (!n)
          throw H("INVALID_CONFIG", "liffId is necessary for liff.init()");
        (M() ? sessionStorage : localStorage).setItem(
          R + ":" + n + ":" + e,
          JSON.stringify(t)
        );
      }
      function q(e) {
        var t = X().liffId;
        if (!t)
          throw H("INVALID_CONFIG", "liffId is necessary for liff.init()");
        (M() ? sessionStorage : localStorage).removeItem(R + ":" + t + ":" + e);
      }
      var z = {
          set: function (e, t, n) {
            var r = e + "=" + t;
            if (n)
              for (var o in n) {
                r += "; " + o + (n[o] ? "=" + n[o] : "");
              }
            document.cookie = r;
          },
          get: function (e) {
            var t = new RegExp(
              "(?:(?:^|.*;\\s*)" + e + "\\s*\\=\\s*([^;]*).*$)|^.*$"
            );
            return document.cookie.replace(t, "$1");
          },
          remove: function (e, t) {
            var n = e + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            if (t) for (var r in t) n += "; " + r + "=" + t[r];
            document.cookie = n;
          }
        },
        J = {
          get: G,
          set: K,
          remove: q,
          clean: function () {
            var e;
            Object.keys(L).forEach(function (e) {
              q(L[e]);
            }),
              (e = X()),
              z.remove(R + ":" + L.EXPIRES + ":" + e.liffId, { path: "/" });
          }
        },
        Q = {};
      function X() {
        return Q;
      }
      function $() {
        return G(L.FEATURES);
      }
      function Y(e) {
        K(L.FEATURES, e);
      }
      function Z() {
        return G(L.LOGIN_TMP);
      }
      function ee() {
        q(L.LOGIN_TMP);
      }
      function te() {
        return G(L.ACCESS_TOKEN);
      }
      function ne(e) {
        K(L.ACCESS_TOKEN, e);
      }
      function re() {
        return G(L.ID_TOKEN);
      }
      function oe(e) {
        K(L.ID_TOKEN, e);
      }
      function ie() {
        return G(L.DECODED_ID_TOKEN);
      }
      function ae(e) {
        K(L.DECODED_ID_TOKEN, e);
      }
      function se() {
        return G(L.FEATURE_TOKEN);
      }
      function ce(e) {
        K(L.FEATURE_TOKEN, e);
      }
      function ue() {
        return G(L.CONTEXT);
      }
      function le(e) {
        K(L.CONTEXT, e);
      }
      function fe() {
        return !!te();
      }
      function de() {
        var e;
        return !((e = X()), z.get(R + ":" + L.EXPIRES + ":" + e.liffId));
      }
      function pe() {
        J.clean();
      }
      function he(e) {
        return Object.keys(e)
          .map(function (t) {
            var n = e[t],
              r = function (e) {
                return void 0 !== e
                  ? encodeURIComponent(t) + "=" + encodeURIComponent(e)
                  : encodeURIComponent(t);
              };
            return Array.isArray(n)
              ? n
                  .map(function (e) {
                    return r(e);
                  })
                  .join("&")
              : r(n);
          })
          .join("&");
      }
      var ye = {
          parse: function (e) {
            return e
              .replace(/^\?/, "")
              .replace(/^#\/?/, "")
              .split(/&+/)
              .filter(function (e) {
                return e.length > 0;
              })
              .reduce(function (e, t) {
                var n = t.split("=").map(decodeURIComponent),
                  r = n[0],
                  o = n[1],
                  i = e[r];
                return (
                  Array.isArray(i)
                    ? i.push(o)
                    : e.hasOwnProperty(r)
                    ? (e[r] = [i, o])
                    : (e[r] = o),
                  e
                );
              }, {});
          },
          stringify: he
        },
        ve = "",
        me = function () {
          var e = ue();
          if (!e) throw H(x, "Could not get Context from server.");
          if (!e.endpointUrl)
            throw H(x, "Could not get endpointUrl from server.");
          if (!e.permanentLinkPattern)
            throw H(x, "Could not get permanentLinkPattern from server.");
          return e;
        };
      function we(e) {
        try {
          var t = location.href,
            n = (function (e) {
              var t = me(),
                n = decodeURIComponent(e),
                r = new URL(t.endpointUrl),
                o = r.origin,
                i = r.pathname,
                a = r.search,
                s = t.permanentLinkPattern,
                c = n.indexOf("?"),
                u = n.indexOf("#", c + 1),
                l = n.substring(0, c >= 0 ? c : u >= 0 ? u : n.length),
                f = u > -1 ? "#" + n.substring(u + 1) : "",
                d = c > -1 ? n.substring(c + 1, u < 0 ? void 0 : u) : "";
              if ("replace" === s) {
                if (!l && !d && !f) return window.location.href;
                var p = (function (e) {
                  return e.replace(/\/{2,}/g, "/");
                })("/" + (l || "/"));
                return "" + window.location.origin + p + (d ? "?" + d : "") + f;
              }
              l.length > 0 &&
                ("/" === l ? (l = "") : n.startsWith("/") || (l = "/" + l));
              var h = f
                .split("&")
                .filter(function (e) {
                  return !/^context_token/.test(e);
                })
                .join("&");
              if (d) {
                var y = a ? a.substring(1) + "&" : "";
                n = l + "?" + y + d + h;
              } else n = "" + l + a + h;
              return (
                "" +
                o +
                (function () {
                  switch (!0) {
                    case "/" === i:
                      return "";
                    case i.endsWith("/") && l.startsWith("/"):
                      return i.substring(0, i.length - 1);
                    default:
                      return i;
                  }
                })() +
                n
              );
            })(e);
          n !== t && location.replace(n);
        } catch (r) {
          if (r.code === x) throw r;
        }
      }
      var ge = n(2),
        be = n.n(ge);
      function _e(e) {
        return ((t = be()(e)),
        (n = ""),
        t
          .replace(/\r|\n/g, "")
          .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
          .replace(/ +$/, "")
          .split(" ")
          .forEach(function (e) {
            n += String.fromCharCode(parseInt(e));
          }),
        window.btoa(n))
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
        var t, n;
      }
      var Ie = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      function Ee(e) {
        for (var t = "", n = 0; n < e; n++)
          t += Ie[Math.floor(Math.random() * Ie.length)];
        return t;
      }
      function Te(e) {
        var t = e.subdomain;
        return (
          "https://" + (void 0 === t ? "api" : t) + ".line.me/" + e.pathname
        );
      }
      var Oe = {
        token: Te({ pathname: "oauth2/v2.1/token" }),
        certs: Te({ pathname: "oauth2/v2.1/certs" }),
        "openid-configuration": Te({
          subdomain: "access",
          pathname: ".well-known/openid-configuration"
        }),
        authorize: Te({ subdomain: "access", pathname: "liff/v1/authorize" }),
        profile: Te({ pathname: "v2/profile" }),
        message: Te({ pathname: "message/v3/share" }),
        messageOTT: Te({ pathname: "message/v3/multisend?type=ott" }),
        friendship: Te({ pathname: "friendship/v1/status" }),
        shareTargetPicker: Te({
          subdomain: "access",
          pathname: "oauth2/v2.1/liff/shareTargetPicker"
        }),
        shareTargetPickerOtt: Te({ pathname: "liff/v2/apps" }),
        shareTargetPickerResult: Te({
          subdomain: "access",
          pathname: "oauth2/v2.1/liff/shareTargetPicker/result"
        }),
        apps: Te({ pathname: "liff/v2/apps" })
      };
      function ke(e) {
        return Oe[e] || "";
      }
      function Ae() {
        return "2.4.1";
      }
      function Ne(e) {
        var t = Ee(43),
          n = _e(t),
          r = X();
        if (!r || !r.liffId)
          throw H(
            "INVALID_CONFIG",
            "You need to define `liffId` for liff.login()"
          );
        var o = {
          app_id: r.liffId,
          state: Ee(12),
          response_type: "code",
          code_challenge_method: "S256",
          code_challenge: n,
          liff_sdk_version: "2.4.1"
        };
        e && e.redirectUri && (o.redirect_uri = e.redirectUri),
          K(L.LOGIN_TMP, { codeVerifier: t });
        var i = ke("authorize") + "?" + ye.stringify(o);
        window.location.href = i;
      }
      var Pe = {},
        je = !1;
      function Se(e, t) {
        je ||
          ((je = !0),
          window.addEventListener("liffEvent", function (e) {
            e &&
              e.detail &&
              e.detail.type &&
              Pe[e.detail.type] &&
              Pe[e.detail.type].forEach(function (t) {
                return t(e);
              });
          })),
          Pe[e] ? Pe[e].push(t) : (Pe[e] = [t]);
      }
      function De(e, t) {
        var n = Pe[e];
        if (n && Array.isArray(n)) {
          var r = n.indexOf(t);
          r >= 0 && n.splice(r, 1);
        }
      }
      var Ce = function (e) {
        return Object.entries(e)
          .map(function (e) {
            var t = e[0],
              n = e[1];
            return (
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(
                (function (t) {
                  if ("object" == typeof t)
                    try {
                      return JSON.stringify(t);
                    } catch (e) {
                      return "" + t;
                    }
                  return "" + t;
                })(n)
              )
            );
          })
          .join("&");
      };
      function xe(e, t) {
        !(function (e, t) {
          var n = !1,
            r = document.createElement("img");
          if (((r.width = 1), (r.height = 1), "function" == typeof t)) {
            var o = function () {
              n || (t(r), (n = !0));
            };
            (r.onload = o), setTimeout(o, 1500);
          }
          r.src = "https://torimochi.line-apps.com/1/req?" + Ce(e);
        })(
          {
            cid: "liff",
            eventType: "debug",
            timestamp: Date.now(),
            logVersion: "1.6.9",
            threshold: 0,
            productKey: "liff-real",
            productVersion: "latest",
            url: location.href,
            host: location.hostname,
            path: location.pathname,
            query: location.search,
            hash: location.hash,
            referrer: document.referrer,
            userId: "liff",
            sessionId: "none",
            sessionPath: "",
            sessionQuery: "",
            sessionTime: "0",
            sessionDuration: "0",
            sessionParams: {},
            touchX: "0",
            touchY: "0",
            scrollX: "0",
            scrollY: "0",
            windowX: "0",
            windowY: "0",
            targets: [],
            content: { debug: { message: e } }
          },
          t
        );
      }
      function Re(e) {
        var t = e.split(".");
        if (t[1])
          try {
            var n = t[1].replace(/-/g, "+").replace(/_/g, "/");
            return JSON.parse(window.atob(n));
          } catch (r) {
            return null;
          }
        return null;
      }
      function Le(e) {
        return window.atob(e.replace(/\-/g, "+").replace(/_/g, "/"));
      }
      function Fe(e) {
        for (
          var t = e.length,
            n = new ArrayBuffer(t),
            r = new Uint8Array(n),
            o = 0;
          o < t;
          o++
        )
          r[o] = e.charCodeAt(o);
        return n;
      }
      function Ue(e) {
        return P(this, void 0, void 0, function () {
          var t, n, r;
          return j(this, function (o) {
            switch (o.label) {
              case 0:
                if (!e.ok) return [3, 4];
                o.label = 1;
              case 1:
                return o.trys.push([1, 3, , 4]), [4, e.json()];
              case 2:
                return [2, o.sent()];
              case 3:
                return o.sent(), [2, e];
              case 4:
                return (
                  (t = String(e.status)),
                  (n = V.has(t) ? t : "UNKNOWN"),
                  [
                    4,
                    e.json().catch(function () {
                      throw H(n, e.statusText);
                    })
                  ]
                );
              case 5:
                throw H(
                  (r = o.sent()).error || n,
                  r.error_description || r.message
                );
            }
          });
        });
      }
      function Be(e) {
        var t = (function (e) {
          if (e) return e;
          var t = te();
          if (!t)
            throw H(
              "UNAUTHORIZED",
              "Need access_token for api call, Please login first"
            );
          return {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + t
          };
        })(e && e.headers);
        return N(N({}, e), { headers: t });
      }
      function Me(e, t) {
        var n;
        try {
          n = Be(t);
        } catch (r) {
          return Promise.reject(r);
        }
        return fetch(e, n).then(Ue);
      }
      var Ve = function () {
          return P(this, void 0, void 0, function () {
            return j(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, Me(ke("certs"))];
                case 1:
                  return [2, e.sent()];
              }
            });
          });
        },
        We = function () {
          return (
            "ios" === S() &&
            null !==
              (e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) &&
            parseInt(e[1], 10) <= 10
          );
          var e;
        };
      function He(e, t, r) {
        return P(this, void 0, void 0, function () {
          var o, i, a, s;
          return j(this, function (c) {
            switch (c.label) {
              case 0:
                return We()
                  ? [
                      4,
                      Promise.all([n.e(2), n.e(0)]).then(n.t.bind(null, 248, 7))
                    ]
                  : [3, 2];
              case 1:
                return (
                  (i = c.sent()),
                  (a = i.default),
                  (o = a.verify(t, r, e, "SHA-256", "raw")),
                  [3, 5]
                );
              case 2:
                return [
                  4,
                  crypto.subtle.importKey(
                    "jwk",
                    e,
                    { name: "ECDSA", namedCurve: "P-256" },
                    !1,
                    ["verify"]
                  )
                ];
              case 3:
                return (
                  (s = c.sent()),
                  [
                    4,
                    crypto.subtle.verify(
                      { name: "ECDSA", hash: { name: "SHA-256" } },
                      s,
                      r,
                      t
                    )
                  ]
                );
              case 4:
                (o = c.sent()), (c.label = 5);
              case 5:
                return [2, o];
            }
          });
        });
      }
      function Ge(e, t) {
        return P(this, void 0, void 0, function () {
          var n, r, o, i, a, s, c, u, l, f, d, p, h, y;
          return j(this, function (v) {
            switch (v.label) {
              case 0:
                return (
                  (n = e.split(".")),
                  (r = n[0]),
                  (o = n[1]),
                  (i = n[2]),
                  (a = JSON.parse(Le(r))),
                  (s = JSON.parse(Le(o))),
                  (c = Fe(Le(i))),
                  (u = Fe(r + "." + o)),
                  [4, Ve()]
                );
              case 1:
                if (
                  ((l = v.sent()),
                  !(f = l.keys.find(function (e) {
                    return e.kid === a.kid;
                  })))
                )
                  return [3, 6];
                if ((delete f.alg, "ES256" !== a.alg))
                  throw H(
                    "INVALID_ID_TOKEN",
                    'Invalid "alg" value in ID_TOKEN'
                  );
                (d = void 0), (v.label = 2);
              case 2:
                return v.trys.push([2, 4, , 5]), [4, He(f, u, c)];
              case 3:
                return (d = v.sent()), [3, 5];
              case 4:
                throw H(
                  "INVALID_ID_TOKEN",
                  "Failed to use Crypto API to verify ID_TOKEN: " + v.sent()
                );
              case 5:
                if (d) {
                  if (
                    ((p = "https://access.line.me" !== s.iss),
                    (h = s.aud !== t),
                    (y = 1e3 * s.exp < Date.now()),
                    p)
                  )
                    throw H(
                      "INVALID_ID_TOKEN",
                      'Invalid "iss" value in ID_TOKEN'
                    );
                  if (h)
                    throw H(
                      "INVALID_ID_TOKEN",
                      'Invalid "aud" value in ID_TOKEN'
                    );
                  if (y)
                    throw H(
                      "INVALID_ID_TOKEN",
                      'Invalid "exp" value in ID_TOKEN'
                    );
                  return [2, s];
                }
                throw H("INVALID_ID_TOKEN", "Invalid signature in ID_TOKEN");
              case 6:
                throw H("INVALID_ID_TOKEN", 'Invalid "kid" value in ID_TOKEN');
              case 7:
                return [2];
            }
          });
        });
      }
      var Ke = n(0);
      function qe(e) {
        var t = e.pathname,
          n = e.query;
        return P(this, void 0, void 0, function () {
          var e, r;
          return j(this, function (o) {
            return (
              (e = n ? "?" + he(n) : ""),
              (r = "" + Ke.LIFF_CUSTOM_URL_SCHEME + t + e),
              (location.href = r),
              [2]
            );
          });
        });
      }
      var ze = ["shareTargetPicker", "multipleLiffTransition"],
        Je = {
          shareTargetPicker: function () {
            if (!fe()) return !1;
            var e = ue();
            if (!e) return !1;
            var t = e.availability.shareTargetPicker,
              n = t.permission,
              r = t.minVer;
            if (!n) return !1;
            if (M()) {
              var o = C();
              return null !== o && D(o, r) >= 0;
            }
            return !0;
          },
          multipleLiffTransition: function () {
            var e = ue();
            if (!e || !e.availability) return !1;
            var t = e.availability.multipleLiffTransition.permission;
            return M() && t;
          }
        },
        Qe = function (e) {
          if (!ze.includes(e))
            throw H("INVALID_ARGUMENT", "Unexpected API name.");
          var t = Je[e];
          return !t || t();
        };
      function Xe(e, t) {
        return P(this, void 0, void 0, function () {
          return j(this, function (n) {
            switch (n.label) {
              case 0:
                return Qe("multipleLiffTransition")
                  ? [
                      4,
                      Promise.all([
                        new Promise(function (e, t) {
                          Se("liffIdReceived", function n(r) {
                            De("liffIdReceived", n),
                              r.detail.data && r.detail.data.result
                                ? e()
                                : t(H(x));
                          });
                        }),
                        qe({
                          pathname: "app/" + e,
                          query: { feature_token: t }
                        })
                      ])
                    ]
                  : [3, 2];
              case 1:
                n.sent(), (n.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }
      var $e = null;
      function Ye() {
        return (
          !!Boolean(G(L.IS_SUBSEQUENT_LIFF_APP)) ||
          (!(!M() || ye.parse(window.location.hash).feature_token || se()) &&
            (K(L.IS_SUBSEQUENT_LIFF_APP, !0), !0))
        );
      }
      function Ze() {
        "boolean" == typeof $e &&
          (function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = console.warn;
            n.apply(void 0, e);
          })("liff.init is not expected to be called more than once"),
          ($e = Ye());
      }
      function et() {
        return Boolean($e);
      }
      function tt(e) {
        return Me(ke("apps") + "/" + e + "/featureToken");
      }
      function nt(e) {
        return P(this, void 0, void 0, function () {
          var t, n, r, o, i, a, s;
          return j(this, function (c) {
            switch (c.label) {
              case 0:
                return (
                  (t = ye.parse(window.location.hash)),
                  (n = (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    for (
                      var r = function (t) {
                          Object.keys(t)
                            .filter(function (e) {
                              return null !== t[e] && void 0 !== t[e];
                            })
                            .forEach(function (n) {
                              e[n] = t[n];
                            });
                        },
                        o = 0,
                        i = t;
                      o < i.length;
                      o++
                    ) {
                      var a = i[o];
                      r(a);
                    }
                    return e;
                  })(
                    {
                      access_token: te(),
                      context_token: G(L.RAW_CONTEXT),
                      feature_token: se(),
                      id_token: re(),
                      client_id: G(L.CLIENT_ID)
                    },
                    t
                  )),
                  et() ? (fe() ? [4, tt(e)] : [3, 2]) : [3, 3]
                );
              case 1:
                (o = c.sent()),
                  (i = o.featureToken),
                  (a = o.features),
                  (r = a),
                  n.feature_token || (n.feature_token = i),
                  (c.label = 2);
              case 2:
                (s = (function (e) {
                  var t = e.match(/([^-]+)-[^-]+/);
                  return t && t[1];
                })(e)) && (n.client_id = s),
                  (c.label = 3);
              case 3:
                return [2, { credentials: n, features: r }];
            }
          });
        });
      }
      function rt(e) {
        if (e.persisted && Qe("multipleLiffTransition"))
          if ("ios" === S()) window.location.reload();
          else {
            var t = X().liffId,
              n = se();
            if (!t) throw H(x, "Invalid LIFF ID.");
            if (!n)
              throw H("FORBIDDEN", "Invalid featureToken for client features");
            qe({ pathname: "app/" + t, query: { feature_token: n } });
          }
      }
      function ot(e) {
        return P(this, void 0, void 0, function () {
          var t, n, r, o, i, a, s, c, u, l;
          return j(this, function (f) {
            switch (f.label) {
              case 0:
                return [
                  4,
                  new Promise(function (e) {
                    var t = C();
                    if (!t || D(t, "9.5.0") < 0) Y(U), e();
                    else if (window._liff && window._liff.features)
                      Y(window._liff.features), e();
                    else {
                      var n = function (t) {
                        De("ready", n),
                          t &&
                            t.detail &&
                            t.detail.data &&
                            t.detail.data.features &&
                            Y(t.detail.data.features),
                          e();
                      };
                      Se("ready", n);
                    }
                  })
                ];
              case 1:
                return f.sent(), Ze(), [4, nt(e.liffId)];
              case 2:
                return (
                  (t = f.sent()),
                  (n = t.credentials),
                  (r = n.access_token),
                  (o = n.context_token),
                  (i = n.feature_token),
                  (a = n.id_token),
                  (s = n.client_id),
                  (c = t.features),
                  i ? [4, Xe(e.liffId, i)] : [3, 4]
                );
              case 3:
                f.sent(), et() && ce(i), (f.label = 4);
              case 4:
                return (
                  (u = "function" == typeof window._liff.validateFeatureToken),
                  o && le(Re(o)),
                  window.addEventListener("pageshow", rt),
                  et() && Y(c || U),
                  fe()
                    ? [3, 8]
                    : i && r
                    ? [3, 7]
                    : (Ne(et() ? { redirectUri: location.href } : void 0),
                      et() ? [4, new Promise(function () {})] : [3, 6])
                );
              case 5:
                f.sent(), (f.label = 6);
              case 6:
                throw H(x, "Failed to parse feature_token or access_token");
              case 7:
                if (
                  u &&
                  !(function (e, t) {
                    return (
                      (window._liff.makeFeatureTokenHash = function (e, t) {
                        return be()(e + "-" + t);
                      }),
                      !!window._liff.validateFeatureToken(e, t)
                    );
                  })(e.liffId, i)
                )
                  throw (Ne(), H(x, "Failed to validate feature_token"));
                !u && window.history.length > 1
                  ? xe("potential abuser")
                  : (ce(i), ne(r)),
                  (f.label = 8);
              case 8:
                return (
                  a && !re() && oe(a), a && s && !ie() ? [4, Ge(a, s)] : [3, 10]
                );
              case 9:
                (l = f.sent()) && ae(l), (f.label = 10);
              case 10:
                return [2];
            }
          });
        });
      }
      function it(e) {
        return P(this, void 0, void 0, function () {
          var t, n, r, o, i, a, s;
          return j(this, function (c) {
            switch (c.label) {
              case 0:
                return (
                  (t = ke("apps")),
                  (n = t + "/" + e + "/contextToken"),
                  (r = te()),
                  (o = {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                  }),
                  r && (o.Authorization = "Bearer " + r),
                  [4, Me(n, { headers: o })]
                );
              case 1:
                if (((i = c.sent()), !(a = i.contextToken)))
                  throw H(x, "Can not get context from server.");
                if (!(s = Re(a))) throw H(x, "Invalid context token.");
                return [2, s];
            }
          });
        });
      }
      function at() {
        return P(this, void 0, void 0, function () {
          var e;
          return j(this, function (t) {
            switch (t.label) {
              case 0:
                if (!(e = X().liffId)) throw H(x, "Invalid LIFF ID.");
                return [4, it(e)];
              case 1:
                return le(t.sent()), [2];
            }
          });
        });
      }
      var st,
        ct = n(8),
        ut = n.n(ct);
      function lt(e) {
        return P(this, void 0, void 0, function () {
          var t,
            n,
            r,
            o = this;
          return j(this, function (i) {
            switch (i.label) {
              case 0:
                (t = function () {
                  return P(o, void 0, void 0, function () {
                    var t, n, r, o, i, a;
                    return j(this, function (s) {
                      switch (s.label) {
                        case 0:
                          return [
                            4,
                            ((c = X()),
                            (u = ye.parse(window.location.search)),
                            (l = Z()),
                            (f = {
                              grant_type: "authorization_code",
                              client_id: u.liffClientId,
                              appId: c.liffId,
                              code: u.code,
                              code_verifier: l.codeVerifier,
                              redirect_uri: c.redirectUri || u.liffRedirectUri,
                              id_token_key_type: "JWK"
                            }),
                            (d = ye.stringify(f)),
                            Me(ke("token"), {
                              method: "POST",
                              headers: {
                                "Content-Type":
                                  "application/x-www-form-urlencoded;charset=UTF-8"
                              },
                              body: d
                            }))
                          ];
                        case 1:
                          return (
                            (t = s.sent()),
                            (n = t.access_token),
                            (r = t.id_token),
                            (o = t.expires_in),
                            ne(n),
                            (function (e) {
                              var t = X();
                              z.set(
                                R + ":" + L.EXPIRES + ":" + t.liffId,
                                e.getTime(),
                                {
                                  expires: e.toUTCString(),
                                  path: "/",
                                  secure: null
                                }
                              );
                            })(new Date(Date.now() + 1e3 * o)),
                            ee(),
                            r ? (oe(r), [4, Ge(r, e)]) : [3, 3]
                          );
                        case 2:
                          (i = s.sent()) && ae(i), (s.label = 3);
                        case 3:
                          return (a = ut.a.parse(location.hash).context_token)
                            ? (le(Re(a)), [3, 6])
                            : [3, 4];
                        case 4:
                          return [4, at()];
                        case 5:
                          s.sent(), (s.label = 6);
                        case 6:
                          return [2];
                      }
                      var c, u, l, f, d;
                    });
                  });
                }),
                  (i.label = 1);
              case 1:
                return i.trys.push([1, 3, , 4]), [4, t()];
              case 2:
                return i.sent(), [3, 4];
              case 3:
                throw ((n = i.sent()), (r = n), ee(), r);
              case 4:
                return [2];
            }
          });
        });
      }
      function ft(e) {
        return P(this, void 0, void 0, function () {
          var t;
          return j(this, function (n) {
            switch (n.label) {
              case 0:
                if (!e.liffId)
                  throw H(
                    "INVALID_CONFIG",
                    "liffId is necessary for liff.init()"
                  );
                if (
                  ((Q = e),
                  (t = ye.parse(window.location.search)).error &&
                    t.liffOAuth2Error)
                )
                  throw (
                    ((i = t.error),
                    (a = t.error_description),
                    (s = a.replace(/\+/g, " ")),
                    H(x, i + ": " + s))
                  );
                return (
                  (r = t.code),
                  (o = Z()),
                  Boolean(r && !fe() && o && o.codeVerifier)
                    ? [4, lt(t.liffClientId)]
                    : [3, 2]
                );
              case 1:
                n.sent(), (n.label = 2);
              case 2:
                return M() ? [4, ot(e)] : [3, 4];
              case 3:
                return n.sent(), [3, 6];
              case 4:
                return fe() ? [3, 6] : [4, at()];
              case 5:
                n.sent(), (n.label = 6);
              case 6:
                return (
                  t["liff.state"] && we(t["liff.state"]),
                  M() || !fe() ? [2] : (de() && pe(), [2])
                );
            }
            var r, o, i, a, s;
          });
        });
      }
      var dt = new Promise(function (e) {
        st = e;
      });
      function pt() {
        var e;
        return "ios" === S()
          ? (e = C()) && D(e, "9.19.0") < 0
            ? "https://static.line-scdn.net/liff/edge/2/ios-918-extensions.js"
            : "https://static.line-scdn.net/liff/edge/2/ios-extensions.js"
          : "https://static.line-scdn.net/liff/edge/2/non-ios-extensions.js";
      }
      function ht(e, t, n) {
        var r = this;
        return (function () {
          return P(this, void 0, void 0, function () {
            return j(this, function (e) {
              switch (e.label) {
                case 0:
                  return [3, 2];
                case 1:
                  return [2, e.sent().default];
                case 2:
                  return [
                    2,
                    new Promise(function (e, t) {
                      var n = document.createElement("script"),
                        r = pt();
                      (n.onload = function () {
                        var n = window.liffClientExtension;
                        n
                          ? e(n)
                          : t(
                              H(
                                x,
                                "Unable to load client features. (Extension is empty)"
                              )
                            );
                      }),
                        (n.onerror = function () {
                          t(H(x, "Unable to load client features."));
                        }),
                        (n.src = r),
                        (n.type = "text/javascript"),
                        document.body.appendChild(n);
                    })
                  ];
              }
            });
          });
        })()
          .then(function (t) {
            return (
              (function (e) {
                window && !window.liff && (window.liff = e);
              })(r),
              t.install(r),
              ft(e)
            );
          })
          .then(function () {
            "function" == typeof t && t(), st();
          })
          .catch(function (e) {
            return "function" == typeof n && n(e), Promise.reject(e);
          });
      }
      n(15);
      function yt(e, t, n) {
        void 0 === t && (t = {}), void 0 === n && (n = "");
        var r = se();
        if (!r)
          throw H("FORBIDDEN", "Invalid featureToken for client features");
        if (!window._liff || !window._liff.postMessage)
          throw H(
            "INVALID_ARGUMENT",
            "postMessage is not available from client"
          );
        window._liff.postMessage(e, r, n, JSON.stringify(t));
      }
      function vt(e, t, n) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = { once: !0 }),
          se()
            ? ((n = N({ callbackId: Ee(12), once: !0 }, n)),
              new Promise(function (r, o) {
                var i = function (t) {
                  if (t && t.detail) {
                    var a = t.detail.callbackId === n.callbackId,
                      s = "string" != typeof t.detail.callbackId;
                    (a || s) &&
                      (n.once && De(e, i),
                      t.detail.error
                        ? o(t.detail.error)
                        : t.detail.data
                        ? r(t.detail.data)
                        : o(t.detail));
                  }
                  o();
                };
                Se(e, i), yt(e, t, n.callbackId);
              }))
            : Promise.reject(
                H("FORBIDDEN", "Invalid featureToken for client features")
              )
        );
      }
      var mt = function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          (function (e) {
            return "string" == typeof e || e instanceof String;
          })(e.type)
        );
      };
      function wt(e) {
        return Promise.reject(H("INVALID_ARGUMENT", e));
      }
      function gt(e, t) {
        var n = bt,
          r = t.split(".")[0];
        e.removeEventListener(r, n[t]), (n[t] = null);
      }
      var bt = {},
        _t = !1,
        It = !1;
      function Et(e, t, n, r) {
        _t ||
          ((It = (function () {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                }
              });
              window.addEventListener("test", t, t),
                window.removeEventListener("test", t, t);
            } catch (Pt) {
              e = !1;
            }
            return e;
          })()),
          (_t = !0));
        var o = t.split(".")[0];
        return new Promise(function (i) {
          var a = function (o) {
            i(o), n && n(o), r && r.once && gt(e, t);
          };
          (bt[t] = a), e.addEventListener(o, a, !!It && r);
        });
      }
      function Tt(e, t, n, r) {
        if ((void 0 === n && (n = {}), "object" != typeof e || !e.postMessage))
          throw H("INVALID_ARGUMENT", "target must be window object");
        if ("string" != typeof t)
          throw H("INVALID_ARGUMENT", "keyname must be string");
        if ("object" != typeof n)
          throw H(
            "INVALID_ARGUMENT",
            "incorrect body format. It should be Object or Array comprised of Object"
          );
        if (!r)
          throw H(
            "INVALID_ARGUMENT",
            "serverEndPointUrl isn't passed. please fill up with proper url"
          );
        if ("development" !== Ke.ENV && "*" === r)
          throw new Error("serverEndPointUrl doesn't allow to set '*'");
        var o = { name: t, body: n };
        e.postMessage(o, r);
      }
      function Ot(e, t) {
        var n;
        Et(
          window,
          "message." + (n = "receivedHealthcheck"),
          (function (e, t, n) {
            return function (r) {
              r.origin === n && r.data.name === e && t(r);
            };
          })(n, e, t)
        );
      }
      var kt = (function () {
        function e() {
          (this.payloadToShareTargetPicker = null),
            (this.popupWindow = null),
            (this.doesWaitForSubwindowResult = !1);
        }
        return (
          (e.getInstance = function () {
            return (
              e.instance ? e.instance.reset() : (e.instance = new e()),
              e.instance
            );
          }),
          (e.prototype.init = function (e) {
            return P(this, void 0, void 0, function () {
              var t, n;
              return j(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 5, , 6]),
                      (this.liffId = e.referrer.liffId),
                      (this.doesWaitForSubwindowResult = !(
                        !e.options || !e.options.waitForSubwindowResult
                      )),
                      (this.allowPostMessageOrigin =
                        this.initAllowPostMessageOrigin()),
                      (this.payloadToShareTargetPicker =
                        this.buildPayloadToShareTargetPicker(e)),
                      window.AbortController &&
                        (this.abortController = new window.AbortController()),
                      this.prepareAnotherWindow(),
                      [4, this.initOtt()]
                    );
                  case 1:
                    return (
                      r.sent(),
                      this.initListener(),
                      this.openAnotherWindow(),
                      this.doesWaitForSubwindowResult
                        ? [4, this.pollingShareResult()]
                        : [3, 3]
                    );
                  case 2:
                    return (t = r.sent()), this.finalize(), [2, t];
                  case 3:
                    return [2];
                  case 4:
                    return [3, 6];
                  case 5:
                    if (
                      ((n = r.sent()), this.finalize(), "AbortError" !== n.name)
                    )
                      throw n;
                    return [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.resetAllVariables = function () {
            (this.liffId = ""),
              (this.allowPostMessageOrigin = ""),
              (this.payloadToShareTargetPicker = null),
              (this.ott = ""),
              (this.popupWindow = null),
              (this.timeoutIDForHealthCheck = null),
              (this.abortController = null),
              (this.internalError = null),
              (this.doesWaitForSubwindowResult = !1);
          }),
          (e.prototype.reset = function () {
            this.finalize(), this.resetAllVariables();
          }),
          (e.prototype.finalize = function () {
            var e, t;
            this.abortController && this.abortController.abort(),
              M() ||
                ((e = this.timeoutIDForHealthCheck),
                (t = this.popupWindow),
                gt(window, "message.receivedHealthcheck"),
                e && clearTimeout(e),
                t && !t.closed && t.close());
          }),
          (e.prototype.buildPayloadToShareTargetPicker = function (e) {
            return { messages: e.messages, referrer: e.referrer };
          }),
          (e.prototype.initAllowPostMessageOrigin = function (e) {
            return (
              void 0 === e && (e = ke("shareTargetPicker")),
              (function (e) {
                var t = e.match(/^(https?:\/\/.*?)\//);
                return (t && t[1]) || "";
              })(e)
            );
          }),
          (e.prototype.initOtt = function () {
            return P(this, void 0, void 0, function () {
              var e, t, n;
              return j(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      this.abortController && (e = this.abortController.signal),
                      (t =
                        ke("shareTargetPickerOtt") +
                        "/" +
                        this.liffId +
                        "/ott"),
                      (n = this),
                      [
                        4,
                        Me(t, { method: "GET", signal: e }).then(function (e) {
                          return e.ott;
                        })
                      ]
                    );
                  case 1:
                    return (n.ott = r.sent()), [2];
                }
              });
            });
          }),
          (e.prototype.prepareAnotherWindow = function () {
            var e;
            M() ||
              ("ios" !== S() ||
              (void 0 === e && (e = window.navigator.userAgent),
              /ipad/.test(e.toLowerCase()))
                ? (this.popupWindow = window.open(
                    "",
                    "liffpopup",
                    "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes"
                  ))
                : (this.popupWindow = window.open()));
          }),
          (e.prototype.openAnotherWindow = function () {
            if (M() && this.payloadToShareTargetPicker)
              (e = this.liffId),
                (t = this.ott),
                (n = this.payloadToShareTargetPicker),
                (r = { liffId: e, ott: t, data: JSON.stringify(n) }),
                (location.href =
                  Ke.SHARE_TARGET_PICKER_SCHEME_URL + "?" + he(r));
            else {
              if (
                ((this.timeoutIDForHealthCheck = window.setTimeout(
                  this.healthCheck.bind(this),
                  1e3
                )),
                !this.popupWindow)
              )
                throw H("CREATE_SUBWINDOW_FAILED");
              !(function (e, t, n) {
                var r = { liffId: t, ott: n };
                e.location.href = ke("shareTargetPicker") + "?" + he(r);
              })(this.popupWindow, this.liffId, this.ott);
            }
            var e, t, n, r;
          }),
          (e.prototype.initListener = function () {
            M() ||
              Ot(
                this.onReceivedHealthcheck.bind(this),
                this.allowPostMessageOrigin
              );
          }),
          (e.prototype.healthCheck = function () {
            return P(this, void 0, void 0, function () {
              var e;
              return j(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (this.popupWindow && !this.popupWindow.closed)
                      return [3, 7];
                    if (!this.doesWaitForSubwindowResult) return [3, 5];
                    t.label = 1;
                  case 1:
                    return t.trys.push([1, 3, , 4]), [4, this.onCanceled()];
                  case 2:
                    return t.sent(), [3, 4];
                  case 3:
                    return (e = t.sent()), (this.internalError = e), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    this.finalize(), (t.label = 6);
                  case 6:
                    return [3, 8];
                  case 7:
                    (n = this.popupWindow),
                      (r = this.allowPostMessageOrigin),
                      Tt(n, "healthcheck", void 0, r),
                      (this.timeoutIDForHealthCheck = window.setTimeout(
                        this.healthCheck.bind(this),
                        1e3
                      )),
                      (t.label = 8);
                  case 8:
                    return [2];
                }
                var n, r;
              });
            });
          }),
          (e.prototype.onReceivedHealthcheck = function () {
            if (!this.popupWindow || !this.payloadToShareTargetPicker)
              throw H("CREATE_SUBWINDOW_FAILED");
            var e, t, n;
            (e = this.popupWindow),
              (t = this.payloadToShareTargetPicker),
              (n = this.allowPostMessageOrigin),
              Tt(e, "ready", t, n);
          }),
          (e.prototype.onCanceled = function () {
            return P(this, void 0, void 0, function () {
              var e, t;
              return j(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (M() || !this.ott)
                      throw new Error("need to call with ott in client");
                    return (
                      this.abortController && (e = this.abortController.signal),
                      (t = { liffId: this.liffId, ott: this.ott }),
                      [
                        4,
                        Me(ke("shareTargetPickerResult") + "?" + he(t), {
                          method: "POST",
                          signal: e,
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/x-www-form-urlencoded"
                          },
                          body: "result=CANCEL"
                        })
                      ]
                    );
                  case 1:
                    return [2, "ok" === n.sent().status];
                }
              });
            });
          }),
          (e.prototype.getShareResult = function () {
            return P(this, void 0, void 0, function () {
              var e, t;
              return j(this, function (n) {
                if (!this.ott)
                  throw new Error("need to call with ott in client");
                return (
                  this.abortController && (e = this.abortController.signal),
                  (t = { liffId: this.liffId, ott: this.ott }),
                  [
                    2,
                    Me(ke("shareTargetPickerResult") + "?" + he(t), {
                      method: "GET",
                      headers: { Accept: "application/json" },
                      signal: e
                    })
                  ]
                );
              });
            });
          }),
          (e.isPollingTimeOut = function (e, t) {
            return (t - e) / 6e4 >= 10;
          }),
          (e.prototype.pollingShareResult = function () {
            return P(this, void 0, void 0, function () {
              var t, n;
              return j(this, function (r) {
                switch (r.label) {
                  case 0:
                    (t = Date.now()), (r.label = 1);
                  case 1:
                    if (e.isPollingTimeOut(t, Date.now())) return [3, 4];
                    if (this.internalError) throw this.internalError;
                    return [4, this.getShareResult()];
                  case 2:
                    if ((n = r.sent()) && n.result)
                      switch (n.result) {
                        case "SUCCESS":
                          return [2, { status: "success" }];
                        case "CANCEL":
                          return [2];
                        case "FAILURE":
                        default:
                          throw new Error(n.resultDescription);
                      }
                    return [
                      4,
                      new Promise(function (e) {
                        setTimeout(e, 500);
                      })
                    ];
                  case 3:
                    return r.sent(), [3, 1];
                  case 4:
                    throw new Error("Timeout: not finished within 10min");
                }
              });
            });
          }),
          e
        );
      })();
      var At = {
        init: ht,
        getOS: S,
        getVersion: Ae,
        getLanguage: function () {
          return navigator.language;
        },
        isInClient: M,
        isLoggedIn: fe,
        login: Ne,
        logout: pe,
        getAccessToken: te,
        getIDToken: re,
        getDecodedIDToken: ie,
        getContext: ue,
        openWindow: function (e) {
          if (
            !(function (e) {
              if (!e || "object" != typeof e) return !1;
              var t = e,
                n = t.url,
                r = [typeof n, typeof t.external],
                o = r[1];
              return (
                "string" === r[0] &&
                "" !== n &&
                ("undefined" === o || "boolean" === o)
              );
            })(e)
          )
            throw H(
              "INVALID_ARGUMENT",
              "Invalid parameters for liff.openWindow()"
            );
          if (M())
            if (window._liff.postMessage) vt("openWindow", e);
            else {
              var t = e.url,
                n = e.external,
                r = void 0 !== n && n;
              window.open(
                (function (e, t) {
                  var n = e.split("?"),
                    r = n[0],
                    o = n[1],
                    i = (void 0 === o ? "" : o).split("#"),
                    a = i[0],
                    s = i[1];
                  return (
                    r +
                    "?is_liff_external_open_window=" +
                    !!t +
                    (a
                      ? "&" +
                        a
                          .split("&")
                          .map(decodeURIComponent)
                          .filter(function (e) {
                            return (
                              -1 === e.indexOf("is_liff_external_open_window")
                            );
                          })
                          .join("&")
                          .concat(s ? "#" + s : "")
                      : "")
                  );
                })(t, r)
              );
            }
          else window.open(e.url, "_blank");
        },
        closeWindow: function () {
          if (window._liff && window._liff.postMessage) {
            var e = C();
            null !== e && D(e, "10.15.0") >= 0
              ? "ios" === S()
                ? window._liff.postMessage("closeWindow", "")
                : window._liff.postMessage("closeWindow", "", "", "")
              : vt("closeWindow");
          } else window.close();
        },
        getFeatures: $,
        getFriendship: function () {
          return Me(ke("friendship"));
        },
        checkFeature: function (e) {
          var t = $();
          return !!t && t.indexOf(e) > -1;
        },
        getAId: function () {
          return ((ue() || {}).d || {}).aId;
        },
        getProfilePlus: function () {
          return (ue() || {}).profilePlus;
        },
        getIsVideoAutoPlay: function () {
          return ((ue() || {}).d || {}).autoplay || !1;
        },
        getLineVersion: C,
        isApiAvailable: Qe,
        getProfile: function () {
          return Me(ke("profile"));
        },
        sendMessages: function (e) {
          if (
            !(function (e) {
              return Array.isArray(e) && e.every(mt);
            })(e)
          )
            return wt("Parameter 'messages' must be an array of { type, ... }");
          var t = e.length;
          return t < 1 || t > 5
            ? wt("Number of messages should be in range 1 to 5.")
            : Me(ke("message"), {
                method: "POST",
                body: JSON.stringify({ messages: e })
              });
        },
        shareTargetPicker: function (e) {
          return P(this, void 0, void 0, function () {
            var t, n, r, o, i, a, s, c, u, l;
            return j(this, function (f) {
              switch (f.label) {
                case 0:
                  if (
                    ((t = (ue() || {}).availability),
                    (n = (t || {}).shareTargetPicker),
                    (o = (r = n || {}).permission),
                    (i = r.minVer),
                    !o)
                  )
                    throw M()
                      ? H(
                          "FORBIDDEN",
                          "Need LINE App " +
                            i +
                            " at least or consent on shareTargetPicker usage on LINE developer site"
                        )
                      : H(
                          "FORBIDDEN",
                          "Need consent on shareTargetPicker usage on LINE developer site"
                        );
                  if (!fe())
                    throw H(
                      "UNAUTHORIZED",
                      "Need access_token for api call, Please login first"
                    );
                  if (!e || !Array.isArray(e) || 0 === e.length)
                    throw H("INVALID_ARGUMENT", "no proper argument");
                  if (e.length > 5)
                    throw H(
                      "INVALID_ARGUMENT",
                      "exceed the limit of num of messages"
                    );
                  if (!(a = X().liffId)) throw H("INVALID_CONFIG");
                  f.label = 1;
                case 1:
                  return (
                    f.trys.push([1, 3, , 4]),
                    (s = kt.getInstance()),
                    (c = C()),
                    (u = { waitForSubwindowResult: !0 }),
                    M() &&
                      c &&
                      D(c, "10.11.0") < 0 &&
                      (u.waitForSubwindowResult = !1),
                    [
                      4,
                      s.init({
                        messages: e,
                        referrer: { liffId: a, url: location.origin },
                        options: u
                      })
                    ]
                  );
                case 2:
                  return [2, f.sent()];
                case 3:
                  throw (l = f.sent()) instanceof W
                    ? l
                    : H("EXCEPTION_IN_SUBWINDOW", l.message);
                case 4:
                  return [2];
              }
            });
          });
        },
        permanentLink: {
          createUrl: function () {
            var e = me(),
              t = window.location,
              n = t.pathname,
              r = t.search,
              o = t.hash,
              i = t.origin,
              a = new URL(e.endpointUrl);
            if (
              a.origin !== i ||
              !(function (e, t) {
                return (
                  0 === t.indexOf(e) &&
                  (e.endsWith("/") && (e = e.substring(0, e.length - 1)),
                  void 0 === t[e.length] || "/" === t[e.length])
                );
              })(a.pathname, n)
            )
              throw H(
                "INVALID_CONFIG",
                "Current page is not under entrypoint."
              );
            var s = n.substring(a.pathname.length);
            s.length > 0 && "/" !== s[0] && (s = "/" + s);
            var c = new RegExp("^" + F.join("|")),
              u = o
                .substring(1)
                .split("&")
                .filter(function (e) {
                  return !c.test(e) && Boolean(e);
                })
                .join("&"),
              l = u === a.hash.substring(1) ? "" : u,
              f = function (e) {
                return e
                  .substring(1)
                  .split("&")
                  .filter(function (e) {
                    return !/liff\.state/.test(e) && Boolean(e);
                  });
              },
              d = f(r),
              p = f(a.search);
            ve && d.push(ve);
            for (var h = 0; h < p.length; h++) {
              var y = p[h],
                v = d.indexOf(y);
              v > -1 && d.splice(v, 1);
            }
            var m = d.join("&"),
              w = s + ("" !== m ? "?" + m : "") + (l ? "#" + l : "");
            return (
              "replace" === e.permanentLinkPattern &&
                "" !== w &&
                (w = "" + n + r + (l ? "#" + l : "")),
              "https://liff.line.me/" + X().liffId + w
            );
          },
          setExtraQueryParam: function (e) {
            ve = e;
          }
        },
        ready: dt,
        get id() {
          return X().liffId || null;
        },
        _dispatchEvent: function (e) {
          var t = {};
          try {
            t = JSON.parse(e);
          } catch (r) {
            throw H("INVALID_ARGUMENT", r.message);
          }
          var n = (function (e) {
            return new CustomEvent("liffEvent", { detail: e });
          })(t);
          window.dispatchEvent(n);
        },
        _call: vt,
        _addListener: Se,
        _removeListener: De,
        _postMessage: yt
      };
      At.init = ht.bind(At);
      var Nt = At;
      t.default = Nt;
    }
  ]).default;
});
