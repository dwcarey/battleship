/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*



*/

body {
  display: flex;
  justify-content: center;
}

#contentContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80vw;
  background-color: aqua;
  border: 3px solid red;
  justify-items: center;
}

#titleContainer {
  height: 15vh;
  grid-column: span 2;
  font-size: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.gameboardContainer > div {
  border: 1px solid rgb(19, 19, 19);
}

.gameboardContainer {
  grid-column: span 1;
  display: flex;
  justify-content: center;

}

.rowHolder {
  display: flex;
}
#informationContainer {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 35vw 5vw 35vw;
  text-align: center;
  font-size: 2vw;
  width: 75vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
}

#playerTwoGameboardContainer > div > div > div.square:hover {
  background-color: rgb(238, 174, 0);
}

.square {
  background-color: rgb(12, 166, 255);
  border: 1px solid rgb(19, 19, 19);
  width: 3vw;
  height: 3vw;
}

#playerTwoGameboardContainer > div > div > div.square.hitShipSquare {
  background-color: rgb(173, 0, 0);
}

#playerTwoGameboardContainer > div > div > div.square.missedSquare {
  background-color: rgb(0, 255, 85);
}

.shipSquare {
  background-color: rgb(24, 24, 24);
}

.hitShipSquare {
  background-color: rgb(173, 0, 0);
}

.missedSquare {
  background-color: rgb(0, 255, 85);
}

.overlay {
  background-color: rgb(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 8;
}

.formContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9;
  transform: translate(-50%, -50%);
  padding: 5vw;
  background-color: blueviolet;
  border: 3px solid rgb(9, 7, 12);
  width: 60vw;
  height: 60vh;

display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 0.5fr 1fr 1fr 2fr;

justify-items: center;
align-items: center;
}

.shipDisplay {
  background-color: black;
  grid-column: span 2;
  grid-row-start: 2;
}
.ship-5.horizontal {
  height: 3vw;
  width: 15vw;
}

.ship-5.vertical {
  height: 15vw;
  width: 3vw;
}

.ship-4.horizontal {
  height: 3vw;
  width: 12vw;
}

.ship-4.vertical {
  height: 12vw;
  width: 3vw;
}

.ship-3.horizontal {
  height: 3vw;
  width: 9vw;
}

.ship-3.vertical {
  height: 9vw;
  width: 3vw;
}

.ship-2.horizontal {
  height: 3vw;
  width: 6vw;
}

.ship-2.vertical {
  height: 6vw;
  width: 3vw;
}

.verticalButton {
  border-radius: 3vw;
  height: 5vh;
  width: 20vw;

  grid-column: span 2;
  grid-row-start:3;
}

.formBoardHolder {
  grid-column: span 2;
  grid-row-start: 4;
}

.shipText {
  grid-row-start: 1;
  grid-column: span 2;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;;;;CAIC;;AAED;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wEAAwE;AAC1E;AACA;EACE,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,uBAAuB;;AAEzB;;AAEA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;EACnC,iCAAiC;EACjC,UAAU;EACV,WAAW;AACb;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,YAAY;EACZ,4BAA4B;EAC5B,+BAA+B;EAC/B,WAAW;EACX,YAAY;;AAEd,aAAa;AACb,8BAA8B;AAC9B,qCAAqC;;AAErC,qBAAqB;AACrB,mBAAmB;AACnB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;;EAEX,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB","sourcesContent":["html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/*\r\n\r\n\r\n\r\n*/\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n#contentContainer {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: 80vw;\r\n  background-color: aqua;\r\n  border: 3px solid red;\r\n  justify-items: center;\r\n}\r\n\r\n#titleContainer {\r\n  height: 15vh;\r\n  grid-column: span 2;\r\n  font-size: 5vw;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.gameboardContainer > div {\r\n  border: 1px solid rgb(19, 19, 19);\r\n}\r\n\r\n.gameboardContainer {\r\n  grid-column: span 1;\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n.rowHolder {\r\n  display: flex;\r\n}\r\n#informationContainer {\r\n  grid-column: span 2;\r\n  display: grid;\r\n  grid-template-columns: 35vw 5vw 35vw;\r\n  text-align: center;\r\n  font-size: 2vw;\r\n  width: 75vw;\r\n  padding-top: 2vh;\r\n  padding-bottom: 2vh;\r\n}\r\n\r\n#playerTwoGameboardContainer > div > div > div.square:hover {\r\n  background-color: rgb(238, 174, 0);\r\n}\r\n\r\n.square {\r\n  background-color: rgb(12, 166, 255);\r\n  border: 1px solid rgb(19, 19, 19);\r\n  width: 3vw;\r\n  height: 3vw;\r\n}\r\n\r\n#playerTwoGameboardContainer > div > div > div.square.hitShipSquare {\r\n  background-color: rgb(173, 0, 0);\r\n}\r\n\r\n#playerTwoGameboardContainer > div > div > div.square.missedSquare {\r\n  background-color: rgb(0, 255, 85);\r\n}\r\n\r\n.shipSquare {\r\n  background-color: rgb(24, 24, 24);\r\n}\r\n\r\n.hitShipSquare {\r\n  background-color: rgb(173, 0, 0);\r\n}\r\n\r\n.missedSquare {\r\n  background-color: rgb(0, 255, 85);\r\n}\r\n\r\n.overlay {\r\n  background-color: rgb(0, 0, 0, 0.2);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  z-index: 8;\r\n}\r\n\r\n.formContainer {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 9;\r\n  transform: translate(-50%, -50%);\r\n  padding: 5vw;\r\n  background-color: blueviolet;\r\n  border: 3px solid rgb(9, 7, 12);\r\n  width: 60vw;\r\n  height: 60vh;\r\n\r\ndisplay: grid;\r\ngrid-template-columns: 1fr 1fr;\r\ngrid-template-rows: 0.5fr 1fr 1fr 2fr;\r\n\r\njustify-items: center;\r\nalign-items: center;\r\n}\r\n\r\n.shipDisplay {\r\n  background-color: black;\r\n  grid-column: span 2;\r\n  grid-row-start: 2;\r\n}\r\n.ship-5.horizontal {\r\n  height: 3vw;\r\n  width: 15vw;\r\n}\r\n\r\n.ship-5.vertical {\r\n  height: 15vw;\r\n  width: 3vw;\r\n}\r\n\r\n.ship-4.horizontal {\r\n  height: 3vw;\r\n  width: 12vw;\r\n}\r\n\r\n.ship-4.vertical {\r\n  height: 12vw;\r\n  width: 3vw;\r\n}\r\n\r\n.ship-3.horizontal {\r\n  height: 3vw;\r\n  width: 9vw;\r\n}\r\n\r\n.ship-3.vertical {\r\n  height: 9vw;\r\n  width: 3vw;\r\n}\r\n\r\n.ship-2.horizontal {\r\n  height: 3vw;\r\n  width: 6vw;\r\n}\r\n\r\n.ship-2.vertical {\r\n  height: 6vw;\r\n  width: 3vw;\r\n}\r\n\r\n.verticalButton {\r\n  border-radius: 3vw;\r\n  height: 5vh;\r\n  width: 20vw;\r\n\r\n  grid-column: span 2;\r\n  grid-row-start:3;\r\n}\r\n\r\n.formBoardHolder {\r\n  grid-column: span 2;\r\n  grid-row-start: 4;\r\n}\r\n\r\n.shipText {\r\n  grid-row-start: 1;\r\n  grid-column: span 2;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMfunctions.js":
/*!*****************************!*\
  !*** ./src/DOMfunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawHits: () => (/* binding */ drawHits),
/* harmony export */   drawShips: () => (/* binding */ drawShips),
/* harmony export */   firstDOM: () => (/* binding */ firstDOM),
/* harmony export */   gameboardDOM: () => (/* binding */ gameboardDOM),
/* harmony export */   getComputerName: () => (/* binding */ getComputerName),
/* harmony export */   playerMovesForm: () => (/* binding */ playerMovesForm),
/* harmony export */   playerNameForm: () => (/* binding */ playerNameForm)
/* harmony export */ });
const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");
const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

function firstDOM() {
  const contentContainer = document.createElement('div');
  contentContainer.id = 'contentContainer';
  const titleContainer = document.createElement('div');
  titleContainer.id = 'titleContainer';

  const titleText = document.createElement('h1');
  titleText.textContent = 'BATTLESHIP';
  titleContainer.appendChild(titleText);
  const playerOneGameboardContainer = document.createElement('div');
  playerOneGameboardContainer.id = 'playerOneGameboardContainer';
  playerOneGameboardContainer.classList.add('gameboardContainer');
  const playerTwoGameboardContainer = document.createElement('div');
  playerTwoGameboardContainer.id = 'playerTwoGameboardContainer';
  playerTwoGameboardContainer.classList.add('gameboardContainer');
  const informationContainer = document.createElement('div');
  informationContainer.id = 'informationContainer';

  contentContainer.appendChild(titleContainer);
  contentContainer.appendChild(playerOneGameboardContainer);
  contentContainer.appendChild(playerTwoGameboardContainer);
  contentContainer.appendChild(informationContainer);

  document.body.appendChild(contentContainer);
}

function gameboardDOM(playerOne, playerTwo) {
  const playerOneNameText = document.createElement('h2');
  playerOneNameText.textContent = playerOne.playerName;
  const playerTwoNameText = document.createElement('h2');
  playerTwoNameText.textContent = playerTwo.playerName;

  const informationContainer = document.getElementById('informationContainer');
  const VStext = document.createElement('h2');
  VStext.textContent = 'VS.';
  informationContainer.appendChild(playerOneNameText);
  informationContainer.appendChild(VStext);
  informationContainer.appendChild(playerTwoNameText);

  const playerOneBoardContainer = document.createElement('div');
  const playerTwoBoardContainer = document.createElement('div');

  for (let i = 0; i < playerOne.board.board.length; i += 1) {
    const rowHolder = document.createElement('div');
    rowHolder.id = `rowHolder-${i}`;
    rowHolder.classList.add('rowHolder');

    for (let j = 0; j < playerOne.board.board[i].length; j += 1) {
      const square = document.createElement('div');
      square.id = `square-${i}-${j}`;
      square.classList.add('square');
      rowHolder.appendChild(square);
    }

    playerOneBoardContainer.appendChild(rowHolder);
  }

  const mainPlayerOneContainer = document.getElementById('playerOneGameboardContainer');
  mainPlayerOneContainer.appendChild(playerOneBoardContainer);

  for (let i = 0; i < playerTwo.board.board.length; i += 1) {
    const rowHolder = document.createElement('div');
    rowHolder.id = `rowHolder-${i}`;
    rowHolder.classList.add('rowHolder');

    for (let j = 0; j < playerTwo.board.board[i].length; j += 1) {
      const square = document.createElement('div');
      square.id = `2square-${i}-${j}`;
      square.classList.add('square');
      rowHolder.appendChild(square);
    }

    playerTwoBoardContainer.appendChild(rowHolder);
  }

  const mainPlayerTwoContainer = document.getElementById('playerTwoGameboardContainer');
  mainPlayerTwoContainer.appendChild(playerTwoBoardContainer);
}

function drawShips(playerOne) {
  for (let i = 0; i < playerOne.board.board.length; i += 1) {
    for (let j = 0; j < playerOne.board.board[i].length; j += 1) {
      const currentSquare = playerOne.board.board[i][j];
      const currentSquareDOM = document.getElementById(`square-${i}-${j}`);
      if (currentSquare instanceof Ship) {
        currentSquareDOM.classList.add('shipSquare');
      }
    }
  }
}

function drawHits(playerOne, playerTwo) {
  for (let i = 0; i < playerOne.board.board.length; i += 1) {
    for (let j = 0; j < playerOne.board.board[i].length; j += 1) {
      const currentSquarePlayerOne = playerOne.board.board[i][j];
      const currentSquarePlayerTwo = playerTwo.board.board[i][j];
      const currentSquarePlayerOneDOM = document.getElementById(`square-${i}-${j}`);
      const currentSquarePlayerTwoDOM = document.getElementById(`2square-${i}-${j}`);

      // Player One
      if (playerOne.board.shotsReceived.some((coords) => coords[0] === i && coords[1] === j)) {
        if (currentSquarePlayerOne instanceof Ship) {
          currentSquarePlayerOneDOM.classList.add('hitShipSquare');
        } else {
          currentSquarePlayerOneDOM.classList.add('missedSquare');
        }
      }

      // Player Two
      if (playerTwo.board.shotsReceived.some((coords) => coords[0] === i && coords[1] === j)) {
        if (currentSquarePlayerTwo instanceof Ship) {
          currentSquarePlayerTwoDOM.classList.add('hitShipSquare');
        } else {
          currentSquarePlayerTwoDOM.classList.add('missedSquare');
        }
      }
    }
  }
}
function playerNameForm() {
  return new Promise((resolve, reject) => {
    // Create the form container
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');

    // Create the backing overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Create the form element
    const form = document.createElement('form');

    // Create the text input for the player name
    const playerNameInput = document.createElement('input');
    playerNameInput.type = 'text';
    playerNameInput.name = 'playerName';
    playerNameInput.placeholder = 'Enter your name';
    playerNameInput.maxLength = 30;
    form.appendChild(playerNameInput);

    // Create the submit button
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);

    // Add the form to the form container
    formContainer.appendChild(form);

    // Add the form container and overlay to the document body
    document.body.appendChild(formContainer);
    document.body.appendChild(overlay);

    // Handle form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission

      const playerName = playerNameInput.value;

      // Remove the form and overlay from the document
      formContainer.remove();
      overlay.remove();

      resolve(playerName);
    });
  });
}

function getComputerName() {
  let computerName;

  switch (Math.floor(Math.random() * 10)) {
    case 0:
      computerName = 'Computerina';
      break;
    case 1:
      computerName = 'Moustopher';
      break;
    case 2:
      computerName = 'Deskelle';
      break;
    case 3:
      computerName = 'Monitorette';
      break;
    case 4:
      computerName = 'Keyboardantha';
      break;
    case 5:
      computerName = 'Codella';
      break;
    case 6:
      computerName = 'Netalie';
      break;
    case 7:
      computerName = 'Browsedith';
      break;
    case 8:
      computerName = 'Datathony';
      break;
    case 9:
      computerName = 'Aaram';
      break;
    default:
      computerName = 'Unknown';
  }

  return computerName;
}


    // Declare and initialise the isVertical variable
    let isVertical = false;
    
// Create the ship display element
const shipDisplay = document.createElement('div');
shipDisplay.classList.add('shipDisplay');

// Helper function to update the ship display class
function updateShipDisplay(shipSize) {
  shipDisplay.className = `shipDisplay ship-${shipSize} ${isVertical ? 'vertical' : 'horizontal'}`;
}

const shipText = document.createElement('p');
shipText.classList.add('shipText');

function updateShipText(shipName, shipLength) {
  shipText.textContent = `Place your ${shipName}, ${shipLength} length`;
}

// Create the playerMovesForm function
function playerMovesForm(gameboard) {
  return new Promise((resolve, reject) => {
    // Create the form container
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');

    // Create the backing overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Create the form element
    const form = document.createElement('form');

    // Add the form to the form container
    formContainer.appendChild(form);

    // Add the form container and overlay to the document body
    document.body.appendChild(formContainer);
    document.body.appendChild(overlay);

    // Generate DOM elements for gameboard
    const playerOneBoardContainer = document.createElement('div');
    playerOneBoardContainer.classList.add('formBoardHolder');


    // Helper function to create square elements
    function createSquare(row, column) {
      const square = document.createElement('div');
      square.id = `square-${row}-${column}`;
      square.classList.add('square');

      // Add event listener for ship placement
      square.addEventListener('click', () => {
        const shipSize = gameboard.shipsOnBoard.length < 5 ? [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length] : null;
        const coordinates = [row, column];
        
        if (shipSize && gameboard.isValidMove(shipSize, isVertical, coordinates)) {
          gameboard.addShipToGameboard(shipSize, isVertical, coordinates);

          // Update the ship display to NEXT placed ship
          updateShipDisplay([5, 4, 3, 3, 2][gameboard.shipsOnBoard.length]);

              //update ship text
              updateShipText(['Carrier', 'Battleship', 'Submarine',
              'Cruiser', 'Destroyer'][gameboard.shipsOnBoard.length],
              [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length]);

          // Check if all ships have been placed
          if (gameboard.shipsOnBoard.length === 5) {
            // Clean up UI
            formContainer.remove();
            overlay.remove();

            // Resolve the promise with the updated gameboard
            resolve(gameboard);
          }
        }
      });

      return square;
    }

    for (let i = 0; i < gameboard.board.length; i += 1) {
      const rowHolder = document.createElement('div');
      rowHolder.id = `rowHolder-${i}`;
      rowHolder.classList.add('rowHolder');

      for (let j = 0; j < gameboard.board[i].length; j += 1) {
        const square = createSquare(i, j);
        rowHolder.appendChild(square);
      }

      playerOneBoardContainer.appendChild(rowHolder);
    }

    // Create the "Is Vertical?" button
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Is Vertical?';
    toggleButton.classList.add('verticalButton');

    toggleButton.addEventListener('click', () => {
      isVertical = !isVertical; // Toggle the boolean value
      updateShipDisplay([5, 4, 3, 3, 2][gameboard.shipsOnBoard.length]);
    });

    // Append the ship display to the form container
    formContainer.appendChild(shipDisplay);
    updateShipDisplay(5);
              //update ship text
              updateShipText(['Carrier', 'Battleship', 'Submarine',
              'Cruiser', 'Destroyer'][gameboard.shipsOnBoard.length],
              [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length]);

    // Append the toggle button to the form container
    formContainer.appendChild(toggleButton);
    formContainer.appendChild(shipText);

    // Append the playerOneBoardContainer to the form container
    formContainer.appendChild(playerOneBoardContainer);
  });
}









/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

class Gameboard {
  constructor() {
    this.board = this.createGameboard();
    this.shipsOnBoard = [];
    this.shotsReceived = [];
  }

  // returns an EMPTY 10x10 array, 0, 0 is top left
  createGameboard() {
    const board = new Array(10);
    for (let i = 0; i < 10; i += 1) {
      board[i] = new Array(10);
    }
    return board;
  }

  isValidMove(length, isVertical, startIndex) {
    const positionArray = [];

    // ship is inside the gameboard
    if (isVertical === true) {
      if ((length + startIndex[0]) > 10) {
        return false;
      }

      for (let i = 0; i < length; i += 1) {
        positionArray.push([
          startIndex[0] + i,
          startIndex[1],
        ]);
      }
    }

    if (isVertical === false) {
      if ((length + startIndex[1]) > 10) {
        return false;
      }

      for (let i = 0; i < length; i += 1) {
        positionArray.push([
          startIndex[0],
          startIndex[1] + i,
        ]);
      }
    }

    // ship is not directly next to another ship
    const affectedSquaresArray = [];

    for (let i = 0; i < positionArray.length; i += 1) {
      // for each add the surrounding squares and self
      // to affected squares array
      // then check this.board for Ship objects in those positions

      affectedSquaresArray.push([
        positionArray[i][0] - 1,
        positionArray[i][1] - 1,
      ]);

      affectedSquaresArray.push([
        positionArray[i][0] - 1,
        positionArray[i][1],
      ]);

      affectedSquaresArray.push([
        positionArray[i][0] - 1,
        positionArray[i][1] + 1,
      ]);

      affectedSquaresArray.push([
        positionArray[i][0],
        positionArray[i][1] - 1,
      ]);

      affectedSquaresArray.push([
        positionArray[i][0],
        positionArray[i][1],
      ]);

      affectedSquaresArray.push([
        positionArray[i][0],
        positionArray[i][1] + 1,
      ]);

      affectedSquaresArray.push([
        positionArray[i][0] + 1,
        positionArray[i][1] - 1,
      ]);

      affectedSquaresArray.push([
        positionArray[i][0] + 1,
        positionArray[i][1],
      ]);

      affectedSquaresArray.push([
        positionArray[i][0] + 1,
        positionArray[i][1] + 1,
      ]);
    }

    for (let j = 0; j < affectedSquaresArray.length; j += 1) {
      const x = affectedSquaresArray[j][0];
      const y = affectedSquaresArray[j][1];

      if (x >= 0 && x <= 9 && y >= 0 && y <= 9) {
        if (this.board[x][y] instanceof Ship) {
          return false;
        }
      }
    }

    return true;
  }

  addShipToGameboard(length, isVertical, startIndex) {
    if (this.isValidMove(length, isVertical, startIndex)) {
      const newShip = new Ship(length);
      this.shipsOnBoard.push(newShip);

      const indexZero = startIndex[0];
      const indexOne = startIndex[1];

      if (isVertical === true) {
        for (let i = indexZero; i < length + indexZero; i += 1) {
          this.board[i][indexOne] = newShip;
        }
      } else {
        for (let i = indexOne; i < (length + indexOne); i += 1) {
          this.board[indexZero][i] = newShip;
        }
      }
    } return 'invalid move';
  }

  receiveHit(hitLocation) {
    const x = hitLocation[0];
    const y = hitLocation[1];

    // find invalid shot (not on gameboard)
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return 'invalid shot';
    }
    // find invalid shot (duiplicate shot)
    for (let i = 0; i < this.shotsReceived.length; i += 1) {
      if (x === this.shotsReceived[i][0] && y === this.shotsReceived[i][1]) {
        return 'invalid shot';
      }
    }
    // push shot to shots received array
    this.shotsReceived.push(hitLocation);

    if (this.board[x][y] instanceof Ship) {
      this.board[x][y].hit();
      if (this.board[x][y].isSunk()) {
        return 'sunk ship';
      }
      return 'hit ship';
    }

    return 'shot missed';
  }

  allShipsSunk() {
    let sunkShips = 0;
    const allShips = this.shipsOnBoard.length;

    for (let i = 0; i < allShips; i += 1) {
      const currentShip = this.shipsOnBoard[i];

      if (currentShip.isSunk()) {
        sunkShips += 1;
      }
    }

    return sunkShips === allShips;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  generateComputerPositions(board) {
    //add two 3 length ships
    while (board.shipsOnBoard.length < 2) {
      let resultVertical = true;
    const decideVertical = this.getRandomInt(2);

    if (decideVertical === 0) {
      resultVertical = false;
    }

    const firstCoord = this.getRandomInt(10);
    const secondCoord = this.getRandomInt(10);

    board.addShipToGameboard(3, resultVertical, [firstCoord, secondCoord]);
    }
    //add another ship of 2 length
    while (board.shipsOnBoard.length < 3) {
      let resultVertical = true;
    const decideVertical = this.getRandomInt(2);

    if (decideVertical === 0) {
      resultVertical = false;
    }

    const firstCoord = this.getRandomInt(10);
    const secondCoord = this.getRandomInt(10);

    board.addShipToGameboard(2, resultVertical, [firstCoord, secondCoord]);
    }
    //add another ship of 4 length
    while (board.shipsOnBoard.length < 4) {
      let resultVertical = true;
    const decideVertical = this.getRandomInt(2);

    if (decideVertical === 0) {
      resultVertical = false;
    }

    const firstCoord = this.getRandomInt(10);
    const secondCoord = this.getRandomInt(10);

    board.addShipToGameboard(4, resultVertical, [firstCoord, secondCoord]);
    }
    //add the last ship of 5 length
    while (board.shipsOnBoard.length < 5) {
      let resultVertical = true;
    const decideVertical = this.getRandomInt(2);

    if (decideVertical === 0) {
      resultVertical = false;
    }

    const firstCoord = this.getRandomInt(10);
    const secondCoord = this.getRandomInt(10);

    board.addShipToGameboard(5, resultVertical, [firstCoord, secondCoord]);
    }
  }
}

module.exports = Gameboard;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ../src/gameboard */ "./src/gameboard.js");

class Player {
  constructor(playerName, board, isComputerPlayer) {
    this.playerName = playerName;
    this.board = board;
    this.isComputerPlayer = isComputerPlayer;
  }

  getTurnCoordinates(opponent) {
    if (this.isComputerPlayer) {
      const { shotsReceived } = opponent.board;
      const availableCoordinates = [];

      for (let a = 0; a < 10; a += 1) {
        for (let b = 0; b < 10; b += 1) {
          const coordinate = [a, b];
          if (!shotsReceived.some(([x, y]) => x === a && y === b)) {
            availableCoordinates.push(coordinate);
          }
        }
      }

      if (availableCoordinates.length === 0) {
        throw new Error('No available coordinates'); 
      }

      const randomIndex = Math.floor(Math.random() * availableCoordinates.length);
      const [a, b] = availableCoordinates[randomIndex];
      return Promise.resolve([a, b]); // Return a resolved promise with the random available coordinates
    }

    return new Promise((resolve) => {
      const targetGameboard = document.getElementById('playerTwoGameboardContainer');

      function handleClick(e) {
        if (e.target.classList.contains('square')) {
          const a = parseInt(e.target.id.split('-')[1], 10);
          const b = parseInt(e.target.id.split('-')[2], 10);

          const { shotsReceived } = opponent.board;
          const selectedCoordinate = [a, b];

          if (shotsReceived.some(([x, y]) => x === a && y === b)) {
          } else {
            targetGameboard.removeEventListener('click', handleClick);
            resolve(selectedCoordinate);
          }
        }
      }

      targetGameboard.addEventListener('click', handleClick);
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  generateComputerPositions(board) {
    while (board.shipsOnBoard.length < 5) {
      let resultVertical = true;
    const decideVertical = this.getRandomInt(2);

    if (decideVertical === 0) {
      resultVertical = false;
    }

    const firstCoord = this.getRandomInt(10);
    const secondCoord = this.getRandomInt(10);

    board.addShipToGameboard(2, resultVertical, [firstCoord, secondCoord]);
    }
  }
}

module.exports = Player;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    if (this.hits === this.length) {
      return true;
    }
    return false;
  }
}

module.exports = Ship;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMfunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMfunctions */ "./src/DOMfunctions.js");



const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
const Player = __webpack_require__(/*! ./player */ "./src/player.js");

let playerOne;
let playerTwo;

async function setupPlayers(playerName) {
  // Create gameboard with 5 ships FOR EACH player
  const playerOneGameboard = new Gameboard();

  const playerMoves = await (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.playerMovesForm)(playerOneGameboard);

  // playerOneGameboard.addShipToGameboard(5, false, [1, 1]);

  //screw the array just put a gameboard into the function and return the completed gameboard

  const playerTwoGameboard = new Gameboard();
  playerTwoGameboard.generateComputerPositions(playerTwoGameboard);
  console.log(playerTwoGameboard);
  const computerName = (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.getComputerName)();

  // Create player 1
  playerOne = new Player(playerName, playerMoves, false);
  // Create player 2 (computer)
  playerTwo = new Player(computerName, playerTwoGameboard, true);

  // Draw gameboards
  (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.gameboardDOM)(playerOne, playerTwo);
  (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.drawShips)(playerOne);
}

async function gameSetup() {
  // First page load, generates skeleton of website, containers, and title
  (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.firstDOM)();

  // To start the game, collect the player name
  const playerName = await (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.playerNameForm)();
  console.log('Player Name:', playerName);

  await setupPlayers(playerName);

  // Start the game loop
  gameLoop(playerOne, playerTwo);
}

// Game over function
function gameover(playerOneObject, playerTwoObject) {
  if (playerOneObject.board.allShipsSunk()) {
    return playerTwoObject;
  }
  if (playerTwoObject.board.allShipsSunk()) {
    return playerOneObject;
  }

  return null;
}

// Start game loop
async function gameLoop(playerOne, playerTwo) {
  while (gameover(playerOne, playerTwo) === null) {
    // Player One's turn
    await playerTurn(playerOne, playerTwo);

    if (gameover(playerOne, playerTwo) !== null) {
      break; // Exit the loop if the game is over
    }

    // Player Two's turn
    await playerTurn(playerTwo, playerOne);
  }

  // Game over
  if (gameover(playerOne, playerTwo) === playerOne) {
    alert('Player One Wins');
  } else if (gameover(playerOne, playerTwo) === playerTwo) {
    alert('Player Two Wins');
  }
}

async function playerTurn(currentPlayer, opponent) {
  const coords = await currentPlayer.getTurnCoordinates(opponent);
  opponent.board.receiveHit(coords);
  (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.drawHits)(playerOne, playerTwo);

  if (!currentPlayer.isComputerPlayer) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

// Call the gameSetup function to initiate the game
gameSetup();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FB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QUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUlHO0FBQ3hCO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsdUNBQWE7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOERBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQVk7QUFDZCxFQUFFLHdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFRO0FBQ1Y7QUFDQTtBQUNBLDJCQUEyQiw2REFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbmIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXHJcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXHJcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5ib2R5IHtcclxuXHRsaW5lLWhlaWdodDogMTtcclxufVxyXG5vbCwgdWwge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZSwgcSB7XHJcblx0cXVvdGVzOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSwgcTphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0Y29udGVudDogbm9uZTtcclxufVxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLypcclxuXHJcblxyXG5cclxuKi9cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICB3aWR0aDogODB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0aXRsZUNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgZm9udC1zaXplOiA1dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4uZ2FtZWJvYXJkQ29udGFpbmVyID4gZGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmRDb250YWluZXIge1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5yb3dIb2xkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuI2luZm9ybWF0aW9uQ29udGFpbmVyIHtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXZ3IDV2dyAzNXZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJ2dztcclxuICB3aWR0aDogNzV2dztcclxuICBwYWRkaW5nLXRvcDogMnZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiAydmg7XHJcbn1cclxuXHJcbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxNzQsIDApO1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDE2NiwgMjU1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XHJcbiAgd2lkdGg6IDN2dztcclxuICBoZWlnaHQ6IDN2dztcclxufVxyXG5cclxuI3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lciA+IGRpdiA+IGRpdiA+IGRpdi5zcXVhcmUuaGl0U2hpcFNxdWFyZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XHJcbn1cclxuXHJcbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlLm1pc3NlZFNxdWFyZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgODUpO1xyXG59XHJcblxyXG4uc2hpcFNxdWFyZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xyXG59XHJcblxyXG4uaGl0U2hpcFNxdWFyZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XHJcbn1cclxuXHJcbi5taXNzZWRTcXVhcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDg1KTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjIpO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA4O1xyXG59XHJcblxyXG4uZm9ybUNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB6LWluZGV4OiA5O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBhZGRpbmc6IDV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYig5LCA3LCAxMik7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgaGVpZ2h0OiA2MHZoO1xyXG5cclxuZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5ncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAxZnIgMmZyO1xyXG5cclxuanVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2hpcERpc3BsYXkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbn1cclxuLnNoaXAtNS5ob3Jpem9udGFsIHtcclxuICBoZWlnaHQ6IDN2dztcclxuICB3aWR0aDogMTV2dztcclxufVxyXG5cclxuLnNoaXAtNS52ZXJ0aWNhbCB7XHJcbiAgaGVpZ2h0OiAxNXZ3O1xyXG4gIHdpZHRoOiAzdnc7XHJcbn1cclxuXHJcbi5zaGlwLTQuaG9yaXpvbnRhbCB7XHJcbiAgaGVpZ2h0OiAzdnc7XHJcbiAgd2lkdGg6IDEydnc7XHJcbn1cclxuXHJcbi5zaGlwLTQudmVydGljYWwge1xyXG4gIGhlaWdodDogMTJ2dztcclxuICB3aWR0aDogM3Z3O1xyXG59XHJcblxyXG4uc2hpcC0zLmhvcml6b250YWwge1xyXG4gIGhlaWdodDogM3Z3O1xyXG4gIHdpZHRoOiA5dnc7XHJcbn1cclxuXHJcbi5zaGlwLTMudmVydGljYWwge1xyXG4gIGhlaWdodDogOXZ3O1xyXG4gIHdpZHRoOiAzdnc7XHJcbn1cclxuXHJcbi5zaGlwLTIuaG9yaXpvbnRhbCB7XHJcbiAgaGVpZ2h0OiAzdnc7XHJcbiAgd2lkdGg6IDZ2dztcclxufVxyXG5cclxuLnNoaXAtMi52ZXJ0aWNhbCB7XHJcbiAgaGVpZ2h0OiA2dnc7XHJcbiAgd2lkdGg6IDN2dztcclxufVxyXG5cclxuLnZlcnRpY2FsQnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAzdnc7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgd2lkdGg6IDIwdnc7XHJcblxyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6MztcclxufVxyXG5cclxuLmZvcm1Cb2FyZEhvbGRlciB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICBncmlkLXJvdy1zdGFydDogNDtcclxufVxyXG5cclxuLnNoaXBUZXh0IHtcclxuICBncmlkLXJvdy1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0VBQXdFO0FBQzFFO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsWUFBWTs7QUFFZCxhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLHFDQUFxQzs7QUFFckMscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVzs7RUFFWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnRDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlQ29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICBmb250LXNpemU6IDV2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5nYW1lYm9hcmRDb250YWluZXIgPiBkaXYge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkQ29udGFpbmVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5yb3dIb2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuI2luZm9ybWF0aW9uQ29udGFpbmVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXZ3IDV2dyAzNXZ3O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAydnc7XFxyXFxuICB3aWR0aDogNzV2dztcXHJcXG4gIHBhZGRpbmctdG9wOiAydmg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxNzQsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTY2LCAyNTUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xcclxcbiAgd2lkdGg6IDN2dztcXHJcXG4gIGhlaWdodDogM3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZS5oaXRTaGlwU3F1YXJlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZS5taXNzZWRTcXVhcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgODUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcFNxdWFyZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XFxyXFxufVxcclxcblxcclxcbi5oaXRTaGlwU3F1YXJlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2VkU3F1YXJlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDg1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMik7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogODtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1Db250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB6LWluZGV4OiA5O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBwYWRkaW5nOiA1dnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDksIDcsIDEyKTtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcblxcclxcbmRpc3BsYXk6IGdyaWQ7XFxyXFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbmdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDFmciAyZnI7XFxyXFxuXFxyXFxuanVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwRGlzcGxheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICBncmlkLXJvdy1zdGFydDogMjtcXHJcXG59XFxyXFxuLnNoaXAtNS5ob3Jpem9udGFsIHtcXHJcXG4gIGhlaWdodDogM3Z3O1xcclxcbiAgd2lkdGg6IDE1dnc7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLTUudmVydGljYWwge1xcclxcbiAgaGVpZ2h0OiAxNXZ3O1xcclxcbiAgd2lkdGg6IDN2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtNC5ob3Jpem9udGFsIHtcXHJcXG4gIGhlaWdodDogM3Z3O1xcclxcbiAgd2lkdGg6IDEydnc7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLTQudmVydGljYWwge1xcclxcbiAgaGVpZ2h0OiAxMnZ3O1xcclxcbiAgd2lkdGg6IDN2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtMy5ob3Jpem9udGFsIHtcXHJcXG4gIGhlaWdodDogM3Z3O1xcclxcbiAgd2lkdGg6IDl2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtMy52ZXJ0aWNhbCB7XFxyXFxuICBoZWlnaHQ6IDl2dztcXHJcXG4gIHdpZHRoOiAzdnc7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLTIuaG9yaXpvbnRhbCB7XFxyXFxuICBoZWlnaHQ6IDN2dztcXHJcXG4gIHdpZHRoOiA2dnc7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLTIudmVydGljYWwge1xcclxcbiAgaGVpZ2h0OiA2dnc7XFxyXFxuICB3aWR0aDogM3Z3O1xcclxcbn1cXHJcXG5cXHJcXG4udmVydGljYWxCdXR0b24ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3Z3O1xcclxcbiAgaGVpZ2h0OiA1dmg7XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG5cXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICBncmlkLXJvdy1zdGFydDozO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUJvYXJkSG9sZGVyIHtcXHJcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICBncmlkLXJvdy1zdGFydDogNDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBUZXh0IHtcXHJcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcclxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAnKTtcclxuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcclxuXHJcbmZ1bmN0aW9uIGZpcnN0RE9NKCkge1xyXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250ZW50Q29udGFpbmVyLmlkID0gJ2NvbnRlbnRDb250YWluZXInO1xyXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGl0bGVDb250YWluZXIuaWQgPSAndGl0bGVDb250YWluZXInO1xyXG5cclxuICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcclxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xyXG4gIGNvbnN0IHBsYXllck9uZUdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBsYXllck9uZUdhbWVib2FyZENvbnRhaW5lci5pZCA9ICdwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXInO1xyXG4gIHBsYXllck9uZUdhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmRDb250YWluZXInKTtcclxuICBjb25zdCBwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIuaWQgPSAncGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyJztcclxuICBwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkQ29udGFpbmVyJyk7XHJcbiAgY29uc3QgaW5mb3JtYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpbmZvcm1hdGlvbkNvbnRhaW5lci5pZCA9ICdpbmZvcm1hdGlvbkNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xyXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyKTtcclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcik7XHJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvcm1hdGlvbkNvbnRhaW5lcik7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVib2FyZERPTShwbGF5ZXJPbmUsIHBsYXllclR3bykge1xyXG4gIGNvbnN0IHBsYXllck9uZU5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwbGF5ZXJPbmVOYW1lVGV4dC50ZXh0Q29udGVudCA9IHBsYXllck9uZS5wbGF5ZXJOYW1lO1xyXG4gIGNvbnN0IHBsYXllclR3b05hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwbGF5ZXJUd29OYW1lVGV4dC50ZXh0Q29udGVudCA9IHBsYXllclR3by5wbGF5ZXJOYW1lO1xyXG5cclxuICBjb25zdCBpbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvcm1hdGlvbkNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IFZTdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgVlN0ZXh0LnRleHRDb250ZW50ID0gJ1ZTLic7XHJcbiAgaW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lTmFtZVRleHQpO1xyXG4gIGluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKFZTdGV4dCk7XHJcbiAgaW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyVHdvTmFtZVRleHQpO1xyXG5cclxuICBjb25zdCBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHBsYXllclR3b0JvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyT25lLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCByb3dIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJvd0hvbGRlci5pZCA9IGByb3dIb2xkZXItJHtpfWA7XHJcbiAgICByb3dIb2xkZXIuY2xhc3NMaXN0LmFkZCgncm93SG9sZGVyJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHNxdWFyZS5pZCA9IGBzcXVhcmUtJHtpfS0ke2p9YDtcclxuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG4gICAgICByb3dIb2xkZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3dIb2xkZXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFpblBsYXllck9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXInKTtcclxuICBtYWluUGxheWVyT25lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkQ29udGFpbmVyKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJUd28uYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IHJvd0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93SG9sZGVyLmlkID0gYHJvd0hvbGRlci0ke2l9YDtcclxuICAgIHJvd0hvbGRlci5jbGFzc0xpc3QuYWRkKCdyb3dIb2xkZXInKTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllclR3by5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgc3F1YXJlLmlkID0gYDJzcXVhcmUtJHtpfS0ke2p9YDtcclxuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG4gICAgICByb3dIb2xkZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJUd29Cb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3dIb2xkZXIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWFpblBsYXllclR3b0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXInKTtcclxuICBtYWluUGxheWVyVHdvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1NoaXBzKHBsYXllck9uZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyT25lLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllck9uZS5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlID0gcGxheWVyT25lLmJvYXJkLmJvYXJkW2ldW2pdO1xyXG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNxdWFyZS0ke2l9LSR7an1gKTtcclxuICAgICAgaWYgKGN1cnJlbnRTcXVhcmUgaW5zdGFuY2VvZiBTaGlwKSB7XHJcbiAgICAgICAgY3VycmVudFNxdWFyZURPTS5jbGFzc0xpc3QuYWRkKCdzaGlwU3F1YXJlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdIaXRzKHBsYXllck9uZSwgcGxheWVyVHdvKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyT25lLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJPbmUgPSBwbGF5ZXJPbmUuYm9hcmQuYm9hcmRbaV1bal07XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJUd28gPSBwbGF5ZXJUd28uYm9hcmQuYm9hcmRbaV1bal07XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJPbmVET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3F1YXJlLSR7aX0tJHtqfWApO1xyXG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlUGxheWVyVHdvRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYDJzcXVhcmUtJHtpfS0ke2p9YCk7XHJcblxyXG4gICAgICAvLyBQbGF5ZXIgT25lXHJcbiAgICAgIGlmIChwbGF5ZXJPbmUuYm9hcmQuc2hvdHNSZWNlaXZlZC5zb21lKChjb29yZHMpID0+IGNvb3Jkc1swXSA9PT0gaSAmJiBjb29yZHNbMV0gPT09IGopKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTcXVhcmVQbGF5ZXJPbmUgaW5zdGFuY2VvZiBTaGlwKSB7XHJcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyT25lRE9NLmNsYXNzTGlzdC5hZGQoJ2hpdFNoaXBTcXVhcmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY3VycmVudFNxdWFyZVBsYXllck9uZURPTS5jbGFzc0xpc3QuYWRkKCdtaXNzZWRTcXVhcmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBsYXllciBUd29cclxuICAgICAgaWYgKHBsYXllclR3by5ib2FyZC5zaG90c1JlY2VpdmVkLnNvbWUoKGNvb3JkcykgPT4gY29vcmRzWzBdID09PSBpICYmIGNvb3Jkc1sxXSA9PT0gaikpIHtcclxuICAgICAgICBpZiAoY3VycmVudFNxdWFyZVBsYXllclR3byBpbnN0YW5jZW9mIFNoaXApIHtcclxuICAgICAgICAgIGN1cnJlbnRTcXVhcmVQbGF5ZXJUd29ET00uY2xhc3NMaXN0LmFkZCgnaGl0U2hpcFNxdWFyZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyVHdvRE9NLmNsYXNzTGlzdC5hZGQoJ21pc3NlZFNxdWFyZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBwbGF5ZXJOYW1lRm9ybSgpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBmb3JtIGNvbnRhaW5lclxyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJyk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBiYWNraW5nIG92ZXJsYXlcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgZm9ybSBlbGVtZW50XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgdGV4dCBpbnB1dCBmb3IgdGhlIHBsYXllciBuYW1lXHJcbiAgICBjb25zdCBwbGF5ZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgcGxheWVyTmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBwbGF5ZXJOYW1lSW5wdXQubmFtZSA9ICdwbGF5ZXJOYW1lJztcclxuICAgIHBsYXllck5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIG5hbWUnO1xyXG4gICAgcGxheWVyTmFtZUlucHV0Lm1heExlbmd0aCA9IDMwO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lSW5wdXQpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgc3VibWl0IGJ1dHRvblxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSAnU3VibWl0JztcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgICAvLyBBZGQgdGhlIGZvcm0gdG8gdGhlIGZvcm0gY29udGFpbmVyXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgIC8vIEFkZCB0aGUgZm9ybSBjb250YWluZXIgYW5kIG92ZXJsYXkgdG8gdGhlIGRvY3VtZW50IGJvZHlcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG5cclxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uXHJcblxyXG4gICAgICBjb25zdCBwbGF5ZXJOYW1lID0gcGxheWVyTmFtZUlucHV0LnZhbHVlO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtIGFuZCBvdmVybGF5IGZyb20gdGhlIGRvY3VtZW50XHJcbiAgICAgIGZvcm1Db250YWluZXIucmVtb3ZlKCk7XHJcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcblxyXG4gICAgICByZXNvbHZlKHBsYXllck5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXB1dGVyTmFtZSgpIHtcclxuICBsZXQgY29tcHV0ZXJOYW1lO1xyXG5cclxuICBzd2l0Y2ggKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkge1xyXG4gICAgY2FzZSAwOlxyXG4gICAgICBjb21wdXRlck5hbWUgPSAnQ29tcHV0ZXJpbmEnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTpcclxuICAgICAgY29tcHV0ZXJOYW1lID0gJ01vdXN0b3BoZXInO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjpcclxuICAgICAgY29tcHV0ZXJOYW1lID0gJ0Rlc2tlbGxlJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdNb25pdG9yZXR0ZSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA0OlxyXG4gICAgICBjb21wdXRlck5hbWUgPSAnS2V5Ym9hcmRhbnRoYSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA1OlxyXG4gICAgICBjb21wdXRlck5hbWUgPSAnQ29kZWxsYSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA2OlxyXG4gICAgICBjb21wdXRlck5hbWUgPSAnTmV0YWxpZSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA3OlxyXG4gICAgICBjb21wdXRlck5hbWUgPSAnQnJvd3NlZGl0aCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA4OlxyXG4gICAgICBjb21wdXRlck5hbWUgPSAnRGF0YXRob255JztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDk6XHJcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdBYXJhbSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgY29tcHV0ZXJOYW1lID0gJ1Vua25vd24nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXB1dGVyTmFtZTtcclxufVxyXG5cclxuXHJcbiAgICAvLyBEZWNsYXJlIGFuZCBpbml0aWFsaXNlIHRoZSBpc1ZlcnRpY2FsIHZhcmlhYmxlXHJcbiAgICBsZXQgaXNWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgXHJcbi8vIENyZWF0ZSB0aGUgc2hpcCBkaXNwbGF5IGVsZW1lbnRcclxuY29uc3Qgc2hpcERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc2hpcERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnc2hpcERpc3BsYXknKTtcclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHNoaXAgZGlzcGxheSBjbGFzc1xyXG5mdW5jdGlvbiB1cGRhdGVTaGlwRGlzcGxheShzaGlwU2l6ZSkge1xyXG4gIHNoaXBEaXNwbGF5LmNsYXNzTmFtZSA9IGBzaGlwRGlzcGxheSBzaGlwLSR7c2hpcFNpemV9ICR7aXNWZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCd9YDtcclxufVxyXG5cclxuY29uc3Qgc2hpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnNoaXBUZXh0LmNsYXNzTGlzdC5hZGQoJ3NoaXBUZXh0Jyk7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTaGlwVGV4dChzaGlwTmFtZSwgc2hpcExlbmd0aCkge1xyXG4gIHNoaXBUZXh0LnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtzaGlwTmFtZX0sICR7c2hpcExlbmd0aH0gbGVuZ3RoYDtcclxufVxyXG5cclxuLy8gQ3JlYXRlIHRoZSBwbGF5ZXJNb3Zlc0Zvcm0gZnVuY3Rpb25cclxuZnVuY3Rpb24gcGxheWVyTW92ZXNGb3JtKGdhbWVib2FyZCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gY29udGFpbmVyXHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXInKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIGJhY2tpbmcgb3ZlcmxheVxyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBmb3JtIGVsZW1lbnRcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBmb3JtIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICAvLyBBZGQgdGhlIGZvcm0gY29udGFpbmVyIGFuZCBvdmVybGF5IHRvIHRoZSBkb2N1bWVudCBib2R5XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBET00gZWxlbWVudHMgZm9yIGdhbWVib2FyZFxyXG4gICAgY29uc3QgcGxheWVyT25lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYXllck9uZUJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Cb2FyZEhvbGRlcicpO1xyXG5cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHNxdWFyZSBlbGVtZW50c1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3F1YXJlKHJvdywgY29sdW1uKSB7XHJcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBzcXVhcmUuaWQgPSBgc3F1YXJlLSR7cm93fS0ke2NvbHVtbn1gO1xyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcblxyXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHNoaXAgcGxhY2VtZW50XHJcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IGdhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNSA/IFs1LCA0LCAzLCAzLCAyXVtnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aF0gOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3JvdywgY29sdW1uXTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoc2hpcFNpemUgJiYgZ2FtZWJvYXJkLmlzVmFsaWRNb3ZlKHNoaXBTaXplLCBpc1ZlcnRpY2FsLCBjb29yZGluYXRlcykpIHtcclxuICAgICAgICAgIGdhbWVib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoc2hpcFNpemUsIGlzVmVydGljYWwsIGNvb3JkaW5hdGVzKTtcclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNoaXAgZGlzcGxheSB0byBORVhUIHBsYWNlZCBzaGlwXHJcbiAgICAgICAgICB1cGRhdGVTaGlwRGlzcGxheShbNSwgNCwgMywgMywgMl1bZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGhdKTtcclxuXHJcbiAgICAgICAgICAgICAgLy91cGRhdGUgc2hpcCB0ZXh0XHJcbiAgICAgICAgICAgICAgdXBkYXRlU2hpcFRleHQoWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnU3VibWFyaW5lJyxcclxuICAgICAgICAgICAgICAnQ3J1aXNlcicsICdEZXN0cm95ZXInXVtnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aF0sXHJcbiAgICAgICAgICAgICAgWzUsIDQsIDMsIDMsIDJdW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSk7XHJcblxyXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcclxuICAgICAgICAgIGlmIChnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA9PT0gNSkge1xyXG4gICAgICAgICAgICAvLyBDbGVhbiB1cCBVSVxyXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSB3aXRoIHRoZSB1cGRhdGVkIGdhbWVib2FyZFxyXG4gICAgICAgICAgICByZXNvbHZlKGdhbWVib2FyZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBzcXVhcmU7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgY29uc3Qgcm93SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHJvd0hvbGRlci5pZCA9IGByb3dIb2xkZXItJHtpfWA7XHJcbiAgICAgIHJvd0hvbGRlci5jbGFzc0xpc3QuYWRkKCdyb3dIb2xkZXInKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZWJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlU3F1YXJlKGksIGopO1xyXG4gICAgICAgIHJvd0hvbGRlci5hcHBlbmRDaGlsZChzcXVhcmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3dIb2xkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgXCJJcyBWZXJ0aWNhbD9cIiBidXR0b25cclxuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gJ0lzIFZlcnRpY2FsPyc7XHJcbiAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndmVydGljYWxCdXR0b24nKTtcclxuXHJcbiAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlzVmVydGljYWwgPSAhaXNWZXJ0aWNhbDsgLy8gVG9nZ2xlIHRoZSBib29sZWFuIHZhbHVlXHJcbiAgICAgIHVwZGF0ZVNoaXBEaXNwbGF5KFs1LCA0LCAzLCAzLCAyXVtnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aF0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXBwZW5kIHRoZSBzaGlwIGRpc3BsYXkgdG8gdGhlIGZvcm0gY29udGFpbmVyXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBEaXNwbGF5KTtcclxuICAgIHVwZGF0ZVNoaXBEaXNwbGF5KDUpO1xyXG4gICAgICAgICAgICAgIC8vdXBkYXRlIHNoaXAgdGV4dFxyXG4gICAgICAgICAgICAgIHVwZGF0ZVNoaXBUZXh0KFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ1N1Ym1hcmluZScsXHJcbiAgICAgICAgICAgICAgJ0NydWlzZXInLCAnRGVzdHJveWVyJ11bZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGhdLFxyXG4gICAgICAgICAgICAgIFs1LCA0LCAzLCAzLCAyXVtnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aF0pO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgdG9nZ2xlIGJ1dHRvbiB0byB0aGUgZm9ybSBjb250YWluZXJcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlQnV0dG9uKTtcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcFRleHQpO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgcGxheWVyT25lQm9hcmRDb250YWluZXIgdG8gdGhlIGZvcm0gY29udGFpbmVyXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkQ29udGFpbmVyKTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge1xyXG4gIGZpcnN0RE9NLCBnYW1lYm9hcmRET00sIGRyYXdTaGlwcywgZHJhd0hpdHMsXHJcbiAgcGxheWVyTmFtZUZvcm0sIGdldENvbXB1dGVyTmFtZSwgcGxheWVyTW92ZXNGb3JtLFxyXG59O1xyXG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJyk7XHJcblxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlR2FtZWJvYXJkKCk7XHJcbiAgICB0aGlzLnNoaXBzT25Cb2FyZCA9IFtdO1xyXG4gICAgdGhpcy5zaG90c1JlY2VpdmVkID0gW107XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm5zIGFuIEVNUFRZIDEweDEwIGFycmF5LCAwLCAwIGlzIHRvcCBsZWZ0XHJcbiAgY3JlYXRlR2FtZWJvYXJkKCkge1xyXG4gICAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkoMTApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XHJcbiAgICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KDEwKTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRNb3ZlKGxlbmd0aCwgaXNWZXJ0aWNhbCwgc3RhcnRJbmRleCkge1xyXG4gICAgY29uc3QgcG9zaXRpb25BcnJheSA9IFtdO1xyXG5cclxuICAgIC8vIHNoaXAgaXMgaW5zaWRlIHRoZSBnYW1lYm9hcmRcclxuICAgIGlmIChpc1ZlcnRpY2FsID09PSB0cnVlKSB7XHJcbiAgICAgIGlmICgobGVuZ3RoICsgc3RhcnRJbmRleFswXSkgPiAxMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIHBvc2l0aW9uQXJyYXkucHVzaChbXHJcbiAgICAgICAgICBzdGFydEluZGV4WzBdICsgaSxcclxuICAgICAgICAgIHN0YXJ0SW5kZXhbMV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgaWYgKChsZW5ndGggKyBzdGFydEluZGV4WzFdKSA+IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgcG9zaXRpb25BcnJheS5wdXNoKFtcclxuICAgICAgICAgIHN0YXJ0SW5kZXhbMF0sXHJcbiAgICAgICAgICBzdGFydEluZGV4WzFdICsgaSxcclxuICAgICAgICBdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNoaXAgaXMgbm90IGRpcmVjdGx5IG5leHQgdG8gYW5vdGhlciBzaGlwXHJcbiAgICBjb25zdCBhZmZlY3RlZFNxdWFyZXNBcnJheSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25BcnJheS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAvLyBmb3IgZWFjaCBhZGQgdGhlIHN1cnJvdW5kaW5nIHNxdWFyZXMgYW5kIHNlbGZcclxuICAgICAgLy8gdG8gYWZmZWN0ZWQgc3F1YXJlcyBhcnJheVxyXG4gICAgICAvLyB0aGVuIGNoZWNrIHRoaXMuYm9hcmQgZm9yIFNoaXAgb2JqZWN0cyBpbiB0aG9zZSBwb3NpdGlvbnNcclxuXHJcbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xyXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gLSAxLFxyXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gLSAxLFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xyXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gLSAxLFxyXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0sXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXHJcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSAtIDEsXHJcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSArIDEsXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXHJcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSxcclxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdIC0gMSxcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcclxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdLFxyXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0sXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXHJcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSxcclxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdICsgMSxcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcclxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdICsgMSxcclxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdIC0gMSxcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcclxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdICsgMSxcclxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdLFxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xyXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gKyAxLFxyXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gKyAxLFxyXG4gICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFmZmVjdGVkU3F1YXJlc0FycmF5Lmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHggPSBhZmZlY3RlZFNxdWFyZXNBcnJheVtqXVswXTtcclxuICAgICAgY29uc3QgeSA9IGFmZmVjdGVkU3F1YXJlc0FycmF5W2pdWzFdO1xyXG5cclxuICAgICAgaWYgKHggPj0gMCAmJiB4IDw9IDkgJiYgeSA+PSAwICYmIHkgPD0gOSkge1xyXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldIGluc3RhbmNlb2YgU2hpcCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYWRkU2hpcFRvR2FtZWJvYXJkKGxlbmd0aCwgaXNWZXJ0aWNhbCwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZE1vdmUobGVuZ3RoLCBpc1ZlcnRpY2FsLCBzdGFydEluZGV4KSkge1xyXG4gICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcclxuICAgICAgdGhpcy5zaGlwc09uQm9hcmQucHVzaChuZXdTaGlwKTtcclxuXHJcbiAgICAgIGNvbnN0IGluZGV4WmVybyA9IHN0YXJ0SW5kZXhbMF07XHJcbiAgICAgIGNvbnN0IGluZGV4T25lID0gc3RhcnRJbmRleFsxXTtcclxuXHJcbiAgICAgIGlmIChpc1ZlcnRpY2FsID09PSB0cnVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4WmVybzsgaSA8IGxlbmd0aCArIGluZGV4WmVybzsgaSArPSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2luZGV4T25lXSA9IG5ld1NoaXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleE9uZTsgaSA8IChsZW5ndGggKyBpbmRleE9uZSk7IGkgKz0gMSkge1xyXG4gICAgICAgICAgdGhpcy5ib2FyZFtpbmRleFplcm9dW2ldID0gbmV3U2hpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gcmV0dXJuICdpbnZhbGlkIG1vdmUnO1xyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZUhpdChoaXRMb2NhdGlvbikge1xyXG4gICAgY29uc3QgeCA9IGhpdExvY2F0aW9uWzBdO1xyXG4gICAgY29uc3QgeSA9IGhpdExvY2F0aW9uWzFdO1xyXG5cclxuICAgIC8vIGZpbmQgaW52YWxpZCBzaG90IChub3Qgb24gZ2FtZWJvYXJkKVxyXG4gICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSB7XHJcbiAgICAgIHJldHVybiAnaW52YWxpZCBzaG90JztcclxuICAgIH1cclxuICAgIC8vIGZpbmQgaW52YWxpZCBzaG90IChkdWlwbGljYXRlIHNob3QpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hvdHNSZWNlaXZlZC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoeCA9PT0gdGhpcy5zaG90c1JlY2VpdmVkW2ldWzBdICYmIHkgPT09IHRoaXMuc2hvdHNSZWNlaXZlZFtpXVsxXSkge1xyXG4gICAgICAgIHJldHVybiAnaW52YWxpZCBzaG90JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcHVzaCBzaG90IHRvIHNob3RzIHJlY2VpdmVkIGFycmF5XHJcbiAgICB0aGlzLnNob3RzUmVjZWl2ZWQucHVzaChoaXRMb2NhdGlvbik7XHJcblxyXG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gaW5zdGFuY2VvZiBTaGlwKSB7XHJcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XHJcbiAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldLmlzU3VuaygpKSB7XHJcbiAgICAgICAgcmV0dXJuICdzdW5rIHNoaXAnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnaGl0IHNoaXAnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnc2hvdCBtaXNzZWQnO1xyXG4gIH1cclxuXHJcbiAgYWxsU2hpcHNTdW5rKCkge1xyXG4gICAgbGV0IHN1bmtTaGlwcyA9IDA7XHJcbiAgICBjb25zdCBhbGxTaGlwcyA9IHRoaXMuc2hpcHNPbkJvYXJkLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNoaXBzOyBpICs9IDEpIHtcclxuICAgICAgY29uc3QgY3VycmVudFNoaXAgPSB0aGlzLnNoaXBzT25Cb2FyZFtpXTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50U2hpcC5pc1N1bmsoKSkge1xyXG4gICAgICAgIHN1bmtTaGlwcyArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN1bmtTaGlwcyA9PT0gYWxsU2hpcHM7XHJcbiAgfVxyXG5cclxuICBnZXRSYW5kb21JbnQobWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ29tcHV0ZXJQb3NpdGlvbnMoYm9hcmQpIHtcclxuICAgIC8vYWRkIHR3byAzIGxlbmd0aCBzaGlwc1xyXG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCAyKSB7XHJcbiAgICAgIGxldCByZXN1bHRWZXJ0aWNhbCA9IHRydWU7XHJcbiAgICBjb25zdCBkZWNpZGVWZXJ0aWNhbCA9IHRoaXMuZ2V0UmFuZG9tSW50KDIpO1xyXG5cclxuICAgIGlmIChkZWNpZGVWZXJ0aWNhbCA9PT0gMCkge1xyXG4gICAgICByZXN1bHRWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpcnN0Q29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XHJcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcclxuXHJcbiAgICBib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoMywgcmVzdWx0VmVydGljYWwsIFtmaXJzdENvb3JkLCBzZWNvbmRDb29yZF0pO1xyXG4gICAgfVxyXG4gICAgLy9hZGQgYW5vdGhlciBzaGlwIG9mIDIgbGVuZ3RoXHJcbiAgICB3aGlsZSAoYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA8IDMpIHtcclxuICAgICAgbGV0IHJlc3VsdFZlcnRpY2FsID0gdHJ1ZTtcclxuICAgIGNvbnN0IGRlY2lkZVZlcnRpY2FsID0gdGhpcy5nZXRSYW5kb21JbnQoMik7XHJcblxyXG4gICAgaWYgKGRlY2lkZVZlcnRpY2FsID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdFZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlyc3RDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcclxuICAgIGNvbnN0IHNlY29uZENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xyXG5cclxuICAgIGJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCgyLCByZXN1bHRWZXJ0aWNhbCwgW2ZpcnN0Q29vcmQsIHNlY29uZENvb3JkXSk7XHJcbiAgICB9XHJcbiAgICAvL2FkZCBhbm90aGVyIHNoaXAgb2YgNCBsZW5ndGhcclxuICAgIHdoaWxlIChib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNCkge1xyXG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xyXG4gICAgY29uc3QgZGVjaWRlVmVydGljYWwgPSB0aGlzLmdldFJhbmRvbUludCgyKTtcclxuXHJcbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcclxuICAgICAgcmVzdWx0VmVydGljYWwgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xyXG4gICAgY29uc3Qgc2Vjb25kQ29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XHJcblxyXG4gICAgYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDQsIHJlc3VsdFZlcnRpY2FsLCBbZmlyc3RDb29yZCwgc2Vjb25kQ29vcmRdKTtcclxuICAgIH1cclxuICAgIC8vYWRkIHRoZSBsYXN0IHNoaXAgb2YgNSBsZW5ndGhcclxuICAgIHdoaWxlIChib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNSkge1xyXG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xyXG4gICAgY29uc3QgZGVjaWRlVmVydGljYWwgPSB0aGlzLmdldFJhbmRvbUludCgyKTtcclxuXHJcbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcclxuICAgICAgcmVzdWx0VmVydGljYWwgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaXJzdENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xyXG4gICAgY29uc3Qgc2Vjb25kQ29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XHJcblxyXG4gICAgYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDUsIHJlc3VsdFZlcnRpY2FsLCBbZmlyc3RDb29yZCwgc2Vjb25kQ29vcmRdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xyXG4iLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuLi9zcmMvZ2FtZWJvYXJkJyk7XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHBsYXllck5hbWUsIGJvYXJkLCBpc0NvbXB1dGVyUGxheWVyKSB7XHJcbiAgICB0aGlzLnBsYXllck5hbWUgPSBwbGF5ZXJOYW1lO1xyXG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgdGhpcy5pc0NvbXB1dGVyUGxheWVyID0gaXNDb21wdXRlclBsYXllcjtcclxuICB9XHJcblxyXG4gIGdldFR1cm5Db29yZGluYXRlcyhvcHBvbmVudCkge1xyXG4gICAgaWYgKHRoaXMuaXNDb21wdXRlclBsYXllcikge1xyXG4gICAgICBjb25zdCB7IHNob3RzUmVjZWl2ZWQgfSA9IG9wcG9uZW50LmJvYXJkO1xyXG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZGluYXRlcyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAxMDsgYSArPSAxKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCAxMDsgYiArPSAxKSB7XHJcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW2EsIGJdO1xyXG4gICAgICAgICAgaWYgKCFzaG90c1JlY2VpdmVkLnNvbWUoKFt4LCB5XSkgPT4geCA9PT0gYSAmJiB5ID09PSBiKSkge1xyXG4gICAgICAgICAgICBhdmFpbGFibGVDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIGNvb3JkaW5hdGVzJyk7IFxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCk7XHJcbiAgICAgIGNvbnN0IFthLCBiXSA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzW3JhbmRvbUluZGV4XTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbYSwgYl0pOyAvLyBSZXR1cm4gYSByZXNvbHZlZCBwcm9taXNlIHdpdGggdGhlIHJhbmRvbSBhdmFpbGFibGUgY29vcmRpbmF0ZXNcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0R2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcicpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZScpKSB7XHJcbiAgICAgICAgICBjb25zdCBhID0gcGFyc2VJbnQoZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSwgMTApO1xyXG4gICAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMl0sIDEwKTtcclxuXHJcbiAgICAgICAgICBjb25zdCB7IHNob3RzUmVjZWl2ZWQgfSA9IG9wcG9uZW50LmJvYXJkO1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb29yZGluYXRlID0gW2EsIGJdO1xyXG5cclxuICAgICAgICAgIGlmIChzaG90c1JlY2VpdmVkLnNvbWUoKFt4LCB5XSkgPT4geCA9PT0gYSAmJiB5ID09PSBiKSkge1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0R2FtZWJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xyXG4gICAgICAgICAgICByZXNvbHZlKHNlbGVjdGVkQ29vcmRpbmF0ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0YXJnZXRHYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFJhbmRvbUludChtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDb21wdXRlclBvc2l0aW9ucyhib2FyZCkge1xyXG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCA1KSB7XHJcbiAgICAgIGxldCByZXN1bHRWZXJ0aWNhbCA9IHRydWU7XHJcbiAgICBjb25zdCBkZWNpZGVWZXJ0aWNhbCA9IHRoaXMuZ2V0UmFuZG9tSW50KDIpO1xyXG5cclxuICAgIGlmIChkZWNpZGVWZXJ0aWNhbCA9PT0gMCkge1xyXG4gICAgICByZXN1bHRWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpcnN0Q29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XHJcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcclxuXHJcbiAgICBib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoMiwgcmVzdWx0VmVydGljYWwsIFtmaXJzdENvb3JkLCBzZWNvbmRDb29yZF0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XHJcbiIsImNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmhpdHMgPSAwO1xyXG4gIH1cclxuXHJcbiAgaGl0KCkge1xyXG4gICAgdGhpcy5oaXRzICs9IDE7XHJcbiAgICByZXR1cm4gdGhpcy5oaXRzO1xyXG4gIH1cclxuXHJcbiAgaXNTdW5rKCkge1xyXG4gICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQge1xyXG4gIGRyYXdIaXRzLCBkcmF3U2hpcHMsIGZpcnN0RE9NLCBnYW1lYm9hcmRET00sXHJcbiAgcGxheWVyTmFtZUZvcm0sIGdldENvbXB1dGVyTmFtZSwgcGxheWVyTW92ZXNGb3JtLFxyXG59IGZyb20gJy4vRE9NZnVuY3Rpb25zJztcclxuXHJcbmNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XHJcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XHJcblxyXG5sZXQgcGxheWVyT25lO1xyXG5sZXQgcGxheWVyVHdvO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0dXBQbGF5ZXJzKHBsYXllck5hbWUpIHtcclxuICAvLyBDcmVhdGUgZ2FtZWJvYXJkIHdpdGggNSBzaGlwcyBGT1IgRUFDSCBwbGF5ZXJcclxuICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcblxyXG4gIGNvbnN0IHBsYXllck1vdmVzID0gYXdhaXQgcGxheWVyTW92ZXNGb3JtKHBsYXllck9uZUdhbWVib2FyZCk7XHJcblxyXG4gIC8vIHBsYXllck9uZUdhbWVib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoNSwgZmFsc2UsIFsxLCAxXSk7XHJcblxyXG4gIC8vc2NyZXcgdGhlIGFycmF5IGp1c3QgcHV0IGEgZ2FtZWJvYXJkIGludG8gdGhlIGZ1bmN0aW9uIGFuZCByZXR1cm4gdGhlIGNvbXBsZXRlZCBnYW1lYm9hcmRcclxuXHJcbiAgY29uc3QgcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG4gIHBsYXllclR3b0dhbWVib2FyZC5nZW5lcmF0ZUNvbXB1dGVyUG9zaXRpb25zKHBsYXllclR3b0dhbWVib2FyZCk7XHJcbiAgY29uc29sZS5sb2cocGxheWVyVHdvR2FtZWJvYXJkKTtcclxuICBjb25zdCBjb21wdXRlck5hbWUgPSBnZXRDb21wdXRlck5hbWUoKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHBsYXllciAxXHJcbiAgcGxheWVyT25lID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lLCBwbGF5ZXJNb3ZlcywgZmFsc2UpO1xyXG4gIC8vIENyZWF0ZSBwbGF5ZXIgMiAoY29tcHV0ZXIpXHJcbiAgcGxheWVyVHdvID0gbmV3IFBsYXllcihjb21wdXRlck5hbWUsIHBsYXllclR3b0dhbWVib2FyZCwgdHJ1ZSk7XHJcblxyXG4gIC8vIERyYXcgZ2FtZWJvYXJkc1xyXG4gIGdhbWVib2FyZERPTShwbGF5ZXJPbmUsIHBsYXllclR3byk7XHJcbiAgZHJhd1NoaXBzKHBsYXllck9uZSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdhbWVTZXR1cCgpIHtcclxuICAvLyBGaXJzdCBwYWdlIGxvYWQsIGdlbmVyYXRlcyBza2VsZXRvbiBvZiB3ZWJzaXRlLCBjb250YWluZXJzLCBhbmQgdGl0bGVcclxuICBmaXJzdERPTSgpO1xyXG5cclxuICAvLyBUbyBzdGFydCB0aGUgZ2FtZSwgY29sbGVjdCB0aGUgcGxheWVyIG5hbWVcclxuICBjb25zdCBwbGF5ZXJOYW1lID0gYXdhaXQgcGxheWVyTmFtZUZvcm0oKTtcclxuICBjb25zb2xlLmxvZygnUGxheWVyIE5hbWU6JywgcGxheWVyTmFtZSk7XHJcblxyXG4gIGF3YWl0IHNldHVwUGxheWVycyhwbGF5ZXJOYW1lKTtcclxuXHJcbiAgLy8gU3RhcnQgdGhlIGdhbWUgbG9vcFxyXG4gIGdhbWVMb29wKHBsYXllck9uZSwgcGxheWVyVHdvKTtcclxufVxyXG5cclxuLy8gR2FtZSBvdmVyIGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIGdhbWVvdmVyKHBsYXllck9uZU9iamVjdCwgcGxheWVyVHdvT2JqZWN0KSB7XHJcbiAgaWYgKHBsYXllck9uZU9iamVjdC5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgcmV0dXJuIHBsYXllclR3b09iamVjdDtcclxuICB9XHJcbiAgaWYgKHBsYXllclR3b09iamVjdC5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xyXG4gICAgcmV0dXJuIHBsYXllck9uZU9iamVjdDtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vLyBTdGFydCBnYW1lIGxvb3BcclxuYXN5bmMgZnVuY3Rpb24gZ2FtZUxvb3AocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcclxuICB3aGlsZSAoZ2FtZW92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pID09PSBudWxsKSB7XHJcbiAgICAvLyBQbGF5ZXIgT25lJ3MgdHVyblxyXG4gICAgYXdhaXQgcGxheWVyVHVybihwbGF5ZXJPbmUsIHBsYXllclR3byk7XHJcblxyXG4gICAgaWYgKGdhbWVvdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKSAhPT0gbnVsbCkge1xyXG4gICAgICBicmVhazsgLy8gRXhpdCB0aGUgbG9vcCBpZiB0aGUgZ2FtZSBpcyBvdmVyXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxheWVyIFR3bydzIHR1cm5cclxuICAgIGF3YWl0IHBsYXllclR1cm4ocGxheWVyVHdvLCBwbGF5ZXJPbmUpO1xyXG4gIH1cclxuXHJcbiAgLy8gR2FtZSBvdmVyXHJcbiAgaWYgKGdhbWVvdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PT0gcGxheWVyT25lKSB7XHJcbiAgICBhbGVydCgnUGxheWVyIE9uZSBXaW5zJyk7XHJcbiAgfSBlbHNlIGlmIChnYW1lb3ZlcihwbGF5ZXJPbmUsIHBsYXllclR3bykgPT09IHBsYXllclR3bykge1xyXG4gICAgYWxlcnQoJ1BsYXllciBUd28gV2lucycpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGxheWVyVHVybihjdXJyZW50UGxheWVyLCBvcHBvbmVudCkge1xyXG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGN1cnJlbnRQbGF5ZXIuZ2V0VHVybkNvb3JkaW5hdGVzKG9wcG9uZW50KTtcclxuICBvcHBvbmVudC5ib2FyZC5yZWNlaXZlSGl0KGNvb3Jkcyk7XHJcbiAgZHJhd0hpdHMocGxheWVyT25lLCBwbGF5ZXJUd28pO1xyXG5cclxuICBpZiAoIWN1cnJlbnRQbGF5ZXIuaXNDb21wdXRlclBsYXllcikge1xyXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ2FsbCB0aGUgZ2FtZVNldHVwIGZ1bmN0aW9uIHRvIGluaXRpYXRlIHRoZSBnYW1lXHJcbmdhbWVTZXR1cCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=