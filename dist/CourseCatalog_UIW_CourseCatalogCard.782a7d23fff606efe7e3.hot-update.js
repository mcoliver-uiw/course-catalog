"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecourse_catalog"]("CourseCatalog_UIW_CourseCatalogCard",{

/***/ "./src/cards/CourseCatalogCard.jsx":
/*!*****************************************!*\
  !*** ./src/cards/CourseCatalogCard.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n// import {\n//     Dropdown, DropdownItem,\n//     // Typography \n// } from '@ellucian/react-design-system/core';\nvar CourseCatalog = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CourseCatalog, _Component);\n  var _super = _createSuper(CourseCatalog);\n  function CourseCatalog(props) {\n    var _this;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CourseCatalog);\n    _this = _super.call(this, props);\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"handleData\", function (data) {\n      var coursesFolder = data.catalog.Courses_Folder.Courses_Folder;\n      var courses = [];\n      coursesFolder.forEach(function (folderItem) {\n        folderItem.Course.forEach(function (courseItem) {\n          courses.push(courseItem);\n        });\n      });\n      _this.setState({\n        courses: courses\n      });\n    });\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"handleData\", function (data) {\n      var coursesFolder = data.catalog.Courses_Folder.Courses_Folder;\n      var courses = [];\n      coursesFolder.forEach(function (folderItem) {\n        folderItem.Course.forEach(function (courseItem) {\n          courses.push(courseItem);\n        });\n      });\n    });\n    _this.state = {\n      courseGroups: []\n    };\n    return _this;\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CourseCatalog, [{\n    key: \"jsonp\",\n    value: function jsonp(url, callbackName) {\n      var script = document.createElement('script');\n      script.src = \"\".concat(url, \"&callback=\").concat(callbackName);\n      document.body.appendChild(script);\n      // Ensure the script gets removed after it's used to prevent pollution.\n      script.onload = function () {\n        document.body.removeChild(script);\n      };\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n      var options = [{\n        label: '2023-2024 - Undergraduate',\n        path: '/2023-2024/Undergraduate-Catalog'\n      }\n      // { label: '2022-2023 - Undergraduate', path: '/2022-2023/Undergraduate-Catalog' },\n      // { label: '2021-2022 - Undergraduate', path: '/2021-2022/Undergraduate-Catalog' },\n      // { label: '2020-2021 - Undergraduate', path: '/2020-2021/Undergraduate-Catalog' },\n      // { label: '2023-2024 - Graduate', path: '/2023-2024/Graduate-Catalog' },\n      // { label: '2022-2023 - Graduate', path: '/2022-2023/Graduate-Catalog' },\n      // { label: '2021-2022 - Graduate', path: '/2021-2022/Graduate-Catalog' },\n      // { label: '2020-2021 - Graduate', path: '/2020-2021/Graduate-Catalog' },\n      ];\n\n      window.handleData = this.handleData;\n      options.forEach(function (option) {\n        var url = \"https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word\".concat(option.path, \"/Course-Descriptions/MUSI-Honors&format=jsonp\");\n        _this2.jsonp(url, 'handleData');\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Clean up to avoid any potential memory leaks.\n      window.handleData = null;\n    }\n\n    // state = {\n    //     years: '',\n    //     initialValue: '',\n    //     open: false,\n    // };\n\n    // handleChange = event => {\n    //     const selectedPath = event.target.value;\n    //     if (selectedPath === 'None') {\n    //         this.setState({\n    //             years: this.state.initialValue,\n    //         });\n    //     } else {\n    //         this.setState({\n    //             years: selectedPath, // Set years to the selected path (or you might want to rename 'years' to a more descriptive name like 'selectedPath')\n    //         }, () => {\n    //             this.solutions(this.state.years);\n    //         });\n    //     }\n    // };\n\n    // componentDidMount() {\n    //     this.state.years;\n    // }\n    // solutions(selectedPath) {\n    //     if (!selectedPath || selectedPath === 'None') return;\n    //     const apiUrl = 'https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word';\n    //     const queryParams = selectedPath;\n    //     const format = '&format=jsonp';\n    //     fetch (apiUrl + queryParams + format, {\n    //         headers: {\n    //             'Content-Type': 'application/json',\n    //         },\n    //     })\n    //     .then((response) => {\n    //         if (!response.ok) {\n    //             throw new Error('Network response was not ok');\n    //         }\n    //         return response.json();\n    //     })\n    //     .then((data) => {\n    //         this.setState({ results: data });\n    //     })\n    //     .catch((error) => {\n    //         console.error(error);\n    //     });\n\n    //     console.log(queryParams);\n    // }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", {\n        id: \"courses-container\"\n      }, this.state.courses.map(function (course) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", {\n          key: \"\".concat(course.subject_name, \"-\").concat(course.course_number)\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"h3\", null, course.subject_name, \" \", course.course_number, \": \", course.course_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"p\", null, course.course_description));\n      }))\n      // const customId = 'ControlledDropdownExample';\n      // const options = [\n      //     { label: '2023-2024 - Undergraduate', path: '/2023-2024/Undergraduate-Catalog' },\n      //     { label: '2022-2023 - Undergraduate', path: '/2022-2023/Undergraduate-Catalog' },\n      //     { label: '2021-2022 - Undergraduate', path: '/2021-2022/Undergraduate-Catalog' },\n      //     { label: '2020-2021 - Undergraduate', path: '/2020-2021/Undergraduate-Catalog' },\n      //     { label: '2023-2024 - Graduate', path: '/2023-2024/Graduate-Catalog' },\n      //     { label: '2022-2023 - Graduate', path: '/2022-2023/Graduate-Catalog' },\n      //     { label: '2021-2022 - Graduate', path: '/2021-2022/Graduate-Catalog' },\n      //     { label: '2020-2021 - Graduate', path: '/2020-2021/Graduate-Catalog' },\n      // ];\n\n      // return (\n      //     <div>\n      //         <Dropdown\n      //             id={`${customId}_Dropdown`}\n      //             label=\"years\"\n      //             onChange={this.handleChange}\n      //             value={this.state.years}\n      //             open={this.state.open}\n      //             onOpen={(event) => {\n      //                 console.log('*** onOpen handler called ***', event);\n      //                 this.setState({ open: true });\n      //             }}\n      //             onClose={(event) => {\n      //                 console.log('*** onClose handler called ***', event);\n      //                 this.setState({ open: false });\n      //             }}\n      //         >\n      //             <DropdownItem\n      //                 label=\"None\"\n      //                 value=\"None\"\n      //             />\n      //             {options.map(option => {\n      //                 return (\n      //                     <DropdownItem\n      //                         key={option.label}\n      //                         label={option.label}\n      //                         value={option.path}\n      //                     />\n      //                 );\n      //             })}\n      //         </Dropdown>\n      // </div>\n      ;\n    }\n  }]);\n  return CourseCatalog;\n}(react__WEBPACK_IMPORTED_MODULE_7__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCatalog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7TUFDQTtNQUNBOztNQUVKO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFBQTtJQUVKO0VBQUM7RUFBQSxPQUFBdkQsYUFBQTtBQUFBLEVBNUt1QkQsNENBQVM7QUErS3JDLGlFQUFlQyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlLWNhdGFsb2cvLi9zcmMvY2FyZHMvQ291cnNlQ2F0YWxvZ0NhcmQuanN4PzIxNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7XG4vLyAgICAgRHJvcGRvd24sIERyb3Bkb3duSXRlbSxcbi8vICAgICAvLyBUeXBvZ3JhcGh5IFxuLy8gfSBmcm9tICdAZWxsdWNpYW4vcmVhY3QtZGVzaWduLXN5c3RlbS9jb3JlJztcblxuY2xhc3MgQ291cnNlQ2F0YWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb3Vyc2VHcm91cHM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAganNvbnAodXJsLCBjYWxsYmFja05hbWUpIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBgJHt1cmx9JmNhbGxiYWNrPSR7Y2FsbGJhY2tOYW1lfWA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgLy8gRW5zdXJlIHRoZSBzY3JpcHQgZ2V0cyByZW1vdmVkIGFmdGVyIGl0J3MgdXNlZCB0byBwcmV2ZW50IHBvbGx1dGlvbi5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBoYW5kbGVEYXRhID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgY291cnNlc0ZvbGRlciA9IGRhdGEuY2F0YWxvZy5Db3Vyc2VzX0ZvbGRlci5Db3Vyc2VzX0ZvbGRlcjtcbiAgICAgICAgbGV0IGNvdXJzZXMgPSBbXTtcblxuICAgICAgICBjb3Vyc2VzRm9sZGVyLmZvckVhY2goZm9sZGVySXRlbSA9PiB7XG4gICAgICAgICAgICBmb2xkZXJJdGVtLkNvdXJzZS5mb3JFYWNoKGNvdXJzZUl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvdXJzZXMucHVzaChjb3Vyc2VJdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cnNlcyB9KTtcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7IGxhYmVsOiAnMjAyMy0yMDI0IC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMy0yMDI0L1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZycgfSwgXG4gICAgICAgICAgICAvLyB7IGxhYmVsOiAnMjAyMi0yMDIzIC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMi0yMDIzL1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vIHsgbGFiZWw6ICcyMDIxLTIwMjIgLSBVbmRlcmdyYWR1YXRlJywgcGF0aDogJy8yMDIxLTIwMjIvVW5kZXJncmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8geyBsYWJlbDogJzIwMjAtMjAyMSAtIFVuZGVyZ3JhZHVhdGUnLCBwYXRoOiAnLzIwMjAtMjAyMS9VbmRlcmdyYWR1YXRlLUNhdGFsb2cnIH0sXG4gICAgICAgICAgICAvLyB7IGxhYmVsOiAnMjAyMy0yMDI0IC0gR3JhZHVhdGUnLCBwYXRoOiAnLzIwMjMtMjAyNC9HcmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8geyBsYWJlbDogJzIwMjItMjAyMyAtIEdyYWR1YXRlJywgcGF0aDogJy8yMDIyLTIwMjMvR3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vIHsgbGFiZWw6ICcyMDIxLTIwMjIgLSBHcmFkdWF0ZScsIHBhdGg6ICcvMjAyMS0yMDIyL0dyYWR1YXRlLUNhdGFsb2cnIH0sXG4gICAgICAgICAgICAvLyB7IGxhYmVsOiAnMjAyMC0yMDIxIC0gR3JhZHVhdGUnLCBwYXRoOiAnLzIwMjAtMjAyMS9HcmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICBdO1xuICAgICAgICB3aW5kb3cuaGFuZGxlRGF0YSA9IHRoaXMuaGFuZGxlRGF0YTtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pcTJwcm9kMS5zbWFydGNhdGFsb2dpcS5jb20vYXBpcy9DdXN0b21DYXRhbG9nQVBJP3BhdGg9L3NpdGVjb3JlL2NvbnRlbnQvQ2F0YWxvZ3MvVW5pdmVyc2l0eS1vZi10aGUtSW5jYXJuYXRlLVdvcmQke29wdGlvbi5wYXRofS9Db3Vyc2UtRGVzY3JpcHRpb25zL01VU0ktSG9ub3JzJmZvcm1hdD1qc29ucGA7XG4gICAgICAgIHRoaXMuanNvbnAodXJsLCAnaGFuZGxlRGF0YScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVEYXRhID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgY291cnNlc0ZvbGRlciA9IGRhdGEuY2F0YWxvZy5Db3Vyc2VzX0ZvbGRlci5Db3Vyc2VzX0ZvbGRlcjtcbiAgICAgICAgbGV0IGNvdXJzZXMgPSBbXTtcbiAgICAgICAgY291cnNlc0ZvbGRlci5mb3JFYWNoKGZvbGRlckl0ZW0gPT4ge1xuICAgICAgICAgICAgZm9sZGVySXRlbS5Db3Vyc2UuZm9yRWFjaCAoY291cnNlSXRlbSA9PiB7XG4gICAgICAgICAgICBjb3Vyc2VzLnB1c2goY291cnNlSXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgLy8gQ2xlYW4gdXAgdG8gYXZvaWQgYW55IHBvdGVudGlhbCBtZW1vcnkgbGVha3MuXG4gICAgICAgIHdpbmRvdy5oYW5kbGVEYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzdGF0ZSA9IHtcbiAgICAvLyAgICAgeWVhcnM6ICcnLFxuICAgIC8vICAgICBpbml0aWFsVmFsdWU6ICcnLFxuICAgIC8vICAgICBvcGVuOiBmYWxzZSxcbiAgICAvLyB9O1xuXG4gICAgLy8gaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIC8vICAgICBjb25zdCBzZWxlY3RlZFBhdGggPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgLy8gICAgIGlmIChzZWxlY3RlZFBhdGggPT09ICdOb25lJykge1xuICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICAgICAgeWVhcnM6IHRoaXMuc3RhdGUuaW5pdGlhbFZhbHVlLFxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgICAgICB5ZWFyczogc2VsZWN0ZWRQYXRoLCAvLyBTZXQgeWVhcnMgdG8gdGhlIHNlbGVjdGVkIHBhdGggKG9yIHlvdSBtaWdodCB3YW50IHRvIHJlbmFtZSAneWVhcnMnIHRvIGEgbW9yZSBkZXNjcmlwdGl2ZSBuYW1lIGxpa2UgJ3NlbGVjdGVkUGF0aCcpXG4gICAgLy8gICAgICAgICB9LCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zb2x1dGlvbnModGhpcy5zdGF0ZS55ZWFycyk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG5cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyAgICAgdGhpcy5zdGF0ZS55ZWFycztcbiAgICAvLyB9XG4gICAgLy8gc29sdXRpb25zKHNlbGVjdGVkUGF0aCkge1xuICAgIC8vICAgICBpZiAoIXNlbGVjdGVkUGF0aCB8fCBzZWxlY3RlZFBhdGggPT09ICdOb25lJykgcmV0dXJuO1xuICAgIC8vICAgICBjb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9pcTJwcm9kMS5zbWFydGNhdGFsb2dpcS5jb20vYXBpcy9DdXN0b21DYXRhbG9nQVBJP3BhdGg9L3NpdGVjb3JlL2NvbnRlbnQvQ2F0YWxvZ3MvVW5pdmVyc2l0eS1vZi10aGUtSW5jYXJuYXRlLVdvcmQnO1xuICAgIC8vICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHNlbGVjdGVkUGF0aDtcbiAgICAvLyAgICAgY29uc3QgZm9ybWF0ID0gJyZmb3JtYXQ9anNvbnAnO1xuICAgIC8vICAgICBmZXRjaCAoYXBpVXJsICsgcXVlcnlQYXJhbXMgKyBmb3JtYXQsIHtcbiAgICAvLyAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVzdWx0czogZGF0YSB9KTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHF1ZXJ5UGFyYW1zKTtcbiAgICAvLyB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvdXJzZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY291cnNlcy5tYXAoY291cnNlID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2NvdXJzZS5zdWJqZWN0X25hbWV9LSR7Y291cnNlLmNvdXJzZV9udW1iZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NvdXJzZS5zdWJqZWN0X25hbWV9IHtjb3Vyc2UuY291cnNlX251bWJlcn06IHtjb3Vyc2UuY291cnNlX25hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb3Vyc2UuY291cnNlX2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vIGNvbnN0IGN1c3RvbUlkID0gJ0NvbnRyb2xsZWREcm9wZG93bkV4YW1wbGUnO1xuICAgICAgICAgICAgLy8gY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgICAgIC8vICAgICB7IGxhYmVsOiAnMjAyMy0yMDI0IC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMy0yMDI0L1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vICAgICB7IGxhYmVsOiAnMjAyMi0yMDIzIC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMi0yMDIzL1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vICAgICB7IGxhYmVsOiAnMjAyMS0yMDIyIC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMS0yMDIyL1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vICAgICB7IGxhYmVsOiAnMjAyMC0yMDIxIC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMC0yMDIxL1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vICAgICB7IGxhYmVsOiAnMjAyMy0yMDI0IC0gR3JhZHVhdGUnLCBwYXRoOiAnLzIwMjMtMjAyNC9HcmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8gICAgIHsgbGFiZWw6ICcyMDIyLTIwMjMgLSBHcmFkdWF0ZScsIHBhdGg6ICcvMjAyMi0yMDIzL0dyYWR1YXRlLUNhdGFsb2cnIH0sXG4gICAgICAgICAgICAvLyAgICAgeyBsYWJlbDogJzIwMjEtMjAyMiAtIEdyYWR1YXRlJywgcGF0aDogJy8yMDIxLTIwMjIvR3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vICAgICB7IGxhYmVsOiAnMjAyMC0yMDIxIC0gR3JhZHVhdGUnLCBwYXRoOiAnLzIwMjAtMjAyMS9HcmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8gXTtcblxuICAgICAgICAvLyByZXR1cm4gKFxuICAgICAgICAvLyAgICAgPGRpdj5cbiAgICAgICAgLy8gICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgLy8gICAgICAgICAgICAgaWQ9e2Ake2N1c3RvbUlkfV9Ecm9wZG93bmB9XG4gICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsPVwieWVhcnNcIlxuICAgICAgICAvLyAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnllYXJzfVxuICAgICAgICAvLyAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgIC8vICAgICAgICAgICAgIG9uT3Blbj17KGV2ZW50KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqIG9uT3BlbiBoYW5kbGVyIGNhbGxlZCAqKionLCBldmVudCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfX1cbiAgICAgICAgLy8gICAgICAgICAgICAgb25DbG9zZT17KGV2ZW50KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqIG9uQ2xvc2UgaGFuZGxlciBjYWxsZWQgKioqJywgZXZlbnQpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgICAgICAvLyAgICAgICAgICAgICB9fVxuICAgICAgICAvLyAgICAgICAgID5cbiAgICAgICAgLy8gICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb25lXCJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlPVwiTm9uZVwiXG4gICAgICAgIC8vICAgICAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgICAgIHtvcHRpb25zLm1hcChvcHRpb24gPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLmxhYmVsfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnBhdGh9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0pfVxuICAgICAgICAvLyAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIC8vIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlQ2F0YWxvZzsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb3Vyc2VDYXRhbG9nIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInByb3BzIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYWxsIiwiX2RlZmluZVByb3BlcnR5IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImRhdGEiLCJjb3Vyc2VzRm9sZGVyIiwiY2F0YWxvZyIsIkNvdXJzZXNfRm9sZGVyIiwiY291cnNlcyIsImZvckVhY2giLCJmb2xkZXJJdGVtIiwiQ291cnNlIiwiY291cnNlSXRlbSIsInB1c2giLCJzZXRTdGF0ZSIsInN0YXRlIiwiY291cnNlR3JvdXBzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJqc29ucCIsInVybCIsImNhbGxiYWNrTmFtZSIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImNvbmNhdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm9ubG9hZCIsInJlbW92ZUNoaWxkIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpczIiLCJvcHRpb25zIiwibGFiZWwiLCJwYXRoIiwid2luZG93IiwiaGFuZGxlRGF0YSIsIm9wdGlvbiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiaWQiLCJtYXAiLCJjb3Vyc2UiLCJzdWJqZWN0X25hbWUiLCJjb3Vyc2VfbnVtYmVyIiwiY291cnNlX25hbWUiLCJjb3Vyc2VfZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/cards/CourseCatalogCard.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("251c0f3fe31d4ce02f8b")
/******/ })();
/******/ 
/******/ }
);