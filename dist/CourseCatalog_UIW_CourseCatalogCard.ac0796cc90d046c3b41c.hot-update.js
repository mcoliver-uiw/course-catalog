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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n// import {\n//     Dropdown, DropdownItem,\n//     // Typography \n// } from '@ellucian/react-design-system/core';\nvar CourseCatalog = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CourseCatalog, _Component);\n  var _super = _createSuper(CourseCatalog);\n  function CourseCatalog(props) {\n    var _this;\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CourseCatalog);\n    _this = _super.call(this, props);\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"handleData\", function (data) {\n      var coursesFolder = data.catalog.Courses_Folder.Courses_Folder;\n      var courses = [];\n      coursesFolder.forEach(function (folderItem) {\n        folderItem.Course.forEach(function (courseItem) {\n          courses.push(courseItem);\n        });\n      });\n      _this.setState(function (prevState) {\n        return {\n          courseGroups: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(prevState.courseGroups), [courses])\n        };\n      });\n    });\n    _this.state = {\n      courseGroups: []\n    };\n    return _this;\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CourseCatalog, [{\n    key: \"jsonp\",\n    value: function jsonp(url, callbackName) {\n      var script = document.createElement('script');\n      script.src = \"\".concat(url, \"&callback=\").concat(callbackName);\n      document.body.appendChild(script);\n      // Ensure the script gets removed after it's used to prevent pollution.\n      script.onload = function () {\n        document.body.removeChild(script);\n      };\n    }\n\n    // handleData = (data) => {\n    //     const coursesFolder = data.catalog.Courses_Folder.Courses_Folder;\n    //     let courses = [];\n\n    //     coursesFolder.forEach(folderItem => {\n    //         folderItem.Course.forEach(courseItem => {\n    //             courses.push(courseItem);\n    //         });\n    //     });\n\n    //     this.setState({ courses });\n    // };\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n      var options = [{\n        label: '2023-2024 - Undergraduate',\n        path: '/2023-2024/Undergraduate-Catalog'\n      }\n      // { label: '2022-2023 - Undergraduate', path: '/2022-2023/Undergraduate-Catalog' },\n      // { label: '2021-2022 - Undergraduate', path: '/2021-2022/Undergraduate-Catalog' },\n      // { label: '2020-2021 - Undergraduate', path: '/2020-2021/Undergraduate-Catalog' },\n      // { label: '2023-2024 - Graduate', path: '/2023-2024/Graduate-Catalog' },\n      // { label: '2022-2023 - Graduate', path: '/2022-2023/Graduate-Catalog' },\n      // { label: '2021-2022 - Graduate', path: '/2021-2022/Graduate-Catalog' },\n      // { label: '2020-2021 - Graduate', path: '/2020-2021/Graduate-Catalog' },\n      ];\n\n      window.handleData = this.handleData;\n      options.forEach(function (option) {\n        var url = \"https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word\".concat(option.path, \"/Course-Descriptions/MUSI-Honors&format=jsonp\");\n        _this2.jsonp(url, 'handleData');\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // Clean up to avoid any potential memory leaks.\n      window.handleData = null;\n    }\n\n    // state = {\n    //     years: '',\n    //     initialValue: '',\n    //     open: false,\n    // };\n\n    // handleChange = event => {\n    //     const selectedPath = event.target.value;\n    //     if (selectedPath === 'None') {\n    //         this.setState({\n    //             years: this.state.initialValue,\n    //         });\n    //     } else {\n    //         this.setState({\n    //             years: selectedPath, // Set years to the selected path (or you might want to rename 'years' to a more descriptive name like 'selectedPath')\n    //         }, () => {\n    //             this.solutions(this.state.years);\n    //         });\n    //     }\n    // };\n\n    // componentDidMount() {\n    //     this.state.years;\n    // }\n    // solutions(selectedPath) {\n    //     if (!selectedPath || selectedPath === 'None') return;\n    //     const apiUrl = 'https://iq2prod1.smartcatalogiq.com/apis/CustomCatalogAPI?path=/sitecore/content/Catalogs/University-of-the-Incarnate-Word';\n    //     const queryParams = selectedPath;\n    //     const format = '&format=jsonp';\n    //     fetch (apiUrl + queryParams + format, {\n    //         headers: {\n    //             'Content-Type': 'application/json',\n    //         },\n    //     })\n    //     .then((response) => {\n    //         if (!response.ok) {\n    //             throw new Error('Network response was not ok');\n    //         }\n    //         return response.json();\n    //     })\n    //     .then((data) => {\n    //         this.setState({ results: data });\n    //     })\n    //     .catch((error) => {\n    //         console.error(error);\n    //     });\n\n    //     console.log(queryParams);\n    // }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"div\", {\n        id: \"courses-container\"\n      }, this.state.coursesGroups.map(course, function (index) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"div\", {\n          key: index\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"h2\", null, options[index].label), courses.map(function (course) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"div\", {\n            key: \"\".concat(course.subject_name, \"-\").concat(course.course_number)\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"h3\", null, course.subject_name, \" \", course.course_number, \": \", course.course_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default().createElement(\"p\", null, course.course_description));\n        }));\n      }));\n    }\n  }]);\n  return CourseCatalog;\n}(react__WEBPACK_IMPORTED_MODULE_8__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCatalog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FyZHMvQ291cnNlQ2F0YWxvZ0NhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQUEsSUFFTUUsYUFBYSwwQkFBQUMsVUFBQTtFQUFBQyxzRUFBQSxDQUFBRixhQUFBLEVBQUFDLFVBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosYUFBQTtFQUNmLFNBQUFBLGNBQVlLLEtBQUssRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQUMsNEVBQUEsT0FBQVAsYUFBQTtJQUNmTSxLQUFBLEdBQUFILE1BQUEsQ0FBQUssSUFBQSxPQUFNSCxLQUFLO0lBQUVJLDRFQUFBLENBQUFDLG1GQUFBLENBQUFKLEtBQUEsaUJBZ0RKLFVBQUNLLElBQUksRUFBSztNQUNuQixJQUFNQyxhQUFhLEdBQUdELElBQUksQ0FBQ0UsT0FBTyxDQUFDQyxjQUFjLENBQUNBLGNBQWM7TUFDaEUsSUFBSUMsT0FBTyxHQUFHLEVBQUU7TUFDaEJILGFBQWEsQ0FBQ0ksT0FBTyxDQUFDLFVBQUFDLFVBQVUsRUFBSTtRQUNoQ0EsVUFBVSxDQUFDQyxNQUFNLENBQUNGLE9BQU8sQ0FBQyxVQUFBRyxVQUFVLEVBQUk7VUFDcENKLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDRCxVQUFVLENBQUM7UUFDNUIsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO01BQ0ZiLEtBQUEsQ0FBS2UsUUFBUSxDQUFDLFVBQUFDLFNBQVM7UUFBQSxPQUFLO1VBQ3hCQyxZQUFZLEtBQUFDLE1BQUEsQ0FBQUMsK0VBQUEsQ0FBTUgsU0FBUyxDQUFDQyxZQUFZLElBQUVSLE9BQU87UUFDckQsQ0FBQztNQUFBLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6REdULEtBQUEsQ0FBS29CLEtBQUssR0FBRztNQUNUSCxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUFDLE9BQUFqQixLQUFBO0VBQ047RUFBQ3FCLHlFQUFBLENBQUEzQixhQUFBO0lBQUE0QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxNQUFNQyxHQUFHLEVBQUVDLFlBQVksRUFBRTtNQUNyQixJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUMvQ0YsTUFBTSxDQUFDRyxHQUFHLE1BQUFaLE1BQUEsQ0FBTU8sR0FBRyxnQkFBQVAsTUFBQSxDQUFhUSxZQUFZLENBQUU7TUFDOUNFLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxXQUFXLENBQUNMLE1BQU0sQ0FBQztNQUNqQztNQUNBQSxNQUFNLENBQUNNLE1BQU0sR0FBRyxZQUFNO1FBQ2xCTCxRQUFRLENBQUNHLElBQUksQ0FBQ0csV0FBVyxDQUFDUCxNQUFNLENBQUM7TUFDckMsQ0FBQztJQUNMOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7RUFBQTtJQUFBTCxHQUFBO0lBQUFDLEtBQUEsRUFFQSxTQUFBWSxrQkFBQSxFQUFvQjtNQUFBLElBQUFDLE1BQUE7TUFDaEIsSUFBTUMsT0FBTyxHQUFHLENBQ1o7UUFBRUMsS0FBSyxFQUFFLDJCQUEyQjtRQUFFQyxJQUFJLEVBQUU7TUFBbUM7TUFDL0U7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFBQSxDQUNIOztNQUNEQyxNQUFNLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVU7TUFDbkNKLE9BQU8sQ0FBQzNCLE9BQU8sQ0FBQyxVQUFBZ0MsTUFBTSxFQUFJO1FBQ3RCLElBQU1qQixHQUFHLGdJQUFBUCxNQUFBLENBQWdJd0IsTUFBTSxDQUFDSCxJQUFJLGtEQUErQztRQUNuTUgsTUFBSSxDQUFDWixLQUFLLENBQUNDLEdBQUcsRUFBRSxZQUFZLENBQUM7TUFDakMsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFlRCxTQUFBb0IscUJBQUEsRUFBdUI7TUFDbkI7TUFDQUgsTUFBTSxDQUFDQyxVQUFVLEdBQUcsSUFBSTtJQUM1Qjs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQTtFQUFBO0lBQUFuQixHQUFBO0lBQUFDLEtBQUEsRUFJQSxTQUFBcUIsT0FBQSxFQUFTO01BQ0wsb0JBQ0lwRCwwREFBQTtRQUFLcUQsRUFBRSxFQUFDO01BQW1CLEdBQ3RCLElBQUksQ0FBQ3pCLEtBQUssQ0FBQzBCLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDQyxNQUFNLEVBQUUsVUFBQUMsS0FBSztRQUFBLG9CQUN2Q3pELDBEQUFBO1VBQUs4QixHQUFHLEVBQUUyQjtRQUFNLGdCQUNaekQsMERBQUEsYUFBSzZDLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDLENBQUNYLEtBQVUsQ0FBQyxFQUM5QjdCLE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQyxVQUFBQyxNQUFNO1VBQUEsb0JBQ2Z4RCwwREFBQTtZQUFLOEIsR0FBRyxLQUFBSixNQUFBLENBQUs4QixNQUFNLENBQUNFLFlBQVksT0FBQWhDLE1BQUEsQ0FBSThCLE1BQU0sQ0FBQ0csYUFBYTtVQUFHLGdCQUN2RDNELDBEQUFBLGFBQUt3RCxNQUFNLENBQUNFLFlBQVksRUFBQyxHQUFDLEVBQUNGLE1BQU0sQ0FBQ0csYUFBYSxFQUFDLElBQUUsRUFBQ0gsTUFBTSxDQUFDSSxXQUFnQixDQUFDLGVBQzNFNUQsMERBQUEsWUFBSXdELE1BQU0sQ0FBQ0ssa0JBQXNCLENBQ2hDLENBQUM7UUFBQSxDQUNULENBQ0EsQ0FBQztNQUFBLENBQ1QsQ0FDQSxDQUFDO0lBRWQ7RUFBQztFQUFBLE9BQUEzRCxhQUFBO0FBQUEsRUF4SXVCRCw0Q0FBUztBQTJJckMsaUVBQWVDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2UtY2F0YWxvZy8uL3NyYy9jYXJkcy9Db3Vyc2VDYXRhbG9nQ2FyZC5qc3g/MjE0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHtcbi8vICAgICBEcm9wZG93biwgRHJvcGRvd25JdGVtLFxuLy8gICAgIC8vIFR5cG9ncmFwaHkgXG4vLyB9IGZyb20gJ0BlbGx1Y2lhbi9yZWFjdC1kZXNpZ24tc3lzdGVtL2NvcmUnO1xuXG5jbGFzcyBDb3Vyc2VDYXRhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvdXJzZUdyb3VwczogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBqc29ucCh1cmwsIGNhbGxiYWNrTmFtZSkge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9IGAke3VybH0mY2FsbGJhY2s9JHtjYWxsYmFja05hbWV9YDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAvLyBFbnN1cmUgdGhlIHNjcmlwdCBnZXRzIHJlbW92ZWQgYWZ0ZXIgaXQncyB1c2VkIHRvIHByZXZlbnQgcG9sbHV0aW9uLlxuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZURhdGEgPSAoZGF0YSkgPT4ge1xuICAgIC8vICAgICBjb25zdCBjb3Vyc2VzRm9sZGVyID0gZGF0YS5jYXRhbG9nLkNvdXJzZXNfRm9sZGVyLkNvdXJzZXNfRm9sZGVyO1xuICAgIC8vICAgICBsZXQgY291cnNlcyA9IFtdO1xuXG4gICAgLy8gICAgIGNvdXJzZXNGb2xkZXIuZm9yRWFjaChmb2xkZXJJdGVtID0+IHtcbiAgICAvLyAgICAgICAgIGZvbGRlckl0ZW0uQ291cnNlLmZvckVhY2goY291cnNlSXRlbSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY291cnNlcy5wdXNoKGNvdXJzZUl0ZW0pO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBjb3Vyc2VzIH0pO1xuICAgIC8vIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgICAgICAgIHsgbGFiZWw6ICcyMDIzLTIwMjQgLSBVbmRlcmdyYWR1YXRlJywgcGF0aDogJy8yMDIzLTIwMjQvVW5kZXJncmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8geyBsYWJlbDogJzIwMjItMjAyMyAtIFVuZGVyZ3JhZHVhdGUnLCBwYXRoOiAnLzIwMjItMjAyMy9VbmRlcmdyYWR1YXRlLUNhdGFsb2cnIH0sXG4gICAgICAgICAgICAvLyB7IGxhYmVsOiAnMjAyMS0yMDIyIC0gVW5kZXJncmFkdWF0ZScsIHBhdGg6ICcvMjAyMS0yMDIyL1VuZGVyZ3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vIHsgbGFiZWw6ICcyMDIwLTIwMjEgLSBVbmRlcmdyYWR1YXRlJywgcGF0aDogJy8yMDIwLTIwMjEvVW5kZXJncmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8geyBsYWJlbDogJzIwMjMtMjAyNCAtIEdyYWR1YXRlJywgcGF0aDogJy8yMDIzLTIwMjQvR3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgICAgIC8vIHsgbGFiZWw6ICcyMDIyLTIwMjMgLSBHcmFkdWF0ZScsIHBhdGg6ICcvMjAyMi0yMDIzL0dyYWR1YXRlLUNhdGFsb2cnIH0sXG4gICAgICAgICAgICAvLyB7IGxhYmVsOiAnMjAyMS0yMDIyIC0gR3JhZHVhdGUnLCBwYXRoOiAnLzIwMjEtMjAyMi9HcmFkdWF0ZS1DYXRhbG9nJyB9LFxuICAgICAgICAgICAgLy8geyBsYWJlbDogJzIwMjAtMjAyMSAtIEdyYWR1YXRlJywgcGF0aDogJy8yMDIwLTIwMjEvR3JhZHVhdGUtQ2F0YWxvZycgfSxcbiAgICAgICAgXTtcbiAgICAgICAgd2luZG93LmhhbmRsZURhdGEgPSB0aGlzLmhhbmRsZURhdGE7XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaXEycHJvZDEuc21hcnRjYXRhbG9naXEuY29tL2FwaXMvQ3VzdG9tQ2F0YWxvZ0FQST9wYXRoPS9zaXRlY29yZS9jb250ZW50L0NhdGFsb2dzL1VuaXZlcnNpdHktb2YtdGhlLUluY2FybmF0ZS1Xb3JkJHtvcHRpb24ucGF0aH0vQ291cnNlLURlc2NyaXB0aW9ucy9NVVNJLUhvbm9ycyZmb3JtYXQ9anNvbnBgO1xuICAgICAgICAgICAgdGhpcy5qc29ucCh1cmwsICdoYW5kbGVEYXRhJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZURhdGEgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBjb3Vyc2VzRm9sZGVyID0gZGF0YS5jYXRhbG9nLkNvdXJzZXNfRm9sZGVyLkNvdXJzZXNfRm9sZGVyO1xuICAgICAgICBsZXQgY291cnNlcyA9IFtdO1xuICAgICAgICBjb3Vyc2VzRm9sZGVyLmZvckVhY2goZm9sZGVySXRlbSA9PiB7XG4gICAgICAgICAgICBmb2xkZXJJdGVtLkNvdXJzZS5mb3JFYWNoKGNvdXJzZUl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvdXJzZXMucHVzaChjb3Vyc2VJdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgIGNvdXJzZUdyb3VwczogWy4uLnByZXZTdGF0ZS5jb3Vyc2VHcm91cHMsIGNvdXJzZXNdXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIC8vIENsZWFuIHVwIHRvIGF2b2lkIGFueSBwb3RlbnRpYWwgbWVtb3J5IGxlYWtzLlxuICAgICAgICB3aW5kb3cuaGFuZGxlRGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gc3RhdGUgPSB7XG4gICAgLy8gICAgIHllYXJzOiAnJyxcbiAgICAvLyAgICAgaW5pdGlhbFZhbHVlOiAnJyxcbiAgICAvLyAgICAgb3BlbjogZmFsc2UsXG4gICAgLy8gfTtcblxuICAgIC8vIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAvLyAgICAgY29uc3Qgc2VsZWN0ZWRQYXRoID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIC8vICAgICBpZiAoc2VsZWN0ZWRQYXRoID09PSAnTm9uZScpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgICAgIHllYXJzOiB0aGlzLnN0YXRlLmluaXRpYWxWYWx1ZSxcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICAgICAgeWVhcnM6IHNlbGVjdGVkUGF0aCwgLy8gU2V0IHllYXJzIHRvIHRoZSBzZWxlY3RlZCBwYXRoIChvciB5b3UgbWlnaHQgd2FudCB0byByZW5hbWUgJ3llYXJzJyB0byBhIG1vcmUgZGVzY3JpcHRpdmUgbmFtZSBsaWtlICdzZWxlY3RlZFBhdGgnKVxuICAgIC8vICAgICAgICAgfSwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuc29sdXRpb25zKHRoaXMuc3RhdGUueWVhcnMpO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9O1xuXG4gICAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gICAgIHRoaXMuc3RhdGUueWVhcnM7XG4gICAgLy8gfVxuICAgIC8vIHNvbHV0aW9ucyhzZWxlY3RlZFBhdGgpIHtcbiAgICAvLyAgICAgaWYgKCFzZWxlY3RlZFBhdGggfHwgc2VsZWN0ZWRQYXRoID09PSAnTm9uZScpIHJldHVybjtcbiAgICAvLyAgICAgY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vaXEycHJvZDEuc21hcnRjYXRhbG9naXEuY29tL2FwaXMvQ3VzdG9tQ2F0YWxvZ0FQST9wYXRoPS9zaXRlY29yZS9jb250ZW50L0NhdGFsb2dzL1VuaXZlcnNpdHktb2YtdGhlLUluY2FybmF0ZS1Xb3JkJztcbiAgICAvLyAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBzZWxlY3RlZFBhdGg7XG4gICAgLy8gICAgIGNvbnN0IGZvcm1hdCA9ICcmZm9ybWF0PWpzb25wJztcbiAgICAvLyAgICAgZmV0Y2ggKGFwaVVybCArIHF1ZXJ5UGFyYW1zICsgZm9ybWF0LCB7XG4gICAgLy8gICAgICAgICBoZWFkZXJzOiB7XG4gICAgLy8gICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIC8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIC8vICAgICB9KVxuICAgIC8vICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdHM6IGRhdGEgfSk7XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIC8vICAgICB9KTtcblxuICAgIC8vICAgICBjb25zb2xlLmxvZyhxdWVyeVBhcmFtcyk7XG4gICAgLy8gfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3Vyc2VzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvdXJzZXNHcm91cHMubWFwKGNvdXJzZSwgaW5kZXggPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntvcHRpb25zW2luZGV4XS5sYWJlbH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdXJzZXMubWFwKGNvdXJzZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2NvdXJzZS5zdWJqZWN0X25hbWV9LSR7Y291cnNlLmNvdXJzZV9udW1iZXJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y291cnNlLnN1YmplY3RfbmFtZX0ge2NvdXJzZS5jb3Vyc2VfbnVtYmVyfToge2NvdXJzZS5jb3Vyc2VfbmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y291cnNlLmNvdXJzZV9kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJzZUNhdGFsb2c7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ291cnNlQ2F0YWxvZyIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJkYXRhIiwiY291cnNlc0ZvbGRlciIsImNhdGFsb2ciLCJDb3Vyc2VzX0ZvbGRlciIsImNvdXJzZXMiLCJmb3JFYWNoIiwiZm9sZGVySXRlbSIsIkNvdXJzZSIsImNvdXJzZUl0ZW0iLCJwdXNoIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJjb3Vyc2VHcm91cHMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzdGF0ZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwianNvbnAiLCJ1cmwiLCJjYWxsYmFja05hbWUiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJvbmxvYWQiLCJyZW1vdmVDaGlsZCIsImNvbXBvbmVudERpZE1vdW50IiwiX3RoaXMyIiwib3B0aW9ucyIsImxhYmVsIiwicGF0aCIsIndpbmRvdyIsImhhbmRsZURhdGEiLCJvcHRpb24iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImlkIiwiY291cnNlc0dyb3VwcyIsIm1hcCIsImNvdXJzZSIsImluZGV4Iiwic3ViamVjdF9uYW1lIiwiY291cnNlX251bWJlciIsImNvdXJzZV9uYW1lIiwiY291cnNlX2Rlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/cards/CourseCatalogCard.jsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7b7c2ba421001a1729c2")
/******/ })();
/******/ 
/******/ }
);