webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./pages/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib-esm/index.js");
/* harmony import */ var _components_MyComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyComponent */ "./components/MyComponent.tsx");
/* harmony import */ var _hoc_withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hoc/withData */ "./hoc/withData.ts");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/yashgadle/Yash/rrrr/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const AuthContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
  token: "",
  userDetails: {}
});

const App = props => {
  const {
    token,
    userDetails
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser().then(user => console.log({
      user
    })).catch(err => console.log(err));
  });

  const checkUser = function () {
    aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser().then(user => console.log({
      user
    })).catch(err => console.log(err));
  };

  const signOut = function () {
    aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut().then(data => console.log(data)).catch(err => console.log(err));
  };

  return __jsx(AuthContext.Provider, {
    value: {
      token,
      userDetails
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("header", {
    className: "App-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Edit ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "src/App.js"), " and save to reload."), __jsx(_components_MyComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("button", {
    onClick: () => {
      //@ts-ignore
      aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].federatedSignIn({
        provider: "Google"
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Sign In"), __jsx("button", {
    onClick: checkUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Check User"), __jsx("button", {
    onClick: signOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Sign Out"))));
};

App.getInitialProps = async function (ctx) {
  //TODO: Token check for private routes
  //Cookie access token or not
  // if(ctx does not include accessToken then private route){}
  const _cookies = next_cookies__WEBPACK_IMPORTED_MODULE_6___default()(ctx);

  let accessToken = "";
  let userDetails = {};

  _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(_cookies).forEach(([key, value]) => {
    if (key.includes("accessToken")) accessToken = value;
    if (key.includes("user")) userDetails = value;
  });

  console.log(_cookies);
  return {
    token: accessToken,
    userDetails: userDetails
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withData__WEBPACK_IMPORTED_MODULE_5__["default"])(App));

/***/ })

})
//# sourceMappingURL=index.js.11ec47bac39e94359bb7.hot-update.js.map