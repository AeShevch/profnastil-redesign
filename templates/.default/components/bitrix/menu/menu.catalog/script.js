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
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/.default/components/bitrix/menu/menu.catalog/src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./templates/.default/components/bitrix/menu/menu.catalog/src/js/app.js":
/*!******************************************************************************!*\
  !*** ./templates/.default/components/bitrix/menu/menu.catalog/src/js/app.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profnastil_redesign_src_js_catalog_dropdown_catalog_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown */ "./templates/profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown.js");

document.addEventListener("DOMContentLoaded", function () {
  new _profnastil_redesign_src_js_catalog_dropdown_catalog_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"](".js-catalog-dropdown-wrapper", "#dropdownMenuButton").init();
});

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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzLy5kZWZhdWx0L2NvbXBvbmVudHMvYml0cml4L21lbnUvbWVudS5jYXRhbG9nL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL3Byb2ZuYXN0aWwtcmVkZXNpZ24vc3JjL2pzL2NhdGFsb2ctZHJvcGRvd24vY2F0YWxvZy1kcm9wZG93bi5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJDYXRhbG9nRHJvcGRvd24iLCJpbml0IiwiQk9EWV9PVkVSTEFZX0NMQVNTTkFNRSIsImNvbnRhaW5lclNlbGVjdG9yIiwidG9nZ2xlclNlbGVjdG9yIiwib25TaG93Q2FsbGJhY2siLCJvbkhpZGVDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJfY29udGFpbmVyRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfb3BlbkJ1dHRvbkVsZW1lbnQiLCJfZHJvcGRvd25FbGVtZW50IiwiX29uU2hvd0NhbGxiYWNrIiwiX29uSGlkZUNhbGxiYWNrIiwiX29uU2hvdyIsImJpbmQiLCJfb25IaWRlIiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNsaWNrIiwiX3NldEhhbmRsZXJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULHFCQUE4QyxZQUFNO0FBQ2xELE1BQUlDLHFHQUFKLHdEQUdFQyxJQUhGO0FBSUQsQ0FMRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLElBQU1DLHNCQUFzQixtQkFBNUI7O0lBRXFCRixlO0FBQ25CLDJCQUNFRyxpQkFERixFQUVFQyxlQUZGLEVBS0U7QUFBQSxRQUZBQyxjQUVBLHVFQUZpQixZQUFNLENBQUUsQ0FFekI7QUFBQSxRQURBQyxjQUNBLHVFQURpQixZQUFNLENBQUUsQ0FDekI7O0FBQUE7O0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxpQkFBWjtBQUNBLFNBQUtNLGlCQUFMLEdBQXlCWCxRQUFRLENBQUNZLGFBQVQsQ0FBdUJQLGlCQUF2QixDQUF6QjtBQUNBSSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxpQkFBakI7QUFDQSxTQUFLRSxrQkFBTCxHQUEwQixLQUFLRixpQkFBTCxDQUF1QkMsYUFBdkIsQ0FDeEJOLGVBRHdCLENBQTFCO0FBR0EsU0FBS1EsZ0JBQUwsR0FBd0IsS0FBS0gsaUJBQUwsQ0FBdUJDLGFBQXZCLHdCQUF4QjtBQUdBLFNBQUtHLGVBQUwsR0FBdUJSLGNBQXZCO0FBQ0EsU0FBS1MsZUFBTCxHQUF1QlIsY0FBdkI7QUFFQSxTQUFLUyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhRCxJQUFiLENBQWtCLElBQWxCLENBQWY7QUFDRDs7Ozs4QkFFUztBQUNSbEIsY0FBUSxDQUFDb0IsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QmxCLHNCQUE1Qjs7QUFFQSxXQUFLVyxlQUFMO0FBQ0Q7Ozs4QkFFUztBQUNSZixjQUFRLENBQUNvQixJQUFULENBQWNDLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCbkIsc0JBQS9COztBQUVBLFdBQUtZLGVBQUw7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS0gsa0JBQUwsQ0FBd0JXLEtBQXhCO0FBQ0Q7OzttQ0FFYztBQUNiLFdBQUtiLGlCQUFMLENBQXVCVixnQkFBdkIsc0JBQTZELEtBQUtnQixPQUFsRTs7QUFDQSxXQUFLTixpQkFBTCxDQUF1QlYsZ0JBQXZCLHVCQUE4RCxLQUFLa0IsT0FBbkU7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS00sWUFBTDtBQUVEIiwiZmlsZSI6ImxvY2FsL3RlbXBsYXRlcy8uZGVmYXVsdC9jb21wb25lbnRzL2JpdHJpeC9tZW51L21lbnUuY2F0YWxvZy9zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvcHJvZm5hc3RpbC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZW1wbGF0ZXMvLmRlZmF1bHQvY29tcG9uZW50cy9iaXRyaXgvbWVudS9tZW51LmNhdGFsb2cvc3JjL2pzL2FwcC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiaW1wb3J0IENhdGFsb2dEcm9wZG93biBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvZm5hc3RpbC1yZWRlc2lnbi9zcmMvanMvY2F0YWxvZy1kcm9wZG93bi9jYXRhbG9nLWRyb3Bkb3duXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYERPTUNvbnRlbnRMb2FkZWRgLCAoKSA9PiB7XG4gIG5ldyBDYXRhbG9nRHJvcGRvd24oXG4gICAgYC5qcy1jYXRhbG9nLWRyb3Bkb3duLXdyYXBwZXJgLFxuICAgIGAjZHJvcGRvd25NZW51QnV0dG9uYFxuICApLmluaXQoKTtcbn0pO1xuIiwiY29uc3QgQk9EWV9PVkVSTEFZX0NMQVNTTkFNRSA9IGBtZW51LWlzLW9wZW5lZGA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbnRhaW5lclNlbGVjdG9yLFxuICAgIHRvZ2dsZXJTZWxlY3RvcixcbiAgICBvblNob3dDYWxsYmFjayA9ICgpID0+IHt9LFxuICAgIG9uSGlkZUNhbGxiYWNrID0gKCkgPT4ge31cbiAgKSB7XG4gICAgY29uc29sZS5sb2coY29udGFpbmVyU2VsZWN0b3IpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9jb250YWluZXJFbGVtZW50KTtcbiAgICB0aGlzLl9vcGVuQnV0dG9uRWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRvZ2dsZXJTZWxlY3RvclxuICAgICk7XG4gICAgdGhpcy5fZHJvcGRvd25FbGVtZW50ID0gdGhpcy5fY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5qcy1jYXRhbG9nLWRyb3Bkb3duYFxuICAgICk7XG4gICAgdGhpcy5fb25TaG93Q2FsbGJhY2sgPSBvblNob3dDYWxsYmFjaztcbiAgICB0aGlzLl9vbkhpZGVDYWxsYmFjayA9IG9uSGlkZUNhbGxiYWNrO1xuXG4gICAgdGhpcy5fb25TaG93ID0gdGhpcy5fb25TaG93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25IaWRlID0gdGhpcy5fb25IaWRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBfb25TaG93KCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChCT0RZX09WRVJMQVlfQ0xBU1NOQU1FKTtcblxuICAgIHRoaXMuX29uU2hvd0NhbGxiYWNrKCk7XG4gIH1cblxuICBfb25IaWRlKCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShCT0RZX09WRVJMQVlfQ0xBU1NOQU1FKTtcblxuICAgIHRoaXMuX29uSGlkZUNhbGxiYWNrKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5fb3BlbkJ1dHRvbkVsZW1lbnQuY2xpY2soKTtcbiAgfVxuXG4gIF9zZXRIYW5kbGVycygpIHtcbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYHNob3duLmJzLmRyb3Bkb3duYCwgdGhpcy5fb25TaG93KTtcbiAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGhpZGRlbi5icy5kcm9wZG93bmAsIHRoaXMuX29uSGlkZSk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX3NldEhhbmRsZXJzKCk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==