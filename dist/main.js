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

.formBoardHolder {
  border: 1px solid rgb(19, 19, 19);
  z-index: 9;
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
  width: min(3vh, 3vw);
  height: min(3vh, 3vw);
}

.valid {
  background-color: aquamarine;
}


#playerTwoGameboardContainer > div > div > div.square.hitShipSquare {
  background-color: rgb(173, 0, 0);
}

#playerTwoGameboardContainer > div > div > div.square.missedSquare {
  background-color: rgb(0, 255, 85);
}

.invalid {
  background-color: red;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;;;;CAIC;;AAED;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wEAAwE;AAC1E;AACA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;EACjC,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,uBAAuB;;AAEzB;;AAEA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;EACnC,iCAAiC;EACjC,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,4BAA4B;AAC9B;;;AAGA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,YAAY;EACZ,4BAA4B;EAC5B,+BAA+B;EAC/B,WAAW;EACX,YAAY;;AAEd,aAAa;AACb,8BAA8B;AAC9B,qCAAqC;;AAErC,qBAAqB;AACrB,mBAAmB;AACnB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;;EAEX,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\n\n\n\n*/\n\nbody {\n  display: flex;\n  justify-content: center;\n}\n\n#contentContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 80vw;\n  background-color: aqua;\n  border: 3px solid red;\n  justify-items: center;\n}\n\n#titleContainer {\n  height: 15vh;\n  grid-column: span 2;\n  font-size: 5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.gameboardContainer > div {\n  border: 1px solid rgb(19, 19, 19);\n}\n\n.formBoardHolder {\n  border: 1px solid rgb(19, 19, 19);\n  z-index: 9;\n}\n\n.gameboardContainer {\n  grid-column: span 1;\n  display: flex;\n  justify-content: center;\n\n}\n\n.rowHolder {\n  display: flex;\n}\n#informationContainer {\n  grid-column: span 2;\n  display: grid;\n  grid-template-columns: 35vw 5vw 35vw;\n  text-align: center;\n  font-size: 2vw;\n  width: 75vw;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n}\n\n#playerTwoGameboardContainer > div > div > div.square:hover {\n  background-color: rgb(238, 174, 0);\n}\n\n.square {\n  background-color: rgb(12, 166, 255);\n  border: 1px solid rgb(19, 19, 19);\n  width: min(3vh, 3vw);\n  height: min(3vh, 3vw);\n}\n\n.valid {\n  background-color: aquamarine;\n}\n\n\n#playerTwoGameboardContainer > div > div > div.square.hitShipSquare {\n  background-color: rgb(173, 0, 0);\n}\n\n#playerTwoGameboardContainer > div > div > div.square.missedSquare {\n  background-color: rgb(0, 255, 85);\n}\n\n.invalid {\n  background-color: red;\n}\n\n.shipSquare {\n  background-color: rgb(24, 24, 24);\n}\n\n.hitShipSquare {\n  background-color: rgb(173, 0, 0);\n}\n\n.missedSquare {\n  background-color: rgb(0, 255, 85);\n}\n\n.overlay {\n  background-color: rgb(0, 0, 0, 0.2);\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 8;\n}\n\n.formContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 9;\n  transform: translate(-50%, -50%);\n  padding: 5vw;\n  background-color: blueviolet;\n  border: 3px solid rgb(9, 7, 12);\n  width: 60vw;\n  height: 60vh;\n\ndisplay: grid;\ngrid-template-columns: 1fr 1fr;\ngrid-template-rows: 0.5fr 1fr 1fr 2fr;\n\njustify-items: center;\nalign-items: center;\n}\n\n.shipDisplay {\n  background-color: black;\n  grid-column: span 2;\n  grid-row-start: 2;\n}\n.ship-5.horizontal {\n  height: 3vw;\n  width: 15vw;\n}\n\n.ship-5.vertical {\n  height: 15vw;\n  width: 3vw;\n}\n\n.ship-4.horizontal {\n  height: 3vw;\n  width: 12vw;\n}\n\n.ship-4.vertical {\n  height: 12vw;\n  width: 3vw;\n}\n\n.ship-3.horizontal {\n  height: 3vw;\n  width: 9vw;\n}\n\n.ship-3.vertical {\n  height: 9vw;\n  width: 3vw;\n}\n\n.ship-2.horizontal {\n  height: 3vw;\n  width: 6vw;\n}\n\n.ship-2.vertical {\n  height: 6vw;\n  width: 3vw;\n}\n\n.verticalButton {\n  border-radius: 3vw;\n  height: 5vh;\n  width: 20vw;\n\n  grid-column: span 2;\n  grid-row-start:3;\n}\n\n.formBoardHolder {\n  grid-column: span 2;\n  grid-row-start: 4;\n}\n\n.shipText {\n  grid-row-start: 1;\n  grid-column: span 2;\n}"],"sourceRoot":""}]);
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

      // add event listener for hover

      square.addEventListener('mouseover', () => {
        const coordinates = [row, column];
        const shipSize = gameboard.shipsOnBoard.length
        < 5 ? [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length] : null;

        if (gameboard.isValidMove(shipSize, isVertical, coordinates)) {
          square.classList.add('valid');

          for (let i = shipSize - 1; i > 0; i -= 1) {
            if (isVertical) {
              const additionalSquare = document
                .querySelector(`#square-${coordinates[0] + i}-${coordinates[1]}`);
              additionalSquare.classList.add('valid');
            } else {
              const additionalSquare = document
                .querySelector(`#square-${coordinates[0]}-${coordinates[1] + i}`);
              additionalSquare.classList.add('valid');
            }
          }
        } else {
          square.classList.add('invalid');
       }
      });

      square.addEventListener('mouseout', () => {
        const shipSize = gameboard.shipsOnBoard.length
        < 5 ? [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length] : null;
        const coordinates = [row, column];
        square.classList.remove('invalid');
        square.classList.remove('valid');

        for (let i = shipSize - 1; i > 0; i -= 1) {
          if (isVertical) {
            const additionalSquare = document
              .querySelector(`#square-${coordinates[0] + i}-${coordinates[1]}`);
              if (additionalSquare !== null) {
                additionalSquare.classList.remove('valid');
                additionalSquare.classList.remove('invalid');
                  }
          } else {
            const additionalSquare = document
              .querySelector(`#square-${coordinates[0]}-${coordinates[1] + i}`);

              if (additionalSquare !== null) {
            additionalSquare.classList.remove('valid');
            additionalSquare.classList.remove('invalid');
              }
          }
        }

      });

      // Add event listener for ship placement
      square.addEventListener('click', () => {
        const shipSize = gameboard.shipsOnBoard.length < 5 ? [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length] : null;
        const coordinates = [row, column];

        if (shipSize && gameboard.isValidMove(shipSize, isVertical, coordinates)) {
          gameboard.addShipToGameboard(shipSize, isVertical, coordinates);
          drawShips(gameboard);

          // Update the ship display to NEXT placed ship
          updateShipDisplay([5, 4, 3, 3, 2][gameboard.shipsOnBoard.length]);

          // update ship text
          updateShipText(
            ['Carrier', 'Battleship', 'Submarine',
              'Cruiser', 'Destroyer'][gameboard.shipsOnBoard.length],
            [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length],
          );

          // Check if all ships have been placed
          if (gameboard.shipsOnBoard.length === 5) {
            // remove UI
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
    // update ship text
    updateShipText(
      ['Carrier', 'Battleship', 'Submarine',
        'Cruiser', 'Destroyer'][gameboard.shipsOnBoard.length],
      [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length],
    );

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxP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QUFJRzs7QUFFeEIsa0JBQWtCLG1CQUFPLENBQUMsdUNBQWE7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLGlDQUFVOztBQUVqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsOERBQWU7O0FBRTNDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4REFBZTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDJEQUFZO0FBQ2QsRUFBRSx3REFBUztBQUNYOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHVEQUFROztBQUVWO0FBQ0EsMkJBQTJCLDZEQUFjO0FBQ3pDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFROztBQUVWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKlxuXG5cblxuKi9cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jY29udGVudENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgd2lkdGg6IDgwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4jdGl0bGVDb250YWluZXIge1xuICBoZWlnaHQ6IDE1dmg7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLmdhbWVib2FyZENvbnRhaW5lciA+IGRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcbn1cblxuLmZvcm1Cb2FyZEhvbGRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcbiAgei1pbmRleDogOTtcbn1cblxuLmdhbWVib2FyZENvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG5cbi5yb3dIb2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2luZm9ybWF0aW9uQ29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXZ3IDV2dyAzNXZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICB3aWR0aDogNzV2dztcbiAgcGFkZGluZy10b3A6IDJ2aDtcbiAgcGFkZGluZy1ib3R0b206IDJ2aDtcbn1cblxuI3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lciA+IGRpdiA+IGRpdiA+IGRpdi5zcXVhcmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxNzQsIDApO1xufVxuXG4uc3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxNjYsIDI1NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcbiAgd2lkdGg6IG1pbigzdmgsIDN2dyk7XG4gIGhlaWdodDogbWluKDN2aCwgM3Z3KTtcbn1cblxuLnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbn1cblxuXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZS5oaXRTaGlwU3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XG59XG5cbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlLm1pc3NlZFNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDg1KTtcbn1cblxuLmludmFsaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zaGlwU3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xufVxuXG4uaGl0U2hpcFNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDAsIDApO1xufVxuXG4ubWlzc2VkU3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgODUpO1xufVxuXG4ub3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjIpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogODtcbn1cblxuLmZvcm1Db250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiA1dnc7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYig5LCA3LCAxMik7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDYwdmg7XG5cbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5ncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAxZnIgMmZyO1xuXG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hpcERpc3BsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG59XG4uc2hpcC01Lmhvcml6b250YWwge1xuICBoZWlnaHQ6IDN2dztcbiAgd2lkdGg6IDE1dnc7XG59XG5cbi5zaGlwLTUudmVydGljYWwge1xuICBoZWlnaHQ6IDE1dnc7XG4gIHdpZHRoOiAzdnc7XG59XG5cbi5zaGlwLTQuaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogM3Z3O1xuICB3aWR0aDogMTJ2dztcbn1cblxuLnNoaXAtNC52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTJ2dztcbiAgd2lkdGg6IDN2dztcbn1cblxuLnNoaXAtMy5ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAzdnc7XG4gIHdpZHRoOiA5dnc7XG59XG5cbi5zaGlwLTMudmVydGljYWwge1xuICBoZWlnaHQ6IDl2dztcbiAgd2lkdGg6IDN2dztcbn1cblxuLnNoaXAtMi5ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAzdnc7XG4gIHdpZHRoOiA2dnc7XG59XG5cbi5zaGlwLTIudmVydGljYWwge1xuICBoZWlnaHQ6IDZ2dztcbiAgd2lkdGg6IDN2dztcbn1cblxuLnZlcnRpY2FsQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogM3Z3O1xuICBoZWlnaHQ6IDV2aDtcbiAgd2lkdGg6IDIwdnc7XG5cbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZ3JpZC1yb3ctc3RhcnQ6Mztcbn1cblxuLmZvcm1Cb2FyZEhvbGRlciB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xufVxuXG4uc2hpcFRleHQge1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBOzs7O0NBSUM7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3RUFBd0U7QUFDMUU7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7OztBQUdBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFlBQVk7O0FBRWQsYUFBYTtBQUNiLDhCQUE4QjtBQUM5QixxQ0FBcUM7O0FBRXJDLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7O0VBRVgsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKlxcblxcblxcblxcbiovXFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB3aWR0aDogODB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0aXRsZUNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZm9udC1zaXplOiA1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG4uZ2FtZWJvYXJkQ29udGFpbmVyID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcXG59XFxuXFxuLmZvcm1Cb2FyZEhvbGRlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XFxuICB6LWluZGV4OiA5O1xcbn1cXG5cXG4uZ2FtZWJvYXJkQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5yb3dIb2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI2luZm9ybWF0aW9uQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXZ3IDV2dyAzNXZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAydnc7XFxuICB3aWR0aDogNzV2dztcXG4gIHBhZGRpbmctdG9wOiAydmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAxNzQsIDApO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTY2LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xcbiAgd2lkdGg6IG1pbigzdmgsIDN2dyk7XFxuICBoZWlnaHQ6IG1pbigzdmgsIDN2dyk7XFxufVxcblxcbi52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG5cXG5cXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZS5oaXRTaGlwU3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDAsIDApO1xcbn1cXG5cXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZS5taXNzZWRTcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgODUpO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zaGlwU3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG59XFxuXFxuLmhpdFNoaXBTcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XFxufVxcblxcbi5taXNzZWRTcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgODUpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA4O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHBhZGRpbmc6IDV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoOSwgNywgMTIpO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IDYwdmg7XFxuXFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnIgMWZyIDJmcjtcXG5cXG5qdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXBEaXNwbGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbn1cXG4uc2hpcC01Lmhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAzdnc7XFxuICB3aWR0aDogMTV2dztcXG59XFxuXFxuLnNoaXAtNS52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDE1dnc7XFxuICB3aWR0aDogM3Z3O1xcbn1cXG5cXG4uc2hpcC00Lmhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAzdnc7XFxuICB3aWR0aDogMTJ2dztcXG59XFxuXFxuLnNoaXAtNC52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDEydnc7XFxuICB3aWR0aDogM3Z3O1xcbn1cXG5cXG4uc2hpcC0zLmhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAzdnc7XFxuICB3aWR0aDogOXZ3O1xcbn1cXG5cXG4uc2hpcC0zLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogOXZ3O1xcbiAgd2lkdGg6IDN2dztcXG59XFxuXFxuLnNoaXAtMi5ob3Jpem9udGFsIHtcXG4gIGhlaWdodDogM3Z3O1xcbiAgd2lkdGg6IDZ2dztcXG59XFxuXFxuLnNoaXAtMi52ZXJ0aWNhbCB7XFxuICBoZWlnaHQ6IDZ2dztcXG4gIHdpZHRoOiAzdnc7XFxufVxcblxcbi52ZXJ0aWNhbEJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAzdnc7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIHdpZHRoOiAyMHZ3O1xcblxcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGdyaWQtcm93LXN0YXJ0OjM7XFxufVxcblxcbi5mb3JtQm9hcmRIb2xkZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xcbn1cXG5cXG4uc2hpcFRleHQge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcblxuZnVuY3Rpb24gZmlyc3RET00oKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudENvbnRhaW5lci5pZCA9ICdjb250ZW50Q29udGFpbmVyJztcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVDb250YWluZXIuaWQgPSAndGl0bGVDb250YWluZXInO1xuXG4gIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllck9uZUdhbWVib2FyZENvbnRhaW5lci5pZCA9ICdwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXInO1xuICBwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkQ29udGFpbmVyJyk7XG4gIGNvbnN0IHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIuaWQgPSAncGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyJztcbiAgcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZENvbnRhaW5lcicpO1xuICBjb25zdCBpbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvcm1hdGlvbkNvbnRhaW5lci5pZCA9ICdpbmZvcm1hdGlvbkNvbnRhaW5lcic7XG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9ybWF0aW9uQ29udGFpbmVyKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBnYW1lYm9hcmRET00ocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgY29uc3QgcGxheWVyT25lTmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwbGF5ZXJPbmVOYW1lVGV4dC50ZXh0Q29udGVudCA9IHBsYXllck9uZS5wbGF5ZXJOYW1lO1xuICBjb25zdCBwbGF5ZXJUd29OYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHBsYXllclR3b05hbWVUZXh0LnRleHRDb250ZW50ID0gcGxheWVyVHdvLnBsYXllck5hbWU7XG5cbiAgY29uc3QgaW5mb3JtYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mb3JtYXRpb25Db250YWluZXInKTtcbiAgY29uc3QgVlN0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgVlN0ZXh0LnRleHRDb250ZW50ID0gJ1ZTLic7XG4gIGluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZU5hbWVUZXh0KTtcbiAgaW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoVlN0ZXh0KTtcbiAgaW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyVHdvTmFtZVRleHQpO1xuXG4gIGNvbnN0IHBsYXllck9uZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBsYXllclR3b0JvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3dIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3dIb2xkZXIuaWQgPSBgcm93SG9sZGVyLSR7aX1gO1xuICAgIHJvd0hvbGRlci5jbGFzc0xpc3QuYWRkKCdyb3dIb2xkZXInKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyT25lLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5pZCA9IGBzcXVhcmUtJHtpfS0ke2p9YDtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIHJvd0hvbGRlci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cblxuICAgIHBsYXllck9uZUJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0hvbGRlcik7XG4gIH1cblxuICBjb25zdCBtYWluUGxheWVyT25lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllck9uZUdhbWVib2FyZENvbnRhaW5lcicpO1xuICBtYWluUGxheWVyT25lQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkQ29udGFpbmVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllclR3by5ib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvd0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvd0hvbGRlci5pZCA9IGByb3dIb2xkZXItJHtpfWA7XG4gICAgcm93SG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Jvd0hvbGRlcicpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJUd28uYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmlkID0gYDJzcXVhcmUtJHtpfS0ke2p9YDtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgIHJvd0hvbGRlci5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cblxuICAgIHBsYXllclR3b0JvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0hvbGRlcik7XG4gIH1cblxuICBjb25zdCBtYWluUGxheWVyVHdvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcicpO1xuICBtYWluUGxheWVyVHdvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZHJhd1NoaXBzKGJvYXJkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlID0gYm9hcmQuYm9hcmRbaV1bal07XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNxdWFyZS0ke2l9LSR7an1gKTtcbiAgICAgIGlmIChjdXJyZW50U3F1YXJlIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICBjdXJyZW50U3F1YXJlRE9NLmNsYXNzTGlzdC5hZGQoJ3NoaXBTcXVhcmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd0hpdHMocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllck9uZS5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3QgY3VycmVudFNxdWFyZVBsYXllck9uZSA9IHBsYXllck9uZS5ib2FyZC5ib2FyZFtpXVtqXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJUd28gPSBwbGF5ZXJUd28uYm9hcmQuYm9hcmRbaV1bal07XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlUGxheWVyT25lRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNxdWFyZS0ke2l9LSR7an1gKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJUd29ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMnNxdWFyZS0ke2l9LSR7an1gKTtcblxuICAgICAgLy8gUGxheWVyIE9uZVxuICAgICAgaWYgKHBsYXllck9uZS5ib2FyZC5zaG90c1JlY2VpdmVkLnNvbWUoKGNvb3JkcykgPT4gY29vcmRzWzBdID09PSBpICYmIGNvb3Jkc1sxXSA9PT0gaikpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTcXVhcmVQbGF5ZXJPbmUgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgY3VycmVudFNxdWFyZVBsYXllck9uZURPTS5jbGFzc0xpc3QuYWRkKCdoaXRTaGlwU3F1YXJlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFNxdWFyZVBsYXllck9uZURPTS5jbGFzc0xpc3QuYWRkKCdtaXNzZWRTcXVhcmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQbGF5ZXIgVHdvXG4gICAgICBpZiAocGxheWVyVHdvLmJvYXJkLnNob3RzUmVjZWl2ZWQuc29tZSgoY29vcmRzKSA9PiBjb29yZHNbMF0gPT09IGkgJiYgY29vcmRzWzFdID09PSBqKSkge1xuICAgICAgICBpZiAoY3VycmVudFNxdWFyZVBsYXllclR3byBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyVHdvRE9NLmNsYXNzTGlzdC5hZGQoJ2hpdFNoaXBTcXVhcmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyVHdvRE9NLmNsYXNzTGlzdC5hZGQoJ21pc3NlZFNxdWFyZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwbGF5ZXJOYW1lRm9ybSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBiYWNraW5nIG92ZXJsYXlcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gZWxlbWVudFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRleHQgaW5wdXQgZm9yIHRoZSBwbGF5ZXIgbmFtZVxuICAgIGNvbnN0IHBsYXllck5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGxheWVyTmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgcGxheWVyTmFtZUlucHV0Lm5hbWUgPSAncGxheWVyTmFtZSc7XG4gICAgcGxheWVyTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgbmFtZSc7XG4gICAgcGxheWVyTmFtZUlucHV0Lm1heExlbmd0aCA9IDMwO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocGxheWVyTmFtZUlucHV0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSAnU3VibWl0JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAvLyBBZGQgdGhlIGZvcm0gdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vIEFkZCB0aGUgZm9ybSBjb250YWluZXIgYW5kIG92ZXJsYXkgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uXG5cbiAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5ZXJOYW1lSW5wdXQudmFsdWU7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgZm9ybSBhbmQgb3ZlcmxheSBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAgZm9ybUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG5cbiAgICAgIHJlc29sdmUocGxheWVyTmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlck5hbWUoKSB7XG4gIGxldCBjb21wdXRlck5hbWU7XG5cbiAgc3dpdGNoIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpIHtcbiAgICBjYXNlIDA6XG4gICAgICBjb21wdXRlck5hbWUgPSAnQ29tcHV0ZXJpbmEnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ01vdXN0b3BoZXInO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ0Rlc2tlbGxlJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdNb25pdG9yZXR0ZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBjb21wdXRlck5hbWUgPSAnS2V5Ym9hcmRhbnRoYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBjb21wdXRlck5hbWUgPSAnQ29kZWxsYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDY6XG4gICAgICBjb21wdXRlck5hbWUgPSAnTmV0YWxpZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc6XG4gICAgICBjb21wdXRlck5hbWUgPSAnQnJvd3NlZGl0aCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDg6XG4gICAgICBjb21wdXRlck5hbWUgPSAnRGF0YXRob255JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgOTpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdBYXJhbSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ1Vua25vd24nO1xuICB9XG5cbiAgcmV0dXJuIGNvbXB1dGVyTmFtZTtcbn1cblxuLy8gRGVjbGFyZSBhbmQgaW5pdGlhbGlzZSB0aGUgaXNWZXJ0aWNhbCB2YXJpYWJsZVxubGV0IGlzVmVydGljYWwgPSBmYWxzZTtcblxuLy8gQ3JlYXRlIHRoZSBzaGlwIGRpc3BsYXkgZWxlbWVudFxuY29uc3Qgc2hpcERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNoaXBEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3NoaXBEaXNwbGF5Jyk7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHNoaXAgZGlzcGxheSBjbGFzc1xuZnVuY3Rpb24gdXBkYXRlU2hpcERpc3BsYXkoc2hpcFNpemUpIHtcbiAgc2hpcERpc3BsYXkuY2xhc3NOYW1lID0gYHNoaXBEaXNwbGF5IHNoaXAtJHtzaGlwU2l6ZX0gJHtpc1ZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJ31gO1xufVxuXG5jb25zdCBzaGlwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnNoaXBUZXh0LmNsYXNzTGlzdC5hZGQoJ3NoaXBUZXh0Jyk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVNoaXBUZXh0KHNoaXBOYW1lLCBzaGlwTGVuZ3RoKSB7XG4gIHNoaXBUZXh0LnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtzaGlwTmFtZX0sICR7c2hpcExlbmd0aH0gbGVuZ3RoYDtcbn1cblxuLy8gQ3JlYXRlIHRoZSBwbGF5ZXJNb3Zlc0Zvcm0gZnVuY3Rpb25cbmZ1bmN0aW9uIHBsYXllck1vdmVzRm9ybShnYW1lYm9hcmQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBiYWNraW5nIG92ZXJsYXlcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gZWxlbWVudFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAvLyBBZGQgdGhlIGZvcm0gdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vIEFkZCB0aGUgZm9ybSBjb250YWluZXIgYW5kIG92ZXJsYXkgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICAvLyBHZW5lcmF0ZSBET00gZWxlbWVudHMgZm9yIGdhbWVib2FyZFxuICAgIGNvbnN0IHBsYXllck9uZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyT25lQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUJvYXJkSG9sZGVyJyk7XG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHNxdWFyZSBlbGVtZW50c1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVNxdWFyZShyb3csIGNvbHVtbikge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuaWQgPSBgc3F1YXJlLSR7cm93fS0ke2NvbHVtbn1gO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuXG4gICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgZm9yIGhvdmVyXG5cbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3JvdywgY29sdW1uXTtcbiAgICAgICAgY29uc3Qgc2hpcFNpemUgPSBnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aFxuICAgICAgICA8IDUgPyBbNSwgNCwgMywgMywgMl1bZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGhdIDogbnVsbDtcblxuICAgICAgICBpZiAoZ2FtZWJvYXJkLmlzVmFsaWRNb3ZlKHNoaXBTaXplLCBpc1ZlcnRpY2FsLCBjb29yZGluYXRlcykpIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgndmFsaWQnKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSBzaGlwU2l6ZSAtIDE7IGkgPiAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFkZGl0aW9uYWxTcXVhcmUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjc3F1YXJlLSR7Y29vcmRpbmF0ZXNbMF0gKyBpfS0ke2Nvb3JkaW5hdGVzWzFdfWApO1xuICAgICAgICAgICAgICBhZGRpdGlvbmFsU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsU3F1YXJlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihgI3NxdWFyZS0ke2Nvb3JkaW5hdGVzWzBdfS0ke2Nvb3JkaW5hdGVzWzFdICsgaX1gKTtcbiAgICAgICAgICAgICAgYWRkaXRpb25hbFNxdWFyZS5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBTaXplID0gZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGhcbiAgICAgICAgPCA1ID8gWzUsIDQsIDMsIDMsIDJdW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3JvdywgY29sdW1uXTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHNoaXBTaXplIC0gMTsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICAgIGlmIChpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsU3F1YXJlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCNzcXVhcmUtJHtjb29yZGluYXRlc1swXSArIGl9LSR7Y29vcmRpbmF0ZXNbMV19YCk7XG4gICAgICAgICAgICAgIGlmIChhZGRpdGlvbmFsU3F1YXJlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbFNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhZGRpdGlvbmFsU3F1YXJlID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCNzcXVhcmUtJHtjb29yZGluYXRlc1swXX0tJHtjb29yZGluYXRlc1sxXSArIGl9YCk7XG5cbiAgICAgICAgICAgICAgaWYgKGFkZGl0aW9uYWxTcXVhcmUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgICAgICAgICAgIGFkZGl0aW9uYWxTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHNoaXAgcGxhY2VtZW50XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBTaXplID0gZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCA1ID8gWzUsIDQsIDMsIDMsIDJdW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3JvdywgY29sdW1uXTtcblxuICAgICAgICBpZiAoc2hpcFNpemUgJiYgZ2FtZWJvYXJkLmlzVmFsaWRNb3ZlKHNoaXBTaXplLCBpc1ZlcnRpY2FsLCBjb29yZGluYXRlcykpIHtcbiAgICAgICAgICBnYW1lYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKHNoaXBTaXplLCBpc1ZlcnRpY2FsLCBjb29yZGluYXRlcyk7XG4gICAgICAgICAgZHJhd1NoaXBzKGdhbWVib2FyZCk7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNoaXAgZGlzcGxheSB0byBORVhUIHBsYWNlZCBzaGlwXG4gICAgICAgICAgdXBkYXRlU2hpcERpc3BsYXkoWzUsIDQsIDMsIDMsIDJdW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSk7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgc2hpcCB0ZXh0XG4gICAgICAgICAgdXBkYXRlU2hpcFRleHQoXG4gICAgICAgICAgICBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdTdWJtYXJpbmUnLFxuICAgICAgICAgICAgICAnQ3J1aXNlcicsICdEZXN0cm95ZXInXVtnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aF0sXG4gICAgICAgICAgICBbNSwgNCwgMywgMywgMl1bZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGhdLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAgICAgICAgIGlmIChnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIFVJXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSB3aXRoIHRoZSB1cGRhdGVkIGdhbWVib2FyZFxuICAgICAgICAgICAgcmVzb2x2ZShnYW1lYm9hcmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzcXVhcmU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvd0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93SG9sZGVyLmlkID0gYHJvd0hvbGRlci0ke2l9YDtcbiAgICAgIHJvd0hvbGRlci5jbGFzc0xpc3QuYWRkKCdyb3dIb2xkZXInKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlU3F1YXJlKGksIGopO1xuICAgICAgICByb3dIb2xkZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cblxuICAgICAgcGxheWVyT25lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93SG9sZGVyKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIFwiSXMgVmVydGljYWw/XCIgYnV0dG9uXG4gICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gJ0lzIFZlcnRpY2FsPyc7XG4gICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsQnV0dG9uJyk7XG5cbiAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpc1ZlcnRpY2FsID0gIWlzVmVydGljYWw7IC8vIFRvZ2dsZSB0aGUgYm9vbGVhbiB2YWx1ZVxuICAgICAgdXBkYXRlU2hpcERpc3BsYXkoWzUsIDQsIDMsIDMsIDJdW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSk7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHNoaXAgZGlzcGxheSB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBEaXNwbGF5KTtcbiAgICB1cGRhdGVTaGlwRGlzcGxheSg1KTtcbiAgICAvLyB1cGRhdGUgc2hpcCB0ZXh0XG4gICAgdXBkYXRlU2hpcFRleHQoXG4gICAgICBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdTdWJtYXJpbmUnLFxuICAgICAgICAnQ3J1aXNlcicsICdEZXN0cm95ZXInXVtnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aF0sXG4gICAgICBbNSwgNCwgMywgMywgMl1bZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGhdLFxuICAgICk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHRvZ2dsZSBidXR0b24gdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVCdXR0b24pO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcFRleHQpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lciB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkQ29udGFpbmVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIGZpcnN0RE9NLCBnYW1lYm9hcmRET00sIGRyYXdTaGlwcywgZHJhd0hpdHMsXG4gIHBsYXllck5hbWVGb3JtLCBnZXRDb21wdXRlck5hbWUsIHBsYXllck1vdmVzRm9ybSxcbn07XG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIHRoaXMuc2hpcHNPbkJvYXJkID0gW107XG4gICAgdGhpcy5zaG90c1JlY2VpdmVkID0gW107XG4gIH1cblxuICAvLyByZXR1cm5zIGFuIEVNUFRZIDEweDEwIGFycmF5LCAwLCAwIGlzIHRvcCBsZWZ0XG4gIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IG5ldyBBcnJheSgxMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCk7XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIGlzVmFsaWRNb3ZlKGxlbmd0aCwgaXNWZXJ0aWNhbCwgc3RhcnRJbmRleCkge1xuICAgIGNvbnN0IHBvc2l0aW9uQXJyYXkgPSBbXTtcblxuICAgIC8vIHNoaXAgaXMgaW5zaWRlIHRoZSBnYW1lYm9hcmRcbiAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKChsZW5ndGggKyBzdGFydEluZGV4WzBdKSA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBwb3NpdGlvbkFycmF5LnB1c2goW1xuICAgICAgICAgIHN0YXJ0SW5kZXhbMF0gKyBpLFxuICAgICAgICAgIHN0YXJ0SW5kZXhbMV0sXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1ZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgaWYgKChsZW5ndGggKyBzdGFydEluZGV4WzFdKSA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBwb3NpdGlvbkFycmF5LnB1c2goW1xuICAgICAgICAgIHN0YXJ0SW5kZXhbMF0sXG4gICAgICAgICAgc3RhcnRJbmRleFsxXSArIGksXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNoaXAgaXMgbm90IGRpcmVjdGx5IG5leHQgdG8gYW5vdGhlciBzaGlwXG4gICAgY29uc3QgYWZmZWN0ZWRTcXVhcmVzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25BcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gZm9yIGVhY2ggYWRkIHRoZSBzdXJyb3VuZGluZyBzcXVhcmVzIGFuZCBzZWxmXG4gICAgICAvLyB0byBhZmZlY3RlZCBzcXVhcmVzIGFycmF5XG4gICAgICAvLyB0aGVuIGNoZWNrIHRoaXMuYm9hcmQgZm9yIFNoaXAgb2JqZWN0cyBpbiB0aG9zZSBwb3NpdGlvbnNcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gLSAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdIC0gMSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSAtIDEsXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0sXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gLSAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdICsgMSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSAtIDEsXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0sXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0sXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0sXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gKyAxLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdICsgMSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSAtIDEsXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gKyAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdICsgMSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSArIDEsXG4gICAgICBdKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFmZmVjdGVkU3F1YXJlc0FycmF5Lmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCB4ID0gYWZmZWN0ZWRTcXVhcmVzQXJyYXlbal1bMF07XG4gICAgICBjb25zdCB5ID0gYWZmZWN0ZWRTcXVhcmVzQXJyYXlbal1bMV07XG5cbiAgICAgIGlmICh4ID49IDAgJiYgeCA8PSA5ICYmIHkgPj0gMCAmJiB5IDw9IDkpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhZGRTaGlwVG9HYW1lYm9hcmQobGVuZ3RoLCBpc1ZlcnRpY2FsLCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZE1vdmUobGVuZ3RoLCBpc1ZlcnRpY2FsLCBzdGFydEluZGV4KSkge1xuICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgICB0aGlzLnNoaXBzT25Cb2FyZC5wdXNoKG5ld1NoaXApO1xuXG4gICAgICBjb25zdCBpbmRleFplcm8gPSBzdGFydEluZGV4WzBdO1xuICAgICAgY29uc3QgaW5kZXhPbmUgPSBzdGFydEluZGV4WzFdO1xuXG4gICAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXhaZXJvOyBpIDwgbGVuZ3RoICsgaW5kZXhaZXJvOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2luZGV4T25lXSA9IG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleE9uZTsgaSA8IChsZW5ndGggKyBpbmRleE9uZSk7IGkgKz0gMSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhaZXJvXVtpXSA9IG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IHJldHVybiAnaW52YWxpZCBtb3ZlJztcbiAgfVxuXG4gIHJlY2VpdmVIaXQoaGl0TG9jYXRpb24pIHtcbiAgICBjb25zdCB4ID0gaGl0TG9jYXRpb25bMF07XG4gICAgY29uc3QgeSA9IGhpdExvY2F0aW9uWzFdO1xuXG4gICAgLy8gZmluZCBpbnZhbGlkIHNob3QgKG5vdCBvbiBnYW1lYm9hcmQpXG4gICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSB7XG4gICAgICByZXR1cm4gJ2ludmFsaWQgc2hvdCc7XG4gICAgfVxuICAgIC8vIGZpbmQgaW52YWxpZCBzaG90IChkdWlwbGljYXRlIHNob3QpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNob3RzUmVjZWl2ZWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh4ID09PSB0aGlzLnNob3RzUmVjZWl2ZWRbaV1bMF0gJiYgeSA9PT0gdGhpcy5zaG90c1JlY2VpdmVkW2ldWzFdKSB7XG4gICAgICAgIHJldHVybiAnaW52YWxpZCBzaG90JztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcHVzaCBzaG90IHRvIHNob3RzIHJlY2VpdmVkIGFycmF5XG4gICAgdGhpcy5zaG90c1JlY2VpdmVkLnB1c2goaGl0TG9jYXRpb24pO1xuXG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beV0uaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuICdzdW5rIHNoaXAnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdoaXQgc2hpcCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdzaG90IG1pc3NlZCc7XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgbGV0IHN1bmtTaGlwcyA9IDA7XG4gICAgY29uc3QgYWxsU2hpcHMgPSB0aGlzLnNoaXBzT25Cb2FyZC5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNoaXBzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gdGhpcy5zaGlwc09uQm9hcmRbaV07XG5cbiAgICAgIGlmIChjdXJyZW50U2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vua1NoaXBzID09PSBhbGxTaGlwcztcbiAgfVxuXG4gIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgfVxuXG4gIGdlbmVyYXRlQ29tcHV0ZXJQb3NpdGlvbnMoYm9hcmQpIHtcbiAgICAvL2FkZCB0d28gMyBsZW5ndGggc2hpcHNcbiAgICB3aGlsZSAoYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA8IDIpIHtcbiAgICAgIGxldCByZXN1bHRWZXJ0aWNhbCA9IHRydWU7XG4gICAgY29uc3QgZGVjaWRlVmVydGljYWwgPSB0aGlzLmdldFJhbmRvbUludCgyKTtcblxuICAgIGlmIChkZWNpZGVWZXJ0aWNhbCA9PT0gMCkge1xuICAgICAgcmVzdWx0VmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgIGNvbnN0IHNlY29uZENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuXG4gICAgYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDMsIHJlc3VsdFZlcnRpY2FsLCBbZmlyc3RDb29yZCwgc2Vjb25kQ29vcmRdKTtcbiAgICB9XG4gICAgLy9hZGQgYW5vdGhlciBzaGlwIG9mIDIgbGVuZ3RoXG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCAzKSB7XG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xuICAgIGNvbnN0IGRlY2lkZVZlcnRpY2FsID0gdGhpcy5nZXRSYW5kb21JbnQoMik7XG5cbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcbiAgICAgIHJlc3VsdFZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcblxuICAgIGJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCgyLCByZXN1bHRWZXJ0aWNhbCwgW2ZpcnN0Q29vcmQsIHNlY29uZENvb3JkXSk7XG4gICAgfVxuICAgIC8vYWRkIGFub3RoZXIgc2hpcCBvZiA0IGxlbmd0aFxuICAgIHdoaWxlIChib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNCkge1xuICAgICAgbGV0IHJlc3VsdFZlcnRpY2FsID0gdHJ1ZTtcbiAgICBjb25zdCBkZWNpZGVWZXJ0aWNhbCA9IHRoaXMuZ2V0UmFuZG9tSW50KDIpO1xuXG4gICAgaWYgKGRlY2lkZVZlcnRpY2FsID09PSAwKSB7XG4gICAgICByZXN1bHRWZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgY29uc3Qgc2Vjb25kQ29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG5cbiAgICBib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoNCwgcmVzdWx0VmVydGljYWwsIFtmaXJzdENvb3JkLCBzZWNvbmRDb29yZF0pO1xuICAgIH1cbiAgICAvL2FkZCB0aGUgbGFzdCBzaGlwIG9mIDUgbGVuZ3RoXG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCA1KSB7XG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xuICAgIGNvbnN0IGRlY2lkZVZlcnRpY2FsID0gdGhpcy5nZXRSYW5kb21JbnQoMik7XG5cbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcbiAgICAgIHJlc3VsdFZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcblxuICAgIGJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCg1LCByZXN1bHRWZXJ0aWNhbCwgW2ZpcnN0Q29vcmQsIHNlY29uZENvb3JkXSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi4vc3JjL2dhbWVib2FyZCcpO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXJOYW1lLCBib2FyZCwgaXNDb21wdXRlclBsYXllcikge1xuICAgIHRoaXMucGxheWVyTmFtZSA9IHBsYXllck5hbWU7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgIHRoaXMuaXNDb21wdXRlclBsYXllciA9IGlzQ29tcHV0ZXJQbGF5ZXI7XG4gIH1cblxuICBnZXRUdXJuQ29vcmRpbmF0ZXMob3Bwb25lbnQpIHtcbiAgICBpZiAodGhpcy5pc0NvbXB1dGVyUGxheWVyKSB7XG4gICAgICBjb25zdCB7IHNob3RzUmVjZWl2ZWQgfSA9IG9wcG9uZW50LmJvYXJkO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAxMDsgYSArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgMTA7IGIgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBbYSwgYl07XG4gICAgICAgICAgaWYgKCFzaG90c1JlY2VpdmVkLnNvbWUoKFt4LCB5XSkgPT4geCA9PT0gYSAmJiB5ID09PSBiKSkge1xuICAgICAgICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBjb29yZGluYXRlcycpOyBcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGgpO1xuICAgICAgY29uc3QgW2EsIGJdID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXNbcmFuZG9tSW5kZXhdO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbYSwgYl0pOyAvLyBSZXR1cm4gYSByZXNvbHZlZCBwcm9taXNlIHdpdGggdGhlIHJhbmRvbSBhdmFpbGFibGUgY29vcmRpbmF0ZXNcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEdhbWVib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXInKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcXVhcmUnKSkge1xuICAgICAgICAgIGNvbnN0IGEgPSBwYXJzZUludChlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdLCAxMCk7XG4gICAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMl0sIDEwKTtcblxuICAgICAgICAgIGNvbnN0IHsgc2hvdHNSZWNlaXZlZCB9ID0gb3Bwb25lbnQuYm9hcmQ7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb29yZGluYXRlID0gW2EsIGJdO1xuXG4gICAgICAgICAgaWYgKHNob3RzUmVjZWl2ZWQuc29tZSgoW3gsIHldKSA9PiB4ID09PSBhICYmIHkgPT09IGIpKSB7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldEdhbWVib2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZWN0ZWRDb29yZGluYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGFyZ2V0R2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmFuZG9tSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICB9XG5cbiAgZ2VuZXJhdGVDb21wdXRlclBvc2l0aW9ucyhib2FyZCkge1xuICAgIHdoaWxlIChib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNSkge1xuICAgICAgbGV0IHJlc3VsdFZlcnRpY2FsID0gdHJ1ZTtcbiAgICBjb25zdCBkZWNpZGVWZXJ0aWNhbCA9IHRoaXMuZ2V0UmFuZG9tSW50KDIpO1xuXG4gICAgaWYgKGRlY2lkZVZlcnRpY2FsID09PSAwKSB7XG4gICAgICByZXN1bHRWZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgY29uc3Qgc2Vjb25kQ29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG5cbiAgICBib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoMiwgcmVzdWx0VmVydGljYWwsIFtmaXJzdENvb3JkLCBzZWNvbmRDb29yZF0pO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIHJldHVybiB0aGlzLmhpdHM7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBkcmF3SGl0cywgZHJhd1NoaXBzLCBmaXJzdERPTSwgZ2FtZWJvYXJkRE9NLFxuICBwbGF5ZXJOYW1lRm9ybSwgZ2V0Q29tcHV0ZXJOYW1lLCBwbGF5ZXJNb3Zlc0Zvcm0sXG59IGZyb20gJy4vRE9NZnVuY3Rpb25zJztcblxuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5cbmxldCBwbGF5ZXJPbmU7XG5sZXQgcGxheWVyVHdvO1xuXG5hc3luYyBmdW5jdGlvbiBzZXR1cFBsYXllcnMocGxheWVyTmFtZSkge1xuICAvLyBDcmVhdGUgZ2FtZWJvYXJkIHdpdGggNSBzaGlwcyBGT1IgRUFDSCBwbGF5ZXJcbiAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBsYXllck1vdmVzID0gYXdhaXQgcGxheWVyTW92ZXNGb3JtKHBsYXllck9uZUdhbWVib2FyZCk7XG5cbiAgLy8gcGxheWVyT25lR2FtZWJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCg1LCBmYWxzZSwgWzEsIDFdKTtcblxuICAvL3NjcmV3IHRoZSBhcnJheSBqdXN0IHB1dCBhIGdhbWVib2FyZCBpbnRvIHRoZSBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSBjb21wbGV0ZWQgZ2FtZWJvYXJkXG5cbiAgY29uc3QgcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICBwbGF5ZXJUd29HYW1lYm9hcmQuZ2VuZXJhdGVDb21wdXRlclBvc2l0aW9ucyhwbGF5ZXJUd29HYW1lYm9hcmQpO1xuICBjb25zb2xlLmxvZyhwbGF5ZXJUd29HYW1lYm9hcmQpO1xuICBjb25zdCBjb21wdXRlck5hbWUgPSBnZXRDb21wdXRlck5hbWUoKTtcblxuICAvLyBDcmVhdGUgcGxheWVyIDFcbiAgcGxheWVyT25lID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lLCBwbGF5ZXJNb3ZlcywgZmFsc2UpO1xuICAvLyBDcmVhdGUgcGxheWVyIDIgKGNvbXB1dGVyKVxuICBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKGNvbXB1dGVyTmFtZSwgcGxheWVyVHdvR2FtZWJvYXJkLCB0cnVlKTtcblxuICAvLyBEcmF3IGdhbWVib2FyZHNcbiAgZ2FtZWJvYXJkRE9NKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgZHJhd1NoaXBzKHBsYXllck9uZS5ib2FyZCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdhbWVTZXR1cCgpIHtcbiAgLy8gRmlyc3QgcGFnZSBsb2FkLCBnZW5lcmF0ZXMgc2tlbGV0b24gb2Ygd2Vic2l0ZSwgY29udGFpbmVycywgYW5kIHRpdGxlXG4gIGZpcnN0RE9NKCk7XG5cbiAgLy8gVG8gc3RhcnQgdGhlIGdhbWUsIGNvbGxlY3QgdGhlIHBsYXllciBuYW1lXG4gIGNvbnN0IHBsYXllck5hbWUgPSBhd2FpdCBwbGF5ZXJOYW1lRm9ybSgpO1xuICBjb25zb2xlLmxvZygnUGxheWVyIE5hbWU6JywgcGxheWVyTmFtZSk7XG5cbiAgYXdhaXQgc2V0dXBQbGF5ZXJzKHBsYXllck5hbWUpO1xuXG4gIC8vIFN0YXJ0IHRoZSBnYW1lIGxvb3BcbiAgZ2FtZUxvb3AocGxheWVyT25lLCBwbGF5ZXJUd28pO1xufVxuXG4vLyBHYW1lIG92ZXIgZnVuY3Rpb25cbmZ1bmN0aW9uIGdhbWVvdmVyKHBsYXllck9uZU9iamVjdCwgcGxheWVyVHdvT2JqZWN0KSB7XG4gIGlmIChwbGF5ZXJPbmVPYmplY3QuYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICByZXR1cm4gcGxheWVyVHdvT2JqZWN0O1xuICB9XG4gIGlmIChwbGF5ZXJUd29PYmplY3QuYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICByZXR1cm4gcGxheWVyT25lT2JqZWN0O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIFN0YXJ0IGdhbWUgbG9vcFxuYXN5bmMgZnVuY3Rpb24gZ2FtZUxvb3AocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgd2hpbGUgKGdhbWVvdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PT0gbnVsbCkge1xuICAgIC8vIFBsYXllciBPbmUncyB0dXJuXG4gICAgYXdhaXQgcGxheWVyVHVybihwbGF5ZXJPbmUsIHBsYXllclR3byk7XG5cbiAgICBpZiAoZ2FtZW92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pICE9PSBudWxsKSB7XG4gICAgICBicmVhazsgLy8gRXhpdCB0aGUgbG9vcCBpZiB0aGUgZ2FtZSBpcyBvdmVyXG4gICAgfVxuXG4gICAgLy8gUGxheWVyIFR3bydzIHR1cm5cbiAgICBhd2FpdCBwbGF5ZXJUdXJuKHBsYXllclR3bywgcGxheWVyT25lKTtcbiAgfVxuXG4gIC8vIEdhbWUgb3ZlclxuICBpZiAoZ2FtZW92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pID09PSBwbGF5ZXJPbmUpIHtcbiAgICBhbGVydCgnUGxheWVyIE9uZSBXaW5zJyk7XG4gIH0gZWxzZSBpZiAoZ2FtZW92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pID09PSBwbGF5ZXJUd28pIHtcbiAgICBhbGVydCgnUGxheWVyIFR3byBXaW5zJyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcGxheWVyVHVybihjdXJyZW50UGxheWVyLCBvcHBvbmVudCkge1xuICBjb25zdCBjb29yZHMgPSBhd2FpdCBjdXJyZW50UGxheWVyLmdldFR1cm5Db29yZGluYXRlcyhvcHBvbmVudCk7XG4gIG9wcG9uZW50LmJvYXJkLnJlY2VpdmVIaXQoY29vcmRzKTtcbiAgZHJhd0hpdHMocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gIGlmICghY3VycmVudFBsYXllci5pc0NvbXB1dGVyUGxheWVyKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICB9XG59XG5cbi8vIENhbGwgdGhlIGdhbWVTZXR1cCBmdW5jdGlvbiB0byBpbml0aWF0ZSB0aGUgZ2FtZVxuZ2FtZVNldHVwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=