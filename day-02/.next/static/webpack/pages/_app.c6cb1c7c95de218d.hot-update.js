"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./contexts/UsernameContext.js":
/*!*************************************!*\
  !*** ./contexts/UsernameContext.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsernameContextProvider\": function() { return /* binding */ UsernameContextProvider; },\n/* harmony export */   \"useUsername\": function() { return /* binding */ useUsername; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst UsernameContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    username: \"\",\n    changeUsername: (name)=>{}\n});\nconst useUsername = ()=>{\n    _s();\n    const { username , changeUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UsernameContext);\n    return {\n        username,\n        changeUsername\n    };\n};\n_s(useUsername, \"/VddibIq61sy2/gR5hK1udUhUVI=\");\nconst UsernameContextProvider = (param)=>{\n    let { children  } = param;\n    _s1();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default_username\");\n    const changeUsername = (name)=>setUsername(name);\n    const value = {\n        username,\n        changeUsername\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UsernameContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbook/workshop/lectures/day-02/contexts/UsernameContext.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(UsernameContextProvider, \"xVgHTtroTt/pj+z/H0HWFvHj67E=\");\n_c = UsernameContextProvider;\nvar _c;\n$RefreshReg$(_c, \"UsernameContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9Vc2VybmFtZUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEQ7QUFFMUQsTUFBTUcsZ0NBQWtCSCxvREFBYUEsQ0FBQztJQUNsQ0ksVUFBVTtJQUNWQyxnQkFBZ0IsQ0FBQ0MsT0FBUyxDQUMxQjtBQUNKO0FBRU8sTUFBTUMsY0FBYyxJQUFNOztJQUM3QixNQUFNLEVBQUNILFNBQVEsRUFBRUMsZUFBYyxFQUFDLEdBQUdKLGlEQUFVQSxDQUFDRTtJQUM5QyxPQUFPO1FBQ0hDO1FBQ0FDO0lBQ0o7QUFDSixFQUFDO0dBTllFO0FBUU4sTUFBTUMsMEJBQTBCLFNBQWdCO1FBQWYsRUFBQ0MsU0FBUSxFQUFDOztJQUM5QyxNQUFNLENBQUNMLFVBQVVNLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFFekMsTUFBTUcsaUJBQWlCLENBQUNDLE9BQVNJLFlBQVlKO0lBRTdDLE1BQU1LLFFBQVE7UUFDVlA7UUFDQUM7SUFDSjtJQUVBLHFCQUNJLDhEQUFDRixnQkFBZ0JTLFFBQVE7UUFBQ0QsT0FBT0E7a0JBQzVCRjs7Ozs7O0FBR2IsRUFBQztJQWZZRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0cy9Vc2VybmFtZUNvbnRleHQuanM/MTg2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVXNlcm5hbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIGNoYW5nZVVzZXJuYW1lOiAobmFtZSkgPT4ge1xuICAgIH0sXG59KVxuXG5leHBvcnQgY29uc3QgdXNlVXNlcm5hbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qge3VzZXJuYW1lLCBjaGFuZ2VVc2VybmFtZX0gPSB1c2VDb250ZXh0KFVzZXJuYW1lQ29udGV4dClcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgY2hhbmdlVXNlcm5hbWUsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVXNlcm5hbWVDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJ2RlZmF1bHRfdXNlcm5hbWUnKVxuXG4gICAgY29uc3QgY2hhbmdlVXNlcm5hbWUgPSAobmFtZSkgPT4gc2V0VXNlcm5hbWUobmFtZSlcblxuICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgY2hhbmdlVXNlcm5hbWUsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFVzZXJuYW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1VzZXJuYW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlVzZXJuYW1lQ29udGV4dCIsInVzZXJuYW1lIiwiY2hhbmdlVXNlcm5hbWUiLCJuYW1lIiwidXNlVXNlcm5hbWUiLCJVc2VybmFtZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwic2V0VXNlcm5hbWUiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/UsernameContext.js\n"));

/***/ })

});