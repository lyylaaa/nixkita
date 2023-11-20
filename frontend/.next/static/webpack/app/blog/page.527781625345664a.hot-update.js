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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card */ \"(app-pages-browser)/./components/Card.tsx\");\n/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/fetch */ \"(app-pages-browser)/./lib/fetch.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Blog = async ()=>{\n    _s();\n    const [posts, setPosts] = useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_2__.fetchAllPosts)();\n            setPosts(data);\n            console.log(data);\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-center\",\n        children: posts.map((post)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                name: post.title,\n                excerpt: post.excerpt\n            }, post.slug, false, {\n                fileName: \"/Users/nicolemanuele/dev/github/nixkita/frontend/app/blog/page.tsx\",\n                lineNumber: 23,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/nicolemanuele/dev/github/nixkita/frontend/app/blog/page.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blog, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9nL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ29DO0FBQ1E7QUFFSDtBQUV6QyxNQUFNSSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHQyxTQUFTLEVBQUU7SUFFckNKLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssWUFBWTtZQUNoQixNQUFNQyxPQUFPLE1BQU1SLHlEQUFhQTtZQUNoQ0ssU0FBU0c7WUFDVEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO1FBRUFEO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ1pSLE1BQU1TLEdBQUcsQ0FBQyxDQUFDQztZQUNWLHFCQUNFLDhEQUFDZix3REFBSUE7Z0JBRUhnQixNQUFNRCxLQUFLRSxLQUFLO2dCQUNoQkMsU0FBU0gsS0FBS0csT0FBTztlQUZoQkgsS0FBS0ksSUFBSTs7Ozs7UUFLcEI7Ozs7OztBQUdOO0dBekJNZjtLQUFBQTtBQTJCTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmxvZy9wYWdlLnRzeD85Yzk2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvQ2FyZCdcbmltcG9ydCB7IGZldGNoQWxsUG9zdHMgfSBmcm9tICdAL2xpYi9mZXRjaCc7XG5pbXBvcnQgeyBQb3N0Q2FyZCB9IGZyb20gJ0AvdHlwZXMvcG9zdENhcmQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQmxvZyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBbGxQb3N0cygpO1xuICAgICAgc2V0UG9zdHMoZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3Q6IFBvc3RDYXJkKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGtleT17cG9zdC5zbHVnfSAgLy8gQWRqdXN0IHRoZSBrZXkgcHJvcGVydHkgYmFzZWQgb24gdGhlIGFjdHVhbCBpZGVudGlmaWVyIGluIHlvdXIgZGF0YVxuICAgICAgICAgICAgbmFtZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgIGV4Y2VycHQ9e3Bvc3QuZXhjZXJwdH0gIC8vIEFkanVzdCB0aGUgZXhjZXJwdCBwcm9wZXJ0eSBiYXNlZCBvbiB0aGUgYWN0dWFsIGNvbnRlbnQgc3RydWN0dXJlIGluIHlvdXIgZGF0YVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdLCJuYW1lcyI6WyJDYXJkIiwiZmV0Y2hBbGxQb3N0cyIsIlJlYWN0IiwidXNlRWZmZWN0IiwiQmxvZyIsInBvc3RzIiwic2V0UG9zdHMiLCJ1c2VTdGF0ZSIsImZldGNoRGF0YSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicG9zdCIsIm5hbWUiLCJ0aXRsZSIsImV4Y2VycHQiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blog/page.tsx\n"));

/***/ })

});