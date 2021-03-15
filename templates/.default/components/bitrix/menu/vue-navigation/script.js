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
//
//
//
//
//
//
//







var menuLinks = [{
  label: "Каталог",
  items: [{
    label: "Смартфоны и планшеты",
    items: [{
      label: "Смартфоны",
      url: "#"
    }, {
      label: "Планшеты",
      url: "#"
    }]
  }, {
    label: "Ноутбуки и компьютеры",
    items: [{
      label: "Ноутбуки",
      items: []
    }, {
      label: "Ультрабуки",
      items: []
    }, {
      label: "Ноутбуки-трансформеры",
      items: []
    }, {
      label: "Моноблоки",
      items: []
    }, {
      label: "Системные блоки",
      items: []
    }, {
      label: "Мониторы",
      items: []
    }, {
      label: "Рабочие станции",
      items: []
    }, {
      label: "Тонкие клиенты",
      items: []
    }, {
      label: "Решения для геймеров",
      items: []
    }]
  }, {
    label: "Тв и аудио",
    items: [{
      label: "Бытовые ТВ",
      items: []
    }, {
      label: "Мультимедиа (акустика)",
      items: []
    }, {
      label: "Профессиональные дисплеи",
      items: []
    }, {
      label: "Решения ВКС",
      items: []
    }, {
      label: "Интерактивные мониторы",
      items: []
    }]
  }, {
    label: "Фото и видео",
    items: [{
      label: "Фотоаппараты",
      items: []
    }, {
      label: "Объективы",
      items: []
    }, {
      label: "Экшн-камеры",
      items: []
    }, {
      label: "Видеокамеры",
      items: []
    }]
  }, {
    label: "Сетевое и серверное оборудование",
    items: [{
      label: "Серверы",
      items: []
    }, {
      label: "Сетевое оборудование",
      items: []
    }, {
      label: "Системы хранения данных",
      items: []
    }]
  }, {
    label: "Развлечения и гаджеты",
    items: [{
      label: "Умные часы",
      items: []
    }, {
      label: "Квадрокоптеры",
      items: []
    }, {
      label: "Игровые приставки",
      items: []
    }, {
      label: "Игровые манипуляторы",
      items: []
    }, {
      label: "Игры",
      items: []
    }, {
      label: "Решения для геймеров",
      items: []
    }, {
      label: "Умный дом",
      items: []
    }, {
      label: "Фитнес-трекеры",
      items: []
    }]
  }, {
    label: "Офисное оборудование и периферия",
    items: [{
      label: "Принтеры / МФУ/ Сканеры",
      items: []
    }, {
      label: "Бытовая техника",
      items: []
    }, {
      label: "Стационарная телефония",
      items: []
    }, {
      label: "Расходные материалы",
      items: []
    }]
  }, {
    label: "Аксессуары",
    items: [{
      label: "Чехлы для смартфонов",
      items: []
    }, {
      label: "Чехлы для планшетов",
      items: []
    }, {
      label: "Сумки для ноутубуков",
      items: []
    }, {
      label: "Кабели для пк",
      items: []
    }, {
      label: "Кабели для планшетов",
      items: []
    }, {
      label: "Кабели для смартфонов",
      items: []
    }]
  }, {
    label: "Программное обеспечение",
    items: [{
      label: "Операционные системы",
      items: []
    }, {
      label: "Офисные пакеты",
      items: []
    }, {
      label: "Видеоредакторы",
      items: []
    }, {
      label: "Графические пакеты",
      items: []
    }]
  }]
}, {
  label: "Акции",
  url: "#"
}, {
  label: "Избранное",
  url: "#"
}, {
  label: "Сравнение",
  url: "#"
}, {
  label: "Корзина",
  url: "#"
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vue_smooth_reflow__WEBPACK_IMPORTED_MODULE_1___default.a],
  data: function data() {
    return {
      menuItems: menuLinks,
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
  "Акции": "icon_percentage",
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
        name: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438 (NB Club)",
        link: "/"
      }, {
        name: "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B",
        link: "/"
      }, {
        name: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
        link: "/"
      }, {
        name: "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",
        link: "/"
      }, {
        name: "\u041B\u0438\u0437\u0438\u043D\u0433",
        link: "/"
      }, {
        name: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435",
        link: "/"
      }, {
        name: "\u0422rade-in Apple",
        link: "/"
      }, {
        name: "\u0421\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0435 \u0446\u0435\u043D\u0442\u0440\u044B",
        link: "/"
      }, {
        name: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043C\u0435\u0442\u0443",
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
      items: [{
        name: "Telegram",
        link: "/",
        icon: "".concat(SITE_TEMPLATE_PATH, "/images/social/telegram.svg")
      }, {
        name: "Whatsapp",
        link: "/",
        icon: "".concat(SITE_TEMPLATE_PATH, "/images/social/whatsapp.svg")
      }, {
        name: "Viber",
        link: "/",
        icon: "".concat(SITE_TEMPLATE_PATH, "/images/social/viber.svg")
      }]
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
  props: ["item", "currentLevelDepth"],
  components: {
    ItemIcon: _ItemIcon__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
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
                        { staticClass: "mobile-nav__item pt-0 pb-0" },
                        [_c("UserBlock")],
                        1
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
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.currentLevelDepth ? _c("Projects") : _vm._e()
                ],
                1
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
            attrs: { href: "tel:88123183836", title: "Позвонить нам" }
          },
          [
            _c("svg", { attrs: { width: "16", height: "16" } }, [
              _c("use", { attrs: { "xlink:href": "#icon_phone" } })
            ]),
            _vm._v("\n      8 (812) 318-38-36\n    ")
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
              href: "mailTo:corporate@nbcom.ru",
              title: "Написать нам на email"
            }
          },
          [
            _c("svg", { attrs: { width: "16", height: "16" } }, [
              _c("use", { attrs: { "xlink:href": "#icon_letter" } })
            ]),
            _vm._v("\n      corporate@nbcom.ru\n    ")
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
            [
              _c("ItemIcon", {
                attrs: {
                  currentLevelDepth: _vm.currentLevelDepth,
                  name: _vm.item.label,
                  src: ""
                }
              }),
              _vm._v("\n    " + _vm._s(_vm.item.label) + "\n  ")
            ],
            1
          )
        : _c(
            "a",
            {
              staticClass: "mobile-main-menu__link",
              attrs: { href: "", href: _vm.item.url }
            },
            [
              _c("ItemIcon", {
                attrs: {
                  currentLevelDepth: _vm.currentLevelDepth,
                  name: _vm.item.label,
                  src: ""
                }
              }),
              _vm._v("\n    " + _vm._s(_vm.item.label) + "\n  ")
            ],
            1
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
document.addEventListener("DOMContentLoaded", function () {
  catalogDropdown.init();
  menuVueInstance.$mount("#vue-navigation"); // Adds pop-up menu openings when you click on the catalog section on the home page

  new _profnastil_redesign_src_js_catalog_dropdown_mobile_menus_sync__WEBPACK_IMPORTED_MODULE_1__["default"](catalogDropdown, menuVueInstance, ".js-mobile-menu-on-page", ".js-catalog-mobile-dropdown-wrapper").init();
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

    this._containerElement = document.querySelector(containerSelector);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RzLnZ1ZSIsIndlYnBhY2s6Ly8vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvR29CYWNrQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvSXRlbUljb24udnVlIiwid2VicGFjazovLy90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9QYWdlc01lbnUudnVlIiwid2VicGFjazovLy90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Qcm9qZWN0cy52dWUiLCJ3ZWJwYWNrOi8vL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZSIsIndlYnBhY2s6Ly8vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU3VibWVudUl0ZW0udnVlIiwid2VicGFjazovLy90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Vc2VyQmxvY2sudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib2R5LXNjcm9sbC1sb2NrL2xpYi9ib2R5U2Nyb2xsTG9jay5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT8wMTQ4Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RzLnZ1ZT8xYjBkIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0dvQmFja0J1dHRvbi52dWU/ZTQ5NiIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9JdGVtSWNvbi52dWU/NzNiNCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9QYWdlc01lbnUudnVlPzEzODQiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlPzdhYTciLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU29jaWFsTGlua3MudnVlPzdhMDgiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU3VibWVudUl0ZW0udnVlP2VhMmQiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvVXNlckJsb2NrLnZ1ZT83Nzg2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zbW9vdGgtcmVmbG93L2Rpc3QvdnVlLXNtb290aC1yZWZsb3cubWluLmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9BcHAudnVlPzk1M2UiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT84MzUwIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Db250YWN0cy52dWU/OTFjNSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Db250YWN0cy52dWU/MDk1YiIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Hb0JhY2tCdXR0b24udnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0dvQmFja0J1dHRvbi52dWU/ZDNjNSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Hb0JhY2tCdXR0b24udnVlPzU3NDEiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvSXRlbUljb24udnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1JY29uLnZ1ZT9lZmEyIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1JY29uLnZ1ZT9iYzFkIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1BhZ2VzTWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUGFnZXNNZW51LnZ1ZT81ZTA3Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1BhZ2VzTWVudS52dWU/YzA2OCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Qcm9qZWN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlP2Y5M2YiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlP2I5MTYiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU29jaWFsTGlua3MudnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZT8xYzM0Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZT81ODJiIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1N1Ym1lbnVJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9TdWJtZW51SXRlbS52dWU/ZTAxMyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9TdWJtZW51SXRlbS52dWU/MzgxOCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Vc2VyQmxvY2sudnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1VzZXJCbG9jay52dWU/ZTAzNCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Vc2VyQmxvY2sudnVlPzliYWUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vc3JjL2pzL2NhdGFsb2ctZHJvcGRvd24vY2F0YWxvZy1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvcHJvZm5hc3RpbC1yZWRlc2lnbi9zcmMvanMvY2F0YWxvZy1kcm9wZG93bi9tb2JpbGUtbWVudXMtc3luYy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJWdWUiLCJtZW51VnVlSW5zdGFuY2UiLCJyZW5kZXIiLCJoIiwiTWVudSIsInBvcFVwRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhdGFsb2dEcm9wZG93biIsIkNhdGFsb2dEcm9wZG93biIsImRpc2FibGVCb2R5U2Nyb2xsIiwiZW5hYmxlQm9keVNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0IiwiJG1vdW50IiwiTW9iaWxlTWVudXNTeW5jIiwiQk9EWV9PVkVSTEFZX0NMQVNTTkFNRSIsImNvbnRhaW5lclNlbGVjdG9yIiwidG9nZ2xlclNlbGVjdG9yIiwib25TaG93Q2FsbGJhY2siLCJvbkhpZGVDYWxsYmFjayIsIl9jb250YWluZXJFbGVtZW50IiwiX29wZW5CdXR0b25FbGVtZW50IiwiX2Ryb3Bkb3duRWxlbWVudCIsIl9vblNob3dDYWxsYmFjayIsIl9vbkhpZGVDYWxsYmFjayIsIl9vblNob3ciLCJiaW5kIiwiX29uSGlkZSIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjbGljayIsIl9zZXRIYW5kbGVycyIsImNhdGFsb2dNZW51SW5zdGFuY2UiLCJ2dWVNZW51SW5zdGFuY2UiLCJvblBhZ2VNZW51U2VsZWN0b3IiLCJwb3BVcE1lbnVTZWxlY3RvciIsIl9jYXRhbG9nTWVudUluc3RhbmNlIiwiX3Z1ZU1lbnVJbnN0YW5jZSIsIl9vblBhZ2VNZW51RWxlbWVudCIsIl9wb3BVcE1lbnVFbGVtZW50IiwiX29uUGFnZU1lbnVMaW5rRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3BvcFVwVG9nZ2xlckVsZW1lbnQiLCJfb25MaW5rQ2xpY2siLCJ0b2dnbGUiLCJ0YXJnZXRTZWN0aW9uSW5kZXgiLCIkY2hpbGRyZW4iLCJ2dWVNZW51Q29tcG9uZW50IiwiY2F0YWxvZ1NlY3Rpb25JbmRleCIsIm5hdmlnYXRlIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJfb3BlblBvcFVwTWVudSIsInBhcnNlSW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsIl9vcGVuU2VjdGlvbiIsImZvckVhY2giLCJsaW5rRWxlbWVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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QXZCLG9CQUE1QjtBQUlBLFNBQUt1QyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JuQixJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNEOzs7O3FDQUVnQjtBQUNmLFdBQUtZLG9CQUFMLENBQTBCUSxNQUExQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztpQ0FDZUMsa0IsRUFBb0I7QUFBQSw4R0FDSixLQUFLUixnQkFBTCxDQUFzQlMsU0FEbEI7QUFBQSxVQUN4QkMsZ0JBRHdCOztBQUUvQixVQUFNQyxtQkFBbUIsR0FBRyxDQUE1QixDQUYrQixDQUkvQjs7QUFDQUQsc0JBQWdCLENBQUNFLFFBQWpCLENBQTBCLENBQUNELG1CQUFELEVBQXNCSCxrQkFBdEIsQ0FBMUI7QUFDRDs7O2lDQUVZSyxHLEVBQUs7QUFDaEJBLFNBQUcsQ0FBQ0MsY0FBSixHQURnQixDQUdoQjs7QUFDQSxXQUFLQyxjQUFMLEdBSmdCLENBTWhCOzs7QUFDQSxVQUFNUCxrQkFBa0IsR0FBR1EsUUFBUSxDQUFDSCxHQUFHLENBQUNJLGFBQUosQ0FBa0JDLE9BQWxCLENBQTBCQyxLQUEzQixDQUFuQzs7QUFDQSxXQUFLQyxZQUFMLENBQWtCWixrQkFBbEI7QUFDRDs7O21DQUVjO0FBQUE7O0FBQ2IsV0FBS0wsdUJBQUwsQ0FBNkJrQixPQUE3QixDQUFxQyxVQUFDQyxXQUFEO0FBQUEsZUFDbkNBLFdBQVcsQ0FBQ2xELGdCQUFaLFVBQXNDLEtBQUksQ0FBQ2tDLFlBQTNDLENBRG1DO0FBQUEsT0FBckM7QUFHRDs7OzJCQUVNO0FBQ0wsV0FBS1osWUFBTDtBQUNEIiwiZmlsZSI6ImxvY2FsL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wcm9mbmFzdGlsL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9hcHAuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1vYmlsZS1uYXZcIiBAY2xpY2suc3RvcD5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8dHJhbnNpdGlvbi1ncm91cFxuICAgICAgICAgIDpuYW1lPVwidHJhbnNpdGlvbk5hbWVcIlxuICAgICAgICAgIHRhZz1cIm5hdlwiXG4gICAgICAgICAgY2xhc3M9XCJtb2JpbGUtbmF2X19sZXZlbHMgbW9iaWxlLW1haW4tbWVudVwiXG4gICAgICAgICAgcmVmPVwibGV2ZWxzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtbmF2X19pbm5lciBwYi01XCJcbiAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICA6cmVmPVwiYGxldmVsLSR7Z2V0UGF0aE5hbWUoY3VycmVudExldmVsLnBhdGgpfWBcIlxuICAgICAgICAgICAgIDprZXk9XCJnZXRQYXRoTmFtZShjdXJyZW50TGV2ZWwucGF0aClcIj5cblxuICAgICAgICAgIDwhLS0g0JPQu9Cw0LLQvdC+0LUg0LzQtdC90Y4gKNCa0LDRgtCw0LvQvtCzLCDQkNC60YbQuNC4Li4uKS0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtbmF2X19sZXZlbCBtb2JpbGUtbmF2X19pdGVtIHAtMFwiXG4gICAgICAgICAgICAgICB2LWlmPVwiY3VycmVudExldmVsXCJcbiAgICAgICAgICAgICAgIDphcmlhLWxhYmVsbGVkYnk9XCJgbW9iaWxlLW5hdi1sZXZlbC1sYWJlbC0ke2dldFBhdGhOYW1lKGN1cnJlbnRMZXZlbC5wYXRoKX1gXCIgcm9sZT1cImdyb3VwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8IS0tINCf0L7QtNGA0LDQt9C00LXQu9GLINGC0LXQutGD0YnQtdCz0L4g0YDQsNC30LTQtdC70LAgLS0+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtb2JpbGUtbWFpbi1tZW51X19saXN0IGxpc3QtcmVzZXRcIj5cbiAgICAgICAgICAgICAgPCEtLSDQmtC90L7Qv9C60LAgwqvQndCw0LfQsNC0wrstLT5cbiAgICAgICAgICAgICAgPEdvQmFja0J1dHRvblxuICAgICAgICAgICAgICAgICAgdi1pZj1cImN1cnJlbnRMZXZlbERlcHRoID4gMFwiXG4gICAgICAgICAgICAgICAgICBAbmF2aWdhdGU9XCJuYXZpZ2F0ZShjdXJyZW50TGV2ZWwucGF0aC5zbGljZSgwLCBjdXJyZW50TGV2ZWxEZXB0aCAtIDEpKVwiXG4gICAgICAgICAgICAgICAgICA6cHJldlNlY3Rpb25OYW1lPVwibGV2ZWxzW2N1cnJlbnRMZXZlbERlcHRoIC0gMV0ubGFiZWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8IS0tINCf0YPQvdC60YIg0LzQtdC90Y4gLS0+XG4gICAgICAgICAgICAgIDxTdWJtZW51SXRlbVxuICAgICAgICAgICAgICAgICAgdi1mb3I9XCJpdGVtIGluIGN1cnJlbnRMZXZlbC5pdGVtc1wiXG4gICAgICAgICAgICAgICAgICBAbmF2aWdhdGU9XCJuYXZpZ2F0ZShpdGVtLnBhdGgpXCJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJpdGVtLnBhdGguam9pbigpXCJcbiAgICAgICAgICAgICAgICAgIDppdGVtPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICByZWY9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgIDpjdXJyZW50TGV2ZWxEZXB0aD1cImN1cnJlbnRMZXZlbERlcHRoXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tINCR0LvQvtC6INGBINCw0LLRgtC+0YDQuNC30LDRhtC40LXQuSwg0YDQtdCz0LjRgdGC0YDQsNGG0LjQtdC5LCDQsdCw0LvQu9Cw0LzQuCDQuCDRgtC0IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtbmF2X19pdGVtIHB0LTAgcGItMFwiIHYtaWY9XCIhY3VycmVudExldmVsRGVwdGhcIj5cbiAgICAgICAgICAgIDxVc2VyQmxvY2svPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSDQmtC+0L3RgtCw0LrRgtGLINC4INGB0L7RhtGB0LXRgtC4IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtbmF2X19pdGVtXCIgdi1pZj1cIiFjdXJyZW50TGV2ZWxEZXB0aFwiPlxuICAgICAgICAgICAgPENvbnRhY3RzLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0g0JzQtdC90Y4g0YHRgtGA0LDQvdC40YYgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZS1uYXZfX2l0ZW1cIiB2LWlmPVwiIWN1cnJlbnRMZXZlbERlcHRoXCI+XG4gICAgICAgICAgICA8UGFnZXNNZW51Lz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0g0J3QsNGI0Lgg0L/RgNC+0LXQutGC0YsgLS0+XG4gICAgICAgICAgPFByb2plY3RzIHYtaWY9XCIhY3VycmVudExldmVsRGVwdGhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdHJhbnNpdGlvbi1ncm91cD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHNtb290aFJlZmxvdyBmcm9tIFwidnVlLXNtb290aC1yZWZsb3dcIjtcblxuaW1wb3J0IENvbnRhY3RzIGZyb20gXCIuL0NvbnRhY3RzXCI7XG5pbXBvcnQgUGFnZXNNZW51IGZyb20gXCIuL1BhZ2VzTWVudVwiO1xuaW1wb3J0IFN1Ym1lbnVJdGVtIGZyb20gXCIuL1N1Ym1lbnVJdGVtXCI7XG5pbXBvcnQgVXNlckJsb2NrIGZyb20gXCIuL1VzZXJCbG9ja1wiO1xuaW1wb3J0IEdvQmFja0J1dHRvbiBmcm9tIFwiLi9Hb0JhY2tCdXR0b25cIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9Qcm9qZWN0c1wiO1xuXG5jb25zdCBtZW51TGlua3MgPSBbXG4gIHtcbiAgICBsYWJlbDogXCLQmtCw0YLQsNC70L7Qs1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcItCh0LzQsNGA0YLRhNC+0L3RiyDQuCDQv9C70LDQvdGI0LXRgtGLXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KHQvNCw0YDRgtGE0L7QvdGLXCIsXG4gICAgICAgICAgICB1cmw6IFwiI1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQn9C70LDQvdGI0LXRgtGLXCIsXG4gICAgICAgICAgICB1cmw6IFwiI1wiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCLQndC+0YPRgtCx0YPQutC4INC4INC60L7QvNC/0YzRjtGC0LXRgNGLXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0J3QvtGD0YLQsdGD0LrQuFwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQo9C70YzRgtGA0LDQsdGD0LrQuFwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQndC+0YPRgtCx0YPQutC4LdGC0YDQsNC90YHRhNC+0YDQvNC10YDRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQnNC+0L3QvtCx0LvQvtC60LhcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KHQuNGB0YLQtdC80L3Ri9C1INCx0LvQvtC60LhcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0JzQvtC90LjRgtC+0YDRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQoNCw0LHQvtGH0LjQtSDRgdGC0LDQvdGG0LjQuFwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQotC+0L3QutC40LUg0LrQu9C40LXQvdGC0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KDQtdGI0LXQvdC40Y8g0LTQu9GPINCz0LXQudC80LXRgNC+0LJcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwi0KLQsiDQuCDQsNGD0LTQuNC+XCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0JHRi9GC0L7QstGL0LUg0KLQklwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQnNGD0LvRjNGC0LjQvNC10LTQuNCwICjQsNC60YPRgdGC0LjQutCwKVwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQn9GA0L7RhNC10YHRgdC40L7QvdCw0LvRjNC90YvQtSDQtNC40YHQv9C70LXQuFwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQoNC10YjQtdC90LjRjyDQktCa0KFcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0JjQvdGC0LXRgNCw0LrRgtC40LLQvdGL0LUg0LzQvtC90LjRgtC+0YDRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwi0KTQvtGC0L4g0Lgg0LLQuNC00LXQvlwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCk0L7RgtC+0LDQv9C/0LDRgNCw0YLRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0J7QsdGK0LXQutGC0LjQstGLXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQrdC60YjQvS3QutCw0LzQtdGA0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCS0LjQtNC10L7QutCw0LzQtdGA0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCLQodC10YLQtdCy0L7QtSDQuCDRgdC10YDQstC10YDQvdC+0LUg0L7QsdC+0YDRg9C00L7QstCw0L3QuNC1XCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KHQtdGA0LLQtdGA0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCh0LXRgtC10LLQvtC1INC+0LHQvtGA0YPQtNC+0LLQsNC90LjQtVwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KHQuNGB0YLQtdC80Ysg0YXRgNCw0L3QtdC90LjRjyDQtNCw0L3QvdGL0YVcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCLQoNCw0LfQstC70LXRh9C10L3QuNGPINC4INCz0LDQtNC20LXRgtGLXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KPQvNC90YvQtSDRh9Cw0YHRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0JrQstCw0LTRgNC+0LrQvtC/0YLQtdGA0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCY0LPRgNC+0LLRi9C1INC/0YDQuNGB0YLQsNCy0LrQuFwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0JjQs9GA0L7QstGL0LUg0LzQsNC90LjQv9GD0LvRj9GC0L7RgNGLXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQmNCz0YDRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KDQtdGI0LXQvdC40Y8g0LTQu9GPINCz0LXQudC80LXRgNC+0LJcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCj0LzQvdGL0Lkg0LTQvtC8XCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQpNC40YLQvdC10YEt0YLRgNC10LrQtdGA0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCLQntGE0LjRgdC90L7QtSDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40LUg0Lgg0L/QtdGA0LjRhNC10YDQuNGPXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0J/RgNC40L3RgtC10YDRiyAvINCc0KTQoy8g0KHQutCw0L3QtdGA0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCR0YvRgtC+0LLQsNGPINGC0LXRhdC90LjQutCwXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQodGC0LDRhtC40L7QvdCw0YDQvdCw0Y8g0YLQtdC70LXRhNC+0L3QuNGPXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQoNCw0YHRhdC+0LTQvdGL0LUg0LzQsNGC0LXRgNC40LDQu9GLXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwi0JDQutGB0LXRgdGB0YPQsNGA0YtcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQp9C10YXQu9GLINC00LvRjyDRgdC80LDRgNGC0YTQvtC90L7QslwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KfQtdGF0LvRiyDQtNC70Y8g0L/Qu9Cw0L3RiNC10YLQvtCyXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQodGD0LzQutC4INC00LvRjyDQvdC+0YPRgtGD0LHRg9C60L7QslwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0JrQsNCx0LXQu9C4INC00LvRjyDQv9C6XCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQmtCw0LHQtdC70Lgg0LTQu9GPINC/0LvQsNC90YjQtdGC0L7QslwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0JrQsNCx0LXQu9C4INC00LvRjyDRgdC80LDRgNGC0YTQvtC90L7QslwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcItCf0YDQvtCz0YDQsNC80LzQvdC+0LUg0L7QsdC10YHQv9C10YfQtdC90LjQtVwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCe0L/QtdGA0LDRhtC40L7QvdC90YvQtSDRgdC40YHRgtC10LzRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0J7RhNC40YHQvdGL0LUg0L/QsNC60LXRgtGLXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQktC40LTQtdC+0YDQtdC00LDQutGC0L7RgNGLXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQk9GA0LDRhNC40YfQtdGB0LrQuNC1INC/0LDQutC10YLRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCLQkNC60YbQuNC4XCIsXG4gICAgdXJsOiBcIiNcIlxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwi0JjQt9Cx0YDQsNC90L3QvtC1XCIsXG4gICAgdXJsOiBcIiNcIlxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwi0KHRgNCw0LLQvdC10L3QuNC1XCIsXG4gICAgdXJsOiBcIiNcIlxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwi0JrQvtGA0LfQuNC90LBcIixcbiAgICB1cmw6IFwiI1wiXG4gIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtzbW9vdGhSZWZsb3ddLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lbnVJdGVtczogbWVudUxpbmtzLFxuICAgICAgY3VycmVudFBvc2l0aW9uOiBbXSxcbiAgICAgIGxldmVsczogW10sXG4gICAgICBjdXJyZW50TGV2ZWw6IFtdLFxuICAgICAgcHJldkxldmVsRGVwdGg6IDAsXG4gICAgICBjdXJyZW50TGV2ZWxEZXB0aDogMFxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICB0cmFuc2l0aW9uTmFtZSgpIHtcbiAgICAgIHJldHVybiAnc2xpZGUtJyArICh0aGlzLmN1cnJlbnRMZXZlbERlcHRoID4gdGhpcy5wcmV2TGV2ZWxEZXB0aCA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgbmF2aWdhdGUocGF0aCkge1xuICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSBwYXRoO1xuICAgICAgdGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKCk7XG4gICAgfSxcblxuICAgIHJlY2FsY3VsYXRlSXRlbXMoKSB7XG4gICAgICBsZXQgaXRlbXMgPSB0aGlzLm1lbnVJdGVtcztcbiAgICAgIGxldCBsZXZlbHMgPSBbXTtcblxuICAgICAgbGV2ZWxzLnB1c2godGhpcy5nZXRMZXZlbChbXSwgbnVsbCwgaXRlbXMpKTtcblxuICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24uZm9yRWFjaCgoaW5kZXgsIGRlcHRoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBbLi4udGhpcy5jdXJyZW50UG9zaXRpb25dLnNsaWNlKDAsIGRlcHRoICsgMSk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gaXRlbXNbaW5kZXhdICYmIGl0ZW1zW2luZGV4XS5sYWJlbCB8fCBudWxsO1xuICAgICAgICBpdGVtcyA9IGl0ZW1zW2luZGV4XSAmJiBpdGVtc1tpbmRleF0uaXRlbXMgfHwgW107XG4gICAgICAgIGxldmVscy5wdXNoKHRoaXMuZ2V0TGV2ZWwocGF0aCwgbGFiZWwsIGl0ZW1zKSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sZXZlbHMgPSBsZXZlbHM7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IGxldmVsc1tsZXZlbHMubGVuZ3RoIC0gMV07XG4gICAgICB0aGlzLnByZXZMZXZlbERlcHRoID0gdGhpcy5jdXJyZW50TGV2ZWxEZXB0aDtcbiAgICAgIHRoaXMuY3VycmVudExldmVsRGVwdGggPSBsZXZlbHMubGVuZ3RoIC0gMTtcbiAgICB9LFxuXG4gICAgZ2V0TGV2ZWwocGF0aCwgbGFiZWwsIGl0ZW1zKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhdGg6IFsuLi5wYXRoLCBpbmRleF0sXG4gICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgICAgICBoYXNJdGVtczogaXRlbS5pdGVtcyAmJiBpdGVtLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRQYXRoTmFtZShwYXRoKSB7XG4gICAgICBpZiAoIXBhdGggfHwgcGF0aC5sZW5ndGggPCAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gWzAsIC4uLnBhdGhdLmpvaW4oJy0nKTtcbiAgICB9LFxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5yZWNhbGN1bGF0ZUl0ZW1zKCk7XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuICAgIENvbnRhY3RzLCBQYWdlc01lbnUsIFN1Ym1lbnVJdGVtLCBVc2VyQmxvY2ssIEdvQmFja0J1dHRvbiwgUHJvamVjdHNcbiAgfSxcbn1cblxuPC9zY3JpcHQ+XG5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1lbnUtbW9iaWxlLWNvbnRhY3RzIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1tb2JpbGUtY29udGFjdHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCJ0ZWw6ODgxMjMxODM4MzZcIlxuICAgICAgICAgdGl0bGU9XCLQn9C+0LfQstC+0L3QuNGC0Ywg0L3QsNC8XCJcbiAgICAgICAgIGNsYXNzPVwibWVudS1tb2JpbGUtY29udGFjdHNfX2xpbmtcIj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpY29uX3Bob25lXCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA4ICg4MTIpIDMxOC0zOC0zNlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LW1vYmlsZS1jb250YWN0c19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cIm1haWxUbzpjb3Jwb3JhdGVAbmJjb20ucnVcIlxuICAgICAgICAgdGl0bGU9XCLQndCw0L/QuNGB0LDRgtGMINC90LDQvCDQvdCwIGVtYWlsXCJcbiAgICAgICAgIGNsYXNzPVwibWVudS1tb2JpbGUtY29udGFjdHNfX2xpbmtcIj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbl9sZXR0ZXJcIj48L3VzZT5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIGNvcnBvcmF0ZUBuYmNvbS5ydVxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LW1vYmlsZS1jb250YWN0c19faXRlbVwiPlxuICAgICAgPFNvY2lhbExpbmtzLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFNvY2lhbExpbmtzIGZyb20gXCIuL1NvY2lhbExpbmtzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0NvbnRhY3RzJyxcbiAgY29tcG9uZW50czoge1xuICAgIFNvY2lhbExpbmtzXG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwibW9iaWxlLW1haW4tbWVudV9faXRlbSBtb2JpbGUtbWFpbi1tZW51X19pdGVtX211dGVkXCI+XG4gICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJtb2JpbGUtbWFpbi1tZW51X19saW5rXCJcbiAgICAgICAgQGNsaWNrPVwiJGVtaXQoYG5hdmlnYXRlYClcIlxuICAgICAgICByZWY9XCJiYWNrXCJcbiAgICA+XG4gICAgICA8SXRlbUljb24gOm5hbWU9XCJg0J3QsNC30LDQtGBcIi8+XG5cbiAgICAgICB7eyBwcmV2U2VjdGlvbk5hbWUgPyBwcmV2U2VjdGlvbk5hbWUgOiBg0J3QsNC30LDQtGAgfX1cbiAgICA8L2J1dHRvbj5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSXRlbUljb24gZnJvbSBcIi4vSXRlbUljb25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBgR29CYWNrQnV0dG9uYCxcbiAgcHJvcHM6IHtcbiAgICBwcmV2U2VjdGlvbk5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBJdGVtSWNvblxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1vYmlsZS1tYWluLW1lbnVfX2ljb25cIj5cbiAgICA8aW1nIDpzcmM9XCJzcmMgPyBzcmMgOiBgJHtTSVRFX1RFTVBMQVRFX1BBVEh9L2ltYWdlcy9kZW1vL2lwaG9uZS5zdmdgXCJcbiAgICAgICAgIHYtaWY9XCJjdXJyZW50TGV2ZWxEZXB0aFwiXG4gICAgICAgICA6YWx0PVwiYNCY0LfQvtCx0YDQsNC20LXQvdC40LUg0YDQsNC30LTQtdC70LAgwqskeyBuYW1lIH3Cu2BcIlxuICAgICAgICAgY2xhc3M9XCJtb2JpbGUtbWFpbi1tZW51X19pY29uXCJcbiAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxuICAgIDwhLS0g0J3QsCDQv9C10YDQstC+0Lwg0YPRgNC+0LLQvdC1INC/0L7QutCw0LfRi9Cy0LDQtdC8INGB0YLQsNGC0LjRh9C10YHQutC40LUgc3ZnINC40LrQvtC90LrQuCAtLT5cbiAgICA8c3ZnIHYtZWxzZSB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgIDx1c2UgOnhsaW5rOmhyZWY9XCJnZXRJY29uRnJvbUxhYmVsKG5hbWUpXCI+PC91c2U+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IHtTSVRFX1RFTVBMQVRFX1BBVEh9ID0gd2luZG93LmJ4Q29uc3RhbnRzO1xuXG5jb25zdCBzZWN0aW9uTmFtZVRvSWNvbiA9IHtcbiAgXCLQmtCw0YLQsNC70L7Qs1wiOiBcImljb25fYnVyZ2VyXCIsXG4gIFwi0JDQutGG0LjQuFwiOiBcImljb25fcGVyY2VudGFnZVwiLFxuICBcItCY0LfQsdGA0LDQvdC90L7QtVwiOiBcImljb25fbGlrZVwiLFxuICBcItCh0YDQsNCy0L3QtdC90LjQtVwiOiBcImljb25fY29tcGFyZVwiLFxuICBcItCa0L7RgNC30LjQvdCwXCI6IFwiaWNvbl9jYXJ0XCIsXG4gIFwi0J3QsNC30LDQtFwiOiBcImljb25fZ28tYmFja1wiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBgSXRlbUljb25gLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBTSVRFX1RFTVBMQVRFX1BBVEhcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjdXJyZW50TGV2ZWxEZXB0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgIH0sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEljb25Gcm9tTGFiZWwobGFiZWwpIHtcbiAgICAgIHJldHVybiBgIyR7c2VjdGlvbk5hbWVUb0ljb25bbGFiZWxdfWA7XG4gICAgfVxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8bmF2IHJvbGU9XCJuYXZpZ2F0aW9uXCIgY2xhc3M9XCJtb2JpbGUtcGFnZXMtbWVudVwiPlxuICAgIDxoNCBjbGFzcz1cIm1vYmlsZS1wYWdlcy1tZW51X190aXRsZVwiPlxuICAgICAg0J/QvtC60YPQv9Cw0YLQtdC70Y/QvFxuICAgIDwvaDQ+XG4gICAgPHVsIGNsYXNzPVwibW9iaWxlLXBhZ2VzLW1lbnVfX2xpc3QgbGlzdC1yZXNldFwiPlxuICAgICAgPGxpIGNsYXNzPVwibW9iaWxlLXBhZ2VzLW1lbnVfX2l0ZW1cIiB2LWZvcj1cIntuYW1lLCBsaW5rfSBpbiBwYWdlc1wiPlxuICAgICAgICA8YVxuICAgICAgICAgICAgOmhyZWY9XCJsaW5rXCJcbiAgICAgICAgICAgIDprZXk9XCJsaW5rXCJcbiAgICAgICAgICAgIGNsYXNzPVwibW9iaWxlLXBhZ2VzLW1lbnVfX2xpbmtcIlxuICAgICAgICAgICAgOnRpdGxlPVwiYNCf0LXRgNC10LnRgtC4INC6INGB0YLRgNCw0L3QuNGG0LUgJHtuYW1lfWBcIlxuICAgICAgICA+e3sgbmFtZSB9fTwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBgUGFnZXNNZW51YCxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQn9GA0L7Qs9GA0LDQvNC80LAg0LvQvtGP0LvRjNC90L7RgdGC0LggKE5CIENsdWIpYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQodC/0L7RgdC+0LEg0L7Qv9C70LDRgtGLYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQlNC+0YHRgtCw0LLQutCwYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQodCw0LzQvtCy0YvQstC+0LdgLFxuICAgICAgICAgIGxpbms6IGAvYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYNCb0LjQt9C40L3Qs2AsXG4gICAgICAgICAgbGluazogYC9gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBg0KHRgtGA0LDRhdC+0LLQsNC90LjQtWAsXG4gICAgICAgICAgbGluazogYC9gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBg0KJyYWRlLWluIEFwcGxlYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQodC10YDQstC40YHQvdGL0LUg0YbQtdC90YLRgNGLYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQl9Cw0LrQsNC30LDRgtGMINGB0LzQtdGC0YNgLFxuICAgICAgICAgIGxpbms6IGAvYFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkbCBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxkdCBjbGFzcz1cImNvbC0xMiB0ZXh0LWNlbnRlciBtYi0zXCI+0J3QsNGI0Lgg0L/RgNC+0LXQutGC0Ys8L2R0PlxuICAgIDxkZCB2LWZvcj1cIntuYW1lLCBsb2dvU3JjfSBpbiBpdGVtc1wiIGNsYXNzPVwiY29sLTYgY29sLXNtIHRleHQtY2VudGVyIG1iLTRcIj5cbiAgICAgIDxpbWcgOnNyYz1cIlNJVEVfVEVNUExBVEVfUEFUSCArIGxvZ29TcmNcIlxuICAgICAgICAgICA6YWx0PVwiYNCb0L7Qs9C+0YLQuNC/INC60L7QvNC/0LDQvdC40Lggwqske25hbWV9wrtgXCJcbiAgICAgICAgICAgbG9hZGluZz1cImxhenlcIj5cbiAgICA8L2RkPlxuICA8L2RsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IHtTSVRFX1RFTVBMQVRFX1BBVEh9ID0gd2luZG93LmJ4Q29uc3RhbnRzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IGBQcm9qZWN0c2AsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNJVEVfVEVNUExBVEVfUEFUSCxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgaVBvcnRgLFxuICAgICAgICAgIGxvZ29TcmM6IGAvaW1hZ2VzL3Byb2plY3RzLWxvZ29zL2lwb3J0LWRhcmsuc3ZnYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGBOQkNvbWAsXG4gICAgICAgICAgbG9nb1NyYzogYC9pbWFnZXMvcHJvamVjdHMtbG9nb3MvbmItZGFyay5wbmdgLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYFNvbnkgQ2VudHJlYCxcbiAgICAgICAgICBsb2dvU3JjOiBgL2ltYWdlcy9wcm9qZWN0cy1sb2dvcy9zb255LWRhcmsuc3ZnYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGBTYW1zdW5nIFN0b3JlYCxcbiAgICAgICAgICBsb2dvU3JjOiBgL2ltYWdlcy9wcm9qZWN0cy1sb2dvcy9zYW1zdW5nLWRhcmsuc3ZnYCxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGwgY2xhc3M9XCJzb2NpYWwgcm93IG1iLTBcIj5cbiAgICA8ZGQgY2xhc3M9XCJjb2wgbWItMFwiIHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiPlxuICAgICAgPGEgY2xhc3M9XCJzb2NpYWxfX2xpbmtcIlxuICAgICAgICAgOmhyZWY9XCJpdGVtLmxpbmtcIlxuICAgICAgICAgOnRpdGxlPVwiYNCf0LXRgNC10LnRgtC4INCyINC90LDRiCDCqyR7aXRlbS5uYW1lfcK7YFwiPlxuICAgICAgICA8aW1nIDpzcmM9XCJpdGVtLmljb25cIlxuICAgICAgICAgICAgIGNsYXNzPVwic29jaWFsX19pY29uXCJcbiAgICAgICAgICAgICA6YWx0PVwiYNCb0L7Qs9C+ICR7aXRlbS5uYW1lfWBcIlxuICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgIDwvYT5cbiAgICA8L2RkPlxuICA8L2RsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IHtTSVRFX1RFTVBMQVRFX1BBVEh9ID0gd2luZG93LmJ4Q29uc3RhbnRzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgVGVsZWdyYW1gLFxuICAgICAgICAgIGxpbms6IGAvYCxcbiAgICAgICAgICBpY29uOiBgJHtTSVRFX1RFTVBMQVRFX1BBVEh9L2ltYWdlcy9zb2NpYWwvdGVsZWdyYW0uc3ZnYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGBXaGF0c2FwcGAsXG4gICAgICAgICAgbGluazogYC9gLFxuICAgICAgICAgIGljb246IGAke1NJVEVfVEVNUExBVEVfUEFUSH0vaW1hZ2VzL3NvY2lhbC93aGF0c2FwcC5zdmdgLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYFZpYmVyYCxcbiAgICAgICAgICBsaW5rOiBgL2AsXG4gICAgICAgICAgaWNvbjogYCR7U0lURV9URU1QTEFURV9QQVRIfS9pbWFnZXMvc29jaWFsL3ZpYmVyLnN2Z2AsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwibW9iaWxlLW1haW4tbWVudV9faXRlbVwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAnbW9iaWxlLW1haW4tbWVudV9faXRlbV9jYXRhbG9nJzogaXRlbS5sYWJlbCA9PT0gJ9Ca0LDRgtCw0LvQvtCzJyxcbiAgICAgICAgICAgICdtb2JpbGUtbWFpbi1tZW51X19pdGVtX3NhbGVzJzogaXRlbS5sYWJlbCA9PT0gJ9CQ0LrRhtC40LgnXG4gICAgICAgICAgfVwiPlxuXG4gICAgPCEtLVxuICAgICDQldGB0LvQuCDQtdGB0YLRjCDQv9C+0LTRgNCw0LfQtNC10LvRiyAtPiDQv9C+0LrQsNC30YvQstCw0LXQvCBidXR0b24sXG4gICAgINCV0YHQu9C4INC/0L7QtNGA0LDQt9C00LXQu9C+0LIg0L3QtdGCIC0+INC/0L7QutCw0LfRi9Cy0LDQtdC8INGB0YHRi9C70LrRg1xuICAgICAtLT5cbiAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIm1vYmlsZS1tYWluLW1lbnVfX2xpbmtcIlxuICAgICAgICBAY2xpY2s9XCIkZW1pdCgnbmF2aWdhdGUnKVwiXG4gICAgICAgIHJlZj1cImxpbmtcIlxuICAgICAgICB2LWlmPVwiaXRlbS5oYXNJdGVtc1wiXG4gICAgPlxuICAgICAgPEl0ZW1JY29uXG4gICAgICAgICAgOmN1cnJlbnRMZXZlbERlcHRoPVwiY3VycmVudExldmVsRGVwdGhcIlxuICAgICAgICAgIDpuYW1lPVwiaXRlbS5sYWJlbFwiXG4gICAgICAgICAgOnNyYz1cImBgXCJcbiAgICAgIC8+XG4gICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgPC9idXR0b24+XG5cbiAgICA8YVxuICAgICAgICBocmVmPVwiXCJcbiAgICAgICAgdi1lbHNlXG4gICAgICAgIDpocmVmPVwiaXRlbS51cmxcIlxuICAgICAgICBjbGFzcz1cIm1vYmlsZS1tYWluLW1lbnVfX2xpbmtcIlxuICAgID5cbiAgICAgIDxJdGVtSWNvblxuICAgICAgICAgIDpjdXJyZW50TGV2ZWxEZXB0aD1cImN1cnJlbnRMZXZlbERlcHRoXCJcbiAgICAgICAgICA6bmFtZT1cIml0ZW0ubGFiZWxcIlxuICAgICAgICAgIDpzcmM9XCJgYFwiXG4gICAgICAvPlxuICAgICAge3sgaXRlbS5sYWJlbCB9fVxuICAgIDwvYT5cblxuICA8L2xpPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJdGVtSWNvbiBmcm9tIFwiLi9JdGVtSWNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IGBTdWJtZW51SXRlbWAsXG4gIHByb3BzOiBbYGl0ZW1gLCBgY3VycmVudExldmVsRGVwdGhgXSxcbiAgY29tcG9uZW50czoge1xuICAgIEl0ZW1JY29uXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWVudS11c2VyLWJsb2NrXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm1lbnUtdXNlci1ibG9ja19faXRlbSBtZW51LXVzZXItYmxvY2tfX2l0ZW1fcGVyc29uYWxcIj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbl91c2VyXCI+PC91c2U+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAg0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm1lbnUtdXNlci1ibG9ja19faXRlbSBtZW51LXVzZXItYmxvY2tfX2l0ZW1fcmVnaXN0cmF0aW9uXCI+XG4gICAgICAgICAg0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1xuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgdGV4dC1jZW50ZXIgYm9yZGVyLWVuZCBib3JkZXItdG9wXCI+XG4gICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm1lbnUtdXNlci1ibG9ja19faXRlbSBtZW51LXVzZXItYmxvY2tfX2l0ZW1fb3JkZXItbGlzdFwiPlxuICAgICAgICAgINCc0L7QuCDQt9Cw0LrQsNC30YtcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgdGV4dC1jZW50ZXIgYm9yZGVyLXRvcFwiPlxuICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJtZW51LXVzZXItYmxvY2tfX2l0ZW0gbWVudS11c2VyLWJsb2NrX19pdGVtX2JvbnVzZXNcIj5cbiAgICAgICAgICAxMDAg0LHQsNC70LvQvtCyXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbn1cbjwvc2NyaXB0PlxuIiwiZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbi8vIE9sZGVyIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgZXZlbnQgb3B0aW9ucywgZmVhdHVyZSBkZXRlY3QgaXQuXG5cbi8vIEFkb3B0ZWQgYW5kIG1vZGlmaWVkIHNvbHV0aW9uIGZyb20gQm9oZGFuIERpZHVraCAoMjAxNylcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxNTk0OTk3L2lvcy0xMC1zYWZhcmktcHJldmVudC1zY3JvbGxpbmctYmVoaW5kLWEtZml4ZWQtb3ZlcmxheS1hbmQtbWFpbnRhaW4tc2Nyb2xsLXBvc2lcblxudmFyIGhhc1Bhc3NpdmVFdmVudHMgPSBmYWxzZTtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgcGFzc2l2ZVRlc3RPcHRpb25zID0ge1xuICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgaGFzUGFzc2l2ZUV2ZW50cyA9IHRydWU7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgcGFzc2l2ZVRlc3RPcHRpb25zKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgcGFzc2l2ZVRlc3RPcHRpb25zKTtcbn1cblxudmFyIGlzSW9zRGV2aWNlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtICYmICgvaVAoYWR8aG9uZXxvZCkvLnRlc3Qod2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSkgfHwgd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSk7XG5cblxudmFyIGxvY2tzID0gW107XG52YXIgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG52YXIgaW5pdGlhbENsaWVudFkgPSAtMTtcbnZhciBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPSB2b2lkIDA7XG52YXIgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ID0gdm9pZCAwO1xuXG4vLyByZXR1cm5zIHRydWUgaWYgYGVsYCBzaG91bGQgYmUgYWxsb3dlZCB0byByZWNlaXZlIHRvdWNobW92ZSBldmVudHMuXG52YXIgYWxsb3dUb3VjaE1vdmUgPSBmdW5jdGlvbiBhbGxvd1RvdWNoTW92ZShlbCkge1xuICByZXR1cm4gbG9ja3Muc29tZShmdW5jdGlvbiAobG9jaykge1xuICAgIGlmIChsb2NrLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmUgJiYgbG9jay5vcHRpb25zLmFsbG93VG91Y2hNb3ZlKGVsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn07XG5cbnZhciBwcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KHJhd0V2ZW50KSB7XG4gIHZhciBlID0gcmF3RXZlbnQgfHwgd2luZG93LmV2ZW50O1xuXG4gIC8vIEZvciB0aGUgY2FzZSB3aGVyZWJ5IGNvbnN1bWVycyBhZGRzIGEgdG91Y2htb3ZlIGV2ZW50IGxpc3RlbmVyIHRvIGRvY3VtZW50LlxuICAvLyBSZWNhbGwgdGhhdCB3ZSBkbyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgeyBwYXNzaXZlOiBmYWxzZSB9KVxuICAvLyBpbiBkaXNhYmxlQm9keVNjcm9sbCAtIHNvIGlmIHdlIHByb3ZpZGUgdGhpcyBvcHBvcnR1bml0eSB0byBhbGxvd1RvdWNoTW92ZSwgdGhlblxuICAvLyB0aGUgdG91Y2htb3ZlIGV2ZW50IG9uIGRvY3VtZW50IHdpbGwgYnJlYWsuXG4gIGlmIChhbGxvd1RvdWNoTW92ZShlLnRhcmdldCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIERvIG5vdCBwcmV2ZW50IGlmIHRoZSBldmVudCBoYXMgbW9yZSB0aGFuIG9uZSB0b3VjaCAodXN1YWxseSBtZWFuaW5nIHRoaXMgaXMgYSBtdWx0aSB0b3VjaCBnZXN0dXJlIGxpa2UgcGluY2ggdG8gem9vbSkuXG4gIGlmIChlLnRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgc2V0T3ZlcmZsb3dIaWRkZW4gPSBmdW5jdGlvbiBzZXRPdmVyZmxvd0hpZGRlbihvcHRpb25zKSB7XG4gIC8vIElmIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCBpcyBhbHJlYWR5IHNldCwgZG9uJ3Qgc2V0IGl0IGFnYWluLlxuICBpZiAocHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgX3Jlc2VydmVTY3JvbGxCYXJHYXAgPSAhIW9wdGlvbnMgJiYgb3B0aW9ucy5yZXNlcnZlU2Nyb2xsQmFyR2FwID09PSB0cnVlO1xuICAgIHZhciBzY3JvbGxCYXJHYXAgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIGlmIChfcmVzZXJ2ZVNjcm9sbEJhckdhcCAmJiBzY3JvbGxCYXJHYXAgPiAwKSB7XG4gICAgICBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyR2FwICsgJ3B4JztcbiAgICB9XG4gIH1cblxuICAvLyBJZiBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgaXMgYWxyZWFkeSBzZXQsIGRvbid0IHNldCBpdCBhZ2Fpbi5cbiAgaWYgKHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cbn07XG5cbnZhciByZXN0b3JlT3ZlcmZsb3dTZXR0aW5nID0gZnVuY3Rpb24gcmVzdG9yZU92ZXJmbG93U2V0dGluZygpIHtcbiAgaWYgKHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQ7XG5cbiAgICAvLyBSZXN0b3JlIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCB0byB1bmRlZmluZWQgc28gc2V0T3ZlcmZsb3dIaWRkZW4ga25vd3MgaXRcbiAgICAvLyBjYW4gYmUgc2V0IGFnYWluLlxuICAgIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmc7XG5cbiAgICAvLyBSZXN0b3JlIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyB0byB1bmRlZmluZWRcbiAgICAvLyBzbyBzZXRPdmVyZmxvd0hpZGRlbiBrbm93cyBpdCBjYW4gYmUgc2V0IGFnYWluLlxuICAgIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyA9IHVuZGVmaW5lZDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvc2Nyb2xsSGVpZ2h0I1Byb2JsZW1zX2FuZF9zb2x1dGlvbnNcbnZhciBpc1RhcmdldEVsZW1lbnRUb3RhbGx5U2Nyb2xsZWQgPSBmdW5jdGlvbiBpc1RhcmdldEVsZW1lbnRUb3RhbGx5U2Nyb2xsZWQodGFyZ2V0RWxlbWVudCkge1xuICByZXR1cm4gdGFyZ2V0RWxlbWVudCA/IHRhcmdldEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gdGFyZ2V0RWxlbWVudC5zY3JvbGxUb3AgPD0gdGFyZ2V0RWxlbWVudC5jbGllbnRIZWlnaHQgOiBmYWxzZTtcbn07XG5cbnZhciBoYW5kbGVTY3JvbGwgPSBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgLSBpbml0aWFsQ2xpZW50WTtcblxuICBpZiAoYWxsb3dUb3VjaE1vdmUoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0YXJnZXRFbGVtZW50ICYmIHRhcmdldEVsZW1lbnQuc2Nyb2xsVG9wID09PSAwICYmIGNsaWVudFkgPiAwKSB7XG4gICAgLy8gZWxlbWVudCBpcyBhdCB0aGUgdG9wIG9mIGl0cyBzY3JvbGwuXG4gICAgcmV0dXJuIHByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgfVxuXG4gIGlmIChpc1RhcmdldEVsZW1lbnRUb3RhbGx5U2Nyb2xsZWQodGFyZ2V0RWxlbWVudCkgJiYgY2xpZW50WSA8IDApIHtcbiAgICAvLyBlbGVtZW50IGlzIGF0IHRoZSBib3R0b20gb2YgaXRzIHNjcm9sbC5cbiAgICByZXR1cm4gcHJldmVudERlZmF1bHQoZXZlbnQpO1xuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IHZhciBkaXNhYmxlQm9keVNjcm9sbCA9IGZ1bmN0aW9uIGRpc2FibGVCb2R5U2Nyb2xsKHRhcmdldEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgLy8gdGFyZ2V0RWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkXG4gIGlmICghdGFyZ2V0RWxlbWVudCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignZGlzYWJsZUJvZHlTY3JvbGwgdW5zdWNjZXNzZnVsIC0gdGFyZ2V0RWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY2FsbGluZyBkaXNhYmxlQm9keVNjcm9sbCBvbiBJT1MgZGV2aWNlcy4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBkaXNhYmxlQm9keVNjcm9sbCBtdXN0IG5vdCBoYXZlIGJlZW4gY2FsbGVkIG9uIHRoaXMgdGFyZ2V0RWxlbWVudCBiZWZvcmVcbiAgaWYgKGxvY2tzLnNvbWUoZnVuY3Rpb24gKGxvY2spIHtcbiAgICByZXR1cm4gbG9jay50YXJnZXRFbGVtZW50ID09PSB0YXJnZXRFbGVtZW50O1xuICB9KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBsb2NrID0ge1xuICAgIHRhcmdldEVsZW1lbnQ6IHRhcmdldEVsZW1lbnQsXG4gICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fVxuICB9O1xuXG4gIGxvY2tzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShsb2NrcyksIFtsb2NrXSk7XG5cbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBkZXRlY3Qgc2luZ2xlIHRvdWNoLlxuICAgICAgICBpbml0aWFsQ2xpZW50WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBkZXRlY3Qgc2luZ2xlIHRvdWNoLlxuICAgICAgICBoYW5kbGVTY3JvbGwoZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWRvY3VtZW50TGlzdGVuZXJBZGRlZCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIGhhc1Bhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB1bmRlZmluZWQpO1xuICAgICAgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2V0T3ZlcmZsb3dIaWRkZW4ob3B0aW9ucyk7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MgPSBmdW5jdGlvbiBjbGVhckFsbEJvZHlTY3JvbGxMb2NrcygpIHtcbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgLy8gQ2xlYXIgYWxsIGxvY2tzIG9udG91Y2hzdGFydC9vbnRvdWNobW92ZSBoYW5kbGVycywgYW5kIHRoZSByZWZlcmVuY2VzLlxuICAgIGxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGxvY2spIHtcbiAgICAgIGxvY2sudGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQgPSBudWxsO1xuICAgICAgbG9jay50YXJnZXRFbGVtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGlmIChkb2N1bWVudExpc3RlbmVyQWRkZWQpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCBoYXNQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogdW5kZWZpbmVkKTtcbiAgICAgIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGluaXRpYWwgY2xpZW50WS5cbiAgICBpbml0aWFsQ2xpZW50WSA9IC0xO1xuICB9IGVsc2Uge1xuICAgIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcoKTtcbiAgfVxuXG4gIGxvY2tzID0gW107XG59O1xuXG5leHBvcnQgdmFyIGVuYWJsZUJvZHlTY3JvbGwgPSBmdW5jdGlvbiBlbmFibGVCb2R5U2Nyb2xsKHRhcmdldEVsZW1lbnQpIHtcbiAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdlbmFibGVCb2R5U2Nyb2xsIHVuc3VjY2Vzc2Z1bCAtIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNhbGxpbmcgZW5hYmxlQm9keVNjcm9sbCBvbiBJT1MgZGV2aWNlcy4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsb2NrcyA9IGxvY2tzLmZpbHRlcihmdW5jdGlvbiAobG9jaykge1xuICAgIHJldHVybiBsb2NrLnRhcmdldEVsZW1lbnQgIT09IHRhcmdldEVsZW1lbnQ7XG4gIH0pO1xuXG4gIGlmIChpc0lvc0RldmljZSkge1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaHN0YXJ0ID0gbnVsbDtcbiAgICB0YXJnZXRFbGVtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcblxuICAgIGlmIChkb2N1bWVudExpc3RlbmVyQWRkZWQgJiYgbG9ja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgaGFzUGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IHVuZGVmaW5lZCk7XG4gICAgICBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWxvY2tzLmxlbmd0aCkge1xuICAgIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcoKTtcbiAgfVxufTtcblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1uYXZcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uLWdyb3VwXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJsZXZlbHNcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW5hdl9fbGV2ZWxzIG1vYmlsZS1tYWluLW1lbnVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogX3ZtLnRyYW5zaXRpb25OYW1lLCB0YWc6IFwibmF2XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IF92bS5nZXRQYXRoTmFtZShfdm0uY3VycmVudExldmVsLnBhdGgpLFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxldmVsLVwiICsgX3ZtLmdldFBhdGhOYW1lKF92bS5jdXJyZW50TGV2ZWwucGF0aCksXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtbmF2X19pbm5lciBwYi01XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCItMVwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50TGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1uYXZfX2xldmVsIG1vYmlsZS1uYXZfX2l0ZW0gcC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9iaWxlLW5hdi1sZXZlbC1sYWJlbC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGF0aE5hbWUoX3ZtLmN1cnJlbnRMZXZlbC5wYXRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcImdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2xpc3QgbGlzdC1yZXNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudExldmVsRGVwdGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJHb0JhY2tCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNlY3Rpb25OYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sZXZlbHNbX3ZtLmN1cnJlbnRMZXZlbERlcHRoIC0gMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmF2aWdhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudExldmVsLnBhdGguc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50TGV2ZWxEZXB0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY3VycmVudExldmVsLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIlN1Ym1lbnVJdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0ucGF0aC5qb2luKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXZlbERlcHRoOiBfdm0uY3VycmVudExldmVsRGVwdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmF2aWdhdGUoaXRlbS5wYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5jdXJyZW50TGV2ZWxEZXB0aFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW5hdl9faXRlbSBwdC0wIHBiLTBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiVXNlckJsb2NrXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5jdXJyZW50TGV2ZWxEZXB0aFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW5hdl9faXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJDb250YWN0c1wiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICFfdm0uY3VycmVudExldmVsRGVwdGhcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1uYXZfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiUGFnZXNNZW51XCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5jdXJyZW50TGV2ZWxEZXB0aCA/IF9jKFwiUHJvamVjdHNcIikgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtbW9iaWxlLWNvbnRhY3RzIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZW51LW1vYmlsZS1jb250YWN0c19faXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS1tb2JpbGUtY29udGFjdHNfX2xpbmtcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwidGVsOjg4MTIzMTgzODM2XCIsIHRpdGxlOiBcItCf0L7Qt9Cy0L7QvdC40YLRjCDQvdCw0LxcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInN2Z1wiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInVzZVwiLCB7IGF0dHJzOiB7IFwieGxpbms6aHJlZlwiOiBcIiNpY29uX3Bob25lXCIgfSB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICA4ICg4MTIpIDMxOC0zOC0zNlxcbiAgICBcIilcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVudS1tb2JpbGUtY29udGFjdHNfX2l0ZW1cIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtbW9iaWxlLWNvbnRhY3RzX19saW5rXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBocmVmOiBcIm1haWxUbzpjb3Jwb3JhdGVAbmJjb20ucnVcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi0J3QsNC/0LjRgdCw0YLRjCDQvdCw0Lwg0L3QsCBlbWFpbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInN2Z1wiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInVzZVwiLCB7IGF0dHJzOiB7IFwieGxpbms6aHJlZlwiOiBcIiNpY29uX2xldHRlclwiIH0gfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgY29ycG9yYXRlQG5iY29tLnJ1XFxuICAgIFwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWVudS1tb2JpbGUtY29udGFjdHNfX2l0ZW1cIiB9LFxuICAgICAgICBbX2MoXCJTb2NpYWxMaW5rc1wiKV0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibGlcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2l0ZW0gbW9iaWxlLW1haW4tbWVudV9faXRlbV9tdXRlZFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiYmFja1wiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2xpbmtcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcIm5hdmlnYXRlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJJdGVtSWNvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwi0J3QsNC30LDQtFwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG5cXG4gICAgIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcmV2U2VjdGlvbk5hbWUgPyBfdm0ucHJldlNlY3Rpb25OYW1lIDogXCLQndCw0LfQsNC0XCIpICtcbiAgICAgICAgICAgICAgXCJcXG4gIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2ljb25cIiB9LCBbXG4gICAgX3ZtLmN1cnJlbnRMZXZlbERlcHRoXG4gICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtbWFpbi1tZW51X19pY29uXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHNyYzogX3ZtLnNyY1xuICAgICAgICAgICAgICA/IF92bS5zcmNcbiAgICAgICAgICAgICAgOiBfdm0uU0lURV9URU1QTEFURV9QQVRIICsgXCIvaW1hZ2VzL2RlbW8vaXBob25lLnN2Z1wiLFxuICAgICAgICAgICAgYWx0OiBcItCY0LfQvtCx0YDQsNC20LXQvdC40LUg0YDQsNC30LTQtdC70LAgwqtcIiArIF92bS5uYW1lICsgXCLCu1wiLFxuICAgICAgICAgICAgbG9hZGluZzogXCJsYXp5XCIsXG4gICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjI0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICA6IF9jKFwic3ZnXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMjRcIiwgaGVpZ2h0OiBcIjI0XCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJ1c2VcIiwgeyBhdHRyczogeyBcInhsaW5rOmhyZWZcIjogX3ZtLmdldEljb25Gcm9tTGFiZWwoX3ZtLm5hbWUpIH0gfSlcbiAgICAgICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibmF2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtb2JpbGUtcGFnZXMtbWVudVwiLCBhdHRyczogeyByb2xlOiBcIm5hdmlnYXRpb25cIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1wYWdlcy1tZW51X190aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgINCf0L7QutGD0L/QsNGC0LXQu9GP0LxcXG4gIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2JpbGUtcGFnZXMtbWVudV9fbGlzdCBsaXN0LXJlc2V0XCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5wYWdlcywgZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSByZWYubmFtZVxuICAgICAgICAgIHZhciBsaW5rID0gcmVmLmxpbmtcbiAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1wYWdlcy1tZW51X19pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBsaW5rLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1wYWdlcy1tZW51X19saW5rXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogbGluaywgdGl0bGU6IFwi0J/QtdGA0LXQudGC0Lgg0Log0YHRgtGA0LDQvdC40YbQtSBcIiArIG5hbWUgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhuYW1lKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGxcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkdFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LWNlbnRlciBtYi0zXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCLQndCw0YjQuCDQv9GA0L7QtdC60YLRi1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgIHZhciBuYW1lID0gcmVmLm5hbWVcbiAgICAgICAgdmFyIGxvZ29TcmMgPSByZWYubG9nb1NyY1xuICAgICAgICByZXR1cm4gX2MoXCJkZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02IGNvbC1zbSB0ZXh0LWNlbnRlciBtYi00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogX3ZtLlNJVEVfVEVNUExBVEVfUEFUSCArIGxvZ29TcmMsXG4gICAgICAgICAgICAgIGFsdDogXCLQm9C+0LPQvtGC0LjQvyDQutC+0LzQv9Cw0L3QuNC4IMKrXCIgKyBuYW1lICsgXCLCu1wiLFxuICAgICAgICAgICAgICBsb2FkaW5nOiBcImxhenlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRsXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJzb2NpYWwgcm93IG1iLTBcIiB9LFxuICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfYyhcImRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIG1iLTBcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvY2lhbF9fbGlua1wiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogaXRlbS5saW5rLFxuICAgICAgICAgICAgICB0aXRsZTogXCLQn9C10YDQtdC50YLQuCDQsiDQvdCw0YggwqtcIiArIGl0ZW0ubmFtZSArIFwiwrtcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzb2NpYWxfX2ljb25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzcmM6IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBhbHQ6IFwi0JvQvtCz0L4gXCIgKyBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogXCJsYXp5XCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibGlcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtbWFpbi1tZW51X19pdGVtXCIsXG4gICAgICBjbGFzczoge1xuICAgICAgICBcIm1vYmlsZS1tYWluLW1lbnVfX2l0ZW1fY2F0YWxvZ1wiOiBfdm0uaXRlbS5sYWJlbCA9PT0gXCLQmtCw0YLQsNC70L7Qs1wiLFxuICAgICAgICBcIm1vYmlsZS1tYWluLW1lbnVfX2l0ZW1fc2FsZXNcIjogX3ZtLml0ZW0ubGFiZWwgPT09IFwi0JDQutGG0LjQuFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uaXRlbS5oYXNJdGVtc1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW1haW4tbWVudV9fbGlua1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcIm5hdmlnYXRlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkl0ZW1JY29uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY3VycmVudExldmVsRGVwdGg6IF92bS5jdXJyZW50TGV2ZWxEZXB0aCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IF92bS5pdGVtLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgc3JjOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5pdGVtLmxhYmVsKSArIFwiXFxuICBcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2xpbmtcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJcIiwgaHJlZjogX3ZtLml0ZW0udXJsIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSXRlbUljb25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50TGV2ZWxEZXB0aDogX3ZtLmN1cnJlbnRMZXZlbERlcHRoLFxuICAgICAgICAgICAgICAgICAgbmFtZTogX3ZtLml0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLml0ZW0ubGFiZWwpICsgXCJcXG4gIFwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lbnUtdXNlci1ibG9ja1wiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtdXNlci1ibG9ja19faXRlbSBtZW51LXVzZXItYmxvY2tfX2l0ZW1fcGVyc29uYWxcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzdmdcIiwgeyBhdHRyczogeyB3aWR0aDogXCIyMFwiLCBoZWlnaHQ6IFwiMjBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJ1c2VcIiwgeyBhdHRyczogeyBcInhsaW5rOmhyZWZcIjogXCIjaWNvbl91c2VyXCIgfSB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgINCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRglxcbiAgICAgIFwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwibWVudS11c2VyLWJsb2NrX19pdGVtIG1lbnUtdXNlci1ibG9ja19faXRlbV9yZWdpc3RyYXRpb25cIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcIlwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAg0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1xcbiAgICAgIFwiKV1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgdGV4dC1jZW50ZXIgYm9yZGVyLWVuZCBib3JkZXItdG9wXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJtZW51LXVzZXItYmxvY2tfX2l0ZW0gbWVudS11c2VyLWJsb2NrX19pdGVtX29yZGVyLWxpc3RcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAg0JzQvtC4INC30LDQutCw0LfRi1xcbiAgICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiB0ZXh0LWNlbnRlciBib3JkZXItdG9wXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51LXVzZXItYmxvY2tfX2l0ZW0gbWVudS11c2VyLWJsb2NrX19pdGVtX2JvbnVzZXNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgMTAwINCx0LDQu9C70L7QslxcbiAgICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlNtb290aFJlZmxvdz1lKCk6dC5TbW9vdGhSZWZsb3c9ZSgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KW4uZChyLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz00NCl9KFtmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyOCkoXCJ3a3NcIiksbz1uKDE0KSxpPW4oMSkuU3ltYm9sLHU9XCJmdW5jdGlvblwiPT10eXBlb2YgaTsodC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT11JiZpW3RdfHwodT9pOm8pKFwiU3ltYm9sLlwiK3QpKX0pLnN0b3JlPXJ9LGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBfX2cmJihfX2c9bil9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEpLG89big3KSxpPW4oMyksdT1uKDE5KSxzPW4oMjQpLGY9ZnVuY3Rpb24odCxlLG4pe3ZhciBhLGMsbCxwLHY9dCZmLkYsaD10JmYuRyx5PXQmZi5TLGQ9dCZmLlAsbT10JmYuQixnPWg/cjp5P3JbZV18fChyW2VdPXt9KToocltlXXx8e30pLnByb3RvdHlwZSxiPWg/bzpvW2VdfHwob1tlXT17fSksUz1iLnByb3RvdHlwZXx8KGIucHJvdG90eXBlPXt9KTtmb3IoYSBpbiBoJiYobj1lKSxuKWw9KChjPSF2JiZnJiZ2b2lkIDAhPT1nW2FdKT9nOm4pW2FdLHA9bSYmYz9zKGwscik6ZCYmXCJmdW5jdGlvblwiPT10eXBlb2YgbD9zKEZ1bmN0aW9uLmNhbGwsbCk6bCxnJiZ1KGcsYSxsLHQmZi5VKSxiW2FdIT1sJiZpKGIsYSxwKSxkJiZTW2FdIT1sJiYoU1thXT1sKX07ci5jb3JlPW8sZi5GPTEsZi5HPTIsZi5TPTQsZi5QPTgsZi5CPTE2LGYuVz0zMixmLlU9NjQsZi5SPTEyOCx0LmV4cG9ydHM9Zn0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNCksbz1uKDEzKTt0LmV4cG9ydHM9big4KT9mdW5jdGlvbih0LGUsbil7cmV0dXJuIHIuZih0LGUsbygxLG4pKX06ZnVuY3Rpb24odCxlLG4pe3JldHVybiB0W2VdPW4sdH19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEyKSxvPW4oMzQpLGk9bigyMyksdT1PYmplY3QuZGVmaW5lUHJvcGVydHk7ZS5mPW4oOCk/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHQsZSxuKXtpZihyKHQpLGU9aShlLCEwKSxyKG4pLG8pdHJ5e3JldHVybiB1KHQsZSxuKX1jYXRjaCh0KXt9aWYoXCJnZXRcImluIG58fFwic2V0XCJpbiBuKXRocm93IFR5cGVFcnJvcihcIkFjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIVwiKTtyZXR1cm5cInZhbHVlXCJpbiBuJiYodFtlXT1uLnZhbHVlKSx0fX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIHQ/bnVsbCE9PXQ6XCJmdW5jdGlvblwiPT10eXBlb2YgdH19LGZ1bmN0aW9uKHQsZSl7dmFyIG49e30uaGFzT3duUHJvcGVydHk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG4uY2FsbCh0LGUpfX0sZnVuY3Rpb24odCxlKXt2YXIgbj10LmV4cG9ydHM9e3ZlcnNpb246XCIyLjUuN1wifTtcIm51bWJlclwiPT10eXBlb2YgX19lJiYoX19lPW4pfSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPSFuKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt0cnl7cmV0dXJuISF0KCl9Y2F0Y2godCl7cmV0dXJuITB9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMzcpLG89bigyOSk7dC5leHBvcnRzPU9iamVjdC5rZXlzfHxmdW5jdGlvbih0KXtyZXR1cm4gcih0LG8pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjUpLG89bigxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByKG8odCkpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKCFyKHQpKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhbiBvYmplY3QhXCIpO3JldHVybiB0fX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm57ZW51bWVyYWJsZTohKDEmdCksY29uZmlndXJhYmxlOiEoMiZ0KSx3cml0YWJsZTohKDQmdCksdmFsdWU6ZX19fSxmdW5jdGlvbih0LGUpe3ZhciBuPTAscj1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09dD9cIlwiOnQsXCIpX1wiLCgrK24rcikudG9TdHJpbmcoMzYpKX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPXt9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3Qocih0KSl9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZih2b2lkIDA9PXQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK3QpO3JldHVybiB0fX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ITF9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEpLG89bigzKSxpPW4oNiksdT1uKDE0KShcInNyY1wiKSxzPUZ1bmN0aW9uLnRvU3RyaW5nLGY9KFwiXCIrcykuc3BsaXQoXCJ0b1N0cmluZ1wiKTtuKDcpLmluc3BlY3RTb3VyY2U9ZnVuY3Rpb24odCl7cmV0dXJuIHMuY2FsbCh0KX0sKHQuZXhwb3J0cz1mdW5jdGlvbih0LGUsbixzKXt2YXIgYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuO2EmJihpKG4sXCJuYW1lXCIpfHxvKG4sXCJuYW1lXCIsZSkpLHRbZV0hPT1uJiYoYSYmKGkobix1KXx8byhuLHUsdFtlXT9cIlwiK3RbZV06Zi5qb2luKFN0cmluZyhlKSkpKSx0PT09cj90W2VdPW46cz90W2VdP3RbZV09bjpvKHQsZSxuKTooZGVsZXRlIHRbZV0sbyh0LGUsbikpKX0pKEZ1bmN0aW9uLnByb3RvdHlwZSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzJiZ0aGlzW3VdfHxzLmNhbGwodGhpcyl9KX0sZnVuY3Rpb24odCxlKXt2YXIgbj17fS50b1N0cmluZzt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIG4uY2FsbCh0KS5zbGljZSg4LC0xKX19LGZ1bmN0aW9uKHQsZSl7ZS5mPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlfSxmdW5jdGlvbih0LGUpe3ZhciBuPU1hdGguY2VpbCxyPU1hdGguZmxvb3I7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpc05hTih0PSt0KT8wOih0PjA/cjpuKSh0KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDUpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2lmKCFyKHQpKXJldHVybiB0O3ZhciBuLG87aWYoZSYmXCJmdW5jdGlvblwiPT10eXBlb2Yobj10LnRvU3RyaW5nKSYmIXIobz1uLmNhbGwodCkpKXJldHVybiBvO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKG49dC52YWx1ZU9mKSYmIXIobz1uLmNhbGwodCkpKXJldHVybiBvO2lmKCFlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXQudG9TdHJpbmcpJiYhcihvPW4uY2FsbCh0KSkpcmV0dXJuIG87dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNDcpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7aWYocih0KSx2b2lkIDA9PT1lKXJldHVybiB0O3N3aXRjaChuKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiB0LmNhbGwoZSxuKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihuLHIpe3JldHVybiB0LmNhbGwoZSxuLHIpfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKG4scixvKXtyZXR1cm4gdC5jYWxsKGUsbixyLG8pfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdC5hcHBseShlLGFyZ3VtZW50cyl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjApO3QuZXhwb3J0cz1PYmplY3QoXCJ6XCIpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApP09iamVjdDpmdW5jdGlvbih0KXtyZXR1cm5cIlN0cmluZ1wiPT1yKHQpP3Quc3BsaXQoXCJcIik6T2JqZWN0KHQpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjIpLG89TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0PjA/byhyKHQpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyOCkoXCJrZXlzXCIpLG89bigxNCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiByW3RdfHwoclt0XT1vKHQpKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDcpLG89bigxKSxpPW9bXCJfX2NvcmUtanNfc2hhcmVkX19cIl18fChvW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdPXt9KTsodC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGlbdF18fChpW3RdPXZvaWQgMCE9PWU/ZTp7fSl9KShcInZlcnNpb25zXCIsW10pLnB1c2goe3ZlcnNpb246ci52ZXJzaW9uLG1vZGU6bigxOCk/XCJwdXJlXCI6XCJnbG9iYWxcIixjb3B5cmlnaHQ6XCLCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpXCJ9KX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9XCJjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2ZcIi5zcGxpdChcIixcIil9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQpLmYsbz1uKDYpLGk9bigwKShcInRvU3RyaW5nVGFnXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7dCYmIW8odD1uP3Q6dC5wcm90b3R5cGUsaSkmJnIodCxpLHtjb25maWd1cmFibGU6ITAsdmFsdWU6ZX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMCkoXCJ1bnNjb3BhYmxlc1wiKSxvPUFycmF5LnByb3RvdHlwZTt2b2lkIDA9PW9bcl0mJm4oMykobyxyLHt9KSx0LmV4cG9ydHM9ZnVuY3Rpb24odCl7b1tyXVt0XT0hMH19LGZ1bmN0aW9uKHQsZSl7ZS5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHN9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDE4KSxvPW4oMiksaT1uKDE5KSx1PW4oMykscz1uKDE1KSxmPW4oNDgpLGE9bigzMCksYz1uKDUyKSxsPW4oMCkoXCJpdGVyYXRvclwiKSxwPSEoW10ua2V5cyYmXCJuZXh0XCJpbltdLmtleXMoKSksdj1mdW5jdGlvbigpe3JldHVybiB0aGlzfTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4saCx5LGQsbSl7ZihuLGUsaCk7dmFyIGcsYixTLHg9ZnVuY3Rpb24odCl7aWYoIXAmJnQgaW4gailyZXR1cm4galt0XTtzd2l0Y2godCl7Y2FzZVwia2V5c1wiOmNhc2VcInZhbHVlc1wiOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgbih0aGlzLHQpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG4odGhpcyx0KX19LHc9ZStcIiBJdGVyYXRvclwiLEU9XCJ2YWx1ZXNcIj09eSxPPSExLGo9dC5wcm90b3R5cGUsXz1qW2xdfHxqW1wiQEBpdGVyYXRvclwiXXx8eSYmalt5XSxUPV98fHgoeSksQT15P0U/eChcImVudHJpZXNcIik6VDp2b2lkIDAsUD1cIkFycmF5XCI9PWUmJmouZW50cmllc3x8XztpZihQJiYoUz1jKFAuY2FsbChuZXcgdCkpKSE9PU9iamVjdC5wcm90b3R5cGUmJlMubmV4dCYmKGEoUyx3LCEwKSxyfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTW2xdfHx1KFMsbCx2KSksRSYmXyYmXCJ2YWx1ZXNcIiE9PV8ubmFtZSYmKE89ITAsVD1mdW5jdGlvbigpe3JldHVybiBfLmNhbGwodGhpcyl9KSxyJiYhbXx8IXAmJiFPJiZqW2xdfHx1KGosbCxUKSxzW2VdPVQsc1t3XT12LHkpaWYoZz17dmFsdWVzOkU/VDp4KFwidmFsdWVzXCIpLGtleXM6ZD9UOngoXCJrZXlzXCIpLGVudHJpZXM6QX0sbSlmb3IoYiBpbiBnKWIgaW4ganx8aShqLGIsZ1tiXSk7ZWxzZSBvKG8uUCtvLkYqKHB8fE8pLGUsZyk7cmV0dXJuIGd9fSxmdW5jdGlvbih0LGUsbil7dC5leHBvcnRzPSFuKDgpJiYhbig5KShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkobigzNSkoXCJkaXZcIiksXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNSksbz1uKDEpLmRvY3VtZW50LGk9cihvKSYmcihvLmNyZWF0ZUVsZW1lbnQpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gaT9vLmNyZWF0ZUVsZW1lbnQodCk6e319fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMiksbz1uKDQ5KSxpPW4oMjkpLHU9bigyNykoXCJJRV9QUk9UT1wiKSxzPWZ1bmN0aW9uKCl7fSxmPWZ1bmN0aW9uKCl7dmFyIHQsZT1uKDM1KShcImlmcmFtZVwiKSxyPWkubGVuZ3RoO2ZvcihlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsbig1MSkuYXBwZW5kQ2hpbGQoZSksZS5zcmM9XCJqYXZhc2NyaXB0OlwiLCh0PWUuY29udGVudFdpbmRvdy5kb2N1bWVudCkub3BlbigpLHQud3JpdGUoXCI8c2NyaXB0PmRvY3VtZW50LkY9T2JqZWN0PFxcL3NjcmlwdD5cIiksdC5jbG9zZSgpLGY9dC5GO3ItLTspZGVsZXRlIGYucHJvdG90eXBlW2lbcl1dO3JldHVybiBmKCl9O3QuZXhwb3J0cz1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbih0LGUpe3ZhciBuO3JldHVybiBudWxsIT09dD8ocy5wcm90b3R5cGU9cih0KSxuPW5ldyBzLHMucHJvdG90eXBlPW51bGwsblt1XT10KTpuPWYoKSx2b2lkIDA9PT1lP246byhuLGUpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNiksbz1uKDExKSxpPW4oMzgpKCExKSx1PW4oMjcpKFwiSUVfUFJPVE9cIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIG4scz1vKHQpLGY9MCxhPVtdO2ZvcihuIGluIHMpbiE9dSYmcihzLG4pJiZhLnB1c2gobik7Zm9yKDtlLmxlbmd0aD5mOylyKHMsbj1lW2YrK10pJiYofmkoYSxuKXx8YS5wdXNoKG4pKTtyZXR1cm4gYX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDExKSxvPW4oMjYpLGk9big1MCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLG4sdSl7dmFyIHMsZj1yKGUpLGE9byhmLmxlbmd0aCksYz1pKHUsYSk7aWYodCYmbiE9bil7Zm9yKDthPmM7KWlmKChzPWZbYysrXSkhPXMpcmV0dXJuITB9ZWxzZSBmb3IoO2E+YztjKyspaWYoKHR8fGMgaW4gZikmJmZbY109PT1uKXJldHVybiB0fHxjfHwwO3JldHVybiF0JiYtMX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigzMSksbz1uKDY1KSxpPW4oMTUpLHU9bigxMSk7dC5leHBvcnRzPW4oMzMpKEFycmF5LFwiQXJyYXlcIixmdW5jdGlvbih0LGUpe3RoaXMuX3Q9dSh0KSx0aGlzLl9pPTAsdGhpcy5faz1lfSxmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3QsZT10aGlzLl9rLG49dGhpcy5faSsrO3JldHVybiF0fHxuPj10Lmxlbmd0aD8odGhpcy5fdD12b2lkIDAsbygxKSk6bygwLFwia2V5c1wiPT1lP246XCJ2YWx1ZXNcIj09ZT90W25dOltuLHRbbl1dKX0sXCJ2YWx1ZXNcIiksaS5Bcmd1bWVudHM9aS5BcnJheSxyKFwia2V5c1wiKSxyKFwidmFsdWVzXCIpLHIoXCJlbnRyaWVzXCIpfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyMCk7dC5leHBvcnRzPUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKHQpe3JldHVyblwiQXJyYXlcIj09cih0KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEpLG89big3KSxpPW4oMTgpLHU9big0Mikscz1uKDQpLmY7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPW8uU3ltYm9sfHwoby5TeW1ib2w9aT97fTpyLlN5bWJvbHx8e30pO1wiX1wiPT10LmNoYXJBdCgwKXx8dCBpbiBlfHxzKGUsdCx7dmFsdWU6dS5mKHQpfSl9fSxmdW5jdGlvbih0LGUsbil7ZS5mPW4oMCl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDM3KSxvPW4oMjkpLmNvbmNhdChcImxlbmd0aFwiLFwicHJvdG90eXBlXCIpO2UuZj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc3x8ZnVuY3Rpb24odCl7cmV0dXJuIHIodCxvKX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSk7big0NSksbig1Myksbig2MCksbig2MSksbigzOSksbig2Niksbig2OCksbig3MCksbig3NCksbig3NSksbig4MCk7ZnVuY3Rpb24gcih0LGUpe2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxyLmtleSxyKX19dmFyIG89e21ldGhvZHM6eyRzbW9vdGhSZWZsb3c6ZnVuY3Rpb24odCl7dmFyIGU9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e307dGhpcy5fc21vb3RoRWxlbWVudHMucHVzaChuZXcgYSh0KSl9LmJpbmQodGhpcyk7QXJyYXkuaXNBcnJheSh0KT90LmZvckVhY2goZSk6ZSh0KX0sJHVuc21vb3RoUmVmbG93OmZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOmYoKSxlPXRoaXMuJGVsLG49dGhpcy5fc21vb3RoRWxlbWVudHMuZmluZEluZGV4KGZ1bmN0aW9uKG4pe3JldHVybiB1KGUsbi5vcHRpb25zLmVsKT09PXUoZSx0LmVsKX0pO2lmKC0xPT09bilyZXR1cm4gdm9pZCBjb25zb2xlLmVycm9yKFwiVlNSX0VSUk9SOiAkdW5zbW9vdGhSZWZsb3cgZmFpbGVkIGR1ZSB0byBpbnZhbGlkIGVsIG9wdGlvblwiKTt0aGlzLl9zbW9vdGhFbGVtZW50c1tuXS5zY2hlZHVsZVJlbW92YWwoKX0uYmluZCh0aGlzKTtBcnJheS5pc0FycmF5KHQpP3QuZm9yRWFjaChlKTplKHQpfX0sYmVmb3JlTW91bnQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuX3Ntb290aEVsZW1lbnRzPVtdLHRoaXMuX2VuZExpc3RlbmVyPWZ1bmN0aW9uKGUpe3ZhciBuPSEwLHI9ITEsbz12b2lkIDA7dHJ5e2Zvcih2YXIgaSx1PXQuX3Ntb290aEVsZW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKTshKG49KGk9dS5uZXh0KCkpLmRvbmUpO249ITApe2kudmFsdWUuZW5kTGlzdGVuZXIoZSl9fWNhdGNoKHQpe3I9ITAsbz10fWZpbmFsbHl7dHJ5e258fG51bGw9PXUucmV0dXJufHx1LnJldHVybigpfWZpbmFsbHl7aWYocil0aHJvdyBvfX19fSxtb3VudGVkOmZ1bmN0aW9uKCl7dGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIix0aGlzLl9lbmRMaXN0ZW5lcix7cGFzc2l2ZTohMH0pfSxkZXN0cm95ZWQ6ZnVuY3Rpb24oKXt0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHRoaXMuX2VuZExpc3RlbmVyLHtwYXNzaXZlOiEwfSl9LGJlZm9yZVVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsdGhpcy5fZW5kTGlzdGVuZXIse3Bhc3NpdmU6ITB9KSxpKHRoaXMpO3ZhciB0PSEwLGU9ITEsbj12b2lkIDA7dHJ5e2Zvcih2YXIgcixvPXRoaXMuX3Ntb290aEVsZW1lbnRzW1N5bWJvbC5pdGVyYXRvcl0oKTshKHQ9KHI9by5uZXh0KCkpLmRvbmUpO3Q9ITApe3ZhciBzPXIudmFsdWUsZj11KHRoaXMuJGVsLHMub3B0aW9ucy5lbCk7cy5zZXRTbW9vdGhFbGVtZW50KGYpLHMuc2V0QmVmb3JlVmFsdWVzKCl9fWNhdGNoKHQpe2U9ITAsbj10fWZpbmFsbHl7dHJ5e3R8fG51bGw9PW8ucmV0dXJufHxvLnJldHVybigpfWZpbmFsbHl7aWYoZSl0aHJvdyBufX19LHVwZGF0ZWQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCl7dmFyIGU9ITAsbj0hMSxyPXZvaWQgMDt0cnl7Zm9yKHZhciBvLHM9dC5fc21vb3RoRWxlbWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpOyEoZT0obz1zLm5leHQoKSkuZG9uZSk7ZT0hMCl7dmFyIGY9by52YWx1ZSxhPXUodC4kZWwsZi5vcHRpb25zLmVsKTtmLnNldFNtb290aEVsZW1lbnQoYSksZi5kb1Ntb290aFJlZmxvdygpfX1jYXRjaCh0KXtuPSEwLHI9dH1maW5hbGx5e3RyeXtlfHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKG4pdGhyb3cgcn19aSh0KX0pfX07ZnVuY3Rpb24gaSh0KXtmb3IodmFyIGU9dC5fc21vb3RoRWxlbWVudHMubGVuZ3RoO2UtLTspe3ZhciBuPXQuX3Ntb290aEVsZW1lbnRzW2VdO24uaXNSZW1vdmVkJiYobi5zdG9wVHJhbnNpdGlvbigpLHQuX3Ntb290aEVsZW1lbnRzLnNwbGljZShlLDEpKX19ZnVuY3Rpb24gdSh0LGUpe3JldHVybiF0fHx0IGluc3RhbmNlb2YgTm9kZSYmdC5ub2RlVHlwZT09PU5vZGUuQ09NTUVOVF9OT0RFP251bGw6bnVsbD09PWU/dDpmdW5jdGlvbih0LGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP3QubWF0Y2hlcyhlKT90OnQucXVlcnlTZWxlY3RvcihlKTplfSh0LGUpfXZhciBzPXtJTkFDVElWRTpcIklOQUNUSVZFXCIsQUNUSVZFOlwiQUNUSVZFXCJ9LGY9ZnVuY3Rpb24oKXtyZXR1cm57ZWw6bnVsbCxwcm9wZXJ0eTpcImhlaWdodFwiLHRyYW5zaXRpb25FdmVudDpudWxsLGhpZGVPdmVyZmxvdzohMCxkZWJ1ZzohMX19LGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUpeyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsdCk7dmFyIG49ZigpO09iamVjdC5hc3NpZ24obixlKTt2YXIgcj10aGlzLnBhcnNlUHJvcGVydHlPcHRpb24obi5wcm9wZXJ0eSk7bi50cmFuc2l0aW9ufHwobi50cmFuc2l0aW9uPXIubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiXCIuY29uY2F0KHQsXCIgLjVzXCIpfSkuam9pbihcIixcIikpO3ZhciBvPXskc21vb3RoRWw6bnVsbCxwcm9wZXJ0aWVzOnIsYmVmb3JlUmVjdDp7fSxzdGF0ZTpzLklOQUNUSVZFLGlzUmVtb3ZlZDohMX07T2JqZWN0LmFzc2lnbih0aGlzLHtvcHRpb25zOm59LG8pLHRoaXMuZW5kTGlzdGVuZXI9dGhpcy5lbmRMaXN0ZW5lci5iaW5kKHRoaXMpLHRoaXMuZGVidWc9dGhpcy5kZWJ1Zy5iaW5kKHRoaXMpfXJldHVybiBmdW5jdGlvbih0LGUsbil7ZSYmcih0LnByb3RvdHlwZSxlKSxuJiZyKHQsbil9KHQsW3trZXk6XCJzZXRTbW9vdGhFbGVtZW50XCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy4kc21vb3RoRWw9dH19LHtrZXk6XCJ0cmFuc2l0aW9uVG9cIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLnN0YXRlPXR9fSx7a2V5OlwicGFyc2VQcm9wZXJ0eU9wdGlvblwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P1t0XTpBcnJheS5pc0FycmF5KHQpP3Q6W119fSx7a2V5Olwic2V0QmVmb3JlVmFsdWVzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRzbW9vdGhFbDtpZih0aGlzLmJlZm9yZVJlY3Q9e30sdCl7dmFyIGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCl8fHt9LG49ZS50cmFuc2l0aW9uLHI9ZS5vdmVyZmxvd1gsbz1lLm92ZXJmbG93WTt0aGlzLmNvbXB1dGVkVHJhbnNpdGlvbj1uLHRoaXMub3ZlcmZsb3dYPXIsdGhpcy5vdmVyZmxvd1k9byx0aGlzLmJlZm9yZVJlY3Q9Yyh0KSx0aGlzLnN0YXRlPT09cy5BQ1RJVkUmJih0aGlzLnN0b3BUcmFuc2l0aW9uKCksdGhpcy5kZWJ1ZyhcIlRyYW5zaXRpb24gd2FzIGludGVycnVwdGVkLlwiKSl9fX0se2tleTpcImRpZFZhbHVlc0NoYW5nZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIG49dCxyPWU7aWYoMD09PU9iamVjdC5rZXlzKHQpLmxlbmd0aClyZXR1cm4hMTt2YXIgbz0hMCxpPSExLHU9dm9pZCAwO3RyeXtmb3IodmFyIHMsZj10aGlzLnByb3BlcnRpZXNbU3ltYm9sLml0ZXJhdG9yXSgpOyEobz0ocz1mLm5leHQoKSkuZG9uZSk7bz0hMCl7dmFyIGE9cy52YWx1ZTtpZihcInRyYW5zZm9ybVwiPT09YSYmKG4udG9wIT09ci50b3B8fG4ubGVmdCE9PXIubGVmdCkpcmV0dXJuITA7aWYoblthXSE9PXJbYV0pcmV0dXJuITB9fWNhdGNoKHQpe2k9ITAsdT10fWZpbmFsbHl7dHJ5e298fG51bGw9PWYucmV0dXJufHxmLnJldHVybigpfWZpbmFsbHl7aWYoaSl0aHJvdyB1fX1yZXR1cm4hMX19LHtrZXk6XCJkb1Ntb290aFJlZmxvd1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiZGF0YSB1cGRhdGVcIixlPXRoaXMuJHNtb290aEVsO2lmKCFlKXJldHVybiB0aGlzLmRlYnVnKFwiQ291bGQgbm90IGZpbmQgcmVnaXN0ZXJlZCBlbCB0byBwZXJmb3JtIGRvU21vb3RoUmVmbG93LlwiKSx2b2lkIHRoaXMudHJhbnNpdGlvblRvKHMuSU5BQ1RJVkUpO2lmKHRoaXMuc3RhdGUhPT1zLkFDVElWRSl7dmFyIG49dGhpcy5iZWZvcmVSZWN0LHI9dGhpcy5wcm9wZXJ0aWVzLG89dGhpcy5vcHRpb25zLGk9dGhpcy5vdmVyZmxvd1gsdT10aGlzLm92ZXJmbG93WSxmPXRoaXMuZGVidWc7dGhpcy50cmFuc2l0aW9uVG8ocy5BQ1RJVkUpLGYoXCJkb1Ntb290aFJlZmxvdyB0cmlnZ2VyZWQgYnk6XCIsXCJzdHJpbmdcIj09dHlwZW9mIHQ/dDp0LnRhcmdldCk7dmFyIGE9YyhlKTtpZighdGhpcy5kaWRWYWx1ZXNDaGFuZ2UobixhKSlyZXR1cm4gZihcIlByb3BlcnR5IHZhbHVlcyBkaWQgbm90IGNoYW5nZS5cIiksdm9pZCB0aGlzLnRyYW5zaXRpb25UbyhzLklOQUNUSVZFKTtmKFwiYmVmb3JlUmVjdFwiLG4pLGYoXCJhZnRlclJlY3RcIixhKSx0aGlzLnNhdmVPdmVyZmxvd1ZhbHVlcyhlLGksdSk7dmFyIGw9ITAscD0hMSx2PXZvaWQgMDt0cnl7Zm9yKHZhciBoLHk9cltTeW1ib2wuaXRlcmF0b3JdKCk7IShsPShoPXkubmV4dCgpKS5kb25lKTtsPSEwKXt2YXIgZD1oLnZhbHVlO2lmKFwidHJhbnNmb3JtXCI9PT1kKXt2YXIgbT1uLmxlZnQtYS5sZWZ0LGc9bi50b3AtYS50b3A7ZS5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUoXCIuY29uY2F0KG0sXCJweCwgXCIpLmNvbmNhdChnLFwicHgpXCIpfWVsc2UgZS5zdHlsZVtkXT1uW2RdK1wicHhcIn19Y2F0Y2godCl7cD0hMCx2PXR9ZmluYWxseXt0cnl7bHx8bnVsbD09eS5yZXR1cm58fHkucmV0dXJuKCl9ZmluYWxseXtpZihwKXRocm93IHZ9fWUub2Zmc2V0SGVpZ2h0LGUuc3R5bGUudHJhbnNpdGlvbj1bdGhpcy5jb21wdXRlZFRyYW5zaXRpb24sby50cmFuc2l0aW9uXS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHR9KS5qb2luKFwiLFwiKTt2YXIgYj0hMCxTPSExLHg9dm9pZCAwO3RyeXtmb3IodmFyIHcsRT1yW1N5bWJvbC5pdGVyYXRvcl0oKTshKGI9KHc9RS5uZXh0KCkpLmRvbmUpO2I9ITApe3ZhciBPPXcudmFsdWU7XCJ0cmFuc2Zvcm1cIj09PU8/ZS5zdHlsZS50cmFuc2Zvcm09XCJcIjplLnN0eWxlW09dPWFbT10rXCJweFwifX1jYXRjaCh0KXtTPSEwLHg9dH1maW5hbGx5e3RyeXtifHxudWxsPT1FLnJldHVybnx8RS5yZXR1cm4oKX1maW5hbGx5e2lmKFMpdGhyb3cgeH19fX19LHtrZXk6XCJlbmRMaXN0ZW5lclwiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuJHNtb290aEVsLG49dGhpcy5wcm9wZXJ0aWVzO2U9PT10LnRhcmdldD9uLmluY2x1ZGVzKHQucHJvcGVydHlOYW1lKSYmKHRoaXMuc3RvcFRyYW5zaXRpb24oKSx0aGlzLmhhc1JlZ2lzdGVyZWRFdmVudEVtaXR0ZXIoKSYmdGhpcy5zZXRCZWZvcmVWYWx1ZXMoKSk6dGhpcy5pc1JlZ2lzdGVyZWRFdmVudEVtaXR0ZXIoZSx0KSYmdGhpcy5kb1Ntb290aFJlZmxvdyh0KX19LHtrZXk6XCJoYXNSZWdpc3RlcmVkRXZlbnRFbWl0dGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMudHJhbnNpdGlvbkV2ZW50O3JldHVybiBudWxsIT09dCYmT2JqZWN0LmtleXModCkubGVuZ3RoPjB9fSx7a2V5OlwiaXNSZWdpc3RlcmVkRXZlbnRFbWl0dGVyXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXtpZighdGhpcy5oYXNSZWdpc3RlcmVkRXZlbnRFbWl0dGVyKCkpcmV0dXJuITE7dmFyIG49ZS50YXJnZXQscj10aGlzLm9wdGlvbnMudHJhbnNpdGlvbkV2ZW50LG89ci5zZWxlY3RvcixpPXIucHJvcGVydHlOYW1lO2lmKG51bGwhPWkmJmkhPT1lLnByb3BlcnR5TmFtZSlyZXR1cm4hMTtpZihudWxsIT1vJiYhbi5tYXRjaGVzKG8pKXJldHVybiExO2lmKC0xPT09dGhpcy5wcm9wZXJ0aWVzLmluZGV4T2YoXCJ0cmFuc2Zvcm1cIikpe3ZhciB1PSExLHM9ZS5jb21wb3NlZFBhdGg/ZS5jb21wb3NlZFBhdGgoKTpbXSxmPSEwLGE9ITEsYz12b2lkIDA7dHJ5e2Zvcih2YXIgbCxwPXNbU3ltYm9sLml0ZXJhdG9yXSgpOyEoZj0obD1wLm5leHQoKSkuZG9uZSk7Zj0hMCl7aWYodD09PWwudmFsdWUpe3U9ITA7YnJlYWt9fX1jYXRjaCh0KXthPSEwLGM9dH1maW5hbGx5e3RyeXtmfHxudWxsPT1wLnJldHVybnx8cC5yZXR1cm4oKX1maW5hbGx5e2lmKGEpdGhyb3cgY319aWYoIXUpcmV0dXJuITF9cmV0dXJuITB9fSx7a2V5Olwic2F2ZU92ZXJmbG93VmFsdWVzXCIsdmFsdWU6ZnVuY3Rpb24odCxlLG4pe3RoaXMub3B0aW9ucy5oaWRlT3ZlcmZsb3cmJih0aGlzLm92ZXJmbG93WD1lLHRoaXMub3ZlcmZsb3dZPW4sdC5zdHlsZS5vdmVyZmxvd1g9XCJoaWRkZW5cIix0LnN0eWxlLm92ZXJmbG93WT1cImhpZGRlblwiKX19LHtrZXk6XCJyZXN0b3JlT3ZlcmZsb3dWYWx1ZXNcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLm9wdGlvbnMsbj10aGlzLm92ZXJmbG93WCxyPXRoaXMub3ZlcmZsb3dZO2UuaGlkZU92ZXJmbG93JiYodC5zdHlsZS5vdmVyZmxvd1g9bix0LnN0eWxlLm92ZXJmbG93WT1yKX19LHtrZXk6XCJzdG9wVHJhbnNpdGlvblwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kc21vb3RoRWwsZT10aGlzLnByb3BlcnRpZXMsbj0hMCxyPSExLG89dm9pZCAwO3RyeXtmb3IodmFyIGksdT1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKG49KGk9dS5uZXh0KCkpLmRvbmUpO249ITApe3ZhciBmPWkudmFsdWU7dC5zdHlsZVtmXT1udWxsfX1jYXRjaCh0KXtyPSEwLG89dH1maW5hbGx5e3RyeXtufHxudWxsPT11LnJldHVybnx8dS5yZXR1cm4oKX1maW5hbGx5e2lmKHIpdGhyb3cgb319dGhpcy5yZXN0b3JlT3ZlcmZsb3dWYWx1ZXModCksdC5zdHlsZS50cmFuc2l0aW9uPW51bGwsdGhpcy50cmFuc2l0aW9uVG8ocy5JTkFDVElWRSl9fSx7a2V5Olwic2NoZWR1bGVSZW1vdmFsXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmlzUmVtb3ZlZD0hMH19LHtrZXk6XCJkZWJ1Z1wiLHZhbHVlOmZ1bmN0aW9uKCl7aWYodGhpcy5vcHRpb25zLmRlYnVnKXt2YXIgdD1bXCJWU1JfREVCVUc6XCJdLmNvbmNhdChBcnJheS5mcm9tKGFyZ3VtZW50cykpO2NvbnNvbGUubG9nLmFwcGx5KG51bGwsdCl9fX1dKSx0fSgpLGM9ZnVuY3Rpb24odCl7dC5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiO3ZhciBlPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1lLnRvcCxyPWUucmlnaHQsbz1lLmJvdHRvbSxpPWUubGVmdCx1PWUud2lkdGgscz1lLmhlaWdodCxmPWUueCxhPWUueTtyZXR1cm4gdC5zdHlsZS5vdmVyZmxvdz1udWxsLHt0b3A6bixyaWdodDpyLGJvdHRvbTpvLGxlZnQ6aSx3aWR0aDp1LGhlaWdodDpzLHg6Zix5OmF9fTtcInVuZGVmaW5lZFwiIT10eXBlb2YgRWxlbWVudCYmRWxlbWVudC5wcm90b3R5cGUmJiFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzJiYoRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcz1FbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3J8fEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3Rvcnx8RWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3J8fEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3J8fEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPSh0aGlzLmRvY3VtZW50fHx0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwodCksbj1lLmxlbmd0aDstLW4+PTAmJmUuaXRlbShuKSE9PXRoaXM7KTtyZXR1cm4gbj4tMX0pLGUuZGVmYXVsdD1vfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9big0NikoITApO24oMzMpKFN0cmluZyxcIlN0cmluZ1wiLGZ1bmN0aW9uKHQpe3RoaXMuX3Q9U3RyaW5nKHQpLHRoaXMuX2k9MH0sZnVuY3Rpb24oKXt2YXIgdCxlPXRoaXMuX3Qsbj10aGlzLl9pO3JldHVybiBuPj1lLmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9Oih0PXIoZSxuKSx0aGlzLl9pKz10Lmxlbmd0aCx7dmFsdWU6dCxkb25lOiExfSl9KX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjIpLG89bigxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLG4pe3ZhciBpLHUscz1TdHJpbmcobyhlKSksZj1yKG4pLGE9cy5sZW5ndGg7cmV0dXJuIGY8MHx8Zj49YT90P1wiXCI6dm9pZCAwOihpPXMuY2hhckNvZGVBdChmKSk8NTUyOTZ8fGk+NTYzMTl8fGYrMT09PWF8fCh1PXMuY2hhckNvZGVBdChmKzEpKTw1NjMyMHx8dT41NzM0Mz90P3MuY2hhckF0KGYpOmk6dD9zLnNsaWNlKGYsZisyKTp1LTU2MzIwKyhpLTU1Mjk2PDwxMCkrNjU1MzZ9fX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigzNiksbz1uKDEzKSxpPW4oMzApLHU9e307bigzKSh1LG4oMCkoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksdC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXt0LnByb3RvdHlwZT1yKHUse25leHQ6bygxLG4pfSksaSh0LGUrXCIgSXRlcmF0b3JcIil9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0KSxvPW4oMTIpLGk9bigxMCk7dC5leHBvcnRzPW4oOCk/T2JqZWN0LmRlZmluZVByb3BlcnRpZXM6ZnVuY3Rpb24odCxlKXtvKHQpO2Zvcih2YXIgbix1PWkoZSkscz11Lmxlbmd0aCxmPTA7cz5mOylyLmYodCxuPXVbZisrXSxlW25dKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIyKSxvPU1hdGgubWF4LGk9TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHQ9cih0KSk8MD9vKHQrZSwwKTppKHQsZSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxKS5kb2N1bWVudDt0LmV4cG9ydHM9ciYmci5kb2N1bWVudEVsZW1lbnR9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDYpLG89bigxNiksaT1uKDI3KShcIklFX1BST1RPXCIpLHU9T2JqZWN0LnByb3RvdHlwZTt0LmV4cG9ydHM9T2JqZWN0LmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0KXtyZXR1cm4gdD1vKHQpLHIodCxpKT90W2ldOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY29uc3RydWN0b3ImJnQgaW5zdGFuY2VvZiB0LmNvbnN0cnVjdG9yP3QuY29uc3RydWN0b3IucHJvdG90eXBlOnQgaW5zdGFuY2VvZiBPYmplY3Q/dTpudWxsfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMjQpLG89bigyKSxpPW4oMTYpLHU9big1NCkscz1uKDU1KSxmPW4oMjYpLGE9big1NiksYz1uKDU3KTtvKG8uUytvLkYqIW4oNTkpKGZ1bmN0aW9uKHQpe0FycmF5LmZyb20odCl9KSxcIkFycmF5XCIse2Zyb206ZnVuY3Rpb24odCl7dmFyIGUsbixvLGwscD1pKHQpLHY9XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcz90aGlzOkFycmF5LGg9YXJndW1lbnRzLmxlbmd0aCx5PWg+MT9hcmd1bWVudHNbMV06dm9pZCAwLGQ9dm9pZCAwIT09eSxtPTAsZz1jKHApO2lmKGQmJih5PXIoeSxoPjI/YXJndW1lbnRzWzJdOnZvaWQgMCwyKSksdm9pZCAwPT1nfHx2PT1BcnJheSYmcyhnKSlmb3Iobj1uZXcgdihlPWYocC5sZW5ndGgpKTtlPm07bSsrKWEobixtLGQ/eShwW21dLG0pOnBbbV0pO2Vsc2UgZm9yKGw9Zy5jYWxsKHApLG49bmV3IHY7IShvPWwubmV4dCgpKS5kb25lO20rKylhKG4sbSxkP3UobCx5LFtvLnZhbHVlLG1dLCEwKTpvLnZhbHVlKTtyZXR1cm4gbi5sZW5ndGg9bSxufX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuLG8pe3RyeXtyZXR1cm4gbz9lKHIobilbMF0sblsxXSk6ZShuKX1jYXRjaChlKXt2YXIgaT10LnJldHVybjt0aHJvdyB2b2lkIDAhPT1pJiZyKGkuY2FsbCh0KSksZX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxNSksbz1uKDApKFwiaXRlcmF0b3JcIiksaT1BcnJheS5wcm90b3R5cGU7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10JiYoci5BcnJheT09PXR8fGlbb109PT10KX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDQpLG89bigxMyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtlIGluIHQ/ci5mKHQsZSxvKDAsbikpOnRbZV09bn19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDU4KSxvPW4oMCkoXCJpdGVyYXRvclwiKSxpPW4oMTUpO3QuZXhwb3J0cz1uKDcpLmdldEl0ZXJhdG9yTWV0aG9kPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMCE9dClyZXR1cm4gdFtvXXx8dFtcIkBAaXRlcmF0b3JcIl18fGlbcih0KV19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyMCksbz1uKDApKFwidG9TdHJpbmdUYWdcIiksaT1cIkFyZ3VtZW50c1wiPT1yKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlLG4sdTtyZXR1cm4gdm9pZCAwPT09dD9cIlVuZGVmaW5lZFwiOm51bGw9PT10P1wiTnVsbFwiOlwic3RyaW5nXCI9PXR5cGVvZihuPWZ1bmN0aW9uKHQsZSl7dHJ5e3JldHVybiB0W2VdfWNhdGNoKHQpe319KGU9T2JqZWN0KHQpLG8pKT9uOmk/cihlKTpcIk9iamVjdFwiPT0odT1yKGUpKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5jYWxsZWU/XCJBcmd1bWVudHNcIjp1fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMCkoXCJpdGVyYXRvclwiKSxvPSExO3RyeXt2YXIgaT1bN11bcl0oKTtpLnJldHVybj1mdW5jdGlvbigpe289ITB9LEFycmF5LmZyb20oaSxmdW5jdGlvbigpe3Rocm93IDJ9KX1jYXRjaCh0KXt9dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7aWYoIWUmJiFvKXJldHVybiExO3ZhciBuPSExO3RyeXt2YXIgaT1bN10sdT1pW3JdKCk7dS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJue2RvbmU6bj0hMH19LGlbcl09ZnVuY3Rpb24oKXtyZXR1cm4gdX0sdChpKX1jYXRjaCh0KXt9cmV0dXJuIG59fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigyKSxvPW4oMzgpKCEwKTtyKHIuUCxcIkFycmF5XCIse2luY2x1ZGVzOmZ1bmN0aW9uKHQpe3JldHVybiBvKHRoaXMsdCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9fSksbigzMSkoXCJpbmNsdWRlc1wiKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMiksbz1uKDYyKTtyKHIuUCtyLkYqbig2NCkoXCJpbmNsdWRlc1wiKSxcIlN0cmluZ1wiLHtpbmNsdWRlczpmdW5jdGlvbih0KXtyZXR1cm4hIX5vKHRoaXMsdCxcImluY2x1ZGVzXCIpLmluZGV4T2YodCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDYzKSxvPW4oMTcpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7aWYocihlKSl0aHJvdyBUeXBlRXJyb3IoXCJTdHJpbmcjXCIrbitcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7cmV0dXJuIFN0cmluZyhvKHQpKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDUpLG89bigyMCksaT1uKDApKFwibWF0Y2hcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiByKHQpJiYodm9pZCAwIT09KGU9dFtpXSk/ISFlOlwiUmVnRXhwXCI9PW8odCkpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMCkoXCJtYXRjaFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9Ly4vO3RyeXtcIi8uL1wiW3RdKGUpfWNhdGNoKG4pe3RyeXtyZXR1cm4gZVtyXT0hMSwhXCIvLi9cIlt0XShlKX1jYXRjaCh0KXt9fXJldHVybiEwfX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm57dmFsdWU6ZSxkb25lOiEhdH19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxNiksbz1uKDEwKTtuKDY3KShcImtleXNcIixmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbyhyKHQpKX19KX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMiksbz1uKDcpLGk9big5KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgbj0oby5PYmplY3R8fHt9KVt0XXx8T2JqZWN0W3RdLHU9e307dVt0XT1lKG4pLHIoci5TK3IuRippKGZ1bmN0aW9uKCl7bigxKX0pLFwiT2JqZWN0XCIsdSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyKTtyKHIuUytyLkYsXCJPYmplY3RcIix7YXNzaWduOm4oNjkpfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDEwKSxvPW4oMzIpLGk9bigyMSksdT1uKDE2KSxzPW4oMjUpLGY9T2JqZWN0LmFzc2lnbjt0LmV4cG9ydHM9IWZ8fG4oOSkoZnVuY3Rpb24oKXt2YXIgdD17fSxlPXt9LG49U3ltYm9sKCkscj1cImFiY2RlZmdoaWprbG1ub3BxcnN0XCI7cmV0dXJuIHRbbl09NyxyLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24odCl7ZVt0XT10fSksNyE9Zih7fSx0KVtuXXx8T2JqZWN0LmtleXMoZih7fSxlKSkuam9pbihcIlwiKSE9cn0pP2Z1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPXUodCksZj1hcmd1bWVudHMubGVuZ3RoLGE9MSxjPW8uZixsPWkuZjtmPmE7KWZvcih2YXIgcCx2PXMoYXJndW1lbnRzW2ErK10pLGg9Yz9yKHYpLmNvbmNhdChjKHYpKTpyKHYpLHk9aC5sZW5ndGgsZD0wO3k+ZDspbC5jYWxsKHYscD1oW2QrK10pJiYobltwXT12W3BdKTtyZXR1cm4gbn06Zn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMiksbz1uKDcxKSg2KSxpPVwiZmluZEluZGV4XCIsdT0hMDtpIGluW10mJkFycmF5KDEpW2ldKGZ1bmN0aW9uKCl7dT0hMX0pLHIoci5QK3IuRip1LFwiQXJyYXlcIix7ZmluZEluZGV4OmZ1bmN0aW9uKHQpe3JldHVybiBvKHRoaXMsdCxhcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCl9fSksbigzMSkoaSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDI0KSxvPW4oMjUpLGk9bigxNiksdT1uKDI2KSxzPW4oNzIpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3ZhciBuPTE9PXQsZj0yPT10LGE9Mz09dCxjPTQ9PXQsbD02PT10LHA9NT09dHx8bCx2PWV8fHM7cmV0dXJuIGZ1bmN0aW9uKGUscyxoKXtmb3IodmFyIHksZCxtPWkoZSksZz1vKG0pLGI9cihzLGgsMyksUz11KGcubGVuZ3RoKSx4PTAsdz1uP3YoZSxTKTpmP3YoZSwwKTp2b2lkIDA7Uz54O3grKylpZigocHx8eCBpbiBnKSYmKGQ9Yih5PWdbeF0seCxtKSx0KSlpZihuKXdbeF09ZDtlbHNlIGlmKGQpc3dpdGNoKHQpe2Nhc2UgMzpyZXR1cm4hMDtjYXNlIDU6cmV0dXJuIHk7Y2FzZSA2OnJldHVybiB4O2Nhc2UgMjp3LnB1c2goeSl9ZWxzZSBpZihjKXJldHVybiExO3JldHVybiBsPy0xOmF8fGM/Yzp3fX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDczKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbmV3KHIodCkpKGUpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNSksbz1uKDQwKSxpPW4oMCkoXCJzcGVjaWVzXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4gbyh0KSYmKFwiZnVuY3Rpb25cIiE9dHlwZW9mKGU9dC5jb25zdHJ1Y3Rvcil8fGUhPT1BcnJheSYmIW8oZS5wcm90b3R5cGUpfHwoZT12b2lkIDApLHIoZSkmJm51bGw9PT0oZT1lW2ldKSYmKGU9dm9pZCAwKSksdm9pZCAwPT09ZT9BcnJheTplfX0sZnVuY3Rpb24odCxlLG4pe24oNDEpKFwiYXN5bmNJdGVyYXRvclwiKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMSksbz1uKDYpLGk9big4KSx1PW4oMikscz1uKDE5KSxmPW4oNzYpLktFWSxhPW4oOSksYz1uKDI4KSxsPW4oMzApLHA9bigxNCksdj1uKDApLGg9big0MikseT1uKDQxKSxkPW4oNzcpLG09big0MCksZz1uKDEyKSxiPW4oNSksUz1uKDExKSx4PW4oMjMpLHc9bigxMyksRT1uKDM2KSxPPW4oNzgpLGo9big3OSksXz1uKDQpLFQ9bigxMCksQT1qLmYsUD1fLmYsaz1PLmYsUj1yLlN5bWJvbCxMPXIuSlNPTixJPUwmJkwuc3RyaW5naWZ5LE09dihcIl9oaWRkZW5cIiksQz12KFwidG9QcmltaXRpdmVcIiksTj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxWPWMoXCJzeW1ib2wtcmVnaXN0cnlcIiksRj1jKFwic3ltYm9sc1wiKSwkPWMoXCJvcC1zeW1ib2xzXCIpLEQ9T2JqZWN0LnByb3RvdHlwZSxHPVwiZnVuY3Rpb25cIj09dHlwZW9mIFIsWT1yLlFPYmplY3QsQj0hWXx8IVkucHJvdG90eXBlfHwhWS5wcm90b3R5cGUuZmluZENoaWxkLFg9aSYmYShmdW5jdGlvbigpe3JldHVybiA3IT1FKFAoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBQKHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSk/ZnVuY3Rpb24odCxlLG4pe3ZhciByPUEoRCxlKTtyJiZkZWxldGUgRFtlXSxQKHQsZSxuKSxyJiZ0IT09RCYmUChELGUscil9OlAsSD1mdW5jdGlvbih0KXt2YXIgZT1GW3RdPUUoUi5wcm90b3R5cGUpO3JldHVybiBlLl9rPXQsZX0sVT1HJiZcInN5bWJvbFwiPT10eXBlb2YgUi5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBSfSxXPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdD09PUQmJlcoJCxlLG4pLGcodCksZT14KGUsITApLGcobiksbyhGLGUpPyhuLmVudW1lcmFibGU/KG8odCxNKSYmdFtNXVtlXSYmKHRbTV1bZV09ITEpLG49RShuLHtlbnVtZXJhYmxlOncoMCwhMSl9KSk6KG8odCxNKXx8UCh0LE0sdygxLHt9KSksdFtNXVtlXT0hMCksWCh0LGUsbikpOlAodCxlLG4pfSxxPWZ1bmN0aW9uKHQsZSl7Zyh0KTtmb3IodmFyIG4scj1kKGU9UyhlKSksbz0wLGk9ci5sZW5ndGg7aT5vOylXKHQsbj1yW28rK10sZVtuXSk7cmV0dXJuIHR9LHo9ZnVuY3Rpb24odCl7dmFyIGU9Ti5jYWxsKHRoaXMsdD14KHQsITApKTtyZXR1cm4hKHRoaXM9PT1EJiZvKEYsdCkmJiFvKCQsdCkpJiYoIShlfHwhbyh0aGlzLHQpfHwhbyhGLHQpfHxvKHRoaXMsTSkmJnRoaXNbTV1bdF0pfHxlKX0sSj1mdW5jdGlvbih0LGUpe2lmKHQ9Uyh0KSxlPXgoZSwhMCksdCE9PUR8fCFvKEYsZSl8fG8oJCxlKSl7dmFyIG49QSh0LGUpO3JldHVybiFufHwhbyhGLGUpfHxvKHQsTSkmJnRbTV1bZV18fChuLmVudW1lcmFibGU9ITApLG59fSxLPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuPWsoUyh0KSkscj1bXSxpPTA7bi5sZW5ndGg+aTspbyhGLGU9bltpKytdKXx8ZT09TXx8ZT09Znx8ci5wdXNoKGUpO3JldHVybiByfSxRPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuPXQ9PT1ELHI9ayhuPyQ6Uyh0KSksaT1bXSx1PTA7ci5sZW5ndGg+dTspIW8oRixlPXJbdSsrXSl8fG4mJiFvKEQsZSl8fGkucHVzaChGW2VdKTtyZXR1cm4gaX07R3x8KHMoKFI9ZnVuY3Rpb24oKXtpZih0aGlzIGluc3RhbmNlb2YgUil0aHJvdyBUeXBlRXJyb3IoXCJTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhXCIpO3ZhciB0PXAoYXJndW1lbnRzLmxlbmd0aD4wP2FyZ3VtZW50c1swXTp2b2lkIDApLGU9ZnVuY3Rpb24obil7dGhpcz09PUQmJmUuY2FsbCgkLG4pLG8odGhpcyxNKSYmbyh0aGlzW01dLHQpJiYodGhpc1tNXVt0XT0hMSksWCh0aGlzLHQsdygxLG4pKX07cmV0dXJuIGkmJkImJlgoRCx0LHtjb25maWd1cmFibGU6ITAsc2V0OmV9KSxIKHQpfSkucHJvdG90eXBlLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLl9rfSksai5mPUosXy5mPVcsbig0MykuZj1PLmY9SyxuKDIxKS5mPXosbigzMikuZj1RLGkmJiFuKDE4KSYmcyhELFwicHJvcGVydHlJc0VudW1lcmFibGVcIix6LCEwKSxoLmY9ZnVuY3Rpb24odCl7cmV0dXJuIEgodih0KSl9KSx1KHUuRyt1LlcrdS5GKiFHLHtTeW1ib2w6Un0pO2Zvcih2YXIgWj1cImhhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzXCIuc3BsaXQoXCIsXCIpLHR0PTA7Wi5sZW5ndGg+dHQ7KXYoWlt0dCsrXSk7Zm9yKHZhciBldD1UKHYuc3RvcmUpLG50PTA7ZXQubGVuZ3RoPm50Oyl5KGV0W250KytdKTt1KHUuUyt1LkYqIUcsXCJTeW1ib2xcIix7Zm9yOmZ1bmN0aW9uKHQpe3JldHVybiBvKFYsdCs9XCJcIik/Vlt0XTpWW3RdPVIodCl9LGtleUZvcjpmdW5jdGlvbih0KXtpZighVSh0KSl0aHJvdyBUeXBlRXJyb3IodCtcIiBpcyBub3QgYSBzeW1ib2whXCIpO2Zvcih2YXIgZSBpbiBWKWlmKFZbZV09PT10KXJldHVybiBlfSx1c2VTZXR0ZXI6ZnVuY3Rpb24oKXtCPSEwfSx1c2VTaW1wbGU6ZnVuY3Rpb24oKXtCPSExfX0pLHUodS5TK3UuRiohRyxcIk9iamVjdFwiLHtjcmVhdGU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09ZT9FKHQpOnEoRSh0KSxlKX0sZGVmaW5lUHJvcGVydHk6VyxkZWZpbmVQcm9wZXJ0aWVzOnEsZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOkosZ2V0T3duUHJvcGVydHlOYW1lczpLLGdldE93blByb3BlcnR5U3ltYm9sczpRfSksTCYmdSh1LlMrdS5GKighR3x8YShmdW5jdGlvbigpe3ZhciB0PVIoKTtyZXR1cm5cIltudWxsXVwiIT1JKFt0XSl8fFwie31cIiE9SSh7YTp0fSl8fFwie31cIiE9SShPYmplY3QodCkpfSkpLFwiSlNPTlwiLHtzdHJpbmdpZnk6ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG4scj1bdF0sbz0xO2FyZ3VtZW50cy5sZW5ndGg+bzspci5wdXNoKGFyZ3VtZW50c1tvKytdKTtpZihuPWU9clsxXSwoYihlKXx8dm9pZCAwIT09dCkmJiFVKHQpKXJldHVybiBtKGUpfHwoZT1mdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihlPW4uY2FsbCh0aGlzLHQsZSkpLCFVKGUpKXJldHVybiBlfSksclsxXT1lLEkuYXBwbHkoTCxyKX19KSxSLnByb3RvdHlwZVtDXXx8bigzKShSLnByb3RvdHlwZSxDLFIucHJvdG90eXBlLnZhbHVlT2YpLGwoUixcIlN5bWJvbFwiKSxsKE1hdGgsXCJNYXRoXCIsITApLGwoci5KU09OLFwiSlNPTlwiLCEwKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTQpKFwibWV0YVwiKSxvPW4oNSksaT1uKDYpLHU9big0KS5mLHM9MCxmPU9iamVjdC5pc0V4dGVuc2libGV8fGZ1bmN0aW9uKCl7cmV0dXJuITB9LGE9IW4oOSkoZnVuY3Rpb24oKXtyZXR1cm4gZihPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKX0pLGM9ZnVuY3Rpb24odCl7dSh0LHIse3ZhbHVlOntpOlwiT1wiKyArK3Msdzp7fX19KX0sbD10LmV4cG9ydHM9e0tFWTpyLE5FRUQ6ITEsZmFzdEtleTpmdW5jdGlvbih0LGUpe2lmKCFvKHQpKXJldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0P3Q6KFwic3RyaW5nXCI9PXR5cGVvZiB0P1wiU1wiOlwiUFwiKSt0O2lmKCFpKHQscikpe2lmKCFmKHQpKXJldHVyblwiRlwiO2lmKCFlKXJldHVyblwiRVwiO2ModCl9cmV0dXJuIHRbcl0uaX0sZ2V0V2VhazpmdW5jdGlvbih0LGUpe2lmKCFpKHQscikpe2lmKCFmKHQpKXJldHVybiEwO2lmKCFlKXJldHVybiExO2ModCl9cmV0dXJuIHRbcl0ud30sb25GcmVlemU6ZnVuY3Rpb24odCl7cmV0dXJuIGEmJmwuTkVFRCYmZih0KSYmIWkodCxyKSYmYyh0KSx0fX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEwKSxvPW4oMzIpLGk9bigyMSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXIodCksbj1vLmY7aWYobilmb3IodmFyIHUscz1uKHQpLGY9aS5mLGE9MDtzLmxlbmd0aD5hOylmLmNhbGwodCx1PXNbYSsrXSkmJmUucHVzaCh1KTtyZXR1cm4gZX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDExKSxvPW4oNDMpLmYsaT17fS50b1N0cmluZyx1PVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdyYmT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM/T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KTpbXTt0LmV4cG9ydHMuZj1mdW5jdGlvbih0KXtyZXR1cm4gdSYmXCJbb2JqZWN0IFdpbmRvd11cIj09aS5jYWxsKHQpP2Z1bmN0aW9uKHQpe3RyeXtyZXR1cm4gbyh0KX1jYXRjaCh0KXtyZXR1cm4gdS5zbGljZSgpfX0odCk6byhyKHQpKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIxKSxvPW4oMTMpLGk9bigxMSksdT1uKDIzKSxzPW4oNiksZj1uKDM0KSxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7ZS5mPW4oOCk/YTpmdW5jdGlvbih0LGUpe2lmKHQ9aSh0KSxlPXUoZSwhMCksZil0cnl7cmV0dXJuIGEodCxlKX1jYXRjaCh0KXt9aWYocyh0LGUpKXJldHVybiBvKCFyLmYuY2FsbCh0LGUpLHRbZV0pfX0sZnVuY3Rpb24odCxlLG4pe2Zvcih2YXIgcj1uKDM5KSxvPW4oMTApLGk9bigxOSksdT1uKDEpLHM9bigzKSxmPW4oMTUpLGE9bigwKSxjPWEoXCJpdGVyYXRvclwiKSxsPWEoXCJ0b1N0cmluZ1RhZ1wiKSxwPWYuQXJyYXksdj17Q1NTUnVsZUxpc3Q6ITAsQ1NTU3R5bGVEZWNsYXJhdGlvbjohMSxDU1NWYWx1ZUxpc3Q6ITEsQ2xpZW50UmVjdExpc3Q6ITEsRE9NUmVjdExpc3Q6ITEsRE9NU3RyaW5nTGlzdDohMSxET01Ub2tlbkxpc3Q6ITAsRGF0YVRyYW5zZmVySXRlbUxpc3Q6ITEsRmlsZUxpc3Q6ITEsSFRNTEFsbENvbGxlY3Rpb246ITEsSFRNTENvbGxlY3Rpb246ITEsSFRNTEZvcm1FbGVtZW50OiExLEhUTUxTZWxlY3RFbGVtZW50OiExLE1lZGlhTGlzdDohMCxNaW1lVHlwZUFycmF5OiExLE5hbWVkTm9kZU1hcDohMSxOb2RlTGlzdDohMCxQYWludFJlcXVlc3RMaXN0OiExLFBsdWdpbjohMSxQbHVnaW5BcnJheTohMSxTVkdMZW5ndGhMaXN0OiExLFNWR051bWJlckxpc3Q6ITEsU1ZHUGF0aFNlZ0xpc3Q6ITEsU1ZHUG9pbnRMaXN0OiExLFNWR1N0cmluZ0xpc3Q6ITEsU1ZHVHJhbnNmb3JtTGlzdDohMSxTb3VyY2VCdWZmZXJMaXN0OiExLFN0eWxlU2hlZXRMaXN0OiEwLFRleHRUcmFja0N1ZUxpc3Q6ITEsVGV4dFRyYWNrTGlzdDohMSxUb3VjaExpc3Q6ITF9LGg9byh2KSx5PTA7eTxoLmxlbmd0aDt5Kyspe3ZhciBkLG09aFt5XSxnPXZbbV0sYj11W21dLFM9YiYmYi5wcm90b3R5cGU7aWYoUyYmKFNbY118fHMoUyxjLHApLFNbbF18fHMoUyxsLG0pLGZbbV09cCxnKSlmb3IoZCBpbiByKVNbZF18fGkoUyxkLHJbZF0sITApfX1dKS5kZWZhdWx0fSk7IiwiaW1wb3J0IENhdGFsb2dEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvZm5hc3RpbC1yZWRlc2lnbi9zcmMvanMvY2F0YWxvZy1kcm9wZG93bi9jYXRhbG9nLWRyb3Bkb3duXCI7XG5pbXBvcnQgTW9iaWxlTWVudXNTeW5jIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9mbmFzdGlsLXJlZGVzaWduL3NyYy9qcy9jYXRhbG9nLWRyb3Bkb3duL21vYmlsZS1tZW51cy1zeW5jXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xuaW1wb3J0IHtkaXNhYmxlQm9keVNjcm9sbCwgZW5hYmxlQm9keVNjcm9sbH0gZnJvbSBcImJvZHktc2Nyb2xsLWxvY2tcIjtcblxuY29uc3QgeyBWdWUgfSA9IHdpbmRvdztcbmNvbnN0IG1lbnVWdWVJbnN0YW5jZSA9IG5ldyBWdWUoe1xuICByZW5kZXI6IChoKSA9PiBoKE1lbnUpLFxufSk7XG5jb25zdCBwb3BVcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubS1jYXRhbG9nLWRyb3Bkb3duYCk7XG5cbi8vIFNldHRpbmcgYWN0aW9ucyBmb3Igb3BlbmluZyAvIGNsb3NpbmcgYm9vdHN0cmFwIGRyb3Bkb3duXG5jb25zdCBjYXRhbG9nRHJvcGRvd24gPSBuZXcgQ2F0YWxvZ0Ryb3Bkb3duKFxuICBgLmpzLWNhdGFsb2ctbW9iaWxlLWRyb3Bkb3duLXdyYXBwZXJgLFxuICBgI2Ryb3Bkb3duTW9iaWxlTWVudUJ1dHRvbmAsXG4gICgpID0+IGRpc2FibGVCb2R5U2Nyb2xsKHBvcFVwRWxlbWVudCksXG4gICgpID0+IGVuYWJsZUJvZHlTY3JvbGwocG9wVXBFbGVtZW50KVxuKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgRE9NQ29udGVudExvYWRlZGAsICgpID0+IHtcbiAgY2F0YWxvZ0Ryb3Bkb3duLmluaXQoKTtcbiAgbWVudVZ1ZUluc3RhbmNlLiRtb3VudChgI3Z1ZS1uYXZpZ2F0aW9uYCk7XG5cbiAgLy8gQWRkcyBwb3AtdXAgbWVudSBvcGVuaW5ncyB3aGVuIHlvdSBjbGljayBvbiB0aGUgY2F0YWxvZyBzZWN0aW9uIG9uIHRoZSBob21lIHBhZ2VcbiAgbmV3IE1vYmlsZU1lbnVzU3luYyhcbiAgICBjYXRhbG9nRHJvcGRvd24sXG4gICAgbWVudVZ1ZUluc3RhbmNlLFxuICAgIGAuanMtbW9iaWxlLW1lbnUtb24tcGFnZWAsXG4gICAgYC5qcy1jYXRhbG9nLW1vYmlsZS1kcm9wZG93bi13cmFwcGVyYCxcbiAgKS5pbml0KCk7XG59KTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOGM4NTk2NSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjhjODU5NjUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjhjODU5NjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjhjODU5NjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjhjODU5NjUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjhjODU5NjUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4Yzg1OTY1JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db250YWN0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI0NDMwODImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29udGFjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db250YWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9sb2NhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjQ0MzA4MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjQ0MzA4MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjQ0MzA4MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29udGFjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNDQzMDgyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNDQzMDgyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Db250YWN0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnRhY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db250YWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29udGFjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNDQzMDgyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Hb0JhY2tCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxNDVhNzI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dvQmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dvQmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9sb2NhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3MTQ1YTcyNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MTQ1YTcyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MTQ1YTcyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR29CYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTQ1YTcyNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MTQ1YTcyNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvR29CYWNrQnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR29CYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hb0JhY2tCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dvQmFja0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzE0NWE3MjYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0l0ZW1JY29uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjIwNWQxOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JdGVtSWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0l0ZW1JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wcm9mbmFzdGlsL2xvY2FsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRiMjA1ZDE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRiMjA1ZDE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRiMjA1ZDE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JdGVtSWNvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGIyMDVkMTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGIyMDVkMTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1JY29uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSWNvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGIyMDVkMTgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2VzTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjcwZTM2ZjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFnZXNNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFnZXNNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wcm9mbmFzdGlsL2xvY2FsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI3MGUzNmYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI3MGUzNmYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI3MGUzNmYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlc01lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3MGUzNmYyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI3MGUzNmYyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9QYWdlc01lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlc01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VzTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZXNNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzBlMzZmMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvamVjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhOTk5NzM0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2plY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvamVjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZWE5OTk3MzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZWE5OTk3MzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZWE5OTk3MzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Byb2plY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYTk5OTczNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlYTk5OTczNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9qZWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvamVjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYTk5OTczNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU29jaWFsTGlua3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlN2NjYTEwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NvY2lhbExpbmtzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU29jaWFsTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGU3Y2NhMTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGU3Y2NhMTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGU3Y2NhMTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NvY2lhbExpbmtzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZTdjY2ExMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZTdjY2ExMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU29jaWFsTGlua3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tb2NpYWxMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29jaWFsTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lhbExpbmtzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZTdjY2ExMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWVudUl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg4ODZhM2Q0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1lbnVJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWVudUl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODg4NmEzZDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODg4NmEzZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODg4NmEzZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1lbnVJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ODg2YTNkNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4ODg2YTNkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU3VibWVudUl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtZW51SXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWVudUl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1lbnVJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ODg2YTNkNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlckJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzYzNzU3NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZTM2Mzc1NzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTM2Mzc1NzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTM2Mzc1NzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJCbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTM2Mzc1NzQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTM2Mzc1NzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1VzZXJCbG9jay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJCbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyQmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzNjM3NTc0JlwiIiwiY29uc3QgQk9EWV9PVkVSTEFZX0NMQVNTTkFNRSA9IGBtZW51LWlzLW9wZW5lZGA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbnRhaW5lclNlbGVjdG9yLFxuICAgIHRvZ2dsZXJTZWxlY3RvcixcbiAgICBvblNob3dDYWxsYmFjayA9ICgpID0+IHt9LFxuICAgIG9uSGlkZUNhbGxiYWNrID0gKCkgPT4ge31cbiAgKSB7XG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgIHRoaXMuX29wZW5CdXR0b25FbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdG9nZ2xlclNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9kcm9wZG93bkVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmpzLWNhdGFsb2ctZHJvcGRvd25gXG4gICAgKTtcbiAgICB0aGlzLl9vblNob3dDYWxsYmFjayA9IG9uU2hvd0NhbGxiYWNrO1xuICAgIHRoaXMuX29uSGlkZUNhbGxiYWNrID0gb25IaWRlQ2FsbGJhY2s7XG5cbiAgICB0aGlzLl9vblNob3cgPSB0aGlzLl9vblNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkhpZGUgPSB0aGlzLl9vbkhpZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9vblNob3coKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKEJPRFlfT1ZFUkxBWV9DTEFTU05BTUUpO1xuXG4gICAgdGhpcy5fb25TaG93Q2FsbGJhY2soKTtcbiAgfVxuXG4gIF9vbkhpZGUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJPRFlfT1ZFUkxBWV9DTEFTU05BTUUpO1xuXG4gICAgdGhpcy5fb25IaWRlQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLl9vcGVuQnV0dG9uRWxlbWVudC5jbGljaygpO1xuICB9XG5cbiAgX3NldEhhbmRsZXJzKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgc2hvd24uYnMuZHJvcGRvd25gLCB0aGlzLl9vblNob3cpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgaGlkZGVuLmJzLmRyb3Bkb3duYCwgdGhpcy5fb25IaWRlKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fc2V0SGFuZGxlcnMoKTtcblxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2JpbGVNZW51c1N5bmMge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNhdGFsb2dNZW51SW5zdGFuY2VcbiAgICogQHBhcmFtIHtvYmplY3R9IHZ1ZU1lbnVJbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb25QYWdlTWVudVNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3BVcE1lbnVTZWxlY3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoY2F0YWxvZ01lbnVJbnN0YW5jZSwgdnVlTWVudUluc3RhbmNlLCBvblBhZ2VNZW51U2VsZWN0b3IsIHBvcFVwTWVudVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fY2F0YWxvZ01lbnVJbnN0YW5jZSA9IGNhdGFsb2dNZW51SW5zdGFuY2U7XG4gICAgdGhpcy5fdnVlTWVudUluc3RhbmNlID0gdnVlTWVudUluc3RhbmNlO1xuXG4gICAgdGhpcy5fb25QYWdlTWVudUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9uUGFnZU1lbnVTZWxlY3Rvcik7XG4gICAgdGhpcy5fcG9wVXBNZW51RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wVXBNZW51U2VsZWN0b3IpO1xuXG4gICAgdGhpcy5fb25QYWdlTWVudUxpbmtFbGVtZW50cyA9IHRoaXMuX29uUGFnZU1lbnVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgLmpzLXN5bmMtd2l0aC1wb3B1cGBcbiAgICApO1xuXG4gICAgdGhpcy5fcG9wVXBUb2dnbGVyRWxlbWVudCA9IHRoaXMuX3BvcFVwTWVudUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbZGF0YS1icy10b2dnbGVdYFxuICAgICk7XG5cbiAgICB0aGlzLl9vbkxpbmtDbGljayA9IHRoaXMuX29uTGlua0NsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBfb3BlblBvcFVwTWVudSgpIHtcbiAgICB0aGlzLl9jYXRhbG9nTWVudUluc3RhbmNlLnRvZ2dsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHNlY3Rpb24gaW4gdGhlIHBvcHVwIGNhdGFsb2cgbWVudSBieSBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0U2VjdGlvbkluZGV4XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb3BlblNlY3Rpb24odGFyZ2V0U2VjdGlvbkluZGV4KSB7XG4gICAgY29uc3QgW3Z1ZU1lbnVDb21wb25lbnRdID0gdGhpcy5fdnVlTWVudUluc3RhbmNlLiRjaGlsZHJlbjtcbiAgICBjb25zdCBjYXRhbG9nU2VjdGlvbkluZGV4ID0gMDtcblxuICAgIC8vIG5hdmlnYXRlKFttYWluU2VjdGlvbkluZGV4LCBzdWJTZWN0aW9uSW5kZXgsIHN1YlN1YlNlY3Rpb25JbmRleCAuLi4uXSlcbiAgICB2dWVNZW51Q29tcG9uZW50Lm5hdmlnYXRlKFtjYXRhbG9nU2VjdGlvbkluZGV4LCB0YXJnZXRTZWN0aW9uSW5kZXhdKTtcbiAgfVxuXG4gIF9vbkxpbmtDbGljayhldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIE9wZW4gbWVudVxuICAgIHRoaXMuX29wZW5Qb3BVcE1lbnUoKTtcblxuICAgIC8vIE9wZW4gY2xpY2tlZCBzZWN0aW9uIGluIHBvcHVwbWVudVxuICAgIGNvbnN0IHRhcmdldFNlY3Rpb25JbmRleCA9IHBhcnNlSW50KGV2dC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgIHRoaXMuX29wZW5TZWN0aW9uKHRhcmdldFNlY3Rpb25JbmRleCk7XG4gIH1cblxuICBfc2V0SGFuZGxlcnMoKSB7XG4gICAgdGhpcy5fb25QYWdlTWVudUxpbmtFbGVtZW50cy5mb3JFYWNoKChsaW5rRWxlbWVudCkgPT5cbiAgICAgIGxpbmtFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdGhpcy5fb25MaW5rQ2xpY2spXG4gICAgKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fc2V0SGFuZGxlcnMoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==