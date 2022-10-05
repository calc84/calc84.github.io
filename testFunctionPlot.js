! function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.functionPlot = n() : t.functionPlot = n()
}(self, (() => (() => {
    var t = {
            5248: (t, n, e) => {
                "use strict";
                t.exports = e(9976)
            },
            517: t => {
                "use strict";
                t.exports = function () {
                    var t = Object.create(Math);
                    return t.factory = function (t) {
                        if ("number" != typeof t) throw new TypeError("built-in math factory only accepts numbers");
                        return Number(t)
                    }, t.add = function (t, n) {
                        return t + n
                    }, t.sub = function (t, n) {
                        return t - n
                    }, t.mul = function (t, n) {
                        return t * n
                    }, t.div = function (t, n) {
                        return t / n
                    }, t.mod = function (t, n) {
                        return t % n
                    }, t.factorial = function (t) {
                        for (var n = 1, e = 2; e <= t; e += 1) n *= e;
                        return n
                    }, t.nthRoot = function (t, n) {
                        var e = n < 0;
                        if (e && (n = -n), 0 === n) throw new Error("Root must be non-zero");
                        if (t < 0 && Math.abs(n) % 2 != 1) throw new Error("Root must be odd when a is negative.");
                        if (0 === t) return 0;
                        if (!isFinite(t)) return e ? 0 : t;
                        var r = Math.pow(Math.abs(t), 1 / n);
                        return r = t < 0 ? -r : r, e ? 1 / r : r
                    }, t.logicalOR = function (t, n) {
                        return t || n
                    }, t.logicalXOR = function (t, n) {
                        return t != n
                    }, t.logicalAND = function (t, n) {
                        return t && n
                    }, t.bitwiseOR = function (t, n) {
                        return t | n
                    }, t.bitwiseXOR = function (t, n) {
                        return t ^ n
                    }, t.bitwiseAND = function (t, n) {
                        return t & n
                    }, t.lessThan = function (t, n) {
                        return t < n
                    }, t.lessEqualThan = function (t, n) {
                        return t <= n
                    }, t.greaterThan = function (t, n) {
                        return t > n
                    }, t.greaterEqualThan = function (t, n) {
                        return t >= n
                    }, t.equal = function (t, n) {
                        return t == n
                    }, t.strictlyEqual = function (t, n) {
                        return t === n
                    }, t.notEqual = function (t, n) {
                        return t != n
                    }, t.strictlyNotEqual = function (t, n) {
                        return t !== n
                    }, t.shiftRight = function (t, n) {
                        return t >> n
                    }, t.shiftLeft = function (t, n) {
                        return t << n
                    }, t.unsignedRightShift = function (t, n) {
                        return t >>> n
                    }, t.negative = function (t) {
                        return -t
                    }, t.positive = function (t) {
                        return t
                    }, t
                }
            },
            9976: (t, n, e) => {
                "use strict";
                var r = e(2223),
                    i = e(517)();

                function o(t) {
                    Object.keys(t).forEach((function (n) {
                        var e = t[n];
                        t[n] = i.factory(e)
                    }))
                }
                t.exports = function (t) {
                    return (new r).setDefs({
                        $$processScope: o
                    }).parse(t).compile(i)
                }, t.exports.math = i
            },
            5627: t => {
                t.exports = function (t, n, e) {
                    return n < e ? t < n ? n : t > e ? e : t : t < e ? e : t > n ? n : t
                }
            },
            4822: t => {
                var n = !1;
                if ("undefined" != typeof Float64Array) {
                    var e = new Float64Array(1),
                        r = new Uint32Array(e.buffer);
                    e[0] = 1, n = !0, 1072693248 === r[1] ? (t.exports = function (t) {
                        return e[0] = t, [r[0], r[1]]
                    }, t.exports.pack = function (t, n) {
                        return r[0] = t, r[1] = n, e[0]
                    }, t.exports.lo = function (t) {
                        return e[0] = t, r[0]
                    }, t.exports.hi = function (t) {
                        return e[0] = t, r[1]
                    }) : 1072693248 === r[0] ? (t.exports = function (t) {
                        return e[0] = t, [r[1], r[0]]
                    }, t.exports.pack = function (t, n) {
                        return r[1] = t, r[0] = n, e[0]
                    }, t.exports.lo = function (t) {
                        return e[0] = t, r[1]
                    }, t.exports.hi = function (t) {
                        return e[0] = t, r[0]
                    }) : n = !1
                }
                if (!n) {
                    var i = new Buffer(8);
                    t.exports = function (t) {
                        return i.writeDoubleLE(t, 0, !0), [i.readUInt32LE(0, !0), i.readUInt32LE(4, !0)]
                    }, t.exports.pack = function (t, n) {
                        return i.writeUInt32LE(t, 0, !0), i.writeUInt32LE(n, 4, !0), i.readDoubleLE(0, !0)
                    }, t.exports.lo = function (t) {
                        return i.writeDoubleLE(t, 0, !0), i.readUInt32LE(0, !0)
                    }, t.exports.hi = function (t) {
                        return i.writeDoubleLE(t, 0, !0), i.readUInt32LE(4, !0)
                    }
                }
                t.exports.sign = function (n) {
                    return t.exports.hi(n) >>> 31
                }, t.exports.exponent = function (n) {
                    return (t.exports.hi(n) << 1 >>> 21) - 1023
                }, t.exports.fraction = function (n) {
                    var e = t.exports.lo(n),
                        r = t.exports.hi(n),
                        i = 1048575 & r;
                    return 2146435072 & r && (i += 1 << 20), [e, i]
                }, t.exports.denormalized = function (n) {
                    return !(2146435072 & t.exports.hi(n))
                }
            },
            7187: t => {
                "use strict";
                var n, e = "object" == typeof Reflect ? Reflect : null,
                    r = e && "function" == typeof e.apply ? e.apply : function (t, n, e) {
                        return Function.prototype.apply.call(t, n, e)
                    };
                n = e && "function" == typeof e.ownKeys ? e.ownKeys : Object.getOwnPropertySymbols ? function (t) {
                    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                } : function (t) {
                    return Object.getOwnPropertyNames(t)
                };
                var i = Number.isNaN || function (t) {
                    return t != t
                };

                function o() {
                    o.init.call(this)
                }
                t.exports = o, t.exports.once = function (t, n) {
                    return new Promise((function (e, r) {
                        function i(e) {
                            t.removeListener(n, o), r(e)
                        }

                        function o() {
                            "function" == typeof t.removeListener && t.removeListener("error", i), e([].slice.call(arguments))
                        }
                        y(t, n, o, {
                            once: !0
                        }), "error" !== n && function (t, n, e) {
                            "function" == typeof t.on && y(t, "error", n, {
                                once: !0
                            })
                        }(t, i)
                    }))
                }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
                var s = 10;

                function a(t) {
                    if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
                }

                function u(t) {
                    return void 0 === t._maxListeners ? o.defaultMaxListeners : t._maxListeners
                }

                function c(t, n, e, r) {
                    var i, o, s, c;
                    if (a(e), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", n, e.listener ? e.listener : e), o = t._events), s = o[n]), void 0 === s) s = o[n] = e, ++t._eventsCount;
                    else if ("function" == typeof s ? s = o[n] = r ? [e, s] : [s, e] : r ? s.unshift(e) : s.push(e), (i = u(t)) > 0 && s.length > i && !s.warned) {
                        s.warned = !0;
                        var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(n) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        l.name = "MaxListenersExceededWarning", l.emitter = t, l.type = n, l.count = s.length, c = l, console && console.warn && console.warn(c)
                    }
                    return t
                }

                function l() {
                    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                }

                function h(t, n, e) {
                    var r = {
                            fired: !1,
                            wrapFn: void 0,
                            target: t,
                            type: n,
                            listener: e
                        },
                        i = l.bind(r);
                    return i.listener = e, r.wrapFn = i, i
                }

                function f(t, n, e) {
                    var r = t._events;
                    if (void 0 === r) return [];
                    var i = r[n];
                    return void 0 === i ? [] : "function" == typeof i ? e ? [i.listener || i] : [i] : e ? function (t) {
                        for (var n = new Array(t.length), e = 0; e < n.length; ++e) n[e] = t[e].listener || t[e];
                        return n
                    }(i) : d(i, i.length)
                }

                function p(t) {
                    var n = this._events;
                    if (void 0 !== n) {
                        var e = n[t];
                        if ("function" == typeof e) return 1;
                        if (void 0 !== e) return e.length
                    }
                    return 0
                }

                function d(t, n) {
                    for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t[r];
                    return e
                }

                function y(t, n, e, r) {
                    if ("function" == typeof t.on) r.once ? t.once(n, e) : t.on(n, e);
                    else {
                        if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                        t.addEventListener(n, (function i(o) {
                            r.once && t.removeEventListener(n, i), e(o)
                        }))
                    }
                }
                Object.defineProperty(o, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function () {
                        return s
                    },
                    set: function (t) {
                        if ("number" != typeof t || t < 0 || i(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                        s = t
                    }
                }), o.init = function () {
                    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                }, o.prototype.setMaxListeners = function (t) {
                    if ("number" != typeof t || t < 0 || i(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                    return this._maxListeners = t, this
                }, o.prototype.getMaxListeners = function () {
                    return u(this)
                }, o.prototype.emit = function (t) {
                    for (var n = [], e = 1; e < arguments.length; e++) n.push(arguments[e]);
                    var i = "error" === t,
                        o = this._events;
                    if (void 0 !== o) i = i && void 0 === o.error;
                    else if (!i) return !1;
                    if (i) {
                        var s;
                        if (n.length > 0 && (s = n[0]), s instanceof Error) throw s;
                        var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                        throw a.context = s, a
                    }
                    var u = o[t];
                    if (void 0 === u) return !1;
                    if ("function" == typeof u) r(u, this, n);
                    else {
                        var c = u.length,
                            l = d(u, c);
                        for (e = 0; e < c; ++e) r(l[e], this, n)
                    }
                    return !0
                }, o.prototype.addListener = function (t, n) {
                    return c(this, t, n, !1)
                }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function (t, n) {
                    return c(this, t, n, !0)
                }, o.prototype.once = function (t, n) {
                    return a(n), this.on(t, h(this, t, n)), this
                }, o.prototype.prependOnceListener = function (t, n) {
                    return a(n), this.prependListener(t, h(this, t, n)), this
                }, o.prototype.removeListener = function (t, n) {
                    var e, r, i, o, s;
                    if (a(n), void 0 === (r = this._events)) return this;
                    if (void 0 === (e = r[t])) return this;
                    if (e === n || e.listener === n) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, e.listener || n));
                    else if ("function" != typeof e) {
                        for (i = -1, o = e.length - 1; o >= 0; o--)
                            if (e[o] === n || e[o].listener === n) {
                                s = e[o].listener, i = o;
                                break
                            } if (i < 0) return this;
                        0 === i ? e.shift() : function (t, n) {
                            for (; n + 1 < t.length; n++) t[n] = t[n + 1];
                            t.pop()
                        }(e, i), 1 === e.length && (r[t] = e[0]), void 0 !== r.removeListener && this.emit("removeListener", t, s || n)
                    }
                    return this
                }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function (t) {
                    var n, e, r;
                    if (void 0 === (e = this._events)) return this;
                    if (void 0 === e.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== e[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete e[t]), this;
                    if (0 === arguments.length) {
                        var i, o = Object.keys(e);
                        for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                    }
                    if ("function" == typeof (n = e[t])) this.removeListener(t, n);
                    else if (void 0 !== n)
                        for (r = n.length - 1; r >= 0; r--) this.removeListener(t, n[r]);
                    return this
                }, o.prototype.listeners = function (t) {
                    return f(this, t, !0)
                }, o.prototype.rawListeners = function (t) {
                    return f(this, t, !1)
                }, o.listenerCount = function (t, n) {
                    return "function" == typeof t.listenerCount ? t.listenerCount(n) : p.call(t, n)
                }, o.prototype.listenerCount = p, o.prototype.eventNames = function () {
                    return this._eventsCount > 0 ? n(this._events) : []
                }
            },
            4470: t => {
                "use strict";
                var n = Object.prototype.hasOwnProperty,
                    e = Object.prototype.toString,
                    r = Object.defineProperty,
                    i = Object.getOwnPropertyDescriptor,
                    o = function (t) {
                        return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === e.call(t)
                    },
                    s = function (t) {
                        if (!t || "[object Object]" !== e.call(t)) return !1;
                        var r, i = n.call(t, "constructor"),
                            o = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
                        if (t.constructor && !i && !o) return !1;
                        for (r in t);
                        return void 0 === r || n.call(t, r)
                    },
                    a = function (t, n) {
                        r && "__proto__" === n.name ? r(t, n.name, {
                            enumerable: !0,
                            configurable: !0,
                            value: n.newValue,
                            writable: !0
                        }) : t[n.name] = n.newValue
                    },
                    u = function (t, e) {
                        if ("__proto__" === e) {
                            if (!n.call(t, e)) return;
                            if (i) return i(t, e).value
                        }
                        return t[e]
                    };
                t.exports = function t() {
                    var n, e, r, i, c, l, h = arguments[0],
                        f = 1,
                        p = arguments.length,
                        d = !1;
                    for ("boolean" == typeof h && (d = h, h = arguments[1] || {}, f = 2), (null == h || "object" != typeof h && "function" != typeof h) && (h = {}); f < p; ++f)
                        if (null != (n = arguments[f]))
                            for (e in n) r = u(h, e), h !== (i = u(n, e)) && (d && i && (s(i) || (c = o(i))) ? (c ? (c = !1, l = r && o(r) ? r : []) : l = r && s(r) ? r : {}, a(h, {
                                name: e,
                                newValue: t(d, l, i)
                            })) : void 0 !== i && a(h, {
                                name: e,
                                newValue: i
                            }));
                    return h
                }
            },
            8867: (t, n, e) => {
                "use strict";
                t.exports = e(2320)
            },
            3380: t => {
                "use strict";
                t.exports = function (t) {
                    t.mod = t.fmod, t.lessThan = t.lt, t.lessEqualThan = t.leq, t.greaterThan = t.gt, t.greaterEqualThan = t.geq, t.strictlyEqual = t.equal, t.strictlyNotEqual = t.notEqual, t.logicalAND = function (t, n) {
                        return t && n
                    }, t.logicalXOR = function (t, n) {
                        return t ^ n
                    }, t.logicalOR = function (t, n) {
                        return t || n
                    }
                }
            },
            2320: (t, n, e) => {
                "use strict";
                const r = e(813),
                    i = e(9851).ZP;

                function o(t) {
                    Object.keys(t).forEach((function (n) {
                        const e = t[n];
                        "number" == typeof e || Array.isArray(e) ? t[n] = i.factory(e) : "object" == typeof e && "lo" in e && "hi" in e && (t[n] = i.factory(e.lo, e.hi))
                    }))
                }
                e(3380)(i), t.exports = function (t) {
                    return (new r).setDefs({
                        $$processScope: o
                    }).parse(t).compile(i)
                }, t.exports.policies = e(4186)(i), t.exports.Interval = i
            },
            4186: t => {
                "use strict";
                t.exports = function (t) {
                    return {
                        disableRounding: function () {
                            t.round.disable()
                        },
                        enableRounding: function () {
                            t.round.enable()
                        }
                    }
                }
            },
            813: (t, n, e) => {
                "use strict";
                t.exports = e(7076)
            },
            7076: (t, n, e) => {
                "use strict";
                var r = e(9213).Parser,
                    i = e(1046),
                    o = e(4470);

                function s(t, n) {
                    this.statements = [], this.defs = n || {}, this.interpreter = new i(this, t)
                }
                s.prototype.setDefs = function (t) {
                    return this.defs = o(this.defs, t), this
                }, s.prototype.compile = function (t) {
                    var n = this;
                    if (!t || "object" != typeof t && "function" != typeof t) throw TypeError("namespace must be an object");
                    if ("function" != typeof t.factory) throw TypeError("namespace.factory must be a function");
                    this.defs.ns = t, this.defs.$$mathCodegen = {
                        getProperty: function (t, e, r) {
                            function i(t) {
                                return n.interpreter.options.applyFactoryToScope && "function" != typeof t ? r.factory(t) : t
                            }
                            if (t in e) return i(e[t]);
                            if (t in r) return i(r[t]);
                            throw SyntaxError('symbol "' + t + '" is undefined')
                        },
                        functionProxy: function (t, n) {
                            if ("function" != typeof t) throw SyntaxError('symbol "' + n + '" must be a function');
                            return t
                        }
                    }, this.defs.$$processScope = this.defs.$$processScope || function () {};
                    var e = Object.keys(this.defs).map((function (t) {
                        return "var " + t + ' = defs["' + t + '"]'
                    }));
                    if (!this.statements.length) throw Error("there are no statements saved in this generator, make sure you parse an expression before compiling it");
                    this.statements[this.statements.length - 1] = "return " + this.statements[this.statements.length - 1];
                    var r = this.statements.join(";"),
                        i = e.join("\n") + "\n" + ["return {", "  eval: function (scope) {", "    scope = scope || {}", "    $$processScope(scope)", "    " + r, "  },", "  code: '" + r + "'", "}"].join("\n");
                    return new Function("defs", i)(this.defs)
                }, s.prototype.parse = function (t) {
                    var n = this,
                        e = (new r).parse(t);
                    return this.statements = e.blocks.map((function (t) {
                        return n.interpreter.next(t)
                    })), this
                }, t.exports = s
            },
            1046: (t, n, e) => {
                "use strict";
                var r = e(4470),
                    i = {
                        ArrayNode: e(5483),
                        AssignmentNode: e(446),
                        ConditionalNode: e(3865),
                        ConstantNode: e(9094),
                        FunctionNode: e(73),
                        OperatorNode: e(1715),
                        SymbolNode: e(5835),
                        UnaryNode: e(74)
                    },
                    o = function (t, n) {
                        this.owner = t, this.options = r({
                            factory: "ns.factory",
                            raw: !1,
                            rawArrayExpressionElements: !0,
                            rawCallExpressionElements: !1,
                            applyFactoryToScope: !1
                        }, n)
                    };
                r(o.prototype, i), o.prototype.next = function (t) {
                    if (!(t.type in this)) throw new TypeError("the node type " + t.type + " is not implemented");
                    return this[t.type](t)
                }, o.prototype.rawify = function (t, n) {
                    var e = this.options.raw;
                    t && (this.options.raw = !0), n(), t && (this.options.raw = e)
                }, t.exports = o
            },
            8684: t => {
                "use strict";
                t.exports = {
                    "+": "add",
                    "-": "sub",
                    "*": "mul",
                    "/": "div",
                    "^": "pow",
                    "%": "mod",
                    "!": "factorial",
                    "|": "bitwiseOR",
                    "^|": "bitwiseXOR",
                    "&": "bitwiseAND",
                    "||": "logicalOR",
                    xor: "logicalXOR",
                    "&&": "logicalAND",
                    "<": "lessThan",
                    ">": "greaterThan",
                    "<=": "lessEqualThan",
                    ">=": "greaterEqualThan",
                    "===": "strictlyEqual",
                    "==": "equal",
                    "!==": "strictlyNotEqual",
                    "!=": "notEqual",
                    ">>": "shiftRight",
                    "<<": "shiftLeft",
                    ">>>": "unsignedRightShift"
                }
            },
            1681: t => {
                "use strict";
                t.exports = {
                    "+": "positive",
                    "-": "negative",
                    "~": "oneComplement"
                }
            },
            5483: t => {
                "use strict";
                t.exports = function (t) {
                    var n = this,
                        e = [];
                    this.rawify(this.options.rawArrayExpressionElements, (function () {
                        e = t.nodes.map((function (t) {
                            return n.next(t)
                        }))
                    }));
                    var r = "[" + e.join(",") + "]";
                    return this.options.raw ? r : this.options.factory + "(" + r + ")"
                }
            },
            446: t => {
                "use strict";
                t.exports = function (t) {
                    return 'scope["' + t.name + '"] = ' + this.next(t.expr)
                }
            },
            3865: t => {
                "use strict";
                t.exports = function (t) {
                    return "(!!(" + this.next(t.condition) + ") ? (" + this.next(t.trueExpr) + ") : (" + this.next(t.falseExpr) + ") )"
                }
            },
            9094: t => {
                "use strict";
                t.exports = function (t) {
                    return this.options.raw ? t.value : this.options.factory + "(" + t.value + ")"
                }
            },
            73: (t, n, e) => {
                "use strict";
                var r = e(9213).nodeTypes.SymbolNode,
                    i = function (t) {
                        return "$$mathCodegen.functionProxy(" + this.next(new r(t.name)) + ', "' + t.name + '")'
                    };
                t.exports = function (t) {
                    var n = this,
                        e = i.call(this, t),
                        r = [];
                    return this.rawify(this.options.rawCallExpressionElements, (function () {
                        r = t.args.map((function (t) {
                            return n.next(t)
                        }))
                    })), e + "(" + r.join(", ") + ")"
                }, t.exports.functionProxy = i
            },
            1715: (t, n, e) => {
                "use strict";
                var r = e(8684);
                t.exports = function (t) {
                    if (this.options.raw) return ["(" + this.next(t.args[0]), t.op, this.next(t.args[1]) + ")"].join(" ");
                    var n = r[t.op];
                    if (!n) throw TypeError("unidentified operator");
                    return this.FunctionNode({
                        name: n,
                        args: t.args
                    })
                }
            },
            5835: t => {
                "use strict";
                t.exports = function (t) {
                    return '$$mathCodegen.getProperty("' + t.name + '", scope, ns)'
                }
            },
            74: (t, n, e) => {
                "use strict";
                var r = e(1681);
                t.exports = function (t) {
                    if (this.options.raw) return t.op + this.next(t.argument);
                    if (!(t.op in r)) throw new SyntaxError(t.op + " not implemented");
                    var n = r[t.op];
                    return this.FunctionNode({
                        name: n,
                        args: [t.argument]
                    })
                }
            },
            9851: (t, n, e) => {
                "use strict";
                e.d(n, {
                    ZP: () => Ct
                });
                var r = {};
                e.r(r), e.d(r, {
                    hasInterval: () => y,
                    hasValue: () => d,
                    intervalsOverlap: () => m,
                    isEmpty: () => l,
                    isInterval: () => c,
                    isSingleton: () => f,
                    isWhole: () => h,
                    zeroIn: () => p
                });
                var i = {};
                e.r(i), e.d(i, {
                    almostEqual: () => Z,
                    assertIncludes: () => D,
                    equal: () => L,
                    geq: () => $,
                    greaterEqualThan: () => q,
                    greaterThan: () => U,
                    gt: () => j,
                    leq: () => z,
                    lessEqualThan: () => R,
                    lessThan: () => Y,
                    lt: () => F,
                    notEqual: () => H
                });
                var o = {};
                e.r(o), e.d(o, {
                    add: () => X,
                    div: () => Q,
                    divide: () => J,
                    mul: () => G,
                    multiply: () => W,
                    negative: () => tt,
                    positive: () => K,
                    sub: () => V,
                    subtract: () => B
                });
                var s = {};
                e.r(s), e.d(s, {
                    fmod: () => nt,
                    multiplicativeInverse: () => et,
                    nthRoot: () => ot,
                    pow: () => rt,
                    sqrt: () => it
                });
                var a = {};
                e.r(a), e.d(a, {
                    LOG_EXP_10: () => ct,
                    LOG_EXP_2: () => ht,
                    abs: () => vt,
                    clone: () => bt,
                    difference: () => mt,
                    exp: () => st,
                    hull: () => pt,
                    intersection: () => dt,
                    ln: () => ut,
                    log: () => at,
                    log10: () => lt,
                    log2: () => ft,
                    max: () => xt,
                    min: () => wt,
                    union: () => yt,
                    wid: () => _t,
                    width: () => gt
                });
                var u = {};

                function c(t) {
                    return "object" == typeof t && "number" == typeof t.lo && "number" == typeof t.hi
                }

                function l(t) {
                    return t.lo > t.hi
                }

                function h(t) {
                    return t.lo === -1 / 0 && t.hi === 1 / 0
                }

                function f(t) {
                    return t.lo === t.hi
                }

                function p(t) {
                    return d(t, 0)
                }

                function d(t, n) {
                    return !l(t) && t.lo <= n && n <= t.hi
                }

                function y(t, n) {
                    return !!l(t) || !l(n) && n.lo <= t.lo && t.hi <= n.hi
                }

                function m(t, n) {
                    return !l(t) && !l(n) && (t.lo <= n.lo && n.lo <= t.hi || n.lo <= t.lo && t.lo <= n.hi)
                }
                e.r(u), e.d(u, {
                    acos: () => St,
                    asin: () => At,
                    atan: () => Pt,
                    cos: () => Et,
                    cosh: () => Lt,
                    sin: () => kt,
                    sinh: () => Ot,
                    tan: () => Nt,
                    tanh: () => It
                });
                var g = e(3093),
                    _ = e.n(g);

                function v(t) {
                    return t
                }

                function x(t) {
                    return t === 1 / 0 ? t : _()(t, -1 / 0)
                }

                function w(t) {
                    return t === -1 / 0 ? t : _()(t, 1 / 0)
                }

                function b(t) {
                    return t < 0 ? Math.ceil(t) : Math.floor(t)
                }
                const M = {
                        prev: x,
                        next: w
                    },
                    T = {
                        safePrev: x,
                        safeNext: w,
                        prev: t => M.prev(t),
                        next: t => M.next(t),
                        addLo: (t, n) => T.prev(t + n),
                        addHi: (t, n) => T.next(t + n),
                        subLo: (t, n) => T.prev(t - n),
                        subHi: (t, n) => T.next(t - n),
                        mulLo: (t, n) => T.prev(t * n),
                        mulHi: (t, n) => T.next(t * n),
                        divLo: (t, n) => T.prev(t / n),
                        divHi: (t, n) => T.next(t / n),
                        intLo: t => b(T.prev(t)),
                        intHi: t => b(T.next(t)),
                        logLo: t => T.prev(Math.log(t)),
                        logHi: t => T.next(Math.log(t)),
                        expLo: t => T.prev(Math.exp(t)),
                        expHi: t => T.next(Math.exp(t)),
                        sinLo: t => T.prev(Math.sin(t)),
                        sinHi: t => T.next(Math.sin(t)),
                        cosLo: t => T.prev(Math.cos(t)),
                        cosHi: t => T.next(Math.cos(t)),
                        tanLo: t => T.prev(Math.tan(t)),
                        tanHi: t => T.next(Math.tan(t)),
                        asinLo: t => T.prev(Math.asin(t)),
                        asinHi: t => T.next(Math.asin(t)),
                        acosLo: t => T.prev(Math.acos(t)),
                        acosHi: t => T.next(Math.acos(t)),
                        atanLo: t => T.prev(Math.atan(t)),
                        atanHi: t => T.next(Math.atan(t)),
                        sinhLo: t => T.prev(Math.sinh(t)),
                        sinhHi: t => T.next(Math.sinh(t)),
                        coshLo: t => T.prev(Math.cosh(t)),
                        coshHi: t => T.next(Math.cosh(t)),
                        tanhLo: t => T.prev(Math.tanh(t)),
                        tanhHi: t => T.next(Math.tanh(t)),
                        powLo(t, n) {
                            if (n % 1 != 0) return T.prev(Math.pow(t, n));
                            let e = 1 == (1 & n) ? t : 1;
                            for (n >>= 1; n > 0;) t = T.mulLo(t, t), 1 == (1 & n) && (e = T.mulLo(t, e)), n >>= 1;
                            return e
                        },
                        powHi(t, n) {
                            if (n % 1 != 0) return T.next(Math.pow(t, n));
                            let e = 1 == (1 & n) ? t : 1;
                            for (n >>= 1; n > 0;) t = T.mulHi(t, t), 1 == (1 & n) && (e = T.mulHi(t, e)), n >>= 1;
                            return e
                        },
                        sqrtLo: t => T.prev(Math.sqrt(t)),
                        sqrtHi: t => T.next(Math.sqrt(t)),
                        disable() {
                            M.next = M.prev = v
                        },
                        enable() {
                            M.next = w, M.prev = x
                        }
                    },
                    E = T;
                class k {
                    constructor(t, n) {
                        if (this.lo = 0, this.hi = 0, !(this instanceof k)) return console.log("calling with new"), console.log(t, n), new k(t, n);
                        if (void 0 !== t && void 0 !== n) {
                            if (c(t)) {
                                if (!f(t)) throw new TypeError("Interval: interval `lo` must be a singleton");
                                t = t.lo
                            }
                            if (c(n)) {
                                if (!f(n)) throw TypeError("Interval: interval `hi` must be a singleton");
                                n = n.hi
                            }
                        } else {
                            if (void 0 !== t) return Array.isArray(t) ? new N(t[0], t[1]) : new N(t, t);
                            t = n = 0
                        }
                        this.assign(t, n)
                    }
                    singleton(t) {
                        return this.set(t, t)
                    }
                    bounded(t, n) {
                        return this.set(E.prev(t), E.next(n))
                    }
                    boundedSingleton(t) {
                        return this.bounded(t, t)
                    }
                    set(t, n) {
                        return this.lo = t, this.hi = n, this
                    }
                    assign(t, n) {
                        if ("number" != typeof t || "number" != typeof n) throw TypeError("Interval#assign: arguments must be numbers");
                        return isNaN(t) || isNaN(n) || t > n ? this.setEmpty() : this.set(t, n)
                    }
                    setEmpty() {
                        return this.set(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
                    }
                    setWhole() {
                        return this.set(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
                    }
                    open(t, n) {
                        return this.assign(E.safeNext(t), E.safePrev(n))
                    }
                    halfOpenLeft(t, n) {
                        return this.assign(E.safeNext(t), n)
                    }
                    halfOpenRight(t, n) {
                        return this.assign(t, E.safePrev(n))
                    }
                    toArray() {
                        return [this.lo, this.hi]
                    }
                    clone() {
                        return (new N).set(this.lo, this.hi)
                    }
                }
                const N = function (t) {
                    function n() {
                        for (var n = arguments.length, e = Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                        return new(Function.prototype.bind.apply(t, [null].concat(e)))
                    }
                    return n.prototype = t.prototype, n
                }(k);
                N.factory = N;
                const A = 3.141592653589793,
                    S = 3.1415926535897936,
                    P = {
                        PI_LOW: A,
                        PI_HIGH: S,
                        PI_HALF_LOW: A / 2,
                        PI_HALF_HIGH: S / 2,
                        PI_TWICE_LOW: 2 * A,
                        PI_TWICE_HIGH: 2 * S,
                        get PI() {
                            return new N(A, S)
                        },
                        get PI_HALF() {
                            return new N(P.PI_HALF_LOW, P.PI_HALF_HIGH)
                        },
                        get PI_TWICE() {
                            return new N(P.PI_TWICE_LOW, P.PI_TWICE_HIGH)
                        },
                        get ZERO() {
                            return new N(0)
                        },
                        get ONE() {
                            return new N(1)
                        },
                        get WHOLE() {
                            return (new N).setWhole()
                        },
                        get EMPTY() {
                            return (new N).setEmpty()
                        }
                    },
                    O = P;

                function L(t, n) {
                    return l(t) ? l(n) : !l(n) && t.lo === n.lo && t.hi === n.hi
                }

                function I(t, n) {
                    if (!t) throw new Error(n || "assertion failed")
                }

                function C(t, n) {
                    if (!isFinite(t)) return I(t === n, `[Infinity] expected ${t} to be ${n}`);
                    I(Math.abs(t - n) < 1e-7, `expected ${t} to be close to ${n}`)
                }

                function Z(t, n) {
                    t = Array.isArray(t) ? t : t.toArray(), n = Array.isArray(n) ? n : n.toArray(), C(t[0], n[0]), C(t[1], n[1])
                }

                function D(t, n) {
                    Z(t, n), t = Array.isArray(t) ? t : t.toArray(), n = Array.isArray(n) ? n : n.toArray(), I(t[0] <= n[0], `${t[0]} should be less/equal than ${n[0]}`), I(n[1] <= t[1], `${n[1]} should be less/equal than ${t[1]}`)
                }

                function H(t, n) {
                    return l(t) ? !l(n) : l(n) || t.hi < n.lo || t.lo > n.hi
                }

                function Y(t, n) {
                    return !l(t) && !l(n) && t.hi < n.lo
                }
                const F = Y;

                function U(t, n) {
                    return !l(t) && !l(n) && t.lo > n.hi
                }
                const j = U;

                function R(t, n) {
                    return !l(t) && !l(n) && t.hi <= n.lo
                }
                const z = R;

                function q(t, n) {
                    return !l(t) && !l(n) && t.lo >= n.hi
                }
                const $ = q;

                function X(t, n) {
                    return new N(E.addLo(t.lo, n.lo), E.addHi(t.hi, n.hi))
                }

                function B(t, n) {
                    return new N(E.subLo(t.lo, n.hi), E.subHi(t.hi, n.lo))
                }
                const V = B;

                function W(t, n) {
                    if (l(t) || l(n)) return O.EMPTY;
                    const e = t.lo,
                        r = t.hi,
                        i = n.lo,
                        o = n.hi,
                        s = new N;
                    return e < 0 ? r > 0 ? i < 0 ? o > 0 ? (s.lo = Math.min(E.mulLo(e, o), E.mulLo(r, i)), s.hi = Math.max(E.mulHi(e, i), E.mulHi(r, o))) : (s.lo = E.mulLo(r, i), s.hi = E.mulHi(e, i)) : o > 0 ? (s.lo = E.mulLo(e, o), s.hi = E.mulHi(r, o)) : (s.lo = 0, s.hi = 0) : i < 0 ? o > 0 ? (s.lo = E.mulLo(e, o), s.hi = E.mulHi(e, i)) : (s.lo = E.mulLo(r, o), s.hi = E.mulHi(e, i)) : o > 0 ? (s.lo = E.mulLo(e, o), s.hi = E.mulHi(r, i)) : (s.lo = 0, s.hi = 0) : r > 0 ? i < 0 ? o > 0 ? (s.lo = E.mulLo(r, i), s.hi = E.mulHi(r, o)) : (s.lo = E.mulLo(r, i), s.hi = E.mulHi(e, o)) : o > 0 ? (s.lo = E.mulLo(e, i), s.hi = E.mulHi(r, o)) : (s.lo = 0, s.hi = 0) : (s.lo = 0, s.hi = 0), s
                }
                const G = W;

                function J(t, n) {
                    return l(t) || l(n) ? O.EMPTY : p(n) ? 0 !== n.lo ? 0 !== n.hi ? function (t) {
                        return 0 === t.lo && 0 === t.hi ? t : O.WHOLE
                    }(t) : function (t, n) {
                        return 0 === t.lo && 0 === t.hi ? t : p(t) ? O.WHOLE : t.hi < 0 ? new N(E.divLo(t.hi, n), Number.POSITIVE_INFINITY) : new N(Number.NEGATIVE_INFINITY, E.divHi(t.lo, n))
                    }(t, n.lo) : 0 !== n.hi ? function (t, n) {
                        return 0 === t.lo && 0 === t.hi ? t : p(t) ? O.WHOLE : t.hi < 0 ? new N(Number.NEGATIVE_INFINITY, E.divHi(t.hi, n)) : new N(E.divLo(t.lo, n), Number.POSITIVE_INFINITY)
                    }(t, n.hi) : O.EMPTY : function (t, n) {
                        const e = t.lo,
                            r = t.hi,
                            i = n.lo,
                            o = n.hi,
                            s = new N;
                        return r < 0 ? o < 0 ? (s.lo = E.divLo(r, i), s.hi = E.divHi(e, o)) : (s.lo = E.divLo(e, i), s.hi = E.divHi(r, o)) : e < 0 ? o < 0 ? (s.lo = E.divLo(r, o), s.hi = E.divHi(e, o)) : (s.lo = E.divLo(e, i), s.hi = E.divHi(r, i)) : o < 0 ? (s.lo = E.divLo(r, o), s.hi = E.divHi(e, i)) : (s.lo = E.divLo(e, o), s.hi = E.divHi(r, i)), s
                    }(t, n)
                }
                const Q = J;

                function K(t) {
                    return new N(t.lo, t.hi)
                }

                function tt(t) {
                    return new N(-t.hi, -t.lo)
                }

                function nt(t, n) {
                    if (l(t) || l(n)) return O.EMPTY;
                    const e = t.lo < 0 ? n.lo : n.hi;
                    let r = t.lo / e;
                    return r = r < 0 ? Math.ceil(r) : Math.floor(r), V(t, G(n, new N(r)))
                }

                function et(t) {
                    return l(t) ? O.EMPTY : p(t) ? 0 !== t.lo ? 0 !== t.hi ? O.WHOLE : new N(Number.NEGATIVE_INFINITY, E.divHi(1, t.lo)) : 0 !== t.hi ? new N(E.divLo(1, t.hi), Number.POSITIVE_INFINITY) : O.EMPTY : new N(E.divLo(1, t.hi), E.divHi(1, t.lo))
                }

                function rt(t, n) {
                    if (l(t)) return O.EMPTY;
                    if ("object" == typeof n) {
                        if (!f(n)) return O.EMPTY;
                        n = n.lo
                    }
                    if (0 === n) return 0 === t.lo && 0 === t.hi ? O.EMPTY : O.ONE;
                    if (n < 0) return rt(et(t), -n);
                    if (Number.isSafeInteger(n)) {
                        if (t.hi < 0) {
                            const e = E.powLo(-t.hi, n),
                                r = E.powHi(-t.lo, n);
                            return 1 == (1 & n) ? new N(-r, -e) : new N(e, r)
                        }
                        return t.lo < 0 ? 1 == (1 & n) ? new N(-E.powLo(-t.lo, n), E.powHi(t.hi, n)) : new N(0, E.powHi(Math.max(-t.lo, t.hi), n)) : new N(E.powLo(t.lo, n), E.powHi(t.hi, n))
                    }
                    return console.warn("power is not an integer, you should use nth-root instead, returning an empty interval"), O.EMPTY
                }

                function it(t) {
                    return ot(t, 2)
                }

                function ot(t, n) {
                    if (l(t) || n < 0) return O.EMPTY;
                    if ("object" == typeof n) {
                        if (!f(n)) return O.EMPTY;
                        n = n.lo
                    }
                    const e = 1 / n;
                    if (t.hi < 0) {
                        if (Number.isSafeInteger(n) && 1 == (1 & n)) {
                            const n = E.powHi(-t.lo, e),
                                r = E.powLo(-t.hi, e);
                            return new N(-n, -r)
                        }
                        return O.EMPTY
                    }
                    if (t.lo < 0) {
                        const r = E.powHi(t.hi, e);
                        if (Number.isSafeInteger(n) && 1 == (1 & n)) {
                            const n = -E.powHi(-t.lo, e);
                            return new N(n, r)
                        }
                        return new N(0, r)
                    }
                    return new N(E.powLo(t.lo, e), E.powHi(t.hi, e))
                }

                function st(t) {
                    return l(t) ? O.EMPTY : new N(E.expLo(t.lo), E.expHi(t.hi))
                }

                function at(t) {
                    if (l(t)) return O.EMPTY;
                    const n = t.lo <= 0 ? Number.NEGATIVE_INFINITY : E.logLo(t.lo);
                    return new N(n, E.logHi(t.hi))
                }
                const ut = at,
                    ct = at(new N(10, 10));

                function lt(t) {
                    return l(t) ? O.EMPTY : Q(at(t), ct)
                }
                const ht = at(new N(2, 2));

                function ft(t) {
                    return l(t) ? O.EMPTY : Q(at(t), ht)
                }

                function pt(t, n) {
                    const e = l(t),
                        r = l(n);
                    return e && r ? O.EMPTY : e ? n.clone() : r ? t.clone() : new N(Math.min(t.lo, n.lo), Math.max(t.hi, n.hi))
                }

                function dt(t, n) {
                    if (l(t) || l(n)) return O.EMPTY;
                    const e = Math.max(t.lo, n.lo),
                        r = Math.min(t.hi, n.hi);
                    return e <= r ? new N(e, r) : O.EMPTY
                }

                function yt(t, n) {
                    if (!m(t, n)) throw Error("Interval#union: intervals do not overlap");
                    return new N(Math.min(t.lo, n.lo), Math.max(t.hi, n.hi))
                }

                function mt(t, n) {
                    if (l(t) || h(n)) return O.EMPTY;
                    if (m(t, n)) {
                        if (t.lo < n.lo && n.hi < t.hi) throw Error("Interval.difference: difference creates multiple intervals");
                        return n.lo <= t.lo && n.hi === 1 / 0 || n.hi >= t.hi && n.lo === -1 / 0 ? O.EMPTY : n.lo <= t.lo ? (new N).halfOpenLeft(n.hi, t.hi) : (new N).halfOpenRight(t.lo, n.lo)
                    }
                    return t.clone()
                }

                function gt(t) {
                    return l(t) ? 0 : E.subHi(t.hi, t.lo)
                }
                const _t = gt;

                function vt(t) {
                    return l(t) || h(t) ? O.EMPTY : t.lo >= 0 ? t.clone() : t.hi <= 0 ? tt(t) : new N(0, Math.max(-t.lo, t.hi))
                }

                function xt(t, n) {
                    const e = l(t),
                        r = l(n);
                    return e && r ? O.EMPTY : e ? n.clone() : r ? t.clone() : new N(Math.max(t.lo, n.lo), Math.max(t.hi, n.hi))
                }

                function wt(t, n) {
                    const e = l(t),
                        r = l(n);
                    return e && r ? O.EMPTY : e ? n.clone() : r ? t.clone() : new N(Math.min(t.lo, n.lo), Math.min(t.hi, n.hi))
                }

                function bt(t) {
                    return (new N).set(t.lo, t.hi)
                }

                function Mt(t) {
                    return !isFinite(t.lo) && t.lo === t.hi
                }

                function Tt(t) {
                    if (t.lo < 0)
                        if (t.lo === -1 / 0) t.lo = 0, t.hi = 1 / 0;
                        else {
                            const n = Math.ceil(-t.lo / O.PI_TWICE_LOW);
                            t.lo += O.PI_TWICE_LOW * n, t.hi += O.PI_TWICE_LOW * n
                        } return t
                }

                function Et(t) {
                    if (l(t) || Mt(t)) return O.EMPTY;
                    const n = (new N).set(t.lo, t.hi);
                    Tt(n);
                    const e = O.PI_TWICE,
                        r = nt(n, e);
                    if (gt(r) >= e.lo) return new N(-1, 1);
                    if (r.lo >= O.PI_HIGH) return tt(Et(V(r, O.PI)));
                    const i = r.lo,
                        o = r.hi,
                        s = E.cosLo(o),
                        a = E.cosHi(i);
                    return o <= O.PI_LOW ? new N(s, a) : o <= e.lo ? new N(-1, Math.max(s, a)) : new N(-1, 1)
                }

                function kt(t) {
                    return l(t) || Mt(t) ? O.EMPTY : Et(V(t, O.PI_HALF))
                }

                function Nt(t) {
                    if (l(t) || Mt(t)) return O.EMPTY;
                    const n = (new N).set(t.lo, t.hi);
                    Tt(n);
                    const e = O.PI;
                    let r = nt(n, e);
                    return r.lo >= O.PI_HALF_LOW && (r = V(r, e)), r.lo <= -O.PI_HALF_LOW || r.hi >= O.PI_HALF_LOW ? O.WHOLE : new N(E.tanLo(r.lo), E.tanHi(r.hi))
                }

                function At(t) {
                    if (l(t) || t.hi < -1 || t.lo > 1) return O.EMPTY;
                    const n = t.lo <= -1 ? -O.PI_HALF_HIGH : E.asinLo(t.lo),
                        e = t.hi >= 1 ? O.PI_HALF_HIGH : E.asinHi(t.hi);
                    return new N(n, e)
                }

                function St(t) {
                    if (l(t) || t.hi < -1 || t.lo > 1) return O.EMPTY;
                    const n = t.hi >= 1 ? 0 : E.acosLo(t.hi),
                        e = t.lo <= -1 ? O.PI_HIGH : E.acosHi(t.lo);
                    return new N(n, e)
                }

                function Pt(t) {
                    return l(t) ? O.EMPTY : new N(E.atanLo(t.lo), E.atanHi(t.hi))
                }

                function Ot(t) {
                    return l(t) ? O.EMPTY : new N(E.sinhLo(t.lo), E.sinhHi(t.hi))
                }

                function Lt(t) {
                    return l(t) ? O.EMPTY : t.hi < 0 ? new N(E.coshLo(t.hi), E.coshHi(t.lo)) : t.lo >= 0 ? new N(E.coshLo(t.lo), E.coshHi(t.hi)) : new N(1, E.coshHi(-t.lo > t.hi ? t.lo : t.hi))
                }

                function It(t) {
                    return l(t) ? O.EMPTY : new N(E.tanhLo(t.lo), E.tanhHi(t.hi))
                }
                const Ct = Object.assign(N, O, E, a, r, i, o, s, u, {
                    round: E
                })
            },
            2223: (t, n, e) => {
                "use strict";
                t.exports = e(3829)
            },
            3829: (t, n, e) => {
                "use strict";
                var r = e(9213).Parser,
                    i = e(6009),
                    o = e(4470);

                function s(t, n) {
                    this.statements = [], this.defs = n || {}, this.interpreter = new i(this, t)
                }
                s.prototype.setDefs = function (t) {
                    return this.defs = o(this.defs, t), this
                }, s.prototype.compile = function (t) {
                    if (!t || "object" != typeof t && "function" != typeof t) throw TypeError("namespace must be an object");
                    if ("function" != typeof t.factory) throw TypeError("namespace.factory must be a function");
                    this.defs.ns = t, this.defs.$$mathCodegen = {
                        getProperty: function (t, n, e) {
                            if (t in n) return n[t];
                            if (t in e) return e[t];
                            throw SyntaxError('symbol "' + t + '" is undefined')
                        },
                        functionProxy: function (t, n) {
                            if ("function" != typeof t) throw SyntaxError('symbol "' + n + '" must be a function');
                            return t
                        }
                    }, this.defs.$$processScope = this.defs.$$processScope || function () {};
                    var n = Object.keys(this.defs).map((function (t) {
                        return "var " + t + ' = defs["' + t + '"]'
                    }));
                    if (!this.statements.length) throw Error("there are no statements saved in this generator, make sure you parse an expression before compiling it");
                    this.statements[this.statements.length - 1] = "return " + this.statements[this.statements.length - 1];
                    var e = this.statements.join(";"),
                        r = n.join("\n") + "\n" + ["return {", "  eval: function (scope) {", "    scope = scope || {}", "    $$processScope(scope)", "    " + e, "  },", "  code: '" + e + "'", "}"].join("\n");
                    return new Function("defs", r)(this.defs)
                }, s.prototype.parse = function (t) {
                    var n = this,
                        e = (new r).parse(t);
                    return this.statements = e.blocks.map((function (t) {
                        return n.interpreter.next(t)
                    })), this
                }, t.exports = s
            },
            6009: (t, n, e) => {
                "use strict";
                var r = e(4470),
                    i = {
                        ArrayNode: e(5476),
                        AssignmentNode: e(6408),
                        ConditionalNode: e(9907),
                        ConstantNode: e(2341),
                        FunctionNode: e(7850),
                        OperatorNode: e(305),
                        SymbolNode: e(6656),
                        UnaryNode: e(2386)
                    },
                    o = function (t, n) {
                        this.owner = t, this.options = r({
                            factory: "ns.factory",
                            raw: !1,
                            rawArrayExpressionElements: !0,
                            rawCallExpressionElements: !1
                        }, n)
                    };
                r(o.prototype, i), o.prototype.next = function (t) {
                    if (!(t.type in this)) throw new TypeError("the node type " + t.type + " is not implemented");
                    return this[t.type](t)
                }, o.prototype.rawify = function (t, n) {
                    var e = this.options.raw;
                    t && (this.options.raw = !0), n(), t && (this.options.raw = e)
                }, t.exports = o
            },
            2576: t => {
                "use strict";
                t.exports = {
                    "+": "add",
                    "-": "sub",
                    "*": "mul",
                    "/": "div",
                    "^": "pow",
                    "%": "mod",
                    "!": "factorial",
                    "|": "bitwiseOR",
                    "^|": "bitwiseXOR",
                    "&": "bitwiseAND",
                    "||": "logicalOR",
                    xor: "logicalXOR",
                    "&&": "logicalAND",
                    "<": "lessThan",
                    ">": "greaterThan",
                    "<=": "lessEqualThan",
                    ">=": "greaterEqualThan",
                    "===": "strictlyEqual",
                    "==": "equal",
                    "!==": "strictlyNotEqual",
                    "!=": "notEqual",
                    ">>": "shiftRight",
                    "<<": "shiftLeft",
                    ">>>": "unsignedRightShift"
                }
            },
            6104: t => {
                "use strict";
                t.exports = {
                    "+": "positive",
                    "-": "negative",
                    "~": "oneComplement"
                }
            },
            5476: t => {
                "use strict";
                t.exports = function (t) {
                    var n = this,
                        e = [];
                    this.rawify(this.options.rawArrayExpressionElements, (function () {
                        e = t.nodes.map((function (t) {
                            return n.next(t)
                        }))
                    }));
                    var r = "[" + e.join(",") + "]";
                    return this.options.raw ? r : this.options.factory + "(" + r + ")"
                }
            },
            6408: t => {
                "use strict";
                t.exports = function (t) {
                    return 'scope["' + t.name + '"] = ' + this.next(t.expr)
                }
            },
            9907: t => {
                "use strict";
                t.exports = function (t) {
                    return "(!!(" + this.next(t.condition) + ") ? (" + this.next(t.trueExpr) + ") : (" + this.next(t.falseExpr) + ") )"
                }
            },
            2341: t => {
                "use strict";
                t.exports = function (t) {
                    return this.options.raw ? t.value : this.options.factory + "(" + t.value + ")"
                }
            },
            7850: (t, n, e) => {
                "use strict";
                var r = e(9213).nodeTypes.SymbolNode,
                    i = function (t) {
                        return "$$mathCodegen.functionProxy(" + this.next(new r(t.name)) + ', "' + t.name + '")'
                    };
                t.exports = function (t) {
                    var n = this,
                        e = i.call(this, t),
                        r = [];
                    return this.rawify(this.options.rawCallExpressionElements, (function () {
                        r = t.args.map((function (t) {
                            return n.next(t)
                        }))
                    })), e + "(" + r.join(", ") + ")"
                }, t.exports.functionProxy = i
            },
            305: (t, n, e) => {
                "use strict";
                var r = e(2576);
                t.exports = function (t) {
                    if (this.options.raw) return ["(" + this.next(t.args[0]), t.op, this.next(t.args[1]) + ")"].join(" ");
                    var n = r[t.op];
                    if (!n) throw TypeError("unidentified operator");
                    return this.FunctionNode({
                        name: n,
                        args: t.args
                    })
                }
            },
            6656: t => {
                "use strict";
                t.exports = function (t) {
                    return '$$mathCodegen.getProperty("' + t.name + '", scope, ns)'
                }
            },
            2386: (t, n, e) => {
                "use strict";
                var r = e(6104);
                t.exports = function (t) {
                    if (this.options.raw) return t.op + this.next(t.argument);
                    if (!(t.op in r)) throw new SyntaxError(t.op + " not implemented");
                    var n = r[t.op];
                    return this.FunctionNode({
                        name: n,
                        args: [t.argument]
                    })
                }
            },
            9213: (t, n, e) => {
                "use strict";
                e(1668), t.exports.Parser = e(5438), t.exports.nodeTypes = e(3450)
            },
            1668: (t, n, e) => {
                var r = e(5054),
                    i = {
                        n: "\n",
                        f: "\f",
                        r: "\r",
                        t: "\t",
                        v: "\v",
                        "'": "'",
                        '"': '"'
                    },
                    o = {
                        ",": !0,
                        "(": !0,
                        ")": !0,
                        "[": !0,
                        "]": !0,
                        ";": !0,
                        "~": !0,
                        "!": !0,
                        "+": !0,
                        "-": !0,
                        "*": !0,
                        "/": !0,
                        "%": !0,
                        "^": !0,
                        "**": !0,
                        "|": !0,
                        "&": !0,
                        "^|": !0,
                        "=": !0,
                        ":": !0,
                        "?": !0,
                        "||": !0,
                        "&&": !0,
                        xor: !0,
                        "==": !0,
                        "!=": !0,
                        "===": !0,
                        "!==": !0,
                        "<": !0,
                        ">": !0,
                        ">=": !0,
                        "<=": !0,
                        ">>>": !0,
                        "<<": !0,
                        ">>": !0
                    };

                function s(t) {
                    return t >= "0" && t <= "9"
                }

                function a(t) {
                    return t >= "a" && t <= "z" || t >= "A" && t <= "Z" || "$" === t || "_" === t
                }

                function u(t) {
                    return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t
                }

                function c(t) {
                    return o[t]
                }

                function l(t) {
                    return "'" === t || '"' === t
                }

                function h() {}
                h.prototype.throwError = function (t, n) {
                    n = void 0 === n ? this.index : n;
                    var e = new Error(t + " at index " + n);
                    throw e.index = n, e.description = t, e
                }, h.prototype.lex = function (t) {
                    for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                        for (; u(this.peek());) this.consume();
                        var n = this.peek(),
                            e = n + this.peek(1),
                            i = e + this.peek(2);
                        c(i) ? (this.tokens.push({
                            type: r.DELIMITER,
                            value: i
                        }), this.consume(), this.consume(), this.consume()) : c(e) ? (this.tokens.push({
                            type: r.DELIMITER,
                            value: e
                        }), this.consume(), this.consume()) : c(n) ? (this.tokens.push({
                            type: r.DELIMITER,
                            value: n
                        }), this.consume()) : s(n) || "." === n && s(this.peek(1)) ? this.tokens.push({
                            type: r.NUMBER,
                            value: this.readNumber()
                        }) : l(n) ? this.tokens.push({
                            type: r.STRING,
                            value: this.readString()
                        }) : a(n) ? this.tokens.push({
                            type: r.SYMBOL,
                            value: this.readIdentifier()
                        }) : this.throwError("unexpected character " + n)
                    }
                    return this.tokens.push({
                        type: r.EOF
                    }), this.tokens
                }, h.prototype.peek = function (t) {
                    if (t = t || 0, !(this.index + t >= this.text.length)) return this.text.charAt(this.index + t)
                }, h.prototype.consume = function () {
                    var t = this.peek();
                    return this.index += 1, t
                }, h.prototype.readNumber = function () {
                    var t = "";
                    if ("." === this.peek()) t += this.consume(), s(this.peek()) || this.throwError("number expected");
                    else {
                        for (; s(this.peek());) t += this.consume();
                        "." === this.peek() && (t += this.consume())
                    }
                    for (; s(this.peek());) t += this.consume();
                    if ("e" === this.peek() || "E" === this.peek())
                        for (t += this.consume(), s(this.peek()) || "+" === this.peek() || "-" === this.peek() || this.throwError(), "+" !== this.peek() && "-" !== this.peek() || (t += this.consume()), s(this.peek()) || this.throwError("number expected"); s(this.peek());) t += this.consume();
                    return t
                }, h.prototype.readIdentifier = function () {
                    for (var t = ""; a(this.peek()) || s(this.peek());) t += this.consume();
                    return t
                }, h.prototype.readString = function () {
                    for (var t, n = this.consume(), e = "";;) {
                        var r = this.consume();
                        if (r || this.throwError("string is not closed"), t) {
                            if ("u" === r) {
                                var o = this.text.substring(this.index + 1, this.index + 5);
                                o.match(/[\da-f]{4}/i) || this.throwError("invalid unicode escape"), this.index += 4, e += String.fromCharCode(parseInt(o, 16))
                            } else {
                                e += i[r] || r
                            }
                            t = !1
                        } else {
                            if (r === n) break;
                            "\\" === r ? t = !0 : e += r
                        }
                    }
                    return e
                }, t.exports = h
            },
            5438: (t, n, e) => {
                var r = e(5054),
                    i = e(1668),
                    o = e(6311),
                    s = e(6565),
                    a = e(5543),
                    u = e(2514),
                    c = e(8935),
                    l = e(3862),
                    h = e(9322),
                    f = e(3262),
                    p = e(2962);

                function d() {
                    this.lexer = new i, this.tokens = null
                }
                d.prototype.current = function () {
                    return this.tokens[0]
                }, d.prototype.next = function () {
                    return this.tokens[1]
                }, d.prototype.peek = function () {
                    if (this.tokens.length)
                        for (var t = this.tokens[0], n = 0; n < arguments.length; n += 1)
                            if (t.value === arguments[n]) return !0
                }, d.prototype.consume = function (t) {
                    return this.tokens.shift()
                }, d.prototype.expect = function (t) {
                    if (!this.peek(t)) throw Error("expected " + t);
                    return this.consume()
                }, d.prototype.isEOF = function () {
                    return this.current().type === r.EOF
                }, d.prototype.parse = function (t) {
                    return this.tokens = this.lexer.lex(t), this.program()
                }, d.prototype.program = function () {
                    for (var t = []; !this.isEOF();) t.push(this.assignment()), this.peek(";") && this.consume();
                    return this.end(), new p(t)
                }, d.prototype.assignment = function () {
                    var t = this.ternary();
                    return t instanceof u && this.peek("=") ? (this.consume(), new f(t.name, this.assignment())) : t
                }, d.prototype.ternary = function () {
                    var t = this.logicalOR();
                    if (this.peek("?")) {
                        this.consume();
                        var n = this.ternary();
                        this.expect(":");
                        var e = this.ternary();
                        return new h(t, n, e)
                    }
                    return t
                }, d.prototype.logicalOR = function () {
                    var t = this.logicalXOR();
                    if (this.peek("||")) {
                        var n = this.consume(),
                            e = this.logicalOR();
                        return new s(n.value, [t, e])
                    }
                    return t
                }, d.prototype.logicalXOR = function () {
                    var t = this.logicalAND();
                    if ("xor" === this.current().value) {
                        var n = this.consume(),
                            e = this.logicalXOR();
                        return new s(n.value, [t, e])
                    }
                    return t
                }, d.prototype.logicalAND = function () {
                    var t = this.bitwiseOR();
                    if (this.peek("&&")) {
                        var n = this.consume(),
                            e = this.logicalAND();
                        return new s(n.value, [t, e])
                    }
                    return t
                }, d.prototype.bitwiseOR = function () {
                    var t = this.bitwiseXOR();
                    if (this.peek("|")) {
                        var n = this.consume(),
                            e = this.bitwiseOR();
                        return new s(n.value, [t, e])
                    }
                    return t
                }, d.prototype.bitwiseXOR = function () {
                    var t = this.bitwiseAND();
                    if (this.peek("^|")) {
                        var n = this.consume(),
                            e = this.bitwiseXOR();
                        return new s(n.value, [t, e])
                    }
                    return t
                }, d.prototype.bitwiseAND = function () {
                    var t = this.relational();
                    if (this.peek("&")) {
                        var n = this.consume(),
                            e = this.bitwiseAND();
                        return new s(n.value, [t, e])
                    }
                    return t
                }, d.prototype.relational = function () {
                    var t = this.shift();
                    if (this.peek("==", "===", "!=", "!==", ">=", "<=", ">", "<")) {
                        var n = this.consume(),
                            e = this.shift();
                        return new s(n.value, [t, e])
                    }
                    return t
                }, d.prototype.shift = function () {
                    var t = this.additive();
                    if (this.peek(">>", "<<", ">>>")) {
                        var n = this.consume(),
                            e = this.shift();
                        return new s(n.value, [t, e])
                    }
                    return t
                }, d.prototype.additive = function () {
                    for (var t = this.multiplicative(); this.peek("+", "-");) {
                        var n = this.consume();
                        t = new s(n.value, [t, this.multiplicative()])
                    }
                    return t
                }, d.prototype.multiplicative = function () {
                    for (var t, n, e = this.unary(); this.peek("*", "/", "%");) t = this.consume(), e = new s(t.value, [e, this.unary()]);
                    return this.current().type === r.SYMBOL || this.peek("(") || !(e.type instanceof o) && this.current().type === r.NUMBER ? (n = this.multiplicative(), new s("*", [e, n])) : e
                }, d.prototype.unary = function () {
                    if (this.peek("-", "+", "~")) {
                        var t = this.consume(),
                            n = this.unary();
                        return new a(t.value, n)
                    }
                    return this.pow()
                }, d.prototype.pow = function () {
                    var t = this.factorial();
                    if (this.peek("^", "**")) {
                        var n = this.consume(),
                            e = this.unary();
                        return new s(n.value, [t, e])
                    }
                    return t
                }, d.prototype.factorial = function () {
                    var t = this.symbol();
                    if (this.peek("!")) {
                        var n = this.consume();
                        return new s(n.value, [t])
                    }
                    return t
                }, d.prototype.symbol = function () {
                    if (this.current().type === r.SYMBOL) {
                        var t = this.consume();
                        return this.functionCall(t)
                    }
                    return this.string()
                }, d.prototype.functionCall = function (t) {
                    var n = t.value;
                    if (this.peek("(")) {
                        this.consume();
                        for (var e = []; !this.peek(")") && !this.isEOF();) e.push(this.assignment()), this.peek(",") && this.consume();
                        return this.expect(")"), new c(n, e)
                    }
                    return new u(n)
                }, d.prototype.string = function () {
                    return this.current().type === r.STRING ? new o(this.consume().value, "string") : this.array()
                }, d.prototype.array = function () {
                    if (this.peek("[")) {
                        this.consume();
                        for (var t = []; !this.peek("]") && !this.isEOF();) t.push(this.assignment()), this.peek(",") && this.consume();
                        return this.expect("]"), new l(t)
                    }
                    return this.number()
                }, d.prototype.number = function () {
                    return this.current().type === r.NUMBER ? new o(this.consume().value, "number") : this.parentheses()
                }, d.prototype.parentheses = function () {
                    if ("(" === this.current().value) {
                        this.consume();
                        var t = this.assignment();
                        return this.expect(")"), t
                    }
                    return this.end()
                }, d.prototype.end = function () {
                    if (this.current().type !== r.EOF) throw Error("unexpected end of expression")
                }, t.exports = d
            },
            3862: (t, n, e) => {
                var r = e(7111);

                function i(t) {
                    this.nodes = t
                }
                i.prototype = Object.create(r.prototype), i.prototype.type = "ArrayNode", t.exports = i
            },
            3262: (t, n, e) => {
                var r = e(7111);

                function i(t, n) {
                    this.name = t, this.expr = n
                }
                i.prototype = Object.create(r.prototype), i.prototype.type = "AssignmentNode", t.exports = i
            },
            2962: (t, n, e) => {
                var r = e(7111);

                function i(t) {
                    this.blocks = t
                }
                i.prototype = Object.create(r.prototype), i.prototype.type = "BlockNode", t.exports = i
            },
            9322: (t, n, e) => {
                var r = e(7111);

                function i(t, n, e) {
                    this.condition = t, this.trueExpr = n, this.falseExpr = e
                }
                i.prototype = Object.create(r.prototype), i.prototype.type = "ConditionalNode", t.exports = i
            },
            6311: (t, n, e) => {
                var r = e(7111),
                    i = {
                        number: !0,
                        string: !0,
                        boolean: !0,
                        undefined: !0,
                        null: !0
                    };

                function o(t, n) {
                    if (!i[n]) throw Error("unsupported type '" + n + "'");
                    this.value = t, this.valueType = n
                }
                o.prototype = Object.create(r.prototype), o.prototype.type = "ConstantNode", t.exports = o
            },
            8935: (t, n, e) => {
                var r = e(7111);

                function i(t, n) {
                    this.name = t, this.args = n
                }
                i.prototype = Object.create(r.prototype), i.prototype.type = "FunctionNode", t.exports = i
            },
            7111: t => {
                function n() {}
                n.prototype.type = "Node", t.exports = n
            },
            6565: (t, n, e) => {
                var r = e(7111);

                function i(t, n) {
                    this.op = t, this.args = n || []
                }
                i.prototype = Object.create(r.prototype), i.prototype.type = "OperatorNode", t.exports = i
            },
            2514: (t, n, e) => {
                var r = e(7111);

                function i(t) {
                    this.name = t
                }
                i.prototype = Object.create(r.prototype), i.prototype.type = "SymbolNode", t.exports = i
            },
            5543: (t, n, e) => {
                var r = e(7111);

                function i(t, n) {
                    this.op = t, this.argument = n
                }
                i.prototype = Object.create(r.prototype), i.prototype.type = "UnaryNode", t.exports = i
            },
            3450: (t, n, e) => {
                t.exports = {
                    ArrayNode: e(3862),
                    AssignmentNode: e(3262),
                    BlockNode: e(2962),
                    ConditionalNode: e(9322),
                    ConstantNode: e(6311),
                    FunctionNode: e(8935),
                    Node: e(7111),
                    OperatorNode: e(6565),
                    SymbolNode: e(2514),
                    UnaryNode: e(5543)
                }
            },
            5054: t => {
                t.exports = {
                    EOF: 0,
                    DELIMITER: 1,
                    NUMBER: 2,
                    STRING: 3,
                    SYMBOL: 4
                }
            },
            3093: (t, n, e) => {
                "use strict";
                var r = e(4822),
                    i = Math.pow(2, -1074),
                    o = -1 >>> 0;
                t.exports = function (t, n) {
                    if (isNaN(t) || isNaN(n)) return NaN;
                    if (t === n) return t;
                    if (0 === t) return n < 0 ? -i : i;
                    var e = r.hi(t),
                        s = r.lo(t);
                    return n > t == t > 0 ? s === o ? (e += 1, s = 0) : s += 1 : 0 === s ? (s = o, e -= 1) : s -= 1, r.pack(s, e)
                }
            },
            917: (t, n) => {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = function (t) {
                    return "graphType" in t || (t.graphType = "interval"), "sampler" in t || (t.sampler = "interval" !== t.graphType ? "builtIn" : "interval"), "fnType" in t || (t.fnType = "linear"), t
                }
            },
            6025: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const i = r(e(5888)),
                    o = e(4920),
                    s = {
                        interval: o.interval,
                        builtIn: o.builtIn
                    };
                n.default = function (t, n) {
                    const e = function (t, n) {
                            const e = n.range || [-1 / 0, 1 / 0];
                            return [Math.max(t.domain()[0], e[0]), Math.min(t.domain()[1], e[1])]
                        }(t.meta.xScale, n),
                        r = (0, s[n.sampler])(t, n, e, n.nSamples || Math.min(i.default.MAX_ITERATIONS, i.default.DEFAULT_ITERATIONS || 2 * t.meta.width));
                    return t.emit("eval", r, n.index, n.isHelper), r
                }
            },
            5888: (t, n, e) => {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const r = e(6618),
                    i = {
                        COLORS: ["steelblue", "red", "#05b378", "orange", "#4040e8", "yellow", "brown", "magenta", "cyan"].map((function (t) {
                            return (0, r.hsl)(t)
                        })),
                        DEFAULT_WIDTH: 550,
                        DEFAULT_HEIGHT: 350,
                        TIP_X_EPS: 1,
                        DEFAULT_ITERATIONS: null,
                        MAX_ITERATIONS: 0
                    };
                i.MAX_ITERATIONS = 10 * i.DEFAULT_WIDTH, n.default = i
            },
            3321: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.scatter = n.interval = n.polyline = void 0;
                const i = r(e(2210));
                n.polyline = i.default;
                const o = r(e(2266));
                n.interval = o.default;
                const s = r(e(648));
                n.scatter = s.default
            },
            2266: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const i = e(3905),
                    o = r(e(6025)),
                    s = r(e(8593));
                n.default = function (t) {
                    let n;
                    const e = t.meta.xScale,
                        r = t.meta.yScale;

                    function a(t, e, r, i) {
                        if (r > i) {
                            const t = r;
                            r = i, i = t
                        }
                        const o = Math.min(e, i),
                            s = Math.max(t, r);
                        return s > o ? [-n, 0] : [s, o]
                    }
                    return function u(c) {
                        c.each((function (c) {
                            const l = u.el = (0, i.select)(this),
                                h = c.index,
                                f = c.closed,
                                p = (0, o.default)(t, c),
                                d = l.selectAll(":scope > path.line").data(p);
                            n = Math.max(p[0].scaledDx, 1);
                            const y = d.enter().append("path").attr("class", "line line-" + h).attr("fill", "none"),
                                m = d.merge(y).attr("stroke-width", n).attr("stroke", s.default.color(c, h)).attr("opacity", f ? .5 : 1).attr("d", (function (t) {
                                    return function (t, i) {
                                        let o = "";
                                        const s = r.range(),
                                            u = Math.min.apply(Math, s),
                                            c = Math.max.apply(Math, s);
                                        for (let s = 0, l = t.length; s < l; s += 1)
                                            if (t[s]) {
                                                const l = t[s][0],
                                                    h = t[s][1];
                                                let f = h.lo,
                                                    p = h.hi;
                                                i && (f = Math.min(f, 0), p = Math.max(p, 0));
                                                const d = e(l.lo) + t.scaledDx / 2,
                                                    y = a(u, c, isFinite(p) ? r(p) : -1 / 0, isFinite(f) ? r(f) : 1 / 0),
                                                    m = y[0],
                                                    g = y[1];
                                                o += " M " + d + " " + m, o += " v " + Math.max(g - m, n)
                                            } return o
                                    }(t, f)
                                }));
                            if (c.attr)
                                for (let t in c.attr) c.attr.hasOwnProperty(t) && m.attr(t, c.attr[t]);
                            d.exit().remove()
                        }))
                    }
                }
            },
            2210: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const i = e(3905),
                    o = e(8783),
                    s = r(e(5627)),
                    a = r(e(8593)),
                    u = r(e(6025));
                n.default = function (t) {
                    return function n(e) {
                        e.each((function (e) {
                            const r = n.el = (0, i.select)(this),
                                c = e.index,
                                l = (0, u.default)(t, e),
                                h = a.default.color(e, c),
                                f = r.selectAll(":scope > path.line").data(l),
                                p = t.meta.yScale.range();
                            let d = p[0],
                                y = p[1];
                            const m = d - y;

                            function g(n) {
                                return (0, s.default)(t.meta.yScale(n[1]), y, d)
                            }
                            d += 1e6 * m, y -= 1e6 * m, e.skipBoundsCheck && (d = 1 / 0, y = -1 / 0);
                            const _ = (0, o.line)().curve(o.curveLinear).x((function (n) {
                                    return t.meta.xScale(n[0])
                                })).y(g),
                                v = (0, o.area)().x((function (n) {
                                    return t.meta.yScale(n[0])
                                })).y0(t.meta.yScale(0)).y1(g),
                                x = f.enter().append("path").attr("class", "line line-" + c).attr("stroke-width", 1).attr("stroke-linecap", "round");
                            f.merge(x).each((function () {
                                const n = (0, i.select)(this);
                                let r;
                                if (e.closed ? (n.attr("fill", h), n.attr("fill-opacity", .3), r = v) : (n.attr("fill", "none"), r = _), n.attr("stroke", h).attr("marker-end", (function () {
                                        return "vector" === e.fnType ? "url(#" + t.markerId + ")" : null
                                    })).attr("d", r), e.attr)
                                    for (let t in e.attr) e.attr.hasOwnProperty(t) && n.attr(t, e.attr[t])
                            })), f.exit().remove()
                        }))
                    }
                }
            },
            648: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const i = e(3905),
                    o = e(6618),
                    s = r(e(8593)),
                    a = r(e(6025));
                n.default = function (t) {
                    const n = t.meta.xScale,
                        e = t.meta.yScale;
                    return function (r) {
                        r.each((function (r) {
                            let u, c;
                            const l = r.index,
                                h = s.default.color(r, l),
                                f = (0, a.default)(t, r),
                                p = [];
                            for (u = 0; u < f.length; u += 1)
                                for (c = 0; c < f[u].length; c += 1) p.push(f[u][c]);
                            const d = (0, i.select)(this).selectAll(":scope > circle").data(p),
                                y = d.enter().append("circle"),
                                m = d.merge(y).attr("fill", (0, o.hsl)(h.toString()).brighter(1.5).hex()).attr("stroke", h).attr("opacity", .7).attr("r", 1).attr("cx", (function (t) {
                                    return n(t[0])
                                })).attr("cy", (function (t) {
                                    return e(t[1])
                                }));
                            if (r.attr)
                                for (let t in r.attr) r.attr.hasOwnProperty(t) && m.attr(t, r.attr[t]);
                            d.exit().remove()
                        }))
                    }
                }
            },
            3559: (t, n, e) => {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const r = e(8783),
                    i = e(3905);
                n.default = function (t) {
                    const n = t.owner.meta.xScale,
                        e = t.owner.meta.yScale,
                        o = (0, r.line)().x((function (t) {
                            return t[0]
                        })).y((function (t) {
                            return t[1]
                        }));
                    return function (t) {
                        t.each((function () {
                            const t = (0, i.select)(this).selectAll("g.annotations").data((function (t) {
                                    return t.annotations || []
                                })),
                                r = t.enter().append("g").attr("class", "annotations"),
                                s = e.range(),
                                a = n.range(),
                                u = t.merge(r).selectAll("path").data((function (t) {
                                    return "x" in t ? [
                                        [
                                            [0, s[0]],
                                            [0, s[1]]
                                        ]
                                    ] : [
                                        [
                                            [a[0], 0],
                                            [a[1], 0]
                                        ]
                                    ]
                                }));
                            u.enter().append("path").attr("stroke", "#eee").attr("d", o), u.exit().remove();
                            const c = t.merge(r).selectAll("text").data((function (t) {
                                return [{
                                    text: t.text || "",
                                    hasX: "x" in t
                                }]
                            }));
                            c.enter().append("text").attr("y", (function (t) {
                                return t.hasX ? 3 : 0
                            })).attr("x", (function (t) {
                                return t.hasX ? 0 : 3
                            })).attr("dy", (function (t) {
                                return t.hasX ? 5 : -5
                            })).attr("text-anchor", (function (t) {
                                return t.hasX ? "end" : ""
                            })).attr("transform", (function (t) {
                                return t.hasX ? "rotate(-90)" : ""
                            })).text((function (t) {
                                return t.text
                            })), c.exit().remove(), t.merge(r).attr("transform", (function (t) {
                                return "x" in t ? "translate(" + n(t.x) + ", 0)" : "translate(0, " + e(t.y) + ")"
                            })), t.exit().remove()
                        }))
                    }
                }
            },
            8016: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const i = e(3905),
                    o = e(3321),
                    s = e(1669),
                    a = r(e(917));
                n.default = function (t) {
                    const n = (0, a.default)({
                        isHelper: !0,
                        skipTip: !0,
                        skipBoundsCheck: !0,
                        nSamples: 2,
                        graphType: "polyline"
                    });

                    function e(t) {
                        if (!t.derivative) return [];
                        const e = "number" == typeof t.derivative.x0 ? t.derivative.x0 : 1 / 0;
                        return n.index = t.index, n.scope = {
                            m: (0, s.builtIn)(t.derivative, "fn", {
                                x: e
                            }),
                            x0: e,
                            y0: (0, s.builtIn)(t, "fn", {
                                x: e
                            })
                        }, n.fn = "m * (x - x0) + y0", [n]
                    }

                    function r(n) {
                        const e = this;
                        n.derivative && n.derivative.updateOnMouseMove && !n.derivative.$$mouseListener && (n.derivative.$$mouseListener = function ({
                            x: t
                        }) {
                            n.derivative && (n.derivative.x0 = t), u(e)
                        }, t.on("tip:update", n.derivative.$$mouseListener))
                    }
                    const u = function (n) {
                        n.each((function (s) {
                            const a = (0, i.select)(this),
                                u = e.call(n, s);
                            r.call(n, s);
                            const c = a.selectAll("g.derivative").data(u),
                                l = c.enter().append("g").attr("class", "derivative");
                            c.merge(l).call((0, o.polyline)(t)), c.merge(l).selectAll("path").attr("opacity", .5), c.exit().remove()
                        }))
                    };
                    return u
                }
            },
            1669: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.interval = n.builtIn = void 0;
                const i = r(e(5248)),
                    o = {
                        interval: r(e(8867)).default,
                        builtIn: i.default
                    };

                function s(t) {
                    return function (n, r, i) {
                        return function (n, r) {
                                const i = n[r],
                                    s = t + "_Expression_" + r,
                                    a = t + "_Compiled_" + r;
                                i !== n[s] && (n[s] = i, n[a] = function (n) {
                                    if ("string" == typeof n) {
                                        const r = o[t](n);
                                        return e.g.math && "builtIn" === t ? {
                                            eval: r.evaluate || r.eval
                                        } : r
                                    }
                                    if ("function" == typeof n) return {
                                        eval: n
                                    };
                                    throw Error("expression must be a string or a function")
                                }(i))
                            }(n, r),
                            function (n, e) {
                                return n[t + "_Compiled_" + e]
                            }(n, r).eval(Object.assign({}, n.scope || {}, i))
                    }
                }
                e.g.math && (o.builtIn = e.g.math.compile);
                const a = s("builtIn");
                n.builtIn = a;
                const u = s("interval");
                n.interval = u
            },
            9489: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const i = e(3905),
                    o = r(e(8016)),
                    s = r(e(9793));
                n.default = function (t) {
                    return function (n) {
                        n.each((function () {
                            const n = (0, i.select)(this);
                            n.call((0, o.default)(t)), n.call((0, s.default)(t))
                        }))
                    }
                }
            },
            9793: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const i = e(3905),
                    o = e(1669),
                    s = r(e(917)),
                    a = e(3321);
                n.default = function (t) {
                    const n = (0, s.default)({
                        isHelper: !0,
                        skipTip: !0,
                        skipBoundsCheck: !0,
                        nSamples: 2,
                        graphType: "polyline"
                    });

                    function e(t, n) {
                        if (!("x0" in n)) throw Error("secant must have the property `x0` defined");
                        n.scope = n.scope || {};
                        const e = n.x0,
                            r = "number" == typeof n.x1 ? n.x1 : 1 / 0;
                        var i;
                        Object.assign(n.scope, {
                            x0: e,
                            x1: r,
                            y0: (0, o.builtIn)(t, "fn", {
                                x: e
                            }),
                            y1: (0, o.builtIn)(t, "fn", {
                                x: r
                            })
                        }), (i = n.scope).m = (i.y1 - i.y0) / (i.x1 - i.x0)
                    }

                    function r(t, n) {
                        e(t, n), n.fn = "m * (x - x0) + y0"
                    }

                    function u(n, r) {
                        const i = this;
                        r.updateOnMouseMove && !r.$$mouseListener && (r.$$mouseListener = function ({
                            x: t
                        }) {
                            r.x1 = t, e(n, r), l(i)
                        }, t.on("tip:update", r.$$mouseListener))
                    }

                    function c(t) {
                        const e = this,
                            i = [];
                        t.secants = t.secants || [];
                        for (let o = 0; o < t.secants.length; o += 1) {
                            const s = t.secants[o] = Object.assign({}, n, t.secants[o]);
                            s.index = t.index, s.fn || (r.call(e, t, s), u.call(e, t, s)), i.push(s)
                        }
                        return i
                    }
                    const l = function (n) {
                        n.each((function (e) {
                            const r = (0, i.select)(this),
                                o = c.call(n, e),
                                s = r.selectAll("g.secant").data(o),
                                u = s.enter().append("g").attr("class", "secant");
                            s.merge(u).call((0, a.polyline)(t)), s.merge(u).selectAll("path").attr("opacity", .5), s.exit().remove()
                        }))
                    };
                    return l
                }
            },
            3607: function (t, n, e) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function (t, n, e, r) {
                        void 0 === r && (r = e);
                        var i = Object.getOwnPropertyDescriptor(n, e);
                        i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                            enumerable: !0,
                            get: function () {
                                return n[e]
                            }
                        }), Object.defineProperty(t, r, i)
                    } : function (t, n, e, r) {
                        void 0 === r && (r = e), t[r] = n[e]
                    }),
                    i = this && this.__setModuleDefault || (Object.create ? function (t, n) {
                        Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: n
                        })
                    } : function (t, n) {
                        t.default = n
                    }),
                    o = this && this.__importStar || function (t) {
                        if (t && t.__esModule) return t;
                        var n = {};
                        if (null != t)
                            for (var e in t) "default" !== e && Object.prototype.hasOwnProperty.call(t, e) && r(n, t, e);
                        return i(n, t), n
                    },
                    s = this && this.__importDefault || function (t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.Chart = void 0;
                const a = e(8783),
                    u = e(103),
                    c = e(9392),
                    l = e(8873),
                    h = e(657),
                    f = e(3905),
                    p = e(214),
                    d = s(e(7187)),
                    y = s(e(3559)),
                    m = s(e(953)),
                    g = s(e(9489)),
                    _ = s(e(917)),
                    v = s(e(5888)),
                    x = o(e(3321)),
                    w = o(e(1669));
                e(360);
                const b = {
                    linear: c.scaleLinear,
                    log: c.scaleLog
                };
                class M extends d.default.EventEmitter {
                    constructor(t) {
                        super();
                        const n = Math.random(),
                            e = String.fromCharCode(Math.floor(26 * n) + 97);
                        this.options = t, this.id = e + n.toString(16).substr(2), this.options.id = this.id, this.markerId = this.id + "-marker", M.cache[this.id] = this, this.linkedGraphs = [this], this.meta = {}, this.setUpEventListeners()
                    }
                    build() {
                        return this.internalVars(), this.drawGraphWrapper(), this
                    }
                    getDraggableNode() {
                        return (0, f.select)(this.options.target).select(".zoom-and-drag").node()
                    }
                    getEmitInstance() {
                        let t = this;
                        const n = this.getDraggableNode();
                        return n && (t = n.instance), t
                    }
                    internalVars() {
                        const t = this.meta.margin = {
                            left: 40,
                            right: 20,
                            top: 20,
                            bottom: 20
                        };
                        this.options.title && (this.meta.margin.top = 40), this.meta.width = (this.options.width || v.default.DEFAULT_WIDTH) - t.left - t.right, this.meta.height = (this.options.height || v.default.DEFAULT_HEIGHT) - t.top - t.bottom, this.initializeAxes()
                    }
                    initializeAxes() {
                        const t = this,
                            n = (0, u.format)("~s");

                        function e(t) {
                            return Math.abs(t) - Math.floor(Math.abs(t)) > 0 ? t.toString() : n(t)
                        }(0, u.format)("~e"), this.options.xAxis = this.options.xAxis || {}, this.options.xAxis.type = this.options.xAxis.type || "linear", this.options.yAxis = this.options.yAxis || {}, this.options.yAxis.type = this.options.yAxis.type || "linear";
                        const r = this.meta.xDomain = function (t) {
                                if (t.domain) return t.domain;
                                if ("linear" === t.type) {
                                    const t = 12;
                                    return [-t / 2, t / 2]
                                }
                                if ("log" === t.type) return [1, 10];
                                throw Error("axis type " + t.type + " unsupported")
                            }(this.options.xAxis),
                            i = this.meta.yDomain = function (n) {
                                if (n.domain) return n.domain;
                                const e = function (n) {
                                    const e = n[1] - n[0];
                                    return t.meta.height * e / t.meta.width
                                }(r);
                                if ("linear" === n.type) return [-e / 2, e / 2];
                                if ("log" === n.type) return [1, 10];
                                throw Error("axis type " + n.type + " unsupported")
                            }(this.options.yAxis);
                        this.meta.xScale || (this.meta.xScale = b[this.options.xAxis.type]()), this.meta.xScale.domain(r).range(this.options.xAxis.invert ? [this.meta.width, 0] : [0, this.meta.width]), this.meta.yScale || (this.meta.yScale = b[this.options.yAxis.type]()), this.meta.yScale.domain(i).range(this.options.yAxis.invert ? [0, this.meta.height] : [this.meta.height, 0]), this.meta.xAxis || (this.meta.xAxis = (0, l.axisBottom)(this.meta.xScale)), this.meta.xAxis.tickSize(this.options.grid ? -this.meta.height : 0).tickFormat(e), this.meta.yAxis || (this.meta.yAxis = (0, l.axisLeft)(this.meta.yScale)), this.meta.yAxis.tickSize(this.options.grid ? -this.meta.width : 0).tickFormat(e), this.line = (0, a.line)().x((function (n) {
                            return t.meta.xScale(n[0])
                        })).y((function (n) {
                            return t.meta.yScale(n[1])
                        }))
                    }
                    drawGraphWrapper() {
                        const t = this.root = (0, f.select)(this.options.target).selectAll("svg").data([this.options]);
                        this.root.enter = t.enter().append("svg").attr("class", "function-plot").attr("font-size", this.getFontSize()), t.merge(this.root.enter).attr("width", this.meta.width + this.meta.margin.left + this.meta.margin.right).attr("height", this.meta.height + this.meta.margin.top + this.meta.margin.bottom), this.buildTitle(), this.buildLegend(), this.buildCanvas(), this.buildClip(), this.buildAxis(), this.buildAxisLabel();
                        const n = this.tip = (0, m.default)(Object.assign(this.options.tip || {}, {
                            owner: this
                        }));
                        this.canvas.merge(this.canvas.enter).call(n), this.setUpPlugins(), this.draw(), this.buildZoomHelper()
                    }
                    buildTitle() {
                        const t = this.root.merge(this.root.enter).selectAll("text.title").data((function (t) {
                            return [t.title].filter(Boolean)
                        }));
                        t.enter().append("text").merge(t).attr("class", "title").attr("y", this.meta.margin.top / 2).attr("x", this.meta.margin.left + this.meta.width / 2).attr("font-size", 25).attr("text-anchor", "middle").attr("alignment-baseline", "middle").text(this.options.title), t.exit().remove()
                    }
                    buildLegend() {
                        this.root.enter.append("text").attr("class", "top-right-legend").attr("text-anchor", "end"), this.root.merge(this.root.enter).select(".top-right-legend").attr("y", this.meta.margin.top / 2).attr("x", this.meta.width + this.meta.margin.left)
                    }
                    buildCanvas() {
                        const t = this.canvas = this.root.merge(this.root.enter).selectAll(".canvas").data((function (t) {
                            return [t]
                        }));
                        this.canvas.enter = t.enter().append("g").attr("class", "canvas")
                    }
                    buildClip() {
                        const t = this.id,
                            n = this.canvas.enter.append("defs");
                        n.append("clipPath").attr("id", "function-plot-clip-" + t).append("rect").attr("class", "clip static-clip"), this.canvas.merge(this.canvas.enter).selectAll(".clip").attr("width", this.meta.width).attr("height", this.meta.height), n.append("clipPath").append("marker").attr("id", this.markerId).attr("viewBox", "0 -5 10 10").attr("refX", 10).attr("markerWidth", 5).attr("markerHeight", 5).attr("orient", "auto").append("svg:path").attr("d", "M0,-5L10,0L0,5L0,0").attr("stroke-width", "0px").attr("fill-opacity", 1).attr("fill", "#777")
                    }
                    buildAxis() {
                        const t = this.canvas.enter;
                        t.append("g").attr("class", "x axis"), t.append("g").attr("class", "y axis"), this.canvas.merge(this.canvas.enter).select(".x.axis").attr("transform", "translate(0," + this.meta.height + ")").call(this.meta.xAxis), this.canvas.merge(this.canvas.enter).select(".y.axis").call(this.meta.yAxis)
                    }
                    buildAxisLabel() {
                        const t = this.canvas,
                            n = t.merge(t.enter).selectAll("text.x.axis-label").data((function (t) {
                                return [t.xAxis.label].filter(Boolean)
                            })),
                            e = n.enter().append("text").attr("class", "x axis-label").attr("text-anchor", "end");
                        n.merge(e).attr("x", this.meta.width).attr("y", this.meta.height - 6).text((function (t) {
                            return t
                        })), n.exit().remove();
                        const r = t.merge(t.enter).selectAll("text.y.axis-label").data((function (t) {
                                return [t.yAxis.label].filter(Boolean)
                            })),
                            i = r.enter().append("text").attr("class", "y axis-label").attr("y", 6).attr("dy", ".75em").attr("text-anchor", "end").attr("transform", "rotate(-90)");
                        r.merge(i).text((function (t) {
                            return t
                        })), r.exit().remove()
                    }
                    buildContent() {
                        const t = this,
                            n = this.canvas;
                        n.merge(n.enter).attr("transform", "translate(" + this.meta.margin.left + "," + this.meta.margin.top + ")");
                        const e = this.content = n.merge(n.enter).selectAll(":scope > g.content").data((function (t) {
                                return [t]
                            })),
                            r = e.enter().append("g").attr("clip-path", "url(#function-plot-clip-" + this.id + ")").attr("class", "content");
                        if ("linear" === this.options.xAxis.type) {
                            const t = e.merge(r).selectAll(":scope > path.y.origin").data([
                                    [
                                        [0, this.meta.yScale.domain()[0]],
                                        [0, this.meta.yScale.domain()[1]]
                                    ]
                                ]),
                                n = t.enter().append("path").attr("class", "y origin").attr("stroke", "black").attr("opacity", .2);
                            t.merge(n).attr("d", this.line)
                        }
                        if ("linear" === this.options.yAxis.type) {
                            const t = e.merge(r).selectAll(":scope > path.x.origin").data([
                                    [
                                        [this.meta.xScale.domain()[0], 0],
                                        [this.meta.xScale.domain()[1], 0]
                                    ]
                                ]),
                                n = t.enter().append("path").attr("class", "x origin").attr("stroke", "black").attr("opacity", .2);
                            t.merge(n).attr("d", this.line)
                        }
                        e.merge(r).call((0, y.default)({
                            owner: t
                        }));
                        const i = e.merge(r).selectAll(":scope > g.graph").data((t => t.data.map(_.default))),
                            o = i.enter().append("g").attr("class", "graph");
                        i.merge(o).each((function (n, e) {
                            n.index = e;
                            const r = (0, f.select)(this);
                            r.call(x[n.graphType](t)), r.call((0, g.default)(t))
                        }))
                    }
                    buildZoomHelper() {
                        const t = this;
                        this.meta.zoomBehavior || (this.meta.zoomBehavior = (0, h.zoom)().on("zoom", (function (n) {
                            t.getEmitInstance().emit("all:zoom", n)
                        })), t.meta.zoomBehavior.xScale = t.meta.xScale.copy(), t.meta.zoomBehavior.yScale = t.meta.yScale.copy()), t.meta.zoomBehavior.xScale.range(t.meta.xScale.range()), t.meta.zoomBehavior.yScale.range(t.meta.yScale.range()), this.canvas.enter.append("rect").call(this.meta.zoomBehavior).attr("class", "zoom-and-drag").style("fill", "none").style("pointer-events", "all").on("mouseover", (function (n) {
                            t.getEmitInstance().emit("all:mouseover", n)
                        })).on("mouseout", (function (n) {
                            t.getEmitInstance().emit("all:mouseout", n)
                        })).on("mousemove", (function (n) {
                            t.getEmitInstance().emit("all:mousemove", n)
                        })), this.draggable = this.canvas.merge(this.canvas.enter).select(".zoom-and-drag").call((n => {
                            n.node() && (n.node().instance = t)
                        })).attr("width", this.meta.width).attr("height", this.meta.height)
                    }
                    setUpPlugins() {
                        const t = this.options.plugins || [],
                            n = this;
                        t.forEach((function (t) {
                            t(n)
                        }))
                    }
                    addLink() {
                        for (let t = 0; t < arguments.length; t += 1) this.linkedGraphs.push(arguments[t])
                    }
                    updateAxes() {
                        const t = this,
                            n = t.canvas.merge(t.canvas.enter);
                        n.select(".x.axis").call(t.meta.xAxis), n.select(".y.axis").call(t.meta.yAxis), n.selectAll(".axis path, .axis line").attr("fill", "none").attr("stroke", "black").attr("shape-rendering", "crispedges").attr("opacity", .1)
                    }
                    syncOptions() {
                        this.options.xAxis.domain = this.meta.xScale.domain(), this.options.yAxis.domain = this.meta.yScale.domain()
                    }
                    getFontSize() {
                        return Math.max(Math.max(this.meta.width, this.meta.height) / 50, 8)
                    }
                    draw() {
                        const t = this;
                        t.emit("before:draw"), t.syncOptions(), t.updateAxes(), t.buildContent(), t.emit("after:draw")
                    }
                    setUpEventListeners() {
                        const t = this,
                            n = this.getEmitInstance();
                        n && n.removeAllListeners();
                        const e = {
                                mousemove: function (n) {
                                    t.tip.move(n)
                                },
                                mouseover: function () {
                                    t.tip.show()
                                },
                                mouseout: function () {
                                    t.tip.hide()
                                },
                                zoom: function ({
                                    transform: n
                                }) {
                                    if (t.options.disableZoom) return;
                                    const e = n.rescaleX(t.meta.zoomBehavior.xScale).interpolate(p.interpolateRound),
                                        r = n.rescaleY(t.meta.zoomBehavior.yScale).interpolate(p.interpolateRound);
                                    t.meta.xScale.domain(e.domain()).range(e.range()), t.meta.yScale.domain(r.domain()).range(r.range())
                                },
                                "tip:update": function ({
                                    x: n,
                                    y: e,
                                    index: r
                                }) {
                                    const i = t.root.merge(t.root.enter).datum().data[r],
                                        o = i.title || "",
                                        s = i.renderer || function (t, n) {
                                            return t.toFixed(3) + ", " + n.toFixed(3)
                                        },
                                        a = [];
                                    o && a.push(o), a.push(s(n, e)), t.root.select(".top-right-legend").attr("fill", v.default.COLORS[r]).text(a.join(" "))
                                }
                            },
                            r = {
                                mousemove: function (n) {
                                    const e = (0, f.pointer)(n, t.draggable.node()),
                                        r = {
                                            x: t.meta.xScale.invert(e[0]),
                                            y: t.meta.yScale.invert(e[1])
                                        };
                                    t.linkedGraphs.forEach((function (t) {
                                        t.emit("before:mousemove", r), t.emit("mousemove", r)
                                    }))
                                },
                                zoom: function (n) {
                                    t.linkedGraphs.forEach((function (e) {
                                        e.draggable.node().__zoom = t.draggable.node().__zoom, e.emit("zoom", n), e.draw()
                                    })), t.emit("all:mousemove", n)
                                }
                            };
                        Object.keys(e).forEach((function (n) {
                            !r[n] && t.on("all:" + n, (function () {
                                const e = Array.prototype.slice.call(arguments);
                                t.linkedGraphs.forEach((function (t) {
                                    const r = e.slice();
                                    r.unshift(n), t.emit.apply(t, r)
                                }))
                            })), t.on(n, e[n])
                        })), Object.keys(r).forEach((function (n) {
                            t.on("all:" + n, r[n])
                        }))
                    }
                }

                function T(t = {
                    target: null
                }) {
                    t.data = t.data || [];
                    let n = M.cache[t.id];
                    return n || (n = new M(t)), n.build()
                }
                n.Chart = M, M.cache = {}, T.globals = v.default, T.$eval = w, T.graphTypes = x, n.default = T
            },
            360: () => {
                "undefined" != typeof window && function (t, n) {
                    try {
                        t.querySelector(":scope body")
                    } catch (e) {
                        ["querySelector", "querySelectorAll"].forEach((function (e) {
                            const r = n[e];
                            n[e] = function (n) {
                                if (/(^|,)\s*:scope/.test(n)) {
                                    const r = this.id;
                                    this.id = "ID_" + Date.now(), n = n.replace(/((^|,)\s*):scope/g, "$1#" + this.id);
                                    const i = t[e](n);
                                    return this.id = r, i
                                }
                                return r.call(this, n)
                            }
                        }))
                    }
                }(window.document, Element.prototype)
            },
            7777: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const i = r(e(5627)),
                    o = r(e(8593)),
                    s = e(1669);

                function a(t, n, e, r, i) {
                    if (!i) return {
                        asymptote: !0,
                        d0: t,
                        d1: n
                    };
                    const u = t[0],
                        c = n[0],
                        l = o.default.linspace(u, c, 10);
                    let h, f;
                    for (let t = 0; t < 10; t += 1) {
                        const n = l[t],
                            u = (0, s.builtIn)(e, "fn", {
                                x: n
                            });
                        if (t && h) {
                            const t = u - h;
                            if (o.default.sgn(t) === r) return a([f, h], [n, u], e, r, i - 1)
                        }
                        h = u, f = n
                    }
                    return {
                        asymptote: !1,
                        d0: t,
                        d1: n
                    }
                }

                function u(t, n, e, r) {
                    const u = o.default.space(t, e, r),
                        c = t.meta.yScale.domain(),
                        l = c[1] - c[0],
                        h = c[0] - 1e5 * l,
                        f = c[1] + 1e5 * l;
                    let p = [];
                    for (let t = 0; t < u.length; t += 1) {
                        const e = u[t],
                            r = (0, s.builtIn)(n, "fn", {
                                x: e
                            });
                        o.default.isValidNumber(e) && o.default.isValidNumber(r) && p.push([e, (0, i.default)(r, h, f)])
                    }
                    return p = function (t, n, e) {
                        let r, i, s, u = [];
                        const c = [],
                            l = t.meta.yScale.domain(),
                            h = l[0],
                            f = l[1];

                        function p(t) {
                            return t[1] = Math.min(t[1], f), t[1] = Math.max(t[1], h), t
                        }
                        for (e[0] && (u.push(e[0]), s = e[1][0] - e[0][0], i = o.default.sgn(e[1][1] - e[0][1])), r = 1; r < e.length;) {
                            const t = e[r - 1][1],
                                l = e[r][1] - t,
                                h = o.default.sgn(l);
                            if (i !== h && Math.abs(l / s) > 1) {
                                const t = a(e[r - 1], e[r], n, h, 3);
                                t.asymptote && (u.push(p(t.d0)), c.push(u), u = [p(t.d1)])
                            }
                            i = h, u.push(e[r]), ++r
                        }
                        return u.length && c.push(u), c
                    }(t, n, p), p
                }

                function c(t, n, e, r) {
                    const i = n.range || [0, 2 * Math.PI],
                        a = o.default.space(t, i, r),
                        u = [];
                    for (let t = 0; t < a.length; t += 1) {
                        const e = a[t],
                            r = (0, s.builtIn)(n, "x", {
                                t: e
                            }),
                            i = (0, s.builtIn)(n, "y", {
                                t: e
                            });
                        u.push([r, i])
                    }
                    return [u]
                }

                function l(t, n, e, r) {
                    const i = n.range || [-Math.PI, Math.PI],
                        a = o.default.space(t, i, r),
                        u = [];
                    for (let t = 0; t < a.length; t += 1) {
                        const e = a[t],
                            r = (0, s.builtIn)(n, "r", {
                                theta: e
                            }),
                            i = r * Math.cos(e),
                            o = r * Math.sin(e);
                        u.push([i, o])
                    }
                    return [u]
                }

                function h(t, n, e, r) {
                    return [n.points]
                }

                function f(t, n, e, r) {
                    return n.offset = n.offset || [0, 0], [
                        [n.offset, [n.vector[0] + n.offset[0], n.vector[1] + n.offset[1]]]
                    ]
                }
                n.default = function (t, n, e, r) {
                    const i = {
                        parametric: c,
                        polar: l,
                        points: h,
                        vector: f,
                        linear: u
                    };
                    if (!(n.fnType in i)) throw Error(n.fnType + " is not supported in the `builtIn` sampler");
                    return i[n.fnType].apply(null, arguments)
                }
            },
            4920: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.interval = n.builtIn = void 0;
                const i = r(e(7777));
                n.builtIn = i.default;
                const o = r(e(8458));
                n.interval = o.default
            },
            8458: function (t, n, e) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function (t, n, e, r) {
                        void 0 === r && (r = e);
                        var i = Object.getOwnPropertyDescriptor(n, e);
                        i && !("get" in i ? !n.__esModule : i.writable || i.configurable) || (i = {
                            enumerable: !0,
                            get: function () {
                                return n[e]
                            }
                        }), Object.defineProperty(t, r, i)
                    } : function (t, n, e, r) {
                        void 0 === r && (r = e), t[r] = n[e]
                    }),
                    i = this && this.__setModuleDefault || (Object.create ? function (t, n) {
                        Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: n
                        })
                    } : function (t, n) {
                        t.default = n
                    }),
                    o = this && this.__importStar || function (t) {
                        if (t && t.__esModule) return t;
                        var n = {};
                        if (null != t)
                            for (var e in t) "default" !== e && Object.prototype.hasOwnProperty.call(t, e) && r(n, t, e);
                        return i(n, t), n
                    },
                    s = this && this.__importDefault || function (t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const a = o(e(8867)),
                    u = e(1669),
                    c = s(e(8593));

                function l(t, n, e, r) {
                    const i = c.default.space(t, e, r),
                        o = t.meta.xScale,
                        s = t.meta.yScale,
                        l = s.domain()[0],
                        h = s.domain()[1],
                        f = [];
                    let p;
                    for (p = 0; p < i.length - 1; p += 1) {
                        const t = {
                                lo: i[p],
                                hi: i[p + 1]
                            },
                            e = (0, u.interval)(n, "fn", {
                                x: t
                            });
                        a.Interval.isEmpty(e) || a.Interval.isWhole(e) || f.push([t, e]), a.Interval.isWhole(e) && f.push(null)
                    }
                    for (p = 1; p < f.length - 1; p += 1)
                        if (!f[p]) {
                            const t = f[p - 1],
                                n = f[p + 1];
                            t && n && !a.Interval.intervalsOverlap(t[1], n[1]) && (t[1].lo > n[1].hi && (t[1].hi = Math.max(h, t[1].hi), n[1].lo = Math.min(l, n[1].lo)), t[1].hi < n[1].lo && (t[1].lo = Math.min(l, t[1].lo), n[1].hi = Math.max(h, n[1].hi)))
                        } return f.scaledDx = o(i[1]) - o(i[0]), [f]
                }
                let h;

                function f(t, n, e) {
                    const r = (0, u.interval)(e, "fn", {
                        x: t,
                        y: n
                    });
                    if (!a.Interval.zeroIn(r)) return this;
                    if (function (t, n) {
                            return a.Interval.width(t) < h
                        }(t)) return this.push([t, n]), this;
                    const i = t.lo + (t.hi - t.lo) / 2,
                        o = n.lo + (n.hi - n.lo) / 2,
                        s = {
                            lo: i,
                            hi: t.hi
                        },
                        c = {
                            lo: t.lo,
                            hi: i
                        },
                        l = {
                            lo: o,
                            hi: n.hi
                        },
                        p = {
                            lo: n.lo,
                            hi: o
                        };
                    f.call(this, s, l, e), f.call(this, s, p, e), f.call(this, c, l, e), f.call(this, c, p, e)
                }

                function p(t, n) {
                    const e = t.meta.xScale,
                        r = t.meta.xScale.domain(),
                        i = t.meta.yScale.domain(),
                        o = {
                            lo: r[0],
                            hi: r[1]
                        },
                        s = {
                            lo: i[0],
                            hi: i[1]
                        },
                        a = [];
                    return h = e.invert(1) - e.invert(0), f.call(a, o, s, n), a.scaledDx = 1, [a]
                }
                a.default.policies.disableRounding(), n.default = function (t, n, e, r) {
                    const i = {
                        implicit: p,
                        linear: l
                    };
                    if (!i.hasOwnProperty(n.fnType)) throw Error(n.fnType + " is not supported in the `interval` sampler");
                    return i[n.fnType].apply(null, arguments)
                }
            },
            953: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const i = e(8783),
                    o = e(3905),
                    s = r(e(5627)),
                    a = r(e(8593)),
                    u = r(e(5888)),
                    c = e(1669);
                n.default = function (t) {
                    t = Object.assign({
                        xLine: !1,
                        yLine: !1,
                        renderer: function (t, n) {
                            return "(" + t.toFixed(3) + ", " + n.toFixed(3) + ")"
                        },
                        owner: null
                    }, t);
                    const n = 20,
                        e = (0, i.line)().x((function (t) {
                            return t[0]
                        })).y((function (t) {
                            return t[1]
                        }));

                    function r(t, n) {
                        return t.append("path").datum(n).attr("stroke", "grey").attr("stroke-dasharray", "5,5").attr("opacity", .5).attr("d", e)
                    }
                    let l, h;

                    function f(e) {
                        const i = e.selectAll("g.tip").data((function (t) {
                                return [t]
                            })),
                            s = i.enter().append("g").attr("class", "tip").attr("clip-path", "url(#function-plot-clip-" + t.owner.id + ")");
                        l = i.merge(s).selectAll("g.inner-tip").data((function (t) {
                            return [t]
                        })), h = l.enter().append("g").attr("class", "inner-tip").style("display", "none").each((function () {
                            const e = (0, o.select)(this);
                            r(e, [
                                [0, -t.owner.meta.height - n],
                                [0, t.owner.meta.height + n]
                            ]).attr("class", "tip-x-line").style("display", "none"), r(e, [
                                [-t.owner.meta.width - n, 0],
                                [t.owner.meta.width + n, 0]
                            ]).attr("class", "tip-y-line").style("display", "none"), e.append("circle").attr("r", 3), e.append("text").attr("transform", "translate(5,-5)")
                        })), l.merge(h).selectAll(".tip-x-line").style("display", t.xLine ? null : "none"), l.merge(h).selectAll(".tip-y-line").style("display", t.yLine ? null : "none")
                    }
                    return f.move = function (e) {
                        let r, i, o, p = 1 / 0,
                            d = -1;
                        const y = l.merge(h),
                            m = 1e8,
                            g = t.owner.meta,
                            _ = y.datum().data,
                            v = g.xScale,
                            x = g.yScale,
                            w = g.width,
                            b = g.height,
                            M = e.x,
                            T = e.y;
                        for (r = 0; r < _.length; r += 1) {
                            if (_[r].skipTip || "linear" !== _[r].fnType) continue;
                            const t = _[r].range || [-m, m];
                            let n;
                            if (M > t[0] - u.default.TIP_X_EPS && M < t[1] + u.default.TIP_X_EPS) {
                                try {
                                    n = (0, c.builtIn)(_[r], "fn", {
                                        x: M
                                    })
                                } catch (t) {}
                                if (a.default.isValidNumber(n)) {
                                    const t = Math.abs(n - T);
                                    t < p && (p = t, d = r)
                                }
                            }
                        }
                        if (-1 !== d) {
                            i = M, _[d].range && (i = Math.max(i, _[d].range[0]), i = Math.min(i, _[d].range[1])), o = (0, c.builtIn)(_[d], "fn", {
                                x: i
                            }), f.show(), t.owner.emit("tip:update", {
                                x: i,
                                y: o,
                                index: d
                            });
                            const e = (0, s.default)(i, v.invert(-20), v.invert(w + n)),
                                r = (0, s.default)(o, x.invert(b + n), x.invert(-20)),
                                u = a.default.color(_[d], d);
                            y.style("color", "red"), y.attr("transform", "translate(" + v(e) + "," + x(r) + ")"), y.select("circle").attr("fill", u), y.select("text").attr("fill", u).text(t.renderer(i, o, d))
                        } else f.hide()
                    }, f.show = function () {
                        l.merge(h).style("display", null)
                    }, f.hide = function () {
                        l.merge(h).style("display", "none")
                    }, Object.keys(t).forEach((function (n) {
                        a.default.getterSetter.call(f, t, n)
                    })), f
                }
            },
            8593: function (t, n, e) {
                "use strict";
                var r = this && this.__importDefault || function (t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const i = r(e(5888)),
                    o = {
                        linspace: function (t, n, e) {
                            const r = (n - t) / (e - 1);
                            return Array.from({
                                length: e
                            }, ((n, e) => t + r * e))
                        },
                        logspace: function (t, n, e) {
                            return this.linspace(t, n, e).map((t => Math.pow(10, t)))
                        },
                        isValidNumber: function (t) {
                            return "number" == typeof t && !isNaN(t)
                        },
                        space: function (t, n, e) {
                            const r = n[0],
                                i = n[1];
                            return "log" === t.options.xAxis.type ? this.logspace(Math.log10(r), Math.log10(i), e) : this.linspace(r, i, e)
                        },
                        getterSetter: function (t, n) {
                            const e = this;
                            this[n] = function (r) {
                                return arguments.length ? (t[n] = r, e) : t[n]
                            }
                        },
                        sgn: function (t) {
                            return t < 0 ? -1 : t > 0 ? 1 : 0
                        },
                        color: function (t, n) {
                            return t.color || i.default.COLORS[n].hex()
                        }
                    };
                n.default = o
            },
            8873: (t, n, e) => {
                "use strict";

                function r(t) {
                    return t
                }
                e.r(n), e.d(n, {
                    axisBottom: () => p,
                    axisLeft: () => d,
                    axisRight: () => f,
                    axisTop: () => h
                });
                var i = 1e-6;

                function o(t) {
                    return "translate(" + t + ",0)"
                }

                function s(t) {
                    return "translate(0," + t + ")"
                }

                function a(t) {
                    return n => +t(n)
                }

                function u(t, n) {
                    return n = Math.max(0, t.bandwidth() - 2 * n) / 2, t.round() && (n = Math.round(n)), e => +t(e) + n
                }

                function c() {
                    return !this.__axis
                }

                function l(t, n) {
                    var e = [],
                        l = null,
                        h = null,
                        f = 6,
                        p = 6,
                        d = 3,
                        y = "undefined" != typeof window && window.devicePixelRatio > 1 ? 0 : .5,
                        m = 1 === t || 4 === t ? -1 : 1,
                        g = 4 === t || 2 === t ? "x" : "y",
                        _ = 1 === t || 3 === t ? o : s;

                    function v(o) {
                        var s = null == l ? n.ticks ? n.ticks.apply(n, e) : n.domain() : l,
                            v = null == h ? n.tickFormat ? n.tickFormat.apply(n, e) : r : h,
                            x = Math.max(f, 0) + d,
                            w = n.range(),
                            b = +w[0] + y,
                            M = +w[w.length - 1] + y,
                            T = (n.bandwidth ? u : a)(n.copy(), y),
                            E = o.selection ? o.selection() : o,
                            k = E.selectAll(".domain").data([null]),
                            N = E.selectAll(".tick").data(s, n).order(),
                            A = N.exit(),
                            S = N.enter().append("g").attr("class", "tick"),
                            P = N.select("line"),
                            O = N.select("text");
                        k = k.merge(k.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), N = N.merge(S), P = P.merge(S.append("line").attr("stroke", "currentColor").attr(g + "2", m * f)), O = O.merge(S.append("text").attr("fill", "currentColor").attr(g, m * x).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")), o !== E && (k = k.transition(o), N = N.transition(o), P = P.transition(o), O = O.transition(o), A = A.transition(o).attr("opacity", i).attr("transform", (function (t) {
                            return isFinite(t = T(t)) ? _(t + y) : this.getAttribute("transform")
                        })), S.attr("opacity", i).attr("transform", (function (t) {
                            var n = this.parentNode.__axis;
                            return _((n && isFinite(n = n(t)) ? n : T(t)) + y)
                        }))), A.remove(), k.attr("d", 4 === t || 2 === t ? p ? "M" + m * p + "," + b + "H" + y + "V" + M + "H" + m * p : "M" + y + "," + b + "V" + M : p ? "M" + b + "," + m * p + "V" + y + "H" + M + "V" + m * p : "M" + b + "," + y + "H" + M), N.attr("opacity", 1).attr("transform", (function (t) {
                            return _(T(t) + y)
                        })), P.attr(g + "2", m * f), O.attr(g, m * x).text(v), E.filter(c).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"), E.each((function () {
                            this.__axis = T
                        }))
                    }
                    return v.scale = function (t) {
                        return arguments.length ? (n = t, v) : n
                    }, v.ticks = function () {
                        return e = Array.from(arguments), v
                    }, v.tickArguments = function (t) {
                        return arguments.length ? (e = null == t ? [] : Array.from(t), v) : e.slice()
                    }, v.tickValues = function (t) {
                        return arguments.length ? (l = null == t ? null : Array.from(t), v) : l && l.slice()
                    }, v.tickFormat = function (t) {
                        return arguments.length ? (h = t, v) : h
                    }, v.tickSize = function (t) {
                        return arguments.length ? (f = p = +t, v) : f
                    }, v.tickSizeInner = function (t) {
                        return arguments.length ? (f = +t, v) : f
                    }, v.tickSizeOuter = function (t) {
                        return arguments.length ? (p = +t, v) : p
                    }, v.tickPadding = function (t) {
                        return arguments.length ? (d = +t, v) : d
                    }, v.offset = function (t) {
                        return arguments.length ? (y = +t, v) : y
                    }, v
                }

                function h(t) {
                    return l(1, t)
                }

                function f(t) {
                    return l(2, t)
                }

                function p(t) {
                    return l(3, t)
                }

                function d(t) {
                    return l(4, t)
                }
            },
            4447: (t, n, e) => {
                "use strict";
                e.d(n, {
                    B8: () => T,
                    Il: () => i,
                    J5: () => s,
                    SU: () => M,
                    Ss: () => E,
                    Ym: () => I,
                    ZP: () => x,
                    xV: () => o
                });
                var r = e(9531);

                function i() {}
                var o = .7,
                    s = 1 / o,
                    a = "\\s*([+-]?\\d+)\\s*",
                    u = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                    c = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                    l = /^#([0-9a-f]{3,8})$/,
                    h = new RegExp(`^rgb\\(${a},${a},${a}\\)$`),
                    f = new RegExp(`^rgb\\(${c},${c},${c}\\)$`),
                    p = new RegExp(`^rgba\\(${a},${a},${a},${u}\\)$`),
                    d = new RegExp(`^rgba\\(${c},${c},${c},${u}\\)$`),
                    y = new RegExp(`^hsl\\(${u},${c},${c}\\)$`),
                    m = new RegExp(`^hsla\\(${u},${c},${c},${u}\\)$`),
                    g = {
                        aliceblue: 15792383,
                        antiquewhite: 16444375,
                        aqua: 65535,
                        aquamarine: 8388564,
                        azure: 15794175,
                        beige: 16119260,
                        bisque: 16770244,
                        black: 0,
                        blanchedalmond: 16772045,
                        blue: 255,
                        blueviolet: 9055202,
                        brown: 10824234,
                        burlywood: 14596231,
                        cadetblue: 6266528,
                        chartreuse: 8388352,
                        chocolate: 13789470,
                        coral: 16744272,
                        cornflowerblue: 6591981,
                        cornsilk: 16775388,
                        crimson: 14423100,
                        cyan: 65535,
                        darkblue: 139,
                        darkcyan: 35723,
                        darkgoldenrod: 12092939,
                        darkgray: 11119017,
                        darkgreen: 25600,
                        darkgrey: 11119017,
                        darkkhaki: 12433259,
                        darkmagenta: 9109643,
                        darkolivegreen: 5597999,
                        darkorange: 16747520,
                        darkorchid: 10040012,
                        darkred: 9109504,
                        darksalmon: 15308410,
                        darkseagreen: 9419919,
                        darkslateblue: 4734347,
                        darkslategray: 3100495,
                        darkslategrey: 3100495,
                        darkturquoise: 52945,
                        darkviolet: 9699539,
                        deeppink: 16716947,
                        deepskyblue: 49151,
                        dimgray: 6908265,
                        dimgrey: 6908265,
                        dodgerblue: 2003199,
                        firebrick: 11674146,
                        floralwhite: 16775920,
                        forestgreen: 2263842,
                        fuchsia: 16711935,
                        gainsboro: 14474460,
                        ghostwhite: 16316671,
                        gold: 16766720,
                        goldenrod: 14329120,
                        gray: 8421504,
                        green: 32768,
                        greenyellow: 11403055,
                        grey: 8421504,
                        honeydew: 15794160,
                        hotpink: 16738740,
                        indianred: 13458524,
                        indigo: 4915330,
                        ivory: 16777200,
                        khaki: 15787660,
                        lavender: 15132410,
                        lavenderblush: 16773365,
                        lawngreen: 8190976,
                        lemonchiffon: 16775885,
                        lightblue: 11393254,
                        lightcoral: 15761536,
                        lightcyan: 14745599,
                        lightgoldenrodyellow: 16448210,
                        lightgray: 13882323,
                        lightgreen: 9498256,
                        lightgrey: 13882323,
                        lightpink: 16758465,
                        lightsalmon: 16752762,
                        lightseagreen: 2142890,
                        lightskyblue: 8900346,
                        lightslategray: 7833753,
                        lightslategrey: 7833753,
                        lightsteelblue: 11584734,
                        lightyellow: 16777184,
                        lime: 65280,
                        limegreen: 3329330,
                        linen: 16445670,
                        magenta: 16711935,
                        maroon: 8388608,
                        mediumaquamarine: 6737322,
                        mediumblue: 205,
                        mediumorchid: 12211667,
                        mediumpurple: 9662683,
                        mediumseagreen: 3978097,
                        mediumslateblue: 8087790,
                        mediumspringgreen: 64154,
                        mediumturquoise: 4772300,
                        mediumvioletred: 13047173,
                        midnightblue: 1644912,
                        mintcream: 16121850,
                        mistyrose: 16770273,
                        moccasin: 16770229,
                        navajowhite: 16768685,
                        navy: 128,
                        oldlace: 16643558,
                        olive: 8421376,
                        olivedrab: 7048739,
                        orange: 16753920,
                        orangered: 16729344,
                        orchid: 14315734,
                        palegoldenrod: 15657130,
                        palegreen: 10025880,
                        paleturquoise: 11529966,
                        palevioletred: 14381203,
                        papayawhip: 16773077,
                        peachpuff: 16767673,
                        peru: 13468991,
                        pink: 16761035,
                        plum: 14524637,
                        powderblue: 11591910,
                        purple: 8388736,
                        rebeccapurple: 6697881,
                        red: 16711680,
                        rosybrown: 12357519,
                        royalblue: 4286945,
                        saddlebrown: 9127187,
                        salmon: 16416882,
                        sandybrown: 16032864,
                        seagreen: 3050327,
                        seashell: 16774638,
                        sienna: 10506797,
                        silver: 12632256,
                        skyblue: 8900331,
                        slateblue: 6970061,
                        slategray: 7372944,
                        slategrey: 7372944,
                        snow: 16775930,
                        springgreen: 65407,
                        steelblue: 4620980,
                        tan: 13808780,
                        teal: 32896,
                        thistle: 14204888,
                        tomato: 16737095,
                        turquoise: 4251856,
                        violet: 15631086,
                        wheat: 16113331,
                        white: 16777215,
                        whitesmoke: 16119285,
                        yellow: 16776960,
                        yellowgreen: 10145074
                    };

                function _() {
                    return this.rgb().formatHex()
                }

                function v() {
                    return this.rgb().formatRgb()
                }

                function x(t) {
                    var n, e;
                    return t = (t + "").trim().toLowerCase(), (n = l.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? w(n) : 3 === e ? new E(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? b(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? b(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = h.exec(t)) ? new E(n[1], n[2], n[3], 1) : (n = f.exec(t)) ? new E(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = p.exec(t)) ? b(n[1], n[2], n[3], n[4]) : (n = d.exec(t)) ? b(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = y.exec(t)) ? O(n[1], n[2] / 100, n[3] / 100, 1) : (n = m.exec(t)) ? O(n[1], n[2] / 100, n[3] / 100, n[4]) : g.hasOwnProperty(t) ? w(g[t]) : "transparent" === t ? new E(NaN, NaN, NaN, 0) : null
                }

                function w(t) {
                    return new E(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
                }

                function b(t, n, e, r) {
                    return r <= 0 && (t = n = e = NaN), new E(t, n, e, r)
                }

                function M(t) {
                    return t instanceof i || (t = x(t)), t ? new E((t = t.rgb()).r, t.g, t.b, t.opacity) : new E
                }

                function T(t, n, e, r) {
                    return 1 === arguments.length ? M(t) : new E(t, n, e, null == r ? 1 : r)
                }

                function E(t, n, e, r) {
                    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
                }

                function k() {
                    return `#${P(this.r)}${P(this.g)}${P(this.b)}`
                }

                function N() {
                    const t = A(this.opacity);
                    return `${1===t?"rgb(":"rgba("}${S(this.r)}, ${S(this.g)}, ${S(this.b)}${1===t?")":`, ${t})`}`
                }

                function A(t) {
                    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
                }

                function S(t) {
                    return Math.max(0, Math.min(255, Math.round(t) || 0))
                }

                function P(t) {
                    return ((t = S(t)) < 16 ? "0" : "") + t.toString(16)
                }

                function O(t, n, e, r) {
                    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new C(t, n, e, r)
                }

                function L(t) {
                    if (t instanceof C) return new C(t.h, t.s, t.l, t.opacity);
                    if (t instanceof i || (t = x(t)), !t) return new C;
                    if (t instanceof C) return t;
                    var n = (t = t.rgb()).r / 255,
                        e = t.g / 255,
                        r = t.b / 255,
                        o = Math.min(n, e, r),
                        s = Math.max(n, e, r),
                        a = NaN,
                        u = s - o,
                        c = (s + o) / 2;
                    return u ? (a = n === s ? (e - r) / u + 6 * (e < r) : e === s ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? s + o : 2 - s - o, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new C(a, u, c, t.opacity)
                }

                function I(t, n, e, r) {
                    return 1 === arguments.length ? L(t) : new C(t, n, e, null == r ? 1 : r)
                }

                function C(t, n, e, r) {
                    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
                }

                function Z(t) {
                    return (t = (t || 0) % 360) < 0 ? t + 360 : t
                }

                function D(t) {
                    return Math.max(0, Math.min(1, t || 0))
                }

                function H(t, n, e) {
                    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
                }(0, r.Z)(i, x, {
                    copy(t) {
                        return Object.assign(new this.constructor, this, t)
                    },
                    displayable() {
                        return this.rgb().displayable()
                    },
                    hex: _,
                    formatHex: _,
                    formatHex8: function () {
                        return this.rgb().formatHex8()
                    },
                    formatHsl: function () {
                        return L(this).formatHsl()
                    },
                    formatRgb: v,
                    toString: v
                }), (0, r.Z)(E, T, (0, r.l)(i, {
                    brighter(t) {
                        return t = null == t ? s : Math.pow(s, t), new E(this.r * t, this.g * t, this.b * t, this.opacity)
                    },
                    darker(t) {
                        return t = null == t ? o : Math.pow(o, t), new E(this.r * t, this.g * t, this.b * t, this.opacity)
                    },
                    rgb() {
                        return this
                    },
                    clamp() {
                        return new E(S(this.r), S(this.g), S(this.b), A(this.opacity))
                    },
                    displayable() {
                        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
                    },
                    hex: k,
                    formatHex: k,
                    formatHex8: function () {
                        return `#${P(this.r)}${P(this.g)}${P(this.b)}${P(255*(isNaN(this.opacity)?1:this.opacity))}`
                    },
                    formatRgb: N,
                    toString: N
                })), (0, r.Z)(C, I, (0, r.l)(i, {
                    brighter(t) {
                        return t = null == t ? s : Math.pow(s, t), new C(this.h, this.s, this.l * t, this.opacity)
                    },
                    darker(t) {
                        return t = null == t ? o : Math.pow(o, t), new C(this.h, this.s, this.l * t, this.opacity)
                    },
                    rgb() {
                        var t = this.h % 360 + 360 * (this.h < 0),
                            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                            e = this.l,
                            r = e + (e < .5 ? e : 1 - e) * n,
                            i = 2 * e - r;
                        return new E(H(t >= 240 ? t - 240 : t + 120, i, r), H(t, i, r), H(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
                    },
                    clamp() {
                        return new C(Z(this.h), D(this.s), D(this.l), A(this.opacity))
                    },
                    displayable() {
                        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                    },
                    formatHsl() {
                        const t = A(this.opacity);
                        return `${1===t?"hsl(":"hsla("}${Z(this.h)}, ${100*D(this.s)}%, ${100*D(this.l)}%${1===t?")":`, ${t})`}`
                    }
                }))
            },
            5159: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => y
                });
                var r = e(9531),
                    i = e(4447),
                    o = e(5782),
                    s = -.14861,
                    a = 1.78277,
                    u = -.29227,
                    c = -.90649,
                    l = 1.97294,
                    h = l * c,
                    f = l * a,
                    p = a * u - c * s;

                function d(t) {
                    if (t instanceof m) return new m(t.h, t.s, t.l, t.opacity);
                    t instanceof i.Ss || (t = (0, i.SU)(t));
                    var n = t.r / 255,
                        e = t.g / 255,
                        r = t.b / 255,
                        s = (p * r + h * n - f * e) / (p + h - f),
                        a = r - s,
                        d = (l * (e - s) - u * a) / c,
                        y = Math.sqrt(d * d + a * a) / (l * s * (1 - s)),
                        g = y ? Math.atan2(d, a) * o.R - 120 : NaN;
                    return new m(g < 0 ? g + 360 : g, y, s, t.opacity)
                }

                function y(t, n, e, r) {
                    return 1 === arguments.length ? d(t) : new m(t, n, e, null == r ? 1 : r)
                }

                function m(t, n, e, r) {
                    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
                }(0, r.Z)(m, y, (0, r.l)(i.Il, {
                    brighter(t) {
                        return t = null == t ? i.J5 : Math.pow(i.J5, t), new m(this.h, this.s, this.l * t, this.opacity)
                    },
                    darker(t) {
                        return t = null == t ? i.xV : Math.pow(i.xV, t), new m(this.h, this.s, this.l * t, this.opacity)
                    },
                    rgb() {
                        var t = isNaN(this.h) ? 0 : (this.h + 120) * o.u,
                            n = +this.l,
                            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                            r = Math.cos(t),
                            h = Math.sin(t);
                        return new i.Ss(255 * (n + e * (s * r + a * h)), 255 * (n + e * (u * r + c * h)), 255 * (n + e * (l * r)), this.opacity)
                    }
                }))
            },
            9531: (t, n, e) => {
                "use strict";

                function r(t, n, e) {
                    t.prototype = n.prototype = e, e.constructor = t
                }

                function i(t, n) {
                    var e = Object.create(t.prototype);
                    for (var r in n) e[r] = n[r];
                    return e
                }
                e.d(n, {
                    Z: () => r,
                    l: () => i
                })
            },
            6618: (t, n, e) => {
                "use strict";
                e.r(n), e.d(n, {
                    color: () => r.ZP,
                    cubehelix: () => o.Z,
                    gray: () => i.MA,
                    hcl: () => i.Uc,
                    hsl: () => r.Ym,
                    lab: () => i.ZP,
                    lch: () => i.tW,
                    rgb: () => r.B8
                });
                var r = e(4447),
                    i = e(8990),
                    o = e(5159)
            },
            8990: (t, n, e) => {
                "use strict";
                e.d(n, {
                    MA: () => f,
                    Uc: () => w,
                    ZP: () => p,
                    tW: () => x
                });
                var r = e(9531),
                    i = e(4447),
                    o = e(5782);
                const s = .96422,
                    a = .82521,
                    u = 4 / 29,
                    c = 6 / 29,
                    l = 3 * c * c;

                function h(t) {
                    if (t instanceof d) return new d(t.l, t.a, t.b, t.opacity);
                    if (t instanceof b) return M(t);
                    t instanceof i.Ss || (t = (0, i.SU)(t));
                    var n, e, r = _(t.r),
                        o = _(t.g),
                        u = _(t.b),
                        c = y((.2225045 * r + .7168786 * o + .0606169 * u) / 1);
                    return r === o && o === u ? n = e = c : (n = y((.4360747 * r + .3850649 * o + .1430804 * u) / s), e = y((.0139322 * r + .0971045 * o + .7141733 * u) / a)), new d(116 * c - 16, 500 * (n - c), 200 * (c - e), t.opacity)
                }

                function f(t, n) {
                    return new d(t, 0, 0, null == n ? 1 : n)
                }

                function p(t, n, e, r) {
                    return 1 === arguments.length ? h(t) : new d(t, n, e, null == r ? 1 : r)
                }

                function d(t, n, e, r) {
                    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
                }

                function y(t) {
                    return t > .008856451679035631 ? Math.pow(t, 1 / 3) : t / l + u
                }

                function m(t) {
                    return t > c ? t * t * t : l * (t - u)
                }

                function g(t) {
                    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
                }

                function _(t) {
                    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                }

                function v(t) {
                    if (t instanceof b) return new b(t.h, t.c, t.l, t.opacity);
                    if (t instanceof d || (t = h(t)), 0 === t.a && 0 === t.b) return new b(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
                    var n = Math.atan2(t.b, t.a) * o.R;
                    return new b(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
                }

                function x(t, n, e, r) {
                    return 1 === arguments.length ? v(t) : new b(e, n, t, null == r ? 1 : r)
                }

                function w(t, n, e, r) {
                    return 1 === arguments.length ? v(t) : new b(t, n, e, null == r ? 1 : r)
                }

                function b(t, n, e, r) {
                    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
                }

                function M(t) {
                    if (isNaN(t.h)) return new d(t.l, 0, 0, t.opacity);
                    var n = t.h * o.u;
                    return new d(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
                }(0, r.Z)(d, p, (0, r.l)(i.Il, {
                    brighter(t) {
                        return new d(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                    },
                    darker(t) {
                        return new d(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                    },
                    rgb() {
                        var t = (this.l + 16) / 116,
                            n = isNaN(this.a) ? t : t + this.a / 500,
                            e = isNaN(this.b) ? t : t - this.b / 200;
                        return n = s * m(n), t = 1 * m(t), e = a * m(e), new i.Ss(g(3.1338561 * n - 1.6168667 * t - .4906146 * e), g(-.9787684 * n + 1.9161415 * t + .033454 * e), g(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
                    }
                })), (0, r.Z)(b, w, (0, r.l)(i.Il, {
                    brighter(t) {
                        return new b(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
                    },
                    darker(t) {
                        return new b(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
                    },
                    rgb() {
                        return M(this).rgb()
                    }
                }))
            },
            5782: (t, n, e) => {
                "use strict";
                e.d(n, {
                    R: () => i,
                    u: () => r
                });
                const r = Math.PI / 180,
                    i = 180 / Math.PI
            },
            5386: (t, n, e) => {
                "use strict";
                e.d(n, {
                    WU: () => i,
                    ZP: () => a,
                    jH: () => o
                });
                var r, i, o, s = e(28);

                function a(t) {
                    return r = (0, s.Z)(t), i = r.format, o = r.formatPrefix, r
                }
                a({
                    thousands: ",",
                    grouping: [3],
                    currency: ["$", ""]
                })
            },
            5368: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i
                });
                var r = e(8613);

                function i(t) {
                    return (t = (0, r.V)(Math.abs(t))) ? t[1] : NaN
                }
            },
            8613: (t, n, e) => {
                "use strict";

                function r(t) {
                    return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
                }

                function i(t, n) {
                    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                    var e, r = t.slice(0, e);
                    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
                }
                e.d(n, {
                    V: () => i,
                    Z: () => r
                })
            },
            2035: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i,
                    v: () => o
                });
                var r = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

                function i(t) {
                    if (!(n = r.exec(t))) throw new Error("invalid format: " + t);
                    var n;
                    return new o({
                        fill: n[1],
                        align: n[2],
                        sign: n[3],
                        symbol: n[4],
                        zero: n[5],
                        width: n[6],
                        comma: n[7],
                        precision: n[8] && n[8].slice(1),
                        trim: n[9],
                        type: n[10]
                    })
                }

                function o(t) {
                    this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + ""
                }
                i.prototype = o.prototype, o.prototype.toString = function () {
                    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
                }
            },
            103: (t, n, e) => {
                "use strict";
                e.r(n), e.d(n, {
                    FormatSpecifier: () => o.v,
                    format: () => r.WU,
                    formatDefaultLocale: () => r.ZP,
                    formatLocale: () => i.Z,
                    formatPrefix: () => r.jH,
                    formatSpecifier: () => o.Z,
                    precisionFixed: () => s.Z,
                    precisionPrefix: () => a.Z,
                    precisionRound: () => u.Z
                });
                var r = e(5386),
                    i = e(28),
                    o = e(2035),
                    s = e(6909),
                    a = e(7017),
                    u = e(3482)
            },
            28: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => f
                });
                var r, i = e(5368),
                    o = e(2035),
                    s = e(8613);

                function a(t, n) {
                    var e = (0, s.V)(t, n);
                    if (!e) return t + "";
                    var r = e[0],
                        i = e[1];
                    return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
                }
                const u = {
                    "%": (t, n) => (100 * t).toFixed(n),
                    b: t => Math.round(t).toString(2),
                    c: t => t + "",
                    d: s.Z,
                    e: (t, n) => t.toExponential(n),
                    f: (t, n) => t.toFixed(n),
                    g: (t, n) => t.toPrecision(n),
                    o: t => Math.round(t).toString(8),
                    p: (t, n) => a(100 * t, n),
                    r: a,
                    s: function (t, n) {
                        var e = (0, s.V)(t, n);
                        if (!e) return t + "";
                        var i = e[0],
                            o = e[1],
                            a = o - (r = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
                            u = i.length;
                        return a === u ? i : a > u ? i + new Array(a - u + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + (0, s.V)(t, Math.max(0, n + a - 1))[0]
                    },
                    X: t => Math.round(t).toString(16).toUpperCase(),
                    x: t => Math.round(t).toString(16)
                };

                function c(t) {
                    return t
                }
                var l = Array.prototype.map,
                    h = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

                function f(t) {
                    var n, e, s = void 0 === t.grouping || void 0 === t.thousands ? c : (n = l.call(t.grouping, Number), e = t.thousands + "", function (t, r) {
                            for (var i = t.length, o = [], s = 0, a = n[0], u = 0; i > 0 && a > 0 && (u + a + 1 > r && (a = Math.max(1, r - u)), o.push(t.substring(i -= a, i + a)), !((u += a + 1) > r));) a = n[s = (s + 1) % n.length];
                            return o.reverse().join(e)
                        }),
                        a = void 0 === t.currency ? "" : t.currency[0] + "",
                        f = void 0 === t.currency ? "" : t.currency[1] + "",
                        p = void 0 === t.decimal ? "." : t.decimal + "",
                        d = void 0 === t.numerals ? c : function (t) {
                            return function (n) {
                                return n.replace(/[0-9]/g, (function (n) {
                                    return t[+n]
                                }))
                            }
                        }(l.call(t.numerals, String)),
                        y = void 0 === t.percent ? "%" : t.percent + "",
                        m = void 0 === t.minus ? "−" : t.minus + "",
                        g = void 0 === t.nan ? "NaN" : t.nan + "";

                    function _(t) {
                        var n = (t = (0, o.Z)(t)).fill,
                            e = t.align,
                            i = t.sign,
                            c = t.symbol,
                            l = t.zero,
                            _ = t.width,
                            v = t.comma,
                            x = t.precision,
                            w = t.trim,
                            b = t.type;
                        "n" === b ? (v = !0, b = "g") : u[b] || (void 0 === x && (x = 12), w = !0, b = "g"), (l || "0" === n && "=" === e) && (l = !0, n = "0", e = "=");
                        var M = "$" === c ? a : "#" === c && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
                            T = "$" === c ? f : /[%p]/.test(b) ? y : "",
                            E = u[b],
                            k = /[defgprs%]/.test(b);

                        function N(t) {
                            var o, a, u, c = M,
                                f = T;
                            if ("c" === b) f = E(t) + f, t = "";
                            else {
                                var y = (t = +t) < 0 || 1 / t < 0;
                                if (t = isNaN(t) ? g : E(Math.abs(t), x), w && (t = function (t) {
                                        t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
                                            case ".":
                                                i = n = r;
                                                break;
                                            case "0":
                                                0 === i && (i = r), n = r;
                                                break;
                                            default:
                                                if (!+t[r]) break t;
                                                i > 0 && (i = 0)
                                        }
                                        return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
                                    }(t)), y && 0 == +t && "+" !== i && (y = !1), c = (y ? "(" === i ? i : m : "-" === i || "(" === i ? "" : i) + c, f = ("s" === b ? h[8 + r / 3] : "") + f + (y && "(" === i ? ")" : ""), k)
                                    for (o = -1, a = t.length; ++o < a;)
                                        if (48 > (u = t.charCodeAt(o)) || u > 57) {
                                            f = (46 === u ? p + t.slice(o + 1) : t.slice(o)) + f, t = t.slice(0, o);
                                            break
                                        }
                            }
                            v && !l && (t = s(t, 1 / 0));
                            var N = c.length + t.length + f.length,
                                A = N < _ ? new Array(_ - N + 1).join(n) : "";
                            switch (v && l && (t = s(A + t, A.length ? _ - f.length : 1 / 0), A = ""), e) {
                                case "<":
                                    t = c + t + f + A;
                                    break;
                                case "=":
                                    t = c + A + t + f;
                                    break;
                                case "^":
                                    t = A.slice(0, N = A.length >> 1) + c + t + f + A.slice(N);
                                    break;
                                default:
                                    t = A + c + t + f
                            }
                            return d(t)
                        }
                        return x = void 0 === x ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x)), N.toString = function () {
                            return t + ""
                        }, N
                    }
                    return {
                        format: _,
                        formatPrefix: function (t, n) {
                            var e = _(((t = (0, o.Z)(t)).type = "f", t)),
                                r = 3 * Math.max(-8, Math.min(8, Math.floor((0, i.Z)(n) / 3))),
                                s = Math.pow(10, -r),
                                a = h[8 + r / 3];
                            return function (t) {
                                return e(s * t) + a
                            }
                        }
                    }
                }
            },
            6909: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i
                });
                var r = e(5368);

                function i(t) {
                    return Math.max(0, -(0, r.Z)(Math.abs(t)))
                }
            },
            7017: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i
                });
                var r = e(5368);

                function i(t, n) {
                    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, r.Z)(n) / 3))) - (0, r.Z)(Math.abs(t)))
                }
            },
            3482: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i
                });
                var r = e(5368);

                function i(t, n) {
                    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, (0, r.Z)(n) - (0, r.Z)(t)) + 1
                }
            },
            1606: (t, n, e) => {
                "use strict";
                e.d(n, {
                    M: () => s,
                    Z: () => o
                });
                var r = e(5326),
                    i = e(5401);

                function o(t, n) {
                    return ((0, i.v)(n) ? i.Z : s)(t, n)
                }

                function s(t, n) {
                    var e, i = n ? n.length : 0,
                        o = t ? Math.min(i, t.length) : 0,
                        s = new Array(o),
                        a = new Array(i);
                    for (e = 0; e < o; ++e) s[e] = (0, r.Z)(t[e], n[e]);
                    for (; e < i; ++e) a[e] = n[e];
                    return function (t) {
                        for (e = 0; e < o; ++e) a[e] = s[e](t);
                        return a
                    }
                }
            },
            7265: (t, n, e) => {
                "use strict";

                function r(t, n, e, r, i) {
                    var o = t * t,
                        s = o * t;
                    return ((1 - 3 * t + 3 * o - s) * n + (4 - 6 * o + 3 * s) * e + (1 + 3 * t + 3 * o - 3 * s) * r + s * i) / 6
                }

                function i(t) {
                    var n = t.length - 1;
                    return function (e) {
                        var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                            o = t[i],
                            s = t[i + 1],
                            a = i > 0 ? t[i - 1] : 2 * o - s,
                            u = i < n - 1 ? t[i + 2] : 2 * s - o;
                        return r((e - i / n) * n, a, o, s, u)
                    }
                }
                e.d(n, {
                    Z: () => i,
                    t: () => r
                })
            },
            6068: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i
                });
                var r = e(7265);

                function i(t) {
                    var n = t.length;
                    return function (e) {
                        var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                            o = t[(i + n - 1) % n],
                            s = t[i % n],
                            a = t[(i + 1) % n],
                            u = t[(i + 2) % n];
                        return (0, r.t)((e - i / n) * n, o, s, a, u)
                    }
                }
            },
            8280: (t, n, e) => {
                "use strict";
                e.d(n, {
                    ZP: () => a,
                    wx: () => o,
                    yi: () => s
                });
                var r = e(2954);

                function i(t, n) {
                    return function (e) {
                        return t + e * n
                    }
                }

                function o(t, n) {
                    var e = n - t;
                    return e ? i(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : (0, r.Z)(isNaN(t) ? n : t)
                }

                function s(t) {
                    return 1 == (t = +t) ? a : function (n, e) {
                        return e - n ? function (t, n, e) {
                            return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                                function (r) {
                                    return Math.pow(t + r * n, e)
                                }
                        }(n, e, t) : (0, r.Z)(isNaN(n) ? e : n)
                    }
                }

                function a(t, n) {
                    var e = n - t;
                    return e ? i(t, e) : (0, r.Z)(isNaN(t) ? n : t)
                }
            },
            2954: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => r
                });
                const r = t => () => t
            },
            6246: (t, n, e) => {
                "use strict";

                function r(t, n) {
                    var e = new Date;
                    return t = +t, n = +n,
                        function (r) {
                            return e.setTime(t * (1 - r) + n * r), e
                        }
                }
                e.d(n, {
                    Z: () => r
                })
            },
            214: (t, n, e) => {
                "use strict";
                e.r(n), e.d(n, {
                    interpolate: () => r.Z,
                    interpolateArray: () => i.Z,
                    interpolateBasis: () => o.Z,
                    interpolateBasisClosed: () => s.Z,
                    interpolateCubehelix: () => D,
                    interpolateCubehelixLong: () => H,
                    interpolateDate: () => a.Z,
                    interpolateDiscrete: () => u,
                    interpolateHcl: () => L,
                    interpolateHclLong: () => I,
                    interpolateHsl: () => N,
                    interpolateHslLong: () => A,
                    interpolateHue: () => l,
                    interpolateLab: () => P,
                    interpolateNumber: () => f.Z,
                    interpolateNumberArray: () => p.Z,
                    interpolateObject: () => d.Z,
                    interpolateRgb: () => T.ZP,
                    interpolateRgbBasis: () => T.hD,
                    interpolateRgbBasisClosed: () => T.YD,
                    interpolateRound: () => y.Z,
                    interpolateString: () => m.Z,
                    interpolateTransformCss: () => w,
                    interpolateTransformSvg: () => b,
                    interpolateZoom: () => M.Z,
                    piecewise: () => Y.Z,
                    quantize: () => F
                });
                var r = e(5326),
                    i = e(1606),
                    o = e(7265),
                    s = e(6068),
                    a = e(6246);

                function u(t) {
                    var n = t.length;
                    return function (e) {
                        return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
                    }
                }
                var c = e(8280);

                function l(t, n) {
                    var e = (0, c.wx)(+t, +n);
                    return function (t) {
                        var n = e(t);
                        return n - 360 * Math.floor(n / 360)
                    }
                }
                var h, f = e(8063),
                    p = e(5401),
                    d = e(8296),
                    y = e(4635),
                    m = e(6773),
                    g = 180 / Math.PI,
                    _ = {
                        translateX: 0,
                        translateY: 0,
                        rotate: 0,
                        skewX: 0,
                        scaleX: 1,
                        scaleY: 1
                    };

                function v(t, n, e, r, i, o) {
                    var s, a, u;
                    return (s = Math.sqrt(t * t + n * n)) && (t /= s, n /= s), (u = t * e + n * r) && (e -= t * u, r -= n * u), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, u /= a), t * r < n * e && (t = -t, n = -n, u = -u, s = -s), {
                        translateX: i,
                        translateY: o,
                        rotate: Math.atan2(n, t) * g,
                        skewX: Math.atan(u) * g,
                        scaleX: s,
                        scaleY: a
                    }
                }

                function x(t, n, e, r) {
                    function i(t) {
                        return t.length ? t.pop() + " " : ""
                    }
                    return function (o, s) {
                        var a = [],
                            u = [];
                        return o = t(o), s = t(s),
                            function (t, r, i, o, s, a) {
                                if (t !== i || r !== o) {
                                    var u = s.push("translate(", null, n, null, e);
                                    a.push({
                                        i: u - 4,
                                        x: (0, f.Z)(t, i)
                                    }, {
                                        i: u - 2,
                                        x: (0, f.Z)(r, o)
                                    })
                                } else(i || o) && s.push("translate(" + i + n + o + e)
                            }(o.translateX, o.translateY, s.translateX, s.translateY, a, u),
                            function (t, n, e, o) {
                                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                                    i: e.push(i(e) + "rotate(", null, r) - 2,
                                    x: (0, f.Z)(t, n)
                                })) : n && e.push(i(e) + "rotate(" + n + r)
                            }(o.rotate, s.rotate, a, u),
                            function (t, n, e, o) {
                                t !== n ? o.push({
                                    i: e.push(i(e) + "skewX(", null, r) - 2,
                                    x: (0, f.Z)(t, n)
                                }) : n && e.push(i(e) + "skewX(" + n + r)
                            }(o.skewX, s.skewX, a, u),
                            function (t, n, e, r, o, s) {
                                if (t !== e || n !== r) {
                                    var a = o.push(i(o) + "scale(", null, ",", null, ")");
                                    s.push({
                                        i: a - 4,
                                        x: (0, f.Z)(t, e)
                                    }, {
                                        i: a - 2,
                                        x: (0, f.Z)(n, r)
                                    })
                                } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
                            }(o.scaleX, o.scaleY, s.scaleX, s.scaleY, a, u), o = s = null,
                            function (t) {
                                for (var n, e = -1, r = u.length; ++e < r;) a[(n = u[e]).i] = n.x(t);
                                return a.join("")
                            }
                    }
                }
                var w = x((function (t) {
                        const n = new("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
                        return n.isIdentity ? _ : v(n.a, n.b, n.c, n.d, n.e, n.f)
                    }), "px, ", "px)", "deg)"),
                    b = x((function (t) {
                        return null == t ? _ : (h || (h = document.createElementNS("http://www.w3.org/2000/svg", "g")), h.setAttribute("transform", t), (t = h.transform.baseVal.consolidate()) ? v((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : _)
                    }), ", ", ")", ")"),
                    M = e(8167),
                    T = e(6354),
                    E = e(4447);

                function k(t) {
                    return function (n, e) {
                        var r = t((n = (0, E.Ym)(n)).h, (e = (0, E.Ym)(e)).h),
                            i = (0, c.ZP)(n.s, e.s),
                            o = (0, c.ZP)(n.l, e.l),
                            s = (0, c.ZP)(n.opacity, e.opacity);
                        return function (t) {
                            return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = s(t), n + ""
                        }
                    }
                }
                const N = k(c.wx);
                var A = k(c.ZP),
                    S = e(8990);

                function P(t, n) {
                    var e = (0, c.ZP)((t = (0, S.ZP)(t)).l, (n = (0, S.ZP)(n)).l),
                        r = (0, c.ZP)(t.a, n.a),
                        i = (0, c.ZP)(t.b, n.b),
                        o = (0, c.ZP)(t.opacity, n.opacity);
                    return function (n) {
                        return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
                    }
                }

                function O(t) {
                    return function (n, e) {
                        var r = t((n = (0, S.Uc)(n)).h, (e = (0, S.Uc)(e)).h),
                            i = (0, c.ZP)(n.c, e.c),
                            o = (0, c.ZP)(n.l, e.l),
                            s = (0, c.ZP)(n.opacity, e.opacity);
                        return function (t) {
                            return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = s(t), n + ""
                        }
                    }
                }
                const L = O(c.wx);
                var I = O(c.ZP),
                    C = e(5159);

                function Z(t) {
                    return function n(e) {
                        function r(n, r) {
                            var i = t((n = (0, C.Z)(n)).h, (r = (0, C.Z)(r)).h),
                                o = (0, c.ZP)(n.s, r.s),
                                s = (0, c.ZP)(n.l, r.l),
                                a = (0, c.ZP)(n.opacity, r.opacity);
                            return function (t) {
                                return n.h = i(t), n.s = o(t), n.l = s(Math.pow(t, e)), n.opacity = a(t), n + ""
                            }
                        }
                        return e = +e, r.gamma = n, r
                    }(1)
                }
                const D = Z(c.wx);
                var H = Z(c.ZP),
                    Y = e(9640);

                function F(t, n) {
                    for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
                    return e
                }
            },
            8063: (t, n, e) => {
                "use strict";

                function r(t, n) {
                    return t = +t, n = +n,
                        function (e) {
                            return t * (1 - e) + n * e
                        }
                }
                e.d(n, {
                    Z: () => r
                })
            },
            5401: (t, n, e) => {
                "use strict";

                function r(t, n) {
                    n || (n = []);
                    var e, r = t ? Math.min(n.length, t.length) : 0,
                        i = n.slice();
                    return function (o) {
                        for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
                        return i
                    }
                }

                function i(t) {
                    return ArrayBuffer.isView(t) && !(t instanceof DataView)
                }
                e.d(n, {
                    Z: () => r,
                    v: () => i
                })
            },
            8296: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i
                });
                var r = e(5326);

                function i(t, n) {
                    var e, i = {},
                        o = {};
                    for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? i[e] = (0, r.Z)(t[e], n[e]) : o[e] = n[e];
                    return function (t) {
                        for (e in i) o[e] = i[e](t);
                        return o
                    }
                }
            },
            9640: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i
                });
                var r = e(5326);

                function i(t, n) {
                    void 0 === n && (n = t, t = r.Z);
                    for (var e = 0, i = n.length - 1, o = n[0], s = new Array(i < 0 ? 0 : i); e < i;) s[e] = t(o, o = n[++e]);
                    return function (t) {
                        var n = Math.max(0, Math.min(i - 1, Math.floor(t *= i)));
                        return s[n](t - n)
                    }
                }
            },
            6354: (t, n, e) => {
                "use strict";
                e.d(n, {
                    YD: () => l,
                    ZP: () => a,
                    hD: () => c
                });
                var r = e(4447),
                    i = e(7265),
                    o = e(6068),
                    s = e(8280);
                const a = function t(n) {
                    var e = (0, s.yi)(n);

                    function i(t, n) {
                        var i = e((t = (0, r.B8)(t)).r, (n = (0, r.B8)(n)).r),
                            o = e(t.g, n.g),
                            a = e(t.b, n.b),
                            u = (0, s.ZP)(t.opacity, n.opacity);
                        return function (n) {
                            return t.r = i(n), t.g = o(n), t.b = a(n), t.opacity = u(n), t + ""
                        }
                    }
                    return i.gamma = t, i
                }(1);

                function u(t) {
                    return function (n) {
                        var e, i, o = n.length,
                            s = new Array(o),
                            a = new Array(o),
                            u = new Array(o);
                        for (e = 0; e < o; ++e) i = (0, r.B8)(n[e]), s[e] = i.r || 0, a[e] = i.g || 0, u[e] = i.b || 0;
                        return s = t(s), a = t(a), u = t(u), i.opacity = 1,
                            function (t) {
                                return i.r = s(t), i.g = a(t), i.b = u(t), i + ""
                            }
                    }
                }
                var c = u(i.Z),
                    l = u(o.Z)
            },
            4635: (t, n, e) => {
                "use strict";

                function r(t, n) {
                    return t = +t, n = +n,
                        function (e) {
                            return Math.round(t * (1 - e) + n * e)
                        }
                }
                e.d(n, {
                    Z: () => r
                })
            },
            6773: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => s
                });
                var r = e(8063),
                    i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                    o = new RegExp(i.source, "g");

                function s(t, n) {
                    var e, s, a, u = i.lastIndex = o.lastIndex = 0,
                        c = -1,
                        l = [],
                        h = [];
                    for (t += "", n += "";
                        (e = i.exec(t)) && (s = o.exec(n));)(a = s.index) > u && (a = n.slice(u, a), l[c] ? l[c] += a : l[++c] = a), (e = e[0]) === (s = s[0]) ? l[c] ? l[c] += s : l[++c] = s : (l[++c] = null, h.push({
                        i: c,
                        x: (0, r.Z)(e, s)
                    })), u = o.lastIndex;
                    return u < n.length && (a = n.slice(u), l[c] ? l[c] += a : l[++c] = a), l.length < 2 ? h[0] ? function (t) {
                        return function (n) {
                            return t(n) + ""
                        }
                    }(h[0].x) : function (t) {
                        return function () {
                            return t
                        }
                    }(n) : (n = h.length, function (t) {
                        for (var e, r = 0; r < n; ++r) l[(e = h[r]).i] = e.x(t);
                        return l.join("")
                    })
                }
            },
            5326: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => f
                });
                var r = e(4447),
                    i = e(6354),
                    o = e(1606),
                    s = e(6246),
                    a = e(8063),
                    u = e(8296),
                    c = e(6773),
                    l = e(2954),
                    h = e(5401);

                function f(t, n) {
                    var e, f = typeof n;
                    return null == n || "boolean" === f ? (0, l.Z)(n) : ("number" === f ? a.Z : "string" === f ? (e = (0, r.ZP)(n)) ? (n = e, i.ZP) : c.Z : n instanceof r.ZP ? i.ZP : n instanceof Date ? s.Z : (0, h.v)(n) ? h.Z : Array.isArray(n) ? o.M : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? u.Z : a.Z)(t, n)
                }
            },
            8167: (t, n, e) => {
                "use strict";

                function r(t) {
                    return ((t = Math.exp(t)) + 1 / t) / 2
                }
                e.d(n, {
                    Z: () => i
                });
                const i = function t(n, e, i) {
                    function o(t, o) {
                        var s, a, u = t[0],
                            c = t[1],
                            l = t[2],
                            h = o[0],
                            f = o[1],
                            p = o[2],
                            d = h - u,
                            y = f - c,
                            m = d * d + y * y;
                        if (m < 1e-12) a = Math.log(p / l) / n, s = function (t) {
                            return [u + t * d, c + t * y, l * Math.exp(n * t * a)]
                        };
                        else {
                            var g = Math.sqrt(m),
                                _ = (p * p - l * l + i * m) / (2 * l * e * g),
                                v = (p * p - l * l - i * m) / (2 * p * e * g),
                                x = Math.log(Math.sqrt(_ * _ + 1) - _),
                                w = Math.log(Math.sqrt(v * v + 1) - v);
                            a = (w - x) / n, s = function (t) {
                                var i, o = t * a,
                                    s = r(x),
                                    h = l / (e * g) * (s * (i = n * o + x, ((i = Math.exp(2 * i)) - 1) / (i + 1)) - function (t) {
                                        return ((t = Math.exp(t)) - 1 / t) / 2
                                    }(x));
                                return [u + h * d, c + h * y, l * s / r(n * o + x)]
                            }
                        }
                        return s.duration = 1e3 * a * n / Math.SQRT2, s
                    }
                    return o.rho = function (n) {
                        var e = Math.max(.001, +n),
                            r = e * e;
                        return t(e, r, r * r)
                    }, o
                }(Math.SQRT2, 2, 4)
            },
            9392: (t, n, e) => {
                "use strict";

                function r(t, n, e) {
                    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
                    for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
                    return o
                }

                function i(t, n) {
                    switch (arguments.length) {
                        case 0:
                            break;
                        case 1:
                            this.range(t);
                            break;
                        default:
                            this.range(n).domain(t)
                    }
                    return this
                }

                function o(t, n) {
                    switch (arguments.length) {
                        case 0:
                            break;
                        case 1:
                            "function" == typeof t ? this.interpolator(t) : this.range(t);
                            break;
                        default:
                            this.domain(t), "function" == typeof n ? this.interpolator(n) : this.range(n)
                    }
                    return this
                }
                e.r(n), e.d(n, {
                    scaleBand: () => h,
                    scaleDiverging: () => jr,
                    scaleDivergingLog: () => Rr,
                    scaleDivergingPow: () => qr,
                    scaleDivergingSqrt: () => $r,
                    scaleDivergingSymlog: () => zr,
                    scaleIdentity: () => V,
                    scaleImplicit: () => c,
                    scaleLinear: () => B,
                    scaleLog: () => rt,
                    scaleOrdinal: () => l,
                    scalePoint: () => p,
                    scalePow: () => ft,
                    scaleQuantile: () => Tt,
                    scaleQuantize: () => Et,
                    scaleRadial: () => mt,
                    scaleSequential: () => Ir,
                    scaleSequentialLog: () => Cr,
                    scaleSequentialPow: () => Dr,
                    scaleSequentialQuantile: () => Yr,
                    scaleSequentialSqrt: () => Hr,
                    scaleSequentialSymlog: () => Zr,
                    scaleSqrt: () => pt,
                    scaleSymlog: () => at,
                    scaleThreshold: () => kt,
                    scaleTime: () => Sr,
                    scaleUtc: () => Pr,
                    tickFormat: () => $
                });
                class s extends Map {
                    constructor(t, n = u) {
                        if (super(), Object.defineProperties(this, {
                                _intern: {
                                    value: new Map
                                },
                                _key: {
                                    value: n
                                }
                            }), null != t)
                            for (const [n, e] of t) this.set(n, e)
                    }
                    get(t) {
                        return super.get(a(this, t))
                    }
                    has(t) {
                        return super.has(a(this, t))
                    }
                    set(t, n) {
                        return super.set(function ({
                            _intern: t,
                            _key: n
                        }, e) {
                            const r = n(e);
                            return t.has(r) ? t.get(r) : (t.set(r, e), e)
                        }(this, t), n)
                    }
                    delete(t) {
                        return super.delete(function ({
                            _intern: t,
                            _key: n
                        }, e) {
                            const r = n(e);
                            return t.has(r) && (e = t.get(r), t.delete(r)), e
                        }(this, t))
                    }
                }

                function a({
                    _intern: t,
                    _key: n
                }, e) {
                    const r = n(e);
                    return t.has(r) ? t.get(r) : e
                }

                function u(t) {
                    return null !== t && "object" == typeof t ? t.valueOf() : t
                }
                Set;
                const c = Symbol("implicit");

                function l() {
                    var t = new s,
                        n = [],
                        e = [],
                        r = c;

                    function o(i) {
                        let o = t.get(i);
                        if (void 0 === o) {
                            if (r !== c) return r;
                            t.set(i, o = n.push(i) - 1)
                        }
                        return e[o % e.length]
                    }
                    return o.domain = function (e) {
                        if (!arguments.length) return n.slice();
                        n = [], t = new s;
                        for (const r of e) t.has(r) || t.set(r, n.push(r) - 1);
                        return o
                    }, o.range = function (t) {
                        return arguments.length ? (e = Array.from(t), o) : e.slice()
                    }, o.unknown = function (t) {
                        return arguments.length ? (r = t, o) : r
                    }, o.copy = function () {
                        return l(n, e).unknown(r)
                    }, i.apply(o, arguments), o
                }

                function h() {
                    var t, n, e = l().unknown(void 0),
                        o = e.domain,
                        s = e.range,
                        a = 0,
                        u = 1,
                        c = !1,
                        f = 0,
                        p = 0,
                        d = .5;

                    function y() {
                        var e = o().length,
                            i = u < a,
                            l = i ? u : a,
                            h = i ? a : u;
                        t = (h - l) / Math.max(1, e - f + 2 * p), c && (t = Math.floor(t)), l += (h - l - t * (e - f)) * d, n = t * (1 - f), c && (l = Math.round(l), n = Math.round(n));
                        var y = r(e).map((function (n) {
                            return l + t * n
                        }));
                        return s(i ? y.reverse() : y)
                    }
                    return delete e.unknown, e.domain = function (t) {
                        return arguments.length ? (o(t), y()) : o()
                    }, e.range = function (t) {
                        return arguments.length ? ([a, u] = t, a = +a, u = +u, y()) : [a, u]
                    }, e.rangeRound = function (t) {
                        return [a, u] = t, a = +a, u = +u, c = !0, y()
                    }, e.bandwidth = function () {
                        return n
                    }, e.step = function () {
                        return t
                    }, e.round = function (t) {
                        return arguments.length ? (c = !!t, y()) : c
                    }, e.padding = function (t) {
                        return arguments.length ? (f = Math.min(1, p = +t), y()) : f
                    }, e.paddingInner = function (t) {
                        return arguments.length ? (f = Math.min(1, t), y()) : f
                    }, e.paddingOuter = function (t) {
                        return arguments.length ? (p = +t, y()) : p
                    }, e.align = function (t) {
                        return arguments.length ? (d = Math.max(0, Math.min(1, t)), y()) : d
                    }, e.copy = function () {
                        return h(o(), [a, u]).round(c).paddingInner(f).paddingOuter(p).align(d)
                    }, i.apply(y(), arguments)
                }

                function f(t) {
                    var n = t.copy;
                    return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
                        return f(n())
                    }, t
                }

                function p() {
                    return f(h.apply(null, arguments).paddingInner(1))
                }
                var d = Math.sqrt(50),
                    y = Math.sqrt(10),
                    m = Math.sqrt(2);

                function g(t, n, e) {
                    var r, i, o, s, a = -1;
                    if (e = +e, (t = +t) == (n = +n) && e > 0) return [t];
                    if ((r = n < t) && (i = t, t = n, n = i), 0 === (s = _(t, n, e)) || !isFinite(s)) return [];
                    if (s > 0) {
                        let e = Math.round(t / s),
                            r = Math.round(n / s);
                        for (e * s < t && ++e, r * s > n && --r, o = new Array(i = r - e + 1); ++a < i;) o[a] = (e + a) * s
                    } else {
                        s = -s;
                        let e = Math.round(t * s),
                            r = Math.round(n * s);
                        for (e / s < t && ++e, r / s > n && --r, o = new Array(i = r - e + 1); ++a < i;) o[a] = (e + a) / s
                    }
                    return r && o.reverse(), o
                }

                function _(t, n, e) {
                    var r = (n - t) / Math.max(0, e),
                        i = Math.floor(Math.log(r) / Math.LN10),
                        o = r / Math.pow(10, i);
                    return i >= 0 ? (o >= d ? 10 : o >= y ? 5 : o >= m ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= d ? 10 : o >= y ? 5 : o >= m ? 2 : 1)
                }

                function v(t, n, e) {
                    var r = Math.abs(n - t) / Math.max(0, e),
                        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                        o = r / i;
                    return o >= d ? i *= 10 : o >= y ? i *= 5 : o >= m && (i *= 2), n < t ? -i : i
                }

                function x(t, n) {
                    return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                }

                function w(t, n) {
                    return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                }

                function b(t) {
                    let n, e, r;

                    function i(t, r, i = 0, o = t.length) {
                        if (i < o) {
                            if (0 !== n(r, r)) return o;
                            do {
                                const n = i + o >>> 1;
                                e(t[n], r) < 0 ? i = n + 1 : o = n
                            } while (i < o)
                        }
                        return i
                    }
                    return 2 !== t.length ? (n = x, e = (n, e) => x(t(n), e), r = (n, e) => t(n) - e) : (n = t === x || t === w ? t : M, e = t, r = t), {
                        left: i,
                        center: function (t, n, e = 0, o = t.length) {
                            const s = i(t, n, e, o - 1);
                            return s > e && r(t[s - 1], n) > -r(t[s], n) ? s - 1 : s
                        },
                        right: function (t, r, i = 0, o = t.length) {
                            if (i < o) {
                                if (0 !== n(r, r)) return o;
                                do {
                                    const n = i + o >>> 1;
                                    e(t[n], r) <= 0 ? i = n + 1 : o = n
                                } while (i < o)
                            }
                            return i
                        }
                    }
                }

                function M() {
                    return 0
                }

                function T(t) {
                    return null === t ? NaN : +t
                }
                const E = b(x),
                    k = E.right,
                    N = (E.left, b(T).center, k);
                var A = e(5326),
                    S = e(8063),
                    P = e(4635);

                function O(t) {
                    return +t
                }
                var L = [0, 1];

                function I(t) {
                    return t
                }

                function C(t, n) {
                    return (n -= t = +t) ? function (e) {
                        return (e - t) / n
                    } : (e = isNaN(n) ? NaN : .5, function () {
                        return e
                    });
                    var e
                }

                function Z(t, n, e) {
                    var r = t[0],
                        i = t[1],
                        o = n[0],
                        s = n[1];
                    return i < r ? (r = C(i, r), o = e(s, o)) : (r = C(r, i), o = e(o, s)),
                        function (t) {
                            return o(r(t))
                        }
                }

                function D(t, n, e) {
                    var r = Math.min(t.length, n.length) - 1,
                        i = new Array(r),
                        o = new Array(r),
                        s = -1;
                    for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++s < r;) i[s] = C(t[s], t[s + 1]), o[s] = e(n[s], n[s + 1]);
                    return function (n) {
                        var e = N(t, n, 1, r) - 1;
                        return o[e](i[e](n))
                    }
                }

                function H(t, n) {
                    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
                }

                function Y() {
                    var t, n, e, r, i, o, s = L,
                        a = L,
                        u = A.Z,
                        c = I;

                    function l() {
                        var t, n, e, u = Math.min(s.length, a.length);
                        return c !== I && (t = s[0], n = s[u - 1], t > n && (e = t, t = n, n = e), c = function (e) {
                            return Math.max(t, Math.min(n, e))
                        }), r = u > 2 ? D : Z, i = o = null, h
                    }

                    function h(n) {
                        return null == n || isNaN(n = +n) ? e : (i || (i = r(s.map(t), a, u)))(t(c(n)))
                    }
                    return h.invert = function (e) {
                            return c(n((o || (o = r(a, s.map(t), S.Z)))(e)))
                        }, h.domain = function (t) {
                            return arguments.length ? (s = Array.from(t, O), l()) : s.slice()
                        }, h.range = function (t) {
                            return arguments.length ? (a = Array.from(t), l()) : a.slice()
                        }, h.rangeRound = function (t) {
                            return a = Array.from(t), u = P.Z, l()
                        }, h.clamp = function (t) {
                            return arguments.length ? (c = !!t || I, l()) : c !== I
                        }, h.interpolate = function (t) {
                            return arguments.length ? (u = t, l()) : u
                        }, h.unknown = function (t) {
                            return arguments.length ? (e = t, h) : e
                        },
                        function (e, r) {
                            return t = e, n = r, l()
                        }
                }

                function F() {
                    return Y()(I, I)
                }
                var U = e(2035),
                    j = e(7017),
                    R = e(5386),
                    z = e(3482),
                    q = e(6909);

                function $(t, n, e, r) {
                    var i, o = v(t, n, e);
                    switch ((r = (0, U.Z)(null == r ? ",f" : r)).type) {
                        case "s":
                            var s = Math.max(Math.abs(t), Math.abs(n));
                            return null != r.precision || isNaN(i = (0, j.Z)(o, s)) || (r.precision = i), (0, R.jH)(r, s);
                        case "":
                        case "e":
                        case "g":
                        case "p":
                        case "r":
                            null != r.precision || isNaN(i = (0, z.Z)(o, Math.max(Math.abs(t), Math.abs(n)))) || (r.precision = i - ("e" === r.type));
                            break;
                        case "f":
                        case "%":
                            null != r.precision || isNaN(i = (0, q.Z)(o)) || (r.precision = i - 2 * ("%" === r.type))
                    }
                    return (0, R.WU)(r)
                }

                function X(t) {
                    var n = t.domain;
                    return t.ticks = function (t) {
                        var e = n();
                        return g(e[0], e[e.length - 1], null == t ? 10 : t)
                    }, t.tickFormat = function (t, e) {
                        var r = n();
                        return $(r[0], r[r.length - 1], null == t ? 10 : t, e)
                    }, t.nice = function (e) {
                        null == e && (e = 10);
                        var r, i, o = n(),
                            s = 0,
                            a = o.length - 1,
                            u = o[s],
                            c = o[a],
                            l = 10;
                        for (c < u && (i = u, u = c, c = i, i = s, s = a, a = i); l-- > 0;) {
                            if ((i = _(u, c, e)) === r) return o[s] = u, o[a] = c, n(o);
                            if (i > 0) u = Math.floor(u / i) * i, c = Math.ceil(c / i) * i;
                            else {
                                if (!(i < 0)) break;
                                u = Math.ceil(u * i) / i, c = Math.floor(c * i) / i
                            }
                            r = i
                        }
                        return t
                    }, t
                }

                function B() {
                    var t = F();
                    return t.copy = function () {
                        return H(t, B())
                    }, i.apply(t, arguments), X(t)
                }

                function V(t) {
                    var n;

                    function e(t) {
                        return null == t || isNaN(t = +t) ? n : t
                    }
                    return e.invert = e, e.domain = e.range = function (n) {
                        return arguments.length ? (t = Array.from(n, O), e) : t.slice()
                    }, e.unknown = function (t) {
                        return arguments.length ? (n = t, e) : n
                    }, e.copy = function () {
                        return V(t).unknown(n)
                    }, t = arguments.length ? Array.from(t, O) : [0, 1], X(e)
                }

                function W(t, n) {
                    var e, r = 0,
                        i = (t = t.slice()).length - 1,
                        o = t[r],
                        s = t[i];
                    return s < o && (e = r, r = i, i = e, e = o, o = s, s = e), t[r] = n.floor(o), t[i] = n.ceil(s), t
                }

                function G(t) {
                    return Math.log(t)
                }

                function J(t) {
                    return Math.exp(t)
                }

                function Q(t) {
                    return -Math.log(-t)
                }

                function K(t) {
                    return -Math.exp(-t)
                }

                function tt(t) {
                    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
                }

                function nt(t) {
                    return (n, e) => -t(-n, e)
                }

                function et(t) {
                    const n = t(G, J),
                        e = n.domain;
                    let r, i, o = 10;

                    function s() {
                        return r = function (t) {
                            return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), n => Math.log(n) / t)
                        }(o), i = function (t) {
                            return 10 === t ? tt : t === Math.E ? Math.exp : n => Math.pow(t, n)
                        }(o), e()[0] < 0 ? (r = nt(r), i = nt(i), t(Q, K)) : t(G, J), n
                    }
                    return n.base = function (t) {
                        return arguments.length ? (o = +t, s()) : o
                    }, n.domain = function (t) {
                        return arguments.length ? (e(t), s()) : e()
                    }, n.ticks = t => {
                        const n = e();
                        let s = n[0],
                            a = n[n.length - 1];
                        const u = a < s;
                        u && ([s, a] = [a, s]);
                        let c, l, h = r(s),
                            f = r(a);
                        const p = null == t ? 10 : +t;
                        let d = [];
                        if (!(o % 1) && f - h < p) {
                            if (h = Math.floor(h), f = Math.ceil(f), s > 0) {
                                for (; h <= f; ++h)
                                    for (c = 1; c < o; ++c)
                                        if (l = h < 0 ? c / i(-h) : c * i(h), !(l < s)) {
                                            if (l > a) break;
                                            d.push(l)
                                        }
                            } else
                                for (; h <= f; ++h)
                                    for (c = o - 1; c >= 1; --c)
                                        if (l = h > 0 ? c / i(-h) : c * i(h), !(l < s)) {
                                            if (l > a) break;
                                            d.push(l)
                                        } 2 * d.length < p && (d = g(s, a, p))
                        } else d = g(h, f, Math.min(f - h, p)).map(i);
                        return u ? d.reverse() : d
                    }, n.tickFormat = (t, e) => {
                        if (null == t && (t = 10), null == e && (e = 10 === o ? "s" : ","), "function" != typeof e && (o % 1 || null != (e = (0, U.Z)(e)).precision || (e.trim = !0), e = (0, R.WU)(e)), t === 1 / 0) return e;
                        const s = Math.max(1, o * t / n.ticks().length);
                        return t => {
                            let n = t / i(Math.round(r(t)));
                            return n * o < o - .5 && (n *= o), n <= s ? e(t) : ""
                        }
                    }, n.nice = () => e(W(e(), {
                        floor: t => i(Math.floor(r(t))),
                        ceil: t => i(Math.ceil(r(t)))
                    })), n
                }

                function rt() {
                    const t = et(Y()).domain([1, 10]);
                    return t.copy = () => H(t, rt()).base(t.base()), i.apply(t, arguments), t
                }

                function it(t) {
                    return function (n) {
                        return Math.sign(n) * Math.log1p(Math.abs(n / t))
                    }
                }

                function ot(t) {
                    return function (n) {
                        return Math.sign(n) * Math.expm1(Math.abs(n)) * t
                    }
                }

                function st(t) {
                    var n = 1,
                        e = t(it(n), ot(n));
                    return e.constant = function (e) {
                        return arguments.length ? t(it(n = +e), ot(n)) : n
                    }, X(e)
                }

                function at() {
                    var t = st(Y());
                    return t.copy = function () {
                        return H(t, at()).constant(t.constant())
                    }, i.apply(t, arguments)
                }

                function ut(t) {
                    return function (n) {
                        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
                    }
                }

                function ct(t) {
                    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
                }

                function lt(t) {
                    return t < 0 ? -t * t : t * t
                }

                function ht(t) {
                    var n = t(I, I),
                        e = 1;

                    function r() {
                        return 1 === e ? t(I, I) : .5 === e ? t(ct, lt) : t(ut(e), ut(1 / e))
                    }
                    return n.exponent = function (t) {
                        return arguments.length ? (e = +t, r()) : e
                    }, X(n)
                }

                function ft() {
                    var t = ht(Y());
                    return t.copy = function () {
                        return H(t, ft()).exponent(t.exponent())
                    }, i.apply(t, arguments), t
                }

                function pt() {
                    return ft.apply(null, arguments).exponent(.5)
                }

                function dt(t) {
                    return Math.sign(t) * t * t
                }

                function yt(t) {
                    return Math.sign(t) * Math.sqrt(Math.abs(t))
                }

                function mt() {
                    var t, n = F(),
                        e = [0, 1],
                        r = !1;

                    function o(e) {
                        var i = yt(n(e));
                        return isNaN(i) ? t : r ? Math.round(i) : i
                    }
                    return o.invert = function (t) {
                        return n.invert(dt(t))
                    }, o.domain = function (t) {
                        return arguments.length ? (n.domain(t), o) : n.domain()
                    }, o.range = function (t) {
                        return arguments.length ? (n.range((e = Array.from(t, O)).map(dt)), o) : e.slice()
                    }, o.rangeRound = function (t) {
                        return o.range(t).round(!0)
                    }, o.round = function (t) {
                        return arguments.length ? (r = !!t, o) : r
                    }, o.clamp = function (t) {
                        return arguments.length ? (n.clamp(t), o) : n.clamp()
                    }, o.unknown = function (n) {
                        return arguments.length ? (t = n, o) : t
                    }, o.copy = function () {
                        return mt(n.domain(), e).round(r).clamp(n.clamp()).unknown(t)
                    }, i.apply(o, arguments), X(o)
                }

                function gt(t, n) {
                    let e;
                    if (void 0 === n)
                        for (const n of t) null != n && (e < n || void 0 === e && n >= n) && (e = n);
                    else {
                        let r = -1;
                        for (let i of t) null != (i = n(i, ++r, t)) && (e < i || void 0 === e && i >= i) && (e = i)
                    }
                    return e
                }

                function _t(t, n) {
                    let e;
                    if (void 0 === n)
                        for (const n of t) null != n && (e > n || void 0 === e && n >= n) && (e = n);
                    else {
                        let r = -1;
                        for (let i of t) null != (i = n(i, ++r, t)) && (e > i || void 0 === e && i >= i) && (e = i)
                    }
                    return e
                }

                function vt(t, n) {
                    return (null == t || !(t >= t)) - (null == n || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0)
                }

                function xt(t, n, e = 0, r = t.length - 1, i) {
                    for (i = void 0 === i ? vt : function (t = x) {
                            if (t === x) return vt;
                            if ("function" != typeof t) throw new TypeError("compare is not a function");
                            return (n, e) => {
                                const r = t(n, e);
                                return r || 0 === r ? r : (0 === t(e, e)) - (0 === t(n, n))
                            }
                        }(i); r > e;) {
                        if (r - e > 600) {
                            const o = r - e + 1,
                                s = n - e + 1,
                                a = Math.log(o),
                                u = .5 * Math.exp(2 * a / 3),
                                c = .5 * Math.sqrt(a * u * (o - u) / o) * (s - o / 2 < 0 ? -1 : 1);
                            xt(t, n, Math.max(e, Math.floor(n - s * u / o + c)), Math.min(r, Math.floor(n + (o - s) * u / o + c)), i)
                        }
                        const o = t[n];
                        let s = e,
                            a = r;
                        for (wt(t, e, n), i(t[r], o) > 0 && wt(t, e, r); s < a;) {
                            for (wt(t, s, a), ++s, --a; i(t[s], o) < 0;) ++s;
                            for (; i(t[a], o) > 0;) --a
                        }
                        0 === i(t[e], o) ? wt(t, e, a) : (++a, wt(t, a, r)), a <= n && (e = a + 1), n <= a && (r = a - 1)
                    }
                    return t
                }

                function wt(t, n, e) {
                    const r = t[n];
                    t[n] = t[e], t[e] = r
                }

                function bt(t, n, e) {
                    if (t = Float64Array.from(function* (t, n) {
                            if (void 0 === n)
                                for (let n of t) null != n && (n = +n) >= n && (yield n);
                            else {
                                let e = -1;
                                for (let r of t) null != (r = n(r, ++e, t)) && (r = +r) >= r && (yield r)
                            }
                        }(t, e)), r = t.length) {
                        if ((n = +n) <= 0 || r < 2) return _t(t);
                        if (n >= 1) return gt(t);
                        var r, i = (r - 1) * n,
                            o = Math.floor(i),
                            s = gt(xt(t, o).subarray(0, o + 1));
                        return s + (_t(t.subarray(o + 1)) - s) * (i - o)
                    }
                }

                function Mt(t, n, e = T) {
                    if (r = t.length) {
                        if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
                        if (n >= 1) return +e(t[r - 1], r - 1, t);
                        var r, i = (r - 1) * n,
                            o = Math.floor(i),
                            s = +e(t[o], o, t);
                        return s + (+e(t[o + 1], o + 1, t) - s) * (i - o)
                    }
                }

                function Tt() {
                    var t, n = [],
                        e = [],
                        r = [];

                    function o() {
                        var t = 0,
                            i = Math.max(1, e.length);
                        for (r = new Array(i - 1); ++t < i;) r[t - 1] = Mt(n, t / i);
                        return s
                    }

                    function s(n) {
                        return null == n || isNaN(n = +n) ? t : e[N(r, n)]
                    }
                    return s.invertExtent = function (t) {
                        var i = e.indexOf(t);
                        return i < 0 ? [NaN, NaN] : [i > 0 ? r[i - 1] : n[0], i < r.length ? r[i] : n[n.length - 1]]
                    }, s.domain = function (t) {
                        if (!arguments.length) return n.slice();
                        n = [];
                        for (let e of t) null == e || isNaN(e = +e) || n.push(e);
                        return n.sort(x), o()
                    }, s.range = function (t) {
                        return arguments.length ? (e = Array.from(t), o()) : e.slice()
                    }, s.unknown = function (n) {
                        return arguments.length ? (t = n, s) : t
                    }, s.quantiles = function () {
                        return r.slice()
                    }, s.copy = function () {
                        return Tt().domain(n).range(e).unknown(t)
                    }, i.apply(s, arguments)
                }

                function Et() {
                    var t, n = 0,
                        e = 1,
                        r = 1,
                        o = [.5],
                        s = [0, 1];

                    function a(n) {
                        return null != n && n <= n ? s[N(o, n, 0, r)] : t
                    }

                    function u() {
                        var t = -1;
                        for (o = new Array(r); ++t < r;) o[t] = ((t + 1) * e - (t - r) * n) / (r + 1);
                        return a
                    }
                    return a.domain = function (t) {
                        return arguments.length ? ([n, e] = t, n = +n, e = +e, u()) : [n, e]
                    }, a.range = function (t) {
                        return arguments.length ? (r = (s = Array.from(t)).length - 1, u()) : s.slice()
                    }, a.invertExtent = function (t) {
                        var i = s.indexOf(t);
                        return i < 0 ? [NaN, NaN] : i < 1 ? [n, o[0]] : i >= r ? [o[r - 1], e] : [o[i - 1], o[i]]
                    }, a.unknown = function (n) {
                        return arguments.length ? (t = n, a) : a
                    }, a.thresholds = function () {
                        return o.slice()
                    }, a.copy = function () {
                        return Et().domain([n, e]).range(s).unknown(t)
                    }, i.apply(X(a), arguments)
                }

                function kt() {
                    var t, n = [.5],
                        e = [0, 1],
                        r = 1;

                    function o(i) {
                        return null != i && i <= i ? e[N(n, i, 0, r)] : t
                    }
                    return o.domain = function (t) {
                        return arguments.length ? (n = Array.from(t), r = Math.min(n.length, e.length - 1), o) : n.slice()
                    }, o.range = function (t) {
                        return arguments.length ? (e = Array.from(t), r = Math.min(n.length, e.length - 1), o) : e.slice()
                    }, o.invertExtent = function (t) {
                        var r = e.indexOf(t);
                        return [n[r - 1], n[r]]
                    }, o.unknown = function (n) {
                        return arguments.length ? (t = n, o) : t
                    }, o.copy = function () {
                        return kt().domain(n).range(e).unknown(t)
                    }, i.apply(o, arguments)
                }
                const Nt = 1e3,
                    At = 6e4,
                    St = 36e5,
                    Pt = 864e5,
                    Ot = 6048e5,
                    Lt = 31536e6;
                var It = new Date,
                    Ct = new Date;

                function Zt(t, n, e, r) {
                    function i(n) {
                        return t(n = 0 === arguments.length ? new Date : new Date(+n)), n
                    }
                    return i.floor = function (n) {
                        return t(n = new Date(+n)), n
                    }, i.ceil = function (e) {
                        return t(e = new Date(e - 1)), n(e, 1), t(e), e
                    }, i.round = function (t) {
                        var n = i(t),
                            e = i.ceil(t);
                        return t - n < e - t ? n : e
                    }, i.offset = function (t, e) {
                        return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
                    }, i.range = function (e, r, o) {
                        var s, a = [];
                        if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return a;
                        do {
                            a.push(s = new Date(+e)), n(e, o), t(e)
                        } while (s < e && e < r);
                        return a
                    }, i.filter = function (e) {
                        return Zt((function (n) {
                            if (n >= n)
                                for (; t(n), !e(n);) n.setTime(n - 1)
                        }), (function (t, r) {
                            if (t >= t)
                                if (r < 0)
                                    for (; ++r <= 0;)
                                        for (; n(t, -1), !e(t););
                                else
                                    for (; --r >= 0;)
                                        for (; n(t, 1), !e(t););
                        }))
                    }, e && (i.count = function (n, r) {
                        return It.setTime(+n), Ct.setTime(+r), t(It), t(Ct), Math.floor(e(It, Ct))
                    }, i.every = function (t) {
                        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
                            return r(n) % t == 0
                        } : function (n) {
                            return i.count(0, n) % t == 0
                        }) : i : null
                    }), i
                }
                var Dt = Zt((function () {}), (function (t, n) {
                    t.setTime(+t + n)
                }), (function (t, n) {
                    return n - t
                }));
                Dt.every = function (t) {
                    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Zt((function (n) {
                        n.setTime(Math.floor(n / t) * t)
                    }), (function (n, e) {
                        n.setTime(+n + e * t)
                    }), (function (n, e) {
                        return (e - n) / t
                    })) : Dt : null
                };
                const Ht = Dt;
                Dt.range;
                var Yt = Zt((function (t) {
                    t.setTime(t - t.getMilliseconds())
                }), (function (t, n) {
                    t.setTime(+t + n * Nt)
                }), (function (t, n) {
                    return (n - t) / Nt
                }), (function (t) {
                    return t.getUTCSeconds()
                }));
                const Ft = Yt;
                Yt.range;
                var Ut = Zt((function (t) {
                    t.setTime(t - t.getMilliseconds() - t.getSeconds() * Nt)
                }), (function (t, n) {
                    t.setTime(+t + n * At)
                }), (function (t, n) {
                    return (n - t) / At
                }), (function (t) {
                    return t.getMinutes()
                }));
                const jt = Ut;
                Ut.range;
                var Rt = Zt((function (t) {
                    t.setTime(t - t.getMilliseconds() - t.getSeconds() * Nt - t.getMinutes() * At)
                }), (function (t, n) {
                    t.setTime(+t + n * St)
                }), (function (t, n) {
                    return (n - t) / St
                }), (function (t) {
                    return t.getHours()
                }));
                const zt = Rt;
                Rt.range;
                var qt = Zt((t => t.setHours(0, 0, 0, 0)), ((t, n) => t.setDate(t.getDate() + n)), ((t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * At) / Pt), (t => t.getDate() - 1));
                const $t = qt;

                function Xt(t) {
                    return Zt((function (n) {
                        n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
                    }), (function (t, n) {
                        t.setDate(t.getDate() + 7 * n)
                    }), (function (t, n) {
                        return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * At) / Ot
                    }))
                }
                qt.range;
                var Bt = Xt(0),
                    Vt = Xt(1),
                    Wt = Xt(2),
                    Gt = Xt(3),
                    Jt = Xt(4),
                    Qt = Xt(5),
                    Kt = Xt(6),
                    tn = (Bt.range, Vt.range, Wt.range, Gt.range, Jt.range, Qt.range, Kt.range, Zt((function (t) {
                        t.setDate(1), t.setHours(0, 0, 0, 0)
                    }), (function (t, n) {
                        t.setMonth(t.getMonth() + n)
                    }), (function (t, n) {
                        return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
                    }), (function (t) {
                        return t.getMonth()
                    })));
                const nn = tn;
                tn.range;
                var en = Zt((function (t) {
                    t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
                }), (function (t, n) {
                    t.setFullYear(t.getFullYear() + n)
                }), (function (t, n) {
                    return n.getFullYear() - t.getFullYear()
                }), (function (t) {
                    return t.getFullYear()
                }));
                en.every = function (t) {
                    return isFinite(t = Math.floor(t)) && t > 0 ? Zt((function (n) {
                        n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
                    }), (function (n, e) {
                        n.setFullYear(n.getFullYear() + e * t)
                    })) : null
                };
                const rn = en;
                en.range;
                var on = Zt((function (t) {
                    t.setUTCSeconds(0, 0)
                }), (function (t, n) {
                    t.setTime(+t + n * At)
                }), (function (t, n) {
                    return (n - t) / At
                }), (function (t) {
                    return t.getUTCMinutes()
                }));
                const sn = on;
                on.range;
                var an = Zt((function (t) {
                    t.setUTCMinutes(0, 0, 0)
                }), (function (t, n) {
                    t.setTime(+t + n * St)
                }), (function (t, n) {
                    return (n - t) / St
                }), (function (t) {
                    return t.getUTCHours()
                }));
                const un = an;
                an.range;
                var cn = Zt((function (t) {
                    t.setUTCHours(0, 0, 0, 0)
                }), (function (t, n) {
                    t.setUTCDate(t.getUTCDate() + n)
                }), (function (t, n) {
                    return (n - t) / Pt
                }), (function (t) {
                    return t.getUTCDate() - 1
                }));
                const ln = cn;

                function hn(t) {
                    return Zt((function (n) {
                        n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
                    }), (function (t, n) {
                        t.setUTCDate(t.getUTCDate() + 7 * n)
                    }), (function (t, n) {
                        return (n - t) / Ot
                    }))
                }
                cn.range;
                var fn = hn(0),
                    pn = hn(1),
                    dn = hn(2),
                    yn = hn(3),
                    mn = hn(4),
                    gn = hn(5),
                    _n = hn(6),
                    vn = (fn.range, pn.range, dn.range, yn.range, mn.range, gn.range, _n.range, Zt((function (t) {
                        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
                    }), (function (t, n) {
                        t.setUTCMonth(t.getUTCMonth() + n)
                    }), (function (t, n) {
                        return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
                    }), (function (t) {
                        return t.getUTCMonth()
                    })));
                const xn = vn;
                vn.range;
                var wn = Zt((function (t) {
                    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
                }), (function (t, n) {
                    t.setUTCFullYear(t.getUTCFullYear() + n)
                }), (function (t, n) {
                    return n.getUTCFullYear() - t.getUTCFullYear()
                }), (function (t) {
                    return t.getUTCFullYear()
                }));
                wn.every = function (t) {
                    return isFinite(t = Math.floor(t)) && t > 0 ? Zt((function (n) {
                        n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
                    }), (function (n, e) {
                        n.setUTCFullYear(n.getUTCFullYear() + e * t)
                    })) : null
                };
                const bn = wn;

                function Mn(t, n, e, r, i, o) {
                    const s = [
                        [Ft, 1, Nt],
                        [Ft, 5, 5e3],
                        [Ft, 15, 15e3],
                        [Ft, 30, 3e4],
                        [o, 1, At],
                        [o, 5, 3e5],
                        [o, 15, 9e5],
                        [o, 30, 18e5],
                        [i, 1, St],
                        [i, 3, 108e5],
                        [i, 6, 216e5],
                        [i, 12, 432e5],
                        [r, 1, Pt],
                        [r, 2, 1728e5],
                        [e, 1, Ot],
                        [n, 1, 2592e6],
                        [n, 3, 7776e6],
                        [t, 1, Lt]
                    ];

                    function a(n, e, r) {
                        const i = Math.abs(e - n) / r,
                            o = b((([, , t]) => t)).right(s, i);
                        if (o === s.length) return t.every(v(n / Lt, e / Lt, r));
                        if (0 === o) return Ht.every(Math.max(v(n, e, r), 1));
                        const [a, u] = s[i / s[o - 1][2] < s[o][2] / i ? o - 1 : o];
                        return a.every(u)
                    }
                    return [function (t, n, e) {
                        const r = n < t;
                        r && ([t, n] = [n, t]);
                        const i = e && "function" == typeof e.range ? e : a(t, n, e),
                            o = i ? i.range(t, +n + 1) : [];
                        return r ? o.reverse() : o
                    }, a]
                }
                wn.range;
                const [Tn, En] = Mn(bn, xn, fn, ln, un, sn), [kn, Nn] = Mn(rn, nn, Bt, $t, zt, jt);
                var An = new Date,
                    Sn = new Date;

                function Pn(t, n, e, r) {
                    function i(n) {
                        return t(n = 0 === arguments.length ? new Date : new Date(+n)), n
                    }
                    return i.floor = function (n) {
                        return t(n = new Date(+n)), n
                    }, i.ceil = function (e) {
                        return t(e = new Date(e - 1)), n(e, 1), t(e), e
                    }, i.round = function (t) {
                        var n = i(t),
                            e = i.ceil(t);
                        return t - n < e - t ? n : e
                    }, i.offset = function (t, e) {
                        return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
                    }, i.range = function (e, r, o) {
                        var s, a = [];
                        if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return a;
                        do {
                            a.push(s = new Date(+e)), n(e, o), t(e)
                        } while (s < e && e < r);
                        return a
                    }, i.filter = function (e) {
                        return Pn((function (n) {
                            if (n >= n)
                                for (; t(n), !e(n);) n.setTime(n - 1)
                        }), (function (t, r) {
                            if (t >= t)
                                if (r < 0)
                                    for (; ++r <= 0;)
                                        for (; n(t, -1), !e(t););
                                else
                                    for (; --r >= 0;)
                                        for (; n(t, 1), !e(t););
                        }))
                    }, e && (i.count = function (n, r) {
                        return An.setTime(+n), Sn.setTime(+r), t(An), t(Sn), Math.floor(e(An, Sn))
                    }, i.every = function (t) {
                        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
                            return r(n) % t == 0
                        } : function (n) {
                            return i.count(0, n) % t == 0
                        }) : i : null
                    }), i
                }
                var On = 864e5,
                    Ln = 6048e5;

                function In(t) {
                    return Pn((function (n) {
                        n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
                    }), (function (t, n) {
                        t.setUTCDate(t.getUTCDate() + 7 * n)
                    }), (function (t, n) {
                        return (n - t) / Ln
                    }))
                }
                var Cn = In(0),
                    Zn = In(1),
                    Dn = In(2),
                    Hn = In(3),
                    Yn = In(4),
                    Fn = In(5),
                    Un = In(6),
                    jn = (Cn.range, Zn.range, Dn.range, Hn.range, Yn.range, Fn.range, Un.range, Pn((function (t) {
                        t.setUTCHours(0, 0, 0, 0)
                    }), (function (t, n) {
                        t.setUTCDate(t.getUTCDate() + n)
                    }), (function (t, n) {
                        return (n - t) / On
                    }), (function (t) {
                        return t.getUTCDate() - 1
                    })));
                const Rn = jn;

                function zn(t) {
                    return Pn((function (n) {
                        n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
                    }), (function (t, n) {
                        t.setDate(t.getDate() + 7 * n)
                    }), (function (t, n) {
                        return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / Ln
                    }))
                }
                jn.range;
                var qn = zn(0),
                    $n = zn(1),
                    Xn = zn(2),
                    Bn = zn(3),
                    Vn = zn(4),
                    Wn = zn(5),
                    Gn = zn(6),
                    Jn = (qn.range, $n.range, Xn.range, Bn.range, Vn.range, Wn.range, Gn.range, Pn((t => t.setHours(0, 0, 0, 0)), ((t, n) => t.setDate(t.getDate() + n)), ((t, n) => (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / On), (t => t.getDate() - 1)));
                const Qn = Jn;
                Jn.range;
                var Kn = Pn((function (t) {
                    t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
                }), (function (t, n) {
                    t.setFullYear(t.getFullYear() + n)
                }), (function (t, n) {
                    return n.getFullYear() - t.getFullYear()
                }), (function (t) {
                    return t.getFullYear()
                }));
                Kn.every = function (t) {
                    return isFinite(t = Math.floor(t)) && t > 0 ? Pn((function (n) {
                        n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
                    }), (function (n, e) {
                        n.setFullYear(n.getFullYear() + e * t)
                    })) : null
                };
                const te = Kn;
                Kn.range;
                var ne = Pn((function (t) {
                    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
                }), (function (t, n) {
                    t.setUTCFullYear(t.getUTCFullYear() + n)
                }), (function (t, n) {
                    return n.getUTCFullYear() - t.getUTCFullYear()
                }), (function (t) {
                    return t.getUTCFullYear()
                }));
                ne.every = function (t) {
                    return isFinite(t = Math.floor(t)) && t > 0 ? Pn((function (n) {
                        n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
                    }), (function (n, e) {
                        n.setUTCFullYear(n.getUTCFullYear() + e * t)
                    })) : null
                };
                const ee = ne;

                function re(t) {
                    if (0 <= t.y && t.y < 100) {
                        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                        return n.setFullYear(t.y), n
                    }
                    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
                }

                function ie(t) {
                    if (0 <= t.y && t.y < 100) {
                        var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                        return n.setUTCFullYear(t.y), n
                    }
                    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
                }

                function oe(t, n, e) {
                    return {
                        y: t,
                        m: n,
                        d: e,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0
                    }
                }
                ne.range;
                var se, ae, ue, ce = {
                        "-": "",
                        _: " ",
                        0: "0"
                    },
                    le = /^\s*\d+/,
                    he = /^%/,
                    fe = /[\\^$*+?|[\]().{}]/g;

                function pe(t, n, e) {
                    var r = t < 0 ? "-" : "",
                        i = (r ? -t : t) + "",
                        o = i.length;
                    return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
                }

                function de(t) {
                    return t.replace(fe, "\\$&")
                }

                function ye(t) {
                    return new RegExp("^(?:" + t.map(de).join("|") + ")", "i")
                }

                function me(t) {
                    return new Map(t.map(((t, n) => [t.toLowerCase(), n])))
                }

                function ge(t, n, e) {
                    var r = le.exec(n.slice(e, e + 1));
                    return r ? (t.w = +r[0], e + r[0].length) : -1
                }

                function _e(t, n, e) {
                    var r = le.exec(n.slice(e, e + 1));
                    return r ? (t.u = +r[0], e + r[0].length) : -1
                }

                function ve(t, n, e) {
                    var r = le.exec(n.slice(e, e + 2));
                    return r ? (t.U = +r[0], e + r[0].length) : -1
                }

                function xe(t, n, e) {
                    var r = le.exec(n.slice(e, e + 2));
                    return r ? (t.V = +r[0], e + r[0].length) : -1
                }

                function we(t, n, e) {
                    var r = le.exec(n.slice(e, e + 2));
                    return r ? (t.W = +r[0], e + r[0].length) : -1
                }

                function be(t, n, e) {
                    var r = le.exec(n.slice(e, e + 4));
                    return r ? (t.y = +r[0], e + r[0].length) : -1
                }

                function Me(t, n, e) {
                    var r = le.exec(n.slice(e, e + 2));
                    return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
                }

                function Te(t, n, e) {
                    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
                    return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
                }

                function Ee(t, n, e) {
                    var r = le.exec(n.slice(e, e + 1));
                    return r ? (t.q = 3 * r[0] - 3, e + r[0].length) : -1
                }

                function ke(t, n, e) {
                    var r = le.exec(n.slice(e, e + 2));
                    return r ? (t.m = r[0] - 1, e + r[0].length) : -1
                }

                function Ne(t, n, e) {
                    var r = le.exec(n.slice(e, e + 2));
                    return r ? (t.d = +r[0], e + r[0].length) : -1
                }

                function Ae(t, n, e) {
                    var r = le.exec(n.slice(e, e + 3));
                    return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
                }

                function Se(t, n, e) {
                    var r = le.exec(n.slice(e, e + 2));
                    return r ? (t.H = +r[0], e + r[0].length) : -1
                }

                function Pe(t, n, e) {
                    var r = le.exec(n.slice(e, e + 2));
                    return r ? (t.M = +r[0], e + r[0].length) : -1
                }

                function Oe(t, n, e) {
                    var r = le.exec(n.slice(e, e + 2));
                    return r ? (t.S = +r[0], e + r[0].length) : -1
                }

                function Le(t, n, e) {
                    var r = le.exec(n.slice(e, e + 3));
                    return r ? (t.L = +r[0], e + r[0].length) : -1
                }

                function Ie(t, n, e) {
                    var r = le.exec(n.slice(e, e + 6));
                    return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
                }

                function Ce(t, n, e) {
                    var r = he.exec(n.slice(e, e + 1));
                    return r ? e + r[0].length : -1
                }

                function Ze(t, n, e) {
                    var r = le.exec(n.slice(e));
                    return r ? (t.Q = +r[0], e + r[0].length) : -1
                }

                function De(t, n, e) {
                    var r = le.exec(n.slice(e));
                    return r ? (t.s = +r[0], e + r[0].length) : -1
                }

                function He(t, n) {
                    return pe(t.getDate(), n, 2)
                }

                function Ye(t, n) {
                    return pe(t.getHours(), n, 2)
                }

                function Fe(t, n) {
                    return pe(t.getHours() % 12 || 12, n, 2)
                }

                function Ue(t, n) {
                    return pe(1 + Qn.count(te(t), t), n, 3)
                }

                function je(t, n) {
                    return pe(t.getMilliseconds(), n, 3)
                }

                function Re(t, n) {
                    return je(t, n) + "000"
                }

                function ze(t, n) {
                    return pe(t.getMonth() + 1, n, 2)
                }

                function qe(t, n) {
                    return pe(t.getMinutes(), n, 2)
                }

                function $e(t, n) {
                    return pe(t.getSeconds(), n, 2)
                }

                function Xe(t) {
                    var n = t.getDay();
                    return 0 === n ? 7 : n
                }

                function Be(t, n) {
                    return pe(qn.count(te(t) - 1, t), n, 2)
                }

                function Ve(t) {
                    var n = t.getDay();
                    return n >= 4 || 0 === n ? Vn(t) : Vn.ceil(t)
                }

                function We(t, n) {
                    return t = Ve(t), pe(Vn.count(te(t), t) + (4 === te(t).getDay()), n, 2)
                }

                function Ge(t) {
                    return t.getDay()
                }

                function Je(t, n) {
                    return pe($n.count(te(t) - 1, t), n, 2)
                }

                function Qe(t, n) {
                    return pe(t.getFullYear() % 100, n, 2)
                }

                function Ke(t, n) {
                    return pe((t = Ve(t)).getFullYear() % 100, n, 2)
                }

                function tr(t, n) {
                    return pe(t.getFullYear() % 1e4, n, 4)
                }

                function nr(t, n) {
                    var e = t.getDay();
                    return pe((t = e >= 4 || 0 === e ? Vn(t) : Vn.ceil(t)).getFullYear() % 1e4, n, 4)
                }

                function er(t) {
                    var n = t.getTimezoneOffset();
                    return (n > 0 ? "-" : (n *= -1, "+")) + pe(n / 60 | 0, "0", 2) + pe(n % 60, "0", 2)
                }

                function rr(t, n) {
                    return pe(t.getUTCDate(), n, 2)
                }

                function ir(t, n) {
                    return pe(t.getUTCHours(), n, 2)
                }

                function or(t, n) {
                    return pe(t.getUTCHours() % 12 || 12, n, 2)
                }

                function sr(t, n) {
                    return pe(1 + Rn.count(ee(t), t), n, 3)
                }

                function ar(t, n) {
                    return pe(t.getUTCMilliseconds(), n, 3)
                }

                function ur(t, n) {
                    return ar(t, n) + "000"
                }

                function cr(t, n) {
                    return pe(t.getUTCMonth() + 1, n, 2)
                }

                function lr(t, n) {
                    return pe(t.getUTCMinutes(), n, 2)
                }

                function hr(t, n) {
                    return pe(t.getUTCSeconds(), n, 2)
                }

                function fr(t) {
                    var n = t.getUTCDay();
                    return 0 === n ? 7 : n
                }

                function pr(t, n) {
                    return pe(Cn.count(ee(t) - 1, t), n, 2)
                }

                function dr(t) {
                    var n = t.getUTCDay();
                    return n >= 4 || 0 === n ? Yn(t) : Yn.ceil(t)
                }

                function yr(t, n) {
                    return t = dr(t), pe(Yn.count(ee(t), t) + (4 === ee(t).getUTCDay()), n, 2)
                }

                function mr(t) {
                    return t.getUTCDay()
                }

                function gr(t, n) {
                    return pe(Zn.count(ee(t) - 1, t), n, 2)
                }

                function _r(t, n) {
                    return pe(t.getUTCFullYear() % 100, n, 2)
                }

                function vr(t, n) {
                    return pe((t = dr(t)).getUTCFullYear() % 100, n, 2)
                }

                function xr(t, n) {
                    return pe(t.getUTCFullYear() % 1e4, n, 4)
                }

                function wr(t, n) {
                    var e = t.getUTCDay();
                    return pe((t = e >= 4 || 0 === e ? Yn(t) : Yn.ceil(t)).getUTCFullYear() % 1e4, n, 4)
                }

                function br() {
                    return "+0000"
                }

                function Mr() {
                    return "%"
                }

                function Tr(t) {
                    return +t
                }

                function Er(t) {
                    return Math.floor(+t / 1e3)
                }

                function kr(t) {
                    return new Date(t)
                }

                function Nr(t) {
                    return t instanceof Date ? +t : +new Date(+t)
                }

                function Ar(t, n, e, r, i, o, s, a, u, c) {
                    var l = F(),
                        h = l.invert,
                        f = l.domain,
                        p = c(".%L"),
                        d = c(":%S"),
                        y = c("%I:%M"),
                        m = c("%I %p"),
                        g = c("%a %d"),
                        _ = c("%b %d"),
                        v = c("%B"),
                        x = c("%Y");

                    function w(t) {
                        return (u(t) < t ? p : a(t) < t ? d : s(t) < t ? y : o(t) < t ? m : r(t) < t ? i(t) < t ? g : _ : e(t) < t ? v : x)(t)
                    }
                    return l.invert = function (t) {
                        return new Date(h(t))
                    }, l.domain = function (t) {
                        return arguments.length ? f(Array.from(t, Nr)) : f().map(kr)
                    }, l.ticks = function (n) {
                        var e = f();
                        return t(e[0], e[e.length - 1], null == n ? 10 : n)
                    }, l.tickFormat = function (t, n) {
                        return null == n ? w : c(n)
                    }, l.nice = function (t) {
                        var e = f();
                        return t && "function" == typeof t.range || (t = n(e[0], e[e.length - 1], null == t ? 10 : t)), t ? f(W(e, t)) : l
                    }, l.copy = function () {
                        return H(l, Ar(t, n, e, r, i, o, s, a, u, c))
                    }, l
                }

                function Sr() {
                    return i.apply(Ar(kn, Nn, rn, nn, Bt, $t, zt, jt, Ft, ae).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
                }

                function Pr() {
                    return i.apply(Ar(Tn, En, bn, xn, fn, ln, un, sn, Ft, ue).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
                }

                function Or() {
                    var t, n, e, r, i, o = 0,
                        s = 1,
                        a = I,
                        u = !1;

                    function c(n) {
                        return null == n || isNaN(n = +n) ? i : a(0 === e ? .5 : (n = (r(n) - t) * e, u ? Math.max(0, Math.min(1, n)) : n))
                    }

                    function l(t) {
                        return function (n) {
                            var e, r;
                            return arguments.length ? ([e, r] = n, a = t(e, r), c) : [a(0), a(1)]
                        }
                    }
                    return c.domain = function (i) {
                            return arguments.length ? ([o, s] = i, t = r(o = +o), n = r(s = +s), e = t === n ? 0 : 1 / (n - t), c) : [o, s]
                        }, c.clamp = function (t) {
                            return arguments.length ? (u = !!t, c) : u
                        }, c.interpolator = function (t) {
                            return arguments.length ? (a = t, c) : a
                        }, c.range = l(A.Z), c.rangeRound = l(P.Z), c.unknown = function (t) {
                            return arguments.length ? (i = t, c) : i
                        },
                        function (i) {
                            return r = i, t = i(o), n = i(s), e = t === n ? 0 : 1 / (n - t), c
                        }
                }

                function Lr(t, n) {
                    return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
                }

                function Ir() {
                    var t = X(Or()(I));
                    return t.copy = function () {
                        return Lr(t, Ir())
                    }, o.apply(t, arguments)
                }

                function Cr() {
                    var t = et(Or()).domain([1, 10]);
                    return t.copy = function () {
                        return Lr(t, Cr()).base(t.base())
                    }, o.apply(t, arguments)
                }

                function Zr() {
                    var t = st(Or());
                    return t.copy = function () {
                        return Lr(t, Zr()).constant(t.constant())
                    }, o.apply(t, arguments)
                }

                function Dr() {
                    var t = ht(Or());
                    return t.copy = function () {
                        return Lr(t, Dr()).exponent(t.exponent())
                    }, o.apply(t, arguments)
                }

                function Hr() {
                    return Dr.apply(null, arguments).exponent(.5)
                }

                function Yr() {
                    var t = [],
                        n = I;

                    function e(e) {
                        if (null != e && !isNaN(e = +e)) return n((N(t, e, 1) - 1) / (t.length - 1))
                    }
                    return e.domain = function (n) {
                        if (!arguments.length) return t.slice();
                        t = [];
                        for (let e of n) null == e || isNaN(e = +e) || t.push(e);
                        return t.sort(x), e
                    }, e.interpolator = function (t) {
                        return arguments.length ? (n = t, e) : n
                    }, e.range = function () {
                        return t.map(((e, r) => n(r / (t.length - 1))))
                    }, e.quantiles = function (n) {
                        return Array.from({
                            length: n + 1
                        }, ((e, r) => bt(t, r / n)))
                    }, e.copy = function () {
                        return Yr(n).domain(t)
                    }, o.apply(e, arguments)
                }
                se = function (t) {
                    var n = t.dateTime,
                        e = t.date,
                        r = t.time,
                        i = t.periods,
                        o = t.days,
                        s = t.shortDays,
                        a = t.months,
                        u = t.shortMonths,
                        c = ye(i),
                        l = me(i),
                        h = ye(o),
                        f = me(o),
                        p = ye(s),
                        d = me(s),
                        y = ye(a),
                        m = me(a),
                        g = ye(u),
                        _ = me(u),
                        v = {
                            a: function (t) {
                                return s[t.getDay()]
                            },
                            A: function (t) {
                                return o[t.getDay()]
                            },
                            b: function (t) {
                                return u[t.getMonth()]
                            },
                            B: function (t) {
                                return a[t.getMonth()]
                            },
                            c: null,
                            d: He,
                            e: He,
                            f: Re,
                            g: Ke,
                            G: nr,
                            H: Ye,
                            I: Fe,
                            j: Ue,
                            L: je,
                            m: ze,
                            M: qe,
                            p: function (t) {
                                return i[+(t.getHours() >= 12)]
                            },
                            q: function (t) {
                                return 1 + ~~(t.getMonth() / 3)
                            },
                            Q: Tr,
                            s: Er,
                            S: $e,
                            u: Xe,
                            U: Be,
                            V: We,
                            w: Ge,
                            W: Je,
                            x: null,
                            X: null,
                            y: Qe,
                            Y: tr,
                            Z: er,
                            "%": Mr
                        },
                        x = {
                            a: function (t) {
                                return s[t.getUTCDay()]
                            },
                            A: function (t) {
                                return o[t.getUTCDay()]
                            },
                            b: function (t) {
                                return u[t.getUTCMonth()]
                            },
                            B: function (t) {
                                return a[t.getUTCMonth()]
                            },
                            c: null,
                            d: rr,
                            e: rr,
                            f: ur,
                            g: vr,
                            G: wr,
                            H: ir,
                            I: or,
                            j: sr,
                            L: ar,
                            m: cr,
                            M: lr,
                            p: function (t) {
                                return i[+(t.getUTCHours() >= 12)]
                            },
                            q: function (t) {
                                return 1 + ~~(t.getUTCMonth() / 3)
                            },
                            Q: Tr,
                            s: Er,
                            S: hr,
                            u: fr,
                            U: pr,
                            V: yr,
                            w: mr,
                            W: gr,
                            x: null,
                            X: null,
                            y: _r,
                            Y: xr,
                            Z: br,
                            "%": Mr
                        },
                        w = {
                            a: function (t, n, e) {
                                var r = p.exec(n.slice(e));
                                return r ? (t.w = d.get(r[0].toLowerCase()), e + r[0].length) : -1
                            },
                            A: function (t, n, e) {
                                var r = h.exec(n.slice(e));
                                return r ? (t.w = f.get(r[0].toLowerCase()), e + r[0].length) : -1
                            },
                            b: function (t, n, e) {
                                var r = g.exec(n.slice(e));
                                return r ? (t.m = _.get(r[0].toLowerCase()), e + r[0].length) : -1
                            },
                            B: function (t, n, e) {
                                var r = y.exec(n.slice(e));
                                return r ? (t.m = m.get(r[0].toLowerCase()), e + r[0].length) : -1
                            },
                            c: function (t, e, r) {
                                return T(t, n, e, r)
                            },
                            d: Ne,
                            e: Ne,
                            f: Ie,
                            g: Me,
                            G: be,
                            H: Se,
                            I: Se,
                            j: Ae,
                            L: Le,
                            m: ke,
                            M: Pe,
                            p: function (t, n, e) {
                                var r = c.exec(n.slice(e));
                                return r ? (t.p = l.get(r[0].toLowerCase()), e + r[0].length) : -1
                            },
                            q: Ee,
                            Q: Ze,
                            s: De,
                            S: Oe,
                            u: _e,
                            U: ve,
                            V: xe,
                            w: ge,
                            W: we,
                            x: function (t, n, r) {
                                return T(t, e, n, r)
                            },
                            X: function (t, n, e) {
                                return T(t, r, n, e)
                            },
                            y: Me,
                            Y: be,
                            Z: Te,
                            "%": Ce
                        };

                    function b(t, n) {
                        return function (e) {
                            var r, i, o, s = [],
                                a = -1,
                                u = 0,
                                c = t.length;
                            for (e instanceof Date || (e = new Date(+e)); ++a < c;) 37 === t.charCodeAt(a) && (s.push(t.slice(u, a)), null != (i = ce[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), s.push(r), u = a + 1);
                            return s.push(t.slice(u, a)), s.join("")
                        }
                    }

                    function M(t, n) {
                        return function (e) {
                            var r, i, o = oe(1900, void 0, 1);
                            if (T(o, t, e += "", 0) != e.length) return null;
                            if ("Q" in o) return new Date(o.Q);
                            if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
                            if (n && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) {
                                if (o.V < 1 || o.V > 53) return null;
                                "w" in o || (o.w = 1), "Z" in o ? (i = (r = ie(oe(o.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? Zn.ceil(r) : Zn(r), r = Rn.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = re(oe(o.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? $n.ceil(r) : $n(r), r = Qn.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7)
                            } else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? ie(oe(o.y, 0, 1)).getUTCDay() : re(oe(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7);
                            return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, ie(o)) : re(o)
                        }
                    }

                    function T(t, n, e, r) {
                        for (var i, o, s = 0, a = n.length, u = e.length; s < a;) {
                            if (r >= u) return -1;
                            if (37 === (i = n.charCodeAt(s++))) {
                                if (i = n.charAt(s++), !(o = w[i in ce ? n.charAt(s++) : i]) || (r = o(t, e, r)) < 0) return -1
                            } else if (i != e.charCodeAt(r++)) return -1
                        }
                        return r
                    }
                    return v.x = b(e, v), v.X = b(r, v), v.c = b(n, v), x.x = b(e, x), x.X = b(r, x), x.c = b(n, x), {
                        format: function (t) {
                            var n = b(t += "", v);
                            return n.toString = function () {
                                return t
                            }, n
                        },
                        parse: function (t) {
                            var n = M(t += "", !1);
                            return n.toString = function () {
                                return t
                            }, n
                        },
                        utcFormat: function (t) {
                            var n = b(t += "", x);
                            return n.toString = function () {
                                return t
                            }, n
                        },
                        utcParse: function (t) {
                            var n = M(t += "", !0);
                            return n.toString = function () {
                                return t
                            }, n
                        }
                    }
                }({
                    dateTime: "%x, %X",
                    date: "%-m/%-d/%Y",
                    time: "%-I:%M:%S %p",
                    periods: ["AM", "PM"],
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                }), ae = se.format, se.parse, ue = se.utcFormat, se.utcParse;
                var Fr = e(9640);

                function Ur() {
                    var t, n, e, r, i, o, s, a = 0,
                        u = .5,
                        c = 1,
                        l = 1,
                        h = I,
                        f = !1;

                    function p(t) {
                        return isNaN(t = +t) ? s : (t = .5 + ((t = +o(t)) - n) * (l * t < l * n ? r : i), h(f ? Math.max(0, Math.min(1, t)) : t))
                    }

                    function d(t) {
                        return function (n) {
                            var e, r, i;
                            return arguments.length ? ([e, r, i] = n, h = (0, Fr.Z)(t, [e, r, i]), p) : [h(0), h(.5), h(1)]
                        }
                    }
                    return p.domain = function (s) {
                            return arguments.length ? ([a, u, c] = s, t = o(a = +a), n = o(u = +u), e = o(c = +c), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), l = n < t ? -1 : 1, p) : [a, u, c]
                        }, p.clamp = function (t) {
                            return arguments.length ? (f = !!t, p) : f
                        }, p.interpolator = function (t) {
                            return arguments.length ? (h = t, p) : h
                        }, p.range = d(A.Z), p.rangeRound = d(P.Z), p.unknown = function (t) {
                            return arguments.length ? (s = t, p) : s
                        },
                        function (s) {
                            return o = s, t = s(a), n = s(u), e = s(c), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), l = n < t ? -1 : 1, p
                        }
                }

                function jr() {
                    var t = X(Ur()(I));
                    return t.copy = function () {
                        return Lr(t, jr())
                    }, o.apply(t, arguments)
                }

                function Rr() {
                    var t = et(Ur()).domain([.1, 1, 10]);
                    return t.copy = function () {
                        return Lr(t, Rr()).base(t.base())
                    }, o.apply(t, arguments)
                }

                function zr() {
                    var t = st(Ur());
                    return t.copy = function () {
                        return Lr(t, zr()).constant(t.constant())
                    }, o.apply(t, arguments)
                }

                function qr() {
                    var t = ht(Ur());
                    return t.copy = function () {
                        return Lr(t, qr()).exponent(t.exponent())
                    }, o.apply(t, arguments)
                }

                function $r() {
                    return qr.apply(null, arguments).exponent(.5)
                }
            },
            9898: (t, n, e) => {
                "use strict";

                function r(t) {
                    return null == t ? [] : Array.isArray(t) ? t : Array.from(t)
                }
                e.d(n, {
                    Z: () => r
                })
            },
            4708: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => a
                });
                var r = e(1663),
                    i = e(1226);

                function o(t) {
                    return function () {
                        var n = this.ownerDocument,
                            e = this.namespaceURI;
                        return e === i.P && n.documentElement.namespaceURI === i.P ? n.createElement(t) : n.createElementNS(e, t)
                    }
                }

                function s(t) {
                    return function () {
                        return this.ownerDocument.createElementNS(t.space, t.local)
                    }
                }

                function a(t) {
                    var n = (0, r.Z)(t);
                    return (n.local ? s : o)(n)
                }
            },
            3905: (t, n, e) => {
                "use strict";
                e.r(n), e.d(n, {
                    create: () => o,
                    creator: () => r.Z,
                    local: () => a,
                    matcher: () => c.Z,
                    namespace: () => l.Z,
                    namespaces: () => h.Z,
                    pointer: () => f.Z,
                    pointers: () => d,
                    select: () => i.Z,
                    selectAll: () => g,
                    selection: () => m.ZP,
                    selector: () => _.Z,
                    selectorAll: () => v.Z,
                    style: () => x.S,
                    window: () => w.Z
                });
                var r = e(4708),
                    i = e(3838);

                function o(t) {
                    return (0, i.Z)((0, r.Z)(t).call(document.documentElement))
                }
                var s = 0;

                function a() {
                    return new u
                }

                function u() {
                    this._ = "@" + (++s).toString(36)
                }
                u.prototype = a.prototype = {
                    constructor: u,
                    get: function (t) {
                        for (var n = this._; !(n in t);)
                            if (!(t = t.parentNode)) return;
                        return t[n]
                    },
                    set: function (t, n) {
                        return t[this._] = n
                    },
                    remove: function (t) {
                        return this._ in t && delete t[this._]
                    },
                    toString: function () {
                        return this._
                    }
                };
                var c = e(4421),
                    l = e(1663),
                    h = e(1226),
                    f = e(3109),
                    p = e(9439);

                function d(t, n) {
                    return t.target && (t = (0, p.Z)(t), void 0 === n && (n = t.currentTarget), t = t.touches || [t]), Array.from(t, (t => (0, f.Z)(t, n)))
                }
                var y = e(9898),
                    m = e(6740);

                function g(t) {
                    return "string" == typeof t ? new m.Y1([document.querySelectorAll(t)], [document.documentElement]) : new m.Y1([(0, y.Z)(t)], m.Jz)
                }
                var _ = e(3010),
                    v = e(9701),
                    x = e(2627),
                    w = e(9920)
            },
            4421: (t, n, e) => {
                "use strict";

                function r(t) {
                    return function () {
                        return this.matches(t)
                    }
                }

                function i(t) {
                    return function (n) {
                        return n.matches(t)
                    }
                }
                e.d(n, {
                    P: () => i,
                    Z: () => r
                })
            },
            1663: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i
                });
                var r = e(1226);

                function i(t) {
                    var n = t += "",
                        e = n.indexOf(":");
                    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), r.Z.hasOwnProperty(n) ? {
                        space: r.Z[n],
                        local: t
                    } : t
                }
            },
            1226: (t, n, e) => {
                "use strict";
                e.d(n, {
                    P: () => r,
                    Z: () => i
                });
                var r = "http://www.w3.org/1999/xhtml";
                const i = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: r,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                }
            },
            3109: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i
                });
                var r = e(9439);

                function i(t, n) {
                    if (t = (0, r.Z)(t), void 0 === n && (n = t.currentTarget), n) {
                        var e = n.ownerSVGElement || n;
                        if (e.createSVGPoint) {
                            var i = e.createSVGPoint();
                            return i.x = t.clientX, i.y = t.clientY, [(i = i.matrixTransform(n.getScreenCTM().inverse())).x, i.y]
                        }
                        if (n.getBoundingClientRect) {
                            var o = n.getBoundingClientRect();
                            return [t.clientX - o.left - n.clientLeft, t.clientY - o.top - n.clientTop]
                        }
                    }
                    return [t.pageX, t.pageY]
                }
            },
            3838: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Z: () => i
                });
                var r = e(6740);

                function i(t) {
                    return "string" == typeof t ? new r.Y1([
                        [document.querySelector(t)]
                    ], [document.documentElement]) : new r.Y1([
                        [t]
                    ], r.Jz)
                }
            },
            6740: (t, n, e) => {
                "use strict";
                e.d(n, {
                    Y1: () => ot,
                    ZP: () => at,
                    Jz: () => it
                });
                var r = e(3010),
                    i = e(9898),
                    o = e(9701),
                    s = e(4421),
                    a = Array.prototype.find;

                function u() {
                    return this.firstElementChild
                }
                var c = Array.prototype.filter;

                function l() {
                    return Array.from(this.children)
                }

                function h(t) {
                    return new Array(t.length)
                }

                function f(t, n) {
                    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
                }

                function p(t) {
                    return function () {
                        return t
                    }
                }

                function d(t, n, e, r, i, o) {
                    for (var s, a = 0, u = n.length, c = o.length; a < c; ++a)(s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new f(t, o[a]);
                    for (; a < u; ++a)(s = n[a]) && (i[a] = s)
                }

                function y(t, n, e, r, i, o, s) {
                    var a, u, c, l = new Map,
                        h = n.length,
                        p = o.length,
                        d = new Array(h);
                    for (a = 0; a < h; ++a)(u = n[a]) && (d[a] = c = s.call(u, u.__data__, a, n) + "", l.has(c) ? i[a] = u : l.set(c, u));
                    for (a = 0; a < p; ++a) c = s.call(t, o[a], a, o) + "", (u = l.get(c)) ? (r[a] = u, u.__data__ = o[a], l.delete(c)) : e[a] = new f(t, o[a]);
                    for (a = 0; a < h; ++a)(u = n[a]) && l.get(d[a]) === u && (i[a] = u)
                }

                function m(t) {
                    return t.__data__
                }

                function g(t) {
                    return "object" == typeof t && "length" in t ? t : Array.from(t)
                }

                function _(t, n) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                }
                f.prototype = {
                    constructor: f,
                    appendChild: function (t) {
                        return this._parent.insertBefore(t, this._next)
                    },
                    insertBefore: function (t, n) {
                        return this._parent.insertBefore(t, n)
                    },
                    querySelector: function (t) {
                        return this._parent.querySelector(t)
                    },
                    querySelectorAll: function (t) {
                        return this._parent.querySelectorAll(t)
                    }
                };
                var v = e(1663);

                function x(t) {
                    return function () {
                        this.removeAttribute(t)
                    }
                }

                function w(t) {
                    return function () {
                        this.removeAttributeNS(t.space, t.local)
                    }
                }

                function b(t, n) {
                    return function () {
                        this.setAttribute(t, n)
                    }
                }

                function M(t, n) {
                    return function () {
                        this.setAttributeNS(t.space, t.local, n)
                    }
                }

                function T(t, n) {
                    return function () {
                        var e = n.apply(this, arguments);
                        null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                    }
                }

                function E(t, n) {
                    return function () {
                        var e = n.apply(this, arguments);
                        null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                    }
                }
                var k = e(2627);

                function N(t) {
                    return function () {
                        delete this[t]
                    }
                }

                function A(t, n) {
                    return function () {
                        this[t] = n
                    }
                }

                function S(t, n) {
                    return function () {
                        var e = n.apply(this, arguments);
                        null == e ? delete this[t] : this[t] = e
                    }
                }

                function P(t) {
                    return t.trim().split(/^|\s+/)
                }

                function O(t) {
                    return t.classList || new L(t)
                }

                function L(t) {
                    this._node = t, this._names = P(t.getAttribute("class") || "")
                }

                function I(t, n) {
                    for (var e = O(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
                }

                function C(t, n) {
                    for (var e = O(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
                }

                function Z(t) {
                    return function () {
                        I(this, t)
                    }
                }

                function D(t) {
                    return function () {
                        C(this, t)
                    }
                }

                function H(t, n) {
                    return function () {
                        (n.apply(this, arguments) ? I : C)(this, t)
                    }
                }

                function Y() {
                    this.textContent = ""
                }

                function F(t) {
                    return function () {
                        this.textContent = t
                    }
                }

                function U(t) {
                    return function () {
                        var n = t.apply(this, arguments);
                        this.textContent = null == n ? "" : n
                    }
                }

                function j() {
                    this.innerHTML = ""
                }

                function R(t) {
                    return function () {
                        this.innerHTML = t
                    }
                }

                function z(t) {
                    return function () {
                        var n = t.apply(this, arguments);
                        this.innerHTML = null == n ? "" : n
                    }
                }

                function q() {
                    this.nextSibling && this.parentNode.appendChild(this)
                }

                function $() {
                    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
                }
                L.prototype = {
                    add: function (t) {
                        this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                    },
                    remove: function (t) {
                        var n = this._names.indexOf(t);
                        n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
                    },
                    contains: function (t) {
                        return this._names.indexOf(t) >= 0
                    }
                };
                var X = e(4708);

                function B() {
                    return null
                }

                function V() {
                    var t = this.parentNode;
                    t && t.removeChild(this)
                }

                function W() {
                    var t = this.cloneNode(!1),
                        n = this.parentNode;
                    return n ? n.insertBefore(t, this.nextSibling) : t
                }

                function G() {
                    var t = this.cloneNode(!0),
                        n = this.parentNode;
                    return n ? n.insertBefore(t, this.nextSibling) : t
                }

                function J(t) {
                    return t.trim().split(/^|\s+/).map((function (t) {
                        var n = "",
                            e = t.indexOf(".");
                        return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                            type: t,
                            name: n
                        }
                    }))
                }

                function Q(t) {
                    return function () {
                        var n = this.__on;
                        if (n) {
                            for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);
                            ++i ? n.length = i : delete this.__on
                        }
                    }
                }

                function K(t, n, e) {
                    return function () {
                        var r, i = this.__on,
                            o = function (t) {
                                return function (n) {
                                    t.call(this, n, this.__data__)
                                }
                            }(n);
                        if (i)
                            for (var s = 0, a = i.length; s < a; ++s)
                                if ((r = i[s]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void(r.value = n);
                        this.addEventListener(t.type, o, e), r = {
                            type: t.type,
                            name: t.name,
                            value: n,
                            listener: o,
                            options: e
                        }, i ? i.push(r) : this.__on = [r]
                    }
                }
                var tt = e(9920);

                function nt(t, n, e) {
                    var r = (0, tt.Z)(t),
                        i = r.CustomEvent;
                    "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
                }

                function et(t, n) {
                    return function () {
                        return nt(this, t, n)
                    }
                }

                function rt(t, n) {
                    return function () {
                        return nt(this, t, n.apply(this, arguments))
                    }
                }
                var it = [null];

                function ot(t, n) {
                    this._groups = t, this._parents = n
                }

                function st() {
                    return new ot([
                        [document.documentElement]
                    ], it)
                }
                ot.prototype = st.prototype = {
                    constructor: ot,
                    select: function (t) {
                        "function" != typeof t && (t = (0, r.Z)(t));
                        for (var n = this._groups, e = n.length, i = new Array(e), o = 0; o < e; ++o)
                            for (var s, a, u = n[o], c = u.length, l = i[o] = new Array(c), h = 0; h < c; ++h)(s = u[h]) && (a = t.call(s, s.__data__, h, u)) && ("__data__" in s && (a.__data__ = s.__data__), l[h] = a);
                        return new ot(i, this._parents)
                    },
                    selectAll: function (t) {
                        t = "function" == typeof t ? function (t) {
                            return function () {
                                return (0, i.Z)(t.apply(this, arguments))
                            }
                        }(t) : (0, o.Z)(t);
                        for (var n = this._groups, e = n.length, r = [], s = [], a = 0; a < e; ++a)
                            for (var u, c = n[a], l = c.length, h = 0; h < l; ++h)(u = c[h]) && (r.push(t.call(u, u.__data__, h, c)), s.push(u));
                        return new ot(r, s)
                    },
                    selectChild: function (t) {
                        return this.select(null == t ? u : function (t) {
                            return function () {
                                return a.call(this.children, t)
                            }
                        }("function" == typeof t ? t : (0, s.P)(t)))
                    },
                    selectChildren: function (t) {
                        return this.selectAll(null == t ? l : function (t) {
                            return function () {
                                return c.call(this.children, t)
                            }
                        }("function" == typeof t ? t : (0, s.P)(t)))
                    },
                    filter: function (t) {
                        "function" != typeof t && (t = (0, s.Z)(t));
                        for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                            for (var o, a = n[i], u = a.length, c = r[i] = [], l = 0; l < u; ++l)(o = a[l]) && t.call(o, o.__data__, l, a) && c.push(o);
                        return new ot(r, this._parents)
                    },
                    data: function (t, n) {
                        if (!arguments.length) return Array.from(this, m);
                        var e = n ? y : d,
                            r = this._parents,
                            i = this._groups;
                        "function" != typeof t && (t = p(t));
                        for (var o = i.length, s = new Array(o), a = new Array(o), u = new Array(o), c = 0; c < o; ++c) {
                            var l = r[c],
                                h = i[c],
                                f = h.length,
                                _ = g(t.call(l, l && l.__data__, c, r)),
                                v = _.length,
                                x = a[c] = new Array(v),
                                w = s[c] = new Array(v),
                                b = u[c] = new Array(f);
                            e(l, h, x, w, b, _, n);
                            for (var M, T, E = 0, k = 0; E < v; ++E)
                                if (M = x[E]) {
                                    for (E >= k && (k = E + 1); !(T = w[k]) && ++k < v;);
                                    M._next = T || null
                                }
                        }
                        return (s = new ot(s, r))._enter = a, s._exit = u, s
                    },
                    enter: function () {
                        return new ot(this._enter || this._groups.map(h), this._parents)
                    },
                    exit: function () {
                        return new ot(this._exit || this._groups.map(h), this._parents)
                    },
                    join: function (t, n, e) {
                        var r = this.enter(),
                            i = this,
                            o = this.exit();
                        return "function" == typeof t ? (r = t(r)) && (r = r.selection()) : r = r.append(t + ""), null != n && (i = n(i)) && (i = i.selection()), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
                    },
                    merge: function (t) {
                        for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, s = Math.min(i, o), a = new Array(i), u = 0; u < s; ++u)
                            for (var c, l = e[u], h = r[u], f = l.length, p = a[u] = new Array(f), d = 0; d < f; ++d)(c = l[d] || h[d]) && (p[d] = c);
                        for (; u < i; ++u) a[u] = e[u];
                        return new ot(a, this._parents)
                    },
                    selection: function () {
                        return this
                    },
                    order: function () {
                        for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                            for (var r, i = t[n], o = i.length - 1, s = i[o]; --o >= 0;)(r = i[o]) && (s && 4 ^ r.compareDocumentPosition(s) && s.parentNode.insertBefore(r, s), s = r);
                        return this
                    },
                    sort: function (t) {
                        function n(n, e) {
                            return n && e ? t(n.__data__, e.__data__) : !n - !e
                        }
                        t || (t = _);
                        for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                            for (var s, a = e[o], u = a.length, c = i[o] = new Array(u), l = 0; l < u; ++l)(s = a[l]) && (c[l] = s);
                            c.sort(n)
                        }
                        return new ot(i, this._parents).order()
                    },
                    call: function () {
                        var t = arguments[0];
                        return arguments[0] = this, t.apply(null, arguments), this
                    },
                    nodes: function () {
                        return Array.from(this)
                    },
                    node: function () {
                        for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                            for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                                var s = r[i];
                                if (s) return s
                            }
                        return null
                    },
                    size: function () {
                        let t = 0;
                        for (const n of this) ++t;
                        return t
                    },
                    empty: function () {
                        return !this.node()
                    },
                    each: function (t) {
                        for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                            for (var i, o = n[e], s = 0, a = o.length; s < a; ++s)(i = o[s]) && t.call(i, i.__data__, s, o);
                        return this
                    },
                    attr: function (t, n) {
                        var e = (0, v.Z)(t);
                        if (arguments.length < 2) {
                            var r = this.node();
                            return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                        }
                        return this.each((null == n ? e.local ? w : x : "function" == typeof n ? e.local ? E : T : e.local ? M : b)(e, n))
                    },
                    style: k.Z,
                    property: function (t, n) {
                        return arguments.length > 1 ? this.each((null == n ? N : "function" == typeof n ? S : A)(t, n)) : this.node()[t]
                    },
                    classed: function (t, n) {
                        var e = P(t + "");
                        if (arguments.length < 2) {
                            for (var r = O(this.node()), i = -1, o = e.length; ++i < o;)
                                if (!r.contains(e[i])) return !1;
                            return !0
                        }
                        return this.each(("function" == typeof n ? H : n ? Z : D)(e, n))
                    },
                    text: function (t) {
                        return arguments.length ? this.each(null == t ? Y : ("function" == typeof t ? U : F)(t)) : this.node().textContent
                    },
                    html: function (t) {
                        return arguments.length ? this.each(null == t ? j : ("function" == typeof t ? z : R)(t)) : this.node().innerHTML
                    },
                    raise: function () {
                        return this.each(q)
                    },
                    lower: function () {
                        return this.each($)
                    },
                    append: function (t) {
                        var n = "function" == typeof t ? t : (0, X.Z)(t);
                        return this.select((function () {
                            return this.appendChild(n.apply(this, arguments))
                        }))
                    },
                    insert: function (t, n) {
                        var e = "function" == typeof t ? t : (0, X.Z)(t),
                            i = null == n ? B : "function" == typeof n ? n : (0, r.Z)(n);
                        return this.select((function () {
                            return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null)
                        }))
                    },
                    remove: function () {
                        return this.each(V)
                    },
                    clone: function (t) {
                        return this.select(t ? G : W)
                    },
                    datum: function (t) {
                        return arguments.length ? this.property("__data__", t) : this.node().__data__
                    },
                    on: function (t, n, e) {
                        var r, i, o = J(t + ""),
                            s = o.length;
                        if (!(arguments.length < 2)) {
                            for (a = n ? K : Q, r = 0; r < s; ++r) this.each(a(o[r], n, e));
                            return this
                        }
                        var a = this.node().__on;
                        if (a)
                            for (var u, c = 0, l = a.length; c < l; ++c)
                                for (r = 0, u = a[c]; r < s; ++r)
                                    if ((i = o[r]).type === u.type && i.name === u.name) return u.value
                    },
                    dispatch: function (t, n) {
                        return this.each(("function" == typeof n ? rt : et)(t, n))
                    },
                    [Symbol.iterator]: function* () {
                        for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                            for (var r, i = t[n], o = 0, s = i.length; o < s; ++o)(r = i[o]) && (yield r)
                    }
                };
                const at = st
            },
            2627: (t, n, e) => {
                "use strict";
                e.d(n, {
                    S: () => u,
                    Z: () => a
                });
                var r = e(9920);

                function i(t) {
                    return function () {
                        this.style.removeProperty(t)
                    }
                }

                function o(t, n, e) {
                    return function () {
                        this.style.setProperty(t, n, e)
                    }
                }

                function s(t, n, e) {
                    return function () {
                        var r = n.apply(this, arguments);
                        null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                    }
                }

                function a(t, n, e) {
                    return arguments.length > 1 ? this.each((null == n ? i : "function" == typeof n ? s : o)(t, n, null == e ? "" : e)) : u(this.node(), t)
                }

                function u(t, n) {
                    return t.style.getPropertyValue(n) || (0, r.Z)(t).getComputedStyle(t, null).getPropertyValue(n)
                }
            },
            3010: (t, n, e) => {
                "use strict";

                function r() {}

                function i(t) {
                    return null == t ? r : function () {
                        return this.querySelector(t)
                    }
                }
                e.d(n, {
                    Z: () => i
                })
            },
            9701: (t, n, e) => {
                "use strict";

                function r() {
                    return []
                }

                function i(t) {
                    return null == t ? r : function () {
                        return this.querySelectorAll(t)
                    }
                }
                e.d(n, {
                    Z: () => i
                })
            },
            9439: (t, n, e) => {
                "use strict";

                function r(t) {
                    let n;
                    for (; n = t.sourceEvent;) t = n;
                    return t
                }
                e.d(n, {
                    Z: () => r
                })
            },
            9920: (t, n, e) => {
                "use strict";

                function r(t) {
                    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
                }
                e.d(n, {
                    Z: () => r
                })
            },
            8783: (t, n, e) => {
                "use strict";
                e.r(n), e.d(n, {
                    arc: () => O,
                    area: () => F,
                    areaRadial: () => V,
                    curveBasis: () => Yt,
                    curveBasisClosed: () => Ut,
                    curveBasisOpen: () => Rt,
                    curveBumpX: () => Q,
                    curveBumpY: () => K,
                    curveBundle: () => qt,
                    curveCardinal: () => Bt,
                    curveCardinalClosed: () => Wt,
                    curveCardinalOpen: () => Jt,
                    curveCatmullRom: () => tn,
                    curveCatmullRomClosed: () => en,
                    curveCatmullRomOpen: () => on,
                    curveLinear: () => Z,
                    curveLinearClosed: () => an,
                    curveMonotoneX: () => yn,
                    curveMonotoneY: () => mn,
                    curveNatural: () => vn,
                    curveStep: () => wn,
                    curveStepAfter: () => Mn,
                    curveStepBefore: () => bn,
                    line: () => Y,
                    lineRadial: () => B,
                    link: () => rt,
                    linkHorizontal: () => it,
                    linkRadial: () => st,
                    linkVertical: () => ot,
                    pie: () => R,
                    pointRadial: () => W,
                    radialArea: () => V,
                    radialLine: () => B,
                    stack: () => An,
                    stackOffsetDiverging: () => Pn,
                    stackOffsetExpand: () => Sn,
                    stackOffsetNone: () => Tn,
                    stackOffsetSilhouette: () => On,
                    stackOffsetWiggle: () => Ln,
                    stackOrderAppearance: () => In,
                    stackOrderAscending: () => Zn,
                    stackOrderDescending: () => Hn,
                    stackOrderInsideOut: () => Yn,
                    stackOrderNone: () => En,
                    stackOrderReverse: () => Fn,
                    symbol: () => Ct,
                    symbolAsterisk: () => ut,
                    symbolCircle: () => ct,
                    symbolCross: () => lt,
                    symbolDiamond: () => pt,
                    symbolDiamond2: () => dt,
                    symbolPlus: () => yt,
                    symbolSquare: () => mt,
                    symbolSquare2: () => gt,
                    symbolStar: () => wt,
                    symbolTriangle: () => Mt,
                    symbolTriangle2: () => Et,
                    symbolWye: () => Pt,
                    symbolX: () => Ot,
                    symbols: () => Lt,
                    symbolsFill: () => Lt,
                    symbolsStroke: () => It
                });
                const r = Math.PI,
                    i = 2 * r,
                    o = 1e-6,
                    s = i - o;

                function a() {
                    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
                }

                function u() {
                    return new a
                }
                a.prototype = u.prototype = {
                    constructor: a,
                    moveTo: function (t, n) {
                        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
                    },
                    closePath: function () {
                        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
                    },
                    lineTo: function (t, n) {
                        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
                    },
                    quadraticCurveTo: function (t, n, e, r) {
                        this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
                    },
                    bezierCurveTo: function (t, n, e, r, i, o) {
                        this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
                    },
                    arcTo: function (t, n, e, i, s) {
                        t = +t, n = +n, e = +e, i = +i, s = +s;
                        var a = this._x1,
                            u = this._y1,
                            c = e - t,
                            l = i - n,
                            h = a - t,
                            f = u - n,
                            p = h * h + f * f;
                        if (s < 0) throw new Error("negative radius: " + s);
                        if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                        else if (p > o)
                            if (Math.abs(f * c - l * h) > o && s) {
                                var d = e - a,
                                    y = i - u,
                                    m = c * c + l * l,
                                    g = d * d + y * y,
                                    _ = Math.sqrt(m),
                                    v = Math.sqrt(p),
                                    x = s * Math.tan((r - Math.acos((m + p - g) / (2 * _ * v))) / 2),
                                    w = x / v,
                                    b = x / _;
                                Math.abs(w - 1) > o && (this._ += "L" + (t + w * h) + "," + (n + w * f)), this._ += "A" + s + "," + s + ",0,0," + +(f * d > h * y) + "," + (this._x1 = t + b * c) + "," + (this._y1 = n + b * l)
                            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n)
                    },
                    arc: function (t, n, e, a, u, c) {
                        t = +t, n = +n, c = !!c;
                        var l = (e = +e) * Math.cos(a),
                            h = e * Math.sin(a),
                            f = t + l,
                            p = n + h,
                            d = 1 ^ c,
                            y = c ? a - u : u - a;
                        if (e < 0) throw new Error("negative radius: " + e);
                        null === this._x1 ? this._ += "M" + f + "," + p : (Math.abs(this._x1 - f) > o || Math.abs(this._y1 - p) > o) && (this._ += "L" + f + "," + p), e && (y < 0 && (y = y % i + i), y > s ? this._ += "A" + e + "," + e + ",0,1," + d + "," + (t - l) + "," + (n - h) + "A" + e + "," + e + ",0,1," + d + "," + (this._x1 = f) + "," + (this._y1 = p) : y > o && (this._ += "A" + e + "," + e + ",0," + +(y >= r) + "," + d + "," + (this._x1 = t + e * Math.cos(u)) + "," + (this._y1 = n + e * Math.sin(u))))
                    },
                    rect: function (t, n, e, r) {
                        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
                    },
                    toString: function () {
                        return this._
                    }
                };
                const c = u;

                function l(t) {
                    return function () {
                        return t
                    }
                }
                const h = Math.abs,
                    f = Math.atan2,
                    p = Math.cos,
                    d = Math.max,
                    y = Math.min,
                    m = Math.sin,
                    g = Math.sqrt,
                    _ = 1e-12,
                    v = Math.PI,
                    x = v / 2,
                    w = 2 * v;

                function b(t) {
                    return t > 1 ? 0 : t < -1 ? v : Math.acos(t)
                }

                function M(t) {
                    return t >= 1 ? x : t <= -1 ? -x : Math.asin(t)
                }

                function T(t) {
                    return t.innerRadius
                }

                function E(t) {
                    return t.outerRadius
                }

                function k(t) {
                    return t.startAngle
                }

                function N(t) {
                    return t.endAngle
                }

                function A(t) {
                    return t && t.padAngle
                }

                function S(t, n, e, r, i, o, s, a) {
                    var u = e - t,
                        c = r - n,
                        l = s - i,
                        h = a - o,
                        f = h * u - l * c;
                    if (!(f * f < _)) return [t + (f = (l * (n - o) - h * (t - i)) / f) * u, n + f * c]
                }

                function P(t, n, e, r, i, o, s) {
                    var a = t - e,
                        u = n - r,
                        c = (s ? o : -o) / g(a * a + u * u),
                        l = c * u,
                        h = -c * a,
                        f = t + l,
                        p = n + h,
                        y = e + l,
                        m = r + h,
                        _ = (f + y) / 2,
                        v = (p + m) / 2,
                        x = y - f,
                        w = m - p,
                        b = x * x + w * w,
                        M = i - o,
                        T = f * m - y * p,
                        E = (w < 0 ? -1 : 1) * g(d(0, M * M * b - T * T)),
                        k = (T * w - x * E) / b,
                        N = (-T * x - w * E) / b,
                        A = (T * w + x * E) / b,
                        S = (-T * x + w * E) / b,
                        P = k - _,
                        O = N - v,
                        L = A - _,
                        I = S - v;
                    return P * P + O * O > L * L + I * I && (k = A, N = S), {
                        cx: k,
                        cy: N,
                        x01: -l,
                        y01: -h,
                        x11: k * (i / M - 1),
                        y11: N * (i / M - 1)
                    }
                }

                function O() {
                    var t = T,
                        n = E,
                        e = l(0),
                        r = null,
                        i = k,
                        o = N,
                        s = A,
                        a = null;

                    function u() {
                        var u, l, d = +t.apply(this, arguments),
                            T = +n.apply(this, arguments),
                            E = i.apply(this, arguments) - x,
                            k = o.apply(this, arguments) - x,
                            N = h(k - E),
                            A = k > E;
                        if (a || (a = u = c()), T < d && (l = T, T = d, d = l), T > _)
                            if (N > w - _) a.moveTo(T * p(E), T * m(E)), a.arc(0, 0, T, E, k, !A), d > _ && (a.moveTo(d * p(k), d * m(k)), a.arc(0, 0, d, k, E, A));
                            else {
                                var O, L, I = E,
                                    C = k,
                                    Z = E,
                                    D = k,
                                    H = N,
                                    Y = N,
                                    F = s.apply(this, arguments) / 2,
                                    U = F > _ && (r ? +r.apply(this, arguments) : g(d * d + T * T)),
                                    j = y(h(T - d) / 2, +e.apply(this, arguments)),
                                    R = j,
                                    z = j;
                                if (U > _) {
                                    var q = M(U / d * m(F)),
                                        $ = M(U / T * m(F));
                                    (H -= 2 * q) > _ ? (Z += q *= A ? 1 : -1, D -= q) : (H = 0, Z = D = (E + k) / 2), (Y -= 2 * $) > _ ? (I += $ *= A ? 1 : -1, C -= $) : (Y = 0, I = C = (E + k) / 2)
                                }
                                var X = T * p(I),
                                    B = T * m(I),
                                    V = d * p(D),
                                    W = d * m(D);
                                if (j > _) {
                                    var G, J = T * p(C),
                                        Q = T * m(C),
                                        K = d * p(Z),
                                        tt = d * m(Z);
                                    if (N < v && (G = S(X, B, K, tt, J, Q, V, W))) {
                                        var nt = X - G[0],
                                            et = B - G[1],
                                            rt = J - G[0],
                                            it = Q - G[1],
                                            ot = 1 / m(b((nt * rt + et * it) / (g(nt * nt + et * et) * g(rt * rt + it * it))) / 2),
                                            st = g(G[0] * G[0] + G[1] * G[1]);
                                        R = y(j, (d - st) / (ot - 1)), z = y(j, (T - st) / (ot + 1))
                                    }
                                }
                                Y > _ ? z > _ ? (O = P(K, tt, X, B, T, z, A), L = P(J, Q, V, W, T, z, A), a.moveTo(O.cx + O.x01, O.cy + O.y01), z < j ? a.arc(O.cx, O.cy, z, f(O.y01, O.x01), f(L.y01, L.x01), !A) : (a.arc(O.cx, O.cy, z, f(O.y01, O.x01), f(O.y11, O.x11), !A), a.arc(0, 0, T, f(O.cy + O.y11, O.cx + O.x11), f(L.cy + L.y11, L.cx + L.x11), !A), a.arc(L.cx, L.cy, z, f(L.y11, L.x11), f(L.y01, L.x01), !A))) : (a.moveTo(X, B), a.arc(0, 0, T, I, C, !A)) : a.moveTo(X, B), d > _ && H > _ ? R > _ ? (O = P(V, W, J, Q, d, -R, A), L = P(X, B, K, tt, d, -R, A), a.lineTo(O.cx + O.x01, O.cy + O.y01), R < j ? a.arc(O.cx, O.cy, R, f(O.y01, O.x01), f(L.y01, L.x01), !A) : (a.arc(O.cx, O.cy, R, f(O.y01, O.x01), f(O.y11, O.x11), !A), a.arc(0, 0, d, f(O.cy + O.y11, O.cx + O.x11), f(L.cy + L.y11, L.cx + L.x11), A), a.arc(L.cx, L.cy, R, f(L.y11, L.x11), f(L.y01, L.x01), !A))) : a.arc(0, 0, d, D, Z, A) : a.lineTo(V, W)
                            }
                        else a.moveTo(0, 0);
                        if (a.closePath(), u) return a = null, u + "" || null
                    }
                    return u.centroid = function () {
                        var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                            r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - v / 2;
                        return [p(r) * e, m(r) * e]
                    }, u.innerRadius = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : l(+n), u) : t
                    }, u.outerRadius = function (t) {
                        return arguments.length ? (n = "function" == typeof t ? t : l(+t), u) : n
                    }, u.cornerRadius = function (t) {
                        return arguments.length ? (e = "function" == typeof t ? t : l(+t), u) : e
                    }, u.padRadius = function (t) {
                        return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : l(+t), u) : r
                    }, u.startAngle = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : l(+t), u) : i
                    }, u.endAngle = function (t) {
                        return arguments.length ? (o = "function" == typeof t ? t : l(+t), u) : o
                    }, u.padAngle = function (t) {
                        return arguments.length ? (s = "function" == typeof t ? t : l(+t), u) : s
                    }, u.context = function (t) {
                        return arguments.length ? (a = null == t ? null : t, u) : a
                    }, u
                }
                var L = Array.prototype.slice;

                function I(t) {
                    return "object" == typeof t && "length" in t ? t : Array.from(t)
                }

                function C(t) {
                    this._context = t
                }

                function Z(t) {
                    return new C(t)
                }

                function D(t) {
                    return t[0]
                }

                function H(t) {
                    return t[1]
                }

                function Y(t, n) {
                    var e = l(!0),
                        r = null,
                        i = Z,
                        o = null;

                    function s(s) {
                        var a, u, l, h = (s = I(s)).length,
                            f = !1;
                        for (null == r && (o = i(l = c())), a = 0; a <= h; ++a) !(a < h && e(u = s[a], a, s)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()), f && o.point(+t(u, a, s), +n(u, a, s));
                        if (l) return o = null, l + "" || null
                    }
                    return t = "function" == typeof t ? t : void 0 === t ? D : l(t), n = "function" == typeof n ? n : void 0 === n ? H : l(n), s.x = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : l(+n), s) : t
                    }, s.y = function (t) {
                        return arguments.length ? (n = "function" == typeof t ? t : l(+t), s) : n
                    }, s.defined = function (t) {
                        return arguments.length ? (e = "function" == typeof t ? t : l(!!t), s) : e
                    }, s.curve = function (t) {
                        return arguments.length ? (i = t, null != r && (o = i(r)), s) : i
                    }, s.context = function (t) {
                        return arguments.length ? (null == t ? r = o = null : o = i(r = t), s) : r
                    }, s
                }

                function F(t, n, e) {
                    var r = null,
                        i = l(!0),
                        o = null,
                        s = Z,
                        a = null;

                    function u(u) {
                        var l, h, f, p, d, y = (u = I(u)).length,
                            m = !1,
                            g = new Array(y),
                            _ = new Array(y);
                        for (null == o && (a = s(d = c())), l = 0; l <= y; ++l) {
                            if (!(l < y && i(p = u[l], l, u)) === m)
                                if (m = !m) h = l, a.areaStart(), a.lineStart();
                                else {
                                    for (a.lineEnd(), a.lineStart(), f = l - 1; f >= h; --f) a.point(g[f], _[f]);
                                    a.lineEnd(), a.areaEnd()
                                } m && (g[l] = +t(p, l, u), _[l] = +n(p, l, u), a.point(r ? +r(p, l, u) : g[l], e ? +e(p, l, u) : _[l]))
                        }
                        if (d) return a = null, d + "" || null
                    }

                    function h() {
                        return Y().defined(i).curve(s).context(o)
                    }
                    return t = "function" == typeof t ? t : void 0 === t ? D : l(+t), n = "function" == typeof n ? n : l(void 0 === n ? 0 : +n), e = "function" == typeof e ? e : void 0 === e ? H : l(+e), u.x = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : l(+n), r = null, u) : t
                    }, u.x0 = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : l(+n), u) : t
                    }, u.x1 = function (t) {
                        return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : l(+t), u) : r
                    }, u.y = function (t) {
                        return arguments.length ? (n = "function" == typeof t ? t : l(+t), e = null, u) : n
                    }, u.y0 = function (t) {
                        return arguments.length ? (n = "function" == typeof t ? t : l(+t), u) : n
                    }, u.y1 = function (t) {
                        return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : l(+t), u) : e
                    }, u.lineX0 = u.lineY0 = function () {
                        return h().x(t).y(n)
                    }, u.lineY1 = function () {
                        return h().x(t).y(e)
                    }, u.lineX1 = function () {
                        return h().x(r).y(n)
                    }, u.defined = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : l(!!t), u) : i
                    }, u.curve = function (t) {
                        return arguments.length ? (s = t, null != o && (a = s(o)), u) : s
                    }, u.context = function (t) {
                        return arguments.length ? (null == t ? o = a = null : a = s(o = t), u) : o
                    }, u
                }

                function U(t, n) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                }

                function j(t) {
                    return t
                }

                function R() {
                    var t = j,
                        n = U,
                        e = null,
                        r = l(0),
                        i = l(w),
                        o = l(0);

                    function s(s) {
                        var a, u, c, l, h, f = (s = I(s)).length,
                            p = 0,
                            d = new Array(f),
                            y = new Array(f),
                            m = +r.apply(this, arguments),
                            g = Math.min(w, Math.max(-w, i.apply(this, arguments) - m)),
                            _ = Math.min(Math.abs(g) / f, o.apply(this, arguments)),
                            v = _ * (g < 0 ? -1 : 1);
                        for (a = 0; a < f; ++a)(h = y[d[a] = a] = +t(s[a], a, s)) > 0 && (p += h);
                        for (null != n ? d.sort((function (t, e) {
                                return n(y[t], y[e])
                            })) : null != e && d.sort((function (t, n) {
                                return e(s[t], s[n])
                            })), a = 0, c = p ? (g - f * v) / p : 0; a < f; ++a, m = l) u = d[a], l = m + ((h = y[u]) > 0 ? h * c : 0) + v, y[u] = {
                            data: s[u],
                            index: a,
                            value: h,
                            startAngle: m,
                            endAngle: l,
                            padAngle: _
                        };
                        return y
                    }
                    return s.value = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : l(+n), s) : t
                    }, s.sortValues = function (t) {
                        return arguments.length ? (n = t, e = null, s) : n
                    }, s.sort = function (t) {
                        return arguments.length ? (e = t, n = null, s) : e
                    }, s.startAngle = function (t) {
                        return arguments.length ? (r = "function" == typeof t ? t : l(+t), s) : r
                    }, s.endAngle = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : l(+t), s) : i
                    }, s.padAngle = function (t) {
                        return arguments.length ? (o = "function" == typeof t ? t : l(+t), s) : o
                    }, s
                }
                C.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._point = 0
                    },
                    lineEnd: function () {
                        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                            default:
                                this._context.lineTo(t, n)
                        }
                    }
                };
                var z = $(Z);

                function q(t) {
                    this._curve = t
                }

                function $(t) {
                    function n(n) {
                        return new q(t(n))
                    }
                    return n._curve = t, n
                }

                function X(t) {
                    var n = t.curve;
                    return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
                        return arguments.length ? n($(t)) : n()._curve
                    }, t
                }

                function B() {
                    return X(Y().curve(z))
                }

                function V() {
                    var t = F().curve(z),
                        n = t.curve,
                        e = t.lineX0,
                        r = t.lineX1,
                        i = t.lineY0,
                        o = t.lineY1;
                    return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
                        return X(e())
                    }, delete t.lineX0, t.lineEndAngle = function () {
                        return X(r())
                    }, delete t.lineX1, t.lineInnerRadius = function () {
                        return X(i())
                    }, delete t.lineY0, t.lineOuterRadius = function () {
                        return X(o())
                    }, delete t.lineY1, t.curve = function (t) {
                        return arguments.length ? n($(t)) : n()._curve
                    }, t
                }

                function W(t, n) {
                    return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
                }
                q.prototype = {
                    areaStart: function () {
                        this._curve.areaStart()
                    },
                    areaEnd: function () {
                        this._curve.areaEnd()
                    },
                    lineStart: function () {
                        this._curve.lineStart()
                    },
                    lineEnd: function () {
                        this._curve.lineEnd()
                    },
                    point: function (t, n) {
                        this._curve.point(n * Math.sin(t), n * -Math.cos(t))
                    }
                };
                class G {
                    constructor(t, n) {
                        this._context = t, this._x = n
                    }
                    areaStart() {
                        this._line = 0
                    }
                    areaEnd() {
                        this._line = NaN
                    }
                    lineStart() {
                        this._point = 0
                    }
                    lineEnd() {
                        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    }
                    point(t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                            default:
                                this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, n, t, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, t, this._y0, t, n)
                        }
                        this._x0 = t, this._y0 = n
                    }
                }
                class J {
                    constructor(t) {
                        this._context = t
                    }
                    lineStart() {
                        this._point = 0
                    }
                    lineEnd() {}
                    point(t, n) {
                        if (t = +t, n = +n, 0 == this._point++) this._x0 = t, this._y0 = n;
                        else {
                            const e = W(this._x0, this._y0),
                                r = W(this._x0, this._y0 = (this._y0 + n) / 2),
                                i = W(t, this._y0),
                                o = W(t, n);
                            this._context.moveTo(...e), this._context.bezierCurveTo(...r, ...i, ...o)
                        }
                    }
                }

                function Q(t) {
                    return new G(t, !0)
                }

                function K(t) {
                    return new G(t, !1)
                }

                function tt(t) {
                    return new J(t)
                }

                function nt(t) {
                    return t.source
                }

                function et(t) {
                    return t.target
                }

                function rt(t) {
                    let n = nt,
                        e = et,
                        r = D,
                        i = H,
                        o = null,
                        s = null;

                    function a() {
                        let a;
                        const u = L.call(arguments),
                            l = n.apply(this, u),
                            h = e.apply(this, u);
                        if (null == o && (s = t(a = c())), s.lineStart(), u[0] = l, s.point(+r.apply(this, u), +i.apply(this, u)), u[0] = h, s.point(+r.apply(this, u), +i.apply(this, u)), s.lineEnd(), a) return s = null, a + "" || null
                    }
                    return a.source = function (t) {
                        return arguments.length ? (n = t, a) : n
                    }, a.target = function (t) {
                        return arguments.length ? (e = t, a) : e
                    }, a.x = function (t) {
                        return arguments.length ? (r = "function" == typeof t ? t : l(+t), a) : r
                    }, a.y = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : l(+t), a) : i
                    }, a.context = function (n) {
                        return arguments.length ? (null == n ? o = s = null : s = t(o = n), a) : o
                    }, a
                }

                function it() {
                    return rt(Q)
                }

                function ot() {
                    return rt(K)
                }

                function st() {
                    const t = rt(tt);
                    return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
                }
                const at = g(3),
                    ut = {
                        draw(t, n) {
                            const e = .59436 * g(n + y(n / 28, .75)),
                                r = e / 2,
                                i = r * at;
                            t.moveTo(0, e), t.lineTo(0, -e), t.moveTo(-i, -r), t.lineTo(i, r), t.moveTo(-i, r), t.lineTo(i, -r)
                        }
                    },
                    ct = {
                        draw(t, n) {
                            const e = g(n / v);
                            t.moveTo(e, 0), t.arc(0, 0, e, 0, w)
                        }
                    },
                    lt = {
                        draw(t, n) {
                            const e = g(n / 5) / 2;
                            t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
                        }
                    },
                    ht = g(1 / 3),
                    ft = 2 * ht,
                    pt = {
                        draw(t, n) {
                            const e = g(n / ft),
                                r = e * ht;
                            t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
                        }
                    },
                    dt = {
                        draw(t, n) {
                            const e = .62625 * g(n);
                            t.moveTo(0, -e), t.lineTo(e, 0), t.lineTo(0, e), t.lineTo(-e, 0), t.closePath()
                        }
                    },
                    yt = {
                        draw(t, n) {
                            const e = .87559 * g(n - y(n / 7, 2));
                            t.moveTo(-e, 0), t.lineTo(e, 0), t.moveTo(0, e), t.lineTo(0, -e)
                        }
                    },
                    mt = {
                        draw(t, n) {
                            const e = g(n),
                                r = -e / 2;
                            t.rect(r, r, e, e)
                        }
                    },
                    gt = {
                        draw(t, n) {
                            const e = .4431 * g(n);
                            t.moveTo(e, e), t.lineTo(e, -e), t.lineTo(-e, -e), t.lineTo(-e, e), t.closePath()
                        }
                    },
                    _t = m(v / 10) / m(7 * v / 10),
                    vt = m(w / 10) * _t,
                    xt = -p(w / 10) * _t,
                    wt = {
                        draw(t, n) {
                            const e = g(.8908130915292852 * n),
                                r = vt * e,
                                i = xt * e;
                            t.moveTo(0, -e), t.lineTo(r, i);
                            for (let n = 1; n < 5; ++n) {
                                const o = w * n / 5,
                                    s = p(o),
                                    a = m(o);
                                t.lineTo(a * e, -s * e), t.lineTo(s * r - a * i, a * r + s * i)
                            }
                            t.closePath()
                        }
                    },
                    bt = g(3),
                    Mt = {
                        draw(t, n) {
                            const e = -g(n / (3 * bt));
                            t.moveTo(0, 2 * e), t.lineTo(-bt * e, -e), t.lineTo(bt * e, -e), t.closePath()
                        }
                    },
                    Tt = g(3),
                    Et = {
                        draw(t, n) {
                            const e = .6824 * g(n),
                                r = e / 2,
                                i = e * Tt / 2;
                            t.moveTo(0, -e), t.lineTo(i, r), t.lineTo(-i, r), t.closePath()
                        }
                    },
                    kt = -.5,
                    Nt = g(3) / 2,
                    At = 1 / g(12),
                    St = 3 * (At / 2 + 1),
                    Pt = {
                        draw(t, n) {
                            const e = g(n / St),
                                r = e / 2,
                                i = e * At,
                                o = r,
                                s = e * At + e,
                                a = -o,
                                u = s;
                            t.moveTo(r, i), t.lineTo(o, s), t.lineTo(a, u), t.lineTo(kt * r - Nt * i, Nt * r + kt * i), t.lineTo(kt * o - Nt * s, Nt * o + kt * s), t.lineTo(kt * a - Nt * u, Nt * a + kt * u), t.lineTo(kt * r + Nt * i, kt * i - Nt * r), t.lineTo(kt * o + Nt * s, kt * s - Nt * o), t.lineTo(kt * a + Nt * u, kt * u - Nt * a), t.closePath()
                        }
                    },
                    Ot = {
                        draw(t, n) {
                            const e = .6189 * g(n - y(n / 6, 1.7));
                            t.moveTo(-e, -e), t.lineTo(e, e), t.moveTo(-e, e), t.lineTo(e, -e)
                        }
                    },
                    Lt = [ct, lt, pt, mt, wt, Mt, Pt],
                    It = [ct, yt, Ot, Et, ut, gt, dt];

                function Ct(t, n) {
                    let e = null;

                    function r() {
                        let r;
                        if (e || (e = r = c()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null
                    }
                    return t = "function" == typeof t ? t : l(t || ct), n = "function" == typeof n ? n : l(void 0 === n ? 64 : +n), r.type = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : l(n), r) : t
                    }, r.size = function (t) {
                        return arguments.length ? (n = "function" == typeof t ? t : l(+t), r) : n
                    }, r.context = function (t) {
                        return arguments.length ? (e = null == t ? null : t, r) : e
                    }, r
                }

                function Zt() {}

                function Dt(t, n, e) {
                    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
                }

                function Ht(t) {
                    this._context = t
                }

                function Yt(t) {
                    return new Ht(t)
                }

                function Ft(t) {
                    this._context = t
                }

                function Ut(t) {
                    return new Ft(t)
                }

                function jt(t) {
                    this._context = t
                }

                function Rt(t) {
                    return new jt(t)
                }

                function zt(t, n) {
                    this._basis = new Ht(t), this._beta = n
                }
                Ht.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 3:
                                Dt(this, this._x1, this._y1);
                            case 2:
                                this._context.lineTo(this._x1, this._y1)
                        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                            default:
                                Dt(this, t, n)
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                    }
                }, Ft.prototype = {
                    areaStart: Zt,
                    areaEnd: Zt,
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 1:
                                this._context.moveTo(this._x2, this._y2), this._context.closePath();
                                break;
                            case 2:
                                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                                break;
                            case 3:
                                this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                        }
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1, this._x2 = t, this._y2 = n;
                                break;
                            case 1:
                                this._point = 2, this._x3 = t, this._y3 = n;
                                break;
                            case 2:
                                this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                                break;
                            default:
                                Dt(this, t, n)
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                    }
                }, jt.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1;
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3;
                                var e = (this._x0 + 4 * this._x1 + t) / 6,
                                    r = (this._y0 + 4 * this._y1 + n) / 6;
                                this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                                break;
                            case 3:
                                this._point = 4;
                            default:
                                Dt(this, t, n)
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                    }
                }, zt.prototype = {
                    lineStart: function () {
                        this._x = [], this._y = [], this._basis.lineStart()
                    },
                    lineEnd: function () {
                        var t = this._x,
                            n = this._y,
                            e = t.length - 1;
                        if (e > 0)
                            for (var r, i = t[0], o = n[0], s = t[e] - i, a = n[e] - o, u = -1; ++u <= e;) r = u / e, this._basis.point(this._beta * t[u] + (1 - this._beta) * (i + r * s), this._beta * n[u] + (1 - this._beta) * (o + r * a));
                        this._x = this._y = null, this._basis.lineEnd()
                    },
                    point: function (t, n) {
                        this._x.push(+t), this._y.push(+n)
                    }
                };
                const qt = function t(n) {
                    function e(t) {
                        return 1 === n ? new Ht(t) : new zt(t, n)
                    }
                    return e.beta = function (n) {
                        return t(+n)
                    }, e
                }(.85);

                function $t(t, n, e) {
                    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
                }

                function Xt(t, n) {
                    this._context = t, this._k = (1 - n) / 6
                }
                Xt.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 2:
                                this._context.lineTo(this._x2, this._y2);
                                break;
                            case 3:
                                $t(this, this._x1, this._y1)
                        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2, this._x1 = t, this._y1 = n;
                                break;
                            case 2:
                                this._point = 3;
                            default:
                                $t(this, t, n)
                        }
                        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                };
                const Bt = function t(n) {
                    function e(t) {
                        return new Xt(t, n)
                    }
                    return e.tension = function (n) {
                        return t(+n)
                    }, e
                }(0);

                function Vt(t, n) {
                    this._context = t, this._k = (1 - n) / 6
                }
                Vt.prototype = {
                    areaStart: Zt,
                    areaEnd: Zt,
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 1:
                                this._context.moveTo(this._x3, this._y3), this._context.closePath();
                                break;
                            case 2:
                                this._context.lineTo(this._x3, this._y3), this._context.closePath();
                                break;
                            case 3:
                                this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                        }
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1, this._x3 = t, this._y3 = n;
                                break;
                            case 1:
                                this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                                break;
                            case 2:
                                this._point = 3, this._x5 = t, this._y5 = n;
                                break;
                            default:
                                $t(this, t, n)
                        }
                        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                };
                const Wt = function t(n) {
                    function e(t) {
                        return new Vt(t, n)
                    }
                    return e.tension = function (n) {
                        return t(+n)
                    }, e
                }(0);

                function Gt(t, n) {
                    this._context = t, this._k = (1 - n) / 6
                }
                Gt.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1;
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                                break;
                            case 3:
                                this._point = 4;
                            default:
                                $t(this, t, n)
                        }
                        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                };
                const Jt = function t(n) {
                    function e(t) {
                        return new Gt(t, n)
                    }
                    return e.tension = function (n) {
                        return t(+n)
                    }, e
                }(0);

                function Qt(t, n, e) {
                    var r = t._x1,
                        i = t._y1,
                        o = t._x2,
                        s = t._y2;
                    if (t._l01_a > _) {
                        var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                            u = 3 * t._l01_a * (t._l01_a + t._l12_a);
                        r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u
                    }
                    if (t._l23_a > _) {
                        var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                            l = 3 * t._l23_a * (t._l23_a + t._l12_a);
                        o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / l, s = (s * c + t._y1 * t._l23_2a - e * t._l12_2a) / l
                    }
                    t._context.bezierCurveTo(r, i, o, s, t._x2, t._y2)
                }

                function Kt(t, n) {
                    this._context = t, this._alpha = n
                }
                Kt.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 2:
                                this._context.lineTo(this._x2, this._y2);
                                break;
                            case 3:
                                this.point(this._x2, this._y2)
                        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        if (t = +t, n = +n, this._point) {
                            var e = this._x2 - t,
                                r = this._y2 - n;
                            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                        }
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3;
                            default:
                                Qt(this, t, n)
                        }
                        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                };
                const tn = function t(n) {
                    function e(t) {
                        return n ? new Kt(t, n) : new Xt(t, 0)
                    }
                    return e.alpha = function (n) {
                        return t(+n)
                    }, e
                }(.5);

                function nn(t, n) {
                    this._context = t, this._alpha = n
                }
                nn.prototype = {
                    areaStart: Zt,
                    areaEnd: Zt,
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 1:
                                this._context.moveTo(this._x3, this._y3), this._context.closePath();
                                break;
                            case 2:
                                this._context.lineTo(this._x3, this._y3), this._context.closePath();
                                break;
                            case 3:
                                this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                        }
                    },
                    point: function (t, n) {
                        if (t = +t, n = +n, this._point) {
                            var e = this._x2 - t,
                                r = this._y2 - n;
                            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                        }
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._x3 = t, this._y3 = n;
                                break;
                            case 1:
                                this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                                break;
                            case 2:
                                this._point = 3, this._x5 = t, this._y5 = n;
                                break;
                            default:
                                Qt(this, t, n)
                        }
                        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                };
                const en = function t(n) {
                    function e(t) {
                        return n ? new nn(t, n) : new Vt(t, 0)
                    }
                    return e.alpha = function (n) {
                        return t(+n)
                    }, e
                }(.5);

                function rn(t, n) {
                    this._context = t, this._alpha = n
                }
                rn.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                    },
                    lineEnd: function () {
                        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        if (t = +t, n = +n, this._point) {
                            var e = this._x2 - t,
                                r = this._y2 - n;
                            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                        }
                        switch (this._point) {
                            case 0:
                                this._point = 1;
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                                break;
                            case 3:
                                this._point = 4;
                            default:
                                Qt(this, t, n)
                        }
                        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                    }
                };
                const on = function t(n) {
                    function e(t) {
                        return n ? new rn(t, n) : new Gt(t, 0)
                    }
                    return e.alpha = function (n) {
                        return t(+n)
                    }, e
                }(.5);

                function sn(t) {
                    this._context = t
                }

                function an(t) {
                    return new sn(t)
                }

                function un(t) {
                    return t < 0 ? -1 : 1
                }

                function cn(t, n, e) {
                    var r = t._x1 - t._x0,
                        i = n - t._x1,
                        o = (t._y1 - t._y0) / (r || i < 0 && -0),
                        s = (e - t._y1) / (i || r < 0 && -0),
                        a = (o * i + s * r) / (r + i);
                    return (un(o) + un(s)) * Math.min(Math.abs(o), Math.abs(s), .5 * Math.abs(a)) || 0
                }

                function ln(t, n) {
                    var e = t._x1 - t._x0;
                    return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
                }

                function hn(t, n, e) {
                    var r = t._x0,
                        i = t._y0,
                        o = t._x1,
                        s = t._y1,
                        a = (o - r) / 3;
                    t._context.bezierCurveTo(r + a, i + a * n, o - a, s - a * e, o, s)
                }

                function fn(t) {
                    this._context = t
                }

                function pn(t) {
                    this._context = new dn(t)
                }

                function dn(t) {
                    this._context = t
                }

                function yn(t) {
                    return new fn(t)
                }

                function mn(t) {
                    return new pn(t)
                }

                function gn(t) {
                    this._context = t
                }

                function _n(t) {
                    var n, e, r = t.length - 1,
                        i = new Array(r),
                        o = new Array(r),
                        s = new Array(r);
                    for (i[0] = 0, o[0] = 2, s[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, s[n] = 4 * t[n] + 2 * t[n + 1];
                    for (i[r - 1] = 2, o[r - 1] = 7, s[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, s[n] -= e * s[n - 1];
                    for (i[r - 1] = s[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (s[n] - i[n + 1]) / o[n];
                    for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
                    return [i, o]
                }

                function vn(t) {
                    return new gn(t)
                }

                function xn(t, n) {
                    this._context = t, this._t = n
                }

                function wn(t) {
                    return new xn(t, .5)
                }

                function bn(t) {
                    return new xn(t, 0)
                }

                function Mn(t) {
                    return new xn(t, 1)
                }

                function Tn(t, n) {
                    if ((i = t.length) > 1)
                        for (var e, r, i, o = 1, s = t[n[0]], a = s.length; o < i; ++o)
                            for (r = s, s = t[n[o]], e = 0; e < a; ++e) s[e][1] += s[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
                }

                function En(t) {
                    for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
                    return e
                }

                function kn(t, n) {
                    return t[n]
                }

                function Nn(t) {
                    const n = [];
                    return n.key = t, n
                }

                function An() {
                    var t = l([]),
                        n = En,
                        e = Tn,
                        r = kn;

                    function i(i) {
                        var o, s, a = Array.from(t.apply(this, arguments), Nn),
                            u = a.length,
                            c = -1;
                        for (const t of i)
                            for (o = 0, ++c; o < u; ++o)(a[o][c] = [0, +r(t, a[o].key, c, i)]).data = t;
                        for (o = 0, s = I(n(a)); o < u; ++o) a[s[o]].index = o;
                        return e(a, s), a
                    }
                    return i.keys = function (n) {
                        return arguments.length ? (t = "function" == typeof n ? n : l(Array.from(n)), i) : t
                    }, i.value = function (t) {
                        return arguments.length ? (r = "function" == typeof t ? t : l(+t), i) : r
                    }, i.order = function (t) {
                        return arguments.length ? (n = null == t ? En : "function" == typeof t ? t : l(Array.from(t)), i) : n
                    }, i.offset = function (t) {
                        return arguments.length ? (e = null == t ? Tn : t, i) : e
                    }, i
                }

                function Sn(t, n) {
                    if ((r = t.length) > 0) {
                        for (var e, r, i, o = 0, s = t[0].length; o < s; ++o) {
                            for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
                            if (i)
                                for (e = 0; e < r; ++e) t[e][o][1] /= i
                        }
                        Tn(t, n)
                    }
                }

                function Pn(t, n) {
                    if ((a = t.length) > 0)
                        for (var e, r, i, o, s, a, u = 0, c = t[n[0]].length; u < c; ++u)
                            for (o = s = 0, e = 0; e < a; ++e)(i = (r = t[n[e]][u])[1] - r[0]) > 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = s, r[0] = s += i) : (r[0] = 0, r[1] = i)
                }

                function On(t, n) {
                    if ((e = t.length) > 0) {
                        for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                            for (var s = 0, a = 0; s < e; ++s) a += t[s][r][1] || 0;
                            i[r][1] += i[r][0] = -a / 2
                        }
                        Tn(t, n)
                    }
                }

                function Ln(t, n) {
                    if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                        for (var e, r, i, o = 0, s = 1; s < r; ++s) {
                            for (var a = 0, u = 0, c = 0; a < i; ++a) {
                                for (var l = t[n[a]], h = l[s][1] || 0, f = (h - (l[s - 1][1] || 0)) / 2, p = 0; p < a; ++p) {
                                    var d = t[n[p]];
                                    f += (d[s][1] || 0) - (d[s - 1][1] || 0)
                                }
                                u += h, c += f * h
                            }
                            e[s - 1][1] += e[s - 1][0] = o, u && (o -= c / u)
                        }
                        e[s - 1][1] += e[s - 1][0] = o, Tn(t, n)
                    }
                }

                function In(t) {
                    var n = t.map(Cn);
                    return En(t).sort((function (t, e) {
                        return n[t] - n[e]
                    }))
                }

                function Cn(t) {
                    for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i;)(n = +t[e][1]) > o && (o = n, r = e);
                    return r
                }

                function Zn(t) {
                    var n = t.map(Dn);
                    return En(t).sort((function (t, e) {
                        return n[t] - n[e]
                    }))
                }

                function Dn(t) {
                    for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
                    return e
                }

                function Hn(t) {
                    return Zn(t).reverse()
                }

                function Yn(t) {
                    var n, e, r = t.length,
                        i = t.map(Dn),
                        o = In(t),
                        s = 0,
                        a = 0,
                        u = [],
                        c = [];
                    for (n = 0; n < r; ++n) e = o[n], s < a ? (s += i[e], u.push(e)) : (a += i[e], c.push(e));
                    return c.reverse().concat(u)
                }

                function Fn(t) {
                    return En(t).reverse()
                }
                sn.prototype = {
                    areaStart: Zt,
                    areaEnd: Zt,
                    lineStart: function () {
                        this._point = 0
                    },
                    lineEnd: function () {
                        this._point && this._context.closePath()
                    },
                    point: function (t, n) {
                        t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
                    }
                }, fn.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        switch (this._point) {
                            case 2:
                                this._context.lineTo(this._x1, this._y1);
                                break;
                            case 3:
                                hn(this, this._t0, ln(this, this._t0))
                        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                    },
                    point: function (t, n) {
                        var e = NaN;
                        if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                            switch (this._point) {
                                case 0:
                                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                    break;
                                case 1:
                                    this._point = 2;
                                    break;
                                case 2:
                                    this._point = 3, hn(this, ln(this, e = cn(this, t, n)), e);
                                    break;
                                default:
                                    hn(this, this._t0, e = cn(this, t, n))
                            }
                            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                        }
                    }
                }, (pn.prototype = Object.create(fn.prototype)).point = function (t, n) {
                    fn.prototype.point.call(this, n, t)
                }, dn.prototype = {
                    moveTo: function (t, n) {
                        this._context.moveTo(n, t)
                    },
                    closePath: function () {
                        this._context.closePath()
                    },
                    lineTo: function (t, n) {
                        this._context.lineTo(n, t)
                    },
                    bezierCurveTo: function (t, n, e, r, i, o) {
                        this._context.bezierCurveTo(n, t, r, e, o, i)
                    }
                }, gn.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x = [], this._y = []
                    },
                    lineEnd: function () {
                        var t = this._x,
                            n = this._y,
                            e = t.length;
                        if (e)
                            if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                            else
                                for (var r = _n(t), i = _n(n), o = 0, s = 1; s < e; ++o, ++s) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[s], n[s]);
                        (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
                    },
                    point: function (t, n) {
                        this._x.push(+t), this._y.push(+n)
                    }
                }, xn.prototype = {
                    areaStart: function () {
                        this._line = 0
                    },
                    areaEnd: function () {
                        this._line = NaN
                    },
                    lineStart: function () {
                        this._x = this._y = NaN, this._point = 0
                    },
                    lineEnd: function () {
                        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
                    },
                    point: function (t, n) {
                        switch (t = +t, n = +n, this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                            default:
                                if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                                else {
                                    var e = this._x * (1 - this._t) + t * this._t;
                                    this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                                }
                        }
                        this._x = t, this._y = n
                    }
                }
            },
            657: (t, n, e) => {
                "use strict";
                e.r(n), e.d(n, {
                    ZoomTransform: () => Le,
                    zoom: () => ze,
                    zoomIdentity: () => Ie,
                    zoomTransform: () => Ce
                });
                var r = {
                    value: () => {}
                };

                function i() {
                    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                        if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
                        r[t] = []
                    }
                    return new o(r)
                }

                function o(t) {
                    this._ = t
                }

                function s(t, n) {
                    return t.trim().split(/^|\s+/).map((function (t) {
                        var e = "",
                            r = t.indexOf(".");
                        if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                        return {
                            type: t,
                            name: e
                        }
                    }))
                }

                function a(t, n) {
                    for (var e, r = 0, i = t.length; r < i; ++r)
                        if ((e = t[r]).name === n) return e.value
                }

                function u(t, n, e) {
                    for (var i = 0, o = t.length; i < o; ++i)
                        if (t[i].name === n) {
                            t[i] = r, t = t.slice(0, i).concat(t.slice(i + 1));
                            break
                        } return null != e && t.push({
                        name: n,
                        value: e
                    }), t
                }
                o.prototype = i.prototype = {
                    constructor: o,
                    on: function (t, n) {
                        var e, r = this._,
                            i = s(t + "", r),
                            o = -1,
                            c = i.length;
                        if (!(arguments.length < 2)) {
                            if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                            for (; ++o < c;)
                                if (e = (t = i[o]).type) r[e] = u(r[e], t.name, n);
                                else if (null == n)
                                for (e in r) r[e] = u(r[e], t.name, null);
                            return this
                        }
                        for (; ++o < c;)
                            if ((e = (t = i[o]).type) && (e = a(r[e], t.name))) return e
                    },
                    copy: function () {
                        var t = {},
                            n = this._;
                        for (var e in n) t[e] = n[e].slice();
                        return new o(t)
                    },
                    call: function (t, n) {
                        if ((e = arguments.length - 2) > 0)
                            for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
                        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                        for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
                    },
                    apply: function (t, n, e) {
                        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                        for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
                    }
                };
                const c = i;

                function l() {}

                function h(t) {
                    return null == t ? l : function () {
                        return this.querySelector(t)
                    }
                }

                function f(t) {
                    return "object" == typeof t && "length" in t ? t : Array.from(t)
                }

                function p() {
                    return []
                }

                function d(t) {
                    return function (n) {
                        return n.matches(t)
                    }
                }
                var y = Array.prototype.find;

                function m() {
                    return this.firstElementChild
                }
                var g = Array.prototype.filter;

                function _() {
                    return this.children
                }

                function v(t) {
                    return new Array(t.length)
                }

                function x(t, n) {
                    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
                }

                function w(t) {
                    return function () {
                        return t
                    }
                }

                function b(t, n, e, r, i, o) {
                    for (var s, a = 0, u = n.length, c = o.length; a < c; ++a)(s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new x(t, o[a]);
                    for (; a < u; ++a)(s = n[a]) && (i[a] = s)
                }

                function M(t, n, e, r, i, o, s) {
                    var a, u, c, l = new Map,
                        h = n.length,
                        f = o.length,
                        p = new Array(h);
                    for (a = 0; a < h; ++a)(u = n[a]) && (p[a] = c = s.call(u, u.__data__, a, n) + "", l.has(c) ? i[a] = u : l.set(c, u));
                    for (a = 0; a < f; ++a) c = s.call(t, o[a], a, o) + "", (u = l.get(c)) ? (r[a] = u, u.__data__ = o[a], l.delete(c)) : e[a] = new x(t, o[a]);
                    for (a = 0; a < h; ++a)(u = n[a]) && l.get(p[a]) === u && (i[a] = u)
                }

                function T(t) {
                    return t.__data__
                }

                function E(t, n) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                }
                x.prototype = {
                    constructor: x,
                    appendChild: function (t) {
                        return this._parent.insertBefore(t, this._next)
                    },
                    insertBefore: function (t, n) {
                        return this._parent.insertBefore(t, n)
                    },
                    querySelector: function (t) {
                        return this._parent.querySelector(t)
                    },
                    querySelectorAll: function (t) {
                        return this._parent.querySelectorAll(t)
                    }
                };
                var k = "http://www.w3.org/1999/xhtml";
                const N = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: k,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                };

                function A(t) {
                    var n = t += "",
                        e = n.indexOf(":");
                    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), N.hasOwnProperty(n) ? {
                        space: N[n],
                        local: t
                    } : t
                }

                function S(t) {
                    return function () {
                        this.removeAttribute(t)
                    }
                }

                function P(t) {
                    return function () {
                        this.removeAttributeNS(t.space, t.local)
                    }
                }

                function O(t, n) {
                    return function () {
                        this.setAttribute(t, n)
                    }
                }

                function L(t, n) {
                    return function () {
                        this.setAttributeNS(t.space, t.local, n)
                    }
                }

                function I(t, n) {
                    return function () {
                        var e = n.apply(this, arguments);
                        null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                    }
                }

                function C(t, n) {
                    return function () {
                        var e = n.apply(this, arguments);
                        null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                    }
                }

                function Z(t) {
                    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
                }

                function D(t) {
                    return function () {
                        this.style.removeProperty(t)
                    }
                }

                function H(t, n, e) {
                    return function () {
                        this.style.setProperty(t, n, e)
                    }
                }

                function Y(t, n, e) {
                    return function () {
                        var r = n.apply(this, arguments);
                        null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                    }
                }

                function F(t, n) {
                    return t.style.getPropertyValue(n) || Z(t).getComputedStyle(t, null).getPropertyValue(n)
                }

                function U(t) {
                    return function () {
                        delete this[t]
                    }
                }

                function j(t, n) {
                    return function () {
                        this[t] = n
                    }
                }

                function R(t, n) {
                    return function () {
                        var e = n.apply(this, arguments);
                        null == e ? delete this[t] : this[t] = e
                    }
                }

                function z(t) {
                    return t.trim().split(/^|\s+/)
                }

                function q(t) {
                    return t.classList || new $(t)
                }

                function $(t) {
                    this._node = t, this._names = z(t.getAttribute("class") || "")
                }

                function X(t, n) {
                    for (var e = q(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
                }

                function B(t, n) {
                    for (var e = q(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
                }

                function V(t) {
                    return function () {
                        X(this, t)
                    }
                }

                function W(t) {
                    return function () {
                        B(this, t)
                    }
                }

                function G(t, n) {
                    return function () {
                        (n.apply(this, arguments) ? X : B)(this, t)
                    }
                }

                function J() {
                    this.textContent = ""
                }

                function Q(t) {
                    return function () {
                        this.textContent = t
                    }
                }

                function K(t) {
                    return function () {
                        var n = t.apply(this, arguments);
                        this.textContent = null == n ? "" : n
                    }
                }

                function tt() {
                    this.innerHTML = ""
                }

                function nt(t) {
                    return function () {
                        this.innerHTML = t
                    }
                }

                function et(t) {
                    return function () {
                        var n = t.apply(this, arguments);
                        this.innerHTML = null == n ? "" : n
                    }
                }

                function rt() {
                    this.nextSibling && this.parentNode.appendChild(this)
                }

                function it() {
                    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
                }

                function ot(t) {
                    return function () {
                        var n = this.ownerDocument,
                            e = this.namespaceURI;
                        return e === k && n.documentElement.namespaceURI === k ? n.createElement(t) : n.createElementNS(e, t)
                    }
                }

                function st(t) {
                    return function () {
                        return this.ownerDocument.createElementNS(t.space, t.local)
                    }
                }

                function at(t) {
                    var n = A(t);
                    return (n.local ? st : ot)(n)
                }

                function ut() {
                    return null
                }

                function ct() {
                    var t = this.parentNode;
                    t && t.removeChild(this)
                }

                function lt() {
                    var t = this.cloneNode(!1),
                        n = this.parentNode;
                    return n ? n.insertBefore(t, this.nextSibling) : t
                }

                function ht() {
                    var t = this.cloneNode(!0),
                        n = this.parentNode;
                    return n ? n.insertBefore(t, this.nextSibling) : t
                }

                function ft(t) {
                    return t.trim().split(/^|\s+/).map((function (t) {
                        var n = "",
                            e = t.indexOf(".");
                        return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                            type: t,
                            name: n
                        }
                    }))
                }

                function pt(t) {
                    return function () {
                        var n = this.__on;
                        if (n) {
                            for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);
                            ++i ? n.length = i : delete this.__on
                        }
                    }
                }

                function dt(t, n, e) {
                    return function () {
                        var r, i = this.__on,
                            o = function (t) {
                                return function (n) {
                                    t.call(this, n, this.__data__)
                                }
                            }(n);
                        if (i)
                            for (var s = 0, a = i.length; s < a; ++s)
                                if ((r = i[s]).type === t.type && r.name === t.name) return this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = o, r.options = e), void(r.value = n);
                        this.addEventListener(t.type, o, e), r = {
                            type: t.type,
                            name: t.name,
                            value: n,
                            listener: o,
                            options: e
                        }, i ? i.push(r) : this.__on = [r]
                    }
                }

                function yt(t, n, e) {
                    var r = Z(t),
                        i = r.CustomEvent;
                    "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
                }

                function mt(t, n) {
                    return function () {
                        return yt(this, t, n)
                    }
                }

                function gt(t, n) {
                    return function () {
                        return yt(this, t, n.apply(this, arguments))
                    }
                }
                $.prototype = {
                    add: function (t) {
                        this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                    },
                    remove: function (t) {
                        var n = this._names.indexOf(t);
                        n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
                    },
                    contains: function (t) {
                        return this._names.indexOf(t) >= 0
                    }
                };
                var _t = [null];

                function vt(t, n) {
                    this._groups = t, this._parents = n
                }

                function xt(t) {
                    return "string" == typeof t ? new vt([
                        [document.querySelector(t)]
                    ], [document.documentElement]) : new vt([
                        [t]
                    ], _t)
                }

                function wt(t) {
                    t.preventDefault(), t.stopImmediatePropagation()
                }

                function bt(t) {
                    var n = t.document.documentElement,
                        e = xt(t).on("dragstart.drag", wt, !0);
                    "onselectstart" in n ? e.on("selectstart.drag", wt, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
                }

                function Mt(t, n) {
                    var e = t.document.documentElement,
                        r = xt(t).on("dragstart.drag", null);
                    n && (r.on("click.drag", wt, !0), setTimeout((function () {
                        r.on("click.drag", null)
                    }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
                }
                vt.prototype = function () {
                    return new vt([
                        [document.documentElement]
                    ], _t)
                }.prototype = {
                    constructor: vt,
                    select: function (t) {
                        "function" != typeof t && (t = h(t));
                        for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                            for (var o, s, a = n[i], u = a.length, c = r[i] = new Array(u), l = 0; l < u; ++l)(o = a[l]) && (s = t.call(o, o.__data__, l, a)) && ("__data__" in o && (s.__data__ = o.__data__), c[l] = s);
                        return new vt(r, this._parents)
                    },
                    selectAll: function (t) {
                        t = "function" == typeof t ? function (t) {
                            return function () {
                                var n = t.apply(this, arguments);
                                return null == n ? [] : f(n)
                            }
                        }(t) : function (t) {
                            return null == t ? p : function () {
                                return this.querySelectorAll(t)
                            }
                        }(t);
                        for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                            for (var s, a = n[o], u = a.length, c = 0; c < u; ++c)(s = a[c]) && (r.push(t.call(s, s.__data__, c, a)), i.push(s));
                        return new vt(r, i)
                    },
                    selectChild: function (t) {
                        return this.select(null == t ? m : function (t) {
                            return function () {
                                return y.call(this.children, t)
                            }
                        }("function" == typeof t ? t : d(t)))
                    },
                    selectChildren: function (t) {
                        return this.selectAll(null == t ? _ : function (t) {
                            return function () {
                                return g.call(this.children, t)
                            }
                        }("function" == typeof t ? t : d(t)))
                    },
                    filter: function (t) {
                        "function" != typeof t && (t = function (t) {
                            return function () {
                                return this.matches(t)
                            }
                        }(t));
                        for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                            for (var o, s = n[i], a = s.length, u = r[i] = [], c = 0; c < a; ++c)(o = s[c]) && t.call(o, o.__data__, c, s) && u.push(o);
                        return new vt(r, this._parents)
                    },
                    data: function (t, n) {
                        if (!arguments.length) return Array.from(this, T);
                        var e = n ? M : b,
                            r = this._parents,
                            i = this._groups;
                        "function" != typeof t && (t = w(t));
                        for (var o = i.length, s = new Array(o), a = new Array(o), u = new Array(o), c = 0; c < o; ++c) {
                            var l = r[c],
                                h = i[c],
                                p = h.length,
                                d = f(t.call(l, l && l.__data__, c, r)),
                                y = d.length,
                                m = a[c] = new Array(y),
                                g = s[c] = new Array(y),
                                _ = u[c] = new Array(p);
                            e(l, h, m, g, _, d, n);
                            for (var v, x, E = 0, k = 0; E < y; ++E)
                                if (v = m[E]) {
                                    for (E >= k && (k = E + 1); !(x = g[k]) && ++k < y;);
                                    v._next = x || null
                                }
                        }
                        return (s = new vt(s, r))._enter = a, s._exit = u, s
                    },
                    enter: function () {
                        return new vt(this._enter || this._groups.map(v), this._parents)
                    },
                    exit: function () {
                        return new vt(this._exit || this._groups.map(v), this._parents)
                    },
                    join: function (t, n, e) {
                        var r = this.enter(),
                            i = this,
                            o = this.exit();
                        return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
                    },
                    merge: function (t) {
                        if (!(t instanceof vt)) throw new Error("invalid merge");
                        for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
                            for (var u, c = n[a], l = e[a], h = c.length, f = s[a] = new Array(h), p = 0; p < h; ++p)(u = c[p] || l[p]) && (f[p] = u);
                        for (; a < r; ++a) s[a] = n[a];
                        return new vt(s, this._parents)
                    },
                    selection: function () {
                        return this
                    },
                    order: function () {
                        for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                            for (var r, i = t[n], o = i.length - 1, s = i[o]; --o >= 0;)(r = i[o]) && (s && 4 ^ r.compareDocumentPosition(s) && s.parentNode.insertBefore(r, s), s = r);
                        return this
                    },
                    sort: function (t) {
                        function n(n, e) {
                            return n && e ? t(n.__data__, e.__data__) : !n - !e
                        }
                        t || (t = E);
                        for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                            for (var s, a = e[o], u = a.length, c = i[o] = new Array(u), l = 0; l < u; ++l)(s = a[l]) && (c[l] = s);
                            c.sort(n)
                        }
                        return new vt(i, this._parents).order()
                    },
                    call: function () {
                        var t = arguments[0];
                        return arguments[0] = this, t.apply(null, arguments), this
                    },
                    nodes: function () {
                        return Array.from(this)
                    },
                    node: function () {
                        for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                            for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                                var s = r[i];
                                if (s) return s
                            }
                        return null
                    },
                    size: function () {
                        let t = 0;
                        for (const n of this) ++t;
                        return t
                    },
                    empty: function () {
                        return !this.node()
                    },
                    each: function (t) {
                        for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                            for (var i, o = n[e], s = 0, a = o.length; s < a; ++s)(i = o[s]) && t.call(i, i.__data__, s, o);
                        return this
                    },
                    attr: function (t, n) {
                        var e = A(t);
                        if (arguments.length < 2) {
                            var r = this.node();
                            return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                        }
                        return this.each((null == n ? e.local ? P : S : "function" == typeof n ? e.local ? C : I : e.local ? L : O)(e, n))
                    },
                    style: function (t, n, e) {
                        return arguments.length > 1 ? this.each((null == n ? D : "function" == typeof n ? Y : H)(t, n, null == e ? "" : e)) : F(this.node(), t)
                    },
                    property: function (t, n) {
                        return arguments.length > 1 ? this.each((null == n ? U : "function" == typeof n ? R : j)(t, n)) : this.node()[t]
                    },
                    classed: function (t, n) {
                        var e = z(t + "");
                        if (arguments.length < 2) {
                            for (var r = q(this.node()), i = -1, o = e.length; ++i < o;)
                                if (!r.contains(e[i])) return !1;
                            return !0
                        }
                        return this.each(("function" == typeof n ? G : n ? V : W)(e, n))
                    },
                    text: function (t) {
                        return arguments.length ? this.each(null == t ? J : ("function" == typeof t ? K : Q)(t)) : this.node().textContent
                    },
                    html: function (t) {
                        return arguments.length ? this.each(null == t ? tt : ("function" == typeof t ? et : nt)(t)) : this.node().innerHTML
                    },
                    raise: function () {
                        return this.each(rt)
                    },
                    lower: function () {
                        return this.each(it)
                    },
                    append: function (t) {
                        var n = "function" == typeof t ? t : at(t);
                        return this.select((function () {
                            return this.appendChild(n.apply(this, arguments))
                        }))
                    },
                    insert: function (t, n) {
                        var e = "function" == typeof t ? t : at(t),
                            r = null == n ? ut : "function" == typeof n ? n : h(n);
                        return this.select((function () {
                            return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                        }))
                    },
                    remove: function () {
                        return this.each(ct)
                    },
                    clone: function (t) {
                        return this.select(t ? ht : lt)
                    },
                    datum: function (t) {
                        return arguments.length ? this.property("__data__", t) : this.node().__data__
                    },
                    on: function (t, n, e) {
                        var r, i, o = ft(t + ""),
                            s = o.length;
                        if (!(arguments.length < 2)) {
                            for (a = n ? dt : pt, r = 0; r < s; ++r) this.each(a(o[r], n, e));
                            return this
                        }
                        var a = this.node().__on;
                        if (a)
                            for (var u, c = 0, l = a.length; c < l; ++c)
                                for (r = 0, u = a[c]; r < s; ++r)
                                    if ((i = o[r]).type === u.type && i.name === u.name) return u.value
                    },
                    dispatch: function (t, n) {
                        return this.each(("function" == typeof n ? gt : mt)(t, n))
                    },
                    [Symbol.iterator]: function* () {
                        for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                            for (var r, i = t[n], o = 0, s = i.length; o < s; ++o)(r = i[o]) && (yield r)
                    }
                };
                var Tt, Et, kt = e(8167),
                    Nt = e(3838),
                    At = e(3109),
                    St = e(6740),
                    Pt = 0,
                    Ot = 0,
                    Lt = 0,
                    It = 0,
                    Ct = 0,
                    Zt = 0,
                    Dt = "object" == typeof performance && performance.now ? performance : Date,
                    Ht = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
                        setTimeout(t, 17)
                    };

                function Yt() {
                    return Ct || (Ht(Ft), Ct = Dt.now() + Zt)
                }

                function Ft() {
                    Ct = 0
                }

                function Ut() {
                    this._call = this._time = this._next = null
                }

                function jt(t, n, e) {
                    var r = new Ut;
                    return r.restart(t, n, e), r
                }

                function Rt() {
                    Ct = (It = Dt.now()) + Zt, Pt = Ot = 0;
                    try {
                        ! function () {
                            Yt(), ++Pt;
                            for (var t, n = Tt; n;)(t = Ct - n._time) >= 0 && n._call.call(null, t), n = n._next;
                            --Pt
                        }()
                    } finally {
                        Pt = 0,
                            function () {
                                for (var t, n, e = Tt, r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Tt = n);
                                Et = t, qt(r)
                            }(), Ct = 0
                    }
                }

                function zt() {
                    var t = Dt.now(),
                        n = t - It;
                    n > 1e3 && (Zt -= n, It = t)
                }

                function qt(t) {
                    Pt || (Ot && (Ot = clearTimeout(Ot)), t - Ct > 24 ? (t < 1 / 0 && (Ot = setTimeout(Rt, t - Dt.now() - Zt)), Lt && (Lt = clearInterval(Lt))) : (Lt || (It = Dt.now(), Lt = setInterval(zt, 1e3)), Pt = 1, Ht(Rt)))
                }

                function $t(t, n, e) {
                    var r = new Ut;
                    return n = null == n ? 0 : +n, r.restart((e => {
                        r.stop(), t(e + n)
                    }), n, e), r
                }
                Ut.prototype = jt.prototype = {
                    constructor: Ut,
                    restart: function (t, n, e) {
                        if ("function" != typeof t) throw new TypeError("callback is not a function");
                        e = (null == e ? Yt() : +e) + (null == n ? 0 : +n), this._next || Et === this || (Et ? Et._next = this : Tt = this, Et = this), this._call = t, this._time = e, qt()
                    },
                    stop: function () {
                        this._call && (this._call = null, this._time = 1 / 0, qt())
                    }
                };
                var Xt = c("start", "end", "cancel", "interrupt"),
                    Bt = [];

                function Vt(t, n, e, r, i, o) {
                    var s = t.__transition;
                    if (s) {
                        if (e in s) return
                    } else t.__transition = {};
                    ! function (t, n, e) {
                        var r, i = t.__transition;

                        function o(u) {
                            var c, l, h, f;
                            if (1 !== e.state) return a();
                            for (c in i)
                                if ((f = i[c]).name === e.name) {
                                    if (3 === f.state) return $t(o);
                                    4 === f.state ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete i[c]) : +c < n && (f.state = 6, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete i[c])
                                } if ($t((function () {
                                    3 === e.state && (e.state = 4, e.timer.restart(s, e.delay, e.time), s(u))
                                })), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
                                for (e.state = 3, r = new Array(h = e.tween.length), c = 0, l = -1; c < h; ++c)(f = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (r[++l] = f);
                                r.length = l + 1
                            }
                        }

                        function s(n) {
                            for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = 5, 1), o = -1, s = r.length; ++o < s;) r[o].call(t, i);
                            5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), a())
                        }

                        function a() {
                            for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;
                            delete t.__transition
                        }
                        i[n] = e, e.timer = jt((function (t) {
                            e.state = 1, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay)
                        }), 0, e.time)
                    }(t, e, {
                        name: n,
                        index: r,
                        group: i,
                        on: Xt,
                        tween: Bt,
                        time: o.time,
                        delay: o.delay,
                        duration: o.duration,
                        ease: o.ease,
                        timer: null,
                        state: 0
                    })
                }

                function Wt(t, n) {
                    var e = Jt(t, n);
                    if (e.state > 0) throw new Error("too late; already scheduled");
                    return e
                }

                function Gt(t, n) {
                    var e = Jt(t, n);
                    if (e.state > 3) throw new Error("too late; already running");
                    return e
                }

                function Jt(t, n) {
                    var e = t.__transition;
                    if (!e || !(e = e[n])) throw new Error("transition not found");
                    return e
                }

                function Qt(t, n) {
                    var e, r, i, o = t.__transition,
                        s = !0;
                    if (o) {
                        for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : s = !1;
                        s && delete t.__transition
                    }
                }

                function Kt(t, n) {
                    return t = +t, n = +n,
                        function (e) {
                            return t * (1 - e) + n * e
                        }
                }
                var tn, nn = 180 / Math.PI,
                    en = {
                        translateX: 0,
                        translateY: 0,
                        rotate: 0,
                        skewX: 0,
                        scaleX: 1,
                        scaleY: 1
                    };

                function rn(t, n, e, r, i, o) {
                    var s, a, u;
                    return (s = Math.sqrt(t * t + n * n)) && (t /= s, n /= s), (u = t * e + n * r) && (e -= t * u, r -= n * u), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, u /= a), t * r < n * e && (t = -t, n = -n, u = -u, s = -s), {
                        translateX: i,
                        translateY: o,
                        rotate: Math.atan2(n, t) * nn,
                        skewX: Math.atan(u) * nn,
                        scaleX: s,
                        scaleY: a
                    }
                }

                function on(t, n, e, r) {
                    function i(t) {
                        return t.length ? t.pop() + " " : ""
                    }
                    return function (o, s) {
                        var a = [],
                            u = [];
                        return o = t(o), s = t(s),
                            function (t, r, i, o, s, a) {
                                if (t !== i || r !== o) {
                                    var u = s.push("translate(", null, n, null, e);
                                    a.push({
                                        i: u - 4,
                                        x: Kt(t, i)
                                    }, {
                                        i: u - 2,
                                        x: Kt(r, o)
                                    })
                                } else(i || o) && s.push("translate(" + i + n + o + e)
                            }(o.translateX, o.translateY, s.translateX, s.translateY, a, u),
                            function (t, n, e, o) {
                                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                                    i: e.push(i(e) + "rotate(", null, r) - 2,
                                    x: Kt(t, n)
                                })) : n && e.push(i(e) + "rotate(" + n + r)
                            }(o.rotate, s.rotate, a, u),
                            function (t, n, e, o) {
                                t !== n ? o.push({
                                    i: e.push(i(e) + "skewX(", null, r) - 2,
                                    x: Kt(t, n)
                                }) : n && e.push(i(e) + "skewX(" + n + r)
                            }(o.skewX, s.skewX, a, u),
                            function (t, n, e, r, o, s) {
                                if (t !== e || n !== r) {
                                    var a = o.push(i(o) + "scale(", null, ",", null, ")");
                                    s.push({
                                        i: a - 4,
                                        x: Kt(t, e)
                                    }, {
                                        i: a - 2,
                                        x: Kt(n, r)
                                    })
                                } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
                            }(o.scaleX, o.scaleY, s.scaleX, s.scaleY, a, u), o = s = null,
                            function (t) {
                                for (var n, e = -1, r = u.length; ++e < r;) a[(n = u[e]).i] = n.x(t);
                                return a.join("")
                            }
                    }
                }
                var sn = on((function (t) {
                        const n = new("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
                        return n.isIdentity ? en : rn(n.a, n.b, n.c, n.d, n.e, n.f)
                    }), "px, ", "px)", "deg)"),
                    an = on((function (t) {
                        return null == t ? en : (tn || (tn = document.createElementNS("http://www.w3.org/2000/svg", "g")), tn.setAttribute("transform", t), (t = tn.transform.baseVal.consolidate()) ? rn((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : en)
                    }), ", ", ")", ")"),
                    un = e(1663);

                function cn(t, n) {
                    var e, r;
                    return function () {
                        var i = Gt(this, t),
                            o = i.tween;
                        if (o !== e)
                            for (var s = 0, a = (r = e = o).length; s < a; ++s)
                                if (r[s].name === n) {
                                    (r = r.slice()).splice(s, 1);
                                    break
                                } i.tween = r
                    }
                }

                function ln(t, n, e) {
                    var r, i;
                    if ("function" != typeof e) throw new Error;
                    return function () {
                        var o = Gt(this, t),
                            s = o.tween;
                        if (s !== r) {
                            i = (r = s).slice();
                            for (var a = {
                                    name: n,
                                    value: e
                                }, u = 0, c = i.length; u < c; ++u)
                                if (i[u].name === n) {
                                    i[u] = a;
                                    break
                                } u === c && i.push(a)
                        }
                        o.tween = i
                    }
                }

                function hn(t, n, e) {
                    var r = t._id;
                    return t.each((function () {
                            var t = Gt(this, r);
                            (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                        })),
                        function (t) {
                            return Jt(t, r).value[n]
                        }
                }

                function fn(t, n, e) {
                    t.prototype = n.prototype = e, e.constructor = t
                }

                function pn(t, n) {
                    var e = Object.create(t.prototype);
                    for (var r in n) e[r] = n[r];
                    return e
                }

                function dn() {}
                var yn = .7,
                    mn = 1 / yn,
                    gn = "\\s*([+-]?\\d+)\\s*",
                    _n = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                    vn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                    xn = /^#([0-9a-f]{3,8})$/,
                    wn = new RegExp("^rgb\\(" + [gn, gn, gn] + "\\)$"),
                    bn = new RegExp("^rgb\\(" + [vn, vn, vn] + "\\)$"),
                    Mn = new RegExp("^rgba\\(" + [gn, gn, gn, _n] + "\\)$"),
                    Tn = new RegExp("^rgba\\(" + [vn, vn, vn, _n] + "\\)$"),
                    En = new RegExp("^hsl\\(" + [_n, vn, vn] + "\\)$"),
                    kn = new RegExp("^hsla\\(" + [_n, vn, vn, _n] + "\\)$"),
                    Nn = {
                        aliceblue: 15792383,
                        antiquewhite: 16444375,
                        aqua: 65535,
                        aquamarine: 8388564,
                        azure: 15794175,
                        beige: 16119260,
                        bisque: 16770244,
                        black: 0,
                        blanchedalmond: 16772045,
                        blue: 255,
                        blueviolet: 9055202,
                        brown: 10824234,
                        burlywood: 14596231,
                        cadetblue: 6266528,
                        chartreuse: 8388352,
                        chocolate: 13789470,
                        coral: 16744272,
                        cornflowerblue: 6591981,
                        cornsilk: 16775388,
                        crimson: 14423100,
                        cyan: 65535,
                        darkblue: 139,
                        darkcyan: 35723,
                        darkgoldenrod: 12092939,
                        darkgray: 11119017,
                        darkgreen: 25600,
                        darkgrey: 11119017,
                        darkkhaki: 12433259,
                        darkmagenta: 9109643,
                        darkolivegreen: 5597999,
                        darkorange: 16747520,
                        darkorchid: 10040012,
                        darkred: 9109504,
                        darksalmon: 15308410,
                        darkseagreen: 9419919,
                        darkslateblue: 4734347,
                        darkslategray: 3100495,
                        darkslategrey: 3100495,
                        darkturquoise: 52945,
                        darkviolet: 9699539,
                        deeppink: 16716947,
                        deepskyblue: 49151,
                        dimgray: 6908265,
                        dimgrey: 6908265,
                        dodgerblue: 2003199,
                        firebrick: 11674146,
                        floralwhite: 16775920,
                        forestgreen: 2263842,
                        fuchsia: 16711935,
                        gainsboro: 14474460,
                        ghostwhite: 16316671,
                        gold: 16766720,
                        goldenrod: 14329120,
                        gray: 8421504,
                        green: 32768,
                        greenyellow: 11403055,
                        grey: 8421504,
                        honeydew: 15794160,
                        hotpink: 16738740,
                        indianred: 13458524,
                        indigo: 4915330,
                        ivory: 16777200,
                        khaki: 15787660,
                        lavender: 15132410,
                        lavenderblush: 16773365,
                        lawngreen: 8190976,
                        lemonchiffon: 16775885,
                        lightblue: 11393254,
                        lightcoral: 15761536,
                        lightcyan: 14745599,
                        lightgoldenrodyellow: 16448210,
                        lightgray: 13882323,
                        lightgreen: 9498256,
                        lightgrey: 13882323,
                        lightpink: 16758465,
                        lightsalmon: 16752762,
                        lightseagreen: 2142890,
                        lightskyblue: 8900346,
                        lightslategray: 7833753,
                        lightslategrey: 7833753,
                        lightsteelblue: 11584734,
                        lightyellow: 16777184,
                        lime: 65280,
                        limegreen: 3329330,
                        linen: 16445670,
                        magenta: 16711935,
                        maroon: 8388608,
                        mediumaquamarine: 6737322,
                        mediumblue: 205,
                        mediumorchid: 12211667,
                        mediumpurple: 9662683,
                        mediumseagreen: 3978097,
                        mediumslateblue: 8087790,
                        mediumspringgreen: 64154,
                        mediumturquoise: 4772300,
                        mediumvioletred: 13047173,
                        midnightblue: 1644912,
                        mintcream: 16121850,
                        mistyrose: 16770273,
                        moccasin: 16770229,
                        navajowhite: 16768685,
                        navy: 128,
                        oldlace: 16643558,
                        olive: 8421376,
                        olivedrab: 7048739,
                        orange: 16753920,
                        orangered: 16729344,
                        orchid: 14315734,
                        palegoldenrod: 15657130,
                        palegreen: 10025880,
                        paleturquoise: 11529966,
                        palevioletred: 14381203,
                        papayawhip: 16773077,
                        peachpuff: 16767673,
                        peru: 13468991,
                        pink: 16761035,
                        plum: 14524637,
                        powderblue: 11591910,
                        purple: 8388736,
                        rebeccapurple: 6697881,
                        red: 16711680,
                        rosybrown: 12357519,
                        royalblue: 4286945,
                        saddlebrown: 9127187,
                        salmon: 16416882,
                        sandybrown: 16032864,
                        seagreen: 3050327,
                        seashell: 16774638,
                        sienna: 10506797,
                        silver: 12632256,
                        skyblue: 8900331,
                        slateblue: 6970061,
                        slategray: 7372944,
                        slategrey: 7372944,
                        snow: 16775930,
                        springgreen: 65407,
                        steelblue: 4620980,
                        tan: 13808780,
                        teal: 32896,
                        thistle: 14204888,
                        tomato: 16737095,
                        turquoise: 4251856,
                        violet: 15631086,
                        wheat: 16113331,
                        white: 16777215,
                        whitesmoke: 16119285,
                        yellow: 16776960,
                        yellowgreen: 10145074
                    };

                function An() {
                    return this.rgb().formatHex()
                }

                function Sn() {
                    return this.rgb().formatRgb()
                }

                function Pn(t) {
                    var n, e;
                    return t = (t + "").trim().toLowerCase(), (n = xn.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? On(n) : 3 === e ? new Zn(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? Ln(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? Ln(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = wn.exec(t)) ? new Zn(n[1], n[2], n[3], 1) : (n = bn.exec(t)) ? new Zn(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Mn.exec(t)) ? Ln(n[1], n[2], n[3], n[4]) : (n = Tn.exec(t)) ? Ln(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = En.exec(t)) ? Fn(n[1], n[2] / 100, n[3] / 100, 1) : (n = kn.exec(t)) ? Fn(n[1], n[2] / 100, n[3] / 100, n[4]) : Nn.hasOwnProperty(t) ? On(Nn[t]) : "transparent" === t ? new Zn(NaN, NaN, NaN, 0) : null
                }

                function On(t) {
                    return new Zn(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
                }

                function Ln(t, n, e, r) {
                    return r <= 0 && (t = n = e = NaN), new Zn(t, n, e, r)
                }

                function In(t) {
                    return t instanceof dn || (t = Pn(t)), t ? new Zn((t = t.rgb()).r, t.g, t.b, t.opacity) : new Zn
                }

                function Cn(t, n, e, r) {
                    return 1 === arguments.length ? In(t) : new Zn(t, n, e, null == r ? 1 : r)
                }

                function Zn(t, n, e, r) {
                    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
                }

                function Dn() {
                    return "#" + Yn(this.r) + Yn(this.g) + Yn(this.b)
                }

                function Hn() {
                    var t = this.opacity;
                    return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
                }

                function Yn(t) {
                    return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
                }

                function Fn(t, n, e, r) {
                    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new jn(t, n, e, r)
                }

                function Un(t) {
                    if (t instanceof jn) return new jn(t.h, t.s, t.l, t.opacity);
                    if (t instanceof dn || (t = Pn(t)), !t) return new jn;
                    if (t instanceof jn) return t;
                    var n = (t = t.rgb()).r / 255,
                        e = t.g / 255,
                        r = t.b / 255,
                        i = Math.min(n, e, r),
                        o = Math.max(n, e, r),
                        s = NaN,
                        a = o - i,
                        u = (o + i) / 2;
                    return a ? (s = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= u < .5 ? o + i : 2 - o - i, s *= 60) : a = u > 0 && u < 1 ? 0 : s, new jn(s, a, u, t.opacity)
                }

                function jn(t, n, e, r) {
                    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
                }

                function Rn(t, n, e) {
                    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
                }

                function zn(t, n, e, r, i) {
                    var o = t * t,
                        s = o * t;
                    return ((1 - 3 * t + 3 * o - s) * n + (4 - 6 * o + 3 * s) * e + (1 + 3 * t + 3 * o - 3 * s) * r + s * i) / 6
                }
                fn(dn, Pn, {
                    copy: function (t) {
                        return Object.assign(new this.constructor, this, t)
                    },
                    displayable: function () {
                        return this.rgb().displayable()
                    },
                    hex: An,
                    formatHex: An,
                    formatHsl: function () {
                        return Un(this).formatHsl()
                    },
                    formatRgb: Sn,
                    toString: Sn
                }), fn(Zn, Cn, pn(dn, {
                    brighter: function (t) {
                        return t = null == t ? mn : Math.pow(mn, t), new Zn(this.r * t, this.g * t, this.b * t, this.opacity)
                    },
                    darker: function (t) {
                        return t = null == t ? yn : Math.pow(yn, t), new Zn(this.r * t, this.g * t, this.b * t, this.opacity)
                    },
                    rgb: function () {
                        return this
                    },
                    displayable: function () {
                        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
                    },
                    hex: Dn,
                    formatHex: Dn,
                    formatRgb: Hn,
                    toString: Hn
                })), fn(jn, (function (t, n, e, r) {
                    return 1 === arguments.length ? Un(t) : new jn(t, n, e, null == r ? 1 : r)
                }), pn(dn, {
                    brighter: function (t) {
                        return t = null == t ? mn : Math.pow(mn, t), new jn(this.h, this.s, this.l * t, this.opacity)
                    },
                    darker: function (t) {
                        return t = null == t ? yn : Math.pow(yn, t), new jn(this.h, this.s, this.l * t, this.opacity)
                    },
                    rgb: function () {
                        var t = this.h % 360 + 360 * (this.h < 0),
                            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                            e = this.l,
                            r = e + (e < .5 ? e : 1 - e) * n,
                            i = 2 * e - r;
                        return new Zn(Rn(t >= 240 ? t - 240 : t + 120, i, r), Rn(t, i, r), Rn(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
                    },
                    displayable: function () {
                        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                    },
                    formatHsl: function () {
                        var t = this.opacity;
                        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
                    }
                }));
                const qn = t => () => t;

                function $n(t, n) {
                    var e = n - t;
                    return e ? function (t, n) {
                        return function (e) {
                            return t + e * n
                        }
                    }(t, e) : qn(isNaN(t) ? n : t)
                }
                const Xn = function t(n) {
                    var e = function (t) {
                        return 1 == (t = +t) ? $n : function (n, e) {
                            return e - n ? function (t, n, e) {
                                return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                                    function (r) {
                                        return Math.pow(t + r * n, e)
                                    }
                            }(n, e, t) : qn(isNaN(n) ? e : n)
                        }
                    }(n);

                    function r(t, n) {
                        var r = e((t = Cn(t)).r, (n = Cn(n)).r),
                            i = e(t.g, n.g),
                            o = e(t.b, n.b),
                            s = $n(t.opacity, n.opacity);
                        return function (n) {
                            return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = s(n), t + ""
                        }
                    }
                    return r.gamma = t, r
                }(1);

                function Bn(t) {
                    return function (n) {
                        var e, r, i = n.length,
                            o = new Array(i),
                            s = new Array(i),
                            a = new Array(i);
                        for (e = 0; e < i; ++e) r = Cn(n[e]), o[e] = r.r || 0, s[e] = r.g || 0, a[e] = r.b || 0;
                        return o = t(o), s = t(s), a = t(a), r.opacity = 1,
                            function (t) {
                                return r.r = o(t), r.g = s(t), r.b = a(t), r + ""
                            }
                    }
                }
                Bn((function (t) {
                    var n = t.length - 1;
                    return function (e) {
                        var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                            i = t[r],
                            o = t[r + 1],
                            s = r > 0 ? t[r - 1] : 2 * i - o,
                            a = r < n - 1 ? t[r + 2] : 2 * o - i;
                        return zn((e - r / n) * n, s, i, o, a)
                    }
                })), Bn((function (t) {
                    var n = t.length;
                    return function (e) {
                        var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                            i = t[(r + n - 1) % n],
                            o = t[r % n],
                            s = t[(r + 1) % n],
                            a = t[(r + 2) % n];
                        return zn((e - r / n) * n, i, o, s, a)
                    }
                }));
                var Vn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                    Wn = new RegExp(Vn.source, "g");

                function Gn(t, n) {
                    var e, r, i, o = Vn.lastIndex = Wn.lastIndex = 0,
                        s = -1,
                        a = [],
                        u = [];
                    for (t += "", n += "";
                        (e = Vn.exec(t)) && (r = Wn.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[s] ? a[s] += i : a[++s] = i), (e = e[0]) === (r = r[0]) ? a[s] ? a[s] += r : a[++s] = r : (a[++s] = null, u.push({
                        i: s,
                        x: Kt(e, r)
                    })), o = Wn.lastIndex;
                    return o < n.length && (i = n.slice(o), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? u[0] ? function (t) {
                        return function (n) {
                            return t(n) + ""
                        }
                    }(u[0].x) : function (t) {
                        return function () {
                            return t
                        }
                    }(n) : (n = u.length, function (t) {
                        for (var e, r = 0; r < n; ++r) a[(e = u[r]).i] = e.x(t);
                        return a.join("")
                    })
                }

                function Jn(t, n) {
                    var e;
                    return ("number" == typeof n ? Kt : n instanceof Pn ? Xn : (e = Pn(n)) ? (n = e, Xn) : Gn)(t, n)
                }

                function Qn(t) {
                    return function () {
                        this.removeAttribute(t)
                    }
                }

                function Kn(t) {
                    return function () {
                        this.removeAttributeNS(t.space, t.local)
                    }
                }

                function te(t, n, e) {
                    var r, i, o = e + "";
                    return function () {
                        var s = this.getAttribute(t);
                        return s === o ? null : s === r ? i : i = n(r = s, e)
                    }
                }

                function ne(t, n, e) {
                    var r, i, o = e + "";
                    return function () {
                        var s = this.getAttributeNS(t.space, t.local);
                        return s === o ? null : s === r ? i : i = n(r = s, e)
                    }
                }

                function ee(t, n, e) {
                    var r, i, o;
                    return function () {
                        var s, a, u = e(this);
                        if (null != u) return (s = this.getAttribute(t)) === (a = u + "") ? null : s === r && a === i ? o : (i = a, o = n(r = s, u));
                        this.removeAttribute(t)
                    }
                }

                function re(t, n, e) {
                    var r, i, o;
                    return function () {
                        var s, a, u = e(this);
                        if (null != u) return (s = this.getAttributeNS(t.space, t.local)) === (a = u + "") ? null : s === r && a === i ? o : (i = a, o = n(r = s, u));
                        this.removeAttributeNS(t.space, t.local)
                    }
                }

                function ie(t, n) {
                    return function (e) {
                        this.setAttribute(t, n.call(this, e))
                    }
                }

                function oe(t, n) {
                    return function (e) {
                        this.setAttributeNS(t.space, t.local, n.call(this, e))
                    }
                }

                function se(t, n) {
                    var e, r;

                    function i() {
                        var i = n.apply(this, arguments);
                        return i !== r && (e = (r = i) && oe(t, i)), e
                    }
                    return i._value = n, i
                }

                function ae(t, n) {
                    var e, r;

                    function i() {
                        var i = n.apply(this, arguments);
                        return i !== r && (e = (r = i) && ie(t, i)), e
                    }
                    return i._value = n, i
                }

                function ue(t, n) {
                    return function () {
                        Wt(this, t).delay = +n.apply(this, arguments)
                    }
                }

                function ce(t, n) {
                    return n = +n,
                        function () {
                            Wt(this, t).delay = n
                        }
                }

                function le(t, n) {
                    return function () {
                        Gt(this, t).duration = +n.apply(this, arguments)
                    }
                }

                function he(t, n) {
                    return n = +n,
                        function () {
                            Gt(this, t).duration = n
                        }
                }

                function fe(t, n) {
                    if ("function" != typeof n) throw new Error;
                    return function () {
                        Gt(this, t).ease = n
                    }
                }
                var pe = e(4421);

                function de(t, n, e) {
                    var r, i, o = function (t) {
                        return (t + "").trim().split(/^|\s+/).every((function (t) {
                            var n = t.indexOf(".");
                            return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                        }))
                    }(n) ? Wt : Gt;
                    return function () {
                        var s = o(this, t),
                            a = s.on;
                        a !== r && (i = (r = a).copy()).on(n, e), s.on = i
                    }
                }
                var ye = e(3010),
                    me = e(9701),
                    ge = St.ZP.prototype.constructor,
                    _e = e(2627);

                function ve(t) {
                    return function () {
                        this.style.removeProperty(t)
                    }
                }

                function xe(t, n, e) {
                    return function (r) {
                        this.style.setProperty(t, n.call(this, r), e)
                    }
                }

                function we(t, n, e) {
                    var r, i;

                    function o() {
                        var o = n.apply(this, arguments);
                        return o !== i && (r = (i = o) && xe(t, o, e)), r
                    }
                    return o._value = n, o
                }

                function be(t) {
                    return function (n) {
                        this.textContent = t.call(this, n)
                    }
                }

                function Me(t) {
                    var n, e;

                    function r() {
                        var r = t.apply(this, arguments);
                        return r !== e && (n = (e = r) && be(r)), n
                    }
                    return r._value = t, r
                }
                var Te = 0;

                function Ee(t, n, e, r) {
                    this._groups = t, this._parents = n, this._name = e, this._id = r
                }

                function ke() {
                    return ++Te
                }
                var Ne = St.ZP.prototype;
                Ee.prototype = function (t) {
                    return (0, St.ZP)().transition(t)
                }.prototype = {
                    constructor: Ee,
                    select: function (t) {
                        var n = this._name,
                            e = this._id;
                        "function" != typeof t && (t = (0, ye.Z)(t));
                        for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
                            for (var a, u, c = r[s], l = c.length, h = o[s] = new Array(l), f = 0; f < l; ++f)(a = c[f]) && (u = t.call(a, a.__data__, f, c)) && ("__data__" in a && (u.__data__ = a.__data__), h[f] = u, Vt(h[f], n, e, f, h, Jt(a, e)));
                        return new Ee(o, this._parents, n, e)
                    },
                    selectAll: function (t) {
                        var n = this._name,
                            e = this._id;
                        "function" != typeof t && (t = (0, me.Z)(t));
                        for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
                            for (var u, c = r[a], l = c.length, h = 0; h < l; ++h)
                                if (u = c[h]) {
                                    for (var f, p = t.call(u, u.__data__, h, c), d = Jt(u, e), y = 0, m = p.length; y < m; ++y)(f = p[y]) && Vt(f, n, e, y, p, d);
                                    o.push(p), s.push(u)
                                } return new Ee(o, s, n, e)
                    },
                    filter: function (t) {
                        "function" != typeof t && (t = (0, pe.Z)(t));
                        for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                            for (var o, s = n[i], a = s.length, u = r[i] = [], c = 0; c < a; ++c)(o = s[c]) && t.call(o, o.__data__, c, s) && u.push(o);
                        return new Ee(r, this._parents, this._name, this._id)
                    },
                    merge: function (t) {
                        if (t._id !== this._id) throw new Error;
                        for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
                            for (var u, c = n[a], l = e[a], h = c.length, f = s[a] = new Array(h), p = 0; p < h; ++p)(u = c[p] || l[p]) && (f[p] = u);
                        for (; a < r; ++a) s[a] = n[a];
                        return new Ee(s, this._parents, this._name, this._id)
                    },
                    selection: function () {
                        return new ge(this._groups, this._parents)
                    },
                    transition: function () {
                        for (var t = this._name, n = this._id, e = ke(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                            for (var s, a = r[o], u = a.length, c = 0; c < u; ++c)
                                if (s = a[c]) {
                                    var l = Jt(s, n);
                                    Vt(s, t, e, c, a, {
                                        time: l.time + l.delay + l.duration,
                                        delay: 0,
                                        duration: l.duration,
                                        ease: l.ease
                                    })
                                } return new Ee(r, this._parents, t, e)
                    },
                    call: Ne.call,
                    nodes: Ne.nodes,
                    node: Ne.node,
                    size: Ne.size,
                    empty: Ne.empty,
                    each: Ne.each,
                    on: function (t, n) {
                        var e = this._id;
                        return arguments.length < 2 ? Jt(this.node(), e).on.on(t) : this.each(de(e, t, n))
                    },
                    attr: function (t, n) {
                        var e = (0, un.Z)(t),
                            r = "transform" === e ? an : Jn;
                        return this.attrTween(t, "function" == typeof n ? (e.local ? re : ee)(e, r, hn(this, "attr." + t, n)) : null == n ? (e.local ? Kn : Qn)(e) : (e.local ? ne : te)(e, r, n))
                    },
                    attrTween: function (t, n) {
                        var e = "attr." + t;
                        if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                        if (null == n) return this.tween(e, null);
                        if ("function" != typeof n) throw new Error;
                        var r = (0, un.Z)(t);
                        return this.tween(e, (r.local ? se : ae)(r, n))
                    },
                    style: function (t, n, e) {
                        var r = "transform" == (t += "") ? sn : Jn;
                        return null == n ? this.styleTween(t, function (t, n) {
                            var e, r, i;
                            return function () {
                                var o = (0, _e.S)(this, t),
                                    s = (this.style.removeProperty(t), (0, _e.S)(this, t));
                                return o === s ? null : o === e && s === r ? i : i = n(e = o, r = s)
                            }
                        }(t, r)).on("end.style." + t, ve(t)) : "function" == typeof n ? this.styleTween(t, function (t, n, e) {
                            var r, i, o;
                            return function () {
                                var s = (0, _e.S)(this, t),
                                    a = e(this),
                                    u = a + "";
                                return null == a && (this.style.removeProperty(t), u = a = (0, _e.S)(this, t)), s === u ? null : s === r && u === i ? o : (i = u, o = n(r = s, a))
                            }
                        }(t, r, hn(this, "style." + t, n))).each(function (t, n) {
                            var e, r, i, o, s = "style." + n,
                                a = "end." + s;
                            return function () {
                                var u = Gt(this, t),
                                    c = u.on,
                                    l = null == u.value[s] ? o || (o = ve(n)) : void 0;
                                c === e && i === l || (r = (e = c).copy()).on(a, i = l), u.on = r
                            }
                        }(this._id, t)) : this.styleTween(t, function (t, n, e) {
                            var r, i, o = e + "";
                            return function () {
                                var s = (0, _e.S)(this, t);
                                return s === o ? null : s === r ? i : i = n(r = s, e)
                            }
                        }(t, r, n), e).on("end.style." + t, null)
                    },
                    styleTween: function (t, n, e) {
                        var r = "style." + (t += "");
                        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                        if (null == n) return this.tween(r, null);
                        if ("function" != typeof n) throw new Error;
                        return this.tween(r, we(t, n, null == e ? "" : e))
                    },
                    text: function (t) {
                        return this.tween("text", "function" == typeof t ? function (t) {
                            return function () {
                                var n = t(this);
                                this.textContent = null == n ? "" : n
                            }
                        }(hn(this, "text", t)) : function (t) {
                            return function () {
                                this.textContent = t
                            }
                        }(null == t ? "" : t + ""))
                    },
                    textTween: function (t) {
                        var n = "text";
                        if (arguments.length < 1) return (n = this.tween(n)) && n._value;
                        if (null == t) return this.tween(n, null);
                        if ("function" != typeof t) throw new Error;
                        return this.tween(n, Me(t))
                    },
                    remove: function () {
                        return this.on("end.remove", function (t) {
                            return function () {
                                var n = this.parentNode;
                                for (var e in this.__transition)
                                    if (+e !== t) return;
                                n && n.removeChild(this)
                            }
                        }(this._id))
                    },
                    tween: function (t, n) {
                        var e = this._id;
                        if (t += "", arguments.length < 2) {
                            for (var r, i = Jt(this.node(), e).tween, o = 0, s = i.length; o < s; ++o)
                                if ((r = i[o]).name === t) return r.value;
                            return null
                        }
                        return this.each((null == n ? cn : ln)(e, t, n))
                    },
                    delay: function (t) {
                        var n = this._id;
                        return arguments.length ? this.each(("function" == typeof t ? ue : ce)(n, t)) : Jt(this.node(), n).delay
                    },
                    duration: function (t) {
                        var n = this._id;
                        return arguments.length ? this.each(("function" == typeof t ? le : he)(n, t)) : Jt(this.node(), n).duration
                    },
                    ease: function (t) {
                        var n = this._id;
                        return arguments.length ? this.each(fe(n, t)) : Jt(this.node(), n).ease
                    },
                    easeVarying: function (t) {
                        if ("function" != typeof t) throw new Error;
                        return this.each(function (t, n) {
                            return function () {
                                var e = n.apply(this, arguments);
                                if ("function" != typeof e) throw new Error;
                                Gt(this, t).ease = e
                            }
                        }(this._id, t))
                    },
                    end: function () {
                        var t, n, e = this,
                            r = e._id,
                            i = e.size();
                        return new Promise((function (o, s) {
                            var a = {
                                    value: s
                                },
                                u = {
                                    value: function () {
                                        0 == --i && o()
                                    }
                                };
                            e.each((function () {
                                var e = Gt(this, r),
                                    i = e.on;
                                i !== t && ((n = (t = i).copy())._.cancel.push(a), n._.interrupt.push(a), n._.end.push(u)), e.on = n
                            })), 0 === i && o()
                        }))
                    },
                    [Symbol.iterator]: Ne[Symbol.iterator]
                };
                var Ae = {
                    time: null,
                    delay: 0,
                    duration: 250,
                    ease: function (t) {
                        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
                    }
                };

                function Se(t, n) {
                    for (var e; !(e = t.__transition) || !(e = e[n]);)
                        if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
                    return e
                }
                St.ZP.prototype.interrupt = function (t) {
                    return this.each((function () {
                        Qt(this, t)
                    }))
                }, St.ZP.prototype.transition = function (t) {
                    var n, e;
                    t instanceof Ee ? (n = t._id, t = t._name) : (n = ke(), (e = Ae).time = Yt(), t = null == t ? null : t + "");
                    for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                        for (var s, a = r[o], u = a.length, c = 0; c < u; ++c)(s = a[c]) && Vt(s, t, n, c, a, e || Se(s, n));
                    return new Ee(r, this._parents, t, n)
                };
                const Pe = t => () => t;

                function Oe(t, {
                    sourceEvent: n,
                    target: e,
                    transform: r,
                    dispatch: i
                }) {
                    Object.defineProperties(this, {
                        type: {
                            value: t,
                            enumerable: !0,
                            configurable: !0
                        },
                        sourceEvent: {
                            value: n,
                            enumerable: !0,
                            configurable: !0
                        },
                        target: {
                            value: e,
                            enumerable: !0,
                            configurable: !0
                        },
                        transform: {
                            value: r,
                            enumerable: !0,
                            configurable: !0
                        },
                        _: {
                            value: i
                        }
                    })
                }

                function Le(t, n, e) {
                    this.k = t, this.x = n, this.y = e
                }
                Le.prototype = {
                    constructor: Le,
                    scale: function (t) {
                        return 1 === t ? this : new Le(this.k * t, this.x, this.y)
                    },
                    translate: function (t, n) {
                        return 0 === t & 0 === n ? this : new Le(this.k, this.x + this.k * t, this.y + this.k * n)
                    },
                    apply: function (t) {
                        return [t[0] * this.k + this.x, t[1] * this.k + this.y]
                    },
                    applyX: function (t) {
                        return t * this.k + this.x
                    },
                    applyY: function (t) {
                        return t * this.k + this.y
                    },
                    invert: function (t) {
                        return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
                    },
                    invertX: function (t) {
                        return (t - this.x) / this.k
                    },
                    invertY: function (t) {
                        return (t - this.y) / this.k
                    },
                    rescaleX: function (t) {
                        return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
                    },
                    rescaleY: function (t) {
                        return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
                    },
                    toString: function () {
                        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
                    }
                };
                var Ie = new Le(1, 0, 0);

                function Ce(t) {
                    for (; !t.__zoom;)
                        if (!(t = t.parentNode)) return Ie;
                    return t.__zoom
                }

                function Ze(t) {
                    t.stopImmediatePropagation()
                }

                function De(t) {
                    t.preventDefault(), t.stopImmediatePropagation()
                }

                function He(t) {
                    return !(t.ctrlKey && "wheel" !== t.type || t.button)
                }

                function Ye() {
                    var t = this;
                    return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
                        [(t = t.viewBox.baseVal).x, t.y],
                        [t.x + t.width, t.y + t.height]
                    ] : [
                        [0, 0],
                        [t.width.baseVal.value, t.height.baseVal.value]
                    ] : [
                        [0, 0],
                        [t.clientWidth, t.clientHeight]
                    ]
                }

                function Fe() {
                    return this.__zoom || Ie
                }

                function Ue(t) {
                    return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1)
                }

                function je() {
                    return navigator.maxTouchPoints || "ontouchstart" in this
                }

                function Re(t, n, e) {
                    var r = t.invertX(n[0][0]) - e[0][0],
                        i = t.invertX(n[1][0]) - e[1][0],
                        o = t.invertY(n[0][1]) - e[0][1],
                        s = t.invertY(n[1][1]) - e[1][1];
                    return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s))
                }

                function ze() {
                    var t, n, e, r = He,
                        i = Ye,
                        o = Re,
                        s = Ue,
                        a = je,
                        u = [0, 1 / 0],
                        l = [
                            [-1 / 0, -1 / 0],
                            [1 / 0, 1 / 0]
                        ],
                        h = 250,
                        f = kt.Z,
                        p = c("start", "zoom", "end"),
                        d = 500,
                        y = 0,
                        m = 10;

                    function g(t) {
                        t.property("__zoom", Fe).on("wheel.zoom", T, {
                            passive: !1
                        }).on("mousedown.zoom", E).on("dblclick.zoom", k).filter(a).on("touchstart.zoom", N).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", S).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                    }

                    function _(t, n) {
                        return (n = Math.max(u[0], Math.min(u[1], n))) === t.k ? t : new Le(n, t.x, t.y)
                    }

                    function v(t, n, e) {
                        var r = n[0] - e[0] * t.k,
                            i = n[1] - e[1] * t.k;
                        return r === t.x && i === t.y ? t : new Le(t.k, r, i)
                    }

                    function x(t) {
                        return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
                    }

                    function w(t, n, e, r) {
                        t.on("start.zoom", (function () {
                            b(this, arguments).event(r).start()
                        })).on("interrupt.zoom end.zoom", (function () {
                            b(this, arguments).event(r).end()
                        })).tween("zoom", (function () {
                            var t = this,
                                o = arguments,
                                s = b(t, o).event(r),
                                a = i.apply(t, o),
                                u = null == e ? x(a) : "function" == typeof e ? e.apply(t, o) : e,
                                c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                                l = t.__zoom,
                                h = "function" == typeof n ? n.apply(t, o) : n,
                                p = f(l.invert(u).concat(c / l.k), h.invert(u).concat(c / h.k));
                            return function (t) {
                                if (1 === t) t = h;
                                else {
                                    var n = p(t),
                                        e = c / n[2];
                                    t = new Le(e, u[0] - n[0] * e, u[1] - n[1] * e)
                                }
                                s.zoom(null, t)
                            }
                        }))
                    }

                    function b(t, n, e) {
                        return !e && t.__zooming || new M(t, n)
                    }

                    function M(t, n) {
                        this.that = t, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = i.apply(t, n), this.taps = 0
                    }

                    function T(t, ...n) {
                        if (r.apply(this, arguments)) {
                            var e = b(this, n).event(t),
                                i = this.__zoom,
                                a = Math.max(u[0], Math.min(u[1], i.k * Math.pow(2, s.apply(this, arguments)))),
                                c = (0, At.Z)(t);
                            if (e.wheel) e.mouse[0][0] === c[0] && e.mouse[0][1] === c[1] || (e.mouse[1] = i.invert(e.mouse[0] = c)), clearTimeout(e.wheel);
                            else {
                                if (i.k === a) return;
                                e.mouse = [c, i.invert(c)], Qt(this), e.start()
                            }
                            De(t), e.wheel = setTimeout(h, 150), e.zoom("mouse", o(v(_(i, a), e.mouse[0], e.mouse[1]), e.extent, l))
                        }

                        function h() {
                            e.wheel = null, e.end()
                        }
                    }

                    function E(t, ...n) {
                        if (!e && r.apply(this, arguments)) {
                            var i = t.currentTarget,
                                s = b(this, n, !0).event(t),
                                a = (0, Nt.Z)(t.view).on("mousemove.zoom", f, !0).on("mouseup.zoom", p, !0),
                                u = (0, At.Z)(t, i),
                                c = t.clientX,
                                h = t.clientY;
                            bt(t.view), Ze(t), s.mouse = [u, this.__zoom.invert(u)], Qt(this), s.start()
                        }

                        function f(t) {
                            if (De(t), !s.moved) {
                                var n = t.clientX - c,
                                    e = t.clientY - h;
                                s.moved = n * n + e * e > y
                            }
                            s.event(t).zoom("mouse", o(v(s.that.__zoom, s.mouse[0] = (0, At.Z)(t, i), s.mouse[1]), s.extent, l))
                        }

                        function p(t) {
                            a.on("mousemove.zoom mouseup.zoom", null), Mt(t.view, s.moved), De(t), s.event(t).end()
                        }
                    }

                    function k(t, ...n) {
                        if (r.apply(this, arguments)) {
                            var e = this.__zoom,
                                s = (0, At.Z)(t.changedTouches ? t.changedTouches[0] : t, this),
                                a = e.invert(s),
                                u = e.k * (t.shiftKey ? .5 : 2),
                                c = o(v(_(e, u), s, a), i.apply(this, n), l);
                            De(t), h > 0 ? (0, Nt.Z)(this).transition().duration(h).call(w, c, s, t) : (0, Nt.Z)(this).call(g.transform, c, s, t)
                        }
                    }

                    function N(e, ...i) {
                        if (r.apply(this, arguments)) {
                            var o, s, a, u, c = e.touches,
                                l = c.length,
                                h = b(this, i, e.changedTouches.length === l).event(e);
                            for (Ze(e), s = 0; s < l; ++s) a = c[s], u = [u = (0, At.Z)(a, this), this.__zoom.invert(u), a.identifier], h.touch0 ? h.touch1 || h.touch0[2] === u[2] || (h.touch1 = u, h.taps = 0) : (h.touch0 = u, o = !0, h.taps = 1 + !!t);
                            t && (t = clearTimeout(t)), o && (h.taps < 2 && (n = u[0], t = setTimeout((function () {
                                t = null
                            }), d)), Qt(this), h.start())
                        }
                    }

                    function A(t, ...n) {
                        if (this.__zooming) {
                            var e, r, i, s, a = b(this, n).event(t),
                                u = t.changedTouches,
                                c = u.length;
                            for (De(t), e = 0; e < c; ++e) r = u[e], i = (0, At.Z)(r, this), a.touch0 && a.touch0[2] === r.identifier ? a.touch0[0] = i : a.touch1 && a.touch1[2] === r.identifier && (a.touch1[0] = i);
                            if (r = a.that.__zoom, a.touch1) {
                                var h = a.touch0[0],
                                    f = a.touch0[1],
                                    p = a.touch1[0],
                                    d = a.touch1[1],
                                    y = (y = p[0] - h[0]) * y + (y = p[1] - h[1]) * y,
                                    m = (m = d[0] - f[0]) * m + (m = d[1] - f[1]) * m;
                                r = _(r, Math.sqrt(y / m)), i = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2], s = [(f[0] + d[0]) / 2, (f[1] + d[1]) / 2]
                            } else {
                                if (!a.touch0) return;
                                i = a.touch0[0], s = a.touch0[1]
                            }
                            a.zoom("touch", o(v(r, i, s), a.extent, l))
                        }
                    }

                    function S(t, ...r) {
                        if (this.__zooming) {
                            var i, o, s = b(this, r).event(t),
                                a = t.changedTouches,
                                u = a.length;
                            for (Ze(t), e && clearTimeout(e), e = setTimeout((function () {
                                    e = null
                                }), d), i = 0; i < u; ++i) o = a[i], s.touch0 && s.touch0[2] === o.identifier ? delete s.touch0 : s.touch1 && s.touch1[2] === o.identifier && delete s.touch1;
                            if (s.touch1 && !s.touch0 && (s.touch0 = s.touch1, delete s.touch1), s.touch0) s.touch0[1] = this.__zoom.invert(s.touch0[0]);
                            else if (s.end(), 2 === s.taps && (o = (0, At.Z)(o, this), Math.hypot(n[0] - o[0], n[1] - o[1]) < m)) {
                                var c = (0, Nt.Z)(this).on("dblclick.zoom");
                                c && c.apply(this, arguments)
                            }
                        }
                    }
                    return g.transform = function (t, n, e, r) {
                        var i = t.selection ? t.selection() : t;
                        i.property("__zoom", Fe), t !== i ? w(t, n, e, r) : i.interrupt().each((function () {
                            b(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                        }))
                    }, g.scaleBy = function (t, n, e, r) {
                        g.scaleTo(t, (function () {
                            var t = this.__zoom.k,
                                e = "function" == typeof n ? n.apply(this, arguments) : n;
                            return t * e
                        }), e, r)
                    }, g.scaleTo = function (t, n, e, r) {
                        g.transform(t, (function () {
                            var t = i.apply(this, arguments),
                                r = this.__zoom,
                                s = null == e ? x(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                                a = r.invert(s),
                                u = "function" == typeof n ? n.apply(this, arguments) : n;
                            return o(v(_(r, u), s, a), t, l)
                        }), e, r)
                    }, g.translateBy = function (t, n, e, r) {
                        g.transform(t, (function () {
                            return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), l)
                        }), null, r)
                    }, g.translateTo = function (t, n, e, r, s) {
                        g.transform(t, (function () {
                            var t = i.apply(this, arguments),
                                s = this.__zoom,
                                a = null == r ? x(t) : "function" == typeof r ? r.apply(this, arguments) : r;
                            return o(Ie.translate(a[0], a[1]).scale(s.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, l)
                        }), r, s)
                    }, M.prototype = {
                        event: function (t) {
                            return t && (this.sourceEvent = t), this
                        },
                        start: function () {
                            return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this
                        },
                        zoom: function (t, n) {
                            return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                        },
                        end: function () {
                            return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this
                        },
                        emit: function (t) {
                            var n = (0, Nt.Z)(this.that).datum();
                            p.call(t, this.that, new Oe(t, {
                                sourceEvent: this.sourceEvent,
                                target: g,
                                type: t,
                                transform: this.that.__zoom,
                                dispatch: p
                            }), n)
                        }
                    }, g.wheelDelta = function (t) {
                        return arguments.length ? (s = "function" == typeof t ? t : Pe(+t), g) : s
                    }, g.filter = function (t) {
                        return arguments.length ? (r = "function" == typeof t ? t : Pe(!!t), g) : r
                    }, g.touchable = function (t) {
                        return arguments.length ? (a = "function" == typeof t ? t : Pe(!!t), g) : a
                    }, g.extent = function (t) {
                        return arguments.length ? (i = "function" == typeof t ? t : Pe([
                            [+t[0][0], +t[0][1]],
                            [+t[1][0], +t[1][1]]
                        ]), g) : i
                    }, g.scaleExtent = function (t) {
                        return arguments.length ? (u[0] = +t[0], u[1] = +t[1], g) : [u[0], u[1]]
                    }, g.translateExtent = function (t) {
                        return arguments.length ? (l[0][0] = +t[0][0], l[1][0] = +t[1][0], l[0][1] = +t[0][1], l[1][1] = +t[1][1], g) : [
                            [l[0][0], l[0][1]],
                            [l[1][0], l[1][1]]
                        ]
                    }, g.constrain = function (t) {
                        return arguments.length ? (o = t, g) : o
                    }, g.duration = function (t) {
                        return arguments.length ? (h = +t, g) : h
                    }, g.interpolate = function (t) {
                        return arguments.length ? (f = t, g) : f
                    }, g.on = function () {
                        var t = p.on.apply(p, arguments);
                        return t === p ? g : t
                    }, g.clickDistance = function (t) {
                        return arguments.length ? (y = (t = +t) * t, g) : Math.sqrt(y)
                    }, g.tapDistance = function (t) {
                        return arguments.length ? (m = +t, g) : m
                    }, g
                }
                Ce.prototype = Le.prototype
            }
        },
        n = {};

    function e(r) {
        var i = n[r];
        if (void 0 !== i) return i.exports;
        var o = n[r] = {
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e), o.exports
    }
    e.n = t => {
        var n = t && t.__esModule ? () => t.default : () => t;
        return e.d(n, {
            a: n
        }), n
    }, e.d = (t, n) => {
        for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: n[r]
        })
    }, e.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n), e.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    var r = e(3607);
    return r.default
})()));