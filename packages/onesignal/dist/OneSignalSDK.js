! function(e) {
    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            exports: {},
            id: i,
            loaded: false
        };
        e[i].call(o.exports, o, o.exports, n);
        o.loaded = true;
        return o.exports
    }
    var t = {};
    n.m = e;
    n.c = t;
    n.p = "";
    return n(0)
}([function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var o = t(5);
    var r = t(4);
    var a = i(r);
    if (a["default"].isBrowser()) {
        if ("undefined" != typeof OneSignal) var l = OneSignal;
        t(40);
        if (l) OneSignal._processPushes(l)
    } else if (a["default"].isServiceWorker()) t(41)
}, function(e, n, t) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        else {
            var n = {};
            if (null != e)
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) n[t] = e[t];
            n["default"] = e;
            return n
        }
    }

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function a() {
        var e = s();
        if (!e) B["default"].warn("Your browser does not support push notifications.");
        return e
    }

    function l(e) {
        if (V["default"].isBrowser())
            if (!K) K = document.createElement("textarea");
        if (K) {
            K.innerHTML = e;
            return K.value
        } else return e
    }

    function s() {
        if (H.ios || H.ipod || H.iphone || H.ipad) return false;
        if (H.msedge || H.msie) return false;
        if (H.firefox && Number(H.version) < 48 && (H.mobile || H.tablet)) return false;
        if (H.firefox && Number(H.version) >= 44) return true;
        if (H.safari && Number(H.version) >= 7.1) return true;
        if (navigator.appVersion.match(/ wv/)) return false;
        if (H.chrome && Number(H.version) >= 42) return true;
        if (H.yandexbrowser && Number(H.version) >= 15.12) return true;
        if (H.opera && H.mobile && Number(H.version) >= 37) return true;
        return false
    }

    function u(e) {
        var n = document.querySelectorAll(e);
        if (n.length > 0)
            for (var t = 0; t < n.length; t++) n[t].parentNode.removeChild(n[t])
    }

    function c(e, n, t) {
        if ("string" == typeof e) document.querySelector(e).insertAdjacentHTML(n, t);
        else if ("object" === ("undefined" == typeof e ? "undefined" : U(e))) e.insertAdjacentHTML(n, t);
        else throw new Error(e + " must be a CSS selector string or DOM Element object.")
    }

    function f(e) {
        if ("string" == typeof e) {
            var n = document.querySelector(e);
            for (; n.firstChild;) n.removeChild(n.firstChild)
        } else if ("object" === ("undefined" == typeof e ? "undefined" : U(e)))
            for (; e.firstChild;) e.removeChild(e.firstChild);
        else throw new Error(e + " must be a CSS selector string or DOM Element object.")
    }

    function d(e, n) {
        if ("string" == typeof e) document.querySelector(e).classList.add(n);
        else if ("object" === ("undefined" == typeof e ? "undefined" : U(e))) e.classList.add(n);
        else throw new Error(e + " must be a CSS selector string or DOM Element object.")
    }

    function g(e, n) {
        if ("string" == typeof e) document.querySelector(e).classList.remove(n);
        else if ("object" === ("undefined" == typeof e ? "undefined" : U(e))) e.classList.remove(n);
        else throw new Error(e + " must be a CSS selector string or DOM Element object.")
    }

    function p(e, n) {
        if ("string" == typeof e) return document.querySelector(e).classList.contains(n);
        else if ("object" === ("undefined" == typeof e ? "undefined" : U(e))) return e.classList.contains(n);
        else throw new Error(e + " must be a CSS selector string or DOM Element object.")
    }

    function h(e, n, t) {
        if (!n) B["default"].error("Cannot call on() with no event: ", n);
        if (!t) B["default"].error("Cannot call on() with no task: ", t);
        if ("string" == typeof e) {
            var i = document.querySelectorAll(selector);
            if (i.length > 0)
                for (var o = 0; o < i.length; o++) h(i[o], t)
        } else if (r(e))
            for (var a = 0; a < e.length; a++) h(e[a], t);
        else if ("object" === ("undefined" == typeof e ? "undefined" : U(e))) e.addEventListener(n, t);
        else throw new Error(e + " must be a CSS selector string or DOM Element object.")
    }

    function b() {
        if (H.chrome || H.yandexbrowser) return Y.CHROME;
        else if (H.firefox) return Y.FIREFOX;
        else if (H.safari) return Y.SAFARI
    }

    function v(e, n, t) {
        var i = arguments.length <= 3 || void 0 === arguments[3] ? false : arguments[3];
        if (!n) B["default"].error("Cannot call on() with no event: ", n);
        if (!t) B["default"].error("Cannot call on() with no task: ", t);
        if ("string" == typeof e) {
            var o = document.querySelectorAll(selector);
            if (o.length > 0)
                for (var a = 0; a < o.length; a++) v(o[a], t)
        } else if (r(e))
            for (var l = 0; l < e.length; l++) v(e[l], t);
        else if ("object" === ("undefined" == typeof e ? "undefined" : U(e))) {
            var s = function() {
                var n = function o(n) {
                    var o = function r() {
                        e.removeEventListener(n.type, s)
                    };
                    if (!i) o();
                    t(n, o)
                };
                return n
            }();
            e.addEventListener(n, s)
        } else throw new Error(e + " must be a CSS selector string or DOM Element object.")
    }

    function m(e, n, t) {
        if ("string" == typeof e) {
            var i = document.querySelectorAll(selector);
            if (i.length > 0)
                for (var o = 0; o < i.length; o++) m(i[o], t)
        } else if (r(e))
            for (var a = 0; a < e.length; a++) m(e[a], t);
        else if ("object" === ("undefined" == typeof e ? "undefined" : U(e)))
            if (t) e.removeEventListener(n, t);
            else e.removeEventListener(n);
        else throw new Error(e + " must be a CSS selector string or DOM Element object.")
    }

    function y(e) {
        if ("code" == e) return '\n    padding: 0 5px 2px;\n    border: 1px solid #ddd;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    background-clip: padding-box;\n    font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;\n    color: #666;\n    ';
        else if ("bold" == e) return "\n      font-weight: 600;\n    color: rgb(51, 51, 51);\n    ";
        else if ("alert" == e) return "\n      font-weight: 600;\n    color: red;\n    ";
        else if ("event" == e) return "\n    color: green;\n    ";
        else if ("postmessage" == e) return "\n    color: orange;\n    ";
        else if ("serviceworkermessage" == e) return "\n    color: purple;\n    "
    }

    function S(e) {
        return new Promise(function(n) {
            setTimeout(n, e)
        })
    }

    function w() {
        return Promise.resolve()
    }

    function E(e, n, t) {
        var i = new Promise(function(e) {
            return setTimeout(function() {
                return e("promise-timed-out")
            }, n)
        });
        return Promise.race([e, i]).then(function(i) {
            if ("promise-timed-out" === i) {
                B["default"].warn(t || "Promise " + e + " timed out after " + n + " ms.");
                return Promise.reject(t || "Promise " + e + " timed out after " + n + " ms.")
            } else return i
        })
    }

    function k(e, n, t) {
        if (void 0 === n) n = w();
        if (void 0 === t) t = w();
        return e ? n : t
    }

    function O() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var n = window.crypto || window.msCrypto;
            if (n) {
                var t = n.getRandomValues(new Uint8Array(1))[0] % 16 | 0,
                    i = "x" == e ? t : 3 & t | 8;
                return i.toString(16)
            } else return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var n = 16 * Math.random() | 0,
                    t = "x" == e ? n : 3 & n | 8;
                return t.toString(16)
            })
        })
    }

    function _(e, n) {
        if (!e) return false;
        return e.indexOf(n) !== -1
    }

    function I(e) {
        for (var n in e)
            if (e.hasOwnProperty(n))
                if (void 0 === e[n]) delete e[n];
        return e
    }

    function T(e) {
        e = e.trim();
        var n = ["http://www.", "https://www.", "http://", "https://", ".onesignal.com/", ".onesignal.com"];
        var t = true;
        var i = false;
        var o = void 0;
        try {
            for (var r = n[Symbol.iterator](), a; !(t = (a = r.next()).done); t = true) {
                var l = a.value;
                e = e.replace(l, "")
            }
        } catch (s) {
            i = true;
            o = s
        } finally {
            try {
                if (!t && r["return"]) r["return"]()
            } finally {
                if (i) throw o
            }
        }
        return e.toLowerCase()
    }

    function P(e) {
        var n = window.location.href;
        n = n.toLowerCase();
        e = e.replace(/[\[\]]/g, "\\$&").toLowerCase();
        var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
            i = t.exec(n);
        if (!i) return null;
        if (!i[2]) return "";
        return decodeURIComponent(i[2].replace(/\+/g, " "))
    }

    function x() {
        B["default"].warn("OneSignal: Wiping local IndexedDB data.");
        return Promise.all([z["default"].remove("Ids"), z["default"].remove("NotificationOpened"), z["default"].remove("Options")])
    }

    function N() {
        B["default"].warn("OneSignal: Wiping IndexedDB data.");
        return Promise.all([q["default"].remove("Ids"), q["default"].remove("NotificationOpened"), q["default"].remove("Options")])
    }

    function C() {
        B["default"].warn("OneSignal: Unsubscribe from push.");
        if (OneSignal.isUsingSubscriptionWorkaround()) return new Promise(function(e, n) {
            B["default"].debug("Unsubscribe from push got called, and we're going to remotely execute it in HTTPS iFrame.");
            OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, null, function(t) {
                B["default"].debug("Unsubscribe from push succesfully remotely executed.");
                if (t.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) e();
                else n("Failed to remotely unsubscribe from push.")
            })
        });
        else {
            if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return Promise.resolve();
            return navigator.serviceWorker.ready.then(function(e) {
                return e.pushManager
            }).then(function(e) {
                return e.getSubscription()
            }).then(function(e) {
                if (e) return e.unsubscribe()
            })
        }
    }

    function A() {
        B["default"].warn("OneSignal: Unregistering service worker.");
        if (V["default"].isIframe()) return;
        if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return Promise.resolve();
        return navigator.serviceWorker.ready.then(function(e) {
            return e.unregister()
        })
    }

    function R() {
        return Promise.all([C(), A()])
    }

    function M(e) {
        return new Promise(function(n) {
            return setTimeout(n, e)
        })
    }

    function D(e, n) {
        return e.substr(e.indexOf(n) + n.length)
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    };
    n.isArray = r;
    n.isPushNotificationsSupportedAndWarn = a;
    n.decodeHtmlEntities = l;
    n.isPushNotificationsSupported = s;
    n.removeDomElement = u;
    n.addDomElement = c;
    n.clearDomElementChildren = f;
    n.addCssClass = d;
    n.removeCssClass = g;
    n.hasCssClass = p;
    n.on = h;
    n.getDeviceTypeForBrowser = b;
    n.once = v;
    n.off = m;
    n.getConsoleStyle = y;
    n.delay = S;
    n.nothing = w;
    n.executeAndTimeoutPromiseAfter = E;
    n.when = k;
    n.guid = O;
    n.contains = _;
    n.trimUndefined = I;
    n.normalizeSubdomain = T;
    n.getUrlQueryParam = P;
    n.wipeLocalIndexedDb = x;
    n.wipeIndexedDb = N;
    n.unsubscribeFromPush = C;
    n.wipeServiceWorker = A;
    n.wipeServiceWorkerAndUnsubscribe = R;
    n.wait = M;
    n.substringAfter = D;
    var L = t(2);
    var B = o(L);
    var W = t(6);
    var H = i(W);
    var j = t(4);
    var V = o(j);
    var F = t(16);
    var z = o(F);
    var G = t(7);
    var q = o(G);
    var K = null;
    var Y = {
        CHROME: 5,
        SAFARI: 7,
        FIREFOX: 8
    }
}, function(e, n, t) {
    var i, o;
    ! function(r, a) {
        "use strict";
        if ("object" == typeof e && e.exports && true) e.exports = a();
        else if (true) !(i = a, o = "function" == typeof i ? i.call(n, t, n, e) : i, void 0 !== o && (e.exports = o));
        else r.log = a()
    }(this, function() {
        "use strict";

        function e(e) {
            if (typeof console === l) return false;
            else if (void 0 !== console[e]) return n(console, e);
            else if (void 0 !== console.log) return n(console, "log");
            else return a
        }

        function n(e, n) {
            var t = e[n];
            if ("function" == typeof t.bind) return t.bind(e);
            else try {
                return Function.prototype.bind.call(t, e)
            } catch (i) {
                return function() {
                    return Function.prototype.apply.apply(t, [e, arguments])
                }
            }
        }

        function t(e, n, t) {
            return function() {
                if (typeof console !== l) {
                    i.call(this, n, t);
                    this[e].apply(this, arguments)
                }
            }
        }

        function i(e, n) {
            for (var t = 0; t < s.length; t++) {
                var i = s[t];
                this[i] = t < e ? a : this.methodFactory(i, e, n)
            }
        }

        function o(n, i, o) {
            return e(n) || t.apply(this, arguments)
        }

        function r(e, n, t) {
            function r(e) {
                var n = (s[e] || "silent").toUpperCase();
                try {
                    window.localStorage[f] = n;
                    return
                } catch (t) {}
                try {
                    window.document.cookie = encodeURIComponent(f) + "=" + n + ";"
                } catch (t) {}
            }

            function a() {
                var e;
                try {
                    e = window.localStorage[f]
                } catch (n) {}
                if (typeof e === l) try {
                    var t = window.document.cookie;
                    var i = t.indexOf(encodeURIComponent(f) + "=");
                    if (i) e = /^([^;]+)/.exec(t.slice(i))[1]
                } catch (n) {}
                if (void 0 === u.levels[e]) e = void 0;
                return e
            }
            var u = this;
            var c;
            var f = "loglevel";
            if (e) f += ":" + e;
            u.levels = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
            };
            u.methodFactory = t || o;
            u.getLevel = function() {
                return c
            };
            u.setLevel = function(n, t) {
                if ("string" == typeof n && void 0 !== u.levels[n.toUpperCase()]) n = u.levels[n.toUpperCase()];
                if ("number" == typeof n && n >= 0 && n <= u.levels.SILENT) {
                    c = n;
                    if (false !== t) r(n);
                    i.call(u, n, e);
                    if (typeof console === l && n < u.levels.SILENT) return "No console available for logging"
                } else throw "log.setLevel() called with invalid level: " + n
            };
            u.setDefaultLevel = function(e) {
                if (!a()) u.setLevel(e, false)
            };
            u.enableAll = function(e) {
                u.setLevel(u.levels.TRACE, e)
            };
            u.disableAll = function(e) {
                u.setLevel(u.levels.SILENT, e)
            };
            var d = a();
            if (null == d) d = null == n ? "WARN" : n;
            u.setLevel(d, false)
        }
        var a = function() {};
        var l = "undefined";
        var s = ["trace", "debug", "info", "warn", "error"];
        var u = new r;
        var c = {};
        u.getLogger = function d(e) {
            if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
            var n = c[e];
            if (!n) n = c[e] = new r(e, u.getLevel(), u.methodFactory);
            return n
        };
        var f = typeof window !== l ? window.log : void 0;
        u.noConflict = function() {
            if (typeof window !== l && window.log === u) window.log = f;
            return u
        };
        return u
    })
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var r = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var a = t(2);
    var l = i(a);
    var s = t(4);
    var u = i(s);
    var c = t(1);
    t(19);
    var f = ["notifyButtonHovering", "notifyButtonHover", "notifyButtonButtonClick", "notifyButtonLauncherClick", "animatedElementHiding", "aniamtedElementHidden", "animatedElementShowing", "animatedElementShown", "activeAnimatedElementActivating", "activeAnimatedElementActive", "activeAnimatedElementInactivating", "activeAnimatedElementInactive", "dbRetrieved", "dbSet"];
    var d = ["onesignal.prompt.custom.clicked", "onesignal.prompt.native.permissionchanged", "onesignal.subscription.changed", "onesignal.internal.subscriptionset", "dbRebuilt", "initialize", "subscriptionSet", "sendWelcomeNotification", "subscriptionChange", "notificationPermissionChange", "dbSet", "register", "notificationDisplay", "notificationDismiss", "permissionPromptDisplay"];
    var g = {
        notificationPermissionChange: "onesignal.prompt.native.permissionchanged",
        subscriptionChange: "onesignal.subscription.changed",
        customPromptClick: "onesignal.prompt.custom.clicked"
    };
    var p = function() {
        function e() {
            o(this, e)
        }
        r(e, null, [{
            key: "trigger",
            value: function n(t, i) {
                var o = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
                if (!(0, c.contains)(f, t)) {
                    var r = i;
                    if (o) var a = u["default"].getEnv().capitalize() + " ⬸ " + o.capitalize();
                    else var a = u["default"].getEnv().capitalize();
                    if (r || false === r) l["default"].debug("(" + a + ") » %c" + t + ":", (0, c.getConsoleStyle)("event"), r);
                    else l["default"].debug("(" + a + ") » %c" + t, (0, c.getConsoleStyle)("event"))
                }
                if (u["default"].isBrowser()) {
                    if (t === OneSignal.EVENTS.SDK_INITIALIZED)
                        if (OneSignal.initialized) return;
                        else OneSignal.initialized = true;
                    OneSignal.emit(t, i)
                }
                if (g.hasOwnProperty(t)) {
                    var s = g[t];
                    e._triggerLegacy(s, i)
                }
                if (!u["default"].isHost() && u["default"].isBrowser()) {
                    var p = opener || parent;
                    if (!p) l["default"].error("Could not send event '" + t + "' back to host page because no creator (opener or parent) found!");
                    else if ((0, c.contains)(d, t))
                        if (u["default"].isPopup()) OneSignal.popupPostmam.postMessage(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                            eventName: t,
                            eventData: i
                        });
                        else OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, {
                            eventName: t,
                            eventData: i
                        })
                }
            }
        }, {
            key: "_triggerLegacy",
            value: function t(e, n) {
                var t = new CustomEvent(e, {
                    bubbles: true,
                    cancelable: true,
                    detail: n
                });
                window.dispatchEvent(t)
            }
        }]);
        return e
    }();
    n["default"] = p
}, function(e, n, t) {
    "use strict";

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var o = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var r = t(1);
    var a = function() {
        function e() {
            i(this, e)
        }
        o(e, null, [{
            key: "getEnv",
            value: function n() {
                if ("undefined" == typeof window) {
                    if ("undefined" != typeof WorkerLocation && location instanceof WorkerLocation) return e.SERVICE_WORKER
                } else if (window === window.top)
                    if ((0, r.contains)(location.href, "initOneSignal") || "/subscribe" === location.pathname && "" === location.search) return e.POPUP;
                    else return e.HOST;
                else if ("/webPushIframe" === location.pathname || "/webPushModal" === location.pathname) return e.IFRAME
            }
        }, {
            key: "isServiceWorker",
            value: function t() {
                return e.getEnv() === e.SERVICE_WORKER
            }
        }, {
            key: "isHost",
            value: function a() {
                return e.getEnv() === e.HOST
            }
        }, {
            key: "isPopup",
            value: function l() {
                return e.getEnv() === e.POPUP
            }
        }, {
            key: "isIframe",
            value: function s() {
                return e.getEnv() === e.IFRAME
            }
        }, {
            key: "isBrowser",
            value: function u() {
                return "undefined" != typeof window
            }
        }, {
            key: "isDev",
            value: function c() {
                return false
            }
        }, {
            key: "isBeta",
            value: function f() {
                return false
            }
        }, {
            key: "isTest",
            value: function d() {
                return false
            }
        }, {
            key: "getLanguage",
            value: function g(n) {
                var t = n || navigator.language;
                if (t) {
                    t = t.toLowerCase();
                    var i = t.split("-");
                    if ("zh" == i[0]) {
                        var o = true;
                        var a = false;
                        var l = void 0;
                        try {
                            for (var s = e.TRADITIONAL_CHINESE_LANGUAGE_TAG[Symbol.iterator](), u; !(o = (u = s.next()).done); o = true) {
                                var c = u.value;
                                if ((0, r.contains)(i, c)) return "zh-Hant"
                            }
                        } catch (f) {
                            a = true;
                            l = f
                        } finally {
                            try {
                                if (!o && s["return"]) s["return"]()
                            } finally {
                                if (a) throw l
                            }
                        }
                        var d = true;
                        var g = false;
                        var p = void 0;
                        try {
                            for (var h = e.SIMPLIFIED_CHINESE_LANGUAGE_TAG[Symbol.iterator](), b; !(d = (b = h.next()).done); d = true) {
                                var v = b.value;
                                if ((0, r.contains)(i, v)) return "zh-Hans"
                            }
                        } catch (f) {
                            g = true;
                            p = f
                        } finally {
                            try {
                                if (!d && h["return"]) h["return"]()
                            } finally {
                                if (g) throw p
                            }
                        }
                        return "zh-Hant"
                    } else return i[0].substring(0, 2)
                } else return "en"
            }
        }, {
            key: "SERVICE_WORKER",
            get: function p() {
                return "ServiceWorker"
            }
        }, {
            key: "HOST",
            get: function h() {
                return "host"
            }
        }, {
            key: "POPUP",
            get: function b() {
                return "popup"
            }
        }, {
            key: "IFRAME",
            get: function v() {
                return "iFrame"
            }
        }, {
            key: "TRADITIONAL_CHINESE_LANGUAGE_TAG",
            get: function m() {
                return ["tw", "hant"]
            }
        }, {
            key: "SIMPLIFIED_CHINESE_LANGUAGE_TAG",
            get: function y() {
                return ["cn", "hans"]
            }
        }]);
        return e
    }();
    n["default"] = a
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    n.API_URL = n.HOST_URL = n.PROD_HOST = n.DEV_FRAME_HOST = n.DEV_HOST = void 0;
    var o = t(4);
    var r = i(o);
    var a = n.DEV_HOST = "https://oregon:3001";
    var l = n.DEV_FRAME_HOST = "https://washington.localhost:3001";
    var s = n.PROD_HOST = "https://onesignal.com";
    var u = n.HOST_URL = r["default"].isDev() ? a : s;
    var c = n.API_URL = (r["default"].isDev() ? a : s) + "/api/v1/"
}, function(e, n, t) {
    var i, o;
    ! function(r, a) {
        if ("undefined" != typeof e && e.exports) e.exports = a();
        else if (true) !(i = a, o = "function" == typeof i ? i.call(n, t, n, e) : i, void 0 !== o && (e.exports = o));
        else this[r] = a()
    }("bowser", function() {
        function e(e) {
            function t(n) {
                var t = e.match(n);
                return t && t.length > 1 && t[1] || ""
            }

            function i(n) {
                var t = e.match(n);
                return t && t.length > 1 && t[2] || ""
            }
            var o = t(/(ipod|iphone|ipad)/i).toLowerCase(),
                r = /like android/i.test(e),
                a = !r && /android/i.test(e),
                l = /nexus\s*[0-6]\s*/i.test(e),
                s = !l && /nexus\s*[0-9]+/i.test(e),
                u = /CrOS/.test(e),
                c = /silk/i.test(e),
                f = /sailfish/i.test(e),
                d = /tizen/i.test(e),
                g = /(web|hpw)os/i.test(e),
                p = /windows phone/i.test(e),
                h = !p && /windows/i.test(e),
                b = !o && !c && /macintosh/i.test(e),
                v = !a && !f && !d && !g && /linux/i.test(e),
                m = t(/edge\/(\d+(\.\d+)?)/i),
                y = t(/version\/(\d+(\.\d+)?)/i),
                S = /tablet/i.test(e),
                w = !S && /[^-]mobi/i.test(e),
                E = /xbox/i.test(e),
                k;
            if (/opera|opr|opios/i.test(e)) k = {
                name: "Opera",
                opera: n,
                version: y || t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
            };
            else if (/coast/i.test(e)) k = {
                name: "Opera Coast",
                coast: n,
                version: y || t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
            };
            else if (/yabrowser/i.test(e)) k = {
                name: "Yandex Browser",
                yandexbrowser: n,
                version: y || t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
            };
            else if (/ucbrowser/i.test(e)) k = {
                name: "UC Browser",
                ucbrowser: n,
                version: t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
            };
            else if (/mxios/i.test(e)) k = {
                name: "Maxthon",
                maxthon: n,
                version: t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
            };
            else if (/epiphany/i.test(e)) k = {
                name: "Epiphany",
                epiphany: n,
                version: t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
            };
            else if (/puffin/i.test(e)) k = {
                name: "Puffin",
                puffin: n,
                version: t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
            };
            else if (/sleipnir/i.test(e)) k = {
                name: "Sleipnir",
                sleipnir: n,
                version: t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
            };
            else if (/k-meleon/i.test(e)) k = {
                name: "K-Meleon",
                kMeleon: n,
                version: t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
            };
            else if (p) {
                k = {
                    name: "Windows Phone",
                    windowsphone: n
                };
                if (m) {
                    k.msedge = n;
                    k.version = m
                } else {
                    k.msie = n;
                    k.version = t(/iemobile\/(\d+(\.\d+)?)/i)
                }
            } else if (/msie|trident/i.test(e)) k = {
                name: "Internet Explorer",
                msie: n,
                version: t(/(?:msie |rv:)(\d+(\.\d+)?)/i)
            };
            else if (u) k = {
                name: "Chrome",
                chromeos: n,
                chromeBook: n,
                chrome: n,
                version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            };
            else if (/chrome.+? edge/i.test(e)) k = {
                name: "Microsoft Edge",
                msedge: n,
                version: m
            };
            else if (/vivaldi/i.test(e)) k = {
                name: "Vivaldi",
                vivaldi: n,
                version: t(/vivaldi\/(\d+(\.\d+)?)/i) || y
            };
            else if (f) k = {
                name: "Sailfish",
                sailfish: n,
                version: t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
            };
            else if (/seamonkey\//i.test(e)) k = {
                name: "SeaMonkey",
                seamonkey: n,
                version: t(/seamonkey\/(\d+(\.\d+)?)/i)
            };
            else if (/firefox|iceweasel|fxios/i.test(e)) {
                k = {
                    name: "Firefox",
                    firefox: n,
                    version: t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                };
                if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)) k.firefoxos = n
            } else if (c) k = {
                name: "Amazon Silk",
                silk: n,
                version: t(/silk\/(\d+(\.\d+)?)/i)
            };
            else if (/phantom/i.test(e)) k = {
                name: "PhantomJS",
                phantom: n,
                version: t(/phantomjs\/(\d+(\.\d+)?)/i)
            };
            else if (/blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e)) k = {
                name: "BlackBerry",
                blackberry: n,
                version: y || t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
            };
            else if (g) {
                k = {
                    name: "WebOS",
                    webos: n,
                    version: y || t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                };
                /touchpad\//i.test(e) && (k.touchpad = n)
            } else if (/bada/i.test(e)) k = {
                name: "Bada",
                bada: n,
                version: t(/dolfin\/(\d+(\.\d+)?)/i)
            };
            else if (d) k = {
                name: "Tizen",
                tizen: n,
                version: t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
            };
            else if (/qupzilla/i.test(e)) k = {
                name: "QupZilla",
                qupzilla: n,
                version: t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
            };
            else if (/chrome|crios|crmo/i.test(e)) k = {
                name: "Chrome",
                chrome: n,
                version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            };
            else if (a) k = {
                name: "Android",
                version: y
            };
            else if (/safari|applewebkit/i.test(e)) {
                k = {
                    name: "Safari",
                    safari: n
                };
                if (y) k.version = y
            } else if (o) {
                k = {
                    name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
                };
                if (y) k.version = y
            } else if (/googlebot/i.test(e)) k = {
                name: "Googlebot",
                googlebot: n,
                version: t(/googlebot\/(\d+(\.\d+))/i) || y
            };
            else k = {
                name: t(/^(.*)\/(.*) /),
                version: i(/^(.*)\/(.*) /)
            };
            if (!k.msedge && /(apple)?webkit/i.test(e)) {
                if (/(apple)?webkit\/537\.36/i.test(e)) {
                    k.name = k.name || "Blink";
                    k.blink = n
                } else {
                    k.name = k.name || "Webkit";
                    k.webkit = n
                }
                if (!k.version && y) k.version = y
            } else if (!k.opera && /gecko\//i.test(e)) {
                k.name = k.name || "Gecko";
                k.gecko = n;
                k.version = k.version || t(/gecko\/(\d+(\.\d+)?)/i)
            }
            if (!k.msedge && (a || k.silk)) k.android = n;
            else if (o) {
                k[o] = n;
                k.ios = n
            } else if (b) k.mac = n;
            else if (E) k.xbox = n;
            else if (h) k.windows = n;
            else if (v) k.linux = n;
            var O = "";
            if (k.windowsphone) O = t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
            else if (o) {
                O = t(/os (\d+([_\s]\d+)*) like mac os x/i);
                O = O.replace(/[_\s]/g, ".")
            } else if (a) O = t(/android[ \/-](\d+(\.\d+)*)/i);
            else if (k.webos) O = t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
            else if (k.blackberry) O = t(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
            else if (k.bada) O = t(/bada\/(\d+(\.\d+)*)/i);
            else if (k.tizen) O = t(/tizen[\/\s](\d+(\.\d+)*)/i);
            if (O) k.osversion = O;
            var _ = O.split(".")[0];
            if (S || s || "ipad" == o || a && (3 == _ || _ >= 4 && !w) || k.silk) k.tablet = n;
            else if (w || "iphone" == o || "ipod" == o || a || l || k.blackberry || k.webos || k.bada) k.mobile = n;
            if (k.msedge || k.msie && k.version >= 10 || k.yandexbrowser && k.version >= 15 || k.vivaldi && k.version >= 1 || k.chrome && k.version >= 20 || k.firefox && k.version >= 20 || k.safari && k.version >= 6 || k.opera && k.version >= 10 || k.ios && k.osversion && k.osversion.split(".")[0] >= 6 || k.blackberry && k.version >= 10.1) k.a = n;
            else if (k.msie && k.version < 10 || k.chrome && k.version < 20 || k.firefox && k.version < 20 || k.safari && k.version < 6 || k.opera && k.version < 10 || k.ios && k.osversion && k.osversion.split(".")[0] < 6) k.c = n;
            else k.x = n;
            return k
        }
        var n = true;
        var t = e("undefined" != typeof navigator ? navigator.userAgent : "");
        t.test = function(e) {
            for (var n = 0; n < e.length; ++n) {
                var i = e[n];
                if ("string" == typeof i)
                    if (i in t) return true
            }
            return false
        };
        t._detect = e;
        return t
    })
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var r = function() {
        function e(e, n) {
            var t = [];
            var i = true;
            var o = false;
            var r = void 0;
            try {
                for (var a = e[Symbol.iterator](), l; !(i = (l = a.next()).done); i = true) {
                    t.push(l.value);
                    if (n && t.length === n) break
                }
            } catch (s) {
                o = true;
                r = s
            } finally {
                try {
                    if (!i && a["return"]) a["return"]()
                } finally {
                    if (o) throw r
                }
            }
            return t
        }
        return function(n, t) {
            if (Array.isArray(n)) return n;
            else if (Symbol.iterator in Object(n)) return e(n, t);
            else throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    var a = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var l = t(2);
    var s = i(l);
    var u = t(11);
    var c = i(u);
    var f = t(10);
    var d = i(f);
    var g = t(3);
    var p = i(g);
    var h = t(1);
    var b = t(16);
    var v = i(b);
    var m = t(4);
    var y = i(m);
    var S = function() {
        function e() {
            o(this, e)
        }
        a(e, null, [{
            key: "_getReturnHelper",
            value: function n(e, t, i) {
                switch (e) {
                    case "Options":
                        if (i && t) return i.value;
                        else if (i && !t) return i;
                        else return null;
                        break;
                    case "Ids":
                        if (i && t) return i.id;
                        else if (i && !t) return i;
                        else return null;
                        break;
                    case "NotificationOpened":
                        if (i && t) return {
                            data: i.data,
                            timestamp: i.timestamp
                        };
                        else if (i && !t) return i;
                        else return null;
                        break;
                    default:
                        if (i) return i;
                        else return null
                }
            }
        }, {
            key: "get",
            value: function t(n, i) {
                return new Promise(function(t, o) {
                    var r = null;
                    if (!y["default"].isServiceWorker() && OneSignal.isUsingSubscriptionWorkaround()) OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{
                        table: n,
                        key: i
                    }], function(o) {
                        var r = o.data[0];
                        p["default"].trigger(e.EVENTS.RETRIEVED, {
                            table: n,
                            key: i,
                            result: r
                        });
                        t(r)
                    });
                    else return v["default"].get(n, i).then(function(o) {
                        var r = e._getReturnHelper(n, i, o);
                        p["default"].trigger(e.EVENTS.RETRIEVED, {
                            table: n,
                            key: i,
                            result: r
                        });
                        t(r)
                    })["catch"](function(e) {
                        return o(e)
                    })
                })
            }
        }, {
            key: "put",
            value: function i(n, t) {
                return new Promise(function(i, o) {
                    if (!y["default"].isServiceWorker() && OneSignal.isUsingSubscriptionWorkaround()) OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{
                        table: n,
                        keypath: t
                    }], function(r) {
                        if (r.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) {
                            p["default"].trigger(e.EVENTS.SET, t);
                            i()
                        } else o("(Database) Attempted remote IndexedDB put(" + n + ", " + t + "), but did not get success response.")
                    });
                    else return v["default"].put(n, t).then(function() {
                        p["default"].trigger(e.EVENTS.SET, t);
                        i()
                    })["catch"](function(e) {
                        return o(e)
                    })
                })
            }
        }, {
            key: "remove",
            value: function l(n, t) {
                return new Promise(function(i, o) {
                    if (!y["default"].isServiceWorker() && OneSignal.isUsingSubscriptionWorkaround()) OneSignal.iframePostmam.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{
                        table: n,
                        keypath: t
                    }], function(r) {
                        if (r.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) {
                            p["default"].trigger(e.EVENTS.REMOVED, [n, t]);
                            i()
                        } else o("(Database) Attempted remote IndexedDB remove(" + n + ", " + t + "), but did not get success response.")
                    });
                    else return v["default"].remove(n, t).then(function() {
                        p["default"].trigger(e.EVENTS.REMOVED, [n, t]);
                        i()
                    })["catch"](function(e) {
                        return o(e)
                    })
                })
            }
        }, {
            key: "rebuild",
            value: function s() {
                return Promise.all([e.remove("Ids"), e.remove("NotificationOpened"), e.remove("Options")])
            }
        }, {
            key: "printIds",
            value: function u() {
                return Promise.all([e.get("Ids", "appId"), e.get("Ids", "registrationId"), e.get("Ids", "userId")]).then(function(e) {
                    var n = r(e, 3);
                    var t = n[0];
                    var i = n[1];
                    var o = n[2];
                    console.info("appId:", t);
                    console.info("registrationId:", i);
                    console.info("userId:", o)
                })
            }
        }, {
            key: "EVENTS",
            get: function c() {
                return {
                    REBUILT: "dbRebuilt",
                    RETRIEVED: "dbRetrieved",
                    SET: "dbSet",
                    REMOVED: "dbRemoved"
                }
            }
        }]);
        return e
    }();
    n["default"] = S;
    d["default"].merge(S, new c["default"])
}, function(e, n) {
    "use strict";

    function t(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }

    function i() {
        try {
            if (!Object.assign) return false;
            var e = new String("abc");
            e[5] = "de";
            if ("5" === Object.getOwnPropertyNames(e)[0]) return false;
            var n = {};
            for (var t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
            var i = Object.getOwnPropertyNames(n).map(function(e) {
                return n[e]
            });
            if ("0123456789" !== i.join("")) return false;
            var o = {};
            "abcdefghijklmnopqrst".split("").forEach(function(e) {
                o[e] = e
            });
            if ("abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, o)).join("")) return false;
            return true
        } catch (r) {
            return false
        }
    }
    var o = Object.prototype.hasOwnProperty;
    var r = Object.prototype.propertyIsEnumerable;
    e.exports = i() ? Object.assign : function(e, n) {
        var i;
        var a = t(e);
        var l;
        for (var s = 1; s < arguments.length; s++) {
            i = Object(arguments[s]);
            for (var u in i)
                if (o.call(i, u)) a[u] = i[u];
            if (Object.getOwnPropertySymbols) {
                l = Object.getOwnPropertySymbols(i);
                for (var c = 0; c < l.length; c++)
                    if (r.call(i, l[c])) a[l[c]] = i[l[c]]
            }
        }
        return a
    }
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var r = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var a = t(1);
    var l = t(2);
    var s = i(l);
    var u = t(3);
    var c = i(u);
    var f = function() {
        function e(n, t, i) {
            var r = arguments.length <= 3 || void 0 === arguments[3] ? "shown" : arguments[3];
            var a = arguments.length <= 4 || void 0 === arguments[4] ? ["opacity", "transform"] : arguments[4];
            var l = arguments.length <= 5 || void 0 === arguments[5] ? null : arguments[5];
            o(this, e);
            this.selector = n;
            this.showClass = t;
            this.hideClass = i;
            this.state = r;
            this.targetTransitionEvents = a;
            this.nestedContentSelector = l;
            this.transitionCheckTimeout = 500
        }
        r(e, [{
            key: "show",
            value: function n() {
                var n = this;
                if (!this.hidden) return Promise.resolve(this);
                else return new Promise(function(t) {
                    var i = n;
                    n.state = "showing";
                    c["default"].trigger(e.EVENTS.SHOWING, n);
                    if (n.hideClass)(0, a.removeCssClass)(n.element, n.hideClass);
                    if (n.showClass)(0, a.addCssClass)(n.element, n.showClass);
                    if (0 == n.targetTransitionEvents.length) return t(n);
                    else {
                        var o = setTimeout(function() {
                            s["default"].warn(n.constructor.name + " did not completely show (state: " + n.state + ", activeState: " + n.activeState + ").")
                        }, n.transitionCheckTimeout);
                        (0, a.once)(n.element, "transitionend", function(i, r) {
                            if (i.target === n.element && (0, a.contains)(n.targetTransitionEvents, i.propertyName)) {
                                clearTimeout(o);
                                r();
                                n.state = "shown";
                                c["default"].trigger(e.EVENTS.SHOWN, n);
                                return t(n)
                            }
                        }, true)
                    }
                })
            }
        }, {
            key: "hide",
            value: function t() {
                var n = this;
                if (!this.shown) return Promise.resolve(this);
                else return new Promise(function(t) {
                    n.state = "hiding";
                    c["default"].trigger(e.EVENTS.HIDING, n);
                    if (n.showClass)(0, a.removeCssClass)(n.element, n.showClass);
                    if (n.hideClass)(0, a.addCssClass)(n.element, n.hideClass);
                    if (0 == n.targetTransitionEvents.length) return t(n);
                    else(0, a.once)(n.element, "transitionend", function(i, o) {
                        var r = setTimeout(function() {
                            s["default"].warn(n.constructor.name + " did not completely hide (state: " + n.state + ", activeState: " + n.activeState + ").")
                        }, n.transitionCheckTimeout);
                        if (i.target === n.element && (0, a.contains)(n.targetTransitionEvents, i.propertyName)) {
                            clearTimeout(r);
                            o();
                            n.state = "hidden";
                            c["default"].trigger(e.EVENTS.HIDDEN, n);
                            return t(n)
                        }
                    }, true)
                })
            }
        }, {
            key: "waitUntilShown",
            value: function i() {
                var n = this;
                if ("shown" === this.state) return Promise.resolve(this);
                else return new Promise(function(t) {
                    OneSignal.once(e.EVENTS.SHOWN, function(e) {
                        var i = n;
                        if (e === n) return t(n)
                    }, true)
                })
            }
        }, {
            key: "waitUntilHidden",
            value: function l() {
                var n = this;
                if ("hidden" === this.state) return Promise.resolve(this);
                else return new Promise(function(t) {
                    OneSignal.once(e.EVENTS.HIDDEN, function(e) {
                        if (e === n) return t(n)
                    }, true)
                })
            }
        }, {
            key: "content",
            get: function u() {
                if (this.nestedContentSelector) return this.element.querySelector(this.nestedContentSelector).innerHTML;
                else return this.element.innerHTML
            },
            set: function f(e) {
                if (this.nestedContentSelector) this.element.querySelector(this.nestedContentSelector).innerHTML = e;
                else this.element.innerHTML = e
            }
        }, {
            key: "element",
            get: function d() {
                return document.querySelector(this.selector)
            }
        }, {
            key: "showing",
            get: function g() {
                return "showing" === this.state
            }
        }, {
            key: "shown",
            get: function p() {
                return "shown" === this.state
            }
        }, {
            key: "hiding",
            get: function h() {
                return "hiding" === this.state
            }
        }, {
            key: "hidden",
            get: function b() {
                return "hidden" === this.state
            }
        }], [{
            key: "EVENTS",
            get: function v() {
                return {
                    SHOWING: "animatedElementShowing",
                    SHOWN: "animatedElementShown",
                    HIDING: "animatedElementHiding",
                    HIDDEN: "aniamtedElementHidden"
                }
            }
        }]);
        return e
    }();
    n["default"] = f
}, function(e, n, t) {
    var i, o;
    ! function(r, a, l) {
        if (true) !(i = l, o = "function" == typeof i ? i.call(n, t, n, e) : i, void 0 !== o && (e.exports = o));
        else if ("object" == typeof n) e.exports = l();
        else a[r] = l()
    }("heir", this, function() {
        "use strict";
        var e = {
            inherit: function n(t, i, o) {
                var r = t.prototype = e.createObject(i.prototype);
                r.constructor = t;
                if (o || "undefined" == typeof o) t._super = i.prototype
            },
            createObject: Object.create || function t(e) {
                var n = function() {};
                n.prototype = e;
                return new n
            },
            mixin: function i(n, t) {
                return e.merge(n.prototype, t)
            },
            merge: function o(e, n) {
                var t;
                for (t in n) e[t] = n[t]
            },
            hasOwn: function r(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }
        };
        return e
    })
}, function(e, n, t) {
    var i;
    (function() {
        "use strict";

        function n() {}

        function o(e, n) {
            var t = e.length;
            for (; t--;)
                if (e[t].listener === n) return t;
            return -1
        }

        function r(e) {
            return function n() {
                return this[e].apply(this, arguments)
            }
        }
        var a = n.prototype;
        var l = this;
        var s = l.EventEmitter;
        a.getListeners = function u(e) {
            var n = this._getEvents();
            var t;
            var i;
            if (e instanceof RegExp) {
                t = {};
                for (i in n)
                    if (n.hasOwnProperty(i) && e.test(i)) t[i] = n[i]
            } else t = n[e] || (n[e] = []);
            return t
        };
        a.flattenListeners = function c(e) {
            var n = [];
            var t;
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n
        };
        a.getListenersAsObject = function f(e) {
            var n = this.getListeners(e);
            var t;
            if (n instanceof Array) {
                t = {};
                t[e] = n
            }
            return t || n
        };
        a.addListener = function d(e, n) {
            var t = this.getListenersAsObject(e);
            var i = "object" == typeof n;
            var r;
            for (r in t)
                if (t.hasOwnProperty(r) && o(t[r], n) === -1) t[r].push(i ? n : {
                    listener: n,
                    once: false
                });
            return this
        };
        a.on = r("addListener");
        a.addOnceListener = function g(e, n) {
            return this.addListener(e, {
                listener: n,
                once: true
            })
        };
        a.once = r("addOnceListener");
        a.defineEvent = function p(e) {
            this.getListeners(e);
            return this
        };
        a.defineEvents = function h(e) {
            for (var n = 0; n < e.length; n += 1) this.defineEvent(e[n]);
            return this
        };
        a.removeListener = function b(e, n) {
            var t = this.getListenersAsObject(e);
            var i;
            var r;
            for (r in t)
                if (t.hasOwnProperty(r)) {
                    i = o(t[r], n);
                    if (i !== -1) t[r].splice(i, 1)
                }
            return this
        };
        a.off = r("removeListener");
        a.addListeners = function v(e, n) {
            return this.manipulateListeners(false, e, n)
        };
        a.removeListeners = function m(e, n) {
            return this.manipulateListeners(true, e, n)
        };
        a.manipulateListeners = function y(e, n, t) {
            var i;
            var o;
            var r = e ? this.removeListener : this.addListener;
            var a = e ? this.removeListeners : this.addListeners;
            if ("object" == typeof n && !(n instanceof RegExp)) {
                for (i in n)
                    if (n.hasOwnProperty(i) && (o = n[i]))
                        if ("function" == typeof o) r.call(this, i, o);
                        else a.call(this, i, o)
            } else {
                i = t.length;
                for (; i--;) r.call(this, n, t[i])
            }
            return this
        };
        a.removeEvent = function S(e) {
            var n = typeof e;
            var t = this._getEvents();
            var i;
            if ("string" === n) delete t[e];
            else if (e instanceof RegExp) {
                for (i in t)
                    if (t.hasOwnProperty(i) && e.test(i)) delete t[i]
            } else delete this._events;
            return this
        };
        a.removeAllListeners = r("removeEvent");
        a.emitEvent = function w(e, n) {
            var t = this.getListenersAsObject(e);
            var i;
            var o;
            var r;
            var a;
            var l;
            for (a in t)
                if (t.hasOwnProperty(a)) {
                    i = t[a].slice(0);
                    r = i.length;
                    for (; r--;) {
                        o = i[r];
                        if (true === o.once) this.removeListener(e, o.listener);
                        l = o.listener.apply(this, n || []);
                        if (l === this._getOnceReturnValue()) this.removeListener(e, o.listener)
                    }
                }
            return this
        };
        a.trigger = r("emitEvent");
        a.emit = function E(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, n)
        };
        a.setOnceReturnValue = function k(e) {
            this._onceReturnValue = e;
            return this
        };
        a._getOnceReturnValue = function O() {
            if (this.hasOwnProperty("_onceReturnValue")) return this._onceReturnValue;
            else return true
        };
        a._getEvents = function _() {
            return this._events || (this._events = {})
        };
        n.noConflict = function I() {
            l.EventEmitter = s;
            return n
        };
        if (true) !(i = function() {
            return n
        }.call(l, t, l, e), void 0 !== i && (e.exports = i));
        else if ("object" == typeof e && e.exports) e.exports = n;
        else l.EventEmitter = n
    }).call(this)
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n && ("object" == typeof n || "function" == typeof n) ? n : e
    }

    function a(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (n) Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var l = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var s = t(1);
    var u = t(2);
    var c = i(u);
    var f = t(3);
    var d = i(f);
    var g = t(9);
    var p = i(g);
    var h = t(8);
    var b = i(h);
    var v = function(e) {
        function n(e, t, i, a, l) {
            var s = arguments.length <= 5 || void 0 === arguments[5] ? "shown" : arguments[5];
            var u = arguments.length <= 6 || void 0 === arguments[6] ? "active" : arguments[6];
            var c = arguments.length <= 7 || void 0 === arguments[7] ? ["opacity", "transform"] : arguments[7];
            var f = arguments.length <= 8 || void 0 === arguments[8] ? null : arguments[8];
            o(this, n);
            var d = r(this, Object.getPrototypeOf(n).call(this, e, t, i, s, c, f));
            d.activeClass = a;
            d.inactiveClass = l;
            d.activeState = u;
            return d
        }
        a(n, e);
        l(n, [{
            key: "activate",
            value: function t() {
                var e = this;
                if (!this.inactive || !this.shown) return Promise.resolve(this);
                else return new Promise(function(t) {
                    e.activeState = "activating";
                    d["default"].trigger(n.EVENTS.ACTIVATING, e);
                    if (e.inactiveClass)(0, s.removeCssClass)(e.element, e.inactiveClass);
                    if (e.activeClass)(0, s.addCssClass)(e.element, e.activeClass);
                    if (e.shown)
                        if (0 == e.targetTransitionEvents.length) return t(e);
                        else {
                            var i = setTimeout(function() {
                                c["default"].warn(e.constructor.name + " did not completely activate (state: " + e.state + ", activeState: " + e.activeState + ").")
                            }, e.transitionCheckTimeout);
                            (0, s.once)(e.element, "transitionend", function(o, r) {
                                if (o.target === e.element && (0, s.contains)(e.targetTransitionEvents, o.propertyName)) {
                                    clearTimeout(i);
                                    r();
                                    e.activeState = "active";
                                    d["default"].trigger(n.EVENTS.ACTIVE, e);
                                    return t(e)
                                }
                            }, true)
                        }
                    else {
                        call.warn("Ending activate() transition (alternative).");
                        e.activeState = "active";
                        d["default"].trigger(n.EVENTS.ACTIVE, e);
                        return t(e)
                    }
                })
            }
        }, {
            key: "inactivate",
            value: function i() {
                var e = this;
                if (!this.active) return Promise.resolve(this);
                else return new Promise(function(t) {
                    e.activeState = "inactivating";
                    d["default"].trigger(n.EVENTS.INACTIVATING, e);
                    if (e.activeClass)(0, s.removeCssClass)(e.element, e.activeClass);
                    if (e.inactiveClass)(0, s.addCssClass)(e.element, e.inactiveClass);
                    if (e.shown)
                        if (0 == e.targetTransitionEvents.length) return t(e);
                        else {
                            var i = setTimeout(function() {
                                c["default"].warn(e.constructor.name + " did not completely inactivate (state: " + e.state + ", activeState: " + e.activeState + ").")
                            }, e.transitionCheckTimeout);
                            (0, s.once)(e.element, "transitionend", function(o, r) {
                                if (o.target === e.element && (0, s.contains)(e.targetTransitionEvents, o.propertyName)) {
                                    clearTimeout(i);
                                    r();
                                    e.activeState = "inactive";
                                    d["default"].trigger(n.EVENTS.INACTIVE, e);
                                    return t(e)
                                }
                            }, true)
                        }
                    else {
                        e.activeState = "inactive";
                        d["default"].trigger(n.EVENTS.INACTIVE, e);
                        return t(e)
                    }
                })
            }
        }, {
            key: "waitUntilActive",
            value: function u() {
                var e = this;
                if (this.active) return Promise.resolve(this);
                else return new Promise(function(t) {
                    OneSignal.once(n.EVENTS.ACTIVE, function(n) {
                        if (n === e) return t(e)
                    }, true)
                })
            }
        }, {
            key: "waitUntilInactive",
            value: function f() {
                var e = this;
                if (this.inactive) return Promise.resolve(this);
                else return new Promise(function(t) {
                    OneSignal.once(n.EVENTS.INACTIVE, function(n) {
                        if (n === e) return t(e)
                    }, true)
                })
            }
        }, {
            key: "activating",
            get: function g() {
                return "activating" === this.activeState
            }
        }, {
            key: "active",
            get: function h() {
                return "active" === this.activeState
            }
        }, {
            key: "inactivating",
            get: function v() {
                return "inactivating" === this.activeState
            }
        }, {
            key: "inactive",
            get: function m() {
                return "inactive" === this.activeState
            }
        }], [{
            key: "EVENTS",
            get: function y() {
                return (0, b["default"])({}, p["default"].EVENTS, {
                    ACTIVATING: "activeAnimatedElementActivating",
                    ACTIVE: "activeAnimatedElementActive",
                    INACTIVATING: "activeAnimatedElementInactivating",
                    INACTIVE: "activeAnimatedElementInactive"
                })
            }
        }]);
        return n
    }(p["default"]);
    n["default"] = v
}, function(e, n, t) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        else {
            var n = {};
            if (null != e)
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) n[t] = e[t];
            n["default"] = e;
            return n
        }
    }

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var a = function() {
        function e(e, n) {
            var t = [];
            var i = true;
            var o = false;
            var r = void 0;
            try {
                for (var a = e[Symbol.iterator](), l; !(i = (l = a.next()).done); i = true) {
                    t.push(l.value);
                    if (n && t.length === n) break
                }
            } catch (s) {
                o = true;
                r = s
            } finally {
                try {
                    if (!i && a["return"]) a["return"]()
                } finally {
                    if (o) throw r
                }
            }
            return t
        }
        return function(n, t) {
            if (Array.isArray(n)) return n;
            else if (Symbol.iterator in Object(n)) return e(n, t);
            else throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    var l = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var s = t(1);
    var u = t(4);
    var c = o(u);
    var f = t(2);
    var d = o(f);
    var g = t(3);
    var p = o(g);
    var h = t(6);
    var b = i(h);
    var v = t(5);
    var m = t(9);
    var y = o(m);
    var S = t(12);
    var w = o(S);
    var E = t(7);
    var k = o(E);
    var O = t(14);
    var _ = o(O);
    var I = t(35);
    var T = o(I);
    var P = t(32);
    var x = o(P);
    var N = t(33);
    var C = o(N);
    var A = t(34);
    var R = o(A);
    var M = t(24);
    var D = o(M);
    t(44);
    var U = t(43);
    var L = function() {
        function e() {
            var n = this;
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            var i = t.enable;
            var o = void 0 === i ? false : i;
            var a = t.size;
            var l = void 0 === a ? "medium" : a;
            var u = t.position;
            var c = void 0 === u ? "bottom-right" : u;
            var f = t.theme;
            var d = void 0 === f ? "default" : f;
            var g = t.showLauncherAfter;
            var p = void 0 === g ? 10 : g;
            var h = t.showBadgeAfter;
            var b = void 0 === h ? 300 : h;
            var v = t.text;
            var m = void 0 === v ? {
                "tip.state.unsubscribed": "Subscribe to notifications",
                "tip.state.subscribed": "You're subscribed to notifications",
                "tip.state.blocked": "You've blocked notifications",
                "message.prenotify": "Click to subscribe to notifications",
                "message.action.subscribing": "Click <strong>{{prompt.native.grant}}</strong> to receive notifications",
                "message.action.subscribed": "Thanks for subscribing!",
                "message.action.resubscribed": "You're subscribed to notifications",
                "message.action.unsubscribed": "You won't receive notifications again",
                "dialog.main.title": "Manage Site Notifications",
                "dialog.main.button.subscribe": "SUBSCRIBE",
                "dialog.main.button.unsubscribe": "UNSUBSCRIBE",
                "dialog.blocked.title": "Unblock Notifications",
                "dialog.blocked.message": "Follow these instructions to allow notifications:"
            } : v;
            var y = t.prenotify;
            var S = void 0 === y ? true : y;
            var w = t.showCredit;
            var E = void 0 === w ? true : w;
            var k = t.colors;
            var O = void 0 === k ? null : k;
            var I = t.offset;
            var T = void 0 === I ? null : I;
            r(this, e);
            this.options = {
                enable: o,
                size: l,
                position: c,
                theme: d,
                showLauncherAfter: p,
                showBadgeAfter: b,
                text: m,
                prenotify: S,
                showCredit: E,
                colors: O,
                offset: T
            };
            if (!this.options.enable) return;
            if (!(0, s.contains)(["small", "medium", "large"], this.options.size)) throw new Error("Invalid size " + this.options.size + " for notify button. Choose among 'small', 'medium', or 'large'.");
            if (!(0, s.contains)(["bottom-left", "bottom-right"], this.options.position)) throw new Error("Invalid position " + this.options.position + " for notify button. Choose either 'bottom-left', or 'bottom-right'.");
            if (!(0, s.contains)(["default", "inverse"], this.options.theme)) throw new Error("Invalid theme " + this.options.theme + " for notify button. Choose either 'default', or 'inverse'.");
            if (this.options.showLauncherAfter < 0) throw new Error("Invalid delay duration of " + this.options.showLauncherAfter + " for showing the notify button. Choose a value above 0.");
            if (this.options.showBadgeAfter < 0) throw new Error("Invalid delay duration of " + this.options.showBadgeAfter + " for showing the notify button's badge. Choose a value above 0.");
            this.size = this.options.size;
            this.position = this.options.position;
            this.text = this.options.text;
            if (!this.text["tip.state.unsubscribed"]) this.text["tip.state.unsubscribed"] = "Subscribe to notifications";
            if (!this.text["tip.state.subscribed"]) this.text["tip.state.subscribed"] = "You're subscribed to notifications";
            if (!this.text["tip.state.blocked"]) this.text["tip.state.blocked"] = "You've blocked notifications";
            if (!this.text["message.prenotify"]) this.text["message.prenotify"] = "Click to subscribe to notifications";
            if (!this.text["message.action.subscribed"]) this.text["message.action.subscribed"] = "Thanks for subscribing!";
            if (!this.text["message.action.resubscribed"]) this.text["message.action.resubscribed"] = "You're subscribed to notifications";
            if (!this.text["message.action.subscribing"]) this.text["message.action.subscribing"] = "Click <strong>{{prompt.native.grant}}</strong> to receive notifications";
            if (!this.text["message.action.unsubscribed"]) this.text["message.action.unsubscribed"] = "You won't receive notifications again";
            if (!this.text["dialog.main.title"]) this.text["dialog.main.title"] = "Manage Site Notifications";
            if (!this.text["dialog.main.button.subscribe"]) this.text["dialog.main.button.subscribe"] = "SUBSCRIBE";
            if (!this.text["dialog.main.button.unsubscribe"]) this.text["dialog.main.button.unsubscribe"] = "UNSUBSCRIBE";
            if (!this.text["dialog.blocked.title"]) this.text["dialog.blocked.title"] = "Unblock Notifications";
            if (!this.text["dialog.blocked.message"]) this.text["dialog.blocked.message"] = "Follow these instructions to allow notifications:";
            this.substituteText();
            this.state = e.STATES.UNINITIALIZED;
            this._ignoreSubscriptionState = false;
            OneSignal.on(e.EVENTS.SUBSCRIBE_CLICK, function() {
                n.dialog.subscribeButton.disabled = true;
                n._ignoreSubscriptionState = true;
                OneSignal.setSubscription(true).then(function() {
                    n.dialog.subscribeButton.disabled = false;
                    return n.dialog.hide()
                }).then(function() {
                    return n.message.display(D["default"].TYPES.MESSAGE, n.text["message.action.resubscribed"], D["default"].TIMEOUT)
                }).then(function() {
                    n._ignoreSubscriptionState = false;
                    n.launcher.clearIfWasInactive();
                    return n.launcher.inactivate()
                }).then(function() {
                    return n.updateState()
                })
            });
            OneSignal.on(e.EVENTS.UNSUBSCRIBE_CLICK, function() {
                n.dialog.unsubscribeButton.disabled = true;
                OneSignal.setSubscription(false).then(function() {
                    n.dialog.unsubscribeButton.disabled = false;
                    return n.dialog.hide()
                }).then(function() {
                    n.launcher.clearIfWasInactive();
                    return n.launcher.activate()
                }).then(function() {
                    return n.message.display(D["default"].TYPES.MESSAGE, n.text["message.action.unsubscribed"], D["default"].TIMEOUT)
                }).then(function() {
                    return n.updateState()
                })
            });
            OneSignal.on(e.EVENTS.HOVERING, function() {
                n.hovering = true;
                n.launcher.activateIfInactive();
                if (n.message.shown || n.dialog.shown) {
                    n.hovering = false;
                    return
                }
                if (n.message.contentType === D["default"].TYPES.MESSAGE) {
                    n.hovering = false;
                    return
                }
                new Promise(function(e, t) {
                    if (n.message.queued.length > 0) return n.message.dequeue().then(function(t) {
                        n.message.content = t;
                        n.message.contentType = D["default"].TYPES.QUEUED;
                        e()
                    });
                    else {
                        n.message.content = (0, s.decodeHtmlEntities)(n.message.getTipForState());
                        n.message.contentType = D["default"].TYPES.TIP;
                        e()
                    }
                }).then(function() {
                    return n.message.show()
                }).then(function() {
                    n.hovering = false
                })
            });
            OneSignal.on(e.EVENTS.HOVERED, function() {
                if (n.message.contentType === D["default"].TYPES.MESSAGE) return;
                if (!n.dialog.hidden) return;
                if (n.hovering) {
                    n.hovering = false;
                    n.message.waitUntilShown().then(function() {
                        return (0, s.delay)(D["default"].TIMEOUT)
                    }).then(function() {
                        return n.message.hide()
                    }).then(function() {
                        if (n.launcher.wasInactive && n.dialog.hidden) {
                            n.launcher.inactivate();
                            n.launcher.wasInactive = null
                        }
                    })
                }
                if (n.message.shown) n.message.hide().then(function() {
                    if (n.launcher.wasInactive && n.dialog.hidden) {
                        n.launcher.inactivate();
                        n.launcher.wasInactive = null
                    }
                })
            });
            OneSignal.on(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, function(t) {
                if (true == t) {
                    if (n.badge.shown && n.options.prenotify) n.badge.hide();
                    if (null === n.dialog.notificationIcons) _["default"].getNotificationIcons().then(function(e) {
                        n.dialog.notificationIcons = e
                    })
                }
                OneSignal.getNotificationPermission(function(i) {
                    n.setState(t ? e.STATES.SUBSCRIBED : "denied" === i ? e.STATES.BLOCKED : e.STATES.UNSUBSCRIBED, n._ignoreSubscriptionState)
                })
            });
            OneSignal.on(e.EVENTS.STATE_CHANGED, function(t) {
                if (t.to === e.STATES.SUBSCRIBED) n.launcher.inactivate();
                else if (t.to === e.STATES.UNSUBSCRIBED || e.STATES.BLOCKED) n.launcher.activate()
            });
            OneSignal.on(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, function(e, t) {
                n.updateState()
            });
            this.updateState()
        }
        l(e, [{
            key: "substituteText",
            value: function n() {
                for (var n in this.text)
                    if (this.text.hasOwnProperty(n)) {
                        var t = this.text[n];
                        var i = b.name.toLowerCase();
                        for (var o in e.TEXT_SUBS)
                            if (e.TEXT_SUBS.hasOwnProperty(o)) {
                                var r = e.TEXT_SUBS[o];
                                var a = r[i];
                                if (t && (0, s.contains)(t, "{{")) this.text[n] = t.replace("{{" + o + "}}", void 0 !== a ? a : r["default"])
                            }
                    }
            }
        }], [{
            key: "EVENTS",
            get: function t() {
                return {
                    STATE_CHANGED: "notifyButtonStateChange",
                    LAUNCHER_CLICK: "notifyButtonLauncherClick",
                    BELL_CLICK: "notifyButtonButtonClick",
                    SUBSCRIBE_CLICK: "notifyButtonSubscribeClick",
                    UNSUBSCRIBE_CLICK: "notifyButtonUnsubscribeClick",
                    HOVERING: "notifyButtonHovering",
                    HOVERED: "notifyButtonHover"
                }
            }
        }, {
            key: "STATES",
            get: function i() {
                return {
                    UNINITIALIZED: "uninitialized",
                    SUBSCRIBED: "subscribed",
                    UNSUBSCRIBED: "unsubscribed",
                    BLOCKED: "blocked"
                }
            }
        }, {
            key: "TEXT_SUBS",
            get: function o() {
                return {
                    "prompt.native.grant": {
                        "default": "Allow",
                        chrome: "Allow",
                        firefox: "Always Receive Notifications",
                        safari: "Allow"
                    }
                }
            }
        }]);
        l(e, [{
            key: "showDialogProcedure",
            value: function u() {
                var e = this;
                if (!this.dialog.shown) this.dialog.show().then(function(n) {
                    (0, s.once)(document, "click", function(n, t) {
                        var i = e.dialog.element.contains(n.target);
                        if (i);
                        else {
                            t();
                            if (e.dialog.shown) e.dialog.hide().then(function(n) {
                                e.launcher.inactivateIfWasInactive()
                            })["catch"](function(e) {
                                d["default"].error(e)
                            })
                        }
                    }, true)
                })["catch"](function(e) {
                    d["default"].error(e)
                })
            }
        }, {
            key: "create",
            value: function c() {
                var e = this;
                if (!(0, s.isPushNotificationsSupported)()) return;
                if (!this.options.enable) return;
                if (this.container)(0, s.removeDomElement)("#onesignal-bell-container");
                window.addDomElement = s.addDomElement;
                (0, s.addDomElement)("body", "beforeend", '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>');
                (0, s.addDomElement)(this.container, "beforeend", '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>');
                (0, s.addDomElement)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-button"></div>');
                (0, s.addDomElement)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-badge"></div>');
                (0, s.addDomElement)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-message"></div>');
                (0, s.addDomElement)(this.message.selector, "beforeend", '<div class="onesignal-bell-launcher-message-body"></div>');
                (0, s.addDomElement)(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog"></div>');
                (0, s.addDomElement)(this.dialog.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog-body"></div>');
                (0, s.addDomElement)(this.button.selector, "beforeEnd", U);
                Promise.all([OneSignal.isPushNotificationsEnabled(), OneSignal.getSubscription(), k["default"].get("Options", "popoverDoNotPrompt")]).then(function(n) {
                    var t = a(n, 3);
                    var i = t[0];
                    var o = t[1];
                    var r = t[2];
                    var l = i ? "small" : e.options.size;
                    e.launcher.resize(l).then(function() {
                        if ("bottom-left" === e.options.position) {
                            (0, s.addCssClass)(e.container, "onesignal-bell-container-bottom-left");
                            (0, s.addCssClass)(e.launcher.selector, "onesignal-bell-launcher-bottom-left")
                        } else if ("bottom-right" === e.options.position) {
                            (0, s.addCssClass)(e.container, "onesignal-bell-container-bottom-right");
                            (0, s.addCssClass)(e.launcher.selector, "onesignal-bell-launcher-bottom-right")
                        } else throw new Error("Invalid OneSignal notify button position " + e.options.position);
                        if ("default" === e.options.theme)(0, s.addCssClass)(e.launcher.selector, "onesignal-bell-launcher-theme-default");
                        else if ("inverse" === e.options.theme)(0, s.addCssClass)(e.launcher.selector, "onesignal-bell-launcher-theme-inverse");
                        else throw new Error("Invalid OneSignal notify button theme " + e.options.theme);
                        e.applyOffsetIfSpecified();
                        e.setCustomColorsIfSpecified();
                        e.patchSafariSvgFilterBug();
                        d["default"].info("Showing the notify button.");
                        (i ? e.launcher.inactivate() : (0, s.nothing)()).then(function() {
                            if (i && null === e.dialog.notificationIcons) return _["default"].getNotificationIcons().then(function(n) {
                                e.dialog.notificationIcons = n
                            });
                            else return (0, s.nothing)()
                        }).then(function() {
                            return (0, s.delay)(e.options.showLauncherAfter)
                        }).then(function() {
                            if (OneSignal.isUsingSubscriptionWorkaround() && o && true !== r && !i && true === OneSignal.config.autoRegister && !_["default"].isHttpPromptAlreadyShown()) {
                                d["default"].debug("Not showing notify button because popover will be shown.");
                                return (0, s.nothing)()
                            } else return e.launcher.show()
                        }).then(function() {
                            return (0, s.delay)(e.options.showBadgeAfter)
                        }).then(function() {
                            if (e.options.prenotify && !i && OneSignal._isNewVisitor) return e.message.enqueue(e.text["message.prenotify"]).then(function() {
                                return e.badge.show()
                            });
                            else return (0, s.nothing)()
                        }).then(function() {
                            return e.initialized = true
                        })["catch"](function(e) {
                            return d["default"].error(e)
                        })
                    })["catch"](function(e) {
                        return d["default"].error(e)
                    })
                })
            }
        }, {
            key: "patchSafariSvgFilterBug",
            value: function f() {
                if (!(b.safari && Number(b.version) >= 9.1)) {
                    var e = "drop-shadow(0 2px 4px rgba(34,36,38,0.35));";
                    var n = "drop-shadow(0 2px 4px rgba(34,36,38,0));";
                    var t = "drop-shadow(0px 2px 2px rgba(34,36,38,.15));";
                    this.graphic.setAttribute("style", "filter: " + e + "; -webkit-filter: " + e + ";");
                    this.badge.element.setAttribute("style", "filter: " + n + "; -webkit-filter: " + n + ";");
                    this.dialog.element.setAttribute("style", "filter: " + t + "; -webkit-filter: " + t + ";")
                }
                if (b.safari) this.badge.element.setAttribute("style", "display: none;")
            }
        }, {
            key: "applyOffsetIfSpecified",
            value: function g() {
                var e = this.options.offset;
                if (e) {
                    this.launcher.element.style.cssText = "";
                    if (e.bottom) this.launcher.element.style.cssText += "bottom: " + e.bottom + ";";
                    if ("bottom-right" === this.options.position) {
                        if (e.right) this.launcher.element.style.cssText += "right: " + e.right + ";"
                    } else if ("bottom-left" === this.options.position)
                        if (e.left) this.launcher.element.style.cssText += "left: " + e.left + ";"
                }
            }
        }, {
            key: "setCustomColorsIfSpecified",
            value: function h() {
                var e = this.dialog.element.querySelector("button.action");
                var n = this.button.element.querySelector(".pulse-ring");
                this.graphic.querySelector(".background").style.cssText = "";
                var t = this.graphic.querySelectorAll(".foreground");
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.style.cssText = ""
                }
                this.graphic.querySelector(".stroke").style.cssText = "";
                this.badge.element.style.cssText = "";
                if (e) {
                    e.style.cssText = "";
                    e.style.cssText = ""
                }
                if (n) n.style.cssText = "";
                if (this.options.colors) {
                    var r = this.options.colors;
                    if (r["circle.background"]) this.graphic.querySelector(".background").style.cssText += "fill: " + r["circle.background"];
                    if (r["circle.foreground"]) {
                        var a = this.graphic.querySelectorAll(".foreground");
                        for (var l = 0; l < a.length; l++) {
                            var s = a[l];
                            s.style.cssText += "fill: " + r["circle.foreground"]
                        }
                        this.graphic.querySelector(".stroke").style.cssText += "stroke: " + r["circle.foreground"]
                    }
                    if (r["badge.background"]) this.badge.element.style.cssText += "background: " + r["badge.background"];
                    if (r["badge.bordercolor"]) this.badge.element.style.cssText += "border-color: " + r["badge.bordercolor"];
                    if (r["badge.foreground"]) this.badge.element.style.cssText += "color: " + r["badge.foreground"];
                    if (e) {
                        if (r["dialog.button.background"]) this.dialog.element.querySelector("button.action").style.cssText += "background: " + r["dialog.button.background"];
                        if (r["dialog.button.foreground"]) this.dialog.element.querySelector("button.action").style.cssText += "color: " + r["dialog.button.foreground"];
                        if (r["dialog.button.background.hovering"]) this.addCssToHead("onesignal-background-hover-style", "#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: " + r["dialog.button.background.hovering"] + " !important; }");
                        if (r["dialog.button.background.active"]) this.addCssToHead("onesignal-background-active-style", "#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: " + r["dialog.button.background.active"] + " !important; }")
                    }
                    if (n)
                        if (r["pulse.color"]) this.button.element.querySelector(".pulse-ring").style.cssText = "border-color: " + r["pulse.color"]
                }
            }
        }, {
            key: "addCssToHead",
            value: function v(e, n) {
                var t = document.getElementById(e);
                if (t) return;
                var i = document.createElement("style");
                i.id = e;
                i.type = "text/css";
                if (i.styleSheet) i.styleSheet.cssText = n;
                else i.appendChild(document.createTextNode(n));
                document.head.appendChild(i)
            }
        }, {
            key: "updateState",
            value: function m() {
                var n = this;
                Promise.all([OneSignal.isPushNotificationsEnabled(), OneSignal.getNotificationPermission()]).then(function(t) {
                    var i = a(t, 2);
                    var o = i[0];
                    var r = i[1];
                    n.setState(o ? e.STATES.SUBSCRIBED : e.STATES.UNSUBSCRIBED);
                    if ("denied" === r) n.setState(e.STATES.BLOCKED)
                })
            }
        }, {
            key: "setState",
            value: function y(n) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? false : arguments[1];
                var i = this.state;
                this.state = n;
                if (i !== n && !t) p["default"].trigger(e.EVENTS.STATE_CHANGED, {
                    from: i,
                    to: n
                })
            }
        }, {
            key: "container",
            get: function S() {
                return document.querySelector("#onesignal-bell-container")
            }
        }, {
            key: "graphic",
            get: function w() {
                return this.button.element.querySelector("svg")
            }
        }, {
            key: "launcher",
            get: function E() {
                if (!this._launcher) this._launcher = new T["default"](this);
                return this._launcher
            }
        }, {
            key: "button",
            get: function O() {
                if (!this._button) this._button = new C["default"](this);
                return this._button
            }
        }, {
            key: "badge",
            get: function I() {
                if (!this._badge) this._badge = new x["default"](this);
                return this._badge
            }
        }, {
            key: "message",
            get: function P() {
                if (!this._message) this._message = new D["default"](this);
                return this._message
            }
        }, {
            key: "dialog",
            get: function N() {
                if (!this._dialog) this._dialog = new R["default"](this);
                return this._dialog
            }
        }, {
            key: "subscribed",
            get: function A() {
                return this.state === e.STATES.SUBSCRIBED
            }
        }, {
            key: "unsubscribed",
            get: function M() {
                return this.state === e.STATES.UNSUBSCRIBED
            }
        }, {
            key: "blocked",
            get: function L() {
                return this.state === e.STATES.BLOCKED
            }
        }]);
        return e
    }();
    n["default"] = L
}, function(e, n, t) {
    (function(e) {
        "use strict";

        function i(e) {
            if (e && e.__esModule) return e;
            else {
                var n = {};
                if (null != e)
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) n[t] = e[t];
                n["default"] = e;
                return n
            }
        }

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        };
        var l = function() {
            function e(e, n) {
                var t = [];
                var i = true;
                var o = false;
                var r = void 0;
                try {
                    for (var a = e[Symbol.iterator](), l; !(i = (l = a.next()).done); i = true) {
                        t.push(l.value);
                        if (n && t.length === n) break
                    }
                } catch (s) {
                    o = true;
                    r = s
                } finally {
                    try {
                        if (!i && a["return"]) a["return"]()
                    } finally {
                        if (o) throw r
                    }
                }
                return t
            }
            return function(n, t) {
                if (Array.isArray(n)) return n;
                else if (Symbol.iterator in Object(n)) return e(n, t);
                else throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        var s = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n
            }
        }();
        var u = t(5);
        var c = t(4);
        var f = o(c);
        t(19);
        var d = t(18);
        var g = o(d);
        var p = t(2);
        var h = o(p);
        var b = t(17);
        var v = o(b);
        var m = t(3);
        var y = o(m);
        var S = t(7);
        var w = o(S);
        var E = t(6);
        var k = i(E);
        var O = t(1);
        var _ = t(8);
        var I = o(_);
        var T = t(11);
        var P = o(T);
        var x = t(10);
        var N = o(x);
        var C = t(21);
        var A = o(C);
        var R = t(23);
        var M = o(R);
        var D = t(25);
        var U = o(D);
        var L = t(28);
        var B = o(L);
        var W = function() {
            function n() {
                r(this, n)
            }
            s(n, null, [{
                key: "fixWordpressManifestIfMisplaced",
                value: function t() {
                    var e = document.querySelectorAll("link[rel=manifest]");
                    if (!e || e.length <= 1) return;
                    for (var n = 0; n < e.length; n++) {
                        var t = e[n];
                        var i = t.href;
                        if ((0, O.contains)(i, "gcm_sender_id")) {
                            document.querySelector("head").insertBefore(t, document.querySelector("head").children[0]);
                            h["default"].warn("OneSignal: Moved the WordPress push <manifest> to the first element in <head>.")
                        }
                    }
                }
            }, {
                key: "getNotificationTypeFromOptIn",
                value: function i(e) {
                    if (true == e || null == e) return 1;
                    else return -2
                }
            }, {
                key: "beginTemporaryBrowserSession",
                value: function o() {
                    h["default"].debug("OneSignal: Marking browser session as continuing.");
                    sessionStorage.setItem("ONE_SIGNAL_SESSION", true);
                    if (f["default"].isPopup()) {
                        if (!M["default"].popupPostmam) return;
                        M["default"].popupPostmam.postMessage(M["default"].POSTMAM_COMMANDS.BEGIN_BROWSING_SESSION)
                    }
                }
            }, {
                key: "markHttpsNativePromptDismissed",
                value: function u() {
                    h["default"].debug("OneSignal: User dismissed the native notification prompt; storing flag.");
                    return B["default"].set("onesignal-notification-prompt", "dismissed")
                }
            }, {
                key: "unmarkHttpsNativePromptDismissed",
                value: function c() {
                    if (B["default"].remove("onesignal-notification-prompt")) h["default"].debug("OneSignal: Removed the native notification prompt dismissed cookie.");
                    else h["default"].debug("OneSignal: Cookie not marked.")
                }
            }, {
                key: "wasHttpsNativePromptDismissed",
                value: function d() {
                    return "dismissed" === B["default"].get("onesignal-notification-prompt")
                }
            }, {
                key: "markHttpPopoverShown",
                value: function p() {
                    sessionStorage.setItem("ONESIGNAL_HTTP_PROMPT_SHOWN", true)
                }
            }, {
                key: "isHttpPromptAlreadyShown",
                value: function b() {
                    return "true" == sessionStorage.getItem("ONESIGNAL_HTTP_PROMPT_SHOWN")
                }
            }, {
                key: "isContinuingBrowserSession",
                value: function v() {
                    return "true" == sessionStorage.getItem("ONE_SIGNAL_SESSION")
                }
            }, {
                key: "registerWithOneSignal",
                value: function m(e, t) {
                    var i = (0, O.getDeviceTypeForBrowser)();
                    return Promise.all([M["default"].getUserId(), M["default"].getSubscription()]).then(function(o) {
                        var r = l(o, 2);
                        var a = r[0];
                        var s = r[1];
                        var u = a ? "players/" + a + "/on_session" : "players";
                        var c = {
                            app_id: e,
                            device_type: i,
                            language: f["default"].getLanguage(),
                            timezone: (new Date).getTimezoneOffset() * -60,
                            device_model: navigator.platform + " " + k.name,
                            device_os: k.version,
                            sdk: M["default"]._VERSION,
                            notification_types: n.getNotificationTypeFromOptIn(s)
                        };
                        if (t) {
                            c.identifier = t.endpointOrToken;
                            var d = t.endpointOrToken.replace(new RegExp("^(https://android.googleapis.com/gcm/send/|https://updates.push.services.mozilla.com/push/)"), "");
                            w["default"].put("Ids", {
                                type: "registrationId",
                                id: d
                            });
                            if (t.auth) c.web_auth = t.auth;
                            if (t.p256dh) c.web_p256 = t.p256dh
                        }
                        return g["default"].post(u, c)
                    }).then(function(e) {
                        var t = e.id;
                        n.beginTemporaryBrowserSession();
                        if (t) w["default"].put("Ids", {
                            type: "userId",
                            id: t
                        });
                        if (M["default"]._thisIsThePopup) M["default"].getNotificationPermission().then(function(e) {
                            h["default"].debug("Sending player Id and registrationId back to host page");
                            var n = opener || parent;
                            M["default"].popupPostmam.postMessage(M["default"].POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, e);
                            M["default"].popupPostmam.postMessage(M["default"].POSTMAM_COMMANDS.POPUP_IDS_AVAILBLE);
                            if (opener) window.close()
                        })["catch"](function(e) {
                            return h["default"].error(e)
                        })
                    }).then(function() {
                        y["default"].trigger(M["default"].EVENTS.REGISTERED)
                    })
                }
            }, {
                key: "checkAndTriggerSubscriptionChanged",
                value: function S() {
                    h["default"].info("Called %ccheckAndTriggerSubscriptionChanged", (0, O.getConsoleStyle)("code"));
                    var e = void 0,
                        n = void 0;
                    Promise.all([M["default"].isPushNotificationsEnabled(), w["default"].get("Options", "isPushEnabled")]).then(function(t) {
                        var i = l(t, 2);
                        var o = i[0];
                        var r = i[1];
                        e = o;
                        var a = null === r || r !== o;
                        n = a;
                        if (a) {
                            h["default"].info("New Subscription:", o);
                            return w["default"].put("Options", {
                                key: "isPushEnabled",
                                value: o
                            })
                        }
                    }).then(function() {
                        if (n) M["default"].triggerSubscriptionChanged(e)
                    })
                }
            }, {
                key: "checkAndTriggerNotificationPermissionChanged",
                value: function E() {
                    Promise.all([w["default"].get("Options", "notificationPermission"), M["default"].getNotificationPermission()]).then(function(e) {
                        var n = l(e, 2);
                        var t = n[0];
                        var i = n[1];
                        if (t !== i) M["default"].triggerNotificationPermissionChanged(t, i)
                    })["catch"](function(e) {
                        return h["default"].error(e)
                    })
                }
            }, {
                key: "sendSelfNotification",
                value: function _(e, n, t, i, o, r) {
                    if (!e) e = "OneSignal Test Message";
                    if (!n) n = "This is an example notification.";
                    if (!t) t = new URL(location.href).origin + "?_osp=do_not_open";
                    Promise.all([M["default"].getAppId(), M["default"].getUserId()]).then(function(a) {
                        var s = l(a, 2);
                        var u = s[0];
                        var c = s[1];
                        if (c && u) g["default"].sendNotification(u, [c], {
                            en: e
                        }, {
                            en: n
                        }, t, i, o, r);
                        else h["default"].warn("Could not send self a test notification because there is no valid user ID or app ID.")
                    })
                }
            }, {
                key: "requestNotificationPermissionPromise",
                value: function I() {
                    return new Promise(function(e) {
                        return Notification.requestPermission(e)
                    })
                }
            }, {
                key: "getNotificationIcons",
                value: function T() {
                    return M["default"].getAppId().then(function(e) {
                        if (!e) return Promise.reject(null);
                        else {
                            var n = M["default"]._API_URL + "apps/" + e + "/icon";
                            return n
                        }
                    }, function() {
                        h["default"].debug("No app ID, not getting notification icon for notify button.");
                        return
                    }).then(function(n) {
                        return e(n)
                    }).then(function(e) {
                        return e.json()
                    }).then(function(e) {
                        if (e.errors) {
                            h["default"].error("API call %c" + url, (0, O.getConsoleStyle)("code"), "failed with:", e.errors);
                            reject(null)
                        }
                        return e
                    })["catch"](function(e) {
                        h["default"].error("Call %cgetNotificationIcons()", (0, O.getConsoleStyle)("code"), "failed with:", e)
                    })
                }
            }, {
                key: "establishServiceWorkerChannel",
                value: function P(e) {
                    h["default"].debug("OneSignal: Attempting to establish a service worker channel...", e);
                    if (M["default"]._channel) {
                        M["default"]._channel.off("data");
                        M["default"]._channel.off("notification.displayed");
                        M["default"]._channel.off("notification.clicked")
                    }
                    M["default"]._channel = A["default"].at(e ? e.active : null);
                    M["default"]._channel.on("data", function n(e, t) {
                        h["default"].debug("%c" + f["default"].getEnv().capitalize() + " ⬸ ServiceWorker:", (0, O.getConsoleStyle)("serviceworkermessage"), t, e)
                    });
                    M["default"]._channel.on("notification.displayed", function t(e, n) {
                        y["default"].trigger(M["default"].EVENTS.NOTIFICATION_DISPLAYED, n)
                    });
                    M["default"]._channel.on("notification.clicked", function i(e, n) {
                        if (f["default"].isHost()) M["default"]._fireTransmittedNotificationClickedCallbacks(n);
                        else if (f["default"].isIframe()) M["default"].iframePostmam.message(M["default"].POSTMAM_COMMANDS.NOTIFICATION_OPENED, n)
                    });
                    M["default"]._channel.on("url", function o(e, n) {
                        M["default"]._channel.setWorker(e.event.source);
                        if (f["default"].isIframe()) {
                            M["default"].iframePostmam.message(M["default"].POSTMAM_COMMANDS.REQUEST_HOST_URL, n);
                            M["default"].iframePostmam.once(M["default"].POSTMAM_COMMANDS.REQUEST_HOST_URL, function(e) {
                                M["default"]._channel.emit("data", {
                                    query: "url",
                                    response: e.data
                                })
                            })
                        }
                    });
                    M["default"]._channel.on("notification.dismissed", function r(e, n) {
                        y["default"].trigger(M["default"].EVENTS.NOTIFICATION_DISMISSED, n)
                    });
                    h["default"].info("Service worker messaging channel established!")
                }
            }, {
                key: "getNormalizedSubdomain",
                value: function x(e) {
                    if (e) return (0, O.normalizeSubdomain)(e)
                }
            }, {
                key: "getPromptOptionsQueryString",
                value: function N() {
                    var e = M["default"].config.promptOptions;
                    var t = "";
                    if (e) {
                        var i = n.getPromptOptionsPostHash();
                        var o = true;
                        var r = false;
                        var a = void 0;
                        try {
                            for (var l = Object.keys(i)[Symbol.iterator](), s; !(o = (s = l.next()).done); o = true) {
                                var u = s.value;
                                var c = i[u];
                                t += "&" + u + "=" + c
                            }
                        } catch (f) {
                            r = true;
                            a = f
                        } finally {
                            try {
                                if (!o && l["return"]) l["return"]()
                            } finally {
                                if (r) throw a
                            }
                        }
                    }
                    return t
                }
            }, {
                key: "getPromptOptionsPostHash",
                value: function C() {
                    var e = M["default"].config.promptOptions;
                    if (e) {
                        var n = {
                            exampleNotificationTitleDesktop: "exampleNotificationTitle",
                            exampleNotificationMessageDesktop: "exampleNotificationMessage",
                            exampleNotificationTitleMobile: "exampleNotificationTitle",
                            exampleNotificationMessageMobile: "exampleNotificationMessage"
                        };
                        var t = true;
                        var i = false;
                        var o = void 0;
                        try {
                            for (var r = Object.keys(n)[Symbol.iterator](), a; !(t = (a = r.next()).done); t = true) {
                                var l = a.value;
                                var s = n[l];
                                if (e[l]) e[s] = e[l]
                            }
                        } catch (u) {
                            i = true;
                            o = u
                        } finally {
                            try {
                                if (!t && r["return"]) r["return"]()
                            } finally {
                                if (i) throw o
                            }
                        }
                        var c = ["siteName", "actionMessage", "exampleNotificationTitle", "exampleNotificationMessage", "exampleNotificationCaption", "acceptButtonText", "cancelButtonText"];
                        var f = {};
                        for (var d = 0; d < c.length; d++) {
                            var g = c[d];
                            var p = e[g];
                            var h = encodeURIComponent(p);
                            if (p || false === p || "" === p) f[g] = h
                        }
                    }
                    return f
                }
            }, {
                key: "triggerCustomPromptClicked",
                value: function R(e) {
                    y["default"].trigger(M["default"].EVENTS.CUSTOM_PROMPT_CLICKED, {
                        result: e
                    })
                }
            }, {
                key: "autoCorrectSubdomain",
                value: function D(e) {
                    var t = n.getNormalizedSubdomain(e);
                    if (t !== e) h["default"].warn("Auto-corrected subdomain '" + e + "' to '" + t + "'.");
                    return t
                }
            }, {
                key: "createHiddenDomIFrame",
                value: function U(e, n) {
                    var t = document.createElement("iframe");
                    t.style.display = "none";
                    if (!e) e = "about:blank";
                    t.src = e;
                    if (n) t.name = n;
                    document.body.appendChild(t);
                    return t
                }
            }, {
                key: "createSubscriptionDomModal",
                value: function L(e) {
                    var n = document.createElement("div");
                    n.setAttribute("id", "OneSignal-iframe-modal");
                    n.innerHTML = '<div id="notif-permission" style="background: rgba(0, 0, 0, 0.7); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 3000000000; display: block"></div>';
                    document.body.appendChild(n);
                    var t = document.createElement("style");
                    t.innerHTML = "@media (max-width: 560px) { .OneSignal-permission-iframe { width: 100%; height: 100%;} } @media (min-width: 561px) { .OneSignal-permission-iframe { top: 50%; left: 50%; margin-left: -275px; margin-top: -248px;} }";
                    document.getElementsByTagName("head")[0].appendChild(t);
                    var i = document.createElement("iframe");
                    i.className = "OneSignal-permission-iframe";
                    i.style.cssText = "background: rgba(255, 255, 255, 1); position: fixed;";
                    i.setAttribute("frameborder", "0");
                    i.width = M["default"]._windowWidth.toString();
                    i.height = M["default"]._windowHeight.toString();
                    i.src = e;
                    document.getElementById("notif-permission").appendChild(i);
                    return i
                }
            }, {
                key: "openWindowViaPost",
                value: function W(e, n) {
                    var t = document.createElement("form");
                    t.action = e;
                    t.method = "POST";
                    t.target = "onesignal-http-popup";
                    var i = void 0 != window.screenLeft ? window.screenLeft : screen.left;
                    var o = void 0 != window.screenTop ? window.screenTop : screen.top;
                    var r = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
                    var l = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
                    var s = M["default"]._windowWidth;
                    var u = M["default"]._windowHeight;
                    var c = r / 2 - s / 2 + i;
                    var f = l / 2 - u / 2 + o;
                    window.open("about:blank", "onesignal-http-popup", "'scrollbars=yes, width=" + s + ", height=" + u + ", top=" + f + ", left=" + c);
                    if (n)
                        for (var d in n) {
                            var g = document.createElement("textarea");
                            g.name = d;
                            g.value = "object" === a(n[d]) ? JSON.stringify(n[d]) : n[d];
                            t.appendChild(g)
                        }
                    t.style.display = "none";
                    document.body.appendChild(t);
                    t.submit();
                    document.body.removeChild(t)
                }
            }, {
                key: "openSubdomainPopup",
                value: function H(e, t) {
                    n.openWindowViaPost(e, t)
                }
            }]);
            return n
        }();
        n["default"] = W
    }).call(n, t(20))
}, function(e, n) {
    e.exports = function t(e, n) {
        return Array.prototype.slice.call(e, n)
    }
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var r = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var a = t(2);
    var l = i(a);
    var s = t(11);
    var u = i(s);
    var c = t(10);
    var f = i(c);
    var d = t(3);
    var g = i(d);
    var p = t(1);
    var h = t(7);
    var b = i(h);
    var v = function() {
        function e() {
            o(this, e)
        }
        r(e, null, [{
            key: "getInstance",
            value: function n() {
                return new Promise(function(n, t) {
                    if (e._instance) n(e._instance);
                    else {
                        var i = indexedDB.open("ONE_SIGNAL_SDK_DB", 1);
                        i.onsuccess = function(t) {
                            if (e._instance) {
                                var i = t.target.result;
                                i.close();
                                n(e._instance)
                            } else {
                                var o = t.target.result;
                                e._instance = o;
                                l["default"].debug("Opening IndexedDB instance.");
                                n(o)
                            }
                        };
                        i.onerror = function(e) {
                            l["default"].error("OneSignal: Unable to open IndexedDB.", e.target.error.name + ": " + e.target.error.message);
                            t(e)
                        };
                        i.onupgradeneeded = function(e) {
                            l["default"].info("OneSignal: IndexedDB is being rebuilt or upgraded.", e);
                            var n = e.target.result;
                            n.createObjectStore("Ids", {
                                keyPath: "type"
                            });
                            n.createObjectStore("NotificationOpened", {
                                keyPath: "url"
                            });
                            n.createObjectStore("Options", {
                                keyPath: "key"
                            });
                            g["default"].trigger(b["default"].EVENTS.REBUILT)
                        };
                        i.onversionchange = function(e) {
                            l["default"].warn("The database is about to be deleted.")
                        }
                    }
                })
            }
        }, {
            key: "get",
            value: function t(n, i) {
                if (i) return e.getInstance().then(function(e) {
                    return new Promise(function(t, o) {
                        var r = e.transaction(n).objectStore(n).get(i);
                        r.onsuccess = function() {
                            t(r.result)
                        };
                        r.onerror = function() {
                            o(r.errorCode)
                        }
                    })
                });
                else return e.getInstance().then(function(e) {
                    return new Promise(function(t, i) {
                        var o = {};
                        var r = e.transaction(n).objectStore(n).openCursor();
                        r.onsuccess = function(e) {
                            var n = e.target.result;
                            if (n) {
                                o[n.key] = n.value.value;
                                n["continue"]()
                            } else t(o)
                        };
                        r.onerror = function(e) {
                            i(r.errorCode)
                        }
                    })
                })
            }
        }, {
            key: "put",
            value: function i(n, t) {
                return e.getInstance().then(function(e) {
                    return new Promise(function(i, o) {
                        try {
                            var r = e.transaction([n], "readwrite").objectStore(n).put(t);
                            r.onsuccess = function(e) {
                                i(t)
                            };
                            r.onerror = function(e) {
                                l["default"].error("Database PUT Transaction Error:", e);
                                o(e)
                            }
                        } catch (a) {
                            l["default"].error("Database PUT Error:", a);
                            o(a)
                        }
                    })
                })
            }
        }, {
            key: "remove",
            value: function a(n, t) {
                if (t) var i = "delete";
                else var i = "clear";
                return e.getInstance().then(function(e) {
                    return new Promise(function(o, r) {
                        try {
                            var a = e.transaction([n], "readwrite").objectStore(n)[i](t);
                            a.onsuccess = function(e) {
                                o(t)
                            };
                            a.onerror = function(e) {
                                l["default"].error("Database REMOVE Transaction Error:", e);
                                r(e)
                            }
                        } catch (s) {
                            l["default"].error("Database REMOVE Error:", s);
                            r(s)
                        }
                    })
                })
            }
        }, {
            key: "rebuild",
            value: function s() {
                return Promise.all([e.remove("Ids"), e.remove("NotificationOpened"), e.remove("Options")])
            }
        }]);
        return e
    }();
    n["default"] = v;
    f["default"].merge(v, new u["default"])
}, function(e, n) {
    "use strict";

    function t() {}
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    t.store = {};
    t.LIMIT = 2;
    t.put = function(e, n) {
        if (void 0 === t.store[e]) t.store[e] = [null, null];
        t.store[e].push(n);
        if (t.store[e].length == t.LIMIT + 1) t.store[e].shift();
        return t.store[e]
    };
    t.get = function(e) {
        if (void 0 === t.store[e]) t.store[e] = [null, null];
        return t.store[e]
    };
    t.getFirst = function(e) {
        return t.get(e)[0]
    };
    t.getLast = function(e) {
        return t.get(e)[1]
    };
    t.remove = function(e) {
        delete t.store[e]
    };
    t.isEmpty = function(e) {
        var n = t.get(e);
        return null === n[0] && null === n[1]
    };
    n["default"] = t
}, function(e, n, t) {
    (function(e) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        var r = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n
            }
        }();
        var a = t(5);
        var l = t(2);
        var s = i(l);
        var u = t(1);
        var c = function() {
            function n() {
                o(this, n)
            }
            r(n, null, [{
                key: "get",
                value: function t(e, i, o) {
                    return n.call("GET", e, i, o)
                }
            }, {
                key: "post",
                value: function i(e, t, o) {
                    return n.call("POST", e, t, o)
                }
            }, {
                key: "put",
                value: function l(e, t, i) {
                    return n.call("PUT", e, t, i)
                }
            }, {
                key: "delete",
                value: function c(e, t, i) {
                    return n.call("DELETE", e, t, i)
                }
            }, {
                key: "call",
                value: function f(t, i, o, r) {
                    var l = new Headers;
                    l.append("SDK-Version", "onesignal/web/109715");
                    l.append("Content-Type", "application/json;charset=UTF-8");
                    if (r) {
                        var s = true;
                        var c = false;
                        var f = void 0;
                        try {
                            for (var d = Object.keys(r)[Symbol.iterator](), g; !(s = (g = d.next()).done); s = true) {
                                var p = g.value;
                                l.append(p, r[p])
                            }
                        } catch (h) {
                            c = true;
                            f = h
                        } finally {
                            try {
                                if (!s && d["return"]) d["return"]()
                            } finally {
                                if (c) throw f
                            }
                        }
                    }
                    var b = {
                        method: t || "NO_METHOD_SPECIFIED",
                        headers: l,
                        cache: "no-cache"
                    };
                    if (o) b.body = JSON.stringify(o);
                    var v;
                    return e(a.API_URL + i, b).then(function(e) {
                        v = e.status;
                        return e.json()
                    }).then(function(e) {
                        if (v >= 200 && v < 300) return e;
                        else {
                            var t = n.identifyError(e);
                            if ("no-user-id-error" === t)
                                if (OneSignal.isUsingSubscriptionWorkaround()) return (0, u.wipeIndexedDb)().then(function() {
                                    return Promise.reject(e)
                                });
                                else return (0, u.wipeIndexedDb)().then(function() {
                                    return (0, u.unsubscribeFromPush)()
                                }).then(function() {
                                    return Promise.reject(e)
                                });
                            else return Promise.reject(e)
                        }
                    })
                }
            }, {
                key: "identifyError",
                value: function d(e) {
                    if (!e || !e.errors) return "no-error";
                    var n = e.errors;
                    if ((0, u.contains)(n, "No user with this id found") || (0, u.contains)(n, "Could not find app_id for given player id.")) return "no-user-id-error";
                    return "unknown-error"
                }
            }, {
                key: "getUserIdFromSubscriptionIdentifier",
                value: function g(e, t, i) {
                    return n.post("players", {
                        app_id: e,
                        device_type: t,
                        identifier: i
                    }).then(function(e) {
                        if (e && e.id) return e.id;
                        else return null
                    })["catch"](function(e) {
                        s["default"].debug("Error getting user ID from subscription identifier:", e);
                        return null
                    })
                }
            }, {
                key: "sendNotification",
                value: function p(e, t, i, o, r, a, l, c) {
                    var f = {
                        app_id: e,
                        contents: o,
                        include_player_ids: t,
                        isAnyWeb: true,
                        data: l,
                        web_buttons: c
                    };
                    if (i) f.headings = i;
                    if (r) f.url = r;
                    if (a) {
                        f.chrome_web_icon = a;
                        f.firefox_icon = a
                    }(0, u.trimUndefined)(f);
                    return n.post("notifications", f)["catch"](function(e) {
                        if (e.warnings) {
                            var n = true;
                            var t = false;
                            var i = void 0;
                            try {
                                for (var o = e.warnings[Symbol.iterator](), r; !(n = (r = o.next()).done); n = true) {
                                    var a = r.value;
                                    if ((0, u.contains)(a, "Received ERROR 401 (Unauthorized, check your App auth_key.)")) s["default"].error("OneSignal: Your Google Server API Key is either invalid, is missing the required 'Google Cloud Messaging for Android' API, or is only accepting requests from certain IPs. (See: https://documentation.onesignal.com/docs/website-push-common-problems#received-error-401-unauthorized-check-your-app-aut)")
                                }
                            } catch (l) {
                                t = true;
                                i = l
                            } finally {
                                try {
                                    if (!n && o["return"]) o["return"]()
                                } finally {
                                    if (t) throw i
                                }
                            }
                        }
                        s["default"].error("Failed to send notification:", e)
                    })
                }
            }]);
            return n
        }();
        n["default"] = c
    }).call(n, t(20))
}, function(e, n) {
    "use strict";
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }
}, function(e, n) {
    (function(n) {
        (function() {
            ! function(e) {
                "use strict";

                function n(e) {
                    if ("string" != typeof e) e = String(e);
                    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function t(e) {
                    if ("string" != typeof e) e = String(e);
                    return e
                }

                function i(e) {
                    this.map = {};
                    if (e instanceof i) e.forEach(function(e, n) {
                        this.append(n, e)
                    }, this);
                    else if (e) Object.getOwnPropertyNames(e).forEach(function(n) {
                        this.append(n, e[n])
                    }, this)
                }

                function o(e) {
                    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = true
                }

                function r(e) {
                    return new Promise(function(n, t) {
                        e.onload = function() {
                            n(e.result)
                        };
                        e.onerror = function() {
                            t(e.error)
                        }
                    })
                }

                function a(e) {
                    var n = new FileReader;
                    n.readAsArrayBuffer(e);
                    return r(n)
                }

                function l(e) {
                    var n = new FileReader;
                    n.readAsText(e);
                    return r(n)
                }

                function s() {
                    this.bodyUsed = false;
                    this._initBody = function(e) {
                        this._bodyInit = e;
                        if ("string" == typeof e) this._bodyText = e;
                        else if (p.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                        else if (p.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                        else if (!e) this._bodyText = "";
                        else if (p.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(e));
                        else throw new Error("unsupported BodyInit type");
                        if (!this.headers.get("content-type"))
                            if ("string" == typeof e) this.headers.set("content-type", "text/plain;charset=UTF-8");
                            else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type)
                    };
                    if (p.blob) {
                        this.blob = function() {
                            var e = o(this);
                            if (e) return e;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            else return Promise.resolve(new Blob([this._bodyText]))
                        };
                        this.arrayBuffer = function() {
                            return this.blob().then(a)
                        };
                        this.text = function() {
                            var e = o(this);
                            if (e) return e;
                            if (this._bodyBlob) return l(this._bodyBlob);
                            else if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            else return Promise.resolve(this._bodyText)
                        }
                    } else this.text = function() {
                        var e = o(this);
                        return e ? e : Promise.resolve(this._bodyText)
                    };
                    if (p.formData) this.formData = function() {
                        return this.text().then(f)
                    };
                    this.json = function() {
                        return this.text().then(JSON.parse)
                    };
                    return this
                }

                function u(e) {
                    var n = e.toUpperCase();
                    return h.indexOf(n) > -1 ? n : e
                }

                function c(e, n) {
                    n = n || {};
                    var t = n.body;
                    if (c.prototype.isPrototypeOf(e)) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url;
                        this.credentials = e.credentials;
                        if (!n.headers) this.headers = new i(e.headers);
                        this.method = e.method;
                        this.mode = e.mode;
                        if (!t) {
                            t = e._bodyInit;
                            e.bodyUsed = true
                        }
                    } else this.url = e;
                    this.credentials = n.credentials || this.credentials || "omit";
                    if (n.headers || !this.headers) this.headers = new i(n.headers);
                    this.method = u(n.method || this.method || "GET");
                    this.mode = n.mode || this.mode || null;
                    this.referrer = null;
                    if (("GET" === this.method || "HEAD" === this.method) && t) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(t)
                }

                function f(e) {
                    var n = new FormData;
                    e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var t = e.split("=");
                            var i = t.shift().replace(/\+/g, " ");
                            var o = t.join("=").replace(/\+/g, " ");
                            n.append(decodeURIComponent(i), decodeURIComponent(o))
                        }
                    });
                    return n
                }

                function d(e) {
                    var n = new i;
                    var t = (e.getAllResponseHeaders() || "").trim().split("\n");
                    t.forEach(function(e) {
                        var t = e.trim().split(":");
                        var i = t.shift().trim();
                        var o = t.join(":").trim();
                        n.append(i, o)
                    });
                    return n
                }

                function g(e, n) {
                    if (!n) n = {};
                    this.type = "default";
                    this.status = n.status;
                    this.ok = this.status >= 200 && this.status < 300;
                    this.statusText = n.statusText;
                    this.headers = n.headers instanceof i ? n.headers : new i(n.headers);
                    this.url = n.url || "";
                    this._initBody(e)
                }
                if (e.fetch) return;
                i.prototype.append = function(e, i) {
                    e = n(e);
                    i = t(i);
                    var o = this.map[e];
                    if (!o) {
                        o = [];
                        this.map[e] = o
                    }
                    o.push(i)
                };
                i.prototype["delete"] = function(e) {
                    delete this.map[n(e)]
                };
                i.prototype.get = function(e) {
                    var t = this.map[n(e)];
                    return t ? t[0] : null
                };
                i.prototype.getAll = function(e) {
                    return this.map[n(e)] || []
                };
                i.prototype.has = function(e) {
                    return this.map.hasOwnProperty(n(e))
                };
                i.prototype.set = function(e, i) {
                    this.map[n(e)] = [t(i)]
                };
                i.prototype.forEach = function(e, n) {
                    Object.getOwnPropertyNames(this.map).forEach(function(t) {
                        this.map[t].forEach(function(i) {
                            e.call(n, i, t, this)
                        }, this)
                    }, this)
                };
                var p = {
                    blob: "FileReader" in e && "Blob" in e && function() {
                        try {
                            new Blob;
                            return true
                        } catch (e) {
                            return false
                        }
                    }(),
                    formData: "FormData" in e,
                    arrayBuffer: "ArrayBuffer" in e
                };
                var h = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                c.prototype.clone = function() {
                    return new c(this)
                };
                s.call(c.prototype);
                s.call(g.prototype);
                g.prototype.clone = function() {
                    return new g(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new i(this.headers),
                        url: this.url
                    })
                };
                g.error = function() {
                    var e = new g(null, {
                        status: 0,
                        statusText: ""
                    });
                    e.type = "error";
                    return e
                };
                var b = [301, 302, 303, 307, 308];
                g.redirect = function(e, n) {
                    if (b.indexOf(n) === -1) throw new RangeError("Invalid status code");
                    return new g(null, {
                        status: n,
                        headers: {
                            location: e
                        }
                    })
                };
                e.Headers = i;
                e.Request = c;
                e.Response = g;
                e.fetch = function(e, n) {
                    return new Promise(function(t, i) {
                        function o() {
                            if ("responseURL" in a) return a.responseURL;
                            if (/^X-Request-URL:/m.test(a.getAllResponseHeaders())) return a.getResponseHeader("X-Request-URL");
                            return
                        }
                        var r;
                        if (c.prototype.isPrototypeOf(e) && !n) r = e;
                        else r = new c(e, n);
                        var a = new XMLHttpRequest;
                        a.onload = function() {
                            var e = 1223 === a.status ? 204 : a.status;
                            if (e < 100 || e > 599) {
                                i(new TypeError("Network request failed"));
                                return
                            }
                            var n = {
                                status: e,
                                statusText: a.statusText,
                                headers: d(a),
                                url: o()
                            };
                            var r = "response" in a ? a.response : a.responseText;
                            t(new g(r, n))
                        };
                        a.onerror = function() {
                            i(new TypeError("Network request failed"))
                        };
                        a.ontimeout = function() {
                            i(new TypeError("Network request failed"))
                        };
                        a.open(r.method, r.url, true);
                        if ("include" === r.credentials) a.withCredentials = true;
                        if ("responseType" in a && p.blob) a.responseType = "blob";
                        r.headers.forEach(function(e, n) {
                            a.setRequestHeader(n, e)
                        });
                        a.send("undefined" == typeof r._bodyInit ? null : r._bodyInit)
                    })
                };
                e.fetch.polyfill = true
            }("undefined" != typeof self ? self : this);
            e.exports = n.fetch
        }).call(n)
    }).call(n, function() {
        return this
    }())
}, function(e, n, t) {
    "use strict";

    function i() {
        throw new Error("Swivel couldn't detect ServiceWorker support. Please feature detect before using Swivel in your web pages!")
    }
    var o = t(46);
    var r = t(47);
    var a;
    if ("serviceWorker" in navigator) a = o();
    else if ("clients" in self) a = r();
    else a = {
        on: i,
        once: i,
        off: i,
        emit: i,
        broadcast: i
    };
    e.exports = a
}, function(e, n, t) {
    (function(e, i) {
        function o(e, n) {
            this._id = e;
            this._clearFn = n
        }
        var r = t(42).nextTick;
        var a = Function.prototype.apply;
        var l = Array.prototype.slice;
        var s = {};
        var u = 0;
        n.setTimeout = function() {
            return new o(a.call(setTimeout, window, arguments), clearTimeout)
        };
        n.setInterval = function() {
            return new o(a.call(setInterval, window, arguments), clearInterval)
        };
        n.clearTimeout = n.clearInterval = function(e) {
            e.close()
        };
        o.prototype.unref = o.prototype.ref = function() {};
        o.prototype.close = function() {
            this._clearFn.call(window, this._id)
        };
        n.enroll = function(e, n) {
            clearTimeout(e._idleTimeoutId);
            e._idleTimeout = n
        };
        n.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId);
            e._idleTimeout = -1
        };
        n._unrefActive = n.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var n = e._idleTimeout;
            if (n >= 0) e._idleTimeoutId = setTimeout(function t() {
                if (e._onTimeout) e._onTimeout()
            }, n)
        };
        n.setImmediate = "function" == typeof e ? e : function(e) {
            var t = u++;
            var i = arguments.length < 2 ? false : l.call(arguments, 1);
            s[t] = true;
            r(function o() {
                if (s[t]) {
                    if (i) e.apply(null, i);
                    else e.call(null);
                    n.clearImmediate(t)
                }
            });
            return t
        };
        n.clearImmediate = "function" == typeof i ? i : function(e) {
            delete s[e]
        }
    }).call(n, t(22).setImmediate, t(22).clearImmediate)
}, function(e, n, t) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        else {
            var n = {};
            if (null != e)
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) n[t] = e[t];
            n["default"] = e;
            return n
        }
    }

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var a = function() {
        function e(e, n) {
            var t = [];
            var i = true;
            var o = false;
            var r = void 0;
            try {
                for (var a = e[Symbol.iterator](), l; !(i = (l = a.next()).done); i = true) {
                    t.push(l.value);
                    if (n && t.length === n) break
                }
            } catch (s) {
                o = true;
                r = s
            } finally {
                try {
                    if (!i && a["return"]) a["return"]()
                } finally {
                    if (o) throw r
                }
            }
            return t
        }
        return function(n, t) {
            if (Array.isArray(n)) return n;
            else if (Symbol.iterator in Object(n)) return e(n, t);
            else throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    var l = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var s = t(5);
    var u = t(4);
    var c = o(u);
    t(19);
    var f = t(18);
    var d = o(f);
    var g = t(16);
    var p = o(g);
    var h = t(2);
    var b = o(h);
    var v = t(17);
    var m = o(v);
    var y = t(3);
    var S = o(y);
    var w = t(13);
    var E = o(w);
    var k = t(28);
    var O = o(k);
    var _ = t(7);
    var I = o(_);
    var T = t(6);
    var P = i(T);
    var x = t(1);
    var N = t(8);
    var C = o(N);
    var A = t(11);
    var R = o(A);
    var M = t(10);
    var D = o(M);
    var U = t(21);
    var L = o(U);
    var B = t(25);
    var W = o(B);
    var H = t(14);
    var j = o(H);
    var V = t(36);
    var F = o(V);
    var z = function() {
        function e() {
            r(this, e)
        }
        l(e, null, [{
            key: "setDefaultNotificationUrl",
            value: function n(t) {
                function i() {
                    return I["default"].put("Options", {
                        key: "defaultUrl",
                        value: t
                    })
                }
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                if (!e.initialized) return new Promise(function(n, t) {
                    e.once(e.EVENTS.SDK_INITIALIZED, function() {
                        return i().then(n)["catch"](t)
                    })
                });
                else return i()
            }
        }, {
            key: "setDefaultTitle",
            value: function t(n) {
                function t() {
                    return I["default"].put("Options", {
                        key: "defaultTitle",
                        value: n
                    })
                }
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                if (!e.initialized) return new Promise(function(n, i) {
                    e.once(e.EVENTS.SDK_INITIALIZED, function() {
                        return t().then(n)["catch"](i)
                    })
                });
                else return t()
            }
        }, {
            key: "onNotificationPermissionChange",
            value: function i(e) {
                j["default"].checkAndTriggerSubscriptionChanged()
            }
        }, {
            key: "_onSubscriptionChanged",
            value: function o(n) {
                if (true === n) Promise.all([e.getUserId(), e.getAppId()]).then(function(n) {
                    var t = a(n, 2);
                    var i = t[0];
                    var o = t[1];
                    var r = e.config.welcomeNotification;
                    var l = void 0 !== r && true === r.disable;
                    var s = void 0 !== r && void 0 !== r.title && null !== r.title ? r.title : "";
                    var u = void 0 !== r && void 0 !== r.message && null !== r.message && r.message.length > 0 ? r.message : "Thanks for subscribing!";
                    var c = new URL(location.href);
                    c = c.origin + "?_osp=do_not_open";
                    var f = r && r.url && r.url.length > 0 ? r.url : c;
                    s = (0, x.decodeHtmlEntities)(s);
                    u = (0, x.decodeHtmlEntities)(u);
                    if (!l) {
                        b["default"].debug("Sending welcome notification.");
                        d["default"].sendNotification(o, [i], {
                            en: s
                        }, {
                            en: u
                        }, f, null, {
                            __isOneSignalWelcomeNotification: true
                        });
                        S["default"].trigger(e.EVENTS.WELCOME_NOTIFICATION_SENT, {
                            title: s,
                            message: u,
                            url: f
                        })
                    }
                })["catch"](function(e) {
                    b["default"].error(e)
                })
            }
        }, {
            key: "_onDbValueSet",
            value: function u(n) {
                if ("userId" === n.type && !e.isUsingSubscriptionWorkaround()) j["default"].checkAndTriggerSubscriptionChanged()
            }
        }, {
            key: "_onInternalSubscriptionSet",
            value: function f(e) {
                var n = e;
                m["default"].put("setsubscription.value", n);
                j["default"].checkAndTriggerSubscriptionChanged()
            }
        }, {
            key: "_storeInitialValues",
            value: function g() {
                return Promise.all([e.isPushNotificationsEnabled(), e.getNotificationPermission(), e.getUserId(), e.getSubscription()]).then(function(e) {
                    var n = a(e, 4);
                    var t = n[0];
                    var i = n[1];
                    var o = n[2];
                    var r = n[3];
                    m["default"].put("setsubscription.value", r);
                    return Promise.all([I["default"].put("Options", {
                        key: "isPushEnabled",
                        value: t
                    }), I["default"].put("Options", {
                        key: "notificationPermission",
                        value: i
                    })])
                })
            }
        }, {
            key: "_onSdkInitialized",
            value: function h() {
                e._storeInitialValues();
                e._installNativePromptPermissionChangedHook();
                if (navigator.serviceWorker && "https:" === window.location.protocol) navigator.serviceWorker.getRegistration().then(function(e) {
                    if (e && e.active) j["default"].establishServiceWorkerChannel(e)
                })["catch"](function(e) {
                    if (9 === e.code) {
                        if ("http:" === location.protocol || c["default"].isIframe()) b["default"].debug("Expected error getting service worker registration on " + location.href + ":", e)
                    } else b["default"].error("Error getting Service Worker registration on " + location.href + ":", e)
                });
                if (c["default"].isBrowser() && !e.notifyButton) {
                    e.config.notifyButton = e.config.notifyButton || {};
                    if (e.config.bell) {
                        (0, C["default"])(e.config.bell, e.config.notifyButton);
                        (0, C["default"])(e.config.notifyButton, e.config.bell)
                    }
                    if (e.config.notifyButton.displayPredicate && "function" == typeof e.config.notifyButton.displayPredicate) Promise.resolve(e.config.notifyButton.displayPredicate()).then(function(n) {
                        if (false !== n) {
                            e.notifyButton = new E["default"](e.config.notifyButton);
                            e.notifyButton.create()
                        } else b["default"].debug("Notify button display predicate returned false so not showing the notify button.")
                    });
                    else {
                        e.notifyButton = new E["default"](e.config.notifyButton);
                        e.notifyButton.create()
                    }
                }
                if (P.safari && false === e.config.autoRegister) e.isPushNotificationsEnabled(function(n) {
                    if (n) e._sessionInit({
                        __sdkCall: true
                    })
                });
                if (e.isUsingSubscriptionWorkaround() && !j["default"].isContinuingBrowserSession()) {
                    b["default"].debug("(" + c["default"].getEnv() + ") Updating session info for HTTP site.");
                    e.isPushNotificationsEnabled(function(n) {
                        if (n) return e.getAppId().then(function(e) {
                            return j["default"].registerWithOneSignal(e, null)
                        })
                    })
                }
            }
        }, {
            key: "_onDatabaseRebuilt",
            value: function v() {
                e._isNewVisitor = true
            }
        }, {
            key: "isPushNotificationsSupported",
            value: function y() {
                return (0, x.isPushNotificationsSupported)()
            }
        }, {
            key: "_installNativePromptPermissionChangedHook",
            value: function w() {
                if (navigator.permissions && !(P.firefox && Number(P.version) <= 45)) {
                    e._usingNativePermissionHook = true;
                    navigator.permissions.query({
                        name: "notifications"
                    }).then(function(n) {
                        n.onchange = function() {
                            e.triggerNotificationPermissionChanged()
                        }
                    })["catch"](function(e) {
                        b["default"].error(e)
                    })
                }
            }
        }, {
            key: "init",
            value: function k(n) {
                function t() {
                    if (e.__initAlreadyCalled) {
                        b["default"].debug("OneSignal: Skipping extra init() event.");
                        return
                    } else e.__initAlreadyCalled = true;
                    j["default"].fixWordpressManifestIfMisplaced();
                    if (e.isUsingSubscriptionWorkaround()) {
                        if (e.config.subdomainName) e.config.subdomainName = j["default"].autoCorrectSubdomain(e.config.subdomainName);
                        else b["default"].error("OneSignal: Missing required init parameter %csubdomainName", (0, x.getConsoleStyle)("code"), ". Because your site is accessed via HTTP, a subdomain name must be supplied to the SDK initialization options. (See: https://documentation.onesignal.com/docs/website-sdk-http-installation#2-include-and-initialize-onesignal)");
                        if (c["default"].isDev()) {
                            e.iframeUrl = s.DEV_FRAME_HOST + "/webPushIframe";
                            e.popupUrl = s.DEV_FRAME_HOST + "/subscribe"
                        } else {
                            e.iframeUrl = "https://" + e.config.subdomainName + ".onesignal.com/webPushIframe";
                            e.popupUrl = "https://" + e.config.subdomainName + ".onesignal.com/subscribe"
                        }
                    } else if (c["default"].isDev()) e.modalUrl = s.DEV_FRAME_HOST + "/webPushModal";
                    else e.modalUrl = "https://onesignal.com/webPushModal";
                    var n = Promise.resolve();
                    if (e.isUsingSubscriptionWorkaround()) n = e.loadSubdomainIFrame(location.protocol + "//").then(function() {
                        return b["default"].info("Subdomain iFrame loaded")
                    });
                    e.on(I["default"].EVENTS.REBUILT, e._onDatabaseRebuilt);
                    e.on(e.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, e.onNotificationPermissionChange);
                    e.on(e.EVENTS.SUBSCRIPTION_CHANGED, e._onSubscriptionChanged);
                    e.on(I["default"].EVENTS.SET, e._onDbValueSet);
                    e.on(e.EVENTS.INTERNAL_SUBSCRIPTIONSET, e._onInternalSubscriptionSet);
                    e.on(e.EVENTS.SDK_INITIALIZED, e._onSdkInitialized);
                    n.then(function() {
                        window.addEventListener("focus", function(e) {
                            j["default"].checkAndTriggerNotificationPermissionChanged()
                        });
                        if (P.safari && "undefined" == typeof window.fetch) {
                            var n = document.createElement("script");
                            n.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/fetch/0.9.0/fetch.js");
                            document.head.appendChild(n)
                        }
                        e._initSaveState().then(function() {
                            return e._saveInitOptions()
                        }).then(function() {
                            return e._internalInit()
                        })
                    })
                }
                b["default"].debug("Called %cinit(" + JSON.stringify(n, null, 4) + ")", (0, x.getConsoleStyle)("code"));
                if (c["default"].isBrowser() && window.localStorage && window.localStorage["onesignal.debugger.init"]) debugger;
                if (e._initCalled) {
                    b["default"].error("OneSignal: Please don't call init() more than once. Any extra calls to init() are ignored. The following parameters were not processed: %c" + JSON.stringify(Object.keys(n)), (0, x.getConsoleStyle)("code"));
                    return "return"
                }
                e._initCalled = true;
                e.config = (0, C["default"])({
                    path: "/"
                }, n);
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                if (P.safari && !e.config.safari_web_id) {
                    b["default"].warn("OneSignal: Required parameter %csafari_web_id", (0, x.getConsoleStyle)("code"), "was not passed to OneSignal.init(), skipping SDK initialization.");
                    return
                }
                if ("complete" === document.readyState || "interactive" === document.readyState) t();
                else {
                    b["default"].debug("OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing initialization...");
                    window.addEventListener("DOMContentLoaded", function() {
                        b["default"].debug("OneSignal: DOMContentLoaded event fired. Document readyState is:", document.readyState);
                        t()
                    });
                    document.onreadystatechange = function() {
                        b["default"].debug("OneSignal: readyStateChange event fired. Document readyState is:", document.readyState);
                        if ("complete" === document.readyState || "interactive" === document.readyState) t()
                    }
                }
            }
        }, {
            key: "_saveInitOptions",
            value: function O() {
                var n = [];
                if (false === e.config.persistNotification) n.push(I["default"].put("Options", {
                    key: "persistNotification",
                    value: false
                }));
                else n.push(I["default"].put("Options", {
                    key: "persistNotification",
                    value: true
                }));
                var t = e.config.webhooks;
                ["notification.displayed", "notification.clicked", "notification.dismissed"].forEach(function(e) {
                    if (t && t[e]) n.push(I["default"].put("Options", {
                        key: "webhooks." + e,
                        value: t[e]
                    }));
                    else n.push(I["default"].put("Options", {
                        key: "webhooks." + e,
                        value: false
                    }))
                });
                if (t && t.cors) n.push(I["default"].put("Options", {
                    key: "webhooks.cors",
                    value: true
                }));
                else n.push(I["default"].put("Options", {
                    key: "webhooks.cors",
                    value: false
                }));
                if (e.config.notificationClickHandlerMatch) n.push(I["default"].put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: e.config.notificationClickHandlerMatch
                }));
                else n.push(I["default"].put("Options", {
                    key: "notificationClickHandlerMatch",
                    value: "exact"
                }));
                if (false === e.config.serviceWorkerRefetchRequests) n.push(I["default"].put("Options", {
                    key: "serviceWorkerRefetchRequests",
                    value: false
                }));
                else n.push(I["default"].put("Options", {
                    key: "serviceWorkerRefetchRequests",
                    value: true
                }));
                return Promise.all(n)
            }
        }, {
            key: "closeNotifications",
            value: function _() {
                if (navigator.serviceWorker && !e.isUsingSubscriptionWorkaround()) navigator.serviceWorker.getRegistration().then(function(n) {
                    if (void 0 === n || !n.active) {
                        b["default"].debug("There is no active service worker.");
                        return Promise.reject()
                    } else if (e._channel) e._channel.emit("data", "notification.closeall")
                })
            }
        }, {
            key: "_internalInit",
            value: function T() {
                b["default"].debug("Called %c_internalInit()", (0, x.getConsoleStyle)("code"));
                I["default"].get("Ids", "appId").then(function(n) {
                    if (!e.isUsingSubscriptionWorkaround() && n && n != e.config.appId) {
                        console.warn("OneSignal: App ID changed from " + n + " ⤑ " + e.config.appId + ". Wiping IndexedDB and SessionStorage data.");
                        sessionStorage.clear();
                        return I["default"].rebuild().then(function() {
                            return I["default"].put("Ids", {
                                type: "appId",
                                id: e.config.appId
                            })
                        }).then(function() {
                            e._initCalled = false;
                            e.init(e.config);
                            return Promise.reject("OneSignal: App ID changed from " + n + " ⤑ " + e.config.appId + ". Wiping IndexedDB and SessionStorage data.")
                        })
                    } else {
                        if (sessionStorage.getItem("ONE_SIGNAL_SESSION") && !e.config.subdomainName && ("denied" == Notification.permission || sessionStorage.getItem("ONE_SIGNAL_NOTIFICATION_PERMISSION") == Notification.permission)) {
                            S["default"].trigger(e.EVENTS.SDK_INITIALIZED);
                            return
                        }
                        sessionStorage.setItem("ONE_SIGNAL_NOTIFICATION_PERMISSION", Notification.permission);
                        if (P.safari && false === e.config.autoRegister) {
                            b["default"].debug("On Safari and autoregister is false, skipping sessionInit().");
                            if (!e.isUsingSubscriptionWorkaround()) S["default"].trigger(e.EVENTS.SDK_INITIALIZED);
                            return
                        }
                        if (false === e.config.autoRegister && !e.config.subdomainName) {
                            b["default"].debug("Skipping internal init. Not auto-registering and no subdomain.");
                            e.isPushNotificationsEnabled().then(function(n) {
                                if (n && !e.isUsingSubscriptionWorkaround()) {
                                    b["default"].info("Because the user is already subscribed and has enabled notifications, we will re-register their GCM token.");
                                    e._registerForW3CPush({})
                                } else e._updateServiceWorker()
                            });
                            S["default"].trigger(e.EVENTS.SDK_INITIALIZED);
                            return
                        }
                        if ("visible" !== document.visibilityState) {
                            (0, x.once)(document, "visibilitychange", function(n, t) {
                                if ("visible" === document.visibilityState) {
                                    t();
                                    e._sessionInit({
                                        __sdkCall: true
                                    })
                                }
                            }, true);
                            return
                        }
                        b["default"].debug("Calling _sessionInit() normally from _internalInit().");
                        e._sessionInit({
                            __sdkCall: true
                        })
                    }
                })["catch"](function(e) {
                    b["default"].error(e)
                })
            }
        }, {
            key: "showHttpPrompt",
            value: function N() {
                if (e.__isPopoverShowing) {
                    b["default"].debug("OneSignal: Not showing popover because it is currently being shown.");
                    return "popover-already-shown"
                }
                return Promise.all([e.getNotificationPermission(), e.isPushNotificationsEnabled(), e.getSubscription(), I["default"].get("Options", "popoverDoNotPrompt")]).then(function(n) {
                    var t = a(n, 4);
                    var i = t[0];
                    var o = t[1];
                    var r = t[2];
                    var l = t[3];
                    if (true === l) {
                        b["default"].debug('OneSignal: Not showing popover because the user previously clicked "No Thanks".');
                        return "popover-previously-dismissed"
                    }
                    if ("denied" === i) {
                        b["default"].debug("OneSignal: Not showing popover because notification permissions are blocked.");
                        return "notification-permission-blocked"
                    }
                    if (o) {
                        b["default"].debug("OneSignal: Not showing popover because the current user is already subscribed.");
                        return "user-already-subscribed"
                    }
                    if (!r) {
                        b["default"].debug("OneSignal: Not showing popover because the user was manually opted out.");
                        return "user-intentionally-unsubscribed"
                    }
                    j["default"].markHttpPopoverShown();
                    e.popover = new F["default"](e.config.promptOptions);
                    e.popover.create();
                    b["default"].debug("Showing the HTTP popover.");
                    if (e.notifyButton && "hidden" !== e.notifyButton.launcher.state) e.notifyButton.launcher.waitUntilShown().then(function() {
                        e.notifyButton.launcher.hide()
                    });
                    e.once(F["default"].EVENTS.SHOWN, function() {
                        e.__isPopoverShowing = true
                    });
                    e.once(F["default"].EVENTS.CLOSED, function() {
                        e.__isPopoverShowing = false;
                        if (e.notifyButton) e.notifyButton.launcher.show()
                    });
                    e.once(F["default"].EVENTS.ALLOW_CLICK, function() {
                        e.popover.close();
                        e.registerForPushNotifications({
                            autoAccept: true
                        })
                    });
                    e.once(F["default"].EVENTS.CANCEL_CLICK, function() {
                        b["default"].debug("Setting flag to not show the popover to the user again.");
                        I["default"].put("Options", {
                            key: "popoverDoNotPrompt",
                            value: true
                        })
                    })
                })
            }
        }, {
            key: "registerForPushNotifications",
            value: function A(n) {
                function t() {
                    if (e.isUsingSubscriptionWorkaround()) e.loadPopup(n);
                    else {
                        if (!n) n = {};
                        n.fromRegisterFor = true;
                        e._sessionInit(n)
                    }
                }
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                if (!e.initialized) e.once(e.EVENTS.SDK_INITIALIZED, function() {
                    return t()
                });
                else return t()
            }
        }, {
            key: "_initHttp",
            value: function R(n) {
                b["default"].debug("Called %c_initHttp(" + JSON.stringify(n, null, 4) + ")", (0, x.getConsoleStyle)("code"));
                if (c["default"].isBrowser() && window.localStorage && window.localStorage["onesignal.debugger.inithttp"]) debugger;
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                var t = opener || parent;
                if (t == window) {
                    document.write("<span style='font-size: 14px; color: red; font-family: sans-serif;'>OneSignal: This page cannot be directly opened, and \nmust be opened as a result of a subscription call.</span>");
                    return
                }
                e.config = {};
                e.initialized = true;
                var i = n.origin;
                var o = n.origin;
                var r = (0, x.getUrlQueryParam)("dangerouslyWipeData") || window.__POSTDATA && true === window.__POSTDATA.dangerouslyWipeData;
                var a = Promise.resolve();
                if (r && c["default"].isIframe()) {
                    e.LOGGING = true;
                    b["default"].warn("Wiping away previous HTTP data (called from HTTP iFrame).");
                    a = (0, x.wipeLocalIndexedDb)().then(function() {
                        return (0, x.unsubscribeFromPush)()
                    }).then(function() {
                        return p["default"].put("Ids", {
                            type: "appId",
                            id: n.appId
                        })
                    })
                }
                e._thisIsThePopup = n.isPopup;
                if (c["default"].isPopup() || e._thisIsThePopup) e.popupPostmam = new W["default"](this.opener, i, o);
                e._thisIsTheModal = n.isModal;
                if (e._thisIsTheModal) e.modalPostmam = new W["default"](this.parent, i, o);
                e.iframePostmam = new W["default"](this.window, i, o);
                e.iframePostmam.listen();
                e.iframePostmam.on(e.POSTMAM_COMMANDS.CONNECTED, function(e) {
                    b["default"].debug("(" + c["default"].getEnv() + ") Fired Postmam connect event!")
                });
                e.iframePostmam.on(e.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, function(n) {
                    e.getNotificationPermission().then(function(e) {
                        return n.reply(e)
                    });
                    return false
                });
                e.iframePostmam.on(e.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, function(e) {
                    var n = e.data;
                    var t = [];
                    var i = true;
                    var o = false;
                    var r = void 0;
                    try {
                        for (var a = n[Symbol.iterator](), l; !(i = (l = a.next()).done); i = true) {
                            var s = l.value;
                            var u = s.table;
                            var c = s.key;
                            if (!u || !c) b["default"].error("Missing table or key for remote database get.", "table:", u, "key:", c);
                            t.push(I["default"].get(u, c))
                        }
                    } catch (f) {
                        o = true;
                        r = f
                    } finally {
                        try {
                            if (!i && a["return"]) a["return"]()
                        } finally {
                            if (o) throw r
                        }
                    }
                    Promise.all(t).then(function(n) {
                        return e.reply(n)
                    });
                    return false
                });
                e.iframePostmam.on(e.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, function(n) {
                    var t = n.data;
                    var i = [];
                    var o = true;
                    var r = false;
                    var a = void 0;
                    try {
                        for (var l = t[Symbol.iterator](), s; !(o = (s = l.next()).done); o = true) {
                            var u = s.value;
                            var c = u.table;
                            var f = u.keypath;
                            i.push(I["default"].put(c, f))
                        }
                    } catch (d) {
                        r = true;
                        a = d
                    } finally {
                        try {
                            if (!o && l["return"]) l["return"]()
                        } finally {
                            if (r) throw a
                        }
                    }
                    Promise.all(i).then(function(t) {
                        return n.reply(e.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                    });
                    return false
                });
                e.iframePostmam.on(e.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, function(n) {
                    var t = n.data;
                    var i = [];
                    var o = true;
                    var r = false;
                    var a = void 0;
                    try {
                        for (var l = t[Symbol.iterator](), s; !(o = (s = l.next()).done); o = true) {
                            var u = s.value;
                            var c = u.table;
                            var f = u.keypath;
                            i.push(I["default"].remove(c, f))
                        }
                    } catch (d) {
                        r = true;
                        a = d
                    } finally {
                        try {
                            if (!o && l["return"]) l["return"]()
                        } finally {
                            if (r) throw a
                        }
                    }
                    Promise.all(i).then(function(t) {
                        return n.reply(e.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                    });
                    return false
                });
                e.iframePostmam.on(e.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, function(t) {
                    b["default"].warn("(" + c["default"].getEnv() + ") The iFrame has just received initOptions from the host page!");
                    a.then(function() {
                        e.config = (0, C["default"])(t.data.hostInitOptions, n, {
                            pageUrl: t.data.pageUrl,
                            pageTitle: t.data.pageTitle
                        });
                        e._installNativePromptPermissionChangedHook();
                        var i = [];
                        if (n.continuePressed) i.push(e.setSubscription(true));
                        i.push(I["default"].get("Options", "defaultUrl").then(function(n) {
                            if (!n) return I["default"].put("Options", {
                                key: "defaultUrl",
                                value: new URL(e.config.pageUrl).origin
                            })
                        }));
                        i.push(I["default"].get("NotificationOpened", e.config.pageUrl).then(function(n) {
                            if (n) {
                                I["default"].remove("NotificationOpened", e.config.pageUrl);
                                e.iframePostmam.message(e.POSTMAM_COMMANDS.NOTIFICATION_OPENED, n)
                            }
                        }));
                        i.push(e._initSaveState());
                        i.push(e._storeInitialValues());
                        i.push(e._saveInitOptions());
                        Promise.all(i).then(function() {
                            if (navigator.serviceWorker && "https:" === window.location.protocol) try {
                                j["default"].establishServiceWorkerChannel()
                            } catch (n) {
                                b["default"].error("Error interacting with Service Worker inside an HTTP-hosted iFrame:", n)
                            }
                            t.reply(e.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                        })
                    })["catch"](function(e) {
                        return console.error(e)
                    })
                });
                e.iframePostmam.on(e.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, function(n) {
                    b["default"].debug(c["default"].getEnv() + " (Expected iFrame) has received the unsubscribe from push method.");
                    (0, x.unsubscribeFromPush)().then(function() {
                        return n.reply(e.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE)
                    })["catch"](function(e) {
                        return b["default"].warn("Failed to unsubscribe from push remotely.", e)
                    })
                });
                S["default"].trigger("httpInitialize")
            }
        }, {
            key: "_initPopup",
            value: function M() {
                e.config = {};
                e.initialized = true;
                e.isPushNotificationsEnabled(function(n) {
                    if (!n) navigator.serviceWorker.register(e.SERVICE_WORKER_PATH, e.SERVICE_WORKER_PARAM).then(e._enableNotifications, e._registerError);
                    else window.close()
                })
            }
        }, {
            key: "_initSaveState",
            value: function D() {
                return I["default"].get("Ids", "appId").then(function(n) {
                    if (c["default"].isIframe() && n && n != e.config.appId && e.config.dangerouslyChangeAppId) {
                        console.warn("OneSignal: App ID changed from " + n + " ⤑ " + e.config.appId + ". Wiping IndexedDB and SessionStorage data.");
                        sessionStorage.clear();
                        return I["default"].rebuild().then(function() {
                            return I["default"].put("Ids", {
                                type: "appId",
                                id: e.config.appId
                            })
                        }).then(function() {
                            e._initCalled = false;
                            if (!e._initCalledTimes) e._initCalledTimes = 0;
                            e._initCalledTimes++;
                            if (e._initCalledTimes < 5) e.init(e.config);
                            return Promise.reject("OneSignal: App ID changed from " + n + " ⤑ " + e.config.appId + ". Wiping IndexedDB and SessionStorage data.")
                        })
                    }
                }).then(function() {
                    return e.getAppId()
                }).then(function(e) {
                    return Promise.all([I["default"].put("Ids", {
                        type: "appId",
                        id: e
                    }), I["default"].put("Options", {
                        key: "pageTitle",
                        value: document.title
                    })]).then(function() {
                        b["default"].info("OneSignal: Set pageTitle to be '" + document.title + "'.")
                    })
                })
            }
        }, {
            key: "loadSubdomainIFrame",
            value: function U() {
                var n = new Promise(function(n, t) {
                    b["default"].debug("Called %cloadSubdomainIFrame()", (0, x.getConsoleStyle)("code"));
                    var i = e.config.dangerouslyWipeData;
                    if (i) e.iframeUrl += "?&dangerouslyWipeData=true";
                    b["default"].debug("Loading subdomain iFrame:", e.iframeUrl);
                    var o = j["default"].createHiddenDomIFrame(e.iframeUrl);
                    o.onload = function() {
                        b["default"].info("iFrame onload event was called for:", o.src);
                        var t = "https://" + e.config.subdomainName + ".onesignal.com";
                        if (c["default"].isDev()) t = s.DEV_FRAME_HOST;
                        var i = t;
                        e.iframePostmam = new W["default"](o.contentWindow, t, i);
                        e.iframePostmam.connect();
                        e.iframePostmam.on("connect", function(t) {
                            b["default"].debug("(" + c["default"].getEnv() + ") Fired Postmam connect event!");
                            Promise.all([I["default"].get("Options", "defaultUrl"), I["default"].get("Options", "defaultTitle")]).then(function(t) {
                                var i = a(t, 2);
                                var o = i[0];
                                var r = i[1];
                                if (!o) var l = location.href;
                                else var l = o;
                                if (!r) var s = document.title;
                                else var s = r;
                                e.iframePostmam.message(e.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, {
                                    hostInitOptions: JSON.parse(JSON.stringify(e.config)),
                                    pageUrl: l,
                                    pageTitle: s
                                }, function(t) {
                                    if (t.data === e.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) {
                                        n();
                                        S["default"].trigger(e.EVENTS.SDK_INITIALIZED)
                                    }
                                    return false
                                })
                            })
                        });
                        e.iframePostmam.on(e.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, function(e) {
                            var n = e.data;
                            var t = n.eventName;
                            var i = n.eventData;
                            S["default"].trigger(t, i, e.source);
                            return false
                        });
                        e.iframePostmam.on(e.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, function(n) {
                            var t = n.data;
                            e.triggerNotificationPermissionChanged();
                            return false
                        });
                        e.iframePostmam.on(e.POSTMAM_COMMANDS.NOTIFICATION_OPENED, function(n) {
                            e._fireTransmittedNotificationClickedCallbacks(n.data);
                            return false
                        });
                        e.iframePostmam.on(e.POSTMAM_COMMANDS.REQUEST_HOST_URL, function(e) {
                            e.reply(location.href);
                            return false
                        })
                    };
                    e._sessionIframeAdded = true
                });
                return (0, x.executeAndTimeoutPromiseAfter)(n, 15e3)["catch"](function() {
                    return console.warn("OneSignal: Could not load iFrame with URL " + e.iframeUrl + ". Please check that your 'subdomainName' matches that on your OneSignal Chrome platform settings. Also please check that your Site URL on your Chrome platform settings is a valid reachable URL pointing to your site.")
                })
            }
        }, {
            key: "loadPopup",
            value: function L(n) {
                var t = "https://" + e.config.subdomainName + ".onesignal.com";
                if (c["default"].isDev()) t = s.DEV_FRAME_HOST;
                var i = t;
                var o = e.config.dangerouslyWipeData;
                var r = (0, C["default"])({}, j["default"].getPromptOptionsPostHash(), {
                    promptType: "popup",
                    parentHostname: encodeURIComponent(location.hostname)
                });
                if (n && n.autoAccept) r.autoAccept = true;
                if (o) r.dangerouslyWipeData = true;
                b["default"].info("Opening popup window to " + e.popupUrl + " with POST data:", e.popupUrl);
                var a = j["default"].openSubdomainPopup(e.popupUrl, r);
                if (a) a.focus();
                e.popupPostmam = new W["default"](a, t, i);
                e.popupPostmam.startPostMessageReceive();
                return new Promise(function(n, t) {
                    e.popupPostmam.on(e.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, function(e) {
                        var n = e.data;
                        var t = n.eventName;
                        var i = n.eventData;
                        S["default"].trigger(t, i, e.source);
                        return false
                    });
                    e.popupPostmam.once(e.POSTMAM_COMMANDS.POPUP_LOADED, function(e) {
                        S["default"].trigger("popupLoad")
                    });
                    e.popupPostmam.once(e.POSTMAM_COMMANDS.POPUP_ACCEPTED, function(e) {
                        j["default"].triggerCustomPromptClicked("granted")
                    });
                    e.popupPostmam.once(e.POSTMAM_COMMANDS.POPUP_REJECTED, function(e) {
                        j["default"].triggerCustomPromptClicked("denied")
                    });
                    e.popupPostmam.once(e.POSTMAM_COMMANDS.POPUP_IDS_AVAILBLE, function(t) {
                        b["default"].info("ids available from popup");
                        e.popupPostmam.stopPostMessageReceive();
                        j["default"].checkAndTriggerSubscriptionChanged();
                        n()
                    });
                    e.popupPostmam.once(e.POSTMAM_COMMANDS.POPUP_CLOSING, function(n) {
                        b["default"].info("Detected popup is closing.");
                        S["default"].trigger(e.EVENTS.POPUP_CLOSING);
                        e.popupPostmam.destroy()
                    });
                    e.popupPostmam.once(e.POSTMAM_COMMANDS.BEGIN_BROWSING_SESSION, function(e) {
                        b["default"].debug(c["default"].getEnv() + " Marking current session as a continuing browsing session.");
                        j["default"].beginTemporaryBrowserSession()
                    })
                })
            }
        }, {
            key: "_sessionInit",
            value: function B(n) {
                b["default"].debug("Called %c_sessionInit(" + JSON.stringify(n) + ")", (0, x.getConsoleStyle)("code"));
                if (e._sessionInitAlreadyRunning) {
                    b["default"].debug("Returning from _sessionInit because it has already been called.");
                    return
                } else e._sessionInitAlreadyRunning = true;
                var t = location.protocol + "//";
                if (P.safari) {
                    if (e.config.safari_web_id) e.getAppId().then(function(n) {
                        window.safari.pushNotification.requestPermission(e._API_URL + "safari", e.config.safari_web_id, {
                            app_id: n
                        }, function(t) {
                            b["default"].info("Safari Registration Result:", t);
                            if (t.deviceToken) {
                                var i = {
                                    endpointOrToken: t.deviceToken.toLowerCase()
                                };
                                j["default"].registerWithOneSignal(n, i)
                            } else j["default"].beginTemporaryBrowserSession();
                            e.triggerNotificationPermissionChanged()
                        })
                    })["catch"](function(e) {
                        return b["default"].error(e)
                    })
                } else if (n.modalPrompt && n.fromRegisterFor) Promise.all([e.getAppId(), e.isPushNotificationsEnabled(), e.getNotificationPermission()]).then(function(t) {
                    var i = a(t, 3);
                    var o = i[0];
                    var r = i[1];
                    var l = i[2];
                    var u = e.modalUrl + "?" + j["default"].getPromptOptionsQueryString() + "&id=" + o + "&httpsPrompt=true&pushEnabled=" + r + "&permissionBlocked=" + ("denied" === l) + "&promptType=modal";
                    b["default"].info("Opening HTTPS modal prompt:", u);
                    var f = j["default"].createSubscriptionDomModal(u);
                    var d = "https://onesignal.com";
                    if (c["default"].isDev()) d = s.DEV_FRAME_HOST;
                    var g = d;
                    e.modalPostmam = new W["default"](f, d, g);
                    e.modalPostmam.startPostMessageReceive();
                    return new Promise(function(t, i) {
                        e.modalPostmam.once(e.POSTMAM_COMMANDS.MODAL_LOADED, function(e) {
                            S["default"].trigger("modalLoaded")
                        });
                        e.modalPostmam.once(e.POSTMAM_COMMANDS.MODAL_PROMPT_ACCEPTED, function(t) {
                            b["default"].debug("User accepted the HTTPS modal prompt.");
                            e._sessionInitAlreadyRunning = false;
                            var i = document.getElementById("OneSignal-iframe-modal");
                            i.parentNode.removeChild(i);
                            e.modalPostmam.destroy();
                            j["default"].triggerCustomPromptClicked("granted");
                            e._registerForW3CPush(n)
                        });
                        e.modalPostmam.once(e.POSTMAM_COMMANDS.MODAL_PROMPT_REJECTED, function(n) {
                            b["default"].debug("User rejected the HTTPS modal prompt.");
                            e._sessionInitAlreadyRunning = false;
                            var t = document.getElementById("OneSignal-iframe-modal");
                            t.parentNode.removeChild(t);
                            e.modalPostmam.destroy();
                            j["default"].triggerCustomPromptClicked("denied")
                        });
                        e.modalPostmam.once(e.POSTMAM_COMMANDS.POPUP_CLOSING, function(n) {
                            b["default"].info("Detected modal is closing.");
                            e.modalPostmam.destroy()
                        })
                    })
                });
                else if ("serviceWorker" in navigator && !e.isUsingSubscriptionWorkaround())
                    if (n.__sdkCall && !j["default"].wasHttpsNativePromptDismissed()) e._registerForW3CPush(n);
                    else if (n.__sdkCall && j["default"].wasHttpsNativePromptDismissed()) {
                    b["default"].debug("OneSignal: Not automatically showing native HTTPS prompt because the user previously dismissed it.");
                    e._sessionInitAlreadyRunning = false
                } else e._registerForW3CPush(n);
                else {
                    if (true !== e.config.autoRegister) b["default"].debug("OneSignal: Not automatically showing popover because autoRegister is not specifically true.");
                    if (j["default"].isHttpPromptAlreadyShown()) b["default"].debug("OneSignal: Not automatically showing popover because it was previously shown in the same session.");
                    if (true === e.config.autoRegister && !j["default"].isHttpPromptAlreadyShown()) e.showHttpPrompt()
                }
                S["default"].trigger(e.EVENTS.SDK_INITIALIZED)
            }
        }, {
            key: "_updateServiceWorker",
            value: function H() {
                var n = sessionStorage.getItem("onesignal-update-serviceworker-completed");
                if (!navigator.serviceWorker || !c["default"].isHost() || "https:" !== location.protocol || "true" == n) {
                    b["default"].debug("Skipping service worker update for existing session.");
                    return
                }
                try {
                    sessionStorage.setItem("onesignal-update-serviceworker-completed", "true")
                } catch (t) {
                    b["default"].error(t)
                }
                return navigator.serviceWorker.getRegistration().then(function(n) {
                    var t = "";
                    if (e.config.path) t = e.config.path;
                    if (n && n.active) {
                        var i = n.active.scriptURL;
                        if ((0, x.contains)(i, t + e.SERVICE_WORKER_PATH)) {
                            b["default"].debug("(Service Worker Update)", "The main service worker is active.");
                            return I["default"].get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION").then(function(n) {
                                if (n) {
                                    b["default"].debug("(Service Worker Update)", "Stored service worker version v" + n + ".");
                                    if (n != e._VERSION) {
                                        b["default"].debug("(Service Worker Update)", "New service worker version exists:", e._VERSION);
                                        b["default"].warn("Upgrading service worker (v" + n + " -> v" + e._VERSION + ")");
                                        return navigator.serviceWorker.register(t + e.SERVICE_WORKER_UPDATER_PATH, e.SERVICE_WORKER_PARAM)
                                    } else {
                                        b["default"].debug("(Service Worker Update)", "You already have the latest service worker version.");
                                        return null
                                    }
                                } else {
                                    b["default"].debug("(Service Worker Update)", "No stored service worker version. Reinstalling the service worker.");
                                    return navigator.serviceWorker.register(t + e.SERVICE_WORKER_UPDATER_PATH, e.SERVICE_WORKER_PARAM)
                                }
                            })["catch"](function(e) {
                                b["default"].error(e)
                            })
                        } else if ((0, x.contains)(i, t + e.SERVICE_WORKER_UPDATER_PATH)) {
                            b["default"].debug("(Service Worker Update)", "The alternate service worker is active.");
                            return I["default"].get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION").then(function(n) {
                                if (n) {
                                    b["default"].debug("(Service Worker Update)", "Stored service worker version v" + n + ".");
                                    if (n != e._VERSION) {
                                        b["default"].debug("(Service Worker Update)", "New service worker version exists:", e._VERSION);
                                        b["default"].info("Upgrading new service worker (v" + n + " -> v" + e._VERSION + ")");
                                        return navigator.serviceWorker.register(t + e.SERVICE_WORKER_PATH, e.SERVICE_WORKER_PARAM)
                                    } else {
                                        b["default"].debug("(Service Worker Update)", "You already have the latest service worker version.");
                                        return null
                                    }
                                } else {
                                    b["default"].debug("(Service Worker Update)", "No stored service worker version. Reinstalling the service worker.");
                                    return navigator.serviceWorker.register(t + e.SERVICE_WORKER_PATH, e.SERVICE_WORKER_PARAM)
                                }
                            })["catch"](function(e) {
                                b["default"].error(e)
                            })
                        } else;
                    }
                })["catch"](function(e) {
                    b["default"].error(e)
                })
            }
        }, {
            key: "_registerForW3CPush",
            value: function V(n) {
                b["default"].debug("Called %c_registerForW3CPush(" + JSON.stringify(n) + ")", (0, x.getConsoleStyle)("code"));
                return I["default"].get("Ids", "registrationId").then(function t(i) {
                    if (!i || !n.fromRegisterFor || "granted" != Notification.permission || null == navigator.serviceWorker.controller) navigator.serviceWorker.getRegistration().then(function(n) {
                        var t = "";
                        if (e.config.path) t = e.config.path;
                        if ("undefined" == typeof n) e._registerServiceWorker(t + e.SERVICE_WORKER_PATH);
                        else if (n.active) {
                            var i = n.active.scriptURL;
                            if ((0, x.contains)(i, t + e.SERVICE_WORKER_PATH)) I["default"].get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION").then(function(n) {
                                if (n)
                                    if (n != e._VERSION) {
                                        b["default"].info("Installing new service worker (" + n + " -> " + e._VERSION + ")");
                                        e._registerServiceWorker(t + e.SERVICE_WORKER_UPDATER_PATH)
                                    } else e._registerServiceWorker(t + e.SERVICE_WORKER_PATH);
                                else e._registerServiceWorker(t + e.SERVICE_WORKER_UPDATER_PATH)
                            })["catch"](function(e) {
                                b["default"].error(e)
                            });
                            else if ((0, x.contains)(i, t + e.SERVICE_WORKER_UPDATER_PATH)) I["default"].get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION").then(function(n) {
                                if (n)
                                    if (n != e._VERSION) {
                                        b["default"].info("Installing new service worker (" + n + " -> " + e._VERSION + ")");
                                        e._registerServiceWorker(t + e.SERVICE_WORKER_PATH)
                                    } else e._registerServiceWorker(t + e.SERVICE_WORKER_UPDATER_PATH);
                                else e._registerServiceWorker(t + e.SERVICE_WORKER_PATH)
                            })["catch"](function(e) {
                                b["default"].error(e)
                            });
                            else {
                                b["default"].info("Unregistering previous service worker:", n);
                                n.unregister().then(function(n) {
                                    b["default"].info("Result of unregistering:", n);
                                    e._registerServiceWorker(t + e.SERVICE_WORKER_PATH)
                                })
                            }
                        } else if (null == n.installing) e._registerServiceWorker(t + e.SERVICE_WORKER_PATH)
                    })["catch"](function(e) {
                        b["default"].error(e)
                    })
                })["catch"](function(e) {
                    b["default"].error(e)
                })
            }
        }, {
            key: "_registerServiceWorker",
            value: function z(n) {
                b["default"].debug("Called %c_registerServiceWorker(" + JSON.stringify(n, null, 4) + ")", (0, x.getConsoleStyle)("code"));
                navigator.serviceWorker.register(n, e.SERVICE_WORKER_PARAM).then(e._enableNotifications, e._registerError)
            }
        }, {
            key: "_registerError",
            value: function G(e) {
                b["default"].error("ServiceWorker registration", e)
            }
        }, {
            key: "_enableNotifications",
            value: function q(n) {
                b["default"].debug("Called %c_enableNotifications()", (0, x.getConsoleStyle)("code"));
                if (!("PushManager" in window)) {
                    b["default"].warn("Push messaging is not supported. No PushManager.");
                    j["default"].beginTemporaryBrowserSession();
                    return
                }
                if (!("showNotification" in ServiceWorkerRegistration.prototype)) {
                    b["default"].warn("Notifications are not supported. showNotification not available in ServiceWorkerRegistration.");
                    j["default"].beginTemporaryBrowserSession();
                    return
                }
                if ("denied" === Notification.permission) {
                    b["default"].warn("The user has blocked notifications.");
                    return
                }
                b["default"].debug("Calling %cnavigator.serviceWorker.ready() ...", (0, x.getConsoleStyle)("code"));
                navigator.serviceWorker.ready.then(function(n) {
                    b["default"].debug("Finished calling %cnavigator.serviceWorker.ready", (0, x.getConsoleStyle)("code"));
                    j["default"].establishServiceWorkerChannel(n);
                    e._subscribeForPush(n)
                })["catch"](function(e) {
                    b["default"].error(e)
                })
            }
        }, {
            key: "getNotificationPermission",
            value: function K(n) {
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                var t = null;
                if (e.config) t = e.config.safari_web_id;
                return e._getNotificationPermission(t).then(function(e) {
                    if (n) n(e);
                    return e
                })
            }
        }, {
            key: "isUsingSubscriptionWorkaround",
            value: function Y() {
                if (!e.config) throw new Error("(" + c["default"].getEnv() + ") isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists.");
                if (P.safari) return false;
                var n = c["default"].isHost() && (e.config.subdomainName || "http:" === location.protocol);
                return !!n
            }
        }, {
            key: "_getNotificationPermission",
            value: function Z(n) {
                return new Promise(function(t, i) {
                    function o() {
                        if (e.isUsingSubscriptionWorkaround()) e.iframePostmam.message(e.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, {
                            safariWebId: n
                        }, function(e) {
                            var n = e.data;
                            t(n)
                        });
                        else if (P.safari)
                            if (n) t(window.safari.pushNotification.permission(n).permission);
                            else console.warn("OneSignal: Invalid init option safari_web_id %c" + n, (0, x.getConsoleStyle)("code"), ". Please pass in a valid safari_web_id to OneSignal init.");
                        else t(Notification.permission)
                    }
                    if (!e.initialized) e.once(e.EVENTS.SDK_INITIALIZED, o);
                    else o()
                })
            }
        }, {
            key: "triggerNotificationPermissionChanged",
            value: function J() {
                var n = arguments.length <= 0 || void 0 === arguments[0] ? false : arguments[0];
                var t = void 0,
                    i = void 0;
                return Promise.all([e.getNotificationPermission(), I["default"].get("Options", "notificationPermission")]).then(function(e) {
                    var o = a(e, 2);
                    var r = o[0];
                    var l = o[1];
                    t = r;
                    i = r !== l || n;
                    if (i) return I["default"].put("Options", {
                        key: "notificationPermission",
                        value: r
                    })
                }).then(function() {
                    if (i) S["default"].trigger(e.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, {
                        from: null,
                        to: t
                    })
                })
            }
        }, {
            key: "triggerSubscriptionChanged",
            value: function Q(n) {
                S["default"].trigger(e.EVENTS.SUBSCRIPTION_CHANGED, n)
            }
        }, {
            key: "triggerInternalSubscriptionSet",
            value: function X(n) {
                S["default"].trigger(e.EVENTS.INTERNAL_SUBSCRIPTIONSET, n)
            }
        }, {
            key: "_subscribeForPush",
            value: function $(n) {
                b["default"].debug("Called %c_subscribeForPush()", (0, x.getConsoleStyle)("code"));
                var t = "";
                e.getNotificationPermission().then(function(e) {
                    t = e
                }).then(function() {
                    b["default"].debug("Calling %cServiceWorkerRegistration.pushManager.subscribe()", (0, x.getConsoleStyle)("code"));
                    S["default"].trigger(e.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                    return j["default"].requestNotificationPermissionPromise()
                }).then(function(e) {
                    if ("granted" !== e) throw new Error("User did not grant push permission to allow notifications.");
                    else return n.pushManager.subscribe({
                        userVisibleOnly: true
                    })
                }).then(function(n) {
                    b["default"].debug("Finished calling %cServiceWorkerRegistration.pushManager.subscribe()", (0, x.getConsoleStyle)("code"));
                    e._sessionInitAlreadyRunning = false;
                    sessionStorage.setItem("ONE_SIGNAL_NOTIFICATION_PERMISSION", Notification.permission);
                    e.getAppId().then(function(e) {
                        b["default"].debug("Finished subscribing for push via pushManager.subscribe().");
                        var t = {};
                        if (n) {
                            if ("undefined" != typeof n.subscriptionId) t.endpointOrToken = n.subscriptionId;
                            else t.endpointOrToken = n.endpoint;
                            if (n.getKey) {
                                var i = null;
                                try {
                                    i = n.getKey("p256dh")
                                } catch (o) {}
                                var r = null;
                                try {
                                    r = n.getKey("auth")
                                } catch (o) {}
                                if (i) {
                                    var a = btoa(String.fromCharCode.apply(null, new Uint8Array(i)));
                                    t.p256dh = a
                                }
                                if (r) {
                                    var l = btoa(String.fromCharCode.apply(null, new Uint8Array(r)));
                                    t.auth = l
                                }
                            }
                        } else b["default"].warn("Could not subscribe your browser for push notifications.");
                        j["default"].registerWithOneSignal(e, t)
                    })["catch"](function(e) {
                        b["default"].error(e)
                    })
                })["catch"](function(n) {
                    e._sessionInitAlreadyRunning = false;
                    if ("Registration failed - no sender id provided" === n.message || "Registration failed - manifest empty or missing" === n.message) {
                        var t = document.querySelector("link[rel=manifest]");
                        if (t) {
                            var i = document.querySelector("link[rel=manifest]").parentNode.tagName.toLowerCase();
                            var o = document.querySelector("link[rel=manifest]").outerHTML;
                            var r = document.querySelector("link[rel=manifest]").href;
                            if ("head" !== i) console.warn("OneSignal: Your manifest %c" + o, (0, x.getConsoleStyle)("code"), "must be referenced in the <head> tag to be detected properly. It is currently referenced in <" + i + ">. (See: https://documentation.onesignal.com/docs/website-sdk-installation#3-include-and-initialize-the-sdk)");
                            else {
                                var a = new URL(r).origin;
                                var l = location.origin;
                                if (l !== a) console.warn("OneSignal: Your manifest is being served from " + a + ", which is different from the current page's origin of " + l + ". Please serve your manifest from the same origin as your page's. If you are using a content delivery network (CDN), please add an exception so that the manifest is not served by your CDN. (See: https://documentation.onesignal.com/docs/website-sdk-installation#2-upload-required-files)");
                                else console.warn("OneSignal: Please check your manifest at " + r + ". The %cgcm_sender_id", (0, x.getConsoleStyle)("code"), "field is missing or invalid. (See: https://documentation.onesignal.com/docs/website-sdk-installation#2-upload-required-files)")
                            }
                        } else if ("https:" === location.protocol) console.warn("OneSignal: You must reference a %cmanifest.json", (0, x.getConsoleStyle)("code"), "in <head>. (See: https://documentation.onesignal.com/docs/website-sdk-installation#2-upload-required-files)")
                    } else b["default"].error("Error while subscribing for push:", n);
                    e.getNotificationPermission().then(function(n) {
                        if ("default" === n) {
                            e.triggerNotificationPermissionChanged(true);
                            j["default"].markHttpsNativePromptDismissed()
                        }
                        if (!e._usingNativePermissionHook) e.triggerNotificationPermissionChanged();
                        if (opener && e._thisIsThePopup) window.close()
                    })["catch"](function(e) {
                        return b["default"].error(e)
                    })
                })
            }
        }, {
            key: "getTags",
            value: function ee(n) {
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                return e.getUserId().then(function(e) {
                    if (e) return d["default"].get("players/" + e, null);
                    else return null
                }).then(function(e) {
                    var t = e ? e.tags : null;
                    if (n) n(t);
                    return t
                })["catch"](function(e) {
                    b["default"].error(e);
                    return Promise.reject(e)
                })
            }
        }, {
            key: "sendTag",
            value: function ne(n, t, i) {
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                var o = {};
                o[n] = t;
                return e.sendTags(o, i)
            }
        }, {
            key: "sendTags",
            value: function te(n, t) {
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                return new Promise(function(i, o) {
                    function r() {
                        if (n) Object.keys(n).forEach(function(e) {
                            if (false === n[e]) n[e] = "false"
                        });
                        var i = false;
                        return new Promise(function(o, r) {
                            Promise.all([e.getAppId(), e.getUserId()]).then(function(r) {
                                var l = a(r, 2);
                                var s = l[0];
                                var u = l[1];
                                if (u) return d["default"].put("players/" + u, {
                                    app_id: s,
                                    tags: n
                                });
                                else {
                                    i = true;
                                    e.on(I["default"].EVENTS.SET, function(i) {
                                        if (i && "userId" === i.type) {
                                            e.sendTags(n, t).then(o);
                                            return true
                                        }
                                    })
                                }
                            }).then(function() {
                                if (!i) {
                                    if (t) t(n);
                                    o(n)
                                }
                            })["catch"](function(e) {
                                b["default"].error("sendTags:", e);
                                r(e)
                            })
                        })
                    }
                    if (!e.initialized) return new Promise(function(n, t) {
                        e.once(e.EVENTS.SDK_INITIALIZED, function() {
                            return r().then(n)["catch"](t)
                        })
                    });
                    else r().then(i)["catch"](o)
                })
            }
        }, {
            key: "deleteTag",
            value: function ie(n) {
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                if ("string" == typeof n || n instanceof String) return e.deleteTags([n]);
                else return Promise.reject(new Error("OneSignal: Invalid tag '" + n + "' to delete. You must pass in a string."))
            }
        }, {
            key: "deleteTags",
            value: function oe(n, t) {
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                return new Promise(function(i, o) {
                    if (n instanceof Array && n.length > 0) {
                        var r = {};
                        var a = n.length;
                        for (var l = 0; l < a; l++) r[n[l]] = "";
                        return e.sendTags(r).then(function(e) {
                            var n = Object.keys(e);
                            if (t) t(n);
                            i(n)
                        })
                    } else o(new Error("OneSignal: Invalid tags '" + n + "' to delete. You must pass in array of strings with at least one tag string to be deleted."))
                })
            }
        }, {
            key: "addListenerForNotificationOpened",
            value: function re(n) {
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                e._notificationOpenedCallbacks.push(n);
                if (!e.initialized) e.once(e.EVENTS.SDK_INITIALIZED, function() {
                    return e._fireSavedNotificationClickedCallbacks()
                });
                else e._fireSavedNotificationClickedCallbacks()
            }
        }, {
            key: "_fireTransmittedNotificationClickedCallbacks",
            value: function ae(n) {
                var t = true;
                var i = false;
                var o = void 0;
                try {
                    for (var r = e._notificationOpenedCallbacks[Symbol.iterator](), a; !(t = (a = r.next()).done); t = true) {
                        var l = a.value;
                        l(n)
                    }
                } catch (s) {
                    i = true;
                    o = s
                } finally {
                    try {
                        if (!t && r["return"]) r["return"]()
                    } finally {
                        if (i) throw o
                    }
                }
            }
        }, {
            key: "_fireSavedNotificationClickedCallbacks",
            value: function le() {
                I["default"].get("NotificationOpened", document.URL).then(function(n) {
                    if (n) {
                        I["default"].remove("NotificationOpened", document.URL);
                        var t = n.data;
                        var i = n.timestamp;
                        var o = false;
                        if (i) {
                            var r = Date.now();
                            var a = Date.now() - i;
                            var l = a / 1e3 / 60;
                            o = l > 5
                        }
                        if (o) return;
                        var s = true;
                        var u = false;
                        var c = void 0;
                        try {
                            for (var f = e._notificationOpenedCallbacks[Symbol.iterator](), d; !(s = (d = f.next()).done); s = true) {
                                var g = d.value;
                                g(t)
                            }
                        } catch (p) {
                            u = true;
                            c = p
                        } finally {
                            try {
                                if (!s && f["return"]) f["return"]()
                            } finally {
                                if (u) throw c
                            }
                        }
                    }
                })["catch"](function(e) {
                    return b["default"].error(e)
                })
            }
        }, {
            key: "getIdsAvailable",
            value: function se(n) {
                function t() {
                    Promise.all([e.getUserId(), e.getRegistrationId()]).then(function(e) {
                        var t = a(e, 2);
                        var i = t[0];
                        var o = t[1];
                        if (n) n({
                            userId: i,
                            registrationId: o
                        })
                    })
                }
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                console.info("OneSignal: getIdsAvailable() is deprecated. Please use getUserId() or getRegistrationId() instead.");
                if (void 0 === n) return;
                e.isPushNotificationsEnabled(function(n) {
                    if (!n) e.on(e.EVENTS.SUBSCRIPTION_CHANGED, function(e) {
                        if (true === e) t()
                    });
                    else return t()
                })
            }
        }, {
            key: "isServiceWorkerActive",
            value: function ue(n) {
                function t(e) {
                    return e.active && "activated" === e.active.state && ((0, x.contains)(e.active.scriptURL, "OneSignalSDKWorker") || (0, x.contains)(e.active.scriptURL, "OneSignalSDKUpdaterWorker"))
                }
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                if (!("serviceWorker" in navigator)) return false;
                return new Promise(function(i, o) {
                    if (!e.isUsingSubscriptionWorkaround() && !c["default"].isIframe()) ! function() {
                        var e = false;
                        if (navigator.serviceWorker.getRegistrations) navigator.serviceWorker.getRegistrations().then(function(o) {
                            var r = true;
                            var a = false;
                            var l = void 0;
                            try {
                                for (var s = o[Symbol.iterator](), u; !(r = (u = s.next()).done); r = true) {
                                    var c = u.value;
                                    if (t(c)) e = true
                                }
                            } catch (f) {
                                a = true;
                                l = f
                            } finally {
                                try {
                                    if (!r && s["return"]) s["return"]()
                                } finally {
                                    if (a) throw l
                                }
                            }
                            if (n) n(e);
                            i(e)
                        });
                        else navigator.serviceWorker.ready.then(function(o) {
                            if (t(o)) e = true;
                            if (n) n(e);
                            i(e)
                        })
                    }();
                    else {
                        if (n) n(false);
                        i(false)
                    }
                })
            }
        }, {
            key: "isPushNotificationsEnabled",
            value: function ce(n) {
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                return new Promise(function(t, i) {
                    function o() {
                        Promise.all([e.getUserId(), e.getRegistrationId(), e.getNotificationPermission(), e.getSubscription(), e.isServiceWorkerActive()]).then(function(i) {
                            var o = a(i, 5);
                            var r = o[0];
                            var l = o[1];
                            var s = o[2];
                            var u = o[3];
                            var f = o[4];
                            var d = false;
                            if ("serviceWorker" in navigator && !e.isUsingSubscriptionWorkaround() && !c["default"].isIframe()) d = r && l && "granted" === s && u && f;
                            else d = r && l && "granted" === s && u;
                            d = true == d;
                            if (n) n(d);
                            t(d)
                        })["catch"](function(e) {
                            b["default"].error(e);
                            i(e)
                        })
                    }
                    if (!e.initialized) e.once(e.EVENTS.SDK_INITIALIZED, function() {
                        return o()
                    });
                    else o()
                })
            }
        }, {
            key: "getAppId",
            value: function fe() {
                if (e.config.appId) return Promise.resolve(e.config.appId);
                else return I["default"].get("Ids", "appId")
            }
        }, {
            key: "setSubscription",
            value: function de(n) {
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                return new Promise(function(t, i) {
                    Promise.all([e.getSubscription(), e.getUserId()]).then(function(o) {
                        var r = a(o, 2);
                        var l = r[0];
                        var s = r[1];
                        if (!s) {
                            b["default"].warn("Cannot set the user's subscription state to '" + n + "' because no user ID was stored.");
                            t(false);
                            return
                        }
                        if (l === n) {
                            t(false);
                            return
                        }
                        var u = null;
                        if (e.isUsingSubscriptionWorkaround()) u = new Promise(function(t, i) {
                            e.iframePostmam.message(e.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{
                                table: "Options",
                                keypath: {
                                    key: "subscription",
                                    value: n
                                }
                            }], function(n) {
                                if (n.data === e.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) t();
                                else i("Tried to set remote db subscription value, but did not get complete response.")
                            })
                        });
                        else u = I["default"].put("Options", {
                            key: "subscription",
                            value: n
                        });
                        u.then(function() {
                            return e.getAppId()
                        }).then(function(e) {
                            return d["default"].put("players/" + s, {
                                app_id: e,
                                notification_types: j["default"].getNotificationTypeFromOptIn(n)
                            })
                        }).then(function() {
                            e.triggerInternalSubscriptionSet(n);
                            t(true)
                        })["catch"](function(e) {
                            b["default"].warn(e);
                            i(e)
                        })
                    })
                })
            }
        }, {
            key: "isOptedOut",
            value: function ge(n) {
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                return e.getSubscription().then(function(e) {
                    if (n) n(!e);
                    return !e
                })
            }
        }, {
            key: "optOut",
            value: function pe(n, t) {
                if (false !== n || true !== n) throw new Error("Invalid parameter '" + n + "' passed to OneSignal.optOut(). You must specify true or false.");
                return e.setSubscription(n).then(function() {
                    if (t) t()
                })
            }
        }, {
            key: "getUserId",
            value: function he(n) {
                function t() {
                    return I["default"].get("Ids", "userId").then(function(e) {
                        if (n) n(e);
                        return e
                    })["catch"](function(e) {
                        return b["default"].error(e)
                    })
                }
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                if (!e.initialized) return new Promise(function(n, i) {
                    e.once(e.EVENTS.SDK_INITIALIZED, function() {
                        return t().then(n)["catch"](i)
                    })
                });
                else return t()
            }
        }, {
            key: "getRegistrationId",
            value: function be(n) {
                function t() {
                    return I["default"].get("Ids", "registrationId").then(function(e) {
                        if (n) n(e);
                        return e
                    })["catch"](function(e) {
                        return b["default"].error(e)
                    })
                }
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                if (!e.initialized) return new Promise(function(n, i) {
                    e.once(e.EVENTS.SDK_INITIALIZED, function() {
                        return t().then(n)["catch"](i)
                    })
                });
                else return t()
            }
        }, {
            key: "getSubscription",
            value: function ve(n) {
                function t() {
                    return I["default"].get("Options", "subscription").then(function(e) {
                        if (null == e) e = true;
                        if (n) n(e);
                        return e
                    })["catch"](function(e) {
                        return b["default"].error(e)
                    })
                }
                if (!(0, x.isPushNotificationsSupportedAndWarn)()) return;
                if (!e.initialized) return new Promise(function(n, i) {
                    e.once(e.EVENTS.SDK_INITIALIZED, function() {
                        return t().then(n)["catch"](i)
                    })
                });
                else return t()
            }
        }, {
            key: "_processPushes",
            value: function me(n) {
                for (var t = 0; t < n.length; t++) e.push(n[t])
            }
        }, {
            key: "push",
            value: function ye(n) {
                if ("function" == typeof n) n();
                else {
                    var t = n.shift();
                    e[t].apply(null, n)
                }
            }
        }]);
        return e
    }();
    n["default"] = z;
    (0, C["default"])(z, {
        VERSION: "109715",
        _VERSION: "109715",
        _API_URL: s.API_URL,
        _notificationOpenedCallbacks: [],
        _idsAvailable_callback: [],
        _defaultLaunchURL: null,
        config: null,
        _thisIsThePopup: false,
        __isPopoverShowing: false,
        _sessionInitAlreadyRunning: false,
        _isNotificationEnabledCallback: [],
        _subscriptionSet: true,
        iframeUrl: null,
        popupUrl: null,
        modalUrl: null,
        _sessionIframeAdded: false,
        _windowWidth: 650,
        _windowHeight: 568,
        _isNewVisitor: false,
        _channel: null,
        cookie: O["default"],
        initialized: false,
        notifyButton: null,
        store: m["default"],
        environment: c["default"],
        database: I["default"],
        event: S["default"],
        browser: P,
        popover: null,
        log: b["default"],
        swivel: L["default"],
        api: d["default"],
        indexedDb: p["default"],
        iframePostmam: null,
        popupPostmam: null,
        helpers: j["default"],
        objectAssign: C["default"],
        checkAndTriggerSubscriptionChanged: j["default"].checkAndTriggerSubscriptionChanged,
        sendSelfNotification: j["default"].sendSelfNotification,
        SERVICE_WORKER_UPDATER_PATH: "OneSignalSDKUpdaterWorker.js",
        SERVICE_WORKER_PATH: "OneSignalSDKWorker.js",
        SERVICE_WORKER_PARAM: {},
        POSTMAM_COMMANDS: {
            CONNECTED: "connect",
            REMOTE_NOTIFICATION_PERMISSION: "postmam.remoteNotificationPermission",
            REMOTE_DATABASE_GET: "postmam.remoteDatabaseGet",
            REMOTE_DATABASE_PUT: "postmam.remoteDatabasePut",
            REMOTE_DATABASE_REMOVE: "postmam.remoteDatabaseRemove",
            REMOTE_OPERATION_COMPLETE: "postman.operationComplete",
            REMOTE_RETRIGGER_EVENT: "postmam.remoteRetriggerEvent",
            MODAL_LOADED: "postmam.modalPrompt.loaded",
            MODAL_PROMPT_ACCEPTED: "postmam.modalPrompt.accepted",
            MODAL_PROMPT_REJECTED: "postmam.modalPrompt.canceled",
            POPUP_LOADED: "postmam.popup.loaded",
            POPUP_ACCEPTED: "postmam.popup.accepted",
            POPUP_REJECTED: "postmam.popup.canceled",
            POPUP_CLOSING: "postman.popup.closing",
            REMOTE_NOTIFICATION_PERMISSION_CHANGED: "postmam.remoteNotificationPermissionChanged",
            NOTIFICATION_OPENED: "postmam.notificationOpened",
            IFRAME_POPUP_INITIALIZE: "postmam.iframePopupInitialize",
            POPUP_IDS_AVAILBLE: "postman.popupIdsAvailable",
            UNSUBSCRIBE_FROM_PUSH: "postmam.unsubscribeFromPush",
            BEGIN_BROWSING_SESSION: "postmam.beginBrowsingSession",
            REQUEST_HOST_URL: "postmam.requestHostUrl"
        },
        EVENTS: {
            CUSTOM_PROMPT_CLICKED: "customPromptClick",
            NATIVE_PROMPT_PERMISSIONCHANGED: "notificationPermissionChange",
            SUBSCRIPTION_CHANGED: "subscriptionChange",
            WELCOME_NOTIFICATION_SENT: "sendWelcomeNotification",
            NOTIFICATION_DISPLAYED: "notificationDisplay",
            NOTIFICATION_DISMISSED: "notificationDismiss",
            INTERNAL_SUBSCRIPTIONSET: "subscriptionSet",
            SDK_INITIALIZED: "initialize",
            REGISTERED: "register",
            POPUP_CLOSING: "popupClose",
            PERMISSION_PROMPT_DISPLAYED: "permissionPromptDisplay"
        },
        NOTIFICATION_TYPES: {
            SUBSCRIBED: 1,
            UNSUBSCRIBED: -2
        }
    });
    Object.defineProperty(z, "LOGGING", {
        get: function G() {
            if (!z._LOGGING) z._LOGGING = false;
            return z._LOGGING
        },
        set: function q(e) {
            if (e) {
                b["default"].setDefaultLevel(b["default"].levels.TRACE);
                z._LOGGING = true
            } else {
                b["default"].setDefaultLevel(b["default"].levels.ERROR);
                z._LOGGING = false
            }
        },
        enumerable: true,
        configurable: true
    });
    D["default"].merge(z, new R["default"]);
    if (z.LOGGING) b["default"].setDefaultLevel(b["default"].levels.TRACE);
    else b["default"].setDefaultLevel(b["default"].levels.ERROR);
    b["default"].info("%cOneSignal Web SDK loaded (version " + z._VERSION + ", " + c["default"].getEnv() + " environment).", (0, x.getConsoleStyle)("bold"));
    e.exports = z
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n && ("object" == typeof n || "function" == typeof n) ? n : e
    }

    function a(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (n) Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var l = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var s = t(1);
    var u = t(2);
    var c = i(u);
    var f = t(3);
    var d = i(f);
    var g = t(9);
    var p = i(g);
    var h = t(13);
    var b = i(h);
    var v = function(e) {
        function n(e) {
            o(this, n);
            var t = r(this, Object.getPrototypeOf(n).call(this, ".onesignal-bell-launcher-message", "onesignal-bell-launcher-message-opened", null, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-message-body"));
            t.bell = e;
            t.contentType = "";
            t.queued = [];
            return t
        }
        a(n, e);
        l(n, [{
            key: "display",
            value: function t(e, n) {
                var t = this;
                var i = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2];
                c["default"].debug("Calling %cdisplay(" + e + ", " + n + ", " + i + ").", (0, s.getConsoleStyle)("code"));
                return new Promise(function(o, r) {
                    (t.shown ? t.hide() : (0, s.nothing)()).then(function() {
                        t.content = (0, s.decodeHtmlEntities)(n);
                        t.contentType = e
                    }).then(function() {
                        return t.show()
                    }).then(function() {
                        return (0, s.delay)(i)
                    }).then(function() {
                        return t.hide()
                    }).then(function() {
                        t.content = t.getTipForState();
                        t.contentType = "tip"
                    }).then(o)["catch"](function(e) {
                        return c["default"].error(e)
                    })
                })
            }
        }, {
            key: "getTipForState",
            value: function i() {
                if (this.bell.state === b["default"].STATES.UNSUBSCRIBED) return this.bell.text["tip.state.unsubscribed"];
                else if (this.bell.state === b["default"].STATES.SUBSCRIBED) return this.bell.text["tip.state.subscribed"];
                else if (this.bell.state === b["default"].STATES.BLOCKED) return this.bell.text["tip.state.blocked"]
            }
        }, {
            key: "enqueue",
            value: function u(e) {
                var n = this;
                var t = arguments.length <= 1 || void 0 === arguments[1] ? false : arguments[1];
                this.queued.push((0, s.decodeHtmlEntities)(e));
                return new Promise(function(e) {
                    if (n.bell.badge.shown) n.bell.badge.hide().then(function() {
                        return n.bell.badge.increment()
                    }).then(function() {
                        return n.bell.badge.show()
                    }).then(e);
                    else {
                        n.bell.badge.increment();
                        if (n.bell.initialized) n.bell.badge.show().then(e);
                        else e()
                    }
                })
            }
        }, {
            key: "dequeue",
            value: function f(e) {
                var n = this;
                var t = this.queued.pop(e);
                return new Promise(function(e) {
                    if (n.bell.badge.shown) n.bell.badge.hide().then(function() {
                        return n.bell.badge.decrement()
                    }).then(function(e) {
                        if (e > 0) return n.bell.badge.show();
                        else return Promise.resolve(n)
                    }).then(e(t));
                    else {
                        n.bell.badge.decrement();
                        e(t)
                    }
                })
            }
        }], [{
            key: "TIMEOUT",
            get: function d() {
                return 2500
            }
        }, {
            key: "TYPES",
            get: function g() {
                return {
                    TIP: "tip",
                    MESSAGE: "message",
                    QUEUED: "queued"
                }
            }
        }]);
        return n
    }(p["default"]);
    n["default"] = v
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var r = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var a = t(1);
    var l = t(11);
    var s = i(l);
    var u = t(10);
    var c = i(u);
    var f = t(4);
    var d = i(f);
    var g = t(5);
    var p = t(8);
    var h = i(p);
    var b = t(2);
    var v = i(b);
    var m = function() {
        function e(n, t, i) {
            o(this, e);
            if (!window || !window.postMessage) throw new Error("Must pass in a valid window reference supporting postMessage().", n);
            if (!t || !i) throw new Error("Invalid origin. Must be set.");
            c["default"].merge(this, new s["default"]);
            this.windowReference = n;
            this.sendToOrigin = t;
            this.receiveFromOrigin = i;
            this.channel = new MessageChannel;
            this.messagePort = null;
            this.isListening = false;
            this.isConnected = false;
            this.replies = {}
        }
        r(e, null, [{
            key: "HANDSHAKE_MESSAGE",
            get: function n() {
                return "onesignal.postmam.handshake"
            }
        }, {
            key: "CONNECTED_MESSAGE",
            get: function t() {
                return "onesignal.postmam.connected"
            }
        }]);
        r(e, [{
            key: "listen",
            value: function i() {
                if (this.isListening) {
                    v["default"].warn("(Postmam) Already listening for Postmam connections.");
                    return
                }
                if (!d["default"].isBrowser()) return;
                this.isListening = true;
                v["default"].info("(Postmam) Listening for Postmam connections.", this);
                window.addEventListener("message", this.onWindowMessagePostmanConnectReceived.bind(this))
            }
        }, {
            key: "startPostMessageReceive",
            value: function l() {
                window.addEventListener("message", this.onWindowPostMessageReceived.bind(this))
            }
        }, {
            key: "stopPostMessageReceive",
            value: function u() {
                window.removeEventListener("message", this.onWindowPostMessageReceived)
            }
        }, {
            key: "destroy",
            value: function f() {
                this.stopPostMessageReceive();
                this.removeEvent()
            }
        }, {
            key: "onWindowPostMessageReceived",
            value: function g(n) {
                if (!this.isSafeOrigin(n.origin)) {
                    v["default"].debug("(Postmam) Discarding message because " + n.origin + " is not an allowed origin:", n.data);
                    return
                }
                var t = n.data;
                var i = t.id;
                var o = t.command;
                var r = t.data;
                var a = t.source;
                if (o === e.CONNECTED_MESSAGE) {
                    this.emit("connect");
                    this.isConnected = true;
                    return
                }
                var l = {
                    id: i,
                    command: o,
                    data: r,
                    source: a
                };
                var s = (0, h["default"])({
                    reply: this.reply.bind(this, l)
                }, l);
                if (this.replies.hasOwnProperty(i)) {
                    v["default"].info("(Postmam) This message is a reply.");
                    var u = this.replies[i].bind(this.window);
                    var c = u(s);
                    if (false === c) delete this.replies[i]
                } else this.emit(o, s)
            }
        }, {
            key: "onWindowMessagePostmanConnectReceived",
            value: function p(n) {
                if (!this.isSafeOrigin(n.origin)) {
                    v["default"].debug("(Postmam) Discarding message because " + n.origin + " is not an allowed origin:", n.data);
                    return
                }
                var t = n.data.handshake;
                if (t !== e.HANDSHAKE_MESSAGE) {
                    v["default"].info("(Postmam) Got a postmam message, but not our expected handshake:", n.data);
                    return
                }
                window.removeEventListener("message", this.onWindowMessagePostmanConnectReceived);
                this.messagePort = n.ports[0];
                this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), false);
                this.messagePort.start();
                this.isConnected = true;
                v["default"].info("(Postmam) (" + d["default"].getEnv() + ") Connected.");
                this.message(e.CONNECTED_MESSAGE);
                this.emit("connect")
            }
        }, {
            key: "connect",
            value: function b() {
                v["default"].info("(Postmam) (" + d["default"].getEnv() + ") Establishing a connection to " + this.sendToOrigin + ".");
                this.messagePort = this.channel.port1;
                this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), false);
                this.messagePort.start();
                this.windowReference.postMessage({
                    handshake: e.HANDSHAKE_MESSAGE
                }, this.sendToOrigin, [this.channel.port2])
            }
        }, {
            key: "onMessageReceived",
            value: function m(n) {
                if (!n.data) {
                    v["default"].warn("(" + d["default"].getEnv() + ") Received an empty Postmam message:", n);
                    return
                }
                var t = n.data;
                var i = t.id;
                var o = t.command;
                var r = t.data;
                var a = t.source;
                if (o === e.CONNECTED_MESSAGE) {
                    this.emit("connect");
                    this.isConnected = true;
                    return
                }
                var l = {
                    id: i,
                    command: o,
                    data: r,
                    source: a
                };
                var s = (0, h["default"])({
                    reply: this.reply.bind(this, l)
                }, l);
                if (this.replies.hasOwnProperty(i)) {
                    var u = this.replies[i].bind(this.window);
                    var c = u(s);
                    if (false === c) delete this.replies[i]
                } else this.emit(o, s)
            }
        }, {
            key: "reply",
            value: function y(e, n, t) {
                var i = {
                    id: e.id,
                    command: e.command,
                    data: n,
                    source: d["default"].getEnv(),
                    isReply: true
                };
                if ("function" == typeof t) this.replies[messageId] = t;
                this.messagePort.postMessage(i)
            }
        }, {
            key: "postMessage",
            value: function S(e, n, t) {
                if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty.");
                if ("function" == typeof n) {
                    v["default"].debug("You passed a function to data, did you mean to pass null?");
                    return
                }
                var i = {
                    id: (0, a.guid)(),
                    command: e,
                    data: n,
                    source: d["default"].getEnv()
                };
                if ("function" == typeof t) this.replies[i.id] = t;
                this.windowReference.postMessage(i, "*")
            }
        }, {
            key: "message",
            value: function w(e, n, t) {
                if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty.");
                if ("function" == typeof n) {
                    v["default"].debug("You passed a function to data, did you mean to pass null?");
                    return
                }
                var i = {
                    id: (0, a.guid)(),
                    command: e,
                    data: n,
                    source: d["default"].getEnv()
                };
                if ("function" == typeof t) this.replies[i.id] = t;
                this.messagePort.postMessage(i)
            }
        }, {
            key: "isSafeOrigin",
            value: function E(e) {
                if (!OneSignal.config) var n = "test";
                else var n = OneSignal.config.subdomainName;
                var t = [];
                try {
                    var i = new URL(this.receiveFromOrigin);
                    var o = i.host.replace("www.", "");
                    if ("https:" === i.protocol) {
                        t.push("https://" + o);
                        t.push("https://www." + o)
                    } else if ("http:" === i.protocol) {
                        t.push("http://" + o);
                        t.push("http://www." + o);
                        t.push("https://" + o);
                        t.push("https://www." + o)
                    }
                } catch (r) {}
                return "https://onesignal.com" === e || e === "https://" + (n || "") + ".onesignal.com" || false || "*" === this.receiveFromOrigin || e === this.receiveFromOrigin || (0, a.contains)(t, e)
            }
        }]);
        return e
    }();
    n["default"] = m
}, function(e, n, t) {
    "use strict";
    var i = t(15);
    var o = t(37);
    e.exports = function r(e, n) {
        var t = n || {};
        var r = {};
        if (void 0 === e) e = {};
        e.on = function(n, t) {
            if (!r[n]) r[n] = [t];
            else r[n].push(t);
            return e
        };
        e.once = function(n, t) {
            t._once = true;
            e.on(n, t);
            return e
        };
        e.off = function(n, t) {
            var i = arguments.length;
            if (1 === i) delete r[n];
            else if (0 === i) r = {};
            else {
                var o = r[n];
                if (!o) return e;
                o.splice(o.indexOf(t), 1)
            }
            return e
        };
        e.emit = function() {
            var n = i(arguments);
            return e.emitterSnapshot(n.shift()).apply(this, n)
        };
        e.emitterSnapshot = function(n) {
            var a = (r[n] || []).slice(0);
            return function() {
                var r = i(arguments);
                var l = this || e;
                if ("error" === n && false !== t["throws"] && !a.length) throw 1 === r.length ? r[0] : r;
                a.forEach(function s(i) {
                    if (t.async) o(i, r, l);
                    else i.apply(l, r);
                    if (i._once) e.off(n, i)
                });
                return e
            }
        };
        return e
    }
}, function(e, n) {
    e.exports = function() {
        var e = [];
        e.toString = function n() {
            var e = [];
            for (var n = 0; n < this.length; n++) {
                var t = this[n];
                if (t[2]) e.push("@media " + t[2] + "{" + t[1] + "}");
                else e.push(t[1])
            }
            return e.join("")
        };
        e.i = function(n, t) {
            if ("string" == typeof n) n = [
                [null, n, ""]
            ];
            var i = {};
            for (var o = 0; o < this.length; o++) {
                var r = this[o][0];
                if ("number" == typeof r) i[r] = true
            }
            for (o = 0; o < n.length; o++) {
                var a = n[o];
                if ("number" != typeof a[0] || !i[a[0]]) {
                    if (t && !a[2]) a[2] = t;
                    else if (t) a[2] = "(" + a[2] + ") and (" + t + ")";
                    e.push(a)
                }
            }
        };
        return e
    }
}, function(e, n, t) {
    var i, o;
    ! function(r) {
        if (true) !(i = r, o = "function" == typeof i ? i.call(n, t, n, e) : i, void 0 !== o && (e.exports = o));
        else if ("object" == typeof n) e.exports = r();
        else {
            var a = window.Cookies;
            var l = window.Cookies = r();
            l.noConflict = function() {
                window.Cookies = a;
                return l
            }
        }
    }(function() {
        function e() {
            var e = 0;
            var n = {};
            for (; e < arguments.length; e++) {
                var t = arguments[e];
                for (var i in t) n[i] = t[i]
            }
            return n
        }

        function n(t) {
            function i(n, o, r) {
                var a;
                if ("undefined" == typeof document) return;
                if (arguments.length > 1) {
                    r = e({
                        path: "/"
                    }, i.defaults, r);
                    if ("number" == typeof r.expires) {
                        var l = new Date;
                        l.setMilliseconds(l.getMilliseconds() + 864e5 * r.expires);
                        r.expires = l
                    }
                    try {
                        a = JSON.stringify(o);
                        if (/^[\{\[]/.test(a)) o = a
                    } catch (s) {}
                    if (!t.write) o = encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    else o = t.write(o, n);
                    n = encodeURIComponent(String(n));
                    n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                    n = n.replace(/[\(\)]/g, escape);
                    return document.cookie = [n, "=", o, r.expires && "; expires=" + r.expires.toUTCString(), r.path && "; path=" + r.path, r.domain && "; domain=" + r.domain, r.secure ? "; secure" : ""].join("")
                }
                if (!n) a = {};
                var u = document.cookie ? document.cookie.split("; ") : [];
                var c = /(%[0-9A-Z]{2})+/g;
                var f = 0;
                for (; f < u.length; f++) {
                    var d = u[f].split("=");
                    var g = d.slice(1).join("=");
                    if ('"' === g.charAt(0)) g = g.slice(1, -1);
                    try {
                        var p = d[0].replace(c, decodeURIComponent);
                        g = t.read ? t.read(g, p) : t(g, p) || g.replace(c, decodeURIComponent);
                        if (this.json) try {
                            g = JSON.parse(g)
                        } catch (s) {}
                        if (n === p) {
                            a = g;
                            break
                        }
                        if (!n) a[p] = g
                    } catch (s) {}
                }
                return a
            }
            i.set = i;
            i.get = function(e) {
                return i(e)
            };
            i.getJSON = function() {
                return i.apply({
                    json: true
                }, [].slice.call(arguments))
            };
            i.defaults = {};
            i.remove = function(n, t) {
                i(n, "", e(t, {
                    expires: -1
                }))
            };
            i.withConverter = n;
            return i
        }
        return n(function() {})
    })
}, function(e, n, t) {
    function i(e, n) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            var o = g[i.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                for (; r < i.parts.length; r++) o.parts.push(u(i.parts[r], n))
            } else {
                var a = [];
                for (var r = 0; r < i.parts.length; r++) a.push(u(i.parts[r], n));
                g[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function o(e) {
        var n = [];
        var t = {};
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            var r = o[0];
            var a = o[1];
            var l = o[2];
            var s = o[3];
            var u = {
                css: a,
                media: l,
                sourceMap: s
            };
            if (!t[r]) n.push(t[r] = {
                id: r,
                parts: [u]
            });
            else t[r].parts.push(u)
        }
        return n
    }

    function r(e, n) {
        var t = b();
        var i = y[y.length - 1];
        if ("top" === e.insertAt) {
            if (!i) t.insertBefore(n, t.firstChild);
            else if (i.nextSibling) t.insertBefore(n, i.nextSibling);
            else t.appendChild(n);
            y.push(n)
        } else if ("bottom" === e.insertAt) t.appendChild(n);
        else throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")
    }

    function a(e) {
        e.parentNode.removeChild(e);
        var n = y.indexOf(e);
        if (n >= 0) y.splice(n, 1)
    }

    function l(e) {
        var n = document.createElement("style");
        n.type = "text/css";
        r(e, n);
        return n
    }

    function s(e) {
        var n = document.createElement("link");
        n.rel = "stylesheet";
        r(e, n);
        return n
    }

    function u(e, n) {
        var t, i, o;
        if (n.singleton) {
            var r = m++;
            t = v || (v = l(n));
            i = c.bind(null, t, r, false);
            o = c.bind(null, t, r, true)
        } else if (e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa) {
            t = s(n);
            i = d.bind(null, t);
            o = function() {
                a(t);
                if (t.href) URL.revokeObjectURL(t.href)
            }
        } else {
            t = l(n);
            i = f.bind(null, t);
            o = function() {
                a(t)
            }
        }
        i(e);
        return function u(n) {
            if (n) {
                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                i(e = n)
            } else o()
        }
    }

    function c(e, n, t, i) {
        var o = t ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = S(n, o);
        else {
            var r = document.createTextNode(o);
            var a = e.childNodes;
            if (a[n]) e.removeChild(a[n]);
            if (a.length) e.insertBefore(r, a[n]);
            else e.appendChild(r)
        }
    }

    function f(e, n) {
        var t = n.css;
        var i = n.media;
        if (i) e.setAttribute("media", i);
        if (e.styleSheet) e.styleSheet.cssText = t;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t))
        }
    }

    function d(e, n) {
        var t = n.css;
        var i = n.sourceMap;
        if (i) t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */";
        var o = new Blob([t], {
            type: "text/css"
        });
        var r = e.href;
        e.href = URL.createObjectURL(o);
        if (r) URL.revokeObjectURL(r)
    }
    var g = {},
        p = function(e) {
            var n;
            return function() {
                if ("undefined" == typeof n) n = e.apply(this, arguments);
                return n
            }
        },
        h = p(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }),
        b = p(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        v = null,
        m = 0,
        y = [];
    e.exports = function(e, n) {
        if (false)
            if ("object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        n = n || {};
        if ("undefined" == typeof n.singleton) n.singleton = h();
        if ("undefined" == typeof n.insertAt) n.insertAt = "bottom";
        var t = o(e);
        i(t, n);
        return function r(e) {
            var r = [];
            for (var a = 0; a < t.length; a++) {
                var l = t[a];
                var s = g[l.id];
                s.refs--;
                r.push(s)
            }
            if (e) {
                var u = o(e);
                i(u, n)
            }
            for (var a = 0; a < r.length; a++) {
                var s = r[a];
                if (0 === s.refs) {
                    for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                    delete g[s.id]
                }
            }
        }
    };
    var S = function() {
        var e = [];
        return function(n, t) {
            e[n] = t;
            return e.filter(Boolean).join("\n")
        }
    }()
}, function(e, n) {
    "use strict";

    function t(e) {
        return e ? e.toString() : null
    }

    function i(e) {
        return e ? new Error(e) : null
    }

    function o(e) {
        var n = e.shift();
        if ("error" === n) return {
            error: t(e[0]),
            type: n,
            payload: []
        };
        return {
            error: null,
            type: n,
            payload: e
        }
    }

    function r(e, n) {
        function t(t) {
            var o = t.data;
            if ("error" === o.type) e.emit.call(null, "error", n, i(o.error));
            else e.emit.apply(null, [o.type, n].concat(o.payload))
        }
        return t
    }
    e.exports = {
        parsePayload: o,
        emission: r
    }
}, function(e, n, t) {
    (function(e) {
        "use strict";

        function n(e) {
            if (e && e.__esModule) return e;
            else {
                var n = {};
                if (null != e)
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) n[t] = e[t];
                n["default"] = e;
                return n
            }
        }

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
            function e(e, n) {
                var t = [];
                var i = true;
                var o = false;
                var r = void 0;
                try {
                    for (var a = e[Symbol.iterator](), l; !(i = (l = a.next()).done); i = true) {
                        t.push(l.value);
                        if (n && t.length === n) break
                    }
                } catch (s) {
                    o = true;
                    r = s
                } finally {
                    try {
                        if (!i && a["return"]) a["return"]()
                    } finally {
                        if (o) throw r
                    }
                }
                return t
            }
            return function(n, t) {
                if (Array.isArray(n)) return n;
                else if (Symbol.iterator in Object(n)) return e(n, t);
                else throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        var a = function() {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(n, t, i) {
                if (t) e(n.prototype, t);
                if (i) e(n, i);
                return n
            }
        }();
        var l = t(5);
        var s = t(4);
        var u = i(s);
        var c = t(18);
        var f = i(c);
        var d = t(2);
        var g = i(d);
        var p = t(7);
        var h = i(p);
        var b = t(1);
        var v = t(8);
        var m = i(v);
        var y = t(21);
        var S = i(y);
        var w = t(6);
        var E = n(w);
        var k = function() {
            function n() {
                o(this, n)
            }
            a(n, null, [{
                key: "run",
                value: function t() {
                    self.addEventListener("push", n.onPushReceived);
                    self.addEventListener("notificationclose", n.onNotificationClosed);
                    self.addEventListener("notificationclick", n.onNotificationClicked);
                    self.addEventListener("install", n.onServiceWorkerInstalled);
                    self.addEventListener("activate", n.onServiceWorkerActivated);
                    S["default"].on("data", n.onMessageReceived);
                    if (E.firefox && E.version && (0, b.contains)(E.version, "44")) h["default"].get("Options", "serviceWorkerRefetchRequests").then(function(e) {
                        if (true == e) {
                            g["default"].info("Detected Firefox v44; installing fetch handler to refetch all requests.");
                            self.REFETCH_REQUESTS = true;
                            self.addEventListener("fetch", n.onFetch)
                        } else {
                            self.SKIP_REFETCH_REQUESTS = true;
                            g["default"].info("Detected Firefox v44 but not refetching requests because option is set to false.")
                        }
                    })["catch"](function(e) {
                        g["default"].error(e);
                        self.REFETCH_REQUESTS = true;
                        self.addEventListener("fetch", n.onFetch)
                    })
                }
            }, {
                key: "onMessageReceived",
                value: function i(e, t) {
                    g["default"].debug("%c" + u["default"].getEnv().capitalize() + " ⬸ Host:", (0, b.getConsoleStyle)("serviceworkermessage"), t, e);
                    if (!t) {
                        g["default"].debug("Returning from empty data message.");
                        return
                    }
                    if ("notification.closeall" === t) self.registration.getNotifications().then(function(e) {
                        var n = true;
                        var t = false;
                        var i = void 0;
                        try {
                            for (var o = e[Symbol.iterator](), r; !(n = (r = o.next()).done); n = true) {
                                var a = r.value;
                                a.close()
                            }
                        } catch (l) {
                            t = true;
                            i = l
                        } finally {
                            try {
                                if (!n && o["return"]) o["return"]()
                            } finally {
                                if (t) throw i
                            }
                        }
                    });
                    else if (t.query) n.processQuery(t.query, t.response)
                }
            }, {
                key: "processQuery",
                value: function s(e, n) {
                    if (!self.queries) g["default"].warn("queryClient() was not called before processQuery(). self.queries is empty.");
                    if (!self.queries[e]) {
                        g["default"].warn("Received query " + e + " response " + n + ". Expected self.queries to be preset to a hash.");
                        return
                    } else {
                        if (!self.queries[e].promise) {
                            g["default"].warn("Expected self.queries[" + e + "].promise value to be a Promise: " + self.queries[e]);
                            return
                        }
                        self.queries[e].promiseResolve(n)
                    }
                }
            }, {
                key: "queryClient",
                value: function c(e, n) {
                    if (!self.queries) self.queries = {};
                    if (!self.queries[n]) self.queries[n] = {};
                    self.queries[n].promise = new Promise(function(t, i) {
                        self.queries[n].promiseResolve = t;
                        self.queries[n].promiseReject = i;
                        S["default"].emit(e.id, n)
                    });
                    return self.queries[n].promise
                }
            }, {
                key: "onPushReceived",
                value: function d(e) {
                    g["default"].debug("Called %conPushReceived(" + JSON.stringify(e, null, 4) + "):", (0, b.getConsoleStyle)("code"), e);
                    e.waitUntil(n.retrieveNotifications().then(function(e) {
                        if (!e || 0 == e.length) {
                            g["default"].debug("Because no notifications were retrieved, we'll display the last known notification, so long as it isn't the welcome notification.");
                            return n.displayBackupNotification()
                        }
                        var t = [];
                        var i = true;
                        var o = false;
                        var r = void 0;
                        try {
                            for (var a = e[Symbol.iterator](), l; !(i = (l = a.next()).done); i = true) {
                                var s = l.value;
                                g["default"].debug("Raw Notification from OneSignal:", s);
                                var u = n.buildStructuredNotificationObject(s);
                                t.push(function(e) {
                                    return n.displayNotification(e).then(function() {
                                        return n.updateBackupNotification(e)
                                    }).then(function() {
                                        return S["default"].broadcast("notification.displayed", e)
                                    }).then(function() {
                                        return n.executeWebhooks("notification.displayed", e)
                                    })
                                }.bind(null, u))
                            }
                        } catch (c) {
                            o = true;
                            r = c
                        } finally {
                            try {
                                if (!i && a["return"]) a["return"]()
                            } finally {
                                if (o) throw r
                            }
                        }
                        return t.reduce(function(e, n) {
                            return e = e.then(n)
                        }, Promise.resolve())
                    })["catch"](function(e) {
                        g["default"].debug("Failed to display a notification:", e);
                        if (self.UNSUBSCRIBED_FROM_NOTIFICATIONS) g["default"].debug("Because we have just unsubscribed from notifications, we will not show anything.");
                        else {
                            g["default"].debug("Because a notification failed to display, we'll display the last known notification, so long as it isn't the welcome notification.");
                            return n.displayBackupNotification()
                        }
                    }))
                }
            }, {
                key: "executeWebhooks",
                value: function p(n, t) {
                    var i = false;
                    var o = null;
                    return h["default"].get("Ids", "userId").then(function(e) {
                        o = e
                    }).then(function() {
                        return h["default"].get("Options", "webhooks.cors")
                    }).then(function(e) {
                        i = e
                    }).then(function() {
                        return h["default"].get("Options", "webhooks." + n)
                    }).then(function(r) {
                        if (r) {
                            var a = r;
                            var l = {
                                event: n,
                                id: t.id,
                                userId: o,
                                action: t.action,
                                buttons: t.buttons,
                                heading: t.heading,
                                content: t.content,
                                url: t.url,
                                icon: t.icon,
                                data: t.data
                            };
                            var s = {
                                method: "post",
                                mode: "no-cors",
                                body: JSON.stringify(l)
                            };
                            if (i) {
                                s.mode = "cors";
                                s.headers = {
                                    "X-OneSignal-Event": n,
                                    "Content-Type": "application/json"
                                }
                            }
                            g["default"].debug("Executing " + n + " webhook " + (i ? "with" : "without") + " CORS %cPOST " + a, (0, b.getConsoleStyle)("code"), ":", l);
                            return e(a, s)
                        }
                    })["catch"](function(e) {
                        g["default"].error("Error executing webhook:", e)
                    })
                }
            }, {
                key: "getActiveClients",
                value: function v() {
                    return self.clients.matchAll({
                        type: "window",
                        includeUncontrolled: true
                    }).then(function(e) {
                        var n = [];
                        var t = true;
                        var i = false;
                        var o = void 0;
                        try {
                            for (var r = e[Symbol.iterator](), a; !(t = (a = r.next()).done); t = true) {
                                var s = a.value;
                                if (s.frameType && "nested" === s.frameType) {
                                    if (u["default"].isDev() && !(0, b.contains)(s.url, l.DEV_FRAME_HOST) || !u["default"].isDev() && !(0, b.contains)(s.url, ".onesignal.com")) continue;
                                    s.isSubdomainIframe = true
                                }
                                n.push(s)
                            }
                        } catch (c) {
                            i = true;
                            o = c
                        } finally {
                            try {
                                if (!t && r["return"]) r["return"]()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    })
                }
            }, {
                key: "buildStructuredNotificationObject",
                value: function y(e) {
                    var n = {
                        id: e.custom.i,
                        heading: e.title,
                        content: e.alert,
                        data: e.custom.a,
                        url: e.custom.u,
                        icon: e.icon
                    };
                    if (e.o) {
                        n.buttons = [];
                        var t = true;
                        var i = false;
                        var o = void 0;
                        try {
                            for (var r = e.o[Symbol.iterator](), a; !(t = (a = r.next()).done); t = true) {
                                var l = a.value;
                                n.buttons.push({
                                    action: l.i,
                                    title: l.n,
                                    icon: l.p,
                                    url: l.u
                                })
                            }
                        } catch (s) {
                            i = true;
                            o = s
                        } finally {
                            try {
                                if (!t && r["return"]) r["return"]()
                            } finally {
                                if (i) throw o
                            }
                        }
                    }
                    return (0, b.trimUndefined)(n)
                }
            }, {
                key: "ensureImageResourceHttps",
                value: function w(e) {
                    if (e) {
                        try {
                            var n = new URL(e);
                            if ("localhost" === n.hostname || (0, b.contains)(n.hostname, "192.168") || "https:" === n.protocol) return e
                        } catch (t) {}
                        var i = e.replace(/https:\/\//, "ssl:").replace(/http:\/\//, "");
                        return "https://images.weserv.nl/?url=" + encodeURIComponent(i);
                    } else return null
                }
            }, {
                key: "ensureNotificationResourcesHttps",
                value: function k(e) {
                    if (e) {
                        if (e.icon) e.icon = n.ensureImageResourceHttps(e.icon);
                        if (e.buttons && e.buttons.length > 0) {
                            var t = true;
                            var i = false;
                            var o = void 0;
                            try {
                                for (var r = e.buttons[Symbol.iterator](), a; !(t = (a = r.next()).done); t = true) {
                                    var l = a.value;
                                    if (l.icon) l.icon = n.ensureImageResourceHttps(l.icon)
                                }
                            } catch (s) {
                                i = true;
                                o = s
                            } finally {
                                try {
                                    if (!t && r["return"]) r["return"]()
                                } finally {
                                    if (i) throw o
                                }
                            }
                        }
                    }
                }
            }, {
                key: "displayNotification",
                value: function O(e, t) {
                    g["default"].debug("Called %cdisplayNotification(" + JSON.stringify(e, null, 4) + "):", (0, b.getConsoleStyle)("code"), e);
                    return Promise.all([n._getTitle(), h["default"].get("Options", "defaultIcon"), h["default"].get("Options", "persistNotification"), h["default"].get("Ids", "appId")]).then(function(i) {
                        var o = r(i, 4);
                        var a = o[0];
                        var l = o[1];
                        var s = o[2];
                        var u = o[3];
                        e.heading = e.heading ? e.heading : a;
                        e.icon = e.icon ? e.icon : l ? l : void 0;
                        var c = {};
                        c.tag = "" + u;
                        c.persistNotification = s;
                        if (!t) t = {};
                        e = (0, m["default"])(e, t);
                        n.ensureNotificationResourcesHttps(e);
                        var f = {
                            body: e.content,
                            icon: e.icon,
                            data: e,
                            actions: e.buttons,
                            tag: c.tag,
                            requireInteraction: c.persistNotification,
                            renotify: true
                        };
                        return self.registration.showNotification(e.heading, f)
                    })
                }
            }, {
                key: "updateBackupNotification",
                value: function _(e) {
                    var n = e.data && e.data.__isOneSignalWelcomeNotification;
                    if (n) return;
                    return h["default"].put("Ids", {
                        type: "backupNotification",
                        id: e
                    })
                }
            }, {
                key: "displayBackupNotification",
                value: function I() {
                    return h["default"].get("Ids", "backupNotification").then(function(e) {
                        var t = {
                            persistNotification: false,
                            data: {
                                __isOneSignalBackupNotification: true
                            }
                        };
                        if (e) return n.displayNotification(e, t);
                        else return n.displayNotification({
                            content: "You have new updates."
                        }, t)
                    })
                }
            }, {
                key: "shouldOpenNotificationUrl",
                value: function T(e) {
                    return "javascript:void(0);" !== e && "do_not_open" !== e && !(0, b.contains)(e, "_osp=do_not_open")
                }
            }, {
                key: "onNotificationClosed",
                value: function P(e) {
                    g["default"].debug("Called %conNotificationClosed(" + JSON.stringify(e, null, 4) + "):", (0, b.getConsoleStyle)("code"), e);
                    var t = e.notification.data;
                    S["default"].broadcast("notification.dismissed", t);
                    e.waitUntil(n.executeWebhooks("notification.dismissed", t))
                }
            }, {
                key: "getNotificationUrlToOpen",
                value: function x(e) {
                    var t = self.registration.scope;
                    if (n.defaultLaunchUrl) t = n.defaultLaunchUrl;
                    if (e.action) {
                        var i = true;
                        var o = false;
                        var r = void 0;
                        try {
                            for (var a = e.buttons[Symbol.iterator](), l; !(i = (l = a.next()).done); i = true) {
                                var s = l.value;
                                if (s.action === e.action && s.url && "" !== s.url) t = s.url
                            }
                        } catch (u) {
                            o = true;
                            r = u
                        } finally {
                            try {
                                if (!i && a["return"]) a["return"]()
                            } finally {
                                if (o) throw r
                            }
                        }
                    } else if (e.url && "" !== e.url) t = e.url;
                    return t
                }
            }, {
                key: "onNotificationClicked",
                value: function N(e) {
                    g["default"].debug("Called %conNotificationClicked(" + JSON.stringify(e, null, 4) + "):", (0, b.getConsoleStyle)("code"), e);
                    var t = e.notification.data;
                    t.action = e.action;
                    e.notification.close();
                    var i = "exact";
                    e.waitUntil(h["default"].get("Options", "defaultUrl").then(function(e) {
                        if (e) n.defaultLaunchUrl = e
                    }).then(function() {
                        return h["default"].get("Options", "notificationClickHandlerMatch")
                    }).then(function(e) {
                        if (e) i = e
                    }).then(function() {
                        return n.getActiveClients()
                    }).then(function(e) {
                        var o = n.getNotificationUrlToOpen(t);
                        var r = n.shouldOpenNotificationUrl(o);
                        var a = [];
                        var l = false;
                        var s = true;
                        var u = false;
                        var c = void 0;
                        try {
                            var f = function b() {
                                var e = g.value;
                                var r = null;
                                if (e.isSubdomainIframe) r = n.queryClient(e, "url");
                                else r = Promise.resolve(e.url);
                                r.then(function(n) {
                                    var r = new URL(n).origin;
                                    var a = null;
                                    try {
                                        a = new URL(o).origin
                                    } catch (s) {}
                                    if ("exact" === i && n === o || "origin" === i && r === a) {
                                        e.focus();
                                        S["default"].emit(e.id, "notification.clicked", t);
                                        l = true
                                    }
                                });
                                a.push(r)
                            };
                            for (var d = e[Symbol.iterator](), g; !(s = (g = d.next()).done); s = true) f()
                        } catch (p) {
                            u = true;
                            c = p
                        } finally {
                            try {
                                if (!s && d["return"]) d["return"]()
                            } finally {
                                if (u) throw c
                            }
                        }
                        return Promise.all(a).then(function() {
                            return h["default"].put("NotificationOpened", {
                                url: o,
                                data: t,
                                timestamp: Date.now()
                            })
                        }).then(function() {
                            if (r && !l) n.openUrl(o)
                        })
                    }).then(function() {
                        return Promise.all([h["default"].get("Ids", "appId"), h["default"].get("Ids", "userId")])
                    }).then(function(e) {
                        var n = r(e, 2);
                        var i = n[0];
                        var o = n[1];
                        if (i && o) return f["default"].put("notifications/" + t.id, {
                            app_id: i,
                            player_id: o,
                            opened: true
                        })
                    }).then(function() {
                        return n.executeWebhooks("notification.clicked", t)
                    })["catch"](function(e) {
                        return g["default"].error(e)
                    }))
                }
            }, {
                key: "openUrl",
                value: function C(e) {
                    g["default"].debug("Opening notification URL:", e);
                    clients.openWindow(e)["catch"](function(n) {
                        g["default"].warn("Failed to open the URL '" + e + "':", n);
                        clients.openWindow(registration.scope + "redirector.html?url=" + e)
                    })
                }
            }, {
                key: "onServiceWorkerInstalled",
                value: function A(e) {
                    g["default"].debug("Called %conServiceWorkerInstalled(" + JSON.stringify(e, null, 4) + "):", (0, b.getConsoleStyle)("code"), e);
                    g["default"].info("Installing service worker: %c" + self.location.pathname, (0, b.getConsoleStyle)("code"), "(version 109715)");
                    if ((0, b.contains)(self.location.pathname, "OneSignalSDKWorker.js")) var n = "WORKER1_ONE_SIGNAL_SW_VERSION";
                    else var n = "WORKER2_ONE_SIGNAL_SW_VERSION";
                    e.waitUntil(h["default"].put("Ids", {
                        type: n,
                        id: "109715"
                    }).then(function() {
                        return self.skipWaiting()
                    })["catch"](function(e) {
                        return g["default"].error(e)
                    }))
                }
            }, {
                key: "onServiceWorkerActivated",
                value: function R(e) {
                    g["default"].debug("Called %conServiceWorkerActivated(" + JSON.stringify(e, null, 4) + "):", (0, b.getConsoleStyle)("code"), e);
                    e.waitUntil(self.clients.claim())
                }
            }, {
                key: "onFetch",
                value: function M(n) {
                    n.respondWith(e(n.request))
                }
            }, {
                key: "_getTitle",
                value: function D() {
                    return new Promise(function(e, n) {
                        Promise.all([h["default"].get("Options", "defaultTitle"), h["default"].get("Options", "pageTitle")]).then(function(n) {
                            var t = r(n, 2);
                            var i = t[0];
                            var o = t[1];
                            if (null !== i) e(i);
                            else if (null != o) e(o);
                            else e("")
                        })["catch"](function(e) {
                            g["default"].error(e);
                            n(e)
                        })
                    })
                }
            }, {
                key: "retrieveNotifications",
                value: function U() {
                    return new Promise(function(e, n) {
                        var t = [];
                        h["default"].get("Ids", "userId").then(function(e) {
                            if (e) return f["default"].get("players/" + e + "/chromeweb_notification");
                            else {
                                g["default"].debug("Tried to get notification contents, but IndexedDB is missing user ID info.");
                                return Promise.all([h["default"].get("Ids", "appId"), self.registration.pushManager.getSubscription().then(function(e) {
                                    return e.endpoint
                                })]).then(function(e) {
                                    var n = r(e, 2);
                                    var t = n[0];
                                    var i = n[1];
                                    var o = (0, b.getDeviceTypeForBrowser)();
                                    return f["default"].getUserIdFromSubscriptionIdentifier(t, o, i).then(function(e) {
                                        if (e) {
                                            g["default"].debug("Recovered OneSignal user ID:", e);
                                            return Promise.all([h["default"].put("Ids", {
                                                type: "userId",
                                                id: e
                                            }), h["default"].put("Ids", {
                                                type: "registrationId",
                                                id: i.replace(new RegExp("^(https://android.googleapis.com/gcm/send/|https://updates.push.services.mozilla.com/push/)"), "")
                                            })]).then(function() {
                                                g["default"].debug("Attempting to retrieve the notification again now with a recovered user ID.");
                                                return f["default"].get("players/" + e + "/chromeweb_notification")
                                            })
                                        } else return Promise.reject("Recovered user ID was null. Unsubscribing from push notifications.")
                                    })
                                })["catch"](function(e) {
                                    g["default"].debug("Unsuccessfully attempted to recover OneSignal user ID:", e);
                                    return self.registration.pushManager.getSubscription().then(function(e) {
                                        return e.unsubscribe()
                                    }).then(function(e) {
                                        g["default"].debug("Unsubscribed from push notifications result:", e);
                                        self.UNSUBSCRIBED_FROM_NOTIFICATIONS = true
                                    })
                                })
                            }
                        }).then(function(n) {
                            for (var i = 0; i < n.length; i++) t.push(JSON.parse(n[i]));
                            if (0 == t.length) g["default"].warn("OneSignal Worker: Received a GCM push signal, but there were no messages to retrieve. Are you using the wrong API URL?", l.API_URL);
                            e(t)
                        })["catch"](function(e) {
                            g["default"].error(e);
                            n(e)
                        })
                    })
                }
            }, {
                key: "VERSION",
                get: function L() {
                    return "109715"
                }
            }, {
                key: "environment",
                get: function B() {
                    return u["default"]
                }
            }, {
                key: "log",
                get: function W() {
                    return g["default"]
                }
            }, {
                key: "swivel",
                get: function H() {
                    return S["default"]
                }
            }, {
                key: "database",
                get: function j() {
                    return h["default"]
                }
            }, {
                key: "apiUrl",
                get: function V() {
                    return l.API_URL
                }
            }, {
                key: "browser",
                get: function F() {
                    return E
                }
            }, {
                key: "onOurSubdomain",
                get: function z() {
                    return false || null !== location.href.match(/https:\/\/.*\.onesignal.com\/sdks\//)
                }
            }]);
            return n
        }();
        self.OneSignalWorker = k;
        g["default"].setDefaultLevel(false ? g["default"].levels.TRACE : g["default"].levels.ERROR);
        g["default"].info("%cOneSignal Service Worker loaded (version 109715, " + u["default"].getEnv() + " environment).", (0, b.getConsoleStyle)("bold"));
        k.run()
    }).call(n, t(20))
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n && ("object" == typeof n || "function" == typeof n) ? n : e
    }

    function a(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (n) Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var l = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var s = t(1);
    var u = t(2);
    var c = i(u);
    var f = t(3);
    var d = i(f);
    var g = t(12);
    var p = i(g);
    var h = function(e) {
        function n() {
            o(this, n);
            return r(this, Object.getPrototypeOf(n).call(this, ".onesignal-bell-launcher-badge", "onesignal-bell-launcher-badge-opened", null, "onesignal-bell-launcher-badge-active", null, "hidden"))
        }
        a(n, e);
        l(n, [{
            key: "increment",
            value: function t() {
                if (!isNaN(this.content)) {
                    var e = +this.content;
                    e += 1;
                    this.content = e.toString();
                    return e
                }
            }
        }, {
            key: "decrement",
            value: function i() {
                if (!isNaN(this.content)) {
                    var e = +this.content;
                    e -= 1;
                    if (e > 0) this.content = e.toString();
                    else this.content = "";
                    return e
                }
            }
        }]);
        return n
    }(p["default"]);
    n["default"] = h
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n && ("object" == typeof n || "function" == typeof n) ? n : e
    }

    function a(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (n) Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var l = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var s = t(1);
    var u = t(2);
    var c = i(u);
    var f = t(3);
    var d = i(f);
    var g = t(12);
    var p = i(g);
    var h = t(13);
    var b = i(h);
    var v = t(17);
    var m = i(v);
    var y = t(24);
    var S = i(y);
    var w = function(e) {
        function n(e) {
            o(this, n);
            var t = r(this, Object.getPrototypeOf(n).call(this, ".onesignal-bell-launcher-button", null, null, "onesignal-bell-launcher-button-active", null, "shown", []));
            t.bell = e;
            t.events = {
                mouse: "bell.launcher.button.mouse"
            };
            t.element.addEventListener("touchstart", function(e) {
                t.onHovering(e);
                t.onTap(e)
            });
            t.element.addEventListener("mouseenter", function(e) {
                t.onHovering(e)
            });
            t.element.addEventListener("mouseleave", function(e) {
                t.onHovered(e)
            });
            t.element.addEventListener("touchmove", function(e) {
                t.onHovered(e)
            });
            t.element.addEventListener("mousedown", function(e) {
                t.onTap(e)
            });
            t.element.addEventListener("mouseup", function(e) {
                t.onEndTap(e)
            });
            t.element.addEventListener("click", function(e) {
                t.onHovered(e);
                t.onClick(e)
            });
            return t
        }
        a(n, e);
        l(n, [{
            key: "onHovering",
            value: function t(e) {
                if (m["default"].isEmpty(this.events.mouse) || "out" === m["default"].getLast(this.events.mouse)) d["default"].trigger(b["default"].EVENTS.HOVERING);
                m["default"].put(this.events.mouse, "over")
            }
        }, {
            key: "onHovered",
            value: function i(e) {
                m["default"].put(this.events.mouse, "out");
                d["default"].trigger(b["default"].EVENTS.HOVERED)
            }
        }, {
            key: "onTap",
            value: function u(e) {
                this.pulse();
                this.activate();
                this.bell.badge.activate()
            }
        }, {
            key: "onEndTap",
            value: function f(e) {
                this.inactivate();
                this.bell.badge.inactivate()
            }
        }, {
            key: "onClick",
            value: function g(e) {
                var n = this;
                d["default"].trigger(b["default"].EVENTS.BELL_CLICK);
                d["default"].trigger(b["default"].EVENTS.LAUNCHER_CLICK);
                if (this.bell.message.shown && this.bell.message.contentType == S["default"].TYPES.MESSAGE) return;
                var t = m["default"].getLast("setsubscription.value");
                if (this.bell.unsubscribed)
                    if (false === t) this.bell.launcher.activateIfInactive().then(function() {
                        n.bell.showDialogProcedure()
                    });
                    else {
                        OneSignal.registerForPushNotifications();
                        this.bell._ignoreSubscriptionState = true;
                        OneSignal.once(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, function(e) {
                            n.bell.message.display(S["default"].TYPES.MESSAGE, n.bell.text["message.action.subscribed"], S["default"].TIMEOUT).then(function() {
                                n.bell._ignoreSubscriptionState = false;
                                n.bell.launcher.inactivate()
                            })["catch"](function(e) {
                                c["default"].error(e)
                            })
                        })
                    }
                else if (this.bell.subscribed) this.bell.launcher.activateIfInactive().then(function() {
                    n.bell.showDialogProcedure()
                });
                else if (this.bell.blocked)
                    if (OneSignal.isUsingSubscriptionWorkaround()) OneSignal.registerForPushNotifications();
                    else this.bell.launcher.activateIfInactive().then(function() {
                        n.bell.showDialogProcedure()
                    });
                return this.bell.message.hide()["catch"](function(e) {
                    return c["default"].error(e)
                })
            }
        }, {
            key: "pulse",
            value: function p() {
                (0, s.removeDomElement)(".pulse-ring");
                addDomElement(this.element, "beforeend", '<div class="pulse-ring"></div>');
                this.bell.setCustomColorsIfSpecified()
            }
        }]);
        return n
    }(p["default"]);
    n["default"] = w
}, function(e, n, t) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        else {
            var n = {};
            if (null != e)
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) n[t] = e[t];
            n["default"] = e;
            return n
        }
    }

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n && ("object" == typeof n || "function" == typeof n) ? n : e
    }

    function l(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (n) Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var s = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var u = function _(e, n, t) {
        if (null === e) e = Function.prototype;
        var i = Object.getOwnPropertyDescriptor(e, n);
        if (void 0 === i) {
            var o = Object.getPrototypeOf(e);
            if (null === o) return;
            else return _(o, n, t)
        } else if ("value" in i) return i.value;
        else {
            var r = i.get;
            if (void 0 === r) return;
            return r.call(t)
        }
    };
    var c = t(1);
    var f = t(2);
    var d = o(f);
    var g = t(3);
    var p = o(g);
    var h = t(9);
    var b = o(h);
    var v = t(6);
    var m = i(v);
    var y = t(13);
    var S = o(y);
    var w = t(14);
    var E = o(w);
    var k = t(5);
    var O = function(e) {
        function n(e) {
            r(this, n);
            var t = a(this, Object.getPrototypeOf(n).call(this, ".onesignal-bell-launcher-dialog", "onesignal-bell-launcher-dialog-opened", null, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-dialog-body"));
            t.bell = e;
            t.subscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #subscribe-button";
            t.unsubscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button";
            t.notificationIcons = null;
            window.addEventListener("click", function(e) {
                if (e.target === document.querySelector(t.subscribeButtonId)) p["default"].trigger(S["default"].EVENTS.SUBSCRIBE_CLICK);
                else if (e.target === document.querySelector(t.unsubscribeButtonId)) p["default"].trigger(S["default"].EVENTS.UNSUBSCRIBE_CLICK)
            });
            return t
        }
        l(n, e);
        s(n, [{
            key: "getPlatformNotificationIcon",
            value: function t() {
                if (this.notificationIcons) {
                    if (m.chrome || m.firefox) return this.notificationIcons.chrome || this.notificationIcons.safari;
                    else if (m.safari) return this.notificationIcons.safari || this.notificationIcons.chrome
                } else return null
            }
        }, {
            key: "show",
            value: function i() {
                var e = this;
                return this.updateBellLauncherDialogBody().then(function() {
                    return u(Object.getPrototypeOf(n.prototype), "show", e).call(e)
                })["catch"](function(e) {
                    return d["default"].error(e)
                })
            }
        }, {
            key: "updateBellLauncherDialogBody",
            value: function o() {
                var e = this;
                return OneSignal.getSubscription().then(function(n) {
                    (0, c.clearDomElementChildren)(document.querySelector(e.nestedContentSelector));
                    var t = "Nothing to show.";
                    var i = "";
                    if (e.bell.options.showCredit) i = '<div class="divider"></div>\n                  <div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>';
                    if (e.bell.state === S["default"].STATES.SUBSCRIBED && true === n || e.bell.state === S["default"].STATES.UNSUBSCRIBED && false === n) {
                        var o = "";
                        var r = e.getPlatformNotificationIcon();
                        if (r) o = '<div class="push-notification-icon"><img src="' + r + '"></div>';
                        else o = '<div class="push-notification-icon push-notification-icon-default"></div>';
                        var a = "";
                        if (e.bell.state !== S["default"].STATES.SUBSCRIBED) a = '<button type="button" class="action" id="' + e.subscribeButtonSelectorId + '">' + e.bell.text["dialog.main.button.subscribe"] + "</button>";
                        else a = '<button type="button" class="action" id="' + e.unsubscribeButtonSelectorId + '">' + e.bell.text["dialog.main.button.unsubscribe"] + "</button>";
                        t = "\n                  <h1>" + e.bell.text["dialog.main.title"] + '</h1>\n                  <div class="divider"></div>\n                  <div class="push-notification">\n                    ' + o + '\n                    <div class="push-notification-text-container">\n                      <div class="push-notification-text push-notification-text-short"></div>\n                      <div class="push-notification-text"></div>\n                      <div class="push-notification-text push-notification-text-medium"></div>\n                      <div class="push-notification-text"></div>\n                      <div class="push-notification-text push-notification-text-medium"></div>\n                    </div>\n                  </div>\n                  <div class="action-container">\n                    ' + a + "\n                  </div>\n                  " + i + "\n                "
                    } else if (e.bell.state === S["default"].STATES.BLOCKED) {
                        var l = null;
                        if (m.chrome) {
                            if (!m.mobile && !m.tablet) l = k.HOST_URL + "/bell/chrome-unblock.jpg"
                        } else if (m.firefox) l = k.HOST_URL + "/bell/firefox-unblock.jpg";
                        else if (m.safari) l = k.HOST_URL + "/bell/safari-unblock.jpg";
                        var s = "";
                        if (l) s = '\n\n            <a href="' + l + '" target="_blank"><img src="' + l + '"></a></div>\n            ';
                        if ((m.mobile || m.tablet) && m.chrome) s = "\n            <ol>\n            <li>Access <strong>Settings</strong> by tapping the three menu dots <strong>⋮</strong></li>\n            <li>Click <strong>Site settings</strong> under Advanced.</li>\n            <li>Click <strong>Notifications</strong>.</li>\n            <li>Find and click this entry for this website.</li>\n            <li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li>\n            </ol>\n          ";
                        t = "\n                  <h1>" + e.bell.text["dialog.blocked.title"] + '</h1>\n                  <div class="divider"></div>\n                  <div class="instructions">\n                  <p>' + e.bell.text["dialog.blocked.message"] + "</p>\n                  " + s + "\n                  </div>\n                  " + i + "\n                "
                    }
                    addDomElement(document.querySelector(e.nestedContentSelector), "beforeend", t);
                    e.bell.setCustomColorsIfSpecified()
                })
            }
        }, {
            key: "subscribeButtonSelectorId",
            get: function f() {
                return "subscribe-button"
            }
        }, {
            key: "unsubscribeButtonSelectorId",
            get: function g() {
                return "unsubscribe-button"
            }
        }, {
            key: "subscribeButton",
            get: function h() {
                return this.element.querySelector("#" + this.subscribeButtonSelectorId)
            }
        }, {
            key: "unsubscribeButton",
            get: function b() {
                return this.element.querySelector("#" + this.unsubscribeButtonSelectorId)
            }
        }]);
        return n
    }(b["default"]);
    n["default"] = O
}, function(e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n && ("object" == typeof n || "function" == typeof n) ? n : e
    }

    function a(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (n) Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var l = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var s = function y(e, n, t) {
        if (null === e) e = Function.prototype;
        var i = Object.getOwnPropertyDescriptor(e, n);
        if (void 0 === i) {
            var o = Object.getPrototypeOf(e);
            if (null === o) return;
            else return y(o, n, t)
        } else if ("value" in i) return i.value;
        else {
            var r = i.get;
            if (void 0 === r) return;
            return r.call(t)
        }
    };
    var u = t(1);
    var c = t(2);
    var f = i(c);
    var d = t(3);
    var g = i(d);
    var p = t(9);
    var h = i(p);
    var b = t(12);
    var v = i(b);
    var m = function(e) {
        function n(e) {
            o(this, n);
            var t = r(this, Object.getPrototypeOf(n).call(this, ".onesignal-bell-launcher", "onesignal-bell-launcher-active", null, null, "onesignal-bell-launcher-inactive", "hidden", "active"));
            t.bell = e;
            t.wasInactive = false;
            return t
        }
        a(n, e);
        l(n, [{
            key: "resize",
            value: function t(e) {
                var n = this;
                if ("small" === e && (0, u.hasCssClass)(this.element, "onesignal-bell-launcher-sm") || "medium" === e && (0, u.hasCssClass)(this.element, "onesignal-bell-launcher-md") || "large" === e && (0, u.hasCssClass)(this.element, "onesignal-bell-launcher-lg")) return Promise.resolve(this);
                (0, u.removeCssClass)(this.element, "onesignal-bell-launcher-sm");
                (0, u.removeCssClass)(this.element, "onesignal-bell-launcher-md");
                (0, u.removeCssClass)(this.element, "onesignal-bell-launcher-lg");
                if ("small" === e)(0, u.addCssClass)(this.element, "onesignal-bell-launcher-sm");
                else if ("medium" === e)(0, u.addCssClass)(this.element, "onesignal-bell-launcher-md");
                else if ("large" === e)(0, u.addCssClass)(this.element, "onesignal-bell-launcher-lg");
                else throw new Error("Invalid OneSignal bell size " + e);
                if (!this.shown) return Promise.resolve(this);
                else return new Promise(function(e) {
                    if (0 == n.targetTransitionEvents.length) return e(n);
                    else {
                        var t = setTimeout(function() {
                            f["default"].warn(n.constructor.name + " did not completely resize (state: " + n.state + ", activeState: " + n.activeState + ").")
                        }, n.transitionCheckTimeout);
                        (0, u.once)(n.element, "transitionend", function(i, o) {
                            if (i.target === n.element && (0, u.contains)(n.targetTransitionEvents, i.propertyName)) {
                                clearTimeout(t);
                                o();
                                return e(n)
                            }
                        }, true)
                    }
                })
            }
        }, {
            key: "activateIfInactive",
            value: function i() {
                if (this.inactive) {
                    this.wasInactive = true;
                    return this.activate()
                } else return (0, u.nothing)()
            }
        }, {
            key: "inactivateIfWasInactive",
            value: function c() {
                if (this.wasInactive) {
                    this.wasInactive = false;
                    return this.inactivate()
                } else return (0, u.nothing)()
            }
        }, {
            key: "clearIfWasInactive",
            value: function d() {
                this.wasInactive = false
            }
        }, {
            key: "inactivate",
            value: function g() {
                var e = this;
                return this.bell.message.hide().then(function() {
                    if (e.bell.badge.content.length > 0) return e.bell.badge.hide().then(function() {
                        return Promise.all([s(Object.getPrototypeOf(n.prototype), "inactivate", e).call(e), e.resize("small")])
                    }).then(function() {
                        return e.bell.badge.show()
                    })["catch"](function(e) {
                        return f["default"].error(e)
                    });
                    else return Promise.all([s(Object.getPrototypeOf(n.prototype), "inactivate", e).call(e), e.resize("small")])
                })
            }
        }, {
            key: "activate",
            value: function p() {
                var e = this;
                if (this.bell.badge.content.length > 0) return this.bell.badge.hide().then(function() {
                    return Promise.all([s(Object.getPrototypeOf(n.prototype), "activate", e).call(e), e.resize(e.bell.options.size)])
                })["catch"](function(e) {
                    return f["default"].error(e)
                });
                else return Promise.all([s(Object.getPrototypeOf(n.prototype), "activate", this).call(this), this.resize(this.bell.options.size)])
            }
        }]);
        return n
    }(v["default"]);
    n["default"] = m
}, function(e, n, t) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        else {
            var n = {};
            if (null != e)
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) n[t] = e[t];
            n["default"] = e;
            return n
        }
    }

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: true
    });
    var a = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value" in i) i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(n, t, i) {
            if (t) e(n.prototype, t);
            if (i) e(n, i);
            return n
        }
    }();
    var l = t(1);
    var s = t(4);
    var u = o(s);
    var c = t(2);
    var f = o(c);
    var d = t(3);
    var g = o(d);
    var p = t(14);
    var h = o(p);
    var b = t(6);
    var v = i(b);
    var m = t(8);
    var y = o(m);
    var S = t(5);
    t(45);
    var w = function() {
        function e(n) {
            r(this, e);
            if (!n) this.options = {};
            else this.options = (0, y["default"])({}, n);
            if (!this.options.actionMessage || "string" != typeof this.options.actionMessage) this.options.actionMessage = "We'd like to show you notifications for the latest news and updates.";
            if (!this.options.acceptButtonText || "string" != typeof this.options.acceptButtonText) this.options.acceptButtonText = "Allow";
            if (!this.options.cancelButtonText || "string" != typeof this.options.cancelButtonText) this.options.cancelButtonText = "No Thanks";
            this.options.actionMessage = this.options.actionMessage.substring(0, 90);
            this.options.acceptButtonText = this.options.acceptButtonText.substring(0, 15);
            this.options.cancelButtonText = this.options.cancelButtonText.substring(0, 15);
            this.notificationIcons = null
        }
        a(e, null, [{
            key: "EVENTS",
            get: function n() {
                return {
                    ALLOW_CLICK: "popoverAllowClick",
                    CANCEL_CLICK: "popoverCancelClick",
                    SHOWN: "popoverShown",
                    CLOSED: "popoverClosed"
                }
            }
        }]);
        a(e, [{
            key: "create",
            value: function t() {
                var n = this;
                try {
                    if (null === this.notificationIcons) h["default"].getNotificationIcons().then(function(t) {
                        n.notificationIcons = t;
                        if (n.container)(0, l.removeDomElement)("#onesignal-popover-container");
                        var i = n.getPlatformNotificationIcon();
                        var o = "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2239.5%22%20height%3D%2240.5%22%20viewBox%3D%220%200%2079%2081%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EOneSignal-Bell%3C%2Ftitle%3E%3Cg%20fill%3D%22%23BBB%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M39.96%2067.12H4.12s-3.2-.32-3.2-3.36%202.72-3.2%202.72-3.2%2010.72-5.12%2010.72-8.8c0-3.68-1.76-6.24-1.76-21.28%200-15.04%209.6-26.56%2021.12-26.56%200%200%201.6-3.84%206.24-3.84%204.48%200%206.08%203.84%206.08%203.84%2011.52%200%2021.12%2011.52%2021.12%2026.56s-1.6%2017.6-1.6%2021.28c0%203.68%2010.72%208.8%2010.72%208.8s2.72.16%202.72%203.2c0%202.88-3.36%203.36-3.36%203.36H39.96zM27%2070.8h24s-1.655%2010.08-11.917%2010.08S27%2070.8%2027%2070.8z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";
                        var r = '\n                    <div id="normal-popover">\n                        <div class="popover-body">\n                            <div class="popover-body-icon ' + ("default-icon" === i ? "default-icon" : "") + '" style="background-image: url(\'' + ("default-icon" === i ? o : i) + '\');">\n                            </div>\n                            <div class="popover-body-message">\n                                ' + n.options.actionMessage + '                \n                            </div>\n                            <div class="clearfix"></div>\n                        </div>\n                        <div class="popover-footer">\n                            <button id="onesignal-popover-allow-button" class="align-right primary popover-button">\n                            ' + n.options.acceptButtonText + '</button>\n                            <button id="onesignal-popover-cancel-button" class="align-right secondary popover-button">\n                            ' + n.options.cancelButtonText + '</button>\n                            <div class="clearfix"></div>\n                        </div>\n                    </div>                   \n                ';
                        window.addDomElement = l.addDomElement;
                        (0, l.addDomElement)("body", "beforeend", '<div id="onesignal-popover-container" class="onesignal-popover-container onesignal-reset"></div>');
                        (0, l.addDomElement)(n.container, "beforeend", '<div id="onesignal-popover-dialog" class="onesignal-popover-dialog">' + r + "</div>");
                        (0, l.addCssClass)(n.container, v.mobile ? "slide-up" : "slide-down");
                        n.allowButton.addEventListener("click", n.onPopoverAllowed.bind(n));
                        n.cancelButton.addEventListener("click", n.onPopoverCanceled.bind(n));
                        g["default"].trigger(e.EVENTS.SHOWN)
                    })
                } catch (t) {
                    f["default"].error(t)
                }
            }
        }, {
            key: "onPopoverAllowed",
            value: function i(n) {
                g["default"].trigger(e.EVENTS.ALLOW_CLICK)
            }
        }, {
            key: "onPopoverCanceled",
            value: function o(n) {
                g["default"].trigger(e.EVENTS.CANCEL_CLICK);
                this.close()
            }
        }, {
            key: "close",
            value: function s() {
                var n = this;
                (0, l.addCssClass)(this.container, "close-popover");
                (0, l.once)(this.dialog, "animationend", function(t, i) {
                    if (t.target === n.dialog && ("slideDownExit" === t.animationName || "slideUpExit" === t.animationName)) {
                        (0, l.removeDomElement)("#onesignal-popover-container");
                        i();
                        g["default"].trigger(e.EVENTS.CLOSED)
                    }
                }, true)
            }
        }, {
            key: "getPlatformNotificationIcon",
            value: function u() {
                if (this.notificationIcons) {
                    if (v.chrome || v.firefox)
                        if (this.notificationIcons.chrome) return this.notificationIcons.chrome;
                        else if (this.notificationIcons.firefox) return this.notificationIcons.firefox;
                    else return "default-icon";
                    else if (v.safari)
                        if (this.notificationIcons.safari) return this.notificationIcons.safari;
                        else if (this.notificationIcons.chrome) return this.notificationIcons.chrome;
                    else return "default-icon"
                } else return "default-icon"
            }
        }, {
            key: "container",
            get: function c() {
                return document.querySelector("#onesignal-popover-container")
            }
        }, {
            key: "dialog",
            get: function d() {
                return document.querySelector("#onesignal-popover-dialog")
            }
        }, {
            key: "allowButton",
            get: function p() {
                return document.querySelector("#onesignal-popover-allow-button")
            }
        }, {
            key: "cancelButton",
            get: function b() {
                return document.querySelector("#onesignal-popover-cancel-button")
            }
        }]);
        return e
    }();
    n["default"] = w
}, function(e, n, t) {
    "use strict";
    var i = t(48);
    e.exports = function o(e, n, t) {
        if (!e) return;
        i(function o() {
            e.apply(t || null, n || [])
        })
    }
}, function(e, n, t) {
    n = e.exports = t(27)();
    n.push([e.id, '/*!\n* CleanSlate\n*   github.com/premasagar/cleanslate\n*\n*/.onesignal-reset,.onesignal-reset a,.onesignal-reset abbr,.onesignal-reset acronym,.onesignal-reset address,.onesignal-reset applet,.onesignal-reset area,.onesignal-reset article,.onesignal-reset aside,.onesignal-reset audio,.onesignal-reset b,.onesignal-reset big,.onesignal-reset blockquote,.onesignal-reset button,.onesignal-reset canvas,.onesignal-reset caption,.onesignal-reset cite,.onesignal-reset code,.onesignal-reset col,.onesignal-reset colgroup,.onesignal-reset datalist,.onesignal-reset dd,.onesignal-reset del,.onesignal-reset dfn,.onesignal-reset div,.onesignal-reset dl,.onesignal-reset dt,.onesignal-reset em,.onesignal-reset fieldset,.onesignal-reset figcaption,.onesignal-reset figure,.onesignal-reset footer,.onesignal-reset form,.onesignal-reset h1,.onesignal-reset h2,.onesignal-reset h3,.onesignal-reset h4,.onesignal-reset h5,.onesignal-reset h6,.onesignal-reset header,.onesignal-reset hr,.onesignal-reset i,.onesignal-reset iframe,.onesignal-reset img,.onesignal-reset input,.onesignal-reset ins,.onesignal-reset kbd,.onesignal-reset label,.onesignal-reset legend,.onesignal-reset li,.onesignal-reset main,.onesignal-reset map,.onesignal-reset mark,.onesignal-reset menu,.onesignal-reset meta,.onesignal-reset nav,.onesignal-reset object,.onesignal-reset ol,.onesignal-reset optgroup,.onesignal-reset option,.onesignal-reset output,.onesignal-reset p,.onesignal-reset pre,.onesignal-reset progress,.onesignal-reset q,.onesignal-reset samp,.onesignal-reset section,.onesignal-reset select,.onesignal-reset small,.onesignal-reset span,.onesignal-reset strike,.onesignal-reset strong,.onesignal-reset sub,.onesignal-reset summary,.onesignal-reset sup,.onesignal-reset table,.onesignal-reset tbody,.onesignal-reset td,.onesignal-reset textarea,.onesignal-reset tfoot,.onesignal-reset th,.onesignal-reset thead,.onesignal-reset time,.onesignal-reset tr,.onesignal-reset tt,.onesignal-reset ul,.onesignal-reset var,.onesignal-reset video{background-attachment:scroll;background-color:transparent;background-image:none;background-position:0 0;background-repeat:repeat;border-color:#000;border:medium none currentColor;bottom:auto;clear:none;clip:auto;color:inherit;counter-increment:none;counter-reset:none;cursor:auto;direction:inherit;display:inline;float:none;font-family:inherit;font-size:inherit;font-style:inherit;font-variant:normal;font-weight:inherit;height:auto;left:auto;letter-spacing:normal;line-height:inherit;list-style-type:inherit;list-style-position:outside;list-style-image:none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;outline:medium none invert;overflow:visible;padding:0;position:static;quotes:"" "";right:auto;table-layout:auto;text-align:inherit;text-decoration:inherit;text-indent:0;text-transform:none;top:auto;unicode-bidi:normal;vertical-align:baseline;visibility:inherit;white-space:normal;width:auto;word-spacing:normal;z-index:auto;background-origin:padding-box;background-clip:border-box;background-size:auto;-o-border-image:none;border-image:none;border-radius:0;box-shadow:none;box-sizing:content-box;-webkit-column-count:auto;-moz-column-count:auto;column-count:auto;-webkit-column-gap:normal;-moz-column-gap:normal;column-gap:normal;-webkit-column-rule:medium none #000;-moz-column-rule:medium none #000;column-rule:medium none #000;-webkit-column-span:1;-moz-column-span:1;column-span:1;-webkit-column-width:auto;-moz-column-width:auto;column-width:auto;-webkit-font-feature-settings:normal;font-feature-settings:normal;overflow-x:visible;overflow-y:visible;-webkit-hyphens:manual;-moz-hyphens:manual;-ms-hyphens:manual;hyphens:manual;-webkit-perspective:none;-ms-perspective:none;-o-perspective:none;perspective:none;-webkit-perspective-origin:50% 50%;-ms-perspective-origin:50% 50%;-o-perspective-origin:50% 50%;perspective-origin:50% 50%;-webkit-backface-visibility:visible;backface-visibility:visible;text-shadow:none;-webkit-transition:all 0s ease 0s;transition:all 0s ease 0s;-webkit-transform:none;transform:none;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform-style:flat;transform-style:flat;word-break:normal}.onesignal-reset,.onesignal-reset address,.onesignal-reset article,.onesignal-reset audio,.onesignal-reset blockquote,.onesignal-reset caption,.onesignal-reset colgroup,.onesignal-reset dd,.onesignal-reset dialog,.onesignal-reset div,.onesignal-reset dl,.onesignal-reset dt,.onesignal-reset fieldset,.onesignal-reset figure,.onesignal-reset footer,.onesignal-reset form,.onesignal-reset h1,.onesignal-reset h2,.onesignal-reset h3,.onesignal-reset h4,.onesignal-reset h5,.onesignal-reset h6,.onesignal-reset header,.onesignal-reset hgroup,.onesignal-reset hr,.onesignal-reset main,.onesignal-reset menu,.onesignal-reset nav,.onesignal-reset ol,.onesignal-reset option,.onesignal-reset p,.onesignal-reset pre,.onesignal-reset progress,.onesignal-reset section,.onesignal-reset summary,.onesignal-reset ul,.onesignal-reset video{display:block}.onesignal-reset h1,.onesignal-reset h2,.onesignal-reset h3,.onesignal-reset h4,.onesignal-reset h5,.onesignal-reset h6{font-weight:700}.onesignal-reset h1{font-size:2em;padding:.67em 0}.onesignal-reset h2{font-size:1.5em;padding:.83em 0}.onesignal-reset h3{font-size:1.17em;padding:.83em 0}.onesignal-reset h4{font-size:1em}.onesignal-reset h5{font-size:.83em}.onesignal-reset p{margin:1em 0}.onesignal-reset table{display:table}.onesignal-reset thead{display:table-header-group}.onesignal-reset tbody{display:table-row-group}.onesignal-reset tfoot{display:table-footer-group}.onesignal-reset tr{display:table-row}.onesignal-reset td,.onesignal-reset th{display:table-cell;padding:2px}.onesignal-reset ol,.onesignal-reset ul{margin:1em 0}.onesignal-reset ol li,.onesignal-reset ol ol li,.onesignal-reset ol ol ol li,.onesignal-reset ol ol ul li,.onesignal-reset ol ul ul li,.onesignal-reset ul li,.onesignal-reset ul ol ol li,.onesignal-reset ul ul li,.onesignal-reset ul ul ol li,.onesignal-reset ul ul ul li{list-style-position:inside;margin-top:.08em}.onesignal-reset ol ol,.onesignal-reset ol ol ol,.onesignal-reset ol ol ul,.onesignal-reset ol ul,.onesignal-reset ol ul ul,.onesignal-reset ul ol,.onesignal-reset ul ol ol,.onesignal-reset ul ul,.onesignal-reset ul ul ol,.onesignal-reset ul ul ul{padding-left:40px;margin:0}.onesignal-reset nav ol,.onesignal-reset nav ul{list-style-type:none}.onesignal-reset menu,.onesignal-reset ul{list-style-type:disc}.onesignal-reset ol{list-style-type:decimal}.onesignal-reset menu menu,.onesignal-reset menu ul,.onesignal-reset ol menu,.onesignal-reset ol ul,.onesignal-reset ul menu,.onesignal-reset ul ul{list-style-type:circle}.onesignal-reset menu menu menu,.onesignal-reset menu menu ul,.onesignal-reset menu ol menu,.onesignal-reset menu ol ul,.onesignal-reset menu ul menu,.onesignal-reset menu ul ul,.onesignal-reset ol menu menu,.onesignal-reset ol menu ul,.onesignal-reset ol ol menu,.onesignal-reset ol ol ul,.onesignal-reset ol ul menu,.onesignal-reset ol ul ul,.onesignal-reset ul menu menu,.onesignal-reset ul menu ul,.onesignal-reset ul ol menu,.onesignal-reset ul ol ul,.onesignal-reset ul ul menu,.onesignal-reset ul ul ul{list-style-type:square}.onesignal-reset li{display:list-item;min-height:auto;min-width:auto;padding-left:20px}.onesignal-reset strong{font-weight:700}.onesignal-reset em{font-style:italic}.onesignal-reset code,.onesignal-reset kbd,.onesignal-reset pre,.onesignal-reset samp{font-family:monospace}.onesignal-reset a{color:blue;text-decoration:underline}.onesignal-reset a:visited{color:#529}.onesignal-reset a,.onesignal-reset a *,.onesignal-reset input[type=checkbox],.onesignal-reset input[type=radio],.onesignal-reset input[type=submit],.onesignal-reset select{cursor:pointer}.onesignal-reset button,.onesignal-reset input[type=submit]{text-align:center;padding:2px 6px 3px;border-radius:4px;text-decoration:none;font-family:arial,helvetica,sans-serif;font-size:small;-webkit-appearance:push-button;color:buttontext;border:1px solid #a6a6a6;background:#d3d3d3;background:#fff;background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fff),color-stop(100%,#ddd),color-stop(100%,#d1d1d1),color-stop(100%,#ddd));background:-webkit-linear-gradient(top,#fff,#ddd 100%,#d1d1d1 0,#ddd 0);background:linear-gradient(180deg,#fff 0,#ddd 100%,#d1d1d1 0,#ddd 0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ffffff\',endColorstr=\'#dddddd\',GradientType=0);-o-box-shadow:1px 1px 0 #eee;box-shadow:1px 1px 0 #eee;outline:initial}.onesignal-reset button{padding:1px 6px 2px;margin-right:5px}.onesignal-reset input[type=hidden]{display:none}.onesignal-reset textarea{-webkit-appearance:textarea;background:#fff;padding:2px;margin-left:4px;word-wrap:break-word;white-space:pre-wrap;font-size:11px;font-family:arial,helvetica,sans-serif;line-height:13px;resize:both}.onesignal-reset input,.onesignal-reset select,.onesignal-reset textarea{border:1px solid #ccc}.onesignal-reset select{font-size:11px;font-family:helvetica,arial,sans-serif;display:inline-block}.onesignal-reset input:focus,.onesignal-reset textarea:focus{outline:5px auto -webkit-focus-ring-color;outline:initial}.onesignal-reset input[type=text]{background:#fff;padding:1px;font-family:initial;font-size:small}.onesignal-reset input[type=checkbox],.onesignal-reset input[type=radio]{border:1px solid #2b2b2b;border-radius:4px;outline:intial}.onesignal-reset input[type=radio]{margin:2px 2px 3px}.onesignal-reset button:active,.onesignal-reset input[type=submit]:active{background:#3b679e;background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#3b679e),color-stop(50%,#2b88d9),color-stop(51%,#207cca),color-stop(100%,#7db9e8));background:-webkit-linear-gradient(top,#3b679e,#2b88d9 50%,#207cca 51%,#7db9e8);background:linear-gradient(180deg,#3b679e 0,#2b88d9 50%,#207cca 51%,#7db9e8);border-color:#5259b0}.onesignal-reset abbr[title],.onesignal-reset acronym[title],.onesignal-reset dfn[title]{cursor:help;border-bottom-width:1px;border-bottom-style:dotted}.onesignal-reset ins{background-color:#ff9;color:#000}.onesignal-reset del{text-decoration:line-through}.onesignal-reset blockquote,.onesignal-reset q{quotes:none}.onesignal-reset blockquote:after,.onesignal-reset blockquote:before,.onesignal-reset li:after,.onesignal-reset li:before,.onesignal-reset q:after,.onesignal-reset q:before{content:""}.onesignal-reset input,.onesignal-reset select{vertical-align:middle}.onesignal-reset table{border-collapse:collapse;border-spacing:0}.onesignal-reset hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0}.onesignal-reset [dir=rtl]{direction:rtl}.onesignal-reset mark{background-color:#ff9;color:#000;font-style:italic;font-weight:700}.onesignal-reset menu{padding-left:40px;padding-top:8px}.onesignal-reset [hidden],.onesignal-reset template{display:none}.onesignal-reset abbr[title]{border-bottom:1px dotted}.onesignal-reset sub,.onesignal-reset sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.onesignal-reset sup{top:-.5em}.onesignal-reset sub{bottom:-.25em}.onesignal-reset img{border:0}.onesignal-reset figure{margin:0}.onesignal-reset textarea{overflow:auto;vertical-align:top}.onesignal-reset{font-size:medium;line-height:1;direction:ltr;text-align:left;text-align:start;font-family:Times New Roman,Times,serif;color:#000;font-style:normal;font-weight:400;text-decoration:none;list-style-type:disc}.onesignal-reset pre{white-space:pre}#onesignal-bell-container.onesignal-reset{z-index:2147483000;position:fixed}#onesignal-bell-container.onesignal-reset.onesignal-bell-container-bottom-left{bottom:0;left:0}#onesignal-bell-container.onesignal-reset.onesignal-bell-container-bottom-right{bottom:0;right:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:initial;position:absolute;z-index:2147483000;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;-webkit-transform:scale(.01) translateZ(0);transform:scale(.01) translateZ(0);opacity:0;-webkit-transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left{bottom:20px;left:20px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-sm{-webkit-transform-origin:center center;transform-origin:center center;width:32px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-sm .onesignal-bell-launcher-message{left:42px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog{bottom:39px;left:0;-webkit-transform-origin:left bottom;transform-origin:left bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:before{left:5px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:after{left:7px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-md{-webkit-transform-origin:center center;transform-origin:center center;width:48px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-md .onesignal-bell-launcher-message{left:61px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog{bottom:58px;left:0;-webkit-transform-origin:left bottom;transform-origin:left bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:before{left:12px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:after{left:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-lg{-webkit-transform-origin:center center;transform-origin:center center;width:64px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-lg .onesignal-bell-launcher-message{left:81px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog{bottom:78px;left:0;-webkit-transform-origin:left bottom;transform-origin:left bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:before{left:18px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:after{left:20px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left .onesignal-bell-launcher-badge{left:4px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left .onesignal-bell-launcher-message{-webkit-transform-origin:left center;transform-origin:left center}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left .onesignal-bell-launcher-message:after{right:100%;border-right-color:#000}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-left .onesignal-bell-launcher-button{left:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right{bottom:20px;right:20px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm{-webkit-transform-origin:center center;transform-origin:center center;width:32px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm .onesignal-bell-launcher-message{right:42px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog{bottom:39px;right:0;-webkit-transform-origin:right bottom;transform-origin:right bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:before{right:5px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:after{right:7px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md{-webkit-transform-origin:center center;transform-origin:center center;width:48px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md .onesignal-bell-launcher-message{right:61px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog{bottom:58px;right:0;-webkit-transform-origin:right bottom;transform-origin:right bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:before{right:12px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:after{right:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-lg{-webkit-transform-origin:center center;transform-origin:center center;width:64px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-lg .onesignal-bell-launcher-message{right:81px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog{bottom:78px;right:0;-webkit-transform-origin:right bottom;transform-origin:right bottom}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:before{right:18px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:after{right:20px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right .onesignal-bell-launcher-badge{right:4px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right .onesignal-bell-launcher-message{-webkit-transform-origin:right center;transform-origin:right center}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right .onesignal-bell-launcher-message:after{left:100%;border-left-color:#000}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-bottom-right .onesignal-bell-launcher-button{right:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-button{position:absolute;bottom:0;border-radius:50%;-webkit-transition:border 175ms ease-in-out,width 175ms ease-in-out,height 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:border 175ms ease-in-out,width 175ms ease-in-out,height 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:transform 175ms ease-in-out,border 175ms ease-in-out,width 175ms ease-in-out,height 175ms ease-in-out;transition:transform 175ms ease-in-out,border 175ms ease-in-out,width 175ms ease-in-out,height 175ms ease-in-out,-webkit-transform 175ms ease-in-out;cursor:pointer;z-index:2147483000}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-button svg{width:100%;height:100%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-button.onesignal-bell-launcher-button-hover{cursor:pointer}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-badge{position:absolute;bottom:0;border-radius:50%;text-align:center;top:0;cursor:pointer;-webkit-filter:drop-shadow(0 2px 4px rgba(34,36,38,0));filter:drop-shadow(0 2px 4px rgba(34,36,38,0));-webkit-transition:border 175ms ease-in-out,opacity .21s ease-in-out,width .21s ease-in-out,height .21s ease-in-out,position .21s ease-in-out,right .21s ease-in-out,top .21s ease-in-out,bottom .21s ease-in-out,left .21s ease-in-out,-webkit-transform 175ms ease-in-out;transition:border 175ms ease-in-out,opacity .21s ease-in-out,width .21s ease-in-out,height .21s ease-in-out,position .21s ease-in-out,right .21s ease-in-out,top .21s ease-in-out,bottom .21s ease-in-out,left .21s ease-in-out,-webkit-transform 175ms ease-in-out;transition:transform 175ms ease-in-out,border 175ms ease-in-out,opacity .21s ease-in-out,width .21s ease-in-out,height .21s ease-in-out,position .21s ease-in-out,right .21s ease-in-out,top .21s ease-in-out,bottom .21s ease-in-out,left .21s ease-in-out;transition:transform 175ms ease-in-out,border 175ms ease-in-out,opacity .21s ease-in-out,width .21s ease-in-out,height .21s ease-in-out,position .21s ease-in-out,right .21s ease-in-out,top .21s ease-in-out,bottom .21s ease-in-out,left .21s ease-in-out,-webkit-transform 175ms ease-in-out;z-index:2147483400;opacity:0;-webkit-transform:scale(.01);transform:scale(.01);pointer-events:none}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-badge.onesignal-bell-launcher-badge-hover{cursor:pointer}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-badge.onesignal-bell-launcher-badge-opened{opacity:1;-webkit-transform:scale(1);transform:scale(1)}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-message{position:absolute;color:#fff;background:#000;cursor:pointer;border-radius:5px;-webkit-transform:translateY(-50%) scaleX(0) translateZ(0);transform:translateY(-50%) scaleX(0) translateZ(0);opacity:0;pointer-events:none;-webkit-transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;top:50%;z-index:2147481000}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-message:after{top:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:transparent}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-message .onesignal-bell-launcher-message-body{z-index:2147482000;max-width:100%;white-space:nowrap;text-overflow:ellipsis}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-message.onesignal-bell-launcher-message-opened{pointer-events:auto;opacity:1;-webkit-transform:translateY(-50%) scaleX(1) translateZ(0);transform:translateY(-50%) scaleX(1) translateZ(0)}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog{cursor:pointer;position:absolute;background-color:#fff;border-radius:5px;border:1px solid rgba(0,0,0,.1);opacity:0;width:200px;-webkit-transform:scale(0) translateZ(0);transform:scale(0) translateZ(0);-webkit-transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out;transition:transform 175ms ease-in-out,opacity 175ms ease-in-out,-webkit-transform 175ms ease-in-out;z-index:2147481000}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog ol{counter-reset:foo;display:table;border-spacing:.3em .75em}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog ol>li{counter-increment:foo;display:table-row;margin-bottom:.75em}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog ol>li:before{content:counter(foo) ".";display:table-cell;text-align:right}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog:after,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog:before{top:100%;border:solid transparent;content:" ";height:0;width:0;position:absolute}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body{z-index:2147482000;max-width:100%;white-space:nowrap;text-overflow:ellipsis;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog.onesignal-bell-launcher-dialog-opened{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0);opacity:1}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a{box-sizing:border-box;text-decoration:none;color:initial}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a:active,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a:focus,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a:hover,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a:hover:active,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog a:visited{text-decoration:none;color:initial}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button{box-sizing:border-box;border:1px solid transparent;padding:.625em 1em;box-shadow:none;border-radius:4px;font-weight:400;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:.65px;cursor:pointer}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action{color:#fff;background:#e54b4d;width:100%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover{background:#dd2022}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active{background:#b1191b}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm{height:32px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-button{width:32px;height:32px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-badge{font-size:8px;width:12px;height:12px;line-height:12px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-message{padding:9.6px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-message:after{border-width:6.6px;margin-top:-6.6px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-message .onesignal-bell-launcher-message-body{font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog{padding:.3em .8em .6em;color:#333}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:after{border-top-color:#fff;border-width:6.6px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog:before{border-top-color:hsla(0,0%,71%,.1);border-width:8.6px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body{font-size:14px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body h1{font-size:15px;line-height:1.2em;font-weight:500;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;letter-spacing:.2px;text-align:center;color:#41090a}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body p{font-size:14px;font-weight:400;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .divider{border-bottom:1px solid rgba(0,0,0,.1);margin:.25em -.93em}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .kickback{text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:300;font-size:9.8px;letter-spacing:.5px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions{max-width:95vw;max-height:70vh;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions img{width:100%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification{display:-webkit-flex;display:-webkit-box;display:-ms-flexbox;display:flex;max-width:330px;border:1px solid rgba(0,0,0,.1);border-radius:3px;background:hsla(0,0%,98%,.5);overflow:auto;margin:.5em 0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon{width:50px;height:50px;margin:6px;margin-right:3px;border-radius:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon.push-notification-icon-default{background:#e3e4e5}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon img{width:50px;height:50px;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container{margin:6px;margin-left:3px;-webkit-flex:1;-webkit-box-flex:1;-ms-flex:1;flex:1}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text{height:5px;width:100%;background:#e3e4e5;margin:5px 0;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-short{width:75%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-medium{width:87%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:first-of-type{margin-top:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-sm .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:last-of-type{margin-bottom:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md{height:48px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-button{width:48px;height:48px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-badge{font-size:12px;width:18px;height:18px;line-height:18px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-message{padding:14.4px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-message:after{border-width:9.9px;margin-top:-9.9px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-message .onesignal-bell-launcher-message-body{font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog{padding:.3em .8em .6em;color:#333}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:after{border-top-color:#fff;border-width:9.9px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog:before{border-top-color:hsla(0,0%,71%,.1);border-width:11.9px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body{font-size:14px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body h1{font-size:15px;line-height:1.2em;font-weight:500;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;letter-spacing:.2px;text-align:center;color:#41090a}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body p{font-size:14px;font-weight:400;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .divider{border-bottom:1px solid rgba(0,0,0,.1);margin:.25em -.93em}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .kickback{text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:300;font-size:9.8px;letter-spacing:.5px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions{max-width:95vw;max-height:70vh;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions img{width:100%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification{display:-webkit-flex;display:-webkit-box;display:-ms-flexbox;display:flex;max-width:330px;border:1px solid rgba(0,0,0,.1);border-radius:3px;background:hsla(0,0%,98%,.5);overflow:auto;margin:.5em 0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon{width:50px;height:50px;margin:6px;margin-right:3px;border-radius:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon.push-notification-icon-default{background:#e3e4e5}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon img{width:50px;height:50px;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container{margin:6px;margin-left:3px;-webkit-flex:1;-webkit-box-flex:1;-ms-flex:1;flex:1}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text{height:5px;width:100%;background:#e3e4e5;margin:5px 0;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-short{width:75%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-medium{width:87%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:first-of-type{margin-top:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-md .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:last-of-type{margin-bottom:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg{height:64px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-button{width:64px;height:64px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-badge{font-size:12px;width:24px;height:24px;line-height:24px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-message{padding:19.2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-message:after{border-width:13.2px;margin-top:-13.2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-message .onesignal-bell-launcher-message-body{font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog{padding:.3em .8em .6em;color:#333}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:after{border-top-color:#fff;border-width:13.2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog:before{border-top-color:hsla(0,0%,71%,.1);border-width:15.2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body{font-size:14px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body h1{font-size:15px;line-height:1.2em;font-weight:500;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;letter-spacing:.2px;text-align:center;color:#41090a}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body p{font-size:14px;font-weight:400;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .divider{border-bottom:1px solid rgba(0,0,0,.1);margin:.25em -.93em}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .kickback{text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:300;font-size:9.8px;letter-spacing:.5px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions{max-width:95vw;max-height:70vh;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-size:14px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .instructions img{width:100%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification{display:-webkit-flex;display:-webkit-box;display:-ms-flexbox;display:flex;max-width:330px;border:1px solid rgba(0,0,0,.1);border-radius:3px;background:hsla(0,0%,98%,.5);overflow:auto;margin:.5em 0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon{width:50px;height:50px;margin:6px;margin-right:3px;border-radius:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon.push-notification-icon-default{background:#e3e4e5}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-icon img{width:50px;height:50px;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container{margin:6px;margin-left:3px;-webkit-flex:1;-webkit-box-flex:1;-ms-flex:1;flex:1}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text{height:5px;width:100%;background:#e3e4e5;margin:5px 0;border-radius:1px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-short{width:75%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text.push-notification-text-medium{width:87%}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:first-of-type{margin-top:2px}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-lg .onesignal-bell-launcher-dialog .onesignal-bell-launcher-dialog-body .push-notification .push-notification-text-container .push-notification-text:last-of-type{margin-bottom:0}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button svg .background{fill:#e54b4d}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button svg .foreground{fill:#fff}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button svg .stroke{fill:none;stroke:#fff;stroke-width:3px;stroke-miterlimit:10}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button.onesignal-bell-launcher-badge-active svg .background,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button.onesignal-bell-launcher-button-active svg .background{fill:#dd2022!important}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-button .pulse-ring{border:7px solid hsla(0,0%,100%,.4)}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-default .onesignal-bell-launcher-badge{border:1px solid #fff;background:#000;color:#fff}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button svg .background{fill:#fff}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button svg .foreground{fill:#e54b4d}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button svg .stroke{fill:none;stroke:#e54b4d;stroke-width:3px;stroke-miterlimit:10}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button.onesignal-bell-launcher-badge-active svg .background,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button.onesignal-bell-launcher-button-active svg .background{fill:#f2f2f2!important}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-button .pulse-ring{border:7px solid rgba(229,75,77,.4)}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher.onesignal-bell-launcher-theme-inverse .onesignal-bell-launcher-badge{border:1px solid #fff;background:#e54b4d;color:#fff}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher-active,#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher-enabled{-webkit-transform:scale(1);transform:scale(1);opacity:1}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher-disabled{visibility:hidden}#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher-inactive{opacity:.5}#onesignal-bell-container.onesignal-reset .pulse-ring{border-radius:50%;position:absolute;left:0;top:0;bottom:0;right:0;-webkit-animation:notifyButtonPulse .35s ease-in-out;animation:notifyButtonPulse .35s ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1;opacity:0;z-index:1000;pointer-events:none}@media print{#onesignal-bell-container{display:none}}@-webkit-keyframes notifyButtonPulse{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:0;border-width:10px}50%{opacity:1;border-width:5px}to{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0;border-width:1px}}@keyframes notifyButtonPulse{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:0;border-width:10px}50%{opacity:1;border-width:5px}to{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0;border-width:1px}}', ""]);
}, function(e, n, t) {
    n = e.exports = t(27)();
    n.push([e.id, "#onesignal-popover-container{font-size:14px;position:fixed;z-index:2258594000;left:0;right:0;-webkit-font-smoothing:initial}#onesignal-popover-container.slide-down{top:0}#onesignal-popover-container.slide-down.close-popover #onesignal-popover-dialog{-webkit-animation-name:slideDownExit;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:ease-out;-webkit-animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-name:slideDownExit;animation-iteration-count:1;animation-timing-function:ease-out;animation-duration:.4s;animation-fill-mode:forwards}#onesignal-popover-container.slide-down #onesignal-popover-dialog{width:500px;-webkit-animation-name:slideDownEnter;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:ease-out;-webkit-animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-name:slideDownEnter;animation-iteration-count:1;animation-timing-function:ease-out;animation-duration:.4s;animation-fill-mode:forwards}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog{padding:1.714em;width:612px;margin-bottom:18px}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog #blocked-popover{display:block}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog #normal-popover{display:none}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog .popover-body-message{padding:0 .2em;text-align:center;width:100%}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog .popover-body-message img{width:100%}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog .popover-body-message .unblock-image{margin:2em 0 .5em}#onesignal-popover-container.slide-down #onesignal-popover-dialog.blocked-dialog .popover-button.secondary{padding:.714em 2em}#onesignal-popover-container #blocked-popover{display:none}#onesignal-popover-container.slide-up{bottom:0}#onesignal-popover-container.slide-up.close-popover #onesignal-popover-dialog{-webkit-animation-name:slideUpExit;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:ease-out;-webkit-animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-name:slideUpExit;animation-iteration-count:1;animation-timing-function:ease-out;animation-duration:.4s;animation-fill-mode:forwards}#onesignal-popover-container.slide-up #onesignal-popover-dialog{width:100%;-webkit-animation-name:slideUpEnter;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:ease-out;-webkit-animation-duration:.4s;-webkit-animation-fill-mode:backwards;animation-name:slideUpEnter;animation-iteration-count:1;animation-timing-function:ease-out;animation-duration:.4s;animation-fill-mode:backwards}#onesignal-popover-container #onesignal-popover-dialog{box-sizing:border-box;max-width:100%;margin:0 auto;box-shadow:0 0 20px 3px rgba(0,0,0,.22)!important;background:#fff!important;padding:1.286em;border-bottom-left-radius:2px;border-bottom-right-radius:2px;font-family:Roboto,Noto,Helvetica Neue,Helvetica,Arial,sans-serif}#onesignal-popover-container #onesignal-popover-dialog .popover-body{box-sizing:border-box;margin:0}#onesignal-popover-container #onesignal-popover-dialog .popover-body-icon{box-sizing:border-box;float:left;width:80px;height:80px;background-size:contain;background-position:0 0;background-repeat:no-repeat}#onesignal-popover-container #onesignal-popover-dialog .popover-body-icon.default-icon{background-size:initial;background-position:50% 0}#onesignal-popover-container #onesignal-popover-dialog .popover-body-message{box-sizing:border-box;padding:0 .2em 0 1.286em;float:left;width:calc(100% - 80px);font-size:1.143em;line-height:1.45em;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;color:#666!important}#onesignal-popover-container #onesignal-popover-dialog button{box-sizing:border-box;display:inline-block;padding:.375rem 1rem;font-size:.9625em;font-weight:400;line-height:1.5;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;border-radius:.25rem;font-family:inherit;letter-spacing:.05em;-webkit-transition:background-color 75ms ease;transition:background-color 75ms ease;margin:0}#onesignal-popover-container #onesignal-popover-dialog .popover-button{padding:.714em 2em;font-size:1em;text-transform:uppercase;border-radius:2px;font-weight:400}#onesignal-popover-container #onesignal-popover-dialog .popover-button.primary{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 6px 0 rgba(0,0,0,.12);background:#4285f4!important;color:#fff!important}#onesignal-popover-container #onesignal-popover-dialog .popover-button.primary:hover{background:#1e6ef2}#onesignal-popover-container #onesignal-popover-dialog .popover-button.primary:active{background:#0d5bdd}#onesignal-popover-container #onesignal-popover-dialog .popover-button.secondary{box-shadow:none;background:#fff!important;color:#4285f4!important}#onesignal-popover-container #onesignal-popover-dialog .popover-button.secondary:hover{color:#0e60e9}#onesignal-popover-container #onesignal-popover-dialog .popover-button.secondary:active{color:#083c92}#onesignal-popover-container #onesignal-popover-dialog .primary.popover-button+.secondary.popover-button{margin-right:.714em}#onesignal-popover-container #onesignal-popover-dialog .popover-footer{position:relative;margin:.25em .25em 0 0}#onesignal-popover-container #onesignal-popover-dialog .align-right{float:right}#onesignal-popover-container #onesignal-popover-dialog .clearfix{display:block}#onesignal-popover-container #onesignal-popover-dialog .clearfix:after{content:'';display:block;height:0;clear:both;visibility:hidden}@-webkit-keyframes slideDownEnter{0%{-webkit-transform:translateY(-150%)}to{-webkit-transform:translateY(0)}}@keyframes slideDownEnter{0%{-webkit-transform:translateY(-150%);transform:translateY(-150%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slideDownExit{0%{-webkit-transform:translateY(0)}to{-webkit-transform:translateY(-150%)}}@keyframes slideDownExit{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-150%);transform:translateY(-150%)}}@-webkit-keyframes slideUpEnter{0%{-webkit-transform:translateY(150%)}to{-webkit-transform:translateY(0)}}@keyframes slideUpEnter{0%{-webkit-transform:translateY(150%);transform:translateY(150%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slideUpExit{0%{-webkit-transform:translateY(0)}to{-webkit-transform:translateY(150%)}}@keyframes slideUpExit{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(150%);transform:translateY(150%)}}", ""])
}, function(e, n, t) {
    (function(n) {
        e.exports = n.OneSignal = t(23)
    }).call(n, function() {
        return this
    }())
}, function(e, n, t) {
    (function(n) {
        e.exports = n.ServiceWorker = t(31)
    }).call(n, function() {
        return this
    }())
}, function(e, n) {
    function t() {
        if (!c || !f) return;
        c = false;
        if (f.length) u = f.concat(u);
        else d = -1;
        if (u.length) i()
    }

    function i() {
        if (c) return;
        var e = l.call(null, t);
        c = true;
        var n = u.length;
        for (; n;) {
            f = u;
            u = [];
            for (; ++d < n;)
                if (f) f[d].run();
            d = -1;
            n = u.length
        }
        f = null;
        c = false;
        s.call(null, e)
    }

    function o(e, n) {
        this.fun = e;
        this.array = n
    }

    function r() {}
    var a = e.exports = {};
    var l;
    var s;
    ! function() {
        try {
            l = setTimeout
        } catch (e) {
            l = function() {
                throw new Error("setTimeout is not defined")
            }
        }
        try {
            s = clearTimeout
        } catch (e) {
            s = function() {
                throw new Error("clearTimeout is not defined")
            }
        }
    }();
    var u = [];
    var c = false;
    var f;
    var d = -1;
    a.nextTick = function(e) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        u.push(new o(e, n));
        if (1 === u.length && !c) l.call(null, i, 0)
    };
    o.prototype.run = function() {
        this.fun.apply(null, this.array)
    };
    a.title = "browser";
    a.browser = true;
    a.env = {};
    a.argv = [];
    a.version = "";
    a.versions = {};
    a.on = r;
    a.addListener = r;
    a.once = r;
    a.off = r;
    a.removeListener = r;
    a.removeAllListeners = r;
    a.emit = r;
    a.binding = function(e) {
        throw new Error("process.binding is not supported")
    };
    a.cwd = function() {
        return "/"
    };
    a.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    };
    a.umask = function() {
        return 0
    }
}, function(e, n) {
    e.exports = '<?xml version="1.0" encoding="utf-8"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version="1.1" class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t width="99.7px" height="99.7px" viewBox="0 0 99.7 99.7" style="enable-background:new 0 0 99.7 99.7;" xml:space="preserve">\n<g>\n\t<circle class="background" cx="49.9" cy="49.9" r="49.9"/>\n\t<g id="Layer_2">\n\t\t<g>\n\t\t\t<path class="foreground" d="M50.1,66.2H27.7c0,0-2-0.2-2-2.1c0-1.9,1.7-2,1.7-2s6.7-3.2,6.7-5.5c0-2.3-1.1-3.9-1.1-13.3\n\t\t\t\ts6-16.6,13.2-16.6c0,0,1-2.4,3.9-2.4c2.8,0,3.8,2.4,3.8,2.4c7.2,0,13.2,7.2,13.2,16.6s-1,11-1,13.3c0,2.3,6.7,5.5,6.7,5.5\n\t\t\t\ts1.7,0.1,1.7,2c0,1.8-2.1,2.1-2.1,2.1H50.1z"/>\n\t\t\t<path class="foreground" d="M42.9,68.5h14.5c0,0-1,6.3-7.2,6.3S42.9,68.5,42.9,68.5z"/>\n\t\t\t<ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/>\n\t\t</g>\n\t</g>\n</g>\n</svg>\n'
}, function(e, n, t) {
    var i = t(38);
    if ("string" == typeof i) i = [
        [e.id, i, ""]
    ];
    var o = t(29)(i, {});
    if (i.locals) e.exports = i.locals;
    if (false) {
        if (!i.locals) e.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js!./bell.scss", function() {
            var n = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js!./bell.scss");
            if ("string" == typeof n) n = [
                [e.id, n, ""]
            ];
            o(n)
        });
        e.hot.dispose(function() {
            o()
        })
    }
}, function(e, n, t) {
    var i = t(39);
    if ("string" == typeof i) i = [
        [e.id, i, ""]
    ];
    var o = t(29)(i, {});
    if (i.locals) e.exports = i.locals;
    if (false) {
        if (!i.locals) e.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js!./popover.scss", function() {
            var n = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/sass-loader/index.js!./popover.scss");
            if ("string" == typeof n) n = [
                [e.id, n, ""]
            ];
            o(n)
        });
        e.hot.dispose(function() {
            o()
        })
    }
}, function(e, n, t) {
    "use strict";

    function i() {
        function e(n) {
            function t(e) {
                return function n() {
                    u[e].apply(null, arguments);
                    return c
                }
            }

            function i() {
                if (!n) return Promise.reject(new Error("ServiceWorker not found."));
                var e = r.parsePayload(o(arguments));
                var t = new MessageChannel;
                t.port1.addEventListener("message", f);
                return n.postMessage(e, [t.port2])
            }

            function l(e) {
                n = e
            }

            function s(e) {
                var n = e.data;
                if (n)
                    if (n.__broadcast) r.emission(u, {
                        broadcast: true,
                        event: e
                    })(e);
                    else r.emission(u, {
                        broadcast: false,
                        event: e
                    })(e)
            }
            var u = a();
            var c = {
                on: t("on"),
                once: t("once"),
                off: t("off"),
                emit: i,
                setWorker: l,
                at: e
            };
            var f = r.emission(u, {
                broadcast: false
            });
            navigator.serviceWorker.addEventListener("message", s);
            return c
        }
        var n = e(navigator.serviceWorker.controller);
        return n
    }
    var o = t(15);
    var r = t(30);
    var a = t(26);
    e.exports = i
}, function(e, n, t) {
    "use strict";

    function i() {
        function e(e) {
            return function n() {
                u[e].apply(null, arguments);
                return c
            }
        }

        function n(e) {
            var n = {
                reply: l(e)
            };
            r.emission(u, n)(e)
        }

        function t(e) {
            function n(e) {
                return e.map(t)
            }

            function t(n) {
                return n.postMessage({
                    type: e,
                    payload: i,
                    __broadcast: true
                })
            }
            var i = o(arguments, 1);
            return self.clients.matchAll({
                includeUncontrolled: true
            }).then(n)
        }

        function i(e) {
            var n = r.parsePayload(o(arguments, 1));
            return e.postMessage(n)
        }

        function l(e) {
            return i.bind(null, e.ports[0])
        }

        function s(e) {
            var n = r.parsePayload(o(arguments, 1));
            return self.clients.matchAll({
                includeUncontrolled: true
            }).then(function(t) {
                var i = false;
                t.forEach(function(t) {
                    if (t.id === e) {
                        i = true;
                        return t.postMessage(n)
                    }
                });
                if (!i) return Promise.reject("Could not find service worker client with ID " + e + " to reply to.")
            })
        }
        var u = a();
        var c = {
            on: e("on"),
            once: e("once"),
            off: e("off"),
            broadcast: t,
            emit: s
        };
        self.addEventListener("message", n);
        return c
    }
    var o = t(15);
    var r = t(30);
    var a = t(26);
    e.exports = i
}, function(e, n, t) {
    (function(n) {
        var t = "function" == typeof n,
            i;
        if (t) i = function(e) {
            n(e)
        };
        else i = function(e) {
            setTimeout(e, 0)
        };
        e.exports = i
    }).call(n, t(22).setImmediate)
}]);
