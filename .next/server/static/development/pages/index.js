module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/Hero */ "./src/Hero.js");
/* harmony import */ var _src_HiringPromo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/HiringPromo */ "./src/HiringPromo.js");
/* harmony import */ var _src_PrimerCSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/PrimerCSS */ "./src/PrimerCSS.js");
/* harmony import */ var _src_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Divider */ "./src/Divider.js");
/* harmony import */ var _src_AtomPlugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/AtomPlugins */ "./src/AtomPlugins.js");
/* harmony import */ var _src_OcticonsPromo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/OcticonsPromo */ "./src/OcticonsPromo.js");
/* harmony import */ var _src_OpenSource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/OpenSource */ "./src/OpenSource.js");
/* harmony import */ var _src_PrimerReact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/PrimerReact */ "./src/PrimerReact.js");
var _jsxFileName = "/Users/emily/github/primer.style/pages/index.js";










function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: [9, 12],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_HiringPromo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: [9, 12],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_PrimerCSS__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: [9, 12],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_PrimerReact__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: [9, 12],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_AtomPlugins__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: [9, 12],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_OcticonsPromo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_OpenSource__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/AtomPlugins.js":
/*!****************************!*\
  !*** ./src/AtomPlugins.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AtomPlugins; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_Atom_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/Atom.svg */ "./src/svg/Atom.svg");
/* harmony import */ var _ButtonFill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonFill */ "./src/ButtonFill.js");
/* harmony import */ var _ButtonOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonOutline */ "./src/ButtonOutline.js");
/* harmony import */ var _IndexGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IndexGrid */ "./src/IndexGrid.js");
var _jsxFileName = "/Users/emily/github/primer.style/src/AtomPlugins.js";






function AtomPlugins() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    my: [0, 3, 6],
    flexDirection: ['row', 'row', 'row-reverse'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    mb: [5, 5, 5, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_Atom_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: "100%",
    height: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    my: [4, 3, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    color: "blue.4",
    mb: 3,
    pr: [0, 0, 0, 3],
    fontSize: 5,
    lineHeight: "1.25",
    fontWeight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "A better development experience with Atom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "blue.2",
    as: "p",
    fontSize: 3,
    mb: 5,
    pr: [0, 0, 0, 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Install this custom Atom package to autocomplete classnames for Primer CSS and rails helpers for Octicons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonFill__WEBPACK_IMPORTED_MODULE_3__["default"], {
    my: [2, 0],
    mr: 2,
    href: "https://atom.io/packages/autocomplete-primer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Install package"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonOutline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: [2, 0],
    href: "https://atom.io/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Get Atom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    fontSize: 2,
    mt: 5,
    color: "blue.3",
    fontFamily: "mono",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "apm install autocomplete-primer")));
}

/***/ }),

/***/ "./src/ButtonFill.js":
/*!***************************!*\
  !*** ./src/ButtonFill.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
// Extends Link from primer/components to make color primitives available, as well as fontSize and space which should be added in primer/components. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.



var ButtonFill = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_primer_components__WEBPACK_IMPORTED_MODULE_0__["Link"]).withConfig({
  displayName: "ButtonFill",
  componentId: "r83u1o-0"
})(["color:", " !important;border-color:", ";border-width:1px;border-style:solid;background-color:", ";padding:0.75em 1.25em;font-size:", ";border-radius:6px;font-size:16px;font-weight:600;display:inline-block;&:hover{border-color:", ";background-color:", ";text-decoration:none;}", ";"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.black'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.3'), function (props) {
  return props.theme.fontSizes[2];
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.4'), styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]);
/* harmony default export */ __webpack_exports__["default"] = (ButtonFill);

/***/ }),

/***/ "./src/ButtonFillDark.js":
/*!*******************************!*\
  !*** ./src/ButtonFillDark.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
// Extends Link from primer/components to make color primitives available, as well as fontSize and space which should be added in primer/components. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.



var ButtonFillDark = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_primer_components__WEBPACK_IMPORTED_MODULE_0__["Link"]).withConfig({
  displayName: "ButtonFillDark",
  componentId: "sc-1ppz6yv-0"
})(["color:", " !important;background-color:", ";padding:0.75em 1.25em;font-size:", ";border-radius:6px;font-size:16px;font-weight:600;display:inline-block;&:hover{color:", " !important;background-color:", ";text-decoration:none;}", ";"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.2'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.black'), function (props) {
  return props.theme.fontSizes[2];
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.9'), styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]);
/* harmony default export */ __webpack_exports__["default"] = (ButtonFillDark);

/***/ }),

/***/ "./src/ButtonOutline.js":
/*!******************************!*\
  !*** ./src/ButtonOutline.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
// Extends Link from primer/components to make color primitives available, as well as fontSize and space which should be added in primer/components. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.



var ButtonOutline = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_primer_components__WEBPACK_IMPORTED_MODULE_0__["Link"]).withConfig({
  displayName: "ButtonOutline",
  componentId: "sc-19hytih-0"
})(["color:", " !important;border-color:", ";border-width:1px;border-style:solid;padding:0.75em 1.25em;font-size:", ";border-radius:6px;font-size:16px;font-weight:600;display:inline-block;&:hover{color:", " !important;border-color:", ";text-decoration:none;}", ";"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.3'), function (props) {
  return props.theme.fontSizes[2];
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.4'), styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]);
/* harmony default export */ __webpack_exports__["default"] = (ButtonOutline);

/***/ }),

/***/ "./src/ButtonPromo.js":
/*!****************************!*\
  !*** ./src/ButtonPromo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
// Extends Link from primer/components to make color primitives available, as well as fontSize and space which should be added in primer/components. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.



var ButtonPromo = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_primer_components__WEBPACK_IMPORTED_MODULE_0__["Link"]).withConfig({
  displayName: "ButtonPromo",
  componentId: "sc-3jime3-0"
})(["color:", " !important;border-color:", ";border-width:1px;border-style:solid;padding:0.75em 1.25em;font-size:", ";border-radius:6px;font-size:16px;font-weight:600;display:inline-block;&:hover{color:", " !important;background-color:", " !important;border-color:", ";text-decoration:none;}", ";"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.orange.3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.orange.3'), function (props) {
  return props.theme.fontSizes[2];
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.black'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.orange.4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.orange.4'), styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]);
/* harmony default export */ __webpack_exports__["default"] = (ButtonPromo);

/***/ }),

/***/ "./src/Divider.js":
/*!************************!*\
  !*** ./src/Divider.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



var Divider = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_primer_components__WEBPACK_IMPORTED_MODULE_0__["Box"]).withConfig({
  displayName: "Divider",
  componentId: "sc-1uzwvx5-0"
})(["border-top:2px solid ", ";opacity:0.15;width:10%;margin-right:auto;margin-left:auto;"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.3'));
/* harmony default export */ __webpack_exports__["default"] = (Divider);

/***/ }),

/***/ "./src/Hero.js":
/*!*********************!*\
  !*** ./src/Hero.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_Hero_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/Hero.svg */ "./src/svg/Hero.svg");
/* harmony import */ var _svg_HeroOverlay_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/HeroOverlay.svg */ "./src/svg/HeroOverlay.svg");
/* harmony import */ var _LinkLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinkLight */ "./src/LinkLight.js");
/* harmony import */ var _IndexGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IndexGrid */ "./src/IndexGrid.js");
var _jsxFileName = "/Users/emily/github/primer.style/src/Hero.js";






function Hero() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    pt: [4, 2, 5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    my: [6, 6, 12],
    flexDirection: ['row', 'row', 'row-reverse'],
    alignItems: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    px: 5,
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    width: [10 / 12, 8 / 12, 8 / 12, 5 / 12],
    mx: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Relative"], {
    mt: [2, 3, 5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_Hero_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: "100%",
    height: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Absolute"], {
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
    style: {
      pointerEvents: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_HeroOverlay_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "100%",
    height: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    px: 5,
    my: [4, 3, 0],
    width: [1, 1, 1, 7 / 12],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    color: "blue.4",
    mb: 2,
    fontSize: [48, 56, 84],
    fontWeight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Primer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "blue.2",
    fontSize: [4, 5, 5, 7],
    lineHeight: 1.25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Resources, tooling, and design guidelines for building interfaces with GitHub\u2019s design system"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontFamily: "mono",
    as: "p",
    color: "blue.3",
    mt: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkLight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: [0, 1, 2],
    href: "https://styleguide.github.com/primer/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Style guide"), ' ', "\u30FB", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkLight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ml: 2,
    fontSize: [0, 1, 2],
    href: "https://spectrum.chat/primer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Community"), ' ', "\u30FB", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkLight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ml: 2,
    fontSize: [0, 1, 2],
    href: "https://github.com/primer/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Open-source")))));
}

/***/ }),

/***/ "./src/HiringPromo.js":
/*!****************************!*\
  !*** ./src/HiringPromo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HiringPromo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @githubprimer/octicons-react */ "@githubprimer/octicons-react");
/* harmony import */ var _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ButtonPromo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonPromo */ "./src/ButtonPromo.js");
/* harmony import */ var _LinkPromo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinkPromo */ "./src/LinkPromo.js");
var _jsxFileName = "/Users/emily/github/primer.style/src/HiringPromo.js";





function HiringPromo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "div",
    px: 5,
    textAlign: ['left', 'left', 'center'],
    className: "container-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: 5,
    mb: 2,
    color: "orange.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["StyledOcticon"], {
    icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["RadioTower"],
    mr: 3,
    size: 40,
    verticalAlign: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), "Join GitHub!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    fontSize: 3,
    mb: 5,
    px: [0, 0, 0, 5],
    color: "orange.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "GitHub is looking for a Product Design Manager to join the organization. Our growing team of design leaders help shape our products, people, and process. Join us and help us make sure we\u2019re solving the right problems with the best solutions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkPromo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: [2, 0],
    fontSize: 2,
    mr: 5,
    href: "https://github.com/about/careers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "View all open positions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonPromo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    block: true,
    my: [2, 0],
    href: "https://boards.greenhouse.io/github/jobs/1470915",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Apply \u2192"));
}

/***/ }),

/***/ "./src/IndexGrid.js":
/*!**************************!*\
  !*** ./src/IndexGrid.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emily/github/primer.style/src/IndexGrid.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var IndexGrid = function IndexGrid(props) {
  var alignItems = props.alignItems,
      children = props.children,
      flexDirection = props.flexDirection,
      flexWrap = props.flexWrap,
      rest = _objectWithoutProperties(props, ["alignItems", "children", "flexDirection", "flexWrap"]);

  var flexProps = {
    alignItems: alignItems,
    flexDirection: flexDirection,
    flexWrap: flexWrap
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    mx: 'auto',
    px: 5
  }, rest, {
    className: "container-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], _extends({}, flexProps, {
    mx: -5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), children));
};

IndexGrid.defaultProps = {
  flexWrap: 'wrap'
};

IndexGrid.Item = function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, _extends({
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    width: [1, 1, 1, 6 / 12],
    px: 5
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexGrid);

/***/ }),

/***/ "./src/LinkDark.js":
/*!*************************!*\
  !*** ./src/LinkDark.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
// Extends Link from primer/components to make color primitives available. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.



var LinkDark = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_primer_components__WEBPACK_IMPORTED_MODULE_0__["Link"]).withConfig({
  displayName: "LinkDark",
  componentId: "sc-1kgv3t-0"
})(["color:", " !important;", ";&:hover{color:", ";}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.black'), styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.8'));
/* harmony default export */ __webpack_exports__["default"] = (LinkDark);

/***/ }),

/***/ "./src/LinkLight.js":
/*!**************************!*\
  !*** ./src/LinkLight.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
// Extends Link from primer/components to make color primitives available. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.



var LinkLight = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_primer_components__WEBPACK_IMPORTED_MODULE_0__["Link"]).withConfig({
  displayName: "LinkLight",
  componentId: "s4m15k-0"
})(["color:", " !important;", ";"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.3'), styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
LinkLight.defaultProps = {
  color: 'blue.2'
};
/* harmony default export */ __webpack_exports__["default"] = (LinkLight);

/***/ }),

/***/ "./src/LinkPromo.js":
/*!**************************!*\
  !*** ./src/LinkPromo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
// Extends Link from primer/components to make color primitives available. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.



var LinkPromo = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_primer_components__WEBPACK_IMPORTED_MODULE_0__["Link"]).withConfig({
  displayName: "LinkPromo",
  componentId: "sc-18mrmpj-0"
})(["color:", " !important;"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.orange.3'));
/* harmony default export */ __webpack_exports__["default"] = (LinkPromo);

/***/ }),

/***/ "./src/OcticonsPromo.js":
/*!******************************!*\
  !*** ./src/OcticonsPromo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OcticonsPromo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @githubprimer/octicons-react */ "@githubprimer/octicons-react");
/* harmony import */ var _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_Octicons_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/Octicons.svg */ "./src/svg/Octicons.svg");
/* harmony import */ var _LinkLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinkLight */ "./src/LinkLight.js");
var _jsxFileName = "/Users/emily/github/primer.style/src/OcticonsPromo.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function OcticonsPromo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    px: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    alignItems: "center",
    flexDirection: "column",
    style: {
      textAlign: 'center'
    },
    mb: 8,
    mx: "auto",
    className: "container-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Relative"], {
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    zIndex: 100,
    mt: [4, 3, 0],
    width: [1, 1, 1, 6 / 12],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "http://octicons.github.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    lineHeight: "1.25",
    color: "blue.4",
    mb: 2,
    fontSize: 7,
    fontWeight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Octicons")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    color: "blue.1",
    mb: [2, 3],
    fontSize: [4, 5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Your project. GitHub\u2019s icons."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 2,
    color: "blue.3",
    fontFamily: "mono",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "v8.1.0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mb: 64,
    mx: "auto",
    className: "container-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_Octicons_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "100%",
    height: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    pb: 12,
    mx: "auto",
    className: "container-xl",
    color: "blue.2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    mx: -5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Package, {
    icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["FileCode"],
    href: "https://github.com/primer/octicons/#javascript",
    title: "JavaScript docs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Install the node.js or react.js package via npm to use with your JavaScript project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Package, {
    icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Ruby"],
    href: "https://github.com/primer/octicons/#ruby",
    title: "Ruby docs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Install the Ruby gem, Rails helper, or Jekyll plugin to use in your project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Package, {
    icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Paintcan"],
    href: "https://www.figma.com/file/FP7lqd1V00LUaT5zvdklkkZr/Octicons/duplicate",
    title: "Open in Figma",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Use SVGs or Figma components in your design projects"))));
}

function Package(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      href = _ref.href,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ["children", "icon", "href", "title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], _extends({
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    width: [1, 1, 1, 1 / 3],
    px: 5,
    mb: [4, 5, 5, 0]
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    color: "blue.3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 44,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["StyledOcticon"], {
    icon: icon,
    mr: 3,
    height: 40,
    verticalAlign: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    px: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    fontSize: 2,
    mt: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkLight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "inline-block",
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, title, " \u2192")));
}

/***/ }),

/***/ "./src/OpenSource.js":
/*!***************************!*\
  !*** ./src/OpenSource.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenSource; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @githubprimer/octicons-react */ "@githubprimer/octicons-react");
/* harmony import */ var _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ButtonFillDark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ButtonFillDark */ "./src/ButtonFillDark.js");
/* harmony import */ var _TwitterIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TwitterIcon */ "./src/TwitterIcon.js");
/* harmony import */ var _SpectrumIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpectrumIcon */ "./src/SpectrumIcon.js");
/* harmony import */ var _IndexGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IndexGrid */ "./src/IndexGrid.js");
/* harmony import */ var _LinkDark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LinkDark */ "./src/LinkDark.js");
var _jsxFileName = "/Users/emily/github/primer.style/src/OpenSource.js";








function OpenSource() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "blue.2",
    pt: 12,
    mt: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    alignItems: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    mb: [8, 8, 8, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    lineHeight: "1.25",
    color: "black",
    mb: 3,
    fontSize: 7,
    fontWeight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Open source"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    color: "black",
    mb: 5,
    fontSize: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Primer is open-sourced on GitHub. Contributions and feedback are welcome!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonFillDark__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mr: 2,
    href: "https://github.com/primer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["StyledOcticon"], {
    icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["MarkGithub"],
    size: 20,
    verticalAlign: "text-bottom",
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "Contribute on GitHub")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    lineHeight: "1.25",
    color: "black",
    mb: 3,
    fontSize: 7,
    fontWeight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Keep in touch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkDark__WEBPACK_IMPORTED_MODULE_7__["default"], {
    pt: 1,
    fontSize: 2,
    mb: 3,
    display: "block",
    href: "https://twitter.com/githubprimer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["StyledOcticon"], {
    icon: _TwitterIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
    size: 20,
    verticalAlign: "top",
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), "Follow us on Twitter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkDark__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: 2,
    mb: 3,
    display: "block",
    href: "https://spectrum.chat/primer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["StyledOcticon"], {
    icon: _SpectrumIcon__WEBPACK_IMPORTED_MODULE_5__["default"],
    size: 20,
    verticalAlign: "top",
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), "Chat with us in Spectrum"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkDark__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: 2,
    mb: 3,
    display: "block",
    href: "https://github.com/primer/primer/issues/new/choose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["StyledOcticon"], {
    icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Octoface"],
    size: 20,
    verticalAlign: "text-top",
    mr: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), "Share feedback on GitHub"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: "black",
    px: 5,
    mx: "auto",
    className: "container-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["BorderBox"], {
    mt: 12,
    py: 5,
    borderTop: 2,
    borderBottom: "none",
    borderLeft: "none",
    borderRight: "none",
    borderColor: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    pr: 1,
    as: "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Created and maintained by GitHub\u2019s"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkDark__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontWeight: "bold",
    href: "https://primer.style/team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Design Systems team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Copyright GitHub 2018."))));
}

/***/ }),

/***/ "./src/PrimerCSS.js":
/*!**************************!*\
  !*** ./src/PrimerCSS.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrimerCSS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @githubprimer/octicons-react */ "@githubprimer/octicons-react");
/* harmony import */ var _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_Css_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/Css.svg */ "./src/svg/Css.svg");
/* harmony import */ var _IndexGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IndexGrid */ "./src/IndexGrid.js");
/* harmony import */ var _ButtonFill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonFill */ "./src/ButtonFill.js");
/* harmony import */ var _ButtonOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ButtonOutline */ "./src/ButtonOutline.js");
var _jsxFileName = "/Users/emily/github/primer.style/src/PrimerCSS.js";







function PrimerCSS() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: [0, 3, 8],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    p: [3, 3, 5, 8],
    mb: [5, 5, 5, 0],
    bg: "blue.8",
    borderRadius: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_Css_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "100%",
    height: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    my: [4, 3, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    lineHeight: "1.25",
    color: "blue.4",
    mb: 3,
    fontSize: 5,
    fontWeight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Highly reusable, flexible styles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    color: "blue.2",
    mb: 5,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Styles can be mixed and matched to achieve many different layouts, independent of their location."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonFill__WEBPACK_IMPORTED_MODULE_5__["default"], {
    my: [2, 0],
    mr: 2,
    href: "https://styleguide.github.com/primer/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Documentation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonOutline__WEBPACK_IMPORTED_MODULE_6__["default"], {
    my: [2, 0],
    href: "https://github.com/primer/primer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    fontSize: 2,
    mt: 5,
    color: "blue.3",
    fontFamily: "mono",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "npm i primer@latest"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndexGrid__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    mt: [3, 2, 2],
    mb: 5,
    pb: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 5,
    color: "blue.2",
    lineHeight: 1.25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Install only the packages you need."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    px: 5,
    className: "container-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    mx: -5,
    flexWrap: "wrap",
    alignItems: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    width: [1, 6 / 12, 6 / 12],
    px: 5,
    mb: [3, 4, 4, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    color: "blue.3",
    mr: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["StyledOcticon"], {
    icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Package"],
    height: 40,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    fontSize: 2,
    color: "blue.3",
    mt: 1,
    fontFamily: "mono",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "primer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    color: "blue.2",
    mb: 5,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "This package includes all 30 Primer modules from the core, product, and marketing packages"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    width: [1, 6 / 12, 6 / 12],
    px: 5,
    mb: [3, 4, 4, 0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    color: "blue.3",
    mr: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["StyledOcticon"], {
    icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Package"],
    height: 40,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    fontSize: 2,
    color: "blue.3",
    mt: 1,
    fontFamily: "mono",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "primer-core"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    color: "blue.2",
    mb: 5,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "The core package contains modules that are shared between GitHub product and marketing websites"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    width: [1, 6 / 12, 6 / 12],
    px: 5,
    mb: [3, 4, 4, 0],
    align: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    color: "blue.3",
    mr: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["StyledOcticon"], {
    icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Package"],
    height: 40,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    fontSize: 2,
    color: "blue.3",
    mt: 1,
    fontFamily: "mono",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "primer-product"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    color: "blue.2",
    mb: 5,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "The product package contains modules that are used on GitHub product websites"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: _primer_components__WEBPACK_IMPORTED_MODULE_1__["Box"],
    width: [1, 6 / 12, 6 / 12],
    px: 5,
    mb: [3, 4, 4, 0],
    align: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    color: "blue.3",
    mr: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["StyledOcticon"], {
    icon: _githubprimer_octicons_react__WEBPACK_IMPORTED_MODULE_2__["Package"],
    height: 40,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    fontSize: 2,
    color: "blue.3",
    mt: 1,
    fontFamily: "mono",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "primer-marketing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    color: "blue.2",
    mb: 5,
    fontSize: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "The marketing package contains modules that are used on GitHub marketing websites"))))));
}

/***/ }),

/***/ "./src/PrimerReact.js":
/*!****************************!*\
  !*** ./src/PrimerReact.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrimerReact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @primer/components */ "@primer/components");
/* harmony import */ var _primer_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_primer_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LinkLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkLight */ "./src/LinkLight.js");
/* harmony import */ var _ReactIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReactIcon.svg */ "./src/ReactIcon.svg");
var _jsxFileName = "/Users/emily/github/primer.style/src/PrimerReact.js";




function PrimerReact() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    alignItems: "center",
    flexDirection: "column",
    px: 5,
    className: "container-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReactIcon_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: [4, 5],
    mt: 2,
    mb: 2,
    color: "blue.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Primer Components", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 2,
    ml: 1,
    style: {
      verticalAlign: 'text-top'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "BETA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    color: "blue.2",
    mb: 5,
    mx: [-2, 0],
    fontSize: [2, 3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "We\u2019re building a React.js component library for Primer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_primer_components__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    mb: [2, 0],
    px: 2,
    lineHeight: "1",
    href: "https://codesandbox.io/s/82w8yp5359",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Check out Primer Components in CodeSandbox",
    src: "https://codesandbox.io/static/img/play-codesandbox.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LinkLight__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fontSize: 2,
    px: 2,
    href: "https://primer.style/components",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "View the component library \u2192")));
}

/***/ }),

/***/ "./src/ReactIcon.svg":
/*!***************************!*\
  !*** ./src/ReactIcon.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M71.0867 32.0073C71.0867 27.2465 65.1894 22.7347 56.1478 19.9368C58.2343 10.6203 57.307 3.20806 53.2209 0.834973C52.279 0.278324 51.1778 0.0146484 49.9752 0.0146484V3.2813C50.6417 3.2813 51.1778 3.41314 51.627 3.66217C53.5976 4.80476 54.4525 9.15541 53.786 14.7512C53.6266 16.1282 53.3658 17.5784 53.047 19.0579C50.207 18.3548 47.1062 17.8128 43.846 17.4612C41.8899 14.7512 39.8613 12.2902 37.8183 10.1369C42.5419 5.69833 46.9758 3.26665 49.9897 3.26665V0C46.005 0 40.7887 2.87114 35.5144 7.85168C30.2401 2.90044 25.0238 0.0585949 21.0391 0.0585949V3.32525C24.0385 3.32525 28.4869 5.74228 33.2105 10.1515C31.182 12.3049 29.1534 14.7512 27.2263 17.4612C23.9516 17.8128 20.8508 18.3548 18.0108 19.0726C17.6775 17.6077 17.4312 16.1868 17.2573 14.8244C16.5763 9.22866 17.4167 4.878 19.3728 3.72076C19.8075 3.45708 20.3726 3.3399 21.0391 3.3399V0.0732433C19.822 0.0732433 18.7208 0.336919 17.7644 0.893568C13.6928 3.26665 12.78 10.6642 14.881 19.9515C5.86835 22.764 -4.42192e-07 27.2612 -4.42192e-07 32.0073C-4.42192e-07 36.7681 5.89733 41.2799 14.9389 44.0778C12.8524 53.3944 13.7798 60.8066 17.8659 63.1797C18.8077 63.7363 19.9089 64 21.1261 64C25.1107 64 30.3271 61.1289 35.6013 56.1483C40.8756 61.0996 46.0919 63.9414 50.0766 63.9414C51.2937 63.9414 52.395 63.6777 53.3513 63.1211C57.4229 60.748 58.3358 53.3504 56.2347 44.0632C65.2184 41.2653 71.0867 36.7535 71.0867 32.0073ZM52.2211 22.2367C51.685 24.1263 51.0184 26.0746 50.265 28.0229C49.6709 26.851 49.0478 25.6791 48.3668 24.5072C47.7003 23.3353 46.9903 22.1927 46.2803 21.0794C48.3378 21.387 50.3229 21.7679 52.2211 22.2367ZM45.5848 37.8375C44.4546 39.8151 43.2954 41.6901 42.0927 43.4333C39.9338 43.6237 37.7458 43.7263 35.5434 43.7263C33.3554 43.7263 31.1675 43.6237 29.023 43.4479C27.8203 41.7047 26.6467 39.8444 25.5165 37.8814C24.4152 35.9625 23.4154 34.0142 22.5026 32.0513C23.401 30.0883 24.4152 28.1254 25.502 26.2065C26.6322 24.2289 27.7913 22.3539 28.994 20.6107C31.153 20.4202 33.3409 20.3177 35.5434 20.3177C37.7313 20.3177 39.9193 20.4202 42.0638 20.596C43.2664 22.3392 44.4401 24.1996 45.5703 26.1625C46.6715 28.0815 47.6713 30.0298 48.5841 31.9927C47.6713 33.9556 46.6715 35.9185 45.5848 37.8375ZM50.265 35.9332C51.0474 37.8961 51.7139 39.859 52.2645 41.7633C50.3664 42.2321 48.3668 42.6276 46.2948 42.9352C47.0048 41.8073 47.7148 40.65 48.3813 39.4635C49.0478 38.2916 49.6709 37.1051 50.265 35.9332ZM35.5724 51.5633C34.2248 50.157 32.8773 48.5896 31.5442 46.8757C32.8483 46.9343 34.1813 46.9783 35.5289 46.9783C36.8909 46.9783 38.2385 46.949 39.557 46.8757C38.253 48.5896 36.9054 50.157 35.5724 51.5633ZM24.792 42.9352C22.7344 42.6276 20.7493 42.2467 18.8512 41.778C19.3873 39.8883 20.0538 37.94 20.8073 35.9918C21.4014 37.1637 22.0244 38.3355 22.7054 39.5074C23.3865 40.6793 24.082 41.8219 24.792 42.9352ZM35.4999 12.4514C36.8474 13.8576 38.195 15.425 39.528 17.1389C38.224 17.0803 36.8909 17.0364 35.5434 17.0364C34.1813 17.0364 32.8338 17.0657 31.5152 17.1389C32.8193 15.425 34.1668 13.8576 35.4999 12.4514ZM24.7775 21.0794C24.0675 22.2074 23.3575 23.3646 22.691 24.5512C22.0244 25.723 21.4014 26.8949 20.8073 28.0668C20.0248 26.1039 19.3583 24.141 18.8077 22.2367C20.7059 21.7826 22.7054 21.387 24.7775 21.0794ZM11.6643 39.4195C6.53488 37.2076 3.21672 34.3072 3.21672 32.0073C3.21672 29.7075 6.53488 26.7924 11.6643 24.5951C12.9104 24.0531 14.2724 23.5697 15.6779 23.1156C16.5038 25.9867 17.5906 28.9751 18.9381 32.0366C17.6051 35.0835 16.5328 38.0572 15.7214 40.9137C14.2869 40.4596 12.9249 39.9615 11.6643 39.4195ZM19.4597 60.3525C17.4891 59.2099 16.6342 54.8592 17.3008 49.2634C17.4602 47.8865 17.721 46.4363 18.0397 44.9567C20.8797 45.6599 23.9805 46.2019 27.2407 46.5534C29.1969 49.2634 31.2254 51.7244 33.2685 53.8778C28.5448 58.3163 24.111 60.748 21.0971 60.748C20.445 60.7334 19.8944 60.6015 19.4597 60.3525ZM53.8294 49.1902C54.5105 54.786 53.67 59.1366 51.7139 60.2939C51.2792 60.5576 50.7141 60.6748 50.0476 60.6748C47.0482 60.6748 42.5999 58.2577 37.8762 53.8485C39.9048 51.6951 41.9333 49.2488 43.8605 46.5388C47.1352 46.1872 50.236 45.6452 53.076 44.9274C53.4092 46.407 53.6701 47.8279 53.8294 49.1902ZM59.408 39.4195C58.1619 39.9615 56.7998 40.445 55.3943 40.8991C54.5684 38.0279 53.4817 35.0396 52.1341 31.978C53.4672 28.9311 54.5394 25.9574 55.3509 23.1009C56.7853 23.555 58.1474 24.0531 59.4225 24.5951C64.5519 26.807 67.87 29.7075 67.87 32.0073C67.8555 34.3072 64.5374 37.2222 59.408 39.4195Z",
  fill: "#79B8FF"
});

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M35.5281 38.7019C39.1852 38.7019 42.1499 35.7047 42.1499 32.0074C42.1499 28.3102 39.1852 25.313 35.5281 25.313C31.8709 25.313 28.9062 28.3102 28.9062 32.0074C28.9062 35.7047 31.8709 38.7019 35.5281 38.7019Z",
  fill: "#79B8FF"
});

var SvgComponent = function SvgComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 72,
    height: 64,
    viewBox: "0 0 72 64",
    fill: "none"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

/***/ }),

/***/ "./src/SpectrumIcon.js":
/*!*****************************!*\
  !*** ./src/SpectrumIcon.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpectrumIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/emily/github/primer.style/src/SpectrumIcon.js";

function SpectrumIcon() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 24C23 24 24 23 24 12C24 1 23 0 12 0C1 0 0 1 0 12C0 23 1 24 12 24ZM7.13525 11.842C7.05127 11.7526 7 11.6323 7 11.5V7.5C7 7.22388 7.22363 7 7.5 7H9C13.4185 7 17 10.5817 17 15V16.5C17 16.7761 16.7764 17 16.5 17H12.5C12.3242 17 12.1694 16.9092 12.0801 16.7719C12.0293 16.6937 12 16.6003 12 16.5V15C12 13.3431 10.6567 12 9 12H7.5C7.35596 12 7.22607 11.9393 7.13525 11.842Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
}
SpectrumIcon.size = [24, 24];

/***/ }),

/***/ "./src/TwitterIcon.js":
/*!****************************!*\
  !*** ./src/TwitterIcon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TwitterIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/emily/github/primer.style/src/TwitterIcon.js";

function TwitterIcon() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M6.28976 18C13.8373 18 17.9648 11.845 17.9648 6.50756C17.9648 6.33274 17.9611 6.1587 17.9532 5.98546C18.7544 5.41531 19.4507 4.70382 20 3.89388C19.2648 4.21557 18.4736 4.43213 17.6436 4.52978C18.4908 4.02972 19.1412 3.23869 19.448 2.2957C18.6552 2.75835 17.7772 3.09461 16.8424 3.27615C16.0936 2.49105 15.0276 2 13.8472 2C11.5812 2 9.74363 3.80889 9.74363 6.03861C9.74363 6.35557 9.77963 6.66387 9.85003 6.9596C6.43968 6.79068 3.41563 5.18341 1.39176 2.73945C1.03936 3.33636 0.836164 4.02974 0.836164 4.76959C0.836164 6.17093 1.56058 7.40804 2.66218 8.13177C1.98897 8.1113 1.35656 7.92938 0.803816 7.62659C0.803212 7.64354 0.80321 7.66006 0.80321 7.67817C0.80321 9.63432 2.21762 11.2675 4.09518 11.6376C3.75038 11.7302 3.38761 11.7798 3.01318 11.7798C2.74918 11.7798 2.49198 11.7542 2.24198 11.7069C2.76438 13.3118 4.2792 14.4797 6.07515 14.5123C4.67074 15.5959 2.90157 16.2413 0.97878 16.2413C0.647979 16.2413 0.321182 16.2228 -1.71715e-06 16.1854C1.81601 17.3312 3.97236 17.9997 6.28998 17.9997",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
}
TwitterIcon.size = [20, 20];

/***/ }),

/***/ "./src/svg/Atom.svg":
/*!**************************!*\
  !*** ./src/svg/Atom.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  width: 540,
  height: 420,
  rx: 6,
  fill: "#032F62"
});

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  opacity: 0.06,
  width: 540,
  height: 32,
  transform: "translate(0 18)",
  fill: "white"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M8.30469 6.95312V5.46094L1.58594 9.42188V10.5781L8.30469 14.5391V13.0469L2.92969 10.0703V9.92969L8.30469 6.95312ZM12.3984 10.1406C12.3984 8.57812 13.2891 7.57812 14.6953 7.57812C16.0859 7.57812 16.9766 8.57812 16.9766 10.1406V11.3594C16.9766 12.9297 16.0859 13.9297 14.6953 13.9297C13.2891 13.9297 12.3984 12.9219 12.3984 11.3594V10.1406ZM16.9922 13.7031V15H18.2969V3.19531H16.9453V7.83594H16.8047C16.4297 6.90625 15.5312 6.38281 14.3047 6.38281C12.3438 6.38281 11.0625 7.79688 11.0625 9.96875V11.5469C11.0625 13.7266 12.3438 15.1406 14.3047 15.1406C15.5156 15.1406 16.4062 14.6406 16.8438 13.7031H16.9922ZM24.875 4.44531C25.5 4.44531 25.9766 3.97656 25.9766 3.35156C25.9766 2.73438 25.5 2.26562 24.875 2.26562C24.25 2.26562 23.7734 2.73438 23.7734 3.35156C23.7734 3.97656 24.25 4.44531 24.875 4.44531ZM28.4297 15V13.8984H25.625V6.52344H21.4297V7.625H24.3125V13.8984H21.4062V15H28.4297ZM30.7891 6.52344L33.8906 15H35.3516L38.4453 6.52344H37.0312L34.6797 13.5781H34.5781L32.2109 6.52344H30.7891ZM57.9297 9.16406C57.7109 7.42188 56.4297 6.35938 54.5547 6.35938C52.25 6.35938 50.9062 7.77344 50.9062 10.2031V11.3125C50.9062 13.7422 52.25 15.1562 54.5547 15.1562C56.4297 15.1562 57.7188 14.1016 57.9297 12.375H56.6172C56.4531 13.3438 55.625 13.9609 54.5312 13.9609C53.0547 13.9609 52.2344 12.9609 52.2344 11.1406V10.375C52.2344 8.55469 53.0547 7.54688 54.5312 7.54688C55.625 7.54688 56.4531 8.17188 56.6172 9.16406H57.9297ZM67.9922 15V13.8984H65.1953V3.19531H60.9922V4.29688H63.8672V13.8984H60.9688V15H67.9922ZM73.3203 15.1484C74.5547 15.1484 75.4766 14.6406 75.8828 13.7344H76.0156V15.0078H77.2812V9.20312C77.2812 7.4375 76.1406 6.42188 74.1484 6.42188C72.4141 6.42188 71.1016 7.35156 70.9453 8.71094H72.25C72.4688 7.98438 73.1562 7.57031 74.1328 7.57031C75.3125 7.57031 75.9609 8.15625 75.9609 9.21875V9.98438L73.6328 10.1016C71.7031 10.2031 70.625 11.0938 70.625 12.5938C70.625 14.1328 71.7031 15.1484 73.3203 15.1484ZM73.7031 13.9844C72.6328 13.9844 71.9688 13.4375 71.9688 12.5469C71.9688 11.6641 72.5938 11.1562 73.7812 11.1016L75.9609 11V12C75.9609 13.1328 74.9844 13.9844 73.7031 13.9844ZM80.9844 8.8125C80.9844 10.0156 81.7422 10.7891 83.2734 11.1406L84.5312 11.4297C85.6094 11.6719 86.0234 12.0312 86.0234 12.7031C86.0234 13.5156 85.2891 14.0391 84.1328 14.0391C83.0391 14.0391 82.2891 13.5859 82.0938 12.8047H80.7422C80.8906 14.2578 82.1641 15.1562 84.0859 15.1562C86.0938 15.1562 87.3984 14.1406 87.3984 12.5781C87.3984 11.3516 86.6484 10.6328 85 10.2578L83.8047 9.98438C82.7422 9.75 82.3047 9.38281 82.3047 8.73438C82.3047 7.96094 83 7.46094 84.0781 7.46094C85.0703 7.46094 85.7812 7.91406 85.9375 8.65625H87.2188C87.0625 7.24219 85.8672 6.35938 84.1016 6.35938C82.2344 6.35938 80.9844 7.34375 80.9844 8.8125ZM90.875 8.8125C90.875 10.0156 91.6328 10.7891 93.1641 11.1406L94.4219 11.4297C95.5 11.6719 95.9141 12.0312 95.9141 12.7031C95.9141 13.5156 95.1797 14.0391 94.0234 14.0391C92.9297 14.0391 92.1797 13.5859 91.9844 12.8047H90.6328C90.7812 14.2578 92.0547 15.1562 93.9766 15.1562C95.9844 15.1562 97.2891 14.1406 97.2891 12.5781C97.2891 11.3516 96.5391 10.6328 94.8906 10.2578L93.6953 9.98438C92.6328 9.75 92.1953 9.38281 92.1953 8.73438C92.1953 7.96094 92.8906 7.46094 93.9688 7.46094C94.9609 7.46094 95.6719 7.91406 95.8281 8.65625H97.1094C96.9531 7.24219 95.7578 6.35938 93.9922 6.35938C92.125 6.35938 90.875 7.34375 90.875 8.8125ZM107.984 12.4297V11.1406H99.7188V12.4297H107.984ZM107.984 8.86719V7.57812H99.7188V8.86719H107.984ZM112.922 8.66406V3.72656H111.531V8.66406H112.922ZM115.977 8.66406V3.72656H114.57V8.66406H115.977ZM192.047 8.66406V3.72656H190.656V8.66406H192.047ZM195.102 8.66406V3.72656H193.695V8.66406H195.102ZM204.773 9.92969V10.0703L199.398 13.0469V14.5391L206.117 10.5781V9.42188L199.398 5.46094V6.95312L204.773 9.92969ZM28.0859 31.9531V30.4609L21.3672 34.4219V35.5781L28.0859 39.5391V38.0469L22.7109 35.0703V34.9297L28.0859 31.9531ZM35.1484 31.3828C33.9375 31.3828 33.0547 31.8828 32.6094 32.8203H32.4688V31.5234H31.1562V42.8594H32.5078V38.6875H32.6562C33.0234 39.6172 33.9219 40.1406 35.1484 40.1406C37.1094 40.1406 38.3906 38.7266 38.3906 36.5547V34.9766C38.3906 32.7969 37.1094 31.3828 35.1484 31.3828ZM34.7656 32.6016C36.1641 32.6016 37.0547 33.6016 37.0547 35.1641V36.3828C37.0547 37.9453 36.1641 38.9531 34.7656 38.9531C33.3672 38.9531 32.4766 37.9531 32.4766 36.3828V35.1641C32.4766 33.6016 33.3672 32.6016 34.7656 32.6016ZM57.9297 34.1641C57.7109 32.4219 56.4297 31.3594 54.5547 31.3594C52.25 31.3594 50.9062 32.7734 50.9062 35.2031V36.3125C50.9062 38.7422 52.25 40.1562 54.5547 40.1562C56.4297 40.1562 57.7188 39.1016 57.9297 37.375H56.6172C56.4531 38.3438 55.625 38.9609 54.5312 38.9609C53.0547 38.9609 52.2344 37.9609 52.2344 36.1406V35.375C52.2344 33.5547 53.0547 32.5469 54.5312 32.5469C55.625 32.5469 56.4531 33.1719 56.6172 34.1641H57.9297ZM67.9922 40V38.8984H65.1953V28.1953H60.9922V29.2969H63.8672V38.8984H60.9688V40H67.9922ZM73.3203 40.1484C74.5547 40.1484 75.4766 39.6406 75.8828 38.7344H76.0156V40.0078H77.2812V34.2031C77.2812 32.4375 76.1406 31.4219 74.1484 31.4219C72.4141 31.4219 71.1016 32.3516 70.9453 33.7109H72.25C72.4688 32.9844 73.1562 32.5703 74.1328 32.5703C75.3125 32.5703 75.9609 33.1562 75.9609 34.2188V34.9844L73.6328 35.1016C71.7031 35.2031 70.625 36.0938 70.625 37.5938C70.625 39.1328 71.7031 40.1484 73.3203 40.1484ZM73.7031 38.9844C72.6328 38.9844 71.9688 38.4375 71.9688 37.5469C71.9688 36.6641 72.5938 36.1562 73.7812 36.1016L75.9609 36V37C75.9609 38.1328 74.9844 38.9844 73.7031 38.9844ZM80.9844 33.8125C80.9844 35.0156 81.7422 35.7891 83.2734 36.1406L84.5312 36.4297C85.6094 36.6719 86.0234 37.0312 86.0234 37.7031C86.0234 38.5156 85.2891 39.0391 84.1328 39.0391C83.0391 39.0391 82.2891 38.5859 82.0938 37.8047H80.7422C80.8906 39.2578 82.1641 40.1562 84.0859 40.1562C86.0938 40.1562 87.3984 39.1406 87.3984 37.5781C87.3984 36.3516 86.6484 35.6328 85 35.2578L83.8047 34.9844C82.7422 34.75 82.3047 34.3828 82.3047 33.7344C82.3047 32.9609 83 32.4609 84.0781 32.4609C85.0703 32.4609 85.7812 32.9141 85.9375 33.6562H87.2188C87.0625 32.2422 85.8672 31.3594 84.1016 31.3594C82.2344 31.3594 80.9844 32.3438 80.9844 33.8125ZM90.875 33.8125C90.875 35.0156 91.6328 35.7891 93.1641 36.1406L94.4219 36.4297C95.5 36.6719 95.9141 37.0312 95.9141 37.7031C95.9141 38.5156 95.1797 39.0391 94.0234 39.0391C92.9297 39.0391 92.1797 38.5859 91.9844 37.8047H90.6328C90.7812 39.2578 92.0547 40.1562 93.9766 40.1562C95.9844 40.1562 97.2891 39.1406 97.2891 37.5781C97.2891 36.3516 96.5391 35.6328 94.8906 35.2578L93.6953 34.9844C92.6328 34.75 92.1953 34.3828 92.1953 33.7344C92.1953 32.9609 92.8906 32.4609 93.9688 32.4609C94.9609 32.4609 95.6719 32.9141 95.8281 33.6562H97.1094C96.9531 32.2422 95.7578 31.3594 93.9922 31.3594C92.125 31.3594 90.875 32.3438 90.875 33.8125ZM107.984 37.4297V36.1406H99.7188V37.4297H107.984ZM107.984 33.8672V32.5781H99.7188V33.8672H107.984ZM112.922 33.6641V28.7266H111.531V33.6641H112.922ZM115.977 33.6641V28.7266H114.57V33.6641H115.977ZM201.938 33.6641V28.7266H200.547V33.6641H201.938ZM204.992 33.6641V28.7266H203.586V33.6641H204.992ZM214.664 34.9297V35.0703L209.289 38.0469V39.5391L216.008 35.5781V34.4219L209.289 30.4609V31.9531L214.664 34.9297ZM47.4766 65V63.7734H45.1953V54.9531H47.4766V53.7266H41.5391V54.9531H43.8203V63.7734H41.5391V65H47.4766ZM52.9531 54.25V56.5469H50.6953V57.6797H52.9531V62.4766C52.9531 64.2422 53.9297 65.0391 56.0312 65.0391C56.4375 65.0391 57.4688 65 57.6797 64.9609V63.8359C57.4531 63.8594 56.6016 63.8828 56.125 63.8828C54.9297 63.8828 54.2812 63.3828 54.2812 62.4609V57.6797H57.7031V56.5469H54.2656V54.25H52.9531ZM64.2031 58.6641L65.5625 53.7266H64.1719L63.0156 58.6641H64.2031ZM71.0938 58.8125C71.0938 60.0156 71.8516 60.7891 73.3828 61.1406L74.6406 61.4297C75.7188 61.6719 76.1328 62.0312 76.1328 62.7031C76.1328 63.5156 75.3984 64.0391 74.2422 64.0391C73.1484 64.0391 72.3984 63.5859 72.2031 62.8047H70.8516C71 64.2578 72.2734 65.1562 74.1953 65.1562C76.2031 65.1562 77.5078 64.1406 77.5078 62.5781C77.5078 61.3516 76.7578 60.6328 75.1094 60.2578L73.9141 59.9844C72.8516 59.75 72.4141 59.3828 72.4141 58.7344C72.4141 57.9609 73.1094 57.4609 74.1875 57.4609C75.1797 57.4609 75.8906 57.9141 76.0469 58.6562H77.3281C77.1719 57.2422 75.9766 56.3594 74.2109 56.3594C72.3438 56.3594 71.0938 57.3438 71.0938 58.8125ZM93.1016 65.1484C94.3359 65.1484 95.2578 64.6406 95.6641 63.7344H95.7969V65.0078H97.0625V59.2031C97.0625 57.4375 95.9219 56.4219 93.9297 56.4219C92.1953 56.4219 90.8828 57.3516 90.7266 58.7109H92.0312C92.25 57.9844 92.9375 57.5703 93.9141 57.5703C95.0938 57.5703 95.7422 58.1562 95.7422 59.2188V59.9844L93.4141 60.1016C91.4844 60.2031 90.4062 61.0938 90.4062 62.5938C90.4062 64.1328 91.4844 65.1484 93.1016 65.1484ZM93.4844 63.9844C92.4141 63.9844 91.75 63.4375 91.75 62.5469C91.75 61.6641 92.375 61.1562 93.5625 61.1016L95.7422 61V62C95.7422 63.1328 94.7656 63.9844 93.4844 63.9844ZM117.445 65V63.8984H114.648V53.1953H110.445V54.2969H113.32V63.8984H110.422V65H117.445ZM123.633 65.1562C125.875 65.1562 127.305 63.6953 127.305 61.4062V60.125C127.305 57.8359 125.875 56.375 123.633 56.375C121.391 56.375 119.961 57.8359 119.961 60.125V61.4062C119.961 63.6953 121.391 65.1562 123.633 65.1562ZM123.633 57.5469C125.086 57.5469 125.992 58.5781 125.992 60.2422V61.2812C125.992 62.9531 125.086 63.9766 123.633 63.9766C122.18 63.9766 121.273 62.9531 121.273 61.2812V60.2422C121.273 58.5781 122.18 57.5469 123.633 57.5469ZM129.695 56.5234L132.797 65H134.258L137.352 56.5234H135.938L133.586 63.5781H133.484L131.117 56.5234H129.695ZM143.508 57.5078C144.875 57.5078 145.703 58.4844 145.703 60.1016H141.242C141.242 58.4766 142.094 57.5078 143.508 57.5078ZM145.703 62.8125C145.469 63.5547 144.68 64.0078 143.609 64.0078C142.164 64.0078 141.242 63.0078 141.242 61.4531V61.1094H147.016V60.2812C147.016 57.8281 145.719 56.3672 143.516 56.3672C141.359 56.3672 139.93 57.8359 139.93 60.0703V61.3438C139.93 63.7578 141.281 65.1562 143.609 65.1562C145.391 65.1562 146.734 64.2109 146.992 62.8125H145.703ZM157.008 65V63.8984H154.211V53.1953H150.008V54.2969H152.883V63.8984H149.984V65H157.008ZM160.82 68.0156C162.391 68.0156 163.102 67.3984 163.844 65.3125L167.039 56.5234H165.625L163.258 63.6172H163.156L160.781 56.5234H159.336L162.453 65.0547L162.305 65.5156C161.953 66.5 161.516 66.8594 160.719 66.8594C160.594 66.8594 160.352 66.8516 160.25 66.8281V67.9922C160.367 68.0078 160.625 68.0156 160.82 68.0156ZM180.539 60.1406C180.539 58.5781 181.43 57.5781 182.836 57.5781C184.227 57.5781 185.117 58.5781 185.117 60.1406V61.3594C185.117 62.9297 184.227 63.9297 182.836 63.9297C181.43 63.9297 180.539 62.9219 180.539 61.3594V60.1406ZM185.133 63.7031V65H186.438V53.1953H185.086V57.8359H184.945C184.57 56.9062 183.672 56.3828 182.445 56.3828C180.484 56.3828 179.203 57.7969 179.203 59.9688V61.5469C179.203 63.7266 180.484 65.1406 182.445 65.1406C183.656 65.1406 184.547 64.6406 184.984 63.7031H185.133ZM192.008 65.1484C193.242 65.1484 194.164 64.6406 194.57 63.7344H194.703V65.0078H195.969V59.2031C195.969 57.4375 194.828 56.4219 192.836 56.4219C191.102 56.4219 189.789 57.3516 189.633 58.7109H190.938C191.156 57.9844 191.844 57.5703 192.82 57.5703C194 57.5703 194.648 58.1562 194.648 59.2188V59.9844L192.32 60.1016C190.391 60.2031 189.312 61.0938 189.312 62.5938C189.312 64.1328 190.391 65.1484 192.008 65.1484ZM192.391 63.9844C191.32 63.9844 190.656 63.4375 190.656 62.5469C190.656 61.6641 191.281 61.1562 192.469 61.1016L194.648 61V62C194.648 63.1328 193.672 63.9844 192.391 63.9844ZM200.383 68.0156C201.953 68.0156 202.664 67.3984 203.406 65.3125L206.602 56.5234H205.188L202.82 63.6172H202.719L200.344 56.5234H198.898L202.016 65.0547L201.867 65.5156C201.516 66.5 201.078 66.8594 200.281 66.8594C200.156 66.8594 199.914 66.8516 199.812 66.8281V67.9922C199.93 68.0078 200.188 68.0156 200.383 68.0156ZM221.289 65H222.617V57.6797H226.344V56.5469H222.602V55.6719C222.602 54.8203 223.227 54.3828 224.406 54.3828C224.883 54.3828 225.977 54.4141 226.344 54.4531V53.3672C226.062 53.3281 224.883 53.2891 224.391 53.2891C222.305 53.2891 221.289 54.0547 221.289 55.6953V56.5469H219.016V57.6797H221.289V65ZM232.43 65.1562C234.672 65.1562 236.102 63.6953 236.102 61.4062V60.125C236.102 57.8359 234.672 56.375 232.43 56.375C230.188 56.375 228.758 57.8359 228.758 60.125V61.4062C228.758 63.6953 230.188 65.1562 232.43 65.1562ZM232.43 57.5469C233.883 57.5469 234.789 58.5781 234.789 60.2422V61.2812C234.789 62.9531 233.883 63.9766 232.43 63.9766C230.977 63.9766 230.07 62.9531 230.07 61.2812V60.2422C230.07 58.5781 230.977 57.5469 232.43 57.5469ZM241.969 58.6875V56.5234H238.805V57.5859H240.688V63.9375H238.977V65H240.688H241.984H244.609V63.9375H241.984V61.2031C241.984 59.0469 243.094 57.75 244.969 57.75C245.43 57.75 245.977 57.8438 246.367 57.9844V56.4922C246.086 56.375 245.625 56.3047 245.141 56.3047C243.508 56.3047 242.453 57.1172 242.141 58.6875H241.969ZM261.242 65.1484C262.477 65.1484 263.398 64.6406 263.805 63.7344H263.938V65.0078H265.203V59.2031C265.203 57.4375 264.062 56.4219 262.07 56.4219C260.336 56.4219 259.023 57.3516 258.867 58.7109H260.172C260.391 57.9844 261.078 57.5703 262.055 57.5703C263.234 57.5703 263.883 58.1562 263.883 59.2188V59.9844L261.555 60.1016C259.625 60.2031 258.547 61.0938 258.547 62.5938C258.547 64.1328 259.625 65.1484 261.242 65.1484ZM261.625 63.9844C260.555 63.9844 259.891 63.4375 259.891 62.5469C259.891 61.6641 260.516 61.1562 261.703 61.1016L263.883 61V62C263.883 63.1328 262.906 63.9844 261.625 63.9844ZM282.414 56.3828C281.203 56.3828 280.32 56.8828 279.875 57.8203H279.734V56.5234H278.422V67.8594H279.773V63.6875H279.922C280.289 64.6172 281.188 65.1406 282.414 65.1406C284.375 65.1406 285.656 63.7266 285.656 61.5547V59.9766C285.656 57.7969 284.375 56.3828 282.414 56.3828ZM282.031 57.6016C283.43 57.6016 284.32 58.6016 284.32 60.1641V61.3828C284.32 62.9453 283.43 63.9531 282.031 63.9531C280.633 63.9531 279.742 62.9531 279.742 61.3828V60.1641C279.742 58.6016 280.633 57.6016 282.031 57.6016ZM291.773 65.1562C294.016 65.1562 295.445 63.6953 295.445 61.4062V60.125C295.445 57.8359 294.016 56.375 291.773 56.375C289.531 56.375 288.102 57.8359 288.102 60.125V61.4062C288.102 63.6953 289.531 65.1562 291.773 65.1562ZM291.773 57.5469C293.227 57.5469 294.133 58.5781 294.133 60.2422V61.2812C294.133 62.9531 293.227 63.9766 291.773 63.9766C290.32 63.9766 289.414 62.9531 289.414 61.2812V60.2422C289.414 58.5781 290.32 57.5469 291.773 57.5469ZM300.219 54.25V56.5469H297.961V57.6797H300.219V62.4766C300.219 64.2422 301.195 65.0391 303.297 65.0391C303.703 65.0391 304.734 65 304.945 64.9609V63.8359C304.719 63.8594 303.867 63.8828 303.391 63.8828C302.195 63.8828 301.547 63.3828 301.547 62.4609V57.6797H304.969V56.5469H301.531V54.25H300.219ZM310.695 65.1484C311.93 65.1484 312.852 64.6406 313.258 63.7344H313.391V65.0078H314.656V59.2031C314.656 57.4375 313.516 56.4219 311.523 56.4219C309.789 56.4219 308.477 57.3516 308.32 58.7109H309.625C309.844 57.9844 310.531 57.5703 311.508 57.5703C312.688 57.5703 313.336 58.1562 313.336 59.2188V59.9844L311.008 60.1016C309.078 60.2031 308 61.0938 308 62.5938C308 64.1328 309.078 65.1484 310.695 65.1484ZM311.078 63.9844C310.008 63.9844 309.344 63.4375 309.344 62.5469C309.344 61.6641 309.969 61.1562 311.156 61.1016L313.336 61V62C313.336 63.1328 312.359 63.9844 311.078 63.9844ZM320 54.25V56.5469H317.742V57.6797H320V62.4766C320 64.2422 320.977 65.0391 323.078 65.0391C323.484 65.0391 324.516 65 324.727 64.9609V63.8359C324.5 63.8594 323.648 63.8828 323.172 63.8828C321.977 63.8828 321.328 63.3828 321.328 62.4609V57.6797H324.75V56.5469H321.312V54.25H320ZM331.336 65.1562C333.578 65.1562 335.008 63.6953 335.008 61.4062V60.125C335.008 57.8359 333.578 56.375 331.336 56.375C329.094 56.375 327.664 57.8359 327.664 60.125V61.4062C327.664 63.6953 329.094 65.1562 331.336 65.1562ZM331.336 57.5469C332.789 57.5469 333.695 58.5781 333.695 60.2422V61.2812C333.695 62.9531 332.789 63.9766 331.336 63.9766C329.883 63.9766 328.977 62.9531 328.977 61.2812V60.2422C328.977 58.5781 329.883 57.5469 331.336 57.5469ZM340.82 67.6172L342.234 62.0391H340.438L339.422 67.6172H340.82ZM358.57 60.1406C358.57 58.5781 359.461 57.5781 360.867 57.5781C362.258 57.5781 363.148 58.5781 363.148 60.1406V61.3594C363.148 62.9297 362.258 63.9297 360.867 63.9297C359.461 63.9297 358.57 62.9219 358.57 61.3594V60.1406ZM363.164 63.7031V65H364.469V53.1953H363.117V57.8359H362.977C362.602 56.9062 361.703 56.3828 360.477 56.3828C358.516 56.3828 357.234 57.7969 357.234 59.9688V61.5469C357.234 63.7266 358.516 65.1406 360.477 65.1406C361.688 65.1406 362.578 64.6406 363.016 63.7031H363.164ZM370.898 65.1562C373.141 65.1562 374.57 63.6953 374.57 61.4062V60.125C374.57 57.8359 373.141 56.375 370.898 56.375C368.656 56.375 367.227 57.8359 367.227 60.125V61.4062C367.227 63.6953 368.656 65.1562 370.898 65.1562ZM370.898 57.5469C372.352 57.5469 373.258 58.5781 373.258 60.2422V61.2812C373.258 62.9531 372.352 63.9766 370.898 63.9766C369.445 63.9766 368.539 62.9531 368.539 61.2812V60.2422C368.539 58.5781 369.445 57.5469 370.898 57.5469ZM377.32 65H378.648V60.0078C378.648 58.5625 379.586 57.5859 380.984 57.5859C382.305 57.5859 382.93 58.3047 382.93 59.8359V65H384.258V59.5C384.258 57.4688 383.258 56.3672 381.414 56.3672C380.125 56.3672 379.156 56.9609 378.703 58.0156H378.594V56.5234H377.32V65ZM390.594 58.6641L391.953 53.7266H390.562L389.406 58.6641H390.594ZM399.125 54.25V56.5469H396.867V57.6797H399.125V62.4766C399.125 64.2422 400.102 65.0391 402.203 65.0391C402.609 65.0391 403.641 65 403.852 64.9609V63.8359C403.625 63.8594 402.773 63.8828 402.297 63.8828C401.102 63.8828 400.453 63.3828 400.453 62.4609V57.6797H403.875V56.5469H400.438V54.25H399.125ZM2.57031 88.0156C4.14062 88.0156 4.85156 87.3984 5.59375 85.3125L8.78906 76.5234H7.375L5.00781 83.6172H4.90625L2.53125 76.5234H1.08594L4.20312 85.0547L4.05469 85.5156C3.70312 86.5 3.26562 86.8594 2.46875 86.8594C2.34375 86.8594 2.10156 86.8516 2 86.8281V87.9922C2.11719 88.0078 2.375 88.0156 2.57031 88.0156ZM14.8359 85.1562C17.0781 85.1562 18.5078 83.6953 18.5078 81.4062V80.125C18.5078 77.8359 17.0781 76.375 14.8359 76.375C12.5938 76.375 11.1641 77.8359 11.1641 80.125V81.4062C11.1641 83.6953 12.5938 85.1562 14.8359 85.1562ZM14.8359 77.5469C16.2891 77.5469 17.1953 78.5781 17.1953 80.2422V81.2812C17.1953 82.9531 16.2891 83.9766 14.8359 83.9766C13.3828 83.9766 12.4766 82.9531 12.4766 81.2812V80.2422C12.4766 78.5781 13.3828 77.5469 14.8359 77.5469ZM28.1953 76.5234H26.8672V81.5156C26.8672 82.9609 25.9297 83.9375 24.5312 83.9375C23.2109 83.9375 22.5859 83.2188 22.5859 81.6875V76.5234H21.2578V82.0234C21.2578 84.0547 22.2578 85.1562 24.1016 85.1562C25.3906 85.1562 26.3594 84.5625 26.8125 83.5078H26.9219V85H28.1953V76.5234ZM43.0625 74.25V76.5469H40.8047V77.6797H43.0625V82.4766C43.0625 84.2422 44.0391 85.0391 46.1406 85.0391C46.5469 85.0391 47.5781 85 47.7891 84.9609V83.8359C47.5625 83.8594 46.7109 83.8828 46.2344 83.8828C45.0391 83.8828 44.3906 83.3828 44.3906 82.4609V77.6797H47.8125V76.5469H44.375V74.25H43.0625ZM50.9219 85H52.25V80.0156C52.25 78.5703 53.1953 77.5938 54.5938 77.5938C55.9219 77.5938 56.5469 78.3203 56.5469 79.8438V85H57.875V79.5078C57.875 77.4844 56.875 76.375 55.0312 76.375C53.7344 76.375 52.7578 76.9688 52.3125 78.0234H52.2031V73.1953H50.9219V85ZM64.4375 74.4453C65.0625 74.4453 65.5391 73.9766 65.5391 73.3516C65.5391 72.7344 65.0625 72.2656 64.4375 72.2656C63.8125 72.2656 63.3359 72.7344 63.3359 73.3516C63.3359 73.9766 63.8125 74.4453 64.4375 74.4453ZM67.9922 85V83.8984H65.1875V76.5234H60.9922V77.625H63.875V83.8984H60.9688V85H67.9922ZM70.7109 85H72.0391V80.0078C72.0391 78.5625 72.9766 77.5859 74.375 77.5859C75.6953 77.5859 76.3203 78.3047 76.3203 79.8359V85H77.6484V79.5C77.6484 77.4688 76.6484 76.3672 74.8047 76.3672C73.5156 76.3672 72.5469 76.9609 72.0938 78.0156H71.9844V76.5234H70.7109V85ZM88.1953 85L84.6719 79.875L87.9609 76.5234H86.3516L82.6562 80.3281H82.5547V73.1953H81.2266V85H82.5547V81.9141L83.7188 80.7891L86.6172 85H88.1953ZM90.6797 76.6641H92C92.0938 75.5469 92.8203 74.8672 93.9531 74.8672C95.0469 74.8672 95.7969 75.5391 95.7969 76.5234C95.7969 77.3438 95.4688 77.8359 94.5703 78.3984C93.5156 79.0469 93.0391 79.7422 93.0547 80.7812V81.4922H94.4141V80.9844C94.4141 80.1562 94.7031 79.7266 95.6562 79.1406C96.7188 78.4922 97.25 77.5938 97.25 76.4531C97.25 74.7969 95.8984 73.6172 94.0078 73.6172C92.0547 73.6172 90.7734 74.7812 90.6797 76.6641ZM93.7891 85.1484C94.3828 85.1484 94.8594 84.6562 94.8594 84.0391C94.8594 83.4219 94.3828 82.9297 93.7891 82.9297C93.1953 82.9297 92.7188 83.4219 92.7188 84.0391C92.7188 84.6562 93.1953 85.1484 93.7891 85.1484ZM28.0859 101.953V100.461L21.3672 104.422V105.578L28.0859 109.539V108.047L22.7109 105.07V104.93L28.0859 101.953ZM32.5156 111.07L38.0156 97.6562H36.7109L31.2188 111.07H32.5156ZM45.0391 101.383C43.8281 101.383 42.9453 101.883 42.5 102.82H42.3594V101.523H41.0469V112.859H42.3984V108.688H42.5469C42.9141 109.617 43.8125 110.141 45.0391 110.141C47 110.141 48.2812 108.727 48.2812 106.555V104.977C48.2812 102.797 47 101.383 45.0391 101.383ZM44.6562 102.602C46.0547 102.602 46.9453 103.602 46.9453 105.164V106.383C46.9453 107.945 46.0547 108.953 44.6562 108.953C43.2578 108.953 42.3672 107.953 42.3672 106.383V105.164C42.3672 103.602 43.2578 102.602 44.6562 102.602ZM56.4141 104.93V105.07L51.0391 108.047V109.539L57.7578 105.578V104.422L51.0391 100.461V101.953L56.4141 104.93ZM28.0859 126.953V125.461L21.3672 129.422V130.578L28.0859 134.539V133.047L22.7109 130.07V129.93L28.0859 126.953ZM34.7656 124.445C35.3906 124.445 35.8672 123.977 35.8672 123.352C35.8672 122.734 35.3906 122.266 34.7656 122.266C34.1406 122.266 33.6641 122.734 33.6641 123.352C33.6641 123.977 34.1406 124.445 34.7656 124.445ZM38.3203 135V133.898H35.5156V126.523H31.3203V127.625H34.2031V133.898H31.2969V135H38.3203ZM48.5938 128.758C48.5938 127.188 47.9766 126.367 46.7969 126.367C45.9453 126.367 45.2656 126.883 45.0469 127.695H44.9062C44.7266 126.859 44.1641 126.367 43.3672 126.367C42.5703 126.367 41.9609 126.867 41.75 127.719H41.6094V126.523H40.4219V135H41.6172V129.281C41.6172 128.227 42.0859 127.578 42.8359 127.578C43.5547 127.578 43.9297 128.117 43.9297 129.141V135H45.1172V129.281C45.1172 128.227 45.5703 127.578 46.3125 127.578C47.0234 127.578 47.3984 128.117 47.3984 129.148V135H48.5938V128.758ZM51.875 131.305V130.141C51.875 128.586 52.7812 127.578 54.1875 127.578C55.5859 127.578 56.4844 128.578 56.4844 130.141V131.305C56.4844 132.867 55.5859 133.875 54.1875 133.875C52.7812 133.875 51.875 132.859 51.875 131.305ZM54.1484 138.18C56.4453 138.18 57.8047 136.992 57.8047 135V126.523H56.4922V127.836H56.3438C55.9766 126.922 55.0469 126.383 53.8203 126.383C51.8359 126.383 50.5391 127.789 50.5391 129.969V131.492C50.5391 133.664 51.8281 135.078 53.7891 135.078C55.0234 135.078 55.9609 134.539 56.3359 133.648H56.4766V134.969C56.4766 136.328 55.6562 137.078 54.1719 137.078C53.0391 137.078 52.1875 136.617 52.0156 135.914H50.7031C50.875 137.32 52.1875 138.18 54.1484 138.18ZM71.0938 128.812C71.0938 130.016 71.8516 130.789 73.3828 131.141L74.6406 131.43C75.7188 131.672 76.1328 132.031 76.1328 132.703C76.1328 133.516 75.3984 134.039 74.2422 134.039C73.1484 134.039 72.3984 133.586 72.2031 132.805H70.8516C71 134.258 72.2734 135.156 74.1953 135.156C76.2031 135.156 77.5078 134.141 77.5078 132.578C77.5078 131.352 76.7578 130.633 75.1094 130.258L73.9141 129.984C72.8516 129.75 72.4141 129.383 72.4141 128.734C72.4141 127.961 73.1094 127.461 74.1875 127.461C75.1797 127.461 75.8906 127.914 76.0469 128.656H77.3281C77.1719 127.242 75.9766 126.359 74.2109 126.359C72.3438 126.359 71.0938 127.344 71.0938 128.812ZM83.7188 128.688V126.523H80.5547V127.586H82.4375V133.938H80.7266V135H82.4375H83.7344H86.3594V133.938H83.7344V131.203C83.7344 129.047 84.8438 127.75 86.7188 127.75C87.1797 127.75 87.7266 127.844 88.1172 127.984V126.492C87.8359 126.375 87.375 126.305 86.8906 126.305C85.2578 126.305 84.2031 127.117 83.8906 128.688H83.7188ZM97.4922 129.164C97.2734 127.422 95.9922 126.359 94.1172 126.359C91.8125 126.359 90.4688 127.773 90.4688 130.203V131.312C90.4688 133.742 91.8125 135.156 94.1172 135.156C95.9922 135.156 97.2812 134.102 97.4922 132.375H96.1797C96.0156 133.344 95.1875 133.961 94.0938 133.961C92.6172 133.961 91.7969 132.961 91.7969 131.141V130.375C91.7969 128.555 92.6172 127.547 94.0938 127.547C95.1875 127.547 96.0156 128.172 96.1797 129.164H97.4922ZM107.984 132.43V131.141H99.7188V132.43H107.984ZM107.984 128.867V127.578H99.7188V128.867H107.984ZM112.922 128.664V123.727H111.531V128.664H112.922ZM115.977 128.664V123.727H114.57V128.664H115.977ZM121.531 136.07L127.031 122.656H125.727L120.234 136.07H121.531ZM134.055 126.383C132.844 126.383 131.961 126.883 131.516 127.82H131.375V126.523H130.062V137.859H131.414V133.688H131.562C131.93 134.617 132.828 135.141 134.055 135.141C136.016 135.141 137.297 133.727 137.297 131.555V129.977C137.297 127.797 136.016 126.383 134.055 126.383ZM133.672 127.602C135.07 127.602 135.961 128.602 135.961 130.164V131.383C135.961 132.945 135.07 133.953 133.672 133.953C132.273 133.953 131.383 132.953 131.383 131.383V130.164C131.383 128.602 132.273 127.602 133.672 127.602ZM143.414 135.156C145.656 135.156 147.086 133.695 147.086 131.406V130.125C147.086 127.836 145.656 126.375 143.414 126.375C141.172 126.375 139.742 127.836 139.742 130.125V131.406C139.742 133.695 141.172 135.156 143.414 135.156ZM143.414 127.547C144.867 127.547 145.773 128.578 145.773 130.242V131.281C145.773 132.953 144.867 133.977 143.414 133.977C141.961 133.977 141.055 132.953 141.055 131.281V130.242C141.055 128.578 141.961 127.547 143.414 127.547ZM151.859 124.25V126.547H149.602V127.68H151.859V132.477C151.859 134.242 152.836 135.039 154.938 135.039C155.344 135.039 156.375 135 156.586 134.961V133.836C156.359 133.859 155.508 133.883 155.031 133.883C153.836 133.883 153.188 133.383 153.188 132.461V127.68H156.609V126.547H153.172V124.25H151.859ZM162.336 135.148C163.57 135.148 164.492 134.641 164.898 133.734H165.031V135.008H166.297V129.203C166.297 127.438 165.156 126.422 163.164 126.422C161.43 126.422 160.117 127.352 159.961 128.711H161.266C161.484 127.984 162.172 127.57 163.148 127.57C164.328 127.57 164.977 128.156 164.977 129.219V129.984L162.648 130.102C160.719 130.203 159.641 131.094 159.641 132.594C159.641 134.133 160.719 135.148 162.336 135.148ZM162.719 133.984C161.648 133.984 160.984 133.438 160.984 132.547C160.984 131.664 161.609 131.156 162.797 131.102L164.977 131V132C164.977 133.133 164 133.984 162.719 133.984ZM171.641 124.25V126.547H169.383V127.68H171.641V132.477C171.641 134.242 172.617 135.039 174.719 135.039C175.125 135.039 176.156 135 176.367 134.961V133.836C176.141 133.859 175.289 133.883 174.812 133.883C173.617 133.883 172.969 133.383 172.969 132.461V127.68H176.391V126.547H172.953V124.25H171.641ZM182.977 135.156C185.219 135.156 186.648 133.695 186.648 131.406V130.125C186.648 127.836 185.219 126.375 182.977 126.375C180.734 126.375 179.305 127.836 179.305 130.125V131.406C179.305 133.695 180.734 135.156 182.977 135.156ZM182.977 127.547C184.43 127.547 185.336 128.578 185.336 130.242V131.281C185.336 132.953 184.43 133.977 182.977 133.977C181.523 133.977 180.617 132.953 180.617 131.281V130.242C180.617 128.578 181.523 127.547 182.977 127.547ZM192.867 135.047C193.641 135.047 194.281 134.398 194.281 133.602C194.281 132.812 193.641 132.164 192.867 132.164C192.094 132.164 191.453 132.812 191.453 133.602C191.453 134.398 192.094 135.047 192.867 135.047ZM203.289 126.383C202.078 126.383 201.195 126.883 200.75 127.82H200.609V126.523H199.297V137.859H200.648V133.688H200.797C201.164 134.617 202.062 135.141 203.289 135.141C205.25 135.141 206.531 133.727 206.531 131.555V129.977C206.531 127.797 205.25 126.383 203.289 126.383ZM202.906 127.602C204.305 127.602 205.195 128.602 205.195 130.164V131.383C205.195 132.945 204.305 133.953 202.906 133.953C201.508 133.953 200.617 132.953 200.617 131.383V130.164C200.617 128.602 201.508 127.602 202.906 127.602ZM209.18 135H210.508V130.008C210.508 128.562 211.445 127.586 212.844 127.586C214.164 127.586 214.789 128.305 214.789 129.836V135H216.117V129.5C216.117 127.469 215.117 126.367 213.273 126.367C211.984 126.367 211.016 126.961 210.562 128.016H210.453V126.523H209.18V135ZM220.016 131.305V130.141C220.016 128.586 220.922 127.578 222.328 127.578C223.727 127.578 224.625 128.578 224.625 130.141V131.305C224.625 132.867 223.727 133.875 222.328 133.875C220.922 133.875 220.016 132.859 220.016 131.305ZM222.289 138.18C224.586 138.18 225.945 136.992 225.945 135V126.523H224.633V127.836H224.484C224.117 126.922 223.188 126.383 221.961 126.383C219.977 126.383 218.68 127.789 218.68 129.969V131.492C218.68 133.664 219.969 135.078 221.93 135.078C223.164 135.078 224.102 134.539 224.477 133.648H224.617V134.969C224.617 136.328 223.797 137.078 222.312 137.078C221.18 137.078 220.328 136.617 220.156 135.914H218.844C219.016 137.32 220.328 138.18 222.289 138.18ZM231.609 128.664V123.727H230.219V128.664H231.609ZM234.664 128.664V123.727H233.258V128.664H234.664ZM244.336 129.93V130.07L238.961 133.047V134.539L245.68 130.578V129.422L238.961 125.461V126.953L244.336 129.93ZM8.30469 151.953V150.461L1.58594 154.422V155.578L8.30469 159.539V158.047L2.92969 155.07V154.93L8.30469 151.953ZM12.7344 161.07L18.2344 147.656H16.9297L11.4375 161.07H12.7344ZM22.2891 155.141C22.2891 153.578 23.1797 152.578 24.5859 152.578C25.9766 152.578 26.8672 153.578 26.8672 155.141V156.359C26.8672 157.93 25.9766 158.93 24.5859 158.93C23.1797 158.93 22.2891 157.922 22.2891 156.359V155.141ZM26.8828 158.703V160H28.1875V148.195H26.8359V152.836H26.6953C26.3203 151.906 25.4219 151.383 24.1953 151.383C22.2344 151.383 20.9531 152.797 20.9531 154.969V156.547C20.9531 158.727 22.2344 160.141 24.1953 160.141C25.4062 160.141 26.2969 159.641 26.7344 158.703H26.8828ZM34.7656 149.445C35.3906 149.445 35.8672 148.977 35.8672 148.352C35.8672 147.734 35.3906 147.266 34.7656 147.266C34.1406 147.266 33.6641 147.734 33.6641 148.352C33.6641 148.977 34.1406 149.445 34.7656 149.445ZM38.3203 160V158.898H35.5156V151.523H31.3203V152.625H34.2031V158.898H31.2969V160H38.3203ZM40.6797 151.523L43.7812 160H45.2422L48.3359 151.523H46.9219L44.5703 158.578H44.4688L42.1016 151.523H40.6797ZM56.4141 154.93V155.07L51.0391 158.047V159.539L57.7578 155.578V154.422L51.0391 150.461V151.953L56.4141 154.93ZM8.30469 176.953V175.461L1.58594 179.422V180.578L8.30469 184.539V183.047L2.92969 180.07V179.93L8.30469 176.953ZM18.3047 176.523H16.9766V181.516C16.9766 182.961 16.0391 183.938 14.6406 183.938C13.3203 183.938 12.6953 183.219 12.6953 181.688V176.523H11.3672V182.023C11.3672 184.055 12.3672 185.156 14.2109 185.156C15.5 185.156 16.4688 184.562 16.9219 183.508H17.0312V185H18.3047V176.523ZM28.4297 185V183.898H25.6328V173.195H21.4297V174.297H24.3047V183.898H21.4062V185H28.4297ZM36.6328 179.93V180.07L31.2578 183.047V184.539L37.9766 180.578V179.422L31.2578 175.461V176.953L36.6328 179.93ZM28.0859 201.953V200.461L21.3672 204.422V205.578L28.0859 209.539V208.047L22.7109 205.07V204.93L28.0859 201.953ZM38.3203 210V208.898H35.5234V198.195H31.3203V199.297H34.1953V208.898H31.2969V210H38.3203ZM44.6562 199.445C45.2812 199.445 45.7578 198.977 45.7578 198.352C45.7578 197.734 45.2812 197.266 44.6562 197.266C44.0312 197.266 43.5547 197.734 43.5547 198.352C43.5547 198.977 44.0312 199.445 44.6562 199.445ZM48.2109 210V208.898H45.4062V201.523H41.2109V202.625H44.0938V208.898H41.1875V210H48.2109ZM56.4141 204.93V205.07L51.0391 208.047V209.539L57.7578 205.578V204.422L51.0391 200.461V201.953L56.4141 204.93ZM63.0391 210H64.3672V202.68H68.0938V201.547H64.3516V200.672C64.3516 199.82 64.9766 199.383 66.1562 199.383C66.6328 199.383 67.7266 199.414 68.0938 199.453V198.367C67.8125 198.328 66.6328 198.289 66.1406 198.289C64.0547 198.289 63.0391 199.055 63.0391 200.695V201.547H60.7656V202.68H63.0391V210ZM73.8281 203.688V201.523H70.6641V202.586H72.5469V208.938H70.8359V210H72.5469H73.8438H76.4688V208.938H73.8438V206.203C73.8438 204.047 74.9531 202.75 76.8281 202.75C77.2891 202.75 77.8359 202.844 78.2266 202.984V201.492C77.9453 201.375 77.4844 201.305 77 201.305C75.3672 201.305 74.3125 202.117 74 203.688H73.8281ZM84.2188 199.445C84.8438 199.445 85.3203 198.977 85.3203 198.352C85.3203 197.734 84.8438 197.266 84.2188 197.266C83.5938 197.266 83.1172 197.734 83.1172 198.352C83.1172 198.977 83.5938 199.445 84.2188 199.445ZM87.7734 210V208.898H84.9688V201.523H80.7734V202.625H83.6562V208.898H80.75V210H87.7734ZM94.0547 202.508C95.4219 202.508 96.25 203.484 96.25 205.102H91.7891C91.7891 203.477 92.6406 202.508 94.0547 202.508ZM96.25 207.812C96.0156 208.555 95.2266 209.008 94.1562 209.008C92.7109 209.008 91.7891 208.008 91.7891 206.453V206.109H97.5625V205.281C97.5625 202.828 96.2656 201.367 94.0625 201.367C91.9062 201.367 90.4766 202.836 90.4766 205.07V206.344C90.4766 208.758 91.8281 210.156 94.1562 210.156C95.9375 210.156 97.2812 209.211 97.5391 207.812H96.25ZM101.414 205.141C101.414 203.578 102.305 202.578 103.711 202.578C105.102 202.578 105.992 203.578 105.992 205.141V206.359C105.992 207.93 105.102 208.93 103.711 208.93C102.305 208.93 101.414 207.922 101.414 206.359V205.141ZM106.008 208.703V210H107.312V198.195H105.961V202.836H105.82C105.445 201.906 104.547 201.383 103.32 201.383C101.359 201.383 100.078 202.797 100.078 204.969V206.547C100.078 208.727 101.359 210.141 103.32 210.141C104.531 210.141 105.422 209.641 105.859 208.703H106.008ZM117.102 201.953V200.461L110.383 204.422V205.578L117.102 209.539V208.047L111.727 205.07V204.93L117.102 201.953ZM121.531 211.07L127.031 197.656H125.727L120.234 211.07H121.531ZM137.227 210V208.898H134.43V198.195H130.227V199.297H133.102V208.898H130.203V210H137.227ZM143.562 199.445C144.188 199.445 144.664 198.977 144.664 198.352C144.664 197.734 144.188 197.266 143.562 197.266C142.938 197.266 142.461 197.734 142.461 198.352C142.461 198.977 142.938 199.445 143.562 199.445ZM147.117 210V208.898H144.312V201.523H140.117V202.625H143V208.898H140.094V210H147.117ZM155.32 204.93V205.07L149.945 208.047V209.539L156.664 205.578V204.422L149.945 200.461V201.953L155.32 204.93ZM28.0859 226.953V225.461L21.3672 229.422V230.578L28.0859 234.539V233.047L22.7109 230.07V229.93L28.0859 226.953ZM38.3203 235V233.898H35.5234V223.195H31.3203V224.297H34.1953V233.898H31.2969V235H38.3203ZM44.6562 224.445C45.2812 224.445 45.7578 223.977 45.7578 223.352C45.7578 222.734 45.2812 222.266 44.6562 222.266C44.0312 222.266 43.5547 222.734 43.5547 223.352C43.5547 223.977 44.0312 224.445 44.6562 224.445ZM48.2109 235V233.898H45.4062V226.523H41.2109V227.625H44.0938V233.898H41.1875V235H48.2109ZM56.4141 229.93V230.07L51.0391 233.047V234.539L57.7578 230.578V229.422L51.0391 225.461V226.953L56.4141 229.93ZM61.2031 228.812C61.2031 230.016 61.9609 230.789 63.4922 231.141L64.75 231.43C65.8281 231.672 66.2422 232.031 66.2422 232.703C66.2422 233.516 65.5078 234.039 64.3516 234.039C63.2578 234.039 62.5078 233.586 62.3125 232.805H60.9609C61.1094 234.258 62.3828 235.156 64.3047 235.156C66.3125 235.156 67.6172 234.141 67.6172 232.578C67.6172 231.352 66.8672 230.633 65.2188 230.258L64.0234 229.984C62.9609 229.75 62.5234 229.383 62.5234 228.734C62.5234 227.961 63.2188 227.461 64.2969 227.461C65.2891 227.461 66 227.914 66.1562 228.656H67.4375C67.2812 227.242 66.0859 226.359 64.3203 226.359C62.4531 226.359 61.2031 227.344 61.2031 228.812ZM78.2656 228.758C78.2656 227.188 77.6484 226.367 76.4688 226.367C75.6172 226.367 74.9375 226.883 74.7188 227.695H74.5781C74.3984 226.859 73.8359 226.367 73.0391 226.367C72.2422 226.367 71.6328 226.867 71.4219 227.719H71.2812V226.523H70.0938V235H71.2891V229.281C71.2891 228.227 71.7578 227.578 72.5078 227.578C73.2266 227.578 73.6016 228.117 73.6016 229.141V235H74.7891V229.281C74.7891 228.227 75.2422 227.578 75.9844 227.578C76.6953 227.578 77.0703 228.117 77.0703 229.148V235H78.2656V228.758ZM83.2109 235.148C84.4453 235.148 85.3672 234.641 85.7734 233.734H85.9062V235.008H87.1719V229.203C87.1719 227.438 86.0312 226.422 84.0391 226.422C82.3047 226.422 80.9922 227.352 80.8359 228.711H82.1406C82.3594 227.984 83.0469 227.57 84.0234 227.57C85.2031 227.57 85.8516 228.156 85.8516 229.219V229.984L83.5234 230.102C81.5938 230.203 80.5156 231.094 80.5156 232.594C80.5156 234.133 81.5938 235.148 83.2109 235.148ZM83.5938 233.984C82.5234 233.984 81.8594 233.438 81.8594 232.547C81.8594 231.664 82.4844 231.156 83.6719 231.102L85.8516 231V232C85.8516 233.133 84.875 233.984 83.5938 233.984ZM90.875 228.812C90.875 230.016 91.6328 230.789 93.1641 231.141L94.4219 231.43C95.5 231.672 95.9141 232.031 95.9141 232.703C95.9141 233.516 95.1797 234.039 94.0234 234.039C92.9297 234.039 92.1797 233.586 91.9844 232.805H90.6328C90.7812 234.258 92.0547 235.156 93.9766 235.156C95.9844 235.156 97.2891 234.141 97.2891 232.578C97.2891 231.352 96.5391 230.633 94.8906 230.258L93.6953 229.984C92.6328 229.75 92.1953 229.383 92.1953 228.734C92.1953 227.961 92.8906 227.461 93.9688 227.461C94.9609 227.461 95.6719 227.914 95.8281 228.656H97.1094C96.9531 227.242 95.7578 226.359 93.9922 226.359C92.125 226.359 90.875 227.344 90.875 228.812ZM100.375 235H101.703V230.016C101.703 228.57 102.648 227.594 104.047 227.594C105.375 227.594 106 228.32 106 229.844V235H107.328V229.508C107.328 227.484 106.328 226.375 104.484 226.375C103.188 226.375 102.211 226.969 101.766 228.023H101.656V223.195H100.375V235ZM113.836 227.508C115.203 227.508 116.031 228.484 116.031 230.102H111.57C111.57 228.477 112.422 227.508 113.836 227.508ZM116.031 232.812C115.797 233.555 115.008 234.008 113.938 234.008C112.492 234.008 111.57 233.008 111.57 231.453V231.109H117.344V230.281C117.344 227.828 116.047 226.367 113.844 226.367C111.688 226.367 110.258 227.836 110.258 230.07V231.344C110.258 233.758 111.609 235.156 113.938 235.156C115.719 235.156 117.062 234.211 117.32 232.812H116.031ZM121.195 230.141C121.195 228.578 122.086 227.578 123.492 227.578C124.883 227.578 125.773 228.578 125.773 230.141V231.359C125.773 232.93 124.883 233.93 123.492 233.93C122.086 233.93 121.195 232.922 121.195 231.359V230.141ZM125.789 233.703V235H127.094V223.195H125.742V227.836H125.602C125.227 226.906 124.328 226.383 123.102 226.383C121.141 226.383 119.859 227.797 119.859 229.969V231.547C119.859 233.727 121.141 235.141 123.102 235.141C124.312 235.141 125.203 234.641 125.641 233.703H125.789ZM136.883 226.953V225.461L130.164 229.422V230.578L136.883 234.539V233.047L131.508 230.07V229.93L136.883 226.953ZM141.312 236.07L146.812 222.656H145.508L140.016 236.07H141.312ZM157.008 235V233.898H154.211V223.195H150.008V224.297H152.883V233.898H149.984V235H157.008ZM163.344 224.445C163.969 224.445 164.445 223.977 164.445 223.352C164.445 222.734 163.969 222.266 163.344 222.266C162.719 222.266 162.242 222.734 162.242 223.352C162.242 223.977 162.719 224.445 163.344 224.445ZM166.898 235V233.898H164.094V226.523H159.898V227.625H162.781V233.898H159.875V235H166.898ZM175.102 229.93V230.07L169.727 233.047V234.539L176.445 230.578V229.422L169.727 225.461V226.953L175.102 229.93ZM28.0859 251.953V250.461L21.3672 254.422V255.578L28.0859 259.539V258.047L22.7109 255.07V254.93L28.0859 251.953ZM38.3203 260V258.898H35.5234V248.195H31.3203V249.297H34.1953V258.898H31.2969V260H38.3203ZM44.6562 249.445C45.2812 249.445 45.7578 248.977 45.7578 248.352C45.7578 247.734 45.2812 247.266 44.6562 247.266C44.0312 247.266 43.5547 247.734 43.5547 248.352C43.5547 248.977 44.0312 249.445 44.6562 249.445ZM48.2109 260V258.898H45.4062V251.523H41.2109V252.625H44.0938V258.898H41.1875V260H48.2109ZM56.4141 254.93V255.07L51.0391 258.047V259.539L57.7578 255.578V254.422L51.0391 250.461V251.953L56.4141 254.93ZM64.8203 260.141C66.7812 260.141 68.0625 258.727 68.0625 256.547V254.969C68.0625 252.797 66.7812 251.383 64.8203 251.383C63.5938 251.383 62.6953 251.906 62.3203 252.836H62.1797V248.195H60.8281V260H62.1328V258.703H62.2812C62.7188 259.641 63.6094 260.141 64.8203 260.141ZM64.4297 258.93C63.0391 258.93 62.1484 257.93 62.1484 256.359V255.141C62.1484 253.578 63.0391 252.578 64.4297 252.578C65.8359 252.578 66.7266 253.578 66.7266 255.141V256.359C66.7266 257.922 65.8359 258.93 64.4297 258.93ZM74.1797 260.156C76.4219 260.156 77.8516 258.695 77.8516 256.406V255.125C77.8516 252.836 76.4219 251.375 74.1797 251.375C71.9375 251.375 70.5078 252.836 70.5078 255.125V256.406C70.5078 258.695 71.9375 260.156 74.1797 260.156ZM74.1797 252.547C75.6328 252.547 76.5391 253.578 76.5391 255.242V256.281C76.5391 257.953 75.6328 258.977 74.1797 258.977C72.7266 258.977 71.8203 257.953 71.8203 256.281V255.242C71.8203 253.578 72.7266 252.547 74.1797 252.547ZM84.2188 249.445C84.8438 249.445 85.3203 248.977 85.3203 248.352C85.3203 247.734 84.8438 247.266 84.2188 247.266C83.5938 247.266 83.1172 247.734 83.1172 248.352C83.1172 248.977 83.5938 249.445 84.2188 249.445ZM87.7734 260V258.898H84.9688V251.523H80.7734V252.625H83.6562V258.898H80.75V260H87.7734ZM97.6641 260V258.898H94.8672V248.195H90.6641V249.297H93.5391V258.898H90.6406V260H97.6641ZM103.945 252.508C105.312 252.508 106.141 253.484 106.141 255.102H101.68C101.68 253.477 102.531 252.508 103.945 252.508ZM106.141 257.812C105.906 258.555 105.117 259.008 104.047 259.008C102.602 259.008 101.68 258.008 101.68 256.453V256.109H107.453V255.281C107.453 252.828 106.156 251.367 103.953 251.367C101.797 251.367 100.367 252.836 100.367 255.07V256.344C100.367 258.758 101.719 260.156 104.047 260.156C105.828 260.156 107.172 259.211 107.43 257.812H106.141ZM111.305 255.141C111.305 253.578 112.195 252.578 113.602 252.578C114.992 252.578 115.883 253.578 115.883 255.141V256.359C115.883 257.93 114.992 258.93 113.602 258.93C112.195 258.93 111.305 257.922 111.305 256.359V255.141ZM115.898 258.703V260H117.203V248.195H115.852V252.836H115.711C115.336 251.906 114.438 251.383 113.211 251.383C111.25 251.383 109.969 252.797 109.969 254.969V256.547C109.969 258.727 111.25 260.141 113.211 260.141C114.422 260.141 115.312 259.641 115.75 258.703H115.898ZM126.992 251.953V250.461L120.273 254.422V255.578L126.992 259.539V258.047L121.617 255.07V254.93L126.992 251.953ZM131.422 261.07L136.922 247.656H135.617L130.125 261.07H131.422ZM147.117 260V258.898H144.32V248.195H140.117V249.297H142.992V258.898H140.094V260H147.117ZM153.453 249.445C154.078 249.445 154.555 248.977 154.555 248.352C154.555 247.734 154.078 247.266 153.453 247.266C152.828 247.266 152.352 247.734 152.352 248.352C152.352 248.977 152.828 249.445 153.453 249.445ZM157.008 260V258.898H154.203V251.523H150.008V252.625H152.891V258.898H149.984V260H157.008ZM165.211 254.93V255.07L159.836 258.047V259.539L166.555 255.578V254.422L159.836 250.461V251.953L165.211 254.93ZM8.30469 276.953V275.461L1.58594 279.422V280.578L8.30469 284.539V283.047L2.92969 280.07V279.93L8.30469 276.953ZM12.7344 286.07L18.2344 272.656H16.9297L11.4375 286.07H12.7344ZM28.1953 276.523H26.8672V281.516C26.8672 282.961 25.9297 283.938 24.5312 283.938C23.2109 283.938 22.5859 283.219 22.5859 281.688V276.523H21.2578V282.023C21.2578 284.055 22.2578 285.156 24.1016 285.156C25.3906 285.156 26.3594 284.562 26.8125 283.508H26.9219V285H28.1953V276.523ZM38.3203 285V283.898H35.5234V273.195H31.3203V274.297H34.1953V283.898H31.2969V285H38.3203ZM46.5234 279.93V280.07L41.1484 283.047V284.539L47.8672 280.578V279.422L41.1484 275.461V276.953L46.5234 279.93Z",
  transform: "translate(24 24)",
  fill: "#C8E1FF"
});

var _ref4 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M124.164 15.1406C126.125 15.1406 127.406 13.7266 127.406 11.5469V9.96875C127.406 7.79688 126.125 6.38281 124.164 6.38281C122.938 6.38281 122.039 6.90625 121.664 7.83594H121.523V3.19531H120.172V15H121.477V13.7031H121.625C122.062 14.6406 122.953 15.1406 124.164 15.1406ZM123.773 13.9297C122.383 13.9297 121.492 12.9297 121.492 11.3594V10.1406C121.492 8.57812 122.383 7.57812 123.773 7.57812C125.18 7.57812 126.07 8.57812 126.07 10.1406V11.3594C126.07 12.9219 125.18 13.9297 123.773 13.9297ZM133.523 15.1562C135.766 15.1562 137.195 13.6953 137.195 11.4062V10.125C137.195 7.83594 135.766 6.375 133.523 6.375C131.281 6.375 129.852 7.83594 129.852 10.125V11.4062C129.852 13.6953 131.281 15.1562 133.523 15.1562ZM133.523 7.54688C134.977 7.54688 135.883 8.57812 135.883 10.2422V11.2812C135.883 12.9531 134.977 13.9766 133.523 13.9766C132.07 13.9766 131.164 12.9531 131.164 11.2812V10.2422C131.164 8.57812 132.07 7.54688 133.523 7.54688ZM143.062 8.6875V6.52344H139.898V7.58594H141.781V13.9375H140.07V15H141.781H143.078H145.703V13.9375H143.078V11.2031C143.078 9.04688 144.188 7.75 146.062 7.75C146.523 7.75 147.07 7.84375 147.461 7.98438V6.49219C147.18 6.375 146.719 6.30469 146.234 6.30469C144.602 6.30469 143.547 7.11719 143.234 8.6875H143.062ZM163.727 6.38281C162.516 6.38281 161.633 6.88281 161.188 7.82031H161.047V6.52344H159.734V17.8594H161.086V13.6875H161.234C161.602 14.6172 162.5 15.1406 163.727 15.1406C165.688 15.1406 166.969 13.7266 166.969 11.5547V9.97656C166.969 7.79688 165.688 6.38281 163.727 6.38281ZM163.344 7.60156C164.742 7.60156 165.633 8.60156 165.633 10.1641V11.3828C165.633 12.9453 164.742 13.9531 163.344 13.9531C161.945 13.9531 161.055 12.9531 161.055 11.3828V10.1641C161.055 8.60156 161.945 7.60156 163.344 7.60156ZM177.219 10.6172V9.38281H168.953V10.6172H177.219ZM181.602 9.77344H182.891C184.453 9.77344 185.445 10.6094 185.445 11.9219C185.445 13.1953 184.484 13.9922 182.938 13.9922C181.531 13.9922 180.531 13.2109 180.406 12.0078H179.102C179.203 13.9531 180.75 15.2344 182.977 15.2344C185.227 15.2344 186.836 13.8672 186.836 11.9531C186.836 10.4141 185.945 9.35938 184.445 9.16406V9.03906C185.656 8.74219 186.367 7.77344 186.367 6.41406C186.367 4.70312 184.93 3.49219 182.914 3.49219C180.828 3.49219 179.453 4.70312 179.32 6.65625H180.641C180.75 5.44531 181.594 4.70312 182.859 4.70312C184.133 4.70312 184.977 5.46094 184.977 6.60938C184.977 7.78906 184.094 8.61719 182.828 8.61719H181.602V9.77344ZM122.383 40H123.711V32.6797H127.438V31.5469H123.695V30.6719C123.695 29.8203 124.32 29.3828 125.5 29.3828C125.977 29.3828 127.07 29.4141 127.438 29.4531V28.3672C127.156 28.3281 125.977 28.2891 125.484 28.2891C123.398 28.2891 122.383 29.0547 122.383 30.6953V31.5469H120.109V32.6797H122.383V40ZM132.148 34.7734H133.438C135 34.7734 135.992 35.6094 135.992 36.9219C135.992 38.1953 135.031 38.9922 133.484 38.9922C132.078 38.9922 131.078 38.2109 130.953 37.0078H129.648C129.75 38.9531 131.297 40.2344 133.523 40.2344C135.773 40.2344 137.383 38.8672 137.383 36.9531C137.383 35.4141 136.492 34.3594 134.992 34.1641V34.0391C136.203 33.7422 136.914 32.7734 136.914 31.4141C136.914 29.7031 135.477 28.4922 133.461 28.4922C131.375 28.4922 130 29.7031 129.867 31.6562H131.188C131.297 30.4453 132.141 29.7031 133.406 29.7031C134.68 29.7031 135.523 30.4609 135.523 31.6094C135.523 32.7891 134.641 33.6172 133.375 33.6172H132.148V34.7734ZM147.547 35.6172V34.3828H139.281V35.6172H147.547ZM157.008 40V38.8984H154.211V28.1953H150.008V29.2969H152.883V38.8984H149.984V40H157.008ZM163.344 29.4453C163.969 29.4453 164.445 28.9766 164.445 28.3516C164.445 27.7344 163.969 27.2656 163.344 27.2656C162.719 27.2656 162.242 27.7344 162.242 28.3516C162.242 28.9766 162.719 29.4453 163.344 29.4453ZM166.898 40V38.8984H164.094V31.5234H159.898V32.625H162.781V38.8984H159.875V40H166.898ZM170.562 36.3047V35.1406C170.562 33.5859 171.469 32.5781 172.875 32.5781C174.273 32.5781 175.172 33.5781 175.172 35.1406V36.3047C175.172 37.8672 174.273 38.875 172.875 38.875C171.469 38.875 170.562 37.8594 170.562 36.3047ZM172.836 43.1797C175.133 43.1797 176.492 41.9922 176.492 40V31.5234H175.18V32.8359H175.031C174.664 31.9219 173.734 31.3828 172.508 31.3828C170.523 31.3828 169.227 32.7891 169.227 34.9688V36.4922C169.227 38.6641 170.516 40.0781 172.477 40.0781C173.711 40.0781 174.648 39.5391 175.023 38.6484H175.164V39.9688C175.164 41.3281 174.344 42.0781 172.859 42.0781C171.727 42.0781 170.875 41.6172 170.703 40.9141H169.391C169.562 42.3203 170.875 43.1797 172.836 43.1797ZM179.5 40H180.828V35.0156C180.828 33.5703 181.773 32.5938 183.172 32.5938C184.5 32.5938 185.125 33.3203 185.125 34.8438V40H186.453V34.5078C186.453 32.4844 185.453 31.375 183.609 31.375C182.312 31.375 181.336 31.9688 180.891 33.0234H180.781V28.1953H179.5V40ZM191.422 29.25V31.5469H189.164V32.6797H191.422V37.4766C191.422 39.2422 192.398 40.0391 194.5 40.0391C194.906 40.0391 195.938 40 196.148 39.9609V38.8359C195.922 38.8594 195.07 38.8828 194.594 38.8828C193.398 38.8828 192.75 38.3828 192.75 37.4609V32.6797H196.172V31.5469H192.734V29.25H191.422Z",
  transform: "translate(24 24)",
  fill: "#79B8FF"
});

var _ref5 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
  y1: -1,
  x2: 20,
  y2: -1,
  transform: "translate(172 23) rotate(90)",
  stroke: "#2188FF",
  strokeWidth: 2
});

var _ref6 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  filter: "url(#filter0_d)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  width: 346,
  height: 312,
  transform: "translate(168 50)",
  fill: "#032F62"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  width: 346,
  height: 36,
  transform: "translate(168 398) scale(1 -1)",
  fill: "#05264C"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  width: 32,
  height: 312,
  transform: "translate(168 50)",
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  opacity: 0.06,
  width: 346,
  height: 38,
  transform: "translate(168 186)",
  fill: "white"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M5.89844 15.1328C7.875 15.1328 9.03906 13.7734 9.03906 11.4297V9.94531C9.03906 7.60156 7.875 6.24219 5.89844 6.24219C4.66406 6.24219 3.80469 6.82031 3.51562 7.85156H3.35156V3.10156H1.125V15H3.32812V13.5156H3.48438C3.78906 14.5625 4.64062 15.1328 5.89844 15.1328ZM5.07812 13.2812C3.97656 13.2812 3.29688 12.5547 3.29688 11.3672V9.94531C3.29688 8.75781 3.97656 8.03906 5.07812 8.03906C6.1875 8.03906 6.85938 8.75781 6.85938 9.94531V11.3672C6.85938 12.5547 6.1875 13.2812 5.07812 13.2812ZM14.8359 15.1875C17.2656 15.1875 18.7969 13.7109 18.7969 11.3594V10.0312C18.7969 7.67969 17.2656 6.20312 14.8359 6.20312C12.4062 6.20312 10.875 7.67969 10.875 10.0312V11.3594C10.875 13.7109 12.4062 15.1875 14.8359 15.1875ZM14.8359 7.95312C15.9844 7.95312 16.6953 8.78125 16.6953 10.1172V11.2734C16.6953 12.6016 15.9844 13.4375 14.8359 13.4375C13.6875 13.4375 12.9766 12.6016 12.9766 11.2734V10.1172C12.9766 8.78125 13.6875 7.95312 14.8359 7.95312ZM24.5781 8.59375V6.38281H20.7188V7.96094H22.5156V13.4297H20.875V15H22.5156H24.5625H27.0625V13.4297H24.5625V11.1797C24.5625 9.32812 25.5547 8.40625 27.5859 8.40625C28.0703 8.40625 28.6328 8.50781 29.0234 8.65625V6.33594C28.7188 6.21875 28.2812 6.15625 27.7969 6.15625C26.1719 6.15625 25.2891 6.88281 24.9141 8.59375H24.5781ZM32.1797 10.1406C32.1797 8.57812 33.0703 7.57812 34.4766 7.57812C35.8672 7.57812 36.7578 8.57812 36.7578 10.1406V11.3594C36.7578 12.9297 35.8672 13.9297 34.4766 13.9297C33.0703 13.9297 32.1797 12.9219 32.1797 11.3594V10.1406ZM36.7734 13.7031V15H38.0781V3.19531H36.7266V7.83594H36.5859C36.2109 6.90625 35.3125 6.38281 34.0859 6.38281C32.125 6.38281 30.8438 7.79688 30.8438 9.96875V11.5469C30.8438 13.7266 32.125 15.1406 34.0859 15.1406C35.2969 15.1406 36.1875 14.6406 36.625 13.7031H36.7734ZM44.6016 7.50781C45.9688 7.50781 46.7969 8.48438 46.7969 10.1016H42.3359C42.3359 8.47656 43.1875 7.50781 44.6016 7.50781ZM46.7969 12.8125C46.5625 13.5547 45.7734 14.0078 44.7031 14.0078C43.2578 14.0078 42.3359 13.0078 42.3359 11.4531V11.1094H48.1094V10.2812C48.1094 7.82812 46.8125 6.36719 44.6094 6.36719C42.4531 6.36719 41.0234 7.83594 41.0234 10.0703V11.3438C41.0234 13.7578 42.375 15.1562 44.7031 15.1562C46.4844 15.1562 47.8281 14.2109 48.0859 12.8125H46.7969ZM54.0469 8.6875V6.52344H50.8828V7.58594H52.7656V13.9375H51.0547V15H52.7656H54.0625H56.6875V13.9375H54.0625V11.2031C54.0625 9.04688 55.1719 7.75 57.0469 7.75C57.5078 7.75 58.0547 7.84375 58.4453 7.98438V6.49219C58.1641 6.375 57.7031 6.30469 57.2188 6.30469C55.5859 6.30469 54.5312 7.11719 54.2188 8.6875H54.0469ZM5.89844 58.1328C7.875 58.1328 9.03906 56.7734 9.03906 54.4297V52.9453C9.03906 50.6016 7.875 49.2422 5.89844 49.2422C4.66406 49.2422 3.80469 49.8203 3.51562 50.8516H3.35156V46.1016H1.125V58H3.32812V56.5156H3.48438C3.78906 57.5625 4.64062 58.1328 5.89844 58.1328ZM5.07812 56.2812C3.97656 56.2812 3.29688 55.5547 3.29688 54.3672V52.9453C3.29688 51.7578 3.97656 51.0391 5.07812 51.0391C6.1875 51.0391 6.85938 51.7578 6.85938 52.9453V54.3672C6.85938 55.5547 6.1875 56.2812 5.07812 56.2812ZM14.8359 58.1875C17.2656 58.1875 18.7969 56.7109 18.7969 54.3594V53.0312C18.7969 50.6797 17.2656 49.2031 14.8359 49.2031C12.4062 49.2031 10.875 50.6797 10.875 53.0312V54.3594C10.875 56.7109 12.4062 58.1875 14.8359 58.1875ZM14.8359 50.9531C15.9844 50.9531 16.6953 51.7812 16.6953 53.1172V54.2734C16.6953 55.6016 15.9844 56.4375 14.8359 56.4375C13.6875 56.4375 12.9766 55.6016 12.9766 54.2734V53.1172C12.9766 51.7812 13.6875 50.9531 14.8359 50.9531ZM24.5781 51.5938V49.3828H20.7188V50.9609H22.5156V56.4297H20.875V58H22.5156H24.5625H27.0625V56.4297H24.5625V54.1797C24.5625 52.3281 25.5547 51.4062 27.5859 51.4062C28.0703 51.4062 28.6328 51.5078 29.0234 51.6562V49.3359C28.7188 49.2188 28.2812 49.1562 27.7969 49.1562C26.1719 49.1562 25.2891 49.8828 24.9141 51.5938H24.5781ZM32.1797 53.1406C32.1797 51.5781 33.0703 50.5781 34.4766 50.5781C35.8672 50.5781 36.7578 51.5781 36.7578 53.1406V54.3594C36.7578 55.9297 35.8672 56.9297 34.4766 56.9297C33.0703 56.9297 32.1797 55.9219 32.1797 54.3594V53.1406ZM36.7734 56.7031V58H38.0781V46.1953H36.7266V50.8359H36.5859C36.2109 49.9062 35.3125 49.3828 34.0859 49.3828C32.125 49.3828 30.8438 50.7969 30.8438 52.9688V54.5469C30.8438 56.7266 32.125 58.1406 34.0859 58.1406C35.2969 58.1406 36.1875 57.6406 36.625 56.7031H36.7734ZM44.6016 50.5078C45.9688 50.5078 46.7969 51.4844 46.7969 53.1016H42.3359C42.3359 51.4766 43.1875 50.5078 44.6016 50.5078ZM46.7969 55.8125C46.5625 56.5547 45.7734 57.0078 44.7031 57.0078C43.2578 57.0078 42.3359 56.0078 42.3359 54.4531V54.1094H48.1094V53.2812C48.1094 50.8281 46.8125 49.3672 44.6094 49.3672C42.4531 49.3672 41.0234 50.8359 41.0234 53.0703V54.3438C41.0234 56.7578 42.375 58.1562 44.7031 58.1562C46.4844 58.1562 47.8281 57.2109 48.0859 55.8125H46.7969ZM54.0469 51.6875V49.5234H50.8828V50.5859H52.7656V56.9375H51.0547V58H52.7656H54.0625H56.6875V56.9375H54.0625V54.2031C54.0625 52.0469 55.1719 50.75 57.0469 50.75C57.5078 50.75 58.0547 50.8438 58.4453 50.9844V49.4922C58.1641 49.375 57.7031 49.3047 57.2188 49.3047C55.5859 49.3047 54.5312 50.1172 54.2188 51.6875H54.0469ZM68.4219 53.6172V52.3828H60.1562V53.6172H68.4219ZM72.7344 47.25V49.5469H70.4766V50.6797H72.7344V55.4766C72.7344 57.2422 73.7109 58.0391 75.8125 58.0391C76.2188 58.0391 77.25 58 77.4609 57.9609V56.8359C77.2344 56.8594 76.3828 56.8828 75.9062 56.8828C74.7109 56.8828 74.0625 56.3828 74.0625 55.4609V50.6797H77.4844V49.5469H74.0469V47.25H72.7344ZM84.0703 58.1562C86.3125 58.1562 87.7422 56.6953 87.7422 54.4062V53.125C87.7422 50.8359 86.3125 49.375 84.0703 49.375C81.8281 49.375 80.3984 50.8359 80.3984 53.125V54.4062C80.3984 56.6953 81.8281 58.1562 84.0703 58.1562ZM84.0703 50.5469C85.5234 50.5469 86.4297 51.5781 86.4297 53.2422V54.2812C86.4297 55.9531 85.5234 56.9766 84.0703 56.9766C82.6172 56.9766 81.7109 55.9531 81.7109 54.2812V53.2422C81.7109 51.5781 82.6172 50.5469 84.0703 50.5469ZM94.4922 49.3828C93.2812 49.3828 92.3984 49.8828 91.9531 50.8203H91.8125V49.5234H90.5V60.8594H91.8516V56.6875H92C92.3672 57.6172 93.2656 58.1406 94.4922 58.1406C96.4531 58.1406 97.7344 56.7266 97.7344 54.5547V52.9766C97.7344 50.7969 96.4531 49.3828 94.4922 49.3828ZM94.1094 50.6016C95.5078 50.6016 96.3984 51.6016 96.3984 53.1641V54.3828C96.3984 55.9453 95.5078 56.9531 94.1094 56.9531C92.7109 56.9531 91.8203 55.9531 91.8203 54.3828V53.1641C91.8203 51.6016 92.7109 50.6016 94.1094 50.6016ZM5.89844 101.133C7.875 101.133 9.03906 99.7734 9.03906 97.4297V95.9453C9.03906 93.6016 7.875 92.2422 5.89844 92.2422C4.66406 92.2422 3.80469 92.8203 3.51562 93.8516H3.35156V89.1016H1.125V101H3.32812V99.5156H3.48438C3.78906 100.562 4.64062 101.133 5.89844 101.133ZM5.07812 99.2812C3.97656 99.2812 3.29688 98.5547 3.29688 97.3672V95.9453C3.29688 94.7578 3.97656 94.0391 5.07812 94.0391C6.1875 94.0391 6.85938 94.7578 6.85938 95.9453V97.3672C6.85938 98.5547 6.1875 99.2812 5.07812 99.2812ZM14.8359 101.188C17.2656 101.188 18.7969 99.7109 18.7969 97.3594V96.0312C18.7969 93.6797 17.2656 92.2031 14.8359 92.2031C12.4062 92.2031 10.875 93.6797 10.875 96.0312V97.3594C10.875 99.7109 12.4062 101.188 14.8359 101.188ZM14.8359 93.9531C15.9844 93.9531 16.6953 94.7812 16.6953 96.1172V97.2734C16.6953 98.6016 15.9844 99.4375 14.8359 99.4375C13.6875 99.4375 12.9766 98.6016 12.9766 97.2734V96.1172C12.9766 94.7812 13.6875 93.9531 14.8359 93.9531ZM24.5781 94.5938V92.3828H20.7188V93.9609H22.5156V99.4297H20.875V101H22.5156H24.5625H27.0625V99.4297H24.5625V97.1797C24.5625 95.3281 25.5547 94.4062 27.5859 94.4062C28.0703 94.4062 28.6328 94.5078 29.0234 94.6562V92.3359C28.7188 92.2188 28.2812 92.1562 27.7969 92.1562C26.1719 92.1562 25.2891 92.8828 24.9141 94.5938H24.5781ZM32.1797 96.1406C32.1797 94.5781 33.0703 93.5781 34.4766 93.5781C35.8672 93.5781 36.7578 94.5781 36.7578 96.1406V97.3594C36.7578 98.9297 35.8672 99.9297 34.4766 99.9297C33.0703 99.9297 32.1797 98.9219 32.1797 97.3594V96.1406ZM36.7734 99.7031V101H38.0781V89.1953H36.7266V93.8359H36.5859C36.2109 92.9062 35.3125 92.3828 34.0859 92.3828C32.125 92.3828 30.8438 93.7969 30.8438 95.9688V97.5469C30.8438 99.7266 32.125 101.141 34.0859 101.141C35.2969 101.141 36.1875 100.641 36.625 99.7031H36.7734ZM44.6016 93.5078C45.9688 93.5078 46.7969 94.4844 46.7969 96.1016H42.3359C42.3359 94.4766 43.1875 93.5078 44.6016 93.5078ZM46.7969 98.8125C46.5625 99.5547 45.7734 100.008 44.7031 100.008C43.2578 100.008 42.3359 99.0078 42.3359 97.4531V97.1094H48.1094V96.2812C48.1094 93.8281 46.8125 92.3672 44.6094 92.3672C42.4531 92.3672 41.0234 93.8359 41.0234 96.0703V97.3438C41.0234 99.7578 42.375 101.156 44.7031 101.156C46.4844 101.156 47.8281 100.211 48.0859 98.8125H46.7969ZM54.0469 94.6875V92.5234H50.8828V93.5859H52.7656V99.9375H51.0547V101H52.7656H54.0625H56.6875V99.9375H54.0625V97.2031C54.0625 95.0469 55.1719 93.75 57.0469 93.75C57.5078 93.75 58.0547 93.8438 58.4453 93.9844V92.4922C58.1641 92.375 57.7031 92.3047 57.2188 92.3047C55.5859 92.3047 54.5312 93.1172 54.2188 94.6875H54.0469ZM68.4219 96.6172V95.3828H60.1562V96.6172H68.4219ZM73.8281 94.6875V92.5234H70.6641V93.5859H72.5469V99.9375H70.8359V101H72.5469H73.8438H76.4688V99.9375H73.8438V97.2031C73.8438 95.0469 74.9531 93.75 76.8281 93.75C77.2891 93.75 77.8359 93.8438 78.2266 93.9844V92.4922C77.9453 92.375 77.4844 92.3047 77 92.3047C75.3672 92.3047 74.3125 93.1172 74 94.6875H73.8281ZM84.2188 90.4453C84.8438 90.4453 85.3203 89.9766 85.3203 89.3516C85.3203 88.7344 84.8438 88.2656 84.2188 88.2656C83.5938 88.2656 83.1172 88.7344 83.1172 89.3516C83.1172 89.9766 83.5938 90.4453 84.2188 90.4453ZM87.7734 101V99.8984H84.9688V92.5234H80.7734V93.625H83.6562V99.8984H80.75V101H87.7734ZM91.4375 97.3047V96.1406C91.4375 94.5859 92.3438 93.5781 93.75 93.5781C95.1484 93.5781 96.0469 94.5781 96.0469 96.1406V97.3047C96.0469 98.8672 95.1484 99.875 93.75 99.875C92.3438 99.875 91.4375 98.8594 91.4375 97.3047ZM93.7109 104.18C96.0078 104.18 97.3672 102.992 97.3672 101V92.5234H96.0547V93.8359H95.9062C95.5391 92.9219 94.6094 92.3828 93.3828 92.3828C91.3984 92.3828 90.1016 93.7891 90.1016 95.9688V97.4922C90.1016 99.6641 91.3906 101.078 93.3516 101.078C94.5859 101.078 95.5234 100.539 95.8984 99.6484H96.0391V100.969C96.0391 102.328 95.2188 103.078 93.7344 103.078C92.6016 103.078 91.75 102.617 91.5781 101.914H90.2656C90.4375 103.32 91.75 104.18 93.7109 104.18ZM100.375 101H101.703V96.0156C101.703 94.5703 102.648 93.5938 104.047 93.5938C105.375 93.5938 106 94.3203 106 95.8438V101H107.328V95.5078C107.328 93.4844 106.328 92.375 104.484 92.375C103.188 92.375 102.211 92.9688 101.766 94.0234H101.656V89.1953H100.375V101ZM112.297 90.25V92.5469H110.039V93.6797H112.297V98.4766C112.297 100.242 113.273 101.039 115.375 101.039C115.781 101.039 116.812 101 117.023 100.961V99.8359C116.797 99.8594 115.945 99.8828 115.469 99.8828C114.273 99.8828 113.625 99.3828 113.625 98.4609V93.6797H117.047V92.5469H113.609V90.25H112.297ZM5.89844 145.133C7.875 145.133 9.03906 143.773 9.03906 141.43V139.945C9.03906 137.602 7.875 136.242 5.89844 136.242C4.66406 136.242 3.80469 136.82 3.51562 137.852H3.35156V133.102H1.125V145H3.32812V143.516H3.48438C3.78906 144.562 4.64062 145.133 5.89844 145.133ZM5.07812 143.281C3.97656 143.281 3.29688 142.555 3.29688 141.367V139.945C3.29688 138.758 3.97656 138.039 5.07812 138.039C6.1875 138.039 6.85938 138.758 6.85938 139.945V141.367C6.85938 142.555 6.1875 143.281 5.07812 143.281ZM14.8359 145.188C17.2656 145.188 18.7969 143.711 18.7969 141.359V140.031C18.7969 137.68 17.2656 136.203 14.8359 136.203C12.4062 136.203 10.875 137.68 10.875 140.031V141.359C10.875 143.711 12.4062 145.188 14.8359 145.188ZM14.8359 137.953C15.9844 137.953 16.6953 138.781 16.6953 140.117V141.273C16.6953 142.602 15.9844 143.438 14.8359 143.438C13.6875 143.438 12.9766 142.602 12.9766 141.273V140.117C12.9766 138.781 13.6875 137.953 14.8359 137.953ZM24.5781 138.594V136.383H20.7188V137.961H22.5156V143.43H20.875V145H22.5156H24.5625H27.0625V143.43H24.5625V141.18C24.5625 139.328 25.5547 138.406 27.5859 138.406C28.0703 138.406 28.6328 138.508 29.0234 138.656V136.336C28.7188 136.219 28.2812 136.156 27.7969 136.156C26.1719 136.156 25.2891 136.883 24.9141 138.594H24.5781ZM32.1797 140.141C32.1797 138.578 33.0703 137.578 34.4766 137.578C35.8672 137.578 36.7578 138.578 36.7578 140.141V141.359C36.7578 142.93 35.8672 143.93 34.4766 143.93C33.0703 143.93 32.1797 142.922 32.1797 141.359V140.141ZM36.7734 143.703V145H38.0781V133.195H36.7266V137.836H36.5859C36.2109 136.906 35.3125 136.383 34.0859 136.383C32.125 136.383 30.8438 137.797 30.8438 139.969V141.547C30.8438 143.727 32.125 145.141 34.0859 145.141C35.2969 145.141 36.1875 144.641 36.625 143.703H36.7734ZM44.6016 137.508C45.9688 137.508 46.7969 138.484 46.7969 140.102H42.3359C42.3359 138.477 43.1875 137.508 44.6016 137.508ZM46.7969 142.812C46.5625 143.555 45.7734 144.008 44.7031 144.008C43.2578 144.008 42.3359 143.008 42.3359 141.453V141.109H48.1094V140.281C48.1094 137.828 46.8125 136.367 44.6094 136.367C42.4531 136.367 41.0234 137.836 41.0234 140.07V141.344C41.0234 143.758 42.375 145.156 44.7031 145.156C46.4844 145.156 47.8281 144.211 48.0859 142.812H46.7969ZM54.0469 138.688V136.523H50.8828V137.586H52.7656V143.938H51.0547V145H52.7656H54.0625H56.6875V143.938H54.0625V141.203C54.0625 139.047 55.1719 137.75 57.0469 137.75C57.5078 137.75 58.0547 137.844 58.4453 137.984V136.492C58.1641 136.375 57.7031 136.305 57.2188 136.305C55.5859 136.305 54.5312 137.117 54.2188 138.688H54.0469ZM68.4219 140.617V139.383H60.1562V140.617H68.4219ZM74.7109 145.141C76.6719 145.141 77.9531 143.727 77.9531 141.547V139.969C77.9531 137.797 76.6719 136.383 74.7109 136.383C73.4844 136.383 72.5859 136.906 72.2109 137.836H72.0703V133.195H70.7188V145H72.0234V143.703H72.1719C72.6094 144.641 73.5 145.141 74.7109 145.141ZM74.3203 143.93C72.9297 143.93 72.0391 142.93 72.0391 141.359V140.141C72.0391 138.578 72.9297 137.578 74.3203 137.578C75.7266 137.578 76.6172 138.578 76.6172 140.141V141.359C76.6172 142.922 75.7266 143.93 74.3203 143.93ZM84.0703 145.156C86.3125 145.156 87.7422 143.695 87.7422 141.406V140.125C87.7422 137.836 86.3125 136.375 84.0703 136.375C81.8281 136.375 80.3984 137.836 80.3984 140.125V141.406C80.3984 143.695 81.8281 145.156 84.0703 145.156ZM84.0703 137.547C85.5234 137.547 86.4297 138.578 86.4297 140.242V141.281C86.4297 142.953 85.5234 143.977 84.0703 143.977C82.6172 143.977 81.7109 142.953 81.7109 141.281V140.242C81.7109 138.578 82.6172 137.547 84.0703 137.547ZM92.5156 134.25V136.547H90.2578V137.68H92.5156V142.477C92.5156 144.242 93.4922 145.039 95.5938 145.039C96 145.039 97.0312 145 97.2422 144.961V143.836C97.0156 143.859 96.1641 143.883 95.6875 143.883C94.4922 143.883 93.8438 143.383 93.8438 142.461V137.68H97.2656V136.547H93.8281V134.25H92.5156ZM102.406 134.25V136.547H100.148V137.68H102.406V142.477C102.406 144.242 103.383 145.039 105.484 145.039C105.891 145.039 106.922 145 107.133 144.961V143.836C106.906 143.859 106.055 143.883 105.578 143.883C104.383 143.883 103.734 143.383 103.734 142.461V137.68H107.156V136.547H103.719V134.25H102.406ZM113.742 145.156C115.984 145.156 117.414 143.695 117.414 141.406V140.125C117.414 137.836 115.984 136.375 113.742 136.375C111.5 136.375 110.07 137.836 110.07 140.125V141.406C110.07 143.695 111.5 145.156 113.742 145.156ZM113.742 137.547C115.195 137.547 116.102 138.578 116.102 140.242V141.281C116.102 142.953 115.195 143.977 113.742 143.977C112.289 143.977 111.383 142.953 111.383 141.281V140.242C111.383 138.578 112.289 137.547 113.742 137.547ZM127.719 138.758C127.719 137.188 127.102 136.367 125.922 136.367C125.07 136.367 124.391 136.883 124.172 137.695H124.031C123.852 136.859 123.289 136.367 122.492 136.367C121.695 136.367 121.086 136.867 120.875 137.719H120.734V136.523H119.547V145H120.742V139.281C120.742 138.227 121.211 137.578 121.961 137.578C122.68 137.578 123.055 138.117 123.055 139.141V145H124.242V139.281C124.242 138.227 124.695 137.578 125.438 137.578C126.148 137.578 126.523 138.117 126.523 139.148V145H127.719V138.758ZM5.89844 188.133C7.875 188.133 9.03906 186.773 9.03906 184.43V182.945C9.03906 180.602 7.875 179.242 5.89844 179.242C4.66406 179.242 3.80469 179.82 3.51562 180.852H3.35156V176.102H1.125V188H3.32812V186.516H3.48438C3.78906 187.562 4.64062 188.133 5.89844 188.133ZM5.07812 186.281C3.97656 186.281 3.29688 185.555 3.29688 184.367V182.945C3.29688 181.758 3.97656 181.039 5.07812 181.039C6.1875 181.039 6.85938 181.758 6.85938 182.945V184.367C6.85938 185.555 6.1875 186.281 5.07812 186.281ZM14.8359 188.188C17.2656 188.188 18.7969 186.711 18.7969 184.359V183.031C18.7969 180.68 17.2656 179.203 14.8359 179.203C12.4062 179.203 10.875 180.68 10.875 183.031V184.359C10.875 186.711 12.4062 188.188 14.8359 188.188ZM14.8359 180.953C15.9844 180.953 16.6953 181.781 16.6953 183.117V184.273C16.6953 185.602 15.9844 186.438 14.8359 186.438C13.6875 186.438 12.9766 185.602 12.9766 184.273V183.117C12.9766 181.781 13.6875 180.953 14.8359 180.953ZM24.5781 181.594V179.383H20.7188V180.961H22.5156V186.43H20.875V188H22.5156H24.5625H27.0625V186.43H24.5625V184.18C24.5625 182.328 25.5547 181.406 27.5859 181.406C28.0703 181.406 28.6328 181.508 29.0234 181.656V179.336C28.7188 179.219 28.2812 179.156 27.7969 179.156C26.1719 179.156 25.2891 179.883 24.9141 181.594H24.5781ZM32.1797 183.141C32.1797 181.578 33.0703 180.578 34.4766 180.578C35.8672 180.578 36.7578 181.578 36.7578 183.141V184.359C36.7578 185.93 35.8672 186.93 34.4766 186.93C33.0703 186.93 32.1797 185.922 32.1797 184.359V183.141ZM36.7734 186.703V188H38.0781V176.195H36.7266V180.836H36.5859C36.2109 179.906 35.3125 179.383 34.0859 179.383C32.125 179.383 30.8438 180.797 30.8438 182.969V184.547C30.8438 186.727 32.125 188.141 34.0859 188.141C35.2969 188.141 36.1875 187.641 36.625 186.703H36.7734ZM44.6016 180.508C45.9688 180.508 46.7969 181.484 46.7969 183.102H42.3359C42.3359 181.477 43.1875 180.508 44.6016 180.508ZM46.7969 185.812C46.5625 186.555 45.7734 187.008 44.7031 187.008C43.2578 187.008 42.3359 186.008 42.3359 184.453V184.109H48.1094V183.281C48.1094 180.828 46.8125 179.367 44.6094 179.367C42.4531 179.367 41.0234 180.836 41.0234 183.07V184.344C41.0234 186.758 42.375 188.156 44.7031 188.156C46.4844 188.156 47.8281 187.211 48.0859 185.812H46.7969ZM54.0469 181.688V179.523H50.8828V180.586H52.7656V186.938H51.0547V188H52.7656H54.0625H56.6875V186.938H54.0625V184.203C54.0625 182.047 55.1719 180.75 57.0469 180.75C57.5078 180.75 58.0547 180.844 58.4453 180.984V179.492C58.1641 179.375 57.7031 179.305 57.2188 179.305C55.5859 179.305 54.5312 180.117 54.2188 181.688H54.0469ZM68.4219 183.617V182.383H60.1562V183.617H68.4219ZM77.8828 188V186.898H75.0859V176.195H70.8828V177.297H73.7578V186.898H70.8594V188H77.8828ZM84.1641 180.508C85.5312 180.508 86.3594 181.484 86.3594 183.102H81.8984C81.8984 181.477 82.75 180.508 84.1641 180.508ZM86.3594 185.812C86.125 186.555 85.3359 187.008 84.2656 187.008C82.8203 187.008 81.8984 186.008 81.8984 184.453V184.109H87.6719V183.281C87.6719 180.828 86.375 179.367 84.1719 179.367C82.0156 179.367 80.5859 180.836 80.5859 183.07V184.344C80.5859 186.758 81.9375 188.156 84.2656 188.156C86.0469 188.156 87.3906 187.211 87.6484 185.812H86.3594ZM92.7109 188H94.0391V180.68H97.7656V179.547H94.0234V178.672C94.0234 177.82 94.6484 177.383 95.8281 177.383C96.3047 177.383 97.3984 177.414 97.7656 177.453V176.367C97.4844 176.328 96.3047 176.289 95.8125 176.289C93.7266 176.289 92.7109 177.055 92.7109 178.695V179.547H90.4375V180.68H92.7109V188ZM102.406 177.25V179.547H100.148V180.68H102.406V185.477C102.406 187.242 103.383 188.039 105.484 188.039C105.891 188.039 106.922 188 107.133 187.961V186.836C106.906 186.859 106.055 186.883 105.578 186.883C104.383 186.883 103.734 186.383 103.734 185.461V180.68H107.156V179.547H103.719V177.25H102.406ZM5.89844 231.133C7.875 231.133 9.03906 229.773 9.03906 227.43V225.945C9.03906 223.602 7.875 222.242 5.89844 222.242C4.66406 222.242 3.80469 222.82 3.51562 223.852H3.35156V219.102H1.125V231H3.32812V229.516H3.48438C3.78906 230.562 4.64062 231.133 5.89844 231.133ZM5.07812 229.281C3.97656 229.281 3.29688 228.555 3.29688 227.367V225.945C3.29688 224.758 3.97656 224.039 5.07812 224.039C6.1875 224.039 6.85938 224.758 6.85938 225.945V227.367C6.85938 228.555 6.1875 229.281 5.07812 229.281ZM14.8359 231.188C17.2656 231.188 18.7969 229.711 18.7969 227.359V226.031C18.7969 223.68 17.2656 222.203 14.8359 222.203C12.4062 222.203 10.875 223.68 10.875 226.031V227.359C10.875 229.711 12.4062 231.188 14.8359 231.188ZM14.8359 223.953C15.9844 223.953 16.6953 224.781 16.6953 226.117V227.273C16.6953 228.602 15.9844 229.438 14.8359 229.438C13.6875 229.438 12.9766 228.602 12.9766 227.273V226.117C12.9766 224.781 13.6875 223.953 14.8359 223.953ZM24.5781 224.594V222.383H20.7188V223.961H22.5156V229.43H20.875V231H22.5156H24.5625H27.0625V229.43H24.5625V227.18C24.5625 225.328 25.5547 224.406 27.5859 224.406C28.0703 224.406 28.6328 224.508 29.0234 224.656V222.336C28.7188 222.219 28.2812 222.156 27.7969 222.156C26.1719 222.156 25.2891 222.883 24.9141 224.594H24.5781ZM32.1797 226.141C32.1797 224.578 33.0703 223.578 34.4766 223.578C35.8672 223.578 36.7578 224.578 36.7578 226.141V227.359C36.7578 228.93 35.8672 229.93 34.4766 229.93C33.0703 229.93 32.1797 228.922 32.1797 227.359V226.141ZM36.7734 229.703V231H38.0781V219.195H36.7266V223.836H36.5859C36.2109 222.906 35.3125 222.383 34.0859 222.383C32.125 222.383 30.8438 223.797 30.8438 225.969V227.547C30.8438 229.727 32.125 231.141 34.0859 231.141C35.2969 231.141 36.1875 230.641 36.625 229.703H36.7734ZM44.6016 223.508C45.9688 223.508 46.7969 224.484 46.7969 226.102H42.3359C42.3359 224.477 43.1875 223.508 44.6016 223.508ZM46.7969 228.812C46.5625 229.555 45.7734 230.008 44.7031 230.008C43.2578 230.008 42.3359 229.008 42.3359 227.453V227.109H48.1094V226.281C48.1094 223.828 46.8125 222.367 44.6094 222.367C42.4531 222.367 41.0234 223.836 41.0234 226.07V227.344C41.0234 229.758 42.375 231.156 44.7031 231.156C46.4844 231.156 47.8281 230.211 48.0859 228.812H46.7969ZM54.0469 224.688V222.523H50.8828V223.586H52.7656V229.938H51.0547V231H52.7656H54.0625H56.6875V229.938H54.0625V227.203C54.0625 225.047 55.1719 223.75 57.0469 223.75C57.5078 223.75 58.0547 223.844 58.4453 223.984V222.492C58.1641 222.375 57.7031 222.305 57.2188 222.305C55.5859 222.305 54.5312 223.117 54.2188 224.688H54.0469ZM68.4219 226.617V225.383H60.1562V226.617H68.4219ZM71.8047 234.016C73.375 234.016 74.0859 233.398 74.8281 231.312L78.0234 222.523H76.6094L74.2422 229.617H74.1406L71.7656 222.523H70.3203L73.4375 231.055L73.2891 231.516C72.9375 232.5 72.5 232.859 71.7031 232.859C71.5781 232.859 71.3359 232.852 71.2344 232.828V233.992C71.3516 234.008 71.6094 234.016 71.8047 234.016ZM5.89844 274.133C7.875 274.133 9.03906 272.773 9.03906 270.43V268.945C9.03906 266.602 7.875 265.242 5.89844 265.242C4.66406 265.242 3.80469 265.82 3.51562 266.852H3.35156V262.102H1.125V274H3.32812V272.516H3.48438C3.78906 273.562 4.64062 274.133 5.89844 274.133ZM5.07812 272.281C3.97656 272.281 3.29688 271.555 3.29688 270.367V268.945C3.29688 267.758 3.97656 267.039 5.07812 267.039C6.1875 267.039 6.85938 267.758 6.85938 268.945V270.367C6.85938 271.555 6.1875 272.281 5.07812 272.281ZM14.8359 274.188C17.2656 274.188 18.7969 272.711 18.7969 270.359V269.031C18.7969 266.68 17.2656 265.203 14.8359 265.203C12.4062 265.203 10.875 266.68 10.875 269.031V270.359C10.875 272.711 12.4062 274.188 14.8359 274.188ZM14.8359 266.953C15.9844 266.953 16.6953 267.781 16.6953 269.117V270.273C16.6953 271.602 15.9844 272.438 14.8359 272.438C13.6875 272.438 12.9766 271.602 12.9766 270.273V269.117C12.9766 267.781 13.6875 266.953 14.8359 266.953ZM24.5781 267.594V265.383H20.7188V266.961H22.5156V272.43H20.875V274H22.5156H24.5625H27.0625V272.43H24.5625V270.18C24.5625 268.328 25.5547 267.406 27.5859 267.406C28.0703 267.406 28.6328 267.508 29.0234 267.656V265.336C28.7188 265.219 28.2812 265.156 27.7969 265.156C26.1719 265.156 25.2891 265.883 24.9141 267.594H24.5781ZM32.1797 269.141C32.1797 267.578 33.0703 266.578 34.4766 266.578C35.8672 266.578 36.7578 267.578 36.7578 269.141V270.359C36.7578 271.93 35.8672 272.93 34.4766 272.93C33.0703 272.93 32.1797 271.922 32.1797 270.359V269.141ZM36.7734 272.703V274H38.0781V262.195H36.7266V266.836H36.5859C36.2109 265.906 35.3125 265.383 34.0859 265.383C32.125 265.383 30.8438 266.797 30.8438 268.969V270.547C30.8438 272.727 32.125 274.141 34.0859 274.141C35.2969 274.141 36.1875 273.641 36.625 272.703H36.7734ZM44.6016 266.508C45.9688 266.508 46.7969 267.484 46.7969 269.102H42.3359C42.3359 267.477 43.1875 266.508 44.6016 266.508ZM46.7969 271.812C46.5625 272.555 45.7734 273.008 44.7031 273.008C43.2578 273.008 42.3359 272.008 42.3359 270.453V270.109H48.1094V269.281C48.1094 266.828 46.8125 265.367 44.6094 265.367C42.4531 265.367 41.0234 266.836 41.0234 269.07V270.344C41.0234 272.758 42.375 274.156 44.7031 274.156C46.4844 274.156 47.8281 273.211 48.0859 271.812H46.7969ZM54.0469 267.688V265.523H50.8828V266.586H52.7656V272.938H51.0547V274H52.7656H54.0625H56.6875V272.938H54.0625V270.203C54.0625 268.047 55.1719 266.75 57.0469 266.75C57.5078 266.75 58.0547 266.844 58.4453 266.984V265.492C58.1641 265.375 57.7031 265.305 57.2188 265.305C55.5859 265.305 54.5312 266.117 54.2188 267.688H54.0469ZM68.4219 269.617V268.383H60.1562V269.617H68.4219ZM76.5625 267.109C76.6016 267.5 76.6172 267.914 76.6172 268.367C76.6172 271.422 75.7812 273.039 74.1875 273.039C73.125 273.039 72.3984 272.32 72.0312 270.938L76.5625 267.109ZM71.8047 269.609C71.7656 269.227 71.75 268.812 71.75 268.367C71.75 265.305 72.5938 263.695 74.1875 263.695C75.2578 263.695 75.9844 264.422 76.3438 265.82L71.8047 269.609ZM74.1875 262.477C71.7344 262.477 70.3828 264.57 70.3828 268.367C70.3828 272.164 71.7344 274.258 74.1875 274.258C76.6328 274.258 77.9922 272.164 77.9922 268.367C77.9922 264.57 76.6328 262.477 74.1875 262.477Z",
  transform: "translate(216 65)",
  fill: "#C8E1FF"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M8.84375 9.39062C8.64062 7.28125 7.34375 6.17188 5.11719 6.17188C2.57812 6.17188 1.17188 7.60938 1.17188 10.2266V11.1328C1.17188 13.75 2.57812 15.1875 5.11719 15.1875C7.34375 15.1875 8.65625 14.0938 8.84375 12.0391H6.75C6.60156 12.9609 6.03906 13.4062 5.10156 13.4062C3.95312 13.4062 3.32031 12.5469 3.32031 10.9688V10.3906C3.32031 8.8125 3.95312 7.95312 5.10156 7.95312C6.03125 7.95312 6.60938 8.42188 6.75 9.39062H8.84375ZM8.84375 52.3906C8.64062 50.2812 7.34375 49.1719 5.11719 49.1719C2.57812 49.1719 1.17188 50.6094 1.17188 53.2266V54.1328C1.17188 56.75 2.57812 58.1875 5.11719 58.1875C7.34375 58.1875 8.65625 57.0938 8.84375 55.0391H6.75C6.60156 55.9609 6.03906 56.4062 5.10156 56.4062C3.95312 56.4062 3.32031 55.5469 3.32031 53.9688V53.3906C3.32031 51.8125 3.95312 50.9531 5.10156 50.9531C6.03125 50.9531 6.60938 51.4219 6.75 52.3906H8.84375ZM8.84375 95.3906C8.64062 93.2812 7.34375 92.1719 5.11719 92.1719C2.57812 92.1719 1.17188 93.6094 1.17188 96.2266V97.1328C1.17188 99.75 2.57812 101.188 5.11719 101.188C7.34375 101.188 8.65625 100.094 8.84375 98.0391H6.75C6.60156 98.9609 6.03906 99.4062 5.10156 99.4062C3.95312 99.4062 3.32031 98.5469 3.32031 96.9688V96.3906C3.32031 94.8125 3.95312 93.9531 5.10156 93.9531C6.03125 93.9531 6.60938 94.4219 6.75 95.3906H8.84375ZM8.84375 139.391C8.64062 137.281 7.34375 136.172 5.11719 136.172C2.57812 136.172 1.17188 137.609 1.17188 140.227V141.133C1.17188 143.75 2.57812 145.188 5.11719 145.188C7.34375 145.188 8.65625 144.094 8.84375 142.039H6.75C6.60156 142.961 6.03906 143.406 5.10156 143.406C3.95312 143.406 3.32031 142.547 3.32031 140.969V140.391C3.32031 138.812 3.95312 137.953 5.10156 137.953C6.03125 137.953 6.60938 138.422 6.75 139.391H8.84375ZM8.84375 182.391C8.64062 180.281 7.34375 179.172 5.11719 179.172C2.57812 179.172 1.17188 180.609 1.17188 183.227V184.133C1.17188 186.75 2.57812 188.188 5.11719 188.188C7.34375 188.188 8.65625 187.094 8.84375 185.039H6.75C6.60156 185.961 6.03906 186.406 5.10156 186.406C3.95312 186.406 3.32031 185.547 3.32031 183.969V183.391C3.32031 181.812 3.95312 180.953 5.10156 180.953C6.03125 180.953 6.60938 181.422 6.75 182.391H8.84375ZM8.84375 225.391C8.64062 223.281 7.34375 222.172 5.11719 222.172C2.57812 222.172 1.17188 223.609 1.17188 226.227V227.133C1.17188 229.75 2.57812 231.188 5.11719 231.188C7.34375 231.188 8.65625 230.094 8.84375 228.039H6.75C6.60156 228.961 6.03906 229.406 5.10156 229.406C3.95312 229.406 3.32031 228.547 3.32031 226.969V226.391C3.32031 224.812 3.95312 223.953 5.10156 223.953C6.03125 223.953 6.60938 224.422 6.75 225.391H8.84375ZM8.84375 268.391C8.64062 266.281 7.34375 265.172 5.11719 265.172C2.57812 265.172 1.17188 266.609 1.17188 269.227V270.133C1.17188 272.75 2.57812 274.188 5.11719 274.188C7.34375 274.188 8.65625 273.094 8.84375 271.039H6.75C6.60156 271.961 6.03906 272.406 5.10156 272.406C3.95312 272.406 3.32031 271.547 3.32031 269.969V269.391C3.32031 267.812 3.95312 266.953 5.10156 266.953C6.03125 266.953 6.60938 267.422 6.75 268.391H8.84375Z",
  transform: "translate(179 65)",
  fill: "#79B8FF"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M6.57422 11H7.68164L4.56445 2.54492H3.52148L0.404297 11H1.51172L2.36133 8.58008H5.72461L6.57422 11ZM3.99609 3.91016H4.08984L5.41406 7.68359H2.67188L3.99609 3.91016ZM11.0215 11.1113C11.8945 11.1113 12.6445 10.6953 13.043 9.99219H13.1367V11H14.0977V2.17578H13.0898V5.67969H13.002C12.6445 4.98828 11.9004 4.57227 11.0215 4.57227C9.41602 4.57227 8.36719 5.86133 8.36719 7.8418C8.36719 9.82812 9.4043 11.1113 11.0215 11.1113ZM11.2559 5.48047C12.3984 5.48047 13.1133 6.39453 13.1133 7.8418C13.1133 9.30078 12.4043 10.2031 11.2559 10.2031C10.1016 10.2031 9.41016 9.31836 9.41016 7.8418C9.41016 6.37109 10.1074 5.48047 11.2559 5.48047ZM18.3926 11.1113C19.2656 11.1113 20.0156 10.6953 20.4141 9.99219H20.5078V11H21.4688V2.17578H20.4609V5.67969H20.373C20.0156 4.98828 19.2715 4.57227 18.3926 4.57227C16.7871 4.57227 15.7383 5.86133 15.7383 7.8418C15.7383 9.82812 16.7754 11.1113 18.3926 11.1113ZM18.627 5.48047C19.7695 5.48047 20.4844 6.39453 20.4844 7.8418C20.4844 9.30078 19.7754 10.2031 18.627 10.2031C17.4727 10.2031 16.7812 9.31836 16.7812 7.8418C16.7812 6.37109 17.4785 5.48047 18.627 5.48047ZM28.7578 10.2266C28.0254 10.2266 27.4805 9.85156 27.4805 9.20703C27.4805 8.57422 27.9023 8.24023 28.8633 8.17578L30.5625 8.06445V8.64453C30.5625 9.54688 29.7949 10.2266 28.7578 10.2266ZM28.5703 11.1113C29.4141 11.1113 30.1055 10.7422 30.5156 10.0684H30.6094V11H31.5703V6.67578C31.5703 5.36328 30.709 4.57227 29.168 4.57227C27.8203 4.57227 26.8242 5.24023 26.6895 6.25391H27.709C27.8496 5.75586 28.377 5.46875 29.1328 5.46875C30.0762 5.46875 30.5625 5.89648 30.5625 6.67578V7.25L28.7402 7.36133C27.2695 7.44922 26.4375 8.09961 26.4375 9.23047C26.4375 10.3848 27.3457 11.1113 28.5703 11.1113ZM39.9609 11.1113C41.5605 11.1113 42.6094 9.81641 42.6094 7.8418C42.6094 5.85547 41.5664 4.57227 39.9609 4.57227C39.0938 4.57227 38.3262 5 37.9805 5.67969H37.8867V2.17578H36.8789V11H37.8398V9.99219H37.9336C38.332 10.6953 39.082 11.1113 39.9609 11.1113ZM39.7266 5.48047C40.8809 5.48047 41.5664 6.36523 41.5664 7.8418C41.5664 9.31836 40.8809 10.2031 39.7266 10.2031C38.5781 10.2031 37.8633 9.30078 37.8633 7.8418C37.8633 6.38281 38.5781 5.48047 39.7266 5.48047ZM46.7871 11.1113C48.5859 11.1113 49.6992 9.86914 49.6992 7.8418C49.6992 5.80859 48.5859 4.57227 46.7871 4.57227C44.9883 4.57227 43.875 5.80859 43.875 7.8418C43.875 9.86914 44.9883 11.1113 46.7871 11.1113ZM46.7871 10.2031C45.5918 10.2031 44.918 9.33594 44.918 7.8418C44.918 6.3418 45.5918 5.48047 46.7871 5.48047C47.9824 5.48047 48.6562 6.3418 48.6562 7.8418C48.6562 9.33594 47.9824 10.2031 46.7871 10.2031ZM51.2812 11H52.2891V7.08594C52.2891 6.19531 52.9863 5.55078 53.9473 5.55078C54.1465 5.55078 54.5098 5.58594 54.5918 5.60938V4.60156C54.4629 4.58398 54.252 4.57227 54.0879 4.57227C53.25 4.57227 52.5234 5.00586 52.3359 5.62109H52.2422V4.68359H51.2812V11ZM58.0137 11.1113C58.8867 11.1113 59.6367 10.6953 60.0352 9.99219H60.1289V11H61.0898V2.17578H60.082V5.67969H59.9941C59.6367 4.98828 58.8926 4.57227 58.0137 4.57227C56.4082 4.57227 55.3594 5.86133 55.3594 7.8418C55.3594 9.82812 56.3965 11.1113 58.0137 11.1113ZM58.248 5.48047C59.3906 5.48047 60.1055 6.39453 60.1055 7.8418C60.1055 9.30078 59.3965 10.2031 58.248 10.2031C57.0938 10.2031 56.4023 9.31836 56.4023 7.8418C56.4023 6.37109 57.0996 5.48047 58.248 5.48047ZM65.5664 5.46289C66.5684 5.46289 67.2363 6.20117 67.2598 7.32031H63.7793C63.8555 6.20117 64.5586 5.46289 65.5664 5.46289ZM67.2305 9.36523C66.9668 9.92188 66.416 10.2207 65.6016 10.2207C64.5293 10.2207 63.832 9.42969 63.7793 8.18164V8.13477H68.3203V7.74805C68.3203 5.78516 67.2832 4.57227 65.5781 4.57227C63.8438 4.57227 62.7305 5.86133 62.7305 7.84766C62.7305 9.8457 63.8262 11.1113 65.5781 11.1113C66.9609 11.1113 67.9336 10.4492 68.2383 9.36523H67.2305ZM69.9023 11H70.9102V7.08594C70.9102 6.19531 71.6074 5.55078 72.5684 5.55078C72.7676 5.55078 73.1309 5.58594 73.2129 5.60938V4.60156C73.084 4.58398 72.873 4.57227 72.709 4.57227C71.8711 4.57227 71.1445 5.00586 70.957 5.62109H70.8633V4.68359H69.9023V11ZM78.2812 3.04883V4.68359H77.2617V5.52734H78.2812V9.35938C78.2812 10.5664 78.8027 11.0469 80.1035 11.0469C80.3027 11.0469 80.4961 11.0234 80.6953 10.9883V10.1387C80.5078 10.1562 80.4082 10.1621 80.2266 10.1621C79.5703 10.1621 79.2891 9.8457 79.2891 9.10156V5.52734H80.6953V4.68359H79.2891V3.04883H78.2812ZM84.7207 11.1113C86.5195 11.1113 87.6328 9.86914 87.6328 7.8418C87.6328 5.80859 86.5195 4.57227 84.7207 4.57227C82.9219 4.57227 81.8086 5.80859 81.8086 7.8418C81.8086 9.86914 82.9219 11.1113 84.7207 11.1113ZM84.7207 10.2031C83.5254 10.2031 82.8516 9.33594 82.8516 7.8418C82.8516 6.3418 83.5254 5.48047 84.7207 5.48047C85.916 5.48047 86.5898 6.3418 86.5898 7.8418C86.5898 9.33594 85.916 10.2031 84.7207 10.2031ZM93.0234 3.04883V4.68359H92.0039V5.52734H93.0234V9.35938C93.0234 10.5664 93.5449 11.0469 94.8457 11.0469C95.0449 11.0469 95.2383 11.0234 95.4375 10.9883V10.1387C95.25 10.1562 95.1504 10.1621 94.9688 10.1621C94.3125 10.1621 94.0312 9.8457 94.0312 9.10156V5.52734H95.4375V4.68359H94.0312V3.04883H93.0234ZM97.0195 11H98.0273V7.26172C98.0273 6.19531 98.6484 5.48047 99.7793 5.48047C100.734 5.48047 101.238 6.03711 101.238 7.15625V11H102.246V6.91016C102.246 5.42773 101.402 4.57227 100.066 4.57227C99.0996 4.57227 98.4375 4.98242 98.1211 5.67969H98.0273V2.17578H97.0195V11ZM106.605 5.46289C107.607 5.46289 108.275 6.20117 108.299 7.32031H104.818C104.895 6.20117 105.598 5.46289 106.605 5.46289ZM108.27 9.36523C108.006 9.92188 107.455 10.2207 106.641 10.2207C105.568 10.2207 104.871 9.42969 104.818 8.18164V8.13477H109.359V7.74805C109.359 5.78516 108.322 4.57227 106.617 4.57227C104.883 4.57227 103.77 5.86133 103.77 7.84766C103.77 9.8457 104.865 11.1113 106.617 11.1113C108 11.1113 108.973 10.4492 109.277 9.36523H108.27ZM114.328 11H115.336V7.08594C115.336 6.19531 116.033 5.55078 116.994 5.55078C117.193 5.55078 117.557 5.58594 117.639 5.60938V4.60156C117.51 4.58398 117.299 4.57227 117.135 4.57227C116.297 4.57227 115.57 5.00586 115.383 5.62109H115.289V4.68359H114.328V11ZM118.922 11H119.93V4.68359H118.922V11ZM119.426 3.40039C119.812 3.40039 120.129 3.08398 120.129 2.69727C120.129 2.31055 119.812 1.99414 119.426 1.99414C119.039 1.99414 118.723 2.31055 118.723 2.69727C118.723 3.08398 119.039 3.40039 119.426 3.40039ZM124.406 10.0156C123.234 10.0156 122.578 9.125 122.578 7.74805C122.578 6.37109 123.234 5.48047 124.406 5.48047C125.572 5.48047 126.281 6.37109 126.281 7.74805C126.281 9.125 125.578 10.0156 124.406 10.0156ZM124.453 13.4258C126.176 13.4258 127.266 12.5234 127.266 11.1113V4.68359H126.305V5.68555H126.211C125.848 5.00586 125.068 4.57227 124.184 4.57227C122.561 4.57227 121.535 5.85547 121.535 7.74805C121.535 9.64062 122.549 10.9062 124.184 10.9062C125.051 10.9062 125.766 10.5137 126.164 9.81641H126.258V11.0586C126.258 11.9902 125.584 12.5469 124.453 12.5469C123.545 12.5469 122.982 12.2129 122.871 11.6973H121.805C121.957 12.7402 122.93 13.4258 124.453 13.4258ZM129.223 11H130.23V7.26172C130.23 6.19531 130.852 5.48047 131.982 5.48047C132.938 5.48047 133.441 6.03711 133.441 7.15625V11H134.449V6.91016C134.449 5.42773 133.605 4.57227 132.27 4.57227C131.303 4.57227 130.641 4.98242 130.324 5.67969H130.23V2.17578H129.223V11ZM136.711 3.04883V4.68359H135.691V5.52734H136.711V9.35938C136.711 10.5664 137.232 11.0469 138.533 11.0469C138.732 11.0469 138.926 11.0234 139.125 10.9883V10.1387C138.938 10.1562 138.838 10.1621 138.656 10.1621C138 10.1621 137.719 9.8457 137.719 9.10156V5.52734H139.125V4.68359H137.719V3.04883H136.711Z",
  transform: "translate(179 373)",
  fill: "#C8E1FF"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M159.27 11V2.54492H158.045L155.15 9.54102H155.057L152.162 2.54492H150.938V11H151.922V4.54297H151.992L154.658 10.9414H155.549L158.215 4.54297H158.285V11H159.27ZM163.893 11.1113C165.691 11.1113 166.805 9.86914 166.805 7.8418C166.805 5.80859 165.691 4.57227 163.893 4.57227C162.094 4.57227 160.98 5.80859 160.98 7.8418C160.98 9.86914 162.094 11.1113 163.893 11.1113ZM163.893 10.2031C162.697 10.2031 162.023 9.33594 162.023 7.8418C162.023 6.3418 162.697 5.48047 163.893 5.48047C165.088 5.48047 165.762 6.3418 165.762 7.8418C165.762 9.33594 165.088 10.2031 163.893 10.2031ZM168.387 11H169.395V7.08594C169.395 6.19531 170.092 5.55078 171.053 5.55078C171.252 5.55078 171.615 5.58594 171.697 5.60938V4.60156C171.568 4.58398 171.357 4.57227 171.193 4.57227C170.355 4.57227 169.629 5.00586 169.441 5.62109H169.348V4.68359H168.387V11ZM175.301 5.46289C176.303 5.46289 176.971 6.20117 176.994 7.32031H173.514C173.59 6.20117 174.293 5.46289 175.301 5.46289ZM176.965 9.36523C176.701 9.92188 176.15 10.2207 175.336 10.2207C174.264 10.2207 173.566 9.42969 173.514 8.18164V8.13477H178.055V7.74805C178.055 5.78516 177.018 4.57227 175.312 4.57227C173.578 4.57227 172.465 5.86133 172.465 7.84766C172.465 9.8457 173.561 11.1113 175.312 11.1113C176.695 11.1113 177.668 10.4492 177.973 9.36523H176.965ZM180.469 11.0586C180.891 11.0586 181.23 10.7129 181.23 10.2969C181.23 9.875 180.891 9.53516 180.469 9.53516C180.053 9.53516 179.707 9.875 179.707 10.2969C179.707 10.7129 180.053 11.0586 180.469 11.0586ZM184.031 11.0586C184.453 11.0586 184.793 10.7129 184.793 10.2969C184.793 9.875 184.453 9.53516 184.031 9.53516C183.615 9.53516 183.27 9.875 183.27 10.2969C183.27 10.7129 183.615 11.0586 184.031 11.0586ZM187.594 11.0586C188.016 11.0586 188.355 10.7129 188.355 10.2969C188.355 9.875 188.016 9.53516 187.594 9.53516C187.178 9.53516 186.832 9.875 186.832 10.2969C186.832 10.7129 187.178 11.0586 187.594 11.0586Z",
  transform: "translate(179 373)",
  fill: "#2188FF"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M43.3984 6.52344H42.0703V11.5156C42.0703 12.9609 41.1328 13.9375 39.7344 13.9375C38.4141 13.9375 37.7891 13.2188 37.7891 11.6875V6.52344H36.4609V12.0234C36.4609 14.0547 37.4609 15.1562 39.3047 15.1562C40.5938 15.1562 41.5625 14.5625 42.0156 13.5078H42.125V15H43.3984V6.52344ZM48.375 4.25V6.54688H46.1172V7.67969H48.375V12.4766C48.375 14.2422 49.3516 15.0391 51.4531 15.0391C51.8594 15.0391 52.8906 15 53.1016 14.9609V13.8359C52.875 13.8594 52.0234 13.8828 51.5469 13.8828C50.3516 13.8828 49.7031 13.3828 49.7031 12.4609V7.67969H53.125V6.54688H49.6875V4.25H48.375ZM59.8594 4.44531C60.4844 4.44531 60.9609 3.97656 60.9609 3.35156C60.9609 2.73438 60.4844 2.26562 59.8594 2.26562C59.2344 2.26562 58.7578 2.73438 58.7578 3.35156C58.7578 3.97656 59.2344 4.44531 59.8594 4.44531ZM63.4141 15V13.8984H60.6094V6.52344H56.4141V7.625H59.2969V13.8984H56.3906V15H63.4141ZM73.3047 15V13.8984H70.5078V3.19531H66.3047V4.29688H69.1797V13.8984H66.2812V15H73.3047ZM79.6406 4.44531C80.2656 4.44531 80.7422 3.97656 80.7422 3.35156C80.7422 2.73438 80.2656 2.26562 79.6406 2.26562C79.0156 2.26562 78.5391 2.73438 78.5391 3.35156C78.5391 3.97656 79.0156 4.44531 79.6406 4.44531ZM83.1953 15V13.8984H80.3906V6.52344H76.1953V7.625H79.0781V13.8984H76.1719V15H83.1953ZM87.9375 4.25V6.54688H85.6797V7.67969H87.9375V12.4766C87.9375 14.2422 88.9141 15.0391 91.0156 15.0391C91.4219 15.0391 92.4531 15 92.6641 14.9609V13.8359C92.4375 13.8594 91.5859 13.8828 91.1094 13.8828C89.9141 13.8828 89.2656 13.3828 89.2656 12.4609V7.67969H92.6875V6.54688H89.25V4.25H87.9375ZM99.4219 4.44531C100.047 4.44531 100.523 3.97656 100.523 3.35156C100.523 2.73438 100.047 2.26562 99.4219 2.26562C98.7969 2.26562 98.3203 2.73438 98.3203 3.35156C98.3203 3.97656 98.7969 4.44531 99.4219 4.44531ZM102.977 15V13.8984H100.172V6.52344H95.9766V7.625H98.8594V13.8984H95.9531V15H102.977ZM109.258 7.50781C110.625 7.50781 111.453 8.48438 111.453 10.1016H106.992C106.992 8.47656 107.844 7.50781 109.258 7.50781ZM111.453 12.8125C111.219 13.5547 110.43 14.0078 109.359 14.0078C107.914 14.0078 106.992 13.0078 106.992 11.4531V11.1094H112.766V10.2812C112.766 7.82812 111.469 6.36719 109.266 6.36719C107.109 6.36719 105.68 7.83594 105.68 10.0703V11.3438C105.68 13.7578 107.031 15.1562 109.359 15.1562C111.141 15.1562 112.484 14.2109 112.742 12.8125H111.453ZM115.969 8.8125C115.969 10.0156 116.727 10.7891 118.258 11.1406L119.516 11.4297C120.594 11.6719 121.008 12.0312 121.008 12.7031C121.008 13.5156 120.273 14.0391 119.117 14.0391C118.023 14.0391 117.273 13.5859 117.078 12.8047H115.727C115.875 14.2578 117.148 15.1562 119.07 15.1562C121.078 15.1562 122.383 14.1406 122.383 12.5781C122.383 11.3516 121.633 10.6328 119.984 10.2578L118.789 9.98438C117.727 9.75 117.289 9.38281 117.289 8.73438C117.289 7.96094 117.984 7.46094 119.062 7.46094C120.055 7.46094 120.766 7.91406 120.922 8.65625H122.203C122.047 7.24219 120.852 6.35938 119.086 6.35938C117.219 6.35938 115.969 7.34375 115.969 8.8125ZM43.3984 49.5234H42.0703V54.5156C42.0703 55.9609 41.1328 56.9375 39.7344 56.9375C38.4141 56.9375 37.7891 56.2188 37.7891 54.6875V49.5234H36.4609V55.0234C36.4609 57.0547 37.4609 58.1562 39.3047 58.1562C40.5938 58.1562 41.5625 57.5625 42.0156 56.5078H42.125V58H43.3984V49.5234ZM48.375 47.25V49.5469H46.1172V50.6797H48.375V55.4766C48.375 57.2422 49.3516 58.0391 51.4531 58.0391C51.8594 58.0391 52.8906 58 53.1016 57.9609V56.8359C52.875 56.8594 52.0234 56.8828 51.5469 56.8828C50.3516 56.8828 49.7031 56.3828 49.7031 55.4609V50.6797H53.125V49.5469H49.6875V47.25H48.375ZM59.8594 47.4453C60.4844 47.4453 60.9609 46.9766 60.9609 46.3516C60.9609 45.7344 60.4844 45.2656 59.8594 45.2656C59.2344 45.2656 58.7578 45.7344 58.7578 46.3516C58.7578 46.9766 59.2344 47.4453 59.8594 47.4453ZM63.4141 58V56.8984H60.6094V49.5234H56.4141V50.625H59.2969V56.8984H56.3906V58H63.4141ZM73.3047 58V56.8984H70.5078V46.1953H66.3047V47.2969H69.1797V56.8984H66.2812V58H73.3047ZM79.6406 47.4453C80.2656 47.4453 80.7422 46.9766 80.7422 46.3516C80.7422 45.7344 80.2656 45.2656 79.6406 45.2656C79.0156 45.2656 78.5391 45.7344 78.5391 46.3516C78.5391 46.9766 79.0156 47.4453 79.6406 47.4453ZM83.1953 58V56.8984H80.3906V49.5234H76.1953V50.625H79.0781V56.8984H76.1719V58H83.1953ZM87.9375 47.25V49.5469H85.6797V50.6797H87.9375V55.4766C87.9375 57.2422 88.9141 58.0391 91.0156 58.0391C91.4219 58.0391 92.4531 58 92.6641 57.9609V56.8359C92.4375 56.8594 91.5859 56.8828 91.1094 56.8828C89.9141 56.8828 89.2656 56.3828 89.2656 55.4609V50.6797H92.6875V49.5469H89.25V47.25H87.9375ZM99.4219 47.4453C100.047 47.4453 100.523 46.9766 100.523 46.3516C100.523 45.7344 100.047 45.2656 99.4219 45.2656C98.7969 45.2656 98.3203 45.7344 98.3203 46.3516C98.3203 46.9766 98.7969 47.4453 99.4219 47.4453ZM102.977 58V56.8984H100.172V49.5234H95.9766V50.625H98.8594V56.8984H95.9531V58H102.977ZM109.258 50.5078C110.625 50.5078 111.453 51.4844 111.453 53.1016H106.992C106.992 51.4766 107.844 50.5078 109.258 50.5078ZM111.453 55.8125C111.219 56.5547 110.43 57.0078 109.359 57.0078C107.914 57.0078 106.992 56.0078 106.992 54.4531V54.1094H112.766V53.2812C112.766 50.8281 111.469 49.3672 109.266 49.3672C107.109 49.3672 105.68 50.8359 105.68 53.0703V54.3438C105.68 56.7578 107.031 58.1562 109.359 58.1562C111.141 58.1562 112.484 57.2109 112.742 55.8125H111.453ZM115.969 51.8125C115.969 53.0156 116.727 53.7891 118.258 54.1406L119.516 54.4297C120.594 54.6719 121.008 55.0312 121.008 55.7031C121.008 56.5156 120.273 57.0391 119.117 57.0391C118.023 57.0391 117.273 56.5859 117.078 55.8047H115.727C115.875 57.2578 117.148 58.1562 119.07 58.1562C121.078 58.1562 122.383 57.1406 122.383 55.5781C122.383 54.3516 121.633 53.6328 119.984 53.2578L118.789 52.9844C117.727 52.75 117.289 52.3828 117.289 51.7344C117.289 50.9609 117.984 50.4609 119.062 50.4609C120.055 50.4609 120.766 50.9141 120.922 51.6562H122.203C122.047 50.2422 120.852 49.3594 119.086 49.3594C117.219 49.3594 115.969 50.3438 115.969 51.8125ZM43.3984 92.5234H42.0703V97.5156C42.0703 98.9609 41.1328 99.9375 39.7344 99.9375C38.4141 99.9375 37.7891 99.2188 37.7891 97.6875V92.5234H36.4609V98.0234C36.4609 100.055 37.4609 101.156 39.3047 101.156C40.5938 101.156 41.5625 100.562 42.0156 99.5078H42.125V101H43.3984V92.5234ZM48.375 90.25V92.5469H46.1172V93.6797H48.375V98.4766C48.375 100.242 49.3516 101.039 51.4531 101.039C51.8594 101.039 52.8906 101 53.1016 100.961V99.8359C52.875 99.8594 52.0234 99.8828 51.5469 99.8828C50.3516 99.8828 49.7031 99.3828 49.7031 98.4609V93.6797H53.125V92.5469H49.6875V90.25H48.375ZM59.8594 90.4453C60.4844 90.4453 60.9609 89.9766 60.9609 89.3516C60.9609 88.7344 60.4844 88.2656 59.8594 88.2656C59.2344 88.2656 58.7578 88.7344 58.7578 89.3516C58.7578 89.9766 59.2344 90.4453 59.8594 90.4453ZM63.4141 101V99.8984H60.6094V92.5234H56.4141V93.625H59.2969V99.8984H56.3906V101H63.4141ZM73.3047 101V99.8984H70.5078V89.1953H66.3047V90.2969H69.1797V99.8984H66.2812V101H73.3047ZM79.6406 90.4453C80.2656 90.4453 80.7422 89.9766 80.7422 89.3516C80.7422 88.7344 80.2656 88.2656 79.6406 88.2656C79.0156 88.2656 78.5391 88.7344 78.5391 89.3516C78.5391 89.9766 79.0156 90.4453 79.6406 90.4453ZM83.1953 101V99.8984H80.3906V92.5234H76.1953V93.625H79.0781V99.8984H76.1719V101H83.1953ZM87.9375 90.25V92.5469H85.6797V93.6797H87.9375V98.4766C87.9375 100.242 88.9141 101.039 91.0156 101.039C91.4219 101.039 92.4531 101 92.6641 100.961V99.8359C92.4375 99.8594 91.5859 99.8828 91.1094 99.8828C89.9141 99.8828 89.2656 99.3828 89.2656 98.4609V93.6797H92.6875V92.5469H89.25V90.25H87.9375ZM99.4219 90.4453C100.047 90.4453 100.523 89.9766 100.523 89.3516C100.523 88.7344 100.047 88.2656 99.4219 88.2656C98.7969 88.2656 98.3203 88.7344 98.3203 89.3516C98.3203 89.9766 98.7969 90.4453 99.4219 90.4453ZM102.977 101V99.8984H100.172V92.5234H95.9766V93.625H98.8594V99.8984H95.9531V101H102.977ZM109.258 93.5078C110.625 93.5078 111.453 94.4844 111.453 96.1016H106.992C106.992 94.4766 107.844 93.5078 109.258 93.5078ZM111.453 98.8125C111.219 99.5547 110.43 100.008 109.359 100.008C107.914 100.008 106.992 99.0078 106.992 97.4531V97.1094H112.766V96.2812C112.766 93.8281 111.469 92.3672 109.266 92.3672C107.109 92.3672 105.68 93.8359 105.68 96.0703V97.3438C105.68 99.7578 107.031 101.156 109.359 101.156C111.141 101.156 112.484 100.211 112.742 98.8125H111.453ZM115.969 94.8125C115.969 96.0156 116.727 96.7891 118.258 97.1406L119.516 97.4297C120.594 97.6719 121.008 98.0312 121.008 98.7031C121.008 99.5156 120.273 100.039 119.117 100.039C118.023 100.039 117.273 99.5859 117.078 98.8047H115.727C115.875 100.258 117.148 101.156 119.07 101.156C121.078 101.156 122.383 100.141 122.383 98.5781C122.383 97.3516 121.633 96.6328 119.984 96.2578L118.789 95.9844C117.727 95.75 117.289 95.3828 117.289 94.7344C117.289 93.9609 117.984 93.4609 119.062 93.4609C120.055 93.4609 120.766 93.9141 120.922 94.6562H122.203C122.047 93.2422 120.852 92.3594 119.086 92.3594C117.219 92.3594 115.969 93.3438 115.969 94.8125ZM43.3984 136.523H42.0703V141.516C42.0703 142.961 41.1328 143.938 39.7344 143.938C38.4141 143.938 37.7891 143.219 37.7891 141.688V136.523H36.4609V142.023C36.4609 144.055 37.4609 145.156 39.3047 145.156C40.5938 145.156 41.5625 144.562 42.0156 143.508H42.125V145H43.3984V136.523ZM48.375 134.25V136.547H46.1172V137.68H48.375V142.477C48.375 144.242 49.3516 145.039 51.4531 145.039C51.8594 145.039 52.8906 145 53.1016 144.961V143.836C52.875 143.859 52.0234 143.883 51.5469 143.883C50.3516 143.883 49.7031 143.383 49.7031 142.461V137.68H53.125V136.547H49.6875V134.25H48.375ZM59.8594 134.445C60.4844 134.445 60.9609 133.977 60.9609 133.352C60.9609 132.734 60.4844 132.266 59.8594 132.266C59.2344 132.266 58.7578 132.734 58.7578 133.352C58.7578 133.977 59.2344 134.445 59.8594 134.445ZM63.4141 145V143.898H60.6094V136.523H56.4141V137.625H59.2969V143.898H56.3906V145H63.4141ZM73.3047 145V143.898H70.5078V133.195H66.3047V134.297H69.1797V143.898H66.2812V145H73.3047ZM79.6406 134.445C80.2656 134.445 80.7422 133.977 80.7422 133.352C80.7422 132.734 80.2656 132.266 79.6406 132.266C79.0156 132.266 78.5391 132.734 78.5391 133.352C78.5391 133.977 79.0156 134.445 79.6406 134.445ZM83.1953 145V143.898H80.3906V136.523H76.1953V137.625H79.0781V143.898H76.1719V145H83.1953ZM87.9375 134.25V136.547H85.6797V137.68H87.9375V142.477C87.9375 144.242 88.9141 145.039 91.0156 145.039C91.4219 145.039 92.4531 145 92.6641 144.961V143.836C92.4375 143.859 91.5859 143.883 91.1094 143.883C89.9141 143.883 89.2656 143.383 89.2656 142.461V137.68H92.6875V136.547H89.25V134.25H87.9375ZM99.4219 134.445C100.047 134.445 100.523 133.977 100.523 133.352C100.523 132.734 100.047 132.266 99.4219 132.266C98.7969 132.266 98.3203 132.734 98.3203 133.352C98.3203 133.977 98.7969 134.445 99.4219 134.445ZM102.977 145V143.898H100.172V136.523H95.9766V137.625H98.8594V143.898H95.9531V145H102.977ZM109.258 137.508C110.625 137.508 111.453 138.484 111.453 140.102H106.992C106.992 138.477 107.844 137.508 109.258 137.508ZM111.453 142.812C111.219 143.555 110.43 144.008 109.359 144.008C107.914 144.008 106.992 143.008 106.992 141.453V141.109H112.766V140.281C112.766 137.828 111.469 136.367 109.266 136.367C107.109 136.367 105.68 137.836 105.68 140.07V141.344C105.68 143.758 107.031 145.156 109.359 145.156C111.141 145.156 112.484 144.211 112.742 142.812H111.453ZM115.969 138.812C115.969 140.016 116.727 140.789 118.258 141.141L119.516 141.43C120.594 141.672 121.008 142.031 121.008 142.703C121.008 143.516 120.273 144.039 119.117 144.039C118.023 144.039 117.273 143.586 117.078 142.805H115.727C115.875 144.258 117.148 145.156 119.07 145.156C121.078 145.156 122.383 144.141 122.383 142.578C122.383 141.352 121.633 140.633 119.984 140.258L118.789 139.984C117.727 139.75 117.289 139.383 117.289 138.734C117.289 137.961 117.984 137.461 119.062 137.461C120.055 137.461 120.766 137.914 120.922 138.656H122.203C122.047 137.242 120.852 136.359 119.086 136.359C117.219 136.359 115.969 137.344 115.969 138.812ZM43.3984 179.523H42.0703V184.516C42.0703 185.961 41.1328 186.938 39.7344 186.938C38.4141 186.938 37.7891 186.219 37.7891 184.688V179.523H36.4609V185.023C36.4609 187.055 37.4609 188.156 39.3047 188.156C40.5938 188.156 41.5625 187.562 42.0156 186.508H42.125V188H43.3984V179.523ZM48.375 177.25V179.547H46.1172V180.68H48.375V185.477C48.375 187.242 49.3516 188.039 51.4531 188.039C51.8594 188.039 52.8906 188 53.1016 187.961V186.836C52.875 186.859 52.0234 186.883 51.5469 186.883C50.3516 186.883 49.7031 186.383 49.7031 185.461V180.68H53.125V179.547H49.6875V177.25H48.375ZM59.8594 177.445C60.4844 177.445 60.9609 176.977 60.9609 176.352C60.9609 175.734 60.4844 175.266 59.8594 175.266C59.2344 175.266 58.7578 175.734 58.7578 176.352C58.7578 176.977 59.2344 177.445 59.8594 177.445ZM63.4141 188V186.898H60.6094V179.523H56.4141V180.625H59.2969V186.898H56.3906V188H63.4141ZM73.3047 188V186.898H70.5078V176.195H66.3047V177.297H69.1797V186.898H66.2812V188H73.3047ZM79.6406 177.445C80.2656 177.445 80.7422 176.977 80.7422 176.352C80.7422 175.734 80.2656 175.266 79.6406 175.266C79.0156 175.266 78.5391 175.734 78.5391 176.352C78.5391 176.977 79.0156 177.445 79.6406 177.445ZM83.1953 188V186.898H80.3906V179.523H76.1953V180.625H79.0781V186.898H76.1719V188H83.1953ZM87.9375 177.25V179.547H85.6797V180.68H87.9375V185.477C87.9375 187.242 88.9141 188.039 91.0156 188.039C91.4219 188.039 92.4531 188 92.6641 187.961V186.836C92.4375 186.859 91.5859 186.883 91.1094 186.883C89.9141 186.883 89.2656 186.383 89.2656 185.461V180.68H92.6875V179.547H89.25V177.25H87.9375ZM99.4219 177.445C100.047 177.445 100.523 176.977 100.523 176.352C100.523 175.734 100.047 175.266 99.4219 175.266C98.7969 175.266 98.3203 175.734 98.3203 176.352C98.3203 176.977 98.7969 177.445 99.4219 177.445ZM102.977 188V186.898H100.172V179.523H95.9766V180.625H98.8594V186.898H95.9531V188H102.977ZM109.258 180.508C110.625 180.508 111.453 181.484 111.453 183.102H106.992C106.992 181.477 107.844 180.508 109.258 180.508ZM111.453 185.812C111.219 186.555 110.43 187.008 109.359 187.008C107.914 187.008 106.992 186.008 106.992 184.453V184.109H112.766V183.281C112.766 180.828 111.469 179.367 109.266 179.367C107.109 179.367 105.68 180.836 105.68 183.07V184.344C105.68 186.758 107.031 188.156 109.359 188.156C111.141 188.156 112.484 187.211 112.742 185.812H111.453ZM115.969 181.812C115.969 183.016 116.727 183.789 118.258 184.141L119.516 184.43C120.594 184.672 121.008 185.031 121.008 185.703C121.008 186.516 120.273 187.039 119.117 187.039C118.023 187.039 117.273 186.586 117.078 185.805H115.727C115.875 187.258 117.148 188.156 119.07 188.156C121.078 188.156 122.383 187.141 122.383 185.578C122.383 184.352 121.633 183.633 119.984 183.258L118.789 182.984C117.727 182.75 117.289 182.383 117.289 181.734C117.289 180.961 117.984 180.461 119.062 180.461C120.055 180.461 120.766 180.914 120.922 181.656H122.203C122.047 180.242 120.852 179.359 119.086 179.359C117.219 179.359 115.969 180.344 115.969 181.812ZM43.3984 222.523H42.0703V227.516C42.0703 228.961 41.1328 229.938 39.7344 229.938C38.4141 229.938 37.7891 229.219 37.7891 227.688V222.523H36.4609V228.023C36.4609 230.055 37.4609 231.156 39.3047 231.156C40.5938 231.156 41.5625 230.562 42.0156 229.508H42.125V231H43.3984V222.523ZM48.375 220.25V222.547H46.1172V223.68H48.375V228.477C48.375 230.242 49.3516 231.039 51.4531 231.039C51.8594 231.039 52.8906 231 53.1016 230.961V229.836C52.875 229.859 52.0234 229.883 51.5469 229.883C50.3516 229.883 49.7031 229.383 49.7031 228.461V223.68H53.125V222.547H49.6875V220.25H48.375ZM59.8594 220.445C60.4844 220.445 60.9609 219.977 60.9609 219.352C60.9609 218.734 60.4844 218.266 59.8594 218.266C59.2344 218.266 58.7578 218.734 58.7578 219.352C58.7578 219.977 59.2344 220.445 59.8594 220.445ZM63.4141 231V229.898H60.6094V222.523H56.4141V223.625H59.2969V229.898H56.3906V231H63.4141ZM73.3047 231V229.898H70.5078V219.195H66.3047V220.297H69.1797V229.898H66.2812V231H73.3047ZM79.6406 220.445C80.2656 220.445 80.7422 219.977 80.7422 219.352C80.7422 218.734 80.2656 218.266 79.6406 218.266C79.0156 218.266 78.5391 218.734 78.5391 219.352C78.5391 219.977 79.0156 220.445 79.6406 220.445ZM83.1953 231V229.898H80.3906V222.523H76.1953V223.625H79.0781V229.898H76.1719V231H83.1953ZM87.9375 220.25V222.547H85.6797V223.68H87.9375V228.477C87.9375 230.242 88.9141 231.039 91.0156 231.039C91.4219 231.039 92.4531 231 92.6641 230.961V229.836C92.4375 229.859 91.5859 229.883 91.1094 229.883C89.9141 229.883 89.2656 229.383 89.2656 228.461V223.68H92.6875V222.547H89.25V220.25H87.9375ZM99.4219 220.445C100.047 220.445 100.523 219.977 100.523 219.352C100.523 218.734 100.047 218.266 99.4219 218.266C98.7969 218.266 98.3203 218.734 98.3203 219.352C98.3203 219.977 98.7969 220.445 99.4219 220.445ZM102.977 231V229.898H100.172V222.523H95.9766V223.625H98.8594V229.898H95.9531V231H102.977ZM109.258 223.508C110.625 223.508 111.453 224.484 111.453 226.102H106.992C106.992 224.477 107.844 223.508 109.258 223.508ZM111.453 228.812C111.219 229.555 110.43 230.008 109.359 230.008C107.914 230.008 106.992 229.008 106.992 227.453V227.109H112.766V226.281C112.766 223.828 111.469 222.367 109.266 222.367C107.109 222.367 105.68 223.836 105.68 226.07V227.344C105.68 229.758 107.031 231.156 109.359 231.156C111.141 231.156 112.484 230.211 112.742 228.812H111.453ZM115.969 224.812C115.969 226.016 116.727 226.789 118.258 227.141L119.516 227.43C120.594 227.672 121.008 228.031 121.008 228.703C121.008 229.516 120.273 230.039 119.117 230.039C118.023 230.039 117.273 229.586 117.078 228.805H115.727C115.875 230.258 117.148 231.156 119.07 231.156C121.078 231.156 122.383 230.141 122.383 228.578C122.383 227.352 121.633 226.633 119.984 226.258L118.789 225.984C117.727 225.75 117.289 225.383 117.289 224.734C117.289 223.961 117.984 223.461 119.062 223.461C120.055 223.461 120.766 223.914 120.922 224.656H122.203C122.047 223.242 120.852 222.359 119.086 222.359C117.219 222.359 115.969 223.344 115.969 224.812ZM43.3984 265.523H42.0703V270.516C42.0703 271.961 41.1328 272.938 39.7344 272.938C38.4141 272.938 37.7891 272.219 37.7891 270.688V265.523H36.4609V271.023C36.4609 273.055 37.4609 274.156 39.3047 274.156C40.5938 274.156 41.5625 273.562 42.0156 272.508H42.125V274H43.3984V265.523ZM48.375 263.25V265.547H46.1172V266.68H48.375V271.477C48.375 273.242 49.3516 274.039 51.4531 274.039C51.8594 274.039 52.8906 274 53.1016 273.961V272.836C52.875 272.859 52.0234 272.883 51.5469 272.883C50.3516 272.883 49.7031 272.383 49.7031 271.461V266.68H53.125V265.547H49.6875V263.25H48.375ZM59.8594 263.445C60.4844 263.445 60.9609 262.977 60.9609 262.352C60.9609 261.734 60.4844 261.266 59.8594 261.266C59.2344 261.266 58.7578 261.734 58.7578 262.352C58.7578 262.977 59.2344 263.445 59.8594 263.445ZM63.4141 274V272.898H60.6094V265.523H56.4141V266.625H59.2969V272.898H56.3906V274H63.4141ZM73.3047 274V272.898H70.5078V262.195H66.3047V263.297H69.1797V272.898H66.2812V274H73.3047ZM79.6406 263.445C80.2656 263.445 80.7422 262.977 80.7422 262.352C80.7422 261.734 80.2656 261.266 79.6406 261.266C79.0156 261.266 78.5391 261.734 78.5391 262.352C78.5391 262.977 79.0156 263.445 79.6406 263.445ZM83.1953 274V272.898H80.3906V265.523H76.1953V266.625H79.0781V272.898H76.1719V274H83.1953ZM87.9375 263.25V265.547H85.6797V266.68H87.9375V271.477C87.9375 273.242 88.9141 274.039 91.0156 274.039C91.4219 274.039 92.4531 274 92.6641 273.961V272.836C92.4375 272.859 91.5859 272.883 91.1094 272.883C89.9141 272.883 89.2656 272.383 89.2656 271.461V266.68H92.6875V265.547H89.25V263.25H87.9375ZM99.4219 263.445C100.047 263.445 100.523 262.977 100.523 262.352C100.523 261.734 100.047 261.266 99.4219 261.266C98.7969 261.266 98.3203 261.734 98.3203 262.352C98.3203 262.977 98.7969 263.445 99.4219 263.445ZM102.977 274V272.898H100.172V265.523H95.9766V266.625H98.8594V272.898H95.9531V274H102.977ZM109.258 266.508C110.625 266.508 111.453 267.484 111.453 269.102H106.992C106.992 267.477 107.844 266.508 109.258 266.508ZM111.453 271.812C111.219 272.555 110.43 273.008 109.359 273.008C107.914 273.008 106.992 272.008 106.992 270.453V270.109H112.766V269.281C112.766 266.828 111.469 265.367 109.266 265.367C107.109 265.367 105.68 266.836 105.68 269.07V270.344C105.68 272.758 107.031 274.156 109.359 274.156C111.141 274.156 112.484 273.211 112.742 271.812H111.453ZM115.969 267.812C115.969 269.016 116.727 269.789 118.258 270.141L119.516 270.43C120.594 270.672 121.008 271.031 121.008 271.703C121.008 272.516 120.273 273.039 119.117 273.039C118.023 273.039 117.273 272.586 117.078 271.805H115.727C115.875 273.258 117.148 274.156 119.07 274.156C121.078 274.156 122.383 273.141 122.383 271.578C122.383 270.352 121.633 269.633 119.984 269.258L118.789 268.984C117.727 268.75 117.289 268.383 117.289 267.734C117.289 266.961 117.984 266.461 119.062 266.461C120.055 266.461 120.766 266.914 120.922 267.656H122.203C122.047 266.242 120.852 265.359 119.086 265.359C117.219 265.359 115.969 266.344 115.969 267.812Z",
  transform: "translate(366 65)",
  fill: "#79B8FF"
}));

var _ref7 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  id: "filter0_d",
  x: 160,
  y: 46,
  width: 362,
  height: 364,
  filterUnits: "userSpaceOnUse"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feDropShadow", {
  dy: 4,
  stdDeviation: 4,
  floodOpacity: 0.3
})));

var SvgComponent = function SvgComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 540,
    height: 420,
    viewBox: "0 0 540 420",
    fill: "none"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

/***/ }),

/***/ "./src/svg/Css.svg":
/*!*************************!*\
  !*** ./src/svg/Css.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M8.30469 6.95312V5.46094L1.58594 9.42188V10.5781L8.30469 14.5391V13.0469L2.92969 10.0703V9.92969L8.30469 6.95312ZM12.3984 10.1406C12.3984 8.57812 13.2891 7.57812 14.6953 7.57812C16.0859 7.57812 16.9766 8.57812 16.9766 10.1406V11.3594C16.9766 12.9297 16.0859 13.9297 14.6953 13.9297C13.2891 13.9297 12.3984 12.9219 12.3984 11.3594V10.1406ZM16.9922 13.7031V15H18.2969V3.19531H16.9453V7.83594H16.8047C16.4297 6.90625 15.5312 6.38281 14.3047 6.38281C12.3438 6.38281 11.0625 7.79688 11.0625 9.96875V11.5469C11.0625 13.7266 12.3438 15.1406 14.3047 15.1406C15.5156 15.1406 16.4062 14.6406 16.8438 13.7031H16.9922ZM24.875 4.44531C25.5 4.44531 25.9766 3.97656 25.9766 3.35156C25.9766 2.73438 25.5 2.26562 24.875 2.26562C24.25 2.26562 23.7734 2.73438 23.7734 3.35156C23.7734 3.97656 24.25 4.44531 24.875 4.44531ZM28.4297 15V13.8984H25.625V6.52344H21.4297V7.625H24.3125V13.8984H21.4062V15H28.4297ZM30.7891 6.52344L33.8906 15H35.3516L38.4453 6.52344H37.0312L34.6797 13.5781H34.5781L32.2109 6.52344H30.7891ZM57.9297 9.16406C57.7109 7.42188 56.4297 6.35938 54.5547 6.35938C52.25 6.35938 50.9062 7.77344 50.9062 10.2031V11.3125C50.9062 13.7422 52.25 15.1562 54.5547 15.1562C56.4297 15.1562 57.7188 14.1016 57.9297 12.375H56.6172C56.4531 13.3438 55.625 13.9609 54.5312 13.9609C53.0547 13.9609 52.2344 12.9609 52.2344 11.1406V10.375C52.2344 8.55469 53.0547 7.54688 54.5312 7.54688C55.625 7.54688 56.4531 8.17188 56.6172 9.16406H57.9297ZM67.9922 15V13.8984H65.1953V3.19531H60.9922V4.29688H63.8672V13.8984H60.9688V15H67.9922ZM73.3203 15.1484C74.5547 15.1484 75.4766 14.6406 75.8828 13.7344H76.0156V15.0078H77.2812V9.20312C77.2812 7.4375 76.1406 6.42188 74.1484 6.42188C72.4141 6.42188 71.1016 7.35156 70.9453 8.71094H72.25C72.4688 7.98438 73.1562 7.57031 74.1328 7.57031C75.3125 7.57031 75.9609 8.15625 75.9609 9.21875V9.98438L73.6328 10.1016C71.7031 10.2031 70.625 11.0938 70.625 12.5938C70.625 14.1328 71.7031 15.1484 73.3203 15.1484ZM73.7031 13.9844C72.6328 13.9844 71.9688 13.4375 71.9688 12.5469C71.9688 11.6641 72.5938 11.1562 73.7812 11.1016L75.9609 11V12C75.9609 13.1328 74.9844 13.9844 73.7031 13.9844ZM80.9844 8.8125C80.9844 10.0156 81.7422 10.7891 83.2734 11.1406L84.5312 11.4297C85.6094 11.6719 86.0234 12.0312 86.0234 12.7031C86.0234 13.5156 85.2891 14.0391 84.1328 14.0391C83.0391 14.0391 82.2891 13.5859 82.0938 12.8047H80.7422C80.8906 14.2578 82.1641 15.1562 84.0859 15.1562C86.0938 15.1562 87.3984 14.1406 87.3984 12.5781C87.3984 11.3516 86.6484 10.6328 85 10.2578L83.8047 9.98438C82.7422 9.75 82.3047 9.38281 82.3047 8.73438C82.3047 7.96094 83 7.46094 84.0781 7.46094C85.0703 7.46094 85.7812 7.91406 85.9375 8.65625H87.2188C87.0625 7.24219 85.8672 6.35938 84.1016 6.35938C82.2344 6.35938 80.9844 7.34375 80.9844 8.8125ZM90.875 8.8125C90.875 10.0156 91.6328 10.7891 93.1641 11.1406L94.4219 11.4297C95.5 11.6719 95.9141 12.0312 95.9141 12.7031C95.9141 13.5156 95.1797 14.0391 94.0234 14.0391C92.9297 14.0391 92.1797 13.5859 91.9844 12.8047H90.6328C90.7812 14.2578 92.0547 15.1562 93.9766 15.1562C95.9844 15.1562 97.2891 14.1406 97.2891 12.5781C97.2891 11.3516 96.5391 10.6328 94.8906 10.2578L93.6953 9.98438C92.6328 9.75 92.1953 9.38281 92.1953 8.73438C92.1953 7.96094 92.8906 7.46094 93.9688 7.46094C94.9609 7.46094 95.6719 7.91406 95.8281 8.65625H97.1094C96.9531 7.24219 95.7578 6.35938 93.9922 6.35938C92.125 6.35938 90.875 7.34375 90.875 8.8125ZM107.984 12.4297V11.1406H99.7188V12.4297H107.984ZM107.984 8.86719V7.57812H99.7188V8.86719H107.984ZM112.922 8.66406V3.72656H111.531V8.66406H112.922ZM115.977 8.66406V3.72656H114.57V8.66406H115.977ZM290.953 8.66406V3.72656H289.562V8.66406H290.953ZM294.008 8.66406V3.72656H292.602V8.66406H294.008ZM303.68 9.92969V10.0703L298.305 13.0469V14.5391L305.023 10.5781V9.42188L298.305 5.46094V6.95312L303.68 9.92969ZM28.0859 25.9531V24.4609L21.3672 28.4219V29.5781L28.0859 33.5391V32.0469L22.7109 29.0703V28.9297L28.0859 25.9531ZM32.1797 29.1406C32.1797 27.5781 33.0703 26.5781 34.4766 26.5781C35.8672 26.5781 36.7578 27.5781 36.7578 29.1406V30.3594C36.7578 31.9297 35.8672 32.9297 34.4766 32.9297C33.0703 32.9297 32.1797 31.9219 32.1797 30.3594V29.1406ZM36.7734 32.7031V34H38.0781V22.1953H36.7266V26.8359H36.5859C36.2109 25.9062 35.3125 25.3828 34.0859 25.3828C32.125 25.3828 30.8438 26.7969 30.8438 28.9688V30.5469C30.8438 32.7266 32.125 34.1406 34.0859 34.1406C35.2969 34.1406 36.1875 33.6406 36.625 32.7031H36.7734ZM44.6562 23.4453C45.2812 23.4453 45.7578 22.9766 45.7578 22.3516C45.7578 21.7344 45.2812 21.2656 44.6562 21.2656C44.0312 21.2656 43.5547 21.7344 43.5547 22.3516C43.5547 22.9766 44.0312 23.4453 44.6562 23.4453ZM48.2109 34V32.8984H45.4062V25.5234H41.2109V26.625H44.0938V32.8984H41.1875V34H48.2109ZM50.5703 25.5234L53.6719 34H55.1328L58.2266 25.5234H56.8125L54.4609 32.5781H54.3594L51.9922 25.5234H50.5703ZM77.7109 28.1641C77.4922 26.4219 76.2109 25.3594 74.3359 25.3594C72.0312 25.3594 70.6875 26.7734 70.6875 29.2031V30.3125C70.6875 32.7422 72.0312 34.1562 74.3359 34.1562C76.2109 34.1562 77.5 33.1016 77.7109 31.375H76.3984C76.2344 32.3438 75.4062 32.9609 74.3125 32.9609C72.8359 32.9609 72.0156 31.9609 72.0156 30.1406V29.375C72.0156 27.5547 72.8359 26.5469 74.3125 26.5469C75.4062 26.5469 76.2344 27.1719 76.3984 28.1641H77.7109ZM87.7734 34V32.8984H84.9766V22.1953H80.7734V23.2969H83.6484V32.8984H80.75V34H87.7734ZM93.1016 34.1484C94.3359 34.1484 95.2578 33.6406 95.6641 32.7344H95.7969V34.0078H97.0625V28.2031C97.0625 26.4375 95.9219 25.4219 93.9297 25.4219C92.1953 25.4219 90.8828 26.3516 90.7266 27.7109H92.0312C92.25 26.9844 92.9375 26.5703 93.9141 26.5703C95.0938 26.5703 95.7422 27.1562 95.7422 28.2188V28.9844L93.4141 29.1016C91.4844 29.2031 90.4062 30.0938 90.4062 31.5938C90.4062 33.1328 91.4844 34.1484 93.1016 34.1484ZM93.4844 32.9844C92.4141 32.9844 91.75 32.4375 91.75 31.5469C91.75 30.6641 92.375 30.1562 93.5625 30.1016L95.7422 30V31C95.7422 32.1328 94.7656 32.9844 93.4844 32.9844ZM100.766 27.8125C100.766 29.0156 101.523 29.7891 103.055 30.1406L104.312 30.4297C105.391 30.6719 105.805 31.0312 105.805 31.7031C105.805 32.5156 105.07 33.0391 103.914 33.0391C102.82 33.0391 102.07 32.5859 101.875 31.8047H100.523C100.672 33.2578 101.945 34.1562 103.867 34.1562C105.875 34.1562 107.18 33.1406 107.18 31.5781C107.18 30.3516 106.43 29.6328 104.781 29.2578L103.586 28.9844C102.523 28.75 102.086 28.3828 102.086 27.7344C102.086 26.9609 102.781 26.4609 103.859 26.4609C104.852 26.4609 105.562 26.9141 105.719 27.6562H107C106.844 26.2422 105.648 25.3594 103.883 25.3594C102.016 25.3594 100.766 26.3438 100.766 27.8125ZM110.656 27.8125C110.656 29.0156 111.414 29.7891 112.945 30.1406L114.203 30.4297C115.281 30.6719 115.695 31.0312 115.695 31.7031C115.695 32.5156 114.961 33.0391 113.805 33.0391C112.711 33.0391 111.961 32.5859 111.766 31.8047H110.414C110.562 33.2578 111.836 34.1562 113.758 34.1562C115.766 34.1562 117.07 33.1406 117.07 31.5781C117.07 30.3516 116.32 29.6328 114.672 29.2578L113.477 28.9844C112.414 28.75 111.977 28.3828 111.977 27.7344C111.977 26.9609 112.672 26.4609 113.75 26.4609C114.742 26.4609 115.453 26.9141 115.609 27.6562H116.891C116.734 26.2422 115.539 25.3594 113.773 25.3594C111.906 25.3594 110.656 26.3438 110.656 27.8125ZM127.766 31.4297V30.1406H119.5V31.4297H127.766ZM127.766 27.8672V26.5781H119.5V27.8672H127.766ZM132.703 27.6641V22.7266H131.312V27.6641H132.703ZM135.758 27.6641V22.7266H134.352V27.6641H135.758ZM241.5 27.6641V22.7266H240.109V27.6641H241.5ZM244.555 27.6641V22.7266H243.148V27.6641H244.555ZM254.227 28.9297V29.0703L248.852 32.0469V33.5391L255.57 29.5781V28.4219L248.852 24.4609V25.9531L254.227 28.9297ZM47.8672 44.9531V43.4609L41.1484 47.4219V48.5781L47.8672 52.5391V51.0469L42.4922 48.0703V47.9297L47.8672 44.9531ZM50.9219 53H52.25V48.0156C52.25 46.5703 53.1953 45.5938 54.5938 45.5938C55.9219 45.5938 56.5469 46.3203 56.5469 47.8438V53H57.875V47.5078C57.875 45.4844 56.875 44.375 55.0312 44.375C53.7344 44.375 52.7578 44.9688 52.3125 46.0234H52.2031V41.1953H50.9219V53ZM62.9141 47.7734H64.2031C65.7656 47.7734 66.7578 48.6094 66.7578 49.9219C66.7578 51.1953 65.7969 51.9922 64.25 51.9922C62.8438 51.9922 61.8438 51.2109 61.7188 50.0078H60.4141C60.5156 51.9531 62.0625 53.2344 64.2891 53.2344C66.5391 53.2344 68.1484 51.8672 68.1484 49.9531C68.1484 48.4141 67.2578 47.3594 65.7578 47.1641V47.0391C66.9688 46.7422 67.6797 45.7734 67.6797 44.4141C67.6797 42.7031 66.2422 41.4922 64.2266 41.4922C62.1406 41.4922 60.7656 42.7031 60.6328 44.6562H61.9531C62.0625 43.4453 62.9062 42.7031 64.1719 42.7031C65.4453 42.7031 66.2891 43.4609 66.2891 44.6094C66.2891 45.7891 65.4062 46.6172 64.1406 46.6172H62.9141V47.7734ZM87.6016 47.1641C87.3828 45.4219 86.1016 44.3594 84.2266 44.3594C81.9219 44.3594 80.5781 45.7734 80.5781 48.2031V49.3125C80.5781 51.7422 81.9219 53.1562 84.2266 53.1562C86.1016 53.1562 87.3906 52.1016 87.6016 50.375H86.2891C86.125 51.3438 85.2969 51.9609 84.2031 51.9609C82.7266 51.9609 81.9062 50.9609 81.9062 49.1406V48.375C81.9062 46.5547 82.7266 45.5469 84.2031 45.5469C85.2969 45.5469 86.125 46.1719 86.2891 47.1641H87.6016ZM97.6641 53V51.8984H94.8672V41.1953H90.6641V42.2969H93.5391V51.8984H90.6406V53H97.6641ZM102.992 53.1484C104.227 53.1484 105.148 52.6406 105.555 51.7344H105.688V53.0078H106.953V47.2031C106.953 45.4375 105.812 44.4219 103.82 44.4219C102.086 44.4219 100.773 45.3516 100.617 46.7109H101.922C102.141 45.9844 102.828 45.5703 103.805 45.5703C104.984 45.5703 105.633 46.1562 105.633 47.2188V47.9844L103.305 48.1016C101.375 48.2031 100.297 49.0938 100.297 50.5938C100.297 52.1328 101.375 53.1484 102.992 53.1484ZM103.375 51.9844C102.305 51.9844 101.641 51.4375 101.641 50.5469C101.641 49.6641 102.266 49.1562 103.453 49.1016L105.633 49V50C105.633 51.1328 104.656 51.9844 103.375 51.9844ZM110.656 46.8125C110.656 48.0156 111.414 48.7891 112.945 49.1406L114.203 49.4297C115.281 49.6719 115.695 50.0312 115.695 50.7031C115.695 51.5156 114.961 52.0391 113.805 52.0391C112.711 52.0391 111.961 51.5859 111.766 50.8047H110.414C110.562 52.2578 111.836 53.1562 113.758 53.1562C115.766 53.1562 117.07 52.1406 117.07 50.5781C117.07 49.3516 116.32 48.6328 114.672 48.2578L113.477 47.9844C112.414 47.75 111.977 47.3828 111.977 46.7344C111.977 45.9609 112.672 45.4609 113.75 45.4609C114.742 45.4609 115.453 45.9141 115.609 46.6562H116.891C116.734 45.2422 115.539 44.3594 113.773 44.3594C111.906 44.3594 110.656 45.3438 110.656 46.8125ZM120.547 46.8125C120.547 48.0156 121.305 48.7891 122.836 49.1406L124.094 49.4297C125.172 49.6719 125.586 50.0312 125.586 50.7031C125.586 51.5156 124.852 52.0391 123.695 52.0391C122.602 52.0391 121.852 51.5859 121.656 50.8047H120.305C120.453 52.2578 121.727 53.1562 123.648 53.1562C125.656 53.1562 126.961 52.1406 126.961 50.5781C126.961 49.3516 126.211 48.6328 124.562 48.2578L123.367 47.9844C122.305 47.75 121.867 47.3828 121.867 46.7344C121.867 45.9609 122.562 45.4609 123.641 45.4609C124.633 45.4609 125.344 45.9141 125.5 46.6562H126.781C126.625 45.2422 125.43 44.3594 123.664 44.3594C121.797 44.3594 120.547 45.3438 120.547 46.8125ZM137.656 50.4297V49.1406H129.391V50.4297H137.656ZM137.656 46.8672V45.5781H129.391V46.8672H137.656ZM142.594 46.6641V41.7266H141.203V46.6641H142.594ZM145.648 46.6641V41.7266H144.242V46.6641H145.648ZM281.062 46.6641V41.7266H279.672V46.6641H281.062ZM284.117 46.6641V41.7266H282.711V46.6641H284.117ZM293.789 47.9297V48.0703L288.414 51.0469V52.5391L295.133 48.5781V47.4219L288.414 43.4609V44.9531L293.789 47.9297ZM64.5 73C66.9219 73 68.3594 71.8281 68.3594 69.8516C68.3594 68.3438 67.3672 67.2422 65.8516 67.0938V66.9766C66.9844 66.7812 67.7891 65.7578 67.7891 64.5156C67.7891 62.7656 66.5391 61.7266 64.4609 61.7266H60.8125V73H64.5ZM62.1797 62.9141H64.1484C65.5859 62.9141 66.3984 63.5781 66.3984 64.7578C66.3984 65.9453 65.5391 66.5938 63.9375 66.5938H62.1797V62.9141ZM62.1797 71.8047V67.7422H64.1562C65.9844 67.7422 66.9297 68.4297 66.9297 69.7578C66.9297 71.1016 65.9922 71.8047 64.2031 71.8047H62.1797ZM74.1797 73.1562C76.4219 73.1562 77.8516 71.6953 77.8516 69.4062V68.125C77.8516 65.8359 76.4219 64.375 74.1797 64.375C71.9375 64.375 70.5078 65.8359 70.5078 68.125V69.4062C70.5078 71.6953 71.9375 73.1562 74.1797 73.1562ZM74.1797 65.5469C75.6328 65.5469 76.5391 66.5781 76.5391 68.2422V69.2812C76.5391 70.9531 75.6328 71.9766 74.1797 71.9766C72.7266 71.9766 71.8203 70.9531 71.8203 69.2812V68.2422C71.8203 66.5781 72.7266 65.5469 74.1797 65.5469ZM84.1016 69.7344L86.2344 73H87.7734L84.8516 68.7031L87.75 64.5234H86.2578L84.1562 67.7344H84.0469L81.9375 64.5234H80.3672L83.2969 68.7578L80.3906 73H81.8594L84 69.7344H84.1016ZM102.406 62.25V64.5469H100.148V65.6797H102.406V70.4766C102.406 72.2422 103.383 73.0391 105.484 73.0391C105.891 73.0391 106.922 73 107.133 72.9609V71.8359C106.906 71.8594 106.055 71.8828 105.578 71.8828C104.383 71.8828 103.734 71.3828 103.734 70.4609V65.6797H107.156V64.5469H103.719V62.25H102.406ZM113.891 62.4453C114.516 62.4453 114.992 61.9766 114.992 61.3516C114.992 60.7344 114.516 60.2656 113.891 60.2656C113.266 60.2656 112.789 60.7344 112.789 61.3516C112.789 61.9766 113.266 62.4453 113.891 62.4453ZM117.445 73V71.8984H114.641V64.5234H110.445V65.625H113.328V71.8984H110.422V73H117.445ZM122.188 62.25V64.5469H119.93V65.6797H122.188V70.4766C122.188 72.2422 123.164 73.0391 125.266 73.0391C125.672 73.0391 126.703 73 126.914 72.9609V71.8359C126.688 71.8594 125.836 71.8828 125.359 71.8828C124.164 71.8828 123.516 71.3828 123.516 70.4609V65.6797H126.938V64.5469H123.5V62.25H122.188ZM137.227 73V71.8984H134.43V61.1953H130.227V62.2969H133.102V71.8984H130.203V73H137.227ZM143.508 65.5078C144.875 65.5078 145.703 66.4844 145.703 68.1016H141.242C141.242 66.4766 142.094 65.5078 143.508 65.5078ZM145.703 70.8125C145.469 71.5547 144.68 72.0078 143.609 72.0078C142.164 72.0078 141.242 71.0078 141.242 69.4531V69.1094H147.016V68.2812C147.016 65.8281 145.719 64.3672 143.516 64.3672C141.359 64.3672 139.93 65.8359 139.93 68.0703V69.3438C139.93 71.7578 141.281 73.1562 143.609 73.1562C145.391 73.1562 146.734 72.2109 146.992 70.8125H145.703ZM47.8672 83.9531V82.4609L41.1484 86.4219V87.5781L47.8672 91.5391V90.0469L42.4922 87.0703V86.9297L47.8672 83.9531ZM52.2969 93.0703L57.7969 79.6562H56.4922L51 93.0703H52.2969ZM60.8125 92H62.1406V87.0156C62.1406 85.5703 63.0859 84.5938 64.4844 84.5938C65.8125 84.5938 66.4375 85.3203 66.4375 86.8438V92H67.7656V86.5078C67.7656 84.4844 66.7656 83.375 64.9219 83.375C63.625 83.375 62.6484 83.9688 62.2031 85.0234H62.0938V80.1953H60.8125V92ZM72.8047 86.7734H74.0938C75.6562 86.7734 76.6484 87.6094 76.6484 88.9219C76.6484 90.1953 75.6875 90.9922 74.1406 90.9922C72.7344 90.9922 71.7344 90.2109 71.6094 89.0078H70.3047C70.4062 90.9531 71.9531 92.2344 74.1797 92.2344C76.4297 92.2344 78.0391 90.8672 78.0391 88.9531C78.0391 87.4141 77.1484 86.3594 75.6484 86.1641V86.0391C76.8594 85.7422 77.5703 84.7734 77.5703 83.4141C77.5703 81.7031 76.1328 80.4922 74.1172 80.4922C72.0312 80.4922 70.6562 81.7031 70.5234 83.6562H71.8438C71.9531 82.4453 72.7969 81.7031 74.0625 81.7031C75.3359 81.7031 76.1797 82.4609 76.1797 83.6094C76.1797 84.7891 75.2969 85.6172 74.0312 85.6172H72.8047V86.7734ZM86.0859 86.9297V87.0703L80.7109 90.0469V91.5391L87.4297 87.5781V86.4219L80.7109 82.4609V83.9531L86.0859 86.9297ZM28.0859 102.953V101.461L21.3672 105.422V106.578L28.0859 110.539V109.047L22.7109 106.07V105.93L28.0859 102.953ZM32.5156 112.07L38.0156 98.6562H36.7109L31.2188 112.07H32.5156ZM42.0703 106.141C42.0703 104.578 42.9609 103.578 44.3672 103.578C45.7578 103.578 46.6484 104.578 46.6484 106.141V107.359C46.6484 108.93 45.7578 109.93 44.3672 109.93C42.9609 109.93 42.0703 108.922 42.0703 107.359V106.141ZM46.6641 109.703V111H47.9688V99.1953H46.6172V103.836H46.4766C46.1016 102.906 45.2031 102.383 43.9766 102.383C42.0156 102.383 40.7344 103.797 40.7344 105.969V107.547C40.7344 109.727 42.0156 111.141 43.9766 111.141C45.1875 111.141 46.0781 110.641 46.5156 109.703H46.6641ZM54.5469 100.445C55.1719 100.445 55.6484 99.9766 55.6484 99.3516C55.6484 98.7344 55.1719 98.2656 54.5469 98.2656C53.9219 98.2656 53.4453 98.7344 53.4453 99.3516C53.4453 99.9766 53.9219 100.445 54.5469 100.445ZM58.1016 111V109.898H55.2969V102.523H51.1016V103.625H53.9844V109.898H51.0781V111H58.1016ZM60.4609 102.523L63.5625 111H65.0234L68.1172 102.523H66.7031L64.3516 109.578H64.25L61.8828 102.523H60.4609ZM76.1953 105.93V106.07L70.8203 109.047V110.539L77.5391 106.578V105.422L70.8203 101.461V102.953L76.1953 105.93ZM28.0859 121.953V120.461L21.3672 124.422V125.578L28.0859 129.539V128.047L22.7109 125.07V124.93L28.0859 121.953ZM32.1797 125.141C32.1797 123.578 33.0703 122.578 34.4766 122.578C35.8672 122.578 36.7578 123.578 36.7578 125.141V126.359C36.7578 127.93 35.8672 128.93 34.4766 128.93C33.0703 128.93 32.1797 127.922 32.1797 126.359V125.141ZM36.7734 128.703V130H38.0781V118.195H36.7266V122.836H36.5859C36.2109 121.906 35.3125 121.383 34.0859 121.383C32.125 121.383 30.8438 122.797 30.8438 124.969V126.547C30.8438 128.727 32.125 130.141 34.0859 130.141C35.2969 130.141 36.1875 129.641 36.625 128.703H36.7734ZM44.6562 119.445C45.2812 119.445 45.7578 118.977 45.7578 118.352C45.7578 117.734 45.2812 117.266 44.6562 117.266C44.0312 117.266 43.5547 117.734 43.5547 118.352C43.5547 118.977 44.0312 119.445 44.6562 119.445ZM48.2109 130V128.898H45.4062V121.523H41.2109V122.625H44.0938V128.898H41.1875V130H48.2109ZM50.5703 121.523L53.6719 130H55.1328L58.2266 121.523H56.8125L54.4609 128.578H54.3594L51.9922 121.523H50.5703ZM77.7109 124.164C77.4922 122.422 76.2109 121.359 74.3359 121.359C72.0312 121.359 70.6875 122.773 70.6875 125.203V126.312C70.6875 128.742 72.0312 130.156 74.3359 130.156C76.2109 130.156 77.5 129.102 77.7109 127.375H76.3984C76.2344 128.344 75.4062 128.961 74.3125 128.961C72.8359 128.961 72.0156 127.961 72.0156 126.141V125.375C72.0156 123.555 72.8359 122.547 74.3125 122.547C75.4062 122.547 76.2344 123.172 76.3984 124.164H77.7109ZM87.7734 130V128.898H84.9766V118.195H80.7734V119.297H83.6484V128.898H80.75V130H87.7734ZM93.1016 130.148C94.3359 130.148 95.2578 129.641 95.6641 128.734H95.7969V130.008H97.0625V124.203C97.0625 122.438 95.9219 121.422 93.9297 121.422C92.1953 121.422 90.8828 122.352 90.7266 123.711H92.0312C92.25 122.984 92.9375 122.57 93.9141 122.57C95.0938 122.57 95.7422 123.156 95.7422 124.219V124.984L93.4141 125.102C91.4844 125.203 90.4062 126.094 90.4062 127.594C90.4062 129.133 91.4844 130.148 93.1016 130.148ZM93.4844 128.984C92.4141 128.984 91.75 128.438 91.75 127.547C91.75 126.664 92.375 126.156 93.5625 126.102L95.7422 126V127C95.7422 128.133 94.7656 128.984 93.4844 128.984ZM100.766 123.812C100.766 125.016 101.523 125.789 103.055 126.141L104.312 126.43C105.391 126.672 105.805 127.031 105.805 127.703C105.805 128.516 105.07 129.039 103.914 129.039C102.82 129.039 102.07 128.586 101.875 127.805H100.523C100.672 129.258 101.945 130.156 103.867 130.156C105.875 130.156 107.18 129.141 107.18 127.578C107.18 126.352 106.43 125.633 104.781 125.258L103.586 124.984C102.523 124.75 102.086 124.383 102.086 123.734C102.086 122.961 102.781 122.461 103.859 122.461C104.852 122.461 105.562 122.914 105.719 123.656H107C106.844 122.242 105.648 121.359 103.883 121.359C102.016 121.359 100.766 122.344 100.766 123.812ZM110.656 123.812C110.656 125.016 111.414 125.789 112.945 126.141L114.203 126.43C115.281 126.672 115.695 127.031 115.695 127.703C115.695 128.516 114.961 129.039 113.805 129.039C112.711 129.039 111.961 128.586 111.766 127.805H110.414C110.562 129.258 111.836 130.156 113.758 130.156C115.766 130.156 117.07 129.141 117.07 127.578C117.07 126.352 116.32 125.633 114.672 125.258L113.477 124.984C112.414 124.75 111.977 124.383 111.977 123.734C111.977 122.961 112.672 122.461 113.75 122.461C114.742 122.461 115.453 122.914 115.609 123.656H116.891C116.734 122.242 115.539 121.359 113.773 121.359C111.906 121.359 110.656 122.344 110.656 123.812ZM127.766 127.43V126.141H119.5V127.43H127.766ZM127.766 123.867V122.578H119.5V123.867H127.766ZM132.703 123.664V118.727H131.312V123.664H132.703ZM135.758 123.664V118.727H134.352V123.664H135.758ZM221.719 123.664V118.727H220.328V123.664H221.719ZM224.773 123.664V118.727H223.367V123.664H224.773ZM234.445 124.93V125.07L229.07 128.047V129.539L235.789 125.578V124.422L229.07 120.461V121.953L234.445 124.93ZM44.7188 149C47.1406 149 48.5781 147.828 48.5781 145.852C48.5781 144.344 47.5859 143.242 46.0703 143.094V142.977C47.2031 142.781 48.0078 141.758 48.0078 140.516C48.0078 138.766 46.7578 137.727 44.6797 137.727H41.0312V149H44.7188ZM42.3984 138.914H44.3672C45.8047 138.914 46.6172 139.578 46.6172 140.758C46.6172 141.945 45.7578 142.594 44.1562 142.594H42.3984V138.914ZM42.3984 147.805V143.742H44.375C46.2031 143.742 47.1484 144.43 47.1484 145.758C47.1484 147.102 46.2109 147.805 44.4219 147.805H42.3984ZM54.3984 149.156C56.6406 149.156 58.0703 147.695 58.0703 145.406V144.125C58.0703 141.836 56.6406 140.375 54.3984 140.375C52.1562 140.375 50.7266 141.836 50.7266 144.125V145.406C50.7266 147.695 52.1562 149.156 54.3984 149.156ZM54.3984 141.547C55.8516 141.547 56.7578 142.578 56.7578 144.242V145.281C56.7578 146.953 55.8516 147.977 54.3984 147.977C52.9453 147.977 52.0391 146.953 52.0391 145.281V144.242C52.0391 142.578 52.9453 141.547 54.3984 141.547ZM64.3203 145.734L66.4531 149H67.9922L65.0703 144.703L67.9688 140.523H66.4766L64.375 143.734H64.2656L62.1562 140.523H60.5859L63.5156 144.758L60.6094 149H62.0781L64.2188 145.734H64.3203ZM84.6016 149.141C86.5625 149.141 87.8438 147.727 87.8438 145.547V143.969C87.8438 141.797 86.5625 140.383 84.6016 140.383C83.375 140.383 82.4766 140.906 82.1016 141.836H81.9609V137.195H80.6094V149H81.9141V147.703H82.0625C82.5 148.641 83.3906 149.141 84.6016 149.141ZM84.2109 147.93C82.8203 147.93 81.9297 146.93 81.9297 145.359V144.141C81.9297 142.578 82.8203 141.578 84.2109 141.578C85.6172 141.578 86.5078 142.578 86.5078 144.141V145.359C86.5078 146.922 85.6172 147.93 84.2109 147.93ZM93.9609 149.156C96.2031 149.156 97.6328 147.695 97.6328 145.406V144.125C97.6328 141.836 96.2031 140.375 93.9609 140.375C91.7188 140.375 90.2891 141.836 90.2891 144.125V145.406C90.2891 147.695 91.7188 149.156 93.9609 149.156ZM93.9609 141.547C95.4141 141.547 96.3203 142.578 96.3203 144.242V145.281C96.3203 146.953 95.4141 147.977 93.9609 147.977C92.5078 147.977 91.6016 146.953 91.6016 145.281V144.242C91.6016 142.578 92.5078 141.547 93.9609 141.547ZM101.414 144.141C101.414 142.578 102.305 141.578 103.711 141.578C105.102 141.578 105.992 142.578 105.992 144.141V145.359C105.992 146.93 105.102 147.93 103.711 147.93C102.305 147.93 101.414 146.922 101.414 145.359V144.141ZM106.008 147.703V149H107.312V137.195H105.961V141.836H105.82C105.445 140.906 104.547 140.383 103.32 140.383C101.359 140.383 100.078 141.797 100.078 143.969V145.547C100.078 147.727 101.359 149.141 103.32 149.141C104.531 149.141 105.422 148.641 105.859 147.703H106.008ZM111.367 152.016C112.938 152.016 113.648 151.398 114.391 149.312L117.586 140.523H116.172L113.805 147.617H113.703L111.328 140.523H109.883L113 149.055L112.852 149.516C112.5 150.5 112.062 150.859 111.266 150.859C111.141 150.859 110.898 150.852 110.797 150.828V151.992C110.914 152.008 111.172 152.016 111.367 152.016ZM28.0859 159.953V158.461L21.3672 162.422V163.578L28.0859 167.539V166.047L22.7109 163.07V162.93L28.0859 159.953ZM32.5156 169.07L38.0156 155.656H36.7109L31.2188 169.07H32.5156ZM42.0703 163.141C42.0703 161.578 42.9609 160.578 44.3672 160.578C45.7578 160.578 46.6484 161.578 46.6484 163.141V164.359C46.6484 165.93 45.7578 166.93 44.3672 166.93C42.9609 166.93 42.0703 165.922 42.0703 164.359V163.141ZM46.6641 166.703V168H47.9688V156.195H46.6172V160.836H46.4766C46.1016 159.906 45.2031 159.383 43.9766 159.383C42.0156 159.383 40.7344 160.797 40.7344 162.969V164.547C40.7344 166.727 42.0156 168.141 43.9766 168.141C45.1875 168.141 46.0781 167.641 46.5156 166.703H46.6641ZM54.5469 157.445C55.1719 157.445 55.6484 156.977 55.6484 156.352C55.6484 155.734 55.1719 155.266 54.5469 155.266C53.9219 155.266 53.4453 155.734 53.4453 156.352C53.4453 156.977 53.9219 157.445 54.5469 157.445ZM58.1016 168V166.898H55.2969V159.523H51.1016V160.625H53.9844V166.898H51.0781V168H58.1016ZM60.4609 159.523L63.5625 168H65.0234L68.1172 159.523H66.7031L64.3516 166.578H64.25L61.8828 159.523H60.4609ZM76.1953 162.93V163.07L70.8203 166.047V167.539L77.5391 163.578V162.422L70.8203 158.461V159.953L76.1953 162.93ZM8.30469 178.953V177.461L1.58594 181.422V182.578L8.30469 186.539V185.047L2.92969 182.07V181.93L8.30469 178.953ZM12.7344 188.07L18.2344 174.656H16.9297L11.4375 188.07H12.7344ZM22.2891 182.141C22.2891 180.578 23.1797 179.578 24.5859 179.578C25.9766 179.578 26.8672 180.578 26.8672 182.141V183.359C26.8672 184.93 25.9766 185.93 24.5859 185.93C23.1797 185.93 22.2891 184.922 22.2891 183.359V182.141ZM26.8828 185.703V187H28.1875V175.195H26.8359V179.836H26.6953C26.3203 178.906 25.4219 178.383 24.1953 178.383C22.2344 178.383 20.9531 179.797 20.9531 181.969V183.547C20.9531 185.727 22.2344 187.141 24.1953 187.141C25.4062 187.141 26.2969 186.641 26.7344 185.703H26.8828ZM34.7656 176.445C35.3906 176.445 35.8672 175.977 35.8672 175.352C35.8672 174.734 35.3906 174.266 34.7656 174.266C34.1406 174.266 33.6641 174.734 33.6641 175.352C33.6641 175.977 34.1406 176.445 34.7656 176.445ZM38.3203 187V185.898H35.5156V178.523H31.3203V179.625H34.2031V185.898H31.2969V187H38.3203ZM40.6797 178.523L43.7812 187H45.2422L48.3359 178.523H46.9219L44.5703 185.578H44.4688L42.1016 178.523H40.6797ZM56.4141 181.93V182.07L51.0391 185.047V186.539L57.7578 182.578V181.422L51.0391 177.461V178.953L56.4141 181.93Z",
  transform: "translate(-1 -2)",
  fill: "#C8E1FF"
});

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M123.844 15C126.266 15 127.703 13.8281 127.703 11.8516C127.703 10.3438 126.711 9.24219 125.195 9.09375V8.97656C126.328 8.78125 127.133 7.75781 127.133 6.51562C127.133 4.76562 125.883 3.72656 123.805 3.72656H120.156V15H123.844ZM121.523 4.91406H123.492C124.93 4.91406 125.742 5.57812 125.742 6.75781C125.742 7.94531 124.883 8.59375 123.281 8.59375H121.523V4.91406ZM121.523 13.8047V9.74219H123.5C125.328 9.74219 126.273 10.4297 126.273 11.7578C126.273 13.1016 125.336 13.8047 123.547 13.8047H121.523ZM133.523 15.1562C135.766 15.1562 137.195 13.6953 137.195 11.4062V10.125C137.195 7.83594 135.766 6.375 133.523 6.375C131.281 6.375 129.852 7.83594 129.852 10.125V11.4062C129.852 13.6953 131.281 15.1562 133.523 15.1562ZM133.523 7.54688C134.977 7.54688 135.883 8.57812 135.883 10.2422V11.2812C135.883 12.9531 134.977 13.9766 133.523 13.9766C132.07 13.9766 131.164 12.9531 131.164 11.2812V10.2422C131.164 8.57812 132.07 7.54688 133.523 7.54688ZM143.445 11.7344L145.578 15H147.117L144.195 10.7031L147.094 6.52344H145.602L143.5 9.73438H143.391L141.281 6.52344H139.711L142.641 10.7578L139.734 15H141.203L143.344 11.7344H143.445ZM163.406 15C165.828 15 167.266 13.8281 167.266 11.8516C167.266 10.3438 166.273 9.24219 164.758 9.09375V8.97656C165.891 8.78125 166.695 7.75781 166.695 6.51562C166.695 4.76562 165.445 3.72656 163.367 3.72656H159.719V15H163.406ZM161.086 4.91406H163.055C164.492 4.91406 165.305 5.57812 165.305 6.75781C165.305 7.94531 164.445 8.59375 162.844 8.59375H161.086V4.91406ZM161.086 13.8047V9.74219H163.062C164.891 9.74219 165.836 10.4297 165.836 11.7578C165.836 13.1016 164.898 13.8047 163.109 13.8047H161.086ZM173.086 15.1562C175.328 15.1562 176.758 13.6953 176.758 11.4062V10.125C176.758 7.83594 175.328 6.375 173.086 6.375C170.844 6.375 169.414 7.83594 169.414 10.125V11.4062C169.414 13.6953 170.844 15.1562 173.086 15.1562ZM173.086 7.54688C174.539 7.54688 175.445 8.57812 175.445 10.2422V11.2812C175.445 12.9531 174.539 13.9766 173.086 13.9766C171.633 13.9766 170.727 12.9531 170.727 11.2812V10.2422C170.727 8.57812 171.633 7.54688 173.086 7.54688ZM183.008 11.7344L185.141 15H186.68L183.758 10.7031L186.656 6.52344H185.164L183.062 9.73438H182.953L180.844 6.52344H179.273L182.203 10.7578L179.297 15H180.766L182.906 11.7344H183.008ZM197 10.6172V9.38281H188.734V10.6172H197ZM206.891 10.6172V9.38281H198.625V10.6172H206.891ZM209.562 8.8125C209.562 10.0156 210.32 10.7891 211.852 11.1406L213.109 11.4297C214.188 11.6719 214.602 12.0312 214.602 12.7031C214.602 13.5156 213.867 14.0391 212.711 14.0391C211.617 14.0391 210.867 13.5859 210.672 12.8047H209.32C209.469 14.2578 210.742 15.1562 212.664 15.1562C214.672 15.1562 215.977 14.1406 215.977 12.5781C215.977 11.3516 215.227 10.6328 213.578 10.2578L212.383 9.98438C211.32 9.75 210.883 9.38281 210.883 8.73438C210.883 7.96094 211.578 7.46094 212.656 7.46094C213.648 7.46094 214.359 7.91406 214.516 8.65625H215.797C215.641 7.24219 214.445 6.35938 212.68 6.35938C210.812 6.35938 209.562 7.34375 209.562 8.8125ZM223.07 6.38281C221.859 6.38281 220.977 6.88281 220.531 7.82031H220.391V6.52344H219.078V17.8594H220.43V13.6875H220.578C220.945 14.6172 221.844 15.1406 223.07 15.1406C225.031 15.1406 226.312 13.7266 226.312 11.5547V9.97656C226.312 7.79688 225.031 6.38281 223.07 6.38281ZM222.688 7.60156C224.086 7.60156 224.977 8.60156 224.977 10.1641V11.3828C224.977 12.9453 224.086 13.9531 222.688 13.9531C221.289 13.9531 220.398 12.9531 220.398 11.3828V10.1641C220.398 8.60156 221.289 7.60156 222.688 7.60156ZM231.57 15.1484C232.805 15.1484 233.727 14.6406 234.133 13.7344H234.266V15.0078H235.531V9.20312C235.531 7.4375 234.391 6.42188 232.398 6.42188C230.664 6.42188 229.352 7.35156 229.195 8.71094H230.5C230.719 7.98438 231.406 7.57031 232.383 7.57031C233.562 7.57031 234.211 8.15625 234.211 9.21875V9.98438L231.883 10.1016C229.953 10.2031 228.875 11.0938 228.875 12.5938C228.875 14.1328 229.953 15.1484 231.57 15.1484ZM231.953 13.9844C230.883 13.9844 230.219 13.4375 230.219 12.5469C230.219 11.6641 230.844 11.1562 232.031 11.1016L234.211 11V12C234.211 13.1328 233.234 13.9844 231.953 13.9844ZM245.852 9.16406C245.633 7.42188 244.352 6.35938 242.477 6.35938C240.172 6.35938 238.828 7.77344 238.828 10.2031V11.3125C238.828 13.7422 240.172 15.1562 242.477 15.1562C244.352 15.1562 245.641 14.1016 245.852 12.375H244.539C244.375 13.3438 243.547 13.9609 242.453 13.9609C240.977 13.9609 240.156 12.9609 240.156 11.1406V10.375C240.156 8.55469 240.977 7.54688 242.453 7.54688C243.547 7.54688 244.375 8.17188 244.539 9.16406H245.852ZM252.359 4.44531C252.984 4.44531 253.461 3.97656 253.461 3.35156C253.461 2.73438 252.984 2.26562 252.359 2.26562C251.734 2.26562 251.258 2.73438 251.258 3.35156C251.258 3.97656 251.734 4.44531 252.359 4.44531ZM255.914 15V13.8984H253.109V6.52344H248.914V7.625H251.797V13.8984H248.891V15H255.914ZM262.102 15.1562C264.344 15.1562 265.773 13.6953 265.773 11.4062V10.125C265.773 7.83594 264.344 6.375 262.102 6.375C259.859 6.375 258.43 7.83594 258.43 10.125V11.4062C258.43 13.6953 259.859 15.1562 262.102 15.1562ZM262.102 7.54688C263.555 7.54688 264.461 8.57812 264.461 10.2422V11.2812C264.461 12.9531 263.555 13.9766 262.102 13.9766C260.648 13.9766 259.742 12.9531 259.742 11.2812V10.2422C259.742 8.57812 260.648 7.54688 262.102 7.54688ZM275.461 6.52344H274.133V11.5156C274.133 12.9609 273.195 13.9375 271.797 13.9375C270.477 13.9375 269.852 13.2188 269.852 11.6875V6.52344H268.523V12.0234C268.523 14.0547 269.523 15.1562 271.367 15.1562C272.656 15.1562 273.625 14.5625 274.078 13.5078H274.188V15H275.461V6.52344ZM278.797 8.8125C278.797 10.0156 279.555 10.7891 281.086 11.1406L282.344 11.4297C283.422 11.6719 283.836 12.0312 283.836 12.7031C283.836 13.5156 283.102 14.0391 281.945 14.0391C280.852 14.0391 280.102 13.5859 279.906 12.8047H278.555C278.703 14.2578 279.977 15.1562 281.898 15.1562C283.906 15.1562 285.211 14.1406 285.211 12.5781C285.211 11.3516 284.461 10.6328 282.812 10.2578L281.617 9.98438C280.555 9.75 280.117 9.38281 280.117 8.73438C280.117 7.96094 280.812 7.46094 281.891 7.46094C282.883 7.46094 283.594 7.91406 283.75 8.65625H285.031C284.875 7.24219 283.68 6.35938 281.914 6.35938C280.047 6.35938 278.797 7.34375 278.797 8.8125ZM143.625 34C146.047 34 147.484 32.8281 147.484 30.8516C147.484 29.3438 146.492 28.2422 144.977 28.0938V27.9766C146.109 27.7812 146.914 26.7578 146.914 25.5156C146.914 23.7656 145.664 22.7266 143.586 22.7266H139.938V34H143.625ZM141.305 23.9141H143.273C144.711 23.9141 145.523 24.5781 145.523 25.7578C145.523 26.9453 144.664 27.5938 143.062 27.5938H141.305V23.9141ZM141.305 32.8047V28.7422H143.281C145.109 28.7422 146.055 29.4297 146.055 30.7578C146.055 32.1016 145.117 32.8047 143.328 32.8047H141.305ZM153.305 34.1562C155.547 34.1562 156.977 32.6953 156.977 30.4062V29.125C156.977 26.8359 155.547 25.375 153.305 25.375C151.062 25.375 149.633 26.8359 149.633 29.125V30.4062C149.633 32.6953 151.062 34.1562 153.305 34.1562ZM153.305 26.5469C154.758 26.5469 155.664 27.5781 155.664 29.2422V30.2812C155.664 31.9531 154.758 32.9766 153.305 32.9766C151.852 32.9766 150.945 31.9531 150.945 30.2812V29.2422C150.945 27.5781 151.852 26.5469 153.305 26.5469ZM163.227 30.7344L165.359 34H166.898L163.977 29.7031L166.875 25.5234H165.383L163.281 28.7344H163.172L161.062 25.5234H159.492L162.422 29.7578L159.516 34H160.984L163.125 30.7344H163.227ZM177.219 29.6172V28.3828H168.953V29.6172H177.219ZM179.5 34H180.828V29.0156C180.828 27.5703 181.773 26.5938 183.172 26.5938C184.5 26.5938 185.125 27.3203 185.125 28.8438V34H186.453V28.5078C186.453 26.4844 185.453 25.375 183.609 25.375C182.312 25.375 181.336 25.9688 180.891 27.0234H180.781V22.1953H179.5V34ZM192.961 26.5078C194.328 26.5078 195.156 27.4844 195.156 29.1016H190.695C190.695 27.4766 191.547 26.5078 192.961 26.5078ZM195.156 31.8125C194.922 32.5547 194.133 33.0078 193.062 33.0078C191.617 33.0078 190.695 32.0078 190.695 30.4531V30.1094H196.469V29.2812C196.469 26.8281 195.172 25.3672 192.969 25.3672C190.812 25.3672 189.383 26.8359 189.383 29.0703V30.3438C189.383 32.7578 190.734 34.1562 193.062 34.1562C194.844 34.1562 196.188 33.2109 196.445 31.8125H195.156ZM201.898 34.1484C203.133 34.1484 204.055 33.6406 204.461 32.7344H204.594V34.0078H205.859V28.2031C205.859 26.4375 204.719 25.4219 202.727 25.4219C200.992 25.4219 199.68 26.3516 199.523 27.7109H200.828C201.047 26.9844 201.734 26.5703 202.711 26.5703C203.891 26.5703 204.539 27.1562 204.539 28.2188V28.9844L202.211 29.1016C200.281 29.2031 199.203 30.0938 199.203 31.5938C199.203 33.1328 200.281 34.1484 201.898 34.1484ZM202.281 32.9844C201.211 32.9844 200.547 32.4375 200.547 31.5469C200.547 30.6641 201.172 30.1562 202.359 30.1016L204.539 30V31C204.539 32.1328 203.562 32.9844 202.281 32.9844ZM210.211 29.1406C210.211 27.5781 211.102 26.5781 212.508 26.5781C213.898 26.5781 214.789 27.5781 214.789 29.1406V30.3594C214.789 31.9297 213.898 32.9297 212.508 32.9297C211.102 32.9297 210.211 31.9219 210.211 30.3594V29.1406ZM214.805 32.7031V34H216.109V22.1953H214.758V26.8359H214.617C214.242 25.9062 213.344 25.3828 212.117 25.3828C210.156 25.3828 208.875 26.7969 208.875 28.9688V30.5469C208.875 32.7266 210.156 34.1406 212.117 34.1406C213.328 34.1406 214.219 33.6406 214.656 32.7031H214.805ZM222.633 26.5078C224 26.5078 224.828 27.4844 224.828 29.1016H220.367C220.367 27.4766 221.219 26.5078 222.633 26.5078ZM224.828 31.8125C224.594 32.5547 223.805 33.0078 222.734 33.0078C221.289 33.0078 220.367 32.0078 220.367 30.4531V30.1094H226.141V29.2812C226.141 26.8281 224.844 25.3672 222.641 25.3672C220.484 25.3672 219.055 26.8359 219.055 29.0703V30.3438C219.055 32.7578 220.406 34.1562 222.734 34.1562C224.516 34.1562 225.859 33.2109 226.117 31.8125H224.828ZM232.078 27.6875V25.5234H228.914V26.5859H230.797V32.9375H229.086V34H230.797H232.094H234.719V32.9375H232.094V30.2031C232.094 28.0469 233.203 26.75 235.078 26.75C235.539 26.75 236.086 26.8438 236.477 26.9844V25.4922C236.195 25.375 235.734 25.3047 235.25 25.3047C233.617 25.3047 232.562 26.1172 232.25 27.6875H232.078ZM152.055 53H153.383V45.6797H157.109V44.5469H153.367V43.6719C153.367 42.8203 153.992 42.3828 155.172 42.3828C155.648 42.3828 156.742 42.4141 157.109 42.4531V41.3672C156.828 41.3281 155.648 41.2891 155.156 41.2891C153.07 41.2891 152.055 42.0547 152.055 43.6953V44.5469H149.781V45.6797H152.055V53ZM164.516 53H165.773V50.6172H167.5V49.4062H165.781V46.2031H164.531V49.4219H160.836V49.3203L164.609 41.7266H163.203L159.375 49.5V50.6172H164.516V53ZM181.531 42.25V44.5469H179.273V45.6797H181.531V50.4766C181.531 52.2422 182.508 53.0391 184.609 53.0391C185.016 53.0391 186.047 53 186.258 52.9609V51.8359C186.031 51.8594 185.18 51.8828 184.703 51.8828C183.508 51.8828 182.859 51.3828 182.859 50.4609V45.6797H186.281V44.5469H182.844V42.25H181.531ZM192.961 45.5078C194.328 45.5078 195.156 46.4844 195.156 48.1016H190.695C190.695 46.4766 191.547 45.5078 192.961 45.5078ZM195.156 50.8125C194.922 51.5547 194.133 52.0078 193.062 52.0078C191.617 52.0078 190.695 51.0078 190.695 49.4531V49.1094H196.469V48.2812C196.469 45.8281 195.172 44.3672 192.969 44.3672C190.812 44.3672 189.383 45.8359 189.383 48.0703V49.3438C189.383 51.7578 190.734 53.1562 193.062 53.1562C194.844 53.1562 196.188 52.2109 196.445 50.8125H195.156ZM202.789 49.7344L204.922 53H206.461L203.539 48.7031L206.438 44.5234H204.945L202.844 47.7344H202.734L200.625 44.5234H199.055L201.984 48.7578L199.078 53H200.547L202.688 49.7344H202.789ZM211.203 42.25V44.5469H208.945V45.6797H211.203V50.4766C211.203 52.2422 212.18 53.0391 214.281 53.0391C214.688 53.0391 215.719 53 215.93 52.9609V51.8359C215.703 51.8594 214.852 51.8828 214.375 51.8828C213.18 51.8828 212.531 51.3828 212.531 50.4609V45.6797H215.953V44.5469H212.516V42.25H211.203ZM226.672 48.6172V47.3828H218.406V48.6172H226.672ZM237.008 44.5234H235.711L234.562 51.3203H234.422L233.055 44.5312H231.805L230.438 51.3203H230.297L229.148 44.5234H227.852L229.672 53H230.945L232.383 46.3906H232.477L233.914 53H235.188L237.008 44.5234ZM238.844 53H240.172V48.0156C240.172 46.5703 241.117 45.5938 242.516 45.5938C243.844 45.5938 244.469 46.3203 244.469 47.8438V53H245.797V47.5078C245.797 45.4844 244.797 44.375 242.953 44.375C241.656 44.375 240.68 44.9688 240.234 46.0234H240.125V41.1953H238.844V53ZM252.359 42.4453C252.984 42.4453 253.461 41.9766 253.461 41.3516C253.461 40.7344 252.984 40.2656 252.359 40.2656C251.734 40.2656 251.258 40.7344 251.258 41.3516C251.258 41.9766 251.734 42.4453 252.359 42.4453ZM255.914 53V51.8984H253.109V44.5234H248.914V45.625H251.797V51.8984H248.891V53H255.914ZM260.656 42.25V44.5469H258.398V45.6797H260.656V50.4766C260.656 52.2422 261.633 53.0391 263.734 53.0391C264.141 53.0391 265.172 53 265.383 52.9609V51.8359C265.156 51.8594 264.305 51.8828 263.828 51.8828C262.633 51.8828 261.984 51.3828 261.984 50.4609V45.6797H265.406V44.5469H261.969V42.25H260.656ZM272.086 45.5078C273.453 45.5078 274.281 46.4844 274.281 48.1016H269.82C269.82 46.4766 270.672 45.5078 272.086 45.5078ZM274.281 50.8125C274.047 51.5547 273.258 52.0078 272.188 52.0078C270.742 52.0078 269.82 51.0078 269.82 49.4531V49.1094H275.594V48.2812C275.594 45.8281 274.297 44.3672 272.094 44.3672C269.938 44.3672 268.508 45.8359 268.508 48.0703V49.3438C268.508 51.7578 269.859 53.1562 272.188 53.1562C273.969 53.1562 275.312 52.2109 275.57 50.8125H274.281ZM143.625 130C146.047 130 147.484 128.828 147.484 126.852C147.484 125.344 146.492 124.242 144.977 124.094V123.977C146.109 123.781 146.914 122.758 146.914 121.516C146.914 119.766 145.664 118.727 143.586 118.727H139.938V130H143.625ZM141.305 119.914H143.273C144.711 119.914 145.523 120.578 145.523 121.758C145.523 122.945 144.664 123.594 143.062 123.594H141.305V119.914ZM141.305 128.805V124.742H143.281C145.109 124.742 146.055 125.43 146.055 126.758C146.055 128.102 145.117 128.805 143.328 128.805H141.305ZM153.305 130.156C155.547 130.156 156.977 128.695 156.977 126.406V125.125C156.977 122.836 155.547 121.375 153.305 121.375C151.062 121.375 149.633 122.836 149.633 125.125V126.406C149.633 128.695 151.062 130.156 153.305 130.156ZM153.305 122.547C154.758 122.547 155.664 123.578 155.664 125.242V126.281C155.664 127.953 154.758 128.977 153.305 128.977C151.852 128.977 150.945 127.953 150.945 126.281V125.242C150.945 123.578 151.852 122.547 153.305 122.547ZM163.227 126.734L165.359 130H166.898L163.977 125.703L166.875 121.523H165.383L163.281 124.734H163.172L161.062 121.523H159.492L162.422 125.758L159.516 130H160.984L163.125 126.734H163.227ZM177.219 125.617V124.383H168.953V125.617H177.219ZM183.508 130.141C185.469 130.141 186.75 128.727 186.75 126.547V124.969C186.75 122.797 185.469 121.383 183.508 121.383C182.281 121.383 181.383 121.906 181.008 122.836H180.867V118.195H179.516V130H180.82V128.703H180.969C181.406 129.641 182.297 130.141 183.508 130.141ZM183.117 128.93C181.727 128.93 180.836 127.93 180.836 126.359V125.141C180.836 123.578 181.727 122.578 183.117 122.578C184.523 122.578 185.414 123.578 185.414 125.141V126.359C185.414 127.922 184.523 128.93 183.117 128.93ZM192.867 130.156C195.109 130.156 196.539 128.695 196.539 126.406V125.125C196.539 122.836 195.109 121.375 192.867 121.375C190.625 121.375 189.195 122.836 189.195 125.125V126.406C189.195 128.695 190.625 130.156 192.867 130.156ZM192.867 122.547C194.32 122.547 195.227 123.578 195.227 125.242V126.281C195.227 127.953 194.32 128.977 192.867 128.977C191.414 128.977 190.508 127.953 190.508 126.281V125.242C190.508 123.578 191.414 122.547 192.867 122.547ZM200.32 125.141C200.32 123.578 201.211 122.578 202.617 122.578C204.008 122.578 204.898 123.578 204.898 125.141V126.359C204.898 127.93 204.008 128.93 202.617 128.93C201.211 128.93 200.32 127.922 200.32 126.359V125.141ZM204.914 128.703V130H206.219V118.195H204.867V122.836H204.727C204.352 121.906 203.453 121.383 202.227 121.383C200.266 121.383 198.984 122.797 198.984 124.969V126.547C198.984 128.727 200.266 130.141 202.227 130.141C203.438 130.141 204.328 129.641 204.766 128.703H204.914ZM210.273 133.016C211.844 133.016 212.555 132.398 213.297 130.312L216.492 121.523H215.078L212.711 128.617H212.609L210.234 121.523H208.789L211.906 130.055L211.758 130.516C211.406 131.5 210.969 131.859 210.172 131.859C210.047 131.859 209.805 131.852 209.703 131.828V132.992C209.82 133.008 210.078 133.016 210.273 133.016Z",
  transform: "translate(-1 -2)",
  fill: "#79B8FF"
});

var SvgComponent = function SvgComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 305,
    height: 187,
    viewBox: "0 0 305 187",
    fill: "none"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

/***/ }),

/***/ "./src/svg/Hero.svg":
/*!**************************!*\
  !*** ./src/svg/Hero.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 60,
  y: 282,
  width: 41.9713,
  height: 32,
  fill: "#044289"
});

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 186.771,
  y: 282,
  width: 42.8279,
  height: 32,
  fill: "#044289"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 263.861,
  y: 282,
  width: 43.6844,
  height: 32,
  fill: "#044289"
});

var _ref4 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 136.234,
  y: 282,
  width: 16.2746,
  height: 32,
  fill: "#044289"
});

var _ref5 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 341.807,
  y: 282,
  width: 28.2664,
  height: 32,
  fill: "#044289"
});

var _ref6 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 41,
  y: 202,
  width: 53.8069,
  height: 48,
  fill: "#005CC5"
});

var _ref7 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 130.678,
  y: 202,
  width: 142.588,
  height: 48,
  fill: "#005CC5"
});

var _ref8 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-draggable": "",
  id: "brush"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M246.442 389.86C259.233 370.005 277.67 298.517 277.67 242.078C277.67 167.929 248.324 131 235.335 131C222.346 131 193 167.929 193 242.078C193 298.517 211.437 370.005 224.228 389.86H246.442Z",
  fill: "#2188FF"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "brushMask"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M246.442 389.86C259.233 370.005 277.67 298.517 277.67 242.078C277.67 167.929 248.324 131 235.335 131C222.346 131 193 167.929 193 242.078C193 298.517 211.437 370.005 224.228 389.86H246.442Z",
  fill: "#005CC5"
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#brushMask)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M206.145 205.622V174.802H205.145V205.622H206.145ZM221.626 221.495C213.088 221.495 206.145 214.4 206.145 205.622H205.145C205.145 214.929 212.513 222.495 221.626 222.495V221.495ZM237.107 205.622C237.107 214.4 230.165 221.495 221.626 221.495V222.495C230.74 222.495 238.107 214.929 238.107 205.622H237.107ZM237.107 174.802V205.622H238.107V174.802H237.107ZM243.748 187.323C243.748 172.164 231.751 159.855 216.926 159.855V160.855C231.176 160.855 242.748 172.694 242.748 187.323H243.748ZM243.748 223.922V187.323H242.748V223.922H243.748ZM216.926 251.389C231.751 251.389 243.748 239.08 243.748 223.922H242.748C242.748 238.551 231.176 250.389 216.926 250.389V251.389ZM190.104 223.922C190.104 239.08 202.101 251.389 216.926 251.389V250.389C202.676 250.389 191.104 238.551 191.104 223.922H190.104ZM190.104 187.323V223.922H191.104V187.323H190.104ZM216.926 159.855C202.101 159.855 190.104 172.164 190.104 187.323H191.104C191.104 172.694 202.676 160.855 216.926 160.855V159.855ZM301.092 291.668C301.092 278.637 290.778 268.053 278.03 268.053V269.053C290.203 269.053 300.092 279.166 300.092 291.668H301.092ZM301.092 403.391V291.668H300.092V403.391H301.092ZM278.03 427.006C290.778 427.006 301.092 416.421 301.092 403.391H300.092C300.092 415.892 290.203 426.006 278.03 426.006V427.006ZM251.708 427.006H278.03V426.006H251.708V427.006ZM228.647 403.391C228.647 416.421 238.961 427.006 251.708 427.006V426.006C239.535 426.006 229.647 415.892 229.647 403.391H228.647ZM228.647 291.668V403.391H229.647V291.668H228.647ZM251.708 268.053C238.961 268.053 228.647 278.637 228.647 291.668H229.647C229.647 279.166 239.535 269.053 251.708 269.053V268.053ZM278.03 268.053H251.708V269.053H278.03V268.053ZM289.811 307.078C289.811 298.302 282.865 291.168 274.27 291.168V292.168C282.29 292.168 288.811 298.832 288.811 307.078H289.811ZM289.811 359.087V307.078H288.811V359.087H289.811ZM274.27 374.997C282.865 374.997 289.811 367.862 289.811 359.087H288.811C288.811 367.333 282.29 373.997 274.27 373.997V374.997ZM259.229 374.997H274.27V373.997H259.229V374.997ZM243.688 359.087C243.688 367.862 250.635 374.997 259.229 374.997V373.997C251.21 373.997 244.688 367.333 244.688 359.087H243.688ZM243.688 307.078V359.087H244.688V307.078H243.688ZM259.229 291.168C250.635 291.168 243.688 298.302 243.688 307.078H244.688C244.688 298.832 251.21 292.168 259.229 292.168V291.168ZM274.27 291.168H259.229V292.168H274.27V291.168ZM286.051 320.562C286.051 313.914 280.788 308.504 274.27 308.504V309.504C280.213 309.504 285.051 314.443 285.051 320.562H286.051ZM286.051 349.455V320.562H285.051V349.455H286.051ZM274.27 361.513C280.788 361.513 286.051 356.103 286.051 349.455H285.051C285.051 355.574 280.213 360.513 274.27 360.513V361.513ZM264.869 361.513H274.27V360.513H264.869V361.513ZM253.089 349.455C253.089 356.103 258.352 361.513 264.869 361.513V360.513C258.927 360.513 254.089 355.574 254.089 349.455H253.089ZM253.089 320.562V349.455H254.089V320.562H253.089ZM264.869 308.504C258.352 308.504 253.089 313.914 253.089 320.562H254.089C254.089 314.443 258.927 309.504 264.869 309.504V308.504ZM274.27 308.504H264.869V309.504H274.27V308.504Z",
  fill: "#C8E1FF"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M271.949 189.286H198.721C207.921 150.392 225.923 131 235.335 131C244.747 131 262.749 150.392 271.949 189.286Z",
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M223.71 137.462C226.057 138.725 230.385 139.572 235.335 139.572C240.285 139.572 244.613 138.725 246.96 137.462C242.561 133.153 238.471 131 235.335 131C235.335 131 235.335 131 235.335 131C232.199 131 228.11 133.153 223.71 137.462Z",
  fill: "#032F62"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M281.954 89.2465C281.954 114.676 261.333 135.291 235.895 135.291C210.457 135.291 189.835 114.676 189.835 89.2465C189.835 59.5095 233.976 24.017 235.895 0.994781C237.814 24.017 281.954 60.4688 281.954 89.2465Z",
  fill: "#005CC5",
  stroke: "#005CC5",
  strokeWidth: 1.71311,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "mask1",
  maskType: "alpha",
  maskUnits: "userSpaceOnUse",
  x: 188,
  y: 0,
  width: 95,
  height: 137
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M281.954 89.2465C281.954 114.676 261.333 135.291 235.895 135.291C210.457 135.291 189.835 114.676 189.835 89.2465C189.835 59.5095 233.976 24.017 235.895 0.994781C237.814 24.017 281.954 60.4688 281.954 89.2465Z",
  fill: "#C8E1FF",
  stroke: "#C8E1FF",
  strokeWidth: 1.71311
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  mask: "url(#mask1)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
  cx: 221.24,
  cy: 101.506,
  rx: 52.3403,
  ry: 52.367,
  fill: "#2188FF"
})));

var SvgComponent = function SvgComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 433,
    height: 390,
    viewBox: "0 0 433 390",
    fill: "none"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

/***/ }),

/***/ "./src/svg/HeroOverlay.svg":
/*!*********************************!*\
  !*** ./src/svg/HeroOverlay.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  width: 24,
  height: 24,
  transform: "matrix(0.707107 -0.707107 0.706902 0.707311 77.2051 197.008)",
  stroke: "#C8E1FF",
  strokeLinejoin: "round"
});

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M403.197 190.098L391.197 170.098L415.197 170.098L403.197 190.098Z",
  stroke: "#C8E1FF",
  strokeLinejoin: "round"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M136 115C136 107 152 107 152 99C152 91 136 91 136 83C136 75 152 75 152 67C152 59 136 59 136 51C136 43 152 43 152 35",
  stroke: "#C8E1FF",
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var _ref4 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M294.771 165.316C290.402 165.316 290.402 156.75 286.034 156.75C281.665 156.75 281.665 165.316 277.297 165.316C272.928 165.316 272.928 156.75 268.56 156.75C264.191 156.75 264.191 165.316 259.823 165.316C255.455 165.316 255.455 156.75 251.086 156.75",
  stroke: "#2188FF",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var _ref5 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M68.3333 120L67.454 120.476C67.6288 120.799 67.9663 121 68.3333 121V120ZM64 112L63.1207 111.524C62.9598 111.821 62.9598 112.179 63.1207 112.476L64 112ZM68.3333 104L68.3333 103C67.9663 103 67.6288 103.201 67.454 103.524L68.3333 104ZM77 104L77.8793 103.524C77.7045 103.201 77.367 103 77 103L77 104ZM81.3333 112L82.2126 112.476C82.3736 112.179 82.3736 111.821 82.2126 111.524L81.3333 112ZM77 120V121C77.367 121 77.7045 120.799 77.8793 120.476L77 120ZM69.2126 119.524L64.8793 111.524L63.1207 112.476L67.454 120.476L69.2126 119.524ZM64.8793 112.476L69.2126 104.476L67.454 103.524L63.1207 111.524L64.8793 112.476ZM68.3333 105L77 105L77 103L68.3333 103L68.3333 105ZM76.1207 104.476L80.454 112.476L82.2126 111.524L77.8793 103.524L76.1207 104.476ZM80.454 111.524L76.1207 119.524L77.8793 120.476L82.2126 112.476L80.454 111.524ZM77 119H68.3333V121H77V119Z",
  fill: "#2188FF"
});

var _ref6 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  width: 16,
  height: 16,
  transform: "matrix(1 0 -0.000289166 1 317 76)",
  stroke: "#2188FF",
  strokeWidth: 2,
  strokeLinejoin: "round"
});

var _ref7 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M167.505 352.59L165.885 350.58C165.63 350.25 165.465 349.86 165.42 349.425L165.135 346.875C165.015 345.825 164.19 345 163.14 344.88L160.59 344.595C160.14 344.55 159.75 344.355 159.42 344.1L157.41 342.48C156.585 341.82 155.415 341.82 154.59 342.48L152.58 344.1C152.25 344.355 151.86 344.52 151.425 344.565L148.875 344.85C147.825 344.97 147 345.795 146.88 346.845L146.595 349.395C146.55 349.845 146.355 350.235 146.1 350.565L144.48 352.575C143.82 353.4 143.82 354.57 144.48 355.395L146.1 357.405C146.355 357.735 146.52 358.125 146.565 358.56L146.85 361.11C146.97 362.16 147.795 362.985 148.845 363.105L151.395 363.39C151.845 363.435 152.235 363.63 152.565 363.885L154.575 365.505C155.4 366.165 156.57 366.165 157.395 365.505L159.405 363.885C159.735 363.63 160.125 363.465 160.56 363.42L163.11 363.135C164.16 363.015 164.985 362.19 165.105 361.14L165.39 358.59C165.435 358.14 165.63 357.75 165.885 357.42L167.505 355.41C168.165 354.585 168.165 353.415 167.505 352.59V352.59ZM153.75 360L148.5 354.75L150.75 352.5L153.75 355.5L161.25 348L163.5 350.325L153.75 360V360Z",
  fill: "#79B8FF"
});

var _ref8 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M359 270H374.529L381 276.265V296H359V270Z",
  fill: "#1B1F23"
});

var _ref9 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M375 268H360C358.9 268 358 268.9 358 270V294C358 295.1 358.9 296 360 296H380C381.1 296 382 295.1 382 294V275L375 268V268ZM380 294H360V270H374L380 276V294V294ZM368 279.96L365 283L368 286L367 288L362 283L367 278L368 279.96V279.96ZM373 278L378 283L373 288L372 286.04L375 283L372 280L373 278V278Z",
  fill: "#79B8FF"
});

var _ref10 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M323 80V86H329L345 70L339 64L323 80V80ZM329 84H325V80H327V82H329V84V84ZM349.6 65.4L347 68L341 62L343.6 59.4C344.38 58.62 345.64 58.62 346.42 59.4L349.6 62.58C350.38 63.36 350.38 64.62 349.6 65.4V65.4Z",
  fill: "#79B8FF"
});

var SvgComponent = function SvgComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 433,
    height: 390,
    viewBox: "0 0 433 390",
    fill: "none"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

/***/ }),

/***/ "./src/svg/Octicons.svg":
/*!******************************!*\
  !*** ./src/svg/Octicons.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#clip0)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 188,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 200,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 212,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 224,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 236,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 248,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 260,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 18,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 30,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 42,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 54,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 66,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 6,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 78,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 90,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 102,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 114,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 126,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 138,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 162,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 150,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 20,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 32,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 44,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 56,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 68,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 80,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 92,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 104,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 116,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 128,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 140,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 152,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 164,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 186,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 198,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 210,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 222,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 234,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 174,
  cy: 176,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 246,
  cy: 176,
  r: 2,
  fill: "#044289"
}));

var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 28.5,
  y: 41.5,
  width: 255,
  height: 255,
  fill: "#1B1F23",
  stroke: "#79B8FF"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#clip1)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 347,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 359,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 371,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 383,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 395,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 407,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 419,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 395,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 407,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 419,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 431,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 443,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 383,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 455,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 467,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 479,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 491,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 503,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 515,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 539,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 527,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 179,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 191,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 203,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 215,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 227,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 239,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 251,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 263,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 275,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 287,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 299,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 311,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 323,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 563,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 575,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 587,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 599,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 611,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 551,
  cy: 335,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 623,
  cy: 335,
  r: 2,
  fill: "#044289"
}));

var _ref4 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 405.5,
  y: 141.5,
  width: 255,
  height: 255,
  fill: "#1B1F23",
  stroke: "#79B8FF"
});

var _ref5 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  clipPath: "url(#clip2)"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 286,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 298,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 310,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 322,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 334,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 346,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 358,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 836,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 848,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 860,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 872,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 884,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 824,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 896,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 908,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 920,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 932,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 944,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 956,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 980,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 968,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 118,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 130,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 142,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 154,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 166,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 178,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 190,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 202,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 214,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 226,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 238,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 250,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 262,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1004,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1016,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1028,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1040,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1052,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 992,
  cy: 274,
  r: 2,
  fill: "#044289"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 1064,
  cy: 274,
  r: 2,
  fill: "#044289"
}));

var _ref6 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 788.5,
  y: 80.5,
  width: 255,
  height: 255,
  fill: "#1B1F23",
  stroke: "#79B8FF"
});

var _ref7 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 61,
  y: 81,
  width: 60,
  height: 48,
  fill: "#005CC5"
});

var _ref8 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 192,
  y: 208,
  width: 60,
  height: 48,
  fill: "#005CC5"
});

var _ref9 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 121,
  y: 144,
  width: 33,
  height: 32,
  fill: "#044289"
});

var _ref10 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 170,
  y: 144,
  width: 33,
  height: 32,
  fill: "#044289"
});

var _ref11 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 219,
  y: 144,
  width: 33,
  height: 32,
  fill: "#044289"
});

var _ref12 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 577,
  y: 181,
  width: 60,
  height: 48,
  fill: "#005CC5"
});

var _ref13 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 820,
  y: 132,
  width: 116,
  height: 48,
  fill: "#044289"
});

var _ref14 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 888,
  y: 196,
  width: 116,
  height: 32,
  fill: "#005CC5"
});

var _ref15 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 954,
  y: 244,
  width: 50,
  height: 48,
  fill: "#044289"
});

var _ref16 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 604,
  y: 245,
  width: 33,
  height: 32,
  fill: "#044289"
});

var _ref17 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 489,
  y: 357,
  width: 60,
  height: 48,
  transform: "rotate(-180 489 357)",
  fill: "#005CC5"
});

var _ref18 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  x: 462,
  y: 293,
  width: 33,
  height: 32,
  transform: "rotate(-180 462 293)",
  fill: "#044289"
});

var _ref19 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  id: "line",
  d: "M151 61C202.5 3.50008 310.725 -13.311 345.5 25C375 57.5 328.036 90.3803 307 122.5C260.5 193.5 239.994 333.385 291.5 350C338 365 401 225.5 509.5 225.5C603 225.5 569.5 354.016 627.5 366C671.5 375.091 689.371 290.5 697.5 200C710.524 55 877.925 -19 932.5 36.5C956.919 61.3333 927.5 98 905.5 123.5",
  stroke: "#C8E1FF"
});

var _ref20 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 954,
  cy: 11,
  r: 6,
  stroke: "#2188FF",
  strokeWidth: 2
});

var _ref21 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  "data-draggable": "",
  id: "pencil",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M101 98.0001V110H113L145 78.0001L133 66.0001L101 98.0001V98.0001ZM113 106H105V98.0001H109V102H113V106V106ZM154.2 68.8L149 74L137 62L142.2 56.8C143.76 55.24 146.28 55.24 147.84 56.8L154.2 63.16C155.76 64.72 155.76 67.24 154.2 68.8V68.8Z",
  fill: "#79B8FF"
});

var _ref22 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-draggable": "",
  id: "check"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 315,
  cy: 109,
  r: 12,
  fill: "#1B1F23"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M330.34 107.131L328.182 104.453C327.842 104.013 327.622 103.493 327.562 102.914L327.182 99.5159C327.022 98.1168 325.923 97.0175 324.524 96.8576L321.126 96.4778C320.527 96.4179 320.007 96.158 319.567 95.8182L316.889 93.6596C315.79 92.7801 314.23 92.7801 313.131 93.6596L310.453 95.8182C310.013 96.158 309.493 96.3779 308.914 96.4379L305.516 96.8176C304.117 96.9775 303.017 98.0768 302.858 99.476L302.478 102.874C302.418 103.473 302.158 103.993 301.818 104.433L299.66 107.111C298.78 108.21 298.78 109.77 299.66 110.869L301.818 113.547C302.158 113.987 302.378 114.507 302.438 115.086L302.818 118.484C302.978 119.883 304.077 120.983 305.476 121.142L308.874 121.522C309.473 121.582 309.993 121.842 310.433 122.182L313.111 124.34C314.21 125.22 315.77 125.22 316.869 124.34L319.547 122.182C319.987 121.842 320.507 121.622 321.086 121.562L324.484 121.182C325.883 121.022 326.983 119.923 327.142 118.524L327.522 115.126C327.582 114.527 327.842 114.007 328.182 113.567L330.34 110.889C331.22 109.79 331.22 108.23 330.34 107.131V107.131ZM312 117.02L305 110.02L308 107.02L312 111.02L322 101.02L325 104.12L312 117.02V117.02Z",
  fill: "#79B8FF"
}));

var _ref23 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  "data-draggable": "",
  id: "heart",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M204 243C202.06 243 200.62 243.84 199.6 245C198.58 246.16 198.04 246.84 198 247C197.96 246.84 197.44 246.16 196.4 245C195.36 243.84 194.06 243 192 243C188.736 243.172 186.093 245.665 186 249C186 250.04 186.18 252.04 187.34 254.34C188.5 256.64 192.02 260.22 198 265C203.96 260.22 207.54 256.66 208.68 254.34C209.82 252.02 210 250 210 249C209.906 245.62 207.316 243.175 204 243Z",
  fill: "#79B8FF"
});

var _ref24 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-draggable": "",
  id: "rocket"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M360.5 302L365.5 300C365.5 300 364 304 370 305.5C369.744 307.16 367.5 309 367.5 309C363 307 360.5 302 360.5 302Z",
  fill: "#1B1F23"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M364.34 305.66C363.8 305.12 363.4 304.56 363.08 303.9C362.76 303.28 362.54 302.58 362.4 301.86C361.24 302.52 360.08 303.26 358.94 304.12C357.78 305 356.66 306 355.56 307.08C354.16 308.48 352.9 310.7 352 311.98H346L340 318H346L350 314C349.32 315.54 347.96 319.96 348 320L350 322C350.04 322.04 354.46 320.72 356 320L352 324V330L358 324V318C359.28 317.1 361.5 315.82 362.9 314.44C364 313.34 365 312.18 365.84 311.04C366.72 309.88 367.46 308.72 368.12 307.6C367.4 307.44 366.72 307.22 366.06 306.92C365.44 306.6 364.88 306.2 364.34 305.66M372 298C372 298 371.82 298.76 371.4 300.12C371 301.52 370.3 303.28 369.28 305.44C367.88 305.28 366.74 304.78 365.96 304C365.18 303.22 364.7 302.12 364.56 300.72C366.72 299.68 368.46 298.96 369.84 298.56C371.24 298.16 372 298 372 298",
  fill: "#79B8FF"
}));

var _ref25 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  "data-draggable": "",
  id: "merge",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M479 147C476.08 147 473.48 148.64 472.08 151.08V151C467.88 150.92 463 149.56 459.56 146.92C456.56 144.6 453.56 140.48 452 137.16C453.8 135.72 455 133.48 455 130.96C455 126.52 451.44 122.96 447 122.96C442.56 122.96 439 126.56 439 131C439 133.92 440.64 136.52 443 137.88V164.12C440.64 165.52 439 168.08 439 171C439 175.44 442.56 179 447 179C451.44 179 455 175.44 455 171C455 168.08 453.36 165.48 451 164.12V149.68C453.68 152.48 456.76 154.76 460.2 156.44C463.64 158.12 468.32 158.96 472.08 159V158.92C473.52 161.36 476.08 163 479 163C483.44 163 487 159.44 487 155C487 150.56 483.44 147 479 147ZM451.8 171C451.8 173.64 449.6 175.8 447 175.8C444.4 175.8 442.2 173.6 442.2 171C442.2 168.4 444.4 166.2 447 166.2C449.6 166.2 451.8 168.4 451.8 171ZM447 135.8C444.36 135.8 442.2 133.6 442.2 131C442.2 128.4 444.4 126.2 447 126.2C449.6 126.2 451.8 128.4 451.8 131C451.8 133.6 449.6 135.8 447 135.8ZM479 159.8C476.36 159.8 474.2 157.6 474.2 155C474.2 152.4 476.4 150.2 479 150.2C481.6 150.2 483.8 152.4 483.8 155C483.8 157.6 481.6 159.8 479 159.8Z",
  fill: "#79B8FF"
});

var _ref26 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  "data-draggable": "",
  id: "bolt",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M595 307H587L593 293L575 311H583L577 325L595 307Z",
  fill: "#79B8FF"
});

var _ref27 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-draggable": "",
  id: "picture"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M690 201H702L706 205.5V218H690V201Z",
  fill: "#1B1F23"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M698 205.5H701V208.5H698V205.5V205.5ZM707 204.75V219C707 219.825 706.325 220.5 705.5 220.5H690.5C689.675 220.5 689 219.825 689 219V201C689 200.175 689.675 199.5 690.5 199.5H701.75L707 204.75V204.75ZM705.5 205.5L701 201H690.5V217.5L695 210L698 216L701 213L705.5 217.5V205.5V205.5Z",
  fill: "#79B8FF"
}));

var _ref28 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  "data-draggable": "",
  id: "plus",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M823.5 245.5H805.5C804.675 245.5 804 246.175 804 247V265C804 265.825 804.675 266.5 805.5 266.5H823.5C824.325 266.5 825 265.825 825 265V247C825 246.175 824.325 245.5 823.5 245.5ZM823.5 265H805.5V247H823.5V265ZM813 257.5H808.5V254.5H813V250H816V254.5H820.5V257.5H816V262H813V257.5Z",
  fill: "#79B8FF"
});

var _ref29 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  "data-draggable": "",
  id: "search"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 931.5,
  cy: 325.5,
  r: 20.5,
  fill: "#1B1F23"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M965.8 354.2L950.56 338.88C953.36 334.96 955 330.2 955 325C955 311.76 944.24 301 931 301C917.76 301 907 311.76 907 325C907 338.24 917.76 349 931 349C936.2 349 940.92 347.36 944.88 344.56L960.2 359.8C960.96 360.6 962 361 963 361C964 361 965.08 360.64 965.8 359.8C967.36 358.24 967.36 355.72 965.8 354.16V354.2ZM931 343.8C920.64 343.8 912.2 335.36 912.2 325C912.2 314.64 920.64 306.2 931 306.2C941.36 306.2 949.8 314.64 949.8 325C949.8 335.36 941.36 343.8 931 343.8Z",
  fill: "#79B8FF"
}));

var _ref30 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  "data-draggable": "",
  id: "pin",
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M900 117.4V119L901 121L892 127H884.4C883.52 127 883.06 128.06 883.72 128.72L890 135L882 145L892 137L898.28 143.28C898.94 143.94 900 143.46 900 142.6V135L906 126L908 127H909.6C910.48 127 910.94 125.94 910.28 125.28L901.72 116.72C901.06 116.06 900 116.54 900 117.4Z",
  fill: "#79B8FF"
});

var _ref31 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M132 251C124 251 124 235 116 235C108 235 108 251 100 251C92 251 92 235 84 235C76 235 76 251 68 251C60 251 60 235 52 235",
  stroke: "#C8E1FF",
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var _ref32 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M984 104C988 104 988 112 992 112C996 112 996 104 1000 104C1004 104 1004 112 1008 112C1012 112 1012 104 1016 104C1020 104 1020 112 1024 112",
  stroke: "#2188FF",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var _ref33 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M159.825 325.932L152.909 337.939L145.993 325.932L159.825 325.932Z",
  stroke: "#2188FF",
  strokeWidth: 2,
  strokeLinejoin: "round"
});

var _ref34 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "clip0"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  width: 250,
  height: 248,
  fill: "white",
  transform: "translate(0 14)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "clip1"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  width: 250,
  height: 248,
  fill: "white",
  transform: "translate(377 173)"
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
  id: "clip2"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
  width: 250,
  height: 248,
  fill: "white",
  transform: "translate(818 112)"
})));

var SvgComponent = function SvgComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 1068,
    height: 426,
    viewBox: "0 0 1068 426",
    fill: "none"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref30, _ref31, _ref32, _ref33, _ref34);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@githubprimer/octicons-react":
/*!***********************************************!*\
  !*** external "@githubprimer/octicons-react" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@githubprimer/octicons-react");

/***/ }),

/***/ "@primer/components":
/*!*************************************!*\
  !*** external "@primer/components" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@primer/components");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map