! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define
		.amd ? define("ApexCharts", [], e) : "object" == typeof exports ? exports.ApexCharts = e() : t.ApexCharts = e()
}(this, function() {
	return function(i) {
		var a = {};

		function n(t) {
			if (a[t]) return a[t].exports;
			var e = a[t] = {
				i: t,
				l: !1,
				exports: {}
			};
			return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
		}
		return n.m = i, n.c = a, n.i = function(t) {
			return t
		}, n.d = function(t, e, i) {
			n.o(t, e) || Object.defineProperty(t, e, {
				configurable: !1,
				enumerable: !0,
				get: i
			})
		}, n.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return n.d(e, "a", e), e
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, n.p = "", n(n.s = 166)
	}([function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			g = n(i(1)),
			A = n(i(6)),
			C = n(i(25));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var s = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w
			}
			return a(e, [{
				key: "drawLine",
				value: function(t, e, i, a) {
					var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8",
						s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0,
						r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null;
					return this.w.globals.dom.Paper.line().attr({
						x1: t,
						y1: e,
						x2: i,
						y2: a,
						stroke: n,
						"stroke-dasharray": s,
						"stroke-width": r
					})
				}
			}, {
				key: "drawRect",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
						e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
						i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
						a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
						n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
						s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "#fefefe",
						r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 1,
						o = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : null,
						l = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : null,
						h = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : 0,
						c = this.w.globals.dom.Paper.rect();
					return c.attr({
						x: t,
						y: e,
						width: 0 < i ? i : 0,
						height: 0 < a ? a : 0,
						rx: n,
						ry: n,
						fill: s,
						opacity: r,
						"stroke-width": null !== o ? o : 0,
						stroke: null !== l ? l : "none",
						"stroke-dasharray": h
					}), c
				}
			}, {
				key: "drawCircle",
				value: function(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
						i = this.w.globals.dom.Paper.circle(2 * t);
					return null !== e && i.attr(e), i
				}
			}, {
				key: "drawPath",
				value: function(t) {
					var e = t.d,
						i = void 0 === e ? "" : e,
						a = t.stroke,
						n = void 0 === a ? "#a8a8a8" : a,
						s = t.strokeWidth,
						r = t.fill,
						o = t.fillOpacity,
						l = void 0 === o ? 1 : o,
						h = t.strokeOpacity,
						c = void 0 === h ? 1 : h,
						u = t.classes,
						d = t.strokeLinecap,
						f = void 0 === d ? null : d,
						p = t.strokeDashArray,
						g = void 0 === p ? 0 : p,
						x = this.w;
					return null === f && (f = x.config.stroke.lineCap), (-1 < i.indexOf("undefined") || -1 < i.indexOf("NaN")) &&
						(i = "M 0 " + x.globals.gridHeight), x.globals.dom.Paper.path(i).attr({
							fill: r,
							"fill-opacity": l,
							stroke: n,
							"stroke-opacity": c,
							"stroke-linecap": f,
							"stroke-width": s,
							"stroke-dasharray": g,
							class: u
						})
				}
			}, {
				key: "group",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
						e = this.w.globals.dom.Paper.group();
					return null !== t && e.attr(t), e
				}
			}, {
				key: "move",
				value: function(t, e) {
					var i = ["M", t, e].join(" ");
					return i
				}
			}, {
				key: "line",
				value: function(t, e) {
					var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
						a = null;
					return a = null === i ? ["L", t, e].join(" ") : [i, t].join(" "), a
				}
			}, {
				key: "curve",
				value: function(t, e, i, a, n, s) {
					var r = ["C", t, e, i, a, n, s].join(" ");
					return r
				}
			}, {
				key: "quadraticCurve",
				value: function(t, e, i, a) {
					return ["Q", t, e, i, a].join(" ")
				}
			}, {
				key: "arc",
				value: function(t, e, i, a, n, s, r) {
					var o = "A";
					7 < arguments.length && void 0 !== arguments[7] && arguments[7] && (o = "a");
					var l = [o, t, e, i, a, n, s, r].join(" ");
					return l
				}
			}, {
				key: "renderPaths",
				value: function(t) {
					var e = t.i,
						i = t.realIndex,
						a = t.pathFrom,
						n = t.pathTo,
						s = t.stroke,
						r = t.strokeWidth,
						o = t.strokeLinecap,
						l = t.fill,
						h = t.animationDelay,
						c = t.initialSpeed,
						u = t.dataChangeSpeed,
						d = (t.hideStrokesInChange, t.className),
						f = t.id,
						p = this.w,
						g = new A.default(this.ctx),
						x = new C.default(this.ctx),
						v = this.w.config.chart.animations.enabled,
						b = v && this.w.config.chart.animations.dynamicAnimation.enabled,
						m = void 0;
					m = !!(v && !p.globals.resized || b && p.globals.dataChanged) ? a : n;
					var y = p.config.stroke.dashArray,
						w = 0;
					w = Array.isArray(y) ? y[i] : p.config.stroke.dashArray;
					var k = this.drawPath({
						d: m,
						stroke: s,
						strokeWidth: r,
						fill: l,
						fillOpacity: 1,
						classes: d,
						strokeLinecap: o,
						strokeDashArray: w
					});
					if (k.attr("id", f + "-" + e), k.attr("index", i), "none" !== p.config.states.normal.filter.type) g.getDefaultFilter(
						k, p.config.states.normal.filter.type, p.config.states.normal.filter.value);
					else if (p.config.chart.dropShadow.enabled && (!p.config.chart.dropShadow.enabledSeries || p.config.chart
							.dropShadow.enabledSeries && -1 !== p.config.chart.dropShadow.enabledSeries.indexOf(i))) {
						var S = p.config.chart.dropShadow;
						g.dropShadow(k, S)
					}
					return k.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, k)), k.node.addEventListener(
						"mouseleave", this.pathMouseLeave.bind(this, k)), k.node.addEventListener("mousedown", this.pathMouseDown
						.bind(this, k)), k.node.addEventListener("touchstart", this.pathMouseDown.bind(this, k)), k.attr({
						pathTo: n,
						pathFrom: a
					}), !v || p.globals.resized || p.globals.dataChanged || x.animatePathsGradually({
						el: k,
						pathFrom: a,
						pathTo: n,
						speed: c,
						delay: h,
						strokeWidth: r
					}), b && p.globals.dataChanged && x.animatePathsGradually({
						el: k,
						pathFrom: a,
						pathTo: n,
						speed: u,
						strokeWidth: r
					}), k
				}
			}, {
				key: "drawPattern",
				value: function(e, i, a) {
					var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8",
						s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0;
					5 < arguments.length && void 0 !== arguments[5] && arguments[5];
					return this.w.globals.dom.Paper.pattern(i, a, function(t) {
						"horizontalLines" === e ? t.line(0, 0, a, 0).stroke({
							color: n,
							width: s + 1
						}) : "verticalLines" === e ? t.line(0, 0, 0, i).stroke({
							color: n,
							width: s + 1
						}) : "slantedLines" === e ? t.line(0, 0, i, a).stroke({
							color: n,
							width: s
						}) : "squares" === e ? t.rect(i, a).fill("none").stroke({
							color: n,
							width: s
						}) : "circles" === e && t.circle(i).fill("none").stroke({
							color: n,
							width: s
						})
					})
				}
			}, {
				key: "drawGradient",
				value: function(t, e, i, a, n) {
					var s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
						r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null,
						o = this.w;
					e = g.default.hexToRgba(e, a), i = g.default.hexToRgba(i, n);
					var l = 0,
						h = 1,
						c = 1;
					null !== r && (l = void 0 !== r[0] ? r[0] / 100 : 0, h = void 0 !== r[1] ? r[1] / 100 : 1, c = void 0 !==
						r[2] ? r[2] / 100 : 1);
					var u = !("donut" !== o.config.chart.type && "pie" !== o.config.chart.type && "bubble" !== o.config.chart
							.type),
						d = o.globals.dom.Paper.gradient(u ? "radial" : "linear", function(t) {
							t.at(l, e, a), t.at(h, i, n), t.at(c, i, n)
						});
					if (u) {
						var f = o.globals.gridWidth / 2,
							p = o.globals.gridHeight / 2;
						"bubble" !== o.config.chart.type ? d.attr({
							gradientUnits: "userSpaceOnUse",
							cx: f,
							cy: p,
							r: s
						}) : d.attr({
							cx: .5,
							cy: .5,
							r: .8,
							fx: .2,
							fy: .2
						})
					} else "vertical" === t ? d.from(0, 0).to(0, 1) : "diagonal" === t ? d.from(0, 0).to(1, 1) : "horizontal" ===
						t ? d.from(0, 1).to(1, 1) : "diagonal2" === t && d.from(0, 1).to(2, 2);
					return d
				}
			}, {
				key: "drawText",
				value: function(t) {
					var e = this.w,
						i = t.x,
						a = t.y,
						n = t.text,
						s = t.textAnchor,
						r = t.fontSize,
						o = t.fontFamily,
						l = t.foreColor,
						h = t.opacity;
					s || (s = "start"), l || (l = e.config.chart.foreColor);
					var c = void 0;
					return Array.isArray(n) ? c = e.globals.dom.Paper.text(function(t) {
							for (var e = 0; e < n.length; e++) t.tspan(n[e])
						}) : (c = e.globals.dom.Paper.plain(n)).font({
							family: o
						}), c.attr({
							x: i,
							y: a,
							"text-anchor": s,
							"dominate-baseline": "central",
							class: t.cssClass
						}), c.node.style.fontSize = r, c.node.style.fontFamily = o, c.node.style.fill = l, c.node.style.opacity =
						h, c
				}
			}, {
				key: "drawMarker",
				value: function(t, e, i) {
					t = t || 0;
					var a = i.pSize || 0,
						n = null;
					if ("square" === i.shape) {
						var s = void 0 === i.pRadius ? a / 2 : i.pRadius;
						null === e && (s = a = 0);
						var r = 1.2 * a + s,
							o = this.drawRect(r, r, r, r, s);
						o.attr({
							x: t - r / 2,
							y: e - r / 2,
							cx: t,
							cy: e,
							class: i.class ? i.class : "",
							fill: i.pointFillColor,
							"fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
							stroke: i.pointStrokeColor,
							"stroke-width": i.pWidth ? i.pWidth : 0,
							"stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
						}), n = o
					} else "circle" === i.shape && (g.default.isNumber(e) || (e = a = 0), n = this.drawCircle(a, {
						cx: t,
						cy: e,
						class: i.class ? i.class : "",
						stroke: i.pointStrokeColor,
						fill: i.pointFillColor,
						"fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
						"stroke-width": i.pWidth ? i.pWidth : 0,
						"stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
					}));
					return n
				}
			}, {
				key: "pathMouseEnter",
				value: function(t, e) {
					var i = this.w,
						a = new A.default(this.ctx),
						n = parseInt(t.node.getAttribute("index")),
						s = parseInt(t.node.getAttribute("j"));
					if ("function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(
							e, this.ctx, {
								seriesIndex: n,
								dataPointIndex: s,
								config: i.config,
								globals: i.globals
							}), this.ctx.fireEvent("dataPointMouseEnter", [e, this.ctx, {
							seriesIndex: n,
							dataPointIndex: s,
							config: i.config,
							globals: i.globals
						}]), ("none" === i.config.states.active.filter.type || "true" !== t.node.getAttribute("selected")) &&
						"none" !== i.config.states.hover.filter.type) {
						var r = i.config.states.hover.filter;
						a.applyFilter(t, r.type, r.value)
					}
				}
			}, {
				key: "pathMouseLeave",
				value: function(t, e) {
					var i = this.w,
						a = new A.default(this.ctx),
						n = parseInt(t.node.getAttribute("index")),
						s = parseInt(t.node.getAttribute("j"));
					"function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(
							e, this.ctx, {
								seriesIndex: n,
								dataPointIndex: s,
								config: i.config,
								globals: i.globals
							}), this.ctx.fireEvent("dataPointMouseLeave", [e, this.ctx, {
							seriesIndex: n,
							dataPointIndex: s,
							config: i.config,
							globals: i.globals
						}]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") ||
						"none" !== i.config.states.hover.filter.type && a.getDefaultFilter(t)
				}
			}, {
				key: "pathMouseDown",
				value: function(t, e) {
					var i = this.w,
						a = new A.default(this.ctx),
						n = parseInt(t.node.getAttribute("index")),
						s = parseInt(t.node.getAttribute("j")),
						r = "false";
					if ("true" === t.node.getAttribute("selected")) {
						if (t.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[n].includes(s)) {
							var o = i.globals.selectedDataPoints[n].indexOf(s);
							i.globals.selectedDataPoints[n].splice(o, 1)
						}
					} else {
						if (!i.config.states.active.allowMultipleDataPointsSelection && 0 < i.globals.selectedDataPoints.length) {
							i.globals.selectedDataPoints = [];
							var l = i.globals.dom.Paper.select(".apexcharts-series path").members,
								h = i.globals.dom.Paper.select(".apexcharts-series circle").members,
								c = !0,
								u = !1,
								d = void 0;
							try {
								for (var f, p = l[Symbol.iterator](); !(c = (f = p.next()).done); c = !0) {
									var g = f.value;
									g.node.setAttribute("selected", "false"), a.getDefaultFilter(g)
								}
							} catch (t) {
								u = !0, d = t
							} finally {
								try {
									!c && p.return && p.return()
								} finally {
									if (u) throw d
								}
							}
							var x = !0,
								v = !1,
								b = void 0;
							try {
								for (var m, y = h[Symbol.iterator](); !(x = (m = y.next()).done); x = !0) {
									var w = m.value;
									w.node.setAttribute("selected", "false"), a.getDefaultFilter(w)
								}
							} catch (t) {
								v = !0, b = t
							} finally {
								try {
									!x && y.return && y.return()
								} finally {
									if (v) throw b
								}
							}
						}
						t.node.setAttribute("selected", "true"), r = "true", void 0 === i.globals.selectedDataPoints[n] && (i.globals
							.selectedDataPoints[n] = []), i.globals.selectedDataPoints[n].push(s)
					}
					if ("true" === r) {
						var k = i.config.states.active.filter;
						"none" !== k && a.applyFilter(t, k.type, k.value)
					} else "none" !== i.config.states.active.filter.type && a.getDefaultFilter(t);
					"function" == typeof i.config.chart.events.dataPointSelection && i.config.chart.events.dataPointSelection(
						e, this.ctx, {
							selectedDataPoints: i.globals.selectedDataPoints,
							seriesIndex: n,
							dataPointIndex: s,
							config: i.config,
							globals: i.globals
						}), this.ctx.fireEvent("dataPointSelection", [e, this.ctx, {
						selectedDataPoints: i.globals.selectedDataPoints,
						seriesIndex: n,
						dataPointIndex: s,
						config: i.config,
						globals: i.globals
					}]), void 0 !== this.w.config.chart.selection.selectedPoints && this.w.config.chart.selection.selectedPoints(
						i.globals.selectedDataPoints)
				}
			}, {
				key: "rotateAroundCenter",
				value: function(t) {
					var e = t.getBBox();
					return {
						x: e.x + e.width / 2,
						y: e.y + e.height / 2
					}
				}
			}, {
				key: "getTextRects",
				value: function(t, e, i, a) {
					var n = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
						s = this.w,
						r = this.drawText({
							x: -200,
							y: -200,
							text: t,
							textAnchor: "start",
							fontSize: e,
							fontFamily: i,
							foreColor: "#fff",
							opacity: 0
						});
					a && r.attr("transform", a), s.globals.dom.Paper.add(r);
					var o = r.bbox();
					return n || (o = r.node.getBoundingClientRect()), r.remove(), {
						width: o.width,
						height: o.height
					}
				}
			}, {
				key: "placeTextWithEllipsis",
				value: function(t, e, i) {
					if (0 < (t.textContent = e).length && t.getSubStringLength(0, e.length) >= i) {
						for (var a = e.length - 3; 0 < a; a -= 3)
							if (t.getSubStringLength(0, a) <= i) return void(t.textContent = e.substring(0, a) + "...");
						t.textContent = "..."
					}
				}
			}], [{
				key: "setAttrs",
				value: function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
				}
			}]), e
		}();
		e.default = s
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
					typeof t
			},
			n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}();

		function r(t, e, i) {
			return e in t ? Object.defineProperty(t, e, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = i, t
		}
		var a = function() {
			function a() {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, a)
			}
			return n(a, [{
				key: "shadeColor",
				value: function(t, e) {
					var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0;
					if ("#" === e[0] && "r" === e[0] || (e = this.getHexColorFromName(e)), "number" != typeof t || t < -1 ||
						1 < t || "string" != typeof e || "r" !== e[0] && "#" !== e[0] || "string" != typeof i && void 0 !== i)
						return null;
					parseInt;
					var a = Math.round,
						n = 9 < e.length,
						s = (n = "string" == typeof i ? 9 < i.length || "c" === i && !n : n, t < 0),
						r = (t = s ? -1 * t : t, i = i && "c" !== i ? i : s ? "#000000" : "#FFFFFF", this.sbcRip(e)),
						o = this.sbcRip(i);
					return r && o ? n ? "rgb(" + a((o[0] - r[0]) * t + r[0]) + "," + a((o[1] - r[1]) * t + r[1]) + "," + a((o[
						2] - r[2]) * t + r[2]) + (r[3] < 0 && o[3] < 0 ? ")" : "," + (-1 < r[3] && -1 < o[3] ? a(1e4 * ((o[3] -
						r[3]) * t + r[3])) / 1e4 : o[3] < 0 ? r[3] : o[3]) + ")") : "#" + (4294967296 + 16777216 * (-1 < r[3] &&
						-1 < o[3] ? a(255 * ((o[3] - r[3]) * t + r[3])) : -1 < o[3] ? a(255 * o[3]) : -1 < r[3] ? a(255 * r[3]) :
						255) + 65536 * a((o[0] - r[0]) * t + r[0]) + 256 * a((o[1] - r[1]) * t + r[1]) + a((o[2] - r[2]) * t +
						r[2])).toString(16).slice(-1 < r[3] || -1 < o[3] ? 1 : 3) : null
				}
			}, {
				key: "sbcRip",
				value: function(t) {
					var e = t.length,
						i = new Object,
						a = parseInt,
						n = Math.round;
					if (9 < e) {
						if ((t = t.split(",")).length < 3 || 4 < t.length) return null;
						i[0] = a(t[0].slice(4)), i[1] = a(t[1]), i[2] = a(t[2]), i[3] = t[3] ? parseFloat(t[3]) : -1
					} else {
						if (8 === e || 6 === e || e < 4) return null;
						e < 6 && (t = "#" + t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + (4 < e ? t[4] + "" + t[4] : "")), t = a(t.slice(
							1), 16), i[0] = t >> 16 & 255, i[1] = t >> 8 & 255, i[2] = 255 & t, i[3] = 9 === e || 5 === e ? n((t >>
							24 & 255) / 255 * 1e4) / 1e4 : -1
					}
					return i
				}
			}, {
				key: "getHexColorFromName",
				value: function(t) {
					var e = document.createElement("div");
					e.style.color = t;
					var i = window.getComputedStyle(document.body.appendChild(e)).color.match(/\d+/g).map(function(t) {
						return parseInt(t, 10)
					});
					return document.body.removeChild(e), 3 <= i.length && "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2])
						.toString(16).substr(1)
				}
			}], [{
				key: "bind",
				value: function(t, e) {
					return function() {
						return t.apply(e, arguments)
					}
				}
			}, {
				key: "isObject",
				value: function(t) {
					return t && "object" === (void 0 === t ? "undefined" : s(t)) && !Array.isArray(t) && null != t
				}
			}, {
				key: "extend",
				value: function(e, i) {
					var a = this;
					"function" != typeof Object.assign && (Object.assign = function(t) {
						if (null == t) throw new TypeError("Cannot convert undefined or null to object");
						for (var e = Object(t), i = 1; i < arguments.length; i++) {
							var a = arguments[i];
							if (null != a)
								for (var n in a) a.hasOwnProperty(n) && (e[n] = a[n])
						}
						return e
					});
					var n = Object.assign({}, e);
					return this.isObject(e) && this.isObject(i) && Object.keys(i).forEach(function(t) {
						a.isObject(i[t]) && t in e ? n[t] = a.extend(e[t], i[t]) : Object.assign(n, r({}, t, i[t]))
					}), n
				}
			}, {
				key: "extendArray",
				value: function(t, e) {
					var i = [];
					return t.map(function(t) {
						i.push(a.extend(e, t))
					}), t = i
				}
			}, {
				key: "addProps",
				value: function(t, e, i) {
					"string" == typeof e && (e = e.split(".")), t[e[0]] = t[e[0]] || {};
					var a = t[e[0]];
					return 1 < e.length ? (e.shift(), this.addProps(a, e, i)) : t[e[0]] = i, t
				}
			}, {
				key: "clone",
				value: function(t) {
					if ("[object Array]" === Object.prototype.toString.call(t)) {
						for (var e = [], i = 0; i < t.length; i++) e[i] = this.clone(t[i]);
						return e
					}
					if ("object" !== (void 0 === t ? "undefined" : s(t))) return t;
					var a = {};
					for (var n in t) t.hasOwnProperty(n) && (a[n] = this.clone(t[n]));
					return a
				}
			}, {
				key: "getDimensions",
				value: function(t) {
					var e = getComputedStyle(t),
						i = [],
						a = t.clientHeight,
						n = t.clientWidth;
					return a -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), n -= parseFloat(e.paddingLeft) +
						parseFloat(e.paddingRight), i.push(n), i.push(a), i
				}
			}, {
				key: "getBoundingClientRect",
				value: function(t) {
					var e = t.getBoundingClientRect();
					return {
						top: e.top,
						right: e.right,
						bottom: e.bottom,
						left: e.left,
						width: e.width,
						height: e.height,
						x: e.x,
						y: e.y
					}
				}
			}, {
				key: "hexToRgba",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "#999999",
						e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .6;
					"#" !== t.substring(0, 1) && (t = "#999999");
					var i = t.replace("#", "");
					i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
					for (var a = 0; a < i.length; a++) i[a] = parseInt(1 === i[a].length ? i[a] + i[a] : i[a], 16);
					return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")"
				}
			}, {
				key: "rgb2hex",
				value: function(t) {
					return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ?
						"#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(
							-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
				}
			}, {
				key: "polarToCartesian",
				value: function(t, e, i, a) {
					var n = (a - 90) * Math.PI / 180;
					return {
						x: t + i * Math.cos(n),
						y: e + i * Math.sin(n)
					}
				}
			}, {
				key: "negToZero",
				value: function(t) {
					return t < 0 ? 0 : t
				}
			}, {
				key: "randomString",
				value: function(t) {
					for (var e = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", a = 0; a < t; a++) e += i.charAt(
						Math.floor(Math.random() * i.length));
					return e
				}
			}, {
				key: "findAncestor",
				value: function(t, e) {
					for (;
						(t = t.parentElement) && !t.classList.contains(e););
					return t
				}
			}, {
				key: "setELstyles",
				value: function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i])
				}
			}, {
				key: "isNumber",
				value: function(t) {
					return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10))
				}
			}, {
				key: "isFloat",
				value: function(t) {
					return Number(t) === t && t % 1 != 0
				}
			}, {
				key: "isSafari",
				value: function() {
					return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
				}
			}, {
				key: "isFirefox",
				value: function() {
					return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
				}
			}, {
				key: "isIE",
				value: function() {
					var t = window.navigator.userAgent,
						e = t.indexOf("MSIE ");
					if (0 < e) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
					if (0 < t.indexOf("Trident/")) {
						var i = t.indexOf("rv:");
						return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
					}
					var a = t.indexOf("Edge/");
					return 0 < a && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
				}
			}]), a
		}();
		e.default = a
	}, function(t, e, i) {
		"use strict";
		var a = i(40)("wks"),
			n = i(24),
			s = i(3).Symbol,
			r = "function" == typeof s;
		(t.exports = function(t) {
			return a[t] || (a[t] = r && s[t] || (r ? s : n)("Symbol." + t))
		}).store = a
	}, function(t, e, i) {
		"use strict";
		var a = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self &&
			self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = a)
	}, function(t, e, i) {
		"use strict";
		var a = t.exports = {
			version: "2.5.7"
		};
		"number" == typeof __e && (__e = a)
	}, function(t, e, i) {
		"use strict";
		var g = i(3),
			x = i(4),
			v = i(12),
			b = i(15),
			m = i(14),
			y = "prototype",
			a = function t(e, i, a) {
				var n, s, r, o, l = e & t.F,
					h = e & t.G,
					c = e & t.P,
					u = e & t.B,
					d = h ? g : e & t.S ? g[i] || (g[i] = {}) : (g[i] || {})[y],
					f = h ? x : x[i] || (x[i] = {}),
					p = f[y] || (f[y] = {});
				for (n in h && (a = i), a) r = ((s = !l && d && void 0 !== d[n]) ? d : a)[n], o = u && s ? m(r, g) : c &&
					"function" == typeof r ? m(Function.call, r) : r, d && b(d, n, r, e & t.U), f[n] != r && v(f, n, o), c && p[n] !=
					r && (p[n] = r)
			};
		g.core = x, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = i(1),
			r = (a = s) && a.__esModule ? a : {
				default: a
			};
		var o = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w
			}
			return n(e, [{
				key: "getDefaultFilter",
				value: function(t) {
					var e = this.w;
					t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== e.config.states.normal
						.filter ? this.applyFilter(t, e.config.states.normal.filter.type, e.config.states.normal.filter.value) :
						e.config.chart.dropShadow.enabled && this.dropShadow(t, e.config.chart.dropShadow)
				}
			}, {
				key: "addNormalFilter",
				value: function(t) {
					var e = this.w;
					e.config.chart.dropShadow.enabled && this.dropShadow(t, e.config.chart.dropShadow)
				}
			}, {
				key: "addDesaturateFilter",
				value: function(t) {
					var i = this,
						a = this.w;
					t.unfilter(!0);
					var n = new window.SVG.Filter;
					n.size("120%", "180%", "-5%", "-40%"), t.filter(function(t) {
						var e = a.config.chart.dropShadow;
						(n = e.enabled ? i.addShadow(t, e) : t).colorMatrix("matrix", [0, 0, 0, 0, .5, 0, 0, 0, 0, .5, 0, 0, 0,
							0, .5, 0, 0, 0, 1, 0
						]).colorMatrix("saturate", 0)
					}), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse")
				}
			}, {
				key: "addLightenFilter",
				value: function(t, e) {
					var i = this,
						a = this.w,
						n = e.intensity;
					if (!r.default.isFirefox()) {
						t.unfilter(!0);
						var s = new window.SVG.Filter;
						s.size("120%", "180%", "-5%", "-40%"), t.filter(function(t) {
							var e = a.config.chart.dropShadow;
							(s = e.enabled ? i.addShadow(t, e) : t).componentTransfer({
								rgb: {
									type: "linear",
									slope: 1.5,
									intercept: n
								}
							})
						}), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse")
					}
				}
			}, {
				key: "addDarkenFilter",
				value: function(t, e) {
					var i = this,
						a = this.w,
						n = e.intensity;
					if (!r.default.isFirefox()) {
						t.unfilter(!0);
						var s = new window.SVG.Filter;
						s.size("120%", "180%", "-5%", "-40%"), t.filter(function(t) {
							var e = a.config.chart.dropShadow;
							(s = e.enabled ? i.addShadow(t, e) : t).componentTransfer({
								rgb: {
									type: "linear",
									slope: n
								}
							})
						}), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse")
					}
				}
			}, {
				key: "applyFilter",
				value: function(t, e) {
					var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .5;
					switch (e) {
						case "none":
							this.addNormalFilter(t);
							break;
						case "lighten":
							this.addLightenFilter(t, {
								intensity: i
							});
							break;
						case "darken":
							this.addDarkenFilter(t, {
								intensity: i
							});
							break;
						case "desaturate":
							this.addDesaturateFilter(t)
					}
				}
			}, {
				key: "addShadow",
				value: function(t, e) {
					var i = e.blur,
						a = e.top,
						n = e.left,
						s = e.opacity,
						r = t.flood("black", s).composite(t.sourceAlpha, "in").offset(n, a).gaussianBlur(i).merge(t.source);
					return t.blend(t.source, r)
				}
			}, {
				key: "dropShadow",
				value: function(t, e) {
					var i = e.top,
						a = e.left,
						n = e.blur,
						s = e.opacity;
					return t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), t.filter(function(t) {
						var e = null;
						e = r.default.isSafari() || r.default.isFirefox() || r.default.isIE() ? t.flood("black", s).composite(
							t.sourceAlpha, "in").offset(a, i).gaussianBlur(n) : t.flood("black", s).composite(t.sourceAlpha,
							"in").offset(a, i).gaussianBlur(n).merge(t.source), t.blend(t.source, e)
					}), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), t
				}
			}]), e
		}();
		e.default = o
	}, function(t, e, i) {
		"use strict";
		var a = i(8);
		t.exports = function(t) {
			if (!a(t)) throw TypeError(t + " is not an object!");
			return t
		}
	}, function(t, e, i) {
		"use strict";
		var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
				typeof t
		};
		t.exports = function(t) {
			return "object" === (void 0 === t ? "undefined" : a(t)) ? null !== t : "function" == typeof t
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(7),
			n = i(55),
			s = i(42),
			r = Object.defineProperty;
		e.f = i(10) ? Object.defineProperty : function(t, e, i) {
			if (a(t), e = s(e, !0), a(i), n) try {
				return r(t, e, i)
			} catch (t) {}
			if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
			return "value" in i && (t[e] = i.value), t
		}
	}, function(t, e, i) {
		"use strict";
		t.exports = !i(19)(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t, e, i) {
		"use strict";
		var a = {}.hasOwnProperty;
		t.exports = function(t, e) {
			return a.call(t, e)
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(9),
			n = i(22);
		t.exports = i(10) ? function(t, e, i) {
			return a.f(t, e, n(1, i))
		} : function(t, e, i) {
			return t[e] = i, t
		}
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			f = n(i(0)),
			p = n(i(1));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var s = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.opts = null, this.seriesIndex = 0
			}
			return a(e, [{
				key: "clippedImgArea",
				value: function(t) {
					var e = this.w,
						i = e.config,
						a = parseInt(e.globals.gridWidth),
						n = parseInt(e.globals.gridHeight),
						s = n < a ? a : n,
						r = t.image,
						o = 0,
						l = 0;
					l = void 0 === t.width && void 0 === t.height ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ?
						(o = i.fill.image.width + 1, i.fill.image.height) : (o = s + 1, s) : (o = t.width, t.height);
					var h = document.createElementNS(e.globals.svgNS, "pattern");
					f.default.setAttrs(h, {
						id: t.patternID,
						patternUnits: "userSpaceOnUse",
						width: o + "px",
						height: l + "px"
					});
					var c = document.createElementNS(e.globals.svgNS, "image");
					h.appendChild(c), c.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), f.default.setAttrs(c, {
						x: 0,
						y: 0,
						preserveAspectRatio: "none",
						width: o + "px",
						height: l + "px"
					}), c.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(h)
				}
			}, {
				key: "getSeriesIndex",
				value: function(t) {
					var e = this.w;
					return "bar" === e.config.chart.type && e.config.plotOptions.bar.distributed || "heatmap" === e.config.chart
						.type ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length,
						this.seriesIndex
				}
			}, {
				key: "fillPath",
				value: function(t, e) {
					var i = this.w;
					this.opts = e;
					var a = this.w.config,
						n = void 0,
						s = void 0,
						r = void 0;
					this.seriesIndex = this.getSeriesIndex(e);
					var o = this.getFillColors(),
						l = Array.isArray(a.fill.opacity) ? a.fill.opacity[this.seriesIndex] : a.fill.opacity,
						h = p.default.hexToRgba(o[this.seriesIndex], l),
						c = o[this.seriesIndex];
					return "pattern" === a.fill.type && (s = this.handlePatternFill(s, c, l, h)), "gradient" === a.fill.type &&
						(r = this.handleGradientFill(r, c, l)), n = 0 < a.fill.image.src.length && "image" === a.fill.type ? e.seriesNumber <
						a.fill.image.src.length ? (this.clippedImgArea({
							opacity: l,
							image: a.fill.image.src[e.seriesNumber],
							patternID: "pattern" + i.globals.cuid + (e.seriesNumber + 1)
						}), "url(#pattern" + i.globals.cuid + (e.seriesNumber + 1) + ")") : h : "gradient" === a.fill.type ? r :
						"pattern" === a.fill.type ? s : h, e.solid && (n = h), e.color && (n = e.color), n
				}
			}, {
				key: "getFillColors",
				value: function() {
					var t = this.w,
						e = t.config,
						i = this.opts,
						a = [];
					return t.globals.comboCharts ? "line" === t.config.series[this.seriesIndex].type ? t.globals.stroke.colors instanceof Array ?
						a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : t.globals.fill.colors instanceof Array ?
						a = t.globals.fill.colors : a.push(t.globals.fill.colors) : "line" === e.chart.type ? t.globals.stroke.colors instanceof Array ?
						a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : t.globals.fill.colors instanceof Array ?
						a = t.globals.fill.colors : a.push(t.globals.fill.colors), void 0 !== i.fillColors && (a = [], i.fillColors instanceof Array ?
							a = i.fillColors.slice() : a.push(i.fillColors)), a
				}
			}, {
				key: "handlePatternFill",
				value: function(t, e, i, a) {
					var n = this.w.config,
						s = this.opts,
						r = new f.default(this.ctx),
						o = void 0 === n.fill.pattern.strokeWidth ? Array.isArray(n.stroke.width) ? n.stroke.width[this.seriesIndex] :
						n.stroke.width : Array.isArray(n.fill.pattern.strokeWidth) ? n.fill.pattern.strokeWidth[this.seriesIndex] :
						n.fill.pattern.strokeWidth,
						l = e;
					n.fill.pattern.style instanceof Array ? t = void 0 !== n.fill.pattern.style[s.seriesNumber] ? r.drawPattern(
							n.fill.pattern.style[s.seriesNumber], n.fill.pattern.width, n.fill.pattern.height, l, o, i) : a : t = r
						.drawPattern(n.fill.pattern.style, n.fill.pattern.width, n.fill.pattern.height, l, o, i);
					return t
				}
			}, {
				key: "handleGradientFill",
				value: function(t, e, i) {
					var a = this.w.config,
						n = this.opts,
						s = new f.default(this.ctx),
						r = new p.default,
						o = a.fill.gradient.type,
						l = void 0,
						h = void 0,
						c = void 0 === a.fill.gradient.opacityFrom ? i : a.fill.gradient.opacityFrom,
						u = void 0 === a.fill.gradient.opacityTo ? i : a.fill.gradient.opacityTo;
					if (l = e, h = void 0 === a.fill.gradient.gradientToColors || 0 === a.fill.gradient.gradientToColors.length ?
						"dark" === a.fill.gradient.shade ? r.shadeColor(-1 * parseFloat(a.fill.gradient.shadeIntensity), e) : r.shadeColor(
							parseFloat(a.fill.gradient.shadeIntensity), e) : a.fill.gradient.gradientToColors[n.seriesNumber], a.fill
						.gradient.inverseColors) {
						var d = l;
						l = h, h = d
					}
					return s.drawGradient(o, l, h, c, u, n.size, a.fill.gradient.stops)
				}
			}]), e
		}();
		e.default = s
	}, function(t, e, i) {
		"use strict";
		var s = i(17);
		t.exports = function(a, n, t) {
			if (s(a), void 0 === n) return a;
			switch (t) {
				case 1:
					return function(t) {
						return a.call(n, t)
					};
				case 2:
					return function(t, e) {
						return a.call(n, t, e)
					};
				case 3:
					return function(t, e, i) {
						return a.call(n, t, e, i)
					}
			}
			return function() {
				return a.apply(n, arguments)
			}
		}
	}, function(t, e, i) {
		"use strict";
		var s = i(3),
			r = i(12),
			o = i(11),
			l = i(24)("src"),
			a = "toString",
			n = Function[a],
			h = ("" + n).split(a);
		i(4).inspectSource = function(t) {
			return n.call(t)
		}, (t.exports = function(t, e, i, a) {
			var n = "function" == typeof i;
			n && (o(i, "name") || r(i, "name", e)), t[e] !== i && (n && (o(i, l) || r(i, l, t[e] ? "" + t[e] : h.join(
				String(e)))), t === s ? t[e] = i : a ? t[e] ? t[e] = i : r(t, e, i) : (delete t[e], r(t, e, i)))
		})(Function.prototype, a, function() {
			return "function" == typeof this && this[l] || n.call(this)
		})
	}, function(t, e, i) {
		"use strict";
		var a = i(36),
			n = i(33);
		t.exports = function(t) {
			return a(n(t))
		}
	}, function(t, e, i) {
		"use strict";
		t.exports = function(t) {
			if ("function" != typeof t) throw TypeError(t + " is not a function!");
			return t
		}
	}, function(t, e, i) {
		"use strict";
		var a = {}.toString;
		t.exports = function(t) {
			return a.call(t).slice(8, -1)
		}
	}, function(t, e, i) {
		"use strict";
		t.exports = function(t) {
			try {
				return !!t()
			} catch (t) {
				return !0
			}
		}
	}, function(t, e, i) {
		"use strict";
		t.exports = {}
	}, function(t, e, i) {
		"use strict";
		t.exports = !1
	}, function(t, e, i) {
		"use strict";
		t.exports = function(t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(41),
			n = Math.min;
		t.exports = function(t) {
			return 0 < t ? n(a(t), 9007199254740991) : 0
		}
	}, function(t, e, i) {
		"use strict";
		var a = 0,
			n = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++a + n).toString(36))
		}
	}, function(t, e, i) {
		"use strict";
		var a = function() {
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var a = e[i];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
						t, a.key, a)
				}
			}
			return function(t, e, i) {
				return e && a(t.prototype, e), i && a(t, i), t
			}
		}();
		var n = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.setEasingFunctions()
			}
			return a(e, [{
				key: "setEasingFunctions",
				value: function() {
					var t = void 0;
					switch (this.w.config.chart.animations.easing) {
						case "linear":
							t = "-";
							break;
						case "easein":
							t = "<";
							break;
						case "easeout":
							t = ">";
							break;
						case "easeinout":
							t = "<>";
							break;
						default:
							t = "<>"
					}
					this.w.globals.easing = t
				}
			}, {
				key: "animateLine",
				value: function(t, e, i, a) {
					t.attr(e).animate(a).attr(i)
				}
			}, {
				key: "animateCircleRadius",
				value: function(t, e, i, a) {
					e || (e = 0), t.attr({
						r: e
					}).animate(a).attr({
						r: i
					})
				}
			}, {
				key: "animateCircle",
				value: function(t, e, i, a) {
					t.attr({
						r: e.r,
						cx: e.cx,
						cy: e.cy
					}).animate(a).attr({
						r: i.r,
						cx: i.cx,
						cy: i.cy
					})
				}
			}, {
				key: "animateRect",
				value: function(t, e, i, a) {
					t.attr(e).animate(a).attr(i)
				}
			}, {
				key: "animatePathsGradually",
				value: function(t) {
					var e = t.el,
						i = t.pathFrom,
						a = t.pathTo,
						n = t.speed,
						s = t.delay,
						r = t.strokeWidth,
						o = this.w,
						l = 0;
					o.config.chart.animations.animateGradually.enabled && (l = o.config.chart.animations.animateGradually.delay),
						o.config.chart.animations.dynamicAnimation.enabled && o.globals.dataChanged && (l = 0), this.morphSVG(e,
							i, a, n, r, s * l)
				}
			}, {
				key: "morphSVG",
				value: function(t, e, i, a, n, s) {
					var r = this.w;
					e || (e = t.attr("pathFrom")), i || (i = t.attr("pathTo")), (-1 < e.indexOf("undefined") || -1 < e.indexOf(
							"NaN")) && (e = "M 0 " + r.globals.gridHeight, a = 1), (-1 < i.indexOf("undefined") || -1 < i.indexOf(
							"NaN")) && (i = "M 0 " + r.globals.gridHeight, a = 1), t.plot(e).animate(1, r.globals.easing, s).plot(e)
						.animate(a, r.globals.easing, s).plot(i)
				}
			}, {
				key: "showDelayedElements",
				value: function() {
					var t = this.w,
						e = t.config.chart.animations,
						i = e.speed,
						a = e.animateGradually.enabled,
						n = e.animateGradually.delay;
					if (e.enabled && !t.globals.resized)
						for (var s = 0; s < t.globals.series.length; s++) {
							var r = 0;
							a && (r = (s + 1) * (n / 1e3));
							for (var o = 0; o < t.globals.delayedElements.length; o++)
								if (t.globals.delayedElements[o].index === s) {
									var l = t.globals.delayedElements[o].el;
									l.classList.add("apexcharts-showAfterDelay"), l.style.animationDelay = i / 950 + r + "s"
								}
						}
					if (t.config.chart.animations.dynamicAnimation.enabled && t.globals.dataChanged)
						for (var h = 0; h < t.globals.delayedElements.length; h++) {
							var c = t.globals.delayedElements[h].el;
							c.classList.add("apexcharts-showAfterDelay"), c.style.animationDelay = t.config.chart.animations.dynamicAnimation
								.speed / 950 + "s"
						}
				}
			}]), e
		}();
		t.exports = n
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var a, n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = i(0),
			o = (a = s) && a.__esModule ? a : {
				default: a
			};
		var r = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w
			}
			return n(e, [{
				key: "toggleSeriesOnHover",
				value: function(t, e) {
					var i = this.w,
						a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
					if ("mousemove" === t.type) {
						var n = parseInt(e.getAttribute("rel")) - 1,
							s = null;
						s = i.globals.axisCharts || "radialBar" === i.config.chart.type ? i.globals.axisCharts ? i.globals.dom.baseEl
							.querySelector(".apexcharts-series[data\\:realIndex='" + n + "']") : i.globals.dom.baseEl.querySelector(
								".apexcharts-series[rel='" + (n + 1) + "']") : i.globals.dom.baseEl.querySelector(
								".apexcharts-series[rel='" + (n + 1) + "'] path");
						for (var r = 0; r < a.length; r++) a[r].classList.add("legend-mouseover-inactive");
						null !== s && (i.globals.axisCharts || s.parentNode.classList.remove("legend-mouseover-inactive"), s.classList
							.remove("legend-mouseover-inactive"))
					} else if ("mouseout" === t.type)
						for (var o = 0; o < a.length; o++) a[o].classList.remove("legend-mouseover-inactive")
				}
			}, {
				key: "highlightRangeInSeries",
				value: function(t, e) {
					var i = this.w,
						a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap-rect"),
						n = function() {
							for (var t = 0; t < a.length; t++) a[t].classList.remove("legend-mouseover-inactive")
						};
					if ("mousemove" === t.type) {
						var s = parseInt(e.getAttribute("rel")) - 1;
						n(),
							function() {
								for (var t = 0; t < a.length; t++) a[t].classList.add("legend-mouseover-inactive")
							}(),
							function(t) {
								for (var e = 0; e < a.length; e++) {
									var i = parseInt(a[e].getAttribute("val"));
									i >= t.from && i <= t.to && a[e].classList.remove("legend-mouseover-inactive")
								}
							}(i.config.plotOptions.heatmap.colorScale.ranges[s])
					} else "mouseout" === t.type && n()
				}
			}, {
				key: "getActiveSeriesIndex",
				value: function() {
					var i = this.w,
						t = 0;
					if (1 < i.globals.series.length)
						for (var e = i.globals.series.map(function(t, e) {
								return 0 < t.length && "bar" !== i.config.series[e].type && "column" !== i.config.series[e].type ? e :
									-1
							}), a = 0; a < e.length; a++)
							if (-1 !== e[a]) {
								t = e[a];
								break
							} return t
				}
			}, {
				key: "getActiveConfigSeriesIndex",
				value: function() {
					var t = this.w,
						e = 0;
					if (1 < t.config.series.length)
						for (var i = t.config.series.map(function(t, e) {
								return t.data && 0 < t.data.length ? e : -1
							}), a = 0; a < i.length; a++)
							if (-1 !== i[a]) {
								e = i[a];
								break
							} return e
				}
			}, {
				key: "getPreviousPaths",
				value: function() {
					var o = this.w;

					function t(t, e, i) {
						for (var a = t[e].childNodes, n = {
								type: i,
								paths: [],
								realIndex: t[e].getAttribute("data:realIndex")
							}, s = 0; s < a.length; s++)
							if (a[s].hasAttribute("pathTo")) {
								var r = a[s].getAttribute("pathTo");
								"area" === i ? (a[s].classList.contains("apexcharts-line") || a[s].classList.contains(
									"apexcharts-area")) && n.paths.push({
									d: r
								}) : n.paths.push({
									d: r
								})
							} o.globals.previousPaths.push(n)
					}
					o.globals.previousPaths = [];
					var e = o.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-series");
					if (0 < e.length)
						for (var i = e.length - 1; 0 <= i; i--) t(e, i, "line");
					var a = o.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-series");
					if (0 < a.length)
						for (var n = a.length - 1; 0 <= n; n--) t(a, n, "area");
					var s = o.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series .apexcharts-series");
					if (0 < s.length)
						for (var r = 0; r < s.length; r++) t(s, r, "bar");
					var l = o.globals.dom.baseEl.querySelectorAll(".apexcharts-candlestick-series .apexcharts-series");
					if (0 < l.length)
						for (var h = 0; h < l.length; h++) t(l, h, "candlestick");
					var c = o.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series");
					if (0 < c.length)
						for (var u = 0; u < c.length; u++) {
							for (var d = o.globals.dom.baseEl.querySelectorAll(
									".apexcharts-bubble-series .apexcharts-series[data\\:realIndex='" + u + "'] circle"), f = [], p = 0; p <
								d.length; p++) f.push({
								x: d[p].getAttribute("cx"),
								y: d[p].getAttribute("cy"),
								r: d[p].getAttribute("r")
							});
							o.globals.previousPaths.push(f)
						}
					var g = o.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series");
					if (0 < g.length)
						for (var x = 0; x < g.length; x++) {
							for (var v = o.globals.dom.baseEl.querySelectorAll(
									".apexcharts-scatter-series .apexcharts-series[data\\:realIndex='" + x + "'] circle"), b = [], m = 0; m <
								v.length; m++) b.push({
								x: v[m].getAttribute("cx"),
								y: v[m].getAttribute("cy"),
								r: v[m].getAttribute("r")
							});
							o.globals.previousPaths.push(b)
						}
					var y = o.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series");
					if (0 < y.length)
						for (var w = 0; w < y.length; w++) {
							for (var k = o.globals.dom.baseEl.querySelectorAll(
									".apexcharts-heatmap .apexcharts-series[data\\:realIndex='" + w + "'] rect"), S = [], A = 0; A < k.length; A++)
								S.push({
									color: k[A].getAttribute("color")
								});
							o.globals.previousPaths.push(S)
						}
					o.globals.axisCharts || (o.globals.previousPaths = o.globals.series)
				}
			}, {
				key: "handleNoData",
				value: function() {
					var t = this.w,
						e = t.config.noData,
						i = new o.default(this.ctx),
						a = t.globals.svgWidth / 2,
						n = t.globals.svgHeight / 2,
						s = "middle";
					if (t.globals.noData = !0, "left" === e.align ? (a = 10, s = "start") : "right" === e.align && (a = t.globals
							.svgWidth - 10, s = "end"), "top" === e.verticalAlign ? n = 50 : "bottom" === e.verticalAlign && (n = t
							.globals.svgHeight - 50), a += e.offsetX, n = n + parseInt(e.style.fontSize) + 2, void 0 !== e.text &&
						"" !== e.text) {
						var r = i.drawText({
							x: a,
							y: n,
							text: e.text,
							textAnchor: s,
							fontSize: e.style.fontSize,
							fontFamily: e.style.fontFamily,
							foreColor: e.style.color,
							opacity: 1,
							class: "apexcharts-text-nodata"
						});
						r.node.setAttribute("class", "apexcharts-title-text"), t.globals.dom.Paper.add(r)
					}
				}
			}, {
				key: "setNullSeriesToZeroValues",
				value: function(t) {
					for (var e = this.w, i = 0; i < t.length; i++)
						if (0 === t[i].length)
							for (var a = 0; a < t[e.globals.maxValsInArrayIndex].length; a++) t[i].push(0);
					return t
				}
			}]), e
		}();
		e.default = r
	}, function(t, e, i) {
		"use strict";
		var a = i(64),
			n = i(35);
		t.exports = Object.keys || function(t) {
			return a(t, n)
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(9).f,
			n = i(11),
			s = i(2)("toStringTag");
		t.exports = function(t, e, i) {
			t && !n(t = i ? t : t.prototype, s) && a(t, s, {
				configurable: !0,
				value: e
			})
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(33);
		t.exports = function(t) {
			return Object(a(t))
		}
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			n = r(i(52)),
			s = r(i(1));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var o = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.tooltipKeyFormat = "dd MMM"
			}
			return a(e, [{
				key: "xLabelFormat",
				value: function(t, e) {
					var i = this.w;
					if ("datetime" === i.config.xaxis.type && void 0 === i.config.tooltip.x.formatter) return new n.default(
						this.ctx).formatDate(new Date(e), i.config.tooltip.x.format, !0, !0);
					return t(e)
				}
			}, {
				key: "setLabelFormatters",
				value: function() {
					var i = this.w;
					return i.globals.xLabelFormatter = function(t) {
							return t
						}, i.globals.xaxisTooltipFormatter = function(t) {
							return t
						}, i.globals.ttKeyFormatter = function(t) {
							return t
						}, i.globals.ttZFormatter = function(t) {
							return t
						}, i.globals.legendFormatter = function(t) {
							return t
						}, "function" == typeof i.config.tooltip.x.formatter && (i.globals.ttKeyFormatter = i.config.tooltip.x.formatter),
						"function" == typeof i.config.xaxis.tooltip.formatter && (i.globals.xaxisTooltipFormatter = i.config.xaxis
							.tooltip.formatter), Array.isArray(i.config.tooltip.y) ? i.globals.ttVal = i.config.tooltip.y : void 0 !==
						i.config.tooltip.y.formatter && (i.globals.ttVal = i.config.tooltip.y), void 0 !== i.config.tooltip.z.formatter &&
						(i.globals.ttZFormatter = i.config.tooltip.z.formatter), void 0 !== i.config.legend.formatter && (i.globals
							.legendFormatter = i.config.legend.formatter), void 0 !== i.config.xaxis.labels.formatter ? i.globals.xLabelFormatter =
						i.config.xaxis.labels.formatter : i.globals.xLabelFormatter = function(t) {
							return s.default.isNumber(t) ? t.toFixed(0) : t
						}, i.config.yaxis.forEach(function(e, t) {
							"function" == typeof e.labels.formatter ? i.globals.yLabelFormatters[t] = e.labels.formatter : i.globals
								.yLabelFormatters[t] = function(t) {
									return s.default.isNumber(t) ? 0 !== i.globals.yValueDecimal ? t.toFixed(e.decimalsInFloat) : t.toFixed(
										0) : t
								}
						}), i.globals
				}
			}, {
				key: "heatmapLabelFormatters",
				value: function() {
					var t = this.w;
					if ("heatmap" === t.config.chart.type) {
						t.globals.yAxisScale[0].result = t.globals.seriesNames.slice();
						var e = t.globals.seriesNames.reduce(function(t, e) {
							return t.length > e.length ? t : e
						}, 0);
						t.globals.yAxisScale[0].niceMax = e, t.globals.yAxisScale[0].niceMin = e, t.globals.yLabelFormatters[0] =
							function(t) {
								return t
							}
					}
				}
			}]), e
		}();
		e.default = o
	}, function(t, e, i) {
		"use strict";
		var a = i(2)("unscopables"),
			n = Array.prototype;
		null == n[a] && i(12)(n, a, {}), t.exports = function(t) {
			n[a][t] = !0
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(18),
			s = i(2)("toStringTag"),
			r = "Arguments" == n(function() {
				return arguments
			}());
		t.exports = function(t) {
			var e, i, a;
			return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) {
					try {
						return t[e]
					} catch (t) {}
				}(e = Object(t), s)) ? i : r ? n(e) : "Object" == (a = n(e)) && "function" == typeof e.callee ? "Arguments" :
				a
		}
	}, function(t, e, i) {
		"use strict";
		t.exports = function(t) {
			if (null == t) throw TypeError("Can't call method on  " + t);
			return t
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(8),
			n = i(3).document,
			s = a(n) && a(n.createElement);
		t.exports = function(t) {
			return s ? n.createElement(t) : {}
		}
	}, function(t, e, i) {
		"use strict";
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
			",")
	}, function(t, e, i) {
		"use strict";
		var a = i(18);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
			return "String" == a(t) ? t.split("") : Object(t)
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(17);

		function a(t) {
			var i, a;
			this.promise = new t(function(t, e) {
				if (void 0 !== i || void 0 !== a) throw TypeError("Bad Promise constructor");
				i = t, a = e
			}), this.resolve = n(i), this.reject = n(a)
		}
		t.exports.f = function(t) {
			return new a(t)
		}
	}, function(t, e, i) {
		"use strict";
		e.f = {}.propertyIsEnumerable
	}, function(t, e, i) {
		"use strict";
		var a = i(40)("keys"),
			n = i(24);
		t.exports = function(t) {
			return a[t] || (a[t] = n(t))
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(4),
			n = i(3),
			s = "__core-js_shared__",
			r = n[s] || (n[s] = {});
		(t.exports = function(t, e) {
			return r[t] || (r[t] = void 0 !== e ? e : {})
		})("versions", []).push({
			version: a.version,
			mode: i(21) ? "pure" : "global",
			copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
		})
	}, function(t, e, i) {
		"use strict";
		var a = Math.ceil,
			n = Math.floor;
		t.exports = function(t) {
			return isNaN(t = +t) ? 0 : (0 < t ? n : a)(t)
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(8);
		t.exports = function(t, e) {
			if (!n(t)) return t;
			var i, a;
			if (e && "function" == typeof(i = t.toString) && !n(a = i.call(t))) return a;
			if ("function" == typeof(i = t.valueOf) && !n(a = i.call(t))) return a;
			if (!e && "function" == typeof(i = t.toString) && !n(a = i.call(t))) return a;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(3),
			n = i(4),
			s = i(21),
			r = i(69),
			o = i(9).f;
		t.exports = function(t) {
			var e = n.Symbol || (n.Symbol = s ? {} : a.Symbol || {});
			"_" == t.charAt(0) || t in e || o(e, t, {
				value: r.f(t)
			})
		}
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			r = a(i(13)),
			s = a(i(6)),
			T = a(i(0)),
			p = a(i(45));

		function a(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var o = function() {
			function a(t, e) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, a), this.ctx = t, this.w = t.w;
				var i = this.w;
				this.barOptions = i.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth =
					i.config.stroke.width, this.isNullValue = !1, this.xyRatios = e, null !== this.xyRatios && (this.xRatio = e.xRatio,
						this.yRatio = e.yRatio, this.invertedXRatio = e.invertedXRatio, this.invertedYRatio = e.invertedYRatio, this
						.baseLineY = e.baseLineY, this.baseLineInvertedY = e.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen =
					0
			}
			return n(a, [{
				key: "draw",
				value: function(A, n) {
					var C = this,
						P = this.w,
						s = new T.default(this.ctx),
						M = new r.default(this.ctx);
					this.initVariables(A);
					var L = s.group({
						class: "apexcharts-bar-series apexcharts-plot-series"
					});
					L.attr("clip-path", "url(#gridRectMask" + P.globals.cuid + ")");
					for (var t = function(r, o) {
							var l, h, c, u, d = void 0,
								f = void 0,
								p = void 0,
								g = void 0,
								x = [],
								v = [],
								b = P.globals.comboCharts ? n[r] : r,
								m = s.group({
									class: "apexcharts-series",
									rel: r + 1,
									"data:realIndex": b
								});
							0 < A[r].length && (C.visibleI = C.visibleI + 1);
							var y, w, k = 0;
							1 < C.yRatio.length && (C.yaxisIndex = b);
							var t = C.initialPositions({
								makeWidthForVisibleItems: !1
							});
							g = t.y, y = t.barHeight, h = t.yDivision, u = t.zeroW, p = t.x, w = t.barWidth, l = t.xDivision, c =
								t.zeroH, C.horizontal || v.push(p + w / 2);
							for (var S = s.group({
									class: "apexcharts-datalabels"
								}), e = function(e, t) {
									void 0 === C.series[r][e] || null === A[r][e] ? C.isNullValue = !0 : C.isNullValue = !1, P.config.stroke
										.show && (k = C.isNullValue ? 0 : Array.isArray(C.strokeWidth) ? C.strokeWidth[b] : C.strokeWidth);
									var i = null;
									i = C.isHorizontal ? C.drawBarPaths({
										indexes: {
											i: r,
											j: e,
											realIndex: b,
											bc: o
										},
										barHeight: y,
										strokeWidth: k,
										pathTo: d,
										pathFrom: f,
										zeroW: u,
										x: p,
										y: g,
										yDivision: h,
										elSeries: m
									}) : C.drawColumnPaths({
										indexes: {
											i: r,
											j: e,
											realIndex: b,
											bc: o
										},
										x: p,
										y: g,
										xDivision: l,
										pathTo: d,
										pathFrom: f,
										barWidth: w,
										zeroH: c,
										strokeWidth: k,
										elSeries: m
									}), d = i.pathTo, f = i.pathFrom, g = i.y, p = i.x, 0 < e && v.push(p + w / 2), x.push(g);
									var a = C.barOptions.distributed ? e : r,
										n = null;
									0 < C.barOptions.colors.ranges.length && C.barOptions.colors.ranges.map(function(t) {
										A[r][e] >= t.from && A[r][e] <= t.to && (n = t.color)
									});
									var s = M.fillPath(m, {
										seriesNumber: C.barOptions.distributed ? a : b,
										color: n
									});
									m = C.renderSeries({
										realIndex: b,
										pathFill: s,
										j: e,
										i: r,
										pathFrom: f,
										pathTo: d,
										strokeWidth: k,
										elSeries: m,
										x: p,
										y: g,
										series: A,
										barHeight: y,
										barWidth: w,
										elDataLabelsWrap: S,
										visibleSeries: C.visibleI,
										type: "bar"
									})
								}, i = 0, a = P.globals.dataPoints; i < P.globals.dataPoints; i++, a--) e(i);
							P.globals.seriesXvalues[b] = v, P.globals.seriesYvalues[b] = x, L.add(m)
						}, e = 0, i = 0; e < A.length; e++, i++) t(e, i);
					return L
				}
			}, {
				key: "renderSeries",
				value: function(t) {
					var e = t.realIndex,
						i = t.pathFill,
						a = t.j,
						n = t.i,
						s = t.pathFrom,
						r = t.pathTo,
						o = t.strokeWidth,
						l = t.elSeries,
						h = t.x,
						c = t.y,
						u = t.series,
						d = t.barHeight,
						f = t.barWidth,
						p = t.elDataLabelsWrap,
						g = t.visibleSeries,
						x = t.type,
						v = this.w,
						b = new T.default(this.ctx),
						m = v.globals.stroke.colors[e];
					this.isNullValue && (i = "none");
					var y = a / v.config.chart.animations.animateGradually.delay * (v.config.chart.animations.speed / v.globals
							.dataPoints) / 2.4,
						w = b.renderPaths({
							i: n,
							realIndex: e,
							pathFrom: s,
							pathTo: r,
							stroke: m,
							strokeWidth: o,
							strokeLineCap: v.config.stroke.lineCap,
							fill: i,
							animationDelay: y,
							initialSpeed: v.config.chart.animations.speed,
							dataChangeSpeed: v.config.chart.animations.dynamicAnimation.speed,
							className: "apexcharts-" + x + "-area",
							id: "apexcharts-" + x + "-area"
						});
					this.setSelectedBarFilter(w, e, a), l.add(w);
					var k = this.calculateDataLabelsPos({
						x: h,
						y: c,
						i: n,
						j: a,
						series: u,
						realIndex: e,
						barHeight: d,
						barWidth: f,
						renderedPath: w,
						visibleSeries: g
					});
					return null !== k && p.add(k), l.add(p), l
				}
			}, {
				key: "initVariables",
				value: function(t, e) {
					var i = this.w;
					this.series = t, this.totalItems = 0, this.seriesLen = 0, this.visibleI = -1, this.visibleItems = 1;
					for (var a = 0; a < t.length; a++)
						if (0 < t[a].length && (this.seriesLen = this.seriesLen + 1, this.totalItems += t[a].length), e)
							for (var n = 0; n < t[a].length; n++) i.globals.seriesX[a][n] > i.globals.minX && i.globals.seriesX[a][
								n
							] < i.globals.maxX && this.visibleItems++;
					0 === this.seriesLen && (this.seriesLen = 1)
				}
			}, {
				key: "initialPositions",
				value: function(t) {
					var e = t.makeWidthForVisibleItems,
						i = void 0 !== e && e,
						a = this.w,
						n = void 0,
						s = void 0,
						r = void 0,
						o = void 0,
						l = void 0,
						h = void 0,
						c = void 0,
						u = void 0;
					return this.isHorizontal ? (l = (r = a.globals.gridHeight / a.globals.dataPoints) / this.seriesLen, a.globals
						.dataXY && (l = (r = a.globals.gridHeight / this.totalItems) / this.seriesLen), l = l * parseInt(this.barOptions
							.barHeight) / 100, u = this.baseLineInvertedY + a.globals.padHorizontal, s = (r - l * this.seriesLen) /
						2) : (h = (o = a.globals.gridWidth / a.globals.dataPoints) / this.seriesLen, h = a.globals.dataXY ? i ?
						(o = a.globals.gridWidth / this.visibleItems) / this.seriesLen * .7 : (o = a.globals.gridWidth / (this.totalItems /
							2)) / (this.seriesLen + 1) * (parseInt(this.barOptions.columnWidth) / 100) : h * parseInt(this.barOptions
							.columnWidth) / 100, c = a.globals.gridHeight - this.baseLineY[this.yaxisIndex], n = a.globals.padHorizontal +
						(o - h * this.seriesLen) / 2), {
						x: n,
						y: s,
						yDivision: r,
						xDivision: o,
						barHeight: l,
						barWidth: h,
						zeroH: c,
						zeroW: u
					}
				}
			}, {
				key: "drawBarPaths",
				value: function(t) {
					var e = t.indexes,
						i = t.barHeight,
						a = t.strokeWidth,
						n = t.pathTo,
						s = t.pathFrom,
						r = t.zeroW,
						o = t.x,
						l = t.y,
						h = t.yDivision,
						c = t.elSeries,
						u = this.w,
						d = new T.default(this.ctx),
						f = e.i,
						p = e.j,
						g = e.realIndex,
						x = e.bc;
					u.globals.dataXY && (l = (u.globals.seriesX[f][p] - u.globals.minX) / this.invertedXRatio - i);
					var v = l + i * this.visibleI;
					n = d.move(r, v), s = d.move(r, v), 0 < u.globals.previousPaths.length && (s = this.getPathFrom(g, p, !0));
					var b = {
							barHeight: i,
							strokeWidth: a,
							barYPosition: v,
							x: o = void 0 === this.series[f][p] || null === this.series[f][p] ? r : r + this.series[f][p] / this.invertedYRatio,
							zeroW: r
						},
						m = this.barEndingShape(u, b, this.series, f, p);
					if (n = n + d.line(m.newX, v) + m.path + d.line(r, v + i - a) + d.line(r, v), s = s + d.line(r, v) + m.ending_p_from +
						d.line(r, v + i - a) + d.line(r, v + i - a) + d.line(r, v), u.globals.dataXY || (l += h), 0 < this.barOptions
						.colors.backgroundBarColors.length && 0 === f) {
						x >= this.barOptions.colors.backgroundBarColors.length && (x = 0);
						var y = this.barOptions.colors.backgroundBarColors[x],
							w = d.drawRect(0, v - i * this.visibleI, u.globals.gridWidth, i * this.seriesLen, 0, y, this.barOptions
								.colors.backgroundBarOpacity);
						c.add(w), w.node.classList.add("apexcharts-backgroundBar")
					}
					return {
						pathTo: n,
						pathFrom: s,
						x: o,
						y: l,
						barYPosition: v
					}
				}
			}, {
				key: "drawColumnPaths",
				value: function(t) {
					var e = t.indexes,
						i = t.x,
						a = t.y,
						n = t.xDivision,
						s = t.pathTo,
						r = t.pathFrom,
						o = t.barWidth,
						l = t.zeroH,
						h = t.strokeWidth,
						c = t.elSeries,
						u = this.w,
						d = new T.default(this.ctx),
						f = e.i,
						p = e.j,
						g = e.realIndex,
						x = e.bc;
					u.globals.dataXY && (i = (u.globals.seriesX[f][p] - u.globals.minX) / this.xRatio - o / 2);
					var v = i + o * this.visibleI;
					s = d.move(v, l), r = d.move(v, l), 0 < u.globals.previousPaths.length && (r = this.getPathFrom(g, p, !0));
					var b = {
							barWidth: o,
							strokeWidth: h,
							barXPosition: v,
							y: a = void 0 === this.series[f][p] || null === this.series[f][p] ? l : l - this.series[f][p] / this.yRatio[
								this.yaxisIndex],
							zeroH: l
						},
						m = this.barEndingShape(u, b, this.series, f, p);
					if (s = s + d.line(v, m.newY) + m.path + d.line(v + o - h, l) + d.line(v, l), r = r + d.line(v, l) + m.ending_p_from +
						d.line(v + o - h, l) + d.line(v + o - h, l) + d.line(v, l), u.globals.dataXY || (i += n), 0 < this.barOptions
						.colors.backgroundBarColors.length && 0 === f) {
						x >= this.barOptions.colors.backgroundBarColors.length && (x = 0);
						var y = this.barOptions.colors.backgroundBarColors[x],
							w = d.drawRect(v - o * this.visibleI, 0, o * this.seriesLen, u.globals.gridHeight, 0, y, this.barOptions
								.colors.backgroundBarOpacity);
						c.add(w), w.node.classList.add("apexcharts-backgroundBar")
					}
					return {
						pathTo: s,
						pathFrom: r,
						x: i,
						y: a,
						barXPosition: v
					}
				}
			}, {
				key: "getPathFrom",
				value: function(t, e) {
					2 < arguments.length && void 0 !== arguments[2] && arguments[2];
					for (var i = this.w, a = void 0, n = 0; n < i.globals.previousPaths.length; n++) {
						var s = i.globals.previousPaths[n];
						0 < s.paths.length && parseInt(s.realIndex) === parseInt(t) && void 0 !== i.globals.previousPaths[n].paths[
							e] && (a = i.globals.previousPaths[n].paths[e].d)
					}
					return a
				}
			}, {
				key: "calculateDataLabelsPos",
				value: function(t) {
					var e = t.x,
						i = t.y,
						a = t.i,
						n = t.j,
						s = t.realIndex,
						r = t.series,
						o = t.barHeight,
						l = t.barWidth,
						h = t.visibleSeries,
						c = t.renderedPath,
						u = this.w,
						d = new T.default(this.ctx),
						f = Array.isArray(this.strokeWidth) ? this.strokeWidth[s] : this.strokeWidth,
						p = e + parseFloat(l * h),
						g = i + parseFloat(o * h);
					u.globals.dataXY && (p = e + parseFloat(l * (h + 1)) - f, g = i + parseFloat(o * (h + 1)) - f);
					var x = e,
						v = i,
						b = {},
						m = u.config.dataLabels,
						y = this.barOptions.dataLabels,
						w = m.offsetX,
						k = m.offsetY,
						S = d.getTextRects(u.globals.series[a][n], parseInt(m.style.fontSize));
					return b = this.isHorizontal ? this.calculateBarsDataLabelsPosition({
						x: e,
						y: i,
						i: a,
						j: n,
						bcy: g,
						barHeight: o,
						textRects: S,
						strokeWidth: f,
						dataLabelsX: x,
						dataLabelsY: v,
						barDataLabelsConfig: y,
						offX: w,
						offY: k
					}) : this.calculateColumnsDataLabelsPosition({
						x: e,
						y: i,
						i: a,
						j: n,
						bcx: p,
						bcy: g,
						barHeight: o,
						barWidth: l,
						textRects: S,
						strokeWidth: f,
						dataLabelsY: v,
						barDataLabelsConfig: y,
						offX: w,
						offY: k
					}), c.attr({
						cy: b.bcy,
						cx: b.bcx,
						j: n,
						val: r[a][n],
						barHeight: o,
						barWidth: l
					}), this.drawCalculatedDataLabels({
						x: b.dataLabelsX,
						y: b.dataLabelsY,
						val: r[a][n],
						i: s,
						j: n,
						dataLabelsConfig: m
					})
				}
			}, {
				key: "calculateColumnsDataLabelsPosition",
				value: function(t) {
					var e = this.w,
						i = t.i,
						a = t.j,
						n = t.y,
						s = t.bcx,
						r = t.barWidth,
						o = t.textRects,
						l = t.dataLabelsY,
						h = t.barDataLabelsConfig,
						c = t.strokeWidth,
						u = t.offX,
						d = t.offY,
						f = void 0,
						p = this.series[i][a] / this.yRatio[this.yaxisIndex],
						g = e.globals.gridWidth / e.globals.dataPoints;
					s -= c / 2, f = e.globals.dataXY ? s - r / 2 + u : s - g + r / 2 + u;
					var x = !!(e.globals.gridHeight - this.baseLineY[this.yaxisIndex] < n && 0 !== Math.abs(this.baseLineY[
							this.yaxisIndex])),
						v = 0 !== Math.abs(e.globals.minY);
					switch (h.position) {
						case "center":
							l = n + p / 2 + o.height / 2 - d, v && (l = x ? n + p / 2 + o.height / 2 + d : n + p / 2 + o.height / 2 -
								d);
							break;
						case "bottom":
							l = v ? x ? n + p + o.height + c + d : n + p - o.height / 2 + c - d : e.globals.gridHeight - o.height /
								2 - d;
							break;
						case "top":
							l = v && x ? n - o.height / 2 - d : n + o.height + d
					}
					return {
						bcx: s,
						bcy: n,
						dataLabelsX: f,
						dataLabelsY: l
					}
				}
			}, {
				key: "calculateBarsDataLabelsPosition",
				value: function(t) {
					var e = this.w,
						i = t.x,
						a = t.i,
						n = t.j,
						s = t.bcy,
						r = t.barHeight,
						o = t.textRects,
						l = t.dataLabelsX,
						h = t.strokeWidth,
						c = t.barDataLabelsConfig,
						u = t.offX,
						d = t.offY,
						f = s - e.globals.gridHeight / e.globals.dataPoints + r / 2 + o.height / 2 + d - 3,
						p = this.series[a][n] / this.invertedYRatio,
						g = this.series[a][n] <= 0,
						x = 0 !== Math.abs(e.globals.minY);
					switch (c.position) {
						case "center":
							l = i - p / 2 + u, x && (l = g ? i - p / 2 - u : i - p / 2 + u);
							break;
						case "bottom":
							l = x && g ? i - p - h - Math.round(o.width / 2) - u : i - p + h + Math.round(o.width / 2) + u;
							break;
						case "top":
							l = x ? g ? i - h + Math.round(o.width / 2) - u : i - h - Math.round(o.width / 2) + u : i + h - Math.round(
								o.width / 2) + u
					}
					return l < 0 ? l = o.width + h : l + o.width / 2 > e.globals.gridWidth && (l = l - o.width - h), {
						bcx: i,
						bcy: s,
						dataLabelsX: l,
						dataLabelsY: f
					}
				}
			}, {
				key: "drawCalculatedDataLabels",
				value: function(t) {
					var e = t.x,
						i = t.y,
						a = t.val,
						n = t.i,
						s = t.j,
						r = t.dataLabelsConfig,
						o = this.w,
						l = new p.default(this.ctx),
						h = new T.default(this.ctx),
						c = r.formatter,
						u = null,
						d = o.globals.collapsedSeriesIndices.includes(n);
					if (r.enabled && !d) {
						u = h.group({
							class: "apexcharts-data-labels"
						});
						var f = "";
						void 0 !== a && (f = c(a, {
							seriesIndex: n,
							dataPointIndex: s,
							globals: o.globals
						})), l.plotDataLabelsText(e, i, f, n, s, u, r, !0)
					}
					return u
				}
			}, {
				key: "barEndingShape",
				value: function(t, e, i, a, n) {
					var s = new T.default(this.ctx);
					if (this.isHorizontal) {
						var r = null,
							o = "",
							l = e.x;
						if (void 0 !== i[a][n] || null !== i[a][n]) {
							var h = i[a][n] < 0,
								c = e.barHeight / 2 - e.strokeWidth;
							switch (h && (c = -e.barHeight / 2 - e.strokeWidth), t.config.chart.stacked || ("arrow" === this.barOptions
									.endingShape ? l = e.x - c : "rounded" === this.barOptions.endingShape && (l = e.x - c / 2)), this.barOptions
								.endingShape) {
								case "flat":
									r = s.line(l, e.barYPosition + e.barHeight - e.strokeWidth);
									break;
								case "arrow":
									r = s.line(l + c, e.barYPosition + (e.barHeight - e.strokeWidth) / 2) + s.line(l, e.barYPosition + e.barHeight -
										e.strokeWidth), o = s.line(e.zeroW, e.barYPosition + e.barHeight - e.strokeWidth);
									break;
								case "rounded":
									r = s.quadraticCurve(l + c, e.barYPosition + (e.barHeight - e.strokeWidth) / 2, l, e.barYPosition + e
										.barHeight - e.strokeWidth)
							}
						}
						return {
							path: r,
							ending_p_from: o,
							newX: l
						}
					}
					var u = null,
						d = "",
						f = e.y;
					if (void 0 !== i[a][n] || null !== i[a][n]) {
						var p = i[a][n] < 0,
							g = e.barWidth / 2 - e.strokeWidth;
						switch (p && (g = -e.barWidth / 2 - e.strokeWidth), t.config.chart.stacked || ("arrow" === this.barOptions
							.endingShape ? f += g : "rounded" === this.barOptions.endingShape && (f += g / 2)), this.barOptions.endingShape) {
							case "flat":
								u = s.line(e.barXPosition + e.barWidth - e.strokeWidth, f);
								break;
							case "arrow":
								u = s.line(e.barXPosition + (e.barWidth - e.strokeWidth) / 2, f - g) + s.line(e.barXPosition + e.barWidth -
									e.strokeWidth, f), d = s.line(e.barXPosition + e.barWidth - e.strokeWidth, e.zeroH);
								break;
							case "rounded":
								u = s.quadraticCurve(e.barXPosition + (e.barWidth - e.strokeWidth) / 2, f - g, e.barXPosition + e.barWidth -
									e.strokeWidth, f)
						}
					}
					return {
						path: u,
						ending_p_from: d,
						newY: f
					}
				}
			}, {
				key: "setSelectedBarFilter",
				value: function(t, e, i) {
					var a = this.w;
					if (void 0 !== a.globals.selectedDataPoints[e] && a.globals.selectedDataPoints[e].includes(i)) {
						t.node.setAttribute("selected", !0);
						var n = a.config.states.active.filter;
						if ("none" !== n) new s.default(this.ctx).applyFilter(t, n.type, n.value)
					}
				}
			}]), a
		}();
		e.default = o
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			f = n(i(74)),
			x = n(i(0)),
			p = n(i(6));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var s = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w
			}
			return a(e, [{
				key: "dataLabelsCorrection",
				value: function(t, e, i, a, n, s, r, o) {
					var l = this.w,
						h = !1,
						c = new x.default(this.ctx).getTextRects(i, r),
						u = c.width,
						d = c.height;
					void 0 === l.globals.dataLabelsRects[a] && (l.globals.dataLabelsRects[a] = []), l.globals.dataLabelsRects[
						a].push({
						x: t,
						y: e,
						width: u,
						height: d
					});
					var f = l.globals.dataLabelsRects[a].length - 2,
						p = void 0 !== l.globals.lastDrawnDataLabelsIndexes[a] ? l.globals.lastDrawnDataLabelsIndexes[a][l.globals
							.lastDrawnDataLabelsIndexes[a].length - 1
						] : 0;
					if (void 0 !== l.globals.dataLabelsRects[a][f]) {
						var g = l.globals.dataLabelsRects[a][p];
						(t > g.x + g.width + 2 || e > g.y + g.height + 2 || t + u < g.x) && (h = !0)
					}
					return (0 === n || s) && (h = !0), {
						x: t,
						y: e,
						drawnextLabel: h
					}
				}
			}, {
				key: "drawDataLabel",
				value: function(t, e, i) {
					3 < arguments.length && void 0 !== arguments[3] && arguments[3];
					var a = this.w,
						n = new x.default(this.ctx),
						s = a.config.dataLabels,
						r = 0,
						o = 0,
						l = i,
						h = null;
					if (!s.enabled || t.x instanceof Array != !0) return h;
					h = n.group({
						class: "apexcharts-data-labels"
					});
					for (var c = 0; c < t.x.length; c++)
						if (r = t.x[c] + s.offsetX, o = t.y[c] + s.offsetY - a.config.markers.size - 5, !isNaN(r)) {
							1 === i && 0 === c && (l = 0), 1 === i && 1 === c && (l = 1);
							var u = a.globals.series[e][l],
								d = "";
							if ("bubble" === a.config.chart.type) d = a.globals.seriesZ[e][l], o = t.y[c] + a.config.dataLabels.offsetY,
								o = new f.default(this.ctx).centerTextInBubble(o, e, l).y;
							else void 0 !== u && (d = a.config.dataLabels.formatter(u, {
								seriesIndex: e,
								dataPointIndex: l,
								globals: a.globals
							}));
							this.plotDataLabelsText(r, o, d, e, l, h, a.config.dataLabels)
						} return h
				}
			}, {
				key: "plotDataLabelsText",
				value: function(t, e, i, a, n, s, r) {
					var o = 7 < arguments.length && void 0 !== arguments[7] && arguments[7],
						l = this.w,
						h = new x.default(this.ctx),
						c = this.dataLabelsCorrection(t, e, i, a, n, o, parseInt(r.style.fontSize), l.config.markers.size <= l.config
							.markers.hover.size ? l.config.markers.hover.size : l.config.markers.size);
					if (l.globals.zoomed || (t = c.x, e = c.y), c.drawnextLabel) {
						var u = h.drawText({
							width: 100,
							height: parseInt(r.style.fontSize),
							x: t,
							y: e,
							foreColor: l.globals.dataLabels.style.colors[a],
							textAnchor: r.textAnchor,
							text: i,
							fontSize: r.style.fontSize,
							fontFamily: r.style.fontFamily
						});
						if (u.attr({
								class: "apexcharts-datalabel",
								cx: t,
								cy: e
							}), r.dropShadow.enabled) {
							var d = r.dropShadow;
							new p.default(this.ctx).dropShadow(u, d)
						}
						s.add(u), void 0 === l.globals.lastDrawnDataLabelsIndexes[a] && (l.globals.lastDrawnDataLabelsIndexes[a] = []),
							l.globals.lastDrawnDataLabelsIndexes[a].push(n)
					}
				}
			}]), e
		}();
		e.default = s
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			h = s(i(0)),
			c = s(i(30)),
			n = s(i(1)),
			u = s(i(49));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.lgRect = {}, this.yAxisWidth = 0, this.xAxisHeight = 0, this.isSparkline =
					this.w.config.chart.sparkline.enabled, this.isBarHorizontal = !("bar" !== this.w.config.chart.type || !this.w
						.config.plotOptions.bar.horizontal)
			}
			return a(e, [{
				key: "plotCoords",
				value: function() {
					var t = this.w,
						e = t.globals;
					t.config.series.length && void 0 !== t.config.series[0].type && (t.globals.comboCharts = !0);
					var i = this.getLegendsRect();
					e.axisCharts ? this.setGridCoordsForAxisCharts(i) : this.setGridCoordsForNonAxisCharts(i), this.titleSubtitleOffset()
				}
			}, {
				key: "conditionalChecksForAxisCoords",
				value: function(t, e) {
					var i = this.w;
					this.xAxisHeight = (t.height + e.height) * i.globals.lineHeightRatio + 15, this.xAxisWidth = t.width,
						this.xAxisHeight - e.height > i.config.xaxis.labels.maxHeight && (this.xAxisHeight = i.config.xaxis.labels
							.maxHeight), i.config.xaxis.labels.minHeight && this.xAxisHeight < i.config.xaxis.labels.minHeight && (
							this.xAxisHeight = i.config.xaxis.labels.minHeight), i.config.xaxis.floating && (this.xAxisHeight = 0),
						this.isBarHorizontal ? this.yAxisWidth = i.globals.yLabelsCoords[0].width + i.globals.yTitleCoords[0].width +
						15 : this.yAxisWidth = this.getTotalYAxisWidth(), this.yAxisWidth < i.config.yaxis[0].labels.minWidth &&
						(this.yAxisWidth = i.config.yaxis[0].labels.maxWidth), this.yAxisWidth > i.config.yaxis[0].labels.maxWidth &&
						(this.yAxisWidth = i.config.yaxis[0].labels.maxWidth)
				}
			}, {
				key: "setGridCoordsForAxisCharts",
				value: function(t) {
					var i = this.w,
						e = i.globals,
						a = this.getyAxisLabelsCoords(),
						n = this.getxAxisLabelsCoords(),
						s = this.getyAxisTitleCoords(),
						r = this.getxAxisTitleCoords();
					i.globals.yLabelsCoords = [], i.globals.yTitleCoords = [], i.config.yaxis.map(function(t, e) {
							i.globals.yLabelsCoords.push({
								width: a[e].width,
								index: e
							}), i.globals.yTitleCoords.push({
								width: s[e].width,
								index: e
							})
						}), this.conditionalChecksForAxisCoords(n, r), e.translateXAxisY = i.globals.rotateXLabels ? this.xAxisHeight /
						8 : -4, e.translateXAxisX = i.globals.rotateXLabels && i.globals.dataXY && i.config.xaxis.labels.rotate <=
						-45 ? -this.xAxisWidth / 4 : 0, this.isBarHorizontal && (e.rotateXLabels = !1, e.translateXAxisY =
							parseInt(i.config.xaxis.labels.style.fontSize) / 1.5 * -1), e.translateXAxisY = e.translateXAxisY + i.config
						.xaxis.labels.offsetY, e.translateXAxisX = e.translateXAxisX + i.config.xaxis.labels.offsetX;
					var o = this.yAxisWidth,
						l = this.xAxisHeight;
					e.xAxisLabelsHeight = this.xAxisHeight, e.xAxisHeight = this.xAxisHeight;
					var h = 10;
					switch (i.config.grid.show || (o = 0, l = 35), this.isSparkline && (t = {
						height: 0,
						width: 0
					}, h = o = l = 0), i.config.legend.position) {
						case "bottom":
							e.translateY = h, e.translateX = o, e.gridHeight = e.svgHeight - t.height - l - (this.isSparkline ? 0 :
								i.globals.rotateXLabels ? 10 : 15), e.gridWidth = e.svgWidth - o;
							break;
						case "top":
							e.translateY = t.height + h, e.translateX = o, e.gridHeight = e.svgHeight - t.height - l - (this.isSparkline ?
								0 : i.globals.rotateXLabels ? 10 : 15), e.gridWidth = e.svgWidth - o;
							break;
						case "left":
							e.translateY = h, e.translateX = t.width + o, e.gridHeight = e.svgHeight - l - 12, e.gridWidth = e.svgWidth -
								t.width - o;
							break;
						case "right":
							e.translateY = h, e.translateX = o, e.gridHeight = e.svgHeight - l - 12, e.gridWidth = e.svgWidth - t.width -
								o;
							break;
						default:
							throw new Error("Legend position not supported")
					}
					e.gridHeight = e.gridHeight - i.config.grid.padding.top - i.config.grid.padding.bottom, e.gridWidth = e.gridWidth -
						i.config.grid.padding.left - i.config.grid.padding.right, e.translateX = e.translateX + i.config.grid.padding
						.left, e.translateY = e.translateY + i.config.grid.padding.top, this.isBarHorizontal || this.setGridXPosForDualYAxis(
							s, a), new u.default(this.ctx).setYAxisXPosition(a, s)
				}
			}, {
				key: "setGridCoordsForNonAxisCharts",
				value: function(t) {
					var e = this.w,
						i = e.globals,
						a = 0;
					e.config.legend.show && !e.config.legend.floating && (a = 4 * e.config.legend.markers.size + e.config.legend
						.itemMargin.horizontal);
					var n = 10;
					switch ("pie" === e.config.chart.type || "donut" === e.config.chart.type ? n += e.config.plotOptions.pie.offsetY :
						"radialBar" === e.config.chart.type && (n += e.config.plotOptions.radialBar.offsetY), e.config.legend.position
					) {
						case "bottom":
							i.gridHeight = i.svgHeight - t.height - 35, i.gridWidth = i.gridHeight, i.translateY = n - 20, i.translateX =
								(i.svgWidth - i.gridWidth) / 2;
							break;
						case "top":
							i.gridHeight = i.svgHeight - t.height - 35, i.gridWidth = i.gridHeight, i.translateY = t.height + n, i.translateX =
								(i.svgWidth - i.gridWidth) / 2;
							break;
						case "left":
							i.gridWidth = i.svgWidth - t.width - a, i.gridHeight = i.gridWidth, i.translateY = n, i.translateX = t.width +
								a;
							break;
						case "right":
							i.gridWidth = i.svgWidth - t.width - a, i.gridHeight = i.gridWidth, i.translateY = n, i.translateX = 5;
							break;
						default:
							throw new Error("Legend position not supported")
					}
				}
			}, {
				key: "setGridXPosForDualYAxis",
				value: function(i, a) {
					var n = this.w;
					n.config.yaxis.map(function(t, e) {
						n.globals.ignoreYAxisIndexes.includes(e) || n.config.yaxis[e].floating || t.opposite && (n.globals.translateX =
							n.globals.translateX - (a[e].width + i[e].width) - parseInt(n.config.yaxis[e].labels.style.fontSize) /
							1.2 - 12)
					})
				}
			}, {
				key: "titleSubtitleOffset",
				value: function() {
					var t = this.w,
						e = t.globals,
						i = this.isSparkline ? 0 : 10;
					void 0 !== t.config.title.text ? i += t.config.title.margin : i += this.isSparkline ? 0 : 5, void 0 !==
						t.config.subtitle.text ? i += t.config.subtitle.margin : i += this.isSparkline ? 0 : 5, t.config.legend.show &&
						"bottom" === t.config.legend.position && !t.config.legend.floating && 1 < t.config.series.length && (i +=
							10);
					var a = this.getTitleSubtitleCoords("title"),
						n = this.getTitleSubtitleCoords("subtitle");
					e.gridHeight = e.gridHeight - a.height - n.height - i, e.translateY = e.translateY + a.height + n.height +
						i
				}
			}, {
				key: "getTotalYAxisWidth",
				value: function() {
					var a = this.w,
						n = 0;
					return a.globals.yLabelsCoords.map(function(t, e) {
						var i = a.config.yaxis[e].floating;
						0 < t.width && !i ? (n = n + t.width + 10, a.globals.ignoreYAxisIndexes.includes(e) && (n -= t.width)) :
							n += i ? 0 : 5
					}), a.globals.yTitleCoords.map(function(t, e) {
						var i = a.config.yaxis[e].floating;
						0 < t.width && !i ? (n = n + t.width + parseInt(a.config.yaxis[e].title.style.fontSize), a.globals.ignoreYAxisIndexes
							.includes(e) && (n -= t.width)) : n += i ? 0 : 5
					}), n
				}
			}, {
				key: "getxAxisTimeScaleLabelsCoords",
				value: function() {
					var t, e = this.w,
						i = e.globals.timelineLabels.slice().map(function(t) {
							return t.value
						}),
						a = i.reduce(function(t, e) {
							return void 0 === t ? (console.error(
									"You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length >
								e.length ? t : e
						}, 0);
					return 1.05 * (t = new h.default(this.ctx).getTextRects(a, e.config.xaxis.labels.style.fontSize)).width *
						i.length > e.globals.gridWidth && 0 !== e.config.xaxis.labels.rotate && (e.globals.overlappingXLabels = !
							0), t
				}
			}, {
				key: "getxAxisLabelsCoords",
				value: function() {
					var t = this.w,
						e = t.globals.labels.slice(),
						i = {
							width: 0,
							height: 0
						};
					if (0 < t.globals.timelineLabels.length) {
						var a = this.getxAxisTimeScaleLabelsCoords();
						i = {
							width: a.width,
							height: a.height
						}
					} else {
						var n = "left" !== t.config.legend.position || "right" !== t.config.legend.position || t.config.legend.floating ?
							0 : this.lgRect.width,
							s = e.reduce(function(t, e) {
								return t.length > e.length ? t : e
							}, 0),
							r = t.globals.xLabelFormatter;
						s = new c.default(this.ctx).xLabelFormat(r, s);
						var o = new h.default(this.ctx),
							l = o.getTextRects(s, t.config.xaxis.labels.style.fontSize);
						(i = {
							width: l.width,
							height: l.height
						}).width * e.length > t.globals.svgWidth - n - this.yAxisWidth && 0 !== t.config.xaxis.labels.rotate ?
							this.isBarHorizontal || (t.globals.rotateXLabels = !0, l = o.getTextRects(s, t.config.xaxis.labels.style
								.fontSize, t.config.xaxis.labels.style.fontFamily, "rotate(" + t.config.xaxis.labels.rotate + " 0 0)",
								!1), i.height = l.height / 1.66) : t.globals.rotateXLabels = !1
					}
					return t.config.xaxis.labels.show || (i = {
						width: 0,
						height: 0
					}), {
						width: i.width,
						height: i.height
					}
				}
			}, {
				key: "getyAxisLabelsCoords",
				value: function() {
					var s = this,
						r = this.w,
						o = [],
						l = 10;
					return r.config.yaxis.map(function(t, e) {
						if (t.labels.show && r.globals.yAxisScale[e].result.length) {
							var i = r.globals.yLabelFormatters[e],
								a = i(r.globals.yAxisScale[e].niceMax);
							if (s.isBarHorizontal) l = 0, a = i(a = r.globals.labels.slice().reduce(function(t, e) {
								return t.length > e.length ? t : e
							}, 0));
							var n = new h.default(s.ctx).getTextRects(a, t.labels.style.fontSize);
							o.push({
								width: n.width + l,
								height: n.height
							})
						} else o.push({
							width: 0,
							height: 0
						})
					}), o
				}
			}, {
				key: "getxAxisTitleCoords",
				value: function() {
					var t = this.w,
						e = 0,
						i = 0;
					if (void 0 !== t.config.xaxis.title.text) {
						var a = new h.default(this.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
						e = a.width, i = a.height
					}
					return {
						width: e,
						height: i
					}
				}
			}, {
				key: "getyAxisTitleCoords",
				value: function() {
					var a = this,
						t = this.w,
						n = [];
					return t.config.yaxis.map(function(t, e) {
						if (void 0 !== t.title.text) {
							var i = new h.default(a.ctx).getTextRects(t.title.text, t.title.style.fontSize, t.title.style.fontFamily,
								"rotate(-90 0 0)", !1);
							n.push({
								width: i.width,
								height: i.height
							})
						} else n.push({
							width: 0,
							height: 0
						})
					}), n
				}
			}, {
				key: "getTitleSubtitleCoords",
				value: function(t) {
					var e = this.w,
						i = 0,
						a = 0,
						n = "title" === t ? e.config.title.floating : e.config.subtitle.floating,
						s = e.globals.dom.baseEl.querySelector(".apexcharts-" + t + "-text");
					if (null !== s && !n) {
						var r = s.getBoundingClientRect();
						i = r.width, a = e.globals.axisCharts ? r.height + 5 : r.height
					}
					return {
						width: i,
						height: a
					}
				}
			}, {
				key: "getLegendsRect",
				value: function() {
					var t = this.w,
						e = t.globals.dom.baseEl.querySelector(".apexcharts-legend"),
						i = Object.assign({}, n.default.getBoundingClientRect(e));
					return i.height = i.height + t.config.legend.containerMargin.top + t.config.legend.containerMargin.bottom,
						i.width = i.width + t.config.legend.containerMargin.left + t.config.legend.containerMargin.right, null !==
						e && !t.config.legend.floating && t.config.legend.show ? this.lgRect = i : this.lgRect = {
							x: 0,
							y: 0,
							height: 0,
							width: 0
						}, this.lgRect
				}
			}]), e
		}();
		t.exports = r
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = n(i(6)),
			d = n(i(0));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function() {
			function i(t, e) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, i), this.ctx = t, this.w = t.w
			}
			return a(i, [{
				key: "plotChartMarkers",
				value: function(t, n, s) {
					var r = this,
						o = this.w,
						l = t,
						h = null,
						c = new d.default(this.ctx),
						u = void 0;
					if (0 < o.config.markers.size && (h = c.group({
							class: "apexcharts-series-markers"
						})), l.x instanceof Array)
						for (var e = function(t) {
								var i = s,
									e = "apexcharts-marker";
								if ("line" !== o.config.chart.type && "area" !== o.config.chart.type || o.globals.comboCharts || o.config
									.tooltip.intersect || (e += " no-pointer-events"), 0 < o.config.markers.size) {
									null !== l.y[t] ? e += " w" + (Math.random() + 1).toString(36).substring(4) : e =
										"apexcharts-nullpoint";
									var a = r.getMarkerConfig(e, n);
									o.config.markers.discrete.map(function(t, e) {
										t.i === n && t.j === i && (a.pointStrokeColor = t.strokeColor, a.pointFillColor = t.fillColor, a.size =
											t.size)
									}), u = c.drawMarker(l.x[t], l.y[t], a), 1 === s && 0 === t && (i = 0), 1 === s && 1 === t && (i =
										1), u.attr("rel", i), u.attr("j", i), u.attr("index", n), r.setSelectedPointFilter(u, n, i), r.addEvents(
										u), h && h.add(u)
								} else void 0 === o.globals.pointsArray[n] && (o.globals.pointsArray[n] = []), o.globals.pointsArray[
									n].push([l.x[t], l.y[t]])
							}, i = 0; i < l.x.length; i++) e(i);
					return h
				}
			}, {
				key: "getMarkerConfig",
				value: function(t, e) {
					var i = this.w,
						a = this.getMarkerStyle(e),
						n = i.config.markers.size;
					return {
						pSize: n instanceof Array ? n[e] : n,
						pRadius: i.config.markers.radius,
						pWidth: i.config.markers.strokeWidth,
						pointStrokeColor: a.pointStrokeColor,
						pointFillColor: a.pointFillColor,
						shape: i.config.markers.shape instanceof Array ? i.config.markers.shape[e] : i.config.markers.shape,
						class: t,
						pointStrokeOpacity: i.config.markers.strokeOpacity,
						pointFillOpacity: i.config.markers.fillOpacity,
						seriesIndex: e
					}
				}
			}, {
				key: "addEvents",
				value: function(t) {
					var e = new d.default(this.ctx);
					t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener(
						"mouseleave", e.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", e.pathMouseDown
						.bind(this.ctx, t)), t.node.addEventListener("touchstart", e.pathMouseDown.bind(this.ctx, t))
				}
			}, {
				key: "setSelectedPointFilter",
				value: function(t, e, i) {
					var a = this.w;
					if (void 0 !== a.globals.selectedDataPoints[e] && a.globals.selectedDataPoints[e].includes(i)) {
						t.node.setAttribute("selected", !0);
						var n = a.config.states.active.filter;
						if ("none" !== n) new s.default(this.ctx).applyFilter(t, n.type, n.value)
					}
				}
			}, {
				key: "getMarkerStyle",
				value: function(t) {
					var e = this.w,
						i = e.globals.markers.colors;
					return {
						pointStrokeColor: e.config.markers.strokeColor,
						pointFillColor: i instanceof Array ? i[t] : i
					}
				}
			}]), i
		}();
		t.exports = r
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			w = n(i(0)),
			x = n(i(49)),
			k = n(i(30));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var s = function() {
			function i(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, i), this.ctx = t, this.w = t.w;
				var e = this.w;
				this.xaxisLabels = e.globals.labels.slice(), 0 < e.globals.timelineLabels.length && (this.xaxisLabels = e.globals
						.timelineLabels.slice()), "top" === e.config.xaxis.position ? this.offY = 0 : this.offY = e.globals.gridHeight +
					1, this.offY = this.offY + e.config.xaxis.axisBorder.offsetY, this.xaxisFontSize = e.config.xaxis.labels.style
					.fontSize, this.xaxisFontFamily = e.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = e.config.xaxis
					.labels.style.colors, this.xaxisBorderWidth = e.config.xaxis.axisBorder.width, this.xaxisBorderWidth.includes(
						"%") ? this.xaxisBorderWidth = e.globals.gridWidth * parseInt(this.xaxisBorderWidth) / 100 : this.xaxisBorderWidth =
					parseInt(this.xaxisBorderWidth), this.xaxisBorderHeight = e.config.xaxis.axisBorder.height, this.yaxis = e.config
					.yaxis[0]
			}
			return a(i, [{
				key: "drawXaxis",
				value: function() {
					var t = this.w,
						e = new w.default(this.ctx),
						i = e.group({
							class: "apexcharts-xaxis"
						}),
						a = e.group({
							class: "apexcharts-xaxis-texts-g",
							transform: "translate(" + t.globals.translateXAxisX + ", " + t.globals.translateXAxisY + ")"
						});
					i.add(a);
					for (var n = void 0, s = t.globals.padHorizontal, r = [], o = 0; o < this.xaxisLabels.length; o++) r.push(
						this.xaxisLabels[o]);
					s = "line" === t.config.chart.type || "area" === t.config.chart.type ? t.globals.dataXY ? s + (n = t.globals
							.gridWidth / (r.length - 1)) / 2 + t.config.xaxis.labels.offsetX : s + (n = t.globals.noLabelsProvided ?
							t.globals.gridWidth / this.xaxisLabels.length : t.globals.gridWidth / r.length) + t.config.xaxis.labels
						.offsetX : t.globals.dataXY ? "bar" !== t.config.chart.type ? s + (n = t.globals.gridWidth / (this.xaxisLabels
							.length - 1)) / 2 + t.config.xaxis.labels.offsetX : s + (n = t.globals.gridWidth / t.globals.labels.length) /
						2 + t.config.xaxis.labels.offsetX : t.globals.noLabelsProvided && "bar" !== t.config.chart.type ? s + (n =
							t.globals.gridWidth / this.xaxisLabels.length) / 2 + t.config.xaxis.labels.offsetX : s + (n = t.globals
							.gridWidth / r.length) + t.config.xaxis.labels.offsetX;
					var l = t.globals.xLabelFormatter,
						h = t.config.xaxis.labels.formatter,
						c = r.length;
					if (t.config.xaxis.labels.show)
						for (var u = 0; u <= c - 1; u++) {
							var d = void 0 === r[u] ? "" : r[u];
							d = new k.default(this.ctx).xLabelFormat(l, d), void 0 !== h && (d = h(d, this.xaxisLabels[u], u));
							var f = s - n / 2 + t.config.xaxis.labels.offsetX;
							0 < t.globals.timelineLabels.length && (f = t.globals.timelineLabels[u].position, d = t.globals.timelineLabels[
								u].value), (0 <= (d = d.toString()).toLowerCase().indexOf("nan") || 0 <= d.indexOf("undefined") || 0 <=
								d.toLowerCase().indexOf("invalid") || 0 <= d.toLowerCase().indexOf("infinity")) && (d = "");
							var p = 28;
							t.globals.rotateXLabels && (p = 22);
							var g = e.drawText({
								x: f,
								y: this.offY + t.config.xaxis.labels.offsetY + p,
								text: "",
								textAnchor: "middle",
								fontSize: this.xaxisFontSize,
								fontFamily: this.xaxisFontFamily,
								foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[u] : this.xaxisForeColors,
								cssClass: "apexcharts-xaxis-label " + t.config.xaxis.labels.style.cssClass
							});
							a.add(g), g.tspan(d).node.style.fontFamily = this.xaxisFontFamily;
							var x = document.createElementNS(t.globals.svgNS, "title");
							x.textContent = d, g.node.appendChild(x), s += n
						}
					if (void 0 !== t.config.xaxis.title.text) {
						var v = e.group({
								class: "apexcharts-xaxis-title"
							}),
							b = e.drawText({
								x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX,
								y: this.offY - parseInt(this.xaxisFontSize) + t.globals.xAxisLabelsHeight + t.config.xaxis.title.offsetY,
								text: t.config.xaxis.title.text,
								textAnchor: "middle",
								fontSize: t.config.xaxis.title.style.fontSize,
								fontFamily: t.config.xaxis.title.style.fontFamily,
								foreColor: t.config.xaxis.title.style.color,
								cssClass: "apexcharts-xaxis-title-text " + t.config.xaxis.title.style.cssClass
							});
						v.add(b), i.add(v)
					}
					if (t.config.xaxis.axisBorder.show) {
						var m = 0;
						"bar" === t.config.chart.type && t.globals.dataXY && (m -= 15);
						var y = e.drawLine(t.globals.padHorizontal + m + t.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth,
							this.offY, t.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
						i.add(y)
					}
					return i
				}
			}, {
				key: "drawXaxisInversed",
				value: function(t) {
					var e = this.w,
						i = new w.default(this.ctx),
						a = i.group({
							class: "apexcharts-yaxis apexcharts-xaxis-inversed",
							rel: t
						}),
						n = i.group({
							class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g"
						});
					a.add(n);
					for (var s, r = void 0, o = [], l = 0; l < this.xaxisLabels.length; l++) o.push(this.xaxisLabels[l]);
					r = -(s = e.globals.gridHeight / o.length) / 2.2;
					var h = e.globals.yLabelFormatters[0];
					if (e.config.yaxis[0].labels.show)
						for (var c = 0; c <= o.length - 1; c++) {
							var u = void 0 === o[c] ? "" : o[c];
							u = h(u);
							var d = i.drawText({
								x: e.config.yaxis[0].labels.offsetX - 15,
								y: r + s + e.config.yaxis[0].labels.offsetY,
								text: u,
								textAnchor: "end",
								foreColor: e.config.yaxis[0].labels.style.colors[c],
								fontSize: e.config.yaxis[0].labels.style.fontSize,
								fontFamily: e.config.yaxis[0].labels.style.fontFamily,
								cssClass: "apexcharts-yaxis-label " + e.config.yaxis[0].labels.style.cssClass
							});
							n.add(d), r += s
						}
					if (void 0 !== e.config.yaxis[0].title.text) {
						var f = i.group({
								class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed"
							}),
							p = i.drawText({
								x: 0,
								y: e.globals.gridHeight / 2,
								text: e.config.yaxis[0].title.text,
								textAnchor: "middle",
								foreColor: e.config.yaxis[0].title.style.color,
								fontSize: e.config.yaxis[0].title.style.fontSize,
								fontFamily: e.config.yaxis[0].title.style.fontFamily,
								cssClass: "apexcharts-yaxis-title-text " + e.config.yaxis[0].title.style.cssClass
							});
						f.add(p), a.add(f)
					}
					if (e.config.xaxis.axisBorder.show) {
						var g = i.drawLine(e.globals.padHorizontal + e.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth,
							this.offY, this.yaxis.axisBorder.color, 0, this.xaxisBorderHeight);
						a.add(g), new x.default(this.ctx).drawAxisTicks(0, o.length, e.config.yaxis[0].axisBorder, e.config.yaxis[
							0].axisTicks, 0, s, a)
					}
					return a
				}
			}, {
				key: "drawXaxisTicks",
				value: function(t, e) {
					var i = this.w,
						a = t;
					if (!(t < 0 || t > i.globals.gridWidth)) {
						var n = this.offY + i.config.xaxis.axisTicks.offsetY,
							s = n + i.config.xaxis.axisTicks.height;
						if (i.config.xaxis.axisTicks.show) {
							var r = new w.default(this.ctx).drawLine(t + i.config.xaxis.axisTicks.offsetX, n, a + i.config.xaxis.axisTicks
								.offsetX, s, i.config.xaxis.axisTicks.color);
							e.add(r), r.node.classList.add("apexcharts-xaxis-tick")
						}
					}
				}
			}, {
				key: "getXAxisTicksPositions",
				value: function() {
					var t = this.w,
						e = [],
						i = this.xaxisLabels.length,
						a = t.globals.padHorizontal;
					if (0 < t.globals.timelineLabels.length)
						for (var n = 0; n < i; n++) a = this.xaxisLabels[n].position, e.push(a);
					else
						for (var s = i, r = 0; r < s; r++) {
							var o = s;
							t.globals.dataXY && "bar" !== t.config.chart.type && (o -= 1), a += t.globals.gridWidth / o, e.push(a)
						}
					return e
				}
			}, {
				key: "xAxisLabelCorrections",
				value: function() {
					var t = this.w,
						e = new w.default(this.ctx),
						i = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),
						a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),
						n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),
						s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text");
					if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways)
						for (var r = 0; r < a.length; r++) {
							var o = e.rotateAroundCenter(a[r]);
							o.y = o.y - 1, o.x = o.x + 1, a[r].setAttribute("transform", "rotate(" + t.config.xaxis.labels.rotate +
								" " + o.x + " " + o.y + ")"), a[r].setAttribute("text-anchor", "end");
							i.setAttribute("transform", "translate(0, -10)");
							var l = a[r].childNodes;
							t.config.xaxis.labels.trim && e.placeTextWithEllipsis(l[0], l[0].textContent, t.config.xaxis.labels.maxHeight -
								40)
						} else
							for (var h = t.globals.gridWidth / t.globals.labels.length, c = 0; c < a.length; c++) {
								var u = a[c].childNodes;
								t.config.xaxis.labels.trim && "bar" !== t.config.chart.type && t.config.plotOptions.bar.horizontal &&
									e.placeTextWithEllipsis(u[0], u[0].textContent, h)
							}
					if (0 < n.length) {
						var d = n[n.length - 1].getBBox(),
							f = n[0].getBBox();
						d.x < -20 && n[n.length - 1].parentNode.removeChild(n[n.length - 1]), f.x + f.width > t.globals.gridWidth &&
							n[0].parentNode.removeChild(n[0]);
						for (var p = 0; p < s.length; p++) e.placeTextWithEllipsis(s[p], s[p].textContent, t.config.yaxis[0].labels
							.maxWidth - 2 * parseInt(t.config.yaxis[0].title.style.fontSize) - 20)
					}
				}
			}]), i
		}();
		t.exports = s
	}, function(t, e, i) {
		"use strict";
		var a, n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = i(0),
			k = (a = s) && a.__esModule ? a : {
				default: a
			};
		var r = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.xaxisFontSize = this.w.config.xaxis.labels.style.fontSize, this.axisFontFamily =
					this.w.config.xaxis.labels.style.fontFamily, this.isBarHorizontal = !("bar" !== this.w.config.chart.type || !
						this.w.config.plotOptions.bar.horizontal), this.xaxisForeColors = this.w.config.xaxis.labels.style.colors,
					this.xAxisoffX = 0, "bottom" === this.w.config.xaxis.position && (this.xAxisoffX = this.w.globals.gridHeight)
			}
			return n(e, [{
				key: "drawYaxis",
				value: function(t, e) {
					var i = this.w,
						a = new k.default(this.ctx),
						n = i.config.yaxis[e].labels.style.fontSize,
						s = i.config.yaxis[e].labels.style.fontFamily,
						r = a.group({
							class: "apexcharts-yaxis",
							rel: e,
							transform: "translate(" + i.globals.translateYAxisX[e] + ", 0)"
						}),
						o = a.group({
							class: "apexcharts-yaxis-texts-g"
						});
					r.add(o);
					var l = i.globals.yAxisScale[e].result.length - 1,
						h = i.globals.gridHeight / l + .1,
						c = i.globals.translateY,
						u = i.globals.yLabelFormatters[e];
					if (i.config.yaxis[e].labels.show)
						for (var d = l; 0 <= d; d--) {
							var f = i.globals.yAxisScale[e].result[d];
							f = u(f);
							var p = 20;
							i.config.yaxis[e].opposite && (p *= -1), 0 === i.config.yaxis.length && (p = 20);
							var g = a.drawText({
								x: p,
								y: c + l / 10 + i.config.yaxis[e].labels.offsetY + 1,
								text: f,
								textAnchor: i.config.yaxis[e].opposite ? "start" : "end",
								fontSize: n,
								fontFamily: s,
								foreColor: i.config.yaxis[e].labels.style.color,
								cssClass: "apexcharts-yaxis-label " + i.config.yaxis[e].labels.style.cssClass
							});
							o.add(g), c += h
						}
					if (void 0 !== i.config.yaxis[e].title.text) {
						var x = a.group({
								class: "apexcharts-yaxis-title"
							}),
							v = 0;
						i.config.yaxis[e].opposite && (v = i.globals.translateYAxisX[e]);
						var b = a.drawText({
							x: v,
							y: i.globals.gridHeight / 2 + i.globals.translateY,
							text: i.config.yaxis[e].title.text,
							textAnchor: "end",
							foreColor: i.config.yaxis[e].labels.style.color,
							fontSize: i.config.yaxis[e].title.style.fontSize,
							fontFamily: i.config.yaxis[e].title.style.fontFamily,
							cssClass: "apexcharts-yaxis-title-text " + i.config.yaxis[e].title.style.cssClass
						});
						x.add(b), r.add(x)
					}
					var m = i.config.yaxis[e].axisBorder;
					if (m.show) {
						var y = 31 + m.offsetX;
						i.config.yaxis[e].opposite && (y = -31 - m.offsetX);
						var w = a.drawLine(y, i.globals.translateY + m.offsetY - 2, y, i.globals.gridHeight + i.globals.translateY +
							m.offsetY + 2, m.color);
						r.add(w), this.drawAxisTicks(y, l, m, i.config.yaxis[e].axisTicks, e, h, r)
					}
					return r
				}
			}, {
				key: "drawYaxisInversed",
				value: function(t) {
					var e = this.w,
						i = new k.default(this.ctx),
						a = i.group({
							class: "apexcharts-xaxis apexcharts-yaxis-inversed"
						}),
						n = i.group({
							class: "apexcharts-xaxis-texts-g",
							transform: "translate(" + e.globals.translateXAxisX + ", " + e.globals.translateXAxisY + ")"
						});
					a.add(n);
					var s = e.globals.yAxisScale[t].result.length - 1,
						r = e.globals.gridWidth / s + .1,
						o = r + e.config.xaxis.labels.offsetX,
						l = e.globals.xLabelFormatter;
					if (e.config.xaxis.labels.show)
						for (var h = s; 0 <= h; h--) {
							var c = e.globals.yAxisScale[t].result[h];
							c = l(c);
							var u = i.drawText({
								x: e.globals.gridWidth + e.globals.padHorizontal - (o - r + e.config.xaxis.labels.offsetX),
								y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30,
								text: "",
								textAnchor: "middle",
								foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors,
								fontSize: this.xaxisFontSize,
								fontFamily: this.xaxisFontFamily,
								cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass
							});
							n.add(u), u.tspan(c);
							var d = document.createElementNS(e.globals.svgNS, "title");
							d.textContent = c, u.node.appendChild(d), o += r
						}
					if (void 0 !== e.config.xaxis.title.text) {
						var f = i.group({
								class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"
							}),
							p = i.drawText({
								x: e.globals.gridWidth / 2,
								y: this.xAxisoffX + parseInt(this.xaxisFontSize) + parseInt(e.config.xaxis.title.style.fontSize) + 20,
								text: e.config.xaxis.title.text,
								textAnchor: "middle",
								fontSize: e.config.xaxis.title.style.fontSize,
								fontFamily: e.config.xaxis.title.style.fontFamily,
								cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass
							});
						f.add(p), a.add(f)
					}
					var g = e.config.yaxis[t].axisBorder;
					if (g.show) {
						var x = i.drawLine(e.globals.padHorizontal + g.offsetX, 1 + g.offsetY, e.globals.padHorizontal + g.offsetX,
							e.globals.gridHeight + g.offsetY, g.color);
						a.add(x)
					}
					return a
				}
			}, {
				key: "drawAxisTicks",
				value: function(t, e, i, a, n, s, r) {
					var o = this.w,
						l = new k.default(this.ctx),
						h = o.globals.translateY;
					if (a.show) {
						!0 === o.config.yaxis[n].opposite && (t += a.width);
						for (var c = e; 0 <= c; c--) {
							var u = h + e / 10 + o.config.yaxis[n].labels.offsetY - 1;
							this.isBarHorizontal && (u = s * c);
							var d = l.drawLine(t + i.offsetX - a.width + a.offsetX, u + a.offsetY, t + i.offsetX + a.offsetX, u + a
								.offsetY, i.color);
							r.add(d), h += s
						}
					}
				}
			}, {
				key: "yAxisTitleRotate",
				value: function(t, e) {
					var i = this.w,
						a = new k.default(this.ctx),
						n = {
							width: 0,
							height: 0
						},
						s = {
							width: 0,
							height: 0
						},
						r = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='" + t + "'] .apexcharts-yaxis-texts-g");
					null !== r && (n = r.getBoundingClientRect());
					var o = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='" + t +
						"'] .apexcharts-yaxis-title text");
					if (null !== o && (s = o.getBoundingClientRect()), null !== o) {
						var l = this.xPaddingForYAxisTitle(t, n, s, e);
						o.setAttribute("x", l.xPos - (e ? 10 : 0))
					}
					if (null !== o) {
						var h = a.rotateAroundCenter(o);
						e ? o.setAttribute("transform", "rotate(90 " + h.x + " " + h.y + ")") : o.setAttribute("transform",
							"rotate(-90 " + h.x + " " + h.y + ")")
					}
				}
			}, {
				key: "xPaddingForYAxisTitle",
				value: function(t, e, i, a) {
					var n = this.w,
						s = 0,
						r = 0,
						o = 20;
					return a ? (r = e.width + n.config.yaxis[t].title.offsetX + o + i.width / 2 - 15, 0 === (s += 1) && (r -=
						15)) : (r = -1 * e.width + n.config.yaxis[t].title.offsetX + o + i.width / 2 - 15, this.isBarHorizontal &&
						(o = 25, r = -1 * e.width - n.config.yaxis[t].title.offsetX - o)), {
						xPos: r,
						padd: o
					}
				}
			}, {
				key: "setYAxisXPosition",
				value: function(s, r) {
					var o = this,
						l = this.w,
						h = 0,
						c = 0,
						u = 0,
						d = 1;
					this.multipleYs = !1, 1 < l.config.yaxis.length && (this.multipleYs = !0), l.config.yaxis.map(function(t,
						e) {
						var i = s[e].width + r[e].width,
							a = o.xPaddingForYAxisTitle(e, {
								width: s[e].width
							}, {
								width: r[e].width
							}, t.opposite);
						if (1 < l.config.yaxis.length ? i += Math.abs(a.padd) : void 0 === t.title.text ? i = i + Math.abs(a.padd) +
							15 : i += Math.abs(a.padd), t.opposite) c = l.globals.gridWidth + l.globals.translateX + d + 30 + (l.globals
							.series.length - l.globals.collapsedSeries.length), l.globals.collapsedSeries.forEach(function(t) {
							t.index === e && (d -= i)
						}), d += i, l.globals.translateYAxisX[e] = c - t.labels.offsetX;
						else {
							var n = i + 5;
							l.globals.ignoreYAxisIndexes.includes(e) && (n = 0), h = o.multipleYs ? l.globals.translateX - i - u +
								20 + parseInt(l.config.yaxis[e].labels.style.fontSize) / 1.2 + t.labels.offsetX : l.globals.translateX -
								i + s[e].width + t.labels.offsetX, u += n, l.globals.translateYAxisX[e] = h
						}
					})
				}
			}]), e
		}();
		t.exports = r
	}, function(t, e, i) {
		"use strict";
		var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
					typeof t
			},
			a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			l = n(i(141)),
			h = n(i(1)),
			c = n(i(51));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var s = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.opts = t
			}
			return a(e, [{
				key: "init",
				value: function() {
					var t = this.opts,
						e = new c.default,
						i = new l.default(t);
					this.chartType = t.chart.type, "histogram" === this.chartType && (t.chart.type = "bar", t = h.default.extend({
						plotOptions: {
							bar: {
								columnWidth: "99.99%"
							}
						}
					}, t)), t.series = this.checkEmptySeries(t.series), t = this.extendYAxis(t), t = this.extendAnnotations(
						t);
					var a = e.init(),
						n = {};
					if (t && "object" === (void 0 === t ? "undefined" : o(t))) {
						var s = {};
						switch (this.chartType) {
							case "line":
								s = i.line();
								break;
							case "area":
								s = i.area();
								break;
							case "bar":
								s = i.bar();
								break;
							case "candlestick":
								s = i.candlestick();
								break;
							case "histogram":
								s = i.bar();
								break;
							case "bubble":
								s = i.bubble();
								break;
							case "scatter":
								s = i.scatter();
								break;
							case "heatmap":
								s = i.heatmap();
								break;
							case "pie":
								s = i.pie();
								break;
							case "donut":
								s = i.donut();
								break;
							case "radialBar":
								s = i.radialBar();
								break;
							default:
								s = i.line()
						}
						t.chart.brush && t.chart.brush.enabled && (s = i.brush(s)), t.chart.stacked && "100%" === t.chart.stackType &&
							i.stacked100(), (t.chart.sparkline && t.chart.sparkline.enabled || window.Apex.chart && window.Apex.chart
								.sparkline && window.Apex.chart.sparkline.enabled) && (s = i.sparkline(s)), n = h.default.extend(a, s)
					}
					var r = h.default.extend(n, window.Apex);
					return a = h.default.extend(r, t), a = this.handleUserInputErrors(a)
				}
			}, {
				key: "extendYAxis",
				value: function(t) {
					var e = new c.default;
					return void 0 === t.yaxis && (t.yaxis = {}), t.yaxis.constructor !== Array && window.Apex.yaxis && window
						.Apex.yaxis.constructor !== Array && (t.yaxis = h.default.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor !==
						Array ? t.yaxis = [h.default.extend(e.yAxis, t.yaxis)] : t.yaxis = h.default.extendArray(t.yaxis, e.yAxis),
						t
				}
			}, {
				key: "extendAnnotations",
				value: function(t) {
					return void 0 === t.annotations && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [],
							t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), t =
						this.extendPointAnnotations(t)
				}
			}, {
				key: "extendYAxisAnnotations",
				value: function(t) {
					var e = new c.default;
					return t.annotations.yaxis = h.default.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis :
						[], e.yAxisAnnotation), t
				}
			}, {
				key: "extendXAxisAnnotations",
				value: function(t) {
					var e = new c.default;
					return t.annotations.xaxis = h.default.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis :
						[], e.xAxisAnnotation), t
				}
			}, {
				key: "extendPointAnnotations",
				value: function(t) {
					var e = new c.default;
					return t.annotations.points = h.default.extendArray(void 0 !== t.annotations.points ? t.annotations.points :
						[], e.pointAnnotation), t
				}
			}, {
				key: "checkEmptySeries",
				value: function(t) {
					return 0 === t.length ? [{
						data: []
					}] : t
				}
			}, {
				key: "handleUserInputErrors",
				value: function(t) {
					var e = t;
					if (e.tooltip.shared && e.tooltip.intersect) throw new Error(
						"tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false"
					);
					if (e.chart.scroller && console.warn(
							"Scroller has been deprecated since v2.0.0. Please remove the configuration for chart.scroller"), "bar" ===
						e.chart.type && e.plotOptions.bar.horizontal) {
						if ("datetime" === e.xaxis.type) throw new Error(
							"Timelines on bars are not supported yet. Switch to column chart by setting plotOptions.bar.horizontal=false"
						);
						if (1 < e.yaxis.length) throw new Error(
							"Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false"
						);
						e.xaxis.tooltip.enabled = !1, e.yaxis[0].tooltip.enabled = !1, e.chart.zoom.enabled = !1
					}
					return "bar" === e.chart.type && e.tooltip.shared && ("barWidth" === e.xaxis.crosshairs.width && 1 < e.series
							.length && (console.warn(
									'crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart'),
								e.xaxis.crosshairs.width = "tickWidth"), e.plotOptions.bar.horizontal && (e.states.hover.type = "none"),
							e.tooltip.followCursor || (console.warn("followCursor option in shared columns cannot be turned off"),
								e.tooltip.followCursor = !0)), Array.isArray(e.stroke.width) && "line" !== e.chart.type && "area" !==
						e.chart.type && (console.warn(
								"stroke.width option accepts array only for line and area charts. Reverted back to Number"), e.stroke.width =
							e.stroke.width[0]), e
				}
			}]), e
		}();
		t.exports = s
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var a = e[i];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
						t, a.key, a)
				}
			}
			return function(t, e, i) {
				return e && a(t.prototype, e), i && a(t, i), t
			}
		}();
		var n = i(81),
			s = function() {
				function t() {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, t), this.defaultFont = "Helvetica, Arial, sans-serif", this.yAxis = {
						opposite: !1,
						tickAmount: 6,
						max: void 0,
						min: void 0,
						decimalsInFloat: 2,
						floating: !1,
						seriesName: void 0,
						labels: {
							show: !0,
							minWidth: 0,
							maxWidth: 160,
							offsetX: 0,
							offsetY: 0,
							style: {
								colors: [],
								fontSize: "11px",
								fontFamily: this.defaultFont,
								cssClass: "apexcharts-yaxis-label"
							},
							formatter: void 0
						},
						axisBorder: {
							show: !1,
							color: "#78909C",
							offsetX: 0,
							offsetY: 0
						},
						axisTicks: {
							show: !1,
							color: "#78909C",
							width: 6,
							offsetX: 0,
							offsetY: 0
						},
						title: {
							text: void 0,
							rotate: -90,
							offsetY: 0,
							offsetX: 0,
							style: {
								color: void 0,
								fontSize: "11px",
								fontFamily: this.defaultFont,
								cssClass: "apexcharts-yaxis-title"
							}
						},
						tooltip: {
							enabled: !1,
							offsetX: 0
						},
						crosshairs: {
							show: !0,
							position: "front",
							stroke: {
								color: "#b6b6b6",
								width: 1,
								dashArray: 0
							}
						}
					}, this.xAxisAnnotation = {
						x: 0,
						strokeDashArray: 4,
						borderColor: "#c2c2c2",
						offsetX: 0,
						offsetY: 0,
						label: {
							borderColor: "#c2c2c2",
							borderWidth: 1,
							text: void 0,
							textAnchor: "middle",
							orientation: "vertical",
							position: "top",
							offsetX: 0,
							offsetY: 0,
							style: {
								background: "#fff",
								color: "#777",
								fontSize: "11px",
								fontFamily: this.defaultFont,
								cssClass: "apexcharts-xaxis-annotation-label",
								padding: {
									left: 5,
									right: 5,
									top: 2,
									bottom: 2
								}
							}
						}
					}, this.yAxisAnnotation = {
						y: 0,
						strokeDashArray: 4,
						borderColor: "#c2c2c2",
						offsetX: 0,
						offsetY: 0,
						yAxisIndex: 0,
						label: {
							borderColor: "#c2c2c2",
							borderWidth: 1,
							text: void 0,
							textAnchor: "end",
							position: "right",
							offsetX: 0,
							offsetY: -3,
							style: {
								background: "#fff",
								color: "#777",
								fontSize: "11px",
								fontFamily: this.defaultFont,
								cssClass: "apexcharts-yaxis-annotation-label",
								padding: {
									left: 5,
									right: 5,
									top: 0,
									bottom: 2
								}
							}
						}
					}, this.pointAnnotation = {
						x: 0,
						y: null,
						yAxisIndex: 0,
						seriesIndex: 0,
						marker: {
							size: 0,
							fillColor: "#fff",
							strokeWidth: 2,
							strokeColor: "#333",
							shape: "circle",
							radius: 2
						},
						label: {
							borderColor: "#c2c2c2",
							borderWidth: 1,
							text: void 0,
							textAnchor: "middle",
							offsetX: 0,
							offsetY: -15,
							style: {
								background: "#fff",
								color: "#777",
								fontSize: "11px",
								fontFamily: this.defaultFont,
								cssClass: "apexcharts-point-annotation-label",
								padding: {
									left: 5,
									right: 5,
									top: 0,
									bottom: 2
								}
							}
						}
					}
				}
				return a(t, [{
					key: "init",
					value: function() {
						return {
							annotations: {
								position: "front",
								yaxis: [this.yAxisAnnotation],
								xaxis: [this.xAxisAnnotation],
								points: [this.pointAnnotation]
							},
							chart: {
								animations: {
									enabled: !0,
									easing: "easeinout",
									speed: 800,
									animateGradually: {
										delay: 150,
										enabled: !0
									},
									dynamicAnimation: {
										enabled: !0,
										speed: 350
									}
								},
								background: "transparent",
								locales: [n],
								defaultLocale: "en",
								dropShadow: {
									enabled: !1,
									enabledSeries: void 0,
									top: 2,
									left: 2,
									blur: 4,
									opacity: .35
								},
								events: {
									beforeMount: void 0,
									mounted: void 0,
									updated: void 0,
									clicked: void 0,
									selection: void 0,
									dataPointSelection: void 0,
									dataPointMouseEnter: void 0,
									dataPointMouseLeave: void 0,
									beforeZoom: void 0,
									zoomed: void 0,
									scrolled: void 0
								},
								foreColor: "#373d3f",
								height: "auto",
								id: void 0,
								offsetX: 0,
								offsetY: 0,
								selection: {
									enabled: !0,
									type: "x",
									selectedPoints: void 0,
									fill: {
										color: "#24292e",
										opacity: .1
									},
									stroke: {
										width: 1,
										color: "#24292e",
										opacity: .4,
										dashArray: 3
									},
									xaxis: {
										min: void 0,
										max: void 0
									},
									yaxis: {
										min: void 0,
										max: void 0
									}
								},
								sparkline: {
									enabled: !1
								},
								brush: {
									enabled: !1,
									target: void 0
								},
								brushSource: void 0,
								stacked: !1,
								stackType: "normal",
								toolbar: {
									show: !0,
									tools: {
										download: !0,
										selection: !0,
										zoom: !0,
										zoomin: !0,
										zoomout: !0,
										pan: !0,
										reset: !0
									},
									autoSelected: "zoom"
								},
								type: "line",
								width: "100%",
								zoom: {
									enabled: !0,
									type: "x",
									zoomedArea: {
										fill: {
											color: "#90CAF9",
											opacity: .4
										},
										stroke: {
											color: "#0D47A1",
											opacity: .4,
											width: 1
										}
									}
								}
							},
							plotOptions: {
								bar: {
									horizontal: !1,
									endingShape: "flat",
									columnWidth: "70%",
									barHeight: "70%",
									distributed: !1,
									colors: {
										ranges: [],
										backgroundBarColors: [],
										backgroundBarOpacity: 1
									},
									dataLabels: {
										position: "top"
									}
								},
								candlestick: {
									colors: {
										upward: "#00B746",
										downward: "#EF403C"
									}
								},
								heatmap: {
									radius: 2,
									enableShades: !0,
									shadeIntensity: .5,
									colorScale: {
										ranges: []
									}
								},
								radialBar: {
									size: void 0,
									inverseOrder: !1,
									startAngle: 0,
									endAngle: 360,
									offsetX: 0,
									offsetY: 0,
									hollow: {
										margin: 5,
										size: "50%",
										background: "transparent",
										image: void 0,
										imageWidth: 150,
										imageHeight: 150,
										imageOffsetX: 0,
										imageOffsetY: 0,
										imageClipped: !0,
										position: "front",
										dropShadow: {
											enabled: !1,
											top: 0,
											left: 0,
											blur: 3,
											opacity: .5
										}
									},
									track: {
										show: !0,
										startAngle: void 0,
										endAngle: void 0,
										background: "#f2f2f2",
										strokeWidth: "97%",
										opacity: 1,
										margin: 5,
										dropShadow: {
											enabled: !1,
											top: 0,
											left: 0,
											blur: 3,
											opacity: .5
										}
									},
									dataLabels: {
										showOn: "always",
										name: {
											show: !0,
											fontSize: "16px",
											fontFamily: this.defaultFont,
											color: void 0,
											offsetY: -10
										},
										value: {
											show: !0,
											fontSize: "14px",
											fontFamily: this.defaultFont,
											color: void 0,
											offsetY: 16,
											formatter: function(t) {
												return t + "%"
											}
										}
									}
								},
								pie: {
									size: void 0,
									donut: {
										size: "65%",
										background: "transparent"
									},
									customScale: 0,
									offsetX: 0,
									offsetY: 0,
									dataLabels: {
										offset: 0
									}
								}
							},
							colors: void 0,
							dataLabels: {
								enabled: !0,
								formatter: function(t) {
									return t
								},
								textAnchor: "middle",
								offsetX: 0,
								offsetY: 0,
								style: {
									fontSize: "12px",
									fontFamily: this.defaultFont,
									colors: void 0
								},
								dropShadow: {
									enabled: !1,
									top: 1,
									left: 1,
									blur: 1,
									opacity: .45
								}
							},
							fill: {
								type: "solid",
								colors: void 0,
								opacity: .85,
								gradient: {
									shade: "dark",
									type: "horizontal",
									shadeIntensity: .5,
									gradientToColors: void 0,
									inverseColors: !0,
									opacityFrom: 1,
									opacityTo: 1,
									stops: [0, 50, 100]
								},
								image: {
									src: [],
									width: void 0,
									height: void 0
								},
								pattern: {
									style: "sqaures",
									width: 6,
									height: 6,
									strokeWidth: 2
								}
							},
							grid: {
								show: !0,
								borderColor: "#e0e0e0",
								strokeDashArray: 0,
								position: "back",
								clipMarkers: !0,
								xaxis: {
									lines: {
										show: !1,
										animate: !1
									}
								},
								yaxis: {
									lines: {
										show: !0,
										animate: !0
									}
								},
								row: {
									colors: void 0,
									opacity: .5
								},
								column: {
									colors: void 0,
									opacity: .5
								},
								padding: {
									top: 0,
									right: 10,
									bottom: 0,
									left: 10
								}
							},
							labels: [],
							legend: {
								show: !0,
								floating: !1,
								position: "bottom",
								horizontalAlign: "center",
								verticalAlign: "middle",
								fontSize: "12px",
								fontFamily: this.defaultFont,
								textAnchor: "start",
								offsetY: 0,
								offsetX: 0,
								formatter: void 0,
								labels: {
									colors: void 0,
									useSeriesColors: !1
								},
								markers: {
									size: 6,
									strokeWidth: 0,
									strokeColor: "#fff",
									offsetX: 0,
									offsetY: 0,
									shape: "circle",
									radius: 2
								},
								itemMargin: {
									horizontal: 20,
									vertical: 5
								},
								containerMargin: {
									left: 10,
									top: 4,
									right: 10,
									bottom: 0
								},
								onItemClick: {
									toggleDataSeries: !0
								},
								onItemHover: {
									highlightDataSeries: !0
								}
							},
							markers: {
								discrete: [],
								size: 0,
								colors: void 0,
								strokeColor: "#fff",
								strokeWidth: 2,
								strokeOpacity: .9,
								fillOpacity: 1,
								shape: "circle",
								radius: 2,
								offsetX: 0,
								offsetY: 0,
								hover: {
									size: 6
								}
							},
							noData: {
								text: void 0,
								align: "center",
								verticalAlign: "middle",
								offsetX: 0,
								offsetY: 0,
								style: {
									color: "#888",
									fontSize: "14px",
									fontFamily: this.defaultFont
								}
							},
							responsive: [],
							series: void 0,
							states: {
								normal: {
									filter: {
										type: "none",
										value: 0
									}
								},
								hover: {
									filter: {
										type: "lighten",
										value: .15
									}
								},
								active: {
									allowMultipleDataPointsSelection: !1,
									filter: {
										type: "darken",
										value: .35
									}
								}
							},
							title: {
								text: void 0,
								align: "left",
								margin: 10,
								offsetX: 0,
								offsetY: 0,
								floating: !1,
								style: {
									fontSize: "14px",
									fontFamily: this.defaultFont,
									color: "#263238"
								}
							},
							subtitle: {
								text: void 0,
								align: "left",
								margin: 10,
								offsetX: 0,
								offsetY: 30,
								floating: !1,
								style: {
									fontSize: "12px",
									fontFamily: this.defaultFont,
									color: "#9699a2"
								}
							},
							stroke: {
								show: !0,
								curve: "smooth",
								lineCap: "butt",
								width: 2,
								colors: void 0,
								dashArray: 0
							},
							tooltip: {
								enabled: !0,
								shared: !0,
								followCursor: !1,
								intersect: !1,
								inverseOrder: !1,
								custom: void 0,
								fillSeriesColor: !1,
								onDatasetHover: {
									highlightDataSeries: !1
								},
								theme: "light",
								x: {
									show: !0,
									format: "dd MMM",
									formatter: void 0
								},
								y: {
									formatter: void 0,
									title: {
										formatter: function(t) {
											return t
										}
									}
								},
								z: {
									formatter: void 0,
									title: "Size: "
								},
								marker: {
									show: !0
								},
								items: {
									display: "flex"
								},
								fixed: {
									enabled: !1,
									position: "topRight",
									offsetX: 0,
									offsetY: 0
								}
							},
							xaxis: {
								type: "category",
								categories: [],
								labels: {
									show: !0,
									rotate: -45,
									rotateAlways: !1,
									trim: !0,
									minHeight: void 0,
									maxHeight: 120,
									style: {
										colors: [],
										fontSize: "12px",
										fontFamily: this.defaultFont,
										cssClass: "apexcharts-xaxis-label"
									},
									offsetX: 0,
									offsetY: 0,
									format: void 0,
									formatter: void 0,
									datetimeFormatter: {
										year: "yyyy",
										month: "MMM 'yy",
										day: "dd MMM",
										hour: "HH:mm",
										minute: "HH:mm:ss"
									}
								},
								axisBorder: {
									show: !0,
									color: "#78909C",
									width: "100%",
									height: 1,
									offsetX: 0,
									offsetY: 0
								},
								axisTicks: {
									show: !0,
									color: "#78909C",
									height: 6,
									offsetX: 0,
									offsetY: 0
								},
								tickAmount: void 0,
								min: void 0,
								max: void 0,
								range: void 0,
								floating: !1,
								position: "bottom",
								title: {
									text: void 0,
									offsetX: 0,
									offsetY: 0,
									style: {
										color: void 0,
										fontSize: "12px",
										fontFamily: this.defaultFont,
										cssClass: "apexcharts-xaxis-title"
									}
								},
								crosshairs: {
									show: !0,
									width: 1,
									position: "back",
									opacity: .9,
									stroke: {
										color: "#b6b6b6",
										width: 0,
										dashArray: 0
									},
									fill: {
										type: "solid",
										color: "#B1B9C4",
										gradient: {
											colorFrom: "#D8E3F0",
											colorTo: "#BED1E6",
											stops: [0, 100],
											opacityFrom: .4,
											opacityTo: .5
										}
									},
									dropShadow: {
										enabled: !1,
										left: 0,
										top: 0,
										blur: 1,
										opacity: .4
									}
								},
								tooltip: {
									enabled: !0,
									offsetY: 0,
									formatter: void 0
								}
							},
							yaxis: this.yAxis,
							theme: {
								palette: "palette1",
								monochrome: {
									enabled: !1,
									color: "#008FFB",
									shadeTo: "light",
									shadeIntensity: .65
								}
							}
						}
					}
				}]), t
			}();
		e.default = s
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = i(77),
			r = (a = s) && a.__esModule ? a : {
				default: a
			};

		function A(t) {
			if (Array.isArray(t)) {
				for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
				return i
			}
			return Array.from(t)
		}
		var o = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9,
					11
				], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
			}
			return n(e, [{
				key: "isValidDate",
				value: function(t) {
					return !isNaN(this.parseDate(t))
				}
			}, {
				key: "getUTCTimeStamp",
				value: function(t) {
					return new Date(new Date(t).toUTCString().substr(0, 25)).getTime()
				}
			}, {
				key: "parseDate",
				value: function(t) {
					var e = Date.parse(t);
					if (!isNaN(e)) return this.getUTCTimeStamp(t);
					var i = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
					return i = this.getUTCTimeStamp(i)
				}
			}, {
				key: "treatAsUtc",
				value: function(t) {
					var e = new Date(t);
					return e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
				}
			}, {
				key: "formatDate",
				value: function(t, e) {
					var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
						a = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
						n = this.w.globals.locale,
						s = ["\0"].concat(A(n.months)),
						r = [""].concat(A(n.shortMonths)),
						o = [""].concat(A(n.days)),
						l = [""].concat(A(n.shortDays));

					function h(t, e) {
						var i = t + "";
						for (e = e || 2; i.length < e;) i = "0" + i;
						return i
					}
					a && (t = this.treatAsUtc(t));
					var c = i ? t.getUTCFullYear() : t.getFullYear();
					e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + c)).replace(/(^|[^\\])yy/g, "$1" + c.toString().substr(
						2, 2))).replace(/(^|[^\\])y/g, "$1" + c);
					var u = (i ? t.getUTCMonth() : t.getMonth()) + 1;
					e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + s[0])).replace(/(^|[^\\])MMM/g, "$1" + r[0])).replace(
						/(^|[^\\])MM/g, "$1" + h(u))).replace(/(^|[^\\])M/g, "$1" + u);
					var d = i ? t.getUTCDate() : t.getDate();
					e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + o[0])).replace(/(^|[^\\])ddd/g, "$1" + l[0])).replace(
						/(^|[^\\])dd/g, "$1" + h(d))).replace(/(^|[^\\])d/g, "$1" + d);
					var f = i ? t.getUTCHours() : t.getHours(),
						p = 12 < f ? f - 12 : 0 === f ? 12 : f;
					e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + h(f))).replace(/(^|[^\\])H/g, "$1" + f)).replace(
						/(^|[^\\])hh+/g, "$1" + h(p))).replace(/(^|[^\\])h/g, "$1" + p);
					var g = i ? t.getUTCMinutes() : t.getMinutes();
					e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + h(g))).replace(/(^|[^\\])m/g, "$1" + g);
					var x = i ? t.getUTCSeconds() : t.getSeconds();
					e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + h(x))).replace(/(^|[^\\])s/g, "$1" + x);
					var v = i ? t.getUTCMilliseconds() : t.getMilliseconds();
					e = e.replace(/(^|[^\\])fff+/g, "$1" + h(v, 3)), v = Math.round(v / 10), e = e.replace(/(^|[^\\])ff/g,
						"$1" + h(v)), v = Math.round(v / 10);
					var b = f < 12 ? "AM" : "PM";
					e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + v)).replace(/(^|[^\\])TT+/g, "$1" + b)).replace(
						/(^|[^\\])T/g, "$1" + b.charAt(0));
					var m = b.toLowerCase();
					e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + m)).replace(/(^|[^\\])t/g, "$1" + m.charAt(0));
					var y = -t.getTimezoneOffset(),
						w = i || !y ? "Z" : 0 < y ? "+" : "-";
					if (!i) {
						var k = (y = Math.abs(y)) % 60;
						w += h(Math.floor(y / 60)) + ":" + h(k)
					}
					e = e.replace(/(^|[^\\])K/g, "$1" + w);
					var S = (i ? t.getUTCDay() : t.getDay()) + 1;
					return e = (e = (e = (e = (e = e.replace(new RegExp(o[0], "g"), o[S])).replace(new RegExp(l[0], "g"), l[S]))
						.replace(new RegExp(s[0], "g"), s[u])).replace(new RegExp(r[0], "g"), r[u])).replace(/\\(.)/g, "$1")
				}
			}, {
				key: "getTimeUnitsfromTimestamp",
				value: function(t, e) {
					var i = this.w;
					void 0 !== i.config.xaxis.min && (t = i.config.xaxis.min), void 0 !== i.config.xaxis.max && (e = i.config
						.xaxis.max);
					var a = new Date(t).getFullYear(),
						n = new Date(e).getFullYear(),
						s = new Date(t).getMonth(),
						r = new Date(e).getMonth(),
						o = new Date(t).getDate(),
						l = new Date(e).getDate(),
						h = new Date(t).getHours(),
						c = new Date(e).getHours();
					return {
						minMinute: new Date(t).getMinutes(),
						maxMinute: new Date(e).getMinutes(),
						minHour: h,
						maxHour: c,
						minDate: o,
						maxDate: l,
						minMonth: s,
						maxMonth: r,
						minYear: a,
						maxYear: n
					}
				}
			}, {
				key: "isLeapYear",
				value: function(t) {
					return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
				}
			}, {
				key: "calculcateLastDaysOfMonth",
				value: function(t, e, i) {
					return this.determineDaysOfMonths(t, e) - i
				}
			}, {
				key: "determineDaysOfYear",
				value: function(t) {
					var e = 365;
					return this.isLeapYear(t) && (e = 366), e
				}
			}, {
				key: "determineRemainingDaysOfYear",
				value: function(t, e, i) {
					var a = this.daysCntOfYear[e] + i;
					return 1 < e && this.isLeapYear() && a++, a
				}
			}, {
				key: "determineDaysOfMonths",
				value: function(t, e) {
					var i = 30;
					switch (t = new r.default(this.ctx).monthMod(t), !0) {
						case this.months30.includes(t):
							2 === t && (i = this.isLeapYear(e) ? 29 : 28);
							break;
						case this.months31.includes(t):
						default:
							i = 31
					}
					return i
				}
			}]), e
		}();
		e.default = o
	}, function(t, e, i) {
		"use strict";
		var l = i(16),
			h = i(23),
			c = i(110);
		t.exports = function(o) {
			return function(t, e, i) {
				var a, n = l(t),
					s = h(n.length),
					r = c(i, s);
				if (o && e != e) {
					for (; r < s;)
						if ((a = n[r++]) != a) return !0
				} else
					for (; r < s; r++)
						if ((o || r in n) && n[r] === e) return o || r || 0;
				return !o && -1
			}
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(3).document;
		t.exports = a && a.documentElement
	}, function(t, e, i) {
		"use strict";
		t.exports = !i(10) && !i(19)(function() {
			return 7 != Object.defineProperty(i(34)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t, e, i) {
		"use strict";
		var a = i(20),
			n = i(2)("iterator"),
			s = Array.prototype;
		t.exports = function(t) {
			return void 0 !== t && (a.Array === t || s[n] === t)
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(18);
		t.exports = Array.isArray || function(t) {
			return "Array" == a(t)
		}
	}, function(t, e, i) {
		"use strict";
		var s = i(7);
		t.exports = function(e, t, i, a) {
			try {
				return a ? t(s(i)[0], i[1]) : t(i)
			} catch (t) {
				var n = e.return;
				throw void 0 !== n && s(n.call(e)), t
			}
		}
	}, function(t, e, i) {
		"use strict";
		var m = i(21),
			y = i(5),
			w = i(15),
			k = i(12),
			S = i(20),
			A = i(98),
			C = i(28),
			P = i(105),
			M = i(2)("iterator"),
			L = !([].keys && "next" in [].keys()),
			T = "values",
			E = function() {
				return this
			};
		t.exports = function(t, e, i, a, n, s, r) {
			A(i, e, a);
			var o, l, h, c = function(t) {
					if (!L && t in p) return p[t];
					switch (t) {
						case "keys":
						case T:
							return function() {
								return new i(this, t)
							}
					}
					return function() {
						return new i(this, t)
					}
				},
				u = e + " Iterator",
				d = n == T,
				f = !1,
				p = t.prototype,
				g = p[M] || p["@@iterator"] || n && p[n],
				x = g || c(n),
				v = n ? d ? c("entries") : x : void 0,
				b = "Array" == e && p.entries || g;
			if (b && (h = P(b.call(new t))) !== Object.prototype && h.next && (C(h, u, !0), m || "function" == typeof h[M] ||
					k(h, M, E)), d && g && g.name !== T && (f = !0, x = function() {
					return g.call(this)
				}), m && !r || !L && !f && p[M] || k(p, M, x), S[e] = x, S[u] = E, n)
				if (o = {
						values: d ? x : c(T),
						keys: s ? x : c("keys"),
						entries: v
					}, r)
					for (l in o) l in p || w(p, l, o[l]);
				else y(y.P + y.F * (L || f), e, o);
			return o
		}
	}, function(t, e, i) {
		"use strict";
		var s = i(2)("iterator"),
			r = !1;
		try {
			var a = [7][s]();
			a.return = function() {
				r = !0
			}, Array.from(a, function() {
				throw 2
			})
		} catch (t) {}
		t.exports = function(t, e) {
			if (!e && !r) return !1;
			var i = !1;
			try {
				var a = [7],
					n = a[s]();
				n.next = function() {
					return {
						done: i = !0
					}
				}, a[s] = function() {
					return n
				}, t(a)
			} catch (t) {}
			return i
		}
	}, function(t, e, a) {
		"use strict";
		var n = a(7),
			s = a(102),
			r = a(35),
			o = a(39)("IE_PROTO"),
			l = function() {},
			h = "prototype",
			c = function() {
				var t, e = a(34)("iframe"),
					i = r.length;
				for (e.style.display = "none", a(54).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(),
					t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; i--;) delete c[h][r[i]];
				return c()
			};
		t.exports = Object.create || function(t, e) {
			var i;
			return null !== t ? (l[h] = n(t), i = new l, l[h] = null, i[o] = t) : i = c(), void 0 === e ? i : s(i, e)
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(64),
			n = i(35).concat("length", "prototype");
		e.f = Object.getOwnPropertyNames || function(t) {
			return a(t, n)
		}
	}, function(t, e, i) {
		"use strict";
		e.f = Object.getOwnPropertySymbols
	}, function(t, e, i) {
		"use strict";
		var r = i(11),
			o = i(16),
			l = i(53)(!1),
			h = i(39)("IE_PROTO");
		t.exports = function(t, e) {
			var i, a = o(t),
				n = 0,
				s = [];
			for (i in a) i != h && r(a, i) && s.push(i);
			for (; e.length > n;) r(a, i = e[n++]) && (~l(s, i) || s.push(i));
			return s
		}
	}, function(t, e, i) {
		"use strict";
		t.exports = function(t) {
			try {
				return {
					e: !1,
					v: t()
				}
			} catch (t) {
				return {
					e: !0,
					v: t
				}
			}
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(7),
			n = i(8),
			s = i(37);
		t.exports = function(t, e) {
			if (a(t), n(e) && e.constructor === t) return e;
			var i = s.f(t);
			return (0, i.resolve)(e), i.promise
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(7),
			s = i(17),
			r = i(2)("species");
		t.exports = function(t, e) {
			var i, a = n(t).constructor;
			return void 0 === a || null == (i = n(a)[r]) ? e : s(i)
		}
	}, function(t, e, i) {
		"use strict";
		var a, n, s, r = i(14),
			o = i(97),
			l = i(54),
			h = i(34),
			c = i(3),
			u = c.process,
			d = c.setImmediate,
			f = c.clearImmediate,
			p = c.MessageChannel,
			g = c.Dispatch,
			x = 0,
			v = {},
			b = "onreadystatechange",
			m = function() {
				var t = +this;
				if (v.hasOwnProperty(t)) {
					var e = v[t];
					delete v[t], e()
				}
			},
			y = function(t) {
				m.call(t.data)
			};
		d && f || (d = function(t) {
				for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]);
				return v[++x] = function() {
					o("function" == typeof t ? t : Function(t), e)
				}, a(x), x
			}, f = function(t) {
				delete v[t]
			}, "process" == i(18)(u) ? a = function(t) {
				u.nextTick(r(m, t, 1))
			} : g && g.now ? a = function(t) {
				g.now(r(m, t, 1))
			} : p ? (s = (n = new p).port2, n.port1.onmessage = y, a = r(s.postMessage, s, 1)) : c.addEventListener &&
			"function" == typeof postMessage && !c.importScripts ? (a = function(t) {
				c.postMessage(t + "", "*")
			}, c.addEventListener("message", y, !1)) : a = b in h("script") ? function(t) {
				l.appendChild(h("script"))[b] = function() {
					l.removeChild(this), m.call(t)
				}
			} : function(t) {
				setTimeout(r(m, t, 1), 0)
			}), t.exports = {
			set: d,
			clear: f
		}
	}, function(t, e, i) {
		"use strict";
		e.f = i(2)
	}, function(t, e, i) {
		"use strict";
		var a = i(32),
			n = i(2)("iterator"),
			s = i(20);
		t.exports = i(4).getIteratorMethod = function(t) {
			if (null != t) return t[n] || t["@@iterator"] || s[a(t)]
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(32),
			n = {};
		n[i(2)("toStringTag")] = "z", n + "" != "[object z]" && i(15)(Object.prototype, "toString", function() {
			return "[object " + a(this) + "]"
		}, !0)
	}, function(t, e, i) {
		"use strict";
		var a = i(109)(!0);
		i(59)(String, "String", function(t) {
			this._t = String(t), this._i = 0
		}, function() {
			var t, e = this._t,
				i = this._i;
			return i >= e.length ? {
				value: void 0,
				done: !0
			} : (t = a(e, i), this._i += t.length, {
				value: t,
				done: !1
			})
		})
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			M = n(i(13)),
			L = n(i(1)),
			T = n(i(0)),
			E = n(i(6));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var s = function() {
			function i(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, i), this.ctx = t, this.w = t.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config
					.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation
					.enabled, this.animBeginArr = [0], this.animDur = 0;
				var e = this.w;
				this.lineColorArr = void 0 !== e.globals.stroke.colors ? e.globals.stroke.colors : e.globals.colors, this.defaultSize =
					e.globals.svgHeight < e.globals.svgWidth ? e.globals.svgHeight - 35 : e.globals.gridWidth, this.centerY =
					this.defaultSize / 2, this.centerX = e.globals.gridWidth / 2, this.fullAngle = 360, this.size = 0, this.donutSize =
					0, this.prevSectorAngleArr = []
			}
			return a(i, [{
				key: "draw",
				value: function(t) {
					for (var e = this.w, i = new T.default(this.ctx), a = i.group({
							class: "apexcharts-pie"
						}), n = 0, s = 0; s < t.length; s++) n += L.default.negToZero(t[s]);
					for (var r = [], o = i.group(), l = 0; l < t.length; l++) {
						var h = this.fullAngle * L.default.negToZero(t[l]) / n;
						r.push(h)
					}
					if (e.globals.dataChanged) {
						for (var c = 0, u = 0; u < e.globals.previousPaths.length; u++) c += L.default.negToZero(e.globals.previousPaths[
							u]);
						for (var d = void 0, f = 0; f < e.globals.previousPaths.length; f++) d = this.fullAngle * L.default.negToZero(
							e.globals.previousPaths[f]) / c, this.prevSectorAngleArr.push(d)
					}
					this.size = this.defaultSize / 2.05 - e.config.stroke.width - e.config.chart.dropShadow.blur, void 0 !==
						e.config.plotOptions.pie.size && (this.size = e.config.plotOptions.pie.size), this.donutSize = this.size *
						parseInt(e.config.plotOptions.pie.donut.size) / 100;
					var p = 1 + e.config.plotOptions.pie.customScale,
						g = e.globals.gridWidth / 2,
						x = e.globals.gridHeight / 2,
						v = g - e.globals.gridWidth / 2 * p,
						b = x - e.globals.gridHeight / 2 * p;
					if ("donut" === e.config.chart.type) {
						var m = i.drawCircle(this.donutSize);
						m.attr({
							cx: this.centerX,
							cy: this.centerY,
							fill: e.config.plotOptions.pie.donut.background
						}), o.add(m)
					}
					var y = this.drawArcs(r, t);
					return o.attr({
						transform: "translate(" + v + ", " + (b - 25) + ") scale(" + p + ")"
					}), a.attr({
						"data:innerTranslateX": v,
						"data:innerTranslateY": b - 25
					}), o.add(y), a.add(o), a
				}
			}, {
				key: "drawArcs",
				value: function(t, e) {
					var i = this.w,
						a = new E.default(this.ctx),
						n = new T.default(this.ctx),
						s = new M.default(this.ctx),
						r = n.group(),
						o = 0,
						l = 0,
						h = 0,
						c = 0;
					this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
					for (var u = 0; u < t.length; u++) {
						var d = n.group({
							class: "apexcharts-series apexcharts-pie-series",
							id: "apexcharts-series-" + u,
							rel: u + 1
						});
						r.add(d), l = c, h = (o = h) + t[u], c = l + this.prevSectorAngleArr[u];
						var f = h - o,
							p = s.fillPath(d, {
								seriesNumber: u,
								size: this.size
							}),
							g = this.getChangedPath(l, c),
							x = n.drawPath({
								d: g,
								stroke: this.lineColorArr instanceof Array ? this.lineColorArr[u] : this.lineColorArr,
								strokeWidth: this.strokeWidth,
								fill: p,
								fillOpacity: i.config.fill.opacity,
								classes: "apexcharts-pie-area"
							});
						if (x.attr({
								id: "apexcharts-pieSlice-" + u,
								index: 0,
								j: u
							}), i.config.chart.dropShadow.enabled) {
							var v = i.config.chart.dropShadow;
							a.dropShadow(x, v)
						}
						this.addListeners(x), T.default.setAttrs(x.node, {
							"data:angle": f,
							"data:startAngle": o,
							"data:strokeWidth": this.strokeWidth,
							"data:value": e[u]
						});
						var b = void 0;
						"pie" === i.config.chart.type ? b = L.default.polarToCartesian(this.centerX, this.centerY, this.size /
								1.25 + i.config.plotOptions.pie.dataLabels.offset, o + (h - o) / 2) : "donut" === i.config.chart.type &&
							(b = L.default.polarToCartesian(this.centerX, this.centerY, (this.size + this.donutSize) / 2 + i.config
								.plotOptions.pie.dataLabels.offset, o + (h - o) / 2)), d.add(x);
						var m = 0;
						if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : (m = (
									h - o) / this.fullAngle * i.config.chart.animations.speed, this.animDur = m + this.animDur, this.animBeginArr
								.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(x, {
								endAngle: h,
								startAngle: o,
								prevStartAngle: l,
								prevEndAngle: c,
								animateStartingPos: !0,
								i: u,
								animBeginArr: this.animBeginArr,
								dur: i.config.chart.animations.dynamicAnimation.speed
							}) : this.animatePaths(x, {
								endAngle: h,
								startAngle: o,
								i: u,
								totalItems: t.length - 1,
								animBeginArr: this.animBeginArr,
								dur: m
							}), x.click(this.pieClicked.bind(this, u)), i.config.dataLabels.enabled) {
							var y = b.x,
								w = b.y,
								k = 100 * (h - o) / 360 + "%";
							if (0 !== f) {
								var S = i.config.dataLabels.formatter;
								void 0 !== S && (k = S(i.globals.seriesPercent[u][0], {
									seriesIndex: u,
									globals: i.globals
								}));
								var A = i.globals.dataLabels.style.colors[u],
									C = n.drawText({
										x: y,
										y: w,
										text: k,
										textAnchor: "middle",
										fontSize: i.config.dataLabels.style.fontSize,
										fontFamily: i.config.dataLabels.style.fontFamily,
										foreColor: A
									});
								if (i.config.dataLabels.dropShadow.enabled) {
									var P = i.config.dataLabels.dropShadow;
									new E.default(this.ctx).dropShadow(C, P)
								}
								C.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && !1 === i.globals.resized &&
									(C.node.classList.add("apexcharts-pie-label-delay"), C.node.style.animationDelay = i.config.chart.animations
										.speed / 940 + "s"), d.add(C)
							}
						}
					}
					return r
				}
			}, {
				key: "addListeners",
				value: function(t) {
					var e = new T.default(this.ctx);
					t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this, t)), t.node.addEventListener(
						"mouseleave", e.pathMouseLeave.bind(this, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(
						this, t)), t.node.addEventListener("touchStart", e.pathMouseDown.bind(this, t))
				}
			}, {
				key: "animatePaths",
				value: function(t, e) {
					var i = this.w,
						a = e.endAngle - e.startAngle,
						n = a,
						s = e.startAngle,
						r = e.startAngle;
					void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && (s = e.prevEndAngle, n = e.prevEndAngle - e.prevStartAngle),
						e.i === i.config.series.length - 1 && (a + r > this.fullAngle ? e.endAngle = e.endAngle - (a + r) : a +
							r < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (a + r)))), a === this.fullAngle &&
						(a = this.fullAngle - .01), this.animateArc(t, s, r, a, n, e)
				}
			}, {
				key: "animateArc",
				value: function(e, i, a, n, s, r) {
					var o = this,
						t = this.w,
						l = o.size;
					l || (l = r.size);
					var h = void 0,
						c = r;
					(isNaN(i) || isNaN(s)) && (i = a, s = n, c.dur = 0);
					var u = n,
						d = a,
						f = i - a;
					0 !== c.dur ? e.animate(c.dur, t.globals.easing, c.animBeginArr[c.i]).afterAll(function() {
						"pie" !== t.config.chart.type && "donut" !== t.config.chart.type || this.animate(300).attr({
							"stroke-width": t.config.stroke.width
						})
					}).during(function(t) {
						u = f + (n - f) * t, r.animateStartingPos && (u = s + (n - s) * t, d = i - s + (a - (i - s)) * t), h =
							o.getPiePath({
								me: o,
								startAngle: d,
								angle: u,
								size: l
							}), e.node.setAttribute("data:pathOrig", h), e.attr({
								d: h
							})
					}) : (h = o.getPiePath({
						me: o,
						startAngle: d,
						angle: n,
						size: l
					}), e.node.setAttribute("data:pathOrig", h), e.attr({
						d: h
					}))
				}
			}, {
				key: "pieClicked",
				value: function(t) {
					var e, i = this.w,
						a = this.size + 10,
						n = i.globals.dom.Paper.select("#apexcharts-pieSlice-" + t).members[0],
						s = n.attr("d");
					if ("true" !== n.attr("data:pieClicked")) {
						var r = i.globals.dom.baseEl.querySelectorAll(".apexcharts-pie-area");
						Array.prototype.forEach.call(r, function(t) {
							t.setAttribute("data:pieClicked", "false");
							var e = t.getAttribute("data:pathOrig");
							t.setAttribute("d", e)
						}), n.attr("data:pieClicked", "true");
						var o = parseInt(n.attr("data:startAngle")),
							l = parseInt(n.attr("data:angle"));
						e = this.getPiePath({
							me: this,
							startAngle: o,
							angle: l,
							size: a
						}), 360 !== l && n.plot(e).animate(1).plot(s).animate(100).plot(e)
					} else {
						n.attr({
							"data:pieClicked": "false"
						});
						var h = n.attr("data:pathOrig");
						n.attr({
							d: h
						})
					}
				}
			}, {
				key: "getChangedPath",
				value: function(t, e) {
					var i = "";
					return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({
						me: this,
						startAngle: t,
						angle: e - t,
						size: this.size
					})), i
				}
			}, {
				key: "getPiePath",
				value: function(t) {
					var e = t.me,
						i = t.startAngle,
						a = t.angle,
						n = t.size,
						s = this.w,
						r = i,
						o = Math.PI * (r - 90) / 180,
						l = a + i;
					360 < l && (l = 360);
					var h = Math.PI * (l - 90) / 180,
						c = e.centerX + n * Math.cos(o),
						u = e.centerY + n * Math.sin(o),
						d = e.centerX + n * Math.cos(h),
						f = e.centerY + n * Math.sin(h),
						p = L.default.polarToCartesian(e.centerX, e.centerY, e.donutSize, l),
						g = L.default.polarToCartesian(e.centerX, e.centerY, e.donutSize, r),
						x = 180 < a ? 1 : 0;
					return "donut" === s.config.chart.type ? ["M", c, u, "A", n, n, 0, x, 1, d, f, "L", p.x, p.y, "A", e.donutSize,
						e.donutSize, 0, x, 0, g.x, g.y, "L", c, u, "z"
					].join(" ") : "pie" === s.config.chart.type ? ["M", c, u, "A", n, n, 0, x, 1, d, f, "L", e.centerX, e.centerY,
						"L", c, u
					].join(" ") : ["M", c, u, "A", n, n, 0, x, 1, d, f].join(" ")
				}
			}]), i
		}();
		e.default = s
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			T = n(i(25)),
			E = n(i(13)),
			z = n(i(6)),
			X = n(i(0)),
			O = n(i(47));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var s = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim =
					this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.radiusSizes = []
			}
			return a(e, [{
				key: "draw",
				value: function(t, e, i) {
					var a = this.w,
						n = new T.default(this.ctx),
						s = new X.default(this.ctx),
						r = new z.default(this.ctx),
						o = new E.default(this.ctx),
						l = i.realIndex,
						h = i.pointsPos,
						c = i.zRatio,
						u = i.elParent,
						d = o.fillPath(t, {
							seriesNumber: l
						}),
						f = s.group({
							class: "apexcharts-series-markers apexcharts-series-" + a.config.chart.type
						});
					if (h.x instanceof Array)
						for (var p = 0; p < h.x.length; p++) {
							var g = e + 1;
							0 === e && 0 === p && (g = 0), 0 === e && 1 === p && (g = 1);
							var x = 0,
								v = a.config.markers.size;
							c !== 1 / 0 && (v = a.globals.seriesZ[l][g] / c, void 0 === this.radiusSizes[l] && this.radiusSizes.push(
								[]), this.radiusSizes[l].push(v)), a.config.chart.animations.enabled || (x = v);
							var b = h.x[p],
								m = h.y[p];
							if (m = m || 0, x = x || 0, 0 === (b = b || 0) && 0 === m || void 0 === a.globals.series[l][g]) return;
							var y = s.drawCircle(x);
							if (y.attr({
									cx: b,
									cy: m,
									fill: d
								}), a.config.chart.dropShadow.enabled && r.dropShadow(y, {
									top: a.config.chart.dropShadow.top,
									left: a.config.chart.dropShadow.left,
									blur: a.config.chart.dropShadow.blur
								}), this.initialAnim && !a.globals.dataChanged) {
								var w = 1;
								a.globals.resized || (w = a.config.chart.animations.speed), n.animateCircleRadius(y, 0, v, w)
							}
							if (a.globals.dataChanged)
								if (this.dynamicAnim) {
									var k = a.config.chart.animations.dynamicAnimation.speed,
										S = void 0,
										A = void 0,
										C = void 0,
										P = a.globals.previousPaths[l][e];
									void 0 !== P && (S = P.x, A = P.y, C = void 0 !== P.r ? P.r : v);
									for (var M = 0; M < a.globals.collapsedSeries.length; M++) a.globals.collapsedSeries[M].index === l &&
										(k = 1, v = 0);
									0 === b && 0 === m && (v = 0), n.animateCircle(y, {
										cx: S,
										cy: A,
										r: C
									}, {
										cx: b,
										cy: m,
										r: v
									}, k)
								} else y.attr({
									r: v
								});
							y.attr({
								rel: g,
								j: g,
								index: l
							});
							var L = new O.default(this.ctx);
							L.setSelectedPointFilter(y, l, g), L.addEvents(y), y.node.classList.add("apexcharts-marker"), f.add(y),
								u.add(f)
						}
				}
			}, {
				key: "centerTextInBubble",
				value: function(t, e, i) {
					var a = this.w;
					return {
						y: t += parseInt(a.config.dataLabels.style.fontSize) / 4
					}
				}
			}]), e
		}();
		t.exports = s
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var a = e[i];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
						t, a.key, a)
				}
			}
			return function(t, e, i) {
				return e && a(t.prototype, e), i && a(t, i), t
			}
		}();
		var n = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w
			}
			return a(e, [{
				key: "getStackedSeriesTotals",
				value: function() {
					for (var t = this.w, e = [], i = 0; i < t.globals.series[t.globals.maxValsInArrayIndex].length; i++) {
						for (var a = 0, n = 0; n < t.globals.series.length; n++) a += t.globals.series[n][i];
						e.push(a)
					}
					return t.globals.stackedSeriesTotals = e
				}
			}, {
				key: "getSeriesTotalByIndex",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
					return null === t ? this.w.config.series.reduce(function(t, e) {
						return t + e
					}, 0) : this.w.config.series[t].data.reduce(function(t, e) {
						return t + e
					}, 0)
				}
			}, {
				key: "getLargestSeries",
				value: function() {
					var t = this.w;
					t.globals.maxValsInArrayIndex = t.globals.series.map(function(t) {
						return t.length
					}).indexOf(Math.max.apply(Math, t.globals.series.map(function(t) {
						return t.length
					})))
				}
			}, {
				key: "getSeriesTotals",
				value: function() {
					var t = this.w;
					t.globals.seriesTotals = t.globals.series.map(function(t, e) {
						var i = 0;
						if (Array.isArray(t))
							for (var a = 0; a < t.length; a++) i += t[a];
						else i += t;
						return i
					})
				}
			}, {
				key: "getSeriesTotalsXRange",
				value: function(n, s) {
					var r = this.w;
					return r.globals.series.map(function(t, e) {
						for (var i = 0, a = 0; a < t.length; a++) r.globals.seriesX[e][a] > n && r.globals.seriesX[e][a] < s &&
							(i += t[a]);
						return i
					})
				}
			}, {
				key: "getPercentSeries",
				value: function() {
					var o = this.w;
					o.globals.seriesPercent = o.globals.series.map(function(t, e) {
						var i = [];
						if (Array.isArray(t))
							for (var a = 0; a < t.length; a++) {
								var n = o.globals.stackedSeriesTotals[a],
									s = 100 * t[a] / n;
								i.push(s)
							} else {
								var r = 100 * t / o.globals.seriesTotals.reduce(function(t, e) {
									return t + e
								}, 0);
								i.push(r)
							}
						return i
					})
				}
			}], [{
				key: "extendArrayProps",
				value: function(t, e) {
					return e.yaxis && (e = t.extendYAxis(e)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(
						e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(
						e))), e
				}
			}]), e
		}();
		e.default = n
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			b = n(i(0)),
			m = n(i(6));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var s = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w
			}
			return a(e, [{
				key: "drawXCrosshairs",
				value: function() {
					var t = this.w,
						e = new b.default(this.ctx),
						i = new m.default(this.ctx),
						a = t.config.xaxis.crosshairs.fill.gradient,
						n = t.config.xaxis.crosshairs.dropShadow,
						s = t.config.xaxis.crosshairs.fill.type,
						r = a.colorFrom,
						o = a.colorTo,
						l = a.opacityFrom,
						h = a.opacityTo,
						c = a.stops,
						u = n.enabled,
						d = n.left,
						f = n.top,
						p = n.blur,
						g = n.opacity,
						x = t.config.xaxis.crosshairs.fill.color;
					if (t.config.xaxis.crosshairs.show) {
						"gradient" === s && (x = e.drawGradient("vertical", r, o, l, h, null, c));
						var v = e.drawRect();
						v.attr({
							class: "apexcharts-xcrosshairs",
							x: 0,
							y: 0,
							width: 0,
							height: t.globals.gridHeight,
							fill: x,
							filter: "none",
							"fill-opacity": t.config.xaxis.crosshairs.opacity,
							stroke: t.config.xaxis.crosshairs.stroke.color,
							"stroke-width": t.config.xaxis.crosshairs.stroke.width,
							"stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray
						}), u && (v = i.dropShadow(v, {
							left: d,
							top: f,
							blur: p,
							opacity: g
						})), t.globals.dom.elGraphical.add(v)
					}
				}
			}, {
				key: "drawYCrosshairs",
				value: function() {
					var t = this.w,
						e = new b.default(this.ctx),
						i = t.config.yaxis[0].crosshairs;
					if (t.config.yaxis[0].crosshairs.show) {
						var a = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
						a.attr({
							class: "apexcharts-ycrosshairs"
						}), t.globals.dom.elGraphical.add(a)
					}
					var n = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, 0, 0);
					n.attr({
						class: "apexcharts-ycrosshairs-hidden"
					}), t.globals.dom.elGraphical.add(n)
				}
			}]), e
		}();
		e.default = s
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var b = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
				}
				return t
			},
			a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			S = s(i(52)),
			n = s(i(46)),
			r = s(i(0));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var o = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.timeScaleArray = []
			}
			return a(e, [{
				key: "calculateTimeScaleTicks",
				value: function(t, e) {
					var r = this,
						o = this.w;
					if (o.globals.allSeriesCollapsed) return o.globals.labels = [], o.globals.timelineLabels = [], [];
					var i = new S.default(this.ctx),
						a = (e - t) / 864e5;
					this.determineInterval(a), o.globals.disableZoomIn = !1, o.globals.disableZoomOut = !1, a < .005 ? o.globals
						.disableZoomIn = !0 : 5e4 < a && (o.globals.disableZoomOut = !0);
					var n = i.getTimeUnitsfromTimestamp(t, e),
						s = o.globals.gridWidth / a,
						l = s / 24,
						h = l / 60,
						c = Math.floor(24 * a),
						u = Math.floor(24 * a * 60),
						d = Math.floor(a),
						f = Math.floor(a / 30),
						p = Math.floor(a / 365),
						g = {
							minMinute: n.minMinute,
							minHour: n.minHour,
							minDate: n.minDate,
							minMonth: n.minMonth,
							minYear: n.minYear
						},
						x = {
							firstVal: g,
							currentHour: g.minHour,
							currentMonthDate: g.minDate,
							currentDate: g.minDate,
							currentMonth: g.minMonth,
							currentYear: g.minYear,
							daysWidthOnXAxis: s,
							hoursWidthOnXAxis: l,
							minutesWidthOnXAxis: h,
							numberOfMinutes: u,
							numberOfHours: c,
							numberOfDays: d,
							numberOfMonths: f,
							numberOfYears: p
						};
					switch (this.tickInterval) {
						case "years":
							this.generateYearScale(x);
							break;
						case "months":
						case "half_year":
							this.generateMonthScale(x);
							break;
						case "months_days":
						case "months_fortnight":
						case "days":
						case "week_days":
							this.generateDayScale(x);
							break;
						case "hours":
							this.generateHourScale(x);
							break;
						case "minutes":
							this.generateMinuteScale(x)
					}
					var v = this.timeScaleArray.map(function(t) {
						var e = {
							position: t.position,
							unit: t.unit,
							year: t.year,
							day: t.day ? t.day : 1,
							hour: t.hour ? t.hour : 0,
							month: t.month + 1
						};
						return "month" === t.unit ? b({}, e, {
							value: t.value + 1
						}) : "day" === t.unit || "hour" === t.unit ? b({}, e, {
							value: t.value
						}) : "minute" === t.unit ? b({}, e, {
							value: t.value,
							minute: t.value
						}) : t
					});
					return v.filter(function(t) {
						var e = 1,
							i = Math.ceil(o.globals.gridWidth / 120),
							a = t.value;
						void 0 !== o.config.xaxis.tickAmount && (i = o.config.xaxis.tickAmount), v.length > i && (e = Math.floor(
							v.length / i));
						var n = !1,
							s = !1;
						switch (r.tickInterval) {
							case "half_year":
								e = 7, "year" === t.unit && (n = !0);
								break;
							case "months":
								e = 1, "year" === t.unit && (n = !0);
								break;
							case "months_fortnight":
								e = 15, "year" !== t.unit && "month" !== t.unit || (n = !0), 30 === a && (s = !0);
								break;
							case "months_days":
								e = 10, "month" === t.unit && (n = !0), 30 === a && (s = !0);
								break;
							case "week_days":
								e = 8, "month" === t.unit && (n = !0);
								break;
							case "days":
								e = 1, "month" === t.unit && (n = !0);
								break;
							case "hours":
								"day" === t.unit && (n = !0);
								break;
							case "minutes":
								a % 5 != 0 && (s = !0)
						}
						if ("minutes" === r.tickInterval) {
							if (!s) return !0
						} else if ((a % e == 0 || n) && !s) return !0
					})
				}
			}, {
				key: "recalcDimensionsBasedOnFormat",
				value: function(t) {
					var e = this.w,
						i = this.formatDates(t),
						a = this.removeOverlappingTS(i);
					e.globals.timelineLabels = a.slice(), new n.default(this.ctx).plotCoords()
				}
			}, {
				key: "determineInterval",
				value: function(t) {
					switch (!0) {
						case 1825 < t:
							this.tickInterval = "years";
							break;
						case 800 < t && t <= 1825:
							this.tickInterval = "half_year";
							break;
						case 180 < t && t <= 800:
							this.tickInterval = "months";
							break;
						case 90 < t && t <= 180:
							this.tickInterval = "months_fortnight";
							break;
						case 60 < t && t <= 90:
							this.tickInterval = "months_days";
							break;
						case 30 < t && t <= 60:
							this.tickInterval = "week_days";
							break;
						case 2 < t && t <= 30:
							this.tickInterval = "days";
							break;
						case .1 < t && t <= 2:
							this.tickInterval = "hours";
							break;
						case t < .1:
							this.tickInterval = "minutes";
							break;
						default:
							this.tickInterval = "days"
					}
				}
			}, {
				key: "generateYearScale",
				value: function(t) {
					var e = t.firstVal,
						i = t.currentMonth,
						a = t.currentYear,
						n = t.daysWidthOnXAxis,
						s = t.numberOfYears,
						r = e.minYear,
						o = 0,
						l = new S.default(this.ctx),
						h = "year";
					if (1 < e.minDate && 0 < e.minMonth) {
						var c = l.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
						o = (l.determineDaysOfYear(e.minYear) - c + 1) * n, r = e.minYear + 1, this.timeScaleArray.push({
							position: o,
							value: r,
							unit: h,
							year: r,
							month: this.monthMod(i + 1)
						})
					} else 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({
						position: o,
						value: r,
						unit: h,
						year: a,
						month: this.monthMod(i + 1)
					});
					for (var u = r, d = o, f = 0; f < s; f++) u++, d = l.determineDaysOfYear(u - 1) * n + d, this.timeScaleArray
						.push({
							position: d,
							value: u,
							unit: h,
							year: u,
							month: 1
						})
				}
			}, {
				key: "generateMonthScale",
				value: function(t) {
					var e = t.firstVal,
						i = t.currentMonthDate,
						a = t.currentMonth,
						n = t.currentYear,
						s = t.daysWidthOnXAxis,
						r = t.numberOfMonths,
						o = a,
						l = 0,
						h = new S.default(this.ctx),
						c = "month",
						u = 0;
					if (1 < e.minDate) {
						l = (h.determineDaysOfMonths(a + 1, e.minYear) - i + 1) * s, o = this.monthMod(a + 1);
						var d = n + u,
							f = this.monthMod(o),
							p = o;
						0 === o && (c = "year", p = d, d += u += f = 1), this.timeScaleArray.push({
							position: l,
							value: p,
							unit: c,
							year: d,
							month: f
						})
					} else this.timeScaleArray.push({
						position: l,
						value: o,
						unit: c,
						year: n,
						month: this.monthMod(a)
					});
					for (var g = o + 1, x = l, v = 0, b = 1; v < r; v++, b++) {
						0 === (g = this.monthMod(g)) ? (c = "year", u += 1) : c = "month";
						var m = n + Math.floor(g / 12) + u;
						x = h.determineDaysOfMonths(g, m) * s + x;
						var y = 0 === g ? m : g;
						this.timeScaleArray.push({
							position: x,
							value: y,
							unit: c,
							year: m,
							month: 0 === g ? 1 : g
						}), g++
					}
				}
			}, {
				key: "generateDayScale",
				value: function(t) {
					var e = t.firstVal,
						i = t.currentMonth,
						a = t.currentYear,
						n = t.hoursWidthOnXAxis,
						s = t.numberOfDays,
						r = new S.default(this.ctx),
						o = "day",
						l = (24 - e.minHour) * n,
						h = e.minDate + 1,
						c = h,
						u = function(t, e, i) {
							return r.determineDaysOfMonths(e + 1, i) < t ? (o = "month", c = e += d = 1) : e
						},
						d = h,
						f = u(d, i, a);
					this.timeScaleArray.push({
						position: l,
						value: c,
						unit: o,
						year: a,
						month: this.monthMod(f),
						day: d
					});
					for (var p = l, g = 0; g < s; g++) {
						o = "day", f = u(d += 1, f, a + Math.floor(f / 12) + 0);
						var x = a + Math.floor(f / 12) + 0;
						p = 24 * n + p;
						var v = 1 === d ? this.monthMod(f) : d;
						this.timeScaleArray.push({
							position: p,
							value: v,
							unit: o,
							year: x,
							month: this.monthMod(f),
							day: v
						})
					}
				}
			}, {
				key: "generateHourScale",
				value: function(t) {
					var e = t.firstVal,
						i = t.currentDate,
						a = t.currentMonth,
						n = t.currentYear,
						s = t.minutesWidthOnXAxis,
						r = t.numberOfHours,
						o = new S.default(this.ctx),
						l = "hour",
						h = function(t, e) {
							return o.determineDaysOfMonths(e + 1, n) < t ? e += 1 : e
						},
						c = 60 - e.minMinute,
						u = c * s,
						d = e.minHour + 1,
						f = d + 1,
						p = i,
						g = h(p, a);
					this.timeScaleArray.push({
						position: u,
						value: d,
						unit: l,
						day: p,
						hour: f,
						year: n,
						month: this.monthMod(g)
					});
					for (var x, v, b = u, m = 0; m < r; m++) {
						if (l = "hour", 24 <= f) {
							f = 0, l = "day";
							var y = (x = p += 1, v = g, o.determineDaysOfMonths(v + 1, n) < x && (v += p = 1), {
								month: v,
								date: p
							});
							g = h(p, g = y.month)
						}
						var w = n + Math.floor(g / 12) + 0;
						b = 0 === f && 0 === m ? c * s : 60 * s + b;
						var k = 0 === f ? p : f;
						this.timeScaleArray.push({
							position: b,
							value: k,
							unit: l,
							hour: f,
							day: p,
							year: w,
							month: this.monthMod(g)
						}), f++
					}
				}
			}, {
				key: "generateMinuteScale",
				value: function(t) {
					var e = t.firstVal,
						i = t.currentHour,
						a = t.currentDate,
						n = t.currentMonth,
						s = t.currentYear,
						r = t.minutesWidthOnXAxis,
						o = t.numberOfMinutes,
						l = r - (60 - e.minMinute),
						h = e.minMinute + 1,
						c = h + 1,
						u = a,
						d = n,
						f = s,
						p = i;
					this.timeScaleArray.push({
						position: l,
						value: h,
						unit: "minute",
						day: u,
						hour: p,
						minute: c,
						year: f,
						month: this.monthMod(d)
					});
					for (var g = l, x = 0; x < o; x++) {
						60 <= c && (c = 0, 24 === (p += 1) && (p = 0));
						var v = s + Math.floor(d / 12) + 0;
						g = r + g;
						var b = c;
						this.timeScaleArray.push({
							position: g,
							value: b,
							unit: "minute",
							hour: p,
							minute: c,
							day: u,
							year: v,
							month: this.monthMod(d)
						}), c++
					}
				}
			}, {
				key: "createRawDateString",
				value: function(t, e) {
					var i = t.year;
					return i += "-" + ("0" + t.month.toString()).slice(-2), "day" === t.unit ? i += "day" === t.unit ? "-" +
						("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2), "hour" === t.unit ? i +=
						"hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(
							-2), i += "minute" === t.unit ? ":" + ("0" + e).slice(-2) + ":00.000Z" : ":00:00.000Z"
				}
			}, {
				key: "formatDates",
				value: function(t) {
					var o = this,
						l = this.w;
					return t.map(function(t) {
						var e = t.value.toString(),
							i = new S.default(o.ctx),
							a = o.createRawDateString(t, e),
							n = new Date(Date.parse(a));
						if (void 0 === l.config.xaxis.labels.format) {
							var s = "dd MMM",
								r = l.config.xaxis.labels.datetimeFormatter;
							"year" === t.unit && (s = r.year), "month" === t.unit && (s = r.month), "day" === t.unit && (s = r.day),
								"hour" === t.unit && (s = r.hour), "minute" === t.unit && (s = r.minute), e = i.formatDate(n, s, !0,
									!1)
						} else e = i.formatDate(n, l.config.xaxis.labels.format);
						return {
							dateString: a,
							position: t.position,
							value: e,
							unit: t.unit,
							year: t.year,
							month: t.month
						}
					})
				}
			}, {
				key: "removeOverlappingTS",
				value: function(a) {
					var n = new r.default(this.ctx),
						s = 0,
						t = a.map(function(t, e) {
							if (0 < e) {
								var i = n.getTextRects(a[s].value).width;
								return a[s].position + i + 10 < t.position ? (s = e, t) : null
							}
							return t
						});
					return t = t.filter(function(t) {
						return null !== t
					})
				}
			}, {
				key: "monthMod",
				value: function(t) {
					return t % 12
				}
			}]), e
		}();
		e.default = o
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			n = f(i(0)),
			s = f(i(133)),
			r = f(i(162)),
			o = f(i(165)),
			l = f(i(160)),
			h = f(i(163)),
			c = f(i(161)),
			u = f(i(164)),
			d = f(i(159));

		function f(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var p = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.ev = this.w.config.chart.events, this.localeValues = this.w.globals
					.locale.toolbar
			}
			return a(e, [{
				key: "createToolbar",
				value: function() {
					var t = this.w,
						e = document.createElement("div");
					e.setAttribute("class", "apexcharts-toolbar"), t.globals.dom.elWrap.appendChild(e), this.elZoom =
						document.createElement("div"), this.elZoomIn = document.createElement("div"), this.elZoomOut = document.createElement(
							"div"), this.elPan = document.createElement("div"), this.elSelection = document.createElement("div"),
						this.elZoomReset = document.createElement("div"), this.elCamera = document.createElement("div");
					var i = [];
					t.config.chart.toolbar.tools.download && i.push({
						el: this.elCamera,
						icon: d.default,
						title: this.localeValues.download,
						class: "apexcharts-download-icon"
					}), t.config.chart.toolbar.tools.selection && i.push({
						el: this.elSelection,
						icon: u.default,
						title: this.localeValues.selection,
						class: "apexcharts-selection-icon"
					}), t.config.chart.toolbar.tools.zoomin && t.config.chart.zoom.enabled && i.push({
						el: this.elZoomIn,
						icon: h.default,
						title: this.localeValues.zoomIn,
						class: "apexcharts-zoom-in-icon"
					}), t.config.chart.toolbar.tools.zoomout && t.config.chart.zoom.enabled && i.push({
						el: this.elZoomOut,
						icon: c.default,
						title: this.localeValues.zoomOut,
						class: "apexcharts-zoom-out-icon"
					}), t.config.chart.toolbar.tools.zoom && t.config.chart.zoom.enabled && i.push({
						el: this.elZoom,
						icon: o.default,
						title: this.localeValues.selectionZoom,
						class: "apexcharts-zoom-icon"
					}), t.config.chart.toolbar.tools.pan && t.config.chart.zoom.enabled && i.push({
						el: this.elPan,
						icon: r.default,
						title: this.localeValues.pan,
						class: "apexcharts-pan-icon"
					}), t.config.chart.toolbar.tools.reset && i.push({
						el: this.elZoomReset,
						icon: l.default,
						title: this.localeValues.reset,
						class: "apexcharts-reset-zoom-icon"
					});
					for (var a = 0; a < i.length; a++) n.default.setAttrs(i[a].el, {
						class: i[a].class,
						title: i[a].title
					}), i[a].el.innerHTML = i[a].icon, e.appendChild(i[a].el);
					t.globals.zoomEnabled ? this.elZoom.classList.add("selected") : t.globals.panEnabled ? this.elPan.classList
						.add("selected") : t.globals.selectionEnabled && this.elSelection.classList.add("selected"), this.addToolbarEventListeners()
				}
			}, {
				key: "addToolbarEventListeners",
				value: function() {
					this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener(
						"click", this.toggleSelection.bind(this)), this.elZoom.addEventListener("click", this.toggleZooming.bind(
						this)), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener(
						"click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(
						this)), this.elCamera.addEventListener("click", this.downloadSVG.bind(this))
				}
			}, {
				key: "toggleSelection",
				value: function() {
					this.toggleOtherControls(), this.w.globals.selectionEnabled = !this.w.globals.selectionEnabled, this.elSelection
						.classList.contains("selected") ? this.elSelection.classList.remove("selected") : this.elSelection.classList
						.add("selected")
				}
			}, {
				key: "toggleZooming",
				value: function() {
					this.toggleOtherControls(), this.w.globals.zoomEnabled = !this.w.globals.zoomEnabled, this.elZoom.classList
						.contains("selected") ? this.elZoom.classList.remove("selected") : this.elZoom.classList.add("selected")
				}
			}, {
				key: "getToolbarIconsReference",
				value: function() {
					var t = this.w;
					this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan ||
						(this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection =
							t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))
				}
			}, {
				key: "enableZooming",
				value: function() {
					this.toggleOtherControls(), this.w.globals.zoomEnabled = !0, this.elZoom && this.elZoom.classList.add(
						"selected"), this.elPan && this.elPan.classList.remove("selected")
				}
			}, {
				key: "enablePanning",
				value: function() {
					this.toggleOtherControls(), this.w.globals.panEnabled = !0, this.elPan && this.elPan.classList.add(
						"selected"), this.elZoom && this.elZoom.classList.remove("selected")
				}
			}, {
				key: "togglePanning",
				value: function() {
					this.toggleOtherControls(), this.w.globals.panEnabled = !this.w.globals.panEnabled, this.elPan.classList.contains(
						"selected") ? this.elPan.classList.remove("selected") : this.elPan.classList.add("selected")
				}
			}, {
				key: "toggleOtherControls",
				value: function() {
					var t = this.w;
					t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(),
						this.elPan && this.elPan.classList.remove("selected"), this.elSelection && this.elSelection.classList.remove(
							"selected"), this.elZoom && this.elZoom.classList.remove("selected")
				}
			}, {
				key: "handleZoomIn",
				value: function() {
					var t = this.w,
						e = (t.globals.minX + t.globals.maxX) / 2,
						i = (t.globals.minX + e) / 2,
						a = (t.globals.maxX + e) / 2;
					t.globals.disableZoomIn || this.zoomUpdateOptions(i, a)
				}
			}, {
				key: "handleZoomOut",
				value: function() {
					var t = this.w;
					if (!("datetime" === t.config.xaxis.type && new Date(t.globals.minX).getUTCFullYear() < 1e3)) {
						var e = (t.globals.minX + t.globals.maxX) / 2,
							i = t.globals.minX - (e - t.globals.minX),
							a = t.globals.maxX - (e - t.globals.maxX);
						t.globals.disableZoomOut || this.zoomUpdateOptions(i, a)
					}
				}
			}, {
				key: "zoomUpdateOptions",
				value: function(t, e) {
					var i = {
							min: t,
							max: e
						},
						a = this.getBeforeZoomRange(i);
					null !== a && (i = a.xaxis), this.ctx.updateOptionsInternal({
						xaxis: i
					}, !1, !0), this.zoomCallback({
						min: t,
						max: e
					})
				}
			}, {
				key: "zoomCallback",
				value: function(t, e) {
					"function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, {
						xaxis: t,
						yaxis: e
					})
				}
			}, {
				key: "getBeforeZoomRange",
				value: function(t, e) {
					var i = null;
					return "function" == typeof this.ev.beforeZoom && (i = this.ev.beforeZoom(this, {
						xaxis: t,
						yaxis: e
					})), i
				}
			}, {
				key: "downloadSVG",
				value: function() {
					var t = new s.default(this.ctx);
					t.exportToSVG()
				}
			}, {
				key: "handleZoomReset",
				value: function(t) {
					this.ctx.getSyncedCharts().forEach(function(t) {
						var e = t.w;
						e.globals.minX !== e.globals.initialminX && e.globals.maxX !== e.globals.initialmaxX && (t.revertDefaultAxisMinMax(),
							e.globals.zoomed = !1, t.updateSeriesInternal(e.globals.initialSeries, !0))
					})
				}
			}, {
				key: "destroy",
				value: function() {
					this.elZoomReset && (this.elZoomReset.removeEventListener("click", this.handleZoomReset.bind(this)), this
							.elSelection.removeEventListener("click", this.toggleSelection.bind(this)), this.elZoom.removeEventListener(
								"click", this.toggleZooming.bind(this)), this.elZoomIn.removeEventListener("click", this.handleZoomIn.bind(
								this)), this.elZoomOut.removeEventListener("click", this.handleZoomOut.bind(this)), this.elPan.removeEventListener(
								"click", this.togglePanning.bind(this)), this.elCamera.removeEventListener("click", this.downloadSVG.bind(
								this))), this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection =
						null, this.elZoomReset = null, this.elCamera = null
				}
			}]), e
		}();
		t.exports = p
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = n(i(0)),
			g = n(i(26));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ttCtx = t, this.ctx = t.ctx, this.w = t.w
			}
			return a(e, [{
				key: "moveXCrosshairs",
				value: function(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
						i = this.ttCtx,
						a = this.w,
						n = i.getElXCrosshairs(),
						s = t - i.xcrosshairsWidth / 2,
						r = a.globals.labels.slice().length;
					if (null !== e && (s = a.globals.gridWidth / r * e), "tickWidth" === a.config.xaxis.crosshairs.width ||
						"barWidth" === a.config.xaxis.crosshairs.width ? s + i.xcrosshairsWidth > a.globals.gridWidth && (s = a.globals
							.gridWidth - i.xcrosshairsWidth) : null !== e && (s += a.globals.gridWidth / r / 2), s < 0 && (s = 0),
						s > a.globals.gridWidth && (s = a.globals.gridWidth), null !== n && (n.setAttribute("x", s), n.classList
							.add("active")), i.blxaxisTooltip) {
						var o = s;
						"tickWidth" !== a.config.xaxis.crosshairs.width && "barWidth" !== a.config.xaxis.crosshairs.width || (o =
							s + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(o)
					}
				}
			}, {
				key: "moveYCrosshairs",
				value: function(t) {
					var e = this.ttCtx;
					null !== e.ycrosshairs && (s.default.setAttrs(e.ycrosshairs, {
						y1: t,
						y2: t
					}), s.default.setAttrs(e.ycrosshairsHidden, {
						y1: t,
						y2: t
					}))
				}
			}, {
				key: "moveXAxisTooltip",
				value: function(t) {
					var e = this.w,
						i = this.ttCtx;
					if (null !== i.xaxisTooltip) {
						i.xaxisTooltip.classList.add("active");
						var a = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1;
						if (t -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t)) {
							t += e.globals.translateX;
							var n;
							n = new s.default(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth =
								n.width + "px", i.xaxisTooltip.style.left = t + "px", i.xaxisTooltip.style.top = a + "px"
						}
					}
				}
			}, {
				key: "moveYAxisTooltip",
				value: function(t) {
					var e = this.w,
						i = this.ttCtx;
					null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
					var a = parseInt(i.ycrosshairsHidden.getAttribute("y1")),
						n = e.globals.translateY + a,
						s = i.yaxisTTEls[t].getBoundingClientRect().height,
						r = e.globals.translateYAxisX[t] - 2;
					e.config.yaxis[t].opposite && (r -= 26), n -= s / 2, e.globals.ignoreYAxisIndexes.includes(t) ? i.yaxisTTEls[
						t].classList.remove("active") : (i.yaxisTTEls[t].classList.add("active"), i.yaxisTTEls[t].style.top = n +
						"px", i.yaxisTTEls[t].style.left = r + e.config.yaxis[t].tooltip.offsetX + "px")
				}
			}, {
				key: "moveTooltip",
				value: function(t, e) {
					var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
						a = this.w,
						n = this.ttCtx,
						s = n.getElTooltip(),
						r = n.tooltipRect,
						o = null !== i ? parseInt(i) : 1,
						l = parseInt(t) + o + 5,
						h = parseInt(e) + o / 2;
					if (l > a.globals.gridWidth / 2 && (l = l - r.ttWidth - o - 15), l > a.globals.gridWidth - r.ttWidth - 10 &&
						(l = a.globals.gridWidth - r.ttWidth), l < -20 && (l = -20), a.config.tooltip.followCursor) {
						var c = n.getElGrid().getBoundingClientRect();
						h = n.e.clientY - c.top - r.ttHeight / 2
					}
					r.ttHeight + h > a.globals.gridHeight && (h = a.globals.gridHeight - r.ttHeight + a.globals.translateY),
						h < 0 && (h = 0), isNaN(l) || (l += a.globals.translateX, s.style.left = l + "px", s.style.top = h +
							"px")
				}
			}, {
				key: "moveMarkers",
				value: function(t, e) {
					var i = this.w,
						a = this.ttCtx;
					if (0 < i.config.markers.size)
						for (var n = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='" + t +
								"'] .apexcharts-marker"), s = 0; s < n.length; s++) parseInt(n[s].getAttribute("rel")) === e && (a.marker
							.resetPointsSize(), a.marker.enlargeCurrentPoint(e, n[s]));
					else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t)
				}
			}, {
				key: "moveDynamicPointOnHover",
				value: function(t, e) {
					var i, a, n = this.w,
						s = this.ttCtx,
						r = n.globals.pointsArray,
						o = n.config.markers.hover.size;
					i = r[e][t][0], a = r[e][t][1] ? r[e][t][1] : 0;
					var l = n.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='" + e +
						"'] .apexcharts-series-markers circle");
					l.setAttribute("r", o), l.setAttribute("cx", i), l.setAttribute("cy", a), this.moveXCrosshairs(i), s.fixedTooltip ||
						this.moveTooltip(i, a, o)
				}
			}, {
				key: "moveDynamicPointsOnHover",
				value: function(t) {
					var e, i = this.ttCtx,
						a = i.w,
						n = 0,
						s = 0,
						r = a.globals.pointsArray;
					e = new g.default(this.ctx).getActiveSeriesIndex();
					var o = a.config.markers.hover.size;
					r[e] && (n = r[e][t][0], s = r[e][t][1]);
					var l = null,
						h = i.getAllMarkers();
					if (null !== (l = null !== h ? h : a.globals.dom.baseEl.querySelectorAll(
							".apexcharts-series-markers circle")))
						for (var c = 0; c < l.length; c++) {
							var u = r[c];
							if (u && u.length) {
								var d = r[c][t][1];
								l[c].setAttribute("cx", n);
								var f = parseInt(l[c].parentNode.parentNode.parentNode.getAttribute("data:realIndex"));
								null !== d ? (l[f] && l[f].setAttribute("r", o), l[f] && l[f].setAttribute("cy", d)) : l[f] && l[f].setAttribute(
									"r", 0)
							}
						}
					if (this.moveXCrosshairs(n), !i.fixedTooltip) {
						var p = s || a.globals.gridHeight;
						this.moveTooltip(n, p, o)
					}
				}
			}, {
				key: "moveStickyTooltipOverBars",
				value: function(t) {
					var e, i = this.w,
						a = this.ttCtx,
						n = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='1'] path[j='" + t +
							"'], .apexcharts-candlestick-series .apexcharts-series[rel='1'] path[j='" + t + "']"),
						s = n ? parseFloat(n.getAttribute("cx")) : 0,
						r = n ? parseFloat(n.getAttribute("barWidth")) : 0;
					i.globals.dataXY ? s -= r / 2 : (s = a.xAxisTicksPositions[t - 1] + a.dataPointsDividedWidth / 2, isNaN(s) &&
						(s = a.xAxisTicksPositions[t] - a.dataPointsDividedWidth / 2));
					var o = a.getElGrid().getBoundingClientRect();
					if (e = a.e.clientY - o.top - a.tooltipRect.ttHeight / 2, this.moveXCrosshairs(s), !a.fixedTooltip) {
						var l = e || i.globals.gridHeight;
						this.moveTooltip(s, l)
					}
				}
			}]), e
		}();
		t.exports = r
	}, function(t, e, i) {
		"use strict";
		var a = function() {
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var a = e[i];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
						t, a.key, a)
				}
			}
			return function(t, e, i) {
				return e && a(t.prototype, e), i && a(t, i), t
			}
		}();
		var n = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx
			}
			return a(e, [{
				key: "getNearestValues",
				value: function(t) {
					var e = t.hoverArea,
						i = t.elGrid,
						a = t.clientX,
						n = t.clientY,
						s = t.hasBars,
						r = this.w,
						o = r.globals.gridWidth,
						l = o / (r.globals.dataPoints - 1),
						h = i.getBoundingClientRect();
					(s && r.globals.comboCharts || s) && (l = o / r.globals.dataPoints);
					var c = a - h.left,
						u = n - h.top;
					c < 0 || u < 0 || c > r.globals.gridWidth || u > r.globals.gridHeight ? (e.classList.remove(
						"hovering-zoom"), e.classList.remove("hovering-pan")) : r.globals.zoomEnabled ? (e.classList.remove(
						"hovering-pan"), e.classList.add("hovering-zoom")) : r.globals.panEnabled && (e.classList.remove(
						"hovering-zoom"), e.classList.add("hovering-pan"));
					var d = Math.round(c / l);
					s && (d = Math.ceil(c / l), d -= 1);
					for (var f, p = null, g = null, x = [], v = 0; v < r.globals.seriesXvalues.length; v++) x.push([r.globals
						.seriesXvalues[v][0] - 1e-6
					].concat(r.globals.seriesXvalues[v]));
					return x = x.map(function(t) {
						return t.filter(function(t) {
							return t
						})
					}), f = r.globals.seriesYvalues.map(function(t) {
						return t.filter(function(t) {
							return t
						})
					}), r.globals.dataXY && (p = (g = this.closestInMultiArray(c, u, x, f)).index, d = g.j, null !== p && (x =
						r.globals.seriesXvalues[p], d = (g = this.closestInArray(c, x)).index)), (!d || d < 1) && (d = 0), {
						capturedSeries: p,
						j: d,
						hoverX: c,
						hoverY: u
					}
				}
			}, {
				key: "closestInMultiArray",
				value: function(r, o, l, h) {
					var t = this.w,
						e = 0,
						c = null,
						u = -1;
					1 < t.globals.series.length ? e = this.getFirstActiveXArray(l) : c = 0;
					var i = h[e][0],
						a = l[e][0],
						d = Math.abs(r - a),
						f = Math.abs(o - i),
						p = f + d;
					return h.map(function(t, s) {
						t.map(function(t, e) {
							var i = Math.abs(o - h[s][e]),
								a = Math.abs(r - l[s][e]),
								n = a + i;
							n < p && (p = n, d = a, f = i, c = s, u = e)
						})
					}), {
						index: c,
						j: u
					}
				}
			}, {
				key: "getFirstActiveXArray",
				value: function(t) {
					for (var e = 0, i = t.map(function(t, e) {
							return 0 < t.length ? e : -1
						}), a = 0; a < i.length; a++)
						if (-1 !== i[a]) {
							e = i[a];
							break
						} return e
				}
			}, {
				key: "closestInArray",
				value: function(t, e) {
					for (var i = e[0], a = null, n = Math.abs(t - i), s = 0; s < e.length; s++) {
						var r = Math.abs(t - e[s]);
						r < n && (n = r, i = e[s], a = s)
					}
					return {
						index: a
					}
				}
			}, {
				key: "isXoverlap",
				value: function(t) {
					var e = [],
						i = this.w.globals.seriesX.filter(function(t) {
							return void 0 !== t[0]
						});
					if (0 < i.length)
						for (var a = 0; a < i.length - 1; a++) void 0 !== i[a][t] && void 0 !== i[a + 1][t] && i[a][t] !== i[a +
							1][t] && e.push("unEqual");
					return 0 === e.length
				}
			}, {
				key: "isinitialSeriesSameLen",
				value: function() {
					for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)
						if (e[i].data.length !== e[i + 1].data.length) {
							t = !1;
							break
						} return t
				}
			}, {
				key: "isSeriesSameLen",
				value: function() {
					for (var t = !0, e = this.filteredSeriesX(), i = 0; i < e.length - 1; i++)
						if (e[i][0] !== e[i + 1][0]) {
							t = !1;
							break
						} return t
				}
			}, {
				key: "filteredSeriesX",
				value: function() {
					var t = this.w.globals.seriesX.map(function(t, e) {
						return 0 < t.length ? t : []
					});
					return t
				}
			}, {
				key: "getBarsHeight",
				value: function(t) {
					return [].concat(function(t) {
						if (Array.isArray(t)) {
							for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
							return i
						}
						return Array.from(t)
					}(t)).reduce(function(t, e) {
						return t + e.getBBox().height
					}, 0)
				}
			}, {
				key: "toggleAllTooltipSeriesGroups",
				value: function(t) {
					var e = this.w,
						i = this.ttCtx;
					0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(
						".apexcharts-tooltip-series-group"));
					for (var a = i.allTooltipSeriesGroups, n = 0; n < a.length; n++) a[n].style.display = "enable" === t ? (a[
						n].classList.add("active"), e.config.tooltip.items.display) : (a[n].classList.remove("active"), "none")
				}
			}]), e
		}();
		t.exports = n
	}, function(t, e) {
		t.exports = {
			name: "en",
			options: {
				months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
					"November", "December"
				],
				shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				toolbar: {
					download: "Download SVG",
					selection: "Selection",
					selectionZoom: "Selection Zoom",
					zoomIn: "Zoom In",
					zoomOut: "Zoom Out",
					pan: "Panning",
					reset: "Reset Zoom"
				}
			}
		}
	}, function(t, e, i) {
		"use strict";
		i(112), t.exports = i(4).Array.find
	}, function(t, e, i) {
		"use strict";
		i(72), i(113), t.exports = i(4).Array.from
	}, function(t, e, i) {
		"use strict";
		i(118), t.exports = i(4).Array.includes
	}, function(t, e, i) {
		"use strict";
		i(115), t.exports = i(4).Array.reduce
	}, function(t, e, i) {
		"use strict";
		i(71), i(72), i(123), i(116), i(119), i(120), t.exports = i(4).Promise
	}, function(t, e, i) {
		"use strict";
		i(117), i(71), i(121), i(122), t.exports = i(4).Symbol
	}, function(t, e, i) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
					typeof t
			},
			a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = n(i(130)),
			o = n(i(25)),
			l = n(i(131)),
			h = n(i(50)),
			c = n(i(132)),
			u = n(i(75)),
			d = n(i(76)),
			f = n(i(46)),
			p = n(i(30)),
			g = n(i(134)),
			x = n(i(136)),
			v = n(i(26)),
			b = n(i(137)),
			m = n(i(147)),
			y = n(i(1)),
			w = n(i(139)),
			k = n(i(138)),
			S = n(i(78)),
			A = n(i(51));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		i(151), i(150), i(152), i(149), i(154), i(153), i(157), i(155);
		var C = i(81);
		window.Apex = {};
		var P = function() {
			function n(t, e) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, n), this.opts = e, (this.ctx = this).w = new l.default(e).init(), this.el = t, this.w.globals.cuid = (
						Math.random() + 1).toString(36).substring(4), this.w.globals.chartID = this.w.config.chart.id ? this.w.config
					.chart.id : this.w.globals.cuid, this.initModules(), this.responsiveConfigOverrided = !1, this.create = y.default
					.bind(this.create, this), this.windowResizeHandler = this.windowResize.bind(this)
			}
			return a(n, [{
				key: "render",
				value: function() {
					var n = this;
					return new Promise(function(t, e) {
						if (null !== n.el) {
							void 0 === Apex._chartInstances && (Apex._chartInstances = []), n.w.config.chart.id && Apex._chartInstances
								.push({
									id: n.w.globals.chartID,
									group: n.w.config.chart.group,
									chart: n
								}), n.setLocale(n.w.config.chart.defaultLocale);
							var i = n.w.config.chart.events.beforeMount;
							"function" == typeof i && i(n, n.w), n.fireEvent("beforeMount", [n, n.w]), window.addEventListener(
								"resize", n.windowResizeHandler);
							var a = n.create(n.w.config.series);
							if (!a) return t(n);
							n.mount(a).then(function() {
								n.animations.showDelayedElements(), t(a), "function" == typeof n.w.config.chart.events.mounted &&
									n.w.config.chart.events.mounted(n, n.w), n.fireEvent("mounted", [n, n.w])
							}).catch(function(t) {
								e(t)
							})
						} else e(new Error("Element not found"))
					})
				}
			}, {
				key: "initModules",
				value: function() {
					this.animations = new o.default(this.ctx), this.annotations = new s.default(this.ctx), this.core = new c.default(
							this.el, this), this.coreUtils = new u.default(this), this.config = new h.default({}), this.crosshairs =
						new d.default(this.ctx), this.options = new A.default, this.responsive = new x.default(this.ctx), this.series =
						new v.default(this.ctx), this.theme = new b.default(this.ctx), this.formatters = new p.default(this.ctx),
						this.titleSubtitle = new k.default(this.ctx), this.legend = new g.default(this.ctx), this.toolbar = new S
						.default(this.ctx), this.dimensions = new f.default(this.ctx), this.zoomPanSelection = new w.default(
							this.ctx), this.w.globals.tooltip = new m.default(this.ctx)
				}
			}, {
				key: "addEventListener",
				value: function(t, e) {
					var i = this.w;
					i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e]
				}
			}, {
				key: "removeEventListener",
				value: function(t, e) {
					var i = this.w;
					if (i.globals.events.hasOwnProperty(t)) {
						var a = i.globals.events[t].indexOf(e); - 1 !== a && i.globals.events[t].splice(a, 1)
					}
				}
			}, {
				key: "fireEvent",
				value: function(t, e) {
					var i = this.w;
					if (i.globals.events.hasOwnProperty(t)) {
						e && e.length || (e = []);
						for (var a = i.globals.events[t], n = a.length, s = 0; s < n; s++) a[s].apply(null, e)
					}
				}
			}, {
				key: "create",
				value: function(t) {
					var e = this.w;
					this.initModules();
					var i = this.w.globals;
					if (i.noData = !1, this.responsiveConfigOverrided || this.responsive.checkResponsiveConfig(), null ===
						this.el) return null;
					this.core.setupElements(), (0 === t.length || 1 === t.length && t[0].data && 0 === t[0].data.length) &&
						this.series.handleNoData(), this.setupEventHandlers(), this.core.parseData(t), this.theme.init(), this.formatters
						.setLabelFormatters(), this.titleSubtitle.draw(), this.legend.init(), i.axisCharts && (this.core.coreCalculations(),
							this.formatters.setLabelFormatters()), this.formatters.heatmapLabelFormatters(), this.dimensions.plotCoords();
					var a = this.core.xySettings();
					this.core.createGridMask();
					var n = this.core.plotChartType(t, a);
					this.core.shiftGraphPosition();
					var s = {
						plot: {
							left: e.globals.translateX,
							top: e.globals.translateY,
							width: e.globals.gridWidth,
							height: e.globals.gridHeight
						}
					};
					return {
						elGraph: n,
						xyRatios: a,
						elInner: e.globals.dom.elGraphical,
						dimensions: s
					}
				}
			}, {
				key: "mount",
				value: function() {
					var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
						u = this,
						d = u.w;
					return new Promise(function(t, e) {
						if (null === u.el) return e(new Error("Not enough data to display or target element not found"));
						if ((null === c || d.globals.allSeriesCollapsed) && u.series.handleNoData(), u.core.drawAxis(d.config.chart
								.type, c.xyRatios), "back" === d.config.grid.position && u.core.drawGrid(), "back" === d.config.annotations
							.position && u.annotations.drawAnnotations(), u.animations.showDelayedElements(), c.elGraph instanceof Array
						)
							for (var i = 0; i < c.elGraph.length; i++) d.globals.dom.elGraphical.add(c.elGraph[i]);
						else d.globals.dom.elGraphical.add(c.elGraph);
						if ("front" === d.config.grid.position && u.core.drawGrid(), "front" === d.config.xaxis.crosshairs.position &&
							u.crosshairs.drawXCrosshairs(), "front" === d.config.yaxis[0].crosshairs.position && u.crosshairs.drawYCrosshairs(),
							"front" === d.config.annotations.position && u.annotations.drawAnnotations(), !d.globals.noData) {
							if (d.config.tooltip.enabled && !d.globals.noData && u.w.globals.tooltip.drawTooltip(c.xyRatios), d.globals
								.axisCharts && d.globals.dataXY)(d.config.chart.zoom.enabled || d.config.chart.selection.enabled ||
								d.config.chart.pan.enabled) && u.zoomPanSelection.init({
								xyRatios: c.xyRatios
							});
							else {
								var a = d.config.chart.toolbar.tools;
								a.zoom = !1, a.zoomin = !1, a.zoomout = !1, a.selection = !1, a.pan = !1, a.reset = !1
							}
							d.config.chart.toolbar.show && !d.globals.allSeriesCollapsed && u.toolbar.createToolbar()
						}
						if (0 < d.globals.memory.methodsToExec.length) {
							var n = !0,
								s = !1,
								r = void 0;
							try {
								for (var o, l = d.globals.memory.methodsToExec[Symbol.iterator](); !(n = (o = l.next()).done); n = !
									0) {
									var h = o.value;
									h.method(h.params, !1, h.context)
								}
							} catch (t) {
								s = !0, r = t
							} finally {
								try {
									!n && l.return && l.return()
								} finally {
									if (s) throw r
								}
							}
						}
						t(u)
					})
				}
			}, {
				key: "updateOptions",
				value: function(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
						i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
						a = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
					return t.series && this.revertDefaultAxisMinMax(), t.xaxis && (t.xaxis.min || t.xaxis.max) && this.forceXAxisUpdate(
						t), this.updateOptionsInternal(t, e, i, a)
				}
			}, {
				key: "updateOptionsInternal",
				value: function(i) {
					var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
						n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
						s = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
					this.getSyncedCharts().forEach(function(t) {
						var e = t.w;
						return e.config.chart.animations.dynamicAnimation.enabled = n, a || (e.globals.resized = !0, e.globals
							.dataChanged = !0, n && t.w.globals.initialConfig.chart.animations.dynamicAnimation.enabled && t.series
							.getPreviousPaths()), i && "object" === (void 0 === i ? "undefined" : r(i)) && (t.responsive.checkResponsiveConfig(),
							t.responsiveConfigOverrided = !0, t.config = new h.default(i), i = u.default.extendArrayProps(t.config,
								i), e.config = y.default.extend(e.config, i), s && (e.globals.initialConfig = y.default.extend({},
								e.config), e.globals.initialSeries = JSON.parse(JSON.stringify(e.config.series)))), t.update()
					})
				}
			}, {
				key: "updateSeries",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
						e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
						i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
					return this.revertDefaultAxisMinMax(), this.updateSeriesInternal(t, e, i)
				}
			}, {
				key: "updateSeriesInternal",
				value: function(t, e) {
					var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
						a = this.w;
					return this.w.config.chart.animations.dynamicAnimation.enabled = e, a.globals.dataChanged = !0, e && this
						.series.getPreviousPaths(), a.config.series = t.slice(), i && (a.globals.initialSeries = JSON.parse(JSON
							.stringify(a.config.series))), this.update()
				}
			}, {
				key: "getSyncedCharts",
				value: function() {
					var t = this.getGroupedCharts(),
						e = [this];
					return t.length && (e = [], t.forEach(function(t) {
						e.push(t)
					})), e
				}
			}, {
				key: "getGroupedCharts",
				value: function() {
					var e = this;
					return Apex._chartInstances.filter(function(t) {
						if (t.group) return !0
					}).map(function(t) {
						return e.w.config.chart.group === t.group ? t.chart : null
					})
				}
			}, {
				key: "appendData",
				value: function(t) {
					var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
						i = this;
					i.w.globals.dataChanged = !0, i.series.getPreviousPaths();
					for (var a = i.w.config.series.slice(), n = 0; n < a.length; n++)
						if (void 0 !== t[n])
							for (var s = 0; s < t[n].data.length; s++) a[n].data.push(t[n].data[s]);
					return i.w.config.series = a, e && (i.w.globals.initialSeries = JSON.parse(JSON.stringify(i.w.config.series))),
						this.update()
				}
			}, {
				key: "update",
				value: function() {
					var a = this,
						n = this;
					return new Promise(function(t, e) {
						n.clear();
						var i = n.create(n.w.config.series);
						if (!i) return t(n);
						n.mount(i).then(function() {
							"function" == typeof n.w.config.chart.events.updated && n.w.config.chart.events.updated(n, n.w), n.fireEvent(
								"updated", [a, a.w]), n.w.globals.isDirty = !0, t(n)
						}).catch(function(t) {
							e(t)
						})
					})
				}
			}, {
				key: "forceXAxisUpdate",
				value: function(t) {
					var e = this.w;
					void 0 !== t.xaxis.min && (e.config.xaxis.min = t.xaxis.min, e.globals.lastXAxis.min = t.xaxis.min), void 0 !==
						t.xaxis.max && (e.config.xaxis.max = t.xaxis.max, e.globals.lastXAxis.max = t.xaxis.max)
				}
			}, {
				key: "revertDefaultAxisMinMax",
				value: function() {
					var i = this.w;
					i.config.xaxis.min = i.globals.lastXAxis.min, i.config.xaxis.max = i.globals.lastXAxis.max, i.config.yaxis
						.map(function(t, e) {
							i.globals.zoomed && void 0 !== i.globals.lastYAxis[e] && (t.min = i.globals.lastYAxis[e].min, t.max =
								i.globals.lastYAxis[e].max)
						})
				}
			}, {
				key: "clear",
				value: function() {
					this.zoomPanSelection.destroy(), this.toolbar && this.toolbar.destroy(), this.animations = null, this.annotations =
						null, this.core = null, this.series = null, this.responsive = null, this.theme = null, this.formatters =
						null, this.titleSubtitle = null, this.legend = null, this.dimensions = null, this.options = null, this.crosshairs =
						null, this.zoomPanSelection = null, this.toolbar = null, this.w.globals.tooltip = null, this.clearDomElements()
				}
			}, {
				key: "clearDomElements",
				value: function() {
					var t = this.w.globals.dom;
					if (null !== this.el)
						for (; this.el.firstChild;) this.el.removeChild(this.el.firstChild);
					t.Paper.remove(), t.elWrap = null, t.elGraphical = null, t.elLegendWrap = null, t.baseEl = null, t.elGridRect =
						null, t.elGridRectMask = null, t.elDefs = null
				}
			}, {
				key: "destroy",
				value: function() {
					this.clear(), window.removeEventListener("resize", this.windowResizeHandler)
				}
			}, {
				key: "setupBrushHandler",
				value: function() {
					var t = this,
						e = this.w;
					if (e.config.chart.brush.enabled && "function" != typeof e.config.chart.events.selection) {
						var i = n.getChartByID(e.config.chart.brush.target);
						i.w.globals.brushSource = this;
						var a = function() {
							t.updateOptionsInternal({
								chart: {
									selection: {
										xaxis: {
											min: i.w.globals.minX,
											max: i.w.globals.maxX
										}
									}
								}
							}, !1, !1)
						};
						"function" != typeof i.w.config.chart.events.zoomed && (i.w.config.chart.events.zoomed = function() {
							a()
						}), "function" != typeof i.w.config.chart.events.scrolled && (i.w.config.chart.events.scrolled =
							function() {
								a()
							}), e.config.chart.events.selection = function(t, e) {
							i.updateOptionsInternal({
								xaxis: {
									min: e.xaxis.min,
									max: e.xaxis.max
								}
							}, !1, !1)
						}
					}
				}
			}, {
				key: "setupEventHandlers",
				value: function() {
					var e = this.w,
						i = this,
						t = e.globals.dom.baseEl.querySelector(e.globals.chartClass),
						a = !0,
						n = !1,
						s = void 0;
					try {
						for (var r, o = ["mousedown", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"][Symbol.iterator]
								(); !(a = (r = o.next()).done); a = !0) {
							var l = r.value;
							t.addEventListener(l, function(t) {
								"mousedown" === t.type && 1 === t.which || ("mouseup" === t.type && 1 === t.which || "touchend" ===
									t.type) && ("function" == typeof e.config.chart.events.click && e.config.chart.events.click(t, i,
									e), i.fireEvent("click", [t, i, e]))
							}, !1)
						}
					} catch (t) {
						n = !0, s = t
					} finally {
						try {
							!a && o.return && o.return()
						} finally {
							if (n) throw s
						}
					}
					this.setupBrushHandler()
				}
			}, {
				key: "addXaxisAnnotation",
				value: function(t) {
					var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
						i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
						a = this;
					i && (a = i), a.annotations.addXaxisAnnotationExternal(t, e, a)
				}
			}, {
				key: "addYaxisAnnotation",
				value: function(t) {
					var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
						i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
						a = this;
					i && (a = i), a.annotations.addYaxisAnnotationExternal(t, e, a)
				}
			}, {
				key: "addPointAnnotation",
				value: function(t) {
					var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
						i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
						a = this;
					i && (a = i), a.annotations.addPointAnnotationExternal(t, e, a)
				}
			}, {
				key: "addText",
				value: function(t) {
					var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
						i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
						a = this;
					i && (a = i), a.annotations.addText(t, e, a)
				}
			}, {
				key: "getChartArea",
				value: function() {
					return this.paper().select(".apexcharts-inner")
				}
			}, {
				key: "getSeriesTotalXRange",
				value: function(t, e) {
					return this.coreUtils.getSeriesTotalsXRange(t, e)
				}
			}, {
				key: "getSeriesTotal",
				value: function() {
					return this.w.globals.seriesTotals
				}
			}, {
				key: "setLocale",
				value: function(t) {
					this.setCurrentLocaleValues(t)
				}
			}, {
				key: "setCurrentLocaleValues",
				value: function(e) {
					var t = this.w.config.chart.locales;
					window.Apex.chart && window.Apex.chart.locales && 0 < window.Apex.chart.locales.length && (t = this.w.config
						.chart.locales.concat(window.Apex.chart.locales));
					var i = t.find(function(t) {
						return t.name === e
					});
					if (!i) throw new Error(
						"Wrong locale name provided. Please make sure you set the correct locale name in options");
					var a = y.default.extend(C, i);
					this.w.globals.locale = a.options
				}
			}, {
				key: "paper",
				value: function() {
					return this.w.globals.dom.Paper
				}
			}, {
				key: "windowResize",
				value: function() {
					var t = this;
					clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
						t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.update()
					}, 150)
				}
			}], [{
				key: "initOnLoad",
				value: function() {
					for (var t = document.querySelectorAll("[data-apexcharts]"), e = 0; e < t.length; e++) {
						new n(t[e], JSON.parse(t[e].getAttribute("data-options"))).render()
					}
				}
			}, {
				key: "exec",
				value: function(t, e, i) {
					var a = this.getChartByID(t);
					if (a) switch (e) {
						case "updateOptions":
							return a.updateOptions(i);
						case "updateSeries":
							return a.updateSeries(i);
						case "appendData":
							return a.appendData(i);
						case "addXaxisAnnotation":
							return a.addXaxisAnnotation(i);
						case "addYaxisAnnotation":
							return a.addYaxisAnnotation(i);
						case "addPointAnnotation":
							return a.addPointAnnotation(i);
						case "destroy":
							return a.destroy()
					}
				}
			}, {
				key: "merge",
				value: function(t, e) {
					return y.default.extend(t, e)
				}
			}, {
				key: "getChartByID",
				value: function(e) {
					return Apex._chartInstances.find(function(t) {
						return t.id === e
					}).chart
				}
			}]), n
		}();
		t.exports = P
	}, function(t, e, i) {
		"use strict";
		t.exports = function(t, e, i, a) {
			if (!(t instanceof e) || void 0 !== a && a in t) throw TypeError(i + ": incorrect invocation!");
			return t
		}
	}, function(t, e, i) {
		"use strict";
		var m = i(14),
			y = i(36),
			w = i(29),
			k = i(23),
			a = i(93);
		t.exports = function(u, t) {
			var d = 1 == u,
				f = 2 == u,
				p = 3 == u,
				g = 4 == u,
				x = 6 == u,
				v = 5 == u || x,
				b = t || a;
			return function(t, e, i) {
				for (var a, n, s = w(t), r = y(s), o = m(e, i, 3), l = k(r.length), h = 0, c = d ? b(t, l) : f ? b(t, 0) :
						void 0; h < l; h++)
					if ((v || h in r) && (n = o(a = r[h], h, s), u))
						if (d) c[h] = n;
						else if (n) switch (u) {
					case 3:
						return !0;
					case 5:
						return a;
					case 6:
						return h;
					case 2:
						c.push(a)
				} else if (g) return !1;
				return x ? -1 : p || g ? g : c
			}
		}
	}, function(t, e, i) {
		"use strict";
		var c = i(17),
			u = i(29),
			d = i(36),
			f = i(23);
		t.exports = function(t, e, i, a, n) {
			c(e);
			var s = u(t),
				r = d(s),
				o = f(s.length),
				l = n ? o - 1 : 0,
				h = n ? -1 : 1;
			if (i < 2)
				for (;;) {
					if (l in r) {
						a = r[l], l += h;
						break
					}
					if (l += h, n ? l < 0 : o <= l) throw TypeError("Reduce of empty array with no initial value")
				}
			for (; n ? 0 <= l : l < o; l += h) l in r && (a = e(a, r[l], l, s));
			return a
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(8),
			n = i(57),
			s = i(2)("species");
		t.exports = function(t) {
			var e;
			return n(t) && ("function" != typeof(e = t.constructor) || e !== Array && !n(e.prototype) || (e = void 0), a(e) &&
				null === (e = e[s]) && (e = void 0)), void 0 === e ? Array : e
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(92);
		t.exports = function(t, e) {
			return new(a(t))(e)
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(9),
			n = i(22);
		t.exports = function(t, e, i) {
			e in t ? a.f(t, e, n(0, i)) : t[e] = i
		}
	}, function(t, e, i) {
		"use strict";
		var o = i(27),
			l = i(63),
			h = i(38);
		t.exports = function(t) {
			var e = o(t),
				i = l.f;
			if (i)
				for (var a, n = i(t), s = h.f, r = 0; n.length > r;) s.call(t, a = n[r++]) && e.push(a);
			return e
		}
	}, function(t, e, i) {
		"use strict";
		var d = i(14),
			f = i(58),
			p = i(56),
			g = i(7),
			x = i(23),
			v = i(70),
			b = {},
			m = {},
			a = t.exports = function(t, e, i, a, n) {
				var s, r, o, l, h = n ? function() {
						return t
					} : v(t),
					c = d(i, a, e ? 2 : 1),
					u = 0;
				if ("function" != typeof h) throw TypeError(t + " is not iterable!");
				if (p(h)) {
					for (s = x(t.length); u < s; u++)
						if ((l = e ? c(g(r = t[u])[0], r[1]) : c(t[u])) === b || l === m) return l
				} else
					for (o = h.call(t); !(r = o.next()).done;)
						if ((l = f(o, c, r.value, e)) === b || l === m) return l
			};
		a.BREAK = b, a.RETURN = m
	}, function(t, e, i) {
		"use strict";
		t.exports = function(t, e, i) {
			var a = void 0 === i;
			switch (e.length) {
				case 0:
					return a ? t() : t.call(i);
				case 1:
					return a ? t(e[0]) : t.call(i, e[0]);
				case 2:
					return a ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
				case 3:
					return a ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
				case 4:
					return a ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
			}
			return t.apply(i, e)
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(61),
			n = i(22),
			s = i(28),
			r = {};
		i(12)(r, i(2)("iterator"), function() {
			return this
		}), t.exports = function(t, e, i) {
			t.prototype = a(r, {
				next: n(1, i)
			}), s(t, e + " Iterator")
		}
	}, function(t, e, i) {
		"use strict";
		t.exports = function(t, e) {
			return {
				value: e,
				done: !!t
			}
		}
	}, function(t, e, i) {
		"use strict";
		var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
					typeof t
			},
			n = i(24)("meta"),
			s = i(8),
			r = i(11),
			o = i(9).f,
			l = 0,
			h = Object.isExtensible || function() {
				return !0
			},
			c = !i(19)(function() {
				return h(Object.preventExtensions({}))
			}),
			u = function(t) {
				o(t, n, {
					value: {
						i: "O" + ++l,
						w: {}
					}
				})
			},
			d = t.exports = {
				KEY: n,
				NEED: !1,
				fastKey: function(t, e) {
					if (!s(t)) return "symbol" == (void 0 === t ? "undefined" : a(t)) ? t : ("string" == typeof t ? "S" : "P") +
						t;
					if (!r(t, n)) {
						if (!h(t)) return "F";
						if (!e) return "E";
						u(t)
					}
					return t[n].i
				},
				getWeak: function(t, e) {
					if (!r(t, n)) {
						if (!h(t)) return !0;
						if (!e) return !1;
						u(t)
					}
					return t[n].w
				},
				onFreeze: function(t) {
					return c && d.NEED && h(t) && !r(t, n) && u(t), t
				}
			}
	}, function(t, e, i) {
		"use strict";
		var o = i(3),
			l = i(68).set,
			h = o.MutationObserver || o.WebKitMutationObserver,
			c = o.process,
			u = o.Promise,
			d = "process" == i(18)(c);
		t.exports = function() {
			var i, a, n, t = function() {
				var t, e;
				for (d && (t = c.domain) && t.exit(); i;) {
					e = i.fn, i = i.next;
					try {
						e()
					} catch (t) {
						throw i ? n() : a = void 0, t
					}
				}
				a = void 0, t && t.enter()
			};
			if (d) n = function() {
				c.nextTick(t)
			};
			else if (!h || o.navigator && o.navigator.standalone)
				if (u && u.resolve) {
					var e = u.resolve(void 0);
					n = function() {
						e.then(t)
					}
				} else n = function() {
					l.call(o, t)
				};
			else {
				var s = !0,
					r = document.createTextNode("");
				new h(t).observe(r, {
					characterData: !0
				}), n = function() {
					r.data = s = !s
				}
			}
			return function(t) {
				var e = {
					fn: t,
					next: void 0
				};
				a && (a.next = e), i || (i = e, n()), a = e
			}
		}
	}, function(t, e, i) {
		"use strict";
		var r = i(9),
			o = i(7),
			l = i(27);
		t.exports = i(10) ? Object.defineProperties : function(t, e) {
			o(t);
			for (var i, a = l(e), n = a.length, s = 0; s < n;) r.f(t, i = a[s++], e[i]);
			return t
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(38),
			n = i(22),
			s = i(16),
			r = i(42),
			o = i(11),
			l = i(55),
			h = Object.getOwnPropertyDescriptor;
		e.f = i(10) ? h : function(t, e) {
			if (t = s(t), e = r(e, !0), l) try {
				return h(t, e)
			} catch (t) {}
			if (o(t, e)) return n(!a.f.call(t, e), t[e])
		}
	}, function(t, e, i) {
		"use strict";
		var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
					typeof t
			},
			n = i(16),
			s = i(62).f,
			r = {}.toString,
			o = "object" == ("undefined" == typeof window ? "undefined" : a(window)) && window && Object.getOwnPropertyNames ?
			Object.getOwnPropertyNames(window) : [];
		t.exports.f = function(t) {
			return o && "[object Window]" == r.call(t) ? function(t) {
				try {
					return s(t)
				} catch (t) {
					return o.slice()
				}
			}(t) : s(n(t))
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(11),
			n = i(29),
			s = i(39)("IE_PROTO"),
			r = Object.prototype;
		t.exports = Object.getPrototypeOf || function(t) {
			return t = n(t), a(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor
				.prototype : t instanceof Object ? r : null
		}
	}, function(t, e, i) {
		"use strict";
		var n = i(15);
		t.exports = function(t, e, i) {
			for (var a in e) n(t, a, e[a], i);
			return t
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(3),
			n = i(9),
			s = i(10),
			r = i(2)("species");
		t.exports = function(t) {
			var e = a[t];
			s && e && !e[r] && n.f(e, r, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(19);
		t.exports = function(t, e) {
			return !!t && a(function() {
				e ? t.call(null, function() {}, 1) : t.call(null)
			})
		}
	}, function(t, e, i) {
		"use strict";
		var l = i(41),
			h = i(33);
		t.exports = function(o) {
			return function(t, e) {
				var i, a, n = String(h(t)),
					s = l(e),
					r = n.length;
				return s < 0 || r <= s ? o ? "" : void 0 : (i = n.charCodeAt(s)) < 55296 || 56319 < i || s + 1 === r || (a =
					n.charCodeAt(s + 1)) < 56320 || 57343 < a ? o ? n.charAt(s) : i : o ? n.slice(s, s + 2) : a - 56320 + (i -
					55296 << 10) + 65536
			}
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(41),
			n = Math.max,
			s = Math.min;
		t.exports = function(t, e) {
			return (t = a(t)) < 0 ? n(t + e, 0) : s(t, e)
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(3).navigator;
		t.exports = a && a.userAgent || ""
	}, function(t, e, i) {
		"use strict";
		var a = i(5),
			n = i(90)(5),
			s = !0;
		"find" in [] && Array(1).find(function() {
			s = !1
		}), a(a.P + a.F * s, "Array", {
			find: function(t) {
				return n(this, t, 1 < arguments.length ? arguments[1] : void 0)
			}
		}), i(31)("find")
	}, function(t, e, i) {
		"use strict";
		var d = i(14),
			a = i(5),
			f = i(29),
			p = i(58),
			g = i(56),
			x = i(23),
			v = i(94),
			b = i(70);
		a(a.S + a.F * !i(60)(function(t) {
			Array.from(t)
		}), "Array", {
			from: function(t) {
				var e, i, a, n, s = f(t),
					r = "function" == typeof this ? this : Array,
					o = arguments.length,
					l = 1 < o ? arguments[1] : void 0,
					h = void 0 !== l,
					c = 0,
					u = b(s);
				if (h && (l = d(l, 2 < o ? arguments[2] : void 0, 2)), null == u || r == Array && g(u))
					for (i = new r(e = x(s.length)); c < e; c++) v(i, c, h ? l(s[c], c) : s[c]);
				else
					for (n = u.call(s), i = new r; !(a = n.next()).done; c++) v(i, c, h ? p(n, l, [a.value, c], !0) : a.value);
				return i.length = c, i
			}
		})
	}, function(t, e, i) {
		"use strict";
		var a = i(31),
			n = i(99),
			s = i(20),
			r = i(16);
		t.exports = i(59)(Array, "Array", function(t, e) {
			this._t = r(t), this._i = 0, this._k = e
		}, function() {
			var t = this._t,
				e = this._k,
				i = this._i++;
			return !t || i >= t.length ? (this._t = void 0, n(1)) : n(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
		}, "values"), s.Arguments = s.Array, a("keys"), a("values"), a("entries")
	}, function(t, e, i) {
		"use strict";
		var a = i(5),
			n = i(91);
		a(a.P + a.F * !i(108)([].reduce, !0), "Array", {
			reduce: function(t) {
				return n(this, t, arguments.length, arguments[1], !1)
			}
		})
	}, function(t, e, i) {
		"use strict";
		var a, n, s, r, o = i(21),
			l = i(3),
			h = i(14),
			c = i(32),
			u = i(5),
			d = i(8),
			f = i(17),
			p = i(89),
			g = i(96),
			x = i(67),
			v = i(68).set,
			b = i(101)(),
			m = i(37),
			y = i(65),
			w = i(111),
			k = i(66),
			S = "Promise",
			A = l.TypeError,
			C = l.process,
			P = C && C.versions,
			M = P && P.v8 || "",
			L = l[S],
			T = "process" == c(C),
			E = function() {},
			z = n = m.f,
			X = !! function() {
				try {
					var t = L.resolve(1),
						e = (t.constructor = {})[i(2)("species")] = function(t) {
							t(E, E)
						};
					return (T || "function" == typeof PromiseRejectionEvent) && t.then(E) instanceof e && 0 !== M.indexOf("6.6") &&
						-1 === w.indexOf("Chrome/66")
				} catch (t) {}
			}(),
			O = function(t) {
				var e;
				return !(!d(t) || "function" != typeof(e = t.then)) && e
			},
			Y = function(c, i) {
				if (!c._n) {
					c._n = !0;
					var a = c._c;
					b(function() {
						for (var l = c._v, h = 1 == c._s, t = 0, e = function(t) {
								var e, i, a, n = h ? t.ok : t.fail,
									s = t.resolve,
									r = t.reject,
									o = t.domain;
								try {
									n ? (h || (2 == c._h && D(c), c._h = 1), !0 === n ? e = l : (o && o.enter(), e = n(l), o && (o.exit(),
										a = !0)), e === t.promise ? r(A("Promise-chain cycle")) : (i = O(e)) ? i.call(e, s, r) : s(e)) : r(l)
								} catch (t) {
									o && !a && o.exit(), r(t)
								}
							}; a.length > t;) e(a[t++]);
						c._c = [], c._n = !1, i && !c._h && I(c)
					})
				}
			},
			I = function(s) {
				v.call(l, function() {
					var t, e, i, a = s._v,
						n = F(s);
					if (n && (t = y(function() {
							T ? C.emit("unhandledRejection", a, s) : (e = l.onunhandledrejection) ? e({
								promise: s,
								reason: a
							}) : (i = l.console) && i.error && i.error("Unhandled promise rejection", a)
						}), s._h = T || F(s) ? 2 : 1), s._a = void 0, n && t.e) throw t.v
				})
			},
			F = function(t) {
				return 1 !== t._h && 0 === (t._a || t._c).length
			},
			D = function(e) {
				v.call(l, function() {
					var t;
					T ? C.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
						promise: e,
						reason: e._v
					})
				})
			},
			W = function(t) {
				var e = this;
				e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), Y(e, !0))
			},
			R = function t(i) {
				var a, n = this;
				if (!n._d) {
					n._d = !0, n = n._w || n;
					try {
						if (n === i) throw A("Promise can't be resolved itself");
						(a = O(i)) ? b(function() {
							var e = {
								_w: n,
								_d: !1
							};
							try {
								a.call(i, h(t, e, 1), h(W, e, 1))
							} catch (t) {
								W.call(e, t)
							}
						}): (n._v = i, n._s = 1, Y(n, !1))
					} catch (t) {
						W.call({
							_w: n,
							_d: !1
						}, t)
					}
				}
			};
		X || (L = function(t) {
			p(this, L, S, "_h"), f(t), a.call(this);
			try {
				t(h(R, this, 1), h(W, this, 1))
			} catch (t) {
				W.call(this, t)
			}
		}, (a = function(t) {
			this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
		}).prototype = i(106)(L.prototype, {
			then: function(t, e) {
				var i = z(x(this, L));
				return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = T ? C.domain :
					void 0, this._c.push(i), this._a && this._a.push(i), this._s && Y(this, !1), i.promise
			},
			catch: function(t) {
				return this.then(void 0, t)
			}
		}), s = function() {
			var t = new a;
			this.promise = t, this.resolve = h(R, t, 1), this.reject = h(W, t, 1)
		}, m.f = z = function(t) {
			return t === L || t === r ? new s(t) : n(t)
		}), u(u.G + u.W + u.F * !X, {
			Promise: L
		}), i(28)(L, S), i(107)(S), r = i(4)[S], u(u.S + u.F * !X, S, {
			reject: function(t) {
				var e = z(this);
				return (0, e.reject)(t), e.promise
			}
		}), u(u.S + u.F * (o || !X), S, {
			resolve: function(t) {
				return k(o && this === r ? L : this, t)
			}
		}), u(u.S + u.F * !(X && i(60)(function(t) {
			L.all(t).catch(E)
		})), S, {
			all: function(t) {
				var r = this,
					e = z(r),
					o = e.resolve,
					l = e.reject,
					i = y(function() {
						var a = [],
							n = 0,
							s = 1;
						g(t, !1, function(t) {
							var e = n++,
								i = !1;
							a.push(void 0), s++, r.resolve(t).then(function(t) {
								i || (i = !0, a[e] = t, --s || o(a))
							}, l)
						}), --s || o(a)
					});
				return i.e && l(i.v), e.promise
			},
			race: function(t) {
				var e = this,
					i = z(e),
					a = i.reject,
					n = y(function() {
						g(t, !1, function(t) {
							e.resolve(t).then(i.resolve, a)
						})
					});
				return n.e && a(n.v), i.promise
			}
		})
	}, function(t, e, i) {
		"use strict";
		var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
					typeof t
			},
			n = i(3),
			r = i(11),
			s = i(10),
			o = i(5),
			l = i(15),
			h = i(100).KEY,
			c = i(19),
			u = i(40),
			d = i(28),
			f = i(24),
			p = i(2),
			g = i(69),
			x = i(43),
			v = i(95),
			b = i(57),
			m = i(7),
			y = i(8),
			w = i(16),
			k = i(42),
			S = i(22),
			A = i(61),
			C = i(104),
			P = i(103),
			M = i(9),
			L = i(27),
			T = P.f,
			E = M.f,
			z = C.f,
			X = n.Symbol,
			O = n.JSON,
			Y = O && O.stringify,
			I = "prototype",
			F = p("_hidden"),
			D = p("toPrimitive"),
			W = {}.propertyIsEnumerable,
			R = u("symbol-registry"),
			H = u("symbols"),
			_ = u("op-symbols"),
			N = Object[I],
			B = "function" == typeof X,
			j = n.QObject,
			V = !j || !j[I] || !j[I].findChild,
			G = s && c(function() {
				return 7 != A(E({}, "a", {
					get: function() {
						return E(this, "a", {
							value: 7
						}).a
					}
				})).a
			}) ? function(t, e, i) {
				var a = T(N, e);
				a && delete N[e], E(t, e, i), a && t !== N && E(N, e, a)
			} : E,
			U = function(t) {
				var e = H[t] = A(X[I]);
				return e._k = t, e
			},
			q = B && "symbol" == a(X.iterator) ? function(t) {
				return "symbol" == (void 0 === t ? "undefined" : a(t))
			} : function(t) {
				return t instanceof X
			},
			Z = function(t, e, i) {
				return t === N && Z(_, e, i), m(t), e = k(e, !0), m(i), r(H, e) ? (i.enumerable ? (r(t, F) && t[F][e] && (t[F][
					e
				] = !1), i = A(i, {
					enumerable: S(0, !1)
				})) : (r(t, F) || E(t, F, S(1, {})), t[F][e] = !0), G(t, e, i)) : E(t, e, i)
			},
			$ = function(t, e) {
				m(t);
				for (var i, a = v(e = w(e)), n = 0, s = a.length; n < s;) Z(t, i = a[n++], e[i]);
				return t
			},
			J = function(t) {
				var e = W.call(this, t = k(t, !0));
				return !(this === N && r(H, t) && !r(_, t)) && (!(e || !r(this, t) || !r(H, t) || r(this, F) && this[F][t]) ||
					e)
			},
			Q = function(t, e) {
				if (t = w(t), e = k(e, !0), t !== N || !r(H, e) || r(_, e)) {
					var i = T(t, e);
					return !i || !r(H, e) || r(t, F) && t[F][e] || (i.enumerable = !0), i
				}
			},
			K = function(t) {
				for (var e, i = z(w(t)), a = [], n = 0; i.length > n;) r(H, e = i[n++]) || e == F || e == h || a.push(e);
				return a
			},
			tt = function(t) {
				for (var e, i = t === N, a = z(i ? _ : w(t)), n = [], s = 0; a.length > s;) !r(H, e = a[s++]) || i && !r(N, e) ||
					n.push(H[e]);
				return n
			};
		B || (l((X = function() {
			if (this instanceof X) throw TypeError("Symbol is not a constructor!");
			var i = f(0 < arguments.length ? arguments[0] : void 0);
			return s && V && G(N, i, {
				configurable: !0,
				set: function t(e) {
					this === N && t.call(_, e), r(this, F) && r(this[F], i) && (this[F][i] = !1), G(this, i, S(1, e))
				}
			}), U(i)
		})[I], "toString", function() {
			return this._k
		}), P.f = Q, M.f = Z, i(62).f = C.f = K, i(38).f = J, i(63).f = tt, s && !i(21) && l(N, "propertyIsEnumerable",
			J, !0), g.f = function(t) {
			return U(p(t))
		}), o(o.G + o.W + o.F * !B, {
			Symbol: X
		});
		for (var et =
				"hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables"
				.split(","), it = 0; et.length > it;) p(et[it++]);
		for (var at = L(p.store), nt = 0; at.length > nt;) x(at[nt++]);
		o(o.S + o.F * !B, "Symbol", {
			for: function(t) {
				return r(R, t += "") ? R[t] : R[t] = X(t)
			},
			keyFor: function(t) {
				if (!q(t)) throw TypeError(t + " is not a symbol!");
				for (var e in R)
					if (R[e] === t) return e
			},
			useSetter: function() {
				V = !0
			},
			useSimple: function() {
				V = !1
			}
		}), o(o.S + o.F * !B, "Object", {
			create: function(t, e) {
				return void 0 === e ? A(t) : $(A(t), e)
			},
			defineProperty: Z,
			defineProperties: $,
			getOwnPropertyDescriptor: Q,
			getOwnPropertyNames: K,
			getOwnPropertySymbols: tt
		}), O && o(o.S + o.F * (!B || c(function() {
			var t = X();
			return "[null]" != Y([t]) || "{}" != Y({
				a: t
			}) || "{}" != Y(Object(t))
		})), "JSON", {
			stringify: function(t) {
				for (var e, i, a = [t], n = 1; arguments.length > n;) a.push(arguments[n++]);
				if (i = e = a[1], (y(e) || void 0 !== t) && !q(t)) return b(e) || (e = function(t, e) {
					if ("function" == typeof i && (e = i.call(this, t, e)), !q(e)) return e
				}), a[1] = e, Y.apply(O, a)
			}
		}), X[I][D] || i(12)(X[I], D, X[I].valueOf), d(X, "Symbol"), d(Math, "Math", !0), d(n.JSON, "JSON", !0)
	}, function(t, e, i) {
		"use strict";
		var a = i(5),
			n = i(53)(!0);
		a(a.P, "Array", {
			includes: function(t) {
				return n(this, t, 1 < arguments.length ? arguments[1] : void 0)
			}
		}), i(31)("includes")
	}, function(t, e, i) {
		"use strict";
		var a = i(5),
			n = i(4),
			s = i(3),
			r = i(67),
			o = i(66);
		a(a.P + a.R, "Promise", {
			finally: function(e) {
				var i = r(this, n.Promise || s.Promise),
					t = "function" == typeof e;
				return this.then(t ? function(t) {
					return o(i, e()).then(function() {
						return t
					})
				} : e, t ? function(t) {
					return o(i, e()).then(function() {
						throw t
					})
				} : e)
			}
		})
	}, function(t, e, i) {
		"use strict";
		var a = i(5),
			n = i(37),
			s = i(65);
		a(a.S, "Promise", {
			try: function(t) {
				var e = n.f(this),
					i = s(t);
				return (i.e ? e.reject : e.resolve)(i.v), e.promise
			}
		})
	}, function(t, e, i) {
		"use strict";
		i(43)("asyncIterator")
	}, function(t, e, i) {
		"use strict";
		i(43)("observable")
	}, function(t, e, i) {
		"use strict";
		for (var a = i(114), n = i(27), s = i(15), r = i(3), o = i(12), l = i(20), h = i(2), c = h("iterator"), u = h(
				"toStringTag"), d = l.Array, f = {
				CSSRuleList: !0,
				CSSStyleDeclaration: !1,
				CSSValueList: !1,
				ClientRectList: !1,
				DOMRectList: !1,
				DOMStringList: !1,
				DOMTokenList: !0,
				DataTransferItemList: !1,
				FileList: !1,
				HTMLAllCollection: !1,
				HTMLCollection: !1,
				HTMLFormElement: !1,
				HTMLSelectElement: !1,
				MediaList: !0,
				MimeTypeArray: !1,
				NamedNodeMap: !1,
				NodeList: !0,
				PaintRequestList: !1,
				Plugin: !1,
				PluginArray: !1,
				SVGLengthList: !1,
				SVGNumberList: !1,
				SVGPathSegList: !1,
				SVGPointList: !1,
				SVGStringList: !1,
				SVGTransformList: !1,
				SourceBufferList: !1,
				StyleSheetList: !0,
				TextTrackCueList: !1,
				TextTrackList: !1,
				TouchList: !1
			}, p = n(f), g = 0; g < p.length; g++) {
			var x, v = p[g],
				b = f[v],
				m = r[v],
				y = m && m.prototype;
			if (y && (y[c] || o(y, c, d), y[u] || o(y, u, v), l[v] = d, b))
				for (x in a) y[x] || s(y, x, a[x], !0)
		}
	}, function(t, e, i) {
		"use strict";
		t.exports = function(i) {
			var r = [];
			return r.toString = function() {
				return this.map(function(t) {
					var e = function(t, e) {
						var i = t[1] || "",
							a = t[3];
						if (!a) return i;
						if (e && "function" == typeof btoa) {
							var n = (r = a, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(
									encodeURIComponent(JSON.stringify(r)))) + " */"),
								s = a.sources.map(function(t) {
									return "/*# sourceURL=" + a.sourceRoot + t + " */"
								});
							return [i].concat(s).concat([n]).join("\n")
						}
						var r;
						return [i].join("\n")
					}(t, i);
					return t[2] ? "@media " + t[2] + "{" + e + "}" : e
				}).join("")
			}, r.i = function(t, e) {
				"string" == typeof t && (t = [
					[null, t, ""]
				]);
				for (var i = {}, a = 0; a < this.length; a++) {
					var n = this[a][0];
					"number" == typeof n && (i[n] = !0)
				}
				for (a = 0; a < t.length; a++) {
					var s = t[a];
					"number" == typeof s[0] && i[s[0]] || (e && !s[2] ? s[2] = e : e && (s[2] = "(" + s[2] + ") and (" + e + ")"),
						r.push(s))
				}
			}, r
		}
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = n(i(44)),
			r = n(i(13)),
			o = n(i(0));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var l = function(t) {
			function e() {
				return function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, e),
					function(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
			}
			return function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError(
					"Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}(e, s.default), a(e, [{
				key: "draw",
				value: function(w) {
					var k = this,
						S = this.w;
					this.graphics = new o.default(this.ctx), this.fill = new r.default(this.ctx), this.bar = new s.default(
							this.ctx, this.xyRatios), this.series = w, "100%" === S.config.chart.stackType && (this.series = S.globals
							.seriesPercent.slice(), w = this.series), this.totalItems = 0, this.prevY = [], this.prevX = [], this.prevYF = [],
						this.prevXF = [], this.prevYVal = [], this.prevXVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [],
						this.yArrj = [], this.yArrjF = [], this.yArrjVal = [];
					for (var t = 0; t < w.length; t++) 0 < w[t].length && (this.totalItems += w[t].length);
					this.zeroSerieses = [], this.endingShapeOnSeriesNumber = w.length - 1, this.checkZeroSeries({
						series: w
					});
					var a = this.graphics.group({
						class: "apexcharts-bar-series apexcharts-plot-series"
					});
					a.attr("clip-path", "url(#gridRectMask" + S.globals.cuid + ")");
					for (var A = 0, C = 0, e = function(s, r) {
							var o = void 0,
								l = void 0,
								h = void 0,
								c = void 0,
								u = void 0,
								d = void 0,
								f = [],
								p = [],
								g = s;
							1 < k.yRatio.length && (k.yaxisIndex = g);
							var x, v, b = k.graphics.group({
									class: "apexcharts-series",
									rel: s + 1,
									"data:realIndex": s
								}),
								m = k.graphics.group({
									class: "apexcharts-datalabels"
								}),
								y = 0,
								t = k.initialPositions(A, C, h, c, u, d);
							C = t.y, x = t.barHeight, c = t.yDivision, d = t.zeroW, A = t.x, v = t.barWidth, h = t.xDivision, u =
								t.zeroH, k.yArrj = [], k.yArrjF = [], k.yArrjVal = [], k.xArrj = [], k.xArrjF = [], k.xArrjVal = [];
							for (var e = function(i) {
									S.config.stroke.show && (y = null === w[s][i] || 0 === w[s][i] ? 0 : Array.isArray(k.strokeWidth) ?
										k.strokeWidth[g] : k.strokeWidth);
									var t = null;
									t = k.isHorizontal ? k.drawBarPaths({
										indexes: {
											i: s,
											j: i,
											realIndex: g,
											bc: r
										},
										barHeight: x,
										strokeWidth: y,
										pathTo: o,
										pathFrom: l,
										zeroW: d,
										x: A,
										y: C,
										yDivision: c,
										elSeries: b
									}) : k.drawColumnPaths({
										indexes: {
											i: s,
											j: i,
											realIndex: g,
											bc: r
										},
										x: A,
										y: C,
										xDivision: h,
										pathTo: o,
										pathFrom: l,
										barWidth: v,
										zeroH: u,
										strokeWidth: y,
										elSeries: b
									}), o = t.pathTo, l = t.pathFrom, C = t.y, A = t.x, f.push(A), p.push(C);
									var e = S.config.plotOptions.bar.distributed ? i : s,
										a = null;
									0 < k.barOptions.colors.ranges.length && k.barOptions.colors.ranges.map(function(t, e) {
										w[s][i] >= t.from && w[s][i] <= t.to && (a = t.color)
									});
									var n = k.fill.fillPath(b, {
										seriesNumber: e,
										color: a
									});
									b = k.renderSeries({
										realIndex: g,
										pathFill: n,
										j: i,
										i: s,
										pathFrom: l,
										pathTo: o,
										strokeWidth: y,
										elSeries: b,
										x: A,
										y: C,
										series: w,
										barHeight: x,
										barWidth: v,
										elDataLabelsWrap: m,
										type: "bar",
										visibleSeries: 0
									})
								}, i = 0; i < S.globals.dataPoints; i++) e(i);
							S.globals.seriesXvalues[g] = f, S.globals.seriesYvalues[g] = p, k.prevY.push(k.yArrj), k.prevYF.push(k
								.yArrjF), k.prevYVal.push(k.yArrjVal), k.prevX.push(k.xArrj), k.prevXF.push(k.xArrjF), k.prevXVal.push(
								k.xArrjVal), a.add(b)
						}, i = 0, n = 0; i < w.length; i++, n++) e(i, n);
					return a
				}
			}, {
				key: "initialPositions",
				value: function(t, e, i, a, n, s) {
					var r = this.w,
						o = void 0,
						l = void 0;
					return this.isHorizontal ? (o = (o = a = r.globals.gridHeight / r.globals.dataPoints) * parseInt(r.config
							.plotOptions.bar.barHeight) / 100, s = this.baseLineInvertedY + r.globals.padHorizontal, e = (a - o) /
						2) : (l = i = r.globals.gridWidth / r.globals.dataPoints, l = r.globals.dataXY ? (i = r.globals.gridWidth /
							(this.totalItems / r.globals.series.length)) / 1.8 : l * parseInt(r.config.plotOptions.bar.columnWidth) /
						100, n = this.baseLineY[this.yaxisIndex] + 1, t = r.globals.padHorizontal + (i - l) / 2), {
						x: t,
						y: e,
						yDivision: a,
						xDivision: i,
						barHeight: o,
						barWidth: l,
						zeroH: n,
						zeroW: s
					}
				}
			}, {
				key: "drawBarPaths",
				value: function(t) {
					for (var e = t.indexes, i = t.barHeight, a = t.strokeWidth, n = t.pathTo, s = t.pathFrom, r = t.zeroW, o =
							t.x, l = t.y, h = t.yDivision, c = t.elSeries, u = this.w, d = l, f = void 0, p = e.i, g = e.j, x = e.realIndex,
							v = e.bc, b = 0, m = 0; m < this.prevXF.length; m++) b += this.prevXF[m][g];
					if (0 < p) {
						var y = r;
						this.prevXVal[p - 1][g] < 0 ? y = 0 <= this.series[p][g] ? this.prevX[p - 1][g] + b : this.prevX[p - 1][
							g
						] : 0 <= this.prevXVal[p - 1][g] && (y = 0 <= this.series[p][g] ? this.prevX[p - 1][g] : this.prevX[p -
							1][g] - b), f = y
					} else f = r;
					o = null === this.series[p][g] ? f : f + this.series[p][g] / this.invertedYRatio;
					var w = {
							barHeight: i,
							strokeWidth: a,
							invertedYRatio: this.invertedYRatio,
							barYPosition: d,
							x: o
						},
						k = this.bar.barEndingShape(u, w, this.series, p, g);
					if (1 < this.series.length && p !== this.endingShapeOnSeriesNumber && (k.path = this.graphics.line(k.newX,
							d + i - a)), this.xArrj.push(k.newX), this.xArrjF.push(Math.abs(f - k.newX)), this.xArrjVal.push(this.series[
							p][g]), n = this.graphics.move(f, d), s = this.graphics.move(f, d), 0 < u.globals.previousPaths.length &&
						(s = this.bar.getPathFrom(x, g, !1)), n = n + this.graphics.line(k.newX, d) + k.path + this.graphics.line(
							f, d + i - a) + this.graphics.line(f, d), s = s + this.graphics.line(f, d) + this.graphics.line(f, d +
							i - a) + this.graphics.line(f, d + i - a) + this.graphics.line(f, d + i - a) + this.graphics.line(f, d),
						0 < u.config.plotOptions.bar.colors.backgroundBarColors.length && 0 === p) {
						v >= u.config.plotOptions.bar.colors.backgroundBarColors.length && (v = 0);
						var S = u.config.plotOptions.bar.colors.backgroundBarColors[v],
							A = this.graphics.drawRect(0, d, u.globals.gridWidth, i, 0, S, u.config.plotOptions.bar.colors.backgroundBarOpacity);
						c.add(A), A.classList.add("apexcharts-backgroundBar")
					}
					return {
						pathTo: n,
						pathFrom: s,
						x: o,
						y: l += h
					}
				}
			}, {
				key: "drawColumnPaths",
				value: function(t) {
					var e = t.indexes,
						i = t.x,
						a = t.y,
						n = t.xDivision,
						s = t.pathTo,
						r = t.pathFrom,
						o = t.barWidth,
						l = t.zeroH,
						h = t.strokeWidth,
						c = t.elSeries,
						u = this.w,
						d = e.i,
						f = e.j,
						p = e.realIndex,
						g = e.bc;
					if (u.globals.dataXY) {
						var x = u.globals.seriesX[d][f];
						x || (x = 0), i = (x - u.globals.minX) / this.xRatio - o / 2
					}
					for (var v = i, b = void 0, m = 0, y = 0; y < this.prevYF.length; y++) m += this.prevYF[y][f];
					if (0 < d) {
						var w = this.prevY[d - 1][f];
						b = this.prevYVal[d - 1][f] < 0 ? 0 <= this.series[d][f] ? w - m : w : 0 <= this.series[d][f] ? w : w +
							m
					} else b = u.globals.gridHeight - l;
					a = (this.series[d][f], b - this.series[d][f] / this.yRatio[this.yaxisIndex]);
					var k = {
							barWidth: o,
							strokeWidth: h,
							yRatio: this.yRatio[this.yaxisIndex],
							barXPosition: v,
							y: a
						},
						S = this.bar.barEndingShape(u, k, this.series, d, f);
					if (1 < this.series.length && d !== this.endingShapeOnSeriesNumber && (S.path = this.graphics.line(v + o -
							h, S.newY)), this.yArrj.push(S.newY), this.yArrjF.push(Math.abs(b - S.newY)), this.yArrjVal.push(this.series[
							d][f]), s = this.graphics.move(v, b), r = this.graphics.move(v, b), 0 < u.globals.previousPaths.length &&
						(r = this.bar.getPathFrom(p, f, !1)), s = s + this.graphics.line(v, S.newY) + S.path + this.graphics.line(
							v + o - h, b) + this.graphics.line(v, b), r = r + this.graphics.line(v, b) + this.graphics.line(v + o -
							h, b) + this.graphics.line(v + o - h, b) + this.graphics.line(v + o - h, b) + this.graphics.line(v, b),
						0 < u.config.plotOptions.bar.colors.backgroundBarColors.length && 0 === d) {
						g >= u.config.plotOptions.bar.colors.backgroundBarColors.length && (g = 0);
						var A = u.config.plotOptions.bar.colors.backgroundBarColors[g],
							C = this.graphics.drawRect(v, 0, o, u.globals.gridHeight, 0, A, u.config.plotOptions.bar.colors.backgroundBarOpacity);
						c.add(C), C.classList.add("apexcharts-backgroundBar")
					}
					return i += n, {
						pathTo: s,
						pathFrom: r,
						x: u.globals.dataXY ? i - n : i,
						y: a
					}
				}
			}, {
				key: "checkZeroSeries",
				value: function(t) {
					for (var e = t.series, i = this.w, a = 0; a < e.length; a++) {
						for (var n = 0, s = 0; s < e[i.globals.maxValsInArrayIndex].length; s++) n += e[a][s];
						0 === n && this.zeroSerieses.push(a)
					}
					for (var r = e.length - 1; 0 <= r; r--) this.zeroSerieses.includes(r) && r === this.endingShapeOnSeriesNumber &&
						(this.endingShapeOnSeriesNumber -= 1)
				}
			}]), e
		}();
		e.default = l
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			n = s(i(44)),
			L = s(i(13)),
			T = s(i(0));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function(t) {
			function e() {
				return function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, e),
					function(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
			}
			return function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError(
					"Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}(e, n.default), a(e, [{
				key: "draw",
				value: function(t, e) {
					var i = this.w,
						a = new T.default(this.ctx),
						n = new L.default(this.ctx);
					this.candlestickOptions = this.w.config.plotOptions.candlestick, this.initVariables(t, !0);
					var s = a.group({
						class: "apexcharts-candlestick-series apexcharts-plot-series"
					});
					s.attr("clip-path", "url(#gridRectMask" + i.globals.cuid + ")");
					for (var r = 0, o = 0; r < t.length; r++, o++) {
						var l, h, c = void 0,
							u = void 0,
							d = void 0,
							f = void 0,
							p = [],
							g = [],
							x = i.globals.comboCharts ? e[r] : r,
							v = a.group({
								class: "apexcharts-series",
								rel: r + 1,
								"data:realIndex": x
							});
						0 < t[r].length && (this.visibleI = this.visibleI + 1);
						var b, m, y = 0;
						1 < this.yRatio.length && (this.yaxisIndex = x);
						var w = this.initialPositions({
							makeWidthForVisibleItems: !0
						});
						f = w.y, b = w.barHeight, d = w.x, m = w.barWidth, l = w.xDivision, h = w.zeroH, g.push(d + m / 2);
						for (var k = a.group({
								class: "apexcharts-datalabels"
							}), S = 0, A = i.globals.dataPoints; S < i.globals.dataPoints; S++, A--) {
							void 0 === this.series[r][S] || null === t[r][S] ? this.isNullValue = !0 : this.isNullValue = !1, i.config
								.stroke.show && (y = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[x] :
									this.strokeWidth);
							var C, P = this.drawCandleStickPaths({
								indexes: {
									i: r,
									j: S,
									realIndex: x,
									bc: o
								},
								x: d,
								y: f,
								xDivision: l,
								pathTo: c,
								pathFrom: u,
								barWidth: m,
								zeroH: h,
								strokeWidth: y,
								elSeries: v
							});
							c = P.pathTo, u = P.pathFrom, f = P.y, d = P.x, C = P.color, 0 < S && g.push(d + m / 2), p.push(f);
							var M = n.fillPath(v, {
								seriesNumber: x,
								color: C
							});
							v = this.renderSeries({
								realIndex: x,
								pathFill: M,
								j: S,
								i: r,
								pathFrom: u,
								pathTo: c,
								strokeWidth: y,
								elSeries: v,
								x: d,
								y: f,
								series: t,
								barHeight: b,
								barWidth: m,
								elDataLabelsWrap: k,
								visibleSeries: this.visibleI,
								type: "candlestick"
							})
						}
						i.globals.seriesXvalues[x] = g, i.globals.seriesYvalues[x] = p, s.add(v)
					}
					return s
				}
			}, {
				key: "drawCandleStickPaths",
				value: function(t) {
					var e = t.indexes,
						i = t.x,
						a = (t.y, t.xDivision),
						n = t.pathTo,
						s = t.pathFrom,
						r = t.barWidth,
						o = t.zeroH,
						l = t.strokeWidth,
						h = this.w,
						c = new T.default(this.ctx),
						u = e.i,
						d = e.j,
						f = !0,
						p = h.config.plotOptions.candlestick.colors.upward,
						g = h.config.plotOptions.candlestick.colors.downward,
						x = this.yRatio[this.yaxisIndex],
						v = e.realIndex,
						b = this.getOHLCValue(v, d),
						m = o,
						y = o;
					b.o > b.c && (f = !1);
					var w = Math.min(b.o, b.c),
						k = Math.max(b.o, b.c);
					h.globals.dataXY && (i = (h.globals.seriesX[u][d] - h.globals.minX) / this.xRatio - r / 2);
					var S = i + r * this.visibleI;
					return c.move(S, o), s = c.move(S, o), 0 < h.globals.previousPaths.length && (s = this.getPathFrom(v, d,
							!0)), void 0 === this.series[u][d] || null === this.series[u][d] ? w = o : (w = o - w / x, k = o - k /
							x, m = o - b.h / x, y = o - b.l / x), n = c.move(S, k) + c.line(S + r / 2, k) + c.line(S + r / 2, m) +
						c.line(S + r / 2, k) + c.line(S + r, k) + c.line(S + r, w) + c.line(S + r / 2, w) + c.line(S + r / 2, y) +
						c.line(S + r / 2, w) + c.line(S, w) + c.line(S, k - l / 2), h.globals.dataXY || (i += a), {
							pathTo: n,
							pathFrom: s,
							x: i,
							y: k,
							barXPosition: S,
							color: f ? p : g
						}
				}
			}, {
				key: "getOHLCValue",
				value: function(t, e) {
					var i = this.w;
					return {
						o: i.globals.seriesCandleO[t][e],
						h: i.globals.seriesCandleH[t][e],
						l: i.globals.seriesCandleL[t][e],
						c: i.globals.seriesCandleC[t][e]
					}
				}
			}]), e
		}();
		e.default = r
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			b = n(i(45)),
			r = n(i(25)),
			A = n(i(0)),
			C = n(i(1)),
			P = n(i(6));

		function n(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function h(t) {
			if (Array.isArray(t)) {
				for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
				return i
			}
			return Array.from(t)
		}
		var s = function() {
			function i(t, e) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, i), this.ctx = t, this.w = t.w, this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.dynamicAnim =
					this.w.config.chart.animations.dynamicAnimation, this.rectRadius = this.w.config.plotOptions.heatmap.radius,
					this.strokeWidth = this.w.config.stroke.width
			}
			return a(i, [{
				key: "draw",
				value: function(t) {
					var e = this.w,
						i = new A.default(this.ctx),
						a = i.group({
							class: "apexcharts-heatmap"
						});
					a.attr("clip-path", "url(#gridRectMask" + e.globals.cuid + ")");
					for (var n = e.globals.gridWidth / e.globals.dataPoints, s = e.globals.gridHeight / e.globals.series.length,
							r = 0, o = t.length - 1; 0 <= o; o--) {
						var l = i.group({
							class: "apexcharts-series apexcharts-heatmap-series",
							rel: o + 1,
							"data:realIndex": o
						});
						if (e.config.chart.dropShadow.enabled) {
							var h = e.config.chart.dropShadow;
							new P.default(this.ctx).dropShadow(l, h)
						}
						for (var c = 0, u = 0; u < t[o].length; u++) {
							var d = 1,
								f = this.determineHeatColor(o, u);
							if (e.globals.hasNegs) {
								var p = e.config.plotOptions.heatmap.shadeIntensity;
								d = f.percent < 0 ? 1 - (1 + f.percent / 100) * p : (1 - f.percent / 100) * p
							} else d = 1 - f.percent / 100;
							var g = f.color;
							if (e.config.plotOptions.heatmap.enableShades) {
								var x = new C.default;
								g = C.default.hexToRgba(x.shadeColor(d, f.color), e.config.fill.opacity)
							}
							var v = this.rectRadius,
								b = i.drawRect(c, r, n, s, v);
							if (b.attr({
									cx: c,
									cy: r
								}), b.node.classList.add("apexcharts-heatmap-rect"), l.add(b), b.attr({
									fill: g,
									i: o,
									j: u,
									val: t[o][u],
									"stroke-width": this.strokeWidth,
									stroke: e.globals.stroke.colors[0],
									color: g
								}), e.config.chart.animations.enabled && !e.globals.dataChanged) {
								var m = 1;
								e.globals.resized || (m = e.config.chart.animations.speed), this.animateHeatMap(b, c, r, n, s, m)
							}
							if (e.globals.dataChanged) {
								var y = 1;
								this.dynamicAnim.enabled && (y = this.dynamicAnim.speed);
								var w = e.globals.previousPaths[o][u].color;
								this.animateHeatColor(b, C.default.rgb2hex(w), C.default.rgb2hex(g), y)
							}
							var k = this.calculateHeatmapDataLabels({
								x: c,
								y: r,
								i: o,
								j: u,
								series: t,
								rectHeight: s,
								rectWidth: n
							});
							null !== k && l.add(k), c += n
						}
						r += s, a.add(l)
					}
					e.globals.yAxisScale[0].result.push("");
					var S = e.globals.gridHeight / e.globals.series.length;
					return e.config.yaxis[0].labels.offsetY = -S / 2, a
				}
			}, {
				key: "determineHeatColor",
				value: function(t, e) {
					var i = this.w,
						a = i.globals.series[t][e],
						n = i.globals.colors[t],
						s = Math.min.apply(Math, h(i.globals.series[t])),
						r = Math.max.apply(Math, h(i.globals.series[t])),
						o = Math.abs(r) + Math.abs(s),
						l = 100 * a / (0 === o ? o - 1e-6 : o);
					0 < i.config.plotOptions.heatmap.colorScale.ranges.length && i.config.plotOptions.heatmap.colorScale.ranges
						.map(function(t, e) {
							a >= t.from && a <= t.to && (n = t.color, s = t.from, r = t.to, o = Math.abs(r) + Math.abs(s), l = 100 *
								a / o)
						});
					return {
						color: n,
						percent: l
					}
				}
			}, {
				key: "calculateHeatmapDataLabels",
				value: function(t) {
					var e = t.x,
						i = t.y,
						a = t.i,
						n = t.j,
						s = (t.series, t.rectHeight),
						r = t.rectWidth,
						o = this.w,
						l = o.config.dataLabels,
						h = new A.default(this.ctx),
						c = new b.default(this.ctx),
						u = l.formatter,
						d = null;
					if (l.enabled) {
						d = h.group({
							class: "apexcharts-data-labels"
						});
						var f = l.offsetX,
							p = l.offsetY,
							g = e + r / 2 + f,
							x = i + s / 2 + parseInt(l.style.fontSize) / 3 + p,
							v = u(o.globals.series[a][n], {
								seriesIndex: a,
								dataPointIndex: n,
								globals: o.globals
							});
						c.plotDataLabelsText(g, x, v, a, n, d, l)
					}
					return d
				}
			}, {
				key: "animateHeatMap",
				value: function(t, e, i, a, n, s) {
					new r.default(this.ctx).animateRect(t, {
						x: e + a / 2,
						y: i + n / 2,
						width: 0,
						height: 0
					}, {
						x: e,
						y: i,
						width: a,
						height: n
					}, s)
				}
			}, {
				key: "animateHeatColor",
				value: function(t, e, i, a) {
					t.attr({
						fill: e
					}).animate(a).attr({
						fill: i
					})
				}
			}]), i
		}();
		t.exports = s
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var et = Object.assign || function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = arguments[e];
					for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
				}
				return t
			},
			a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			it = s(i(0)),
			at = s(i(13)),
			nt = s(i(45)),
			st = s(i(47)),
			n = s(i(74));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function() {
			function i(t, e) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, i), this.ctx = t, this.w = t.w, this.xyRatios = e, this.pointsChart = !("bubble" !== this.w.config.chart
						.type && "scatter" !== this.w.config.chart.type), this.pointsChart && (this.scatter = new n.default(this.ctx)),
					this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.yaxisIndex = 0
			}
			return a(i, [{
				key: "draw",
				value: function(t, e, i) {
					for (var a = this.w, n = new it.default(this.ctx), s = new at.default(this.ctx), r = a.globals.comboCharts ?
							e : a.config.chart.type, o = n.group({
								class: "apexcharts-" + r + "-series apexcharts-plot-series",
								"clip-path": "url(#gridRectMask" + a.globals.cuid + ")"
							}), l = this.xyRatios.yRatio, h = this.xyRatios.zRatio, c = this.xyRatios.xRatio, u = this.xyRatios.baseLineY,
							d = [], f = [], p = 0, g = 0; g < t.length; g++) {
						var x = a.globals.gridWidth / a.globals.dataPoints,
							v = a.globals.comboCharts ? i[g] : g;
						1 < l.length && (this.yaxisIndex = v);
						var b = [],
							m = [],
							y = a.globals.gridHeight - u[this.yaxisIndex],
							w = y;
						y > a.globals.gridHeight && (w = a.globals.gridHeight), p = x / 2;
						var k = a.globals.padHorizontal + p,
							S = 1;
						a.globals.dataXY && (k = (a.globals.seriesX[v][0] - a.globals.minX) / c), m.push(k);
						for (var A = void 0, C = void 0, P = void 0, M = void 0, L = [], T = [], E = n.group({
								class: "apexcharts-series"
							}), z = n.group({
								class: "apexcharts-series-markers-wrap"
							}), X = n.group({
								class: "apexcharts-datalabels"
							}), O = 0; O < a.globals.collapsedSeries.length; O++) a.globals.collapsedSeries[O].index === v && E.node
							.classList.add("apexcharts-series-collapsed");
						var Y = t[g].length === a.globals.dataPoints;
						E.attr({
							"data:longestSeries": Y,
							rel: g + 1,
							"data:realIndex": v
						}), this.appendPathFrom = !0;
						var I = k,
							F = void 0,
							D = I,
							W = y,
							R = 0;
						if (W = this.determineFirstPrevY({
								i: g,
								series: t,
								yRatio: l[this.yaxisIndex],
								zeroY: y,
								prevY: W,
								prevSeriesY: f,
								lineYPosition: R
							}).prevY, b.push(W), F = W, null === t[g][0]) {
							for (var H = 0; H < t[g].length; H++)
								if (null !== t[g][H]) {
									D = x * H, W = y - t[g][H] / l[this.yaxisIndex], A = n.move(D, W), C = n.move(D, w);
									break
								}
						} else A = n.move(D, W), C = n.move(D, w) + n.line(D, W);
						if (P = n.move(-1, y) + n.line(-1, y), M = n.move(-1, y) + n.line(-1, y), 0 < a.globals.previousPaths.length) {
							var _ = this.checkPreviousPaths({
								pathFromLine: P,
								pathFromArea: M,
								realIndex: v
							});
							P = _.pathFromLine, M = _.pathFromArea
						}
						for (var N = 0; N < a.globals.dataPoints - 1; N++) {
							a.globals.dataXY ? k = (a.globals.seriesX[v][N + 1] - a.globals.minX) / c : k += x, S = a.config.chart.stacked ?
								(R = 0 < g && a.globals.collapsedSeries.length < a.config.series.length - 1 ? f[g - 1][N + 1] : y,
									void 0 === t[g][N + 1] || null === t[g][N + 1] ? R - a.globals.minY / l[this.yaxisIndex] : R - t[g][N +
										1
									] / l[this.yaxisIndex]) : void 0 === t[g][N + 1] || null === t[g][N + 1] ? y - a.globals.minY / l[
									this.yaxisIndex] : y - t[g][N + 1] / l[this.yaxisIndex], m.push(k), b.push(S);
							var B = this.createPaths({
								series: t,
								i: g,
								j: N,
								x: k,
								y: S,
								xDivision: x,
								pX: I,
								pY: F,
								areaBottomY: w,
								linePath: A,
								areaPath: C,
								linePaths: L,
								areaPaths: T
							});
							T = B.areaPaths, L = B.linePaths, I = B.pX, F = B.pY, C = B.areaPath, A = B.linePath, this.appendPathFrom &&
								(P += n.line(k, y), M += n.line(k, y));
							var j = this.calculatePoints({
								series: t,
								x: k,
								y: S,
								realIndex: v,
								i: g,
								j: N,
								prevY: W,
								categoryAxisCorrection: p,
								xRatio: c
							});
							if (this.pointsChart) this.scatter.draw(E, N, {
								realIndex: v,
								pointsPos: j,
								zRatio: h,
								elParent: z
							});
							else {
								var V = new st.default(this.ctx).plotChartMarkers(j, v, N + 1);
								null !== V && z.add(V)
							}
							var G = new nt.default(this.ctx).drawDataLabel(j, v, N + 1);
							null !== G && X.add(G)
						}
						f.push(b), a.globals.seriesXvalues[v] = m, a.globals.seriesYvalues[v] = b, this.pointsChart || a.globals
							.delayedElements.push({
								el: z.node,
								index: v
							});
						var U = {
							i: g,
							realIndex: v,
							animationDelay: g,
							initialSpeed: a.config.chart.animations.speed,
							dataChangeSpeed: a.config.chart.animations.dynamicAnimation.speed,
							className: "apexcharts-" + r,
							id: "apexcharts-" + r
						};
						if (a.config.stroke.show && !this.pointsChart) {
							var q = null;
							q = "line" === r ? s.fillPath(E, {
								seriesNumber: v,
								i: g
							}) : a.globals.stroke.colors[v];
							for (var Z = 0; Z < L.length; Z++) {
								var $ = n.renderPaths(et({}, U, {
									pathFrom: P,
									pathTo: L[Z],
									stroke: q,
									strokeWidth: Array.isArray(a.config.stroke.width) ? a.config.stroke.width[v] : a.config.stroke.width,
									strokeLineCap: a.config.stroke.lineCap,
									fill: "none"
								}));
								E.add($)
							}
						}
						if ("area" === r)
							for (var J = s.fillPath(E, {
									seriesNumber: v
								}), Q = 0; Q < T.length; Q++) {
								var K = n.renderPaths(et({}, U, {
									pathFrom: M,
									pathTo: T[Q],
									stroke: "none",
									strokeWidth: 0,
									strokeLineCap: null,
									fill: J
								}));
								E.add(K)
							}
						E.add(z), E.add(X), d.push(E)
					}
					for (var tt = d.length; 0 < tt; tt--) o.add(d[tt - 1]);
					return o
				}
			}, {
				key: "createPaths",
				value: function(t) {
					var e = t.series,
						i = t.i,
						a = t.j,
						n = t.x,
						s = t.y,
						r = t.pX,
						o = t.pY,
						l = t.xDivision,
						h = t.areaBottomY,
						c = t.linePath,
						u = t.areaPath,
						d = t.linePaths,
						f = t.areaPaths,
						p = this.w,
						g = new it.default(this.ctx);
					if ("smooth" === p.config.stroke.curve) {
						var x = .35 * (n - r);
						p.globals.hasNullValues ? (null !== e[i][a] && (u = null !== e[i][a + 1] ? (c = g.move(r, o) + g.curve(r +
									x, o, n - x, s, n + 1, s), g.move(r + 1, o) + g.curve(r + x, o, n - x, s, n + 1, s) + g.line(n, h) +
								g.line(r, h) + "z") : (c = g.move(r, o), g.move(r, o) + "z")), d.push(c), f.push(u)) : (c += g.curve(r +
								x, o, n - x, s, n, s), u += g.curve(r + x, o, n - x, s, n, s)), r = n, o = s, a === e[i].length - 2 &&
							(u = u + g.curve(r, h, n, h, n, h) + "z", p.globals.hasNullValues || (d.push(c), f.push(u)))
					} else null === e[i][a + 1] && (c += g.move(n, s), u = u + g.line(n - l, h) + g.move(n, s)), null === e[i]
						[a] && (c += g.move(n, s), u += g.move(n, h)), c += g.line(n, s), u += g.line(n, s), a === e[i].length -
						2 && (u = u + g.line(n, h) + "z", d.push(c), f.push(u));
					return {
						linePaths: d,
						areaPaths: f,
						pX: r,
						pY: o,
						linePath: c,
						areaPath: u
					}
				}
			}, {
				key: "calculatePoints",
				value: function(t) {
					var e = t.series,
						i = t.realIndex,
						a = t.x,
						n = t.y,
						s = t.i,
						r = t.j,
						o = t.prevY,
						l = t.categoryAxisCorrection,
						h = t.xRatio,
						c = this.w,
						u = [],
						d = [];
					if (0 === r) {
						var f = l + c.config.markers.offsetX;
						c.globals.dataXY && (f = (c.globals.seriesX[i][0] - c.globals.minX) / h + c.config.markers.offsetX), u.push(
								f), d.push(null !== e[s][0] ? o + c.config.markers.offsetY : null), u.push(a + c.config.markers.offsetX),
							d.push(null !== e[s][r + 1] ? n + c.config.markers.offsetY : null)
					} else u.push(a + c.config.markers.offsetX), d.push(null !== e[s][r + 1] ? n + c.config.markers.offsetY :
						null);
					return {
						x: u,
						y: d
					}
				}
			}, {
				key: "checkPreviousPaths",
				value: function(t) {
					for (var e = t.pathFromLine, i = t.pathFromArea, a = t.realIndex, n = this.w, s = 0; s < n.globals.previousPaths
						.length; s++) {
						var r = n.globals.previousPaths[s];
						("line" === r.type || "area" === r.type) && 0 < r.paths.length && parseInt(r.realIndex) === parseInt(a) &&
							("line" === r.type ? (this.appendPathFrom = !1, e = n.globals.previousPaths[s].paths[0].d) : "area" ===
								r.type && (this.appendPathFrom = !1, e = n.globals.previousPaths[s].paths[0].d, i = n.globals.previousPaths[
									s].paths[1].d))
					}
					return {
						pathFromLine: e,
						pathFromArea: i
					}
				}
			}, {
				key: "determineFirstPrevY",
				value: function(t) {
					var e = t.i,
						i = t.series,
						a = t.yRatio,
						n = t.zeroY,
						s = t.prevY,
						r = t.prevSeriesY,
						o = t.lineYPosition,
						l = this.w;
					if (void 0 !== i[e][0]) s = l.config.chart.stacked ? (o = 0 < e ? r[e - 1][0] : n) - i[e][0] / a : n - i[
						e][0] / a;
					else if (l.config.chart.stacked && 0 < e && void 0 === i[e][0])
						for (var h = e - 1; 0 <= h; h--)
							if (null !== i[h][0] && void 0 !== i[h][0]) {
								s = o = r[h][0];
								break
							} return {
						prevY: s,
						lineYPosition: o
					}
				}
			}]), i
		}();
		e.default = r
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			T = a(i(73)),
			E = a(i(1)),
			z = a(i(13)),
			X = a(i(0)),
			O = a(i(6));

		function a(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var s = function(t) {
			function a(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, a);
				var e = function(t, e) {
					if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !e || "object" != typeof e && "function" != typeof e ? t : e
				}(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
				e.ctx = t, e.w = t.w, e.animBeginArr = [0], e.animDur = 0;
				var i = e.w;
				return e.startAngle = i.config.plotOptions.radialBar.startAngle, e.endAngle = i.config.plotOptions.radialBar.endAngle,
					e.trackStartAngle = i.config.plotOptions.radialBar.track.startAngle, e.trackEndAngle = i.config.plotOptions.radialBar
					.track.endAngle, e.trackStartAngle || (e.trackStartAngle = e.startAngle), e.trackEndAngle || (e.trackEndAngle =
						e.endAngle), 360 === e.endAngle && (e.endAngle = 359.99), e.fullAngle = 360 - i.config.plotOptions.radialBar
					.endAngle - i.config.plotOptions.radialBar.startAngle, e.margin = parseInt(i.config.plotOptions.radialBar.track
						.margin), e
			}
			return function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError(
					"Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}(a, T.default), n(a, [{
				key: "draw",
				value: function(t) {
					var e = this.w,
						i = new X.default(this.ctx),
						a = i.group({
							class: "apexcharts-radialbar"
						}),
						n = i.group(),
						s = this.defaultSize / 2,
						r = e.globals.gridWidth / 2,
						o = this.defaultSize / 2.05 - e.config.stroke.width - e.config.chart.dropShadow.blur;
					void 0 !== e.config.plotOptions.radialBar.size && (o = e.config.plotOptions.radialBar.size);
					var l = e.globals.fill.colors;
					if (e.config.plotOptions.radialBar.track.show) {
						var h = this.drawTracks({
							size: o,
							centerX: r,
							centerY: s,
							colorArr: l,
							series: t
						});
						n.add(h)
					}
					var c = this.drawArcs({
						size: o,
						centerX: r,
						centerY: s,
						colorArr: l,
						series: t
					});
					return n.add(c.g), "front" === e.config.plotOptions.radialBar.hollow.position && (c.g.add(c.elHollow), c.g
						.add(c.dataLabels)), a.add(n), a
				}
			}, {
				key: "drawTracks",
				value: function(t) {
					var e = this.w,
						i = new X.default(this.ctx),
						a = i.group(),
						n = new O.default(this.ctx),
						s = new z.default(this.ctx),
						r = this.getStrokeWidth(t);
					t.size = t.size - r / 2;
					for (var o = 0; o < t.series.length; o++) {
						var l = i.group({
							class: "apexcharts-radialbar-track apexcharts-track"
						});
						a.add(l), l.attr({
							id: "apexcharts-track-" + o,
							rel: o + 1
						}), t.size = t.size - r - this.margin;
						var h = e.config.plotOptions.radialBar.track,
							c = s.fillPath(l, {
								seriesNumber: 0,
								size: t.size,
								fillColors: h.background,
								solid: !0
							}),
							u = this.trackStartAngle,
							d = this.trackEndAngle;
						360 <= Math.abs(d) + Math.abs(u) && (d = 360 - Math.abs(this.startAngle) - .1);
						var f = i.drawPath({
							d: "",
							stroke: c,
							strokeWidth: r * parseInt(h.strokeWidth) / 100,
							fill: "none",
							strokeOpacity: h.opacity,
							classes: "apexcharts-radialbar-area"
						});
						if (h.dropShadow.enabled) {
							var p = h.dropShadow;
							n.dropShadow(f, p)
						}
						l.add(f), f.attr("id", "apexcharts-radialbarTrack-" + o), new T.default(this.ctx).animatePaths(f, {
							centerX: t.centerX,
							centerY: t.centerY,
							endAngle: d,
							startAngle: u,
							size: t.size,
							i: o,
							totalItems: 2,
							animBeginArr: 0,
							dur: 0,
							easing: e.globals.easing
						})
					}
					return a
				}
			}, {
				key: "drawArcs",
				value: function(t) {
					var e = this.w,
						i = new X.default(this.ctx),
						a = new z.default(this.ctx),
						n = new O.default(this.ctx),
						s = i.group(),
						r = this.getStrokeWidth(t);
					t.size = t.size - r / 2;
					var o = e.config.plotOptions.radialBar.hollow.background,
						l = t.size - r * t.series.length - this.margin * t.series.length - r * parseInt(e.config.plotOptions.radialBar
							.track.strokeWidth) / 100 / 2,
						h = l - e.config.plotOptions.radialBar.hollow.margin;
					void 0 !== e.config.plotOptions.radialBar.hollow.image && (o = this.drawHollowImage(t, s, l, o));
					var c = this.drawHollow({
						size: h,
						centerX: t.centerX,
						centerY: t.centerY,
						fill: o
					});
					if (e.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
						var u = e.config.plotOptions.radialBar.hollow.dropShadow;
						n.dropShadow(c, u)
					}
					var d = 1;
					("hover" === e.config.plotOptions.radialBar.dataLabels.showOn || 1 < e.globals.series.length) && (d = 0);
					var f = this.renderDataLabels({
						hollowSize: l,
						centerX: t.centerX,
						centerY: t.centerY,
						opacity: d
					});
					"back" === e.config.plotOptions.radialBar.hollow.position && (s.add(c), s.add(f));
					var p = !1;
					e.config.plotOptions.radialBar.inverseOrder && (p = !0);
					for (var g = p ? t.series.length - 1 : 0; p ? 0 <= g : g < t.series.length; p ? g-- : g++) {
						var x = i.group({
							class: "apexcharts-radial-series apexcharts-series"
						});
						s.add(x), x.attr({
							id: "apexcharts-series-" + g,
							rel: g + 1
						}), t.size = t.size - r - this.margin;
						var v = a.fillPath(x, {
								seriesNumber: g,
								size: t.size
							}),
							b = this.startAngle,
							m = void 0,
							y = Math.abs(e.config.plotOptions.radialBar.endAngle - e.config.plotOptions.radialBar.startAngle),
							w = Math.round(y * E.default.negToZero(t.series[g]) / 100) + this.startAngle,
							k = void 0;
						e.globals.dataChanged && (m = this.startAngle, k = Math.round(y * E.default.negToZero(e.globals.previousPaths[
							g]) / 100) + m), 360 <= Math.abs(w) + Math.abs(b) && (w -= .01), 360 <= Math.abs(k) + Math.abs(m) && (
							k -= .01);
						var S = w - b,
							A = this.getChangedPath(m, k),
							C = i.drawPath({
								d: A,
								stroke: v,
								strokeWidth: r,
								fill: "none",
								fillOpacity: e.config.fill.opacity,
								classes: "apexcharts-radialbar-area",
								strokeDashArray: e.config.stroke.dashArray
							});
						if (X.default.setAttrs(C.node, {
								"data:angle": S,
								"data:value": t.series[g]
							}), e.config.chart.dropShadow.enabled) {
							var P = e.config.chart.dropShadow;
							n.dropShadow(C, P)
						}
						this.addListeners(C), C.node.addEventListener("mouseenter", this.dataLabelsMouseIn.bind(this, C.node)),
							C.node.addEventListener("mouseleave", this.dataLabelsMouseout.bind(this, C.node)), x.add(C), C.attr(
								"id", "apexcharts-radialArc-" + g);
						var M = new T.default(this.ctx),
							L = 0;
						!M.initialAnim || e.globals.resized || e.globals.dataChanged || (L = (w - b) / 360 * e.config.chart.animations
							.speed, this.animDur = L / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)
						), e.globals.dataChanged && (L = (w - b) / 360 * e.config.chart.animations.dynamicAnimation.speed, this
							.animDur = L / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), M.animatePaths(
							C, {
								centerX: t.centerX,
								centerY: t.centerY,
								endAngle: w,
								startAngle: b,
								prevEndAngle: k,
								prevStartAngle: m,
								size: t.size,
								i: g,
								totalItems: 2,
								animBeginArr: this.animBeginArr,
								dur: L,
								easing: e.globals.easing
							})
					}
					return {
						g: s,
						elHollow: c,
						dataLabels: f
					}
				}
			}, {
				key: "drawHollow",
				value: function(t) {
					var e = new X.default(this.ctx).drawCircle(2 * t.size);
					return e.attr({
						class: "apexcharts-radialbar-hollow",
						cx: t.centerX,
						cy: t.centerY,
						r: t.size,
						fill: t.fill
					}), e
				}
			}, {
				key: "drawHollowImage",
				value: function(e, t, i, a) {
					var n = this.w,
						s = new z.default(this.ctx),
						r = (Math.random() + 1).toString(36).substring(4),
						o = n.config.plotOptions.radialBar.hollow.image;
					if (n.config.plotOptions.radialBar.hollow.imageClipped) s.clippedImgArea({
						width: i,
						height: i,
						image: o,
						patternID: "pattern" + n.globals.cuid + r
					}), a = "url(#pattern" + n.globals.cuid + r + ")";
					else {
						var l = n.config.plotOptions.radialBar.hollow.imageWidth,
							h = n.config.plotOptions.radialBar.hollow.imageHeight;
						if (void 0 === l && void 0 === h) {
							var c = n.globals.dom.Paper.image(o).loaded(function(t) {
								this.move(e.centerX - t.width / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY -
									t.height / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetY)
							});
							t.add(c)
						} else {
							var u = n.globals.dom.Paper.image(o).loaded(function(t) {
								this.move(e.centerX - l / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - h / 2 +
									n.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l, h)
							});
							t.add(u)
						}
					}
					return a
				}
			}, {
				key: "dataLabelsMouseIn",
				value: function(t) {
					var e = this.w,
						i = t.getAttribute("data:value"),
						a = void 0,
						n = e.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel")) - 1],
						s = e.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),
						r = e.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
					i = (0, e.config.plotOptions.radialBar.dataLabels.value.formatter)(i), null !== s && (s.textContent = n),
						null !== r && (r.textContent = i), a = void 0 === e.config.plotOptions.radialBar.dataLabels.name.color ?
						e.globals.colors[parseInt(t.parentNode.getAttribute("rel")) - 1] : e.config.plotOptions.radialBar.dataLabels
						.name.color;
					var o = e.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
					null !== o && (o.style.opacity = 1), null !== s && (s.style.fill = a)
				}
			}, {
				key: "dataLabelsMouseout",
				value: function(t) {
					var e = this.w,
						i = e.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
					("always" !== e.config.plotOptions.radialBar.dataLabels.showOn || 1 < e.globals.series.length) && null !==
						i && (i.style.opacity = 0)
				}
			}, {
				key: "getStrokeWidth",
				value: function(t) {
					var e = this.w;
					return t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size)) / 100 / (t.series.length + 1) -
						this.margin
				}
			}, {
				key: "renderDataLabels",
				value: function(t) {
					var e = this.w,
						i = new X.default(this.ctx),
						a = i.group({
							class: "apexcharts-datalabels-group"
						});
					a.node.style.opacity = t.opacity;
					var n = t.centerX,
						s = t.centerY,
						r = void 0,
						o = void 0;
					r = void 0 === e.config.plotOptions.radialBar.dataLabels.name.color ? e.globals.colors[0] : e.config.plotOptions
						.radialBar.dataLabels.name.color, o = void 0 === e.config.plotOptions.radialBar.dataLabels.value.color ?
						e.config.chart.foreColor : e.config.plotOptions.radialBar.dataLabels.value.color;
					var l = (0, e.config.plotOptions.radialBar.dataLabels.value.formatter)(e.globals.series[0]);
					if (e.config.plotOptions.radialBar.dataLabels.name.show) {
						var h = i.drawText({
							x: n,
							y: s + parseInt(e.config.plotOptions.radialBar.dataLabels.name.offsetY),
							text: e.globals.seriesNames[0],
							textAnchor: "middle",
							foreColor: r,
							fontSize: e.config.plotOptions.radialBar.dataLabels.name.fontSize,
							fontFamily: e.config.plotOptions.radialBar.dataLabels.name.fontFamily
						});
						h.node.classList.add("apexcharts-datalabel-label"), a.add(h)
					}
					if (e.config.plotOptions.radialBar.dataLabels.value.show) {
						var c = e.config.plotOptions.radialBar.dataLabels.name.show ? parseInt(e.config.plotOptions.radialBar.dataLabels
								.value.offsetY) + 16 : e.config.plotOptions.radialBar.dataLabels.value.offsetY,
							u = i.drawText({
								x: n,
								y: s + c,
								text: l,
								textAnchor: "middle",
								foreColor: o,
								fontSize: e.config.plotOptions.radialBar.dataLabels.value.fontSize,
								fontFamily: e.config.plotOptions.radialBar.dataLabels.value.fontFamily
							});
						u.node.classList.add("apexcharts-datalabel-value"), a.add(u)
					}
					return a
				}
			}]), a
		}();
		e.default = s
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			n = s(i(0)),
			g = s(i(51)),
			x = s(i(1));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.graphics = new n.default(this.ctx), this.xDivision = this.w.globals
					.gridWidth / this.w.globals.dataPoints
			}
			return a(e, [{
				key: "drawAnnotations",
				value: function() {
					var t = this.w;
					if (t.globals.axisCharts) {
						for (var e = this.drawYAxisAnnotations(), i = this.drawXAxisAnnotations(), a = this.drawPointAnnotations(),
								n = [e, i, a], s = [i.node, e.node, a.node], r = 0; r < 3; r++) t.globals.dom.elGraphical.add(n[r]), t
							.globals.delayedElements.push({
								el: s[r],
								index: 0
							});
						this.setOrientations(t.config.annotations.xaxis), this.annotationsBackground()
					}
				}
			}, {
				key: "addXaxisAnnotation",
				value: function(t, e, i) {
					var a = this.w,
						n = t.strokeDashArray,
						s = (t.x - a.globals.minX) / (a.globals.xRange / a.globals.gridWidth),
						r = this.graphics.drawLine(s + t.offsetX, 0 + t.offsetY, s + t.offsetX, a.globals.gridHeight + t.offsetY,
							t.borderColor, n);
					e.appendChild(r.node);
					var o = "top" === t.label.position ? -3 : a.globals.gridHeight,
						l = t.label.text ? t.label.text : "",
						h = this.graphics.drawText({
							x: s + t.label.offsetX,
							y: o + t.label.offsetY,
							text: l,
							textAnchor: t.label.textAnchor,
							fontSize: t.label.style.fontSize,
							fontFamily: t.label.style.fontFamily,
							foreColor: t.label.style.color,
							cssClass: "apexcharts-xaxis-annotation-label " + t.label.style.cssClass
						});
					h.attr({
						rel: i
					}), e.appendChild(h.node)
				}
			}, {
				key: "drawXAxisAnnotations",
				value: function() {
					var i = this,
						t = this.w,
						a = this.graphics.group({
							class: "apexcharts-xaxis-annotations"
						});
					return t.config.annotations.xaxis.map(function(t, e) {
						i.addXaxisAnnotation(t, a.node, e)
					}), a
				}
			}, {
				key: "addYaxisAnnotation",
				value: function(t, e, i) {
					var a = this.w,
						n = t.strokeDashArray,
						s = a.globals.gridHeight - (t.y - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a
							.globals.gridHeight),
						r = t.label.text ? t.label.text : "",
						o = this.graphics.drawLine(0 + t.offsetX, s + t.offsetY, a.globals.gridWidth + t.offsetX, s + t.offsetY,
							t.borderColor, n);
					e.appendChild(o.node);
					var l = "right" === t.label.position ? a.globals.gridWidth : 0,
						h = this.graphics.drawText({
							x: l + t.label.offsetX,
							y: s + t.label.offsetY - 3,
							text: r,
							textAnchor: t.label.textAnchor,
							fontSize: t.label.style.fontSize,
							fontFamily: t.label.style.fontFamily,
							foreColor: t.label.style.color,
							cssClass: "apexcharts-yaxis-annotation-label " + t.label.style.cssClass
						});
					h.attr({
						rel: i
					}), e.appendChild(h.node)
				}
			}, {
				key: "drawYAxisAnnotations",
				value: function() {
					var i = this,
						t = this.w,
						a = this.graphics.group({
							class: "apexcharts-yaxis-annotations"
						});
					return t.config.annotations.yaxis.map(function(t, e) {
						i.addYaxisAnnotation(t, a.node, e)
					}), a
				}
			}, {
				key: "addPointAnnotation",
				value: function(t, e, i) {
					var a = this.w,
						n = 0,
						s = 0,
						r = 0;
					if ("string" == typeof t.x) {
						"bar" === a.config.chart.type && a.config.plotOptions.bar.horizontal;
						var o = a.globals.labels.indexOf(t.x),
							l = a.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (o + 1) + ")");
						n = parseInt(l.getAttribute("x"));
						var h = t.y;
						null === t.y && (h = a.globals.series[t.seriesIndex][o]), s = a.globals.gridHeight - (h - a.globals.minYArr[
								t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight) - parseInt(t.label.style.fontSize) -
							t.marker.size, r = a.globals.gridHeight - (h - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] /
								a.globals.gridHeight)
					} else n = (t.x - a.globals.minX) / (a.globals.xRange / a.globals.gridWidth), s = a.globals.gridHeight -
						(parseInt(t.y) - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight) -
						parseInt(t.label.style.fontSize) - t.marker.size, r = a.globals.gridHeight - (t.y - a.globals.minYArr[t.yAxisIndex]) /
						(a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight);
					var c = {
							pSize: t.marker.size,
							pWidth: t.marker.strokeWidth,
							pointFillColor: t.marker.fillColor,
							pointStrokeColor: t.marker.strokeColor,
							shape: t.marker.shape,
							radius: t.marker.radius
						},
						u = this.graphics.drawMarker(n, r, c);
					e.appendChild(u.node);
					var d = t.label.text ? t.label.text : "",
						f = this.graphics.drawText({
							x: n + t.label.offsetX,
							y: s + t.label.offsetY,
							text: d,
							textAnchor: t.label.textAnchor,
							fontSize: t.label.style.fontSize,
							fontFamily: t.label.style.fontFamily,
							foreColor: t.label.style.color,
							cssClass: "apexcharts-point-annotation-label " + t.label.style.cssClass
						});
					f.attr({
						rel: i
					}), e.appendChild(f.node)
				}
			}, {
				key: "drawPointAnnotations",
				value: function() {
					var i = this,
						t = this.w,
						a = this.graphics.group({
							class: "apexcharts-point-annotations"
						});
					return t.config.annotations.points.map(function(t, e) {
						i.addPointAnnotation(t, a.node, e)
					}), a
				}
			}, {
				key: "setOrientations",
				value: function(t) {
					var l = this,
						h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
						c = this.w;
					t.map(function(t, e) {
						if ("vertical" === t.label.orientation) {
							var i = null !== h ? h : e,
								a = c.globals.dom.baseEl.querySelector(
									".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='" + i + "']");
							if (null !== a) {
								var n = a.getBoundingClientRect();
								a.setAttribute("x", parseInt(a.getAttribute("x")) - n.height + 4), "top" === t.label.position ? a.setAttribute(
									"y", parseInt(a.getAttribute("y")) + n.width) : a.setAttribute("y", parseInt(a.getAttribute("y")) -
									n.width);
								var s = l.graphics.rotateAroundCenter(a),
									r = s.x,
									o = s.y;
								a.setAttribute("transform", "rotate(-90 " + r + " " + o + ")")
							}
						}
					})
				}
			}, {
				key: "addBackgroundToAnno",
				value: function(t, e) {
					var i = this.w.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),
						a = t.getBoundingClientRect(),
						n = e.label.style.padding.left,
						s = e.label.style.padding.right,
						r = e.label.style.padding.top,
						o = e.label.style.padding.bottom;
					"vertical" === e.label.orientation && (r = e.label.style.padding.left, o = e.label.style.padding.right, n =
						e.label.style.padding.top, s = e.label.style.padding.bottom);
					var l = a.left - i.left - n,
						h = a.top - i.top - r;
					return this.graphics.drawRect(l, h, a.width + n + s, a.height + r + o, 0, e.label.style.background, 1, e.label
						.borderWidth, e.label.borderColor, 0)
				}
			}, {
				key: "annotationsBackground",
				value: function() {
					var r = this,
						o = this.w,
						i = function(t, e, i) {
							var a = o.globals.dom.baseEl.querySelector(".apexcharts-" + i + "-annotations .apexcharts-" + i +
									"-annotation-label[rel='" + e + "']"),
								n = a.parentNode,
								s = r.addBackgroundToAnno(a, t);
							n.insertBefore(s.node, a)
						};
					o.config.annotations.xaxis.map(function(t, e) {
						i(t, e, "xaxis")
					}), o.config.annotations.yaxis.map(function(t, e) {
						i(t, e, "yaxis")
					}), o.config.annotations.points.map(function(t, e) {
						i(t, e, "point")
					})
				}
			}, {
				key: "addText",
				value: function(t, e, i) {
					var a = t.x,
						n = t.y,
						s = t.text,
						r = t.textAnchor,
						o = t.appendTo,
						l = void 0 === o ? ".apexcharts-inner" : o,
						h = t.foreColor,
						c = t.fontSize,
						u = t.fontFamily,
						d = t.cssClass,
						f = t.backgroundColor,
						p = t.borderWidth,
						g = t.strokeDashArray,
						x = t.radius,
						v = t.borderColor,
						b = t.paddingLeft,
						m = void 0 === b ? 4 : b,
						y = t.paddingRight,
						w = void 0 === y ? 4 : y,
						k = t.paddingBottom,
						S = void 0 === k ? 2 : k,
						A = t.paddingTop,
						C = void 0 === A ? 2 : A,
						P = i,
						M = P.w,
						L = M.globals.dom.baseEl.querySelector(l),
						T = this.graphics.drawText({
							x: a,
							y: n,
							text: s,
							textAnchor: r || "start",
							fontSize: c || "12px",
							fontFamily: u || "Arial",
							foreColor: h || M.config.chart.foreColor,
							cssClass: d
						});
					L.appendChild(T.node);
					var E = T.bbox(),
						z = this.graphics.drawRect(E.x - m, E.y - C, E.width + m + w, E.height + S + C, x, f, 1, p, v, g);
					return T.before(z), e && M.globals.memory.methodsToExec.push({
						context: P,
						method: P.addText,
						params: {
							x: a,
							y: n,
							text: s,
							textAnchor: r,
							appendTo: l,
							foreColor: h,
							fontSize: c,
							cssClass: d,
							backgroundColor: f,
							borderWidth: p,
							strokeDashArray: g,
							radius: x,
							borderColor: v,
							paddingLeft: m,
							paddingRight: w,
							paddingBottom: S,
							paddingTop: C
						}
					}), i
				}
			}, {
				key: "addPointAnnotationExternal",
				value: function(t, e, i) {
					return this.addAnnotationExternal({
						params: t,
						pushToMemory: e,
						context: i,
						type: "point",
						contextMethod: i.addPointAnnotation
					}), i
				}
			}, {
				key: "addYaxisAnnotationExternal",
				value: function(t, e, i) {
					return this.addAnnotationExternal({
						params: t,
						pushToMemory: e,
						context: i,
						type: "yaxis",
						contextMethod: i.addYaxisAnnotation
					}), i
				}
			}, {
				key: "addXaxisAnnotationExternal",
				value: function(t, e, i) {
					return this.addAnnotationExternal({
						params: t,
						pushToMemory: e,
						context: i,
						type: "xaxis",
						contextMethod: i.addXaxisAnnotation
					}), i
				}
			}, {
				key: "addAnnotationExternal",
				value: function(t) {
					var e = t.params,
						i = t.pushToMemory,
						a = t.context,
						n = t.type,
						s = t.contextMethod,
						r = a,
						o = r.w,
						l = o.globals.dom.baseEl.querySelector(".apexcharts-" + n + "-annotations"),
						h = l.childNodes.length + 1,
						c = new g.default,
						u = Object.assign({}, "xaxis" === n ? c.xAxisAnnotation : "yaxis" === n ? c.yAxisAnnotation : c.pointAnnotation),
						d = x.default.extend(u, e);
					switch (n) {
						case "xaxis":
							this.addXaxisAnnotation(d, l, h);
							break;
						case "yaxis":
							this.addYaxisAnnotation(d, l, h);
							break;
						case "point":
							this.addPointAnnotation(d, l, h)
					}
					var f = o.globals.dom.baseEl.querySelector(".apexcharts-" + n + "-annotations .apexcharts-" + n +
							"-annotation-label[rel='" + h + "']"),
						p = this.addBackgroundToAnno(f, d);
					return l.insertBefore(p.node, f), i && o.globals.memory.methodsToExec.push({
						context: r,
						method: s,
						params: e
					}), a
				}
			}]), e
		}();
		t.exports = r
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			n = r(i(50)),
			s = r(i(142));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var o = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.opts = t
			}
			return a(e, [{
				key: "init",
				value: function() {
					var t = new n.default(this.opts).init();
					return {
						config: t,
						globals: (new s.default).init(t)
					}
				}
			}]), e
		}();
		t.exports = o
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			g = k(i(44)),
			x = k(i(125)),
			v = k(i(126)),
			n = k(i(75)),
			s = k(i(76)),
			c = k(i(52)),
			b = k(i(127)),
			m = k(i(73)),
			y = k(i(129)),
			w = k(i(128)),
			r = k(i(0)),
			o = k(i(140)),
			l = k(i(48)),
			h = k(i(49)),
			u = k(i(135)),
			d = k(i(1)),
			f = k(i(26)),
			p = k(i(77));

		function k(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var S = function() {
			function i(t, e) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, i), this.ctx = e, this.w = e.w, this.el = t, this.coreUtils = new n.default(this.ctx), this.twoDSeries = [],
					this.threeDSeries = [], this.twoDSeriesX = []
			}
			return a(i, [{
				key: "setupElements",
				value: function() {
					var t = this.w.globals,
						e = this.w.config,
						i = new r.default(this.ctx),
						a = e.chart.type;
					t.axisCharts = -1 < ["line", "area", "bar", "candlestick", "scatter", "bubble", "heatmap"].indexOf(a), t.xyCharts = -
						1 < ["line", "area", "bar", "candlestick", "scatter", "bubble"].indexOf(a), t.chartClass = ".apexcharts" +
						t.cuid, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), r.default.setAttrs(t.dom.elWrap, {
							id: t.chartClass.substring(1),
							class: "apexcharts-canvas " + t.chartClass.substring(1)
						}), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({
							class: "apexcharts-svg",
							"xmlns:data": "ApexChartsNS",
							transform: "translate(" + e.chart.offsetX + ", " + e.chart.offsetY + ")"
						}), t.dom.Paper.node.style.background = e.chart.background, this.setSVGDimensions(), t.dom.elGraphical =
						t.dom.Paper.group().attr({
							class: "apexcharts-inner apexcharts-graphical"
						}), t.dom.elDefs = t.dom.Paper.defs(), t.dom.elLegendWrap = i.group({
							class: "apexcharts-legend"
						}), t.dom.Paper.add(t.dom.elLegendWrap), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom
							.elDefs)
				}
			}, {
				key: "plotChartType",
				value: function(i, t) {
					var a = this.w,
						e = a.config,
						n = a.globals,
						s = {
							series: [],
							i: []
						},
						r = {
							series: [],
							i: []
						},
						o = {
							series: [],
							i: []
						},
						l = {
							series: [],
							i: []
						};
					n.series.map(function(t, e) {
						if (void 0 !== i[e].type) {
							if ("column" === i[e].type || "bar" === i[e].type) a.config.plotOptions.bar.horizontal = !1, o.series
								.push(t), o.i.push(e);
							else if ("area" === i[e].type) r.series.push(t), r.i.push(e);
							else if ("line" === i[e].type) s.series.push(t), s.i.push(e);
							else {
								if ("candlestick" !== i[e].type) throw new Error(
									"You have specified an unrecognized chart type. Available types for this propery are line/area/column/bar"
								);
								l.series.push(t), l.i.push(e)
							}
							n.comboCharts = !0
						} else s.series.push(t), s.i.push(e)
					});
					var h = new w.default(this.ctx, t),
						c = new v.default(this.ctx, t),
						u = new m.default(this.ctx),
						d = new y.default(this.ctx),
						f = [];
					if (n.comboCharts) {
						if (0 < r.series.length && f.push(h.draw(r.series, "area", r.i)), 0 < o.series.length) {
							var p = new g.default(this.ctx, t);
							f.push(p.draw(o.series, o.i))
						}
						0 < s.series.length && f.push(h.draw(s.series, "line", s.i)), 0 < l.series.length && f.push(c.draw(l.series,
							l.i))
					} else switch (e.chart.type) {
						case "line":
							f = h.draw(n.series, "line");
							break;
						case "area":
							f = h.draw(n.series, "area");
							break;
						case "bar":
							if (e.chart.stacked) f = new x.default(this.ctx, t).draw(n.series);
							else f = new g.default(this.ctx, t).draw(n.series);
							break;
						case "candlestick":
							f = new v.default(this.ctx, t).draw(n.series);
							break;
						case "heatmap":
							f = new b.default(this.ctx, t).draw(n.series);
							break;
						case "pie":
						case "donut":
							f = u.draw(n.series);
							break;
						case "radialBar":
							f = d.draw(n.series);
							break;
						default:
							f = h.draw(n.series)
					}
					return f
				}
			}, {
				key: "setSVGDimensions",
				value: function() {
					var t = this.w.globals,
						e = this.w.config;
					t.svgWidth = e.chart.width, t.svgHeight = e.chart.height;
					var i = d.default.getDimensions(this.el),
						a = e.chart.width.toString().split(/[0-9]+/g).pop();
					if ("%" === a ? t.svgWidth = i[0] * parseInt(e.chart.width) / 100 : "px" !== a && "" !== a || (t.svgWidth =
							parseInt(e.chart.width)), "auto" !== t.svgHeight && "" !== t.svgHeight)
						if ("%" === e.chart.height.toString().split(/[0-9]+/g).pop()) {
							var n = d.default.getDimensions(this.el.parentNode);
							t.svgHeight = n[1] * parseInt(e.chart.height) / 100
						} else t.svgHeight = parseInt(e.chart.height);
					else t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth;
					r.default.setAttrs(t.dom.Paper.node, {
						width: t.svgWidth,
						height: t.svgHeight
					});
					var s = e.chart.sparkline.enabled ? 0 : 14;
					t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + s + "px", t.dom.elWrap.style.width =
						t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px"
				}
			}, {
				key: "shiftGraphPosition",
				value: function() {
					var t = this.w.globals,
						e = t.translateY,
						i = {
							transform: "translate(" + t.translateX + ", " + e + ")"
						};
					r.default.setAttrs(t.dom.elGraphical.node, i)
				}
			}, {
				key: "coreCalculations",
				value: function() {
					new u.default(this.ctx).init()
				}
			}, {
				key: "resetGlobals",
				value: function() {
					var t = this,
						e = this.w.globals;
					e.series = [], e.seriesCandleO = [], e.seriesCandleH = [], e.seriesCandleL = [], e.seriesCandleC = [], e.seriesPercent = [],
						e.seriesX = [], e.seriesZ = [], e.seriesNames = [], e.seriesTotals = [], e.stackedSeriesTotals = [], e.labels = [],
						e.timelineLabels = [], e.noLabelsProvided = !1, e.timescaleTicks = [], e.resizeTimer = null, e.selectionResizeTimer =
						null, e.seriesXvalues = t.w.config.series.map(function(t) {
							return []
						}), e.seriesYvalues = t.w.config.series.map(function(t) {
							return []
						}), e.delayedElements = [], e.pointsArray = [], e.dataLabelsRects = [], e.dataXY = !1, e.dataXYZ = !1, e
						.maxY = -Number.MAX_VALUE, e.minY = Number.MIN_VALUE, e.minYArr = [], e.maxYArr = [], e.maxX = -Number.MAX_VALUE,
						e.minX = Number.MAX_VALUE, e.initialmaxX = -Number.MAX_VALUE, e.initialminX = Number.MAX_VALUE, e.maxDate =
						0, e.minDate = Number.MAX_VALUE, e.minZ = Number.MAX_VALUE, e.maxZ = -Number.MAX_VALUE, e.yAxisScale = [],
						e.xAxisScale = null, e.xAxisTicksPositions = [], e.yLabelsCoords = [], e.yTitleCoords = [], e.xRange = 0,
						e.yRange = [], e.zRange = 0, e.dataPoints = 0
				}
			}, {
				key: "isMultipleY",
				value: function() {
					if (this.w.config.yaxis.constructor === Array && 1 < this.w.config.yaxis.length) return this.w.config.chart
						.stacked = !1, this.w.globals.isMultipleYAxis = !0
				}
			}, {
				key: "excludeCollapsedSeriesInYAxis",
				value: function() {
					var i = this,
						t = this.w;
					t.globals.ignoreYAxisIndexes = t.globals.collapsedSeries.map(function(t, e) {
						if (i.w.globals.isMultipleYAxis) return t.index
					})
				}
			}, {
				key: "isMultiFormat",
				value: function() {
					return this.isFormatXY() || this.isFormat2DArray()
				}
			}, {
				key: "isFormatXY",
				value: function() {
					var t = this.w.config.series.slice(),
						e = new f.default(this.ctx).getActiveConfigSeriesIndex();
					if (void 0 !== t[e].data && 0 < t[e].data.length && null !== t[e].data[0] && void 0 !== t[e].data[0].x &&
						null !== t[e].data[0]) return !0
				}
			}, {
				key: "isFormat2DArray",
				value: function() {
					var t = this.w.config.series.slice(),
						e = new f.default(this.ctx).getActiveConfigSeriesIndex();
					if (void 0 !== t[e].data && 0 < t[e].data.length && void 0 !== t[e].data[0] && null !== t[e].data[0] && t[
							e].data[0].constructor === Array) return !0
				}
			}, {
				key: "handleFormat2DArray",
				value: function(t, e) {
					for (var i = this.w.config, a = this.w.globals, n = 0; n < t[e].data.length; n++)
						if (void 0 !== t[e].data[n][1] && (Array.isArray(t[e].data[n][1]) && 4 === t[e].data[n][1].length ? this
								.twoDSeries.push(t[e].data[n][1][3]) : this.twoDSeries.push(t[e].data[n][1])), "datetime" === i.xaxis.type) {
							var s = new Date(t[e].data[n][0]);
							s = new Date(s).getTime(), this.twoDSeriesX.push(s)
						} else this.twoDSeriesX.push(t[e].data[n][0]);
					for (var r = 0; r < t[e].data.length; r++) void 0 !== t[e].data[r][2] && (this.threeDSeries.push(t[e].data[
						r][2]), a.dataXYZ = !0)
				}
			}, {
				key: "handleFormatXY",
				value: function(t, e) {
					for (var i = this.w.config, a = this.w.globals, n = this.w.config.series.slice(), s = new c.default(this.ctx),
							r = 0; r < t[e].data.length; r++) {
						void 0 !== t[e].data[r].y && (Array.isArray(t[e].data[r].y) && 4 === t[e].data[r].y.length ? this.twoDSeries
							.push(t[e].data[r].y[3]) : this.twoDSeries.push(t[e].data[r].y));
						var o = "string" == typeof t[e].data[r].x,
							l = !!s.isValidDate(t[e].data[r].x.toString());
						o || l ? o ? "datetime" === i.xaxis.type ? this.twoDSeriesX.push(s.parseDate(t[e].data[r].x)) : (this.fallbackToCategory = !
							0, this.twoDSeriesX.push(t[e].data[r].x)) : "datetime" === i.xaxis.type ? this.twoDSeriesX.push(s.parseDate(
							t[e].data[r].x.toString())) : this.twoDSeriesX.push(parseInt(t[e].data[r].x)) : this.twoDSeriesX.push(
							t[e].data[r].x)
					}
					if (n[e].data[0] && void 0 !== n[e].data[0].z) {
						for (var h = 0; h < n[e].data.length; h++) this.threeDSeries.push(n[e].data[h].z);
						a.dataXYZ = !0
					}
				}
			}, {
				key: "handleCandleStickData",
				value: function(t, e) {
					var i = this.w.globals,
						a = {};
					return this.isFormat2DArray() ? a = this.handleCandleStickDataFormat("array", t, e) : this.isFormatXY() &&
						(a = this.handleCandleStickDataFormat("xy", t, e)), i.seriesCandleO.push(a.o), i.seriesCandleH.push(a.h),
						i.seriesCandleL.push(a.l), i.seriesCandleC.push(a.c), a
				}
			}, {
				key: "handleCandleStickDataFormat",
				value: function(t, e, i) {
					var a = [],
						n = [],
						s = [],
						r = [],
						o =
						"Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick";
					if ("array" === t) {
						if (4 !== e[i].data[0][1].length) throw new Error(o);
						for (var l = 0; l < e[i].data.length; l++) a.push(e[i].data[l][1][0]), n.push(e[i].data[l][1][1]), s.push(
							e[i].data[l][1][2]), r.push(e[i].data[l][1][3])
					} else if ("xy" === t) {
						if (4 !== e[i].data[0].y.length) throw new Error(o);
						for (var h = 0; h < e[i].data.length; h++) a.push(e[i].data[h].y[0]), n.push(e[i].data[h].y[1]), s.push(
							e[i].data[h].y[2]), r.push(e[i].data[h].y[3])
					}
					return {
						o: a,
						h: n,
						l: s,
						c: r
					}
				}
			}, {
				key: "parseDataAxisCharts",
				value: function(t, e) {
					for (var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.ctx, a = this.w.config,
							n = this.w.globals, s = new c.default(i), r = 0; r < e.length; r++) {
						if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === e[r].data) return void console
							.error("It is a possibility that you may have not included 'data' property in series.");
						if (this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t, r) : this.isFormatXY() &&
							this.handleFormatXY(t, r), "candlestick" !== a.chart.type && "candlestick" !== t[r].type || this.handleCandleStickData(
								t, r), n.series.push(this.twoDSeries), n.labels.push(this.twoDSeriesX), n.seriesX.push(this.twoDSeriesX),
							this.fallbackToCategory || (n.dataXY = !0);
						else {
							if ("datetime" === a.xaxis.type) {
								n.dataXY = !0;
								for (var o = 0 < a.labels.length ? a.labels.slice() : a.xaxis.categories.slice(), l = 0; l < o.length; l++)
									if ("string" == typeof o[l]) {
										if (!s.isValidDate(o[l])) throw new Error(
											"You have provided invalid Date format. Please provide a valid JavaScript Date");
										this.twoDSeriesX.push(s.parseDate(o[l]))
									} n.seriesX.push(this.twoDSeriesX)
							}
							n.labels.push(this.twoDSeriesX), n.series.push(t[r].data)
						}
						n.seriesZ.push(this.threeDSeries), void 0 !== t[r].name ? n.seriesNames.push(t[r].name) : n.seriesNames.push(
							"series-" + parseInt(r + 1))
					}
					return this.w
				}
			}, {
				key: "parseDataNonAxisCharts",
				value: function(t) {
					var e = this.w.globals,
						i = this.w.config;
					e.series = t.slice(), e.seriesNames = i.labels.slice();
					for (var a = 0; a < e.series.length; a++) void 0 === e.seriesNames[a] && e.seriesNames.push("series-" + (
						a + 1));
					return this.w
				}
			}, {
				key: "handleExternalLabelsData",
				value: function(t) {
					var e = this.w.config,
						i = this.w.globals;
					if (0 < e.xaxis.categories.length) i.labels = e.xaxis.categories;
					else if (0 < e.labels.length) i.labels = e.labels.slice();
					else if (this.fallbackToCategory) i.labels = i.labels[0];
					else {
						var a = [];
						if (i.axisCharts) {
							for (var n = 0; n < i.series[i.maxValsInArrayIndex].length; n++) a.push(n + 1);
							for (var s = 0; s < t.length; s++) i.seriesX.push(a);
							i.dataXY = !0
						}
						if (0 === a.length) {
							a = [0, 10];
							for (var r = 0; r < t.length; r++) i.seriesX.push(a)
						}
						i.labels = a, i.noLabelsProvided = !0
					}
				}
			}, {
				key: "parseData",
				value: function(t) {
					var e = this.w,
						i = e.config,
						a = e.globals;
					this.excludeCollapsedSeriesInYAxis();
					var n = i.series.slice();
					if (this.fallbackToCategory = !1, this.resetGlobals(), this.isMultipleY(), a.axisCharts ? this.parseDataAxisCharts(
							t, n) : this.parseDataNonAxisCharts(t), this.coreUtils.getLargestSeries(), "bar" === i.chart.type && i.chart
						.stacked) {
						var s = new f.default(this.ctx);
						a.series = s.setNullSeriesToZeroValues(a.series)
					}
					this.coreUtils.getSeriesTotals(), a.axisCharts && this.coreUtils.getStackedSeriesTotals(), this.coreUtils
						.getPercentSeries(), a.dataXY || this.handleExternalLabelsData(t)
				}
			}, {
				key: "xySettings",
				value: function() {
					var t = null,
						e = this.w;
					if (e.globals.axisCharts) {
						if ("back" === e.config.xaxis.crosshairs.position) new s.default(this.ctx).drawXCrosshairs();
						if ("back" === e.config.yaxis[0].crosshairs.position) new s.default(this.ctx).drawYCrosshairs();
						if (t = this.getCalculatedRatios(), "datetime" === e.config.xaxis.type && void 0 === e.config.xaxis.labels
							.formatter && isFinite(e.globals.minX) && isFinite(e.globals.maxX)) {
							var i = new p.default(this.ctx),
								a = i.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX);
							i.recalcDimensionsBasedOnFormat(a)
						}
					}
					return t
				}
			}, {
				key: "getCalculatedRatios",
				value: function() {
					var t, e, i, a, n, s = this.w.globals,
						r = [],
						o = [],
						l = .1,
						h = 0;
					if (s.yRange = [], s.isMultipleYAxis)
						for (var c = 0; c < s.minYArr.length; c++) s.yRange.push(Math.abs(s.minYArr[c] - s.maxYArr[c])), o.push(
							0);
					else s.yRange.push(Math.abs(s.minY - s.maxY));
					s.xRange = Math.abs(s.maxX - s.minX), s.zRange = Math.abs(s.maxZ - s.minZ);
					for (var u = 0; u < s.yRange.length; u++) r.push(s.yRange[u] / s.gridHeight);
					if (e = s.xRange / s.gridWidth, i = Math.abs(s.initialmaxX - s.initialminX) / s.gridWidth, t = s.yRange /
						s.gridWidth, a = s.xRange / s.gridHeight, n = s.zRange / s.gridHeight * 16, s.minY !== Number.MIN_VALUE &&
						0 !== Math.abs(s.minY)) {
						if (s.hasNegs = !0, o = [], s.isMultipleYAxis)
							for (var d = 0; d < r.length; d++) o.push(-s.minYArr[d] / r[d]);
						else o.push(-s.minY / r[0]);
						l = -s.minY / t, h = s.minX / e
					} else o.push(0);
					return {
						yRatio: r,
						invertedYRatio: t,
						zRatio: n,
						xRatio: e,
						initialXRatio: i,
						invertedXRatio: a,
						baseLineInvertedY: l,
						baseLineY: o,
						baseLineX: h
					}
				}
			}, {
				key: "checkComboCharts",
				value: function() {
					var e = this.w;
					e.config.series.map(function(t) {
						void 0 !== t.type && (e.globals.comboCharts = !0)
					})
				}
			}, {
				key: "drawAxis",
				value: function(t, i) {
					var a = this.w.globals,
						e = this.w.config,
						n = new l.default(this.ctx),
						s = new h.default(this.ctx);
					if (a.axisCharts) {
						var r = void 0,
							o = void 0;
						"bar" === t && e.plotOptions.bar.horizontal ? (o = s.drawYaxisInversed(0), r = n.drawXaxisInversed(0), a
							.dom.elGraphical.add(r), a.dom.elGraphical.add(o)) : (r = n.drawXaxis(), a.dom.elGraphical.add(r), e.yaxis
							.map(function(t, e) {
								a.ignoreYAxisIndexes.includes(e) || (o = s.drawYaxis(i, e), a.dom.Paper.add(o))
							}))
					}
					e.yaxis.map(function(t, e) {
						a.ignoreYAxisIndexes.includes(e) || s.yAxisTitleRotate(e, t.opposite)
					})
				}
			}, {
				key: "drawGrid",
				value: function() {
					var t = this.w,
						e = new o.default(this.ctx),
						i = new l.default(this.ctx),
						a = this.w.globals,
						n = null;
					if (a.axisCharts) {
						if (t.config.grid.show) n = e.renderGrid(), a.dom.elGraphical.add(n.el), e.drawGridArea(n.el);
						else {
							var s = e.drawGridArea();
							a.dom.elGraphical.add(s)
						}
						null !== n && i.xAxisLabelCorrections(n.xAxisTickWidth)
					}
				}
			}, {
				key: "createGridMask",
				value: function() {
					var t = this.w,
						e = new r.default(this.ctx);
					t.globals.dom.elGridRectMask = document.createElementNS(t.globals.svgNS, "clipPath"), t.globals.dom.elGridRectMask
						.setAttribute("id", "gridRectMask" + t.globals.cuid);
					var i = 0;
					t.config.grid.clipMarkers || (i = t.config.markers.size > t.config.markers.hover.size ? t.config.markers.size :
						t.config.markers.hover.size), t.globals.dom.elGridRect = e.drawRect(0, 0 - 1.2 * i, t.globals.gridWidth,
						t.globals.gridHeight + 2.4 * i, 0, "#fff"), t.globals.dom.elGridRectMask.appendChild(t.globals.dom.elGridRect
						.node), t.globals.dom.baseEl.querySelector("defs").appendChild(t.globals.dom.elGridRectMask)
				}
			}]), i
		}();
		t.exports = S
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var a = e[i];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
						t, a.key, a)
				}
			}
			return function(t, e, i) {
				return e && a(t.prototype, e), i && a(t, i), t
			}
		}();
		var n = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w
			}
			return a(e, [{
				key: "getSvgString",
				value: function() {
					return this.w.globals.dom.Paper.svg()
				}
			}, {
				key: "exportToSVG",
				value: function() {
					var t = this.w,
						e = t.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs"),
						i = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs");
					e && e.setAttribute("x", -500), i && (i.setAttribute("y1", -100), i.setAttribute("y2", -100));
					var a = this.getSvgString(),
						n = new Blob([a], {
							type: "image/svg+xml;charset=utf-8"
						}),
						s = URL.createObjectURL(n),
						r = document.createElement("a");
					r.href = s, r.download = this.w.globals.chartID + ".svg", document.body.appendChild(r), r.click(),
						document.body.removeChild(r)
				}
			}]), e
		}();
		e.default = n
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			h = s(i(46)),
			Y = s(i(0)),
			n = s(i(26));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function() {
			function i(t, e) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, i), this.ctx = t, this.w = t.w, this.existingWidth = 0, this.existingHeight = 0, this.rowHeight = 20,
					this.maxTextWidth = 0, this.padding = 0, this.noOfLegendColumns = 1, this.textMaxWidthArr = [], this.legendsArray = [],
					this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this)
			}
			return a(i, [{
				key: "init",
				value: function() {
					var t = this.w,
						e = t.globals,
						i = t.config;
					if ((1 < e.series.length || !e.axisCharts) && i.legend.show) {
						for (; e.dom.elLegendWrap.firstChild;) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
						this.drawLegends(i.chart.type, e.series.length), "bottom" === i.legend.position || "top" === i.legend.position ?
							this.legendAlignCenterHorz() : "right" !== i.legend.position && "left" !== i.legend.position || this.legendAlignVertical()
					}
				}
			}, {
				key: "drawLegends",
				value: function(t, e) {
					var i = this.w,
						a = new Y.default(this.ctx),
						n = i.config.legend.markers.size,
						s = i.config.legend.fontSize,
						r = i.config.legend.fontFamily,
						o = i.config.legend.itemMargin.horizontal,
						l = i.config.legend.itemMargin.vertical;
					this.padding = n + i.config.legend.markers.strokeWidth;
					var h = this.padding,
						c = 0,
						u = 1,
						d = 0,
						f = i.globals.seriesNames,
						p = i.globals.colors.slice();
					if ("heatmap" === i.config.chart.type) {
						var g = i.config.plotOptions.heatmap.colorScale.ranges;
						f = g.map(function(t, e) {
							return t.name ? t.name : t.from + " - " + t.to
						}), p = g.map(function(t, e) {
							return t.color
						})
					}
					for (var x = i.globals.legendFormatter, v = 0; v <= f.length - 1; v++) {
						var b = !("top" !== i.config.legend.position && "bottom" !== i.config.legend.position),
							m = 0,
							y = 0,
							w = void 0,
							k = x(f[v], {
								globals: i.globals,
								seriesIndex: v
							}),
							S = !1;
						if (0 < i.globals.collapsedSeries.length)
							for (var A = 0; A < i.globals.collapsedSeries.length; A++) i.globals.collapsedSeries[A].index === v &&
								(S = !0);
						if (b) {
							var C = a.getTextRects(k, s);
							w = C.width, this.rowHeight = C.height + l, y = this.existingWidth + h + o, this.existingWidth + w + h +
								o > i.globals.svgWidth && (u += 1, this.existingWidth = 0, y = this.existingWidth + h + o), "bottom" ===
								i.config.legend.position && (m = i.globals.svgHeight - this.rowHeight), m += this.rowHeight * u
						} else {
							var P = a.getTextRects(k, s),
								M = P.height;
							this.rowHeight = M + l, this.textMaxWidthArr.push(P.width);
							var L = this.getTextMaxWidth() + o;
							u = v + 1, this.existingHeight + M + h > i.globals.svgHeight && (d += 1, this.existingHeight = 0), y =
								h + d * L, m = this.existingHeight + M
						}
						var T = {
								pSize: n,
								pRadius: i.config.legend.markers.radius,
								pWidth: i.config.legend.markers.strokeWidth,
								shape: i.config.legend.markers.shape,
								pointStrokeColor: i.config.legend.markers.strokeColor,
								pointFillColor: p[v],
								pointStrokeOpacity: 1,
								pointFillOpacity: 1,
								class: "apexcharts-legend-point"
							},
							E = n / 2 - 1 + i.config.legend.markers.strokeWidth,
							z = a.drawMarker(y - h + i.config.legend.markers.offsetX - 4, m - h + E + i.config.legend.markers.offsetY -
								1, T).attr({
								rel: v + 1,
								"data:collapsed": S
							});
						S && z.node.classList.add("inactive-legend");
						var X = {
							x: y,
							y: m,
							foreColor: i.config.legend.labels.useSeriesColors ? i.globals.colors[v] : i.config.legend.labels.color,
							text: k,
							textAnchor: i.config.legend.textAnchor,
							fontSize: s,
							fontFamily: r,
							cssClass: "apexcharts-legend-text"
						};
						this.existingWidth = this.existingWidth + w + o + h + 5, this.existingHeight = this.existingHeight +
							this.rowHeight + h / 4, c = c + w + h + o;
						var O = a.drawText(X);
						i.globals.dom.elLegendWrap.add(O), i.globals.dom.elLegendWrap.add(z), O.node.classList.add(
								"apexcharts-legend-series"), O.attr({
								rel: v + 1,
								"data:collapsed": S
							}), S && O.node.classList.add("inactive-legend"), i.config.legend.onItemClick.toggleDataSeries || O.node
							.classList.add("no-click")
					}
					"heatmap" !== i.config.chart.type && i.config.legend.onItemClick.toggleDataSeries && i.globals.dom.elWrap
						.addEventListener("click", this.onLegendClick, !0), i.config.legend.onItemHover.highlightDataSeries && (
							i.globals.dom.elWrap.addEventListener("mousemove", this.onLegendHovered, !0), i.globals.dom.elWrap.addEventListener(
								"mouseout", this.onLegendHovered, !0))
				}
			}, {
				key: "getTextMaxWidth",
				value: function() {
					for (var t = 0, e = 0; e < this.textMaxWidthArr.length; e++) t = Math.max(t, this.textMaxWidthArr[e]);
					return this.maxTextWidth = t
				}
			}, {
				key: "getLegendBBox",
				value: function() {
					var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBBox(),
						e = t.width;
					return {
						clwh: t.height,
						clww: e
					}
				}
			}, {
				key: "translateLegendPoints",
				value: function(t) {
					for (var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, i = this.w.globals.dom
							.baseEl.querySelectorAll(".apexcharts-legend-point"), a = 0; a < i.length; a++) {
						if (null === e) {
							var n = i[a].getAttribute("transform"); - 1 < n.indexOf(",") ? e = parseFloat(n.split(",")[1]) : -1 < n
								.indexOf(" ") && (e = parseFloat(n.split(" ")[1])), e || (e = 0)
						}
						i[a].setAttribute("transform", "translate(" + t + "," + e + ")")
					}
				}
			}, {
				key: "setLegendXY",
				value: function(t, e) {
					for (var i = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-series"), a = 0; a < i.length; a++) {
						var n = parseInt(i[a].getAttribute("x")),
							s = parseInt(i[a].getAttribute("y"));
						Y.default.setAttrs(i[a], {
							x: n + t,
							y: s + e
						})
					}
					this.setLegendWrapXY()
				}
			}, {
				key: "setLegendWrapXY",
				value: function() {
					var t = this.w,
						e = t.globals.dom.baseEl.querySelector(".apexcharts-legend"),
						i = e.getBBox(),
						a = i.y + i.height,
						n = t.config.legend.containerMargin.left - t.config.legend.containerMargin.right,
						s = t.config.legend.containerMargin.top - t.config.legend.markers.size - 3;
					if ("bottom" === t.config.legend.position && a - 10 > t.globals.svgHeight && (s -= (t.globals.svgHeight -
							i.y + i.height) / 8), "top" === t.config.legend.position) {
						var r = new h.default(this.ctx),
							o = r.getTitleSubtitleCoords("title").height,
							l = r.getTitleSubtitleCoords("subtitle").height;
						s = s + (0 < o ? o - 10 : 0) + (0 < l ? l - 10 : 0)
					}
					"right" !== t.config.legend.position && "left" !== t.config.legend.position || s < t.config.legend.markers
						.size && (s = t.config.legend.markers.size), e.setAttribute("transform", "translate(" + n + ", " + s +
							")")
				}
			}, {
				key: "legendAlignCenterHorz",
				value: function() {
					var t = this.w,
						e = this.getLegendBBox(),
						i = new h.default(this.ctx),
						a = i.getTitleSubtitleCoords("title"),
						n = i.getTitleSubtitleCoords("subtitle"),
						s = 20,
						r = 0;
					"right" === t.config.legend.horizontalAlign ? s = t.globals.svgWidth - e.clww - s : "center" === t.config
						.legend.horizontalAlign && (s = (t.globals.svgWidth - e.clww) / 2), "bottom" === t.config.legend.position ?
						r = -e.clwh / 1.8 : "top" === t.config.legend.position && (r = a.height + n.height + t.config.title.margin +
							t.config.subtitle.margin - 15), s += t.config.legend.offsetX, r += t.config.legend.offsetY, this.setLegendXY(
							s, r), this.translateLegendPoints(s, r)
				}
			}, {
				key: "legendAlignVertical",
				value: function() {
					var t = this.w,
						e = this.getLegendBBox(),
						i = e.clwh + 1.2 * this.rowHeight < t.globals.svgHeight ? this.rowHeight : this.rowHeight / 2,
						a = 20,
						n = 0;
					"left" === t.config.legend.position && (n = t.config.legend.markers.size + 10), "bottom" === t.config.legend
						.verticalAlign ? a = t.globals.svgHeight - e.clwh - a : "middle" === t.config.legend.verticalAlign && (a =
							(t.globals.svgHeight - e.clwh) / 2 - i), n += t.config.legend.offsetX, a += t.config.legend.offsetY,
						this.setLegendXY(n, a), this.translateLegendPoints(n, a), "right" === t.config.legend.position && this.moveLegendsToRight()
				}
			}, {
				key: "moveLegendsToRight",
				value: function() {
					var t = this.w,
						e = this.getLegendBBox(),
						i = t.globals.svgWidth - e.clww - this.padding / 2;
					this.setLegendXY(i, 0), this.translateLegendPoints(i + t.config.legend.offsetX, null)
				}
			}, {
				key: "onLegendHovered",
				value: function(t) {
					var e = this.w,
						i = t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains(
							"apexcharts-legend-point");
					"heatmap" !== e.config.chart.type ? !t.target.classList.contains("inactive-legend") && i && new n.default(
						this.ctx).toggleSeriesOnHover(t, t.target) : i && new n.default(this.ctx).highlightRangeInSeries(t, t.target)
				}
			}, {
				key: "onLegendClick",
				value: function(t) {
					var e = this.w;
					if (t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains(
							"apexcharts-legend-point")) {
						var i = parseInt(t.target.getAttribute("rel")) - 1;
						if (e.globals.axisCharts || "radialBar" === e.config.chart.type) {
							e.globals.resized = !0;
							var a = null,
								n = t.target.getAttribute("data:collapsed"),
								s = null;
							if (e.globals.risingSeries = [], s = e.globals.axisCharts ? (a = e.globals.dom.baseEl.querySelector(
									".apexcharts-series[data\\:realIndex='" + i + "']"), parseInt(a.getAttribute("data:realIndex"))) : (a =
									e.globals.dom.baseEl.querySelector(".apexcharts-series[rel='" + (i + 1) + "']"), parseInt(a.getAttribute(
										"rel")) - 1), "true" === n) {
								if (0 < e.globals.collapsedSeries.length)
									for (var r = 0; r < e.globals.collapsedSeries.length; r++) e.globals.collapsedSeries[r].index === s &&
										(e.globals.axisCharts ? e.config.series[s].data = e.globals.collapsedSeries[r].data.slice() : e.config
											.series[s] = e.globals.collapsedSeries[r].data, e.globals.collapsedSeries.splice(r, 1), e.globals.collapsedSeriesIndices
											.splice(r, 1), e.globals.risingSeries.push(s), this.ctx.updateSeriesInternal(e.config.series, e.globals
												.initialConfig.chart.animations.dynamicAnimation.enabled))
							} else {
								if (e.globals.axisCharts) {
									e.globals.collapsedSeries.push({
										index: s,
										data: e.config.series[s].data.slice(),
										type: a.parentNode.className.baseVal.split("-")[1]
									}), e.globals.collapsedSeriesIndices.push(s);
									var o = e.globals.risingSeries.indexOf(s);
									e.globals.risingSeries.splice(o, 1), e.config.series[s].data = []
								} else e.globals.collapsedSeries.push({
									index: s,
									data: e.config.series[s]
								}), e.globals.collapsedSeriesIndices.push(s), e.config.series[s] = 0;
								for (var l = a.childNodes, h = 0; h < l.length; h++) l[h].classList.contains(
									"apexcharts-series-markers-wrap") && (l[h].classList.contains("apexcharts-hide") ? l[h].classList.remove(
									"apexcharts-hide") : l[h].classList.add("apexcharts-hide"));
								e.globals.allSeriesCollapsed = e.globals.collapsedSeries.length === e.globals.series.length, this.ctx.updateSeriesInternal(
									e.config.series, e.globals.initialConfig.chart.animations.dynamicAnimation.enabled)
							}
						} else {
							e.globals.dom.Paper.select(" .apexcharts-series[rel='" + (i + 1) + "'] path").fire("click")
						}
					}
				}
			}]), i
		}();
		e.default = r
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = i(1),
			v = (a = s) && a.__esModule ? a : {
				default: a
			};

		function u(t) {
			if (Array.isArray(t)) {
				for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
				return i
			}
			return Array.from(t)
		}
		var r = function() {
			function l(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, l), this.ctx = t, this.w = t.w
			}
			return n(l, [{
				key: "init",
				value: function() {
					this.handleMinYMaxY(), this.handleMinXMaxX(), this.handleMinZMaxZ()
				}
			}, {
				key: "niceScale",
				value: function(t, e) {
					var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10;
					if (t === Number.MIN_VALUE && 0 === e || !v.default.isNumber(t) && !v.default.isNumber(e)) return t = 0,
						i = e = 1, this.justRange(t, e, i);
					e < t ? t = e - .1 : t === e && (t -= 10, e += 10);
					var a = [],
						n = i + 1;
					n < 2 ? n = 2 : 2 < n && (n -= 2);
					for (var s = (e - t) / n, r = Math.floor(this.log10(s)), o = Math.pow(10, r), l = parseInt(s / o) * o, h =
							l * Math.floor(t / l), c = l * Math.ceil(e / l), u = h; a.push(u), !(c < (u += l)););
					if (void 0 === this.w.config.yaxis[0].max && void 0 === this.w.config.yaxis[0].min) return {
						result: a,
						niceMin: a[0],
						niceMax: a[a.length - 1]
					};
					var d = t;
					(a = []).push(d);
					for (var f = Math.abs(e - t) / i, p = 0; p <= i - 1; p++) d += f, a.push(d);
					return {
						result: a,
						niceMin: a[0],
						niceMax: a[a.length - 1]
					}
				}
			}, {
				key: "justRange",
				value: function(t, e) {
					var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10,
						a = Math.abs(e - t) / i;
					i === Number.MAX_VALUE && (i = 10, a = 1);
					for (var n = [], s = t; 0 <= i;) n.push(s), s += a, i -= 1;
					return {
						result: n,
						niceMin: n[0],
						niceMax: n[n.length - 1]
					}
				}
			}, {
				key: "getMinYMaxY",
				value: function(t, e, i) {
					var a = this.w.globals,
						n = -Number.MAX_VALUE,
						s = Number.MIN_VALUE,
						r = a.series,
						o = r,
						l = r;
					"candlestick" === this.w.config.chart.type && (o = a.seriesCandleL, l = a.seriesCandleH);
					for (var h = t; h < i; h++) {
						a.dataPoints = Math.max(a.dataPoints, r[h].length), v.default.isIE() && (s = Math.min.apply(Math, u(o[h])
							.concat([0])));
						for (var c = 0; c < a.series[h].length; c++) null !== r[h][c] && v.default.isNumber(r[h][c]) ? (n = Math
							.max(n, l[h][c]), e = Math.min(e, o[h][c]), v.default.isFloat(r[h][c]) && (a.yValueDecimal = Math.max(
								a.yValueDecimal, r[h][c].toString().split(".")[1].length)), s > o[h][c] && o[h][c] < 0 && (s = o[h][c])
						) : a.hasNullValues = !0
					}
					return {
						minY: s,
						maxY: n,
						minValInSeries: e
					}
				}
			}, {
				key: "handleMinYMaxY",
				value: function() {
					var n = this,
						s = this.w.globals,
						e = this.w.config;
					s.maxY = -Number.MAX_VALUE, s.minY = Number.MIN_VALUE;
					var r = e.yaxis,
						t = Number.MAX_VALUE;
					if (s.isMultipleYAxis)
						for (var i = 0; i < s.series.length; i++) {
							var a = this.getMinYMaxY(i, t, i + 1);
							s.minYArr.push(a.minY), s.maxYArr.push(a.maxY), t = a.minValInSeries
						}
					var o = this.getMinYMaxY(0, t, s.series.length);
					if (s.minY = o.minY, s.maxY = o.maxY, t = o.minValInSeries, e.chart.stacked) {
						for (var l = [], h = [], c = 0; c < s.series[s.maxValsInArrayIndex].length; c++)
							for (var u = 0, d = 0, f = 0; f < s.series.length; f++) null !== s.series[f][c] && v.default.isNumber(s
									.series[f][c]) && (0 < s.series[f][c] ? u += parseInt(s.series[f][c]) : d += parseInt(s.series[f][c])),
								f === s.series.length - 1 && (l.push(u), h.push(d));
						for (var p = 0; p < l.length; p++) s.maxY = Math.max(s.maxY, l[p]), s.minY = Math.min(s.minY, h[p])
					}
					if (("line" === e.chart.type || "area" === e.chart.type || "candlestick" === e.chart.type) && s.minY ===
						Number.MIN_VALUE && t !== Number.MAX_SAFE_INTEGER) {
						var g = s.maxY - t;
						0 <= t && t <= 10 && (g = 0), s.minY = t - 5 * g / 100, s.maxY = s.maxY + 5 * g / 100
					}
					e.yaxis.map(function(t, e) {
						void 0 !== t.max && "number" == typeof t.max && (s.maxYArr[e] = t.max, s.maxY = r[0].max), void 0 !==
							r[0].min && "number" == typeof r[0].min && (s.minYArr[e] = t.min, s.minY = r[0].min)
					});
					var x = function(t, e, i) {
						var a = r[t];
						a = void 0 !== a ? a.tickAmount : 8, i !== -Number.MAX_VALUE && v.default.isNumber(i) ? (s.allSeriesCollapsed = !
							1, s.yAxisScale.push(n.niceScale(e, i, a))) : s.yAxisScale.push(n.justRange(0, 5, 5))
					};
					s.isMultipleYAxis ? e.yaxis.forEach(function(i, t) {
						var a = t;
						e.series.forEach(function(t, e) {
							t.name !== i.seriesName || s.collapsedSeriesIndices.includes(e) || (a = e)
						}), x(t, s.minYArr[a], s.maxYArr[a]), s.minYArr[t] = s.yAxisScale[t].niceMin, s.maxYArr[t] = s.yAxisScale[
							t].niceMax
					}) : (x(0, s.minY, s.maxY), s.minY = s.yAxisScale[0].niceMin, s.maxY = s.yAxisScale[0].niceMax, s.minYArr[
						0] = s.yAxisScale[0].niceMin, s.maxYArr[0] = s.yAxisScale[0].niceMax)
				}
			}, {
				key: "handleMinXMaxX",
				value: function() {
					var t = this.w.globals,
						e = this.w.config;
					if (t.dataXY)
						for (var i = 0; i < t.series.length; i++)
							if (t.labels[i])
								for (var a = 0; a < t.labels[i].length; a++) null !== t.labels[i][a] && v.default.isNumber(t.labels[i]
									[a]) && (t.maxX = Math.max(t.maxX, t.labels[i][a]), t.initialmaxX = Math.max(t.maxX, t.labels[i][a]),
									t.minX = Math.min(t.minX, t.labels[i][a]), t.initialminX = Math.min(t.minX, t.labels[i][a]));
					if (t.noLabelsProvided && (t.maxX = t.labels[t.labels.length - 1], t.initialmaxX = t.labels[t.labels.length -
							1], t.minX = 1, t.initialminX = 1), 0 !== e.grid.padding.left && 0 !== e.grid.padding.right && (
							"datetime" === e.xaxis.type || t.dataXY)) {
						var n = t.minX - t.svgWidth / t.dataPoints * (Math.abs(t.maxX - t.minX) / t.svgWidth) / 3;
						t.minX = n, t.initialminX = n;
						var s = t.maxX + t.svgWidth / t.dataPoints * (Math.abs(t.maxX - t.minX) / t.svgWidth) / 3;
						t.maxX = s, t.initialmaxX = s
					}
					var r = new l(this.ctx);
					if (t.dataXY || t.noLabelsProvided) {
						var o = void 0;
						void 0 === e.xaxis.tickAmount ? (o = Math.round(t.svgWidth / 150)) > t.dataPoints && 0 !== t.dataPoints &&
							(o = t.dataPoints - 1) : o = e.xaxis.tickAmount, void 0 !== e.xaxis.max && "number" == typeof e.xaxis.max &&
							(t.maxX = e.xaxis.max), void 0 !== e.xaxis.min && "number" == typeof e.xaxis.min && (t.minX = e.xaxis.min),
							void 0 !== e.xaxis.range && (t.minX = t.maxX - e.xaxis.range), t.minX !== Number.MAX_VALUE && t.maxX !==
							-Number.MAX_VALUE ? t.xAxisScale = r.justRange(t.minX, t.maxX, o) : (t.xAxisScale = r.justRange(1, o, o),
								t.noLabelsProvided && 0 < t.labels.length && (t.xAxisScale = r.justRange(1, t.labels.length, o - 1), t
									.seriesX = t.labels.slice())), t.labels = t.xAxisScale.result.slice()
					}
				}
			}, {
				key: "handleMinZMaxZ",
				value: function() {
					var t = this.w.globals;
					if (t.dataXYZ)
						for (var e = 0; e < t.series.length; e++)
							if (void 0 !== t.seriesZ[e])
								for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && v.default.isNumber(t.seriesZ[
									e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i]))
				}
			}, {
				key: "log10",
				value: function(t) {
					return Math.log(t) / Math.LN10
				}
			}]), l
		}();
		e.default = r
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			n = r(i(50)),
			s = r(i(1));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var o = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w
			}
			return a(e, [{
				key: "checkResponsiveConfig",
				value: function() {
					var t = this.w,
						e = t.config;
					if (void 0 !== e.responsive)
						for (var i = {}, a = 0; a < e.responsive.length; a++) {
							if ((0 < window.innerWidth ? window.innerWidth : screen.width) < e.responsive[a].breakpoint) {
								i = s.default.extend(t.config, e.responsive[a].options), this.overrideResponsiveOptions(i);
								break
							}
							i = s.default.extend(t.config, t.globals.initialConfig), this.overrideResponsiveOptions(i)
						}
				}
			}, {
				key: "overrideResponsiveOptions",
				value: function(t) {
					var e = new n.default(t).init();
					this.w.config = e
				}
			}]), e
		}();
		t.exports = o
	}, function(t, e, i) {
		"use strict";
		var a, n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = i(1),
			u = (a = s) && a.__esModule ? a : {
				default: a
			};
		var r = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w, this.colors = []
			}
			return n(e, [{
				key: "init",
				value: function() {
					this.setDefaultColors()
				}
			}, {
				key: "setDefaultColors",
				value: function() {
					var t = this.w,
						e = new u.default;
					if (void 0 === t.config.colors ? t.globals.colors = this.predefined() : t.globals.colors = t.config.colors,
						t.config.theme.monochrome.enabled) {
						var i = [],
							a = t.globals.series.length;
						t.config.plotOptions.bar.distributed && "bar" === t.config.chart.type && (a = t.globals.series[0].length *
							t.globals.series.length);
						for (var n = t.config.theme.monochrome.color, s = 1 / (a / t.config.theme.monochrome.shadeIntensity), r =
								t.config.theme.monochrome.shadeTo, o = 0, l = 0; l < a; l++) {
							var h = void 0;
							h = "dark" === r ? e.shadeColor(-1 * o, n) : e.shadeColor(o, n), o += s, i.push(h)
						}
						t.globals.colors = i.slice()
					}
					var c = t.globals.colors.slice();
					this.pushExtraColors(t.globals.colors), void 0 === t.config.stroke.colors ? t.globals.stroke.colors = c :
						t.globals.stroke.colors = t.config.stroke.colors, this.pushExtraColors(t.globals.stroke.colors), void 0 ===
						t.config.fill.colors ? t.globals.fill.colors = c : t.globals.fill.colors = t.config.fill.colors, this.pushExtraColors(
							t.globals.fill.colors), void 0 === t.config.dataLabels.style.colors ? t.globals.dataLabels.style.colors =
						c : t.globals.dataLabels.style.colors = t.config.dataLabels.style.colors, this.pushExtraColors(t.globals
							.dataLabels.style.colors), void 0 === t.config.markers.colors ? t.globals.markers.colors = c : t.globals
						.markers.colors = t.config.markers.colors, this.pushExtraColors(t.globals.markers.colors)
				}
			}, {
				key: "pushExtraColors",
				value: function(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
						i = this.w,
						a = i.globals.series.length;
					if ((e = null === e && ("bar" === i.config.chart.type && i.config.plotOptions.bar.distributed)) && (a = i
							.globals.series[0].length * i.globals.series.length), t.length < a)
						for (var n = a - t.length, s = 0; s < n; s++) t.push(t[s])
				}
			}, {
				key: "predefined",
				value: function() {
					switch (this.w.config.theme.palette) {
						case "palette1":
							this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
							break;
						case "palette2":
							this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
							break;
						case "palette3":
							this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
							break;
						case "palette4":
							this.colors = ["#546E7A", "#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a"];
							break;
						case "palette5":
							this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
							break;
						case "palette6":
							this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
							break;
						case "palette7":
							this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#C5D86D"];
							break;
						case "palette8":
							this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
							break;
						case "palette9":
							this.colors = ["#5fba7d", "#f48024", "#8884d8", "#c34459", "#f9ee45"];
							break;
						case "palette10":
							this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
							break;
						case "palette11":
							this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
							break;
						default:
							this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]
					}
					return this.colors
				}
			}]), e
		}();
		t.exports = r
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var a, n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = i(0),
			o = (a = s) && a.__esModule ? a : {
				default: a
			};
		var r = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.ctx = t, this.w = t.w
			}
			return n(e, [{
				key: "draw",
				value: function() {
					this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle")
				}
			}, {
				key: "drawTitleSubtitle",
				value: function(t) {
					var e = this.w,
						i = "title" === t ? e.config.title : e.config.subtitle,
						a = e.globals.svgWidth / 2,
						n = i.offsetY,
						s = "middle";
					if ("left" === i.align ? (a = 10, s = "start") : "right" === i.align && (a = e.globals.svgWidth - 10, s =
							"end"), a += i.offsetX, n = n + parseInt(i.style.fontSize) + 2, void 0 !== i.text) {
						var r = new o.default(this.ctx).drawText({
							x: a,
							y: n,
							text: i.text,
							textAnchor: s,
							fontSize: i.style.fontSize,
							fontFamily: i.style.fontFamily,
							foreColor: i.style.color,
							opacity: 1
						});
						r.node.setAttribute("class", "apexcharts-" + t + "-text"), e.globals.dom.Paper.add(r)
					}
				}
			}]), e
		}();
		e.default = r
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			u = s(i(0)),
			b = s(i(1)),
			n = s(i(78));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function(t) {
			function i(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, i);
				var e = function(t, e) {
					if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !e || "object" != typeof e && "function" != typeof e ? t : e
				}(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
				return e.ctx = t, e.w = t.w, e.dragged = !1, e.graphics = new u.default(e.ctx), e.eventList = ["mousedown",
						"mousemove", "touchstart", "touchmove", "mouseup", "touchend"
					], e.clientX = 0, e.clientY = 0, e.startX = 0, e.endX = 0, e.dragX = 0, e.startY = 0, e.endY = 0, e.dragY = 0,
					e
			}
			return function(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError(
					"Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}(i, n.default), a(i, [{
				key: "init",
				value: function(t) {
					var e = t.xyRatios,
						i = this.w;
					this.xyRatios = e, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics
						.drawRect(0, 0, 0, 0), this.gridRect = i.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect
						.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add(
							"apexcharts-selection-rect"), i.globals.dom.elGraphical.add(this.zoomRect), i.globals.dom.elGraphical.add(
							this.selectionRect), "x" === i.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
							minX: 0,
							minY: 0,
							maxX: i.globals.gridWidth,
							maxY: i.globals.gridHeight
						}).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === i.config.chart.selection.type ?
						this.slDraggableRect = this.selectionRect.draggable({
							minX: 0,
							maxX: i.globals.gridWidth
						}).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect
						.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(),
						this.hoverArea = i.globals.dom.baseEl.querySelector(i.globals.chartClass), this.hoverArea.classList.add(
							"zoomable");
					var a = !0,
						n = !1,
						s = void 0;
					try {
						for (var r, o = this.eventList[Symbol.iterator](); !(a = (r = o.next()).done); a = !0) {
							var l = r.value;
							this.hoverArea.addEventListener(l, this.svgMouseEvents.bind(this, e), !1)
						}
					} catch (t) {
						n = !0, s = t
					} finally {
						try {
							!a && o.return && o.return()
						} finally {
							if (n) throw s
						}
					}
				}
			}, {
				key: "destroy",
				value: function() {
					var t = !0,
						e = !1,
						i = void 0;
					try {
						for (var a, n = this.eventList[Symbol.iterator](); !(t = (a = n.next()).done); t = !0) {
							var s = a.value;
							this.hoverArea && this.hoverArea.removeEventListener(s, this.svgMouseEvents.bind(this, this.xyRatios),
								!1)
						}
					} catch (t) {
						e = !0, i = t
					} finally {
						try {
							!t && n.return && n.return()
						} finally {
							if (e) throw i
						}
					}
					this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect
						.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null
				}
			}, {
				key: "svgMouseEvents",
				value: function(t, e) {
					var i = this.w,
						a = this,
						n = this.ctx.toolbar,
						s = i.globals.zoomEnabled ? i.config.chart.zoom.type : i.config.chart.selection.type;
					if (e.shiftKey ? (this.shiftWasPressed = !0, n.enablePanning()) : this.shiftWasPressed && (n.enableZooming(),
							this.shiftWasPressed = !1), !(e.target.classList.contains("apexcharts-selection-rect") || e.target.parentNode
							.classList.contains("apexcharts-toolbar"))) {
						if (a.clientX = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientX : "touchend" ===
							e.type ? e.changedTouches[0].clientX : e.clientX, a.clientY = "touchmove" === e.type || "touchstart" ===
							e.type ? e.touches[0].clientY : "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY,
							"mousedown" === e.type && 1 === e.which) {
							var r = a.gridRect.getBoundingClientRect();
							a.startX = a.clientX - r.left, a.startY = a.clientY - r.top, a.dragged = !1, a.w.globals.mousedown = !0
						}
						if (("mousemove" === e.type && 1 === e.which || "touchmove" === e.type) && (a.dragged = !0, i.globals.panEnabled ?
								(i.globals.selection = null, a.w.globals.mousedown && a.panDragging({
									context: a,
									zoomtype: s,
									xyRatios: t
								})) : (a.w.globals.mousedown && i.globals.zoomEnabled || a.w.globals.mousedown && i.globals.selectionEnabled) &&
								(a.selection = a.selectionDrawing({
									context: a,
									zoomtype: s
								}))), "mouseup" === e.type || "touchend" === e.type) {
							var o = a.gridRect.getBoundingClientRect();
							a.w.globals.mousedown && (a.endX = a.clientX - o.left, a.endY = a.clientY - o.top, a.dragX = Math.abs(a
									.endX - a.startX), a.dragY = Math.abs(a.endY - a.startY), (i.globals.zoomEnabled || i.globals.selectionEnabled) &&
								a.selectionDrawn({
									context: a,
									zoomtype: s
								})), i.globals.zoomEnabled && a.hideSelectionRect(), a.dragged = !1, a.w.globals.mousedown = !1
						}
						this.makeSelectionRectDraggable()
					}
				}
			}, {
				key: "makeSelectionRectDraggable",
				value: function() {
					var t = this.w;
					if (this.selectionRect) {
						var e = this.selectionRect.node.getBoundingClientRect();
						0 < e.width && 0 < e.height && this.slDraggableRect.selectize().resize({
							constraint: {
								minX: 0,
								minY: 0,
								maxX: t.globals.gridWidth,
								maxY: t.globals.gridHeight
							}
						}).on("resizing", this.selectionDragging.bind(this, "resizing"))
					}
				}
			}, {
				key: "preselectedSelection",
				value: function() {
					var t = this.w,
						e = this.xyRatios;
					if (!t.globals.zoomEnabled)
						if (void 0 !== t.globals.selection && null !== t.globals.selection) this.drawSelectionRect(t.globals.selection);
						else if (void 0 !== t.config.chart.selection.xaxis.min && void 0 !== t.config.chart.selection.xaxis.max) {
						var i = (t.config.chart.selection.xaxis.min - t.globals.minX) / e.xRatio,
							a = {
								x: i,
								y: 0,
								width: t.globals.gridWidth - (t.globals.maxX - t.config.chart.selection.xaxis.max) / e.xRatio - i,
								height: t.globals.gridHeight,
								translateX: 0,
								translateY: 0,
								selectionEnabled: !0
							};
						this.drawSelectionRect(a), this.makeSelectionRectDraggable(), "function" == typeof t.config.chart.events
							.selection && t.config.chart.events.selection(this.ctx, {
								xaxis: {
									min: t.config.chart.selection.xaxis.min,
									max: t.config.chart.selection.xaxis.max
								},
								yaxis: {}
							})
					}
				}
			}, {
				key: "drawSelectionRect",
				value: function(t) {
					var e = t.x,
						i = t.y,
						a = t.width,
						n = t.height,
						s = t.translateX,
						r = t.translateY,
						o = this.w,
						l = this.zoomRect,
						h = this.selectionRect;
					if (this.dragged || null !== o.globals.selection) {
						var c = {
							transform: "translate(" + s + ", " + r + ")"
						};
						o.globals.zoomEnabled && this.dragged && (l.attr({
							x: e,
							y: i,
							width: a,
							height: n,
							fill: o.config.chart.zoom.zoomedArea.fill.color,
							"fill-opacity": o.config.chart.zoom.zoomedArea.fill.opacity,
							stroke: o.config.chart.zoom.zoomedArea.stroke.color,
							"stroke-width": o.config.chart.zoom.zoomedArea.stroke.width,
							"stroke-opacity": o.config.chart.zoom.zoomedArea.stroke.opacity
						}), u.default.setAttrs(l.node, c)), o.globals.selectionEnabled && (h.attr({
							x: e,
							y: i,
							width: a,
							height: n,
							fill: o.config.chart.selection.fill.color,
							"fill-opacity": o.config.chart.selection.fill.opacity,
							stroke: o.config.chart.selection.stroke.color,
							"stroke-width": o.config.chart.selection.stroke.width,
							"stroke-dasharray": o.config.chart.selection.stroke.dashArray,
							"stroke-opacity": o.config.chart.selection.stroke.opacity
						}), u.default.setAttrs(h.node, c))
					}
				}
			}, {
				key: "hideSelectionRect",
				value: function() {
					var t = this.selectionRect;
					t && t.attr({
						x: 0,
						y: 0,
						width: 0,
						height: 0
					})
				}
			}, {
				key: "selectionDrawing",
				value: function(t) {
					var e = t.context,
						i = t.zoomtype,
						a = this.w,
						n = e,
						s = this.gridRect.getBoundingClientRect(),
						r = n.startX - 1,
						o = n.startY,
						l = n.clientX - s.left - r - 1,
						h = n.clientY - s.top - o,
						c = 0,
						u = 0,
						d = {};
					return r > n.clientX - s.left && (c = -(l = Math.abs(l))), o > n.clientY - s.top && (u = -(h = Math.abs(h))),
						d = "x" === i ? {
							x: r,
							y: 0,
							width: l,
							height: a.globals.gridHeight,
							translateX: c,
							translateY: 0
						} : "y" === i ? {
							x: 0,
							y: o,
							width: a.globals.gridWidth,
							height: h,
							translateX: 0,
							translateY: u
						} : {
							x: r,
							y: o,
							width: l,
							height: h,
							translateX: c,
							translateY: u
						}, n.drawSelectionRect(d), d
				}
			}, {
				key: "selectionDragging",
				value: function(t, e) {
					var r = this,
						o = this.w,
						l = this.xyRatios,
						h = this.selectionRect,
						i = 0;
					"resizing" === t && (i = 30), "function" == typeof o.config.chart.events.selection && (clearTimeout(this.w
						.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
						var t = r.gridRect.getBoundingClientRect(),
							e = h.node.getBoundingClientRect(),
							i = o.globals.xAxisScale.niceMin + (e.left - t.left) * l.xRatio,
							a = o.globals.xAxisScale.niceMin + (e.right - t.left) * l.xRatio,
							n = o.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * l.yRatio[0],
							s = o.globals.yAxisScale[0].niceMax - (e.top - t.top) * l.yRatio[0];
						o.config.chart.events.selection(r.ctx, {
							xaxis: {
								min: i,
								max: a
							},
							yaxis: {
								min: n,
								max: s
							}
						})
					}, i))
				}
			}, {
				key: "selectionDrawn",
				value: function(t) {
					var e = t.context,
						i = t.zoomtype,
						a = this.w,
						n = e,
						s = this.xyRatios,
						r = this.ctx.toolbar;
					if (n.startX > n.endX) {
						var o = n.startX;
						n.startX = n.endX, n.endX = o
					}
					if (n.startY > n.endY) {
						var l = n.startY;
						n.startY = n.endY, n.endY = l
					}
					var h = a.globals.xAxisScale.niceMin + n.startX * s.xRatio,
						c = a.globals.xAxisScale.niceMin + n.endX * s.xRatio,
						u = [],
						d = [];
					if (a.config.yaxis.forEach(function(t, e) {
							u.push(Math.floor(a.globals.yAxisScale[e].niceMax - s.yRatio[e] * n.startY)), d.push(Math.floor(a.globals
								.yAxisScale[e].niceMax - s.yRatio[e] * n.endY))
						}), n.dragged && (10 < n.dragX || 10 < n.dragY) && h !== c)
						if (a.globals.zoomEnabled) {
							var f = b.default.clone(a.config.yaxis);
							a.globals.zoomed || (a.globals.lastXAxis = b.default.clone(a.config.xaxis), a.globals.lastYAxis = b.default
								.clone(a.config.yaxis));
							var p = {
								min: h,
								max: c
							};
							if ("xy" !== i && "y" !== i || f.forEach(function(t, e) {
									f[e].min = d[e], f[e].max = u[e]
								}), r) {
								var g = r.getBeforeZoomRange(p, f);
								null !== g && (p = g.xaxis, f = g.yaxis)
							}
							"x" === i ? n.ctx.updateOptionsInternal({
									xaxis: p
								}, !1, !0) : "y" === i ? n.ctx.updateOptionsInternal({
									yaxis: f
								}, !1, !0) : n.ctx.updateOptionsInternal({
									xaxis: p,
									yaxis: f
								}, !1, !0), "function" == typeof a.config.chart.events.zoomed && r.zoomCallback(p, f), a.globals.zoomed = !
								0
						} else if (a.globals.selectionEnabled) {
						var x, v = null;
						x = {
								min: h,
								max: c
							}, "xy" !== i && "y" !== i || (v = b.default.clone(a.config.yaxis)).forEach(function(t, e) {
								v[e].min = d[e], v[e].max = u[e]
							}), a.globals.selection = n.selection, "function" == typeof a.config.chart.events.selection && a.config
							.chart.events.selection(n.ctx, {
								xaxis: x,
								yaxis: v
							})
					}
				}
			}, {
				key: "panDragging",
				value: function(t) {
					var e = t.context,
						i = (t.zoomtype, this.w),
						a = e,
						n = void 0;
					if (void 0 !== i.globals.lastClientPosition.x) {
						var s = i.globals.lastClientPosition.x - a.clientX,
							r = i.globals.lastClientPosition.y - a.clientY;
						Math.abs(s) > Math.abs(r) && 0 < s ? n = "left" : Math.abs(s) > Math.abs(r) && s < 0 ? n = "right" :
							Math.abs(r) > Math.abs(s) && 0 < r ? n = "up" : Math.abs(r) > Math.abs(s) && r < 0 && (n = "down")
					}
					i.globals.lastClientPosition = {
						x: a.clientX,
						y: a.clientY
					};
					var o = i.globals.minX,
						l = i.globals.maxX;
					this.panScrolled(n, o, l)
				}
			}, {
				key: "panScrolled",
				value: function(t, e, i) {
					var a = this.w,
						n = this.xyRatios;
					"left" === t ? (e = a.globals.minX + a.globals.gridWidth / 15 * n.xRatio, i = a.globals.maxX + a.globals.gridWidth /
							15 * n.xRatio) : "right" === t && (e = a.globals.minX - a.globals.gridWidth / 15 * n.xRatio, i = a.globals
							.maxX - a.globals.gridWidth / 15 * n.xRatio), (e < a.globals.initialminX || i > a.globals.initialmaxX) &&
						(e = a.globals.minX, i = a.globals.maxX), this.ctx.updateOptionsInternal({
							xaxis: {
								min: e,
								max: i
							}
						}, !1, !1), "function" == typeof a.config.chart.events.scrolled && a.config.chart.events.scrolled(this.ctx, {
							xaxis: {
								min: e,
								max: i
							}
						})
				}
			}]), i
		}();
		t.exports = r
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			n = s(i(25)),
			z = s(i(0)),
			X = s(i(48));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function() {
			function i(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, i), this.ctx = t, this.w = t.w;
				var e = this.w;
				this.anim = new n.default(this.ctx), this.xaxisLabels = e.globals.labels.slice(), this.animX = e.config.grid.xaxis
					.lines.animate && e.config.chart.animations.enabled, this.animY = e.config.grid.yaxis.lines.animate && e.config
					.chart.animations.enabled, 0 < e.globals.timelineLabels.length && (this.xaxisLabels = e.globals.timelineLabels
						.slice())
			}
			return a(i, [{
				key: "drawGridArea",
				value: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
						e = this.w,
						i = new z.default(this.ctx);
					null === t && (t = i.group({
						class: "apexcharts-grid"
					}));
					var a = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight,
							"transparent"),
						n = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight,
							"transparent");
					return t.add(n), t.add(a), t
				}
			}, {
				key: "renderGrid",
				value: function() {
					for (var t = this.w, e = new z.default(this.ctx), i = t.config.grid.strokeDashArray, a = e.group({
							class: "apexcharts-grid"
						}), n = 8, s = 0; s < t.globals.series.length && (void 0 !== t.globals.yAxisScale[s] && (n = t.globals.yAxisScale[
							s].result.length - 1), !(2 < n)); s++);
					var r = void 0;
					if (!(!t.config.plotOptions.bar.horizontal || "bar" !== t.config.chart.type)) {
						if (r = n, t.config.grid.xaxis.lines.show || t.config.xaxis.axisTicks.show)
							for (var o = t.globals.padHorizontal, l = void 0, h = t.globals.gridHeight, c = 0; c < r + 1 && (l = o =
									o + t.globals.gridWidth / r + .3, c !== r - 1); c++) {
								if (t.config.grid.xaxis.lines.show) {
									var u = e.drawLine(o, 0, l, h, t.config.grid.borderColor, i);
									u.node.classList.add("apexcharts-gridline"), a.add(u), this.animX && this.animateLine(u, {
										x1: 0,
										x2: 0
									}, {
										x1: o,
										x2: l
									})
								}
								new X.default(this.ctx).drawXaxisTicks(o, a)
							}
						if (t.config.grid.yaxis.lines.show)
							for (var d = 0, f = 0, p = t.globals.gridWidth, g = 0; g < t.globals.dataPoints + 1; g++) {
								var x = e.drawLine(0, d, p, f, t.config.grid.borderColor, i);
								a.add(x), x.node.classList.add("apexcharts-gridline"), this.animY && this.animateLine(x, {
									y1: d + 20,
									y2: f + 20
								}, {
									y1: d,
									y2: f
								}), f = d += t.globals.gridHeight / t.globals.dataPoints
							}
					} else {
						if (r = this.xaxisLabels.length, t.config.grid.xaxis.lines.show || t.config.xaxis.axisTicks.show) {
							var v = t.globals.padHorizontal,
								b = void 0,
								m = t.globals.gridHeight;
							if (0 < t.globals.timelineLabels.length)
								for (var y = 0; y < r; y++) {
									if (v = this.xaxisLabels[y].position, b = this.xaxisLabels[y].position, t.config.grid.xaxis.lines.show) {
										var w = e.drawLine(v, 0, b, m, t.config.grid.borderColor, i);
										w.node.classList.add("apexcharts-gridline"), a.add(w), this.animX && this.animateLine(w, {
											x1: 0,
											x2: 0
										}, {
											x1: v,
											x2: b
										})
									}
									new X.default(this.ctx).drawXaxisTicks(v, a)
								} else
									for (var k = r, S = 0; S < k; S++) {
										var A = k;
										if (t.globals.dataXY && "bar" !== t.config.chart.type && (A -= 1), b = v += t.globals.gridWidth / A,
											S === A - 1) break;
										if (t.config.grid.xaxis.lines.show) {
											var C = e.drawLine(v, 0, b, m, t.config.grid.borderColor, i);
											C.node.classList.add("apexcharts-gridline"), a.add(C), this.animX && this.animateLine(C, {
												x1: 0,
												x2: 0
											}, {
												x1: v,
												x2: b
											})
										}
										new X.default(this.ctx).drawXaxisTicks(v, a)
									}
						}
						if (t.config.grid.yaxis.lines.show)
							for (var P = 0, M = 0, L = t.globals.gridWidth, T = 0; T < n + 1; T++) {
								var E = e.drawLine(0, P, L, M, t.config.grid.borderColor, i);
								a.add(E), E.node.classList.add("apexcharts-gridline"), this.animY && this.animateLine(E, {
									y1: P + 20,
									y2: M + 20
								}, {
									y1: P,
									y2: M
								}), M = P += t.globals.gridHeight / n
							}
					}
					return this.drawGridBands(a, r, n), {
						el: a,
						xAxisTickWidth: t.globals.gridWidth / r
					}
				}
			}, {
				key: "drawGridBands",
				value: function(t, e, i) {
					var a = this.w,
						n = new z.default(this.ctx);
					if (void 0 !== a.config.grid.row.colors && 0 < a.config.grid.row.colors.length)
						for (var s = 0, r = a.globals.gridHeight / i, o = a.globals.gridWidth, l = 0, h = 0; l < i; l++, h++) {
							h >= a.config.grid.row.colors.length && (h = 0);
							var c = a.config.grid.row.colors[h],
								u = n.drawRect(0, s, o, r, 0, c, a.config.grid.row.opacity);
							t.add(u), u.node.classList.add("apexcharts-gridRow"), s += a.globals.gridHeight / i
						}
					if (void 0 !== a.config.grid.column.colors && 0 < a.config.grid.column.colors.length)
						for (var d = a.globals.padHorizontal, f = a.globals.padHorizontal + a.globals.gridWidth / e, p = a.globals
								.gridHeight, g = 0, x = 0; g < e; g++, x++) {
							x >= a.config.grid.column.colors.length && (x = 0);
							var v = a.config.grid.column.colors[x],
								b = n.drawRect(d, 0, f, p, 0, v, a.config.grid.column.opacity);
							b.node.classList.add("apexcharts-gridColumn"), t.add(b), d += a.globals.gridWidth / e
						}
				}
			}, {
				key: "animateLine",
				value: function(t, e, i) {
					var a = this.w,
						n = a.config.chart.animations;
					if (n && !a.globals.resized && !a.globals.dataChanged) {
						var s = n.speed;
						this.anim.animateLine(t, e, i, s)
					}
				}
			}]), i
		}();
		e.default = r
	}, function(t, e, i) {
		"use strict";
		var a, n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = i(1),
			r = (a = s) && a.__esModule ? a : {
				default: a
			};
		var o = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.opts = t
			}
			return n(e, [{
				key: "line",
				value: function() {
					return {
						dataLabels: {
							enabled: !1
						},
						stroke: {
							width: 5,
							curve: "straight"
						},
						markers: {
							size: 5
						},
						xaxis: {
							crosshairs: {
								width: 1
							}
						}
					}
				}
			}, {
				key: "sparkline",
				value: function(t) {
					this.opts.yaxis[0].labels.show = !1;
					this.opts.yaxis[0].floating = !0;
					return r.default.extend(t, {
						grid: {
							show: !1,
							padding: {
								left: 0,
								right: 0,
								top: 0,
								bottom: 0
							}
						},
						legend: {
							show: !1
						},
						xaxis: {
							labels: {
								show: !1
							},
							tooltip: {
								enabled: !1
							},
							axisBorder: {
								show: !1
							}
						},
						chart: {
							toolbar: {
								show: !1
							},
							zoom: {
								enabled: !1
							}
						},
						dataLabels: {
							enabled: !1
						}
					})
				}
			}, {
				key: "bar",
				value: function() {
					return {
						chart: {
							stacked: !1,
							toolbar: {
								show: !1
							}
						},
						plotOptions: {
							bar: {
								dataLabels: {
									position: "center"
								}
							}
						},
						dataLabels: {
							style: {
								colors: ["#fff"]
							}
						},
						stroke: {
							width: 0
						},
						fill: {
							opacity: .85
						},
						legend: {
							markers: {
								shape: "square",
								radius: 2,
								size: 8
							}
						},
						tooltip: {
							shared: !1
						},
						xaxis: {
							tooltip: {
								enabled: !1
							},
							crosshairs: {
								width: "barWidth",
								position: "back",
								fill: {
									type: "gradient"
								},
								dropShadow: {
									enabled: !1
								}
							}
						}
					}
				}
			}, {
				key: "candlestick",
				value: function() {
					return {
						stroke: {
							width: 1,
							colors: ["#333"]
						},
						dataLabels: {
							enabled: !1
						},
						tooltip: {
							shared: !0,
							custom: function(t) {
								var e = t.seriesIndex,
									i = t.dataPointIndex,
									a = t.w;
								return '<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">' + a.globals.seriesCandleO[
										e][i] + '</span></div><div>High: <span class="value">' + a.globals.seriesCandleH[e][i] +
									'</span></div><div>Low: <span class="value">' + a.globals.seriesCandleL[e][i] +
									'</span></div><div>Close: <span class="value">' + a.globals.seriesCandleC[e][i] +
									"</span></div></div>"
							}
						},
						states: {
							active: {
								filter: {
									type: "none"
								}
							}
						},
						xaxis: {
							crosshairs: {
								width: 1
							}
						}
					}
				}
			}, {
				key: "area",
				value: function() {
					return {
						stroke: {
							width: 4
						},
						fill: {
							type: "gradient",
							gradient: {
								inverseColors: !1,
								shade: "light",
								type: "vertical",
								opacityFrom: .65,
								opacityTo: .5,
								stops: [0, 100, 100]
							}
						},
						tooltip: {
							followCursor: !1
						}
					}
				}
			}, {
				key: "brush",
				value: function(t) {
					return r.default.extend(t, {
						chart: {
							toolbar: {
								autoSelected: "selection",
								show: !1
							},
							zoom: {
								enabled: !1
							}
						},
						dataLabels: {
							enabled: !1
						},
						stroke: {
							width: 1
						},
						tooltip: {
							enabled: !1
						},
						xaxis: {
							tooltip: {
								enabled: !1
							}
						}
					})
				}
			}, {
				key: "stacked100",
				value: function() {
					this.opts.dataLabels = this.opts.dataLabels || {}, this.opts.dataLabels.formatter = this.opts.dataLabels.formatter ||
						void 0;
					var t = this.opts.dataLabels.formatter;
					this.opts.yaxis[0].min = 0, this.opts.yaxis[0].max = 100, !("bar" !== this.opts.chart.type) && (this.opts
						.dataLabels.formatter = t || function(t) {
							return "number" == typeof t && t ? t.toFixed(0) + "%" : t
						})
				}
			}, {
				key: "bubble",
				value: function() {
					return {
						dataLabels: {
							style: {
								colors: ["#fff"]
							}
						},
						tooltip: {
							shared: !1,
							intersect: !0
						},
						xaxis: {
							crosshairs: {
								width: 0
							}
						},
						fill: {
							type: "solid",
							gradient: {
								shade: "light",
								inverse: !0,
								shadeIntensity: .55,
								opacityFrom: .4,
								opacityTo: .8
							}
						}
					}
				}
			}, {
				key: "scatter",
				value: function() {
					return {
						dataLabels: {
							enabled: !1
						},
						tooltip: {
							shared: !1,
							intersect: !0
						},
						markers: {
							size: 6,
							strokeWidth: 2,
							hover: {
								size: 8
							}
						}
					}
				}
			}, {
				key: "heatmap",
				value: function() {
					return {
						chart: {
							zoom: {
								enabled: !1
							},
							toolbar: {
								show: !1
							}
						},
						fill: {
							opacity: 1
						},
						dataLabels: {
							style: {
								colors: ["#fff"]
							}
						},
						stroke: {
							colors: ["#fff"]
						},
						tooltip: {
							followCursor: !0,
							marker: {
								show: !1
							}
						},
						legend: {
							position: "top",
							markers: {
								shape: "square",
								size: 10,
								offsetY: 2
							}
						}
					}
				}
			}, {
				key: "pie",
				value: function() {
					return {
						chart: {
							toolbar: {
								show: !1
							}
						},
						dataLabels: {
							formatter: function(t) {
								return t.toFixed(1) + "%"
							},
							style: {
								colors: ["#fff"]
							},
							dropShadow: {
								enabled: !0
							}
						},
						stroke: {
							colors: ["#fff"]
						},
						fill: {
							opacity: 1,
							gradient: {
								shade: "dark",
								shadeIntensity: .35,
								inverseColors: !1,
								stops: [0, 100, 100]
							}
						},
						tooltip: {
							theme: "dark",
							fillSeriesColor: !0
						},
						legend: {
							position: "right"
						}
					}
				}
			}, {
				key: "donut",
				value: function() {
					return {
						chart: {
							toolbar: {
								show: !1
							}
						},
						dataLabels: {
							formatter: function(t) {
								return t.toFixed(1) + "%"
							},
							style: {
								colors: ["#fff"]
							},
							dropShadow: {
								enabled: !0
							}
						},
						stroke: {
							colors: ["#fff"]
						},
						fill: {
							opacity: 1,
							gradient: {
								shade: "dark",
								shadeIntensity: .4,
								inverseColors: !1,
								type: "vertical",
								opacityFrom: 1,
								opacityTo: 1,
								stops: [70, 98, 100]
							}
						},
						tooltip: {
							theme: "dark",
							fillSeriesColor: !0
						},
						legend: {
							position: "right"
						}
					}
				}
			}, {
				key: "radialBar",
				value: function() {
					return {
						chart: {
							animations: {
								dynamicAnimation: {
									enabled: !0,
									speed: 800
								}
							},
							toolbar: {
								show: !1
							}
						},
						fill: {
							gradient: {
								shade: "dark",
								shadeIntensity: .4,
								inverseColors: !1,
								type: "diagonal2",
								opacityFrom: 1,
								opacityTo: 1,
								stops: [70, 98, 100]
							}
						},
						legend: {
							show: !1
						},
						tooltip: {
							enabled: !1,
							fillSeriesColor: !0
						}
					}
				}
			}]), e
		}();
		t.exports = o
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = void 0;
		var a, n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = i(1),
			r = (a = s) && a.__esModule ? a : {
				default: a
			};
		var o = function() {
			function t() {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, t)
			}
			return n(t, [{
				key: "globalVars",
				value: function(t) {
					return {
						chartID: null,
						cuid: null,
						events: {
							beforeMount: [],
							mounted: [],
							updated: [],
							clicked: [],
							selection: [],
							dataPointSelection: [],
							zoomed: [],
							scrolled: []
						},
						colors: [],
						fill: {
							colors: []
						},
						stroke: {
							colors: []
						},
						dataLabels: {
							style: {
								colors: []
							}
						},
						markers: {
							colors: []
						},
						isDirty: !1,
						initialConfig: null,
						lastXAxis: [],
						lastYAxis: [],
						series: [],
						seriesPercent: [],
						seriesTotals: [],
						stackedSeriesTotals: [],
						seriesX: [],
						seriesZ: [],
						labels: [],
						timelineLabels: [],
						seriesNames: [],
						noLabelsProvided: !1,
						collapsedSeries: [],
						collapsedSeriesIndices: [],
						risingSeries: [],
						selectedDataPoints: [],
						ignoreYAxisIndexes: [],
						padHorizontal: 0,
						maxValsInArrayIndex: 0,
						zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled,
						panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan,
						selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection,
						yaxis: null,
						minY: Number.MIN_VALUE,
						maxY: -Number.MAX_VALUE,
						minYArr: [],
						maxYArr: [],
						maxX: -Number.MAX_VALUE,
						initialmaxX: -Number.MAX_VALUE,
						minX: Number.MAX_VALUE,
						initialminX: Number.MAX_VALUE,
						minZ: Number.MAX_VALUE,
						maxZ: -Number.MAX_VALUE,
						mousedown: !1,
						lastClientPosition: {},
						visibleXRange: void 0,
						yRange: [],
						zRange: 0,
						xRange: 0,
						yValueDecimal: 0,
						total: 0,
						svgNS: "http://www.w3.org/2000/svg",
						svgWidth: 0,
						svgHeight: 0,
						noData: !1,
						locale: {},
						dom: {},
						memory: {
							methodsToExec: []
						},
						delayedElements: [],
						axisCharts: !0,
						dataXY: !1,
						dataXYZ: !1,
						resized: !1,
						resizeTimer: null,
						comboCharts: !1,
						dataChanged: !1,
						previousPaths: [],
						seriesXvalues: [],
						seriesYvalues: [],
						seriesCandleO: [],
						seriesCandleH: [],
						seriesCandleL: [],
						seriesCandleC: [],
						dataPoints: 0,
						pointsArray: [],
						dataLabelsRects: [],
						lastDrawnDataLabelsIndexes: [],
						hasNullValues: !1,
						easing: null,
						zoomed: !1,
						gridWidth: 0,
						gridHeight: 0,
						yAxisScale: [],
						xAxisScale: null,
						xAxisTicksPositions: [],
						timescaleTicks: [],
						rotateXLabels: !1,
						defaultLabels: !1,
						xLabelFormatter: void 0,
						yLabelFormatters: [],
						xaxisTooltipFormatter: void 0,
						ttKeyFormatter: void 0,
						ttVal: void 0,
						ttZFormatter: void 0,
						lineHeightRatio: 1.618,
						xAxisLabelsHeight: 0,
						yAxisLabelsWidth: 0,
						scaleX: 1,
						scaleY: 1,
						translateX: 0,
						translateY: 0,
						translateYAxisX: [],
						yLabelsCoords: [],
						yTitleCoords: [],
						yAxisWidths: [],
						translateXAxisY: 0,
						translateXAxisX: 0,
						tooltip: null,
						tooltipOpts: null
					}
				}
			}, {
				key: "init",
				value: function(t) {
					var e = this.globalVars(t);
					return e.initialConfig = r.default.extend({}, t), e.initialSeries = JSON.parse(JSON.stringify(e.initialConfig
						.series)), e.lastXAxis = JSON.parse(JSON.stringify(e.initialConfig.xaxis)), e.lastYAxis = JSON.parse(
						JSON.stringify(e.initialConfig.yaxis)), e
				}
			}]), t
		}();
		e.default = o
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
			function a(t, e) {
				for (var i = 0; i < e.length; i++) {
					var a = e[i];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
						t, a.key, a)
				}
			}
			return function(t, e, i) {
				return e && a(t.prototype, e), i && a(t, i), t
			}
		}();
		var n = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.w = t.w, this.ttCtx = t
			}
			return a(e, [{
				key: "drawXaxisTooltip",
				value: function() {
					var t = this.w,
						e = this.ttCtx,
						i = "bottom" === t.config.xaxis.position;
					e.xaxisOffY = i ? t.globals.gridHeight + 1 : 1;
					var a = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" :
						"apexcharts-xaxistooltip apexcharts-xaxistooltip-top",
						n = t.globals.dom.elWrap;
					e.blxaxisTooltip && (null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e.xaxisTooltip =
						document.createElement("div"), e.xaxisTooltip.setAttribute("class", a), n.appendChild(e.xaxisTooltip),
						e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add(
							"apexcharts-xaxistooltip-text"), e.xaxisTooltip.appendChild(e.xaxisTooltipText)))
				}
			}, {
				key: "drawYaxisTooltip",
				value: function() {
					for (var t = this.w, e = this.ttCtx, i = 0; i < t.config.yaxis.length; i++) {
						var a = t.config.yaxis[i].opposite || t.config.yaxis[i].crosshairs.opposite;
						e.yaxisOffX = a ? t.globals.gridWidth + 1 : 1;
						var n = a ? "apexcharts-yaxistooltip apexcharts-yaxistooltip-" + i + " apexcharts-yaxistooltip-right" :
							"apexcharts-yaxistooltip apexcharts-yaxistooltip-" + i + " apexcharts-yaxistooltip-left",
							s = t.globals.dom.elWrap;
						if (e.blyaxisTooltip) null === t.globals.dom.baseEl.querySelector(
							".apexcharts-yaxistooltip apexcharts-yaxistooltip-" + i) && (e.yaxisTooltip = document.createElement(
								"div"), e.yaxisTooltip.setAttribute("class", n), s.appendChild(e.yaxisTooltip), 0 === i && (e.yaxisTooltipText = []),
							e.yaxisTooltipText.push(document.createElement("div")), e.yaxisTooltipText[i].classList.add(
								"apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))
					}
				}
			}, {
				key: "setXCrosshairWidth",
				value: function() {
					var t = this.w,
						e = this.ttCtx,
						i = e.getElXCrosshairs();
					if (e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width), t.globals.comboCharts) {
						var a = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
						if (null !== a && "barWidth" === t.config.xaxis.crosshairs.width) {
							var n = parseFloat(a.getAttribute("barWidth"));
							e.xcrosshairsWidth = n
						} else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
							var s = t.globals.labels.length;
							e.xcrosshairsWidth = t.globals.gridWidth / s
						}
					} else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
						var r = t.globals.labels.length;
						e.xcrosshairsWidth = t.globals.gridWidth / r
					} else if ("barWidth" === t.config.xaxis.crosshairs.width) {
						var o = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
						if (null !== o) {
							var l = parseFloat(o.getAttribute("barWidth"));
							e.xcrosshairsWidth = l
						} else e.xcrosshairsWidth = 1
					}
					"bar" === t.config.chart.type && t.config.plotOptions.bar.horizontal && (e.xcrosshairsWidth = 0), null !==
						i && i.setAttribute("width", e.xcrosshairsWidth)
				}
			}, {
				key: "handleYCrosshair",
				value: function() {
					var t = this.w,
						e = this.ttCtx;
					e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals
						.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")
				}
			}, {
				key: "drawYaxisTooltipText",
				value: function(t, e, i) {
					var a = this.ttCtx,
						n = this.w,
						s = n.globals.yLabelFormatters[t];
					if (a.blyaxisTooltip) {
						var r = a.getElGrid().getBoundingClientRect(),
							o = (e - r.top) * i.yRatio[t],
							l = n.globals.maxYArr[t] - n.globals.minYArr[t],
							h = n.globals.minYArr[t] + (l - o);
						a.tooltipPosition.moveYCrosshairs(e - r.top), a.yaxisTooltipText[t].innerHTML = s(h), a.tooltipPosition.moveYAxisTooltip(
							t)
					}
				}
			}]), e
		}();
		e.default = n
	}, function(t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, n = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			s = i(1),
			p = (a = s) && a.__esModule ? a : {
				default: a
			};
		var r = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.getAttr = function(t, e) {
					return parseFloat(t.target.getAttribute(e))
				}, this.w = t.w, this.ttCtx = t
			}
			return n(e, [{
				key: "handleHeatTooltip",
				value: function(t) {
					var e = t.e,
						i = t.opt,
						a = t.x,
						n = t.y,
						s = this.ttCtx,
						r = this.w;
					if (e.target.classList.contains("apexcharts-heatmap-rect")) {
						var o = this.getAttr(e, "i"),
							l = this.getAttr(e, "j"),
							h = this.getAttr(e, "cx"),
							c = this.getAttr(e, "cy"),
							u = this.getAttr(e, "width"),
							d = this.getAttr(e, "height");
						if (s.tooltipLabels.drawSeriesTexts({
								ttItems: i.ttItems,
								i: o,
								j: l,
								shared: !1
							}), a = h + s.tooltipRect.ttWidth / 2 + u / 2, n = c + s.tooltipRect.ttHeight / 2 - d / 2, a > r.globals
							.gridWidth / 2 && (a = h - s.tooltipRect.ttWidth / 2 + u), s.w.config.tooltip.followCursor) {
							var f = s.getElGrid().getBoundingClientRect();
							n = s.e.clientY - f.top
						}
					}
					return {
						x: a,
						y: n
					}
				}
			}, {
				key: "handleMarkerTooltip",
				value: function(t) {
					var e = t.e,
						i = t.opt,
						a = t.x,
						n = t.y,
						s = this.w,
						r = this.ttCtx,
						o = void 0,
						l = void 0;
					if (e.target.classList.contains("apexcharts-marker")) {
						var h = parseInt(i.paths.getAttribute("cx")),
							c = parseInt(i.paths.getAttribute("cy")),
							u = parseFloat(i.paths.getAttribute("val"));
						if (l = parseInt(i.paths.getAttribute("rel")), o = parseInt(i.paths.parentNode.parentNode.parentNode.getAttribute(
								"rel")) - 1, r.intersect) {
							var d = p.default.findAncestor(i.paths, "apexcharts-series");
							d && (o = parseInt(d.getAttribute("data:realIndex")))
						}
						if (r.tooltipLabels.drawSeriesTexts({
								ttItems: i.ttItems,
								i: o,
								j: l,
								shared: !r.intersect && s.config.tooltip.shared
							}), r.marker.enlargeCurrentPoint(l, i.paths), a = h, n = c - 1.4 * r.tooltipRect.ttHeight, r.w.config.tooltip
							.followCursor) {
							var f = r.getElGrid().getBoundingClientRect();
							n = r.e.clientY - f.top
						}
						u < 0 && (n = c)
					}
					return {
						x: a,
						y: n
					}
				}
			}, {
				key: "handleBarTooltip",
				value: function(t) {
					var e = t.e,
						i = t.opt,
						a = this.w,
						n = this.ttCtx,
						s = n.getElTooltip(),
						r = 0,
						o = 0,
						l = 0;
					if (n.isBarHorizontal && n.hasBars() || !a.config.tooltip.shared) {
						var h = this.getBarTooltipXY({
							e: e,
							opt: i
						});
						o = h.x, l = h.y, r = o
					} else a.globals.comboCharts || a.config.tooltip.shared || (r /= 2);
					if (isNaN(l) && (l = a.globals.svgHeight - n.tooltipRect.ttHeight), o + n.tooltipRect.ttWidth > a.globals
						.gridWidth ? o -= n.tooltipRect.ttWidth : o < 0 && (o += n.tooltipRect.ttWidth), n.w.config.tooltip.followCursor
					) {
						var c = n.getElGrid().getBoundingClientRect();
						l = n.e.clientY - c.top
					}
					null === n.tooltip && (n.tooltip = a.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), a.globals.comboCharts ||
						a.config.tooltip.shared || n.tooltipPosition.moveXCrosshairs(r), !n.fixedTooltip && (!a.config.tooltip.shared ||
							n.isBarHorizontal && n.hasBars()) && (s.style.left = o + a.globals.translateX + "px", s.style.top = l +
							a.globals.translateY - n.tooltipRect.ttHeight / 2 + "px")
				}
			}, {
				key: "getBarTooltipXY",
				value: function(t) {
					var e = t.e,
						i = t.opt,
						a = this.w,
						n = null,
						s = this.ttCtx,
						r = 0,
						o = 0,
						l = e.target.classList;
					if (l.contains("apexcharts-bar-area") || l.contains("apexcharts-candlestick-area")) {
						var h = e.target,
							c = h.getBoundingClientRect(),
							u = i.elGrid.getBoundingClientRect(),
							d = c.height,
							f = c.width,
							p = parseInt(h.getAttribute("cx")),
							g = parseInt(h.getAttribute("cy")),
							x = "touchmove" === e.type ? e.touches[0].clientX : e.clientX;
						n = parseInt(h.getAttribute("j"));
						var v = parseInt(h.parentNode.getAttribute("rel")) - 1;
						a.globals.comboCharts && (v = parseInt(h.parentNode.getAttribute("data:realIndex"))), s.tooltipLabels.drawSeriesTexts({
								ttItems: i.ttItems,
								i: v,
								j: n,
								shared: !s.showOnIntersect && a.config.tooltip.shared
							}), o = a.config.tooltip.followCursor ? a.config.plotOptions.bar.horizontal ? (r = x - u.left + 15, g -
								s.dataPointsDividedHeight + d / 2 - s.tooltipRect.ttHeight / 2) : (r = a.globals.dataXY ? p - f / 2 :
								p - s.dataPointsDividedWidth + f / 2, e.clientY - u.top - s.tooltipRect.ttHeight / 2 - 15) : a.config.plotOptions
							.bar.horizontal ? ((r = p) < s.xyRatios.baseLineInvertedY && (r = p - s.tooltipRect.ttWidth), g - s.dataPointsDividedHeight +
								d / 2 - s.tooltipRect.ttHeight / 2) : (r = a.globals.dataXY ? p - f / 2 : p - s.dataPointsDividedWidth +
								f / 2, g)
					}
					return {
						x: r,
						y: o,
						j: n
					}
				}
			}]), e
		}();
		e.default = r
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			u = s(i(30)),
			n = s(i(80));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.w = t.w, this.ctx = t.ctx, this.ttCtx = t, this.tooltipUtil = new n.default(t)
			}
			return a(e, [{
				key: "drawSeriesTexts",
				value: function(t) {
					var e = t.shared,
						i = void 0 === e || e,
						a = t.ttItems,
						n = t.i,
						s = void 0 === n ? 0 : n,
						r = t.j,
						o = void 0 === r ? null : r;
					void 0 !== this.w.config.tooltip.custom ? this.handleCustomTooltip({
						i: s,
						j: o
					}) : this.toggleActiveInactiveSeries(i);
					var l = this.getValuesToPrint({
						i: s,
						j: o
					});
					this.printLabels({
						i: s,
						j: o,
						values: l,
						ttItems: a,
						shared: i
					})
				}
			}, {
				key: "printLabels",
				value: function(t) {
					var e = t.i,
						i = t.j,
						a = t.values,
						n = t.ttItems,
						s = t.shared,
						r = this.w,
						o = void 0,
						l = a.xVal,
						h = a.zVal,
						c = a.xAxisTTVal,
						u = "",
						d = r.globals.colors[e];
					null !== i && r.config.plotOptions.bar.distributed && (d = r.globals.colors[i]);
					for (var f = 0, p = r.globals.series.length - 1; f < r.globals.series.length; f++, p--) {
						var g = this.getFormatters(e);
						if (u = this.getSeriesName({
								fn: g.yLbTitleFormatter,
								index: e,
								seriesIndex: e,
								j: i
							}), s) {
							var x = r.config.tooltip.inverseOrder ? p : f;
							g = this.getFormatters(x), u = this.getSeriesName({
								fn: g.yLbTitleFormatter,
								index: x,
								seriesIndex: e,
								j: i
							}), d = r.globals.colors[x], o = g.yLbFormatter(r.globals.series[x][i], {
								series: r.globals.series,
								seriesIndex: e,
								dataPointIndex: i,
								w: r
							}), (this.ttCtx.hasBars() && r.config.chart.stacked && 0 === r.globals.series[x][i] || void 0 === r.globals
								.series[x][i]) && (o = void 0)
						} else o = g.yLbFormatter(r.globals.series[e][i], r);
						null === i && (o = g.yLbFormatter(r.globals.series[e], r)), this.DOMHandling({
							t: f,
							ttItems: n,
							values: {
								val: o,
								xVal: l,
								xAxisTTVal: c,
								zVal: h
							},
							seriesName: u,
							shared: s,
							pColor: d
						})
					}
				}
			}, {
				key: "getFormatters",
				value: function(t) {
					var e = this.w,
						i = e.globals.yLabelFormatters[t],
						a = void 0;
					return void 0 !== e.globals.ttVal ? Array.isArray(e.globals.ttVal) ? (i = e.globals.ttVal[t] && e.globals
						.ttVal[t].formatter, a = e.globals.ttVal[t] && e.globals.ttVal[t].title && e.globals.ttVal[t].title.formatter
					) : (i = e.globals.ttVal.formatter, "function" == typeof e.globals.ttVal.title.formatter && (a = e.globals
						.ttVal.title.formatter)) : a = e.config.tooltip.y.title.formatter, "function" != typeof i && (i = e.globals
						.yLabelFormatters[0] ? e.globals.yLabelFormatters[0] : function(t) {
							return t
						}), "function" != typeof a && (a = function(t) {
						return t
					}), {
						yLbFormatter: i,
						yLbTitleFormatter: a
					}
				}
			}, {
				key: "getSeriesName",
				value: function(t) {
					var e = t.fn,
						i = t.index,
						a = t.seriesIndex,
						n = t.j,
						s = this.w;
					return e(String(s.globals.seriesNames[i]), {
						series: s.globals.series,
						seriesIndex: a,
						dataPointIndex: n,
						w: s
					})
				}
			}, {
				key: "DOMHandling",
				value: function(t) {
					var e = t.t,
						i = t.ttItems,
						a = t.values,
						n = t.seriesName,
						s = t.shared,
						r = t.pColor,
						o = this.w,
						l = this.ttCtx,
						h = a.val,
						c = a.xVal,
						u = a.xAxisTTVal,
						d = a.zVal,
						f = null;
					(f = i[e].children, o.config.tooltip.fillSeriesColor && (i[e].style.backgroundColor = r, f[0].style.display =
							"none"), l.showTooltipTitle && (null === l.tooltipTitle && (l.tooltipTitle = o.globals.dom.baseEl.querySelector(
							".apexcharts-tooltip-title")), l.tooltipTitle.innerHTML = c), l.blxaxisTooltip && (l.xaxisTooltipText.innerHTML =
							"" !== u ? u : c), i[e].querySelector(".apexcharts-tooltip-text-label").innerHTML = n ? n + ": " : "",
						i[e].querySelector(".apexcharts-tooltip-text-value").innerHTML = h, f[0].classList.contains(
							"apexcharts-tooltip-marker") && (f[0].style.backgroundColor = r), o.config.tooltip.marker.show || (f[0]
							.style.display = "none"), null !== d) && (i[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML =
						o.config.tooltip.z.title, i[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = d);
					s && (f[0].parentNode.style.display = null == h ? "none" : o.config.tooltip.items.display)
				}
			}, {
				key: "toggleActiveInactiveSeries",
				value: function(t) {
					var e = this.w;
					if (t) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
					else {
						this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
						var i = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
						i && (i.classList.add("active"), i.style.display = e.config.tooltip.items.display)
					}
				}
			}, {
				key: "getValuesToPrint",
				value: function(t) {
					var e = t.i,
						i = t.j,
						a = this.w,
						n = this.tooltipUtil.filteredSeriesX(),
						s = "",
						r = null,
						o = null,
						l = {
							series: a.globals.series,
							seriesIndex: e,
							dataPointIndex: i,
							w: a
						},
						h = a.globals.ttZFormatter;
					null === i ? o = a.globals.series[e] : a.globals.dataXY ? (s = n[e][i], 0 === n[e].length && (s = n[this.tooltipUtil
						.getFirstActiveXArray(n)][i])) : s = void 0 !== a.globals.labels[i] ? a.globals.labels[i] : "";
					var c = s;
					a.globals.dataXY && "datetime" === a.config.xaxis.type ? s = new u.default(this.ctx).xLabelFormat(a.globals
						.ttKeyFormatter, c) : s = a.globals.xLabelFormatter(c, l);
					return void 0 !== a.config.tooltip.x.formatter && (s = a.globals.ttKeyFormatter(c, l)), 0 < a.globals.seriesZ
						.length && 0 < a.globals.seriesZ[0].length && (r = h(a.globals.seriesZ[e][i], a)), {
							val: o,
							xVal: s,
							xAxisTTVal: "function" == typeof a.config.xaxis.tooltip.formatter ? a.globals.xaxisTooltipFormatter(c,
								l) : s,
							zVal: r
						}
				}
			}, {
				key: "handleCustomTooltip",
				value: function(t) {
					var e = t.i,
						i = t.j,
						a = this.w;
					this.ttCtx.getElTooltip().innerHTML = a.config.tooltip.custom({
						series: a.globals.series,
						seriesIndex: e,
						dataPointIndex: i,
						w: a
					})
				}
			}]), e
		}();
		t.exports = r
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			u = s(i(0)),
			n = s(i(79)),
			d = s(i(47));

		function s(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = function() {
			function e(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx, this.tooltipPosition = new n.default(t)
			}
			return a(e, [{
				key: "drawDynamicPoints",
				value: function() {
					for (var t = this.w, e = new u.default(this.ctx), i = new d.default(this.ctx), a = t.globals.dom.baseEl.querySelectorAll(
							".apexcharts-series"), n = 0; n < a.length; n++) {
						var s = parseInt(a[n].getAttribute("data:realIndex")),
							r = t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='" + s +
								"'] .apexcharts-series-markers-wrap");
						if (null !== r) {
							var o, l = "apexcharts-marker w" + (Math.random() + 1).toString(36).substring(4);
							"line" !== t.config.chart.type && "area" !== t.config.chart.type || t.globals.comboCharts || t.config.tooltip
								.intersect || (l += " no-pointer-events");
							var h = i.getMarkerConfig(l, s);
							o = e.drawMarker(0, 0, h);
							var c = document.createElementNS(t.globals.svgNS, "g");
							c.classList.add("apexcharts-series-markers"), c.appendChild(o.node), r.appendChild(c)
						}
					}
				}
			}, {
				key: "enlargeCurrentPoint",
				value: function(t, e) {
					var i = this.w;
					"bubble" !== i.config.chart.type && this.newPointSize(t, e);
					var a = e.getAttribute("cx"),
						n = e.getAttribute("cy");
					this.tooltipPosition.moveXCrosshairs(a), this.fixedTooltip || this.tooltipPosition.moveTooltip(a, n, i.config
						.markers.hover.size)
				}
			}, {
				key: "enlargePoints",
				value: function(t) {
					for (var e = this.w, i = this.ttCtx, a = t, n = e.globals.dom.baseEl.querySelectorAll(
								".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), s = e.config.markers.hover
							.size, r = 0; r < n.length; r++) {
						var o = n[r].getAttribute("rel");
						if (a === parseInt(o)) {
							this.newPointSize(a, n[r]);
							var l = n[r].getAttribute("cx"),
								h = n[r].getAttribute("cy");
							this.tooltipPosition.moveXCrosshairs(l), i.fixedTooltip || this.tooltipPosition.moveTooltip(l, h, s)
						} else this.oldPointSize(n[r])
					}
				}
			}, {
				key: "newPointSize",
				value: function(t, e) {
					var i = this.w.config.markers.hover.size;
					(0 === t ? e.parentNode.firstChild : e.parentNode.lastChild).setAttribute("r", i)
				}
			}, {
				key: "oldPointSize",
				value: function(t) {
					var e = this.w.config.markers.size;
					t.setAttribute("r", e)
				}
			}, {
				key: "resetPointsSize",
				value: function() {
					for (var t = this.w, e = t.config.markers.size, i = t.globals.dom.baseEl.querySelectorAll(
							".apexcharts-marker"), a = 0; a < i.length; a++) i[a].setAttribute("r", e)
				}
			}]), e
		}();
		t.exports = r
	}, function(t, e, i) {
		"use strict";
		var a = function() {
				function a(t, e) {
					for (var i = 0; i < e.length; i++) {
						var a = e[i];
						a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(
							t, a.key, a)
					}
				}
				return function(t, e, i) {
					return e && a(t.prototype, e), i && a(t, i), t
				}
			}(),
			n = f(i(145)),
			s = f(i(79)),
			r = f(i(146)),
			o = f(i(144)),
			l = f(i(143)),
			d = f(i(0)),
			h = f(i(26)),
			c = f(i(48)),
			u = f(i(80));

		function f(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var p = function() {
			function i(t) {
				! function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}(this, i), this.ctx = t, this.w = t.w;
				var e = this.w;
				this.tooltipUtil = new u.default(this), this.tooltipLabels = new n.default(this), this.tooltipPosition = new s
					.default(this), this.marker = new r.default(this), this.intersect = new o.default(this), this.axesTooltip =
					new l.default(this), this.showOnIntersect = e.config.tooltip.intersect, this.showTooltipTitle = e.config.tooltip
					.x.show, this.fixedTooltip = e.config.tooltip.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null,
					this.isBarHorizontal = e.config.plotOptions.bar.horizontal, this.isBarShared = !e.config.plotOptions.bar.horizontal &&
					e.config.tooltip.shared
			}
			return a(i, [{
				key: "getElTooltip",
				value: function(t) {
					return t || (t = this), t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip")
				}
			}, {
				key: "getElXCrosshairs",
				value: function() {
					return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")
				}
			}, {
				key: "getElGrid",
				value: function() {
					return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")
				}
			}, {
				key: "drawTooltip",
				value: function(t) {
					var e = this.w;
					this.xyRatios = t, this.blxaxisTooltip = e.config.xaxis.tooltip.enabled && e.globals.axisCharts, this.blyaxisTooltip =
						e.config.yaxis[0].tooltip.enabled && e.globals.axisCharts, this.allTooltipSeriesGroups = [], e.globals.axisCharts ||
						(this.showTooltipTitle = !1);
					var i = document.createElement("div");
					if (i.classList.add("apexcharts-tooltip"), i.classList.add(e.config.tooltip.theme), e.globals.dom.elWrap.appendChild(
							i), e.globals.axisCharts) {
						this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(),
							this.axesTooltip.handleYCrosshair();
						var a = new c.default(this.ctx);
						this.xAxisTicksPositions = a.getXAxisTicksPositions()
					}
					if ((e.globals.comboCharts && !e.config.tooltip.shared || e.config.tooltip.intersect && !e.config.tooltip
							.shared || "bar" === e.config.chart.type && !e.config.tooltip.shared) && (this.showOnIntersect = !0), 0 ===
						e.config.markers.size && this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals
						.series.length) {
						this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints, this.dataPointsDividedWidth =
							e.globals.gridWidth / e.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement(
								"div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), i.appendChild(this.tooltipTitle));
						var n = e.globals.series.length;
						(e.globals.xyCharts || e.globals.comboCharts) && e.config.tooltip.shared && (n = this.showOnIntersect ?
							1 : e.globals.series.length), this.ttItems = this.createTTElements(n), this.addSVGEvents()
					}
				}
			}, {
				key: "createTTElements",
				value: function(t) {
					for (var e = this.w, i = [], a = this.getElTooltip(), n = 0; n < t; n++) {
						var s = document.createElement("div");
						s.classList.add("apexcharts-tooltip-series-group");
						var r = document.createElement("span");
						r.classList.add("apexcharts-tooltip-marker"), r.style.backgroundColor = e.globals.colors[n], s.appendChild(
							r);
						var o = document.createElement("div");
						o.classList.add("apexcharts-tooltip-text");
						var l = document.createElement("div");
						l.classList.add("apexcharts-tooltip-y-group");
						var h = document.createElement("span");
						h.classList.add("apexcharts-tooltip-text-label"), l.appendChild(h);
						var c = document.createElement("span");
						c.classList.add("apexcharts-tooltip-text-value"), l.appendChild(c);
						var u = document.createElement("div");
						u.classList.add("apexcharts-tooltip-z-group");
						var d = document.createElement("span");
						d.classList.add("apexcharts-tooltip-text-z-label"), u.appendChild(d);
						var f = document.createElement("span");
						f.classList.add("apexcharts-tooltip-text-z-value"), u.appendChild(f), o.appendChild(l), o.appendChild(u),
							s.appendChild(o), a.appendChild(s), i.push(s)
					}
					return i
				}
			}, {
				key: "addSVGEvents",
				value: function() {
					var t = this.w,
						e = t.config.chart.type,
						i = this.getElTooltip(),
						a = !("bar" !== e && "candlestick" !== e),
						n = t.globals.dom.Paper.node,
						s = this.getElGrid();
					s && (this.seriesBound = s.getBoundingClientRect());
					var r = [],
						o = [],
						l = {
							hoverArea: n,
							elGrid: s,
							tooltipEl: i,
							tooltipY: r,
							tooltipX: o,
							ttItems: this.ttItems
						},
						h = void 0;
					if (t.globals.axisCharts && ("area" === e || "line" === e || "scatter" === e || "bubble" === e ? h = t.globals
							.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a ?
							h = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area",
								".apexcharts-series .apexcharts-candlestick-area") : "heatmap" === e && (h = t.globals.dom.baseEl.querySelectorAll(
								".apexcharts-series .apexcharts-heatmap")), h && h.length))
						for (var c = 0; c < h.length; c++) r.push(h[c].getAttribute("cy")), o.push(h[c].getAttribute("cx"));
					if (t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || a &&
						!this.isBarHorizontal && this.hasBars() && t.config.tooltip.shared) this.addPathsEventListeners([n], l);
					else if (a && !t.globals.comboCharts) this.addBarsEventListeners(l);
					else if ("bubble" === e || "scatter" === e || this.showOnIntersect && ("area" === e || "line" === e)) this
						.addPointsEventsListeners(l);
					else if (!t.globals.axisCharts || "heatmap" === e) {
						var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
						this.addPathsEventListeners(u, l)
					}
					if (this.showOnIntersect) {
						var d = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker");
						0 < d.length && this.addPathsEventListeners(d, l);
						var f = t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-marker");
						0 < f.length && this.addPathsEventListeners(f, l), this.hasBars() && !t.config.tooltip.shared && this.addBarsEventListeners(
							l)
					}
				}
			}, {
				key: "drawFixedTooltipRect",
				value: function() {
					var t = this.w,
						e = this.getElTooltip(),
						i = e.getBoundingClientRect(),
						a = i.width + 10,
						n = i.height + 10,
						s = t.config.tooltip.fixed.offsetX,
						r = t.config.tooltip.fixed.offsetY;
					return -1 < t.config.tooltip.fixed.position.toLowerCase().indexOf("right") && (s = s + t.globals.svgWidth -
						a + 10), -1 < t.config.tooltip.fixed.position.toLowerCase().indexOf("bottom") && (r = r + t.globals.svgHeight -
						n - 10), e.style.left = s + "px", e.style.top = r + "px", {
						x: s,
						y: r,
						ttWidth: a,
						ttHeight: n
					}
				}
			}, {
				key: "addPointsEventsListeners",
				value: function(t) {
					var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker");
					this.addPathsEventListeners(e, t)
				}
			}, {
				key: "addBarsEventListeners",
				value: function(t) {
					var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-area, .apexcharts-candlestick-area");
					this.addPathsEventListeners(e, t)
				}
			}, {
				key: "addPathsEventListeners",
				value: function(a, t) {
					for (var n = this, s = this, e = function(e) {
							var i = {
								paths: a[e],
								tooltipEl: t.tooltipEl,
								tooltipY: t.tooltipY,
								tooltipX: t.tooltipX,
								elGrid: t.elGrid,
								hoverArea: t.hoverArea,
								ttItems: t.ttItems
							};
							n.w.globals.tooltipOpts = i;
							["mousemove", "touchmove", "mouseout", "touchend"].map(function(t) {
								return a[e].addEventListener(t, s.seriesHover.bind(s, i), !1)
							})
						}, i = 0; i < a.length; i++) e(i)
				}
			}, {
				key: "seriesHover",
				value: function(a, n) {
					var s = this,
						t = [];
					this.w.config.chart.group && (t = this.ctx.getGroupedCharts()), t.length ? t.forEach(function(t) {
						var e = s.getElTooltip(t),
							i = {
								paths: a.paths,
								tooltipEl: e,
								tooltipY: a.tooltipY,
								tooltipX: a.tooltipX,
								elGrid: a.elGrid,
								hoverArea: a.hoverArea,
								ttItems: t.w.globals.tooltip.ttItems
							};
						t.w.globals.minX === s.w.globals.minX && t.w.globals.maxX === s.w.globals.maxX && t.w.globals.tooltip.seriesHoverByContext({
							chartCtx: t,
							ttCtx: t.w.globals.tooltip,
							opt: i,
							e: n
						})
					}) : this.seriesHoverByContext({
						chartCtx: this.ctx,
						ttCtx: this.w.globals.tooltip,
						opt: a,
						e: n
					})
				}
			}, {
				key: "seriesHoverByContext",
				value: function(t) {
					var e = t.chartCtx,
						i = t.ttCtx,
						a = t.opt,
						n = t.e,
						s = e.w,
						r = this.getElTooltip();
					(i.tooltipRect = {
						x: 0,
						y: 0,
						ttWidth: r.getBoundingClientRect().width,
						ttHeight: r.getBoundingClientRect().height
					}, i.e = n, !i.hasBars() || s.globals.comboCharts || i.isBarShared) || s.config.tooltip.onDatasetHover.highlightDataSeries &&
						new h.default(e).toggleSeriesOnHover(n, n.target.parentNode);
					i.fixedTooltip && i.drawFixedTooltipRect(), s.globals.axisCharts ? i.axisChartsTooltips({
						e: n,
						opt: a,
						tooltipRect: i.tooltipRect
					}) : i.nonAxisChartsTooltips({
						e: n,
						opt: a,
						tooltipRect: i.tooltipRect
					})
				}
			}, {
				key: "axisChartsTooltips",
				value: function(t) {
					var e = t.e,
						i = t.opt,
						a = this.w,
						n = void 0,
						s = void 0,
						r = void 0,
						o = this,
						l = null,
						h = this.getElTooltip(),
						c = this.getElXCrosshairs(),
						u = "touchmove" === e.type ? e.touches[0].clientX : e.clientX,
						d = "touchmove" === e.type ? e.touches[0].clientY : e.clientY;
					this.clientY = d, this.clientX = u;
					var f = a.globals.xyCharts || "bar" === a.config.chart.type && !this.isBarHorizontal && this.hasBars() &&
						a.config.tooltip.shared || a.globals.comboCharts && this.hasBars;
					if ("bar" === a.config.chart.type && this.isBarHorizontal && this.hasBars() && (f = !1), "mousemove" ===
						e.type || "touchmove" === e.type) {
						if (null !== c && c.classList.add("active"), null !== o.ycrosshairs && o.blyaxisTooltip && o.ycrosshairs
							.classList.add("active"), f && !o.showOnIntersect) {
							n = (l = o.tooltipUtil.getNearestValues({
								context: o,
								hoverArea: i.hoverArea,
								elGrid: i.elGrid,
								clientX: u,
								clientY: d,
								hasBars: o.hasBars
							})).j;
							var p = l.capturedSeries;
							if (l.hoverX < 0 || l.hoverX > a.globals.gridWidth) return void o.handleMouseOut(i);
							if (null !== p) {
								if (null === a.globals.series[p][n]) return void i.tooltipEl.classList.remove("active");
								void 0 !== a.globals.series[p][n] ? a.config.tooltip.shared && this.tooltipUtil.isXoverlap(n) && this.tooltipUtil
									.isinitialSeriesSameLen() ? this.create(o, p, n, i.ttItems) : this.create(o, p, n, i.ttItems, !1) :
									this.tooltipUtil.isXoverlap(n) && o.create(o, 0, n, i.ttItems)
							} else this.tooltipUtil.isXoverlap(n) && o.create(o, 0, n, i.ttItems)
						} else if ("heatmap" === a.config.chart.type) {
							var g = this.intersect.handleHeatTooltip({
								e: e,
								opt: i,
								x: s,
								y: r
							});
							s = g.x, r = g.y, h.style.left = s + "px", h.style.top = r + "px"
						} else this.hasBars && this.intersect.handleBarTooltip({
							e: e,
							opt: i
						}), this.hasMarkers && this.intersect.handleMarkerTooltip({
							e: e,
							opt: i,
							x: s,
							y: r
						});
						if (this.blyaxisTooltip)
							for (var x = 0; x < a.config.yaxis.length; x++) o.axesTooltip.drawYaxisTooltipText(x, d, o.xyRatios);
						i.tooltipEl.classList.add("active")
					} else "mouseout" !== e.type && "touchend" !== e.type || this.handleMouseOut(i)
				}
			}, {
				key: "nonAxisChartsTooltips",
				value: function(t) {
					var e = t.e,
						i = t.opt,
						a = t.tooltipRect,
						n = this.w,
						s = i.paths.getAttribute("rel"),
						r = this.getElTooltip(),
						o = 0,
						l = 0,
						h = null,
						c = "touchmove" === e.type ? e.touches[0].clientX : e.clientX;
					"radialBar" === n.config.chart.type ? h = n.globals.dom.baseEl.querySelector(".apexcharts-radialbar") : (
						h = n.globals.dom.baseEl.querySelector(".apexcharts-pie"), o = parseInt(h.getAttribute(
							"data:innerTranslateX")), l = parseInt(h.getAttribute("data:innerTranslateY")));
					var u = h.getBoundingClientRect();
					if ("mousemove" === e.type || "touchmove" === e.type) {
						r.classList.add("active"), this.tooltipLabels.drawSeriesTexts({
							ttItems: i.ttItems,
							i: parseInt(s) - 1,
							shared: !1
						});
						var d = c - u.left - a.ttWidth / 2.2 + o,
							f = e.clientY - u.top - a.ttHeight / 2 - 15 + l;
						d < 0 ? d = 0 : d + a.ttWidth > n.globals.gridWidth && (d = c - u.left - a.ttWidth + o), f < 0 && (f = a
							.ttHeight + 20), r.style.left = d + n.globals.translateX + "px", r.style.top = f + "px"
					} else "mouseout" !== e.type && "touchend" !== e.type || r.classList.remove("active")
				}
			}, {
				key: "deactivateHoverFilter",
				value: function() {
					for (var t = this.w, e = new d.default(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"),
							a = 0; a < i.length; a++) e.pathMouseLeave(i[a])
				}
			}, {
				key: "handleMouseOut",
				value: function(t) {
					var e = this.w,
						i = this.getElXCrosshairs();
					if (t.tooltipEl.classList.remove("active"), this.deactivateHoverFilter(), "bubble" !== e.config.chart.type &&
						this.marker.resetPointsSize(), null !== i && i.classList.remove("active"), null !== this.ycrosshairs &&
						this.ycrosshairs.classList.remove("active"), this.blxaxisTooltip && this.xaxisTooltip.classList.remove(
							"active"), this.blyaxisTooltip) {
						null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(
							".apexcharts-yaxistooltip"));
						for (var a = 0; a < this.yaxisTTEls.length; a++) this.yaxisTTEls[a].classList.remove("active")
					}
				}
			}, {
				key: "getElMarkers",
				value: function() {
					return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")
				}
			}, {
				key: "getAllMarkers",
				value: function() {
					return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker")
				}
			}, {
				key: "hasMarkers",
				value: function() {
					return 0 < this.getElMarkers().length
				}
			}, {
				key: "getElBars",
				value: function() {
					return this.w.globals.dom.baseEl.querySelectorAll(
						".apexcharts-bar-series,  .apexcharts-candlestick-series")
				}
			}, {
				key: "hasBars",
				value: function() {
					return 0 < this.getElBars().length
				}
			}, {
				key: "create",
				value: function(t, e, i, a) {
					var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null,
						s = this.w,
						r = t;
					null === n && (n = s.config.tooltip.shared);
					var o = this.hasMarkers(),
						l = this.getElBars();
					if (n) {
						if (r.tooltipLabels.drawSeriesTexts({
								ttItems: a,
								i: e,
								j: i,
								shared: !this.showOnIntersect && s.config.tooltip.shared
							}), o && (0 < s.config.markers.size ? r.marker.enlargePoints(i) : r.tooltipPosition.moveDynamicPointsOnHover(
								i)), this.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(l), 0 < this.barSeriesHeight)) {
							var h = new d.default(this.ctx),
								c = s.globals.dom.Paper.select(".apexcharts-bar-area[j='" + i + "']");
							this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(i);
							for (var u = 0; u < c.length; u++) h.pathMouseEnter(c[u])
						}
					} else r.tooltipLabels.drawSeriesTexts({
						shared: !1,
						ttItems: a,
						i: e,
						j: i
					}), r.tooltipPosition.moveMarkers(e, i)
				}
			}]), i
		}();
		t.exports = p
	}, function(t, e, i) {
		"use strict";
		t.exports = function(t) {
			var e = "undefined" != typeof window && window.location;
			if (!e) throw new Error("fixUrls requires window.location");
			if (!t || "string" != typeof t) return t;
			var n = e.protocol + "//" + e.host,
				s = n + e.pathname.replace(/\/[^\/]*$/, "/");
			return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
				var i, a = e.trim().replace(/^"(.*)"$/, function(t, e) {
					return e
				}).replace(/^'(.*)'$/, function(t, e) {
					return e
				});
				return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? t : (i = 0 === a.indexOf("//") ? a : 0 ===
					a.indexOf("/") ? n + a : s + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
			})
		}
	}, function(t, e, i) {
		"use strict";
		var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
				typeof t
		};
		(function() {
			function a(t) {
				t.remember("_draggable", this), this.el = t
			}
			a.prototype.init = function(t, e) {
				var i = this;
				this.constraint = t, this.value = e, this.el.on("mousedown.drag", function(t) {
					i.start(t)
				}), this.el.on("touchstart.drag", function(t) {
					i.start(t)
				})
			}, a.prototype.transformPoint = function(t, e) {
				var i = (t = t || window.event).changedTouches && t.changedTouches[0] || t;
				return this.p.x = i.pageX - (e || 0), this.p.y = i.pageY, this.p.matrixTransform(this.m)
			}, a.prototype.getBBox = function() {
				var t = this.el.bbox();
				return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG
					.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t
			}, a.prototype.start = function(t) {
				if ("click" != t.type && "mousedown" != t.type && "mousemove" != t.type || 1 == (t.which || t.buttons)) {
					var e = this;
					this.el.fire("beforedrag", {
							event: t,
							handler: this
						}), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent
						.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
					var i, a = this.getBBox();
					if (this.el instanceof SVG.Text) switch (i = this.el.node.getComputedTextLength(), this.el.attr(
						"text-anchor")) {
						case "middle":
							i /= 2;
							break;
						case "start":
							i = 0
					}
					this.startPoints = {
						point: this.transformPoint(t, i),
						box: a,
						transform: this.el.transform()
					}, SVG.on(window, "mousemove.drag", function(t) {
						e.drag(t)
					}), SVG.on(window, "touchmove.drag", function(t) {
						e.drag(t)
					}), SVG.on(window, "mouseup.drag", function(t) {
						e.end(t)
					}), SVG.on(window, "touchend.drag", function(t) {
						e.end(t)
					}), this.el.fire("dragstart", {
						event: t,
						p: this.startPoints.point,
						m: this.m,
						handler: this
					}), t.preventDefault(), t.stopPropagation()
				}
			}, a.prototype.drag = function(t) {
				var e = this.getBBox(),
					i = this.transformPoint(t),
					a = this.startPoints.box.x + i.x - this.startPoints.point.x,
					n = this.startPoints.box.y + i.y - this.startPoints.point.y,
					s = this.constraint,
					r = i.x - this.startPoints.point.x,
					o = i.y - this.startPoints.point.y,
					l = new CustomEvent("dragmove", {
						detail: {
							event: t,
							p: i,
							m: this.m,
							handler: this
						},
						cancelable: !0
					});
				if (this.el.fire(l), l.defaultPrevented) return i;
				if ("function" == typeof s) {
					var h = s.call(this.el, a, n, this.m);
					"boolean" == typeof h && (h = {
							x: h,
							y: h
						}), !0 === h.x ? this.el.x(a) : !1 !== h.x && this.el.x(h.x), !0 === h.y ? this.el.y(n) : !1 !== h.y &&
						this.el.y(h.y)
				} else "object" == (void 0 === s ? "undefined" : c(s)) && (null != s.minX && a < s.minX ? a = s.minX : null !=
					s.maxX && a > s.maxX - e.width && (a = s.maxX - e.width), null != s.minY && n < s.minY ? n = s.minY : null !=
					s.maxY && n > s.maxY - e.height && (n = s.maxY - e.height), this.el instanceof SVG.G ? this.el.matrix(this.startPoints
						.transform).transform({
						x: r,
						y: o
					}, !0) : this.el.move(a, n));
				return i
			}, a.prototype.end = function(t) {
				var e = this.drag(t);
				this.el.fire("dragend", {
						event: t,
						p: e,
						m: this.m,
						handler: this
					}), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"),
					SVG.off(window, "touchend.drag")
			}, SVG.extend(SVG.Element, {
				draggable: function(t, e) {
					"function" != typeof t && "object" != (void 0 === t ? "undefined" : c(t)) || (e = t, t = !0);
					var i = this.remember("_draggable") || new a(this);
					return (t = void 0 === t || t) ? i.init(e || {}, t) : (this.off("mousedown.drag"), this.off(
						"touchstart.drag")), this
				}
			})
		}).call(void 0)
	}, function(t, e, i) {
		"use strict";
		(function() {
			SVG.Filter = SVG.invent({
				create: "filter",
				inherit: SVG.Parent,
				extend: {
					source: "SourceGraphic",
					sourceAlpha: "SourceAlpha",
					background: "BackgroundImage",
					backgroundAlpha: "BackgroundAlpha",
					fill: "FillPaint",
					stroke: "StrokePaint",
					autoSetIn: !0,
					put: function(t, e) {
						return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") ||
							t.attr("result", t), t
					},
					blend: function(t, e, i) {
						return this.put(new SVG.BlendEffect(t, e, i))
					},
					colorMatrix: function(t, e) {
						return this.put(new SVG.ColorMatrixEffect(t, e))
					},
					convolveMatrix: function(t) {
						return this.put(new SVG.ConvolveMatrixEffect(t))
					},
					componentTransfer: function(t) {
						return this.put(new SVG.ComponentTransferEffect(t))
					},
					composite: function(t, e, i) {
						return this.put(new SVG.CompositeEffect(t, e, i))
					},
					flood: function(t, e) {
						return this.put(new SVG.FloodEffect(t, e))
					},
					offset: function(t, e) {
						return this.put(new SVG.OffsetEffect(t, e))
					},
					image: function(t) {
						return this.put(new SVG.ImageEffect(t))
					},
					merge: function() {
						var t = [void 0];
						for (var e in arguments) t.push(arguments[e]);
						return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect, t)))
					},
					gaussianBlur: function(t, e) {
						return this.put(new SVG.GaussianBlurEffect(t, e))
					},
					morphology: function(t, e) {
						return this.put(new SVG.MorphologyEffect(t, e))
					},
					diffuseLighting: function(t, e, i) {
						return this.put(new SVG.DiffuseLightingEffect(t, e, i))
					},
					displacementMap: function(t, e, i, a, n) {
						return this.put(new SVG.DisplacementMapEffect(t, e, i, a, n))
					},
					specularLighting: function(t, e, i, a) {
						return this.put(new SVG.SpecularLightingEffect(t, e, i, a))
					},
					tile: function() {
						return this.put(new SVG.TileEffect)
					},
					turbulence: function(t, e, i, a, n) {
						return this.put(new SVG.TurbulenceEffect(t, e, i, a, n))
					},
					toString: function() {
						return "url(#" + this.attr("id") + ")"
					}
				}
			}), SVG.extend(SVG.Defs, {
				filter: function(t) {
					var e = this.put(new SVG.Filter);
					return "function" == typeof t && t.call(e, e), e
				}
			}), SVG.extend(SVG.Container, {
				filter: function(t) {
					return this.defs().filter(t)
				}
			}), SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
				filter: function(t) {
					return this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t), this.doc() && this.filterer.doc() !==
						this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer
				},
				unfilter: function(t) {
					return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null)
				}
			}), SVG.Effect = SVG.invent({
				create: function() {
					this.constructor.call(this)
				},
				inherit: SVG.Element,
				extend: { in: function(t) {
						return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) ||
							this.attr("in") : this.attr("in", t)
					},
					result: function(t) {
						return null == t ? this.attr("result") : this.attr("result", t)
					},
					toString: function() {
						return this.result()
					}
				}
			}), SVG.ParentEffect = SVG.invent({
				create: function() {
					this.constructor.call(this)
				},
				inherit: SVG.Parent,
				extend: { in: function(t) {
						return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) ||
							this.attr("in") : this.attr("in", t)
					},
					result: function(t) {
						return null == t ? this.attr("result") : this.attr("result", t)
					},
					toString: function() {
						return this.result()
					}
				}
			});
			var t = {
				blend: function(t, e) {
					return this.parent() && this.parent().blend(this, t, e)
				},
				colorMatrix: function(t, e) {
					return this.parent() && this.parent().colorMatrix(t, e).in(this)
				},
				convolveMatrix: function(t) {
					return this.parent() && this.parent().convolveMatrix(t).in(this)
				},
				componentTransfer: function(t) {
					return this.parent() && this.parent().componentTransfer(t).in(this)
				},
				composite: function(t, e) {
					return this.parent() && this.parent().composite(this, t, e)
				},
				flood: function(t, e) {
					return this.parent() && this.parent().flood(t, e)
				},
				offset: function(t, e) {
					return this.parent() && this.parent().offset(t, e).in(this)
				},
				image: function(t) {
					return this.parent() && this.parent().image(t)
				},
				merge: function() {
					return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments))
				},
				gaussianBlur: function(t, e) {
					return this.parent() && this.parent().gaussianBlur(t, e).in(this)
				},
				morphology: function(t, e) {
					return this.parent() && this.parent().morphology(t, e).in(this)
				},
				diffuseLighting: function(t, e, i) {
					return this.parent() && this.parent().diffuseLighting(t, e, i).in(this)
				},
				displacementMap: function(t, e, i, a) {
					return this.parent() && this.parent().displacementMap(this, t, e, i, a)
				},
				specularLighting: function(t, e, i, a) {
					return this.parent() && this.parent().specularLighting(t, e, i, a).in(this)
				},
				tile: function() {
					return this.parent() && this.parent().tile().in(this)
				},
				turbulence: function(t, e, i, a, n) {
					return this.parent() && this.parent().turbulence(t, e, i, a, n).in(this)
				}
			};
			SVG.extend(SVG.Effect, t), SVG.extend(SVG.ParentEffect, t), SVG.ChildEffect = SVG.invent({
				create: function() {
					this.constructor.call(this)
				},
				inherit: SVG.Element,
				extend: { in: function(t) {
						this.attr("in", t)
					}
				}
			});
			var e = {
					blend: function(t, e, i) {
						this.attr({ in: t,
							in2: e,
							mode: i || "normal"
						})
					},
					colorMatrix: function(t, e) {
						"matrix" == t && (e = n(e)), this.attr({
							type: t,
							values: void 0 === e ? null : e
						})
					},
					convolveMatrix: function(t) {
						t = n(t), this.attr({
							order: Math.sqrt(t.split(" ").length),
							kernelMatrix: t
						})
					},
					composite: function(t, e, i) {
						this.attr({ in: t,
							in2: e,
							operator: i
						})
					},
					flood: function(t, e) {
						this.attr("flood-color", t), null != e && this.attr("flood-opacity", e)
					},
					offset: function(t, e) {
						this.attr({
							dx: t,
							dy: e
						})
					},
					image: function(t) {
						this.attr("href", t, SVG.xlink)
					},
					displacementMap: function(t, e, i, a, n) {
						this.attr({ in: t,
							in2: e,
							scale: i,
							xChannelSelector: a,
							yChannelSelector: n
						})
					},
					gaussianBlur: function(t, e) {
						null != t || null != e ? this.attr("stdDeviation", function(t) {
							if (!Array.isArray(t)) return t;
							for (var e = 0, i = t.length, a = []; e < i; e++) a.push(t[e]);
							return a.join(" ")
						}(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0")
					},
					morphology: function(t, e) {
						this.attr({
							operator: t,
							radius: e
						})
					},
					tile: function() {},
					turbulence: function(t, e, i, a, n) {
						this.attr({
							numOctaves: e,
							seed: i,
							stitchTiles: a,
							baseFrequency: t,
							type: n
						})
					}
				},
				i = {
					merge: function() {
						var t;
						if (arguments[0] instanceof SVG.Set) {
							var e = this;
							arguments[0].each(function(t) {
								this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) &&
									e.put(new SVG.MergeNode(this))
							})
						} else {
							t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
							for (var i = 0; i < t.length; i++) t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(
								t[i]))
						}
					},
					componentTransfer: function(e) {
						if (this.rgb = new SVG.Set, ["r", "g", "b", "a"].forEach(function(t) {
								this[t] = new(SVG["Func" + t.toUpperCase()])("identity"), this.rgb.add(this[t]), this.node.appendChild(
									this[t].node)
							}.bind(this)), e)
							for (var t in e.rgb && (["r", "g", "b"].forEach(function(t) {
									this[t].attr(e.rgb)
								}.bind(this)), delete e.rgb), e) this[t].attr(e[t])
					},
					diffuseLighting: function(t, e, i) {
						this.attr({
							surfaceScale: t,
							diffuseConstant: e,
							kernelUnitLength: i
						})
					},
					specularLighting: function(t, e, i, a) {
						this.attr({
							surfaceScale: t,
							diffuseConstant: e,
							specularExponent: i,
							kernelUnitLength: a
						})
					}
				},
				a = {
					distantLight: function(t, e) {
						this.attr({
							azimuth: t,
							elevation: e
						})
					},
					pointLight: function(t, e, i) {
						this.attr({
							x: t,
							y: e,
							z: i
						})
					},
					spotLight: function(t, e, i, a, n, s) {
						this.attr({
							x: t,
							y: e,
							z: i,
							pointsAtX: a,
							pointsAtY: n,
							pointsAtZ: s
						})
					},
					mergeNode: function(t) {
						this.attr("in", t)
					}
				};

			function n(t) {
				return Array.isArray(t) && (t = new SVG.Array(t)), t.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(
					/\s+/g, " ")
			}

			function s() {
				var t = function() {};
				for (var e in "function" == typeof arguments[arguments.length - 1] && (t = arguments[arguments.length - 1],
						Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments)
					for (var i in arguments[e]) t(arguments[e][i], i, arguments[e])
			} ["r", "g", "b", "a"].forEach(function(t) {
				a["Func" + t.toUpperCase()] = function(t) {
					switch (this.attr("type", t), t) {
						case "table":
							this.attr("tableValues", arguments[1]);
							break;
						case "linear":
							this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
							break;
						case "gamma":
							this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[
								2])
					}
				}
			}), s(e, function(t, e) {
				var i = e.charAt(0).toUpperCase() + e.slice(1);
				SVG[i + "Effect"] = SVG.invent({
					create: function() {
						this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") +
							"Out")
					},
					inherit: SVG.Effect,
					extend: {}
				})
			}), s(i, function(t, e) {
				var i = e.charAt(0).toUpperCase() + e.slice(1);
				SVG[i + "Effect"] = SVG.invent({
					create: function() {
						this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") +
							"Out")
					},
					inherit: SVG.ParentEffect,
					extend: {}
				})
			}), s(a, function(t, e) {
				var i = e.charAt(0).toUpperCase() + e.slice(1);
				SVG[i] = SVG.invent({
					create: function() {
						this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments)
					},
					inherit: SVG.ChildEffect,
					extend: {}
				})
			}), SVG.extend(SVG.MergeEffect, { in: function(t) {
					return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this
				}
			}), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
				in2: function(t) {
					return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) ||
						this.attr("in2") : this.attr("in2", t)
				}
			}), SVG.filter = {
				sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0]
			}
		}).call(void 0)
	}, function(t, e, i) {
		"use strict";
		var a, n, s, w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
				typeof t
		};
		n = "undefined" != typeof window ? window : void 0, s = function(r, n) {
			var u = (void 0 !== this ? this : r).SVG = function(t) {
				if (u.supported) return t = new u.Doc(t), u.parser.draw || u.prepare(), t
			};
			if (u.ns = "http://www.w3.org/2000/svg", u.xmlns = "http://www.w3.org/2000/xmlns/", u.xlink =
				"http://www.w3.org/1999/xlink", u.svgjs = "http://svgjs.com/svgjs", u.supported = !0, !u.supported) return !1;
			u.did = 1e3, u.eid = function(t) {
				return "Svgjs" + o(t) + u.did++
			}, u.create = function(t) {
				var e = n.createElementNS(this.ns, t);
				return e.setAttribute("id", this.eid(t)), e
			}, u.extend = function() {
				var t, e, i, a;
				for (e = (t = [].slice.call(arguments)).pop(), a = t.length - 1; 0 <= a; a--)
					if (t[a])
						for (i in e) t[a].prototype[i] = e[i];
				u.Set && u.Set.inherit && u.Set.inherit()
			}, u.invent = function(t) {
				var e = "function" == typeof t.create ? t.create : function() {
					this.constructor.call(this, u.create(t.create))
				};
				return t.inherit && (e.prototype = new t.inherit), t.extend && u.extend(e, t.extend), t.construct && u.extend(
					t.parent || u.Container, t.construct), e
			}, u.adopt = function(t) {
				return t ? t.instance ? t.instance : ((e = "svg" == t.nodeName ? t.parentNode instanceof r.SVGElement ? new u
						.Nested : new u.Doc : "linearGradient" == t.nodeName ? new u.Gradient("linear") : "radialGradient" == t.nodeName ?
						new u.Gradient("radial") : u[o(t.nodeName)] ? new(u[o(t.nodeName)]) : new u.Element(t)).type = t.nodeName,
					((e.node = t).instance = e) instanceof u.Doc && e.namespace().defs(), e.setData(JSON.parse(t.getAttribute(
						"svgjs:data")) || {}), e) : null;
				var e
			}, u.prepare = function() {
				var t = n.getElementsByTagName("body")[0],
					e = (t ? new u.Doc(t) : u.adopt(n.documentElement).nested()).size(2, 0);
				u.parser = {
					body: t || n.documentElement,
					draw: e.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,
					poly: e.polyline().node,
					path: e.path().node,
					native: u.create("svg")
				}
			}, u.parser = {
				native: u.create("svg")
			}, n.addEventListener("DOMContentLoaded", function() {
				u.parser.draw || u.prepare()
			}, !1), u.regex = {
				numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
				hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
				rgb: /rgb\((\d+),(\d+),(\d+)\)/,
				reference: /#([a-z0-9\-_]+)/i,
				transforms: /\)\s*,?\s*/,
				whitespace: /\s/g,
				isHex: /^#[a-f0-9]{3,6}$/i,
				isRgb: /^rgb\(/,
				isCss: /[^:]+:[^;]+;?/,
				isBlank: /^(\s+)?$/,
				isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
				isPercent: /^-?[\d\.]+%$/,
				isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
				delimiter: /[\s,]+/,
				hyphen: /([^e])\-/gi,
				pathLetters: /[MLHVCSQTAZ]/gi,
				isPathLetter: /[MLHVCSQTAZ]/i,
				numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
				dots: /\./g
			}, u.utils = {
				map: function(t, e) {
					var i, a = t.length,
						n = [];
					for (i = 0; i < a; i++) n.push(e(t[i]));
					return n
				},
				filter: function(t, e) {
					var i, a = t.length,
						n = [];
					for (i = 0; i < a; i++) e(t[i]) && n.push(t[i]);
					return n
				},
				radians: function(t) {
					return t % 360 * Math.PI / 180
				},
				degrees: function(t) {
					return 180 * t / Math.PI % 360
				},
				filterSVGElements: function(t) {
					return this.filter(t, function(t) {
						return t instanceof r.SVGElement
					})
				}
			}, u.defaults = {
				attrs: {
					"fill-opacity": 1,
					"stroke-opacity": 1,
					"stroke-width": 0,
					"stroke-linejoin": "miter",
					"stroke-linecap": "butt",
					fill: "#000000",
					stroke: "#000000",
					opacity: 1,
					x: 0,
					y: 0,
					cx: 0,
					cy: 0,
					width: 0,
					height: 0,
					r: 0,
					rx: 0,
					ry: 0,
					offset: 0,
					"stop-opacity": 1,
					"stop-color": "#000000",
					"font-size": 16,
					"font-family": "Helvetica, Arial, sans-serif",
					"text-anchor": "start"
				}
			}, u.Color = function(t) {
				var e, i;
				(this.r = 0, this.g = 0, this.b = 0, t) && ("string" == typeof t ? u.regex.isRgb.test(t) ? (e = u.regex.rgb.exec(
					t.replace(u.regex.whitespace, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[
					3])) : u.regex.isHex.test(t) && (e = u.regex.hex.exec(4 == (i = t).length ? ["#", i.substring(1, 2), i.substring(
						1, 2), i.substring(2, 3), i.substring(2, 3), i.substring(3, 4), i.substring(3, 4)].join("") : i), this.r =
					parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" === (void 0 === t ?
					"undefined" : w(t)) && (this.r = t.r, this.g = t.g, this.b = t.b))
			}, u.extend(u.Color, {
				toString: function() {
					return this.toHex()
				},
				toHex: function() {
					return "#" + c(this.r) + c(this.g) + c(this.b)
				},
				toRgb: function() {
					return "rgb(" + [this.r, this.g, this.b].join() + ")"
				},
				brightness: function() {
					return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11
				},
				morph: function(t) {
					return this.destination = new u.Color(t), this
				},
				at: function(t) {
					return this.destination ? (t = t < 0 ? 0 : 1 < t ? 1 : t, new u.Color({
						r: ~~(this.r + (this.destination.r - this.r) * t),
						g: ~~(this.g + (this.destination.g - this.g) * t),
						b: ~~(this.b + (this.destination.b - this.b) * t)
					})) : this
				}
			}), u.Color.test = function(t) {
				return t += "", u.regex.isHex.test(t) || u.regex.isRgb.test(t)
			}, u.Color.isRgb = function(t) {
				return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b
			}, u.Color.isColor = function(t) {
				return u.Color.isRgb(t) || u.Color.test(t)
			}, u.Array = function(t, e) {
				0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), this.value = this.parse(t)
			}, u.extend(u.Array, {
				morph: function(t) {
					if (this.destination = this.parse(t), this.value.length != this.destination.length) {
						for (var e = this.value[this.value.length - 1], i = this.destination[this.destination.length - 1]; this.value
							.length > this.destination.length;) this.destination.push(i);
						for (; this.value.length < this.destination.length;) this.value.push(e)
					}
					return this
				},
				settle: function() {
					for (var t = 0, e = this.value.length, i = []; t < e; t++) - 1 == i.indexOf(this.value[t]) && i.push(this.value[
						t]);
					return this.value = i
				},
				at: function(t) {
					if (!this.destination) return this;
					for (var e = 0, i = this.value.length, a = []; e < i; e++) a.push(this.value[e] + (this.destination[e] -
						this.value[e]) * t);
					return new u.Array(a)
				},
				toString: function() {
					return this.value.join(" ")
				},
				valueOf: function() {
					return this.value
				},
				parse: function(t) {
					return t = t.valueOf(), Array.isArray(t) ? t : this.split(t)
				},
				split: function(t) {
					return t.trim().split(u.regex.delimiter).map(parseFloat)
				},
				reverse: function() {
					return this.value.reverse(), this
				},
				clone: function() {
					var t = new this.constructor;
					return t.value = function t(e) {
						var i = e.slice(0);
						for (var a = i.length; a--;) Array.isArray(i[a]) && (i[a] = t(i[a]));
						return i
					}(this.value), t
				}
			}), u.PointArray = function(t, e) {
				u.Array.call(this, t, e || [
					[0, 0]
				])
			}, u.PointArray.prototype = new u.Array, u.PointArray.prototype.constructor = u.PointArray, u.extend(u.PointArray, {
				toString: function() {
					for (var t = 0, e = this.value.length, i = []; t < e; t++) i.push(this.value[t].join(","));
					return i.join(" ")
				},
				toLine: function() {
					return {
						x1: this.value[0][0],
						y1: this.value[0][1],
						x2: this.value[1][0],
						y2: this.value[1][1]
					}
				},
				at: function(t) {
					if (!this.destination) return this;
					for (var e = 0, i = this.value.length, a = []; e < i; e++) a.push([this.value[e][0] + (this.destination[e]
						[0] - this.value[e][0]) * t, this.value[e][1] + (this.destination[e][1] - this.value[e][1]) * t]);
					return new u.PointArray(a)
				},
				parse: function(t) {
					var e = [];
					if (t = t.valueOf(), Array.isArray(t)) {
						if (Array.isArray(t[0])) return t.map(function(t) {
							return t.slice()
						});
						if (null != t[0].x) return t.map(function(t) {
							return [t.x, t.y]
						})
					} else t = t.trim().split(u.regex.delimiter).map(parseFloat);
					t.length % 2 != 0 && t.pop();
					for (var i = 0, a = t.length; i < a; i += 2) e.push([t[i], t[i + 1]]);
					return e
				},
				move: function(t, e) {
					var i = this.bbox();
					if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e))
						for (var a = this.value.length - 1; 0 <= a; a--) this.value[a] = [this.value[a][0] + t, this.value[a][1] +
							e
						];
					return this
				},
				size: function(t, e) {
					var i, a = this.bbox();
					for (i = this.value.length - 1; 0 <= i; i--) a.width && (this.value[i][0] = (this.value[i][0] - a.x) * t /
						a.width + a.x), a.height && (this.value[i][1] = (this.value[i][1] - a.y) * e / a.height + a.y);
					return this
				},
				bbox: function() {
					return u.parser.poly.setAttribute("points", this.toString()), u.parser.poly.getBBox()
				}
			});
			for (var l = {
					M: function(t, e, i) {
						return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y]
					},
					L: function(t, e) {
						return e.x = t[0], e.y = t[1], ["L", t[0], t[1]]
					},
					H: function(t, e) {
						return e.x = t[0], ["H", t[0]]
					},
					V: function(t, e) {
						return e.y = t[0], ["V", t[0]]
					},
					C: function(t, e) {
						return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
					},
					S: function(t, e) {
						return e.x = t[2], e.y = t[3], ["S", t[0], t[1], t[2], t[3]]
					},
					Q: function(t, e) {
						return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]]
					},
					T: function(t, e) {
						return e.x = t[0], e.y = t[1], ["T", t[0], t[1]]
					},
					Z: function(t, e, i) {
						return e.x = i.x, e.y = i.y, ["Z"]
					},
					A: function(t, e) {
						return e.x = t[5], e.y = t[6], ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]]
					}
				}, t = "mlhvqtcsaz".split(""), e = 0, i = t.length; e < i; ++e) l[t[e]] = function(s) {
				return function(t, e, i) {
					if ("H" == s) t[0] = t[0] + e.x;
					else if ("V" == s) t[0] = t[0] + e.y;
					else if ("A" == s) t[5] = t[5] + e.x, t[6] = t[6] + e.y;
					else
						for (var a = 0, n = t.length; a < n; ++a) t[a] = t[a] + (a % 2 ? e.y : e.x);
					return l[s](t, e, i)
				}
			}(t[e].toUpperCase());
			u.PathArray = function(t, e) {
				u.Array.call(this, t, e || [
					["M", 0, 0]
				])
			}, u.PathArray.prototype = new u.Array, u.PathArray.prototype.constructor = u.PathArray, u.extend(u.PathArray, {
				toString: function() {
					return function(t) {
						for (var e = 0, i = t.length, a = ""; e < i; e++) a += t[e][0], null != t[e][1] && (a += t[e][1], null !=
							t[e][2] && (a += " ", a += t[e][2], null != t[e][3] && (a += " ", a += t[e][3], a += " ", a += t[e][4],
								null != t[e][5] && (a += " ", a += t[e][5], a += " ", a += t[e][6], null != t[e][7] && (a += " ", a +=
									t[e][7])))));
						return a + " "
					}(this.value)
				},
				move: function(t, e) {
					var i = this.bbox();
					if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e))
						for (var a, n = this.value.length - 1; 0 <= n; n--) "M" == (a = this.value[n][0]) || "L" == a || "T" == a ?
							(this.value[n][1] += t, this.value[n][2] += e) : "H" == a ? this.value[n][1] += t : "V" == a ? this.value[
								n][1] += e : "C" == a || "S" == a || "Q" == a ? (this.value[n][1] += t, this.value[n][2] += e, this.value[
								n][3] += t, this.value[n][4] += e, "C" == a && (this.value[n][5] += t, this.value[n][6] += e)) : "A" ==
							a && (this.value[n][6] += t, this.value[n][7] += e);
					return this
				},
				size: function(t, e) {
					var i, a, n = this.bbox();
					for (i = this.value.length - 1; 0 <= i; i--) "M" == (a = this.value[i][0]) || "L" == a || "T" == a ? (this
							.value[i][1] = (this.value[i][1] - n.x) * t / n.width + n.x, this.value[i][2] = (this.value[i][2] - n.y) *
							e / n.height + n.y) : "H" == a ? this.value[i][1] = (this.value[i][1] - n.x) * t / n.width + n.x : "V" ==
						a ? this.value[i][1] = (this.value[i][1] - n.y) * e / n.height + n.y : "C" == a || "S" == a || "Q" == a ?
						(this.value[i][1] = (this.value[i][1] - n.x) * t / n.width + n.x, this.value[i][2] = (this.value[i][2] -
							n.y) * e / n.height + n.y, this.value[i][3] = (this.value[i][3] - n.x) * t / n.width + n.x, this.value[
							i][4] = (this.value[i][4] - n.y) * e / n.height + n.y, "C" == a && (this.value[i][5] = (this.value[i][5] -
							n.x) * t / n.width + n.x, this.value[i][6] = (this.value[i][6] - n.y) * e / n.height + n.y)) : "A" == a &&
						(this.value[i][1] = this.value[i][1] * t / n.width, this.value[i][2] = this.value[i][2] * e / n.height,
							this.value[i][6] = (this.value[i][6] - n.x) * t / n.width + n.x, this.value[i][7] = (this.value[i][7] -
								n.y) * e / n.height + n.y);
					return this
				},
				equalCommands: function(t) {
					var e, i, a;
					for (t = new u.PathArray(t), a = this.value.length === t.value.length, e = 0, i = this.value.length; a &&
						e < i; e++) a = this.value[e][0] === t.value[e][0];
					return a
				},
				morph: function(t) {
					return t = new u.PathArray(t), this.equalCommands(t) ? this.destination = t : this.destination = null,
						this
				},
				at: function(t) {
					if (!this.destination) return this;
					var e, i, a, n, s = this.value,
						r = this.destination.value,
						o = [],
						l = new u.PathArray;
					for (e = 0, i = s.length; e < i; e++) {
						for (o[e] = [s[e][0]], a = 1, n = s[e].length; a < n; a++) o[e][a] = s[e][a] + (r[e][a] - s[e][a]) * t;
						"A" === o[e][0] && (o[e][4] = +(0 != o[e][4]), o[e][5] = +(0 != o[e][5]))
					}
					return l.value = o, l
				},
				parse: function(t) {
					if (t instanceof u.PathArray) return t.valueOf();
					var e, i = {
						M: 2,
						L: 2,
						H: 1,
						V: 1,
						C: 6,
						S: 4,
						Q: 4,
						T: 2,
						A: 7,
						Z: 0
					};
					t = "string" == typeof t ? t.replace(u.regex.numbersWithDots, h).replace(u.regex.pathLetters, " $& ").replace(
						u.regex.hyphen, "$1 -").trim().split(u.regex.delimiter) : t.reduce(function(t, e) {
						return [].concat.call(t, e)
					}, []);
					for (var a = [], n = new u.Point, s = new u.Point, r = 0, o = t.length; u.regex.isPathLetter.test(t[r]) ?
						(e = t[r], ++r) : "M" == e ? e = "L" : "m" == e && (e = "l"), a.push(l[e].call(null, t.slice(r, r += i[e.toUpperCase()])
							.map(parseFloat), n, s)), r < o;);
					return a
				},
				bbox: function() {
					return u.parser.path.setAttribute("d", this.toString()), u.parser.path.getBBox()
				}
			}), u.Number = u.invent({
				create: function(t, e) {
					this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t :
						t < 0 ? -34e37 : 34e37 : "string" == typeof t ? (e = t.match(u.regex.numberAndUnit)) && (this.value =
							parseFloat(e[1]), "%" == e[5] ? this.value /= 100 : "s" == e[5] && (this.value *= 1e3), this.unit = e[5]
						) : t instanceof u.Number && (this.value = t.valueOf(), this.unit = t.unit)
				},
				extend: {
					toString: function() {
						return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) +
							this.unit
					},
					toJSON: function() {
						return this.toString()
					},
					valueOf: function() {
						return this.value
					},
					plus: function(t) {
						return t = new u.Number(t), new u.Number(this + t, this.unit || t.unit)
					},
					minus: function(t) {
						return t = new u.Number(t), new u.Number(this - t, this.unit || t.unit)
					},
					times: function(t) {
						return t = new u.Number(t), new u.Number(this * t, this.unit || t.unit)
					},
					divide: function(t) {
						return t = new u.Number(t), new u.Number(this / t, this.unit || t.unit)
					},
					to: function(t) {
						var e = new u.Number(this);
						return "string" == typeof t && (e.unit = t), e
					},
					morph: function(t) {
						return this.destination = new u.Number(t), t.relative && (this.destination.value += this.value), this
					},
					at: function(t) {
						return this.destination ? new u.Number(this.destination).minus(this).times(t).plus(this) : this
					}
				}
			}), u.Element = u.invent({
				create: function(t) {
					this._stroke = u.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t) && (this.type =
						t.nodeName, (this.node.instance = this)._stroke = t.getAttribute("stroke") || this._stroke)
				},
				extend: {
					x: function(t) {
						return this.attr("x", t)
					},
					y: function(t) {
						return this.attr("y", t)
					},
					cx: function(t) {
						return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
					},
					cy: function(t) {
						return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
					},
					move: function(t, e) {
						return this.x(t).y(e)
					},
					center: function(t, e) {
						return this.cx(t).cy(e)
					},
					width: function(t) {
						return this.attr("width", t)
					},
					height: function(t) {
						return this.attr("height", t)
					},
					size: function(t, e) {
						var i = d(this, t, e);
						return this.width(new u.Number(i.width)).height(new u.Number(i.height))
					},
					clone: function(t) {
						this.writeDataToDom();
						var e = x(this.node.cloneNode(!0));
						return t ? t.add(e) : this.after(e), e
					},
					remove: function() {
						return this.parent() && this.parent().removeElement(this), this
					},
					replace: function(t) {
						return this.after(t).remove(), t
					},
					addTo: function(t) {
						return t.put(this)
					},
					putIn: function(t) {
						return t.add(this)
					},
					id: function(t) {
						return this.attr("id", t)
					},
					inside: function(t, e) {
						var i = this.bbox();
						return t > i.x && e > i.y && t < i.x + i.width && e < i.y + i.height
					},
					show: function() {
						return this.style("display", "")
					},
					hide: function() {
						return this.style("display", "none")
					},
					visible: function() {
						return "none" != this.style("display")
					},
					toString: function() {
						return this.attr("id")
					},
					classes: function() {
						var t = this.attr("class");
						return null == t ? [] : t.trim().split(u.regex.delimiter)
					},
					hasClass: function(t) {
						return -1 != this.classes().indexOf(t)
					},
					addClass: function(t) {
						if (!this.hasClass(t)) {
							var e = this.classes();
							e.push(t), this.attr("class", e.join(" "))
						}
						return this
					},
					removeClass: function(e) {
						return this.hasClass(e) && this.attr("class", this.classes().filter(function(t) {
							return t != e
						}).join(" ")), this
					},
					toggleClass: function(t) {
						return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
					},
					reference: function(t) {
						return u.get(this.attr(t))
					},
					parent: function(t) {
						var e = this;
						if (!e.node.parentNode) return null;
						if (e = u.adopt(e.node.parentNode), !t) return e;
						for (; e && e.node instanceof r.SVGElement;) {
							if ("string" == typeof t ? e.matches(t) : e instanceof t) return e;
							if (!e.node.parentNode || "#document" == e.node.parentNode.nodeName) return null;
							e = u.adopt(e.node.parentNode)
						}
					},
					doc: function() {
						return this instanceof u.Doc ? this : this.parent(u.Doc)
					},
					parents: function(t) {
						var e = [],
							i = this;
						do {
							if (!(i = i.parent(t)) || !i.node) break;
							e.push(i)
						} while (i.parent);
						return e
					},
					matches: function(t) {
						return e = this.node, i = t, (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector ||
							e.webkitMatchesSelector || e.oMatchesSelector).call(e, i);
						var e, i
					},
					native: function() {
						return this.node
					},
					svg: function(t) {
						var e = n.createElement("svg");
						if (!(t && this instanceof u.Parent)) return e.appendChild(t = n.createElement("svg")), this.writeDataToDom(),
							t.appendChild(this.node.cloneNode(!0)), e.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
						e.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
						for (var i = 0, a = e.firstChild.childNodes.length; i < a; i++) this.node.appendChild(e.firstChild.firstChild);
						return this
					},
					writeDataToDom: function() {
						(this.each || this.lines) && (this.each ? this : this.lines()).each(function() {
							this.writeDataToDom()
						});
						return this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute(
							"svgjs:data", JSON.stringify(this.dom)), this
					},
					setData: function(t) {
						return this.dom = t, this
					},
					is: function(t) {
						return this instanceof t
					}
				}
			}), u.easing = {
				"-": function(t) {
					return t
				},
				"<>": function(t) {
					return -Math.cos(t * Math.PI) / 2 + .5
				},
				">": function(t) {
					return Math.sin(t * Math.PI / 2)
				},
				"<": function(t) {
					return 1 - Math.cos(t * Math.PI / 2)
				}
			}, u.morph = function(i) {
				return function(t, e) {
					return new u.MorphObj(t, e).at(i)
				}
			}, u.Situation = u.invent({
				create: function(t) {
					this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new u.Number(t.duration).valueOf(),
						this.delay = new u.Number(t.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start +
						this.duration, this.ease = t.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {},
						this.styles = {}, this.transforms = [], this.once = {}
				}
			}), u.FX = u.invent({
				create: function(t) {
					this._target = t, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos =
						0, this.pos = 0, this.absPos = 0, this._speed = 1
				},
				extend: {
					animate: function(t, e, i) {
						"object" == (void 0 === t ? "undefined" : w(t)) && (e = t.ease, i = t.delay, t = t.duration);
						var a = new u.Situation({
							duration: t || 1e3,
							delay: i || 0,
							ease: u.easing[e || "-"] || e
						});
						return this.queue(a), this
					},
					delay: function(t) {
						var e = new u.Situation({
							duration: t,
							delay: 0,
							ease: u.easing["-"]
						});
						return this.queue(e)
					},
					target: function(t) {
						return t && t instanceof u.Element ? (this._target = t, this) : this._target
					},
					timeToAbsPos: function(t) {
						return (t - this.situation.start) / (this.situation.duration / this._speed)
					},
					absPosToTime: function(t) {
						return this.situation.duration / this._speed * t + this.situation.start
					},
					startAnimFrame: function() {
						this.stopAnimFrame(), this.animationFrame = r.requestAnimationFrame(function() {
							this.step()
						}.bind(this))
					},
					stopAnimFrame: function() {
						r.cancelAnimationFrame(this.animationFrame)
					},
					start: function() {
						return !this.active && this.situation && (this.active = !0, this.startCurrent()), this
					},
					startCurrent: function() {
						return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish =
							this.situation.start + this.situation.duration / this._speed, this.initAnimations().step()
					},
					queue: function(t) {
						return ("function" == typeof t || t instanceof u.Situation) && this.situations.push(t), this.situation ||
							(this.situation = this.situations.shift()), this
					},
					dequeue: function() {
						return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof u
							.Situation ? this.start() : this.situation.call(this)), this
					},
					initAnimations: function() {
						var t, e, i, a = this.situation;
						if (a.init) return this;
						for (t in a.animations)
							for (i = this.target()[t](), Array.isArray(i) || (i = [i]), Array.isArray(a.animations[t]) || (a.animations[
									t] = [a.animations[t]]), e = i.length; e--;) a.animations[t][e] instanceof u.Number && (i[e] = new u.Number(
								i[e])), a.animations[t][e] = i[e].morph(a.animations[t][e]);
						for (t in a.attrs) a.attrs[t] = new u.MorphObj(this.target().attr(t), a.attrs[t]);
						for (t in a.styles) a.styles[t] = new u.MorphObj(this.target().style(t), a.styles[t]);
						return a.initialTransformation = this.target().matrixify(), a.init = !0, this
					},
					clearQueue: function() {
						return this.situations = [], this
					},
					clearCurrent: function() {
						return this.situation = null, this
					},
					stop: function(t, e) {
						var i = this.active;
						return this.active = !1, e && this.clearQueue(), t && this.situation && (!i && this.startCurrent(), this.atEnd()),
							this.stopAnimFrame(), this.clearCurrent()
					},
					reset: function() {
						if (this.situation) {
							var t = this.situation;
							this.stop(), this.situation = t, this.atStart()
						}
						return this
					},
					finish: function() {
						for (this.stop(!0, !1); this.dequeue().situation && this.stop(!0, !1););
						return this.clearQueue().clearCurrent(), this
					},
					atStart: function() {
						return this.at(0, !0)
					},
					atEnd: function() {
						return !0 === this.situation.loops && (this.situation.loops = this.situation.loop + 1), "number" ==
							typeof this.situation.loops ? this.at(this.situation.loops, !0) : this.at(1, !0)
					},
					at: function(t, e) {
						var i = this.situation.duration / this._speed;
						return this.absPos = t, e || (this.situation.reversed && (this.absPos = 1 - this.absPos), this.absPos +=
								this.situation.loop), this.situation.start = +new Date - this.absPos * i, this.situation.finish = this.situation
							.start + i, this.step(!0)
					},
					speed: function(t) {
						return 0 === t ? this.pause() : t ? (this._speed = t, this.at(this.absPos, !0)) : this._speed
					},
					loop: function(t, e) {
						var i = this.last();
						return i.loops = null == t || t, i.loop = 0, e && (i.reversing = !0), this
					},
					pause: function() {
						return this.paused = !0, this.stopAnimFrame(), this
					},
					play: function() {
						return this.paused ? (this.paused = !1, this.at(this.absPos, !0)) : this
					},
					reverse: function(t) {
						var e = this.last();
						return e.reversed = void 0 === t ? !e.reversed : t, this
					},
					progress: function(t) {
						return t ? this.situation.ease(this.pos) : this.pos
					},
					after: function(i) {
						var a = this.last();
						return this.target().on("finished.fx", function t(e) {
							e.detail.situation == a && (i.call(this, a), this.off("finished.fx", t))
						}), this._callStart()
					},
					during: function(e) {
						var i = this.last(),
							t = function(t) {
								t.detail.situation == i && e.call(this, t.detail.pos, u.morph(t.detail.pos), t.detail.eased, i)
							};
						return this.target().off("during.fx", t).on("during.fx", t), this.after(function() {
							this.off("during.fx", t)
						}), this._callStart()
					},
					afterAll: function(i) {
						var t = function t(e) {
							i.call(this), this.off("allfinished.fx", t)
						};
						return this.target().off("allfinished.fx", t).on("allfinished.fx", t), this._callStart()
					},
					duringAll: function(e) {
						var t = function(t) {
							e.call(this, t.detail.pos, u.morph(t.detail.pos), t.detail.eased, t.detail.situation)
						};
						return this.target().off("during.fx", t).on("during.fx", t), this.afterAll(function() {
							this.off("during.fx", t)
						}), this._callStart()
					},
					last: function() {
						return this.situations.length ? this.situations[this.situations.length - 1] : this.situation
					},
					add: function(t, e, i) {
						return this.last()[i || "animations"][t] = e, this._callStart()
					},
					step: function(t) {
						var e, i, a;
						(t || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops) ? (e = Math.max(this.absPos,
							0), i = Math.floor(e), !0 === this.situation.loops || i < this.situation.loops ? (this.pos = e - i, a =
							this.situation.loop, this.situation.loop = i) : (this.absPos = this.situation.loops, this.pos = 1, a =
							this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this
							.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - a) % 2))) : (this.absPos =
							Math.min(this.absPos, 1), this.pos = this.absPos);
						this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
						var n = this.situation.ease(this.pos);
						for (var s in this.situation.once) s > this.lastPos && s <= n && (this.situation.once[s].call(this.target(),
							this.pos, n), delete this.situation.once[s]);
						return this.active && this.target().fire("during", {
							pos: this.pos,
							eased: n,
							fx: this,
							situation: this.situation
						}), this.situation && (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed &&
							0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", {
								fx: this,
								situation: this.situation
							}), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target()
								.off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused &&
							this.active && this.startAnimFrame(), this.lastPos = n), this
					},
					eachAt: function() {
						var t, e, i, a = this,
							n = this.target(),
							s = this.situation;
						for (t in s.animations) i = [].concat(s.animations[t]).map(function(t) {
							return "string" != typeof t && t.at ? t.at(s.ease(a.pos), a.pos) : t
						}), n[t].apply(n, i);
						for (t in s.attrs) i = [t].concat(s.attrs[t]).map(function(t) {
							return "string" != typeof t && t.at ? t.at(s.ease(a.pos), a.pos) : t
						}), n.attr.apply(n, i);
						for (t in s.styles) i = [t].concat(s.styles[t]).map(function(t) {
							return "string" != typeof t && t.at ? t.at(s.ease(a.pos), a.pos) : t
						}), n.style.apply(n, i);
						if (s.transforms.length) {
							for (i = s.initialTransformation, t = 0, e = s.transforms.length; t < e; t++) {
								var r = s.transforms[t];
								r instanceof u.Matrix ? i = r.relative ? i.multiply((new u.Matrix).morph(r).at(s.ease(this.pos))) : i.morph(
									r).at(s.ease(this.pos)) : (r.relative || r.undo(i.extract()), i = i.multiply(r.at(s.ease(this.pos))))
							}
							n.matrix(i)
						}
						return this
					},
					once: function(t, e, i) {
						var a = this.last();
						return i || (t = a.ease(t)), a.once[t] = e, this
					},
					_callStart: function() {
						return setTimeout(function() {
							this.start()
						}.bind(this), 0), this
					}
				},
				parent: u.Element,
				construct: {
					animate: function(t, e, i) {
						return (this.fx || (this.fx = new u.FX(this))).animate(t, e, i)
					},
					delay: function(t) {
						return (this.fx || (this.fx = new u.FX(this))).delay(t)
					},
					stop: function(t, e) {
						return this.fx && this.fx.stop(t, e), this
					},
					finish: function() {
						return this.fx && this.fx.finish(), this
					},
					pause: function() {
						return this.fx && this.fx.pause(), this
					},
					play: function() {
						return this.fx && this.fx.play(), this
					},
					speed: function(t) {
						if (this.fx) {
							if (null == t) return this.fx.speed();
							this.fx.speed(t)
						}
						return this
					}
				}
			}), u.MorphObj = u.invent({
				create: function(t, e) {
					return u.Color.isColor(e) ? new u.Color(t).morph(e) : u.regex.delimiter.test(t) ? u.regex.pathLetters.test(
						t) ? new u.PathArray(t).morph(e) : new u.Array(t).morph(e) : u.regex.numberAndUnit.test(e) ? new u.Number(
						t).morph(e) : (this.value = t, void(this.destination = e))
				},
				extend: {
					at: function(t, e) {
						return e < 1 ? this.value : this.destination
					},
					valueOf: function() {
						return this.value
					}
				}
			}), u.extend(u.FX, {
				attr: function(t, e, i) {
					if ("object" == (void 0 === t ? "undefined" : w(t)))
						for (var a in t) this.attr(a, t[a]);
					else this.add(t, e, "attrs");
					return this
				},
				style: function(t, e) {
					if ("object" == (void 0 === t ? "undefined" : w(t)))
						for (var i in t) this.style(i, t[i]);
					else this.add(t, e, "styles");
					return this
				},
				x: function(t, e) {
					if (this.target() instanceof u.G) return this.transform({
						x: t
					}, e), this;
					var i = new u.Number(t);
					return i.relative = e, this.add("x", i)
				},
				y: function(t, e) {
					if (this.target() instanceof u.G) return this.transform({
						y: t
					}, e), this;
					var i = new u.Number(t);
					return i.relative = e, this.add("y", i)
				},
				cx: function(t) {
					return this.add("cx", new u.Number(t))
				},
				cy: function(t) {
					return this.add("cy", new u.Number(t))
				},
				move: function(t, e) {
					return this.x(t).y(e)
				},
				center: function(t, e) {
					return this.cx(t).cy(e)
				},
				size: function(t, e) {
					var i;
					this.target() instanceof u.Text ? this.attr("font-size", t) : (t && e || (i = this.target().bbox()), t ||
						(t = i.width / i.height * e), e || (e = i.height / i.width * t), this.add("width", new u.Number(t)).add(
							"height", new u.Number(e)));
					return this
				},
				width: function(t) {
					return this.add("width", new u.Number(t))
				},
				height: function(t) {
					return this.add("height", new u.Number(t))
				},
				plot: function(t, e, i, a) {
					return 4 == arguments.length ? this.plot([t, e, i, a]) : this.add("plot", new(this.target().morphArray)(t))
				},
				leading: function(t) {
					return this.target().leading ? this.add("leading", new u.Number(t)) : this
				},
				viewbox: function(t, e, i, a) {
					return this.target() instanceof u.Container && this.add("viewbox", new u.ViewBox(t, e, i, a)), this
				},
				update: function(t) {
					if (this.target() instanceof u.Stop) {
						if ("number" == typeof t || t instanceof u.Number) return this.update({
							offset: t,
							color: arguments[1],
							opacity: arguments[2]
						});
						null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color),
							null != t.offset && this.attr("offset", t.offset)
					}
					return this
				}
			}), u.Box = u.invent({
				create: function(t, e, i, a) {
					if (!("object" != (void 0 === t ? "undefined" : w(t)) || t instanceof u.Element)) return u.Box.call(this,
						null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height);
					4 == arguments.length && (this.x = t, this.y = e, this.width = i, this.height = a), v(this)
				},
				extend: {
					merge: function(t) {
						var e = new this.constructor;
						return e.x = Math.min(this.x, t.x), e.y = Math.min(this.y, t.y), e.width = Math.max(this.x + this.width,
							t.x + t.width) - e.x, e.height = Math.max(this.y + this.height, t.y + t.height) - e.y, v(e)
					},
					transform: function(e) {
						var t, i = 1 / 0,
							a = -1 / 0,
							n = 1 / 0,
							s = -1 / 0;
						return [new u.Point(this.x, this.y), new u.Point(this.x2, this.y), new u.Point(this.x, this.y2), new u.Point(
							this.x2, this.y2)].forEach(function(t) {
							t = t.transform(e), i = Math.min(i, t.x), a = Math.max(a, t.x), n = Math.min(n, t.y), s = Math.max(s,
								t.y)
						}), (t = new this.constructor).x = i, t.width = a - i, t.y = n, t.height = s - n, v(t), t
					}
				}
			}), u.BBox = u.invent({
				create: function(e) {
					if (u.Box.apply(this, [].slice.call(arguments)), e instanceof u.Element) {
						var i;
						try {
							if (n.documentElement.contains) {
								if (!n.documentElement.contains(e.node)) throw new Exception("Element not in the dom")
							} else {
								for (var t = e.node; t.parentNode;) t = t.parentNode;
								if (t != n) throw new Exception("Element not in the dom")
							}
							i = e.node.getBBox()
						} catch (t) {
							if (e instanceof u.Shape) {
								var a = e.clone(u.parser.draw.instance).show();
								i = a.node.getBBox(), a.remove()
							} else i = {
								x: e.node.clientLeft,
								y: e.node.clientTop,
								width: e.node.clientWidth,
								height: e.node.clientHeight
							}
						}
						u.Box.call(this, i)
					}
				},
				inherit: u.Box,
				parent: u.Element,
				construct: {
					bbox: function() {
						return new u.BBox(this)
					}
				}
			}), u.BBox.prototype.constructor = u.BBox, u.extend(u.Element, {
				tbox: function() {
					return console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead."), this.rbox(this.doc())
				}
			}), u.RBox = u.invent({
				create: function(t) {
					u.Box.apply(this, [].slice.call(arguments)), t instanceof u.Element && u.Box.call(this, t.node.getBoundingClientRect())
				},
				inherit: u.Box,
				parent: u.Element,
				extend: {
					addOffset: function() {
						return this.x += r.pageXOffset, this.y += r.pageYOffset, this
					}
				},
				construct: {
					rbox: function(t) {
						return t ? new u.RBox(this).transform(t.screenCTM().inverse()) : new u.RBox(this).addOffset()
					}
				}
			}), u.RBox.prototype.constructor = u.RBox, u.Matrix = u.invent({
				create: function(t) {
					var e, i = p([1, 0, 0, 1, 0, 0]);
					for (t = t instanceof u.Element ? t.matrixify() : "string" == typeof t ? p(t.split(u.regex.delimiter).map(
							parseFloat)) : 6 == arguments.length ? p([].slice.call(arguments)) : Array.isArray(t) ? p(t) : "object" ===
						(void 0 === t ? "undefined" : w(t)) ? t : i, e = m.length - 1; 0 <= e; --e) this[m[e]] = null != t[m[e]] ?
						t[m[e]] : i[m[e]]
				},
				extend: {
					extract: function() {
						var t = f(this, 0, 1),
							e = f(this, 1, 0),
							i = 180 / Math.PI * Math.atan2(t.y, t.x) - 90;
						return {
							x: this.e,
							y: this.f,
							transformedX: (this.e * Math.cos(i * Math.PI / 180) + this.f * Math.sin(i * Math.PI / 180)) / Math.sqrt(
								this.a * this.a + this.b * this.b),
							transformedY: (this.f * Math.cos(i * Math.PI / 180) + this.e * Math.sin(-i * Math.PI / 180)) / Math.sqrt(
								this.c * this.c + this.d * this.d),
							skewX: -i,
							skewY: 180 / Math.PI * Math.atan2(e.y, e.x),
							scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
							scaleY: Math.sqrt(this.c * this.c + this.d * this.d),
							rotation: i,
							a: this.a,
							b: this.b,
							c: this.c,
							d: this.d,
							e: this.e,
							f: this.f,
							matrix: new u.Matrix(this)
						}
					},
					clone: function() {
						return new u.Matrix(this)
					},
					morph: function(t) {
						return this.destination = new u.Matrix(t), this
					},
					at: function(t) {
						return this.destination ? new u.Matrix({
							a: this.a + (this.destination.a - this.a) * t,
							b: this.b + (this.destination.b - this.b) * t,
							c: this.c + (this.destination.c - this.c) * t,
							d: this.d + (this.destination.d - this.d) * t,
							e: this.e + (this.destination.e - this.e) * t,
							f: this.f + (this.destination.f - this.f) * t
						}) : this
					},
					multiply: function(t) {
						return new u.Matrix(this.native().multiply(function(t) {
							t instanceof u.Matrix || (t = new u.Matrix(t));
							return t
						}(t).native()))
					},
					inverse: function() {
						return new u.Matrix(this.native().inverse())
					},
					translate: function(t, e) {
						return new u.Matrix(this.native().translate(t || 0, e || 0))
					},
					scale: function(t, e, i, a) {
						return 1 == arguments.length ? e = t : 3 == arguments.length && (a = i, i = e, e = t), this.around(i, a,
							new u.Matrix(t, 0, 0, e, 0, 0))
					},
					rotate: function(t, e, i) {
						return t = u.utils.radians(t), this.around(e, i, new u.Matrix(Math.cos(t), Math.sin(t), -Math.sin(t),
							Math.cos(t), 0, 0))
					},
					flip: function(t, e) {
						return "x" == t ? this.scale(-1, 1, e, 0) : "y" == t ? this.scale(1, -1, 0, e) : this.scale(-1, -1, t,
							null != e ? e : t)
					},
					skew: function(t, e, i, a) {
						return 1 == arguments.length ? e = t : 3 == arguments.length && (a = i, i = e, e = t), t = u.utils.radians(
							t), e = u.utils.radians(e), this.around(i, a, new u.Matrix(1, Math.tan(e), Math.tan(t), 1, 0, 0))
					},
					skewX: function(t, e, i) {
						return this.skew(t, 0, e, i)
					},
					skewY: function(t, e, i) {
						return this.skew(0, t, e, i)
					},
					around: function(t, e, i) {
						return this.multiply(new u.Matrix(1, 0, 0, 1, t || 0, e || 0)).multiply(i).multiply(new u.Matrix(1, 0, 0,
							1, -t || 0, -e || 0))
					},
					native: function() {
						for (var t = u.parser.native.createSVGMatrix(), e = m.length - 1; 0 <= e; e--) t[m[e]] = this[m[e]];
						return t
					},
					toString: function() {
						return "matrix(" + b(this.a) + "," + b(this.b) + "," + b(this.c) + "," + b(this.d) + "," + b(this.e) +
							"," + b(this.f) + ")"
					}
				},
				parent: u.Element,
				construct: {
					ctm: function() {
						return new u.Matrix(this.node.getCTM())
					},
					screenCTM: function() {
						if (this instanceof u.Nested) {
							var t = this.rect(1, 1),
								e = t.node.getScreenCTM();
							return t.remove(), new u.Matrix(e)
						}
						return new u.Matrix(this.node.getScreenCTM())
					}
				}
			}), u.Point = u.invent({
				create: function(t, e) {
					var i;
					i = Array.isArray(t) ? {
						x: t[0],
						y: t[1]
					} : "object" === (void 0 === t ? "undefined" : w(t)) ? {
						x: t.x,
						y: t.y
					} : null != t ? {
						x: t,
						y: null != e ? e : t
					} : {
						x: 0,
						y: 0
					}, this.x = i.x, this.y = i.y
				},
				extend: {
					clone: function() {
						return new u.Point(this)
					},
					morph: function(t, e) {
						return this.destination = new u.Point(t, e), this
					},
					at: function(t) {
						return this.destination ? new u.Point({
							x: this.x + (this.destination.x - this.x) * t,
							y: this.y + (this.destination.y - this.y) * t
						}) : this
					},
					native: function() {
						var t = u.parser.native.createSVGPoint();
						return t.x = this.x, t.y = this.y, t
					},
					transform: function(t) {
						return new u.Point(this.native().matrixTransform(t.native()))
					}
				}
			}), u.extend(u.Element, {
				point: function(t, e) {
					return new u.Point(t, e).transform(this.screenCTM().inverse())
				}
			}), u.extend(u.Element, {
				attr: function(t, e, i) {
					if (null == t) {
						for (t = {}, i = (e = this.node.attributes).length - 1; 0 <= i; i--) t[e[i].nodeName] = u.regex.isNumber.test(
							e[i].nodeValue) ? parseFloat(e[i].nodeValue) : e[i].nodeValue;
						return t
					}
					if ("object" == (void 0 === t ? "undefined" : w(t)))
						for (e in t) this.attr(e, t[e]);
					else if (null === e) this.node.removeAttribute(t);
					else {
						if (null == e) return null == (e = this.node.getAttribute(t)) ? u.defaults.attrs[t] : u.regex.isNumber.test(
							e) ? parseFloat(e) : e;
						"stroke-width" == t ? this.attr("stroke", 0 < parseFloat(e) ? this._stroke : null) : "stroke" == t && (
								this._stroke = e), "fill" != t && "stroke" != t || (u.regex.isImage.test(e) && (e = this.doc().defs().image(
								e, 0, 0)), e instanceof u.Image && (e = this.doc().defs().pattern(0, 0, function() {
								this.add(e)
							}))), "number" == typeof e ? e = new u.Number(e) : u.Color.isColor(e) ? e = new u.Color(e) : Array.isArray(
								e) && (e = new u.Array(e)), "leading" == t ? this.leading && this.leading(e) : "string" == typeof i ?
							this.node.setAttributeNS(i, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild ||
							"font-size" != t && "x" != t || this.rebuild(t, e)
					}
					return this
				}
			}), u.extend(u.Element, {
				transform: function(t, e) {
					var i, a;
					if ("object" !== (void 0 === t ? "undefined" : w(t))) return i = new u.Matrix(this).extract(), "string" ==
						typeof t ? i[t] : i;
					if (i = new u.Matrix(this), e = !!e || !!t.relative, null != t.a) i = e ? i.multiply(new u.Matrix(t)) :
						new u.Matrix(t);
					else if (null != t.rotation) g(t, this), i = e ? i.rotate(t.rotation, t.cx, t.cy) : i.rotate(t.rotation -
						i.extract().rotation, t.cx, t.cy);
					else if (null != t.scale || null != t.scaleX || null != t.scaleY) {
						if (g(t, this), t.scaleX = null != t.scale ? t.scale : null != t.scaleX ? t.scaleX : 1, t.scaleY = null !=
							t.scale ? t.scale : null != t.scaleY ? t.scaleY : 1, !e) {
							var n = i.extract();
							t.scaleX = 1 * t.scaleX / n.scaleX, t.scaleY = 1 * t.scaleY / n.scaleY
						}
						i = i.scale(t.scaleX, t.scaleY, t.cx, t.cy)
					} else if (null != t.skew || null != t.skewX || null != t.skewY) {
						if (g(t, this), t.skewX = null != t.skew ? t.skew : null != t.skewX ? t.skewX : 0, t.skewY = null != t.skew ?
							t.skew : null != t.skewY ? t.skewY : 0, !e) {
							n = i.extract();
							i = i.multiply((new u.Matrix).skew(n.skewX, n.skewY, t.cx, t.cy).inverse())
						}
						i = i.skew(t.skewX, t.skewY, t.cx, t.cy)
					} else t.flip ? ("x" == t.flip || "y" == t.flip ? t.offset = null == t.offset ? this.bbox()["c" + t.flip] :
						t.offset : null == t.offset ? (a = this.bbox(), t.flip = a.cx, t.offset = a.cy) : t.flip = t.offset, i =
						(new u.Matrix).flip(t.flip, t.offset)) : null == t.x && null == t.y || (e ? i = i.translate(t.x, t.y) :
						(null != t.x && (i.e = t.x), null != t.y && (i.f = t.y)));
					return this.attr("transform", i)
				}
			}), u.extend(u.FX, {
				transform: function(t, e) {
					var i, a, n = this.target();
					return "object" !== (void 0 === t ? "undefined" : w(t)) ? (i = new u.Matrix(n).extract(), "string" ==
						typeof t ? i[t] : i) : (e = !!e || !!t.relative, null != t.a ? i = new u.Matrix(t) : null != t.rotation ?
						(g(t, n), i = new u.Rotate(t.rotation, t.cx, t.cy)) : null != t.scale || null != t.scaleX || null != t.scaleY ?
						(g(t, n), t.scaleX = null != t.scale ? t.scale : null != t.scaleX ? t.scaleX : 1, t.scaleY = null != t.scale ?
							t.scale : null != t.scaleY ? t.scaleY : 1, i = new u.Scale(t.scaleX, t.scaleY, t.cx, t.cy)) : null != t
						.skewX || null != t.skewY ? (g(t, n), t.skewX = null != t.skewX ? t.skewX : 0, t.skewY = null != t.skewY ?
							t.skewY : 0, i = new u.Skew(t.skewX, t.skewY, t.cx, t.cy)) : t.flip ? ("x" == t.flip || "y" == t.flip ?
							t.offset = null == t.offset ? n.bbox()["c" + t.flip] : t.offset : null == t.offset ? (a = n.bbox(), t.flip =
								a.cx, t.offset = a.cy) : t.flip = t.offset, i = (new u.Matrix).flip(t.flip, t.offset)) : null == t.x &&
						null == t.y || (i = new u.Translate(t.x, t.y)), i ? (i.relative = e, this.last().transforms.push(i),
							this._callStart()) : this)
				}
			}), u.extend(u.Element, {
				untransform: function() {
					return this.attr("transform", null)
				},
				matrixify: function() {
					return (this.attr("transform") || "").split(u.regex.transforms).slice(0, -1).map(function(t) {
						var e = t.trim().split("(");
						return [e[0], e[1].split(u.regex.delimiter).map(function(t) {
							return parseFloat(t)
						})]
					}).reduce(function(t, e) {
						return "matrix" == e[0] ? t.multiply(p(e[1])) : t[e[0]].apply(t, e[1])
					}, new u.Matrix)
				},
				toParent: function(t) {
					if (this == t) return this;
					var e = this.screenCTM(),
						i = t.screenCTM().inverse();
					return this.addTo(t).untransform().transform(i.multiply(e)), this
				},
				toDoc: function() {
					return this.toParent(this.doc())
				}
			}), u.Transformation = u.invent({
				create: function(t, e) {
					if (1 < arguments.length && "boolean" != typeof e) return this.constructor.call(this, [].slice.call(
						arguments));
					if (Array.isArray(t))
						for (var i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[i];
					else if ("object" == (void 0 === t ? "undefined" : w(t)))
						for (i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[this.arguments[i]];
					!(this.inversed = !1) === e && (this.inversed = !0)
				},
				extend: {
					arguments: [],
					method: "",
					at: function(t) {
						for (var e = [], i = 0, a = this.arguments.length; i < a; ++i) e.push(this[this.arguments[i]]);
						var n = this._undo || new u.Matrix;
						return n = (new u.Matrix).morph(u.Matrix.prototype[this.method].apply(n, e)).at(t), this.inversed ? n.inverse() :
							n
					},
					undo: function(t) {
						for (var e = 0, i = this.arguments.length; e < i; ++e) t[this.arguments[e]] = void 0 === this[this.arguments[
							e]] ? 0 : t[this.arguments[e]];
						return t.cx = this.cx, t.cy = this.cy, this._undo = new(u[o(this.method)])(t, !0).at(1), this
					}
				}
			}), u.Translate = u.invent({
				parent: u.Matrix,
				inherit: u.Transformation,
				create: function(t, e) {
					this.constructor.apply(this, [].slice.call(arguments))
				},
				extend: {
					arguments: ["transformedX", "transformedY"],
					method: "translate"
				}
			}), u.Rotate = u.invent({
				parent: u.Matrix,
				inherit: u.Transformation,
				create: function(t, e) {
					this.constructor.apply(this, [].slice.call(arguments))
				},
				extend: {
					arguments: ["rotation", "cx", "cy"],
					method: "rotate",
					at: function(t) {
						var e = (new u.Matrix).rotate((new u.Number).morph(this.rotation - (this._undo ? this._undo.rotation : 0))
							.at(t), this.cx, this.cy);
						return this.inversed ? e.inverse() : e
					},
					undo: function(t) {
						return this._undo = t, this
					}
				}
			}), u.Scale = u.invent({
				parent: u.Matrix,
				inherit: u.Transformation,
				create: function(t, e) {
					this.constructor.apply(this, [].slice.call(arguments))
				},
				extend: {
					arguments: ["scaleX", "scaleY", "cx", "cy"],
					method: "scale"
				}
			}), u.Skew = u.invent({
				parent: u.Matrix,
				inherit: u.Transformation,
				create: function(t, e) {
					this.constructor.apply(this, [].slice.call(arguments))
				},
				extend: {
					arguments: ["skewX", "skewY", "cx", "cy"],
					method: "skew"
				}
			}), u.extend(u.Element, {
				style: function(t, e) {
					if (0 == arguments.length) return this.node.style.cssText || "";
					if (arguments.length < 2)
						if ("object" == (void 0 === t ? "undefined" : w(t)))
							for (e in t) this.style(e, t[e]);
						else {
							if (!u.regex.isCss.test(t)) return this.node.style[s(t)];
							for (t = t.split(/\s*;\s*/).filter(function(t) {
									return !!t
								}).map(function(t) {
									return t.split(/\s*:\s*/)
								}); e = t.pop();) this.style(e[0], e[1])
						}
					else this.node.style[s(t)] = null === e || u.regex.isBlank.test(e) ? "" : e;
					return this
				}
			}), u.Parent = u.invent({
				create: function(t) {
					this.constructor.call(this, t)
				},
				inherit: u.Element,
				extend: {
					children: function() {
						return u.utils.map(u.utils.filterSVGElements(this.node.childNodes), function(t) {
							return u.adopt(t)
						})
					},
					add: function(t, e) {
						return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(
							t.node, this.node.childNodes[e]), this
					},
					put: function(t, e) {
						return this.add(t, e), t
					},
					has: function(t) {
						return 0 <= this.index(t)
					},
					index: function(t) {
						return [].slice.call(this.node.childNodes).indexOf(t.node)
					},
					get: function(t) {
						return u.adopt(this.node.childNodes[t])
					},
					first: function() {
						return this.get(0)
					},
					last: function() {
						return this.get(this.node.childNodes.length - 1)
					},
					each: function(t, e) {
						var i, a, n = this.children();
						for (i = 0, a = n.length; i < a; i++) n[i] instanceof u.Element && t.apply(n[i], [i, n]), e && n[i] instanceof u
							.Container && n[i].each(t, e);
						return this
					},
					removeElement: function(t) {
						return this.node.removeChild(t.node), this
					},
					clear: function() {
						for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
						return delete this._defs, this
					},
					defs: function() {
						return this.doc().defs()
					}
				}
			}), u.extend(u.Parent, {
				ungroup: function(t, e) {
					return 0 === e || this instanceof u.Defs || this.node == u.parser.draw || (t = t || (this instanceof u.Doc ?
						this : this.parent(u.Parent)), e = e || 1 / 0, this.each(function() {
						return this instanceof u.Defs ? this : this instanceof u.Parent ? this.ungroup(t, e - 1) : this.toParent(
							t)
					}), this.node.firstChild || this.remove()), this
				},
				flatten: function(t, e) {
					return this.ungroup(t, e)
				}
			}), u.Container = u.invent({
				create: function(t) {
					this.constructor.call(this, t)
				},
				inherit: u.Parent
			}), u.ViewBox = u.invent({
				create: function(t) {
					var e, i, a, n, s, r, o, l = 1,
						h = 1,
						c = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;
					if (t instanceof u.Element) {
						for (s = ((o = r = t).attr("viewBox") || "").match(c), t.bbox, a = new u.Number(t.width()), n = new u.Number(
								t.height());
							"%" == a.unit;) l *= a.value, a = new u.Number(r instanceof u.Doc ? r.parent().offsetWidth : r.parent().width()),
							r = r.parent();
						for (;
							"%" == n.unit;) h *= n.value, n = new u.Number(o instanceof u.Doc ? o.parent().offsetHeight : o.parent()
							.height()), o = o.parent();
						this.x = 0, this.y = 0, this.width = a * l, this.height = n * h, this.zoom = 1, s && (e = parseFloat(s[0]),
							i = parseFloat(s[1]), a = parseFloat(s[2]), n = parseFloat(s[3]), this.zoom = this.width / this.height >
							a / n ? this.height / n : this.width / a, this.x = e, this.y = i, this.width = a, this.height = n)
					} else t = "string" == typeof t ? t.match(c).map(function(t) {
							return parseFloat(t)
						}) : Array.isArray(t) ? t : "object" == (void 0 === t ? "undefined" : w(t)) ? [t.x, t.y, t.width, t.height] :
						4 == arguments.length ? [].slice.call(arguments) : [0, 0, 0, 0], this.x = t[0], this.y = t[1], this.width =
						t[2], this.height = t[3]
				},
				extend: {
					toString: function() {
						return this.x + " " + this.y + " " + this.width + " " + this.height
					},
					morph: function(t, e, i, a) {
						return this.destination = new u.ViewBox(t, e, i, a), this
					},
					at: function(t) {
						return this.destination ? new u.ViewBox([this.x + (this.destination.x - this.x) * t, this.y + (this.destination
							.y - this.y) * t, this.width + (this.destination.width - this.width) * t, this.height + (this.destination
							.height - this.height) * t]) : this
					}
				},
				parent: u.Container,
				construct: {
					viewbox: function(t, e, i, a) {
						return 0 == arguments.length ? new u.ViewBox(this) : this.attr("viewBox", new u.ViewBox(t, e, i, a))
					}
				}
			}), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart",
				"touchmove", "touchleave", "touchend", "touchcancel"
			].forEach(function(e) {
				u.Element.prototype[e] = function(t) {
					return u.on(this.node, e, t), this
				}
			}), u.listeners = [], u.handlerMap = [], u.listenerId = 0, u.on = function(t, e, i, a, n) {
				var s = i.bind(a || t.instance || t),
					r = (u.handlerMap.indexOf(t) + 1 || u.handlerMap.push(t)) - 1,
					o = e.split(".")[0],
					l = e.split(".")[1] || "*";
				u.listeners[r] = u.listeners[r] || {}, u.listeners[r][o] = u.listeners[r][o] || {}, u.listeners[r][o][l] = u.listeners[
						r][o][l] || {}, i._svgjsListenerId || (i._svgjsListenerId = ++u.listenerId), u.listeners[r][o][l][i._svgjsListenerId] =
					s, t.addEventListener(o, s, n || !1)
			}, u.off = function(t, e, i) {
				var a = u.handlerMap.indexOf(t),
					n = e && e.split(".")[0],
					s = e && e.split(".")[1],
					r = "";
				if (-1 != a)
					if (i) {
						if ("function" == typeof i && (i = i._svgjsListenerId), !i) return;
						u.listeners[a][n] && u.listeners[a][n][s || "*"] && (t.removeEventListener(n, u.listeners[a][n][s || "*"][i],
							!1), delete u.listeners[a][n][s || "*"][i])
					} else if (s && n) {
					if (u.listeners[a][n] && u.listeners[a][n][s]) {
						for (i in u.listeners[a][n][s]) u.off(t, [n, s].join("."), i);
						delete u.listeners[a][n][s]
					}
				} else if (s)
					for (e in u.listeners[a])
						for (r in u.listeners[a][e]) s === r && u.off(t, [e, s].join("."));
				else if (n) {
					if (u.listeners[a][n]) {
						for (r in u.listeners[a][n]) u.off(t, [n, r].join("."));
						delete u.listeners[a][n]
					}
				} else {
					for (e in u.listeners[a]) u.off(t, e);
					delete u.listeners[a], delete u.handlerMap[a]
				}
			}, u.extend(u.Element, {
				on: function(t, e, i, a) {
					return u.on(this.node, t, e, i, a), this
				},
				off: function(t, e) {
					return u.off(this.node, t, e), this
				},
				fire: function(t, e) {
					return t instanceof r.Event ? this.node.dispatchEvent(t) : this.node.dispatchEvent(t = new u.CustomEvent(t, {
						detail: e,
						cancelable: !0
					})), this._event = t, this
				},
				event: function() {
					return this._event
				}
			}), u.Defs = u.invent({
				create: "defs",
				inherit: u.Container
			}), u.G = u.invent({
				create: "g",
				inherit: u.Container,
				extend: {
					x: function(t) {
						return null == t ? this.transform("x") : this.transform({
							x: t - this.x()
						}, !0)
					},
					y: function(t) {
						return null == t ? this.transform("y") : this.transform({
							y: t - this.y()
						}, !0)
					},
					cx: function(t) {
						return null == t ? this.gbox().cx : this.x(t - this.gbox().width / 2)
					},
					cy: function(t) {
						return null == t ? this.gbox().cy : this.y(t - this.gbox().height / 2)
					},
					gbox: function() {
						var t = this.bbox(),
							e = this.transform();
						return t.x += e.x, t.x2 += e.x, t.cx += e.x, t.y += e.y, t.y2 += e.y, t.cy += e.y, t
					}
				},
				construct: {
					group: function() {
						return this.put(new u.G)
					}
				}
			}), u.Doc = u.invent({
				create: function(t) {
					t && ("svg" == (t = "string" == typeof t ? n.getElementById(t) : t).nodeName ? this.constructor.call(this,
							t) : (this.constructor.call(this, u.create("svg")), t.appendChild(this.node), this.size("100%", "100%")),
						this.namespace().defs())
				},
				inherit: u.Container,
				extend: {
					namespace: function() {
						return this.attr({
							xmlns: u.ns,
							version: "1.1"
						}).attr("xmlns:xlink", u.xlink, u.xmlns).attr("xmlns:svgjs", u.svgjs, u.xmlns)
					},
					defs: function() {
						var t;
						this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? this._defs = u.adopt(t) : this._defs =
							new u.Defs, this.node.appendChild(this._defs.node));
						return this._defs
					},
					parent: function() {
						return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null
					},
					spof: function() {
						var t = this.node.getScreenCTM();
						return t && this.style("left", -t.e % 1 + "px").style("top", -t.f % 1 + "px"), this
					},
					remove: function() {
						return this.parent() && this.parent().removeChild(this.node), this
					},
					clear: function() {
						for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
						return delete this._defs, u.parser.draw.parentNode || this.node.appendChild(u.parser.draw), this
					},
					clone: function(t) {
						this.writeDataToDom();
						var e = this.node,
							i = x(e.cloneNode(!0));
						return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i
					}
				}
			}), u.extend(u.Element, {
				siblings: function() {
					return this.parent().children()
				},
				position: function() {
					return this.parent().index(this)
				},
				next: function() {
					return this.siblings()[this.position() + 1]
				},
				previous: function() {
					return this.siblings()[this.position() - 1]
				},
				forward: function() {
					var t = this.position() + 1,
						e = this.parent();
					return e.removeElement(this).add(this, t), e instanceof u.Doc && e.node.appendChild(e.defs().node), this
				},
				backward: function() {
					var t = this.position();
					return 0 < t && this.parent().removeElement(this).add(this, t - 1), this
				},
				front: function() {
					var t = this.parent();
					return t.node.appendChild(this.node), t instanceof u.Doc && t.node.appendChild(t.defs().node), this
				},
				back: function() {
					return 0 < this.position() && this.parent().removeElement(this).add(this, 0), this
				},
				before: function(t) {
					t.remove();
					var e = this.position();
					return this.parent().add(t, e), this
				},
				after: function(t) {
					t.remove();
					var e = this.position();
					return this.parent().add(t, e + 1), this
				}
			}), u.Mask = u.invent({
				create: function() {
					this.constructor.call(this, u.create("mask")), this.targets = []
				},
				inherit: u.Container,
				extend: {
					remove: function() {
						for (var t = this.targets.length - 1; 0 <= t; t--) this.targets[t] && this.targets[t].unmask();
						return this.targets = [], u.Element.prototype.remove.call(this), this
					}
				},
				construct: {
					mask: function() {
						return this.defs().put(new u.Mask)
					}
				}
			}), u.extend(u.Element, {
				maskWith: function(t) {
					return this.masker = t instanceof u.Mask ? t : this.parent().mask().add(t), this.masker.targets.push(this),
						this.attr("mask", 'url("#' + this.masker.attr("id") + '")')
				},
				unmask: function() {
					return delete this.masker, this.attr("mask", null)
				}
			}), u.ClipPath = u.invent({
				create: function() {
					this.constructor.call(this, u.create("clipPath")), this.targets = []
				},
				inherit: u.Container,
				extend: {
					remove: function() {
						for (var t = this.targets.length - 1; 0 <= t; t--) this.targets[t] && this.targets[t].unclip();
						return this.targets = [], this.parent().removeElement(this), this
					}
				},
				construct: {
					clip: function() {
						return this.defs().put(new u.ClipPath)
					}
				}
			}), u.extend(u.Element, {
				clipWith: function(t) {
					return this.clipper = t instanceof u.ClipPath ? t : this.parent().clip().add(t), this.clipper.targets.push(
						this), this.attr("clip-path", 'url("#' + this.clipper.attr("id") + '")')
				},
				unclip: function() {
					return delete this.clipper, this.attr("clip-path", null)
				}
			}), u.Gradient = u.invent({
				create: function(t) {
					this.constructor.call(this, u.create(t + "Gradient")), this.type = t
				},
				inherit: u.Container,
				extend: {
					at: function(t, e, i) {
						return this.put(new u.Stop).update(t, e, i)
					},
					update: function(t) {
						return this.clear(), "function" == typeof t && t.call(this, this), this
					},
					fill: function() {
						return "url(#" + this.id() + ")"
					},
					toString: function() {
						return this.fill()
					},
					attr: function(t, e, i) {
						return "transform" == t && (t = "gradientTransform"), u.Container.prototype.attr.call(this, t, e, i)
					}
				},
				construct: {
					gradient: function(t, e) {
						return this.defs().gradient(t, e)
					}
				}
			}), u.extend(u.Gradient, u.FX, {
				from: function(t, e) {
					return "radial" == (this._target || this).type ? this.attr({
						fx: new u.Number(t),
						fy: new u.Number(e)
					}) : this.attr({
						x1: new u.Number(t),
						y1: new u.Number(e)
					})
				},
				to: function(t, e) {
					return "radial" == (this._target || this).type ? this.attr({
						cx: new u.Number(t),
						cy: new u.Number(e)
					}) : this.attr({
						x2: new u.Number(t),
						y2: new u.Number(e)
					})
				}
			}), u.extend(u.Defs, {
				gradient: function(t, e) {
					return this.put(new u.Gradient(t)).update(e)
				}
			}), u.Stop = u.invent({
				create: "stop",
				inherit: u.Element,
				extend: {
					update: function(t) {
						return ("number" == typeof t || t instanceof u.Number) && (t = {
							offset: arguments[0],
							color: arguments[1],
							opacity: arguments[2]
						}), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color",
							t.color), null != t.offset && this.attr("offset", new u.Number(t.offset)), this
					}
				}
			}), u.Pattern = u.invent({
				create: "pattern",
				inherit: u.Container,
				extend: {
					fill: function() {
						return "url(#" + this.id() + ")"
					},
					update: function(t) {
						return this.clear(), "function" == typeof t && t.call(this, this), this
					},
					toString: function() {
						return this.fill()
					},
					attr: function(t, e, i) {
						return "transform" == t && (t = "patternTransform"), u.Container.prototype.attr.call(this, t, e, i)
					}
				},
				construct: {
					pattern: function(t, e, i) {
						return this.defs().pattern(t, e, i)
					}
				}
			}), u.extend(u.Defs, {
				pattern: function(t, e, i) {
					return this.put(new u.Pattern).update(i).attr({
						x: 0,
						y: 0,
						width: t,
						height: e,
						patternUnits: "userSpaceOnUse"
					})
				}
			}), u.Shape = u.invent({
				create: function(t) {
					this.constructor.call(this, t)
				},
				inherit: u.Element
			}), u.Bare = u.invent({
				create: function(t, e) {
					if (this.constructor.call(this, u.create(t)), e)
						for (var i in e.prototype) "function" == typeof e.prototype[i] && (this[i] = e.prototype[i])
				},
				inherit: u.Element,
				extend: {
					words: function(t) {
						for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
						return this.node.appendChild(n.createTextNode(t)), this
					}
				}
			}), u.extend(u.Parent, {
				element: function(t, e) {
					return this.put(new u.Bare(t, e))
				}
			}), u.Symbol = u.invent({
				create: "symbol",
				inherit: u.Container,
				construct: {
					symbol: function() {
						return this.put(new u.Symbol)
					}
				}
			}), u.Use = u.invent({
				create: "use",
				inherit: u.Shape,
				extend: {
					element: function(t, e) {
						return this.attr("href", (e || "") + "#" + t, u.xlink)
					}
				},
				construct: {
					use: function(t, e) {
						return this.put(new u.Use).element(t, e)
					}
				}
			}), u.Rect = u.invent({
				create: "rect",
				inherit: u.Shape,
				construct: {
					rect: function(t, e) {
						return this.put(new u.Rect).size(t, e)
					}
				}
			}), u.Circle = u.invent({
				create: "circle",
				inherit: u.Shape,
				construct: {
					circle: function(t) {
						return this.put(new u.Circle).rx(new u.Number(t).divide(2)).move(0, 0)
					}
				}
			}), u.extend(u.Circle, u.FX, {
				rx: function(t) {
					return this.attr("r", t)
				},
				ry: function(t) {
					return this.rx(t)
				}
			}), u.Ellipse = u.invent({
				create: "ellipse",
				inherit: u.Shape,
				construct: {
					ellipse: function(t, e) {
						return this.put(new u.Ellipse).size(t, e).move(0, 0)
					}
				}
			}), u.extend(u.Ellipse, u.Rect, u.FX, {
				rx: function(t) {
					return this.attr("rx", t)
				},
				ry: function(t) {
					return this.attr("ry", t)
				}
			}), u.extend(u.Circle, u.Ellipse, {
				x: function(t) {
					return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
				},
				y: function(t) {
					return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
				},
				cx: function(t) {
					return null == t ? this.attr("cx") : this.attr("cx", t)
				},
				cy: function(t) {
					return null == t ? this.attr("cy") : this.attr("cy", t)
				},
				width: function(t) {
					return null == t ? 2 * this.rx() : this.rx(new u.Number(t).divide(2))
				},
				height: function(t) {
					return null == t ? 2 * this.ry() : this.ry(new u.Number(t).divide(2))
				},
				size: function(t, e) {
					var i = d(this, t, e);
					return this.rx(new u.Number(i.width).divide(2)).ry(new u.Number(i.height).divide(2))
				}
			}), u.Line = u.invent({
				create: "line",
				inherit: u.Shape,
				extend: {
					array: function() {
						return new u.PointArray([
							[this.attr("x1"), this.attr("y1")],
							[this.attr("x2"), this.attr("y2")]
						])
					},
					plot: function(t, e, i, a) {
						return null == t ? this.array() : (t = void 0 !== e ? {
							x1: t,
							y1: e,
							x2: i,
							y2: a
						} : new u.PointArray(t).toLine(), this.attr(t))
					},
					move: function(t, e) {
						return this.attr(this.array().move(t, e).toLine())
					},
					size: function(t, e) {
						var i = d(this, t, e);
						return this.attr(this.array().size(i.width, i.height).toLine())
					}
				},
				construct: {
					line: function(t, e, i, a) {
						return u.Line.prototype.plot.apply(this.put(new u.Line), null != t ? [t, e, i, a] : [0, 0, 0, 0])
					}
				}
			}), u.Polyline = u.invent({
				create: "polyline",
				inherit: u.Shape,
				construct: {
					polyline: function(t) {
						return this.put(new u.Polyline).plot(t || new u.PointArray)
					}
				}
			}), u.Polygon = u.invent({
				create: "polygon",
				inherit: u.Shape,
				construct: {
					polygon: function(t) {
						return this.put(new u.Polygon).plot(t || new u.PointArray)
					}
				}
			}), u.extend(u.Polyline, u.Polygon, {
				array: function() {
					return this._array || (this._array = new u.PointArray(this.attr("points")))
				},
				plot: function(t) {
					return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new u
						.PointArray(t))
				},
				clear: function() {
					return delete this._array, this
				},
				move: function(t, e) {
					return this.attr("points", this.array().move(t, e))
				},
				size: function(t, e) {
					var i = d(this, t, e);
					return this.attr("points", this.array().size(i.width, i.height))
				}
			}), u.extend(u.Line, u.Polyline, u.Polygon, {
				morphArray: u.PointArray,
				x: function(t) {
					return null == t ? this.bbox().x : this.move(t, this.bbox().y)
				},
				y: function(t) {
					return null == t ? this.bbox().y : this.move(this.bbox().x, t)
				},
				width: function(t) {
					var e = this.bbox();
					return null == t ? e.width : this.size(t, e.height)
				},
				height: function(t) {
					var e = this.bbox();
					return null == t ? e.height : this.size(e.width, t)
				}
			}), u.Path = u.invent({
				create: "path",
				inherit: u.Shape,
				extend: {
					morphArray: u.PathArray,
					array: function() {
						return this._array || (this._array = new u.PathArray(this.attr("d")))
					},
					plot: function(t) {
						return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new u.PathArray(
							t))
					},
					clear: function() {
						return delete this._array, this
					},
					move: function(t, e) {
						return this.attr("d", this.array().move(t, e))
					},
					x: function(t) {
						return null == t ? this.bbox().x : this.move(t, this.bbox().y)
					},
					y: function(t) {
						return null == t ? this.bbox().y : this.move(this.bbox().x, t)
					},
					size: function(t, e) {
						var i = d(this, t, e);
						return this.attr("d", this.array().size(i.width, i.height))
					},
					width: function(t) {
						return null == t ? this.bbox().width : this.size(t, this.bbox().height)
					},
					height: function(t) {
						return null == t ? this.bbox().height : this.size(this.bbox().width, t)
					}
				},
				construct: {
					path: function(t) {
						return this.put(new u.Path).plot(t || new u.PathArray)
					}
				}
			}), u.Image = u.invent({
				create: "image",
				inherit: u.Shape,
				extend: {
					load: function(e) {
						if (!e) return this;
						var i = this,
							a = new r.Image;
						return u.on(a, "load", function() {
							u.off(a);
							var t = i.parent(u.Pattern);
							null !== t && (0 == i.width() && 0 == i.height() && i.size(a.width, a.height), t && 0 == t.width() &&
								0 == t.height() && t.size(i.width(), i.height()), "function" == typeof i._loaded && i._loaded.call(i, {
									width: a.width,
									height: a.height,
									ratio: a.width / a.height,
									url: e
								}))
						}), u.on(a, "error", function(t) {
							u.off(a), "function" == typeof i._error && i._error.call(i, t)
						}), this.attr("href", a.src = this.src = e, u.xlink)
					},
					loaded: function(t) {
						return this._loaded = t, this
					},
					error: function(t) {
						return this._error = t, this
					}
				},
				construct: {
					image: function(t, e, i) {
						return this.put(new u.Image).load(t).size(e || 0, i || e || 0)
					}
				}
			}), u.Text = u.invent({
				create: function() {
					this.constructor.call(this, u.create("text")), this.dom.leading = new u.Number(1.3), this._rebuild = !0,
						this._build = !1, this.attr("font-family", u.defaults.attrs["font-family"])
				},
				inherit: u.Shape,
				extend: {
					x: function(t) {
						return null == t ? this.attr("x") : this.attr("x", t)
					},
					y: function(t) {
						var e = this.attr("y"),
							i = "number" == typeof e ? e - this.bbox().y : 0;
						return null == t ? "number" == typeof e ? e - i : e : this.attr("y", "number" == typeof t.valueOf() ? t +
							i : t)
					},
					cx: function(t) {
						return null == t ? this.bbox().cx : this.x(t - this.bbox().width / 2)
					},
					cy: function(t) {
						return null == t ? this.bbox().cy : this.y(t - this.bbox().height / 2)
					},
					text: function(t) {
						if (void 0 === t) {
							t = "";
							for (var e = this.node.childNodes, i = 0, a = e.length; i < a; ++i) 0 != i && 3 != e[i].nodeType && 1 ==
								u.adopt(e[i]).dom.newLined && (t += "\n"), t += e[i].textContent;
							return t
						}
						if (this.clear().build(!0), "function" == typeof t) t.call(this, this);
						else {
							t = t.split("\n");
							i = 0;
							for (var n = t.length; i < n; i++) this.tspan(t[i]).newLine()
						}
						return this.build(!1).rebuild()
					},
					size: function(t) {
						return this.attr("font-size", t).rebuild()
					},
					leading: function(t) {
						return null == t ? this.dom.leading : (this.dom.leading = new u.Number(t), this.rebuild())
					},
					lines: function() {
						var t = (this.textPath && this.textPath() || this).node,
							e = u.utils.map(u.utils.filterSVGElements(t.childNodes), function(t) {
								return u.adopt(t)
							});
						return new u.Set(e)
					},
					rebuild: function(t) {
						if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
							var e = this,
								i = 0,
								a = this.dom.leading * new u.Number(this.attr("font-size"));
							this.lines().each(function() {
								this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? i += a : (
									this.attr("dy", a + i), i = 0))
							}), this.fire("rebuild")
						}
						return this
					},
					build: function(t) {
						return this._build = !!t, this
					},
					setData: function(t) {
						return this.dom = t, this.dom.leading = new u.Number(t.leading || 1.3), this
					}
				},
				construct: {
					text: function(t) {
						return this.put(new u.Text).text(t)
					},
					plain: function(t) {
						return this.put(new u.Text).plain(t)
					}
				}
			}), u.Tspan = u.invent({
				create: "tspan",
				inherit: u.Shape,
				extend: {
					text: function(t) {
						return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(
							this, this) : this.plain(t), this)
					},
					dx: function(t) {
						return this.attr("dx", t)
					},
					dy: function(t) {
						return this.attr("dy", t)
					},
					newLine: function() {
						var t = this.parent(u.Text);
						return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x())
					}
				}
			}), u.extend(u.Text, u.Tspan, {
				plain: function(t) {
					return !1 === this._build && this.clear(), this.node.appendChild(n.createTextNode(t)), this
				},
				tspan: function(t) {
					var e = (this.textPath && this.textPath() || this).node,
						i = new u.Tspan;
					return !1 === this._build && this.clear(), e.appendChild(i.node), i.text(t)
				},
				clear: function() {
					for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes();) t.removeChild(t.lastChild);
					return this
				},
				length: function() {
					return this.node.getComputedTextLength()
				}
			}), u.TextPath = u.invent({
				create: "textPath",
				inherit: u.Parent,
				parent: u.Text,
				construct: {
					morphArray: u.PathArray,
					path: function(t) {
						for (var e = new u.TextPath, i = this.doc().defs().path(t); this.node.hasChildNodes();) e.node.appendChild(
							this.node.firstChild);
						return this.node.appendChild(e.node), e.attr("href", "#" + i, u.xlink), this
					},
					array: function() {
						var t = this.track();
						return t ? t.array() : null
					},
					plot: function(t) {
						var e = this.track(),
							i = null;
						return e && (i = e.plot(t)), null == t ? i : this
					},
					track: function() {
						var t = this.textPath();
						if (t) return t.reference("href")
					},
					textPath: function() {
						if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return u.adopt(this.node.firstChild)
					}
				}
			}), u.Nested = u.invent({
				create: function() {
					this.constructor.call(this, u.create("svg")), this.style("overflow", "visible")
				},
				inherit: u.Container,
				construct: {
					nested: function() {
						return this.put(new u.Nested)
					}
				}
			}), u.A = u.invent({
				create: "a",
				inherit: u.Container,
				extend: {
					to: function(t) {
						return this.attr("href", t, u.xlink)
					},
					show: function(t) {
						return this.attr("show", t, u.xlink)
					},
					target: function(t) {
						return this.attr("target", t)
					}
				},
				construct: {
					link: function(t) {
						return this.put(new u.A).to(t)
					}
				}
			}), u.extend(u.Element, {
				linkTo: function(t) {
					var e = new u.A;
					return "function" == typeof t ? t.call(e, e) : e.to(t), this.parent().put(e).put(this)
				}
			}), u.Marker = u.invent({
				create: "marker",
				inherit: u.Container,
				extend: {
					width: function(t) {
						return this.attr("markerWidth", t)
					},
					height: function(t) {
						return this.attr("markerHeight", t)
					},
					ref: function(t, e) {
						return this.attr("refX", t).attr("refY", e)
					},
					update: function(t) {
						return this.clear(), "function" == typeof t && t.call(this, this), this
					},
					toString: function() {
						return "url(#" + this.id() + ")"
					}
				},
				construct: {
					marker: function(t, e, i) {
						return this.defs().marker(t, e, i)
					}
				}
			}), u.extend(u.Defs, {
				marker: function(t, e, i) {
					return this.put(new u.Marker).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(
						i)
				}
			}), u.extend(u.Line, u.Polyline, u.Polygon, u.Path, {
				marker: function(t, e, i, a) {
					var n = ["marker"];
					return "all" != t && n.push(t), n = n.join("-"), t = e instanceof u.Marker ? e : this.doc().marker(e, i, a),
						this.attr(n, t)
				}
			});
			var a = {
				stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
				fill: ["color", "opacity", "rule"],
				prefix: function(t, e) {
					return "color" == e ? t : t + "-" + e
				}
			};

			function h(t, e, i, a) {
				return i + a.replace(u.regex.dots, " .")
			}

			function s(t) {
				return t.toLowerCase().replace(/-(.)/g, function(t, e) {
					return e.toUpperCase()
				})
			}

			function o(t) {
				return t.charAt(0).toUpperCase() + t.slice(1)
			}

			function c(t) {
				var e = t.toString(16);
				return 1 == e.length ? "0" + e : e
			}

			function d(t, e, i) {
				if (null == e || null == i) {
					var a = t.bbox();
					null == e ? e = a.width / a.height * i : null == i && (i = a.height / a.width * e)
				}
				return {
					width: e,
					height: i
				}
			}

			function f(t, e, i) {
				return {
					x: e * t.a + i * t.c + 0,
					y: e * t.b + i * t.d + 0
				}
			}

			function p(t) {
				return {
					a: t[0],
					b: t[1],
					c: t[2],
					d: t[3],
					e: t[4],
					f: t[5]
				}
			}

			function g(t, e) {
				t.cx = null == t.cx ? e.bbox().cx : t.cx, t.cy = null == t.cy ? e.bbox().cy : t.cy
			}

			function x(t) {
				for (var e = t.childNodes.length - 1; 0 <= e; e--) t.childNodes[e] instanceof r.SVGElement && x(t.childNodes[e]);
				return u.adopt(t).id(u.eid(t.nodeName))
			}

			function v(t) {
				return null == t.x && (t.x = 0, t.y = 0, t.width = 0, t.height = 0), t.w = t.width, t.h = t.height, t.x2 = t.x +
					t.width, t.y2 = t.y + t.height, t.cx = t.x + t.width / 2, t.cy = t.y + t.height / 2, t
			}

			function b(t) {
				return 1e-37 < Math.abs(t) ? t : 0
			} ["fill", "stroke"].forEach(function(e) {
				var i, t = {};
				t[e] = function(t) {
					if (void 0 === t) return this;
					if ("string" == typeof t || u.Color.isRgb(t) || t && "function" == typeof t.fill) this.attr(e, t);
					else
						for (i = a[e].length - 1; 0 <= i; i--) null != t[a[e][i]] && this.attr(a.prefix(e, a[e][i]), t[a[e][i]]);
					return this
				}, u.extend(u.Element, u.FX, t)
			}), u.extend(u.Element, u.FX, {
				rotate: function(t, e, i) {
					return this.transform({
						rotation: t,
						cx: e,
						cy: i
					})
				},
				skew: function(t, e, i, a) {
					return 1 == arguments.length || 3 == arguments.length ? this.transform({
						skew: t,
						cx: e,
						cy: i
					}) : this.transform({
						skewX: t,
						skewY: e,
						cx: i,
						cy: a
					})
				},
				scale: function(t, e, i, a) {
					return 1 == arguments.length || 3 == arguments.length ? this.transform({
						scale: t,
						cx: e,
						cy: i
					}) : this.transform({
						scaleX: t,
						scaleY: e,
						cx: i,
						cy: a
					})
				},
				translate: function(t, e) {
					return this.transform({
						x: t,
						y: e
					})
				},
				flip: function(t, e) {
					return e = "number" == typeof t ? t : e, this.transform({
						flip: t || "both",
						offset: e
					})
				},
				matrix: function(t) {
					return this.attr("transform", new u.Matrix(6 == arguments.length ? [].slice.call(arguments) : t))
				},
				opacity: function(t) {
					return this.attr("opacity", t)
				},
				dx: function(t) {
					return this.x(new u.Number(t).plus(this instanceof u.FX ? 0 : this.x()), !0)
				},
				dy: function(t) {
					return this.y(new u.Number(t).plus(this instanceof u.FX ? 0 : this.y()), !0)
				},
				dmove: function(t, e) {
					return this.dx(t).dy(e)
				}
			}), u.extend(u.Rect, u.Ellipse, u.Circle, u.Gradient, u.FX, {
				radius: function(t, e) {
					var i = (this._target || this).type;
					return "radial" == i || "circle" == i ? this.attr("r", new u.Number(t)) : this.rx(t).ry(null == e ? t : e)
				}
			}), u.extend(u.Path, {
				length: function() {
					return this.node.getTotalLength()
				},
				pointAt: function(t) {
					return this.node.getPointAtLength(t)
				}
			}), u.extend(u.Parent, u.Text, u.Tspan, u.FX, {
				font: function(t, e) {
					if ("object" == (void 0 === t ? "undefined" : w(t)))
						for (e in t) this.font(e, t[e]);
					return "leading" == t ? this.leading(e) : "anchor" == t ? this.attr("text-anchor", e) : "size" == t ||
						"family" == t || "weight" == t || "stretch" == t || "variant" == t || "style" == t ? this.attr("font-" +
							t, e) : this.attr(t, e)
				}
			}), u.Set = u.invent({
				create: function(t) {
					Array.isArray(t) ? this.members = t : this.clear()
				},
				extend: {
					add: function() {
						var t, e, i = [].slice.call(arguments);
						for (t = 0, e = i.length; t < e; t++) this.members.push(i[t]);
						return this
					},
					remove: function(t) {
						var e = this.index(t);
						return -1 < e && this.members.splice(e, 1), this
					},
					each: function(t) {
						for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]);
						return this
					},
					clear: function() {
						return this.members = [], this
					},
					length: function() {
						return this.members.length
					},
					has: function(t) {
						return 0 <= this.index(t)
					},
					index: function(t) {
						return this.members.indexOf(t)
					},
					get: function(t) {
						return this.members[t]
					},
					first: function() {
						return this.get(0)
					},
					last: function() {
						return this.get(this.members.length - 1)
					},
					valueOf: function() {
						return this.members
					},
					bbox: function() {
						if (0 == this.members.length) return new u.RBox;
						var t = this.members[0].rbox(this.members[0].doc());
						return this.each(function() {
							t = t.merge(this.rbox(this.doc()))
						}), t
					}
				},
				construct: {
					set: function(t) {
						return new u.Set(t)
					}
				}
			}), u.FX.Set = u.invent({
				create: function(t) {
					this.set = t
				}
			}), u.Set.inherit = function() {
				var t = [];
				for (var e in u.Shape.prototype) "function" == typeof u.Shape.prototype[e] && "function" != typeof u.Set.prototype[
					e] && t.push(e);
				for (var e in t.forEach(function(i) {
						u.Set.prototype[i] = function() {
							for (var t = 0, e = this.members.length; t < e; t++) this.members[t] && "function" == typeof this.members[
								t][i] && this.members[t][i].apply(this.members[t], arguments);
							return "animate" == i ? this.fx || (this.fx = new u.FX.Set(this)) : this
						}
					}), t = [], u.FX.prototype) "function" == typeof u.FX.prototype[e] && "function" != typeof u.FX.Set.prototype[
					e] && t.push(e);
				t.forEach(function(i) {
					u.FX.Set.prototype[i] = function() {
						for (var t = 0, e = this.set.members.length; t < e; t++) this.set.members[t].fx[i].apply(this.set.members[
							t].fx, arguments);
						return this
					}
				})
			}, u.extend(u.Element, {
				data: function(e, t, i) {
					if ("object" == (void 0 === e ? "undefined" : w(e)))
						for (t in e) this.data(t, e[t]);
					else if (arguments.length < 2) try {
						return JSON.parse(this.attr("data-" + e))
					} catch (t) {
						return this.attr("data-" + e)
					} else this.attr("data-" + e, null === t ? null : !0 === i || "string" == typeof t || "number" == typeof t ?
						t : JSON.stringify(t));
					return this
				}
			}), u.extend(u.Element, {
				remember: function(t, e) {
					if ("object" == w(t))
						for (var e in t) this.remember(e, t[e]);
					else {
						if (1 == arguments.length) return this.memory()[t];
						this.memory()[t] = e
					}
					return this
				},
				forget: function() {
					if (0 == arguments.length) this._memory = {};
					else
						for (var t = arguments.length - 1; 0 <= t; t--) delete this.memory()[arguments[t]];
					return this
				},
				memory: function() {
					return this._memory || (this._memory = {})
				}
			}), u.get = function(t) {
				var e = n.getElementById(function(t) {
					var e = (t || "").toString().match(u.regex.reference);
					if (e) return e[1]
				}(t) || t);
				return u.adopt(e)
			}, u.select = function(t, e) {
				return new u.Set(u.utils.map((e || n).querySelectorAll(t), function(t) {
					return u.adopt(t)
				}))
			}, u.extend(u.Parent, {
				select: function(t) {
					return u.select(t, this.node)
				}
			});
			var m = "abcdef".split("");
			if ("function" != typeof r.CustomEvent) {
				var y = function(t, e) {
					e = e || {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					var i = n.createEvent("CustomEvent");
					return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
				};
				y.prototype = r.Event.prototype, u.CustomEvent = y
			} else u.CustomEvent = r.CustomEvent;
			return function(n) {
				for (var s = 0, t = ["moz", "webkit"], e = 0; e < t.length && !r.requestAnimationFrame; ++e) n.requestAnimationFrame =
					n[t[e] + "RequestAnimationFrame"], n.cancelAnimationFrame = n[t[e] + "CancelAnimationFrame"] || n[t[e] +
						"CancelRequestAnimationFrame"];
				n.requestAnimationFrame = n.requestAnimationFrame || function(t) {
					var e = (new Date).getTime(),
						i = Math.max(0, 16 - (e - s)),
						a = n.setTimeout(function() {
							t(e + i)
						}, i);
					return s = e + i, a
				}, n.cancelAnimationFrame = n.cancelAnimationFrame || n.clearTimeout
			}(r), u
		}, void 0 === (a = function() {
			return s(n, n.document)
		}.call(e, i, e, t)) || (t.exports = a)
	}, function(t, e, i) {
		"use strict";
		! function() {
			function h(t, e, i, a, n, s, r) {
				for (var o = t.slice(e, i || r), l = a.slice(n, s || r), h = 0, c = {
						pos: [0, 0],
						start: [0, 0]
					}, u = {
						pos: [0, 0],
						start: [0, 0]
					};;) {
					if (o[h] = d.call(c, o[h]), l[h] = d.call(u, l[h]), o[h][0] != l[h][0] || "M" == o[h][0] || "A" == o[h][0] &&
						(o[h][4] != l[h][4] || o[h][5] != l[h][5]) ? (Array.prototype.splice.apply(o, [h, 1].concat(p.call(c, o[h]))),
							Array.prototype.splice.apply(l, [h, 1].concat(p.call(u, l[h])))) : (o[h] = f.call(c, o[h]), l[h] = f.call(u,
							l[h])), ++h == o.length && h == l.length) break;
					h == o.length && o.push(["C", c.pos[0], c.pos[1], c.pos[0], c.pos[1], c.pos[0], c.pos[1]]), h == l.length && l
						.push(["C", u.pos[0], u.pos[1], u.pos[0], u.pos[1], u.pos[0], u.pos[1]])
				}
				return {
					start: o,
					dest: l
				}
			}

			function d(t) {
				switch (t[0]) {
					case "z":
					case "Z":
						t[0] = "L", t[1] = this.start[0], t[2] = this.start[1];
						break;
					case "H":
						t[0] = "L", t[2] = this.pos[1];
						break;
					case "V":
						t[0] = "L", t[2] = t[1], t[1] = this.pos[0];
						break;
					case "T":
						t[0] = "Q", t[3] = t[1], t[4] = t[2], t[1] = this.reflection[1], t[2] = this.reflection[0];
						break;
					case "S":
						t[0] = "C", t[6] = t[4], t[5] = t[3], t[4] = t[2], t[3] = t[1], t[2] = this.reflection[1], t[1] = this.reflection[
							0]
				}
				return t
			}

			function f(t) {
				var e = t.length;
				return this.pos = [t[e - 2], t[e - 1]], -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e -
					4], 2 * this.pos[1] - t[e - 3]]), t
			}

			function p(t) {
				var e = [t];
				switch (t[0]) {
					case "M":
						return this.pos = this.start = [t[1], t[2]], e;
					case "L":
						t[5] = t[3] = t[1], t[6] = t[4] = t[2], t[1] = this.pos[0], t[2] = this.pos[1];
						break;
					case "Q":
						t[6] = t[4], t[5] = t[3], t[4] = 1 * t[4] / 3 + 2 * t[2] / 3, t[3] = 1 * t[3] / 3 + 2 * t[1] / 3, t[2] = 1 *
							this.pos[1] / 3 + 2 * t[2] / 3, t[1] = 1 * this.pos[0] / 3 + 2 * t[1] / 3;
						break;
					case "A":
						t = (e = function(t, e) {
							var i, a, n, s, r, o, l, h, c, u, d, f, p, g, x, v, b, m, y, w, k, S, A, C, P, M, L = Math.abs(e[1]),
								T = Math.abs(e[2]),
								E = e[3] % 360,
								z = e[4],
								X = e[5],
								O = e[6],
								Y = e[7],
								I = new SVG.Point(t),
								F = new SVG.Point(O, Y),
								D = [];
							if (0 === L || 0 === T || I.x === F.x && I.y === F.y) return [
								["C", I.x, I.y, F.x, F.y, F.x, F.y]
							];
							i = new SVG.Point((I.x - F.x) / 2, (I.y - F.y) / 2).transform((new SVG.Matrix).rotate(E)), 1 < (a = i.x *
								i.x / (L * L) + i.y * i.y / (T * T)) && (a = Math.sqrt(a), L *= a, T *= a);
							n = (new SVG.Matrix).rotate(E).scale(1 / L, 1 / T).rotate(-E), I = I.transform(n), F = F.transform(n), s = [
									F.x - I.x, F.y - I.y
								], o = s[0] * s[0] + s[1] * s[1], r = Math.sqrt(o), s[0] /= r, s[1] /= r, l = o < 4 ? Math.sqrt(1 - o / 4) :
								0, z === X && (l *= -1);
							h = new SVG.Point((F.x + I.x) / 2 + l * -s[1], (F.y + I.y) / 2 + l * s[0]), c = new SVG.Point(I.x - h.x, I
									.y - h.y), u = new SVG.Point(F.x - h.x, F.y - h.y), d = Math.acos(c.x / Math.sqrt(c.x * c.x + c.y * c.y)),
								c.y < 0 && (d *= -1);
							f = Math.acos(u.x / Math.sqrt(u.x * u.x + u.y * u.y)), u.y < 0 && (f *= -1);
							X && f < d && (f += 2 * Math.PI);
							!X && d < f && (f -= 2 * Math.PI);
							for (g = Math.ceil(2 * Math.abs(d - f) / Math.PI), v = [], p = (f - (b = d)) / g, x = 4 * Math.tan(p / 4) /
								3, k = 0; k <= g; k++) y = Math.cos(b), m = Math.sin(b), w = new SVG.Point(h.x + y, h.y + m), v[k] = [new SVG
								.Point(w.x + x * m, w.y - x * y), w, new SVG.Point(w.x - x * m, w.y + x * y)
							], b += p;
							for (v[0][0] = v[0][1].clone(), v[v.length - 1][2] = v[v.length - 1][1].clone(), n = (new SVG.Matrix).rotate(
									E).scale(L, T).rotate(-E), k = 0, S = v.length; k < S; k++) v[k][0] = v[k][0].transform(n), v[k][1] = v[
								k][1].transform(n), v[k][2] = v[k][2].transform(n);
							for (k = 1, S = v.length; k < S; k++) w = v[k - 1][2], A = w.x, C = w.y, w = v[k][0], P = w.x, M = w.y, w =
								v[k][1], O = w.x, Y = w.y, D.push(["C", A, C, P, M, O, Y]);
							return D
						}(this.pos, t))[0]
				}
				return t[0] = "C", this.pos = [t[5], t[6]], this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]], e
			}

			function c(t, e) {
				if (!1 === e) return !1;
				for (var i = e, a = t.length; i < a; ++i)
					if ("M" == t[i][0]) return i;
				return !1
			}
			SVG.extend(SVG.PathArray, {
				morph: function(t) {
					for (var e = this.value, i = this.parse(t), a = 0, n = 0, s = !1, r = !1; !1 !== a || !1 !== n;) {
						var o;
						s = c(e, !1 !== a && a + 1), r = c(i, !1 !== n && n + 1), !1 === a && (a = 0 == (o = new SVG.PathArray(l.start)
								.bbox()).height || 0 == o.width ? e.push(e[0]) - 1 : e.push(["M", o.x + o.width / 2, o.y + o.height / 2]) -
							1), !1 === n && (n = 0 == (o = new SVG.PathArray(l.dest).bbox()).height || 0 == o.width ? i.push(i[0]) -
							1 : i.push(["M", o.x + o.width / 2, o.y + o.height / 2]) - 1);
						var l = h(e, a, s, i, n, r);
						e = e.slice(0, a).concat(l.start, !1 === s ? [] : e.slice(s)), i = i.slice(0, n).concat(l.dest, !1 === r ?
							[] : i.slice(r)), a = !1 !== s && a + l.start.length, n = !1 !== r && n + l.dest.length
					}
					return this.value = e, this.destination = new SVG.PathArray, this.destination.value = i, this
				}
			})
		}()
	}, function(t, e, i) {
		"use strict";
		! function() {
			(function() {
				function e(t) {
					t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t
						.doc().node.createSVGPoint()
				}
				e.prototype.transformPoint = function(t, e, i) {
					return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset),
						this.p.matrixTransform(i || this.m)
				}, e.prototype._extractPosition = function(t) {
					return {
						x: null != t.clientX ? t.clientX : t.touches[0].clientX,
						y: null != t.clientY ? t.clientY : t.touches[0].clientY
					}
				}, e.prototype.init = function(t) {
					var e = this;
					if (this.stop(), "stop" !== t) {
						for (var i in this.options = {}, this.el.resize.defaults) this.options[i] = this.el.resize.defaults[i],
							void 0 !== t[i] && (this.options[i] = t[i]);
						this.el.on("lt.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("rt.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("rb.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("lb.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("t.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("r.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("b.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("l.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("rot.resize", function(t) {
							e.resize(t || window.event)
						}), this.el.on("point.resize", function(t) {
							e.resize(t || window.event)
						}), this.update()
					}
				}, e.prototype.stop = function() {
					return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"),
						this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el
						.off("rot.resize"), this.el.off("point.resize"), this
				}, e.prototype.resize = function(t) {
					var e = this;
					this.m = this.el.node.getScreenCTM().inverse(), this.offset = {
						x: window.pageXOffset,
						y: window.pageYOffset
					};
					var i = this._extractPosition(t.detail.event);
					if (this.parameters = {
							type: this.el.type,
							p: this.transformPoint(i.x, i.y),
							x: t.detail.x,
							y: t.detail.y,
							box: this.el.bbox(),
							rotation: this.el.transform().rotation
						}, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t.detail
						.i) {
						var a = this.el.array().valueOf();
						this.parameters.i = t.detail.i, this.parameters.pointCoords = [a[t.detail.i][0], a[t.detail.i][1]]
					}
					switch (t.type) {
						case "lt":
							this.calc = function(t, e) {
								var i = this.snapToGrid(t, e);
								if (0 < this.parameters.box.width - i[0] && 0 < this.parameters.box.height - i[1]) {
									if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box
										.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
									i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y + i[1]).size(
										this.parameters.box.width - i[0], this.parameters.box.height - i[1])
								}
							};
							break;
						case "rt":
							this.calc = function(t, e) {
								var i = this.snapToGrid(t, e, 2);
								if (0 < this.parameters.box.width + i[0] && 0 < this.parameters.box.height - i[1]) {
									if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box
										.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
									i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).size(
										this.parameters.box.width + i[0], this.parameters.box.height - i[1])
								}
							};
							break;
						case "rb":
							this.calc = function(t, e) {
								var i = this.snapToGrid(t, e, 0);
								if (0 < this.parameters.box.width + i[0] && 0 < this.parameters.box.height + i[1]) {
									if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box
										.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
									i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters
										.box.width + i[0], this.parameters.box.height + i[1])
								}
							};
							break;
						case "lb":
							this.calc = function(t, e) {
								var i = this.snapToGrid(t, e, 1);
								if (0 < this.parameters.box.width - i[0] && 0 < this.parameters.box.height + i[1]) {
									if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box
										.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
									i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).size(
										this.parameters.box.width - i[0], this.parameters.box.height + i[1])
								}
							};
							break;
						case "t":
							this.calc = function(t, e) {
								var i = this.snapToGrid(t, e, 2);
								if (0 < this.parameters.box.height - i[1]) {
									if ("text" === this.parameters.type) return;
									this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).height(this.parameters.box.height - i[
										1])
								}
							};
							break;
						case "r":
							this.calc = function(t, e) {
								var i = this.snapToGrid(t, e, 0);
								if (0 < this.parameters.box.width + i[0]) {
									if ("text" === this.parameters.type) return;
									this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i[0])
								}
							};
							break;
						case "b":
							this.calc = function(t, e) {
								var i = this.snapToGrid(t, e, 0);
								if (0 < this.parameters.box.height + i[1]) {
									if ("text" === this.parameters.type) return;
									this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i[1])
								}
							};
							break;
						case "l":
							this.calc = function(t, e) {
								var i = this.snapToGrid(t, e, 1);
								if (0 < this.parameters.box.width - i[0]) {
									if ("text" === this.parameters.type) return;
									this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).width(this.parameters.box.width - i[0])
								}
							};
							break;
						case "rot":
							this.calc = function(t, e) {
								var i = t + this.parameters.p.x,
									a = e + this.parameters.p.y,
									n = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters
										.p.x - this.parameters.box.x - this.parameters.box.width / 2),
									s = 180 * (Math.atan2(a - this.parameters.box.y - this.parameters.box.height / 2, i - this.parameters.box
										.x - this.parameters.box.width / 2) - n) / Math.PI;
								this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(this.parameters.rotation + s - s %
									this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy)
							};
							break;
						case "point":
							this.calc = function(t, e) {
								var i = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]),
									a = this.el.array().valueOf();
								a[this.parameters.i][0] = this.parameters.pointCoords[0] + i[0], a[this.parameters.i][1] = this.parameters
									.pointCoords[1] + i[1], this.el.plot(a)
							}
					}
					this.el.fire("resizestart", {
						dx: this.parameters.x,
						dy: this.parameters.y,
						event: t
					}), SVG.on(window, "touchmove.resize", function(t) {
						e.update(t || window.event)
					}), SVG.on(window, "touchend.resize", function() {
						e.done()
					}), SVG.on(window, "mousemove.resize", function(t) {
						e.update(t || window.event)
					}), SVG.on(window, "mouseup.resize", function() {
						e.done()
					})
				}, e.prototype.update = function(t) {
					if (t) {
						var e = this._extractPosition(t),
							i = this.transformPoint(e.x, e.y),
							a = i.x - this.parameters.p.x,
							n = i.y - this.parameters.p.y;
						this.lastUpdateCall = [a, n], this.calc(a, n), this.el.fire("resizing", {
							dx: a,
							dy: n,
							event: t
						})
					} else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1])
				}, e.prototype.done = function() {
					this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(
						window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone")
				}, e.prototype.snapToGrid = function(t, e, i, a) {
					var n;
					return n = void 0 !== a ? [(i + t) % this.options.snapToGrid, (a + e) % this.options.snapToGrid] : (i = null ==
						i ? 3 : i, [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid,
							(this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid
						]), t -= Math.abs(n[0]) < this.options.snapToGrid / 2 ? n[0] : n[0] - (t < 0 ? -this.options.snapToGrid :
						this.options.snapToGrid), e -= Math.abs(n[1]) < this.options.snapToGrid / 2 ? n[1] : n[1] - (e < 0 ? -this
						.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, a)
				}, e.prototype.constraintToBox = function(t, e, i, a) {
					var n, s, r = this.options.constraint || {};
					return s = void 0 !== a ? (n = i, a) : (n = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width),
							this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), void 0 !== r.minX && n + t < r.minX &&
						(t = r.minX - n), void 0 !== r.maxX && n + t > r.maxX && (t = r.maxX - n), void 0 !== r.minY && s + e < r.minY &&
						(e = r.minY - s), void 0 !== r.maxY && s + e > r.maxY && (e = r.maxY - s), [t, e]
				}, e.prototype.checkAspectRatio = function(t) {
					if (!this.options.saveAspectRatio) return t;
					var e = t.slice(),
						i = this.parameters.box.width / this.parameters.box.height,
						a = this.parameters.box.width + t[0],
						n = this.parameters.box.height - t[1],
						s = a / n;
					return s < i ? e[1] = a / i - this.parameters.box.height : i < s && (e[0] = this.parameters.box.width - n *
						i), e
				}, SVG.extend(SVG.Element, {
					resize: function(t) {
						return (this.remember("_resizeHandler") || new e(this)).init(t || {}), this
					}
				}), SVG.Element.prototype.resize.defaults = {
					snapToAngle: .1,
					snapToGrid: 1,
					constraint: {},
					saveAspectRatio: !1
				}
			}).call(this)
		}()
	}, function(t, e, i) {
		"use strict";
		var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
				typeof t
		};
		! function() {
			function i(t) {
				(this.el = t).remember("_selectHandler", this), this.pointSelection = {
					isSelected: !1
				}, this.rectSelection = {
					isSelected: !1
				}
			}
			i.prototype.init = function(t, e) {
				var i = this.el.bbox();
				for (var a in this.options = {}, this.el.selectize.defaults) this.options[a] = this.el.selectize.defaults[a],
					void 0 !== e[a] && (this.options[a] = e[a]);
				this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(
					this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(
					this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup()
			}, i.prototype.selectPoints = function(t) {
				return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(),
					this.drawCircles()), this
			}, i.prototype.getPointArray = function() {
				var e = this.el.bbox();
				return this.el.array().valueOf().map(function(t) {
					return [t[0] - e.x, t[1] - e.y]
				})
			}, i.prototype.drawCircles = function() {
				for (var n = this, t = this.getPointArray(), e = 0, i = t.length; e < i; ++e) {
					var a = function(a) {
						return function(t) {
							(t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
							var e = t.pageX || t.touches[0].pageX,
								i = t.pageY || t.touches[0].pageY;
							n.el.fire("point", {
								x: e,
								y: i,
								i: a,
								event: t
							})
						}
					}(e);
					this.pointSelection.set.add(this.nested.circle(this.options.radius).center(t[e][0], t[e][1]).addClass(this.options
						.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", a).on("mousedown", a))
				}
			}, i.prototype.updatePointSelection = function() {
				var e = this.getPointArray();
				this.pointSelection.set.each(function(t) {
					this.cx() === e[t][0] && this.cy() === e[t][1] || this.center(e[t][0], e[t][1])
				})
			}, i.prototype.updateRectSelection = function() {
				var t = this.el.bbox();
				this.rectSelection.set.get(0).attr({
						width: t.width,
						height: t.height
					}), this.options.points && (this.rectSelection.set.get(2).center(t.width, 0), this.rectSelection.set.get(3).center(
							t.width, t.height), this.rectSelection.set.get(4).center(0, t.height), this.rectSelection.set.get(5).center(
							t.width / 2, 0), this.rectSelection.set.get(6).center(t.width, t.height / 2), this.rectSelection.set.get(7)
						.center(t.width / 2, t.height), this.rectSelection.set.get(8).center(0, t.height / 2)), this.options.rotationPoint &&
					(this.options.points ? this.rectSelection.set.get(9).center(t.width / 2, 20) : this.rectSelection.set.get(1).center(
						t.width / 2, 20))
			}, i.prototype.selectRect = function(t) {
				var n = this,
					e = this.el.bbox();

				function i(a) {
					return function(t) {
						(t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
						var e = t.pageX || t.touches[0].pageX,
							i = t.pageY || t.touches[0].pageY;
						n.el.fire(a, {
							x: e,
							y: i,
							event: t
						})
					}
				}
				if (this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(),
					this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(e.width, e.height).addClass(this
						.options.classRect)), this.options.points && !this.rectSelection.set.get(1)) {
					var a = "touchstart",
						s = "mousedown";
					this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0, 0).attr("class", this.options.classPoints +
							"_lt").on(s, i("lt")).on(a, i("lt"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(
							e.width, 0).attr("class", this.options.classPoints + "_rt").on(s, i("rt")).on(a, i("rt"))), this.rectSelection
						.set.add(this.nested.circle(this.options.radius).center(e.width, e.height).attr("class", this.options.classPoints +
							"_rb").on(s, i("rb")).on(a, i("rb"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(
							0, e.height).attr("class", this.options.classPoints + "_lb").on(s, i("lb")).on(a, i("lb"))), this.rectSelection
						.set.add(this.nested.circle(this.options.radius).center(e.width / 2, 0).attr("class", this.options.classPoints +
							"_t").on(s, i("t")).on(a, i("t"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(
							e.width, e.height / 2).attr("class", this.options.classPoints + "_r").on(s, i("r")).on(a, i("r"))), this.rectSelection
						.set.add(this.nested.circle(this.options.radius).center(e.width / 2, e.height).attr("class", this.options.classPoints +
							"_b").on(s, i("b")).on(a, i("b"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(
							0, e.height / 2).attr("class", this.options.classPoints + "_l").on(s, i("l")).on(a, i("l"))), this.rectSelection
						.set.each(function() {
							this.addClass(n.options.classPoints)
						})
				}
				if (this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points &&
						!this.rectSelection.set.get(1))) {
					var r = function(t) {
						(t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
						var e = t.pageX || t.touches[0].pageX,
							i = t.pageY || t.touches[0].pageY;
						n.el.fire("rot", {
							x: e,
							y: i,
							event: t
						})
					};
					this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width / 2, 20).attr("class", this
						.options.classPoints + "_rot").on("touchstart", r).on("mousedown", r))
				}
			}, i.prototype.handler = function() {
				var t = this.el.bbox();
				this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(),
					this.pointSelection.isSelected && this.updatePointSelection()
			}, i.prototype.observe = function() {
				var t = this;
				if (MutationObserver)
					if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst ||
						new MutationObserver(function() {
							t.handler()
						}), this.observerInst.observe(this.el.node, {
							attributes: !0
						});
					else try {
						this.observerInst.disconnect(), delete this.observerInst
					} catch (t) {} else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection
						.isSelected) && this.el.on("DOMAttrModified.select", function() {
						t.handler()
					})
			}, i.prototype.cleanup = function() {
				!this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function() {
						this.remove()
					}), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection
					.set && (this.pointSelection.set.each(function() {
						this.remove()
					}), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection
					.isSelected || (this.nested.remove(), delete this.nested)
			}, SVG.extend(SVG.Element, {
				selectize: function(t, e) {
					return "object" === (void 0 === t ? "undefined" : a(t)) && (e = t, t = !0), (this.remember("_selectHandler") ||
						new i(this)).init(void 0 === t || t, e || {}), this
				}
			}), SVG.Element.prototype.selectize.defaults = {
				points: !0,
				classRect: "svg_select_boundingRect",
				classPoints: "svg_select_points",
				radius: 7,
				rotationPoint: !0,
				deepSelect: !1
			}
		}()
	}, function(t, e, i) {
		"use strict";
		! function() {
			if (!(void 0 === window.Element || "classList" in document.documentElement)) {
				var t, e, i, a = Array.prototype,
					n = a.push,
					s = a.splice,
					r = a.join;
				o.prototype = {
					add: function(t) {
						this.contains(t) || (n.call(this, t), this.el.className = this.toString())
					},
					contains: function(t) {
						return -1 != this.el.className.indexOf(t)
					},
					item: function(t) {
						return this[t] || null
					},
					remove: function(t) {
						if (this.contains(t)) {
							for (var e = 0; e < this.length && this[e] != t; e++);
							s.call(this, e, 1), this.el.className = this.toString()
						}
					},
					toString: function() {
						return r.call(this, " ")
					},
					toggle: function(t) {
						return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t)
					}
				}, window.DOMTokenList = o, t = Element.prototype, e = "classList", i = function() {
					return new o(this)
				}, Object.defineProperty ? Object.defineProperty(t, e, {
					get: i
				}) : t.__defineGetter__(e, i)
			}

			function o(t) {
				for (var e = (this.el = t).className.replace(/^\s+|\s+$/g, "").split(/\s+/), i = 0; i < e.length; i++) n.call(
					this, e[i])
			}
		}()
	}, function(t, e, i) {
		(t.exports = i(124)(!1)).push([t.i,
			'.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart are */\n  /* overflow: hidden; */\n}\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-legend-series {\n  cursor: pointer;\n}\n\n.apexcharts-legend-series.no-click {\n  cursor: auto;\n}\n\n.inactive-legend {\n  opacity: 0.45;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-gridline, .apexcharts-text {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n.apexcharts-tooltip.light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n.apexcharts-tooltip.dark {\n  color: #fff;\n  background: rgba(30,30,30, 0.8);\n}\n\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.apexcharts-tooltip.light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n.apexcharts-tooltip.dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #222;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value, \n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 1px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n.apexcharts-tooltip-series-group.active, .apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n.apexcharts-tooltip-candlestick > div {\n  margin: 4px 0;\n}\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip:after, .apexcharts-xaxistooltip:before {\n\tleft: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-left: -6px;\n}\n.apexcharts-xaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after, .apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top:after, .apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip:after, .apexcharts-yaxistooltip:before {\n\ttop: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n.apexcharts-yaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-top: -6px;\n}\n.apexcharts-yaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after, .apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right:after, .apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip.active {\n  opacity: 1;\n}\n\n.apexcharts-xcrosshairs, .apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.active, .apexcharts-ycrosshairs.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-zoom-rect {\n  pointer-events: none;\n}\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_points, .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n.svg_select_points_l, .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n  fill: #888;\n}\n.zoomable .hovering-zoom {\n  cursor: crosshair\n}\n.zoomable .hovering-pan {\n  cursor: move\n}\n\n.apexcharts-xaxis,\n.apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.apexcharts-zoom-icon, \n.apexcharts-zoom-in-icon,\n.apexcharts-zoom-out-icon,\n.apexcharts-reset-zoom-icon, \n.apexcharts-pan-icon, \n.apexcharts-selection-icon,\n.apexcharts-download-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n\n.apexcharts-zoom-icon svg, \n.apexcharts-zoom-in-icon svg,\n.apexcharts-zoom-out-icon svg,\n.apexcharts-reset-zoom-icon svg,\n.apexcharts-download-icon svg {\n  fill: #6E8192;\n}\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.86)\n}\n.apexcharts-zoom-icon.selected svg, \n.apexcharts-selection-icon.selected svg, \n.apexcharts-reset-zoom-icon.selected svg {\n  fill: #008FFB;\n}\n.apexcharts-selection-icon:not(.selected):hover svg,\n.apexcharts-zoom-icon:not(.selected):hover svg, \n.apexcharts-zoom-in-icon:hover svg, \n.apexcharts-zoom-out-icon:hover svg, \n.apexcharts-reset-zoom-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon, .apexcharts-download-icon {\n  margin-right: 3px;\n  position: relative;\n  top: 1px;\n}\n.apexcharts-reset-zoom-icon {\n  margin-left: 7px;\n}\n.apexcharts-zoom-icon {\n  transform: scale(1);\n}\n.apexcharts-download-icon {\n  transform: scale(0.9)\n}\n\n.apexcharts-zoom-in-icon, .apexcharts-zoom-out-icon {\n  transform: scale(0.8)\n}\n\n.apexcharts-zoom-out-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.72);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n.apexcharts-pan-icon.selected svg {\n  stroke: #008FFB;\n}\n.apexcharts-pan-icon:not(.selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  top: 0px;\n  right: 3px;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 5px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; \n}\n\n.apexcharts-toolbar svg {\n  pointer-events: none;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-toolbar {\n    /*opacity: 0;*/\n  }\n\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  } \n}\n\n.apexcharts-datalabel.hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabel, .apexcharts-datalabel-label, .apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-showAfterDelay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}',
			""
		])
	}, function(t, e, i) {
		var a = i(156);
		"string" == typeof a && (a = [
			[t.i, a, ""]
		]);
		var n = {
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		i(158)(a, n);
		a.locals && (t.exports = a.locals)
	}, function(t, e, i) {
		var a, n, s, l = {},
			h = (a = function() {
				return window && document && document.all && !window.atob
			}, function() {
				return void 0 === n && (n = a.apply(this, arguments)), n
			}),
			r = (s = {}, function(t) {
				if ("function" == typeof t) return t();
				if (void 0 === s[t]) {
					var e = function(t) {
						return document.querySelector(t)
					}.call(this, t);
					if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
						e = e.contentDocument.head
					} catch (t) {
						e = null
					}
					s[t] = e
				}
				return s[t]
			}),
			c = null,
			u = 0,
			o = [],
			d = i(148);

		function f(t, e) {
			for (var i = 0; i < t.length; i++) {
				var a = t[i],
					n = l[a.id];
				if (n) {
					n.refs++;
					for (var s = 0; s < n.parts.length; s++) n.parts[s](a.parts[s]);
					for (; s < a.parts.length; s++) n.parts.push(m(a.parts[s], e))
				} else {
					var r = [];
					for (s = 0; s < a.parts.length; s++) r.push(m(a.parts[s], e));
					l[a.id] = {
						id: a.id,
						refs: 1,
						parts: r
					}
				}
			}
		}

		function p(t, e) {
			for (var i = [], a = {}, n = 0; n < t.length; n++) {
				var s = t[n],
					r = e.base ? s[0] + e.base : s[0],
					o = {
						css: s[1],
						media: s[2],
						sourceMap: s[3]
					};
				a[r] ? a[r].parts.push(o) : i.push(a[r] = {
					id: r,
					parts: [o]
				})
			}
			return i
		}

		function g(t, e) {
			var i = r(t.insertInto);
			if (!i) throw new Error(
				"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
			);
			var a = o[o.length - 1];
			if ("top" === t.insertAt) a ? a.nextSibling ? i.insertBefore(e, a.nextSibling) : i.appendChild(e) : i.insertBefore(
				e, i.firstChild), o.push(e);
			else if ("bottom" === t.insertAt) i.appendChild(e);
			else {
				if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error(
					"[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
				);
				var n = r(t.insertInto + " " + t.insertAt.before);
				i.insertBefore(e, n)
			}
		}

		function x(t) {
			if (null === t.parentNode) return !1;
			t.parentNode.removeChild(t);
			var e = o.indexOf(t);
			0 <= e && o.splice(e, 1)
		}

		function v(t) {
			var e = document.createElement("style");
			return t.attrs.type = "text/css", b(e, t.attrs), g(t, e), e
		}

		function b(e, i) {
			Object.keys(i).forEach(function(t) {
				e.setAttribute(t, i[t])
			})
		}

		function m(e, t) {
			var i, a, n, s, r, o;
			if (t.transform && e.css) {
				if (!(s = t.transform(e.css))) return function() {};
				e.css = s
			}
			if (t.singleton) {
				var l = u++;
				i = c || (c = v(t)), a = k.bind(null, i, l, !1), n = k.bind(null, i, l, !0)
			} else n = e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" ==
				typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = t, o = document.createElement(
					"link"), r.attrs.type = "text/css", r.attrs.rel = "stylesheet", b(o, r.attrs), g(r, o), a = function(t, e, i) {
					var a = i.css,
						n = i.sourceMap,
						s = void 0 === e.convertToAbsoluteUrls && n;
					(e.convertToAbsoluteUrls || s) && (a = d(a));
					n && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(
						n)))) + " */");
					var r = new Blob([a], {
							type: "text/css"
						}),
						o = t.href;
					t.href = URL.createObjectURL(r), o && URL.revokeObjectURL(o)
				}.bind(null, i = o, t), function() {
					x(i), i.href && URL.revokeObjectURL(i.href)
				}) : (i = v(t), a = function(t, e) {
					var i = e.css,
						a = e.media;
					a && t.setAttribute("media", a);
					if (t.styleSheet) t.styleSheet.cssText = i;
					else {
						for (; t.firstChild;) t.removeChild(t.firstChild);
						t.appendChild(document.createTextNode(i))
					}
				}.bind(null, i), function() {
					x(i)
				});
			return a(e),
				function(t) {
					if (t) {
						if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
						a(e = t)
					} else n()
				}
		}
		t.exports = function(t, r) {
			if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error(
				"The style-loader cannot be used in a non-browser environment");
			(r = r || {}).attrs = "object" == typeof r.attrs ? r.attrs : {}, r.singleton || "boolean" == typeof r.singleton ||
				(r.singleton = h()), r.insertInto || (r.insertInto = "head"), r.insertAt || (r.insertAt = "bottom");
			var o = p(t, r);
			return f(o, r),
				function(t) {
					for (var e = [], i = 0; i < o.length; i++) {
						var a = o[i];
						(n = l[a.id]).refs--, e.push(n)
					}
					t && f(p(t, r), r);
					for (i = 0; i < e.length; i++) {
						var n;
						if (0 === (n = e[i]).refs) {
							for (var s = 0; s < n.parts.length; s++) n.parts[s]();
							delete l[n.id]
						}
					}
				}
		};
		var y, w = (y = [], function(t, e) {
			return y[t] = e, y.filter(Boolean).join("\n")
		});

		function k(t, e, i, a) {
			var n = i ? "" : a.css;
			if (t.styleSheet) t.styleSheet.cssText = w(e, n);
			else {
				var s = document.createTextNode(n),
					r = t.childNodes;
				r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(s, r[e]) : t.appendChild(s)
			}
		}
	}, function(t, e) {
		t.exports =
			'<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3.2"></circle><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'
	}, function(t, e) {
		t.exports =
			'<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'
	}, function(t, e) {
		t.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
	}, function(t, e) {
		t.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" viewBox="0 0 24 24"><defs><path d="M0 0h24v24H0z" id="a"></path></defs><clipPath id="b"><use overflow="visible" xlink:href="#a"></use></clipPath><path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></svg>'
	}, function(t, e) {
		t.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
	}, function(t, e) {
		t.exports =
			'<svg fill="#6E8192" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"></path></svg>'
	}, function(t, e) {
		t.exports =
			'<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></svg>'
	}, function(t, e, i) {
		i(86), i(84), i(85), i(83), i(82), i(87), t.exports = i(88)
	}])
});
open file map error!