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
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/.default/components/bitrix/catalog.smart.filter/modal-wrapped-filter/src/js/app.js");
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

/***/ "./templates/.default/components/bitrix/catalog.smart.filter/.default/src/js/range-input.js":
/*!**************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/catalog.smart.filter/.default/src/js/range-input.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangeInput; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'nouislider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var RangeInput = /*#__PURE__*/function () {
  function RangeInput(sliderSelector) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RangeInput);

    this._containerElement = document.querySelector(sliderSelector);
    this._inputMinElement = this._containerElement.querySelector(".js-range-min");
    this._inputMaxElement = this._containerElement.querySelector(".js-range-max");
    this._sliderElement = this._containerElement.querySelector(".js-range-slider");
    this._minValue = +this._sliderElement.dataset.min;
    this._maxValue = +this._sliderElement.dataset.max;
    this._step = +this._sliderElement.dataset.step;
    this._onSliderChange = this._onSliderChange.bind(this);
    this._onMinChange = this._onMinChange.bind(this);
    this._onMaxChange = this._onMaxChange.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RangeInput, [{
    key: "_onSliderChange",
    value: function _onSliderChange(values) {
      var _values = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(values, 2),
          min = _values[0],
          max = _values[1];

      this._inputMinElement.value = Math.trunc(min);
      this._inputMaxElement.value = Math.trunc(max);
    }
  }, {
    key: "_onMinChange",
    value: function _onMinChange(evt) {
      var value = evt.target.value;

      this._sliderElement.noUiSlider.set([Math.round(value), null]);
    }
  }, {
    key: "_onMaxChange",
    value: function _onMaxChange(evt) {
      var value = evt.target.value;

      this._sliderElement.noUiSlider.set([null, Math.round(value)]);
    }
  }, {
    key: "_setHandlers",
    value: function _setHandlers() {
      this._sliderElement.noUiSlider.on("update", this._onSliderChange);

      this._inputMinElement.addEventListener("change", this._onMinChange);

      this._inputMaxElement.addEventListener("change", this._onMaxChange);
    }
  }, {
    key: "init",
    value: function init() {
      !(function webpackMissingModule() { var e = new Error("Cannot find module 'nouislider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).create(this._sliderElement, {
        start: [this._minValue, this._maxValue],
        connect: true,
        range: {
          min: this._minValue,
          max: this._maxValue
        },
        step: this._step,
        tooltips: true,
        format: {
          to: function to(value) {
            return Math.trunc(value);
          },
          from: function from(value) {
            return Math.trunc(value);
          }
        }
      });

      this._setHandlers();
    }
  }]);

  return RangeInput;
}();



/***/ }),

/***/ "./templates/.default/components/bitrix/catalog.smart.filter/modal-wrapped-filter/src/js/app.js":
/*!******************************************************************************************************!*\
  !*** ./templates/.default/components/bitrix/catalog.smart.filter/modal-wrapped-filter/src/js/app.js ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_src_js_range_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../.default/src/js/range-input */ "./templates/.default/components/bitrix/catalog.smart.filter/.default/src/js/range-input.js");

document.addEventListener("DOMContentLoaded", function () {
  new _default_src_js_range_input__WEBPACK_IMPORTED_MODULE_0__["default"](".js-range-filter-mobile").init();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvY2F0YWxvZy5zbWFydC5maWx0ZXIvLmRlZmF1bHQvc3JjL2pzL3JhbmdlLWlucHV0LmpzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9jYXRhbG9nLnNtYXJ0LmZpbHRlci9tb2RhbC13cmFwcGVkLWZpbHRlci9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbIlJhbmdlSW5wdXQiLCJzbGlkZXJTZWxlY3RvciIsIl9jb250YWluZXJFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX2lucHV0TWluRWxlbWVudCIsIl9pbnB1dE1heEVsZW1lbnQiLCJfc2xpZGVyRWxlbWVudCIsIl9taW5WYWx1ZSIsImRhdGFzZXQiLCJtaW4iLCJfbWF4VmFsdWUiLCJtYXgiLCJfc3RlcCIsInN0ZXAiLCJfb25TbGlkZXJDaGFuZ2UiLCJiaW5kIiwiX29uTWluQ2hhbmdlIiwiX29uTWF4Q2hhbmdlIiwidmFsdWVzIiwidmFsdWUiLCJNYXRoIiwidHJ1bmMiLCJldnQiLCJ0YXJnZXQiLCJub1VpU2xpZGVyIiwic2V0Iiwicm91bmQiLCJvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGUiLCJzdGFydCIsImNvbm5lY3QiLCJyYW5nZSIsInRvb2x0aXBzIiwiZm9ybWF0IiwidG8iLCJmcm9tIiwiX3NldEhhbmRsZXJzIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUEs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Q0FGRCxFIiwiZmlsZSI6ImxvY2FsL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9jYXRhbG9nLnNtYXJ0LmZpbHRlci9tb2RhbC13cmFwcGVkLWZpbHRlci9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvY2F0YWxvZy5zbWFydC5maWx0ZXIvbW9kYWwtd3JhcHBlZC1maWx0ZXIvc3JjL2pzL2FwcC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImltcG9ydCBub1VpU2xpZGVyIGZyb20gXCJub3Vpc2xpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlSW5wdXQge1xuICBjb25zdHJ1Y3RvcihzbGlkZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlclNlbGVjdG9yKTtcbiAgICB0aGlzLl9pbnB1dE1pbkVsZW1lbnQgPSB0aGlzLl9jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmpzLXJhbmdlLW1pbmBcbiAgICApO1xuICAgIHRoaXMuX2lucHV0TWF4RWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuanMtcmFuZ2UtbWF4YFxuICAgICk7XG4gICAgdGhpcy5fc2xpZGVyRWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuanMtcmFuZ2Utc2xpZGVyYFxuICAgICk7XG5cbiAgICB0aGlzLl9taW5WYWx1ZSA9ICt0aGlzLl9zbGlkZXJFbGVtZW50LmRhdGFzZXQubWluO1xuICAgIHRoaXMuX21heFZhbHVlID0gK3RoaXMuX3NsaWRlckVsZW1lbnQuZGF0YXNldC5tYXg7XG4gICAgdGhpcy5fc3RlcCA9ICt0aGlzLl9zbGlkZXJFbGVtZW50LmRhdGFzZXQuc3RlcDtcblxuICAgIHRoaXMuX29uU2xpZGVyQ2hhbmdlID0gdGhpcy5fb25TbGlkZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1pbkNoYW5nZSA9IHRoaXMuX29uTWluQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25NYXhDaGFuZ2UgPSB0aGlzLl9vbk1heENoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX29uU2xpZGVyQ2hhbmdlKHZhbHVlcykge1xuICAgIGNvbnN0IFttaW4sIG1heF0gPSB2YWx1ZXM7XG4gICAgdGhpcy5faW5wdXRNaW5FbGVtZW50LnZhbHVlID0gTWF0aC50cnVuYyhtaW4pO1xuICAgIHRoaXMuX2lucHV0TWF4RWxlbWVudC52YWx1ZSA9IE1hdGgudHJ1bmMobWF4KTtcbiAgfVxuXG4gIF9vbk1pbkNoYW5nZShldnQpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldnQudGFyZ2V0O1xuICAgIHRoaXMuX3NsaWRlckVsZW1lbnQubm9VaVNsaWRlci5zZXQoW01hdGgucm91bmQodmFsdWUpLCBudWxsXSk7XG4gIH1cblxuICBfb25NYXhDaGFuZ2UoZXZ0KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZ0LnRhcmdldDtcbiAgICB0aGlzLl9zbGlkZXJFbGVtZW50Lm5vVWlTbGlkZXIuc2V0KFtudWxsLCBNYXRoLnJvdW5kKHZhbHVlKV0pO1xuICB9XG5cbiAgX3NldEhhbmRsZXJzKCkge1xuICAgIHRoaXMuX3NsaWRlckVsZW1lbnQubm9VaVNsaWRlci5vbihgdXBkYXRlYCwgdGhpcy5fb25TbGlkZXJDaGFuZ2UpO1xuICAgIHRoaXMuX2lucHV0TWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGBjaGFuZ2VgLCB0aGlzLl9vbk1pbkNoYW5nZSk7XG4gICAgdGhpcy5faW5wdXRNYXhFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNoYW5nZWAsIHRoaXMuX29uTWF4Q2hhbmdlKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbm9VaVNsaWRlci5jcmVhdGUodGhpcy5fc2xpZGVyRWxlbWVudCwge1xuICAgICAgc3RhcnQ6IFt0aGlzLl9taW5WYWx1ZSwgdGhpcy5fbWF4VmFsdWVdLFxuICAgICAgY29ubmVjdDogdHJ1ZSxcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgIG1pbjogdGhpcy5fbWluVmFsdWUsXG4gICAgICAgIG1heDogdGhpcy5fbWF4VmFsdWUsXG4gICAgICB9LFxuICAgICAgc3RlcDogdGhpcy5fc3RlcCxcbiAgICAgIHRvb2x0aXBzOiB0cnVlLFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIHRvOiAodmFsdWUpID0+IE1hdGgudHJ1bmModmFsdWUpLFxuICAgICAgICBmcm9tOiAodmFsdWUpID0+IE1hdGgudHJ1bmModmFsdWUpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuX3NldEhhbmRsZXJzKCk7XG4gIH1cbn1cbiIsImltcG9ydCBSYW5nZUlucHV0IGZyb20gXCIuLi8uLi8uLi8uZGVmYXVsdC9zcmMvanMvcmFuZ2UtaW5wdXRcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgRE9NQ29udGVudExvYWRlZGAsICgpID0+IHtcbiAgbmV3IFJhbmdlSW5wdXQoYC5qcy1yYW5nZS1maWx0ZXItbW9iaWxlYCkuaW5pdCgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9