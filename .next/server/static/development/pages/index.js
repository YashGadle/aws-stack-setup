module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MyComponent.tsx":
/*!************************************!*\
  !*** ./components/MyComponent.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages */ "./pages/index.tsx");
var _jsxFileName = "/Users/yashgadle/Yash/rrrr/components/MyComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MyComponent = () => {
  const {
    token
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    context: {
      headers: {
        Authorization: token
      }
    },
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(`
        query Blogs {
          listBlogs {
            items{
              id
              name
            }
          }
        }
      `),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, data => {
    return null;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MyComponent);

/***/ }),

/***/ "./hoc/withData.ts":
/*!*************************!*\
  !*** ./hoc/withData.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_apollo_appsync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo-appsync */ "next-apollo-appsync");
/* harmony import */ var next_apollo_appsync__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo_appsync__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_aws_exports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/aws-exports */ "./pages/aws-exports.js");


const config = {
  url: _pages_aws_exports__WEBPACK_IMPORTED_MODULE_1__["default"].aws_appsync_graphqlEndpoint,
  region: _pages_aws_exports__WEBPACK_IMPORTED_MODULE_1__["default"].aws_appsync_region,
  auth: {
    type: _pages_aws_exports__WEBPACK_IMPORTED_MODULE_1__["default"].aws_appsync_authenticationType
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo_appsync__WEBPACK_IMPORTED_MODULE_0__["withAppSyncData"])(config));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "./pages/App.css":
/*!***********************!*\
  !*** ./pages/App.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/aws-exports.js":
/*!******************************!*\
  !*** ./pages/aws-exports.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
const awsmobile = {
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id: "us-east-1:47521558-0278-4904-86bb-f1d469a1a3d7",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_mGNXeWhnY",
  aws_user_pools_web_client_id: "2h25oqdr9klp5gm3kck33ritpe",
  oauth: {
    domain: "retroboard-web.auth.us-east-1.amazoncognito.com",
    scope: ["phone", "email", "openid", "profile", "aws.cognito.signin.user.admin"],
    redirectSignIn: "http://localhost:3000/",
    redirectSignOut: "http://localhost:3000/",
    responseType: "code"
  },
  federationTarget: "COGNITO_USER_POOLS",
  aws_appsync_graphqlEndpoint: "https://qopxzpnztvcutdt6ytek2jlzcq.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  aws_content_delivery_bucket: "retroboard-web",
  aws_content_delivery_bucket_region: "us-east-1",
  aws_content_delivery_url: "https://d3kav8c1juosam.cloudfront.net",
  Auth: {
    cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      domain: "localhost",
      // OPTIONAL - Cookie path
      path: "/",
      // OPTIONAL - Cookie expiration in days
      expires: 365,
      // OPTIONAL - Cookie secure flag
      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      secure: false
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (awsmobile);

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./pages/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ "aws-amplify");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyComponent */ "./components/MyComponent.tsx");
/* harmony import */ var _hoc_withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hoc/withData */ "./hoc/withData.ts");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-cookies */ "next-cookies");
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

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yashgadle/Yash/rrrr/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "aws-amplify":
/*!******************************!*\
  !*** external "aws-amplify" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

/***/ }),

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next-apollo-appsync":
/*!**************************************!*\
  !*** external "next-apollo-appsync" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-apollo-appsync");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map