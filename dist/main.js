/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hamburgerPreset.html":
/*!**********************************!*\
  !*** ./src/hamburgerPreset.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n  .navPage:not(.visible) {\\n    display: none;\\n  }\\n\\n  .hamburger {\\n    /* Visual styles */\\n    background: rgba(196, 218, 255, 0.8);\\n    transition: left 0.3s;\\n    height: 100vh;\\n    \\n    /* Essential styles */\\n    /* Needed to make scrolling work on iOS */\\n    -webkit-overflow-scrolling: touch;\\n    z-index: 1000;\\n    position: fixed;\\n    width: 250px;\\n    left: -250px;\\n    top: 0;\\n    overflow-y: auto;\\n  }\\n\\n  .hamburger.visible {\\n    left: 0;\\n  }\\n\\n  .hamburger span {\\n    display: block;\\n    padding: 0.5em;\\n    text-align: center;\\n  }\\n\\n  .hamburger span:not(:last-child) {\\n    border-bottom: 1px solid #000000;\\n  }\\n\\n  .hamburger-toggle {\\n    position: fixed;\\n    z-index: 1000;\\n    top: 0;\\n    left: 0;\\n    transition: left 0.3s;\\n\\n    padding: 0.5em;\\n    background: #c4daff;\\n    border: 1px solid #000000;\\n  }\\n\\n  .hamburger.visible~.hamburger-toggle {\\n    left: 250px;\\n  }\\n\\n  .navButton {\\n    margin: 5px 10px;\\n    padding: 10px;\\n    background: #2976f2;\\n  }\\n\\n  [data-to-page] {\\n    cursor: pointer;\\n  }\\n</style>\\n\\n<nav class=\\\"hamburger visible\\\">\\n  <span data-to-page=\\\"home\\\">Home</span>\\n  <span data-to-page=\\\"test\\\">Test</span>\\n  <span data-to-page=\\\"home\\\">Home</span>\\n  <span data-to-page=\\\"test\\\">Test</span>\\n  <span data-to-page=\\\"home\\\">Home</span>\\n  <span data-to-page=\\\"test\\\">Test</span>\\n  <span data-to-page=\\\"home\\\">Home</span>\\n  <span data-to-page=\\\"test\\\">Test</span>\\n  <span data-to-page=\\\"home\\\">Home</span>\\n  <span data-to-page=\\\"test\\\">Test</span>\\n</nav>\\n\\n<button class=\\\"hamburger-toggle\\\">&#9776; Menu</button>\\n\\n<div class=\\\"navPage visible\\\" data-page=\\\"home\\\">\\n  Home\\n  <a data-to-page=\\\"test\\\">Go to test page</a>\\n</div>\\n\\n<div class=\\\"navPage\\\" data-page=\\\"test\\\">\\n  Test\\n</div>\\n\\n<script>\\n  function showPage(pageName) {\\n    var oldPages = Array.from(document.querySelectorAll('.navPage.visible'))\\n    oldPages.forEach(function (page) { page.classList.remove('visible') })\\n\\n    var page = document.querySelector('[data-page=\\\"' + pageName + `\\\"]`)\\n    if (!page) return\\n\\n    page.classList.add('visible')\\n  }\\n\\n  var hamburger = document.querySelector('.hamburger')\\n\\n  document.querySelector('.hamburger-toggle').addEventListener('click', function () {\\n    hamburger.classList.toggle('visible')\\n  })\\n\\n  document.addEventListener('click', function (event) {\\n    if (!event.target) return;\\n    var toPage = event.target.getAttribute('data-to-page')\\n    if (toPage) {\\n      showPage(toPage)\\n      if (event.target.parentElement == hamburger) {\\n        hamburger.classList.remove('visible')\\n      }\\n    }\\n  })\\n</script>\"\n\n//# sourceURL=webpack:///./src/hamburgerPreset.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server.html */ \"./src/server.html\");\n/* harmony import */ var _server_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tabPreset_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabPreset.html */ \"./src/tabPreset.html\");\n/* harmony import */ var _tabPreset_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabPreset_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hamburgerPreset_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburgerPreset.html */ \"./src/hamburgerPreset.html\");\n/* harmony import */ var _hamburgerPreset_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hamburgerPreset_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _variablesPreset_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variablesPreset.html */ \"./src/variablesPreset.html\");\n/* harmony import */ var _variablesPreset_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_variablesPreset_html__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst presets = {\n    empty: '',\n    tabs: _tabPreset_html__WEBPACK_IMPORTED_MODULE_1___default.a,\n    hamburger: _hamburgerPreset_html__WEBPACK_IMPORTED_MODULE_2___default.a,\n    variables: _variablesPreset_html__WEBPACK_IMPORTED_MODULE_3___default.a\n}\n\nconst iframe = document.querySelector('iframe')\n\nconst editor = window.editor = CodeMirror(document.querySelector('#editor'), {\n    lineNumbers: true,\n    lineWrapping: true,\n    styleActiveLine: true,\n    matchBrackets: true,\n    lint: true,\n    gutters: [\"CodeMirror-lint-markers\"],\n    mode: \"text/html\"\n})\neditor.setSize(\"100%\", \"100%\")\n\neditor.on('change', () => {\n    localStorage.setItem('userInput', editor.getValue())\n})\n\nconst getQuery = () => new URLSearchParams(location.href.includes('?') ? location.href.substr(location.href.indexOf('?')) : '')\n\nconst query = getQuery()\nconst starterInput = query.has('code') ? query.get('code') :\n    localStorage.getItem('userInput') != null ? localStorage.getItem('userInput') :\n    _tabPreset_html__WEBPACK_IMPORTED_MODULE_1___default.a\neditor.setValue(starterInput)\niframe.srcdoc = _server_html__WEBPACK_IMPORTED_MODULE_0___default.a\n    .replace('[CONTENT]', starterInput)\n\ndocument.querySelector('button.run').addEventListener('click', () => {\n    iframe.srcdoc = _server_html__WEBPACK_IMPORTED_MODULE_0___default.a.replace('[CONTENT]', editor.getValue())\n})\n\ndocument.querySelector('button.share').addEventListener('click', () => {\n    const query = getQuery()\n    query.set('code', editor.getValue())\n    alert(\"Sharable URL now in address bar\")\n    location.assign(location.protocol + location.pathname + '?' + query.toString())\n}, { passive: true })\n\nconst presetSelect = document.querySelector('select.preset')\npresetSelect.addEventListener('change', () => {\n    editor.setValue(presets[presetSelect.value])\n    iframe.srcdoc = _server_html__WEBPACK_IMPORTED_MODULE_0___default.a.replace('[CONTENT]', editor.getValue())\n}, { passive: true })\n\ndocument.querySelector('button.toggleView').addEventListener('click', () => {\n    document.querySelector('.container').classList.toggle('hidePreview')\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/server.html":
/*!*************************!*\
  !*** ./src/server.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <link rel=\\\"stylesheet\\\" href=\\\"style.css\\\">\\n  <title>WORLDNAME</title>\\n</head>\\n\\n<body>\\n  <p>\\n    <center>\\n      <b>WELCOME TO WORLDNAME!</b>\\n      <br>\\n      <div style=\\\"font-size:80%\\\">\\n        RULES: CUSTOM\\n        <br>\\n        <button title=\\\"Click to show/hide content\\\" type=\\\"button\\\" id=\\\"spoilerButton\\\" onclick=\\\"if(document.getElementById('spoiler').style.display=='none'){document.getElementById('spoiler').style.display='';document.getElementById('spoilerButton').innerText='Hide';}else{document.getElementById('spoiler').style.display='none';document.getElementById('spoilerButton').innerText='Show More Info'}\\\">\\n          Show More Info\\n        </button>\\n        <div id=\\\"spoiler\\\" style=\\\"display:none;\\\">\\n          PVP: DISABLED\\n          <br> SEED: 1231231\\n          <br> more rules...\\n          <br>\\n        </div>\\n      </div>\\n    </center>\\n    <div id=\\\"messageContent\\\">\\n      [CONTENT]\\n    </div>\\n    <hr />\\n    <center style=\\\"font-size:80%;\\\">\\n      While playing on any server, please be courteous to other players, listen to mods and admins, and behave yourself. You may\\n      be muted or banned for any reason, and the in-game chat may be monitored.\\n      <br>\\n      <a href=\\\"http://theblockheads.net\\\" style=\\\"padding-right:5px;color:#FFF\\\">TheBlockheads.net</a>\\n      <a href=\\\"http://theblockheads.net/forum\\\" style=\\\"padding-left:5px;color:#FFF;\\\">Blockheads Forums</a>\\n      <br>\\n      <hr>\\n    </center>\\n  </p>\\n</body>\\n\\n</html>\"\n\n//# sourceURL=webpack:///./src/server.html?");

/***/ }),

/***/ "./src/tabPreset.html":
/*!****************************!*\
  !*** ./src/tabPreset.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<style>\\n  .navPage:not(.visible) {\\n    display: none;\\n  }\\n\\n  .navWrapper {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: center;\\n  }\\n  \\n  .navButton {\\n    margin: 5px 10px;\\n    padding: 10px;\\n    background: #2976f2;\\n  }\\n\\n  [data-to-page] {\\n    cursor: pointer;\\n  }\\n</style>\\n\\n<nav class=\\\"navWrapper\\\">\\n  <div class=\\\"navButton\\\" data-to-page=\\\"home\\\">Home</div>\\n  <div class=\\\"navButton\\\" data-to-page=\\\"test\\\">Test</div>\\n</nav>\\n\\n<hr>\\n\\n<div class=\\\"navPage visible\\\" data-page=\\\"home\\\">\\n  Home\\n  <a data-to-page=\\\"test\\\">Go to test page</a>\\n</div>\\n\\n<div class=\\\"navPage\\\" data-page=\\\"test\\\">\\n  Test\\n</div>\\n\\n<script>\\n  function showPage(pageName) {\\n    var oldPages = Array.from(document.querySelectorAll('div.navPage.visible'))\\n    oldPages.forEach(function (page) { page.classList.remove('visible') })\\n\\n    var page = document.querySelector('[data-page=\\\"' + pageName + `\\\"]`)\\n    if (!page) return\\n\\n    page.classList.add('visible')\\n  }\\n\\n  document.addEventListener('click', function (event) {\\n    if (!event.target) return;\\n    if (event.target.getAttribute('data-to-page')) {\\n      showPage(event.target.getAttribute('data-to-page'))\\n    }\\n  })\\n</script>\"\n\n//# sourceURL=webpack:///./src/tabPreset.html?");

/***/ }),

/***/ "./src/variablesPreset.html":
/*!**********************************!*\
  !*** ./src/variablesPreset.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<script type=\\\"variables\\\">\\n$motd = Specified up here <b>for convenience</b>\\n$forum_thread = https://forums.theblockheads.net/t/ancient-server-rabbithole/4529/195\\n$bhfans_id = 85\\n$debug = false\\n</script>\\n\\n<p>$motd</p>\\n\\n<p>$bhfans_server by $bhfans_owner has $bhfans_votes votes!</p>\\n\\n<h1>$forum_title</h1>\\n\\n$forum_post\\n\\n<style>\\n  .meta {\\n    display: none;\\n  }\\n\\n  img.emoji {\\n    width: 20px;\\n    height: 20px;\\n    vertical-align: middle;\\n  }\\n</style>\\n\\n<script src=\\\"https://gitcdn.xyz/cdn/Bibliofile/Welcome-Message-Variables/master/dist/bundle.js\\\"></script>\\n\"\n\n//# sourceURL=webpack:///./src/variablesPreset.html?");

/***/ })

/******/ });