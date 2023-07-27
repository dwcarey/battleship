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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;;;;CAIC;;AAED;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wEAAwE;AAC1E;AACA;EACE,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,uBAAuB;;AAEzB;;AAEA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;EACnC,iCAAiC;EACjC,UAAU;EACV,WAAW;AACb;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,YAAY;EACZ,4BAA4B;EAC5B,+BAA+B;EAC/B,WAAW;EACX,YAAY;;AAEd,aAAa;AACb,8BAA8B;AAC9B,qCAAqC;;AAErC,qBAAqB;AACrB,mBAAmB;AACnB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;;EAEX,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\n\n\n\n*/\n\nbody {\n  display: flex;\n  justify-content: center;\n}\n\n#contentContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 80vw;\n  background-color: aqua;\n  border: 3px solid red;\n  justify-items: center;\n}\n\n#titleContainer {\n  height: 15vh;\n  grid-column: span 2;\n  font-size: 5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.gameboardContainer > div {\n  border: 1px solid rgb(19, 19, 19);\n}\n\n.gameboardContainer {\n  grid-column: span 1;\n  display: flex;\n  justify-content: center;\n\n}\n\n.rowHolder {\n  display: flex;\n}\n#informationContainer {\n  grid-column: span 2;\n  display: grid;\n  grid-template-columns: 35vw 5vw 35vw;\n  text-align: center;\n  font-size: 2vw;\n  width: 75vw;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n}\n\n#playerTwoGameboardContainer > div > div > div.square:hover {\n  background-color: rgb(238, 174, 0);\n}\n\n.square {\n  background-color: rgb(12, 166, 255);\n  border: 1px solid rgb(19, 19, 19);\n  width: 3vw;\n  height: 3vw;\n}\n\n#playerTwoGameboardContainer > div > div > div.square.hitShipSquare {\n  background-color: rgb(173, 0, 0);\n}\n\n#playerTwoGameboardContainer > div > div > div.square.missedSquare {\n  background-color: rgb(0, 255, 85);\n}\n\n.shipSquare {\n  background-color: rgb(24, 24, 24);\n}\n\n.hitShipSquare {\n  background-color: rgb(173, 0, 0);\n}\n\n.missedSquare {\n  background-color: rgb(0, 255, 85);\n}\n\n.overlay {\n  background-color: rgb(0, 0, 0, 0.2);\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 8;\n}\n\n.formContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 9;\n  transform: translate(-50%, -50%);\n  padding: 5vw;\n  background-color: blueviolet;\n  border: 3px solid rgb(9, 7, 12);\n  width: 60vw;\n  height: 60vh;\n\ndisplay: grid;\ngrid-template-columns: 1fr 1fr;\ngrid-template-rows: 0.5fr 1fr 1fr 2fr;\n\njustify-items: center;\nalign-items: center;\n}\n\n.shipDisplay {\n  background-color: black;\n  grid-column: span 2;\n  grid-row-start: 2;\n}\n.ship-5.horizontal {\n  height: 3vw;\n  width: 15vw;\n}\n\n.ship-5.vertical {\n  height: 15vw;\n  width: 3vw;\n}\n\n.ship-4.horizontal {\n  height: 3vw;\n  width: 12vw;\n}\n\n.ship-4.vertical {\n  height: 12vw;\n  width: 3vw;\n}\n\n.ship-3.horizontal {\n  height: 3vw;\n  width: 9vw;\n}\n\n.ship-3.vertical {\n  height: 9vw;\n  width: 3vw;\n}\n\n.ship-2.horizontal {\n  height: 3vw;\n  width: 6vw;\n}\n\n.ship-2.vertical {\n  height: 6vw;\n  width: 3vw;\n}\n\n.verticalButton {\n  border-radius: 3vw;\n  height: 5vh;\n  width: 20vw;\n\n  grid-column: span 2;\n  grid-row-start:3;\n}\n\n.formBoardHolder {\n  grid-column: span 2;\n  grid-row-start: 4;\n}\n\n.shipText {\n  grid-row-start: 1;\n  grid-column: span 2;\n}"],"sourceRoot":""}]);
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

function drawShips(board) {
  for (let i = 0; i < board.board.length; i += 1) {
    for (let j = 0; j < board.board[i].length; j += 1) {
      const currentSquare = board.board[i][j];
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

          // Update the ship display based on the placed ship
          updateShipDisplay(shipSize);

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
  (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.drawShips)(playerOne.board);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUs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RUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUlHOztBQUV4QixrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2QyxlQUFlLG1CQUFPLENBQUMsaUNBQVU7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qiw4REFBZTs7QUFFM0M7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhEQUFlOztBQUV0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMkRBQVk7QUFDZCxFQUFFLHdEQUFTO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLEVBQUUsdURBQVE7O0FBRVY7QUFDQSwyQkFBMkIsNkRBQWM7QUFDekM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVE7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET01mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qXG5cblxuXG4qL1xuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjb250ZW50Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB3aWR0aDogODB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0aXRsZUNvbnRhaW5lciB7XG4gIGhlaWdodDogMTV2aDtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZm9udC1zaXplOiA1dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4uZ2FtZWJvYXJkQ29udGFpbmVyID4gZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xufVxuXG4uZ2FtZWJvYXJkQ29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbn1cblxuLnJvd0hvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jaW5mb3JtYXRpb25Db250YWluZXIge1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1dncgNXZ3IDM1dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAydnc7XG4gIHdpZHRoOiA3NXZ3O1xuICBwYWRkaW5nLXRvcDogMnZoO1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xufVxuXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE3NCwgMCk7XG59XG5cbi5zcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDE2NiwgMjU1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xuICB3aWR0aDogM3Z3O1xuICBoZWlnaHQ6IDN2dztcbn1cblxuI3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lciA+IGRpdiA+IGRpdiA+IGRpdi5zcXVhcmUuaGl0U2hpcFNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDAsIDApO1xufVxuXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZS5taXNzZWRTcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCA4NSk7XG59XG5cbi5zaGlwU3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xufVxuXG4uaGl0U2hpcFNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDAsIDApO1xufVxuXG4ubWlzc2VkU3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgODUpO1xufVxuXG4ub3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogODtcbn1cblxuLmZvcm1Db250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiA1dnc7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYig5LCA3LCAxMik7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDYwdmg7XG5cbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5ncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAxZnIgMmZyO1xuXG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hpcERpc3BsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG59XG4uc2hpcC01Lmhvcml6b250YWwge1xuICBoZWlnaHQ6IDN2dztcbiAgd2lkdGg6IDE1dnc7XG59XG5cbi5zaGlwLTUudmVydGljYWwge1xuICBoZWlnaHQ6IDE1dnc7XG4gIHdpZHRoOiAzdnc7XG59XG5cbi5zaGlwLTQuaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogM3Z3O1xuICB3aWR0aDogMTJ2dztcbn1cblxuLnNoaXAtNC52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTJ2dztcbiAgd2lkdGg6IDN2dztcbn1cblxuLnNoaXAtMy5ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAzdnc7XG4gIHdpZHRoOiA5dnc7XG59XG5cbi5zaGlwLTMudmVydGljYWwge1xuICBoZWlnaHQ6IDl2dztcbiAgd2lkdGg6IDN2dztcbn1cblxuLnNoaXAtMi5ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAzdnc7XG4gIHdpZHRoOiA2dnc7XG59XG5cbi5zaGlwLTIudmVydGljYWwge1xuICBoZWlnaHQ6IDZ2dztcbiAgd2lkdGg6IDN2dztcbn1cblxuLnZlcnRpY2FsQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogM3Z3O1xuICBoZWlnaHQ6IDV2aDtcbiAgd2lkdGg6IDIwdnc7XG5cbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZ3JpZC1yb3ctc3RhcnQ6Mztcbn1cblxuLmZvcm1Cb2FyZEhvbGRlciB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xufVxuXG4uc2hpcFRleHQge1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3RUFBd0U7QUFDMUU7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxZQUFZOztBQUVkLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIscUNBQXFDOztBQUVyQyxxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXOztFQUVYLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLypcXG5cXG5cXG5cXG4qL1xcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGl0bGVDb250YWluZXIge1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGZvbnQtc2l6ZTogNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuLmdhbWVib2FyZENvbnRhaW5lciA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XFxufVxcblxcbi5nYW1lYm9hcmRDb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnJvd0hvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jaW5mb3JtYXRpb25Db250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1dncgNXZ3IDM1dnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJ2dztcXG4gIHdpZHRoOiA3NXZ3O1xcbiAgcGFkZGluZy10b3A6IDJ2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAydmg7XFxufVxcblxcbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE3NCwgMCk7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxNjYsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XFxuICB3aWR0aDogM3Z3O1xcbiAgaGVpZ2h0OiAzdnc7XFxufVxcblxcbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlLmhpdFNoaXBTcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XFxufVxcblxcbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlLm1pc3NlZFNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCA4NSk7XFxufVxcblxcbi5zaGlwU3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG59XFxuXFxuLmhpdFNoaXBTcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XFxufVxcblxcbi5taXNzZWRTcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgODUpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA4O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBhZGRpbmc6IDV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoOSwgNywgMTIpO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IDYwdmg7XFxuXFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgMWZyIDJmcjtcXG5cXG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBEaXNwbGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbn1cXG4uc2hpcC01Lmhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAzdnc7XFxuICB3aWR0aDogMTV2dztcXG59XFxuXFxuLnNoaXAtNS52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDE1dnc7XFxuICB3aWR0aDogM3Z3O1xcbn1cXG5cXG4uc2hpcC00Lmhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAzdnc7XFxuICB3aWR0aDogMTJ2dztcXG59XFxuXFxuLnNoaXAtNC52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDEydnc7XFxuICB3aWR0aDogM3Z3O1xcbn1cXG5cXG4uc2hpcC0zLmhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAzdnc7XFxuICB3aWR0aDogOXZ3O1xcbn1cXG5cXG4uc2hpcC0zLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogOXZ3O1xcbiAgd2lkdGg6IDN2dztcXG59XFxuXFxuLnNoaXAtMi5ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogM3Z3O1xcbiAgd2lkdGg6IDZ2dztcXG59XFxuXFxuLnNoaXAtMi52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDZ2dztcXG4gIHdpZHRoOiAzdnc7XFxufVxcblxcbi52ZXJ0aWNhbEJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAzdnc7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIHdpZHRoOiAyMHZ3O1xcblxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGdyaWQtcm93LXN0YXJ0OjM7XFxufVxcblxcbi5mb3JtQm9hcmRIb2xkZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xcbn1cXG5cXG4uc2hpcFRleHQge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcblxuZnVuY3Rpb24gZmlyc3RET00oKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudENvbnRhaW5lci5pZCA9ICdjb250ZW50Q29udGFpbmVyJztcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVDb250YWluZXIuaWQgPSAndGl0bGVDb250YWluZXInO1xuXG4gIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllck9uZUdhbWVib2FyZENvbnRhaW5lci5pZCA9ICdwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXInO1xuICBwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkQ29udGFpbmVyJyk7XG4gIGNvbnN0IHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIuaWQgPSAncGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyJztcbiAgcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZENvbnRhaW5lcicpO1xuICBjb25zdCBpbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvcm1hdGlvbkNvbnRhaW5lci5pZCA9ICdpbmZvcm1hdGlvbkNvbnRhaW5lcic7XG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9ybWF0aW9uQ29udGFpbmVyKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBnYW1lYm9hcmRET00ocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgY29uc3QgcGxheWVyT25lTmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwbGF5ZXJPbmVOYW1lVGV4dC50ZXh0Q29udGVudCA9IHBsYXllck9uZS5wbGF5ZXJOYW1lO1xuICBjb25zdCBwbGF5ZXJUd29OYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHBsYXllclR3b05hbWVUZXh0LnRleHRDb250ZW50ID0gcGxheWVyVHdvLnBsYXllck5hbWU7XG5cbiAgY29uc3QgaW5mb3JtYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mb3JtYXRpb25Db250YWluZXInKTtcbiAgY29uc3QgVlN0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgVlN0ZXh0LnRleHRDb250ZW50ID0gJ1ZTLic7XG4gIGluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZU5hbWVUZXh0KTtcbiAgaW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoVlN0ZXh0KTtcbiAgaW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyVHdvTmFtZVRleHQpO1xuXG4gIGNvbnN0IHBsYXllck9uZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBsYXllclR3b0JvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3dIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3dIb2xkZXIuaWQgPSBgcm93SG9sZGVyLSR7aX1gO1xuICAgIHJvd0hvbGRlci5jbGFzc0xpc3QuYWRkKCdyb3dIb2xkZXInKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyT25lLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5pZCA9IGBzcXVhcmUtJHtpfS0ke2p9YDtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIHJvd0hvbGRlci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cblxuICAgIHBsYXllck9uZUJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0hvbGRlcik7XG4gIH1cblxuICBjb25zdCBtYWluUGxheWVyT25lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllck9uZUdhbWVib2FyZENvbnRhaW5lcicpO1xuICBtYWluUGxheWVyT25lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkQ29udGFpbmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllclR3by5ib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvd0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvd0hvbGRlci5pZCA9IGByb3dIb2xkZXItJHtpfWA7XG4gICAgcm93SG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Jvd0hvbGRlcicpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJUd28uYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmlkID0gYDJzcXVhcmUtJHtpfS0ke2p9YDtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIHJvd0hvbGRlci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cblxuICAgIHBsYXllclR3b0JvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0hvbGRlcik7XG4gIH1cblxuICBjb25zdCBtYWluUGxheWVyVHdvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcicpO1xuICBtYWluUGxheWVyVHdvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZHJhd1NoaXBzKGJvYXJkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlID0gYm9hcmQuYm9hcmRbaV1bal07XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNxdWFyZS0ke2l9LSR7an1gKTtcbiAgICAgIGlmIChjdXJyZW50U3F1YXJlIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICBjdXJyZW50U3F1YXJlRE9NLmNsYXNzTGlzdC5hZGQoJ3NoaXBTcXVhcmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd0hpdHMocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllck9uZS5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3QgY3VycmVudFNxdWFyZVBsYXllck9uZSA9IHBsYXllck9uZS5ib2FyZC5ib2FyZFtpXVtqXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJUd28gPSBwbGF5ZXJUd28uYm9hcmQuYm9hcmRbaV1bal07XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlUGxheWVyT25lRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNxdWFyZS0ke2l9LSR7an1gKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJUd29ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMnNxdWFyZS0ke2l9LSR7an1gKTtcblxuICAgICAgLy8gUGxheWVyIE9uZVxuICAgICAgaWYgKHBsYXllck9uZS5ib2FyZC5zaG90c1JlY2VpdmVkLnNvbWUoKGNvb3JkcykgPT4gY29vcmRzWzBdID09PSBpICYmIGNvb3Jkc1sxXSA9PT0gaikpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTcXVhcmVQbGF5ZXJPbmUgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgY3VycmVudFNxdWFyZVBsYXllck9uZURPTS5jbGFzc0xpc3QuYWRkKCdoaXRTaGlwU3F1YXJlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFNxdWFyZVBsYXllck9uZURPTS5jbGFzc0xpc3QuYWRkKCdtaXNzZWRTcXVhcmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQbGF5ZXIgVHdvXG4gICAgICBpZiAocGxheWVyVHdvLmJvYXJkLnNob3RzUmVjZWl2ZWQuc29tZSgoY29vcmRzKSA9PiBjb29yZHNbMF0gPT09IGkgJiYgY29vcmRzWzFdID09PSBqKSkge1xuICAgICAgICBpZiAoY3VycmVudFNxdWFyZVBsYXllclR3byBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyVHdvRE9NLmNsYXNzTGlzdC5hZGQoJ2hpdFNoaXBTcXVhcmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyVHdvRE9NLmNsYXNzTGlzdC5hZGQoJ21pc3NlZFNxdWFyZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwbGF5ZXJOYW1lRm9ybSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBiYWNraW5nIG92ZXJsYXlcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gZWxlbWVudFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRleHQgaW5wdXQgZm9yIHRoZSBwbGF5ZXIgbmFtZVxuICAgIGNvbnN0IHBsYXllck5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGxheWVyTmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgcGxheWVyTmFtZUlucHV0Lm5hbWUgPSAncGxheWVyTmFtZSc7XG4gICAgcGxheWVyTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgbmFtZSc7XG4gICAgcGxheWVyTmFtZUlucHV0Lm1heExlbmd0aCA9IDMwO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocGxheWVyTmFtZUlucHV0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSAnU3VibWl0JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAvLyBBZGQgdGhlIGZvcm0gdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vIEFkZCB0aGUgZm9ybSBjb250YWluZXIgYW5kIG92ZXJsYXkgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uXG5cbiAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5ZXJOYW1lSW5wdXQudmFsdWU7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgZm9ybSBhbmQgb3ZlcmxheSBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAgZm9ybUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG5cbiAgICAgIHJlc29sdmUocGxheWVyTmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlck5hbWUoKSB7XG4gIGxldCBjb21wdXRlck5hbWU7XG5cbiAgc3dpdGNoIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpIHtcbiAgICBjYXNlIDA6XG4gICAgICBjb21wdXRlck5hbWUgPSAnQ29tcHV0ZXJpbmEnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ01vdXN0b3BoZXInO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ0Rlc2tlbGxlJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdNb25pdG9yZXR0ZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBjb21wdXRlck5hbWUgPSAnS2V5Ym9hcmRhbnRoYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBjb21wdXRlck5hbWUgPSAnQ29kZWxsYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDY6XG4gICAgICBjb21wdXRlck5hbWUgPSAnTmV0YWxpZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc6XG4gICAgICBjb21wdXRlck5hbWUgPSAnQnJvd3NlZGl0aCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDg6XG4gICAgICBjb21wdXRlck5hbWUgPSAnRGF0YXRob255JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgOTpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdBYXJhbSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ1Vua25vd24nO1xuICB9XG5cbiAgcmV0dXJuIGNvbXB1dGVyTmFtZTtcbn1cblxuXG4gICAgLy8gRGVjbGFyZSBhbmQgaW5pdGlhbGlzZSB0aGUgaXNWZXJ0aWNhbCB2YXJpYWJsZVxuICAgIGxldCBpc1ZlcnRpY2FsID0gZmFsc2U7XG4gICAgXG4vLyBDcmVhdGUgdGhlIHNoaXAgZGlzcGxheSBlbGVtZW50XG5jb25zdCBzaGlwRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2hpcERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnc2hpcERpc3BsYXknKTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc2hpcCBkaXNwbGF5IGNsYXNzXG5mdW5jdGlvbiB1cGRhdGVTaGlwRGlzcGxheShzaGlwU2l6ZSkge1xuICBzaGlwRGlzcGxheS5jbGFzc05hbWUgPSBgc2hpcERpc3BsYXkgc2hpcC0ke3NoaXBTaXplfSAke2lzVmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnfWA7XG59XG5cbmNvbnN0IHNoaXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuc2hpcFRleHQuY2xhc3NMaXN0LmFkZCgnc2hpcFRleHQnKTtcblxuZnVuY3Rpb24gdXBkYXRlU2hpcFRleHQoc2hpcE5hbWUsIHNoaXBMZW5ndGgpIHtcbiAgc2hpcFRleHQudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke3NoaXBOYW1lfSwgJHtzaGlwTGVuZ3RofSBsZW5ndGhgO1xufVxuXG4vLyBDcmVhdGUgdGhlIHBsYXllck1vdmVzRm9ybSBmdW5jdGlvblxuZnVuY3Rpb24gcGxheWVyTW92ZXNGb3JtKGdhbWVib2FyZCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIENyZWF0ZSB0aGUgZm9ybSBjb250YWluZXJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGJhY2tpbmcgb3ZlcmxheVxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZm9ybSBlbGVtZW50XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIC8vIEFkZCB0aGUgZm9ybSB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy8gQWRkIHRoZSBmb3JtIGNvbnRhaW5lciBhbmQgb3ZlcmxheSB0byB0aGUgZG9jdW1lbnQgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIC8vIEdlbmVyYXRlIERPTSBlbGVtZW50cyBmb3IgZ2FtZWJvYXJkXG4gICAgY29uc3QgcGxheWVyT25lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQm9hcmRIb2xkZXInKTtcblxuXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBzcXVhcmUgZWxlbWVudHNcbiAgICBmdW5jdGlvbiBjcmVhdGVTcXVhcmUocm93LCBjb2x1bW4pIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmlkID0gYHNxdWFyZS0ke3Jvd30tJHtjb2x1bW59YDtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcblxuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBzaGlwIHBsYWNlbWVudFxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IGdhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNSA/IFs1LCA0LCAzLCAzLCAyXVtnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aF0gOiBudWxsO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtyb3csIGNvbHVtbl07XG4gICAgICAgIFxuICAgICAgICBpZiAoc2hpcFNpemUgJiYgZ2FtZWJvYXJkLmlzVmFsaWRNb3ZlKHNoaXBTaXplLCBpc1ZlcnRpY2FsLCBjb29yZGluYXRlcykpIHtcbiAgICAgICAgICBnYW1lYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKHNoaXBTaXplLCBpc1ZlcnRpY2FsLCBjb29yZGluYXRlcyk7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNoaXAgZGlzcGxheSBiYXNlZCBvbiB0aGUgcGxhY2VkIHNoaXBcbiAgICAgICAgICB1cGRhdGVTaGlwRGlzcGxheShzaGlwU2l6ZSk7XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAgICAgICAgIGlmIChnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgLy8gQ2xlYW4gdXAgVUlcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAvLyBSZXNvbHZlIHRoZSBwcm9taXNlIHdpdGggdGhlIHVwZGF0ZWQgZ2FtZWJvYXJkXG4gICAgICAgICAgICByZXNvbHZlKGdhbWVib2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNxdWFyZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgcm93SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3dIb2xkZXIuaWQgPSBgcm93SG9sZGVyLSR7aX1gO1xuICAgICAgcm93SG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Jvd0hvbGRlcicpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBjcmVhdGVTcXVhcmUoaSwgaik7XG4gICAgICAgIHJvd0hvbGRlci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3dIb2xkZXIpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSB0aGUgXCJJcyBWZXJ0aWNhbD9cIiBidXR0b25cbiAgICBjb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2dnbGVCdXR0b24udGV4dENvbnRlbnQgPSAnSXMgVmVydGljYWw/JztcbiAgICB0b2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndmVydGljYWxCdXR0b24nKTtcblxuICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlzVmVydGljYWwgPSAhaXNWZXJ0aWNhbDsgLy8gVG9nZ2xlIHRoZSBib29sZWFuIHZhbHVlXG4gICAgICB1cGRhdGVTaGlwRGlzcGxheShbNSwgNCwgMywgMywgMl1bZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGhdKTtcbiAgICB9KTtcblxuICAgIC8vIEFwcGVuZCB0aGUgc2hpcCBkaXNwbGF5IHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcERpc3BsYXkpO1xuICAgIHVwZGF0ZVNoaXBEaXNwbGF5KDUpO1xuICAgICAgICAgICAgICAvL3VwZGF0ZSBzaGlwIHRleHRcbiAgICAgICAgICAgICAgdXBkYXRlU2hpcFRleHQoWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnU3VibWFyaW5lJyxcbiAgICAgICAgICAgICAgJ0NydWlzZXInLCAnRGVzdHJveWVyJ11bZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGhdLFxuICAgICAgICAgICAgICBbNSwgNCwgMywgMywgMl1bZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGhdKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgdG9nZ2xlIGJ1dHRvbiB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJ1dHRvbik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwVGV4dCk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHBsYXllck9uZUJvYXJkQ29udGFpbmVyIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmRDb250YWluZXIpO1xuICB9KTtcbn1cblxuXG5cblxuXG5cbmV4cG9ydCB7XG4gIGZpcnN0RE9NLCBnYW1lYm9hcmRET00sIGRyYXdTaGlwcywgZHJhd0hpdHMsXG4gIHBsYXllck5hbWVGb3JtLCBnZXRDb21wdXRlck5hbWUsIHBsYXllck1vdmVzRm9ybSxcbn07IiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVHYW1lYm9hcmQoKTtcbiAgICB0aGlzLnNoaXBzT25Cb2FyZCA9IFtdO1xuICAgIHRoaXMuc2hvdHNSZWNlaXZlZCA9IFtdO1xuICB9XG5cbiAgLy8gcmV0dXJucyBhbiBFTVBUWSAxMHgxMCBhcnJheSwgMCwgMCBpcyB0b3AgbGVmdFxuICBjcmVhdGVHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBuZXcgQXJyYXkoMTApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgYm9hcmRbaV0gPSBuZXcgQXJyYXkoMTApO1xuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICBpc1ZhbGlkTW92ZShsZW5ndGgsIGlzVmVydGljYWwsIHN0YXJ0SW5kZXgpIHtcbiAgICBjb25zdCBwb3NpdGlvbkFycmF5ID0gW107XG5cbiAgICAvLyBzaGlwIGlzIGluc2lkZSB0aGUgZ2FtZWJvYXJkXG4gICAgaWYgKGlzVmVydGljYWwgPT09IHRydWUpIHtcbiAgICAgIGlmICgobGVuZ3RoICsgc3RhcnRJbmRleFswXSkgPiAxMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgcG9zaXRpb25BcnJheS5wdXNoKFtcbiAgICAgICAgICBzdGFydEluZGV4WzBdICsgaSxcbiAgICAgICAgICBzdGFydEluZGV4WzFdLFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgIGlmICgobGVuZ3RoICsgc3RhcnRJbmRleFsxXSkgPiAxMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgcG9zaXRpb25BcnJheS5wdXNoKFtcbiAgICAgICAgICBzdGFydEluZGV4WzBdLFxuICAgICAgICAgIHN0YXJ0SW5kZXhbMV0gKyBpLFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzaGlwIGlzIG5vdCBkaXJlY3RseSBuZXh0IHRvIGFub3RoZXIgc2hpcFxuICAgIGNvbnN0IGFmZmVjdGVkU3F1YXJlc0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aW9uQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIC8vIGZvciBlYWNoIGFkZCB0aGUgc3Vycm91bmRpbmcgc3F1YXJlcyBhbmQgc2VsZlxuICAgICAgLy8gdG8gYWZmZWN0ZWQgc3F1YXJlcyBhcnJheVxuICAgICAgLy8gdGhlbiBjaGVjayB0aGlzLmJvYXJkIGZvciBTaGlwIG9iamVjdHMgaW4gdGhvc2UgcG9zaXRpb25zXG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdIC0gMSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSAtIDEsXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gLSAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdIC0gMSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSArIDEsXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0sXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gLSAxLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdICsgMSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSArIDEsXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gLSAxLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdICsgMSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSArIDEsXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gKyAxLFxuICAgICAgXSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBhZmZlY3RlZFNxdWFyZXNBcnJheS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3QgeCA9IGFmZmVjdGVkU3F1YXJlc0FycmF5W2pdWzBdO1xuICAgICAgY29uc3QgeSA9IGFmZmVjdGVkU3F1YXJlc0FycmF5W2pdWzFdO1xuXG4gICAgICBpZiAoeCA+PSAwICYmIHggPD0gOSAmJiB5ID49IDAgJiYgeSA8PSA5KSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWRkU2hpcFRvR2FtZWJvYXJkKGxlbmd0aCwgaXNWZXJ0aWNhbCwgc3RhcnRJbmRleCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWRNb3ZlKGxlbmd0aCwgaXNWZXJ0aWNhbCwgc3RhcnRJbmRleCkpIHtcbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgICAgdGhpcy5zaGlwc09uQm9hcmQucHVzaChuZXdTaGlwKTtcblxuICAgICAgY29uc3QgaW5kZXhaZXJvID0gc3RhcnRJbmRleFswXTtcbiAgICAgIGNvbnN0IGluZGV4T25lID0gc3RhcnRJbmRleFsxXTtcblxuICAgICAgaWYgKGlzVmVydGljYWwgPT09IHRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4WmVybzsgaSA8IGxlbmd0aCArIGluZGV4WmVybzsgaSArPSAxKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFtpXVtpbmRleE9uZV0gPSBuZXdTaGlwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXhPbmU7IGkgPCAobGVuZ3RoICsgaW5kZXhPbmUpOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4WmVyb11baV0gPSBuZXdTaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSByZXR1cm4gJ2ludmFsaWQgbW92ZSc7XG4gIH1cblxuICByZWNlaXZlSGl0KGhpdExvY2F0aW9uKSB7XG4gICAgY29uc3QgeCA9IGhpdExvY2F0aW9uWzBdO1xuICAgIGNvbnN0IHkgPSBoaXRMb2NhdGlvblsxXTtcblxuICAgIC8vIGZpbmQgaW52YWxpZCBzaG90IChub3Qgb24gZ2FtZWJvYXJkKVxuICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkge1xuICAgICAgcmV0dXJuICdpbnZhbGlkIHNob3QnO1xuICAgIH1cbiAgICAvLyBmaW5kIGludmFsaWQgc2hvdCAoZHVpcGxpY2F0ZSBzaG90KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaG90c1JlY2VpdmVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoeCA9PT0gdGhpcy5zaG90c1JlY2VpdmVkW2ldWzBdICYmIHkgPT09IHRoaXMuc2hvdHNSZWNlaXZlZFtpXVsxXSkge1xuICAgICAgICByZXR1cm4gJ2ludmFsaWQgc2hvdCc7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHB1c2ggc2hvdCB0byBzaG90cyByZWNlaXZlZCBhcnJheVxuICAgIHRoaXMuc2hvdHNSZWNlaXZlZC5wdXNoKGhpdExvY2F0aW9uKTtcblxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldLmlzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiAnc3VuayBzaGlwJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnaGl0IHNoaXAnO1xuICAgIH1cblxuICAgIHJldHVybiAnc2hvdCBtaXNzZWQnO1xuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGxldCBzdW5rU2hpcHMgPSAwO1xuICAgIGNvbnN0IGFsbFNoaXBzID0gdGhpcy5zaGlwc09uQm9hcmQubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxTaGlwczsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHRoaXMuc2hpcHNPbkJvYXJkW2ldO1xuXG4gICAgICBpZiAoY3VycmVudFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgc3Vua1NoaXBzICs9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1bmtTaGlwcyA9PT0gYWxsU2hpcHM7XG4gIH1cblxuICBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICBnZW5lcmF0ZUNvbXB1dGVyUG9zaXRpb25zKGJvYXJkKSB7XG4gICAgLy9hZGQgdHdvIDMgbGVuZ3RoIHNoaXBzXG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCAyKSB7XG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xuICAgIGNvbnN0IGRlY2lkZVZlcnRpY2FsID0gdGhpcy5nZXRSYW5kb21JbnQoMik7XG5cbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcbiAgICAgIHJlc3VsdFZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcblxuICAgIGJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCgzLCByZXN1bHRWZXJ0aWNhbCwgW2ZpcnN0Q29vcmQsIHNlY29uZENvb3JkXSk7XG4gICAgfVxuICAgIC8vYWRkIGFub3RoZXIgc2hpcCBvZiAyIGxlbmd0aFxuICAgIHdoaWxlIChib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgMykge1xuICAgICAgbGV0IHJlc3VsdFZlcnRpY2FsID0gdHJ1ZTtcbiAgICBjb25zdCBkZWNpZGVWZXJ0aWNhbCA9IHRoaXMuZ2V0UmFuZG9tSW50KDIpO1xuXG4gICAgaWYgKGRlY2lkZVZlcnRpY2FsID09PSAwKSB7XG4gICAgICByZXN1bHRWZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgY29uc3Qgc2Vjb25kQ29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG5cbiAgICBib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoMiwgcmVzdWx0VmVydGljYWwsIFtmaXJzdENvb3JkLCBzZWNvbmRDb29yZF0pO1xuICAgIH1cbiAgICAvL2FkZCBhbm90aGVyIHNoaXAgb2YgNCBsZW5ndGhcbiAgICB3aGlsZSAoYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA8IDQpIHtcbiAgICAgIGxldCByZXN1bHRWZXJ0aWNhbCA9IHRydWU7XG4gICAgY29uc3QgZGVjaWRlVmVydGljYWwgPSB0aGlzLmdldFJhbmRvbUludCgyKTtcblxuICAgIGlmIChkZWNpZGVWZXJ0aWNhbCA9PT0gMCkge1xuICAgICAgcmVzdWx0VmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgIGNvbnN0IHNlY29uZENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuXG4gICAgYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDQsIHJlc3VsdFZlcnRpY2FsLCBbZmlyc3RDb29yZCwgc2Vjb25kQ29vcmRdKTtcbiAgICB9XG4gICAgLy9hZGQgdGhlIGxhc3Qgc2hpcCBvZiA1IGxlbmd0aFxuICAgIHdoaWxlIChib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNSkge1xuICAgICAgbGV0IHJlc3VsdFZlcnRpY2FsID0gdHJ1ZTtcbiAgICBjb25zdCBkZWNpZGVWZXJ0aWNhbCA9IHRoaXMuZ2V0UmFuZG9tSW50KDIpO1xuXG4gICAgaWYgKGRlY2lkZVZlcnRpY2FsID09PSAwKSB7XG4gICAgICByZXN1bHRWZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgY29uc3Qgc2Vjb25kQ29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG5cbiAgICBib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoNSwgcmVzdWx0VmVydGljYWwsIFtmaXJzdENvb3JkLCBzZWNvbmRDb29yZF0pO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4uL3NyYy9nYW1lYm9hcmQnKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocGxheWVyTmFtZSwgYm9hcmQsIGlzQ29tcHV0ZXJQbGF5ZXIpIHtcbiAgICB0aGlzLnBsYXllck5hbWUgPSBwbGF5ZXJOYW1lO1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICB0aGlzLmlzQ29tcHV0ZXJQbGF5ZXIgPSBpc0NvbXB1dGVyUGxheWVyO1xuICB9XG5cbiAgZ2V0VHVybkNvb3JkaW5hdGVzKG9wcG9uZW50KSB7XG4gICAgaWYgKHRoaXMuaXNDb21wdXRlclBsYXllcikge1xuICAgICAgY29uc3QgeyBzaG90c1JlY2VpdmVkIH0gPSBvcHBvbmVudC5ib2FyZDtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gW107XG5cbiAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMTA7IGEgKz0gMSkge1xuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IDEwOyBiICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW2EsIGJdO1xuICAgICAgICAgIGlmICghc2hvdHNSZWNlaXZlZC5zb21lKChbeCwgeV0pID0+IHggPT09IGEgJiYgeSA9PT0gYikpIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBhdmFpbGFibGUgY29vcmRpbmF0ZXMnKTsgXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRpbmF0ZXMubGVuZ3RoKTtcbiAgICAgIGNvbnN0IFthLCBiXSA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzW3JhbmRvbUluZGV4XTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW2EsIGJdKTsgLy8gUmV0dXJuIGEgcmVzb2x2ZWQgcHJvbWlzZSB3aXRoIHRoZSByYW5kb20gYXZhaWxhYmxlIGNvb3JkaW5hdGVzXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRHYW1lYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyJyk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlJykpIHtcbiAgICAgICAgICBjb25zdCBhID0gcGFyc2VJbnQoZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSwgMTApO1xuICAgICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChlLnRhcmdldC5pZC5zcGxpdCgnLScpWzJdLCAxMCk7XG5cbiAgICAgICAgICBjb25zdCB7IHNob3RzUmVjZWl2ZWQgfSA9IG9wcG9uZW50LmJvYXJkO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ29vcmRpbmF0ZSA9IFthLCBiXTtcblxuICAgICAgICAgIGlmIChzaG90c1JlY2VpdmVkLnNvbWUoKFt4LCB5XSkgPT4geCA9PT0gYSAmJiB5ID09PSBiKSkge1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRHYW1lYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgICAgICAgICByZXNvbHZlKHNlbGVjdGVkQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRhcmdldEdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgfVxuXG4gIGdlbmVyYXRlQ29tcHV0ZXJQb3NpdGlvbnMoYm9hcmQpIHtcbiAgICB3aGlsZSAoYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA8IDUpIHtcbiAgICAgIGxldCByZXN1bHRWZXJ0aWNhbCA9IHRydWU7XG4gICAgY29uc3QgZGVjaWRlVmVydGljYWwgPSB0aGlzLmdldFJhbmRvbUludCgyKTtcblxuICAgIGlmIChkZWNpZGVWZXJ0aWNhbCA9PT0gMCkge1xuICAgICAgcmVzdWx0VmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgIGNvbnN0IHNlY29uZENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuXG4gICAgYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDIsIHJlc3VsdFZlcnRpY2FsLCBbZmlyc3RDb29yZCwgc2Vjb25kQ29vcmRdKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5oaXRzO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgZHJhd0hpdHMsIGRyYXdTaGlwcywgZmlyc3RET00sIGdhbWVib2FyZERPTSxcbiAgcGxheWVyTmFtZUZvcm0sIGdldENvbXB1dGVyTmFtZSwgcGxheWVyTW92ZXNGb3JtLFxufSBmcm9tICcuL0RPTWZ1bmN0aW9ucyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuXG5sZXQgcGxheWVyT25lO1xubGV0IHBsYXllclR3bztcblxuYXN5bmMgZnVuY3Rpb24gc2V0dXBQbGF5ZXJzKHBsYXllck5hbWUpIHtcbiAgLy8gQ3JlYXRlIGdhbWVib2FyZCB3aXRoIDUgc2hpcHMgRk9SIEVBQ0ggcGxheWVyXG4gIGNvbnN0IHBsYXllck9uZUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBwbGF5ZXJNb3ZlcyA9IGF3YWl0IHBsYXllck1vdmVzRm9ybShwbGF5ZXJPbmVHYW1lYm9hcmQpO1xuXG4gIC8vIHBsYXllck9uZUdhbWVib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoNSwgZmFsc2UsIFsxLCAxXSk7XG5cbiAgLy9zY3JldyB0aGUgYXJyYXkganVzdCBwdXQgYSBnYW1lYm9hcmQgaW50byB0aGUgZnVuY3Rpb24gYW5kIHJldHVybiB0aGUgY29tcGxldGVkIGdhbWVib2FyZFxuXG4gIGNvbnN0IHBsYXllclR3b0dhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgcGxheWVyVHdvR2FtZWJvYXJkLmdlbmVyYXRlQ29tcHV0ZXJQb3NpdGlvbnMocGxheWVyVHdvR2FtZWJvYXJkKTtcbiAgY29uc29sZS5sb2cocGxheWVyVHdvR2FtZWJvYXJkKTtcbiAgY29uc3QgY29tcHV0ZXJOYW1lID0gZ2V0Q29tcHV0ZXJOYW1lKCk7XG5cbiAgLy8gQ3JlYXRlIHBsYXllciAxXG4gIHBsYXllck9uZSA9IG5ldyBQbGF5ZXIocGxheWVyTmFtZSwgcGxheWVyTW92ZXMsIGZhbHNlKTtcbiAgLy8gQ3JlYXRlIHBsYXllciAyIChjb21wdXRlcilcbiAgcGxheWVyVHdvID0gbmV3IFBsYXllcihjb21wdXRlck5hbWUsIHBsYXllclR3b0dhbWVib2FyZCwgdHJ1ZSk7XG5cbiAgLy8gRHJhdyBnYW1lYm9hcmRzXG4gIGdhbWVib2FyZERPTShwbGF5ZXJPbmUsIHBsYXllclR3byk7XG4gIGRyYXdTaGlwcyhwbGF5ZXJPbmUuYm9hcmQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnYW1lU2V0dXAoKSB7XG4gIC8vIEZpcnN0IHBhZ2UgbG9hZCwgZ2VuZXJhdGVzIHNrZWxldG9uIG9mIHdlYnNpdGUsIGNvbnRhaW5lcnMsIGFuZCB0aXRsZVxuICBmaXJzdERPTSgpO1xuXG4gIC8vIFRvIHN0YXJ0IHRoZSBnYW1lLCBjb2xsZWN0IHRoZSBwbGF5ZXIgbmFtZVxuICBjb25zdCBwbGF5ZXJOYW1lID0gYXdhaXQgcGxheWVyTmFtZUZvcm0oKTtcbiAgY29uc29sZS5sb2coJ1BsYXllciBOYW1lOicsIHBsYXllck5hbWUpO1xuXG4gIGF3YWl0IHNldHVwUGxheWVycyhwbGF5ZXJOYW1lKTtcblxuICAvLyBTdGFydCB0aGUgZ2FtZSBsb29wXG4gIGdhbWVMb29wKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbn1cblxuLy8gR2FtZSBvdmVyIGZ1bmN0aW9uXG5mdW5jdGlvbiBnYW1lb3ZlcihwbGF5ZXJPbmVPYmplY3QsIHBsYXllclR3b09iamVjdCkge1xuICBpZiAocGxheWVyT25lT2JqZWN0LmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgcmV0dXJuIHBsYXllclR3b09iamVjdDtcbiAgfVxuICBpZiAocGxheWVyVHdvT2JqZWN0LmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgcmV0dXJuIHBsYXllck9uZU9iamVjdDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBTdGFydCBnYW1lIGxvb3BcbmFzeW5jIGZ1bmN0aW9uIGdhbWVMb29wKHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gIHdoaWxlIChnYW1lb3ZlcihwbGF5ZXJPbmUsIHBsYXllclR3bykgPT09IG51bGwpIHtcbiAgICAvLyBQbGF5ZXIgT25lJ3MgdHVyblxuICAgIGF3YWl0IHBsYXllclR1cm4ocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gICAgaWYgKGdhbWVvdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKSAhPT0gbnVsbCkge1xuICAgICAgYnJlYWs7IC8vIEV4aXQgdGhlIGxvb3AgaWYgdGhlIGdhbWUgaXMgb3ZlclxuICAgIH1cblxuICAgIC8vIFBsYXllciBUd28ncyB0dXJuXG4gICAgYXdhaXQgcGxheWVyVHVybihwbGF5ZXJUd28sIHBsYXllck9uZSk7XG4gIH1cblxuICAvLyBHYW1lIG92ZXJcbiAgaWYgKGdhbWVvdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PT0gcGxheWVyT25lKSB7XG4gICAgYWxlcnQoJ1BsYXllciBPbmUgV2lucycpO1xuICB9IGVsc2UgaWYgKGdhbWVvdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PT0gcGxheWVyVHdvKSB7XG4gICAgYWxlcnQoJ1BsYXllciBUd28gV2lucycpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBsYXllclR1cm4oY3VycmVudFBsYXllciwgb3Bwb25lbnQpIHtcbiAgY29uc3QgY29vcmRzID0gYXdhaXQgY3VycmVudFBsYXllci5nZXRUdXJuQ29vcmRpbmF0ZXMob3Bwb25lbnQpO1xuICBvcHBvbmVudC5ib2FyZC5yZWNlaXZlSGl0KGNvb3Jkcyk7XG4gIGRyYXdIaXRzKHBsYXllck9uZSwgcGxheWVyVHdvKTtcblxuICBpZiAoIWN1cnJlbnRQbGF5ZXIuaXNDb21wdXRlclBsYXllcikge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcbiAgfVxufVxuXG4vLyBDYWxsIHRoZSBnYW1lU2V0dXAgZnVuY3Rpb24gdG8gaW5pdGlhdGUgdGhlIGdhbWVcbmdhbWVTZXR1cCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9