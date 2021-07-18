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
/******/ 	__webpack_require__.p = "/Applications/MAMP/htdocs/profnastil/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/.default/components/bitrix/menu/vue-navigation/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_smooth_reflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-smooth-reflow */ "./node_modules/vue-smooth-reflow/dist/vue-smooth-reflow.min.js");
/* harmony import */ var vue_smooth_reflow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_smooth_reflow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contacts */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue");
/* harmony import */ var _PagesMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PagesMenu */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue");
/* harmony import */ var _SubmenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmenuItem */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue");
/* harmony import */ var _UserBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserBlock */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue");
/* harmony import */ var _GoBackButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GoBackButton */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Projects */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var menuLinks = window.menuItems;
console.log(menuLinks);
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vue_smooth_reflow__WEBPACK_IMPORTED_MODULE_1___default.a],
  data: function data() {
    return {
      menuItems: window.menuItems,
      currentPosition: [],
      levels: [],
      currentLevel: [],
      prevLevelDepth: 0,
      currentLevelDepth: 0
    };
  },
  computed: {
    transitionName: function transitionName() {
      return 'slide-' + (this.currentLevelDepth > this.prevLevelDepth ? 'left' : 'right');
    }
  },
  methods: {
    navigate: function navigate(path) {
      this.currentPosition = path;
      this.recalculateItems();
    },
    recalculateItems: function recalculateItems() {
      var _this = this;

      var items = this.menuItems;
      var levels = [];
      levels.push(this.getLevel([], null, items));
      this.currentPosition.forEach(function (index, depth) {
        var path = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this.currentPosition).slice(0, depth + 1);

        var label = items[index] && items[index].label || null;
        items = items[index] && items[index].items || [];
        levels.push(_this.getLevel(path, label, items));
      });
      this.levels = levels;
      this.currentLevel = levels[levels.length - 1];
      this.prevLevelDepth = this.currentLevelDepth;
      this.currentLevelDepth = levels.length - 1;
    },
    getLevel: function getLevel(path, label, items) {
      console.log(items);
      return {
        path: path,
        label: label,
        items: items.map(function (item, index) {
          return {
            path: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(path), [index]),
            label: item.label,
            url: item.url,
            hasItems: item.items && item.items.length > 0
          };
        })
      };
    },
    getPathName: function getPathName(path) {
      if (!path || path.length < 0) {
        return 0;
      }

      return [0].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(path)).join('-');
    }
  },
  mounted: function mounted() {
    this.recalculateItems();
  },
  components: {
    Contacts: _Contacts__WEBPACK_IMPORTED_MODULE_2__["default"],
    PagesMenu: _PagesMenu__WEBPACK_IMPORTED_MODULE_3__["default"],
    SubmenuItem: _SubmenuItem__WEBPACK_IMPORTED_MODULE_4__["default"],
    UserBlock: _UserBlock__WEBPACK_IMPORTED_MODULE_5__["default"],
    GoBackButton: _GoBackButton__WEBPACK_IMPORTED_MODULE_6__["default"],
    Projects: _Projects__WEBPACK_IMPORTED_MODULE_7__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialLinks */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Contacts',
  components: {
    SocialLinks: _SocialLinks__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemIcon */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "GoBackButton",
  props: {
    prevSectionName: {
      type: String
    }
  },
  components: {
    ItemIcon: _ItemIcon__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var SITE_TEMPLATE_PATH = window.bxConstants.SITE_TEMPLATE_PATH;
var sectionNameToIcon = {
  "Каталог": "icon_burger",
  "Избранное": "icon_like",
  "Сравнение": "icon_compare",
  "Корзина": "icon_cart",
  "Назад": "icon_go-back"
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ItemIcon",
  data: function data() {
    return {
      SITE_TEMPLATE_PATH: SITE_TEMPLATE_PATH
    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    currentLevelDepth: {
      type: Number
    },
    src: {
      type: String
    }
  },
  methods: {
    getIconFromLabel: function getIconFromLabel(label) {
      return "#".concat(sectionNameToIcon[label]);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PagesMenu",
  data: function data() {
    return {
      pages: [{
        name: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438",
        link: "/"
      }, {
        name: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043F\u043E\u0434\u044A\u0435\u043C",
        link: "/"
      }, {
        name: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442",
        link: "/"
      }, {
        name: "\u0412\u043E\u043F\u0440\u043E\u0441-\u043E\u0442\u0432\u0435\u0442",
        link: "/"
      }, {
        name: "\u041A\u0430\u043A \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u0442\u043E\u0432\u0430\u0440",
        link: "/"
      }, {
        name: "\u041F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
        link: "/"
      }, {
        name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        link: "/"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
var SITE_TEMPLATE_PATH = window.bxConstants.SITE_TEMPLATE_PATH;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Projects",
  data: function data() {
    return {
      SITE_TEMPLATE_PATH: SITE_TEMPLATE_PATH,
      items: [{
        name: "iPort",
        logoSrc: "/images/projects-logos/iport-dark.svg"
      }, {
        name: "NBCom",
        logoSrc: "/images/projects-logos/nb-dark.png"
      }, {
        name: "Sony Centre",
        logoSrc: "/images/projects-logos/sony-dark.svg"
      }, {
        name: "Samsung Store",
        logoSrc: "/images/projects-logos/samsung-dark.svg"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var SITE_TEMPLATE_PATH = window.bxConstants.SITE_TEMPLATE_PATH;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [// {
      //   name: `Telegram`,
      //   link: `/`,
      //   icon: `${SITE_TEMPLATE_PATH}/images/social/telegram.svg`,
      // },
      {
        name: "Whatsapp",
        link: "https://api.whatsapp.com/send/?phone=74242777566",
        icon: "".concat(SITE_TEMPLATE_PATH, "/images/social/whatsapp.svg")
      } // {
      //   name: `Viber`,
      //   link: `/`,
      //   icon: `${SITE_TEMPLATE_PATH}/images/social/viber.svg`,
      // },
      ]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SubmenuItem",
  props: ["item", "currentLevelDepth"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js ***!
  \*****************************************************************/
/*! exports provided: disableBodyScroll, clearAllBodyScrollLocks, enableBodyScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return disableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAllBodyScrollLocks", function() { return clearAllBodyScrollLocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return enableBodyScroll; });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  } else if (!locks.length) {
    restoreOverflowSetting();
  }
};



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=template&id=28c85965&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=template&id=28c85965& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "mobile-nav",
      on: {
        click: function($event) {
          $event.stopPropagation()
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "transition-group",
            {
              ref: "levels",
              staticClass: "mobile-nav__levels mobile-main-menu",
              attrs: { name: _vm.transitionName, tag: "nav" }
            },
            [
              _c(
                "div",
                {
                  key: _vm.getPathName(_vm.currentLevel.path),
                  ref: "level-" + _vm.getPathName(_vm.currentLevel.path),
                  staticClass: "mobile-nav__inner pb-5",
                  attrs: { tabindex: "-1" }
                },
                [
                  _vm.currentLevel
                    ? _c(
                        "div",
                        {
                          staticClass: "mobile-nav__level mobile-nav__item p-0",
                          attrs: {
                            "aria-labelledby":
                              "mobile-nav-level-label-" +
                              _vm.getPathName(_vm.currentLevel.path),
                            role: "group"
                          }
                        },
                        [
                          _c(
                            "ul",
                            {
                              staticClass: "mobile-main-menu__list list-reset"
                            },
                            [
                              _vm.currentLevelDepth > 0
                                ? _c("GoBackButton", {
                                    attrs: {
                                      prevSectionName:
                                        _vm.levels[_vm.currentLevelDepth - 1]
                                          .label
                                    },
                                    on: {
                                      navigate: function($event) {
                                        _vm.navigate(
                                          _vm.currentLevel.path.slice(
                                            0,
                                            _vm.currentLevelDepth - 1
                                          )
                                        )
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._l(_vm.currentLevel.items, function(item) {
                                return _c("SubmenuItem", {
                                  key: item.path.join(),
                                  ref: "link",
                                  refInFor: true,
                                  attrs: {
                                    item: item,
                                    currentLevelDepth: _vm.currentLevelDepth
                                  },
                                  on: {
                                    navigate: function($event) {
                                      return _vm.navigate(item.path)
                                    }
                                  }
                                })
                              })
                            ],
                            2
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.currentLevelDepth
                    ? _c(
                        "div",
                        { staticClass: "mobile-nav__item" },
                        [_c("Contacts")],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.currentLevelDepth
                    ? _c(
                        "div",
                        { staticClass: "mobile-nav__item" },
                        [_c("PagesMenu")],
                        1
                      )
                    : _vm._e()
                ]
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=template&id=c2443082&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=template&id=c2443082& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "menu-mobile-contacts d-flex flex-column align-items-center"
    },
    [
      _c("div", { staticClass: "menu-mobile-contacts__item" }, [
        _c(
          "a",
          {
            staticClass: "menu-mobile-contacts__link",
            attrs: { href: "tel:+74242777566", title: "Позвонить нам" }
          },
          [
            _c("svg", { attrs: { width: "16", height: "16" } }, [
              _c("use", { attrs: { "xlink:href": "#icon_phone" } })
            ]),
            _vm._v("\n      +7 (4242) 777-566\n    ")
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "menu-mobile-contacts__item" }, [
        _c(
          "a",
          {
            staticClass: "menu-mobile-contacts__link",
            attrs: {
              href: "mailTo:tdprofnastil@mail.ru",
              title: "Написать нам на email"
            }
          },
          [
            _c("svg", { attrs: { width: "16", height: "16" } }, [
              _c("use", { attrs: { "xlink:href": "#icon_letter" } })
            ]),
            _vm._v("\n      tdprofnastil@mail.ru\n    ")
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "menu-mobile-contacts__item" },
        [_c("SocialLinks")],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=template&id=7145a726&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=template&id=7145a726& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { staticClass: "mobile-main-menu__item mobile-main-menu__item_muted" },
    [
      _c(
        "button",
        {
          ref: "back",
          staticClass: "mobile-main-menu__link",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.$emit("navigate")
            }
          }
        },
        [
          _c("ItemIcon", { attrs: { name: "Назад" } }),
          _vm._v(
            "\n\n     " +
              _vm._s(_vm.prevSectionName ? _vm.prevSectionName : "Назад") +
              "\n  "
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=template&id=4b205d18&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=template&id=4b205d18& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mobile-main-menu__icon" }, [
    _vm.currentLevelDepth
      ? _c("img", {
          staticClass: "mobile-main-menu__icon",
          attrs: {
            src: _vm.src
              ? _vm.src
              : _vm.SITE_TEMPLATE_PATH + "/images/demo/iphone.svg",
            alt: "Изображение раздела «" + _vm.name + "»",
            loading: "lazy",
            width: "24",
            height: "24"
          }
        })
      : _c("svg", { attrs: { width: "24", height: "24" } }, [
          _c("use", { attrs: { "xlink:href": _vm.getIconFromLabel(_vm.name) } })
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=template&id=270e36f2&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=template&id=270e36f2& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "mobile-pages-menu", attrs: { role: "navigation" } },
    [
      _c("h4", { staticClass: "mobile-pages-menu__title" }, [
        _vm._v("\n    Покупателям\n  ")
      ]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "mobile-pages-menu__list list-reset" },
        _vm._l(_vm.pages, function(ref) {
          var name = ref.name
          var link = ref.link
          return _c("li", { staticClass: "mobile-pages-menu__item" }, [
            _c(
              "a",
              {
                key: link,
                staticClass: "mobile-pages-menu__link",
                attrs: { href: link, title: "Перейти к странице " + name }
              },
              [_vm._v(_vm._s(name))]
            )
          ])
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=template&id=ea999734&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=template&id=ea999734& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "dl",
    { staticClass: "row align-items-center justify-content-center" },
    [
      _c("dt", { staticClass: "col-12 text-center mb-3" }, [
        _vm._v("Наши проекты")
      ]),
      _vm._v(" "),
      _vm._l(_vm.items, function(ref) {
        var name = ref.name
        var logoSrc = ref.logoSrc
        return _c("dd", { staticClass: "col-6 col-sm text-center mb-4" }, [
          _c("img", {
            attrs: {
              src: _vm.SITE_TEMPLATE_PATH + logoSrc,
              alt: "Логотип компании «" + name + "»",
              loading: "lazy"
            }
          })
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=template&id=0e7cca10&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=template&id=0e7cca10& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "dl",
    { staticClass: "social row mb-0" },
    _vm._l(_vm.items, function(item) {
      return _c("dd", { staticClass: "col mb-0" }, [
        _c(
          "a",
          {
            staticClass: "social__link",
            attrs: {
              href: item.link,
              title: "Перейти в наш «" + item.name + "»"
            }
          },
          [
            _c("img", {
              staticClass: "social__icon",
              attrs: {
                src: item.icon,
                alt: "Лого " + item.name,
                loading: "lazy",
                width: "24",
                height: "24"
              }
            })
          ]
        )
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=template&id=8886a3d4&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=template&id=8886a3d4& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "mobile-main-menu__item",
      class: {
        "mobile-main-menu__item_catalog": _vm.item.label === "Каталог",
        "mobile-main-menu__item_sales": _vm.item.label === "Акции"
      }
    },
    [
      _vm.item.hasItems
        ? _c(
            "button",
            {
              ref: "link",
              staticClass: "mobile-main-menu__link",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.$emit("navigate")
                }
              }
            },
            [_vm._v("\n    " + _vm._s(_vm.item.label) + "\n  ")]
          )
        : _c(
            "a",
            {
              staticClass: "mobile-main-menu__link",
              attrs: { href: "", href: _vm.item.url }
            },
            [_vm._v("\n    " + _vm._s(_vm.item.label) + "\n  ")]
          )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=template&id=e3637574&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=template&id=e3637574& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "menu-user-block" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6 text-center" }, [
        _c(
          "a",
          {
            staticClass: "menu-user-block__item menu-user-block__item_personal",
            attrs: { href: "" }
          },
          [
            _c("svg", { attrs: { width: "20", height: "20" } }, [
              _c("use", { attrs: { "xlink:href": "#icon_user" } })
            ]),
            _vm._v("\n        Личный кабинет\n      ")
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 text-center" }, [
      _c(
        "a",
        {
          staticClass:
            "menu-user-block__item menu-user-block__item_registration",
          attrs: { href: "" }
        },
        [_vm._v("\n        Регистрация\n      ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-6 text-center border-end border-top" }, [
        _c(
          "a",
          {
            staticClass:
              "menu-user-block__item menu-user-block__item_order-list",
            attrs: { href: "" }
          },
          [_vm._v("\n        Мои заказы\n      ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6 text-center border-top" }, [
        _c(
          "a",
          {
            staticClass: "menu-user-block__item menu-user-block__item_bonuses",
            attrs: { href: "" }
          },
          [_vm._v("\n        100 баллов\n      ")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-smooth-reflow/dist/vue-smooth-reflow.min.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-smooth-reflow/dist/vue-smooth-reflow.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=44)}([function(t,e,n){var r=n(28)("wks"),o=n(14),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(1),o=n(7),i=n(3),u=n(19),s=n(24),f=function(t,e,n){var a,c,l,p,v=t&f.F,h=t&f.G,y=t&f.S,d=t&f.P,m=t&f.B,g=h?r:y?r[e]||(r[e]={}):(r[e]||{}).prototype,b=h?o:o[e]||(o[e]={}),S=b.prototype||(b.prototype={});for(a in h&&(n=e),n)l=((c=!v&&g&&void 0!==g[a])?g:n)[a],p=m&&c?s(l,r):d&&"function"==typeof l?s(Function.call,l):l,g&&u(g,a,l,t&f.U),b[a]!=l&&i(b,a,p),d&&S[a]!=l&&(S[a]=l)};r.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e,n){var r=n(4),o=n(13);t.exports=n(8)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(12),o=n(34),i=n(23),u=Object.defineProperty;e.f=n(8)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(37),o=n(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(25),o=n(17);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports={}},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=!1},function(t,e,n){var r=n(1),o=n(3),i=n(6),u=n(14)("src"),s=Function.toString,f=(""+s).split("toString");n(7).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var a="function"==typeof n;a&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(a&&(i(n,u)||o(n,u,t[e]?""+t[e]:f.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||s.call(this)})},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(47);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(22),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(28)("keys"),o=n(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(7),o=n(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(18)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(4).f,o=n(6),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(0)("unscopables"),o=Array.prototype;void 0==o[r]&&n(3)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";var r=n(18),o=n(2),i=n(19),u=n(3),s=n(15),f=n(48),a=n(30),c=n(52),l=n(0)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,h,y,d,m){f(n,e,h);var g,b,S,x=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",E="values"==y,O=!1,j=t.prototype,_=j[l]||j["@@iterator"]||y&&j[y],T=_||x(y),A=y?E?x("entries"):T:void 0,P="Array"==e&&j.entries||_;if(P&&(S=c(P.call(new t)))!==Object.prototype&&S.next&&(a(S,w,!0),r||"function"==typeof S[l]||u(S,l,v)),E&&_&&"values"!==_.name&&(O=!0,T=function(){return _.call(this)}),r&&!m||!p&&!O&&j[l]||u(j,l,T),s[e]=T,s[w]=v,y)if(g={values:E?T:x("values"),keys:d?T:x("keys"),entries:A},m)for(b in g)b in j||i(j,b,g[b]);else o(o.P+o.F*(p||O),e,g);return g}},function(t,e,n){t.exports=!n(8)&&!n(9)(function(){return 7!=Object.defineProperty(n(35)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(5),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(12),o=n(49),i=n(29),u=n(27)("IE_PROTO"),s=function(){},f=function(){var t,e=n(35)("iframe"),r=i.length;for(e.style.display="none",n(51).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(6),o=n(11),i=n(38)(!1),u=n(27)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),f=0,a=[];for(n in s)n!=u&&r(s,n)&&a.push(n);for(;e.length>f;)r(s,n=e[f++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(11),o=n(26),i=n(50);t.exports=function(t){return function(e,n,u){var s,f=r(e),a=o(f.length),c=i(u,a);if(t&&n!=n){for(;a>c;)if((s=f[c++])!=s)return!0}else for(;a>c;c++)if((t||c in f)&&f[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){"use strict";var r=n(31),o=n(65),i=n(15),u=n(11);t.exports=n(33)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(1),o=n(7),i=n(18),u=n(42),s=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(0)},function(t,e,n){var r=n(37),o=n(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){"use strict";n.r(e);n(45),n(53),n(60),n(61),n(39),n(66),n(68),n(70),n(74),n(75),n(80);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o={methods:{$smoothReflow:function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._smoothElements.push(new a(t))}.bind(this);Array.isArray(t)?t.forEach(e):e(t)},$unsmoothReflow:function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f(),e=this.$el,n=this._smoothElements.findIndex(function(n){return u(e,n.options.el)===u(e,t.el)});if(-1===n)return void console.error("VSR_ERROR: $unsmoothReflow failed due to invalid el option");this._smoothElements[n].scheduleRemoval()}.bind(this);Array.isArray(t)?t.forEach(e):e(t)}},beforeMount:function(){var t=this;this._smoothElements=[],this._endListener=function(e){var n=!0,r=!1,o=void 0;try{for(var i,u=t._smoothElements[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){i.value.endListener(e)}}catch(t){r=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}}},mounted:function(){this.$el.addEventListener("transitionend",this._endListener,{passive:!0})},destroyed:function(){this.$el.removeEventListener("transitionend",this._endListener,{passive:!0})},beforeUpdate:function(){this.$el.addEventListener("transitionend",this._endListener,{passive:!0}),i(this);var t=!0,e=!1,n=void 0;try{for(var r,o=this._smoothElements[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var s=r.value,f=u(this.$el,s.options.el);s.setSmoothElement(f),s.setBeforeValues()}}catch(t){e=!0,n=t}finally{try{t||null==o.return||o.return()}finally{if(e)throw n}}},updated:function(){var t=this;this.$nextTick(function(){var e=!0,n=!1,r=void 0;try{for(var o,s=t._smoothElements[Symbol.iterator]();!(e=(o=s.next()).done);e=!0){var f=o.value,a=u(t.$el,f.options.el);f.setSmoothElement(a),f.doSmoothReflow()}}catch(t){n=!0,r=t}finally{try{e||null==s.return||s.return()}finally{if(n)throw r}}i(t)})}};function i(t){for(var e=t._smoothElements.length;e--;){var n=t._smoothElements[e];n.isRemoved&&(n.stopTransition(),t._smoothElements.splice(e,1))}}function u(t,e){return!t||t instanceof Node&&t.nodeType===Node.COMMENT_NODE?null:null===e?t:function(t,e){return"string"==typeof e?t.matches(e)?t:t.querySelector(e):e}(t,e)}var s={INACTIVE:"INACTIVE",ACTIVE:"ACTIVE"},f=function(){return{el:null,property:"height",transitionEvent:null,hideOverflow:!0,debug:!1}},a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=f();Object.assign(n,e);var r=this.parsePropertyOption(n.property);n.transition||(n.transition=r.map(function(t){return"".concat(t," .5s")}).join(","));var o={$smoothEl:null,properties:r,beforeRect:{},state:s.INACTIVE,isRemoved:!1};Object.assign(this,{options:n},o),this.endListener=this.endListener.bind(this),this.debug=this.debug.bind(this)}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"setSmoothElement",value:function(t){this.$smoothEl=t}},{key:"transitionTo",value:function(t){this.state=t}},{key:"parsePropertyOption",value:function(t){return"string"==typeof t?[t]:Array.isArray(t)?t:[]}},{key:"setBeforeValues",value:function(){var t=this.$smoothEl;if(this.beforeRect={},t){var e=window.getComputedStyle(t)||{},n=e.transition,r=e.overflowX,o=e.overflowY;this.computedTransition=n,this.overflowX=r,this.overflowY=o,this.beforeRect=c(t),this.state===s.ACTIVE&&(this.stopTransition(),this.debug("Transition was interrupted."))}}},{key:"didValuesChange",value:function(t,e){var n=t,r=e;if(0===Object.keys(t).length)return!1;var o=!0,i=!1,u=void 0;try{for(var s,f=this.properties[Symbol.iterator]();!(o=(s=f.next()).done);o=!0){var a=s.value;if("transform"===a&&(n.top!==r.top||n.left!==r.left))return!0;if(n[a]!==r[a])return!0}}catch(t){i=!0,u=t}finally{try{o||null==f.return||f.return()}finally{if(i)throw u}}return!1}},{key:"doSmoothReflow",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data update",e=this.$smoothEl;if(!e)return this.debug("Could not find registered el to perform doSmoothReflow."),void this.transitionTo(s.INACTIVE);if(this.state!==s.ACTIVE){var n=this.beforeRect,r=this.properties,o=this.options,i=this.overflowX,u=this.overflowY,f=this.debug;this.transitionTo(s.ACTIVE),f("doSmoothReflow triggered by:","string"==typeof t?t:t.target);var a=c(e);if(!this.didValuesChange(n,a))return f("Property values did not change."),void this.transitionTo(s.INACTIVE);f("beforeRect",n),f("afterRect",a),this.saveOverflowValues(e,i,u);var l=!0,p=!1,v=void 0;try{for(var h,y=r[Symbol.iterator]();!(l=(h=y.next()).done);l=!0){var d=h.value;if("transform"===d){var m=n.left-a.left,g=n.top-a.top;e.style.transform="translate(".concat(m,"px, ").concat(g,"px)")}else e.style[d]=n[d]+"px"}}catch(t){p=!0,v=t}finally{try{l||null==y.return||y.return()}finally{if(p)throw v}}e.offsetHeight,e.style.transition=[this.computedTransition,o.transition].filter(function(t){return t}).join(",");var b=!0,S=!1,x=void 0;try{for(var w,E=r[Symbol.iterator]();!(b=(w=E.next()).done);b=!0){var O=w.value;"transform"===O?e.style.transform="":e.style[O]=a[O]+"px"}}catch(t){S=!0,x=t}finally{try{b||null==E.return||E.return()}finally{if(S)throw x}}}}},{key:"endListener",value:function(t){var e=this.$smoothEl,n=this.properties;e===t.target?n.includes(t.propertyName)&&(this.stopTransition(),this.hasRegisteredEventEmitter()&&this.setBeforeValues()):this.isRegisteredEventEmitter(e,t)&&this.doSmoothReflow(t)}},{key:"hasRegisteredEventEmitter",value:function(){var t=this.options.transitionEvent;return null!==t&&Object.keys(t).length>0}},{key:"isRegisteredEventEmitter",value:function(t,e){if(!this.hasRegisteredEventEmitter())return!1;var n=e.target,r=this.options.transitionEvent,o=r.selector,i=r.propertyName;if(null!=i&&i!==e.propertyName)return!1;if(null!=o&&!n.matches(o))return!1;if(-1===this.properties.indexOf("transform")){var u=!1,s=e.composedPath?e.composedPath():[],f=!0,a=!1,c=void 0;try{for(var l,p=s[Symbol.iterator]();!(f=(l=p.next()).done);f=!0){if(t===l.value){u=!0;break}}}catch(t){a=!0,c=t}finally{try{f||null==p.return||p.return()}finally{if(a)throw c}}if(!u)return!1}return!0}},{key:"saveOverflowValues",value:function(t,e,n){this.options.hideOverflow&&(this.overflowX=e,this.overflowY=n,t.style.overflowX="hidden",t.style.overflowY="hidden")}},{key:"restoreOverflowValues",value:function(t){var e=this.options,n=this.overflowX,r=this.overflowY;e.hideOverflow&&(t.style.overflowX=n,t.style.overflowY=r)}},{key:"stopTransition",value:function(){var t=this.$smoothEl,e=this.properties,n=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var f=i.value;t.style[f]=null}}catch(t){r=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}this.restoreOverflowValues(t),t.style.transition=null,this.transitionTo(s.INACTIVE)}},{key:"scheduleRemoval",value:function(){this.isRemoved=!0}},{key:"debug",value:function(){if(this.options.debug){var t=["VSR_DEBUG:"].concat(Array.from(arguments));console.log.apply(null,t)}}}]),t}(),c=function(t){t.style.overflow="hidden";var e=t.getBoundingClientRect(),n=e.top,r=e.right,o=e.bottom,i=e.left,u=e.width,s=e.height,f=e.x,a=e.y;return t.style.overflow=null,{top:n,right:r,bottom:o,left:i,width:u,height:s,x:f,y:a}};"undefined"!=typeof Element&&Element.prototype&&!Element.prototype.matches&&(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1}),e.default=o},function(t,e,n){"use strict";var r=n(46)(!0);n(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(22),o=n(17);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),f=r(n),a=s.length;return f<0||f>=a?t?"":void 0:(i=s.charCodeAt(f))<55296||i>56319||f+1===a||(u=s.charCodeAt(f+1))<56320||u>57343?t?s.charAt(f):i:t?s.slice(f,f+2):u-56320+(i-55296<<10)+65536}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(36),o=n(13),i=n(30),u={};n(3)(u,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(12),i=n(10);t.exports=n(8)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),s=u.length,f=0;s>f;)r.f(t,n=u[f++],e[n]);return t}},function(t,e,n){var r=n(22),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(6),o=n(16),i=n(27)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){"use strict";var r=n(24),o=n(2),i=n(16),u=n(54),s=n(55),f=n(26),a=n(56),c=n(57);o(o.S+o.F*!n(59)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=i(t),v="function"==typeof this?this:Array,h=arguments.length,y=h>1?arguments[1]:void 0,d=void 0!==y,m=0,g=c(p);if(d&&(y=r(y,h>2?arguments[2]:void 0,2)),void 0==g||v==Array&&s(g))for(n=new v(e=f(p.length));e>m;m++)a(n,m,d?y(p[m],m):p[m]);else for(l=g.call(p),n=new v;!(o=l.next()).done;m++)a(n,m,d?u(l,y,[o.value,m],!0):o.value);return n.length=m,n}})},function(t,e,n){var r=n(12);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(15),o=n(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){"use strict";var r=n(4),o=n(13);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(58),o=n(0)("iterator"),i=n(15);t.exports=n(7).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(20),o=n(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(2),o=n(38)(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(31)("includes")},function(t,e,n){"use strict";var r=n(2),o=n(62);r(r.P+r.F*n(64)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(63),o=n(17);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},function(t,e,n){var r=n(5),o=n(20),i=n(0)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){var r=n(0)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(16),o=n(10);n(67)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(2),o=n(7),i=n(9);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(2);r(r.S+r.F,"Object",{assign:n(69)})},function(t,e,n){"use strict";var r=n(10),o=n(32),i=n(21),u=n(16),s=n(25),f=Object.assign;t.exports=!f||n(9)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=f({},t)[n]||Object.keys(f({},e)).join("")!=r})?function(t,e){for(var n=u(t),f=arguments.length,a=1,c=o.f,l=i.f;f>a;)for(var p,v=s(arguments[a++]),h=c?r(v).concat(c(v)):r(v),y=h.length,d=0;y>d;)l.call(v,p=h[d++])&&(n[p]=v[p]);return n}:f},function(t,e,n){"use strict";var r=n(2),o=n(71)(6),i="findIndex",u=!0;i in[]&&Array(1)[i](function(){u=!1}),r(r.P+r.F*u,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(31)(i)},function(t,e,n){var r=n(24),o=n(25),i=n(16),u=n(26),s=n(72);t.exports=function(t,e){var n=1==t,f=2==t,a=3==t,c=4==t,l=6==t,p=5==t||l,v=e||s;return function(e,s,h){for(var y,d,m=i(e),g=o(m),b=r(s,h,3),S=u(g.length),x=0,w=n?v(e,S):f?v(e,0):void 0;S>x;x++)if((p||x in g)&&(d=b(y=g[x],x,m),t))if(n)w[x]=d;else if(d)switch(t){case 3:return!0;case 5:return y;case 6:return x;case 2:w.push(y)}else if(c)return!1;return l?-1:a||c?c:w}}},function(t,e,n){var r=n(73);t.exports=function(t,e){return new(r(t))(e)}},function(t,e,n){var r=n(5),o=n(40),i=n(0)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){n(41)("asyncIterator")},function(t,e,n){"use strict";var r=n(1),o=n(6),i=n(8),u=n(2),s=n(19),f=n(76).KEY,a=n(9),c=n(28),l=n(30),p=n(14),v=n(0),h=n(42),y=n(41),d=n(77),m=n(40),g=n(12),b=n(5),S=n(11),x=n(23),w=n(13),E=n(36),O=n(78),j=n(79),_=n(4),T=n(10),A=j.f,P=_.f,k=O.f,R=r.Symbol,L=r.JSON,I=L&&L.stringify,M=v("_hidden"),C=v("toPrimitive"),N={}.propertyIsEnumerable,V=c("symbol-registry"),F=c("symbols"),$=c("op-symbols"),D=Object.prototype,G="function"==typeof R,Y=r.QObject,B=!Y||!Y.prototype||!Y.prototype.findChild,X=i&&a(function(){return 7!=E(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=A(D,e);r&&delete D[e],P(t,e,n),r&&t!==D&&P(D,e,r)}:P,H=function(t){var e=F[t]=E(R.prototype);return e._k=t,e},U=G&&"symbol"==typeof R.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof R},W=function(t,e,n){return t===D&&W($,e,n),g(t),e=x(e,!0),g(n),o(F,e)?(n.enumerable?(o(t,M)&&t[M][e]&&(t[M][e]=!1),n=E(n,{enumerable:w(0,!1)})):(o(t,M)||P(t,M,w(1,{})),t[M][e]=!0),X(t,e,n)):P(t,e,n)},q=function(t,e){g(t);for(var n,r=d(e=S(e)),o=0,i=r.length;i>o;)W(t,n=r[o++],e[n]);return t},z=function(t){var e=N.call(this,t=x(t,!0));return!(this===D&&o(F,t)&&!o($,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,M)&&this[M][t])||e)},J=function(t,e){if(t=S(t),e=x(e,!0),t!==D||!o(F,e)||o($,e)){var n=A(t,e);return!n||!o(F,e)||o(t,M)&&t[M][e]||(n.enumerable=!0),n}},K=function(t){for(var e,n=k(S(t)),r=[],i=0;n.length>i;)o(F,e=n[i++])||e==M||e==f||r.push(e);return r},Q=function(t){for(var e,n=t===D,r=k(n?$:S(t)),i=[],u=0;r.length>u;)!o(F,e=r[u++])||n&&!o(D,e)||i.push(F[e]);return i};G||(s((R=function(){if(this instanceof R)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===D&&e.call($,n),o(this,M)&&o(this[M],t)&&(this[M][t]=!1),X(this,t,w(1,n))};return i&&B&&X(D,t,{configurable:!0,set:e}),H(t)}).prototype,"toString",function(){return this._k}),j.f=J,_.f=W,n(43).f=O.f=K,n(21).f=z,n(32).f=Q,i&&!n(18)&&s(D,"propertyIsEnumerable",z,!0),h.f=function(t){return H(v(t))}),u(u.G+u.W+u.F*!G,{Symbol:R});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)v(Z[tt++]);for(var et=T(v.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!G,"Symbol",{for:function(t){return o(V,t+="")?V[t]:V[t]=R(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var e in V)if(V[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!G,"Object",{create:function(t,e){return void 0===e?E(t):q(E(t),e)},defineProperty:W,defineProperties:q,getOwnPropertyDescriptor:J,getOwnPropertyNames:K,getOwnPropertySymbols:Q}),L&&u(u.S+u.F*(!G||a(function(){var t=R();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(b(e)||void 0!==t)&&!U(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!U(e))return e}),r[1]=e,I.apply(L,r)}}),R.prototype[C]||n(3)(R.prototype,C,R.prototype.valueOf),l(R,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(14)("meta"),o=n(5),i=n(6),u=n(4).f,s=0,f=Object.isExtensible||function(){return!0},a=!n(9)(function(){return f(Object.preventExtensions({}))}),c=function(t){u(t,r,{value:{i:"O"+ ++s,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";c(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;c(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!i(t,r)&&c(t),t}}},function(t,e,n){var r=n(10),o=n(32),i=n(21);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,s=n(t),f=i.f,a=0;s.length>a;)f.call(t,u=s[a++])&&e.push(u);return e}},function(t,e,n){var r=n(11),o=n(43).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(21),o=n(13),i=n(11),u=n(23),s=n(6),f=n(34),a=Object.getOwnPropertyDescriptor;e.f=n(8)?a:function(t,e){if(t=i(t),e=u(e,!0),f)try{return a(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){for(var r=n(39),o=n(10),i=n(19),u=n(1),s=n(3),f=n(15),a=n(0),c=a("iterator"),l=a("toStringTag"),p=f.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(v),y=0;y<h.length;y++){var d,m=h[y],g=v[m],b=u[m],S=b&&b.prototype;if(S&&(S[c]||s(S,c,p),S[l]||s(S,l,m),f[m]=p,g))for(d in r)S[d]||i(S,d,r[d],!0)}}]).default});

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/app.js":
/*!********************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/app.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profnastil_redesign_src_js_catalog_dropdown_catalog_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown */ "./templates/profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown.js");
/* harmony import */ var _profnastil_redesign_src_js_catalog_dropdown_mobile_menus_sync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../profnastil-redesign/src/js/catalog-dropdown/mobile-menus-sync */ "./templates/profnastil-redesign/src/js/catalog-dropdown/mobile-menus-sync.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");




var _window = window,
    Vue = _window.Vue;
document.addEventListener("DOMContentLoaded", function () {
  var menuVueInstance = new Vue({
    render: function render(h) {
      return h(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }
  });
  var popUpElement = document.querySelector(".m-catalog-dropdown"); // Setting actions for opening / closing bootstrap dropdown

  var catalogDropdown = new _profnastil_redesign_src_js_catalog_dropdown_catalog_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"](".js-catalog-mobile-dropdown-wrapper", "#dropdownMobileMenuButton", function () {
    return Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["disableBodyScroll"])(popUpElement);
  }, function () {
    return Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["enableBodyScroll"])(popUpElement);
  });
  catalogDropdown.init();
  menuVueInstance.$mount("#vue-navigation");
});

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue":
/*!********************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_28c85965___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=28c85965& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=template&id=28c85965&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_28c85965___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_28c85965___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=template&id=28c85965&":
/*!***************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=template&id=28c85965& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_28c85965___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=28c85965& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/App.vue?vue&type=template&id=28c85965&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_28c85965___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_28c85965___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue":
/*!*************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contacts_vue_vue_type_template_id_c2443082___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contacts.vue?vue&type=template&id=c2443082& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=template&id=c2443082&");
/* harmony import */ var _Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contacts.vue?vue&type=script&lang=js& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contacts_vue_vue_type_template_id_c2443082___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contacts_vue_vue_type_template_id_c2443082___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contacts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=template&id=c2443082&":
/*!********************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=template&id=c2443082& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_c2443082___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contacts.vue?vue&type=template&id=c2443082& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Contacts.vue?vue&type=template&id=c2443082&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_c2443082___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contacts_vue_vue_type_template_id_c2443082___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue":
/*!*****************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoBackButton_vue_vue_type_template_id_7145a726___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoBackButton.vue?vue&type=template&id=7145a726& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=template&id=7145a726&");
/* harmony import */ var _GoBackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoBackButton.vue?vue&type=script&lang=js& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoBackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoBackButton_vue_vue_type_template_id_7145a726___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoBackButton_vue_vue_type_template_id_7145a726___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoBackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoBackButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoBackButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=template&id=7145a726&":
/*!************************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=template&id=7145a726& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoBackButton_vue_vue_type_template_id_7145a726___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GoBackButton.vue?vue&type=template&id=7145a726& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/GoBackButton.vue?vue&type=template&id=7145a726&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoBackButton_vue_vue_type_template_id_7145a726___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoBackButton_vue_vue_type_template_id_7145a726___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue":
/*!*************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemIcon_vue_vue_type_template_id_4b205d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemIcon.vue?vue&type=template&id=4b205d18& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=template&id=4b205d18&");
/* harmony import */ var _ItemIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemIcon.vue?vue&type=script&lang=js& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemIcon_vue_vue_type_template_id_4b205d18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemIcon_vue_vue_type_template_id_4b205d18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=template&id=4b205d18&":
/*!********************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=template&id=4b205d18& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemIcon_vue_vue_type_template_id_4b205d18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemIcon.vue?vue&type=template&id=4b205d18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/ItemIcon.vue?vue&type=template&id=4b205d18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemIcon_vue_vue_type_template_id_4b205d18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemIcon_vue_vue_type_template_id_4b205d18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue":
/*!**************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PagesMenu_vue_vue_type_template_id_270e36f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PagesMenu.vue?vue&type=template&id=270e36f2& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=template&id=270e36f2&");
/* harmony import */ var _PagesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PagesMenu.vue?vue&type=script&lang=js& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PagesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PagesMenu_vue_vue_type_template_id_270e36f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PagesMenu_vue_vue_type_template_id_270e36f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PagesMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=template&id=270e36f2&":
/*!*********************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=template&id=270e36f2& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesMenu_vue_vue_type_template_id_270e36f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PagesMenu.vue?vue&type=template&id=270e36f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/PagesMenu.vue?vue&type=template&id=270e36f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesMenu_vue_vue_type_template_id_270e36f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PagesMenu_vue_vue_type_template_id_270e36f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue":
/*!*************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects_vue_vue_type_template_id_ea999734___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=ea999734& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=template&id=ea999734&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projects_vue_vue_type_template_id_ea999734___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Projects_vue_vue_type_template_id_ea999734___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=template&id=ea999734&":
/*!********************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=template&id=ea999734& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_ea999734___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=template&id=ea999734& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/Projects.vue?vue&type=template&id=ea999734&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_ea999734___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_ea999734___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue":
/*!****************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialLinks_vue_vue_type_template_id_0e7cca10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialLinks.vue?vue&type=template&id=0e7cca10& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=template&id=0e7cca10&");
/* harmony import */ var _SocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialLinks.vue?vue&type=script&lang=js& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialLinks_vue_vue_type_template_id_0e7cca10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialLinks_vue_vue_type_template_id_0e7cca10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialLinks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=template&id=0e7cca10&":
/*!***********************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=template&id=0e7cca10& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLinks_vue_vue_type_template_id_0e7cca10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialLinks.vue?vue&type=template&id=0e7cca10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SocialLinks.vue?vue&type=template&id=0e7cca10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLinks_vue_vue_type_template_id_0e7cca10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialLinks_vue_vue_type_template_id_0e7cca10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue":
/*!****************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmenuItem_vue_vue_type_template_id_8886a3d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmenuItem.vue?vue&type=template&id=8886a3d4& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=template&id=8886a3d4&");
/* harmony import */ var _SubmenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmenuItem.vue?vue&type=script&lang=js& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmenuItem_vue_vue_type_template_id_8886a3d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmenuItem_vue_vue_type_template_id_8886a3d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmenuItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmenuItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=template&id=8886a3d4&":
/*!***********************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=template&id=8886a3d4& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmenuItem_vue_vue_type_template_id_8886a3d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmenuItem.vue?vue&type=template&id=8886a3d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/SubmenuItem.vue?vue&type=template&id=8886a3d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmenuItem_vue_vue_type_template_id_8886a3d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmenuItem_vue_vue_type_template_id_8886a3d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue":
/*!**************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserBlock_vue_vue_type_template_id_e3637574___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBlock.vue?vue&type=template&id=e3637574& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=template&id=e3637574&");
/* harmony import */ var _UserBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBlock.vue?vue&type=script&lang=js& */ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserBlock_vue_vue_type_template_id_e3637574___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserBlock_vue_vue_type_template_id_e3637574___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=template&id=e3637574&":
/*!*********************************************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=template&id=e3637574& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_template_id_e3637574___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBlock.vue?vue&type=template&id=e3637574& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./templates/.default/components/bitrix/menu/vue-navigation/src/js/components/UserBlock.vue?vue&type=template&id=e3637574&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_template_id_e3637574___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_template_id_e3637574___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./templates/profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown.js":
/*!***********************************************************************************!*\
  !*** ./templates/profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogDropdown; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var BODY_OVERLAY_CLASSNAME = "menu-is-opened";

var CatalogDropdown = /*#__PURE__*/function () {
  function CatalogDropdown(containerSelector, togglerSelector) {
    var onShowCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    var onHideCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CatalogDropdown);

    console.log(containerSelector);
    this._containerElement = document.querySelector(containerSelector);
    console.log(this._containerElement);
    this._openButtonElement = this._containerElement.querySelector(togglerSelector);
    this._dropdownElement = this._containerElement.querySelector(".js-catalog-dropdown");
    this._onShowCallback = onShowCallback;
    this._onHideCallback = onHideCallback;
    this._onShow = this._onShow.bind(this);
    this._onHide = this._onHide.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CatalogDropdown, [{
    key: "_onShow",
    value: function _onShow() {
      document.body.classList.add(BODY_OVERLAY_CLASSNAME);

      this._onShowCallback();
    }
  }, {
    key: "_onHide",
    value: function _onHide() {
      document.body.classList.remove(BODY_OVERLAY_CLASSNAME);

      this._onHideCallback();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this._openButtonElement.click();
    }
  }, {
    key: "_setHandlers",
    value: function _setHandlers() {
      this._containerElement.addEventListener("shown.bs.dropdown", this._onShow);

      this._containerElement.addEventListener("hidden.bs.dropdown", this._onHide);
    }
  }, {
    key: "init",
    value: function init() {
      this._setHandlers();
    }
  }]);

  return CatalogDropdown;
}();



/***/ }),

/***/ "./templates/profnastil-redesign/src/js/catalog-dropdown/mobile-menus-sync.js":
/*!************************************************************************************!*\
  !*** ./templates/profnastil-redesign/src/js/catalog-dropdown/mobile-menus-sync.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileMenusSync; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var MobileMenusSync = /*#__PURE__*/function () {
  /**
   *
   * @param {object} catalogMenuInstance
   * @param {object} vueMenuInstance
   * @param {string} onPageMenuSelector
   * @param {string} popUpMenuSelector
   */
  function MobileMenusSync(catalogMenuInstance, vueMenuInstance, onPageMenuSelector, popUpMenuSelector) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MobileMenusSync);

    this._catalogMenuInstance = catalogMenuInstance;
    this._vueMenuInstance = vueMenuInstance;
    this._onPageMenuElement = document.querySelector(onPageMenuSelector);
    this._popUpMenuElement = document.querySelector(popUpMenuSelector);
    this._onPageMenuLinkElements = this._onPageMenuElement.querySelectorAll(".js-sync-with-popup");
    this._popUpTogglerElement = this._popUpMenuElement.querySelector("[data-bs-toggle]");
    this._onLinkClick = this._onLinkClick.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MobileMenusSync, [{
    key: "_openPopUpMenu",
    value: function _openPopUpMenu() {
      this._catalogMenuInstance.toggle();
    }
    /**
     * Opens section in the popup catalog menu by index
     * @param {number} targetSectionIndex
     * @private
     */

  }, {
    key: "_openSection",
    value: function _openSection(targetSectionIndex) {
      var _this$_vueMenuInstanc = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this._vueMenuInstance.$children, 1),
          vueMenuComponent = _this$_vueMenuInstanc[0];

      var catalogSectionIndex = 0; // navigate([mainSectionIndex, subSectionIndex, subSubSectionIndex ....])

      vueMenuComponent.navigate([catalogSectionIndex, targetSectionIndex]);
    }
  }, {
    key: "_onLinkClick",
    value: function _onLinkClick(evt) {
      evt.preventDefault(); // Open menu

      this._openPopUpMenu(); // Open clicked section in popupmenu


      var targetSectionIndex = parseInt(evt.currentTarget.dataset.index);

      this._openSection(targetSectionIndex);
    }
  }, {
    key: "_setHandlers",
    value: function _setHandlers() {
      var _this = this;

      this._onPageMenuLinkElements.forEach(function (linkElement) {
        return linkElement.addEventListener("click", _this._onLinkClick);
      });
    }
  }, {
    key: "init",
    value: function init() {
      this._setHandlers();
    }
  }]);

  return MobileMenusSync;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RzLnZ1ZSIsIndlYnBhY2s6Ly8vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvR29CYWNrQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvSXRlbUljb24udnVlIiwid2VicGFjazovLy90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9QYWdlc01lbnUudnVlIiwid2VicGFjazovLy90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Qcm9qZWN0cy52dWUiLCJ3ZWJwYWNrOi8vL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZSIsIndlYnBhY2s6Ly8vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU3VibWVudUl0ZW0udnVlIiwid2VicGFjazovLy90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Vc2VyQmxvY2sudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib2R5LXNjcm9sbC1sb2NrL2xpYi9ib2R5U2Nyb2xsTG9jay5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT8wMTQ4Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RzLnZ1ZT8xYjBkIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0dvQmFja0J1dHRvbi52dWU/ZTQ5NiIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9JdGVtSWNvbi52dWU/NzNiNCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9QYWdlc01lbnUudnVlPzEzODQiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlPzdhYTciLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU29jaWFsTGlua3MudnVlPzdhMDgiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU3VibWVudUl0ZW0udnVlP2VhMmQiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvVXNlckJsb2NrLnZ1ZT83Nzg2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zbW9vdGgtcmVmbG93L2Rpc3QvdnVlLXNtb290aC1yZWZsb3cubWluLmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9BcHAudnVlPzk1M2UiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT84MzUwIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Db250YWN0cy52dWU/OTFjNSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Db250YWN0cy52dWU/MDk1YiIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Hb0JhY2tCdXR0b24udnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0dvQmFja0J1dHRvbi52dWU/ZDNjNSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Hb0JhY2tCdXR0b24udnVlPzU3NDEiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvSXRlbUljb24udnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1JY29uLnZ1ZT9lZmEyIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1JY29uLnZ1ZT9iYzFkIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1BhZ2VzTWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUGFnZXNNZW51LnZ1ZT81ZTA3Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1BhZ2VzTWVudS52dWU/YzA2OCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Qcm9qZWN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlP2Y5M2YiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlP2I5MTYiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU29jaWFsTGlua3MudnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZT8xYzM0Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZT81ODJiIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1N1Ym1lbnVJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9TdWJtZW51SXRlbS52dWU/ZTAxMyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9TdWJtZW51SXRlbS52dWU/MzgxOCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Vc2VyQmxvY2sudnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1VzZXJCbG9jay52dWU/ZTAzNCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Vc2VyQmxvY2sudnVlPzliYWUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vc3JjL2pzL2NhdGFsb2ctZHJvcGRvd24vY2F0YWxvZy1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvcHJvZm5hc3RpbC1yZWRlc2lnbi9zcmMvanMvY2F0YWxvZy1kcm9wZG93bi9tb2JpbGUtbWVudXMtc3luYy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJWdWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZW51VnVlSW5zdGFuY2UiLCJyZW5kZXIiLCJoIiwiTWVudSIsInBvcFVwRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXRhbG9nRHJvcGRvd24iLCJDYXRhbG9nRHJvcGRvd24iLCJkaXNhYmxlQm9keVNjcm9sbCIsImVuYWJsZUJvZHlTY3JvbGwiLCJpbml0IiwiJG1vdW50IiwiQk9EWV9PVkVSTEFZX0NMQVNTTkFNRSIsImNvbnRhaW5lclNlbGVjdG9yIiwidG9nZ2xlclNlbGVjdG9yIiwib25TaG93Q2FsbGJhY2siLCJvbkhpZGVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJfY29udGFpbmVyRWxlbWVudCIsIl9vcGVuQnV0dG9uRWxlbWVudCIsIl9kcm9wZG93bkVsZW1lbnQiLCJfb25TaG93Q2FsbGJhY2siLCJfb25IaWRlQ2FsbGJhY2siLCJfb25TaG93IiwiYmluZCIsIl9vbkhpZGUiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY2xpY2siLCJfc2V0SGFuZGxlcnMiLCJNb2JpbGVNZW51c1N5bmMiLCJjYXRhbG9nTWVudUluc3RhbmNlIiwidnVlTWVudUluc3RhbmNlIiwib25QYWdlTWVudVNlbGVjdG9yIiwicG9wVXBNZW51U2VsZWN0b3IiLCJfY2F0YWxvZ01lbnVJbnN0YW5jZSIsIl92dWVNZW51SW5zdGFuY2UiLCJfb25QYWdlTWVudUVsZW1lbnQiLCJfcG9wVXBNZW51RWxlbWVudCIsIl9vblBhZ2VNZW51TGlua0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9wb3BVcFRvZ2dsZXJFbGVtZW50IiwiX29uTGlua0NsaWNrIiwidG9nZ2xlIiwidGFyZ2V0U2VjdGlvbkluZGV4IiwiJGNoaWxkcmVuIiwidnVlTWVudUNvbXBvbmVudCIsImNhdGFsb2dTZWN0aW9uSW5kZXgiLCJuYXZpZ2F0ZSIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiX29wZW5Qb3BVcE1lbnUiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJfb3BlblNlY3Rpb24iLCJmb3JFYWNoIiwibGlua0VsZW1lbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztR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QyxjQUFKLEdBRGdCLENBR2hCOztBQUNBLFdBQUtDLGNBQUwsR0FKZ0IsQ0FNaEI7OztBQUNBLFVBQU1QLGtCQUFrQixHQUFHUSxRQUFRLENBQUNILEdBQUcsQ0FBQ0ksYUFBSixDQUFrQkMsT0FBbEIsQ0FBMEJDLEtBQTNCLENBQW5DOztBQUNBLFdBQUtDLFlBQUwsQ0FBa0JaLGtCQUFsQjtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYixXQUFLTCx1QkFBTCxDQUE2QmtCLE9BQTdCLENBQXFDLFVBQUNDLFdBQUQ7QUFBQSxlQUNuQ0EsV0FBVyxDQUFDOUQsZ0JBQVosVUFBc0MsS0FBSSxDQUFDOEMsWUFBM0MsQ0FEbUM7QUFBQSxPQUFyQztBQUdEOzs7MkJBRU07QUFDTCxXQUFLYixZQUFMO0FBQ0QiLCJmaWxlIjoibG9jYWwvdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2FwcC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibW9iaWxlLW5hdlwiIEBjbGljay5zdG9wPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDx0cmFuc2l0aW9uLWdyb3VwXG4gICAgICAgICAgOm5hbWU9XCJ0cmFuc2l0aW9uTmFtZVwiXG4gICAgICAgICAgdGFnPVwibmF2XCJcbiAgICAgICAgICBjbGFzcz1cIm1vYmlsZS1uYXZfX2xldmVscyBtb2JpbGUtbWFpbi1tZW51XCJcbiAgICAgICAgICByZWY9XCJsZXZlbHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZS1uYXZfX2lubmVyIHBiLTVcIlxuICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgIDpyZWY9XCJgbGV2ZWwtJHtnZXRQYXRoTmFtZShjdXJyZW50TGV2ZWwucGF0aCl9YFwiXG4gICAgICAgICAgICAgOmtleT1cImdldFBhdGhOYW1lKGN1cnJlbnRMZXZlbC5wYXRoKVwiPlxuXG4gICAgICAgICAgPCEtLSDQk9C70LDQstC90L7QtSDQvNC10L3RjiAo0JrQsNGC0LDQu9C+0LMsINCQ0LrRhtC40LguLi4pLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZS1uYXZfX2xldmVsIG1vYmlsZS1uYXZfX2l0ZW0gcC0wXCJcbiAgICAgICAgICAgICAgIHYtaWY9XCJjdXJyZW50TGV2ZWxcIlxuICAgICAgICAgICAgICAgOmFyaWEtbGFiZWxsZWRieT1cImBtb2JpbGUtbmF2LWxldmVsLWxhYmVsLSR7Z2V0UGF0aE5hbWUoY3VycmVudExldmVsLnBhdGgpfWBcIiByb2xlPVwiZ3JvdXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDwhLS0g0J/QvtC00YDQsNC30LTQtdC70Ysg0YLQtdC60YPRidC10LPQviDRgNCw0LfQtNC10LvQsCAtLT5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1vYmlsZS1tYWluLW1lbnVfX2xpc3QgbGlzdC1yZXNldFwiPlxuICAgICAgICAgICAgICA8IS0tINCa0L3QvtC/0LrQsCDCq9Cd0LDQt9Cw0LTCuy0tPlxuICAgICAgICAgICAgICA8R29CYWNrQnV0dG9uXG4gICAgICAgICAgICAgICAgICB2LWlmPVwiY3VycmVudExldmVsRGVwdGggPiAwXCJcbiAgICAgICAgICAgICAgICAgIEBuYXZpZ2F0ZT1cIm5hdmlnYXRlKGN1cnJlbnRMZXZlbC5wYXRoLnNsaWNlKDAsIGN1cnJlbnRMZXZlbERlcHRoIC0gMSkpXCJcbiAgICAgICAgICAgICAgICAgIDpwcmV2U2VjdGlvbk5hbWU9XCJsZXZlbHNbY3VycmVudExldmVsRGVwdGggLSAxXS5sYWJlbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwhLS0g0J/Rg9C90LrRgiDQvNC10L3RjiAtLT5cbiAgICAgICAgICAgICAgPFN1Ym1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICB2LWZvcj1cIml0ZW0gaW4gY3VycmVudExldmVsLml0ZW1zXCJcbiAgICAgICAgICAgICAgICAgIEBuYXZpZ2F0ZT1cIm5hdmlnYXRlKGl0ZW0ucGF0aClcIlxuICAgICAgICAgICAgICAgICAgOmtleT1cIml0ZW0ucGF0aC5qb2luKClcIlxuICAgICAgICAgICAgICAgICAgOml0ZW09XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgOmN1cnJlbnRMZXZlbERlcHRoPVwiY3VycmVudExldmVsRGVwdGhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0g0JrQvtC90YLQsNC60YLRiyDQuCDRgdC+0YbRgdC10YLQuCAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9iaWxlLW5hdl9faXRlbVwiIHYtaWY9XCIhY3VycmVudExldmVsRGVwdGhcIj5cbiAgICAgICAgICAgIDxDb250YWN0cy8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tINCc0LXQvdGOINGB0YLRgNCw0L3QuNGGIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtbmF2X19pdGVtXCIgdi1pZj1cIiFjdXJyZW50TGV2ZWxEZXB0aFwiPlxuICAgICAgICAgICAgPFBhZ2VzTWVudS8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RyYW5zaXRpb24tZ3JvdXA+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzbW9vdGhSZWZsb3cgZnJvbSBcInZ1ZS1zbW9vdGgtcmVmbG93XCI7XG5cbmltcG9ydCBDb250YWN0cyBmcm9tIFwiLi9Db250YWN0c1wiO1xuaW1wb3J0IFBhZ2VzTWVudSBmcm9tIFwiLi9QYWdlc01lbnVcIjtcbmltcG9ydCBTdWJtZW51SXRlbSBmcm9tIFwiLi9TdWJtZW51SXRlbVwiO1xuaW1wb3J0IFVzZXJCbG9jayBmcm9tIFwiLi9Vc2VyQmxvY2tcIjtcbmltcG9ydCBHb0JhY2tCdXR0b24gZnJvbSBcIi4vR29CYWNrQnV0dG9uXCI7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vUHJvamVjdHNcIjtcblxuY29uc3QgbWVudUxpbmtzID0gd2luZG93Lm1lbnVJdGVtcztcbmNvbnNvbGUubG9nKG1lbnVMaW5rcyk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3Ntb290aFJlZmxvd10sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVudUl0ZW1zOiB3aW5kb3cubWVudUl0ZW1zLFxuICAgICAgY3VycmVudFBvc2l0aW9uOiBbXSxcbiAgICAgIGxldmVsczogW10sXG4gICAgICBjdXJyZW50TGV2ZWw6IFtdLFxuICAgICAgcHJldkxldmVsRGVwdGg6IDAsXG4gICAgICBjdXJyZW50TGV2ZWxEZXB0aDogMFxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICB0cmFuc2l0aW9uTmFtZSgpIHtcbiAgICAgIHJldHVybiAnc2xpZGUtJyArICh0aGlzLmN1cnJlbnRMZXZlbERlcHRoID4gdGhpcy5wcmV2TGV2ZWxEZXB0aCA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgbmF2aWdhdGUocGF0aCkge1xuICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSBwYXRoO1xuICAgICAgdGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKCk7XG4gICAgfSxcblxuICAgIHJlY2FsY3VsYXRlSXRlbXMoKSB7XG4gICAgICBsZXQgaXRlbXMgPSB0aGlzLm1lbnVJdGVtcztcbiAgICAgIGxldCBsZXZlbHMgPSBbXTtcblxuICAgICAgbGV2ZWxzLnB1c2godGhpcy5nZXRMZXZlbChbXSwgbnVsbCwgaXRlbXMpKTtcblxuICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24uZm9yRWFjaCgoaW5kZXgsIGRlcHRoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBbLi4udGhpcy5jdXJyZW50UG9zaXRpb25dLnNsaWNlKDAsIGRlcHRoICsgMSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gaXRlbXNbaW5kZXhdICYmIGl0ZW1zW2luZGV4XS5sYWJlbCB8fCBudWxsO1xuICAgICAgICBpdGVtcyA9IGl0ZW1zW2luZGV4XSAmJiBpdGVtc1tpbmRleF0uaXRlbXMgfHwgW107XG4gICAgICAgIGxldmVscy5wdXNoKHRoaXMuZ2V0TGV2ZWwocGF0aCwgbGFiZWwsIGl0ZW1zKSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sZXZlbHMgPSBsZXZlbHM7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IGxldmVsc1tsZXZlbHMubGVuZ3RoIC0gMV07XG4gICAgICB0aGlzLnByZXZMZXZlbERlcHRoID0gdGhpcy5jdXJyZW50TGV2ZWxEZXB0aDtcbiAgICAgIHRoaXMuY3VycmVudExldmVsRGVwdGggPSBsZXZlbHMubGVuZ3RoIC0gMTtcbiAgICB9LFxuXG4gICAgZ2V0TGV2ZWwocGF0aCwgbGFiZWwsIGl0ZW1zKSB7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhdGg6IFsuLi5wYXRoLCBpbmRleF0sXG4gICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgICAgICBoYXNJdGVtczogaXRlbS5pdGVtcyAmJiBpdGVtLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRQYXRoTmFtZShwYXRoKSB7XG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5sZW5ndGggPCAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gWzAsIC4uLnBhdGhdLmpvaW4oJy0nKTtcbiAgICB9LFxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKCk7XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuICAgIENvbnRhY3RzLCBQYWdlc01lbnUsIFN1Ym1lbnVJdGVtLCBVc2VyQmxvY2ssIEdvQmFja0J1dHRvbiwgUHJvamVjdHNcbiAgfSxcbn1cblxuPC9zY3JpcHQ+XG5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1lbnUtbW9iaWxlLWNvbnRhY3RzIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1tb2JpbGUtY29udGFjdHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCJ0ZWw6Kzc0MjQyNzc3NTY2XCJcbiAgICAgICAgIHRpdGxlPVwi0J/QvtC30LLQvtC90LjRgtGMINC90LDQvFwiXG4gICAgICAgICBjbGFzcz1cIm1lbnUtbW9iaWxlLWNvbnRhY3RzX19saW5rXCI+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbl9waG9uZVwiPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgKzcgKDQyNDIpIDc3Ny01NjZcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1tb2JpbGUtY29udGFjdHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCJtYWlsVG86dGRwcm9mbmFzdGlsQG1haWwucnVcIlxuICAgICAgICAgdGl0bGU9XCLQndCw0L/QuNGB0LDRgtGMINC90LDQvCDQvdCwIGVtYWlsXCJcbiAgICAgICAgIGNsYXNzPVwibWVudS1tb2JpbGUtY29udGFjdHNfX2xpbmtcIj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbl9sZXR0ZXJcIj48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIHRkcHJvZm5hc3RpbEBtYWlsLnJ1XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtbW9iaWxlLWNvbnRhY3RzX19pdGVtXCI+XG4gICAgICA8U29jaWFsTGlua3MvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgU29jaWFsTGlua3MgZnJvbSBcIi4vU29jaWFsTGlua3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQ29udGFjdHMnLFxuICBjb21wb25lbnRzOiB7XG4gICAgU29jaWFsTGlua3NcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8bGkgY2xhc3M9XCJtb2JpbGUtbWFpbi1tZW51X19pdGVtIG1vYmlsZS1tYWluLW1lbnVfX2l0ZW1fbXV0ZWRcIj5cbiAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIm1vYmlsZS1tYWluLW1lbnVfX2xpbmtcIlxuICAgICAgICBAY2xpY2s9XCIkZW1pdChgbmF2aWdhdGVgKVwiXG4gICAgICAgIHJlZj1cImJhY2tcIlxuICAgID5cbiAgICAgIDxJdGVtSWNvbiA6bmFtZT1cImDQndCw0LfQsNC0YFwiLz5cblxuICAgICAgIHt7IHByZXZTZWN0aW9uTmFtZSA/IHByZXZTZWN0aW9uTmFtZSA6IGDQndCw0LfQsNC0YCB9fVxuICAgIDwvYnV0dG9uPlxuICA8L2xpPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJdGVtSWNvbiBmcm9tIFwiLi9JdGVtSWNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IGBHb0JhY2tCdXR0b25gLFxuICBwcm9wczoge1xuICAgIHByZXZTZWN0aW9uTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEl0ZW1JY29uXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibW9iaWxlLW1haW4tbWVudV9faWNvblwiPlxuICAgIDxpbWcgOnNyYz1cInNyYyA/IHNyYyA6IGAke1NJVEVfVEVNUExBVEVfUEFUSH0vaW1hZ2VzL2RlbW8vaXBob25lLnN2Z2BcIlxuICAgICAgICAgdi1pZj1cImN1cnJlbnRMZXZlbERlcHRoXCJcbiAgICAgICAgIDphbHQ9XCJg0JjQt9C+0LHRgNCw0LbQtdC90LjQtSDRgNCw0LfQtNC10LvQsCDCqyR7IG5hbWUgfcK7YFwiXG4gICAgICAgICBjbGFzcz1cIm1vYmlsZS1tYWluLW1lbnVfX2ljb25cIlxuICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgPCEtLSDQndCwINC/0LXRgNCy0L7QvCDRg9GA0L7QstC90LUg0L/QvtC60LDQt9GL0LLQsNC10Lwg0YHRgtCw0YLQuNGH0LXRgdC60LjQtSBzdmcg0LjQutC+0L3QutC4IC0tPlxuICAgIDxzdmcgdi1lbHNlIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxuICAgICAgPHVzZSA6eGxpbms6aHJlZj1cImdldEljb25Gcm9tTGFiZWwobmFtZSlcIj48L3VzZT5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuY29uc3Qge1NJVEVfVEVNUExBVEVfUEFUSH0gPSB3aW5kb3cuYnhDb25zdGFudHM7XG5cbmNvbnN0IHNlY3Rpb25OYW1lVG9JY29uID0ge1xuICBcItCa0LDRgtCw0LvQvtCzXCI6IFwiaWNvbl9idXJnZXJcIixcbiAgXCLQmNC30LHRgNCw0L3QvdC+0LVcIjogXCJpY29uX2xpa2VcIixcbiAgXCLQodGA0LDQstC90LXQvdC40LVcIjogXCJpY29uX2NvbXBhcmVcIixcbiAgXCLQmtC+0YDQt9C40L3QsFwiOiBcImljb25fY2FydFwiLFxuICBcItCd0LDQt9Cw0LRcIjogXCJpY29uX2dvLWJhY2tcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogYEl0ZW1JY29uYCxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgU0lURV9URU1QTEFURV9QQVRIXG4gICAgfVxuICB9LFxuICBwcm9wczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY3VycmVudExldmVsRGVwdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICB9LFxuICAgIHNyYzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRJY29uRnJvbUxhYmVsKGxhYmVsKSB7XG4gICAgICByZXR1cm4gYCMke3NlY3Rpb25OYW1lVG9JY29uW2xhYmVsXX1gO1xuICAgIH1cbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPG5hdiByb2xlPVwibmF2aWdhdGlvblwiIGNsYXNzPVwibW9iaWxlLXBhZ2VzLW1lbnVcIj5cbiAgICA8aDQgY2xhc3M9XCJtb2JpbGUtcGFnZXMtbWVudV9fdGl0bGVcIj5cbiAgICAgINCf0L7QutGD0L/QsNGC0LXQu9GP0LxcbiAgICA8L2g0PlxuICAgIDx1bCBjbGFzcz1cIm1vYmlsZS1wYWdlcy1tZW51X19saXN0IGxpc3QtcmVzZXRcIj5cbiAgICAgIDxsaSBjbGFzcz1cIm1vYmlsZS1wYWdlcy1tZW51X19pdGVtXCIgdi1mb3I9XCJ7bmFtZSwgbGlua30gaW4gcGFnZXNcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICAgIDpocmVmPVwibGlua1wiXG4gICAgICAgICAgICA6a2V5PVwibGlua1wiXG4gICAgICAgICAgICBjbGFzcz1cIm1vYmlsZS1wYWdlcy1tZW51X19saW5rXCJcbiAgICAgICAgICAgIDp0aXRsZT1cImDQn9C10YDQtdC50YLQuCDQuiDRgdGC0YDQsNC90LjRhtC1ICR7bmFtZX1gXCJcbiAgICAgICAgPnt7IG5hbWUgfX08L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvbmF2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogYFBhZ2VzTWVudWAsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBg0J3QvtCy0LjQvdC60LhgLFxuICAgICAgICAgIGxpbms6IGAvYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYNCU0L7RgdGC0LDQstC60LAg0Lgg0L/QvtC00YrQtdC8YCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQktC+0LfQstGA0LDRgmAsXG4gICAgICAgICAgbGluazogYC9gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBg0JLQvtC/0YDQvtGBLdC+0YLQstC10YJgLFxuICAgICAgICAgIGxpbms6IGAvYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYNCa0LDQuiDQv9GA0LjQvtCx0YDQtdGB0YLQuCDRgtC+0LLQsNGAYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQn9C+0LvQtdC30L3QsNGPINC40L3RhNC+0YDQvNCw0YbQuNGPYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQmtC+0L3RgtCw0LrRgtGLYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGwgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8ZHQgY2xhc3M9XCJjb2wtMTIgdGV4dC1jZW50ZXIgbWItM1wiPtCd0LDRiNC4INC/0YDQvtC10LrRgtGLPC9kdD5cbiAgICA8ZGQgdi1mb3I9XCJ7bmFtZSwgbG9nb1NyY30gaW4gaXRlbXNcIiBjbGFzcz1cImNvbC02IGNvbC1zbSB0ZXh0LWNlbnRlciBtYi00XCI+XG4gICAgICA8aW1nIDpzcmM9XCJTSVRFX1RFTVBMQVRFX1BBVEggKyBsb2dvU3JjXCJcbiAgICAgICAgICAgOmFsdD1cImDQm9C+0LPQvtGC0LjQvyDQutC+0LzQv9Cw0L3QuNC4IMKrJHtuYW1lfcK7YFwiXG4gICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCI+XG4gICAgPC9kZD5cbiAgPC9kbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5jb25zdCB7U0lURV9URU1QTEFURV9QQVRIfSA9IHdpbmRvdy5ieENvbnN0YW50cztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBgUHJvamVjdHNgLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBTSVRFX1RFTVBMQVRFX1BBVEgsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYGlQb3J0YCxcbiAgICAgICAgICBsb2dvU3JjOiBgL2ltYWdlcy9wcm9qZWN0cy1sb2dvcy9pcG9ydC1kYXJrLnN2Z2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgTkJDb21gLFxuICAgICAgICAgIGxvZ29TcmM6IGAvaW1hZ2VzL3Byb2plY3RzLWxvZ29zL25iLWRhcmsucG5nYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGBTb255IENlbnRyZWAsXG4gICAgICAgICAgbG9nb1NyYzogYC9pbWFnZXMvcHJvamVjdHMtbG9nb3Mvc29ueS1kYXJrLnN2Z2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgU2Ftc3VuZyBTdG9yZWAsXG4gICAgICAgICAgbG9nb1NyYzogYC9pbWFnZXMvcHJvamVjdHMtbG9nb3Mvc2Ftc3VuZy1kYXJrLnN2Z2AsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRsIGNsYXNzPVwic29jaWFsIHJvdyBtYi0wXCI+XG4gICAgPGRkIGNsYXNzPVwiY29sIG1iLTBcIiB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIj5cbiAgICAgIDxhIGNsYXNzPVwic29jaWFsX19saW5rXCJcbiAgICAgICAgIDpocmVmPVwiaXRlbS5saW5rXCJcbiAgICAgICAgIDp0aXRsZT1cImDQn9C10YDQtdC50YLQuCDQsiDQvdCw0Yggwqske2l0ZW0ubmFtZX3Cu2BcIj5cbiAgICAgICAgPGltZyA6c3JjPVwiaXRlbS5pY29uXCJcbiAgICAgICAgICAgICBjbGFzcz1cInNvY2lhbF9faWNvblwiXG4gICAgICAgICAgICAgOmFsdD1cImDQm9C+0LPQviAke2l0ZW0ubmFtZX1gXCJcbiAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICA8L2E+XG4gICAgPC9kZD5cbiAgPC9kbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5jb25zdCB7U0lURV9URU1QTEFURV9QQVRIfSA9IHdpbmRvdy5ieENvbnN0YW50cztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogW1xuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgbmFtZTogYFRlbGVncmFtYCxcbiAgICAgICAgLy8gICBsaW5rOiBgL2AsXG4gICAgICAgIC8vICAgaWNvbjogYCR7U0lURV9URU1QTEFURV9QQVRIfS9pbWFnZXMvc29jaWFsL3RlbGVncmFtLnN2Z2AsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgV2hhdHNhcHBgLFxuICAgICAgICAgIGxpbms6IGBodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZC8/cGhvbmU9NzQyNDI3Nzc1NjZgLFxuICAgICAgICAgIGljb246IGAke1NJVEVfVEVNUExBVEVfUEFUSH0vaW1hZ2VzL3NvY2lhbC93aGF0c2FwcC5zdmdgLFxuICAgICAgICB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgbmFtZTogYFZpYmVyYCxcbiAgICAgICAgLy8gICBsaW5rOiBgL2AsXG4gICAgICAgIC8vICAgaWNvbjogYCR7U0lURV9URU1QTEFURV9QQVRIfS9pbWFnZXMvc29jaWFsL3ZpYmVyLnN2Z2AsXG4gICAgICAgIC8vIH0sXG4gICAgICBdXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwibW9iaWxlLW1haW4tbWVudV9faXRlbVwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAnbW9iaWxlLW1haW4tbWVudV9faXRlbV9jYXRhbG9nJzogaXRlbS5sYWJlbCA9PT0gJ9Ca0LDRgtCw0LvQvtCzJyxcbiAgICAgICAgICAgICdtb2JpbGUtbWFpbi1tZW51X19pdGVtX3NhbGVzJzogaXRlbS5sYWJlbCA9PT0gJ9CQ0LrRhtC40LgnXG4gICAgICAgICAgfVwiPlxuXG4gICAgPCEtLVxuICAgICDQldGB0LvQuCDQtdGB0YLRjCDQv9C+0LTRgNCw0LfQtNC10LvRiyAtPiDQv9C+0LrQsNC30YvQstCw0LXQvCBidXR0b24sXG4gICAgINCV0YHQu9C4INC/0L7QtNGA0LDQt9C00LXQu9C+0LIg0L3QtdGCIC0+INC/0L7QutCw0LfRi9Cy0LDQtdC8INGB0YHRi9C70LrRg1xuICAgICAtLT5cbiAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIm1vYmlsZS1tYWluLW1lbnVfX2xpbmtcIlxuICAgICAgICBAY2xpY2s9XCIkZW1pdCgnbmF2aWdhdGUnKVwiXG4gICAgICAgIHJlZj1cImxpbmtcIlxuICAgICAgICB2LWlmPVwiaXRlbS5oYXNJdGVtc1wiXG4gICAgPlxuICAgICAge3sgaXRlbS5sYWJlbCB9fVxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGFcbiAgICAgICAgaHJlZj1cIlwiXG4gICAgICAgIHYtZWxzZVxuICAgICAgICA6aHJlZj1cIml0ZW0udXJsXCJcbiAgICAgICAgY2xhc3M9XCJtb2JpbGUtbWFpbi1tZW51X19saW5rXCJcbiAgICA+XG4gICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgPC9hPlxuXG4gIDwvbGk+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBgU3VibWVudUl0ZW1gLFxuICBwcm9wczogW2BpdGVtYCwgYGN1cnJlbnRMZXZlbERlcHRoYF0sXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1lbnUtdXNlci1ibG9ja1wiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJtZW51LXVzZXItYmxvY2tfX2l0ZW0gbWVudS11c2VyLWJsb2NrX19pdGVtX3BlcnNvbmFsXCI+XG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIj5cbiAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljb25fdXNlclwiPjwvdXNlPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgINCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRglxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJtZW51LXVzZXItYmxvY2tfX2l0ZW0gbWVudS11c2VyLWJsb2NrX19pdGVtX3JlZ2lzdHJhdGlvblwiPlxuICAgICAgICAgINCg0LXQs9C40YHRgtGA0LDRhtC40Y9cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtY2VudGVyIGJvcmRlci1lbmQgYm9yZGVyLXRvcFwiPlxuICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJtZW51LXVzZXItYmxvY2tfX2l0ZW0gbWVudS11c2VyLWJsb2NrX19pdGVtX29yZGVyLWxpc3RcIj5cbiAgICAgICAgICDQnNC+0Lgg0LfQsNC60LDQt9GLXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtY2VudGVyIGJvcmRlci10b3BcIj5cbiAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwibWVudS11c2VyLWJsb2NrX19pdGVtIG1lbnUtdXNlci1ibG9ja19faXRlbV9ib251c2VzXCI+XG4gICAgICAgICAgMTAwINCx0LDQu9C70L7QslxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG59XG48L3NjcmlwdD5cbiIsImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4vLyBPbGRlciBicm93c2VycyBkb24ndCBzdXBwb3J0IGV2ZW50IG9wdGlvbnMsIGZlYXR1cmUgZGV0ZWN0IGl0LlxuXG4vLyBBZG9wdGVkIGFuZCBtb2RpZmllZCBzb2x1dGlvbiBmcm9tIEJvaGRhbiBEaWR1a2ggKDIwMTcpXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MTU5NDk5Ny9pb3MtMTAtc2FmYXJpLXByZXZlbnQtc2Nyb2xsaW5nLWJlaGluZC1hLWZpeGVkLW92ZXJsYXktYW5kLW1haW50YWluLXNjcm9sbC1wb3NpXG5cbnZhciBoYXNQYXNzaXZlRXZlbnRzID0gZmFsc2U7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIHBhc3NpdmVUZXN0T3B0aW9ucyA9IHtcbiAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgIGhhc1Bhc3NpdmVFdmVudHMgPSB0cnVlO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVUZXN0T3B0aW9ucyk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVUZXN0T3B0aW9ucyk7XG59XG5cbnZhciBpc0lvc0RldmljZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSAmJiAoL2lQKGFkfGhvbmV8b2QpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pIHx8IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgd2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpO1xuXG5cbnZhciBsb2NrcyA9IFtdO1xudmFyIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xudmFyIGluaXRpYWxDbGllbnRZID0gLTE7XG52YXIgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID0gdm9pZCAwO1xudmFyIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9IHZvaWQgMDtcblxuLy8gcmV0dXJucyB0cnVlIGlmIGBlbGAgc2hvdWxkIGJlIGFsbG93ZWQgdG8gcmVjZWl2ZSB0b3VjaG1vdmUgZXZlbnRzLlxudmFyIGFsbG93VG91Y2hNb3ZlID0gZnVuY3Rpb24gYWxsb3dUb3VjaE1vdmUoZWwpIHtcbiAgcmV0dXJuIGxvY2tzLnNvbWUoZnVuY3Rpb24gKGxvY2spIHtcbiAgICBpZiAobG9jay5vcHRpb25zLmFsbG93VG91Y2hNb3ZlICYmIGxvY2sub3B0aW9ucy5hbGxvd1RvdWNoTW92ZShlbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuXG52YXIgcHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChyYXdFdmVudCkge1xuICB2YXIgZSA9IHJhd0V2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuICAvLyBGb3IgdGhlIGNhc2Ugd2hlcmVieSBjb25zdW1lcnMgYWRkcyBhIHRvdWNobW92ZSBldmVudCBsaXN0ZW5lciB0byBkb2N1bWVudC5cbiAgLy8gUmVjYWxsIHRoYXQgd2UgZG8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgLy8gaW4gZGlzYWJsZUJvZHlTY3JvbGwgLSBzbyBpZiB3ZSBwcm92aWRlIHRoaXMgb3Bwb3J0dW5pdHkgdG8gYWxsb3dUb3VjaE1vdmUsIHRoZW5cbiAgLy8gdGhlIHRvdWNobW92ZSBldmVudCBvbiBkb2N1bWVudCB3aWxsIGJyZWFrLlxuICBpZiAoYWxsb3dUb3VjaE1vdmUoZS50YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBEbyBub3QgcHJldmVudCBpZiB0aGUgZXZlbnQgaGFzIG1vcmUgdGhhbiBvbmUgdG91Y2ggKHVzdWFsbHkgbWVhbmluZyB0aGlzIGlzIGEgbXVsdGkgdG91Y2ggZ2VzdHVyZSBsaWtlIHBpbmNoIHRvIHpvb20pLlxuICBpZiAoZS50b3VjaGVzLmxlbmd0aCA+IDEpIHJldHVybiB0cnVlO1xuXG4gIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHNldE92ZXJmbG93SGlkZGVuID0gZnVuY3Rpb24gc2V0T3ZlcmZsb3dIaWRkZW4ob3B0aW9ucykge1xuICAvLyBJZiBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgaXMgYWxyZWFkeSBzZXQsIGRvbid0IHNldCBpdCBhZ2Fpbi5cbiAgaWYgKHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIF9yZXNlcnZlU2Nyb2xsQmFyR2FwID0gISFvcHRpb25zICYmIG9wdGlvbnMucmVzZXJ2ZVNjcm9sbEJhckdhcCA9PT0gdHJ1ZTtcbiAgICB2YXIgc2Nyb2xsQmFyR2FwID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICBpZiAoX3Jlc2VydmVTY3JvbGxCYXJHYXAgJiYgc2Nyb2xsQmFyR2FwID4gMCkge1xuICAgICAgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHNjcm9sbEJhckdhcCArICdweCc7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nIGlzIGFscmVhZHkgc2V0LCBkb24ndCBzZXQgaXQgYWdhaW4uXG4gIGlmIChwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICB9XG59O1xuXG52YXIgcmVzdG9yZU92ZXJmbG93U2V0dGluZyA9IGZ1bmN0aW9uIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcoKSB7XG4gIGlmIChwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0O1xuXG4gICAgLy8gUmVzdG9yZSBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgdG8gdW5kZWZpbmVkIHNvIHNldE92ZXJmbG93SGlkZGVuIGtub3dzIGl0XG4gICAgLy8gY2FuIGJlIHNldCBhZ2Fpbi5cbiAgICBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAocHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nO1xuXG4gICAgLy8gUmVzdG9yZSBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgdG8gdW5kZWZpbmVkXG4gICAgLy8gc28gc2V0T3ZlcmZsb3dIaWRkZW4ga25vd3MgaXQgY2FuIGJlIHNldCBhZ2Fpbi5cbiAgICBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L3Njcm9sbEhlaWdodCNQcm9ibGVtc19hbmRfc29sdXRpb25zXG52YXIgaXNUYXJnZXRFbGVtZW50VG90YWxseVNjcm9sbGVkID0gZnVuY3Rpb24gaXNUYXJnZXRFbGVtZW50VG90YWxseVNjcm9sbGVkKHRhcmdldEVsZW1lbnQpIHtcbiAgcmV0dXJuIHRhcmdldEVsZW1lbnQgPyB0YXJnZXRFbGVtZW50LnNjcm9sbEhlaWdodCAtIHRhcmdldEVsZW1lbnQuc2Nyb2xsVG9wIDw9IHRhcmdldEVsZW1lbnQuY2xpZW50SGVpZ2h0IDogZmFsc2U7XG59O1xuXG52YXIgaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKGV2ZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gIHZhciBjbGllbnRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIC0gaW5pdGlhbENsaWVudFk7XG5cbiAgaWYgKGFsbG93VG91Y2hNb3ZlKGV2ZW50LnRhcmdldCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGFyZ2V0RWxlbWVudCAmJiB0YXJnZXRFbGVtZW50LnNjcm9sbFRvcCA9PT0gMCAmJiBjbGllbnRZID4gMCkge1xuICAgIC8vIGVsZW1lbnQgaXMgYXQgdGhlIHRvcCBvZiBpdHMgc2Nyb2xsLlxuICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdChldmVudCk7XG4gIH1cblxuICBpZiAoaXNUYXJnZXRFbGVtZW50VG90YWxseVNjcm9sbGVkKHRhcmdldEVsZW1lbnQpICYmIGNsaWVudFkgPCAwKSB7XG4gICAgLy8gZWxlbWVudCBpcyBhdCB0aGUgYm90dG9tIG9mIGl0cyBzY3JvbGwuXG4gICAgcmV0dXJuIHByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgfVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB2YXIgZGlzYWJsZUJvZHlTY3JvbGwgPSBmdW5jdGlvbiBkaXNhYmxlQm9keVNjcm9sbCh0YXJnZXRFbGVtZW50LCBvcHRpb25zKSB7XG4gIC8vIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZFxuICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ2Rpc2FibGVCb2R5U2Nyb2xsIHVuc3VjY2Vzc2Z1bCAtIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNhbGxpbmcgZGlzYWJsZUJvZHlTY3JvbGwgb24gSU9TIGRldmljZXMuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZGlzYWJsZUJvZHlTY3JvbGwgbXVzdCBub3QgaGF2ZSBiZWVuIGNhbGxlZCBvbiB0aGlzIHRhcmdldEVsZW1lbnQgYmVmb3JlXG4gIGlmIChsb2Nrcy5zb21lKGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgcmV0dXJuIGxvY2sudGFyZ2V0RWxlbWVudCA9PT0gdGFyZ2V0RWxlbWVudDtcbiAgfSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbG9jayA9IHtcbiAgICB0YXJnZXRFbGVtZW50OiB0YXJnZXRFbGVtZW50LFxuICAgIG9wdGlvbnM6IG9wdGlvbnMgfHwge31cbiAgfTtcblxuICBsb2NrcyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobG9ja3MpLCBbbG9ja10pO1xuXG4gIGlmIChpc0lvc0RldmljZSkge1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gZGV0ZWN0IHNpbmdsZSB0b3VjaC5cbiAgICAgICAgaW5pdGlhbENsaWVudFkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0YXJnZXRFbGVtZW50Lm9udG91Y2htb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gZGV0ZWN0IHNpbmdsZSB0b3VjaC5cbiAgICAgICAgaGFuZGxlU2Nyb2xsKGV2ZW50LCB0YXJnZXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFkb2N1bWVudExpc3RlbmVyQWRkZWQpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCBoYXNQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogdW5kZWZpbmVkKTtcbiAgICAgIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNldE92ZXJmbG93SGlkZGVuKG9wdGlvbnMpO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIGNsZWFyQWxsQm9keVNjcm9sbExvY2tzID0gZnVuY3Rpb24gY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MoKSB7XG4gIGlmIChpc0lvc0RldmljZSkge1xuICAgIC8vIENsZWFyIGFsbCBsb2NrcyBvbnRvdWNoc3RhcnQvb250b3VjaG1vdmUgaGFuZGxlcnMsIGFuZCB0aGUgcmVmZXJlbmNlcy5cbiAgICBsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgICBsb2NrLnRhcmdldEVsZW1lbnQub250b3VjaHN0YXJ0ID0gbnVsbDtcbiAgICAgIGxvY2sudGFyZ2V0RWxlbWVudC5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBpZiAoZG9jdW1lbnRMaXN0ZW5lckFkZGVkKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgaGFzUGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IHVuZGVmaW5lZCk7XG4gICAgICBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBpbml0aWFsIGNsaWVudFkuXG4gICAgaW5pdGlhbENsaWVudFkgPSAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXN0b3JlT3ZlcmZsb3dTZXR0aW5nKCk7XG4gIH1cblxuICBsb2NrcyA9IFtdO1xufTtcblxuZXhwb3J0IHZhciBlbmFibGVCb2R5U2Nyb2xsID0gZnVuY3Rpb24gZW5hYmxlQm9keVNjcm9sbCh0YXJnZXRFbGVtZW50KSB7XG4gIGlmICghdGFyZ2V0RWxlbWVudCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignZW5hYmxlQm9keVNjcm9sbCB1bnN1Y2Nlc3NmdWwgLSB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIGVuYWJsZUJvZHlTY3JvbGwgb24gSU9TIGRldmljZXMuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbG9ja3MgPSBsb2Nrcy5maWx0ZXIoZnVuY3Rpb24gKGxvY2spIHtcbiAgICByZXR1cm4gbG9jay50YXJnZXRFbGVtZW50ICE9PSB0YXJnZXRFbGVtZW50O1xuICB9KTtcblxuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICB0YXJnZXRFbGVtZW50Lm9udG91Y2hzdGFydCA9IG51bGw7XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNobW92ZSA9IG51bGw7XG5cbiAgICBpZiAoZG9jdW1lbnRMaXN0ZW5lckFkZGVkICYmIGxvY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIGhhc1Bhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB1bmRlZmluZWQpO1xuICAgICAgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFsb2Nrcy5sZW5ndGgpIHtcbiAgICByZXN0b3JlT3ZlcmZsb3dTZXR0aW5nKCk7XG4gIH1cbn07XG5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtbmF2XCIsXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidHJhbnNpdGlvbi1ncm91cFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibGV2ZWxzXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1uYXZfX2xldmVscyBtb2JpbGUtbWFpbi1tZW51XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IF92bS50cmFuc2l0aW9uTmFtZSwgdGFnOiBcIm5hdlwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBfdm0uZ2V0UGF0aE5hbWUoX3ZtLmN1cnJlbnRMZXZlbC5wYXRoKSxcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJsZXZlbC1cIiArIF92bS5nZXRQYXRoTmFtZShfdm0uY3VycmVudExldmVsLnBhdGgpLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW5hdl9faW5uZXIgcGItNVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFiaW5kZXg6IFwiLTFcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uY3VycmVudExldmVsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtbmF2X19sZXZlbCBtb2JpbGUtbmF2X19pdGVtIHAtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vYmlsZS1uYXYtbGV2ZWwtbGFiZWwtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhdGhOYW1lKF92bS5jdXJyZW50TGV2ZWwucGF0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtbWFpbi1tZW51X19saXN0IGxpc3QtcmVzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRMZXZlbERlcHRoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiR29CYWNrQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTZWN0aW9uTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGV2ZWxzW192bS5jdXJyZW50TGV2ZWxEZXB0aCAtIDFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5hdmlnYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRMZXZlbC5wYXRoLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudExldmVsRGVwdGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmN1cnJlbnRMZXZlbC5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJTdWJtZW51SXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLnBhdGguam9pbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGV2ZWxEZXB0aDogX3ZtLmN1cnJlbnRMZXZlbERlcHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdmlnYXRlKGl0ZW0ucGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICFfdm0uY3VycmVudExldmVsRGVwdGhcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1uYXZfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiQ29udGFjdHNcIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhX3ZtLmN1cnJlbnRMZXZlbERlcHRoXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2JpbGUtbmF2X19pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcIlBhZ2VzTWVudVwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtbW9iaWxlLWNvbnRhY3RzIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZW51LW1vYmlsZS1jb250YWN0c19faXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS1tb2JpbGUtY29udGFjdHNfX2xpbmtcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwidGVsOis3NDI0Mjc3NzU2NlwiLCB0aXRsZTogXCLQn9C+0LfQstC+0L3QuNGC0Ywg0L3QsNC8XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzdmdcIiwgeyBhdHRyczogeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJ1c2VcIiwgeyBhdHRyczogeyBcInhsaW5rOmhyZWZcIjogXCIjaWNvbl9waG9uZVwiIH0gfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgKzcgKDQyNDIpIDc3Ny01NjZcXG4gICAgXCIpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lbnUtbW9iaWxlLWNvbnRhY3RzX19pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51LW1vYmlsZS1jb250YWN0c19fbGlua1wiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogXCJtYWlsVG86dGRwcm9mbmFzdGlsQG1haWwucnVcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi0J3QsNC/0LjRgdCw0YLRjCDQvdCw0Lwg0L3QsCBlbWFpbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInN2Z1wiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInVzZVwiLCB7IGF0dHJzOiB7IFwieGxpbms6aHJlZlwiOiBcIiNpY29uX2xldHRlclwiIH0gfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgdGRwcm9mbmFzdGlsQG1haWwucnVcXG4gICAgXCIpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZW51LW1vYmlsZS1jb250YWN0c19faXRlbVwiIH0sXG4gICAgICAgIFtfYyhcIlNvY2lhbExpbmtzXCIpXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJsaVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW1haW4tbWVudV9faXRlbSBtb2JpbGUtbWFpbi1tZW51X19pdGVtX211dGVkXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJiYWNrXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW1haW4tbWVudV9fbGlua1wiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwibmF2aWdhdGVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkl0ZW1JY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCLQndCw0LfQsNC0XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcblxcbiAgICAgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByZXZTZWN0aW9uTmFtZSA/IF92bS5wcmV2U2VjdGlvbk5hbWUgOiBcItCd0LDQt9Cw0LRcIikgK1xuICAgICAgICAgICAgICBcIlxcbiAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW1haW4tbWVudV9faWNvblwiIH0sIFtcbiAgICBfdm0uY3VycmVudExldmVsRGVwdGhcbiAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2ljb25cIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgc3JjOiBfdm0uc3JjXG4gICAgICAgICAgICAgID8gX3ZtLnNyY1xuICAgICAgICAgICAgICA6IF92bS5TSVRFX1RFTVBMQVRFX1BBVEggKyBcIi9pbWFnZXMvZGVtby9pcGhvbmUuc3ZnXCIsXG4gICAgICAgICAgICBhbHQ6IFwi0JjQt9C+0LHRgNCw0LbQtdC90LjQtSDRgNCw0LfQtNC10LvQsCDCq1wiICsgX3ZtLm5hbWUgKyBcIsK7XCIsXG4gICAgICAgICAgICBsb2FkaW5nOiBcImxhenlcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMjRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIDogX2MoXCJzdmdcIiwgeyBhdHRyczogeyB3aWR0aDogXCIyNFwiLCBoZWlnaHQ6IFwiMjRcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcInVzZVwiLCB7IGF0dHJzOiB7IFwieGxpbms6aHJlZlwiOiBfdm0uZ2V0SWNvbkZyb21MYWJlbChfdm0ubmFtZSkgfSB9KVxuICAgICAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJuYXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1wYWdlcy1tZW51XCIsIGF0dHJzOiB7IHJvbGU6IFwibmF2aWdhdGlvblwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLXBhZ2VzLW1lbnVfX3RpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAg0J/QvtC60YPQv9Cw0YLQtdC70Y/QvFxcbiAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1wYWdlcy1tZW51X19saXN0IGxpc3QtcmVzZXRcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLnBhZ2VzLCBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IHJlZi5uYW1lXG4gICAgICAgICAgdmFyIGxpbmsgPSByZWYubGlua1xuICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLXBhZ2VzLW1lbnVfX2l0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGxpbmssXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9iaWxlLXBhZ2VzLW1lbnVfX2xpbmtcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBsaW5rLCB0aXRsZTogXCLQn9C10YDQtdC50YLQuCDQuiDRgdGC0YDQsNC90LjRhtC1IFwiICsgbmFtZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG5hbWUpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkbFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHRleHQtY2VudGVyIG1iLTNcIiB9LCBbXG4gICAgICAgIF92bS5fdihcItCd0LDRiNC4INC/0YDQvtC10LrRgtGLXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgdmFyIG5hbWUgPSByZWYubmFtZVxuICAgICAgICB2YXIgbG9nb1NyYyA9IHJlZi5sb2dvU3JjXG4gICAgICAgIHJldHVybiBfYyhcImRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgY29sLXNtIHRleHQtY2VudGVyIG1iLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiBfdm0uU0lURV9URU1QTEFURV9QQVRIICsgbG9nb1NyYyxcbiAgICAgICAgICAgICAgYWx0OiBcItCb0L7Qs9C+0YLQuNC/INC60L7QvNC/0LDQvdC40LggwqtcIiArIG5hbWUgKyBcIsK7XCIsXG4gICAgICAgICAgICAgIGxvYWRpbmc6IFwibGF6eVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGxcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNvY2lhbCByb3cgbWItMFwiIH0sXG4gICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIF9jKFwiZGRcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgbWItMFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic29jaWFsX19saW5rXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBocmVmOiBpdGVtLmxpbmssXG4gICAgICAgICAgICAgIHRpdGxlOiBcItCf0LXRgNC10LnRgtC4INCyINC90LDRiCDCq1wiICsgaXRlbS5uYW1lICsgXCLCu1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvY2lhbF9faWNvblwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGFsdDogXCLQm9C+0LPQviBcIiArIGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJsaVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2l0ZW1cIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwibW9iaWxlLW1haW4tbWVudV9faXRlbV9jYXRhbG9nXCI6IF92bS5pdGVtLmxhYmVsID09PSBcItCa0LDRgtCw0LvQvtCzXCIsXG4gICAgICAgIFwibW9iaWxlLW1haW4tbWVudV9faXRlbV9zYWxlc1wiOiBfdm0uaXRlbS5sYWJlbCA9PT0gXCLQkNC60YbQuNC4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5pdGVtLmhhc0l0ZW1zXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibGlua1wiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtbWFpbi1tZW51X19saW5rXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwibmF2aWdhdGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5pdGVtLmxhYmVsKSArIFwiXFxuICBcIildXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2xpbmtcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJcIiwgaHJlZjogX3ZtLml0ZW0udXJsIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5pdGVtLmxhYmVsKSArIFwiXFxuICBcIildXG4gICAgICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZW51LXVzZXItYmxvY2tcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51LXVzZXItYmxvY2tfX2l0ZW0gbWVudS11c2VyLWJsb2NrX19pdGVtX3BlcnNvbmFsXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIlwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwic3ZnXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMjBcIiwgaGVpZ2h0OiBcIjIwXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidXNlXCIsIHsgYXR0cnM6IHsgXCJ4bGluazpocmVmXCI6IFwiI2ljb25fdXNlclwiIH0gfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICDQm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YJcXG4gICAgICBcIilcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgwKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDEpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcIm1lbnUtdXNlci1ibG9ja19faXRlbSBtZW51LXVzZXItYmxvY2tfX2l0ZW1fcmVnaXN0cmF0aW9uXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgINCg0LXQs9C40YHRgtGA0LDRhtC40Y9cXG4gICAgICBcIildXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHRleHQtY2VudGVyIGJvcmRlci1lbmQgYm9yZGVyLXRvcFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwibWVudS11c2VyLWJsb2NrX19pdGVtIG1lbnUtdXNlci1ibG9ja19faXRlbV9vcmRlci1saXN0XCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIlwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgINCc0L7QuCDQt9Cw0LrQsNC30YtcXG4gICAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgdGV4dC1jZW50ZXIgYm9yZGVyLXRvcFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS11c2VyLWJsb2NrX19pdGVtIG1lbnUtdXNlci1ibG9ja19faXRlbV9ib251c2VzXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIlwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIDEwMCDQsdCw0LvQu9C+0LJcXG4gICAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5TbW9vdGhSZWZsb3c9ZSgpOnQuU21vb3RoUmVmbG93PWUoKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUscil7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCluLmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9NDQpfShbZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjgpKFwid2tzXCIpLG89bigxNCksaT1uKDEpLlN5bWJvbCx1PVwiZnVuY3Rpb25cIj09dHlwZW9mIGk7KHQuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gclt0XXx8KHJbdF09dSYmaVt0XXx8KHU/aTpvKShcIlN5bWJvbC5cIit0KSl9KS5zdG9yZT1yfSxmdW5jdGlvbih0LGUpe3ZhciBuPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPW4pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxKSxvPW4oNyksaT1uKDMpLHU9bigxOSkscz1uKDI0KSxmPWZ1bmN0aW9uKHQsZSxuKXt2YXIgYSxjLGwscCx2PXQmZi5GLGg9dCZmLkcseT10JmYuUyxkPXQmZi5QLG09dCZmLkIsZz1oP3I6eT9yW2VdfHwocltlXT17fSk6KHJbZV18fHt9KS5wcm90b3R5cGUsYj1oP286b1tlXXx8KG9bZV09e30pLFM9Yi5wcm90b3R5cGV8fChiLnByb3RvdHlwZT17fSk7Zm9yKGEgaW4gaCYmKG49ZSksbilsPSgoYz0hdiYmZyYmdm9pZCAwIT09Z1thXSk/ZzpuKVthXSxwPW0mJmM/cyhsLHIpOmQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGw/cyhGdW5jdGlvbi5jYWxsLGwpOmwsZyYmdShnLGEsbCx0JmYuVSksYlthXSE9bCYmaShiLGEscCksZCYmU1thXSE9bCYmKFNbYV09bCl9O3IuY29yZT1vLGYuRj0xLGYuRz0yLGYuUz00LGYuUD04LGYuQj0xNixmLlc9MzIsZi5VPTY0LGYuUj0xMjgsdC5leHBvcnRzPWZ9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQpLG89bigxMyk7dC5leHBvcnRzPW4oOCk/ZnVuY3Rpb24odCxlLG4pe3JldHVybiByLmYodCxlLG8oMSxuKSl9OmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdFtlXT1uLHR9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMiksbz1uKDM0KSxpPW4oMjMpLHU9T2JqZWN0LmRlZmluZVByb3BlcnR5O2UuZj1uKDgpP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbih0LGUsbil7aWYocih0KSxlPWkoZSwhMCkscihuKSxvKXRyeXtyZXR1cm4gdSh0LGUsbil9Y2F0Y2godCl7fWlmKFwiZ2V0XCJpbiBufHxcInNldFwiaW4gbil0aHJvdyBUeXBlRXJyb3IoXCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCFcIik7cmV0dXJuXCJ2YWx1ZVwiaW4gbiYmKHRbZV09bi52YWx1ZSksdH19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiB0P251bGwhPT10OlwiZnVuY3Rpb25cIj09dHlwZW9mIHR9fSxmdW5jdGlvbih0LGUpe3ZhciBuPXt9Lmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiBuLmNhbGwodCxlKX19LGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5leHBvcnRzPXt2ZXJzaW9uOlwiMi41LjdcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1uKX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz0hbig5KShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dHJ5e3JldHVybiEhdCgpfWNhdGNoKHQpe3JldHVybiEwfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDM3KSxvPW4oMjkpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDI1KSxvPW4oMTcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gcihvKHQpKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDUpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZighcih0KSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJue2VudW1lcmFibGU6ISgxJnQpLGNvbmZpZ3VyYWJsZTohKDImdCksd3JpdGFibGU6ISg0JnQpLHZhbHVlOmV9fX0sZnVuY3Rpb24odCxlKXt2YXIgbj0wLHI9TWF0aC5yYW5kb20oKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PXQ/XCJcIjp0LFwiKV9cIiwoKytuK3IpLnRvU3RyaW5nKDM2KSl9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz17fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0KHIodCkpfX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT10KXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIit0KTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPSExfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxKSxvPW4oMyksaT1uKDYpLHU9bigxNCkoXCJzcmNcIikscz1GdW5jdGlvbi50b1N0cmluZyxmPShcIlwiK3MpLnNwbGl0KFwidG9TdHJpbmdcIik7big3KS5pbnNwZWN0U291cmNlPWZ1bmN0aW9uKHQpe3JldHVybiBzLmNhbGwodCl9LCh0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4scyl7dmFyIGE9XCJmdW5jdGlvblwiPT10eXBlb2YgbjthJiYoaShuLFwibmFtZVwiKXx8byhuLFwibmFtZVwiLGUpKSx0W2VdIT09biYmKGEmJihpKG4sdSl8fG8obix1LHRbZV0/XCJcIit0W2VdOmYuam9pbihTdHJpbmcoZSkpKSksdD09PXI/dFtlXT1uOnM/dFtlXT90W2VdPW46byh0LGUsbik6KGRlbGV0ZSB0W2VdLG8odCxlLG4pKSl9KShGdW5jdGlvbi5wcm90b3R5cGUsXCJ0b1N0cmluZ1wiLGZ1bmN0aW9uKCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcyYmdGhpc1t1XXx8cy5jYWxsKHRoaXMpfSl9LGZ1bmN0aW9uKHQsZSl7dmFyIG49e30udG9TdHJpbmc7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBuLmNhbGwodCkuc2xpY2UoOCwtMSl9fSxmdW5jdGlvbih0LGUpe2UuZj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZX0sZnVuY3Rpb24odCxlKXt2YXIgbj1NYXRoLmNlaWwscj1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaXNOYU4odD0rdCk/MDoodD4wP3I6bikodCl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big1KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtpZighcih0KSlyZXR1cm4gdDt2YXIgbixvO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mKG49dC50b1N0cmluZykmJiFyKG89bi5jYWxsKHQpKSlyZXR1cm4gbztpZihcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXQudmFsdWVPZikmJiFyKG89bi5jYWxsKHQpKSlyZXR1cm4gbztpZighZSYmXCJmdW5jdGlvblwiPT10eXBlb2Yobj10LnRvU3RyaW5nKSYmIXIobz1uLmNhbGwodCkpKXJldHVybiBvO3Rocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQ3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2lmKHIodCksdm9pZCAwPT09ZSlyZXR1cm4gdDtzd2l0Y2gobil7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gdC5jYWxsKGUsbil9O2Nhc2UgMjpyZXR1cm4gZnVuY3Rpb24obixyKXtyZXR1cm4gdC5jYWxsKGUsbixyKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHIsbyl7cmV0dXJuIHQuY2FsbChlLG4scixvKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkoZSxhcmd1bWVudHMpfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIwKTt0LmV4cG9ydHM9T2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKT9PYmplY3Q6ZnVuY3Rpb24odCl7cmV0dXJuXCJTdHJpbmdcIj09cih0KT90LnNwbGl0KFwiXCIpOk9iamVjdCh0KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIyKSxvPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdD4wP28ocih0KSw5MDA3MTk5MjU0NzQwOTkxKTowfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjgpKFwia2V5c1wiKSxvPW4oMTQpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gclt0XXx8KHJbdF09byh0KSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big3KSxvPW4oMSksaT1vW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdfHwob1tcIl9fY29yZS1qc19zaGFyZWRfX1wiXT17fSk7KHQuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiBpW3RdfHwoaVt0XT12b2lkIDAhPT1lP2U6e30pfSkoXCJ2ZXJzaW9uc1wiLFtdKS5wdXNoKHt2ZXJzaW9uOnIudmVyc2lvbixtb2RlOm4oMTgpP1wicHVyZVwiOlwiZ2xvYmFsXCIsY29weXJpZ2h0OlwiwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KVwifSl9LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPVwiY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mXCIuc3BsaXQoXCIsXCIpfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0KS5mLG89big2KSxpPW4oMCkoXCJ0b1N0cmluZ1RhZ1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe3QmJiFvKHQ9bj90OnQucHJvdG90eXBlLGkpJiZyKHQsaSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOmV9KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDApKFwidW5zY29wYWJsZXNcIiksbz1BcnJheS5wcm90b3R5cGU7dm9pZCAwPT1vW3JdJiZuKDMpKG8scix7fSksdC5leHBvcnRzPWZ1bmN0aW9uKHQpe29bcl1bdF09ITB9fSxmdW5jdGlvbih0LGUpe2UuZj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxOCksbz1uKDIpLGk9bigxOSksdT1uKDMpLHM9bigxNSksZj1uKDQ4KSxhPW4oMzApLGM9big1MiksbD1uKDApKFwiaXRlcmF0b3JcIikscD0hKFtdLmtleXMmJlwibmV4dFwiaW5bXS5rZXlzKCkpLHY9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuLGgseSxkLG0pe2YobixlLGgpO3ZhciBnLGIsUyx4PWZ1bmN0aW9uKHQpe2lmKCFwJiZ0IGluIGopcmV0dXJuIGpbdF07c3dpdGNoKHQpe2Nhc2VcImtleXNcIjpjYXNlXCJ2YWx1ZXNcIjpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG4odGhpcyx0KX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBuKHRoaXMsdCl9fSx3PWUrXCIgSXRlcmF0b3JcIixFPVwidmFsdWVzXCI9PXksTz0hMSxqPXQucHJvdG90eXBlLF89altsXXx8altcIkBAaXRlcmF0b3JcIl18fHkmJmpbeV0sVD1ffHx4KHkpLEE9eT9FP3goXCJlbnRyaWVzXCIpOlQ6dm9pZCAwLFA9XCJBcnJheVwiPT1lJiZqLmVudHJpZXN8fF87aWYoUCYmKFM9YyhQLmNhbGwobmV3IHQpKSkhPT1PYmplY3QucHJvdG90eXBlJiZTLm5leHQmJihhKFMsdywhMCkscnx8XCJmdW5jdGlvblwiPT10eXBlb2YgU1tsXXx8dShTLGwsdikpLEUmJl8mJlwidmFsdWVzXCIhPT1fLm5hbWUmJihPPSEwLFQ9ZnVuY3Rpb24oKXtyZXR1cm4gXy5jYWxsKHRoaXMpfSksciYmIW18fCFwJiYhTyYmaltsXXx8dShqLGwsVCksc1tlXT1ULHNbd109dix5KWlmKGc9e3ZhbHVlczpFP1Q6eChcInZhbHVlc1wiKSxrZXlzOmQ/VDp4KFwia2V5c1wiKSxlbnRyaWVzOkF9LG0pZm9yKGIgaW4gZyliIGluIGp8fGkoaixiLGdbYl0pO2Vsc2UgbyhvLlArby5GKihwfHxPKSxlLGcpO3JldHVybiBnfX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz0hbig4KSYmIW4oOSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KG4oMzUpKFwiZGl2XCIpLFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDUpLG89bigxKS5kb2N1bWVudCxpPXIobykmJnIoby5jcmVhdGVFbGVtZW50KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGk/by5jcmVhdGVFbGVtZW50KHQpOnt9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTIpLG89big0OSksaT1uKDI5KSx1PW4oMjcpKFwiSUVfUFJPVE9cIikscz1mdW5jdGlvbigpe30sZj1mdW5jdGlvbigpe3ZhciB0LGU9bigzNSkoXCJpZnJhbWVcIikscj1pLmxlbmd0aDtmb3IoZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLG4oNTEpLmFwcGVuZENoaWxkKGUpLGUuc3JjPVwiamF2YXNjcmlwdDpcIiwodD1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQpLm9wZW4oKSx0LndyaXRlKFwiPHNjcmlwdD5kb2N1bWVudC5GPU9iamVjdDxcXC9zY3JpcHQ+XCIpLHQuY2xvc2UoKSxmPXQuRjtyLS07KWRlbGV0ZSBmLnByb3RvdHlwZVtpW3JdXTtyZXR1cm4gZigpfTt0LmV4cG9ydHM9T2JqZWN0LmNyZWF0ZXx8ZnVuY3Rpb24odCxlKXt2YXIgbjtyZXR1cm4gbnVsbCE9PXQ/KHMucHJvdG90eXBlPXIodCksbj1uZXcgcyxzLnByb3RvdHlwZT1udWxsLG5bdV09dCk6bj1mKCksdm9pZCAwPT09ZT9uOm8obixlKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDYpLG89bigxMSksaT1uKDM4KSghMSksdT1uKDI3KShcIklFX1BST1RPXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3ZhciBuLHM9byh0KSxmPTAsYT1bXTtmb3IobiBpbiBzKW4hPXUmJnIocyxuKSYmYS5wdXNoKG4pO2Zvcig7ZS5sZW5ndGg+ZjspcihzLG49ZVtmKytdKSYmKH5pKGEsbil8fGEucHVzaChuKSk7cmV0dXJuIGF9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMSksbz1uKDI2KSxpPW4oNTApO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuLHUpe3ZhciBzLGY9cihlKSxhPW8oZi5sZW5ndGgpLGM9aSh1LGEpO2lmKHQmJm4hPW4pe2Zvcig7YT5jOylpZigocz1mW2MrK10pIT1zKXJldHVybiEwfWVsc2UgZm9yKDthPmM7YysrKWlmKCh0fHxjIGluIGYpJiZmW2NdPT09bilyZXR1cm4gdHx8Y3x8MDtyZXR1cm4hdCYmLTF9fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMzEpLG89big2NSksaT1uKDE1KSx1PW4oMTEpO3QuZXhwb3J0cz1uKDMzKShBcnJheSxcIkFycmF5XCIsZnVuY3Rpb24odCxlKXt0aGlzLl90PXUodCksdGhpcy5faT0wLHRoaXMuX2s9ZX0sZnVuY3Rpb24oKXt2YXIgdD10aGlzLl90LGU9dGhpcy5fayxuPXRoaXMuX2krKztyZXR1cm4hdHx8bj49dC5sZW5ndGg/KHRoaXMuX3Q9dm9pZCAwLG8oMSkpOm8oMCxcImtleXNcIj09ZT9uOlwidmFsdWVzXCI9PWU/dFtuXTpbbix0W25dXSl9LFwidmFsdWVzXCIpLGkuQXJndW1lbnRzPWkuQXJyYXkscihcImtleXNcIikscihcInZhbHVlc1wiKSxyKFwiZW50cmllc1wiKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjApO3QuZXhwb3J0cz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbih0KXtyZXR1cm5cIkFycmF5XCI9PXIodCl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxKSxvPW4oNyksaT1uKDE4KSx1PW4oNDIpLHM9big0KS5mO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1vLlN5bWJvbHx8KG8uU3ltYm9sPWk/e306ci5TeW1ib2x8fHt9KTtcIl9cIj09dC5jaGFyQXQoMCl8fHQgaW4gZXx8cyhlLHQse3ZhbHVlOnUuZih0KX0pfX0sZnVuY3Rpb24odCxlLG4pe2UuZj1uKDApfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzNyksbz1uKDI5KS5jb25jYXQoXCJsZW5ndGhcIixcInByb3RvdHlwZVwiKTtlLmY9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpO24oNDUpLG4oNTMpLG4oNjApLG4oNjEpLG4oMzkpLG4oNjYpLG4oNjgpLG4oNzApLG4oNzQpLG4oNzUpLG4oODApO2Z1bmN0aW9uIHIodCxlKXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsci5rZXkscil9fXZhciBvPXttZXRob2RzOnskc21vb3RoUmVmbG93OmZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3RoaXMuX3Ntb290aEVsZW1lbnRzLnB1c2gobmV3IGEodCkpfS5iaW5kKHRoaXMpO0FycmF5LmlzQXJyYXkodCk/dC5mb3JFYWNoKGUpOmUodCl9LCR1bnNtb290aFJlZmxvdzpmdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpmKCksZT10aGlzLiRlbCxuPXRoaXMuX3Ntb290aEVsZW1lbnRzLmZpbmRJbmRleChmdW5jdGlvbihuKXtyZXR1cm4gdShlLG4ub3B0aW9ucy5lbCk9PT11KGUsdC5lbCl9KTtpZigtMT09PW4pcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIlZTUl9FUlJPUjogJHVuc21vb3RoUmVmbG93IGZhaWxlZCBkdWUgdG8gaW52YWxpZCBlbCBvcHRpb25cIik7dGhpcy5fc21vb3RoRWxlbWVudHNbbl0uc2NoZWR1bGVSZW1vdmFsKCl9LmJpbmQodGhpcyk7QXJyYXkuaXNBcnJheSh0KT90LmZvckVhY2goZSk6ZSh0KX19LGJlZm9yZU1vdW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLl9zbW9vdGhFbGVtZW50cz1bXSx0aGlzLl9lbmRMaXN0ZW5lcj1mdW5jdGlvbihlKXt2YXIgbj0hMCxyPSExLG89dm9pZCAwO3RyeXtmb3IodmFyIGksdT10Ll9zbW9vdGhFbGVtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCk7IShuPShpPXUubmV4dCgpKS5kb25lKTtuPSEwKXtpLnZhbHVlLmVuZExpc3RlbmVyKGUpfX1jYXRjaCh0KXtyPSEwLG89dH1maW5hbGx5e3RyeXtufHxudWxsPT11LnJldHVybnx8dS5yZXR1cm4oKX1maW5hbGx5e2lmKHIpdGhyb3cgb319fX0sbW91bnRlZDpmdW5jdGlvbigpe3RoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsdGhpcy5fZW5kTGlzdGVuZXIse3Bhc3NpdmU6ITB9KX0sZGVzdHJveWVkOmZ1bmN0aW9uKCl7dGhpcy4kZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIix0aGlzLl9lbmRMaXN0ZW5lcix7cGFzc2l2ZTohMH0pfSxiZWZvcmVVcGRhdGU6ZnVuY3Rpb24oKXt0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHRoaXMuX2VuZExpc3RlbmVyLHtwYXNzaXZlOiEwfSksaSh0aGlzKTt2YXIgdD0hMCxlPSExLG49dm9pZCAwO3RyeXtmb3IodmFyIHIsbz10aGlzLl9zbW9vdGhFbGVtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCk7ISh0PShyPW8ubmV4dCgpKS5kb25lKTt0PSEwKXt2YXIgcz1yLnZhbHVlLGY9dSh0aGlzLiRlbCxzLm9wdGlvbnMuZWwpO3Muc2V0U21vb3RoRWxlbWVudChmKSxzLnNldEJlZm9yZVZhbHVlcygpfX1jYXRjaCh0KXtlPSEwLG49dH1maW5hbGx5e3RyeXt0fHxudWxsPT1vLnJldHVybnx8by5yZXR1cm4oKX1maW5hbGx5e2lmKGUpdGhyb3cgbn19fSx1cGRhdGVkOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpe3ZhciBlPSEwLG49ITEscj12b2lkIDA7dHJ5e2Zvcih2YXIgbyxzPXQuX3Ntb290aEVsZW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKTshKGU9KG89cy5uZXh0KCkpLmRvbmUpO2U9ITApe3ZhciBmPW8udmFsdWUsYT11KHQuJGVsLGYub3B0aW9ucy5lbCk7Zi5zZXRTbW9vdGhFbGVtZW50KGEpLGYuZG9TbW9vdGhSZWZsb3coKX19Y2F0Y2godCl7bj0hMCxyPXR9ZmluYWxseXt0cnl7ZXx8bnVsbD09cy5yZXR1cm58fHMucmV0dXJuKCl9ZmluYWxseXtpZihuKXRocm93IHJ9fWkodCl9KX19O2Z1bmN0aW9uIGkodCl7Zm9yKHZhciBlPXQuX3Ntb290aEVsZW1lbnRzLmxlbmd0aDtlLS07KXt2YXIgbj10Ll9zbW9vdGhFbGVtZW50c1tlXTtuLmlzUmVtb3ZlZCYmKG4uc3RvcFRyYW5zaXRpb24oKSx0Ll9zbW9vdGhFbGVtZW50cy5zcGxpY2UoZSwxKSl9fWZ1bmN0aW9uIHUodCxlKXtyZXR1cm4hdHx8dCBpbnN0YW5jZW9mIE5vZGUmJnQubm9kZVR5cGU9PT1Ob2RlLkNPTU1FTlRfTk9ERT9udWxsOm51bGw9PT1lP3Q6ZnVuY3Rpb24odCxlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT90Lm1hdGNoZXMoZSk/dDp0LnF1ZXJ5U2VsZWN0b3IoZSk6ZX0odCxlKX12YXIgcz17SU5BQ1RJVkU6XCJJTkFDVElWRVwiLEFDVElWRTpcIkFDVElWRVwifSxmPWZ1bmN0aW9uKCl7cmV0dXJue2VsOm51bGwscHJvcGVydHk6XCJoZWlnaHRcIix0cmFuc2l0aW9uRXZlbnQ6bnVsbCxoaWRlT3ZlcmZsb3c6ITAsZGVidWc6ITF9fSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlKXshZnVuY3Rpb24odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpO3ZhciBuPWYoKTtPYmplY3QuYXNzaWduKG4sZSk7dmFyIHI9dGhpcy5wYXJzZVByb3BlcnR5T3B0aW9uKG4ucHJvcGVydHkpO24udHJhbnNpdGlvbnx8KG4udHJhbnNpdGlvbj1yLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIlwiLmNvbmNhdCh0LFwiIC41c1wiKX0pLmpvaW4oXCIsXCIpKTt2YXIgbz17JHNtb290aEVsOm51bGwscHJvcGVydGllczpyLGJlZm9yZVJlY3Q6e30sc3RhdGU6cy5JTkFDVElWRSxpc1JlbW92ZWQ6ITF9O09iamVjdC5hc3NpZ24odGhpcyx7b3B0aW9uczpufSxvKSx0aGlzLmVuZExpc3RlbmVyPXRoaXMuZW5kTGlzdGVuZXIuYmluZCh0aGlzKSx0aGlzLmRlYnVnPXRoaXMuZGVidWcuYmluZCh0aGlzKX1yZXR1cm4gZnVuY3Rpb24odCxlLG4pe2UmJnIodC5wcm90b3R5cGUsZSksbiYmcih0LG4pfSh0LFt7a2V5Olwic2V0U21vb3RoRWxlbWVudFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuJHNtb290aEVsPXR9fSx7a2V5OlwidHJhbnNpdGlvblRvXCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5zdGF0ZT10fX0se2tleTpcInBhcnNlUHJvcGVydHlPcHRpb25cIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9bdF06QXJyYXkuaXNBcnJheSh0KT90OltdfX0se2tleTpcInNldEJlZm9yZVZhbHVlc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kc21vb3RoRWw7aWYodGhpcy5iZWZvcmVSZWN0PXt9LHQpe3ZhciBlPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpfHx7fSxuPWUudHJhbnNpdGlvbixyPWUub3ZlcmZsb3dYLG89ZS5vdmVyZmxvd1k7dGhpcy5jb21wdXRlZFRyYW5zaXRpb249bix0aGlzLm92ZXJmbG93WD1yLHRoaXMub3ZlcmZsb3dZPW8sdGhpcy5iZWZvcmVSZWN0PWModCksdGhpcy5zdGF0ZT09PXMuQUNUSVZFJiYodGhpcy5zdG9wVHJhbnNpdGlvbigpLHRoaXMuZGVidWcoXCJUcmFuc2l0aW9uIHdhcyBpbnRlcnJ1cHRlZC5cIikpfX19LHtrZXk6XCJkaWRWYWx1ZXNDaGFuZ2VcIix2YWx1ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXQscj1lO2lmKDA9PT1PYmplY3Qua2V5cyh0KS5sZW5ndGgpcmV0dXJuITE7dmFyIG89ITAsaT0hMSx1PXZvaWQgMDt0cnl7Zm9yKHZhciBzLGY9dGhpcy5wcm9wZXJ0aWVzW1N5bWJvbC5pdGVyYXRvcl0oKTshKG89KHM9Zi5uZXh0KCkpLmRvbmUpO289ITApe3ZhciBhPXMudmFsdWU7aWYoXCJ0cmFuc2Zvcm1cIj09PWEmJihuLnRvcCE9PXIudG9wfHxuLmxlZnQhPT1yLmxlZnQpKXJldHVybiEwO2lmKG5bYV0hPT1yW2FdKXJldHVybiEwfX1jYXRjaCh0KXtpPSEwLHU9dH1maW5hbGx5e3RyeXtvfHxudWxsPT1mLnJldHVybnx8Zi5yZXR1cm4oKX1maW5hbGx5e2lmKGkpdGhyb3cgdX19cmV0dXJuITF9fSx7a2V5OlwiZG9TbW9vdGhSZWZsb3dcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcImRhdGEgdXBkYXRlXCIsZT10aGlzLiRzbW9vdGhFbDtpZighZSlyZXR1cm4gdGhpcy5kZWJ1ZyhcIkNvdWxkIG5vdCBmaW5kIHJlZ2lzdGVyZWQgZWwgdG8gcGVyZm9ybSBkb1Ntb290aFJlZmxvdy5cIiksdm9pZCB0aGlzLnRyYW5zaXRpb25UbyhzLklOQUNUSVZFKTtpZih0aGlzLnN0YXRlIT09cy5BQ1RJVkUpe3ZhciBuPXRoaXMuYmVmb3JlUmVjdCxyPXRoaXMucHJvcGVydGllcyxvPXRoaXMub3B0aW9ucyxpPXRoaXMub3ZlcmZsb3dYLHU9dGhpcy5vdmVyZmxvd1ksZj10aGlzLmRlYnVnO3RoaXMudHJhbnNpdGlvblRvKHMuQUNUSVZFKSxmKFwiZG9TbW9vdGhSZWZsb3cgdHJpZ2dlcmVkIGJ5OlwiLFwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6dC50YXJnZXQpO3ZhciBhPWMoZSk7aWYoIXRoaXMuZGlkVmFsdWVzQ2hhbmdlKG4sYSkpcmV0dXJuIGYoXCJQcm9wZXJ0eSB2YWx1ZXMgZGlkIG5vdCBjaGFuZ2UuXCIpLHZvaWQgdGhpcy50cmFuc2l0aW9uVG8ocy5JTkFDVElWRSk7ZihcImJlZm9yZVJlY3RcIixuKSxmKFwiYWZ0ZXJSZWN0XCIsYSksdGhpcy5zYXZlT3ZlcmZsb3dWYWx1ZXMoZSxpLHUpO3ZhciBsPSEwLHA9ITEsdj12b2lkIDA7dHJ5e2Zvcih2YXIgaCx5PXJbU3ltYm9sLml0ZXJhdG9yXSgpOyEobD0oaD15Lm5leHQoKSkuZG9uZSk7bD0hMCl7dmFyIGQ9aC52YWx1ZTtpZihcInRyYW5zZm9ybVwiPT09ZCl7dmFyIG09bi5sZWZ0LWEubGVmdCxnPW4udG9wLWEudG9wO2Uuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlKFwiLmNvbmNhdChtLFwicHgsIFwiKS5jb25jYXQoZyxcInB4KVwiKX1lbHNlIGUuc3R5bGVbZF09bltkXStcInB4XCJ9fWNhdGNoKHQpe3A9ITAsdj10fWZpbmFsbHl7dHJ5e2x8fG51bGw9PXkucmV0dXJufHx5LnJldHVybigpfWZpbmFsbHl7aWYocCl0aHJvdyB2fX1lLm9mZnNldEhlaWdodCxlLnN0eWxlLnRyYW5zaXRpb249W3RoaXMuY29tcHV0ZWRUcmFuc2l0aW9uLG8udHJhbnNpdGlvbl0uZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0fSkuam9pbihcIixcIik7dmFyIGI9ITAsUz0hMSx4PXZvaWQgMDt0cnl7Zm9yKHZhciB3LEU9cltTeW1ib2wuaXRlcmF0b3JdKCk7IShiPSh3PUUubmV4dCgpKS5kb25lKTtiPSEwKXt2YXIgTz13LnZhbHVlO1widHJhbnNmb3JtXCI9PT1PP2Uuc3R5bGUudHJhbnNmb3JtPVwiXCI6ZS5zdHlsZVtPXT1hW09dK1wicHhcIn19Y2F0Y2godCl7Uz0hMCx4PXR9ZmluYWxseXt0cnl7Ynx8bnVsbD09RS5yZXR1cm58fEUucmV0dXJuKCl9ZmluYWxseXtpZihTKXRocm93IHh9fX19fSx7a2V5OlwiZW5kTGlzdGVuZXJcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLiRzbW9vdGhFbCxuPXRoaXMucHJvcGVydGllcztlPT09dC50YXJnZXQ/bi5pbmNsdWRlcyh0LnByb3BlcnR5TmFtZSkmJih0aGlzLnN0b3BUcmFuc2l0aW9uKCksdGhpcy5oYXNSZWdpc3RlcmVkRXZlbnRFbWl0dGVyKCkmJnRoaXMuc2V0QmVmb3JlVmFsdWVzKCkpOnRoaXMuaXNSZWdpc3RlcmVkRXZlbnRFbWl0dGVyKGUsdCkmJnRoaXMuZG9TbW9vdGhSZWZsb3codCl9fSx7a2V5OlwiaGFzUmVnaXN0ZXJlZEV2ZW50RW1pdHRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLnRyYW5zaXRpb25FdmVudDtyZXR1cm4gbnVsbCE9PXQmJk9iamVjdC5rZXlzKHQpLmxlbmd0aD4wfX0se2tleTpcImlzUmVnaXN0ZXJlZEV2ZW50RW1pdHRlclwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuaGFzUmVnaXN0ZXJlZEV2ZW50RW1pdHRlcigpKXJldHVybiExO3ZhciBuPWUudGFyZ2V0LHI9dGhpcy5vcHRpb25zLnRyYW5zaXRpb25FdmVudCxvPXIuc2VsZWN0b3IsaT1yLnByb3BlcnR5TmFtZTtpZihudWxsIT1pJiZpIT09ZS5wcm9wZXJ0eU5hbWUpcmV0dXJuITE7aWYobnVsbCE9byYmIW4ubWF0Y2hlcyhvKSlyZXR1cm4hMTtpZigtMT09PXRoaXMucHJvcGVydGllcy5pbmRleE9mKFwidHJhbnNmb3JtXCIpKXt2YXIgdT0hMSxzPWUuY29tcG9zZWRQYXRoP2UuY29tcG9zZWRQYXRoKCk6W10sZj0hMCxhPSExLGM9dm9pZCAwO3RyeXtmb3IodmFyIGwscD1zW1N5bWJvbC5pdGVyYXRvcl0oKTshKGY9KGw9cC5uZXh0KCkpLmRvbmUpO2Y9ITApe2lmKHQ9PT1sLnZhbHVlKXt1PSEwO2JyZWFrfX19Y2F0Y2godCl7YT0hMCxjPXR9ZmluYWxseXt0cnl7Znx8bnVsbD09cC5yZXR1cm58fHAucmV0dXJuKCl9ZmluYWxseXtpZihhKXRocm93IGN9fWlmKCF1KXJldHVybiExfXJldHVybiEwfX0se2tleTpcInNhdmVPdmVyZmxvd1ZhbHVlc1wiLHZhbHVlOmZ1bmN0aW9uKHQsZSxuKXt0aGlzLm9wdGlvbnMuaGlkZU92ZXJmbG93JiYodGhpcy5vdmVyZmxvd1g9ZSx0aGlzLm92ZXJmbG93WT1uLHQuc3R5bGUub3ZlcmZsb3dYPVwiaGlkZGVuXCIsdC5zdHlsZS5vdmVyZmxvd1k9XCJoaWRkZW5cIil9fSx7a2V5OlwicmVzdG9yZU92ZXJmbG93VmFsdWVzXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5vcHRpb25zLG49dGhpcy5vdmVyZmxvd1gscj10aGlzLm92ZXJmbG93WTtlLmhpZGVPdmVyZmxvdyYmKHQuc3R5bGUub3ZlcmZsb3dYPW4sdC5zdHlsZS5vdmVyZmxvd1k9cil9fSx7a2V5Olwic3RvcFRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuJHNtb290aEVsLGU9dGhpcy5wcm9wZXJ0aWVzLG49ITAscj0hMSxvPXZvaWQgMDt0cnl7Zm9yKHZhciBpLHU9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShuPShpPXUubmV4dCgpKS5kb25lKTtuPSEwKXt2YXIgZj1pLnZhbHVlO3Quc3R5bGVbZl09bnVsbH19Y2F0Y2godCl7cj0hMCxvPXR9ZmluYWxseXt0cnl7bnx8bnVsbD09dS5yZXR1cm58fHUucmV0dXJuKCl9ZmluYWxseXtpZihyKXRocm93IG99fXRoaXMucmVzdG9yZU92ZXJmbG93VmFsdWVzKHQpLHQuc3R5bGUudHJhbnNpdGlvbj1udWxsLHRoaXMudHJhbnNpdGlvblRvKHMuSU5BQ1RJVkUpfX0se2tleTpcInNjaGVkdWxlUmVtb3ZhbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5pc1JlbW92ZWQ9ITB9fSx7a2V5OlwiZGVidWdcIix2YWx1ZTpmdW5jdGlvbigpe2lmKHRoaXMub3B0aW9ucy5kZWJ1Zyl7dmFyIHQ9W1wiVlNSX0RFQlVHOlwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKTtjb25zb2xlLmxvZy5hcHBseShudWxsLHQpfX19XSksdH0oKSxjPWZ1bmN0aW9uKHQpe3Quc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIjt2YXIgZT10LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49ZS50b3Ascj1lLnJpZ2h0LG89ZS5ib3R0b20saT1lLmxlZnQsdT1lLndpZHRoLHM9ZS5oZWlnaHQsZj1lLngsYT1lLnk7cmV0dXJuIHQuc3R5bGUub3ZlcmZsb3c9bnVsbCx7dG9wOm4scmlnaHQ6cixib3R0b206byxsZWZ0Omksd2lkdGg6dSxoZWlnaHQ6cyx4OmYseTphfX07XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEVsZW1lbnQmJkVsZW1lbnQucHJvdG90eXBlJiYhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyYmKEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXM9RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yfHxFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3J8fEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yfHxFbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yfHxFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0odGhpcy5kb2N1bWVudHx8dGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHQpLG49ZS5sZW5ndGg7LS1uPj0wJiZlLml0ZW0obikhPT10aGlzOyk7cmV0dXJuIG4+LTF9KSxlLmRlZmF1bHQ9b30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oNDYpKCEwKTtuKDMzKShTdHJpbmcsXCJTdHJpbmdcIixmdW5jdGlvbih0KXt0aGlzLl90PVN0cmluZyh0KSx0aGlzLl9pPTB9LGZ1bmN0aW9uKCl7dmFyIHQsZT10aGlzLl90LG49dGhpcy5faTtyZXR1cm4gbj49ZS5sZW5ndGg/e3ZhbHVlOnZvaWQgMCxkb25lOiEwfToodD1yKGUsbiksdGhpcy5faSs9dC5sZW5ndGgse3ZhbHVlOnQsZG9uZTohMX0pfSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIyKSxvPW4oMTcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuKXt2YXIgaSx1LHM9U3RyaW5nKG8oZSkpLGY9cihuKSxhPXMubGVuZ3RoO3JldHVybiBmPDB8fGY+PWE/dD9cIlwiOnZvaWQgMDooaT1zLmNoYXJDb2RlQXQoZikpPDU1Mjk2fHxpPjU2MzE5fHxmKzE9PT1hfHwodT1zLmNoYXJDb2RlQXQoZisxKSk8NTYzMjB8fHU+NTczNDM/dD9zLmNoYXJBdChmKTppOnQ/cy5zbGljZShmLGYrMik6dS01NjMyMCsoaS01NTI5Njw8MTApKzY1NTM2fX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgZnVuY3Rpb24hXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMzYpLG89bigxMyksaT1uKDMwKSx1PXt9O24oMykodSxuKDApKFwiaXRlcmF0b3JcIiksZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLHQuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7dC5wcm90b3R5cGU9cih1LHtuZXh0Om8oMSxuKX0pLGkodCxlK1wiIEl0ZXJhdG9yXCIpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNCksbz1uKDEyKSxpPW4oMTApO3QuZXhwb3J0cz1uKDgpP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzOmZ1bmN0aW9uKHQsZSl7byh0KTtmb3IodmFyIG4sdT1pKGUpLHM9dS5sZW5ndGgsZj0wO3M+Zjspci5mKHQsbj11W2YrK10sZVtuXSk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyMiksbz1NYXRoLm1heCxpPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybih0PXIodCkpPDA/byh0K2UsMCk6aSh0LGUpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMSkuZG9jdW1lbnQ7dC5leHBvcnRzPXImJnIuZG9jdW1lbnRFbGVtZW50fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big2KSxvPW4oMTYpLGk9bigyNykoXCJJRV9QUk9UT1wiKSx1PU9iamVjdC5wcm90b3R5cGU7dC5leHBvcnRzPU9iamVjdC5nZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24odCl7cmV0dXJuIHQ9byh0KSxyKHQsaSk/dFtpXTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNvbnN0cnVjdG9yJiZ0IGluc3RhbmNlb2YgdC5jb25zdHJ1Y3Rvcj90LmNvbnN0cnVjdG9yLnByb3RvdHlwZTp0IGluc3RhbmNlb2YgT2JqZWN0P3U6bnVsbH19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDI0KSxvPW4oMiksaT1uKDE2KSx1PW4oNTQpLHM9big1NSksZj1uKDI2KSxhPW4oNTYpLGM9big1Nyk7byhvLlMrby5GKiFuKDU5KShmdW5jdGlvbih0KXtBcnJheS5mcm9tKHQpfSksXCJBcnJheVwiLHtmcm9tOmZ1bmN0aW9uKHQpe3ZhciBlLG4sbyxsLHA9aSh0KSx2PVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXM/dGhpczpBcnJheSxoPWFyZ3VtZW50cy5sZW5ndGgseT1oPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxkPXZvaWQgMCE9PXksbT0wLGc9YyhwKTtpZihkJiYoeT1yKHksaD4yP2FyZ3VtZW50c1syXTp2b2lkIDAsMikpLHZvaWQgMD09Z3x8dj09QXJyYXkmJnMoZykpZm9yKG49bmV3IHYoZT1mKHAubGVuZ3RoKSk7ZT5tO20rKylhKG4sbSxkP3kocFttXSxtKTpwW21dKTtlbHNlIGZvcihsPWcuY2FsbChwKSxuPW5ldyB2OyEobz1sLm5leHQoKSkuZG9uZTttKyspYShuLG0sZD91KGwseSxbby52YWx1ZSxtXSwhMCk6by52YWx1ZSk7cmV0dXJuIG4ubGVuZ3RoPW0sbn19KX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTIpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbixvKXt0cnl7cmV0dXJuIG8/ZShyKG4pWzBdLG5bMV0pOmUobil9Y2F0Y2goZSl7dmFyIGk9dC5yZXR1cm47dGhyb3cgdm9pZCAwIT09aSYmcihpLmNhbGwodCkpLGV9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTUpLG89bigwKShcIml0ZXJhdG9yXCIpLGk9QXJyYXkucHJvdG90eXBlO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dCYmKHIuQXJyYXk9PT10fHxpW29dPT09dCl9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9big0KSxvPW4oMTMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7ZSBpbiB0P3IuZih0LGUsbygwLG4pKTp0W2VdPW59fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big1OCksbz1uKDApKFwiaXRlcmF0b3JcIiksaT1uKDE1KTt0LmV4cG9ydHM9big3KS5nZXRJdGVyYXRvck1ldGhvZD1mdW5jdGlvbih0KXtpZih2b2lkIDAhPXQpcmV0dXJuIHRbb118fHRbXCJAQGl0ZXJhdG9yXCJdfHxpW3IodCldfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjApLG89bigwKShcInRvU3RyaW5nVGFnXCIpLGk9XCJBcmd1bWVudHNcIj09cihmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHN9KCkpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZSxuLHU7cmV0dXJuIHZvaWQgMD09PXQ/XCJVbmRlZmluZWRcIjpudWxsPT09dD9cIk51bGxcIjpcInN0cmluZ1wiPT10eXBlb2Yobj1mdW5jdGlvbih0LGUpe3RyeXtyZXR1cm4gdFtlXX1jYXRjaCh0KXt9fShlPU9iamVjdCh0KSxvKSk/bjppP3IoZSk6XCJPYmplY3RcIj09KHU9cihlKSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUuY2FsbGVlP1wiQXJndW1lbnRzXCI6dX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDApKFwiaXRlcmF0b3JcIiksbz0hMTt0cnl7dmFyIGk9WzddW3JdKCk7aS5yZXR1cm49ZnVuY3Rpb24oKXtvPSEwfSxBcnJheS5mcm9tKGksZnVuY3Rpb24oKXt0aHJvdyAyfSl9Y2F0Y2godCl7fXQuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2lmKCFlJiYhbylyZXR1cm4hMTt2YXIgbj0hMTt0cnl7dmFyIGk9WzddLHU9aVtyXSgpO3UubmV4dD1mdW5jdGlvbigpe3JldHVybntkb25lOm49ITB9fSxpW3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHV9LHQoaSl9Y2F0Y2godCl7fXJldHVybiBufX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMiksbz1uKDM4KSghMCk7cihyLlAsXCJBcnJheVwiLHtpbmNsdWRlczpmdW5jdGlvbih0KXtyZXR1cm4gbyh0aGlzLHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfX0pLG4oMzEpKFwiaW5jbHVkZXNcIil9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDIpLG89big2Mik7cihyLlArci5GKm4oNjQpKFwiaW5jbHVkZXNcIiksXCJTdHJpbmdcIix7aW5jbHVkZXM6ZnVuY3Rpb24odCl7cmV0dXJuISF+byh0aGlzLHQsXCJpbmNsdWRlc1wiKS5pbmRleE9mKHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big2Myksbz1uKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2lmKHIoZSkpdGhyb3cgVHlwZUVycm9yKFwiU3RyaW5nI1wiK24rXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO3JldHVybiBTdHJpbmcobyh0KSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big1KSxvPW4oMjApLGk9bigwKShcIm1hdGNoXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4gcih0KSYmKHZvaWQgMCE9PShlPXRbaV0pPyEhZTpcIlJlZ0V4cFwiPT1vKHQpKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDApKFwibWF0Y2hcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPS8uLzt0cnl7XCIvLi9cIlt0XShlKX1jYXRjaChuKXt0cnl7cmV0dXJuIGVbcl09ITEsIVwiLy4vXCJbdF0oZSl9Y2F0Y2godCl7fX1yZXR1cm4hMH19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJue3ZhbHVlOmUsZG9uZTohIXR9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTYpLG89bigxMCk7big2NykoXCJrZXlzXCIsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIG8ocih0KSl9fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIpLG89big3KSxpPW4oOSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIG49KG8uT2JqZWN0fHx7fSlbdF18fE9iamVjdFt0XSx1PXt9O3VbdF09ZShuKSxyKHIuUytyLkYqaShmdW5jdGlvbigpe24oMSl9KSxcIk9iamVjdFwiLHUpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMik7cihyLlMrci5GLFwiT2JqZWN0XCIse2Fzc2lnbjpuKDY5KX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxMCksbz1uKDMyKSxpPW4oMjEpLHU9bigxNikscz1uKDI1KSxmPU9iamVjdC5hc3NpZ247dC5leHBvcnRzPSFmfHxuKDkpKGZ1bmN0aW9uKCl7dmFyIHQ9e30sZT17fSxuPVN5bWJvbCgpLHI9XCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiO3JldHVybiB0W25dPTcsci5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2VbdF09dH0pLDchPWYoe30sdClbbl18fE9iamVjdC5rZXlzKGYoe30sZSkpLmpvaW4oXCJcIikhPXJ9KT9mdW5jdGlvbih0LGUpe2Zvcih2YXIgbj11KHQpLGY9YXJndW1lbnRzLmxlbmd0aCxhPTEsYz1vLmYsbD1pLmY7Zj5hOylmb3IodmFyIHAsdj1zKGFyZ3VtZW50c1thKytdKSxoPWM/cih2KS5jb25jYXQoYyh2KSk6cih2KSx5PWgubGVuZ3RoLGQ9MDt5PmQ7KWwuY2FsbCh2LHA9aFtkKytdKSYmKG5bcF09dltwXSk7cmV0dXJuIG59OmZ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDIpLG89big3MSkoNiksaT1cImZpbmRJbmRleFwiLHU9ITA7aSBpbltdJiZBcnJheSgxKVtpXShmdW5jdGlvbigpe3U9ITF9KSxyKHIuUCtyLkYqdSxcIkFycmF5XCIse2ZpbmRJbmRleDpmdW5jdGlvbih0KXtyZXR1cm4gbyh0aGlzLHQsYXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDApfX0pLG4oMzEpKGkpfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyNCksbz1uKDI1KSxpPW4oMTYpLHU9bigyNikscz1uKDcyKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgbj0xPT10LGY9Mj09dCxhPTM9PXQsYz00PT10LGw9Nj09dCxwPTU9PXR8fGwsdj1lfHxzO3JldHVybiBmdW5jdGlvbihlLHMsaCl7Zm9yKHZhciB5LGQsbT1pKGUpLGc9byhtKSxiPXIocyxoLDMpLFM9dShnLmxlbmd0aCkseD0wLHc9bj92KGUsUyk6Zj92KGUsMCk6dm9pZCAwO1M+eDt4KyspaWYoKHB8fHggaW4gZykmJihkPWIoeT1nW3hdLHgsbSksdCkpaWYobil3W3hdPWQ7ZWxzZSBpZihkKXN3aXRjaCh0KXtjYXNlIDM6cmV0dXJuITA7Y2FzZSA1OnJldHVybiB5O2Nhc2UgNjpyZXR1cm4geDtjYXNlIDI6dy5wdXNoKHkpfWVsc2UgaWYoYylyZXR1cm4hMTtyZXR1cm4gbD8tMTphfHxjP2M6d319fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big3Myk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG5ldyhyKHQpKShlKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDUpLG89big0MCksaT1uKDApKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIG8odCkmJihcImZ1bmN0aW9uXCIhPXR5cGVvZihlPXQuY29uc3RydWN0b3IpfHxlIT09QXJyYXkmJiFvKGUucHJvdG90eXBlKXx8KGU9dm9pZCAwKSxyKGUpJiZudWxsPT09KGU9ZVtpXSkmJihlPXZvaWQgMCkpLHZvaWQgMD09PWU/QXJyYXk6ZX19LGZ1bmN0aW9uKHQsZSxuKXtuKDQxKShcImFzeW5jSXRlcmF0b3JcIil9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEpLG89big2KSxpPW4oOCksdT1uKDIpLHM9bigxOSksZj1uKDc2KS5LRVksYT1uKDkpLGM9bigyOCksbD1uKDMwKSxwPW4oMTQpLHY9bigwKSxoPW4oNDIpLHk9big0MSksZD1uKDc3KSxtPW4oNDApLGc9bigxMiksYj1uKDUpLFM9bigxMSkseD1uKDIzKSx3PW4oMTMpLEU9bigzNiksTz1uKDc4KSxqPW4oNzkpLF89big0KSxUPW4oMTApLEE9ai5mLFA9Xy5mLGs9Ty5mLFI9ci5TeW1ib2wsTD1yLkpTT04sST1MJiZMLnN0cmluZ2lmeSxNPXYoXCJfaGlkZGVuXCIpLEM9dihcInRvUHJpbWl0aXZlXCIpLE49e30ucHJvcGVydHlJc0VudW1lcmFibGUsVj1jKFwic3ltYm9sLXJlZ2lzdHJ5XCIpLEY9YyhcInN5bWJvbHNcIiksJD1jKFwib3Atc3ltYm9sc1wiKSxEPU9iamVjdC5wcm90b3R5cGUsRz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBSLFk9ci5RT2JqZWN0LEI9IVl8fCFZLnByb3RvdHlwZXx8IVkucHJvdG90eXBlLmZpbmRDaGlsZCxYPWkmJmEoZnVuY3Rpb24oKXtyZXR1cm4gNyE9RShQKHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUCh0aGlzLFwiYVwiLHt2YWx1ZTo3fSkuYX19KSkuYX0pP2Z1bmN0aW9uKHQsZSxuKXt2YXIgcj1BKEQsZSk7ciYmZGVsZXRlIERbZV0sUCh0LGUsbiksciYmdCE9PUQmJlAoRCxlLHIpfTpQLEg9ZnVuY3Rpb24odCl7dmFyIGU9Rlt0XT1FKFIucHJvdG90eXBlKTtyZXR1cm4gZS5faz10LGV9LFU9RyYmXCJzeW1ib2xcIj09dHlwZW9mIFIuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgUn0sVz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHQ9PT1EJiZXKCQsZSxuKSxnKHQpLGU9eChlLCEwKSxnKG4pLG8oRixlKT8obi5lbnVtZXJhYmxlPyhvKHQsTSkmJnRbTV1bZV0mJih0W01dW2VdPSExKSxuPUUobix7ZW51bWVyYWJsZTp3KDAsITEpfSkpOihvKHQsTSl8fFAodCxNLHcoMSx7fSkpLHRbTV1bZV09ITApLFgodCxlLG4pKTpQKHQsZSxuKX0scT1mdW5jdGlvbih0LGUpe2codCk7Zm9yKHZhciBuLHI9ZChlPVMoZSkpLG89MCxpPXIubGVuZ3RoO2k+bzspVyh0LG49cltvKytdLGVbbl0pO3JldHVybiB0fSx6PWZ1bmN0aW9uKHQpe3ZhciBlPU4uY2FsbCh0aGlzLHQ9eCh0LCEwKSk7cmV0dXJuISh0aGlzPT09RCYmbyhGLHQpJiYhbygkLHQpKSYmKCEoZXx8IW8odGhpcyx0KXx8IW8oRix0KXx8byh0aGlzLE0pJiZ0aGlzW01dW3RdKXx8ZSl9LEo9ZnVuY3Rpb24odCxlKXtpZih0PVModCksZT14KGUsITApLHQhPT1EfHwhbyhGLGUpfHxvKCQsZSkpe3ZhciBuPUEodCxlKTtyZXR1cm4hbnx8IW8oRixlKXx8byh0LE0pJiZ0W01dW2VdfHwobi5lbnVtZXJhYmxlPSEwKSxufX0sSz1mdW5jdGlvbih0KXtmb3IodmFyIGUsbj1rKFModCkpLHI9W10saT0wO24ubGVuZ3RoPmk7KW8oRixlPW5baSsrXSl8fGU9PU18fGU9PWZ8fHIucHVzaChlKTtyZXR1cm4gcn0sUT1mdW5jdGlvbih0KXtmb3IodmFyIGUsbj10PT09RCxyPWsobj8kOlModCkpLGk9W10sdT0wO3IubGVuZ3RoPnU7KSFvKEYsZT1yW3UrK10pfHxuJiYhbyhELGUpfHxpLnB1c2goRltlXSk7cmV0dXJuIGl9O0d8fChzKChSPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIFIpdGhyb3cgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIVwiKTt2YXIgdD1wKGFyZ3VtZW50cy5sZW5ndGg+MD9hcmd1bWVudHNbMF06dm9pZCAwKSxlPWZ1bmN0aW9uKG4pe3RoaXM9PT1EJiZlLmNhbGwoJCxuKSxvKHRoaXMsTSkmJm8odGhpc1tNXSx0KSYmKHRoaXNbTV1bdF09ITEpLFgodGhpcyx0LHcoMSxuKSl9O3JldHVybiBpJiZCJiZYKEQsdCx7Y29uZmlndXJhYmxlOiEwLHNldDplfSksSCh0KX0pLnByb3RvdHlwZSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa30pLGouZj1KLF8uZj1XLG4oNDMpLmY9Ty5mPUssbigyMSkuZj16LG4oMzIpLmY9USxpJiYhbigxOCkmJnMoRCxcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIseiwhMCksaC5mPWZ1bmN0aW9uKHQpe3JldHVybiBIKHYodCkpfSksdSh1LkcrdS5XK3UuRiohRyx7U3ltYm9sOlJ9KTtmb3IodmFyIFo9XCJoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlc1wiLnNwbGl0KFwiLFwiKSx0dD0wO1oubGVuZ3RoPnR0Oyl2KFpbdHQrK10pO2Zvcih2YXIgZXQ9VCh2LnN0b3JlKSxudD0wO2V0Lmxlbmd0aD5udDspeShldFtudCsrXSk7dSh1LlMrdS5GKiFHLFwiU3ltYm9sXCIse2ZvcjpmdW5jdGlvbih0KXtyZXR1cm4gbyhWLHQrPVwiXCIpP1ZbdF06Vlt0XT1SKHQpfSxrZXlGb3I6ZnVuY3Rpb24odCl7aWYoIVUodCkpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGEgc3ltYm9sIVwiKTtmb3IodmFyIGUgaW4gVilpZihWW2VdPT09dClyZXR1cm4gZX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7Qj0hMH0sdXNlU2ltcGxlOmZ1bmN0aW9uKCl7Qj0hMX19KSx1KHUuUyt1LkYqIUcsXCJPYmplY3RcIix7Y3JlYXRlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHZvaWQgMD09PWU/RSh0KTpxKEUodCksZSl9LGRlZmluZVByb3BlcnR5OlcsZGVmaW5lUHJvcGVydGllczpxLGdldE93blByb3BlcnR5RGVzY3JpcHRvcjpKLGdldE93blByb3BlcnR5TmFtZXM6SyxnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6UX0pLEwmJnUodS5TK3UuRiooIUd8fGEoZnVuY3Rpb24oKXt2YXIgdD1SKCk7cmV0dXJuXCJbbnVsbF1cIiE9SShbdF0pfHxcInt9XCIhPUkoe2E6dH0pfHxcInt9XCIhPUkoT2JqZWN0KHQpKX0pKSxcIkpTT05cIix7c3RyaW5naWZ5OmZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuLHI9W3RdLG89MTthcmd1bWVudHMubGVuZ3RoPm87KXIucHVzaChhcmd1bWVudHNbbysrXSk7aWYobj1lPXJbMV0sKGIoZSl8fHZvaWQgMCE9PXQpJiYhVSh0KSlyZXR1cm4gbShlKXx8KGU9ZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYoZT1uLmNhbGwodGhpcyx0LGUpKSwhVShlKSlyZXR1cm4gZX0pLHJbMV09ZSxJLmFwcGx5KEwscil9fSksUi5wcm90b3R5cGVbQ118fG4oMykoUi5wcm90b3R5cGUsQyxSLnByb3RvdHlwZS52YWx1ZU9mKSxsKFIsXCJTeW1ib2xcIiksbChNYXRoLFwiTWF0aFwiLCEwKSxsKHIuSlNPTixcIkpTT05cIiwhMCl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDE0KShcIm1ldGFcIiksbz1uKDUpLGk9big2KSx1PW4oNCkuZixzPTAsZj1PYmplY3QuaXNFeHRlbnNpYmxlfHxmdW5jdGlvbigpe3JldHVybiEwfSxhPSFuKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIGYoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSl9KSxjPWZ1bmN0aW9uKHQpe3UodCxyLHt2YWx1ZTp7aTpcIk9cIisgKytzLHc6e319fSl9LGw9dC5leHBvcnRzPXtLRVk6cixORUVEOiExLGZhc3RLZXk6ZnVuY3Rpb24odCxlKXtpZighbyh0KSlyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OihcInN0cmluZ1wiPT10eXBlb2YgdD9cIlNcIjpcIlBcIikrdDtpZighaSh0LHIpKXtpZighZih0KSlyZXR1cm5cIkZcIjtpZighZSlyZXR1cm5cIkVcIjtjKHQpfXJldHVybiB0W3JdLml9LGdldFdlYWs6ZnVuY3Rpb24odCxlKXtpZighaSh0LHIpKXtpZighZih0KSlyZXR1cm4hMDtpZighZSlyZXR1cm4hMTtjKHQpfXJldHVybiB0W3JdLnd9LG9uRnJlZXplOmZ1bmN0aW9uKHQpe3JldHVybiBhJiZsLk5FRUQmJmYodCkmJiFpKHQscikmJmModCksdH19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMCksbz1uKDMyKSxpPW4oMjEpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1yKHQpLG49by5mO2lmKG4pZm9yKHZhciB1LHM9bih0KSxmPWkuZixhPTA7cy5sZW5ndGg+YTspZi5jYWxsKHQsdT1zW2ErK10pJiZlLnB1c2godSk7cmV0dXJuIGV9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMSksbz1uKDQzKS5mLGk9e30udG9TdHJpbmcsdT1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W107dC5leHBvcnRzLmY9ZnVuY3Rpb24odCl7cmV0dXJuIHUmJlwiW29iamVjdCBXaW5kb3ddXCI9PWkuY2FsbCh0KT9mdW5jdGlvbih0KXt0cnl7cmV0dXJuIG8odCl9Y2F0Y2godCl7cmV0dXJuIHUuc2xpY2UoKX19KHQpOm8ocih0KSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyMSksbz1uKDEzKSxpPW4oMTEpLHU9bigyMykscz1uKDYpLGY9bigzNCksYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2UuZj1uKDgpP2E6ZnVuY3Rpb24odCxlKXtpZih0PWkodCksZT11KGUsITApLGYpdHJ5e3JldHVybiBhKHQsZSl9Y2F0Y2godCl7fWlmKHModCxlKSlyZXR1cm4gbyghci5mLmNhbGwodCxlKSx0W2VdKX19LGZ1bmN0aW9uKHQsZSxuKXtmb3IodmFyIHI9bigzOSksbz1uKDEwKSxpPW4oMTkpLHU9bigxKSxzPW4oMyksZj1uKDE1KSxhPW4oMCksYz1hKFwiaXRlcmF0b3JcIiksbD1hKFwidG9TdHJpbmdUYWdcIikscD1mLkFycmF5LHY9e0NTU1J1bGVMaXN0OiEwLENTU1N0eWxlRGVjbGFyYXRpb246ITEsQ1NTVmFsdWVMaXN0OiExLENsaWVudFJlY3RMaXN0OiExLERPTVJlY3RMaXN0OiExLERPTVN0cmluZ0xpc3Q6ITEsRE9NVG9rZW5MaXN0OiEwLERhdGFUcmFuc2Zlckl0ZW1MaXN0OiExLEZpbGVMaXN0OiExLEhUTUxBbGxDb2xsZWN0aW9uOiExLEhUTUxDb2xsZWN0aW9uOiExLEhUTUxGb3JtRWxlbWVudDohMSxIVE1MU2VsZWN0RWxlbWVudDohMSxNZWRpYUxpc3Q6ITAsTWltZVR5cGVBcnJheTohMSxOYW1lZE5vZGVNYXA6ITEsTm9kZUxpc3Q6ITAsUGFpbnRSZXF1ZXN0TGlzdDohMSxQbHVnaW46ITEsUGx1Z2luQXJyYXk6ITEsU1ZHTGVuZ3RoTGlzdDohMSxTVkdOdW1iZXJMaXN0OiExLFNWR1BhdGhTZWdMaXN0OiExLFNWR1BvaW50TGlzdDohMSxTVkdTdHJpbmdMaXN0OiExLFNWR1RyYW5zZm9ybUxpc3Q6ITEsU291cmNlQnVmZmVyTGlzdDohMSxTdHlsZVNoZWV0TGlzdDohMCxUZXh0VHJhY2tDdWVMaXN0OiExLFRleHRUcmFja0xpc3Q6ITEsVG91Y2hMaXN0OiExfSxoPW8odikseT0wO3k8aC5sZW5ndGg7eSsrKXt2YXIgZCxtPWhbeV0sZz12W21dLGI9dVttXSxTPWImJmIucHJvdG90eXBlO2lmKFMmJihTW2NdfHxzKFMsYyxwKSxTW2xdfHxzKFMsbCxtKSxmW21dPXAsZykpZm9yKGQgaW4gcilTW2RdfHxpKFMsZCxyW2RdLCEwKX19XSkuZGVmYXVsdH0pOyIsImltcG9ydCBDYXRhbG9nRHJvcGRvd24gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2ZuYXN0aWwtcmVkZXNpZ24vc3JjL2pzL2NhdGFsb2ctZHJvcGRvd24vY2F0YWxvZy1kcm9wZG93blwiO1xuaW1wb3J0IE1vYmlsZU1lbnVzU3luYyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvZm5hc3RpbC1yZWRlc2lnbi9zcmMvanMvY2F0YWxvZy1kcm9wZG93bi9tb2JpbGUtbWVudXMtc3luY1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCB7IGRpc2FibGVCb2R5U2Nyb2xsLCBlbmFibGVCb2R5U2Nyb2xsIH0gZnJvbSBcImJvZHktc2Nyb2xsLWxvY2tcIjtcblxuY29uc3QgeyBWdWUgfSA9IHdpbmRvdztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgRE9NQ29udGVudExvYWRlZGAsICgpID0+IHtcbiAgY29uc3QgbWVudVZ1ZUluc3RhbmNlID0gbmV3IFZ1ZSh7XG4gICAgcmVuZGVyOiAoaCkgPT4gaChNZW51KSxcbiAgfSk7XG5cbiAgY29uc3QgcG9wVXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm0tY2F0YWxvZy1kcm9wZG93bmApO1xuXG4gIC8vIFNldHRpbmcgYWN0aW9ucyBmb3Igb3BlbmluZyAvIGNsb3NpbmcgYm9vdHN0cmFwIGRyb3Bkb3duXG4gIGNvbnN0IGNhdGFsb2dEcm9wZG93biA9IG5ldyBDYXRhbG9nRHJvcGRvd24oXG4gICAgYC5qcy1jYXRhbG9nLW1vYmlsZS1kcm9wZG93bi13cmFwcGVyYCxcbiAgICBgI2Ryb3Bkb3duTW9iaWxlTWVudUJ1dHRvbmAsXG4gICAgKCkgPT4gZGlzYWJsZUJvZHlTY3JvbGwocG9wVXBFbGVtZW50KSxcbiAgICAoKSA9PiBlbmFibGVCb2R5U2Nyb2xsKHBvcFVwRWxlbWVudClcbiAgKTtcblxuICAgIGNhdGFsb2dEcm9wZG93bi5pbml0KCk7XG4gICAgbWVudVZ1ZUluc3RhbmNlLiRtb3VudChgI3Z1ZS1uYXZpZ2F0aW9uYCk7XG5cbn0pO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4Yzg1OTY1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9sb2NhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyOGM4NTk2NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyOGM4NTk2NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyOGM4NTk2NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOGM4NTk2NSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyOGM4NTk2NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjhjODU5NjUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbnRhY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjQ0MzA4MiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db250YWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbnRhY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wcm9mbmFzdGlsL2xvY2FsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MyNDQzMDgyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MyNDQzMDgyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MyNDQzMDgyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db250YWN0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI0NDMwODImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzI0NDMwODInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29udGFjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnRhY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db250YWN0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI0NDMwODImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dvQmFja0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzE0NWE3MjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR29CYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vR29CYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wcm9mbmFzdGlsL2xvY2FsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzcxNDVhNzI2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzcxNDVhNzI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzcxNDVhNzI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Hb0JhY2tCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxNDVhNzI2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzcxNDVhNzI2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Hb0JhY2tCdXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hb0JhY2tCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dvQmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR29CYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTQ1YTcyNiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSXRlbUljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiMjA1ZDE4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0l0ZW1JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXRlbUljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGIyMDVkMTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGIyMDVkMTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGIyMDVkMTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0l0ZW1JY29uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjIwNWQxOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YjIwNWQxOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvSXRlbUljb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JY29uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjIwNWQxOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGFnZXNNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzBlMzZmMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYWdlc01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdlc01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjcwZTM2ZjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjcwZTM2ZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjcwZTM2ZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2VzTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjcwZTM2ZjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjcwZTM2ZjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1BhZ2VzTWVudS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VzTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZXNNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlc01lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3MGUzNmYyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9qZWN0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWE5OTk3MzQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvamVjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9qZWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9sb2NhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlYTk5OTczNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlYTk5OTczNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlYTk5OTczNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvamVjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhOTk5NzM0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2VhOTk5NzM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Qcm9qZWN0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9qZWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvamVjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhOTk5NzM0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Tb2NpYWxMaW5rcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGU3Y2NhMTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU29jaWFsTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Tb2NpYWxMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9sb2NhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwZTdjY2ExMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZTdjY2ExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZTdjY2ExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU29jaWFsTGlua3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlN2NjYTEwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBlN2NjYTEwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Tb2NpYWxMaW5rcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lhbExpbmtzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tb2NpYWxMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29jaWFsTGlua3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlN2NjYTEwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtZW51SXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODg4NmEzZDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWVudUl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtZW51SXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9sb2NhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4ODg2YTNkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4ODg2YTNkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4ODg2YTNkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWVudUl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg4ODZhM2Q0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzg4ODZhM2Q0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9TdWJtZW51SXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1lbnVJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtZW51SXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWVudUl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg4ODZhM2Q0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyQmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzNjM3NTc0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJCbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJCbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9sb2NhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlMzYzNzU3NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMzYzNzU3NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMzYzNzU3NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlckJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzYzNzU3NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlMzYzNzU3NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvVXNlckJsb2NrLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJCbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTM2Mzc1NzQmXCIiLCJjb25zdCBCT0RZX09WRVJMQVlfQ0xBU1NOQU1FID0gYG1lbnUtaXMtb3BlbmVkYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ0Ryb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoXG4gICAgY29udGFpbmVyU2VsZWN0b3IsXG4gICAgdG9nZ2xlclNlbGVjdG9yLFxuICAgIG9uU2hvd0NhbGxiYWNrID0gKCkgPT4ge30sXG4gICAgb25IaWRlQ2FsbGJhY2sgPSAoKSA9PiB7fVxuICApIHtcbiAgICBjb25zb2xlLmxvZyhjb250YWluZXJTZWxlY3Rvcik7XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQpO1xuICAgIHRoaXMuX29wZW5CdXR0b25FbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdG9nZ2xlclNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9kcm9wZG93bkVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmpzLWNhdGFsb2ctZHJvcGRvd25gXG4gICAgKTtcbiAgICB0aGlzLl9vblNob3dDYWxsYmFjayA9IG9uU2hvd0NhbGxiYWNrO1xuICAgIHRoaXMuX29uSGlkZUNhbGxiYWNrID0gb25IaWRlQ2FsbGJhY2s7XG5cbiAgICB0aGlzLl9vblNob3cgPSB0aGlzLl9vblNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkhpZGUgPSB0aGlzLl9vbkhpZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9vblNob3coKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKEJPRFlfT1ZFUkxBWV9DTEFTU05BTUUpO1xuXG4gICAgdGhpcy5fb25TaG93Q2FsbGJhY2soKTtcbiAgfVxuXG4gIF9vbkhpZGUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJPRFlfT1ZFUkxBWV9DTEFTU05BTUUpO1xuXG4gICAgdGhpcy5fb25IaWRlQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLl9vcGVuQnV0dG9uRWxlbWVudC5jbGljaygpO1xuICB9XG5cbiAgX3NldEhhbmRsZXJzKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgc2hvd24uYnMuZHJvcGRvd25gLCB0aGlzLl9vblNob3cpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgaGlkZGVuLmJzLmRyb3Bkb3duYCwgdGhpcy5fb25IaWRlKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fc2V0SGFuZGxlcnMoKTtcblxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2JpbGVNZW51c1N5bmMge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNhdGFsb2dNZW51SW5zdGFuY2VcbiAgICogQHBhcmFtIHtvYmplY3R9IHZ1ZU1lbnVJbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb25QYWdlTWVudVNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3BVcE1lbnVTZWxlY3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoY2F0YWxvZ01lbnVJbnN0YW5jZSwgdnVlTWVudUluc3RhbmNlLCBvblBhZ2VNZW51U2VsZWN0b3IsIHBvcFVwTWVudVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fY2F0YWxvZ01lbnVJbnN0YW5jZSA9IGNhdGFsb2dNZW51SW5zdGFuY2U7XG4gICAgdGhpcy5fdnVlTWVudUluc3RhbmNlID0gdnVlTWVudUluc3RhbmNlO1xuXG4gICAgdGhpcy5fb25QYWdlTWVudUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9uUGFnZU1lbnVTZWxlY3Rvcik7XG4gICAgdGhpcy5fcG9wVXBNZW51RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wVXBNZW51U2VsZWN0b3IpO1xuXG4gICAgdGhpcy5fb25QYWdlTWVudUxpbmtFbGVtZW50cyA9IHRoaXMuX29uUGFnZU1lbnVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgLmpzLXN5bmMtd2l0aC1wb3B1cGBcbiAgICApO1xuXG4gICAgdGhpcy5fcG9wVXBUb2dnbGVyRWxlbWVudCA9IHRoaXMuX3BvcFVwTWVudUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1icy10b2dnbGVdYFxuICAgICk7XG5cbiAgICB0aGlzLl9vbkxpbmtDbGljayA9IHRoaXMuX29uTGlua0NsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBfb3BlblBvcFVwTWVudSgpIHtcbiAgICB0aGlzLl9jYXRhbG9nTWVudUluc3RhbmNlLnRvZ2dsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHNlY3Rpb24gaW4gdGhlIHBvcHVwIGNhdGFsb2cgbWVudSBieSBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0U2VjdGlvbkluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb3BlblNlY3Rpb24odGFyZ2V0U2VjdGlvbkluZGV4KSB7XG4gICAgY29uc3QgW3Z1ZU1lbnVDb21wb25lbnRdID0gdGhpcy5fdnVlTWVudUluc3RhbmNlLiRjaGlsZHJlbjtcbiAgICBjb25zdCBjYXRhbG9nU2VjdGlvbkluZGV4ID0gMDtcblxuICAgIC8vIG5hdmlnYXRlKFttYWluU2VjdGlvbkluZGV4LCBzdWJTZWN0aW9uSW5kZXgsIHN1YlN1YlNlY3Rpb25JbmRleCAuLi4uXSlcbiAgICB2dWVNZW51Q29tcG9uZW50Lm5hdmlnYXRlKFtjYXRhbG9nU2VjdGlvbkluZGV4LCB0YXJnZXRTZWN0aW9uSW5kZXhdKTtcbiAgfVxuXG4gIF9vbkxpbmtDbGljayhldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIE9wZW4gbWVudVxuICAgIHRoaXMuX29wZW5Qb3BVcE1lbnUoKTtcblxuICAgIC8vIE9wZW4gY2xpY2tlZCBzZWN0aW9uIGluIHBvcHVwbWVudVxuICAgIGNvbnN0IHRhcmdldFNlY3Rpb25JbmRleCA9IHBhcnNlSW50KGV2dC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgIHRoaXMuX29wZW5TZWN0aW9uKHRhcmdldFNlY3Rpb25JbmRleCk7XG4gIH1cblxuICBfc2V0SGFuZGxlcnMoKSB7XG4gICAgdGhpcy5fb25QYWdlTWVudUxpbmtFbGVtZW50cy5mb3JFYWNoKChsaW5rRWxlbWVudCkgPT5cbiAgICAgIGxpbmtFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdGhpcy5fb25MaW5rQ2xpY2spXG4gICAgKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fc2V0SGFuZGxlcnMoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==