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

      //add event listener for hover

      square.addEventListener('mouseover', () => {
        const coordinates = [row, column];
        const shipSize = gameboard.shipsOnBoard.length
        < 5 ? [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length] : null;

        if (gameboard.isValidMove(shipSize, isVertical, coordinates)) {
          square.classList.add('valid');
        }

        else {
          square.classList.add('invalid');
        }
      });

      square.addEventListener('mouseout', () => {
        square.classList.remove('invalid');
        square.classList.remove('valid');
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

              //update ship text
              updateShipText(['Carrier', 'Battleship', 'Submarine',
              'Cruiser', 'Destroyer'][gameboard.shipsOnBoard.length],
              [5, 4, 3, 3, 2][gameboard.shipsOnBoard.length]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxP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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLFVBQVUsRUFBRSx1Q0FBdUM7QUFDakc7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxTQUFTLElBQUksWUFBWTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSSxHQUFHLE9BQU87QUFDMUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVE7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET01mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qXG5cblxuXG4qL1xuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjb250ZW50Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB3aWR0aDogODB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbiN0aXRsZUNvbnRhaW5lciB7XG4gIGhlaWdodDogMTV2aDtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZm9udC1zaXplOiA1dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4uZ2FtZWJvYXJkQ29udGFpbmVyID4gZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xufVxuXG4uZm9ybUJvYXJkSG9sZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xuICB6LWluZGV4OiA5O1xufVxuXG4uZ2FtZWJvYXJkQ29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbn1cblxuLnJvd0hvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jaW5mb3JtYXRpb25Db250YWluZXIge1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1dncgNXZ3IDM1dnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAydnc7XG4gIHdpZHRoOiA3NXZ3O1xuICBwYWRkaW5nLXRvcDogMnZoO1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xufVxuXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE3NCwgMCk7XG59XG5cbi5zcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDE2NiwgMjU1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xuICB3aWR0aDogbWluKDN2aCwgM3Z3KTtcbiAgaGVpZ2h0OiBtaW4oM3ZoLCAzdncpO1xufVxuXG4udmFsaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuXG5cbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlLmhpdFNoaXBTcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAwLCAwKTtcbn1cblxuI3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lciA+IGRpdiA+IGRpdiA+IGRpdi5zcXVhcmUubWlzc2VkU3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgODUpO1xufVxuXG4uaW52YWxpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNoaXBTcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG59XG5cbi5oaXRTaGlwU3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XG59XG5cbi5taXNzZWRTcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCA4NSk7XG59XG5cbi5vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMik7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA4O1xufVxuXG4uZm9ybUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDogOTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDV2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDksIDcsIDEyKTtcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogNjB2aDtcblxuZGlzcGxheTogZ3JpZDtcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbmdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyIDFmciAyZnI7XG5cbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaGlwRGlzcGxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICBncmlkLXJvdy1zdGFydDogMjtcbn1cbi5zaGlwLTUuaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogM3Z3O1xuICB3aWR0aDogMTV2dztcbn1cblxuLnNoaXAtNS52ZXJ0aWNhbCB7XG4gIGhlaWdodDogMTV2dztcbiAgd2lkdGg6IDN2dztcbn1cblxuLnNoaXAtNC5ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAzdnc7XG4gIHdpZHRoOiAxMnZ3O1xufVxuXG4uc2hpcC00LnZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAxMnZ3O1xuICB3aWR0aDogM3Z3O1xufVxuXG4uc2hpcC0zLmhvcml6b250YWwge1xuICBoZWlnaHQ6IDN2dztcbiAgd2lkdGg6IDl2dztcbn1cblxuLnNoaXAtMy52ZXJ0aWNhbCB7XG4gIGhlaWdodDogOXZ3O1xuICB3aWR0aDogM3Z3O1xufVxuXG4uc2hpcC0yLmhvcml6b250YWwge1xuICBoZWlnaHQ6IDN2dztcbiAgd2lkdGg6IDZ2dztcbn1cblxuLnNoaXAtMi52ZXJ0aWNhbCB7XG4gIGhlaWdodDogNnZ3O1xuICB3aWR0aDogM3Z3O1xufVxuXG4udmVydGljYWxCdXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzdnc7XG4gIGhlaWdodDogNXZoO1xuICB3aWR0aDogMjB2dztcblxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICBncmlkLXJvdy1zdGFydDozO1xufVxuXG4uZm9ybUJvYXJkSG9sZGVyIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XG59XG5cbi5zaGlwVGV4dCB7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdFQUF3RTtBQUMxRTtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7O0FBR0E7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsWUFBWTs7QUFFZCxhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLHFDQUFxQzs7QUFFckMscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVzs7RUFFWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qXFxuXFxuXFxuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RpdGxlQ29udGFpbmVyIHtcXG4gIGhlaWdodDogMTV2aDtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBmb250LXNpemU6IDV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbi5nYW1lYm9hcmRDb250YWluZXIgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xcbn1cXG5cXG4uZm9ybUJvYXJkSG9sZGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcXG4gIHotaW5kZXg6IDk7XFxufVxcblxcbi5nYW1lYm9hcmRDb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnJvd0hvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jaW5mb3JtYXRpb25Db250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1dncgNXZ3IDM1dnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJ2dztcXG4gIHdpZHRoOiA3NXZ3O1xcbiAgcGFkZGluZy10b3A6IDJ2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAydmg7XFxufVxcblxcbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDE3NCwgMCk7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxNjYsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XFxuICB3aWR0aDogbWluKDN2aCwgM3Z3KTtcXG4gIGhlaWdodDogbWluKDN2aCwgM3Z3KTtcXG59XFxuXFxuLnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcblxcbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlLmhpdFNoaXBTcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XFxufVxcblxcbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlLm1pc3NlZFNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCA4NSk7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNoaXBTcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbn1cXG5cXG4uaGl0U2hpcFNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAwLCAwKTtcXG59XFxuXFxuLm1pc3NlZFNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCA4NSk7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogOTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYig5LCA3LCAxMik7XFxuICB3aWR0aDogNjB2dztcXG4gIGhlaWdodDogNjB2aDtcXG5cXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmciAxZnIgMmZyO1xcblxcbmp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcERpc3BsYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxufVxcbi5zaGlwLTUuaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDN2dztcXG4gIHdpZHRoOiAxNXZ3O1xcbn1cXG5cXG4uc2hpcC01LnZlcnRpY2FsIHtcXG4gIGhlaWdodDogMTV2dztcXG4gIHdpZHRoOiAzdnc7XFxufVxcblxcbi5zaGlwLTQuaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDN2dztcXG4gIHdpZHRoOiAxMnZ3O1xcbn1cXG5cXG4uc2hpcC00LnZlcnRpY2FsIHtcXG4gIGhlaWdodDogMTJ2dztcXG4gIHdpZHRoOiAzdnc7XFxufVxcblxcbi5zaGlwLTMuaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDN2dztcXG4gIHdpZHRoOiA5dnc7XFxufVxcblxcbi5zaGlwLTMudmVydGljYWwge1xcbiAgaGVpZ2h0OiA5dnc7XFxuICB3aWR0aDogM3Z3O1xcbn1cXG5cXG4uc2hpcC0yLmhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAzdnc7XFxuICB3aWR0aDogNnZ3O1xcbn1cXG5cXG4uc2hpcC0yLnZlcnRpY2FsIHtcXG4gIGhlaWdodDogNnZ3O1xcbiAgd2lkdGg6IDN2dztcXG59XFxuXFxuLnZlcnRpY2FsQnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDN2dztcXG4gIGhlaWdodDogNXZoO1xcbiAgd2lkdGg6IDIwdnc7XFxuXFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6MztcXG59XFxuXFxuLmZvcm1Cb2FyZEhvbGRlciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XFxufVxcblxcbi5zaGlwVGV4dCB7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5mdW5jdGlvbiBmaXJzdERPTSgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q29udGFpbmVyLmlkID0gJ2NvbnRlbnRDb250YWluZXInO1xuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZUNvbnRhaW5lci5pZCA9ICd0aXRsZUNvbnRhaW5lcic7XG5cbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyLmlkID0gJ3BsYXllck9uZUdhbWVib2FyZENvbnRhaW5lcic7XG4gIHBsYXllck9uZUdhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmRDb250YWluZXInKTtcbiAgY29uc3QgcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lci5pZCA9ICdwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXInO1xuICBwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkQ29udGFpbmVyJyk7XG4gIGNvbnN0IGluZm9ybWF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm9ybWF0aW9uQ29udGFpbmVyLmlkID0gJ2luZm9ybWF0aW9uQ29udGFpbmVyJztcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb3JtYXRpb25Db250YWluZXIpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGdhbWVib2FyZERPTShwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICBjb25zdCBwbGF5ZXJPbmVOYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHBsYXllck9uZU5hbWVUZXh0LnRleHRDb250ZW50ID0gcGxheWVyT25lLnBsYXllck5hbWU7XG4gIGNvbnN0IHBsYXllclR3b05hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcGxheWVyVHdvTmFtZVRleHQudGV4dENvbnRlbnQgPSBwbGF5ZXJUd28ucGxheWVyTmFtZTtcblxuICBjb25zdCBpbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvcm1hdGlvbkNvbnRhaW5lcicpO1xuICBjb25zdCBWU3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBWU3RleHQudGV4dENvbnRlbnQgPSAnVlMuJztcbiAgaW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lTmFtZVRleHQpO1xuICBpbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChWU3RleHQpO1xuICBpbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd29OYW1lVGV4dCk7XG5cbiAgY29uc3QgcGxheWVyT25lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGxheWVyVHdvQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllck9uZS5ib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvd0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvd0hvbGRlci5pZCA9IGByb3dIb2xkZXItJHtpfWA7XG4gICAgcm93SG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Jvd0hvbGRlcicpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmlkID0gYHNxdWFyZS0ke2l9LSR7an1gO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgcm93SG9sZGVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuXG4gICAgcGxheWVyT25lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93SG9sZGVyKTtcbiAgfVxuXG4gIGNvbnN0IG1haW5QbGF5ZXJPbmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyJyk7XG4gIG1haW5QbGF5ZXJPbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmRDb250YWluZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyVHdvLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93SG9sZGVyLmlkID0gYHJvd0hvbGRlci0ke2l9YDtcbiAgICByb3dIb2xkZXIuY2xhc3NMaXN0LmFkZCgncm93SG9sZGVyJyk7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllclR3by5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuaWQgPSBgMnNxdWFyZS0ke2l9LSR7an1gO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgcm93SG9sZGVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuXG4gICAgcGxheWVyVHdvQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93SG9sZGVyKTtcbiAgfVxuXG4gIGNvbnN0IG1haW5QbGF5ZXJUd29Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyJyk7XG4gIG1haW5QbGF5ZXJUd29Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmRDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkcmF3U2hpcHMoYm9hcmQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmUgPSBib2FyZC5ib2FyZFtpXVtqXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3F1YXJlLSR7aX0tJHtqfWApO1xuICAgICAgaWYgKGN1cnJlbnRTcXVhcmUgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgIGN1cnJlbnRTcXVhcmVET00uY2xhc3NMaXN0LmFkZCgnc2hpcFNxdWFyZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3SGl0cyhwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllck9uZS5ib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyT25lLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlUGxheWVyT25lID0gcGxheWVyT25lLmJvYXJkLmJvYXJkW2ldW2pdO1xuICAgICAgY29uc3QgY3VycmVudFNxdWFyZVBsYXllclR3byA9IHBsYXllclR3by5ib2FyZC5ib2FyZFtpXVtqXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJPbmVET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3F1YXJlLSR7aX0tJHtqfWApO1xuICAgICAgY29uc3QgY3VycmVudFNxdWFyZVBsYXllclR3b0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAyc3F1YXJlLSR7aX0tJHtqfWApO1xuXG4gICAgICAvLyBQbGF5ZXIgT25lXG4gICAgICBpZiAocGxheWVyT25lLmJvYXJkLnNob3RzUmVjZWl2ZWQuc29tZSgoY29vcmRzKSA9PiBjb29yZHNbMF0gPT09IGkgJiYgY29vcmRzWzFdID09PSBqKSkge1xuICAgICAgICBpZiAoY3VycmVudFNxdWFyZVBsYXllck9uZSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyT25lRE9NLmNsYXNzTGlzdC5hZGQoJ2hpdFNoaXBTcXVhcmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyT25lRE9NLmNsYXNzTGlzdC5hZGQoJ21pc3NlZFNxdWFyZScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYXllciBUd29cbiAgICAgIGlmIChwbGF5ZXJUd28uYm9hcmQuc2hvdHNSZWNlaXZlZC5zb21lKChjb29yZHMpID0+IGNvb3Jkc1swXSA9PT0gaSAmJiBjb29yZHNbMV0gPT09IGopKSB7XG4gICAgICAgIGlmIChjdXJyZW50U3F1YXJlUGxheWVyVHdvIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgIGN1cnJlbnRTcXVhcmVQbGF5ZXJUd29ET00uY2xhc3NMaXN0LmFkZCgnaGl0U2hpcFNxdWFyZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRTcXVhcmVQbGF5ZXJUd29ET00uY2xhc3NMaXN0LmFkZCgnbWlzc2VkU3F1YXJlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHBsYXllck5hbWVGb3JtKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIENyZWF0ZSB0aGUgZm9ybSBjb250YWluZXJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGJhY2tpbmcgb3ZlcmxheVxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgZm9ybSBlbGVtZW50XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgdGV4dCBpbnB1dCBmb3IgdGhlIHBsYXllciBuYW1lXG4gICAgY29uc3QgcGxheWVyTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwbGF5ZXJOYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBwbGF5ZXJOYW1lSW5wdXQubmFtZSA9ICdwbGF5ZXJOYW1lJztcbiAgICBwbGF5ZXJOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBuYW1lJztcbiAgICBwbGF5ZXJOYW1lSW5wdXQubWF4TGVuZ3RoID0gMzA7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lSW5wdXQpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ1dHRvbi52YWx1ZSA9ICdTdWJtaXQnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgIC8vIEFkZCB0aGUgZm9ybSB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy8gQWRkIHRoZSBmb3JtIGNvbnRhaW5lciBhbmQgb3ZlcmxheSB0byB0aGUgZG9jdW1lbnQgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBmb3JtIHN1Ym1pc3Npb25cblxuICAgICAgY29uc3QgcGxheWVyTmFtZSA9IHBsYXllck5hbWVJbnB1dC52YWx1ZTtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBmb3JtIGFuZCBvdmVybGF5IGZyb20gdGhlIGRvY3VtZW50XG4gICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcblxuICAgICAgcmVzb2x2ZShwbGF5ZXJOYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVyTmFtZSgpIHtcbiAgbGV0IGNvbXB1dGVyTmFtZTtcblxuICBzd2l0Y2ggKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkge1xuICAgIGNhc2UgMDpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdDb21wdXRlcmluYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBjb21wdXRlck5hbWUgPSAnTW91c3RvcGhlcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBjb21wdXRlck5hbWUgPSAnRGVza2VsbGUnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ01vbml0b3JldHRlJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdLZXlib2FyZGFudGhhJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdDb2RlbGxhJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdOZXRhbGllJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdCcm93c2VkaXRoJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdEYXRhdGhvbnknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA5OlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ0FhcmFtJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb21wdXRlck5hbWUgPSAnVW5rbm93bic7XG4gIH1cblxuICByZXR1cm4gY29tcHV0ZXJOYW1lO1xufVxuXG5cbiAgICAvLyBEZWNsYXJlIGFuZCBpbml0aWFsaXNlIHRoZSBpc1ZlcnRpY2FsIHZhcmlhYmxlXG4gICAgbGV0IGlzVmVydGljYWwgPSBmYWxzZTtcbiAgICBcbi8vIENyZWF0ZSB0aGUgc2hpcCBkaXNwbGF5IGVsZW1lbnRcbmNvbnN0IHNoaXBEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zaGlwRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdzaGlwRGlzcGxheScpO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBzaGlwIGRpc3BsYXkgY2xhc3NcbmZ1bmN0aW9uIHVwZGF0ZVNoaXBEaXNwbGF5KHNoaXBTaXplKSB7XG4gIHNoaXBEaXNwbGF5LmNsYXNzTmFtZSA9IGBzaGlwRGlzcGxheSBzaGlwLSR7c2hpcFNpemV9ICR7aXNWZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCd9YDtcbn1cblxuY29uc3Qgc2hpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5zaGlwVGV4dC5jbGFzc0xpc3QuYWRkKCdzaGlwVGV4dCcpO1xuXG5mdW5jdGlvbiB1cGRhdGVTaGlwVGV4dChzaGlwTmFtZSwgc2hpcExlbmd0aCkge1xuICBzaGlwVGV4dC50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyICR7c2hpcE5hbWV9LCAke3NoaXBMZW5ndGh9IGxlbmd0aGA7XG59XG5cbi8vIENyZWF0ZSB0aGUgcGxheWVyTW92ZXNGb3JtIGZ1bmN0aW9uXG5mdW5jdGlvbiBwbGF5ZXJNb3Zlc0Zvcm0oZ2FtZWJvYXJkKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gQ3JlYXRlIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXInKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgYmFja2luZyBvdmVybGF5XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBmb3JtIGVsZW1lbnRcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgLy8gQWRkIHRoZSBmb3JtIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAvLyBBZGQgdGhlIGZvcm0gY29udGFpbmVyIGFuZCBvdmVybGF5IHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgLy8gR2VuZXJhdGUgRE9NIGVsZW1lbnRzIGZvciBnYW1lYm9hcmRcbiAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllck9uZUJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Cb2FyZEhvbGRlcicpO1xuXG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHNxdWFyZSBlbGVtZW50c1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVNxdWFyZShyb3csIGNvbHVtbikge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuaWQgPSBgc3F1YXJlLSR7cm93fS0ke2NvbHVtbn1gO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuXG4gICAgICAvL2FkZCBldmVudCBsaXN0ZW5lciBmb3IgaG92ZXJcblxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbcm93LCBjb2x1bW5dO1xuICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IGdhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXG4gICAgICAgIDwgNSA/IFs1LCA0LCAzLCAzLCAyXVtnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aF0gOiBudWxsO1xuXG4gICAgICAgIGlmIChnYW1lYm9hcmQuaXNWYWxpZE1vdmUoc2hpcFNpemUsIGlzVmVydGljYWwsIGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCd2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciBzaGlwIHBsYWNlbWVudFxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwU2l6ZSA9IGdhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNSA/IFs1LCA0LCAzLCAzLCAyXVtnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aF0gOiBudWxsO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtyb3csIGNvbHVtbl07XG4gICAgICAgIFxuICAgICAgICBpZiAoc2hpcFNpemUgJiYgZ2FtZWJvYXJkLmlzVmFsaWRNb3ZlKHNoaXBTaXplLCBpc1ZlcnRpY2FsLCBjb29yZGluYXRlcykpIHtcbiAgICAgICAgICBnYW1lYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKHNoaXBTaXplLCBpc1ZlcnRpY2FsLCBjb29yZGluYXRlcyk7XG4gICAgICAgICAgZHJhd1NoaXBzKGdhbWVib2FyZCk7XG5cbiAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNoaXAgZGlzcGxheSB0byBORVhUIHBsYWNlZCBzaGlwXG4gICAgICAgICAgdXBkYXRlU2hpcERpc3BsYXkoWzUsIDQsIDMsIDMsIDJdW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSk7XG5cbiAgICAgICAgICAgICAgLy91cGRhdGUgc2hpcCB0ZXh0XG4gICAgICAgICAgICAgIHVwZGF0ZVNoaXBUZXh0KFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ1N1Ym1hcmluZScsXG4gICAgICAgICAgICAgICdDcnVpc2VyJywgJ0Rlc3Ryb3llciddW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSxcbiAgICAgICAgICAgICAgWzUsIDQsIDMsIDMsIDJdW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSk7XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAgICAgICAgIGlmIChnYW1lYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIFVJXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSB3aXRoIHRoZSB1cGRhdGVkIGdhbWVib2FyZFxuICAgICAgICAgICAgcmVzb2x2ZShnYW1lYm9hcmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzcXVhcmU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvd0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93SG9sZGVyLmlkID0gYHJvd0hvbGRlci0ke2l9YDtcbiAgICAgIHJvd0hvbGRlci5jbGFzc0xpc3QuYWRkKCdyb3dIb2xkZXInKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYW1lYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gY3JlYXRlU3F1YXJlKGksIGopO1xuICAgICAgICByb3dIb2xkZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cblxuICAgICAgcGxheWVyT25lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93SG9sZGVyKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIFwiSXMgVmVydGljYWw/XCIgYnV0dG9uXG4gICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gJ0lzIFZlcnRpY2FsPyc7XG4gICAgdG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsQnV0dG9uJyk7XG5cbiAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpc1ZlcnRpY2FsID0gIWlzVmVydGljYWw7IC8vIFRvZ2dsZSB0aGUgYm9vbGVhbiB2YWx1ZVxuICAgICAgdXBkYXRlU2hpcERpc3BsYXkoWzUsIDQsIDMsIDMsIDJdW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSk7XG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHNoaXAgZGlzcGxheSB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBEaXNwbGF5KTtcbiAgICB1cGRhdGVTaGlwRGlzcGxheSg1KTtcbiAgICAgICAgICAgICAgLy91cGRhdGUgc2hpcCB0ZXh0XG4gICAgICAgICAgICAgIHVwZGF0ZVNoaXBUZXh0KFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ1N1Ym1hcmluZScsXG4gICAgICAgICAgICAgICdDcnVpc2VyJywgJ0Rlc3Ryb3llciddW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSxcbiAgICAgICAgICAgICAgWzUsIDQsIDMsIDMsIDJdW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHRvZ2dsZSBidXR0b24gdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVCdXR0b24pO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcFRleHQpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lciB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkQ29udGFpbmVyKTtcbiAgfSk7XG59XG5cblxuXG5cblxuXG5leHBvcnQge1xuICBmaXJzdERPTSwgZ2FtZWJvYXJkRE9NLCBkcmF3U2hpcHMsIGRyYXdIaXRzLFxuICBwbGF5ZXJOYW1lRm9ybSwgZ2V0Q29tcHV0ZXJOYW1lLCBwbGF5ZXJNb3Zlc0Zvcm0sXG59OyIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAnKTtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5zaGlwc09uQm9hcmQgPSBbXTtcbiAgICB0aGlzLnNob3RzUmVjZWl2ZWQgPSBbXTtcbiAgfVxuXG4gIC8vIHJldHVybnMgYW4gRU1QVFkgMTB4MTAgYXJyYXksIDAsIDAgaXMgdG9wIGxlZnRcbiAgY3JlYXRlR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KDEwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgaXNWYWxpZE1vdmUobGVuZ3RoLCBpc1ZlcnRpY2FsLCBzdGFydEluZGV4KSB7XG4gICAgY29uc3QgcG9zaXRpb25BcnJheSA9IFtdO1xuXG4gICAgLy8gc2hpcCBpcyBpbnNpZGUgdGhlIGdhbWVib2FyZFxuICAgIGlmIChpc1ZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICBpZiAoKGxlbmd0aCArIHN0YXJ0SW5kZXhbMF0pID4gMTApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHBvc2l0aW9uQXJyYXkucHVzaChbXG4gICAgICAgICAgc3RhcnRJbmRleFswXSArIGksXG4gICAgICAgICAgc3RhcnRJbmRleFsxXSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICBpZiAoKGxlbmd0aCArIHN0YXJ0SW5kZXhbMV0pID4gMTApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHBvc2l0aW9uQXJyYXkucHVzaChbXG4gICAgICAgICAgc3RhcnRJbmRleFswXSxcbiAgICAgICAgICBzdGFydEluZGV4WzFdICsgaSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2hpcCBpcyBub3QgZGlyZWN0bHkgbmV4dCB0byBhbm90aGVyIHNoaXBcbiAgICBjb25zdCBhZmZlY3RlZFNxdWFyZXNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbkFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBmb3IgZWFjaCBhZGQgdGhlIHN1cnJvdW5kaW5nIHNxdWFyZXMgYW5kIHNlbGZcbiAgICAgIC8vIHRvIGFmZmVjdGVkIHNxdWFyZXMgYXJyYXlcbiAgICAgIC8vIHRoZW4gY2hlY2sgdGhpcy5ib2FyZCBmb3IgU2hpcCBvYmplY3RzIGluIHRob3NlIHBvc2l0aW9uc1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSAtIDEsXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gLSAxLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdIC0gMSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSAtIDEsXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gKyAxLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdIC0gMSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSArIDEsXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gKyAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdIC0gMSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSArIDEsXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0sXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gKyAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdICsgMSxcbiAgICAgIF0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWZmZWN0ZWRTcXVhcmVzQXJyYXkubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHggPSBhZmZlY3RlZFNxdWFyZXNBcnJheVtqXVswXTtcbiAgICAgIGNvbnN0IHkgPSBhZmZlY3RlZFNxdWFyZXNBcnJheVtqXVsxXTtcblxuICAgICAgaWYgKHggPj0gMCAmJiB4IDw9IDkgJiYgeSA+PSAwICYmIHkgPD0gOSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFkZFNoaXBUb0dhbWVib2FyZChsZW5ndGgsIGlzVmVydGljYWwsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkTW92ZShsZW5ndGgsIGlzVmVydGljYWwsIHN0YXJ0SW5kZXgpKSB7XG4gICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgIHRoaXMuc2hpcHNPbkJvYXJkLnB1c2gobmV3U2hpcCk7XG5cbiAgICAgIGNvbnN0IGluZGV4WmVybyA9IHN0YXJ0SW5kZXhbMF07XG4gICAgICBjb25zdCBpbmRleE9uZSA9IHN0YXJ0SW5kZXhbMV07XG5cbiAgICAgIGlmIChpc1ZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleFplcm87IGkgPCBsZW5ndGggKyBpbmRleFplcm87IGkgKz0gMSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaV1baW5kZXhPbmVdID0gbmV3U2hpcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4T25lOyBpIDwgKGxlbmd0aCArIGluZGV4T25lKTsgaSArPSAxKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFtpbmRleFplcm9dW2ldID0gbmV3U2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gcmV0dXJuICdpbnZhbGlkIG1vdmUnO1xuICB9XG5cbiAgcmVjZWl2ZUhpdChoaXRMb2NhdGlvbikge1xuICAgIGNvbnN0IHggPSBoaXRMb2NhdGlvblswXTtcbiAgICBjb25zdCB5ID0gaGl0TG9jYXRpb25bMV07XG5cbiAgICAvLyBmaW5kIGludmFsaWQgc2hvdCAobm90IG9uIGdhbWVib2FyZClcbiAgICBpZiAoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIHtcbiAgICAgIHJldHVybiAnaW52YWxpZCBzaG90JztcbiAgICB9XG4gICAgLy8gZmluZCBpbnZhbGlkIHNob3QgKGR1aXBsaWNhdGUgc2hvdClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hvdHNSZWNlaXZlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHggPT09IHRoaXMuc2hvdHNSZWNlaXZlZFtpXVswXSAmJiB5ID09PSB0aGlzLnNob3RzUmVjZWl2ZWRbaV1bMV0pIHtcbiAgICAgICAgcmV0dXJuICdpbnZhbGlkIHNob3QnO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBwdXNoIHNob3QgdG8gc2hvdHMgcmVjZWl2ZWQgYXJyYXlcbiAgICB0aGlzLnNob3RzUmVjZWl2ZWQucHVzaChoaXRMb2NhdGlvbik7XG5cbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4XVt5XS5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gJ3N1bmsgc2hpcCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ2hpdCBzaGlwJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ3Nob3QgbWlzc2VkJztcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgc3Vua1NoaXBzID0gMDtcbiAgICBjb25zdCBhbGxTaGlwcyA9IHRoaXMuc2hpcHNPbkJvYXJkLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2hpcHM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY3VycmVudFNoaXAgPSB0aGlzLnNoaXBzT25Cb2FyZFtpXTtcblxuICAgICAgaWYgKGN1cnJlbnRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdW5rU2hpcHMgPT09IGFsbFNoaXBzO1xuICB9XG5cbiAgZ2V0UmFuZG9tSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICB9XG5cbiAgZ2VuZXJhdGVDb21wdXRlclBvc2l0aW9ucyhib2FyZCkge1xuICAgIC8vYWRkIHR3byAzIGxlbmd0aCBzaGlwc1xuICAgIHdoaWxlIChib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgMikge1xuICAgICAgbGV0IHJlc3VsdFZlcnRpY2FsID0gdHJ1ZTtcbiAgICBjb25zdCBkZWNpZGVWZXJ0aWNhbCA9IHRoaXMuZ2V0UmFuZG9tSW50KDIpO1xuXG4gICAgaWYgKGRlY2lkZVZlcnRpY2FsID09PSAwKSB7XG4gICAgICByZXN1bHRWZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgY29uc3Qgc2Vjb25kQ29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG5cbiAgICBib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoMywgcmVzdWx0VmVydGljYWwsIFtmaXJzdENvb3JkLCBzZWNvbmRDb29yZF0pO1xuICAgIH1cbiAgICAvL2FkZCBhbm90aGVyIHNoaXAgb2YgMiBsZW5ndGhcbiAgICB3aGlsZSAoYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA8IDMpIHtcbiAgICAgIGxldCByZXN1bHRWZXJ0aWNhbCA9IHRydWU7XG4gICAgY29uc3QgZGVjaWRlVmVydGljYWwgPSB0aGlzLmdldFJhbmRvbUludCgyKTtcblxuICAgIGlmIChkZWNpZGVWZXJ0aWNhbCA9PT0gMCkge1xuICAgICAgcmVzdWx0VmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgIGNvbnN0IHNlY29uZENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuXG4gICAgYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDIsIHJlc3VsdFZlcnRpY2FsLCBbZmlyc3RDb29yZCwgc2Vjb25kQ29vcmRdKTtcbiAgICB9XG4gICAgLy9hZGQgYW5vdGhlciBzaGlwIG9mIDQgbGVuZ3RoXG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCA0KSB7XG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xuICAgIGNvbnN0IGRlY2lkZVZlcnRpY2FsID0gdGhpcy5nZXRSYW5kb21JbnQoMik7XG5cbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcbiAgICAgIHJlc3VsdFZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcblxuICAgIGJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCg0LCByZXN1bHRWZXJ0aWNhbCwgW2ZpcnN0Q29vcmQsIHNlY29uZENvb3JkXSk7XG4gICAgfVxuICAgIC8vYWRkIHRoZSBsYXN0IHNoaXAgb2YgNSBsZW5ndGhcbiAgICB3aGlsZSAoYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA8IDUpIHtcbiAgICAgIGxldCByZXN1bHRWZXJ0aWNhbCA9IHRydWU7XG4gICAgY29uc3QgZGVjaWRlVmVydGljYWwgPSB0aGlzLmdldFJhbmRvbUludCgyKTtcblxuICAgIGlmIChkZWNpZGVWZXJ0aWNhbCA9PT0gMCkge1xuICAgICAgcmVzdWx0VmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgIGNvbnN0IHNlY29uZENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuXG4gICAgYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDUsIHJlc3VsdFZlcnRpY2FsLCBbZmlyc3RDb29yZCwgc2Vjb25kQ29vcmRdKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuLi9zcmMvZ2FtZWJvYXJkJyk7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllck5hbWUsIGJvYXJkLCBpc0NvbXB1dGVyUGxheWVyKSB7XG4gICAgdGhpcy5wbGF5ZXJOYW1lID0gcGxheWVyTmFtZTtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy5pc0NvbXB1dGVyUGxheWVyID0gaXNDb21wdXRlclBsYXllcjtcbiAgfVxuXG4gIGdldFR1cm5Db29yZGluYXRlcyhvcHBvbmVudCkge1xuICAgIGlmICh0aGlzLmlzQ29tcHV0ZXJQbGF5ZXIpIHtcbiAgICAgIGNvbnN0IHsgc2hvdHNSZWNlaXZlZCB9ID0gb3Bwb25lbnQuYm9hcmQ7XG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZGluYXRlcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDEwOyBhICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCAxMDsgYiArPSAxKSB7XG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IFthLCBiXTtcbiAgICAgICAgICBpZiAoIXNob3RzUmVjZWl2ZWQuc29tZSgoW3gsIHldKSA9PiB4ID09PSBhICYmIHkgPT09IGIpKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYXZhaWxhYmxlQ29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIGNvb3JkaW5hdGVzJyk7IFxuICAgICAgfVxuXG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgICBjb25zdCBbYSwgYl0gPSBhdmFpbGFibGVDb29yZGluYXRlc1tyYW5kb21JbmRleF07XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFthLCBiXSk7IC8vIFJldHVybiBhIHJlc29sdmVkIHByb21pc2Ugd2l0aCB0aGUgcmFuZG9tIGF2YWlsYWJsZSBjb29yZGluYXRlc1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0R2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcicpO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZScpKSB7XG4gICAgICAgICAgY29uc3QgYSA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV0sIDEwKTtcbiAgICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsyXSwgMTApO1xuXG4gICAgICAgICAgY29uc3QgeyBzaG90c1JlY2VpdmVkIH0gPSBvcHBvbmVudC5ib2FyZDtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZENvb3JkaW5hdGUgPSBbYSwgYl07XG5cbiAgICAgICAgICBpZiAoc2hvdHNSZWNlaXZlZC5zb21lKChbeCwgeV0pID0+IHggPT09IGEgJiYgeSA9PT0gYikpIHtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0R2FtZWJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxlY3RlZENvb3JkaW5hdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0YXJnZXRHYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICBnZW5lcmF0ZUNvbXB1dGVyUG9zaXRpb25zKGJvYXJkKSB7XG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCA1KSB7XG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xuICAgIGNvbnN0IGRlY2lkZVZlcnRpY2FsID0gdGhpcy5nZXRSYW5kb21JbnQoMik7XG5cbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcbiAgICAgIHJlc3VsdFZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcblxuICAgIGJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCgyLCByZXN1bHRWZXJ0aWNhbCwgW2ZpcnN0Q29vcmQsIHNlY29uZENvb3JkXSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gICAgcmV0dXJuIHRoaXMuaGl0cztcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIGRyYXdIaXRzLCBkcmF3U2hpcHMsIGZpcnN0RE9NLCBnYW1lYm9hcmRET00sXG4gIHBsYXllck5hbWVGb3JtLCBnZXRDb21wdXRlck5hbWUsIHBsYXllck1vdmVzRm9ybSxcbn0gZnJvbSAnLi9ET01mdW5jdGlvbnMnO1xuXG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcblxubGV0IHBsYXllck9uZTtcbmxldCBwbGF5ZXJUd287XG5cbmFzeW5jIGZ1bmN0aW9uIHNldHVwUGxheWVycyhwbGF5ZXJOYW1lKSB7XG4gIC8vIENyZWF0ZSBnYW1lYm9hcmQgd2l0aCA1IHNoaXBzIEZPUiBFQUNIIHBsYXllclxuICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgcGxheWVyTW92ZXMgPSBhd2FpdCBwbGF5ZXJNb3Zlc0Zvcm0ocGxheWVyT25lR2FtZWJvYXJkKTtcblxuICAvLyBwbGF5ZXJPbmVHYW1lYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDUsIGZhbHNlLCBbMSwgMV0pO1xuXG4gIC8vc2NyZXcgdGhlIGFycmF5IGp1c3QgcHV0IGEgZ2FtZWJvYXJkIGludG8gdGhlIGZ1bmN0aW9uIGFuZCByZXR1cm4gdGhlIGNvbXBsZXRlZCBnYW1lYm9hcmRcblxuICBjb25zdCBwbGF5ZXJUd29HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIHBsYXllclR3b0dhbWVib2FyZC5nZW5lcmF0ZUNvbXB1dGVyUG9zaXRpb25zKHBsYXllclR3b0dhbWVib2FyZCk7XG4gIGNvbnNvbGUubG9nKHBsYXllclR3b0dhbWVib2FyZCk7XG4gIGNvbnN0IGNvbXB1dGVyTmFtZSA9IGdldENvbXB1dGVyTmFtZSgpO1xuXG4gIC8vIENyZWF0ZSBwbGF5ZXIgMVxuICBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKHBsYXllck5hbWUsIHBsYXllck1vdmVzLCBmYWxzZSk7XG4gIC8vIENyZWF0ZSBwbGF5ZXIgMiAoY29tcHV0ZXIpXG4gIHBsYXllclR3byA9IG5ldyBQbGF5ZXIoY29tcHV0ZXJOYW1lLCBwbGF5ZXJUd29HYW1lYm9hcmQsIHRydWUpO1xuXG4gIC8vIERyYXcgZ2FtZWJvYXJkc1xuICBnYW1lYm9hcmRET00ocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuICBkcmF3U2hpcHMocGxheWVyT25lLmJvYXJkKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2FtZVNldHVwKCkge1xuICAvLyBGaXJzdCBwYWdlIGxvYWQsIGdlbmVyYXRlcyBza2VsZXRvbiBvZiB3ZWJzaXRlLCBjb250YWluZXJzLCBhbmQgdGl0bGVcbiAgZmlyc3RET00oKTtcblxuICAvLyBUbyBzdGFydCB0aGUgZ2FtZSwgY29sbGVjdCB0aGUgcGxheWVyIG5hbWVcbiAgY29uc3QgcGxheWVyTmFtZSA9IGF3YWl0IHBsYXllck5hbWVGb3JtKCk7XG4gIGNvbnNvbGUubG9nKCdQbGF5ZXIgTmFtZTonLCBwbGF5ZXJOYW1lKTtcblxuICBhd2FpdCBzZXR1cFBsYXllcnMocGxheWVyTmFtZSk7XG5cbiAgLy8gU3RhcnQgdGhlIGdhbWUgbG9vcFxuICBnYW1lTG9vcChwbGF5ZXJPbmUsIHBsYXllclR3byk7XG59XG5cbi8vIEdhbWUgb3ZlciBmdW5jdGlvblxuZnVuY3Rpb24gZ2FtZW92ZXIocGxheWVyT25lT2JqZWN0LCBwbGF5ZXJUd29PYmplY3QpIHtcbiAgaWYgKHBsYXllck9uZU9iamVjdC5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIHJldHVybiBwbGF5ZXJUd29PYmplY3Q7XG4gIH1cbiAgaWYgKHBsYXllclR3b09iamVjdC5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIHJldHVybiBwbGF5ZXJPbmVPYmplY3Q7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gU3RhcnQgZ2FtZSBsb29wXG5hc3luYyBmdW5jdGlvbiBnYW1lTG9vcChwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICB3aGlsZSAoZ2FtZW92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pID09PSBudWxsKSB7XG4gICAgLy8gUGxheWVyIE9uZSdzIHR1cm5cbiAgICBhd2FpdCBwbGF5ZXJUdXJuKHBsYXllck9uZSwgcGxheWVyVHdvKTtcblxuICAgIGlmIChnYW1lb3ZlcihwbGF5ZXJPbmUsIHBsYXllclR3bykgIT09IG51bGwpIHtcbiAgICAgIGJyZWFrOyAvLyBFeGl0IHRoZSBsb29wIGlmIHRoZSBnYW1lIGlzIG92ZXJcbiAgICB9XG5cbiAgICAvLyBQbGF5ZXIgVHdvJ3MgdHVyblxuICAgIGF3YWl0IHBsYXllclR1cm4ocGxheWVyVHdvLCBwbGF5ZXJPbmUpO1xuICB9XG5cbiAgLy8gR2FtZSBvdmVyXG4gIGlmIChnYW1lb3ZlcihwbGF5ZXJPbmUsIHBsYXllclR3bykgPT09IHBsYXllck9uZSkge1xuICAgIGFsZXJ0KCdQbGF5ZXIgT25lIFdpbnMnKTtcbiAgfSBlbHNlIGlmIChnYW1lb3ZlcihwbGF5ZXJPbmUsIHBsYXllclR3bykgPT09IHBsYXllclR3bykge1xuICAgIGFsZXJ0KCdQbGF5ZXIgVHdvIFdpbnMnKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwbGF5ZXJUdXJuKGN1cnJlbnRQbGF5ZXIsIG9wcG9uZW50KSB7XG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGN1cnJlbnRQbGF5ZXIuZ2V0VHVybkNvb3JkaW5hdGVzKG9wcG9uZW50KTtcbiAgb3Bwb25lbnQuYm9hcmQucmVjZWl2ZUhpdChjb29yZHMpO1xuICBkcmF3SGl0cyhwbGF5ZXJPbmUsIHBsYXllclR3byk7XG5cbiAgaWYgKCFjdXJyZW50UGxheWVyLmlzQ29tcHV0ZXJQbGF5ZXIpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XG4gIH1cbn1cblxuLy8gQ2FsbCB0aGUgZ2FtZVNldHVwIGZ1bmN0aW9uIHRvIGluaXRpYXRlIHRoZSBnYW1lXG5nYW1lU2V0dXAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==