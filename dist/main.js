! function (e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) t.d(o, r, function (n) {
                return e[n]
            }.bind(null, r));
        return o
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 5)
}([function (e, n) {
    e.exports = '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <link rel="stylesheet" href="style.css">\n  <title>WORLDNAME</title>\n</head>\n\n<body>\n  <p>\n    <center>\n      <b>WELCOME TO WORLDNAME!</b>\n      <br>\n      <div style="font-size:80%">\n        RULES: CUSTOM\n        <br>\n        <button title="Click to show/hide content" type="button" id="spoilerButton" onclick="if(document.getElementById(\'spoiler\').style.display==\'none\'){document.getElementById(\'spoiler\').style.display=\'\';document.getElementById(\'spoilerButton\').innerText=\'Hide\';}else{document.getElementById(\'spoiler\').style.display=\'none\';document.getElementById(\'spoilerButton\').innerText=\'Show More Info\'}">\n          Show More Info\n        </button>\n        <div id="spoiler" style="display:none;">\n          PVP: DISABLED\n          <br> SEED: 1231231\n          <br> more rules...\n          <br>\n        </div>\n      </div>\n    </center>\n    <div id="messageContent">\n      [CONTENT]\n    </div>\n    <hr />\n    <center style="font-size:80%;">\n      While playing on any server, please be courteous to other players, listen to mods and admins, and behave yourself. You may\n      be muted or banned for any reason, and the in-game chat may be monitored.\n      <br>\n      <a href="http://theblockheads.net" style="padding-right:5px;color:#FFF">TheBlockheads.net</a>\n      <a href="http://theblockheads.net/forum" style="padding-left:5px;color:#FFF;">Blockheads Forums</a>\n      <br>\n      <hr>\n    </center>\n  </p>\n</body>\n\n</html>'
}, function (e, n) {
    e.exports = '<style>\n  .navPage:not(.visible) {\n    display: none;\n  }\n\n  .navWrapper {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  \n  .navButton {\n    margin: 5px 10px;\n    padding: 10px;\n    background: #2976f2;\n  }\n\n  [data-to-page] {\n    cursor: pointer;\n  }\n</style>\n\n<nav class="navWrapper">\n  <div class="navButton" data-to-page="home">Home</div>\n  <div class="navButton" data-to-page="test">Test</div>\n</nav>\n\n<hr>\n\n<div class="navPage visible" data-page="home">\n  Home\n  <a data-to-page="test">Go to test page</a>\n</div>\n\n<div class="navPage" data-page="test">\n  Test\n</div>\n\n<script>\n  function showPage(pageName) {\n    var oldPages = Array.from(document.querySelectorAll(\'div.navPage.visible\'))\n    oldPages.forEach(function (page) { page.classList.remove(\'visible\') })\n\n    var page = document.querySelector(\'[data-page="\' + pageName + `"]`)\n    if (!page) return\n\n    page.classList.add(\'visible\')\n  }\n\n  document.addEventListener(\'click\', function (event) {\n    if (!event.target) return;\n    if (event.target.getAttribute(\'data-to-page\')) {\n      showPage(event.target.getAttribute(\'data-to-page\'))\n    }\n  })\n<\/script>'
}, function (e, n, t) {
    var o, r = function () {
        var e = String.fromCharCode,
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
            o = {};

        function r(e, n) {
            if (!o[e]) {
                o[e] = {};
                for (var t = 0; t < e.length; t++) o[e][e.charAt(t)] = t
            }
            return o[e][n]
        }
        var a = {
            compressToBase64: function (e) {
                if (null == e) return "";
                var t = a._compress(e, 6, function (e) {
                    return n.charAt(e)
                });
                switch (t.length % 4) {
                    default:
                    case 0:
                        return t;
                    case 1:
                        return t + "===";
                    case 2:
                        return t + "==";
                    case 3:
                        return t + "="
                }
            },
            decompressFromBase64: function (e) {
                return null == e ? "" : "" == e ? null : a._decompress(e.length, 32, function (t) {
                    return r(n, e.charAt(t))
                })
            },
            compressToUTF16: function (n) {
                return null == n ? "" : a._compress(n, 15, function (n) {
                    return e(n + 32)
                }) + " "
            },
            decompressFromUTF16: function (e) {
                return null == e ? "" : "" == e ? null : a._decompress(e.length, 16384, function (n) {
                    return e.charCodeAt(n) - 32
                })
            },
            compressToUint8Array: function (e) {
                for (var n = a.compress(e), t = new Uint8Array(2 * n.length), o = 0, r = n.length; o < r; o++) {
                    var s = n.charCodeAt(o);
                    t[2 * o] = s >>> 8, t[2 * o + 1] = s % 256
                }
                return t
            },
            decompressFromUint8Array: function (n) {
                if (null == n) return a.decompress(n);
                for (var t = new Array(n.length / 2), o = 0, r = t.length; o < r; o++) t[o] = 256 * n[2 * o] + n[2 * o + 1];
                var s = [];
                return t.forEach(function (n) {
                    s.push(e(n))
                }), a.decompress(s.join(""))
            },
            compressToEncodedURIComponent: function (e) {
                return null == e ? "" : a._compress(e, 6, function (e) {
                    return t.charAt(e)
                })
            },
            decompressFromEncodedURIComponent: function (e) {
                return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"), a._decompress(e.length, 32, function (n) {
                    return r(t, e.charAt(n))
                }))
            },
            compress: function (n) {
                return a._compress(n, 16, function (n) {
                    return e(n)
                })
            },
            _compress: function (e, n, t) {
                if (null == e) return "";
                var o, r, a, s = {},
                    i = {},
                    l = "",
                    c = "",
                    p = "",
                    u = 2,
                    d = 3,
                    g = 2,
                    h = [],
                    f = 0,
                    m = 0;
                for (a = 0; a < e.length; a += 1)
                    if (l = e.charAt(a), Object.prototype.hasOwnProperty.call(s, l) || (s[l] = d++, i[l] = !0), c = p + l, Object.prototype.hasOwnProperty.call(s, c)) p = c;
                    else {
                        if (Object.prototype.hasOwnProperty.call(i, p)) {
                            if (p.charCodeAt(0) < 256) {
                                for (o = 0; o < g; o++) f <<= 1, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++;
                                for (r = p.charCodeAt(0), o = 0; o < 8; o++) f = f << 1 | 1 & r, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++, r >>= 1
                            } else {
                                for (r = 1, o = 0; o < g; o++) f = f << 1 | r, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++, r = 0;
                                for (r = p.charCodeAt(0), o = 0; o < 16; o++) f = f << 1 | 1 & r, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++, r >>= 1
                            }
                            0 == --u && (u = Math.pow(2, g), g++), delete i[p]
                        } else
                            for (r = s[p], o = 0; o < g; o++) f = f << 1 | 1 & r, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++, r >>= 1;
                        0 == --u && (u = Math.pow(2, g), g++), s[c] = d++, p = String(l)
                    } if ("" !== p) {
                    if (Object.prototype.hasOwnProperty.call(i, p)) {
                        if (p.charCodeAt(0) < 256) {
                            for (o = 0; o < g; o++) f <<= 1, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++;
                            for (r = p.charCodeAt(0), o = 0; o < 8; o++) f = f << 1 | 1 & r, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++, r >>= 1
                        } else {
                            for (r = 1, o = 0; o < g; o++) f = f << 1 | r, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++, r = 0;
                            for (r = p.charCodeAt(0), o = 0; o < 16; o++) f = f << 1 | 1 & r, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++, r >>= 1
                        }
                        0 == --u && (u = Math.pow(2, g), g++), delete i[p]
                    } else
                        for (r = s[p], o = 0; o < g; o++) f = f << 1 | 1 & r, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++, r >>= 1;
                    0 == --u && (u = Math.pow(2, g), g++)
                }
                for (r = 2, o = 0; o < g; o++) f = f << 1 | 1 & r, m == n - 1 ? (m = 0, h.push(t(f)), f = 0) : m++, r >>= 1;
                for (;;) {
                    if (f <<= 1, m == n - 1) {
                        h.push(t(f));
                        break
                    }
                    m++
                }
                return h.join("")
            },
            decompress: function (e) {
                return null == e ? "" : "" == e ? null : a._decompress(e.length, 32768, function (n) {
                    return e.charCodeAt(n)
                })
            },
            _decompress: function (n, t, o) {
                var r, a, s, i, l, c, p, u = [],
                    d = 4,
                    g = 4,
                    h = 3,
                    f = "",
                    m = [],
                    v = {
                        val: o(0),
                        position: t,
                        index: 1
                    };
                for (r = 0; r < 3; r += 1) u[r] = r;
                for (s = 0, l = Math.pow(2, 2), c = 1; c != l;) i = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = t, v.val = o(v.index++)), s |= (i > 0 ? 1 : 0) * c, c <<= 1;
                switch (s) {
                    case 0:
                        for (s = 0, l = Math.pow(2, 8), c = 1; c != l;) i = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = t, v.val = o(v.index++)), s |= (i > 0 ? 1 : 0) * c, c <<= 1;
                        p = e(s);
                        break;
                    case 1:
                        for (s = 0, l = Math.pow(2, 16), c = 1; c != l;) i = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = t, v.val = o(v.index++)), s |= (i > 0 ? 1 : 0) * c, c <<= 1;
                        p = e(s);
                        break;
                    case 2:
                        return ""
                }
                for (u[3] = p, a = p, m.push(p);;) {
                    if (v.index > n) return "";
                    for (s = 0, l = Math.pow(2, h), c = 1; c != l;) i = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = t, v.val = o(v.index++)), s |= (i > 0 ? 1 : 0) * c, c <<= 1;
                    switch (p = s) {
                        case 0:
                            for (s = 0, l = Math.pow(2, 8), c = 1; c != l;) i = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = t, v.val = o(v.index++)), s |= (i > 0 ? 1 : 0) * c, c <<= 1;
                            u[g++] = e(s), p = g - 1, d--;
                            break;
                        case 1:
                            for (s = 0, l = Math.pow(2, 16), c = 1; c != l;) i = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = t, v.val = o(v.index++)), s |= (i > 0 ? 1 : 0) * c, c <<= 1;
                            u[g++] = e(s), p = g - 1, d--;
                            break;
                        case 2:
                            return m.join("")
                    }
                    if (0 == d && (d = Math.pow(2, h), h++), u[p]) f = u[p];
                    else {
                        if (p !== g) return null;
                        f = a + a.charAt(0)
                    }
                    m.push(f), u[g++] = a + f.charAt(0), a = f, 0 == --d && (d = Math.pow(2, h), h++)
                }
            }
        };
        return a
    }();
    void 0 === (o = function () {
        return r
    }.call(n, t, n, e)) || (e.exports = o)
}, function (e, n) {
    e.exports = '<style>\n  .navPage:not(.visible) {\n    display: none;\n  }\n\n  .hamburger {\n    /* Visual styles */\n    background: rgba(196, 218, 255, 0.8);\n    transition: left 0.3s;\n    height: 100vh;\n    \n    /* Essential styles */\n    /* Needed to make scrolling work on iOS */\n    -webkit-overflow-scrolling: touch;\n    z-index: 1000;\n    position: fixed;\n    width: 250px;\n    left: -250px;\n    top: 0;\n    overflow-y: auto;\n  }\n\n  .hamburger.visible {\n    left: 0;\n  }\n\n  .hamburger span {\n    display: block;\n    padding: 0.5em;\n    text-align: center;\n  }\n\n  .hamburger span:not(:last-child) {\n    border-bottom: 1px solid #000000;\n  }\n\n  .hamburger-toggle {\n    position: fixed;\n    z-index: 1000;\n    top: 0;\n    left: 0;\n    transition: left 0.3s;\n\n    padding: 0.5em;\n    background: #c4daff;\n    border: 1px solid #000000;\n  }\n\n  .hamburger.visible~.hamburger-toggle {\n    left: 250px;\n  }\n\n  .navButton {\n    margin: 5px 10px;\n    padding: 10px;\n    background: #2976f2;\n  }\n\n  [data-to-page] {\n    cursor: pointer;\n  }\n</style>\n\n<nav class="hamburger visible">\n  <span data-to-page="home">Home</span>\n  <span data-to-page="test">Test</span>\n  <span data-to-page="home">Home</span>\n  <span data-to-page="test">Test</span>\n  <span data-to-page="home">Home</span>\n  <span data-to-page="test">Test</span>\n  <span data-to-page="home">Home</span>\n  <span data-to-page="test">Test</span>\n  <span data-to-page="home">Home</span>\n  <span data-to-page="test">Test</span>\n</nav>\n\n<button class="hamburger-toggle">&#9776; Menu</button>\n\n<div class="navPage visible" data-page="home">\n  Home\n  <a data-to-page="test">Go to test page</a>\n</div>\n\n<div class="navPage" data-page="test">\n  Test\n</div>\n\n<script>\n  function showPage(pageName) {\n    var oldPages = Array.from(document.querySelectorAll(\'.navPage.visible\'))\n    oldPages.forEach(function (page) { page.classList.remove(\'visible\') })\n\n    var page = document.querySelector(\'[data-page="\' + pageName + `"]`)\n    if (!page) return\n\n    page.classList.add(\'visible\')\n  }\n\n  var hamburger = document.querySelector(\'.hamburger\')\n\n  document.querySelector(\'.hamburger-toggle\').addEventListener(\'click\', function () {\n    hamburger.classList.toggle(\'visible\')\n  })\n\n  document.addEventListener(\'click\', function (event) {\n    if (!event.target) return;\n    var toPage = event.target.getAttribute(\'data-to-page\')\n    if (toPage) {\n      showPage(toPage)\n      if (event.target.parentElement == hamburger) {\n        hamburger.classList.remove(\'visible\')\n      }\n    }\n  })\n<\/script>'
}, function (e, n) {
    e.exports = '<script type="variables">\n$motd = Specified up here <b>for convenience</b>\n$forum_thread = https://forums.theblockheads.net/t/ancient-server-rabbithole/4529/195\n$bhfans_id = 85\n$debug = false\n<\/script>\n\n<p>$motd</p>\n\n<p>$bhfans_server by $bhfans_owner has $bhfans_votes votes!</p>\n\n<h1>$forum_title</h1>\n\n$forum_post\n\n<style>\n  .meta {\n    display: none;\n  }\n\n  img.emoji {\n    width: 20px;\n    height: 20px;\n    vertical-align: middle;\n  }\n</style>\n\n<script src="https://gitcdn.xyz/cdn/Bibliofile/Welcome-Message-Variables/master/dist/bundle.js"><\/script>\n'
}, function (e, n, t) {
    "use strict";
    t.r(n);
    var o = t(0),
        r = t.n(o),
        a = t(1),
        s = t.n(a),
        i = t(3),
        l = t.n(i),
        c = t(4),
        p = t.n(c),
        u = t(2),
        d = t.n(u);
    const g = {
            empty: "",
            tabs: s.a,
            hamburger: l.a,
            variables: p.a
        },
        h = document.querySelector("iframe"),
        f = window.editor = CodeMirror(document.querySelector("#editor"), {
            lineNumbers: !0,
            lineWrapping: !0,
            styleActiveLine: !0,
            matchBrackets: !0,
            lint: !0,
            gutters: ["CodeMirror-lint-markers"],
            mode: "text/html"
        });
    f.setSize("100%", "100%"), f.on("change", () => {
        localStorage.setItem("userInput", f.getValue())
    });
    const m = () => new URLSearchParams(location.href.includes("?") ? location.href.substr(location.href.indexOf("?")) : ""),
        v = m();
    let b = null != localStorage.getItem("userInput") ? localStorage.getItem("userInput") : s.a;
    v.has("code") && (b = v.get("code")), v.has("l``zcode") && (b = d.a.decompressFromEncodedURIComponent(v.get("newcode"))), f.setValue(b), h.srcdoc = r.a.replace("[CONTENT]", b), document.querySelector("button.run").addEventListener("click", () => {
        h.srcdoc = r.a.replace("[CONTENT]", f.getValue())
    }), document.querySelector("button.share").addEventListener("click", () => {
        const e = m();
        e.set("newcode", d.a.compressToEncodedURIComponent(f.getValue())), alert("Sharable URL now in address bar"), location.assign(location.protocol + location.pathname + "?" + e.toString())
    }, {
        passive: !0
    });
    const y = document.querySelector("select.preset");
    y.addEventListener("change", () => {
        f.setValue(g[y.value]), h.srcdoc = r.a.replace("[CONTENT]", f.getValue())
    }, {
        passive: !0
    }), document.querySelector("button.toggleView").addEventListener("click", () => {
        document.querySelector(".container").classList.toggle("hidePreview")
    })
}]);