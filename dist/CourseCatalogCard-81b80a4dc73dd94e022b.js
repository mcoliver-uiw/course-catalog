/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@ellucian/react-design-system/core"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@ellucian/react-design-system/core"], factory);
	else if(typeof exports === 'object')
		exports["CourseCatalogCard"] = factory(require("react"), require("@ellucian/react-design-system/core"));
	else
		root["CourseCatalogCard"] = factory(root["react"], root["@ellucian/react-design-system/core"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__ellucian_react_design_system_core__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzPzVhNDMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUIsbUJBQU8sQ0FBQyxxRkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZS1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanM/MjIzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZS1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzPzNjOTYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcz85NzBiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/classCallCheck.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZS1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanM/NWJjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/createClass.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz85NTIzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/defineProperty.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2UtY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzPzM2YzYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcz9lZDZkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/inherits.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanM/MTFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/iterableToArray.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2UtY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzPzA2NzYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJELDRCQUE0QixtQkFBTyxDQUFDLCtGQUF5Qjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZS1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcz82YjU4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2UtY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzPzRhNGIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0IsbUJBQU8sQ0FBQyx1RkFBcUI7O0FBRXJELHNCQUFzQixtQkFBTyxDQUFDLG1GQUFtQjs7QUFFakQsaUNBQWlDLG1CQUFPLENBQUMseUdBQThCOztBQUV2RSx3QkFBd0IsbUJBQU8sQ0FBQyx1RkFBcUI7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZS1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanM/NDQ4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/toConsumableArray.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanM/NzAzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/typeof.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUIsbUJBQU8sQ0FBQyxxRkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2UtY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzPzY2MTMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\n");

/***/ }),

/***/ "./node_modules/@ellucian/experience-extension/lib/enableLazyLoading.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ellucian/experience-extension/lib/enableLazyLoading.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// getExtensionPublicPath will be available in the 'global' context of an extension in Experience\nif (typeof getExtensionPublicPath === 'function') {\n    // eslint-disable-next-line camelcase, no-undef, no-alert\n    __webpack_require__.p = getExtensionPublicPath();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGVsbHVjaWFuL2V4cGVyaWVuY2UtZXh0ZW5zaW9uL2xpYi9lbmFibGVMYXp5TG9hZGluZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFCQUF1QjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZS1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL0BlbGx1Y2lhbi9leHBlcmllbmNlLWV4dGVuc2lvbi9saWIvZW5hYmxlTGF6eUxvYWRpbmcuanM/MjAyMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZXRFeHRlbnNpb25QdWJsaWNQYXRoIHdpbGwgYmUgYXZhaWxhYmxlIGluIHRoZSAnZ2xvYmFsJyBjb250ZXh0IG9mIGFuIGV4dGVuc2lvbiBpbiBFeHBlcmllbmNlXG5pZiAodHlwZW9mIGdldEV4dGVuc2lvblB1YmxpY1BhdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlLCBuby11bmRlZiwgbm8tYWxlcnRcbiAgICBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IGdldEV4dGVuc2lvblB1YmxpY1BhdGgoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ellucian/experience-extension/lib/enableLazyLoading.js\n");

/***/ }),

/***/ "./src/cards/CourseCatalogCard.jsx":
/*!*****************************************!*\
  !*** ./src/cards/CourseCatalogCard.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ellucian/react-design-system/core */ \"@ellucian/react-design-system/core\");\n/* harmony import */ var _ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n// const customId = 'ControlledDropdownExample';\nvar options = [{\n  label: '2023-2024 - Undergraduate',\n  path: '/2023-2024/Undergraduate-Catalog/Course-Descriptions'\n}, {\n  label: '2022-2023 - Undergraduate',\n  path: '/2022-2023/Undergraduate-Catalog/Course-Descriptions'\n}, {\n  label: '2021-2022 - Undergraduate',\n  path: '/2021-2022/Undergraduate-Catalog/Course-Descriptions'\n}, {\n  label: '2020-2021 - Undergraduate',\n  path: '/2020-2021/Catalog/X-Main-Campus-Courses'\n}];\nvar courseOptions = [{\n  label: 'Business Accounting',\n  path: ''\n}, {\n  label: '3D Aminmation and Game Design',\n  path: ''\n}, {\n  label: 'Anthropology',\n  path: ''\n}, {\n  label: 'Arabic',\n  path: ''\n}, {\n  label: 'Art History',\n  path: ''\n}, {\n  label: 'Art',\n  path: ''\n}, {\n  label: 'Athletic Training Education',\n  path: ''\n}, {\n  label: 'Business Finance',\n  path: ''\n}, {\n  label: 'International Business',\n  path: ''\n}, {\n  label: 'Biology',\n  path: ''\n}, {\n  label: 'Business Law',\n  path: ''\n}, {\n  label: 'Business Management Decision Systems',\n  path: ''\n}, {\n  label: 'Business Management',\n  path: ''\n}, {\n  label: 'Business Marketing',\n  path: ''\n}, {\n  label: 'Business Professional Golf Management',\n  path: ''\n}, {\n  label: 'Music',\n  path: '/MUSI-Honors'\n}];\nvar CourseCatalog = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CourseCatalog, _Component);\n  var _super = _createSuper(CourseCatalog);\n  function CourseCatalog() {\n    var _this;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CourseCatalog);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(args));\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"state\", {\n      coursesGroups: [],\n      selectedOption: '',\n      selectedCourse: '',\n      open: false\n    });\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleCatalogChange\", function (event) {\n      var selectedPath = event.target.value || event.detail.value;\n      _this.setState({\n        selectedOption: selectedPath\n      }, _this.fetchData);\n    });\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleCourseChange\", function (event) {\n      var selectedCoursePath = event.target.value || event.detail.value;\n      _this.setState({\n        selectedCourse: selectedCoursePath\n      }, _this.fetchData);\n    });\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"fetchData\", function () {\n      var url = \"https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word\".concat(_this.state.selectedOption).concat(_this.state.selectedCourse, \"&format=jsonp\");\n      _this.jsonp(url, 'handleData');\n      console.log('Fetching from URL:', url);\n    });\n    // handleChange = (event) => {\n    //     console.log('handleChange triggered', event);\n    //     const selectedPath = event.target.value || event.detail.value;\n    //     console.log('selectedPath', selectedPath);\n    //     this.setState({\n    //         selectedOption: selectedPath,\n    //         coursesGroups: []  // Clear previous data\n    //     }, () => {\n    //         const url = `https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word${selectedPath}/MUSI-Honors&format=jsonp`;\n    //         this.jsonp(url, 'handleData');\n    //         console.log('Fetching from URL:', url);\n    //     });\n    // };\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleData\", function (data) {\n      var coursesFolder = data.catalog.Courses_Folder.Courses_Folder;\n      var courses = [];\n      coursesFolder.forEach(function (folderItem) {\n        folderItem.Course.forEach(function (courseItem) {\n          courses.push(courseItem);\n        });\n      });\n      _this.setState(function (prevState) {\n        return {\n          coursesGroups: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prevState.coursesGroups), [courses, {\n            courses: courses,\n            label: _this.state.selectedOption\n          }])\n        };\n      });\n    });\n    return _this;\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CourseCatalog, [{\n    key: \"jsonp\",\n    value: function jsonp(url, callbackName) {\n      var script = document.createElement('script');\n      script.src = \"\".concat(url, \"&callback=\").concat(callbackName);\n      document.body.appendChild(script);\n      // Ensure the script gets removed after it's used to prevent pollution.\n      script.onload = function () {\n        document.body.removeChild(script);\n      };\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      window.handleData = this.handleData;\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Clean up to avoid any potential memory leaks.\n      window.handleData = null;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"div\", {\n        id: \"courses-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {\n        label: \"catalog\",\n        onChange: this.handleCatalogChange,\n        value: this.state.selectedOption,\n        open: this.state.open,\n        onOpen: function onOpen(event) {\n          console.log('*** onOpen handler called ***', event);\n          _this2.setState({\n            open: true\n          });\n        },\n        onClose: function onClose(event) {\n          console.log('*** onClose handler called ***', event);\n          _this2.setState({\n            open: false\n          });\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.DropdownItem, {\n        label: \"Select an Catalog\",\n        value: \"\",\n        disabled: true\n      }), options.map(function (option) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.DropdownItem, {\n          key: option.label,\n          label: option.label,\n          value: option.path\n        });\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {\n        label: \"courses\",\n        onChange: this.handleCourseChange,\n        value: this.state.selectedCourse,\n        open: this.state.open,\n        onOpen: function onOpen(event) {\n          console.log('*** onOpen handler called ***', event);\n          _this2.setState({\n            open: true\n          });\n        },\n        onClose: function onClose(event) {\n          console.log('*** onClose handler called ***', event);\n          _this2.setState({\n            open: false\n          });\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.DropdownItem, {\n        label: \"Select an Course\",\n        value: \"\",\n        disabled: true\n      }), courseOptions.map(function (course) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.DropdownItem, {\n          key: course.label,\n          label: course.label,\n          value: course.path\n        });\n      })), this.state.coursesGroups.map(function (group, courses, index) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"div\", {\n          key: index\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"h2\", null, group.label), Array.isArray(group.courses) ? group.courses.map(function (course) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"div\", {\n            key: \"\".concat(course.subject_name, \"-\").concat(course.course_number)\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"h3\", null, course.subject_name, \" \", course.course_number, \": \", course.course_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"p\", null, course.course_description));\n        }) : null);\n      }));\n    }\n  }]);\n  return CourseCatalog;\n}(react__WEBPACK_IMPORTED_MODULE_8__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCatalog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU0RSxNQUFNLENBQUM1RSxLQUFNO1VBQ3BCNEIsS0FBSyxFQUFFZ0QsTUFBTSxDQUFDM0U7UUFBSyxDQUN0QixDQUFDO01BRVYsQ0FBQyxDQUNLLENBQUMsRUFDVixJQUFJLENBQUNpQyxLQUFLLENBQUNiLGFBQWEsQ0FBQ29ELEdBQUcsQ0FBQyxVQUFDSSxLQUFLLEVBQUVuQyxPQUFPLEVBQUVvQyxLQUFLO1FBQUEsb0JBQ2hEbkYsMERBQUE7VUFBS3dELEdBQUcsRUFBRTJCO1FBQU0sZ0JBQ1puRiwwREFBQSxhQUFLa0YsS0FBSyxDQUFDN0UsS0FBVSxDQUFDLEVBQ3JCYyxLQUFLLENBQUNpRSxPQUFPLENBQUNGLEtBQUssQ0FBQ25DLE9BQU8sQ0FBQyxHQUFHbUMsS0FBSyxDQUFDbkMsT0FBTyxDQUFDK0IsR0FBRyxDQUFDLFVBQUFHLE1BQU07VUFBQSxvQkFDcERqRiwwREFBQTtZQUFLd0QsR0FBRyxLQUFBakMsTUFBQSxDQUFLMEQsTUFBTSxDQUFDSSxZQUFZLE9BQUE5RCxNQUFBLENBQUkwRCxNQUFNLENBQUNLLGFBQWE7VUFBRyxnQkFDdkR0RiwwREFBQSxhQUFLaUYsTUFBTSxDQUFDSSxZQUFZLEVBQUMsR0FBQyxFQUFDSixNQUFNLENBQUNLLGFBQWEsRUFBQyxJQUFFLEVBQUNMLE1BQU0sQ0FBQ00sV0FBZ0IsQ0FBQyxlQUMzRXZGLDBEQUFBLFlBQUlpRixNQUFNLENBQUNPLGtCQUFzQixDQUNoQyxDQUFDO1FBQUEsQ0FDVCxDQUFDLEdBQUcsSUFDSixDQUFDO01BQUEsQ0FDVCxDQUNBLENBQUM7SUFFZDtFQUFDO0VBQUEsT0FBQWhGLGFBQUE7QUFBQSxFQWxKdUJQLDRDQUFTO0FBcUpyQyxpRUFBZU8sYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZS1jYXRhbG9nLy4vc3JjL2NhcmRzL0NvdXJzZUNhdGFsb2dDYXJkLmpzeD8yMTQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIERyb3Bkb3duLCBEcm9wZG93bkl0ZW0sXG4gICAgLy8gVHlwb2dyYXBoeSBcbn0gZnJvbSAnQGVsbHVjaWFuL3JlYWN0LWRlc2lnbi1zeXN0ZW0vY29yZSc7XG5cbi8vIGNvbnN0IGN1c3RvbUlkID0gJ0NvbnRyb2xsZWREcm9wZG93bkV4YW1wbGUnO1xuY29uc3Qgb3B0aW9ucyA9IFtcbiAgICB7IGxhYmVsOiAnMjAyMy0yMDI0IC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMy0yMDI0L1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZy9Db3Vyc2UtRGVzY3JpcHRpb25zJyB9LFxuICAgIHsgbGFiZWw6ICcyMDIyLTIwMjMgLSBVbmRlcmdyYWR1YXRlJywgcGF0aDogJy8yMDIyLTIwMjMvVW5kZXJncmFkdWF0ZS1DYXRhbG9nL0NvdXJzZS1EZXNjcmlwdGlvbnMnIH0sXG4gICAgeyBsYWJlbDogJzIwMjEtMjAyMiAtIFVuZGVyZ3JhZHVhdGUnLCBwYXRoOiAnLzIwMjEtMjAyMi9VbmRlcmdyYWR1YXRlLUNhdGFsb2cvQ291cnNlLURlc2NyaXB0aW9ucycgfSxcbiAgICB7IGxhYmVsOiAnMjAyMC0yMDIxIC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMC0yMDIxL0NhdGFsb2cvWC1NYWluLUNhbXB1cy1Db3Vyc2VzJyB9LFxuXTtcbmNvbnN0IGNvdXJzZU9wdGlvbnMgPSBbXG4gICAgeyBsYWJlbDogJ0J1c2luZXNzIEFjY291bnRpbmcnLCBwYXRoOiAnJ30sXG4gICAgeyBsYWJlbDogJzNEIEFtaW5tYXRpb24gYW5kIEdhbWUgRGVzaWduJywgcGF0aDogJyd9LFxuICAgIHsgbGFiZWw6ICdBbnRocm9wb2xvZ3knLCBwYXRoOiAnJ30sXG4gICAgeyBsYWJlbDogJ0FyYWJpYycsIHBhdGg6ICcnfSxcbiAgICB7IGxhYmVsOiAnQXJ0IEhpc3RvcnknLCBwYXRoOiAnJ30sXG4gICAgeyBsYWJlbDogJ0FydCcsIHBhdGg6ICcnfSxcbiAgICB7IGxhYmVsOiAnQXRobGV0aWMgVHJhaW5pbmcgRWR1Y2F0aW9uJywgcGF0aDogJyd9LFxuICAgIHsgbGFiZWw6ICdCdXNpbmVzcyBGaW5hbmNlJywgcGF0aDogJyd9LFxuICAgIHsgbGFiZWw6ICdJbnRlcm5hdGlvbmFsIEJ1c2luZXNzJywgcGF0aDogJyd9LFxuICAgIHsgbGFiZWw6ICdCaW9sb2d5JywgcGF0aDogJyd9LFxuICAgIHsgbGFiZWw6ICdCdXNpbmVzcyBMYXcnLCBwYXRoOiAnJ30sXG4gICAgeyBsYWJlbDogJ0J1c2luZXNzIE1hbmFnZW1lbnQgRGVjaXNpb24gU3lzdGVtcycsIHBhdGg6ICcnfSxcbiAgICB7IGxhYmVsOiAnQnVzaW5lc3MgTWFuYWdlbWVudCcsIHBhdGg6ICcnfSxcbiAgICB7IGxhYmVsOiAnQnVzaW5lc3MgTWFya2V0aW5nJywgcGF0aDogJyd9LFxuICAgIHsgbGFiZWw6ICdCdXNpbmVzcyBQcm9mZXNzaW9uYWwgR29sZiBNYW5hZ2VtZW50JywgcGF0aDogJyd9LFxuICAgIHsgbGFiZWw6ICdNdXNpYycsIHBhdGg6ICcvTVVTSS1Ib25vcnMnfSxcbl07XG5cbmNsYXNzIENvdXJzZUNhdGFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjb3Vyc2VzR3JvdXBzOiBbXSxcbiAgICAgICAgc2VsZWN0ZWRPcHRpb246ICcnLFxuICAgICAgICBzZWxlY3RlZENvdXJzZTogJycsXG4gICAgICAgIG9wZW46IGZhbHNlXG4gICAgfTtcblxuICAgIGpzb25wKHVybCwgY2FsbGJhY2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuc3JjID0gYCR7dXJsfSZjYWxsYmFjaz0ke2NhbGxiYWNrTmFtZX1gO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIC8vIEVuc3VyZSB0aGUgc2NyaXB0IGdldHMgcmVtb3ZlZCBhZnRlciBpdCdzIHVzZWQgdG8gcHJldmVudCBwb2xsdXRpb24uXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlQ2F0YWxvZ0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFBhdGggPSBldmVudC50YXJnZXQudmFsdWUgfHwgZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcHRpb246IHNlbGVjdGVkUGF0aCB9LCB0aGlzLmZldGNoRGF0YSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNvdXJzZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZENvdXJzZVBhdGggPSBldmVudC50YXJnZXQudmFsdWUgfHwgZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRDb3Vyc2U6IHNlbGVjdGVkQ291cnNlUGF0aCB9LCB0aGlzLmZldGNoRGF0YSk7XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaXEycHJvZDEuc21hcnRjYXRhbG9naXEuY29tL2FwaXMvQ3VzdG9tQ2F0YWxvZ0FQST9wYXRoPS9zaXRlY29yZS9jb250ZW50L0NhdGFsb2dzL1VuaXZlcnNpdHktb2YtdGhlLUluY2FybmF0ZS1Xb3JkJHt0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9ufSR7dGhpcy5zdGF0ZS5zZWxlY3RlZENvdXJzZX0mZm9ybWF0PWpzb25wYDtcbiAgICAgICAgdGhpcy5qc29ucCh1cmwsICdoYW5kbGVEYXRhJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBmcm9tIFVSTDonLCB1cmwpO1xuICAgIH07XG5cbiAgICAvLyBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2hhbmRsZUNoYW5nZSB0cmlnZ2VyZWQnLCBldmVudCk7XG4gICAgLy8gICAgIGNvbnN0IHNlbGVjdGVkUGF0aCA9IGV2ZW50LnRhcmdldC52YWx1ZSB8fCBldmVudC5kZXRhaWwudmFsdWU7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZFBhdGgnLCBzZWxlY3RlZFBhdGgpO1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgIHNlbGVjdGVkT3B0aW9uOiBzZWxlY3RlZFBhdGgsXG4gICAgLy8gICAgICAgICBjb3Vyc2VzR3JvdXBzOiBbXSAgLy8gQ2xlYXIgcHJldmlvdXMgZGF0YVxuICAgIC8vICAgICB9LCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pcTJwcm9kMS5zbWFydGNhdGFsb2dpcS5jb20vYXBpcy9DdXN0b21DYXRhbG9nQVBJP3BhdGg9L3NpdGVjb3JlL2NvbnRlbnQvQ2F0YWxvZ3MvVW5pdmVyc2l0eS1vZi10aGUtSW5jYXJuYXRlLVdvcmQke3NlbGVjdGVkUGF0aH0vTVVTSS1Ib25vcnMmZm9ybWF0PWpzb25wYDtcbiAgICAvLyAgICAgICAgIHRoaXMuanNvbnAodXJsLCAnaGFuZGxlRGF0YScpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIGZyb20gVVJMOicsIHVybCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH07XG5cbiAgICBoYW5kbGVEYXRhID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgY291cnNlc0ZvbGRlciA9IGRhdGEuY2F0YWxvZy5Db3Vyc2VzX0ZvbGRlci5Db3Vyc2VzX0ZvbGRlcjtcbiAgICAgICAgbGV0IGNvdXJzZXMgPSBbXTtcbiAgICAgICAgY291cnNlc0ZvbGRlci5mb3JFYWNoKGZvbGRlckl0ZW0gPT4ge1xuICAgICAgICAgICAgZm9sZGVySXRlbS5Db3Vyc2UuZm9yRWFjaChjb3Vyc2VJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjb3Vyc2VzLnB1c2goY291cnNlSXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgICBjb3Vyc2VzR3JvdXBzOiBbLi4ucHJldlN0YXRlLmNvdXJzZXNHcm91cHMsIGNvdXJzZXMsIHsgY291cnNlcywgbGFiZWw6IHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24gfV1cbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmhhbmRsZURhdGEgPSB0aGlzLmhhbmRsZURhdGE7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIC8vIENsZWFuIHVwIHRvIGF2b2lkIGFueSBwb3RlbnRpYWwgbWVtb3J5IGxlYWtzLlxuICAgICAgICB3aW5kb3cuaGFuZGxlRGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvdXJzZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgey8qIGNhdGFsb2cgeWVhciBzZWxlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiY2F0YWxvZ1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNhdGFsb2dDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25PcGVuPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKiogb25PcGVuIGhhbmRsZXIgY2FsbGVkICoqKicsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKiogb25DbG9zZSBoYW5kbGVyIGNhbGxlZCAqKionLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBhbiBDYXRhbG9nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgey8qIGNvdXJzZSBtYWpvciBzZWxlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiY291cnNlc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNvdXJzZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb3Vyc2V9XG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25PcGVuPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKiogb25PcGVuIGhhbmRsZXIgY2FsbGVkICoqKicsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKiogb25DbG9zZSBoYW5kbGVyIGNhbGxlZCAqKionLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBhbiBDb3Vyc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2NvdXJzZU9wdGlvbnMubWFwKGNvdXJzZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb3Vyc2UubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3Vyc2UubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2UucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3Vyc2VzR3JvdXBzLm1hcCgoZ3JvdXAsIGNvdXJzZXMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2dyb3VwLmxhYmVsfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShncm91cC5jb3Vyc2VzKSA/IGdyb3VwLmNvdXJzZXMubWFwKGNvdXJzZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2NvdXJzZS5zdWJqZWN0X25hbWV9LSR7Y291cnNlLmNvdXJzZV9udW1iZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y291cnNlLnN1YmplY3RfbmFtZX0ge2NvdXJzZS5jb3Vyc2VfbnVtYmVyfToge2NvdXJzZS5jb3Vyc2VfbmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y291cnNlLmNvdXJzZV9kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VDYXRhbG9nOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkRyb3Bkb3duIiwiRHJvcGRvd25JdGVtIiwib3B0aW9ucyIsImxhYmVsIiwicGF0aCIsImNvdXJzZU9wdGlvbnMiLCJDb3Vyc2VDYXRhbG9nIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJfZGVmaW5lUHJvcGVydHkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiY291cnNlc0dyb3VwcyIsInNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRDb3Vyc2UiLCJvcGVuIiwiZXZlbnQiLCJzZWxlY3RlZFBhdGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRldGFpbCIsInNldFN0YXRlIiwiZmV0Y2hEYXRhIiwic2VsZWN0ZWRDb3Vyc2VQYXRoIiwidXJsIiwic3RhdGUiLCJqc29ucCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY291cnNlc0ZvbGRlciIsImNhdGFsb2ciLCJDb3Vyc2VzX0ZvbGRlciIsImNvdXJzZXMiLCJmb3JFYWNoIiwiZm9sZGVySXRlbSIsIkNvdXJzZSIsImNvdXJzZUl0ZW0iLCJwdXNoIiwicHJldlN0YXRlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiY2FsbGJhY2tOYW1lIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYm9keSIsImFwcGVuZENoaWxkIiwib25sb2FkIiwicmVtb3ZlQ2hpbGQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsImhhbmRsZURhdGEiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIl90aGlzMiIsImlkIiwib25DaGFuZ2UiLCJoYW5kbGVDYXRhbG9nQ2hhbmdlIiwib25PcGVuIiwib25DbG9zZSIsImRpc2FibGVkIiwibWFwIiwib3B0aW9uIiwiaGFuZGxlQ291cnNlQ2hhbmdlIiwiY291cnNlIiwiZ3JvdXAiLCJpbmRleCIsImlzQXJyYXkiLCJzdWJqZWN0X25hbWUiLCJjb3Vyc2VfbnVtYmVyIiwiY291cnNlX25hbWUiLCJjb3Vyc2VfZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/cards/CourseCatalogCard.jsx\n");

/***/ }),

/***/ "@ellucian/react-design-system/core":
/*!*****************************************************!*\
  !*** external "@ellucian/react-design-system/core" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__ellucian_react_design_system_core__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("CourseCatalogCard." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("980ca82c16f23cba42b5")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "course-catalog:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"CourseCatalog_UIW_CourseCatalogCard": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatecourse_catalog"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/@ellucian/experience-extension/lib/enableLazyLoading.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cards/CourseCatalogCard.jsx");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});