"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/page",{

/***/ "(app-pages-browser)/./app/blog/page.tsx":
/*!***************************!*\
  !*** ./app/blog/page.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card */ \"(app-pages-browser)/./components/Card.tsx\");\n/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/fetch */ \"(app-pages-browser)/./lib/fetch.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Blog = async ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_2__.fetchAllPosts)();\n            setPosts(data);\n            console.log(data);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-center\",\n        children: posts.map((post)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                name: post.title,\n                excerpt: post.excerpt\n            }, post.slug, false, {\n                fileName: \"/Users/nicolemanuele/dev/github/nixkita/frontend/app/blog/page.tsx\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/nicolemanuele/dev/github/nixkita/frontend/app/blog/page.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blog, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9nL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ29DO0FBQ1E7QUFFTztBQUVuRCxNQUFNSyxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1LLFlBQVk7WUFDaEIsTUFBTUMsT0FBTyxNQUFNUix5REFBYUE7WUFDaENNLFNBQVNFO1lBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtRQUVBRDtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNaUCxNQUFNUSxHQUFHLENBQUMsQ0FBQ0M7WUFDVixxQkFDRSw4REFBQ2Ysd0RBQUlBO2dCQUVIZ0IsTUFBTUQsS0FBS0UsS0FBSztnQkFDaEJDLFNBQVNILEtBQUtHLE9BQU87ZUFGaEJILEtBQUtJLElBQUk7Ozs7O1FBS3BCOzs7Ozs7QUFHTjtHQXpCTWQ7S0FBQUE7QUEyQk4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Jsb2cvcGFnZS50c3g/OWM5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IENhcmQgZnJvbSAnQC9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgeyBmZXRjaEFsbFBvc3RzIH0gZnJvbSAnQC9saWIvZmV0Y2gnO1xuaW1wb3J0IHsgUG9zdENhcmQgfSBmcm9tICdAL3R5cGVzL3Bvc3RDYXJkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBCbG9nID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFsbFBvc3RzKCk7XG4gICAgICBzZXRQb3N0cyhkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAge3Bvc3RzLm1hcCgocG9zdDogUG9zdENhcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAga2V5PXtwb3N0LnNsdWd9ICAvLyBBZGp1c3QgdGhlIGtleSBwcm9wZXJ0eSBiYXNlZCBvbiB0aGUgYWN0dWFsIGlkZW50aWZpZXIgaW4geW91ciBkYXRhXG4gICAgICAgICAgICBuYW1lPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgZXhjZXJwdD17cG9zdC5leGNlcnB0fSAgLy8gQWRqdXN0IHRoZSBleGNlcnB0IHByb3BlcnR5IGJhc2VkIG9uIHRoZSBhY3R1YWwgY29udGVudCBzdHJ1Y3R1cmUgaW4geW91ciBkYXRhXG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nIl0sIm5hbWVzIjpbIkNhcmQiLCJmZXRjaEFsbFBvc3RzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJsb2ciLCJwb3N0cyIsInNldFBvc3RzIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3N0IiwibmFtZSIsInRpdGxlIiwiZXhjZXJwdCIsInNsdWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blog/page.tsx\n"));

/***/ })

});