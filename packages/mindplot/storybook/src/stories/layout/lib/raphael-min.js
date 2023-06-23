!(function (t, e) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = e())
    : typeof define === 'function' && define.amd
    ? define([], e)
    : typeof exports === 'object'
    ? (exports.Raphael = e())
    : (t.Raphael = e());
})(window, () =>
  (function (t) {
    const e = {};
    function r(i) {
      if (e[i]) return e[i].exports;
      const n = (e[i] = { i, l: !1, exports: {} });
      return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (r.r = function (t) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && typeof t === 'object' && t && t.__esModule) return t;
        const i = Object.create(null);
        if (
          (r.r(i),
          Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
          2 & e && typeof t !== 'string')
        )
          for (const n in t) r.d(i, n, ((e) => t[e]).bind(null, n));
        return i;
      }),
      (r.n = function (t) {
        const e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, 'a', e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = ''),
      r((r.s = 1))
    );
  })([
    function (t, e, r) {
      let i;
      let n;
      (i = [r(2)]),
        void 0 ===
          (n = function (t) {
            function e(i) {
              if (e.is(i, 'function')) return r ? i() : t.on('raphael.DOMload', i);
              if (e.is(i, A)) return e._engine.create[c](e, i.splice(0, 3 + e.is(i[0], T))).add(i);
              const n = Array.prototype.slice.call(arguments, 0);
              if (e.is(n[n.length - 1], 'function')) {
                const a = n.pop();
                return r
                  ? a.call(e._engine.create[c](e, n))
                  : t.on('raphael.DOMload', () => {
                      a.call(e._engine.create[c](e, n));
                    });
              }
              return e._engine.create[c](e, arguments);
            }
            (e.version = '2.3.0'), (e.eve = t);
            let r;
            let i;
            const n = /[, ]+/;
            const a = {
              circle: 1,
              rect: 1,
              path: 1,
              ellipse: 1,
              text: 1,
              image: 1,
            };
            const s = /\{(\d+)\}/g;
            const o = 'hasOwnProperty';
            const l = { doc: document, win: window };
            const h = { was: Object.prototype[o].call(l.win, 'Raphael'), is: l.win.Raphael };
            const u = function () {
              this.ca = this.customAttributes = {};
            };
            var c = 'apply';
            const f = 'concat';
            const p =
              'ontouchstart' in window ||
              window.TouchEvent ||
              (window.DocumentTouch && document instanceof DocumentTouch);
            const d = '';
            const g = ' ';
            const x = String;
            const v = 'split';
            const y =
              'click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel'[
                v
              ](g);
            const m = { mousedown: 'touchstart', mousemove: 'touchmove', mouseup: 'touchend' };
            const b = x.prototype.toLowerCase;
            const _ = Math;
            const w = _.max;
            const k = _.min;
            const B = _.abs;
            const C = _.pow;
            const S = _.PI;
            var T = 'number';
            var A = 'array';
            const M = Object.prototype.toString;
            const E =
              ((e._ISURL = /^url\(['"]?(.+?)['"]?\)$/i),
              /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i);
            const N = { NaN: 1, Infinity: 1, '-Infinity': 1 };
            const L = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/;
            const P = _.round;
            const z = parseFloat;
            const F = parseInt;
            const R = x.prototype.toUpperCase;
            const j = (e._availableAttrs = {
              'arrow-end': 'none',
              'arrow-start': 'none',
              blur: 0,
              'clip-rect': '0 0 1e9 1e9',
              cursor: 'default',
              cx: 0,
              cy: 0,
              fill: '#fff',
              'fill-opacity': 1,
              font: '10px "Arial"',
              'font-family': '"Arial"',
              'font-size': '10',
              'font-style': 'normal',
              'font-weight': 400,
              gradient: 0,
              height: 0,
              href: 'http://raphaeljs.com/',
              'letter-spacing': 0,
              opacity: 1,
              path: 'M0,0',
              r: 0,
              rx: 0,
              ry: 0,
              src: '',
              stroke: '#000',
              'stroke-dasharray': '',
              'stroke-linecap': 'butt',
              'stroke-linejoin': 'butt',
              'stroke-miterlimit': 0,
              'stroke-opacity': 1,
              'stroke-width': 1,
              target: '_blank',
              'text-anchor': 'middle',
              title: 'Raphael',
              transform: '',
              width: 0,
              x: 0,
              y: 0,
              class: '',
            });
            const I = (e._availableAnimAttrs = {
              blur: T,
              'clip-rect': 'csv',
              cx: T,
              cy: T,
              fill: 'colour',
              'fill-opacity': T,
              'font-size': T,
              height: T,
              opacity: T,
              path: 'path',
              r: T,
              rx: T,
              ry: T,
              stroke: 'colour',
              'stroke-opacity': T,
              'stroke-width': T,
              transform: 'transform',
              width: T,
              x: T,
              y: T,
            });
            const D =
              /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/;
            const q = { hs: 1, rg: 1 };
            const O = /,?([achlmqrstvxz]),?/gi;
            const V =
              /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi;
            const W =
              /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi;
            const Y =
              /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi;
            const G =
              ((e._radial_gradient =
                /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
              {});
            const H = function (t, e) {
              return z(t) - z(e);
            };
            const X = function (t) {
              return t;
            };
            const U = (e._rectPath = function (t, e, r, i, n) {
              return n
                ? [
                    ['M', t + n, e],
                    ['l', r - 2 * n, 0],
                    ['a', n, n, 0, 0, 1, n, n],
                    ['l', 0, i - 2 * n],
                    ['a', n, n, 0, 0, 1, -n, n],
                    ['l', 2 * n - r, 0],
                    ['a', n, n, 0, 0, 1, -n, -n],
                    ['l', 0, 2 * n - i],
                    ['a', n, n, 0, 0, 1, n, -n],
                    ['z'],
                  ]
                : [['M', t, e], ['l', r, 0], ['l', 0, i], ['l', -r, 0], ['z']];
            });
            const $ = function (t, e, r, i) {
              return (
                i == null && (i = r),
                [
                  ['M', t, e],
                  ['m', 0, -i],
                  ['a', r, i, 0, 1, 1, 0, 2 * i],
                  ['a', r, i, 0, 1, 1, 0, -2 * i],
                  ['z'],
                ]
              );
            };
            const Z = (e._getPath = {
              path(t) {
                return t.attr('path');
              },
              circle(t) {
                const e = t.attrs;
                return $(e.cx, e.cy, e.r);
              },
              ellipse(t) {
                const e = t.attrs;
                return $(e.cx, e.cy, e.rx, e.ry);
              },
              rect(t) {
                const e = t.attrs;
                return U(e.x, e.y, e.width, e.height, e.r);
              },
              image(t) {
                const e = t.attrs;
                return U(e.x, e.y, e.width, e.height);
              },
              text(t) {
                const e = t._getBBox();
                return U(e.x, e.y, e.width, e.height);
              },
              set(t) {
                const e = t._getBBox();
                return U(e.x, e.y, e.width, e.height);
              },
            });
            const Q = (e.mapPath = function (t, e) {
              if (!e) return t;
              let r;
              let i;
              let n;
              let a;
              let s;
              let o;
              let l;
              for (n = 0, s = (t = Tt(t)).length; n < s; n++)
                for (a = 1, o = (l = t[n]).length; a < o; a += 2)
                  (r = e.x(l[a], l[a + 1])), (i = e.y(l[a], l[a + 1])), (l[a] = r), (l[a + 1] = i);
              return t;
            });
            if (
              ((e._g = l),
              (e.type =
                l.win.SVGAngle ||
                l.doc.implementation.hasFeature(
                  'http://www.w3.org/TR/SVG11/feature#BasicStructure',
                  '1.1',
                )
                  ? 'SVG'
                  : 'VML'),
              e.type == 'VML')
            ) {
              let J;
              let K = l.doc.createElement('div');
              if (
                ((K.innerHTML = '<v:shape adj="1"/>'),
                ((J = K.firstChild).style.behavior = 'url(#default#VML)'),
                !J || typeof J.adj !== 'object')
              )
                return (e.type = d);
              K = null;
            }
            function tt(t) {
              if (typeof t === 'function' || Object(t) !== t) return t;
              const e = new t.constructor();
              for (const r in t) t[o](r) && (e[r] = tt(t[r]));
              return e;
            }
            (e.svg = !(e.vml = e.type == 'VML')),
              (e._Paper = u),
              (e.fn = i = u.prototype = e.prototype),
              (e._id = 0),
              (e.is = function (t, e) {
                return (e = b.call(e)) == 'finite'
                  ? !N[o](+t)
                  : e == 'array'
                  ? t instanceof Array
                  : (e == 'null' && t === null) ||
                    (e === typeof t && t !== null) ||
                    (e == 'object' && t === Object(t)) ||
                    (e == 'array' && Array.isArray && Array.isArray(t)) ||
                    M.call(t).slice(8, -1).toLowerCase() == e;
              }),
              (e.angle = function (t, r, i, n, a, s) {
                if (a == null) {
                  const o = t - i;
                  const l = r - n;
                  return o || l ? (180 + (180 * _.atan2(-l, -o)) / S + 360) % 360 : 0;
                }
                return e.angle(t, r, a, s) - e.angle(i, n, a, s);
              }),
              (e.rad = function (t) {
                return ((t % 360) * S) / 180;
              }),
              (e.deg = function (t) {
                return Math.round((((180 * t) / S) % 360) * 1e3) / 1e3;
              }),
              (e.snapTo = function (t, r, i) {
                if (((i = e.is(i, 'finite') ? i : 10), e.is(t, A))) {
                  for (let n = t.length; n--; ) if (B(t[n] - r) <= i) return t[n];
                } else {
                  const a = r % (t = +t);
                  if (a < i) return r - a;
                  if (a > t - i) return r - a + t;
                }
                return r;
              });
            let et;
            let rt;
            e.createUUID =
              ((et = /[xy]/g),
              (rt = function (t) {
                const e = (16 * _.random()) | 0;
                return (t == 'x' ? e : (3 & e) | 8).toString(16);
              }),
              function () {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(et, rt).toUpperCase();
              });
            e.setWindow = function (r) {
              t('raphael.setWindow', e, l.win, r),
                (l.win = r),
                (l.doc = l.win.document),
                e._engine.initWin && e._engine.initWin(l.win);
            };
            var it = function (t) {
              if (e.vml) {
                let r;
                const i = /^\s+|\s+$/g;
                try {
                  const n = new ActiveXObject('htmlfile');
                  n.write('<body>'), n.close(), (r = n.body);
                } catch (t) {
                  r = createPopup().document.body;
                }
                const a = r.createTextRange();
                it = ht((t) => {
                  try {
                    r.style.color = x(t).replace(i, d);
                    let e = a.queryCommandValue('ForeColor');
                    return `#${`000000${(e =
                      ((255 & e) << 16) | (65280 & e) | ((16711680 & e) >>> 16)).toString(
                      16,
                    )}`.slice(-6)}`;
                  } catch (t) {
                    return 'none';
                  }
                });
              } else {
                const s = l.doc.createElement('i');
                (s.title = 'Raphaël Colour Picker'),
                  (s.style.display = 'none'),
                  l.doc.body.appendChild(s),
                  (it = ht(
                    (t) => (
                      (s.style.color = t),
                      l.doc.defaultView.getComputedStyle(s, d).getPropertyValue('color')
                    ),
                  ));
              }
              return it(t);
            };
            const nt = function () {
              return `hsb(${[this.h, this.s, this.b]})`;
            };
            const at = function () {
              return `hsl(${[this.h, this.s, this.l]})`;
            };
            const st = function () {
              return this.hex;
            };
            const ot = function (t, r, i) {
              if (
                (r == null &&
                  e.is(t, 'object') &&
                  'r' in t &&
                  'g' in t &&
                  'b' in t &&
                  ((i = t.b), (r = t.g), (t = t.r)),
                r == null && e.is(t, 'string'))
              ) {
                const n = e.getRGB(t);
                (t = n.r), (r = n.g), (i = n.b);
              }
              return (t > 1 || r > 1 || i > 1) && ((t /= 255), (r /= 255), (i /= 255)), [t, r, i];
            };
            const lt = function (t, r, i, n) {
              const a = {
                r: (t *= 255),
                g: (r *= 255),
                b: (i *= 255),
                hex: e.rgb(t, r, i),
                toString: st,
              };
              return e.is(n, 'finite') && (a.opacity = n), a;
            };
            function ht(t, e, r) {
              return function i() {
                const n = Array.prototype.slice.call(arguments, 0);
                const a = n.join('␀');
                const s = (i.cache = i.cache || {});
                const l = (i.count = i.count || []);
                return s[o](a)
                  ? ((function (t, e) {
                      for (let r = 0, i = t.length; r < i; r++)
                        if (t[r] === e) return t.push(t.splice(r, 1)[0]);
                    })(l, a),
                    r ? r(s[a]) : s[a])
                  : (l.length >= 1e3 && delete s[l.shift()],
                    l.push(a),
                    (s[a] = t[c](e, n)),
                    r ? r(s[a]) : s[a]);
              };
            }
            (e.color = function (t) {
              let r;
              return (
                e.is(t, 'object') && 'h' in t && 's' in t && 'b' in t
                  ? ((r = e.hsb2rgb(t)), (t.r = r.r), (t.g = r.g), (t.b = r.b), (t.hex = r.hex))
                  : e.is(t, 'object') && 'h' in t && 's' in t && 'l' in t
                  ? ((r = e.hsl2rgb(t)), (t.r = r.r), (t.g = r.g), (t.b = r.b), (t.hex = r.hex))
                  : (e.is(t, 'string') && (t = e.getRGB(t)),
                    e.is(t, 'object') && 'r' in t && 'g' in t && 'b' in t
                      ? ((r = e.rgb2hsl(t)),
                        (t.h = r.h),
                        (t.s = r.s),
                        (t.l = r.l),
                        (r = e.rgb2hsb(t)),
                        (t.v = r.b))
                      : ((t = { hex: 'none' }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1)),
                (t.toString = st),
                t
              );
            }),
              (e.hsb2rgb = function (t, e, r, i) {
                let n;
                let a;
                let s;
                let o;
                let l;
                return (
                  this.is(t, 'object') &&
                    'h' in t &&
                    's' in t &&
                    'b' in t &&
                    ((r = t.b), (e = t.s), (i = t.o), (t = t.h)),
                  (o = (l = r * e) * (1 - B(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
                  (n = a = s = r - l),
                  lt(
                    (n += [l, o, 0, 0, o, l][(t = ~~t)]),
                    (a += [o, l, l, o, 0, 0][t]),
                    (s += [0, 0, o, l, l, o][t]),
                    i,
                  )
                );
              }),
              (e.hsl2rgb = function (t, e, r, i) {
                let n;
                let a;
                let s;
                let o;
                let l;
                return (
                  this.is(t, 'object') &&
                    'h' in t &&
                    's' in t &&
                    'l' in t &&
                    ((r = t.l), (e = t.s), (t = t.h)),
                  (t > 1 || e > 1 || r > 1) && ((t /= 360), (e /= 100), (r /= 100)),
                  (o =
                    (l = 2 * e * (r < 0.5 ? r : 1 - r)) *
                    (1 - B(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
                  (n = a = s = r - l / 2),
                  lt(
                    (n += [l, o, 0, 0, o, l][(t = ~~t)]),
                    (a += [o, l, l, o, 0, 0][t]),
                    (s += [0, 0, o, l, l, o][t]),
                    i,
                  )
                );
              }),
              (e.rgb2hsb = function (t, e, r) {
                let i;
                let n;
                return (
                  (t = (r = ot(t, e, r))[0]),
                  (e = r[1]),
                  (r = r[2]),
                  {
                    h:
                      (((((n = (i = w(t, e, r)) - k(t, e, r)) == 0
                        ? null
                        : i == t
                        ? (e - r) / n
                        : i == e
                        ? (r - t) / n + 2
                        : (t - e) / n + 4) +
                        360) %
                        6) *
                        60) /
                      360,
                    s: n == 0 ? 0 : n / i,
                    b: i,
                    toString: nt,
                  }
                );
              }),
              (e.rgb2hsl = function (t, e, r) {
                let i;
                let n;
                let a;
                let s;
                return (
                  (t = (r = ot(t, e, r))[0]),
                  (e = r[1]),
                  (r = r[2]),
                  (i = ((n = w(t, e, r)) + (a = k(t, e, r))) / 2),
                  {
                    h:
                      (((((s = n - a) == 0
                        ? null
                        : n == t
                        ? (e - r) / s
                        : n == e
                        ? (r - t) / s + 2
                        : (t - e) / s + 4) +
                        360) %
                        6) *
                        60) /
                      360,
                    s: s == 0 ? 0 : i < 0.5 ? s / (2 * i) : s / (2 - 2 * i),
                    l: i,
                    toString: at,
                  }
                );
              }),
              (e._path2string = function () {
                return this.join(',').replace(O, '$1');
              });
            e._preload = function (t, e) {
              const r = l.doc.createElement('img');
              (r.style.cssText = 'position:absolute;left:-9999em;top:-9999em'),
                (r.onload = function () {
                  e.call(this), (this.onload = null), l.doc.body.removeChild(this);
                }),
                (r.onerror = function () {
                  l.doc.body.removeChild(this);
                }),
                l.doc.body.appendChild(r),
                (r.src = t);
            };
            function ut() {
              return this.hex;
            }
            function ct(t, e) {
              for (var r = [], i = 0, n = t.length; n - 2 * !e > i; i += 2) {
                const a = [
                  { x: +t[i - 2], y: +t[i - 1] },
                  { x: +t[i], y: +t[i + 1] },
                  { x: +t[i + 2], y: +t[i + 3] },
                  { x: +t[i + 4], y: +t[i + 5] },
                ];
                e
                  ? i
                    ? n - 4 == i
                      ? (a[3] = { x: +t[0], y: +t[1] })
                      : n - 2 == i &&
                        ((a[2] = { x: +t[0], y: +t[1] }), (a[3] = { x: +t[2], y: +t[3] }))
                    : (a[0] = { x: +t[n - 2], y: +t[n - 1] })
                  : n - 4 == i
                  ? (a[3] = a[2])
                  : i || (a[0] = { x: +t[i], y: +t[i + 1] }),
                  r.push([
                    'C',
                    (-a[0].x + 6 * a[1].x + a[2].x) / 6,
                    (-a[0].y + 6 * a[1].y + a[2].y) / 6,
                    (a[1].x + 6 * a[2].x - a[3].x) / 6,
                    (a[1].y + 6 * a[2].y - a[3].y) / 6,
                    a[2].x,
                    a[2].y,
                  ]);
              }
              return r;
            }
            (e.getRGB = ht((t) => {
              if (!t || (t = x(t)).indexOf('-') + 1) {
                return {
                  r: -1,
                  g: -1,
                  b: -1,
                  hex: 'none',
                  error: 1,
                  toString: ut,
                };
              }
              if (t == 'none') {
                return {
                  r: -1,
                  g: -1,
                  b: -1,
                  hex: 'none',
                  toString: ut,
                };
              }
              !q[o](t.toLowerCase().substring(0, 2)) && t.charAt() != '#' && (t = it(t));
              let r;
              let i;
              let n;
              let a;
              let s;
              let l;
              let h = t.match(E);
              return h
                ? (h[2] &&
                    ((n = F(h[2].substring(5), 16)),
                    (i = F(h[2].substring(3, 5), 16)),
                    (r = F(h[2].substring(1, 3), 16))),
                  h[3] &&
                    ((n = F((s = h[3].charAt(3)) + s, 16)),
                    (i = F((s = h[3].charAt(2)) + s, 16)),
                    (r = F((s = h[3].charAt(1)) + s, 16))),
                  h[4] &&
                    ((l = h[4][v](D)),
                    (r = z(l[0])),
                    l[0].slice(-1) == '%' && (r *= 2.55),
                    (i = z(l[1])),
                    l[1].slice(-1) == '%' && (i *= 2.55),
                    (n = z(l[2])),
                    l[2].slice(-1) == '%' && (n *= 2.55),
                    h[1].toLowerCase().slice(0, 4) == 'rgba' && (a = z(l[3])),
                    l[3] && l[3].slice(-1) == '%' && (a /= 100)),
                  h[5]
                    ? ((l = h[5][v](D)),
                      (r = z(l[0])),
                      l[0].slice(-1) == '%' && (r *= 2.55),
                      (i = z(l[1])),
                      l[1].slice(-1) == '%' && (i *= 2.55),
                      (n = z(l[2])),
                      l[2].slice(-1) == '%' && (n *= 2.55),
                      (l[0].slice(-3) == 'deg' || l[0].slice(-1) == '°') && (r /= 360),
                      h[1].toLowerCase().slice(0, 4) == 'hsba' && (a = z(l[3])),
                      l[3] && l[3].slice(-1) == '%' && (a /= 100),
                      e.hsb2rgb(r, i, n, a))
                    : h[6]
                    ? ((l = h[6][v](D)),
                      (r = z(l[0])),
                      l[0].slice(-1) == '%' && (r *= 2.55),
                      (i = z(l[1])),
                      l[1].slice(-1) == '%' && (i *= 2.55),
                      (n = z(l[2])),
                      l[2].slice(-1) == '%' && (n *= 2.55),
                      (l[0].slice(-3) == 'deg' || l[0].slice(-1) == '°') && (r /= 360),
                      h[1].toLowerCase().slice(0, 4) == 'hsla' && (a = z(l[3])),
                      l[3] && l[3].slice(-1) == '%' && (a /= 100),
                      e.hsl2rgb(r, i, n, a))
                    : (((h = {
                        r,
                        g: i,
                        b: n,
                        toString: ut,
                      }).hex = `#${(16777216 | n | (i << 8) | (r << 16)).toString(16).slice(1)}`),
                      e.is(a, 'finite') && (h.opacity = a),
                      h))
                : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: 'none',
                    error: 1,
                    toString: ut,
                  };
            }, e)),
              (e.hsb = ht((t, r, i) => e.hsb2rgb(t, r, i).hex)),
              (e.hsl = ht((t, r, i) => e.hsl2rgb(t, r, i).hex)),
              (e.rgb = ht((t, e, r) => {
                function i(t) {
                  return (t + 0.5) | 0;
                }
                return `#${(16777216 | i(r) | (i(e) << 8) | (i(t) << 16)).toString(16).slice(1)}`;
              })),
              (e.getColor = function (t) {
                const e = (this.getColor.start = this.getColor.start || {
                  h: 0,
                  s: 1,
                  b: t || 0.75,
                });
                const r = this.hsb2rgb(e.h, e.s, e.b);
                return (
                  (e.h += 0.075),
                  e.h > 1 &&
                    ((e.h = 0),
                    (e.s -= 0.2),
                    e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })),
                  r.hex
                );
              }),
              (e.getColor.reset = function () {
                delete this.start;
              }),
              (e.parsePathString = function (t) {
                if (!t) return null;
                const r = ft(t);
                if (r.arr) return mt(r.arr);
                const i = {
                  a: 7,
                  c: 6,
                  h: 1,
                  l: 2,
                  m: 2,
                  r: 4,
                  q: 4,
                  s: 4,
                  t: 2,
                  v: 1,
                  z: 0,
                };
                let n = [];
                return (
                  e.is(t, A) && e.is(t[0], A) && (n = mt(t)),
                  n.length ||
                    x(t).replace(V, (t, e, r) => {
                      const a = [];
                      let s = e.toLowerCase();
                      if (
                        (r.replace(Y, (t, e) => {
                          e && a.push(+e);
                        }),
                        s == 'm' &&
                          a.length > 2 &&
                          (n.push([e][f](a.splice(0, 2))), (s = 'l'), (e = e == 'm' ? 'l' : 'L')),
                        s == 'r')
                      )
                        n.push([e][f](a));
                      else for (; a.length >= i[s] && (n.push([e][f](a.splice(0, i[s]))), i[s]); );
                    }),
                  (n.toString = e._path2string),
                  (r.arr = mt(n)),
                  n
                );
              }),
              (e.parseTransformString = ht(
                (t) => {
                  if (!t) return null;
                  let r = [];
                  return (
                    e.is(t, A) && e.is(t[0], A) && (r = mt(t)),
                    r.length ||
                      x(t).replace(W, (t, e, i) => {
                        const n = [];
                        b.call(e);
                        i.replace(Y, (t, e) => {
                          e && n.push(+e);
                        }),
                          r.push([e][f](n));
                      }),
                    (r.toString = e._path2string),
                    r
                  );
                },
                this,
                (t) => {
                  if (!t) return t;
                  for (var e = [], r = 0; r < t.length; r++) {
                    for (var i = [], n = 0; n < t[r].length; n++) i.push(t[r][n]);
                    e.push(i);
                  }
                  return e;
                },
              ));
            var ft = function (t) {
              const e = (ft.ps = ft.ps || {});
              return (
                e[t] ? (e[t].sleep = 100) : (e[t] = { sleep: 100 }),
                setTimeout(() => {
                  for (const r in e)
                    e[o](r) && r != t && (e[r].sleep--, !e[r].sleep && delete e[r]);
                }),
                e[t]
              );
            };
            function pt(t, e, r, i, n) {
              return (
                t * (t * (-3 * e + 9 * r - 9 * i + 3 * n) + 6 * e - 12 * r + 6 * i) - 3 * e + 3 * r
              );
            }
            function dt(t, e, r, i, n, a, s, o, l) {
              l == null && (l = 1);
              for (
                var h = (l = l > 1 ? 1 : l < 0 ? 0 : l) / 2,
                  u = [
                    -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041,
                    0.9041, -0.9816, 0.9816,
                  ],
                  c = [
                    0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069,
                    0.0472, 0.0472,
                  ],
                  f = 0,
                  p = 0;
                p < 12;
                p++
              ) {
                const d = h * u[p] + h;
                const g = pt(d, t, r, n, s);
                const x = pt(d, e, i, a, o);
                const v = g * g + x * x;
                f += c[p] * _.sqrt(v);
              }
              return h * f;
            }
            function gt(t, e, r, i, n, a, s, o) {
              if (
                !(w(t, r) < k(n, s) || k(t, r) > w(n, s) || w(e, i) < k(a, o) || k(e, i) > w(a, o))
              ) {
                const l = (t - r) * (a - o) - (e - i) * (n - s);
                if (l) {
                  const h = ((t * i - e * r) * (n - s) - (t - r) * (n * o - a * s)) / l;
                  const u = ((t * i - e * r) * (a - o) - (e - i) * (n * o - a * s)) / l;
                  const c = +h.toFixed(2);
                  const f = +u.toFixed(2);
                  if (
                    !(
                      c < +k(t, r).toFixed(2) ||
                      c > +w(t, r).toFixed(2) ||
                      c < +k(n, s).toFixed(2) ||
                      c > +w(n, s).toFixed(2) ||
                      f < +k(e, i).toFixed(2) ||
                      f > +w(e, i).toFixed(2) ||
                      f < +k(a, o).toFixed(2) ||
                      f > +w(a, o).toFixed(2)
                    )
                  )
                    return { x: h, y: u };
                }
              }
            }
            function xt(t, r, i) {
              const n = e.bezierBBox(t);
              const a = e.bezierBBox(r);
              if (!e.isBBoxIntersect(n, a)) return i ? 0 : [];
              for (
                var s = dt.apply(0, t),
                  o = dt.apply(0, r),
                  l = w(~~(s / 5), 1),
                  h = w(~~(o / 5), 1),
                  u = [],
                  c = [],
                  f = {},
                  p = i ? 0 : [],
                  d = 0;
                d < l + 1;
                d++
              ) {
                var g = e.findDotsAtSegment.apply(e, t.concat(d / l));
                u.push({ x: g.x, y: g.y, t: d / l });
              }
              for (d = 0; d < h + 1; d++)
                (g = e.findDotsAtSegment.apply(e, r.concat(d / h))),
                  c.push({ x: g.x, y: g.y, t: d / h });
              for (d = 0; d < l; d++) {
                for (let x = 0; x < h; x++) {
                  const v = u[d];
                  const y = u[d + 1];
                  const m = c[x];
                  const b = c[x + 1];
                  const _ = B(y.x - v.x) < 0.001 ? 'y' : 'x';
                  const C = B(b.x - m.x) < 0.001 ? 'y' : 'x';
                  const S = gt(v.x, v.y, y.x, y.y, m.x, m.y, b.x, b.y);
                  if (S) {
                    if (f[S.x.toFixed(4)] == S.y.toFixed(4)) continue;
                    f[S.x.toFixed(4)] = S.y.toFixed(4);
                    const T = v.t + B((S[_] - v[_]) / (y[_] - v[_])) * (y.t - v.t);
                    const A = m.t + B((S[C] - m[C]) / (b[C] - m[C])) * (b.t - m.t);
                    T >= 0 &&
                      T <= 1.001 &&
                      A >= 0 &&
                      A <= 1.001 &&
                      (i
                        ? p++
                        : p.push({
                            x: S.x,
                            y: S.y,
                            t1: k(T, 1),
                            t2: k(A, 1),
                          }));
                  }
                }
              }
              return p;
            }
            function vt(t, r, i) {
              (t = e._path2curve(t)), (r = e._path2curve(r));
              for (
                var n, a, s, o, l, h, u, c, f, p, d = i ? 0 : [], g = 0, x = t.length;
                g < x;
                g++
              ) {
                const v = t[g];
                if (v[0] == 'M') (n = l = v[1]), (a = h = v[2]);
                else {
                  v[0] == 'C'
                    ? ((f = [n, a].concat(v.slice(1))), (n = f[6]), (a = f[7]))
                    : ((f = [n, a, n, a, l, h, l, h]), (n = l), (a = h));
                  for (let y = 0, m = r.length; y < m; y++) {
                    const b = r[y];
                    if (b[0] == 'M') (s = u = b[1]), (o = c = b[2]);
                    else {
                      b[0] == 'C'
                        ? ((p = [s, o].concat(b.slice(1))), (s = p[6]), (o = p[7]))
                        : ((p = [s, o, s, o, u, c, u, c]), (s = u), (o = c));
                      const _ = xt(f, p, i);
                      if (i) d += _;
                      else {
                        for (let w = 0, k = _.length; w < k; w++)
                          (_[w].segment1 = g),
                            (_[w].segment2 = y),
                            (_[w].bez1 = f),
                            (_[w].bez2 = p);
                        d = d.concat(_);
                      }
                    }
                  }
                }
              }
              return d;
            }
            (e.findDotsAtSegment = function (t, e, r, i, n, a, s, o, l) {
              const h = 1 - l;
              const u = C(h, 3);
              const c = C(h, 2);
              const f = l * l;
              const p = f * l;
              const d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * s;
              const g = u * e + 3 * c * l * i + 3 * h * l * l * a + p * o;
              const x = t + 2 * l * (r - t) + f * (n - 2 * r + t);
              const v = e + 2 * l * (i - e) + f * (a - 2 * i + e);
              const y = r + 2 * l * (n - r) + f * (s - 2 * n + r);
              const m = i + 2 * l * (a - i) + f * (o - 2 * a + i);
              const b = h * t + l * r;
              const w = h * e + l * i;
              const k = h * n + l * s;
              const B = h * a + l * o;
              let T = 90 - (180 * _.atan2(x - y, v - m)) / S;
              return (
                (x > y || v < m) && (T += 180),
                {
                  x: d,
                  y: g,
                  m: { x, y: v },
                  n: { x: y, y: m },
                  start: { x: b, y: w },
                  end: { x: k, y: B },
                  alpha: T,
                }
              );
            }),
              (e.bezierBBox = function (t, r, i, n, a, s, o, l) {
                e.is(t, 'array') || (t = [t, r, i, n, a, s, o, l]);
                const h = St.apply(null, t);
                return {
                  x: h.min.x,
                  y: h.min.y,
                  x2: h.max.x,
                  y2: h.max.y,
                  width: h.max.x - h.min.x,
                  height: h.max.y - h.min.y,
                };
              }),
              (e.isPointInsideBBox = function (t, e, r) {
                return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
              }),
              (e.isBBoxIntersect = function (t, r) {
                const i = e.isPointInsideBBox;
                return (
                  i(r, t.x, t.y) ||
                  i(r, t.x2, t.y) ||
                  i(r, t.x, t.y2) ||
                  i(r, t.x2, t.y2) ||
                  i(t, r.x, r.y) ||
                  i(t, r.x2, r.y) ||
                  i(t, r.x, r.y2) ||
                  i(t, r.x2, r.y2) ||
                  (((t.x < r.x2 && t.x > r.x) || (r.x < t.x2 && r.x > t.x)) &&
                    ((t.y < r.y2 && t.y > r.y) || (r.y < t.y2 && r.y > t.y)))
                );
              }),
              (e.pathIntersection = function (t, e) {
                return vt(t, e);
              }),
              (e.pathIntersectionNumber = function (t, e) {
                return vt(t, e, 1);
              }),
              (e.isPointInsidePath = function (t, r, i) {
                const n = e.pathBBox(t);
                return (
                  e.isPointInsideBBox(n, r, i) &&
                  vt(
                    t,
                    [
                      ['M', r, i],
                      ['H', n.x2 + 10],
                    ],
                    1,
                  ) %
                    2 ==
                    1
                );
              }),
              (e._removedFactory = function (e) {
                return function () {
                  t(
                    'raphael.log',
                    null,
                    `Raphaël: you are calling to method “${e}” of removed object`,
                    e,
                  );
                };
              });
            const yt = (e.pathBBox = function (t) {
              const e = ft(t);
              if (e.bbox) return tt(e.bbox);
              if (!t) {
                return {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0,
                  x2: 0,
                  y2: 0,
                };
              }
              for (var r, i = 0, n = 0, a = [], s = [], o = 0, l = (t = Tt(t)).length; o < l; o++)
                if ((r = t[o])[0] == 'M') (i = r[1]), (n = r[2]), a.push(i), s.push(n);
                else {
                  const h = St(i, n, r[1], r[2], r[3], r[4], r[5], r[6]);
                  (a = a[f](h.min.x, h.max.x)),
                    (s = s[f](h.min.y, h.max.y)),
                    (i = r[5]),
                    (n = r[6]);
                }
              const u = k[c](0, a);
              const p = k[c](0, s);
              const d = w[c](0, a);
              const g = w[c](0, s);
              const x = d - u;
              const v = g - p;
              const y = {
                x: u,
                y: p,
                x2: d,
                y2: g,
                width: x,
                height: v,
                cx: u + x / 2,
                cy: p + v / 2,
              };
              return (e.bbox = tt(y)), y;
            });
            var mt = function (t) {
              const r = tt(t);
              return (r.toString = e._path2string), r;
            };
            const bt = (e._pathToRelative = function (t) {
              const r = ft(t);
              if (r.rel) return mt(r.rel);
              (e.is(t, A) && e.is(t && t[0], A)) || (t = e.parsePathString(t));
              const i = [];
              let n = 0;
              let a = 0;
              let s = 0;
              let o = 0;
              let l = 0;
              t[0][0] == 'M' && ((s = n = t[0][1]), (o = a = t[0][2]), l++, i.push(['M', n, a]));
              for (let h = l, u = t.length; h < u; h++) {
                let c = (i[h] = []);
                const f = t[h];
                if (f[0] != b.call(f[0]))
                  switch (((c[0] = b.call(f[0])), c[0])) {
                    case 'a':
                      (c[1] = f[1]),
                        (c[2] = f[2]),
                        (c[3] = f[3]),
                        (c[4] = f[4]),
                        (c[5] = f[5]),
                        (c[6] = +(f[6] - n).toFixed(3)),
                        (c[7] = +(f[7] - a).toFixed(3));
                      break;
                    case 'v':
                      c[1] = +(f[1] - a).toFixed(3);
                      break;
                    case 'm':
                      (s = f[1]), (o = f[2]);
                    default:
                      for (let p = 1, d = f.length; p < d; p++)
                        c[p] = +(f[p] - (p % 2 ? n : a)).toFixed(3);
                  }
                else {
                  (c = i[h] = []), f[0] == 'm' && ((s = f[1] + n), (o = f[2] + a));
                  for (let g = 0, x = f.length; g < x; g++) i[h][g] = f[g];
                }
                const v = i[h].length;
                switch (i[h][0]) {
                  case 'z':
                    (n = s), (a = o);
                    break;
                  case 'h':
                    n += +i[h][v - 1];
                    break;
                  case 'v':
                    a += +i[h][v - 1];
                    break;
                  default:
                    (n += +i[h][v - 2]), (a += +i[h][v - 1]);
                }
              }
              return (i.toString = e._path2string), (r.rel = mt(i)), i;
            });
            const _t = (e._pathToAbsolute = function (t) {
              const r = ft(t);
              if (r.abs) return mt(r.abs);
              if (
                ((e.is(t, A) && e.is(t && t[0], A)) || (t = e.parsePathString(t)), !t || !t.length)
              )
                return [['M', 0, 0]];
              let i = [];
              let n = 0;
              let a = 0;
              let s = 0;
              let o = 0;
              let l = 0;
              t[0][0] == 'M' && ((s = n = +t[0][1]), (o = a = +t[0][2]), l++, (i[0] = ['M', n, a]));
              for (
                var h,
                  u,
                  c =
                    t.length == 3 &&
                    t[0][0] == 'M' &&
                    t[1][0].toUpperCase() == 'R' &&
                    t[2][0].toUpperCase() == 'Z',
                  p = l,
                  d = t.length;
                p < d;
                p++
              ) {
                if ((i.push((h = [])), (u = t[p])[0] != R.call(u[0])))
                  switch (((h[0] = R.call(u[0])), h[0])) {
                    case 'A':
                      (h[1] = u[1]),
                        (h[2] = u[2]),
                        (h[3] = u[3]),
                        (h[4] = u[4]),
                        (h[5] = u[5]),
                        (h[6] = +(u[6] + n)),
                        (h[7] = +(u[7] + a));
                      break;
                    case 'V':
                      h[1] = +u[1] + a;
                      break;
                    case 'H':
                      h[1] = +u[1] + n;
                      break;
                    case 'R':
                      for (var g = [n, a][f](u.slice(1)), x = 2, v = g.length; x < v; x++)
                        (g[x] = +g[x] + n), (g[++x] = +g[x] + a);
                      i.pop(), (i = i[f](ct(g, c)));
                      break;
                    case 'M':
                      (s = +u[1] + n), (o = +u[2] + a);
                    default:
                      for (x = 1, v = u.length; x < v; x++) h[x] = +u[x] + (x % 2 ? n : a);
                  }
                else if (u[0] == 'R')
                  (g = [n, a][f](u.slice(1))),
                    i.pop(),
                    (i = i[f](ct(g, c))),
                    (h = ['R'][f](u.slice(-2)));
                else for (let y = 0, m = u.length; y < m; y++) h[y] = u[y];
                switch (h[0]) {
                  case 'Z':
                    (n = s), (a = o);
                    break;
                  case 'H':
                    n = h[1];
                    break;
                  case 'V':
                    a = h[1];
                    break;
                  case 'M':
                    (s = h[h.length - 2]), (o = h[h.length - 1]);
                  default:
                    (n = h[h.length - 2]), (a = h[h.length - 1]);
                }
              }
              return (i.toString = e._path2string), (r.abs = mt(i)), i;
            });
            const wt = function (t, e, r, i) {
              return [t, e, r, i, r, i];
            };
            const kt = function (t, e, r, i, n, a) {
              return [
                (1 / 3) * t + (2 / 3) * r,
                (1 / 3) * e + (2 / 3) * i,
                (1 / 3) * n + (2 / 3) * r,
                (1 / 3) * a + (2 / 3) * i,
                n,
                a,
              ];
            };
            var Bt = function (t, e, r, i, n, a, s, o, l, h) {
              let u;
              const c = (120 * S) / 180;
              const p = (S / 180) * (+n || 0);
              let d = [];
              const g = ht((t, e, r) => ({
                x: t * _.cos(r) - e * _.sin(r),
                y: t * _.sin(r) + e * _.cos(r),
              }));
              if (h) (A = h[0]), (M = h[1]), (C = h[2]), (T = h[3]);
              else {
                (t = (u = g(t, e, -p)).x), (e = u.y), (o = (u = g(o, l, -p)).x), (l = u.y);
                _.cos((S / 180) * n), _.sin((S / 180) * n);
                const x = (t - o) / 2;
                const y = (e - l) / 2;
                let m = (x * x) / (r * r) + (y * y) / (i * i);
                m > 1 && ((r *= m = _.sqrt(m)), (i *= m));
                const b = r * r;
                const w = i * i;
                const k =
                  (a == s ? -1 : 1) *
                  _.sqrt(B((b * w - b * y * y - w * x * x) / (b * y * y + w * x * x)));
                var C = (k * r * y) / i + (t + o) / 2;
                var T = (k * -i * x) / r + (e + l) / 2;
                var A = _.asin(((e - T) / i).toFixed(9));
                var M = _.asin(((l - T) / i).toFixed(9));
                (A = t < C ? S - A : A) < 0 && (A = 2 * S + A),
                  (M = o < C ? S - M : M) < 0 && (M = 2 * S + M),
                  s && A > M && (A -= 2 * S),
                  !s && M > A && (M -= 2 * S);
              }
              let E = M - A;
              if (B(E) > c) {
                const N = M;
                const L = o;
                const P = l;
                (M = A + c * (s && M > A ? 1 : -1)),
                  (o = C + r * _.cos(M)),
                  (l = T + i * _.sin(M)),
                  (d = Bt(o, l, r, i, n, 0, s, L, P, [M, N, C, T]));
              }
              E = M - A;
              const z = _.cos(A);
              const F = _.sin(A);
              const R = _.cos(M);
              const j = _.sin(M);
              const I = _.tan(E / 4);
              const D = (4 / 3) * r * I;
              const q = (4 / 3) * i * I;
              const O = [t, e];
              const V = [t + D * F, e - q * z];
              const W = [o + D * j, l - q * R];
              const Y = [o, l];
              if (((V[0] = 2 * O[0] - V[0]), (V[1] = 2 * O[1] - V[1]), h)) return [V, W, Y][f](d);
              for (var G = [], H = 0, X = (d = [V, W, Y][f](d).join()[v](',')).length; H < X; H++)
                G[H] = H % 2 ? g(d[H - 1], d[H], p).y : g(d[H], d[H + 1], p).x;
              return G;
            };
            const Ct = function (t, e, r, i, n, a, s, o, l) {
              const h = 1 - l;
              return {
                x: C(h, 3) * t + 3 * C(h, 2) * l * r + 3 * h * l * l * n + C(l, 3) * s,
                y: C(h, 3) * e + 3 * C(h, 2) * l * i + 3 * h * l * l * a + C(l, 3) * o,
              };
            };
            var St = ht((t, e, r, i, n, a, s, o) => {
              let l;
              let h = n - 2 * r + t - (s - 2 * n + r);
              let u = 2 * (r - t) - 2 * (n - r);
              let f = t - r;
              let p = (-u + _.sqrt(u * u - 4 * h * f)) / 2 / h;
              let d = (-u - _.sqrt(u * u - 4 * h * f)) / 2 / h;
              const g = [e, o];
              const x = [t, s];
              return (
                B(p) > '1e12' && (p = 0.5),
                B(d) > '1e12' && (d = 0.5),
                p > 0 && p < 1 && ((l = Ct(t, e, r, i, n, a, s, o, p)), x.push(l.x), g.push(l.y)),
                d > 0 && d < 1 && ((l = Ct(t, e, r, i, n, a, s, o, d)), x.push(l.x), g.push(l.y)),
                (h = a - 2 * i + e - (o - 2 * a + i)),
                (f = e - i),
                (p = (-(u = 2 * (i - e) - 2 * (a - i)) + _.sqrt(u * u - 4 * h * f)) / 2 / h),
                (d = (-u - _.sqrt(u * u - 4 * h * f)) / 2 / h),
                B(p) > '1e12' && (p = 0.5),
                B(d) > '1e12' && (d = 0.5),
                p > 0 && p < 1 && ((l = Ct(t, e, r, i, n, a, s, o, p)), x.push(l.x), g.push(l.y)),
                d > 0 && d < 1 && ((l = Ct(t, e, r, i, n, a, s, o, d)), x.push(l.x), g.push(l.y)),
                { min: { x: k[c](0, x), y: k[c](0, g) }, max: { x: w[c](0, x), y: w[c](0, g) } }
              );
            });
            var Tt = (e._path2curve = ht(
              (t, e) => {
                const r = !e && ft(t);
                if (!e && r.curve) return mt(r.curve);
                for (
                  var i = _t(t),
                    n = e && _t(e),
                    a = {
                      x: 0,
                      y: 0,
                      bx: 0,
                      by: 0,
                      X: 0,
                      Y: 0,
                      qx: null,
                      qy: null,
                    },
                    s = {
                      x: 0,
                      y: 0,
                      bx: 0,
                      by: 0,
                      X: 0,
                      Y: 0,
                      qx: null,
                      qy: null,
                    },
                    o = function (t, e, r) {
                      let i;
                      let n;
                      if (!t) return ['C', e.x, e.y, e.x, e.y, e.x, e.y];
                      switch ((!(t[0] in { T: 1, Q: 1 }) && (e.qx = e.qy = null), t[0])) {
                        case 'M':
                          (e.X = t[1]), (e.Y = t[2]);
                          break;
                        case 'A':
                          t = ['C'][f](Bt[c](0, [e.x, e.y][f](t.slice(1))));
                          break;
                        case 'S':
                          r == 'C' || r == 'S'
                            ? ((i = 2 * e.x - e.bx), (n = 2 * e.y - e.by))
                            : ((i = e.x), (n = e.y)),
                            (t = ['C', i, n][f](t.slice(1)));
                          break;
                        case 'T':
                          r == 'Q' || r == 'T'
                            ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                            : ((e.qx = e.x), (e.qy = e.y)),
                            (t = ['C'][f](kt(e.x, e.y, e.qx, e.qy, t[1], t[2])));
                          break;
                        case 'Q':
                          (e.qx = t[1]),
                            (e.qy = t[2]),
                            (t = ['C'][f](kt(e.x, e.y, t[1], t[2], t[3], t[4])));
                          break;
                        case 'L':
                          t = ['C'][f](wt(e.x, e.y, t[1], t[2]));
                          break;
                        case 'H':
                          t = ['C'][f](wt(e.x, e.y, t[1], e.y));
                          break;
                        case 'V':
                          t = ['C'][f](wt(e.x, e.y, e.x, t[1]));
                          break;
                        case 'Z':
                          t = ['C'][f](wt(e.x, e.y, e.X, e.Y));
                      }
                      return t;
                    },
                    l = function (t, e) {
                      if (t[e].length > 7) {
                        t[e].shift();
                        for (let r = t[e]; r.length; )
                          (u[e] = 'A'),
                            n && (p[e] = 'A'),
                            t.splice(e++, 0, ['C'][f](r.splice(0, 6)));
                        t.splice(e, 1), (v = w(i.length, (n && n.length) || 0));
                      }
                    },
                    h = function (t, e, r, a, s) {
                      t &&
                        e &&
                        t[s][0] == 'M' &&
                        e[s][0] != 'M' &&
                        (e.splice(s, 0, ['M', a.x, a.y]),
                        (r.bx = 0),
                        (r.by = 0),
                        (r.x = t[s][1]),
                        (r.y = t[s][2]),
                        (v = w(i.length, (n && n.length) || 0)));
                    },
                    u = [],
                    p = [],
                    d = '',
                    g = '',
                    x = 0,
                    v = w(i.length, (n && n.length) || 0);
                  x < v;
                  x++
                ) {
                  i[x] && (d = i[x][0]),
                    d != 'C' && ((u[x] = d), x && (g = u[x - 1])),
                    (i[x] = o(i[x], a, g)),
                    u[x] != 'A' && d == 'C' && (u[x] = 'C'),
                    l(i, x),
                    n &&
                      (n[x] && (d = n[x][0]),
                      d != 'C' && ((p[x] = d), x && (g = p[x - 1])),
                      (n[x] = o(n[x], s, g)),
                      p[x] != 'A' && d == 'C' && (p[x] = 'C'),
                      l(n, x)),
                    h(i, n, a, s, x),
                    h(n, i, s, a, x);
                  const y = i[x];
                  const m = n && n[x];
                  const b = y.length;
                  const _ = n && m.length;
                  (a.x = y[b - 2]),
                    (a.y = y[b - 1]),
                    (a.bx = z(y[b - 4]) || a.x),
                    (a.by = z(y[b - 3]) || a.y),
                    (s.bx = n && (z(m[_ - 4]) || s.x)),
                    (s.by = n && (z(m[_ - 3]) || s.y)),
                    (s.x = n && m[_ - 2]),
                    (s.y = n && m[_ - 1]);
                }
                return n || (r.curve = mt(i)), n ? [i, n] : i;
              },
              null,
              mt,
            ));
            const At =
              ((e._parseDots = ht((t) => {
                for (var r = [], i = 0, n = t.length; i < n; i++) {
                  const a = {};
                  const s = t[i].match(/^([^:]*):?([\d\.]*)/);
                  if (((a.color = e.getRGB(s[1])), a.color.error)) return null;
                  (a.opacity = a.color.opacity),
                    (a.color = a.color.hex),
                    s[2] && (a.offset = `${s[2]}%`),
                    r.push(a);
                }
                for (i = 1, n = r.length - 1; i < n; i++)
                  if (!r[i].offset) {
                    for (var o = z(r[i - 1].offset || 0), l = 0, h = i + 1; h < n; h++)
                      if (r[h].offset) {
                        l = r[h].offset;
                        break;
                      }
                    l || ((l = 100), (h = n));
                    for (let u = ((l = z(l)) - o) / (h - i + 1); i < h; i++)
                      (o += u), (r[i].offset = `${o}%`);
                  }
                return r;
              })),
              (e._tear = function (t, e) {
                t == e.top && (e.top = t.prev),
                  t == e.bottom && (e.bottom = t.next),
                  t.next && (t.next.prev = t.prev),
                  t.prev && (t.prev.next = t.next);
              }));
            const Mt =
              ((e._tofront = function (t, e) {
                e.top !== t &&
                  (At(t, e), (t.next = null), (t.prev = e.top), (e.top.next = t), (e.top = t));
              }),
              (e._toback = function (t, e) {
                e.bottom !== t &&
                  (At(t, e),
                  (t.next = e.bottom),
                  (t.prev = null),
                  (e.bottom.prev = t),
                  (e.bottom = t));
              }),
              (e._insertafter = function (t, e, r) {
                At(t, r),
                  e == r.top && (r.top = t),
                  e.next && (e.next.prev = t),
                  (t.next = e.next),
                  (t.prev = e),
                  (e.next = t);
              }),
              (e._insertbefore = function (t, e, r) {
                At(t, r),
                  e == r.bottom && (r.bottom = t),
                  e.prev && (e.prev.next = t),
                  (t.prev = e.prev),
                  (e.prev = t),
                  (t.next = e);
              }),
              (e.toMatrix = function (t, e) {
                const r = yt(t);
                const i = {
                  _: { transform: d },
                  getBBox() {
                    return r;
                  },
                };
                return Et(i, e), i.matrix;
              }));
            var Et =
              ((e.transformPath = function (t, e) {
                return Q(t, Mt(t, e));
              }),
              (e._extractTransform = function (t, r) {
                if (r == null) return t._.transform;
                r = x(r).replace(/\.{3}|\u2026/g, t._.transform || d);
                let i;
                let n;
                const a = e.parseTransformString(r);
                let s = 0;
                let o = 1;
                let l = 1;
                const h = t._;
                const u = new Pt();
                if (((h.transform = a || []), a))
                  for (let c = 0, f = a.length; c < f; c++) {
                    var p;
                    var g;
                    var v;
                    var y;
                    var m;
                    const b = a[c];
                    const _ = b.length;
                    const w = x(b[0]).toLowerCase();
                    const k = b[0] != w;
                    const B = k ? u.invert() : 0;
                    w == 't' && _ == 3
                      ? k
                        ? ((p = B.x(0, 0)),
                          (g = B.y(0, 0)),
                          (v = B.x(b[1], b[2])),
                          (y = B.y(b[1], b[2])),
                          u.translate(v - p, y - g))
                        : u.translate(b[1], b[2])
                      : w == 'r'
                      ? _ == 2
                        ? ((m = m || t.getBBox(1)),
                          u.rotate(b[1], m.x + m.width / 2, m.y + m.height / 2),
                          (s += b[1]))
                        : _ == 4 &&
                          (k
                            ? ((v = B.x(b[2], b[3])), (y = B.y(b[2], b[3])), u.rotate(b[1], v, y))
                            : u.rotate(b[1], b[2], b[3]),
                          (s += b[1]))
                      : w == 's'
                      ? _ == 2 || _ == 3
                        ? ((m = m || t.getBBox(1)),
                          u.scale(b[1], b[_ - 1], m.x + m.width / 2, m.y + m.height / 2),
                          (o *= b[1]),
                          (l *= b[_ - 1]))
                        : _ == 5 &&
                          (k
                            ? ((v = B.x(b[3], b[4])),
                              (y = B.y(b[3], b[4])),
                              u.scale(b[1], b[2], v, y))
                            : u.scale(b[1], b[2], b[3], b[4]),
                          (o *= b[1]),
                          (l *= b[2]))
                      : w == 'm' && _ == 7 && u.add(b[1], b[2], b[3], b[4], b[5], b[6]),
                      (h.dirtyT = 1),
                      (t.matrix = u);
                  }
                (t.matrix = u),
                  (h.sx = o),
                  (h.sy = l),
                  (h.deg = s),
                  (h.dx = i = u.e),
                  (h.dy = n = u.f),
                  o == 1 && l == 1 && !s && h.bbox
                    ? ((h.bbox.x += +i), (h.bbox.y += +n))
                    : (h.dirtyT = 1);
              }));
            const Nt = function (t) {
              const e = t[0];
              switch (e.toLowerCase()) {
                case 't':
                  return [e, 0, 0];
                case 'm':
                  return [e, 1, 0, 0, 1, 0, 0];
                case 'r':
                  return t.length == 4 ? [e, 0, t[2], t[3]] : [e, 0];
                case 's':
                  return t.length == 5 ? [e, 1, 1, t[3], t[4]] : t.length == 3 ? [e, 1, 1] : [e, 1];
              }
            };
            const Lt = (e._equaliseTransform = function (t, r) {
              (r = x(r).replace(/\.{3}|\u2026/g, t)),
                (t = e.parseTransformString(t) || []),
                (r = e.parseTransformString(r) || []);
              for (var i, n, a, s, o = w(t.length, r.length), l = [], h = [], u = 0; u < o; u++) {
                if (
                  ((a = t[u] || Nt(r[u])),
                  (s = r[u] || Nt(a)),
                  a[0] != s[0] ||
                    (a[0].toLowerCase() == 'r' && (a[2] != s[2] || a[3] != s[3])) ||
                    (a[0].toLowerCase() == 's' && (a[3] != s[3] || a[4] != s[4])))
                )
                  return;
                for (l[u] = [], h[u] = [], i = 0, n = w(a.length, s.length); i < n; i++)
                  i in a && (l[u][i] = a[i]), i in s && (h[u][i] = s[i]);
              }
              return { from: l, to: h };
            });
            function Pt(t, e, r, i, n, a) {
              t != null
                ? ((this.a = +t),
                  (this.b = +e),
                  (this.c = +r),
                  (this.d = +i),
                  (this.e = +n),
                  (this.f = +a))
                : ((this.a = 1),
                  (this.b = 0),
                  (this.c = 0),
                  (this.d = 1),
                  (this.e = 0),
                  (this.f = 0));
            }
            (e._getContainer = function (t, r, i, n) {
              let a;
              if ((a = n != null || e.is(t, 'object') ? t : l.doc.getElementById(t)) != null) {
                return a.tagName
                  ? r == null
                    ? {
                        container: a,
                        width: a.style.pixelWidth || a.offsetWidth,
                        height: a.style.pixelHeight || a.offsetHeight,
                      }
                    : { container: a, width: r, height: i }
                  : {
                      container: 1,
                      x: t,
                      y: r,
                      width: i,
                      height: n,
                    };
              }
            }),
              (e.pathToRelative = bt),
              (e._engine = {}),
              (e.path2curve = Tt),
              (e.matrix = function (t, e, r, i, n, a) {
                return new Pt(t, e, r, i, n, a);
              }),
              (function (t) {
                function r(t) {
                  return t[0] * t[0] + t[1] * t[1];
                }
                function i(t) {
                  const e = _.sqrt(r(t));
                  t[0] && (t[0] /= e), t[1] && (t[1] /= e);
                }
                (t.add = function (t, e, r, i, n, a) {
                  let s;
                  let o;
                  let l;
                  let h;
                  const u = [[], [], []];
                  const c = [
                    [this.a, this.c, this.e],
                    [this.b, this.d, this.f],
                    [0, 0, 1],
                  ];
                  let f = [
                    [t, r, n],
                    [e, i, a],
                    [0, 0, 1],
                  ];
                  for (
                    t &&
                      t instanceof Pt &&
                      (f = [
                        [t.a, t.c, t.e],
                        [t.b, t.d, t.f],
                        [0, 0, 1],
                      ]),
                      s = 0;
                    s < 3;
                    s++
                  )
                    for (o = 0; o < 3; o++) {
                      for (h = 0, l = 0; l < 3; l++) h += c[s][l] * f[l][o];
                      u[s][o] = h;
                    }
                  (this.a = u[0][0]),
                    (this.b = u[1][0]),
                    (this.c = u[0][1]),
                    (this.d = u[1][1]),
                    (this.e = u[0][2]),
                    (this.f = u[1][2]);
                }),
                  (t.invert = function () {
                    const t = this;
                    const e = t.a * t.d - t.b * t.c;
                    return new Pt(
                      t.d / e,
                      -t.b / e,
                      -t.c / e,
                      t.a / e,
                      (t.c * t.f - t.d * t.e) / e,
                      (t.b * t.e - t.a * t.f) / e,
                    );
                  }),
                  (t.clone = function () {
                    return new Pt(this.a, this.b, this.c, this.d, this.e, this.f);
                  }),
                  (t.translate = function (t, e) {
                    this.add(1, 0, 0, 1, t, e);
                  }),
                  (t.scale = function (t, e, r, i) {
                    e == null && (e = t),
                      (r || i) && this.add(1, 0, 0, 1, r, i),
                      this.add(t, 0, 0, e, 0, 0),
                      (r || i) && this.add(1, 0, 0, 1, -r, -i);
                  }),
                  (t.rotate = function (t, r, i) {
                    (t = e.rad(t)), (r = r || 0), (i = i || 0);
                    const n = +_.cos(t).toFixed(9);
                    const a = +_.sin(t).toFixed(9);
                    this.add(n, a, -a, n, r, i), this.add(1, 0, 0, 1, -r, -i);
                  }),
                  (t.x = function (t, e) {
                    return t * this.a + e * this.c + this.e;
                  }),
                  (t.y = function (t, e) {
                    return t * this.b + e * this.d + this.f;
                  }),
                  (t.get = function (t) {
                    return +this[x.fromCharCode(97 + t)].toFixed(4);
                  }),
                  (t.toString = function () {
                    return e.svg
                      ? `matrix(${[
                          this.get(0),
                          this.get(1),
                          this.get(2),
                          this.get(3),
                          this.get(4),
                          this.get(5),
                        ].join()})`
                      : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
                  }),
                  (t.toFilter = function () {
                    return `progid:DXImageTransform.Microsoft.Matrix(M11=${this.get(
                      0,
                    )}, M12=${this.get(2)}, M21=${this.get(1)}, M22=${this.get(3)}, Dx=${this.get(
                      4,
                    )}, Dy=${this.get(5)}, sizingmethod='auto expand')`;
                  }),
                  (t.offset = function () {
                    return [this.e.toFixed(4), this.f.toFixed(4)];
                  }),
                  (t.split = function () {
                    const t = {};
                    (t.dx = this.e), (t.dy = this.f);
                    const n = [
                      [this.a, this.c],
                      [this.b, this.d],
                    ];
                    (t.scalex = _.sqrt(r(n[0]))),
                      i(n[0]),
                      (t.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1]),
                      (n[1] = [n[1][0] - n[0][0] * t.shear, n[1][1] - n[0][1] * t.shear]),
                      (t.scaley = _.sqrt(r(n[1]))),
                      i(n[1]),
                      (t.shear /= t.scaley);
                    const a = -n[0][1];
                    const s = n[1][1];
                    return (
                      s < 0
                        ? ((t.rotate = e.deg(_.acos(s))), a < 0 && (t.rotate = 360 - t.rotate))
                        : (t.rotate = e.deg(_.asin(a))),
                      (t.isSimple = !(
                        +t.shear.toFixed(9) ||
                        (t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
                      )),
                      (t.isSuperSimple =
                        !+t.shear.toFixed(9) &&
                        t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                        !t.rotate),
                      (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                      t
                    );
                  }),
                  (t.toTransformString = function (t) {
                    const e = t || this[v]();
                    return e.isSimple
                      ? ((e.scalex = +e.scalex.toFixed(4)),
                        (e.scaley = +e.scaley.toFixed(4)),
                        (e.rotate = +e.rotate.toFixed(4)),
                        (e.dx || e.dy ? `t${[e.dx, e.dy]}` : d) +
                          (e.scalex != 1 || e.scaley != 1 ? `s${[e.scalex, e.scaley, 0, 0]}` : d) +
                          (e.rotate ? `r${[e.rotate, 0, 0]}` : d))
                      : `m${[
                          this.get(0),
                          this.get(1),
                          this.get(2),
                          this.get(3),
                          this.get(4),
                          this.get(5),
                        ]}`;
                  });
              })(Pt.prototype);
            for (
              var zt = function () {
                  this.returnValue = !1;
                },
                Ft = function () {
                  return this.originalEvent.preventDefault();
                },
                Rt = function () {
                  this.cancelBubble = !0;
                },
                jt = function () {
                  return this.originalEvent.stopPropagation();
                },
                It = function (t) {
                  const e = l.doc.documentElement.scrollTop || l.doc.body.scrollTop;
                  const r = l.doc.documentElement.scrollLeft || l.doc.body.scrollLeft;
                  return { x: t.clientX + r, y: t.clientY + e };
                },
                Dt = l.doc.addEventListener
                  ? function (t, e, r, i) {
                      const n = function (t) {
                        const e = It(t);
                        return r.call(i, t, e.x, e.y);
                      };
                      if ((t.addEventListener(e, n, !1), p && m[e])) {
                        var a = function (e) {
                          for (
                            var n = It(e),
                              a = e,
                              s = 0,
                              o = e.targetTouches && e.targetTouches.length;
                            s < o;
                            s++
                          )
                            if (e.targetTouches[s].target == t) {
                              ((e = e.targetTouches[s]).originalEvent = a),
                                (e.preventDefault = Ft),
                                (e.stopPropagation = jt);
                              break;
                            }
                          return r.call(i, e, n.x, n.y);
                        };
                        t.addEventListener(m[e], a, !1);
                      }
                      return function () {
                        return (
                          t.removeEventListener(e, n, !1),
                          p && m[e] && t.removeEventListener(m[e], a, !1),
                          !0
                        );
                      };
                    }
                  : l.doc.attachEvent
                  ? function (t, e, r, i) {
                      const n = function (t) {
                        t = t || l.win.event;
                        const e = l.doc.documentElement.scrollTop || l.doc.body.scrollTop;
                        const n = l.doc.documentElement.scrollLeft || l.doc.body.scrollLeft;
                        const a = t.clientX + n;
                        const s = t.clientY + e;
                        return (
                          (t.preventDefault = t.preventDefault || zt),
                          (t.stopPropagation = t.stopPropagation || Rt),
                          r.call(i, t, a, s)
                        );
                      };
                      return (
                        t.attachEvent(`on${e}`, n),
                        function () {
                          return t.detachEvent(`on${e}`, n), !0;
                        }
                      );
                    }
                  : void 0,
                qt = [],
                Ot = function (e) {
                  for (
                    var r,
                      i = e.clientX,
                      n = e.clientY,
                      a = l.doc.documentElement.scrollTop || l.doc.body.scrollTop,
                      s = l.doc.documentElement.scrollLeft || l.doc.body.scrollLeft,
                      o = qt.length;
                    o--;

                  ) {
                    if (((r = qt[o]), p && e.touches)) {
                      for (var h, u = e.touches.length; u--; )
                        if ((h = e.touches[u]).identifier == r.el._drag.id) {
                          (i = h.clientX),
                            (n = h.clientY),
                            (e.originalEvent ? e.originalEvent : e).preventDefault();
                          break;
                        }
                    } else e.preventDefault();
                    var c;
                    const f = r.el.node;
                    const d = f.nextSibling;
                    const g = f.parentNode;
                    const x = f.style.display;
                    l.win.opera && g.removeChild(f),
                      (f.style.display = 'none'),
                      (c = r.el.paper.getElementByPoint(i, n)),
                      (f.style.display = x),
                      l.win.opera && (d ? g.insertBefore(f, d) : g.appendChild(f)),
                      c && t(`raphael.drag.over.${r.el.id}`, r.el, c),
                      (i += s),
                      (n += a),
                      t(
                        `raphael.drag.move.${r.el.id}`,
                        r.move_scope || r.el,
                        i - r.el._drag.x,
                        n - r.el._drag.y,
                        i,
                        n,
                        e,
                      );
                  }
                },
                Vt = function (r) {
                  e.unmousemove(Ot).unmouseup(Vt);
                  for (var i, n = qt.length; n--; )
                    ((i = qt[n]).el._drag = {}),
                      t(
                        `raphael.drag.end.${i.el.id}`,
                        i.end_scope || i.start_scope || i.move_scope || i.el,
                        r,
                      );
                  qt = [];
                },
                Wt = (e.el = {}),
                Yt = y.length;
              Yt--;

            )
              !(function (t) {
                (e[t] = Wt[t] =
                  function (r, i) {
                    return (
                      e.is(r, 'function') &&
                        ((this.events = this.events || []),
                        this.events.push({
                          name: t,
                          f: r,
                          unbind: Dt(this.shape || this.node || l.doc, t, r, i || this),
                        })),
                      this
                    );
                  }),
                  (e[`un${t}`] = Wt[`un${t}`] =
                    function (r) {
                      for (let i = this.events || [], n = i.length; n--; )
                        i[n].name != t ||
                          (!e.is(r, 'undefined') && i[n].f != r) ||
                          (i[n].unbind(), i.splice(n, 1), !i.length && delete this.events);
                      return this;
                    });
              })(y[Yt]);
            (Wt.data = function (r, i) {
              const n = (G[this.id] = G[this.id] || {});
              if (arguments.length == 0) return n;
              if (arguments.length == 1) {
                if (e.is(r, 'object')) {
                  for (const a in r) r[o](a) && this.data(a, r[a]);
                  return this;
                }
                return t(`raphael.data.get.${this.id}`, this, n[r], r), n[r];
              }
              return (n[r] = i), t(`raphael.data.set.${this.id}`, this, i, r), this;
            }),
              (Wt.removeData = function (t) {
                return t == null ? delete G[this.id] : G[this.id] && delete G[this.id][t], this;
              }),
              (Wt.getData = function () {
                return tt(G[this.id] || {});
              }),
              (Wt.hover = function (t, e, r, i) {
                return this.mouseover(t, r).mouseout(e, i || r);
              }),
              (Wt.unhover = function (t, e) {
                return this.unmouseover(t).unmouseout(e);
              });
            const Gt = [];
            (Wt.drag = function (r, i, n, a, s, o) {
              function h(h) {
                (h.originalEvent || h).preventDefault();
                let u = h.clientX;
                let c = h.clientY;
                const f = l.doc.documentElement.scrollTop || l.doc.body.scrollTop;
                const d = l.doc.documentElement.scrollLeft || l.doc.body.scrollLeft;
                if (((this._drag.id = h.identifier), p && h.touches))
                  for (var g, x = h.touches.length; x--; )
                    if (
                      ((g = h.touches[x]),
                      (this._drag.id = g.identifier),
                      g.identifier == this._drag.id)
                    ) {
                      (u = g.clientX), (c = g.clientY);
                      break;
                    }
                (this._drag.x = u + d),
                  (this._drag.y = c + f),
                  !qt.length && e.mousemove(Ot).mouseup(Vt),
                  qt.push({
                    el: this,
                    move_scope: a,
                    start_scope: s,
                    end_scope: o,
                  }),
                  i && t.on(`raphael.drag.start.${this.id}`, i),
                  r && t.on(`raphael.drag.move.${this.id}`, r),
                  n && t.on(`raphael.drag.end.${this.id}`, n),
                  t(`raphael.drag.start.${this.id}`, s || a || this, this._drag.x, this._drag.y, h);
              }
              return (this._drag = {}), Gt.push({ el: this, start: h }), this.mousedown(h), this;
            }),
              (Wt.onDragOver = function (e) {
                e
                  ? t.on(`raphael.drag.over.${this.id}`, e)
                  : t.unbind(`raphael.drag.over.${this.id}`);
              }),
              (Wt.undrag = function () {
                for (let r = Gt.length; r--; )
                  Gt[r].el == this &&
                    (this.unmousedown(Gt[r].start),
                    Gt.splice(r, 1),
                    t.unbind(`raphael.drag.*.${this.id}`));
                !Gt.length && e.unmousemove(Ot).unmouseup(Vt), (qt = []);
              }),
              (i.circle = function (t, r, i) {
                const n = e._engine.circle(this, t || 0, r || 0, i || 0);
                return this.__set__ && this.__set__.push(n), n;
              }),
              (i.rect = function (t, r, i, n, a) {
                const s = e._engine.rect(this, t || 0, r || 0, i || 0, n || 0, a || 0);
                return this.__set__ && this.__set__.push(s), s;
              }),
              (i.ellipse = function (t, r, i, n) {
                const a = e._engine.ellipse(this, t || 0, r || 0, i || 0, n || 0);
                return this.__set__ && this.__set__.push(a), a;
              }),
              (i.path = function (t) {
                t && !e.is(t, 'string') && !e.is(t[0], A) && (t += d);
                const r = e._engine.path(e.format[c](e, arguments), this);
                return this.__set__ && this.__set__.push(r), r;
              }),
              (i.image = function (t, r, i, n, a) {
                const s = e._engine.image(this, t || 'about:blank', r || 0, i || 0, n || 0, a || 0);
                return this.__set__ && this.__set__.push(s), s;
              }),
              (i.text = function (t, r, i) {
                const n = e._engine.text(this, t || 0, r || 0, x(i));
                return this.__set__ && this.__set__.push(n), n;
              }),
              (i.set = function (t) {
                !e.is(t, 'array') &&
                  (t = Array.prototype.splice.call(arguments, 0, arguments.length));
                const r = new ce(t);
                return this.__set__ && this.__set__.push(r), (r.paper = this), (r.type = 'set'), r;
              }),
              (i.setStart = function (t) {
                this.__set__ = t || this.set();
              }),
              (i.setFinish = function (t) {
                const e = this.__set__;
                return delete this.__set__, e;
              }),
              (i.getSize = function () {
                const t = this.canvas.parentNode;
                return { width: t.offsetWidth, height: t.offsetHeight };
              }),
              (i.setSize = function (t, r) {
                return e._engine.setSize.call(this, t, r);
              }),
              (i.setViewBox = function (t, r, i, n, a) {
                return e._engine.setViewBox.call(this, t, r, i, n, a);
              }),
              (i.top = i.bottom = null),
              (i.raphael = e);
            function Ht() {
              return `${this.x + g + this.y + g + this.width} × ${this.height}`;
            }
            (i.getElementByPoint = function (t, e) {
              let r;
              let i;
              let n;
              let a;
              let s;
              let o;
              let h;
              const u = this.canvas;
              let c = l.doc.elementFromPoint(t, e);
              if (l.win.opera && c.tagName == 'svg') {
                const f =
                  ((i = (r = u).getBoundingClientRect()),
                  (n = r.ownerDocument),
                  (a = n.body),
                  (s = n.documentElement),
                  (o = s.clientTop || a.clientTop || 0),
                  (h = s.clientLeft || a.clientLeft || 0),
                  {
                    y: i.top + (l.win.pageYOffset || s.scrollTop || a.scrollTop) - o,
                    x: i.left + (l.win.pageXOffset || s.scrollLeft || a.scrollLeft) - h,
                  });
                const p = u.createSVGRect();
                (p.x = t - f.x), (p.y = e - f.y), (p.width = p.height = 1);
                const d = u.getIntersectionList(p, null);
                d.length && (c = d[d.length - 1]);
              }
              if (!c) return null;
              for (; c.parentNode && c != u.parentNode && !c.raphael; ) c = c.parentNode;
              return (
                c == this.canvas.parentNode && (c = u),
                (c = c && c.raphael ? this.getById(c.raphaelid) : null)
              );
            }),
              (i.getElementsByBBox = function (t) {
                const r = this.set();
                return (
                  this.forEach((i) => {
                    e.isBBoxIntersect(i.getBBox(), t) && r.push(i);
                  }),
                  r
                );
              }),
              (i.getById = function (t) {
                for (let e = this.bottom; e; ) {
                  if (e.id == t) return e;
                  e = e.next;
                }
                return null;
              }),
              (i.forEach = function (t, e) {
                for (let r = this.bottom; r; ) {
                  if (!1 === t.call(e, r)) return this;
                  r = r.next;
                }
                return this;
              }),
              (i.getElementsByPoint = function (t, e) {
                const r = this.set();
                return (
                  this.forEach((i) => {
                    i.isPointInside(t, e) && r.push(i);
                  }),
                  r
                );
              }),
              (Wt.isPointInside = function (t, r) {
                let i = (this.realPath = Z[this.type](this));
                return (
                  this.attr('transform') &&
                    this.attr('transform').length &&
                    (i = e.transformPath(i, this.attr('transform'))),
                  e.isPointInsidePath(i, t, r)
                );
              }),
              (Wt.getBBox = function (t) {
                if (this.removed) return {};
                const e = this._;
                return t
                  ? ((!e.dirty && e.bboxwt) ||
                      ((this.realPath = Z[this.type](this)),
                      (e.bboxwt = yt(this.realPath)),
                      (e.bboxwt.toString = Ht),
                      (e.dirty = 0)),
                    e.bboxwt)
                  : ((e.dirty || e.dirtyT || !e.bbox) &&
                      ((!e.dirty && this.realPath) ||
                        ((e.bboxwt = 0), (this.realPath = Z[this.type](this))),
                      (e.bbox = yt(Q(this.realPath, this.matrix))),
                      (e.bbox.toString = Ht),
                      (e.dirty = e.dirtyT = 0)),
                    e.bbox);
              }),
              (Wt.clone = function () {
                if (this.removed) return null;
                const t = this.paper[this.type]().attr(this.attr());
                return this.__set__ && this.__set__.push(t), t;
              }),
              (Wt.glow = function (t) {
                if (this.type == 'text') return null;
                const e = {
                  width: ((t = t || {}).width || 10) + (+this.attr('stroke-width') || 1),
                  fill: t.fill || !1,
                  opacity: t.opacity == null ? 0.5 : t.opacity,
                  offsetx: t.offsetx || 0,
                  offsety: t.offsety || 0,
                  color: t.color || '#000',
                };
                const r = e.width / 2;
                const i = this.paper;
                const n = i.set();
                let a = this.realPath || Z[this.type](this);
                a = this.matrix ? Q(a, this.matrix) : a;
                for (let s = 1; s < r + 1; s++) {
                  n.push(
                    i.path(a).attr({
                      stroke: e.color,
                      fill: e.fill ? e.color : 'none',
                      'stroke-linejoin': 'round',
                      'stroke-linecap': 'round',
                      'stroke-width': +((e.width / r) * s).toFixed(3),
                      opacity: +(e.opacity / r).toFixed(3),
                    }),
                  );
                }
                return n.insertBefore(this).translate(e.offsetx, e.offsety);
              });
            const Xt = function (t, r, i, n, a, s, o, l, h) {
              return h == null
                ? dt(t, r, i, n, a, s, o, l)
                : e.findDotsAtSegment(
                    t,
                    r,
                    i,
                    n,
                    a,
                    s,
                    o,
                    l,
                    (function (t, e, r, i, n, a, s, o, l) {
                      if (!(l < 0 || dt(t, e, r, i, n, a, s, o) < l)) {
                        let h;
                        let u = 0.5;
                        let c = 1 - u;
                        for (h = dt(t, e, r, i, n, a, s, o, c); B(h - l) > 0.01; )
                          h = dt(t, e, r, i, n, a, s, o, (c += (h < l ? 1 : -1) * (u /= 2)));
                        return c;
                      }
                    })(t, r, i, n, a, s, o, l, h),
                  );
            };
            const Ut = function (t, r) {
              return function (i, n, a) {
                for (
                  var s, o, l, h, u, c = '', f = {}, p = 0, d = 0, g = (i = Tt(i)).length;
                  d < g;
                  d++
                ) {
                  if ((l = i[d])[0] == 'M') (s = +l[1]), (o = +l[2]);
                  else {
                    if (p + (h = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6])) > n) {
                      if (r && !f.start) {
                        if (
                          ((c += [
                            `C${(u = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p)).start.x}`,
                            u.start.y,
                            u.m.x,
                            u.m.y,
                            u.x,
                            u.y,
                          ]),
                          a)
                        )
                          return c;
                        (f.start = c),
                          (c = [
                            `M${u.x}`,
                            `${u.y}C${u.n.x}`,
                            u.n.y,
                            u.end.x,
                            u.end.y,
                            l[5],
                            l[6],
                          ].join()),
                          (p += h),
                          (s = +l[5]),
                          (o = +l[6]);
                        continue;
                      }
                      if (!t && !r)
                        return {
                          x: (u = Xt(s, o, l[1], l[2], l[3], l[4], l[5], l[6], n - p)).x,
                          y: u.y,
                          alpha: u.alpha,
                        };
                    }
                    (p += h), (s = +l[5]), (o = +l[6]);
                  }
                  c += l.shift() + l;
                }
                return (
                  (f.end = c),
                  (u = t
                    ? p
                    : r
                    ? f
                    : e.findDotsAtSegment(s, o, l[0], l[1], l[2], l[3], l[4], l[5], 1)).alpha &&
                    (u = { x: u.x, y: u.y, alpha: u.alpha }),
                  u
                );
              };
            };
            const $t = Ut(1);
            const Zt = Ut();
            const Qt = Ut(0, 1);
            (e.getTotalLength = $t),
              (e.getPointAtLength = Zt),
              (e.getSubpath = function (t, e, r) {
                if (this.getTotalLength(t) - r < 1e-6) return Qt(t, e).end;
                const i = Qt(t, r, 1);
                return e ? Qt(i, e).end : i;
              }),
              (Wt.getTotalLength = function () {
                const t = this.getPath();
                if (t) return this.node.getTotalLength ? this.node.getTotalLength() : $t(t);
              }),
              (Wt.getPointAtLength = function (t) {
                const e = this.getPath();
                if (e) return Zt(e, t);
              }),
              (Wt.getPath = function () {
                let t;
                const r = e._getPath[this.type];
                if (this.type != 'text' && this.type != 'set') return r && (t = r(this)), t;
              }),
              (Wt.getSubpath = function (t, r) {
                const i = this.getPath();
                if (i) return e.getSubpath(i, t, r);
              });
            const Jt = (e.easing_formulas = {
              linear(t) {
                return t;
              },
              '<': function (t) {
                return C(t, 1.7);
              },
              '>': function (t) {
                return C(t, 0.48);
              },
              '<>': function (t) {
                const e = 0.48 - t / 1.04;
                const r = _.sqrt(0.1734 + e * e);
                const i = r - e;
                const n = -r - e;
                const a =
                  C(B(i), 1 / 3) * (i < 0 ? -1 : 1) + C(B(n), 1 / 3) * (n < 0 ? -1 : 1) + 0.5;
                return 3 * (1 - a) * a * a + a * a * a;
              },
              backIn(t) {
                const e = 1.70158;
                return t * t * ((e + 1) * t - e);
              },
              backOut(t) {
                const e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1;
              },
              elastic(t) {
                return t == !!t ? t : C(2, -10 * t) * _.sin((2 * S * (t - 0.075)) / 0.3) + 1;
              },
              bounce(t) {
                const e = 7.5625;
                const r = 2.75;
                return t < 1 / r
                  ? e * t * t
                  : t < 2 / r
                  ? e * (t -= 1.5 / r) * t + 0.75
                  : t < 2.5 / r
                  ? e * (t -= 2.25 / r) * t + 0.9375
                  : e * (t -= 2.625 / r) * t + 0.984375;
              },
            });
            (Jt.easeIn = Jt['ease-in'] = Jt['<']),
              (Jt.easeOut = Jt['ease-out'] = Jt['>']),
              (Jt.easeInOut = Jt['ease-in-out'] = Jt['<>']),
              (Jt['back-in'] = Jt.backIn),
              (Jt['back-out'] = Jt.backOut);
            const Kt = [];
            const te =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function (t) {
                setTimeout(t, 16);
              };
            var ee = function () {
              for (let r = +new Date(), i = 0; i < Kt.length; i++) {
                const n = Kt[i];
                if (!n.el.removed && !n.paused) {
                  var a;
                  var s;
                  let l = r - n.start;
                  var h = n.ms;
                  const u = n.easing;
                  var c = n.from;
                  var p = n.diff;
                  const d = n.to;
                  const x = (n.t, n.el);
                  const v = {};
                  const y = {};
                  if (
                    (n.initstatus
                      ? ((l = ((n.initstatus * n.anim.top - n.prev) / (n.percent - n.prev)) * h),
                        (n.status = n.initstatus),
                        delete n.initstatus,
                        n.stop && Kt.splice(i--, 1))
                      : (n.status = (n.prev + (n.percent - n.prev) * (l / h)) / n.anim.top),
                    !(l < 0))
                  )
                    if (l < h) {
                      var m = u(l / h);
                      for (var b in c)
                        if (c[o](b)) {
                          switch (I[b]) {
                            case T:
                              a = +c[b] + m * h * p[b];
                              break;
                            case 'colour':
                              a = `rgb(${[
                                re(P(c[b].r + m * h * p[b].r)),
                                re(P(c[b].g + m * h * p[b].g)),
                                re(P(c[b].b + m * h * p[b].b)),
                              ].join(',')})`;
                              break;
                            case 'path':
                              a = [];
                              for (var _ = 0, w = c[b].length; _ < w; _++) {
                                a[_] = [c[b][_][0]];
                                for (var k = 1, B = c[b][_].length; k < B; k++)
                                  a[_][k] = +c[b][_][k] + m * h * p[b][_][k];
                                a[_] = a[_].join(g);
                              }
                              a = a.join(g);
                              break;
                            case 'transform':
                              if (p[b].real)
                                for (a = [], _ = 0, w = c[b].length; _ < w; _++)
                                  for (a[_] = [c[b][_][0]], k = 1, B = c[b][_].length; k < B; k++)
                                    a[_][k] = c[b][_][k] + m * h * p[b][_][k];
                              else {
                                const C = function (t) {
                                  return +c[b][t] + m * h * p[b][t];
                                };
                                a = [['m', C(0), C(1), C(2), C(3), C(4), C(5)]];
                              }
                              break;
                            case 'csv':
                              if (b == 'clip-rect')
                                for (a = [], _ = 4; _--; ) a[_] = +c[b][_] + m * h * p[b][_];
                              break;
                            default:
                              var S = [][f](c[b]);
                              for (a = [], _ = x.paper.customAttributes[b].length; _--; )
                                a[_] = +S[_] + m * h * p[b][_];
                          }
                          v[b] = a;
                        }
                      x.attr(v),
                        (function (e, r, i) {
                          setTimeout(() => {
                            t(`raphael.anim.frame.${e}`, r, i);
                          });
                        })(x.id, x, n.anim);
                    } else {
                      if (
                        ((function (r, i, n) {
                          setTimeout(() => {
                            t(`raphael.anim.frame.${i.id}`, i, n),
                              t(`raphael.anim.finish.${i.id}`, i, n),
                              e.is(r, 'function') && r.call(i);
                          });
                        })(n.callback, x, n.anim),
                        x.attr(d),
                        Kt.splice(i--, 1),
                        n.repeat > 1 && !n.next)
                      ) {
                        for (s in d) d[o](s) && (y[s] = n.totalOrigin[s]);
                        n.el.attr(y),
                          ae(n.anim, n.el, n.anim.percents[0], null, n.totalOrigin, n.repeat - 1);
                      }
                      n.next && !n.stop && ae(n.anim, n.el, n.next, null, n.totalOrigin, n.repeat);
                    }
                }
              }
              Kt.length && te(ee);
            };
            var re = function (t) {
              return t > 255 ? 255 : t < 0 ? 0 : t;
            };
            function ie(t, e, r, i, n, a) {
              const s = 3 * e;
              const o = 3 * (i - e) - s;
              const l = 1 - s - o;
              const h = 3 * r;
              const u = 3 * (n - r) - h;
              const c = 1 - h - u;
              function f(t) {
                return ((l * t + o) * t + s) * t;
              }
              return (function (t, e) {
                const r = (function (t, e) {
                  let r;
                  let i;
                  let n;
                  let a;
                  let h;
                  let u;
                  for (n = t, u = 0; u < 8; u++) {
                    if (((a = f(n) - t), B(a) < e)) return n;
                    if (B((h = (3 * l * n + 2 * o) * n + s)) < 1e-6) break;
                    n -= a / h;
                  }
                  if (((i = 1), (n = t) < (r = 0))) return r;
                  if (n > i) return i;
                  for (; r < i; ) {
                    if (((a = f(n)), B(a - t) < e)) return n;
                    t > a ? (r = n) : (i = n), (n = (i - r) / 2 + r);
                  }
                  return n;
                })(t, e);
                return ((c * r + u) * r + h) * r;
              })(t, 1 / (200 * a));
            }
            function ne(t, e) {
              const r = [];
              const i = {};
              if (((this.ms = e), (this.times = 1), t)) {
                for (const n in t) t[o](n) && ((i[z(n)] = t[n]), r.push(z(n)));
                r.sort(H);
              }
              (this.anim = i), (this.top = r[r.length - 1]), (this.percents = r);
            }
            function ae(r, i, a, s, l, h) {
              a = z(a);
              let u;
              let c;
              let p;
              let d;
              let g;
              let y;
              let m = r.ms;
              const b = {};
              const _ = {};
              const w = {};
              if (s)
                for (B = 0, C = Kt.length; B < C; B++) {
                  var k = Kt[B];
                  if (k.el.id == i.id && k.anim == r) {
                    k.percent != a ? (Kt.splice(B, 1), (p = 1)) : (c = k), i.attr(k.totalOrigin);
                    break;
                  }
                }
              else s = +_;
              for (var B = 0, C = r.percents.length; B < C; B++) {
                if (r.percents[B] == a || r.percents[B] > s * r.top) {
                  (a = r.percents[B]),
                    (g = r.percents[B - 1] || 0),
                    (m = (m / r.top) * (a - g)),
                    (d = r.percents[B + 1]),
                    (u = r.anim[a]);
                  break;
                }
                s && i.attr(r.anim[r.percents[B]]);
              }
              if (u) {
                if (c) (c.initstatus = s), (c.start = new Date() - c.ms * s);
                else {
                  for (const S in u) {
                    if (u[o](S) && (I[o](S) || i.paper.customAttributes[o](S))) {
                      switch (
                        ((b[S] = i.attr(S)), b[S] == null && (b[S] = j[S]), (_[S] = u[S]), I[S])
                      ) {
                        case T:
                          w[S] = (_[S] - b[S]) / m;
                          break;
                        case 'colour':
                          b[S] = e.getRGB(b[S]);
                          var A = e.getRGB(_[S]);
                          w[S] = {
                            r: (A.r - b[S].r) / m,
                            g: (A.g - b[S].g) / m,
                            b: (A.b - b[S].b) / m,
                          };
                          break;
                        case 'path':
                          var M = Tt(b[S], _[S]);
                          var E = M[1];
                          for (b[S] = M[0], w[S] = [], B = 0, C = b[S].length; B < C; B++) {
                            w[S][B] = [0];
                            for (var N = 1, P = b[S][B].length; N < P; N++)
                              w[S][B][N] = (E[B][N] - b[S][B][N]) / m;
                          }
                          break;
                        case 'transform':
                          var F = i._;
                          var R = Lt(F[S], _[S]);
                          if (R)
                            for (
                              b[S] = R.from,
                                _[S] = R.to,
                                w[S] = [],
                                w[S].real = !0,
                                B = 0,
                                C = b[S].length;
                              B < C;
                              B++
                            )
                              for (w[S][B] = [b[S][B][0]], N = 1, P = b[S][B].length; N < P; N++)
                                w[S][B][N] = (_[S][B][N] - b[S][B][N]) / m;
                          else {
                            const D = i.matrix || new Pt();
                            const q = {
                              _: { transform: F.transform },
                              getBBox() {
                                return i.getBBox(1);
                              },
                            };
                            (b[S] = [D.a, D.b, D.c, D.d, D.e, D.f]),
                              Et(q, _[S]),
                              (_[S] = q._.transform),
                              (w[S] = [
                                (q.matrix.a - D.a) / m,
                                (q.matrix.b - D.b) / m,
                                (q.matrix.c - D.c) / m,
                                (q.matrix.d - D.d) / m,
                                (q.matrix.e - D.e) / m,
                                (q.matrix.f - D.f) / m,
                              ]);
                          }
                          break;
                        case 'csv':
                          var O = x(u[S])[v](n);
                          var V = x(b[S])[v](n);
                          if (S == 'clip-rect')
                            for (b[S] = V, w[S] = [], B = V.length; B--; )
                              w[S][B] = (O[B] - b[S][B]) / m;
                          _[S] = O;
                          break;
                        default:
                          for (
                            O = [][f](u[S]),
                              V = [][f](b[S]),
                              w[S] = [],
                              B = i.paper.customAttributes[S].length;
                            B--;

                          )
                            w[S][B] = ((O[B] || 0) - (V[B] || 0)) / m;
                      }
                    }
                  }
                  const W = u.easing;
                  let Y = e.easing_formulas[W];
                  if (!Y)
                    if ((Y = x(W).match(L)) && Y.length == 5) {
                      const G = Y;
                      Y = function (t) {
                        return ie(t, +G[1], +G[2], +G[3], +G[4], m);
                      };
                    } else Y = X;
                  if (
                    ((k = {
                      anim: r,
                      percent: a,
                      timestamp: (y = u.start || r.start || +new Date()),
                      start: y + (r.del || 0),
                      status: 0,
                      initstatus: s || 0,
                      stop: !1,
                      ms: m,
                      easing: Y,
                      from: b,
                      diff: w,
                      to: _,
                      el: i,
                      callback: u.callback,
                      prev: g,
                      next: d,
                      repeat: h || r.times,
                      origin: i.attr(),
                      totalOrigin: l,
                    }),
                    Kt.push(k),
                    s &&
                      !c &&
                      !p &&
                      ((k.stop = !0), (k.start = new Date() - m * s), Kt.length == 1))
                  )
                    return ee();
                  p && (k.start = new Date() - k.ms * s), Kt.length == 1 && te(ee);
                }
                t(`raphael.anim.start.${i.id}`, i, r);
              }
            }
            function se(t) {
              for (let e = 0; e < Kt.length; e++) Kt[e].el.paper == t && Kt.splice(e--, 1);
            }
            (Wt.animateWith = function (t, r, i, n, a, s) {
              if (this.removed) return s && s.call(this), this;
              const o = i instanceof ne ? i : e.animation(i, n, a, s);
              ae(o, this, o.percents[0], null, this.attr());
              for (let l = 0, h = Kt.length; l < h; l++)
                if (Kt[l].anim == r && Kt[l].el == t) {
                  Kt[h - 1].start = Kt[l].start;
                  break;
                }
              return this;
            }),
              (Wt.onAnimation = function (e) {
                return (
                  e
                    ? t.on(`raphael.anim.frame.${this.id}`, e)
                    : t.unbind(`raphael.anim.frame.${this.id}`),
                  this
                );
              }),
              (ne.prototype.delay = function (t) {
                const e = new ne(this.anim, this.ms);
                return (e.times = this.times), (e.del = +t || 0), e;
              }),
              (ne.prototype.repeat = function (t) {
                const e = new ne(this.anim, this.ms);
                return (e.del = this.del), (e.times = _.floor(w(t, 0)) || 1), e;
              }),
              (e.animation = function (t, r, i, n) {
                if (t instanceof ne) return t;
                (!e.is(i, 'function') && i) || ((n = n || i || null), (i = null)),
                  (t = Object(t)),
                  (r = +r || 0);
                let a;
                let s;
                const l = {};
                for (s in t) t[o](s) && z(s) != s && `${z(s)}%` != s && ((a = !0), (l[s] = t[s]));
                if (a) return i && (l.easing = i), n && (l.callback = n), new ne({ 100: l }, r);
                if (n) {
                  let h = 0;
                  for (const u in t) {
                    const c = F(u);
                    t[o](u) && c > h && (h = c);
                  }
                  !t[(h += '%')].callback && (t[h].callback = n);
                }
                return new ne(t, r);
              }),
              (Wt.animate = function (t, r, i, n) {
                if (this.removed) return n && n.call(this), this;
                const a = t instanceof ne ? t : e.animation(t, r, i, n);
                return ae(a, this, a.percents[0], null, this.attr()), this;
              }),
              (Wt.setTime = function (t, e) {
                return t && e != null && this.status(t, k(e, t.ms) / t.ms), this;
              }),
              (Wt.status = function (t, e) {
                let r;
                let i;
                const n = [];
                let a = 0;
                if (e != null) return ae(t, this, -1, k(e, 1)), this;
                for (r = Kt.length; a < r; a++)
                  if ((i = Kt[a]).el.id == this.id && (!t || i.anim == t)) {
                    if (t) return i.status;
                    n.push({ anim: i.anim, status: i.status });
                  }
                return t ? 0 : n;
              }),
              (Wt.pause = function (e) {
                for (let r = 0; r < Kt.length; r++)
                  Kt[r].el.id != this.id ||
                    (e && Kt[r].anim != e) ||
                    (!1 !== t(`raphael.anim.pause.${this.id}`, this, Kt[r].anim) &&
                      (Kt[r].paused = !0));
                return this;
              }),
              (Wt.resume = function (e) {
                for (let r = 0; r < Kt.length; r++)
                  if (Kt[r].el.id == this.id && (!e || Kt[r].anim == e)) {
                    const i = Kt[r];
                    !1 !== t(`raphael.anim.resume.${this.id}`, this, i.anim) &&
                      (delete i.paused, this.status(i.anim, i.status));
                  }
                return this;
              }),
              (Wt.stop = function (e) {
                for (let r = 0; r < Kt.length; r++)
                  Kt[r].el.id != this.id ||
                    (e && Kt[r].anim != e) ||
                    (!1 !== t(`raphael.anim.stop.${this.id}`, this, Kt[r].anim) &&
                      Kt.splice(r--, 1));
                return this;
              }),
              t.on('raphael.remove', se),
              t.on('raphael.clear', se),
              (Wt.toString = function () {
                return 'Raphaël’s object';
              });
            let oe;
            let le;
            let he;
            let ue;
            var ce = function (t) {
              if (((this.items = []), (this.length = 0), (this.type = 'set'), t))
                for (let e = 0, r = t.length; e < r; e++)
                  !t[e] ||
                    (t[e].constructor != Wt.constructor && t[e].constructor != ce) ||
                    ((this[this.items.length] = this.items[this.items.length] = t[e]),
                    this.length++);
            };
            const fe = ce.prototype;
            for (const pe in ((fe.push = function () {
              for (var t, e, r = 0, i = arguments.length; r < i; r++)
                !(t = arguments[r]) ||
                  (t.constructor != Wt.constructor && t.constructor != ce) ||
                  ((this[(e = this.items.length)] = this.items[e] = t), this.length++);
              return this;
            }),
            (fe.pop = function () {
              return this.length && delete this[this.length--], this.items.pop();
            }),
            (fe.forEach = function (t, e) {
              for (let r = 0, i = this.items.length; r < i; r++)
                if (!1 === t.call(e, this.items[r], r)) return this;
              return this;
            }),
            Wt))
              Wt[o](pe) &&
                (fe[pe] = (function (t) {
                  return function () {
                    const e = arguments;
                    return this.forEach((r) => {
                      r[t][c](r, e);
                    });
                  };
                })(pe));
            return (
              (fe.attr = function (t, r) {
                if (t && e.is(t, A) && e.is(t[0], 'object'))
                  for (let i = 0, n = t.length; i < n; i++) this.items[i].attr(t[i]);
                else for (let a = 0, s = this.items.length; a < s; a++) this.items[a].attr(t, r);
                return this;
              }),
              (fe.clear = function () {
                for (; this.length; ) this.pop();
              }),
              (fe.splice = function (t, e, r) {
                (t = t < 0 ? w(this.length + t, 0) : t), (e = w(0, k(this.length - t, e)));
                let i;
                const n = [];
                const a = [];
                const s = [];
                for (i = 2; i < arguments.length; i++) s.push(arguments[i]);
                for (i = 0; i < e; i++) a.push(this[t + i]);
                for (; i < this.length - t; i++) n.push(this[t + i]);
                const o = s.length;
                for (i = 0; i < o + n.length; i++)
                  this.items[t + i] = this[t + i] = i < o ? s[i] : n[i - o];
                for (i = this.items.length = this.length -= e - o; this[i]; ) delete this[i++];
                return new ce(a);
              }),
              (fe.exclude = function (t) {
                for (let e = 0, r = this.length; e < r; e++)
                  if (this[e] == t) return this.splice(e, 1), !0;
              }),
              (fe.animate = function (t, r, i, n) {
                (e.is(i, 'function') || !i) && (n = i || null);
                let a;
                let s;
                let o = this.items.length;
                let l = o;
                const h = this;
                if (!o) return this;
                n &&
                  (s = function () {
                    !--o && n.call(h);
                  }),
                  (i = e.is(i, 'string') ? i : s);
                const u = e.animation(t, r, i, s);
                for (a = this.items[--l].animate(u); l--; )
                  this.items[l] && !this.items[l].removed && this.items[l].animateWith(a, u, u),
                    (this.items[l] && !this.items[l].removed) || o--;
                return this;
              }),
              (fe.insertAfter = function (t) {
                for (let e = this.items.length; e--; ) this.items[e].insertAfter(t);
                return this;
              }),
              (fe.getBBox = function () {
                for (var t = [], e = [], r = [], i = [], n = this.items.length; n--; )
                  if (!this.items[n].removed) {
                    const a = this.items[n].getBBox();
                    t.push(a.x), e.push(a.y), r.push(a.x + a.width), i.push(a.y + a.height);
                  }
                return {
                  x: (t = k[c](0, t)),
                  y: (e = k[c](0, e)),
                  x2: (r = w[c](0, r)),
                  y2: (i = w[c](0, i)),
                  width: r - t,
                  height: i - e,
                };
              }),
              (fe.clone = function (t) {
                t = this.paper.set();
                for (let e = 0, r = this.items.length; e < r; e++) t.push(this.items[e].clone());
                return t;
              }),
              (fe.toString = function () {
                return 'Raphaël‘s set';
              }),
              (fe.glow = function (t) {
                const e = this.paper.set();
                return (
                  this.forEach((r, i) => {
                    const n = r.glow(t);
                    n != null &&
                      n.forEach((t, r) => {
                        e.push(t);
                      });
                  }),
                  e
                );
              }),
              (fe.isPointInside = function (t, e) {
                let r = !1;
                return (
                  this.forEach((i) => {
                    if (i.isPointInside(t, e)) return (r = !0), !1;
                  }),
                  r
                );
              }),
              (e.registerFont = function (t) {
                if (!t.face) return t;
                this.fonts = this.fonts || {};
                const e = { w: t.w, face: {}, glyphs: {} };
                const r = t.face['font-family'];
                for (const i in t.face) t.face[o](i) && (e.face[i] = t.face[i]);
                if ((this.fonts[r] ? this.fonts[r].push(e) : (this.fonts[r] = [e]), !t.svg)) {
                  for (const n in ((e.face['units-per-em'] = F(t.face['units-per-em'], 10)),
                  t.glyphs)) {
                    if (t.glyphs[o](n)) {
                      const a = t.glyphs[n];
                      if (
                        ((e.glyphs[n] = {
                          w: a.w,
                          k: {},
                          d:
                            a.d &&
                            `M${a.d.replace(
                              /[mlcxtrv]/g,
                              (t) =>
                                ({
                                  l: 'L',
                                  c: 'C',
                                  x: 'z',
                                  t: 'm',
                                  r: 'l',
                                  v: 'c',
                                }[t] || 'M'),
                            )}z`,
                        }),
                        a.k)
                      )
                        for (const s in a.k) a[o](s) && (e.glyphs[n].k[s] = a.k[s]);
                    }
                  }
                }
                return t;
              }),
              (i.getFont = function (t, r, i, n) {
                if (
                  ((n = n || 'normal'),
                  (i = i || 'normal'),
                  (r =
                    +r ||
                    {
                      normal: 400,
                      bold: 700,
                      lighter: 300,
                      bolder: 800,
                    }[r] ||
                    400),
                  e.fonts)
                ) {
                  let a;
                  let s = e.fonts[t];
                  if (!s) {
                    const l = new RegExp(`(^|\\s)${t.replace(/[^\w\d\s+!~.:_-]/g, d)}(\\s|$)`, 'i');
                    for (const h in e.fonts)
                      if (e.fonts[o](h) && l.test(h)) {
                        s = e.fonts[h];
                        break;
                      }
                  }
                  if (s)
                    for (
                      let u = 0, c = s.length;
                      u < c &&
                      ((a = s[u]).face['font-weight'] != r ||
                        (a.face['font-style'] != i && a.face['font-style']) ||
                        a.face['font-stretch'] != n);
                      u++
                    );
                  return a;
                }
              }),
              (i.print = function (t, r, i, a, s, o, l, h) {
                (o = o || 'middle'), (l = w(k(l || 0, 1), -1)), (h = w(k(h || 1, 3), 1));
                let u;
                const c = x(i)[v](d);
                let f = 0;
                let p = 0;
                let g = d;
                if ((e.is(a, 'string') && (a = this.getFont(a)), a)) {
                  u = (s || 16) / a.face['units-per-em'];
                  for (
                    let y = a.face.bbox[v](n),
                      m = +y[0],
                      b = y[3] - y[1],
                      _ = 0,
                      B = +y[1] + (o == 'baseline' ? b + +a.face.descent : b / 2),
                      C = 0,
                      S = c.length;
                    C < S;
                    C++
                  ) {
                    if (c[C] == '\n') (f = 0), (A = 0), (p = 0), (_ += b * h);
                    else {
                      const T = (p && a.glyphs[c[C - 1]]) || {};
                      var A = a.glyphs[c[C]];
                      (f += p ? (T.w || a.w) + ((T.k && T.k[c[C]]) || 0) + a.w * l : 0), (p = 1);
                    }
                    A &&
                      A.d &&
                      (g += e.transformPath(A.d, [
                        't',
                        f * u,
                        _ * u,
                        's',
                        u,
                        u,
                        m,
                        B,
                        't',
                        (t - m) / u,
                        (r - B) / u,
                      ]));
                  }
                }
                return this.path(g).attr({ fill: '#000', stroke: 'none' });
              }),
              (i.add = function (t) {
                if (e.is(t, 'array'))
                  for (var r, i = this.set(), n = 0, s = t.length; n < s; n++)
                    (r = t[n] || {}), a[o](r.type) && i.push(this[r.type]().attr(r));
                return i;
              }),
              (e.format = function (t, r) {
                const i = e.is(r, A) ? [0][f](r) : arguments;
                return (
                  t &&
                    e.is(t, 'string') &&
                    i.length - 1 &&
                    (t = t.replace(s, (t, e) => (i[++e] == null ? d : i[e]))),
                  t || d
                );
              }),
              (e.fullfill =
                ((oe = /\{([^\}]+)\}/g),
                (le = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g),
                function (t, e) {
                  return String(t).replace(oe, (t, r) =>
                    (function (t, e, r) {
                      let i = r;
                      return (
                        e.replace(le, (t, e, r, n, a) => {
                          (e = e || n),
                            i && (e in i && (i = i[e]), typeof i === 'function' && a && (i = i()));
                        }),
                        (i = `${i == null || i == r ? t : i}`)
                      );
                    })(t, r, e),
                  );
                })),
              (e.ninja = function () {
                if (h.was) l.win.Raphael = h.is;
                else {
                  window.Raphael = void 0;
                  try {
                    delete window.Raphael;
                  } catch (t) {}
                }
                return e;
              }),
              (e.st = fe),
              t.on('raphael.DOMload', () => {
                r = !0;
              }),
              (he = document).readyState == null &&
                he.addEventListener &&
                (he.addEventListener(
                  'DOMContentLoaded',
                  (ue = function () {
                    he.removeEventListener('DOMContentLoaded', ue, !1),
                      (he.readyState = 'complete');
                  }),
                  !1,
                ),
                (he.readyState = 'loading')),
              (function t() {
                /in/.test(he.readyState) ? setTimeout(t, 9) : e.eve('raphael.DOMload');
              })(),
              e
            );
          }.apply(e, i)) || (t.exports = n);
    },
    function (t, e, r) {
      let i;
      let n;
      (i = [r(0), r(3), r(4)]),
        void 0 ===
          (n = function (t) {
            return t;
          }.apply(e, i)) || (t.exports = n);
    },
    function (t, e, r) {
      let i;
      let n;
      let a;
      let s;
      let o;
      let l;
      let h;
      let u;
      let c;
      let f;
      let p;
      let d;
      let g;
      let x;
      (s = 'hasOwnProperty'),
        (o = /[\.\/]/),
        (l = /\s*,\s*/),
        (h = function (t, e) {
          return t - e;
        }),
        (u = { n: {} }),
        (c = function () {
          for (let t = 0, e = this.length; t < e; t++) if (void 0 !== this[t]) return this[t];
        }),
        (f = function () {
          for (let t = this.length; --t; ) if (void 0 !== this[t]) return this[t];
        }),
        (p = Object.prototype.toString),
        (d = String),
        (g =
          Array.isArray ||
          function (t) {
            return t instanceof Array || p.call(t) == '[object Array]';
          }),
        ((x = function (t, e) {
          let r;
          const i = a;
          const s = Array.prototype.slice.call(arguments, 2);
          const o = x.listeners(t);
          let l = 0;
          const u = [];
          const p = {};
          const d = [];
          const g = n;
          (d.firstDefined = c), (d.lastDefined = f), (n = t), (a = 0);
          for (var v = 0, y = o.length; v < y; v++)
            'zIndex' in o[v] && (u.push(o[v].zIndex), o[v].zIndex < 0 && (p[o[v].zIndex] = o[v]));
          for (u.sort(h); u[l] < 0; )
            if (((r = p[u[l++]]), d.push(r.apply(e, s)), a)) return (a = i), d;
          for (v = 0; v < y; v++)
            if ('zIndex' in (r = o[v]))
              if (r.zIndex == u[l]) {
                if ((d.push(r.apply(e, s)), a)) break;
                do {
                  if (((r = p[u[++l]]) && d.push(r.apply(e, s)), a)) break;
                } while (r);
              } else p[r.zIndex] = r;
            else if ((d.push(r.apply(e, s)), a)) break;
          return (a = i), (n = g), d;
        })._events = u),
        (x.listeners = function (t) {
          let e;
          let r;
          let i;
          let n;
          let a;
          let s;
          let l;
          let h;
          const c = g(t) ? t : t.split(o);
          let f = u;
          let p = [f];
          let d = [];
          for (n = 0, a = c.length; n < a; n++) {
            for (h = [], s = 0, l = p.length; s < l; s++)
              for (r = [(f = p[s].n)[c[n]], f['*']], i = 2; i--; )
                (e = r[i]) && (h.push(e), (d = d.concat(e.f || [])));
            p = h;
          }
          return d;
        }),
        (x.separator = function (t) {
          t
            ? ((t = `[${(t = d(t).replace(/(?=[\.\^\]\[\-])/g, '\\'))}]`), (o = new RegExp(t)))
            : (o = /[\.\/]/);
        }),
        (x.on = function (t, e) {
          if (typeof e !== 'function') return function () {};
          for (let r = g(t) ? (g(t[0]) ? t : [t]) : d(t).split(l), i = 0, n = r.length; i < n; i++)
            !(function (t) {
              for (var r, i = g(t) ? t : d(t).split(o), n = u, a = 0, s = i.length; a < s; a++)
                n = ((n = n.n).hasOwnProperty(i[a]) && n[i[a]]) || (n[i[a]] = { n: {} });
              for (n.f = n.f || [], a = 0, s = n.f.length; a < s; a++)
                if (n.f[a] == e) {
                  r = !0;
                  break;
                }
              !r && n.f.push(e);
            })(r[i]);
          return function (t) {
            +t == +t && (e.zIndex = +t);
          };
        }),
        (x.f = function (t) {
          const e = [].slice.call(arguments, 1);
          return function () {
            x.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)));
          };
        }),
        (x.stop = function () {
          a = 1;
        }),
        (x.nt = function (t) {
          const e = g(n) ? n.join('.') : n;
          return t ? new RegExp(`(?:\\.|\\/|^)${t}(?:\\.|\\/|$)`).test(e) : e;
        }),
        (x.nts = function () {
          return g(n) ? n : n.split(o);
        }),
        (x.off = x.unbind =
          function (t, e) {
            if (t) {
              let r = g(t) ? (g(t[0]) ? t : [t]) : d(t).split(l);
              if (r.length > 1) for (var i = 0, n = r.length; i < n; i++) x.off(r[i], e);
              else {
                r = g(t) ? t : d(t).split(o);
                let a;
                let h;
                let c;
                let f;
                let p;
                const v = [u];
                for (i = 0, n = r.length; i < n; i++)
                  for (f = 0; f < v.length; f += c.length - 2) {
                    if (((c = [f, 1]), (a = v[f].n), r[i] != '*')) a[r[i]] && c.push(a[r[i]]);
                    else for (h in a) a[s](h) && c.push(a[h]);
                    v.splice.apply(v, c);
                  }
                for (i = 0, n = v.length; i < n; i++)
                  for (a = v[i]; a.n; ) {
                    if (e) {
                      if (a.f) {
                        for (f = 0, p = a.f.length; f < p; f++)
                          if (a.f[f] == e) {
                            a.f.splice(f, 1);
                            break;
                          }
                        !a.f.length && delete a.f;
                      }
                      for (h in a.n)
                        if (a.n[s](h) && a.n[h].f) {
                          const y = a.n[h].f;
                          for (f = 0, p = y.length; f < p; f++)
                            if (y[f] == e) {
                              y.splice(f, 1);
                              break;
                            }
                          !y.length && delete a.n[h].f;
                        }
                    } else for (h in (delete a.f, a.n)) a.n[s](h) && a.n[h].f && delete a.n[h].f;
                    a = a.n;
                  }
              }
            } else x._events = u = { n: {} };
          }),
        (x.once = function (t, e) {
          var r = function () {
            return x.off(t, r), e.apply(this, arguments);
          };
          return x.on(t, r);
        }),
        (x.version = '0.5.0'),
        (x.toString = function () {
          return 'You are running Eve 0.5.0';
        }),
        t.exports
          ? (t.exports = x)
          : void 0 ===
              (i = function () {
                return x;
              }.apply(e, [])) || (t.exports = i);
    },
    function (t, e, r) {
      let i;
      let n;
      (i = [r(0)]),
        void 0 ===
          (n = function (t) {
            if (!t || t.svg) {
              const e = 'hasOwnProperty';
              const r = String;
              const i = parseFloat;
              const n = parseInt;
              const a = Math;
              const s = a.max;
              const o = a.abs;
              const l = a.pow;
              const h = /[, ]+/;
              const u = t.eve;
              const c = '';
              const f = ' ';
              const p = 'http://www.w3.org/1999/xlink';
              const d = {
                block: 'M5,0 0,2.5 5,5z',
                classic: 'M5,0 0,2.5 5,5 3.5,3 3.5,2z',
                diamond: 'M2.5,0 5,2.5 2.5,5 0,2.5z',
                open: 'M6,1 1,3.5 6,6',
                oval: 'M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z',
              };
              const g = {};
              t.toString = function () {
                return `Your browser supports SVG.\nYou are running Raphaël ${this.version}`;
              };
              var x = function (i, n) {
                if (n)
                  for (const a in (typeof i === 'string' && (i = x(i)), n))
                    n[e](a) &&
                      (a.substring(0, 6) == 'xlink:'
                        ? i.setAttributeNS(p, a.substring(6), r(n[a]))
                        : i.setAttribute(a, r(n[a])));
                else
                  (i = t._g.doc.createElementNS('http://www.w3.org/2000/svg', i)).style &&
                    (i.style.webkitTapHighlightColor = 'rgba(0,0,0,0)');
                return i;
              };
              const v = function (e, n) {
                let h = 'linear';
                let u = e.id + n;
                let f = 0.5;
                let p = 0.5;
                const d = e.node;
                const g = e.paper;
                const v = d.style;
                let m = t._g.doc.getElementById(u);
                if (!m) {
                  if (
                    ((n = (n = r(n).replace(t._radial_gradient, (t, e, r) => {
                      if (((h = 'radial'), e && r)) {
                        f = i(e);
                        const n = 2 * ((p = i(r)) > 0.5) - 1;
                        l(f - 0.5, 2) + l(p - 0.5, 2) > 0.25 &&
                          (p = a.sqrt(0.25 - l(f - 0.5, 2)) * n + 0.5) &&
                          p != 0.5 &&
                          (p = p.toFixed(5) - 1e-5 * n);
                      }
                      return c;
                    })).split(/\s*\-\s*/)),
                    h == 'linear')
                  ) {
                    let b = n.shift();
                    if (((b = -i(b)), isNaN(b))) return null;
                    var _ = [0, 0, a.cos(t.rad(b)), a.sin(t.rad(b))];
                    const w = 1 / (s(o(_[2]), o(_[3])) || 1);
                    (_[2] *= w),
                      (_[3] *= w),
                      _[2] < 0 && ((_[0] = -_[2]), (_[2] = 0)),
                      _[3] < 0 && ((_[1] = -_[3]), (_[3] = 0));
                  }
                  const k = t._parseDots(n);
                  if (!k) return null;
                  if (
                    ((u = u.replace(/[\(\)\s,\xb0#]/g, '_')),
                    e.gradient &&
                      u != e.gradient.id &&
                      (g.defs.removeChild(e.gradient), delete e.gradient),
                    !e.gradient)
                  ) {
                    (m = x(`${h}Gradient`, { id: u })),
                      (e.gradient = m),
                      x(
                        m,
                        h == 'radial'
                          ? { fx: f, fy: p }
                          : {
                              x1: _[0],
                              y1: _[1],
                              x2: _[2],
                              y2: _[3],
                              gradientTransform: e.matrix.invert(),
                            },
                      ),
                      g.defs.appendChild(m);
                    for (let B = 0, C = k.length; B < C; B++)
                      m.appendChild(
                        x('stop', {
                          offset: k[B].offset ? k[B].offset : B ? '100%' : '0%',
                          'stop-color': k[B].color || '#fff',
                          'stop-opacity': isFinite(k[B].opacity) ? k[B].opacity : 1,
                        }),
                      );
                  }
                }
                return (
                  x(d, { fill: y(u), opacity: 1, 'fill-opacity': 1 }),
                  (v.fill = c),
                  (v.opacity = 1),
                  (v.fillOpacity = 1),
                  1
                );
              };
              var y = function (t) {
                if ((e = document.documentMode) && (e === 9 || e === 10)) return `url('#${t}')`;
                let e;
                const r = document.location;
                return `url('${r.protocol}//${r.host}${r.pathname}${r.search}#${t}')`;
              };
              const m = function (t) {
                const e = t.getBBox(1);
                x(t.pattern, { patternTransform: `${t.matrix.invert()} translate(${e.x},${e.y})` });
              };
              const b = function (i, n, a) {
                if (i.type == 'path') {
                  for (
                    var s,
                      o,
                      l,
                      h,
                      u,
                      f = r(n).toLowerCase().split('-'),
                      p = i.paper,
                      v = a ? 'end' : 'start',
                      y = i.node,
                      m = i.attrs,
                      b = m['stroke-width'],
                      _ = f.length,
                      w = 'classic',
                      k = 3,
                      B = 3,
                      C = 5;
                    _--;

                  )
                    switch (f[_]) {
                      case 'block':
                      case 'classic':
                      case 'oval':
                      case 'diamond':
                      case 'open':
                      case 'none':
                        w = f[_];
                        break;
                      case 'wide':
                        B = 5;
                        break;
                      case 'narrow':
                        B = 2;
                        break;
                      case 'long':
                        k = 5;
                        break;
                      case 'short':
                        k = 2;
                    }
                  if (
                    (w == 'open'
                      ? ((k += 2),
                        (B += 2),
                        (C += 2),
                        (l = 1),
                        (h = a ? 4 : 1),
                        (u = { fill: 'none', stroke: m.stroke }))
                      : ((h = l = k / 2), (u = { fill: m.stroke, stroke: 'none' })),
                    i._.arrows
                      ? a
                        ? (i._.arrows.endPath && g[i._.arrows.endPath]--,
                          i._.arrows.endMarker && g[i._.arrows.endMarker]--)
                        : (i._.arrows.startPath && g[i._.arrows.startPath]--,
                          i._.arrows.startMarker && g[i._.arrows.startMarker]--)
                      : (i._.arrows = {}),
                    w != 'none')
                  ) {
                    const S = `raphael-marker-${w}`;
                    const T = `raphael-marker-${v}${w}${k}${B}-obj${i.id}`;
                    t._g.doc.getElementById(S)
                      ? g[S]++
                      : (p.defs.appendChild(
                          x(x('path'), { 'stroke-linecap': 'round', d: d[w], id: S }),
                        ),
                        (g[S] = 1));
                    let A;
                    let M = t._g.doc.getElementById(T);
                    M
                      ? (g[T]++, (A = M.getElementsByTagName('use')[0]))
                      : ((M = x(x('marker'), {
                          id: T,
                          markerHeight: B,
                          markerWidth: k,
                          orient: 'auto',
                          refX: h,
                          refY: B / 2,
                        })),
                        (A = x(x('use'), {
                          'xlink:href': `#${S}`,
                          transform: `${a ? `rotate(180 ${k / 2} ${B / 2}) ` : c}scale(${k / C},${
                            B / C
                          })`,
                          'stroke-width': (1 / ((k / C + B / C) / 2)).toFixed(4),
                        })),
                        M.appendChild(A),
                        p.defs.appendChild(M),
                        (g[T] = 1)),
                      x(A, u);
                    const E = l * (w != 'diamond' && w != 'oval');
                    a
                      ? ((s = i._.arrows.startdx * b || 0), (o = t.getTotalLength(m.path) - E * b))
                      : ((s = E * b), (o = t.getTotalLength(m.path) - (i._.arrows.enddx * b || 0))),
                      ((u = {})[`marker-${v}`] = `url(#${T})`),
                      (o || s) && (u.d = t.getSubpath(m.path, s, o)),
                      x(y, u),
                      (i._.arrows[`${v}Path`] = S),
                      (i._.arrows[`${v}Marker`] = T),
                      (i._.arrows[`${v}dx`] = E),
                      (i._.arrows[`${v}Type`] = w),
                      (i._.arrows[`${v}String`] = n);
                  } else
                    a
                      ? ((s = i._.arrows.startdx * b || 0), (o = t.getTotalLength(m.path) - s))
                      : ((s = 0), (o = t.getTotalLength(m.path) - (i._.arrows.enddx * b || 0))),
                      i._.arrows[`${v}Path`] && x(y, { d: t.getSubpath(m.path, s, o) }),
                      delete i._.arrows[`${v}Path`],
                      delete i._.arrows[`${v}Marker`],
                      delete i._.arrows[`${v}dx`],
                      delete i._.arrows[`${v}Type`],
                      delete i._.arrows[`${v}String`];
                  for (u in g)
                    if (g[e](u) && !g[u]) {
                      const N = t._g.doc.getElementById(u);
                      N && N.parentNode.removeChild(N);
                    }
                }
              };
              const _ = {
                '-': [3, 1],
                '.': [1, 1],
                '-.': [3, 1, 1, 1],
                '-..': [3, 1, 1, 1, 1, 1],
                '. ': [1, 3],
                '- ': [4, 3],
                '--': [8, 3],
                '- .': [4, 3, 1, 3],
                '--.': [8, 3, 1, 3],
                '--..': [8, 3, 1, 3, 1, 3],
              };
              const w = function (t, e, i) {
                if ((e = _[r(e).toLowerCase()])) {
                  for (
                    var n = t.attrs['stroke-width'] || '1',
                      a =
                        { round: n, square: n, butt: 0 }[
                          t.attrs['stroke-linecap'] || i['stroke-linecap']
                        ] || 0,
                      s = [],
                      o = e.length;
                    o--;

                  )
                    s[o] = e[o] * n + (o % 2 ? 1 : -1) * a;
                  x(t.node, { 'stroke-dasharray': s.join(',') });
                } else x(t.node, { 'stroke-dasharray': 'none' });
              };
              const k = function (i, a) {
                const l = i.node;
                const u = i.attrs;
                const f = l.style.visibility;
                for (let d in ((l.style.visibility = 'hidden'), a)) {
                  if (a[e](d)) {
                    if (!t._availableAttrs[e](d)) continue;
                    let g = a[d];
                    switch (((u[d] = g), d)) {
                      case 'blur':
                        i.blur(g);
                        break;
                      case 'title':
                        var y = l.getElementsByTagName('title');
                        if (y.length && (y = y[0])) y.firstChild.nodeValue = g;
                        else {
                          y = x('title');
                          const _ = t._g.doc.createTextNode(g);
                          y.appendChild(_), l.appendChild(y);
                        }
                        break;
                      case 'href':
                      case 'target':
                        var k = l.parentNode;
                        if (k.tagName.toLowerCase() != 'a') {
                          const C = x('a');
                          k.insertBefore(C, l), C.appendChild(l), (k = C);
                        }
                        d == 'target'
                          ? k.setAttributeNS(p, 'show', g == 'blank' ? 'new' : g)
                          : k.setAttributeNS(p, d, g);
                        break;
                      case 'cursor':
                        l.style.cursor = g;
                        break;
                      case 'transform':
                        i.transform(g);
                        break;
                      case 'arrow-start':
                        b(i, g);
                        break;
                      case 'arrow-end':
                        b(i, g, 1);
                        break;
                      case 'clip-rect':
                        var S = r(g).split(h);
                        if (S.length == 4) {
                          i.clip && i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);
                          var T = x('clipPath');
                          const A = x('rect');
                          (T.id = t.createUUID()),
                            x(A, {
                              x: S[0],
                              y: S[1],
                              width: S[2],
                              height: S[3],
                            }),
                            T.appendChild(A),
                            i.paper.defs.appendChild(T),
                            x(l, { 'clip-path': `url(#${T.id})` }),
                            (i.clip = A);
                        }
                        if (!g) {
                          const M = l.getAttribute('clip-path');
                          if (M) {
                            const E = t._g.doc.getElementById(M.replace(/(^url\(#|\)$)/g, c));
                            E && E.parentNode.removeChild(E),
                              x(l, { 'clip-path': c }),
                              delete i.clip;
                          }
                        }
                        break;
                      case 'path':
                        i.type == 'path' &&
                          (x(l, { d: g ? (u.path = t._pathToAbsolute(g)) : 'M0,0' }),
                          (i._.dirty = 1),
                          i._.arrows &&
                            ('startString' in i._.arrows && b(i, i._.arrows.startString),
                            'endString' in i._.arrows && b(i, i._.arrows.endString, 1)));
                        break;
                      case 'width':
                        if ((l.setAttribute(d, g), (i._.dirty = 1), !u.fx)) break;
                        (d = 'x'), (g = u.x);
                      case 'x':
                        u.fx && (g = -u.x - (u.width || 0));
                      case 'rx':
                        if (d == 'rx' && i.type == 'rect') break;
                      case 'cx':
                        l.setAttribute(d, g), i.pattern && m(i), (i._.dirty = 1);
                        break;
                      case 'height':
                        if ((l.setAttribute(d, g), (i._.dirty = 1), !u.fy)) break;
                        (d = 'y'), (g = u.y);
                      case 'y':
                        u.fy && (g = -u.y - (u.height || 0));
                      case 'ry':
                        if (d == 'ry' && i.type == 'rect') break;
                      case 'cy':
                        l.setAttribute(d, g), i.pattern && m(i), (i._.dirty = 1);
                        break;
                      case 'r':
                        i.type == 'rect' ? x(l, { rx: g, ry: g }) : l.setAttribute(d, g),
                          (i._.dirty = 1);
                        break;
                      case 'src':
                        i.type == 'image' && l.setAttributeNS(p, 'href', g);
                        break;
                      case 'stroke-width':
                        (i._.sx == 1 && i._.sy == 1) || (g /= s(o(i._.sx), o(i._.sy)) || 1),
                          l.setAttribute(d, g),
                          u['stroke-dasharray'] && w(i, u['stroke-dasharray'], a),
                          i._.arrows &&
                            ('startString' in i._.arrows && b(i, i._.arrows.startString),
                            'endString' in i._.arrows && b(i, i._.arrows.endString, 1));
                        break;
                      case 'stroke-dasharray':
                        w(i, g, a);
                        break;
                      case 'fill':
                        var N = r(g).match(t._ISURL);
                        if (N) {
                          T = x('pattern');
                          var L = x('image');
                          (T.id = t.createUUID()),
                            x(T, {
                              x: 0,
                              y: 0,
                              patternUnits: 'userSpaceOnUse',
                              height: 1,
                              width: 1,
                            }),
                            x(L, { x: 0, y: 0, 'xlink:href': N[1] }),
                            T.appendChild(L),
                            (function (e) {
                              t._preload(N[1], function () {
                                const t = this.offsetWidth;
                                const r = this.offsetHeight;
                                x(e, { width: t, height: r }), x(L, { width: t, height: r });
                              });
                            })(T),
                            i.paper.defs.appendChild(T),
                            x(l, { fill: `url(#${T.id})` }),
                            (i.pattern = T),
                            i.pattern && m(i);
                          break;
                        }
                        var P = t.getRGB(g);
                        if (P.error) {
                          if (
                            (i.type == 'circle' || i.type == 'ellipse' || r(g).charAt() != 'r') &&
                            v(i, g)
                          ) {
                            if ('opacity' in u || 'fill-opacity' in u) {
                              var z = t._g.doc.getElementById(
                                l.getAttribute('fill').replace(/^url\(#|\)$/g, c),
                              );
                              if (z) {
                                var F = z.getElementsByTagName('stop');
                                x(F[F.length - 1], {
                                  'stop-opacity':
                                    ('opacity' in u ? u.opacity : 1) *
                                    ('fill-opacity' in u ? u['fill-opacity'] : 1),
                                });
                              }
                            }
                            (u.gradient = g), (u.fill = 'none');
                            break;
                          }
                        } else
                          delete a.gradient,
                            delete u.gradient,
                            !t.is(u.opacity, 'undefined') &&
                              t.is(a.opacity, 'undefined') &&
                              x(l, { opacity: u.opacity }),
                            !t.is(u['fill-opacity'], 'undefined') &&
                              t.is(a['fill-opacity'], 'undefined') &&
                              x(l, { 'fill-opacity': u['fill-opacity'] });
                        P[e]('opacity') &&
                          x(l, { 'fill-opacity': P.opacity > 1 ? P.opacity / 100 : P.opacity });
                      case 'stroke':
                        (P = t.getRGB(g)),
                          l.setAttribute(d, P.hex),
                          d == 'stroke' &&
                            P[e]('opacity') &&
                            x(l, { 'stroke-opacity': P.opacity > 1 ? P.opacity / 100 : P.opacity }),
                          d == 'stroke' &&
                            i._.arrows &&
                            ('startString' in i._.arrows && b(i, i._.arrows.startString),
                            'endString' in i._.arrows && b(i, i._.arrows.endString, 1));
                        break;
                      case 'gradient':
                        (i.type == 'circle' || i.type == 'ellipse' || r(g).charAt() != 'r') &&
                          v(i, g);
                        break;
                      case 'opacity':
                        u.gradient &&
                          !u[e]('stroke-opacity') &&
                          x(l, { 'stroke-opacity': g > 1 ? g / 100 : g });
                      case 'fill-opacity':
                        if (u.gradient) {
                          (z = t._g.doc.getElementById(
                            l.getAttribute('fill').replace(/^url\(#|\)$/g, c),
                          )) &&
                            ((F = z.getElementsByTagName('stop')),
                            x(F[F.length - 1], { 'stop-opacity': g }));
                          break;
                        }
                      default:
                        d == 'font-size' && (g = `${n(g, 10)}px`);
                        var R = d.replace(/(\-.)/g, (t) => t.substring(1).toUpperCase());
                        (l.style[R] = g), (i._.dirty = 1), l.setAttribute(d, g);
                    }
                  }
                }
                B(i, a), (l.style.visibility = f);
              };
              var B = function (i, a) {
                if (
                  i.type == 'text' &&
                  (a[e]('text') || a[e]('font') || a[e]('font-size') || a[e]('x') || a[e]('y'))
                ) {
                  const s = i.attrs;
                  const o = i.node;
                  const l = o.firstChild
                    ? n(
                        t._g.doc.defaultView
                          .getComputedStyle(o.firstChild, c)
                          .getPropertyValue('font-size'),
                        10,
                      )
                    : 10;
                  if (a[e]('text')) {
                    for (s.text = a.text; o.firstChild; ) o.removeChild(o.firstChild);
                    for (var h, u = r(a.text).split('\n'), f = [], p = 0, d = u.length; p < d; p++)
                      (h = x('tspan')),
                        p && x(h, { dy: 1.2 * l, x: s.x }),
                        h.appendChild(t._g.doc.createTextNode(u[p])),
                        o.appendChild(h),
                        (f[p] = h);
                  } else
                    for (p = 0, d = (f = o.getElementsByTagName('tspan')).length; p < d; p++)
                      p ? x(f[p], { dy: 1.2 * l, x: s.x }) : x(f[0], { dy: 0 });
                  x(o, { x: s.x, y: s.y }), (i._.dirty = 1);
                  const g = i._getBBox();
                  const v = s.y - (g.y + g.height / 2);
                  v && t.is(v, 'finite') && x(f[0], { dy: v });
                }
              };
              const C = function (t) {
                return t.parentNode && t.parentNode.tagName.toLowerCase() === 'a'
                  ? t.parentNode
                  : t;
              };
              const S = function (e, r) {
                (this[0] = this.node = e),
                  (e.raphael = !0),
                  (this.id = `0000${((Math.random() * Math.pow(36, 5)) << 0).toString(36)}`.slice(
                    -5,
                  )),
                  (e.raphaelid = this.id),
                  (this.matrix = t.matrix()),
                  (this.realPath = null),
                  (this.paper = r),
                  (this.attrs = this.attrs || {}),
                  (this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    deg: 0,
                    dx: 0,
                    dy: 0,
                    dirty: 1,
                  }),
                  !r.bottom && (r.bottom = this),
                  (this.prev = r.top),
                  r.top && (r.top.next = this),
                  (r.top = this),
                  (this.next = null);
              };
              const T = t.el;
              (S.prototype = T),
                (T.constructor = S),
                (t._engine.path = function (t, e) {
                  const r = x('path');
                  e.canvas && e.canvas.appendChild(r);
                  const i = new S(r, e);
                  return (i.type = 'path'), k(i, { fill: 'none', stroke: '#000', path: t }), i;
                }),
                (T.rotate = function (t, e, n) {
                  if (this.removed) return this;
                  if (
                    ((t = r(t).split(h)).length - 1 && ((e = i(t[1])), (n = i(t[2]))),
                    (t = i(t[0])),
                    n == null && (e = n),
                    e == null || n == null)
                  ) {
                    const a = this.getBBox(1);
                    (e = a.x + a.width / 2), (n = a.y + a.height / 2);
                  }
                  return this.transform(this._.transform.concat([['r', t, e, n]])), this;
                }),
                (T.scale = function (t, e, n, a) {
                  if (this.removed) return this;
                  if (
                    ((t = r(t).split(h)).length - 1 &&
                      ((e = i(t[1])), (n = i(t[2])), (a = i(t[3]))),
                    (t = i(t[0])),
                    e == null && (e = t),
                    a == null && (n = a),
                    n == null || a == null)
                  )
                    var s = this.getBBox(1);
                  return (
                    (n = n == null ? s.x + s.width / 2 : n),
                    (a = a == null ? s.y + s.height / 2 : a),
                    this.transform(this._.transform.concat([['s', t, e, n, a]])),
                    this
                  );
                }),
                (T.translate = function (t, e) {
                  return this.removed
                    ? this
                    : ((t = r(t).split(h)).length - 1 && (e = i(t[1])),
                      (t = i(t[0]) || 0),
                      (e = +e || 0),
                      this.transform(this._.transform.concat([['t', t, e]])),
                      this);
                }),
                (T.transform = function (r) {
                  const i = this._;
                  if (r == null) return i.transform;
                  if (
                    (t._extractTransform(this, r),
                    this.clip && x(this.clip, { transform: this.matrix.invert() }),
                    this.pattern && m(this),
                    this.node && x(this.node, { transform: this.matrix }),
                    i.sx != 1 || i.sy != 1)
                  ) {
                    const n = this.attrs[e]('stroke-width') ? this.attrs['stroke-width'] : 1;
                    this.attr({ 'stroke-width': n });
                  }
                  return this;
                }),
                (T.hide = function () {
                  return this.removed || (this.node.style.display = 'none'), this;
                }),
                (T.show = function () {
                  return this.removed || (this.node.style.display = ''), this;
                }),
                (T.remove = function () {
                  const e = C(this.node);
                  if (!this.removed && e.parentNode) {
                    const r = this.paper;
                    for (const i in (r.__set__ && r.__set__.exclude(this),
                    u.unbind(`raphael.*.*.${this.id}`),
                    this.gradient && r.defs.removeChild(this.gradient),
                    t._tear(this, r),
                    e.parentNode.removeChild(e),
                    this.removeData(),
                    this))
                      this[i] = typeof this[i] === 'function' ? t._removedFactory(i) : null;
                    this.removed = !0;
                  }
                }),
                (T._getBBox = function () {
                  if (this.node.style.display == 'none') {
                    this.show();
                    var t = !0;
                  }
                  let e;
                  let r = !1;
                  this.paper.canvas.parentElement
                    ? (e = this.paper.canvas.parentElement.style)
                    : this.paper.canvas.parentNode && (e = this.paper.canvas.parentNode.style),
                    e && e.display == 'none' && ((r = !0), (e.display = ''));
                  let i = {};
                  try {
                    i = this.node.getBBox();
                  } catch (t) {
                    i = {
                      x: this.node.clientLeft,
                      y: this.node.clientTop,
                      width: this.node.clientWidth,
                      height: this.node.clientHeight,
                    };
                  } finally {
                    (i = i || {}), r && (e.display = 'none');
                  }
                  return t && this.hide(), i;
                }),
                (T.attr = function (r, i) {
                  if (this.removed) return this;
                  if (r == null) {
                    const n = {};
                    for (const a in this.attrs) this.attrs[e](a) && (n[a] = this.attrs[a]);
                    return (
                      n.gradient && n.fill == 'none' && (n.fill = n.gradient) && delete n.gradient,
                      (n.transform = this._.transform),
                      n
                    );
                  }
                  if (i == null && t.is(r, 'string')) {
                    if (r == 'fill' && this.attrs.fill == 'none' && this.attrs.gradient)
                      return this.attrs.gradient;
                    if (r == 'transform') return this._.transform;
                    for (var s = r.split(h), o = {}, l = 0, c = s.length; l < c; l++)
                      (r = s[l]) in this.attrs
                        ? (o[r] = this.attrs[r])
                        : t.is(this.paper.customAttributes[r], 'function')
                        ? (o[r] = this.paper.customAttributes[r].def)
                        : (o[r] = t._availableAttrs[r]);
                    return c - 1 ? o : o[s[0]];
                  }
                  if (i == null && t.is(r, 'array')) {
                    for (o = {}, l = 0, c = r.length; l < c; l++) o[r[l]] = this.attr(r[l]);
                    return o;
                  }
                  if (i != null) {
                    var f = {};
                    f[r] = i;
                  } else r != null && t.is(r, 'object') && (f = r);
                  for (var p in f) u(`raphael.attr.${p}.${this.id}`, this, f[p]);
                  for (p in this.paper.customAttributes)
                    if (
                      this.paper.customAttributes[e](p) &&
                      f[e](p) &&
                      t.is(this.paper.customAttributes[p], 'function')
                    ) {
                      const d = this.paper.customAttributes[p].apply(this, [].concat(f[p]));
                      for (const g in ((this.attrs[p] = f[p]), d)) d[e](g) && (f[g] = d[g]);
                    }
                  return k(this, f), this;
                }),
                (T.toFront = function () {
                  if (this.removed) return this;
                  const e = C(this.node);
                  e.parentNode.appendChild(e);
                  const r = this.paper;
                  return r.top != this && t._tofront(this, r), this;
                }),
                (T.toBack = function () {
                  if (this.removed) return this;
                  const e = C(this.node);
                  const r = e.parentNode;
                  r.insertBefore(e, r.firstChild), t._toback(this, this.paper);
                  this.paper;
                  return this;
                }),
                (T.insertAfter = function (e) {
                  if (this.removed || !e) return this;
                  const r = C(this.node);
                  const i = C(e.node || e[e.length - 1].node);
                  return (
                    i.nextSibling
                      ? i.parentNode.insertBefore(r, i.nextSibling)
                      : i.parentNode.appendChild(r),
                    t._insertafter(this, e, this.paper),
                    this
                  );
                }),
                (T.insertBefore = function (e) {
                  if (this.removed || !e) return this;
                  const r = C(this.node);
                  const i = C(e.node || e[0].node);
                  return (
                    i.parentNode.insertBefore(r, i), t._insertbefore(this, e, this.paper), this
                  );
                }),
                (T.blur = function (e) {
                  const r = this;
                  if (+e != 0) {
                    const i = x('filter');
                    const n = x('feGaussianBlur');
                    (r.attrs.blur = e),
                      (i.id = t.createUUID()),
                      x(n, { stdDeviation: +e || 1.5 }),
                      i.appendChild(n),
                      r.paper.defs.appendChild(i),
                      (r._blur = i),
                      x(r.node, { filter: `url(#${i.id})` });
                  } else
                    r._blur &&
                      (r._blur.parentNode.removeChild(r._blur),
                      delete r._blur,
                      delete r.attrs.blur),
                      r.node.removeAttribute('filter');
                  return r;
                }),
                (t._engine.circle = function (t, e, r, i) {
                  const n = x('circle');
                  t.canvas && t.canvas.appendChild(n);
                  const a = new S(n, t);
                  return (
                    (a.attrs = {
                      cx: e,
                      cy: r,
                      r: i,
                      fill: 'none',
                      stroke: '#000',
                    }),
                    (a.type = 'circle'),
                    x(n, a.attrs),
                    a
                  );
                }),
                (t._engine.rect = function (t, e, r, i, n, a) {
                  const s = x('rect');
                  t.canvas && t.canvas.appendChild(s);
                  const o = new S(s, t);
                  return (
                    (o.attrs = {
                      x: e,
                      y: r,
                      width: i,
                      height: n,
                      rx: a || 0,
                      ry: a || 0,
                      fill: 'none',
                      stroke: '#000',
                    }),
                    (o.type = 'rect'),
                    x(s, o.attrs),
                    o
                  );
                }),
                (t._engine.ellipse = function (t, e, r, i, n) {
                  const a = x('ellipse');
                  t.canvas && t.canvas.appendChild(a);
                  const s = new S(a, t);
                  return (
                    (s.attrs = {
                      cx: e,
                      cy: r,
                      rx: i,
                      ry: n,
                      fill: 'none',
                      stroke: '#000',
                    }),
                    (s.type = 'ellipse'),
                    x(a, s.attrs),
                    s
                  );
                }),
                (t._engine.image = function (t, e, r, i, n, a) {
                  const s = x('image');
                  x(s, {
                    x: r,
                    y: i,
                    width: n,
                    height: a,
                    preserveAspectRatio: 'none',
                  }),
                    s.setAttributeNS(p, 'href', e),
                    t.canvas && t.canvas.appendChild(s);
                  const o = new S(s, t);
                  return (
                    (o.attrs = {
                      x: r,
                      y: i,
                      width: n,
                      height: a,
                      src: e,
                    }),
                    (o.type = 'image'),
                    o
                  );
                }),
                (t._engine.text = function (e, r, i, n) {
                  const a = x('text');
                  e.canvas && e.canvas.appendChild(a);
                  const s = new S(a, e);
                  return (
                    (s.attrs = {
                      x: r,
                      y: i,
                      'text-anchor': 'middle',
                      text: n,
                      'font-family': t._availableAttrs['font-family'],
                      'font-size': t._availableAttrs['font-size'],
                      stroke: 'none',
                      fill: '#000',
                    }),
                    (s.type = 'text'),
                    k(s, s.attrs),
                    s
                  );
                }),
                (t._engine.setSize = function (t, e) {
                  return (
                    (this.width = t || this.width),
                    (this.height = e || this.height),
                    this.canvas.setAttribute('width', this.width),
                    this.canvas.setAttribute('height', this.height),
                    this._viewBox && this.setViewBox.apply(this, this._viewBox),
                    this
                  );
                }),
                (t._engine.create = function () {
                  const e = t._getContainer.apply(0, arguments);
                  let r = e && e.container;
                  if (!r) throw new Error('SVG container not found.');
                  let i;
                  let n = e.x;
                  let a = e.y;
                  let s = e.width;
                  let o = e.height;
                  const l = x('svg');
                  const h = 'overflow:hidden;';
                  return (
                    (n = n || 0),
                    (a = a || 0),
                    x(l, {
                      height: (o = o || 342),
                      version: 1.1,
                      width: (s = s || 512),
                      xmlns: 'http://www.w3.org/2000/svg',
                      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                    }),
                    r == 1
                      ? ((l.style.cssText = `${h}position:absolute;left:${n}px;top:${a}px`),
                        t._g.doc.body.appendChild(l),
                        (i = 1))
                      : ((l.style.cssText = `${h}position:relative`),
                        r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l)),
                    ((r = new t._Paper()).width = s),
                    (r.height = o),
                    (r.canvas = l),
                    r.clear(),
                    (r._left = r._top = 0),
                    i && (r.renderfix = function () {}),
                    r.renderfix(),
                    r
                  );
                }),
                (t._engine.setViewBox = function (t, e, r, i, n) {
                  u('raphael.setViewBox', this, this._viewBox, [t, e, r, i, n]);
                  let a;
                  let o;
                  const l = this.getSize();
                  let h = s(r / l.width, i / l.height);
                  let c = this.top;
                  const p = n ? 'xMidYMid meet' : 'xMinYMin';
                  for (
                    t == null
                      ? (this._vbSize && (h = 1),
                        delete this._vbSize,
                        (a = `0 0 ${this.width}${f}${this.height}`))
                      : ((this._vbSize = h), (a = t + f + e + f + r + f + i)),
                      x(this.canvas, { viewBox: a, preserveAspectRatio: p });
                    h && c;

                  )
                    (o = 'stroke-width' in c.attrs ? c.attrs['stroke-width'] : 1),
                      c.attr({ 'stroke-width': o }),
                      (c._.dirty = 1),
                      (c._.dirtyT = 1),
                      (c = c.prev);
                  return (this._viewBox = [t, e, r, i, !!n]), this;
                }),
                (t.prototype.renderfix = function () {
                  let t;
                  const e = this.canvas;
                  const r = e.style;
                  try {
                    t = e.getScreenCTM() || e.createSVGMatrix();
                  } catch (r) {
                    t = e.createSVGMatrix();
                  }
                  const i = -t.e % 1;
                  const n = -t.f % 1;
                  (i || n) &&
                    (i && ((this._left = (this._left + i) % 1), (r.left = `${this._left}px`)),
                    n && ((this._top = (this._top + n) % 1), (r.top = `${this._top}px`)));
                }),
                (t.prototype.clear = function () {
                  t.eve('raphael.clear', this);
                  for (var e = this.canvas; e.firstChild; ) e.removeChild(e.firstChild);
                  (this.bottom = this.top = null),
                    (this.desc = x('desc')).appendChild(
                      t._g.doc.createTextNode(`Created with Raphaël ${t.version}`),
                    ),
                    e.appendChild(this.desc),
                    e.appendChild((this.defs = x('defs')));
                }),
                (t.prototype.remove = function () {
                  for (const e in (u('raphael.remove', this),
                  this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas),
                  this))
                    this[e] = typeof this[e] === 'function' ? t._removedFactory(e) : null;
                });
              const A = t.st;
              for (const M in T)
                T[e](M) &&
                  !A[e](M) &&
                  (A[M] = (function (t) {
                    return function () {
                      const e = arguments;
                      return this.forEach((r) => {
                        r[t].apply(r, e);
                      });
                    };
                  })(M));
            }
          }.apply(e, i)) || (t.exports = n);
    },
    function (t, e, r) {
      let i;
      let n;
      (i = [r(0)]),
        void 0 ===
          (n = function (t) {
            if (!t || t.vml) {
              const e = 'hasOwnProperty';
              const r = String;
              const i = parseFloat;
              const n = Math;
              const a = n.round;
              const s = n.max;
              const o = n.min;
              const l = n.abs;
              const h = /[, ]+/;
              const u = t.eve;
              const c = ' ';
              const f = '';
              const p = {
                M: 'm',
                L: 'l',
                C: 'c',
                Z: 'x',
                m: 't',
                l: 'r',
                c: 'v',
                z: 'x',
              };
              const d = /([clmz]),?([^clmz]*)/gi;
              const g = / progid:\S+Blur\([^\)]+\)/g;
              const x = /-?[^,\s-]+/g;
              const v =
                'position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)';
              const y = 21600;
              const m = { path: 1, rect: 1, image: 1 };
              const b = { circle: 1, ellipse: 1 };
              const _ = function (e, r, i) {
                const n = t.matrix();
                return n.rotate(-e, 0.5, 0.5), { dx: n.x(r, i), dy: n.y(r, i) };
              };
              const w = function (t, e, r, i, n, a) {
                const s = t._;
                const o = t.matrix;
                const h = s.fillpos;
                const u = t.node;
                const f = u.style;
                let p = 1;
                let d = '';
                const g = y / e;
                const x = y / r;
                if (((f.visibility = 'hidden'), e && r)) {
                  if (
                    ((u.coordsize = l(g) + c + l(x)), (f.rotation = a * (e * r < 0 ? -1 : 1)), a)
                  ) {
                    var v = _(a, i, n);
                    (i = v.dx), (n = v.dy);
                  }
                  if (
                    (e < 0 && (d += 'x'),
                    r < 0 && (d += ' y') && (p = -1),
                    (f.flip = d),
                    (u.coordorigin = i * -g + c + n * -x),
                    h || s.fillsize)
                  ) {
                    let m = u.getElementsByTagName('fill');
                    (m = m && m[0]),
                      u.removeChild(m),
                      h &&
                        ((v = _(a, o.x(h[0], h[1]), o.y(h[0], h[1]))),
                        (m.position = v.dx * p + c + v.dy * p)),
                      s.fillsize && (m.size = s.fillsize[0] * l(e) + c + s.fillsize[1] * l(r)),
                      u.appendChild(m);
                  }
                  f.visibility = 'visible';
                }
              };
              t.toString = function () {
                return `Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël ${this.version}`;
              };
              let k;
              const B = function (t, e, i) {
                for (
                  var n = r(e).toLowerCase().split('-'),
                    a = i ? 'end' : 'start',
                    s = n.length,
                    o = 'classic',
                    l = 'medium',
                    h = 'medium';
                  s--;

                )
                  switch (n[s]) {
                    case 'block':
                    case 'classic':
                    case 'oval':
                    case 'diamond':
                    case 'open':
                    case 'none':
                      o = n[s];
                      break;
                    case 'wide':
                    case 'narrow':
                      h = n[s];
                      break;
                    case 'long':
                    case 'short':
                      l = n[s];
                  }
                const u = t.node.getElementsByTagName('stroke')[0];
                (u[`${a}arrow`] = o), (u[`${a}arrowlength`] = l), (u[`${a}arrowwidth`] = h);
              };
              const C = function (n, l) {
                n.attrs = n.attrs || {};
                const u = n.node;
                const g = n.attrs;
                let v = u.style;
                const _ =
                  m[n.type] &&
                  (l.x != g.x ||
                    l.y != g.y ||
                    l.width != g.width ||
                    l.height != g.height ||
                    l.cx != g.cx ||
                    l.cy != g.cy ||
                    l.rx != g.rx ||
                    l.ry != g.ry ||
                    l.r != g.r);
                const C =
                  b[n.type] &&
                  (g.cx != l.cx || g.cy != l.cy || g.r != l.r || g.rx != l.rx || g.ry != l.ry);
                const T = n;
                for (const A in l) l[e](A) && (g[A] = l[A]);
                if (
                  (_ && ((g.path = t._getPath[n.type](n)), (n._.dirty = 1)),
                  l.href && (u.href = l.href),
                  l.title && (u.title = l.title),
                  l.target && (u.target = l.target),
                  l.cursor && (v.cursor = l.cursor),
                  'blur' in l && n.blur(l.blur),
                  ((l.path && n.type == 'path') || _) &&
                    ((u.path = (function (e) {
                      let i = /[ahqstv]/gi;
                      let n = t._pathToAbsolute;
                      if (
                        (r(e).match(i) && (n = t._path2curve),
                        (i = /[clmz]/g),
                        n == t._pathToAbsolute && !r(e).match(i))
                      ) {
                        var s = r(e).replace(d, (t, e, r) => {
                          let i = [];
                          const n = e.toLowerCase() == 'm';
                          let s = p[e];
                          return (
                            r.replace(x, (t) => {
                              n && i.length == 2 && ((s += i + p[e == 'm' ? 'l' : 'L']), (i = [])),
                                i.push(a(t * y));
                            }),
                            s + i
                          );
                        });
                        return s;
                      }
                      let o;
                      let l;
                      const h = n(e);
                      s = [];
                      for (let u = 0, g = h.length; u < g; u++) {
                        (o = h[u]), (l = h[u][0].toLowerCase()) == 'z' && (l = 'x');
                        for (let v = 1, m = o.length; v < m; v++)
                          l += a(o[v] * y) + (v != m - 1 ? ',' : f);
                        s.push(l);
                      }
                      return s.join(c);
                    })(~r(g.path).toLowerCase().indexOf('r') ? t._pathToAbsolute(g.path) : g.path)),
                    (n._.dirty = 1),
                    n.type == 'image' &&
                      ((n._.fillpos = [g.x, g.y]),
                      (n._.fillsize = [g.width, g.height]),
                      w(n, 1, 1, 0, 0, 0))),
                  'transform' in l && n.transform(l.transform),
                  C)
                ) {
                  const M = +g.cx;
                  const E = +g.cy;
                  const N = +g.rx || +g.r || 0;
                  const L = +g.ry || +g.r || 0;
                  (u.path = t.format(
                    'ar{0},{1},{2},{3},{4},{1},{4},{1}x',
                    a((M - N) * y),
                    a((E - L) * y),
                    a((M + N) * y),
                    a((E + L) * y),
                    a(M * y),
                  )),
                    (n._.dirty = 1);
                }
                if ('clip-rect' in l) {
                  const P = r(l['clip-rect']).split(h);
                  if (P.length == 4) {
                    (P[2] = +P[2] + +P[0]), (P[3] = +P[3] + +P[1]);
                    const z = u.clipRect || t._g.doc.createElement('div');
                    const F = z.style;
                    (F.clip = t.format('rect({1}px {2}px {3}px {0}px)', P)),
                      u.clipRect ||
                        ((F.position = 'absolute'),
                        (F.top = 0),
                        (F.left = 0),
                        (F.width = `${n.paper.width}px`),
                        (F.height = `${n.paper.height}px`),
                        u.parentNode.insertBefore(z, u),
                        z.appendChild(u),
                        (u.clipRect = z));
                  }
                  l['clip-rect'] || (u.clipRect && (u.clipRect.style.clip = 'auto'));
                }
                if (n.textpath) {
                  const R = n.textpath.style;
                  l.font && (R.font = l.font),
                    l['font-family'] &&
                      (R.fontFamily = `"${l['font-family']
                        .split(',')[0]
                        .replace(/^['"]+|['"]+$/g, f)}"`),
                    l['font-size'] && (R.fontSize = l['font-size']),
                    l['font-weight'] && (R.fontWeight = l['font-weight']),
                    l['font-style'] && (R.fontStyle = l['font-style']);
                }
                if (
                  ('arrow-start' in l && B(T, l['arrow-start']),
                  'arrow-end' in l && B(T, l['arrow-end'], 1),
                  l.opacity != null ||
                    l.fill != null ||
                    l.src != null ||
                    l.stroke != null ||
                    l['stroke-width'] != null ||
                    l['stroke-opacity'] != null ||
                    l['fill-opacity'] != null ||
                    l['stroke-dasharray'] != null ||
                    l['stroke-miterlimit'] != null ||
                    l['stroke-linejoin'] != null ||
                    l['stroke-linecap'] != null)
                ) {
                  let j = u.getElementsByTagName('fill');
                  if (
                    (!(j = j && j[0]) && (j = k('fill')),
                    n.type == 'image' && l.src && (j.src = l.src),
                    l.fill && (j.on = !0),
                    (j.on != null && l.fill != 'none' && l.fill !== null) || (j.on = !1),
                    j.on && l.fill)
                  ) {
                    const I = r(l.fill).match(t._ISURL);
                    if (I) {
                      j.parentNode == u && u.removeChild(j),
                        (j.rotate = !0),
                        (j.src = I[1]),
                        (j.type = 'tile');
                      const D = n.getBBox(1);
                      (j.position = D.x + c + D.y),
                        (n._.fillpos = [D.x, D.y]),
                        t._preload(I[1], function () {
                          n._.fillsize = [this.offsetWidth, this.offsetHeight];
                        });
                    } else
                      (j.color = t.getRGB(l.fill).hex),
                        (j.src = f),
                        (j.type = 'solid'),
                        t.getRGB(l.fill).error &&
                          (T.type in { circle: 1, ellipse: 1 } || r(l.fill).charAt() != 'r') &&
                          S(T, l.fill, j) &&
                          ((g.fill = 'none'), (g.gradient = l.fill), (j.rotate = !1));
                  }
                  if ('fill-opacity' in l || 'opacity' in l) {
                    var q =
                      ((+g['fill-opacity'] + 1 || 2) - 1) *
                      ((+g.opacity + 1 || 2) - 1) *
                      ((+t.getRGB(l.fill).o + 1 || 2) - 1);
                    (q = o(s(q, 0), 1)), (j.opacity = q), j.src && (j.color = 'none');
                  }
                  u.appendChild(j);
                  let O = u.getElementsByTagName('stroke') && u.getElementsByTagName('stroke')[0];
                  let V = !1;
                  !O && (V = O = k('stroke')),
                    ((l.stroke && l.stroke != 'none') ||
                      l['stroke-width'] ||
                      l['stroke-opacity'] != null ||
                      l['stroke-dasharray'] ||
                      l['stroke-miterlimit'] ||
                      l['stroke-linejoin'] ||
                      l['stroke-linecap']) &&
                      (O.on = !0),
                    (l.stroke == 'none' ||
                      l.stroke === null ||
                      O.on == null ||
                      l.stroke == 0 ||
                      l['stroke-width'] == 0) &&
                      (O.on = !1);
                  const W = t.getRGB(l.stroke);
                  O.on && l.stroke && (O.color = W.hex),
                    (q =
                      ((+g['stroke-opacity'] + 1 || 2) - 1) *
                      ((+g.opacity + 1 || 2) - 1) *
                      ((+W.o + 1 || 2) - 1));
                  let Y = 0.75 * (i(l['stroke-width']) || 1);
                  if (
                    ((q = o(s(q, 0), 1)),
                    l['stroke-width'] == null && (Y = g['stroke-width']),
                    l['stroke-width'] && (O.weight = Y),
                    Y && Y < 1 && (q *= Y) && (O.weight = 1),
                    (O.opacity = q),
                    l['stroke-linejoin'] && (O.joinstyle = l['stroke-linejoin'] || 'miter'),
                    (O.miterlimit = l['stroke-miterlimit'] || 8),
                    l['stroke-linecap'] &&
                      (O.endcap =
                        l['stroke-linecap'] == 'butt'
                          ? 'flat'
                          : l['stroke-linecap'] == 'square'
                          ? 'square'
                          : 'round'),
                    'stroke-dasharray' in l)
                  ) {
                    const G = {
                      '-': 'shortdash',
                      '.': 'shortdot',
                      '-.': 'shortdashdot',
                      '-..': 'shortdashdotdot',
                      '. ': 'dot',
                      '- ': 'dash',
                      '--': 'longdash',
                      '- .': 'dashdot',
                      '--.': 'longdashdot',
                      '--..': 'longdashdotdot',
                    };
                    O.dashstyle = G[e](l['stroke-dasharray']) ? G[l['stroke-dasharray']] : f;
                  }
                  V && u.appendChild(O);
                }
                if (T.type == 'text') {
                  T.paper.canvas.style.display = f;
                  const H = T.paper.span;
                  let X = g.font && g.font.match(/\d+(?:\.\d*)?(?=px)/);
                  (v = H.style),
                    g.font && (v.font = g.font),
                    g['font-family'] && (v.fontFamily = g['font-family']),
                    g['font-weight'] && (v.fontWeight = g['font-weight']),
                    g['font-style'] && (v.fontStyle = g['font-style']),
                    (X = i(g['font-size'] || (X && X[0])) || 10),
                    (v.fontSize = `${100 * X}px`),
                    T.textpath.string &&
                      (H.innerHTML = r(T.textpath.string)
                        .replace(/</g, '&#60;')
                        .replace(/&/g, '&#38;')
                        .replace(/\n/g, '<br>'));
                  const U = H.getBoundingClientRect();
                  (T.W = g.w = (U.right - U.left) / 100),
                    (T.H = g.h = (U.bottom - U.top) / 100),
                    (T.X = g.x),
                    (T.Y = g.y + T.H / 2),
                    ('x' in l || 'y' in l) &&
                      (T.path.v = t.format(
                        'm{0},{1}l{2},{1}',
                        a(g.x * y),
                        a(g.y * y),
                        a(g.x * y) + 1,
                      ));
                  for (
                    let $ = [
                        'x',
                        'y',
                        'text',
                        'font',
                        'font-family',
                        'font-weight',
                        'font-style',
                        'font-size',
                      ],
                      Z = 0,
                      Q = $.length;
                    Z < Q;
                    Z++
                  )
                    if ($[Z] in l) {
                      T._.dirty = 1;
                      break;
                    }
                  switch (g['text-anchor']) {
                    case 'start':
                      (T.textpath.style['v-text-align'] = 'left'), (T.bbx = T.W / 2);
                      break;
                    case 'end':
                      (T.textpath.style['v-text-align'] = 'right'), (T.bbx = -T.W / 2);
                      break;
                    default:
                      (T.textpath.style['v-text-align'] = 'center'), (T.bbx = 0);
                  }
                  T.textpath.style['v-text-kern'] = !0;
                }
              };
              var S = function (e, a, s) {
                e.attrs = e.attrs || {};
                e.attrs;
                const o = Math.pow;
                let l = 'linear';
                let h = '.5 .5';
                if (
                  ((e.attrs.gradient = a),
                  (a = (a = r(a).replace(
                    t._radial_gradient,
                    (t, e, r) => (
                      (l = 'radial'),
                      e &&
                        r &&
                        ((e = i(e)),
                        (r = i(r)),
                        o(e - 0.5, 2) + o(r - 0.5, 2) > 0.25 &&
                          (r = n.sqrt(0.25 - o(e - 0.5, 2)) * (2 * (r > 0.5) - 1) + 0.5),
                        (h = e + c + r)),
                      f
                    ),
                  )).split(/\s*\-\s*/)),
                  l == 'linear')
                ) {
                  var u = a.shift();
                  if (((u = -i(u)), isNaN(u))) return null;
                }
                const p = t._parseDots(a);
                if (!p) return null;
                if (((e = e.shape || e.node), p.length)) {
                  e.removeChild(s),
                    (s.on = !0),
                    (s.method = 'none'),
                    (s.color = p[0].color),
                    (s.color2 = p[p.length - 1].color);
                  for (var d = [], g = 0, x = p.length; g < x; g++)
                    p[g].offset && d.push(p[g].offset + c + p[g].color);
                  (s.colors = d.length ? d.join() : `0% ${s.color}`),
                    l == 'radial'
                      ? ((s.type = 'gradientTitle'),
                        (s.focus = '100%'),
                        (s.focussize = '0 0'),
                        (s.focusposition = h),
                        (s.angle = 0))
                      : ((s.type = 'gradient'), (s.angle = (270 - u) % 360)),
                    e.appendChild(s);
                }
                return 1;
              };
              const T = function (e, r) {
                (this[0] = this.node = e),
                  (e.raphael = !0),
                  (this.id = t._oid++),
                  (e.raphaelid = this.id),
                  (this.X = 0),
                  (this.Y = 0),
                  (this.attrs = {}),
                  (this.paper = r),
                  (this.matrix = t.matrix()),
                  (this._ = {
                    transform: [],
                    sx: 1,
                    sy: 1,
                    dx: 0,
                    dy: 0,
                    deg: 0,
                    dirty: 1,
                    dirtyT: 1,
                  }),
                  !r.bottom && (r.bottom = this),
                  (this.prev = r.top),
                  r.top && (r.top.next = this),
                  (r.top = this),
                  (this.next = null);
              };
              const A = t.el;
              (T.prototype = A),
                (A.constructor = T),
                (A.transform = function (e) {
                  if (e == null) return this._.transform;
                  let i;
                  const n = this.paper._viewBoxShift;
                  const a = n ? `s${[n.scale, n.scale]}-1-1t${[n.dx, n.dy]}` : f;
                  n && (i = e = r(e).replace(/\.{3}|\u2026/g, this._.transform || f)),
                    t._extractTransform(this, a + e);
                  let s;
                  const o = this.matrix.clone();
                  const l = this.skew;
                  const h = this.node;
                  const u = ~r(this.attrs.fill).indexOf('-');
                  const p = !r(this.attrs.fill).indexOf('url(');
                  if ((o.translate(1, 1), p || u || this.type == 'image'))
                    if (
                      ((l.matrix = '1 0 0 1'),
                      (l.offset = '0 0'),
                      (s = o.split()),
                      (u && s.noRotation) || !s.isSimple)
                    ) {
                      h.style.filter = o.toFilter();
                      const d = this.getBBox();
                      const g = this.getBBox(1);
                      const x = d.x - g.x;
                      const v = d.y - g.y;
                      (h.coordorigin = x * -y + c + v * -y), w(this, 1, 1, x, v, 0);
                    } else (h.style.filter = f), w(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate);
                  else (h.style.filter = f), (l.matrix = r(o)), (l.offset = o.offset());
                  return i !== null && ((this._.transform = i), t._extractTransform(this, i)), this;
                }),
                (A.rotate = function (t, e, n) {
                  if (this.removed) return this;
                  if (t != null) {
                    if (
                      ((t = r(t).split(h)).length - 1 && ((e = i(t[1])), (n = i(t[2]))),
                      (t = i(t[0])),
                      n == null && (e = n),
                      e == null || n == null)
                    ) {
                      const a = this.getBBox(1);
                      (e = a.x + a.width / 2), (n = a.y + a.height / 2);
                    }
                    return (
                      (this._.dirtyT = 1),
                      this.transform(this._.transform.concat([['r', t, e, n]])),
                      this
                    );
                  }
                }),
                (A.translate = function (t, e) {
                  return this.removed
                    ? this
                    : ((t = r(t).split(h)).length - 1 && (e = i(t[1])),
                      (t = i(t[0]) || 0),
                      (e = +e || 0),
                      this._.bbox && ((this._.bbox.x += t), (this._.bbox.y += e)),
                      this.transform(this._.transform.concat([['t', t, e]])),
                      this);
                }),
                (A.scale = function (t, e, n, a) {
                  if (this.removed) return this;
                  if (
                    ((t = r(t).split(h)).length - 1 &&
                      ((e = i(t[1])),
                      (n = i(t[2])),
                      (a = i(t[3])),
                      isNaN(n) && (n = null),
                      isNaN(a) && (a = null)),
                    (t = i(t[0])),
                    e == null && (e = t),
                    a == null && (n = a),
                    n == null || a == null)
                  )
                    var s = this.getBBox(1);
                  return (
                    (n = n == null ? s.x + s.width / 2 : n),
                    (a = a == null ? s.y + s.height / 2 : a),
                    this.transform(this._.transform.concat([['s', t, e, n, a]])),
                    (this._.dirtyT = 1),
                    this
                  );
                }),
                (A.hide = function () {
                  return !this.removed && (this.node.style.display = 'none'), this;
                }),
                (A.show = function () {
                  return !this.removed && (this.node.style.display = f), this;
                }),
                (A.auxGetBBox = t.el.getBBox),
                (A.getBBox = function () {
                  const t = this.auxGetBBox();
                  if (this.paper && this.paper._viewBoxShift) {
                    const e = {};
                    const r = 1 / this.paper._viewBoxShift.scale;
                    return (
                      (e.x = t.x - this.paper._viewBoxShift.dx),
                      (e.x *= r),
                      (e.y = t.y - this.paper._viewBoxShift.dy),
                      (e.y *= r),
                      (e.width = t.width * r),
                      (e.height = t.height * r),
                      (e.x2 = e.x + e.width),
                      (e.y2 = e.y + e.height),
                      e
                    );
                  }
                  return t;
                }),
                (A._getBBox = function () {
                  return this.removed
                    ? {}
                    : {
                        x: this.X + (this.bbx || 0) - this.W / 2,
                        y: this.Y - this.H,
                        width: this.W,
                        height: this.H,
                      };
                }),
                (A.remove = function () {
                  if (!this.removed && this.node.parentNode) {
                    for (const e in (this.paper.__set__ && this.paper.__set__.exclude(this),
                    t.eve.unbind(`raphael.*.*.${this.id}`),
                    t._tear(this, this.paper),
                    this.node.parentNode.removeChild(this.node),
                    this.shape && this.shape.parentNode.removeChild(this.shape),
                    this))
                      this[e] = typeof this[e] === 'function' ? t._removedFactory(e) : null;
                    this.removed = !0;
                  }
                }),
                (A.attr = function (r, i) {
                  if (this.removed) return this;
                  if (r == null) {
                    const n = {};
                    for (const a in this.attrs) this.attrs[e](a) && (n[a] = this.attrs[a]);
                    return (
                      n.gradient && n.fill == 'none' && (n.fill = n.gradient) && delete n.gradient,
                      (n.transform = this._.transform),
                      n
                    );
                  }
                  if (i == null && t.is(r, 'string')) {
                    if (r == 'fill' && this.attrs.fill == 'none' && this.attrs.gradient)
                      return this.attrs.gradient;
                    for (var s = r.split(h), o = {}, l = 0, c = s.length; l < c; l++)
                      (r = s[l]) in this.attrs
                        ? (o[r] = this.attrs[r])
                        : t.is(this.paper.customAttributes[r], 'function')
                        ? (o[r] = this.paper.customAttributes[r].def)
                        : (o[r] = t._availableAttrs[r]);
                    return c - 1 ? o : o[s[0]];
                  }
                  if (this.attrs && i == null && t.is(r, 'array')) {
                    for (o = {}, l = 0, c = r.length; l < c; l++) o[r[l]] = this.attr(r[l]);
                    return o;
                  }
                  let f;
                  for (var p in (i != null && ((f = {})[r] = i),
                  i == null && t.is(r, 'object') && (f = r),
                  f))
                    u(`raphael.attr.${p}.${this.id}`, this, f[p]);
                  if (f) {
                    for (p in this.paper.customAttributes)
                      if (
                        this.paper.customAttributes[e](p) &&
                        f[e](p) &&
                        t.is(this.paper.customAttributes[p], 'function')
                      ) {
                        const d = this.paper.customAttributes[p].apply(this, [].concat(f[p]));
                        for (const g in ((this.attrs[p] = f[p]), d)) d[e](g) && (f[g] = d[g]);
                      }
                    f.text && this.type == 'text' && (this.textpath.string = f.text), C(this, f);
                  }
                  return this;
                }),
                (A.toFront = function () {
                  return (
                    !this.removed && this.node.parentNode.appendChild(this.node),
                    this.paper && this.paper.top != this && t._tofront(this, this.paper),
                    this
                  );
                }),
                (A.toBack = function () {
                  return this.removed
                    ? this
                    : (this.node.parentNode.firstChild != this.node &&
                        (this.node.parentNode.insertBefore(
                          this.node,
                          this.node.parentNode.firstChild,
                        ),
                        t._toback(this, this.paper)),
                      this);
                }),
                (A.insertAfter = function (e) {
                  return this.removed
                    ? this
                    : (e.constructor == t.st.constructor && (e = e[e.length - 1]),
                      e.node.nextSibling
                        ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling)
                        : e.node.parentNode.appendChild(this.node),
                      t._insertafter(this, e, this.paper),
                      this);
                }),
                (A.insertBefore = function (e) {
                  return this.removed
                    ? this
                    : (e.constructor == t.st.constructor && (e = e[0]),
                      e.node.parentNode.insertBefore(this.node, e.node),
                      t._insertbefore(this, e, this.paper),
                      this);
                }),
                (A.blur = function (e) {
                  const r = this.node.runtimeStyle;
                  let i = r.filter;
                  return (
                    (i = i.replace(g, f)),
                    +e != 0
                      ? ((this.attrs.blur = e),
                        (r.filter = `${i + c} progid:DXImageTransform.Microsoft.Blur(pixelradius=${
                          +e || 1.5
                        })`),
                        (r.margin = t.format('-{0}px 0 0 -{0}px', a(+e || 1.5))))
                      : ((r.filter = i), (r.margin = 0), delete this.attrs.blur),
                    this
                  );
                }),
                (t._engine.path = function (t, e) {
                  const r = k('shape');
                  (r.style.cssText = v), (r.coordsize = y + c + y), (r.coordorigin = e.coordorigin);
                  const i = new T(r, e);
                  const n = { fill: 'none', stroke: '#000' };
                  t && (n.path = t),
                    (i.type = 'path'),
                    (i.path = []),
                    (i.Path = f),
                    C(i, n),
                    e.canvas && e.canvas.appendChild(r);
                  const a = k('skew');
                  return (a.on = !0), r.appendChild(a), (i.skew = a), i.transform(f), i;
                }),
                (t._engine.rect = function (e, r, i, n, a, s) {
                  const o = t._rectPath(r, i, n, a, s);
                  const l = e.path(o);
                  const h = l.attrs;
                  return (
                    (l.X = h.x = r),
                    (l.Y = h.y = i),
                    (l.W = h.width = n),
                    (l.H = h.height = a),
                    (h.r = s),
                    (h.path = o),
                    (l.type = 'rect'),
                    l
                  );
                }),
                (t._engine.ellipse = function (t, e, r, i, n) {
                  const a = t.path();
                  a.attrs;
                  return (
                    (a.X = e - i),
                    (a.Y = r - n),
                    (a.W = 2 * i),
                    (a.H = 2 * n),
                    (a.type = 'ellipse'),
                    C(a, {
                      cx: e,
                      cy: r,
                      rx: i,
                      ry: n,
                    }),
                    a
                  );
                }),
                (t._engine.circle = function (t, e, r, i) {
                  const n = t.path();
                  n.attrs;
                  return (
                    (n.X = e - i),
                    (n.Y = r - i),
                    (n.W = n.H = 2 * i),
                    (n.type = 'circle'),
                    C(n, { cx: e, cy: r, r: i }),
                    n
                  );
                }),
                (t._engine.image = function (e, r, i, n, a, s) {
                  const o = t._rectPath(i, n, a, s);
                  const l = e.path(o).attr({ stroke: 'none' });
                  const h = l.attrs;
                  const u = l.node;
                  const c = u.getElementsByTagName('fill')[0];
                  return (
                    (h.src = r),
                    (l.X = h.x = i),
                    (l.Y = h.y = n),
                    (l.W = h.width = a),
                    (l.H = h.height = s),
                    (h.path = o),
                    (l.type = 'image'),
                    c.parentNode == u && u.removeChild(c),
                    (c.rotate = !0),
                    (c.src = r),
                    (c.type = 'tile'),
                    (l._.fillpos = [i, n]),
                    (l._.fillsize = [a, s]),
                    u.appendChild(c),
                    w(l, 1, 1, 0, 0, 0),
                    l
                  );
                }),
                (t._engine.text = function (e, i, n, s) {
                  const o = k('shape');
                  const l = k('path');
                  const h = k('textpath');
                  (i = i || 0),
                    (n = n || 0),
                    (s = s || ''),
                    (l.v = t.format('m{0},{1}l{2},{1}', a(i * y), a(n * y), a(i * y) + 1)),
                    (l.textpathok = !0),
                    (h.string = r(s)),
                    (h.on = !0),
                    (o.style.cssText = v),
                    (o.coordsize = y + c + y),
                    (o.coordorigin = '0 0');
                  const u = new T(o, e);
                  const p = {
                    fill: '#000',
                    stroke: 'none',
                    font: t._availableAttrs.font,
                    text: s,
                  };
                  (u.shape = o),
                    (u.path = l),
                    (u.textpath = h),
                    (u.type = 'text'),
                    (u.attrs.text = r(s)),
                    (u.attrs.x = i),
                    (u.attrs.y = n),
                    (u.attrs.w = 1),
                    (u.attrs.h = 1),
                    C(u, p),
                    o.appendChild(h),
                    o.appendChild(l),
                    e.canvas.appendChild(o);
                  const d = k('skew');
                  return (d.on = !0), o.appendChild(d), (u.skew = d), u.transform(f), u;
                }),
                (t._engine.setSize = function (e, r) {
                  const i = this.canvas.style;
                  return (
                    (this.width = e),
                    (this.height = r),
                    e == +e && (e += 'px'),
                    r == +r && (r += 'px'),
                    (i.width = e),
                    (i.height = r),
                    (i.clip = `rect(0 ${e} ${r} 0)`),
                    this._viewBox && t._engine.setViewBox.apply(this, this._viewBox),
                    this
                  );
                }),
                (t._engine.setViewBox = function (e, r, i, n, a) {
                  t.eve('raphael.setViewBox', this, this._viewBox, [e, r, i, n, a]);
                  let s;
                  let o;
                  const l = this.getSize();
                  const h = l.width;
                  const u = l.height;
                  return (
                    a &&
                      (i * (s = u / n) < h && (e -= (h - i * s) / 2 / s),
                      n * (o = h / i) < u && (r -= (u - n * o) / 2 / o)),
                    (this._viewBox = [e, r, i, n, !!a]),
                    (this._viewBoxShift = { dx: -e, dy: -r, scale: l }),
                    this.forEach((t) => {
                      t.transform('...');
                    }),
                    this
                  );
                }),
                (t._engine.initWin = function (t) {
                  const e = t.document;
                  e.styleSheets.length < 31
                    ? e.createStyleSheet().addRule('.rvml', 'behavior:url(#default#VML)')
                    : e.styleSheets[0].addRule('.rvml', 'behavior:url(#default#VML)');
                  try {
                    !e.namespaces.rvml && e.namespaces.add('rvml', 'urn:schemas-microsoft-com:vml'),
                      (k = function (t) {
                        return e.createElement(`<rvml:${t} class="rvml">`);
                      });
                  } catch (t) {
                    k = function (t) {
                      return e.createElement(
                        `<${t} xmlns="urn:schemas-microsoft.com:vml" class="rvml">`,
                      );
                    };
                  }
                }),
                t._engine.initWin(t._g.win),
                (t._engine.create = function () {
                  const e = t._getContainer.apply(0, arguments);
                  const r = e.container;
                  let i = e.height;
                  let n = e.width;
                  let a = e.x;
                  let s = e.y;
                  if (!r) throw new Error('VML container not found.');
                  const o = new t._Paper();
                  const l = (o.canvas = t._g.doc.createElement('div'));
                  const h = l.style;
                  return (
                    (a = a || 0),
                    (s = s || 0),
                    (n = n || 512),
                    (i = i || 342),
                    (o.width = n),
                    (o.height = i),
                    n == +n && (n += 'px'),
                    i == +i && (i += 'px'),
                    (o.coordsize = 216e5 + c + 216e5),
                    (o.coordorigin = '0 0'),
                    (o.span = t._g.doc.createElement('span')),
                    (o.span.style.cssText =
                      'position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;'),
                    l.appendChild(o.span),
                    (h.cssText = t.format(
                      'top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden',
                      n,
                      i,
                    )),
                    r == 1
                      ? (t._g.doc.body.appendChild(l),
                        (h.left = `${a}px`),
                        (h.top = `${s}px`),
                        (h.position = 'absolute'))
                      : r.firstChild
                      ? r.insertBefore(l, r.firstChild)
                      : r.appendChild(l),
                    (o.renderfix = function () {}),
                    o
                  );
                }),
                (t.prototype.clear = function () {
                  t.eve('raphael.clear', this),
                    (this.canvas.innerHTML = f),
                    (this.span = t._g.doc.createElement('span')),
                    (this.span.style.cssText =
                      'position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;'),
                    this.canvas.appendChild(this.span),
                    (this.bottom = this.top = null);
                }),
                (t.prototype.remove = function () {
                  for (const e in (t.eve('raphael.remove', this),
                  this.canvas.parentNode.removeChild(this.canvas),
                  this))
                    this[e] = typeof this[e] === 'function' ? t._removedFactory(e) : null;
                  return !0;
                });
              const M = t.st;
              for (const E in A)
                A[e](E) &&
                  !M[e](E) &&
                  (M[E] = (function (t) {
                    return function () {
                      const e = arguments;
                      return this.forEach((r) => {
                        r[t].apply(r, e);
                      });
                    };
                  })(E));
            }
          }.apply(e, i)) || (t.exports = n);
    },
  ]),
);
