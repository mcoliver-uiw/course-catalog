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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/maggieoliveros/Desktop/projects/course-catalog/src/cards/CourseCatalogCard.jsx: Unexpected token, expected \",\" (110:31)\n\n\u001b[0m \u001b[90m 108 |\u001b[39m \u001b[32m            <div id=\"courses-container\">\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 109 |\u001b[39m \u001b[32m                {this.state.courses.map(course => (\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 110 |\u001b[39m \u001b[32m                    <div key={`\u001b[39m${course\u001b[33m.\u001b[39msubject_name}\u001b[33m-\u001b[39m${course\u001b[33m.\u001b[39mcourse_number}\u001b[32m`}>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 111 |\u001b[39m \u001b[32m                        <h3>{course.subject_name} {course.course_number}: {course.course_name}</h3>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 112 |\u001b[39m \u001b[32m                        <p>{course.course_description}</p>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 113 |\u001b[39m \u001b[32m                    </div>\u001b[39m\u001b[0m\n    at constructor (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:345:19)\n    at JSXParserMixin.raise (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:3199:19)\n    at JSXParserMixin.unexpected (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:3229:16)\n    at JSXParserMixin.expect (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:3566:28)\n    at JSXParserMixin.parseCallExpressionArguments (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:11019:14)\n    at JSXParserMixin.parseCoverCallAndAsyncArrowHead (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10943:29)\n    at JSXParserMixin.parseSubscript (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10878:19)\n    at JSXParserMixin.parseSubscripts (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10849:19)\n    at JSXParserMixin.parseExprSubscripts (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10840:17)\n    at JSXParserMixin.parseUpdate (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10819:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10795:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10633:61)\n    at JSXParserMixin.parseExprOps (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10638:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10615:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10576:21)\n    at JSXParserMixin.parseExpressionBase (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10530:23)\n    at /Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10526:39\n    at JSXParserMixin.allowInAnd (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:12221:16)\n    at JSXParserMixin.parseExpression (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:10526:17)\n    at JSXParserMixin.parseStatementContent (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:12679:23)\n    at JSXParserMixin.parseStatementLike (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:12530:17)\n    at JSXParserMixin.parseStatementListItem (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:12510:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13131:61)\n    at JSXParserMixin.parseBlockBody (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13124:10)\n    at JSXParserMixin.parseBlock (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13112:10)\n    at JSXParserMixin.parseFunctionBody (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:11893:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:11879:10)\n    at JSXParserMixin.parseMethod (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:11837:31)\n    at JSXParserMixin.pushClassMethod (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13565:30)\n    at JSXParserMixin.parseClassMemberWithIsStatic (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13437:12)\n    at JSXParserMixin.parseClassMember (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13381:10)\n    at /Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13331:14\n    at JSXParserMixin.withSmartMixTopicForbiddingContext (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:12203:14)\n    at JSXParserMixin.parseClassBody (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13311:10)\n    at JSXParserMixin.parseClass (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13289:22)\n    at JSXParserMixin.parseStatementContent (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:12559:21)\n    at JSXParserMixin.parseStatementLike (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:12530:17)\n    at JSXParserMixin.parseModuleItem (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:12507:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13131:36)\n    at JSXParserMixin.parseBlockBody (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:13124:10)\n    at JSXParserMixin.parseProgram (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:12406:10)\n    at JSXParserMixin.parseTopLevel (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:12396:25)\n    at JSXParserMixin.parse (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:14292:10)\n    at parse (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/parser/lib/index.js:14333:38)\n    at parser (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/core/lib/transformation/normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/maggieoliveros/Desktop/projects/course-catalog/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b19f0f503284d204a786")
/******/ })();
/******/ 
/******/ }
);