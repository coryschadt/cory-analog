webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ \"./node_modules/groq/lib/groq.js\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/coryschadt/Documents/cory-analog/web/pages/post/[slug].js\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"*[_type == \\\"post\\\" && slug.current == $slug][0]{\\n  title,\\n  \\\"name\\\": author->name,\\n  \\\"categories\\\": categories[]->title,\\n  \\\"authorImage\\\": author->image,\\n  body\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// [slug].js\n\n\n\n\n\nfunction urlFor(source) {\n  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_8__[\"default\"]).image(source);\n}\n\nvar Post = function Post(props) {\n  var _props$title = props.title,\n      title = _props$title === void 0 ? 'Missing title' : _props$title,\n      _props$name = props.name,\n      name = _props$name === void 0 ? 'Missing name' : _props$name,\n      categories = props.categories,\n      authorImage = props.authorImage,\n      _props$mainImage = props.mainImage,\n      mainImage = _props$mainImage === void 0 ? '' : _props$mainImage,\n      _props$body = props.body,\n      body = _props$body === void 0 ? [] : _props$body;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"article\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"span\", {\n      children: [\"By \", name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n      src: urlFor(mainImage).width(200).url()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), categories && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"ul\", {\n      children: [\"Posted in\", categories.map(function (category) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"li\", {\n          children: category\n        }, category, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 39\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, _this), authorImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"img\", {\n        src: urlFor(authorImage).width(50).url()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, _objectSpread({\n      blocks: body,\n      imageOptions: {\n        w: 320,\n        h: 240,\n        fit: 'max'\n      }\n    }, _client__WEBPACK_IMPORTED_MODULE_8__[\"default\"].config()), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Post;\nvar query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nPost.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // It's important to default the slug so that it doesn't return \"undefined\"\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \"\" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_8__[\"default\"].fetch(query, {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/NTM1NCJdLCJuYW1lcyI6WyJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsIlBvc3QiLCJwcm9wcyIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsIm1haW5JbWFnZSIsImJvZHkiLCJ3aWR0aCIsInVybCIsIm1hcCIsImNhdGVnb3J5IiwidyIsImgiLCJmaXQiLCJjb25maWciLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkIsU0FBT0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFFRCxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQSxxQkFRbEJBLEtBUmtCLENBRXBCQyxLQUZvQjtBQUFBLE1BRXBCQSxLQUZvQiw2QkFFWixlQUZZO0FBQUEsb0JBUWxCRCxLQVJrQixDQUdwQkUsSUFIb0I7QUFBQSxNQUdwQkEsSUFIb0IsNEJBR2IsY0FIYTtBQUFBLE1BSXBCQyxVQUpvQixHQVFsQkgsS0FSa0IsQ0FJcEJHLFVBSm9CO0FBQUEsTUFLcEJDLFdBTG9CLEdBUWxCSixLQVJrQixDQUtwQkksV0FMb0I7QUFBQSx5QkFRbEJKLEtBUmtCLENBTXBCSyxTQU5vQjtBQUFBLE1BTXBCQSxTQU5vQixpQ0FNUixFQU5RO0FBQUEsb0JBUWxCTCxLQVJrQixDQU9wQk0sSUFQb0I7QUFBQSxNQU9wQkEsSUFQb0IsNEJBT2IsRUFQYTtBQVN0QixzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtMO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSx3QkFBVUMsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUlFO0FBQ0ksU0FBRyxFQUFFUixNQUFNLENBQUNXLFNBQUQsQ0FBTixDQUNKRSxLQURJLENBQ0UsR0FERixFQUVKQyxHQUZJO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBV0dMLFVBQVUsaUJBQ1Q7QUFBQSw4QkFFR0EsVUFBVSxDQUFDTSxHQUFYLENBQWUsVUFBQUMsUUFBUTtBQUFBLDRCQUFJO0FBQUEsb0JBQW9CQTtBQUFwQixXQUFTQSxRQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQSxPQUF2QixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpKLEVBaUJHTixXQUFXLGlCQUNWO0FBQUEsNkJBQ0U7QUFDRSxXQUFHLEVBQUVWLE1BQU0sQ0FBQ1UsV0FBRCxDQUFOLENBQ0ZHLEtBREUsQ0FDSSxFQURKLEVBRUZDLEdBRkU7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSixlQTBCRSxxRUFBQyxxRUFBRDtBQUNFLFlBQU0sRUFBRUYsSUFEVjtBQUVFLGtCQUFZLEVBQUU7QUFBRUssU0FBQyxFQUFFLEdBQUw7QUFBVUMsU0FBQyxFQUFFLEdBQWI7QUFBa0JDLFdBQUcsRUFBRTtBQUF2QjtBQUZoQixPQUdNaEIsK0NBQU0sQ0FBQ2lCLE1BQVAsRUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBM0NEOztLQUFNZixJO0FBNkNOLElBQU1nQixLQUFLLEdBQUdDLDJDQUFILG1CQUFYOztBQVFBakIsSUFBSSxDQUFDa0IsZUFBTDtBQUFBLDhMQUF1QixpQkFBZ0JDLE9BQWhCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckI7QUFEcUIsa0NBRUNBLE9BQU8sQ0FBQ0gsS0FGVCxDQUViSSxJQUZhLEVBRWJBLElBRmEsb0NBRU4sRUFGTTtBQUFBO0FBQUEsbUJBR1J0QiwrQ0FBTSxDQUFDdUIsS0FBUCxDQUFhTCxLQUFiLEVBQW9CO0FBQUVJLGtCQUFJLEVBQUpBO0FBQUYsYUFBcEIsQ0FIUTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lcEIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSA9ICdNaXNzaW5nIHRpdGxlJyxcbiAgICBuYW1lID0gJ01pc3NpbmcgbmFtZScsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBhdXRob3JJbWFnZSxcbiAgICBtYWluSW1hZ2UgPSAnJyxcbiAgICBib2R5ID0gW11cbiAgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8c3Bhbj5CeSB7bmFtZX08L3NwYW4+XG5cbiAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3VybEZvcihtYWluSW1hZ2UpXG4gICAgICAgICAgLndpZHRoKDIwMClcbiAgICAgICAgICAudXJsKCl9XG4gICAgICAgIC8+XG5cbiAgICAgIFxuICAgICAge2NhdGVnb3JpZXMgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgUG9zdGVkIGluXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpXG4gICAgICAgICAgICAgIC53aWR0aCg1MClcbiAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgICAgYmxvY2tzPXtib2R5fVxuICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogMzIwLCBoOiAyNDAsIGZpdDogJ21heCcgfX1cbiAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cbiAgICAgIC8+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gIHRpdGxlLFxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxuICBib2R5XG59YFxuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnlcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

})