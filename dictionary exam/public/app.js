/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n.dropbtn {\\n  background-color: inherit;\\n  padding: 5px;\\n  font-size: 16px;\\n  border: none;\\n  color: #A445ED;\\n}\\n\\n/* The container <div> - needed to position the dropdown content */\\n.dropdown {\\n  position: relative;\\n  display: inline-block;\\n}\\n\\n/* Dropdown Content (Hidden by Default) */\\n.dropdown-content {\\n  display: none;\\n  position: absolute;\\n  background-color: #f1f1f1;\\n  min-width: 160px;\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\\n  z-index: 1;\\n}\\n\\n/* Links inside the dropdown */\\n.dropdown-content a {\\n  color: black;\\n  padding: 12px 16px;\\n  text-decoration: none;\\n  display: block;\\n}\\n\\n/* Change color of dropdown links on hover */\\n.dropdown-content a:hover {\\n  background-color: #ddd;\\n}\\n\\n/* Show the dropdown menu on hover */\\n.dropdown:hover .dropdown-content {\\n  display: block;\\n}\\n\\n/* Change the background color of the dropdown button when the dropdown content is shown */\\n.dropbtn a {\\n  font-family: \\\"Inter\\\";\\n  font-style: normal;\\n  font-weight: 700;\\n}\\n\\n.sans {\\n  font-family: \\\"Inter\\\";\\n  font-style: normal;\\n  font-weight: 700;\\n}\\n\\n.serif {\\n  font-family: \\\"Lora\\\";\\n  font-style: normal;\\n  font-weight: 700;\\n}\\n\\n.mono {\\n  font-family: \\\"Inconsolata\\\";\\n  font-style: normal;\\n  font-weight: 700;\\n}\\n\\n*,\\n*,\\nhtml {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  background: #F2F2F2;\\n  font-family: sans-serif;\\n  height: 100vh;\\n}\\n\\n.container {\\n  max-width: 815px;\\n  width: 100%;\\n  margin-left: auto;\\n  margin-right: auto;\\n  padding-right: 20px;\\n  padding-left: 20px;\\n}\\n\\n.white {\\n  color: #FFFFFF;\\n}\\n\\n.header-menu {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  margin-top: 50px;\\n}\\n\\n#plan {\\n  background-color: inherit;\\n  border: none;\\n  font-weight: 700;\\n  font-size: 18px;\\n  line-height: 24px;\\n}\\n\\n.dark-mode {\\n  background: #050505;\\n  color: #fff;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n  opacity: 0;\\n}\\n\\n.checkbox {\\n  opacity: 0;\\n  position: absolute;\\n}\\n\\n.label {\\n  width: 40px;\\n  height: 16px;\\n  background-color: #111;\\n  display: flex;\\n  border-radius: 50px;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 5px;\\n  position: relative;\\n  transform: scale(1.5);\\n}\\n\\n.ball {\\n  width: 20px;\\n  height: 20px;\\n  background-color: white;\\n  position: absolute;\\n  top: 2px;\\n  left: 2px;\\n  border-radius: 50%;\\n  transition: transform 0.2s linear;\\n}\\n\\n/*  target the elemenent after the label*/\\n.checkbox:checked + .label .ball {\\n  transform: translateX(24px);\\n}\\n\\n.select {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.search {\\n  margin-top: 1rem;\\n  padding-bottom: 0;\\n}\\n\\n.search-form {\\n  width: var(--smallWidth);\\n  margin: 0 auto;\\n  max-width: var(--maxWidth);\\n  background: var(--mainWhite);\\n  text-transform: capitalize;\\n  margin-bottom: 45px;\\n  box-shadow: var(--lightShadow);\\n}\\n\\n.form-control label {\\n  display: block;\\n  margin-bottom: 1.25rem;\\n  font-weight: bold;\\n  letter-spacing: 0.25rem;\\n}\\n\\n.form-control input {\\n  width: 100%;\\n  border: none;\\n  border-color: #A445ED;\\n  border: 1px solid #A445ED;\\n  border-radius: 16px;\\n  padding: 0.5rem;\\n  font-size: 1.2rem;\\n}\\n\\n.word {\\n  font-weight: 700;\\n  font-weight: 700;\\n  font-size: 64px;\\n  line-height: 77px;\\n}\\n\\n.transcript {\\n  font-weight: 400;\\n  font-size: 24px;\\n  line-height: 29px;\\n  color: #A445ED;\\n  margin: 8px 0 40px 0;\\n}\\n\\n.noun {\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 24px;\\n  line-height: 29px;\\n  margin-bottom: 40px;\\n}\\n\\n.meaning {\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 20px;\\n  line-height: 24px;\\n  color: #757575;\\n  margin-bottom: 25px;\\n}\\n\\n.info__text--desc {\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 18px;\\n  line-height: 24px;\\n  list-style-type: none;\\n  padding: 5px 25px;\\n}\\n.info__text--desc span {\\n  color: #757575;\\n  padding-left: 20px;\\n}\\n\\n.info__text--desc::before {\\n  content: \\\"•\\\";\\n  color: #8F19E8;\\n  padding-right: 10px;\\n}\\n\\n.syn {\\n  display: flex;\\n  align-items: center;\\n  gap: 22px;\\n  padding-top: 40px;\\n}\\n\\n.synonyms {\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 20px;\\n  line-height: 24px;\\n  color: #757575;\\n}\\n\\n.synonym {\\n  font-style: normal;\\n  font-weight: 700;\\n  font-size: 20px;\\n  line-height: 24px;\\n  text-decoration-line: underline;\\n  color: #A445ED;\\n}\\n\\n.verb {\\n  font-style: italic;\\n  font-weight: 700;\\n  font-size: 24px;\\n  line-height: 29px;\\n  padding: 40px 0;\\n}\\n\\n.source {\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 17px;\\n  /* identical to box height */\\n  text-decoration-line: underline;\\n  /* 757575 */\\n  color: #757575;\\n  margin: 40px 0;\\n}\\n.source span {\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 17px;\\n  /* identical to box height */\\n  text-decoration-line: underline;\\n  /* 2D2D2D */\\n}\\n\\n.info {\\n  padding-bottom: 20px;\\n}\\n\\n.wrapper {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/css/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/css/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ (() => {

eval("const body = document.body\r\nconst darkBtn = document.querySelector('.dark-btn')\r\n\r\nconst sans = document.querySelector('.sans')\r\nconst serif = document.querySelector('.serif')\r\nconst mono = document.querySelector('.mono')\r\nconst dropbtn = document.querySelector('.dropbtn')\r\n// const modeLocal = localStorage.getItem('mode')\r\n// if(modeLocal){\r\n//   body.classList.add('dark-mode')\r\n//   darkBtn.classList.toggle('hidden')\r\n//   lightBtn.classList.toggle('hidden')\r\n// }\r\nconst local = localStorage.getItem('mode') \r\nif(local) {\r\n  body.classList.toggle('dark-mode')\r\n  body.classList.toggle('white')\r\n  plan.classList.toggle('white')\r\n  dropbtn.classList.toggle('white')\r\n\r\n}\r\n\r\ndarkBtn.addEventListener('click', ()=> {\r\n  body.classList.toggle('dark-mode')\r\n  body.classList.toggle('white')\r\n  plan.classList.toggle('white')\r\n  \r\n  if(body.classList.contains('dark-mode')){\r\n    localStorage.setItem('mode', 'dark-mode')\r\n    \r\n  } else {\r\n    localStorage.setItem('mode', '')\r\n  }\r\n\r\n})\r\n\r\nsans.addEventListener(\"click\", ()=>{\r\n  body.style.fontFamily = 'Inter'\r\n  dropbtn.textContent = 'Sans-serif'\r\n})\r\n\r\nserif.addEventListener(\"click\", ()=>{\r\n  body.style.fontFamily = 'Lora'\r\n  dropbtn.textContent = 'Serif'\r\n})\r\n\r\nmono.addEventListener(\"click\", ()=>{\r\n  body.style.fontFamily = 'Inconsolata'\r\n  dropbtn.textContent = 'Mono'\r\n})\n\n//# sourceURL=webpack://webpack/./src/about.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _createWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createWord */ \"./src/createWord.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts */ \"./src/fonts.js\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fonts__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request */ \"./src/request.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_about__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/app.js?");

/***/ }),

/***/ "./src/createWord.js":
/*!***************************!*\
  !*** ./src/createWord.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"updateUI\": () => (/* binding */ updateUI)\n/* harmony export */ });\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/request.js\");\n\r\nconst url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'\r\nconst ul = document.querySelector('meaning')\r\n\r\n;(0,_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url).then((items) => updateUI(items))\r\n\r\n\r\nfunction updateUI(data) {\r\n  const container = document.querySelector(\".info\")\r\n  container.innerHTML = \"\"\r\n  \r\n    const { word, phonetics, meanings, sourceUrls, } = data[0]\r\n    \r\n    const div = document.createElement(\"div\")\r\n    div.classList.add(\"letters\")\r\n    div.innerHTML = `\r\n    <div class= \"wrapper\">\r\n    <h1 class=\"word\">${word}</h1>\r\n    <div class=\"main__play\"> \r\n      <svg class=\"playBtn\" width=\"75\" height=\"75\" viewBox=\"0 0 75 75\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <circle cx=\"37.5\" cy=\"37.5\" r=\"37.5\" fill=\"#A445ED\"/>\r\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M29 27V48L50 37.5L29 27Z\" fill=\"white\"/>\r\n      </svg>\r\n    </div>\r\n    </div>\r\n    <h3 class=\"transcript\">${phonetics[1].text}</h3>\r\n    <h3 class=\"noun\">\r\n    noun\r\n    </h3>\r\n  \r\n    <ul class=\"meaning\">Meaning\r\n    \r\n      \r\n    </ul>\r\n  \r\n   <div class=\"syn\">\r\n    <h3 class=\"synonyms\">Synonyms: </h3>\r\n    <a class=\"synonym\">\r\n    \r\n    </a>\r\n  </div>\r\n    <h3 class=\"verb\">Verb</h3>\r\n    <ul class=\"meaning\">Meaning \r\n    \r\n        <span></span></li>\r\n  \r\n    </ul>\r\n   \r\n  \r\n    <a href=\"${sourceUrls}\" class=\"source\">Sourse: ${sourceUrls}</a>\r\n                                                \r\n                                                  `\r\n\r\n    container.appendChild(div)\r\n\r\n\r\n\r\n  const Nmeaning = document.querySelector('.meaning');\r\n  const meaning = document.querySelectorAll('.meaning')[1];\r\n  const synonymsLink = document.querySelector('.synonym');\r\n  meanings[0].definitions.forEach(e => {\r\n      const div = document.createElement('div');\r\n      div.innerHTML = `\r\n         \r\n          <p class=\"info__text--desc\">${e.definition}</p>\r\n      `\r\n      Nmeaning.appendChild(div)\r\n  });\r\n\r\n  meanings[1].definitions.forEach(e => {\r\n      const div = document.createElement('div');\r\n      div.innerHTML = `\r\n        \r\n          <p class=\"info__text--desc\">“${e.definition}”</p>\r\n      `\r\n      meaning.appendChild(div)\r\n  });\r\n\r\n  meanings[0].synonyms.forEach(e => {\r\n      synonymsLink.innerHTML += `\r\n          ${e ? e : 'No synonyms'}\r\n      `\r\n  });\r\n  const playBtn = document.querySelector('.playBtn')\r\n  playBtn.addEventListener('click', () => {\r\n        let audio = new Audio(phonetics[0].audio)\r\n        audio.play()\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateUI);\n\n//# sourceURL=webpack://webpack/./src/createWord.js?");

/***/ }),

/***/ "./src/fonts.js":
/*!**********************!*\
  !*** ./src/fonts.js ***!
  \**********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://webpack/./src/fonts.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ \"./src/request.js\");\n/* harmony import */ var _createWord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createWord */ \"./src/createWord.js\");\n\r\n\r\nconst url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'\r\nconst input = document.getElementById('input')\r\nconst form = document.querySelector('.search-form')\r\n\r\n\r\n\r\nform.addEventListener(\"submit\", (e)=>{\r\n  e.preventDefault()\r\n  console.log(input.value)\r\n  ;(0,_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`${url}${input.value}`).then(items => (0,_createWord__WEBPACK_IMPORTED_MODULE_1__.updateUI)(items))\r\n})\n\n//# sourceURL=webpack://webpack/./src/form.js?");

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"fetchApi\": () => (/* binding */ fetchApi)\n/* harmony export */ });\nconst fetchApi = async (url)=>{\r\n  try{\r\n  const req = await fetch(url)\r\n  const data = await req.json()\r\n  console.log(data)\r\n  return data\r\n  } catch(error){\r\n    console.log(error)\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchApi);\n\n//# sourceURL=webpack://webpack/./src/request.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;