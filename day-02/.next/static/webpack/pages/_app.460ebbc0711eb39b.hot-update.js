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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UsernameContextProvider\": function() { return /* binding */ UsernameContextProvider; },\n/* harmony export */   \"useUsername\": function() { return /* binding */ useUsername; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst UsernameContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    username: \"\",\n    setUsername: ()=>{}\n});\nconst useUsername = ()=>{\n    _s();\n    const {} = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UsernameContext);\n    return username;\n};\n_s(useUsername, \"GEVSeSrD72hjJ3fa3BFTxaVyljk=\");\nconst UsernameContextProvider = (param)=>{\n    let { children  } = param;\n    _s1();\n    const [username1, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default_username\");\n    const value = {\n        username: username1,\n        setUsername\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UsernameContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbook/workshop/lectures/day-02/contexts/UsernameContext.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(UsernameContextProvider, \"xVgHTtroTt/pj+z/H0HWFvHj67E=\");\n_c = UsernameContextProvider;\nvar _c;\n$RefreshReg$(_c, \"UsernameContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9Vc2VybmFtZUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEQ7QUFFMUQsTUFBTUcsZ0NBQWtCSCxvREFBYUEsQ0FBQztJQUNsQ0ksVUFBVTtJQUNWQyxhQUFhLElBQU0sQ0FDbkI7QUFDSjtBQUVPLE1BQU1DLGNBQWMsSUFBTTs7SUFDN0IsTUFBTSxFQUFFLEdBQUdMLGlEQUFVQSxDQUFDRTtJQUN0QixPQUFPQztBQUNYLEVBQUM7R0FIWUU7QUFLTixNQUFNQywwQkFBMEIsU0FBZ0I7UUFBZixFQUFDQyxTQUFRLEVBQUM7O0lBQzlDLE1BQU0sQ0FBQ0osV0FBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNTyxRQUFRO1FBQ1ZMLFVBQUFBO1FBQ0FDO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0YsZ0JBQWdCTyxRQUFRO1FBQUNELE9BQU9BO2tCQUM1QkQ7Ozs7OztBQUdiLEVBQUM7SUFaWUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvVXNlcm5hbWVDb250ZXh0LmpzPzE4NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFVzZXJuYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBzZXRVc2VybmFtZTogKCkgPT4ge1xuICAgIH0sXG59KVxuXG5leHBvcnQgY29uc3QgdXNlVXNlcm5hbWUgPSAoKSA9PiB7XG4gICAgY29uc3Qge30gPSB1c2VDb250ZXh0KFVzZXJuYW1lQ29udGV4dClcbiAgICByZXR1cm4gdXNlcm5hbWVcbn1cblxuZXhwb3J0IGNvbnN0IFVzZXJuYW1lQ29udGV4dFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCdkZWZhdWx0X3VzZXJuYW1lJylcbiAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHNldFVzZXJuYW1lLFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxVc2VybmFtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Vc2VybmFtZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJVc2VybmFtZUNvbnRleHQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlVXNlcm5hbWUiLCJVc2VybmFtZUNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/UsernameContext.js\n"));

/***/ })

});