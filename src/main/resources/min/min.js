!(function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};
  function p(a, b) {
    b = b || d;
    var c = b.createElement("script");
    (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
  }
  var q = "3.2.1",
    r = function (a, b) {
      return new r.fn.init(a, b);
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function (a, b) {
      return b.toUpperCase();
    };
  (r.fn = r.prototype =
    {
      jquery: q,
      constructor: r,
      length: 0,
      toArray: function () {
        return f.call(this);
      },
      get: function (a) {
        return null == a
          ? f.call(this)
          : a < 0
          ? this[a + this.length]
          : this[a];
      },
      pushStack: function (a) {
        var b = r.merge(this.constructor(), a);
        return (b.prevObject = this), b;
      },
      each: function (a) {
        return r.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          r.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(f.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (a < 0 ? b : 0);
        return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: h,
      sort: c.sort,
      splice: c.splice,
    }),
    (r.extend = r.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || r.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          h < i;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (r.isPlainObject(d) || (e = Array.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && Array.isArray(c) ? c : []))
                        : (f = c && r.isPlainObject(c) ? c : {}),
                      (g[b] = r.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    r.extend({
      expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === r.type(a);
      },
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = r.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
      },
      isPlainObject: function (a) {
        var b, c;
        return (
          !(!a || "[object Object]" !== k.call(a)) &&
          (!(b = e(a)) ||
            ((c = l.call(b, "constructor") && b.constructor),
            "function" == typeof c && m.call(c) === n))
        );
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? j[k.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        p(a);
      },
      camelCase: function (a) {
        return a.replace(t, "ms-").replace(u, v);
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (w(a)) {
          for (c = a.length; d < c; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(s, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (w(Object(a))
              ? r.merge(c, "string" == typeof a ? [a] : a)
              : h.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : i.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          f = 0,
          h = [];
        if (w(a))
          for (d = a.length; f < d; f++)
            (e = b(a[f], f, c)), null != e && h.push(e);
        else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
        return g.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e;
        if (
          ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          r.isFunction(a))
        )
          return (
            (d = f.call(arguments, 2)),
            (e = function () {
              return a.apply(b || this, d.concat(f.call(arguments)));
            }),
            (e.guid = a.guid = a.guid || r.guid++),
            e
          );
      },
      now: Date.now,
      support: o,
    }),
    "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return (
      "function" !== c &&
      !r.isWindow(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  var x = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      J =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M =
        "\\[" +
        K +
        "*(" +
        L +
        ")(?:" +
        K +
        "*([*^$|!~]?=)" +
        K +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        L +
        "))|)" +
        K +
        "*\\]",
      N =
        ":(" +
        L +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            K +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            K +
            "*(?:([+-]|)" +
            K +
            "*(\\d+)|))" +
            K +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            K +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            K +
            "*((?:-\\d)?\\d*)" +
            K +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : d < 0
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function (a, b) {
        return b
          ? "\0" === a
            ? "\ufffd"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a;
      },
      da = function () {
        m();
      },
      ea = ta(
        function (a) {
          return a.disabled === !0 && ("form" in a || "label" in a);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      G.apply((D = H.call(v.childNodes)), v.childNodes),
        D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = {
        apply: D.length
          ? function (a, b) {
              F.apply(a, H.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== w && (l = Z.exec(a)))
          if ((f = l[1])) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = l[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return G.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) (s = b), (r = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(ba, ca))
              : b.setAttribute("id", (k = u)),
              (o = g(a)),
              (h = o.length);
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            (r = o.join(",")), (s = ($.test(a) && qa(b.parentNode)) || b);
          }
          if (r)
            try {
              return G.apply(d, s.querySelectorAll(r)), d;
            } catch (x) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(P, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return function (b) {
        return "form" in b
          ? b.parentNode && b.disabled === !1
            ? "label" in b
              ? "label" in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (b.isDisabled !== !a && ea(b) === a)
            : b.disabled === a
          : "label" in b && b.disabled === a;
      };
    }
    function pa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return !!b && "HTML" !== b.nodeName;
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              v !== n &&
                (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ja(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ja(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Y.test(n.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }),
                  (d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }))
                : ((d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  }),
                  (d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c,
                        d,
                        e,
                        f = b.getElementById(a);
                      if (f) {
                        if (
                          ((c = f.getAttributeNode("id")), c && c.value === a)
                        )
                          return [f];
                        (e = b.getElementsByName(a)), (d = 0);
                        while ((f = e[d++]))
                          if (
                            ((c = f.getAttributeNode("id")), c && c.value === a)
                          )
                            return [f];
                      }
                      return [];
                    }
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  if ("undefined" != typeof b.getElementsByClassName && p)
                    return b.getElementsByClassName(a);
                }),
              (r = []),
              (q = []),
              (c.qsa = Y.test(n.querySelectorAll)) &&
                (ja(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + K + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + K + "*(?:value|" + J + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ja(function (a) {
                  a.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + K + "*[*^$|!~]?="),
                    2 !== a.querySelectorAll(":enabled").length &&
                      q.push(":enabled", ":disabled"),
                    (o.appendChild(a).disabled = !0),
                    2 !== a.querySelectorAll(":disabled").length &&
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Y.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  (c.disconnectedMatch = s.call(a, "*")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", N);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Y.test(o.compareDocumentPosition)),
              (t =
                b || Y.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? I(k, a) - I(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? I(k, a) - I(k, b)
                        : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? la(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(S, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.escape = function (a) {
        return (a + "").replace(ba, ca);
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(_, aa)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return V.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      T.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(_, aa).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a);
                return null == e
                  ? "!=" === b
                  : !b ||
                      ((e += ""),
                      "=" === b
                        ? e === c
                        : "!=" === b
                        ? e !== c
                        : "^=" === b
                        ? c && 0 === e.indexOf(c)
                        : "*=" === b
                        ? c && e.indexOf(c) > -1
                        : "$=" === b
                        ? c && e.slice(-c.length) === c
                        : "~=" === b
                        ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1
                        : "|=" === b &&
                          (e === c || e.slice(0, c.length + 1) === c + "-"));
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ga.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = I(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(P, "$1"));
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0;
              };
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(_, aa)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ia(function (a) {
              return (
                U.test(a || "") || ga.error("unsupported lang: " + a),
                (a = a.replace(_, aa).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: oa(!1),
            disabled: oa(!0),
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return X.test(a.nodeName);
            },
            input: function (a) {
              return W.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: pa(function () {
              return [0];
            }),
            last: pa(function (a, b) {
              return [b - 1];
            }),
            eq: pa(function (a, b, c) {
              return [c < 0 ? c + b : c];
            }),
            even: pa(function (a, b) {
              for (var c = 0; c < b; c += 2) a.push(c);
              return a;
            }),
            odd: pa(function (a, b) {
              for (var c = 1; c < b; c += 2) a.push(c);
              return a;
            }),
            lt: pa(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: pa(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function ra() {}
    (ra.prototype = d.filters = d.pseudos),
      (d.setFilters = new ra()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = Q.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = R.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(P, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = V[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        });
    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d;
    }
    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first
        ? function (b, c, e) {
            while ((b = b[d])) if (1 === b.nodeType || g) return a(b, c, e);
            return !1;
          }
        : function (b, c, i) {
            var j,
              k,
              l,
              m = [w, h];
            if (i) {
              while ((b = b[d]))
                if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || g)
                  if (
                    ((l = b[u] || (b[u] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b;
                  else {
                    if ((j = k[f]) && j[0] === w && j[1] === h)
                      return (m[2] = j[2]);
                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                  }
            return !1;
          };
    }
    function ua(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
      return c;
    }
    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function xa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = xa(d)),
        e && !e[u] && (e = xa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : wa(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = wa(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? I(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
        })
      );
    }
    function ya(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ta(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ta(
            function (a) {
              return I(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        i < f;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
            return xa(
              i > 1 && ua(m),
              i > 1 &&
                sa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(P, "$1"),
              c,
              i < e && ya(a.slice(i, e)),
              e < f && ya((a = a.slice(e))),
              e < f && sa(a)
            );
          }
          m.push(c);
        }
      return ua(m);
    }
    function za(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
              u = wa(u);
            }
            G.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, za(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ga.select =
        function (a, b, c, e) {
          var f,
            i,
            j,
            k,
            l,
            m = "function" == typeof a && a,
            n = !e && g((a = m.selector || a));
          if (((c = c || []), 1 === n.length)) {
            if (
              ((i = n[0] = n[0].slice(0)),
              i.length > 2 &&
                "ID" === (j = i[0]).type &&
                9 === b.nodeType &&
                p &&
                d.relative[i[1].type])
            ) {
              if (
                ((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0]), !b)
              )
                return c;
              m && (b = b.parentNode), (a = a.slice(i.shift().value.length));
            }
            f = V.needsContext.test(a) ? 0 : i.length;
            while (f--) {
              if (((j = i[f]), d.relative[(k = j.type)])) break;
              if (
                (l = d.find[k]) &&
                (e = l(
                  j.matches[0].replace(_, aa),
                  ($.test(i[0].type) && qa(b.parentNode)) || b
                ))
              ) {
                if ((i.splice(f, 1), (a = e.length && sa(i)), !a))
                  return G.apply(c, e), c;
                break;
              }
            }
          }
          return (
            (m || h(a, n))(
              e,
              b,
              !p,
              c,
              !b || ($.test(a) && qa(b.parentNode)) || b
            ),
            c
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(J, function (a, b, c) {
          var d;
          if (!c)
            return a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
        }),
      ga
    );
  })(a);
  (r.find = x),
    (r.expr = x.selectors),
    (r.expr[":"] = r.expr.pseudos),
    (r.uniqueSort = r.unique = x.uniqueSort),
    (r.text = x.getText),
    (r.isXMLDoc = x.isXML),
    (r.contains = x.contains),
    (r.escapeSelector = x.escape);
  var y = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && r(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    z = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    A = r.expr.match.needsContext;
  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function E(a, b, c) {
    return r.isFunction(b)
      ? r.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        })
      : b.nodeType
      ? r.grep(a, function (a) {
          return (a === b) !== c;
        })
      : "string" != typeof b
      ? r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c;
        })
      : D.test(b)
      ? r.filter(b, a, c)
      : ((b = r.filter(b, a)),
        r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
  }
  (r.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? r.find.matchesSelector(d, a)
          ? [d]
          : []
        : r.find.matches(
            a,
            r.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    r.fn.extend({
      find: function (a) {
        var b,
          c,
          d = this.length,
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            r(a).filter(function () {
              for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
            })
          );
        for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
        return d > 1 ? r.uniqueSort(c) : c;
      },
      filter: function (a) {
        return this.pushStack(E(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(E(this, a || [], !0));
      },
      is: function (a) {
        return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1)
          .length;
      },
    });
  var F,
    G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = (r.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || F), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : G.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof r ? b[0] : b),
            r.merge(
              this,
              r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            C.test(e[1]) && r.isPlainObject(b))
          )
            for (e in b)
              r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && ((this[0] = f), (this.length = 1)),
          this
        );
      }
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : r.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(r)
        : r.makeArray(a, this);
    });
  (H.prototype = r.fn), (F = r(d));
  var I = /^(?:parents|prev(?:Until|All))/,
    J = { children: !0, contents: !0, next: !0, prev: !0 };
  r.fn.extend({
    has: function (a) {
      var b = r(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && r(a);
      if (!A.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && r.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? i.call(r(a), this[0])
          : i.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  r.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return y(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return y(a, "parentNode", c);
      },
      next: function (a) {
        return K(a, "nextSibling");
      },
      prev: function (a) {
        return K(a, "previousSibling");
      },
      nextAll: function (a) {
        return y(a, "nextSibling");
      },
      prevAll: function (a) {
        return y(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return y(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return y(a, "previousSibling", c);
      },
      siblings: function (a) {
        return z((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return z(a.firstChild);
      },
      contents: function (a) {
        return B(a, "iframe")
          ? a.contentDocument
          : (B(a, "template") && (a = a.content || a),
            r.merge([], a.childNodes));
      },
    },
    function (a, b) {
      r.fn[a] = function (c, d) {
        var e = r.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = r.filter(d, e)),
          this.length > 1 &&
            (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var L = /[^\x20\t\r\n\f]+/g;
  function M(a) {
    var b = {};
    return (
      r.each(a.match(L) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                r.each(b, function (b, c) {
                  r.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== r.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            r.each(arguments, function (a, b) {
              var c;
              while ((c = r.inArray(b, f, c)) > -1)
                f.splice(c, 1), c <= h && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? r.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || b || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  };
  function N(a) {
    return a;
  }
  function O(a) {
    throw a;
  }
  function P(a, b, c, d) {
    var e;
    try {
      a && r.isFunction((e = a.promise))
        ? e.call(a).done(b).fail(c)
        : a && r.isFunction((e = a.then))
        ? e.call(a, b, c)
        : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }
  r.extend({
    Deferred: function (b) {
      var c = [
          [
            "notify",
            "progress",
            r.Callbacks("memory"),
            r.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        d = "pending",
        e = {
          state: function () {
            return d;
          },
          always: function () {
            return f.done(arguments).fail(arguments), this;
          },
          catch: function (a) {
            return e.then(null, a);
          },
          pipe: function () {
            var a = arguments;
            return r
              .Deferred(function (b) {
                r.each(c, function (c, d) {
                  var e = r.isFunction(a[d[4]]) && a[d[4]];
                  f[d[1]](function () {
                    var a = e && e.apply(this, arguments);
                    a && r.isFunction(a.promise)
                      ? a
                          .promise()
                          .progress(b.notify)
                          .done(b.resolve)
                          .fail(b.reject)
                      : b[d[0] + "With"](this, e ? [a] : arguments);
                  });
                }),
                  (a = null);
              })
              .promise();
          },
          then: function (b, d, e) {
            var f = 0;
            function g(b, c, d, e) {
              return function () {
                var h = this,
                  i = arguments,
                  j = function () {
                    var a, j;
                    if (!(b < f)) {
                      if (((a = d.apply(h, i)), a === c.promise()))
                        throw new TypeError("Thenable self-resolution");
                      (j =
                        a &&
                        ("object" == typeof a || "function" == typeof a) &&
                        a.then),
                        r.isFunction(j)
                          ? e
                            ? j.call(a, g(f, c, N, e), g(f, c, O, e))
                            : (f++,
                              j.call(
                                a,
                                g(f, c, N, e),
                                g(f, c, O, e),
                                g(f, c, N, c.notifyWith)
                              ))
                          : (d !== N && ((h = void 0), (i = [a])),
                            (e || c.resolveWith)(h, i));
                    }
                  },
                  k = e
                    ? j
                    : function () {
                        try {
                          j();
                        } catch (a) {
                          r.Deferred.exceptionHook &&
                            r.Deferred.exceptionHook(a, k.stackTrace),
                            b + 1 >= f &&
                              (d !== O && ((h = void 0), (i = [a])),
                              c.rejectWith(h, i));
                        }
                      };
                b
                  ? k()
                  : (r.Deferred.getStackHook &&
                      (k.stackTrace = r.Deferred.getStackHook()),
                    a.setTimeout(k));
              };
            }
            return r
              .Deferred(function (a) {
                c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)),
                  c[1][3].add(g(0, a, r.isFunction(b) ? b : N)),
                  c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
              })
              .promise();
          },
          promise: function (a) {
            return null != a ? r.extend(a, e) : e;
          },
        },
        f = {};
      return (
        r.each(c, function (a, b) {
          var g = b[2],
            h = b[5];
          (e[b[1]] = g.add),
            h &&
              g.add(
                function () {
                  d = h;
                },
                c[3 - a][2].disable,
                c[0][2].lock
              ),
            g.add(b[3].fire),
            (f[b[0]] = function () {
              return (
                f[b[0] + "With"](this === f ? void 0 : this, arguments), this
              );
            }),
            (f[b[0] + "With"] = g.fireWith);
        }),
        e.promise(f),
        b && b.call(f, f),
        f
      );
    },
    when: function (a) {
      var b = arguments.length,
        c = b,
        d = Array(c),
        e = f.call(arguments),
        g = r.Deferred(),
        h = function (a) {
          return function (c) {
            (d[a] = this),
              (e[a] = arguments.length > 1 ? f.call(arguments) : c),
              --b || g.resolveWith(d, e);
          };
        };
      if (
        b <= 1 &&
        (P(a, g.done(h(c)).resolve, g.reject, !b),
        "pending" === g.state() || r.isFunction(e[c] && e[c].then))
      )
        return g.then();
      while (c--) P(e[c], h(c), g.reject);
      return g.promise();
    },
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (r.Deferred.exceptionHook = function (b, c) {
    a.console &&
      a.console.warn &&
      b &&
      Q.test(b.name) &&
      a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }),
    (r.readyException = function (b) {
      a.setTimeout(function () {
        throw b;
      });
    });
  var R = r.Deferred();
  (r.fn.ready = function (a) {
    return (
      R.then(a)["catch"](function (a) {
        r.readyException(a);
      }),
      this
    );
  }),
    r.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (a) {
        (a === !0 ? --r.readyWait : r.isReady) ||
          ((r.isReady = !0),
          (a !== !0 && --r.readyWait > 0) || R.resolveWith(d, [r]));
      },
    }),
    (r.ready.then = R.then);
  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S),
      r.ready();
  }
  "complete" === d.readyState ||
  ("loading" !== d.readyState && !d.documentElement.doScroll)
    ? a.setTimeout(r.ready)
    : (d.addEventListener("DOMContentLoaded", S),
      a.addEventListener("load", S));
  var T = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        r.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(r(a), c);
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    U = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function V() {
    this.expando = r.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (a) {
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            U(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[r.camelCase(b)] = c;
        else for (d in b) e[r.camelCase(d)] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][r.camelCase(b)];
      },
      access: function (a, b, c) {
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? this.get(a, b)
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d = a[this.expando];
        if (void 0 !== d) {
          if (void 0 !== b) {
            Array.isArray(b)
              ? (b = b.map(r.camelCase))
              : ((b = r.camelCase(b)), (b = b in d ? [b] : b.match(L) || [])),
              (c = b.length);
            while (c--) delete d[b[c]];
          }
          (void 0 === b || r.isEmptyObject(d)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !r.isEmptyObject(b);
      },
    });
  var W = new V(),
    X = new V(),
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function $(a) {
    return (
      "true" === a ||
      ("false" !== a &&
        ("null" === a
          ? null
          : a === +a + ""
          ? +a
          : Y.test(a)
          ? JSON.parse(a)
          : a))
    );
  }
  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Z, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c = $(c);
        } catch (e) {}
        X.set(a, b, c);
      } else c = void 0;
    return c;
  }
  r.extend({
    hasData: function (a) {
      return X.hasData(a) || W.hasData(a);
    },
    data: function (a, b, c) {
      return X.access(a, b, c);
    },
    removeData: function (a, b) {
      X.remove(a, b);
    },
    _data: function (a, b, c) {
      return W.access(a, b, c);
    },
    _removeData: function (a, b) {
      W.remove(a, b);
    },
  }),
    r.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = X.get(f)), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = r.camelCase(d.slice(5))), _(f, d, e[d])));
            W.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              X.set(this, a);
            })
          : T(
              this,
              function (b) {
                var c;
                if (f && void 0 === b) {
                  if (((c = X.get(f, a)), void 0 !== c)) return c;
                  if (((c = _(f, a)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    X.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          X.remove(this, a);
        });
      },
    }),
    r.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = W.get(a, b)),
            c &&
              (!d || Array.isArray(c)
                ? (d = W.access(a, b, r.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function () {
            r.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          W.get(a, c) ||
          W.access(a, c, {
            empty: r.Callbacks("once memory").add(function () {
              W.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    r.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? r.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          r.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = W.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function (a, b) {
      return (
        (a = b || a),
        "none" === a.style.display ||
          ("" === a.style.display &&
            r.contains(a.ownerDocument, a) &&
            "none" === r.css(a, "display"))
      );
    },
    ea = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    };
  function fa(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return r.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
      k = (r.cssNumber[b] || ("px" !== j && +i)) && ba.exec(r.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), r.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var ga = {};
  function ha(a) {
    var b,
      c = a.ownerDocument,
      d = a.nodeName,
      e = ga[d];
    return e
      ? e
      : ((b = c.body.appendChild(c.createElement(d))),
        (e = r.css(b, "display")),
        b.parentNode.removeChild(b),
        "none" === e && (e = "block"),
        (ga[d] = e),
        e);
  }
  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (d = a[f]),
        d.style &&
          ((c = d.style.display),
          b
            ? ("none" === c &&
                ((e[f] = W.get(d, "display") || null),
                e[f] || (d.style.display = "")),
              "" === d.style.display && da(d) && (e[f] = ha(d)))
            : "none" !== c && ((e[f] = "none"), W.set(d, "display", c)));
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
    return a;
  }
  r.fn.extend({
    show: function () {
      return ia(this, !0);
    },
    hide: function () {
      return ia(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function () {
            da(this) ? r(this).show() : r(this).hide();
          });
    },
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ma.optgroup = ma.option),
    (ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead),
    (ma.th = ma.td);
  function na(a, b) {
    var c;
    return (
      (c =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : []),
      void 0 === b || (b && B(a, b)) ? r.merge([a], c) : c
    );
  }
  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
  }
  var pa = /<|&#?\w+;/;
  function qa(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        n = 0,
        o = a.length;
      n < o;
      n++
    )
      if (((f = a[n]), f || 0 === f))
        if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
        else if (pa.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (ka.exec(f) || ["", ""])[1].toLowerCase()),
            (i = ma[h] || ma._default),
            (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          r.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (n = 0);
    while ((f = m[n++]))
      if (d && r.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = r.contains(f.ownerDocument, f)),
        (g = na(l.appendChild(f), "script")),
        j && oa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) la.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;
  function va() {
    return !0;
  }
  function wa() {
    return !1;
  }
  function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ya(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = wa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return r().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = r.guid++))),
      a.each(function () {
        r.event.add(this, b, e, d, c);
      })
    );
  }
  (r.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.get(a);
      if (q) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          e && r.find.matchesSelector(ra, e),
          c.guid || (c.guid = r.guid++),
          (i = q.events) || (i = q.events = {}),
          (g = q.handle) ||
            (g = q.handle =
              function (b) {
                return "undefined" != typeof r && r.event.triggered !== b.type
                  ? r.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(L) || [""]),
          (j = b.length);
        while (j--)
          (h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = r.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = r.event.special[n] || {}),
              (k = r.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && r.expr.match.needsContext.test(e),
                  namespace: o.join("."),
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (r.event.global[n] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.hasData(a) && W.get(a);
      if (q && (i = q.events)) {
        (b = (b || "").match(L) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            (l = r.event.special[n] || {}),
              (n = (d ? l.delegateType : l.bindType) || n),
              (m = i[n] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                r.removeEvent(a, n, q.handle),
              delete i[n]);
          } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      var b = r.event.fix(a),
        c,
        d,
        e,
        f,
        g,
        h,
        i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (
        ((b.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, b) !== !1)
      ) {
        (h = r.event.handlers.call(this, b, j)), (c = 0);
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          (b.currentTarget = f.elem), (d = 0);
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
            (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
              ((b.handleObj = g),
              (b.data = g.data),
              (e = (
                (r.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (b.result = e) === !1 &&
                (b.preventDefault(), b.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++)
              (d = b[c]),
                (e = d.selector + " "),
                void 0 === g[e] &&
                  (g[e] = d.needsContext
                    ? r(e, this).index(j) > -1
                    : r.find(e, this, null, [j]).length),
                g[e] && f.push(d);
            f.length && h.push({ elem: j, handlers: f });
          }
      return (
        (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
      );
    },
    addProp: function (a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b)
          ? function () {
              if (this.originalEvent) return b(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[a];
            },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b,
          });
        },
      });
    },
    fix: function (a) {
      return a[r.expando] ? a : new r.Event(a);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== xa() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === xa() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && B(this, "input"))
            return this.click(), !1;
        },
        _default: function (a) {
          return B(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (r.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (r.Event = function (a, b) {
      return this instanceof r.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? va
                  : wa),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          b && r.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || r.now()),
          void (this[r.expando] = !0))
        : new r.Event(a, b);
    }),
    (r.Event.prototype = {
      constructor: r.Event,
      isDefaultPrevented: wa,
      isPropagationStopped: wa,
      isImmediatePropagationStopped: wa,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = va),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = va),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = va),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    r.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button;
          return null == a.which && sa.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && ta.test(a.type)
            ? 1 & b
              ? 1
              : 2 & b
              ? 3
              : 4 & b
              ? 2
              : 0
            : a.which;
        },
      },
      r.event.addProp
    ),
    r.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        r.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || r.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    r.fn.extend({
      on: function (a, b, c, d) {
        return ya(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ya(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            r(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = wa),
          this.each(function () {
            r.event.remove(this, a, c, b);
          })
        );
      },
    });
  var za =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? r(">tbody", a)[0] || a
      : a;
  }
  function Fa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function Ga(a) {
    var b = Ca.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        W.hasData(a) &&
        ((f = W.access(a)), (g = W.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
      }
      X.hasData(a) && ((h = X.access(a)), (i = r.extend({}, h)), X.set(b, i));
    }
  }
  function Ia(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ja.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e,
      f,
      h,
      i,
      j,
      k,
      l = 0,
      m = a.length,
      n = m - 1,
      q = b[0],
      s = r.isFunction(q);
    if (s || (m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
      });
    if (
      m &&
      ((e = qa(b, a[0].ownerDocument, !1, a, d)),
      (f = e.firstChild),
      1 === e.childNodes.length && (e = f),
      f || d)
    ) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)
        (j = e),
          l !== n &&
            ((j = r.clone(j, !0, !0)), i && r.merge(h, na(j, "script"))),
          c.call(a[l], j, l);
      if (i)
        for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)
          (j = h[l]),
            la.test(j.type || "") &&
              !W.access(j, "globalEval") &&
              r.contains(k, j) &&
              (j.src
                ? r._evalUrl && r._evalUrl(j.src)
                : p(j.textContent.replace(Da, ""), k));
    }
    return a;
  }
  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || r.cleanData(na(d)),
        d.parentNode &&
          (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  r.extend({
    htmlPrefilter: function (a) {
      return a.replace(za, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = r.contains(a.ownerDocument, a);
      if (
        !(
          o.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          r.isXMLDoc(a)
        )
      )
        for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)
          Ia(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)
            Ha(f[d], g[d]);
        else Ha(a, h);
      return (
        (g = na(h, "script")), g.length > 0 && oa(g, !i && na(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if ((b = c[W.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0;
          }
          c[X.expando] && (c[X.expando] = void 0);
        }
    },
  }),
    r.fn.extend({
      detach: function (a) {
        return Ka(this, a, !0);
      },
      remove: function (a) {
        return Ka(this, a);
      },
      text: function (a) {
        return T(
          this,
          function (a) {
            return void 0 === a
              ? r.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (r.cleanData(na(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return r.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return T(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !Aa.test(a) &&
              !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = r.htmlPrefilter(a);
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (r.cleanData(na(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ja(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            r.inArray(this, a) < 0 &&
              (r.cleanData(na(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    r.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        r.fn[a] = function (a) {
          for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
            (c = g === f ? this : this.clone(!0)),
              r(e[g])[b](c),
              h.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    };
  !(function () {
    function b() {
      if (i) {
        (i.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (i.innerHTML = ""),
          ra.appendChild(h);
        var b = a.getComputedStyle(i);
        (c = "1%" !== b.top),
          (g = "2px" === b.marginLeft),
          (e = "4px" === b.width),
          (i.style.marginRight = "50%"),
          (f = "4px" === b.marginRight),
          ra.removeChild(h),
          (i = null);
      }
    }
    var c,
      e,
      f,
      g,
      h = d.createElement("div"),
      i = d.createElement("div");
    i.style &&
      ((i.style.backgroundClip = "content-box"),
      (i.cloneNode(!0).style.backgroundClip = ""),
      (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
      (h.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      h.appendChild(i),
      r.extend(o, {
        pixelPosition: function () {
          return b(), c;
        },
        boxSizingReliable: function () {
          return b(), e;
        },
        pixelMarginRight: function () {
          return b(), f;
        },
        reliableMarginLeft: function () {
          return b(), g;
        },
      }));
  })();
  function Oa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Na(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
        !o.pixelMarginRight() &&
          Ma.test(g) &&
          La.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function Pa(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = { position: "absolute", visibility: "hidden", display: "block" },
    Ta = { letterSpacing: "0", fontWeight: "400" },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;
  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--) if (((a = Ua[c] + b), a in Va)) return a;
  }
  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }
  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Za(a, b, c, d, e) {
    var f,
      g = 0;
    for (
      f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
      f < 4;
      f += 2
    )
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
        d
          ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)),
            "margin" !== c &&
              (g -= r.css(a, "border" + ca[f] + "Width", !0, e)))
          : ((g += r.css(a, "padding" + ca[f], !0, e)),
            "padding" !== c &&
              (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    return g;
  }
  function $a(a, b, c) {
    var d,
      e = Na(a),
      f = Oa(a, b, e),
      g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f)
      ? f
      : ((d = g && (o.boxSizingReliable() || f === a.style[b])),
        "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
        (f = parseFloat(f) || 0),
        f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Oa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b),
          j = a.style;
        return (
          i || (b = Xa(h)),
          (g = r.cssHooks[b] || r.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : j[b]
            : ((f = typeof c),
              "string" === f &&
                (e = ba.exec(c)) &&
                e[1] &&
                ((c = fa(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (r.cssNumber[h] ? "" : "px")),
                o.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (j[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i ? j.setProperty(b, c) : (j[b] = c))),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = r.camelCase(b),
        i = Ra.test(b);
      return (
        i || (b = Xa(h)),
        (g = r.cssHooks[b] || r.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Oa(a, b, d)),
        "normal" === e && b in Ta && (e = Ta[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    r.each(["height", "width"], function (a, b) {
      r.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return !Qa.test(r.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? $a(a, b, d)
              : ea(a, Sa, function () {
                  return $a(a, b, d);
                });
        },
        set: function (a, c, d) {
          var e,
            f = d && Na(a),
            g =
              d &&
              Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = ba.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = r.css(a, b))),
            Ya(a, c, g)
          );
        },
      };
    }),
    (r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(Oa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              ea(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (r.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            d < 4;
            d++
          )
            e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        La.test(a) || (r.cssHooks[a + b].set = Ya);
    }),
    r.fn.extend({
      css: function (a, b) {
        return T(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (Array.isArray(b)) {
              for (d = Na(a), e = b.length; g < e; g++)
                f[b[g]] = r.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
    });
  function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }
  (r.Tween = _a),
    (_a.prototype = {
      constructor: _a,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || r.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (r.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = _a.propHooks[this.prop];
        return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = _a.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                r.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : _a.propHooks._default.set(this),
          this
        );
      },
    }),
    (_a.prototype.init.prototype = _a.prototype),
    (_a.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = r.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          r.fx.step[a.prop]
            ? r.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : r.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (_a.propHooks.scrollTop = _a.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (r.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (r.fx = _a.prototype.init),
    (r.fx.step = {});
  var ab,
    bb,
    cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;
  function eb() {
    bb &&
      (d.hidden === !1 && a.requestAnimationFrame
        ? a.requestAnimationFrame(eb)
        : a.setTimeout(eb, r.fx.interval),
      r.fx.tick());
  }
  function fb() {
    return (
      a.setTimeout(function () {
        ab = void 0;
      }),
      (ab = r.now())
    );
  }
  function gb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = ca[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function hb(a, b, c) {
    for (
      var d,
        e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ib(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = "width" in b || "height" in b,
      m = this,
      n = {},
      o = a.style,
      p = a.nodeType && da(a),
      q = W.get(a, "fxshow");
    c.queue ||
      ((g = r._queueHooks(a, "fx")),
      null == g.unqueued &&
        ((g.unqueued = 0),
        (h = g.empty.fire),
        (g.empty.fire = function () {
          g.unqueued || h();
        })),
      g.unqueued++,
      m.always(function () {
        m.always(function () {
          g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
        });
      }));
    for (d in b)
      if (((e = b[d]), cb.test(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        n[d] = (q && q[d]) || r.style(a, d);
      }
    if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
      l &&
        1 === a.nodeType &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = q && q.display),
        null == j && (j = W.get(a, "display")),
        (k = r.css(a, "display")),
        "none" === k &&
          (j
            ? (k = j)
            : (ia([a], !0),
              (j = a.style.display || j),
              (k = r.css(a, "display")),
              ia([a]))),
        ("inline" === k || ("inline-block" === k && null != j)) &&
          "none" === r.css(a, "float") &&
          (i ||
            (m.done(function () {
              o.display = j;
            }),
            null == j && ((k = o.display), (j = "none" === k ? "" : k))),
          (o.display = "inline-block"))),
        c.overflow &&
          ((o.overflow = "hidden"),
          m.always(function () {
            (o.overflow = c.overflow[0]),
              (o.overflowX = c.overflow[1]),
              (o.overflowY = c.overflow[2]);
          })),
        (i = !1);
      for (d in n)
        i ||
          (q
            ? "hidden" in q && (p = q.hidden)
            : (q = W.access(a, "fxshow", { display: j })),
          f && (q.hidden = !p),
          p && ia([a], !0),
          m.done(function () {
            p || ia([a]), W.remove(a, "fxshow");
            for (d in n) r.style(a, d, n[d]);
          })),
          (i = hb(p ? q[d] : 0, d, m)),
          d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
    }
  }
  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = r.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = r.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kb(a, b, c) {
    var d,
      e,
      f = 0,
      g = kb.prefilters.length,
      h = r.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = ab || fb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i
            ? c
            : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: r.extend({}, b),
        opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: ab || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = r.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); f < g; f++)
      if ((d = kb.prefilters[f].call(j, a, k, j.opts)))
        return (
          r.isFunction(d.stop) &&
            (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
          d
        );
    return (
      r.map(k, hb, j),
      r.isFunction(j.opts.start) && j.opts.start.call(a, j),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always),
      r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
    );
  }
  (r.Animation = r.extend(kb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return fa(c.elem, a, ba.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(L));
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (kb.tweeners[c] = kb.tweeners[c] || []),
          kb.tweeners[c].unshift(b);
    },
    prefilters: [ib],
    prefilter: function (a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    },
  })),
    (r.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? r.extend({}, a)
          : {
              complete: c || (!c && b) || (r.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !r.isFunction(b) && b),
            };
      return (
        r.fx.off
          ? (d.duration = 0)
          : "number" != typeof d.duration &&
            (d.duration in r.fx.speeds
              ? (d.duration = r.fx.speeds[d.duration])
              : (d.duration = r.fx.speeds._default)),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          r.isFunction(d.old) && d.old.call(this),
            d.queue && r.dequeue(this, d.queue);
        }),
        d
      );
    }),
    r.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(da)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function () {
            var b = kb(this, r.extend({}, a), f);
            (e || W.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = r.timers,
              g = W.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || r.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = W.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = r.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                r.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    r.each(["toggle", "show", "hide"], function (a, b) {
      var c = r.fn[b];
      r.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gb(b, !0), a, d, e);
      };
    }),
    r.each(
      {
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        r.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (r.timers = []),
    (r.fx.tick = function () {
      var a,
        b = 0,
        c = r.timers;
      for (ab = r.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || r.fx.stop(), (ab = void 0);
    }),
    (r.fx.timer = function (a) {
      r.timers.push(a), r.fx.start();
    }),
    (r.fx.interval = 13),
    (r.fx.start = function () {
      bb || ((bb = !0), eb());
    }),
    (r.fx.stop = function () {
      bb = null;
    }),
    (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (r.fn.delay = function (b, c) {
      return (
        (b = r.fx ? r.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (o.checkOn = "" !== a.value),
        (o.optSelected = c.selected),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (o.radioValue = "t" === a.value);
    })();
  var lb,
    mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function (a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    },
  }),
    r.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? r.prop(a, b, c)
            : ((1 === f && r.isXMLDoc(a)) ||
                (e =
                  r.attrHooks[b.toLowerCase()] ||
                  (r.expr.match.bool.test(b) ? lb : void 0)),
              void 0 !== c
                ? null === c
                  ? void r.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = r.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!o.radioValue && "radio" === b && B(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d = 0,
          e = b && b.match(L);
        if (e && 1 === a.nodeType) while ((c = e[d++])) a.removeAttribute(c);
      },
    }),
    (lb = {
      set: function (a, b, c) {
        return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = mb[b] || r.find.attr;
      mb[b] = function (a, b, d) {
        var e,
          f,
          g = b.toLowerCase();
        return (
          d ||
            ((f = mb[g]),
            (mb[g] = e),
            (e = null != c(a, b, d) ? g : null),
            (mb[g] = f)),
          e
        );
      };
    });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function (a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    },
  }),
    r.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && r.isXMLDoc(a)) ||
              ((b = r.propFix[b] || b), (e = r.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = r.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : nb.test(a.nodeName) || (ob.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    o.optSelected ||
      (r.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    r.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        r.propFix[this.toLowerCase()] = this;
      }
    );
  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ");
  }
  function qb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  r.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).addClass(a.call(this, b, qb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).removeClass(a.call(this, b, qb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : r.isFunction(a)
        ? this.each(function (c) {
            r(this).toggleClass(a.call(this, c, qb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = r(this)), (f = a.match(L) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = qb(this)), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
          return !0;
      return !1;
    },
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = r.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, r(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : Array.isArray(e) &&
                    (e = r.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  r.valHooks[this.type] ||
                  r.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    r.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = r.find.attr(a, "value");
            return null != b ? b : pb(r.text(a));
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;
            for (d = f < 0 ? i : g ? f : 0; d < i; d++)
              if (
                ((c = e[d]),
                (c.selected || d === f) &&
                  !c.disabled &&
                  (!c.parentNode.disabled || !B(c.parentNode, "optgroup")))
              ) {
                if (((b = r(c).val()), g)) return b;
                h.push(b);
              }
            return h;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    r.each(["radio", "checkbox"], function () {
      (r.valHooks[this] = {
        set: function (a, b) {
          if (Array.isArray(b))
            return (a.checked = r.inArray(r(a).val(), b) > -1);
        },
      }),
        o.checkOn ||
          (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        k,
        m,
        n,
        o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !sb.test(p + r.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (k = p.indexOf(":") < 0 && "on" + p),
          (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : r.makeArray(c, [b])),
          (n = r.event.special[p] || {}),
          f || !n.trigger || n.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (
            j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            o.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : n.bindType || p),
            (m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle")),
            m && m.apply(h, c),
            (m = k && h[k]),
            m &&
              m.apply &&
              U(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = p),
          f ||
            b.isDefaultPrevented() ||
            (n._default && n._default.apply(o.pop(), c) !== !1) ||
            !U(e) ||
            (k &&
              r.isFunction(e[p]) &&
              !r.isWindow(e) &&
              ((i = e[k]),
              i && (e[k] = null),
              (r.event.triggered = p),
              e[p](),
              (r.event.triggered = void 0),
              i && (e[k] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });
      r.event.trigger(d, null, b);
    },
  }),
    r.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          r.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        if (c) return r.event.trigger(a, b, c, !0);
      },
    }),
    r.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (a, b) {
        r.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    r.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (o.focusin = "onfocusin" in a),
    o.focusin ||
      r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          r.event.simulate(b, a.target, r.event.fix(a));
        };
        r.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b);
            e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b) - 1;
            e
              ? W.access(d, b, e)
              : (d.removeEventListener(a, c, !0), W.remove(d, b));
          },
        };
      });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }
    return (
      (c && !c.getElementsByTagName("parsererror").length) ||
        r.error("Invalid XML: " + b),
      c
    );
  };
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b))
      r.each(b, function (b, e) {
        c || wb.test(a)
          ? d(a, e)
          : Ab(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== r.type(b)) d(a, b);
    else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  (r.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        var c = r.isFunction(b) ? b() : b;
        d[d.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
      };
    if (Array.isArray(a) || (a.jquery && !r.isPlainObject(a)))
      r.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join("&");
  }),
    r.fn.extend({
      serialize: function () {
        return r.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = r.prop(this, "elements");
          return a ? r.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !r(this).is(":disabled") &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !ja.test(a))
            );
          })
          .map(function (a, b) {
            var c = r(this).val();
            return null == c
              ? null
              : Array.isArray(c)
              ? r.map(c, function (a) {
                  return { name: b.name, value: a.replace(xb, "\r\n") };
                })
              : { name: b.name, value: c.replace(xb, "\r\n") };
          })
          .get();
      },
    });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;
  function Mb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Nb(a, b, c, d) {
    var e = {},
      f = a === Jb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        r.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Ob(a, b) {
    var c,
      d,
      e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a;
  }
  function Pb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Qb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = r.ajaxSetup({}, c),
        p = o.context || o,
        q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
        s = r.Deferred(),
        t = r.Callbacks("once memory"),
        u = o.statusCode || {},
        v = {},
        w = {},
        x = "canceled",
        y = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (k) {
              if (!h) {
                h = {};
                while ((b = Eb.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return k ? g : null;
          },
          setRequestHeader: function (a, b) {
            return (
              null == k &&
                ((a = w[a.toLowerCase()] = w[a.toLowerCase()] || a),
                (v[a] = b)),
              this
            );
          },
          overrideMimeType: function (a) {
            return null == k && (o.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (k) y.always(a[y.status]);
              else for (b in a) u[b] = [u[b], a[b]];
            return this;
          },
          abort: function (a) {
            var b = a || x;
            return e && e.abort(b), A(0, b), this;
          },
        };
      if (
        (s.promise(y),
        (o.url = ((b || o.url || tb.href) + "").replace(
          Hb,
          tb.protocol + "//"
        )),
        (o.type = c.method || c.type || o.method || o.type),
        (o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""]),
        null == o.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = o.url),
            (j.href = j.href),
            (o.crossDomain =
              Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host);
        } catch (z) {
          o.crossDomain = !0;
        }
      }
      if (
        (o.data &&
          o.processData &&
          "string" != typeof o.data &&
          (o.data = r.param(o.data, o.traditional)),
        Nb(Ib, o, c, y),
        k)
      )
        return y;
      (l = r.event && o.global),
        l && 0 === r.active++ && r.event.trigger("ajaxStart"),
        (o.type = o.type.toUpperCase()),
        (o.hasContent = !Gb.test(o.type)),
        (f = o.url.replace(Cb, "")),
        o.hasContent
          ? o.data &&
            o.processData &&
            0 ===
              (o.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (o.data = o.data.replace(Bb, "+"))
          : ((n = o.url.slice(f.length)),
            o.data && ((f += (vb.test(f) ? "&" : "?") + o.data), delete o.data),
            o.cache === !1 &&
              ((f = f.replace(Db, "$1")),
              (n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n)),
            (o.url = f + n)),
        o.ifModified &&
          (r.lastModified[f] &&
            y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
          r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
        ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) &&
          y.setRequestHeader("Content-Type", o.contentType),
        y.setRequestHeader(
          "Accept",
          o.dataTypes[0] && o.accepts[o.dataTypes[0]]
            ? o.accepts[o.dataTypes[0]] +
                ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "")
            : o.accepts["*"]
        );
      for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
        return y.abort();
      if (
        ((x = "abort"),
        t.add(o.complete),
        y.done(o.success),
        y.fail(o.error),
        (e = Nb(Jb, o, c, y)))
      ) {
        if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k))
          return y;
        o.async &&
          o.timeout > 0 &&
          (i = a.setTimeout(function () {
            y.abort("timeout");
          }, o.timeout));
        try {
          (k = !1), e.send(v, A);
        } catch (z) {
          if (k) throw z;
          A(-1, z);
        }
      } else A(-1, "No Transport");
      function A(b, c, d, h) {
        var j,
          m,
          n,
          v,
          w,
          x = c;
        k ||
          ((k = !0),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (y.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && b < 300) || 304 === b),
          d && (v = Pb(o, y, d)),
          (v = Qb(o, v, y, j)),
          j
            ? (o.ifModified &&
                ((w = y.getResponseHeader("Last-Modified")),
                w && (r.lastModified[f] = w),
                (w = y.getResponseHeader("etag")),
                w && (r.etag[f] = w)),
              204 === b || "HEAD" === o.type
                ? (x = "nocontent")
                : 304 === b
                ? (x = "notmodified")
                : ((x = v.state), (m = v.data), (n = v.error), (j = !n)))
            : ((n = x), (!b && x) || ((x = "error"), b < 0 && (b = 0))),
          (y.status = b),
          (y.statusText = (c || x) + ""),
          j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
          y.statusCode(u),
          (u = void 0),
          l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
          t.fireWith(p, [y, x]),
          l &&
            (q.trigger("ajaxComplete", [y, o]),
            --r.active || r.event.trigger("ajaxStop")));
      }
      return y;
    },
    getJSON: function (a, b, c) {
      return r.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return r.get(a, void 0, b, "script");
    },
  }),
    r.each(["get", "post"], function (a, b) {
      r[b] = function (a, c, d, e) {
        return (
          r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          r.ajax(
            r.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              r.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (r._evalUrl = function (a) {
      return r.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    r.fn.extend({
      wrapAll: function (a) {
        var b;
        return (
          this[0] &&
            (r.isFunction(a) && (a = a.call(this[0])),
            (b = r(a, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (a) {
        return r.isFunction(a)
          ? this.each(function (b) {
              r(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = r(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = r.isFunction(a);
        return this.each(function (c) {
          r(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function (a) {
        return (
          this.parent(a)
            .not("body")
            .each(function () {
              r(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (r.expr.pseudos.hidden = function (a) {
      return !r.expr.pseudos.visible(a);
    }),
    (r.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }),
    (r.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Rb = { 0: 200, 1223: 204 },
    Sb = r.ajaxSettings.xhr();
  (o.cors = !!Sb && "withCredentials" in Sb),
    (o.ajax = Sb = !!Sb),
    r.ajaxTransport(function (b) {
      var c, d;
      if (o.cors || (Sb && !b.crossDomain))
        return {
          send: function (e, f) {
            var g,
              h = b.xhr();
            if (
              (h.open(b.type, b.url, b.async, b.username, b.password),
              b.xhrFields)
            )
              for (g in b.xhrFields) h[g] = b.xhrFields[g];
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
              b.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest");
            for (g in e) h.setRequestHeader(g, e[g]);
            (c = function (a) {
              return function () {
                c &&
                  ((c =
                    d =
                    h.onload =
                    h.onerror =
                    h.onabort =
                    h.onreadystatechange =
                      null),
                  "abort" === a
                    ? h.abort()
                    : "error" === a
                    ? "number" != typeof h.status
                      ? f(0, "error")
                      : f(h.status, h.statusText)
                    : f(
                        Rb[h.status] || h.status,
                        h.statusText,
                        "text" !== (h.responseType || "text") ||
                          "string" != typeof h.responseText
                          ? { binary: h.response }
                          : { text: h.responseText },
                        h.getAllResponseHeaders()
                      ));
              };
            }),
              (h.onload = c()),
              (d = h.onerror = c("error")),
              void 0 !== h.onabort
                ? (h.onabort = d)
                : (h.onreadystatechange = function () {
                    4 === h.readyState &&
                      a.setTimeout(function () {
                        c && d();
                      });
                  }),
              (c = c("abort"));
            try {
              h.send((b.hasContent && b.data) || null);
            } catch (i) {
              if (c) throw i;
            }
          },
          abort: function () {
            c && c();
          },
        };
    }),
    r.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1);
    }),
    r.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return r.globalEval(a), a;
        },
      },
    }),
    r.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    r.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = r("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Tb.pop() || r.expando + "_" + ub++;
      return (this[a] = !0), a;
    },
  }),
    r.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Ub.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ub.test(b.data) &&
              "data");
      if (h || "jsonp" === b.dataTypes[0])
        return (
          (e = b.jsonpCallback =
            r.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Ub, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? r(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Tb.push(e)),
              g && r.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script"
        );
    }),
    (o.createHTMLDocument = (function () {
      var a = d.implementation.createHTMLDocument("").body;
      return (
        (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
      );
    })()),
    (r.parseHTML = function (a, b, c) {
      if ("string" != typeof a) return [];
      "boolean" == typeof b && ((c = b), (b = !1));
      var e, f, g;
      return (
        b ||
          (o.createHTMLDocument
            ? ((b = d.implementation.createHTMLDocument("")),
              (e = b.createElement("base")),
              (e.href = d.location.href),
              b.head.appendChild(e))
            : (b = d)),
        (f = C.exec(a)),
        (g = !c && []),
        f
          ? [b.createElement(f[1])]
          : ((f = qa([a], b, g)),
            g && g.length && r(g).remove(),
            r.merge([], f.childNodes))
      );
    }),
    (r.fn.load = function (a, b, c) {
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = pb(a.slice(h))), (a = a.slice(0, h))),
        r.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          r
            .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
            .done(function (a) {
              (f = arguments),
                g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(this, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
    r.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        r.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (r.expr.pseudos.animated = function (a) {
      return r.grep(r.timers, function (b) {
        return a === b.elem;
      }).length;
    }),
    (r.offset = {
      setOffset: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = r.css(a, "top")),
          (i = r.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      },
    }),
    r.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                r.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d,
          e,
          f = this[0];
        if (f)
          return f.getClientRects().length
            ? ((d = f.getBoundingClientRect()),
              (b = f.ownerDocument),
              (c = b.documentElement),
              (e = b.defaultView),
              {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft,
              })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === r.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                B(a[0], "html") || (d = a.offset()),
                (d = {
                  top: d.top + r.css(a[0], "borderTopWidth", !0),
                  left: d.left + r.css(a[0], "borderLeftWidth", !0),
                })),
            {
              top: b.top - d.top - r.css(c, "marginTop", !0),
              left: b.left - d.left - r.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && "static" === r.css(a, "position")) a = a.offsetParent;
          return a || ra;
        });
      },
    }),
    r.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
          return T(
            this,
            function (a, d, e) {
              var f;
              return (
                r.isWindow(a)
                  ? (f = a)
                  : 9 === a.nodeType && (f = a.defaultView),
                void 0 === e
                  ? f
                    ? f[b]
                    : a[d]
                  : void (f
                      ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                      : (a[d] = e))
              );
            },
            a,
            d,
            arguments.length
          );
        };
      }
    ),
    r.each(["top", "left"], function (a, b) {
      r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
        if (c)
          return (c = Oa(a, b)), Ma.test(c) ? r(a).position()[b] + "px" : c;
      });
    }),
    r.each({ Height: "height", Width: "width" }, function (a, b) {
      r.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          r.fn[d] = function (e, f) {
            var g = arguments.length && (c || "boolean" != typeof e),
              h = c || (e === !0 || f === !0 ? "margin" : "border");
            return T(
              this,
              function (b, c, e) {
                var f;
                return r.isWindow(b)
                  ? 0 === d.indexOf("outer")
                    ? b["inner" + a]
                    : b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((f = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      f["scroll" + a],
                      b.body["offset" + a],
                      f["offset" + a],
                      f["client" + a]
                    ))
                  : void 0 === e
                  ? r.css(b, c, h)
                  : r.style(b, c, e, h);
              },
              b,
              g ? e : void 0,
              g
            );
          };
        }
      );
    }),
    r.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (r.holdReady = function (a) {
      a ? r.readyWait++ : r.ready(!0);
    }),
    (r.isArray = Array.isArray),
    (r.parseJSON = JSON.parse),
    (r.nodeName = B),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return r;
      });
  var Vb = a.jQuery,
    Wb = a.$;
  return (
    (r.noConflict = function (b) {
      return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
    }),
    b || (a.jQuery = a.$ = r),
    r
  );
});
(function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
  (t.ui = t.ui || {}), (t.ui.version = "1.12.1");
  var e = 0,
    i = Array.prototype.slice;
  (t.cleanData = (function (e) {
    return function (i) {
      var s, n, o;
      for (o = 0; null != (n = i[o]); o++)
        try {
          (s = t._data(n, "events")),
            s && s.remove && t(n).triggerHandler("remove");
        } catch (a) {}
      e(i);
    };
  })(t.cleanData)),
    (t.widget = function (e, i, s) {
      var n,
        o,
        a,
        r = {},
        l = e.split(".")[0];
      e = e.split(".")[1];
      var h = l + "-" + e;
      return (
        s || ((s = i), (i = t.Widget)),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        (t.expr[":"][h.toLowerCase()] = function (e) {
          return !!t.data(e, h);
        }),
        (t[l] = t[l] || {}),
        (n = t[l][e]),
        (o = t[l][e] =
          function (t, e) {
            return this._createWidget
              ? (arguments.length && this._createWidget(t, e), void 0)
              : new o(t, e);
          }),
        t.extend(o, n, {
          version: s.version,
          _proto: t.extend({}, s),
          _childConstructors: [],
        }),
        (a = new i()),
        (a.options = t.widget.extend({}, a.options)),
        t.each(s, function (e, s) {
          return t.isFunction(s)
            ? ((r[e] = (function () {
                function t() {
                  return i.prototype[e].apply(this, arguments);
                }
                function n(t) {
                  return i.prototype[e].apply(this, t);
                }
                return function () {
                  var e,
                    i = this._super,
                    o = this._superApply;
                  return (
                    (this._super = t),
                    (this._superApply = n),
                    (e = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = o),
                    e
                  );
                };
              })()),
              void 0)
            : ((r[e] = s), void 0);
        }),
        (o.prototype = t.widget.extend(
          a,
          { widgetEventPrefix: n ? a.widgetEventPrefix || e : e },
          r,
          { constructor: o, namespace: l, widgetName: e, widgetFullName: h }
        )),
        n
          ? (t.each(n._childConstructors, function (e, i) {
              var s = i.prototype;
              t.widget(s.namespace + "." + s.widgetName, o, i._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
      );
    }),
    (t.widget.extend = function (e) {
      for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
        for (s in o[a])
          (n = o[a][s]),
            o[a].hasOwnProperty(s) &&
              void 0 !== n &&
              (e[s] = t.isPlainObject(n)
                ? t.isPlainObject(e[s])
                  ? t.widget.extend({}, e[s], n)
                  : t.widget.extend({}, n)
                : n);
      return e;
    }),
    (t.widget.bridge = function (e, s) {
      var n = s.prototype.widgetFullName || e;
      t.fn[e] = function (o) {
        var a = "string" == typeof o,
          r = i.call(arguments, 1),
          l = this;
        return (
          a
            ? this.length || "instance" !== o
              ? this.each(function () {
                  var i,
                    s = t.data(this, n);
                  return "instance" === o
                    ? ((l = s), !1)
                    : s
                    ? t.isFunction(s[o]) && "_" !== o.charAt(0)
                      ? ((i = s[o].apply(s, r)),
                        i !== s && void 0 !== i
                          ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                          : void 0)
                      : t.error(
                          "no such method '" +
                            o +
                            "' for " +
                            e +
                            " widget instance"
                        )
                    : t.error(
                        "cannot call methods on " +
                          e +
                          " prior to initialization; " +
                          "attempted to call method '" +
                          o +
                          "'"
                      );
                })
              : (l = void 0)
            : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))),
              this.each(function () {
                var e = t.data(this, n);
                e
                  ? (e.option(o || {}), e._init && e._init())
                  : t.data(this, n, new s(o, this));
              })),
          l
        );
      };
    }),
    (t.Widget = function () {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (i, s) {
        (s = t(s || this.defaultElement || this)[0]),
          (this.element = t(s)),
          (this.uuid = e++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          (this.classesElementLookup = {}),
          s !== this &&
            (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === s && this.destroy();
              },
            }),
            (this.document = t(s.style ? s.ownerDocument : s.document || s)),
            (this.window = t(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = t.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            i
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this;
        this._destroy(),
          t.each(this.classesElementLookup, function (t, i) {
            e._removeClass(i, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: t.noop,
      widget: function () {
        return this.element;
      },
      option: function (e, i) {
        var s,
          n,
          o,
          a = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e)
          if (((a = {}), (s = e.split(".")), (e = s.shift()), s.length)) {
            for (
              n = a[e] = t.widget.extend({}, this.options[e]), o = 0;
              s.length - 1 > o;
              o++
            )
              (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
            if (((e = s.pop()), 1 === arguments.length))
              return void 0 === n[e] ? null : n[e];
            n[e] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[e] ? null : this.options[e];
            a[e] = i;
          }
        return this._setOptions(a), this;
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (e) {
        var i, s, n;
        for (i in e)
          (n = this.classesElementLookup[i]),
            e[i] !== this.options.classes[i] &&
              n &&
              n.length &&
              ((s = t(n.get())),
              this._removeClass(n, i),
              s.addClass(
                this._classes({ element: s, keys: i, classes: e, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (e) {
        function i(i, o) {
          var a, r;
          for (r = 0; i.length > r; r++)
            (a = n.classesElementLookup[i[r]] || t()),
              (a = e.add
                ? t(t.unique(a.get().concat(e.element.get())))
                : t(a.not(e.element).get())),
              (n.classesElementLookup[i[r]] = a),
              s.push(i[r]),
              o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
        var s = [],
          n = this;
        return (
          (e = t.extend(
            { element: this.element, classes: this.options.classes || {} },
            e
          )),
          this._on(e.element, { remove: "_untrackClassesElement" }),
          e.keys && i(e.keys.match(/\S+/g) || [], !0),
          e.extra && i(e.extra.match(/\S+/g) || []),
          s.join(" ")
        );
      },
      _untrackClassesElement: function (e) {
        var i = this;
        t.each(i.classesElementLookup, function (s, n) {
          -1 !== t.inArray(e.target, n) &&
            (i.classesElementLookup[s] = t(n.not(e.target).get()));
        });
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        s = "boolean" == typeof s ? s : i;
        var n = "string" == typeof t || null === t,
          o = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: s,
          };
        return o.element.toggleClass(this._classes(o), s), this;
      },
      _on: function (e, i, s) {
        var n,
          o = this;
        "boolean" != typeof e && ((s = i), (i = e), (e = !1)),
          s
            ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          t.each(s, function (s, a) {
            function r() {
              return e ||
                (o.options.disabled !== !0 &&
                  !t(this).hasClass("ui-state-disabled"))
                ? ("string" == typeof a ? o[a] : a).apply(o, arguments)
                : void 0;
            }
            "string" != typeof a &&
              (r.guid = a.guid = a.guid || r.guid || t.guid++);
            var l = s.match(/^([\w:-]*)\s*(.*)$/),
              h = l[1] + o.eventNamespace,
              c = l[2];
            c ? n.on(h, c, r) : i.on(h, r);
          });
      },
      _off: function (e, i) {
        (i =
          (i || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          e.off(i).off(i),
          (this.bindings = t(this.bindings.not(e).get())),
          (this.focusable = t(this.focusable.not(e).get())),
          (this.hoverable = t(this.hoverable.not(e).get()));
      },
      _delay: function (t, e) {
        function i() {
          return ("string" == typeof t ? s[t] : t).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, e || 0);
      },
      _hoverable: function (e) {
        (this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function (e) {
              this._addClass(t(e.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (e) {
              this._removeClass(t(e.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (e) {
        (this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function (e) {
              this._addClass(t(e.currentTarget), null, "ui-state-focus");
            },
            focusout: function (e) {
              this._removeClass(t(e.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (e, i, s) {
        var n,
          o,
          a = this.options[e];
        if (
          ((s = s || {}),
          (i = t.Event(i)),
          (i.type = (
            e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
          ).toLowerCase()),
          (i.target = this.element[0]),
          (o = i.originalEvent))
        )
          for (n in o) n in i || (i[n] = o[n]);
        return (
          this.element.trigger(i, s),
          !(
            (t.isFunction(a) &&
              a.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
      t.Widget.prototype["_" + e] = function (s, n, o) {
        "string" == typeof n && (n = { effect: n });
        var a,
          r = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : e;
        (n = n || {}),
          "number" == typeof n && (n = { duration: n }),
          (a = !t.isEmptyObject(n)),
          (n.complete = o),
          n.delay && s.delay(n.delay),
          a && t.effects && t.effects.effect[r]
            ? s[e](n)
            : r !== e && s[r]
            ? s[r](n.duration, n.easing, o)
            : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i();
              });
      };
    }),
    t.widget,
    t.extend(t.expr[":"], {
      data: t.expr.createPseudo
        ? t.expr.createPseudo(function (e) {
            return function (i) {
              return !!t.data(i, e);
            };
          })
        : function (e, i, s) {
            return !!t.data(e, s[3]);
          },
    }),
    (t.fn.scrollParent = function (e) {
      var i = this.css("position"),
        s = "absolute" === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents()
          .filter(function () {
            var e = t(this);
            return s && "static" === e.css("position")
              ? !1
              : n.test(
                  e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")
                );
          })
          .eq(0);
      return "fixed" !== i && o.length
        ? o
        : t(this[0].ownerDocument || document);
    }),
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var s = !1;
  t(document).on("mouseup", function () {
    s = !1;
  }),
    t.widget("ui.mouse", {
      version: "1.12.1",
      options: {
        cancel: "input, textarea, button, select, option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var e = this;
        this.element
          .on("mousedown." + this.widgetName, function (t) {
            return e._mouseDown(t);
          })
          .on("click." + this.widgetName, function (i) {
            return !0 === t.data(i.target, e.widgetName + ".preventClickEvent")
              ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.off("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .off("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (e) {
        if (!s) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(e),
            (this._mouseDownEvent = e);
          var i = this,
            n = 1 === e.which,
            o =
              "string" == typeof this.options.cancel && e.target.nodeName
                ? t(e.target).closest(this.options.cancel).length
                : !1;
          return n && !o && this._mouseCapture(e)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = this._mouseStart(e) !== !1),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    t.data(e.target, this.widgetName + ".preventClickEvent") &&
                    t.removeData(
                      e.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                  }),
                  this.document
                    .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (s = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (
            t.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !e.button
          )
            return this._mouseUp(e);
          if (!e.which)
            if (
              e.originalEvent.altKey ||
              e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(e);
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, e) !== !1),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (e) {
        this.document
          .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
          .off("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target &&
              t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
          this._mouseDelayTimer &&
            (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (s = !1),
          e.preventDefault();
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    (t.ui.plugin = {
      add: function (e, i, s) {
        var n,
          o = t.ui[e].prototype;
        for (n in s)
          (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([i, s[n]]);
      },
      call: function (t, e, i, s) {
        var n,
          o = t.plugins[e];
        if (
          o &&
          (s ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (n = 0; o.length > n; n++)
            t.options[o[n][0]] && o[n][1].apply(t.element, i);
      },
    }),
    (t.ui.safeActiveElement = function (t) {
      var e;
      try {
        e = t.activeElement;
      } catch (i) {
        e = t.body;
      }
      return e || (e = t.body), e.nodeName || (e = t.body), e;
    }),
    (t.ui.safeBlur = function (e) {
      e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
    }),
    t.widget("ui.draggable", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null,
      },
      _create: function () {
        "original" === this.options.helper && this._setPositionRelative(),
          this.options.addClasses && this._addClass("ui-draggable"),
          this._setHandleClassName(),
          this._mouseInit();
      },
      _setOption: function (t, e) {
        this._super(t, e),
          "handle" === t &&
            (this._removeHandleClassName(), this._setHandleClassName());
      },
      _destroy: function () {
        return (this.helper || this.element).is(".ui-draggable-dragging")
          ? ((this.destroyOnClear = !0), void 0)
          : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
      },
      _mouseCapture: function (e) {
        var i = this.options;
        return this.helper ||
          i.disabled ||
          t(e.target).closest(".ui-resizable-handle").length > 0
          ? !1
          : ((this.handle = this._getHandle(e)),
            this.handle
              ? (this._blurActiveElement(e),
                this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix),
                !0)
              : !1);
      },
      _blockFrames: function (e) {
        this.iframeBlocks = this.document.find(e).map(function () {
          var e = t(this);
          return t("<div>")
            .css("position", "absolute")
            .appendTo(e.parent())
            .outerWidth(e.outerWidth())
            .outerHeight(e.outerHeight())
            .offset(e.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _blurActiveElement: function (e) {
        var i = t.ui.safeActiveElement(this.document[0]),
          s = t(e.target);
        s.closest(i).length || t.ui.safeBlur(i);
      },
      _mouseStart: function (e) {
        var i = this.options;
        return (
          (this.helper = this._createHelper(e)),
          this._addClass(this.helper, "ui-draggable-dragging"),
          this._cacheHelperProportions(),
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent(!0)),
          (this.offsetParent = this.helper.offsetParent()),
          (this.hasFixedAncestor =
            this.helper.parents().filter(function () {
              return "fixed" === t(this).css("position");
            }).length > 0),
          (this.positionAbs = this.element.offset()),
          this._refreshOffsets(e),
          (this.originalPosition = this.position =
            this._generatePosition(e, !1)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
          this._setContainment(),
          this._trigger("start", e) === !1
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              t.ui.ddmanager &&
                !i.dropBehaviour &&
                t.ui.ddmanager.prepareOffsets(this, e),
              this._mouseDrag(e, !0),
              t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
              !0)
        );
      },
      _refreshOffsets: function (t) {
        (this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
          (this.offset.click = {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top,
          });
      },
      _mouseDrag: function (e, i) {
        if (
          (this.hasFixedAncestor &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(e, !0)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !i)
        ) {
          var s = this._uiHash();
          if (this._trigger("drag", e, s) === !1)
            return this._mouseUp(new t.Event("mouseup", e)), !1;
          this.position = s.position;
        }
        return (
          (this.helper[0].style.left = this.position.left + "px"),
          (this.helper[0].style.top = this.position.top + "px"),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          !1
        );
      },
      _mouseStop: function (e) {
        var i = this,
          s = !1;
        return (
          t.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (s = t.ui.ddmanager.drop(this, e)),
          this.dropped && ((s = this.dropped), (this.dropped = !1)),
          ("invalid" === this.options.revert && !s) ||
          ("valid" === this.options.revert && s) ||
          this.options.revert === !0 ||
          (t.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, s))
            ? t(this.helper).animate(
                this.originalPosition,
                parseInt(this.options.revertDuration, 10),
                function () {
                  i._trigger("stop", e) !== !1 && i._clear();
                }
              )
            : this._trigger("stop", e) !== !1 && this._clear(),
          !1
        );
      },
      _mouseUp: function (e) {
        return (
          this._unblockFrames(),
          t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
          this.handleElement.is(e.target) && this.element.trigger("focus"),
          t.ui.mouse.prototype._mouseUp.call(this, e)
        );
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] }))
            : this._clear(),
          this
        );
      },
      _getHandle: function (e) {
        return this.options.handle
          ? !!t(e.target).closest(this.element.find(this.options.handle)).length
          : !0;
      },
      _setHandleClassName: function () {
        (this.handleElement = this.options.handle
          ? this.element.find(this.options.handle)
          : this.element),
          this._addClass(this.handleElement, "ui-draggable-handle");
      },
      _removeHandleClassName: function () {
        this._removeClass(this.handleElement, "ui-draggable-handle");
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper),
          n = s
            ? t(i.helper.apply(this.element[0], [e]))
            : "clone" === i.helper
            ? this.element.clone().removeAttr("id")
            : this.element;
        return (
          n.parents("body").length ||
            n.appendTo(
              "parent" === i.appendTo ? this.element[0].parentNode : i.appendTo
            ),
          s && n[0] === this.element[0] && this._setPositionRelative(),
          n[0] === this.element[0] ||
            /(fixed|absolute)/.test(n.css("position")) ||
            n.css("position", "absolute"),
          n
        );
      },
      _setPositionRelative: function () {
        /^(?:r|a|f)/.test(this.element.css("position")) ||
          (this.element[0].style.position = "relative");
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          "left" in e && (this.offset.click.left = e.left + this.margins.left),
          "right" in e &&
            (this.offset.click.left =
              this.helperProportions.width - e.right + this.margins.left),
          "top" in e && (this.offset.click.top = e.top + this.margins.top),
          "bottom" in e &&
            (this.offset.click.top =
              this.helperProportions.height - e.bottom + this.margins.top);
      },
      _isRootNode: function (t) {
        return /(html|body)/i.test(t.tagName) || t === this.document[0];
      },
      _getParentOffset: function () {
        var e = this.offsetParent.offset(),
          i = this.document[0];
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== i &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()),
            (e.top += this.scrollParent.scrollTop())),
          this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
          {
            top:
              e.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              e.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            t.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollTop()),
          left:
            t.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            (e ? 0 : this.scrollParent.scrollLeft()),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var e,
          i,
          s,
          n = this.options,
          o = this.document[0];
        return (
          (this.relativeContainer = null),
          n.containment
            ? "window" === n.containment
              ? ((this.containment = [
                  t(window).scrollLeft() -
                    this.offset.relative.left -
                    this.offset.parent.left,
                  t(window).scrollTop() -
                    this.offset.relative.top -
                    this.offset.parent.top,
                  t(window).scrollLeft() +
                    t(window).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  t(window).scrollTop() +
                    (t(window).height() || o.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ]),
                void 0)
              : "document" === n.containment
              ? ((this.containment = [
                  0,
                  0,
                  t(o).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  (t(o).height() || o.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ]),
                void 0)
              : n.containment.constructor === Array
              ? ((this.containment = n.containment), void 0)
              : ("parent" === n.containment &&
                  (n.containment = this.helper[0].parentNode),
                (i = t(n.containment)),
                (s = i[0]),
                s &&
                  ((e = /(scroll|auto)/.test(i.css("overflow"))),
                  (this.containment = [
                    (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                      (parseInt(i.css("paddingLeft"), 10) || 0),
                    (parseInt(i.css("borderTopWidth"), 10) || 0) +
                      (parseInt(i.css("paddingTop"), 10) || 0),
                    (e
                      ? Math.max(s.scrollWidth, s.offsetWidth)
                      : s.offsetWidth) -
                      (parseInt(i.css("borderRightWidth"), 10) || 0) -
                      (parseInt(i.css("paddingRight"), 10) || 0) -
                      this.helperProportions.width -
                      this.margins.left -
                      this.margins.right,
                    (e
                      ? Math.max(s.scrollHeight, s.offsetHeight)
                      : s.offsetHeight) -
                      (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                      (parseInt(i.css("paddingBottom"), 10) || 0) -
                      this.helperProportions.height -
                      this.margins.top -
                      this.margins.bottom,
                  ]),
                  (this.relativeContainer = i)),
                void 0)
            : ((this.containment = null), void 0)
        );
      },
      _convertPositionTo: function (t, e) {
        e || (e = this.position);
        var i = "absolute" === t ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.top
              : s
              ? 0
              : this.offset.scroll.top) *
              i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.left
              : s
              ? 0
              : this.offset.scroll.left) *
              i,
        };
      },
      _generatePosition: function (t, e) {
        var i,
          s,
          n,
          o,
          a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          l = t.pageX,
          h = t.pageY;
        return (
          (r && this.offset.scroll) ||
            (this.offset.scroll = {
              top: this.scrollParent.scrollTop(),
              left: this.scrollParent.scrollLeft(),
            }),
          e &&
            (this.containment &&
              (this.relativeContainer
                ? ((s = this.relativeContainer.offset()),
                  (i = [
                    this.containment[0] + s.left,
                    this.containment[1] + s.top,
                    this.containment[2] + s.left,
                    this.containment[3] + s.top,
                  ]))
                : (i = this.containment),
              t.pageX - this.offset.click.left < i[0] &&
                (l = i[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < i[1] &&
                (h = i[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > i[2] &&
                (l = i[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > i[3] &&
                (h = i[3] + this.offset.click.top)),
            a.grid &&
              ((n = a.grid[1]
                ? this.originalPageY +
                  Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1]
                : this.originalPageY),
              (h = i
                ? n - this.offset.click.top >= i[1] ||
                  n - this.offset.click.top > i[3]
                  ? n
                  : n - this.offset.click.top >= i[1]
                  ? n - a.grid[1]
                  : n + a.grid[1]
                : n),
              (o = a.grid[0]
                ? this.originalPageX +
                  Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0]
                : this.originalPageX),
              (l = i
                ? o - this.offset.click.left >= i[0] ||
                  o - this.offset.click.left > i[2]
                  ? o
                  : o - this.offset.click.left >= i[0]
                  ? o - a.grid[0]
                  : o + a.grid[0]
                : o)),
            "y" === a.axis && (l = this.originalPageX),
            "x" === a.axis && (h = this.originalPageY)),
          {
            top:
              h -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.top
                : r
                ? 0
                : this.offset.scroll.top),
            left:
              l -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.left
                : r
                ? 0
                : this.offset.scroll.left),
          }
        );
      },
      _clear: function () {
        this._removeClass(this.helper, "ui-draggable-dragging"),
          this.helper[0] === this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1),
          this.destroyOnClear && this.destroy();
      },
      _trigger: function (e, i, s) {
        return (
          (s = s || this._uiHash()),
          t.ui.plugin.call(this, e, [i, s, this], !0),
          /^(drag|start|stop)/.test(e) &&
            ((this.positionAbs = this._convertPositionTo("absolute")),
            (s.offset = this.positionAbs)),
          t.Widget.prototype._trigger.call(this, e, i, s)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
    t.ui.plugin.add("draggable", "connectToSortable", {
      start: function (e, i, s) {
        var n = t.extend({}, i, { item: s.element });
        (s.sortables = []),
          t(s.options.connectToSortable).each(function () {
            var i = t(this).sortable("instance");
            i &&
              !i.options.disabled &&
              (s.sortables.push(i),
              i.refreshPositions(),
              i._trigger("activate", e, n));
          });
      },
      stop: function (e, i, s) {
        var n = t.extend({}, i, { item: s.element });
        (s.cancelHelperRemoval = !1),
          t.each(s.sortables, function () {
            var t = this;
            t.isOver
              ? ((t.isOver = 0),
                (s.cancelHelperRemoval = !0),
                (t.cancelHelperRemoval = !1),
                (t._storedCSS = {
                  position: t.placeholder.css("position"),
                  top: t.placeholder.css("top"),
                  left: t.placeholder.css("left"),
                }),
                t._mouseStop(e),
                (t.options.helper = t.options._helper))
              : ((t.cancelHelperRemoval = !0), t._trigger("deactivate", e, n));
          });
      },
      drag: function (e, i, s) {
        t.each(s.sortables, function () {
          var n = !1,
            o = this;
          (o.positionAbs = s.positionAbs),
            (o.helperProportions = s.helperProportions),
            (o.offset.click = s.offset.click),
            o._intersectsWith(o.containerCache) &&
              ((n = !0),
              t.each(s.sortables, function () {
                return (
                  (this.positionAbs = s.positionAbs),
                  (this.helperProportions = s.helperProportions),
                  (this.offset.click = s.offset.click),
                  this !== o &&
                    this._intersectsWith(this.containerCache) &&
                    t.contains(o.element[0], this.element[0]) &&
                    (n = !1),
                  n
                );
              })),
            n
              ? (o.isOver ||
                  ((o.isOver = 1),
                  (s._parent = i.helper.parent()),
                  (o.currentItem = i.helper
                    .appendTo(o.element)
                    .data("ui-sortable-item", !0)),
                  (o.options._helper = o.options.helper),
                  (o.options.helper = function () {
                    return i.helper[0];
                  }),
                  (e.target = o.currentItem[0]),
                  o._mouseCapture(e, !0),
                  o._mouseStart(e, !0, !0),
                  (o.offset.click.top = s.offset.click.top),
                  (o.offset.click.left = s.offset.click.left),
                  (o.offset.parent.left -=
                    s.offset.parent.left - o.offset.parent.left),
                  (o.offset.parent.top -=
                    s.offset.parent.top - o.offset.parent.top),
                  s._trigger("toSortable", e),
                  (s.dropped = o.element),
                  t.each(s.sortables, function () {
                    this.refreshPositions();
                  }),
                  (s.currentItem = s.element),
                  (o.fromOutside = s)),
                o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
              : o.isOver &&
                ((o.isOver = 0),
                (o.cancelHelperRemoval = !0),
                (o.options._revert = o.options.revert),
                (o.options.revert = !1),
                o._trigger("out", e, o._uiHash(o)),
                o._mouseStop(e, !0),
                (o.options.revert = o.options._revert),
                (o.options.helper = o.options._helper),
                o.placeholder && o.placeholder.remove(),
                i.helper.appendTo(s._parent),
                s._refreshOffsets(e),
                (i.position = s._generatePosition(e, !0)),
                s._trigger("fromSortable", e),
                (s.dropped = !1),
                t.each(s.sortables, function () {
                  this.refreshPositions();
                }));
        });
      },
    }),
    t.ui.plugin.add("draggable", "cursor", {
      start: function (e, i, s) {
        var n = t("body"),
          o = s.options;
        n.css("cursor") && (o._cursor = n.css("cursor")),
          n.css("cursor", o.cursor);
      },
      stop: function (e, i, s) {
        var n = s.options;
        n._cursor && t("body").css("cursor", n._cursor);
      },
    }),
    t.ui.plugin.add("draggable", "opacity", {
      start: function (e, i, s) {
        var n = t(i.helper),
          o = s.options;
        n.css("opacity") && (o._opacity = n.css("opacity")),
          n.css("opacity", o.opacity);
      },
      stop: function (e, i, s) {
        var n = s.options;
        n._opacity && t(i.helper).css("opacity", n._opacity);
      },
    }),
    t.ui.plugin.add("draggable", "scroll", {
      start: function (t, e, i) {
        i.scrollParentNotHidden ||
          (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
          i.scrollParentNotHidden[0] !== i.document[0] &&
            "HTML" !== i.scrollParentNotHidden[0].tagName &&
            (i.overflowOffset = i.scrollParentNotHidden.offset());
      },
      drag: function (e, i, s) {
        var n = s.options,
          o = !1,
          a = s.scrollParentNotHidden[0],
          r = s.document[0];
        a !== r && "HTML" !== a.tagName
          ? ((n.axis && "x" === n.axis) ||
              (s.overflowOffset.top + a.offsetHeight - e.pageY <
              n.scrollSensitivity
                ? (a.scrollTop = o = a.scrollTop + n.scrollSpeed)
                : e.pageY - s.overflowOffset.top < n.scrollSensitivity &&
                  (a.scrollTop = o = a.scrollTop - n.scrollSpeed)),
            (n.axis && "y" === n.axis) ||
              (s.overflowOffset.left + a.offsetWidth - e.pageX <
              n.scrollSensitivity
                ? (a.scrollLeft = o = a.scrollLeft + n.scrollSpeed)
                : e.pageX - s.overflowOffset.left < n.scrollSensitivity &&
                  (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed)))
          : ((n.axis && "x" === n.axis) ||
              (e.pageY - t(r).scrollTop() < n.scrollSensitivity
                ? (o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed))
                : t(window).height() - (e.pageY - t(r).scrollTop()) <
                    n.scrollSensitivity &&
                  (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))),
            (n.axis && "y" === n.axis) ||
              (e.pageX - t(r).scrollLeft() < n.scrollSensitivity
                ? (o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed))
                : t(window).width() - (e.pageX - t(r).scrollLeft()) <
                    n.scrollSensitivity &&
                  (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))),
          o !== !1 &&
            t.ui.ddmanager &&
            !n.dropBehaviour &&
            t.ui.ddmanager.prepareOffsets(s, e);
      },
    }),
    t.ui.plugin.add("draggable", "snap", {
      start: function (e, i, s) {
        var n = s.options;
        (s.snapElements = []),
          t(
            n.snap.constructor !== String
              ? n.snap.items || ":data(ui-draggable)"
              : n.snap
          ).each(function () {
            var e = t(this),
              i = e.offset();
            this !== s.element[0] &&
              s.snapElements.push({
                item: this,
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: i.top,
                left: i.left,
              });
          });
      },
      drag: function (e, i, s) {
        var n,
          o,
          a,
          r,
          l,
          h,
          c,
          u,
          d,
          p,
          f = s.options,
          g = f.snapTolerance,
          m = i.offset.left,
          _ = m + s.helperProportions.width,
          v = i.offset.top,
          b = v + s.helperProportions.height;
        for (d = s.snapElements.length - 1; d >= 0; d--)
          (l = s.snapElements[d].left - s.margins.left),
            (h = l + s.snapElements[d].width),
            (c = s.snapElements[d].top - s.margins.top),
            (u = c + s.snapElements[d].height),
            l - g > _ ||
            m > h + g ||
            c - g > b ||
            v > u + g ||
            !t.contains(
              s.snapElements[d].item.ownerDocument,
              s.snapElements[d].item
            )
              ? (s.snapElements[d].snapping &&
                  s.options.snap.release &&
                  s.options.snap.release.call(
                    s.element,
                    e,
                    t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })
                  ),
                (s.snapElements[d].snapping = !1))
              : ("inner" !== f.snapMode &&
                  ((n = g >= Math.abs(c - b)),
                  (o = g >= Math.abs(u - v)),
                  (a = g >= Math.abs(l - _)),
                  (r = g >= Math.abs(h - m)),
                  n &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: c - s.helperProportions.height,
                      left: 0,
                    }).top),
                  o &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: u,
                      left: 0,
                    }).top),
                  a &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: l - s.helperProportions.width,
                    }).left),
                  r &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: h,
                    }).left)),
                (p = n || o || a || r),
                "outer" !== f.snapMode &&
                  ((n = g >= Math.abs(c - v)),
                  (o = g >= Math.abs(u - b)),
                  (a = g >= Math.abs(l - m)),
                  (r = g >= Math.abs(h - _)),
                  n &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: c,
                      left: 0,
                    }).top),
                  o &&
                    (i.position.top = s._convertPositionTo("relative", {
                      top: u - s.helperProportions.height,
                      left: 0,
                    }).top),
                  a &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: l,
                    }).left),
                  r &&
                    (i.position.left = s._convertPositionTo("relative", {
                      top: 0,
                      left: h - s.helperProportions.width,
                    }).left)),
                !s.snapElements[d].snapping &&
                  (n || o || a || r || p) &&
                  s.options.snap.snap &&
                  s.options.snap.snap.call(
                    s.element,
                    e,
                    t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })
                  ),
                (s.snapElements[d].snapping = n || o || a || r || p));
      },
    }),
    t.ui.plugin.add("draggable", "stack", {
      start: function (e, i, s) {
        var n,
          o = s.options,
          a = t.makeArray(t(o.stack)).sort(function (e, i) {
            return (
              (parseInt(t(e).css("zIndex"), 10) || 0) -
              (parseInt(t(i).css("zIndex"), 10) || 0)
            );
          });
        a.length &&
          ((n = parseInt(t(a[0]).css("zIndex"), 10) || 0),
          t(a).each(function (e) {
            t(this).css("zIndex", n + e);
          }),
          this.css("zIndex", n + a.length));
      },
    }),
    t.ui.plugin.add("draggable", "zIndex", {
      start: function (e, i, s) {
        var n = t(i.helper),
          o = s.options;
        n.css("zIndex") && (o._zIndex = n.css("zIndex")),
          n.css("zIndex", o.zIndex);
      },
      stop: function (e, i, s) {
        var n = s.options;
        n._zIndex && t(i.helper).css("zIndex", n._zIndex);
      },
    }),
    t.ui.draggable,
    t.widget("ui.droppable", {
      version: "1.12.1",
      widgetEventPrefix: "drop",
      options: {
        accept: "*",
        addClasses: !0,
        greedy: !1,
        scope: "default",
        tolerance: "intersect",
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null,
      },
      _create: function () {
        var e,
          i = this.options,
          s = i.accept;
        (this.isover = !1),
          (this.isout = !0),
          (this.accept = t.isFunction(s)
            ? s
            : function (t) {
                return t.is(s);
              }),
          (this.proportions = function () {
            return arguments.length
              ? ((e = arguments[0]), void 0)
              : e
              ? e
              : (e = {
                  width: this.element[0].offsetWidth,
                  height: this.element[0].offsetHeight,
                });
          }),
          this._addToManager(i.scope),
          i.addClasses && this._addClass("ui-droppable");
      },
      _addToManager: function (e) {
        (t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []),
          t.ui.ddmanager.droppables[e].push(this);
      },
      _splice: function (t) {
        for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
      },
      _destroy: function () {
        var e = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(e);
      },
      _setOption: function (e, i) {
        if ("accept" === e)
          this.accept = t.isFunction(i)
            ? i
            : function (t) {
                return t.is(i);
              };
        else if ("scope" === e) {
          var s = t.ui.ddmanager.droppables[this.options.scope];
          this._splice(s), this._addToManager(i);
        }
        this._super(e, i);
      },
      _activate: function (e) {
        var i = t.ui.ddmanager.current;
        this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
      },
      _deactivate: function (e) {
        var i = t.ui.ddmanager.current;
        this._removeActiveClass(),
          i && this._trigger("deactivate", e, this.ui(i));
      },
      _over: function (e) {
        var i = t.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
      },
      _out: function (e) {
        var i = t.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
      },
      _drop: function (e, i) {
        var s = i || t.ui.ddmanager.current,
          o = !1;
        return s && (s.currentItem || s.element)[0] !== this.element[0]
          ? (this.element
              .find(":data(ui-droppable)")
              .not(".ui-draggable-dragging")
              .each(function () {
                var i = t(this).droppable("instance");
                return i.options.greedy &&
                  !i.options.disabled &&
                  i.options.scope === s.options.scope &&
                  i.accept.call(i.element[0], s.currentItem || s.element) &&
                  n(
                    s,
                    t.extend(i, { offset: i.element.offset() }),
                    i.options.tolerance,
                    e
                  )
                  ? ((o = !0), !1)
                  : void 0;
              }),
            o
              ? !1
              : this.accept.call(this.element[0], s.currentItem || s.element)
              ? (this._removeActiveClass(),
                this._removeHoverClass(),
                this._trigger("drop", e, this.ui(s)),
                this.element)
              : !1)
          : !1;
      },
      ui: function (t) {
        return {
          draggable: t.currentItem || t.element,
          helper: t.helper,
          position: t.position,
          offset: t.positionAbs,
        };
      },
      _addHoverClass: function () {
        this._addClass("ui-droppable-hover");
      },
      _removeHoverClass: function () {
        this._removeClass("ui-droppable-hover");
      },
      _addActiveClass: function () {
        this._addClass("ui-droppable-active");
      },
      _removeActiveClass: function () {
        this._removeClass("ui-droppable-active");
      },
    });
  var n = (t.ui.intersect = (function () {
    function t(t, e, i) {
      return t >= e && e + i > t;
    }
    return function (e, i, s, n) {
      if (!i.offset) return !1;
      var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
        a = (e.positionAbs || e.position.absolute).top + e.margins.top,
        r = o + e.helperProportions.width,
        l = a + e.helperProportions.height,
        h = i.offset.left,
        c = i.offset.top,
        u = h + i.proportions().width,
        d = c + i.proportions().height;
      switch (s) {
        case "fit":
          return o >= h && u >= r && a >= c && d >= l;
        case "intersect":
          return (
            o + e.helperProportions.width / 2 > h &&
            u > r - e.helperProportions.width / 2 &&
            a + e.helperProportions.height / 2 > c &&
            d > l - e.helperProportions.height / 2
          );
        case "pointer":
          return (
            t(n.pageY, c, i.proportions().height) &&
            t(n.pageX, h, i.proportions().width)
          );
        case "touch":
          return (
            ((a >= c && d >= a) || (l >= c && d >= l) || (c > a && l > d)) &&
            ((o >= h && u >= o) || (r >= h && u >= r) || (h > o && r > u))
          );
        default:
          return !1;
      }
    };
  })());
  (t.ui.ddmanager = {
    current: null,
    droppables: { default: [] },
    prepareOffsets: function (e, i) {
      var s,
        n,
        o = t.ui.ddmanager.droppables[e.options.scope] || [],
        a = i ? i.type : null,
        r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
      t: for (s = 0; o.length > s; s++)
        if (
          !(
            o[s].options.disabled ||
            (e &&
              !o[s].accept.call(o[s].element[0], e.currentItem || e.element))
          )
        ) {
          for (n = 0; r.length > n; n++)
            if (r[n] === o[s].element[0]) {
              o[s].proportions().height = 0;
              continue t;
            }
          (o[s].visible = "none" !== o[s].element.css("display")),
            o[s].visible &&
              ("mousedown" === a && o[s]._activate.call(o[s], i),
              (o[s].offset = o[s].element.offset()),
              o[s].proportions({
                width: o[s].element[0].offsetWidth,
                height: o[s].element[0].offsetHeight,
              }));
        }
    },
    drop: function (e, i) {
      var s = !1;
      return (
        t.each(
          (t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
          function () {
            this.options &&
              (!this.options.disabled &&
                this.visible &&
                n(e, this, this.options.tolerance, i) &&
                (s = this._drop.call(this, i) || s),
              !this.options.disabled &&
                this.visible &&
                this.accept.call(this.element[0], e.currentItem || e.element) &&
                ((this.isout = !0),
                (this.isover = !1),
                this._deactivate.call(this, i)));
          }
        ),
        s
      );
    },
    dragStart: function (e, i) {
      e.element.parentsUntil("body").on("scroll.droppable", function () {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      });
    },
    drag: function (e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
        t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
          if (!this.options.disabled && !this.greedyChild && this.visible) {
            var s,
              o,
              a,
              r = n(e, this, this.options.tolerance, i),
              l =
                !r && this.isover
                  ? "isout"
                  : r && !this.isover
                  ? "isover"
                  : null;
            l &&
              (this.options.greedy &&
                ((o = this.options.scope),
                (a = this.element
                  .parents(":data(ui-droppable)")
                  .filter(function () {
                    return t(this).droppable("instance").options.scope === o;
                  })),
                a.length &&
                  ((s = t(a[0]).droppable("instance")),
                  (s.greedyChild = "isover" === l))),
              s &&
                "isover" === l &&
                ((s.isover = !1), (s.isout = !0), s._out.call(s, i)),
              (this[l] = !0),
              (this["isout" === l ? "isover" : "isout"] = !1),
              this["isover" === l ? "_over" : "_out"].call(this, i),
              s &&
                "isout" === l &&
                ((s.isout = !1), (s.isover = !0), s._over.call(s, i)));
          }
        });
    },
    dragStop: function (e, i) {
      e.element.parentsUntil("body").off("scroll.droppable"),
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
    },
  }),
    t.uiBackCompat !== !1 &&
      t.widget("ui.droppable", t.ui.droppable, {
        options: { hoverClass: !1, activeClass: !1 },
        _addActiveClass: function () {
          this._super(),
            this.options.activeClass &&
              this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function () {
          this._super(),
            this.options.activeClass &&
              this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function () {
          this._super(),
            this.options.hoverClass &&
              this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function () {
          this._super(),
            this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass);
        },
      }),
    t.ui.droppable;
});
!(function (a) {
  function f(a, b) {
    if (!(a.originalEvent.touches.length > 1)) {
      a.preventDefault();
      var c = a.originalEvent.changedTouches[0],
        d = document.createEvent("MouseEvents");
      d.initMouseEvent(
        b,
        !0,
        !0,
        window,
        1,
        c.screenX,
        c.screenY,
        c.clientX,
        c.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null
      ),
        a.target.dispatchEvent(d);
    }
  }
  if (((a.support.touch = "ontouchend" in document), a.support.touch)) {
    var e,
      b = a.ui.mouse.prototype,
      c = b._mouseInit,
      d = b._mouseDestroy;
    (b._touchStart = function (a) {
      var b = this;
      !e &&
        b._mouseCapture(a.originalEvent.changedTouches[0]) &&
        ((e = !0),
        (b._touchMoved = !1),
        f(a, "mouseover"),
        f(a, "mousemove"),
        f(a, "mousedown"));
    }),
      (b._touchMove = function (a) {
        e && ((this._touchMoved = !0), f(a, "mousemove"));
      }),
      (b._touchEnd = function (a) {
        e &&
          (f(a, "mouseup"),
          f(a, "mouseout"),
          this._touchMoved || f(a, "click"),
          (e = !1));
      }),
      (b._mouseInit = function () {
        var b = this;
        b.element.bind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd"),
        }),
          c.call(b);
      }),
      (b._mouseDestroy = function () {
        var b = this;
        b.element.unbind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd"),
        }),
          d.call(b);
      });
  }
})(jQuery);
!(function (a) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = a();
  else if ("function" == typeof define && define.amd) define([], a);
  else {
    var b;
    (b =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this),
      (b.ProgressBar = a());
  }
})(function () {
  var a;
  return (function b(a, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!a[g]) {
          var i = "function" == typeof require && require;
          if (!h && i) return i(g, !0);
          if (f) return f(g, !0);
          var j = new Error("Cannot find module '" + g + "'");
          throw ((j.code = "MODULE_NOT_FOUND"), j);
        }
        var k = (c[g] = { exports: {} });
        a[g][0].call(
          k.exports,
          function (b) {
            var c = a[g][1][b];
            return e(c ? c : b);
          },
          k,
          k.exports,
          b,
          a,
          c,
          d
        );
      }
      return c[g].exports;
    }
    for (
      var f = "function" == typeof require && require, g = 0;
      g < d.length;
      g++
    )
      e(d[g]);
    return e;
  })(
    {
      1: [
        function (b, c, d) {
          (function () {
            var b = this || Function("return this")(),
              e = (function () {
                "use strict";
                function e() {}
                function f(a, b) {
                  var c;
                  for (c in a) Object.hasOwnProperty.call(a, c) && b(c);
                }
                function g(a, b) {
                  return (
                    f(b, function (c) {
                      a[c] = b[c];
                    }),
                    a
                  );
                }
                function h(a, b) {
                  f(b, function (c) {
                    "undefined" == typeof a[c] && (a[c] = b[c]);
                  });
                }
                function i(a, b, c, d, e, f, g) {
                  var h,
                    i,
                    k,
                    l = f > a ? 0 : (a - f) / e;
                  for (h in b)
                    b.hasOwnProperty(h) &&
                      ((i = g[h]),
                      (k = "function" == typeof i ? i : o[i]),
                      (b[h] = j(c[h], d[h], k, l)));
                  return b;
                }
                function j(a, b, c, d) {
                  return a + (b - a) * c(d);
                }
                function k(a, b) {
                  var c = n.prototype.filter,
                    d = a._filterArgs;
                  f(c, function (e) {
                    "undefined" != typeof c[e][b] && c[e][b].apply(a, d);
                  });
                }
                function l(a, b, c, d, e, f, g, h, j, l, m) {
                  (v = b + c + d),
                    (w = Math.min(m || u(), v)),
                    (x = w >= v),
                    (y = d - (v - w)),
                    a.isPlaying() &&
                      (x
                        ? (j(g, a._attachment, y), a.stop(!0))
                        : ((a._scheduleId = l(a._timeoutHandler, s)),
                          k(a, "beforeTween"),
                          b + c > w
                            ? i(1, e, f, g, 1, 1, h)
                            : i(w, e, f, g, d, b + c, h),
                          k(a, "afterTween"),
                          j(e, a._attachment, y)));
                }
                function m(a, b) {
                  var c = {},
                    d = typeof b;
                  return (
                    "string" === d || "function" === d
                      ? f(a, function (a) {
                          c[a] = b;
                        })
                      : f(a, function (a) {
                          c[a] || (c[a] = b[a] || q);
                        }),
                    c
                  );
                }
                function n(a, b) {
                  (this._currentState = a || {}),
                    (this._configured = !1),
                    (this._scheduleFunction = p),
                    "undefined" != typeof b && this.setConfig(b);
                }
                var o,
                  p,
                  q = "linear",
                  r = 500,
                  s = 1e3 / 60,
                  t = Date.now
                    ? Date.now
                    : function () {
                        return +new Date();
                      },
                  u =
                    "undefined" != typeof SHIFTY_DEBUG_NOW
                      ? SHIFTY_DEBUG_NOW
                      : t;
                p =
                  "undefined" != typeof window
                    ? window.requestAnimationFrame ||
                      window.webkitRequestAnimationFrame ||
                      window.oRequestAnimationFrame ||
                      window.msRequestAnimationFrame ||
                      (window.mozCancelRequestAnimationFrame &&
                        window.mozRequestAnimationFrame) ||
                      setTimeout
                    : setTimeout;
                var v, w, x, y;
                return (
                  (n.prototype.tween = function (a) {
                    return this._isTweening
                      ? this
                      : ((void 0 === a && this._configured) ||
                          this.setConfig(a),
                        (this._timestamp = u()),
                        this._start(this.get(), this._attachment),
                        this.resume());
                  }),
                  (n.prototype.setConfig = function (a) {
                    (a = a || {}),
                      (this._configured = !0),
                      (this._attachment = a.attachment),
                      (this._pausedAtTime = null),
                      (this._scheduleId = null),
                      (this._delay = a.delay || 0),
                      (this._start = a.start || e),
                      (this._step = a.step || e),
                      (this._finish = a.finish || e),
                      (this._duration = a.duration || r),
                      (this._currentState = g({}, a.from) || this.get()),
                      (this._originalState = this.get()),
                      (this._targetState = g({}, a.to) || this.get());
                    var b = this;
                    this._timeoutHandler = function () {
                      l(
                        b,
                        b._timestamp,
                        b._delay,
                        b._duration,
                        b._currentState,
                        b._originalState,
                        b._targetState,
                        b._easing,
                        b._step,
                        b._scheduleFunction
                      );
                    };
                    var c = this._currentState,
                      d = this._targetState;
                    return (
                      h(d, c),
                      (this._easing = m(c, a.easing || q)),
                      (this._filterArgs = [
                        c,
                        this._originalState,
                        d,
                        this._easing,
                      ]),
                      k(this, "tweenCreated"),
                      this
                    );
                  }),
                  (n.prototype.get = function () {
                    return g({}, this._currentState);
                  }),
                  (n.prototype.set = function (a) {
                    this._currentState = a;
                  }),
                  (n.prototype.pause = function () {
                    return (
                      (this._pausedAtTime = u()), (this._isPaused = !0), this
                    );
                  }),
                  (n.prototype.resume = function () {
                    return (
                      this._isPaused &&
                        (this._timestamp += u() - this._pausedAtTime),
                      (this._isPaused = !1),
                      (this._isTweening = !0),
                      this._timeoutHandler(),
                      this
                    );
                  }),
                  (n.prototype.seek = function (a) {
                    a = Math.max(a, 0);
                    var b = u();
                    return this._timestamp + a === 0
                      ? this
                      : ((this._timestamp = b - a),
                        this.isPlaying() ||
                          ((this._isTweening = !0),
                          (this._isPaused = !1),
                          l(
                            this,
                            this._timestamp,
                            this._delay,
                            this._duration,
                            this._currentState,
                            this._originalState,
                            this._targetState,
                            this._easing,
                            this._step,
                            this._scheduleFunction,
                            b
                          ),
                          this.pause()),
                        this);
                  }),
                  (n.prototype.stop = function (a) {
                    return (
                      (this._isTweening = !1),
                      (this._isPaused = !1),
                      (this._timeoutHandler = e),
                      (
                        b.cancelAnimationFrame ||
                        b.webkitCancelAnimationFrame ||
                        b.oCancelAnimationFrame ||
                        b.msCancelAnimationFrame ||
                        b.mozCancelRequestAnimationFrame ||
                        b.clearTimeout
                      )(this._scheduleId),
                      a &&
                        (k(this, "beforeTween"),
                        i(
                          1,
                          this._currentState,
                          this._originalState,
                          this._targetState,
                          1,
                          0,
                          this._easing
                        ),
                        k(this, "afterTween"),
                        k(this, "afterTweenEnd"),
                        this._finish.call(
                          this,
                          this._currentState,
                          this._attachment
                        )),
                      this
                    );
                  }),
                  (n.prototype.isPlaying = function () {
                    return this._isTweening && !this._isPaused;
                  }),
                  (n.prototype.setScheduleFunction = function (a) {
                    this._scheduleFunction = a;
                  }),
                  (n.prototype.dispose = function () {
                    var a;
                    for (a in this) this.hasOwnProperty(a) && delete this[a];
                  }),
                  (n.prototype.filter = {}),
                  (n.prototype.formula = {
                    linear: function (a) {
                      return a;
                    },
                  }),
                  (o = n.prototype.formula),
                  g(n, {
                    now: u,
                    each: f,
                    tweenProps: i,
                    tweenProp: j,
                    applyFilter: k,
                    shallowCopy: g,
                    defaults: h,
                    composeEasingObject: m,
                  }),
                  "function" == typeof SHIFTY_DEBUG_NOW &&
                    (b.timeoutHandler = l),
                  "object" == typeof d
                    ? (c.exports = n)
                    : "function" == typeof a && a.amd
                    ? a(function () {
                        return n;
                      })
                    : "undefined" == typeof b.Tweenable && (b.Tweenable = n),
                  n
                );
              })();
            !(function () {
              e.shallowCopy(e.prototype.formula, {
                easeInQuad: function (a) {
                  return Math.pow(a, 2);
                },
                easeOutQuad: function (a) {
                  return -(Math.pow(a - 1, 2) - 1);
                },
                easeInOutQuad: function (a) {
                  return (a /= 0.5) < 1
                    ? 0.5 * Math.pow(a, 2)
                    : -0.5 * ((a -= 2) * a - 2);
                },
                easeInCubic: function (a) {
                  return Math.pow(a, 3);
                },
                easeOutCubic: function (a) {
                  return Math.pow(a - 1, 3) + 1;
                },
                easeInOutCubic: function (a) {
                  return (a /= 0.5) < 1
                    ? 0.5 * Math.pow(a, 3)
                    : 0.5 * (Math.pow(a - 2, 3) + 2);
                },
                easeInQuart: function (a) {
                  return Math.pow(a, 4);
                },
                easeOutQuart: function (a) {
                  return -(Math.pow(a - 1, 4) - 1);
                },
                easeInOutQuart: function (a) {
                  return (a /= 0.5) < 1
                    ? 0.5 * Math.pow(a, 4)
                    : -0.5 * ((a -= 2) * Math.pow(a, 3) - 2);
                },
                easeInQuint: function (a) {
                  return Math.pow(a, 5);
                },
                easeOutQuint: function (a) {
                  return Math.pow(a - 1, 5) + 1;
                },
                easeInOutQuint: function (a) {
                  return (a /= 0.5) < 1
                    ? 0.5 * Math.pow(a, 5)
                    : 0.5 * (Math.pow(a - 2, 5) + 2);
                },
                easeInSine: function (a) {
                  return -Math.cos(a * (Math.PI / 2)) + 1;
                },
                easeOutSine: function (a) {
                  return Math.sin(a * (Math.PI / 2));
                },
                easeInOutSine: function (a) {
                  return -0.5 * (Math.cos(Math.PI * a) - 1);
                },
                easeInExpo: function (a) {
                  return 0 === a ? 0 : Math.pow(2, 10 * (a - 1));
                },
                easeOutExpo: function (a) {
                  return 1 === a ? 1 : -Math.pow(2, -10 * a) + 1;
                },
                easeInOutExpo: function (a) {
                  return 0 === a
                    ? 0
                    : 1 === a
                    ? 1
                    : (a /= 0.5) < 1
                    ? 0.5 * Math.pow(2, 10 * (a - 1))
                    : 0.5 * (-Math.pow(2, -10 * --a) + 2);
                },
                easeInCirc: function (a) {
                  return -(Math.sqrt(1 - a * a) - 1);
                },
                easeOutCirc: function (a) {
                  return Math.sqrt(1 - Math.pow(a - 1, 2));
                },
                easeInOutCirc: function (a) {
                  return (a /= 0.5) < 1
                    ? -0.5 * (Math.sqrt(1 - a * a) - 1)
                    : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
                },
                easeOutBounce: function (a) {
                  return 1 / 2.75 > a
                    ? 7.5625 * a * a
                    : 2 / 2.75 > a
                    ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                    : 2.5 / 2.75 > a
                    ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                    : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
                },
                easeInBack: function (a) {
                  var b = 1.70158;
                  return a * a * ((b + 1) * a - b);
                },
                easeOutBack: function (a) {
                  var b = 1.70158;
                  return (a -= 1) * a * ((b + 1) * a + b) + 1;
                },
                easeInOutBack: function (a) {
                  var b = 1.70158;
                  return (a /= 0.5) < 1
                    ? 0.5 * (a * a * (((b *= 1.525) + 1) * a - b))
                    : 0.5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
                },
                elastic: function (a) {
                  return (
                    -1 *
                      Math.pow(4, -8 * a) *
                      Math.sin(((6 * a - 1) * (2 * Math.PI)) / 2) +
                    1
                  );
                },
                swingFromTo: function (a) {
                  var b = 1.70158;
                  return (a /= 0.5) < 1
                    ? 0.5 * (a * a * (((b *= 1.525) + 1) * a - b))
                    : 0.5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
                },
                swingFrom: function (a) {
                  var b = 1.70158;
                  return a * a * ((b + 1) * a - b);
                },
                swingTo: function (a) {
                  var b = 1.70158;
                  return (a -= 1) * a * ((b + 1) * a + b) + 1;
                },
                bounce: function (a) {
                  return 1 / 2.75 > a
                    ? 7.5625 * a * a
                    : 2 / 2.75 > a
                    ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                    : 2.5 / 2.75 > a
                    ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                    : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
                },
                bouncePast: function (a) {
                  return 1 / 2.75 > a
                    ? 7.5625 * a * a
                    : 2 / 2.75 > a
                    ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                    : 2.5 / 2.75 > a
                    ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                    : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
                },
                easeFromTo: function (a) {
                  return (a /= 0.5) < 1
                    ? 0.5 * Math.pow(a, 4)
                    : -0.5 * ((a -= 2) * Math.pow(a, 3) - 2);
                },
                easeFrom: function (a) {
                  return Math.pow(a, 4);
                },
                easeTo: function (a) {
                  return Math.pow(a, 0.25);
                },
              });
            })(),
              (function () {
                function a(a, b, c, d, e, f) {
                  function g(a) {
                    return ((n * a + o) * a + p) * a;
                  }
                  function h(a) {
                    return ((q * a + r) * a + s) * a;
                  }
                  function i(a) {
                    return (3 * n * a + 2 * o) * a + p;
                  }
                  function j(a) {
                    return 1 / (200 * a);
                  }
                  function k(a, b) {
                    return h(m(a, b));
                  }
                  function l(a) {
                    return a >= 0 ? a : 0 - a;
                  }
                  function m(a, b) {
                    var c, d, e, f, h, j;
                    for (e = a, j = 0; 8 > j; j++) {
                      if (((f = g(e) - a), l(f) < b)) return e;
                      if (((h = i(e)), l(h) < 1e-6)) break;
                      e -= f / h;
                    }
                    if (((c = 0), (d = 1), (e = a), c > e)) return c;
                    if (e > d) return d;
                    for (; d > c; ) {
                      if (((f = g(e)), l(f - a) < b)) return e;
                      a > f ? (c = e) : (d = e), (e = 0.5 * (d - c) + c);
                    }
                    return e;
                  }
                  var n = 0,
                    o = 0,
                    p = 0,
                    q = 0,
                    r = 0,
                    s = 0;
                  return (
                    (p = 3 * b),
                    (o = 3 * (d - b) - p),
                    (n = 1 - p - o),
                    (s = 3 * c),
                    (r = 3 * (e - c) - s),
                    (q = 1 - s - r),
                    k(a, j(f))
                  );
                }
                function b(b, c, d, e) {
                  return function (f) {
                    return a(f, b, c, d, e, 1);
                  };
                }
                (e.setBezierFunction = function (a, c, d, f, g) {
                  var h = b(c, d, f, g);
                  return (
                    (h.displayName = a),
                    (h.x1 = c),
                    (h.y1 = d),
                    (h.x2 = f),
                    (h.y2 = g),
                    (e.prototype.formula[a] = h)
                  );
                }),
                  (e.unsetBezierFunction = function (a) {
                    delete e.prototype.formula[a];
                  });
              })(),
              (function () {
                function a(a, b, c, d, f, g) {
                  return e.tweenProps(d, b, a, c, 1, g, f);
                }
                var b = new e();
                (b._filterArgs = []),
                  (e.interpolate = function (c, d, f, g, h) {
                    var i = e.shallowCopy({}, c),
                      j = h || 0,
                      k = e.composeEasingObject(c, g || "linear");
                    b.set({});
                    var l = b._filterArgs;
                    (l.length = 0),
                      (l[0] = i),
                      (l[1] = c),
                      (l[2] = d),
                      (l[3] = k),
                      e.applyFilter(b, "tweenCreated"),
                      e.applyFilter(b, "beforeTween");
                    var m = a(c, i, d, f, k, j);
                    return e.applyFilter(b, "afterTween"), m;
                  });
              })(),
              (function (a) {
                function b(a, b) {
                  var c,
                    d = [],
                    e = a.length;
                  for (c = 0; e > c; c++) d.push("_" + b + "_" + c);
                  return d;
                }
                function c(a) {
                  var b = a.match(v);
                  return (
                    b
                      ? (1 === b.length || a[0].match(u)) && b.unshift("")
                      : (b = ["", ""]),
                    b.join(A)
                  );
                }
                function d(b) {
                  a.each(b, function (a) {
                    var c = b[a];
                    "string" == typeof c && c.match(z) && (b[a] = e(c));
                  });
                }
                function e(a) {
                  return i(z, a, f);
                }
                function f(a) {
                  var b = g(a);
                  return "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")";
                }
                function g(a) {
                  return (
                    (a = a.replace(/#/, "")),
                    3 === a.length &&
                      ((a = a.split("")),
                      (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2])),
                    (B[0] = h(a.substr(0, 2))),
                    (B[1] = h(a.substr(2, 2))),
                    (B[2] = h(a.substr(4, 2))),
                    B
                  );
                }
                function h(a) {
                  return parseInt(a, 16);
                }
                function i(a, b, c) {
                  var d = b.match(a),
                    e = b.replace(a, A);
                  if (d)
                    for (var f, g = d.length, h = 0; g > h; h++)
                      (f = d.shift()), (e = e.replace(A, c(f)));
                  return e;
                }
                function j(a) {
                  return i(x, a, k);
                }
                function k(a) {
                  for (
                    var b = a.match(w), c = b.length, d = a.match(y)[0], e = 0;
                    c > e;
                    e++
                  )
                    d += parseInt(b[e], 10) + ",";
                  return (d = d.slice(0, -1) + ")");
                }
                function l(d) {
                  var e = {};
                  return (
                    a.each(d, function (a) {
                      var f = d[a];
                      if ("string" == typeof f) {
                        var g = r(f);
                        e[a] = { formatString: c(f), chunkNames: b(g, a) };
                      }
                    }),
                    e
                  );
                }
                function m(b, c) {
                  a.each(c, function (a) {
                    for (
                      var d = b[a], e = r(d), f = e.length, g = 0;
                      f > g;
                      g++
                    )
                      b[c[a].chunkNames[g]] = +e[g];
                    delete b[a];
                  });
                }
                function n(b, c) {
                  a.each(c, function (a) {
                    var d = b[a],
                      e = o(b, c[a].chunkNames),
                      f = p(e, c[a].chunkNames);
                    (d = q(c[a].formatString, f)), (b[a] = j(d));
                  });
                }
                function o(a, b) {
                  for (var c, d = {}, e = b.length, f = 0; e > f; f++)
                    (c = b[f]), (d[c] = a[c]), delete a[c];
                  return d;
                }
                function p(a, b) {
                  C.length = 0;
                  for (var c = b.length, d = 0; c > d; d++) C.push(a[b[d]]);
                  return C;
                }
                function q(a, b) {
                  for (var c = a, d = b.length, e = 0; d > e; e++)
                    c = c.replace(A, +b[e].toFixed(4));
                  return c;
                }
                function r(a) {
                  return a.match(w);
                }
                function s(b, c) {
                  a.each(c, function (a) {
                    var d,
                      e = c[a],
                      f = e.chunkNames,
                      g = f.length,
                      h = b[a];
                    if ("string" == typeof h) {
                      var i = h.split(" "),
                        j = i[i.length - 1];
                      for (d = 0; g > d; d++) b[f[d]] = i[d] || j;
                    } else for (d = 0; g > d; d++) b[f[d]] = h;
                    delete b[a];
                  });
                }
                function t(b, c) {
                  a.each(c, function (a) {
                    var d = c[a],
                      e = d.chunkNames,
                      f = e.length,
                      g = b[e[0]],
                      h = typeof g;
                    if ("string" === h) {
                      for (var i = "", j = 0; f > j; j++)
                        (i += " " + b[e[j]]), delete b[e[j]];
                      b[a] = i.substr(1);
                    } else b[a] = g;
                  });
                }
                var u = /(\d|\-|\.)/,
                  v = /([^\-0-9\.]+)/g,
                  w = /[0-9.\-]+/g,
                  x = new RegExp(
                    "rgb\\(" +
                      w.source +
                      /,\s*/.source +
                      w.source +
                      /,\s*/.source +
                      w.source +
                      "\\)",
                    "g"
                  ),
                  y = /^.*\(/,
                  z = /#([0-9]|[a-f]){3,6}/gi,
                  A = "VAL",
                  B = [],
                  C = [];
                a.prototype.filter.token = {
                  tweenCreated: function (a, b, c, e) {
                    d(a), d(b), d(c), (this._tokenData = l(a));
                  },
                  beforeTween: function (a, b, c, d) {
                    s(d, this._tokenData),
                      m(a, this._tokenData),
                      m(b, this._tokenData),
                      m(c, this._tokenData);
                  },
                  afterTween: function (a, b, c, d) {
                    n(a, this._tokenData),
                      n(b, this._tokenData),
                      n(c, this._tokenData),
                      t(d, this._tokenData);
                  },
                };
              })(e);
          }).call(null);
        },
        {},
      ],
      2: [
        function (a, b, c) {
          var d = a("./shape"),
            e = a("./utils"),
            f = function (a, b) {
              (this._pathTemplate =
                "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}"),
                (this.containerAspectRatio = 1),
                d.apply(this, arguments);
            };
          (f.prototype = new d()),
            (f.prototype.constructor = f),
            (f.prototype._pathString = function (a) {
              var b = a.strokeWidth;
              a.trailWidth &&
                a.trailWidth > a.strokeWidth &&
                (b = a.trailWidth);
              var c = 50 - b / 2;
              return e.render(this._pathTemplate, {
                radius: c,
                "2radius": 2 * c,
              });
            }),
            (f.prototype._trailString = function (a) {
              return this._pathString(a);
            }),
            (b.exports = f);
        },
        { "./shape": 7, "./utils": 8 },
      ],
      3: [
        function (a, b, c) {
          var d = a("./shape"),
            e = a("./utils"),
            f = function (a, b) {
              (this._pathTemplate = "M 0,{center} L 100,{center}"),
                d.apply(this, arguments);
            };
          (f.prototype = new d()),
            (f.prototype.constructor = f),
            (f.prototype._initializeSvg = function (a, b) {
              a.setAttribute("viewBox", "0 0 100 " + b.strokeWidth),
                a.setAttribute("preserveAspectRatio", "none");
            }),
            (f.prototype._pathString = function (a) {
              return e.render(this._pathTemplate, {
                center: a.strokeWidth / 2,
              });
            }),
            (f.prototype._trailString = function (a) {
              return this._pathString(a);
            }),
            (b.exports = f);
        },
        { "./shape": 7, "./utils": 8 },
      ],
      4: [
        function (a, b, c) {
          b.exports = {
            Line: a("./line"),
            Circle: a("./circle"),
            SemiCircle: a("./semicircle"),
            Path: a("./path"),
            Shape: a("./shape"),
            utils: a("./utils"),
          };
        },
        {
          "./circle": 2,
          "./line": 3,
          "./path": 5,
          "./semicircle": 6,
          "./shape": 7,
          "./utils": 8,
        },
      ],
      5: [
        function (a, b, c) {
          var d = a("shifty"),
            e = a("./utils"),
            f = {
              easeIn: "easeInCubic",
              easeOut: "easeOutCubic",
              easeInOut: "easeInOutCubic",
            },
            g = function h(a, b) {
              if (!(this instanceof h))
                throw new Error("Constructor was called without new keyword");
              b = e.extend(
                {
                  duration: 800,
                  easing: "linear",
                  from: {},
                  to: {},
                  step: function () {},
                },
                b
              );
              var c;
              (c = e.isString(a) ? document.querySelector(a) : a),
                (this.path = c),
                (this._opts = b),
                (this._tweenable = null);
              var d = this.path.getTotalLength();
              (this.path.style.strokeDasharray = d + " " + d), this.set(0);
            };
          (g.prototype.value = function () {
            var a = this._getComputedDashOffset(),
              b = this.path.getTotalLength(),
              c = 1 - a / b;
            return parseFloat(c.toFixed(6), 10);
          }),
            (g.prototype.set = function (a) {
              this.stop(),
                (this.path.style.strokeDashoffset = this._progressToOffset(a));
              var b = this._opts.step;
              if (e.isFunction(b)) {
                var c = this._easing(this._opts.easing),
                  d = this._calculateTo(a, c),
                  f = this._opts.shape || this;
                b(d, f, this._opts.attachment);
              }
            }),
            (g.prototype.stop = function () {
              this._stopTween(),
                (this.path.style.strokeDashoffset =
                  this._getComputedDashOffset());
            }),
            (g.prototype.animate = function (a, b, c) {
              (b = b || {}), e.isFunction(b) && ((c = b), (b = {}));
              var f = e.extend({}, b),
                g = e.extend({}, this._opts);
              b = e.extend(g, b);
              var h = this._easing(b.easing),
                i = this._resolveFromAndTo(a, h, f);
              this.stop(), this.path.getBoundingClientRect();
              var j = this._getComputedDashOffset(),
                k = this._progressToOffset(a),
                l = this;
              (this._tweenable = new d()),
                this._tweenable.tween({
                  from: e.extend({ offset: j }, i.from),
                  to: e.extend({ offset: k }, i.to),
                  duration: b.duration,
                  easing: h,
                  step: function (a) {
                    l.path.style.strokeDashoffset = a.offset;
                    var c = b.shape || l;
                    b.step(a, c, b.attachment);
                  },
                  finish: function (a) {
                    e.isFunction(c) && c();
                  },
                });
            }),
            (g.prototype._getComputedDashOffset = function () {
              var a = window.getComputedStyle(this.path, null);
              return parseFloat(a.getPropertyValue("stroke-dashoffset"), 10);
            }),
            (g.prototype._progressToOffset = function (a) {
              var b = this.path.getTotalLength();
              return b - a * b;
            }),
            (g.prototype._resolveFromAndTo = function (a, b, c) {
              return c.from && c.to
                ? { from: c.from, to: c.to }
                : { from: this._calculateFrom(b), to: this._calculateTo(a, b) };
            }),
            (g.prototype._calculateFrom = function (a) {
              return d.interpolate(
                this._opts.from,
                this._opts.to,
                this.value(),
                a
              );
            }),
            (g.prototype._calculateTo = function (a, b) {
              return d.interpolate(this._opts.from, this._opts.to, a, b);
            }),
            (g.prototype._stopTween = function () {
              null !== this._tweenable &&
                (this._tweenable.stop(), (this._tweenable = null));
            }),
            (g.prototype._easing = function (a) {
              return f.hasOwnProperty(a) ? f[a] : a;
            }),
            (b.exports = g);
        },
        { "./utils": 8, shifty: 1 },
      ],
      6: [
        function (a, b, c) {
          var d = a("./shape"),
            e = a("./circle"),
            f = a("./utils"),
            g = function (a, b) {
              (this._pathTemplate =
                "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0"),
                (this.containerAspectRatio = 2),
                d.apply(this, arguments);
            };
          (g.prototype = new d()),
            (g.prototype.constructor = g),
            (g.prototype._initializeSvg = function (a, b) {
              a.setAttribute("viewBox", "0 0 100 50");
            }),
            (g.prototype._initializeTextContainer = function (a, b, c) {
              a.text.style &&
                ((c.style.top = "auto"),
                (c.style.bottom = "0"),
                a.text.alignToBottom
                  ? f.setStyle(c, "transform", "translate(-50%, 0)")
                  : f.setStyle(c, "transform", "translate(-50%, 50%)"));
            }),
            (g.prototype._pathString = e.prototype._pathString),
            (g.prototype._trailString = e.prototype._trailString),
            (b.exports = g);
        },
        { "./circle": 2, "./shape": 7, "./utils": 8 },
      ],
      7: [
        function (a, b, c) {
          var d = a("./path"),
            e = a("./utils"),
            f = "Object is destroyed",
            g = function h(a, b) {
              if (!(this instanceof h))
                throw new Error("Constructor was called without new keyword");
              if (0 !== arguments.length) {
                (this._opts = e.extend(
                  {
                    color: "#555",
                    strokeWidth: 1,
                    trailColor: null,
                    trailWidth: null,
                    fill: null,
                    text: {
                      style: {
                        color: null,
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        padding: 0,
                        margin: 0,
                        transform: {
                          prefix: !0,
                          value: "translate(-50%, -50%)",
                        },
                      },
                      autoStyleContainer: !0,
                      alignToBottom: !0,
                      value: null,
                      className: "progressbar-text",
                    },
                    svgStyle: { display: "block", width: "100%" },
                    warnings: !1,
                  },
                  b,
                  !0
                )),
                  e.isObject(b) &&
                    void 0 !== b.svgStyle &&
                    (this._opts.svgStyle = b.svgStyle),
                  e.isObject(b) &&
                    e.isObject(b.text) &&
                    void 0 !== b.text.style &&
                    (this._opts.text.style = b.text.style);
                var c,
                  f = this._createSvgView(this._opts);
                if (((c = e.isString(a) ? document.querySelector(a) : a), !c))
                  throw new Error("Container does not exist: " + a);
                (this._container = c),
                  this._container.appendChild(f.svg),
                  this._opts.warnings &&
                    this._warnContainerAspectRatio(this._container),
                  this._opts.svgStyle &&
                    e.setStyles(f.svg, this._opts.svgStyle),
                  (this.svg = f.svg),
                  (this.path = f.path),
                  (this.trail = f.trail),
                  (this.text = null);
                var g = e.extend(
                  { attachment: void 0, shape: this },
                  this._opts
                );
                (this._progressPath = new d(f.path, g)),
                  e.isObject(this._opts.text) &&
                    null !== this._opts.text.value &&
                    this.setText(this._opts.text.value);
              }
            };
          (g.prototype.animate = function (a, b, c) {
            if (null === this._progressPath) throw new Error(f);
            this._progressPath.animate(a, b, c);
          }),
            (g.prototype.stop = function () {
              if (null === this._progressPath) throw new Error(f);
              void 0 !== this._progressPath && this._progressPath.stop();
            }),
            (g.prototype.destroy = function () {
              if (null === this._progressPath) throw new Error(f);
              this.stop(),
                this.svg.parentNode.removeChild(this.svg),
                (this.svg = null),
                (this.path = null),
                (this.trail = null),
                (this._progressPath = null),
                null !== this.text &&
                  (this.text.parentNode.removeChild(this.text),
                  (this.text = null));
            }),
            (g.prototype.set = function (a) {
              if (null === this._progressPath) throw new Error(f);
              this._progressPath.set(a);
            }),
            (g.prototype.value = function () {
              if (null === this._progressPath) throw new Error(f);
              return void 0 === this._progressPath
                ? 0
                : this._progressPath.value();
            }),
            (g.prototype.setText = function (a) {
              if (null === this._progressPath) throw new Error(f);
              null === this.text &&
                ((this.text = this._createTextContainer(
                  this._opts,
                  this._container
                )),
                this._container.appendChild(this.text)),
                e.isObject(a)
                  ? (e.removeChildren(this.text), this.text.appendChild(a))
                  : (this.text.innerHTML = a);
            }),
            (g.prototype._createSvgView = function (a) {
              var b = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              );
              this._initializeSvg(b, a);
              var c = null;
              (a.trailColor || a.trailWidth) &&
                ((c = this._createTrail(a)), b.appendChild(c));
              var d = this._createPath(a);
              return b.appendChild(d), { svg: b, path: d, trail: c };
            }),
            (g.prototype._initializeSvg = function (a, b) {
              a.setAttribute("viewBox", "0 0 100 100");
            }),
            (g.prototype._createPath = function (a) {
              var b = this._pathString(a);
              return this._createPathElement(b, a);
            }),
            (g.prototype._createTrail = function (a) {
              var b = this._trailString(a),
                c = e.extend({}, a);
              return (
                c.trailColor || (c.trailColor = "#eee"),
                c.trailWidth || (c.trailWidth = c.strokeWidth),
                (c.color = c.trailColor),
                (c.strokeWidth = c.trailWidth),
                (c.fill = null),
                this._createPathElement(b, c)
              );
            }),
            (g.prototype._createPathElement = function (a, b) {
              var c = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
              );
              return (
                c.setAttribute("d", a),
                c.setAttribute("stroke", b.color),
                c.setAttribute("stroke-width", b.strokeWidth),
                b.fill
                  ? c.setAttribute("fill", b.fill)
                  : c.setAttribute("fill-opacity", "0"),
                c
              );
            }),
            (g.prototype._createTextContainer = function (a, b) {
              var c = document.createElement("div");
              c.className = a.text.className;
              var d = a.text.style;
              return (
                d &&
                  (a.text.autoStyleContainer && (b.style.position = "relative"),
                  e.setStyles(c, d),
                  d.color || (c.style.color = a.color)),
                this._initializeTextContainer(a, b, c),
                c
              );
            }),
            (g.prototype._initializeTextContainer = function (a, b, c) {}),
            (g.prototype._pathString = function (a) {
              throw new Error("Override this function for each progress bar");
            }),
            (g.prototype._trailString = function (a) {
              throw new Error("Override this function for each progress bar");
            }),
            (g.prototype._warnContainerAspectRatio = function (a) {
              if (this.containerAspectRatio) {
                var b = window.getComputedStyle(a, null),
                  c = parseFloat(b.getPropertyValue("width"), 10),
                  d = parseFloat(b.getPropertyValue("height"), 10);
                e.floatEquals(this.containerAspectRatio, c / d) ||
                  (console.warn(
                    "Incorrect aspect ratio of container",
                    "#" + a.id,
                    "detected:",
                    b.getPropertyValue("width") + "(width)",
                    "/",
                    b.getPropertyValue("height") + "(height)",
                    "=",
                    c / d
                  ),
                  console.warn(
                    "Aspect ratio of should be",
                    this.containerAspectRatio
                  ));
              }
            }),
            (b.exports = g);
        },
        { "./path": 5, "./utils": 8 },
      ],
      8: [
        function (a, b, c) {
          function d(a, b, c) {
            (a = a || {}), (b = b || {}), (c = c || !1);
            for (var e in b)
              if (b.hasOwnProperty(e)) {
                var f = a[e],
                  g = b[e];
                c && l(f) && l(g) ? (a[e] = d(f, g, c)) : (a[e] = g);
              }
            return a;
          }
          function e(a, b) {
            var c = a;
            for (var d in b)
              if (b.hasOwnProperty(d)) {
                var e = b[d],
                  f = "\\{" + d + "\\}",
                  g = new RegExp(f, "g");
                c = c.replace(g, e);
              }
            return c;
          }
          function f(a, b, c) {
            for (var d = a.style, e = 0; e < p.length; ++e) {
              var f = p[e];
              d[f + h(b)] = c;
            }
            d[b] = c;
          }
          function g(a, b) {
            m(b, function (b, c) {
              null !== b &&
                void 0 !== b &&
                (l(b) && b.prefix === !0 ? f(a, c, b.value) : (a.style[c] = b));
            });
          }
          function h(a) {
            return a.charAt(0).toUpperCase() + a.slice(1);
          }
          function i(a) {
            return "string" == typeof a || a instanceof String;
          }
          function j(a) {
            return "function" == typeof a;
          }
          function k(a) {
            return "[object Array]" === Object.prototype.toString.call(a);
          }
          function l(a) {
            if (k(a)) return !1;
            var b = typeof a;
            return "object" === b && !!a;
          }
          function m(a, b) {
            for (var c in a)
              if (a.hasOwnProperty(c)) {
                var d = a[c];
                b(d, c);
              }
          }
          function n(a, b) {
            return Math.abs(a - b) < q;
          }
          function o(a) {
            for (; a.firstChild; ) a.removeChild(a.firstChild);
          }
          var p = "Webkit Moz O ms".split(" "),
            q = 0.001;
          b.exports = {
            extend: d,
            render: e,
            setStyle: f,
            setStyles: g,
            capitalize: h,
            isString: i,
            isFunction: j,
            isObject: l,
            forEachObject: m,
            floatEquals: n,
            removeChildren: o,
          };
        },
        {},
      ],
    },
    {},
    [4]
  )(4);
});
jQuery.fn.center = function () {
  this.css("position", "absolute");
  this.css(
    "top",
    Math.max(
      0,
      ($(window).height() - $(this).outerHeight()) / 2 + $(window).scrollTop()
    ) + "px"
  );
  this.css(
    "left",
    Math.max(
      0,
      ($(window).width() - $(this).outerWidth()) / 2 + $(window).scrollLeft()
    ) + "px"
  );
  return this;
};
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};
Array.prototype.inArray = function (str) {
  return this.indexOf(str) != -1 ? true : false;
};
Array.prototype.spliceItem = function (items) {
  var arr = [],
    i = (l = 0);
  typeof items == "object" ? (arr = items) : arr.push(items);
  l = arr.length;
  for (; i < l; i++)
    this.indexOf(arr[i]) !== -1 && this.splice(this.indexOf(arr[i]), 1);
  return this;
};
Array.prototype.shuffle = function () {
  var cI = this.length,
    tmp,
    rI;
  while (0 !== cI) {
    rI = Math.floor(Math.random() * cI);
    cI -= 1;
    tmp = this[cI];
    this[cI] = this[rI];
    this[rI] = tmp;
  }
  return this;
};
Array.prototype.equals = function (other) {
  if (this.length != other.length) return false;
  for (var i = 0; i < this.length; i++) {
    if (this[i] != other[i]) return false;
  }
  return true;
};
String.prototype.extraChar = function (chr, n) {
  if (n < 1) return this;
  return this.match(new RegExp(".{1," + n + "}", "g")).join(chr);
};
String.prototype.pad = function (len, chr) {
  var tmp = this;
  while (tmp.length < len) tmp = chr + tmp;
  return tmp;
};
String.prototype.escapeRegExp = function () {
  return this.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};
String.prototype.reverseStr = function () {
  var l = this.length - 1;
  r = "";
  for (; l > -1; l--) r += this[l];
  return r;
};
String.prototype.getStringAfter = function (sep) {
  var last = this.split(sep);
  return last[last.length - 1];
};
String.prototype.getFileInfo = function () {
  var obj = {},
    fileInfo = this.split("/");
  obj.filename = fileInfo.pop();
  obj.path = fileInfo.join("/");
  obj.ext = obj.filename.getStringAfter(".");
  obj.fullname = this;
  return obj;
};
Number.prototype.pad = function (len, chr) {
  var tmp = this.toString();
  while (tmp.length < len) tmp = chr + tmp;
  return tmp;
};
Node.prototype.hasClass = function (css) {
  return this.classList.contains(css);
};
Node.prototype.addClass = function (css) {
  var s,
    cssList = [];
  typeof css == "string" ? cssList.push(css) : (cssList = css);
  for (s in cssList)
    typeof cssList[s] == "string" &&
      !this.hasClass(cssList[s]) &&
      this.classList.add(cssList[s]);
  return this;
};
Node.prototype.removeClass = function (css) {
  var s,
    cssList = [];
  typeof css == "string" ? cssList.push(css) : (cssList = css);
  for (s in cssList)
    typeof cssList[s] == "string" &&
      this.hasClass(cssList[s]) &&
      this.classList.remove(cssList[s]);
  return this;
};
Node.prototype.toggleClass = function (css) {
  this.hasClass(css) ? this.removeClass(css) : this.addClass(css);
};
Node.prototype.getIndex = function () {
  var i = 0,
    node = this;
  while ((node = node.previousSibling) != null) i++;
  return i + 1;
};
function appendTo(obj, str, id, css, struct) {
  if (!struct) struct = "div";
  var newObj = document.createElement(struct);
  if (id) newObj.setAttribute("id", id);
  if (css) newObj.setAttribute("class", css);
  newObj.innerHTML = str;
  obj.appendChild(newObj);
  return newObj;
}
function getAndroidVersion() {
  var ua = navigator.userAgent.toLowerCase();
  var match = ua.match(/android\s([0-9\.]*)/);
  return match ? match[1] : false;
}
document.app.isAndroid = parseFloat(getAndroidVersion());
if (!document.app.debug) {
  window.onerror = function (message, url, lineNumber) {
    document.app.ajax = new Ajax(
      "/inc/php/error_report.php",
      function () {
        console.log(message + " on line " + lineNumber);
        if (document.app.popin) {
          document.app.popin = new Popin(
            "A javascript error occured in the page and may become instable, you may need to refresh the page.<br/>An error report as been sent to the site administrator<br/><br/><u>Error message :</u> " +
              message,
            "err"
          );
        } else {
          alert(
            "A javascript error occured in the page and may become instable, you may need to refresh the page.\nAn error report as been sent to the site administrator\n\nError message : " +
              message
          );
        }
      },
      {
        param:
          "message=" + message + "&url=" + url + "&lineNumber=" + lineNumber,
      }
    );
    return true;
  };
}
function logger(str) {
  if (document.app.debug) console.log(str);
}
$(document).ready(function () {
  if (document.app.isAndroid == "4.4") $("FOOTER").hide();
  document.app.content.init();
  setPageAsloaded();
});
function checkScrollBar() {
  var part = $("ARTICLE .partContent");
  if ($("BODY").height() > 400) {
    $("ARTICLE").height() - part.height() < 0
      ? part.removeClass("noScroll")
      : part.addClass("noScroll");
  } else {
    part.removeClass("noScroll");
  }
}
$(window).resize(function () {
  checkScrollBar();
});
function Ajax(url, callback, opt, onprogress) {
  this.init(url, callback, opt, onprogress);
}
Ajax.prototype = {
  url: null,
  xhr: null,
  method: "GET",
  async: true,
  param: "",
  init: function (url, callback, opt, onprogress) {
    this.url = url;
    if (opt) {
      if (opt.method) this.method = opt.method;
      if (opt.async) this.async = opt.async;
      if (opt.param && this.method == "GET") {
        this.param = opt.param;
        this.url += "?" + this.param;
      }
    }
    this.getXhr();
    this.xhr.callback = callback;
    this.xhr.onreadystatechange = this.readyState;
    this.xhr.open(this.method, this.url, this.async);
    this.xhr.upload.onprogress = onprogress;
    this.xhr.send(this.method == "GET" ? "" : opt.param);
  },
  getXhr: function () {
    var xhr,
      versions,
      i = (len = 0);
    if (typeof XMLHttpRequest !== "undefined") xhr = new XMLHttpRequest();
    else {
      versions = [
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp",
      ];
      for (len = versions.length; i < len; i++) {
        try {
          xhr = new ActiveXObject(versions[i]);
          break;
        } catch (e) {}
      }
    }
    this.xhr = xhr;
  },
  readyState: function () {
    switch (true) {
      case this.readyState < 4:
        return;
        break;
      case this.readyState === 4:
        this.callback(this);
        break;
      default:
        document.app.popin = new Popin(
          "An error occured",
          "An error occured while proccessing an XHR connexion, script has stopped, you can contact site owner or check your web console for more informations."
        );
        console.log(this);
        return;
        break;
    }
  },
};
function Popin(message, css, callbackOK, callbackKO) {
  this.init(message, css, callbackOK, callbackKO);
}
Popin.prototype = {
  popinObj: null,
  maskObj: null,
  divMask: "",
  divPopin:
    '<div class="title"></div><div class="message"></div><div class="btn"></div>',
  divBtnOK: "",
  divBtnKO: "",
  title: null,
  message: null,
  callBackOK: null,
  callbackKO: null,
  css: "info",
  mEffectCss: { eshow: "unfade", ehide: "fade" },
  pEffectCss: { eshow: "fadenslidedown", ehide: "fade" },
  init: function (message, css, callbackOK, callbackKO) {
    if (typeof document.app.isAndroid == "undefined")
      document.app.isAndroid = getAndroidVersion();
    if (!css) css = this.css;
    this.setTile(css);
    this.message = message;
    this.callbackOK = callbackOK;
    this.callbackKO = callbackKO;
    if (callbackKO) {
      this.divBtnOK = "Oui&nbsp;&nbsp;";
      this.divBtnKO = "Non&nbsp;&nbsp;";
    }
    this.maskObj = appendTo(document.body, this.divMask, "popinmask");
    this.popinObj = appendTo(document.body, this.divPopin, "popinWin");
    if (document.app.isAndroid == "4.4") {
      $(this.popinObj).hide();
    }
    this.popinObj.addClass(css);
    this.setContent();
    if (document.app.isAndroid == "4.4") {
      $(this.popinObj).center().show();
    }
    this.addEvent();
    this.maskObj.addClass(this.mEffectCss.eshow);
    this.popinObj.addClass(this.pEffectCss.eshow);
  },
  setTile: function (typ) {
    switch (typ) {
      case "warn":
        this.title = "site warning";
        break;
      case "err":
        this.title = "site error";
        break;
      default:
        this.title = "information";
        break;
    }
  },
  setContent: function () {
    this.popinObj.getElementsByClassName("title")[0].innerHTML = this.title;
    this.popinObj.getElementsByClassName("message")[0].innerHTML = this.message;
  },
  addEvent: function () {
    var _that = this;
    this.btnOK = appendTo(
      this.popinObj.getElementsByClassName("btn")[0],
      this.divBtnOK,
      null,
      "ok hvr-back-pulse",
      "A"
    );
    this.btnOK.addEventListener("click", function (e) {
      _that.hide();
      if (_that.callbackOK) {
        _that.callbackOK();
      }
    });
    if (this.callbackKO) {
      this.btnKO = appendTo(
        this.popinObj.getElementsByClassName("btn")[0],
        this.divBtnKO,
        null,
        "ko hvr-back-pulse",
        "A"
      );
      this.btnKO.addEventListener("click", function (e) {
        _that.hide();
        _that.callbackKO();
      });
    }
    this.popinObj.addEventListener("animationend", function (e) {
      switch (true) {
        case e.target.hasClass(_that.pEffectCss.ehide):
          _that.remove();
          break;
      }
    });
  },
  hide: function () {
    if (document.app.isAndroid == "4.4") {
      $(this.maskObj).remove();
      $(this.popinObj).remove();
    } else {
      this.maskObj.removeClass(this.mEffectCss.eshow);
      this.popinObj.removeClass(this.pEffectCss.eshow);
      this.maskObj.addClass(this.mEffectCss.ehide);
      this.popinObj.addClass(this.pEffectCss.ehide);
    }
  },
  remove: function () {
    this.maskObj.parentElement.removeChild(this.maskObj);
    this.popinObj.parentElement.removeChild(this.popinObj);
  },
};
function Score() {
  this.init();
}
Score.prototype = {
  txt: null,
  nbtry: 0,
  nbconv: 0,
  nbobj: 0,
  htmlok: null,
  htmlko: null,
  doneTime: 0,
  timer: function () {
    this.doneTime = new Date() - this.doneTime;
  },
  getTime: function () {
    return (this.doneTime / 1000).toFixed(3) + "s";
  },
  resetTime: function () {
    this.doneTime = new Date();
  },
  init: function () {
    this.doneTime = new Date();
  },
};
function Scores(id, lvl) {
  this.id = id;
  this.lvl = lvl;
  this.data = [];
}
Scores.prototype = {
  id: null,
  lvl: null,
  data: [],
  good: 0,
  total: function () {
    return this.data.length;
  },
  add: function (score) {
    this.data.push(score);
  },
};
document.app.AllScores = {
  done: [],
  data: [],
  add: function (scores) {
    this.done[scores.id + "_" + scores.lvl] = true;
    this.data.push(scores);
  },
};
document.app.content = {
  num: null,
  lvl: null,
  data: null,
  dataSize: null,
  nbMaxValid: 5,
  contentObj: null,
  sndObj: null,
  sndClick: false,
  elementObjectifObj: null,
  elementConversionObj: null,
  pBar: null,
  quizzType: null,
  quizzStep: null,
  quizzData: null,
  quizzSize: null,
  currScores: null,
  init: function () {
    this.contentObj = $("ARTICLE .partContent");
    this.sndObj = $("#comment");
    this.initEvent();
    this.loadSound();
    if ($("html").attr("manifest") != null) {
      if (
        window.applicationCache.status == 1 ||
        (document.app.isIE && window.applicationCache.status == 2)
      ) {
        this.loadIntro();
      } else {
        this.loadUpdate(this);
      }
    } else {
      if (window.applicationCache.status == 3) {
        this.loadUpdate(this);
      } else {
        this.loadIntro();
      }
    }
  },
  initEvent: function () {
    var _that = this;
    $("HEADER IMG").click(function () {
      if ($("HTML").attr("manifest") == null) {
        var skipSound = !_that.sndClick;
        if (!_that.sndClick) {
          _that.setSound(document.app.homeSnd);
          _that.sndClick = true;
        }
        _that.loadHome(skipSound);
      } else {
        document.location = "/";
      }
    });
  },
  setPageTitle: function (subTitle) {
    document.title =
      document.app.titleSpeChr +
      " " +
      document.app.titleName +
      " - " +
      subTitle +
      " " +
      document.app.titleSpeChr;
  },
  setSound: function (snd, skip) {
    var oldMp3 = this.sndObj.attr("src"),
      currMp3 = "upload/snd/" + snd;
    if (oldMp3 != currMp3) {
      this.sndObj.attr("src", currMp3);
      if (document.app.snd && !skip) {
        this.sndObj[0].play();
      }
    }
  },
  removeSound: function () {
    this.sndObj[0].pause();
    this.sndObj.removeAttr("src");
  },
  loadObjectifList: function () {
    var elementListHtml = $("#tpl-objectifList").html();
    var elementObjectifObj = $('<div class="objDiv"></div>');
    for (var k = 0; k < this.dataSize; k++) {
      if (!this.data.parts[k].fake) {
        var newLine = $(elementListHtml);
        var titleLine = newLine.find("H4");
        var txt;
        if (this.data.parts[k].nbok == 1) {
          txt = this.data.parts[k].txt;
        } else {
          txt = this.data.parts[k].txts;
        }
        titleLine.append(this.data.parts[k].nbok + " " + txt);
        for (var v = 0; v < this.data.parts[k].nbok; v++) {
          newLine.append(
            '<img src="upload/exercice/ex' +
              this.num +
              "/lvl1/" +
              this.data.parts[k].id +
              '.png" alt="' +
              this.data.parts[k].txt +
              '"/>'
          );
        }
        elementObjectifObj.append(newLine);
      }
    }
    this.elementObjectifObj = elementObjectifObj;
  },
  loadConversionList: function () {
    var _that = this;
    var str = '<table class="exMatch">';
    for (var w = 0; w < this.dataSize; w++) {
      if (!this.data.parts[w].fake) {
        str += "<tr>";
        if (this.lvl > "niveau 2") {
          str += this.loadConvertionListItem(w, 3);
        }
        if (this.lvl > "niveau 1") {
          str += this.loadConvertionListItem(w, 2);
        }
        str += this.loadConvertionListItem(w, 1);
        str +=
          '<td><img src="upload/exercice/ex' +
          this.num +
          "/lvl1/" +
          this.data.parts[w].id +
          '.png" title="' +
          this.data.parts[w].txt +
          '" alt="' +
          this.data.parts[w].txt +
          '"></td>' +
          "<td><h5>" +
          this.data.parts[w].txt +
          "</h5></td></tr>";
      }
    }
    str += "</table>";
    this.elementConversionObj = $(str);
  },
  loadConvertionListItem: function (partidx, assoc) {
    var _that = this;
    var part = this.data.parts[partidx];
    var ids = part["assoc" + assoc],
      imgs = "",
      badge = 1,
      lvl = assoc + 1;
    var txt = part["assoc" + lvl + "txt"] || part["txt" + lvl];
    if (assoc > 1) txt = "";
    if (!txt) txt = "";
    if (!ids) ids = [part.id];
    for (var b = 1; b < ids.length; b++) {
      if (ids[b] != ids[0]) break;
      if (screen.width < 416) {
        badge++;
        if (b == ids.length - 1) {
          ids = [ids[0]];
        }
      }
    }
    $.each(ids, function (index, value) {
      imgs +=
        '<img src="upload/exercice/ex' +
        _that.num +
        "/lvl" +
        lvl +
        "/" +
        value +
        '.png" title="' +
        txt +
        '" alt="' +
        txt +
        '">';
    });
    return (
      "<td>" +
      imgs +
      "</td>" +
      "<td><h5>" +
      txt +
      "</h5></td>" +
      '<td><img src="upload/exercice/ex' +
      this.num +
      "/arrow" +
      badge +
      '.png" class="arrow"></td>'
    );
  },
  loadCommon: function () {
    this.loadObjectifList();
    this.loadConversionList();
  },
  loadSound: function () {
    var sndComment = document.querySelector("#comment"),
      sndButton = document.querySelector("#sound");
    if (!document.app.snd) {
      sndButton.addClass("off");
    }
    sndButton.addEventListener("click", function (e) {
      if (document.app.snd) {
        this.addClass("off");
        if (
          sndComment != null &&
          sndComment.src != null &&
          sndComment.src != ""
        ) {
          sndComment.pause();
          sndComment.currentTime = 0;
        }
      } else {
        this.removeClass("off");
        if (
          sndComment != null &&
          sndComment.src != null &&
          sndComment.src != ""
        ) {
          sndComment.play();
        }
      }
      document.app.snd = !document.app.snd;
    });
  },
  loadUpdate: function () {
    logger("> load content [ loadUpdate ]");
    var _that = this;
    this.contentObj.fadeOut(function () {
      document.app.contentUPDATE.init(_that);
    });
  },
  loadIntro: function () {
    logger("> load content [ loadIntro ]");
    var _that = this;
    this.contentObj.fadeOut(function () {
      document.app.contentINTRO.init(_that);
    });
  },
  loadHome: function (skip) {
    logger("> load content [ loadHome ]");
    var _that = this;
    this.contentObj.fadeOut(function () {
      document.app.contentHOME.init(_that, skip);
    });
  },
  loadPart1: function () {
    logger("> load content [ loadPart1 ]");
    var _that = this;
    this.contentObj.fadeOut(function () {
      document.app.contentP1.init(_that);
    });
  },
  loadPart2: function () {
    logger("> load content [ loadPart2 ]");
    var _that = this;
    this.contentObj.fadeOut(function () {
      document.app.contentP2.init(_that);
    });
  },
  loadPart3: function () {
    logger("> load content [ loadPart3 ]");
    var _that = this;
    this.contentObj.fadeOut(function () {
      document.app.contentP3.init(_that);
    });
  },
  loadPartQuizz: function () {
    logger("> load content [ loadQuizz ]");
    var _that = this;
    this.contentObj.fadeOut(function () {
      document.app.contentQuizz.init(_that);
    });
  },
  loadPartQuizz1: function () {
    logger("> load content [ loadQuizz1 ]");
    var _that = this;
    this.contentObj.fadeOut(function () {
      document.app.contentQuizz1.init(_that);
    });
  },
  loadPartQuizz2: function () {
    logger("> load content [ loadQuizz2 ]");
    var _that = this;
    this.contentObj.fadeOut(function () {
      document.app.contentQuizz2.init(_that);
    });
  },
  loadPartQuizz3: function () {
    logger("> load content [ loadQuizz3 ]");
    var _that = this;
    this.contentObj.fadeOut(function () {
      document.app.contentQuizz3.init(_that);
    });
  },
};
document.app.contentINTRO = {
  parent: null,
  currBlock: null,
  init: function (parent) {
    var _that = this;
    this.parent = parent;
    this.currBlock = $($("#tpl-intro").prop("innerHTML"));
    this.loadContent();
    this.initEvent();
    this.parent.contentObj.fadeIn();
    this.parent.setPageTitle(document.app.titleSubName);
  },
  initEvent: function () {
    var _that = this;
    $("ARTICLE INPUT").click(function () {
      _that.parent.loadHome(true);
      _that.parent.setSound(document.app.homeSnd);
      _that.parent.sndClick = true;
    });
  },
  loadContent: function () {
    var currBlock = this.currBlock.clone();
    this.parent.contentObj.append(currBlock);
    this.parent.contentObj.find("h3").html(document.app.homeTitle);
    this.parent.contentObj.find(".msgIntro").html(document.app.homeMessage);
    checkScrollBar();
  },
};
document.app.contentHOME = {
  parent: null,
  currBlock: null,
  init: function (parent, skip) {
    var _that = this;
    this.parent = parent;
    this.currBlock = $($("#tpl-home").prop("innerHTML"));
    this.loadContent();
    this.initEvent();
    this.parent.contentObj.fadeIn(function () {
      _that.parent.setSound(document.app.homeSnd, skip);
    });
    this.parent.setPageTitle(document.app.titleSubName);
  },
  initEvent: function () {
    var _that = this;
    $("ARTICLE .linkDiv").click(function () {
      _that.parent.num = $(this).parent().attr("ex");
      _that.parent.lvl = $(this).parent().attr("lvl");
      _that.parent.data = document.app.exercice[_that.parent.num];
      _that.parent.dataSize = _that.parent.data.parts.length;
      logger("DATA");
      logger("----------");
      logger(_that.parent.data);
      logger("----------");
      _that.parent.setPageTitle(
        document.app.exercice[_that.parent.num].title + " " + _that.parent.lvl
      );
      logger(
        "selected : exercice [ " +
          _that.parent.num +
          " ] level [ " +
          _that.parent.lvl +
          " ]"
      );
      _that.parent.lvl == "quizz"
        ? _that.parent.loadPartQuizz()
        : _that.parent.loadPart1();
    });
  },
  loadContent: function () {
    var _that = this;
    this.parent.contentObj.empty();
    for (var z = 1; z < document.app.exercice.length; z++) {
      this.parent.contentObj.append(
        "<h2>Excercice " + document.app.exercice[z].title + "</h2>"
      );
      this.parent.contentObj.append('<div class="homeBlock"></div>');
      $.each(document.app.exercice[z].objectif, function (index, value) {
        _that.loadBlock(z, index);
      });
    }
    checkScrollBar();
  },
  loadBlock: function (id, lvl) {
    var fullTitle = document.app.exercice[id].title + " " + lvl;
    var currBlock = this.currBlock.clone();
    currBlock.attr("ex", id);
    currBlock.attr("lvl", lvl);
    currBlock.find("B").html(document.app.exercice[id].title);
    currBlock.find("SPAN").html(lvl);
    currBlock.find(".caption").html(fullTitle);
    currBlock
      .find("IMG")
      .attr("src", "upload/exercice/ex" + id + "/home.jpg")
      .attr("alt", fullTitle);
    if (document.app.AllScores.done[id + "_" + lvl])
      currBlock.find(".front.face").addClass("done");
    this.parent.contentObj.find(".homeBlock:last").append(currBlock);
  },
};
document.app.contentP1 = {
  parent: null,
  init: function (parent) {
    var _that = this;
    this.parent = parent;
    this.parent.currScores = new Scores(this.parent.num, this.parent.lvl);
    this.parent.currScores.data.push(new Score());
    this.currScore = new Score();
    this.parent.loadCommon();
    this.loadContent();
    this.initEvent();
    this.parent.contentObj.fadeIn(function () {
      _that.parent.setSound(_that.parent.data.sndexo);
    });
  },
  initEvent: function () {
    var _that = this;
    $("ARTICLE .submitBtn").click(function () {
      _that.parent.loadPart2();
    });
  },
  loadContent: function () {
    this.parent.contentObj.html($("#tpl-part1").html());
    $("ARTICLE .objectifText").html(this.parent.data.exercice);
    $("#commandeList").append(this.parent.elementObjectifObj.clone());
    checkScrollBar();
  },
};
document.app.contentP2 = {
  parent: null,
  init: function (parent) {
    var _that = this;
    this.parent = parent;
    this.loadContent();
    this.initEvent();
    this.parent.contentObj.fadeIn(function () {
      _that.parent.setSound(_that.parent.data.sndconv);
    });
  },
  initEvent: function () {
    var _that = this;
    $("ARTICLE .submitBtn").click(function () {
      _that.parent.loadPart3();
    });
  },
  loadContent: function () {
    this.parent.contentObj.html($("#tpl-part2").html());
    $("ARTICLE .objectifText").html(this.parent.data.conversion);
    $("#conversionList").append(this.parent.elementConversionObj.clone());
    checkScrollBar();
  },
};
document.app.contentP3 = {
  parent: null,
  dragObj: null,
  desserteLoaded: false,
  elementObj: null,
  moneyObj: null,
  moneyObj2: null,
  moneyBtn: null,
  init: function (parent) {
    var _that = this;
    this.parent = parent;
    this.desserteLoaded = false;
    this.loadContent();
    this.initEvent();
    this.setDroppable();
    this.parent.contentObj.fadeIn(function () {
      _that.parent.setSound(_that.parent.data.objectif[_that.parent.lvl].snd);
    });
    this.parent.currScores.data[0].resetTime();
  },
  initEvent: function () {
    var _that = this;
    $("#exRule").click(function (e) {
      _that.parent.currScores.data[0].nbconv++;
      new Popin(_that.parent.elementConversionObj[0].outerHTML);
    });
    $("#exCommand").click(function (e) {
      _that.parent.currScores.data[0].nbobj++;
      new Popin(_that.parent.elementObjectifObj[0].outerHTML);
    });
    $("#exValid").click(function (e) {
      _that.showResult();
    });
  },
  loadContent: function () {
    var _that = this;
    this.parent.contentObj.html($("#tpl-part3").html());
    $("ARTICLE .objectifText").html(
      this.parent.data.objectif[this.parent.lvl].txt
    );
    $("#desserte .title").html(this.parent.data.target);
    $("#desserteBg").css(
      "background-image",
      'url("upload/exercice/ex' + this.parent.num + '/home.jpg")'
    );
    $(".submitBtn").prepend(
      '<input style="background-color: #0e5dd4;" class="hvr-back-pulse blue" id="exMoney" type="button" value="REVOIR LES PIECES">'
    );
    $("#checkout .arrow").hide();
    this.dragObj = $(".exDrag.sel1 .allElements");
    this.elementObj = $(".exDrag.sel2");
    this.moneyObj = $(".exDrag.sel3");
    this.moneyObj2 = $(".exDrag.sel4");
    this.moneyBtn = $("#exMoney");
    $("#checkout").show();
    if (_that.parent.lvl == "niveau 1") {
      this.moneyBtn.hide();
      $("#checkout").hide();
    }
    this.moneyBtn.click(function () {
      _that.moneyObj.hide();
      _that.moneyObj2.hide();
      _that.elementObj.hide();
      _that.dragObj.empty();
      $("#checkout SPAN").empty();
      $("#checkout .arrow").hide();
      checkScrollBar();
      switch (_that.parent.lvl) {
        case "niveau 1":
          break;
        case "niveau 2":
          _that.moneyObj.show();
          break;
        case "niveau 3":
          _that.moneyObj2.show();
          break;
      }
    });
    switch (this.parent.lvl) {
      case "niveau 1":
        this.elementObj.eq(0).show();
        this.loadElement();
        break;
      case "niveau 2":
        this.moneyObj.show();
        this.loadMoney();
        break;
      case "niveau 3":
        this.moneyObj2.show();
        this.loadMoney();
        this.loadMoney2();
        break;
    }
    checkScrollBar();
  },
  loadElement: function (selectedId) {
    var _that = this;
    var arr = [];
    for (var w = 0; w < this.parent.dataSize; w++) {
      if (this.parent.lvl != "niveau 1") arr.push(w);
      else {
        if (!this.parent.data.parts[w].fake) arr.push(w);
      }
      if (!this.parent.data.parts[w].fake && !this.desserteLoaded)
        $("#desserte").append(
          '<div class="drop drop' + this.parent.data.parts[w].id + '"></div>'
        );
    }
    arr.shuffle();
    this.desserteLoaded = true;
    this.elementObj.empty();
    for (var w = 0; w < arr.length; w++) {
      var isFake = this.parent.data.parts[arr[w]].fake ? 'fake="fake"' : "";
      this.elementObj
        .eq(parseInt(w / this.parent.nbMaxValid))
        .append(
          "<img " +
            isFake +
            ' realId="' +
            this.parent.data.parts[arr[w]].id +
            '" src="upload/exercice/ex' +
            this.parent.num +
            "/lvl2/" +
            this.parent.data.parts[arr[w]].id +
            '.png" title="' +
            this.parent.data.parts[arr[w]].txt2 +
            '"/>'
        );
    }
    this.elementObj.find("IMG").click(function () {
      var currImg = $(this);
      var targetId;
      if (_that.parent.data.parts[currImg.attr("realId") - 1].assoc1) {
        targetId =
          _that.parent.data.parts[currImg.attr("realId") - 1].assoc1[0];
      } else {
        targetId = currImg.attr("realId");
      }
      $(".exDrag.sel2 IMG").removeClass("clicked");
      currImg.addClass("clicked");
      if (
        currImg.attr("fake") == "fake" ||
        (selectedId && selectedId != targetId)
      )
        _that.dragObj.empty();
      else {
        var item = _that.whatCanBuy(2);
        if (!item) {
          $("#checkout SPAN").eq(2).append($(this).clone());
        }
        _that.addPart(targetId);
      }
    });
  },
  whatCanBuy: function (lvl) {
    var assoc = lvl - 1;
    var current = $.map(
      $("#checkout SPAN")
        .eq(4 - lvl)
        .find("IMG"),
      function (value) {
        return parseInt($(value).attr("realId"));
      }
    );
    current.sort();
    for (var w = 0; w < this.parent.dataSize; w++) {
      var part = this.parent.data.parts[w];
      if (part.fake) continue;
      var ids = part["assoc" + assoc];
      if (!ids) ids = [part.id];
      if (ids.equals(current)) {
        return part.id;
      }
    }
    return null;
  },
  loadMoney: function () {
    var _that = this;
    var arr = [];
    for (var w = 0; w < this.parent.dataSize; w++) {
      if (!this.parent.data.parts[w].txt3) break;
      arr.push(w);
    }
    arr.shuffle();
    for (var w = 0; w < arr.length; w++) {
      var img =
        '<img realId="' +
        this.parent.data.parts[arr[w]].id +
        '" src="upload/exercice/ex' +
        this.parent.num +
        "/lvl3/" +
        this.parent.data.parts[arr[w]].id +
        '.png" title="' +
        this.parent.data.parts[arr[w]].txt3 +
        '">';
      if (arr.length < 6) {
        this.moneyObj.eq(0).append(img);
      } else {
        this.moneyObj.eq(parseInt(w % 3)).append(img);
      }
    }
    this.moneyObj.find("IMG").click(function () {
      if ($(this).attr("fake")) return;
      $("#checkout SPAN").eq(1).append($(this).clone());
      var item = _that.whatCanBuy(3);
      if (item) {
        _that.loadElement(item);
        _that.moneyObj.hide();
        _that.elementObj.show();
        _that.moneyBtn.show();
        $("#checkout .arrow").eq(1).show();
        checkScrollBar();
      }
    });
  },
  loadMoney2: function () {
    var _that = this;
    var arr = [];
    for (var w = 0; w < this.parent.dataSize; w++) {
      if (!this.parent.data.parts[w].txt4) break;
      arr.push(w);
    }
    arr.shuffle();
    for (var w = 0; w < arr.length; w++) {
      var img =
        '<img realId="' +
        this.parent.data.parts[arr[w]].id +
        '" src="upload/exercice/ex' +
        this.parent.num +
        "/lvl4/" +
        this.parent.data.parts[arr[w]].id +
        '.png" title="' +
        this.parent.data.parts[arr[w]].txt4 +
        '">';
      if (arr.length < 6) {
        this.moneyObj2.eq(0).append(img);
      } else {
        this.moneyObj2.eq(parseInt(w % 3)).append(img);
      }
    }
    this.moneyObj2.find("IMG").click(function () {
      $("#checkout SPAN").eq(0).append($(this).clone());
      var item = _that.whatCanBuy(4);
      if (item) {
        var ids = _that.parent.data.parts[item - 1].assoc2;
        if (!ids) ids = [item];
        _that.moneyObj.find("IMG").attr("fake", "fake");
        $.each(ids, function (index, value) {
          _that.moneyObj.find("[realId='" + value + "']").removeAttr("fake");
        });
        $("#checkout .arrow").eq(0).show();
        _that.moneyObj.show();
        _that.moneyObj2.hide();
        _that.moneyBtn.show();
        checkScrollBar();
      }
    });
  },
  addPart: function (realId) {
    var arr = [];
    for (var w = 0; w < this.parent.dataSize; w++) arr.push(w);
    arr.shuffle();
    this.dragObj.hide().empty();
    for (var w = 0; w < arr.length; w++) {
      if (!this.parent.data.parts[arr[w]].fake)
        this.dragObj.append(
          this.partLine(this.parent.num, this.parent.data.parts[arr[w]], realId)
        );
    }
    this.dragObj.fadeIn(777);
    this.setDraggable();
  },
  partLine: function (ex, obj, realId) {
    var clss = "";
    if (realId == obj.id) clss = 'class="acceptable"';
    return (
      '<img obj="' +
      obj.id +
      '" ' +
      clss +
      ' src="upload/exercice/ex' +
      ex +
      "/lvl1/" +
      obj.id +
      '.png" title="' +
      obj.txt +
      '"/>'
    );
  },
  showResult: function () {
    var _that = this;
    var tab = '<div class="title">Résultat</div><table>';
    var good = true;
    var container = $('<div class="container"></div>');
    for (var w = 0; w < this.parent.dataSize; w++) {
      if (!this.parent.data.parts[w].fake) {
        var nbok = this.parent.data.parts[w].nbok;
        var nbset = $(
          "#desserte .drop" + this.parent.data.parts[w].id + " .newObj"
        ).length;
        var clss = "red";
        if (nbok == nbset) {
          clss = "green";
        } else {
          good = false;
        }
        var txt;
        if (this.parent.data.parts[w].nbok == 1) {
          txt = this.parent.data.parts[w].txt;
        } else {
          txt = this.parent.data.parts[w].txts;
        }
        tab +=
          '<tr><td class="' +
          clss +
          '">' +
          nbset +
          '</td><td> > </td><td class="green">' +
          nbok +
          '</td><td><img src="upload/exercice/ex' +
          this.parent.num +
          "/lvl1/" +
          this.parent.data.parts[w].id +
          '.png" title="' +
          this.parent.data.parts[w].txt +
          '"></td><td>' +
          txt +
          "</td></tr>";
      }
    }
    var closeBtn = $(
      '<div class="submitBtn"><input class="hvr-back-pulse" type="button" value="REVENIR À L\'EXERCICE"/></div>'
    );
    closeBtn.find("INPUT").click(function () {
      $("#result").fadeOut(function () {
        $("#exercice").show();
        checkScrollBar();
      });
      _that.parent.setSound(
        _that.parent.data.objectif[_that.parent.lvl].snd,
        true
      );
    });
    if (good) closeBtn = "";
    container
      .append(
        '<div class="containerBg" style="background-image:url(upload/exercice/' +
          this.parent.data.title +
          '.jpg)"></div>'
      )
      .append(tab + "<table>")
      .append(
        '<div class="message ' +
          (good ? "green" : "red") +
          '">' +
          (good ? this.parent.data.msgok : this.parent.data.msgko) +
          "</div>"
      )
      .append(closeBtn);
    this.parent.currScores.data[0].nbtry++;
    if (good) {
      this.parent.currScores.data[0].timer();
      document.app.AllScores.add(this.parent.currScores);
      logger(this.parent.currScores);
      container.append(
        '<DIV class="resDetail"><b>' +
          this.parent.currScores.data[0].nbtry +
          "</b>&nbsp;essai(s) en&nbsp;<b>" +
          this.parent.currScores.data[0].getTime() +
          "</b> - <b>" +
          this.parent.currScores.data[0].nbconv +
          "</b>&nbsp;règle(s) - <b>" +
          this.parent.currScores.data[0].nbobj +
          "</b>&nbsp;commande(s)</div>"
      );
    }
    $("#result").empty().append(container);
    $("#exercice").fadeOut(function () {
      $("#exercice").hide();
      checkScrollBar();
      $("#result").fadeIn();
    });
    this.parent.setSound(
      good ? this.parent.data.sndok : this.parent.data.sndko
    );
  },
  setDraggable: function () {
    $(".exDrag.sel1 IMG").draggable({
      revert: "invalid",
      helper: "clone",
      start: function (event, ui) {
        ui.helper.css("z-index", 10);
      },
    });
  },
  setDroppable: function () {
    $("#desserte").droppable({
      hoverClass: "highlight",
      accept: ".exDrag.sel1 IMG.acceptable",
      drop: function (e, ui) {
        var addObj = $(ui.draggable[0].outerHTML),
          newObj = $(
            '<div obj="' +
              $(ui.draggable[0]).attr("obj") +
              '" title="supprimer" class="newObj"></div>'
          );
        newObj
          .attr("style", "background-image: url(" + addObj.attr("src") + ")")
          .click(function () {
            $(this).remove();
          });
        $("#desserte .drop" + $(ui.draggable[0]).attr("obj")).append(newObj);
      },
    });
  },
};
document.app.contentQuizz = {
  parent: null,
  init: function (parent) {
    var _that = this;
    this.parent = parent;
    this.parent.quizzStep = 0;
    this.parent.currScores = new Scores(this.parent.num, this.parent.lvl);
    logger("Scores data");
    logger(this.parent.currScores);
    this.parent.loadCommon();
    this.loadContent();
    this.initEvent();
    this.parent.contentObj.fadeIn(function () {
      _that.parent.setSound(_that.parent.data.objectif[_that.parent.lvl].snd);
    });
  },
  initEvent: function () {
    var _that = this;
    this.parent.contentObj
      .find("INPUT")
      .eq(0)
      .click(function () {
        _that.loadRandom(0);
      });
    this.parent.contentObj
      .find("INPUT")
      .eq(1)
      .click(function () {
        _that.loadRandom(1);
      });
  },
  loadRandom: function (type) {
    this.parent.quizzType = type;
    this.parent.quizzData =
      this.parent.data.objectif[this.parent.lvl][this.parent.quizzType];
    this.parent.quizzSize = Object.keys(this.parent.quizzData).length;
    this.parent.quizzRdm = [];
    for (var w = 0; w < this.parent.quizzSize; w++)
      this.parent.quizzRdm.push(w);
    this.parent.quizzRdm.shuffle();
    this.parent.loadPartQuizz1();
  },
  loadContent: function () {
    var _that = this;
    this.parent.contentObj.html($("#tpl-quizz").html());
    this.parent.contentObj
      .find("h3")
      .html(_that.parent.data.objectif[_that.parent.lvl].title);
    this.parent.contentObj
      .find(".msgIntro")
      .html(_that.parent.data.objectif[_that.parent.lvl].txt);
    checkScrollBar();
  },
};
document.app.contentQuizz1 = {
  parent: null,
  quizzNum: null,
  quizzTry: 0,
  answered: false,
  maxTry: 3,
  currScore: null,
  nbconv: 0,
  nbobj: 0,
  init: function (parent) {
    var _that = this;
    this.parent = parent;
    this.quizzNum = this.parent.quizzRdm[this.parent.quizzStep];
    this.currScore = new Score();
    logger("step [" + this.parent.quizzStep + "] - id [" + this.quizzNum + "]");
    this.resetQuizz();
    this.loadContent();
    this.initEvent();
    this.parent.contentObj.fadeIn(function () {
      _that.parent.setSound(_that.parent.quizzData[_that.quizzNum].snd);
    });
  },
  initEvent: function () {
    var _that = this;
    $(".choix DIV").click(function () {
      _that.checkAnswer($(this));
    });
    $("#exValid").click(function () {
      _that.parent.quizzStep++;
      logger(
        "Quizz [  " +
          _that.parent.quizzStep +
          " / " +
          _that.parent.quizzSize +
          " ]"
      );
      _that.parent.currScores.add(_that.currScore);
      if (_that.parent.quizzStep >= _that.parent.quizzSize)
        _that.parent.loadPartQuizz2();
      else _that.parent.loadPartQuizz1();
    });
    $("#exRule").click(function (e) {
      _that.nbconv++;
      new Popin(_that.parent.elementConversionObj[0].outerHTML);
    });
    $("#exCommand").click(function (e) {
      _that.nbobj++;
      new Popin(_that.parent.elementObjectifObj[0].outerHTML);
    });
  },
  resetQuizz: function () {
    this.quizzTry = 0;
    this.answered = false;
    this.maxTry = 3;
    this.nbconv = 0;
    this.nbobj = 0;
  },
  loadContent: function () {
    var _that = this;
    this.parent.contentObj.html($("#tpl-quizz1").html());
    this.parent.contentObj
      .find("h3")
      .html(
        "Question " +
          (_that.parent.quizzStep + 1) +
          " / " +
          _that.parent.quizzSize
      );
    this.parent.contentObj
      .find(".msgIntro")
      .html(_that.parent.quizzData[_that.quizzNum].txt);
    _that.currScore.txt = _that.parent.quizzData[_that.quizzNum].txt;
    logger(_that.parent.quizzData[_that.quizzNum].choice);
    _that.loadChoice(_that.parent.quizzData[_that.quizzNum].choice);
    checkScrollBar();
  },
  getVraiFauxStr: function (curr, good) {
    return (
      '<div class="' +
      (curr ? "V" : "F") +
      '" style="display:none" ' +
      good +
      ">" +
      (curr ? "Vrai" : "Faux") +
      "</div>"
    );
  },
  loadChoice: function (choice) {
    var target = this.parent.contentObj.find(".choix");
    var good = 'good="true"';
    var allChoice = [];
    var cond;
    switch (choice.type) {
      case "tf-number":
      case "tf-compare":
      case "tf-exist":
      case "tf-notexist":
      case "tf-total":
        switch (choice.type) {
          case "tf-number":
            cond = this.parent.data.parts[choice.id - 1].nbok == choice.value;
            break;
          case "tf-compare":
            cond = choice.id1 == choice.id2;
            break;
          case "tf-exist":
            cond = choice.id <= this.parent.nbMaxValid;
            break;
          case "tf-notexist":
            cond = choice.id > this.parent.nbMaxValid;
            break;
          case "tf-total":
            var total = 0;
            for (var l = 0; l < this.parent.dataSize; l++)
              total += this.parent.data.parts[l].nbok;
            cond = total == choice.value;
            break;
        }
        allChoice = [cond, !cond];
        target.append(this.getVraiFauxStr(allChoice[0], good));
        target.append(this.getVraiFauxStr(allChoice[1], ""));
        break;
      case "number":
        var nbok = this.parent.data.parts[choice.id - 1].nbok;
        allChoice = [nbok];
        var toAdd = 0;
        for (var f = 0; f < this.parent.nbMaxValid - 1; f++) {
          toAdd = Math.floor(Math.random() * 2) ? nbok + f + 1 : nbok - f + 1;
          !allChoice.inArray(toAdd) && toAdd > 0 ? allChoice.push(toAdd) : f--;
        }
        for (var g = 0; g < allChoice.length; g++) {
          if (g > 0) good = "";
          target.append(
            '<div style="display:none" ' + good + ">" + allChoice[g] + "</div>"
          );
        }
        target.addClass("NUM");
        break;
      default:
        allChoice = [choice.id];
        for (var f = 1; f < this.parent.nbMaxValid + 1; f++) {
          if ($.inArray(f, allChoice) == -1) allChoice.push(f);
        }
        for (var g = 0; g < this.parent.nbMaxValid; g++) {
          if (g > 0) good = "";
          target.append(
            '<div style="display:none" ' +
              good +
              '><img src="upload/exercice/ex' +
              this.parent.num +
              "/" +
              choice.img +
              "/" +
              allChoice[g] +
              '.png"></div>'
          );
        }
        break;
    }
    var target = target.find("DIV");
    this.currScore.htmlok = target.eq(0).html();
    var nbDiv = target.length;
    for (var i = 0; i < target.length; i++) {
      var t1 = Math.floor(Math.random() * nbDiv - 1) + 1;
      var t2 = Math.floor(Math.random() * nbDiv - 1) + 1;
      target.eq(t1).before(target.eq(t2));
    }
    target.fadeIn();
  },
  checkAnswer: function (obj) {
    if (this.answered) return false;
    this.parent.contentObj.find(".choix DIV").removeClass("ko");
    this.quizzTry++;
    if (obj.attr("good") != "true") {
      if (this.quizzTry >= this.maxTry || this.parent.quizzType == 1) {
        this.setAnswered();
        this.currScore.htmlko = obj.html();
      }
      $("ARTICLE .resultat .txt")
        .hide()
        .removeClass("ok")
        .addClass("ko")
        .html(this.answered ? "Raté" : "Recommence")
        .fadeIn(1000);
      obj.addClass("ko");
    } else {
      $("ARTICLE .resultat .txt")
        .hide()
        .removeClass("ko")
        .addClass("ok")
        .html("Bravo !")
        .fadeIn(1000);
      obj.addClass("ok");
      this.setAnswered();
      this.parent.currScores.good++;
    }
  },
  setAnswered: function () {
    this.currScore.nbtry = this.quizzTry;
    this.currScore.nbconv = this.nbconv;
    this.currScore.nbobj = this.nbobj;
    this.currScore.timer();
    this.answered = true;
    $("#exValid").show();
  },
};
document.app.contentQuizz2 = {
  parent: null,
  init: function (parent) {
    var _that = this;
    this.parent = parent;
    this.loadContent();
    this.initEvent();
    this.parent.contentObj.fadeIn(function () {
      _that.parent.setSound(
        _that.parent.data.objectif[_that.parent.lvl].intermedsnd
      );
    });
  },
  initEvent: function () {
    var _that = this;
    this.parent.contentObj.find(".msgIntro IMG").click(function () {
      _that.parent.loadPartQuizz3();
    });
  },
  loadContent: function () {
    this.parent.contentObj.html($("#tpl-quizz2").html());
    this.parent.contentObj
      .find("h3")
      .html(this.parent.data.objectif[this.parent.lvl].intermediate);
    this.parent.contentObj
      .find(".msgIntro")
      .html(
        '<img class="intermediate" src="upload/exercice/ex' +
          this.parent.num +
          '/result.png">'
      );
    checkScrollBar();
  },
};
document.app.contentQuizz3 = {
  parent: null,
  bar: null,
  init: function (parent) {
    var _that = this;
    this.parent = parent;
    this.loadContent();
    this.parent.contentObj.fadeIn(function () {
      _that.parent.removeSound();
      _that.bar.animate(
        _that.parent.currScores.good / _that.parent.currScores.total()
      );
    });
  },
  loadContent: function () {
    var resBlock = $("#tpl-quizz3").html();
    this.parent.contentObj
      .empty()
      .append('<h3>Résultats</h3><div id="pBar"></div>');
    this.bar = new ProgressBar.Line("#pBar", {
      strokeWidth: 4,
      easing: "easeInOut",
      duration: 1333,
      color: "#FFEA82",
      trailColor: "#eee",
      trailWidth: 1,
      svgStyle: { width: "100%", height: "100%" },
      text: {
        style: { color: "#006400", padding: 0, margin: 0, transform: null },
        autoStyleContainer: false,
      },
      from: { color: "#FFEA82" },
      to: { color: "#006400" },
      step: function (state, bar) {
        bar.path.setAttribute("stroke", state.color);
        bar.setText("Voici ton score " + Math.round(bar.value() * 100) + " %");
      },
    });
    document.app.AllScores.add(this.parent.currScores);
    logger(this.parent.currScores);
    for (var o = 0; o < this.parent.currScores.data.length; o++) {
      this.parent.contentObj.append("<HR/>");
      var currBlock = $(resBlock).clone();
      currBlock
        .find(".question")
        .html(this.parent.currScores.data[o].txt)
        .append(
          '<DIV class="resDetail"><b>' +
            this.parent.currScores.data[o].nbtry +
            "</b>&nbsp;essai(s) en&nbsp;<b>" +
            this.parent.currScores.data[o].getTime() +
            "</b> - <b>" +
            this.parent.currScores.data[o].nbconv +
            "</b>&nbsp;règle(s) - <b>" +
            this.parent.currScores.data[o].nbobj +
            "</b>&nbsp;commande(s)</div>"
        );
      if (this.parent.currScores.data[o].htmlko == null) {
        currBlock.find(".answer1").html(this.parent.currScores.data[o].htmlok);
        currBlock.find(".answer2").html(this.parent.currScores.data[o].htmlko);
      } else {
        currBlock
          .find(".answer1")
          .addClass("ko")
          .html(this.parent.currScores.data[o].htmlko);
        currBlock
          .find(".answer2")
          .addClass("ok")
          .html(this.parent.currScores.data[o].htmlok);
      }
      if (
        this.parent.currScores.data[o].htmlko == null ||
        this.parent.currScores.data[o].htmlko == ""
      )
        currBlock.find(".answer2").removeClass("answer2");
      this.parent.contentObj.append(currBlock);
    }
    checkScrollBar();
  },
};
document.app.contentUPDATE = {
  parent: null,
  updateEvo: null,
  updateBar: null,
  totalFile: 0,
  dlFiles: 0,
  temporized: [],
  init: function (parent) {
    var _that = this;
    this.parent = parent;
    this.parent.setPageTitle("Téléchargement du site");
    this.loadContent();
    this.parent.contentObj.fadeIn(function () {
      _that.parent.removeSound();
    });
  },
  loadContent: function () {
    this.parent.contentObj.html($("#tpl-update").html());
    if (document.app.vInstall) {
      this.parent.contentObj.find("h3").html("Copie locale de l'application");
      this.parent.contentObj
        .find(".msgIntro")
        .html(
          'Les données vont être copiées localement grâce à la technologie HTML5 "Cache Manifest"<br/>' +
            "Cette technologie permet de stocker localement le contenu d'une application. Celui-ci sera sauvegardé tant que ces données ne sont pas effacées.<br/><br/>" +
            'Une fois téléchargé, l\'application "Cascade" sera disponible hors connexion.'
        );
    } else {
      this.parent.contentObj.find("h3").html("Mise à jour de l'application");
      this.parent.contentObj
        .find(".msgIntro")
        .html(
          'Une mise à jour a été détectée, les données de l\'application vont être copiées localement grâce à la technologie HTML5 "Cache Manifest"<br/>' +
            "Cette technologie permet de stocker localement le contenu d'une application. Celui-ci sera sauvegardé tant que ces données ne sont pas effacées.<br/><br/>" +
            "Merci de patienter."
        );
    }
    this.updateEvo = this.parent.contentObj.find(".updateEvo");
    this.updateBar = this.parent.contentObj.find(".updateBar");
    this.setProgressBar();
    checkScrollBar();
    if (this.temporized.length > 0) {
      this.displayResult(this.temporized[0], this.temporized[1]);
      this.temporized = [];
    }
  },
  setProgressBar: function () {
    this.bar = new ProgressBar.Line(this.updateBar[0], {
      strokeWidth: 4,
      easing: "easeInOut",
      duration: 1333,
      color: "#2098d1",
      trailColor: "#eee",
      trailWidth: 1,
      svgStyle: { width: "100%", height: "100%" },
      text: {
        style: {
          color: "#006400",
          padding: 0,
          margin: 0,
          "text-align": "right",
          "font-size": "2.5vh",
          "line-height": "2.5vh",
          "font-family": "MavenProLight",
          "font-weight": "bold",
          transform: null,
        },
        autoStyleContainer: false,
      },
      from: { color: "#2098d1" },
      to: { color: "#2098d1" },
      step: function (state, bar) {
        bar.path.setAttribute("stroke", state.color);
        bar.setText("Progression : " + Math.round(bar.value() * 100) + " %");
      },
    });
  },
  displayResult: function (msg, css) {
    logger(msg);
    if (!this.updateEvo) {
      this.temporized = [msg, css];
      return false;
    }
    var _that = this;
    this.updateEvo.slideUp(function () {
      _that.updateEvo.addClass("resultUpdate " + css).html(msg);
      _that.updateEvo.slideDown();
    });
    this.updateBar.fadeOut();
  },
  displayProgress: function (value, max) {
    if (this.bar && max && value <= max) this.bar.set(value / max);
  },
};
var appCacheProgress = 0;
var appCacheTotalFile = 0;
var updateIsLoading = false;
var cacheStatus = window.applicationCache.status;
console.log(window.applicationCache);
window.applicationCache.addEventListener(
  "progress",
  function (e) {
    if (
      document.app &&
      document.app.contentUPDATE &&
      document.app.contentUPDATE.displayProgress
    )
      document.app.contentUPDATE.displayProgress(
        appCacheProgress,
        appCacheTotalFile
      );
    appCacheProgress++;
  },
  false
);
$(document).ready(function () {
  if (
    $("html").attr("manifest") == null &&
    window.applicationCache.status != 3
  ) {
    if (cacheStatus == 0) {
      document.app.popin = new Popin(
        "L'application nécessite une connexion internet,<br/>voulez-vous l'enregistrer localement pour y accéder sans connexion ?",
        "info",
        function () {
          document.location = "/?manifest=manifest";
        },
        function () {
          return false;
        }
      );
    }
  } else {
    $.ajax({
      type: "get",
      url: $("html").attr("manifest"),
      dataType: "text",
      cache: false,
      async: true,
      success: function (msg) {
        var msg = msg
          .replace(
            new RegExp(
              "(NETWORK|FALLBACK):" +
                "((?!(NETWORK|FALLBACK|CACHE):)[\\w\\W]*)",
              "gi"
            ),
            ""
          )
          .replace(new RegExp("(CACHE:)|(/cascade.manifest.php)", "g"), "")
          .replace(new RegExp("#[^\\r\\n]*(\\r\\n?|\\n)", "g"), "")
          .replace(new RegExp("CACHE MANIFEST\\s*|\\s*$", "g"), "")
          .replace(new RegExp("[\\r\\n]+", "g"), "#");
        appCacheTotalFile = msg.split("#").length - 3;
        logger("total files = " + appCacheTotalFile);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert(
          "Erreur inconue, veuillez vérifier le fichier : " +
            $("html").attr("manifest")
        );
      },
    });
    $(window.applicationCache).bind("checking", function (event) {
      console.log("Recherche de mise à jour");
    });
    $(window.applicationCache).bind("downloading", function (event) {
      console.log("Début du téléchargement de la mise à jour");
    });
    $(window.applicationCache).bind("cached", function (event) {
      document.app.contentUPDATE.displayResult(
        "Le site a été correctement téléchargé",
        "ok"
      );
    });
    $(window.applicationCache).bind("updateready", function (event) {
      document.app.contentUPDATE.displayResult(
        "Le site a été mis à jour",
        "ok"
      );
    });
    $(window.applicationCache).bind("obsolete", function (event) {
      document.app.contentUPDATE.displayResult(
        "Référence à la mise à jour non trouvée",
        "ko"
      );
    });
    $(window.applicationCache).bind("error", function (event) {
      document.app.contentUPDATE.displayResult("Une erreur est survenue", "ko");
    });
  }
});
