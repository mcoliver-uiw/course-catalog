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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n// import {\n//     Dropdown, DropdownItem,\n//     // Typography \n// } from '@ellucian/react-design-system/core';\nvar CourseCatalog = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CourseCatalog, _Component);\n  var _super = _createSuper(CourseCatalog);\n  function CourseCatalog(props) {\n    var _this;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CourseCatalog);\n    _this = _super.call(this, props);\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"handleData\", function (data) {\n      var coursesFolder = data.catalog.Courses_Folder.Courses_Folder;\n      var courses = [];\n      coursesFolder.forEach(function (folderItem) {\n        folderItem.Course.forEach(function (courseItem) {\n          courses.push(courseItem);\n        });\n      });\n      _this.setState({\n        courses: courses\n      });\n    });\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), \"handleData\", function (data) {\n      var coursesFolder = data.catalog.Courses_Folder.Courses_Folder;\n      var courses = [];\n      coursesFolder.forEach(function (folderItem) {\n        folderItem.Course.forEach = courses.push(courseItem);\n      });\n    });\n    _this.state = {\n      courseGroups: []\n    };\n    return _this;\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CourseCatalog, [{\n    key: \"jsonp\",\n    value: function jsonp(url, callbackName) {\n      var script = document.createElement('script');\n      script.src = \"\".concat(url, \"&callback=\").concat(callbackName);\n      document.body.appendChild(script);\n      // Ensure the script gets removed after it's used to prevent pollution.\n      script.onload = function () {\n        document.body.removeChild(script);\n      };\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n      var options = [{\n        label: '2023-2024 - Undergraduate',\n        path: '/2023-2024/Undergraduate-Catalog'\n      }\n      // { label: '2022-2023 - Undergraduate', path: '/2022-2023/Undergraduate-Catalog' },\n      // { label: '2021-2022 - Undergraduate', path: '/2021-2022/Undergraduate-Catalog' },\n      // { label: '2020-2021 - Undergraduate', path: '/2020-2021/Undergraduate-Catalog' },\n      // { label: '2023-2024 - Graduate', path: '/2023-2024/Graduate-Catalog' },\n      // { label: '2022-2023 - Graduate', path: '/2022-2023/Graduate-Catalog' },\n      // { label: '2021-2022 - Graduate', path: '/2021-2022/Graduate-Catalog' },\n      // { label: '2020-2021 - Graduate', path: '/2020-2021/Graduate-Catalog' },\n      ];\n\n      window.handleData = this.handleData;\n      options.forEach(function (option) {\n        var url = \"https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word\".concat(option.path, \"/Course-Descriptions/MUSI-Honors&format=jsonp\");\n        _this2.jsonp(url, 'handleData');\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Clean up to avoid any potential memory leaks.\n      window.handleData = null;\n    }\n\n    // state = {\n    //     years: '',\n    //     initialValue: '',\n    //     open: false,\n    // };\n\n    // handleChange = event => {\n    //     const selectedPath = event.target.value;\n    //     if (selectedPath === 'None') {\n    //         this.setState({\n    //             years: this.state.initialValue,\n    //         });\n    //     } else {\n    //         this.setState({\n    //             years: selectedPath, // Set years to the selected path (or you might want to rename 'years' to a more descriptive name like 'selectedPath')\n    //         }, () => {\n    //             this.solutions(this.state.years);\n    //         });\n    //     }\n    // };\n\n    // componentDidMount() {\n    //     this.state.years;\n    // }\n    // solutions(selectedPath) {\n    //     if (!selectedPath || selectedPath === 'None') return;\n    //     const apiUrl = 'https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word';\n    //     const queryParams = selectedPath;\n    //     const format = '&format=jsonp';\n    //     fetch (apiUrl + queryParams + format, {\n    //         headers: {\n    //             'Content-Type': 'application/json',\n    //         },\n    //     })\n    //     .then((response) => {\n    //         if (!response.ok) {\n    //             throw new Error('Network response was not ok');\n    //         }\n    //         return response.json();\n    //     })\n    //     .then((data) => {\n    //         this.setState({ results: data });\n    //     })\n    //     .catch((error) => {\n    //         console.error(error);\n    //     });\n\n    //     console.log(queryParams);\n    // }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", {\n        id: \"courses-container\"\n      }, this.state.courses.map(function (course) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"div\", {\n          key: \"\".concat(course.subject_name, \"-\").concat(course.course_number)\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"h3\", null, course.subject_name, \" \", course.course_number, \": \", course.course_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(\"p\", null, course.course_description));\n      }))\n      // const customId = 'ControlledDropdownExample';\n      // const options = [\n      //     { label: '2023-2024 - Undergraduate', path: '/2023-2024/Undergraduate-Catalog' },\n      //     { label: '2022-2023 - Undergraduate', path: '/2022-2023/Undergraduate-Catalog' },\n      //     { label: '2021-2022 - Undergraduate', path: '/2021-2022/Undergraduate-Catalog' },\n      //     { label: '2020-2021 - Undergraduate', path: '/2020-2021/Undergraduate-Catalog' },\n      //     { label: '2023-2024 - Graduate', path: '/2023-2024/Graduate-Catalog' },\n      //     { label: '2022-2023 - Graduate', path: '/2022-2023/Graduate-Catalog' },\n      //     { label: '2021-2022 - Graduate', path: '/2021-2022/Graduate-Catalog' },\n      //     { label: '2020-2021 - Graduate', path: '/2020-2021/Graduate-Catalog' },\n      // ];\n\n      // return (\n      //     <div>\n      //         <Dropdown\n      //             id={`${customId}_Dropdown`}\n      //             label=\"years\"\n      //             onChange={this.handleChange}\n      //             value={this.state.years}\n      //             open={this.state.open}\n      //             onOpen={(event) => {\n      //                 console.log('*** onOpen handler called ***', event);\n      //                 this.setState({ open: true });\n      //             }}\n      //             onClose={(event) => {\n      //                 console.log('*** onClose handler called ***', event);\n      //                 this.setState({ open: false });\n      //             }}\n      //         >\n      //             <DropdownItem\n      //                 label=\"None\"\n      //                 value=\"None\"\n      //             />\n      //             {options.map(option => {\n      //                 return (\n      //                     <DropdownItem\n      //                         key={option.label}\n      //                         label={option.label}\n      //                         value={option.path}\n      //                     />\n      //                 );\n      //             })}\n      //         </Dropdown>\n      // </div>\n      ;\n    }\n  }]);\n  return CourseCatalog;\n}(react__WEBPACK_IMPORTED_MODULE_7__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCatalog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFBQTtJQUVKO0VBQUM7RUFBQSxPQUFBdkQsYUFBQTtBQUFBLEVBM0t1QkQsNENBQVM7QUE4S3JDLGlFQUFlQyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY291cnNlLWNhdGFsb2cvLi9zcmMvY2FyZHMvQ291cnNlQ2F0YWxvZ0NhcmQuanN4PzIxNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7XG4vLyAgICAgRHJvcGRvd24sIERyb3Bkb3duSXRlbSxcbi8vICAgICAvLyBUeXBvZ3JhcGh5IFxuLy8gfSBmcm9tICdAZWxsdWNpYW4vcmVhY3QtZGVzaWduLXN5c3RlbS9jb3JlJztcblxuY2xhc3MgQ291cnNlQ2F0YWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb3Vyc2VHcm91cHM6IFtdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAganNvbnAodXJsLCBjYWxsYmFja05hbWUpIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBgJHt1cmx9JmNhbGxiYWNrPSR7Y2FsbGJhY2tOYW1lfWA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgLy8gRW5zdXJlIHRoZSBzY3JpcHQgZ2V0cyByZW1vdmVkIGFmdGVyIGl0J3MgdXNlZCB0byBwcmV2ZW50IHBvbGx1dGlvbi5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBoYW5kbGVEYXRhID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgY291cnNlc0ZvbGRlciA9IGRhdGEuY2F0YWxvZy5Db3Vyc2VzX0ZvbGRlci5Db3Vyc2VzX0ZvbGRlcjtcbiAgICAgICAgbGV0IGNvdXJzZXMgPSBbXTtcblxuICAgICAgICBjb3Vyc2VzRm9sZGVyLmZvckVhY2goZm9sZGVySXRlbSA9PiB7XG4gICAgICAgICAgICBmb2xkZXJJdGVtLkNvdXJzZS5mb3JFYWNoKGNvdXJzZUl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvdXJzZXMucHVzaChjb3Vyc2VJdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY291cnNlcyB9KTtcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgICAgICB7IGxhYmVsOiAnMjAyMy0yMDI0IC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMy0yMDI0L1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZycgfSwgXG4gICAgICAgICAgICAvLyB7IGxhYmVsOiAnMjAyMi0yMDIzIC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMi0yMDIzL1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vIHsgbGFiZWw6ICcyMDIxLTIwMjIgLSBVbmRlcmdyYWR1YXRlJywgcGF0aDogJy8yMDIxLTIwMjIvVW5kZXJncmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8geyBsYWJlbDogJzIwMjAtMjAyMSAtIFVuZGVyZ3JhZHVhdGUnLCBwYXRoOiAnLzIwMjAtMjAyMS9VbmRlcmdyYWR1YXRlLUNhdGFsb2cnIH0sXG4gICAgICAgICAgICAvLyB7IGxhYmVsOiAnMjAyMy0yMDI0IC0gR3JhZHVhdGUnLCBwYXRoOiAnLzIwMjMtMjAyNC9HcmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8geyBsYWJlbDogJzIwMjItMjAyMyAtIEdyYWR1YXRlJywgcGF0aDogJy8yMDIyLTIwMjMvR3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vIHsgbGFiZWw6ICcyMDIxLTIwMjIgLSBHcmFkdWF0ZScsIHBhdGg6ICcvMjAyMS0yMDIyL0dyYWR1YXRlLUNhdGFsb2cnIH0sXG4gICAgICAgICAgICAvLyB7IGxhYmVsOiAnMjAyMC0yMDIxIC0gR3JhZHVhdGUnLCBwYXRoOiAnLzIwMjAtMjAyMS9HcmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICBdO1xuICAgICAgICB3aW5kb3cuaGFuZGxlRGF0YSA9IHRoaXMuaGFuZGxlRGF0YTtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9pcTJwcm9kMS5zbWFydGNhdGFsb2dpcS5jb20vYXBpcy9DdXN0b21DYXRhbG9nQVBJP3BhdGg9L3NpdGVjb3JlL2NvbnRlbnQvQ2F0YWxvZ3MvVW5pdmVyc2l0eS1vZi10aGUtSW5jYXJuYXRlLVdvcmQke29wdGlvbi5wYXRofS9Db3Vyc2UtRGVzY3JpcHRpb25zL01VU0ktSG9ub3JzJmZvcm1hdD1qc29ucGA7XG4gICAgICAgIHRoaXMuanNvbnAodXJsLCAnaGFuZGxlRGF0YScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVEYXRhID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgY291cnNlc0ZvbGRlciA9IGRhdGEuY2F0YWxvZy5Db3Vyc2VzX0ZvbGRlci5Db3Vyc2VzX0ZvbGRlcjtcbiAgICAgICAgbGV0IGNvdXJzZXMgPSBbXTtcbiAgICAgICAgY291cnNlc0ZvbGRlci5mb3JFYWNoKGZvbGRlckl0ZW0gPT4ge1xuICAgICAgICAgICAgZm9sZGVySXRlbS5Db3Vyc2UuZm9yRWFjaCA9XG4gICAgICAgICAgICBjb3Vyc2VzLnB1c2goY291cnNlSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAvLyBDbGVhbiB1cCB0byBhdm9pZCBhbnkgcG90ZW50aWFsIG1lbW9yeSBsZWFrcy5cbiAgICAgICAgd2luZG93LmhhbmRsZURhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIHN0YXRlID0ge1xuICAgIC8vICAgICB5ZWFyczogJycsXG4gICAgLy8gICAgIGluaXRpYWxWYWx1ZTogJycsXG4gICAgLy8gICAgIG9wZW46IGZhbHNlLFxuICAgIC8vIH07XG5cbiAgICAvLyBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgLy8gICAgIGNvbnN0IHNlbGVjdGVkUGF0aCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAvLyAgICAgaWYgKHNlbGVjdGVkUGF0aCA9PT0gJ05vbmUnKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgICAgICB5ZWFyczogdGhpcy5zdGF0ZS5pbml0aWFsVmFsdWUsXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgICAgIHllYXJzOiBzZWxlY3RlZFBhdGgsIC8vIFNldCB5ZWFycyB0byB0aGUgc2VsZWN0ZWQgcGF0aCAob3IgeW91IG1pZ2h0IHdhbnQgdG8gcmVuYW1lICd5ZWFycycgdG8gYSBtb3JlIGRlc2NyaXB0aXZlIG5hbWUgbGlrZSAnc2VsZWN0ZWRQYXRoJylcbiAgICAvLyAgICAgICAgIH0sICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNvbHV0aW9ucyh0aGlzLnN0YXRlLnllYXJzKTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfTtcblxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vICAgICB0aGlzLnN0YXRlLnllYXJzO1xuICAgIC8vIH1cbiAgICAvLyBzb2x1dGlvbnMoc2VsZWN0ZWRQYXRoKSB7XG4gICAgLy8gICAgIGlmICghc2VsZWN0ZWRQYXRoIHx8IHNlbGVjdGVkUGF0aCA9PT0gJ05vbmUnKSByZXR1cm47XG4gICAgLy8gICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2lxMnByb2QxLnNtYXJ0Y2F0YWxvZ2lxLmNvbS9hcGlzL0N1c3RvbUNhdGFsb2dBUEk/cGF0aD0vc2l0ZWNvcmUvY29udGVudC9DYXRhbG9ncy9Vbml2ZXJzaXR5LW9mLXRoZS1JbmNhcm5hdGUtV29yZCc7XG4gICAgLy8gICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gc2VsZWN0ZWRQYXRoO1xuICAgIC8vICAgICBjb25zdCBmb3JtYXQgPSAnJmZvcm1hdD1qc29ucCc7XG4gICAgLy8gICAgIGZldGNoIChhcGlVcmwgKyBxdWVyeVBhcmFtcyArIGZvcm1hdCwge1xuICAgIC8vICAgICAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAvLyAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHRzOiBkYXRhIH0pO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyAgICAgY29uc29sZS5sb2cocXVlcnlQYXJhbXMpO1xuICAgIC8vIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY291cnNlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3Vyc2VzLm1hcChjb3Vyc2UgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7Y291cnNlLnN1YmplY3RfbmFtZX0tJHtjb3Vyc2UuY291cnNlX251bWJlcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y291cnNlLnN1YmplY3RfbmFtZX0ge2NvdXJzZS5jb3Vyc2VfbnVtYmVyfToge2NvdXJzZS5jb3Vyc2VfbmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdXJzZS5jb3Vyc2VfZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gY29uc3QgY3VzdG9tSWQgPSAnQ29udHJvbGxlZERyb3Bkb3duRXhhbXBsZSc7XG4gICAgICAgICAgICAvLyBjb25zdCBvcHRpb25zID0gW1xuICAgICAgICAgICAgLy8gICAgIHsgbGFiZWw6ICcyMDIzLTIwMjQgLSBVbmRlcmdyYWR1YXRlJywgcGF0aDogJy8yMDIzLTIwMjQvVW5kZXJncmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8gICAgIHsgbGFiZWw6ICcyMDIyLTIwMjMgLSBVbmRlcmdyYWR1YXRlJywgcGF0aDogJy8yMDIyLTIwMjMvVW5kZXJncmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8gICAgIHsgbGFiZWw6ICcyMDIxLTIwMjIgLSBVbmRlcmdyYWR1YXRlJywgcGF0aDogJy8yMDIxLTIwMjIvVW5kZXJncmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8gICAgIHsgbGFiZWw6ICcyMDIwLTIwMjEgLSBVbmRlcmdyYWR1YXRlJywgcGF0aDogJy8yMDIwLTIwMjEvVW5kZXJncmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8gICAgIHsgbGFiZWw6ICcyMDIzLTIwMjQgLSBHcmFkdWF0ZScsIHBhdGg6ICcvMjAyMy0yMDI0L0dyYWR1YXRlLUNhdGFsb2cnIH0sXG4gICAgICAgICAgICAvLyAgICAgeyBsYWJlbDogJzIwMjItMjAyMyAtIEdyYWR1YXRlJywgcGF0aDogJy8yMDIyLTIwMjMvR3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vICAgICB7IGxhYmVsOiAnMjAyMS0yMDIyIC0gR3JhZHVhdGUnLCBwYXRoOiAnLzIwMjEtMjAyMi9HcmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8gICAgIHsgbGFiZWw6ICcyMDIwLTIwMjEgLSBHcmFkdWF0ZScsIHBhdGg6ICcvMjAyMC0yMDIxL0dyYWR1YXRlLUNhdGFsb2cnIH0sXG4gICAgICAgICAgICAvLyBdO1xuXG4gICAgICAgIC8vIHJldHVybiAoXG4gICAgICAgIC8vICAgICA8ZGl2PlxuICAgICAgICAvLyAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAvLyAgICAgICAgICAgICBpZD17YCR7Y3VzdG9tSWR9X0Ryb3Bkb3duYH1cbiAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw9XCJ5ZWFyc1wiXG4gICAgICAgIC8vICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUueWVhcnN9XG4gICAgICAgIC8vICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgLy8gICAgICAgICAgICAgb25PcGVuPXsoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKiogb25PcGVuIGhhbmRsZXIgY2FsbGVkICoqKicsIGV2ZW50KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgICAgICAvLyAgICAgICAgICAgICB9fVxuICAgICAgICAvLyAgICAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKiogb25DbG9zZSBoYW5kbGVyIGNhbGxlZCAqKionLCBldmVudCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH19XG4gICAgICAgIC8vICAgICAgICAgPlxuICAgICAgICAvLyAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbmVcIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWU9XCJOb25lXCJcbiAgICAgICAgLy8gICAgICAgICAgICAgLz5cbiAgICAgICAgLy8gICAgICAgICAgICAge29wdGlvbnMubWFwKG9wdGlvbiA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb24ubGFiZWx9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24ucGF0aH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSl9XG4gICAgICAgIC8vICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgLy8gPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VDYXRhbG9nOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvdXJzZUNhdGFsb2ciLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJfZGVmaW5lUHJvcGVydHkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiZGF0YSIsImNvdXJzZXNGb2xkZXIiLCJjYXRhbG9nIiwiQ291cnNlc19Gb2xkZXIiLCJjb3Vyc2VzIiwiZm9yRWFjaCIsImZvbGRlckl0ZW0iLCJDb3Vyc2UiLCJjb3Vyc2VJdGVtIiwicHVzaCIsInNldFN0YXRlIiwic3RhdGUiLCJjb3Vyc2VHcm91cHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImpzb25wIiwidXJsIiwiY2FsbGJhY2tOYW1lIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiY29uY2F0IiwiYm9keSIsImFwcGVuZENoaWxkIiwib25sb2FkIiwicmVtb3ZlQ2hpbGQiLCJjb21wb25lbnREaWRNb3VudCIsIl90aGlzMiIsIm9wdGlvbnMiLCJsYWJlbCIsInBhdGgiLCJ3aW5kb3ciLCJoYW5kbGVEYXRhIiwib3B0aW9uIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJpZCIsIm1hcCIsImNvdXJzZSIsInN1YmplY3RfbmFtZSIsImNvdXJzZV9udW1iZXIiLCJjb3Vyc2VfbmFtZSIsImNvdXJzZV9kZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/cards/CourseCatalogCard.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("48177e95859216c499e7")
/******/ })();
/******/ 
/******/ }
);