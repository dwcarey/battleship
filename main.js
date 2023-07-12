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
}

.shipDisplay {
  width: 10vh;
  height: 10vh;
}

.ship-5 {
  background-color: aliceblue;
}

.ship-4 {
  background-color: rgb(190, 11, 190);
}

.ship-3 {
  background-color: rgb(157, 255, 0);
}

.ship-2 {
  background-color: rgb(164, 144, 255);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;;;;CAIC;;AAED;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wEAAwE;AAC1E;AACA;EACE,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,uBAAuB;;AAEzB;;AAEA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,oCAAoC;EACpC,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;EACnC,iCAAiC;EACjC,UAAU;EACV,WAAW;AACb;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,YAAY;EACZ,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\n\n\n\n*/\n\nbody {\n  display: flex;\n  justify-content: center;\n}\n\n#contentContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 80vw;\n  background-color: aqua;\n  border: 3px solid red;\n  justify-items: center;\n}\n\n#titleContainer {\n  height: 15vh;\n  grid-column: span 2;\n  font-size: 5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.gameboardContainer > div {\n  border: 1px solid rgb(19, 19, 19);\n}\n\n.gameboardContainer {\n  grid-column: span 1;\n  display: flex;\n  justify-content: center;\n\n}\n\n.rowHolder {\n  display: flex;\n}\n#informationContainer {\n  grid-column: span 2;\n  display: grid;\n  grid-template-columns: 35vw 5vw 35vw;\n  text-align: center;\n  font-size: 2vw;\n  width: 75vw;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n}\n\n#playerTwoGameboardContainer > div > div > div.square:hover {\n  background-color: rgb(238, 174, 0);\n}\n\n.square {\n  background-color: rgb(12, 166, 255);\n  border: 1px solid rgb(19, 19, 19);\n  width: 3vw;\n  height: 3vw;\n}\n\n#playerTwoGameboardContainer > div > div > div.square.hitShipSquare {\n  background-color: rgb(173, 0, 0);\n}\n\n#playerTwoGameboardContainer > div > div > div.square.missedSquare {\n  background-color: rgb(0, 255, 85);\n}\n\n.shipSquare {\n  background-color: rgb(24, 24, 24);\n}\n\n.hitShipSquare {\n  background-color: rgb(173, 0, 0);\n}\n\n.missedSquare {\n  background-color: rgb(0, 255, 85);\n}\n\n.overlay {\n  background-color: rgb(0, 0, 0, 0.2);\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 8;\n}\n\n.formContainer {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 9;\n  transform: translate(-50%, -50%);\n  padding: 5vw;\n  background-color: blueviolet;\n  border: 3px solid rgb(9, 7, 12);\n}\n\n.shipDisplay {\n  width: 10vh;\n  height: 10vh;\n}\n\n.ship-5 {\n  background-color: aliceblue;\n}\n\n.ship-4 {\n  background-color: rgb(190, 11, 190);\n}\n\n.ship-3 {\n  background-color: rgb(157, 255, 0);\n}\n\n.ship-2 {\n  background-color: rgb(164, 144, 255);\n}\n"],"sourceRoot":""}]);
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


    // Declare and initialize the isVertical variable
    let isVertical = false;
    
// Create the ship display element
const shipDisplay = document.createElement('div');
shipDisplay.classList.add('shipDisplay');

// Helper function to update the ship display class
function updateShipDisplay(shipSize) {
  shipDisplay.className = `shipDisplay ship-${shipSize} ${isVertical ? 'vertical' : 'horizontal'}`;
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
    toggleButton.addEventListener('click', () => {
      isVertical = !isVertical; // Toggle the boolean value
    });

    // Append the ship display to the form container
    formContainer.appendChild(shipDisplay);

    // Append the toggle button to the form container
    formContainer.appendChild(toggleButton);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuLypcblxuXG5cbiovXG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2NvbnRlbnRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIHdpZHRoOiA4MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuI3RpdGxlQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxNXZoO1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICBmb250LXNpemU6IDV2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi5nYW1lYm9hcmRDb250YWluZXIgPiBkaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XG59XG5cbi5nYW1lYm9hcmRDb250YWluZXIge1xuICBncmlkLWNvbHVtbjogc3BhbiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG4ucm93SG9sZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNpbmZvcm1hdGlvbkNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzV2dyA1dncgMzV2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJ2dztcbiAgd2lkdGg6IDc1dnc7XG4gIHBhZGRpbmctdG9wOiAydmg7XG4gIHBhZGRpbmctYm90dG9tOiAydmg7XG59XG5cbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTc0LCAwKTtcbn1cblxuLnNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTY2LCAyNTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTksIDE5LCAxOSk7XG4gIHdpZHRoOiAzdnc7XG4gIGhlaWdodDogM3Z3O1xufVxuXG4jcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID4gZGl2ID4gZGl2ID4gZGl2LnNxdWFyZS5oaXRTaGlwU3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XG59XG5cbiNwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIgPiBkaXYgPiBkaXYgPiBkaXYuc3F1YXJlLm1pc3NlZFNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDg1KTtcbn1cblxuLnNoaXBTcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG59XG5cbi5oaXRTaGlwU3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XG59XG5cbi5taXNzZWRTcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCA4NSk7XG59XG5cbi5vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMik7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA4O1xufVxuXG4uZm9ybUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDogOTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDV2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDksIDcsIDEyKTtcbn1cblxuLnNoaXBEaXNwbGF5IHtcbiAgd2lkdGg6IDEwdmg7XG4gIGhlaWdodDogMTB2aDtcbn1cblxuLnNoaXAtNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLnNoaXAtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAsIDExLCAxOTApO1xufVxuXG4uc2hpcC0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NywgMjU1LCAwKTtcbn1cblxuLnNoaXAtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjQsIDE0NCwgMjU1KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHdFQUF3RTtBQUMxRTtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlDQUFpQztFQUNqQyxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKlxcblxcblxcblxcbiovXFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB3aWR0aDogODB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0aXRsZUNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZm9udC1zaXplOiA1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG4uZ2FtZWJvYXJkQ29udGFpbmVyID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcXG59XFxuXFxuLmdhbWVib2FyZENvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4ucm93SG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNpbmZvcm1hdGlvbkNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzV2dyA1dncgMzV2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcbiAgd2lkdGg6IDc1dnc7XFxuICBwYWRkaW5nLXRvcDogMnZoO1xcbiAgcGFkZGluZy1ib3R0b206IDJ2aDtcXG59XFxuXFxuI3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lciA+IGRpdiA+IGRpdiA+IGRpdi5zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMTc0LCAwKTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDE2NiwgMjU1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcXG4gIHdpZHRoOiAzdnc7XFxuICBoZWlnaHQ6IDN2dztcXG59XFxuXFxuI3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lciA+IGRpdiA+IGRpdiA+IGRpdi5zcXVhcmUuaGl0U2hpcFNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAwLCAwKTtcXG59XFxuXFxuI3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lciA+IGRpdiA+IGRpdiA+IGRpdi5zcXVhcmUubWlzc2VkU3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDg1KTtcXG59XFxuXFxuLnNoaXBTcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbn1cXG5cXG4uaGl0U2hpcFNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAwLCAwKTtcXG59XFxuXFxuLm1pc3NlZFNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCA4NSk7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDg7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogOTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcGFkZGluZzogNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYig5LCA3LCAxMik7XFxufVxcblxcbi5zaGlwRGlzcGxheSB7XFxuICB3aWR0aDogMTB2aDtcXG4gIGhlaWdodDogMTB2aDtcXG59XFxuXFxuLnNoaXAtNSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5zaGlwLTQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MCwgMTEsIDE5MCk7XFxufVxcblxcbi5zaGlwLTMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NywgMjU1LCAwKTtcXG59XFxuXFxuLnNoaXAtMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY0LCAxNDQsIDI1NSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5jb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuXG5mdW5jdGlvbiBmaXJzdERPTSgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q29udGFpbmVyLmlkID0gJ2NvbnRlbnRDb250YWluZXInO1xuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZUNvbnRhaW5lci5pZCA9ICd0aXRsZUNvbnRhaW5lcic7XG5cbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICBjb25zdCBwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyLmlkID0gJ3BsYXllck9uZUdhbWVib2FyZENvbnRhaW5lcic7XG4gIHBsYXllck9uZUdhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmRDb250YWluZXInKTtcbiAgY29uc3QgcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lci5pZCA9ICdwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXInO1xuICBwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkQ29udGFpbmVyJyk7XG4gIGNvbnN0IGluZm9ybWF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGluZm9ybWF0aW9uQ29udGFpbmVyLmlkID0gJ2luZm9ybWF0aW9uQ29udGFpbmVyJztcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb3JtYXRpb25Db250YWluZXIpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGdhbWVib2FyZERPTShwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICBjb25zdCBwbGF5ZXJPbmVOYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHBsYXllck9uZU5hbWVUZXh0LnRleHRDb250ZW50ID0gcGxheWVyT25lLnBsYXllck5hbWU7XG4gIGNvbnN0IHBsYXllclR3b05hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcGxheWVyVHdvTmFtZVRleHQudGV4dENvbnRlbnQgPSBwbGF5ZXJUd28ucGxheWVyTmFtZTtcblxuICBjb25zdCBpbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvcm1hdGlvbkNvbnRhaW5lcicpO1xuICBjb25zdCBWU3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBWU3RleHQudGV4dENvbnRlbnQgPSAnVlMuJztcbiAgaW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lTmFtZVRleHQpO1xuICBpbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChWU3RleHQpO1xuICBpbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd29OYW1lVGV4dCk7XG5cbiAgY29uc3QgcGxheWVyT25lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGxheWVyVHdvQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllck9uZS5ib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvd0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvd0hvbGRlci5pZCA9IGByb3dIb2xkZXItJHtpfWA7XG4gICAgcm93SG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Jvd0hvbGRlcicpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc3F1YXJlLmlkID0gYHNxdWFyZS0ke2l9LSR7an1gO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgcm93SG9sZGVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuXG4gICAgcGxheWVyT25lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93SG9sZGVyKTtcbiAgfVxuXG4gIGNvbnN0IG1haW5QbGF5ZXJPbmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyJyk7XG4gIG1haW5QbGF5ZXJPbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmRDb250YWluZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyVHdvLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93SG9sZGVyLmlkID0gYHJvd0hvbGRlci0ke2l9YDtcbiAgICByb3dIb2xkZXIuY2xhc3NMaXN0LmFkZCgncm93SG9sZGVyJyk7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllclR3by5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuaWQgPSBgMnNxdWFyZS0ke2l9LSR7an1gO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgICAgcm93SG9sZGVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuXG4gICAgcGxheWVyVHdvQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93SG9sZGVyKTtcbiAgfVxuXG4gIGNvbnN0IG1haW5QbGF5ZXJUd29Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyJyk7XG4gIG1haW5QbGF5ZXJUd29Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmRDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBkcmF3U2hpcHMocGxheWVyT25lKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyT25lLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmUgPSBwbGF5ZXJPbmUuYm9hcmQuYm9hcmRbaV1bal07XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNxdWFyZS0ke2l9LSR7an1gKTtcbiAgICAgIGlmIChjdXJyZW50U3F1YXJlIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICBjdXJyZW50U3F1YXJlRE9NLmNsYXNzTGlzdC5hZGQoJ3NoaXBTcXVhcmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd0hpdHMocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllck9uZS5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3QgY3VycmVudFNxdWFyZVBsYXllck9uZSA9IHBsYXllck9uZS5ib2FyZC5ib2FyZFtpXVtqXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJUd28gPSBwbGF5ZXJUd28uYm9hcmQuYm9hcmRbaV1bal07XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlUGxheWVyT25lRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNxdWFyZS0ke2l9LSR7an1gKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJUd29ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgMnNxdWFyZS0ke2l9LSR7an1gKTtcblxuICAgICAgLy8gUGxheWVyIE9uZVxuICAgICAgaWYgKHBsYXllck9uZS5ib2FyZC5zaG90c1JlY2VpdmVkLnNvbWUoKGNvb3JkcykgPT4gY29vcmRzWzBdID09PSBpICYmIGNvb3Jkc1sxXSA9PT0gaikpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTcXVhcmVQbGF5ZXJPbmUgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgY3VycmVudFNxdWFyZVBsYXllck9uZURPTS5jbGFzc0xpc3QuYWRkKCdoaXRTaGlwU3F1YXJlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFNxdWFyZVBsYXllck9uZURPTS5jbGFzc0xpc3QuYWRkKCdtaXNzZWRTcXVhcmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQbGF5ZXIgVHdvXG4gICAgICBpZiAocGxheWVyVHdvLmJvYXJkLnNob3RzUmVjZWl2ZWQuc29tZSgoY29vcmRzKSA9PiBjb29yZHNbMF0gPT09IGkgJiYgY29vcmRzWzFdID09PSBqKSkge1xuICAgICAgICBpZiAoY3VycmVudFNxdWFyZVBsYXllclR3byBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyVHdvRE9NLmNsYXNzTGlzdC5hZGQoJ2hpdFNoaXBTcXVhcmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyVHdvRE9NLmNsYXNzTGlzdC5hZGQoJ21pc3NlZFNxdWFyZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBwbGF5ZXJOYW1lRm9ybSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW5lcicpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBiYWNraW5nIG92ZXJsYXlcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGZvcm0gZWxlbWVudFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHRleHQgaW5wdXQgZm9yIHRoZSBwbGF5ZXIgbmFtZVxuICAgIGNvbnN0IHBsYXllck5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcGxheWVyTmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgcGxheWVyTmFtZUlucHV0Lm5hbWUgPSAncGxheWVyTmFtZSc7XG4gICAgcGxheWVyTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgbmFtZSc7XG4gICAgcGxheWVyTmFtZUlucHV0Lm1heExlbmd0aCA9IDMwO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocGxheWVyTmFtZUlucHV0KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24udmFsdWUgPSAnU3VibWl0JztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAvLyBBZGQgdGhlIGZvcm0gdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vIEFkZCB0aGUgZm9ybSBjb250YWluZXIgYW5kIG92ZXJsYXkgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgZm9ybSBzdWJtaXNzaW9uXG5cbiAgICAgIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5ZXJOYW1lSW5wdXQudmFsdWU7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgZm9ybSBhbmQgb3ZlcmxheSBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAgZm9ybUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG5cbiAgICAgIHJlc29sdmUocGxheWVyTmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlck5hbWUoKSB7XG4gIGxldCBjb21wdXRlck5hbWU7XG5cbiAgc3dpdGNoIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpIHtcbiAgICBjYXNlIDA6XG4gICAgICBjb21wdXRlck5hbWUgPSAnQ29tcHV0ZXJpbmEnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ01vdXN0b3BoZXInO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ0Rlc2tlbGxlJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdNb25pdG9yZXR0ZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQ6XG4gICAgICBjb21wdXRlck5hbWUgPSAnS2V5Ym9hcmRhbnRoYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBjb21wdXRlck5hbWUgPSAnQ29kZWxsYSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDY6XG4gICAgICBjb21wdXRlck5hbWUgPSAnTmV0YWxpZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc6XG4gICAgICBjb21wdXRlck5hbWUgPSAnQnJvd3NlZGl0aCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDg6XG4gICAgICBjb21wdXRlck5hbWUgPSAnRGF0YXRob255JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgOTpcbiAgICAgIGNvbXB1dGVyTmFtZSA9ICdBYXJhbSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29tcHV0ZXJOYW1lID0gJ1Vua25vd24nO1xuICB9XG5cbiAgcmV0dXJuIGNvbXB1dGVyTmFtZTtcbn1cblxuXG4gICAgLy8gRGVjbGFyZSBhbmQgaW5pdGlhbGl6ZSB0aGUgaXNWZXJ0aWNhbCB2YXJpYWJsZVxuICAgIGxldCBpc1ZlcnRpY2FsID0gZmFsc2U7XG4gICAgXG4vLyBDcmVhdGUgdGhlIHNoaXAgZGlzcGxheSBlbGVtZW50XG5jb25zdCBzaGlwRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2hpcERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnc2hpcERpc3BsYXknKTtcblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc2hpcCBkaXNwbGF5IGNsYXNzXG5mdW5jdGlvbiB1cGRhdGVTaGlwRGlzcGxheShzaGlwU2l6ZSkge1xuICBzaGlwRGlzcGxheS5jbGFzc05hbWUgPSBgc2hpcERpc3BsYXkgc2hpcC0ke3NoaXBTaXplfSAke2lzVmVydGljYWwgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnfWA7XG59XG5cbi8vIENyZWF0ZSB0aGUgcGxheWVyTW92ZXNGb3JtIGZ1bmN0aW9uXG5mdW5jdGlvbiBwbGF5ZXJNb3Zlc0Zvcm0oZ2FtZWJvYXJkKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gQ3JlYXRlIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXInKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgYmFja2luZyBvdmVybGF5XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBmb3JtIGVsZW1lbnRcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgLy8gQWRkIHRoZSBmb3JtIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAvLyBBZGQgdGhlIGZvcm0gY29udGFpbmVyIGFuZCBvdmVybGF5IHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgLy8gR2VuZXJhdGUgRE9NIGVsZW1lbnRzIGZvciBnYW1lYm9hcmRcbiAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHNxdWFyZSBlbGVtZW50c1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVNxdWFyZShyb3csIGNvbHVtbikge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuaWQgPSBgc3F1YXJlLSR7cm93fS0ke2NvbHVtbn1gO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuXG4gICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHNoaXAgcGxhY2VtZW50XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBTaXplID0gZ2FtZWJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCA1ID8gWzUsIDQsIDMsIDMsIDJdW2dhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3JvdywgY29sdW1uXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzaGlwU2l6ZSAmJiBnYW1lYm9hcmQuaXNWYWxpZE1vdmUoc2hpcFNpemUsIGlzVmVydGljYWwsIGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgIGdhbWVib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoc2hpcFNpemUsIGlzVmVydGljYWwsIGNvb3JkaW5hdGVzKTtcblxuICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc2hpcCBkaXNwbGF5IGJhc2VkIG9uIHRoZSBwbGFjZWQgc2hpcFxuICAgICAgICAgIHVwZGF0ZVNoaXBEaXNwbGF5KHNoaXBTaXplKTtcblxuICAgICAgICAgIC8vIENoZWNrIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG4gICAgICAgICAgaWYgKGdhbWVib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICAvLyBDbGVhbiB1cCBVSVxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIC8vIFJlc29sdmUgdGhlIHByb21pc2Ugd2l0aCB0aGUgdXBkYXRlZCBnYW1lYm9hcmRcbiAgICAgICAgICAgIHJlc29sdmUoZ2FtZWJvYXJkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3F1YXJlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCByb3dIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvd0hvbGRlci5pZCA9IGByb3dIb2xkZXItJHtpfWA7XG4gICAgICByb3dIb2xkZXIuY2xhc3NMaXN0LmFkZCgncm93SG9sZGVyJyk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZWJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGNyZWF0ZVNxdWFyZShpLCBqKTtcbiAgICAgICAgcm93SG9sZGVyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICB9XG5cbiAgICAgIHBsYXllck9uZUJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0hvbGRlcik7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBcIklzIFZlcnRpY2FsP1wiIGJ1dHRvblxuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZ2dsZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdJcyBWZXJ0aWNhbD8nO1xuICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlzVmVydGljYWwgPSAhaXNWZXJ0aWNhbDsgLy8gVG9nZ2xlIHRoZSBib29sZWFuIHZhbHVlXG4gICAgfSk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHNoaXAgZGlzcGxheSB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXBEaXNwbGF5KTtcblxuICAgIC8vIEFwcGVuZCB0aGUgdG9nZ2xlIGJ1dHRvbiB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJ1dHRvbik7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHBsYXllck9uZUJvYXJkQ29udGFpbmVyIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmRDb250YWluZXIpO1xuICB9KTtcbn1cblxuXG5cblxuXG5cbmV4cG9ydCB7XG4gIGZpcnN0RE9NLCBnYW1lYm9hcmRET00sIGRyYXdTaGlwcywgZHJhd0hpdHMsXG4gIHBsYXllck5hbWVGb3JtLCBnZXRDb21wdXRlck5hbWUsIHBsYXllck1vdmVzRm9ybSxcbn07XG4iLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIHRoaXMuc2hpcHNPbkJvYXJkID0gW107XG4gICAgdGhpcy5zaG90c1JlY2VpdmVkID0gW107XG4gIH1cblxuICAvLyByZXR1cm5zIGFuIEVNUFRZIDEweDEwIGFycmF5LCAwLCAwIGlzIHRvcCBsZWZ0XG4gIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IG5ldyBBcnJheSgxMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSgxMCk7XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIGlzVmFsaWRNb3ZlKGxlbmd0aCwgaXNWZXJ0aWNhbCwgc3RhcnRJbmRleCkge1xuICAgIGNvbnN0IHBvc2l0aW9uQXJyYXkgPSBbXTtcblxuICAgIC8vIHNoaXAgaXMgaW5zaWRlIHRoZSBnYW1lYm9hcmRcbiAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKChsZW5ndGggKyBzdGFydEluZGV4WzBdKSA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBwb3NpdGlvbkFycmF5LnB1c2goW1xuICAgICAgICAgIHN0YXJ0SW5kZXhbMF0gKyBpLFxuICAgICAgICAgIHN0YXJ0SW5kZXhbMV0sXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1ZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgaWYgKChsZW5ndGggKyBzdGFydEluZGV4WzFdKSA+IDEwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBwb3NpdGlvbkFycmF5LnB1c2goW1xuICAgICAgICAgIHN0YXJ0SW5kZXhbMF0sXG4gICAgICAgICAgc3RhcnRJbmRleFsxXSArIGksXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNoaXAgaXMgbm90IGRpcmVjdGx5IG5leHQgdG8gYW5vdGhlciBzaGlwXG4gICAgY29uc3QgYWZmZWN0ZWRTcXVhcmVzQXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25BcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gZm9yIGVhY2ggYWRkIHRoZSBzdXJyb3VuZGluZyBzcXVhcmVzIGFuZCBzZWxmXG4gICAgICAvLyB0byBhZmZlY3RlZCBzcXVhcmVzIGFycmF5XG4gICAgICAvLyB0aGVuIGNoZWNrIHRoaXMuYm9hcmQgZm9yIFNoaXAgb2JqZWN0cyBpbiB0aG9zZSBwb3NpdGlvbnNcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gLSAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdIC0gMSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSAtIDEsXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0sXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gLSAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdICsgMSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSAtIDEsXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0sXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0sXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0sXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gKyAxLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdICsgMSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSAtIDEsXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gKyAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdICsgMSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSArIDEsXG4gICAgICBdKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFmZmVjdGVkU3F1YXJlc0FycmF5Lmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCB4ID0gYWZmZWN0ZWRTcXVhcmVzQXJyYXlbal1bMF07XG4gICAgICBjb25zdCB5ID0gYWZmZWN0ZWRTcXVhcmVzQXJyYXlbal1bMV07XG5cbiAgICAgIGlmICh4ID49IDAgJiYgeCA8PSA5ICYmIHkgPj0gMCAmJiB5IDw9IDkpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhZGRTaGlwVG9HYW1lYm9hcmQobGVuZ3RoLCBpc1ZlcnRpY2FsLCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZE1vdmUobGVuZ3RoLCBpc1ZlcnRpY2FsLCBzdGFydEluZGV4KSkge1xuICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgICB0aGlzLnNoaXBzT25Cb2FyZC5wdXNoKG5ld1NoaXApO1xuXG4gICAgICBjb25zdCBpbmRleFplcm8gPSBzdGFydEluZGV4WzBdO1xuICAgICAgY29uc3QgaW5kZXhPbmUgPSBzdGFydEluZGV4WzFdO1xuXG4gICAgICBpZiAoaXNWZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXhaZXJvOyBpIDwgbGVuZ3RoICsgaW5kZXhaZXJvOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2ldW2luZGV4T25lXSA9IG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleE9uZTsgaSA8IChsZW5ndGggKyBpbmRleE9uZSk7IGkgKz0gMSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhaZXJvXVtpXSA9IG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IHJldHVybiAnaW52YWxpZCBtb3ZlJztcbiAgfVxuXG4gIHJlY2VpdmVIaXQoaGl0TG9jYXRpb24pIHtcbiAgICBjb25zdCB4ID0gaGl0TG9jYXRpb25bMF07XG4gICAgY29uc3QgeSA9IGhpdExvY2F0aW9uWzFdO1xuXG4gICAgLy8gZmluZCBpbnZhbGlkIHNob3QgKG5vdCBvbiBnYW1lYm9hcmQpXG4gICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSB7XG4gICAgICByZXR1cm4gJ2ludmFsaWQgc2hvdCc7XG4gICAgfVxuICAgIC8vIGZpbmQgaW52YWxpZCBzaG90IChkdWlwbGljYXRlIHNob3QpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNob3RzUmVjZWl2ZWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh4ID09PSB0aGlzLnNob3RzUmVjZWl2ZWRbaV1bMF0gJiYgeSA9PT0gdGhpcy5zaG90c1JlY2VpdmVkW2ldWzFdKSB7XG4gICAgICAgIHJldHVybiAnaW52YWxpZCBzaG90JztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcHVzaCBzaG90IHRvIHNob3RzIHJlY2VpdmVkIGFycmF5XG4gICAgdGhpcy5zaG90c1JlY2VpdmVkLnB1c2goaGl0TG9jYXRpb24pO1xuXG4gICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beV0uaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuICdzdW5rIHNoaXAnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdoaXQgc2hpcCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdzaG90IG1pc3NlZCc7XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgbGV0IHN1bmtTaGlwcyA9IDA7XG4gICAgY29uc3QgYWxsU2hpcHMgPSB0aGlzLnNoaXBzT25Cb2FyZC5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNoaXBzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gdGhpcy5zaGlwc09uQm9hcmRbaV07XG5cbiAgICAgIGlmIChjdXJyZW50U2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBzdW5rU2hpcHMgKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vua1NoaXBzID09PSBhbGxTaGlwcztcbiAgfVxuXG4gIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbiAgfVxuXG4gIGdlbmVyYXRlQ29tcHV0ZXJQb3NpdGlvbnMoYm9hcmQpIHtcbiAgICAvL2FkZCB0d28gMyBsZW5ndGggc2hpcHNcbiAgICB3aGlsZSAoYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA8IDIpIHtcbiAgICAgIGxldCByZXN1bHRWZXJ0aWNhbCA9IHRydWU7XG4gICAgY29uc3QgZGVjaWRlVmVydGljYWwgPSB0aGlzLmdldFJhbmRvbUludCgyKTtcblxuICAgIGlmIChkZWNpZGVWZXJ0aWNhbCA9PT0gMCkge1xuICAgICAgcmVzdWx0VmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgIGNvbnN0IHNlY29uZENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuXG4gICAgYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDMsIHJlc3VsdFZlcnRpY2FsLCBbZmlyc3RDb29yZCwgc2Vjb25kQ29vcmRdKTtcbiAgICB9XG4gICAgLy9hZGQgYW5vdGhlciBzaGlwIG9mIDIgbGVuZ3RoXG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCAzKSB7XG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xuICAgIGNvbnN0IGRlY2lkZVZlcnRpY2FsID0gdGhpcy5nZXRSYW5kb21JbnQoMik7XG5cbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcbiAgICAgIHJlc3VsdFZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcblxuICAgIGJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCgyLCByZXN1bHRWZXJ0aWNhbCwgW2ZpcnN0Q29vcmQsIHNlY29uZENvb3JkXSk7XG4gICAgfVxuICAgIC8vYWRkIGFub3RoZXIgc2hpcCBvZiA0IGxlbmd0aFxuICAgIHdoaWxlIChib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNCkge1xuICAgICAgbGV0IHJlc3VsdFZlcnRpY2FsID0gdHJ1ZTtcbiAgICBjb25zdCBkZWNpZGVWZXJ0aWNhbCA9IHRoaXMuZ2V0UmFuZG9tSW50KDIpO1xuXG4gICAgaWYgKGRlY2lkZVZlcnRpY2FsID09PSAwKSB7XG4gICAgICByZXN1bHRWZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgY29uc3Qgc2Vjb25kQ29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG5cbiAgICBib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoNCwgcmVzdWx0VmVydGljYWwsIFtmaXJzdENvb3JkLCBzZWNvbmRDb29yZF0pO1xuICAgIH1cbiAgICAvL2FkZCB0aGUgbGFzdCBzaGlwIG9mIDUgbGVuZ3RoXG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCA1KSB7XG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xuICAgIGNvbnN0IGRlY2lkZVZlcnRpY2FsID0gdGhpcy5nZXRSYW5kb21JbnQoMik7XG5cbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcbiAgICAgIHJlc3VsdFZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcblxuICAgIGJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCg1LCByZXN1bHRWZXJ0aWNhbCwgW2ZpcnN0Q29vcmQsIHNlY29uZENvb3JkXSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xuIiwiY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi4vc3JjL2dhbWVib2FyZCcpO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXJOYW1lLCBib2FyZCwgaXNDb21wdXRlclBsYXllcikge1xuICAgIHRoaXMucGxheWVyTmFtZSA9IHBsYXllck5hbWU7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgIHRoaXMuaXNDb21wdXRlclBsYXllciA9IGlzQ29tcHV0ZXJQbGF5ZXI7XG4gIH1cblxuICBnZXRUdXJuQ29vcmRpbmF0ZXMob3Bwb25lbnQpIHtcbiAgICBpZiAodGhpcy5pc0NvbXB1dGVyUGxheWVyKSB7XG4gICAgICBjb25zdCB7IHNob3RzUmVjZWl2ZWQgfSA9IG9wcG9uZW50LmJvYXJkO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAxMDsgYSArPSAxKSB7XG4gICAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgMTA7IGIgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBbYSwgYl07XG4gICAgICAgICAgaWYgKCFzaG90c1JlY2VpdmVkLnNvbWUoKFt4LCB5XSkgPT4geCA9PT0gYSAmJiB5ID09PSBiKSkge1xuICAgICAgICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBjb29yZGluYXRlcycpOyBcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGgpO1xuICAgICAgY29uc3QgW2EsIGJdID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXNbcmFuZG9tSW5kZXhdO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbYSwgYl0pOyAvLyBSZXR1cm4gYSByZXNvbHZlZCBwcm9taXNlIHdpdGggdGhlIHJhbmRvbSBhdmFpbGFibGUgY29vcmRpbmF0ZXNcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEdhbWVib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXInKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcXVhcmUnKSkge1xuICAgICAgICAgIGNvbnN0IGEgPSBwYXJzZUludChlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdLCAxMCk7XG4gICAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMl0sIDEwKTtcblxuICAgICAgICAgIGNvbnN0IHsgc2hvdHNSZWNlaXZlZCB9ID0gb3Bwb25lbnQuYm9hcmQ7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb29yZGluYXRlID0gW2EsIGJdO1xuXG4gICAgICAgICAgaWYgKHNob3RzUmVjZWl2ZWQuc29tZSgoW3gsIHldKSA9PiB4ID09PSBhICYmIHkgPT09IGIpKSB7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldEdhbWVib2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZWN0ZWRDb29yZGluYXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGFyZ2V0R2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmFuZG9tSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICB9XG5cbiAgZ2VuZXJhdGVDb21wdXRlclBvc2l0aW9ucyhib2FyZCkge1xuICAgIHdoaWxlIChib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNSkge1xuICAgICAgbGV0IHJlc3VsdFZlcnRpY2FsID0gdHJ1ZTtcbiAgICBjb25zdCBkZWNpZGVWZXJ0aWNhbCA9IHRoaXMuZ2V0UmFuZG9tSW50KDIpO1xuXG4gICAgaWYgKGRlY2lkZVZlcnRpY2FsID09PSAwKSB7XG4gICAgICByZXN1bHRWZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgY29uc3Qgc2Vjb25kQ29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG5cbiAgICBib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoMiwgcmVzdWx0VmVydGljYWwsIFtmaXJzdENvb3JkLCBzZWNvbmRDb29yZF0pO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIHJldHVybiB0aGlzLmhpdHM7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICBkcmF3SGl0cywgZHJhd1NoaXBzLCBmaXJzdERPTSwgZ2FtZWJvYXJkRE9NLFxuICBwbGF5ZXJOYW1lRm9ybSwgZ2V0Q29tcHV0ZXJOYW1lLCBwbGF5ZXJNb3Zlc0Zvcm0sXG59IGZyb20gJy4vRE9NZnVuY3Rpb25zJztcblxuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5cbmxldCBwbGF5ZXJPbmU7XG5sZXQgcGxheWVyVHdvO1xuXG5hc3luYyBmdW5jdGlvbiBzZXR1cFBsYXllcnMocGxheWVyTmFtZSkge1xuICAvLyBDcmVhdGUgZ2FtZWJvYXJkIHdpdGggNSBzaGlwcyBGT1IgRUFDSCBwbGF5ZXJcbiAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IHBsYXllck1vdmVzID0gYXdhaXQgcGxheWVyTW92ZXNGb3JtKHBsYXllck9uZUdhbWVib2FyZCk7XG5cbiAgLy8gcGxheWVyT25lR2FtZWJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCg1LCBmYWxzZSwgWzEsIDFdKTtcblxuICAvL3NjcmV3IHRoZSBhcnJheSBqdXN0IHB1dCBhIGdhbWVib2FyZCBpbnRvIHRoZSBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSBjb21wbGV0ZWQgZ2FtZWJvYXJkXG5cbiAgY29uc3QgcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICBwbGF5ZXJUd29HYW1lYm9hcmQuZ2VuZXJhdGVDb21wdXRlclBvc2l0aW9ucyhwbGF5ZXJUd29HYW1lYm9hcmQpO1xuICBjb25zb2xlLmxvZyhwbGF5ZXJUd29HYW1lYm9hcmQpO1xuICBjb25zdCBjb21wdXRlck5hbWUgPSBnZXRDb21wdXRlck5hbWUoKTtcblxuICAvLyBDcmVhdGUgcGxheWVyIDFcbiAgcGxheWVyT25lID0gbmV3IFBsYXllcihwbGF5ZXJOYW1lLCBwbGF5ZXJNb3ZlcywgZmFsc2UpO1xuICAvLyBDcmVhdGUgcGxheWVyIDIgKGNvbXB1dGVyKVxuICBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKGNvbXB1dGVyTmFtZSwgcGxheWVyVHdvR2FtZWJvYXJkLCB0cnVlKTtcblxuICAvLyBEcmF3IGdhbWVib2FyZHNcbiAgZ2FtZWJvYXJkRE9NKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgZHJhd1NoaXBzKHBsYXllck9uZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdhbWVTZXR1cCgpIHtcbiAgLy8gRmlyc3QgcGFnZSBsb2FkLCBnZW5lcmF0ZXMgc2tlbGV0b24gb2Ygd2Vic2l0ZSwgY29udGFpbmVycywgYW5kIHRpdGxlXG4gIGZpcnN0RE9NKCk7XG5cbiAgLy8gVG8gc3RhcnQgdGhlIGdhbWUsIGNvbGxlY3QgdGhlIHBsYXllciBuYW1lXG4gIGNvbnN0IHBsYXllck5hbWUgPSBhd2FpdCBwbGF5ZXJOYW1lRm9ybSgpO1xuICBjb25zb2xlLmxvZygnUGxheWVyIE5hbWU6JywgcGxheWVyTmFtZSk7XG5cbiAgYXdhaXQgc2V0dXBQbGF5ZXJzKHBsYXllck5hbWUpO1xuXG4gIC8vIFN0YXJ0IHRoZSBnYW1lIGxvb3BcbiAgZ2FtZUxvb3AocGxheWVyT25lLCBwbGF5ZXJUd28pO1xufVxuXG4vLyBHYW1lIG92ZXIgZnVuY3Rpb25cbmZ1bmN0aW9uIGdhbWVvdmVyKHBsYXllck9uZU9iamVjdCwgcGxheWVyVHdvT2JqZWN0KSB7XG4gIGlmIChwbGF5ZXJPbmVPYmplY3QuYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICByZXR1cm4gcGxheWVyVHdvT2JqZWN0O1xuICB9XG4gIGlmIChwbGF5ZXJUd29PYmplY3QuYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICByZXR1cm4gcGxheWVyT25lT2JqZWN0O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIFN0YXJ0IGdhbWUgbG9vcFxuYXN5bmMgZnVuY3Rpb24gZ2FtZUxvb3AocGxheWVyT25lLCBwbGF5ZXJUd28pIHtcbiAgd2hpbGUgKGdhbWVvdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PT0gbnVsbCkge1xuICAgIC8vIFBsYXllciBPbmUncyB0dXJuXG4gICAgYXdhaXQgcGxheWVyVHVybihwbGF5ZXJPbmUsIHBsYXllclR3byk7XG5cbiAgICBpZiAoZ2FtZW92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pICE9PSBudWxsKSB7XG4gICAgICBicmVhazsgLy8gRXhpdCB0aGUgbG9vcCBpZiB0aGUgZ2FtZSBpcyBvdmVyXG4gICAgfVxuXG4gICAgLy8gUGxheWVyIFR3bydzIHR1cm5cbiAgICBhd2FpdCBwbGF5ZXJUdXJuKHBsYXllclR3bywgcGxheWVyT25lKTtcbiAgfVxuXG4gIC8vIEdhbWUgb3ZlclxuICBpZiAoZ2FtZW92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pID09PSBwbGF5ZXJPbmUpIHtcbiAgICBhbGVydCgnUGxheWVyIE9uZSBXaW5zJyk7XG4gIH0gZWxzZSBpZiAoZ2FtZW92ZXIocGxheWVyT25lLCBwbGF5ZXJUd28pID09PSBwbGF5ZXJUd28pIHtcbiAgICBhbGVydCgnUGxheWVyIFR3byBXaW5zJyk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcGxheWVyVHVybihjdXJyZW50UGxheWVyLCBvcHBvbmVudCkge1xuICBjb25zdCBjb29yZHMgPSBhd2FpdCBjdXJyZW50UGxheWVyLmdldFR1cm5Db29yZGluYXRlcyhvcHBvbmVudCk7XG4gIG9wcG9uZW50LmJvYXJkLnJlY2VpdmVIaXQoY29vcmRzKTtcbiAgZHJhd0hpdHMocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gIGlmICghY3VycmVudFBsYXllci5pc0NvbXB1dGVyUGxheWVyKSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICB9XG59XG5cbi8vIENhbGwgdGhlIGdhbWVTZXR1cCBmdW5jdGlvbiB0byBpbml0aWF0ZSB0aGUgZ2FtZVxuZ2FtZVNldHVwKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=