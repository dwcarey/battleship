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
  display: flex;
  justify-content: space-evenly;
  font-size: 2vw;
  width: 75vw;
}

#dragDropContainer {
  grid-column: span 2;
  height: 18vw;
  width: 70vw;
  margin-bottom: 3vh;
  background-color: rgb(88, 211, 50);
  border: 3px solid rgb(255, 238, 0);

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.square {
  background-color: rgb(12, 166, 255);
  border: 1px solid rgb(19, 19, 19);
  width: 3vw;
  height: 3vw;
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

#confirmButton {
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column: span 2;
}

.dragShip {
  grid-row: span 2;
  background-color: rgb(24, 24, 24);
  width: 3vw;
  grid-column: span 1;
}

.hide {
  display: none;
}

#ship2 {
  height: 6vw;
  grid-column-start: 3;
}

#ship3x1 {
  height: 9vw;
  grid-column-start: 4;
}

#ship3x2 {
  height: 9vw;
  grid-column-start: 5;
}

#ship4 {
  height: 12vw;
  grid-column-start: 6;
}

#ship5 {
  height: 15vw;
  grid-column-start: 7;
}

.drag-over {
  border: dashed 3px red;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;;;;CAIC;;AAED;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wEAAwE;AAC1E;AACA;EACE,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,uBAAuB;;AAEzB;;AAEA;EACE,aAAa;AACf;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,6BAA6B;EAC7B,cAAc;EACd,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,kCAAkC;EAClC,kCAAkC;;EAElC,aAAa;EACb,qCAAqC;EACrC,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;EACnC,iCAAiC;EACjC,UAAU;EACV,WAAW;AACb;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/*\n\n\n\n*/\n\nbody {\n  display: flex;\n  justify-content: center;\n}\n\n#contentContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 80vw;\n  background-color: aqua;\n  border: 3px solid red;\n  justify-items: center;\n}\n\n#titleContainer {\n  height: 15vh;\n  grid-column: span 2;\n  font-size: 5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.gameboardContainer > div {\n  border: 1px solid rgb(19, 19, 19);\n}\n\n.gameboardContainer {\n  grid-column: span 1;\n  display: flex;\n  justify-content: center;\n\n}\n\n.rowHolder {\n  display: flex;\n}\n#informationContainer {\n  grid-column: span 2;\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 2vw;\n  width: 75vw;\n}\n\n#dragDropContainer {\n  grid-column: span 2;\n  height: 18vw;\n  width: 70vw;\n  margin-bottom: 3vh;\n  background-color: rgb(88, 211, 50);\n  border: 3px solid rgb(255, 238, 0);\n\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n}\n\n.square {\n  background-color: rgb(12, 166, 255);\n  border: 1px solid rgb(19, 19, 19);\n  width: 3vw;\n  height: 3vw;\n}\n\n.shipSquare {\n  background-color: rgb(24, 24, 24);\n}\n\n.hitShipSquare {\n  background-color: rgb(173, 0, 0);\n}\n\n.missedSquare {\n  background-color: rgb(0, 255, 85);\n}\n\n#confirmButton {\n  grid-row-start: 2;\n  grid-column-start: 1;\n  grid-column: span 2;\n}\n\n.dragShip {\n  grid-row: span 2;\n  background-color: rgb(24, 24, 24);\n  width: 3vw;\n  grid-column: span 1;\n}\n\n.hide {\n  display: none;\n}\n\n#ship2 {\n  height: 6vw;\n  grid-column-start: 3;\n}\n\n#ship3x1 {\n  height: 9vw;\n  grid-column-start: 4;\n}\n\n#ship3x2 {\n  height: 9vw;\n  grid-column-start: 5;\n}\n\n#ship4 {\n  height: 12vw;\n  grid-column-start: 6;\n}\n\n#ship5 {\n  height: 15vw;\n  grid-column-start: 7;\n}\n\n.drag-over {\n  border: dashed 3px red;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   dragDropDOM: () => (/* binding */ dragDropDOM),
/* harmony export */   drawHits: () => (/* binding */ drawHits),
/* harmony export */   drawShips: () => (/* binding */ drawShips),
/* harmony export */   firstDOM: () => (/* binding */ firstDOM),
/* harmony export */   gameboardDOM: () => (/* binding */ gameboardDOM)
/* harmony export */ });
const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

function firstDOM() {
  const contentContainer = document.createElement('div');
  contentContainer.id = 'contentContainer';
  const titleContainer = document.createElement('div');
  titleContainer.id = 'titleContainer';

  const dragDropContainer = document.createElement('div');
  dragDropContainer.id = 'dragDropContainer';

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
  contentContainer.appendChild(dragDropContainer);
  contentContainer.appendChild(playerOneGameboardContainer);
  contentContainer.appendChild(playerTwoGameboardContainer);
  contentContainer.appendChild(informationContainer);

  document.body.appendChild(contentContainer);


  const verticalCheckbox = document.createElement('input');
  verticalCheckbox.setAttribute('type', 'checkbox');
  verticalCheckbox.id = 'verticalCheckbox';

  const verticalText = document.createElement('h3');
  verticalText.textContent = 'Vertical?';

  const confirmButton = document.createElement('button');
  confirmButton.type = 'button';
  confirmButton.id = 'confirmButton';
  confirmButton.textContent = 'Confirm';

  const ship5 = document.createElement('div');
  ship5.id = 'ship5';
  ship5.classList.add('dragShip');
  ship5.setAttribute('draggable', 'true');

  const ship4 = document.createElement('div');
  ship4.id = 'ship4';
  ship4.classList.add('dragShip');
  ship4.setAttribute('draggable', 'true');

  const ship3x1 = document.createElement('div');
  ship3x1.id = 'ship3x1';
  ship3x1.classList.add('dragShip');
  ship3x1.setAttribute('draggable', 'true');

  const ship3x2 = document.createElement('div');
  ship3x2.id = 'ship3x2';
  ship3x2.classList.add('dragShip');
  ship3x2.setAttribute('draggable', 'true');

  const ship2 = document.createElement('div');
  ship2.id = 'ship2';
  ship2.classList.add('dragShip');
  ship2.setAttribute('draggable', 'true');

  dragDropContainer.appendChild(verticalCheckbox);
  dragDropContainer.appendChild(confirmButton);
  dragDropContainer.appendChild(verticalText);
  dragDropContainer.appendChild(ship2);
  dragDropContainer.appendChild(ship3x1);
  dragDropContainer.appendChild(ship3x2);
  dragDropContainer.appendChild(ship4);
  dragDropContainer.appendChild(ship5);
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

function dragDropDOM() {
  // add player ships UI box - dragDropContainer
const draggableShips = document.querySelectorAll('.dragShip');

function dragStart(e) {
 e.dataTransfer.setData('text/plain', e.target.id);
 setTimeout(() => {
   e.target.classList.add('hide');
 }, 0);
}

draggableShips.forEach((ship) => {
 ship.addEventListener('dragstart', dragStart);
});

const squares = document.querySelectorAll('.square');

squares.forEach(((square) => {
 square.addEventListener('dragenter', dragEnter);
 square.addEventListener('dragover', dragOver);
 square.addEventListener('dragleave', dragLeave);
 square.addEventListener('drop', drop);
}));

function dragEnter(e) {
 e.preventDefault();
 e.target.classList.add('drag-over');
}

function dragOver(e) {
 e.preventDefault();
 e.target.classList.add('drag-over');
}

function dragLeave(e) {
 e.target.classList.remove('drag-over');
}

function drop(e) {
 e.target.classList.remove('drag-over');

 // get the draggable element
 const id = e.dataTransfer.getData('text/plain');
 const draggable = document.getElementById(id);

 // add it to the drop target
 console.log(draggable);
 e.target.appendChild(draggable);

 // display the draggable element
 draggable.classList.remove('hide');
}
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

// first page load, generates skeleton of website, containers and title
(0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.firstDOM)();
// game setup
// create gameboard with 5 ships FOR EACH player
const playerOneGameboard = new Gameboard();
playerOneGameboard.addShipToGameboard(5, false, [1, 1]);

const playerTwoGameboard = new Gameboard();
playerTwoGameboard.generateComputerPositions(playerTwoGameboard);
console.log(playerTwoGameboard);
//while playertwo gameboard has < 5 shipsonboard, generate random coords and add as ship
//will do nothing if ship is invalid move and continue until shipsonboard < 5 is false

// create player 1
const playerOne = new Player('Player One', playerOneGameboard, false);
// create player 2 (computer)
const playerTwo = new Player('Player Two', playerTwoGameboard, true);

// draw gameboards

(0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.gameboardDOM)(playerOne, playerTwo);
(0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.dragDropDOM)();
(0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_1__.drawShips)(playerOne);

// game over function
function gameover(playerOneObject, playerTwoObject) {
  if (playerOneObject.board.allShipsSunk()) {
    return playerTwo;
  }
  if (playerTwoObject.board.allShipsSunk()) {
    return playerOne;
  }

  return null;
}
// start game loop
// while function that checks for both allshipssunk is null

async function gameLoop() {
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

gameLoop(); // Start the game loop


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsdURBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJEQUFZO0FBQ1osMERBQVc7QUFDWCx3REFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVE7O0FBRVY7QUFDQTtBQUNBOztBQUVBOztBQUVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKlxuXG5cblxuKi9cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jY29udGVudENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgd2lkdGg6IDgwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4jdGl0bGVDb250YWluZXIge1xuICBoZWlnaHQ6IDE1dmg7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIGZvbnQtc2l6ZTogNXZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLmdhbWVib2FyZENvbnRhaW5lciA+IGRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcbn1cblxuLmdhbWVib2FyZENvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG5cbi5yb3dIb2xkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2luZm9ybWF0aW9uQ29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICB3aWR0aDogNzV2dztcbn1cblxuI2RyYWdEcm9wQ29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgaGVpZ2h0OiAxOHZ3O1xuICB3aWR0aDogNzB2dztcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDIxMSwgNTApO1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAyMzgsIDApO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG59XG5cbi5zcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIsIDE2NiwgMjU1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xuICB3aWR0aDogM3Z3O1xuICBoZWlnaHQ6IDN2dztcbn1cblxuLnNoaXBTcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG59XG5cbi5oaXRTaGlwU3F1YXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgMCwgMCk7XG59XG5cbi5taXNzZWRTcXVhcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCA4NSk7XG59XG5cbiNjb25maXJtQnV0dG9uIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xufVxuXG4uZHJhZ1NoaXAge1xuICBncmlkLXJvdzogc3BhbiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG4gIHdpZHRoOiAzdnc7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3NoaXAyIHtcbiAgaGVpZ2h0OiA2dnc7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xufVxuXG4jc2hpcDN4MSB7XG4gIGhlaWdodDogOXZ3O1xuICBncmlkLWNvbHVtbi1zdGFydDogNDtcbn1cblxuI3NoaXAzeDIge1xuICBoZWlnaHQ6IDl2dztcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDU7XG59XG5cbiNzaGlwNCB7XG4gIGhlaWdodDogMTJ2dztcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDY7XG59XG5cbiNzaGlwNSB7XG4gIGhlaWdodDogMTV2dztcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDc7XG59XG5cbi5kcmFnLW92ZXIge1xuICBib3JkZXI6IGRhc2hlZCAzcHggcmVkO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsd0VBQXdFO0FBQzFFO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGtDQUFrQzs7RUFFbEMsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKlxcblxcblxcblxcbiovXFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB3aWR0aDogODB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0aXRsZUNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZm9udC1zaXplOiA1dnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG4uZ2FtZWJvYXJkQ29udGFpbmVyID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOSwgMTksIDE5KTtcXG59XFxuXFxuLmdhbWVib2FyZENvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4ucm93SG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNpbmZvcm1hdGlvbkNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZm9udC1zaXplOiAydnc7XFxuICB3aWR0aDogNzV2dztcXG59XFxuXFxuI2RyYWdEcm9wQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBoZWlnaHQ6IDE4dnc7XFxuICB3aWR0aDogNzB2dztcXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgMjExLCA1MCk7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAyMzgsIDApO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTY2LCAyNTUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5LCAxOSwgMTkpO1xcbiAgd2lkdGg6IDN2dztcXG4gIGhlaWdodDogM3Z3O1xcbn1cXG5cXG4uc2hpcFNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XFxufVxcblxcbi5oaXRTaGlwU3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDAsIDApO1xcbn1cXG5cXG4ubWlzc2VkU3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDg1KTtcXG59XFxuXFxuI2NvbmZpcm1CdXR0b24ge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbi5kcmFnU2hpcCB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbiAgd2lkdGg6IDN2dztcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNzaGlwMiB7XFxuICBoZWlnaHQ6IDZ2dztcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbn1cXG5cXG4jc2hpcDN4MSB7XFxuICBoZWlnaHQ6IDl2dztcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xcbn1cXG5cXG4jc2hpcDN4MiB7XFxuICBoZWlnaHQ6IDl2dztcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA1O1xcbn1cXG5cXG4jc2hpcDQge1xcbiAgaGVpZ2h0OiAxMnZ3O1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDY7XFxufVxcblxcbiNzaGlwNSB7XFxuICBoZWlnaHQ6IDE1dnc7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNztcXG59XFxuXFxuLmRyYWctb3ZlciB7XFxuICBib3JkZXI6IGRhc2hlZCAzcHggcmVkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuXG5mdW5jdGlvbiBmaXJzdERPTSgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q29udGFpbmVyLmlkID0gJ2NvbnRlbnRDb250YWluZXInO1xuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZUNvbnRhaW5lci5pZCA9ICd0aXRsZUNvbnRhaW5lcic7XG5cbiAgY29uc3QgZHJhZ0Ryb3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHJhZ0Ryb3BDb250YWluZXIuaWQgPSAnZHJhZ0Ryb3BDb250YWluZXInO1xuXG4gIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgY29uc3QgcGxheWVyT25lR2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllck9uZUdhbWVib2FyZENvbnRhaW5lci5pZCA9ICdwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXInO1xuICBwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkQ29udGFpbmVyJyk7XG4gIGNvbnN0IHBsYXllclR3b0dhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXIuaWQgPSAncGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyJztcbiAgcGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZENvbnRhaW5lcicpO1xuICBjb25zdCBpbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvcm1hdGlvbkNvbnRhaW5lci5pZCA9ICdpbmZvcm1hdGlvbkNvbnRhaW5lcic7XG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhZ0Ryb3BDb250YWluZXIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZUdhbWVib2FyZENvbnRhaW5lcik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyVHdvR2FtZWJvYXJkQ29udGFpbmVyKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvcm1hdGlvbkNvbnRhaW5lcik7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcblxuXG4gIGNvbnN0IHZlcnRpY2FsQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB2ZXJ0aWNhbENoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICB2ZXJ0aWNhbENoZWNrYm94LmlkID0gJ3ZlcnRpY2FsQ2hlY2tib3gnO1xuXG4gIGNvbnN0IHZlcnRpY2FsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHZlcnRpY2FsVGV4dC50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbD8nO1xuXG4gIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uZmlybUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gIGNvbmZpcm1CdXR0b24uaWQgPSAnY29uZmlybUJ1dHRvbic7XG4gIGNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG5cbiAgY29uc3Qgc2hpcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2hpcDUuaWQgPSAnc2hpcDUnO1xuICBzaGlwNS5jbGFzc0xpc3QuYWRkKCdkcmFnU2hpcCcpO1xuICBzaGlwNS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG5cbiAgY29uc3Qgc2hpcDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2hpcDQuaWQgPSAnc2hpcDQnO1xuICBzaGlwNC5jbGFzc0xpc3QuYWRkKCdkcmFnU2hpcCcpO1xuICBzaGlwNC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG5cbiAgY29uc3Qgc2hpcDN4MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwM3gxLmlkID0gJ3NoaXAzeDEnO1xuICBzaGlwM3gxLmNsYXNzTGlzdC5hZGQoJ2RyYWdTaGlwJyk7XG4gIHNoaXAzeDEuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuXG4gIGNvbnN0IHNoaXAzeDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2hpcDN4Mi5pZCA9ICdzaGlwM3gyJztcbiAgc2hpcDN4Mi5jbGFzc0xpc3QuYWRkKCdkcmFnU2hpcCcpO1xuICBzaGlwM3gyLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcblxuICBjb25zdCBzaGlwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwMi5pZCA9ICdzaGlwMic7XG4gIHNoaXAyLmNsYXNzTGlzdC5hZGQoJ2RyYWdTaGlwJyk7XG4gIHNoaXAyLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcblxuICBkcmFnRHJvcENvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZXJ0aWNhbENoZWNrYm94KTtcbiAgZHJhZ0Ryb3BDb250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybUJ1dHRvbik7XG4gIGRyYWdEcm9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHZlcnRpY2FsVGV4dCk7XG4gIGRyYWdEcm9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXAyKTtcbiAgZHJhZ0Ryb3BDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcDN4MSk7XG4gIGRyYWdEcm9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXAzeDIpO1xuICBkcmFnRHJvcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwNCk7XG4gIGRyYWdEcm9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHNoaXA1KTtcbn1cblxuZnVuY3Rpb24gZ2FtZWJvYXJkRE9NKHBsYXllck9uZSwgcGxheWVyVHdvKSB7XG4gIGNvbnN0IHBsYXllck9uZU5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgcGxheWVyT25lTmFtZVRleHQudGV4dENvbnRlbnQgPSBwbGF5ZXJPbmUucGxheWVyTmFtZTtcbiAgY29uc3QgcGxheWVyVHdvTmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBwbGF5ZXJUd29OYW1lVGV4dC50ZXh0Q29udGVudCA9IHBsYXllclR3by5wbGF5ZXJOYW1lO1xuXG4gIGNvbnN0IGluZm9ybWF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm9ybWF0aW9uQ29udGFpbmVyJyk7XG4gIGNvbnN0IFZTdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIFZTdGV4dC50ZXh0Q29udGVudCA9ICdWUy4nO1xuICBpbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmVOYW1lVGV4dCk7XG4gIGluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKFZTdGV4dCk7XG4gIGluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3b05hbWVUZXh0KTtcblxuICBjb25zdCBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwbGF5ZXJUd29Cb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyT25lLmJvYXJkLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93SG9sZGVyLmlkID0gYHJvd0hvbGRlci0ke2l9YDtcbiAgICByb3dIb2xkZXIuY2xhc3NMaXN0LmFkZCgncm93SG9sZGVyJyk7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllck9uZS5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzcXVhcmUuaWQgPSBgc3F1YXJlLSR7aX0tJHtqfWA7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICByb3dIb2xkZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG5cbiAgICBwbGF5ZXJPbmVCb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3dIb2xkZXIpO1xuICB9XG5cbiAgY29uc3QgbWFpblBsYXllck9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJPbmVHYW1lYm9hcmRDb250YWluZXInKTtcbiAgbWFpblBsYXllck9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZENvbnRhaW5lcik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJUd28uYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3dIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3dIb2xkZXIuaWQgPSBgcm93SG9sZGVyLSR7aX1gO1xuICAgIHJvd0hvbGRlci5jbGFzc0xpc3QuYWRkKCdyb3dIb2xkZXInKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyVHdvLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNxdWFyZS5pZCA9IGAyc3F1YXJlLSR7aX0tJHtqfWA7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgICByb3dIb2xkZXIuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG5cbiAgICBwbGF5ZXJUd29Cb2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3dIb2xkZXIpO1xuICB9XG5cbiAgY29uc3QgbWFpblBsYXllclR3b0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJUd29HYW1lYm9hcmRDb250YWluZXInKTtcbiAgbWFpblBsYXllclR3b0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd29Cb2FyZENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGRyYXdTaGlwcyhwbGF5ZXJPbmUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJPbmUuYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllck9uZS5ib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3QgY3VycmVudFNxdWFyZSA9IHBsYXllck9uZS5ib2FyZC5ib2FyZFtpXVtqXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3F1YXJlLSR7aX0tJHtqfWApO1xuICAgICAgaWYgKGN1cnJlbnRTcXVhcmUgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgIGN1cnJlbnRTcXVhcmVET00uY2xhc3NMaXN0LmFkZCgnc2hpcFNxdWFyZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3SGl0cyhwbGF5ZXJPbmUsIHBsYXllclR3bykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllck9uZS5ib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyT25lLmJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyZW50U3F1YXJlUGxheWVyT25lID0gcGxheWVyT25lLmJvYXJkLmJvYXJkW2ldW2pdO1xuICAgICAgY29uc3QgY3VycmVudFNxdWFyZVBsYXllclR3byA9IHBsYXllclR3by5ib2FyZC5ib2FyZFtpXVtqXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTcXVhcmVQbGF5ZXJPbmVET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3F1YXJlLSR7aX0tJHtqfWApO1xuICAgICAgY29uc3QgY3VycmVudFNxdWFyZVBsYXllclR3b0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAyc3F1YXJlLSR7aX0tJHtqfWApO1xuXG4gICAgICAvLyBQbGF5ZXIgT25lXG4gICAgICBpZiAocGxheWVyT25lLmJvYXJkLnNob3RzUmVjZWl2ZWQuc29tZSgoY29vcmRzKSA9PiBjb29yZHNbMF0gPT09IGkgJiYgY29vcmRzWzFdID09PSBqKSkge1xuICAgICAgICBpZiAoY3VycmVudFNxdWFyZVBsYXllck9uZSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyT25lRE9NLmNsYXNzTGlzdC5hZGQoJ2hpdFNoaXBTcXVhcmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50U3F1YXJlUGxheWVyT25lRE9NLmNsYXNzTGlzdC5hZGQoJ21pc3NlZFNxdWFyZScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYXllciBUd29cbiAgICAgIGlmIChwbGF5ZXJUd28uYm9hcmQuc2hvdHNSZWNlaXZlZC5zb21lKChjb29yZHMpID0+IGNvb3Jkc1swXSA9PT0gaSAmJiBjb29yZHNbMV0gPT09IGopKSB7XG4gICAgICAgIGlmIChjdXJyZW50U3F1YXJlUGxheWVyVHdvIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgIGN1cnJlbnRTcXVhcmVQbGF5ZXJUd29ET00uY2xhc3NMaXN0LmFkZCgnaGl0U2hpcFNxdWFyZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRTcXVhcmVQbGF5ZXJUd29ET00uY2xhc3NMaXN0LmFkZCgnbWlzc2VkU3F1YXJlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhZ0Ryb3BET00oKSB7XG4gIC8vIGFkZCBwbGF5ZXIgc2hpcHMgVUkgYm94IC0gZHJhZ0Ryb3BDb250YWluZXJcbmNvbnN0IGRyYWdnYWJsZVNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdTaGlwJyk7XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiB9LCAwKTtcbn1cblxuZHJhZ2dhYmxlU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbn0pO1xuXG5jb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xuXG5zcXVhcmVzLmZvckVhY2goKChzcXVhcmUpID0+IHtcbiBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcbn0pKTtcblxuZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiBlLnByZXZlbnREZWZhdWx0KCk7XG4gZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiBlLnByZXZlbnREZWZhdWx0KCk7XG4gZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG59XG5cbmZ1bmN0aW9uIGRyYWdMZWF2ZShlKSB7XG4gZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZy1vdmVyJyk7XG59XG5cbmZ1bmN0aW9uIGRyb3AoZSkge1xuIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuXG4gLy8gZ2V0IHRoZSBkcmFnZ2FibGUgZWxlbWVudFxuIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuIC8vIGFkZCBpdCB0byB0aGUgZHJvcCB0YXJnZXRcbiBjb25zb2xlLmxvZyhkcmFnZ2FibGUpO1xuIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG5cbiAvLyBkaXNwbGF5IHRoZSBkcmFnZ2FibGUgZWxlbWVudFxuIGRyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG59XG59XG5cbmV4cG9ydCB7XG4gIGZpcnN0RE9NLCBnYW1lYm9hcmRET00sIGRyYXdTaGlwcywgZHJhd0hpdHMsIGRyYWdEcm9wRE9NLFxufTtcbiIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAnKTtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5zaGlwc09uQm9hcmQgPSBbXTtcbiAgICB0aGlzLnNob3RzUmVjZWl2ZWQgPSBbXTtcbiAgfVxuXG4gIC8vIHJldHVybnMgYW4gRU1QVFkgMTB4MTAgYXJyYXksIDAsIDAgaXMgdG9wIGxlZnRcbiAgY3JlYXRlR2FtZWJvYXJkKCkge1xuICAgIGNvbnN0IGJvYXJkID0gbmV3IEFycmF5KDEwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGJvYXJkW2ldID0gbmV3IEFycmF5KDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9XG5cbiAgaXNWYWxpZE1vdmUobGVuZ3RoLCBpc1ZlcnRpY2FsLCBzdGFydEluZGV4KSB7XG4gICAgY29uc3QgcG9zaXRpb25BcnJheSA9IFtdO1xuXG4gICAgLy8gc2hpcCBpcyBpbnNpZGUgdGhlIGdhbWVib2FyZFxuICAgIGlmIChpc1ZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICBpZiAoKGxlbmd0aCArIHN0YXJ0SW5kZXhbMF0pID4gMTApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHBvc2l0aW9uQXJyYXkucHVzaChbXG4gICAgICAgICAgc3RhcnRJbmRleFswXSArIGksXG4gICAgICAgICAgc3RhcnRJbmRleFsxXSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICBpZiAoKGxlbmd0aCArIHN0YXJ0SW5kZXhbMV0pID4gMTApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHBvc2l0aW9uQXJyYXkucHVzaChbXG4gICAgICAgICAgc3RhcnRJbmRleFswXSxcbiAgICAgICAgICBzdGFydEluZGV4WzFdICsgaSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2hpcCBpcyBub3QgZGlyZWN0bHkgbmV4dCB0byBhbm90aGVyIHNoaXBcbiAgICBjb25zdCBhZmZlY3RlZFNxdWFyZXNBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbkFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBmb3IgZWFjaCBhZGQgdGhlIHN1cnJvdW5kaW5nIHNxdWFyZXMgYW5kIHNlbGZcbiAgICAgIC8vIHRvIGFmZmVjdGVkIHNxdWFyZXMgYXJyYXlcbiAgICAgIC8vIHRoZW4gY2hlY2sgdGhpcy5ib2FyZCBmb3IgU2hpcCBvYmplY3RzIGluIHRob3NlIHBvc2l0aW9uc1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSAtIDEsXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gLSAxLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdIC0gMSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSAtIDEsXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0gKyAxLFxuICAgICAgXSk7XG5cbiAgICAgIGFmZmVjdGVkU3F1YXJlc0FycmF5LnB1c2goW1xuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzBdLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdIC0gMSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSxcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVsxXSArIDEsXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gKyAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdIC0gMSxcbiAgICAgIF0pO1xuXG4gICAgICBhZmZlY3RlZFNxdWFyZXNBcnJheS5wdXNoKFtcbiAgICAgICAgcG9zaXRpb25BcnJheVtpXVswXSArIDEsXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMV0sXG4gICAgICBdKTtcblxuICAgICAgYWZmZWN0ZWRTcXVhcmVzQXJyYXkucHVzaChbXG4gICAgICAgIHBvc2l0aW9uQXJyYXlbaV1bMF0gKyAxLFxuICAgICAgICBwb3NpdGlvbkFycmF5W2ldWzFdICsgMSxcbiAgICAgIF0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWZmZWN0ZWRTcXVhcmVzQXJyYXkubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHggPSBhZmZlY3RlZFNxdWFyZXNBcnJheVtqXVswXTtcbiAgICAgIGNvbnN0IHkgPSBhZmZlY3RlZFNxdWFyZXNBcnJheVtqXVsxXTtcblxuICAgICAgaWYgKHggPj0gMCAmJiB4IDw9IDkgJiYgeSA+PSAwICYmIHkgPD0gOSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFkZFNoaXBUb0dhbWVib2FyZChsZW5ndGgsIGlzVmVydGljYWwsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkTW92ZShsZW5ndGgsIGlzVmVydGljYWwsIHN0YXJ0SW5kZXgpKSB7XG4gICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgIHRoaXMuc2hpcHNPbkJvYXJkLnB1c2gobmV3U2hpcCk7XG5cbiAgICAgIGNvbnN0IGluZGV4WmVybyA9IHN0YXJ0SW5kZXhbMF07XG4gICAgICBjb25zdCBpbmRleE9uZSA9IHN0YXJ0SW5kZXhbMV07XG5cbiAgICAgIGlmIChpc1ZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleFplcm87IGkgPCBsZW5ndGggKyBpbmRleFplcm87IGkgKz0gMSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaV1baW5kZXhPbmVdID0gbmV3U2hpcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4T25lOyBpIDwgKGxlbmd0aCArIGluZGV4T25lKTsgaSArPSAxKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFtpbmRleFplcm9dW2ldID0gbmV3U2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gcmV0dXJuICdpbnZhbGlkIG1vdmUnO1xuICB9XG5cbiAgcmVjZWl2ZUhpdChoaXRMb2NhdGlvbikge1xuICAgIGNvbnN0IHggPSBoaXRMb2NhdGlvblswXTtcbiAgICBjb25zdCB5ID0gaGl0TG9jYXRpb25bMV07XG5cbiAgICAvLyBmaW5kIGludmFsaWQgc2hvdCAobm90IG9uIGdhbWVib2FyZClcbiAgICBpZiAoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIHtcbiAgICAgIHJldHVybiAnaW52YWxpZCBzaG90JztcbiAgICB9XG4gICAgLy8gZmluZCBpbnZhbGlkIHNob3QgKGR1aXBsaWNhdGUgc2hvdClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hvdHNSZWNlaXZlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHggPT09IHRoaXMuc2hvdHNSZWNlaXZlZFtpXVswXSAmJiB5ID09PSB0aGlzLnNob3RzUmVjZWl2ZWRbaV1bMV0pIHtcbiAgICAgICAgcmV0dXJuICdpbnZhbGlkIHNob3QnO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBwdXNoIHNob3QgdG8gc2hvdHMgcmVjZWl2ZWQgYXJyYXlcbiAgICB0aGlzLnNob3RzUmVjZWl2ZWQucHVzaChoaXRMb2NhdGlvbik7XG5cbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4XVt5XS5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gJ3N1bmsgc2hpcCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ2hpdCBzaGlwJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ3Nob3QgbWlzc2VkJztcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgc3Vua1NoaXBzID0gMDtcbiAgICBjb25zdCBhbGxTaGlwcyA9IHRoaXMuc2hpcHNPbkJvYXJkLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2hpcHM7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY3VycmVudFNoaXAgPSB0aGlzLnNoaXBzT25Cb2FyZFtpXTtcblxuICAgICAgaWYgKGN1cnJlbnRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHN1bmtTaGlwcyArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdW5rU2hpcHMgPT09IGFsbFNoaXBzO1xuICB9XG5cbiAgZ2V0UmFuZG9tSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICB9XG5cbiAgZ2VuZXJhdGVDb21wdXRlclBvc2l0aW9ucyhib2FyZCkge1xuICAgIC8vYWRkIHR3byAzIGxlbmd0aCBzaGlwc1xuICAgIHdoaWxlIChib2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgMikge1xuICAgICAgbGV0IHJlc3VsdFZlcnRpY2FsID0gdHJ1ZTtcbiAgICBjb25zdCBkZWNpZGVWZXJ0aWNhbCA9IHRoaXMuZ2V0UmFuZG9tSW50KDIpO1xuXG4gICAgaWYgKGRlY2lkZVZlcnRpY2FsID09PSAwKSB7XG4gICAgICByZXN1bHRWZXJ0aWNhbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Q29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG4gICAgY29uc3Qgc2Vjb25kQ29vcmQgPSB0aGlzLmdldFJhbmRvbUludCgxMCk7XG5cbiAgICBib2FyZC5hZGRTaGlwVG9HYW1lYm9hcmQoMywgcmVzdWx0VmVydGljYWwsIFtmaXJzdENvb3JkLCBzZWNvbmRDb29yZF0pO1xuICAgIH1cbiAgICAvL2FkZCBhbm90aGVyIHNoaXAgb2YgMiBsZW5ndGhcbiAgICB3aGlsZSAoYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA8IDMpIHtcbiAgICAgIGxldCByZXN1bHRWZXJ0aWNhbCA9IHRydWU7XG4gICAgY29uc3QgZGVjaWRlVmVydGljYWwgPSB0aGlzLmdldFJhbmRvbUludCgyKTtcblxuICAgIGlmIChkZWNpZGVWZXJ0aWNhbCA9PT0gMCkge1xuICAgICAgcmVzdWx0VmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgIGNvbnN0IHNlY29uZENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuXG4gICAgYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDIsIHJlc3VsdFZlcnRpY2FsLCBbZmlyc3RDb29yZCwgc2Vjb25kQ29vcmRdKTtcbiAgICB9XG4gICAgLy9hZGQgYW5vdGhlciBzaGlwIG9mIDQgbGVuZ3RoXG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCA0KSB7XG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xuICAgIGNvbnN0IGRlY2lkZVZlcnRpY2FsID0gdGhpcy5nZXRSYW5kb21JbnQoMik7XG5cbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcbiAgICAgIHJlc3VsdFZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcblxuICAgIGJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCg0LCByZXN1bHRWZXJ0aWNhbCwgW2ZpcnN0Q29vcmQsIHNlY29uZENvb3JkXSk7XG4gICAgfVxuICAgIC8vYWRkIHRoZSBsYXN0IHNoaXAgb2YgNSBsZW5ndGhcbiAgICB3aGlsZSAoYm9hcmQuc2hpcHNPbkJvYXJkLmxlbmd0aCA8IDUpIHtcbiAgICAgIGxldCByZXN1bHRWZXJ0aWNhbCA9IHRydWU7XG4gICAgY29uc3QgZGVjaWRlVmVydGljYWwgPSB0aGlzLmdldFJhbmRvbUludCgyKTtcblxuICAgIGlmIChkZWNpZGVWZXJ0aWNhbCA9PT0gMCkge1xuICAgICAgcmVzdWx0VmVydGljYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuICAgIGNvbnN0IHNlY29uZENvb3JkID0gdGhpcy5nZXRSYW5kb21JbnQoMTApO1xuXG4gICAgYm9hcmQuYWRkU2hpcFRvR2FtZWJvYXJkKDUsIHJlc3VsdFZlcnRpY2FsLCBbZmlyc3RDb29yZCwgc2Vjb25kQ29vcmRdKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKCcuLi9zcmMvZ2FtZWJvYXJkJyk7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllck5hbWUsIGJvYXJkLCBpc0NvbXB1dGVyUGxheWVyKSB7XG4gICAgdGhpcy5wbGF5ZXJOYW1lID0gcGxheWVyTmFtZTtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy5pc0NvbXB1dGVyUGxheWVyID0gaXNDb21wdXRlclBsYXllcjtcbiAgfVxuXG4gIGdldFR1cm5Db29yZGluYXRlcyhvcHBvbmVudCkge1xuICAgIGlmICh0aGlzLmlzQ29tcHV0ZXJQbGF5ZXIpIHtcbiAgICAgIGNvbnN0IHsgc2hvdHNSZWNlaXZlZCB9ID0gb3Bwb25lbnQuYm9hcmQ7XG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZGluYXRlcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDEwOyBhICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCAxMDsgYiArPSAxKSB7XG4gICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IFthLCBiXTtcbiAgICAgICAgICBpZiAoIXNob3RzUmVjZWl2ZWQuc29tZSgoW3gsIHldKSA9PiB4ID09PSBhICYmIHkgPT09IGIpKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYXZhaWxhYmxlQ29vcmRpbmF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gYXZhaWxhYmxlIGNvb3JkaW5hdGVzJyk7IFxuICAgICAgfVxuXG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCk7XG4gICAgICBjb25zdCBbYSwgYl0gPSBhdmFpbGFibGVDb29yZGluYXRlc1tyYW5kb21JbmRleF07XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFthLCBiXSk7IC8vIFJldHVybiBhIHJlc29sdmVkIHByb21pc2Ugd2l0aCB0aGUgcmFuZG9tIGF2YWlsYWJsZSBjb29yZGluYXRlc1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0R2FtZWJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllclR3b0dhbWVib2FyZENvbnRhaW5lcicpO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZScpKSB7XG4gICAgICAgICAgY29uc3QgYSA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV0sIDEwKTtcbiAgICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsyXSwgMTApO1xuXG4gICAgICAgICAgY29uc3QgeyBzaG90c1JlY2VpdmVkIH0gPSBvcHBvbmVudC5ib2FyZDtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZENvb3JkaW5hdGUgPSBbYSwgYl07XG5cbiAgICAgICAgICBpZiAoc2hvdHNSZWNlaXZlZC5zb21lKChbeCwgeV0pID0+IHggPT09IGEgJiYgeSA9PT0gYikpIHtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0R2FtZWJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxlY3RlZENvb3JkaW5hdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0YXJnZXRHYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gIH1cblxuICBnZW5lcmF0ZUNvbXB1dGVyUG9zaXRpb25zKGJvYXJkKSB7XG4gICAgd2hpbGUgKGJvYXJkLnNoaXBzT25Cb2FyZC5sZW5ndGggPCA1KSB7XG4gICAgICBsZXQgcmVzdWx0VmVydGljYWwgPSB0cnVlO1xuICAgIGNvbnN0IGRlY2lkZVZlcnRpY2FsID0gdGhpcy5nZXRSYW5kb21JbnQoMik7XG5cbiAgICBpZiAoZGVjaWRlVmVydGljYWwgPT09IDApIHtcbiAgICAgIHJlc3VsdFZlcnRpY2FsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcbiAgICBjb25zdCBzZWNvbmRDb29yZCA9IHRoaXMuZ2V0UmFuZG9tSW50KDEwKTtcblxuICAgIGJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCgyLCByZXN1bHRWZXJ0aWNhbCwgW2ZpcnN0Q29vcmQsIHNlY29uZENvb3JkXSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gICAgcmV0dXJuIHRoaXMuaGl0cztcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIGRyYWdEcm9wRE9NLFxuICBkcmF3SGl0cywgZHJhd1NoaXBzLCBmaXJzdERPTSwgZ2FtZWJvYXJkRE9NLFxufSBmcm9tICcuL0RPTWZ1bmN0aW9ucyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xuXG4vLyBmaXJzdCBwYWdlIGxvYWQsIGdlbmVyYXRlcyBza2VsZXRvbiBvZiB3ZWJzaXRlLCBjb250YWluZXJzIGFuZCB0aXRsZVxuZmlyc3RET00oKTtcbi8vIGdhbWUgc2V0dXBcbi8vIGNyZWF0ZSBnYW1lYm9hcmQgd2l0aCA1IHNoaXBzIEZPUiBFQUNIIHBsYXllclxuY29uc3QgcGxheWVyT25lR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xucGxheWVyT25lR2FtZWJvYXJkLmFkZFNoaXBUb0dhbWVib2FyZCg1LCBmYWxzZSwgWzEsIDFdKTtcblxuY29uc3QgcGxheWVyVHdvR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xucGxheWVyVHdvR2FtZWJvYXJkLmdlbmVyYXRlQ29tcHV0ZXJQb3NpdGlvbnMocGxheWVyVHdvR2FtZWJvYXJkKTtcbmNvbnNvbGUubG9nKHBsYXllclR3b0dhbWVib2FyZCk7XG4vL3doaWxlIHBsYXllcnR3byBnYW1lYm9hcmQgaGFzIDwgNSBzaGlwc29uYm9hcmQsIGdlbmVyYXRlIHJhbmRvbSBjb29yZHMgYW5kIGFkZCBhcyBzaGlwXG4vL3dpbGwgZG8gbm90aGluZyBpZiBzaGlwIGlzIGludmFsaWQgbW92ZSBhbmQgY29udGludWUgdW50aWwgc2hpcHNvbmJvYXJkIDwgNSBpcyBmYWxzZVxuXG4vLyBjcmVhdGUgcGxheWVyIDFcbmNvbnN0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ1BsYXllciBPbmUnLCBwbGF5ZXJPbmVHYW1lYm9hcmQsIGZhbHNlKTtcbi8vIGNyZWF0ZSBwbGF5ZXIgMiAoY29tcHV0ZXIpXG5jb25zdCBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdQbGF5ZXIgVHdvJywgcGxheWVyVHdvR2FtZWJvYXJkLCB0cnVlKTtcblxuLy8gZHJhdyBnYW1lYm9hcmRzXG5cbmdhbWVib2FyZERPTShwbGF5ZXJPbmUsIHBsYXllclR3byk7XG5kcmFnRHJvcERPTSgpO1xuZHJhd1NoaXBzKHBsYXllck9uZSk7XG5cbi8vIGdhbWUgb3ZlciBmdW5jdGlvblxuZnVuY3Rpb24gZ2FtZW92ZXIocGxheWVyT25lT2JqZWN0LCBwbGF5ZXJUd29PYmplY3QpIHtcbiAgaWYgKHBsYXllck9uZU9iamVjdC5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIHJldHVybiBwbGF5ZXJUd287XG4gIH1cbiAgaWYgKHBsYXllclR3b09iamVjdC5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIHJldHVybiBwbGF5ZXJPbmU7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbi8vIHN0YXJ0IGdhbWUgbG9vcFxuLy8gd2hpbGUgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGJvdGggYWxsc2hpcHNzdW5rIGlzIG51bGxcblxuYXN5bmMgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIHdoaWxlIChnYW1lb3ZlcihwbGF5ZXJPbmUsIHBsYXllclR3bykgPT09IG51bGwpIHtcbiAgICAvLyBQbGF5ZXIgT25lJ3MgdHVyblxuICAgIGF3YWl0IHBsYXllclR1cm4ocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gICAgaWYgKGdhbWVvdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKSAhPT0gbnVsbCkge1xuICAgICAgYnJlYWs7IC8vIEV4aXQgdGhlIGxvb3AgaWYgdGhlIGdhbWUgaXMgb3ZlclxuICAgIH1cblxuICAgIC8vIFBsYXllciBUd28ncyB0dXJuXG4gICAgYXdhaXQgcGxheWVyVHVybihwbGF5ZXJUd28sIHBsYXllck9uZSk7XG4gIH1cblxuICAvLyBHYW1lIG92ZXJcbiAgaWYgKGdhbWVvdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PT0gcGxheWVyT25lKSB7XG4gICAgYWxlcnQoJ1BsYXllciBPbmUgV2lucycpO1xuICB9IGVsc2UgaWYgKGdhbWVvdmVyKHBsYXllck9uZSwgcGxheWVyVHdvKSA9PT0gcGxheWVyVHdvKSB7XG4gICAgYWxlcnQoJ1BsYXllciBUd28gV2lucycpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBsYXllclR1cm4oY3VycmVudFBsYXllciwgb3Bwb25lbnQpIHtcbiAgY29uc3QgY29vcmRzID0gYXdhaXQgY3VycmVudFBsYXllci5nZXRUdXJuQ29vcmRpbmF0ZXMob3Bwb25lbnQpO1xuICBvcHBvbmVudC5ib2FyZC5yZWNlaXZlSGl0KGNvb3Jkcyk7XG4gIGRyYXdIaXRzKHBsYXllck9uZSwgcGxheWVyVHdvKTtcblxuICBpZiAoIWN1cnJlbnRQbGF5ZXIuaXNDb21wdXRlclBsYXllcikge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcbiAgfVxuXG59XG5cbmdhbWVMb29wKCk7IC8vIFN0YXJ0IHRoZSBnYW1lIGxvb3BcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9