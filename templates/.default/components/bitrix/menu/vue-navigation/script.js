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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RzLnZ1ZSIsIndlYnBhY2s6Ly8vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvR29CYWNrQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvSXRlbUljb24udnVlIiwid2VicGFjazovLy90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9QYWdlc01lbnUudnVlIiwid2VicGFjazovLy90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Qcm9qZWN0cy52dWUiLCJ3ZWJwYWNrOi8vL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZSIsIndlYnBhY2s6Ly8vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU3VibWVudUl0ZW0udnVlIiwid2VicGFjazovLy90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Vc2VyQmxvY2sudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib2R5LXNjcm9sbC1sb2NrL2xpYi9ib2R5U2Nyb2xsTG9jay5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT8wMTQ4Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RzLnZ1ZT8xYjBkIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0dvQmFja0J1dHRvbi52dWU/ZTQ5NiIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9JdGVtSWNvbi52dWU/NzNiNCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9QYWdlc01lbnUudnVlPzEzODQiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlPzdhYTciLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU29jaWFsTGlua3MudnVlPzdhMDgiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU3VibWVudUl0ZW0udnVlP2VhMmQiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvVXNlckJsb2NrLnZ1ZT83Nzg2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zbW9vdGgtcmVmbG93L2Rpc3QvdnVlLXNtb290aC1yZWZsb3cubWluLmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9BcHAudnVlPzk1M2UiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT84MzUwIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0NvbnRhY3RzLnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Db250YWN0cy52dWU/OTFjNSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Db250YWN0cy52dWU/MDk1YiIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Hb0JhY2tCdXR0b24udnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0dvQmFja0J1dHRvbi52dWU/ZDNjNSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Hb0JhY2tCdXR0b24udnVlPzU3NDEiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvSXRlbUljb24udnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1JY29uLnZ1ZT9lZmEyIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1JY29uLnZ1ZT9iYzFkIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1BhZ2VzTWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUGFnZXNNZW51LnZ1ZT81ZTA3Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1BhZ2VzTWVudS52dWU/YzA2OCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Qcm9qZWN0cy52dWUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlP2Y5M2YiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlP2I5MTYiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU29jaWFsTGlua3MudnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZT8xYzM0Iiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1NvY2lhbExpbmtzLnZ1ZT81ODJiIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1N1Ym1lbnVJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9TdWJtZW51SXRlbS52dWU/ZTAxMyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9TdWJtZW51SXRlbS52dWU/MzgxOCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Vc2VyQmxvY2sudnVlIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1VzZXJCbG9jay52dWU/ZTAzNCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Vc2VyQmxvY2sudnVlPzliYWUiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vc3JjL2pzL2NhdGFsb2ctZHJvcGRvd24vY2F0YWxvZy1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvcHJvZm5hc3RpbC1yZWRlc2lnbi9zcmMvanMvY2F0YWxvZy1kcm9wZG93bi9tb2JpbGUtbWVudXMtc3luYy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJWdWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZW51VnVlSW5zdGFuY2UiLCJyZW5kZXIiLCJoIiwiTWVudSIsInBvcFVwRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXRhbG9nRHJvcGRvd24iLCJDYXRhbG9nRHJvcGRvd24iLCJkaXNhYmxlQm9keVNjcm9sbCIsImVuYWJsZUJvZHlTY3JvbGwiLCJpbml0IiwiJG1vdW50IiwiQk9EWV9PVkVSTEFZX0NMQVNTTkFNRSIsImNvbnRhaW5lclNlbGVjdG9yIiwidG9nZ2xlclNlbGVjdG9yIiwib25TaG93Q2FsbGJhY2siLCJvbkhpZGVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJfY29udGFpbmVyRWxlbWVudCIsIl9vcGVuQnV0dG9uRWxlbWVudCIsIl9kcm9wZG93bkVsZW1lbnQiLCJfb25TaG93Q2FsbGJhY2siLCJfb25IaWRlQ2FsbGJhY2siLCJfb25TaG93IiwiYmluZCIsIl9vbkhpZGUiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY2xpY2siLCJfc2V0SGFuZGxlcnMiLCJNb2JpbGVNZW51c1N5bmMiLCJjYXRhbG9nTWVudUluc3RhbmNlIiwidnVlTWVudUluc3RhbmNlIiwib25QYWdlTWVudVNlbGVjdG9yIiwicG9wVXBNZW51U2VsZWN0b3IiLCJfY2F0YWxvZ01lbnVJbnN0YW5jZSIsIl92dWVNZW51SW5zdGFuY2UiLCJfb25QYWdlTWVudUVsZW1lbnQiLCJfcG9wVXBNZW51RWxlbWVudCIsIl9vblBhZ2VNZW51TGlua0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9wb3BVcFRvZ2dsZXJFbGVtZW50IiwiX29uTGlua0NsaWNrIiwidG9nZ2xlIiwidGFyZ2V0U2VjdGlvbkluZGV4IiwiJGNoaWxkcmVuIiwidnVlTWVudUNvbXBvbmVudCIsImNhdGFsb2dTZWN0aW9uSW5kZXgiLCJuYXZpZ2F0ZSIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiX29wZW5Qb3BVcE1lbnUiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJfb3BlblNlY3Rpb24iLCJmb3JFYWNoIiwibGlua0VsZW1lbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztR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QUNmLFdBQUthLG9CQUFMLENBQTBCUSxNQUExQjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztpQ0FDZUMsa0IsRUFBb0I7QUFBQSw4R0FDSixLQUFLUixnQkFBTCxDQUFzQlMsU0FEbEI7QUFBQSxVQUN4QkMsZ0JBRHdCOztBQUUvQixVQUFNQyxtQkFBbUIsR0FBRyxDQUE1QixDQUYrQixDQUkvQjs7QUFDQUQsc0JBQWdCLENBQUNFLFFBQWpCLENBQTBCLENBQUNELG1CQUFELEVBQXNCSCxrQkFBdEIsQ0FBMUI7QUFDRDs7O2lDQUVZSyxHLEVBQUs7QUFDaEJBLFNBQUcsQ0FBQ0MsY0FBSixHQURnQixDQUdoQjs7QUFDQSxXQUFLQyxjQUFMLEdBSmdCLENBTWhCOzs7QUFDQSxVQUFNUCxrQkFBa0IsR0FBR1EsUUFBUSxDQUFDSCxHQUFHLENBQUNJLGFBQUosQ0FBa0JDLE9BQWxCLENBQTBCQyxLQUEzQixDQUFuQzs7QUFDQSxXQUFLQyxZQUFMLENBQWtCWixrQkFBbEI7QUFDRDs7O21DQUVjO0FBQUE7O0FBQ2IsV0FBS0wsdUJBQUwsQ0FBNkJrQixPQUE3QixDQUFxQyxVQUFDQyxXQUFEO0FBQUEsZUFDbkNBLFdBQVcsQ0FBQzlELGdCQUFaLFVBQXNDLEtBQUksQ0FBQzhDLFlBQTNDLENBRG1DO0FBQUEsT0FBckM7QUFHRDs7OzJCQUVNO0FBQ0wsV0FBS2IsWUFBTDtBQUNEIiwiZmlsZSI6ImxvY2FsL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wcm9mbmFzdGlsL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9hcHAuanNcIik7XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1vYmlsZS1uYXZcIiBAY2xpY2suc3RvcD5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8dHJhbnNpdGlvbi1ncm91cFxuICAgICAgICAgIDpuYW1lPVwidHJhbnNpdGlvbk5hbWVcIlxuICAgICAgICAgIHRhZz1cIm5hdlwiXG4gICAgICAgICAgY2xhc3M9XCJtb2JpbGUtbmF2X19sZXZlbHMgbW9iaWxlLW1haW4tbWVudVwiXG4gICAgICAgICAgcmVmPVwibGV2ZWxzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtbmF2X19pbm5lciBwYi01XCJcbiAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICA6cmVmPVwiYGxldmVsLSR7Z2V0UGF0aE5hbWUoY3VycmVudExldmVsLnBhdGgpfWBcIlxuICAgICAgICAgICAgIDprZXk9XCJnZXRQYXRoTmFtZShjdXJyZW50TGV2ZWwucGF0aClcIj5cblxuICAgICAgICAgIDwhLS0g0JPQu9Cw0LLQvdC+0LUg0LzQtdC90Y4gKNCa0LDRgtCw0LvQvtCzLCDQkNC60YbQuNC4Li4uKS0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtbmF2X19sZXZlbCBtb2JpbGUtbmF2X19pdGVtIHAtMFwiXG4gICAgICAgICAgICAgICB2LWlmPVwiY3VycmVudExldmVsXCJcbiAgICAgICAgICAgICAgIDphcmlhLWxhYmVsbGVkYnk9XCJgbW9iaWxlLW5hdi1sZXZlbC1sYWJlbC0ke2dldFBhdGhOYW1lKGN1cnJlbnRMZXZlbC5wYXRoKX1gXCIgcm9sZT1cImdyb3VwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8IS0tINCf0L7QtNGA0LDQt9C00LXQu9GLINGC0LXQutGD0YnQtdCz0L4g0YDQsNC30LTQtdC70LAgLS0+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtb2JpbGUtbWFpbi1tZW51X19saXN0IGxpc3QtcmVzZXRcIj5cbiAgICAgICAgICAgICAgPCEtLSDQmtC90L7Qv9C60LAgwqvQndCw0LfQsNC0wrstLT5cbiAgICAgICAgICAgICAgPEdvQmFja0J1dHRvblxuICAgICAgICAgICAgICAgICAgdi1pZj1cImN1cnJlbnRMZXZlbERlcHRoID4gMFwiXG4gICAgICAgICAgICAgICAgICBAbmF2aWdhdGU9XCJuYXZpZ2F0ZShjdXJyZW50TGV2ZWwucGF0aC5zbGljZSgwLCBjdXJyZW50TGV2ZWxEZXB0aCAtIDEpKVwiXG4gICAgICAgICAgICAgICAgICA6cHJldlNlY3Rpb25OYW1lPVwibGV2ZWxzW2N1cnJlbnRMZXZlbERlcHRoIC0gMV0ubGFiZWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8IS0tINCf0YPQvdC60YIg0LzQtdC90Y4gLS0+XG4gICAgICAgICAgICAgIDxTdWJtZW51SXRlbVxuICAgICAgICAgICAgICAgICAgdi1mb3I9XCJpdGVtIGluIGN1cnJlbnRMZXZlbC5pdGVtc1wiXG4gICAgICAgICAgICAgICAgICBAbmF2aWdhdGU9XCJuYXZpZ2F0ZShpdGVtLnBhdGgpXCJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJpdGVtLnBhdGguam9pbigpXCJcbiAgICAgICAgICAgICAgICAgIDppdGVtPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICByZWY9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgIDpjdXJyZW50TGV2ZWxEZXB0aD1cImN1cnJlbnRMZXZlbERlcHRoXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tINCa0L7QvdGC0LDQutGC0Ysg0Lgg0YHQvtGG0YHQtdGC0LggLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZS1uYXZfX2l0ZW1cIiB2LWlmPVwiIWN1cnJlbnRMZXZlbERlcHRoXCI+XG4gICAgICAgICAgICA8Q29udGFjdHMvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSDQnNC10L3RjiDRgdGC0YDQsNC90LjRhiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9iaWxlLW5hdl9faXRlbVwiIHYtaWY9XCIhY3VycmVudExldmVsRGVwdGhcIj5cbiAgICAgICAgICAgIDxQYWdlc01lbnUvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90cmFuc2l0aW9uLWdyb3VwPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgc21vb3RoUmVmbG93IGZyb20gXCJ2dWUtc21vb3RoLXJlZmxvd1wiO1xuXG5pbXBvcnQgQ29udGFjdHMgZnJvbSBcIi4vQ29udGFjdHNcIjtcbmltcG9ydCBQYWdlc01lbnUgZnJvbSBcIi4vUGFnZXNNZW51XCI7XG5pbXBvcnQgU3VibWVudUl0ZW0gZnJvbSBcIi4vU3VibWVudUl0ZW1cIjtcbmltcG9ydCBVc2VyQmxvY2sgZnJvbSBcIi4vVXNlckJsb2NrXCI7XG5pbXBvcnQgR29CYWNrQnV0dG9uIGZyb20gXCIuL0dvQmFja0J1dHRvblwiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL1Byb2plY3RzXCI7XG5cbmNvbnN0IG1lbnVMaW5rcyA9IFtcbiAge1xuICAgIGxhYmVsOiBcItCa0LDRgtCw0LvQvtCzXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwi0KHQvNCw0YDRgtGE0L7QvdGLINC4INC/0LvQsNC90YjQtdGC0YtcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQodC80LDRgNGC0YTQvtC90YtcIixcbiAgICAgICAgICAgIHVybDogXCIjXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCf0LvQsNC90YjQtdGC0YtcIixcbiAgICAgICAgICAgIHVybDogXCIjXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcItCd0L7Rg9GC0LHRg9C60Lgg0Lgg0LrQvtC80L/RjNGO0YLQtdGA0YtcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQndC+0YPRgtCx0YPQutC4XCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCj0LvRjNGC0YDQsNCx0YPQutC4XCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCd0L7Rg9GC0LHRg9C60Lgt0YLRgNCw0L3RgdGE0L7RgNC80LXRgNGLXCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCc0L7QvdC+0LHQu9C+0LrQuFwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQodC40YHRgtC10LzQvdGL0LUg0LHQu9C+0LrQuFwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQnNC+0L3QuNGC0L7RgNGLXCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCg0LDQsdC+0YfQuNC1INGB0YLQsNC90YbQuNC4XCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCi0L7QvdC60LjQtSDQutC70LjQtdC90YLRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQoNC10YjQtdC90LjRjyDQtNC70Y8g0LPQtdC50LzQtdGA0L7QslwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcblxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCLQotCyINC4INCw0YPQtNC40L5cIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQkdGL0YLQvtCy0YvQtSDQotCSXCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCc0YPQu9GM0YLQuNC80LXQtNC40LAgKNCw0LrRg9GB0YLQuNC60LApXCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCf0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3Ri9C1INC00LjRgdC/0LvQtdC4XCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCg0LXRiNC10L3QuNGPINCS0JrQoVwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQmNC90YLQtdGA0LDQutGC0LjQstC90YvQtSDQvNC+0L3QuNGC0L7RgNGLXCIsXG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCLQpNC+0YLQviDQuCDQstC40LTQtdC+XCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KTQvtGC0L7QsNC/0L/QsNGA0LDRgtGLXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQntCx0YrQtdC60YLQuNCy0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCt0LrRiNC9LdC60LDQvNC10YDRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0JLQuNC00LXQvtC60LDQvNC10YDRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcItCh0LXRgtC10LLQvtC1INC4INGB0LXRgNCy0LXRgNC90L7QtSDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40LVcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQodC10YDQstC10YDRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KHQtdGC0LXQstC+0LUg0L7QsdC+0YDRg9C00L7QstCw0L3QuNC1XCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQodC40YHRgtC10LzRiyDRhdGA0LDQvdC10L3QuNGPINC00LDQvdC90YvRhVwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcItCg0LDQt9Cy0LvQtdGH0LXQvdC40Y8g0Lgg0LPQsNC00LbQtdGC0YtcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQo9C80L3Ri9C1INGH0LDRgdGLXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQmtCy0LDQtNGA0L7QutC+0L/RgtC10YDRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0JjQs9GA0L7QstGL0LUg0L/RgNC40YHRgtCw0LLQutC4XCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQmNCz0YDQvtCy0YvQtSDQvNCw0L3QuNC/0YPQu9GP0YLQvtGA0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCY0LPRgNGLXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQoNC10YjQtdC90LjRjyDQtNC70Y8g0LPQtdC50LzQtdGA0L7QslwiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0KPQvNC90YvQuSDQtNC+0LxcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCk0LjRgtC90LXRgS3RgtGA0LXQutC10YDRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcItCe0YTQuNGB0L3QvtC1INC+0LHQvtGA0YPQtNC+0LLQsNC90LjQtSDQuCDQv9C10YDQuNGE0LXRgNC40Y9cIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQn9GA0LjQvdGC0LXRgNGLIC8g0JzQpNCjLyDQodC60LDQvdC10YDRi1wiLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0JHRi9GC0L7QstCw0Y8g0YLQtdGF0L3QuNC60LBcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCh0YLQsNGG0LjQvtC90LDRgNC90LDRjyDRgtC10LvQtdGE0L7QvdC40Y9cIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCg0LDRgdGF0L7QtNC90YvQtSDQvNCw0YLQtdGA0LjQsNC70YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCLQkNC60YHQtdGB0YHRg9Cw0YDRi1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCn0LXRhdC70Ysg0LTQu9GPINGB0LzQsNGA0YLRhNC+0L3QvtCyXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQp9C10YXQu9GLINC00LvRjyDQv9C70LDQvdGI0LXRgtC+0LJcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCh0YPQvNC60Lgg0LTQu9GPINC90L7Rg9GC0YPQsdGD0LrQvtCyXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQmtCw0LHQtdC70Lgg0LTQu9GPINC/0LpcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCa0LDQsdC10LvQuCDQtNC70Y8g0L/Qu9Cw0L3RiNC10YLQvtCyXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQmtCw0LHQtdC70Lgg0LTQu9GPINGB0LzQsNGA0YLRhNC+0L3QvtCyXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwi0J/RgNC+0LPRgNCw0LzQvNC90L7QtSDQvtCx0LXRgdC/0LXRh9C10L3QuNC1XCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwi0J7Qv9C10YDQsNGG0LjQvtC90L3Ri9C1INGB0LjRgdGC0LXQvNGLXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCLQntGE0LjRgdC90YvQtSDQv9Cw0LrQtdGC0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCS0LjQtNC10L7RgNC10LTQsNC60YLQvtGA0YtcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcItCT0YDQsNGE0LjRh9C10YHQutC40LUg0L/QsNC60LXRgtGLXCIsXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcItCY0LfQsdGA0LDQvdC90L7QtVwiLFxuICAgIHVybDogXCIjXCJcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcItCh0YDQsNCy0L3QtdC90LjQtVwiLFxuICAgIHVybDogXCIjXCJcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcItCa0L7RgNC30LjQvdCwXCIsXG4gICAgdXJsOiBcIiNcIlxuICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbc21vb3RoUmVmbG93XSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZW51SXRlbXM6IG1lbnVMaW5rcyxcbiAgICAgIGN1cnJlbnRQb3NpdGlvbjogW10sXG4gICAgICBsZXZlbHM6IFtdLFxuICAgICAgY3VycmVudExldmVsOiBbXSxcbiAgICAgIHByZXZMZXZlbERlcHRoOiAwLFxuICAgICAgY3VycmVudExldmVsRGVwdGg6IDBcbiAgICB9O1xuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgdHJhbnNpdGlvbk5hbWUoKSB7XG4gICAgICByZXR1cm4gJ3NsaWRlLScgKyAodGhpcy5jdXJyZW50TGV2ZWxEZXB0aCA+IHRoaXMucHJldkxldmVsRGVwdGggPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG5hdmlnYXRlKHBhdGgpIHtcbiAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gcGF0aDtcbiAgICAgIHRoaXMucmVjYWxjdWxhdGVJdGVtcygpO1xuICAgIH0sXG5cbiAgICByZWNhbGN1bGF0ZUl0ZW1zKCkge1xuICAgICAgbGV0IGl0ZW1zID0gdGhpcy5tZW51SXRlbXM7XG4gICAgICBsZXQgbGV2ZWxzID0gW107XG5cbiAgICAgIGxldmVscy5wdXNoKHRoaXMuZ2V0TGV2ZWwoW10sIG51bGwsIGl0ZW1zKSk7XG5cbiAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uLmZvckVhY2goKGluZGV4LCBkZXB0aCkgPT4ge1xuICAgICAgICBjb25zdCBwYXRoID0gWy4uLnRoaXMuY3VycmVudFBvc2l0aW9uXS5zbGljZSgwLCBkZXB0aCArIDEpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGl0ZW1zW2luZGV4XSAmJiBpdGVtc1tpbmRleF0ubGFiZWwgfHwgbnVsbDtcbiAgICAgICAgaXRlbXMgPSBpdGVtc1tpbmRleF0gJiYgaXRlbXNbaW5kZXhdLml0ZW1zIHx8IFtdO1xuICAgICAgICBsZXZlbHMucHVzaCh0aGlzLmdldExldmVsKHBhdGgsIGxhYmVsLCBpdGVtcykpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubGV2ZWxzID0gbGV2ZWxzO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSBsZXZlbHNbbGV2ZWxzLmxlbmd0aCAtIDFdO1xuICAgICAgdGhpcy5wcmV2TGV2ZWxEZXB0aCA9IHRoaXMuY3VycmVudExldmVsRGVwdGg7XG4gICAgICB0aGlzLmN1cnJlbnRMZXZlbERlcHRoID0gbGV2ZWxzLmxlbmd0aCAtIDE7XG4gICAgfSxcblxuICAgIGdldExldmVsKHBhdGgsIGxhYmVsLCBpdGVtcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRoOiBbLi4ucGF0aCwgaW5kZXhdLFxuICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICAgICAgaGFzSXRlbXM6IGl0ZW0uaXRlbXMgJiYgaXRlbS5pdGVtcy5sZW5ndGggPiAwXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0UGF0aE5hbWUocGF0aCkge1xuICAgICAgaWYgKCFwYXRoIHx8IHBhdGgubGVuZ3RoIDwgMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFswLCAuLi5wYXRoXS5qb2luKCctJyk7XG4gICAgfSxcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMucmVjYWxjdWxhdGVJdGVtcygpO1xuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBDb250YWN0cywgUGFnZXNNZW51LCBTdWJtZW51SXRlbSwgVXNlckJsb2NrLCBHb0JhY2tCdXR0b24sIFByb2plY3RzXG4gIH0sXG59XG5cbjwvc2NyaXB0PlxuXG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtZW51LW1vYmlsZS1jb250YWN0cyBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtbW9iaWxlLWNvbnRhY3RzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwidGVsOjg4MTIzMTgzODM2XCJcbiAgICAgICAgIHRpdGxlPVwi0J/QvtC30LLQvtC90LjRgtGMINC90LDQvFwiXG4gICAgICAgICBjbGFzcz1cIm1lbnUtbW9iaWxlLWNvbnRhY3RzX19saW5rXCI+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbl9waG9uZVwiPjwvdXNlPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgOCAoODEyKSAzMTgtMzgtMzZcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1tb2JpbGUtY29udGFjdHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCJtYWlsVG86Y29ycG9yYXRlQG5iY29tLnJ1XCJcbiAgICAgICAgIHRpdGxlPVwi0J3QsNC/0LjRgdCw0YLRjCDQvdCw0Lwg0L3QsCBlbWFpbFwiXG4gICAgICAgICBjbGFzcz1cIm1lbnUtbW9iaWxlLWNvbnRhY3RzX19saW5rXCI+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+XG4gICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljb25fbGV0dGVyXCI+PC91c2U+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICBjb3Jwb3JhdGVAbmJjb20ucnVcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1tb2JpbGUtY29udGFjdHNfX2l0ZW1cIj5cbiAgICAgIDxTb2NpYWxMaW5rcy8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tIFwiLi9Tb2NpYWxMaW5rc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdDb250YWN0cycsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBTb2NpYWxMaW5rc1xuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxsaSBjbGFzcz1cIm1vYmlsZS1tYWluLW1lbnVfX2l0ZW0gbW9iaWxlLW1haW4tbWVudV9faXRlbV9tdXRlZFwiPlxuICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwibW9iaWxlLW1haW4tbWVudV9fbGlua1wiXG4gICAgICAgIEBjbGljaz1cIiRlbWl0KGBuYXZpZ2F0ZWApXCJcbiAgICAgICAgcmVmPVwiYmFja1wiXG4gICAgPlxuICAgICAgPEl0ZW1JY29uIDpuYW1lPVwiYNCd0LDQt9Cw0LRgXCIvPlxuXG4gICAgICAge3sgcHJldlNlY3Rpb25OYW1lID8gcHJldlNlY3Rpb25OYW1lIDogYNCd0LDQt9Cw0LRgIH19XG4gICAgPC9idXR0b24+XG4gIDwvbGk+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEl0ZW1JY29uIGZyb20gXCIuL0l0ZW1JY29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogYEdvQmFja0J1dHRvbmAsXG4gIHByb3BzOiB7XG4gICAgcHJldlNlY3Rpb25OYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgSXRlbUljb25cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJtb2JpbGUtbWFpbi1tZW51X19pY29uXCI+XG4gICAgPGltZyA6c3JjPVwic3JjID8gc3JjIDogYCR7U0lURV9URU1QTEFURV9QQVRIfS9pbWFnZXMvZGVtby9pcGhvbmUuc3ZnYFwiXG4gICAgICAgICB2LWlmPVwiY3VycmVudExldmVsRGVwdGhcIlxuICAgICAgICAgOmFsdD1cImDQmNC30L7QsdGA0LDQttC10L3QuNC1INGA0LDQt9C00LXQu9CwIMKrJHsgbmFtZSB9wrtgXCJcbiAgICAgICAgIGNsYXNzPVwibW9iaWxlLW1haW4tbWVudV9faWNvblwiXG4gICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICA8IS0tINCd0LAg0L/QtdGA0LLQvtC8INGD0YDQvtCy0L3QtSDQv9C+0LrQsNC30YvQstCw0LXQvCDRgdGC0LDRgtC40YfQtdGB0LrQuNC1IHN2ZyDQuNC60L7QvdC60LggLS0+XG4gICAgPHN2ZyB2LWVsc2Ugd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICA8dXNlIDp4bGluazpocmVmPVwiZ2V0SWNvbkZyb21MYWJlbChuYW1lKVwiPjwvdXNlPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5jb25zdCB7U0lURV9URU1QTEFURV9QQVRIfSA9IHdpbmRvdy5ieENvbnN0YW50cztcblxuY29uc3Qgc2VjdGlvbk5hbWVUb0ljb24gPSB7XG4gIFwi0JrQsNGC0LDQu9C+0LNcIjogXCJpY29uX2J1cmdlclwiLFxuICBcItCY0LfQsdGA0LDQvdC90L7QtVwiOiBcImljb25fbGlrZVwiLFxuICBcItCh0YDQsNCy0L3QtdC90LjQtVwiOiBcImljb25fY29tcGFyZVwiLFxuICBcItCa0L7RgNC30LjQvdCwXCI6IFwiaWNvbl9jYXJ0XCIsXG4gIFwi0J3QsNC30LDQtFwiOiBcImljb25fZ28tYmFja1wiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBgSXRlbUljb25gLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBTSVRFX1RFTVBMQVRFX1BBVEhcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjdXJyZW50TGV2ZWxEZXB0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgIH0sXG4gICAgc3JjOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEljb25Gcm9tTGFiZWwobGFiZWwpIHtcbiAgICAgIHJldHVybiBgIyR7c2VjdGlvbk5hbWVUb0ljb25bbGFiZWxdfWA7XG4gICAgfVxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8bmF2IHJvbGU9XCJuYXZpZ2F0aW9uXCIgY2xhc3M9XCJtb2JpbGUtcGFnZXMtbWVudVwiPlxuICAgIDxoNCBjbGFzcz1cIm1vYmlsZS1wYWdlcy1tZW51X190aXRsZVwiPlxuICAgICAg0J/QvtC60YPQv9Cw0YLQtdC70Y/QvFxuICAgIDwvaDQ+XG4gICAgPHVsIGNsYXNzPVwibW9iaWxlLXBhZ2VzLW1lbnVfX2xpc3QgbGlzdC1yZXNldFwiPlxuICAgICAgPGxpIGNsYXNzPVwibW9iaWxlLXBhZ2VzLW1lbnVfX2l0ZW1cIiB2LWZvcj1cIntuYW1lLCBsaW5rfSBpbiBwYWdlc1wiPlxuICAgICAgICA8YVxuICAgICAgICAgICAgOmhyZWY9XCJsaW5rXCJcbiAgICAgICAgICAgIDprZXk9XCJsaW5rXCJcbiAgICAgICAgICAgIGNsYXNzPVwibW9iaWxlLXBhZ2VzLW1lbnVfX2xpbmtcIlxuICAgICAgICAgICAgOnRpdGxlPVwiYNCf0LXRgNC10LnRgtC4INC6INGB0YLRgNCw0L3QuNGG0LUgJHtuYW1lfWBcIlxuICAgICAgICA+e3sgbmFtZSB9fTwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBgUGFnZXNNZW51YCxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQn9GA0L7Qs9GA0LDQvNC80LAg0LvQvtGP0LvRjNC90L7RgdGC0LggKE5CIENsdWIpYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQodC/0L7RgdC+0LEg0L7Qv9C70LDRgtGLYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQlNC+0YHRgtCw0LLQutCwYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQodCw0LzQvtCy0YvQstC+0LdgLFxuICAgICAgICAgIGxpbms6IGAvYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYNCb0LjQt9C40L3Qs2AsXG4gICAgICAgICAgbGluazogYC9gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBg0KHRgtGA0LDRhdC+0LLQsNC90LjQtWAsXG4gICAgICAgICAgbGluazogYC9gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBg0KJyYWRlLWluIEFwcGxlYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQodC10YDQstC40YHQvdGL0LUg0YbQtdC90YLRgNGLYCxcbiAgICAgICAgICBsaW5rOiBgL2BcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGDQl9Cw0LrQsNC30LDRgtGMINGB0LzQtdGC0YNgLFxuICAgICAgICAgIGxpbms6IGAvYFxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkbCBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxkdCBjbGFzcz1cImNvbC0xMiB0ZXh0LWNlbnRlciBtYi0zXCI+0J3QsNGI0Lgg0L/RgNC+0LXQutGC0Ys8L2R0PlxuICAgIDxkZCB2LWZvcj1cIntuYW1lLCBsb2dvU3JjfSBpbiBpdGVtc1wiIGNsYXNzPVwiY29sLTYgY29sLXNtIHRleHQtY2VudGVyIG1iLTRcIj5cbiAgICAgIDxpbWcgOnNyYz1cIlNJVEVfVEVNUExBVEVfUEFUSCArIGxvZ29TcmNcIlxuICAgICAgICAgICA6YWx0PVwiYNCb0L7Qs9C+0YLQuNC/INC60L7QvNC/0LDQvdC40Lggwqske25hbWV9wrtgXCJcbiAgICAgICAgICAgbG9hZGluZz1cImxhenlcIj5cbiAgICA8L2RkPlxuICA8L2RsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IHtTSVRFX1RFTVBMQVRFX1BBVEh9ID0gd2luZG93LmJ4Q29uc3RhbnRzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IGBQcm9qZWN0c2AsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNJVEVfVEVNUExBVEVfUEFUSCxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgaVBvcnRgLFxuICAgICAgICAgIGxvZ29TcmM6IGAvaW1hZ2VzL3Byb2plY3RzLWxvZ29zL2lwb3J0LWRhcmsuc3ZnYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGBOQkNvbWAsXG4gICAgICAgICAgbG9nb1NyYzogYC9pbWFnZXMvcHJvamVjdHMtbG9nb3MvbmItZGFyay5wbmdgLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYFNvbnkgQ2VudHJlYCxcbiAgICAgICAgICBsb2dvU3JjOiBgL2ltYWdlcy9wcm9qZWN0cy1sb2dvcy9zb255LWRhcmsuc3ZnYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGBTYW1zdW5nIFN0b3JlYCxcbiAgICAgICAgICBsb2dvU3JjOiBgL2ltYWdlcy9wcm9qZWN0cy1sb2dvcy9zYW1zdW5nLWRhcmsuc3ZnYCxcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGwgY2xhc3M9XCJzb2NpYWwgcm93IG1iLTBcIj5cbiAgICA8ZGQgY2xhc3M9XCJjb2wgbWItMFwiIHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiPlxuICAgICAgPGEgY2xhc3M9XCJzb2NpYWxfX2xpbmtcIlxuICAgICAgICAgOmhyZWY9XCJpdGVtLmxpbmtcIlxuICAgICAgICAgOnRpdGxlPVwiYNCf0LXRgNC10LnRgtC4INCyINC90LDRiCDCqyR7aXRlbS5uYW1lfcK7YFwiPlxuICAgICAgICA8aW1nIDpzcmM9XCJpdGVtLmljb25cIlxuICAgICAgICAgICAgIGNsYXNzPVwic29jaWFsX19pY29uXCJcbiAgICAgICAgICAgICA6YWx0PVwiYNCb0L7Qs9C+ICR7aXRlbS5uYW1lfWBcIlxuICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj5cbiAgICAgIDwvYT5cbiAgICA8L2RkPlxuICA8L2RsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IHtTSVRFX1RFTVBMQVRFX1BBVEh9ID0gd2luZG93LmJ4Q29uc3RhbnRzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgVGVsZWdyYW1gLFxuICAgICAgICAgIGxpbms6IGAvYCxcbiAgICAgICAgICBpY29uOiBgJHtTSVRFX1RFTVBMQVRFX1BBVEh9L2ltYWdlcy9zb2NpYWwvdGVsZWdyYW0uc3ZnYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGBXaGF0c2FwcGAsXG4gICAgICAgICAgbGluazogYC9gLFxuICAgICAgICAgIGljb246IGAke1NJVEVfVEVNUExBVEVfUEFUSH0vaW1hZ2VzL3NvY2lhbC93aGF0c2FwcC5zdmdgLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYFZpYmVyYCxcbiAgICAgICAgICBsaW5rOiBgL2AsXG4gICAgICAgICAgaWNvbjogYCR7U0lURV9URU1QTEFURV9QQVRIfS9pbWFnZXMvc29jaWFsL3ZpYmVyLnN2Z2AsXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwibW9iaWxlLW1haW4tbWVudV9faXRlbVwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICAnbW9iaWxlLW1haW4tbWVudV9faXRlbV9jYXRhbG9nJzogaXRlbS5sYWJlbCA9PT0gJ9Ca0LDRgtCw0LvQvtCzJyxcbiAgICAgICAgICAgICdtb2JpbGUtbWFpbi1tZW51X19pdGVtX3NhbGVzJzogaXRlbS5sYWJlbCA9PT0gJ9CQ0LrRhtC40LgnXG4gICAgICAgICAgfVwiPlxuXG4gICAgPCEtLVxuICAgICDQldGB0LvQuCDQtdGB0YLRjCDQv9C+0LTRgNCw0LfQtNC10LvRiyAtPiDQv9C+0LrQsNC30YvQstCw0LXQvCBidXR0b24sXG4gICAgINCV0YHQu9C4INC/0L7QtNGA0LDQt9C00LXQu9C+0LIg0L3QtdGCIC0+INC/0L7QutCw0LfRi9Cy0LDQtdC8INGB0YHRi9C70LrRg1xuICAgICAtLT5cbiAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIm1vYmlsZS1tYWluLW1lbnVfX2xpbmtcIlxuICAgICAgICBAY2xpY2s9XCIkZW1pdCgnbmF2aWdhdGUnKVwiXG4gICAgICAgIHJlZj1cImxpbmtcIlxuICAgICAgICB2LWlmPVwiaXRlbS5oYXNJdGVtc1wiXG4gICAgPlxuICAgICAgPEl0ZW1JY29uXG4gICAgICAgICAgOmN1cnJlbnRMZXZlbERlcHRoPVwiY3VycmVudExldmVsRGVwdGhcIlxuICAgICAgICAgIDpuYW1lPVwiaXRlbS5sYWJlbFwiXG4gICAgICAgICAgOnNyYz1cImBgXCJcbiAgICAgIC8+XG4gICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgPC9idXR0b24+XG5cbiAgICA8YVxuICAgICAgICBocmVmPVwiXCJcbiAgICAgICAgdi1lbHNlXG4gICAgICAgIDpocmVmPVwiaXRlbS51cmxcIlxuICAgICAgICBjbGFzcz1cIm1vYmlsZS1tYWluLW1lbnVfX2xpbmtcIlxuICAgID5cbiAgICAgIDxJdGVtSWNvblxuICAgICAgICAgIDpjdXJyZW50TGV2ZWxEZXB0aD1cImN1cnJlbnRMZXZlbERlcHRoXCJcbiAgICAgICAgICA6bmFtZT1cIml0ZW0ubGFiZWxcIlxuICAgICAgICAgIDpzcmM9XCJgYFwiXG4gICAgICAvPlxuICAgICAge3sgaXRlbS5sYWJlbCB9fVxuICAgIDwvYT5cblxuICA8L2xpPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBJdGVtSWNvbiBmcm9tIFwiLi9JdGVtSWNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IGBTdWJtZW51SXRlbWAsXG4gIHByb3BzOiBbYGl0ZW1gLCBgY3VycmVudExldmVsRGVwdGhgXSxcbiAgY29tcG9uZW50czoge1xuICAgIEl0ZW1JY29uXG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWVudS11c2VyLWJsb2NrXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm1lbnUtdXNlci1ibG9ja19faXRlbSBtZW51LXVzZXItYmxvY2tfX2l0ZW1fcGVyc29uYWxcIj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbl91c2VyXCI+PC91c2U+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAg0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm1lbnUtdXNlci1ibG9ja19faXRlbSBtZW51LXVzZXItYmxvY2tfX2l0ZW1fcmVnaXN0cmF0aW9uXCI+XG4gICAgICAgICAg0KDQtdCz0LjRgdGC0YDQsNGG0LjRj1xuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgdGV4dC1jZW50ZXIgYm9yZGVyLWVuZCBib3JkZXItdG9wXCI+XG4gICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm1lbnUtdXNlci1ibG9ja19faXRlbSBtZW51LXVzZXItYmxvY2tfX2l0ZW1fb3JkZXItbGlzdFwiPlxuICAgICAgICAgINCc0L7QuCDQt9Cw0LrQsNC30YtcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgdGV4dC1jZW50ZXIgYm9yZGVyLXRvcFwiPlxuICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJtZW51LXVzZXItYmxvY2tfX2l0ZW0gbWVudS11c2VyLWJsb2NrX19pdGVtX2JvbnVzZXNcIj5cbiAgICAgICAgICAxMDAg0LHQsNC70LvQvtCyXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbn1cbjwvc2NyaXB0PlxuIiwiZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbi8vIE9sZGVyIGJyb3dzZXJzIGRvbid0IHN1cHBvcnQgZXZlbnQgb3B0aW9ucywgZmVhdHVyZSBkZXRlY3QgaXQuXG5cbi8vIEFkb3B0ZWQgYW5kIG1vZGlmaWVkIHNvbHV0aW9uIGZyb20gQm9oZGFuIERpZHVraCAoMjAxNylcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxNTk0OTk3L2lvcy0xMC1zYWZhcmktcHJldmVudC1zY3JvbGxpbmctYmVoaW5kLWEtZml4ZWQtb3ZlcmxheS1hbmQtbWFpbnRhaW4tc2Nyb2xsLXBvc2lcblxudmFyIGhhc1Bhc3NpdmVFdmVudHMgPSBmYWxzZTtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgcGFzc2l2ZVRlc3RPcHRpb25zID0ge1xuICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgaGFzUGFzc2l2ZUV2ZW50cyA9IHRydWU7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgcGFzc2l2ZVRlc3RPcHRpb25zKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgcGFzc2l2ZVRlc3RPcHRpb25zKTtcbn1cblxudmFyIGlzSW9zRGV2aWNlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtICYmICgvaVAoYWR8aG9uZXxvZCkvLnRlc3Qod2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSkgfHwgd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJyAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSk7XG5cblxudmFyIGxvY2tzID0gW107XG52YXIgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG52YXIgaW5pdGlhbENsaWVudFkgPSAtMTtcbnZhciBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPSB2b2lkIDA7XG52YXIgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ID0gdm9pZCAwO1xuXG4vLyByZXR1cm5zIHRydWUgaWYgYGVsYCBzaG91bGQgYmUgYWxsb3dlZCB0byByZWNlaXZlIHRvdWNobW92ZSBldmVudHMuXG52YXIgYWxsb3dUb3VjaE1vdmUgPSBmdW5jdGlvbiBhbGxvd1RvdWNoTW92ZShlbCkge1xuICByZXR1cm4gbG9ja3Muc29tZShmdW5jdGlvbiAobG9jaykge1xuICAgIGlmIChsb2NrLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmUgJiYgbG9jay5vcHRpb25zLmFsbG93VG91Y2hNb3ZlKGVsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn07XG5cbnZhciBwcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KHJhd0V2ZW50KSB7XG4gIHZhciBlID0gcmF3RXZlbnQgfHwgd2luZG93LmV2ZW50O1xuXG4gIC8vIEZvciB0aGUgY2FzZSB3aGVyZWJ5IGNvbnN1bWVycyBhZGRzIGEgdG91Y2htb3ZlIGV2ZW50IGxpc3RlbmVyIHRvIGRvY3VtZW50LlxuICAvLyBSZWNhbGwgdGhhdCB3ZSBkbyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgeyBwYXNzaXZlOiBmYWxzZSB9KVxuICAvLyBpbiBkaXNhYmxlQm9keVNjcm9sbCAtIHNvIGlmIHdlIHByb3ZpZGUgdGhpcyBvcHBvcnR1bml0eSB0byBhbGxvd1RvdWNoTW92ZSwgdGhlblxuICAvLyB0aGUgdG91Y2htb3ZlIGV2ZW50IG9uIGRvY3VtZW50IHdpbGwgYnJlYWsuXG4gIGlmIChhbGxvd1RvdWNoTW92ZShlLnRhcmdldCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIERvIG5vdCBwcmV2ZW50IGlmIHRoZSBldmVudCBoYXMgbW9yZSB0aGFuIG9uZSB0b3VjaCAodXN1YWxseSBtZWFuaW5nIHRoaXMgaXMgYSBtdWx0aSB0b3VjaCBnZXN0dXJlIGxpa2UgcGluY2ggdG8gem9vbSkuXG4gIGlmIChlLnRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgc2V0T3ZlcmZsb3dIaWRkZW4gPSBmdW5jdGlvbiBzZXRPdmVyZmxvd0hpZGRlbihvcHRpb25zKSB7XG4gIC8vIElmIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCBpcyBhbHJlYWR5IHNldCwgZG9uJ3Qgc2V0IGl0IGFnYWluLlxuICBpZiAocHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgX3Jlc2VydmVTY3JvbGxCYXJHYXAgPSAhIW9wdGlvbnMgJiYgb3B0aW9ucy5yZXNlcnZlU2Nyb2xsQmFyR2FwID09PSB0cnVlO1xuICAgIHZhciBzY3JvbGxCYXJHYXAgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIGlmIChfcmVzZXJ2ZVNjcm9sbEJhckdhcCAmJiBzY3JvbGxCYXJHYXAgPiAwKSB7XG4gICAgICBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyR2FwICsgJ3B4JztcbiAgICB9XG4gIH1cblxuICAvLyBJZiBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgaXMgYWxyZWFkeSBzZXQsIGRvbid0IHNldCBpdCBhZ2Fpbi5cbiAgaWYgKHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cbn07XG5cbnZhciByZXN0b3JlT3ZlcmZsb3dTZXR0aW5nID0gZnVuY3Rpb24gcmVzdG9yZU92ZXJmbG93U2V0dGluZygpIHtcbiAgaWYgKHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQ7XG5cbiAgICAvLyBSZXN0b3JlIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCB0byB1bmRlZmluZWQgc28gc2V0T3ZlcmZsb3dIaWRkZW4ga25vd3MgaXRcbiAgICAvLyBjYW4gYmUgc2V0IGFnYWluLlxuICAgIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmc7XG5cbiAgICAvLyBSZXN0b3JlIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyB0byB1bmRlZmluZWRcbiAgICAvLyBzbyBzZXRPdmVyZmxvd0hpZGRlbiBrbm93cyBpdCBjYW4gYmUgc2V0IGFnYWluLlxuICAgIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyA9IHVuZGVmaW5lZDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvc2Nyb2xsSGVpZ2h0I1Byb2JsZW1zX2FuZF9zb2x1dGlvbnNcbnZhciBpc1RhcmdldEVsZW1lbnRUb3RhbGx5U2Nyb2xsZWQgPSBmdW5jdGlvbiBpc1RhcmdldEVsZW1lbnRUb3RhbGx5U2Nyb2xsZWQodGFyZ2V0RWxlbWVudCkge1xuICByZXR1cm4gdGFyZ2V0RWxlbWVudCA/IHRhcmdldEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gdGFyZ2V0RWxlbWVudC5zY3JvbGxUb3AgPD0gdGFyZ2V0RWxlbWVudC5jbGllbnRIZWlnaHQgOiBmYWxzZTtcbn07XG5cbnZhciBoYW5kbGVTY3JvbGwgPSBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgLSBpbml0aWFsQ2xpZW50WTtcblxuICBpZiAoYWxsb3dUb3VjaE1vdmUoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0YXJnZXRFbGVtZW50ICYmIHRhcmdldEVsZW1lbnQuc2Nyb2xsVG9wID09PSAwICYmIGNsaWVudFkgPiAwKSB7XG4gICAgLy8gZWxlbWVudCBpcyBhdCB0aGUgdG9wIG9mIGl0cyBzY3JvbGwuXG4gICAgcmV0dXJuIHByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgfVxuXG4gIGlmIChpc1RhcmdldEVsZW1lbnRUb3RhbGx5U2Nyb2xsZWQodGFyZ2V0RWxlbWVudCkgJiYgY2xpZW50WSA8IDApIHtcbiAgICAvLyBlbGVtZW50IGlzIGF0IHRoZSBib3R0b20gb2YgaXRzIHNjcm9sbC5cbiAgICByZXR1cm4gcHJldmVudERlZmF1bHQoZXZlbnQpO1xuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IHZhciBkaXNhYmxlQm9keVNjcm9sbCA9IGZ1bmN0aW9uIGRpc2FibGVCb2R5U2Nyb2xsKHRhcmdldEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgLy8gdGFyZ2V0RWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkXG4gIGlmICghdGFyZ2V0RWxlbWVudCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignZGlzYWJsZUJvZHlTY3JvbGwgdW5zdWNjZXNzZnVsIC0gdGFyZ2V0RWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY2FsbGluZyBkaXNhYmxlQm9keVNjcm9sbCBvbiBJT1MgZGV2aWNlcy4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBkaXNhYmxlQm9keVNjcm9sbCBtdXN0IG5vdCBoYXZlIGJlZW4gY2FsbGVkIG9uIHRoaXMgdGFyZ2V0RWxlbWVudCBiZWZvcmVcbiAgaWYgKGxvY2tzLnNvbWUoZnVuY3Rpb24gKGxvY2spIHtcbiAgICByZXR1cm4gbG9jay50YXJnZXRFbGVtZW50ID09PSB0YXJnZXRFbGVtZW50O1xuICB9KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBsb2NrID0ge1xuICAgIHRhcmdldEVsZW1lbnQ6IHRhcmdldEVsZW1lbnQsXG4gICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fVxuICB9O1xuXG4gIGxvY2tzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShsb2NrcyksIFtsb2NrXSk7XG5cbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBkZXRlY3Qgc2luZ2xlIHRvdWNoLlxuICAgICAgICBpbml0aWFsQ2xpZW50WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBkZXRlY3Qgc2luZ2xlIHRvdWNoLlxuICAgICAgICBoYW5kbGVTY3JvbGwoZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWRvY3VtZW50TGlzdGVuZXJBZGRlZCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIGhhc1Bhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB1bmRlZmluZWQpO1xuICAgICAgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2V0T3ZlcmZsb3dIaWRkZW4ob3B0aW9ucyk7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MgPSBmdW5jdGlvbiBjbGVhckFsbEJvZHlTY3JvbGxMb2NrcygpIHtcbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgLy8gQ2xlYXIgYWxsIGxvY2tzIG9udG91Y2hzdGFydC9vbnRvdWNobW92ZSBoYW5kbGVycywgYW5kIHRoZSByZWZlcmVuY2VzLlxuICAgIGxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGxvY2spIHtcbiAgICAgIGxvY2sudGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQgPSBudWxsO1xuICAgICAgbG9jay50YXJnZXRFbGVtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGlmIChkb2N1bWVudExpc3RlbmVyQWRkZWQpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCBoYXNQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogdW5kZWZpbmVkKTtcbiAgICAgIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGluaXRpYWwgY2xpZW50WS5cbiAgICBpbml0aWFsQ2xpZW50WSA9IC0xO1xuICB9IGVsc2Uge1xuICAgIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcoKTtcbiAgfVxuXG4gIGxvY2tzID0gW107XG59O1xuXG5leHBvcnQgdmFyIGVuYWJsZUJvZHlTY3JvbGwgPSBmdW5jdGlvbiBlbmFibGVCb2R5U2Nyb2xsKHRhcmdldEVsZW1lbnQpIHtcbiAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdlbmFibGVCb2R5U2Nyb2xsIHVuc3VjY2Vzc2Z1bCAtIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNhbGxpbmcgZW5hYmxlQm9keVNjcm9sbCBvbiBJT1MgZGV2aWNlcy4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsb2NrcyA9IGxvY2tzLmZpbHRlcihmdW5jdGlvbiAobG9jaykge1xuICAgIHJldHVybiBsb2NrLnRhcmdldEVsZW1lbnQgIT09IHRhcmdldEVsZW1lbnQ7XG4gIH0pO1xuXG4gIGlmIChpc0lvc0RldmljZSkge1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaHN0YXJ0ID0gbnVsbDtcbiAgICB0YXJnZXRFbGVtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcblxuICAgIGlmIChkb2N1bWVudExpc3RlbmVyQWRkZWQgJiYgbG9ja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgaGFzUGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IHVuZGVmaW5lZCk7XG4gICAgICBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWxvY2tzLmxlbmd0aCkge1xuICAgIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcoKTtcbiAgfVxufTtcblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1uYXZcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uLWdyb3VwXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJsZXZlbHNcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW5hdl9fbGV2ZWxzIG1vYmlsZS1tYWluLW1lbnVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogX3ZtLnRyYW5zaXRpb25OYW1lLCB0YWc6IFwibmF2XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IF92bS5nZXRQYXRoTmFtZShfdm0uY3VycmVudExldmVsLnBhdGgpLFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImxldmVsLVwiICsgX3ZtLmdldFBhdGhOYW1lKF92bS5jdXJyZW50TGV2ZWwucGF0aCksXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtbmF2X19pbm5lciBwYi01XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0YWJpbmRleDogXCItMVwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50TGV2ZWxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1uYXZfX2xldmVsIG1vYmlsZS1uYXZfX2l0ZW0gcC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9iaWxlLW5hdi1sZXZlbC1sYWJlbC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGF0aE5hbWUoX3ZtLmN1cnJlbnRMZXZlbC5wYXRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcImdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2xpc3QgbGlzdC1yZXNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudExldmVsRGVwdGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJHb0JhY2tCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNlY3Rpb25OYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sZXZlbHNbX3ZtLmN1cnJlbnRMZXZlbERlcHRoIC0gMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmF2aWdhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudExldmVsLnBhdGguc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50TGV2ZWxEZXB0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uY3VycmVudExldmVsLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIlN1Ym1lbnVJdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW0ucGF0aC5qb2luKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXZlbERlcHRoOiBfdm0uY3VycmVudExldmVsRGVwdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubmF2aWdhdGUoaXRlbS5wYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5jdXJyZW50TGV2ZWxEZXB0aFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW5hdl9faXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJDb250YWN0c1wiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICFfdm0uY3VycmVudExldmVsRGVwdGhcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1uYXZfX2l0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiUGFnZXNNZW51XCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS1tb2JpbGUtY29udGFjdHMgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lbnUtbW9iaWxlLWNvbnRhY3RzX19pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZW51LW1vYmlsZS1jb250YWN0c19fbGlua1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJ0ZWw6ODgxMjMxODM4MzZcIiwgdGl0bGU6IFwi0J/QvtC30LLQvtC90LjRgtGMINC90LDQvFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwic3ZnXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidXNlXCIsIHsgYXR0cnM6IHsgXCJ4bGluazpocmVmXCI6IFwiI2ljb25fcGhvbmVcIiB9IH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIDggKDgxMikgMzE4LTM4LTM2XFxuICAgIFwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZW51LW1vYmlsZS1jb250YWN0c19faXRlbVwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS1tb2JpbGUtY29udGFjdHNfX2xpbmtcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhyZWY6IFwibWFpbFRvOmNvcnBvcmF0ZUBuYmNvbS5ydVwiLFxuICAgICAgICAgICAgICB0aXRsZTogXCLQndCw0L/QuNGB0LDRgtGMINC90LDQvCDQvdCwIGVtYWlsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwic3ZnXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidXNlXCIsIHsgYXR0cnM6IHsgXCJ4bGluazpocmVmXCI6IFwiI2ljb25fbGV0dGVyXCIgfSB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBjb3Jwb3JhdGVAbmJjb20ucnVcXG4gICAgXCIpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtZW51LW1vYmlsZS1jb250YWN0c19faXRlbVwiIH0sXG4gICAgICAgIFtfYyhcIlNvY2lhbExpbmtzXCIpXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJsaVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW1haW4tbWVudV9faXRlbSBtb2JpbGUtbWFpbi1tZW51X19pdGVtX211dGVkXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJiYWNrXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW1haW4tbWVudV9fbGlua1wiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwibmF2aWdhdGVcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkl0ZW1JY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCLQndCw0LfQsNC0XCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcblxcbiAgICAgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByZXZTZWN0aW9uTmFtZSA/IF92bS5wcmV2U2VjdGlvbk5hbWUgOiBcItCd0LDQt9Cw0LRcIikgK1xuICAgICAgICAgICAgICBcIlxcbiAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW1haW4tbWVudV9faWNvblwiIH0sIFtcbiAgICBfdm0uY3VycmVudExldmVsRGVwdGhcbiAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2ljb25cIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgc3JjOiBfdm0uc3JjXG4gICAgICAgICAgICAgID8gX3ZtLnNyY1xuICAgICAgICAgICAgICA6IF92bS5TSVRFX1RFTVBMQVRFX1BBVEggKyBcIi9pbWFnZXMvZGVtby9pcGhvbmUuc3ZnXCIsXG4gICAgICAgICAgICBhbHQ6IFwi0JjQt9C+0LHRgNCw0LbQtdC90LjQtSDRgNCw0LfQtNC10LvQsCDCq1wiICsgX3ZtLm5hbWUgKyBcIsK7XCIsXG4gICAgICAgICAgICBsb2FkaW5nOiBcImxhenlcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMjRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIDogX2MoXCJzdmdcIiwgeyBhdHRyczogeyB3aWR0aDogXCIyNFwiLCBoZWlnaHQ6IFwiMjRcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcInVzZVwiLCB7IGF0dHJzOiB7IFwieGxpbms6aHJlZlwiOiBfdm0uZ2V0SWNvbkZyb21MYWJlbChfdm0ubmFtZSkgfSB9KVxuICAgICAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJuYXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1wYWdlcy1tZW51XCIsIGF0dHJzOiB7IHJvbGU6IFwibmF2aWdhdGlvblwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLXBhZ2VzLW1lbnVfX3RpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAg0J/QvtC60YPQv9Cw0YLQtdC70Y/QvFxcbiAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1wYWdlcy1tZW51X19saXN0IGxpc3QtcmVzZXRcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLnBhZ2VzLCBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IHJlZi5uYW1lXG4gICAgICAgICAgdmFyIGxpbmsgPSByZWYubGlua1xuICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9iaWxlLXBhZ2VzLW1lbnVfX2l0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGxpbmssXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9iaWxlLXBhZ2VzLW1lbnVfX2xpbmtcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBsaW5rLCB0aXRsZTogXCLQn9C10YDQtdC50YLQuCDQuiDRgdGC0YDQsNC90LjRhtC1IFwiICsgbmFtZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG5hbWUpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkbFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHRleHQtY2VudGVyIG1iLTNcIiB9LCBbXG4gICAgICAgIF92bS5fdihcItCd0LDRiNC4INC/0YDQvtC10LrRgtGLXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgdmFyIG5hbWUgPSByZWYubmFtZVxuICAgICAgICB2YXIgbG9nb1NyYyA9IHJlZi5sb2dvU3JjXG4gICAgICAgIHJldHVybiBfYyhcImRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTYgY29sLXNtIHRleHQtY2VudGVyIG1iLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiBfdm0uU0lURV9URU1QTEFURV9QQVRIICsgbG9nb1NyYyxcbiAgICAgICAgICAgICAgYWx0OiBcItCb0L7Qs9C+0YLQuNC/INC60L7QvNC/0LDQvdC40LggwqtcIiArIG5hbWUgKyBcIsK7XCIsXG4gICAgICAgICAgICAgIGxvYWRpbmc6IFwibGF6eVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGxcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInNvY2lhbCByb3cgbWItMFwiIH0sXG4gICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgcmV0dXJuIF9jKFwiZGRcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgbWItMFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic29jaWFsX19saW5rXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBocmVmOiBpdGVtLmxpbmssXG4gICAgICAgICAgICAgIHRpdGxlOiBcItCf0LXRgNC10LnRgtC4INCyINC90LDRiCDCq1wiICsgaXRlbS5uYW1lICsgXCLCu1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvY2lhbF9faWNvblwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGFsdDogXCLQm9C+0LPQviBcIiArIGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBcImxhenlcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJsaVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS1tYWluLW1lbnVfX2l0ZW1cIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwibW9iaWxlLW1haW4tbWVudV9faXRlbV9jYXRhbG9nXCI6IF92bS5pdGVtLmxhYmVsID09PSBcItCa0LDRgtCw0LvQvtCzXCIsXG4gICAgICAgIFwibW9iaWxlLW1haW4tbWVudV9faXRlbV9zYWxlc1wiOiBfdm0uaXRlbS5sYWJlbCA9PT0gXCLQkNC60YbQuNC4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5pdGVtLmhhc0l0ZW1zXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibGlua1wiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtbWFpbi1tZW51X19saW5rXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwibmF2aWdhdGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiSXRlbUljb25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50TGV2ZWxEZXB0aDogX3ZtLmN1cnJlbnRMZXZlbERlcHRoLFxuICAgICAgICAgICAgICAgICAgbmFtZTogX3ZtLml0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgICBzcmM6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLml0ZW0ubGFiZWwpICsgXCJcXG4gIFwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9iaWxlLW1haW4tbWVudV9fbGlua1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIlwiLCBocmVmOiBfdm0uaXRlbS51cmwgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJJdGVtSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXZlbERlcHRoOiBfdm0uY3VycmVudExldmVsRGVwdGgsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBfdm0uaXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgIHNyYzogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0uaXRlbS5sYWJlbCkgKyBcIlxcbiAgXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVudS11c2VyLWJsb2NrXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS11c2VyLWJsb2NrX19pdGVtIG1lbnUtdXNlci1ibG9ja19faXRlbV9wZXJzb25hbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInN2Z1wiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjIwXCIsIGhlaWdodDogXCIyMFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInVzZVwiLCB7IGF0dHJzOiB7IFwieGxpbms6aHJlZlwiOiBcIiNpY29uX3VzZXJcIiB9IH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAg0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCXFxuICAgICAgXCIpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgxKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJtZW51LXVzZXItYmxvY2tfX2l0ZW0gbWVudS11c2VyLWJsb2NrX19pdGVtX3JlZ2lzdHJhdGlvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICDQoNC10LPQuNGB0YLRgNCw0YbQuNGPXFxuICAgICAgXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNiB0ZXh0LWNlbnRlciBib3JkZXItZW5kIGJvcmRlci10b3BcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcIm1lbnUtdXNlci1ibG9ja19faXRlbSBtZW51LXVzZXItYmxvY2tfX2l0ZW1fb3JkZXItbGlzdFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICDQnNC+0Lgg0LfQsNC60LDQt9GLXFxuICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC02IHRleHQtY2VudGVyIGJvcmRlci10b3BcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lbnUtdXNlci1ibG9ja19faXRlbSBtZW51LXVzZXItYmxvY2tfX2l0ZW1fYm9udXNlc1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAxMDAg0LHQsNC70LvQvtCyXFxuICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU21vb3RoUmVmbG93PWUoKTp0LlNtb290aFJlZmxvdz1lKCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTQ0KX0oW2Z1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDI4KShcIndrc1wiKSxvPW4oMTQpLGk9bigxKS5TeW1ib2wsdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpOyh0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPXUmJmlbdF18fCh1P2k6bykoXCJTeW1ib2wuXCIrdCkpfSkuc3RvcmU9cn0sZnVuY3Rpb24odCxlKXt2YXIgbj10LmV4cG9ydHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lk1hdGg9PU1hdGg/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLk1hdGg9PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XCJudW1iZXJcIj09dHlwZW9mIF9fZyYmKF9fZz1uKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMSksbz1uKDcpLGk9bigzKSx1PW4oMTkpLHM9bigyNCksZj1mdW5jdGlvbih0LGUsbil7dmFyIGEsYyxsLHAsdj10JmYuRixoPXQmZi5HLHk9dCZmLlMsZD10JmYuUCxtPXQmZi5CLGc9aD9yOnk/cltlXXx8KHJbZV09e30pOihyW2VdfHx7fSkucHJvdG90eXBlLGI9aD9vOm9bZV18fChvW2VdPXt9KSxTPWIucHJvdG90eXBlfHwoYi5wcm90b3R5cGU9e30pO2ZvcihhIGluIGgmJihuPWUpLG4pbD0oKGM9IXYmJmcmJnZvaWQgMCE9PWdbYV0pP2c6bilbYV0scD1tJiZjP3MobCxyKTpkJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP3MoRnVuY3Rpb24uY2FsbCxsKTpsLGcmJnUoZyxhLGwsdCZmLlUpLGJbYV0hPWwmJmkoYixhLHApLGQmJlNbYV0hPWwmJihTW2FdPWwpfTtyLmNvcmU9byxmLkY9MSxmLkc9MixmLlM9NCxmLlA9OCxmLkI9MTYsZi5XPTMyLGYuVT02NCxmLlI9MTI4LHQuZXhwb3J0cz1mfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0KSxvPW4oMTMpO3QuZXhwb3J0cz1uKDgpP2Z1bmN0aW9uKHQsZSxuKXtyZXR1cm4gci5mKHQsZSxvKDEsbikpfTpmdW5jdGlvbih0LGUsbil7cmV0dXJuIHRbZV09bix0fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTIpLG89bigzNCksaT1uKDIzKSx1PU9iamVjdC5kZWZpbmVQcm9wZXJ0eTtlLmY9big4KT9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24odCxlLG4pe2lmKHIodCksZT1pKGUsITApLHIobiksbyl0cnl7cmV0dXJuIHUodCxlLG4pfWNhdGNoKHQpe31pZihcImdldFwiaW4gbnx8XCJzZXRcImluIG4pdGhyb3cgVHlwZUVycm9yKFwiQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhXCIpO3JldHVyblwidmFsdWVcImluIG4mJih0W2VdPW4udmFsdWUpLHR9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdD9udWxsIT09dDpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0fX0sZnVuY3Rpb24odCxlKXt2YXIgbj17fS5oYXNPd25Qcm9wZXJ0eTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbi5jYWxsKHQsZSl9fSxmdW5jdGlvbih0LGUpe3ZhciBuPXQuZXhwb3J0cz17dmVyc2lvbjpcIjIuNS43XCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9bil9LGZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9IW4oOSkoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4hIXQoKX1jYXRjaCh0KXtyZXR1cm4hMH19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzNyksbz1uKDI5KTt0LmV4cG9ydHM9T2JqZWN0LmtleXN8fGZ1bmN0aW9uKHQpe3JldHVybiByKHQsbyl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyNSksbz1uKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHIobyh0KSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big1KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7aWYoIXIodCkpdGhyb3cgVHlwZUVycm9yKHQrXCIgaXMgbm90IGFuIG9iamVjdCFcIik7cmV0dXJuIHR9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybntlbnVtZXJhYmxlOiEoMSZ0KSxjb25maWd1cmFibGU6ISgyJnQpLHdyaXRhYmxlOiEoNCZ0KSx2YWx1ZTplfX19LGZ1bmN0aW9uKHQsZSl7dmFyIG49MCxyPU1hdGgucmFuZG9tKCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwiU3ltYm9sKFwiLmNvbmNhdCh2b2lkIDA9PT10P1wiXCI6dCxcIilfXCIsKCsrbityKS50b1N0cmluZygzNikpfX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9e319LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdChyKHQpKX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09dCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIrdCk7cmV0dXJuIHR9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz0hMX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMSksbz1uKDMpLGk9big2KSx1PW4oMTQpKFwic3JjXCIpLHM9RnVuY3Rpb24udG9TdHJpbmcsZj0oXCJcIitzKS5zcGxpdChcInRvU3RyaW5nXCIpO24oNykuaW5zcGVjdFNvdXJjZT1mdW5jdGlvbih0KXtyZXR1cm4gcy5jYWxsKHQpfSwodC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuLHMpe3ZhciBhPVwiZnVuY3Rpb25cIj09dHlwZW9mIG47YSYmKGkobixcIm5hbWVcIil8fG8obixcIm5hbWVcIixlKSksdFtlXSE9PW4mJihhJiYoaShuLHUpfHxvKG4sdSx0W2VdP1wiXCIrdFtlXTpmLmpvaW4oU3RyaW5nKGUpKSkpLHQ9PT1yP3RbZV09bjpzP3RbZV0/dFtlXT1uOm8odCxlLG4pOihkZWxldGUgdFtlXSxvKHQsZSxuKSkpfSkoRnVuY3Rpb24ucHJvdG90eXBlLFwidG9TdHJpbmdcIixmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMmJnRoaXNbdV18fHMuY2FsbCh0aGlzKX0pfSxmdW5jdGlvbih0LGUpe3ZhciBuPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gbi5jYWxsKHQpLnNsaWNlKDgsLTEpfX0sZnVuY3Rpb24odCxlKXtlLmY9e30ucHJvcGVydHlJc0VudW1lcmFibGV9LGZ1bmN0aW9uKHQsZSl7dmFyIG49TWF0aC5jZWlsLHI9TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGlzTmFOKHQ9K3QpPzA6KHQ+MD9yOm4pKHQpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNSk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIG4sbztpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZihuPXQudG9TdHJpbmcpJiYhcihvPW4uY2FsbCh0KSkpcmV0dXJuIG87aWYoXCJmdW5jdGlvblwiPT10eXBlb2Yobj10LnZhbHVlT2YpJiYhcihvPW4uY2FsbCh0KSkpcmV0dXJuIG87aWYoIWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mKG49dC50b1N0cmluZykmJiFyKG89bi5jYWxsKHQpKSlyZXR1cm4gbzt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0Nyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtpZihyKHQpLHZvaWQgMD09PWUpcmV0dXJuIHQ7c3dpdGNoKG4pe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24obil7cmV0dXJuIHQuY2FsbChlLG4pfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKG4scil7cmV0dXJuIHQuY2FsbChlLG4scil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24obixyLG8pe3JldHVybiB0LmNhbGwoZSxuLHIsbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KGUsYXJndW1lbnRzKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyMCk7dC5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKHQpe3JldHVyblwiU3RyaW5nXCI9PXIodCk/dC5zcGxpdChcIlwiKTpPYmplY3QodCl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyMiksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+MD9vKHIodCksOTAwNzE5OTI1NDc0MDk5MSk6MH19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDI4KShcImtleXNcIiksbz1uKDE0KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHJbdF18fChyW3RdPW8odCkpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNyksbz1uKDEpLGk9b1tcIl9fY29yZS1qc19zaGFyZWRfX1wiXXx8KG9bXCJfX2NvcmUtanNfc2hhcmVkX19cIl09e30pOyh0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gaVt0XXx8KGlbdF09dm9pZCAwIT09ZT9lOnt9KX0pKFwidmVyc2lvbnNcIixbXSkucHVzaCh7dmVyc2lvbjpyLnZlcnNpb24sbW9kZTpuKDE4KT9cInB1cmVcIjpcImdsb2JhbFwiLGNvcHlyaWdodDpcIsKpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSlcIn0pfSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1cImNvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZlwiLnNwbGl0KFwiLFwiKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNCkuZixvPW4oNiksaT1uKDApKFwidG9TdHJpbmdUYWdcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXt0JiYhbyh0PW4/dDp0LnByb3RvdHlwZSxpKSYmcih0LGkse2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTplfSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigwKShcInVuc2NvcGFibGVzXCIpLG89QXJyYXkucHJvdG90eXBlO3ZvaWQgMD09b1tyXSYmbigzKShvLHIse30pLHQuZXhwb3J0cz1mdW5jdGlvbih0KXtvW3JdW3RdPSEwfX0sZnVuY3Rpb24odCxlKXtlLmY9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMTgpLG89bigyKSxpPW4oMTkpLHU9bigzKSxzPW4oMTUpLGY9big0OCksYT1uKDMwKSxjPW4oNTIpLGw9bigwKShcIml0ZXJhdG9yXCIpLHA9IShbXS5rZXlzJiZcIm5leHRcImluW10ua2V5cygpKSx2PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbixoLHksZCxtKXtmKG4sZSxoKTt2YXIgZyxiLFMseD1mdW5jdGlvbih0KXtpZighcCYmdCBpbiBqKXJldHVybiBqW3RdO3N3aXRjaCh0KXtjYXNlXCJrZXlzXCI6Y2FzZVwidmFsdWVzXCI6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBuKHRoaXMsdCl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgbih0aGlzLHQpfX0sdz1lK1wiIEl0ZXJhdG9yXCIsRT1cInZhbHVlc1wiPT15LE89ITEsaj10LnByb3RvdHlwZSxfPWpbbF18fGpbXCJAQGl0ZXJhdG9yXCJdfHx5JiZqW3ldLFQ9X3x8eCh5KSxBPXk/RT94KFwiZW50cmllc1wiKTpUOnZvaWQgMCxQPVwiQXJyYXlcIj09ZSYmai5lbnRyaWVzfHxfO2lmKFAmJihTPWMoUC5jYWxsKG5ldyB0KSkpIT09T2JqZWN0LnByb3RvdHlwZSYmUy5uZXh0JiYoYShTLHcsITApLHJ8fFwiZnVuY3Rpb25cIj09dHlwZW9mIFNbbF18fHUoUyxsLHYpKSxFJiZfJiZcInZhbHVlc1wiIT09Xy5uYW1lJiYoTz0hMCxUPWZ1bmN0aW9uKCl7cmV0dXJuIF8uY2FsbCh0aGlzKX0pLHImJiFtfHwhcCYmIU8mJmpbbF18fHUoaixsLFQpLHNbZV09VCxzW3ddPXYseSlpZihnPXt2YWx1ZXM6RT9UOngoXCJ2YWx1ZXNcIiksa2V5czpkP1Q6eChcImtleXNcIiksZW50cmllczpBfSxtKWZvcihiIGluIGcpYiBpbiBqfHxpKGosYixnW2JdKTtlbHNlIG8oby5QK28uRioocHx8TyksZSxnKTtyZXR1cm4gZ319LGZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9IW4oOCkmJiFuKDkpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuKDM1KShcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big1KSxvPW4oMSkuZG9jdW1lbnQsaT1yKG8pJiZyKG8uY3JlYXRlRWxlbWVudCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBpP28uY3JlYXRlRWxlbWVudCh0KTp7fX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEyKSxvPW4oNDkpLGk9bigyOSksdT1uKDI3KShcIklFX1BST1RPXCIpLHM9ZnVuY3Rpb24oKXt9LGY9ZnVuY3Rpb24oKXt2YXIgdCxlPW4oMzUpKFwiaWZyYW1lXCIpLHI9aS5sZW5ndGg7Zm9yKGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixuKDUxKS5hcHBlbmRDaGlsZChlKSxlLnNyYz1cImphdmFzY3JpcHQ6XCIsKHQ9ZS5jb250ZW50V2luZG93LmRvY3VtZW50KS5vcGVuKCksdC53cml0ZShcIjxzY3JpcHQ+ZG9jdW1lbnQuRj1PYmplY3Q8XFwvc2NyaXB0PlwiKSx0LmNsb3NlKCksZj10LkY7ci0tOylkZWxldGUgZi5wcm90b3R5cGVbaVtyXV07cmV0dXJuIGYoKX07dC5leHBvcnRzPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKHQsZSl7dmFyIG47cmV0dXJuIG51bGwhPT10PyhzLnByb3RvdHlwZT1yKHQpLG49bmV3IHMscy5wcm90b3R5cGU9bnVsbCxuW3VdPXQpOm49ZigpLHZvaWQgMD09PWU/bjpvKG4sZSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big2KSxvPW4oMTEpLGk9bigzOCkoITEpLHU9bigyNykoXCJJRV9QUk9UT1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgbixzPW8odCksZj0wLGE9W107Zm9yKG4gaW4gcyluIT11JiZyKHMsbikmJmEucHVzaChuKTtmb3IoO2UubGVuZ3RoPmY7KXIocyxuPWVbZisrXSkmJih+aShhLG4pfHxhLnB1c2gobikpO3JldHVybiBhfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTEpLG89bigyNiksaT1uKDUwKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUsbix1KXt2YXIgcyxmPXIoZSksYT1vKGYubGVuZ3RoKSxjPWkodSxhKTtpZih0JiZuIT1uKXtmb3IoO2E+YzspaWYoKHM9ZltjKytdKSE9cylyZXR1cm4hMH1lbHNlIGZvcig7YT5jO2MrKylpZigodHx8YyBpbiBmKSYmZltjXT09PW4pcmV0dXJuIHR8fGN8fDA7cmV0dXJuIXQmJi0xfX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDMxKSxvPW4oNjUpLGk9bigxNSksdT1uKDExKTt0LmV4cG9ydHM9bigzMykoQXJyYXksXCJBcnJheVwiLGZ1bmN0aW9uKHQsZSl7dGhpcy5fdD11KHQpLHRoaXMuX2k9MCx0aGlzLl9rPWV9LGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdCxlPXRoaXMuX2ssbj10aGlzLl9pKys7cmV0dXJuIXR8fG4+PXQubGVuZ3RoPyh0aGlzLl90PXZvaWQgMCxvKDEpKTpvKDAsXCJrZXlzXCI9PWU/bjpcInZhbHVlc1wiPT1lP3Rbbl06W24sdFtuXV0pfSxcInZhbHVlc1wiKSxpLkFyZ3VtZW50cz1pLkFycmF5LHIoXCJrZXlzXCIpLHIoXCJ2YWx1ZXNcIikscihcImVudHJpZXNcIil9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIwKTt0LmV4cG9ydHM9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24odCl7cmV0dXJuXCJBcnJheVwiPT1yKHQpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMSksbz1uKDcpLGk9bigxOCksdT1uKDQyKSxzPW4oNCkuZjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9by5TeW1ib2x8fChvLlN5bWJvbD1pP3t9OnIuU3ltYm9sfHx7fSk7XCJfXCI9PXQuY2hhckF0KDApfHx0IGluIGV8fHMoZSx0LHt2YWx1ZTp1LmYodCl9KX19LGZ1bmN0aW9uKHQsZSxuKXtlLmY9bigwKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMzcpLG89bigyOSkuY29uY2F0KFwibGVuZ3RoXCIsXCJwcm90b3R5cGVcIik7ZS5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzfHxmdW5jdGlvbih0KXtyZXR1cm4gcih0LG8pfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24ucihlKTtuKDQ1KSxuKDUzKSxuKDYwKSxuKDYxKSxuKDM5KSxuKDY2KSxuKDY4KSxuKDcwKSxuKDc0KSxuKDc1KSxuKDgwKTtmdW5jdGlvbiByKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHIua2V5LHIpfX12YXIgbz17bWV0aG9kczp7JHNtb290aFJlZmxvdzpmdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTt0aGlzLl9zbW9vdGhFbGVtZW50cy5wdXNoKG5ldyBhKHQpKX0uYmluZCh0aGlzKTtBcnJheS5pc0FycmF5KHQpP3QuZm9yRWFjaChlKTplKHQpfSwkdW5zbW9vdGhSZWZsb3c6ZnVuY3Rpb24odCl7dmFyIGU9ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06ZigpLGU9dGhpcy4kZWwsbj10aGlzLl9zbW9vdGhFbGVtZW50cy5maW5kSW5kZXgoZnVuY3Rpb24obil7cmV0dXJuIHUoZSxuLm9wdGlvbnMuZWwpPT09dShlLHQuZWwpfSk7aWYoLTE9PT1uKXJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCJWU1JfRVJST1I6ICR1bnNtb290aFJlZmxvdyBmYWlsZWQgZHVlIHRvIGludmFsaWQgZWwgb3B0aW9uXCIpO3RoaXMuX3Ntb290aEVsZW1lbnRzW25dLnNjaGVkdWxlUmVtb3ZhbCgpfS5iaW5kKHRoaXMpO0FycmF5LmlzQXJyYXkodCk/dC5mb3JFYWNoKGUpOmUodCl9fSxiZWZvcmVNb3VudDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5fc21vb3RoRWxlbWVudHM9W10sdGhpcy5fZW5kTGlzdGVuZXI9ZnVuY3Rpb24oZSl7dmFyIG49ITAscj0hMSxvPXZvaWQgMDt0cnl7Zm9yKHZhciBpLHU9dC5fc21vb3RoRWxlbWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpOyEobj0oaT11Lm5leHQoKSkuZG9uZSk7bj0hMCl7aS52YWx1ZS5lbmRMaXN0ZW5lcihlKX19Y2F0Y2godCl7cj0hMCxvPXR9ZmluYWxseXt0cnl7bnx8bnVsbD09dS5yZXR1cm58fHUucmV0dXJuKCl9ZmluYWxseXtpZihyKXRocm93IG99fX19LG1vdW50ZWQ6ZnVuY3Rpb24oKXt0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHRoaXMuX2VuZExpc3RlbmVyLHtwYXNzaXZlOiEwfSl9LGRlc3Ryb3llZDpmdW5jdGlvbigpe3RoaXMuJGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsdGhpcy5fZW5kTGlzdGVuZXIse3Bhc3NpdmU6ITB9KX0sYmVmb3JlVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIix0aGlzLl9lbmRMaXN0ZW5lcix7cGFzc2l2ZTohMH0pLGkodGhpcyk7dmFyIHQ9ITAsZT0hMSxuPXZvaWQgMDt0cnl7Zm9yKHZhciByLG89dGhpcy5fc21vb3RoRWxlbWVudHNbU3ltYm9sLml0ZXJhdG9yXSgpOyEodD0ocj1vLm5leHQoKSkuZG9uZSk7dD0hMCl7dmFyIHM9ci52YWx1ZSxmPXUodGhpcy4kZWwscy5vcHRpb25zLmVsKTtzLnNldFNtb290aEVsZW1lbnQoZikscy5zZXRCZWZvcmVWYWx1ZXMoKX19Y2F0Y2godCl7ZT0hMCxuPXR9ZmluYWxseXt0cnl7dHx8bnVsbD09by5yZXR1cm58fG8ucmV0dXJuKCl9ZmluYWxseXtpZihlKXRocm93IG59fX0sdXBkYXRlZDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKXt2YXIgZT0hMCxuPSExLHI9dm9pZCAwO3RyeXtmb3IodmFyIG8scz10Ll9zbW9vdGhFbGVtZW50c1tTeW1ib2wuaXRlcmF0b3JdKCk7IShlPShvPXMubmV4dCgpKS5kb25lKTtlPSEwKXt2YXIgZj1vLnZhbHVlLGE9dSh0LiRlbCxmLm9wdGlvbnMuZWwpO2Yuc2V0U21vb3RoRWxlbWVudChhKSxmLmRvU21vb3RoUmVmbG93KCl9fWNhdGNoKHQpe249ITAscj10fWZpbmFsbHl7dHJ5e2V8fG51bGw9PXMucmV0dXJufHxzLnJldHVybigpfWZpbmFsbHl7aWYobil0aHJvdyByfX1pKHQpfSl9fTtmdW5jdGlvbiBpKHQpe2Zvcih2YXIgZT10Ll9zbW9vdGhFbGVtZW50cy5sZW5ndGg7ZS0tOyl7dmFyIG49dC5fc21vb3RoRWxlbWVudHNbZV07bi5pc1JlbW92ZWQmJihuLnN0b3BUcmFuc2l0aW9uKCksdC5fc21vb3RoRWxlbWVudHMuc3BsaWNlKGUsMSkpfX1mdW5jdGlvbiB1KHQsZSl7cmV0dXJuIXR8fHQgaW5zdGFuY2VvZiBOb2RlJiZ0Lm5vZGVUeXBlPT09Tm9kZS5DT01NRU5UX05PREU/bnVsbDpudWxsPT09ZT90OmZ1bmN0aW9uKHQsZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/dC5tYXRjaGVzKGUpP3Q6dC5xdWVyeVNlbGVjdG9yKGUpOmV9KHQsZSl9dmFyIHM9e0lOQUNUSVZFOlwiSU5BQ1RJVkVcIixBQ1RJVkU6XCJBQ1RJVkVcIn0sZj1mdW5jdGlvbigpe3JldHVybntlbDpudWxsLHByb3BlcnR5OlwiaGVpZ2h0XCIsdHJhbnNpdGlvbkV2ZW50Om51bGwsaGlkZU92ZXJmbG93OiEwLGRlYnVnOiExfX0sYT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSl7IWZ1bmN0aW9uKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyx0KTt2YXIgbj1mKCk7T2JqZWN0LmFzc2lnbihuLGUpO3ZhciByPXRoaXMucGFyc2VQcm9wZXJ0eU9wdGlvbihuLnByb3BlcnR5KTtuLnRyYW5zaXRpb258fChuLnRyYW5zaXRpb249ci5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCJcIi5jb25jYXQodCxcIiAuNXNcIil9KS5qb2luKFwiLFwiKSk7dmFyIG89eyRzbW9vdGhFbDpudWxsLHByb3BlcnRpZXM6cixiZWZvcmVSZWN0Ont9LHN0YXRlOnMuSU5BQ1RJVkUsaXNSZW1vdmVkOiExfTtPYmplY3QuYXNzaWduKHRoaXMse29wdGlvbnM6bn0sbyksdGhpcy5lbmRMaXN0ZW5lcj10aGlzLmVuZExpc3RlbmVyLmJpbmQodGhpcyksdGhpcy5kZWJ1Zz10aGlzLmRlYnVnLmJpbmQodGhpcyl9cmV0dXJuIGZ1bmN0aW9uKHQsZSxuKXtlJiZyKHQucHJvdG90eXBlLGUpLG4mJnIodCxuKX0odCxbe2tleTpcInNldFNtb290aEVsZW1lbnRcIix2YWx1ZTpmdW5jdGlvbih0KXt0aGlzLiRzbW9vdGhFbD10fX0se2tleTpcInRyYW5zaXRpb25Ub1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3RoaXMuc3RhdGU9dH19LHtrZXk6XCJwYXJzZVByb3BlcnR5T3B0aW9uXCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/W3RdOkFycmF5LmlzQXJyYXkodCk/dDpbXX19LHtrZXk6XCJzZXRCZWZvcmVWYWx1ZXNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuJHNtb290aEVsO2lmKHRoaXMuYmVmb3JlUmVjdD17fSx0KXt2YXIgZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KXx8e30sbj1lLnRyYW5zaXRpb24scj1lLm92ZXJmbG93WCxvPWUub3ZlcmZsb3dZO3RoaXMuY29tcHV0ZWRUcmFuc2l0aW9uPW4sdGhpcy5vdmVyZmxvd1g9cix0aGlzLm92ZXJmbG93WT1vLHRoaXMuYmVmb3JlUmVjdD1jKHQpLHRoaXMuc3RhdGU9PT1zLkFDVElWRSYmKHRoaXMuc3RvcFRyYW5zaXRpb24oKSx0aGlzLmRlYnVnKFwiVHJhbnNpdGlvbiB3YXMgaW50ZXJydXB0ZWQuXCIpKX19fSx7a2V5OlwiZGlkVmFsdWVzQ2hhbmdlXCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt2YXIgbj10LHI9ZTtpZigwPT09T2JqZWN0LmtleXModCkubGVuZ3RoKXJldHVybiExO3ZhciBvPSEwLGk9ITEsdT12b2lkIDA7dHJ5e2Zvcih2YXIgcyxmPXRoaXMucHJvcGVydGllc1tTeW1ib2wuaXRlcmF0b3JdKCk7IShvPShzPWYubmV4dCgpKS5kb25lKTtvPSEwKXt2YXIgYT1zLnZhbHVlO2lmKFwidHJhbnNmb3JtXCI9PT1hJiYobi50b3AhPT1yLnRvcHx8bi5sZWZ0IT09ci5sZWZ0KSlyZXR1cm4hMDtpZihuW2FdIT09clthXSlyZXR1cm4hMH19Y2F0Y2godCl7aT0hMCx1PXR9ZmluYWxseXt0cnl7b3x8bnVsbD09Zi5yZXR1cm58fGYucmV0dXJuKCl9ZmluYWxseXtpZihpKXRocm93IHV9fXJldHVybiExfX0se2tleTpcImRvU21vb3RoUmVmbG93XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJkYXRhIHVwZGF0ZVwiLGU9dGhpcy4kc21vb3RoRWw7aWYoIWUpcmV0dXJuIHRoaXMuZGVidWcoXCJDb3VsZCBub3QgZmluZCByZWdpc3RlcmVkIGVsIHRvIHBlcmZvcm0gZG9TbW9vdGhSZWZsb3cuXCIpLHZvaWQgdGhpcy50cmFuc2l0aW9uVG8ocy5JTkFDVElWRSk7aWYodGhpcy5zdGF0ZSE9PXMuQUNUSVZFKXt2YXIgbj10aGlzLmJlZm9yZVJlY3Qscj10aGlzLnByb3BlcnRpZXMsbz10aGlzLm9wdGlvbnMsaT10aGlzLm92ZXJmbG93WCx1PXRoaXMub3ZlcmZsb3dZLGY9dGhpcy5kZWJ1Zzt0aGlzLnRyYW5zaXRpb25UbyhzLkFDVElWRSksZihcImRvU21vb3RoUmVmbG93IHRyaWdnZXJlZCBieTpcIixcInN0cmluZ1wiPT10eXBlb2YgdD90OnQudGFyZ2V0KTt2YXIgYT1jKGUpO2lmKCF0aGlzLmRpZFZhbHVlc0NoYW5nZShuLGEpKXJldHVybiBmKFwiUHJvcGVydHkgdmFsdWVzIGRpZCBub3QgY2hhbmdlLlwiKSx2b2lkIHRoaXMudHJhbnNpdGlvblRvKHMuSU5BQ1RJVkUpO2YoXCJiZWZvcmVSZWN0XCIsbiksZihcImFmdGVyUmVjdFwiLGEpLHRoaXMuc2F2ZU92ZXJmbG93VmFsdWVzKGUsaSx1KTt2YXIgbD0hMCxwPSExLHY9dm9pZCAwO3RyeXtmb3IodmFyIGgseT1yW1N5bWJvbC5pdGVyYXRvcl0oKTshKGw9KGg9eS5uZXh0KCkpLmRvbmUpO2w9ITApe3ZhciBkPWgudmFsdWU7aWYoXCJ0cmFuc2Zvcm1cIj09PWQpe3ZhciBtPW4ubGVmdC1hLmxlZnQsZz1uLnRvcC1hLnRvcDtlLnN0eWxlLnRyYW5zZm9ybT1cInRyYW5zbGF0ZShcIi5jb25jYXQobSxcInB4LCBcIikuY29uY2F0KGcsXCJweClcIil9ZWxzZSBlLnN0eWxlW2RdPW5bZF0rXCJweFwifX1jYXRjaCh0KXtwPSEwLHY9dH1maW5hbGx5e3RyeXtsfHxudWxsPT15LnJldHVybnx8eS5yZXR1cm4oKX1maW5hbGx5e2lmKHApdGhyb3cgdn19ZS5vZmZzZXRIZWlnaHQsZS5zdHlsZS50cmFuc2l0aW9uPVt0aGlzLmNvbXB1dGVkVHJhbnNpdGlvbixvLnRyYW5zaXRpb25dLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gdH0pLmpvaW4oXCIsXCIpO3ZhciBiPSEwLFM9ITEseD12b2lkIDA7dHJ5e2Zvcih2YXIgdyxFPXJbU3ltYm9sLml0ZXJhdG9yXSgpOyEoYj0odz1FLm5leHQoKSkuZG9uZSk7Yj0hMCl7dmFyIE89dy52YWx1ZTtcInRyYW5zZm9ybVwiPT09Tz9lLnN0eWxlLnRyYW5zZm9ybT1cIlwiOmUuc3R5bGVbT109YVtPXStcInB4XCJ9fWNhdGNoKHQpe1M9ITAseD10fWZpbmFsbHl7dHJ5e2J8fG51bGw9PUUucmV0dXJufHxFLnJldHVybigpfWZpbmFsbHl7aWYoUyl0aHJvdyB4fX19fX0se2tleTpcImVuZExpc3RlbmVyXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy4kc21vb3RoRWwsbj10aGlzLnByb3BlcnRpZXM7ZT09PXQudGFyZ2V0P24uaW5jbHVkZXModC5wcm9wZXJ0eU5hbWUpJiYodGhpcy5zdG9wVHJhbnNpdGlvbigpLHRoaXMuaGFzUmVnaXN0ZXJlZEV2ZW50RW1pdHRlcigpJiZ0aGlzLnNldEJlZm9yZVZhbHVlcygpKTp0aGlzLmlzUmVnaXN0ZXJlZEV2ZW50RW1pdHRlcihlLHQpJiZ0aGlzLmRvU21vb3RoUmVmbG93KHQpfX0se2tleTpcImhhc1JlZ2lzdGVyZWRFdmVudEVtaXR0ZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy50cmFuc2l0aW9uRXZlbnQ7cmV0dXJuIG51bGwhPT10JiZPYmplY3Qua2V5cyh0KS5sZW5ndGg+MH19LHtrZXk6XCJpc1JlZ2lzdGVyZWRFdmVudEVtaXR0ZXJcIix2YWx1ZTpmdW5jdGlvbih0LGUpe2lmKCF0aGlzLmhhc1JlZ2lzdGVyZWRFdmVudEVtaXR0ZXIoKSlyZXR1cm4hMTt2YXIgbj1lLnRhcmdldCxyPXRoaXMub3B0aW9ucy50cmFuc2l0aW9uRXZlbnQsbz1yLnNlbGVjdG9yLGk9ci5wcm9wZXJ0eU5hbWU7aWYobnVsbCE9aSYmaSE9PWUucHJvcGVydHlOYW1lKXJldHVybiExO2lmKG51bGwhPW8mJiFuLm1hdGNoZXMobykpcmV0dXJuITE7aWYoLTE9PT10aGlzLnByb3BlcnRpZXMuaW5kZXhPZihcInRyYW5zZm9ybVwiKSl7dmFyIHU9ITEscz1lLmNvbXBvc2VkUGF0aD9lLmNvbXBvc2VkUGF0aCgpOltdLGY9ITAsYT0hMSxjPXZvaWQgMDt0cnl7Zm9yKHZhciBsLHA9c1tTeW1ib2wuaXRlcmF0b3JdKCk7IShmPShsPXAubmV4dCgpKS5kb25lKTtmPSEwKXtpZih0PT09bC52YWx1ZSl7dT0hMDticmVha319fWNhdGNoKHQpe2E9ITAsYz10fWZpbmFsbHl7dHJ5e2Z8fG51bGw9PXAucmV0dXJufHxwLnJldHVybigpfWZpbmFsbHl7aWYoYSl0aHJvdyBjfX1pZighdSlyZXR1cm4hMX1yZXR1cm4hMH19LHtrZXk6XCJzYXZlT3ZlcmZsb3dWYWx1ZXNcIix2YWx1ZTpmdW5jdGlvbih0LGUsbil7dGhpcy5vcHRpb25zLmhpZGVPdmVyZmxvdyYmKHRoaXMub3ZlcmZsb3dYPWUsdGhpcy5vdmVyZmxvd1k9bix0LnN0eWxlLm92ZXJmbG93WD1cImhpZGRlblwiLHQuc3R5bGUub3ZlcmZsb3dZPVwiaGlkZGVuXCIpfX0se2tleTpcInJlc3RvcmVPdmVyZmxvd1ZhbHVlc1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMub3B0aW9ucyxuPXRoaXMub3ZlcmZsb3dYLHI9dGhpcy5vdmVyZmxvd1k7ZS5oaWRlT3ZlcmZsb3cmJih0LnN0eWxlLm92ZXJmbG93WD1uLHQuc3R5bGUub3ZlcmZsb3dZPXIpfX0se2tleTpcInN0b3BUcmFuc2l0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRzbW9vdGhFbCxlPXRoaXMucHJvcGVydGllcyxuPSEwLHI9ITEsbz12b2lkIDA7dHJ5e2Zvcih2YXIgaSx1PWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEobj0oaT11Lm5leHQoKSkuZG9uZSk7bj0hMCl7dmFyIGY9aS52YWx1ZTt0LnN0eWxlW2ZdPW51bGx9fWNhdGNoKHQpe3I9ITAsbz10fWZpbmFsbHl7dHJ5e258fG51bGw9PXUucmV0dXJufHx1LnJldHVybigpfWZpbmFsbHl7aWYocil0aHJvdyBvfX10aGlzLnJlc3RvcmVPdmVyZmxvd1ZhbHVlcyh0KSx0LnN0eWxlLnRyYW5zaXRpb249bnVsbCx0aGlzLnRyYW5zaXRpb25UbyhzLklOQUNUSVZFKX19LHtrZXk6XCJzY2hlZHVsZVJlbW92YWxcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuaXNSZW1vdmVkPSEwfX0se2tleTpcImRlYnVnXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZih0aGlzLm9wdGlvbnMuZGVidWcpe3ZhciB0PVtcIlZTUl9ERUJVRzpcIl0uY29uY2F0KEFycmF5LmZyb20oYXJndW1lbnRzKSk7Y29uc29sZS5sb2cuYXBwbHkobnVsbCx0KX19fV0pLHR9KCksYz1mdW5jdGlvbih0KXt0LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7dmFyIGU9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPWUudG9wLHI9ZS5yaWdodCxvPWUuYm90dG9tLGk9ZS5sZWZ0LHU9ZS53aWR0aCxzPWUuaGVpZ2h0LGY9ZS54LGE9ZS55O3JldHVybiB0LnN0eWxlLm92ZXJmbG93PW51bGwse3RvcDpuLHJpZ2h0OnIsYm90dG9tOm8sbGVmdDppLHdpZHRoOnUsaGVpZ2h0OnMseDpmLHk6YX19O1widW5kZWZpbmVkXCIhPXR5cGVvZiBFbGVtZW50JiZFbGVtZW50LnByb3RvdHlwZSYmIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMmJihFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzPUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3Rvcnx8RWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yfHxFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcnx8RWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3Rvcnx8RWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxmdW5jdGlvbih0KXtmb3IodmFyIGU9KHRoaXMuZG9jdW1lbnR8fHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbCh0KSxuPWUubGVuZ3RoOy0tbj49MCYmZS5pdGVtKG4pIT09dGhpczspO3JldHVybiBuPi0xfSksZS5kZWZhdWx0PW99LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDQ2KSghMCk7bigzMykoU3RyaW5nLFwiU3RyaW5nXCIsZnVuY3Rpb24odCl7dGhpcy5fdD1TdHJpbmcodCksdGhpcy5faT0wfSxmdW5jdGlvbigpe3ZhciB0LGU9dGhpcy5fdCxuPXRoaXMuX2k7cmV0dXJuIG4+PWUubGVuZ3RoP3t2YWx1ZTp2b2lkIDAsZG9uZTohMH06KHQ9cihlLG4pLHRoaXMuX2krPXQubGVuZ3RoLHt2YWx1ZTp0LGRvbmU6ITF9KX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyMiksbz1uKDE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUsbil7dmFyIGksdSxzPVN0cmluZyhvKGUpKSxmPXIobiksYT1zLmxlbmd0aDtyZXR1cm4gZjwwfHxmPj1hP3Q/XCJcIjp2b2lkIDA6KGk9cy5jaGFyQ29kZUF0KGYpKTw1NTI5Nnx8aT41NjMxOXx8ZisxPT09YXx8KHU9cy5jaGFyQ29kZUF0KGYrMSkpPDU2MzIwfHx1PjU3MzQzP3Q/cy5jaGFyQXQoZik6aTp0P3Muc2xpY2UoZixmKzIpOnUtNTYzMjArKGktNTUyOTY8PDEwKSs2NTUzNn19fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gdH19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDM2KSxvPW4oMTMpLGk9bigzMCksdT17fTtuKDMpKHUsbigwKShcIml0ZXJhdG9yXCIpLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSx0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe3QucHJvdG90eXBlPXIodSx7bmV4dDpvKDEsbil9KSxpKHQsZStcIiBJdGVyYXRvclwiKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQpLG89bigxMiksaT1uKDEwKTt0LmV4cG9ydHM9big4KT9PYmplY3QuZGVmaW5lUHJvcGVydGllczpmdW5jdGlvbih0LGUpe28odCk7Zm9yKHZhciBuLHU9aShlKSxzPXUubGVuZ3RoLGY9MDtzPmY7KXIuZih0LG49dVtmKytdLGVbbl0pO3JldHVybiB0fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjIpLG89TWF0aC5tYXgsaT1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4odD1yKHQpKTwwP28odCtlLDApOmkodCxlKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEpLmRvY3VtZW50O3QuZXhwb3J0cz1yJiZyLmRvY3VtZW50RWxlbWVudH0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNiksbz1uKDE2KSxpPW4oMjcpKFwiSUVfUFJPVE9cIiksdT1PYmplY3QucHJvdG90eXBlO3QuZXhwb3J0cz1PYmplY3QuZ2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKHQpe3JldHVybiB0PW8odCkscih0LGkpP3RbaV06XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb25zdHJ1Y3RvciYmdCBpbnN0YW5jZW9mIHQuY29uc3RydWN0b3I/dC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU6dCBpbnN0YW5jZW9mIE9iamVjdD91Om51bGx9fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigyNCksbz1uKDIpLGk9bigxNiksdT1uKDU0KSxzPW4oNTUpLGY9bigyNiksYT1uKDU2KSxjPW4oNTcpO28oby5TK28uRiohbig1OSkoZnVuY3Rpb24odCl7QXJyYXkuZnJvbSh0KX0pLFwiQXJyYXlcIix7ZnJvbTpmdW5jdGlvbih0KXt2YXIgZSxuLG8sbCxwPWkodCksdj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzP3RoaXM6QXJyYXksaD1hcmd1bWVudHMubGVuZ3RoLHk9aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAsZD12b2lkIDAhPT15LG09MCxnPWMocCk7aWYoZCYmKHk9cih5LGg+Mj9hcmd1bWVudHNbMl06dm9pZCAwLDIpKSx2b2lkIDA9PWd8fHY9PUFycmF5JiZzKGcpKWZvcihuPW5ldyB2KGU9ZihwLmxlbmd0aCkpO2U+bTttKyspYShuLG0sZD95KHBbbV0sbSk6cFttXSk7ZWxzZSBmb3IobD1nLmNhbGwocCksbj1uZXcgdjshKG89bC5uZXh0KCkpLmRvbmU7bSsrKWEobixtLGQ/dShsLHksW28udmFsdWUsbV0sITApOm8udmFsdWUpO3JldHVybiBuLmxlbmd0aD1tLG59fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEyKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4sbyl7dHJ5e3JldHVybiBvP2UocihuKVswXSxuWzFdKTplKG4pfWNhdGNoKGUpe3ZhciBpPXQucmV0dXJuO3Rocm93IHZvaWQgMCE9PWkmJnIoaS5jYWxsKHQpKSxlfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDE1KSxvPW4oMCkoXCJpdGVyYXRvclwiKSxpPUFycmF5LnByb3RvdHlwZTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PXQmJihyLkFycmF5PT09dHx8aVtvXT09PXQpfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oNCksbz1uKDEzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2UgaW4gdD9yLmYodCxlLG8oMCxuKSk6dFtlXT1ufX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNTgpLG89bigwKShcIml0ZXJhdG9yXCIpLGk9bigxNSk7dC5leHBvcnRzPW4oNykuZ2V0SXRlcmF0b3JNZXRob2Q9ZnVuY3Rpb24odCl7aWYodm9pZCAwIT10KXJldHVybiB0W29dfHx0W1wiQEBpdGVyYXRvclwiXXx8aVtyKHQpXX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIwKSxvPW4oMCkoXCJ0b1N0cmluZ1RhZ1wiKSxpPVwiQXJndW1lbnRzXCI9PXIoZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzfSgpKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGUsbix1O3JldHVybiB2b2lkIDA9PT10P1wiVW5kZWZpbmVkXCI6bnVsbD09PXQ/XCJOdWxsXCI6XCJzdHJpbmdcIj09dHlwZW9mKG49ZnVuY3Rpb24odCxlKXt0cnl7cmV0dXJuIHRbZV19Y2F0Y2godCl7fX0oZT1PYmplY3QodCksbykpP246aT9yKGUpOlwiT2JqZWN0XCI9PSh1PXIoZSkpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNhbGxlZT9cIkFyZ3VtZW50c1wiOnV9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigwKShcIml0ZXJhdG9yXCIpLG89ITE7dHJ5e3ZhciBpPVs3XVtyXSgpO2kucmV0dXJuPWZ1bmN0aW9uKCl7bz0hMH0sQXJyYXkuZnJvbShpLGZ1bmN0aW9uKCl7dGhyb3cgMn0pfWNhdGNoKHQpe310LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtpZighZSYmIW8pcmV0dXJuITE7dmFyIG49ITE7dHJ5e3ZhciBpPVs3XSx1PWlbcl0oKTt1Lm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTpuPSEwfX0saVtyXT1mdW5jdGlvbigpe3JldHVybiB1fSx0KGkpfWNhdGNoKHQpe31yZXR1cm4gbn19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDIpLG89bigzOCkoITApO3Ioci5QLFwiQXJyYXlcIix7aW5jbHVkZXM6ZnVuY3Rpb24odCl7cmV0dXJuIG8odGhpcyx0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KSxuKDMxKShcImluY2x1ZGVzXCIpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigyKSxvPW4oNjIpO3Ioci5QK3IuRipuKDY0KShcImluY2x1ZGVzXCIpLFwiU3RyaW5nXCIse2luY2x1ZGVzOmZ1bmN0aW9uKHQpe3JldHVybiEhfm8odGhpcyx0LFwiaW5jbHVkZXNcIikuaW5kZXhPZih0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNjMpLG89bigxNyk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtpZihyKGUpKXRocm93IFR5cGVFcnJvcihcIlN0cmluZyNcIituK1wiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtyZXR1cm4gU3RyaW5nKG8odCkpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNSksbz1uKDIwKSxpPW4oMCkoXCJtYXRjaFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuIHIodCkmJih2b2lkIDAhPT0oZT10W2ldKT8hIWU6XCJSZWdFeHBcIj09byh0KSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigwKShcIm1hdGNoXCIpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT0vLi87dHJ5e1wiLy4vXCJbdF0oZSl9Y2F0Y2gobil7dHJ5e3JldHVybiBlW3JdPSExLCFcIi8uL1wiW3RdKGUpfWNhdGNoKHQpe319cmV0dXJuITB9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybnt2YWx1ZTplLGRvbmU6ISF0fX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDE2KSxvPW4oMTApO24oNjcpKFwia2V5c1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBvKHIodCkpfX0pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyKSxvPW4oNyksaT1uKDkpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3ZhciBuPShvLk9iamVjdHx8e30pW3RdfHxPYmplY3RbdF0sdT17fTt1W3RdPWUobikscihyLlMrci5GKmkoZnVuY3Rpb24oKXtuKDEpfSksXCJPYmplY3RcIix1KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIpO3Ioci5TK3IuRixcIk9iamVjdFwiLHthc3NpZ246big2OSl9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oMTApLG89bigzMiksaT1uKDIxKSx1PW4oMTYpLHM9bigyNSksZj1PYmplY3QuYXNzaWduO3QuZXhwb3J0cz0hZnx8big5KShmdW5jdGlvbigpe3ZhciB0PXt9LGU9e30sbj1TeW1ib2woKSxyPVwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIjtyZXR1cm4gdFtuXT03LHIuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbih0KXtlW3RdPXR9KSw3IT1mKHt9LHQpW25dfHxPYmplY3Qua2V5cyhmKHt9LGUpKS5qb2luKFwiXCIpIT1yfSk/ZnVuY3Rpb24odCxlKXtmb3IodmFyIG49dSh0KSxmPWFyZ3VtZW50cy5sZW5ndGgsYT0xLGM9by5mLGw9aS5mO2Y+YTspZm9yKHZhciBwLHY9cyhhcmd1bWVudHNbYSsrXSksaD1jP3IodikuY29uY2F0KGModikpOnIodikseT1oLmxlbmd0aCxkPTA7eT5kOylsLmNhbGwodixwPWhbZCsrXSkmJihuW3BdPXZbcF0pO3JldHVybiBufTpmfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigyKSxvPW4oNzEpKDYpLGk9XCJmaW5kSW5kZXhcIix1PSEwO2kgaW5bXSYmQXJyYXkoMSlbaV0oZnVuY3Rpb24oKXt1PSExfSkscihyLlArci5GKnUsXCJBcnJheVwiLHtmaW5kSW5kZXg6ZnVuY3Rpb24odCl7cmV0dXJuIG8odGhpcyx0LGFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwKX19KSxuKDMxKShpKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjQpLG89bigyNSksaT1uKDE2KSx1PW4oMjYpLHM9big3Mik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIG49MT09dCxmPTI9PXQsYT0zPT10LGM9ND09dCxsPTY9PXQscD01PT10fHxsLHY9ZXx8cztyZXR1cm4gZnVuY3Rpb24oZSxzLGgpe2Zvcih2YXIgeSxkLG09aShlKSxnPW8obSksYj1yKHMsaCwzKSxTPXUoZy5sZW5ndGgpLHg9MCx3PW4/dihlLFMpOmY/dihlLDApOnZvaWQgMDtTPng7eCsrKWlmKChwfHx4IGluIGcpJiYoZD1iKHk9Z1t4XSx4LG0pLHQpKWlmKG4pd1t4XT1kO2Vsc2UgaWYoZClzd2l0Y2godCl7Y2FzZSAzOnJldHVybiEwO2Nhc2UgNTpyZXR1cm4geTtjYXNlIDY6cmV0dXJuIHg7Y2FzZSAyOncucHVzaCh5KX1lbHNlIGlmKGMpcmV0dXJuITE7cmV0dXJuIGw/LTE6YXx8Yz9jOnd9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNzMpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiBuZXcocih0KSkoZSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big1KSxvPW4oNDApLGk9bigwKShcInNwZWNpZXNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiBvKHQpJiYoXCJmdW5jdGlvblwiIT10eXBlb2YoZT10LmNvbnN0cnVjdG9yKXx8ZSE9PUFycmF5JiYhbyhlLnByb3RvdHlwZSl8fChlPXZvaWQgMCkscihlKSYmbnVsbD09PShlPWVbaV0pJiYoZT12b2lkIDApKSx2b2lkIDA9PT1lP0FycmF5OmV9fSxmdW5jdGlvbih0LGUsbil7big0MSkoXCJhc3luY0l0ZXJhdG9yXCIpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9bigxKSxvPW4oNiksaT1uKDgpLHU9bigyKSxzPW4oMTkpLGY9big3NikuS0VZLGE9big5KSxjPW4oMjgpLGw9bigzMCkscD1uKDE0KSx2PW4oMCksaD1uKDQyKSx5PW4oNDEpLGQ9big3NyksbT1uKDQwKSxnPW4oMTIpLGI9big1KSxTPW4oMTEpLHg9bigyMyksdz1uKDEzKSxFPW4oMzYpLE89big3OCksaj1uKDc5KSxfPW4oNCksVD1uKDEwKSxBPWouZixQPV8uZixrPU8uZixSPXIuU3ltYm9sLEw9ci5KU09OLEk9TCYmTC5zdHJpbmdpZnksTT12KFwiX2hpZGRlblwiKSxDPXYoXCJ0b1ByaW1pdGl2ZVwiKSxOPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFY9YyhcInN5bWJvbC1yZWdpc3RyeVwiKSxGPWMoXCJzeW1ib2xzXCIpLCQ9YyhcIm9wLXN5bWJvbHNcIiksRD1PYmplY3QucHJvdG90eXBlLEc9XCJmdW5jdGlvblwiPT10eXBlb2YgUixZPXIuUU9iamVjdCxCPSFZfHwhWS5wcm90b3R5cGV8fCFZLnByb3RvdHlwZS5maW5kQ2hpbGQsWD1pJiZhKGZ1bmN0aW9uKCl7cmV0dXJuIDchPUUoUCh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFAodGhpcyxcImFcIix7dmFsdWU6N30pLmF9fSkpLmF9KT9mdW5jdGlvbih0LGUsbil7dmFyIHI9QShELGUpO3ImJmRlbGV0ZSBEW2VdLFAodCxlLG4pLHImJnQhPT1EJiZQKEQsZSxyKX06UCxIPWZ1bmN0aW9uKHQpe3ZhciBlPUZbdF09RShSLnByb3RvdHlwZSk7cmV0dXJuIGUuX2s9dCxlfSxVPUcmJlwic3ltYm9sXCI9PXR5cGVvZiBSLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIFJ9LFc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiB0PT09RCYmVygkLGUsbiksZyh0KSxlPXgoZSwhMCksZyhuKSxvKEYsZSk/KG4uZW51bWVyYWJsZT8obyh0LE0pJiZ0W01dW2VdJiYodFtNXVtlXT0hMSksbj1FKG4se2VudW1lcmFibGU6dygwLCExKX0pKToobyh0LE0pfHxQKHQsTSx3KDEse30pKSx0W01dW2VdPSEwKSxYKHQsZSxuKSk6UCh0LGUsbil9LHE9ZnVuY3Rpb24odCxlKXtnKHQpO2Zvcih2YXIgbixyPWQoZT1TKGUpKSxvPTAsaT1yLmxlbmd0aDtpPm87KVcodCxuPXJbbysrXSxlW25dKTtyZXR1cm4gdH0sej1mdW5jdGlvbih0KXt2YXIgZT1OLmNhbGwodGhpcyx0PXgodCwhMCkpO3JldHVybiEodGhpcz09PUQmJm8oRix0KSYmIW8oJCx0KSkmJighKGV8fCFvKHRoaXMsdCl8fCFvKEYsdCl8fG8odGhpcyxNKSYmdGhpc1tNXVt0XSl8fGUpfSxKPWZ1bmN0aW9uKHQsZSl7aWYodD1TKHQpLGU9eChlLCEwKSx0IT09RHx8IW8oRixlKXx8bygkLGUpKXt2YXIgbj1BKHQsZSk7cmV0dXJuIW58fCFvKEYsZSl8fG8odCxNKSYmdFtNXVtlXXx8KG4uZW51bWVyYWJsZT0hMCksbn19LEs9ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49ayhTKHQpKSxyPVtdLGk9MDtuLmxlbmd0aD5pOylvKEYsZT1uW2krK10pfHxlPT1NfHxlPT1mfHxyLnB1c2goZSk7cmV0dXJuIHJ9LFE9ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49dD09PUQscj1rKG4/JDpTKHQpKSxpPVtdLHU9MDtyLmxlbmd0aD51OykhbyhGLGU9clt1KytdKXx8biYmIW8oRCxlKXx8aS5wdXNoKEZbZV0pO3JldHVybiBpfTtHfHwocygoUj1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBSKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciFcIik7dmFyIHQ9cChhcmd1bWVudHMubGVuZ3RoPjA/YXJndW1lbnRzWzBdOnZvaWQgMCksZT1mdW5jdGlvbihuKXt0aGlzPT09RCYmZS5jYWxsKCQsbiksbyh0aGlzLE0pJiZvKHRoaXNbTV0sdCkmJih0aGlzW01dW3RdPSExKSxYKHRoaXMsdCx3KDEsbikpfTtyZXR1cm4gaSYmQiYmWChELHQse2NvbmZpZ3VyYWJsZTohMCxzZXQ6ZX0pLEgodCl9KS5wcm90b3R5cGUsXCJ0b1N0cmluZ1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2t9KSxqLmY9SixfLmY9VyxuKDQzKS5mPU8uZj1LLG4oMjEpLmY9eixuKDMyKS5mPVEsaSYmIW4oMTgpJiZzKEQsXCJwcm9wZXJ0eUlzRW51bWVyYWJsZVwiLHosITApLGguZj1mdW5jdGlvbih0KXtyZXR1cm4gSCh2KHQpKX0pLHUodS5HK3UuVyt1LkYqIUcse1N5bWJvbDpSfSk7Zm9yKHZhciBaPVwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXNcIi5zcGxpdChcIixcIiksdHQ9MDtaLmxlbmd0aD50dDspdihaW3R0KytdKTtmb3IodmFyIGV0PVQodi5zdG9yZSksbnQ9MDtldC5sZW5ndGg+bnQ7KXkoZXRbbnQrK10pO3UodS5TK3UuRiohRyxcIlN5bWJvbFwiLHtmb3I6ZnVuY3Rpb24odCl7cmV0dXJuIG8oVix0Kz1cIlwiKT9WW3RdOlZbdF09Uih0KX0sa2V5Rm9yOmZ1bmN0aW9uKHQpe2lmKCFVKHQpKXRocm93IFR5cGVFcnJvcih0K1wiIGlzIG5vdCBhIHN5bWJvbCFcIik7Zm9yKHZhciBlIGluIFYpaWYoVltlXT09PXQpcmV0dXJuIGV9LHVzZVNldHRlcjpmdW5jdGlvbigpe0I9ITB9LHVzZVNpbXBsZTpmdW5jdGlvbigpe0I9ITF9fSksdSh1LlMrdS5GKiFHLFwiT2JqZWN0XCIse2NyZWF0ZTpmdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDA9PT1lP0UodCk6cShFKHQpLGUpfSxkZWZpbmVQcm9wZXJ0eTpXLGRlZmluZVByb3BlcnRpZXM6cSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6SixnZXRPd25Qcm9wZXJ0eU5hbWVzOkssZ2V0T3duUHJvcGVydHlTeW1ib2xzOlF9KSxMJiZ1KHUuUyt1LkYqKCFHfHxhKGZ1bmN0aW9uKCl7dmFyIHQ9UigpO3JldHVyblwiW251bGxdXCIhPUkoW3RdKXx8XCJ7fVwiIT1JKHthOnR9KXx8XCJ7fVwiIT1JKE9iamVjdCh0KSl9KSksXCJKU09OXCIse3N0cmluZ2lmeTpmdW5jdGlvbih0KXtmb3IodmFyIGUsbixyPVt0XSxvPTE7YXJndW1lbnRzLmxlbmd0aD5vOylyLnB1c2goYXJndW1lbnRzW28rK10pO2lmKG49ZT1yWzFdLChiKGUpfHx2b2lkIDAhPT10KSYmIVUodCkpcmV0dXJuIG0oZSl8fChlPWZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKGU9bi5jYWxsKHRoaXMsdCxlKSksIVUoZSkpcmV0dXJuIGV9KSxyWzFdPWUsSS5hcHBseShMLHIpfX0pLFIucHJvdG90eXBlW0NdfHxuKDMpKFIucHJvdG90eXBlLEMsUi5wcm90b3R5cGUudmFsdWVPZiksbChSLFwiU3ltYm9sXCIpLGwoTWF0aCxcIk1hdGhcIiwhMCksbChyLkpTT04sXCJKU09OXCIsITApfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxNCkoXCJtZXRhXCIpLG89big1KSxpPW4oNiksdT1uKDQpLmYscz0wLGY9T2JqZWN0LmlzRXh0ZW5zaWJsZXx8ZnVuY3Rpb24oKXtyZXR1cm4hMH0sYT0hbig5KShmdW5jdGlvbigpe3JldHVybiBmKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpfSksYz1mdW5jdGlvbih0KXt1KHQscix7dmFsdWU6e2k6XCJPXCIrICsrcyx3Ont9fX0pfSxsPXQuZXhwb3J0cz17S0VZOnIsTkVFRDohMSxmYXN0S2V5OmZ1bmN0aW9uKHQsZSl7aWYoIW8odCkpcmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIHQ/dDooXCJzdHJpbmdcIj09dHlwZW9mIHQ/XCJTXCI6XCJQXCIpK3Q7aWYoIWkodCxyKSl7aWYoIWYodCkpcmV0dXJuXCJGXCI7aWYoIWUpcmV0dXJuXCJFXCI7Yyh0KX1yZXR1cm4gdFtyXS5pfSxnZXRXZWFrOmZ1bmN0aW9uKHQsZSl7aWYoIWkodCxyKSl7aWYoIWYodCkpcmV0dXJuITA7aWYoIWUpcmV0dXJuITE7Yyh0KX1yZXR1cm4gdFtyXS53fSxvbkZyZWV6ZTpmdW5jdGlvbih0KXtyZXR1cm4gYSYmbC5ORUVEJiZmKHQpJiYhaSh0LHIpJiZjKHQpLHR9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTApLG89bigzMiksaT1uKDIxKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9cih0KSxuPW8uZjtpZihuKWZvcih2YXIgdSxzPW4odCksZj1pLmYsYT0wO3MubGVuZ3RoPmE7KWYuY2FsbCh0LHU9c1thKytdKSYmZS5wdXNoKHUpO3JldHVybiBlfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTEpLG89big0MykuZixpPXt9LnRvU3RyaW5nLHU9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93JiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcz9PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpOltdO3QuZXhwb3J0cy5mPWZ1bmN0aW9uKHQpe3JldHVybiB1JiZcIltvYmplY3QgV2luZG93XVwiPT1pLmNhbGwodCk/ZnVuY3Rpb24odCl7dHJ5e3JldHVybiBvKHQpfWNhdGNoKHQpe3JldHVybiB1LnNsaWNlKCl9fSh0KTpvKHIodCkpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjEpLG89bigxMyksaT1uKDExKSx1PW4oMjMpLHM9big2KSxmPW4oMzQpLGE9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtlLmY9big4KT9hOmZ1bmN0aW9uKHQsZSl7aWYodD1pKHQpLGU9dShlLCEwKSxmKXRyeXtyZXR1cm4gYSh0LGUpfWNhdGNoKHQpe31pZihzKHQsZSkpcmV0dXJuIG8oIXIuZi5jYWxsKHQsZSksdFtlXSl9fSxmdW5jdGlvbih0LGUsbil7Zm9yKHZhciByPW4oMzkpLG89bigxMCksaT1uKDE5KSx1PW4oMSkscz1uKDMpLGY9bigxNSksYT1uKDApLGM9YShcIml0ZXJhdG9yXCIpLGw9YShcInRvU3RyaW5nVGFnXCIpLHA9Zi5BcnJheSx2PXtDU1NSdWxlTGlzdDohMCxDU1NTdHlsZURlY2xhcmF0aW9uOiExLENTU1ZhbHVlTGlzdDohMSxDbGllbnRSZWN0TGlzdDohMSxET01SZWN0TGlzdDohMSxET01TdHJpbmdMaXN0OiExLERPTVRva2VuTGlzdDohMCxEYXRhVHJhbnNmZXJJdGVtTGlzdDohMSxGaWxlTGlzdDohMSxIVE1MQWxsQ29sbGVjdGlvbjohMSxIVE1MQ29sbGVjdGlvbjohMSxIVE1MRm9ybUVsZW1lbnQ6ITEsSFRNTFNlbGVjdEVsZW1lbnQ6ITEsTWVkaWFMaXN0OiEwLE1pbWVUeXBlQXJyYXk6ITEsTmFtZWROb2RlTWFwOiExLE5vZGVMaXN0OiEwLFBhaW50UmVxdWVzdExpc3Q6ITEsUGx1Z2luOiExLFBsdWdpbkFycmF5OiExLFNWR0xlbmd0aExpc3Q6ITEsU1ZHTnVtYmVyTGlzdDohMSxTVkdQYXRoU2VnTGlzdDohMSxTVkdQb2ludExpc3Q6ITEsU1ZHU3RyaW5nTGlzdDohMSxTVkdUcmFuc2Zvcm1MaXN0OiExLFNvdXJjZUJ1ZmZlckxpc3Q6ITEsU3R5bGVTaGVldExpc3Q6ITAsVGV4dFRyYWNrQ3VlTGlzdDohMSxUZXh0VHJhY2tMaXN0OiExLFRvdWNoTGlzdDohMX0saD1vKHYpLHk9MDt5PGgubGVuZ3RoO3krKyl7dmFyIGQsbT1oW3ldLGc9dlttXSxiPXVbbV0sUz1iJiZiLnByb3RvdHlwZTtpZihTJiYoU1tjXXx8cyhTLGMscCksU1tsXXx8cyhTLGwsbSksZlttXT1wLGcpKWZvcihkIGluIHIpU1tkXXx8aShTLGQscltkXSwhMCl9fV0pLmRlZmF1bHR9KTsiLCJpbXBvcnQgQ2F0YWxvZ0Ryb3Bkb3duIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9mbmFzdGlsLXJlZGVzaWduL3NyYy9qcy9jYXRhbG9nLWRyb3Bkb3duL2NhdGFsb2ctZHJvcGRvd25cIjtcbmltcG9ydCBNb2JpbGVNZW51c1N5bmMgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2ZuYXN0aWwtcmVkZXNpZ24vc3JjL2pzL2NhdGFsb2ctZHJvcGRvd24vbW9iaWxlLW1lbnVzLXN5bmNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgeyBkaXNhYmxlQm9keVNjcm9sbCwgZW5hYmxlQm9keVNjcm9sbCB9IGZyb20gXCJib2R5LXNjcm9sbC1sb2NrXCI7XG5cbmNvbnN0IHsgVnVlIH0gPSB3aW5kb3c7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYERPTUNvbnRlbnRMb2FkZWRgLCAoKSA9PiB7XG4gIGNvbnN0IG1lbnVWdWVJbnN0YW5jZSA9IG5ldyBWdWUoe1xuICAgIHJlbmRlcjogKGgpID0+IGgoTWVudSksXG4gIH0pO1xuXG4gIGNvbnN0IHBvcFVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tLWNhdGFsb2ctZHJvcGRvd25gKTtcblxuICAvLyBTZXR0aW5nIGFjdGlvbnMgZm9yIG9wZW5pbmcgLyBjbG9zaW5nIGJvb3RzdHJhcCBkcm9wZG93blxuICBjb25zdCBjYXRhbG9nRHJvcGRvd24gPSBuZXcgQ2F0YWxvZ0Ryb3Bkb3duKFxuICAgIGAuanMtY2F0YWxvZy1tb2JpbGUtZHJvcGRvd24td3JhcHBlcmAsXG4gICAgYCNkcm9wZG93bk1vYmlsZU1lbnVCdXR0b25gLFxuICAgICgpID0+IGRpc2FibGVCb2R5U2Nyb2xsKHBvcFVwRWxlbWVudCksXG4gICAgKCkgPT4gZW5hYmxlQm9keVNjcm9sbChwb3BVcEVsZW1lbnQpXG4gICk7XG5cbiAgICBjYXRhbG9nRHJvcGRvd24uaW5pdCgpO1xuICAgIG1lbnVWdWVJbnN0YW5jZS4kbW91bnQoYCN2dWUtbmF2aWdhdGlvbmApO1xuXG59KTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOGM4NTk2NSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjhjODU5NjUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjhjODU5NjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjhjODU5NjUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjhjODU5NjUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjhjODU5NjUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4Yzg1OTY1JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db250YWN0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI0NDMwODImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29udGFjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db250YWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9sb2NhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjQ0MzA4MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjQ0MzA4MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjQ0MzA4MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ29udGFjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNDQzMDgyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNDQzMDgyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9Db250YWN0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnRhY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db250YWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29udGFjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNDQzMDgyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Hb0JhY2tCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxNDVhNzI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dvQmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dvQmFja0J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9sb2NhbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3MTQ1YTcyNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MTQ1YTcyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MTQ1YTcyNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR29CYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTQ1YTcyNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MTQ1YTcyNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvR29CYWNrQnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR29CYWNrQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Hb0JhY2tCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0dvQmFja0J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzE0NWE3MjYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0l0ZW1JY29uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjIwNWQxOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JdGVtSWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0l0ZW1JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wcm9mbmFzdGlsL2xvY2FsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRiMjA1ZDE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRiMjA1ZDE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRiMjA1ZDE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JdGVtSWNvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGIyMDVkMTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGIyMDVkMTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL0l0ZW1JY29uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1JY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JdGVtSWNvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGIyMDVkMTgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2VzTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjcwZTM2ZjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGFnZXNNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFnZXNNZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9wcm9mbmFzdGlsL2xvY2FsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI3MGUzNmYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI3MGUzNmYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI3MGUzNmYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlc01lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3MGUzNmYyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI3MGUzNmYyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ0ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS92dWUtbmF2aWdhdGlvbi9zcmMvanMvY29tcG9uZW50cy9QYWdlc01lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlc01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VzTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZXNNZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzBlMzZmMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvamVjdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhOTk5NzM0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2plY3RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvamVjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZWE5OTk3MzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZWE5OTk3MzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZWE5OTk3MzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Byb2plY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYTk5OTczNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlYTk5OTczNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvUHJvamVjdHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9qZWN0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvamVjdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYTk5OTczNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU29jaWFsTGlua3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlN2NjYTEwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NvY2lhbExpbmtzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU29jaWFsTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGU3Y2NhMTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGU3Y2NhMTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGU3Y2NhMTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NvY2lhbExpbmtzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZTdjY2ExMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZTdjY2ExMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU29jaWFsTGlua3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tb2NpYWxMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29jaWFsTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lhbExpbmtzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZTdjY2ExMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWVudUl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg4ODZhM2Q0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1lbnVJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWVudUl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODg4NmEzZDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODg4NmEzZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODg4NmEzZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1lbnVJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ODg2YTNkNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4ODg2YTNkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvdnVlLW5hdmlnYXRpb24vc3JjL2pzL2NvbXBvbmVudHMvU3VibWVudUl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtZW51SXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWVudUl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1lbnVJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ODg2YTNkNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlckJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzYzNzU3NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL3Byb2ZuYXN0aWwvbG9jYWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZTM2Mzc1NzQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTM2Mzc1NzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTM2Mzc1NzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJCbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTM2Mzc1NzQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTM2Mzc1NzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInRlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L3Z1ZS1uYXZpZ2F0aW9uL3NyYy9qcy9jb21wb25lbnRzL1VzZXJCbG9jay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJCbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlckJsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyQmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzNjM3NTc0JlwiIiwiY29uc3QgQk9EWV9PVkVSTEFZX0NMQVNTTkFNRSA9IGBtZW51LWlzLW9wZW5lZGA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbnRhaW5lclNlbGVjdG9yLFxuICAgIHRvZ2dsZXJTZWxlY3RvcixcbiAgICBvblNob3dDYWxsYmFjayA9ICgpID0+IHt9LFxuICAgIG9uSGlkZUNhbGxiYWNrID0gKCkgPT4ge31cbiAgKSB7XG4gICAgY29uc29sZS5sb2coY29udGFpbmVyU2VsZWN0b3IpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9jb250YWluZXJFbGVtZW50KTtcbiAgICB0aGlzLl9vcGVuQnV0dG9uRWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRvZ2dsZXJTZWxlY3RvclxuICAgICk7XG4gICAgdGhpcy5fZHJvcGRvd25FbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5qcy1jYXRhbG9nLWRyb3Bkb3duYFxuICAgICk7XG4gICAgdGhpcy5fb25TaG93Q2FsbGJhY2sgPSBvblNob3dDYWxsYmFjaztcbiAgICB0aGlzLl9vbkhpZGVDYWxsYmFjayA9IG9uSGlkZUNhbGxiYWNrO1xuXG4gICAgdGhpcy5fb25TaG93ID0gdGhpcy5fb25TaG93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25IaWRlID0gdGhpcy5fb25IaWRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBfb25TaG93KCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChCT0RZX09WRVJMQVlfQ0xBU1NOQU1FKTtcblxuICAgIHRoaXMuX29uU2hvd0NhbGxiYWNrKCk7XG4gIH1cblxuICBfb25IaWRlKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShCT0RZX09WRVJMQVlfQ0xBU1NOQU1FKTtcblxuICAgIHRoaXMuX29uSGlkZUNhbGxiYWNrKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5fb3BlbkJ1dHRvbkVsZW1lbnQuY2xpY2soKTtcbiAgfVxuXG4gIF9zZXRIYW5kbGVycygpIHtcbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYHNob3duLmJzLmRyb3Bkb3duYCwgdGhpcy5fb25TaG93KTtcbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGhpZGRlbi5icy5kcm9wZG93bmAsIHRoaXMuX29uSGlkZSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX3NldEhhbmRsZXJzKCk7XG5cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9iaWxlTWVudXNTeW5jIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjYXRhbG9nTWVudUluc3RhbmNlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2dWVNZW51SW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9uUGFnZU1lbnVTZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9wVXBNZW51U2VsZWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhdGFsb2dNZW51SW5zdGFuY2UsIHZ1ZU1lbnVJbnN0YW5jZSwgb25QYWdlTWVudVNlbGVjdG9yLCBwb3BVcE1lbnVTZWxlY3Rvcikge1xuICAgIHRoaXMuX2NhdGFsb2dNZW51SW5zdGFuY2UgPSBjYXRhbG9nTWVudUluc3RhbmNlO1xuICAgIHRoaXMuX3Z1ZU1lbnVJbnN0YW5jZSA9IHZ1ZU1lbnVJbnN0YW5jZTtcblxuICAgIHRoaXMuX29uUGFnZU1lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvblBhZ2VNZW51U2VsZWN0b3IpO1xuICAgIHRoaXMuX3BvcFVwTWVudUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcFVwTWVudVNlbGVjdG9yKTtcblxuICAgIHRoaXMuX29uUGFnZU1lbnVMaW5rRWxlbWVudHMgPSB0aGlzLl9vblBhZ2VNZW51RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYC5qcy1zeW5jLXdpdGgtcG9wdXBgXG4gICAgKTtcblxuICAgIHRoaXMuX3BvcFVwVG9nZ2xlckVsZW1lbnQgPSB0aGlzLl9wb3BVcE1lbnVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtYnMtdG9nZ2xlXWBcbiAgICApO1xuXG4gICAgdGhpcy5fb25MaW5rQ2xpY2sgPSB0aGlzLl9vbkxpbmtDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX29wZW5Qb3BVcE1lbnUoKSB7XG4gICAgdGhpcy5fY2F0YWxvZ01lbnVJbnN0YW5jZS50b2dnbGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBzZWN0aW9uIGluIHRoZSBwb3B1cCBjYXRhbG9nIG1lbnUgYnkgaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRhcmdldFNlY3Rpb25JbmRleFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29wZW5TZWN0aW9uKHRhcmdldFNlY3Rpb25JbmRleCkge1xuICAgIGNvbnN0IFt2dWVNZW51Q29tcG9uZW50XSA9IHRoaXMuX3Z1ZU1lbnVJbnN0YW5jZS4kY2hpbGRyZW47XG4gICAgY29uc3QgY2F0YWxvZ1NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvLyBuYXZpZ2F0ZShbbWFpblNlY3Rpb25JbmRleCwgc3ViU2VjdGlvbkluZGV4LCBzdWJTdWJTZWN0aW9uSW5kZXggLi4uLl0pXG4gICAgdnVlTWVudUNvbXBvbmVudC5uYXZpZ2F0ZShbY2F0YWxvZ1NlY3Rpb25JbmRleCwgdGFyZ2V0U2VjdGlvbkluZGV4XSk7XG4gIH1cblxuICBfb25MaW5rQ2xpY2soZXZ0KSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBPcGVuIG1lbnVcbiAgICB0aGlzLl9vcGVuUG9wVXBNZW51KCk7XG5cbiAgICAvLyBPcGVuIGNsaWNrZWQgc2VjdGlvbiBpbiBwb3B1cG1lbnVcbiAgICBjb25zdCB0YXJnZXRTZWN0aW9uSW5kZXggPSBwYXJzZUludChldnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4KTtcbiAgICB0aGlzLl9vcGVuU2VjdGlvbih0YXJnZXRTZWN0aW9uSW5kZXgpO1xuICB9XG5cbiAgX3NldEhhbmRsZXJzKCkge1xuICAgIHRoaXMuX29uUGFnZU1lbnVMaW5rRWxlbWVudHMuZm9yRWFjaCgobGlua0VsZW1lbnQpID0+XG4gICAgICBsaW5rRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMuX29uTGlua0NsaWNrKVxuICAgICk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX3NldEhhbmRsZXJzKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=