import {
  t
} from "./chunk-KIA3IIJQ.js";
import {
  Do,
  Ge,
  It,
  Mn,
  Mu
} from "./chunk-4QVIDK45.js";

// node_modules/.pnpm/mermaid@10.2.0/node_modules/mermaid/dist/linear-e84f7512.js
function F(n, t2) {
  return n == null || t2 == null ? NaN : n < t2 ? -1 : n > t2 ? 1 : n >= t2 ? 0 : NaN;
}
function mn(n, t2) {
  return n == null || t2 == null ? NaN : t2 < n ? -1 : t2 > n ? 1 : t2 >= n ? 0 : NaN;
}
function nn(n) {
  let t2, e, r;
  n.length !== 2 ? (t2 = F, e = (u, h) => F(n(u), h), r = (u, h) => n(u) - h) : (t2 = n === F || n === mn ? n : ln, e = n, r = n);
  function i(u, h, f = 0, l = u.length) {
    if (f < l) {
      if (t2(h, h) !== 0)
        return l;
      do {
        const c = f + l >>> 1;
        e(u[c], h) < 0 ? f = c + 1 : l = c;
      } while (f < l);
    }
    return f;
  }
  function o(u, h, f = 0, l = u.length) {
    if (f < l) {
      if (t2(h, h) !== 0)
        return l;
      do {
        const c = f + l >>> 1;
        e(u[c], h) <= 0 ? f = c + 1 : l = c;
      } while (f < l);
    }
    return f;
  }
  function a(u, h, f = 0, l = u.length) {
    const c = i(u, h, f, l - 1);
    return c > f && r(u[c - 1], h) > -r(u[c], h) ? c - 1 : c;
  }
  return { left: i, center: a, right: o };
}
function ln() {
  return 0;
}
function dn(n) {
  return n === null ? NaN : +n;
}
var gn = nn(F);
var Mn2 = gn.right;
nn(dn).center;
var yn = Mn2;
var T = Math.sqrt(50);
var I = Math.sqrt(10);
var q = Math.sqrt(2);
function pn(n, t2, e) {
  var r, i = -1, o, a, u;
  if (t2 = +t2, n = +n, e = +e, n === t2 && e > 0)
    return [n];
  if ((r = t2 < n) && (o = n, n = t2, t2 = o), (u = tn(n, t2, e)) === 0 || !isFinite(u))
    return [];
  if (u > 0) {
    let h = Math.round(n / u), f = Math.round(t2 / u);
    for (h * u < n && ++h, f * u > t2 && --f, a = new Array(o = f - h + 1); ++i < o; )
      a[i] = (h + i) * u;
  } else {
    u = -u;
    let h = Math.round(n * u), f = Math.round(t2 * u);
    for (h / u < n && ++h, f / u > t2 && --f, a = new Array(o = f - h + 1); ++i < o; )
      a[i] = (h + i) / u;
  }
  return r && a.reverse(), a;
}
function tn(n, t2, e) {
  var r = (t2 - n) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
  return i >= 0 ? (o >= T ? 10 : o >= I ? 5 : o >= q ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= T ? 10 : o >= I ? 5 : o >= q ? 2 : 1);
}
function wn(n, t2, e) {
  var r = Math.abs(t2 - n) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
  return o >= T ? i *= 10 : o >= I ? i *= 5 : o >= q && (i *= 2), t2 < n ? -i : i;
}
function Nn(n, t2) {
  t2 || (t2 = []);
  var e = n ? Math.min(t2.length, n.length) : 0, r = t2.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = n[i] * (1 - o) + t2[i] * o;
    return r;
  };
}
function kn(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function vn(n, t2) {
  var e = t2 ? t2.length : 0, r = n ? Math.min(e, n.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a)
    i[a] = X(n[a], t2[a]);
  for (; a < e; ++a)
    o[a] = t2[a];
  return function(u) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](u);
    return o;
  };
}
function xn(n, t2) {
  var e = /* @__PURE__ */ new Date();
  return n = +n, t2 = +t2, function(r) {
    return e.setTime(n * (1 - r) + t2 * r), e;
  };
}
function An(n, t2) {
  var e = {}, r = {}, i;
  (n === null || typeof n != "object") && (n = {}), (t2 === null || typeof t2 != "object") && (t2 = {});
  for (i in t2)
    i in n ? e[i] = X(n[i], t2[i]) : r[i] = t2[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
function X(n, t2) {
  var e = typeof t2, r;
  return t2 == null || e === "boolean" ? Mn(t2) : (e === "number" ? It : e === "string" ? (r = Ge(t2)) ? (t2 = r, Do) : Mu : t2 instanceof Ge ? Do : t2 instanceof Date ? xn : kn(t2) ? Nn : Array.isArray(t2) ? vn : typeof t2.valueOf != "function" && typeof t2.toString != "function" || isNaN(t2) ? An : It)(n, t2);
}
function Sn(n, t2) {
  return n = +n, t2 = +t2, function(e) {
    return Math.round(n * (1 - e) + t2 * e);
  };
}
function bn(n) {
  return Math.abs(n = Math.round(n)) >= 1e21 ? n.toLocaleString("en").replace(/,/g, "") : n.toString(10);
}
function R(n, t2) {
  if ((e = (n = t2 ? n.toExponential(t2 - 1) : n.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = n.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +n.slice(e + 1)
  ];
}
function A(n) {
  return n = R(Math.abs(n)), n ? n[1] : NaN;
}
function jn(n, t2) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, u = n[0], h = 0; i > 0 && u > 0 && (h + u + 1 > r && (u = Math.max(1, r - h)), o.push(e.substring(i -= u, i + u)), !((h += u + 1) > r)); )
      u = n[a = (a + 1) % n.length];
    return o.reverse().join(t2);
  };
}
function Pn(n) {
  return function(t2) {
    return t2.replace(/[0-9]/g, function(e) {
      return n[+e];
    });
  };
}
var zn = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function E(n) {
  if (!(t2 = zn.exec(n)))
    throw new Error("invalid format: " + n);
  var t2;
  return new B({
    fill: t2[1],
    align: t2[2],
    sign: t2[3],
    symbol: t2[4],
    zero: t2[5],
    width: t2[6],
    comma: t2[7],
    precision: t2[8] && t2[8].slice(1),
    trim: t2[9],
    type: t2[10]
  });
}
E.prototype = B.prototype;
function B(n) {
  this.fill = n.fill === void 0 ? " " : n.fill + "", this.align = n.align === void 0 ? ">" : n.align + "", this.sign = n.sign === void 0 ? "-" : n.sign + "", this.symbol = n.symbol === void 0 ? "" : n.symbol + "", this.zero = !!n.zero, this.width = n.width === void 0 ? void 0 : +n.width, this.comma = !!n.comma, this.precision = n.precision === void 0 ? void 0 : +n.precision, this.trim = !!n.trim, this.type = n.type === void 0 ? "" : n.type + "";
}
B.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function $n(n) {
  n:
    for (var t2 = n.length, e = 1, r = -1, i; e < t2; ++e)
      switch (n[e]) {
        case ".":
          r = i = e;
          break;
        case "0":
          r === 0 && (r = e), i = e;
          break;
        default:
          if (!+n[e])
            break n;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? n.slice(0, r) + n.slice(i + 1) : n;
}
var rn;
function Fn(n, t2) {
  var e = R(n, t2);
  if (!e)
    return n + "";
  var r = e[0], i = e[1], o = i - (rn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + R(n, Math.max(0, t2 + o - 1))[0];
}
function H(n, t2) {
  var e = R(n, t2);
  if (!e)
    return n + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
var J = {
  "%": (n, t2) => (n * 100).toFixed(t2),
  b: (n) => Math.round(n).toString(2),
  c: (n) => n + "",
  d: bn,
  e: (n, t2) => n.toExponential(t2),
  f: (n, t2) => n.toFixed(t2),
  g: (n, t2) => n.toPrecision(t2),
  o: (n) => Math.round(n).toString(8),
  p: (n, t2) => H(n * 100, t2),
  r: H,
  s: Fn,
  X: (n) => Math.round(n).toString(16).toUpperCase(),
  x: (n) => Math.round(n).toString(16)
};
function K(n) {
  return n;
}
var Q = Array.prototype.map;
var W = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Rn(n) {
  var t2 = n.grouping === void 0 || n.thousands === void 0 ? K : jn(Q.call(n.grouping, Number), n.thousands + ""), e = n.currency === void 0 ? "" : n.currency[0] + "", r = n.currency === void 0 ? "" : n.currency[1] + "", i = n.decimal === void 0 ? "." : n.decimal + "", o = n.numerals === void 0 ? K : Pn(Q.call(n.numerals, String)), a = n.percent === void 0 ? "%" : n.percent + "", u = n.minus === void 0 ? "−" : n.minus + "", h = n.nan === void 0 ? "NaN" : n.nan + "";
  function f(c) {
    c = E(c);
    var m = c.fill, p = c.align, M = c.sign, S = c.symbol, k = c.zero, b = c.width, L = c.comma, w = c.precision, G = c.trim, d = c.type;
    d === "n" ? (L = true, d = "g") : J[d] || (w === void 0 && (w = 12), G = true, d = "g"), (k || m === "0" && p === "=") && (k = true, m = "0", p = "=");
    var an = S === "$" ? e : S === "#" && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "", un = S === "$" ? r : /[%p]/.test(d) ? a : "", O = J[d], fn = /[defgprs%]/.test(d);
    w = w === void 0 ? 6 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function V(s) {
      var N = an, g = un, v, Z, j;
      if (d === "c")
        g = O(s) + g, s = "";
      else {
        s = +s;
        var P = s < 0 || 1 / s < 0;
        if (s = isNaN(s) ? h : O(Math.abs(s), w), G && (s = $n(s)), P && +s == 0 && M !== "+" && (P = false), N = (P ? M === "(" ? M : u : M === "-" || M === "(" ? "" : M) + N, g = (d === "s" ? W[8 + rn / 3] : "") + g + (P && M === "(" ? ")" : ""), fn) {
          for (v = -1, Z = s.length; ++v < Z; )
            if (j = s.charCodeAt(v), 48 > j || j > 57) {
              g = (j === 46 ? i + s.slice(v + 1) : s.slice(v)) + g, s = s.slice(0, v);
              break;
            }
        }
      }
      L && !k && (s = t2(s, 1 / 0));
      var z = N.length + s.length + g.length, y = z < b ? new Array(b - z + 1).join(m) : "";
      switch (L && k && (s = t2(y + s, y.length ? b - g.length : 1 / 0), y = ""), p) {
        case "<":
          s = N + s + g + y;
          break;
        case "=":
          s = N + y + s + g;
          break;
        case "^":
          s = y.slice(0, z = y.length >> 1) + N + s + g + y.slice(z);
          break;
        default:
          s = y + N + s + g;
          break;
      }
      return o(s);
    }
    return V.toString = function() {
      return c + "";
    }, V;
  }
  function l(c, m) {
    var p = f((c = E(c), c.type = "f", c)), M = Math.max(-8, Math.min(8, Math.floor(A(m) / 3))) * 3, S = Math.pow(10, -M), k = W[8 + M / 3];
    return function(b) {
      return p(S * b) + k;
    };
  }
  return {
    format: f,
    formatPrefix: l
  };
}
var $;
var en;
var on;
En({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function En(n) {
  return $ = Rn(n), en = $.format, on = $.formatPrefix, $;
}
function Ln(n) {
  return Math.max(0, -A(Math.abs(n)));
}
function Dn(n, t2) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(A(t2) / 3))) * 3 - A(Math.abs(n)));
}
function Tn(n, t2) {
  return n = Math.abs(n), t2 = Math.abs(t2) - n, Math.max(0, A(t2) - A(n)) + 1;
}
function In(n) {
  return function() {
    return n;
  };
}
function qn(n) {
  return +n;
}
var _ = [0, 1];
function x(n) {
  return n;
}
function C(n, t2) {
  return (t2 -= n = +n) ? function(e) {
    return (e - n) / t2;
  } : In(isNaN(t2) ? NaN : 0.5);
}
function Cn(n, t2) {
  var e;
  return n > t2 && (e = n, n = t2, t2 = e), function(r) {
    return Math.max(n, Math.min(t2, r));
  };
}
function Xn(n, t2, e) {
  var r = n[0], i = n[1], o = t2[0], a = t2[1];
  return i < r ? (r = C(i, r), o = e(a, o)) : (r = C(r, i), o = e(o, a)), function(u) {
    return o(r(u));
  };
}
function Bn(n, t2, e) {
  var r = Math.min(n.length, t2.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (n[r] < n[0] && (n = n.slice().reverse(), t2 = t2.slice().reverse()); ++a < r; )
    i[a] = C(n[a], n[a + 1]), o[a] = e(t2[a], t2[a + 1]);
  return function(u) {
    var h = yn(n, u, 1, r) - 1;
    return o[h](i[h](u));
  };
}
function Gn(n, t2) {
  return t2.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function On() {
  var n = _, t2 = _, e = X, r, i, o, a = x, u, h, f;
  function l() {
    var m = Math.min(n.length, t2.length);
    return a !== x && (a = Cn(n[0], n[m - 1])), u = m > 2 ? Bn : Xn, h = f = null, c;
  }
  function c(m) {
    return m == null || isNaN(m = +m) ? o : (h || (h = u(n.map(r), t2, e)))(r(a(m)));
  }
  return c.invert = function(m) {
    return a(i((f || (f = u(t2, n.map(r), It)))(m)));
  }, c.domain = function(m) {
    return arguments.length ? (n = Array.from(m, qn), l()) : n.slice();
  }, c.range = function(m) {
    return arguments.length ? (t2 = Array.from(m), l()) : t2.slice();
  }, c.rangeRound = function(m) {
    return t2 = Array.from(m), e = Sn, l();
  }, c.clamp = function(m) {
    return arguments.length ? (a = m ? true : x, l()) : a !== x;
  }, c.interpolate = function(m) {
    return arguments.length ? (e = m, l()) : e;
  }, c.unknown = function(m) {
    return arguments.length ? (o = m, c) : o;
  }, function(m, p) {
    return r = m, i = p, l();
  };
}
function Vn() {
  return On()(x, x);
}
function Zn(n, t2, e, r) {
  var i = wn(n, t2, e), o;
  switch (r = E(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(n), Math.abs(t2));
      return r.precision == null && !isNaN(o = Dn(i, a)) && (r.precision = o), on(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Tn(i, Math.max(Math.abs(n), Math.abs(t2)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Ln(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return en(r);
}
function Un(n) {
  var t2 = n.domain;
  return n.ticks = function(e) {
    var r = t2();
    return pn(r[0], r[r.length - 1], e ?? 10);
  }, n.tickFormat = function(e, r) {
    var i = t2();
    return Zn(i[0], i[i.length - 1], e ?? 10, r);
  }, n.nice = function(e) {
    e == null && (e = 10);
    var r = t2(), i = 0, o = r.length - 1, a = r[i], u = r[o], h, f, l = 10;
    for (u < a && (f = a, a = u, u = f, f = i, i = o, o = f); l-- > 0; ) {
      if (f = tn(a, u, e), f === h)
        return r[i] = a, r[o] = u, t2(r);
      if (f > 0)
        a = Math.floor(a / f) * f, u = Math.ceil(u / f) * f;
      else if (f < 0)
        a = Math.ceil(a * f) / f, u = Math.floor(u * f) / f;
      else
        break;
      h = f;
    }
    return n;
  }, n;
}
function Yn() {
  var n = Vn();
  return n.copy = function() {
    return Gn(n, Yn());
  }, t.apply(n, arguments), Un(n);
}

export {
  nn,
  wn,
  Gn,
  Vn,
  Yn
};
//# sourceMappingURL=chunk-D2AOP6KL.js.map