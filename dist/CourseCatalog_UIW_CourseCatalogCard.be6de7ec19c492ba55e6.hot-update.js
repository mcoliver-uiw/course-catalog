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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ellucian/react-design-system/core */ \"@ellucian/react-design-system/core\");\n/* harmony import */ var _ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n// const customId = 'ControlledDropdownExample';\nvar options = [{\n  label: '2023-2024 - Undergraduate',\n  path: '/2023-2024/Undergraduate-Catalog/Course-Descriptions'\n}, {\n  label: '2022-2023 - Undergraduate',\n  path: '/2022-2023/Undergraduate-Catalog/Course-Descriptions'\n}, {\n  label: '2021-2022 - Undergraduate',\n  path: '/2021-2022/Undergraduate-Catalog/Course-Descriptions'\n}, {\n  label: '2020-2021 - Undergraduate',\n  path: '/2020-2021/Catalog/X-Main-Campus-Courses'\n}];\nvar courseOptions = [{\n  label: 'Business Accounting',\n  path: ''\n}, {\n  label: '3D Aminmation and Game Design',\n  path: ''\n}, {\n  label: 'Anthropology',\n  path: ''\n}, {\n  label: 'Arabic',\n  path: ''\n}, {\n  label: 'Art History',\n  path: ''\n}, {\n  label: 'Art',\n  path: ''\n}, {\n  label: 'Athletic Training Education',\n  path: ''\n}, {\n  label: 'Business Finance',\n  path: ''\n}, {\n  label: 'International Business',\n  path: ''\n}, {\n  label: 'Biology',\n  path: ''\n}, {\n  label: 'Business Law',\n  path: ''\n}, {\n  label: 'Business Management Decision Systems',\n  path: ''\n}, {\n  label: 'Business Management',\n  path: ''\n}, {\n  label: 'Business Marketing',\n  path: ''\n}, {\n  label: 'Business Professional Golf Management',\n  path: ''\n}, {\n  label: 'Music',\n  path: '/MUSI-Honors'\n}];\nvar CourseCatalog = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CourseCatalog, _Component);\n  var _super = _createSuper(CourseCatalog);\n  function CourseCatalog() {\n    var _this;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CourseCatalog);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(args));\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"state\", {\n      coursesGroups: [],\n      selectedOption: '',\n      selectedCourse: '',\n      open: false\n    });\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleCatalogChange\", function (event) {\n      var selectedPath = event.target.value || event.detail.value;\n      _this.setState({\n        selectedOption: selectedPath\n      }, _this.fetchData);\n    });\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleCourseChange\", function (event) {\n      var selectedCoursePath = event.target.value || event.detail.value;\n      _this.setState({\n        selectedCourse: selectedCoursePath\n      }, _this.fetchData);\n    });\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"fetchData\", function () {\n      var url = \"https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word\".concat(_this.state.selectedOption).concat(_this.state.selectedCourse, \"&format=jsonp\");\n      _this.jsonp(url, 'handleData');\n      console.log('Fetching from URL:', url);\n    });\n    // handleChange = (event) => {\n    //     console.log('handleChange triggered', event);\n    //     const selectedPath = event.target.value || event.detail.value;\n    //     console.log('selectedPath', selectedPath);\n    //     this.setState({\n    //         selectedOption: selectedPath,\n    //         coursesGroups: []  // Clear previous data\n    //     }, () => {\n    //         const url = `https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word${selectedPath}/MUSI-Honors&format=jsonp`;\n    //         this.jsonp(url, 'handleData');\n    //         console.log('Fetching from URL:', url);\n    //     });\n    // };\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleData\", function (data) {\n      var coursesFolder = data.catalog.Courses_Folder.Courses_Folder;\n      var courses = [];\n      coursesFolder.forEach(function (folderItem) {\n        folderItem.Course.forEach(function (courseItem) {\n          courses.push(courseItem);\n        });\n      });\n      _this.setState(function (prevState) {\n        return {\n          coursesGroups: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prevState.coursesGroups), [courses, {\n            courses: courses,\n            label: _this.state.selectedOption\n          }])\n        };\n      });\n    });\n    return _this;\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CourseCatalog, [{\n    key: \"jsonp\",\n    value: function jsonp(url, callbackName) {\n      var script = document.createElement('script');\n      script.src = \"\".concat(url, \"&callback=\").concat(callbackName);\n      document.body.appendChild(script);\n      // Ensure the script gets removed after it's used to prevent pollution.\n      script.onload = function () {\n        document.body.removeChild(script);\n      };\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      window.handleData = this.handleData;\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Clean up to avoid any potential memory leaks.\n      window.handleData = null;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"div\", {\n        id: \"courses-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {\n        label: \"catalog\",\n        onChange: this.handleCatalogChange,\n        value: this.state.selectedOption,\n        open: this.state.open,\n        onOpen: function onOpen(event) {\n          console.log('*** onOpen handler called ***', event);\n          _this2.setState({\n            open: true\n          });\n        },\n        onClose: function onClose(event) {\n          console.log('*** onClose handler called ***', event);\n          _this2.setState({\n            open: false\n          });\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.DropdownItem, {\n        label: \"Select a Catalog\",\n        value: \"\",\n        disabled: true\n      }), options.map(function (option) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.DropdownItem, {\n          key: option.label,\n          label: option.label,\n          value: option.path\n        });\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {\n        label: \"courses\",\n        onChange: this.handleCourseChange,\n        value: this.state.selectedCourse,\n        open: this.state.open,\n        onOpen: function onOpen(event) {\n          console.log('*** onOpen handler called ***', event);\n          _this2.setState({\n            open: true\n          });\n        },\n        onClose: function onClose(event) {\n          console.log('*** onClose handler called ***', event);\n          _this2.setState({\n            open: false\n          });\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.DropdownItem, {\n        label: \"Select an Course\",\n        value: \"\",\n        disabled: true\n      }), courseOptions.map(function (course) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_9__.DropdownItem, {\n          key: course.label,\n          label: course.label,\n          value: course.path\n        });\n      })), this.state.coursesGroups.map(function (group, courses, index) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"div\", {\n          key: index\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"h2\", null, group.label), Array.isArray(group.courses) ? group.courses.map(function (course) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"div\", {\n            key: \"\".concat(course.subject_name, \"-\").concat(course.course_number)\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"h3\", null, course.subject_name, \" \", course.course_number, \": \", course.course_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"p\", null, course.course_description));\n        }) : null);\n      }));\n    }\n  }]);\n  return CourseCatalog;\n}(react__WEBPACK_IMPORTED_MODULE_8__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCatalog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU0RSxNQUFNLENBQUM1RSxLQUFNO1VBQ3BCNEIsS0FBSyxFQUFFZ0QsTUFBTSxDQUFDM0U7UUFBSyxDQUN0QixDQUFDO01BRVYsQ0FBQyxDQUNLLENBQUMsRUFDVixJQUFJLENBQUNpQyxLQUFLLENBQUNiLGFBQWEsQ0FBQ29ELEdBQUcsQ0FBQyxVQUFDSSxLQUFLLEVBQUVuQyxPQUFPLEVBQUVvQyxLQUFLO1FBQUEsb0JBQ2hEbkYsMERBQUE7VUFBS3dELEdBQUcsRUFBRTJCO1FBQU0sZ0JBQ1puRiwwREFBQSxhQUFLa0YsS0FBSyxDQUFDN0UsS0FBVSxDQUFDLEVBQ3JCYyxLQUFLLENBQUNpRSxPQUFPLENBQUNGLEtBQUssQ0FBQ25DLE9BQU8sQ0FBQyxHQUFHbUMsS0FBSyxDQUFDbkMsT0FBTyxDQUFDK0IsR0FBRyxDQUFDLFVBQUFHLE1BQU07VUFBQSxvQkFDcERqRiwwREFBQTtZQUFLd0QsR0FBRyxLQUFBakMsTUFBQSxDQUFLMEQsTUFBTSxDQUFDSSxZQUFZLE9BQUE5RCxNQUFBLENBQUkwRCxNQUFNLENBQUNLLGFBQWE7VUFBRyxnQkFDdkR0RiwwREFBQSxhQUFLaUYsTUFBTSxDQUFDSSxZQUFZLEVBQUMsR0FBQyxFQUFDSixNQUFNLENBQUNLLGFBQWEsRUFBQyxJQUFFLEVBQUNMLE1BQU0sQ0FBQ00sV0FBZ0IsQ0FBQyxlQUMzRXZGLDBEQUFBLFlBQUlpRixNQUFNLENBQUNPLGtCQUFzQixDQUNoQyxDQUFDO1FBQUEsQ0FDVCxDQUFDLEdBQUcsSUFDSixDQUFDO01BQUEsQ0FDVCxDQUNBLENBQUM7SUFFZDtFQUFDO0VBQUEsT0FBQWhGLGFBQUE7QUFBQSxFQWxKdUJQLDRDQUFTO0FBcUpyQyxpRUFBZU8sYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdXJzZS1jYXRhbG9nLy4vc3JjL2NhcmRzL0NvdXJzZUNhdGFsb2dDYXJkLmpzeD8yMTQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIERyb3Bkb3duLCBEcm9wZG93bkl0ZW0sXG4gICAgLy8gVHlwb2dyYXBoeSBcbn0gZnJvbSAnQGVsbHVjaWFuL3JlYWN0LWRlc2lnbi1zeXN0ZW0vY29yZSc7XG5cbi8vIGNvbnN0IGN1c3RvbUlkID0gJ0NvbnRyb2xsZWREcm9wZG93bkV4YW1wbGUnO1xuY29uc3Qgb3B0aW9ucyA9IFtcbiAgICB7IGxhYmVsOiAnMjAyMy0yMDI0IC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMy0yMDI0L1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZy9Db3Vyc2UtRGVzY3JpcHRpb25zJyB9LFxuICAgIHsgbGFiZWw6ICcyMDIyLTIwMjMgLSBVbmRlcmdyYWR1YXRlJywgcGF0aDogJy8yMDIyLTIwMjMvVW5kZXJncmFkdWF0ZS1DYXRhbG9nL0NvdXJzZS1EZXNjcmlwdGlvbnMnIH0sXG4gICAgeyBsYWJlbDogJzIwMjEtMjAyMiAtIFVuZGVyZ3JhZHVhdGUnLCBwYXRoOiAnLzIwMjEtMjAyMi9VbmRlcmdyYWR1YXRlLUNhdGFsb2cvQ291cnNlLURlc2NyaXB0aW9ucycgfSxcbiAgICB7IGxhYmVsOiAnMjAyMC0yMDIxIC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMC0yMDIxL0NhdGFsb2cvWC1NYWluLUNhbXB1cy1Db3Vyc2VzJyB9LFxuXTtcbmNvbnN0IGNvdXJzZU9wdGlvbnMgPSBbXG4gICAgeyBsYWJlbDogJ0J1c2luZXNzIEFjY291bnRpbmcnLCBwYXRoOiAnJyB9LFxuICAgIHsgbGFiZWw6ICczRCBBbWlubWF0aW9uIGFuZCBHYW1lIERlc2lnbicsIHBhdGg6ICcnIH0sXG4gICAgeyBsYWJlbDogJ0FudGhyb3BvbG9neScsIHBhdGg6ICcnIH0sXG4gICAgeyBsYWJlbDogJ0FyYWJpYycsIHBhdGg6ICcnIH0sXG4gICAgeyBsYWJlbDogJ0FydCBIaXN0b3J5JywgcGF0aDogJycgfSxcbiAgICB7IGxhYmVsOiAnQXJ0JywgcGF0aDogJycgfSxcbiAgICB7IGxhYmVsOiAnQXRobGV0aWMgVHJhaW5pbmcgRWR1Y2F0aW9uJywgcGF0aDogJycgfSxcbiAgICB7IGxhYmVsOiAnQnVzaW5lc3MgRmluYW5jZScsIHBhdGg6ICcnIH0sXG4gICAgeyBsYWJlbDogJ0ludGVybmF0aW9uYWwgQnVzaW5lc3MnLCBwYXRoOiAnJyB9LFxuICAgIHsgbGFiZWw6ICdCaW9sb2d5JywgcGF0aDogJycgfSxcbiAgICB7IGxhYmVsOiAnQnVzaW5lc3MgTGF3JywgcGF0aDogJycgfSxcbiAgICB7IGxhYmVsOiAnQnVzaW5lc3MgTWFuYWdlbWVudCBEZWNpc2lvbiBTeXN0ZW1zJywgcGF0aDogJycgfSxcbiAgICB7IGxhYmVsOiAnQnVzaW5lc3MgTWFuYWdlbWVudCcsIHBhdGg6ICcnIH0sXG4gICAgeyBsYWJlbDogJ0J1c2luZXNzIE1hcmtldGluZycsIHBhdGg6ICcnIH0sXG4gICAgeyBsYWJlbDogJ0J1c2luZXNzIFByb2Zlc3Npb25hbCBHb2xmIE1hbmFnZW1lbnQnLCBwYXRoOiAnJyB9LFxuICAgIHsgbGFiZWw6ICdNdXNpYycsIHBhdGg6ICcvTVVTSS1Ib25vcnMnIH0sXG5dO1xuXG5jbGFzcyBDb3Vyc2VDYXRhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY291cnNlc0dyb3VwczogW10sXG4gICAgICAgIHNlbGVjdGVkT3B0aW9uOiAnJyxcbiAgICAgICAgc2VsZWN0ZWRDb3Vyc2U6ICcnLFxuICAgICAgICBvcGVuOiBmYWxzZVxuICAgIH07XG5cbiAgICBqc29ucCh1cmwsIGNhbGxiYWNrTmFtZSkge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9IGAke3VybH0mY2FsbGJhY2s9JHtjYWxsYmFja05hbWV9YDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAvLyBFbnN1cmUgdGhlIHNjcmlwdCBnZXRzIHJlbW92ZWQgYWZ0ZXIgaXQncyB1c2VkIHRvIHByZXZlbnQgcG9sbHV0aW9uLlxuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZUNhdGFsb2dDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQYXRoID0gZXZlbnQudGFyZ2V0LnZhbHVlIHx8IGV2ZW50LmRldGFpbC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkT3B0aW9uOiBzZWxlY3RlZFBhdGggfSwgdGhpcy5mZXRjaERhdGEpO1xuICAgIH07XG5cbiAgICBoYW5kbGVDb3Vyc2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb3Vyc2VQYXRoID0gZXZlbnQudGFyZ2V0LnZhbHVlIHx8IGV2ZW50LmRldGFpbC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkQ291cnNlOiBzZWxlY3RlZENvdXJzZVBhdGggfSwgdGhpcy5mZXRjaERhdGEpO1xuICAgIH07XG5cbiAgICBmZXRjaERhdGEgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2lxMnByb2QxLnNtYXJ0Y2F0YWxvZ2lxLmNvbS9hcGlzL0N1c3RvbUNhdGFsb2dBUEk/cGF0aD0vc2l0ZWNvcmUvY29udGVudC9DYXRhbG9ncy9Vbml2ZXJzaXR5LW9mLXRoZS1JbmNhcm5hdGUtV29yZCR7dGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbn0ke3RoaXMuc3RhdGUuc2VsZWN0ZWRDb3Vyc2V9JmZvcm1hdD1qc29ucGA7XG4gICAgICAgIHRoaXMuanNvbnAodXJsLCAnaGFuZGxlRGF0YScpO1xuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgZnJvbSBVUkw6JywgdXJsKTtcbiAgICB9O1xuXG4gICAgLy8gaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdoYW5kbGVDaGFuZ2UgdHJpZ2dlcmVkJywgZXZlbnQpO1xuICAgIC8vICAgICBjb25zdCBzZWxlY3RlZFBhdGggPSBldmVudC50YXJnZXQudmFsdWUgfHwgZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRQYXRoJywgc2VsZWN0ZWRQYXRoKTtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBzZWxlY3RlZE9wdGlvbjogc2VsZWN0ZWRQYXRoLFxuICAgIC8vICAgICAgICAgY291cnNlc0dyb3VwczogW10gIC8vIENsZWFyIHByZXZpb3VzIGRhdGFcbiAgICAvLyAgICAgfSwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaXEycHJvZDEuc21hcnRjYXRhbG9naXEuY29tL2FwaXMvQ3VzdG9tQ2F0YWxvZ0FQST9wYXRoPS9zaXRlY29yZS9jb250ZW50L0NhdGFsb2dzL1VuaXZlcnNpdHktb2YtdGhlLUluY2FybmF0ZS1Xb3JkJHtzZWxlY3RlZFBhdGh9L01VU0ktSG9ub3JzJmZvcm1hdD1qc29ucGA7XG4gICAgLy8gICAgICAgICB0aGlzLmpzb25wKHVybCwgJ2hhbmRsZURhdGEnKTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBmcm9tIFVSTDonLCB1cmwpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9O1xuXG4gICAgaGFuZGxlRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdXJzZXNGb2xkZXIgPSBkYXRhLmNhdGFsb2cuQ291cnNlc19Gb2xkZXIuQ291cnNlc19Gb2xkZXI7XG4gICAgICAgIGxldCBjb3Vyc2VzID0gW107XG4gICAgICAgIGNvdXJzZXNGb2xkZXIuZm9yRWFjaChmb2xkZXJJdGVtID0+IHtcbiAgICAgICAgICAgIGZvbGRlckl0ZW0uQ291cnNlLmZvckVhY2goY291cnNlSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY291cnNlcy5wdXNoKGNvdXJzZUl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICAgICAgY291cnNlc0dyb3VwczogWy4uLnByZXZTdGF0ZS5jb3Vyc2VzR3JvdXBzLCBjb3Vyc2VzLCB7IGNvdXJzZXMsIGxhYmVsOiB0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uIH1dXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5oYW5kbGVEYXRhID0gdGhpcy5oYW5kbGVEYXRhO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAvLyBDbGVhbiB1cCB0byBhdm9pZCBhbnkgcG90ZW50aWFsIG1lbW9yeSBsZWFrcy5cbiAgICAgICAgd2luZG93LmhhbmRsZURhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3Vyc2VzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHsvKiBjYXRhbG9nIHllYXIgc2VsZWN0aW9uICovfVxuICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImNhdGFsb2dcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDYXRhbG9nQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICBvbk9wZW49eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKiBvbk9wZW4gaGFuZGxlciBjYWxsZWQgKioqJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKiBvbkNsb3NlIGhhbmRsZXIgY2FsbGVkICoqKicsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2VsZWN0IGEgQ2F0YWxvZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24ucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgey8qIGNvdXJzZSBtYWpvciBzZWxlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiY291cnNlc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNvdXJzZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDb3Vyc2V9XG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25PcGVuPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKiogb25PcGVuIGhhbmRsZXIgY2FsbGVkICoqKicsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKiogb25DbG9zZSBoYW5kbGVyIGNhbGxlZCAqKionLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBhbiBDb3Vyc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2NvdXJzZU9wdGlvbnMubWFwKGNvdXJzZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb3Vyc2UubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtjb3Vyc2UubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3Vyc2UucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jb3Vyc2VzR3JvdXBzLm1hcCgoZ3JvdXAsIGNvdXJzZXMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2dyb3VwLmxhYmVsfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShncm91cC5jb3Vyc2VzKSA/IGdyb3VwLmNvdXJzZXMubWFwKGNvdXJzZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2NvdXJzZS5zdWJqZWN0X25hbWV9LSR7Y291cnNlLmNvdXJzZV9udW1iZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y291cnNlLnN1YmplY3RfbmFtZX0ge2NvdXJzZS5jb3Vyc2VfbnVtYmVyfToge2NvdXJzZS5jb3Vyc2VfbmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y291cnNlLmNvdXJzZV9kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VDYXRhbG9nOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkRyb3Bkb3duIiwiRHJvcGRvd25JdGVtIiwib3B0aW9ucyIsImxhYmVsIiwicGF0aCIsImNvdXJzZU9wdGlvbnMiLCJDb3Vyc2VDYXRhbG9nIiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJfZGVmaW5lUHJvcGVydHkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiY291cnNlc0dyb3VwcyIsInNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRDb3Vyc2UiLCJvcGVuIiwiZXZlbnQiLCJzZWxlY3RlZFBhdGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRldGFpbCIsInNldFN0YXRlIiwiZmV0Y2hEYXRhIiwic2VsZWN0ZWRDb3Vyc2VQYXRoIiwidXJsIiwic3RhdGUiLCJqc29ucCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY291cnNlc0ZvbGRlciIsImNhdGFsb2ciLCJDb3Vyc2VzX0ZvbGRlciIsImNvdXJzZXMiLCJmb3JFYWNoIiwiZm9sZGVySXRlbSIsIkNvdXJzZSIsImNvdXJzZUl0ZW0iLCJwdXNoIiwicHJldlN0YXRlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiY2FsbGJhY2tOYW1lIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYm9keSIsImFwcGVuZENoaWxkIiwib25sb2FkIiwicmVtb3ZlQ2hpbGQiLCJjb21wb25lbnREaWRNb3VudCIsIndpbmRvdyIsImhhbmRsZURhdGEiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIl90aGlzMiIsImlkIiwib25DaGFuZ2UiLCJoYW5kbGVDYXRhbG9nQ2hhbmdlIiwib25PcGVuIiwib25DbG9zZSIsImRpc2FibGVkIiwibWFwIiwib3B0aW9uIiwiaGFuZGxlQ291cnNlQ2hhbmdlIiwiY291cnNlIiwiZ3JvdXAiLCJpbmRleCIsImlzQXJyYXkiLCJzdWJqZWN0X25hbWUiLCJjb3Vyc2VfbnVtYmVyIiwiY291cnNlX25hbWUiLCJjb3Vyc2VfZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/cards/CourseCatalogCard.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3cf6efbc059b99d394dd")
/******/ })();
/******/ 
/******/ }
);