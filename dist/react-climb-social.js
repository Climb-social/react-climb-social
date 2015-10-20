(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["react-climb-social"] = factory(require("react"), require("ReactDOM"));
	else
		root["react-climb-social"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _componentsWallWallContainer = __webpack_require__(3);
	
	var _componentsWallWallContainer2 = _interopRequireDefault(_componentsWallWallContainer);
	
	var _componentsSlideshowSlideshowContainer = __webpack_require__(32);
	
	var _componentsSlideshowSlideshowContainer2 = _interopRequireDefault(_componentsSlideshowSlideshowContainer);
	
	__webpack_require__(35);
	
	if (window) {
	    window.Climb = window.Climb || {};
	
	    var $walls = document.querySelectorAll('.climb-wall');
	
	    for (var i = 0; i < $walls.length; ++i) {
	        var $item = $walls[i];
	        var collectionId = $item.dataset.collectionId;
	        var limit = $item.dataset.limit;
	
	        _reactDom2['default'].render(_react2['default'].createElement(_componentsWallWallContainer2['default'], { collectionId: collectionId, limit: limit }), $item);
	    }
	
	    var $slideshows = document.querySelectorAll('.climb-slideshow');
	
	    for (var i = 0; i < $slideshows.length; ++i) {
	        var $item = $slideshows[i];
	        var collectionId = $item.dataset.collectionId;
	
	        _reactDom2['default'].render(_react2['default'].createElement(_componentsSlideshowSlideshowContainer2['default'], { collectionId: collectionId }), $item);
	    }
	}
	
	exports.WallContainer = _componentsWallWallContainer2['default'];
	
	var _componentsWallWall = __webpack_require__(9);
	
	Object.defineProperty(exports, 'Wall', {
	    enumerable: true,
	    get: function get() {
	        return _componentsWallWall.Wall;
	    }
	});
	
	var _componentsWallTile = __webpack_require__(10);
	
	Object.defineProperty(exports, 'Tile', {
	    enumerable: true,
	    get: function get() {
	        return _componentsWallTile.Tile;
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _climbSocial = __webpack_require__(4);
	
	var _climbSocial2 = _interopRequireDefault(_climbSocial);
	
	var _Wall = __webpack_require__(9);
	
	var _Wall2 = _interopRequireDefault(_Wall);
	
	var _ClimbBadge = __webpack_require__(30);
	
	var _ClimbBadge2 = _interopRequireDefault(_ClimbBadge);
	
	var WallContainer = (function (_Component) {
	    _inherits(WallContainer, _Component);
	
	    function WallContainer(props) {
	        _classCallCheck(this, WallContainer);
	
	        _get(Object.getPrototypeOf(WallContainer.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            items: {}
	        };
	    }
	
	    _createClass(WallContainer, [{
	        key: 'init',
	        value: function init() {
	            var _this = this;
	
	            if (!this.props.collectionId) {
	                return;
	            }
	
	            _climbSocial2['default'].getStream(this.props.collectionId).subscribe(function (items) {
	
	                var maxSize = parseInt(_this.props.limit, 0);
	
	                var mappedItems = {};
	                items.splice(0, maxSize).map(function (item) {
	                    mappedItems[item.id] = item;
	                });
	
	                _this.setState({
	                    items: mappedItems
	                });
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.init();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var cb = undefined;
	            if (window.Climb && window.Climb.onUpdate) {
	                cb = window.Climb.onUpdate;
	            } else {
	                // noop
	                cb = function () {};
	            }
	            cb();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_Wall2['default'], { items: this.state.items }),
	                _react2['default'].createElement(_ClimbBadge2['default'], null)
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            collectionId: _react.PropTypes.string.isRequired,
	            limit: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            collectionId: '561ba63445284e1740e016f7',
	            limit: 30
	        },
	        enumerable: true
	    }]);
	
	    return WallContainer;
	})(_react.Component);
	
	exports['default'] = WallContainer;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rxLite = __webpack_require__(5);
	
	var _fetchJsonp = __webpack_require__(8);
	
	var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);
	
	var getStream = function getStream(collectionId) {
	
	    var pollRate = 5 * 1000;
	
	    var requestStream = _rxLite.Observable.just('http://app.climb.social/api/v1/collections/' + collectionId);
	
	    var updateStream = _rxLite.Observable.interval(pollRate).startWith(null);
	
	    var responseStream = updateStream.combineLatest(requestStream, function (tick, url) {
	        return url;
	    }).flatMap(function (baseUrl) {
	
	        var requestUrl = '' + baseUrl;
	
	        return _rxLite.Observable.fromPromise((0, _fetchJsonp2['default'])(requestUrl).then(function (resp) {
	            return resp.json();
	        }));
	    });
	
	    return responseStream;
	};
	
	exports['default'] = {
	    getStream: getStream
	};
	module.exports = exports['default'];


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global, process) {// Copyright (c) Microsoft, All rights reserved. See License.txt in the project root for license information.
	
	;(function (undefined) {
	
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };
	
	  function checkGlobal(value) {
	    return (value && value.Object === Object) ? value : null;
	  }
	
	  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;
	  var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;
	  var freeGlobal = checkGlobal(freeExports && freeModule && typeof global === 'object' && global);
	  var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	  var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	  var moduleExports = (freeModule && freeModule.exports === freeExports) ? freeExports : null;
	  var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	  var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
	
	  var Rx = {
	    internals: {},
	    config: {
	      Promise: root.Promise
	    },
	    helpers: { }
	  };
	
	  // Defaults
	  var noop = Rx.helpers.noop = function () { },
	    identity = Rx.helpers.identity = function (x) { return x; },
	    defaultNow = Rx.helpers.defaultNow = Date.now,
	    defaultComparer = Rx.helpers.defaultComparer = function (x, y) { return isEqual(x, y); },
	    defaultSubComparer = Rx.helpers.defaultSubComparer = function (x, y) { return x > y ? 1 : (x < y ? -1 : 0); },
	    defaultKeySerializer = Rx.helpers.defaultKeySerializer = function (x) { return x.toString(); },
	    defaultError = Rx.helpers.defaultError = function (err) { throw err; },
	    isPromise = Rx.helpers.isPromise = function (p) { return !!p && typeof p.subscribe !== 'function' && typeof p.then === 'function'; },
	    isFunction = Rx.helpers.isFunction = (function () {
	
	      var isFn = function (value) {
	        return typeof value == 'function' || false;
	      }
	
	      // fallback for older versions of Chrome and Safari
	      if (isFn(/x/)) {
	        isFn = function(value) {
	          return typeof value == 'function' && toString.call(value) == '[object Function]';
	        };
	      }
	
	      return isFn;
	    }());
	
	    function cloneArray(arr) {
	      var len = arr.length, a = new Array(len);
	      for(var i = 0; i < len; i++) { a[i] = arr[i]; }
	      return a;
	    }
	
	  var errorObj = {e: {}};
	  
	  function tryCatcherGen(tryCatchTarget) {
	    return function tryCatcher() {
	      try {
	        return tryCatchTarget.apply(this, arguments);
	      } catch (e) {
	        errorObj.e = e;
	        return errorObj;
	      }
	    };
	  }
	
	  var tryCatch = Rx.internals.tryCatch = function tryCatch(fn) {
	    if (!isFunction(fn)) { throw new TypeError('fn must be a function'); }
	    return tryCatcherGen(fn);
	  };
	
	  function thrower(e) {
	    throw e;
	  }
	
	  Rx.config.longStackSupport = false;
	  var hasStacks = false, stacks = tryCatch(function () { throw new Error(); })();
	  hasStacks = !!stacks.e && !!stacks.e.stack;
	
	  // All code after this point will be filtered from stack traces reported by RxJS
	  var rStartingLine = captureLine(), rFileName;
	
	  var STACK_JUMP_SEPARATOR = 'From previous event:';
	
	  function makeStackTraceLong(error, observable) {
	    // If possible, transform the error stack trace by removing Node and RxJS
	    // cruft, then concatenating with the stack trace of `observable`.
	    if (hasStacks &&
	        observable.stack &&
	        typeof error === 'object' &&
	        error !== null &&
	        error.stack &&
	        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
	    ) {
	      var stacks = [];
	      for (var o = observable; !!o; o = o.source) {
	        if (o.stack) {
	          stacks.unshift(o.stack);
	        }
	      }
	      stacks.unshift(error.stack);
	
	      var concatedStacks = stacks.join('\n' + STACK_JUMP_SEPARATOR + '\n');
	      error.stack = filterStackString(concatedStacks);
	    }
	  }
	
	  function filterStackString(stackString) {
	    var lines = stackString.split('\n'), desiredLines = [];
	    for (var i = 0, len = lines.length; i < len; i++) {
	      var line = lines[i];
	
	      if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
	        desiredLines.push(line);
	      }
	    }
	    return desiredLines.join('\n');
	  }
	
	  function isInternalFrame(stackLine) {
	    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);
	    if (!fileNameAndLineNumber) {
	      return false;
	    }
	    var fileName = fileNameAndLineNumber[0], lineNumber = fileNameAndLineNumber[1];
	
	    return fileName === rFileName &&
	      lineNumber >= rStartingLine &&
	      lineNumber <= rEndingLine;
	  }
	
	  function isNodeFrame(stackLine) {
	    return stackLine.indexOf('(module.js:') !== -1 ||
	      stackLine.indexOf('(node.js:') !== -1;
	  }
	
	  function captureLine() {
	    if (!hasStacks) { return; }
	
	    try {
	      throw new Error();
	    } catch (e) {
	      var lines = e.stack.split('\n');
	      var firstLine = lines[0].indexOf('@') > 0 ? lines[1] : lines[2];
	      var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
	      if (!fileNameAndLineNumber) { return; }
	
	      rFileName = fileNameAndLineNumber[0];
	      return fileNameAndLineNumber[1];
	    }
	  }
	
	  function getFileNameAndLineNumber(stackLine) {
	    // Named functions: 'at functionName (filename:lineNumber:columnNumber)'
	    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
	    if (attempt1) { return [attempt1[1], Number(attempt1[2])]; }
	
	    // Anonymous functions: 'at filename:lineNumber:columnNumber'
	    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
	    if (attempt2) { return [attempt2[1], Number(attempt2[2])]; }
	
	    // Firefox style: 'function@filename:lineNumber or @filename:lineNumber'
	    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
	    if (attempt3) { return [attempt3[1], Number(attempt3[2])]; }
	  }
	
	  var EmptyError = Rx.EmptyError = function() {
	    this.message = 'Sequence contains no elements.';
	    Error.call(this);
	  };
	  EmptyError.prototype = Object.create(Error.prototype);
	  EmptyError.prototype.name = 'EmptyError';
	
	  var ObjectDisposedError = Rx.ObjectDisposedError = function() {
	    this.message = 'Object has been disposed';
	    Error.call(this);
	  };
	  ObjectDisposedError.prototype = Object.create(Error.prototype);
	  ObjectDisposedError.prototype.name = 'ObjectDisposedError';
	
	  var ArgumentOutOfRangeError = Rx.ArgumentOutOfRangeError = function () {
	    this.message = 'Argument out of range';
	    Error.call(this);
	  };
	  ArgumentOutOfRangeError.prototype = Object.create(Error.prototype);
	  ArgumentOutOfRangeError.prototype.name = 'ArgumentOutOfRangeError';
	
	  var NotSupportedError = Rx.NotSupportedError = function (message) {
	    this.message = message || 'This operation is not supported';
	    Error.call(this);
	  };
	  NotSupportedError.prototype = Object.create(Error.prototype);
	  NotSupportedError.prototype.name = 'NotSupportedError';
	
	  var NotImplementedError = Rx.NotImplementedError = function (message) {
	    this.message = message || 'This operation is not implemented';
	    Error.call(this);
	  };
	  NotImplementedError.prototype = Object.create(Error.prototype);
	  NotImplementedError.prototype.name = 'NotImplementedError';
	
	  var notImplemented = Rx.helpers.notImplemented = function () {
	    throw new NotImplementedError();
	  };
	
	  var notSupported = Rx.helpers.notSupported = function () {
	    throw new NotSupportedError();
	  };
	
	  // Shim in iterator support
	  var $iterator$ = (typeof Symbol === 'function' && Symbol.iterator) ||
	    '_es6shim_iterator_';
	  // Bug for mozilla version
	  if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
	    $iterator$ = '@@iterator';
	  }
	
	  var doneEnumerator = Rx.doneEnumerator = { done: true, value: undefined };
	
	  var isIterable = Rx.helpers.isIterable = function (o) {
	    return o && o[$iterator$] !== undefined;
	  };
	
	  var isArrayLike = Rx.helpers.isArrayLike = function (o) {
	    return o && o.length !== undefined;
	  };
	
	  Rx.helpers.iterator = $iterator$;
	
	  var bindCallback = Rx.internals.bindCallback = function (func, thisArg, argCount) {
	    if (typeof thisArg === 'undefined') { return func; }
	    switch(argCount) {
	      case 0:
	        return function() {
	          return func.call(thisArg)
	        };
	      case 1:
	        return function(arg) {
	          return func.call(thisArg, arg);
	        }
	      case 2:
	        return function(value, index) {
	          return func.call(thisArg, value, index);
	        };
	      case 3:
	        return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	    }
	
	    return function() {
	      return func.apply(thisArg, arguments);
	    };
	  };
	
	  /** Used to determine if values are of the language type Object */
	  var dontEnums = ['toString',
	    'toLocaleString',
	    'valueOf',
	    'hasOwnProperty',
	    'isPrototypeOf',
	    'propertyIsEnumerable',
	    'constructor'],
	  dontEnumsLength = dontEnums.length;
	
	  /** `Object#toString` result shortcuts */
	  var argsClass = '[object Arguments]',
	    arrayClass = '[object Array]',
	    boolClass = '[object Boolean]',
	    dateClass = '[object Date]',
	    errorClass = '[object Error]',
	    funcClass = '[object Function]',
	    numberClass = '[object Number]',
	    objectClass = '[object Object]',
	    regexpClass = '[object RegExp]',
	    stringClass = '[object String]';
	
	  var toString = Object.prototype.toString,
	    hasOwnProperty = Object.prototype.hasOwnProperty,
	    supportsArgsClass = toString.call(arguments) == argsClass, // For less <IE9 && FF<4
	    supportNodeClass,
	    errorProto = Error.prototype,
	    objectProto = Object.prototype,
	    stringProto = String.prototype,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	  try {
	    supportNodeClass = !(toString.call(document) == objectClass && !({ 'toString': 0 } + ''));
	  } catch (e) {
	    supportNodeClass = true;
	  }
	
	  var nonEnumProps = {};
	  nonEnumProps[arrayClass] = nonEnumProps[dateClass] = nonEnumProps[numberClass] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
	  nonEnumProps[boolClass] = nonEnumProps[stringClass] = { 'constructor': true, 'toString': true, 'valueOf': true };
	  nonEnumProps[errorClass] = nonEnumProps[funcClass] = nonEnumProps[regexpClass] = { 'constructor': true, 'toString': true };
	  nonEnumProps[objectClass] = { 'constructor': true };
	
	  var support = {};
	  (function () {
	    var ctor = function() { this.x = 1; },
	      props = [];
	
	    ctor.prototype = { 'valueOf': 1, 'y': 1 };
	    for (var key in new ctor) { props.push(key); }
	    for (key in arguments) { }
	
	    // Detect if `name` or `message` properties of `Error.prototype` are enumerable by default.
	    support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') || propertyIsEnumerable.call(errorProto, 'name');
	
	    // Detect if `prototype` properties are enumerable by default.
	    support.enumPrototypes = propertyIsEnumerable.call(ctor, 'prototype');
	
	    // Detect if `arguments` object indexes are non-enumerable
	    support.nonEnumArgs = key != 0;
	
	    // Detect if properties shadowing those on `Object.prototype` are non-enumerable.
	    support.nonEnumShadows = !/valueOf/.test(props);
	  }(1));
	
	  var isObject = Rx.internals.isObject = function(value) {
	    var type = typeof value;
	    return value && (type == 'function' || type == 'object') || false;
	  };
	
	  function keysIn(object) {
	    var result = [];
	    if (!isObject(object)) {
	      return result;
	    }
	    if (support.nonEnumArgs && object.length && isArguments(object)) {
	      object = slice.call(object);
	    }
	    var skipProto = support.enumPrototypes && typeof object == 'function',
	        skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error);
	
	    for (var key in object) {
	      if (!(skipProto && key == 'prototype') &&
	          !(skipErrorProps && (key == 'message' || key == 'name'))) {
	        result.push(key);
	      }
	    }
	
	    if (support.nonEnumShadows && object !== objectProto) {
	      var ctor = object.constructor,
	          index = -1,
	          length = dontEnumsLength;
	
	      if (object === (ctor && ctor.prototype)) {
	        var className = object === stringProto ? stringClass : object === errorProto ? errorClass : toString.call(object),
	            nonEnum = nonEnumProps[className];
	      }
	      while (++index < length) {
	        key = dontEnums[index];
	        if (!(nonEnum && nonEnum[key]) && hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	    }
	    return result;
	  }
	
	  function internalFor(object, callback, keysFunc) {
	    var index = -1,
	      props = keysFunc(object),
	      length = props.length;
	
	    while (++index < length) {
	      var key = props[index];
	      if (callback(object[key], key, object) === false) {
	        break;
	      }
	    }
	    return object;
	  }
	
	  function internalForIn(object, callback) {
	    return internalFor(object, callback, keysIn);
	  }
	
	  function isNode(value) {
	    // IE < 9 presents DOM nodes as `Object` objects except they have `toString`
	    // methods that are `typeof` "string" and still can coerce nodes to strings
	    return typeof value.toString != 'function' && typeof (value + '') == 'string';
	  }
	
	  var isArguments = function(value) {
	    return (value && typeof value == 'object') ? toString.call(value) == argsClass : false;
	  }
	
	  // fallback for browsers that can't detect `arguments` objects by [[Class]]
	  if (!supportsArgsClass) {
	    isArguments = function(value) {
	      return (value && typeof value == 'object') ? hasOwnProperty.call(value, 'callee') : false;
	    };
	  }
	
	  var isEqual = Rx.internals.isEqual = function (x, y) {
	    return deepEquals(x, y, [], []);
	  };
	
	  /** @private
	   * Used for deep comparison
	   **/
	  function deepEquals(a, b, stackA, stackB) {
	    // exit early for identical values
	    if (a === b) {
	      // treat `+0` vs. `-0` as not equal
	      return a !== 0 || (1 / a == 1 / b);
	    }
	
	    var type = typeof a,
	        otherType = typeof b;
	
	    // exit early for unlike primitive values
	    if (a === a && (a == null || b == null ||
	        (type != 'function' && type != 'object' && otherType != 'function' && otherType != 'object'))) {
	      return false;
	    }
	
	    // compare [[Class]] names
	    var className = toString.call(a),
	        otherClass = toString.call(b);
	
	    if (className == argsClass) {
	      className = objectClass;
	    }
	    if (otherClass == argsClass) {
	      otherClass = objectClass;
	    }
	    if (className != otherClass) {
	      return false;
	    }
	    switch (className) {
	      case boolClass:
	      case dateClass:
	        // coerce dates and booleans to numbers, dates to milliseconds and booleans
	        // to `1` or `0` treating invalid dates coerced to `NaN` as not equal
	        return +a == +b;
	
	      case numberClass:
	        // treat `NaN` vs. `NaN` as equal
	        return (a != +a) ?
	          b != +b :
	          // but treat `-0` vs. `+0` as not equal
	          (a == 0 ? (1 / a == 1 / b) : a == +b);
	
	      case regexpClass:
	      case stringClass:
	        // coerce regexes to strings (http://es5.github.io/#x15.10.6.4)
	        // treat string primitives and their corresponding object instances as equal
	        return a == String(b);
	    }
	    var isArr = className == arrayClass;
	    if (!isArr) {
	
	      // exit for functions and DOM nodes
	      if (className != objectClass || (!support.nodeClass && (isNode(a) || isNode(b)))) {
	        return false;
	      }
	      // in older versions of Opera, `arguments` objects have `Array` constructors
	      var ctorA = !support.argsObject && isArguments(a) ? Object : a.constructor,
	          ctorB = !support.argsObject && isArguments(b) ? Object : b.constructor;
	
	      // non `Object` object instances with different constructors are not equal
	      if (ctorA != ctorB &&
	            !(hasOwnProperty.call(a, 'constructor') && hasOwnProperty.call(b, 'constructor')) &&
	            !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
	            ('constructor' in a && 'constructor' in b)
	          ) {
	        return false;
	      }
	    }
	    // assume cyclic structures are equal
	    // the algorithm for detecting cyclic structures is adapted from ES 5.1
	    // section 15.12.3, abstract operation `JO` (http://es5.github.io/#x15.12.3)
	    var initedStack = !stackA;
	    stackA || (stackA = []);
	    stackB || (stackB = []);
	
	    var length = stackA.length;
	    while (length--) {
	      if (stackA[length] == a) {
	        return stackB[length] == b;
	      }
	    }
	    var size = 0;
	    var result = true;
	
	    // add `a` and `b` to the stack of traversed objects
	    stackA.push(a);
	    stackB.push(b);
	
	    // recursively compare objects and arrays (susceptible to call stack limits)
	    if (isArr) {
	      // compare lengths to determine if a deep comparison is necessary
	      length = a.length;
	      size = b.length;
	      result = size == length;
	
	      if (result) {
	        // deep compare the contents, ignoring non-numeric properties
	        while (size--) {
	          var index = length,
	              value = b[size];
	
	          if (!(result = deepEquals(a[size], value, stackA, stackB))) {
	            break;
	          }
	        }
	      }
	    }
	    else {
	      // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
	      // which, in this case, is more costly
	      internalForIn(b, function(value, key, b) {
	        if (hasOwnProperty.call(b, key)) {
	          // count the number of properties.
	          size++;
	          // deep compare each property value.
	          return (result = hasOwnProperty.call(a, key) && deepEquals(a[key], value, stackA, stackB));
	        }
	      });
	
	      if (result) {
	        // ensure both objects have the same number of properties
	        internalForIn(a, function(value, key, a) {
	          if (hasOwnProperty.call(a, key)) {
	            // `size` will be `-1` if `a` has more properties than `b`
	            return (result = --size > -1);
	          }
	        });
	      }
	    }
	    stackA.pop();
	    stackB.pop();
	
	    return result;
	  }
	
	  var hasProp = {}.hasOwnProperty,
	      slice = Array.prototype.slice;
	
	  var inherits = Rx.internals.inherits = function (child, parent) {
	    function __() { this.constructor = child; }
	    __.prototype = parent.prototype;
	    child.prototype = new __();
	  };
	
	  var addProperties = Rx.internals.addProperties = function (obj) {
	    for(var sources = [], i = 1, len = arguments.length; i < len; i++) { sources.push(arguments[i]); }
	    for (var idx = 0, ln = sources.length; idx < ln; idx++) {
	      var source = sources[idx];
	      for (var prop in source) {
	        obj[prop] = source[prop];
	      }
	    }
	  };
	
	  // Rx Utils
	  var addRef = Rx.internals.addRef = function (xs, r) {
	    return new AnonymousObservable(function (observer) {
	      return new BinaryDisposable(r.getDisposable(), xs.subscribe(observer));
	    });
	  };
	
	  function arrayInitialize(count, factory) {
	    var a = new Array(count);
	    for (var i = 0; i < count; i++) {
	      a[i] = factory();
	    }
	    return a;
	  }
	
	  /**
	   * Represents a group of disposable resources that are disposed together.
	   * @constructor
	   */
	  var CompositeDisposable = Rx.CompositeDisposable = function () {
	    var args = [], i, len;
	    if (Array.isArray(arguments[0])) {
	      args = arguments[0];
	      len = args.length;
	    } else {
	      len = arguments.length;
	      args = new Array(len);
	      for(i = 0; i < len; i++) { args[i] = arguments[i]; }
	    }
	    this.disposables = args;
	    this.isDisposed = false;
	    this.length = args.length;
	  };
	
	  var CompositeDisposablePrototype = CompositeDisposable.prototype;
	
	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Mixed} item Disposable to add.
	   */
	  CompositeDisposablePrototype.add = function (item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	      this.length++;
	    }
	  };
	
	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Mixed} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */
	  CompositeDisposablePrototype.remove = function (item) {
	    var shouldDispose = false;
	    if (!this.isDisposed) {
	      var idx = this.disposables.indexOf(item);
	      if (idx !== -1) {
	        shouldDispose = true;
	        this.disposables.splice(idx, 1);
	        this.length--;
	        item.dispose();
	      }
	    }
	    return shouldDispose;
	  };
	
	  /**
	   *  Disposes all disposables in the group and removes them from the group.
	   */
	  CompositeDisposablePrototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var len = this.disposables.length, currentDisposables = new Array(len);
	      for(var i = 0; i < len; i++) { currentDisposables[i] = this.disposables[i]; }
	      this.disposables = [];
	      this.length = 0;
	
	      for (i = 0; i < len; i++) {
	        currentDisposables[i].dispose();
	      }
	    }
	  };
	
	  /**
	   * Provides a set of static methods for creating Disposables.
	   * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
	   */
	  var Disposable = Rx.Disposable = function (action) {
	    this.isDisposed = false;
	    this.action = action || noop;
	  };
	
	  /** Performs the task of cleaning up resources. */
	  Disposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.action();
	      this.isDisposed = true;
	    }
	  };
	
	  /**
	   * Creates a disposable object that invokes the specified action when disposed.
	   * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
	   * @return {Disposable} The disposable object that runs the given action upon disposal.
	   */
	  var disposableCreate = Disposable.create = function (action) { return new Disposable(action); };
	
	  /**
	   * Gets the disposable that does nothing when disposed.
	   */
	  var disposableEmpty = Disposable.empty = { dispose: noop };
	
	  /**
	   * Validates whether the given object is a disposable
	   * @param {Object} Object to test whether it has a dispose method
	   * @returns {Boolean} true if a disposable object, else false.
	   */
	  var isDisposable = Disposable.isDisposable = function (d) {
	    return d && isFunction(d.dispose);
	  };
	
	  var checkDisposed = Disposable.checkDisposed = function (disposable) {
	    if (disposable.isDisposed) { throw new ObjectDisposedError(); }
	  };
	
	  var disposableFixup = Disposable._fixup = function (result) {
	    return isDisposable(result) ? result : disposableEmpty;
	  };
	
	  // Single assignment
	  var SingleAssignmentDisposable = Rx.SingleAssignmentDisposable = function () {
	    this.isDisposed = false;
	    this.current = null;
	  };
	  SingleAssignmentDisposable.prototype.getDisposable = function () {
	    return this.current;
	  };
	  SingleAssignmentDisposable.prototype.setDisposable = function (value) {
	    if (this.current) { throw new Error('Disposable has already been assigned'); }
	    var shouldDispose = this.isDisposed;
	    !shouldDispose && (this.current = value);
	    shouldDispose && value && value.dispose();
	  };
	  SingleAssignmentDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var old = this.current;
	      this.current = null;
	      old && old.dispose();
	    }
	  };
	
	  // Multiple assignment disposable
	  var SerialDisposable = Rx.SerialDisposable = function () {
	    this.isDisposed = false;
	    this.current = null;
	  };
	  SerialDisposable.prototype.getDisposable = function () {
	    return this.current;
	  };
	  SerialDisposable.prototype.setDisposable = function (value) {
	    var shouldDispose = this.isDisposed;
	    if (!shouldDispose) {
	      var old = this.current;
	      this.current = value;
	    }
	    old && old.dispose();
	    shouldDispose && value && value.dispose();
	  };
	  SerialDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var old = this.current;
	      this.current = null;
	    }
	    old && old.dispose();
	  };
	
	  var BinaryDisposable = Rx.BinaryDisposable = function (first, second) {
	    this._first = first;
	    this._second = second;
	    this.isDisposed = false;
	  };
	
	  BinaryDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      var old1 = this._first;
	      this._first = null;
	      old1 && old1.dispose();
	      var old2 = this._second;
	      this._second = null;
	      old2 && old2.dispose();
	    }
	  };
	
	  var NAryDisposable = Rx.NAryDisposable = function (disposables) {
	    this._disposables = disposables;
	    this.isDisposed = false;
	  };
	
	  NAryDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      for (var i = 0, len = this._disposables.length; i < len; i++) {
	        this._disposables[i].dispose();
	      }
	      this._disposables.length = 0;
	    }
	  };
	
	  /**
	   * Represents a disposable resource that only disposes its underlying disposable resource when all dependent disposable objects have been disposed.
	   */
	  var RefCountDisposable = Rx.RefCountDisposable = (function () {
	
	    function InnerDisposable(disposable) {
	      this.disposable = disposable;
	      this.disposable.count++;
	      this.isInnerDisposed = false;
	    }
	
	    InnerDisposable.prototype.dispose = function () {
	      if (!this.disposable.isDisposed && !this.isInnerDisposed) {
	        this.isInnerDisposed = true;
	        this.disposable.count--;
	        if (this.disposable.count === 0 && this.disposable.isPrimaryDisposed) {
	          this.disposable.isDisposed = true;
	          this.disposable.underlyingDisposable.dispose();
	        }
	      }
	    };
	
	    /**
	     * Initializes a new instance of the RefCountDisposable with the specified disposable.
	     * @constructor
	     * @param {Disposable} disposable Underlying disposable.
	      */
	    function RefCountDisposable(disposable) {
	      this.underlyingDisposable = disposable;
	      this.isDisposed = false;
	      this.isPrimaryDisposed = false;
	      this.count = 0;
	    }
	
	    /**
	     * Disposes the underlying disposable only when all dependent disposables have been disposed
	     */
	    RefCountDisposable.prototype.dispose = function () {
	      if (!this.isDisposed && !this.isPrimaryDisposed) {
	        this.isPrimaryDisposed = true;
	        if (this.count === 0) {
	          this.isDisposed = true;
	          this.underlyingDisposable.dispose();
	        }
	      }
	    };
	
	    /**
	     * Returns a dependent disposable that when disposed decreases the refcount on the underlying disposable.
	     * @returns {Disposable} A dependent disposable contributing to the reference count that manages the underlying disposable's lifetime.
	     */
	    RefCountDisposable.prototype.getDisposable = function () {
	      return this.isDisposed ? disposableEmpty : new InnerDisposable(this);
	    };
	
	    return RefCountDisposable;
	  })();
	
	  var ScheduledItem = Rx.internals.ScheduledItem = function (scheduler, state, action, dueTime, comparer) {
	    this.scheduler = scheduler;
	    this.state = state;
	    this.action = action;
	    this.dueTime = dueTime;
	    this.comparer = comparer || defaultSubComparer;
	    this.disposable = new SingleAssignmentDisposable();
	  }
	
	  ScheduledItem.prototype.invoke = function () {
	    this.disposable.setDisposable(this.invokeCore());
	  };
	
	  ScheduledItem.prototype.compareTo = function (other) {
	    return this.comparer(this.dueTime, other.dueTime);
	  };
	
	  ScheduledItem.prototype.isCancelled = function () {
	    return this.disposable.isDisposed;
	  };
	
	  ScheduledItem.prototype.invokeCore = function () {
	    return disposableFixup(this.action(this.scheduler, this.state));
	  };
	
	  /** Provides a set of static properties to access commonly used schedulers. */
	  var Scheduler = Rx.Scheduler = (function () {
	
	    function Scheduler() { }
	
	    /** Determines whether the given object is a scheduler */
	    Scheduler.isScheduler = function (s) {
	      return s instanceof Scheduler;
	    };
	
	    var schedulerProto = Scheduler.prototype;
	
	    /**
	   * Schedules an action to be executed.
	   * @param state State passed to the action to be executed.
	   * @param {Function} action Action to be executed.
	   * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	   */
	    schedulerProto.schedule = function (state, action) {
	      throw new NotImplementedError();
	    };
	
	  /**
	   * Schedules an action to be executed after dueTime.
	   * @param state State passed to the action to be executed.
	   * @param {Function} action Action to be executed.
	   * @param {Number} dueTime Relative time after which to execute the action.
	   * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	   */
	    schedulerProto.scheduleFuture = function (state, dueTime, action) {
	      var dt = dueTime;
	      dt instanceof Date && (dt = dt - this.now());
	      dt = Scheduler.normalize(dt);
	
	      if (dt === 0) { return this.schedule(state, action); }
	
	      return this._scheduleFuture(state, dt, action);
	    };
	
	    schedulerProto._scheduleFuture = function (state, dueTime, action) {
	      throw new NotImplementedError();
	    };
	
	    /** Gets the current time according to the local machine's system clock. */
	    Scheduler.now = defaultNow;
	
	    /** Gets the current time according to the local machine's system clock. */
	    Scheduler.prototype.now = defaultNow;
	
	    /**
	     * Normalizes the specified TimeSpan value to a positive value.
	     * @param {Number} timeSpan The time span value to normalize.
	     * @returns {Number} The specified TimeSpan value if it is zero or positive; otherwise, 0
	     */
	    Scheduler.normalize = function (timeSpan) {
	      timeSpan < 0 && (timeSpan = 0);
	      return timeSpan;
	    };
	
	    return Scheduler;
	  }());
	
	  var normalizeTime = Scheduler.normalize, isScheduler = Scheduler.isScheduler;
	
	  (function (schedulerProto) {
	
	    function invokeRecImmediate(scheduler, pair) {
	      var state = pair[0], action = pair[1], group = new CompositeDisposable();
	      action(state, innerAction);
	      return group;
	
	      function innerAction(state2) {
	        var isAdded = false, isDone = false;
	
	        var d = scheduler.schedule(state2, scheduleWork);
	        if (!isDone) {
	          group.add(d);
	          isAdded = true;
	        }
	
	        function scheduleWork(_, state3) {
	          if (isAdded) {
	            group.remove(d);
	          } else {
	            isDone = true;
	          }
	          action(state3, innerAction);
	          return disposableEmpty;
	        }
	      }
	    }
	
	    function invokeRecDate(scheduler, pair) {
	      var state = pair[0], action = pair[1], group = new CompositeDisposable();
	      action(state, innerAction);
	      return group;
	
	      function innerAction(state2, dueTime1) {
	        var isAdded = false, isDone = false;
	
	        var d = scheduler.scheduleFuture(state2, dueTime1, scheduleWork);
	        if (!isDone) {
	          group.add(d);
	          isAdded = true;
	        }
	
	        function scheduleWork(_, state3) {
	          if (isAdded) {
	            group.remove(d);
	          } else {
	            isDone = true;
	          }
	          action(state3, innerAction);
	          return disposableEmpty;
	        }
	      }
	    }
	
	    /**
	     * Schedules an action to be executed recursively.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in recursive invocation state.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */
	    schedulerProto.scheduleRecursive = function (state, action) {
	      return this.schedule([state, action], invokeRecImmediate);
	    };
	
	    /**
	     * Schedules an action to be executed recursively after a specified relative or absolute due time.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in the recursive due time and invocation state.
	     * @param {Number | Date} dueTime Relative or absolute time after which to execute the action for the first time.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */
	    schedulerProto.scheduleRecursiveFuture = function (state, dueTime, action) {
	      return this.scheduleFuture([state, action], dueTime, invokeRecDate);
	    };
	
	  }(Scheduler.prototype));
	
	  (function (schedulerProto) {
	
	    /**
	     * Schedules a periodic piece of work by dynamically discovering the scheduler's capabilities. The periodic task will be scheduled using window.setInterval for the base implementation.
	     * @param {Mixed} state Initial state passed to the action upon the first iteration.
	     * @param {Number} period Period for running the work periodically.
	     * @param {Function} action Action to be executed, potentially updating the state.
	     * @returns {Disposable} The disposable object used to cancel the scheduled recurring action (best effort).
	     */
	    Scheduler.prototype.schedulePeriodic = function(state, period, action) {
	      if (typeof root.setInterval === 'undefined') { throw new NotSupportedError(); }
	      period = normalizeTime(period);
	      var s = state, id = root.setInterval(function () { s = action(s); }, period);
	      return disposableCreate(function () { root.clearInterval(id); });
	    };
	
	  }(Scheduler.prototype));
	
	  /** Gets a scheduler that schedules work immediately on the current thread. */
	   var ImmediateScheduler = (function (__super__) {
	    inherits(ImmediateScheduler, __super__);
	    function ImmediateScheduler() {
	      __super__.call(this);
	    }
	
	    ImmediateScheduler.prototype.schedule = function (state, action) {
	      return disposableFixup(action(this, state));
	    };
	
	    return ImmediateScheduler;
	  }(Scheduler));
	
	  var immediateScheduler = Scheduler.immediate = new ImmediateScheduler();
	
	  /**
	   * Gets a scheduler that schedules work as soon as possible on the current thread.
	   */
	  var CurrentThreadScheduler = (function (__super__) {
	    var queue;
	
	    function runTrampoline () {
	      while (queue.length > 0) {
	        var item = queue.dequeue();
	        !item.isCancelled() && item.invoke();
	      }
	    }
	
	    inherits(CurrentThreadScheduler, __super__);
	    function CurrentThreadScheduler() {
	      __super__.call(this);
	    }
	
	    CurrentThreadScheduler.prototype.schedule = function (state, action) {
	      var si = new ScheduledItem(this, state, action, this.now());
	
	      if (!queue) {
	        queue = new PriorityQueue(4);
	        queue.enqueue(si);
	
	        var result = tryCatch(runTrampoline)();
	        queue = null;
	        if (result === errorObj) { thrower(result.e); }
	      } else {
	        queue.enqueue(si);
	      }
	      return si.disposable;
	    };
	
	    CurrentThreadScheduler.prototype.scheduleRequired = function () { return !queue; };
	
	    return CurrentThreadScheduler;
	  }(Scheduler));
	
	  var currentThreadScheduler = Scheduler.currentThread = new CurrentThreadScheduler();
	
	  var SchedulePeriodicRecursive = Rx.internals.SchedulePeriodicRecursive = (function () {
	    function createTick(self) {
	      return function tick(command, recurse) {
	        recurse(0, self._period);
	        var state = tryCatch(self._action)(self._state);
	        if (state === errorObj) {
	          self._cancel.dispose();
	          thrower(state.e);
	        }
	        self._state = state;
	      };
	    }
	
	    function SchedulePeriodicRecursive(scheduler, state, period, action) {
	      this._scheduler = scheduler;
	      this._state = state;
	      this._period = period;
	      this._action = action;
	    }
	
	    SchedulePeriodicRecursive.prototype.start = function () {
	      var d = new SingleAssignmentDisposable();
	      this._cancel = d;
	      d.setDisposable(this._scheduler.scheduleRecursiveFuture(0, this._period, createTick(this)));
	
	      return d;
	    };
	
	    return SchedulePeriodicRecursive;
	  }());
	
	  var scheduleMethod, clearMethod;
	
	  var localTimer = (function () {
	    var localSetTimeout, localClearTimeout = noop;
	    if (!!root.setTimeout) {
	      localSetTimeout = root.setTimeout;
	      localClearTimeout = root.clearTimeout;
	    } else if (!!root.WScript) {
	      localSetTimeout = function (fn, time) {
	        root.WScript.Sleep(time);
	        fn();
	      };
	    } else {
	      throw new NotSupportedError();
	    }
	
	    return {
	      setTimeout: localSetTimeout,
	      clearTimeout: localClearTimeout
	    };
	  }());
	  var localSetTimeout = localTimer.setTimeout,
	    localClearTimeout = localTimer.clearTimeout;
	
	  (function () {
	
	    var nextHandle = 1, tasksByHandle = {}, currentlyRunning = false;
	
	    clearMethod = function (handle) {
	      delete tasksByHandle[handle];
	    };
	
	    function runTask(handle) {
	      if (currentlyRunning) {
	        localSetTimeout(function () { runTask(handle); }, 0);
	      } else {
	        var task = tasksByHandle[handle];
	        if (task) {
	          currentlyRunning = true;
	          var result = tryCatch(task)();
	          clearMethod(handle);
	          currentlyRunning = false;
	          if (result === errorObj) { thrower(result.e); }
	        }
	      }
	    }
	
	    var reNative = new RegExp('^' +
	      String(toString)
	        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	        .replace(/toString| for [^\]]+/g, '.*?') + '$'
	    );
	
	    var setImmediate = typeof (setImmediate = freeGlobal && moduleExports && freeGlobal.setImmediate) == 'function' &&
	      !reNative.test(setImmediate) && setImmediate;
	
	    function postMessageSupported () {
	      // Ensure not in a worker
	      if (!root.postMessage || root.importScripts) { return false; }
	      var isAsync = false, oldHandler = root.onmessage;
	      // Test for async
	      root.onmessage = function () { isAsync = true; };
	      root.postMessage('', '*');
	      root.onmessage = oldHandler;
	
	      return isAsync;
	    }
	
	    // Use in order, setImmediate, nextTick, postMessage, MessageChannel, script readystatechanged, setTimeout
	    if (isFunction(setImmediate)) {
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        setImmediate(function () { runTask(id); });
	
	        return id;
	      };
	    } else if (typeof process !== 'undefined' && {}.toString.call(process) === '[object process]') {
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        process.nextTick(function () { runTask(id); });
	
	        return id;
	      };
	    } else if (postMessageSupported()) {
	      var MSG_PREFIX = 'ms.rx.schedule' + Math.random();
	
	      var onGlobalPostMessage = function (event) {
	        // Only if we're a match to avoid any other global events
	        if (typeof event.data === 'string' && event.data.substring(0, MSG_PREFIX.length) === MSG_PREFIX) {
	          runTask(event.data.substring(MSG_PREFIX.length));
	        }
	      };
	
	      root.addEventListener('message', onGlobalPostMessage, false);
	
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        root.postMessage(MSG_PREFIX + currentId, '*');
	        return id;
	      };
	    } else if (!!root.MessageChannel) {
	      var channel = new root.MessageChannel();
	
	      channel.port1.onmessage = function (e) { runTask(e.data); };
	
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        channel.port2.postMessage(id);
	        return id;
	      };
	    } else if ('document' in root && 'onreadystatechange' in root.document.createElement('script')) {
	
	      scheduleMethod = function (action) {
	        var scriptElement = root.document.createElement('script');
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	
	        scriptElement.onreadystatechange = function () {
	          runTask(id);
	          scriptElement.onreadystatechange = null;
	          scriptElement.parentNode.removeChild(scriptElement);
	          scriptElement = null;
	        };
	        root.document.documentElement.appendChild(scriptElement);
	        return id;
	      };
	
	    } else {
	      scheduleMethod = function (action) {
	        var id = nextHandle++;
	        tasksByHandle[id] = action;
	        localSetTimeout(function () {
	          runTask(id);
	        }, 0);
	
	        return id;
	      };
	    }
	  }());
	
	  /**
	   * Gets a scheduler that schedules work via a timed callback based upon platform.
	   */
	   var DefaultScheduler = (function (__super__) {
	     inherits(DefaultScheduler, __super__);
	     function DefaultScheduler() {
	       __super__.call(this);
	     }
	
	     function scheduleAction(disposable, action, scheduler, state) {
	       return function schedule() {
	         !disposable.isDisposed && disposable.setDisposable(Disposable._fixup(action(scheduler, state)));
	       };
	     }
	
	     function ClearDisposable(method, id) {
	       this._id = id;
	       this._method = method;
	       this.isDisposed = false;
	     }
	
	     ClearDisposable.prototype.dispose = function () {
	       if (!this.isDisposed) {
	         this.isDisposed = true;
	         this._method.call(null, this._id);
	       }
	     };
	
	    DefaultScheduler.prototype.schedule = function (state, action) {
	      var disposable = new SingleAssignmentDisposable(),
	          id = scheduleMethod(scheduleAction(disposable, action, this, state));
	      return new BinaryDisposable(disposable, new ClearDisposable(clearMethod, id));
	    };
	
	    DefaultScheduler.prototype._scheduleFuture = function (state, dueTime, action) {
	      if (dueTime === 0) { return this.schedule(state, action); }
	      var disposable = new SingleAssignmentDisposable(),
	          id = localSetTimeout(scheduleAction(disposable, action, this, state), dueTime);
	      return new BinaryDisposable(disposable, new ClearDisposable(localClearTimeout, id));
	    };
	
	    return DefaultScheduler;
	  }(Scheduler));
	
	  var defaultScheduler = Scheduler['default'] = Scheduler.async = new DefaultScheduler();
	
	  function IndexedItem(id, value) {
	    this.id = id;
	    this.value = value;
	  }
	
	  IndexedItem.prototype.compareTo = function (other) {
	    var c = this.value.compareTo(other.value);
	    c === 0 && (c = this.id - other.id);
	    return c;
	  };
	
	  var PriorityQueue = Rx.internals.PriorityQueue = function (capacity) {
	    this.items = new Array(capacity);
	    this.length = 0;
	  };
	
	  var priorityProto = PriorityQueue.prototype;
	  priorityProto.isHigherPriority = function (left, right) {
	    return this.items[left].compareTo(this.items[right]) < 0;
	  };
	
	  priorityProto.percolate = function (index) {
	    if (index >= this.length || index < 0) { return; }
	    var parent = index - 1 >> 1;
	    if (parent < 0 || parent === index) { return; }
	    if (this.isHigherPriority(index, parent)) {
	      var temp = this.items[index];
	      this.items[index] = this.items[parent];
	      this.items[parent] = temp;
	      this.percolate(parent);
	    }
	  };
	
	  priorityProto.heapify = function (index) {
	    +index || (index = 0);
	    if (index >= this.length || index < 0) { return; }
	    var left = 2 * index + 1,
	        right = 2 * index + 2,
	        first = index;
	    if (left < this.length && this.isHigherPriority(left, first)) {
	      first = left;
	    }
	    if (right < this.length && this.isHigherPriority(right, first)) {
	      first = right;
	    }
	    if (first !== index) {
	      var temp = this.items[index];
	      this.items[index] = this.items[first];
	      this.items[first] = temp;
	      this.heapify(first);
	    }
	  };
	
	  priorityProto.peek = function () { return this.items[0].value; };
	
	  priorityProto.removeAt = function (index) {
	    this.items[index] = this.items[--this.length];
	    this.items[this.length] = undefined;
	    this.heapify();
	  };
	
	  priorityProto.dequeue = function () {
	    var result = this.peek();
	    this.removeAt(0);
	    return result;
	  };
	
	  priorityProto.enqueue = function (item) {
	    var index = this.length++;
	    this.items[index] = new IndexedItem(PriorityQueue.count++, item);
	    this.percolate(index);
	  };
	
	  priorityProto.remove = function (item) {
	    for (var i = 0; i < this.length; i++) {
	      if (this.items[i].value === item) {
	        this.removeAt(i);
	        return true;
	      }
	    }
	    return false;
	  };
	  PriorityQueue.count = 0;
	
	  /**
	   *  Represents a notification to an observer.
	   */
	  var Notification = Rx.Notification = (function () {
	    function Notification() {
	
	    }
	
	    Notification.prototype._accept = function (onNext, onError, onCompleted) {
	      throw new NotImplementedError();
	    };
	
	    Notification.prototype._acceptObservable = function (onNext, onError, onCompleted) {
	      throw new NotImplementedError();
	    };
	
	    /**
	     * Invokes the delegate corresponding to the notification or the observer's method corresponding to the notification and returns the produced result.
	     *
	     * @memberOf Notification
	     * @param {Any} observerOrOnNext Delegate to invoke for an OnNext notification or Observer to invoke the notification on..
	     * @param {Function} onError Delegate to invoke for an OnError notification.
	     * @param {Function} onCompleted Delegate to invoke for an OnCompleted notification.
	     * @returns {Any} Result produced by the observation.
	     */
	    Notification.prototype.accept = function (observerOrOnNext, onError, onCompleted) {
	      return observerOrOnNext && typeof observerOrOnNext === 'object' ?
	        this._acceptObservable(observerOrOnNext) :
	        this._accept(observerOrOnNext, onError, onCompleted);
	    };
	
	    /**
	     * Returns an observable sequence with a single notification.
	     *
	     * @memberOf Notifications
	     * @param {Scheduler} [scheduler] Scheduler to send out the notification calls on.
	     * @returns {Observable} The observable sequence that surfaces the behavior of the notification upon subscription.
	     */
	    Notification.prototype.toObservable = function (scheduler) {
	      var self = this;
	      isScheduler(scheduler) || (scheduler = immediateScheduler);
	      return new AnonymousObservable(function (o) {
	        return scheduler.schedule(self, function (_, notification) {
	          notification._acceptObservable(o);
	          notification.kind === 'N' && o.onCompleted();
	        });
	      });
	    };
	
	    return Notification;
	  })();
	
	  var OnNextNotification = (function (__super__) {
	    inherits(OnNextNotification, __super__);
	    function OnNextNotification(value) {
	      this.value = value;
	      this.kind = 'N';
	    }
	
	    OnNextNotification.prototype._accept = function (onNext) {
	      return onNext(this.value);
	    };
	
	    OnNextNotification.prototype._acceptObservable = function (o) {
	      return o.onNext(this.value);
	    };
	
	    OnNextNotification.prototype.toString = function () {
	      return 'OnNext(' + this.value + ')';
	    };
	
	    return OnNextNotification;
	  }(Notification));
	
	  var OnErrorNotification = (function (__super__) {
	    inherits(OnErrorNotification, __super__);
	    function OnErrorNotification(error) {
	      this.error = error;
	      this.kind = 'E';
	    }
	
	    OnErrorNotification.prototype._accept = function (onNext, onError) {
	      return onError(this.error);
	    };
	
	    OnErrorNotification.prototype._acceptObservable = function (o) {
	      return o.onError(this.error);
	    };
	
	    OnErrorNotification.prototype.toString = function () {
	      return 'OnError(' + this.error + ')';
	    };
	
	    return OnErrorNotification;
	  }(Notification));
	
	  var OnCompletedNotification = (function (__super__) {
	    inherits(OnCompletedNotification, __super__);
	    function OnCompletedNotification() {
	      this.kind = 'C';
	    }
	
	    OnCompletedNotification.prototype._accept = function (onNext, onError, onCompleted) {
	      return onCompleted();
	    };
	
	    OnCompletedNotification.prototype._acceptObservable = function (o) {
	      return o.onCompleted();
	    };
	
	    OnCompletedNotification.prototype.toString = function () {
	      return 'OnCompleted()';
	    };
	
	    return OnCompletedNotification;
	  }(Notification));
	
	  /**
	   * Creates an object that represents an OnNext notification to an observer.
	   * @param {Any} value The value contained in the notification.
	   * @returns {Notification} The OnNext notification containing the value.
	   */
	  var notificationCreateOnNext = Notification.createOnNext = function (value) {
	    return new OnNextNotification(value);
	  };
	
	  /**
	   * Creates an object that represents an OnError notification to an observer.
	   * @param {Any} error The exception contained in the notification.
	   * @returns {Notification} The OnError notification containing the exception.
	   */
	  var notificationCreateOnError = Notification.createOnError = function (error) {
	    return new OnErrorNotification(error);
	  };
	
	  /**
	   * Creates an object that represents an OnCompleted notification to an observer.
	   * @returns {Notification} The OnCompleted notification.
	   */
	  var notificationCreateOnCompleted = Notification.createOnCompleted = function () {
	    return new OnCompletedNotification();
	  };
	
	  /**
	   * Supports push-style iteration over an observable sequence.
	   */
	  var Observer = Rx.Observer = function () { };
	
	  /**
	   *  Creates an observer from the specified OnNext, along with optional OnError, and OnCompleted actions.
	   * @param {Function} [onNext] Observer's OnNext action implementation.
	   * @param {Function} [onError] Observer's OnError action implementation.
	   * @param {Function} [onCompleted] Observer's OnCompleted action implementation.
	   * @returns {Observer} The observer object implemented using the given actions.
	   */
	  var observerCreate = Observer.create = function (onNext, onError, onCompleted) {
	    onNext || (onNext = noop);
	    onError || (onError = defaultError);
	    onCompleted || (onCompleted = noop);
	    return new AnonymousObserver(onNext, onError, onCompleted);
	  };
	
	  /**
	   * Abstract base class for implementations of the Observer class.
	   * This base class enforces the grammar of observers where OnError and OnCompleted are terminal messages.
	   */
	  var AbstractObserver = Rx.internals.AbstractObserver = (function (__super__) {
	    inherits(AbstractObserver, __super__);
	
	    /**
	     * Creates a new observer in a non-stopped state.
	     */
	    function AbstractObserver() {
	      this.isStopped = false;
	    }
	
	    // Must be implemented by other observers
	    AbstractObserver.prototype.next = notImplemented;
	    AbstractObserver.prototype.error = notImplemented;
	    AbstractObserver.prototype.completed = notImplemented;
	
	    /**
	     * Notifies the observer of a new element in the sequence.
	     * @param {Any} value Next element in the sequence.
	     */
	    AbstractObserver.prototype.onNext = function (value) {
	      !this.isStopped && this.next(value);
	    };
	
	    /**
	     * Notifies the observer that an exception has occurred.
	     * @param {Any} error The error that has occurred.
	     */
	    AbstractObserver.prototype.onError = function (error) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.error(error);
	      }
	    };
	
	    /**
	     * Notifies the observer of the end of the sequence.
	     */
	    AbstractObserver.prototype.onCompleted = function () {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.completed();
	      }
	    };
	
	    /**
	     * Disposes the observer, causing it to transition to the stopped state.
	     */
	    AbstractObserver.prototype.dispose = function () { this.isStopped = true; };
	
	    AbstractObserver.prototype.fail = function (e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.error(e);
	        return true;
	      }
	
	      return false;
	    };
	
	    return AbstractObserver;
	  }(Observer));
	
	  /**
	   * Class to create an Observer instance from delegate-based implementations of the on* methods.
	   */
	  var AnonymousObserver = Rx.AnonymousObserver = (function (__super__) {
	    inherits(AnonymousObserver, __super__);
	
	    /**
	     * Creates an observer from the specified OnNext, OnError, and OnCompleted actions.
	     * @param {Any} onNext Observer's OnNext action implementation.
	     * @param {Any} onError Observer's OnError action implementation.
	     * @param {Any} onCompleted Observer's OnCompleted action implementation.
	     */
	    function AnonymousObserver(onNext, onError, onCompleted) {
	      __super__.call(this);
	      this._onNext = onNext;
	      this._onError = onError;
	      this._onCompleted = onCompleted;
	    }
	
	    /**
	     * Calls the onNext action.
	     * @param {Any} value Next element in the sequence.
	     */
	    AnonymousObserver.prototype.next = function (value) {
	      this._onNext(value);
	    };
	
	    /**
	     * Calls the onError action.
	     * @param {Any} error The error that has occurred.
	     */
	    AnonymousObserver.prototype.error = function (error) {
	      this._onError(error);
	    };
	
	    /**
	     *  Calls the onCompleted action.
	     */
	    AnonymousObserver.prototype.completed = function () {
	      this._onCompleted();
	    };
	
	    return AnonymousObserver;
	  }(AbstractObserver));
	
	  var observableProto;
	
	  /**
	   * Represents a push-style collection.
	   */
	  var Observable = Rx.Observable = (function () {
	
	    function makeSubscribe(self, subscribe) {
	      return function (o) {
	        var oldOnError = o.onError;
	        o.onError = function (e) {
	          makeStackTraceLong(e, self);
	          oldOnError.call(o, e);
	        };
	
	        return subscribe.call(self, o);
	      };
	    }
	
	    function Observable() {
	      if (Rx.config.longStackSupport && hasStacks) {
	        var oldSubscribe = this._subscribe;
	        var e = tryCatch(thrower)(new Error()).e;
	        this.stack = e.stack.substring(e.stack.indexOf('\n') + 1);
	        this._subscribe = makeSubscribe(this, oldSubscribe);
	      }
	    }
	
	    observableProto = Observable.prototype;
	
	    /**
	    * Determines whether the given object is an Observable
	    * @param {Any} An object to determine whether it is an Observable
	    * @returns {Boolean} true if an Observable, else false.
	    */
	    Observable.isObservable = function (o) {
	      return o && isFunction(o.subscribe);
	    };
	
	    /**
	     *  Subscribes an o to the observable sequence.
	     *  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
	     *  @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
	     *  @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.
	     *  @returns {Diposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribe = observableProto.forEach = function (oOrOnNext, onError, onCompleted) {
	      return this._subscribe(typeof oOrOnNext === 'object' ?
	        oOrOnNext :
	        observerCreate(oOrOnNext, onError, onCompleted));
	    };
	
	    /**
	     * Subscribes to the next value in the sequence with an optional "this" argument.
	     * @param {Function} onNext The function to invoke on each element in the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribeOnNext = function (onNext, thisArg) {
	      return this._subscribe(observerCreate(typeof thisArg !== 'undefined' ? function(x) { onNext.call(thisArg, x); } : onNext));
	    };
	
	    /**
	     * Subscribes to an exceptional condition in the sequence with an optional "this" argument.
	     * @param {Function} onError The function to invoke upon exceptional termination of the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribeOnError = function (onError, thisArg) {
	      return this._subscribe(observerCreate(null, typeof thisArg !== 'undefined' ? function(e) { onError.call(thisArg, e); } : onError));
	    };
	
	    /**
	     * Subscribes to the next value in the sequence with an optional "this" argument.
	     * @param {Function} onCompleted The function to invoke upon graceful termination of the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */
	    observableProto.subscribeOnCompleted = function (onCompleted, thisArg) {
	      return this._subscribe(observerCreate(null, null, typeof thisArg !== 'undefined' ? function() { onCompleted.call(thisArg); } : onCompleted));
	    };
	
	    return Observable;
	  })();
	
	  var ScheduledObserver = Rx.internals.ScheduledObserver = (function (__super__) {
	    inherits(ScheduledObserver, __super__);
	
	    function ScheduledObserver(scheduler, observer) {
	      __super__.call(this);
	      this.scheduler = scheduler;
	      this.observer = observer;
	      this.isAcquired = false;
	      this.hasFaulted = false;
	      this.queue = [];
	      this.disposable = new SerialDisposable();
	    }
	
	    ScheduledObserver.prototype.next = function (value) {
	      var self = this;
	      this.queue.push(function () { self.observer.onNext(value); });
	    };
	
	    ScheduledObserver.prototype.error = function (e) {
	      var self = this;
	      this.queue.push(function () { self.observer.onError(e); });
	    };
	
	    ScheduledObserver.prototype.completed = function () {
	      var self = this;
	      this.queue.push(function () { self.observer.onCompleted(); });
	    };
	
	    ScheduledObserver.prototype.ensureActive = function () {
	      var isOwner = false;
	      if (!this.hasFaulted && this.queue.length > 0) {
	        isOwner = !this.isAcquired;
	        this.isAcquired = true;
	      }
	      if (isOwner) {
	        this.disposable.setDisposable(this.scheduler.scheduleRecursive(this, function (parent, self) {
	          var work;
	          if (parent.queue.length > 0) {
	            work = parent.queue.shift();
	          } else {
	            parent.isAcquired = false;
	            return;
	          }
	          var res = tryCatch(work)();
	          if (res === errorObj) {
	            parent.queue = [];
	            parent.hasFaulted = true;
	            return thrower(res.e);
	          }
	          self(parent);
	        }));
	      }
	    };
	
	    ScheduledObserver.prototype.dispose = function () {
	      __super__.prototype.dispose.call(this);
	      this.disposable.dispose();
	    };
	
	    return ScheduledObserver;
	  }(AbstractObserver));
	
	  var ObservableBase = Rx.ObservableBase = (function (__super__) {
	    inherits(ObservableBase, __super__);
	
	    function fixSubscriber(subscriber) {
	      return subscriber && isFunction(subscriber.dispose) ? subscriber :
	        isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
	    }
	
	    function setDisposable(s, state) {
	      var ado = state[0], self = state[1];
	      var sub = tryCatch(self.subscribeCore).call(self, ado);
	      if (sub === errorObj && !ado.fail(errorObj.e)) { thrower(errorObj.e); }
	      ado.setDisposable(fixSubscriber(sub));
	    }
	
	    function ObservableBase() {
	      __super__.call(this);
	    }
	
	    ObservableBase.prototype._subscribe = function (o) {
	      var ado = new AutoDetachObserver(o), state = [ado, this];
	
	      if (currentThreadScheduler.scheduleRequired()) {
	        currentThreadScheduler.schedule(state, setDisposable);
	      } else {
	        setDisposable(null, state);
	      }
	      return ado;
	    };
	
	    ObservableBase.prototype.subscribeCore = notImplemented;
	
	    return ObservableBase;
	  }(Observable));
	
	var FlatMapObservable = Rx.FlatMapObservable = (function(__super__) {
	
	    inherits(FlatMapObservable, __super__);
	
	    function FlatMapObservable(source, selector, resultSelector, thisArg) {
	      this.resultSelector = isFunction(resultSelector) ? resultSelector : null;
	      this.selector = bindCallback(isFunction(selector) ? selector : function() { return selector; }, thisArg, 3);
	      this.source = source;
	      __super__.call(this);
	    }
	
	    FlatMapObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new InnerObserver(o, this.selector, this.resultSelector, this));
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(observer, selector, resultSelector, source) {
	      this.i = 0;
	      this.selector = selector;
	      this.resultSelector = resultSelector;
	      this.source = source;
	      this.o = observer;
	      AbstractObserver.call(this);
	    }
	
	    InnerObserver.prototype._wrapResult = function(result, x, i) {
	      return this.resultSelector ?
	        result.map(function(y, i2) { return this.resultSelector(x, y, i, i2); }, this) :
	        result;
	    };
	
	    InnerObserver.prototype.next = function(x) {
	      var i = this.i++;
	      var result = tryCatch(this.selector)(x, i, this.source);
	      if (result === errorObj) { return this.o.onError(result.e); }
	
	      isPromise(result) && (result = observableFromPromise(result));
	      (isArrayLike(result) || isIterable(result)) && (result = Observable.from(result));
	      this.o.onNext(this._wrapResult(result, x, i));
	    };
	
	    InnerObserver.prototype.error = function(e) { this.o.onError(e); };
	
	    InnerObserver.prototype.onCompleted = function() { this.o.onCompleted(); };
	
	    return FlatMapObservable;
	
	}(ObservableBase));
	
	  var Enumerable = Rx.internals.Enumerable = function () { };
	
	  function IsDisposedDisposable(state) {
	    this._s = state;
	    this.isDisposed = false;
	  }
	
	  IsDisposedDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this.isDisposed = true;
	      this._s.isDisposed = true;
	    }
	  };
	
	  var ConcatEnumerableObservable = (function(__super__) {
	    inherits(ConcatEnumerableObservable, __super__);
	    function ConcatEnumerableObservable(sources) {
	      this.sources = sources;
	      __super__.call(this);
	    }
	
	    ConcatEnumerableObservable.prototype.subscribeCore = function (o) {
	      var state = { isDisposed: false }, subscription = new SerialDisposable();
	      var cancelable = currentThreadScheduler.scheduleRecursive(this.sources[$iterator$](), function (e, self) {
	        if (state.isDisposed) { return; }
	        var currentItem = tryCatch(e.next).call(e);
	        if (currentItem === errorObj) { return o.onError(currentItem.e); }
	
	        if (currentItem.done) {
	          return o.onCompleted();
	        }
	
	        // Check if promise
	        var currentValue = currentItem.value;
	        isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
	
	        var d = new SingleAssignmentDisposable();
	        subscription.setDisposable(d);
	        d.setDisposable(currentValue.subscribe(new InnerObserver(o, self, e)));
	      });
	
	      return new NAryDisposable([subscription, cancelable, new IsDisposedDisposable(state)]);
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, s, e) {
	      this._o = o;
	      this._s = s;
	      this._e = e;
	      AbstractObserver.call(this);
	    }
	    InnerObserver.prototype.onNext = function (x) { this._o.onNext(x); };
	    InnerObserver.prototype.onError = function (e) { this._o.onError(e); };
	    InnerObserver.prototype.onCompleted = function () { this._s(this._e); };
	
	    return ConcatEnumerableObservable;
	  }(ObservableBase));
	
	  Enumerable.prototype.concat = function () {
	    return new ConcatEnumerableObservable(this);
	  };
	
	  var CatchErrorObservable = (function(__super__) {
	    inherits(CatchErrorObservable, __super__);
	    function CatchErrorObservable(sources) {
	      this.sources = sources;
	      __super__.call(this);
	    }
	
	    CatchErrorObservable.prototype.subscribeCore = function (o) {
	      var e = this.sources[$iterator$]();
	
	      var state = { isDisposed: false }, subscription = new SerialDisposable();
	      var cancelable = currentThreadScheduler.scheduleRecursive(null, function (lastException, self) {
	        if (state.isDisposed) { return; }
	        var currentItem = tryCatch(e.next).call(e);
	        if (currentItem === errorObj) { return o.onError(currentItem.e); }
	
	        if (currentItem.done) {
	          return lastException !== null ? o.onError(lastException) : o.onCompleted();
	        }
	
	        // Check if promise
	        var currentValue = currentItem.value;
	        isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
	
	        var d = new SingleAssignmentDisposable();
	        subscription.setDisposable(d);
	        d.setDisposable(currentValue.subscribe(new InnerObserver(o, self)));
	      });
	      return new NAryDisposable([subscription, cancelable, new IsDisposedDisposable(state)]);
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, recurse) {
	      this._o = o;
	      this._recurse = recurse;
	      AbstractObserver.call(this);
	    }
	
	    InnerObserver.prototype.next = function (x) { this._o.onNext(x); };
	    InnerObserver.prototype.error = function (e) { this._recurse(e); };
	    InnerObserver.prototype.completed = function () { this._o.onCompleted(); };
	
	    return CatchErrorObservable;
	  }(ObservableBase));
	
	  Enumerable.prototype.catchError = function () {
	    return new CatchErrorObservable(this);
	  };
	
	  Enumerable.prototype.catchErrorWhen = function (notificationHandler) {
	    var sources = this;
	    return new AnonymousObservable(function (o) {
	      var exceptions = new Subject(),
	        notifier = new Subject(),
	        handled = notificationHandler(exceptions),
	        notificationDisposable = handled.subscribe(notifier);
	
	      var e = sources[$iterator$]();
	
	      var state = { isDisposed: false },
	        lastException,
	        subscription = new SerialDisposable();
	      var cancelable = currentThreadScheduler.scheduleRecursive(null, function (_, self) {
	        if (state.isDisposed) { return; }
	        var currentItem = tryCatch(e.next).call(e);
	        if (currentItem === errorObj) { return o.onError(currentItem.e); }
	
	        if (currentItem.done) {
	          if (lastException) {
	            o.onError(lastException);
	          } else {
	            o.onCompleted();
	          }
	          return;
	        }
	
	        // Check if promise
	        var currentValue = currentItem.value;
	        isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
	
	        var outer = new SingleAssignmentDisposable();
	        var inner = new SingleAssignmentDisposable();
	        subscription.setDisposable(new BinaryDisposable(inner, outer));
	        outer.setDisposable(currentValue.subscribe(
	          function(x) { o.onNext(x); },
	          function (exn) {
	            inner.setDisposable(notifier.subscribe(self, function(ex) {
	              o.onError(ex);
	            }, function() {
	              o.onCompleted();
	            }));
	
	            exceptions.onNext(exn);
	          },
	          function() { o.onCompleted(); }));
	      });
	
	      return new NAryDisposable([notificationDisposable, subscription, cancelable, new IsDisposedDisposable(state)]);
	    });
	  };
	
	  var RepeatEnumerable = (function (__super__) {
	    inherits(RepeatEnumerable, __super__);
	
	    function RepeatEnumerable(v, c) {
	      this.v = v;
	      this.c = c == null ? -1 : c;
	    }
	    RepeatEnumerable.prototype[$iterator$] = function () {
	      return new RepeatEnumerator(this);
	    };
	
	    function RepeatEnumerator(p) {
	      this.v = p.v;
	      this.l = p.c;
	    }
	    RepeatEnumerator.prototype.next = function () {
	      if (this.l === 0) { return doneEnumerator; }
	      if (this.l > 0) { this.l--; }
	      return { done: false, value: this.v };
	    };
	
	    return RepeatEnumerable;
	  }(Enumerable));
	
	  var enumerableRepeat = Enumerable.repeat = function (value, repeatCount) {
	    return new RepeatEnumerable(value, repeatCount);
	  };
	
	  var OfEnumerable = (function(__super__) {
	    inherits(OfEnumerable, __super__);
	    function OfEnumerable(s, fn, thisArg) {
	      this.s = s;
	      this.fn = fn ? bindCallback(fn, thisArg, 3) : null;
	    }
	    OfEnumerable.prototype[$iterator$] = function () {
	      return new OfEnumerator(this);
	    };
	
	    function OfEnumerator(p) {
	      this.i = -1;
	      this.s = p.s;
	      this.l = this.s.length;
	      this.fn = p.fn;
	    }
	    OfEnumerator.prototype.next = function () {
	     return ++this.i < this.l ?
	       { done: false, value: !this.fn ? this.s[this.i] : this.fn(this.s[this.i], this.i, this.s) } :
	       doneEnumerator;
	    };
	
	    return OfEnumerable;
	  }(Enumerable));
	
	  var enumerableOf = Enumerable.of = function (source, selector, thisArg) {
	    return new OfEnumerable(source, selector, thisArg);
	  };
	
	  var ToArrayObservable = (function(__super__) {
	    inherits(ToArrayObservable, __super__);
	    function ToArrayObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    ToArrayObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new InnerObserver(o));
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o) {
	      this.o = o;
	      this.a = [];
	      AbstractObserver.call(this);
	    }
	    
	    InnerObserver.prototype.next = function (x) { this.a.push(x); };
	    InnerObserver.prototype.error = function (e) { this.o.onError(e);  };
	    InnerObserver.prototype.completed = function () { this.o.onNext(this.a); this.o.onCompleted(); };
	
	    return ToArrayObservable;
	  }(ObservableBase));
	
	  /**
	  * Creates an array from an observable sequence.
	  * @returns {Observable} An observable sequence containing a single element with a list containing all the elements of the source sequence.
	  */
	  observableProto.toArray = function () {
	    return new ToArrayObservable(this);
	  };
	
	  /**
	   *  Creates an observable sequence from a specified subscribe method implementation.
	   * @example
	   *  var res = Rx.Observable.create(function (observer) { return function () { } );
	   *  var res = Rx.Observable.create(function (observer) { return Rx.Disposable.empty; } );
	   *  var res = Rx.Observable.create(function (observer) { } );
	   * @param {Function} subscribe Implementation of the resulting observable sequence's subscribe method, returning a function that will be wrapped in a Disposable.
	   * @returns {Observable} The observable sequence with the specified implementation for the Subscribe method.
	   */
	  Observable.create = function (subscribe, parent) {
	    return new AnonymousObservable(subscribe, parent);
	  };
	
	  var Defer = (function(__super__) {
	    inherits(Defer, __super__);
	    function Defer(factory) {
	      this._f = factory;
	      __super__.call(this);
	    }
	
	    Defer.prototype.subscribeCore = function (o) {
	      var result = tryCatch(this._f)();
	      if (result === errorObj) { return observableThrow(result.e).subscribe(o);}
	      isPromise(result) && (result = observableFromPromise(result));
	      return result.subscribe(o);
	    };
	
	    return Defer;
	  }(ObservableBase));
	
	  /**
	   *  Returns an observable sequence that invokes the specified factory function whenever a new observer subscribes.
	   *
	   * @example
	   *  var res = Rx.Observable.defer(function () { return Rx.Observable.fromArray([1,2,3]); });
	   * @param {Function} observableFactory Observable factory function to invoke for each observer that subscribes to the resulting sequence or Promise.
	   * @returns {Observable} An observable sequence whose observers trigger an invocation of the given observable factory function.
	   */
	  var observableDefer = Observable.defer = function (observableFactory) {
	    return new Defer(observableFactory);
	  };
	
	  var EmptyObservable = (function(__super__) {
	    inherits(EmptyObservable, __super__);
	    function EmptyObservable(scheduler) {
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    EmptyObservable.prototype.subscribeCore = function (observer) {
	      var sink = new EmptySink(observer, this.scheduler);
	      return sink.run();
	    };
	
	    function EmptySink(observer, scheduler) {
	      this.observer = observer;
	      this.scheduler = scheduler;
	    }
	
	    function scheduleItem(s, state) {
	      state.onCompleted();
	      return disposableEmpty;
	    }
	
	    EmptySink.prototype.run = function () {
	      var state = this.observer;
	      return this.scheduler === immediateScheduler ?
	        scheduleItem(null, state) :
	        this.scheduler.schedule(state, scheduleItem);
	    };
	
	    return EmptyObservable;
	  }(ObservableBase));
	
	  var EMPTY_OBSERVABLE = new EmptyObservable(immediateScheduler);
	
	  /**
	   *  Returns an empty observable sequence, using the specified scheduler to send out the single OnCompleted message.
	   *
	   * @example
	   *  var res = Rx.Observable.empty();
	   *  var res = Rx.Observable.empty(Rx.Scheduler.timeout);
	   * @param {Scheduler} [scheduler] Scheduler to send the termination call on.
	   * @returns {Observable} An observable sequence with no elements.
	   */
	  var observableEmpty = Observable.empty = function (scheduler) {
	    isScheduler(scheduler) || (scheduler = immediateScheduler);
	    return scheduler === immediateScheduler ? EMPTY_OBSERVABLE : new EmptyObservable(scheduler);
	  };
	
	  var FromObservable = (function(__super__) {
	    inherits(FromObservable, __super__);
	    function FromObservable(iterable, mapper, scheduler) {
	      this.iterable = iterable;
	      this.mapper = mapper;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    FromObservable.prototype.subscribeCore = function (o) {
	      var sink = new FromSink(o, this);
	      return sink.run();
	    };
	
	    return FromObservable;
	  }(ObservableBase));
	
	  var FromSink = (function () {
	    function FromSink(o, parent) {
	      this.o = o;
	      this.parent = parent;
	    }
	
	    FromSink.prototype.run = function () {
	      var list = Object(this.parent.iterable),
	          it = getIterable(list),
	          o = this.o,
	          mapper = this.parent.mapper;
	
	      function loopRecursive(i, recurse) {
	        var next = tryCatch(it.next).call(it);
	        if (next === errorObj) { return o.onError(next.e); }
	        if (next.done) { return o.onCompleted(); }
	
	        var result = next.value;
	
	        if (isFunction(mapper)) {
	          result = tryCatch(mapper)(result, i);
	          if (result === errorObj) { return o.onError(result.e); }
	        }
	
	        o.onNext(result);
	        recurse(i + 1);
	      }
	
	      return this.parent.scheduler.scheduleRecursive(0, loopRecursive);
	    };
	
	    return FromSink;
	  }());
	
	  var maxSafeInteger = Math.pow(2, 53) - 1;
	
	  function StringIterable(s) {
	    this._s = s;
	  }
	
	  StringIterable.prototype[$iterator$] = function () {
	    return new StringIterator(this._s);
	  };
	
	  function StringIterator(s) {
	    this._s = s;
	    this._l = s.length;
	    this._i = 0;
	  }
	
	  StringIterator.prototype[$iterator$] = function () {
	    return this;
	  };
	
	  StringIterator.prototype.next = function () {
	    return this._i < this._l ? { done: false, value: this._s.charAt(this._i++) } : doneEnumerator;
	  };
	
	  function ArrayIterable(a) {
	    this._a = a;
	  }
	
	  ArrayIterable.prototype[$iterator$] = function () {
	    return new ArrayIterator(this._a);
	  };
	
	  function ArrayIterator(a) {
	    this._a = a;
	    this._l = toLength(a);
	    this._i = 0;
	  }
	
	  ArrayIterator.prototype[$iterator$] = function () {
	    return this;
	  };
	
	  ArrayIterator.prototype.next = function () {
	    return this._i < this._l ? { done: false, value: this._a[this._i++] } : doneEnumerator;
	  };
	
	  function numberIsFinite(value) {
	    return typeof value === 'number' && root.isFinite(value);
	  }
	
	  function isNan(n) {
	    return n !== n;
	  }
	
	  function getIterable(o) {
	    var i = o[$iterator$], it;
	    if (!i && typeof o === 'string') {
	      it = new StringIterable(o);
	      return it[$iterator$]();
	    }
	    if (!i && o.length !== undefined) {
	      it = new ArrayIterable(o);
	      return it[$iterator$]();
	    }
	    if (!i) { throw new TypeError('Object is not iterable'); }
	    return o[$iterator$]();
	  }
	
	  function sign(value) {
	    var number = +value;
	    if (number === 0) { return number; }
	    if (isNaN(number)) { return number; }
	    return number < 0 ? -1 : 1;
	  }
	
	  function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) { return 0; }
	    if (len === 0 || !numberIsFinite(len)) { return len; }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) { return 0; }
	    if (len > maxSafeInteger) { return maxSafeInteger; }
	    return len;
	  }
	
	  /**
	  * This method creates a new Observable sequence from an array-like or iterable object.
	  * @param {Any} arrayLike An array-like or iterable object to convert to an Observable sequence.
	  * @param {Function} [mapFn] Map function to call on every element of the array.
	  * @param {Any} [thisArg] The context to use calling the mapFn if provided.
	  * @param {Scheduler} [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
	  */
	  var observableFrom = Observable.from = function (iterable, mapFn, thisArg, scheduler) {
	    if (iterable == null) {
	      throw new Error('iterable cannot be null.')
	    }
	    if (mapFn && !isFunction(mapFn)) {
	      throw new Error('mapFn when provided must be a function');
	    }
	    if (mapFn) {
	      var mapper = bindCallback(mapFn, thisArg, 2);
	    }
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new FromObservable(iterable, mapper, scheduler);
	  }
	
	  var FromArrayObservable = (function(__super__) {
	    inherits(FromArrayObservable, __super__);
	    function FromArrayObservable(args, scheduler) {
	      this.args = args;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    FromArrayObservable.prototype.subscribeCore = function (observer) {
	      var sink = new FromArraySink(observer, this);
	      return sink.run();
	    };
	
	    return FromArrayObservable;
	  }(ObservableBase));
	
	  function FromArraySink(observer, parent) {
	    this.observer = observer;
	    this.parent = parent;
	  }
	
	  function loopRecursive(args, observer) {
	    var len = args.length;
	    return function loop (i, recurse) {
	      if (i < len) {
	        observer.onNext(args[i]);
	        recurse(i + 1);
	      } else {
	        observer.onCompleted();
	      }
	    };
	  }
	
	  FromArraySink.prototype.run = function () {
	    return this.parent.scheduler.scheduleRecursive(0, loopRecursive(this.parent.args, this.observer));
	  };
	
	  /**
	  *  Converts an array to an observable sequence, using an optional scheduler to enumerate the array.
	  * @deprecated use Observable.from or Observable.of
	  * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given enumerable sequence.
	  */
	  var observableFromArray = Observable.fromArray = function (array, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new FromArrayObservable(array, scheduler)
	  };
	
	  var NeverObservable = (function(__super__) {
	    inherits(NeverObservable, __super__);
	    function NeverObservable() {
	      __super__.call(this);
	    }
	
	    NeverObservable.prototype.subscribeCore = function (observer) {
	      return disposableEmpty;
	    };
	
	    return NeverObservable;
	  }(ObservableBase));
	
	  var NEVER_OBSERVABLE = new NeverObservable();
	
	  /**
	   * Returns a non-terminating observable sequence, which can be used to denote an infinite duration (e.g. when using reactive joins).
	   * @returns {Observable} An observable sequence whose observers will never get called.
	   */
	  var observableNever = Observable.never = function () {
	    return NEVER_OBSERVABLE;
	  };
	
	  function observableOf (scheduler, array) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new FromArrayObservable(array, scheduler);
	  }
	
	  /**
	  *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
	  */
	  Observable.of = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return new FromArrayObservable(args, currentThreadScheduler);
	  };
	
	  /**
	  *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
	  * @param {Scheduler} scheduler A scheduler to use for scheduling the arguments.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
	  */
	  Observable.ofWithScheduler = function (scheduler) {
	    var len = arguments.length, args = new Array(len - 1);
	    for(var i = 1; i < len; i++) { args[i - 1] = arguments[i]; }
	    return new FromArrayObservable(args, scheduler);
	  };
	
	  var PairsObservable = (function(__super__) {
	    inherits(PairsObservable, __super__);
	    function PairsObservable(obj, scheduler) {
	      this.obj = obj;
	      this.keys = Object.keys(obj);
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    PairsObservable.prototype.subscribeCore = function (observer) {
	      var sink = new PairsSink(observer, this);
	      return sink.run();
	    };
	
	    return PairsObservable;
	  }(ObservableBase));
	
	  function PairsSink(observer, parent) {
	    this.observer = observer;
	    this.parent = parent;
	  }
	
	  PairsSink.prototype.run = function () {
	    var observer = this.observer, obj = this.parent.obj, keys = this.parent.keys, len = keys.length;
	    function loopRecursive(i, recurse) {
	      if (i < len) {
	        var key = keys[i];
	        observer.onNext([key, obj[key]]);
	        recurse(i + 1);
	      } else {
	        observer.onCompleted();
	      }
	    }
	
	    return this.parent.scheduler.scheduleRecursive(0, loopRecursive);
	  };
	
	  /**
	   * Convert an object into an observable sequence of [key, value] pairs.
	   * @param {Object} obj The object to inspect.
	   * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
	   * @returns {Observable} An observable sequence of [key, value] pairs from the object.
	   */
	  Observable.pairs = function (obj, scheduler) {
	    scheduler || (scheduler = currentThreadScheduler);
	    return new PairsObservable(obj, scheduler);
	  };
	
	    var RangeObservable = (function(__super__) {
	    inherits(RangeObservable, __super__);
	    function RangeObservable(start, count, scheduler) {
	      this.start = start;
	      this.rangeCount = count;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    RangeObservable.prototype.subscribeCore = function (observer) {
	      var sink = new RangeSink(observer, this);
	      return sink.run();
	    };
	
	    return RangeObservable;
	  }(ObservableBase));
	
	  var RangeSink = (function () {
	    function RangeSink(observer, parent) {
	      this.observer = observer;
	      this.parent = parent;
	    }
	
	    function loopRecursive(start, count, observer) {
	      return function loop (i, recurse) {
	        if (i < count) {
	          observer.onNext(start + i);
	          recurse(i + 1);
	        } else {
	          observer.onCompleted();
	        }
	      };
	    }
	
	    RangeSink.prototype.run = function () {
	      return this.parent.scheduler.scheduleRecursive(
	        0,
	        loopRecursive(this.parent.start, this.parent.rangeCount, this.observer)
	      );
	    };
	
	    return RangeSink;
	  }());
	
	  /**
	  *  Generates an observable sequence of integral numbers within a specified range, using the specified scheduler to send out observer messages.
	  * @param {Number} start The value of the first integer in the sequence.
	  * @param {Number} count The number of sequential integers to generate.
	  * @param {Scheduler} [scheduler] Scheduler to run the generator loop on. If not specified, defaults to Scheduler.currentThread.
	  * @returns {Observable} An observable sequence that contains a range of sequential integral numbers.
	  */
	  Observable.range = function (start, count, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new RangeObservable(start, count, scheduler);
	  };
	
	  var RepeatObservable = (function(__super__) {
	    inherits(RepeatObservable, __super__);
	    function RepeatObservable(value, repeatCount, scheduler) {
	      this.value = value;
	      this.repeatCount = repeatCount == null ? -1 : repeatCount;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    RepeatObservable.prototype.subscribeCore = function (observer) {
	      var sink = new RepeatSink(observer, this);
	      return sink.run();
	    };
	
	    return RepeatObservable;
	  }(ObservableBase));
	
	  function RepeatSink(observer, parent) {
	    this.observer = observer;
	    this.parent = parent;
	  }
	
	  RepeatSink.prototype.run = function () {
	    var observer = this.observer, value = this.parent.value;
	    function loopRecursive(i, recurse) {
	      if (i === -1 || i > 0) {
	        observer.onNext(value);
	        i > 0 && i--;
	      }
	      if (i === 0) { return observer.onCompleted(); }
	      recurse(i);
	    }
	
	    return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount, loopRecursive);
	  };
	
	  /**
	   *  Generates an observable sequence that repeats the given element the specified number of times, using the specified scheduler to send out observer messages.
	   * @param {Mixed} value Element to repeat.
	   * @param {Number} repeatCount [Optiona] Number of times to repeat the element. If not specified, repeats indefinitely.
	   * @param {Scheduler} scheduler Scheduler to run the producer loop on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} An observable sequence that repeats the given element the specified number of times.
	   */
	  Observable.repeat = function (value, repeatCount, scheduler) {
	    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
	    return new RepeatObservable(value, repeatCount, scheduler);
	  };
	
	  var JustObservable = (function(__super__) {
	    inherits(JustObservable, __super__);
	    function JustObservable(value, scheduler) {
	      this.value = value;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    JustObservable.prototype.subscribeCore = function (observer) {
	      var sink = new JustSink(observer, this.value, this.scheduler);
	      return sink.run();
	    };
	
	    function JustSink(observer, value, scheduler) {
	      this.observer = observer;
	      this.value = value;
	      this.scheduler = scheduler;
	    }
	
	    function scheduleItem(s, state) {
	      var value = state[0], observer = state[1];
	      observer.onNext(value);
	      observer.onCompleted();
	      return disposableEmpty;
	    }
	
	    JustSink.prototype.run = function () {
	      var state = [this.value, this.observer];
	      return this.scheduler === immediateScheduler ?
	        scheduleItem(null, state) :
	        this.scheduler.schedule(state, scheduleItem);
	    };
	
	    return JustObservable;
	  }(ObservableBase));
	
	  /**
	   *  Returns an observable sequence that contains a single element, using the specified scheduler to send out observer messages.
	   *  There is an alias called 'just' or browsers <IE9.
	   * @param {Mixed} value Single element in the resulting observable sequence.
	   * @param {Scheduler} scheduler Scheduler to send the single element on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} An observable sequence containing the single specified element.
	   */
	  var observableReturn = Observable['return'] = Observable.just = function (value, scheduler) {
	    isScheduler(scheduler) || (scheduler = immediateScheduler);
	    return new JustObservable(value, scheduler);
	  };
	
	  var ThrowObservable = (function(__super__) {
	    inherits(ThrowObservable, __super__);
	    function ThrowObservable(error, scheduler) {
	      this.error = error;
	      this.scheduler = scheduler;
	      __super__.call(this);
	    }
	
	    ThrowObservable.prototype.subscribeCore = function (o) {
	      var sink = new ThrowSink(o, this);
	      return sink.run();
	    };
	
	    function ThrowSink(o, p) {
	      this.o = o;
	      this.p = p;
	    }
	
	    function scheduleItem(s, state) {
	      var e = state[0], o = state[1];
	      o.onError(e);
	    }
	
	    ThrowSink.prototype.run = function () {
	      return this.p.scheduler.schedule([this.p.error, this.o], scheduleItem);
	    };
	
	    return ThrowObservable;
	  }(ObservableBase));
	
	  /**
	   *  Returns an observable sequence that terminates with an exception, using the specified scheduler to send out the single onError message.
	   *  There is an alias to this method called 'throwError' for browsers <IE9.
	   * @param {Mixed} error An object used for the sequence's termination.
	   * @param {Scheduler} scheduler Scheduler to send the exceptional termination call on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} The observable sequence that terminates exceptionally with the specified exception object.
	   */
	  var observableThrow = Observable['throw'] = function (error, scheduler) {
	    isScheduler(scheduler) || (scheduler = immediateScheduler);
	    return new ThrowObservable(error, scheduler);
	  };
	
	  var CatchObservable = (function (__super__) {
	    inherits(CatchObservable, __super__);
	    function CatchObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    CatchObservable.prototype.subscribeCore = function (o) {
	      var d1 = new SingleAssignmentDisposable(), subscription = new SerialDisposable();
	      subscription.setDisposable(d1);
	      d1.setDisposable(this.source.subscribe(new CatchObserver(o, subscription, this._fn)));
	      return subscription;
	    };
	
	    return CatchObservable;
	  }(ObservableBase));
	
	  var CatchObserver = (function(__super__) {
	    inherits(CatchObserver, __super__);
	    function CatchObserver(o, s, fn) {
	      this._o = o;
	      this._s = s;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    CatchObserver.prototype.next = function (x) { this._o.onNext(x); };
	    CatchObserver.prototype.completed = function () { return this._o.onCompleted(); };
	    CatchObserver.prototype.error = function (e) {
	      var result = tryCatch(this._fn)(e);
	      if (result === errorObj) { return this._o.onError(result.e); }
	      isPromise(result) && (result = observableFromPromise(result));
	
	      var d = new SingleAssignmentDisposable();
	      this._s.setDisposable(d);
	      d.setDisposable(result.subscribe(this._o));
	    };
	
	    return CatchObserver;
	  }(AbstractObserver));
	
	  /**
	   * Continues an observable sequence that is terminated by an exception with the next observable sequence.
	   * @param {Mixed} handlerOrSecond Exception handler function that returns an observable sequence given the error that occurred in the first sequence, or a second observable sequence used to produce results when an error occurred in the first sequence.
	   * @returns {Observable} An observable sequence containing the first sequence's elements, followed by the elements of the handler sequence in case an exception occurred.
	   */
	  observableProto['catch'] = function (handlerOrSecond) {
	    return isFunction(handlerOrSecond) ? new CatchObservable(this, handlerOrSecond) : observableCatch([this, handlerOrSecond]);
	  };
	
	  /**
	   * Continues an observable sequence that is terminated by an exception with the next observable sequence.
	   * @param {Array | Arguments} args Arguments or an array to use as the next sequence if an error occurs.
	   * @returns {Observable} An observable sequence containing elements from consecutive source sequences until a source sequence terminates successfully.
	   */
	  var observableCatch = Observable['catch'] = function () {
	    var items;
	    if (Array.isArray(arguments[0])) {
	      items = arguments[0];
	    } else {
	      var len = arguments.length;
	      items = new Array(len);
	      for(var i = 0; i < len; i++) { items[i] = arguments[i]; }
	    }
	    return enumerableOf(items).catchError();
	  };
	
	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
	   * This can be in the form of an argument list of observables or an array.
	   *
	   * @example
	   * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
	   * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */
	  observableProto.combineLatest = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    if (Array.isArray(args[0])) {
	      args[0].unshift(this);
	    } else {
	      args.unshift(this);
	    }
	    return combineLatest.apply(this, args);
	  };
	
	  function falseFactory() { return false; }
	  function argumentsToArray() {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return args;
	  }
	
	  var CombineLatestObservable = (function(__super__) {
	    inherits(CombineLatestObservable, __super__);
	    function CombineLatestObservable(params, cb) {
	      this._params = params;
	      this._cb = cb;
	      __super__.call(this);
	    }
	
	    CombineLatestObservable.prototype.subscribeCore = function(observer) {
	      var len = this._params.length,
	          subscriptions = new Array(len);
	
	      var state = {
	        hasValue: arrayInitialize(len, falseFactory),
	        hasValueAll: false,
	        isDone: arrayInitialize(len, falseFactory),
	        values: new Array(len)
	      };
	
	      for (var i = 0; i < len; i++) {
	        var source = this._params[i], sad = new SingleAssignmentDisposable();
	        subscriptions[i] = sad;
	        isPromise(source) && (source = observableFromPromise(source));
	        sad.setDisposable(source.subscribe(new CombineLatestObserver(observer, i, this._cb, state)));
	      }
	
	      return new NAryDisposable(subscriptions);
	    };
	
	    return CombineLatestObservable;
	  }(ObservableBase));
	
	  var CombineLatestObserver = (function (__super__) {
	    inherits(CombineLatestObserver, __super__);
	    function CombineLatestObserver(o, i, cb, state) {
	      this._o = o;
	      this._i = i;
	      this._cb = cb;
	      this._state = state;
	      __super__.call(this);
	    }
	
	    function notTheSame(i) {
	      return function (x, j) {
	        return j !== i;
	      };
	    }
	
	    CombineLatestObserver.prototype.next = function (x) {
	      this._state.values[this._i] = x;
	      this._state.hasValue[this._i] = true;
	      if (this._state.hasValueAll || (this._state.hasValueAll = this._state.hasValue.every(identity))) {
	        var res = tryCatch(this._cb).apply(null, this._state.values);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        this._o.onNext(res);
	      } else if (this._state.isDone.filter(notTheSame(this._i)).every(identity)) {
	        this._o.onCompleted();
	      }
	    };
	
	    CombineLatestObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    CombineLatestObserver.prototype.completed = function () {
	      this._state.isDone[this._i] = true;
	      this._state.isDone.every(identity) && this._o.onCompleted();
	    };
	
	    return CombineLatestObserver;
	  }(AbstractObserver));
	
	  /**
	  * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
	  *
	  * @example
	  * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
	  * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
	  * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	  */
	  var combineLatest = Observable.combineLatest = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	    Array.isArray(args[0]) && (args = args[0]);
	    return new CombineLatestObservable(args, resultSelector);
	  };
	
	  /**
	   * Concatenates all the observable sequences.  This takes in either an array or variable arguments to concatenate.
	   * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
	   */
	  observableProto.concat = function () {
	    for(var args = [], i = 0, len = arguments.length; i < len; i++) { args.push(arguments[i]); }
	    args.unshift(this);
	    return observableConcat.apply(null, args);
	  };
	
	  var ConcatObservable = (function(__super__) {
	    inherits(ConcatObservable, __super__);
	    function ConcatObservable(sources) {
	      this.sources = sources;
	      __super__.call(this);
	    }
	
	    ConcatObservable.prototype.subscribeCore = function(o) {
	      var sink = new ConcatSink(this.sources, o);
	      return sink.run();
	    };
	
	    function ConcatSink(sources, o) {
	      this.sources = sources;
	      this.o = o;
	    }
	    ConcatSink.prototype.run = function () {
	      var isDisposed, subscription = new SerialDisposable(), sources = this.sources, length = sources.length, o = this.o;
	      var cancelable = immediateScheduler.scheduleRecursive(0, function (i, self) {
	        if (isDisposed) { return; }
	        if (i === length) {
	          return o.onCompleted();
	        }
	
	        // Check if promise
	        var currentValue = sources[i];
	        isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
	
	        var d = new SingleAssignmentDisposable();
	        subscription.setDisposable(d);
	        d.setDisposable(currentValue.subscribe(
	          function (x) { o.onNext(x); },
	          function (e) { o.onError(e); },
	          function () { self(i + 1); }
	        ));
	      });
	
	      return new CompositeDisposable(subscription, cancelable, disposableCreate(function () {
	        isDisposed = true;
	      }));
	    };
	
	
	    return ConcatObservable;
	  }(ObservableBase));
	
	  /**
	   * Concatenates all the observable sequences.
	   * @param {Array | Arguments} args Arguments or an array to concat to the observable sequence.
	   * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
	   */
	  var observableConcat = Observable.concat = function () {
	    var args;
	    if (Array.isArray(arguments[0])) {
	      args = arguments[0];
	    } else {
	      args = new Array(arguments.length);
	      for(var i = 0, len = arguments.length; i < len; i++) { args[i] = arguments[i]; }
	    }
	    return new ConcatObservable(args);
	  };
	
	  /**
	   * Concatenates an observable sequence of observable sequences.
	   * @returns {Observable} An observable sequence that contains the elements of each observed inner sequence, in sequential order.
	   */
	  observableProto.concatAll = function () {
	    return this.merge(1);
	  };
	
	  var MergeObservable = (function (__super__) {
	    inherits(MergeObservable, __super__);
	
	    function MergeObservable(source, maxConcurrent) {
	      this.source = source;
	      this.maxConcurrent = maxConcurrent;
	      __super__.call(this);
	    }
	
	    MergeObservable.prototype.subscribeCore = function(observer) {
	      var g = new CompositeDisposable();
	      g.add(this.source.subscribe(new MergeObserver(observer, this.maxConcurrent, g)));
	      return g;
	    };
	
	    return MergeObservable;
	
	  }(ObservableBase));
	
	  var MergeObserver = (function () {
	    function MergeObserver(o, max, g) {
	      this.o = o;
	      this.max = max;
	      this.g = g;
	      this.done = false;
	      this.q = [];
	      this.activeCount = 0;
	      this.isStopped = false;
	    }
	    MergeObserver.prototype.handleSubscribe = function (xs) {
	      var sad = new SingleAssignmentDisposable();
	      this.g.add(sad);
	      isPromise(xs) && (xs = observableFromPromise(xs));
	      sad.setDisposable(xs.subscribe(new InnerObserver(this, sad)));
	    };
	    MergeObserver.prototype.onNext = function (innerSource) {
	      if (this.isStopped) { return; }
	        if(this.activeCount < this.max) {
	          this.activeCount++;
	          this.handleSubscribe(innerSource);
	        } else {
	          this.q.push(innerSource);
	        }
	      };
	      MergeObserver.prototype.onError = function (e) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.o.onError(e);
	        }
	      };
	      MergeObserver.prototype.onCompleted = function () {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.done = true;
	          this.activeCount === 0 && this.o.onCompleted();
	        }
	      };
	      MergeObserver.prototype.dispose = function() { this.isStopped = true; };
	      MergeObserver.prototype.fail = function (e) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.o.onError(e);
	          return true;
	        }
	
	        return false;
	      };
	
	      function InnerObserver(parent, sad) {
	        this.parent = parent;
	        this.sad = sad;
	        this.isStopped = false;
	      }
	      InnerObserver.prototype.onNext = function (x) { if(!this.isStopped) { this.parent.o.onNext(x); } };
	      InnerObserver.prototype.onError = function (e) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.parent.o.onError(e);
	        }
	      };
	      InnerObserver.prototype.onCompleted = function () {
	        if(!this.isStopped) {
	          this.isStopped = true;
	          var parent = this.parent;
	          parent.g.remove(this.sad);
	          if (parent.q.length > 0) {
	            parent.handleSubscribe(parent.q.shift());
	          } else {
	            parent.activeCount--;
	            parent.done && parent.activeCount === 0 && parent.o.onCompleted();
	          }
	        }
	      };
	      InnerObserver.prototype.dispose = function() { this.isStopped = true; };
	      InnerObserver.prototype.fail = function (e) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.parent.o.onError(e);
	          return true;
	        }
	
	        return false;
	      };
	
	      return MergeObserver;
	  }());
	
	
	
	
	
	  /**
	  * Merges an observable sequence of observable sequences into an observable sequence, limiting the number of concurrent subscriptions to inner sequences.
	  * Or merges two observable sequences into a single observable sequence.
	  *
	  * @example
	  * 1 - merged = sources.merge(1);
	  * 2 - merged = source.merge(otherSource);
	  * @param {Mixed} [maxConcurrentOrOther] Maximum number of inner observable sequences being subscribed to concurrently or the second observable sequence.
	  * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
	  */
	  observableProto.merge = function (maxConcurrentOrOther) {
	    return typeof maxConcurrentOrOther !== 'number' ?
	      observableMerge(this, maxConcurrentOrOther) :
	      new MergeObservable(this, maxConcurrentOrOther);
	  };
	
	  /**
	   * Merges all the observable sequences into a single observable sequence.
	   * The scheduler is optional and if not specified, the immediate scheduler is used.
	   * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
	   */
	  var observableMerge = Observable.merge = function () {
	    var scheduler, sources = [], i, len = arguments.length;
	    if (!arguments[0]) {
	      scheduler = immediateScheduler;
	      for(i = 1; i < len; i++) { sources.push(arguments[i]); }
	    } else if (isScheduler(arguments[0])) {
	      scheduler = arguments[0];
	      for(i = 1; i < len; i++) { sources.push(arguments[i]); }
	    } else {
	      scheduler = immediateScheduler;
	      for(i = 0; i < len; i++) { sources.push(arguments[i]); }
	    }
	    if (Array.isArray(sources[0])) {
	      sources = sources[0];
	    }
	    return observableOf(scheduler, sources).mergeAll();
	  };
	
	  var CompositeError = Rx.CompositeError = function(errors) {
	    this.innerErrors = errors;
	    this.message = 'This contains multiple errors. Check the innerErrors';
	    Error.call(this);
	  };
	  CompositeError.prototype = Object.create(Error.prototype);
	  CompositeError.prototype.name = 'CompositeError';
	
	  var MergeDelayErrorObservable = (function(__super__) {
	    inherits(MergeDelayErrorObservable, __super__);
	    function MergeDelayErrorObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    MergeDelayErrorObservable.prototype.subscribeCore = function (o) {
	      var group = new CompositeDisposable(),
	        m = new SingleAssignmentDisposable(),
	        state = { isStopped: false, errors: [], o: o };
	
	      group.add(m);
	      m.setDisposable(this.source.subscribe(new MergeDelayErrorObserver(group, state)));
	
	      return group;
	    };
	
	    return MergeDelayErrorObservable;
	  }(ObservableBase));
	
	  var MergeDelayErrorObserver = (function(__super__) {
	    inherits(MergeDelayErrorObserver, __super__);
	    function MergeDelayErrorObserver(group, state) {
	      this._group = group;
	      this._state = state;
	      __super__.call(this);
	    }
	
	    function setCompletion(o, errors) {
	      if (errors.length === 0) {
	        o.onCompleted();
	      } else if (errors.length === 1) {
	        o.onError(errors[0]);
	      } else {
	        o.onError(new CompositeError(errors));
	      }
	    }
	
	    MergeDelayErrorObserver.prototype.next = function (x) {
	      var inner = new SingleAssignmentDisposable();
	      this._group.add(inner);
	
	      // Check for promises support
	      isPromise(x) && (x = observableFromPromise(x));
	      inner.setDisposable(x.subscribe(new InnerObserver(inner, this._group, this._state)));
	    };
	
	    MergeDelayErrorObserver.prototype.error = function (e) {
	      this._state.errors.push(e);
	      this._state.isStopped = true;
	      this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };
	
	    MergeDelayErrorObserver.prototype.completed = function () {
	      this._state.isStopped = true;
	      this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };
	
	    inherits(InnerObserver, __super__);
	    function InnerObserver(inner, group, state) {
	      this._inner = inner;
	      this._group = group;
	      this._state = state;
	      __super__.call(this);
	    }
	
	    InnerObserver.prototype.next = function (x) { this._state.o.onNext(x); };
	    InnerObserver.prototype.error = function (e) {
	      this._state.errors.push(e);
	      this._group.remove(this._inner);
	      this._state.isStopped && this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };
	    InnerObserver.prototype.completed = function () {
	      this._group.remove(this._inner);
	      this._state.isStopped && this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
	    };
	
	    return MergeDelayErrorObserver;
	  }(AbstractObserver));
	
	  /**
	  * Flattens an Observable that emits Observables into one Observable, in a way that allows an Observer to
	  * receive all successfully emitted items from all of the source Observables without being interrupted by
	  * an error notification from one of them.
	  *
	  * This behaves like Observable.prototype.mergeAll except that if any of the merged Observables notify of an
	  * error via the Observer's onError, mergeDelayError will refrain from propagating that
	  * error notification until all of the merged Observables have finished emitting items.
	  * @param {Array | Arguments} args Arguments or an array to merge.
	  * @returns {Observable} an Observable that emits all of the items emitted by the Observables emitted by the Observable
	  */
	  Observable.mergeDelayError = function() {
	    var args;
	    if (Array.isArray(arguments[0])) {
	      args = arguments[0];
	    } else {
	      var len = arguments.length;
	      args = new Array(len);
	      for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    }
	    var source = observableOf(null, args);
	    return new MergeDelayErrorObservable(source);
	  };
	
	  var MergeAllObservable = (function (__super__) {
	    inherits(MergeAllObservable, __super__);
	
	    function MergeAllObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    MergeAllObservable.prototype.subscribeCore = function (observer) {
	      var g = new CompositeDisposable(), m = new SingleAssignmentDisposable();
	      g.add(m);
	      m.setDisposable(this.source.subscribe(new MergeAllObserver(observer, g)));
	      return g;
	    };
	
	    function MergeAllObserver(o, g) {
	      this.o = o;
	      this.g = g;
	      this.isStopped = false;
	      this.done = false;
	    }
	    MergeAllObserver.prototype.onNext = function(innerSource) {
	      if(this.isStopped) { return; }
	      var sad = new SingleAssignmentDisposable();
	      this.g.add(sad);
	
	      isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
	
	      sad.setDisposable(innerSource.subscribe(new InnerObserver(this, sad)));
	    };
	    MergeAllObserver.prototype.onError = function (e) {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.o.onError(e);
	      }
	    };
	    MergeAllObserver.prototype.onCompleted = function () {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.done = true;
	        this.g.length === 1 && this.o.onCompleted();
	      }
	    };
	    MergeAllObserver.prototype.dispose = function() { this.isStopped = true; };
	    MergeAllObserver.prototype.fail = function (e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.o.onError(e);
	        return true;
	      }
	
	      return false;
	    };
	
	    function InnerObserver(parent, sad) {
	      this.parent = parent;
	      this.sad = sad;
	      this.isStopped = false;
	    }
	    InnerObserver.prototype.onNext = function (x) { if (!this.isStopped) { this.parent.o.onNext(x); } };
	    InnerObserver.prototype.onError = function (e) {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.parent.o.onError(e);
	      }
	    };
	    InnerObserver.prototype.onCompleted = function () {
	      if(!this.isStopped) {
	        var parent = this.parent;
	        this.isStopped = true;
	        parent.g.remove(this.sad);
	        parent.done && parent.g.length === 1 && parent.o.onCompleted();
	      }
	    };
	    InnerObserver.prototype.dispose = function() { this.isStopped = true; };
	    InnerObserver.prototype.fail = function (e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.parent.o.onError(e);
	        return true;
	      }
	
	      return false;
	    };
	
	    return MergeAllObservable;
	  }(ObservableBase));
	
	  /**
	  * Merges an observable sequence of observable sequences into an observable sequence.
	  * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
	  */
	  observableProto.mergeAll = function () {
	    return new MergeAllObservable(this);
	  };
	
	  var SkipUntilObservable = (function(__super__) {
	    inherits(SkipUntilObservable, __super__);
	
	    function SkipUntilObservable(source, other) {
	      this._s = source;
	      this._o = isPromise(other) ? observableFromPromise(other) : other;
	      this._open = false;
	      __super__.call(this);
	    }
	
	    SkipUntilObservable.prototype.subscribeCore = function(o) {
	      var leftSubscription = new SingleAssignmentDisposable();
	      leftSubscription.setDisposable(this._s.subscribe(new SkipUntilSourceObserver(o, this)));
	
	      isPromise(this._o) && (this._o = observableFromPromise(this._o));
	
	      var rightSubscription = new SingleAssignmentDisposable();
	      rightSubscription.setDisposable(this._o.subscribe(new SkipUntilOtherObserver(o, this, rightSubscription)));
	
	      return new BinaryDisposable(leftSubscription, rightSubscription);
	    };
	
	    return SkipUntilObservable;
	  }(ObservableBase));
	
	  var SkipUntilSourceObserver = (function(__super__) {
	    inherits(SkipUntilSourceObserver, __super__);
	    function SkipUntilSourceObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      __super__.call(this);
	    }
	
	    SkipUntilSourceObserver.prototype.next = function (x) {
	      this._p._open && this._o.onNext(x);
	    };
	
	    SkipUntilSourceObserver.prototype.error = function (err) {
	      this._o.onError(err);
	    };
	
	    SkipUntilSourceObserver.prototype.onCompleted = function () {
	      this._p._open && this._o.onCompleted();
	    };
	
	    return SkipUntilSourceObserver;
	  }(AbstractObserver));
	
	  var SkipUntilOtherObserver = (function(__super__) {
	    inherits(SkipUntilOtherObserver, __super__);
	    function SkipUntilOtherObserver(o, p, r) {
	      this._o = o;
	      this._p = p;
	      this._r = r;
	      __super__.call(this);
	    }
	
	    SkipUntilOtherObserver.prototype.next = function () {
	      this._p._open = true;
	      this._r.dispose();
	    };
	
	    SkipUntilOtherObserver.prototype.error = function (err) {
	      this._o.onError(err);
	    };
	
	    SkipUntilOtherObserver.prototype.onCompleted = function () {
	      this._r.dispose();
	    };
	
	    return SkipUntilOtherObserver;
	  }(AbstractObserver));
	
	  /**
	   * Returns the values from the source observable sequence only after the other observable sequence produces a value.
	   * @param {Observable | Promise} other The observable sequence or Promise that triggers propagation of elements of the source sequence.
	   * @returns {Observable} An observable sequence containing the elements of the source sequence starting from the point the other sequence triggered propagation.
	   */
	  observableProto.skipUntil = function (other) {
	    return new SkipUntilObservable(this, other);
	  };
	
	  var SwitchObservable = (function(__super__) {
	    inherits(SwitchObservable, __super__);
	    function SwitchObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    SwitchObservable.prototype.subscribeCore = function (o) {
	      var inner = new SerialDisposable(), s = this.source.subscribe(new SwitchObserver(o, inner));
	      return new BinaryDisposable(s, inner);
	    };
	
	    inherits(SwitchObserver, AbstractObserver);
	    function SwitchObserver(o, inner) {
	      this.o = o;
	      this.inner = inner;
	      this.stopped = false;
	      this.latest = 0;
	      this.hasLatest = false;
	      AbstractObserver.call(this);
	    }
	
	    SwitchObserver.prototype.next = function (innerSource) {
	      var d = new SingleAssignmentDisposable(), id = ++this.latest;
	      this.hasLatest = true;
	      this.inner.setDisposable(d);
	      isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
	      d.setDisposable(innerSource.subscribe(new InnerObserver(this, id)));
	    };
	
	    SwitchObserver.prototype.error = function (e) {
	      this.o.onError(e);
	    };
	
	    SwitchObserver.prototype.completed = function () {
	      this.stopped = true;
	      !this.hasLatest && this.o.onCompleted();
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(parent, id) {
	      this.parent = parent;
	      this.id = id;
	      AbstractObserver.call(this);
	    }
	    InnerObserver.prototype.next = function (x) {
	      this.parent.latest === this.id && this.parent.o.onNext(x);
	    };
	
	    InnerObserver.prototype.error = function (e) {
	      this.parent.latest === this.id && this.parent.o.onError(e);
	    };
	
	    InnerObserver.prototype.completed = function () {
	      if (this.parent.latest === this.id) {
	        this.parent.hasLatest = false;
	        this.parent.isStopped && this.parent.o.onCompleted();
	      }
	    };
	
	    return SwitchObservable;
	  }(ObservableBase));
	
	  /**
	  * Transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
	  * @returns {Observable} The observable sequence that at any point in time produces the elements of the most recent inner observable sequence that has been received.
	  */
	  observableProto['switch'] = observableProto.switchLatest = function () {
	    return new SwitchObservable(this);
	  };
	
	  var TakeUntilObservable = (function(__super__) {
	    inherits(TakeUntilObservable, __super__);
	
	    function TakeUntilObservable(source, other) {
	      this.source = source;
	      this.other = isPromise(other) ? observableFromPromise(other) : other;
	      __super__.call(this);
	    }
	
	    TakeUntilObservable.prototype.subscribeCore = function(o) {
	      return new BinaryDisposable(
	        this.source.subscribe(o),
	        this.other.subscribe(new TakeUntilObserver(o))
	      );
	    };
	
	    return TakeUntilObservable;
	  }(ObservableBase));
	
	  var TakeUntilObserver = (function(__super__) {
	    inherits(TakeUntilObserver, __super__);
	    function TakeUntilObserver(o) {
	      this._o = o;
	      __super__.call(this);
	    }
	
	    TakeUntilObserver.prototype.next = function () {
	      this._o.onCompleted();
	    };
	
	    TakeUntilObserver.prototype.error = function (err) {
	      this._o.onError(err);
	    };
	
	    TakeUntilObserver.prototype.onCompleted = noop;
	
	    return TakeUntilObserver;
	  }(AbstractObserver));
	
	  /**
	   * Returns the values from the source observable sequence until the other observable sequence produces a value.
	   * @param {Observable | Promise} other Observable sequence or Promise that terminates propagation of elements of the source sequence.
	   * @returns {Observable} An observable sequence containing the elements of the source sequence up to the point the other sequence interrupted further propagation.
	   */
	  observableProto.takeUntil = function (other) {
	    return new TakeUntilObservable(this, other);
	  };
	
	  function falseFactory() { return false; }
	  function argumentsToArray() {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return args;
	  }
	
	  var WithLatestFromObservable = (function(__super__) {
	    inherits(WithLatestFromObservable, __super__);
	    function WithLatestFromObservable(source, sources, resultSelector) {
	      this._s = source;
	      this._ss = sources;
	      this._cb = resultSelector;
	      __super__.call(this);
	    }
	
	    WithLatestFromObservable.prototype.subscribeCore = function (o) {
	      var len = this._ss.length;
	      var state = {
	        hasValue: arrayInitialize(len, falseFactory),
	        hasValueAll: false,
	        values: new Array(len)
	      };
	
	      var n = this._ss.length, subscriptions = new Array(n + 1);
	      for (var i = 0; i < n; i++) {
	        var other = this._ss[i], sad = new SingleAssignmentDisposable();
	        isPromise(other) && (other = observableFromPromise(other));
	        sad.setDisposable(other.subscribe(new WithLatestFromOtherObserver(o, i, state)));
	        subscriptions[i] = sad;
	      }
	
	      var sad = new SingleAssignmentDisposable();
	      sad.setDisposable(this._s.subscribe(new WithLatestFromSourceObserver(o, this._cb, state)));
	      subscriptions[n] = sad;
	
	      return new NAryDisposable(subscriptions);
	    };
	
	    return WithLatestFromObservable;
	  }(ObservableBase));
	
	  var WithLatestFromOtherObserver = (function (__super__) {
	    inherits(WithLatestFromOtherObserver, __super__);
	    function WithLatestFromOtherObserver(o, i, state) {
	      this._o = o;
	      this._i = i;
	      this._state = state;
	      __super__.call(this);
	    }
	
	    WithLatestFromOtherObserver.prototype.next = function (x) {
	      this._state.values[this._i] = x;
	      this._state.hasValue[this._i] = true;
	      this._state.hasValueAll = this._state.hasValue.every(identity);
	    };
	
	    WithLatestFromOtherObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    WithLatestFromOtherObserver.prototype.completed = noop;
	
	    return WithLatestFromOtherObserver;
	  }(AbstractObserver));
	
	  var WithLatestFromSourceObserver = (function (__super__) {
	    inherits(WithLatestFromSourceObserver, __super__);
	    function WithLatestFromSourceObserver(o, cb, state) {
	      this._o = o;
	      this._cb = cb;
	      this._state = state;
	      __super__.call(this);
	    }
	
	    WithLatestFromSourceObserver.prototype.next = function (x) {
	      var allValues = [x].concat(this._state.values);
	      if (!this._state.hasValueAll) { return; }
	      var res = tryCatch(this._cb).apply(null, allValues);
	      if (res === errorObj) { return this._o.onError(res.e); }
	      this._o.onNext(res);
	    };
	
	    WithLatestFromSourceObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    WithLatestFromSourceObserver.prototype.completed = function () {
	      this._o.onCompleted();
	    };
	
	    return WithLatestFromSourceObserver;
	  }(AbstractObserver));
	
	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */
	  observableProto.withLatestFrom = function () {
	    if (arguments.length === 0) { throw new Error('invalid arguments'); }
	
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	    Array.isArray(args[0]) && (args = args[0]);
	
	    return new WithLatestFromObservable(this, args, resultSelector);
	  };
	
	  function falseFactory() { return false; }
	  function emptyArrayFactory() { return []; }
	
	  var ZipObservable = (function(__super__) {
	    inherits(ZipObservable, __super__);
	    function ZipObservable(sources, resultSelector) {
	      this._s = sources;
	      this._cb = resultSelector;
	      __super__.call(this);
	    }
	
	    ZipObservable.prototype.subscribeCore = function(observer) {
	      var n = this._s.length,
	          subscriptions = new Array(n);
	          done = arrayInitialize(n, falseFactory),
	          q = arrayInitialize(n, emptyArrayFactory);
	
	      for (var i = 0; i < n; i++) {
	        var source = this._s[i], sad = new SingleAssignmentDisposable();
	        subscriptions[i] = sad;
	        isPromise(source) && (source = observableFromPromise(source));
	        sad.setDisposable(source.subscribe(new ZipObserver(observer, i, this, q, done)));
	      }
	
	      return new NAryDisposable(subscriptions);
	    };
	
	    return ZipObservable;
	  }(ObservableBase));
	
	  var ZipObserver = (function (__super__) {
	    inherits(ZipObserver, __super__);
	    function ZipObserver(o, i, p, q, d) {
	      this._o = o;
	      this._i = i;
	      this._p = p;
	      this._q = q;
	      this._d = d;
	      __super__.call(this);
	    }
	
	    function notEmpty(x) { return x.length > 0; }
	    function shiftEach(x) { return x.shift(); }
	    function notTheSame(i) {
	      return function (x, j) {
	        return j !== i;
	      };
	    }
	
	    ZipObserver.prototype.next = function (x) {
	      this._q[this._i].push(x);
	      if (this._q.every(notEmpty)) {
	        var queuedValues = this._q.map(shiftEach);
	        var res = tryCatch(this._p._cb).apply(null, queuedValues);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        this._o.onNext(res);
	      } else if (this._d.filter(notTheSame(this._i)).every(identity)) {
	        this._o.onCompleted();
	      }
	    };
	
	    ZipObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    ZipObserver.prototype.completed = function () {
	      this._d[this._i] = true;
	      this._d.every(identity) && this._o.onCompleted();
	    };
	
	    return ZipObserver;
	  }(AbstractObserver));
	
	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
	   * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
	   */
	  observableProto.zip = function () {
	    if (arguments.length === 0) { throw new Error('invalid arguments'); }
	
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	    Array.isArray(args[0]) && (args = args[0]);
	
	    var parent = this;
	    args.unshift(parent);
	
	    return new ZipObservable(args, resultSelector);
	  };
	
	  /**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
	   * @param arguments Observable sources.
	   * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */
	  Observable.zip = function () {
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    if (Array.isArray(args[0])) {
	      args = isFunction(args[1]) ? args[0].concat(args[1]) : args[0];
	    }
	    var first = args.shift();
	    return first.zip.apply(first, args);
	  };
	
	function falseFactory() { return false; }
	function emptyArrayFactory() { return []; }
	function argumentsToArray() {
	  var len = arguments.length, args = new Array(len);
	  for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	  return args;
	}
	
	/**
	 * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
	 * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
	 * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
	 */
	observableProto.zipIterable = function () {
	  if (arguments.length === 0) { throw new Error('invalid arguments'); }
	
	  var len = arguments.length, args = new Array(len);
	  for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	  var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
	
	  var parent = this;
	  args.unshift(parent);
	  return new AnonymousObservable(function (o) {
	    var n = args.length,
	      queues = arrayInitialize(n, emptyArrayFactory),
	      isDone = arrayInitialize(n, falseFactory);
	
	    var subscriptions = new Array(n);
	    for (var idx = 0; idx < n; idx++) {
	      (function (i) {
	        var source = args[i], sad = new SingleAssignmentDisposable();
	
	        (isArrayLike(source) || isIterable(source)) && (source = observableFrom(source));
	
	        sad.setDisposable(source.subscribe(function (x) {
	          queues[i].push(x);
	          if (queues.every(function (x) { return x.length > 0; })) {
	            var queuedValues = queues.map(function (x) { return x.shift(); }),
	                res = tryCatch(resultSelector).apply(parent, queuedValues);
	            if (res === errorObj) { return o.onError(res.e); }
	            o.onNext(res);
	          } else if (isDone.filter(function (x, j) { return j !== i; }).every(identity)) {
	            o.onCompleted();
	          }
	        }, function (e) { o.onError(e); }, function () {
	          isDone[i] = true;
	          isDone.every(identity) && o.onCompleted();
	        }));
	        subscriptions[i] = sad;
	      })(idx);
	    }
	
	    return new CompositeDisposable(subscriptions);
	  }, parent);
	};
	
	  function asObservable(source) {
	    return function subscribe(o) { return source.subscribe(o); };
	  }
	
	  /**
	   *  Hides the identity of an observable sequence.
	   * @returns {Observable} An observable sequence that hides the identity of the source sequence.
	   */
	  observableProto.asObservable = function () {
	    return new AnonymousObservable(asObservable(this), this);
	  };
	
	  var DematerializeObservable = (function (__super__) {
	    inherits(DematerializeObservable, __super__);
	    function DematerializeObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    DematerializeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new DematerializeObserver(o));
	    };
	
	    return DematerializeObservable;
	  }(ObservableBase));
	
	  var DematerializeObserver = (function (__super__) {
	    inherits(DematerializeObserver, __super__);
	
	    function DematerializeObserver(o) {
	      this._o = o;
	      __super__.call(this);
	    }
	
	    DematerializeObserver.prototype.next = function (x) { x.accept(this._o); };
	    DematerializeObserver.prototype.error = function (e) { this._o.onError(e); };
	    DematerializeObserver.prototype.completed = function () { this._o.onCompleted(); };
	
	    return DematerializeObserver;
	  }(AbstractObserver));
	
	  /**
	   * Dematerializes the explicit notification values of an observable sequence as implicit notifications.
	   * @returns {Observable} An observable sequence exhibiting the behavior corresponding to the source sequence's notification values.
	   */
	  observableProto.dematerialize = function () {
	    return new DematerializeObservable(this);
	  };
	
	  var DistinctUntilChangedObservable = (function(__super__) {
	    inherits(DistinctUntilChangedObservable, __super__);
	    function DistinctUntilChangedObservable(source, keyFn, comparer) {
	      this.source = source;
	      this.keyFn = keyFn;
	      this.comparer = comparer;
	      __super__.call(this);
	    }
	
	    DistinctUntilChangedObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new DistinctUntilChangedObserver(o, this.keyFn, this.comparer));
	    };
	
	    return DistinctUntilChangedObservable;
	  }(ObservableBase));
	
	  var DistinctUntilChangedObserver = (function(__super__) {
	    inherits(DistinctUntilChangedObserver, __super__);
	    function DistinctUntilChangedObserver(o, keyFn, comparer) {
	      this.o = o;
	      this.keyFn = keyFn;
	      this.comparer = comparer;
	      this.hasCurrentKey = false;
	      this.currentKey = null;
	      __super__.call(this);
	    }
	
	    DistinctUntilChangedObserver.prototype.next = function (x) {
	      var key = x, comparerEquals;
	      if (isFunction(this.keyFn)) {
	        key = tryCatch(this.keyFn)(x);
	        if (key === errorObj) { return this.o.onError(key.e); }
	      }
	      if (this.hasCurrentKey) {
	        comparerEquals = tryCatch(this.comparer)(this.currentKey, key);
	        if (comparerEquals === errorObj) { return this.o.onError(comparerEquals.e); }
	      }
	      if (!this.hasCurrentKey || !comparerEquals) {
	        this.hasCurrentKey = true;
	        this.currentKey = key;
	        this.o.onNext(x);
	      }
	    };
	    DistinctUntilChangedObserver.prototype.error = function(e) {
	      this.o.onError(e);
	    };
	    DistinctUntilChangedObserver.prototype.completed = function () {
	      this.o.onCompleted();
	    };
	
	    return DistinctUntilChangedObserver;
	  }(AbstractObserver));
	
	  /**
	  *  Returns an observable sequence that contains only distinct contiguous elements according to the keyFn and the comparer.
	  * @param {Function} [keyFn] A function to compute the comparison key for each element. If not provided, it projects the value.
	  * @param {Function} [comparer] Equality comparer for computed key values. If not provided, defaults to an equality comparer function.
	  * @returns {Observable} An observable sequence only containing the distinct contiguous elements, based on a computed key value, from the source sequence.
	  */
	  observableProto.distinctUntilChanged = function (keyFn, comparer) {
	    comparer || (comparer = defaultComparer);
	    return new DistinctUntilChangedObservable(this, keyFn, comparer);
	  };
	
	  var TapObservable = (function(__super__) {
	    inherits(TapObservable,__super__);
	    function TapObservable(source, observerOrOnNext, onError, onCompleted) {
	      this.source = source;
	      this._oN = observerOrOnNext;
	      this._oE = onError;
	      this._oC = onCompleted;
	      __super__.call(this);
	    }
	
	    TapObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new InnerObserver(o, this));
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, p) {
	      this.o = o;
	      this.t = !p._oN || isFunction(p._oN) ?
	        observerCreate(p._oN || noop, p._oE || noop, p._oC || noop) :
	        p._oN;
	      this.isStopped = false;
	      AbstractObserver.call(this);
	    }
	    InnerObserver.prototype.next = function(x) {
	      var res = tryCatch(this.t.onNext).call(this.t, x);
	      if (res === errorObj) { this.o.onError(res.e); }
	      this.o.onNext(x);
	    };
	    InnerObserver.prototype.error = function(err) {
	      var res = tryCatch(this.t.onError).call(this.t, err);
	      if (res === errorObj) { return this.o.onError(res.e); }
	      this.o.onError(err);
	    };
	    InnerObserver.prototype.completed = function() {
	      var res = tryCatch(this.t.onCompleted).call(this.t);
	      if (res === errorObj) { return this.o.onError(res.e); }
	      this.o.onCompleted();
	    };
	
	    return TapObservable;
	  }(ObservableBase));
	
	  /**
	  *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an o.
	  * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
	  * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto['do'] = observableProto.tap = observableProto.doAction = function (observerOrOnNext, onError, onCompleted) {
	    return new TapObservable(this, observerOrOnNext, onError, onCompleted);
	  };
	
	  /**
	  *  Invokes an action for each element in the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onNext Action to invoke for each element in the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto.doOnNext = observableProto.tapOnNext = function (onNext, thisArg) {
	    return this.tap(typeof thisArg !== 'undefined' ? function (x) { onNext.call(thisArg, x); } : onNext);
	  };
	
	  /**
	  *  Invokes an action upon exceptional termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onError Action to invoke upon exceptional termination of the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto.doOnError = observableProto.tapOnError = function (onError, thisArg) {
	    return this.tap(noop, typeof thisArg !== 'undefined' ? function (e) { onError.call(thisArg, e); } : onError);
	  };
	
	  /**
	  *  Invokes an action upon graceful termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onCompleted Action to invoke upon graceful termination of the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */
	  observableProto.doOnCompleted = observableProto.tapOnCompleted = function (onCompleted, thisArg) {
	    return this.tap(noop, null, typeof thisArg !== 'undefined' ? function () { onCompleted.call(thisArg); } : onCompleted);
	  };
	
	  /**
	   *  Invokes a specified action after the source observable sequence terminates gracefully or exceptionally.
	   * @param {Function} finallyAction Action to invoke after the source observable sequence terminates.
	   * @returns {Observable} Source sequence with the action-invoking termination behavior applied.
	   */
	  observableProto['finally'] = function (action) {
	    var source = this;
	    return new AnonymousObservable(function (observer) {
	      var subscription = tryCatch(source.subscribe).call(source, observer);
	      if (subscription === errorObj) {
	        action();
	        return thrower(subscription.e);
	      }
	      return disposableCreate(function () {
	        var r = tryCatch(subscription.dispose).call(subscription);
	        action();
	        r === errorObj && thrower(r.e);
	      });
	    }, this);
	  };
	
	  var IgnoreElementsObservable = (function(__super__) {
	    inherits(IgnoreElementsObservable, __super__);
	
	    function IgnoreElementsObservable(source) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    IgnoreElementsObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o));
	    };
	
	    function InnerObserver(o) {
	      this.o = o;
	      this.isStopped = false;
	    }
	    InnerObserver.prototype.onNext = noop;
	    InnerObserver.prototype.onError = function (err) {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.o.onError(err);
	      }
	    };
	    InnerObserver.prototype.onCompleted = function () {
	      if(!this.isStopped) {
	        this.isStopped = true;
	        this.o.onCompleted();
	      }
	    };
	    InnerObserver.prototype.dispose = function() { this.isStopped = true; };
	    InnerObserver.prototype.fail = function (e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.observer.onError(e);
	        return true;
	      }
	
	      return false;
	    };
	
	    return IgnoreElementsObservable;
	  }(ObservableBase));
	
	  /**
	   *  Ignores all elements in an observable sequence leaving only the termination messages.
	   * @returns {Observable} An empty observable sequence that signals termination, successful or exceptional, of the source sequence.
	   */
	  observableProto.ignoreElements = function () {
	    return new IgnoreElementsObservable(this);
	  };
	
	  var MaterializeObservable = (function (__super__) {
	    inherits(MaterializeObservable, __super__);
	    function MaterializeObservable(source, fn) {
	      this.source = source;
	      __super__.call(this);
	    }
	
	    MaterializeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new MaterializeObserver(o));
	    };
	
	    return MaterializeObservable;
	  }(ObservableBase));
	
	  var MaterializeObserver = (function (__super__) {
	    inherits(MaterializeObserver, __super__);
	
	    function MaterializeObserver(o) {
	      this._o = o;
	      __super__.call(this);
	    }
	
	    MaterializeObserver.prototype.next = function (x) { this._o.onNext(notificationCreateOnNext(x)) };
	    MaterializeObserver.prototype.error = function (e) { this._o.onNext(notificationCreateOnError(e)); this._o.onCompleted(); };
	    MaterializeObserver.prototype.completed = function () { this._o.onNext(notificationCreateOnCompleted()); this._o.onCompleted(); };
	
	    return MaterializeObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Materializes the implicit notifications of an observable sequence as explicit notification values.
	   * @returns {Observable} An observable sequence containing the materialized notification values from the source sequence.
	   */
	  observableProto.materialize = function () {
	    return new MaterializeObservable(this);
	  };
	
	  /**
	   *  Repeats the observable sequence a specified number of times. If the repeat count is not specified, the sequence repeats indefinitely.
	   * @param {Number} [repeatCount]  Number of times to repeat the sequence. If not provided, repeats the sequence indefinitely.
	   * @returns {Observable} The observable sequence producing the elements of the given sequence repeatedly.
	   */
	  observableProto.repeat = function (repeatCount) {
	    return enumerableRepeat(this, repeatCount).concat();
	  };
	
	  /**
	   *  Repeats the source observable sequence the specified number of times or until it successfully terminates. If the retry count is not specified, it retries indefinitely.
	   *  Note if you encounter an error and want it to retry once, then you must use .retry(2);
	   *
	   * @example
	   *  var res = retried = retry.repeat();
	   *  var res = retried = retry.repeat(2);
	   * @param {Number} [retryCount]  Number of times to retry the sequence. If not provided, retry the sequence indefinitely.
	   * @returns {Observable} An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully.
	   */
	  observableProto.retry = function (retryCount) {
	    return enumerableRepeat(this, retryCount).catchError();
	  };
	
	  /**
	   *  Repeats the source observable sequence upon error each time the notifier emits or until it successfully terminates. 
	   *  if the notifier completes, the observable sequence completes.
	   *
	   * @example
	   *  var timer = Observable.timer(500);
	   *  var source = observable.retryWhen(timer);
	   * @param {Observable} [notifier] An observable that triggers the retries or completes the observable with onNext or onCompleted respectively.
	   * @returns {Observable} An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully.
	   */
	  observableProto.retryWhen = function (notifier) {
	    return enumerableRepeat(this).catchErrorWhen(notifier);
	  };
	  var ScanObservable = (function(__super__) {
	    inherits(ScanObservable, __super__);
	    function ScanObservable(source, accumulator, hasSeed, seed) {
	      this.source = source;
	      this.accumulator = accumulator;
	      this.hasSeed = hasSeed;
	      this.seed = seed;
	      __super__.call(this);
	    }
	
	    ScanObservable.prototype.subscribeCore = function(o) {
	      return this.source.subscribe(new ScanObserver(o,this));
	    };
	
	    return ScanObservable;
	  }(ObservableBase));
	
	  var ScanObserver = (function (__super__) {
	    inherits(ScanObserver, __super__);
	    function ScanObserver(o, parent) {
	      this._o = o;
	      this._p = parent;
	      this._fn = parent.accumulator;
	      this._hs = parent.hasSeed;
	      this._s = parent.seed;
	      this._ha = false;
	      this._a = null;
	      this._hv = false;
	      this._i = 0;
	      __super__.call(this);
	    }
	
	    ScanObserver.prototype.next = function (x) {
	      !this._hv && (this._hv = true);
	      if (this._ha) {
	        this._a = tryCatch(this._fn)(this._a, x, this._i, this._p);
	      } else {
	        this._a = this._hs ? tryCatch(this._fn)(this._s, x, this._i, this._p) : x;
	        this._ha = true;
	      }
	      if (this._a === errorObj) { return this._o.onError(this._a.e); }
	      this._o.onNext(this._a);
	      this._i++;
	    };
	
	    ScanObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    ScanObserver.prototype.completed = function () {
	      !this._hv && this._hs && this._o.onNext(this._s);
	      this._o.onCompleted();
	    };
	
	    return ScanObserver;
	  }(AbstractObserver));
	
	  /**
	  *  Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.
	  *  For aggregation behavior with no intermediate results, see Observable.aggregate.
	  * @param {Mixed} [seed] The initial accumulator value.
	  * @param {Function} accumulator An accumulator function to be invoked on each element.
	  * @returns {Observable} An observable sequence containing the accumulated values.
	  */
	  observableProto.scan = function () {
	    var hasSeed = false, seed, accumulator = arguments[0];
	    if (arguments.length === 2) {
	      hasSeed = true;
	      seed = arguments[1];
	    }
	    return new ScanObservable(this, accumulator, hasSeed, seed);
	  };
	
	  var SkipLastObservable = (function (__super__) {
	    inherits(SkipLastObservable, __super__);
	    function SkipLastObservable(source, c) {
	      this.source = source;
	      this._c = c;
	      __super__.call(this);
	    }
	
	    SkipLastObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SkipLastObserver(o, this._c));
	    };
	
	    return SkipLastObservable;
	  }(ObservableBase));
	
	  var SkipLastObserver = (function (__super__) {
	    inherits(SkipLastObserver, __super__);
	    function SkipLastObserver(o, c) {
	      this._o = o;
	      this._c = c;
	      this._q = [];
	      __super__.call(this);
	    }
	
	    SkipLastObserver.prototype.next = function (x) {
	      this._q.push(x);
	      this._q.length > this._c && this._o.onNext(this._q.shift());
	    };
	
	    SkipLastObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    SkipLastObserver.prototype.completed = function () {
	      this._o.onCompleted();
	    };
	
	    return SkipLastObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Bypasses a specified number of elements at the end of an observable sequence.
	   * @description
	   *  This operator accumulates a queue with a length enough to store the first `count` elements. As more elements are
	   *  received, elements are taken from the front of the queue and produced on the result sequence. This causes elements to be delayed.
	   * @param count Number of elements to bypass at the end of the source sequence.
	   * @returns {Observable} An observable sequence containing the source sequence elements except for the bypassed ones at the end.
	   */
	  observableProto.skipLast = function (count) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    return new SkipLastObservable(this, count);
	  };
	
	  /**
	   *  Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.
	   *  @example
	   *  var res = source.startWith(1, 2, 3);
	   *  var res = source.startWith(Rx.Scheduler.timeout, 1, 2, 3);
	   * @param {Arguments} args The specified values to prepend to the observable sequence
	   * @returns {Observable} The source sequence prepended with the specified values.
	   */
	  observableProto.startWith = function () {
	    var values, scheduler, start = 0;
	    if (!!arguments.length && isScheduler(arguments[0])) {
	      scheduler = arguments[0];
	      start = 1;
	    } else {
	      scheduler = immediateScheduler;
	    }
	    for(var args = [], i = start, len = arguments.length; i < len; i++) { args.push(arguments[i]); }
	    return enumerableOf([observableFromArray(args, scheduler), this]).concat();
	  };
	
	  var TakeLastObserver = (function (__super__) {
	    inherits(TakeLastObserver, __super__);
	    function TakeLastObserver(o, c) {
	      this._o = o;
	      this._c = c;
	      this._q = [];
	      __super__.call(this);
	    }
	
	    TakeLastObserver.prototype.next = function (x) {
	      this._q.push(x);
	      this._q.length > this._c && this._q.shift();
	    };
	
	    TakeLastObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    TakeLastObserver.prototype.completed = function () {
	      while (this._q.length > 0) { this._o.onNext(this._q.shift()); }
	      this._o.onCompleted();
	    };
	
	    return TakeLastObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Returns a specified number of contiguous elements from the end of an observable sequence.
	   * @description
	   *  This operator accumulates a buffer with a length enough to store elements count elements. Upon completion of
	   *  the source sequence, this buffer is drained on the result sequence. This causes the elements to be delayed.
	   * @param {Number} count Number of elements to take from the end of the source sequence.
	   * @returns {Observable} An observable sequence containing the specified number of elements from the end of the source sequence.
	   */
	  observableProto.takeLast = function (count) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    var source = this;
	    return new AnonymousObservable(function (o) {
	      return source.subscribe(new TakeLastObserver(o, count));
	    }, source);
	  };
	
	observableProto.flatMapConcat = observableProto.concatMap = function(selector, resultSelector, thisArg) {
	    return new FlatMapObservable(this, selector, resultSelector, thisArg).merge(1);
	};
	  var MapObservable = (function (__super__) {
	    inherits(MapObservable, __super__);
	
	    function MapObservable(source, selector, thisArg) {
	      this.source = source;
	      this.selector = bindCallback(selector, thisArg, 3);
	      __super__.call(this);
	    }
	
	    function innerMap(selector, self) {
	      return function (x, i, o) { return selector.call(this, self.selector(x, i, o), i, o); }
	    }
	
	    MapObservable.prototype.internalMap = function (selector, thisArg) {
	      return new MapObservable(this.source, innerMap(selector, this), thisArg);
	    };
	
	    MapObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o, this.selector, this));
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, selector, source) {
	      this.o = o;
	      this.selector = selector;
	      this.source = source;
	      this.i = 0;
	      AbstractObserver.call(this);
	    }
	
	    InnerObserver.prototype.next = function(x) {
	      var result = tryCatch(this.selector)(x, this.i++, this.source);
	      if (result === errorObj) { return this.o.onError(result.e); }
	      this.o.onNext(result);
	    };
	
	    InnerObserver.prototype.error = function (e) {
	      this.o.onError(e);
	    };
	
	    InnerObserver.prototype.completed = function () {
	      this.o.onCompleted();
	    };
	
	    return MapObservable;
	
	  }(ObservableBase));
	
	  /**
	  * Projects each element of an observable sequence into a new form by incorporating the element's index.
	  * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source.
	  */
	  observableProto.map = observableProto.select = function (selector, thisArg) {
	    var selectorFn = typeof selector === 'function' ? selector : function () { return selector; };
	    return this instanceof MapObservable ?
	      this.internalMap(selectorFn, thisArg) :
	      new MapObservable(this, selectorFn, thisArg);
	  };
	
	  function plucker(args, len) {
	    return function mapper(x) {
	      var currentProp = x;
	      for (var i = 0; i < len; i++) {
	        var p = currentProp[args[i]];
	        if (typeof p !== 'undefined') {
	          currentProp = p;
	        } else {
	          return undefined;
	        }
	      }
	      return currentProp;
	    }
	  }
	
	  /**
	   * Retrieves the value of a specified nested property from all elements in
	   * the Observable sequence.
	   * @param {Arguments} arguments The nested properties to pluck.
	   * @returns {Observable} Returns a new Observable sequence of property values.
	   */
	  observableProto.pluck = function () {
	    var len = arguments.length, args = new Array(len);
	    if (len === 0) { throw new Error('List of properties cannot be empty.'); }
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return this.map(plucker(args, len));
	  };
	
	observableProto.flatMap = observableProto.selectMany = function(selector, resultSelector, thisArg) {
	    return new FlatMapObservable(this, selector, resultSelector, thisArg).mergeAll();
	};
	
	
	//
	//Rx.Observable.prototype.flatMapWithMaxConcurrent = function(limit, selector, resultSelector, thisArg) {
	//    return new FlatMapObservable(this, selector, resultSelector, thisArg).merge(limit);
	//};
	//
	
	Rx.Observable.prototype.flatMapLatest = function(selector, resultSelector, thisArg) {
	    return new FlatMapObservable(this, selector, resultSelector, thisArg).switchLatest();
	};
	  var SkipObservable = (function(__super__) {
	    inherits(SkipObservable, __super__);
	    function SkipObservable(source, count) {
	      this.source = source;
	      this.skipCount = count;
	      __super__.call(this);
	    }
	    
	    SkipObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o, this.skipCount));
	    };
	    
	    function InnerObserver(o, c) {
	      this.c = c;
	      this.r = c;
	      this.o = o;
	      this.isStopped = false;
	    }
	    InnerObserver.prototype.onNext = function (x) {
	      if (this.isStopped) { return; }
	      if (this.r <= 0) { 
	        this.o.onNext(x);
	      } else {
	        this.r--;
	      }
	    };
	    InnerObserver.prototype.onError = function(e) {
	      if (!this.isStopped) { this.isStopped = true; this.o.onError(e); }
	    };
	    InnerObserver.prototype.onCompleted = function() {
	      if (!this.isStopped) { this.isStopped = true; this.o.onCompleted(); }
	    };
	    InnerObserver.prototype.dispose = function() { this.isStopped = true; };
	    InnerObserver.prototype.fail = function(e) {
	      if (!this.isStopped) {
	        this.isStopped = true;
	        this.o.onError(e);
	        return true;
	      }
	      return false;
	    };
	    
	    return SkipObservable;
	  }(ObservableBase));  
	  
	  /**
	   * Bypasses a specified number of elements in an observable sequence and then returns the remaining elements.
	   * @param {Number} count The number of elements to skip before returning the remaining elements.
	   * @returns {Observable} An observable sequence that contains the elements that occur after the specified index in the input sequence.
	   */
	  observableProto.skip = function (count) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    return new SkipObservable(this, count);
	  };
	  var SkipWhileObservable = (function (__super__) {
	    inherits(SkipWhileObservable, __super__);
	    function SkipWhileObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    SkipWhileObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new SkipWhileObserver(o, this));
	    };
	
	    return SkipWhileObservable;
	  }(ObservableBase));
	
	  var SkipWhileObserver = (function (__super__) {
	    inherits(SkipWhileObserver, __super__);
	
	    function SkipWhileObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      this._i = 0;
	      this._r = false;
	      __super__.call(this);
	    }
	
	    SkipWhileObserver.prototype.next = function (x) {
	      if (!this._r) {
	        var res = tryCatch(this._p._fn)(x, this._i++, this._p);
	        if (res === errorObj) { return this._o.onError(res.e); }
	        this._r = !res;
	      }
	      this._r && this._o.onNext(x);
	    };
	    SkipWhileObserver.prototype.error = function (e) { this._o.onError(e); };
	    SkipWhileObserver.prototype.completed = function () { this._o.onCompleted(); };
	
	    return SkipWhileObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Bypasses elements in an observable sequence as long as a specified condition is true and then returns the remaining elements.
	   *  The element's index is used in the logic of the predicate function.
	   *
	   *  var res = source.skipWhile(function (value) { return value < 10; });
	   *  var res = source.skipWhile(function (value, index) { return value < 10 || index < 10; });
	   * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence that contains the elements from the input sequence starting at the first element in the linear series that does not pass the test specified by predicate.
	   */
	  observableProto.skipWhile = function (predicate, thisArg) {
	    var fn = bindCallback(predicate, thisArg, 3);
	    return new SkipWhileObservable(this, fn);
	  };
	
	  var TakeObservable = (function(__super__) {
	    inherits(TakeObservable, __super__);
	    
	    function TakeObservable(source, count) {
	      this.source = source;
	      this.takeCount = count;
	      __super__.call(this);
	    }
	    
	    TakeObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o, this.takeCount));
	    };
	    
	    function InnerObserver(o, c) {
	      this.o = o;
	      this.c = c;
	      this.r = c;
	      this.isStopped = false;
	    }
	    InnerObserver.prototype = {
	      onNext: function (x) {
	        if (this.isStopped) { return; }
	        if (this.r-- > 0) {
	          this.o.onNext(x);
	          this.r <= 0 && this.o.onCompleted();
	        }
	      },
	      onError: function (err) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.o.onError(err);
	        }
	      },
	      onCompleted: function () {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.o.onCompleted();
	        }
	      },
	      dispose: function () { this.isStopped = true; },
	      fail: function (e) {
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.o.onError(e);
	          return true;
	        }
	        return false;
	      }
	    };
	    
	    return TakeObservable;
	  }(ObservableBase));  
	  
	  /**
	   *  Returns a specified number of contiguous elements from the start of an observable sequence, using the specified scheduler for the edge case of take(0).
	   * @param {Number} count The number of elements to return.
	   * @param {Scheduler} [scheduler] Scheduler used to produce an OnCompleted message in case <paramref name="count count</paramref> is set to 0.
	   * @returns {Observable} An observable sequence that contains the specified number of elements from the start of the input sequence.
	   */
	  observableProto.take = function (count, scheduler) {
	    if (count < 0) { throw new ArgumentOutOfRangeError(); }
	    if (count === 0) { return observableEmpty(scheduler); }
	    return new TakeObservable(this, count);
	  };
	
	  var TakeWhileObservable = (function (__super__) {
	    inherits(TakeWhileObservable, __super__);
	    function TakeWhileObservable(source, fn) {
	      this.source = source;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    TakeWhileObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new TakeWhileObserver(o, this));
	    };
	
	    return TakeWhileObservable;
	  }(ObservableBase));
	
	  var TakeWhileObserver = (function (__super__) {
	    inherits(TakeWhileObserver, __super__);
	
	    function TakeWhileObserver(o, p) {
	      this._o = o;
	      this._p = p;
	      this._i = 0;
	      this._r = true;
	      __super__.call(this);
	    }
	
	    TakeWhileObserver.prototype.next = function (x) {
	      if (this._r) {
	        this._r = tryCatch(this._p._fn)(x, this._i++, this._p);
	        if (this._r === errorObj) { return this._o.onError(this._r.e); }
	      }
	      if (this._r) {
	        this._o.onNext(x);
	      } else {
	        this._o.onCompleted();
	      }
	    };
	    TakeWhileObserver.prototype.error = function (e) { this._o.onError(e); };
	    TakeWhileObserver.prototype.completed = function () { this._o.onCompleted(); };
	
	    return TakeWhileObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Returns elements from an observable sequence as long as a specified condition is true.
	   *  The element's index is used in the logic of the predicate function.
	   * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence that contains the elements from the input sequence that occur before the element at which the test no longer passes.
	   */
	  observableProto.takeWhile = function (predicate, thisArg) {
	    var fn = bindCallback(predicate, thisArg, 3);
	    return new TakeWhileObservable(this, fn);
	  };
	
	  var FilterObservable = (function (__super__) {
	    inherits(FilterObservable, __super__);
	
	    function FilterObservable(source, predicate, thisArg) {
	      this.source = source;
	      this.predicate = bindCallback(predicate, thisArg, 3);
	      __super__.call(this);
	    }
	
	    FilterObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new InnerObserver(o, this.predicate, this));
	    };
	
	    function innerPredicate(predicate, self) {
	      return function(x, i, o) { return self.predicate(x, i, o) && predicate.call(this, x, i, o); }
	    }
	
	    FilterObservable.prototype.internalFilter = function(predicate, thisArg) {
	      return new FilterObservable(this.source, innerPredicate(predicate, this), thisArg);
	    };
	
	    inherits(InnerObserver, AbstractObserver);
	    function InnerObserver(o, predicate, source) {
	      this.o = o;
	      this.predicate = predicate;
	      this.source = source;
	      this.i = 0;
	      AbstractObserver.call(this);
	    }
	
	    InnerObserver.prototype.next = function(x) {
	      var shouldYield = tryCatch(this.predicate)(x, this.i++, this.source);
	      if (shouldYield === errorObj) {
	        return this.o.onError(shouldYield.e);
	      }
	      shouldYield && this.o.onNext(x);
	    };
	
	    InnerObserver.prototype.error = function (e) {
	      this.o.onError(e);
	    };
	
	    InnerObserver.prototype.completed = function () {
	      this.o.onCompleted();
	    };
	
	    return FilterObservable;
	
	  }(ObservableBase));
	
	  /**
	  *  Filters the elements of an observable sequence based on a predicate by incorporating the element's index.
	  * @param {Function} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} An observable sequence that contains elements from the input sequence that satisfy the condition.
	  */
	  observableProto.filter = observableProto.where = function (predicate, thisArg) {
	    return this instanceof FilterObservable ? this.internalFilter(predicate, thisArg) :
	      new FilterObservable(this, predicate, thisArg);
	  };
	
	function createCbObservable(fn, ctx, selector, args) {
	  var o = new AsyncSubject();
	
	  args.push(createCbHandler(o, ctx, selector));
	  fn.apply(ctx, args);
	
	  return o.asObservable();
	}
	
	function createCbHandler(o, ctx, selector) {
	  return function handler () {
	    var len = arguments.length, results = new Array(len);
	    for(var i = 0; i < len; i++) { results[i] = arguments[i]; }
	
	    if (isFunction(selector)) {
	      results = tryCatch(selector).apply(ctx, results);
	      if (results === errorObj) { return o.onError(results.e); }
	      o.onNext(results);
	    } else {
	      if (results.length <= 1) {
	        o.onNext(results[0]);
	      } else {
	        o.onNext(results);
	      }
	    }
	
	    o.onCompleted();
	  };
	}
	
	/**
	 * Converts a callback function to an observable sequence.
	 *
	 * @param {Function} fn Function with a callback as the last parameter to convert to an Observable sequence.
	 * @param {Mixed} [ctx] The context for the func parameter to be executed.  If not specified, defaults to undefined.
	 * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
	 * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
	 */
	Observable.fromCallback = function (fn, ctx, selector) {
	  return function () {
	    typeof ctx === 'undefined' && (ctx = this); 
	
	    var len = arguments.length, args = new Array(len)
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return createCbObservable(fn, ctx, selector, args);
	  };
	};
	
	function createNodeObservable(fn, ctx, selector, args) {
	  var o = new AsyncSubject();
	
	  args.push(createNodeHandler(o, ctx, selector));
	  fn.apply(ctx, args);
	
	  return o.asObservable();
	}
	
	function createNodeHandler(o, ctx, selector) {
	  return function handler () {
	    var err = arguments[0];
	    if (err) { return o.onError(err); }
	
	    var len = arguments.length, results = [];
	    for(var i = 1; i < len; i++) { results[i - 1] = arguments[i]; }
	
	    if (isFunction(selector)) {
	      var results = tryCatch(selector).apply(ctx, results);
	      if (results === errorObj) { return o.onError(results.e); }
	      o.onNext(results);
	    } else {
	      if (results.length <= 1) {
	        o.onNext(results[0]);
	      } else {
	        o.onNext(results);
	      }
	    }
	
	    o.onCompleted();
	  };
	}
	
	/**
	 * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
	 * @param {Function} fn The function to call
	 * @param {Mixed} [ctx] The context for the func parameter to be executed.  If not specified, defaults to undefined.
	 * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
	 * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
	 */
	Observable.fromNodeCallback = function (fn, ctx, selector) {
	  return function () {
	    typeof ctx === 'undefined' && (ctx = this); 
	    var len = arguments.length, args = new Array(len);
	    for(var i = 0; i < len; i++) { args[i] = arguments[i]; }
	    return createNodeObservable(fn, ctx, selector, args);
	  };
	};
	
	  function isNodeList(el) {
	    if (root.StaticNodeList) {
	      // IE8 Specific
	      // instanceof is slower than Object#toString, but Object#toString will not work as intended in IE8
	      return el instanceof root.StaticNodeList || el instanceof root.NodeList;
	    } else {
	      return Object.prototype.toString.call(el) === '[object NodeList]';
	    }
	  }
	
	  function ListenDisposable(e, n, fn) {
	    this._e = e;
	    this._n = n;
	    this._fn = fn;
	    this._e.addEventListener(this._n, this._fn, false);
	    this.isDisposed = false;
	  }
	  ListenDisposable.prototype.dispose = function () {
	    if (!this.isDisposed) {
	      this._e.removeEventListener(this._n, this._fn, false);
	      this.isDisposed = true;
	    }
	  };
	
	  function createEventListener (el, eventName, handler) {
	    var disposables = new CompositeDisposable();
	
	    // Asume NodeList or HTMLCollection
	    var elemToString = Object.prototype.toString.call(el);
	    if (isNodeList(el) || elemToString === '[object HTMLCollection]') {
	      for (var i = 0, len = el.length; i < len; i++) {
	        disposables.add(createEventListener(el.item(i), eventName, handler));
	      }
	    } else if (el) {
	      disposables.add(new ListenDisposable(el, eventName, handler));
	    }
	
	    return disposables;
	  }
	
	  /**
	   * Configuration option to determine whether to use native events only
	   */
	  Rx.config.useNativeEvents = false;
	
	  var EventObservable = (function(__super__) {
	    inherits(EventObservable, __super__);
	    function EventObservable(el, name, fn) {
	      this._el = el;
	      this._n = name;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    function createHandler(o, fn) {
	      return function handler () {
	        var results = arguments[0];
	        if (isFunction(fn)) {
	          results = tryCatch(fn).apply(null, arguments);
	          if (results === errorObj) { return o.onError(results.e); }
	        }
	        o.onNext(results);
	      };
	    }
	
	    EventObservable.prototype.subscribeCore = function (o) {
	      return createEventListener(
	        this._el,
	        this._n,
	        createHandler(o, this._fn));
	    };
	
	    return EventObservable;
	  }(ObservableBase));
	
	  /**
	   * Creates an observable sequence by adding an event listener to the matching DOMElement or each item in the NodeList.
	   * @param {Object} element The DOMElement or NodeList to attach a listener.
	   * @param {String} eventName The event name to attach the observable sequence.
	   * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
	   * @returns {Observable} An observable sequence of events from the specified element and the specified event.
	   */
	  Observable.fromEvent = function (element, eventName, selector) {
	    // Node.js specific
	    if (element.addListener) {
	      return fromEventPattern(
	        function (h) { element.addListener(eventName, h); },
	        function (h) { element.removeListener(eventName, h); },
	        selector);
	    }
	
	    // Use only if non-native events are allowed
	    if (!Rx.config.useNativeEvents) {
	      // Handles jq, Angular.js, Zepto, Marionette, Ember.js
	      if (typeof element.on === 'function' && typeof element.off === 'function') {
	        return fromEventPattern(
	          function (h) { element.on(eventName, h); },
	          function (h) { element.off(eventName, h); },
	          selector);
	      }
	    }
	
	    return new EventObservable(element, eventName, selector).publish().refCount();
	  };
	
	  var EventPatternObservable = (function(__super__) {
	    inherits(EventPatternObservable, __super__);
	    function EventPatternObservable(add, del, fn) {
	      this._add = add;
	      this._del = del;
	      this._fn = fn;
	      __super__.call(this);
	    }
	
	    function createHandler(o, fn) {
	      return function handler () {
	        var results = arguments[0];
	        if (isFunction(fn)) {
	          results = tryCatch(fn).apply(null, arguments);
	          if (results === errorObj) { return o.onError(results.e); }
	        }
	        o.onNext(results);
	      };
	    }
	
	    EventPatternObservable.prototype.subscribeCore = function (o) {
	      var fn = createHandler(o, this._fn);
	      var returnValue = this._add(fn);
	      return new EventPatternDisposable(this._del, fn, returnValue);
	    };
	
	    function EventPatternDisposable(del, fn, ret) {
	      this._del = del;
	      this._fn = fn;
	      this._ret = ret;
	      this.isDisposed = false;
	    }
	
	    EventPatternDisposable.prototype.dispose = function () {
	      if(!this.isDisposed) {
	        isFunction(this._del) && this._del(this._fn, this._ret);
	      }
	    };
	
	    return EventPatternObservable;
	  }(ObservableBase));
	
	  /**
	   * Creates an observable sequence from an event emitter via an addHandler/removeHandler pair.
	   * @param {Function} addHandler The function to add a handler to the emitter.
	   * @param {Function} [removeHandler] The optional function to remove a handler from an emitter.
	   * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
	   * @returns {Observable} An observable sequence which wraps an event from an event emitter
	   */
	  var fromEventPattern = Observable.fromEventPattern = function (addHandler, removeHandler, selector) {
	    return new EventPatternObservable(addHandler, removeHandler, selector).publish().refCount();
	  };
	
	  var FromPromiseObservable = (function(__super__) {
	    inherits(FromPromiseObservable, __super__);
	    function FromPromiseObservable(p, s) {
	      this._p = p;
	      this._s = s;
	      __super__.call(this);
	    }
	
	    function scheduleNext(s, state) {
	      var o = state[0], data = state[1];
	      o.onNext(data);
	      o.onCompleted();
	    }
	
	    function scheduleError(s, state) {
	      var o = state[0], err = state[1];
	      o.onError(err);
	    }
	
	    FromPromiseObservable.prototype.subscribeCore = function(o) {
	      var sad = new SingleAssignmentDisposable(), self = this;
	
	      this._p
	        .then(function (data) {
	          sad.setDisposable(self._s.schedule([o, data], scheduleNext));
	        }, function (err) {
	          sad.setDisposable(self._s.schedule([o, err], scheduleError));
	        });
	
	      return sad;
	    };
	
	    return FromPromiseObservable;
	  }(ObservableBase));
	
	  /**
	  * Converts a Promise to an Observable sequence
	  * @param {Promise} An ES6 Compliant promise.
	  * @returns {Observable} An Observable sequence which wraps the existing promise success and failure.
	  */
	  var observableFromPromise = Observable.fromPromise = function (promise, scheduler) {
	    scheduler || (scheduler = defaultScheduler);
	    return new FromPromiseObservable(promise, scheduler);
	  };
	
	  /*
	   * Converts an existing observable sequence to an ES6 Compatible Promise
	   * @example
	   * var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
	   *
	   * // With config
	   * Rx.config.Promise = RSVP.Promise;
	   * var promise = Rx.Observable.return(42).toPromise();
	   * @param {Function} [promiseCtor] The constructor of the promise. If not provided, it looks for it in Rx.config.Promise.
	   * @returns {Promise} An ES6 compatible promise with the last value from the observable sequence.
	   */
	  observableProto.toPromise = function (promiseCtor) {
	    promiseCtor || (promiseCtor = Rx.config.Promise);
	    if (!promiseCtor) { throw new NotSupportedError('Promise type not provided nor in Rx.config.Promise'); }
	    var source = this;
	    return new promiseCtor(function (resolve, reject) {
	      // No cancellation can be done
	      var value;
	      source.subscribe(function (v) {
	        value = v;
	      }, reject, function () {
	        resolve(value);
	      });
	    });
	  };
	
	  /**
	   * Invokes the asynchronous function, surfacing the result through an observable sequence.
	   * @param {Function} functionAsync Asynchronous function which returns a Promise to run.
	   * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
	   */
	  Observable.startAsync = function (functionAsync) {
	    var promise = tryCatch(functionAsync)();
	    if (promise === errorObj) { return observableThrow(promise.e); }
	    return observableFromPromise(promise);
	  };
	
	  var MulticastObservable = (function (__super__) {
	    inherits(MulticastObservable, __super__);
	    function MulticastObservable(source, fn1, fn2) {
	      this.source = source;
	      this._fn1 = fn1;
	      this._fn2 = fn2;
	      __super__.call(this);
	    }
	
	    MulticastObservable.prototype.subscribeCore = function (o) {
	      var connectable = this.source.multicast(this._fn1());
	      return new BinaryDisposable(this._fn2(connectable).subscribe(o), connectable.connect());
	    };
	
	    return MulticastObservable;
	  }(ObservableBase));
	
	  /**
	   * Multicasts the source sequence notifications through an instantiated subject into all uses of the sequence within a selector function. Each
	   * subscription to the resulting sequence causes a separate multicast invocation, exposing the sequence resulting from the selector function's
	   * invocation. For specializations with fixed subject types, see Publish, PublishLast, and Replay.
	   *
	   * @example
	   * 1 - res = source.multicast(observable);
	   * 2 - res = source.multicast(function () { return new Subject(); }, function (x) { return x; });
	   *
	   * @param {Function|Subject} subjectOrSubjectSelector
	   * Factory function to create an intermediate subject through which the source sequence's elements will be multicast to the selector function.
	   * Or:
	   * Subject to push source elements into.
	   *
	   * @param {Function} [selector] Optional selector function which can use the multicasted source sequence subject to the policies enforced by the created subject. Specified only if <paramref name="subjectOrSubjectSelector" is a factory function.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.multicast = function (subjectOrSubjectSelector, selector) {
	    return isFunction(subjectOrSubjectSelector) ?
	      new MulticastObservable(this, subjectOrSubjectSelector, selector) :
	      new ConnectableObservable(this, subjectOrSubjectSelector);
	  };
	
	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence.
	   * This operator is a specialization of Multicast using a regular Subject.
	   *
	   * @example
	   * var resres = source.publish();
	   * var res = source.publish(function (x) { return x; });
	   *
	   * @param {Function} [selector] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.publish = function (selector) {
	    return selector && isFunction(selector) ?
	      this.multicast(function () { return new Subject(); }, selector) :
	      this.multicast(new Subject());
	  };
	
	  /**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence.
	   * This operator is a specialization of publish which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */
	  observableProto.share = function () {
	    return this.publish().refCount();
	  };
	
	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence containing only the last notification.
	   * This operator is a specialization of Multicast using a AsyncSubject.
	   *
	   * @example
	   * var res = source.publishLast();
	   * var res = source.publishLast(function (x) { return x; });
	   *
	   * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will only receive the last notification of the source.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.publishLast = function (selector) {
	    return selector && isFunction(selector) ?
	      this.multicast(function () { return new AsyncSubject(); }, selector) :
	      this.multicast(new AsyncSubject());
	  };
	
	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
	   * This operator is a specialization of Multicast using a BehaviorSubject.
	   *
	   * @example
	   * var res = source.publishValue(42);
	   * var res = source.publishValue(function (x) { return x.select(function (y) { return y * y; }) }, 42);
	   *
	   * @param {Function} [selector] Optional selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive immediately receive the initial value, followed by all notifications of the source from the time of the subscription on.
	   * @param {Mixed} initialValue Initial value received by observers upon subscription.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.publishValue = function (initialValueOrSelector, initialValue) {
	    return arguments.length === 2 ?
	      this.multicast(function () {
	        return new BehaviorSubject(initialValue);
	      }, initialValueOrSelector) :
	      this.multicast(new BehaviorSubject(initialValueOrSelector));
	  };
	
	  /**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence and starts with an initialValue.
	   * This operator is a specialization of publishValue which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   * @param {Mixed} initialValue Initial value received by observers upon subscription.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */
	  observableProto.shareValue = function (initialValue) {
	    return this.publishValue(initialValue).refCount();
	  };
	
	  /**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
	   * This operator is a specialization of Multicast using a ReplaySubject.
	   *
	   * @example
	   * var res = source.replay(null, 3);
	   * var res = source.replay(null, 3, 500);
	   * var res = source.replay(null, 3, 500, scheduler);
	   * var res = source.replay(function (x) { return x.take(6).repeat(); }, 3, 500, scheduler);
	   *
	   * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all the notifications of the source subject to the specified replay buffer trimming policy.
	   * @param bufferSize [Optional] Maximum element count of the replay buffer.
	   * @param windowSize [Optional] Maximum time length of the replay buffer.
	   * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */
	  observableProto.replay = function (selector, bufferSize, windowSize, scheduler) {
	    return selector && isFunction(selector) ?
	      this.multicast(function () { return new ReplaySubject(bufferSize, windowSize, scheduler); }, selector) :
	      this.multicast(new ReplaySubject(bufferSize, windowSize, scheduler));
	  };
	
	  /**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
	   * This operator is a specialization of replay which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   *
	   * @example
	   * var res = source.shareReplay(3);
	   * var res = source.shareReplay(3, 500);
	   * var res = source.shareReplay(3, 500, scheduler);
	   *
	
	   * @param bufferSize [Optional] Maximum element count of the replay buffer.
	   * @param window [Optional] Maximum time length of the replay buffer.
	   * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */
	  observableProto.shareReplay = function (bufferSize, windowSize, scheduler) {
	    return this.replay(null, bufferSize, windowSize, scheduler).refCount();
	  };
	
	  var RefCountObservable = (function (__super__) {
	    inherits(RefCountObservable, __super__);
	    function RefCountObservable(source) {
	      this.source = source;
	      this._count = 0;
	      this._connectableSubscription = null;
	      __super__.call(this);
	    }
	
	    RefCountObservable.prototype.subscribeCore = function (o) {
	      var shouldConnect = ++this._count === 1, subscription = this.source.subscribe(o);
	      shouldConnect && (this._connectableSubscription = this.source.connect());
	      return new RefCountDisposable(this, subscription);
	    };
	
	    function RefCountDisposable(p, s) {
	      this._p = p;
	      this._s = s;
	      this.isDisposed = false;
	    }
	
	    RefCountDisposable.prototype.dispose = function () {
	      if (!this.isDisposed) {
	        this.isDisposed = true;
	        this._s.dispose();
	        --this._p._count === 0 && this._p._connectableSubscription.dispose();
	      }
	    };
	
	    return RefCountObservable;
	  }(ObservableBase));
	
	  var ConnectableObservable = Rx.ConnectableObservable = (function (__super__) {
	    inherits(ConnectableObservable, __super__);
	    function ConnectableObservable(source, subject) {
	      this.source = source;
	      this._hasSubscription  = false;
	      this._subscription = null;
	      this._sourceObservable = source.asObservable();
	      this._subject = subject;
	      __super__.call(this);
	    }
	
	    function ConnectDisposable(parent) {
	      this._p = parent;
	      this.isDisposed = false;
	    }
	
	    ConnectDisposable.prototype.dispose = function () {
	      if (!this.isDisposed) {
	        this.isDisposed = true;
	        this._p._hasSubscription = false;
	      }
	    };
	
	    ConnectableObservable.prototype.connect = function () {
	      if (!this._hasSubscription) {
	        this._hasSubscription = true;
	        this._subscription = new BinaryDisposable(
	          this._sourceObservable.subscribe(this._subject),
	          new ConnectDisposable(this)
	        );
	      }
	      return this._subscription;
	    };
	
	    ConnectableObservable.prototype._subscribe = function (o) {
	      return this._subject.subscribe(o);
	    };
	
	    ConnectableObservable.prototype.refCount = function () {
	      return new RefCountObservable(this);
	    };
	
	    return ConnectableObservable;
	  }(Observable));
	
	  var TimerObservable = (function(__super__) {
	    inherits(TimerObservable, __super__);
	    function TimerObservable(dt, s) {
	      this._dt = dt;
	      this._s = s;
	      __super__.call(this);
	    }
	
	    TimerObservable.prototype.subscribeCore = function (o) {
	      return this._s.scheduleFuture(o, this._dt, scheduleMethod);
	    };
	
	    function scheduleMethod(s, o) {
	      o.onNext(0);
	      o.onCompleted();
	    }
	
	    return TimerObservable;
	  }(ObservableBase));
	
	  function _observableTimer(dueTime, scheduler) {
	    return new TimerObservable(dueTime, scheduler);
	  }
	
	  function observableTimerDateAndPeriod(dueTime, period, scheduler) {
	    return new AnonymousObservable(function (observer) {
	      var d = dueTime, p = normalizeTime(period);
	      return scheduler.scheduleRecursiveFuture(0, d, function (count, self) {
	        if (p > 0) {
	          var now = scheduler.now();
	          d = new Date(d.getTime() + p);
	          d.getTime() <= now && (d = new Date(now + p));
	        }
	        observer.onNext(count);
	        self(count + 1, new Date(d));
	      });
	    });
	  }
	
	  function observableTimerTimeSpanAndPeriod(dueTime, period, scheduler) {
	    return dueTime === period ?
	      new AnonymousObservable(function (observer) {
	        return scheduler.schedulePeriodic(0, period, function (count) {
	          observer.onNext(count);
	          return count + 1;
	        });
	      }) :
	      observableDefer(function () {
	        return observableTimerDateAndPeriod(new Date(scheduler.now() + dueTime), period, scheduler);
	      });
	  }
	
	  /**
	   *  Returns an observable sequence that produces a value after each period.
	   *
	   * @example
	   *  1 - res = Rx.Observable.interval(1000);
	   *  2 - res = Rx.Observable.interval(1000, Rx.Scheduler.timeout);
	   *
	   * @param {Number} period Period for producing the values in the resulting sequence (specified as an integer denoting milliseconds).
	   * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, Rx.Scheduler.timeout is used.
	   * @returns {Observable} An observable sequence that produces a value after each period.
	   */
	  var observableinterval = Observable.interval = function (period, scheduler) {
	    return observableTimerTimeSpanAndPeriod(period, period, isScheduler(scheduler) ? scheduler : defaultScheduler);
	  };
	
	  /**
	   *  Returns an observable sequence that produces a value after dueTime has elapsed and then after each period.
	   * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) at which to produce the first value.
	   * @param {Mixed} [periodOrScheduler]  Period to produce subsequent values (specified as an integer denoting milliseconds), or the scheduler to run the timer on. If not specified, the resulting timer is not recurring.
	   * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence that produces a value after due time has elapsed and then each period.
	   */
	  var observableTimer = Observable.timer = function (dueTime, periodOrScheduler, scheduler) {
	    var period;
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    if (periodOrScheduler != null && typeof periodOrScheduler === 'number') {
	      period = periodOrScheduler;
	    } else if (isScheduler(periodOrScheduler)) {
	      scheduler = periodOrScheduler;
	    }
	    if ((dueTime instanceof Date || typeof dueTime === 'number') && period === undefined) {
	      return _observableTimer(dueTime, scheduler);
	    }
	    if (dueTime instanceof Date && period !== undefined) {
	      return observableTimerDateAndPeriod(dueTime.getTime(), periodOrScheduler, scheduler);
	    }
	    return observableTimerTimeSpanAndPeriod(dueTime, period, scheduler);
	  };
	
	  function observableDelayRelative(source, dueTime, scheduler) {
	    return new AnonymousObservable(function (o) {
	      var active = false,
	        cancelable = new SerialDisposable(),
	        exception = null,
	        q = [],
	        running = false,
	        subscription;
	      subscription = source.materialize().timestamp(scheduler).subscribe(function (notification) {
	        var d, shouldRun;
	        if (notification.value.kind === 'E') {
	          q = [];
	          q.push(notification);
	          exception = notification.value.error;
	          shouldRun = !running;
	        } else {
	          q.push({ value: notification.value, timestamp: notification.timestamp + dueTime });
	          shouldRun = !active;
	          active = true;
	        }
	        if (shouldRun) {
	          if (exception !== null) {
	            o.onError(exception);
	          } else {
	            d = new SingleAssignmentDisposable();
	            cancelable.setDisposable(d);
	            d.setDisposable(scheduler.scheduleRecursiveFuture(null, dueTime, function (_, self) {
	              var e, recurseDueTime, result, shouldRecurse;
	              if (exception !== null) {
	                return;
	              }
	              running = true;
	              do {
	                result = null;
	                if (q.length > 0 && q[0].timestamp - scheduler.now() <= 0) {
	                  result = q.shift().value;
	                }
	                if (result !== null) {
	                  result.accept(o);
	                }
	              } while (result !== null);
	              shouldRecurse = false;
	              recurseDueTime = 0;
	              if (q.length > 0) {
	                shouldRecurse = true;
	                recurseDueTime = Math.max(0, q[0].timestamp - scheduler.now());
	              } else {
	                active = false;
	              }
	              e = exception;
	              running = false;
	              if (e !== null) {
	                o.onError(e);
	              } else if (shouldRecurse) {
	                self(null, recurseDueTime);
	              }
	            }));
	          }
	        }
	      });
	      return new BinaryDisposable(subscription, cancelable);
	    }, source);
	  }
	
	  function observableDelayAbsolute(source, dueTime, scheduler) {
	    return observableDefer(function () {
	      return observableDelayRelative(source, dueTime - scheduler.now(), scheduler);
	    });
	  }
	
	  function delayWithSelector(source, subscriptionDelay, delayDurationSelector) {
	    var subDelay, selector;
	    if (isFunction(subscriptionDelay)) {
	      selector = subscriptionDelay;
	    } else {
	      subDelay = subscriptionDelay;
	      selector = delayDurationSelector;
	    }
	    return new AnonymousObservable(function (o) {
	      var delays = new CompositeDisposable(), atEnd = false, subscription = new SerialDisposable();
	
	      function start() {
	        subscription.setDisposable(source.subscribe(
	          function (x) {
	            var delay = tryCatch(selector)(x);
	            if (delay === errorObj) { return o.onError(delay.e); }
	            var d = new SingleAssignmentDisposable();
	            delays.add(d);
	            d.setDisposable(delay.subscribe(
	              function () {
	                o.onNext(x);
	                delays.remove(d);
	                done();
	              },
	              function (e) { o.onError(e); },
	              function () {
	                o.onNext(x);
	                delays.remove(d);
	                done();
	              }
	            ));
	          },
	          function (e) { o.onError(e); },
	          function () {
	            atEnd = true;
	            subscription.dispose();
	            done();
	          }
	        ));
	      }
	
	      function done () {
	        atEnd && delays.length === 0 && o.onCompleted();
	      }
	
	      if (!subDelay) {
	        start();
	      } else {
	        subscription.setDisposable(subDelay.subscribe(start, function (e) { o.onError(e); }, start));
	      }
	
	      return new BinaryDisposable(subscription, delays);
	    }, this);
	  }
	
	  /**
	   *  Time shifts the observable sequence by dueTime.
	   *  The relative time intervals between the values are preserved.
	   *
	   * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
	   * @param {Scheduler} [scheduler] Scheduler to run the delay timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} Time-shifted sequence.
	   */
	  observableProto.delay = function () {
	    var firstArg = arguments[0];
	    if (typeof firstArg === 'number' || firstArg instanceof Date) {
	      var dueTime = firstArg, scheduler = arguments[1];
	      isScheduler(scheduler) || (scheduler = defaultScheduler);
	      return dueTime instanceof Date ?
	        observableDelayAbsolute(this, dueTime, scheduler) :
	        observableDelayRelative(this, dueTime, scheduler);
	    } else if (Observable.isObservable(firstArg) || isFunction(firstArg)) {
	      return delayWithSelector(this, firstArg, arguments[1]);
	    } else {
	      throw new Error('Invalid arguments');
	    }
	  };
	
	  var DebounceObservable = (function (__super__) {
	    inherits(DebounceObservable, __super__);
	    function DebounceObservable(source, dt, s) {
	      isScheduler(s) || (s = defaultScheduler);
	      this.source = source;
	      this._dt = dt;
	      this._s = s;
	      __super__.call(this);
	    }
	
	    DebounceObservable.prototype.subscribeCore = function (o) {
	      var cancelable = new SerialDisposable();
	      return new BinaryDisposable(
	        this.source.subscribe(new DebounceObserver(o, this.source, this._dt, this._s, cancelable)),
	        cancelable);
	    };
	
	    return DebounceObservable;
	  }(ObservableBase));
	
	  var DebounceObserver = (function (__super__) {
	    inherits(DebounceObserver, __super__);
	    function DebounceObserver(observer, source, dueTime, scheduler, cancelable) {
	      this._o = observer;
	      this._s = source;
	      this._d = dueTime;
	      this._scheduler = scheduler;
	      this._c = cancelable;
	      this._v = null;
	      this._hv = false;
	      this._id = 0;
	      __super__.call(this);
	    }
	
	    DebounceObserver.prototype.next = function (x) {
	      this._hv = true;
	      this._v = x;
	      var currentId = ++this._id, d = new SingleAssignmentDisposable();
	      this._c.setDisposable(d);
	      d.setDisposable(this._scheduler.scheduleFuture(this, this._d, function (_, self) {
	        self._hv && self._id === currentId && self._o.onNext(x);
	        self._hv = false;
	      }));
	    };
	
	    DebounceObserver.prototype.error = function (e) {
	      this._c.dispose();
	      this._o.onError(e);
	      this._hv = false;
	      this._id++;
	    };
	
	    DebounceObserver.prototype.completed = function () {
	      this._c.dispose();
	      this._hv && this._o.onNext(this._v);
	      this._o.onCompleted();
	      this._hv = false;
	      this._id++;
	    };
	
	    return DebounceObserver;
	  }(AbstractObserver));
	
	  function debounceWithSelector(source, durationSelector) {
	    return new AnonymousObservable(function (o) {
	      var value, hasValue = false, cancelable = new SerialDisposable(), id = 0;
	      var subscription = source.subscribe(
	        function (x) {
	          var throttle = tryCatch(durationSelector)(x);
	          if (throttle === errorObj) { return o.onError(throttle.e); }
	
	          isPromise(throttle) && (throttle = observableFromPromise(throttle));
	
	          hasValue = true;
	          value = x;
	          id++;
	          var currentid = id, d = new SingleAssignmentDisposable();
	          cancelable.setDisposable(d);
	          d.setDisposable(throttle.subscribe(
	            function () {
	              hasValue && id === currentid && o.onNext(value);
	              hasValue = false;
	              d.dispose();
	            },
	            function (e) { o.onError(e); },
	            function () {
	              hasValue && id === currentid && o.onNext(value);
	              hasValue = false;
	              d.dispose();
	            }
	          ));
	        },
	        function (e) {
	          cancelable.dispose();
	          o.onError(e);
	          hasValue = false;
	          id++;
	        },
	        function () {
	          cancelable.dispose();
	          hasValue && o.onNext(value);
	          o.onCompleted();
	          hasValue = false;
	          id++;
	        }
	      );
	      return new BinaryDisposable(subscription, cancelable);
	    }, source);
	  }
	
	  observableProto.debounce = function () {
	    if (isFunction (arguments[0])) {
	      return debounceWithSelector(this, arguments[0]);
	    } else if (typeof arguments[0] === 'number') {
	      return new DebounceObservable(this, arguments[0], arguments[1]);
	    } else {
	      throw new Error('Invalid arguments');
	    }
	  };
	
	  var TimestampObservable = (function (__super__) {
	    inherits(TimestampObservable, __super__);
	    function TimestampObservable(source, s) {
	      this.source = source;
	      this._s = s;
	      __super__.call(this);
	    }
	
	    TimestampObservable.prototype.subscribeCore = function (o) {
	      return this.source.subscribe(new TimestampObserver(o, this._s));
	    };
	
	    return TimestampObservable;
	  }(ObservableBase));
	
	  var TimestampObserver = (function (__super__) {
	    inherits(TimestampObserver, __super__);
	    function TimestampObserver(o, s) {
	      this._o = o;
	      this._s = s;
	      __super__.call(this);
	    }
	
	    TimestampObserver.prototype.next = function (x) {
	      this._o.onNext({ value: x, timestamp: this._s.now() });
	    };
	
	    TimestampObserver.prototype.error = function (e) {
	      this._o.onError(e);
	    };
	
	    TimestampObserver.prototype.completed = function () {
	      this._o.onCompleted();
	    };
	
	    return TimestampObserver;
	  }(AbstractObserver));
	
	  /**
	   *  Records the timestamp for each value in an observable sequence.
	   *
	   * @example
	   *  1 - res = source.timestamp(); // produces { value: x, timestamp: ts }
	   *  2 - res = source.timestamp(Rx.Scheduler.default);
	   *
	   * @param {Scheduler} [scheduler]  Scheduler used to compute timestamps. If not specified, the default scheduler is used.
	   * @returns {Observable} An observable sequence with timestamp information on values.
	   */
	  observableProto.timestamp = function (scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return new TimestampObservable(this, scheduler);
	  };
	
	  function sampleObservable(source, sampler) {
	    return new AnonymousObservable(function (o) {
	      var atEnd = false, value, hasValue = false;
	
	      function sampleSubscribe() {
	        if (hasValue) {
	          hasValue = false;
	          o.onNext(value);
	        }
	        atEnd && o.onCompleted();
	      }
	
	      var sourceSubscription = new SingleAssignmentDisposable();
	      sourceSubscription.setDisposable(source.subscribe(
	        function (newValue) {
	          hasValue = true;
	          value = newValue;
	        },
	        function (e) { o.onError(e); },
	        function () {
	          atEnd = true;
	          sourceSubscription.dispose();
	        }
	      ));
	
	      return new BinaryDisposable(
	        sourceSubscription,
	        sampler.subscribe(sampleSubscribe, function (e) { o.onError(e); }, sampleSubscribe)
	      );
	    }, source);
	  }
	
	  /**
	   *  Samples the observable sequence at each interval.
	   *
	   * @example
	   *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
	   *  2 - res = source.sample(5000); // 5 seconds
	   *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
	   *
	   * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
	   * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} Sampled observable sequence.
	   */
	  observableProto.sample = observableProto.throttleLatest = function (intervalOrSampler, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    return typeof intervalOrSampler === 'number' ?
	      sampleObservable(this, observableinterval(intervalOrSampler, scheduler)) :
	      sampleObservable(this, intervalOrSampler);
	  };
	
	  var TimeoutError = Rx.TimeoutError = function(message) {
	    this.message = message || 'Timeout has occurred';
	    this.name = 'TimeoutError';
	    Error.call(this);
	  };
	  TimeoutError.prototype = Object.create(Error.prototype);
	
	  function timeoutWithSelector(source, firstTimeout, timeoutDurationSelector, other) {
	    if (isFunction(firstTimeout)) {
	      other = timeoutDurationSelector;
	      timeoutDurationSelector = firstTimeout;
	      firstTimeout = observableNever();
	    }
	    other || (other = observableThrow(new TimeoutError()));
	    return new AnonymousObservable(function (o) {
	      var subscription = new SerialDisposable(),
	        timer = new SerialDisposable(),
	        original = new SingleAssignmentDisposable();
	
	      subscription.setDisposable(original);
	
	      var id = 0, switched = false;
	
	      function setTimer(timeout) {
	        var myId = id, d = new SingleAssignmentDisposable();
	
	        function timerWins() {
	          switched = (myId === id);
	          return switched;
	        }
	
	        timer.setDisposable(d);
	        d.setDisposable(timeout.subscribe(function () {
	          timerWins() && subscription.setDisposable(other.subscribe(o));
	          d.dispose();
	        }, function (e) {
	          timerWins() && o.onError(e);
	        }, function () {
	          timerWins() && subscription.setDisposable(other.subscribe(o));
	        }));
	      };
	
	      setTimer(firstTimeout);
	
	      function oWins() {
	        var res = !switched;
	        if (res) { id++; }
	        return res;
	      }
	
	      original.setDisposable(source.subscribe(function (x) {
	        if (oWins()) {
	          o.onNext(x);
	          var timeout = tryCatch(timeoutDurationSelector)(x);
	          if (timeout === errorObj) { return o.onError(timeout.e); }
	          setTimer(isPromise(timeout) ? observableFromPromise(timeout) : timeout);
	        }
	      }, function (e) {
	        oWins() && o.onError(e);
	      }, function () {
	        oWins() && o.onCompleted();
	      }));
	      return new BinaryDisposable(subscription, timer);
	    }, source);
	  }
	
	  function timeout(source, dueTime, other, scheduler) {
	    if (isScheduler(other)) {
	      scheduler = other;
	      other = observableThrow(new TimeoutError());
	    }
	    if (other instanceof Error) { other = observableThrow(other); }
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	
	    return new AnonymousObservable(function (o) {
	      var id = 0,
	        original = new SingleAssignmentDisposable(),
	        subscription = new SerialDisposable(),
	        switched = false,
	        timer = new SerialDisposable();
	
	      subscription.setDisposable(original);
	
	      function createTimer() {
	        var myId = id;
	        timer.setDisposable(scheduler.scheduleFuture(null, dueTime, function () {
	          switched = id === myId;
	          if (switched) {
	            isPromise(other) && (other = observableFromPromise(other));
	            subscription.setDisposable(other.subscribe(o));
	          }
	        }));
	      }
	
	      createTimer();
	
	      original.setDisposable(source.subscribe(function (x) {
	        if (!switched) {
	          id++;
	          o.onNext(x);
	          createTimer();
	        }
	      }, function (e) {
	        if (!switched) {
	          id++;
	          o.onError(e);
	        }
	      }, function () {
	        if (!switched) {
	          id++;
	          o.onCompleted();
	        }
	      }));
	      return new BinaryDisposable(subscription, timer);
	    }, source);
	  }
	
	  observableProto.timeout = function () {
	    var firstArg = arguments[0];
	    if (firstArg instanceof Date || typeof firstArg === 'number') {
	      return timeout(this, firstArg, arguments[1], arguments[2]);
	    } else if (Observable.isObservable(firstArg) || isFunction(firstArg)) {
	      return timeoutWithSelector(this, firstArg, arguments[1], arguments[2]);
	    } else {
	      throw new Error('Invalid arguments');
	    }
	  };
	
	  /**
	   * Returns an Observable that emits only the first item emitted by the source Observable during sequential time windows of a specified duration.
	   * @param {Number} windowDuration time to wait before emitting another item after emitting the last item
	   * @param {Scheduler} [scheduler] the Scheduler to use internally to manage the timers that handle timeout for each item. If not provided, defaults to Scheduler.timeout.
	   * @returns {Observable} An Observable that performs the throttle operation.
	   */
	  observableProto.throttle = function (windowDuration, scheduler) {
	    isScheduler(scheduler) || (scheduler = defaultScheduler);
	    var duration = +windowDuration || 0;
	    if (duration <= 0) { throw new RangeError('windowDuration cannot be less or equal zero.'); }
	    var source = this;
	    return new AnonymousObservable(function (o) {
	      var lastOnNext = 0;
	      return source.subscribe(
	        function (x) {
	          var now = scheduler.now();
	          if (lastOnNext === 0 || now - lastOnNext >= duration) {
	            lastOnNext = now;
	            o.onNext(x);
	          }
	        },function (e) { o.onError(e); }, function () { o.onCompleted(); }
	      );
	    }, source);
	  };
	
	  var PausableObservable = (function (__super__) {
	    inherits(PausableObservable, __super__);
	    function PausableObservable(source, pauser) {
	      this.source = source;
	      this.controller = new Subject();
	
	      if (pauser && pauser.subscribe) {
	        this.pauser = this.controller.merge(pauser);
	      } else {
	        this.pauser = this.controller;
	      }
	
	      __super__.call(this);
	    }
	
	    PausableObservable.prototype._subscribe = function (o) {
	      var conn = this.source.publish(),
	        subscription = conn.subscribe(o),
	        connection = disposableEmpty;
	
	      var pausable = this.pauser.distinctUntilChanged().subscribe(function (b) {
	        if (b) {
	          connection = conn.connect();
	        } else {
	          connection.dispose();
	          connection = disposableEmpty;
	        }
	      });
	
	      return new NAryDisposable([subscription, connection, pausable]);
	    };
	
	    PausableObservable.prototype.pause = function () {
	      this.controller.onNext(false);
	    };
	
	    PausableObservable.prototype.resume = function () {
	      this.controller.onNext(true);
	    };
	
	    return PausableObservable;
	
	  }(Observable));
	
	  /**
	   * Pauses the underlying observable sequence based upon the observable sequence which yields true/false.
	   * @example
	   * var pauser = new Rx.Subject();
	   * var source = Rx.Observable.interval(100).pausable(pauser);
	   * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
	   * @returns {Observable} The observable sequence which is paused based upon the pauser.
	   */
	  observableProto.pausable = function (pauser) {
	    return new PausableObservable(this, pauser);
	  };
	
	  function combineLatestSource(source, subject, resultSelector) {
	    return new AnonymousObservable(function (o) {
	      var hasValue = [false, false],
	        hasValueAll = false,
	        isDone = false,
	        values = new Array(2),
	        err;
	
	      function next(x, i) {
	        values[i] = x;
	        hasValue[i] = true;
	        if (hasValueAll || (hasValueAll = hasValue.every(identity))) {
	          if (err) { return o.onError(err); }
	          var res = tryCatch(resultSelector).apply(null, values);
	          if (res === errorObj) { return o.onError(res.e); }
	          o.onNext(res);
	        }
	        isDone && values[1] && o.onCompleted();
	      }
	
	      return new BinaryDisposable(
	        source.subscribe(
	          function (x) {
	            next(x, 0);
	          },
	          function (e) {
	            if (values[1]) {
	              o.onError(e);
	            } else {
	              err = e;
	            }
	          },
	          function () {
	            isDone = true;
	            values[1] && o.onCompleted();
	          }),
	        subject.subscribe(
	          function (x) {
	            next(x, 1);
	          },
	          function (e) { o.onError(e); },
	          function () {
	            isDone = true;
	            next(true, 1);
	          })
	        );
	    }, source);
	  }
	
	  var PausableBufferedObservable = (function (__super__) {
	    inherits(PausableBufferedObservable, __super__);
	    function PausableBufferedObservable(source, pauser) {
	      this.source = source;
	      this.controller = new Subject();
	
	      if (pauser && pauser.subscribe) {
	        this.pauser = this.controller.merge(pauser);
	      } else {
	        this.pauser = this.controller;
	      }
	
	      __super__.call(this);
	    }
	
	    PausableBufferedObservable.prototype._subscribe = function (o) {
	      var q = [], previousShouldFire;
	
	      function drainQueue() { while (q.length > 0) { o.onNext(q.shift()); } }
	
	      var subscription =
	        combineLatestSource(
	          this.source,
	          this.pauser.startWith(false).distinctUntilChanged(),
	          function (data, shouldFire) {
	            return { data: data, shouldFire: shouldFire };
	          })
	          .subscribe(
	            function (results) {
	              if (previousShouldFire !== undefined && results.shouldFire !== previousShouldFire) {
	                previousShouldFire = results.shouldFire;
	                // change in shouldFire
	                if (results.shouldFire) { drainQueue(); }
	              } else {
	                previousShouldFire = results.shouldFire;
	                // new data
	                if (results.shouldFire) {
	                  o.onNext(results.data);
	                } else {
	                  q.push(results.data);
	                }
	              }
	            },
	            function (err) {
	              drainQueue();
	              o.onError(err);
	            },
	            function () {
	              drainQueue();
	              o.onCompleted();
	            }
	          );
	      return subscription;      
	    };
	
	    PausableBufferedObservable.prototype.pause = function () {
	      this.controller.onNext(false);
	    };
	
	    PausableBufferedObservable.prototype.resume = function () {
	      this.controller.onNext(true);
	    };
	
	    return PausableBufferedObservable;
	
	  }(Observable));
	
	  /**
	   * Pauses the underlying observable sequence based upon the observable sequence which yields true/false,
	   * and yields the values that were buffered while paused.
	   * @example
	   * var pauser = new Rx.Subject();
	   * var source = Rx.Observable.interval(100).pausableBuffered(pauser);
	   * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
	   * @returns {Observable} The observable sequence which is paused based upon the pauser.
	   */
	  observableProto.pausableBuffered = function (subject) {
	    return new PausableBufferedObservable(this, subject);
	  };
	
	  var ControlledObservable = (function (__super__) {
	    inherits(ControlledObservable, __super__);
	    function ControlledObservable (source, enableQueue, scheduler) {
	      __super__.call(this);
	      this.subject = new ControlledSubject(enableQueue, scheduler);
	      this.source = source.multicast(this.subject).refCount();
	    }
	
	    ControlledObservable.prototype._subscribe = function (o) {
	      return this.source.subscribe(o);
	    };
	
	    ControlledObservable.prototype.request = function (numberOfItems) {
	      return this.subject.request(numberOfItems == null ? -1 : numberOfItems);
	    };
	
	    return ControlledObservable;
	
	  }(Observable));
	
	  var ControlledSubject = (function (__super__) {
	    inherits(ControlledSubject, __super__);
	    function ControlledSubject(enableQueue, scheduler) {
	      enableQueue == null && (enableQueue = true);
	
	      __super__.call(this);
	      this.subject = new Subject();
	      this.enableQueue = enableQueue;
	      this.queue = enableQueue ? [] : null;
	      this.requestedCount = 0;
	      this.requestedDisposable = null;
	      this.error = null;
	      this.hasFailed = false;
	      this.hasCompleted = false;
	      this.scheduler = scheduler || currentThreadScheduler;
	    }
	
	    addProperties(ControlledSubject.prototype, Observer, {
	      _subscribe: function (o) {
	        return this.subject.subscribe(o);
	      },
	      onCompleted: function () {
	        this.hasCompleted = true;
	        if (!this.enableQueue || this.queue.length === 0) {
	          this.subject.onCompleted();
	          this.disposeCurrentRequest();
	        } else {
	          this.queue.push(Notification.createOnCompleted());
	        }
	      },
	      onError: function (error) {
	        this.hasFailed = true;
	        this.error = error;
	        if (!this.enableQueue || this.queue.length === 0) {
	          this.subject.onError(error);
	          this.disposeCurrentRequest();
	        } else {
	          this.queue.push(Notification.createOnError(error));
	        }
	      },
	      onNext: function (value) {
	        if (this.requestedCount <= 0) {
	          this.enableQueue && this.queue.push(Notification.createOnNext(value));
	        } else {
	          (this.requestedCount-- === 0) && this.disposeCurrentRequest();
	          this.subject.onNext(value);
	        }
	      },
	      _processRequest: function (numberOfItems) {
	        if (this.enableQueue) {
	          while (this.queue.length > 0 && (numberOfItems > 0 || this.queue[0].kind !== 'N')) {
	            var first = this.queue.shift();
	            first.accept(this.subject);
	            if (first.kind === 'N') {
	              numberOfItems--;
	            } else {
	              this.disposeCurrentRequest();
	              this.queue = [];
	            }
	          }
	        }
	
	        return numberOfItems;
	      },
	      request: function (number) {
	        this.disposeCurrentRequest();
	        var self = this;
	
	        this.requestedDisposable = this.scheduler.schedule(number,
	        function(s, i) {
	          var remaining = self._processRequest(i);
	          var stopped = self.hasCompleted || self.hasFailed;
	          if (!stopped && remaining > 0) {
	            self.requestedCount = remaining;
	
	            return disposableCreate(function () {
	              self.requestedCount = 0;
	            });
	              // Scheduled item is still in progress. Return a new
	              // disposable to allow the request to be interrupted
	              // via dispose.
	          }
	        });
	
	        return this.requestedDisposable;
	      },
	      disposeCurrentRequest: function () {
	        if (this.requestedDisposable) {
	          this.requestedDisposable.dispose();
	          this.requestedDisposable = null;
	        }
	      }
	    });
	
	    return ControlledSubject;
	  }(Observable));
	
	  /**
	   * Attaches a controller to the observable sequence with the ability to queue.
	   * @example
	   * var source = Rx.Observable.interval(100).controlled();
	   * source.request(3); // Reads 3 values
	   * @param {bool} enableQueue truthy value to determine if values should be queued pending the next request
	   * @param {Scheduler} scheduler determines how the requests will be scheduled
	   * @returns {Observable} The observable sequence which only propagates values on request.
	   */
	  observableProto.controlled = function (enableQueue, scheduler) {
	
	    if (enableQueue && isScheduler(enableQueue)) {
	      scheduler = enableQueue;
	      enableQueue = true;
	    }
	
	    if (enableQueue == null) {  enableQueue = true; }
	    return new ControlledObservable(this, enableQueue, scheduler);
	  };
	
	  /**
	   * Pipes the existing Observable sequence into a Node.js Stream.
	   * @param {Stream} dest The destination Node.js stream.
	   * @returns {Stream} The destination stream.
	   */
	  observableProto.pipe = function (dest) {
	    var source = this.pausableBuffered();
	
	    function onDrain() {
	      source.resume();
	    }
	
	    dest.addListener('drain', onDrain);
	
	    source.subscribe(
	      function (x) {
	        !dest.write(String(x)) && source.pause();
	      },
	      function (err) {
	        dest.emit('error', err);
	      },
	      function () {
	        // Hack check because STDIO is not closable
	        !dest._isStdio && dest.end();
	        dest.removeListener('drain', onDrain);
	      });
	
	    source.resume();
	
	    return dest;
	  };
	
	  var TransduceObserver = (function (__super__) {
	    inherits(TransduceObserver, __super__);
	    function TransduceObserver(o, xform) {
	      this._o = o;
	      this._xform = xform;
	      __super__.call(this);
	    }
	
	    TransduceObserver.prototype.next = function (x) {
	      var res = tryCatch(this._xform['@@transducer/step']).call(this._xform, this._o, x);
	      if (res === errorObj) { this._o.onError(res.e); }
	    };
	
	    TransduceObserver.prototype.error = function (e) { this._o.onError(e); };
	
	    TransduceObserver.prototype.completed = function () {
	      this._xform['@@transducer/result'](this._o);
	    };
	
	    return TransduceObserver;
	  }(AbstractObserver));
	
	  function transformForObserver(o) {
	    return {
	      '@@transducer/init': function() {
	        return o;
	      },
	      '@@transducer/step': function(obs, input) {
	        return obs.onNext(input);
	      },
	      '@@transducer/result': function(obs) {
	        return obs.onCompleted();
	      }
	    };
	  }
	
	  /**
	   * Executes a transducer to transform the observable sequence
	   * @param {Transducer} transducer A transducer to execute
	   * @returns {Observable} An Observable sequence containing the results from the transducer.
	   */
	  observableProto.transduce = function(transducer) {
	    var source = this;
	    return new AnonymousObservable(function(o) {
	      var xform = transducer(transformForObserver(o));
	      return source.subscribe(new TransduceObserver(o, xform));
	    }, source);
	  };
	
	  var AnonymousObservable = Rx.AnonymousObservable = (function (__super__) {
	    inherits(AnonymousObservable, __super__);
	
	    // Fix subscriber to check for undefined or function returned to decorate as Disposable
	    function fixSubscriber(subscriber) {
	      return subscriber && isFunction(subscriber.dispose) ? subscriber :
	        isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
	    }
	
	    function setDisposable(s, state) {
	      var ado = state[0], self = state[1];
	      var sub = tryCatch(self.__subscribe).call(self, ado);
	      if (sub === errorObj && !ado.fail(errorObj.e)) { thrower(errorObj.e); }
	      ado.setDisposable(fixSubscriber(sub));
	    }
	
	    function AnonymousObservable(subscribe, parent) {
	      this.source = parent;
	      this.__subscribe = subscribe;
	      __super__.call(this);
	    }
	
	    AnonymousObservable.prototype._subscribe = function (o) {
	      var ado = new AutoDetachObserver(o), state = [ado, this];
	
	      if (currentThreadScheduler.scheduleRequired()) {
	        currentThreadScheduler.schedule(state, setDisposable);
	      } else {
	        setDisposable(null, state);
	      }
	      return ado;
	    };
	
	    return AnonymousObservable;
	
	  }(Observable));
	
	  var AutoDetachObserver = (function (__super__) {
	    inherits(AutoDetachObserver, __super__);
	
	    function AutoDetachObserver(observer) {
	      __super__.call(this);
	      this.observer = observer;
	      this.m = new SingleAssignmentDisposable();
	    }
	
	    var AutoDetachObserverPrototype = AutoDetachObserver.prototype;
	
	    AutoDetachObserverPrototype.next = function (value) {
	      var result = tryCatch(this.observer.onNext).call(this.observer, value);
	      if (result === errorObj) {
	        this.dispose();
	        thrower(result.e);
	      }
	    };
	
	    AutoDetachObserverPrototype.error = function (err) {
	      var result = tryCatch(this.observer.onError).call(this.observer, err);
	      this.dispose();
	      result === errorObj && thrower(result.e);
	    };
	
	    AutoDetachObserverPrototype.completed = function () {
	      var result = tryCatch(this.observer.onCompleted).call(this.observer);
	      this.dispose();
	      result === errorObj && thrower(result.e);
	    };
	
	    AutoDetachObserverPrototype.setDisposable = function (value) { this.m.setDisposable(value); };
	    AutoDetachObserverPrototype.getDisposable = function () { return this.m.getDisposable(); };
	
	    AutoDetachObserverPrototype.dispose = function () {
	      __super__.prototype.dispose.call(this);
	      this.m.dispose();
	    };
	
	    return AutoDetachObserver;
	  }(AbstractObserver));
	
	  var InnerSubscription = function (s, o) {
	    this._s = s;
	    this._o = o;
	  };
	
	  InnerSubscription.prototype.dispose = function () {
	    if (!this._s.isDisposed && this._o !== null) {
	      var idx = this._s.observers.indexOf(this._o);
	      this._s.observers.splice(idx, 1);
	      this._o = null;
	    }
	  };
	
	  /**
	   *  Represents an object that is both an observable sequence as well as an observer.
	   *  Each notification is broadcasted to all subscribed observers.
	   */
	  var Subject = Rx.Subject = (function (__super__) {
	    inherits(Subject, __super__);
	    function Subject() {
	      __super__.call(this);
	      this.isDisposed = false;
	      this.isStopped = false;
	      this.observers = [];
	      this.hasError = false;
	    }
	
	    addProperties(Subject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.observers.push(o);
	          return new InnerSubscription(this, o);
	        }
	        if (this.hasError) {
	          o.onError(this.error);
	          return disposableEmpty;
	        }
	        o.onCompleted();
	        return disposableEmpty;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () { return this.observers.length > 0; },
	      /**
	       * Notifies all subscribed observers about the end of the sequence.
	       */
	      onCompleted: function () {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onCompleted();
	          }
	
	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.error = error;
	          this.hasError = true;
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onError(error);
	          }
	
	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onNext(value);
	          }
	        }
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	      }
	    });
	
	    /**
	     * Creates a subject from the specified observer and observable.
	     * @param {Observer} observer The observer used to send messages to the subject.
	     * @param {Observable} observable The observable used to subscribe to messages sent from the subject.
	     * @returns {Subject} Subject implemented using the given observer and observable.
	     */
	    Subject.create = function (observer, observable) {
	      return new AnonymousSubject(observer, observable);
	    };
	
	    return Subject;
	  }(Observable));
	
	  /**
	   *  Represents the result of an asynchronous operation.
	   *  The last value before the OnCompleted notification, or the error received through OnError, is sent to all subscribed observers.
	   */
	  var AsyncSubject = Rx.AsyncSubject = (function (__super__) {
	    inherits(AsyncSubject, __super__);
	
	    /**
	     * Creates a subject that can only receive one value and that value is cached for all future observations.
	     * @constructor
	     */
	    function AsyncSubject() {
	      __super__.call(this);
	      this.isDisposed = false;
	      this.isStopped = false;
	      this.hasValue = false;
	      this.observers = [];
	      this.hasError = false;
	    }
	
	    addProperties(AsyncSubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	
	        if (!this.isStopped) {
	          this.observers.push(o);
	          return new InnerSubscription(this, o);
	        }
	
	        if (this.hasError) {
	          o.onError(this.error);
	        } else if (this.hasValue) {
	          o.onNext(this.value);
	          o.onCompleted();
	        } else {
	          o.onCompleted();
	        }
	
	        return disposableEmpty;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () {
	        checkDisposed(this);
	        return this.observers.length > 0;
	      },
	      /**
	       * Notifies all subscribed observers about the end of the sequence, also causing the last received value to be sent out (if any).
	       */
	      onCompleted: function () {
	        var i, len;
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          var os = cloneArray(this.observers), len = os.length;
	
	          if (this.hasValue) {
	            for (i = 0; i < len; i++) {
	              var o = os[i];
	              o.onNext(this.value);
	              o.onCompleted();
	            }
	          } else {
	            for (i = 0; i < len; i++) {
	              os[i].onCompleted();
	            }
	          }
	
	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the error.
	       * @param {Mixed} error The Error to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.isStopped = true;
	          this.hasError = true;
	          this.error = error;
	
	          for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	            os[i].onError(error);
	          }
	
	          this.observers.length = 0;
	        }
	      },
	      /**
	       * Sends a value to the subject. The last value received before successful termination will be sent to all subscribed and future observers.
	       * @param {Mixed} value The value to store in the subject.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.value = value;
	        this.hasValue = true;
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	        this.error = null;
	        this.value = null;
	      }
	    });
	
	    return AsyncSubject;
	  }(Observable));
	
	  var AnonymousSubject = Rx.AnonymousSubject = (function (__super__) {
	    inherits(AnonymousSubject, __super__);
	    function AnonymousSubject(observer, observable) {
	      this.observer = observer;
	      this.observable = observable;
	      __super__.call(this);
	    }
	
	    addProperties(AnonymousSubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        return this.observable.subscribe(o);
	      },
	      onCompleted: function () {
	        this.observer.onCompleted();
	      },
	      onError: function (error) {
	        this.observer.onError(error);
	      },
	      onNext: function (value) {
	        this.observer.onNext(value);
	      }
	    });
	
	    return AnonymousSubject;
	  }(Observable));
	
	  /**
	   *  Represents a value that changes over time.
	   *  Observers can subscribe to the subject to receive the last (or initial) value and all subsequent notifications.
	   */
	  var BehaviorSubject = Rx.BehaviorSubject = (function (__super__) {
	    inherits(BehaviorSubject, __super__);
	    function BehaviorSubject(value) {
	      __super__.call(this);
	      this.value = value;
	      this.observers = [];
	      this.isDisposed = false;
	      this.isStopped = false;
	      this.hasError = false;
	    }
	
	    addProperties(BehaviorSubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	        if (!this.isStopped) {
	          this.observers.push(o);
	          o.onNext(this.value);
	          return new InnerSubscription(this, o);
	        }
	        if (this.hasError) {
	          o.onError(this.error);
	        } else {
	          o.onCompleted();
	        }
	        return disposableEmpty;
	      },
	      /**
	       * Gets the current value or throws an exception.
	       * Value is frozen after onCompleted is called.
	       * After onError is called always throws the specified exception.
	       * An exception is always thrown after dispose is called.
	       * @returns {Mixed} The initial value passed to the constructor until onNext is called; after which, the last value passed to onNext.
	       */
	      getValue: function () {
	          checkDisposed(this);
	          if (this.hasError) {
	              throw this.error;
	          }
	          return this.value;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () { return this.observers.length > 0; },
	      /**
	       * Notifies all subscribed observers about the end of the sequence.
	       */
	      onCompleted: function () {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          os[i].onCompleted();
	        }
	
	        this.observers.length = 0;
	      },
	      /**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        this.hasError = true;
	        this.error = error;
	
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          os[i].onError(error);
	        }
	
	        this.observers.length = 0;
	      },
	      /**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.value = value;
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          os[i].onNext(value);
	        }
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	        this.value = null;
	        this.error = null;
	      }
	    });
	
	    return BehaviorSubject;
	  }(Observable));
	
	  /**
	   * Represents an object that is both an observable sequence as well as an observer.
	   * Each notification is broadcasted to all subscribed and future observers, subject to buffer trimming policies.
	   */
	  var ReplaySubject = Rx.ReplaySubject = (function (__super__) {
	
	    var maxSafeInteger = Math.pow(2, 53) - 1;
	
	    function createRemovableDisposable(subject, observer) {
	      return disposableCreate(function () {
	        observer.dispose();
	        !subject.isDisposed && subject.observers.splice(subject.observers.indexOf(observer), 1);
	      });
	    }
	
	    inherits(ReplaySubject, __super__);
	
	    /**
	     *  Initializes a new instance of the ReplaySubject class with the specified buffer size, window size and scheduler.
	     *  @param {Number} [bufferSize] Maximum element count of the replay buffer.
	     *  @param {Number} [windowSize] Maximum time length of the replay buffer.
	     *  @param {Scheduler} [scheduler] Scheduler the observers are invoked on.
	     */
	    function ReplaySubject(bufferSize, windowSize, scheduler) {
	      this.bufferSize = bufferSize == null ? maxSafeInteger : bufferSize;
	      this.windowSize = windowSize == null ? maxSafeInteger : windowSize;
	      this.scheduler = scheduler || currentThreadScheduler;
	      this.q = [];
	      this.observers = [];
	      this.isStopped = false;
	      this.isDisposed = false;
	      this.hasError = false;
	      this.error = null;
	      __super__.call(this);
	    }
	
	    addProperties(ReplaySubject.prototype, Observer.prototype, {
	      _subscribe: function (o) {
	        checkDisposed(this);
	        var so = new ScheduledObserver(this.scheduler, o), subscription = createRemovableDisposable(this, so);
	
	        this._trim(this.scheduler.now());
	        this.observers.push(so);
	
	        for (var i = 0, len = this.q.length; i < len; i++) {
	          so.onNext(this.q[i].value);
	        }
	
	        if (this.hasError) {
	          so.onError(this.error);
	        } else if (this.isStopped) {
	          so.onCompleted();
	        }
	
	        so.ensureActive();
	        return subscription;
	      },
	      /**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */
	      hasObservers: function () {
	        return this.observers.length > 0;
	      },
	      _trim: function (now) {
	        while (this.q.length > this.bufferSize) {
	          this.q.shift();
	        }
	        while (this.q.length > 0 && (now - this.q[0].interval) > this.windowSize) {
	          this.q.shift();
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */
	      onNext: function (value) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        var now = this.scheduler.now();
	        this.q.push({ interval: now, value: value });
	        this._trim(now);
	
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          var observer = os[i];
	          observer.onNext(value);
	          observer.ensureActive();
	        }
	      },
	      /**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */
	      onError: function (error) {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        this.error = error;
	        this.hasError = true;
	        var now = this.scheduler.now();
	        this._trim(now);
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          var observer = os[i];
	          observer.onError(error);
	          observer.ensureActive();
	        }
	        this.observers.length = 0;
	      },
	      /**
	       * Notifies all subscribed observers about the end of the sequence.
	       */
	      onCompleted: function () {
	        checkDisposed(this);
	        if (this.isStopped) { return; }
	        this.isStopped = true;
	        var now = this.scheduler.now();
	        this._trim(now);
	        for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
	          var observer = os[i];
	          observer.onCompleted();
	          observer.ensureActive();
	        }
	        this.observers.length = 0;
	      },
	      /**
	       * Unsubscribe all observers and release resources.
	       */
	      dispose: function () {
	        this.isDisposed = true;
	        this.observers = null;
	      }
	    });
	
	    return ReplaySubject;
	  }(Observable));
	
	  /**
	  * Used to pause and resume streams.
	  */
	  Rx.Pauser = (function (__super__) {
	    inherits(Pauser, __super__);
	    function Pauser() {
	      __super__.call(this);
	    }
	
	    /**
	     * Pauses the underlying sequence.
	     */
	    Pauser.prototype.pause = function () { this.onNext(false); };
	
	    /**
	    * Resumes the underlying sequence.
	    */
	    Pauser.prototype.resume = function () { this.onNext(true); };
	
	    return Pauser;
	  }(Subject));
	
	  if (true) {
	    root.Rx = Rx;
	
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Rx;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (freeExports && freeModule) {
	    // in Node.js or RingoJS
	    if (moduleExports) {
	      (freeModule.exports = Rx).Rx = Rx;
	    } else {
	      freeExports.Rx = Rx;
	    }
	  } else {
	    // in a browser or Rhino
	    root.Rx = Rx;
	  }
	
	  // All code before this point will be filtered from stack traces.
	  var rEndingLine = captureLine();
	
	}.call(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module), (function() { return this; }()), __webpack_require__(7)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.fetchJsonp = mod.exports;
	  }
	})(this, function (exports, module) {
	  'use strict';
	
	  var defaultOptions = {
	    timeout: 5000,
	    jsonpCallback: 'callback'
	  };
	
	  function generateCallbackFunction() {
	    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
	  }
	
	  // Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined' error if request timeout
	  function clearFunction(functionName) {
	    // IE8 throws an exception when you try to delete a property on window
	    // http://stackoverflow.com/a/1824228/751089
	    try {
	      delete window[functionName];
	    } catch (e) {
	      window[functionName] = undefined;
	    }
	  }
	
	  function removeScript(scriptId) {
	    var script = document.getElementById(scriptId);
	    document.getElementsByTagName("head")[0].removeChild(script);
	  }
	
	  var fetchJsonp = function fetchJsonp(url) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var timeout = options.timeout != null ? options.timeout : defaultOptions.timeout;
	    var jsonpCallback = options.jsonpCallback != null ? options.jsonpCallback : defaultOptions.jsonpCallback;
	
	    var timeoutId = undefined;
	
	    return new Promise(function (resolve, reject) {
	      var callbackFunction = generateCallbackFunction();
	
	      window[callbackFunction] = function (response) {
	        resolve({
	          ok: true,
	          // keep consistent with fetch API
	          json: function json() {
	            return Promise.resolve(response);
	          }
	        });
	
	        if (timeoutId) clearTimeout(timeoutId);
	
	        removeScript(jsonpCallback + '_' + callbackFunction);
	
	        clearFunction(callbackFunction);
	      };
	
	      // Check if the user set their own params, and if not add a ? to start a list of params
	      url += url.indexOf('?') === -1 ? '?' : '&';
	
	      var jsonpScript = document.createElement('script');
	      jsonpScript.setAttribute("src", url + jsonpCallback + '=' + callbackFunction);
	      jsonpScript.id = jsonpCallback + '_' + callbackFunction;
	      document.getElementsByTagName("head")[0].appendChild(jsonpScript);
	
	      timeoutId = setTimeout(function () {
	        reject(new Error('JSONP request to ' + url + ' timed out'));
	
	        clearFunction(callbackFunction);
	        removeScript(jsonpCallback + '_' + callbackFunction);
	      }, timeout);
	    });
	  };
	
	  // export as global function
	  /*
	  let local;
	  if (typeof global !== 'undefined') {
	    local = global;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }
	  
	  local.fetchJsonp = fetchJsonp;
	  */
	
	  module.exports = fetchJsonp;
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Tile = __webpack_require__(10);
	
	var _Tile2 = _interopRequireDefault(_Tile);
	
	var _reactMotion = __webpack_require__(14);
	
	var Wall = (function (_Component) {
	    _inherits(Wall, _Component);
	
	    function Wall() {
	        _classCallCheck(this, Wall);
	
	        _get(Object.getPrototypeOf(Wall.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Wall, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            var _this = this;
	
	            var configs = {};
	            Object.keys(this.props.items).map(function (key) {
	                configs[key] = {
	                    opacity: (0, _reactMotion.spring)(1),
	                    width: (0, _reactMotion.spring)(30),
	                    margin: (0, _reactMotion.spring)(1),
	                    item: _this.props.items[key]
	                };
	            });
	            return configs;
	        }
	    }, {
	        key: 'willEnter',
	        value: function willEnter(key) {
	            return {
	                opacity: (0, _reactMotion.spring)(0),
	                width: (0, _reactMotion.spring)(0),
	                margin: (0, _reactMotion.spring)(0),
	                item: this.props.items[key]
	            };
	        }
	    }, {
	        key: 'willLeave',
	        value: function willLeave(key, style) {
	            return {
	                opacity: (0, _reactMotion.spring)(0),
	                width: (0, _reactMotion.spring)(0),
	                margin: (0, _reactMotion.spring)(0),
	                item: style.item
	            };
	        }
	    }, {
	        key: 'renderTile',
	        value: function renderTile(key, itemValues) {
	            var item = itemValues.item;
	
	            var styleConfig = _objectWithoutProperties(itemValues, ['item']);
	
	            var itemProps = _objectWithoutProperties(item, []);
	
	            var style = {
	                opacity: styleConfig.opacity,
	                width: styleConfig.width + '%',
	                marginLeft: styleConfig.margin + '%',
	                marginRight: styleConfig.margin + '%'
	            };
	
	            return _react2['default'].createElement(_Tile2['default'], _extends({ key: key,
	                style: style
	            }, itemProps));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2['default'].createElement(
	                _reactMotion.TransitionMotion,
	                {
	                    styles: this.getStyles.bind(this)(),
	                    willEnter: this.willEnter.bind(this),
	                    willLeave: this.willLeave.bind(this) },
	                function (values) {
	                    return _react2['default'].createElement(
	                        'div',
	                        { className: 'climb__wall' },
	                        Object.keys(values).map(function (key) {
	                            var itemValues = values[key];
	                            return _this2.renderTile(key, itemValues);
	                        })
	                    );
	                }
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            items: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	    }]);
	
	    return Wall;
	})(_react.Component);
	
	exports['default'] = Wall;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _commonImage = __webpack_require__(11);
	
	var _commonImage2 = _interopRequireDefault(_commonImage);
	
	var _commonMessage = __webpack_require__(12);
	
	var _commonMessage2 = _interopRequireDefault(_commonMessage);
	
	var _commonAuthor = __webpack_require__(13);
	
	var _commonAuthor2 = _interopRequireDefault(_commonAuthor);
	
	var Tile = (function (_React$Component) {
	    _inherits(Tile, _React$Component);
	
	    function Tile(props) {
	        _classCallCheck(this, Tile);
	
	        _get(Object.getPrototypeOf(Tile.prototype), 'constructor', this).call(this, props);
	    }
	
	    _createClass(Tile, [{
	        key: 'createImage',
	        value: function createImage() {
	
	            if (this.props.image !== null) {
	                var _props$image = this.props.image;
	                var src = _props$image.url;
	                var width = _props$image.width;
	                var height = _props$image.height;
	
	                return _react2['default'].createElement(_commonImage2['default'], { src: src,
	                    width: width,
	                    height: height });
	            }
	            return null;
	        }
	    }, {
	        key: 'createMessage',
	        value: function createMessage() {
	
	            if (this.props.message) {
	                return _react2['default'].createElement(_commonMessage2['default'], { body: this.props.message });
	            }
	            return null;
	        }
	    }, {
	        key: 'createClassString',
	        value: function createClassString() {
	
	            var classString = 'climb__tile climb__tile--' + this.props.source_type;
	
	            if (this.props.image) {
	                classString += ' climb__tile--has-media climb__tile--has-image';
	            } else {
	                classString += ' climb__tile--has-no-image';
	            }
	
	            if (this.props.video_url) {
	                classString += ' climb__tile--has-media climb__tile--has-video';
	            } else {
	                classString += ' climb__tile--has-no-video';
	            }
	
	            return classString;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var image = this.createImage();
	            var message = this.createMessage();
	            var classString = this.createClassString();
	            var author = this.props.author;
	
	            return _react2['default'].createElement(
	                'div',
	                { className: classString,
	                    style: this.props.style },
	                _react2['default'].createElement(
	                    'a',
	                    { href: this.props.link },
	                    image
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'climb__tile__content' },
	                    message,
	                    _react2['default'].createElement(_commonAuthor2['default'], author)
	                )
	            );
	        }
	    }]);
	
	    return Tile;
	})(_react2['default'].Component);
	
	Tile.propTypes = {
	
	    // Required attrs
	    link: _react2['default'].PropTypes.string.isRequired,
	    source_type: _react2['default'].PropTypes.string.isRequired,
	    timestamp: _react2['default'].PropTypes.number.isRequired,
	    author: _react2['default'].PropTypes.shape({
	        username: _react2['default'].PropTypes.string.isRequired,
	        picture: _react2['default'].PropTypes.string.isRequired,
	        link: _react2['default'].PropTypes.string.isRequired
	    }),
	
	    // Optional attrs
	    message: _react2['default'].PropTypes.string,
	    video_src: _react2['default'].PropTypes.string,
	    image: _react2['default'].PropTypes.shape({
	        url: _react2['default'].PropTypes.string.isRequired,
	        width: _react2['default'].PropTypes.number.isRequired,
	        height: _react2['default'].PropTypes.number.isRequired
	    })
	
	};
	
	exports['default'] = Tile;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Image = (function (_React$Component) {
	    _inherits(Image, _React$Component);
	
	    function Image() {
	        _classCallCheck(this, Image);
	
	        _get(Object.getPrototypeOf(Image.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Image, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement("img", { className: "climb__image",
	                src: this.props.src, "data-width": this.props.width, "data-height": this.props.height });
	        }
	    }]);
	
	    return Image;
	})(_react2["default"].Component);
	
	Image.propTypes = {
	    src: _react2["default"].PropTypes.string.isRequired,
	    width: _react2["default"].PropTypes.number,
	    height: _react2["default"].PropTypes.number
	};
	
	exports["default"] = Image;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Message = (function (_React$Component) {
	    _inherits(Message, _React$Component);
	
	    function Message() {
	        _classCallCheck(this, Message);
	
	        _get(Object.getPrototypeOf(Message.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Message, [{
	        key: 'render',
	        value: function render() {
	
	            var message = this.props.body.replace(/<a href="http:\/\/pic.twitter.com\/[^>]*>([^<]+)<\/a>/g, '');
	
	            return _react2['default'].createElement('div', { className: 'climb__tile__message',
	                dangerouslySetInnerHTML: { __html: message } });
	        }
	    }]);
	
	    return Message;
	})(_react2['default'].Component);
	
	Message.propTypes = {
	    body: _react2['default'].PropTypes.string.isRequired
	};
	
	exports['default'] = Message;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Author = (function (_React$Component) {
	    _inherits(Author, _React$Component);
	
	    function Author() {
	        _classCallCheck(this, Author);
	
	        _get(Object.getPrototypeOf(Author.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Author, [{
	        key: "render",
	        value: function render() {
	
	            return _react2["default"].createElement(
	                "a",
	                { className: "climb__tile__author",
	                    href: this.props.link },
	                _react2["default"].createElement("img", { src: this.props.picture,
	                    alt: "Profile pic of " + this.props.name }),
	                _react2["default"].createElement(
	                    "h4",
	                    { className: "climb__tile__author__username" },
	                    this.props.username
	                )
	            );
	        }
	    }]);
	
	    return Author;
	})(_react2["default"].Component);
	
	Author.propTypes = {};
	
	exports["default"] = Author;
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _components2 = __webpack_require__(15);
	
	var _components3 = _interopRequireDefault(_components2);
	
	var _reorderKeys = __webpack_require__(27);
	
	var _reorderKeys2 = _interopRequireDefault(_reorderKeys);
	
	var _components = _components3['default'](_react2['default']);
	
	var Spring = _components.Spring;
	var TransitionSpring = _components.TransitionSpring;
	var Motion = _components.Motion;
	var StaggeredMotion = _components.StaggeredMotion;
	var TransitionMotion = _components.TransitionMotion;
	exports.Spring = Spring;
	exports.TransitionSpring = TransitionSpring;
	exports.Motion = Motion;
	exports.StaggeredMotion = StaggeredMotion;
	exports.TransitionMotion = TransitionMotion;
	
	var _spring2 = __webpack_require__(28);
	
	var _spring3 = _interopRequireDefault(_spring2);
	
	exports.spring = _spring3['default'];
	
	var _presets2 = __webpack_require__(29);
	
	var _presets3 = _interopRequireDefault(_presets2);
	
	exports.presets = _presets3['default'];
	var utils = {
	  reorderKeys: _reorderKeys2['default']
	};
	exports.utils = utils;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = components;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _noVelocity = __webpack_require__(16);
	
	var _noVelocity2 = _interopRequireDefault(_noVelocity);
	
	var _hasReachedStyle = __webpack_require__(17);
	
	var _hasReachedStyle2 = _interopRequireDefault(_hasReachedStyle);
	
	var _mergeDiff = __webpack_require__(18);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _animationLoop = __webpack_require__(19);
	
	var _animationLoop2 = _interopRequireDefault(_animationLoop);
	
	var _zero = __webpack_require__(22);
	
	var _zero2 = _interopRequireDefault(_zero);
	
	var _updateTree = __webpack_require__(23);
	
	var _deprecatedSprings2 = __webpack_require__(25);
	
	var _deprecatedSprings3 = _interopRequireDefault(_deprecatedSprings2);
	
	var _stripStyle = __webpack_require__(26);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var startAnimation = _animationLoop2['default']();
	
	function mapObject(f, obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = f(obj[key], key);
	  }
	  return ret;
	}
	
	function everyObj(f, obj) {
	  for (var key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    if (!f(obj[key], key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function components(React) {
	  var PropTypes = React.PropTypes;
	
	  var Motion = React.createClass({
	    displayName: 'Motion',
	
	    propTypes: {
	      // TOOD: warn against putting a config in here
	      defaultValue: function defaultValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('Spring\'s `defaultValue` has been changed to `defaultStyle`. ' + 'Its format received a few (easy to update!) changes as well.');
	        }
	      },
	      endValue: function endValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('Spring\'s `endValue` has been changed to `style`. Its format ' + 'received a few (easy to update!) changes as well.');
	        }
	      },
	      defaultStyle: PropTypes.object,
	      style: PropTypes.object.isRequired,
	      children: PropTypes.func.isRequired
	    },
	
	    getInitialState: function getInitialState() {
	      var _props = this.props;
	      var defaultStyle = _props.defaultStyle;
	      var style = _props.style;
	
	      var currentStyle = defaultStyle || style;
	      return {
	        currentStyle: currentStyle,
	        currentVelocity: mapObject(_zero2['default'], currentStyle)
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyle = state.currentStyle;
	      var currentVelocity = state.currentVelocity;
	      var style = this.props.style;
	
	      var newCurrentStyle = _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocity, style);
	      var newCurrentVelocity = _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocity, style);
	
	      // TOOD: this isn't necessary anymore. It was used only against endValue func
	      if (_noVelocity2['default'](currentVelocity, newCurrentStyle) && _noVelocity2['default'](newCurrentVelocity, newCurrentStyle)) {
	        // check explanation in `Motion.animationRender`
	        this.stopAnimation(); // Nasty side effects....
	      }
	
	      return {
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      // Is smart enough to not start it twice
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // `this.hasUnmounted` might be true in the following condition:
	      // user does some checks in `style` and calls an owner handler
	      // owner sets state in the callback, triggering a re-render
	      // unmounts Motion
	      if (!this.hasUnmounted) {
	        this.setState({
	          currentStyle: _updateTree.interpolateValue(alpha, nextState.currentStyle, prevState.currentStyle),
	          currentVelocity: nextState.currentVelocity
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = _stripStyle2['default'](this.state.currentStyle);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var StaggeredMotion = React.createClass({
	    displayName: 'StaggeredMotion',
	
	    propTypes: {
	      defaultStyle: function defaultStyle(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `StaggeredMotion`\'s `defaultStyles`.');
	        }
	      },
	      style: function style(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `StaggeredMotion`\'s `styles`.');
	        }
	      },
	      // TOOD: warn against putting configs in here
	      defaultStyles: PropTypes.arrayOf(PropTypes.object),
	      styles: PropTypes.func.isRequired,
	      children: PropTypes.func.isRequired
	    },
	
	    getInitialState: function getInitialState() {
	      var _props2 = this.props;
	      var styles = _props2.styles;
	      var defaultStyles = _props2.defaultStyles;
	
	      var currentStyles = defaultStyles ? defaultStyles : styles();
	      return {
	        currentStyles: currentStyles,
	        currentVelocities: currentStyles.map(function (s) {
	          return mapObject(_zero2['default'], s);
	        })
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyles = state.currentStyles;
	      var currentVelocities = state.currentVelocities;
	
	      var styles = this.props.styles(currentStyles.map(_stripStyle2['default']));
	
	      var newCurrentStyles = currentStyles.map(function (currentStyle, i) {
	        return _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocities[i], styles[i]);
	      });
	      var newCurrentVelocities = currentStyles.map(function (currentStyle, i) {
	        return _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocities[i], styles[i]);
	      });
	
	      // TODO: is this right?
	      if (currentVelocities.every(function (v, k) {
	        return _noVelocity2['default'](v, currentStyles[k]);
	      }) && newCurrentVelocities.every(function (v, k) {
	        return _noVelocity2['default'](v, newCurrentStyles[k]);
	      })) {
	        this.stopAnimation();
	      }
	
	      return {
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Motion.
	      if (!this.hasUnmounted) {
	        var currentStyles = nextState.currentStyles.map(function (style, i) {
	          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[i]);
	        });
	        this.setState({
	          currentStyles: currentStyles,
	          currentVelocities: nextState.currentVelocities
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = this.state.currentStyles.map(_stripStyle2['default']);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var TransitionMotion = React.createClass({
	    displayName: 'TransitionMotion',
	
	    propTypes: {
	      defaultValue: function defaultValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('TransitionSpring\'s `defaultValue` has been changed to ' + '`defaultStyles`. Its format received a few (easy to update!) ' + 'changes as well.');
	        }
	      },
	      endValue: function endValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('TransitionSpring\'s `endValue` has been changed to `styles`. ' + 'Its format received a few (easy to update!) changes as well.');
	        }
	      },
	      defaultStyle: function defaultStyle(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `TransitionMotion`\'s `defaultStyles`.');
	        }
	      },
	      style: function style(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `TransitionMotion`\'s `styles`.');
	        }
	      },
	      // TOOD: warn against putting configs in here
	      defaultStyles: PropTypes.objectOf(PropTypes.any),
	      styles: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf(PropTypes.any.isRequired)]).isRequired,
	      willLeave: PropTypes.oneOfType([PropTypes.func]),
	      // TOOD: warn against putting configs in here
	      willEnter: PropTypes.oneOfType([PropTypes.func]),
	      children: PropTypes.func.isRequired
	    },
	
	    getDefaultProps: function getDefaultProps() {
	      return {
	        willEnter: function willEnter(key, value) {
	          return value;
	        },
	        willLeave: function willLeave() {
	          return null;
	        }
	      };
	    },
	
	    getInitialState: function getInitialState() {
	      var _props3 = this.props;
	      var styles = _props3.styles;
	      var defaultStyles = _props3.defaultStyles;
	
	      var currentStyles = undefined;
	      if (defaultStyles == null) {
	        if (typeof styles === 'function') {
	          currentStyles = styles();
	        } else {
	          currentStyles = styles;
	        }
	      } else {
	        currentStyles = defaultStyles;
	      }
	      return {
	        currentStyles: currentStyles,
	        currentVelocities: mapObject(function (s) {
	          return mapObject(_zero2['default'], s);
	        }, currentStyles)
	      };
	    },
	
	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },
	
	    animationStep: function animationStep(timestep, state) {
	      var currentStyles = state.currentStyles;
	      var currentVelocities = state.currentVelocities;
	      var _props4 = this.props;
	      var styles = _props4.styles;
	      var willEnter = _props4.willEnter;
	      var willLeave = _props4.willLeave;
	
	      if (typeof styles === 'function') {
	        styles = styles(currentStyles);
	      }
	
	      // TODO: huh?
	      var mergedStyles = styles; // set mergedStyles to styles as the default
	      var hasNewKey = false;
	
	      mergedStyles = _mergeDiff2['default'](currentStyles, styles,
	      // TODO: stop allocating like crazy in this whole code path
	      function (key) {
	        var res = willLeave(key, currentStyles[key], styles, currentStyles, currentVelocities);
	        if (res == null) {
	          // For legacy reason. We won't allow returning null soon
	          // TODO: remove, after next release
	          return null;
	        }
	
	        if (_noVelocity2['default'](currentVelocities[key], currentStyles[key]) && _hasReachedStyle2['default'](currentStyles[key], res)) {
	          return null;
	        }
	        return res;
	      });
	
	      Object.keys(mergedStyles).filter(function (key) {
	        return !currentStyles.hasOwnProperty(key);
	      }).forEach(function (key) {
	        var _extends2, _extends3;
	
	        hasNewKey = true;
	        var enterStyle = willEnter(key, mergedStyles[key], styles, currentStyles, currentVelocities);
	
	        // We can mutate this here because mergeDiff returns a new Obj
	        mergedStyles[key] = enterStyle;
	
	        currentStyles = _extends({}, currentStyles, (_extends2 = {}, _extends2[key] = enterStyle, _extends2));
	        currentVelocities = _extends({}, currentVelocities, (_extends3 = {}, _extends3[key] = mapObject(_zero2['default'], enterStyle), _extends3));
	      });
	
	      var newCurrentStyles = mapObject(function (mergedStyle, key) {
	        return _updateTree.updateCurrentStyle(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
	      }, mergedStyles);
	      var newCurrentVelocities = mapObject(function (mergedStyle, key) {
	        return _updateTree.updateCurrentVelocity(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
	      }, mergedStyles);
	
	      if (!hasNewKey && everyObj(function (v, k) {
	        return _noVelocity2['default'](v, currentStyles[k]);
	      }, currentVelocities) && everyObj(function (v, k) {
	        return _noVelocity2['default'](v, newCurrentStyles[k]);
	      }, newCurrentVelocities)) {
	        // check explanation in `Motion.animationRender`
	        this.stopAnimation(); // Nasty side effects....
	      }
	
	      return {
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities
	      };
	    },
	
	    stopAnimation: null,
	
	    // used in animationRender
	    hasUnmounted: false,
	
	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },
	
	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },
	
	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Motion.
	      if (!this.hasUnmounted) {
	        var currentStyles = mapObject(function (style, key) {
	          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[key]);
	        }, nextState.currentStyles);
	        this.setState({
	          currentStyles: currentStyles,
	          currentVelocities: nextState.currentVelocities
	        });
	      }
	    },
	
	    render: function render() {
	      var strippedStyle = mapObject(_stripStyle2['default'], this.state.currentStyles);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });
	
	  var _deprecatedSprings = _deprecatedSprings3['default'](React);
	
	  var Spring = _deprecatedSprings.Spring;
	  var TransitionSpring = _deprecatedSprings.TransitionSpring;
	
	  return { Spring: Spring, TransitionSpring: TransitionSpring, Motion: Motion, StaggeredMotion: StaggeredMotion, TransitionMotion: TransitionMotion };
	}
	
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	// currentStyle keeps the info about whether a prop is configured as a spring
	// or if it's just a random prop that happens to be present on the style
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = noVelocity;
	
	function noVelocity(currentVelocity, currentStyle) {
	  for (var key in currentVelocity) {
	    if (!currentVelocity.hasOwnProperty(key)) {
	      continue;
	    }
	    if (currentStyle[key].config && currentVelocity[key] !== 0) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = hasReachedStyle;
	
	function hasReachedStyle(currentStyle, style) {
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    var currentValue = currentStyle[key];
	    var destValue = style[key];
	    if (!destValue.config) {
	      // not a spring config
	      continue;
	    }
	    if (currentValue.config && currentValue.val !== destValue.val) {
	      return false;
	    }
	    if (!currentValue.config && currentValue !== destValue.val) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports) {

	// this function is allocation-less thanks to babel, which transforms the tail
	// calls into loops
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = mergeDiff;
	function mergeDiffArr(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
	  var _again = true;
	
	  _function: while (_again) {
	    var arrA = _x,
	        arrB = _x2,
	        collB = _x3,
	        indexA = _x4,
	        indexB = _x5,
	        onRemove = _x6,
	        accum = _x7;
	    endA = endB = keyA = keyB = fill = fill = undefined;
	    _again = false;
	
	    var endA = indexA === arrA.length;
	    var endB = indexB === arrB.length;
	    var keyA = arrA[indexA];
	    var keyB = arrB[indexB];
	    if (endA && endB) {
	      // returning null here, otherwise lint complains that we're not expecting
	      // a return value in subsequent calls. We know what we're doing.
	      return null;
	    }
	
	    if (endA) {
	      accum[keyB] = collB[keyB];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (endB) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (keyA === keyB) {
	      accum[keyA] = collB[keyA];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    if (!collB.hasOwnProperty(keyA)) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }
	
	    _x = arrA;
	    _x2 = arrB;
	    _x3 = collB;
	    _x4 = indexA + 1;
	    _x5 = indexB;
	    _x6 = onRemove;
	    _x7 = accum;
	    _again = true;
	    continue _function;
	  }
	}
	
	function mergeDiff(a, b, onRemove) {
	  var ret = {};
	  // if anyone can make this work without allocating the arrays here, we'll
	  // give you a medal
	  mergeDiffArr(Object.keys(a), Object.keys(b), b, 0, 0, onRemove, ret);
	  return ret;
	}
	
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = configAnimation;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _performanceNow = __webpack_require__(20);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(21);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	function configAnimation() {
	  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _config$timeStep = config.timeStep;
	  var timeStep = _config$timeStep === undefined ? 1 / 60 * 1000 : _config$timeStep;
	  var _config$timeScale = config.timeScale;
	  var timeScale = _config$timeScale === undefined ? 1 : _config$timeScale;
	  var _config$maxSteps = config.maxSteps;
	  var maxSteps = _config$maxSteps === undefined ? 10 : _config$maxSteps;
	  var _config$raf = config.raf;
	  var raf = _config$raf === undefined ? _raf2['default'] : _config$raf;
	  var _config$now = config.now;
	  var now = _config$now === undefined ? _performanceNow2['default'] : _config$now;
	
	  var animRunning = [];
	  var running = false;
	  var prevTime = 0;
	  var accumulatedTime = 0;
	
	  function loop() {
	    var currentTime = now();
	    var frameTime = currentTime - prevTime; // delta
	
	    prevTime = currentTime;
	    accumulatedTime += frameTime * timeScale;
	
	    if (accumulatedTime > timeStep * maxSteps) {
	      accumulatedTime = 0;
	    }
	
	    var frameNumber = Math.ceil(accumulatedTime / timeStep);
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i = animRunning[i];
	      var active = _animRunning$i.active;
	      var animationStep = _animRunning$i.animationStep;
	      var prevPrevState = _animRunning$i.prevState;
	      var prevNextState = animRunning[i].nextState;
	
	      if (!active) {
	        continue;
	      }
	
	      // Seems like because the TS sets destVals as enterVals for the first
	      // tick, we might render that value twice. We render it once, currValue is
	      // enterVal and destVal is enterVal. The next tick is faster than 16ms,
	      // so accumulatedTime (which would be about -16ms from the previous tick)
	      // is negative (-16ms + any number less than 16ms < 0). So we just render
	      // part ways towards the nextState, but that's enterVal still. We render
	      // say 75% between currValue (=== enterVal) and destValue (=== enterVal).
	      // So we render the same value a second time.
	      // The solution below is to recalculate the destination state even when
	      // you're moving partially towards it.
	      if (accumulatedTime <= 0) {
	        animRunning[i].nextState = animationStep(timeStep / 1000, prevPrevState);
	      } else {
	        for (var j = 0; j < frameNumber; j++) {
	          animRunning[i].nextState = animationStep(timeStep / 1000, prevNextState);
	          var _ref = [prevNextState, animRunning[i].nextState];
	          animRunning[i].prevState = _ref[0];
	          prevNextState = _ref[1];
	        }
	      }
	    }
	
	    accumulatedTime = accumulatedTime - frameNumber * timeStep;
	
	    // Render and filter in one iteration.
	    var alpha = 1 + accumulatedTime / timeStep;
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i2 = animRunning[i];
	      var animationRender = _animRunning$i2.animationRender;
	      var nextState = _animRunning$i2.nextState;
	      var prevState = _animRunning$i2.prevState;
	
	      // Might mutate animRunning........
	      animationRender(alpha, nextState, prevState);
	    }
	
	    animRunning = animRunning.filter(function (_ref2) {
	      var active = _ref2.active;
	      return active;
	    });
	
	    if (animRunning.length === 0) {
	      running = false;
	    } else {
	      raf(loop);
	    }
	  }
	
	  function start() {
	    if (!running) {
	      running = true;
	      prevTime = now();
	      accumulatedTime = 0;
	      raf(loop);
	    }
	  }
	
	  return function startAnimation(state, animationStep, animationRender) {
	    for (var i = 0; i < animRunning.length; i++) {
	      var val = animRunning[i];
	      if (val.animationStep === animationStep) {
	        val.active = true;
	        val.prevState = state;
	        start();
	        return val.stop;
	      }
	    }
	
	    var newAnim = {
	      animationStep: animationStep,
	      animationRender: animationRender,
	      prevState: state,
	      nextState: state,
	      active: true
	    };
	
	    newAnim.stop = function () {
	      return newAnim.active = false;
	    };
	    animRunning.push(newAnim);
	
	    start();
	
	    return newAnim.stop;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(20)
	  , global = typeof window === 'undefined' ? {} : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = global['request' + suffix]
	  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]
	
	for(var i = 0; i < vendors.length && !raf; i++) {
	  raf = global[vendors[i] + 'Request' + suffix]
	  caf = global[vendors[i] + 'Cancel' + suffix]
	      || global[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(global, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(global, arguments)
	}


/***/ },
/* 22 */
/***/ function(module, exports) {

	// used by the tree-walking updates and springs. Avoids some allocations
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = zero;
	
	function zero() {
	  return 0;
	}
	
	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.interpolateValue = interpolateValue;
	exports.updateCurrentStyle = updateCurrentStyle;
	exports.updateCurrentVelocity = updateCurrentVelocity;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _stepper = __webpack_require__(24);
	
	var _stepper2 = _interopRequireDefault(_stepper);
	
	// TODO: refactor common logic with updateCurrValue and updateCurrVelocity
	
	function interpolateValue(alpha, nextStyle, prevStyle) {
	  // might be used by a TransitionMotion, where prevStyle might not exist anymore
	  if (!prevStyle) {
	    return nextStyle;
	  }
	
	  var ret = {};
	  for (var key in nextStyle) {
	    if (!nextStyle.hasOwnProperty(key)) {
	      continue;
	    }
	
	    if (!nextStyle[key].config) {
	      ret[key] = nextStyle[key];
	      // not a spring config, not something we want to interpolate
	      continue;
	    }
	    var prevValue = prevStyle[key].config ? prevStyle[key].val : prevStyle[key];
	    ret[key] = {
	      val: nextStyle[key].val * alpha + prevValue * (1 - alpha),
	      config: nextStyle[key].config
	    };
	  }
	
	  return ret;
	}
	
	// TODO: refactor common logic with updateCurrentVelocity
	
	function updateCurrentStyle(frameRate, currentStyle, currentVelocity, style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    if (!style[key].config) {
	      ret[key] = style[key];
	      // not a spring config, not something we want to interpolate
	      continue;
	    }
	    var _style$key$config = style[key].config;
	    var k = _style$key$config[0];
	    var b = _style$key$config[1];
	
	    var val = _stepper2['default'](frameRate,
	    // might have been a non-springed prop that just became one
	    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[0];
	    ret[key] = {
	      val: val,
	      config: style[key].config
	    };
	  }
	  return ret;
	}
	
	function updateCurrentVelocity(frameRate, currentStyle, currentVelocity, style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    if (!style[key].config) {
	      // not a spring config, not something we want to interpolate
	      ret[key] = 0;
	      continue;
	    }
	    var _style$key$config2 = style[key].config;
	    var k = _style$key$config2[0];
	    var b = _style$key$config2[1];
	
	    var val = _stepper2['default'](frameRate,
	    // might have been a non-springed prop that just became one
	    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[1];
	    ret[key] = val;
	  }
	  return ret;
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	var errorMargin = 0.0001;
	
	function stepper(frameRate, x, v, destX, k, b) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * frameRate;
	  var newX = x + newV * frameRate;
	
	  if (Math.abs(newV - v) < errorMargin && Math.abs(newX - x) < errorMargin) {
	    return [destX, 0];
	  }
	
	  return [newX, newV];
	}
	
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = deprecatedSprings;
	var hasWarnedForSpring = {};
	var hasWarnedForTransitionSpring = {};
	
	function deprecatedSprings(React) {
	  var Spring = React.createClass({
	    displayName: 'Spring',
	
	    componentWillMount: function componentWillMount() {
	      if (false) {
	        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
	        if (!hasWarnedForSpring[ownerName]) {
	          hasWarnedForSpring[ownerName] = true;
	          console.error('Spring (used in %srender) has now been renamed to Motion. ' + 'Please see the release note for the upgrade path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
	        }
	      }
	    },
	
	    render: function render() {
	      return null;
	    }
	  });
	
	  var TransitionSpring = React.createClass({
	    displayName: 'TransitionSpring',
	
	    componentWillMount: function componentWillMount() {
	      if (false) {
	        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
	        if (!hasWarnedForTransitionSpring[ownerName]) {
	          hasWarnedForTransitionSpring[ownerName] = true;
	          console.error('TransitionSpring (used in %srender) has now been renamed to ' + 'TransitionMotion. Please see the release note for the upgrade ' + 'path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
	        }
	      }
	    },
	
	    render: function render() {
	      return null;
	    }
	  });
	
	  return { Spring: Spring, TransitionSpring: TransitionSpring };
	}
	
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	// turn {x: {val: 1, config: [1, 2]}, y: 2} into {x: 1, y: 2}
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = style[key].val == null ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = reorderKeys;
	
	function reorderKeys(obj, f) {
	  var newKeys = f(Object.keys(obj));
	  var ret = {};
	  for (var i = 0; i < newKeys.length; i++) {
	    var key = newKeys[i];
	    ret[key] = obj[key];
	  }
	
	  return ret;
	}
	
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(29);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	// instead of exposing {val: bla, config: bla}, use a helper
	
	function spring(val) {
	  var config = arguments.length <= 1 || arguments[1] === undefined ? _presets2['default'].noWobble : arguments[1];
	
	  return { val: val, config: config };
	}
	
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	// [stiffness, damping]
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: [170, 26], // the default
	  gentle: [120, 14],
	  wobbly: [180, 12],
	  stiff: [210, 20]
	};
	module.exports = exports["default"];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ClimbBadge = (function (_Component) {
	    _inherits(ClimbBadge, _Component);
	
	    function ClimbBadge() {
	        _classCallCheck(this, ClimbBadge);
	
	        _get(Object.getPrototypeOf(ClimbBadge.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(ClimbBadge, [{
	        key: 'render',
	        value: function render() {
	
	            var logo = __webpack_require__(31);
	
	            return _react2['default'].createElement('a', { href: 'http://climb.social/',
	                className: 'climb-social-badge',
	                dangerouslySetInnerHTML: { __html: logo } });
	        }
	    }]);
	
	    return ClimbBadge;
	})(_react.Component);
	
	exports['default'] = ClimbBadge;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<svg viewBox=\"0 0 2681 814\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\"><title>Climb Logo Beta</title><desc>Created with Sketch.</desc><defs></defs><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\"><g id=\"Climb-Logo-Beta\" sketch:type=\"MSArtboardGroup\" fill=\"#19374D\"><g id=\"cli----b.social-+-Path-Copy-+-Type-something-Copy-Copy-Copy-Copy-Copy\" sketch:type=\"MSLayerGroup\" transform=\"translate(206.000000, 249.000000)\"><g id=\"cli----b.social-+-Path-Copy\" sketch:type=\"MSShapeGroup\"><path d=\"M723.374207,187.442211 L767.027641,337.383575 C767.510889,341.265552 771.860124,345.147529 776.209359,345.147529 L833.232664,345.147529 C839.031644,345.147529 843.380879,340.780305 842.414383,334.472092 L739.482485,8.38601982 C738.999237,4.01879564 734.650002,0.622065728 730.784015,0.622065728 L723.052041,0.622065728 C720.6358,0.622065728 716.286565,2.56305425 714.83682,5.47453704 L643.514302,209.019062 L576.494003,105.431788 C573.721058,101.145895 567.342539,97.6714919 562.2556,97.6714919 L552.179033,97.6714919 C547.088326,97.6714919 541.529384,101.558749 539.770061,106.334187 L454.980068,336.484833 C453.21749,341.269108 455.927086,345.147529 461.014102,345.147529 L522.138067,345.147529 C527.23315,345.147529 532.791054,341.261733 534.552797,336.466171 L571.473144,235.966924 L642.108528,346.107712 C643.487141,348.257363 646.667092,350 649.212307,350 L659.971412,350 C662.516108,350 665.282044,348.045078 666.141982,345.653918 L683.827261,296.477872 L723.374207,187.442211 Z\" id=\"Path-Copy\"></path><path d=\"M0.145213441,247.085101 C0.145213441,305.23404 49.0872377,348.845745 104.32873,348.845745 C139.218094,348.845745 164.415968,335.277659 182.345224,308.141487 C185.737246,303.295742 183.314373,298.449997 178.953203,294.573401 L149.878733,269.375527 C146.971286,266.952655 142.610116,267.921804 139.218094,271.313825 C131.464902,279.067017 123.227136,286.335635 106.267028,286.335635 C84.9457505,286.335635 68.4702176,268.890953 68.4702176,247.085101 C68.4702176,225.763823 85.9148995,207.834566 107.236177,207.834566 C118.381391,207.834566 128.557455,213.164886 135.341498,220.433503 C137.764371,222.856376 143.579265,223.825525 146.002137,221.402652 L175.076607,193.781906 C179.437777,189.90531 180.891501,184.57499 177.49948,180.21382 C159.085649,157.923393 135.341498,145.324456 104.813305,145.324456 C49.5718122,145.324456 0.145213441,189.90531 0.145213441,247.085101 L0.145213441,247.085101 Z M218.688312,334.793085 C218.688312,339.63883 223.049482,344 227.895227,344 L281.198422,344 C286.044167,344 290.405337,339.63883 290.405337,334.793085 L290.405337,14.0047672 C290.405337,9.15902226 286.044167,4.79785179 281.198422,4.79785179 L227.895227,4.79785179 C223.049482,4.79785179 218.688312,9.15902226 218.688312,14.0047672 L218.688312,334.793085 Z M378.113321,91.5366868 C399.434599,91.5366868 416.879281,74.5765794 416.879281,53.2553015 C416.879281,31.9340236 399.434599,14.4893417 378.113321,14.4893417 C356.792044,14.4893417 339.831936,31.9340236 339.831936,53.2553015 C339.831936,74.5765794 356.792044,91.5366868 378.113321,91.5366868 L378.113321,91.5366868 Z M342.739383,334.793085 C342.739383,339.63883 347.100554,344 351.946299,344 L405.249493,344 C410.095238,344 414.456409,339.63883 414.456409,334.793085 L414.456409,159.377116 C414.456409,154.046797 410.095238,150.170201 405.249493,150.170201 L351.946299,150.170201 C347.100554,150.170201 342.739383,154.046797 342.739383,159.377116 L342.739383,334.793085 Z M889.15431,334.793085 C889.15431,339.63883 893.515481,344 898.361226,344 L921.136227,344 C925.981972,344 929.373994,339.63883 931.312292,334.30851 L937.127185,318.317552 C937.127185,318.317552 959.417612,348.845745 1002.06017,348.845745 C1056.81709,348.845745 1098.00592,302.811168 1098.00592,247.085101 C1098.00592,178.760096 1053.42506,145.324456 1001.57559,145.324456 C985.100061,145.324456 967.170804,151.13935 961.35591,154.531371 L961.35591,14.0047672 C961.35591,9.15902226 956.99474,4.79785179 952.148995,4.79785179 L898.361226,4.79785179 C893.515481,4.79785179 889.15431,9.15902226 889.15431,14.0047672 L889.15431,334.793085 Z M953.602718,246.600526 C953.602718,224.794674 970.078251,207.834566 992.368678,207.834566 C1014.65911,207.834566 1031.61921,224.794674 1031.61921,246.600526 C1031.61921,268.890953 1014.65911,286.335635 992.368678,286.335635 C970.078251,286.335635 953.602718,268.890953 953.602718,246.600526 L953.602718,246.600526 Z M1134.25645,321.224999 C1134.25645,336.246808 1146.85539,348.845745 1161.8772,348.845745 C1177.38358,348.845745 1189.49795,336.246808 1189.49795,321.224999 C1189.49795,305.718615 1177.38358,293.604252 1161.8772,293.604252 C1146.85539,293.604252 1134.25645,305.718615 1134.25645,321.224999 L1134.25645,321.224999 Z M1236.0171,332.854787 C1245.70859,340.607979 1269.93731,348.845745 1301.91923,348.845745 C1356.67615,348.845745 1383.81232,321.224999 1383.81232,287.304784 C1383.81232,248.538824 1356.67615,233.03244 1317.42561,219.464354 C1300.95008,213.64946 1295.61976,208.803715 1295.61976,203.95797 C1295.61976,198.627651 1299.98093,197.173927 1306.2804,197.173927 C1325.1788,197.173927 1347.46923,208.319141 1347.46923,208.319141 C1351.34583,209.772864 1356.19157,208.319141 1357.6453,205.411694 L1375.57455,172.460628 C1378.482,167.614883 1375.08998,163.253712 1370.72881,160.346265 C1360.06817,153.562223 1336.80859,145.324456 1306.2804,145.324456 C1253.94635,145.324456 1230.68678,171.491479 1230.68678,203.95797 C1230.68678,234.001589 1247.16231,255.807441 1284.95912,268.890953 C1309.67242,277.613294 1312.57987,284.397337 1312.57987,289.243082 C1312.57987,295.057976 1308.2187,297.965423 1303.37295,297.965423 C1282.53625,297.965423 1259.76125,285.366486 1259.76125,285.366486 C1255.88465,283.428188 1251.03891,286.335635 1249.58518,289.243082 L1232.62508,322.678722 C1230.2022,327.039893 1232.62508,329.94734 1236.0171,332.854787 L1236.0171,332.854787 Z M1407.55647,246.600526 C1407.55647,302.326593 1453.10647,348.845745 1508.34796,348.845745 C1563.58946,348.845745 1609.13946,302.326593 1609.13946,246.600526 C1609.13946,191.843608 1563.58946,145.324456 1508.34796,145.324456 C1453.10647,145.324456 1407.55647,191.843608 1407.55647,246.600526 L1407.55647,246.600526 Z M1470.06658,246.600526 C1470.06658,225.279248 1487.02669,207.834566 1508.34796,207.834566 C1529.66924,207.834566 1546.62935,225.279248 1546.62935,246.600526 C1546.62935,268.406378 1529.66924,286.335635 1508.34796,286.335635 C1487.02669,286.335635 1470.06658,268.406378 1470.06658,246.600526 L1470.06658,246.600526 Z M1631.42989,247.085101 C1631.42989,305.23404 1680.37191,348.845745 1735.6134,348.845745 C1770.50277,348.845745 1795.70064,335.277659 1813.6299,308.141487 C1817.02192,303.295742 1814.59905,298.449997 1810.23788,294.573401 L1781.16341,269.375527 C1778.25596,266.952655 1773.89479,267.921804 1770.50277,271.313825 C1762.74958,279.067017 1754.51181,286.335635 1737.5517,286.335635 C1716.23042,286.335635 1699.75489,268.890953 1699.75489,247.085101 C1699.75489,225.763823 1717.19957,207.834566 1738.52085,207.834566 C1749.66606,207.834566 1759.84213,213.164886 1766.62617,220.433503 C1769.04904,222.856376 1774.86394,223.825525 1777.28681,221.402652 L1806.36128,193.781906 C1810.72245,189.90531 1812.17617,184.57499 1808.78415,180.21382 C1790.37032,157.923393 1766.62617,145.324456 1736.09798,145.324456 C1680.85649,145.324456 1631.42989,189.90531 1631.42989,247.085101 L1631.42989,247.085101 Z M1885.34692,91.5366868 C1906.6682,91.5366868 1924.11288,74.5765794 1924.11288,53.2553015 C1924.11288,31.9340236 1906.6682,14.4893417 1885.34692,14.4893417 C1864.02565,14.4893417 1847.06554,31.9340236 1847.06554,53.2553015 C1847.06554,74.5765794 1864.02565,91.5366868 1885.34692,91.5366868 L1885.34692,91.5366868 Z M1849.97299,334.793085 C1849.97299,339.63883 1854.33416,344 1859.1799,344 L1912.4831,344 C1917.32884,344 1921.69001,339.63883 1921.69001,334.793085 L1921.69001,159.377116 C1921.69001,154.046797 1917.32884,150.170201 1912.4831,150.170201 L1859.1799,150.170201 C1854.33416,150.170201 1849.97299,154.046797 1849.97299,159.377116 L1849.97299,334.793085 Z M1960.94055,284.881911 C1960.94055,323.163297 1989.53044,348.845745 2027.81183,348.845745 C2058.34002,348.845745 2075.30013,334.793085 2086.44534,324.61702 L2093.22938,337.700532 C2095.65226,343.030851 2099.04428,344 2101.95172,344 L2123.273,344 C2128.11875,344 2132.47992,339.63883 2132.47992,334.793085 L2132.47992,227.702121 C2132.47992,170.52233 2110.67407,145.324456 2050.58683,145.324456 C2024.4198,145.324456 1990.49959,151.13935 1986.13842,152.593074 C1981.77725,154.046797 1977.41608,157.438818 1978.8698,165.676585 L1983.23097,196.204778 C1984.20012,203.473396 1987.59214,208.803715 1994.86076,206.380843 C2007.4597,202.504247 2030.2347,199.112225 2043.31821,199.112225 C2066.57779,199.112225 2069.48523,208.803715 2069.48523,227.702121 C2069.48523,227.702121 2053.97885,219.948929 2032.173,219.948929 C1988.07672,219.948929 1960.94055,247.569675 1960.94055,284.881911 L1960.94055,284.881911 Z M2023.93523,280.036166 C2023.93523,268.890953 2033.14215,259.684037 2044.77193,259.684037 C2056.40172,259.684037 2065.60864,268.890953 2066.09321,280.036166 C2066.09321,291.665954 2056.40172,301.357444 2044.77193,301.357444 C2033.14215,301.357444 2023.93523,291.665954 2023.93523,280.036166 L2023.93523,280.036166 Z M2181.90652,334.793085 C2181.90652,339.63883 2186.26769,344 2191.11343,344 L2244.41663,344 C2249.26237,344 2253.62354,339.63883 2253.62354,334.793085 L2253.62354,14.0047672 C2253.62354,9.15902226 2249.26237,4.79785179 2244.41663,4.79785179 L2191.11343,4.79785179 C2186.26769,4.79785179 2181.90652,9.15902226 2181.90652,14.0047672 L2181.90652,334.793085 Z\" id=\"cli----b.social\"></path></g></g></g></g></svg>"

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _climbSocial = __webpack_require__(4);
	
	var _climbSocial2 = _interopRequireDefault(_climbSocial);
	
	var _Slideshow = __webpack_require__(33);
	
	var _Slideshow2 = _interopRequireDefault(_Slideshow);
	
	var SlideshowContainer = (function (_Component) {
	    _inherits(SlideshowContainer, _Component);
	
	    function SlideshowContainer(props) {
	        _classCallCheck(this, SlideshowContainer);
	
	        _get(Object.getPrototypeOf(SlideshowContainer.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            items: {}
	        };
	    }
	
	    _createClass(SlideshowContainer, [{
	        key: 'init',
	        value: function init() {
	            var _this = this;
	
	            if (!this.props.collectionId) {
	                return;
	            }
	
	            _climbSocial2['default'].getStream(this.props.collectionId).subscribe(function (items) {
	
	                var mappedItems = {};
	                items.map(function (item) {
	                    mappedItems[item.id] = item;
	                });
	
	                _this.setState({
	                    items: mappedItems
	                });
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.init();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(_Slideshow2['default'], { items: this.state.items });
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            collectionId: _react.PropTypes.string.isRequired
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            collectionId: '561ba63445284e1740e016f7'
	        },
	        enumerable: true
	    }]);
	
	    return SlideshowContainer;
	})(_react.Component);
	
	exports['default'] = SlideshowContainer;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _slide = __webpack_require__(34);
	
	var _slide2 = _interopRequireDefault(_slide);
	
	var _reactMotion = __webpack_require__(14);
	
	var Slideshow = (function (_Component) {
	    _inherits(Slideshow, _Component);
	
	    function Slideshow(props) {
	        _classCallCheck(this, Slideshow);
	
	        _get(Object.getPrototypeOf(Slideshow.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            currentItemIndex: 0
	        };
	    }
	
	    _createClass(Slideshow, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var delay = this.props.delay;
	
	            this.timer = setInterval(this.nextSlide.bind(this), delay * 1000);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearInterval(this.timer);
	        }
	    }, {
	        key: 'nextSlide',
	        value: function nextSlide() {
	            var slideshowLength = Object.keys(this.props.items).length;
	            var newIndex = Math.floor(Math.random() * slideshowLength);
	            this.setState({
	                currentItemIndex: newIndex
	            });
	        }
	    }, {
	        key: 'getStyles',
	        value: function getStyles() {
	            var _this = this;
	
	            var currentKey = Object.keys(this.props.items)[this.state.currentItemIndex];
	            var configs = {};
	            Object.keys(this.props.items).map(function (key) {
	                configs[key] = {
	                    opacity: (0, _reactMotion.spring)(0),
	                    scale: (0, _reactMotion.spring)(0),
	                    zIndex: -5,
	                    item: _this.props.items[key]
	                };
	
	                if (key === currentKey) {
	                    Object.assign(configs[key], {
	                        opacity: (0, _reactMotion.spring)(1),
	                        scale: (0, _reactMotion.spring)(1),
	                        zIndex: 1
	                    });
	                }
	            });
	            return configs;
	        }
	    }, {
	        key: 'willEnter',
	        value: function willEnter(key) {
	            return {
	                opacity: (0, _reactMotion.spring)(0),
	                scale: (0, _reactMotion.spring)(0),
	                zIndex: -5,
	                item: this.props.items[key]
	            };
	        }
	    }, {
	        key: 'willLeave',
	        value: function willLeave(key, style) {
	            return {
	                opacity: (0, _reactMotion.spring)(0),
	                scale: (0, _reactMotion.spring)(0),
	                zIndex: -5,
	                item: style.item
	            };
	        }
	    }, {
	        key: 'renderSlide',
	        value: function renderSlide(key, itemValues) {
	            var item = itemValues.item;
	
	            var styleConfig = _objectWithoutProperties(itemValues, ['item']);
	
	            var style = {
	                opacity: styleConfig.opacity,
	                zIndex: Math.floor(styleConfig.zIndex),
	                transform: 'scale(' + styleConfig.scale + ')'
	            };
	
	            return _react2['default'].createElement(_slide2['default'], { key: key,
	                item: item,
	                style: style });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2['default'].createElement(
	                _reactMotion.TransitionMotion,
	                {
	                    styles: this.getStyles.bind(this)(),
	                    willEnter: this.willEnter.bind(this),
	                    willLeave: this.willLeave.bind(this) },
	                function (values) {
	                    return _react2['default'].createElement(
	                        'div',
	                        { className: 'climb__slideshow__container' },
	                        Object.keys(values).map(function (key) {
	                            var itemValues = values[key];
	                            return _this2.renderSlide(key, itemValues);
	                        })
	                    );
	                }
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            items: _react.PropTypes.object.isRequired,
	            delay: _react.PropTypes.number
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            delay: 5
	        },
	        enumerable: true
	    }]);
	
	    return Slideshow;
	})(_react.Component);
	
	exports['default'] = Slideshow;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _commonMessage = __webpack_require__(12);
	
	var _commonMessage2 = _interopRequireDefault(_commonMessage);
	
	var _commonImage = __webpack_require__(11);
	
	var _commonImage2 = _interopRequireDefault(_commonImage);
	
	var Slide = (function (_Component) {
	    _inherits(Slide, _Component);
	
	    function Slide(props) {
	        _classCallCheck(this, Slide);
	
	        _get(Object.getPrototypeOf(Slide.prototype), 'constructor', this).call(this, props);
	    }
	
	    _createClass(Slide, [{
	        key: 'createImage',
	        value: function createImage() {
	            var image = this.props.item.image;
	
	            if (image !== null) {
	                var src = image.url;
	                var width = image.width;
	                var height = image.height;
	
	                return _react2['default'].createElement(_commonImage2['default'], { src: src,
	                    width: width,
	                    height: height });
	            }
	            return null;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var item = this.props.item;
	
	            var image = this.createImage();
	
	            return _react2['default'].createElement(
	                'div',
	                { className: 'climb-slideshow__slide',
	                    style: this.props.style },
	                image,
	                _react2['default'].createElement(_commonMessage2['default'], { body: item.message })
	            );
	        }
	    }], [{
	        key: 'propTypes',
	        value: {
	            item: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	    }]);
	
	    return Slide;
	})(_react.Component);
	
	exports['default'] = Slide;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js?browsers=last 2 version!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports
	
	
	// module
	exports.push([module.id, ".climb__wall {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  font-size: 100%; }\n\n.climb__tile {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  height: 425px;\n  box-sizing: border-box;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 20px;\n  overflow: hidden;\n  text-align: left;\n  border-radius: 7px;\n  background-color: #f6f6f6;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.climb__tile__content {\n  z-index: 1;\n  padding: 26px;\n  background-color: #f6f6f6; }\n  .climb__tile--has-no-image .climb__tile__content {\n    height: 100%;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    box-sizing: border-box; }\n\n.climb__image {\n  display: block;\n  max-width: 100%; }\n  .climb__tile .climb__image {\n    position: absolute;\n    top: 0;\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px; }\n\n.climb__tile__message {\n  z-index: 1;\n  margin-bottom: 24px; }\n  .climb__tile__message > a {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 260px;\n    display: inline-block;\n    vertical-align: bottom; }\n  .climb__tile--has-no-image .climb__tile__message {\n    font-size: 185%; }\n\n.climb__tile__author {\n  display: block;\n  margin: -10px; }\n  .climb__tile__author img {\n    border-radius: 25px;\n    width: 34px; }\n  .climb__tile__author .climb__tile__author__username {\n    display: inline-block;\n    margin: 0 0 0 10px;\n    line-height: 34px;\n    vertical-align: top; }\n\n.climb-social-badge {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 9;\n  background-color: #A9CAE2;\n  width: 200px;\n  height: 66px;\n  border-radius: 5px; }\n  .climb-social-badge > span {\n    position: absolute !important;\n    top: -9999px !important;\n    left: -9999px !important; }\n\n.climb-slideshow {\n  height: 100vh;\n  width: 100vw; }\n\n.climb__slideshow__container {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.climb-slideshow__slide {\n  position: absolute;\n  top: 10%;\n  right: 10%;\n  bottom: 10%;\n  left: 10%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n", ""]);
	
	// exports


/***/ },
/* 37 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZGMzMTE5MzY4YjU3OWE4MzEzNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93YWxsL1dhbGxDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL34vY2xpbWItc29jaWFsL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jbGltYi1zb2NpYWwvfi9yeC1saXRlL3J4LmxpdGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mZXRjaC1qc29ucC9idWlsZC9mZXRjaC1qc29ucC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93YWxsL1dhbGwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dhbGwvVGlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0ltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vTWVzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0F1dGhvci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3JlYWN0LW1vdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvbm9WZWxvY2l0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvaGFzUmVhY2hlZFN0eWxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9tZXJnZURpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2FuaW1hdGlvbkxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvemVyby5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvdXBkYXRlVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvZGVwcmVjYXRlZFNwcmluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3N0cmlwU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9zcHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3ByZXNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2FsbC9DbGltYkJhZGdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2NsaW1iX2xvZ28uc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlc2hvdy9TbGlkZXNob3dDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlc2hvdy9TbGlkZXNob3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlc2hvdy9zbGlkZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL21haW4uc2Nzcz8zYWRiIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7a0NDdENrQixDQUFPOzs7O3FDQUNKLENBQVc7Ozs7d0RBRU4sQ0FBaUM7Ozs7a0VBQzVCLEVBQTJDOzs7O3FCQUVuRSxFQUFtQjs7QUFFMUIsS0FBSSxNQUFNLEVBQUU7QUFDUixXQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDOztBQUVsQyxTQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRXhELFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3BDLGFBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixhQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUNoRCxhQUFNLEtBQUssR0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFtQyxnQ0FBZ0M7QUFDbkUsd0NBQXVDLG9DQUFvQztBQUMzRSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLDhCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLFdBQVU7QUFDVjs7QUFFQSxxQzs7Ozs7O0FDcmNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ25CQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUMzQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7O0FBRUEsOEJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LWNsaW1iLXNvY2lhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiUmVhY3RET01cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJSZWFjdERPTVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC1jbGltYi1zb2NpYWxcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIlJlYWN0RE9NXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFjdC1jbGltYi1zb2NpYWxcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSwgcm9vdFtcIlJlYWN0RE9NXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNkYzMxMTkzNjhiNTc5YTgzMTM1XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgV2FsbENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvd2FsbC9XYWxsQ29udGFpbmVyJztcbmltcG9ydCBTbGlkZXNob3dDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlc2hvdy9TbGlkZXNob3dDb250YWluZXInO1xuXG5pbXBvcnQgJy4vc3R5bGUvbWFpbi5zY3NzJztcblxuaWYgKHdpbmRvdykge1xuICAgIHdpbmRvdy5DbGltYiA9IHdpbmRvdy5DbGltYiB8fCB7fTtcblxuICAgIGNvbnN0ICR3YWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGltYi13YWxsJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICR3YWxscy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCAkaXRlbSA9ICR3YWxsc1tpXTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbklkID0gJGl0ZW0uZGF0YXNldC5jb2xsZWN0aW9uSWQ7XG4gICAgICAgIGNvbnN0IGxpbWl0ID0gJGl0ZW0uZGF0YXNldC5saW1pdDtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxDb250YWluZXIsIHtjb2xsZWN0aW9uSWQsIGxpbWl0fSksXG4gICAgICAgICAgICAkaXRlbVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0ICRzbGlkZXNob3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaW1iLXNsaWRlc2hvdycpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2xpZGVzaG93cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCAkaXRlbSA9ICRzbGlkZXNob3dzW2ldO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uSWQgPSAkaXRlbS5kYXRhc2V0LmNvbGxlY3Rpb25JZDtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNsaWRlc2hvd0NvbnRhaW5lciwge2NvbGxlY3Rpb25JZH0pLFxuICAgICAgICAgICAgJGl0ZW1cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7V2FsbENvbnRhaW5lcn07XG5leHBvcnQge1dhbGx9IGZyb20gJy4vY29tcG9uZW50cy93YWxsL1dhbGwnO1xuZXhwb3J0IHtUaWxlfSBmcm9tICcuL2NvbXBvbmVudHMvd2FsbC9UaWxlJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGltYiBmcm9tICdjbGltYi1zb2NpYWwnO1xuaW1wb3J0IFdhbGwgZnJvbSAnLi9XYWxsJztcbmltcG9ydCBCYWRnZSBmcm9tICcuL0NsaW1iQmFkZ2UnO1xuXG5cbmNsYXNzIFdhbGxDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBpdGVtczoge31cbiAgICB9O1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY29sbGVjdGlvbklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGxpbWl0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgICBQcm9wVHlwZXMuc3RyaW5nXG4gICAgICAgIF0pXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbGxlY3Rpb25JZDogJzU2MWJhNjM0NDUyODRlMTc0MGUwMTZmNycsXG4gICAgICAgIGxpbWl0OiAzMFxuICAgIH07XG5cbiAgICBpbml0KCkge1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jb2xsZWN0aW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaW1iXG4gICAgICAgICAgICAuZ2V0U3RyZWFtKHRoaXMucHJvcHMuY29sbGVjdGlvbklkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShpdGVtcyA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXhTaXplID0gcGFyc2VJbnQodGhpcy5wcm9wcy5saW1pdCwgMCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRJdGVtcyA9IHt9O1xuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZSgwLCBtYXhTaXplKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zW2l0ZW0uaWRdID0gaXRlbTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogbWFwcGVkSXRlbXNcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGNiO1xuICAgICAgICBpZiAod2luZG93LkNsaW1iICYmIHdpbmRvdy5DbGltYi5vblVwZGF0ZSkge1xuICAgICAgICAgICAgY2IgPSB3aW5kb3cuQ2xpbWIub25VcGRhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub29wXG4gICAgICAgICAgICBjYiA9ICgpID0+IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2IoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxXYWxsIGl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfS8+XG4gICAgICAgICAgICAgICAgPEJhZGdlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxDb250YWluZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3dhbGwvV2FsbENvbnRhaW5lci5qc3hcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yeExpdGUgPSByZXF1aXJlKCdyeC1saXRlJyk7XG5cbnZhciBfZmV0Y2hKc29ucCA9IHJlcXVpcmUoJ2ZldGNoLWpzb25wJyk7XG5cbnZhciBfZmV0Y2hKc29ucDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mZXRjaEpzb25wKTtcblxudmFyIGdldFN0cmVhbSA9IGZ1bmN0aW9uIGdldFN0cmVhbShjb2xsZWN0aW9uSWQpIHtcblxuICAgIHZhciBwb2xsUmF0ZSA9IDUgKiAxMDAwO1xuXG4gICAgdmFyIHJlcXVlc3RTdHJlYW0gPSBfcnhMaXRlLk9ic2VydmFibGUuanVzdCgnaHR0cDovL2FwcC5jbGltYi5zb2NpYWwvYXBpL3YxL2NvbGxlY3Rpb25zLycgKyBjb2xsZWN0aW9uSWQpO1xuXG4gICAgdmFyIHVwZGF0ZVN0cmVhbSA9IF9yeExpdGUuT2JzZXJ2YWJsZS5pbnRlcnZhbChwb2xsUmF0ZSkuc3RhcnRXaXRoKG51bGwpO1xuXG4gICAgdmFyIHJlc3BvbnNlU3RyZWFtID0gdXBkYXRlU3RyZWFtLmNvbWJpbmVMYXRlc3QocmVxdWVzdFN0cmVhbSwgZnVuY3Rpb24gKHRpY2ssIHVybCkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH0pLmZsYXRNYXAoZnVuY3Rpb24gKGJhc2VVcmwpIHtcblxuICAgICAgICB2YXIgcmVxdWVzdFVybCA9ICcnICsgYmFzZVVybDtcblxuICAgICAgICByZXR1cm4gX3J4TGl0ZS5PYnNlcnZhYmxlLmZyb21Qcm9taXNlKCgwLCBfZmV0Y2hKc29ucDJbJ2RlZmF1bHQnXSkocmVxdWVzdFVybCkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2VTdHJlYW07XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gICAgZ2V0U3RyZWFtOiBnZXRTdHJlYW1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsaW1iLXNvY2lhbC9kaXN0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQsIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG47KGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcblxuICB2YXIgb2JqZWN0VHlwZXMgPSB7XG4gICAgJ2Z1bmN0aW9uJzogdHJ1ZSxcbiAgICAnb2JqZWN0JzogdHJ1ZVxuICB9O1xuXG4gIGZ1bmN0aW9uIGNoZWNrR2xvYmFsKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5PYmplY3QgPT09IE9iamVjdCkgPyB2YWx1ZSA6IG51bGw7XG4gIH1cblxuICB2YXIgZnJlZUV4cG9ydHMgPSAob2JqZWN0VHlwZXNbdHlwZW9mIGV4cG9ydHNdICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUpID8gZXhwb3J0cyA6IG51bGw7XG4gIHZhciBmcmVlTW9kdWxlID0gKG9iamVjdFR5cGVzW3R5cGVvZiBtb2R1bGVdICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlKSA/IG1vZHVsZSA6IG51bGw7XG4gIHZhciBmcmVlR2xvYmFsID0gY2hlY2tHbG9iYWwoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSAmJiB0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiBnbG9iYWwpO1xuICB2YXIgZnJlZVNlbGYgPSBjaGVja0dsb2JhbChvYmplY3RUeXBlc1t0eXBlb2Ygc2VsZl0gJiYgc2VsZik7XG4gIHZhciBmcmVlV2luZG93ID0gY2hlY2tHbG9iYWwob2JqZWN0VHlwZXNbdHlwZW9mIHdpbmRvd10gJiYgd2luZG93KTtcbiAgdmFyIG1vZHVsZUV4cG9ydHMgPSAoZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzKSA/IGZyZWVFeHBvcnRzIDogbnVsbDtcbiAgdmFyIHRoaXNHbG9iYWwgPSBjaGVja0dsb2JhbChvYmplY3RUeXBlc1t0eXBlb2YgdGhpc10gJiYgdGhpcyk7XG4gIHZhciByb290ID0gZnJlZUdsb2JhbCB8fCAoKGZyZWVXaW5kb3cgIT09ICh0aGlzR2xvYmFsICYmIHRoaXNHbG9iYWwud2luZG93KSkgJiYgZnJlZVdpbmRvdykgfHwgZnJlZVNlbGYgfHwgdGhpc0dsb2JhbCB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4gIHZhciBSeCA9IHtcbiAgICBpbnRlcm5hbHM6IHt9LFxuICAgIGNvbmZpZzoge1xuICAgICAgUHJvbWlzZTogcm9vdC5Qcm9taXNlXG4gICAgfSxcbiAgICBoZWxwZXJzOiB7IH1cbiAgfTtcblxuICAvLyBEZWZhdWx0c1xuICB2YXIgbm9vcCA9IFJ4LmhlbHBlcnMubm9vcCA9IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBpZGVudGl0eSA9IFJ4LmhlbHBlcnMuaWRlbnRpdHkgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSxcbiAgICBkZWZhdWx0Tm93ID0gUnguaGVscGVycy5kZWZhdWx0Tm93ID0gRGF0ZS5ub3csXG4gICAgZGVmYXVsdENvbXBhcmVyID0gUnguaGVscGVycy5kZWZhdWx0Q29tcGFyZXIgPSBmdW5jdGlvbiAoeCwgeSkgeyByZXR1cm4gaXNFcXVhbCh4LCB5KTsgfSxcbiAgICBkZWZhdWx0U3ViQ29tcGFyZXIgPSBSeC5oZWxwZXJzLmRlZmF1bHRTdWJDb21wYXJlciA9IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiB4ID4geSA/IDEgOiAoeCA8IHkgPyAtMSA6IDApOyB9LFxuICAgIGRlZmF1bHRLZXlTZXJpYWxpemVyID0gUnguaGVscGVycy5kZWZhdWx0S2V5U2VyaWFsaXplciA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnRvU3RyaW5nKCk7IH0sXG4gICAgZGVmYXVsdEVycm9yID0gUnguaGVscGVycy5kZWZhdWx0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7IHRocm93IGVycjsgfSxcbiAgICBpc1Byb21pc2UgPSBSeC5oZWxwZXJzLmlzUHJvbWlzZSA9IGZ1bmN0aW9uIChwKSB7IHJldHVybiAhIXAgJiYgdHlwZW9mIHAuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwLnRoZW4gPT09ICdmdW5jdGlvbic7IH0sXG4gICAgaXNGdW5jdGlvbiA9IFJ4LmhlbHBlcnMuaXNGdW5jdGlvbiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciBpc0ZuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJyB8fCBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gZmFsbGJhY2sgZm9yIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpXG4gICAgICBpZiAoaXNGbigveC8pKSB7XG4gICAgICAgIGlzRm4gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXNGbjtcbiAgICB9KCkpO1xuXG4gICAgZnVuY3Rpb24gY2xvbmVBcnJheShhcnIpIHtcbiAgICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoLCBhID0gbmV3IEFycmF5KGxlbik7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYVtpXSA9IGFycltpXTsgfVxuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gIHZhciBlcnJvck9iaiA9IHtlOiB7fX07XG4gIFxuICBmdW5jdGlvbiB0cnlDYXRjaGVyR2VuKHRyeUNhdGNoVGFyZ2V0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHRyeUNhdGNoZXIoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHJ5Q2F0Y2hUYXJnZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3JPYmouZSA9IGU7XG4gICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIHRyeUNhdGNoID0gUnguaW50ZXJuYWxzLnRyeUNhdGNoID0gZnVuY3Rpb24gdHJ5Q2F0Y2goZm4pIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZuIG11c3QgYmUgYSBmdW5jdGlvbicpOyB9XG4gICAgcmV0dXJuIHRyeUNhdGNoZXJHZW4oZm4pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHRocm93ZXIoZSkge1xuICAgIHRocm93IGU7XG4gIH1cblxuICBSeC5jb25maWcubG9uZ1N0YWNrU3VwcG9ydCA9IGZhbHNlO1xuICB2YXIgaGFzU3RhY2tzID0gZmFsc2UsIHN0YWNrcyA9IHRyeUNhdGNoKGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKCk7IH0pKCk7XG4gIGhhc1N0YWNrcyA9ICEhc3RhY2tzLmUgJiYgISFzdGFja3MuZS5zdGFjaztcblxuICAvLyBBbGwgY29kZSBhZnRlciB0aGlzIHBvaW50IHdpbGwgYmUgZmlsdGVyZWQgZnJvbSBzdGFjayB0cmFjZXMgcmVwb3J0ZWQgYnkgUnhKU1xuICB2YXIgclN0YXJ0aW5nTGluZSA9IGNhcHR1cmVMaW5lKCksIHJGaWxlTmFtZTtcblxuICB2YXIgU1RBQ0tfSlVNUF9TRVBBUkFUT1IgPSAnRnJvbSBwcmV2aW91cyBldmVudDonO1xuXG4gIGZ1bmN0aW9uIG1ha2VTdGFja1RyYWNlTG9uZyhlcnJvciwgb2JzZXJ2YWJsZSkge1xuICAgIC8vIElmIHBvc3NpYmxlLCB0cmFuc2Zvcm0gdGhlIGVycm9yIHN0YWNrIHRyYWNlIGJ5IHJlbW92aW5nIE5vZGUgYW5kIFJ4SlNcbiAgICAvLyBjcnVmdCwgdGhlbiBjb25jYXRlbmF0aW5nIHdpdGggdGhlIHN0YWNrIHRyYWNlIG9mIGBvYnNlcnZhYmxlYC5cbiAgICBpZiAoaGFzU3RhY2tzICYmXG4gICAgICAgIG9ic2VydmFibGUuc3RhY2sgJiZcbiAgICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJlxuICAgICAgICBlcnJvciAhPT0gbnVsbCAmJlxuICAgICAgICBlcnJvci5zdGFjayAmJlxuICAgICAgICBlcnJvci5zdGFjay5pbmRleE9mKFNUQUNLX0pVTVBfU0VQQVJBVE9SKSA9PT0gLTFcbiAgICApIHtcbiAgICAgIHZhciBzdGFja3MgPSBbXTtcbiAgICAgIGZvciAodmFyIG8gPSBvYnNlcnZhYmxlOyAhIW87IG8gPSBvLnNvdXJjZSkge1xuICAgICAgICBpZiAoby5zdGFjaykge1xuICAgICAgICAgIHN0YWNrcy51bnNoaWZ0KG8uc3RhY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdGFja3MudW5zaGlmdChlcnJvci5zdGFjayk7XG5cbiAgICAgIHZhciBjb25jYXRlZFN0YWNrcyA9IHN0YWNrcy5qb2luKCdcXG4nICsgU1RBQ0tfSlVNUF9TRVBBUkFUT1IgKyAnXFxuJyk7XG4gICAgICBlcnJvci5zdGFjayA9IGZpbHRlclN0YWNrU3RyaW5nKGNvbmNhdGVkU3RhY2tzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJTdGFja1N0cmluZyhzdGFja1N0cmluZykge1xuICAgIHZhciBsaW5lcyA9IHN0YWNrU3RyaW5nLnNwbGl0KCdcXG4nKSwgZGVzaXJlZExpbmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgbGluZSA9IGxpbmVzW2ldO1xuXG4gICAgICBpZiAoIWlzSW50ZXJuYWxGcmFtZShsaW5lKSAmJiAhaXNOb2RlRnJhbWUobGluZSkgJiYgbGluZSkge1xuICAgICAgICBkZXNpcmVkTGluZXMucHVzaChsaW5lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlc2lyZWRMaW5lcy5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzSW50ZXJuYWxGcmFtZShzdGFja0xpbmUpIHtcbiAgICB2YXIgZmlsZU5hbWVBbmRMaW5lTnVtYmVyID0gZ2V0RmlsZU5hbWVBbmRMaW5lTnVtYmVyKHN0YWNrTGluZSk7XG4gICAgaWYgKCFmaWxlTmFtZUFuZExpbmVOdW1iZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGZpbGVOYW1lID0gZmlsZU5hbWVBbmRMaW5lTnVtYmVyWzBdLCBsaW5lTnVtYmVyID0gZmlsZU5hbWVBbmRMaW5lTnVtYmVyWzFdO1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lID09PSByRmlsZU5hbWUgJiZcbiAgICAgIGxpbmVOdW1iZXIgPj0gclN0YXJ0aW5nTGluZSAmJlxuICAgICAgbGluZU51bWJlciA8PSByRW5kaW5nTGluZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZUZyYW1lKHN0YWNrTGluZSkge1xuICAgIHJldHVybiBzdGFja0xpbmUuaW5kZXhPZignKG1vZHVsZS5qczonKSAhPT0gLTEgfHxcbiAgICAgIHN0YWNrTGluZS5pbmRleE9mKCcobm9kZS5qczonKSAhPT0gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBjYXB0dXJlTGluZSgpIHtcbiAgICBpZiAoIWhhc1N0YWNrcykgeyByZXR1cm47IH1cblxuICAgIHRyeSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2YXIgbGluZXMgPSBlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBmaXJzdExpbmUgPSBsaW5lc1swXS5pbmRleE9mKCdAJykgPiAwID8gbGluZXNbMV0gOiBsaW5lc1syXTtcbiAgICAgIHZhciBmaWxlTmFtZUFuZExpbmVOdW1iZXIgPSBnZXRGaWxlTmFtZUFuZExpbmVOdW1iZXIoZmlyc3RMaW5lKTtcbiAgICAgIGlmICghZmlsZU5hbWVBbmRMaW5lTnVtYmVyKSB7IHJldHVybjsgfVxuXG4gICAgICByRmlsZU5hbWUgPSBmaWxlTmFtZUFuZExpbmVOdW1iZXJbMF07XG4gICAgICByZXR1cm4gZmlsZU5hbWVBbmRMaW5lTnVtYmVyWzFdO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZpbGVOYW1lQW5kTGluZU51bWJlcihzdGFja0xpbmUpIHtcbiAgICAvLyBOYW1lZCBmdW5jdGlvbnM6ICdhdCBmdW5jdGlvbk5hbWUgKGZpbGVuYW1lOmxpbmVOdW1iZXI6Y29sdW1uTnVtYmVyKSdcbiAgICB2YXIgYXR0ZW1wdDEgPSAvYXQgLisgXFwoKC4rKTooXFxkKyk6KD86XFxkKylcXCkkLy5leGVjKHN0YWNrTGluZSk7XG4gICAgaWYgKGF0dGVtcHQxKSB7IHJldHVybiBbYXR0ZW1wdDFbMV0sIE51bWJlcihhdHRlbXB0MVsyXSldOyB9XG5cbiAgICAvLyBBbm9ueW1vdXMgZnVuY3Rpb25zOiAnYXQgZmlsZW5hbWU6bGluZU51bWJlcjpjb2x1bW5OdW1iZXInXG4gICAgdmFyIGF0dGVtcHQyID0gL2F0IChbXiBdKyk6KFxcZCspOig/OlxcZCspJC8uZXhlYyhzdGFja0xpbmUpO1xuICAgIGlmIChhdHRlbXB0MikgeyByZXR1cm4gW2F0dGVtcHQyWzFdLCBOdW1iZXIoYXR0ZW1wdDJbMl0pXTsgfVxuXG4gICAgLy8gRmlyZWZveCBzdHlsZTogJ2Z1bmN0aW9uQGZpbGVuYW1lOmxpbmVOdW1iZXIgb3IgQGZpbGVuYW1lOmxpbmVOdW1iZXInXG4gICAgdmFyIGF0dGVtcHQzID0gLy4qQCguKyk6KFxcZCspJC8uZXhlYyhzdGFja0xpbmUpO1xuICAgIGlmIChhdHRlbXB0MykgeyByZXR1cm4gW2F0dGVtcHQzWzFdLCBOdW1iZXIoYXR0ZW1wdDNbMl0pXTsgfVxuICB9XG5cbiAgdmFyIEVtcHR5RXJyb3IgPSBSeC5FbXB0eUVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gJ1NlcXVlbmNlIGNvbnRhaW5zIG5vIGVsZW1lbnRzLic7XG4gICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgfTtcbiAgRW1wdHlFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gIEVtcHR5RXJyb3IucHJvdG90eXBlLm5hbWUgPSAnRW1wdHlFcnJvcic7XG5cbiAgdmFyIE9iamVjdERpc3Bvc2VkRXJyb3IgPSBSeC5PYmplY3REaXNwb3NlZEVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gJ09iamVjdCBoYXMgYmVlbiBkaXNwb3NlZCc7XG4gICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgfTtcbiAgT2JqZWN0RGlzcG9zZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gIE9iamVjdERpc3Bvc2VkRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnT2JqZWN0RGlzcG9zZWRFcnJvcic7XG5cbiAgdmFyIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yID0gUnguQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gJ0FyZ3VtZW50IG91dCBvZiByYW5nZSc7XG4gICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgfTtcbiAgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICBBcmd1bWVudE91dE9mUmFuZ2VFcnJvci5wcm90b3R5cGUubmFtZSA9ICdBcmd1bWVudE91dE9mUmFuZ2VFcnJvcic7XG5cbiAgdmFyIE5vdFN1cHBvcnRlZEVycm9yID0gUnguTm90U3VwcG9ydGVkRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ1RoaXMgb3BlcmF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQnO1xuICAgIEVycm9yLmNhbGwodGhpcyk7XG4gIH07XG4gIE5vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgTm90U3VwcG9ydGVkRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnTm90U3VwcG9ydGVkRXJyb3InO1xuXG4gIHZhciBOb3RJbXBsZW1lbnRlZEVycm9yID0gUnguTm90SW1wbGVtZW50ZWRFcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnVGhpcyBvcGVyYXRpb24gaXMgbm90IGltcGxlbWVudGVkJztcbiAgICBFcnJvci5jYWxsKHRoaXMpO1xuICB9O1xuICBOb3RJbXBsZW1lbnRlZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgTm90SW1wbGVtZW50ZWRFcnJvci5wcm90b3R5cGUubmFtZSA9ICdOb3RJbXBsZW1lbnRlZEVycm9yJztcblxuICB2YXIgbm90SW1wbGVtZW50ZWQgPSBSeC5oZWxwZXJzLm5vdEltcGxlbWVudGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCk7XG4gIH07XG5cbiAgdmFyIG5vdFN1cHBvcnRlZCA9IFJ4LmhlbHBlcnMubm90U3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBOb3RTdXBwb3J0ZWRFcnJvcigpO1xuICB9O1xuXG4gIC8vIFNoaW0gaW4gaXRlcmF0b3Igc3VwcG9ydFxuICB2YXIgJGl0ZXJhdG9yJCA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcikgfHxcbiAgICAnX2VzNnNoaW1faXRlcmF0b3JfJztcbiAgLy8gQnVnIGZvciBtb3ppbGxhIHZlcnNpb25cbiAgaWYgKHJvb3QuU2V0ICYmIHR5cGVvZiBuZXcgcm9vdC5TZXQoKVsnQEBpdGVyYXRvciddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgJGl0ZXJhdG9yJCA9ICdAQGl0ZXJhdG9yJztcbiAgfVxuXG4gIHZhciBkb25lRW51bWVyYXRvciA9IFJ4LmRvbmVFbnVtZXJhdG9yID0geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH07XG5cbiAgdmFyIGlzSXRlcmFibGUgPSBSeC5oZWxwZXJzLmlzSXRlcmFibGUgPSBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIG9bJGl0ZXJhdG9yJF0gIT09IHVuZGVmaW5lZDtcbiAgfTtcblxuICB2YXIgaXNBcnJheUxpa2UgPSBSeC5oZWxwZXJzLmlzQXJyYXlMaWtlID0gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBvLmxlbmd0aCAhPT0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIFJ4LmhlbHBlcnMuaXRlcmF0b3IgPSAkaXRlcmF0b3IkO1xuXG4gIHZhciBiaW5kQ2FsbGJhY2sgPSBSeC5pbnRlcm5hbHMuYmluZENhbGxiYWNrID0gZnVuY3Rpb24gKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzQXJnID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZnVuYzsgfVxuICAgIHN3aXRjaChhcmdDb3VudCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKVxuICAgICAgICB9O1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmcpO1xuICAgICAgICB9XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH07XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKiBVc2VkIHRvIGRldGVybWluZSBpZiB2YWx1ZXMgYXJlIG9mIHRoZSBsYW5ndWFnZSB0eXBlIE9iamVjdCAqL1xuICB2YXIgZG9udEVudW1zID0gWyd0b1N0cmluZycsXG4gICAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgICAndmFsdWVPZicsXG4gICAgJ2hhc093blByb3BlcnR5JyxcbiAgICAnaXNQcm90b3R5cGVPZicsXG4gICAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgICAnY29uc3RydWN0b3InXSxcbiAgZG9udEVudW1zTGVuZ3RoID0gZG9udEVudW1zLmxlbmd0aDtcblxuICAvKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHNob3J0Y3V0cyAqL1xuICB2YXIgYXJnc0NsYXNzID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlDbGFzcyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbENsYXNzID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVDbGFzcyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvckNsYXNzID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jQ2xhc3MgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG51bWJlckNsYXNzID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0Q2xhc3MgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBDbGFzcyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHN0cmluZ0NsYXNzID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbiAgdmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgc3VwcG9ydHNBcmdzQ2xhc3MgPSB0b1N0cmluZy5jYWxsKGFyZ3VtZW50cykgPT0gYXJnc0NsYXNzLCAvLyBGb3IgbGVzcyA8SUU5ICYmIEZGPDRcbiAgICBzdXBwb3J0Tm9kZUNsYXNzLFxuICAgIGVycm9yUHJvdG8gPSBFcnJvci5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlLFxuICAgIHN0cmluZ1Byb3RvID0gU3RyaW5nLnByb3RvdHlwZSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4gIHRyeSB7XG4gICAgc3VwcG9ydE5vZGVDbGFzcyA9ICEodG9TdHJpbmcuY2FsbChkb2N1bWVudCkgPT0gb2JqZWN0Q2xhc3MgJiYgISh7ICd0b1N0cmluZyc6IDAgfSArICcnKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzdXBwb3J0Tm9kZUNsYXNzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBub25FbnVtUHJvcHMgPSB7fTtcbiAgbm9uRW51bVByb3BzW2FycmF5Q2xhc3NdID0gbm9uRW51bVByb3BzW2RhdGVDbGFzc10gPSBub25FbnVtUHJvcHNbbnVtYmVyQ2xhc3NdID0geyAnY29uc3RydWN0b3InOiB0cnVlLCAndG9Mb2NhbGVTdHJpbmcnOiB0cnVlLCAndG9TdHJpbmcnOiB0cnVlLCAndmFsdWVPZic6IHRydWUgfTtcbiAgbm9uRW51bVByb3BzW2Jvb2xDbGFzc10gPSBub25FbnVtUHJvcHNbc3RyaW5nQ2xhc3NdID0geyAnY29uc3RydWN0b3InOiB0cnVlLCAndG9TdHJpbmcnOiB0cnVlLCAndmFsdWVPZic6IHRydWUgfTtcbiAgbm9uRW51bVByb3BzW2Vycm9yQ2xhc3NdID0gbm9uRW51bVByb3BzW2Z1bmNDbGFzc10gPSBub25FbnVtUHJvcHNbcmVnZXhwQ2xhc3NdID0geyAnY29uc3RydWN0b3InOiB0cnVlLCAndG9TdHJpbmcnOiB0cnVlIH07XG4gIG5vbkVudW1Qcm9wc1tvYmplY3RDbGFzc10gPSB7ICdjb25zdHJ1Y3Rvcic6IHRydWUgfTtcblxuICB2YXIgc3VwcG9ydCA9IHt9O1xuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdG9yID0gZnVuY3Rpb24oKSB7IHRoaXMueCA9IDE7IH0sXG4gICAgICBwcm9wcyA9IFtdO1xuXG4gICAgY3Rvci5wcm90b3R5cGUgPSB7ICd2YWx1ZU9mJzogMSwgJ3knOiAxIH07XG4gICAgZm9yICh2YXIga2V5IGluIG5ldyBjdG9yKSB7IHByb3BzLnB1c2goa2V5KTsgfVxuICAgIGZvciAoa2V5IGluIGFyZ3VtZW50cykgeyB9XG5cbiAgICAvLyBEZXRlY3QgaWYgYG5hbWVgIG9yIGBtZXNzYWdlYCBwcm9wZXJ0aWVzIG9mIGBFcnJvci5wcm90b3R5cGVgIGFyZSBlbnVtZXJhYmxlIGJ5IGRlZmF1bHQuXG4gICAgc3VwcG9ydC5lbnVtRXJyb3JQcm9wcyA9IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZXJyb3JQcm90bywgJ21lc3NhZ2UnKSB8fCBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGVycm9yUHJvdG8sICduYW1lJyk7XG5cbiAgICAvLyBEZXRlY3QgaWYgYHByb3RvdHlwZWAgcHJvcGVydGllcyBhcmUgZW51bWVyYWJsZSBieSBkZWZhdWx0LlxuICAgIHN1cHBvcnQuZW51bVByb3RvdHlwZXMgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGN0b3IsICdwcm90b3R5cGUnKTtcblxuICAgIC8vIERldGVjdCBpZiBgYXJndW1lbnRzYCBvYmplY3QgaW5kZXhlcyBhcmUgbm9uLWVudW1lcmFibGVcbiAgICBzdXBwb3J0Lm5vbkVudW1BcmdzID0ga2V5ICE9IDA7XG5cbiAgICAvLyBEZXRlY3QgaWYgcHJvcGVydGllcyBzaGFkb3dpbmcgdGhvc2Ugb24gYE9iamVjdC5wcm90b3R5cGVgIGFyZSBub24tZW51bWVyYWJsZS5cbiAgICBzdXBwb3J0Lm5vbkVudW1TaGFkb3dzID0gIS92YWx1ZU9mLy50ZXN0KHByb3BzKTtcbiAgfSgxKSk7XG5cbiAgdmFyIGlzT2JqZWN0ID0gUnguaW50ZXJuYWxzLmlzT2JqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHR5cGUgPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09ICdvYmplY3QnKSB8fCBmYWxzZTtcbiAgfTtcblxuICBmdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaWYgKHN1cHBvcnQubm9uRW51bUFyZ3MgJiYgb2JqZWN0Lmxlbmd0aCAmJiBpc0FyZ3VtZW50cyhvYmplY3QpKSB7XG4gICAgICBvYmplY3QgPSBzbGljZS5jYWxsKG9iamVjdCk7XG4gICAgfVxuICAgIHZhciBza2lwUHJvdG8gPSBzdXBwb3J0LmVudW1Qcm90b3R5cGVzICYmIHR5cGVvZiBvYmplY3QgPT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgc2tpcEVycm9yUHJvcHMgPSBzdXBwb3J0LmVudW1FcnJvclByb3BzICYmIChvYmplY3QgPT09IGVycm9yUHJvdG8gfHwgb2JqZWN0IGluc3RhbmNlb2YgRXJyb3IpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgaWYgKCEoc2tpcFByb3RvICYmIGtleSA9PSAncHJvdG90eXBlJykgJiZcbiAgICAgICAgICAhKHNraXBFcnJvclByb3BzICYmIChrZXkgPT0gJ21lc3NhZ2UnIHx8IGtleSA9PSAnbmFtZScpKSkge1xuICAgICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lm5vbkVudW1TaGFkb3dzICYmIG9iamVjdCAhPT0gb2JqZWN0UHJvdG8pIHtcbiAgICAgIHZhciBjdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgICAgbGVuZ3RoID0gZG9udEVudW1zTGVuZ3RoO1xuXG4gICAgICBpZiAob2JqZWN0ID09PSAoY3RvciAmJiBjdG9yLnByb3RvdHlwZSkpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG9iamVjdCA9PT0gc3RyaW5nUHJvdG8gPyBzdHJpbmdDbGFzcyA6IG9iamVjdCA9PT0gZXJyb3JQcm90byA/IGVycm9yQ2xhc3MgOiB0b1N0cmluZy5jYWxsKG9iamVjdCksXG4gICAgICAgICAgICBub25FbnVtID0gbm9uRW51bVByb3BzW2NsYXNzTmFtZV07XG4gICAgICB9XG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBrZXkgPSBkb250RW51bXNbaW5kZXhdO1xuICAgICAgICBpZiAoIShub25FbnVtICYmIG5vbkVudW1ba2V5XSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcm5hbEZvcihvYmplY3QsIGNhbGxiYWNrLCBrZXlzRnVuYykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgICBpZiAoY2FsbGJhY2sob2JqZWN0W2tleV0sIGtleSwgb2JqZWN0KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcm5hbEZvckluKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gaW50ZXJuYWxGb3Iob2JqZWN0LCBjYWxsYmFjaywga2V5c0luKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZSh2YWx1ZSkge1xuICAgIC8vIElFIDwgOSBwcmVzZW50cyBET00gbm9kZXMgYXMgYE9iamVjdGAgb2JqZWN0cyBleGNlcHQgdGhleSBoYXZlIGB0b1N0cmluZ2BcbiAgICAvLyBtZXRob2RzIHRoYXQgYXJlIGB0eXBlb2ZgIFwic3RyaW5nXCIgYW5kIHN0aWxsIGNhbiBjb2VyY2Ugbm9kZXMgdG8gc3RyaW5nc1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgKHZhbHVlICsgJycpID09ICdzdHJpbmcnO1xuICB9XG5cbiAgdmFyIGlzQXJndW1lbnRzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JykgPyB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzQ2xhc3MgOiBmYWxzZTtcbiAgfVxuXG4gIC8vIGZhbGxiYWNrIGZvciBicm93c2VycyB0aGF0IGNhbid0IGRldGVjdCBgYXJndW1lbnRzYCBvYmplY3RzIGJ5IFtbQ2xhc3NdXVxuICBpZiAoIXN1cHBvcnRzQXJnc0NsYXNzKSB7XG4gICAgaXNBcmd1bWVudHMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpID8gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIDogZmFsc2U7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBpc0VxdWFsID0gUnguaW50ZXJuYWxzLmlzRXF1YWwgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiBkZWVwRXF1YWxzKHgsIHksIFtdLCBbXSk7XG4gIH07XG5cbiAgLyoqIEBwcml2YXRlXG4gICAqIFVzZWQgZm9yIGRlZXAgY29tcGFyaXNvblxuICAgKiovXG4gIGZ1bmN0aW9uIGRlZXBFcXVhbHMoYSwgYiwgc3RhY2tBLCBzdGFja0IpIHtcbiAgICAvLyBleGl0IGVhcmx5IGZvciBpZGVudGljYWwgdmFsdWVzXG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgIC8vIHRyZWF0IGArMGAgdnMuIGAtMGAgYXMgbm90IGVxdWFsXG4gICAgICByZXR1cm4gYSAhPT0gMCB8fCAoMSAvIGEgPT0gMSAvIGIpO1xuICAgIH1cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIGEsXG4gICAgICAgIG90aGVyVHlwZSA9IHR5cGVvZiBiO1xuXG4gICAgLy8gZXhpdCBlYXJseSBmb3IgdW5saWtlIHByaW1pdGl2ZSB2YWx1ZXNcbiAgICBpZiAoYSA9PT0gYSAmJiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCB8fFxuICAgICAgICAodHlwZSAhPSAnZnVuY3Rpb24nICYmIHR5cGUgIT0gJ29iamVjdCcgJiYgb3RoZXJUeXBlICE9ICdmdW5jdGlvbicgJiYgb3RoZXJUeXBlICE9ICdvYmplY3QnKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBjb21wYXJlIFtbQ2xhc3NdXSBuYW1lc1xuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpLFxuICAgICAgICBvdGhlckNsYXNzID0gdG9TdHJpbmcuY2FsbChiKTtcblxuICAgIGlmIChjbGFzc05hbWUgPT0gYXJnc0NsYXNzKSB7XG4gICAgICBjbGFzc05hbWUgPSBvYmplY3RDbGFzcztcbiAgICB9XG4gICAgaWYgKG90aGVyQ2xhc3MgPT0gYXJnc0NsYXNzKSB7XG4gICAgICBvdGhlckNsYXNzID0gb2JqZWN0Q2xhc3M7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgIT0gb3RoZXJDbGFzcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgY2FzZSBib29sQ2xhc3M6XG4gICAgICBjYXNlIGRhdGVDbGFzczpcbiAgICAgICAgLy8gY29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1iZXJzLCBkYXRlcyB0byBtaWxsaXNlY29uZHMgYW5kIGJvb2xlYW5zXG4gICAgICAgIC8vIHRvIGAxYCBvciBgMGAgdHJlYXRpbmcgaW52YWxpZCBkYXRlcyBjb2VyY2VkIHRvIGBOYU5gIGFzIG5vdCBlcXVhbFxuICAgICAgICByZXR1cm4gK2EgPT0gK2I7XG5cbiAgICAgIGNhc2UgbnVtYmVyQ2xhc3M6XG4gICAgICAgIC8vIHRyZWF0IGBOYU5gIHZzLiBgTmFOYCBhcyBlcXVhbFxuICAgICAgICByZXR1cm4gKGEgIT0gK2EpID9cbiAgICAgICAgICBiICE9ICtiIDpcbiAgICAgICAgICAvLyBidXQgdHJlYXQgYC0wYCB2cy4gYCswYCBhcyBub3QgZXF1YWxcbiAgICAgICAgICAoYSA9PSAwID8gKDEgLyBhID09IDEgLyBiKSA6IGEgPT0gK2IpO1xuXG4gICAgICBjYXNlIHJlZ2V4cENsYXNzOlxuICAgICAgY2FzZSBzdHJpbmdDbGFzczpcbiAgICAgICAgLy8gY29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyAoaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS4xMC42LjQpXG4gICAgICAgIC8vIHRyZWF0IHN0cmluZyBwcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCBpbnN0YW5jZXMgYXMgZXF1YWxcbiAgICAgICAgcmV0dXJuIGEgPT0gU3RyaW5nKGIpO1xuICAgIH1cbiAgICB2YXIgaXNBcnIgPSBjbGFzc05hbWUgPT0gYXJyYXlDbGFzcztcbiAgICBpZiAoIWlzQXJyKSB7XG5cbiAgICAgIC8vIGV4aXQgZm9yIGZ1bmN0aW9ucyBhbmQgRE9NIG5vZGVzXG4gICAgICBpZiAoY2xhc3NOYW1lICE9IG9iamVjdENsYXNzIHx8ICghc3VwcG9ydC5ub2RlQ2xhc3MgJiYgKGlzTm9kZShhKSB8fCBpc05vZGUoYikpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBpbiBvbGRlciB2ZXJzaW9ucyBvZiBPcGVyYSwgYGFyZ3VtZW50c2Agb2JqZWN0cyBoYXZlIGBBcnJheWAgY29uc3RydWN0b3JzXG4gICAgICB2YXIgY3RvckEgPSAhc3VwcG9ydC5hcmdzT2JqZWN0ICYmIGlzQXJndW1lbnRzKGEpID8gT2JqZWN0IDogYS5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjdG9yQiA9ICFzdXBwb3J0LmFyZ3NPYmplY3QgJiYgaXNBcmd1bWVudHMoYikgPyBPYmplY3QgOiBiLmNvbnN0cnVjdG9yO1xuXG4gICAgICAvLyBub24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbFxuICAgICAgaWYgKGN0b3JBICE9IGN0b3JCICYmXG4gICAgICAgICAgICAhKGhhc093blByb3BlcnR5LmNhbGwoYSwgJ2NvbnN0cnVjdG9yJykgJiYgaGFzT3duUHJvcGVydHkuY2FsbChiLCAnY29uc3RydWN0b3InKSkgJiZcbiAgICAgICAgICAgICEoaXNGdW5jdGlvbihjdG9yQSkgJiYgY3RvckEgaW5zdGFuY2VvZiBjdG9yQSAmJiBpc0Z1bmN0aW9uKGN0b3JCKSAmJiBjdG9yQiBpbnN0YW5jZW9mIGN0b3JCKSAmJlxuICAgICAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gYSAmJiAnY29uc3RydWN0b3InIGluIGIpXG4gICAgICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYXNzdW1lIGN5Y2xpYyBzdHJ1Y3R1cmVzIGFyZSBlcXVhbFxuICAgIC8vIHRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWMgc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xXG4gICAgLy8gc2VjdGlvbiAxNS4xMi4zLCBhYnN0cmFjdCBvcGVyYXRpb24gYEpPYCAoaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS4xMi4zKVxuICAgIHZhciBpbml0ZWRTdGFjayA9ICFzdGFja0E7XG4gICAgc3RhY2tBIHx8IChzdGFja0EgPSBbXSk7XG4gICAgc3RhY2tCIHx8IChzdGFja0IgPSBbXSk7XG5cbiAgICB2YXIgbGVuZ3RoID0gc3RhY2tBLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIGlmIChzdGFja0FbbGVuZ3RoXSA9PSBhKSB7XG4gICAgICAgIHJldHVybiBzdGFja0JbbGVuZ3RoXSA9PSBiO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2l6ZSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG5cbiAgICAvLyBhZGQgYGFgIGFuZCBgYmAgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzXG4gICAgc3RhY2tBLnB1c2goYSk7XG4gICAgc3RhY2tCLnB1c2goYik7XG5cbiAgICAvLyByZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpXG4gICAgaWYgKGlzQXJyKSB7XG4gICAgICAvLyBjb21wYXJlIGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeVxuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBzaXplID0gYi5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaXplID09IGxlbmd0aDtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAvLyBkZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzXG4gICAgICAgIHdoaWxlIChzaXplLS0pIHtcbiAgICAgICAgICB2YXIgaW5kZXggPSBsZW5ndGgsXG4gICAgICAgICAgICAgIHZhbHVlID0gYltzaXplXTtcblxuICAgICAgICAgIGlmICghKHJlc3VsdCA9IGRlZXBFcXVhbHMoYVtzaXplXSwgdmFsdWUsIHN0YWNrQSwgc3RhY2tCKSkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGRlZXAgY29tcGFyZSBvYmplY3RzIHVzaW5nIGBmb3JJbmAsIGluc3RlYWQgb2YgYGZvck93bmAsIHRvIGF2b2lkIGBPYmplY3Qua2V5c2BcbiAgICAgIC8vIHdoaWNoLCBpbiB0aGlzIGNhc2UsIGlzIG1vcmUgY29zdGx5XG4gICAgICBpbnRlcm5hbEZvckluKGIsIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGIpIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYiwga2V5KSkge1xuICAgICAgICAgIC8vIGNvdW50IHRoZSBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICAgICAgICBzaXplKys7XG4gICAgICAgICAgLy8gZGVlcCBjb21wYXJlIGVhY2ggcHJvcGVydHkgdmFsdWUuXG4gICAgICAgICAgcmV0dXJuIChyZXN1bHQgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGtleSkgJiYgZGVlcEVxdWFscyhhW2tleV0sIHZhbHVlLCBzdGFja0EsIHN0YWNrQikpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAvLyBlbnN1cmUgYm90aCBvYmplY3RzIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHByb3BlcnRpZXNcbiAgICAgICAgaW50ZXJuYWxGb3JJbihhLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBhKSB7XG4gICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYSwga2V5KSkge1xuICAgICAgICAgICAgLy8gYHNpemVgIHdpbGwgYmUgYC0xYCBpZiBgYWAgaGFzIG1vcmUgcHJvcGVydGllcyB0aGFuIGBiYFxuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHQgPSAtLXNpemUgPiAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhY2tBLnBvcCgpO1xuICAgIHN0YWNrQi5wb3AoKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB2YXIgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgICAgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgdmFyIGluaGVyaXRzID0gUnguaW50ZXJuYWxzLmluaGVyaXRzID0gZnVuY3Rpb24gKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9XG4gICAgX18ucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgX18oKTtcbiAgfTtcblxuICB2YXIgYWRkUHJvcGVydGllcyA9IFJ4LmludGVybmFscy5hZGRQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGZvcih2YXIgc291cmNlcyA9IFtdLCBpID0gMSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7IHNvdXJjZXMucHVzaChhcmd1bWVudHNbaV0pOyB9XG4gICAgZm9yICh2YXIgaWR4ID0gMCwgbG4gPSBzb3VyY2VzLmxlbmd0aDsgaWR4IDwgbG47IGlkeCsrKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpZHhdO1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgb2JqW3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBSeCBVdGlsc1xuICB2YXIgYWRkUmVmID0gUnguaW50ZXJuYWxzLmFkZFJlZiA9IGZ1bmN0aW9uICh4cywgcikge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShyLmdldERpc3Bvc2FibGUoKSwgeHMuc3Vic2NyaWJlKG9ic2VydmVyKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gYXJyYXlJbml0aWFsaXplKGNvdW50LCBmYWN0b3J5KSB7XG4gICAgdmFyIGEgPSBuZXcgQXJyYXkoY291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgYVtpXSA9IGZhY3RvcnkoKTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIGdyb3VwIG9mIGRpc3Bvc2FibGUgcmVzb3VyY2VzIHRoYXQgYXJlIGRpc3Bvc2VkIHRvZ2V0aGVyLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIHZhciBDb21wb3NpdGVEaXNwb3NhYmxlID0gUnguQ29tcG9zaXRlRGlzcG9zYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBpLCBsZW47XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSkge1xuICAgICAgYXJncyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIH1cbiAgICB0aGlzLmRpc3Bvc2FibGVzID0gYXJncztcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICB9O1xuXG4gIHZhciBDb21wb3NpdGVEaXNwb3NhYmxlUHJvdG90eXBlID0gQ29tcG9zaXRlRGlzcG9zYWJsZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBkaXNwb3NhYmxlIHRvIHRoZSBDb21wb3NpdGVEaXNwb3NhYmxlIG9yIGRpc3Bvc2VzIHRoZSBkaXNwb3NhYmxlIGlmIHRoZSBDb21wb3NpdGVEaXNwb3NhYmxlIGlzIGRpc3Bvc2VkLlxuICAgKiBAcGFyYW0ge01peGVkfSBpdGVtIERpc3Bvc2FibGUgdG8gYWRkLlxuICAgKi9cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZVByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIGl0ZW0uZGlzcG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3Bvc2FibGVzLnB1c2goaXRlbSk7XG4gICAgICB0aGlzLmxlbmd0aCsrO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyBhbmQgZGlzcG9zZXMgdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYSBkaXNwb3NhYmxlIGZyb20gdGhlIENvbXBvc2l0ZURpc3Bvc2FibGUuXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGl0ZW0gRGlzcG9zYWJsZSB0byByZW1vdmUuXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGZvdW5kOyBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBDb21wb3NpdGVEaXNwb3NhYmxlUHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIHNob3VsZERpc3Bvc2UgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdmFyIGlkeCA9IHRoaXMuZGlzcG9zYWJsZXMuaW5kZXhPZihpdGVtKTtcbiAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgIHNob3VsZERpc3Bvc2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc3Bvc2FibGVzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB0aGlzLmxlbmd0aC0tO1xuICAgICAgICBpdGVtLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNob3VsZERpc3Bvc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqICBEaXNwb3NlcyBhbGwgZGlzcG9zYWJsZXMgaW4gdGhlIGdyb3VwIGFuZCByZW1vdmVzIHRoZW0gZnJvbSB0aGUgZ3JvdXAuXG4gICAqL1xuICBDb21wb3NpdGVEaXNwb3NhYmxlUHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICB2YXIgbGVuID0gdGhpcy5kaXNwb3NhYmxlcy5sZW5ndGgsIGN1cnJlbnREaXNwb3NhYmxlcyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGN1cnJlbnREaXNwb3NhYmxlc1tpXSA9IHRoaXMuZGlzcG9zYWJsZXNbaV07IH1cbiAgICAgIHRoaXMuZGlzcG9zYWJsZXMgPSBbXTtcbiAgICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnREaXNwb3NhYmxlc1tpXS5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBhIHNldCBvZiBzdGF0aWMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgRGlzcG9zYWJsZXMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3Bvc2UgQWN0aW9uIHRvIHJ1biBkdXJpbmcgdGhlIGZpcnN0IGNhbGwgdG8gZGlzcG9zZS4gVGhlIGFjdGlvbiBpcyBndWFyYW50ZWVkIHRvIGJlIHJ1biBhdCBtb3N0IG9uY2UuXG4gICAqL1xuICB2YXIgRGlzcG9zYWJsZSA9IFJ4LkRpc3Bvc2FibGUgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb24gfHwgbm9vcDtcbiAgfTtcblxuICAvKiogUGVyZm9ybXMgdGhlIHRhc2sgb2YgY2xlYW5pbmcgdXAgcmVzb3VyY2VzLiAqL1xuICBEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aGlzLmFjdGlvbigpO1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBkaXNwb3NhYmxlIG9iamVjdCB0aGF0IGludm9rZXMgdGhlIHNwZWNpZmllZCBhY3Rpb24gd2hlbiBkaXNwb3NlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcG9zZSBBY3Rpb24gdG8gcnVuIGR1cmluZyB0aGUgZmlyc3QgY2FsbCB0byBkaXNwb3NlLiBUaGUgYWN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gYmUgcnVuIGF0IG1vc3Qgb25jZS5cbiAgICogQHJldHVybiB7RGlzcG9zYWJsZX0gVGhlIGRpc3Bvc2FibGUgb2JqZWN0IHRoYXQgcnVucyB0aGUgZ2l2ZW4gYWN0aW9uIHVwb24gZGlzcG9zYWwuXG4gICAqL1xuICB2YXIgZGlzcG9zYWJsZUNyZWF0ZSA9IERpc3Bvc2FibGUuY3JlYXRlID0gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gbmV3IERpc3Bvc2FibGUoYWN0aW9uKTsgfTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgZGlzcG9zYWJsZSB0aGF0IGRvZXMgbm90aGluZyB3aGVuIGRpc3Bvc2VkLlxuICAgKi9cbiAgdmFyIGRpc3Bvc2FibGVFbXB0eSA9IERpc3Bvc2FibGUuZW1wdHkgPSB7IGRpc3Bvc2U6IG5vb3AgfTtcblxuICAvKipcbiAgICogVmFsaWRhdGVzIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhIGRpc3Bvc2FibGVcbiAgICogQHBhcmFtIHtPYmplY3R9IE9iamVjdCB0byB0ZXN0IHdoZXRoZXIgaXQgaGFzIGEgZGlzcG9zZSBtZXRob2RcbiAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYSBkaXNwb3NhYmxlIG9iamVjdCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIHZhciBpc0Rpc3Bvc2FibGUgPSBEaXNwb3NhYmxlLmlzRGlzcG9zYWJsZSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQgJiYgaXNGdW5jdGlvbihkLmRpc3Bvc2UpO1xuICB9O1xuXG4gIHZhciBjaGVja0Rpc3Bvc2VkID0gRGlzcG9zYWJsZS5jaGVja0Rpc3Bvc2VkID0gZnVuY3Rpb24gKGRpc3Bvc2FibGUpIHtcbiAgICBpZiAoZGlzcG9zYWJsZS5pc0Rpc3Bvc2VkKSB7IHRocm93IG5ldyBPYmplY3REaXNwb3NlZEVycm9yKCk7IH1cbiAgfTtcblxuICB2YXIgZGlzcG9zYWJsZUZpeHVwID0gRGlzcG9zYWJsZS5fZml4dXAgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgcmV0dXJuIGlzRGlzcG9zYWJsZShyZXN1bHQpID8gcmVzdWx0IDogZGlzcG9zYWJsZUVtcHR5O1xuICB9O1xuXG4gIC8vIFNpbmdsZSBhc3NpZ25tZW50XG4gIHZhciBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSA9IFJ4LlNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gIH07XG4gIFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlLnByb3RvdHlwZS5nZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG4gIFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlLnByb3RvdHlwZS5zZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCkgeyB0aHJvdyBuZXcgRXJyb3IoJ0Rpc3Bvc2FibGUgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZCcpOyB9XG4gICAgdmFyIHNob3VsZERpc3Bvc2UgPSB0aGlzLmlzRGlzcG9zZWQ7XG4gICAgIXNob3VsZERpc3Bvc2UgJiYgKHRoaXMuY3VycmVudCA9IHZhbHVlKTtcbiAgICBzaG91bGREaXNwb3NlICYmIHZhbHVlICYmIHZhbHVlLmRpc3Bvc2UoKTtcbiAgfTtcbiAgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICB2YXIgb2xkID0gdGhpcy5jdXJyZW50O1xuICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgICAgIG9sZCAmJiBvbGQuZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBNdWx0aXBsZSBhc3NpZ25tZW50IGRpc3Bvc2FibGVcbiAgdmFyIFNlcmlhbERpc3Bvc2FibGUgPSBSeC5TZXJpYWxEaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gIH07XG4gIFNlcmlhbERpc3Bvc2FibGUucHJvdG90eXBlLmdldERpc3Bvc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcbiAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBzaG91bGREaXNwb3NlID0gdGhpcy5pc0Rpc3Bvc2VkO1xuICAgIGlmICghc2hvdWxkRGlzcG9zZSkge1xuICAgICAgdmFyIG9sZCA9IHRoaXMuY3VycmVudDtcbiAgICAgIHRoaXMuY3VycmVudCA9IHZhbHVlO1xuICAgIH1cbiAgICBvbGQgJiYgb2xkLmRpc3Bvc2UoKTtcbiAgICBzaG91bGREaXNwb3NlICYmIHZhbHVlICYmIHZhbHVlLmRpc3Bvc2UoKTtcbiAgfTtcbiAgU2VyaWFsRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgIHZhciBvbGQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgICBvbGQgJiYgb2xkLmRpc3Bvc2UoKTtcbiAgfTtcblxuICB2YXIgQmluYXJ5RGlzcG9zYWJsZSA9IFJ4LkJpbmFyeURpc3Bvc2FibGUgPSBmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkge1xuICAgIHRoaXMuX2ZpcnN0ID0gZmlyc3Q7XG4gICAgdGhpcy5fc2Vjb25kID0gc2Vjb25kO1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICB9O1xuXG4gIEJpbmFyeURpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICB2YXIgb2xkMSA9IHRoaXMuX2ZpcnN0O1xuICAgICAgdGhpcy5fZmlyc3QgPSBudWxsO1xuICAgICAgb2xkMSAmJiBvbGQxLmRpc3Bvc2UoKTtcbiAgICAgIHZhciBvbGQyID0gdGhpcy5fc2Vjb25kO1xuICAgICAgdGhpcy5fc2Vjb25kID0gbnVsbDtcbiAgICAgIG9sZDIgJiYgb2xkMi5kaXNwb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBOQXJ5RGlzcG9zYWJsZSA9IFJ4Lk5BcnlEaXNwb3NhYmxlID0gZnVuY3Rpb24gKGRpc3Bvc2FibGVzKSB7XG4gICAgdGhpcy5fZGlzcG9zYWJsZXMgPSBkaXNwb3NhYmxlcztcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgfTtcblxuICBOQXJ5RGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLl9kaXNwb3NhYmxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlc1tpXS5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9kaXNwb3NhYmxlcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIGRpc3Bvc2FibGUgcmVzb3VyY2UgdGhhdCBvbmx5IGRpc3Bvc2VzIGl0cyB1bmRlcmx5aW5nIGRpc3Bvc2FibGUgcmVzb3VyY2Ugd2hlbiBhbGwgZGVwZW5kZW50IGRpc3Bvc2FibGUgb2JqZWN0cyBoYXZlIGJlZW4gZGlzcG9zZWQuXG4gICAqL1xuICB2YXIgUmVmQ291bnREaXNwb3NhYmxlID0gUnguUmVmQ291bnREaXNwb3NhYmxlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIElubmVyRGlzcG9zYWJsZShkaXNwb3NhYmxlKSB7XG4gICAgICB0aGlzLmRpc3Bvc2FibGUgPSBkaXNwb3NhYmxlO1xuICAgICAgdGhpcy5kaXNwb3NhYmxlLmNvdW50Kys7XG4gICAgICB0aGlzLmlzSW5uZXJEaXNwb3NlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIElubmVyRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5kaXNwb3NhYmxlLmlzRGlzcG9zZWQgJiYgIXRoaXMuaXNJbm5lckRpc3Bvc2VkKSB7XG4gICAgICAgIHRoaXMuaXNJbm5lckRpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNwb3NhYmxlLmNvdW50LS07XG4gICAgICAgIGlmICh0aGlzLmRpc3Bvc2FibGUuY291bnQgPT09IDAgJiYgdGhpcy5kaXNwb3NhYmxlLmlzUHJpbWFyeURpc3Bvc2VkKSB7XG4gICAgICAgICAgdGhpcy5kaXNwb3NhYmxlLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZGlzcG9zYWJsZS51bmRlcmx5aW5nRGlzcG9zYWJsZS5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFJlZkNvdW50RGlzcG9zYWJsZSB3aXRoIHRoZSBzcGVjaWZpZWQgZGlzcG9zYWJsZS5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0Rpc3Bvc2FibGV9IGRpc3Bvc2FibGUgVW5kZXJseWluZyBkaXNwb3NhYmxlLlxuICAgICAgKi9cbiAgICBmdW5jdGlvbiBSZWZDb3VudERpc3Bvc2FibGUoZGlzcG9zYWJsZSkge1xuICAgICAgdGhpcy51bmRlcmx5aW5nRGlzcG9zYWJsZSA9IGRpc3Bvc2FibGU7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNQcmltYXJ5RGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3Bvc2VzIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUgb25seSB3aGVuIGFsbCBkZXBlbmRlbnQgZGlzcG9zYWJsZXMgaGF2ZSBiZWVuIGRpc3Bvc2VkXG4gICAgICovXG4gICAgUmVmQ291bnREaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQgJiYgIXRoaXMuaXNQcmltYXJ5RGlzcG9zZWQpIHtcbiAgICAgICAgdGhpcy5pc1ByaW1hcnlEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnVuZGVybHlpbmdEaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZGVwZW5kZW50IGRpc3Bvc2FibGUgdGhhdCB3aGVuIGRpc3Bvc2VkIGRlY3JlYXNlcyB0aGUgcmVmY291bnQgb24gdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICAgKiBAcmV0dXJucyB7RGlzcG9zYWJsZX0gQSBkZXBlbmRlbnQgZGlzcG9zYWJsZSBjb250cmlidXRpbmcgdG8gdGhlIHJlZmVyZW5jZSBjb3VudCB0aGF0IG1hbmFnZXMgdGhlIHVuZGVybHlpbmcgZGlzcG9zYWJsZSdzIGxpZmV0aW1lLlxuICAgICAqL1xuICAgIFJlZkNvdW50RGlzcG9zYWJsZS5wcm90b3R5cGUuZ2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGlzcG9zZWQgPyBkaXNwb3NhYmxlRW1wdHkgOiBuZXcgSW5uZXJEaXNwb3NhYmxlKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUmVmQ291bnREaXNwb3NhYmxlO1xuICB9KSgpO1xuXG4gIHZhciBTY2hlZHVsZWRJdGVtID0gUnguaW50ZXJuYWxzLlNjaGVkdWxlZEl0ZW0gPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBzdGF0ZSwgYWN0aW9uLCBkdWVUaW1lLCBjb21wYXJlcikge1xuICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB0aGlzLmR1ZVRpbWUgPSBkdWVUaW1lO1xuICAgIHRoaXMuY29tcGFyZXIgPSBjb21wYXJlciB8fCBkZWZhdWx0U3ViQ29tcGFyZXI7XG4gICAgdGhpcy5kaXNwb3NhYmxlID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gIH1cblxuICBTY2hlZHVsZWRJdGVtLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kaXNwb3NhYmxlLnNldERpc3Bvc2FibGUodGhpcy5pbnZva2VDb3JlKCkpO1xuICB9O1xuXG4gIFNjaGVkdWxlZEl0ZW0ucHJvdG90eXBlLmNvbXBhcmVUbyA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmVyKHRoaXMuZHVlVGltZSwgb3RoZXIuZHVlVGltZSk7XG4gIH07XG5cbiAgU2NoZWR1bGVkSXRlbS5wcm90b3R5cGUuaXNDYW5jZWxsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcG9zYWJsZS5pc0Rpc3Bvc2VkO1xuICB9O1xuXG4gIFNjaGVkdWxlZEl0ZW0ucHJvdG90eXBlLmludm9rZUNvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3Bvc2FibGVGaXh1cCh0aGlzLmFjdGlvbih0aGlzLnNjaGVkdWxlciwgdGhpcy5zdGF0ZSkpO1xuICB9O1xuXG4gIC8qKiBQcm92aWRlcyBhIHNldCBvZiBzdGF0aWMgcHJvcGVydGllcyB0byBhY2Nlc3MgY29tbW9ubHkgdXNlZCBzY2hlZHVsZXJzLiAqL1xuICB2YXIgU2NoZWR1bGVyID0gUnguU2NoZWR1bGVyID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcigpIHsgfVxuXG4gICAgLyoqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgc2NoZWR1bGVyICovXG4gICAgU2NoZWR1bGVyLmlzU2NoZWR1bGVyID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBzIGluc3RhbmNlb2YgU2NoZWR1bGVyO1xuICAgIH07XG5cbiAgICB2YXIgc2NoZWR1bGVyUHJvdG8gPSBTY2hlZHVsZXIucHJvdG90eXBlO1xuXG4gICAgLyoqXG4gICAqIFNjaGVkdWxlcyBhbiBhY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXG4gICAqIEBwYXJhbSBzdGF0ZSBTdGF0ZSBwYXNzZWQgdG8gdGhlIGFjdGlvbiB0byBiZSBleGVjdXRlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIEFjdGlvbiB0byBiZSBleGVjdXRlZC5cbiAgICogQHJldHVybnMge0Rpc3Bvc2FibGV9IFRoZSBkaXNwb3NhYmxlIG9iamVjdCB1c2VkIHRvIGNhbmNlbCB0aGUgc2NoZWR1bGVkIGFjdGlvbiAoYmVzdCBlZmZvcnQpLlxuICAgKi9cbiAgICBzY2hlZHVsZXJQcm90by5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICAgIH07XG5cbiAgLyoqXG4gICAqIFNjaGVkdWxlcyBhbiBhY3Rpb24gdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgZHVlVGltZS5cbiAgICogQHBhcmFtIHN0YXRlIFN0YXRlIHBhc3NlZCB0byB0aGUgYWN0aW9uIHRvIGJlIGV4ZWN1dGVkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gQWN0aW9uIHRvIGJlIGV4ZWN1dGVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVlVGltZSBSZWxhdGl2ZSB0aW1lIGFmdGVyIHdoaWNoIHRvIGV4ZWN1dGUgdGhlIGFjdGlvbi5cbiAgICogQHJldHVybnMge0Rpc3Bvc2FibGV9IFRoZSBkaXNwb3NhYmxlIG9iamVjdCB1c2VkIHRvIGNhbmNlbCB0aGUgc2NoZWR1bGVkIGFjdGlvbiAoYmVzdCBlZmZvcnQpLlxuICAgKi9cbiAgICBzY2hlZHVsZXJQcm90by5zY2hlZHVsZUZ1dHVyZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZHVlVGltZSwgYWN0aW9uKSB7XG4gICAgICB2YXIgZHQgPSBkdWVUaW1lO1xuICAgICAgZHQgaW5zdGFuY2VvZiBEYXRlICYmIChkdCA9IGR0IC0gdGhpcy5ub3coKSk7XG4gICAgICBkdCA9IFNjaGVkdWxlci5ub3JtYWxpemUoZHQpO1xuXG4gICAgICBpZiAoZHQgPT09IDApIHsgcmV0dXJuIHRoaXMuc2NoZWR1bGUoc3RhdGUsIGFjdGlvbik7IH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlRnV0dXJlKHN0YXRlLCBkdCwgYWN0aW9uKTtcbiAgICB9O1xuXG4gICAgc2NoZWR1bGVyUHJvdG8uX3NjaGVkdWxlRnV0dXJlID0gZnVuY3Rpb24gKHN0YXRlLCBkdWVUaW1lLCBhY3Rpb24pIHtcbiAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCk7XG4gICAgfTtcblxuICAgIC8qKiBHZXRzIHRoZSBjdXJyZW50IHRpbWUgYWNjb3JkaW5nIHRvIHRoZSBsb2NhbCBtYWNoaW5lJ3Mgc3lzdGVtIGNsb2NrLiAqL1xuICAgIFNjaGVkdWxlci5ub3cgPSBkZWZhdWx0Tm93O1xuXG4gICAgLyoqIEdldHMgdGhlIGN1cnJlbnQgdGltZSBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsIG1hY2hpbmUncyBzeXN0ZW0gY2xvY2suICovXG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5ub3cgPSBkZWZhdWx0Tm93O1xuXG4gICAgLyoqXG4gICAgICogTm9ybWFsaXplcyB0aGUgc3BlY2lmaWVkIFRpbWVTcGFuIHZhbHVlIHRvIGEgcG9zaXRpdmUgdmFsdWUuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVTcGFuIFRoZSB0aW1lIHNwYW4gdmFsdWUgdG8gbm9ybWFsaXplLlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBzcGVjaWZpZWQgVGltZVNwYW4gdmFsdWUgaWYgaXQgaXMgemVybyBvciBwb3NpdGl2ZTsgb3RoZXJ3aXNlLCAwXG4gICAgICovXG4gICAgU2NoZWR1bGVyLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uICh0aW1lU3Bhbikge1xuICAgICAgdGltZVNwYW4gPCAwICYmICh0aW1lU3BhbiA9IDApO1xuICAgICAgcmV0dXJuIHRpbWVTcGFuO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2NoZWR1bGVyO1xuICB9KCkpO1xuXG4gIHZhciBub3JtYWxpemVUaW1lID0gU2NoZWR1bGVyLm5vcm1hbGl6ZSwgaXNTY2hlZHVsZXIgPSBTY2hlZHVsZXIuaXNTY2hlZHVsZXI7XG5cbiAgKGZ1bmN0aW9uIChzY2hlZHVsZXJQcm90bykge1xuXG4gICAgZnVuY3Rpb24gaW52b2tlUmVjSW1tZWRpYXRlKHNjaGVkdWxlciwgcGFpcikge1xuICAgICAgdmFyIHN0YXRlID0gcGFpclswXSwgYWN0aW9uID0gcGFpclsxXSwgZ3JvdXAgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpO1xuICAgICAgYWN0aW9uKHN0YXRlLCBpbm5lckFjdGlvbik7XG4gICAgICByZXR1cm4gZ3JvdXA7XG5cbiAgICAgIGZ1bmN0aW9uIGlubmVyQWN0aW9uKHN0YXRlMikge1xuICAgICAgICB2YXIgaXNBZGRlZCA9IGZhbHNlLCBpc0RvbmUgPSBmYWxzZTtcblxuICAgICAgICB2YXIgZCA9IHNjaGVkdWxlci5zY2hlZHVsZShzdGF0ZTIsIHNjaGVkdWxlV29yayk7XG4gICAgICAgIGlmICghaXNEb25lKSB7XG4gICAgICAgICAgZ3JvdXAuYWRkKGQpO1xuICAgICAgICAgIGlzQWRkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVXb3JrKF8sIHN0YXRlMykge1xuICAgICAgICAgIGlmIChpc0FkZGVkKSB7XG4gICAgICAgICAgICBncm91cC5yZW1vdmUoZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzRG9uZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbihzdGF0ZTMsIGlubmVyQWN0aW9uKTtcbiAgICAgICAgICByZXR1cm4gZGlzcG9zYWJsZUVtcHR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52b2tlUmVjRGF0ZShzY2hlZHVsZXIsIHBhaXIpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHBhaXJbMF0sIGFjdGlvbiA9IHBhaXJbMV0sIGdyb3VwID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKTtcbiAgICAgIGFjdGlvbihzdGF0ZSwgaW5uZXJBY3Rpb24pO1xuICAgICAgcmV0dXJuIGdyb3VwO1xuXG4gICAgICBmdW5jdGlvbiBpbm5lckFjdGlvbihzdGF0ZTIsIGR1ZVRpbWUxKSB7XG4gICAgICAgIHZhciBpc0FkZGVkID0gZmFsc2UsIGlzRG9uZSA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBkID0gc2NoZWR1bGVyLnNjaGVkdWxlRnV0dXJlKHN0YXRlMiwgZHVlVGltZTEsIHNjaGVkdWxlV29yayk7XG4gICAgICAgIGlmICghaXNEb25lKSB7XG4gICAgICAgICAgZ3JvdXAuYWRkKGQpO1xuICAgICAgICAgIGlzQWRkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVXb3JrKF8sIHN0YXRlMykge1xuICAgICAgICAgIGlmIChpc0FkZGVkKSB7XG4gICAgICAgICAgICBncm91cC5yZW1vdmUoZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzRG9uZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbihzdGF0ZTMsIGlubmVyQWN0aW9uKTtcbiAgICAgICAgICByZXR1cm4gZGlzcG9zYWJsZUVtcHR5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGFuIGFjdGlvbiB0byBiZSBleGVjdXRlZCByZWN1cnNpdmVseS5cbiAgICAgKiBAcGFyYW0ge01peGVkfSBzdGF0ZSBTdGF0ZSBwYXNzZWQgdG8gdGhlIGFjdGlvbiB0byBiZSBleGVjdXRlZC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gQWN0aW9uIHRvIGV4ZWN1dGUgcmVjdXJzaXZlbHkuIFRoZSBsYXN0IHBhcmFtZXRlciBwYXNzZWQgdG8gdGhlIGFjdGlvbiBpcyB1c2VkIHRvIHRyaWdnZXIgcmVjdXJzaXZlIHNjaGVkdWxpbmcgb2YgdGhlIGFjdGlvbiwgcGFzc2luZyBpbiByZWN1cnNpdmUgaW52b2NhdGlvbiBzdGF0ZS5cbiAgICAgKiBAcmV0dXJucyB7RGlzcG9zYWJsZX0gVGhlIGRpc3Bvc2FibGUgb2JqZWN0IHVzZWQgdG8gY2FuY2VsIHRoZSBzY2hlZHVsZWQgYWN0aW9uIChiZXN0IGVmZm9ydCkuXG4gICAgICovXG4gICAgc2NoZWR1bGVyUHJvdG8uc2NoZWR1bGVSZWN1cnNpdmUgPSBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGUoW3N0YXRlLCBhY3Rpb25dLCBpbnZva2VSZWNJbW1lZGlhdGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYW4gYWN0aW9uIHRvIGJlIGV4ZWN1dGVkIHJlY3Vyc2l2ZWx5IGFmdGVyIGEgc3BlY2lmaWVkIHJlbGF0aXZlIG9yIGFic29sdXRlIGR1ZSB0aW1lLlxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IHN0YXRlIFN0YXRlIHBhc3NlZCB0byB0aGUgYWN0aW9uIHRvIGJlIGV4ZWN1dGVkLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBBY3Rpb24gdG8gZXhlY3V0ZSByZWN1cnNpdmVseS4gVGhlIGxhc3QgcGFyYW1ldGVyIHBhc3NlZCB0byB0aGUgYWN0aW9uIGlzIHVzZWQgdG8gdHJpZ2dlciByZWN1cnNpdmUgc2NoZWR1bGluZyBvZiB0aGUgYWN0aW9uLCBwYXNzaW5nIGluIHRoZSByZWN1cnNpdmUgZHVlIHRpbWUgYW5kIGludm9jYXRpb24gc3RhdGUuXG4gICAgICogQHBhcmFtIHtOdW1iZXIgfCBEYXRlfSBkdWVUaW1lIFJlbGF0aXZlIG9yIGFic29sdXRlIHRpbWUgYWZ0ZXIgd2hpY2ggdG8gZXhlY3V0ZSB0aGUgYWN0aW9uIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICAgKiBAcmV0dXJucyB7RGlzcG9zYWJsZX0gVGhlIGRpc3Bvc2FibGUgb2JqZWN0IHVzZWQgdG8gY2FuY2VsIHRoZSBzY2hlZHVsZWQgYWN0aW9uIChiZXN0IGVmZm9ydCkuXG4gICAgICovXG4gICAgc2NoZWR1bGVyUHJvdG8uc2NoZWR1bGVSZWN1cnNpdmVGdXR1cmUgPSBmdW5jdGlvbiAoc3RhdGUsIGR1ZVRpbWUsIGFjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVGdXR1cmUoW3N0YXRlLCBhY3Rpb25dLCBkdWVUaW1lLCBpbnZva2VSZWNEYXRlKTtcbiAgICB9O1xuXG4gIH0oU2NoZWR1bGVyLnByb3RvdHlwZSkpO1xuXG4gIChmdW5jdGlvbiAoc2NoZWR1bGVyUHJvdG8pIHtcblxuICAgIC8qKlxuICAgICAqIFNjaGVkdWxlcyBhIHBlcmlvZGljIHBpZWNlIG9mIHdvcmsgYnkgZHluYW1pY2FsbHkgZGlzY292ZXJpbmcgdGhlIHNjaGVkdWxlcidzIGNhcGFiaWxpdGllcy4gVGhlIHBlcmlvZGljIHRhc2sgd2lsbCBiZSBzY2hlZHVsZWQgdXNpbmcgd2luZG93LnNldEludGVydmFsIGZvciB0aGUgYmFzZSBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBAcGFyYW0ge01peGVkfSBzdGF0ZSBJbml0aWFsIHN0YXRlIHBhc3NlZCB0byB0aGUgYWN0aW9uIHVwb24gdGhlIGZpcnN0IGl0ZXJhdGlvbi5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcGVyaW9kIFBlcmlvZCBmb3IgcnVubmluZyB0aGUgd29yayBwZXJpb2RpY2FsbHkuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIEFjdGlvbiB0byBiZSBleGVjdXRlZCwgcG90ZW50aWFsbHkgdXBkYXRpbmcgdGhlIHN0YXRlLlxuICAgICAqIEByZXR1cm5zIHtEaXNwb3NhYmxlfSBUaGUgZGlzcG9zYWJsZSBvYmplY3QgdXNlZCB0byBjYW5jZWwgdGhlIHNjaGVkdWxlZCByZWN1cnJpbmcgYWN0aW9uIChiZXN0IGVmZm9ydCkuXG4gICAgICovXG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZVBlcmlvZGljID0gZnVuY3Rpb24oc3RhdGUsIHBlcmlvZCwgYWN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIHJvb3Quc2V0SW50ZXJ2YWwgPT09ICd1bmRlZmluZWQnKSB7IHRocm93IG5ldyBOb3RTdXBwb3J0ZWRFcnJvcigpOyB9XG4gICAgICBwZXJpb2QgPSBub3JtYWxpemVUaW1lKHBlcmlvZCk7XG4gICAgICB2YXIgcyA9IHN0YXRlLCBpZCA9IHJvb3Quc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyBzID0gYWN0aW9uKHMpOyB9LCBwZXJpb2QpO1xuICAgICAgcmV0dXJuIGRpc3Bvc2FibGVDcmVhdGUoZnVuY3Rpb24gKCkgeyByb290LmNsZWFySW50ZXJ2YWwoaWQpOyB9KTtcbiAgICB9O1xuXG4gIH0oU2NoZWR1bGVyLnByb3RvdHlwZSkpO1xuXG4gIC8qKiBHZXRzIGEgc2NoZWR1bGVyIHRoYXQgc2NoZWR1bGVzIHdvcmsgaW1tZWRpYXRlbHkgb24gdGhlIGN1cnJlbnQgdGhyZWFkLiAqL1xuICAgdmFyIEltbWVkaWF0ZVNjaGVkdWxlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoSW1tZWRpYXRlU2NoZWR1bGVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEltbWVkaWF0ZVNjaGVkdWxlcigpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIEltbWVkaWF0ZVNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgcmV0dXJuIGRpc3Bvc2FibGVGaXh1cChhY3Rpb24odGhpcywgc3RhdGUpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEltbWVkaWF0ZVNjaGVkdWxlcjtcbiAgfShTY2hlZHVsZXIpKTtcblxuICB2YXIgaW1tZWRpYXRlU2NoZWR1bGVyID0gU2NoZWR1bGVyLmltbWVkaWF0ZSA9IG5ldyBJbW1lZGlhdGVTY2hlZHVsZXIoKTtcblxuICAvKipcbiAgICogR2V0cyBhIHNjaGVkdWxlciB0aGF0IHNjaGVkdWxlcyB3b3JrIGFzIHNvb24gYXMgcG9zc2libGUgb24gdGhlIGN1cnJlbnQgdGhyZWFkLlxuICAgKi9cbiAgdmFyIEN1cnJlbnRUaHJlYWRTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIHZhciBxdWV1ZTtcblxuICAgIGZ1bmN0aW9uIHJ1blRyYW1wb2xpbmUgKCkge1xuICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZS5kZXF1ZXVlKCk7XG4gICAgICAgICFpdGVtLmlzQ2FuY2VsbGVkKCkgJiYgaXRlbS5pbnZva2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmhlcml0cyhDdXJyZW50VGhyZWFkU2NoZWR1bGVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEN1cnJlbnRUaHJlYWRTY2hlZHVsZXIoKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBDdXJyZW50VGhyZWFkU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICB2YXIgc2kgPSBuZXcgU2NoZWR1bGVkSXRlbSh0aGlzLCBzdGF0ZSwgYWN0aW9uLCB0aGlzLm5vdygpKTtcblxuICAgICAgaWYgKCFxdWV1ZSkge1xuICAgICAgICBxdWV1ZSA9IG5ldyBQcmlvcml0eVF1ZXVlKDQpO1xuICAgICAgICBxdWV1ZS5lbnF1ZXVlKHNpKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2gocnVuVHJhbXBvbGluZSkoKTtcbiAgICAgICAgcXVldWUgPSBudWxsO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikgeyB0aHJvd2VyKHJlc3VsdC5lKTsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWUuZW5xdWV1ZShzaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2kuZGlzcG9zYWJsZTtcbiAgICB9O1xuXG4gICAgQ3VycmVudFRocmVhZFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGVSZXF1aXJlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICFxdWV1ZTsgfTtcblxuICAgIHJldHVybiBDdXJyZW50VGhyZWFkU2NoZWR1bGVyO1xuICB9KFNjaGVkdWxlcikpO1xuXG4gIHZhciBjdXJyZW50VGhyZWFkU2NoZWR1bGVyID0gU2NoZWR1bGVyLmN1cnJlbnRUaHJlYWQgPSBuZXcgQ3VycmVudFRocmVhZFNjaGVkdWxlcigpO1xuXG4gIHZhciBTY2hlZHVsZVBlcmlvZGljUmVjdXJzaXZlID0gUnguaW50ZXJuYWxzLlNjaGVkdWxlUGVyaW9kaWNSZWN1cnNpdmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVRpY2soc2VsZikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHRpY2soY29tbWFuZCwgcmVjdXJzZSkge1xuICAgICAgICByZWN1cnNlKDAsIHNlbGYuX3BlcmlvZCk7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRyeUNhdGNoKHNlbGYuX2FjdGlvbikoc2VsZi5fc3RhdGUpO1xuICAgICAgICBpZiAoc3RhdGUgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgc2VsZi5fY2FuY2VsLmRpc3Bvc2UoKTtcbiAgICAgICAgICB0aHJvd2VyKHN0YXRlLmUpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuX3N0YXRlID0gc3RhdGU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNjaGVkdWxlUGVyaW9kaWNSZWN1cnNpdmUoc2NoZWR1bGVyLCBzdGF0ZSwgcGVyaW9kLCBhY3Rpb24pIHtcbiAgICAgIHRoaXMuX3NjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICB0aGlzLl9wZXJpb2QgPSBwZXJpb2Q7XG4gICAgICB0aGlzLl9hY3Rpb24gPSBhY3Rpb247XG4gICAgfVxuXG4gICAgU2NoZWR1bGVQZXJpb2RpY1JlY3Vyc2l2ZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgdGhpcy5fY2FuY2VsID0gZDtcbiAgICAgIGQuc2V0RGlzcG9zYWJsZSh0aGlzLl9zY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmVGdXR1cmUoMCwgdGhpcy5fcGVyaW9kLCBjcmVhdGVUaWNrKHRoaXMpKSk7XG5cbiAgICAgIHJldHVybiBkO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2NoZWR1bGVQZXJpb2RpY1JlY3Vyc2l2ZTtcbiAgfSgpKTtcblxuICB2YXIgc2NoZWR1bGVNZXRob2QsIGNsZWFyTWV0aG9kO1xuXG4gIHZhciBsb2NhbFRpbWVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbG9jYWxTZXRUaW1lb3V0LCBsb2NhbENsZWFyVGltZW91dCA9IG5vb3A7XG4gICAgaWYgKCEhcm9vdC5zZXRUaW1lb3V0KSB7XG4gICAgICBsb2NhbFNldFRpbWVvdXQgPSByb290LnNldFRpbWVvdXQ7XG4gICAgICBsb2NhbENsZWFyVGltZW91dCA9IHJvb3QuY2xlYXJUaW1lb3V0O1xuICAgIH0gZWxzZSBpZiAoISFyb290LldTY3JpcHQpIHtcbiAgICAgIGxvY2FsU2V0VGltZW91dCA9IGZ1bmN0aW9uIChmbiwgdGltZSkge1xuICAgICAgICByb290LldTY3JpcHQuU2xlZXAodGltZSk7XG4gICAgICAgIGZuKCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgTm90U3VwcG9ydGVkRXJyb3IoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2V0VGltZW91dDogbG9jYWxTZXRUaW1lb3V0LFxuICAgICAgY2xlYXJUaW1lb3V0OiBsb2NhbENsZWFyVGltZW91dFxuICAgIH07XG4gIH0oKSk7XG4gIHZhciBsb2NhbFNldFRpbWVvdXQgPSBsb2NhbFRpbWVyLnNldFRpbWVvdXQsXG4gICAgbG9jYWxDbGVhclRpbWVvdXQgPSBsb2NhbFRpbWVyLmNsZWFyVGltZW91dDtcblxuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxLCB0YXNrc0J5SGFuZGxlID0ge30sIGN1cnJlbnRseVJ1bm5pbmcgPSBmYWxzZTtcblxuICAgIGNsZWFyTWV0aG9kID0gZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcnVuVGFzayhoYW5kbGUpIHtcbiAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nKSB7XG4gICAgICAgIGxvY2FsU2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJ1blRhc2soaGFuZGxlKTsgfSwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godGFzaykoKTtcbiAgICAgICAgICBjbGVhck1ldGhvZChoYW5kbGUpO1xuICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikgeyB0aHJvd2VyKHJlc3VsdC5lKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlTmF0aXZlID0gbmV3IFJlZ0V4cCgnXicgK1xuICAgICAgU3RyaW5nKHRvU3RyaW5nKVxuICAgICAgICAucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKVxuICAgICAgICAucmVwbGFjZSgvdG9TdHJpbmd8IGZvciBbXlxcXV0rL2csICcuKj8nKSArICckJ1xuICAgICk7XG5cbiAgICB2YXIgc2V0SW1tZWRpYXRlID0gdHlwZW9mIChzZXRJbW1lZGlhdGUgPSBmcmVlR2xvYmFsICYmIG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5zZXRJbW1lZGlhdGUpID09ICdmdW5jdGlvbicgJiZcbiAgICAgICFyZU5hdGl2ZS50ZXN0KHNldEltbWVkaWF0ZSkgJiYgc2V0SW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2VTdXBwb3J0ZWQgKCkge1xuICAgICAgLy8gRW5zdXJlIG5vdCBpbiBhIHdvcmtlclxuICAgICAgaWYgKCFyb290LnBvc3RNZXNzYWdlIHx8IHJvb3QuaW1wb3J0U2NyaXB0cykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIHZhciBpc0FzeW5jID0gZmFsc2UsIG9sZEhhbmRsZXIgPSByb290Lm9ubWVzc2FnZTtcbiAgICAgIC8vIFRlc3QgZm9yIGFzeW5jXG4gICAgICByb290Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uICgpIHsgaXNBc3luYyA9IHRydWU7IH07XG4gICAgICByb290LnBvc3RNZXNzYWdlKCcnLCAnKicpO1xuICAgICAgcm9vdC5vbm1lc3NhZ2UgPSBvbGRIYW5kbGVyO1xuXG4gICAgICByZXR1cm4gaXNBc3luYztcbiAgICB9XG5cbiAgICAvLyBVc2UgaW4gb3JkZXIsIHNldEltbWVkaWF0ZSwgbmV4dFRpY2ssIHBvc3RNZXNzYWdlLCBNZXNzYWdlQ2hhbm5lbCwgc2NyaXB0IHJlYWR5c3RhdGVjaGFuZ2VkLCBzZXRUaW1lb3V0XG4gICAgaWYgKGlzRnVuY3Rpb24oc2V0SW1tZWRpYXRlKSkge1xuICAgICAgc2NoZWR1bGVNZXRob2QgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpZCA9IG5leHRIYW5kbGUrKztcbiAgICAgICAgdGFza3NCeUhhbmRsZVtpZF0gPSBhY3Rpb247XG4gICAgICAgIHNldEltbWVkaWF0ZShmdW5jdGlvbiAoKSB7IHJ1blRhc2soaWQpOyB9KTtcblxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgICAgc2NoZWR1bGVNZXRob2QgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpZCA9IG5leHRIYW5kbGUrKztcbiAgICAgICAgdGFza3NCeUhhbmRsZVtpZF0gPSBhY3Rpb247XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5UYXNrKGlkKTsgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHBvc3RNZXNzYWdlU3VwcG9ydGVkKCkpIHtcbiAgICAgIHZhciBNU0dfUFJFRklYID0gJ21zLnJ4LnNjaGVkdWxlJyArIE1hdGgucmFuZG9tKCk7XG5cbiAgICAgIHZhciBvbkdsb2JhbFBvc3RNZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIE9ubHkgaWYgd2UncmUgYSBtYXRjaCB0byBhdm9pZCBhbnkgb3RoZXIgZ2xvYmFsIGV2ZW50c1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50LmRhdGEgPT09ICdzdHJpbmcnICYmIGV2ZW50LmRhdGEuc3Vic3RyaW5nKDAsIE1TR19QUkVGSVgubGVuZ3RoKSA9PT0gTVNHX1BSRUZJWCkge1xuICAgICAgICAgIHJ1blRhc2soZXZlbnQuZGF0YS5zdWJzdHJpbmcoTVNHX1BSRUZJWC5sZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25HbG9iYWxQb3N0TWVzc2FnZSwgZmFsc2UpO1xuXG4gICAgICBzY2hlZHVsZU1ldGhvZCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGlkID0gbmV4dEhhbmRsZSsrO1xuICAgICAgICB0YXNrc0J5SGFuZGxlW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgcm9vdC5wb3N0TWVzc2FnZShNU0dfUFJFRklYICsgY3VycmVudElkLCAnKicpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoISFyb290Lk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICB2YXIgY2hhbm5lbCA9IG5ldyByb290Lk1lc3NhZ2VDaGFubmVsKCk7XG5cbiAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsgcnVuVGFzayhlLmRhdGEpOyB9O1xuXG4gICAgICBzY2hlZHVsZU1ldGhvZCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGlkID0gbmV4dEhhbmRsZSsrO1xuICAgICAgICB0YXNrc0J5SGFuZGxlW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShpZCk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgnZG9jdW1lbnQnIGluIHJvb3QgJiYgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gcm9vdC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSkge1xuXG4gICAgICBzY2hlZHVsZU1ldGhvZCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSByb290LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICB2YXIgaWQgPSBuZXh0SGFuZGxlKys7XG4gICAgICAgIHRhc2tzQnlIYW5kbGVbaWRdID0gYWN0aW9uO1xuXG4gICAgICAgIHNjcmlwdEVsZW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJ1blRhc2soaWQpO1xuICAgICAgICAgIHNjcmlwdEVsZW1lbnQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICBzY3JpcHRFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0RWxlbWVudCk7XG4gICAgICAgICAgc2NyaXB0RWxlbWVudCA9IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIHJvb3QuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlTWV0aG9kID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgaWQgPSBuZXh0SGFuZGxlKys7XG4gICAgICAgIHRhc2tzQnlIYW5kbGVbaWRdID0gYWN0aW9uO1xuICAgICAgICBsb2NhbFNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJ1blRhc2soaWQpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9O1xuICAgIH1cbiAgfSgpKTtcblxuICAvKipcbiAgICogR2V0cyBhIHNjaGVkdWxlciB0aGF0IHNjaGVkdWxlcyB3b3JrIHZpYSBhIHRpbWVkIGNhbGxiYWNrIGJhc2VkIHVwb24gcGxhdGZvcm0uXG4gICAqL1xuICAgdmFyIERlZmF1bHRTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgICBpbmhlcml0cyhEZWZhdWx0U2NoZWR1bGVyLCBfX3N1cGVyX18pO1xuICAgICBmdW5jdGlvbiBEZWZhdWx0U2NoZWR1bGVyKCkge1xuICAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgICB9XG5cbiAgICAgZnVuY3Rpb24gc2NoZWR1bGVBY3Rpb24oZGlzcG9zYWJsZSwgYWN0aW9uLCBzY2hlZHVsZXIsIHN0YXRlKSB7XG4gICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNjaGVkdWxlKCkge1xuICAgICAgICAgIWRpc3Bvc2FibGUuaXNEaXNwb3NlZCAmJiBkaXNwb3NhYmxlLnNldERpc3Bvc2FibGUoRGlzcG9zYWJsZS5fZml4dXAoYWN0aW9uKHNjaGVkdWxlciwgc3RhdGUpKSk7XG4gICAgICAgfTtcbiAgICAgfVxuXG4gICAgIGZ1bmN0aW9uIENsZWFyRGlzcG9zYWJsZShtZXRob2QsIGlkKSB7XG4gICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICB0aGlzLl9tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgIH1cblxuICAgICBDbGVhckRpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgICB0aGlzLl9tZXRob2QuY2FsbChudWxsLCB0aGlzLl9pZCk7XG4gICAgICAgfVxuICAgICB9O1xuXG4gICAgRGVmYXVsdFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgdmFyIGRpc3Bvc2FibGUgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKSxcbiAgICAgICAgICBpZCA9IHNjaGVkdWxlTWV0aG9kKHNjaGVkdWxlQWN0aW9uKGRpc3Bvc2FibGUsIGFjdGlvbiwgdGhpcywgc3RhdGUpKTtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShkaXNwb3NhYmxlLCBuZXcgQ2xlYXJEaXNwb3NhYmxlKGNsZWFyTWV0aG9kLCBpZCkpO1xuICAgIH07XG5cbiAgICBEZWZhdWx0U2NoZWR1bGVyLnByb3RvdHlwZS5fc2NoZWR1bGVGdXR1cmUgPSBmdW5jdGlvbiAoc3RhdGUsIGR1ZVRpbWUsIGFjdGlvbikge1xuICAgICAgaWYgKGR1ZVRpbWUgPT09IDApIHsgcmV0dXJuIHRoaXMuc2NoZWR1bGUoc3RhdGUsIGFjdGlvbik7IH1cbiAgICAgIHZhciBkaXNwb3NhYmxlID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCksXG4gICAgICAgICAgaWQgPSBsb2NhbFNldFRpbWVvdXQoc2NoZWR1bGVBY3Rpb24oZGlzcG9zYWJsZSwgYWN0aW9uLCB0aGlzLCBzdGF0ZSksIGR1ZVRpbWUpO1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKGRpc3Bvc2FibGUsIG5ldyBDbGVhckRpc3Bvc2FibGUobG9jYWxDbGVhclRpbWVvdXQsIGlkKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBEZWZhdWx0U2NoZWR1bGVyO1xuICB9KFNjaGVkdWxlcikpO1xuXG4gIHZhciBkZWZhdWx0U2NoZWR1bGVyID0gU2NoZWR1bGVyWydkZWZhdWx0J10gPSBTY2hlZHVsZXIuYXN5bmMgPSBuZXcgRGVmYXVsdFNjaGVkdWxlcigpO1xuXG4gIGZ1bmN0aW9uIEluZGV4ZWRJdGVtKGlkLCB2YWx1ZSkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBJbmRleGVkSXRlbS5wcm90b3R5cGUuY29tcGFyZVRvID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgdmFyIGMgPSB0aGlzLnZhbHVlLmNvbXBhcmVUbyhvdGhlci52YWx1ZSk7XG4gICAgYyA9PT0gMCAmJiAoYyA9IHRoaXMuaWQgLSBvdGhlci5pZCk7XG4gICAgcmV0dXJuIGM7XG4gIH07XG5cbiAgdmFyIFByaW9yaXR5UXVldWUgPSBSeC5pbnRlcm5hbHMuUHJpb3JpdHlRdWV1ZSA9IGZ1bmN0aW9uIChjYXBhY2l0eSkge1xuICAgIHRoaXMuaXRlbXMgPSBuZXcgQXJyYXkoY2FwYWNpdHkpO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgfTtcblxuICB2YXIgcHJpb3JpdHlQcm90byA9IFByaW9yaXR5UXVldWUucHJvdG90eXBlO1xuICBwcmlvcml0eVByb3RvLmlzSGlnaGVyUHJpb3JpdHkgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1tsZWZ0XS5jb21wYXJlVG8odGhpcy5pdGVtc1tyaWdodF0pIDwgMDtcbiAgfTtcblxuICBwcmlvcml0eVByb3RvLnBlcmNvbGF0ZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCB8fCBpbmRleCA8IDApIHsgcmV0dXJuOyB9XG4gICAgdmFyIHBhcmVudCA9IGluZGV4IC0gMSA+PiAxO1xuICAgIGlmIChwYXJlbnQgPCAwIHx8IHBhcmVudCA9PT0gaW5kZXgpIHsgcmV0dXJuOyB9XG4gICAgaWYgKHRoaXMuaXNIaWdoZXJQcmlvcml0eShpbmRleCwgcGFyZW50KSkge1xuICAgICAgdmFyIHRlbXAgPSB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gdGhpcy5pdGVtc1twYXJlbnRdO1xuICAgICAgdGhpcy5pdGVtc1twYXJlbnRdID0gdGVtcDtcbiAgICAgIHRoaXMucGVyY29sYXRlKHBhcmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHByaW9yaXR5UHJvdG8uaGVhcGlmeSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICtpbmRleCB8fCAoaW5kZXggPSAwKTtcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGggfHwgaW5kZXggPCAwKSB7IHJldHVybjsgfVxuICAgIHZhciBsZWZ0ID0gMiAqIGluZGV4ICsgMSxcbiAgICAgICAgcmlnaHQgPSAyICogaW5kZXggKyAyLFxuICAgICAgICBmaXJzdCA9IGluZGV4O1xuICAgIGlmIChsZWZ0IDwgdGhpcy5sZW5ndGggJiYgdGhpcy5pc0hpZ2hlclByaW9yaXR5KGxlZnQsIGZpcnN0KSkge1xuICAgICAgZmlyc3QgPSBsZWZ0O1xuICAgIH1cbiAgICBpZiAocmlnaHQgPCB0aGlzLmxlbmd0aCAmJiB0aGlzLmlzSGlnaGVyUHJpb3JpdHkocmlnaHQsIGZpcnN0KSkge1xuICAgICAgZmlyc3QgPSByaWdodDtcbiAgICB9XG4gICAgaWYgKGZpcnN0ICE9PSBpbmRleCkge1xuICAgICAgdmFyIHRlbXAgPSB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gdGhpcy5pdGVtc1tmaXJzdF07XG4gICAgICB0aGlzLml0ZW1zW2ZpcnN0XSA9IHRlbXA7XG4gICAgICB0aGlzLmhlYXBpZnkoZmlyc3QpO1xuICAgIH1cbiAgfTtcblxuICBwcmlvcml0eVByb3RvLnBlZWsgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLml0ZW1zWzBdLnZhbHVlOyB9O1xuXG4gIHByaW9yaXR5UHJvdG8ucmVtb3ZlQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB0aGlzLml0ZW1zW2luZGV4XSA9IHRoaXMuaXRlbXNbLS10aGlzLmxlbmd0aF07XG4gICAgdGhpcy5pdGVtc1t0aGlzLmxlbmd0aF0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFwaWZ5KCk7XG4gIH07XG5cbiAgcHJpb3JpdHlQcm90by5kZXF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnBlZWsoKTtcbiAgICB0aGlzLnJlbW92ZUF0KDApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcHJpb3JpdHlQcm90by5lbnF1ZXVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmxlbmd0aCsrO1xuICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbmV3IEluZGV4ZWRJdGVtKFByaW9yaXR5UXVldWUuY291bnQrKywgaXRlbSk7XG4gICAgdGhpcy5wZXJjb2xhdGUoaW5kZXgpO1xuICB9O1xuXG4gIHByaW9yaXR5UHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLml0ZW1zW2ldLnZhbHVlID09PSBpdGVtKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXQoaSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIFByaW9yaXR5UXVldWUuY291bnQgPSAwO1xuXG4gIC8qKlxuICAgKiAgUmVwcmVzZW50cyBhIG5vdGlmaWNhdGlvbiB0byBhbiBvYnNlcnZlci5cbiAgICovXG4gIHZhciBOb3RpZmljYXRpb24gPSBSeC5Ob3RpZmljYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vdGlmaWNhdGlvbigpIHtcblxuICAgIH1cblxuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuX2FjY2VwdCA9IGZ1bmN0aW9uIChvbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKSB7XG4gICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICAgIH07XG5cbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLl9hY2NlcHRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKG9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEVycm9yKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEludm9rZXMgdGhlIGRlbGVnYXRlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG5vdGlmaWNhdGlvbiBvciB0aGUgb2JzZXJ2ZXIncyBtZXRob2QgY29ycmVzcG9uZGluZyB0byB0aGUgbm90aWZpY2F0aW9uIGFuZCByZXR1cm5zIHRoZSBwcm9kdWNlZCByZXN1bHQuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgTm90aWZpY2F0aW9uXG4gICAgICogQHBhcmFtIHtBbnl9IG9ic2VydmVyT3JPbk5leHQgRGVsZWdhdGUgdG8gaW52b2tlIGZvciBhbiBPbk5leHQgbm90aWZpY2F0aW9uIG9yIE9ic2VydmVyIHRvIGludm9rZSB0aGUgbm90aWZpY2F0aW9uIG9uLi5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkVycm9yIERlbGVnYXRlIHRvIGludm9rZSBmb3IgYW4gT25FcnJvciBub3RpZmljYXRpb24uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZWQgRGVsZWdhdGUgdG8gaW52b2tlIGZvciBhbiBPbkNvbXBsZXRlZCBub3RpZmljYXRpb24uXG4gICAgICogQHJldHVybnMge0FueX0gUmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBvYnNlcnZhdGlvbi5cbiAgICAgKi9cbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uIChvYnNlcnZlck9yT25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuIG9ic2VydmVyT3JPbk5leHQgJiYgdHlwZW9mIG9ic2VydmVyT3JPbk5leHQgPT09ICdvYmplY3QnID9cbiAgICAgICAgdGhpcy5fYWNjZXB0T2JzZXJ2YWJsZShvYnNlcnZlck9yT25OZXh0KSA6XG4gICAgICAgIHRoaXMuX2FjY2VwdChvYnNlcnZlck9yT25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aXRoIGEgc2luZ2xlIG5vdGlmaWNhdGlvbi5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBOb3RpZmljYXRpb25zXG4gICAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIFNjaGVkdWxlciB0byBzZW5kIG91dCB0aGUgbm90aWZpY2F0aW9uIGNhbGxzIG9uLlxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHN1cmZhY2VzIHRoZSBiZWhhdmlvciBvZiB0aGUgbm90aWZpY2F0aW9uIHVwb24gc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUudG9PYnNlcnZhYmxlID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gaW1tZWRpYXRlU2NoZWR1bGVyKTtcbiAgICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKHNlbGYsIGZ1bmN0aW9uIChfLCBub3RpZmljYXRpb24pIHtcbiAgICAgICAgICBub3RpZmljYXRpb24uX2FjY2VwdE9ic2VydmFibGUobyk7XG4gICAgICAgICAgbm90aWZpY2F0aW9uLmtpbmQgPT09ICdOJyAmJiBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBOb3RpZmljYXRpb247XG4gIH0pKCk7XG5cbiAgdmFyIE9uTmV4dE5vdGlmaWNhdGlvbiA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoT25OZXh0Tm90aWZpY2F0aW9uLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIE9uTmV4dE5vdGlmaWNhdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5raW5kID0gJ04nO1xuICAgIH1cblxuICAgIE9uTmV4dE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuX2FjY2VwdCA9IGZ1bmN0aW9uIChvbk5leHQpIHtcbiAgICAgIHJldHVybiBvbk5leHQodGhpcy52YWx1ZSk7XG4gICAgfTtcblxuICAgIE9uTmV4dE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuX2FjY2VwdE9ic2VydmFibGUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIG8ub25OZXh0KHRoaXMudmFsdWUpO1xuICAgIH07XG5cbiAgICBPbk5leHROb3RpZmljYXRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdPbk5leHQoJyArIHRoaXMudmFsdWUgKyAnKSc7XG4gICAgfTtcblxuICAgIHJldHVybiBPbk5leHROb3RpZmljYXRpb247XG4gIH0oTm90aWZpY2F0aW9uKSk7XG5cbiAgdmFyIE9uRXJyb3JOb3RpZmljYXRpb24gPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE9uRXJyb3JOb3RpZmljYXRpb24sIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gT25FcnJvck5vdGlmaWNhdGlvbihlcnJvcikge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgdGhpcy5raW5kID0gJ0UnO1xuICAgIH1cblxuICAgIE9uRXJyb3JOb3RpZmljYXRpb24ucHJvdG90eXBlLl9hY2NlcHQgPSBmdW5jdGlvbiAob25OZXh0LCBvbkVycm9yKSB7XG4gICAgICByZXR1cm4gb25FcnJvcih0aGlzLmVycm9yKTtcbiAgICB9O1xuXG4gICAgT25FcnJvck5vdGlmaWNhdGlvbi5wcm90b3R5cGUuX2FjY2VwdE9ic2VydmFibGUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIG8ub25FcnJvcih0aGlzLmVycm9yKTtcbiAgICB9O1xuXG4gICAgT25FcnJvck5vdGlmaWNhdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ09uRXJyb3IoJyArIHRoaXMuZXJyb3IgKyAnKSc7XG4gICAgfTtcblxuICAgIHJldHVybiBPbkVycm9yTm90aWZpY2F0aW9uO1xuICB9KE5vdGlmaWNhdGlvbikpO1xuXG4gIHZhciBPbkNvbXBsZXRlZE5vdGlmaWNhdGlvbiA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoT25Db21wbGV0ZWROb3RpZmljYXRpb24sIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gT25Db21wbGV0ZWROb3RpZmljYXRpb24oKSB7XG4gICAgICB0aGlzLmtpbmQgPSAnQyc7XG4gICAgfVxuXG4gICAgT25Db21wbGV0ZWROb3RpZmljYXRpb24ucHJvdG90eXBlLl9hY2NlcHQgPSBmdW5jdGlvbiAob25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuIG9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIE9uQ29tcGxldGVkTm90aWZpY2F0aW9uLnByb3RvdHlwZS5fYWNjZXB0T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICBPbkNvbXBsZXRlZE5vdGlmaWNhdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ09uQ29tcGxldGVkKCknO1xuICAgIH07XG5cbiAgICByZXR1cm4gT25Db21wbGV0ZWROb3RpZmljYXRpb247XG4gIH0oTm90aWZpY2F0aW9uKSk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhbiBPbk5leHQgbm90aWZpY2F0aW9uIHRvIGFuIG9ic2VydmVyLlxuICAgKiBAcGFyYW0ge0FueX0gdmFsdWUgVGhlIHZhbHVlIGNvbnRhaW5lZCBpbiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7Tm90aWZpY2F0aW9ufSBUaGUgT25OZXh0IG5vdGlmaWNhdGlvbiBjb250YWluaW5nIHRoZSB2YWx1ZS5cbiAgICovXG4gIHZhciBub3RpZmljYXRpb25DcmVhdGVPbk5leHQgPSBOb3RpZmljYXRpb24uY3JlYXRlT25OZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBPbk5leHROb3RpZmljYXRpb24odmFsdWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgYW4gT25FcnJvciBub3RpZmljYXRpb24gdG8gYW4gb2JzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7QW55fSBlcnJvciBUaGUgZXhjZXB0aW9uIGNvbnRhaW5lZCBpbiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcmV0dXJucyB7Tm90aWZpY2F0aW9ufSBUaGUgT25FcnJvciBub3RpZmljYXRpb24gY29udGFpbmluZyB0aGUgZXhjZXB0aW9uLlxuICAgKi9cbiAgdmFyIG5vdGlmaWNhdGlvbkNyZWF0ZU9uRXJyb3IgPSBOb3RpZmljYXRpb24uY3JlYXRlT25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBuZXcgT25FcnJvck5vdGlmaWNhdGlvbihlcnJvcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhbiBPbkNvbXBsZXRlZCBub3RpZmljYXRpb24gdG8gYW4gb2JzZXJ2ZXIuXG4gICAqIEByZXR1cm5zIHtOb3RpZmljYXRpb259IFRoZSBPbkNvbXBsZXRlZCBub3RpZmljYXRpb24uXG4gICAqL1xuICB2YXIgbm90aWZpY2F0aW9uQ3JlYXRlT25Db21wbGV0ZWQgPSBOb3RpZmljYXRpb24uY3JlYXRlT25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBPbkNvbXBsZXRlZE5vdGlmaWNhdGlvbigpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdXBwb3J0cyBwdXNoLXN0eWxlIGl0ZXJhdGlvbiBvdmVyIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqL1xuICB2YXIgT2JzZXJ2ZXIgPSBSeC5PYnNlcnZlciA9IGZ1bmN0aW9uICgpIHsgfTtcblxuICAvKipcbiAgICogIENyZWF0ZXMgYW4gb2JzZXJ2ZXIgZnJvbSB0aGUgc3BlY2lmaWVkIE9uTmV4dCwgYWxvbmcgd2l0aCBvcHRpb25hbCBPbkVycm9yLCBhbmQgT25Db21wbGV0ZWQgYWN0aW9ucy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uTmV4dF0gT2JzZXJ2ZXIncyBPbk5leHQgYWN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25FcnJvcl0gT2JzZXJ2ZXIncyBPbkVycm9yIGFjdGlvbiBpbXBsZW1lbnRhdGlvbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uQ29tcGxldGVkXSBPYnNlcnZlcidzIE9uQ29tcGxldGVkIGFjdGlvbiBpbXBsZW1lbnRhdGlvbi5cbiAgICogQHJldHVybnMge09ic2VydmVyfSBUaGUgb2JzZXJ2ZXIgb2JqZWN0IGltcGxlbWVudGVkIHVzaW5nIHRoZSBnaXZlbiBhY3Rpb25zLlxuICAgKi9cbiAgdmFyIG9ic2VydmVyQ3JlYXRlID0gT2JzZXJ2ZXIuY3JlYXRlID0gZnVuY3Rpb24gKG9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpIHtcbiAgICBvbk5leHQgfHwgKG9uTmV4dCA9IG5vb3ApO1xuICAgIG9uRXJyb3IgfHwgKG9uRXJyb3IgPSBkZWZhdWx0RXJyb3IpO1xuICAgIG9uQ29tcGxldGVkIHx8IChvbkNvbXBsZXRlZCA9IG5vb3ApO1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2ZXIob25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgT2JzZXJ2ZXIgY2xhc3MuXG4gICAqIFRoaXMgYmFzZSBjbGFzcyBlbmZvcmNlcyB0aGUgZ3JhbW1hciBvZiBvYnNlcnZlcnMgd2hlcmUgT25FcnJvciBhbmQgT25Db21wbGV0ZWQgYXJlIHRlcm1pbmFsIG1lc3NhZ2VzLlxuICAgKi9cbiAgdmFyIEFic3RyYWN0T2JzZXJ2ZXIgPSBSeC5pbnRlcm5hbHMuQWJzdHJhY3RPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQWJzdHJhY3RPYnNlcnZlciwgX19zdXBlcl9fKTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgb2JzZXJ2ZXIgaW4gYSBub24tc3RvcHBlZCBzdGF0ZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBYnN0cmFjdE9ic2VydmVyKCkge1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBNdXN0IGJlIGltcGxlbWVudGVkIGJ5IG90aGVyIG9ic2VydmVyc1xuICAgIEFic3RyYWN0T2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBub3RJbXBsZW1lbnRlZDtcbiAgICBBYnN0cmFjdE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IG5vdEltcGxlbWVudGVkO1xuICAgIEFic3RyYWN0T2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IG5vdEltcGxlbWVudGVkO1xuXG4gICAgLyoqXG4gICAgICogTm90aWZpZXMgdGhlIG9ic2VydmVyIG9mIGEgbmV3IGVsZW1lbnQgaW4gdGhlIHNlcXVlbmNlLlxuICAgICAqIEBwYXJhbSB7QW55fSB2YWx1ZSBOZXh0IGVsZW1lbnQgaW4gdGhlIHNlcXVlbmNlLlxuICAgICAqL1xuICAgIEFic3RyYWN0T2JzZXJ2ZXIucHJvdG90eXBlLm9uTmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgIXRoaXMuaXNTdG9wcGVkICYmIHRoaXMubmV4dCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5vdGlmaWVzIHRoZSBvYnNlcnZlciB0aGF0IGFuIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQuXG4gICAgICogQHBhcmFtIHtBbnl9IGVycm9yIFRoZSBlcnJvciB0aGF0IGhhcyBvY2N1cnJlZC5cbiAgICAgKi9cbiAgICBBYnN0cmFjdE9ic2VydmVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5vdGlmaWVzIHRoZSBvYnNlcnZlciBvZiB0aGUgZW5kIG9mIHRoZSBzZXF1ZW5jZS5cbiAgICAgKi9cbiAgICBBYnN0cmFjdE9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlcyB0aGUgb2JzZXJ2ZXIsIGNhdXNpbmcgaXQgdG8gdHJhbnNpdGlvbiB0byB0aGUgc3RvcHBlZCBzdGF0ZS5cbiAgICAgKi9cbiAgICBBYnN0cmFjdE9ic2VydmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkgeyB0aGlzLmlzU3RvcHBlZCA9IHRydWU7IH07XG5cbiAgICBBYnN0cmFjdE9ic2VydmVyLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yKGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWJzdHJhY3RPYnNlcnZlcjtcbiAgfShPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiBDbGFzcyB0byBjcmVhdGUgYW4gT2JzZXJ2ZXIgaW5zdGFuY2UgZnJvbSBkZWxlZ2F0ZS1iYXNlZCBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIG9uKiBtZXRob2RzLlxuICAgKi9cbiAgdmFyIEFub255bW91c09ic2VydmVyID0gUnguQW5vbnltb3VzT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEFub255bW91c09ic2VydmVyLCBfX3N1cGVyX18pO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBvYnNlcnZlciBmcm9tIHRoZSBzcGVjaWZpZWQgT25OZXh0LCBPbkVycm9yLCBhbmQgT25Db21wbGV0ZWQgYWN0aW9ucy5cbiAgICAgKiBAcGFyYW0ge0FueX0gb25OZXh0IE9ic2VydmVyJ3MgT25OZXh0IGFjdGlvbiBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBAcGFyYW0ge0FueX0gb25FcnJvciBPYnNlcnZlcidzIE9uRXJyb3IgYWN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgICAqIEBwYXJhbSB7QW55fSBvbkNvbXBsZXRlZCBPYnNlcnZlcidzIE9uQ29tcGxldGVkIGFjdGlvbiBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBbm9ueW1vdXNPYnNlcnZlcihvbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuX29uTmV4dCA9IG9uTmV4dDtcbiAgICAgIHRoaXMuX29uRXJyb3IgPSBvbkVycm9yO1xuICAgICAgdGhpcy5fb25Db21wbGV0ZWQgPSBvbkNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyB0aGUgb25OZXh0IGFjdGlvbi5cbiAgICAgKiBAcGFyYW0ge0FueX0gdmFsdWUgTmV4dCBlbGVtZW50IGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgKi9cbiAgICBBbm9ueW1vdXNPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdGhpcy5fb25OZXh0KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgdGhlIG9uRXJyb3IgYWN0aW9uLlxuICAgICAqIEBwYXJhbSB7QW55fSBlcnJvciBUaGUgZXJyb3IgdGhhdCBoYXMgb2NjdXJyZWQuXG4gICAgICovXG4gICAgQW5vbnltb3VzT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICB0aGlzLl9vbkVycm9yKGVycm9yKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIENhbGxzIHRoZSBvbkNvbXBsZXRlZCBhY3Rpb24uXG4gICAgICovXG4gICAgQW5vbnltb3VzT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX29uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBBbm9ueW1vdXNPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgdmFyIG9ic2VydmFibGVQcm90bztcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHB1c2gtc3R5bGUgY29sbGVjdGlvbi5cbiAgICovXG4gIHZhciBPYnNlcnZhYmxlID0gUnguT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBtYWtlU3Vic2NyaWJlKHNlbGYsIHN1YnNjcmliZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHZhciBvbGRPbkVycm9yID0gby5vbkVycm9yO1xuICAgICAgICBvLm9uRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG1ha2VTdGFja1RyYWNlTG9uZyhlLCBzZWxmKTtcbiAgICAgICAgICBvbGRPbkVycm9yLmNhbGwobywgZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZS5jYWxsKHNlbGYsIG8pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKCkge1xuICAgICAgaWYgKFJ4LmNvbmZpZy5sb25nU3RhY2tTdXBwb3J0ICYmIGhhc1N0YWNrcykge1xuICAgICAgICB2YXIgb2xkU3Vic2NyaWJlID0gdGhpcy5fc3Vic2NyaWJlO1xuICAgICAgICB2YXIgZSA9IHRyeUNhdGNoKHRocm93ZXIpKG5ldyBFcnJvcigpKS5lO1xuICAgICAgICB0aGlzLnN0YWNrID0gZS5zdGFjay5zdWJzdHJpbmcoZS5zdGFjay5pbmRleE9mKCdcXG4nKSArIDEpO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBtYWtlU3Vic2NyaWJlKHRoaXMsIG9sZFN1YnNjcmliZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb2JzZXJ2YWJsZVByb3RvID0gT2JzZXJ2YWJsZS5wcm90b3R5cGU7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIE9ic2VydmFibGVcbiAgICAqIEBwYXJhbSB7QW55fSBBbiBvYmplY3QgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXQgaXMgYW4gT2JzZXJ2YWJsZVxuICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgYW4gT2JzZXJ2YWJsZSwgZWxzZSBmYWxzZS5cbiAgICAqL1xuICAgIE9ic2VydmFibGUuaXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBvICYmIGlzRnVuY3Rpb24oby5zdWJzY3JpYmUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgU3Vic2NyaWJlcyBhbiBvIHRvIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgICAqICBAcGFyYW0ge01peGVkfSBbb09yT25OZXh0XSBUaGUgb2JqZWN0IHRoYXQgaXMgdG8gcmVjZWl2ZSBub3RpZmljYXRpb25zIG9yIGFuIGFjdGlvbiB0byBpbnZva2UgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICAgKiAgQHBhcmFtIHtGdW5jdGlvbn0gW29uRXJyb3JdIEFjdGlvbiB0byBpbnZva2UgdXBvbiBleGNlcHRpb25hbCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICAgKiAgQHBhcmFtIHtGdW5jdGlvbn0gW29uQ29tcGxldGVkXSBBY3Rpb24gdG8gaW52b2tlIHVwb24gZ3JhY2VmdWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAgICogIEByZXR1cm5zIHtEaXBvc2FibGV9IEEgZGlzcG9zYWJsZSBoYW5kbGluZyB0aGUgc3Vic2NyaXB0aW9ucyBhbmQgdW5zdWJzY3JpcHRpb25zLlxuICAgICAqL1xuICAgIG9ic2VydmFibGVQcm90by5zdWJzY3JpYmUgPSBvYnNlcnZhYmxlUHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uIChvT3JPbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKHR5cGVvZiBvT3JPbk5leHQgPT09ICdvYmplY3QnID9cbiAgICAgICAgb09yT25OZXh0IDpcbiAgICAgICAgb2JzZXJ2ZXJDcmVhdGUob09yT25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRvIHRoZSBuZXh0IHZhbHVlIGluIHRoZSBzZXF1ZW5jZSB3aXRoIGFuIG9wdGlvbmFsIFwidGhpc1wiIGFyZ3VtZW50LlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uTmV4dCBUaGUgZnVuY3Rpb24gdG8gaW52b2tlIG9uIGVhY2ggZWxlbWVudCBpbiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIE9iamVjdCB0byB1c2UgYXMgdGhpcyB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJucyB7RGlzcG9zYWJsZX0gQSBkaXNwb3NhYmxlIGhhbmRsaW5nIHRoZSBzdWJzY3JpcHRpb25zIGFuZCB1bnN1YnNjcmlwdGlvbnMuXG4gICAgICovXG4gICAgb2JzZXJ2YWJsZVByb3RvLnN1YnNjcmliZU9uTmV4dCA9IGZ1bmN0aW9uIChvbk5leHQsIHRoaXNBcmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUob2JzZXJ2ZXJDcmVhdGUodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24oeCkgeyBvbk5leHQuY2FsbCh0aGlzQXJnLCB4KTsgfSA6IG9uTmV4dCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIHRvIGFuIGV4Y2VwdGlvbmFsIGNvbmRpdGlvbiBpbiB0aGUgc2VxdWVuY2Ugd2l0aCBhbiBvcHRpb25hbCBcInRoaXNcIiBhcmd1bWVudC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkVycm9yIFRoZSBmdW5jdGlvbiB0byBpbnZva2UgdXBvbiBleGNlcHRpb25hbCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIE9iamVjdCB0byB1c2UgYXMgdGhpcyB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cbiAgICAgKiBAcmV0dXJucyB7RGlzcG9zYWJsZX0gQSBkaXNwb3NhYmxlIGhhbmRsaW5nIHRoZSBzdWJzY3JpcHRpb25zIGFuZCB1bnN1YnNjcmlwdGlvbnMuXG4gICAgICovXG4gICAgb2JzZXJ2YWJsZVByb3RvLnN1YnNjcmliZU9uRXJyb3IgPSBmdW5jdGlvbiAob25FcnJvciwgdGhpc0FyZykge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShvYnNlcnZlckNyZWF0ZShudWxsLCB0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbihlKSB7IG9uRXJyb3IuY2FsbCh0aGlzQXJnLCBlKTsgfSA6IG9uRXJyb3IpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0byB0aGUgbmV4dCB2YWx1ZSBpbiB0aGUgc2VxdWVuY2Ugd2l0aCBhbiBvcHRpb25hbCBcInRoaXNcIiBhcmd1bWVudC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlZCBUaGUgZnVuY3Rpb24gdG8gaW52b2tlIHVwb24gZ3JhY2VmdWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAgICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBPYmplY3QgdG8gdXNlIGFzIHRoaXMgd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICAgICogQHJldHVybnMge0Rpc3Bvc2FibGV9IEEgZGlzcG9zYWJsZSBoYW5kbGluZyB0aGUgc3Vic2NyaXB0aW9ucyBhbmQgdW5zdWJzY3JpcHRpb25zLlxuICAgICAqL1xuICAgIG9ic2VydmFibGVQcm90by5zdWJzY3JpYmVPbkNvbXBsZXRlZCA9IGZ1bmN0aW9uIChvbkNvbXBsZXRlZCwgdGhpc0FyZykge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShvYnNlcnZlckNyZWF0ZShudWxsLCBudWxsLCB0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbigpIHsgb25Db21wbGV0ZWQuY2FsbCh0aGlzQXJnKTsgfSA6IG9uQ29tcGxldGVkKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlO1xuICB9KSgpO1xuXG4gIHZhciBTY2hlZHVsZWRPYnNlcnZlciA9IFJ4LmludGVybmFscy5TY2hlZHVsZWRPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2NoZWR1bGVkT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBTY2hlZHVsZWRPYnNlcnZlcihzY2hlZHVsZXIsIG9ic2VydmVyKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgdGhpcy5pc0FjcXVpcmVkID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc0ZhdWx0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgIHRoaXMuZGlzcG9zYWJsZSA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCk7XG4gICAgfVxuXG4gICAgU2NoZWR1bGVkT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMucXVldWUucHVzaChmdW5jdGlvbiAoKSB7IHNlbGYub2JzZXJ2ZXIub25OZXh0KHZhbHVlKTsgfSk7XG4gICAgfTtcblxuICAgIFNjaGVkdWxlZE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goZnVuY3Rpb24gKCkgeyBzZWxmLm9ic2VydmVyLm9uRXJyb3IoZSk7IH0pO1xuICAgIH07XG5cbiAgICBTY2hlZHVsZWRPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHsgc2VsZi5vYnNlcnZlci5vbkNvbXBsZXRlZCgpOyB9KTtcbiAgICB9O1xuXG4gICAgU2NoZWR1bGVkT2JzZXJ2ZXIucHJvdG90eXBlLmVuc3VyZUFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpc093bmVyID0gZmFsc2U7XG4gICAgICBpZiAoIXRoaXMuaGFzRmF1bHRlZCAmJiB0aGlzLnF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXNPd25lciA9ICF0aGlzLmlzQWNxdWlyZWQ7XG4gICAgICAgIHRoaXMuaXNBY3F1aXJlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNPd25lcikge1xuICAgICAgICB0aGlzLmRpc3Bvc2FibGUuc2V0RGlzcG9zYWJsZSh0aGlzLnNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZSh0aGlzLCBmdW5jdGlvbiAocGFyZW50LCBzZWxmKSB7XG4gICAgICAgICAgdmFyIHdvcms7XG4gICAgICAgICAgaWYgKHBhcmVudC5xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB3b3JrID0gcGFyZW50LnF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudC5pc0FjcXVpcmVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZXMgPSB0cnlDYXRjaCh3b3JrKSgpO1xuICAgICAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICBwYXJlbnQucXVldWUgPSBbXTtcbiAgICAgICAgICAgIHBhcmVudC5oYXNGYXVsdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0aHJvd2VyKHJlcy5lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZihwYXJlbnQpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFNjaGVkdWxlZE9ic2VydmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX19zdXBlcl9fLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmRpc3Bvc2FibGUuZGlzcG9zZSgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2NoZWR1bGVkT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIHZhciBPYnNlcnZhYmxlQmFzZSA9IFJ4Lk9ic2VydmFibGVCYXNlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhPYnNlcnZhYmxlQmFzZSwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIGZpeFN1YnNjcmliZXIoc3Vic2NyaWJlcikge1xuICAgICAgcmV0dXJuIHN1YnNjcmliZXIgJiYgaXNGdW5jdGlvbihzdWJzY3JpYmVyLmRpc3Bvc2UpID8gc3Vic2NyaWJlciA6XG4gICAgICAgIGlzRnVuY3Rpb24oc3Vic2NyaWJlcikgPyBkaXNwb3NhYmxlQ3JlYXRlKHN1YnNjcmliZXIpIDogZGlzcG9zYWJsZUVtcHR5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldERpc3Bvc2FibGUocywgc3RhdGUpIHtcbiAgICAgIHZhciBhZG8gPSBzdGF0ZVswXSwgc2VsZiA9IHN0YXRlWzFdO1xuICAgICAgdmFyIHN1YiA9IHRyeUNhdGNoKHNlbGYuc3Vic2NyaWJlQ29yZSkuY2FsbChzZWxmLCBhZG8pO1xuICAgICAgaWYgKHN1YiA9PT0gZXJyb3JPYmogJiYgIWFkby5mYWlsKGVycm9yT2JqLmUpKSB7IHRocm93ZXIoZXJyb3JPYmouZSk7IH1cbiAgICAgIGFkby5zZXREaXNwb3NhYmxlKGZpeFN1YnNjcmliZXIoc3ViKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZUJhc2UoKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBPYnNlcnZhYmxlQmFzZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgYWRvID0gbmV3IEF1dG9EZXRhY2hPYnNlcnZlcihvKSwgc3RhdGUgPSBbYWRvLCB0aGlzXTtcblxuICAgICAgaWYgKGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIuc2NoZWR1bGVSZXF1aXJlZCgpKSB7XG4gICAgICAgIGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIuc2NoZWR1bGUoc3RhdGUsIHNldERpc3Bvc2FibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlzcG9zYWJsZShudWxsLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWRvO1xuICAgIH07XG5cbiAgICBPYnNlcnZhYmxlQmFzZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IG5vdEltcGxlbWVudGVkO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGVCYXNlO1xuICB9KE9ic2VydmFibGUpKTtcblxudmFyIEZsYXRNYXBPYnNlcnZhYmxlID0gUnguRmxhdE1hcE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG5cbiAgICBpbmhlcml0cyhGbGF0TWFwT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIEZsYXRNYXBPYnNlcnZhYmxlKHNvdXJjZSwgc2VsZWN0b3IsIHJlc3VsdFNlbGVjdG9yLCB0aGlzQXJnKSB7XG4gICAgICB0aGlzLnJlc3VsdFNlbGVjdG9yID0gaXNGdW5jdGlvbihyZXN1bHRTZWxlY3RvcikgPyByZXN1bHRTZWxlY3RvciA6IG51bGw7XG4gICAgICB0aGlzLnNlbGVjdG9yID0gYmluZENhbGxiYWNrKGlzRnVuY3Rpb24oc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGVjdG9yOyB9LCB0aGlzQXJnLCAzKTtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRmxhdE1hcE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKG8sIHRoaXMuc2VsZWN0b3IsIHRoaXMucmVzdWx0U2VsZWN0b3IsIHRoaXMpKTtcbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoSW5uZXJPYnNlcnZlciwgQWJzdHJhY3RPYnNlcnZlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihvYnNlcnZlciwgc2VsZWN0b3IsIHJlc3VsdFNlbGVjdG9yLCBzb3VyY2UpIHtcbiAgICAgIHRoaXMuaSA9IDA7XG4gICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICB0aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMubyA9IG9ic2VydmVyO1xuICAgICAgQWJzdHJhY3RPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLl93cmFwUmVzdWx0ID0gZnVuY3Rpb24ocmVzdWx0LCB4LCBpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXN1bHRTZWxlY3RvciA/XG4gICAgICAgIHJlc3VsdC5tYXAoZnVuY3Rpb24oeSwgaTIpIHsgcmV0dXJuIHRoaXMucmVzdWx0U2VsZWN0b3IoeCwgeSwgaSwgaTIpOyB9LCB0aGlzKSA6XG4gICAgICAgIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHZhciBpID0gdGhpcy5pKys7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5zZWxlY3RvcikoeCwgaSwgdGhpcy5zb3VyY2UpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuby5vbkVycm9yKHJlc3VsdC5lKTsgfVxuXG4gICAgICBpc1Byb21pc2UocmVzdWx0KSAmJiAocmVzdWx0ID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHJlc3VsdCkpO1xuICAgICAgKGlzQXJyYXlMaWtlKHJlc3VsdCkgfHwgaXNJdGVyYWJsZShyZXN1bHQpKSAmJiAocmVzdWx0ID0gT2JzZXJ2YWJsZS5mcm9tKHJlc3VsdCkpO1xuICAgICAgdGhpcy5vLm9uTmV4dCh0aGlzLl93cmFwUmVzdWx0KHJlc3VsdCwgeCwgaSkpO1xuICAgIH07XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKGUpIHsgdGhpcy5vLm9uRXJyb3IoZSk7IH07XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uKCkgeyB0aGlzLm8ub25Db21wbGV0ZWQoKTsgfTtcblxuICAgIHJldHVybiBGbGF0TWFwT2JzZXJ2YWJsZTtcblxufShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBFbnVtZXJhYmxlID0gUnguaW50ZXJuYWxzLkVudW1lcmFibGUgPSBmdW5jdGlvbiAoKSB7IH07XG5cbiAgZnVuY3Rpb24gSXNEaXNwb3NlZERpc3Bvc2FibGUoc3RhdGUpIHtcbiAgICB0aGlzLl9zID0gc3RhdGU7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gIH1cblxuICBJc0Rpc3Bvc2VkRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3MuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHZhciBDb25jYXRFbnVtZXJhYmxlT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhDb25jYXRFbnVtZXJhYmxlT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDb25jYXRFbnVtZXJhYmxlT2JzZXJ2YWJsZShzb3VyY2VzKSB7XG4gICAgICB0aGlzLnNvdXJjZXMgPSBzb3VyY2VzO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgQ29uY2F0RW51bWVyYWJsZU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIHN0YXRlID0geyBpc0Rpc3Bvc2VkOiBmYWxzZSB9LCBzdWJzY3JpcHRpb24gPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgdmFyIGNhbmNlbGFibGUgPSBjdXJyZW50VGhyZWFkU2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlKHRoaXMuc291cmNlc1skaXRlcmF0b3IkXSgpLCBmdW5jdGlvbiAoZSwgc2VsZikge1xuICAgICAgICBpZiAoc3RhdGUuaXNEaXNwb3NlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gdHJ5Q2F0Y2goZS5uZXh0KS5jYWxsKGUpO1xuICAgICAgICBpZiAoY3VycmVudEl0ZW0gPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IoY3VycmVudEl0ZW0uZSk7IH1cblxuICAgICAgICBpZiAoY3VycmVudEl0ZW0uZG9uZSkge1xuICAgICAgICAgIHJldHVybiBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBwcm9taXNlXG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50SXRlbS52YWx1ZTtcbiAgICAgICAgaXNQcm9taXNlKGN1cnJlbnRWYWx1ZSkgJiYgKGN1cnJlbnRWYWx1ZSA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShjdXJyZW50VmFsdWUpKTtcblxuICAgICAgICB2YXIgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShkKTtcbiAgICAgICAgZC5zZXREaXNwb3NhYmxlKGN1cnJlbnRWYWx1ZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIobywgc2VsZiwgZSkpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IE5BcnlEaXNwb3NhYmxlKFtzdWJzY3JpcHRpb24sIGNhbmNlbGFibGUsIG5ldyBJc0Rpc3Bvc2VkRGlzcG9zYWJsZShzdGF0ZSldKTtcbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoSW5uZXJPYnNlcnZlciwgQWJzdHJhY3RPYnNlcnZlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihvLCBzLCBlKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX3MgPSBzO1xuICAgICAgdGhpcy5fZSA9IGU7XG4gICAgICBBYnN0cmFjdE9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uTmV4dCA9IGZ1bmN0aW9uICh4KSB7IHRoaXMuX28ub25OZXh0KHgpOyB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZSkgeyB0aGlzLl9vLm9uRXJyb3IoZSk7IH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX3ModGhpcy5fZSk7IH07XG5cbiAgICByZXR1cm4gQ29uY2F0RW51bWVyYWJsZU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICBFbnVtZXJhYmxlLnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBDb25jYXRFbnVtZXJhYmxlT2JzZXJ2YWJsZSh0aGlzKTtcbiAgfTtcblxuICB2YXIgQ2F0Y2hFcnJvck9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQ2F0Y2hFcnJvck9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ2F0Y2hFcnJvck9ic2VydmFibGUoc291cmNlcykge1xuICAgICAgdGhpcy5zb3VyY2VzID0gc291cmNlcztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIENhdGNoRXJyb3JPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBlID0gdGhpcy5zb3VyY2VzWyRpdGVyYXRvciRdKCk7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHsgaXNEaXNwb3NlZDogZmFsc2UgfSwgc3Vic2NyaXB0aW9uID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKTtcbiAgICAgIHZhciBjYW5jZWxhYmxlID0gY3VycmVudFRocmVhZFNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZShudWxsLCBmdW5jdGlvbiAobGFzdEV4Y2VwdGlvbiwgc2VsZikge1xuICAgICAgICBpZiAoc3RhdGUuaXNEaXNwb3NlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gdHJ5Q2F0Y2goZS5uZXh0KS5jYWxsKGUpO1xuICAgICAgICBpZiAoY3VycmVudEl0ZW0gPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IoY3VycmVudEl0ZW0uZSk7IH1cblxuICAgICAgICBpZiAoY3VycmVudEl0ZW0uZG9uZSkge1xuICAgICAgICAgIHJldHVybiBsYXN0RXhjZXB0aW9uICE9PSBudWxsID8gby5vbkVycm9yKGxhc3RFeGNlcHRpb24pIDogby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgcHJvbWlzZVxuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudEl0ZW0udmFsdWU7XG4gICAgICAgIGlzUHJvbWlzZShjdXJyZW50VmFsdWUpICYmIChjdXJyZW50VmFsdWUgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UoY3VycmVudFZhbHVlKSk7XG5cbiAgICAgICAgdmFyIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUoZCk7XG4gICAgICAgIGQuc2V0RGlzcG9zYWJsZShjdXJyZW50VmFsdWUuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKG8sIHNlbGYpKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgTkFyeURpc3Bvc2FibGUoW3N1YnNjcmlwdGlvbiwgY2FuY2VsYWJsZSwgbmV3IElzRGlzcG9zZWREaXNwb3NhYmxlKHN0YXRlKV0pO1xuICAgIH07XG5cbiAgICBpbmhlcml0cyhJbm5lck9ic2VydmVyLCBBYnN0cmFjdE9ic2VydmVyKTtcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKG8sIHJlY3Vyc2UpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fcmVjdXJzZSA9IHJlY3Vyc2U7XG4gICAgICBBYnN0cmFjdE9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7IHRoaXMuX28ub25OZXh0KHgpOyB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHsgdGhpcy5fcmVjdXJzZShlKTsgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX28ub25Db21wbGV0ZWQoKTsgfTtcblxuICAgIHJldHVybiBDYXRjaEVycm9yT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIEVudW1lcmFibGUucHJvdG90eXBlLmNhdGNoRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBDYXRjaEVycm9yT2JzZXJ2YWJsZSh0aGlzKTtcbiAgfTtcblxuICBFbnVtZXJhYmxlLnByb3RvdHlwZS5jYXRjaEVycm9yV2hlbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb25IYW5kbGVyKSB7XG4gICAgdmFyIHNvdXJjZXMgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGV4Y2VwdGlvbnMgPSBuZXcgU3ViamVjdCgpLFxuICAgICAgICBub3RpZmllciA9IG5ldyBTdWJqZWN0KCksXG4gICAgICAgIGhhbmRsZWQgPSBub3RpZmljYXRpb25IYW5kbGVyKGV4Y2VwdGlvbnMpLFxuICAgICAgICBub3RpZmljYXRpb25EaXNwb3NhYmxlID0gaGFuZGxlZC5zdWJzY3JpYmUobm90aWZpZXIpO1xuXG4gICAgICB2YXIgZSA9IHNvdXJjZXNbJGl0ZXJhdG9yJF0oKTtcblxuICAgICAgdmFyIHN0YXRlID0geyBpc0Rpc3Bvc2VkOiBmYWxzZSB9LFxuICAgICAgICBsYXN0RXhjZXB0aW9uLFxuICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgdmFyIGNhbmNlbGFibGUgPSBjdXJyZW50VGhyZWFkU2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlKG51bGwsIGZ1bmN0aW9uIChfLCBzZWxmKSB7XG4gICAgICAgIGlmIChzdGF0ZS5pc0Rpc3Bvc2VkKSB7IHJldHVybjsgfVxuICAgICAgICB2YXIgY3VycmVudEl0ZW0gPSB0cnlDYXRjaChlLm5leHQpLmNhbGwoZSk7XG4gICAgICAgIGlmIChjdXJyZW50SXRlbSA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihjdXJyZW50SXRlbS5lKTsgfVxuXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5kb25lKSB7XG4gICAgICAgICAgaWYgKGxhc3RFeGNlcHRpb24pIHtcbiAgICAgICAgICAgIG8ub25FcnJvcihsYXN0RXhjZXB0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBwcm9taXNlXG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50SXRlbS52YWx1ZTtcbiAgICAgICAgaXNQcm9taXNlKGN1cnJlbnRWYWx1ZSkgJiYgKGN1cnJlbnRWYWx1ZSA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShjdXJyZW50VmFsdWUpKTtcblxuICAgICAgICB2YXIgb3V0ZXIgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgdmFyIGlubmVyID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKG5ldyBCaW5hcnlEaXNwb3NhYmxlKGlubmVyLCBvdXRlcikpO1xuICAgICAgICBvdXRlci5zZXREaXNwb3NhYmxlKGN1cnJlbnRWYWx1ZS5zdWJzY3JpYmUoXG4gICAgICAgICAgZnVuY3Rpb24oeCkgeyBvLm9uTmV4dCh4KTsgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZXhuKSB7XG4gICAgICAgICAgICBpbm5lci5zZXREaXNwb3NhYmxlKG5vdGlmaWVyLnN1YnNjcmliZShzZWxmLCBmdW5jdGlvbihleCkge1xuICAgICAgICAgICAgICBvLm9uRXJyb3IoZXgpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgZXhjZXB0aW9ucy5vbk5leHQoZXhuKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uKCkgeyBvLm9uQ29tcGxldGVkKCk7IH0pKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IE5BcnlEaXNwb3NhYmxlKFtub3RpZmljYXRpb25EaXNwb3NhYmxlLCBzdWJzY3JpcHRpb24sIGNhbmNlbGFibGUsIG5ldyBJc0Rpc3Bvc2VkRGlzcG9zYWJsZShzdGF0ZSldKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgUmVwZWF0RW51bWVyYWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoUmVwZWF0RW51bWVyYWJsZSwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIFJlcGVhdEVudW1lcmFibGUodiwgYykge1xuICAgICAgdGhpcy52ID0gdjtcbiAgICAgIHRoaXMuYyA9IGMgPT0gbnVsbCA/IC0xIDogYztcbiAgICB9XG4gICAgUmVwZWF0RW51bWVyYWJsZS5wcm90b3R5cGVbJGl0ZXJhdG9yJF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IFJlcGVhdEVudW1lcmF0b3IodGhpcyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIFJlcGVhdEVudW1lcmF0b3IocCkge1xuICAgICAgdGhpcy52ID0gcC52O1xuICAgICAgdGhpcy5sID0gcC5jO1xuICAgIH1cbiAgICBSZXBlYXRFbnVtZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMubCA9PT0gMCkgeyByZXR1cm4gZG9uZUVudW1lcmF0b3I7IH1cbiAgICAgIGlmICh0aGlzLmwgPiAwKSB7IHRoaXMubC0tOyB9XG4gICAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IHRoaXMudiB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gUmVwZWF0RW51bWVyYWJsZTtcbiAgfShFbnVtZXJhYmxlKSk7XG5cbiAgdmFyIGVudW1lcmFibGVSZXBlYXQgPSBFbnVtZXJhYmxlLnJlcGVhdCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVwZWF0Q291bnQpIHtcbiAgICByZXR1cm4gbmV3IFJlcGVhdEVudW1lcmFibGUodmFsdWUsIHJlcGVhdENvdW50KTtcbiAgfTtcblxuICB2YXIgT2ZFbnVtZXJhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE9mRW51bWVyYWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBPZkVudW1lcmFibGUocywgZm4sIHRoaXNBcmcpIHtcbiAgICAgIHRoaXMucyA9IHM7XG4gICAgICB0aGlzLmZuID0gZm4gPyBiaW5kQ2FsbGJhY2soZm4sIHRoaXNBcmcsIDMpIDogbnVsbDtcbiAgICB9XG4gICAgT2ZFbnVtZXJhYmxlLnByb3RvdHlwZVskaXRlcmF0b3IkXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgT2ZFbnVtZXJhdG9yKHRoaXMpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBPZkVudW1lcmF0b3IocCkge1xuICAgICAgdGhpcy5pID0gLTE7XG4gICAgICB0aGlzLnMgPSBwLnM7XG4gICAgICB0aGlzLmwgPSB0aGlzLnMubGVuZ3RoO1xuICAgICAgdGhpcy5mbiA9IHAuZm47XG4gICAgfVxuICAgIE9mRW51bWVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgcmV0dXJuICsrdGhpcy5pIDwgdGhpcy5sID9cbiAgICAgICB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogIXRoaXMuZm4gPyB0aGlzLnNbdGhpcy5pXSA6IHRoaXMuZm4odGhpcy5zW3RoaXMuaV0sIHRoaXMuaSwgdGhpcy5zKSB9IDpcbiAgICAgICBkb25lRW51bWVyYXRvcjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9mRW51bWVyYWJsZTtcbiAgfShFbnVtZXJhYmxlKSk7XG5cbiAgdmFyIGVudW1lcmFibGVPZiA9IEVudW1lcmFibGUub2YgPSBmdW5jdGlvbiAoc291cmNlLCBzZWxlY3RvciwgdGhpc0FyZykge1xuICAgIHJldHVybiBuZXcgT2ZFbnVtZXJhYmxlKHNvdXJjZSwgc2VsZWN0b3IsIHRoaXNBcmcpO1xuICB9O1xuXG4gIHZhciBUb0FycmF5T2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUb0FycmF5T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBUb0FycmF5T2JzZXJ2YWJsZShzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVG9BcnJheU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKG8pKTtcbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoSW5uZXJPYnNlcnZlciwgQWJzdHJhY3RPYnNlcnZlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihvKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5hID0gW107XG4gICAgICBBYnN0cmFjdE9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkgeyB0aGlzLmEucHVzaCh4KTsgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7IHRoaXMuby5vbkVycm9yKGUpOyAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7IHRoaXMuby5vbk5leHQodGhpcy5hKTsgdGhpcy5vLm9uQ29tcGxldGVkKCk7IH07XG5cbiAgICByZXR1cm4gVG9BcnJheU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgKiBDcmVhdGVzIGFuIGFycmF5IGZyb20gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIGEgc2luZ2xlIGVsZW1lbnQgd2l0aCBhIGxpc3QgY29udGFpbmluZyBhbGwgdGhlIGVsZW1lbnRzIG9mIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICovXG4gIG9ic2VydmFibGVQcm90by50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgVG9BcnJheU9ic2VydmFibGUodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICBDcmVhdGVzIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgZnJvbSBhIHNwZWNpZmllZCBzdWJzY3JpYmUgbWV0aG9kIGltcGxlbWVudGF0aW9uLlxuICAgKiBAZXhhbXBsZVxuICAgKiAgdmFyIHJlcyA9IFJ4Lk9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB9ICk7XG4gICAqICB2YXIgcmVzID0gUnguT2JzZXJ2YWJsZS5jcmVhdGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBSeC5EaXNwb3NhYmxlLmVtcHR5OyB9ICk7XG4gICAqICB2YXIgcmVzID0gUnguT2JzZXJ2YWJsZS5jcmVhdGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7IH0gKTtcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3Vic2NyaWJlIEltcGxlbWVudGF0aW9uIG9mIHRoZSByZXN1bHRpbmcgb2JzZXJ2YWJsZSBzZXF1ZW5jZSdzIHN1YnNjcmliZSBtZXRob2QsIHJldHVybmluZyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB3cmFwcGVkIGluIGEgRGlzcG9zYWJsZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHdpdGggdGhlIHNwZWNpZmllZCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhlIFN1YnNjcmliZSBtZXRob2QuXG4gICAqL1xuICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUsIHBhcmVudCkge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShzdWJzY3JpYmUsIHBhcmVudCk7XG4gIH07XG5cbiAgdmFyIERlZmVyID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKERlZmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIERlZmVyKGZhY3RvcnkpIHtcbiAgICAgIHRoaXMuX2YgPSBmYWN0b3J5O1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRGVmZXIucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMuX2YpKCk7XG4gICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikgeyByZXR1cm4gb2JzZXJ2YWJsZVRocm93KHJlc3VsdC5lKS5zdWJzY3JpYmUobyk7fVxuICAgICAgaXNQcm9taXNlKHJlc3VsdCkgJiYgKHJlc3VsdCA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShyZXN1bHQpKTtcbiAgICAgIHJldHVybiByZXN1bHQuc3Vic2NyaWJlKG8pO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGVmZXI7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgICogIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGludm9rZXMgdGhlIHNwZWNpZmllZCBmYWN0b3J5IGZ1bmN0aW9uIHdoZW5ldmVyIGEgbmV3IG9ic2VydmVyIHN1YnNjcmliZXMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICB2YXIgcmVzID0gUnguT2JzZXJ2YWJsZS5kZWZlcihmdW5jdGlvbiAoKSB7IHJldHVybiBSeC5PYnNlcnZhYmxlLmZyb21BcnJheShbMSwyLDNdKTsgfSk7XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9ic2VydmFibGVGYWN0b3J5IE9ic2VydmFibGUgZmFjdG9yeSBmdW5jdGlvbiB0byBpbnZva2UgZm9yIGVhY2ggb2JzZXJ2ZXIgdGhhdCBzdWJzY3JpYmVzIHRvIHRoZSByZXN1bHRpbmcgc2VxdWVuY2Ugb3IgUHJvbWlzZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hvc2Ugb2JzZXJ2ZXJzIHRyaWdnZXIgYW4gaW52b2NhdGlvbiBvZiB0aGUgZ2l2ZW4gb2JzZXJ2YWJsZSBmYWN0b3J5IGZ1bmN0aW9uLlxuICAgKi9cbiAgdmFyIG9ic2VydmFibGVEZWZlciA9IE9ic2VydmFibGUuZGVmZXIgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZUZhY3RvcnkpIHtcbiAgICByZXR1cm4gbmV3IERlZmVyKG9ic2VydmFibGVGYWN0b3J5KTtcbiAgfTtcblxuICB2YXIgRW1wdHlPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEVtcHR5T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBFbXB0eU9ic2VydmFibGUoc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIEVtcHR5T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIHNpbmsgPSBuZXcgRW1wdHlTaW5rKG9ic2VydmVyLCB0aGlzLnNjaGVkdWxlcik7XG4gICAgICByZXR1cm4gc2luay5ydW4oKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gRW1wdHlTaW5rKG9ic2VydmVyLCBzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlSXRlbShzLCBzdGF0ZSkge1xuICAgICAgc3RhdGUub25Db21wbGV0ZWQoKTtcbiAgICAgIHJldHVybiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgfVxuXG4gICAgRW1wdHlTaW5rLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLm9ic2VydmVyO1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVyID09PSBpbW1lZGlhdGVTY2hlZHVsZXIgP1xuICAgICAgICBzY2hlZHVsZUl0ZW0obnVsbCwgc3RhdGUpIDpcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoc3RhdGUsIHNjaGVkdWxlSXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBFbXB0eU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgRU1QVFlfT0JTRVJWQUJMRSA9IG5ldyBFbXB0eU9ic2VydmFibGUoaW1tZWRpYXRlU2NoZWR1bGVyKTtcblxuICAvKipcbiAgICogIFJldHVybnMgYW4gZW1wdHkgb2JzZXJ2YWJsZSBzZXF1ZW5jZSwgdXNpbmcgdGhlIHNwZWNpZmllZCBzY2hlZHVsZXIgdG8gc2VuZCBvdXQgdGhlIHNpbmdsZSBPbkNvbXBsZXRlZCBtZXNzYWdlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgdmFyIHJlcyA9IFJ4Lk9ic2VydmFibGUuZW1wdHkoKTtcbiAgICogIHZhciByZXMgPSBSeC5PYnNlcnZhYmxlLmVtcHR5KFJ4LlNjaGVkdWxlci50aW1lb3V0KTtcbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIFNjaGVkdWxlciB0byBzZW5kIHRoZSB0ZXJtaW5hdGlvbiBjYWxsIG9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aXRoIG5vIGVsZW1lbnRzLlxuICAgKi9cbiAgdmFyIG9ic2VydmFibGVFbXB0eSA9IE9ic2VydmFibGUuZW1wdHkgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gaW1tZWRpYXRlU2NoZWR1bGVyKTtcbiAgICByZXR1cm4gc2NoZWR1bGVyID09PSBpbW1lZGlhdGVTY2hlZHVsZXIgPyBFTVBUWV9PQlNFUlZBQkxFIDogbmV3IEVtcHR5T2JzZXJ2YWJsZShzY2hlZHVsZXIpO1xuICB9O1xuXG4gIHZhciBGcm9tT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhGcm9tT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBGcm9tT2JzZXJ2YWJsZShpdGVyYWJsZSwgbWFwcGVyLCBzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMuaXRlcmFibGUgPSBpdGVyYWJsZTtcbiAgICAgIHRoaXMubWFwcGVyID0gbWFwcGVyO1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBGcm9tT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgc2luayA9IG5ldyBGcm9tU2luayhvLCB0aGlzKTtcbiAgICAgIHJldHVybiBzaW5rLnJ1bigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRnJvbU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgRnJvbVNpbmsgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZyb21TaW5rKG8sIHBhcmVudCkge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIEZyb21TaW5rLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGlzdCA9IE9iamVjdCh0aGlzLnBhcmVudC5pdGVyYWJsZSksXG4gICAgICAgICAgaXQgPSBnZXRJdGVyYWJsZShsaXN0KSxcbiAgICAgICAgICBvID0gdGhpcy5vLFxuICAgICAgICAgIG1hcHBlciA9IHRoaXMucGFyZW50Lm1hcHBlcjtcblxuICAgICAgZnVuY3Rpb24gbG9vcFJlY3Vyc2l2ZShpLCByZWN1cnNlKSB7XG4gICAgICAgIHZhciBuZXh0ID0gdHJ5Q2F0Y2goaXQubmV4dCkuY2FsbChpdCk7XG4gICAgICAgIGlmIChuZXh0ID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKG5leHQuZSk7IH1cbiAgICAgICAgaWYgKG5leHQuZG9uZSkgeyByZXR1cm4gby5vbkNvbXBsZXRlZCgpOyB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5leHQudmFsdWU7XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24obWFwcGVyKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHRyeUNhdGNoKG1hcHBlcikocmVzdWx0LCBpKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKHJlc3VsdC5lKTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgby5vbk5leHQocmVzdWx0KTtcbiAgICAgICAgcmVjdXJzZShpICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnBhcmVudC5zY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmUoMCwgbG9vcFJlY3Vyc2l2ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBGcm9tU2luaztcbiAgfSgpKTtcblxuICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuXG4gIGZ1bmN0aW9uIFN0cmluZ0l0ZXJhYmxlKHMpIHtcbiAgICB0aGlzLl9zID0gcztcbiAgfVxuXG4gIFN0cmluZ0l0ZXJhYmxlLnByb3RvdHlwZVskaXRlcmF0b3IkXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFN0cmluZ0l0ZXJhdG9yKHRoaXMuX3MpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFN0cmluZ0l0ZXJhdG9yKHMpIHtcbiAgICB0aGlzLl9zID0gcztcbiAgICB0aGlzLl9sID0gcy5sZW5ndGg7XG4gICAgdGhpcy5faSA9IDA7XG4gIH1cblxuICBTdHJpbmdJdGVyYXRvci5wcm90b3R5cGVbJGl0ZXJhdG9yJF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgU3RyaW5nSXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2kgPCB0aGlzLl9sID8geyBkb25lOiBmYWxzZSwgdmFsdWU6IHRoaXMuX3MuY2hhckF0KHRoaXMuX2krKykgfSA6IGRvbmVFbnVtZXJhdG9yO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFycmF5SXRlcmFibGUoYSkge1xuICAgIHRoaXMuX2EgPSBhO1xuICB9XG5cbiAgQXJyYXlJdGVyYWJsZS5wcm90b3R5cGVbJGl0ZXJhdG9yJF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUl0ZXJhdG9yKHRoaXMuX2EpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFycmF5SXRlcmF0b3IoYSkge1xuICAgIHRoaXMuX2EgPSBhO1xuICAgIHRoaXMuX2wgPSB0b0xlbmd0aChhKTtcbiAgICB0aGlzLl9pID0gMDtcbiAgfVxuXG4gIEFycmF5SXRlcmF0b3IucHJvdG90eXBlWyRpdGVyYXRvciRdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFycmF5SXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2kgPCB0aGlzLl9sID8geyBkb25lOiBmYWxzZSwgdmFsdWU6IHRoaXMuX2FbdGhpcy5faSsrXSB9IDogZG9uZUVudW1lcmF0b3I7XG4gIH07XG5cbiAgZnVuY3Rpb24gbnVtYmVySXNGaW5pdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiByb290LmlzRmluaXRlKHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTmFuKG4pIHtcbiAgICByZXR1cm4gbiAhPT0gbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEl0ZXJhYmxlKG8pIHtcbiAgICB2YXIgaSA9IG9bJGl0ZXJhdG9yJF0sIGl0O1xuICAgIGlmICghaSAmJiB0eXBlb2YgbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl0ID0gbmV3IFN0cmluZ0l0ZXJhYmxlKG8pO1xuICAgICAgcmV0dXJuIGl0WyRpdGVyYXRvciRdKCk7XG4gICAgfVxuICAgIGlmICghaSAmJiBvLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpdCA9IG5ldyBBcnJheUl0ZXJhYmxlKG8pO1xuICAgICAgcmV0dXJuIGl0WyRpdGVyYXRvciRdKCk7XG4gICAgfVxuICAgIGlmICghaSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QgaXMgbm90IGl0ZXJhYmxlJyk7IH1cbiAgICByZXR1cm4gb1skaXRlcmF0b3IkXSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lnbih2YWx1ZSkge1xuICAgIHZhciBudW1iZXIgPSArdmFsdWU7XG4gICAgaWYgKG51bWJlciA9PT0gMCkgeyByZXR1cm4gbnVtYmVyOyB9XG4gICAgaWYgKGlzTmFOKG51bWJlcikpIHsgcmV0dXJuIG51bWJlcjsgfVxuICAgIHJldHVybiBudW1iZXIgPCAwID8gLTEgOiAxO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9MZW5ndGgobykge1xuICAgIHZhciBsZW4gPSArby5sZW5ndGg7XG4gICAgaWYgKGlzTmFOKGxlbikpIHsgcmV0dXJuIDA7IH1cbiAgICBpZiAobGVuID09PSAwIHx8ICFudW1iZXJJc0Zpbml0ZShsZW4pKSB7IHJldHVybiBsZW47IH1cbiAgICBsZW4gPSBzaWduKGxlbikgKiBNYXRoLmZsb29yKE1hdGguYWJzKGxlbikpO1xuICAgIGlmIChsZW4gPD0gMCkgeyByZXR1cm4gMDsgfVxuICAgIGlmIChsZW4gPiBtYXhTYWZlSW50ZWdlcikgeyByZXR1cm4gbWF4U2FmZUludGVnZXI7IH1cbiAgICByZXR1cm4gbGVuO1xuICB9XG5cbiAgLyoqXG4gICogVGhpcyBtZXRob2QgY3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlIHNlcXVlbmNlIGZyb20gYW4gYXJyYXktbGlrZSBvciBpdGVyYWJsZSBvYmplY3QuXG4gICogQHBhcmFtIHtBbnl9IGFycmF5TGlrZSBBbiBhcnJheS1saWtlIG9yIGl0ZXJhYmxlIG9iamVjdCB0byBjb252ZXJ0IHRvIGFuIE9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gW21hcEZuXSBNYXAgZnVuY3Rpb24gdG8gY2FsbCBvbiBldmVyeSBlbGVtZW50IG9mIHRoZSBhcnJheS5cbiAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIFRoZSBjb250ZXh0IHRvIHVzZSBjYWxsaW5nIHRoZSBtYXBGbiBpZiBwcm92aWRlZC5cbiAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gT3B0aW9uYWwgc2NoZWR1bGVyIHRvIHVzZSBmb3Igc2NoZWR1bGluZy4gIElmIG5vdCBwcm92aWRlZCwgZGVmYXVsdHMgdG8gU2NoZWR1bGVyLmN1cnJlbnRUaHJlYWQuXG4gICovXG4gIHZhciBvYnNlcnZhYmxlRnJvbSA9IE9ic2VydmFibGUuZnJvbSA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgbWFwRm4sIHRoaXNBcmcsIHNjaGVkdWxlcikge1xuICAgIGlmIChpdGVyYWJsZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2l0ZXJhYmxlIGNhbm5vdCBiZSBudWxsLicpXG4gICAgfVxuICAgIGlmIChtYXBGbiAmJiAhaXNGdW5jdGlvbihtYXBGbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWFwRm4gd2hlbiBwcm92aWRlZCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgaWYgKG1hcEZuKSB7XG4gICAgICB2YXIgbWFwcGVyID0gYmluZENhbGxiYWNrKG1hcEZuLCB0aGlzQXJnLCAyKTtcbiAgICB9XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gY3VycmVudFRocmVhZFNjaGVkdWxlcik7XG4gICAgcmV0dXJuIG5ldyBGcm9tT2JzZXJ2YWJsZShpdGVyYWJsZSwgbWFwcGVyLCBzY2hlZHVsZXIpO1xuICB9XG5cbiAgdmFyIEZyb21BcnJheU9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRnJvbUFycmF5T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBGcm9tQXJyYXlPYnNlcnZhYmxlKGFyZ3MsIHNjaGVkdWxlcikge1xuICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRnJvbUFycmF5T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIHNpbmsgPSBuZXcgRnJvbUFycmF5U2luayhvYnNlcnZlciwgdGhpcyk7XG4gICAgICByZXR1cm4gc2luay5ydW4oKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEZyb21BcnJheU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICBmdW5jdGlvbiBGcm9tQXJyYXlTaW5rKG9ic2VydmVyLCBwYXJlbnQpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBsb29wUmVjdXJzaXZlKGFyZ3MsIG9ic2VydmVyKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgIHJldHVybiBmdW5jdGlvbiBsb29wIChpLCByZWN1cnNlKSB7XG4gICAgICBpZiAoaSA8IGxlbikge1xuICAgICAgICBvYnNlcnZlci5vbk5leHQoYXJnc1tpXSk7XG4gICAgICAgIHJlY3Vyc2UoaSArIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgRnJvbUFycmF5U2luay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5zY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmUoMCwgbG9vcFJlY3Vyc2l2ZSh0aGlzLnBhcmVudC5hcmdzLCB0aGlzLm9ic2VydmVyKSk7XG4gIH07XG5cbiAgLyoqXG4gICogIENvbnZlcnRzIGFuIGFycmF5IHRvIGFuIG9ic2VydmFibGUgc2VxdWVuY2UsIHVzaW5nIGFuIG9wdGlvbmFsIHNjaGVkdWxlciB0byBlbnVtZXJhdGUgdGhlIGFycmF5LlxuICAqIEBkZXByZWNhdGVkIHVzZSBPYnNlcnZhYmxlLmZyb20gb3IgT2JzZXJ2YWJsZS5vZlxuICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBTY2hlZHVsZXIgdG8gcnVuIHRoZSBlbnVtZXJhdGlvbiBvZiB0aGUgaW5wdXQgc2VxdWVuY2Ugb24uXG4gICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHdob3NlIGVsZW1lbnRzIGFyZSBwdWxsZWQgZnJvbSB0aGUgZ2l2ZW4gZW51bWVyYWJsZSBzZXF1ZW5jZS5cbiAgKi9cbiAgdmFyIG9ic2VydmFibGVGcm9tQXJyYXkgPSBPYnNlcnZhYmxlLmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnJheSwgc2NoZWR1bGVyKSB7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gY3VycmVudFRocmVhZFNjaGVkdWxlcik7XG4gICAgcmV0dXJuIG5ldyBGcm9tQXJyYXlPYnNlcnZhYmxlKGFycmF5LCBzY2hlZHVsZXIpXG4gIH07XG5cbiAgdmFyIE5ldmVyT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhOZXZlck9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gTmV2ZXJPYnNlcnZhYmxlKCkge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTmV2ZXJPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICByZXR1cm4gZGlzcG9zYWJsZUVtcHR5O1xuICAgIH07XG5cbiAgICByZXR1cm4gTmV2ZXJPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIE5FVkVSX09CU0VSVkFCTEUgPSBuZXcgTmV2ZXJPYnNlcnZhYmxlKCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBub24tdGVybWluYXRpbmcgb2JzZXJ2YWJsZSBzZXF1ZW5jZSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZGVub3RlIGFuIGluZmluaXRlIGR1cmF0aW9uIChlLmcuIHdoZW4gdXNpbmcgcmVhY3RpdmUgam9pbnMpLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aG9zZSBvYnNlcnZlcnMgd2lsbCBuZXZlciBnZXQgY2FsbGVkLlxuICAgKi9cbiAgdmFyIG9ic2VydmFibGVOZXZlciA9IE9ic2VydmFibGUubmV2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE5FVkVSX09CU0VSVkFCTEU7XG4gIH07XG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZU9mIChzY2hlZHVsZXIsIGFycmF5KSB7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gY3VycmVudFRocmVhZFNjaGVkdWxlcik7XG4gICAgcmV0dXJuIG5ldyBGcm9tQXJyYXlPYnNlcnZhYmxlKGFycmF5LCBzY2hlZHVsZXIpO1xuICB9XG5cbiAgLyoqXG4gICogIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSBpbnN0YW5jZSB3aXRoIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cywgcmVnYXJkbGVzcyBvZiBudW1iZXIgb3IgdHlwZSBvZiB0aGUgYXJndW1lbnRzLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aG9zZSBlbGVtZW50cyBhcmUgcHVsbGVkIGZyb20gdGhlIGdpdmVuIGFyZ3VtZW50cy5cbiAgKi9cbiAgT2JzZXJ2YWJsZS5vZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgcmV0dXJuIG5ldyBGcm9tQXJyYXlPYnNlcnZhYmxlKGFyZ3MsIGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIpO1xuICB9O1xuXG4gIC8qKlxuICAqICBUaGlzIG1ldGhvZCBjcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgaW5zdGFuY2Ugd2l0aCBhIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHMsIHJlZ2FyZGxlc3Mgb2YgbnVtYmVyIG9yIHR5cGUgb2YgdGhlIGFyZ3VtZW50cy5cbiAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gc2NoZWR1bGVyIEEgc2NoZWR1bGVyIHRvIHVzZSBmb3Igc2NoZWR1bGluZyB0aGUgYXJndW1lbnRzLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aG9zZSBlbGVtZW50cyBhcmUgcHVsbGVkIGZyb20gdGhlIGdpdmVuIGFyZ3VtZW50cy5cbiAgKi9cbiAgT2JzZXJ2YWJsZS5vZldpdGhTY2hlZHVsZXIgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldOyB9XG4gICAgcmV0dXJuIG5ldyBGcm9tQXJyYXlPYnNlcnZhYmxlKGFyZ3MsIHNjaGVkdWxlcik7XG4gIH07XG5cbiAgdmFyIFBhaXJzT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhQYWlyc09ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gUGFpcnNPYnNlcnZhYmxlKG9iaiwgc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLm9iaiA9IG9iajtcbiAgICAgIHRoaXMua2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFBhaXJzT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIHNpbmsgPSBuZXcgUGFpcnNTaW5rKG9ic2VydmVyLCB0aGlzKTtcbiAgICAgIHJldHVybiBzaW5rLnJ1bigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUGFpcnNPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgZnVuY3Rpb24gUGFpcnNTaW5rKG9ic2VydmVyLCBwYXJlbnQpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cblxuICBQYWlyc1NpbmsucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVyLCBvYmogPSB0aGlzLnBhcmVudC5vYmosIGtleXMgPSB0aGlzLnBhcmVudC5rZXlzLCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICBmdW5jdGlvbiBsb29wUmVjdXJzaXZlKGksIHJlY3Vyc2UpIHtcbiAgICAgIGlmIChpIDwgbGVuKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBvYnNlcnZlci5vbk5leHQoW2tleSwgb2JqW2tleV1dKTtcbiAgICAgICAgcmVjdXJzZShpICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYnNlcnZlci5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBhcmVudC5zY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmUoMCwgbG9vcFJlY3Vyc2l2ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gb2JqZWN0IGludG8gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvZiBba2V5LCB2YWx1ZV0gcGFpcnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gU2NoZWR1bGVyIHRvIHJ1biB0aGUgZW51bWVyYXRpb24gb2YgdGhlIGlucHV0IHNlcXVlbmNlIG9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvZiBba2V5LCB2YWx1ZV0gcGFpcnMgZnJvbSB0aGUgb2JqZWN0LlxuICAgKi9cbiAgT2JzZXJ2YWJsZS5wYWlycyA9IGZ1bmN0aW9uIChvYmosIHNjaGVkdWxlcikge1xuICAgIHNjaGVkdWxlciB8fCAoc2NoZWR1bGVyID0gY3VycmVudFRocmVhZFNjaGVkdWxlcik7XG4gICAgcmV0dXJuIG5ldyBQYWlyc09ic2VydmFibGUob2JqLCBzY2hlZHVsZXIpO1xuICB9O1xuXG4gICAgdmFyIFJhbmdlT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhSYW5nZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gUmFuZ2VPYnNlcnZhYmxlKHN0YXJ0LCBjb3VudCwgc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICB0aGlzLnJhbmdlQ291bnQgPSBjb3VudDtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgUmFuZ2VPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICB2YXIgc2luayA9IG5ldyBSYW5nZVNpbmsob2JzZXJ2ZXIsIHRoaXMpO1xuICAgICAgcmV0dXJuIHNpbmsucnVuKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBSYW5nZU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgUmFuZ2VTaW5rID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSYW5nZVNpbmsob2JzZXJ2ZXIsIHBhcmVudCkge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9vcFJlY3Vyc2l2ZShzdGFydCwgY291bnQsIG9ic2VydmVyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gbG9vcCAoaSwgcmVjdXJzZSkge1xuICAgICAgICBpZiAoaSA8IGNvdW50KSB7XG4gICAgICAgICAgb2JzZXJ2ZXIub25OZXh0KHN0YXJ0ICsgaSk7XG4gICAgICAgICAgcmVjdXJzZShpICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBSYW5nZVNpbmsucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudC5zY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmUoXG4gICAgICAgIDAsXG4gICAgICAgIGxvb3BSZWN1cnNpdmUodGhpcy5wYXJlbnQuc3RhcnQsIHRoaXMucGFyZW50LnJhbmdlQ291bnQsIHRoaXMub2JzZXJ2ZXIpXG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gUmFuZ2VTaW5rO1xuICB9KCkpO1xuXG4gIC8qKlxuICAqICBHZW5lcmF0ZXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvZiBpbnRlZ3JhbCBudW1iZXJzIHdpdGhpbiBhIHNwZWNpZmllZCByYW5nZSwgdXNpbmcgdGhlIHNwZWNpZmllZCBzY2hlZHVsZXIgdG8gc2VuZCBvdXQgb2JzZXJ2ZXIgbWVzc2FnZXMuXG4gICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IFRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgaW50ZWdlciBpbiB0aGUgc2VxdWVuY2UuXG4gICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2Ygc2VxdWVudGlhbCBpbnRlZ2VycyB0byBnZW5lcmF0ZS5cbiAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gU2NoZWR1bGVyIHRvIHJ1biB0aGUgZ2VuZXJhdG9yIGxvb3Agb24uIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFNjaGVkdWxlci5jdXJyZW50VGhyZWFkLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgYSByYW5nZSBvZiBzZXF1ZW50aWFsIGludGVncmFsIG51bWJlcnMuXG4gICovXG4gIE9ic2VydmFibGUucmFuZ2UgPSBmdW5jdGlvbiAoc3RhcnQsIGNvdW50LCBzY2hlZHVsZXIpIHtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBjdXJyZW50VGhyZWFkU2NoZWR1bGVyKTtcbiAgICByZXR1cm4gbmV3IFJhbmdlT2JzZXJ2YWJsZShzdGFydCwgY291bnQsIHNjaGVkdWxlcik7XG4gIH07XG5cbiAgdmFyIFJlcGVhdE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoUmVwZWF0T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBSZXBlYXRPYnNlcnZhYmxlKHZhbHVlLCByZXBlYXRDb3VudCwgc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnJlcGVhdENvdW50ID0gcmVwZWF0Q291bnQgPT0gbnVsbCA/IC0xIDogcmVwZWF0Q291bnQ7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFJlcGVhdE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBzaW5rID0gbmV3IFJlcGVhdFNpbmsob2JzZXJ2ZXIsIHRoaXMpO1xuICAgICAgcmV0dXJuIHNpbmsucnVuKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBSZXBlYXRPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgZnVuY3Rpb24gUmVwZWF0U2luayhvYnNlcnZlciwgcGFyZW50KSB7XG4gICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG5cbiAgUmVwZWF0U2luay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvYnNlcnZlciA9IHRoaXMub2JzZXJ2ZXIsIHZhbHVlID0gdGhpcy5wYXJlbnQudmFsdWU7XG4gICAgZnVuY3Rpb24gbG9vcFJlY3Vyc2l2ZShpLCByZWN1cnNlKSB7XG4gICAgICBpZiAoaSA9PT0gLTEgfHwgaSA+IDApIHtcbiAgICAgICAgb2JzZXJ2ZXIub25OZXh0KHZhbHVlKTtcbiAgICAgICAgaSA+IDAgJiYgaS0tO1xuICAgICAgfVxuICAgICAgaWYgKGkgPT09IDApIHsgcmV0dXJuIG9ic2VydmVyLm9uQ29tcGxldGVkKCk7IH1cbiAgICAgIHJlY3Vyc2UoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZSh0aGlzLnBhcmVudC5yZXBlYXRDb3VudCwgbG9vcFJlY3Vyc2l2ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqICBHZW5lcmF0ZXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHJlcGVhdHMgdGhlIGdpdmVuIGVsZW1lbnQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMsIHVzaW5nIHRoZSBzcGVjaWZpZWQgc2NoZWR1bGVyIHRvIHNlbmQgb3V0IG9ic2VydmVyIG1lc3NhZ2VzLlxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSBFbGVtZW50IHRvIHJlcGVhdC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHJlcGVhdENvdW50IFtPcHRpb25hXSBOdW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBlbGVtZW50LiBJZiBub3Qgc3BlY2lmaWVkLCByZXBlYXRzIGluZGVmaW5pdGVseS5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IHNjaGVkdWxlciBTY2hlZHVsZXIgdG8gcnVuIHRoZSBwcm9kdWNlciBsb29wIG9uLiBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byBTY2hlZHVsZXIuaW1tZWRpYXRlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHJlcGVhdHMgdGhlIGdpdmVuIGVsZW1lbnQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMuXG4gICAqL1xuICBPYnNlcnZhYmxlLnJlcGVhdCA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVwZWF0Q291bnQsIHNjaGVkdWxlcikge1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIpO1xuICAgIHJldHVybiBuZXcgUmVwZWF0T2JzZXJ2YWJsZSh2YWx1ZSwgcmVwZWF0Q291bnQsIHNjaGVkdWxlcik7XG4gIH07XG5cbiAgdmFyIEp1c3RPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEp1c3RPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEp1c3RPYnNlcnZhYmxlKHZhbHVlLCBzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgSnVzdE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBzaW5rID0gbmV3IEp1c3RTaW5rKG9ic2VydmVyLCB0aGlzLnZhbHVlLCB0aGlzLnNjaGVkdWxlcik7XG4gICAgICByZXR1cm4gc2luay5ydW4oKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gSnVzdFNpbmsob2JzZXJ2ZXIsIHZhbHVlLCBzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlSXRlbShzLCBzdGF0ZSkge1xuICAgICAgdmFyIHZhbHVlID0gc3RhdGVbMF0sIG9ic2VydmVyID0gc3RhdGVbMV07XG4gICAgICBvYnNlcnZlci5vbk5leHQodmFsdWUpO1xuICAgICAgb2JzZXJ2ZXIub25Db21wbGV0ZWQoKTtcbiAgICAgIHJldHVybiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgfVxuXG4gICAgSnVzdFNpbmsucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IFt0aGlzLnZhbHVlLCB0aGlzLm9ic2VydmVyXTtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlciA9PT0gaW1tZWRpYXRlU2NoZWR1bGVyID9cbiAgICAgICAgc2NoZWR1bGVJdGVtKG51bGwsIHN0YXRlKSA6XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKHN0YXRlLCBzY2hlZHVsZUl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gSnVzdE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgICogIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIGEgc2luZ2xlIGVsZW1lbnQsIHVzaW5nIHRoZSBzcGVjaWZpZWQgc2NoZWR1bGVyIHRvIHNlbmQgb3V0IG9ic2VydmVyIG1lc3NhZ2VzLlxuICAgKiAgVGhlcmUgaXMgYW4gYWxpYXMgY2FsbGVkICdqdXN0JyBvciBicm93c2VycyA8SUU5LlxuICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSBTaW5nbGUgZWxlbWVudCBpbiB0aGUgcmVzdWx0aW5nIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBzY2hlZHVsZXIgU2NoZWR1bGVyIHRvIHNlbmQgdGhlIHNpbmdsZSBlbGVtZW50IG9uLiBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byBTY2hlZHVsZXIuaW1tZWRpYXRlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSBzaW5nbGUgc3BlY2lmaWVkIGVsZW1lbnQuXG4gICAqL1xuICB2YXIgb2JzZXJ2YWJsZVJldHVybiA9IE9ic2VydmFibGVbJ3JldHVybiddID0gT2JzZXJ2YWJsZS5qdXN0ID0gZnVuY3Rpb24gKHZhbHVlLCBzY2hlZHVsZXIpIHtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBpbW1lZGlhdGVTY2hlZHVsZXIpO1xuICAgIHJldHVybiBuZXcgSnVzdE9ic2VydmFibGUodmFsdWUsIHNjaGVkdWxlcik7XG4gIH07XG5cbiAgdmFyIFRocm93T2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUaHJvd09ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gVGhyb3dPYnNlcnZhYmxlKGVycm9yLCBzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVGhyb3dPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBzaW5rID0gbmV3IFRocm93U2luayhvLCB0aGlzKTtcbiAgICAgIHJldHVybiBzaW5rLnJ1bigpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBUaHJvd1NpbmsobywgcCkge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMucCA9IHA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2NoZWR1bGVJdGVtKHMsIHN0YXRlKSB7XG4gICAgICB2YXIgZSA9IHN0YXRlWzBdLCBvID0gc3RhdGVbMV07XG4gICAgICBvLm9uRXJyb3IoZSk7XG4gICAgfVxuXG4gICAgVGhyb3dTaW5rLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wLnNjaGVkdWxlci5zY2hlZHVsZShbdGhpcy5wLmVycm9yLCB0aGlzLm9dLCBzY2hlZHVsZUl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGhyb3dPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCB0ZXJtaW5hdGVzIHdpdGggYW4gZXhjZXB0aW9uLCB1c2luZyB0aGUgc3BlY2lmaWVkIHNjaGVkdWxlciB0byBzZW5kIG91dCB0aGUgc2luZ2xlIG9uRXJyb3IgbWVzc2FnZS5cbiAgICogIFRoZXJlIGlzIGFuIGFsaWFzIHRvIHRoaXMgbWV0aG9kIGNhbGxlZCAndGhyb3dFcnJvcicgZm9yIGJyb3dzZXJzIDxJRTkuXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGVycm9yIEFuIG9iamVjdCB1c2VkIGZvciB0aGUgc2VxdWVuY2UncyB0ZXJtaW5hdGlvbi5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IHNjaGVkdWxlciBTY2hlZHVsZXIgdG8gc2VuZCB0aGUgZXhjZXB0aW9uYWwgdGVybWluYXRpb24gY2FsbCBvbi4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gU2NoZWR1bGVyLmltbWVkaWF0ZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgdGVybWluYXRlcyBleGNlcHRpb25hbGx5IHdpdGggdGhlIHNwZWNpZmllZCBleGNlcHRpb24gb2JqZWN0LlxuICAgKi9cbiAgdmFyIG9ic2VydmFibGVUaHJvdyA9IE9ic2VydmFibGVbJ3Rocm93J10gPSBmdW5jdGlvbiAoZXJyb3IsIHNjaGVkdWxlcikge1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGltbWVkaWF0ZVNjaGVkdWxlcik7XG4gICAgcmV0dXJuIG5ldyBUaHJvd09ic2VydmFibGUoZXJyb3IsIHNjaGVkdWxlcik7XG4gIH07XG5cbiAgdmFyIENhdGNoT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQ2F0Y2hPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIENhdGNoT2JzZXJ2YWJsZShzb3VyY2UsIGZuKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX2ZuID0gZm47XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBDYXRjaE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGQxID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCksIHN1YnNjcmlwdGlvbiA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCk7XG4gICAgICBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShkMSk7XG4gICAgICBkMS5zZXREaXNwb3NhYmxlKHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgQ2F0Y2hPYnNlcnZlcihvLCBzdWJzY3JpcHRpb24sIHRoaXMuX2ZuKSkpO1xuICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENhdGNoT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBDYXRjaE9ic2VydmVyID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKENhdGNoT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ2F0Y2hPYnNlcnZlcihvLCBzLCBmbikge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9zID0gcztcbiAgICAgIHRoaXMuX2ZuID0gZm47XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBDYXRjaE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHsgdGhpcy5fby5vbk5leHQoeCk7IH07XG4gICAgQ2F0Y2hPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fby5vbkNvbXBsZXRlZCgpOyB9O1xuICAgIENhdGNoT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLl9mbikoZSk7XG4gICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5fby5vbkVycm9yKHJlc3VsdC5lKTsgfVxuICAgICAgaXNQcm9taXNlKHJlc3VsdCkgJiYgKHJlc3VsdCA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShyZXN1bHQpKTtcblxuICAgICAgdmFyIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIHRoaXMuX3Muc2V0RGlzcG9zYWJsZShkKTtcbiAgICAgIGQuc2V0RGlzcG9zYWJsZShyZXN1bHQuc3Vic2NyaWJlKHRoaXMuX28pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENhdGNoT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiBDb250aW51ZXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGlzIHRlcm1pbmF0ZWQgYnkgYW4gZXhjZXB0aW9uIHdpdGggdGhlIG5leHQgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIHtNaXhlZH0gaGFuZGxlck9yU2Vjb25kIEV4Y2VwdGlvbiBoYW5kbGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGdpdmVuIHRoZSBlcnJvciB0aGF0IG9jY3VycmVkIGluIHRoZSBmaXJzdCBzZXF1ZW5jZSwgb3IgYSBzZWNvbmQgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB1c2VkIHRvIHByb2R1Y2UgcmVzdWx0cyB3aGVuIGFuIGVycm9yIG9jY3VycmVkIGluIHRoZSBmaXJzdCBzZXF1ZW5jZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgZmlyc3Qgc2VxdWVuY2UncyBlbGVtZW50cywgZm9sbG93ZWQgYnkgdGhlIGVsZW1lbnRzIG9mIHRoZSBoYW5kbGVyIHNlcXVlbmNlIGluIGNhc2UgYW4gZXhjZXB0aW9uIG9jY3VycmVkLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvWydjYXRjaCddID0gZnVuY3Rpb24gKGhhbmRsZXJPclNlY29uZCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGhhbmRsZXJPclNlY29uZCkgPyBuZXcgQ2F0Y2hPYnNlcnZhYmxlKHRoaXMsIGhhbmRsZXJPclNlY29uZCkgOiBvYnNlcnZhYmxlQ2F0Y2goW3RoaXMsIGhhbmRsZXJPclNlY29uZF0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb250aW51ZXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGlzIHRlcm1pbmF0ZWQgYnkgYW4gZXhjZXB0aW9uIHdpdGggdGhlIG5leHQgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIHtBcnJheSB8IEFyZ3VtZW50c30gYXJncyBBcmd1bWVudHMgb3IgYW4gYXJyYXkgdG8gdXNlIGFzIHRoZSBuZXh0IHNlcXVlbmNlIGlmIGFuIGVycm9yIG9jY3Vycy5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyBlbGVtZW50cyBmcm9tIGNvbnNlY3V0aXZlIHNvdXJjZSBzZXF1ZW5jZXMgdW50aWwgYSBzb3VyY2Ugc2VxdWVuY2UgdGVybWluYXRlcyBzdWNjZXNzZnVsbHkuXG4gICAqL1xuICB2YXIgb2JzZXJ2YWJsZUNhdGNoID0gT2JzZXJ2YWJsZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXRlbXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSkge1xuICAgICAgaXRlbXMgPSBhcmd1bWVudHNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgaXRlbXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBpdGVtc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIH1cbiAgICByZXR1cm4gZW51bWVyYWJsZU9mKGl0ZW1zKS5jYXRjaEVycm9yKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1lcmdlcyB0aGUgc3BlY2lmaWVkIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gb25lIG9ic2VydmFibGUgc2VxdWVuY2UgYnkgdXNpbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHdoZW5ldmVyIGFueSBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgb3IgUHJvbWlzZXMgcHJvZHVjZXMgYW4gZWxlbWVudC5cbiAgICogVGhpcyBjYW4gYmUgaW4gdGhlIGZvcm0gb2YgYW4gYXJndW1lbnQgbGlzdCBvZiBvYnNlcnZhYmxlcyBvciBhbiBhcnJheS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogMSAtIG9icyA9IG9ic2VydmFibGUuY29tYmluZUxhdGVzdChvYnMxLCBvYnMyLCBvYnMzLCBmdW5jdGlvbiAobzEsIG8yLCBvMykgeyByZXR1cm4gbzEgKyBvMiArIG8zOyB9KTtcbiAgICogMiAtIG9icyA9IG9ic2VydmFibGUuY29tYmluZUxhdGVzdChbb2JzMSwgb2JzMiwgb2JzM10sIGZ1bmN0aW9uIChvMSwgbzIsIG8zKSB7IHJldHVybiBvMSArIG8yICsgbzM7IH0pO1xuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSByZXN1bHQgb2YgY29tYmluaW5nIGVsZW1lbnRzIG9mIHRoZSBzb3VyY2VzIHVzaW5nIHRoZSBzcGVjaWZpZWQgcmVzdWx0IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmNvbWJpbmVMYXRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBhcmdzWzBdLnVuc2hpZnQodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZmFsc2VGYWN0b3J5KCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgZnVuY3Rpb24gYXJndW1lbnRzVG9BcnJheSgpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgcmV0dXJuIGFyZ3M7XG4gIH1cblxuICB2YXIgQ29tYmluZUxhdGVzdE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQ29tYmluZUxhdGVzdE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ29tYmluZUxhdGVzdE9ic2VydmFibGUocGFyYW1zLCBjYikge1xuICAgICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgICAgdGhpcy5fY2IgPSBjYjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIENvbWJpbmVMYXRlc3RPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBsZW4gPSB0aGlzLl9wYXJhbXMubGVuZ3RoLFxuICAgICAgICAgIHN1YnNjcmlwdGlvbnMgPSBuZXcgQXJyYXkobGVuKTtcblxuICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICBoYXNWYWx1ZTogYXJyYXlJbml0aWFsaXplKGxlbiwgZmFsc2VGYWN0b3J5KSxcbiAgICAgICAgaGFzVmFsdWVBbGw6IGZhbHNlLFxuICAgICAgICBpc0RvbmU6IGFycmF5SW5pdGlhbGl6ZShsZW4sIGZhbHNlRmFjdG9yeSksXG4gICAgICAgIHZhbHVlczogbmV3IEFycmF5KGxlbilcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuX3BhcmFtc1tpXSwgc2FkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgIHN1YnNjcmlwdGlvbnNbaV0gPSBzYWQ7XG4gICAgICAgIGlzUHJvbWlzZShzb3VyY2UpICYmIChzb3VyY2UgPSBvYnNlcnZhYmxlRnJvbVByb21pc2Uoc291cmNlKSk7XG4gICAgICAgIHNhZC5zZXREaXNwb3NhYmxlKHNvdXJjZS5zdWJzY3JpYmUobmV3IENvbWJpbmVMYXRlc3RPYnNlcnZlcihvYnNlcnZlciwgaSwgdGhpcy5fY2IsIHN0YXRlKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IE5BcnlEaXNwb3NhYmxlKHN1YnNjcmlwdGlvbnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29tYmluZUxhdGVzdE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgQ29tYmluZUxhdGVzdE9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhDb21iaW5lTGF0ZXN0T2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ29tYmluZUxhdGVzdE9ic2VydmVyKG8sIGksIGNiLCBzdGF0ZSkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9pID0gaTtcbiAgICAgIHRoaXMuX2NiID0gY2I7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm90VGhlU2FtZShpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHgsIGopIHtcbiAgICAgICAgcmV0dXJuIGogIT09IGk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIENvbWJpbmVMYXRlc3RPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9zdGF0ZS52YWx1ZXNbdGhpcy5faV0gPSB4O1xuICAgICAgdGhpcy5fc3RhdGUuaGFzVmFsdWVbdGhpcy5faV0gPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuX3N0YXRlLmhhc1ZhbHVlQWxsIHx8ICh0aGlzLl9zdGF0ZS5oYXNWYWx1ZUFsbCA9IHRoaXMuX3N0YXRlLmhhc1ZhbHVlLmV2ZXJ5KGlkZW50aXR5KSkpIHtcbiAgICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoKHRoaXMuX2NiKS5hcHBseShudWxsLCB0aGlzLl9zdGF0ZS52YWx1ZXMpO1xuICAgICAgICBpZiAocmVzID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5fby5vbkVycm9yKHJlcy5lKTsgfVxuICAgICAgICB0aGlzLl9vLm9uTmV4dChyZXMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZS5pc0RvbmUuZmlsdGVyKG5vdFRoZVNhbWUodGhpcy5faSkpLmV2ZXJ5KGlkZW50aXR5KSkge1xuICAgICAgICB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvbWJpbmVMYXRlc3RPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBDb21iaW5lTGF0ZXN0T2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmlzRG9uZVt0aGlzLl9pXSA9IHRydWU7XG4gICAgICB0aGlzLl9zdGF0ZS5pc0RvbmUuZXZlcnkoaWRlbnRpdHkpICYmIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENvbWJpbmVMYXRlc3RPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICogTWVyZ2VzIHRoZSBzcGVjaWZpZWQgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBvbmUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBieSB1c2luZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gd2hlbmV2ZXIgYW55IG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlcyBvciBQcm9taXNlcyBwcm9kdWNlcyBhbiBlbGVtZW50LlxuICAqXG4gICogQGV4YW1wbGVcbiAgKiAxIC0gb2JzID0gUnguT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KG9iczEsIG9iczIsIG9iczMsIGZ1bmN0aW9uIChvMSwgbzIsIG8zKSB7IHJldHVybiBvMSArIG8yICsgbzM7IH0pO1xuICAqIDIgLSBvYnMgPSBSeC5PYnNlcnZhYmxlLmNvbWJpbmVMYXRlc3QoW29iczEsIG9iczIsIG9iczNdLCBmdW5jdGlvbiAobzEsIG8yLCBvMykgeyByZXR1cm4gbzEgKyBvMiArIG8zOyB9KTtcbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSByZXN1bHQgb2YgY29tYmluaW5nIGVsZW1lbnRzIG9mIHRoZSBzb3VyY2VzIHVzaW5nIHRoZSBzcGVjaWZpZWQgcmVzdWx0IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAqL1xuICB2YXIgY29tYmluZUxhdGVzdCA9IE9ic2VydmFibGUuY29tYmluZUxhdGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgdmFyIHJlc3VsdFNlbGVjdG9yID0gaXNGdW5jdGlvbihhcmdzW2xlbiAtIDFdKSA/IGFyZ3MucG9wKCkgOiBhcmd1bWVudHNUb0FycmF5O1xuICAgIEFycmF5LmlzQXJyYXkoYXJnc1swXSkgJiYgKGFyZ3MgPSBhcmdzWzBdKTtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVMYXRlc3RPYnNlcnZhYmxlKGFyZ3MsIHJlc3VsdFNlbGVjdG9yKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGVzIGFsbCB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMuICBUaGlzIHRha2VzIGluIGVpdGhlciBhbiBhcnJheSBvciB2YXJpYWJsZSBhcmd1bWVudHMgdG8gY29uY2F0ZW5hdGUuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGVhY2ggZ2l2ZW4gc2VxdWVuY2UsIGluIHNlcXVlbnRpYWwgb3JkZXIuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uY29uY2F0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvcih2YXIgYXJncyA9IFtdLCBpID0gMCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3MucHVzaChhcmd1bWVudHNbaV0pOyB9XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIHJldHVybiBvYnNlcnZhYmxlQ29uY2F0LmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9O1xuXG4gIHZhciBDb25jYXRPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKENvbmNhdE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ29uY2F0T2JzZXJ2YWJsZShzb3VyY2VzKSB7XG4gICAgICB0aGlzLnNvdXJjZXMgPSBzb3VyY2VzO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgQ29uY2F0T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgIHZhciBzaW5rID0gbmV3IENvbmNhdFNpbmsodGhpcy5zb3VyY2VzLCBvKTtcbiAgICAgIHJldHVybiBzaW5rLnJ1bigpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDb25jYXRTaW5rKHNvdXJjZXMsIG8pIHtcbiAgICAgIHRoaXMuc291cmNlcyA9IHNvdXJjZXM7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgIH1cbiAgICBDb25jYXRTaW5rLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaXNEaXNwb3NlZCwgc3Vic2NyaXB0aW9uID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKSwgc291cmNlcyA9IHRoaXMuc291cmNlcywgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsIG8gPSB0aGlzLm87XG4gICAgICB2YXIgY2FuY2VsYWJsZSA9IGltbWVkaWF0ZVNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZSgwLCBmdW5jdGlvbiAoaSwgc2VsZikge1xuICAgICAgICBpZiAoaXNEaXNwb3NlZCkgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKGkgPT09IGxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBwcm9taXNlXG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBzb3VyY2VzW2ldO1xuICAgICAgICBpc1Byb21pc2UoY3VycmVudFZhbHVlKSAmJiAoY3VycmVudFZhbHVlID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKGN1cnJlbnRWYWx1ZSkpO1xuXG4gICAgICAgIHZhciBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKGQpO1xuICAgICAgICBkLnNldERpc3Bvc2FibGUoY3VycmVudFZhbHVlLnN1YnNjcmliZShcbiAgICAgICAgICBmdW5jdGlvbiAoeCkgeyBvLm9uTmV4dCh4KTsgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZSkgeyBvLm9uRXJyb3IoZSk7IH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCkgeyBzZWxmKGkgKyAxKTsgfVxuICAgICAgICApKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoc3Vic2NyaXB0aW9uLCBjYW5jZWxhYmxlLCBkaXNwb3NhYmxlQ3JlYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICB9KSk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIENvbmNhdE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGVzIGFsbCB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMuXG4gICAqIEBwYXJhbSB7QXJyYXkgfCBBcmd1bWVudHN9IGFyZ3MgQXJndW1lbnRzIG9yIGFuIGFycmF5IHRvIGNvbmNhdCB0byB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgZWFjaCBnaXZlbiBzZXF1ZW5jZSwgaW4gc2VxdWVudGlhbCBvcmRlci5cbiAgICovXG4gIHZhciBvYnNlcnZhYmxlQ29uY2F0ID0gT2JzZXJ2YWJsZS5jb25jYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3M7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSkge1xuICAgICAgYXJncyA9IGFyZ3VtZW50c1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ29uY2F0T2JzZXJ2YWJsZShhcmdzKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29uY2F0ZW5hdGVzIGFuIG9ic2VydmFibGUgc2VxdWVuY2Ugb2Ygb2JzZXJ2YWJsZSBzZXF1ZW5jZXMuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGVhY2ggb2JzZXJ2ZWQgaW5uZXIgc2VxdWVuY2UsIGluIHNlcXVlbnRpYWwgb3JkZXIuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uY29uY2F0QWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1lcmdlKDEpO1xuICB9O1xuXG4gIHZhciBNZXJnZU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE1lcmdlT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIE1lcmdlT2JzZXJ2YWJsZShzb3VyY2UsIG1heENvbmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gbWF4Q29uY3VycmVudDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIE1lcmdlT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICB2YXIgZyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKCk7XG4gICAgICBnLmFkZCh0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IE1lcmdlT2JzZXJ2ZXIob2JzZXJ2ZXIsIHRoaXMubWF4Q29uY3VycmVudCwgZykpKTtcbiAgICAgIHJldHVybiBnO1xuICAgIH07XG5cbiAgICByZXR1cm4gTWVyZ2VPYnNlcnZhYmxlO1xuXG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgTWVyZ2VPYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWVyZ2VPYnNlcnZlcihvLCBtYXgsIGcpIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgIHRoaXMuZyA9IGc7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucSA9IFtdO1xuICAgICAgdGhpcy5hY3RpdmVDb3VudCA9IDA7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBNZXJnZU9ic2VydmVyLnByb3RvdHlwZS5oYW5kbGVTdWJzY3JpYmUgPSBmdW5jdGlvbiAoeHMpIHtcbiAgICAgIHZhciBzYWQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIHRoaXMuZy5hZGQoc2FkKTtcbiAgICAgIGlzUHJvbWlzZSh4cykgJiYgKHhzID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHhzKSk7XG4gICAgICBzYWQuc2V0RGlzcG9zYWJsZSh4cy5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIodGhpcywgc2FkKSkpO1xuICAgIH07XG4gICAgTWVyZ2VPYnNlcnZlci5wcm90b3R5cGUub25OZXh0ID0gZnVuY3Rpb24gKGlubmVyU291cmNlKSB7XG4gICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmKHRoaXMuYWN0aXZlQ291bnQgPCB0aGlzLm1heCkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQrKztcbiAgICAgICAgICB0aGlzLmhhbmRsZVN1YnNjcmliZShpbm5lclNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5xLnB1c2goaW5uZXJTb3VyY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgTWVyZ2VPYnNlcnZlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5vLm9uRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBNZXJnZU9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQgPT09IDAgJiYgdGhpcy5vLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBNZXJnZU9ic2VydmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTsgfTtcbiAgICAgIE1lcmdlT2JzZXJ2ZXIucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuby5vbkVycm9yKGUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihwYXJlbnQsIHNhZCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5zYWQgPSBzYWQ7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbk5leHQgPSBmdW5jdGlvbiAoeCkgeyBpZighdGhpcy5pc1N0b3BwZWQpIHsgdGhpcy5wYXJlbnQuby5vbk5leHQoeCk7IH0gfTtcbiAgICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucGFyZW50Lm8ub25FcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZighdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgICAgICAgIHBhcmVudC5nLnJlbW92ZSh0aGlzLnNhZCk7XG4gICAgICAgICAgaWYgKHBhcmVudC5xLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHBhcmVudC5oYW5kbGVTdWJzY3JpYmUocGFyZW50LnEuc2hpZnQoKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudC5hY3RpdmVDb3VudC0tO1xuICAgICAgICAgICAgcGFyZW50LmRvbmUgJiYgcGFyZW50LmFjdGl2ZUNvdW50ID09PSAwICYmIHBhcmVudC5vLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmlzU3RvcHBlZCA9IHRydWU7IH07XG4gICAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBhcmVudC5vLm9uRXJyb3IoZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gTWVyZ2VPYnNlcnZlcjtcbiAgfSgpKTtcblxuXG5cblxuXG4gIC8qKlxuICAqIE1lcmdlcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIG9mIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSwgbGltaXRpbmcgdGhlIG51bWJlciBvZiBjb25jdXJyZW50IHN1YnNjcmlwdGlvbnMgdG8gaW5uZXIgc2VxdWVuY2VzLlxuICAqIE9yIG1lcmdlcyB0d28gb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBhIHNpbmdsZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqXG4gICogQGV4YW1wbGVcbiAgKiAxIC0gbWVyZ2VkID0gc291cmNlcy5tZXJnZSgxKTtcbiAgKiAyIC0gbWVyZ2VkID0gc291cmNlLm1lcmdlKG90aGVyU291cmNlKTtcbiAgKiBAcGFyYW0ge01peGVkfSBbbWF4Q29uY3VycmVudE9yT3RoZXJdIE1heGltdW0gbnVtYmVyIG9mIGlubmVyIG9ic2VydmFibGUgc2VxdWVuY2VzIGJlaW5nIHN1YnNjcmliZWQgdG8gY29uY3VycmVudGx5IG9yIHRoZSBzZWNvbmQgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBtZXJnZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbm5lciBzZXF1ZW5jZXMuXG4gICovXG4gIG9ic2VydmFibGVQcm90by5tZXJnZSA9IGZ1bmN0aW9uIChtYXhDb25jdXJyZW50T3JPdGhlcikge1xuICAgIHJldHVybiB0eXBlb2YgbWF4Q29uY3VycmVudE9yT3RoZXIgIT09ICdudW1iZXInID9cbiAgICAgIG9ic2VydmFibGVNZXJnZSh0aGlzLCBtYXhDb25jdXJyZW50T3JPdGhlcikgOlxuICAgICAgbmV3IE1lcmdlT2JzZXJ2YWJsZSh0aGlzLCBtYXhDb25jdXJyZW50T3JPdGhlcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1lcmdlcyBhbGwgdGhlIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gYSBzaW5nbGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogVGhlIHNjaGVkdWxlciBpcyBvcHRpb25hbCBhbmQgaWYgbm90IHNwZWNpZmllZCwgdGhlIGltbWVkaWF0ZSBzY2hlZHVsZXIgaXMgdXNlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgbWVyZ2VzIHRoZSBlbGVtZW50cyBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMuXG4gICAqL1xuICB2YXIgb2JzZXJ2YWJsZU1lcmdlID0gT2JzZXJ2YWJsZS5tZXJnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2NoZWR1bGVyLCBzb3VyY2VzID0gW10sIGksIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKCFhcmd1bWVudHNbMF0pIHtcbiAgICAgIHNjaGVkdWxlciA9IGltbWVkaWF0ZVNjaGVkdWxlcjtcbiAgICAgIGZvcihpID0gMTsgaSA8IGxlbjsgaSsrKSB7IHNvdXJjZXMucHVzaChhcmd1bWVudHNbaV0pOyB9XG4gICAgfSBlbHNlIGlmIChpc1NjaGVkdWxlcihhcmd1bWVudHNbMF0pKSB7XG4gICAgICBzY2hlZHVsZXIgPSBhcmd1bWVudHNbMF07XG4gICAgICBmb3IoaSA9IDE7IGkgPCBsZW47IGkrKykgeyBzb3VyY2VzLnB1c2goYXJndW1lbnRzW2ldKTsgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZXIgPSBpbW1lZGlhdGVTY2hlZHVsZXI7XG4gICAgICBmb3IoaSA9IDA7IGkgPCBsZW47IGkrKykgeyBzb3VyY2VzLnB1c2goYXJndW1lbnRzW2ldKTsgfVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2VzWzBdKSkge1xuICAgICAgc291cmNlcyA9IHNvdXJjZXNbMF07XG4gICAgfVxuICAgIHJldHVybiBvYnNlcnZhYmxlT2Yoc2NoZWR1bGVyLCBzb3VyY2VzKS5tZXJnZUFsbCgpO1xuICB9O1xuXG4gIHZhciBDb21wb3NpdGVFcnJvciA9IFJ4LkNvbXBvc2l0ZUVycm9yID0gZnVuY3Rpb24oZXJyb3JzKSB7XG4gICAgdGhpcy5pbm5lckVycm9ycyA9IGVycm9ycztcbiAgICB0aGlzLm1lc3NhZ2UgPSAnVGhpcyBjb250YWlucyBtdWx0aXBsZSBlcnJvcnMuIENoZWNrIHRoZSBpbm5lckVycm9ycyc7XG4gICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgfTtcbiAgQ29tcG9zaXRlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICBDb21wb3NpdGVFcnJvci5wcm90b3R5cGUubmFtZSA9ICdDb21wb3NpdGVFcnJvcic7XG5cbiAgdmFyIE1lcmdlRGVsYXlFcnJvck9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoTWVyZ2VEZWxheUVycm9yT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBNZXJnZURlbGF5RXJyb3JPYnNlcnZhYmxlKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBNZXJnZURlbGF5RXJyb3JPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBncm91cCA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKCksXG4gICAgICAgIG0gPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKSxcbiAgICAgICAgc3RhdGUgPSB7IGlzU3RvcHBlZDogZmFsc2UsIGVycm9yczogW10sIG86IG8gfTtcblxuICAgICAgZ3JvdXAuYWRkKG0pO1xuICAgICAgbS5zZXREaXNwb3NhYmxlKHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgTWVyZ2VEZWxheUVycm9yT2JzZXJ2ZXIoZ3JvdXAsIHN0YXRlKSkpO1xuXG4gICAgICByZXR1cm4gZ3JvdXA7XG4gICAgfTtcblxuICAgIHJldHVybiBNZXJnZURlbGF5RXJyb3JPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIE1lcmdlRGVsYXlFcnJvck9ic2VydmVyID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE1lcmdlRGVsYXlFcnJvck9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIE1lcmdlRGVsYXlFcnJvck9ic2VydmVyKGdyb3VwLCBzdGF0ZSkge1xuICAgICAgdGhpcy5fZ3JvdXAgPSBncm91cDtcbiAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDb21wbGV0aW9uKG8sIGVycm9ycykge1xuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfSBlbHNlIGlmIChlcnJvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG8ub25FcnJvcihlcnJvcnNbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgby5vbkVycm9yKG5ldyBDb21wb3NpdGVFcnJvcihlcnJvcnMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBNZXJnZURlbGF5RXJyb3JPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB2YXIgaW5uZXIgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIHRoaXMuX2dyb3VwLmFkZChpbm5lcik7XG5cbiAgICAgIC8vIENoZWNrIGZvciBwcm9taXNlcyBzdXBwb3J0XG4gICAgICBpc1Byb21pc2UoeCkgJiYgKHggPSBvYnNlcnZhYmxlRnJvbVByb21pc2UoeCkpO1xuICAgICAgaW5uZXIuc2V0RGlzcG9zYWJsZSh4LnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihpbm5lciwgdGhpcy5fZ3JvdXAsIHRoaXMuX3N0YXRlKSkpO1xuICAgIH07XG5cbiAgICBNZXJnZURlbGF5RXJyb3JPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fc3RhdGUuZXJyb3JzLnB1c2goZSk7XG4gICAgICB0aGlzLl9zdGF0ZS5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZ3JvdXAubGVuZ3RoID09PSAxICYmIHNldENvbXBsZXRpb24odGhpcy5fc3RhdGUubywgdGhpcy5fc3RhdGUuZXJyb3JzKTtcbiAgICB9O1xuXG4gICAgTWVyZ2VEZWxheUVycm9yT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICB0aGlzLl9ncm91cC5sZW5ndGggPT09IDEgJiYgc2V0Q29tcGxldGlvbih0aGlzLl9zdGF0ZS5vLCB0aGlzLl9zdGF0ZS5lcnJvcnMpO1xuICAgIH07XG5cbiAgICBpbmhlcml0cyhJbm5lck9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIoaW5uZXIsIGdyb3VwLCBzdGF0ZSkge1xuICAgICAgdGhpcy5faW5uZXIgPSBpbm5lcjtcbiAgICAgIHRoaXMuX2dyb3VwID0gZ3JvdXA7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7IHRoaXMuX3N0YXRlLm8ub25OZXh0KHgpOyB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmVycm9ycy5wdXNoKGUpO1xuICAgICAgdGhpcy5fZ3JvdXAucmVtb3ZlKHRoaXMuX2lubmVyKTtcbiAgICAgIHRoaXMuX3N0YXRlLmlzU3RvcHBlZCAmJiB0aGlzLl9ncm91cC5sZW5ndGggPT09IDEgJiYgc2V0Q29tcGxldGlvbih0aGlzLl9zdGF0ZS5vLCB0aGlzLl9zdGF0ZS5lcnJvcnMpO1xuICAgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fZ3JvdXAucmVtb3ZlKHRoaXMuX2lubmVyKTtcbiAgICAgIHRoaXMuX3N0YXRlLmlzU3RvcHBlZCAmJiB0aGlzLl9ncm91cC5sZW5ndGggPT09IDEgJiYgc2V0Q29tcGxldGlvbih0aGlzLl9zdGF0ZS5vLCB0aGlzLl9zdGF0ZS5lcnJvcnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTWVyZ2VEZWxheUVycm9yT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAqIEZsYXR0ZW5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBPYnNlcnZhYmxlcyBpbnRvIG9uZSBPYnNlcnZhYmxlLCBpbiBhIHdheSB0aGF0IGFsbG93cyBhbiBPYnNlcnZlciB0b1xuICAqIHJlY2VpdmUgYWxsIHN1Y2Nlc3NmdWxseSBlbWl0dGVkIGl0ZW1zIGZyb20gYWxsIG9mIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZXMgd2l0aG91dCBiZWluZyBpbnRlcnJ1cHRlZCBieVxuICAqIGFuIGVycm9yIG5vdGlmaWNhdGlvbiBmcm9tIG9uZSBvZiB0aGVtLlxuICAqXG4gICogVGhpcyBiZWhhdmVzIGxpa2UgT2JzZXJ2YWJsZS5wcm90b3R5cGUubWVyZ2VBbGwgZXhjZXB0IHRoYXQgaWYgYW55IG9mIHRoZSBtZXJnZWQgT2JzZXJ2YWJsZXMgbm90aWZ5IG9mIGFuXG4gICogZXJyb3IgdmlhIHRoZSBPYnNlcnZlcidzIG9uRXJyb3IsIG1lcmdlRGVsYXlFcnJvciB3aWxsIHJlZnJhaW4gZnJvbSBwcm9wYWdhdGluZyB0aGF0XG4gICogZXJyb3Igbm90aWZpY2F0aW9uIHVudGlsIGFsbCBvZiB0aGUgbWVyZ2VkIE9ic2VydmFibGVzIGhhdmUgZmluaXNoZWQgZW1pdHRpbmcgaXRlbXMuXG4gICogQHBhcmFtIHtBcnJheSB8IEFyZ3VtZW50c30gYXJncyBBcmd1bWVudHMgb3IgYW4gYXJyYXkgdG8gbWVyZ2UuXG4gICogQHJldHVybnMge09ic2VydmFibGV9IGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBhbGwgb2YgdGhlIGl0ZW1zIGVtaXR0ZWQgYnkgdGhlIE9ic2VydmFibGVzIGVtaXR0ZWQgYnkgdGhlIE9ic2VydmFibGVcbiAgKi9cbiAgT2JzZXJ2YWJsZS5tZXJnZURlbGF5RXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMF0pKSB7XG4gICAgICBhcmdzID0gYXJndW1lbnRzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgfVxuICAgIHZhciBzb3VyY2UgPSBvYnNlcnZhYmxlT2YobnVsbCwgYXJncyk7XG4gICAgcmV0dXJuIG5ldyBNZXJnZURlbGF5RXJyb3JPYnNlcnZhYmxlKHNvdXJjZSk7XG4gIH07XG5cbiAgdmFyIE1lcmdlQWxsT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoTWVyZ2VBbGxPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gTWVyZ2VBbGxPYnNlcnZhYmxlKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBNZXJnZUFsbE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBnID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKSwgbSA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgZy5hZGQobSk7XG4gICAgICBtLnNldERpc3Bvc2FibGUodGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBNZXJnZUFsbE9ic2VydmVyKG9ic2VydmVyLCBnKSkpO1xuICAgICAgcmV0dXJuIGc7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIE1lcmdlQWxsT2JzZXJ2ZXIobywgZykge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMuZyA9IGc7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgfVxuICAgIE1lcmdlQWxsT2JzZXJ2ZXIucHJvdG90eXBlLm9uTmV4dCA9IGZ1bmN0aW9uKGlubmVyU291cmNlKSB7XG4gICAgICBpZih0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgIHZhciBzYWQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIHRoaXMuZy5hZGQoc2FkKTtcblxuICAgICAgaXNQcm9taXNlKGlubmVyU291cmNlKSAmJiAoaW5uZXJTb3VyY2UgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UoaW5uZXJTb3VyY2UpKTtcblxuICAgICAgc2FkLnNldERpc3Bvc2FibGUoaW5uZXJTb3VyY2Uuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKHRoaXMsIHNhZCkpKTtcbiAgICB9O1xuICAgIE1lcmdlQWxsT2JzZXJ2ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vLm9uRXJyb3IoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBNZXJnZUFsbE9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZy5sZW5ndGggPT09IDEgJiYgdGhpcy5vLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBNZXJnZUFsbE9ic2VydmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTsgfTtcbiAgICBNZXJnZUFsbE9ic2VydmVyLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm8ub25FcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihwYXJlbnQsIHNhZCkge1xuICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICB0aGlzLnNhZCA9IHNhZDtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgfVxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uTmV4dCA9IGZ1bmN0aW9uICh4KSB7IGlmICghdGhpcy5pc1N0b3BwZWQpIHsgdGhpcy5wYXJlbnQuby5vbk5leHQoeCk7IH0gfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGFyZW50Lm8ub25FcnJvcihlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBwYXJlbnQuZy5yZW1vdmUodGhpcy5zYWQpO1xuICAgICAgICBwYXJlbnQuZG9uZSAmJiBwYXJlbnQuZy5sZW5ndGggPT09IDEgJiYgcGFyZW50Lm8ub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdGhpcy5pc1N0b3BwZWQgPSB0cnVlOyB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGFyZW50Lm8ub25FcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE1lcmdlQWxsT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAqIE1lcmdlcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIG9mIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBtZXJnZXMgdGhlIGVsZW1lbnRzIG9mIHRoZSBpbm5lciBzZXF1ZW5jZXMuXG4gICovXG4gIG9ic2VydmFibGVQcm90by5tZXJnZUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IE1lcmdlQWxsT2JzZXJ2YWJsZSh0aGlzKTtcbiAgfTtcblxuICB2YXIgU2tpcFVudGlsT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTa2lwVW50aWxPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gU2tpcFVudGlsT2JzZXJ2YWJsZShzb3VyY2UsIG90aGVyKSB7XG4gICAgICB0aGlzLl9zID0gc291cmNlO1xuICAgICAgdGhpcy5fbyA9IGlzUHJvbWlzZShvdGhlcikgPyBvYnNlcnZhYmxlRnJvbVByb21pc2Uob3RoZXIpIDogb3RoZXI7XG4gICAgICB0aGlzLl9vcGVuID0gZmFsc2U7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTa2lwVW50aWxPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24obykge1xuICAgICAgdmFyIGxlZnRTdWJzY3JpcHRpb24gPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIGxlZnRTdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZSh0aGlzLl9zLnN1YnNjcmliZShuZXcgU2tpcFVudGlsU291cmNlT2JzZXJ2ZXIobywgdGhpcykpKTtcblxuICAgICAgaXNQcm9taXNlKHRoaXMuX28pICYmICh0aGlzLl9vID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHRoaXMuX28pKTtcblxuICAgICAgdmFyIHJpZ2h0U3Vic2NyaXB0aW9uID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICByaWdodFN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKHRoaXMuX28uc3Vic2NyaWJlKG5ldyBTa2lwVW50aWxPdGhlck9ic2VydmVyKG8sIHRoaXMsIHJpZ2h0U3Vic2NyaXB0aW9uKSkpO1xuXG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUobGVmdFN1YnNjcmlwdGlvbiwgcmlnaHRTdWJzY3JpcHRpb24pO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2tpcFVudGlsT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBTa2lwVW50aWxTb3VyY2VPYnNlcnZlciA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTa2lwVW50aWxTb3VyY2VPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBTa2lwVW50aWxTb3VyY2VPYnNlcnZlcihvLCBwKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX3AgPSBwO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU2tpcFVudGlsU291cmNlT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fcC5fb3BlbiAmJiB0aGlzLl9vLm9uTmV4dCh4KTtcbiAgICB9O1xuXG4gICAgU2tpcFVudGlsU291cmNlT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGVycik7XG4gICAgfTtcblxuICAgIFNraXBVbnRpbFNvdXJjZU9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3AuX29wZW4gJiYgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2tpcFVudGlsU291cmNlT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIHZhciBTa2lwVW50aWxPdGhlck9ic2VydmVyID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNraXBVbnRpbE90aGVyT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gU2tpcFVudGlsT3RoZXJPYnNlcnZlcihvLCBwLCByKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX3AgPSBwO1xuICAgICAgdGhpcy5fciA9IHI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTa2lwVW50aWxPdGhlck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fcC5fb3BlbiA9IHRydWU7XG4gICAgICB0aGlzLl9yLmRpc3Bvc2UoKTtcbiAgICB9O1xuXG4gICAgU2tpcFVudGlsT3RoZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZXJyKTtcbiAgICB9O1xuXG4gICAgU2tpcFVudGlsT3RoZXJPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9yLmRpc3Bvc2UoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNraXBVbnRpbE90aGVyT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZXMgZnJvbSB0aGUgc291cmNlIG9ic2VydmFibGUgc2VxdWVuY2Ugb25seSBhZnRlciB0aGUgb3RoZXIgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBwcm9kdWNlcyBhIHZhbHVlLlxuICAgKiBAcGFyYW0ge09ic2VydmFibGUgfCBQcm9taXNlfSBvdGhlciBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvciBQcm9taXNlIHRoYXQgdHJpZ2dlcnMgcHJvcGFnYXRpb24gb2YgZWxlbWVudHMgb2YgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgZWxlbWVudHMgb2YgdGhlIHNvdXJjZSBzZXF1ZW5jZSBzdGFydGluZyBmcm9tIHRoZSBwb2ludCB0aGUgb3RoZXIgc2VxdWVuY2UgdHJpZ2dlcmVkIHByb3BhZ2F0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnNraXBVbnRpbCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHJldHVybiBuZXcgU2tpcFVudGlsT2JzZXJ2YWJsZSh0aGlzLCBvdGhlcik7XG4gIH07XG5cbiAgdmFyIFN3aXRjaE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU3dpdGNoT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBTd2l0Y2hPYnNlcnZhYmxlKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTd2l0Y2hPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBpbm5lciA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCksIHMgPSB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IFN3aXRjaE9ic2VydmVyKG8sIGlubmVyKSk7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUocywgaW5uZXIpO1xuICAgIH07XG5cbiAgICBpbmhlcml0cyhTd2l0Y2hPYnNlcnZlciwgQWJzdHJhY3RPYnNlcnZlcik7XG4gICAgZnVuY3Rpb24gU3dpdGNoT2JzZXJ2ZXIobywgaW5uZXIpIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLmlubmVyID0gaW5uZXI7XG4gICAgICB0aGlzLnN0b3BwZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubGF0ZXN0ID0gMDtcbiAgICAgIHRoaXMuaGFzTGF0ZXN0ID0gZmFsc2U7XG4gICAgICBBYnN0cmFjdE9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU3dpdGNoT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoaW5uZXJTb3VyY2UpIHtcbiAgICAgIHZhciBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCksIGlkID0gKyt0aGlzLmxhdGVzdDtcbiAgICAgIHRoaXMuaGFzTGF0ZXN0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5uZXIuc2V0RGlzcG9zYWJsZShkKTtcbiAgICAgIGlzUHJvbWlzZShpbm5lclNvdXJjZSkgJiYgKGlubmVyU291cmNlID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKGlubmVyU291cmNlKSk7XG4gICAgICBkLnNldERpc3Bvc2FibGUoaW5uZXJTb3VyY2Uuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKHRoaXMsIGlkKSkpO1xuICAgIH07XG5cbiAgICBTd2l0Y2hPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIFN3aXRjaE9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgIXRoaXMuaGFzTGF0ZXN0ICYmIHRoaXMuby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICBpbmhlcml0cyhJbm5lck9ic2VydmVyLCBBYnN0cmFjdE9ic2VydmVyKTtcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKHBhcmVudCwgaWQpIHtcbiAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgQWJzdHJhY3RPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMucGFyZW50LmxhdGVzdCA9PT0gdGhpcy5pZCAmJiB0aGlzLnBhcmVudC5vLm9uTmV4dCh4KTtcbiAgICB9O1xuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5wYXJlbnQubGF0ZXN0ID09PSB0aGlzLmlkICYmIHRoaXMucGFyZW50Lm8ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMucGFyZW50LmxhdGVzdCA9PT0gdGhpcy5pZCkge1xuICAgICAgICB0aGlzLnBhcmVudC5oYXNMYXRlc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXJlbnQuaXNTdG9wcGVkICYmIHRoaXMucGFyZW50Lm8ub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFN3aXRjaE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgKiBUcmFuc2Zvcm1zIGFuIG9ic2VydmFibGUgc2VxdWVuY2Ugb2Ygb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHByb2R1Y2luZyB2YWx1ZXMgb25seSBmcm9tIHRoZSBtb3N0IHJlY2VudCBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGF0IGFueSBwb2ludCBpbiB0aW1lIHByb2R1Y2VzIHRoZSBlbGVtZW50cyBvZiB0aGUgbW9zdCByZWNlbnQgaW5uZXIgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGhhcyBiZWVuIHJlY2VpdmVkLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG9bJ3N3aXRjaCddID0gb2JzZXJ2YWJsZVByb3RvLnN3aXRjaExhdGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFN3aXRjaE9ic2VydmFibGUodGhpcyk7XG4gIH07XG5cbiAgdmFyIFRha2VVbnRpbE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGFrZVVudGlsT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIFRha2VVbnRpbE9ic2VydmFibGUoc291cmNlLCBvdGhlcikge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLm90aGVyID0gaXNQcm9taXNlKG90aGVyKSA/IG9ic2VydmFibGVGcm9tUHJvbWlzZShvdGhlcikgOiBvdGhlcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRha2VVbnRpbE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvKSB7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoXG4gICAgICAgIHRoaXMuc291cmNlLnN1YnNjcmliZShvKSxcbiAgICAgICAgdGhpcy5vdGhlci5zdWJzY3JpYmUobmV3IFRha2VVbnRpbE9ic2VydmVyKG8pKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRha2VVbnRpbE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgVGFrZVVudGlsT2JzZXJ2ZXIgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGFrZVVudGlsT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gVGFrZVVudGlsT2JzZXJ2ZXIobykge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUYWtlVW50aWxPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgVGFrZVVudGlsT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGVycik7XG4gICAgfTtcblxuICAgIFRha2VVbnRpbE9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IG5vb3A7XG5cbiAgICByZXR1cm4gVGFrZVVudGlsT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZXMgZnJvbSB0aGUgc291cmNlIG9ic2VydmFibGUgc2VxdWVuY2UgdW50aWwgdGhlIG90aGVyIG9ic2VydmFibGUgc2VxdWVuY2UgcHJvZHVjZXMgYSB2YWx1ZS5cbiAgICogQHBhcmFtIHtPYnNlcnZhYmxlIHwgUHJvbWlzZX0gb3RoZXIgT2JzZXJ2YWJsZSBzZXF1ZW5jZSBvciBQcm9taXNlIHRoYXQgdGVybWluYXRlcyBwcm9wYWdhdGlvbiBvZiBlbGVtZW50cyBvZiB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgc291cmNlIHNlcXVlbmNlIHVwIHRvIHRoZSBwb2ludCB0aGUgb3RoZXIgc2VxdWVuY2UgaW50ZXJydXB0ZWQgZnVydGhlciBwcm9wYWdhdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by50YWtlVW50aWwgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gbmV3IFRha2VVbnRpbE9ic2VydmFibGUodGhpcywgb3RoZXIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZhbHNlRmFjdG9yeSgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGZ1bmN0aW9uIGFyZ3VtZW50c1RvQXJyYXkoKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIHJldHVybiBhcmdzO1xuICB9XG5cbiAgdmFyIFdpdGhMYXRlc3RGcm9tT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhXaXRoTGF0ZXN0RnJvbU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gV2l0aExhdGVzdEZyb21PYnNlcnZhYmxlKHNvdXJjZSwgc291cmNlcywgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuX3MgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9zcyA9IHNvdXJjZXM7XG4gICAgICB0aGlzLl9jYiA9IHJlc3VsdFNlbGVjdG9yO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgV2l0aExhdGVzdEZyb21PYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBsZW4gPSB0aGlzLl9zcy5sZW5ndGg7XG4gICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgIGhhc1ZhbHVlOiBhcnJheUluaXRpYWxpemUobGVuLCBmYWxzZUZhY3RvcnkpLFxuICAgICAgICBoYXNWYWx1ZUFsbDogZmFsc2UsXG4gICAgICAgIHZhbHVlczogbmV3IEFycmF5KGxlbilcbiAgICAgIH07XG5cbiAgICAgIHZhciBuID0gdGhpcy5fc3MubGVuZ3RoLCBzdWJzY3JpcHRpb25zID0gbmV3IEFycmF5KG4gKyAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhciBvdGhlciA9IHRoaXMuX3NzW2ldLCBzYWQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgaXNQcm9taXNlKG90aGVyKSAmJiAob3RoZXIgPSBvYnNlcnZhYmxlRnJvbVByb21pc2Uob3RoZXIpKTtcbiAgICAgICAgc2FkLnNldERpc3Bvc2FibGUob3RoZXIuc3Vic2NyaWJlKG5ldyBXaXRoTGF0ZXN0RnJvbU90aGVyT2JzZXJ2ZXIobywgaSwgc3RhdGUpKSk7XG4gICAgICAgIHN1YnNjcmlwdGlvbnNbaV0gPSBzYWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBzYWQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIHNhZC5zZXREaXNwb3NhYmxlKHRoaXMuX3Muc3Vic2NyaWJlKG5ldyBXaXRoTGF0ZXN0RnJvbVNvdXJjZU9ic2VydmVyKG8sIHRoaXMuX2NiLCBzdGF0ZSkpKTtcbiAgICAgIHN1YnNjcmlwdGlvbnNbbl0gPSBzYWQ7XG5cbiAgICAgIHJldHVybiBuZXcgTkFyeURpc3Bvc2FibGUoc3Vic2NyaXB0aW9ucyk7XG4gICAgfTtcblxuICAgIHJldHVybiBXaXRoTGF0ZXN0RnJvbU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgV2l0aExhdGVzdEZyb21PdGhlck9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhXaXRoTGF0ZXN0RnJvbU90aGVyT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gV2l0aExhdGVzdEZyb21PdGhlck9ic2VydmVyKG8sIGksIHN0YXRlKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX2kgPSBpO1xuICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFdpdGhMYXRlc3RGcm9tT3RoZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9zdGF0ZS52YWx1ZXNbdGhpcy5faV0gPSB4O1xuICAgICAgdGhpcy5fc3RhdGUuaGFzVmFsdWVbdGhpcy5faV0gPSB0cnVlO1xuICAgICAgdGhpcy5fc3RhdGUuaGFzVmFsdWVBbGwgPSB0aGlzLl9zdGF0ZS5oYXNWYWx1ZS5ldmVyeShpZGVudGl0eSk7XG4gICAgfTtcblxuICAgIFdpdGhMYXRlc3RGcm9tT3RoZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBXaXRoTGF0ZXN0RnJvbU90aGVyT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IG5vb3A7XG5cbiAgICByZXR1cm4gV2l0aExhdGVzdEZyb21PdGhlck9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICB2YXIgV2l0aExhdGVzdEZyb21Tb3VyY2VPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoV2l0aExhdGVzdEZyb21Tb3VyY2VPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBXaXRoTGF0ZXN0RnJvbVNvdXJjZU9ic2VydmVyKG8sIGNiLCBzdGF0ZSkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9jYiA9IGNiO1xuICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFdpdGhMYXRlc3RGcm9tU291cmNlT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdmFyIGFsbFZhbHVlcyA9IFt4XS5jb25jYXQodGhpcy5fc3RhdGUudmFsdWVzKTtcbiAgICAgIGlmICghdGhpcy5fc3RhdGUuaGFzVmFsdWVBbGwpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgcmVzID0gdHJ5Q2F0Y2godGhpcy5fY2IpLmFwcGx5KG51bGwsIGFsbFZhbHVlcyk7XG4gICAgICBpZiAocmVzID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5fby5vbkVycm9yKHJlcy5lKTsgfVxuICAgICAgdGhpcy5fby5vbk5leHQocmVzKTtcbiAgICB9O1xuXG4gICAgV2l0aExhdGVzdEZyb21Tb3VyY2VPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBXaXRoTGF0ZXN0RnJvbVNvdXJjZU9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBXaXRoTGF0ZXN0RnJvbVNvdXJjZU9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogTWVyZ2VzIHRoZSBzcGVjaWZpZWQgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBvbmUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBieSB1c2luZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gb25seSB3aGVuIHRoZSAoZmlyc3QpIHNvdXJjZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHByb2R1Y2VzIGFuIGVsZW1lbnQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIHJlc3VsdCBvZiBjb21iaW5pbmcgZWxlbWVudHMgb2YgdGhlIHNvdXJjZXMgdXNpbmcgdGhlIHNwZWNpZmllZCByZXN1bHQgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ud2l0aExhdGVzdEZyb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGFyZ3VtZW50cycpOyB9XG5cbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgdmFyIHJlc3VsdFNlbGVjdG9yID0gaXNGdW5jdGlvbihhcmdzW2xlbiAtIDFdKSA/IGFyZ3MucG9wKCkgOiBhcmd1bWVudHNUb0FycmF5O1xuICAgIEFycmF5LmlzQXJyYXkoYXJnc1swXSkgJiYgKGFyZ3MgPSBhcmdzWzBdKTtcblxuICAgIHJldHVybiBuZXcgV2l0aExhdGVzdEZyb21PYnNlcnZhYmxlKHRoaXMsIGFyZ3MsIHJlc3VsdFNlbGVjdG9yKTtcbiAgfTtcblxuICBmdW5jdGlvbiBmYWxzZUZhY3RvcnkoKSB7IHJldHVybiBmYWxzZTsgfVxuICBmdW5jdGlvbiBlbXB0eUFycmF5RmFjdG9yeSgpIHsgcmV0dXJuIFtdOyB9XG5cbiAgdmFyIFppcE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoWmlwT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBaaXBPYnNlcnZhYmxlKHNvdXJjZXMsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICB0aGlzLl9zID0gc291cmNlcztcbiAgICAgIHRoaXMuX2NiID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBaaXBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24ob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBuID0gdGhpcy5fcy5sZW5ndGgsXG4gICAgICAgICAgc3Vic2NyaXB0aW9ucyA9IG5ldyBBcnJheShuKTtcbiAgICAgICAgICBkb25lID0gYXJyYXlJbml0aWFsaXplKG4sIGZhbHNlRmFjdG9yeSksXG4gICAgICAgICAgcSA9IGFycmF5SW5pdGlhbGl6ZShuLCBlbXB0eUFycmF5RmFjdG9yeSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLl9zW2ldLCBzYWQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uc1tpXSA9IHNhZDtcbiAgICAgICAgaXNQcm9taXNlKHNvdXJjZSkgJiYgKHNvdXJjZSA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShzb3VyY2UpKTtcbiAgICAgICAgc2FkLnNldERpc3Bvc2FibGUoc291cmNlLnN1YnNjcmliZShuZXcgWmlwT2JzZXJ2ZXIob2JzZXJ2ZXIsIGksIHRoaXMsIHEsIGRvbmUpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgTkFyeURpc3Bvc2FibGUoc3Vic2NyaXB0aW9ucyk7XG4gICAgfTtcblxuICAgIHJldHVybiBaaXBPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIFppcE9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhaaXBPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBaaXBPYnNlcnZlcihvLCBpLCBwLCBxLCBkKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX2kgPSBpO1xuICAgICAgdGhpcy5fcCA9IHA7XG4gICAgICB0aGlzLl9xID0gcTtcbiAgICAgIHRoaXMuX2QgPSBkO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm90RW1wdHkoeCkgeyByZXR1cm4geC5sZW5ndGggPiAwOyB9XG4gICAgZnVuY3Rpb24gc2hpZnRFYWNoKHgpIHsgcmV0dXJuIHguc2hpZnQoKTsgfVxuICAgIGZ1bmN0aW9uIG5vdFRoZVNhbWUoaSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh4LCBqKSB7XG4gICAgICAgIHJldHVybiBqICE9PSBpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBaaXBPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9xW3RoaXMuX2ldLnB1c2goeCk7XG4gICAgICBpZiAodGhpcy5fcS5ldmVyeShub3RFbXB0eSkpIHtcbiAgICAgICAgdmFyIHF1ZXVlZFZhbHVlcyA9IHRoaXMuX3EubWFwKHNoaWZ0RWFjaCk7XG4gICAgICAgIHZhciByZXMgPSB0cnlDYXRjaCh0aGlzLl9wLl9jYikuYXBwbHkobnVsbCwgcXVldWVkVmFsdWVzKTtcbiAgICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuX28ub25FcnJvcihyZXMuZSk7IH1cbiAgICAgICAgdGhpcy5fby5vbk5leHQocmVzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZC5maWx0ZXIobm90VGhlU2FtZSh0aGlzLl9pKSkuZXZlcnkoaWRlbnRpdHkpKSB7XG4gICAgICAgIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgWmlwT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgWmlwT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2RbdGhpcy5faV0gPSB0cnVlO1xuICAgICAgdGhpcy5fZC5ldmVyeShpZGVudGl0eSkgJiYgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gWmlwT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiBNZXJnZXMgdGhlIHNwZWNpZmllZCBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIG9uZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGJ5IHVzaW5nIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB3aGVuZXZlciBhbGwgb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2VzIG9yIGFuIGFycmF5IGhhdmUgcHJvZHVjZWQgYW4gZWxlbWVudCBhdCBhIGNvcnJlc3BvbmRpbmcgaW5kZXguXG4gICAqIFRoZSBsYXN0IGVsZW1lbnQgaW4gdGhlIGFyZ3VtZW50cyBtdXN0IGJlIGEgZnVuY3Rpb24gdG8gaW52b2tlIGZvciBlYWNoIHNlcmllcyBvZiBlbGVtZW50cyBhdCBjb3JyZXNwb25kaW5nIGluZGV4ZXMgaW4gdGhlIGFyZ3MuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIHJlc3VsdCBvZiBjb21iaW5pbmcgZWxlbWVudHMgb2YgdGhlIGFyZ3MgdXNpbmcgdGhlIHNwZWNpZmllZCByZXN1bHQgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uemlwID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBhcmd1bWVudHMnKTsgfVxuXG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIHZhciByZXN1bHRTZWxlY3RvciA9IGlzRnVuY3Rpb24oYXJnc1tsZW4gLSAxXSkgPyBhcmdzLnBvcCgpIDogYXJndW1lbnRzVG9BcnJheTtcbiAgICBBcnJheS5pc0FycmF5KGFyZ3NbMF0pICYmIChhcmdzID0gYXJnc1swXSk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcztcbiAgICBhcmdzLnVuc2hpZnQocGFyZW50KTtcblxuICAgIHJldHVybiBuZXcgWmlwT2JzZXJ2YWJsZShhcmdzLCByZXN1bHRTZWxlY3Rvcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1lcmdlcyB0aGUgc3BlY2lmaWVkIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gb25lIG9ic2VydmFibGUgc2VxdWVuY2UgYnkgdXNpbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHdoZW5ldmVyIGFsbCBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaGF2ZSBwcm9kdWNlZCBhbiBlbGVtZW50IGF0IGEgY29ycmVzcG9uZGluZyBpbmRleC5cbiAgICogQHBhcmFtIGFyZ3VtZW50cyBPYnNlcnZhYmxlIHNvdXJjZXMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc3VsdFNlbGVjdG9yIEZ1bmN0aW9uIHRvIGludm9rZSBmb3IgZWFjaCBzZXJpZXMgb2YgZWxlbWVudHMgYXQgY29ycmVzcG9uZGluZyBpbmRleGVzIGluIHRoZSBzb3VyY2VzLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSByZXN1bHQgb2YgY29tYmluaW5nIGVsZW1lbnRzIG9mIHRoZSBzb3VyY2VzIHVzaW5nIHRoZSBzcGVjaWZpZWQgcmVzdWx0IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAgKi9cbiAgT2JzZXJ2YWJsZS56aXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBhcmdzID0gaXNGdW5jdGlvbihhcmdzWzFdKSA/IGFyZ3NbMF0uY29uY2F0KGFyZ3NbMV0pIDogYXJnc1swXTtcbiAgICB9XG4gICAgdmFyIGZpcnN0ID0gYXJncy5zaGlmdCgpO1xuICAgIHJldHVybiBmaXJzdC56aXAuYXBwbHkoZmlyc3QsIGFyZ3MpO1xuICB9O1xuXG5mdW5jdGlvbiBmYWxzZUZhY3RvcnkoKSB7IHJldHVybiBmYWxzZTsgfVxuZnVuY3Rpb24gZW1wdHlBcnJheUZhY3RvcnkoKSB7IHJldHVybiBbXTsgfVxuZnVuY3Rpb24gYXJndW1lbnRzVG9BcnJheSgpIHtcbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgcmV0dXJuIGFyZ3M7XG59XG5cbi8qKlxuICogTWVyZ2VzIHRoZSBzcGVjaWZpZWQgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBvbmUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBieSB1c2luZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gd2hlbmV2ZXIgYWxsIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlcyBvciBhbiBhcnJheSBoYXZlIHByb2R1Y2VkIGFuIGVsZW1lbnQgYXQgYSBjb3JyZXNwb25kaW5nIGluZGV4LlxuICogVGhlIGxhc3QgZWxlbWVudCBpbiB0aGUgYXJndW1lbnRzIG11c3QgYmUgYSBmdW5jdGlvbiB0byBpbnZva2UgZm9yIGVhY2ggc2VyaWVzIG9mIGVsZW1lbnRzIGF0IGNvcnJlc3BvbmRpbmcgaW5kZXhlcyBpbiB0aGUgYXJncy5cbiAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIHJlc3VsdCBvZiBjb21iaW5pbmcgZWxlbWVudHMgb2YgdGhlIGFyZ3MgdXNpbmcgdGhlIHNwZWNpZmllZCByZXN1bHQgc2VsZWN0b3IgZnVuY3Rpb24uXG4gKi9cbm9ic2VydmFibGVQcm90by56aXBJdGVyYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGFyZ3VtZW50cycpOyB9XG5cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgdmFyIHJlc3VsdFNlbGVjdG9yID0gaXNGdW5jdGlvbihhcmdzW2xlbiAtIDFdKSA/IGFyZ3MucG9wKCkgOiBhcmd1bWVudHNUb0FycmF5O1xuXG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuICBhcmdzLnVuc2hpZnQocGFyZW50KTtcbiAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgdmFyIG4gPSBhcmdzLmxlbmd0aCxcbiAgICAgIHF1ZXVlcyA9IGFycmF5SW5pdGlhbGl6ZShuLCBlbXB0eUFycmF5RmFjdG9yeSksXG4gICAgICBpc0RvbmUgPSBhcnJheUluaXRpYWxpemUobiwgZmFsc2VGYWN0b3J5KTtcblxuICAgIHZhciBzdWJzY3JpcHRpb25zID0gbmV3IEFycmF5KG4pO1xuICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IG47IGlkeCsrKSB7XG4gICAgICAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3NbaV0sIHNhZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuXG4gICAgICAgIChpc0FycmF5TGlrZShzb3VyY2UpIHx8IGlzSXRlcmFibGUoc291cmNlKSkgJiYgKHNvdXJjZSA9IG9ic2VydmFibGVGcm9tKHNvdXJjZSkpO1xuXG4gICAgICAgIHNhZC5zZXREaXNwb3NhYmxlKHNvdXJjZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICBxdWV1ZXNbaV0ucHVzaCh4KTtcbiAgICAgICAgICBpZiAocXVldWVzLmV2ZXJ5KGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lmxlbmd0aCA+IDA7IH0pKSB7XG4gICAgICAgICAgICB2YXIgcXVldWVkVmFsdWVzID0gcXVldWVzLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5zaGlmdCgpOyB9KSxcbiAgICAgICAgICAgICAgICByZXMgPSB0cnlDYXRjaChyZXN1bHRTZWxlY3RvcikuYXBwbHkocGFyZW50LCBxdWV1ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihyZXMuZSk7IH1cbiAgICAgICAgICAgIG8ub25OZXh0KHJlcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0RvbmUuZmlsdGVyKGZ1bmN0aW9uICh4LCBqKSB7IHJldHVybiBqICE9PSBpOyB9KS5ldmVyeShpZGVudGl0eSkpIHtcbiAgICAgICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7IG8ub25FcnJvcihlKTsgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlzRG9uZVtpXSA9IHRydWU7XG4gICAgICAgICAgaXNEb25lLmV2ZXJ5KGlkZW50aXR5KSAmJiBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uc1tpXSA9IHNhZDtcbiAgICAgIH0pKGlkeCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKHN1YnNjcmlwdGlvbnMpO1xuICB9LCBwYXJlbnQpO1xufTtcblxuICBmdW5jdGlvbiBhc09ic2VydmFibGUoc291cmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHN1YnNjcmliZShvKSB7IHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG8pOyB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBIaWRlcyB0aGUgaWRlbnRpdHkgb2YgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBoaWRlcyB0aGUgaWRlbnRpdHkgb2YgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5hc09ic2VydmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGFzT2JzZXJ2YWJsZSh0aGlzKSwgdGhpcyk7XG4gIH07XG5cbiAgdmFyIERlbWF0ZXJpYWxpemVPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhEZW1hdGVyaWFsaXplT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBEZW1hdGVyaWFsaXplT2JzZXJ2YWJsZShzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRGVtYXRlcmlhbGl6ZU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgRGVtYXRlcmlhbGl6ZU9ic2VydmVyKG8pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERlbWF0ZXJpYWxpemVPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIERlbWF0ZXJpYWxpemVPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRGVtYXRlcmlhbGl6ZU9ic2VydmVyLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gRGVtYXRlcmlhbGl6ZU9ic2VydmVyKG8pIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRGVtYXRlcmlhbGl6ZU9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHsgeC5hY2NlcHQodGhpcy5fbyk7IH07XG4gICAgRGVtYXRlcmlhbGl6ZU9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7IHRoaXMuX28ub25FcnJvcihlKTsgfTtcbiAgICBEZW1hdGVyaWFsaXplT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fby5vbkNvbXBsZXRlZCgpOyB9O1xuXG4gICAgcmV0dXJuIERlbWF0ZXJpYWxpemVPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqIERlbWF0ZXJpYWxpemVzIHRoZSBleHBsaWNpdCBub3RpZmljYXRpb24gdmFsdWVzIG9mIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgYXMgaW1wbGljaXQgbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgZXhoaWJpdGluZyB0aGUgYmVoYXZpb3IgY29ycmVzcG9uZGluZyB0byB0aGUgc291cmNlIHNlcXVlbmNlJ3Mgbm90aWZpY2F0aW9uIHZhbHVlcy5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5kZW1hdGVyaWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgRGVtYXRlcmlhbGl6ZU9ic2VydmFibGUodGhpcyk7XG4gIH07XG5cbiAgdmFyIERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZhYmxlKHNvdXJjZSwga2V5Rm4sIGNvbXBhcmVyKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMua2V5Rm4gPSBrZXlGbjtcbiAgICAgIHRoaXMuY29tcGFyZXIgPSBjb21wYXJlcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmVyKG8sIHRoaXMua2V5Rm4sIHRoaXMuY29tcGFyZXIpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmVyID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZlcihvLCBrZXlGbiwgY29tcGFyZXIpIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLmtleUZuID0ga2V5Rm47XG4gICAgICB0aGlzLmNvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgICB0aGlzLmhhc0N1cnJlbnRLZXkgPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VycmVudEtleSA9IG51bGw7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHZhciBrZXkgPSB4LCBjb21wYXJlckVxdWFscztcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMua2V5Rm4pKSB7XG4gICAgICAgIGtleSA9IHRyeUNhdGNoKHRoaXMua2V5Rm4pKHgpO1xuICAgICAgICBpZiAoa2V5ID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5vLm9uRXJyb3Ioa2V5LmUpOyB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5oYXNDdXJyZW50S2V5KSB7XG4gICAgICAgIGNvbXBhcmVyRXF1YWxzID0gdHJ5Q2F0Y2godGhpcy5jb21wYXJlcikodGhpcy5jdXJyZW50S2V5LCBrZXkpO1xuICAgICAgICBpZiAoY29tcGFyZXJFcXVhbHMgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLm8ub25FcnJvcihjb21wYXJlckVxdWFscy5lKTsgfVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmhhc0N1cnJlbnRLZXkgfHwgIWNvbXBhcmVyRXF1YWxzKSB7XG4gICAgICAgIHRoaXMuaGFzQ3VycmVudEtleSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudEtleSA9IGtleTtcbiAgICAgICAgdGhpcy5vLm9uTmV4dCh4KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5vLm9uRXJyb3IoZSk7XG4gICAgfTtcbiAgICBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm8ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAqICBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyBvbmx5IGRpc3RpbmN0IGNvbnRpZ3VvdXMgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZSBrZXlGbiBhbmQgdGhlIGNvbXBhcmVyLlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IFtrZXlGbl0gQSBmdW5jdGlvbiB0byBjb21wdXRlIHRoZSBjb21wYXJpc29uIGtleSBmb3IgZWFjaCBlbGVtZW50LiBJZiBub3QgcHJvdmlkZWQsIGl0IHByb2plY3RzIHRoZSB2YWx1ZS5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyZXJdIEVxdWFsaXR5IGNvbXBhcmVyIGZvciBjb21wdXRlZCBrZXkgdmFsdWVzLiBJZiBub3QgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIGFuIGVxdWFsaXR5IGNvbXBhcmVyIGZ1bmN0aW9uLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIG9ubHkgY29udGFpbmluZyB0aGUgZGlzdGluY3QgY29udGlndW91cyBlbGVtZW50cywgYmFzZWQgb24gYSBjb21wdXRlZCBrZXkgdmFsdWUsIGZyb20gdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmRpc3RpbmN0VW50aWxDaGFuZ2VkID0gZnVuY3Rpb24gKGtleUZuLCBjb21wYXJlcikge1xuICAgIGNvbXBhcmVyIHx8IChjb21wYXJlciA9IGRlZmF1bHRDb21wYXJlcik7XG4gICAgcmV0dXJuIG5ldyBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmFibGUodGhpcywga2V5Rm4sIGNvbXBhcmVyKTtcbiAgfTtcblxuICB2YXIgVGFwT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUYXBPYnNlcnZhYmxlLF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gVGFwT2JzZXJ2YWJsZShzb3VyY2UsIG9ic2VydmVyT3JPbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX29OID0gb2JzZXJ2ZXJPck9uTmV4dDtcbiAgICAgIHRoaXMuX29FID0gb25FcnJvcjtcbiAgICAgIHRoaXMuX29DID0gb25Db21wbGV0ZWQ7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUYXBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24obykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihvLCB0aGlzKSk7XG4gICAgfTtcblxuICAgIGluaGVyaXRzKElubmVyT2JzZXJ2ZXIsIEFic3RyYWN0T2JzZXJ2ZXIpO1xuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIobywgcCkge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMudCA9ICFwLl9vTiB8fCBpc0Z1bmN0aW9uKHAuX29OKSA/XG4gICAgICAgIG9ic2VydmVyQ3JlYXRlKHAuX29OIHx8IG5vb3AsIHAuX29FIHx8IG5vb3AsIHAuX29DIHx8IG5vb3ApIDpcbiAgICAgICAgcC5fb047XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgQWJzdHJhY3RPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoKHRoaXMudC5vbk5leHQpLmNhbGwodGhpcy50LCB4KTtcbiAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7IHRoaXMuby5vbkVycm9yKHJlcy5lKTsgfVxuICAgICAgdGhpcy5vLm9uTmV4dCh4KTtcbiAgICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICB2YXIgcmVzID0gdHJ5Q2F0Y2godGhpcy50Lm9uRXJyb3IpLmNhbGwodGhpcy50LCBlcnIpO1xuICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuby5vbkVycm9yKHJlcy5lKTsgfVxuICAgICAgdGhpcy5vLm9uRXJyb3IoZXJyKTtcbiAgICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoKHRoaXMudC5vbkNvbXBsZXRlZCkuY2FsbCh0aGlzLnQpO1xuICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuby5vbkVycm9yKHJlcy5lKTsgfVxuICAgICAgdGhpcy5vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBUYXBPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICogIEludm9rZXMgYW4gYWN0aW9uIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIG9ic2VydmFibGUgc2VxdWVuY2UgYW5kIGludm9rZXMgYW4gYWN0aW9uIHVwb24gZ3JhY2VmdWwgb3IgZXhjZXB0aW9uYWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIGZvciBkZWJ1Z2dpbmcsIGxvZ2dpbmcsIGV0Yy4gb2YgcXVlcnkgYmVoYXZpb3IgYnkgaW50ZXJjZXB0aW5nIHRoZSBtZXNzYWdlIHN0cmVhbSB0byBydW4gYXJiaXRyYXJ5IGFjdGlvbnMgZm9yIG1lc3NhZ2VzIG9uIHRoZSBwaXBlbGluZS5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9uIHwgT2JzZXJ2ZXJ9IG9ic2VydmVyT3JPbk5leHQgQWN0aW9uIHRvIGludm9rZSBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIG9yIGFuIG8uXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRXJyb3JdICBBY3Rpb24gdG8gaW52b2tlIHVwb24gZXhjZXB0aW9uYWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuIFVzZWQgaWYgb25seSB0aGUgb2JzZXJ2ZXJPck9uTmV4dCBwYXJhbWV0ZXIgaXMgYWxzbyBhIGZ1bmN0aW9uLlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkNvbXBsZXRlZF0gIEFjdGlvbiB0byBpbnZva2UgdXBvbiBncmFjZWZ1bCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS4gVXNlZCBpZiBvbmx5IHRoZSBvYnNlcnZlck9yT25OZXh0IHBhcmFtZXRlciBpcyBhbHNvIGEgZnVuY3Rpb24uXG4gICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBzb3VyY2Ugc2VxdWVuY2Ugd2l0aCB0aGUgc2lkZS1lZmZlY3RpbmcgYmVoYXZpb3IgYXBwbGllZC5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvWydkbyddID0gb2JzZXJ2YWJsZVByb3RvLnRhcCA9IG9ic2VydmFibGVQcm90by5kb0FjdGlvbiA9IGZ1bmN0aW9uIChvYnNlcnZlck9yT25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCkge1xuICAgIHJldHVybiBuZXcgVGFwT2JzZXJ2YWJsZSh0aGlzLCBvYnNlcnZlck9yT25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCk7XG4gIH07XG5cbiAgLyoqXG4gICogIEludm9rZXMgYW4gYWN0aW9uIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIGZvciBkZWJ1Z2dpbmcsIGxvZ2dpbmcsIGV0Yy4gb2YgcXVlcnkgYmVoYXZpb3IgYnkgaW50ZXJjZXB0aW5nIHRoZSBtZXNzYWdlIHN0cmVhbSB0byBydW4gYXJiaXRyYXJ5IGFjdGlvbnMgZm9yIG1lc3NhZ2VzIG9uIHRoZSBwaXBlbGluZS5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbk5leHQgQWN0aW9uIHRvIGludm9rZSBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gT2JqZWN0IHRvIHVzZSBhcyB0aGlzIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgc291cmNlIHNlcXVlbmNlIHdpdGggdGhlIHNpZGUtZWZmZWN0aW5nIGJlaGF2aW9yIGFwcGxpZWQuXG4gICovXG4gIG9ic2VydmFibGVQcm90by5kb09uTmV4dCA9IG9ic2VydmFibGVQcm90by50YXBPbk5leHQgPSBmdW5jdGlvbiAob25OZXh0LCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIHRoaXMudGFwKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uICh4KSB7IG9uTmV4dC5jYWxsKHRoaXNBcmcsIHgpOyB9IDogb25OZXh0KTtcbiAgfTtcblxuICAvKipcbiAgKiAgSW52b2tlcyBhbiBhY3Rpb24gdXBvbiBleGNlcHRpb25hbCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiAgVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgZm9yIGRlYnVnZ2luZywgbG9nZ2luZywgZXRjLiBvZiBxdWVyeSBiZWhhdmlvciBieSBpbnRlcmNlcHRpbmcgdGhlIG1lc3NhZ2Ugc3RyZWFtIHRvIHJ1biBhcmJpdHJhcnkgYWN0aW9ucyBmb3IgbWVzc2FnZXMgb24gdGhlIHBpcGVsaW5lLlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uRXJyb3IgQWN0aW9uIHRvIGludm9rZSB1cG9uIGV4Y2VwdGlvbmFsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gT2JqZWN0IHRvIHVzZSBhcyB0aGlzIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgc291cmNlIHNlcXVlbmNlIHdpdGggdGhlIHNpZGUtZWZmZWN0aW5nIGJlaGF2aW9yIGFwcGxpZWQuXG4gICovXG4gIG9ic2VydmFibGVQcm90by5kb09uRXJyb3IgPSBvYnNlcnZhYmxlUHJvdG8udGFwT25FcnJvciA9IGZ1bmN0aW9uIChvbkVycm9yLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIHRoaXMudGFwKG5vb3AsIHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uIChlKSB7IG9uRXJyb3IuY2FsbCh0aGlzQXJnLCBlKTsgfSA6IG9uRXJyb3IpO1xuICB9O1xuXG4gIC8qKlxuICAqICBJbnZva2VzIGFuIGFjdGlvbiB1cG9uIGdyYWNlZnVsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqICBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCBmb3IgZGVidWdnaW5nLCBsb2dnaW5nLCBldGMuIG9mIHF1ZXJ5IGJlaGF2aW9yIGJ5IGludGVyY2VwdGluZyB0aGUgbWVzc2FnZSBzdHJlYW0gdG8gcnVuIGFyYml0cmFyeSBhY3Rpb25zIGZvciBtZXNzYWdlcyBvbiB0aGUgcGlwZWxpbmUuXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZWQgQWN0aW9uIHRvIGludm9rZSB1cG9uIGdyYWNlZnVsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gT2JqZWN0IHRvIHVzZSBhcyB0aGlzIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgc291cmNlIHNlcXVlbmNlIHdpdGggdGhlIHNpZGUtZWZmZWN0aW5nIGJlaGF2aW9yIGFwcGxpZWQuXG4gICovXG4gIG9ic2VydmFibGVQcm90by5kb09uQ29tcGxldGVkID0gb2JzZXJ2YWJsZVByb3RvLnRhcE9uQ29tcGxldGVkID0gZnVuY3Rpb24gKG9uQ29tcGxldGVkLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIHRoaXMudGFwKG5vb3AsIG51bGwsIHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uICgpIHsgb25Db21wbGV0ZWQuY2FsbCh0aGlzQXJnKTsgfSA6IG9uQ29tcGxldGVkKTtcbiAgfTtcblxuICAvKipcbiAgICogIEludm9rZXMgYSBzcGVjaWZpZWQgYWN0aW9uIGFmdGVyIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0ZXJtaW5hdGVzIGdyYWNlZnVsbHkgb3IgZXhjZXB0aW9uYWxseS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZmluYWxseUFjdGlvbiBBY3Rpb24gdG8gaW52b2tlIGFmdGVyIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0ZXJtaW5hdGVzLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gU291cmNlIHNlcXVlbmNlIHdpdGggdGhlIGFjdGlvbi1pbnZva2luZyB0ZXJtaW5hdGlvbiBiZWhhdmlvciBhcHBsaWVkLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvWydmaW5hbGx5J10gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRyeUNhdGNoKHNvdXJjZS5zdWJzY3JpYmUpLmNhbGwoc291cmNlLCBvYnNlcnZlcik7XG4gICAgICBpZiAoc3Vic2NyaXB0aW9uID09PSBlcnJvck9iaikge1xuICAgICAgICBhY3Rpb24oKTtcbiAgICAgICAgcmV0dXJuIHRocm93ZXIoc3Vic2NyaXB0aW9uLmUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRpc3Bvc2FibGVDcmVhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IHRyeUNhdGNoKHN1YnNjcmlwdGlvbi5kaXNwb3NlKS5jYWxsKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIGFjdGlvbigpO1xuICAgICAgICByID09PSBlcnJvck9iaiAmJiB0aHJvd2VyKHIuZSk7XG4gICAgICB9KTtcbiAgICB9LCB0aGlzKTtcbiAgfTtcblxuICB2YXIgSWdub3JlRWxlbWVudHNPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKElnbm9yZUVsZW1lbnRzT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIElnbm9yZUVsZW1lbnRzT2JzZXJ2YWJsZShzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgSWdub3JlRWxlbWVudHNPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIobykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKG8pIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbk5leHQgPSBub29wO1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZighdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm8ub25FcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZighdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm8ub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdGhpcy5pc1N0b3BwZWQgPSB0cnVlOyB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25FcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIElnbm9yZUVsZW1lbnRzT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAgKiAgSWdub3JlcyBhbGwgZWxlbWVudHMgaW4gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBsZWF2aW5nIG9ubHkgdGhlIHRlcm1pbmF0aW9uIG1lc3NhZ2VzLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gZW1wdHkgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHNpZ25hbHMgdGVybWluYXRpb24sIHN1Y2Nlc3NmdWwgb3IgZXhjZXB0aW9uYWwsIG9mIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uaWdub3JlRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBJZ25vcmVFbGVtZW50c09ic2VydmFibGUodGhpcyk7XG4gIH07XG5cbiAgdmFyIE1hdGVyaWFsaXplT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoTWF0ZXJpYWxpemVPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIE1hdGVyaWFsaXplT2JzZXJ2YWJsZShzb3VyY2UsIGZuKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIE1hdGVyaWFsaXplT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBNYXRlcmlhbGl6ZU9ic2VydmVyKG8pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE1hdGVyaWFsaXplT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBNYXRlcmlhbGl6ZU9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhNYXRlcmlhbGl6ZU9ic2VydmVyLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gTWF0ZXJpYWxpemVPYnNlcnZlcihvKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIE1hdGVyaWFsaXplT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkgeyB0aGlzLl9vLm9uTmV4dChub3RpZmljYXRpb25DcmVhdGVPbk5leHQoeCkpIH07XG4gICAgTWF0ZXJpYWxpemVPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkgeyB0aGlzLl9vLm9uTmV4dChub3RpZmljYXRpb25DcmVhdGVPbkVycm9yKGUpKTsgdGhpcy5fby5vbkNvbXBsZXRlZCgpOyB9O1xuICAgIE1hdGVyaWFsaXplT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fby5vbk5leHQobm90aWZpY2F0aW9uQ3JlYXRlT25Db21wbGV0ZWQoKSk7IHRoaXMuX28ub25Db21wbGV0ZWQoKTsgfTtcblxuICAgIHJldHVybiBNYXRlcmlhbGl6ZU9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogIE1hdGVyaWFsaXplcyB0aGUgaW1wbGljaXQgbm90aWZpY2F0aW9ucyBvZiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGFzIGV4cGxpY2l0IG5vdGlmaWNhdGlvbiB2YWx1ZXMuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIG1hdGVyaWFsaXplZCBub3RpZmljYXRpb24gdmFsdWVzIGZyb20gdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5tYXRlcmlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IE1hdGVyaWFsaXplT2JzZXJ2YWJsZSh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogIFJlcGVhdHMgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIHRpbWVzLiBJZiB0aGUgcmVwZWF0IGNvdW50IGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBzZXF1ZW5jZSByZXBlYXRzIGluZGVmaW5pdGVseS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtyZXBlYXRDb3VudF0gIE51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIHNlcXVlbmNlLiBJZiBub3QgcHJvdmlkZWQsIHJlcGVhdHMgdGhlIHNlcXVlbmNlIGluZGVmaW5pdGVseS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHByb2R1Y2luZyB0aGUgZWxlbWVudHMgb2YgdGhlIGdpdmVuIHNlcXVlbmNlIHJlcGVhdGVkbHkuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucmVwZWF0ID0gZnVuY3Rpb24gKHJlcGVhdENvdW50KSB7XG4gICAgcmV0dXJuIGVudW1lcmFibGVSZXBlYXQodGhpcywgcmVwZWF0Q291bnQpLmNvbmNhdCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAgUmVwZWF0cyB0aGUgc291cmNlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgdGltZXMgb3IgdW50aWwgaXQgc3VjY2Vzc2Z1bGx5IHRlcm1pbmF0ZXMuIElmIHRoZSByZXRyeSBjb3VudCBpcyBub3Qgc3BlY2lmaWVkLCBpdCByZXRyaWVzIGluZGVmaW5pdGVseS5cbiAgICogIE5vdGUgaWYgeW91IGVuY291bnRlciBhbiBlcnJvciBhbmQgd2FudCBpdCB0byByZXRyeSBvbmNlLCB0aGVuIHlvdSBtdXN0IHVzZSAucmV0cnkoMik7XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICB2YXIgcmVzID0gcmV0cmllZCA9IHJldHJ5LnJlcGVhdCgpO1xuICAgKiAgdmFyIHJlcyA9IHJldHJpZWQgPSByZXRyeS5yZXBlYXQoMik7XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbcmV0cnlDb3VudF0gIE51bWJlciBvZiB0aW1lcyB0byByZXRyeSB0aGUgc2VxdWVuY2UuIElmIG5vdCBwcm92aWRlZCwgcmV0cnkgdGhlIHNlcXVlbmNlIGluZGVmaW5pdGVseS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgcHJvZHVjaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gc2VxdWVuY2UgcmVwZWF0ZWRseSB1bnRpbCBpdCB0ZXJtaW5hdGVzIHN1Y2Nlc3NmdWxseS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5yZXRyeSA9IGZ1bmN0aW9uIChyZXRyeUNvdW50KSB7XG4gICAgcmV0dXJuIGVudW1lcmFibGVSZXBlYXQodGhpcywgcmV0cnlDb3VudCkuY2F0Y2hFcnJvcigpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAgUmVwZWF0cyB0aGUgc291cmNlIG9ic2VydmFibGUgc2VxdWVuY2UgdXBvbiBlcnJvciBlYWNoIHRpbWUgdGhlIG5vdGlmaWVyIGVtaXRzIG9yIHVudGlsIGl0IHN1Y2Nlc3NmdWxseSB0ZXJtaW5hdGVzLiBcbiAgICogIGlmIHRoZSBub3RpZmllciBjb21wbGV0ZXMsIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbXBsZXRlcy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogIHZhciB0aW1lciA9IE9ic2VydmFibGUudGltZXIoNTAwKTtcbiAgICogIHZhciBzb3VyY2UgPSBvYnNlcnZhYmxlLnJldHJ5V2hlbih0aW1lcik7XG4gICAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gW25vdGlmaWVyXSBBbiBvYnNlcnZhYmxlIHRoYXQgdHJpZ2dlcnMgdGhlIHJldHJpZXMgb3IgY29tcGxldGVzIHRoZSBvYnNlcnZhYmxlIHdpdGggb25OZXh0IG9yIG9uQ29tcGxldGVkIHJlc3BlY3RpdmVseS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgcHJvZHVjaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gc2VxdWVuY2UgcmVwZWF0ZWRseSB1bnRpbCBpdCB0ZXJtaW5hdGVzIHN1Y2Nlc3NmdWxseS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5yZXRyeVdoZW4gPSBmdW5jdGlvbiAobm90aWZpZXIpIHtcbiAgICByZXR1cm4gZW51bWVyYWJsZVJlcGVhdCh0aGlzKS5jYXRjaEVycm9yV2hlbihub3RpZmllcik7XG4gIH07XG4gIHZhciBTY2FuT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTY2FuT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBTY2FuT2JzZXJ2YWJsZShzb3VyY2UsIGFjY3VtdWxhdG9yLCBoYXNTZWVkLCBzZWVkKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuYWNjdW11bGF0b3IgPSBhY2N1bXVsYXRvcjtcbiAgICAgIHRoaXMuaGFzU2VlZCA9IGhhc1NlZWQ7XG4gICAgICB0aGlzLnNlZWQgPSBzZWVkO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU2Nhbk9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBTY2FuT2JzZXJ2ZXIobyx0aGlzKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBTY2FuT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBTY2FuT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNjYW5PYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBTY2FuT2JzZXJ2ZXIobywgcGFyZW50KSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX3AgPSBwYXJlbnQ7XG4gICAgICB0aGlzLl9mbiA9IHBhcmVudC5hY2N1bXVsYXRvcjtcbiAgICAgIHRoaXMuX2hzID0gcGFyZW50Lmhhc1NlZWQ7XG4gICAgICB0aGlzLl9zID0gcGFyZW50LnNlZWQ7XG4gICAgICB0aGlzLl9oYSA9IGZhbHNlO1xuICAgICAgdGhpcy5fYSA9IG51bGw7XG4gICAgICB0aGlzLl9odiA9IGZhbHNlO1xuICAgICAgdGhpcy5faSA9IDA7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTY2FuT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgIXRoaXMuX2h2ICYmICh0aGlzLl9odiA9IHRydWUpO1xuICAgICAgaWYgKHRoaXMuX2hhKSB7XG4gICAgICAgIHRoaXMuX2EgPSB0cnlDYXRjaCh0aGlzLl9mbikodGhpcy5fYSwgeCwgdGhpcy5faSwgdGhpcy5fcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hID0gdGhpcy5faHMgPyB0cnlDYXRjaCh0aGlzLl9mbikodGhpcy5fcywgeCwgdGhpcy5faSwgdGhpcy5fcCkgOiB4O1xuICAgICAgICB0aGlzLl9oYSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fYSA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuX28ub25FcnJvcih0aGlzLl9hLmUpOyB9XG4gICAgICB0aGlzLl9vLm9uTmV4dCh0aGlzLl9hKTtcbiAgICAgIHRoaXMuX2krKztcbiAgICB9O1xuXG4gICAgU2Nhbk9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIFNjYW5PYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgIXRoaXMuX2h2ICYmIHRoaXMuX2hzICYmIHRoaXMuX28ub25OZXh0KHRoaXMuX3MpO1xuICAgICAgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2Nhbk9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgKiAgQXBwbGllcyBhbiBhY2N1bXVsYXRvciBmdW5jdGlvbiBvdmVyIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgYW5kIHJldHVybnMgZWFjaCBpbnRlcm1lZGlhdGUgcmVzdWx0LiBUaGUgb3B0aW9uYWwgc2VlZCB2YWx1ZSBpcyB1c2VkIGFzIHRoZSBpbml0aWFsIGFjY3VtdWxhdG9yIHZhbHVlLlxuICAqICBGb3IgYWdncmVnYXRpb24gYmVoYXZpb3Igd2l0aCBubyBpbnRlcm1lZGlhdGUgcmVzdWx0cywgc2VlIE9ic2VydmFibGUuYWdncmVnYXRlLlxuICAqIEBwYXJhbSB7TWl4ZWR9IFtzZWVkXSBUaGUgaW5pdGlhbCBhY2N1bXVsYXRvciB2YWx1ZS5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY2N1bXVsYXRvciBBbiBhY2N1bXVsYXRvciBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uIGVhY2ggZWxlbWVudC5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZXMuXG4gICovXG4gIG9ic2VydmFibGVQcm90by5zY2FuID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYXNTZWVkID0gZmFsc2UsIHNlZWQsIGFjY3VtdWxhdG9yID0gYXJndW1lbnRzWzBdO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICBoYXNTZWVkID0gdHJ1ZTtcbiAgICAgIHNlZWQgPSBhcmd1bWVudHNbMV07XG4gICAgfVxuICAgIHJldHVybiBuZXcgU2Nhbk9ic2VydmFibGUodGhpcywgYWNjdW11bGF0b3IsIGhhc1NlZWQsIHNlZWQpO1xuICB9O1xuXG4gIHZhciBTa2lwTGFzdE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNraXBMYXN0T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBTa2lwTGFzdE9ic2VydmFibGUoc291cmNlLCBjKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX2MgPSBjO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU2tpcExhc3RPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IFNraXBMYXN0T2JzZXJ2ZXIobywgdGhpcy5fYykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2tpcExhc3RPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIFNraXBMYXN0T2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNraXBMYXN0T2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gU2tpcExhc3RPYnNlcnZlcihvLCBjKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX2MgPSBjO1xuICAgICAgdGhpcy5fcSA9IFtdO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU2tpcExhc3RPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9xLnB1c2goeCk7XG4gICAgICB0aGlzLl9xLmxlbmd0aCA+IHRoaXMuX2MgJiYgdGhpcy5fby5vbk5leHQodGhpcy5fcS5zaGlmdCgpKTtcbiAgICB9O1xuXG4gICAgU2tpcExhc3RPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBTa2lwTGFzdE9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTa2lwTGFzdE9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogIEJ5cGFzc2VzIGEgc3BlY2lmaWVkIG51bWJlciBvZiBlbGVtZW50cyBhdCB0aGUgZW5kIG9mIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgVGhpcyBvcGVyYXRvciBhY2N1bXVsYXRlcyBhIHF1ZXVlIHdpdGggYSBsZW5ndGggZW5vdWdoIHRvIHN0b3JlIHRoZSBmaXJzdCBgY291bnRgIGVsZW1lbnRzLiBBcyBtb3JlIGVsZW1lbnRzIGFyZVxuICAgKiAgcmVjZWl2ZWQsIGVsZW1lbnRzIGFyZSB0YWtlbiBmcm9tIHRoZSBmcm9udCBvZiB0aGUgcXVldWUgYW5kIHByb2R1Y2VkIG9uIHRoZSByZXN1bHQgc2VxdWVuY2UuIFRoaXMgY2F1c2VzIGVsZW1lbnRzIHRvIGJlIGRlbGF5ZWQuXG4gICAqIEBwYXJhbSBjb3VudCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gYnlwYXNzIGF0IHRoZSBlbmQgb2YgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgc291cmNlIHNlcXVlbmNlIGVsZW1lbnRzIGV4Y2VwdCBmb3IgdGhlIGJ5cGFzc2VkIG9uZXMgYXQgdGhlIGVuZC5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5za2lwTGFzdCA9IGZ1bmN0aW9uIChjb3VudCkge1xuICAgIGlmIChjb3VudCA8IDApIHsgdGhyb3cgbmV3IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yKCk7IH1cbiAgICByZXR1cm4gbmV3IFNraXBMYXN0T2JzZXJ2YWJsZSh0aGlzLCBjb3VudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICBQcmVwZW5kcyBhIHNlcXVlbmNlIG9mIHZhbHVlcyB0byBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHdpdGggYW4gb3B0aW9uYWwgc2NoZWR1bGVyIGFuZCBhbiBhcmd1bWVudCBsaXN0IG9mIHZhbHVlcyB0byBwcmVwZW5kLlxuICAgKiAgQGV4YW1wbGVcbiAgICogIHZhciByZXMgPSBzb3VyY2Uuc3RhcnRXaXRoKDEsIDIsIDMpO1xuICAgKiAgdmFyIHJlcyA9IHNvdXJjZS5zdGFydFdpdGgoUnguU2NoZWR1bGVyLnRpbWVvdXQsIDEsIDIsIDMpO1xuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gYXJncyBUaGUgc3BlY2lmaWVkIHZhbHVlcyB0byBwcmVwZW5kIHRvIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgc291cmNlIHNlcXVlbmNlIHByZXBlbmRlZCB3aXRoIHRoZSBzcGVjaWZpZWQgdmFsdWVzLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnN0YXJ0V2l0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWVzLCBzY2hlZHVsZXIsIHN0YXJ0ID0gMDtcbiAgICBpZiAoISFhcmd1bWVudHMubGVuZ3RoICYmIGlzU2NoZWR1bGVyKGFyZ3VtZW50c1swXSkpIHtcbiAgICAgIHNjaGVkdWxlciA9IGFyZ3VtZW50c1swXTtcbiAgICAgIHN0YXJ0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVyID0gaW1tZWRpYXRlU2NoZWR1bGVyO1xuICAgIH1cbiAgICBmb3IodmFyIGFyZ3MgPSBbXSwgaSA9IHN0YXJ0LCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHsgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7IH1cbiAgICByZXR1cm4gZW51bWVyYWJsZU9mKFtvYnNlcnZhYmxlRnJvbUFycmF5KGFyZ3MsIHNjaGVkdWxlciksIHRoaXNdKS5jb25jYXQoKTtcbiAgfTtcblxuICB2YXIgVGFrZUxhc3RPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGFrZUxhc3RPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBUYWtlTGFzdE9ic2VydmVyKG8sIGMpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fYyA9IGM7XG4gICAgICB0aGlzLl9xID0gW107XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUYWtlTGFzdE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX3EucHVzaCh4KTtcbiAgICAgIHRoaXMuX3EubGVuZ3RoID4gdGhpcy5fYyAmJiB0aGlzLl9xLnNoaWZ0KCk7XG4gICAgfTtcblxuICAgIFRha2VMYXN0T2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgVGFrZUxhc3RPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2hpbGUgKHRoaXMuX3EubGVuZ3RoID4gMCkgeyB0aGlzLl9vLm9uTmV4dCh0aGlzLl9xLnNoaWZ0KCkpOyB9XG4gICAgICB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBUYWtlTGFzdE9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogIFJldHVybnMgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGNvbnRpZ3VvdXMgZWxlbWVudHMgZnJvbSB0aGUgZW5kIG9mIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgVGhpcyBvcGVyYXRvciBhY2N1bXVsYXRlcyBhIGJ1ZmZlciB3aXRoIGEgbGVuZ3RoIGVub3VnaCB0byBzdG9yZSBlbGVtZW50cyBjb3VudCBlbGVtZW50cy4gVXBvbiBjb21wbGV0aW9uIG9mXG4gICAqICB0aGUgc291cmNlIHNlcXVlbmNlLCB0aGlzIGJ1ZmZlciBpcyBkcmFpbmVkIG9uIHRoZSByZXN1bHQgc2VxdWVuY2UuIFRoaXMgY2F1c2VzIHRoZSBlbGVtZW50cyB0byBiZSBkZWxheWVkLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIHRha2UgZnJvbSB0aGUgZW5kIG9mIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZWxlbWVudHMgZnJvbSB0aGUgZW5kIG9mIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8udGFrZUxhc3QgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICBpZiAoY291bnQgPCAwKSB7IHRocm93IG5ldyBBcmd1bWVudE91dE9mUmFuZ2VFcnJvcigpOyB9XG4gICAgdmFyIHNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgVGFrZUxhc3RPYnNlcnZlcihvLCBjb3VudCkpO1xuICAgIH0sIHNvdXJjZSk7XG4gIH07XG5cbm9ic2VydmFibGVQcm90by5mbGF0TWFwQ29uY2F0ID0gb2JzZXJ2YWJsZVByb3RvLmNvbmNhdE1hcCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCByZXN1bHRTZWxlY3RvciwgdGhpc0FyZykge1xuICAgIHJldHVybiBuZXcgRmxhdE1hcE9ic2VydmFibGUodGhpcywgc2VsZWN0b3IsIHJlc3VsdFNlbGVjdG9yLCB0aGlzQXJnKS5tZXJnZSgxKTtcbn07XG4gIHZhciBNYXBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhNYXBPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gTWFwT2JzZXJ2YWJsZShzb3VyY2UsIHNlbGVjdG9yLCB0aGlzQXJnKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuc2VsZWN0b3IgPSBiaW5kQ2FsbGJhY2soc2VsZWN0b3IsIHRoaXNBcmcsIDMpO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5uZXJNYXAoc2VsZWN0b3IsIHNlbGYpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoeCwgaSwgbykgeyByZXR1cm4gc2VsZWN0b3IuY2FsbCh0aGlzLCBzZWxmLnNlbGVjdG9yKHgsIGksIG8pLCBpLCBvKTsgfVxuICAgIH1cblxuICAgIE1hcE9ic2VydmFibGUucHJvdG90eXBlLmludGVybmFsTWFwID0gZnVuY3Rpb24gKHNlbGVjdG9yLCB0aGlzQXJnKSB7XG4gICAgICByZXR1cm4gbmV3IE1hcE9ic2VydmFibGUodGhpcy5zb3VyY2UsIGlubmVyTWFwKHNlbGVjdG9yLCB0aGlzKSwgdGhpc0FyZyk7XG4gICAgfTtcblxuICAgIE1hcE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihvLCB0aGlzLnNlbGVjdG9yLCB0aGlzKSk7XG4gICAgfTtcblxuICAgIGluaGVyaXRzKElubmVyT2JzZXJ2ZXIsIEFic3RyYWN0T2JzZXJ2ZXIpO1xuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIobywgc2VsZWN0b3IsIHNvdXJjZSkge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5pID0gMDtcbiAgICAgIEFic3RyYWN0T2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMuc2VsZWN0b3IpKHgsIHRoaXMuaSsrLCB0aGlzLnNvdXJjZSk7XG4gICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5vLm9uRXJyb3IocmVzdWx0LmUpOyB9XG4gICAgICB0aGlzLm8ub25OZXh0KHJlc3VsdCk7XG4gICAgfTtcblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLm8ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE1hcE9ic2VydmFibGU7XG5cbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAqIFByb2plY3RzIGVhY2ggZWxlbWVudCBvZiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGludG8gYSBuZXcgZm9ybSBieSBpbmNvcnBvcmF0aW5nIHRoZSBlbGVtZW50J3MgaW5kZXguXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gc2VsZWN0b3IgQSB0cmFuc2Zvcm0gZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBzb3VyY2UgZWxlbWVudDsgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgdGhlIGZ1bmN0aW9uIHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIHRoZSBzb3VyY2UgZWxlbWVudC5cbiAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIE9iamVjdCB0byB1c2UgYXMgdGhpcyB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aG9zZSBlbGVtZW50cyBhcmUgdGhlIHJlc3VsdCBvZiBpbnZva2luZyB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIG9uIGVhY2ggZWxlbWVudCBvZiBzb3VyY2UuXG4gICovXG4gIG9ic2VydmFibGVQcm90by5tYXAgPSBvYnNlcnZhYmxlUHJvdG8uc2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCB0aGlzQXJnKSB7XG4gICAgdmFyIHNlbGVjdG9yRm4gPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbicgPyBzZWxlY3RvciA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGVjdG9yOyB9O1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgTWFwT2JzZXJ2YWJsZSA/XG4gICAgICB0aGlzLmludGVybmFsTWFwKHNlbGVjdG9yRm4sIHRoaXNBcmcpIDpcbiAgICAgIG5ldyBNYXBPYnNlcnZhYmxlKHRoaXMsIHNlbGVjdG9yRm4sIHRoaXNBcmcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBsdWNrZXIoYXJncywgbGVuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1hcHBlcih4KSB7XG4gICAgICB2YXIgY3VycmVudFByb3AgPSB4O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgcCA9IGN1cnJlbnRQcm9wW2FyZ3NbaV1dO1xuICAgICAgICBpZiAodHlwZW9mIHAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY3VycmVudFByb3AgPSBwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50UHJvcDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSB2YWx1ZSBvZiBhIHNwZWNpZmllZCBuZXN0ZWQgcHJvcGVydHkgZnJvbSBhbGwgZWxlbWVudHMgaW5cbiAgICogdGhlIE9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEBwYXJhbSB7QXJndW1lbnRzfSBhcmd1bWVudHMgVGhlIG5lc3RlZCBwcm9wZXJ0aWVzIHRvIHBsdWNrLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gUmV0dXJucyBhIG5ldyBPYnNlcnZhYmxlIHNlcXVlbmNlIG9mIHByb3BlcnR5IHZhbHVlcy5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5wbHVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGlmIChsZW4gPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdMaXN0IG9mIHByb3BlcnRpZXMgY2Fubm90IGJlIGVtcHR5LicpOyB9XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICByZXR1cm4gdGhpcy5tYXAocGx1Y2tlcihhcmdzLCBsZW4pKTtcbiAgfTtcblxub2JzZXJ2YWJsZVByb3RvLmZsYXRNYXAgPSBvYnNlcnZhYmxlUHJvdG8uc2VsZWN0TWFueSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCByZXN1bHRTZWxlY3RvciwgdGhpc0FyZykge1xuICAgIHJldHVybiBuZXcgRmxhdE1hcE9ic2VydmFibGUodGhpcywgc2VsZWN0b3IsIHJlc3VsdFNlbGVjdG9yLCB0aGlzQXJnKS5tZXJnZUFsbCgpO1xufTtcblxuXG4vL1xuLy9SeC5PYnNlcnZhYmxlLnByb3RvdHlwZS5mbGF0TWFwV2l0aE1heENvbmN1cnJlbnQgPSBmdW5jdGlvbihsaW1pdCwgc2VsZWN0b3IsIHJlc3VsdFNlbGVjdG9yLCB0aGlzQXJnKSB7XG4vLyAgICByZXR1cm4gbmV3IEZsYXRNYXBPYnNlcnZhYmxlKHRoaXMsIHNlbGVjdG9yLCByZXN1bHRTZWxlY3RvciwgdGhpc0FyZykubWVyZ2UobGltaXQpO1xuLy99O1xuLy9cblxuUnguT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcExhdGVzdCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCByZXN1bHRTZWxlY3RvciwgdGhpc0FyZykge1xuICAgIHJldHVybiBuZXcgRmxhdE1hcE9ic2VydmFibGUodGhpcywgc2VsZWN0b3IsIHJlc3VsdFNlbGVjdG9yLCB0aGlzQXJnKS5zd2l0Y2hMYXRlc3QoKTtcbn07XG4gIHZhciBTa2lwT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTa2lwT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBTa2lwT2JzZXJ2YWJsZShzb3VyY2UsIGNvdW50KSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuc2tpcENvdW50ID0gY291bnQ7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgU2tpcE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihvLCB0aGlzLnNraXBDb3VudCkpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihvLCBjKSB7XG4gICAgICB0aGlzLmMgPSBjO1xuICAgICAgdGhpcy5yID0gYztcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbk5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgaWYgKHRoaXMuciA8PSAwKSB7IFxuICAgICAgICB0aGlzLm8ub25OZXh0KHgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yLS07XG4gICAgICB9XG4gICAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkgeyB0aGlzLmlzU3RvcHBlZCA9IHRydWU7IHRoaXMuby5vbkVycm9yKGUpOyB9XG4gICAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkgeyB0aGlzLmlzU3RvcHBlZCA9IHRydWU7IHRoaXMuby5vbkNvbXBsZXRlZCgpOyB9XG4gICAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTsgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuby5vbkVycm9yKGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBTa2lwT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpOyAgXG4gIFxuICAvKipcbiAgICogQnlwYXNzZXMgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJucyB0aGUgcmVtYWluaW5nIGVsZW1lbnRzLlxuICAgKiBAcGFyYW0ge051bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlbWFpbmluZyBlbGVtZW50cy5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgdGhhdCBvY2N1ciBhZnRlciB0aGUgc3BlY2lmaWVkIGluZGV4IGluIHRoZSBpbnB1dCBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5za2lwID0gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgaWYgKGNvdW50IDwgMCkgeyB0aHJvdyBuZXcgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IoKTsgfVxuICAgIHJldHVybiBuZXcgU2tpcE9ic2VydmFibGUodGhpcywgY291bnQpO1xuICB9O1xuICB2YXIgU2tpcFdoaWxlT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2tpcFdoaWxlT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBTa2lwV2hpbGVPYnNlcnZhYmxlKHNvdXJjZSwgZm4pIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fZm4gPSBmbjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFNraXBXaGlsZU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgU2tpcFdoaWxlT2JzZXJ2ZXIobywgdGhpcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2tpcFdoaWxlT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBTa2lwV2hpbGVPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2tpcFdoaWxlT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBTa2lwV2hpbGVPYnNlcnZlcihvLCBwKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX3AgPSBwO1xuICAgICAgdGhpcy5faSA9IDA7XG4gICAgICB0aGlzLl9yID0gZmFsc2U7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTa2lwV2hpbGVPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAoIXRoaXMuX3IpIHtcbiAgICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoKHRoaXMuX3AuX2ZuKSh4LCB0aGlzLl9pKyssIHRoaXMuX3ApO1xuICAgICAgICBpZiAocmVzID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5fby5vbkVycm9yKHJlcy5lKTsgfVxuICAgICAgICB0aGlzLl9yID0gIXJlcztcbiAgICAgIH1cbiAgICAgIHRoaXMuX3IgJiYgdGhpcy5fby5vbk5leHQoeCk7XG4gICAgfTtcbiAgICBTa2lwV2hpbGVPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkgeyB0aGlzLl9vLm9uRXJyb3IoZSk7IH07XG4gICAgU2tpcFdoaWxlT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fby5vbkNvbXBsZXRlZCgpOyB9O1xuXG4gICAgcmV0dXJuIFNraXBXaGlsZU9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogIEJ5cGFzc2VzIGVsZW1lbnRzIGluIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaXMgdHJ1ZSBhbmQgdGhlbiByZXR1cm5zIHRoZSByZW1haW5pbmcgZWxlbWVudHMuXG4gICAqICBUaGUgZWxlbWVudCdzIGluZGV4IGlzIHVzZWQgaW4gdGhlIGxvZ2ljIG9mIHRoZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gICAqXG4gICAqICB2YXIgcmVzID0gc291cmNlLnNraXBXaGlsZShmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlIDwgMTA7IH0pO1xuICAgKiAgdmFyIHJlcyA9IHNvdXJjZS5za2lwV2hpbGUoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkgeyByZXR1cm4gdmFsdWUgPCAxMCB8fCBpbmRleCA8IDEwOyB9KTtcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIEEgZnVuY3Rpb24gdG8gdGVzdCBlYWNoIGVsZW1lbnQgZm9yIGEgY29uZGl0aW9uOyB0aGUgc2Vjb25kIHBhcmFtZXRlciBvZiB0aGUgZnVuY3Rpb24gcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgdGhlIHNvdXJjZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIE9iamVjdCB0byB1c2UgYXMgdGhpcyB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgZnJvbSB0aGUgaW5wdXQgc2VxdWVuY2Ugc3RhcnRpbmcgYXQgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpbmVhciBzZXJpZXMgdGhhdCBkb2VzIG5vdCBwYXNzIHRoZSB0ZXN0IHNwZWNpZmllZCBieSBwcmVkaWNhdGUuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uc2tpcFdoaWxlID0gZnVuY3Rpb24gKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHZhciBmbiA9IGJpbmRDYWxsYmFjayhwcmVkaWNhdGUsIHRoaXNBcmcsIDMpO1xuICAgIHJldHVybiBuZXcgU2tpcFdoaWxlT2JzZXJ2YWJsZSh0aGlzLCBmbik7XG4gIH07XG5cbiAgdmFyIFRha2VPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRha2VPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIFxuICAgIGZ1bmN0aW9uIFRha2VPYnNlcnZhYmxlKHNvdXJjZSwgY291bnQpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy50YWtlQ291bnQgPSBjb3VudDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBUYWtlT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKG8sIHRoaXMudGFrZUNvdW50KSk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKG8sIGMpIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLmMgPSBjO1xuICAgICAgdGhpcy5yID0gYztcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgfVxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlID0ge1xuICAgICAgb25OZXh0OiBmdW5jdGlvbiAoeCkge1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICh0aGlzLnItLSA+IDApIHtcbiAgICAgICAgICB0aGlzLm8ub25OZXh0KHgpO1xuICAgICAgICAgIHRoaXMuciA8PSAwICYmIHRoaXMuby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuby5vbkVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkNvbXBsZXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkgeyB0aGlzLmlzU3RvcHBlZCA9IHRydWU7IH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuby5vbkVycm9yKGUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBUYWtlT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpOyAgXG4gIFxuICAvKipcbiAgICogIFJldHVybnMgYSBzcGVjaWZpZWQgbnVtYmVyIG9mIGNvbnRpZ3VvdXMgZWxlbWVudHMgZnJvbSB0aGUgc3RhcnQgb2YgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSwgdXNpbmcgdGhlIHNwZWNpZmllZCBzY2hlZHVsZXIgZm9yIHRoZSBlZGdlIGNhc2Ugb2YgdGFrZSgwKS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gcmV0dXJuLlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gU2NoZWR1bGVyIHVzZWQgdG8gcHJvZHVjZSBhbiBPbkNvbXBsZXRlZCBtZXNzYWdlIGluIGNhc2UgPHBhcmFtcmVmIG5hbWU9XCJjb3VudCBjb3VudDwvcGFyYW1yZWY+IGlzIHNldCB0byAwLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBpbnB1dCBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by50YWtlID0gZnVuY3Rpb24gKGNvdW50LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoY291bnQgPCAwKSB7IHRocm93IG5ldyBBcmd1bWVudE91dE9mUmFuZ2VFcnJvcigpOyB9XG4gICAgaWYgKGNvdW50ID09PSAwKSB7IHJldHVybiBvYnNlcnZhYmxlRW1wdHkoc2NoZWR1bGVyKTsgfVxuICAgIHJldHVybiBuZXcgVGFrZU9ic2VydmFibGUodGhpcywgY291bnQpO1xuICB9O1xuXG4gIHZhciBUYWtlV2hpbGVPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUYWtlV2hpbGVPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFRha2VXaGlsZU9ic2VydmFibGUoc291cmNlLCBmbikge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVGFrZVdoaWxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBUYWtlV2hpbGVPYnNlcnZlcihvLCB0aGlzKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUYWtlV2hpbGVPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIFRha2VXaGlsZU9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUYWtlV2hpbGVPYnNlcnZlciwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIFRha2VXaGlsZU9ic2VydmVyKG8sIHApIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fcCA9IHA7XG4gICAgICB0aGlzLl9pID0gMDtcbiAgICAgIHRoaXMuX3IgPSB0cnVlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVGFrZVdoaWxlT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKHRoaXMuX3IpIHtcbiAgICAgICAgdGhpcy5fciA9IHRyeUNhdGNoKHRoaXMuX3AuX2ZuKSh4LCB0aGlzLl9pKyssIHRoaXMuX3ApO1xuICAgICAgICBpZiAodGhpcy5fciA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuX28ub25FcnJvcih0aGlzLl9yLmUpOyB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcikge1xuICAgICAgICB0aGlzLl9vLm9uTmV4dCh4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFRha2VXaGlsZU9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7IHRoaXMuX28ub25FcnJvcihlKTsgfTtcbiAgICBUYWtlV2hpbGVPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9vLm9uQ29tcGxldGVkKCk7IH07XG5cbiAgICByZXR1cm4gVGFrZVdoaWxlT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBlbGVtZW50cyBmcm9tIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgYXMgbG9uZyBhcyBhIHNwZWNpZmllZCBjb25kaXRpb24gaXMgdHJ1ZS5cbiAgICogIFRoZSBlbGVtZW50J3MgaW5kZXggaXMgdXNlZCBpbiB0aGUgbG9naWMgb2YgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIEEgZnVuY3Rpb24gdG8gdGVzdCBlYWNoIGVsZW1lbnQgZm9yIGEgY29uZGl0aW9uOyB0aGUgc2Vjb25kIHBhcmFtZXRlciBvZiB0aGUgZnVuY3Rpb24gcmVwcmVzZW50cyB0aGUgaW5kZXggb2YgdGhlIHNvdXJjZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIE9iamVjdCB0byB1c2UgYXMgdGhpcyB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgZnJvbSB0aGUgaW5wdXQgc2VxdWVuY2UgdGhhdCBvY2N1ciBiZWZvcmUgdGhlIGVsZW1lbnQgYXQgd2hpY2ggdGhlIHRlc3Qgbm8gbG9uZ2VyIHBhc3Nlcy5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by50YWtlV2hpbGUgPSBmdW5jdGlvbiAocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgdmFyIGZuID0gYmluZENhbGxiYWNrKHByZWRpY2F0ZSwgdGhpc0FyZywgMyk7XG4gICAgcmV0dXJuIG5ldyBUYWtlV2hpbGVPYnNlcnZhYmxlKHRoaXMsIGZuKTtcbiAgfTtcblxuICB2YXIgRmlsdGVyT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRmlsdGVyT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIEZpbHRlck9ic2VydmFibGUoc291cmNlLCBwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5wcmVkaWNhdGUgPSBiaW5kQ2FsbGJhY2socHJlZGljYXRlLCB0aGlzQXJnLCAzKTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIEZpbHRlck9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihvLCB0aGlzLnByZWRpY2F0ZSwgdGhpcykpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpbm5lclByZWRpY2F0ZShwcmVkaWNhdGUsIHNlbGYpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbih4LCBpLCBvKSB7IHJldHVybiBzZWxmLnByZWRpY2F0ZSh4LCBpLCBvKSAmJiBwcmVkaWNhdGUuY2FsbCh0aGlzLCB4LCBpLCBvKTsgfVxuICAgIH1cblxuICAgIEZpbHRlck9ic2VydmFibGUucHJvdG90eXBlLmludGVybmFsRmlsdGVyID0gZnVuY3Rpb24ocHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICByZXR1cm4gbmV3IEZpbHRlck9ic2VydmFibGUodGhpcy5zb3VyY2UsIGlubmVyUHJlZGljYXRlKHByZWRpY2F0ZSwgdGhpcyksIHRoaXNBcmcpO1xuICAgIH07XG5cbiAgICBpbmhlcml0cyhJbm5lck9ic2VydmVyLCBBYnN0cmFjdE9ic2VydmVyKTtcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKG8sIHByZWRpY2F0ZSwgc291cmNlKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5wcmVkaWNhdGUgPSBwcmVkaWNhdGU7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuaSA9IDA7XG4gICAgICBBYnN0cmFjdE9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHZhciBzaG91bGRZaWVsZCA9IHRyeUNhdGNoKHRoaXMucHJlZGljYXRlKSh4LCB0aGlzLmkrKywgdGhpcy5zb3VyY2UpO1xuICAgICAgaWYgKHNob3VsZFlpZWxkID09PSBlcnJvck9iaikge1xuICAgICAgICByZXR1cm4gdGhpcy5vLm9uRXJyb3Ioc2hvdWxkWWllbGQuZSk7XG4gICAgICB9XG4gICAgICBzaG91bGRZaWVsZCAmJiB0aGlzLm8ub25OZXh0KHgpO1xuICAgIH07XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLm8ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBGaWx0ZXJPYnNlcnZhYmxlO1xuXG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgKiAgRmlsdGVycyB0aGUgZWxlbWVudHMgb2YgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBiYXNlZCBvbiBhIHByZWRpY2F0ZSBieSBpbmNvcnBvcmF0aW5nIHRoZSBlbGVtZW50J3MgaW5kZXguXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIEEgZnVuY3Rpb24gdG8gdGVzdCBlYWNoIHNvdXJjZSBlbGVtZW50IGZvciBhIGNvbmRpdGlvbjsgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgdGhlIGZ1bmN0aW9uIHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIHRoZSBzb3VyY2UgZWxlbWVudC5cbiAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIE9iamVjdCB0byB1c2UgYXMgdGhpcyB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIGVsZW1lbnRzIGZyb20gdGhlIGlucHV0IHNlcXVlbmNlIHRoYXQgc2F0aXNmeSB0aGUgY29uZGl0aW9uLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uZmlsdGVyID0gb2JzZXJ2YWJsZVByb3RvLndoZXJlID0gZnVuY3Rpb24gKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgRmlsdGVyT2JzZXJ2YWJsZSA/IHRoaXMuaW50ZXJuYWxGaWx0ZXIocHJlZGljYXRlLCB0aGlzQXJnKSA6XG4gICAgICBuZXcgRmlsdGVyT2JzZXJ2YWJsZSh0aGlzLCBwcmVkaWNhdGUsIHRoaXNBcmcpO1xuICB9O1xuXG5mdW5jdGlvbiBjcmVhdGVDYk9ic2VydmFibGUoZm4sIGN0eCwgc2VsZWN0b3IsIGFyZ3MpIHtcbiAgdmFyIG8gPSBuZXcgQXN5bmNTdWJqZWN0KCk7XG5cbiAgYXJncy5wdXNoKGNyZWF0ZUNiSGFuZGxlcihvLCBjdHgsIHNlbGVjdG9yKSk7XG4gIGZuLmFwcGx5KGN0eCwgYXJncyk7XG5cbiAgcmV0dXJuIG8uYXNPYnNlcnZhYmxlKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNiSGFuZGxlcihvLCBjdHgsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyICgpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdWx0cyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyByZXN1bHRzW2ldID0gYXJndW1lbnRzW2ldOyB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgIHJlc3VsdHMgPSB0cnlDYXRjaChzZWxlY3RvcikuYXBwbHkoY3R4LCByZXN1bHRzKTtcbiAgICAgIGlmIChyZXN1bHRzID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKHJlc3VsdHMuZSk7IH1cbiAgICAgIG8ub25OZXh0KHJlc3VsdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPD0gMSkge1xuICAgICAgICBvLm9uTmV4dChyZXN1bHRzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG8ub25OZXh0KHJlc3VsdHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gd2l0aCBhIGNhbGxiYWNrIGFzIHRoZSBsYXN0IHBhcmFtZXRlciB0byBjb252ZXJ0IHRvIGFuIE9ic2VydmFibGUgc2VxdWVuY2UuXG4gKiBAcGFyYW0ge01peGVkfSBbY3R4XSBUaGUgY29udGV4dCBmb3IgdGhlIGZ1bmMgcGFyYW1ldGVyIHRvIGJlIGV4ZWN1dGVkLiAgSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gdW5kZWZpbmVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3NlbGVjdG9yXSBBIHNlbGVjdG9yIHdoaWNoIHRha2VzIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgY2FsbGJhY2sgdG8gcHJvZHVjZSBhIHNpbmdsZSBpdGVtIHRvIHlpZWxkIG9uIG5leHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24sIHdoZW4gZXhlY3V0ZWQgd2l0aCB0aGUgcmVxdWlyZWQgcGFyYW1ldGVycyBtaW51cyB0aGUgY2FsbGJhY2ssIHByb2R1Y2VzIGFuIE9ic2VydmFibGUgc2VxdWVuY2Ugd2l0aCBhIHNpbmdsZSB2YWx1ZSBvZiB0aGUgYXJndW1lbnRzIHRvIHRoZSBjYWxsYmFjayBhcyBhbiBhcnJheS5cbiAqL1xuT2JzZXJ2YWJsZS5mcm9tQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZm4sIGN0eCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB0eXBlb2YgY3R4ID09PSAndW5kZWZpbmVkJyAmJiAoY3R4ID0gdGhpcyk7IFxuXG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKVxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgcmV0dXJuIGNyZWF0ZUNiT2JzZXJ2YWJsZShmbiwgY3R4LCBzZWxlY3RvciwgYXJncyk7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVOb2RlT2JzZXJ2YWJsZShmbiwgY3R4LCBzZWxlY3RvciwgYXJncykge1xuICB2YXIgbyA9IG5ldyBBc3luY1N1YmplY3QoKTtcblxuICBhcmdzLnB1c2goY3JlYXRlTm9kZUhhbmRsZXIobywgY3R4LCBzZWxlY3RvcikpO1xuICBmbi5hcHBseShjdHgsIGFyZ3MpO1xuXG4gIHJldHVybiBvLmFzT2JzZXJ2YWJsZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb2RlSGFuZGxlcihvLCBjdHgsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyICgpIHtcbiAgICB2YXIgZXJyID0gYXJndW1lbnRzWzBdO1xuICAgIGlmIChlcnIpIHsgcmV0dXJuIG8ub25FcnJvcihlcnIpOyB9XG5cbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdWx0cyA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykgeyByZXN1bHRzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTsgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpKSB7XG4gICAgICB2YXIgcmVzdWx0cyA9IHRyeUNhdGNoKHNlbGVjdG9yKS5hcHBseShjdHgsIHJlc3VsdHMpO1xuICAgICAgaWYgKHJlc3VsdHMgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IocmVzdWx0cy5lKTsgfVxuICAgICAgby5vbk5leHQocmVzdWx0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIG8ub25OZXh0KHJlc3VsdHNbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgby5vbk5leHQocmVzdWx0cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgby5vbkNvbXBsZXRlZCgpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgTm9kZS5qcyBjYWxsYmFjayBzdHlsZSBmdW5jdGlvbiB0byBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLiAgVGhpcyBtdXN0IGJlIGluIGZ1bmN0aW9uIChlcnIsIC4uLikgZm9ybWF0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGxcbiAqIEBwYXJhbSB7TWl4ZWR9IFtjdHhdIFRoZSBjb250ZXh0IGZvciB0aGUgZnVuYyBwYXJhbWV0ZXIgdG8gYmUgZXhlY3V0ZWQuICBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byB1bmRlZmluZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbc2VsZWN0b3JdIEEgc2VsZWN0b3Igd2hpY2ggdGFrZXMgdGhlIGFyZ3VtZW50cyBmcm9tIHRoZSBjYWxsYmFjayBtaW51cyB0aGUgZXJyb3IgdG8gcHJvZHVjZSBhIHNpbmdsZSBpdGVtIHRvIHlpZWxkIG9uIG5leHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEFuIGFzeW5jIGZ1bmN0aW9uIHdoaWNoIHdoZW4gYXBwbGllZCwgcmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHdpdGggdGhlIGNhbGxiYWNrIGFyZ3VtZW50cyBhcyBhbiBhcnJheS5cbiAqL1xuT2JzZXJ2YWJsZS5mcm9tTm9kZUNhbGxiYWNrID0gZnVuY3Rpb24gKGZuLCBjdHgsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdHlwZW9mIGN0eCA9PT0gJ3VuZGVmaW5lZCcgJiYgKGN0eCA9IHRoaXMpOyBcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShsZW4pO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgcmV0dXJuIGNyZWF0ZU5vZGVPYnNlcnZhYmxlKGZuLCBjdHgsIHNlbGVjdG9yLCBhcmdzKTtcbiAgfTtcbn07XG5cbiAgZnVuY3Rpb24gaXNOb2RlTGlzdChlbCkge1xuICAgIGlmIChyb290LlN0YXRpY05vZGVMaXN0KSB7XG4gICAgICAvLyBJRTggU3BlY2lmaWNcbiAgICAgIC8vIGluc3RhbmNlb2YgaXMgc2xvd2VyIHRoYW4gT2JqZWN0I3RvU3RyaW5nLCBidXQgT2JqZWN0I3RvU3RyaW5nIHdpbGwgbm90IHdvcmsgYXMgaW50ZW5kZWQgaW4gSUU4XG4gICAgICByZXR1cm4gZWwgaW5zdGFuY2VvZiByb290LlN0YXRpY05vZGVMaXN0IHx8IGVsIGluc3RhbmNlb2Ygcm9vdC5Ob2RlTGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbCkgPT09ICdbb2JqZWN0IE5vZGVMaXN0XSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gTGlzdGVuRGlzcG9zYWJsZShlLCBuLCBmbikge1xuICAgIHRoaXMuX2UgPSBlO1xuICAgIHRoaXMuX24gPSBuO1xuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fZS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX24sIHRoaXMuX2ZuLCBmYWxzZSk7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gIH1cbiAgTGlzdGVuRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdGhpcy5fZS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuX24sIHRoaXMuX2ZuLCBmYWxzZSk7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyIChlbCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgdmFyIGRpc3Bvc2FibGVzID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKTtcblxuICAgIC8vIEFzdW1lIE5vZGVMaXN0IG9yIEhUTUxDb2xsZWN0aW9uXG4gICAgdmFyIGVsZW1Ub1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbCk7XG4gICAgaWYgKGlzTm9kZUxpc3QoZWwpIHx8IGVsZW1Ub1N0cmluZyA9PT0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGRpc3Bvc2FibGVzLmFkZChjcmVhdGVFdmVudExpc3RlbmVyKGVsLml0ZW0oaSksIGV2ZW50TmFtZSwgaGFuZGxlcikpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWwpIHtcbiAgICAgIGRpc3Bvc2FibGVzLmFkZChuZXcgTGlzdGVuRGlzcG9zYWJsZShlbCwgZXZlbnROYW1lLCBoYW5kbGVyKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc3Bvc2FibGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gb3B0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHVzZSBuYXRpdmUgZXZlbnRzIG9ubHlcbiAgICovXG4gIFJ4LmNvbmZpZy51c2VOYXRpdmVFdmVudHMgPSBmYWxzZTtcblxuICB2YXIgRXZlbnRPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEV2ZW50T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBFdmVudE9ic2VydmFibGUoZWwsIG5hbWUsIGZuKSB7XG4gICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgdGhpcy5fbiA9IG5hbWU7XG4gICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGFuZGxlcihvLCBmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIgKCkge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgcmVzdWx0cyA9IHRyeUNhdGNoKGZuKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgIGlmIChyZXN1bHRzID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKHJlc3VsdHMuZSk7IH1cbiAgICAgICAgfVxuICAgICAgICBvLm9uTmV4dChyZXN1bHRzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgRXZlbnRPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBjcmVhdGVFdmVudExpc3RlbmVyKFxuICAgICAgICB0aGlzLl9lbCxcbiAgICAgICAgdGhpcy5fbixcbiAgICAgICAgY3JlYXRlSGFuZGxlcihvLCB0aGlzLl9mbikpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRXZlbnRPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBieSBhZGRpbmcgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIG1hdGNoaW5nIERPTUVsZW1lbnQgb3IgZWFjaCBpdGVtIGluIHRoZSBOb2RlTGlzdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnQgVGhlIERPTUVsZW1lbnQgb3IgTm9kZUxpc3QgdG8gYXR0YWNoIGEgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWUgVGhlIGV2ZW50IG5hbWUgdG8gYXR0YWNoIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbc2VsZWN0b3JdIEEgc2VsZWN0b3Igd2hpY2ggdGFrZXMgdGhlIGFyZ3VtZW50cyBmcm9tIHRoZSBldmVudCBoYW5kbGVyIHRvIHByb2R1Y2UgYSBzaW5nbGUgaXRlbSB0byB5aWVsZCBvbiBuZXh0LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvZiBldmVudHMgZnJvbSB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgYW5kIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAqL1xuICBPYnNlcnZhYmxlLmZyb21FdmVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudE5hbWUsIHNlbGVjdG9yKSB7XG4gICAgLy8gTm9kZS5qcyBzcGVjaWZpY1xuICAgIGlmIChlbGVtZW50LmFkZExpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gZnJvbUV2ZW50UGF0dGVybihcbiAgICAgICAgZnVuY3Rpb24gKGgpIHsgZWxlbWVudC5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGgpOyB9LFxuICAgICAgICBmdW5jdGlvbiAoaCkgeyBlbGVtZW50LnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgaCk7IH0sXG4gICAgICAgIHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICAvLyBVc2Ugb25seSBpZiBub24tbmF0aXZlIGV2ZW50cyBhcmUgYWxsb3dlZFxuICAgIGlmICghUnguY29uZmlnLnVzZU5hdGl2ZUV2ZW50cykge1xuICAgICAgLy8gSGFuZGxlcyBqcSwgQW5ndWxhci5qcywgWmVwdG8sIE1hcmlvbmV0dGUsIEVtYmVyLmpzXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQub24gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVsZW1lbnQub2ZmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmcm9tRXZlbnRQYXR0ZXJuKFxuICAgICAgICAgIGZ1bmN0aW9uIChoKSB7IGVsZW1lbnQub24oZXZlbnROYW1lLCBoKTsgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoaCkgeyBlbGVtZW50Lm9mZihldmVudE5hbWUsIGgpOyB9LFxuICAgICAgICAgIHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEV2ZW50T2JzZXJ2YWJsZShlbGVtZW50LCBldmVudE5hbWUsIHNlbGVjdG9yKS5wdWJsaXNoKCkucmVmQ291bnQoKTtcbiAgfTtcblxuICB2YXIgRXZlbnRQYXR0ZXJuT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhFdmVudFBhdHRlcm5PYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEV2ZW50UGF0dGVybk9ic2VydmFibGUoYWRkLCBkZWwsIGZuKSB7XG4gICAgICB0aGlzLl9hZGQgPSBhZGQ7XG4gICAgICB0aGlzLl9kZWwgPSBkZWw7XG4gICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGFuZGxlcihvLCBmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIgKCkge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgcmVzdWx0cyA9IHRyeUNhdGNoKGZuKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgIGlmIChyZXN1bHRzID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKHJlc3VsdHMuZSk7IH1cbiAgICAgICAgfVxuICAgICAgICBvLm9uTmV4dChyZXN1bHRzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgRXZlbnRQYXR0ZXJuT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgZm4gPSBjcmVhdGVIYW5kbGVyKG8sIHRoaXMuX2ZuKTtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHRoaXMuX2FkZChmbik7XG4gICAgICByZXR1cm4gbmV3IEV2ZW50UGF0dGVybkRpc3Bvc2FibGUodGhpcy5fZGVsLCBmbiwgcmV0dXJuVmFsdWUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBFdmVudFBhdHRlcm5EaXNwb3NhYmxlKGRlbCwgZm4sIHJldCkge1xuICAgICAgdGhpcy5fZGVsID0gZGVsO1xuICAgICAgdGhpcy5fZm4gPSBmbjtcbiAgICAgIHRoaXMuX3JldCA9IHJldDtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIEV2ZW50UGF0dGVybkRpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZighdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgIGlzRnVuY3Rpb24odGhpcy5fZGVsKSAmJiB0aGlzLl9kZWwodGhpcy5fZm4sIHRoaXMuX3JldCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBFdmVudFBhdHRlcm5PYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBmcm9tIGFuIGV2ZW50IGVtaXR0ZXIgdmlhIGFuIGFkZEhhbmRsZXIvcmVtb3ZlSGFuZGxlciBwYWlyLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhZGRIYW5kbGVyIFRoZSBmdW5jdGlvbiB0byBhZGQgYSBoYW5kbGVyIHRvIHRoZSBlbWl0dGVyLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVtb3ZlSGFuZGxlcl0gVGhlIG9wdGlvbmFsIGZ1bmN0aW9uIHRvIHJlbW92ZSBhIGhhbmRsZXIgZnJvbSBhbiBlbWl0dGVyLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbc2VsZWN0b3JdIEEgc2VsZWN0b3Igd2hpY2ggdGFrZXMgdGhlIGFyZ3VtZW50cyBmcm9tIHRoZSBldmVudCBoYW5kbGVyIHRvIHByb2R1Y2UgYSBzaW5nbGUgaXRlbSB0byB5aWVsZCBvbiBuZXh0LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aGljaCB3cmFwcyBhbiBldmVudCBmcm9tIGFuIGV2ZW50IGVtaXR0ZXJcbiAgICovXG4gIHZhciBmcm9tRXZlbnRQYXR0ZXJuID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnRQYXR0ZXJuID0gZnVuY3Rpb24gKGFkZEhhbmRsZXIsIHJlbW92ZUhhbmRsZXIsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBFdmVudFBhdHRlcm5PYnNlcnZhYmxlKGFkZEhhbmRsZXIsIHJlbW92ZUhhbmRsZXIsIHNlbGVjdG9yKS5wdWJsaXNoKCkucmVmQ291bnQoKTtcbiAgfTtcblxuICB2YXIgRnJvbVByb21pc2VPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEZyb21Qcm9taXNlT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBGcm9tUHJvbWlzZU9ic2VydmFibGUocCwgcykge1xuICAgICAgdGhpcy5fcCA9IHA7XG4gICAgICB0aGlzLl9zID0gcztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlTmV4dChzLCBzdGF0ZSkge1xuICAgICAgdmFyIG8gPSBzdGF0ZVswXSwgZGF0YSA9IHN0YXRlWzFdO1xuICAgICAgby5vbk5leHQoZGF0YSk7XG4gICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2NoZWR1bGVFcnJvcihzLCBzdGF0ZSkge1xuICAgICAgdmFyIG8gPSBzdGF0ZVswXSwgZXJyID0gc3RhdGVbMV07XG4gICAgICBvLm9uRXJyb3IoZXJyKTtcbiAgICB9XG5cbiAgICBGcm9tUHJvbWlzZU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvKSB7XG4gICAgICB2YXIgc2FkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCksIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9wXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgc2FkLnNldERpc3Bvc2FibGUoc2VsZi5fcy5zY2hlZHVsZShbbywgZGF0YV0sIHNjaGVkdWxlTmV4dCkpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgc2FkLnNldERpc3Bvc2FibGUoc2VsZi5fcy5zY2hlZHVsZShbbywgZXJyXSwgc2NoZWR1bGVFcnJvcikpO1xuICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNhZDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEZyb21Qcm9taXNlT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAqIENvbnZlcnRzIGEgUHJvbWlzZSB0byBhbiBPYnNlcnZhYmxlIHNlcXVlbmNlXG4gICogQHBhcmFtIHtQcm9taXNlfSBBbiBFUzYgQ29tcGxpYW50IHByb21pc2UuXG4gICogQHJldHVybnMge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgc2VxdWVuY2Ugd2hpY2ggd3JhcHMgdGhlIGV4aXN0aW5nIHByb21pc2Ugc3VjY2VzcyBhbmQgZmFpbHVyZS5cbiAgKi9cbiAgdmFyIG9ic2VydmFibGVGcm9tUHJvbWlzZSA9IE9ic2VydmFibGUuZnJvbVByb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZSwgc2NoZWR1bGVyKSB7XG4gICAgc2NoZWR1bGVyIHx8IChzY2hlZHVsZXIgPSBkZWZhdWx0U2NoZWR1bGVyKTtcbiAgICByZXR1cm4gbmV3IEZyb21Qcm9taXNlT2JzZXJ2YWJsZShwcm9taXNlLCBzY2hlZHVsZXIpO1xuICB9O1xuXG4gIC8qXG4gICAqIENvbnZlcnRzIGFuIGV4aXN0aW5nIG9ic2VydmFibGUgc2VxdWVuY2UgdG8gYW4gRVM2IENvbXBhdGlibGUgUHJvbWlzZVxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcHJvbWlzZSA9IFJ4Lk9ic2VydmFibGUucmV0dXJuKDQyKS50b1Byb21pc2UoUlNWUC5Qcm9taXNlKTtcbiAgICpcbiAgICogLy8gV2l0aCBjb25maWdcbiAgICogUnguY29uZmlnLlByb21pc2UgPSBSU1ZQLlByb21pc2U7XG4gICAqIHZhciBwcm9taXNlID0gUnguT2JzZXJ2YWJsZS5yZXR1cm4oNDIpLnRvUHJvbWlzZSgpO1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvbWlzZUN0b3JdIFRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgcHJvbWlzZS4gSWYgbm90IHByb3ZpZGVkLCBpdCBsb29rcyBmb3IgaXQgaW4gUnguY29uZmlnLlByb21pc2UuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBBbiBFUzYgY29tcGF0aWJsZSBwcm9taXNlIHdpdGggdGhlIGxhc3QgdmFsdWUgZnJvbSB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by50b1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZUN0b3IpIHtcbiAgICBwcm9taXNlQ3RvciB8fCAocHJvbWlzZUN0b3IgPSBSeC5jb25maWcuUHJvbWlzZSk7XG4gICAgaWYgKCFwcm9taXNlQ3RvcikgeyB0aHJvdyBuZXcgTm90U3VwcG9ydGVkRXJyb3IoJ1Byb21pc2UgdHlwZSBub3QgcHJvdmlkZWQgbm9yIGluIFJ4LmNvbmZpZy5Qcm9taXNlJyk7IH1cbiAgICB2YXIgc291cmNlID0gdGhpcztcbiAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIE5vIGNhbmNlbGxhdGlvbiBjYW4gYmUgZG9uZVxuICAgICAgdmFyIHZhbHVlO1xuICAgICAgc291cmNlLnN1YnNjcmliZShmdW5jdGlvbiAodikge1xuICAgICAgICB2YWx1ZSA9IHY7XG4gICAgICB9LCByZWplY3QsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogSW52b2tlcyB0aGUgYXN5bmNocm9ub3VzIGZ1bmN0aW9uLCBzdXJmYWNpbmcgdGhlIHJlc3VsdCB0aHJvdWdoIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmN0aW9uQXN5bmMgQXN5bmNocm9ub3VzIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBQcm9taXNlIHRvIHJ1bi5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgZXhwb3NpbmcgdGhlIGZ1bmN0aW9uJ3MgcmVzdWx0IHZhbHVlLCBvciBhbiBleGNlcHRpb24uXG4gICAqL1xuICBPYnNlcnZhYmxlLnN0YXJ0QXN5bmMgPSBmdW5jdGlvbiAoZnVuY3Rpb25Bc3luYykge1xuICAgIHZhciBwcm9taXNlID0gdHJ5Q2F0Y2goZnVuY3Rpb25Bc3luYykoKTtcbiAgICBpZiAocHJvbWlzZSA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG9ic2VydmFibGVUaHJvdyhwcm9taXNlLmUpOyB9XG4gICAgcmV0dXJuIG9ic2VydmFibGVGcm9tUHJvbWlzZShwcm9taXNlKTtcbiAgfTtcblxuICB2YXIgTXVsdGljYXN0T2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoTXVsdGljYXN0T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBNdWx0aWNhc3RPYnNlcnZhYmxlKHNvdXJjZSwgZm4xLCBmbjIpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fZm4xID0gZm4xO1xuICAgICAgdGhpcy5fZm4yID0gZm4yO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTXVsdGljYXN0T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgY29ubmVjdGFibGUgPSB0aGlzLnNvdXJjZS5tdWx0aWNhc3QodGhpcy5fZm4xKCkpO1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKHRoaXMuX2ZuMihjb25uZWN0YWJsZSkuc3Vic2NyaWJlKG8pLCBjb25uZWN0YWJsZS5jb25uZWN0KCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTXVsdGljYXN0T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAgKiBNdWx0aWNhc3RzIHRoZSBzb3VyY2Ugc2VxdWVuY2Ugbm90aWZpY2F0aW9ucyB0aHJvdWdoIGFuIGluc3RhbnRpYXRlZCBzdWJqZWN0IGludG8gYWxsIHVzZXMgb2YgdGhlIHNlcXVlbmNlIHdpdGhpbiBhIHNlbGVjdG9yIGZ1bmN0aW9uLiBFYWNoXG4gICAqIHN1YnNjcmlwdGlvbiB0byB0aGUgcmVzdWx0aW5nIHNlcXVlbmNlIGNhdXNlcyBhIHNlcGFyYXRlIG11bHRpY2FzdCBpbnZvY2F0aW9uLCBleHBvc2luZyB0aGUgc2VxdWVuY2UgcmVzdWx0aW5nIGZyb20gdGhlIHNlbGVjdG9yIGZ1bmN0aW9uJ3NcbiAgICogaW52b2NhdGlvbi4gRm9yIHNwZWNpYWxpemF0aW9ucyB3aXRoIGZpeGVkIHN1YmplY3QgdHlwZXMsIHNlZSBQdWJsaXNoLCBQdWJsaXNoTGFzdCwgYW5kIFJlcGxheS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogMSAtIHJlcyA9IHNvdXJjZS5tdWx0aWNhc3Qob2JzZXJ2YWJsZSk7XG4gICAqIDIgLSByZXMgPSBzb3VyY2UubXVsdGljYXN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBTdWJqZWN0KCk7IH0sIGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9KTtcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbnxTdWJqZWN0fSBzdWJqZWN0T3JTdWJqZWN0U2VsZWN0b3JcbiAgICogRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gaW50ZXJtZWRpYXRlIHN1YmplY3QgdGhyb3VnaCB3aGljaCB0aGUgc291cmNlIHNlcXVlbmNlJ3MgZWxlbWVudHMgd2lsbCBiZSBtdWx0aWNhc3QgdG8gdGhlIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAgKiBPcjpcbiAgICogU3ViamVjdCB0byBwdXNoIHNvdXJjZSBlbGVtZW50cyBpbnRvLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbc2VsZWN0b3JdIE9wdGlvbmFsIHNlbGVjdG9yIGZ1bmN0aW9uIHdoaWNoIGNhbiB1c2UgdGhlIG11bHRpY2FzdGVkIHNvdXJjZSBzZXF1ZW5jZSBzdWJqZWN0IHRvIHRoZSBwb2xpY2llcyBlbmZvcmNlZCBieSB0aGUgY3JlYXRlZCBzdWJqZWN0LiBTcGVjaWZpZWQgb25seSBpZiA8cGFyYW1yZWYgbmFtZT1cInN1YmplY3RPclN1YmplY3RTZWxlY3RvclwiIGlzIGEgZmFjdG9yeSBmdW5jdGlvbi5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBwcm9kdWNlZCBieSBtdWx0aWNhc3RpbmcgdGhlIHNvdXJjZSBzZXF1ZW5jZSB3aXRoaW4gYSBzZWxlY3RvciBmdW5jdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5tdWx0aWNhc3QgPSBmdW5jdGlvbiAoc3ViamVjdE9yU3ViamVjdFNlbGVjdG9yLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHN1YmplY3RPclN1YmplY3RTZWxlY3RvcikgP1xuICAgICAgbmV3IE11bHRpY2FzdE9ic2VydmFibGUodGhpcywgc3ViamVjdE9yU3ViamVjdFNlbGVjdG9yLCBzZWxlY3RvcikgOlxuICAgICAgbmV3IENvbm5lY3RhYmxlT2JzZXJ2YWJsZSh0aGlzLCBzdWJqZWN0T3JTdWJqZWN0U2VsZWN0b3IpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGludm9raW5nIHRoZSBzZWxlY3RvciBvbiBhIGNvbm5lY3RhYmxlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBzaGFyZXMgYSBzaW5nbGUgc3Vic2NyaXB0aW9uIHRvIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlLlxuICAgKiBUaGlzIG9wZXJhdG9yIGlzIGEgc3BlY2lhbGl6YXRpb24gb2YgTXVsdGljYXN0IHVzaW5nIGEgcmVndWxhciBTdWJqZWN0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcmVzcmVzID0gc291cmNlLnB1Ymxpc2goKTtcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5wdWJsaXNoKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9KTtcbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3NlbGVjdG9yXSBTZWxlY3RvciBmdW5jdGlvbiB3aGljaCBjYW4gdXNlIHRoZSBtdWx0aWNhc3RlZCBzb3VyY2Ugc2VxdWVuY2UgYXMgbWFueSB0aW1lcyBhcyBuZWVkZWQsIHdpdGhvdXQgY2F1c2luZyBtdWx0aXBsZSBzdWJzY3JpcHRpb25zIHRvIHRoZSBzb3VyY2Ugc2VxdWVuY2UuIFN1YnNjcmliZXJzIHRvIHRoZSBnaXZlbiBzb3VyY2Ugd2lsbCByZWNlaXZlIGFsbCBub3RpZmljYXRpb25zIG9mIHRoZSBzb3VyY2UgZnJvbSB0aGUgdGltZSBvZiB0aGUgc3Vic2NyaXB0aW9uIG9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHByb2R1Y2VkIGJ5IG11bHRpY2FzdGluZyB0aGUgc291cmNlIHNlcXVlbmNlIHdpdGhpbiBhIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnB1Ymxpc2ggPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc2VsZWN0b3IgJiYgaXNGdW5jdGlvbihzZWxlY3RvcikgP1xuICAgICAgdGhpcy5tdWx0aWNhc3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFN1YmplY3QoKTsgfSwgc2VsZWN0b3IpIDpcbiAgICAgIHRoaXMubXVsdGljYXN0KG5ldyBTdWJqZWN0KCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBzaGFyZXMgYSBzaW5nbGUgc3Vic2NyaXB0aW9uIHRvIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlLlxuICAgKiBUaGlzIG9wZXJhdG9yIGlzIGEgc3BlY2lhbGl6YXRpb24gb2YgcHVibGlzaCB3aGljaCBjcmVhdGVzIGEgc3Vic2NyaXB0aW9uIHdoZW4gdGhlIG51bWJlciBvZiBvYnNlcnZlcnMgZ29lcyBmcm9tIHplcm8gdG8gb25lLCB0aGVuIHNoYXJlcyB0aGF0IHN1YnNjcmlwdGlvbiB3aXRoIGFsbCBzdWJzZXF1ZW50IG9ic2VydmVycyB1bnRpbCB0aGUgbnVtYmVyIG9mIG9ic2VydmVycyByZXR1cm5zIHRvIHplcm8sIGF0IHdoaWNoIHBvaW50IHRoZSBzdWJzY3JpcHRpb24gaXMgZGlzcG9zZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgcHJvZHVjZWQgYnkgbXVsdGljYXN0aW5nIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uc2hhcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucHVibGlzaCgpLnJlZkNvdW50KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGlzIHRoZSByZXN1bHQgb2YgaW52b2tpbmcgdGhlIHNlbGVjdG9yIG9uIGEgY29ubmVjdGFibGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHNoYXJlcyBhIHNpbmdsZSBzdWJzY3JpcHRpb24gdG8gdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UgY29udGFpbmluZyBvbmx5IHRoZSBsYXN0IG5vdGlmaWNhdGlvbi5cbiAgICogVGhpcyBvcGVyYXRvciBpcyBhIHNwZWNpYWxpemF0aW9uIG9mIE11bHRpY2FzdCB1c2luZyBhIEFzeW5jU3ViamVjdC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5wdWJsaXNoTGFzdCgpO1xuICAgKiB2YXIgcmVzID0gc291cmNlLnB1Ymxpc2hMYXN0KGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9KTtcbiAgICpcbiAgICogQHBhcmFtIHNlbGVjdG9yIFtPcHRpb25hbF0gU2VsZWN0b3IgZnVuY3Rpb24gd2hpY2ggY2FuIHVzZSB0aGUgbXVsdGljYXN0ZWQgc291cmNlIHNlcXVlbmNlIGFzIG1hbnkgdGltZXMgYXMgbmVlZGVkLCB3aXRob3V0IGNhdXNpbmcgbXVsdGlwbGUgc3Vic2NyaXB0aW9ucyB0byB0aGUgc291cmNlIHNlcXVlbmNlLiBTdWJzY3JpYmVycyB0byB0aGUgZ2l2ZW4gc291cmNlIHdpbGwgb25seSByZWNlaXZlIHRoZSBsYXN0IG5vdGlmaWNhdGlvbiBvZiB0aGUgc291cmNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHByb2R1Y2VkIGJ5IG11bHRpY2FzdGluZyB0aGUgc291cmNlIHNlcXVlbmNlIHdpdGhpbiBhIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnB1Ymxpc2hMYXN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yICYmIGlzRnVuY3Rpb24oc2VsZWN0b3IpID9cbiAgICAgIHRoaXMubXVsdGljYXN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBBc3luY1N1YmplY3QoKTsgfSwgc2VsZWN0b3IpIDpcbiAgICAgIHRoaXMubXVsdGljYXN0KG5ldyBBc3luY1N1YmplY3QoKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGlzIHRoZSByZXN1bHQgb2YgaW52b2tpbmcgdGhlIHNlbGVjdG9yIG9uIGEgY29ubmVjdGFibGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHNoYXJlcyBhIHNpbmdsZSBzdWJzY3JpcHRpb24gdG8gdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UgYW5kIHN0YXJ0cyB3aXRoIGluaXRpYWxWYWx1ZS5cbiAgICogVGhpcyBvcGVyYXRvciBpcyBhIHNwZWNpYWxpemF0aW9uIG9mIE11bHRpY2FzdCB1c2luZyBhIEJlaGF2aW9yU3ViamVjdC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5wdWJsaXNoVmFsdWUoNDIpO1xuICAgKiB2YXIgcmVzID0gc291cmNlLnB1Ymxpc2hWYWx1ZShmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5zZWxlY3QoZnVuY3Rpb24gKHkpIHsgcmV0dXJuIHkgKiB5OyB9KSB9LCA0Mik7XG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtzZWxlY3Rvcl0gT3B0aW9uYWwgc2VsZWN0b3IgZnVuY3Rpb24gd2hpY2ggY2FuIHVzZSB0aGUgbXVsdGljYXN0ZWQgc291cmNlIHNlcXVlbmNlIGFzIG1hbnkgdGltZXMgYXMgbmVlZGVkLCB3aXRob3V0IGNhdXNpbmcgbXVsdGlwbGUgc3Vic2NyaXB0aW9ucyB0byB0aGUgc291cmNlIHNlcXVlbmNlLiBTdWJzY3JpYmVycyB0byB0aGUgZ2l2ZW4gc291cmNlIHdpbGwgcmVjZWl2ZSBpbW1lZGlhdGVseSByZWNlaXZlIHRoZSBpbml0aWFsIHZhbHVlLCBmb2xsb3dlZCBieSBhbGwgbm90aWZpY2F0aW9ucyBvZiB0aGUgc291cmNlIGZyb20gdGhlIHRpbWUgb2YgdGhlIHN1YnNjcmlwdGlvbiBvbi5cbiAgICogQHBhcmFtIHtNaXhlZH0gaW5pdGlhbFZhbHVlIEluaXRpYWwgdmFsdWUgcmVjZWl2ZWQgYnkgb2JzZXJ2ZXJzIHVwb24gc3Vic2NyaXB0aW9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHByb2R1Y2VkIGJ5IG11bHRpY2FzdGluZyB0aGUgc291cmNlIHNlcXVlbmNlIHdpdGhpbiBhIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnB1Ymxpc2hWYWx1ZSA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVPclNlbGVjdG9yLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMiA/XG4gICAgICB0aGlzLm11bHRpY2FzdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KGluaXRpYWxWYWx1ZSk7XG4gICAgICB9LCBpbml0aWFsVmFsdWVPclNlbGVjdG9yKSA6XG4gICAgICB0aGlzLm11bHRpY2FzdChuZXcgQmVoYXZpb3JTdWJqZWN0KGluaXRpYWxWYWx1ZU9yU2VsZWN0b3IpKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgc2hhcmVzIGEgc2luZ2xlIHN1YnNjcmlwdGlvbiB0byB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZSBhbmQgc3RhcnRzIHdpdGggYW4gaW5pdGlhbFZhbHVlLlxuICAgKiBUaGlzIG9wZXJhdG9yIGlzIGEgc3BlY2lhbGl6YXRpb24gb2YgcHVibGlzaFZhbHVlIHdoaWNoIGNyZWF0ZXMgYSBzdWJzY3JpcHRpb24gd2hlbiB0aGUgbnVtYmVyIG9mIG9ic2VydmVycyBnb2VzIGZyb20gemVybyB0byBvbmUsIHRoZW4gc2hhcmVzIHRoYXQgc3Vic2NyaXB0aW9uIHdpdGggYWxsIHN1YnNlcXVlbnQgb2JzZXJ2ZXJzIHVudGlsIHRoZSBudW1iZXIgb2Ygb2JzZXJ2ZXJzIHJldHVybnMgdG8gemVybywgYXQgd2hpY2ggcG9pbnQgdGhlIHN1YnNjcmlwdGlvbiBpcyBkaXNwb3NlZC5cbiAgICogQHBhcmFtIHtNaXhlZH0gaW5pdGlhbFZhbHVlIEluaXRpYWwgdmFsdWUgcmVjZWl2ZWQgYnkgb2JzZXJ2ZXJzIHVwb24gc3Vic2NyaXB0aW9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHByb2R1Y2VkIGJ5IG11bHRpY2FzdGluZyB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnNoYXJlVmFsdWUgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucHVibGlzaFZhbHVlKGluaXRpYWxWYWx1ZSkucmVmQ291bnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBpbnZva2luZyB0aGUgc2VsZWN0b3Igb24gYSBjb25uZWN0YWJsZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgc2hhcmVzIGEgc2luZ2xlIHN1YnNjcmlwdGlvbiB0byB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZSByZXBsYXlpbmcgbm90aWZpY2F0aW9ucyBzdWJqZWN0IHRvIGEgbWF4aW11bSB0aW1lIGxlbmd0aCBmb3IgdGhlIHJlcGxheSBidWZmZXIuXG4gICAqIFRoaXMgb3BlcmF0b3IgaXMgYSBzcGVjaWFsaXphdGlvbiBvZiBNdWx0aWNhc3QgdXNpbmcgYSBSZXBsYXlTdWJqZWN0LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcmVzID0gc291cmNlLnJlcGxheShudWxsLCAzKTtcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5yZXBsYXkobnVsbCwgMywgNTAwKTtcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5yZXBsYXkobnVsbCwgMywgNTAwLCBzY2hlZHVsZXIpO1xuICAgKiB2YXIgcmVzID0gc291cmNlLnJlcGxheShmdW5jdGlvbiAoeCkgeyByZXR1cm4geC50YWtlKDYpLnJlcGVhdCgpOyB9LCAzLCA1MDAsIHNjaGVkdWxlcik7XG4gICAqXG4gICAqIEBwYXJhbSBzZWxlY3RvciBbT3B0aW9uYWxdIFNlbGVjdG9yIGZ1bmN0aW9uIHdoaWNoIGNhbiB1c2UgdGhlIG11bHRpY2FzdGVkIHNvdXJjZSBzZXF1ZW5jZSBhcyBtYW55IHRpbWVzIGFzIG5lZWRlZCwgd2l0aG91dCBjYXVzaW5nIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMgdG8gdGhlIHNvdXJjZSBzZXF1ZW5jZS4gU3Vic2NyaWJlcnMgdG8gdGhlIGdpdmVuIHNvdXJjZSB3aWxsIHJlY2VpdmUgYWxsIHRoZSBub3RpZmljYXRpb25zIG9mIHRoZSBzb3VyY2Ugc3ViamVjdCB0byB0aGUgc3BlY2lmaWVkIHJlcGxheSBidWZmZXIgdHJpbW1pbmcgcG9saWN5LlxuICAgKiBAcGFyYW0gYnVmZmVyU2l6ZSBbT3B0aW9uYWxdIE1heGltdW0gZWxlbWVudCBjb3VudCBvZiB0aGUgcmVwbGF5IGJ1ZmZlci5cbiAgICogQHBhcmFtIHdpbmRvd1NpemUgW09wdGlvbmFsXSBNYXhpbXVtIHRpbWUgbGVuZ3RoIG9mIHRoZSByZXBsYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0gc2NoZWR1bGVyIFtPcHRpb25hbF0gU2NoZWR1bGVyIHdoZXJlIGNvbm5lY3RlZCBvYnNlcnZlcnMgd2l0aGluIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgb24uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgcHJvZHVjZWQgYnkgbXVsdGljYXN0aW5nIHRoZSBzb3VyY2Ugc2VxdWVuY2Ugd2l0aGluIGEgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucmVwbGF5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBidWZmZXJTaXplLCB3aW5kb3dTaXplLCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2VsZWN0b3IgJiYgaXNGdW5jdGlvbihzZWxlY3RvcikgP1xuICAgICAgdGhpcy5tdWx0aWNhc3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFJlcGxheVN1YmplY3QoYnVmZmVyU2l6ZSwgd2luZG93U2l6ZSwgc2NoZWR1bGVyKTsgfSwgc2VsZWN0b3IpIDpcbiAgICAgIHRoaXMubXVsdGljYXN0KG5ldyBSZXBsYXlTdWJqZWN0KGJ1ZmZlclNpemUsIHdpbmRvd1NpemUsIHNjaGVkdWxlcikpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBzaGFyZXMgYSBzaW5nbGUgc3Vic2NyaXB0aW9uIHRvIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlIHJlcGxheWluZyBub3RpZmljYXRpb25zIHN1YmplY3QgdG8gYSBtYXhpbXVtIHRpbWUgbGVuZ3RoIGZvciB0aGUgcmVwbGF5IGJ1ZmZlci5cbiAgICogVGhpcyBvcGVyYXRvciBpcyBhIHNwZWNpYWxpemF0aW9uIG9mIHJlcGxheSB3aGljaCBjcmVhdGVzIGEgc3Vic2NyaXB0aW9uIHdoZW4gdGhlIG51bWJlciBvZiBvYnNlcnZlcnMgZ29lcyBmcm9tIHplcm8gdG8gb25lLCB0aGVuIHNoYXJlcyB0aGF0IHN1YnNjcmlwdGlvbiB3aXRoIGFsbCBzdWJzZXF1ZW50IG9ic2VydmVycyB1bnRpbCB0aGUgbnVtYmVyIG9mIG9ic2VydmVycyByZXR1cm5zIHRvIHplcm8sIGF0IHdoaWNoIHBvaW50IHRoZSBzdWJzY3JpcHRpb24gaXMgZGlzcG9zZWQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciByZXMgPSBzb3VyY2Uuc2hhcmVSZXBsYXkoMyk7XG4gICAqIHZhciByZXMgPSBzb3VyY2Uuc2hhcmVSZXBsYXkoMywgNTAwKTtcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5zaGFyZVJlcGxheSgzLCA1MDAsIHNjaGVkdWxlcik7XG4gICAqXG5cbiAgICogQHBhcmFtIGJ1ZmZlclNpemUgW09wdGlvbmFsXSBNYXhpbXVtIGVsZW1lbnQgY291bnQgb2YgdGhlIHJlcGxheSBidWZmZXIuXG4gICAqIEBwYXJhbSB3aW5kb3cgW09wdGlvbmFsXSBNYXhpbXVtIHRpbWUgbGVuZ3RoIG9mIHRoZSByZXBsYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0gc2NoZWR1bGVyIFtPcHRpb25hbF0gU2NoZWR1bGVyIHdoZXJlIGNvbm5lY3RlZCBvYnNlcnZlcnMgd2l0aGluIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgb24uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgcHJvZHVjZWQgYnkgbXVsdGljYXN0aW5nIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uc2hhcmVSZXBsYXkgPSBmdW5jdGlvbiAoYnVmZmVyU2l6ZSwgd2luZG93U2l6ZSwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGF5KG51bGwsIGJ1ZmZlclNpemUsIHdpbmRvd1NpemUsIHNjaGVkdWxlcikucmVmQ291bnQoKTtcbiAgfTtcblxuICB2YXIgUmVmQ291bnRPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhSZWZDb3VudE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gUmVmQ291bnRPYnNlcnZhYmxlKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgICB0aGlzLl9jb25uZWN0YWJsZVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBSZWZDb3VudE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIHNob3VsZENvbm5lY3QgPSArK3RoaXMuX2NvdW50ID09PSAxLCBzdWJzY3JpcHRpb24gPSB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobyk7XG4gICAgICBzaG91bGRDb25uZWN0ICYmICh0aGlzLl9jb25uZWN0YWJsZVN1YnNjcmlwdGlvbiA9IHRoaXMuc291cmNlLmNvbm5lY3QoKSk7XG4gICAgICByZXR1cm4gbmV3IFJlZkNvdW50RGlzcG9zYWJsZSh0aGlzLCBzdWJzY3JpcHRpb24pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBSZWZDb3VudERpc3Bvc2FibGUocCwgcykge1xuICAgICAgdGhpcy5fcCA9IHA7XG4gICAgICB0aGlzLl9zID0gcztcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIFJlZkNvdW50RGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3MuZGlzcG9zZSgpO1xuICAgICAgICAtLXRoaXMuX3AuX2NvdW50ID09PSAwICYmIHRoaXMuX3AuX2Nvbm5lY3RhYmxlU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlZkNvdW50T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBDb25uZWN0YWJsZU9ic2VydmFibGUgPSBSeC5Db25uZWN0YWJsZU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKENvbm5lY3RhYmxlT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDb25uZWN0YWJsZU9ic2VydmFibGUoc291cmNlLCBzdWJqZWN0KSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX2hhc1N1YnNjcmlwdGlvbiAgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLl9zb3VyY2VPYnNlcnZhYmxlID0gc291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgdGhpcy5fc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBDb25uZWN0RGlzcG9zYWJsZShwYXJlbnQpIHtcbiAgICAgIHRoaXMuX3AgPSBwYXJlbnQ7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBDb25uZWN0RGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3AuX2hhc1N1YnNjcmlwdGlvbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuX2hhc1N1YnNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLl9oYXNTdWJzY3JpcHRpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBuZXcgQmluYXJ5RGlzcG9zYWJsZShcbiAgICAgICAgICB0aGlzLl9zb3VyY2VPYnNlcnZhYmxlLnN1YnNjcmliZSh0aGlzLl9zdWJqZWN0KSxcbiAgICAgICAgICBuZXcgQ29ubmVjdERpc3Bvc2FibGUodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb247XG4gICAgfTtcblxuICAgIENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3ViamVjdC5zdWJzY3JpYmUobyk7XG4gICAgfTtcblxuICAgIENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUucmVmQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IFJlZkNvdW50T2JzZXJ2YWJsZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENvbm5lY3RhYmxlT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgdmFyIFRpbWVyT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUaW1lck9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gVGltZXJPYnNlcnZhYmxlKGR0LCBzKSB7XG4gICAgICB0aGlzLl9kdCA9IGR0O1xuICAgICAgdGhpcy5fcyA9IHM7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUaW1lck9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuX3Muc2NoZWR1bGVGdXR1cmUobywgdGhpcy5fZHQsIHNjaGVkdWxlTWV0aG9kKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2NoZWR1bGVNZXRob2Qocywgbykge1xuICAgICAgby5vbk5leHQoMCk7XG4gICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRpbWVyT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIGZ1bmN0aW9uIF9vYnNlcnZhYmxlVGltZXIoZHVlVGltZSwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBUaW1lck9ic2VydmFibGUoZHVlVGltZSwgc2NoZWR1bGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGVUaW1lckRhdGVBbmRQZXJpb2QoZHVlVGltZSwgcGVyaW9kLCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICB2YXIgZCA9IGR1ZVRpbWUsIHAgPSBub3JtYWxpemVUaW1lKHBlcmlvZCk7XG4gICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlRnV0dXJlKDAsIGQsIGZ1bmN0aW9uIChjb3VudCwgc2VsZikge1xuICAgICAgICBpZiAocCA+IDApIHtcbiAgICAgICAgICB2YXIgbm93ID0gc2NoZWR1bGVyLm5vdygpO1xuICAgICAgICAgIGQgPSBuZXcgRGF0ZShkLmdldFRpbWUoKSArIHApO1xuICAgICAgICAgIGQuZ2V0VGltZSgpIDw9IG5vdyAmJiAoZCA9IG5ldyBEYXRlKG5vdyArIHApKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5vbk5leHQoY291bnQpO1xuICAgICAgICBzZWxmKGNvdW50ICsgMSwgbmV3IERhdGUoZCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlVGltZXJUaW1lU3BhbkFuZFBlcmlvZChkdWVUaW1lLCBwZXJpb2QsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBkdWVUaW1lID09PSBwZXJpb2QgP1xuICAgICAgbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGVQZXJpb2RpYygwLCBwZXJpb2QsIGZ1bmN0aW9uIChjb3VudCkge1xuICAgICAgICAgIG9ic2VydmVyLm9uTmV4dChjb3VudCk7XG4gICAgICAgICAgcmV0dXJuIGNvdW50ICsgMTtcbiAgICAgICAgfSk7XG4gICAgICB9KSA6XG4gICAgICBvYnNlcnZhYmxlRGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZVRpbWVyRGF0ZUFuZFBlcmlvZChuZXcgRGF0ZShzY2hlZHVsZXIubm93KCkgKyBkdWVUaW1lKSwgcGVyaW9kLCBzY2hlZHVsZXIpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHByb2R1Y2VzIGEgdmFsdWUgYWZ0ZXIgZWFjaCBwZXJpb2QuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAxIC0gcmVzID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAgICogIDIgLSByZXMgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDAsIFJ4LlNjaGVkdWxlci50aW1lb3V0KTtcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBlcmlvZCBQZXJpb2QgZm9yIHByb2R1Y2luZyB0aGUgdmFsdWVzIGluIHRoZSByZXN1bHRpbmcgc2VxdWVuY2UgKHNwZWNpZmllZCBhcyBhbiBpbnRlZ2VyIGRlbm90aW5nIG1pbGxpc2Vjb25kcykuXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBTY2hlZHVsZXIgdG8gcnVuIHRoZSB0aW1lciBvbi4gSWYgbm90IHNwZWNpZmllZCwgUnguU2NoZWR1bGVyLnRpbWVvdXQgaXMgdXNlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBwcm9kdWNlcyBhIHZhbHVlIGFmdGVyIGVhY2ggcGVyaW9kLlxuICAgKi9cbiAgdmFyIG9ic2VydmFibGVpbnRlcnZhbCA9IE9ic2VydmFibGUuaW50ZXJ2YWwgPSBmdW5jdGlvbiAocGVyaW9kLCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZVRpbWVyVGltZVNwYW5BbmRQZXJpb2QocGVyaW9kLCBwZXJpb2QsIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgPyBzY2hlZHVsZXIgOiBkZWZhdWx0U2NoZWR1bGVyKTtcbiAgfTtcblxuICAvKipcbiAgICogIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHByb2R1Y2VzIGEgdmFsdWUgYWZ0ZXIgZHVlVGltZSBoYXMgZWxhcHNlZCBhbmQgdGhlbiBhZnRlciBlYWNoIHBlcmlvZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1ZVRpbWUgQWJzb2x1dGUgKHNwZWNpZmllZCBhcyBhIERhdGUgb2JqZWN0KSBvciByZWxhdGl2ZSB0aW1lIChzcGVjaWZpZWQgYXMgYW4gaW50ZWdlciBkZW5vdGluZyBtaWxsaXNlY29uZHMpIGF0IHdoaWNoIHRvIHByb2R1Y2UgdGhlIGZpcnN0IHZhbHVlLlxuICAgKiBAcGFyYW0ge01peGVkfSBbcGVyaW9kT3JTY2hlZHVsZXJdICBQZXJpb2QgdG8gcHJvZHVjZSBzdWJzZXF1ZW50IHZhbHVlcyAoc3BlY2lmaWVkIGFzIGFuIGludGVnZXIgZGVub3RpbmcgbWlsbGlzZWNvbmRzKSwgb3IgdGhlIHNjaGVkdWxlciB0byBydW4gdGhlIHRpbWVyIG9uLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgcmVzdWx0aW5nIHRpbWVyIGlzIG5vdCByZWN1cnJpbmcuXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSAgU2NoZWR1bGVyIHRvIHJ1biB0aGUgdGltZXIgb24uIElmIG5vdCBzcGVjaWZpZWQsIHRoZSB0aW1lb3V0IHNjaGVkdWxlciBpcyB1c2VkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHByb2R1Y2VzIGEgdmFsdWUgYWZ0ZXIgZHVlIHRpbWUgaGFzIGVsYXBzZWQgYW5kIHRoZW4gZWFjaCBwZXJpb2QuXG4gICAqL1xuICB2YXIgb2JzZXJ2YWJsZVRpbWVyID0gT2JzZXJ2YWJsZS50aW1lciA9IGZ1bmN0aW9uIChkdWVUaW1lLCBwZXJpb2RPclNjaGVkdWxlciwgc2NoZWR1bGVyKSB7XG4gICAgdmFyIHBlcmlvZDtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBkZWZhdWx0U2NoZWR1bGVyKTtcbiAgICBpZiAocGVyaW9kT3JTY2hlZHVsZXIgIT0gbnVsbCAmJiB0eXBlb2YgcGVyaW9kT3JTY2hlZHVsZXIgPT09ICdudW1iZXInKSB7XG4gICAgICBwZXJpb2QgPSBwZXJpb2RPclNjaGVkdWxlcjtcbiAgICB9IGVsc2UgaWYgKGlzU2NoZWR1bGVyKHBlcmlvZE9yU2NoZWR1bGVyKSkge1xuICAgICAgc2NoZWR1bGVyID0gcGVyaW9kT3JTY2hlZHVsZXI7XG4gICAgfVxuICAgIGlmICgoZHVlVGltZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGR1ZVRpbWUgPT09ICdudW1iZXInKSAmJiBwZXJpb2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9vYnNlcnZhYmxlVGltZXIoZHVlVGltZSwgc2NoZWR1bGVyKTtcbiAgICB9XG4gICAgaWYgKGR1ZVRpbWUgaW5zdGFuY2VvZiBEYXRlICYmIHBlcmlvZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZVRpbWVyRGF0ZUFuZFBlcmlvZChkdWVUaW1lLmdldFRpbWUoKSwgcGVyaW9kT3JTY2hlZHVsZXIsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIHJldHVybiBvYnNlcnZhYmxlVGltZXJUaW1lU3BhbkFuZFBlcmlvZChkdWVUaW1lLCBwZXJpb2QsIHNjaGVkdWxlcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZURlbGF5UmVsYXRpdmUoc291cmNlLCBkdWVUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBhY3RpdmUgPSBmYWxzZSxcbiAgICAgICAgY2FuY2VsYWJsZSA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCksXG4gICAgICAgIGV4Y2VwdGlvbiA9IG51bGwsXG4gICAgICAgIHEgPSBbXSxcbiAgICAgICAgcnVubmluZyA9IGZhbHNlLFxuICAgICAgICBzdWJzY3JpcHRpb247XG4gICAgICBzdWJzY3JpcHRpb24gPSBzb3VyY2UubWF0ZXJpYWxpemUoKS50aW1lc3RhbXAoc2NoZWR1bGVyKS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICB2YXIgZCwgc2hvdWxkUnVuO1xuICAgICAgICBpZiAobm90aWZpY2F0aW9uLnZhbHVlLmtpbmQgPT09ICdFJykge1xuICAgICAgICAgIHEgPSBbXTtcbiAgICAgICAgICBxLnB1c2gobm90aWZpY2F0aW9uKTtcbiAgICAgICAgICBleGNlcHRpb24gPSBub3RpZmljYXRpb24udmFsdWUuZXJyb3I7XG4gICAgICAgICAgc2hvdWxkUnVuID0gIXJ1bm5pbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcS5wdXNoKHsgdmFsdWU6IG5vdGlmaWNhdGlvbi52YWx1ZSwgdGltZXN0YW1wOiBub3RpZmljYXRpb24udGltZXN0YW1wICsgZHVlVGltZSB9KTtcbiAgICAgICAgICBzaG91bGRSdW4gPSAhYWN0aXZlO1xuICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFJ1bikge1xuICAgICAgICAgIGlmIChleGNlcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIG8ub25FcnJvcihleGNlcHRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgICAgICBjYW5jZWxhYmxlLnNldERpc3Bvc2FibGUoZCk7XG4gICAgICAgICAgICBkLnNldERpc3Bvc2FibGUoc2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlRnV0dXJlKG51bGwsIGR1ZVRpbWUsIGZ1bmN0aW9uIChfLCBzZWxmKSB7XG4gICAgICAgICAgICAgIHZhciBlLCByZWN1cnNlRHVlVGltZSwgcmVzdWx0LCBzaG91bGRSZWN1cnNlO1xuICAgICAgICAgICAgICBpZiAoZXhjZXB0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAocS5sZW5ndGggPiAwICYmIHFbMF0udGltZXN0YW1wIC0gc2NoZWR1bGVyLm5vdygpIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHEuc2hpZnQoKS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0LmFjY2VwdChvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gd2hpbGUgKHJlc3VsdCAhPT0gbnVsbCk7XG4gICAgICAgICAgICAgIHNob3VsZFJlY3Vyc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmVjdXJzZUR1ZVRpbWUgPSAwO1xuICAgICAgICAgICAgICBpZiAocS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkUmVjdXJzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVjdXJzZUR1ZVRpbWUgPSBNYXRoLm1heCgwLCBxWzBdLnRpbWVzdGFtcCAtIHNjaGVkdWxlci5ub3coKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZSA9IGV4Y2VwdGlvbjtcbiAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG8ub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRSZWN1cnNlKSB7XG4gICAgICAgICAgICAgICAgc2VsZihudWxsLCByZWN1cnNlRHVlVGltZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKHN1YnNjcmlwdGlvbiwgY2FuY2VsYWJsZSk7XG4gICAgfSwgc291cmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGVEZWxheUFic29sdXRlKHNvdXJjZSwgZHVlVGltZSwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVEZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZURlbGF5UmVsYXRpdmUoc291cmNlLCBkdWVUaW1lIC0gc2NoZWR1bGVyLm5vdygpLCBzY2hlZHVsZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsYXlXaXRoU2VsZWN0b3Ioc291cmNlLCBzdWJzY3JpcHRpb25EZWxheSwgZGVsYXlEdXJhdGlvblNlbGVjdG9yKSB7XG4gICAgdmFyIHN1YkRlbGF5LCBzZWxlY3RvcjtcbiAgICBpZiAoaXNGdW5jdGlvbihzdWJzY3JpcHRpb25EZWxheSkpIHtcbiAgICAgIHNlbGVjdG9yID0gc3Vic2NyaXB0aW9uRGVsYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YkRlbGF5ID0gc3Vic2NyaXB0aW9uRGVsYXk7XG4gICAgICBzZWxlY3RvciA9IGRlbGF5RHVyYXRpb25TZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgZGVsYXlzID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKSwgYXRFbmQgPSBmYWxzZSwgc3Vic2NyaXB0aW9uID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKTtcblxuICAgICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICAgICAgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHZhciBkZWxheSA9IHRyeUNhdGNoKHNlbGVjdG9yKSh4KTtcbiAgICAgICAgICAgIGlmIChkZWxheSA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihkZWxheS5lKTsgfVxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgICAgIGRlbGF5cy5hZGQoZCk7XG4gICAgICAgICAgICBkLnNldERpc3Bvc2FibGUoZGVsYXkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgby5vbk5leHQoeCk7XG4gICAgICAgICAgICAgICAgZGVsYXlzLnJlbW92ZShkKTtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7IG8ub25FcnJvcihlKTsgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG8ub25OZXh0KHgpO1xuICAgICAgICAgICAgICAgIGRlbGF5cy5yZW1vdmUoZCk7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7IG8ub25FcnJvcihlKTsgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhdEVuZCA9IHRydWU7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUgKCkge1xuICAgICAgICBhdEVuZCAmJiBkZWxheXMubGVuZ3RoID09PSAwICYmIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzdWJEZWxheSkge1xuICAgICAgICBzdGFydCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUoc3ViRGVsYXkuc3Vic2NyaWJlKHN0YXJ0LCBmdW5jdGlvbiAoZSkgeyBvLm9uRXJyb3IoZSk7IH0sIHN0YXJ0KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShzdWJzY3JpcHRpb24sIGRlbGF5cyk7XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogIFRpbWUgc2hpZnRzIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGJ5IGR1ZVRpbWUuXG4gICAqICBUaGUgcmVsYXRpdmUgdGltZSBpbnRlcnZhbHMgYmV0d2VlbiB0aGUgdmFsdWVzIGFyZSBwcmVzZXJ2ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdWVUaW1lIEFic29sdXRlIChzcGVjaWZpZWQgYXMgYSBEYXRlIG9iamVjdCkgb3IgcmVsYXRpdmUgdGltZSAoc3BlY2lmaWVkIGFzIGFuIGludGVnZXIgZGVub3RpbmcgbWlsbGlzZWNvbmRzKSBieSB3aGljaCB0byBzaGlmdCB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIFNjaGVkdWxlciB0byBydW4gdGhlIGRlbGF5IHRpbWVycyBvbi4gSWYgbm90IHNwZWNpZmllZCwgdGhlIHRpbWVvdXQgc2NoZWR1bGVyIGlzIHVzZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaW1lLXNoaWZ0ZWQgc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uZGVsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpcnN0QXJnID0gYXJndW1lbnRzWzBdO1xuICAgIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09ICdudW1iZXInIHx8IGZpcnN0QXJnIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgdmFyIGR1ZVRpbWUgPSBmaXJzdEFyZywgc2NoZWR1bGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gZGVmYXVsdFNjaGVkdWxlcik7XG4gICAgICByZXR1cm4gZHVlVGltZSBpbnN0YW5jZW9mIERhdGUgP1xuICAgICAgICBvYnNlcnZhYmxlRGVsYXlBYnNvbHV0ZSh0aGlzLCBkdWVUaW1lLCBzY2hlZHVsZXIpIDpcbiAgICAgICAgb2JzZXJ2YWJsZURlbGF5UmVsYXRpdmUodGhpcywgZHVlVGltZSwgc2NoZWR1bGVyKTtcbiAgICB9IGVsc2UgaWYgKE9ic2VydmFibGUuaXNPYnNlcnZhYmxlKGZpcnN0QXJnKSB8fCBpc0Z1bmN0aW9uKGZpcnN0QXJnKSkge1xuICAgICAgcmV0dXJuIGRlbGF5V2l0aFNlbGVjdG9yKHRoaXMsIGZpcnN0QXJnLCBhcmd1bWVudHNbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBEZWJvdW5jZU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKERlYm91bmNlT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBEZWJvdW5jZU9ic2VydmFibGUoc291cmNlLCBkdCwgcykge1xuICAgICAgaXNTY2hlZHVsZXIocykgfHwgKHMgPSBkZWZhdWx0U2NoZWR1bGVyKTtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fZHQgPSBkdDtcbiAgICAgIHRoaXMuX3MgPSBzO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRGVib3VuY2VPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBjYW5jZWxhYmxlID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKTtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShcbiAgICAgICAgdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBEZWJvdW5jZU9ic2VydmVyKG8sIHRoaXMuc291cmNlLCB0aGlzLl9kdCwgdGhpcy5fcywgY2FuY2VsYWJsZSkpLFxuICAgICAgICBjYW5jZWxhYmxlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERlYm91bmNlT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBEZWJvdW5jZU9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhEZWJvdW5jZU9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIERlYm91bmNlT2JzZXJ2ZXIob2JzZXJ2ZXIsIHNvdXJjZSwgZHVlVGltZSwgc2NoZWR1bGVyLCBjYW5jZWxhYmxlKSB7XG4gICAgICB0aGlzLl9vID0gb2JzZXJ2ZXI7XG4gICAgICB0aGlzLl9zID0gc291cmNlO1xuICAgICAgdGhpcy5fZCA9IGR1ZVRpbWU7XG4gICAgICB0aGlzLl9zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICB0aGlzLl9jID0gY2FuY2VsYWJsZTtcbiAgICAgIHRoaXMuX3YgPSBudWxsO1xuICAgICAgdGhpcy5faHYgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lkID0gMDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIERlYm91bmNlT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5faHYgPSB0cnVlO1xuICAgICAgdGhpcy5fdiA9IHg7XG4gICAgICB2YXIgY3VycmVudElkID0gKyt0aGlzLl9pZCwgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgdGhpcy5fYy5zZXREaXNwb3NhYmxlKGQpO1xuICAgICAgZC5zZXREaXNwb3NhYmxlKHRoaXMuX3NjaGVkdWxlci5zY2hlZHVsZUZ1dHVyZSh0aGlzLCB0aGlzLl9kLCBmdW5jdGlvbiAoXywgc2VsZikge1xuICAgICAgICBzZWxmLl9odiAmJiBzZWxmLl9pZCA9PT0gY3VycmVudElkICYmIHNlbGYuX28ub25OZXh0KHgpO1xuICAgICAgICBzZWxmLl9odiA9IGZhbHNlO1xuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBEZWJvdW5jZU9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9jLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlKTtcbiAgICAgIHRoaXMuX2h2ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pZCsrO1xuICAgIH07XG5cbiAgICBEZWJvdW5jZU9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9jLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX2h2ICYmIHRoaXMuX28ub25OZXh0KHRoaXMuX3YpO1xuICAgICAgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgICAgdGhpcy5faHYgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lkKys7XG4gICAgfTtcblxuICAgIHJldHVybiBEZWJvdW5jZU9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICBmdW5jdGlvbiBkZWJvdW5jZVdpdGhTZWxlY3Rvcihzb3VyY2UsIGR1cmF0aW9uU2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciB2YWx1ZSwgaGFzVmFsdWUgPSBmYWxzZSwgY2FuY2VsYWJsZSA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCksIGlkID0gMDtcbiAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgICBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHZhciB0aHJvdHRsZSA9IHRyeUNhdGNoKGR1cmF0aW9uU2VsZWN0b3IpKHgpO1xuICAgICAgICAgIGlmICh0aHJvdHRsZSA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcih0aHJvdHRsZS5lKTsgfVxuXG4gICAgICAgICAgaXNQcm9taXNlKHRocm90dGxlKSAmJiAodGhyb3R0bGUgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UodGhyb3R0bGUpKTtcblxuICAgICAgICAgIGhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZSA9IHg7XG4gICAgICAgICAgaWQrKztcbiAgICAgICAgICB2YXIgY3VycmVudGlkID0gaWQsIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgICBjYW5jZWxhYmxlLnNldERpc3Bvc2FibGUoZCk7XG4gICAgICAgICAgZC5zZXREaXNwb3NhYmxlKHRocm90dGxlLnN1YnNjcmliZShcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaGFzVmFsdWUgJiYgaWQgPT09IGN1cnJlbnRpZCAmJiBvLm9uTmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgIGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7IG8ub25FcnJvcihlKTsgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaGFzVmFsdWUgJiYgaWQgPT09IGN1cnJlbnRpZCAmJiBvLm9uTmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgIGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGQuZGlzcG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICkpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGNhbmNlbGFibGUuZGlzcG9zZSgpO1xuICAgICAgICAgIG8ub25FcnJvcihlKTtcbiAgICAgICAgICBoYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgIGlkKys7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYW5jZWxhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgICBoYXNWYWx1ZSAmJiBvLm9uTmV4dCh2YWx1ZSk7XG4gICAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgIGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgaWQrKztcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShzdWJzY3JpcHRpb24sIGNhbmNlbGFibGUpO1xuICAgIH0sIHNvdXJjZSk7XG4gIH1cblxuICBvYnNlcnZhYmxlUHJvdG8uZGVib3VuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24gKGFyZ3VtZW50c1swXSkpIHtcbiAgICAgIHJldHVybiBkZWJvdW5jZVdpdGhTZWxlY3Rvcih0aGlzLCBhcmd1bWVudHNbMF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBuZXcgRGVib3VuY2VPYnNlcnZhYmxlKHRoaXMsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgVGltZXN0YW1wT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGltZXN0YW1wT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBUaW1lc3RhbXBPYnNlcnZhYmxlKHNvdXJjZSwgcykge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9zID0gcztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRpbWVzdGFtcE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgVGltZXN0YW1wT2JzZXJ2ZXIobywgdGhpcy5fcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGltZXN0YW1wT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBUaW1lc3RhbXBPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGltZXN0YW1wT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gVGltZXN0YW1wT2JzZXJ2ZXIobywgcykge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9zID0gcztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRpbWVzdGFtcE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX28ub25OZXh0KHsgdmFsdWU6IHgsIHRpbWVzdGFtcDogdGhpcy5fcy5ub3coKSB9KTtcbiAgICB9O1xuXG4gICAgVGltZXN0YW1wT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgVGltZXN0YW1wT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRpbWVzdGFtcE9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogIFJlY29yZHMgdGhlIHRpbWVzdGFtcCBmb3IgZWFjaCB2YWx1ZSBpbiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgMSAtIHJlcyA9IHNvdXJjZS50aW1lc3RhbXAoKTsgLy8gcHJvZHVjZXMgeyB2YWx1ZTogeCwgdGltZXN0YW1wOiB0cyB9XG4gICAqICAyIC0gcmVzID0gc291cmNlLnRpbWVzdGFtcChSeC5TY2hlZHVsZXIuZGVmYXVsdCk7XG4gICAqXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSAgU2NoZWR1bGVyIHVzZWQgdG8gY29tcHV0ZSB0aW1lc3RhbXBzLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgZGVmYXVsdCBzY2hlZHVsZXIgaXMgdXNlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2Ugd2l0aCB0aW1lc3RhbXAgaW5mb3JtYXRpb24gb24gdmFsdWVzLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnRpbWVzdGFtcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBkZWZhdWx0U2NoZWR1bGVyKTtcbiAgICByZXR1cm4gbmV3IFRpbWVzdGFtcE9ic2VydmFibGUodGhpcywgc2NoZWR1bGVyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBzYW1wbGVPYnNlcnZhYmxlKHNvdXJjZSwgc2FtcGxlcikge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGF0RW5kID0gZmFsc2UsIHZhbHVlLCBoYXNWYWx1ZSA9IGZhbHNlO1xuXG4gICAgICBmdW5jdGlvbiBzYW1wbGVTdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmIChoYXNWYWx1ZSkge1xuICAgICAgICAgIGhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgby5vbk5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGF0RW5kICYmIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZVN1YnNjcmlwdGlvbiA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgc291cmNlU3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUoc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgaGFzVmFsdWUgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7IG8ub25FcnJvcihlKTsgfSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGF0RW5kID0gdHJ1ZTtcbiAgICAgICAgICBzb3VyY2VTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICApKTtcblxuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKFxuICAgICAgICBzb3VyY2VTdWJzY3JpcHRpb24sXG4gICAgICAgIHNhbXBsZXIuc3Vic2NyaWJlKHNhbXBsZVN1YnNjcmliZSwgZnVuY3Rpb24gKGUpIHsgby5vbkVycm9yKGUpOyB9LCBzYW1wbGVTdWJzY3JpYmUpXG4gICAgICApO1xuICAgIH0sIHNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogIFNhbXBsZXMgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UgYXQgZWFjaCBpbnRlcnZhbC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogIDEgLSByZXMgPSBzb3VyY2Uuc2FtcGxlKHNhbXBsZU9ic2VydmFibGUpOyAvLyBTYW1wbGVyIHRpY2sgc2VxdWVuY2VcbiAgICogIDIgLSByZXMgPSBzb3VyY2Uuc2FtcGxlKDUwMDApOyAvLyA1IHNlY29uZHNcbiAgICogIDIgLSByZXMgPSBzb3VyY2Uuc2FtcGxlKDUwMDAsIFJ4LlNjaGVkdWxlci50aW1lb3V0KTsgLy8gNSBzZWNvbmRzXG4gICAqXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGludGVydmFsT3JTYW1wbGVyIEludGVydmFsIGF0IHdoaWNoIHRvIHNhbXBsZSAoc3BlY2lmaWVkIGFzIGFuIGludGVnZXIgZGVub3RpbmcgbWlsbGlzZWNvbmRzKSBvciBTYW1wbGVyIE9ic2VydmFibGUuXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSAgU2NoZWR1bGVyIHRvIHJ1biB0aGUgc2FtcGxpbmcgdGltZXIgb24uIElmIG5vdCBzcGVjaWZpZWQsIHRoZSB0aW1lb3V0IHNjaGVkdWxlciBpcyB1c2VkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gU2FtcGxlZCBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnNhbXBsZSA9IG9ic2VydmFibGVQcm90by50aHJvdHRsZUxhdGVzdCA9IGZ1bmN0aW9uIChpbnRlcnZhbE9yU2FtcGxlciwgc2NoZWR1bGVyKSB7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gZGVmYXVsdFNjaGVkdWxlcik7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnRlcnZhbE9yU2FtcGxlciA9PT0gJ251bWJlcicgP1xuICAgICAgc2FtcGxlT2JzZXJ2YWJsZSh0aGlzLCBvYnNlcnZhYmxlaW50ZXJ2YWwoaW50ZXJ2YWxPclNhbXBsZXIsIHNjaGVkdWxlcikpIDpcbiAgICAgIHNhbXBsZU9ic2VydmFibGUodGhpcywgaW50ZXJ2YWxPclNhbXBsZXIpO1xuICB9O1xuXG4gIHZhciBUaW1lb3V0RXJyb3IgPSBSeC5UaW1lb3V0RXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCAnVGltZW91dCBoYXMgb2NjdXJyZWQnO1xuICAgIHRoaXMubmFtZSA9ICdUaW1lb3V0RXJyb3InO1xuICAgIEVycm9yLmNhbGwodGhpcyk7XG4gIH07XG4gIFRpbWVvdXRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5cbiAgZnVuY3Rpb24gdGltZW91dFdpdGhTZWxlY3Rvcihzb3VyY2UsIGZpcnN0VGltZW91dCwgdGltZW91dER1cmF0aW9uU2VsZWN0b3IsIG90aGVyKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZmlyc3RUaW1lb3V0KSkge1xuICAgICAgb3RoZXIgPSB0aW1lb3V0RHVyYXRpb25TZWxlY3RvcjtcbiAgICAgIHRpbWVvdXREdXJhdGlvblNlbGVjdG9yID0gZmlyc3RUaW1lb3V0O1xuICAgICAgZmlyc3RUaW1lb3V0ID0gb2JzZXJ2YWJsZU5ldmVyKCk7XG4gICAgfVxuICAgIG90aGVyIHx8IChvdGhlciA9IG9ic2VydmFibGVUaHJvdyhuZXcgVGltZW91dEVycm9yKCkpKTtcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpLFxuICAgICAgICB0aW1lciA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCksXG4gICAgICAgIG9yaWdpbmFsID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG5cbiAgICAgIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKG9yaWdpbmFsKTtcblxuICAgICAgdmFyIGlkID0gMCwgc3dpdGNoZWQgPSBmYWxzZTtcblxuICAgICAgZnVuY3Rpb24gc2V0VGltZXIodGltZW91dCkge1xuICAgICAgICB2YXIgbXlJZCA9IGlkLCBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gdGltZXJXaW5zKCkge1xuICAgICAgICAgIHN3aXRjaGVkID0gKG15SWQgPT09IGlkKTtcbiAgICAgICAgICByZXR1cm4gc3dpdGNoZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lci5zZXREaXNwb3NhYmxlKGQpO1xuICAgICAgICBkLnNldERpc3Bvc2FibGUodGltZW91dC5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRpbWVyV2lucygpICYmIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKG90aGVyLnN1YnNjcmliZShvKSk7XG4gICAgICAgICAgZC5kaXNwb3NlKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdGltZXJXaW5zKCkgJiYgby5vbkVycm9yKGUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGltZXJXaW5zKCkgJiYgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUob3RoZXIuc3Vic2NyaWJlKG8pKTtcbiAgICAgICAgfSkpO1xuICAgICAgfTtcblxuICAgICAgc2V0VGltZXIoZmlyc3RUaW1lb3V0KTtcblxuICAgICAgZnVuY3Rpb24gb1dpbnMoKSB7XG4gICAgICAgIHZhciByZXMgPSAhc3dpdGNoZWQ7XG4gICAgICAgIGlmIChyZXMpIHsgaWQrKzsgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5hbC5zZXREaXNwb3NhYmxlKHNvdXJjZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgaWYgKG9XaW5zKCkpIHtcbiAgICAgICAgICBvLm9uTmV4dCh4KTtcbiAgICAgICAgICB2YXIgdGltZW91dCA9IHRyeUNhdGNoKHRpbWVvdXREdXJhdGlvblNlbGVjdG9yKSh4KTtcbiAgICAgICAgICBpZiAodGltZW91dCA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcih0aW1lb3V0LmUpOyB9XG4gICAgICAgICAgc2V0VGltZXIoaXNQcm9taXNlKHRpbWVvdXQpID8gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHRpbWVvdXQpIDogdGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIG9XaW5zKCkgJiYgby5vbkVycm9yKGUpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBvV2lucygpICYmIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShzdWJzY3JpcHRpb24sIHRpbWVyKTtcbiAgICB9LCBzb3VyY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZW91dChzb3VyY2UsIGR1ZVRpbWUsIG90aGVyLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoaXNTY2hlZHVsZXIob3RoZXIpKSB7XG4gICAgICBzY2hlZHVsZXIgPSBvdGhlcjtcbiAgICAgIG90aGVyID0gb2JzZXJ2YWJsZVRocm93KG5ldyBUaW1lb3V0RXJyb3IoKSk7XG4gICAgfVxuICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEVycm9yKSB7IG90aGVyID0gb2JzZXJ2YWJsZVRocm93KG90aGVyKTsgfVxuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGRlZmF1bHRTY2hlZHVsZXIpO1xuXG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgaWQgPSAwLFxuICAgICAgICBvcmlnaW5hbCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpLFxuICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpLFxuICAgICAgICBzd2l0Y2hlZCA9IGZhbHNlLFxuICAgICAgICB0aW1lciA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCk7XG5cbiAgICAgIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKG9yaWdpbmFsKTtcblxuICAgICAgZnVuY3Rpb24gY3JlYXRlVGltZXIoKSB7XG4gICAgICAgIHZhciBteUlkID0gaWQ7XG4gICAgICAgIHRpbWVyLnNldERpc3Bvc2FibGUoc2NoZWR1bGVyLnNjaGVkdWxlRnV0dXJlKG51bGwsIGR1ZVRpbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzd2l0Y2hlZCA9IGlkID09PSBteUlkO1xuICAgICAgICAgIGlmIChzd2l0Y2hlZCkge1xuICAgICAgICAgICAgaXNQcm9taXNlKG90aGVyKSAmJiAob3RoZXIgPSBvYnNlcnZhYmxlRnJvbVByb21pc2Uob3RoZXIpKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKG90aGVyLnN1YnNjcmliZShvKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGNyZWF0ZVRpbWVyKCk7XG5cbiAgICAgIG9yaWdpbmFsLnNldERpc3Bvc2FibGUoc291cmNlLnN1YnNjcmliZShmdW5jdGlvbiAoeCkge1xuICAgICAgICBpZiAoIXN3aXRjaGVkKSB7XG4gICAgICAgICAgaWQrKztcbiAgICAgICAgICBvLm9uTmV4dCh4KTtcbiAgICAgICAgICBjcmVhdGVUaW1lcigpO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXN3aXRjaGVkKSB7XG4gICAgICAgICAgaWQrKztcbiAgICAgICAgICBvLm9uRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFzd2l0Y2hlZCkge1xuICAgICAgICAgIGlkKys7XG4gICAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoc3Vic2NyaXB0aW9uLCB0aW1lcik7XG4gICAgfSwgc291cmNlKTtcbiAgfVxuXG4gIG9ic2VydmFibGVQcm90by50aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaXJzdEFyZyA9IGFyZ3VtZW50c1swXTtcbiAgICBpZiAoZmlyc3RBcmcgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBmaXJzdEFyZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB0aW1lb3V0KHRoaXMsIGZpcnN0QXJnLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgfSBlbHNlIGlmIChPYnNlcnZhYmxlLmlzT2JzZXJ2YWJsZShmaXJzdEFyZykgfHwgaXNGdW5jdGlvbihmaXJzdEFyZykpIHtcbiAgICAgIHJldHVybiB0aW1lb3V0V2l0aFNlbGVjdG9yKHRoaXMsIGZpcnN0QXJnLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG9ubHkgdGhlIGZpcnN0IGl0ZW0gZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgZHVyaW5nIHNlcXVlbnRpYWwgdGltZSB3aW5kb3dzIG9mIGEgc3BlY2lmaWVkIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge051bWJlcn0gd2luZG93RHVyYXRpb24gdGltZSB0byB3YWl0IGJlZm9yZSBlbWl0dGluZyBhbm90aGVyIGl0ZW0gYWZ0ZXIgZW1pdHRpbmcgdGhlIGxhc3QgaXRlbVxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gdGhlIFNjaGVkdWxlciB0byB1c2UgaW50ZXJuYWxseSB0byBtYW5hZ2UgdGhlIHRpbWVycyB0aGF0IGhhbmRsZSB0aW1lb3V0IGZvciBlYWNoIGl0ZW0uIElmIG5vdCBwcm92aWRlZCwgZGVmYXVsdHMgdG8gU2NoZWR1bGVyLnRpbWVvdXQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHRoYXQgcGVyZm9ybXMgdGhlIHRocm90dGxlIG9wZXJhdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by50aHJvdHRsZSA9IGZ1bmN0aW9uICh3aW5kb3dEdXJhdGlvbiwgc2NoZWR1bGVyKSB7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gZGVmYXVsdFNjaGVkdWxlcik7XG4gICAgdmFyIGR1cmF0aW9uID0gK3dpbmRvd0R1cmF0aW9uIHx8IDA7XG4gICAgaWYgKGR1cmF0aW9uIDw9IDApIHsgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dpbmRvd0R1cmF0aW9uIGNhbm5vdCBiZSBsZXNzIG9yIGVxdWFsIHplcm8uJyk7IH1cbiAgICB2YXIgc291cmNlID0gdGhpcztcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBsYXN0T25OZXh0ID0gMDtcbiAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgICBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHZhciBub3cgPSBzY2hlZHVsZXIubm93KCk7XG4gICAgICAgICAgaWYgKGxhc3RPbk5leHQgPT09IDAgfHwgbm93IC0gbGFzdE9uTmV4dCA+PSBkdXJhdGlvbikge1xuICAgICAgICAgICAgbGFzdE9uTmV4dCA9IG5vdztcbiAgICAgICAgICAgIG8ub25OZXh0KHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxmdW5jdGlvbiAoZSkgeyBvLm9uRXJyb3IoZSk7IH0sIGZ1bmN0aW9uICgpIHsgby5vbkNvbXBsZXRlZCgpOyB9XG4gICAgICApO1xuICAgIH0sIHNvdXJjZSk7XG4gIH07XG5cbiAgdmFyIFBhdXNhYmxlT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoUGF1c2FibGVPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFBhdXNhYmxlT2JzZXJ2YWJsZShzb3VyY2UsIHBhdXNlcikge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgICBpZiAocGF1c2VyICYmIHBhdXNlci5zdWJzY3JpYmUpIHtcbiAgICAgICAgdGhpcy5wYXVzZXIgPSB0aGlzLmNvbnRyb2xsZXIubWVyZ2UocGF1c2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGF1c2VyID0gdGhpcy5jb250cm9sbGVyO1xuICAgICAgfVxuXG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBQYXVzYWJsZU9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGNvbm4gPSB0aGlzLnNvdXJjZS5wdWJsaXNoKCksXG4gICAgICAgIHN1YnNjcmlwdGlvbiA9IGNvbm4uc3Vic2NyaWJlKG8pLFxuICAgICAgICBjb25uZWN0aW9uID0gZGlzcG9zYWJsZUVtcHR5O1xuXG4gICAgICB2YXIgcGF1c2FibGUgPSB0aGlzLnBhdXNlci5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpLnN1YnNjcmliZShmdW5jdGlvbiAoYikge1xuICAgICAgICBpZiAoYikge1xuICAgICAgICAgIGNvbm5lY3Rpb24gPSBjb25uLmNvbm5lY3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25uZWN0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICBjb25uZWN0aW9uID0gZGlzcG9zYWJsZUVtcHR5O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBOQXJ5RGlzcG9zYWJsZShbc3Vic2NyaXB0aW9uLCBjb25uZWN0aW9uLCBwYXVzYWJsZV0pO1xuICAgIH07XG5cbiAgICBQYXVzYWJsZU9ic2VydmFibGUucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jb250cm9sbGVyLm9uTmV4dChmYWxzZSk7XG4gICAgfTtcblxuICAgIFBhdXNhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jb250cm9sbGVyLm9uTmV4dCh0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBhdXNhYmxlT2JzZXJ2YWJsZTtcblxuICB9KE9ic2VydmFibGUpKTtcblxuICAvKipcbiAgICogUGF1c2VzIHRoZSB1bmRlcmx5aW5nIG9ic2VydmFibGUgc2VxdWVuY2UgYmFzZWQgdXBvbiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aGljaCB5aWVsZHMgdHJ1ZS9mYWxzZS5cbiAgICogQGV4YW1wbGVcbiAgICogdmFyIHBhdXNlciA9IG5ldyBSeC5TdWJqZWN0KCk7XG4gICAqIHZhciBzb3VyY2UgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMCkucGF1c2FibGUocGF1c2VyKTtcbiAgICogQHBhcmFtIHtPYnNlcnZhYmxlfSBwYXVzZXIgVGhlIG9ic2VydmFibGUgc2VxdWVuY2UgdXNlZCB0byBwYXVzZSB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHdoaWNoIGlzIHBhdXNlZCBiYXNlZCB1cG9uIHRoZSBwYXVzZXIuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucGF1c2FibGUgPSBmdW5jdGlvbiAocGF1c2VyKSB7XG4gICAgcmV0dXJuIG5ldyBQYXVzYWJsZU9ic2VydmFibGUodGhpcywgcGF1c2VyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBjb21iaW5lTGF0ZXN0U291cmNlKHNvdXJjZSwgc3ViamVjdCwgcmVzdWx0U2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBoYXNWYWx1ZSA9IFtmYWxzZSwgZmFsc2VdLFxuICAgICAgICBoYXNWYWx1ZUFsbCA9IGZhbHNlLFxuICAgICAgICBpc0RvbmUgPSBmYWxzZSxcbiAgICAgICAgdmFsdWVzID0gbmV3IEFycmF5KDIpLFxuICAgICAgICBlcnI7XG5cbiAgICAgIGZ1bmN0aW9uIG5leHQoeCwgaSkge1xuICAgICAgICB2YWx1ZXNbaV0gPSB4O1xuICAgICAgICBoYXNWYWx1ZVtpXSA9IHRydWU7XG4gICAgICAgIGlmIChoYXNWYWx1ZUFsbCB8fCAoaGFzVmFsdWVBbGwgPSBoYXNWYWx1ZS5ldmVyeShpZGVudGl0eSkpKSB7XG4gICAgICAgICAgaWYgKGVycikgeyByZXR1cm4gby5vbkVycm9yKGVycik7IH1cbiAgICAgICAgICB2YXIgcmVzID0gdHJ5Q2F0Y2gocmVzdWx0U2VsZWN0b3IpLmFwcGx5KG51bGwsIHZhbHVlcyk7XG4gICAgICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihyZXMuZSk7IH1cbiAgICAgICAgICBvLm9uTmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlzRG9uZSAmJiB2YWx1ZXNbMV0gJiYgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoXG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICAgICAgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIG5leHQoeCwgMCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlc1sxXSkge1xuICAgICAgICAgICAgICBvLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlcnIgPSBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhbHVlc1sxXSAmJiBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgfSksXG4gICAgICAgIHN1YmplY3Quc3Vic2NyaWJlKFxuICAgICAgICAgIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICBuZXh0KHgsIDEpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHsgby5vbkVycm9yKGUpOyB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlzRG9uZSA9IHRydWU7XG4gICAgICAgICAgICBuZXh0KHRydWUsIDEpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSwgc291cmNlKTtcbiAgfVxuXG4gIHZhciBQYXVzYWJsZUJ1ZmZlcmVkT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoUGF1c2FibGVCdWZmZXJlZE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gUGF1c2FibGVCdWZmZXJlZE9ic2VydmFibGUoc291cmNlLCBwYXVzZXIpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IFN1YmplY3QoKTtcblxuICAgICAgaWYgKHBhdXNlciAmJiBwYXVzZXIuc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMucGF1c2VyID0gdGhpcy5jb250cm9sbGVyLm1lcmdlKHBhdXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhdXNlciA9IHRoaXMuY29udHJvbGxlcjtcbiAgICAgIH1cblxuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgUGF1c2FibGVCdWZmZXJlZE9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIHEgPSBbXSwgcHJldmlvdXNTaG91bGRGaXJlO1xuXG4gICAgICBmdW5jdGlvbiBkcmFpblF1ZXVlKCkgeyB3aGlsZSAocS5sZW5ndGggPiAwKSB7IG8ub25OZXh0KHEuc2hpZnQoKSk7IH0gfVxuXG4gICAgICB2YXIgc3Vic2NyaXB0aW9uID1cbiAgICAgICAgY29tYmluZUxhdGVzdFNvdXJjZShcbiAgICAgICAgICB0aGlzLnNvdXJjZSxcbiAgICAgICAgICB0aGlzLnBhdXNlci5zdGFydFdpdGgoZmFsc2UpLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgZnVuY3Rpb24gKGRhdGEsIHNob3VsZEZpcmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IGRhdGEsIHNob3VsZEZpcmU6IHNob3VsZEZpcmUgfTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgICAgICBpZiAocHJldmlvdXNTaG91bGRGaXJlICE9PSB1bmRlZmluZWQgJiYgcmVzdWx0cy5zaG91bGRGaXJlICE9PSBwcmV2aW91c1Nob3VsZEZpcmUpIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1Nob3VsZEZpcmUgPSByZXN1bHRzLnNob3VsZEZpcmU7XG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIGluIHNob3VsZEZpcmVcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5zaG91bGRGaXJlKSB7IGRyYWluUXVldWUoKTsgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzU2hvdWxkRmlyZSA9IHJlc3VsdHMuc2hvdWxkRmlyZTtcbiAgICAgICAgICAgICAgICAvLyBuZXcgZGF0YVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLnNob3VsZEZpcmUpIHtcbiAgICAgICAgICAgICAgICAgIG8ub25OZXh0KHJlc3VsdHMuZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHEucHVzaChyZXN1bHRzLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgICAgICAgICAgICBvLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGRyYWluUXVldWUoKTtcbiAgICAgICAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICByZXR1cm4gc3Vic2NyaXB0aW9uOyAgICAgIFxuICAgIH07XG5cbiAgICBQYXVzYWJsZUJ1ZmZlcmVkT2JzZXJ2YWJsZS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIub25OZXh0KGZhbHNlKTtcbiAgICB9O1xuXG4gICAgUGF1c2FibGVCdWZmZXJlZE9ic2VydmFibGUucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuY29udHJvbGxlci5vbk5leHQodHJ1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBQYXVzYWJsZUJ1ZmZlcmVkT2JzZXJ2YWJsZTtcblxuICB9KE9ic2VydmFibGUpKTtcblxuICAvKipcbiAgICogUGF1c2VzIHRoZSB1bmRlcmx5aW5nIG9ic2VydmFibGUgc2VxdWVuY2UgYmFzZWQgdXBvbiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aGljaCB5aWVsZHMgdHJ1ZS9mYWxzZSxcbiAgICogYW5kIHlpZWxkcyB0aGUgdmFsdWVzIHRoYXQgd2VyZSBidWZmZXJlZCB3aGlsZSBwYXVzZWQuXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBwYXVzZXIgPSBuZXcgUnguU3ViamVjdCgpO1xuICAgKiB2YXIgc291cmNlID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDApLnBhdXNhYmxlQnVmZmVyZWQocGF1c2VyKTtcbiAgICogQHBhcmFtIHtPYnNlcnZhYmxlfSBwYXVzZXIgVGhlIG9ic2VydmFibGUgc2VxdWVuY2UgdXNlZCB0byBwYXVzZSB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHdoaWNoIGlzIHBhdXNlZCBiYXNlZCB1cG9uIHRoZSBwYXVzZXIuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucGF1c2FibGVCdWZmZXJlZCA9IGZ1bmN0aW9uIChzdWJqZWN0KSB7XG4gICAgcmV0dXJuIG5ldyBQYXVzYWJsZUJ1ZmZlcmVkT2JzZXJ2YWJsZSh0aGlzLCBzdWJqZWN0KTtcbiAgfTtcblxuICB2YXIgQ29udHJvbGxlZE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKENvbnRyb2xsZWRPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZWRPYnNlcnZhYmxlIChzb3VyY2UsIGVuYWJsZVF1ZXVlLCBzY2hlZHVsZXIpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5zdWJqZWN0ID0gbmV3IENvbnRyb2xsZWRTdWJqZWN0KGVuYWJsZVF1ZXVlLCBzY2hlZHVsZXIpO1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2UubXVsdGljYXN0KHRoaXMuc3ViamVjdCkucmVmQ291bnQoKTtcbiAgICB9XG5cbiAgICBDb250cm9sbGVkT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG8pO1xuICAgIH07XG5cbiAgICBDb250cm9sbGVkT2JzZXJ2YWJsZS5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChudW1iZXJPZkl0ZW1zKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LnJlcXVlc3QobnVtYmVyT2ZJdGVtcyA9PSBudWxsID8gLTEgOiBudW1iZXJPZkl0ZW1zKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENvbnRyb2xsZWRPYnNlcnZhYmxlO1xuXG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIHZhciBDb250cm9sbGVkU3ViamVjdCA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQ29udHJvbGxlZFN1YmplY3QsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ29udHJvbGxlZFN1YmplY3QoZW5hYmxlUXVldWUsIHNjaGVkdWxlcikge1xuICAgICAgZW5hYmxlUXVldWUgPT0gbnVsbCAmJiAoZW5hYmxlUXVldWUgPSB0cnVlKTtcblxuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLnN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICAgICAgdGhpcy5lbmFibGVRdWV1ZSA9IGVuYWJsZVF1ZXVlO1xuICAgICAgdGhpcy5xdWV1ZSA9IGVuYWJsZVF1ZXVlID8gW10gOiBudWxsO1xuICAgICAgdGhpcy5yZXF1ZXN0ZWRDb3VudCA9IDA7XG4gICAgICB0aGlzLnJlcXVlc3RlZERpc3Bvc2FibGUgPSBudWxsO1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICB0aGlzLmhhc0ZhaWxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyIHx8IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXI7XG4gICAgfVxuXG4gICAgYWRkUHJvcGVydGllcyhDb250cm9sbGVkU3ViamVjdC5wcm90b3R5cGUsIE9ic2VydmVyLCB7XG4gICAgICBfc3Vic2NyaWJlOiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LnN1YnNjcmliZShvKTtcbiAgICAgIH0sXG4gICAgICBvbkNvbXBsZXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVRdWV1ZSB8fCB0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc3ViamVjdC5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgIHRoaXMuZGlzcG9zZUN1cnJlbnRSZXF1ZXN0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKE5vdGlmaWNhdGlvbi5jcmVhdGVPbkNvbXBsZXRlZCgpKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLmhhc0ZhaWxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZVF1ZXVlIHx8IHRoaXMucXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdWJqZWN0Lm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgIHRoaXMuZGlzcG9zZUN1cnJlbnRSZXF1ZXN0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKE5vdGlmaWNhdGlvbi5jcmVhdGVPbkVycm9yKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0ZWRDb3VudCA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbmFibGVRdWV1ZSAmJiB0aGlzLnF1ZXVlLnB1c2goTm90aWZpY2F0aW9uLmNyZWF0ZU9uTmV4dCh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICh0aGlzLnJlcXVlc3RlZENvdW50LS0gPT09IDApICYmIHRoaXMuZGlzcG9zZUN1cnJlbnRSZXF1ZXN0KCk7XG4gICAgICAgICAgdGhpcy5zdWJqZWN0Lm9uTmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfcHJvY2Vzc1JlcXVlc3Q6IGZ1bmN0aW9uIChudW1iZXJPZkl0ZW1zKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVF1ZXVlKSB7XG4gICAgICAgICAgd2hpbGUgKHRoaXMucXVldWUubGVuZ3RoID4gMCAmJiAobnVtYmVyT2ZJdGVtcyA+IDAgfHwgdGhpcy5xdWV1ZVswXS5raW5kICE9PSAnTicpKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3QgPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBmaXJzdC5hY2NlcHQodGhpcy5zdWJqZWN0KTtcbiAgICAgICAgICAgIGlmIChmaXJzdC5raW5kID09PSAnTicpIHtcbiAgICAgICAgICAgICAgbnVtYmVyT2ZJdGVtcy0tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlQ3VycmVudFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1iZXJPZkl0ZW1zO1xuICAgICAgfSxcbiAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwb3NlQ3VycmVudFJlcXVlc3QoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVxdWVzdGVkRGlzcG9zYWJsZSA9IHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKG51bWJlcixcbiAgICAgICAgZnVuY3Rpb24ocywgaSkge1xuICAgICAgICAgIHZhciByZW1haW5pbmcgPSBzZWxmLl9wcm9jZXNzUmVxdWVzdChpKTtcbiAgICAgICAgICB2YXIgc3RvcHBlZCA9IHNlbGYuaGFzQ29tcGxldGVkIHx8IHNlbGYuaGFzRmFpbGVkO1xuICAgICAgICAgIGlmICghc3RvcHBlZCAmJiByZW1haW5pbmcgPiAwKSB7XG4gICAgICAgICAgICBzZWxmLnJlcXVlc3RlZENvdW50ID0gcmVtYWluaW5nO1xuXG4gICAgICAgICAgICByZXR1cm4gZGlzcG9zYWJsZUNyZWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYucmVxdWVzdGVkQ291bnQgPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIC8vIFNjaGVkdWxlZCBpdGVtIGlzIHN0aWxsIGluIHByb2dyZXNzLiBSZXR1cm4gYSBuZXdcbiAgICAgICAgICAgICAgLy8gZGlzcG9zYWJsZSB0byBhbGxvdyB0aGUgcmVxdWVzdCB0byBiZSBpbnRlcnJ1cHRlZFxuICAgICAgICAgICAgICAvLyB2aWEgZGlzcG9zZS5cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RlZERpc3Bvc2FibGU7XG4gICAgICB9LFxuICAgICAgZGlzcG9zZUN1cnJlbnRSZXF1ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RlZERpc3Bvc2FibGUpIHtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RlZERpc3Bvc2FibGUuZGlzcG9zZSgpO1xuICAgICAgICAgIHRoaXMucmVxdWVzdGVkRGlzcG9zYWJsZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBDb250cm9sbGVkU3ViamVjdDtcbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgLyoqXG4gICAqIEF0dGFjaGVzIGEgY29udHJvbGxlciB0byB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aXRoIHRoZSBhYmlsaXR5IHRvIHF1ZXVlLlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgc291cmNlID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDApLmNvbnRyb2xsZWQoKTtcbiAgICogc291cmNlLnJlcXVlc3QoMyk7IC8vIFJlYWRzIDMgdmFsdWVzXG4gICAqIEBwYXJhbSB7Ym9vbH0gZW5hYmxlUXVldWUgdHJ1dGh5IHZhbHVlIHRvIGRldGVybWluZSBpZiB2YWx1ZXMgc2hvdWxkIGJlIHF1ZXVlZCBwZW5kaW5nIHRoZSBuZXh0IHJlcXVlc3RcbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IHNjaGVkdWxlciBkZXRlcm1pbmVzIGhvdyB0aGUgcmVxdWVzdHMgd2lsbCBiZSBzY2hlZHVsZWRcbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHdoaWNoIG9ubHkgcHJvcGFnYXRlcyB2YWx1ZXMgb24gcmVxdWVzdC5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5jb250cm9sbGVkID0gZnVuY3Rpb24gKGVuYWJsZVF1ZXVlLCBzY2hlZHVsZXIpIHtcblxuICAgIGlmIChlbmFibGVRdWV1ZSAmJiBpc1NjaGVkdWxlcihlbmFibGVRdWV1ZSkpIHtcbiAgICAgIHNjaGVkdWxlciA9IGVuYWJsZVF1ZXVlO1xuICAgICAgZW5hYmxlUXVldWUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChlbmFibGVRdWV1ZSA9PSBudWxsKSB7ICBlbmFibGVRdWV1ZSA9IHRydWU7IH1cbiAgICByZXR1cm4gbmV3IENvbnRyb2xsZWRPYnNlcnZhYmxlKHRoaXMsIGVuYWJsZVF1ZXVlLCBzY2hlZHVsZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQaXBlcyB0aGUgZXhpc3RpbmcgT2JzZXJ2YWJsZSBzZXF1ZW5jZSBpbnRvIGEgTm9kZS5qcyBTdHJlYW0uXG4gICAqIEBwYXJhbSB7U3RyZWFtfSBkZXN0IFRoZSBkZXN0aW5hdGlvbiBOb2RlLmpzIHN0cmVhbS5cbiAgICogQHJldHVybnMge1N0cmVhbX0gVGhlIGRlc3RpbmF0aW9uIHN0cmVhbS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5waXBlID0gZnVuY3Rpb24gKGRlc3QpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5wYXVzYWJsZUJ1ZmZlcmVkKCk7XG5cbiAgICBmdW5jdGlvbiBvbkRyYWluKCkge1xuICAgICAgc291cmNlLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIGRlc3QuYWRkTGlzdGVuZXIoJ2RyYWluJywgb25EcmFpbik7XG5cbiAgICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgIWRlc3Qud3JpdGUoU3RyaW5nKHgpKSAmJiBzb3VyY2UucGF1c2UoKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGRlc3QuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSGFjayBjaGVjayBiZWNhdXNlIFNURElPIGlzIG5vdCBjbG9zYWJsZVxuICAgICAgICAhZGVzdC5faXNTdGRpbyAmJiBkZXN0LmVuZCgpO1xuICAgICAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdkcmFpbicsIG9uRHJhaW4pO1xuICAgICAgfSk7XG5cbiAgICBzb3VyY2UucmVzdW1lKCk7XG5cbiAgICByZXR1cm4gZGVzdDtcbiAgfTtcblxuICB2YXIgVHJhbnNkdWNlT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRyYW5zZHVjZU9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFRyYW5zZHVjZU9ic2VydmVyKG8sIHhmb3JtKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX3hmb3JtID0geGZvcm07XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUcmFuc2R1Y2VPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB2YXIgcmVzID0gdHJ5Q2F0Y2godGhpcy5feGZvcm1bJ0BAdHJhbnNkdWNlci9zdGVwJ10pLmNhbGwodGhpcy5feGZvcm0sIHRoaXMuX28sIHgpO1xuICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHsgdGhpcy5fby5vbkVycm9yKHJlcy5lKTsgfVxuICAgIH07XG5cbiAgICBUcmFuc2R1Y2VPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkgeyB0aGlzLl9vLm9uRXJyb3IoZSk7IH07XG5cbiAgICBUcmFuc2R1Y2VPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5feGZvcm1bJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSh0aGlzLl9vKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRyYW5zZHVjZU9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICBmdW5jdGlvbiB0cmFuc2Zvcm1Gb3JPYnNlcnZlcihvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAQHRyYW5zZHVjZXIvaW5pdCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH0sXG4gICAgICAnQEB0cmFuc2R1Y2VyL3N0ZXAnOiBmdW5jdGlvbihvYnMsIGlucHV0KSB7XG4gICAgICAgIHJldHVybiBvYnMub25OZXh0KGlucHV0KTtcbiAgICAgIH0sXG4gICAgICAnQEB0cmFuc2R1Y2VyL3Jlc3VsdCc6IGZ1bmN0aW9uKG9icykge1xuICAgICAgICByZXR1cm4gb2JzLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBhIHRyYW5zZHVjZXIgdG8gdHJhbnNmb3JtIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlXG4gICAqIEBwYXJhbSB7VHJhbnNkdWNlcn0gdHJhbnNkdWNlciBBIHRyYW5zZHVjZXIgdG8gZXhlY3V0ZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSByZXN1bHRzIGZyb20gdGhlIHRyYW5zZHVjZXIuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8udHJhbnNkdWNlID0gZnVuY3Rpb24odHJhbnNkdWNlcikge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbihvKSB7XG4gICAgICB2YXIgeGZvcm0gPSB0cmFuc2R1Y2VyKHRyYW5zZm9ybUZvck9ic2VydmVyKG8pKTtcbiAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBUcmFuc2R1Y2VPYnNlcnZlcihvLCB4Zm9ybSkpO1xuICAgIH0sIHNvdXJjZSk7XG4gIH07XG5cbiAgdmFyIEFub255bW91c09ic2VydmFibGUgPSBSeC5Bbm9ueW1vdXNPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhBbm9ueW1vdXNPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuXG4gICAgLy8gRml4IHN1YnNjcmliZXIgdG8gY2hlY2sgZm9yIHVuZGVmaW5lZCBvciBmdW5jdGlvbiByZXR1cm5lZCB0byBkZWNvcmF0ZSBhcyBEaXNwb3NhYmxlXG4gICAgZnVuY3Rpb24gZml4U3Vic2NyaWJlcihzdWJzY3JpYmVyKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaWJlciAmJiBpc0Z1bmN0aW9uKHN1YnNjcmliZXIuZGlzcG9zZSkgPyBzdWJzY3JpYmVyIDpcbiAgICAgICAgaXNGdW5jdGlvbihzdWJzY3JpYmVyKSA/IGRpc3Bvc2FibGVDcmVhdGUoc3Vic2NyaWJlcikgOiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGlzcG9zYWJsZShzLCBzdGF0ZSkge1xuICAgICAgdmFyIGFkbyA9IHN0YXRlWzBdLCBzZWxmID0gc3RhdGVbMV07XG4gICAgICB2YXIgc3ViID0gdHJ5Q2F0Y2goc2VsZi5fX3N1YnNjcmliZSkuY2FsbChzZWxmLCBhZG8pO1xuICAgICAgaWYgKHN1YiA9PT0gZXJyb3JPYmogJiYgIWFkby5mYWlsKGVycm9yT2JqLmUpKSB7IHRocm93ZXIoZXJyb3JPYmouZSk7IH1cbiAgICAgIGFkby5zZXREaXNwb3NhYmxlKGZpeFN1YnNjcmliZXIoc3ViKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQW5vbnltb3VzT2JzZXJ2YWJsZShzdWJzY3JpYmUsIHBhcmVudCkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBwYXJlbnQ7XG4gICAgICB0aGlzLl9fc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgQW5vbnltb3VzT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgYWRvID0gbmV3IEF1dG9EZXRhY2hPYnNlcnZlcihvKSwgc3RhdGUgPSBbYWRvLCB0aGlzXTtcblxuICAgICAgaWYgKGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIuc2NoZWR1bGVSZXF1aXJlZCgpKSB7XG4gICAgICAgIGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIuc2NoZWR1bGUoc3RhdGUsIHNldERpc3Bvc2FibGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGlzcG9zYWJsZShudWxsLCBzdGF0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWRvO1xuICAgIH07XG5cbiAgICByZXR1cm4gQW5vbnltb3VzT2JzZXJ2YWJsZTtcblxuICB9KE9ic2VydmFibGUpKTtcblxuICB2YXIgQXV0b0RldGFjaE9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhBdXRvRGV0YWNoT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBBdXRvRGV0YWNoT2JzZXJ2ZXIob2JzZXJ2ZXIpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgICAgdGhpcy5tID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgfVxuXG4gICAgdmFyIEF1dG9EZXRhY2hPYnNlcnZlclByb3RvdHlwZSA9IEF1dG9EZXRhY2hPYnNlcnZlci5wcm90b3R5cGU7XG5cbiAgICBBdXRvRGV0YWNoT2JzZXJ2ZXJQcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMub2JzZXJ2ZXIub25OZXh0KS5jYWxsKHRoaXMub2JzZXJ2ZXIsIHZhbHVlKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICB0aHJvd2VyKHJlc3VsdC5lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQXV0b0RldGFjaE9ic2VydmVyUHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMub2JzZXJ2ZXIub25FcnJvcikuY2FsbCh0aGlzLm9ic2VydmVyLCBlcnIpO1xuICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICByZXN1bHQgPT09IGVycm9yT2JqICYmIHRocm93ZXIocmVzdWx0LmUpO1xuICAgIH07XG5cbiAgICBBdXRvRGV0YWNoT2JzZXJ2ZXJQcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMub2JzZXJ2ZXIub25Db21wbGV0ZWQpLmNhbGwodGhpcy5vYnNlcnZlcik7XG4gICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgIHJlc3VsdCA9PT0gZXJyb3JPYmogJiYgdGhyb3dlcihyZXN1bHQuZSk7XG4gICAgfTtcblxuICAgIEF1dG9EZXRhY2hPYnNlcnZlclByb3RvdHlwZS5zZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKHZhbHVlKSB7IHRoaXMubS5zZXREaXNwb3NhYmxlKHZhbHVlKTsgfTtcbiAgICBBdXRvRGV0YWNoT2JzZXJ2ZXJQcm90b3R5cGUuZ2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMubS5nZXREaXNwb3NhYmxlKCk7IH07XG5cbiAgICBBdXRvRGV0YWNoT2JzZXJ2ZXJQcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF9fc3VwZXJfXy5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5tLmRpc3Bvc2UoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEF1dG9EZXRhY2hPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgdmFyIElubmVyU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKHMsIG8pIHtcbiAgICB0aGlzLl9zID0gcztcbiAgICB0aGlzLl9vID0gbztcbiAgfTtcblxuICBJbm5lclN1YnNjcmlwdGlvbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX3MuaXNEaXNwb3NlZCAmJiB0aGlzLl9vICE9PSBudWxsKSB7XG4gICAgICB2YXIgaWR4ID0gdGhpcy5fcy5vYnNlcnZlcnMuaW5kZXhPZih0aGlzLl9vKTtcbiAgICAgIHRoaXMuX3Mub2JzZXJ2ZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgdGhpcy5fbyA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiAgUmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBib3RoIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgYXMgd2VsbCBhcyBhbiBvYnNlcnZlci5cbiAgICogIEVhY2ggbm90aWZpY2F0aW9uIGlzIGJyb2FkY2FzdGVkIHRvIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycy5cbiAgICovXG4gIHZhciBTdWJqZWN0ID0gUnguU3ViamVjdCA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU3ViamVjdCwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0KCkge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFkZFByb3BlcnRpZXMoU3ViamVjdC5wcm90b3R5cGUsIE9ic2VydmVyLnByb3RvdHlwZSwge1xuICAgICAgX3N1YnNjcmliZTogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gobyk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBJbm5lclN1YnNjcmlwdGlvbih0aGlzLCBvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgIG8ub25FcnJvcih0aGlzLmVycm9yKTtcbiAgICAgICAgICByZXR1cm4gZGlzcG9zYWJsZUVtcHR5O1xuICAgICAgICB9XG4gICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgcmV0dXJuIGRpc3Bvc2FibGVFbXB0eTtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdWJqZWN0IGhhcyBvYnNlcnZlcnMgc3Vic2NyaWJlZCB0byBpdC5cbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3ViamVjdCBoYXMgb2JzZXJ2ZXJzIHN1YnNjcmliZWQgdG8gaXQuXG4gICAgICAgKi9cbiAgICAgIGhhc09ic2VydmVyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5vYnNlcnZlcnMubGVuZ3RoID4gMDsgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBlbmQgb2YgdGhlIHNlcXVlbmNlLlxuICAgICAgICovXG4gICAgICBvbkNvbXBsZXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgb3NbaV0ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7TWl4ZWR9IGVycm9yIFRoZSBleGNlcHRpb24gdG8gc2VuZCB0byBhbGwgb2JzZXJ2ZXJzLlxuICAgICAgICovXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBvc1tpXS5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGFycml2YWwgb2YgdGhlIHNwZWNpZmllZCBlbGVtZW50IGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZW5kIHRvIGFsbCBvYnNlcnZlcnMuXG4gICAgICAgKi9cbiAgICAgIG9uTmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIG9zW2ldLm9uTmV4dCh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBVbnN1YnNjcmliZSBhbGwgb2JzZXJ2ZXJzIGFuZCByZWxlYXNlIHJlc291cmNlcy5cbiAgICAgICAqL1xuICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3ViamVjdCBmcm9tIHRoZSBzcGVjaWZpZWQgb2JzZXJ2ZXIgYW5kIG9ic2VydmFibGUuXG4gICAgICogQHBhcmFtIHtPYnNlcnZlcn0gb2JzZXJ2ZXIgVGhlIG9ic2VydmVyIHVzZWQgdG8gc2VuZCBtZXNzYWdlcyB0byB0aGUgc3ViamVjdC5cbiAgICAgKiBAcGFyYW0ge09ic2VydmFibGV9IG9ic2VydmFibGUgVGhlIG9ic2VydmFibGUgdXNlZCB0byBzdWJzY3JpYmUgdG8gbWVzc2FnZXMgc2VudCBmcm9tIHRoZSBzdWJqZWN0LlxuICAgICAqIEByZXR1cm5zIHtTdWJqZWN0fSBTdWJqZWN0IGltcGxlbWVudGVkIHVzaW5nIHRoZSBnaXZlbiBvYnNlcnZlciBhbmQgb2JzZXJ2YWJsZS5cbiAgICAgKi9cbiAgICBTdWJqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChvYnNlcnZlciwgb2JzZXJ2YWJsZSkge1xuICAgICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNTdWJqZWN0KG9ic2VydmVyLCBvYnNlcnZhYmxlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFN1YmplY3Q7XG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIC8qKlxuICAgKiAgUmVwcmVzZW50cyB0aGUgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uXG4gICAqICBUaGUgbGFzdCB2YWx1ZSBiZWZvcmUgdGhlIE9uQ29tcGxldGVkIG5vdGlmaWNhdGlvbiwgb3IgdGhlIGVycm9yIHJlY2VpdmVkIHRocm91Z2ggT25FcnJvciwgaXMgc2VudCB0byBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMuXG4gICAqL1xuICB2YXIgQXN5bmNTdWJqZWN0ID0gUnguQXN5bmNTdWJqZWN0ID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhBc3luY1N1YmplY3QsIF9fc3VwZXJfXyk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc3ViamVjdCB0aGF0IGNhbiBvbmx5IHJlY2VpdmUgb25lIHZhbHVlIGFuZCB0aGF0IHZhbHVlIGlzIGNhY2hlZCBmb3IgYWxsIGZ1dHVyZSBvYnNlcnZhdGlvbnMuXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gQXN5bmNTdWJqZWN0KCkge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFkZFByb3BlcnRpZXMoQXN5bmNTdWJqZWN0LnByb3RvdHlwZSwgT2JzZXJ2ZXIucHJvdG90eXBlLCB7XG4gICAgICBfc3Vic2NyaWJlOiBmdW5jdGlvbiAobykge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG8pO1xuICAgICAgICAgIHJldHVybiBuZXcgSW5uZXJTdWJzY3JpcHRpb24odGhpcywgbyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgIG8ub25FcnJvcih0aGlzLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICAgICAgby5vbk5leHQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3ViamVjdCBoYXMgb2JzZXJ2ZXJzIHN1YnNjcmliZWQgdG8gaXQuXG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1YmplY3QgaGFzIG9ic2VydmVycyBzdWJzY3JpYmVkIHRvIGl0LlxuICAgICAgICovXG4gICAgICBoYXNPYnNlcnZlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGVuZCBvZiB0aGUgc2VxdWVuY2UsIGFsc28gY2F1c2luZyB0aGUgbGFzdCByZWNlaXZlZCB2YWx1ZSB0byBiZSBzZW50IG91dCAoaWYgYW55KS5cbiAgICAgICAqL1xuICAgICAgb25Db21wbGV0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGksIGxlbjtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoO1xuXG4gICAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICB2YXIgbyA9IG9zW2ldO1xuICAgICAgICAgICAgICBvLm9uTmV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgb3NbaV0ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGVycm9yLlxuICAgICAgICogQHBhcmFtIHtNaXhlZH0gZXJyb3IgVGhlIEVycm9yIHRvIHNlbmQgdG8gYWxsIG9ic2VydmVycy5cbiAgICAgICAqL1xuICAgICAgb25FcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBvc1tpXS5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBTZW5kcyBhIHZhbHVlIHRvIHRoZSBzdWJqZWN0LiBUaGUgbGFzdCB2YWx1ZSByZWNlaXZlZCBiZWZvcmUgc3VjY2Vzc2Z1bCB0ZXJtaW5hdGlvbiB3aWxsIGJlIHNlbnQgdG8gYWxsIHN1YnNjcmliZWQgYW5kIGZ1dHVyZSBvYnNlcnZlcnMuXG4gICAgICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc3RvcmUgaW4gdGhlIHN1YmplY3QuXG4gICAgICAgKi9cbiAgICAgIG9uTmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFVuc3Vic2NyaWJlIGFsbCBvYnNlcnZlcnMgYW5kIHJlbGVhc2UgcmVzb3VyY2VzLlxuICAgICAgICovXG4gICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFzeW5jU3ViamVjdDtcbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgdmFyIEFub255bW91c1N1YmplY3QgPSBSeC5Bbm9ueW1vdXNTdWJqZWN0ID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhBbm9ueW1vdXNTdWJqZWN0LCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEFub255bW91c1N1YmplY3Qob2JzZXJ2ZXIsIG9ic2VydmFibGUpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgIHRoaXMub2JzZXJ2YWJsZSA9IG9ic2VydmFibGU7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRQcm9wZXJ0aWVzKEFub255bW91c1N1YmplY3QucHJvdG90eXBlLCBPYnNlcnZlci5wcm90b3R5cGUsIHtcbiAgICAgIF9zdWJzY3JpYmU6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmFibGUuc3Vic2NyaWJlKG8pO1xuICAgICAgfSxcbiAgICAgIG9uQ29tcGxldGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25Db21wbGV0ZWQoKTtcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vbkVycm9yKGVycm9yKTtcbiAgICAgIH0sXG4gICAgICBvbk5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9uTmV4dCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQW5vbnltb3VzU3ViamVjdDtcbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgLyoqXG4gICAqICBSZXByZXNlbnRzIGEgdmFsdWUgdGhhdCBjaGFuZ2VzIG92ZXIgdGltZS5cbiAgICogIE9ic2VydmVycyBjYW4gc3Vic2NyaWJlIHRvIHRoZSBzdWJqZWN0IHRvIHJlY2VpdmUgdGhlIGxhc3QgKG9yIGluaXRpYWwpIHZhbHVlIGFuZCBhbGwgc3Vic2VxdWVudCBub3RpZmljYXRpb25zLlxuICAgKi9cbiAgdmFyIEJlaGF2aW9yU3ViamVjdCA9IFJ4LkJlaGF2aW9yU3ViamVjdCA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQmVoYXZpb3JTdWJqZWN0LCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIEJlaGF2aW9yU3ViamVjdCh2YWx1ZSkge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFkZFByb3BlcnRpZXMoQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZSwgT2JzZXJ2ZXIucHJvdG90eXBlLCB7XG4gICAgICBfc3Vic2NyaWJlOiBmdW5jdGlvbiAobykge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvKTtcbiAgICAgICAgICBvLm9uTmV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gbmV3IElubmVyU3Vic2NyaXB0aW9uKHRoaXMsIG8pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgICAgby5vbkVycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlzcG9zYWJsZUVtcHR5O1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogR2V0cyB0aGUgY3VycmVudCB2YWx1ZSBvciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICAgICAgICogVmFsdWUgaXMgZnJvemVuIGFmdGVyIG9uQ29tcGxldGVkIGlzIGNhbGxlZC5cbiAgICAgICAqIEFmdGVyIG9uRXJyb3IgaXMgY2FsbGVkIGFsd2F5cyB0aHJvd3MgdGhlIHNwZWNpZmllZCBleGNlcHRpb24uXG4gICAgICAgKiBBbiBleGNlcHRpb24gaXMgYWx3YXlzIHRocm93biBhZnRlciBkaXNwb3NlIGlzIGNhbGxlZC5cbiAgICAgICAqIEByZXR1cm5zIHtNaXhlZH0gVGhlIGluaXRpYWwgdmFsdWUgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciB1bnRpbCBvbk5leHQgaXMgY2FsbGVkOyBhZnRlciB3aGljaCwgdGhlIGxhc3QgdmFsdWUgcGFzc2VkIHRvIG9uTmV4dC5cbiAgICAgICAqL1xuICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgICAgICAgIHRocm93IHRoaXMuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1YmplY3QgaGFzIG9ic2VydmVycyBzdWJzY3JpYmVkIHRvIGl0LlxuICAgICAgICogQHJldHVybnMge0Jvb2xlYW59IEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdWJqZWN0IGhhcyBvYnNlcnZlcnMgc3Vic2NyaWJlZCB0byBpdC5cbiAgICAgICAqL1xuICAgICAgaGFzT2JzZXJ2ZXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLm9ic2VydmVycy5sZW5ndGggPiAwOyB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGVuZCBvZiB0aGUgc2VxdWVuY2UuXG4gICAgICAgKi9cbiAgICAgIG9uQ29tcGxldGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBvc1tpXS5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtNaXhlZH0gZXJyb3IgVGhlIGV4Y2VwdGlvbiB0byBzZW5kIHRvIGFsbCBvYnNlcnZlcnMuXG4gICAgICAgKi9cbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBvc1tpXS5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGFycml2YWwgb2YgdGhlIHNwZWNpZmllZCBlbGVtZW50IGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZW5kIHRvIGFsbCBvYnNlcnZlcnMuXG4gICAgICAgKi9cbiAgICAgIG9uTmV4dDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBvc1tpXS5vbk5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBVbnN1YnNjcmliZSBhbGwgb2JzZXJ2ZXJzIGFuZCByZWxlYXNlIHJlc291cmNlcy5cbiAgICAgICAqL1xuICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBCZWhhdmlvclN1YmplY3Q7XG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGlzIGJvdGggYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhcyB3ZWxsIGFzIGFuIG9ic2VydmVyLlxuICAgKiBFYWNoIG5vdGlmaWNhdGlvbiBpcyBicm9hZGNhc3RlZCB0byBhbGwgc3Vic2NyaWJlZCBhbmQgZnV0dXJlIG9ic2VydmVycywgc3ViamVjdCB0byBidWZmZXIgdHJpbW1pbmcgcG9saWNpZXMuXG4gICAqL1xuICB2YXIgUmVwbGF5U3ViamVjdCA9IFJ4LlJlcGxheVN1YmplY3QgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuXG4gICAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlbW92YWJsZURpc3Bvc2FibGUoc3ViamVjdCwgb2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBkaXNwb3NhYmxlQ3JlYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzcG9zZSgpO1xuICAgICAgICAhc3ViamVjdC5pc0Rpc3Bvc2VkICYmIHN1YmplY3Qub2JzZXJ2ZXJzLnNwbGljZShzdWJqZWN0Lm9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKSwgMSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbmhlcml0cyhSZXBsYXlTdWJqZWN0LCBfX3N1cGVyX18pO1xuXG4gICAgLyoqXG4gICAgICogIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBSZXBsYXlTdWJqZWN0IGNsYXNzIHdpdGggdGhlIHNwZWNpZmllZCBidWZmZXIgc2l6ZSwgd2luZG93IHNpemUgYW5kIHNjaGVkdWxlci5cbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IFtidWZmZXJTaXplXSBNYXhpbXVtIGVsZW1lbnQgY291bnQgb2YgdGhlIHJlcGxheSBidWZmZXIuXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBbd2luZG93U2l6ZV0gTWF4aW11bSB0aW1lIGxlbmd0aCBvZiB0aGUgcmVwbGF5IGJ1ZmZlci5cbiAgICAgKiAgQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIFNjaGVkdWxlciB0aGUgb2JzZXJ2ZXJzIGFyZSBpbnZva2VkIG9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJlcGxheVN1YmplY3QoYnVmZmVyU2l6ZSwgd2luZG93U2l6ZSwgc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLmJ1ZmZlclNpemUgPSBidWZmZXJTaXplID09IG51bGwgPyBtYXhTYWZlSW50ZWdlciA6IGJ1ZmZlclNpemU7XG4gICAgICB0aGlzLndpbmRvd1NpemUgPSB3aW5kb3dTaXplID09IG51bGwgPyBtYXhTYWZlSW50ZWdlciA6IHdpbmRvd1NpemU7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlciB8fCBjdXJyZW50VGhyZWFkU2NoZWR1bGVyO1xuICAgICAgdGhpcy5xID0gW107XG4gICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGRQcm9wZXJ0aWVzKFJlcGxheVN1YmplY3QucHJvdG90eXBlLCBPYnNlcnZlci5wcm90b3R5cGUsIHtcbiAgICAgIF9zdWJzY3JpYmU6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIHZhciBzbyA9IG5ldyBTY2hlZHVsZWRPYnNlcnZlcih0aGlzLnNjaGVkdWxlciwgbyksIHN1YnNjcmlwdGlvbiA9IGNyZWF0ZVJlbW92YWJsZURpc3Bvc2FibGUodGhpcywgc28pO1xuXG4gICAgICAgIHRoaXMuX3RyaW0odGhpcy5zY2hlZHVsZXIubm93KCkpO1xuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKHNvKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5xLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgc28ub25OZXh0KHRoaXMucVtpXS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgIHNvLm9uRXJyb3IodGhpcy5lcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICBzby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc28uZW5zdXJlQWN0aXZlKCk7XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3ViamVjdCBoYXMgb2JzZXJ2ZXJzIHN1YnNjcmliZWQgdG8gaXQuXG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1YmplY3QgaGFzIG9ic2VydmVycyBzdWJzY3JpYmVkIHRvIGl0LlxuICAgICAgICovXG4gICAgICBoYXNPYnNlcnZlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gICAgICB9LFxuICAgICAgX3RyaW06IGZ1bmN0aW9uIChub3cpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMucS5sZW5ndGggPiB0aGlzLmJ1ZmZlclNpemUpIHtcbiAgICAgICAgICB0aGlzLnEuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGhpcy5xLmxlbmd0aCA+IDAgJiYgKG5vdyAtIHRoaXMucVswXS5pbnRlcnZhbCkgPiB0aGlzLndpbmRvd1NpemUpIHtcbiAgICAgICAgICB0aGlzLnEuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBhcnJpdmFsIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VuZCB0byBhbGwgb2JzZXJ2ZXJzLlxuICAgICAgICovXG4gICAgICBvbk5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHZhciBub3cgPSB0aGlzLnNjaGVkdWxlci5ub3coKTtcbiAgICAgICAgdGhpcy5xLnB1c2goeyBpbnRlcnZhbDogbm93LCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHRoaXMuX3RyaW0obm93KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBvc1tpXTtcbiAgICAgICAgICBvYnNlcnZlci5vbk5leHQodmFsdWUpO1xuICAgICAgICAgIG9ic2VydmVyLmVuc3VyZUFjdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7TWl4ZWR9IGVycm9yIFRoZSBleGNlcHRpb24gdG8gc2VuZCB0byBhbGwgb2JzZXJ2ZXJzLlxuICAgICAgICovXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgIHZhciBub3cgPSB0aGlzLnNjaGVkdWxlci5ub3coKTtcbiAgICAgICAgdGhpcy5fdHJpbShub3cpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBvc1tpXTtcbiAgICAgICAgICBvYnNlcnZlci5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICBvYnNlcnZlci5lbnN1cmVBY3RpdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBlbmQgb2YgdGhlIHNlcXVlbmNlLlxuICAgICAgICovXG4gICAgICBvbkNvbXBsZXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG5vdyA9IHRoaXMuc2NoZWR1bGVyLm5vdygpO1xuICAgICAgICB0aGlzLl90cmltKG5vdyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBvYnNlcnZlciA9IG9zW2ldO1xuICAgICAgICAgIG9ic2VydmVyLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuZW5zdXJlQWN0aXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFVuc3Vic2NyaWJlIGFsbCBvYnNlcnZlcnMgYW5kIHJlbGVhc2UgcmVzb3VyY2VzLlxuICAgICAgICovXG4gICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBSZXBsYXlTdWJqZWN0O1xuICB9KE9ic2VydmFibGUpKTtcblxuICAvKipcbiAgKiBVc2VkIHRvIHBhdXNlIGFuZCByZXN1bWUgc3RyZWFtcy5cbiAgKi9cbiAgUnguUGF1c2VyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhQYXVzZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gUGF1c2VyKCkge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGF1c2VzIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlLlxuICAgICAqL1xuICAgIFBhdXNlci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7IHRoaXMub25OZXh0KGZhbHNlKTsgfTtcblxuICAgIC8qKlxuICAgICogUmVzdW1lcyB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZS5cbiAgICAqL1xuICAgIFBhdXNlci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkgeyB0aGlzLm9uTmV4dCh0cnVlKTsgfTtcblxuICAgIHJldHVybiBQYXVzZXI7XG4gIH0oU3ViamVjdCkpO1xuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuICAgIHJvb3QuUnggPSBSeDtcblxuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBSeDtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG4gICAgLy8gaW4gTm9kZS5qcyBvciBSaW5nb0pTXG4gICAgaWYgKG1vZHVsZUV4cG9ydHMpIHtcbiAgICAgIChmcmVlTW9kdWxlLmV4cG9ydHMgPSBSeCkuUnggPSBSeDtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJlZUV4cG9ydHMuUnggPSBSeDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaW4gYSBicm93c2VyIG9yIFJoaW5vXG4gICAgcm9vdC5SeCA9IFJ4O1xuICB9XG5cbiAgLy8gQWxsIGNvZGUgYmVmb3JlIHRoaXMgcG9pbnQgd2lsbCBiZSBmaWx0ZXJlZCBmcm9tIHN0YWNrIHRyYWNlcy5cbiAgdmFyIHJFbmRpbmdMaW5lID0gY2FwdHVyZUxpbmUoKTtcblxufS5jYWxsKHRoaXMpKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2NsaW1iLXNvY2lhbC9+L3J4LWxpdGUvcngubGl0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdtb2R1bGUnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCBtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgbW9kKTtcbiAgICBnbG9iYWwuZmV0Y2hKc29ucCA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgbW9kdWxlKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGltZW91dDogNTAwMCxcbiAgICBqc29ucENhbGxiYWNrOiAnY2FsbGJhY2snXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDYWxsYmFja0Z1bmN0aW9uKCkge1xuICAgIHJldHVybiAnanNvbnBfJyArIERhdGUubm93KCkgKyAnXycgKyBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCk7XG4gIH1cblxuICAvLyBLbm93biBpc3N1ZTogV2lsbCB0aHJvdyAnVW5jYXVnaHQgUmVmZXJlbmNlRXJyb3I6IGNhbGxiYWNrXyoqKiBpcyBub3QgZGVmaW5lZCcgZXJyb3IgaWYgcmVxdWVzdCB0aW1lb3V0XG4gIGZ1bmN0aW9uIGNsZWFyRnVuY3Rpb24oZnVuY3Rpb25OYW1lKSB7XG4gICAgLy8gSUU4IHRocm93cyBhbiBleGNlcHRpb24gd2hlbiB5b3UgdHJ5IHRvIGRlbGV0ZSBhIHByb3BlcnR5IG9uIHdpbmRvd1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4MjQyMjgvNzUxMDg5XG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSB3aW5kb3dbZnVuY3Rpb25OYW1lXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB3aW5kb3dbZnVuY3Rpb25OYW1lXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTY3JpcHQoc2NyaXB0SWQpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2NyaXB0SWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgdmFyIGZldGNoSnNvbnAgPSBmdW5jdGlvbiBmZXRjaEpzb25wKHVybCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCAhPSBudWxsID8gb3B0aW9ucy50aW1lb3V0IDogZGVmYXVsdE9wdGlvbnMudGltZW91dDtcbiAgICB2YXIganNvbnBDYWxsYmFjayA9IG9wdGlvbnMuanNvbnBDYWxsYmFjayAhPSBudWxsID8gb3B0aW9ucy5qc29ucENhbGxiYWNrIDogZGVmYXVsdE9wdGlvbnMuanNvbnBDYWxsYmFjaztcblxuICAgIHZhciB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGNhbGxiYWNrRnVuY3Rpb24gPSBnZW5lcmF0ZUNhbGxiYWNrRnVuY3Rpb24oKTtcblxuICAgICAgd2luZG93W2NhbGxiYWNrRnVuY3Rpb25dID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIG9rOiB0cnVlLFxuICAgICAgICAgIC8vIGtlZXAgY29uc2lzdGVudCB3aXRoIGZldGNoIEFQSVxuICAgICAgICAgIGpzb246IGZ1bmN0aW9uIGpzb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuXG4gICAgICAgIHJlbW92ZVNjcmlwdChqc29ucENhbGxiYWNrICsgJ18nICsgY2FsbGJhY2tGdW5jdGlvbik7XG5cbiAgICAgICAgY2xlYXJGdW5jdGlvbihjYWxsYmFja0Z1bmN0aW9uKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyIHNldCB0aGVpciBvd24gcGFyYW1zLCBhbmQgaWYgbm90IGFkZCBhID8gdG8gc3RhcnQgYSBsaXN0IG9mIHBhcmFtc1xuICAgICAgdXJsICs9IHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnO1xuXG4gICAgICB2YXIganNvbnBTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIGpzb25wU2NyaXB0LnNldEF0dHJpYnV0ZShcInNyY1wiLCB1cmwgKyBqc29ucENhbGxiYWNrICsgJz0nICsgY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICBqc29ucFNjcmlwdC5pZCA9IGpzb25wQ2FsbGJhY2sgKyAnXycgKyBjYWxsYmFja0Z1bmN0aW9uO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGpzb25wU2NyaXB0KTtcblxuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0pTT05QIHJlcXVlc3QgdG8gJyArIHVybCArICcgdGltZWQgb3V0JykpO1xuXG4gICAgICAgIGNsZWFyRnVuY3Rpb24oY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICAgIHJlbW92ZVNjcmlwdChqc29ucENhbGxiYWNrICsgJ18nICsgY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICB9LCB0aW1lb3V0KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBleHBvcnQgYXMgZ2xvYmFsIGZ1bmN0aW9uXG4gIC8qXG4gIGxldCBsb2NhbDtcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbG9jYWwgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbG9jYWwgPSBzZWxmO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQnKTtcbiAgICB9XG4gIH1cbiAgXG4gIGxvY2FsLmZldGNoSnNvbnAgPSBmZXRjaEpzb25wO1xuICAqL1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZmV0Y2hKc29ucDtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ZldGNoLWpzb25wL2J1aWxkL2ZldGNoLWpzb25wLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaWxlIGZyb20gJy4vVGlsZSc7XG5pbXBvcnQge1RyYW5zaXRpb25Nb3Rpb24sIHNwcmluZ30gZnJvbSAncmVhY3QtbW90aW9uJztcblxuXG5jbGFzcyBXYWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGl0ZW1zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgZ2V0U3R5bGVzKCkge1xuICAgICAgICBjb25zdCBjb25maWdzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuaXRlbXMpLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgY29uZmlnc1trZXldID0ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHNwcmluZygxKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogc3ByaW5nKDMwKSxcbiAgICAgICAgICAgICAgICBtYXJnaW46IHNwcmluZygxKSxcbiAgICAgICAgICAgICAgICBpdGVtOiB0aGlzLnByb3BzLml0ZW1zW2tleV1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29uZmlncztcbiAgICB9XG5cbiAgICB3aWxsRW50ZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcGFjaXR5OiBzcHJpbmcoMCksXG4gICAgICAgICAgICB3aWR0aDogc3ByaW5nKDApLFxuICAgICAgICAgICAgbWFyZ2luOiBzcHJpbmcoMCksXG4gICAgICAgICAgICBpdGVtOiB0aGlzLnByb3BzLml0ZW1zW2tleV1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3aWxsTGVhdmUoa2V5LCBzdHlsZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3BhY2l0eTogc3ByaW5nKDApLFxuICAgICAgICAgICAgd2lkdGg6IHNwcmluZygwKSxcbiAgICAgICAgICAgIG1hcmdpbjogc3ByaW5nKDApLFxuICAgICAgICAgICAgaXRlbTogc3R5bGUuaXRlbVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlclRpbGUoa2V5LCBpdGVtVmFsdWVzKSB7XG5cbiAgICAgICAgY29uc3Qge2l0ZW0sIC4uLnN0eWxlQ29uZmlnfSA9IGl0ZW1WYWx1ZXM7XG4gICAgICAgIGNvbnN0IHsuLi5pdGVtUHJvcHN9ID0gaXRlbTtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IHN0eWxlQ29uZmlnLm9wYWNpdHksXG4gICAgICAgICAgICB3aWR0aDogYCR7c3R5bGVDb25maWcud2lkdGh9JWAsXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHtzdHlsZUNvbmZpZy5tYXJnaW59JWAsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogYCR7c3R5bGVDb25maWcubWFyZ2lufSVgXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUaWxlIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgIHsuLi5pdGVtUHJvcHMgfSAvPlxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRyYW5zaXRpb25Nb3Rpb25cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3RoaXMuZ2V0U3R5bGVzLmJpbmQodGhpcykoKX1cbiAgICAgICAgICAgICAgICB3aWxsRW50ZXI9e3RoaXMud2lsbEVudGVyLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgd2lsbExlYXZlPXt0aGlzLndpbGxMZWF2ZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICB7dmFsdWVzID0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpbWJfX3dhbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh2YWx1ZXMpLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1WYWx1ZXMgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUaWxlKGtleSwgaXRlbVZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uTW90aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FsbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvd2FsbC9XYWxsLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi8uLi9jb21tb24vSW1hZ2UnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi8uLi9jb21tb24vTWVzc2FnZSc7XG5pbXBvcnQgQXV0aG9yIGZyb20gJy4vLi4vY29tbW9uL0F1dGhvcic7XG5cblxuY2xhc3MgVGlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlSW1hZ2UoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW1hZ2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHt1cmw6IHNyYywgd2lkdGgsIGhlaWdodH0gPSB0aGlzLnByb3BzLmltYWdlO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXsgc3JjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9eyB3aWR0aCB9XG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17IGhlaWdodCB9Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY3JlYXRlTWVzc2FnZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5tZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGJvZHk9eyB0aGlzLnByb3BzLm1lc3NhZ2UgfS8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzU3RyaW5nKCkge1xuXG4gICAgICAgIGxldCBjbGFzc1N0cmluZyA9IGBjbGltYl9fdGlsZSBjbGltYl9fdGlsZS0tJHt0aGlzLnByb3BzLnNvdXJjZV90eXBlfWA7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW1hZ2UpIHtcbiAgICAgICAgICAgIGNsYXNzU3RyaW5nICs9ICcgY2xpbWJfX3RpbGUtLWhhcy1tZWRpYSBjbGltYl9fdGlsZS0taGFzLWltYWdlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzU3RyaW5nICs9ICcgY2xpbWJfX3RpbGUtLWhhcy1uby1pbWFnZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aWRlb191cmwpIHtcbiAgICAgICAgICAgIGNsYXNzU3RyaW5nICs9ICcgY2xpbWJfX3RpbGUtLWhhcy1tZWRpYSBjbGltYl9fdGlsZS0taGFzLXZpZGVvJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzU3RyaW5nICs9ICcgY2xpbWJfX3RpbGUtLWhhcy1uby12aWRlbyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xhc3NTdHJpbmc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5jcmVhdGVJbWFnZSgpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5jcmVhdGVNZXNzYWdlKCk7XG4gICAgICAgIGNvbnN0IGNsYXNzU3RyaW5nID0gdGhpcy5jcmVhdGVDbGFzc1N0cmluZygpO1xuICAgICAgICBjb25zdCB7YXV0aG9yfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NTdHJpbmcgfVxuICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXsgdGhpcy5wcm9wcy5saW5rIH0+XG4gICAgICAgICAgICAgICAgICAgIHsgaW1hZ2UgfVxuICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpbWJfX3RpbGVfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgeyBtZXNzYWdlIH1cblxuICAgICAgICAgICAgICAgICAgICA8QXV0aG9yIHsuLi5hdXRob3J9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuVGlsZS5wcm9wVHlwZXMgPSB7XG5cbiAgICAvLyBSZXF1aXJlZCBhdHRyc1xuICAgIGxpbms6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzb3VyY2VfdHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRpbWVzdGFtcDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGF1dGhvcjogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgdXNlcm5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgcGljdHVyZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBsaW5rOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9KSxcblxuICAgIC8vIE9wdGlvbmFsIGF0dHJzXG4gICAgbWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2aWRlb19zcmM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW1hZ2U6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICAgIH0pXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3dhbGwvVGlsZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2xpbWJfX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgc3JjPXsgdGhpcy5wcm9wcy5zcmMgfSBkYXRhLXdpZHRoPXsgdGhpcy5wcm9wcy53aWR0aCB9IGRhdGEtaGVpZ2h0PXsgdGhpcy5wcm9wcy5oZWlnaHQgfS8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5JbWFnZS5wcm9wVHlwZXMgPSB7XG4gICAgc3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0ltYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMuYm9keVxuICAgICAgICAgICAgLnJlcGxhY2UoLzxhIGhyZWY9XCJodHRwOlxcL1xcL3BpYy50d2l0dGVyLmNvbVxcL1tePl0qPihbXjxdKyk8XFwvYT4vZywgJycpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaW1iX190aWxlX19tZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG1lc3NhZ2V9fT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gICAgYm9keTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9jb21tb24vTWVzc2FnZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIEF1dGhvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsaW1iX190aWxlX19hdXRob3JcIlxuICAgICAgICAgICAgICAgaHJlZj17IHRoaXMucHJvcHMubGluayB9PlxuXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eyB0aGlzLnByb3BzLnBpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgICBhbHQ9eyBgUHJvZmlsZSBwaWMgb2YgJHt0aGlzLnByb3BzLm5hbWV9YCB9Lz5cblxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjbGltYl9fdGlsZV9fYXV0aG9yX191c2VybmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMudXNlcm5hbWUgfVxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BdXRob3IucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhvcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0F1dGhvci5qc3hcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NvbXBvbmVudHMyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzJyk7XG5cbnZhciBfY29tcG9uZW50czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnRzMik7XG5cbnZhciBfcmVvcmRlcktleXMgPSByZXF1aXJlKCcuL3Jlb3JkZXJLZXlzJyk7XG5cbnZhciBfcmVvcmRlcktleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVvcmRlcktleXMpO1xuXG52YXIgX2NvbXBvbmVudHMgPSBfY29tcG9uZW50czNbJ2RlZmF1bHQnXShfcmVhY3QyWydkZWZhdWx0J10pO1xuXG52YXIgU3ByaW5nID0gX2NvbXBvbmVudHMuU3ByaW5nO1xudmFyIFRyYW5zaXRpb25TcHJpbmcgPSBfY29tcG9uZW50cy5UcmFuc2l0aW9uU3ByaW5nO1xudmFyIE1vdGlvbiA9IF9jb21wb25lbnRzLk1vdGlvbjtcbnZhciBTdGFnZ2VyZWRNb3Rpb24gPSBfY29tcG9uZW50cy5TdGFnZ2VyZWRNb3Rpb247XG52YXIgVHJhbnNpdGlvbk1vdGlvbiA9IF9jb21wb25lbnRzLlRyYW5zaXRpb25Nb3Rpb247XG5leHBvcnRzLlNwcmluZyA9IFNwcmluZztcbmV4cG9ydHMuVHJhbnNpdGlvblNwcmluZyA9IFRyYW5zaXRpb25TcHJpbmc7XG5leHBvcnRzLk1vdGlvbiA9IE1vdGlvbjtcbmV4cG9ydHMuU3RhZ2dlcmVkTW90aW9uID0gU3RhZ2dlcmVkTW90aW9uO1xuZXhwb3J0cy5UcmFuc2l0aW9uTW90aW9uID0gVHJhbnNpdGlvbk1vdGlvbjtcblxudmFyIF9zcHJpbmcyID0gcmVxdWlyZSgnLi9zcHJpbmcnKTtcblxudmFyIF9zcHJpbmczID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ByaW5nMik7XG5cbmV4cG9ydHMuc3ByaW5nID0gX3NwcmluZzNbJ2RlZmF1bHQnXTtcblxudmFyIF9wcmVzZXRzMiA9IHJlcXVpcmUoJy4vcHJlc2V0cycpO1xuXG52YXIgX3ByZXNldHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0czIpO1xuXG5leHBvcnRzLnByZXNldHMgPSBfcHJlc2V0czNbJ2RlZmF1bHQnXTtcbnZhciB1dGlscyA9IHtcbiAgcmVvcmRlcktleXM6IF9yZW9yZGVyS2V5czJbJ2RlZmF1bHQnXVxufTtcbmV4cG9ydHMudXRpbHMgPSB1dGlscztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3JlYWN0LW1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNvbXBvbmVudHM7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9ub1ZlbG9jaXR5ID0gcmVxdWlyZSgnLi9ub1ZlbG9jaXR5Jyk7XG5cbnZhciBfbm9WZWxvY2l0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub1ZlbG9jaXR5KTtcblxudmFyIF9oYXNSZWFjaGVkU3R5bGUgPSByZXF1aXJlKCcuL2hhc1JlYWNoZWRTdHlsZScpO1xuXG52YXIgX2hhc1JlYWNoZWRTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNSZWFjaGVkU3R5bGUpO1xuXG52YXIgX21lcmdlRGlmZiA9IHJlcXVpcmUoJy4vbWVyZ2VEaWZmJyk7XG5cbnZhciBfbWVyZ2VEaWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21lcmdlRGlmZik7XG5cbnZhciBfYW5pbWF0aW9uTG9vcCA9IHJlcXVpcmUoJy4vYW5pbWF0aW9uTG9vcCcpO1xuXG52YXIgX2FuaW1hdGlvbkxvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5pbWF0aW9uTG9vcCk7XG5cbnZhciBfemVybyA9IHJlcXVpcmUoJy4vemVybycpO1xuXG52YXIgX3plcm8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfemVybyk7XG5cbnZhciBfdXBkYXRlVHJlZSA9IHJlcXVpcmUoJy4vdXBkYXRlVHJlZScpO1xuXG52YXIgX2RlcHJlY2F0ZWRTcHJpbmdzMiA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlZFNwcmluZ3MnKTtcblxudmFyIF9kZXByZWNhdGVkU3ByaW5nczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXByZWNhdGVkU3ByaW5nczIpO1xuXG52YXIgX3N0cmlwU3R5bGUgPSByZXF1aXJlKCcuL3N0cmlwU3R5bGUnKTtcblxudmFyIF9zdHJpcFN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmlwU3R5bGUpO1xuXG52YXIgc3RhcnRBbmltYXRpb24gPSBfYW5pbWF0aW9uTG9vcDJbJ2RlZmF1bHQnXSgpO1xuXG5mdW5jdGlvbiBtYXBPYmplY3QoZiwgb2JqKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXRba2V5XSA9IGYob2JqW2tleV0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZXZlcnlPYmooZiwgb2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFmKG9ialtrZXldLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRzKFJlYWN0KSB7XG4gIHZhciBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbiAgdmFyIE1vdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ01vdGlvbicsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIC8vIFRPT0Q6IHdhcm4gYWdhaW5zdCBwdXR0aW5nIGEgY29uZmlnIGluIGhlcmVcbiAgICAgIGRlZmF1bHRWYWx1ZTogZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1NwcmluZ1xcJ3MgYGRlZmF1bHRWYWx1ZWAgaGFzIGJlZW4gY2hhbmdlZCB0byBgZGVmYXVsdFN0eWxlYC4gJyArICdJdHMgZm9ybWF0IHJlY2VpdmVkIGEgZmV3IChlYXN5IHRvIHVwZGF0ZSEpIGNoYW5nZXMgYXMgd2VsbC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVuZFZhbHVlOiBmdW5jdGlvbiBlbmRWYWx1ZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTcHJpbmdcXCdzIGBlbmRWYWx1ZWAgaGFzIGJlZW4gY2hhbmdlZCB0byBgc3R5bGVgLiBJdHMgZm9ybWF0ICcgKyAncmVjZWl2ZWQgYSBmZXcgKGVhc3kgdG8gdXBkYXRlISkgY2hhbmdlcyBhcyB3ZWxsLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVmYXVsdFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgZGVmYXVsdFN0eWxlID0gX3Byb3BzLmRlZmF1bHRTdHlsZTtcbiAgICAgIHZhciBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcblxuICAgICAgdmFyIGN1cnJlbnRTdHlsZSA9IGRlZmF1bHRTdHlsZSB8fCBzdHlsZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdHlsZTogY3VycmVudFN0eWxlLFxuICAgICAgICBjdXJyZW50VmVsb2NpdHk6IG1hcE9iamVjdChfemVybzJbJ2RlZmF1bHQnXSwgY3VycmVudFN0eWxlKVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25TdGVwOiBmdW5jdGlvbiBhbmltYXRpb25TdGVwKHRpbWVzdGVwLCBzdGF0ZSkge1xuICAgICAgdmFyIGN1cnJlbnRTdHlsZSA9IHN0YXRlLmN1cnJlbnRTdHlsZTtcbiAgICAgIHZhciBjdXJyZW50VmVsb2NpdHkgPSBzdGF0ZS5jdXJyZW50VmVsb2NpdHk7XG4gICAgICB2YXIgc3R5bGUgPSB0aGlzLnByb3BzLnN0eWxlO1xuXG4gICAgICB2YXIgbmV3Q3VycmVudFN0eWxlID0gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFN0eWxlKHRpbWVzdGVwLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0eSwgc3R5bGUpO1xuICAgICAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0eSA9IF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJlbnRWZWxvY2l0eSh0aW1lc3RlcCwgY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdHksIHN0eWxlKTtcblxuICAgICAgLy8gVE9PRDogdGhpcyBpc24ndCBuZWNlc3NhcnkgYW55bW9yZS4gSXQgd2FzIHVzZWQgb25seSBhZ2FpbnN0IGVuZFZhbHVlIGZ1bmNcbiAgICAgIGlmIChfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXShjdXJyZW50VmVsb2NpdHksIG5ld0N1cnJlbnRTdHlsZSkgJiYgX25vVmVsb2NpdHkyWydkZWZhdWx0J10obmV3Q3VycmVudFZlbG9jaXR5LCBuZXdDdXJyZW50U3R5bGUpKSB7XG4gICAgICAgIC8vIGNoZWNrIGV4cGxhbmF0aW9uIGluIGBNb3Rpb24uYW5pbWF0aW9uUmVuZGVyYFxuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTsgLy8gTmFzdHkgc2lkZSBlZmZlY3RzLi4uLlxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3R5bGU6IG5ld0N1cnJlbnRTdHlsZSxcbiAgICAgICAgY3VycmVudFZlbG9jaXR5OiBuZXdDdXJyZW50VmVsb2NpdHlcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHN0b3BBbmltYXRpb246IG51bGwsXG5cbiAgICAvLyB1c2VkIGluIGFuaW1hdGlvblJlbmRlclxuICAgIGhhc1VubW91bnRlZDogZmFsc2UsXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgIHRoaXMuaGFzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgc3RhcnRBbmltYXRpbmc6IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW5nKCkge1xuICAgICAgLy8gSXMgc21hcnQgZW5vdWdoIHRvIG5vdCBzdGFydCBpdCB0d2ljZVxuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uID0gc3RhcnRBbmltYXRpb24odGhpcy5zdGF0ZSwgdGhpcy5hbmltYXRpb25TdGVwLCB0aGlzLmFuaW1hdGlvblJlbmRlcik7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblJlbmRlcjogZnVuY3Rpb24gYW5pbWF0aW9uUmVuZGVyKGFscGhhLCBuZXh0U3RhdGUsIHByZXZTdGF0ZSkge1xuICAgICAgLy8gYHRoaXMuaGFzVW5tb3VudGVkYCBtaWdodCBiZSB0cnVlIGluIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uOlxuICAgICAgLy8gdXNlciBkb2VzIHNvbWUgY2hlY2tzIGluIGBzdHlsZWAgYW5kIGNhbGxzIGFuIG93bmVyIGhhbmRsZXJcbiAgICAgIC8vIG93bmVyIHNldHMgc3RhdGUgaW4gdGhlIGNhbGxiYWNrLCB0cmlnZ2VyaW5nIGEgcmUtcmVuZGVyXG4gICAgICAvLyB1bm1vdW50cyBNb3Rpb25cbiAgICAgIGlmICghdGhpcy5oYXNVbm1vdW50ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFN0eWxlOiBfdXBkYXRlVHJlZS5pbnRlcnBvbGF0ZVZhbHVlKGFscGhhLCBuZXh0U3RhdGUuY3VycmVudFN0eWxlLCBwcmV2U3RhdGUuY3VycmVudFN0eWxlKSxcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdHk6IG5leHRTdGF0ZS5jdXJyZW50VmVsb2NpdHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHN0cmlwcGVkU3R5bGUgPSBfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXSh0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZSk7XG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4oc3RyaXBwZWRTdHlsZSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIFN0YWdnZXJlZE1vdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1N0YWdnZXJlZE1vdGlvbicsXG5cbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgIGRlZmF1bHRTdHlsZTogZnVuY3Rpb24gZGVmYXVsdFN0eWxlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBmb3Jnb3QgdGhlIFwic1wiIGZvciBgU3RhZ2dlcmVkTW90aW9uYFxcJ3MgYGRlZmF1bHRTdHlsZXNgLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3R5bGU6IGZ1bmN0aW9uIHN0eWxlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBmb3Jnb3QgdGhlIFwic1wiIGZvciBgU3RhZ2dlcmVkTW90aW9uYFxcJ3MgYHN0eWxlc2AuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBjb25maWdzIGluIGhlcmVcbiAgICAgIGRlZmF1bHRTdHlsZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgICAgc3R5bGVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgc3R5bGVzID0gX3Byb3BzMi5zdHlsZXM7XG4gICAgICB2YXIgZGVmYXVsdFN0eWxlcyA9IF9wcm9wczIuZGVmYXVsdFN0eWxlcztcblxuICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBkZWZhdWx0U3R5bGVzID8gZGVmYXVsdFN0eWxlcyA6IHN0eWxlcygpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IGN1cnJlbnRTdHlsZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcE9iamVjdChfemVybzJbJ2RlZmF1bHQnXSwgcyk7XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblN0ZXA6IGZ1bmN0aW9uIGFuaW1hdGlvblN0ZXAodGltZXN0ZXAsIHN0YXRlKSB7XG4gICAgICB2YXIgY3VycmVudFN0eWxlcyA9IHN0YXRlLmN1cnJlbnRTdHlsZXM7XG4gICAgICB2YXIgY3VycmVudFZlbG9jaXRpZXMgPSBzdGF0ZS5jdXJyZW50VmVsb2NpdGllcztcblxuICAgICAgdmFyIHN0eWxlcyA9IHRoaXMucHJvcHMuc3R5bGVzKGN1cnJlbnRTdHlsZXMubWFwKF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKSk7XG5cbiAgICAgIHZhciBuZXdDdXJyZW50U3R5bGVzID0gY3VycmVudFN0eWxlcy5tYXAoZnVuY3Rpb24gKGN1cnJlbnRTdHlsZSwgaSkge1xuICAgICAgICByZXR1cm4gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFN0eWxlKHRpbWVzdGVwLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0aWVzW2ldLCBzdHlsZXNbaV0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXRpZXMgPSBjdXJyZW50U3R5bGVzLm1hcChmdW5jdGlvbiAoY3VycmVudFN0eWxlLCBpKSB7XG4gICAgICAgIHJldHVybiBfdXBkYXRlVHJlZS51cGRhdGVDdXJyZW50VmVsb2NpdHkodGltZXN0ZXAsIGN1cnJlbnRTdHlsZSwgY3VycmVudFZlbG9jaXRpZXNbaV0sIHN0eWxlc1tpXSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gVE9ETzogaXMgdGhpcyByaWdodD9cbiAgICAgIGlmIChjdXJyZW50VmVsb2NpdGllcy5ldmVyeShmdW5jdGlvbiAodiwgaykge1xuICAgICAgICByZXR1cm4gX25vVmVsb2NpdHkyWydkZWZhdWx0J10odiwgY3VycmVudFN0eWxlc1trXSk7XG4gICAgICB9KSAmJiBuZXdDdXJyZW50VmVsb2NpdGllcy5ldmVyeShmdW5jdGlvbiAodiwgaykge1xuICAgICAgICByZXR1cm4gX25vVmVsb2NpdHkyWydkZWZhdWx0J10odiwgbmV3Q3VycmVudFN0eWxlc1trXSk7XG4gICAgICB9KSkge1xuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0eWxlczogbmV3Q3VycmVudFN0eWxlcyxcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG5ld0N1cnJlbnRWZWxvY2l0aWVzXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBzdG9wQW5pbWF0aW9uOiBudWxsLFxuXG4gICAgLy8gdXNlZCBpbiBhbmltYXRpb25SZW5kZXJcbiAgICBoYXNVbm1vdW50ZWQ6IGZhbHNlLFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLmhhc1VubW91bnRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0YXJ0QW5pbWF0aW5nOiBmdW5jdGlvbiBzdGFydEFuaW1hdGluZygpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbiA9IHN0YXJ0QW5pbWF0aW9uKHRoaXMuc3RhdGUsIHRoaXMuYW5pbWF0aW9uU3RlcCwgdGhpcy5hbmltYXRpb25SZW5kZXIpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25SZW5kZXI6IGZ1bmN0aW9uIGFuaW1hdGlvblJlbmRlcihhbHBoYSwgbmV4dFN0YXRlLCBwcmV2U3RhdGUpIHtcbiAgICAgIC8vIFNlZSBjb21tZW50IGluIE1vdGlvbi5cbiAgICAgIGlmICghdGhpcy5oYXNVbm1vdW50ZWQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBuZXh0U3RhdGUuY3VycmVudFN0eWxlcy5tYXAoZnVuY3Rpb24gKHN0eWxlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIF91cGRhdGVUcmVlLmludGVycG9sYXRlVmFsdWUoYWxwaGEsIHN0eWxlLCBwcmV2U3RhdGUuY3VycmVudFN0eWxlc1tpXSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXh0U3RhdGUuY3VycmVudFZlbG9jaXRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHN0cmlwcGVkU3R5bGUgPSB0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMubWFwKF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKTtcbiAgICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbihzdHJpcHBlZFN0eWxlKTtcbiAgICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIFJlYWN0LkNoaWxkcmVuLm9ubHkocmVuZGVyZWRDaGlsZHJlbik7XG4gICAgfVxuICB9KTtcblxuICB2YXIgVHJhbnNpdGlvbk1vdGlvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25Nb3Rpb24nLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBkZWZhdWx0VmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdUcmFuc2l0aW9uU3ByaW5nXFwncyBgZGVmYXVsdFZhbHVlYCBoYXMgYmVlbiBjaGFuZ2VkIHRvICcgKyAnYGRlZmF1bHRTdHlsZXNgLiBJdHMgZm9ybWF0IHJlY2VpdmVkIGEgZmV3IChlYXN5IHRvIHVwZGF0ZSEpICcgKyAnY2hhbmdlcyBhcyB3ZWxsLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW5kVmFsdWU6IGZ1bmN0aW9uIGVuZFZhbHVlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RyYW5zaXRpb25TcHJpbmdcXCdzIGBlbmRWYWx1ZWAgaGFzIGJlZW4gY2hhbmdlZCB0byBgc3R5bGVzYC4gJyArICdJdHMgZm9ybWF0IHJlY2VpdmVkIGEgZmV3IChlYXN5IHRvIHVwZGF0ZSEpIGNoYW5nZXMgYXMgd2VsbC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRTdHlsZTogZnVuY3Rpb24gZGVmYXVsdFN0eWxlKHByb3AsIHByb3BOYW1lKSB7XG4gICAgICAgIGlmIChwcm9wW3Byb3BOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBmb3Jnb3QgdGhlIFwic1wiIGZvciBgVHJhbnNpdGlvbk1vdGlvbmBcXCdzIGBkZWZhdWx0U3R5bGVzYC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0eWxlOiBmdW5jdGlvbiBzdHlsZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgZm9yZ290IHRoZSBcInNcIiBmb3IgYFRyYW5zaXRpb25Nb3Rpb25gXFwncyBgc3R5bGVzYC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIFRPT0Q6IHdhcm4gYWdhaW5zdCBwdXR0aW5nIGNvbmZpZ3MgaW4gaGVyZVxuICAgICAgZGVmYXVsdFN0eWxlczogUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hbnkpLFxuICAgICAgc3R5bGVzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdE9mKFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCldKS5pc1JlcXVpcmVkLFxuICAgICAgd2lsbExlYXZlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgLy8gVE9PRDogd2FybiBhZ2FpbnN0IHB1dHRpbmcgY29uZmlncyBpbiBoZXJlXG4gICAgICB3aWxsRW50ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jXSksXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpbGxFbnRlcjogZnVuY3Rpb24gd2lsbEVudGVyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHdpbGxMZWF2ZTogZnVuY3Rpb24gd2lsbExlYXZlKCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdHlsZXMgPSBfcHJvcHMzLnN0eWxlcztcbiAgICAgIHZhciBkZWZhdWx0U3R5bGVzID0gX3Byb3BzMy5kZWZhdWx0U3R5bGVzO1xuXG4gICAgICB2YXIgY3VycmVudFN0eWxlcyA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChkZWZhdWx0U3R5bGVzID09IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVzID0gc3R5bGVzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFN0eWxlcyA9IHN0eWxlcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFN0eWxlcyA9IGRlZmF1bHRTdHlsZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgICBjdXJyZW50VmVsb2NpdGllczogbWFwT2JqZWN0KGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcE9iamVjdChfemVybzJbJ2RlZmF1bHQnXSwgcyk7XG4gICAgICAgIH0sIGN1cnJlbnRTdHlsZXMpXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW5nKCk7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblN0ZXA6IGZ1bmN0aW9uIGFuaW1hdGlvblN0ZXAodGltZXN0ZXAsIHN0YXRlKSB7XG4gICAgICB2YXIgY3VycmVudFN0eWxlcyA9IHN0YXRlLmN1cnJlbnRTdHlsZXM7XG4gICAgICB2YXIgY3VycmVudFZlbG9jaXRpZXMgPSBzdGF0ZS5jdXJyZW50VmVsb2NpdGllcztcbiAgICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBzdHlsZXMgPSBfcHJvcHM0LnN0eWxlcztcbiAgICAgIHZhciB3aWxsRW50ZXIgPSBfcHJvcHM0LndpbGxFbnRlcjtcbiAgICAgIHZhciB3aWxsTGVhdmUgPSBfcHJvcHM0LndpbGxMZWF2ZTtcblxuICAgICAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc3R5bGVzID0gc3R5bGVzKGN1cnJlbnRTdHlsZXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPOiBodWg/XG4gICAgICB2YXIgbWVyZ2VkU3R5bGVzID0gc3R5bGVzOyAvLyBzZXQgbWVyZ2VkU3R5bGVzIHRvIHN0eWxlcyBhcyB0aGUgZGVmYXVsdFxuICAgICAgdmFyIGhhc05ld0tleSA9IGZhbHNlO1xuXG4gICAgICBtZXJnZWRTdHlsZXMgPSBfbWVyZ2VEaWZmMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZXMsIHN0eWxlcyxcbiAgICAgIC8vIFRPRE86IHN0b3AgYWxsb2NhdGluZyBsaWtlIGNyYXp5IGluIHRoaXMgd2hvbGUgY29kZSBwYXRoXG4gICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciByZXMgPSB3aWxsTGVhdmUoa2V5LCBjdXJyZW50U3R5bGVzW2tleV0sIHN0eWxlcywgY3VycmVudFN0eWxlcywgY3VycmVudFZlbG9jaXRpZXMpO1xuICAgICAgICBpZiAocmVzID09IG51bGwpIHtcbiAgICAgICAgICAvLyBGb3IgbGVnYWN5IHJlYXNvbi4gV2Ugd29uJ3QgYWxsb3cgcmV0dXJuaW5nIG51bGwgc29vblxuICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSwgYWZ0ZXIgbmV4dCByZWxlYXNlXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX25vVmVsb2NpdHkyWydkZWZhdWx0J10oY3VycmVudFZlbG9jaXRpZXNba2V5XSwgY3VycmVudFN0eWxlc1trZXldKSAmJiBfaGFzUmVhY2hlZFN0eWxlMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZXNba2V5XSwgcmVzKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmtleXMobWVyZ2VkU3R5bGVzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gIWN1cnJlbnRTdHlsZXMuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX2V4dGVuZHMyLCBfZXh0ZW5kczM7XG5cbiAgICAgICAgaGFzTmV3S2V5ID0gdHJ1ZTtcbiAgICAgICAgdmFyIGVudGVyU3R5bGUgPSB3aWxsRW50ZXIoa2V5LCBtZXJnZWRTdHlsZXNba2V5XSwgc3R5bGVzLCBjdXJyZW50U3R5bGVzLCBjdXJyZW50VmVsb2NpdGllcyk7XG5cbiAgICAgICAgLy8gV2UgY2FuIG11dGF0ZSB0aGlzIGhlcmUgYmVjYXVzZSBtZXJnZURpZmYgcmV0dXJucyBhIG5ldyBPYmpcbiAgICAgICAgbWVyZ2VkU3R5bGVzW2tleV0gPSBlbnRlclN0eWxlO1xuXG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0eWxlcywgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJba2V5XSA9IGVudGVyU3R5bGUsIF9leHRlbmRzMikpO1xuICAgICAgICBjdXJyZW50VmVsb2NpdGllcyA9IF9leHRlbmRzKHt9LCBjdXJyZW50VmVsb2NpdGllcywgKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNba2V5XSA9IG1hcE9iamVjdChfemVybzJbJ2RlZmF1bHQnXSwgZW50ZXJTdHlsZSksIF9leHRlbmRzMykpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBuZXdDdXJyZW50U3R5bGVzID0gbWFwT2JqZWN0KGZ1bmN0aW9uIChtZXJnZWRTdHlsZSwga2V5KSB7XG4gICAgICAgIHJldHVybiBfdXBkYXRlVHJlZS51cGRhdGVDdXJyZW50U3R5bGUodGltZXN0ZXAsIGN1cnJlbnRTdHlsZXNba2V5XSwgY3VycmVudFZlbG9jaXRpZXNba2V5XSwgbWVyZ2VkU3R5bGUpO1xuICAgICAgfSwgbWVyZ2VkU3R5bGVzKTtcbiAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdGllcyA9IG1hcE9iamVjdChmdW5jdGlvbiAobWVyZ2VkU3R5bGUsIGtleSkge1xuICAgICAgICByZXR1cm4gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFZlbG9jaXR5KHRpbWVzdGVwLCBjdXJyZW50U3R5bGVzW2tleV0sIGN1cnJlbnRWZWxvY2l0aWVzW2tleV0sIG1lcmdlZFN0eWxlKTtcbiAgICAgIH0sIG1lcmdlZFN0eWxlcyk7XG5cbiAgICAgIGlmICghaGFzTmV3S2V5ICYmIGV2ZXJ5T2JqKGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICAgIHJldHVybiBfbm9WZWxvY2l0eTJbJ2RlZmF1bHQnXSh2LCBjdXJyZW50U3R5bGVzW2tdKTtcbiAgICAgIH0sIGN1cnJlbnRWZWxvY2l0aWVzKSAmJiBldmVyeU9iaihmdW5jdGlvbiAodiwgaykge1xuICAgICAgICByZXR1cm4gX25vVmVsb2NpdHkyWydkZWZhdWx0J10odiwgbmV3Q3VycmVudFN0eWxlc1trXSk7XG4gICAgICB9LCBuZXdDdXJyZW50VmVsb2NpdGllcykpIHtcbiAgICAgICAgLy8gY2hlY2sgZXhwbGFuYXRpb24gaW4gYE1vdGlvbi5hbmltYXRpb25SZW5kZXJgXG4gICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpOyAvLyBOYXN0eSBzaWRlIGVmZmVjdHMuLi4uXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXM6IG5ld0N1cnJlbnRTdHlsZXMsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXdDdXJyZW50VmVsb2NpdGllc1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgc3RvcEFuaW1hdGlvbjogbnVsbCxcblxuICAgIC8vIHVzZWQgaW4gYW5pbWF0aW9uUmVuZGVyXG4gICAgaGFzVW5tb3VudGVkOiBmYWxzZSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5oYXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdGFydEFuaW1hdGluZzogZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSBzdGFydEFuaW1hdGlvbih0aGlzLnN0YXRlLCB0aGlzLmFuaW1hdGlvblN0ZXAsIHRoaXMuYW5pbWF0aW9uUmVuZGVyKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uUmVuZGVyOiBmdW5jdGlvbiBhbmltYXRpb25SZW5kZXIoYWxwaGEsIG5leHRTdGF0ZSwgcHJldlN0YXRlKSB7XG4gICAgICAvLyBTZWUgY29tbWVudCBpbiBNb3Rpb24uXG4gICAgICBpZiAoIXRoaXMuaGFzVW5tb3VudGVkKSB7XG4gICAgICAgIHZhciBjdXJyZW50U3R5bGVzID0gbWFwT2JqZWN0KGZ1bmN0aW9uIChzdHlsZSwga2V5KSB7XG4gICAgICAgICAgcmV0dXJuIF91cGRhdGVUcmVlLmludGVycG9sYXRlVmFsdWUoYWxwaGEsIHN0eWxlLCBwcmV2U3RhdGUuY3VycmVudFN0eWxlc1trZXldKTtcbiAgICAgICAgfSwgbmV4dFN0YXRlLmN1cnJlbnRTdHlsZXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXh0U3RhdGUuY3VycmVudFZlbG9jaXRpZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHN0cmlwcGVkU3R5bGUgPSBtYXBPYmplY3QoX3N0cmlwU3R5bGUyWydkZWZhdWx0J10sIHRoaXMuc3RhdGUuY3VycmVudFN0eWxlcyk7XG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4oc3RyaXBwZWRTdHlsZSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIF9kZXByZWNhdGVkU3ByaW5ncyA9IF9kZXByZWNhdGVkU3ByaW5nczNbJ2RlZmF1bHQnXShSZWFjdCk7XG5cbiAgdmFyIFNwcmluZyA9IF9kZXByZWNhdGVkU3ByaW5ncy5TcHJpbmc7XG4gIHZhciBUcmFuc2l0aW9uU3ByaW5nID0gX2RlcHJlY2F0ZWRTcHJpbmdzLlRyYW5zaXRpb25TcHJpbmc7XG5cbiAgcmV0dXJuIHsgU3ByaW5nOiBTcHJpbmcsIFRyYW5zaXRpb25TcHJpbmc6IFRyYW5zaXRpb25TcHJpbmcsIE1vdGlvbjogTW90aW9uLCBTdGFnZ2VyZWRNb3Rpb246IFN0YWdnZXJlZE1vdGlvbiwgVHJhbnNpdGlvbk1vdGlvbjogVHJhbnNpdGlvbk1vdGlvbiB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL2NvbXBvbmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gY3VycmVudFN0eWxlIGtlZXBzIHRoZSBpbmZvIGFib3V0IHdoZXRoZXIgYSBwcm9wIGlzIGNvbmZpZ3VyZWQgYXMgYSBzcHJpbmdcbi8vIG9yIGlmIGl0J3MganVzdCBhIHJhbmRvbSBwcm9wIHRoYXQgaGFwcGVucyB0byBiZSBwcmVzZW50IG9uIHRoZSBzdHlsZVxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG5vVmVsb2NpdHk7XG5cbmZ1bmN0aW9uIG5vVmVsb2NpdHkoY3VycmVudFZlbG9jaXR5LCBjdXJyZW50U3R5bGUpIHtcbiAgZm9yICh2YXIga2V5IGluIGN1cnJlbnRWZWxvY2l0eSkge1xuICAgIGlmICghY3VycmVudFZlbG9jaXR5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFN0eWxlW2tleV0uY29uZmlnICYmIGN1cnJlbnRWZWxvY2l0eVtrZXldICE9PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvbm9WZWxvY2l0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gaGFzUmVhY2hlZFN0eWxlO1xuXG5mdW5jdGlvbiBoYXNSZWFjaGVkU3R5bGUoY3VycmVudFN0eWxlLCBzdHlsZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudFN0eWxlW2tleV07XG4gICAgdmFyIGRlc3RWYWx1ZSA9IHN0eWxlW2tleV07XG4gICAgaWYgKCFkZXN0VmFsdWUuY29uZmlnKSB7XG4gICAgICAvLyBub3QgYSBzcHJpbmcgY29uZmlnXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRWYWx1ZS5jb25maWcgJiYgY3VycmVudFZhbHVlLnZhbCAhPT0gZGVzdFZhbHVlLnZhbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWN1cnJlbnRWYWx1ZS5jb25maWcgJiYgY3VycmVudFZhbHVlICE9PSBkZXN0VmFsdWUudmFsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9oYXNSZWFjaGVkU3R5bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gdGhpcyBmdW5jdGlvbiBpcyBhbGxvY2F0aW9uLWxlc3MgdGhhbmtzIHRvIGJhYmVsLCB3aGljaCB0cmFuc2Zvcm1zIHRoZSB0YWlsXG4vLyBjYWxscyBpbnRvIGxvb3BzXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbWVyZ2VEaWZmO1xuZnVuY3Rpb24gbWVyZ2VEaWZmQXJyKF94LCBfeDIsIF94MywgX3g0LCBfeDUsIF94NiwgX3g3KSB7XG4gIHZhciBfYWdhaW4gPSB0cnVlO1xuXG4gIF9mdW5jdGlvbjogd2hpbGUgKF9hZ2Fpbikge1xuICAgIHZhciBhcnJBID0gX3gsXG4gICAgICAgIGFyckIgPSBfeDIsXG4gICAgICAgIGNvbGxCID0gX3gzLFxuICAgICAgICBpbmRleEEgPSBfeDQsXG4gICAgICAgIGluZGV4QiA9IF94NSxcbiAgICAgICAgb25SZW1vdmUgPSBfeDYsXG4gICAgICAgIGFjY3VtID0gX3g3O1xuICAgIGVuZEEgPSBlbmRCID0ga2V5QSA9IGtleUIgPSBmaWxsID0gZmlsbCA9IHVuZGVmaW5lZDtcbiAgICBfYWdhaW4gPSBmYWxzZTtcblxuICAgIHZhciBlbmRBID0gaW5kZXhBID09PSBhcnJBLmxlbmd0aDtcbiAgICB2YXIgZW5kQiA9IGluZGV4QiA9PT0gYXJyQi5sZW5ndGg7XG4gICAgdmFyIGtleUEgPSBhcnJBW2luZGV4QV07XG4gICAgdmFyIGtleUIgPSBhcnJCW2luZGV4Ql07XG4gICAgaWYgKGVuZEEgJiYgZW5kQikge1xuICAgICAgLy8gcmV0dXJuaW5nIG51bGwgaGVyZSwgb3RoZXJ3aXNlIGxpbnQgY29tcGxhaW5zIHRoYXQgd2UncmUgbm90IGV4cGVjdGluZ1xuICAgICAgLy8gYSByZXR1cm4gdmFsdWUgaW4gc3Vic2VxdWVudCBjYWxscy4gV2Uga25vdyB3aGF0IHdlJ3JlIGRvaW5nLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGVuZEEpIHtcbiAgICAgIGFjY3VtW2tleUJdID0gY29sbEJba2V5Ql07XG4gICAgICBfeCA9IGFyckE7XG4gICAgICBfeDIgPSBhcnJCO1xuICAgICAgX3gzID0gY29sbEI7XG4gICAgICBfeDQgPSBpbmRleEE7XG4gICAgICBfeDUgPSBpbmRleEIgKyAxO1xuICAgICAgX3g2ID0gb25SZW1vdmU7XG4gICAgICBfeDcgPSBhY2N1bTtcbiAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKGVuZEIpIHtcbiAgICAgIHZhciBmaWxsID0gb25SZW1vdmUoa2V5QSk7XG4gICAgICBpZiAoZmlsbCAhPSBudWxsKSB7XG4gICAgICAgIGFjY3VtW2tleUFdID0gZmlsbDtcbiAgICAgIH1cbiAgICAgIF94ID0gYXJyQTtcbiAgICAgIF94MiA9IGFyckI7XG4gICAgICBfeDMgPSBjb2xsQjtcbiAgICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgICBfeDUgPSBpbmRleEI7XG4gICAgICBfeDYgPSBvblJlbW92ZTtcbiAgICAgIF94NyA9IGFjY3VtO1xuICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoa2V5QSA9PT0ga2V5Qikge1xuICAgICAgYWNjdW1ba2V5QV0gPSBjb2xsQltrZXlBXTtcbiAgICAgIF94ID0gYXJyQTtcbiAgICAgIF94MiA9IGFyckI7XG4gICAgICBfeDMgPSBjb2xsQjtcbiAgICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgICBfeDUgPSBpbmRleEIgKyAxO1xuICAgICAgX3g2ID0gb25SZW1vdmU7XG4gICAgICBfeDcgPSBhY2N1bTtcbiAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFjb2xsQi5oYXNPd25Qcm9wZXJ0eShrZXlBKSkge1xuICAgICAgdmFyIGZpbGwgPSBvblJlbW92ZShrZXlBKTtcbiAgICAgIGlmIChmaWxsICE9IG51bGwpIHtcbiAgICAgICAgYWNjdW1ba2V5QV0gPSBmaWxsO1xuICAgICAgfVxuICAgICAgX3ggPSBhcnJBO1xuICAgICAgX3gyID0gYXJyQjtcbiAgICAgIF94MyA9IGNvbGxCO1xuICAgICAgX3g0ID0gaW5kZXhBICsgMTtcbiAgICAgIF94NSA9IGluZGV4QjtcbiAgICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgICAgX3g3ID0gYWNjdW07XG4gICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgIH1cblxuICAgIF94ID0gYXJyQTtcbiAgICBfeDIgPSBhcnJCO1xuICAgIF94MyA9IGNvbGxCO1xuICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgX3g1ID0gaW5kZXhCO1xuICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgIF94NyA9IGFjY3VtO1xuICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgY29udGludWUgX2Z1bmN0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlRGlmZihhLCBiLCBvblJlbW92ZSkge1xuICB2YXIgcmV0ID0ge307XG4gIC8vIGlmIGFueW9uZSBjYW4gbWFrZSB0aGlzIHdvcmsgd2l0aG91dCBhbGxvY2F0aW5nIHRoZSBhcnJheXMgaGVyZSwgd2UnbGxcbiAgLy8gZ2l2ZSB5b3UgYSBtZWRhbFxuICBtZXJnZURpZmZBcnIoT2JqZWN0LmtleXMoYSksIE9iamVjdC5rZXlzKGIpLCBiLCAwLCAwLCBvblJlbW92ZSwgcmV0KTtcbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL21lcmdlRGlmZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjb25maWdBbmltYXRpb247XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9wZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BlcmZvcm1hbmNlTm93KTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxuZnVuY3Rpb24gY29uZmlnQW5pbWF0aW9uKCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBfY29uZmlnJHRpbWVTdGVwID0gY29uZmlnLnRpbWVTdGVwO1xuICB2YXIgdGltZVN0ZXAgPSBfY29uZmlnJHRpbWVTdGVwID09PSB1bmRlZmluZWQgPyAxIC8gNjAgKiAxMDAwIDogX2NvbmZpZyR0aW1lU3RlcDtcbiAgdmFyIF9jb25maWckdGltZVNjYWxlID0gY29uZmlnLnRpbWVTY2FsZTtcbiAgdmFyIHRpbWVTY2FsZSA9IF9jb25maWckdGltZVNjYWxlID09PSB1bmRlZmluZWQgPyAxIDogX2NvbmZpZyR0aW1lU2NhbGU7XG4gIHZhciBfY29uZmlnJG1heFN0ZXBzID0gY29uZmlnLm1heFN0ZXBzO1xuICB2YXIgbWF4U3RlcHMgPSBfY29uZmlnJG1heFN0ZXBzID09PSB1bmRlZmluZWQgPyAxMCA6IF9jb25maWckbWF4U3RlcHM7XG4gIHZhciBfY29uZmlnJHJhZiA9IGNvbmZpZy5yYWY7XG4gIHZhciByYWYgPSBfY29uZmlnJHJhZiA9PT0gdW5kZWZpbmVkID8gX3JhZjJbJ2RlZmF1bHQnXSA6IF9jb25maWckcmFmO1xuICB2YXIgX2NvbmZpZyRub3cgPSBjb25maWcubm93O1xuICB2YXIgbm93ID0gX2NvbmZpZyRub3cgPT09IHVuZGVmaW5lZCA/IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSA6IF9jb25maWckbm93O1xuXG4gIHZhciBhbmltUnVubmluZyA9IFtdO1xuICB2YXIgcnVubmluZyA9IGZhbHNlO1xuICB2YXIgcHJldlRpbWUgPSAwO1xuICB2YXIgYWNjdW11bGF0ZWRUaW1lID0gMDtcblxuICBmdW5jdGlvbiBsb29wKCkge1xuICAgIHZhciBjdXJyZW50VGltZSA9IG5vdygpO1xuICAgIHZhciBmcmFtZVRpbWUgPSBjdXJyZW50VGltZSAtIHByZXZUaW1lOyAvLyBkZWx0YVxuXG4gICAgcHJldlRpbWUgPSBjdXJyZW50VGltZTtcbiAgICBhY2N1bXVsYXRlZFRpbWUgKz0gZnJhbWVUaW1lICogdGltZVNjYWxlO1xuXG4gICAgaWYgKGFjY3VtdWxhdGVkVGltZSA+IHRpbWVTdGVwICogbWF4U3RlcHMpIHtcbiAgICAgIGFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGZyYW1lTnVtYmVyID0gTWF0aC5jZWlsKGFjY3VtdWxhdGVkVGltZSAvIHRpbWVTdGVwKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1SdW5uaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgX2FuaW1SdW5uaW5nJGkgPSBhbmltUnVubmluZ1tpXTtcbiAgICAgIHZhciBhY3RpdmUgPSBfYW5pbVJ1bm5pbmckaS5hY3RpdmU7XG4gICAgICB2YXIgYW5pbWF0aW9uU3RlcCA9IF9hbmltUnVubmluZyRpLmFuaW1hdGlvblN0ZXA7XG4gICAgICB2YXIgcHJldlByZXZTdGF0ZSA9IF9hbmltUnVubmluZyRpLnByZXZTdGF0ZTtcbiAgICAgIHZhciBwcmV2TmV4dFN0YXRlID0gYW5pbVJ1bm5pbmdbaV0ubmV4dFN0YXRlO1xuXG4gICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VlbXMgbGlrZSBiZWNhdXNlIHRoZSBUUyBzZXRzIGRlc3RWYWxzIGFzIGVudGVyVmFscyBmb3IgdGhlIGZpcnN0XG4gICAgICAvLyB0aWNrLCB3ZSBtaWdodCByZW5kZXIgdGhhdCB2YWx1ZSB0d2ljZS4gV2UgcmVuZGVyIGl0IG9uY2UsIGN1cnJWYWx1ZSBpc1xuICAgICAgLy8gZW50ZXJWYWwgYW5kIGRlc3RWYWwgaXMgZW50ZXJWYWwuIFRoZSBuZXh0IHRpY2sgaXMgZmFzdGVyIHRoYW4gMTZtcyxcbiAgICAgIC8vIHNvIGFjY3VtdWxhdGVkVGltZSAod2hpY2ggd291bGQgYmUgYWJvdXQgLTE2bXMgZnJvbSB0aGUgcHJldmlvdXMgdGljaylcbiAgICAgIC8vIGlzIG5lZ2F0aXZlICgtMTZtcyArIGFueSBudW1iZXIgbGVzcyB0aGFuIDE2bXMgPCAwKS4gU28gd2UganVzdCByZW5kZXJcbiAgICAgIC8vIHBhcnQgd2F5cyB0b3dhcmRzIHRoZSBuZXh0U3RhdGUsIGJ1dCB0aGF0J3MgZW50ZXJWYWwgc3RpbGwuIFdlIHJlbmRlclxuICAgICAgLy8gc2F5IDc1JSBiZXR3ZWVuIGN1cnJWYWx1ZSAoPT09IGVudGVyVmFsKSBhbmQgZGVzdFZhbHVlICg9PT0gZW50ZXJWYWwpLlxuICAgICAgLy8gU28gd2UgcmVuZGVyIHRoZSBzYW1lIHZhbHVlIGEgc2Vjb25kIHRpbWUuXG4gICAgICAvLyBUaGUgc29sdXRpb24gYmVsb3cgaXMgdG8gcmVjYWxjdWxhdGUgdGhlIGRlc3RpbmF0aW9uIHN0YXRlIGV2ZW4gd2hlblxuICAgICAgLy8geW91J3JlIG1vdmluZyBwYXJ0aWFsbHkgdG93YXJkcyBpdC5cbiAgICAgIGlmIChhY2N1bXVsYXRlZFRpbWUgPD0gMCkge1xuICAgICAgICBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGUgPSBhbmltYXRpb25TdGVwKHRpbWVTdGVwIC8gMTAwMCwgcHJldlByZXZTdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZyYW1lTnVtYmVyOyBqKyspIHtcbiAgICAgICAgICBhbmltUnVubmluZ1tpXS5uZXh0U3RhdGUgPSBhbmltYXRpb25TdGVwKHRpbWVTdGVwIC8gMTAwMCwgcHJldk5leHRTdGF0ZSk7XG4gICAgICAgICAgdmFyIF9yZWYgPSBbcHJldk5leHRTdGF0ZSwgYW5pbVJ1bm5pbmdbaV0ubmV4dFN0YXRlXTtcbiAgICAgICAgICBhbmltUnVubmluZ1tpXS5wcmV2U3RhdGUgPSBfcmVmWzBdO1xuICAgICAgICAgIHByZXZOZXh0U3RhdGUgPSBfcmVmWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWNjdW11bGF0ZWRUaW1lID0gYWNjdW11bGF0ZWRUaW1lIC0gZnJhbWVOdW1iZXIgKiB0aW1lU3RlcDtcblxuICAgIC8vIFJlbmRlciBhbmQgZmlsdGVyIGluIG9uZSBpdGVyYXRpb24uXG4gICAgdmFyIGFscGhhID0gMSArIGFjY3VtdWxhdGVkVGltZSAvIHRpbWVTdGVwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbVJ1bm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBfYW5pbVJ1bm5pbmckaTIgPSBhbmltUnVubmluZ1tpXTtcbiAgICAgIHZhciBhbmltYXRpb25SZW5kZXIgPSBfYW5pbVJ1bm5pbmckaTIuYW5pbWF0aW9uUmVuZGVyO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IF9hbmltUnVubmluZyRpMi5uZXh0U3RhdGU7XG4gICAgICB2YXIgcHJldlN0YXRlID0gX2FuaW1SdW5uaW5nJGkyLnByZXZTdGF0ZTtcblxuICAgICAgLy8gTWlnaHQgbXV0YXRlIGFuaW1SdW5uaW5nLi4uLi4uLi5cbiAgICAgIGFuaW1hdGlvblJlbmRlcihhbHBoYSwgbmV4dFN0YXRlLCBwcmV2U3RhdGUpO1xuICAgIH1cblxuICAgIGFuaW1SdW5uaW5nID0gYW5pbVJ1bm5pbmcuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGFjdGl2ZSA9IF9yZWYyLmFjdGl2ZTtcbiAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgfSk7XG5cbiAgICBpZiAoYW5pbVJ1bm5pbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhZihsb29wKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgcHJldlRpbWUgPSBub3coKTtcbiAgICAgIGFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICByYWYobG9vcCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKHN0YXRlLCBhbmltYXRpb25TdGVwLCBhbmltYXRpb25SZW5kZXIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1SdW5uaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdmFsID0gYW5pbVJ1bm5pbmdbaV07XG4gICAgICBpZiAodmFsLmFuaW1hdGlvblN0ZXAgPT09IGFuaW1hdGlvblN0ZXApIHtcbiAgICAgICAgdmFsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHZhbC5wcmV2U3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHZhbC5zdG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBuZXdBbmltID0ge1xuICAgICAgYW5pbWF0aW9uU3RlcDogYW5pbWF0aW9uU3RlcCxcbiAgICAgIGFuaW1hdGlvblJlbmRlcjogYW5pbWF0aW9uUmVuZGVyLFxuICAgICAgcHJldlN0YXRlOiBzdGF0ZSxcbiAgICAgIG5leHRTdGF0ZTogc3RhdGUsXG4gICAgICBhY3RpdmU6IHRydWVcbiAgICB9O1xuXG4gICAgbmV3QW5pbS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ld0FuaW0uYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcbiAgICBhbmltUnVubmluZy5wdXNoKG5ld0FuaW0pO1xuXG4gICAgc3RhcnQoKTtcblxuICAgIHJldHVybiBuZXdBbmltLnN0b3A7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvYW5pbWF0aW9uTG9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNy4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBsb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSBnbG9iYWxbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IGdsb2JhbFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgZ2xvYmFsWydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICFyYWY7IGkrKykge1xuICByYWYgPSBnbG9iYWxbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChnbG9iYWwsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShnbG9iYWwsIGFyZ3VtZW50cylcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9+L3JhZi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB1c2VkIGJ5IHRoZSB0cmVlLXdhbGtpbmcgdXBkYXRlcyBhbmQgc3ByaW5ncy4gQXZvaWRzIHNvbWUgYWxsb2NhdGlvbnNcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB6ZXJvO1xuXG5mdW5jdGlvbiB6ZXJvKCkge1xuICByZXR1cm4gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3plcm8uanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZVZhbHVlID0gaW50ZXJwb2xhdGVWYWx1ZTtcbmV4cG9ydHMudXBkYXRlQ3VycmVudFN0eWxlID0gdXBkYXRlQ3VycmVudFN0eWxlO1xuZXhwb3J0cy51cGRhdGVDdXJyZW50VmVsb2NpdHkgPSB1cGRhdGVDdXJyZW50VmVsb2NpdHk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9zdGVwcGVyID0gcmVxdWlyZSgnLi9zdGVwcGVyJyk7XG5cbnZhciBfc3RlcHBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGVwcGVyKTtcblxuLy8gVE9ETzogcmVmYWN0b3IgY29tbW9uIGxvZ2ljIHdpdGggdXBkYXRlQ3VyclZhbHVlIGFuZCB1cGRhdGVDdXJyVmVsb2NpdHlcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVWYWx1ZShhbHBoYSwgbmV4dFN0eWxlLCBwcmV2U3R5bGUpIHtcbiAgLy8gbWlnaHQgYmUgdXNlZCBieSBhIFRyYW5zaXRpb25Nb3Rpb24sIHdoZXJlIHByZXZTdHlsZSBtaWdodCBub3QgZXhpc3QgYW55bW9yZVxuICBpZiAoIXByZXZTdHlsZSkge1xuICAgIHJldHVybiBuZXh0U3R5bGU7XG4gIH1cblxuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBuZXh0U3R5bGUpIHtcbiAgICBpZiAoIW5leHRTdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIW5leHRTdHlsZVtrZXldLmNvbmZpZykge1xuICAgICAgcmV0W2tleV0gPSBuZXh0U3R5bGVba2V5XTtcbiAgICAgIC8vIG5vdCBhIHNwcmluZyBjb25maWcsIG5vdCBzb21ldGhpbmcgd2Ugd2FudCB0byBpbnRlcnBvbGF0ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBwcmV2VmFsdWUgPSBwcmV2U3R5bGVba2V5XS5jb25maWcgPyBwcmV2U3R5bGVba2V5XS52YWwgOiBwcmV2U3R5bGVba2V5XTtcbiAgICByZXRba2V5XSA9IHtcbiAgICAgIHZhbDogbmV4dFN0eWxlW2tleV0udmFsICogYWxwaGEgKyBwcmV2VmFsdWUgKiAoMSAtIGFscGhhKSxcbiAgICAgIGNvbmZpZzogbmV4dFN0eWxlW2tleV0uY29uZmlnXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8vIFRPRE86IHJlZmFjdG9yIGNvbW1vbiBsb2dpYyB3aXRoIHVwZGF0ZUN1cnJlbnRWZWxvY2l0eVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50U3R5bGUoZnJhbWVSYXRlLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0eSwgc3R5bGUpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIXN0eWxlW2tleV0uY29uZmlnKSB7XG4gICAgICByZXRba2V5XSA9IHN0eWxlW2tleV07XG4gICAgICAvLyBub3QgYSBzcHJpbmcgY29uZmlnLCBub3Qgc29tZXRoaW5nIHdlIHdhbnQgdG8gaW50ZXJwb2xhdGVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgX3N0eWxlJGtleSRjb25maWcgPSBzdHlsZVtrZXldLmNvbmZpZztcbiAgICB2YXIgayA9IF9zdHlsZSRrZXkkY29uZmlnWzBdO1xuICAgIHZhciBiID0gX3N0eWxlJGtleSRjb25maWdbMV07XG5cbiAgICB2YXIgdmFsID0gX3N0ZXBwZXIyWydkZWZhdWx0J10oZnJhbWVSYXRlLFxuICAgIC8vIG1pZ2h0IGhhdmUgYmVlbiBhIG5vbi1zcHJpbmdlZCBwcm9wIHRoYXQganVzdCBiZWNhbWUgb25lXG4gICAgY3VycmVudFN0eWxlW2tleV0udmFsID09IG51bGwgPyBjdXJyZW50U3R5bGVba2V5XSA6IGN1cnJlbnRTdHlsZVtrZXldLnZhbCwgY3VycmVudFZlbG9jaXR5W2tleV0sIHN0eWxlW2tleV0udmFsLCBrLCBiKVswXTtcbiAgICByZXRba2V5XSA9IHtcbiAgICAgIHZhbDogdmFsLFxuICAgICAgY29uZmlnOiBzdHlsZVtrZXldLmNvbmZpZ1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFZlbG9jaXR5KGZyYW1lUmF0ZSwgY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdHksIHN0eWxlKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFzdHlsZVtrZXldLmNvbmZpZykge1xuICAgICAgLy8gbm90IGEgc3ByaW5nIGNvbmZpZywgbm90IHNvbWV0aGluZyB3ZSB3YW50IHRvIGludGVycG9sYXRlXG4gICAgICByZXRba2V5XSA9IDA7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIF9zdHlsZSRrZXkkY29uZmlnMiA9IHN0eWxlW2tleV0uY29uZmlnO1xuICAgIHZhciBrID0gX3N0eWxlJGtleSRjb25maWcyWzBdO1xuICAgIHZhciBiID0gX3N0eWxlJGtleSRjb25maWcyWzFdO1xuXG4gICAgdmFyIHZhbCA9IF9zdGVwcGVyMlsnZGVmYXVsdCddKGZyYW1lUmF0ZSxcbiAgICAvLyBtaWdodCBoYXZlIGJlZW4gYSBub24tc3ByaW5nZWQgcHJvcCB0aGF0IGp1c3QgYmVjYW1lIG9uZVxuICAgIGN1cnJlbnRTdHlsZVtrZXldLnZhbCA9PSBudWxsID8gY3VycmVudFN0eWxlW2tleV0gOiBjdXJyZW50U3R5bGVba2V5XS52YWwsIGN1cnJlbnRWZWxvY2l0eVtrZXldLCBzdHlsZVtrZXldLnZhbCwgaywgYilbMV07XG4gICAgcmV0W2tleV0gPSB2YWw7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3VwZGF0ZVRyZWUuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHN0ZXBwZXI7XG52YXIgZXJyb3JNYXJnaW4gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIHN0ZXBwZXIoZnJhbWVSYXRlLCB4LCB2LCBkZXN0WCwgaywgYikge1xuICAvLyBTcHJpbmcgc3RpZmZuZXNzLCBpbiBrZyAvIHNeMlxuXG4gIC8vIGZvciBhbmltYXRpb25zLCBkZXN0WCBpcyByZWFsbHkgc3ByaW5nIGxlbmd0aCAoc3ByaW5nIGF0IHJlc3QpLiBpbml0aWFsXG4gIC8vIHBvc2l0aW9uIGlzIGNvbnNpZGVyZWQgYXMgdGhlIHN0cmV0Y2hlZC9jb21wcmVzc2VkIHBvc2l0aW9uIG9mIGEgc3ByaW5nXG4gIHZhciBGc3ByaW5nID0gLWsgKiAoeCAtIGRlc3RYKTtcblxuICAvLyBEYW1waW5nLCBpbiBrZyAvIHNcbiAgdmFyIEZkYW1wZXIgPSAtYiAqIHY7XG5cbiAgLy8gdXN1YWxseSB3ZSBwdXQgbWFzcyBoZXJlLCBidXQgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcywgc3BlY2lmeWluZyBtYXNzIGlzIGFcbiAgLy8gYml0IHJlZHVuZGFudC4geW91IGNvdWxkIHNpbXBseSBhZGp1c3QgayBhbmQgYiBhY2NvcmRpbmdseVxuICAvLyBsZXQgYSA9IChGc3ByaW5nICsgRmRhbXBlcikgLyBtYXNzO1xuICB2YXIgYSA9IEZzcHJpbmcgKyBGZGFtcGVyO1xuXG4gIHZhciBuZXdWID0gdiArIGEgKiBmcmFtZVJhdGU7XG4gIHZhciBuZXdYID0geCArIG5ld1YgKiBmcmFtZVJhdGU7XG5cbiAgaWYgKE1hdGguYWJzKG5ld1YgLSB2KSA8IGVycm9yTWFyZ2luICYmIE1hdGguYWJzKG5ld1ggLSB4KSA8IGVycm9yTWFyZ2luKSB7XG4gICAgcmV0dXJuIFtkZXN0WCwgMF07XG4gIH1cblxuICByZXR1cm4gW25ld1gsIG5ld1ZdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBkZXByZWNhdGVkU3ByaW5ncztcbnZhciBoYXNXYXJuZWRGb3JTcHJpbmcgPSB7fTtcbnZhciBoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nID0ge307XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZWRTcHJpbmdzKFJlYWN0KSB7XG4gIHZhciBTcHJpbmcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdTcHJpbmcnLFxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyICYmIHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyLmdldE5hbWUoKTtcbiAgICAgICAgaWYgKCFoYXNXYXJuZWRGb3JTcHJpbmdbb3duZXJOYW1lXSkge1xuICAgICAgICAgIGhhc1dhcm5lZEZvclNwcmluZ1tvd25lck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdTcHJpbmcgKHVzZWQgaW4gJXNyZW5kZXIpIGhhcyBub3cgYmVlbiByZW5hbWVkIHRvIE1vdGlvbi4gJyArICdQbGVhc2Ugc2VlIHRoZSByZWxlYXNlIG5vdGUgZm9yIHRoZSB1cGdyYWRlIHBhdGguIFRoYW5rIHlvdSEnLCBvd25lck5hbWUgPyBvd25lck5hbWUgKyAnXFwncyAnIDogJ1JlYWN0LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICB2YXIgVHJhbnNpdGlvblNwcmluZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1RyYW5zaXRpb25TcHJpbmcnLFxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyICYmIHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQuX293bmVyLmdldE5hbWUoKTtcbiAgICAgICAgaWYgKCFoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nW293bmVyTmFtZV0pIHtcbiAgICAgICAgICBoYXNXYXJuZWRGb3JUcmFuc2l0aW9uU3ByaW5nW293bmVyTmFtZV0gPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zaXRpb25TcHJpbmcgKHVzZWQgaW4gJXNyZW5kZXIpIGhhcyBub3cgYmVlbiByZW5hbWVkIHRvICcgKyAnVHJhbnNpdGlvbk1vdGlvbi4gUGxlYXNlIHNlZSB0aGUgcmVsZWFzZSBub3RlIGZvciB0aGUgdXBncmFkZSAnICsgJ3BhdGguIFRoYW5rIHlvdSEnLCBvd25lck5hbWUgPyBvd25lck5hbWUgKyAnXFwncyAnIDogJ1JlYWN0LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4geyBTcHJpbmc6IFNwcmluZywgVHJhbnNpdGlvblNwcmluZzogVHJhbnNpdGlvblNwcmluZyB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL2RlcHJlY2F0ZWRTcHJpbmdzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHR1cm4ge3g6IHt2YWw6IDEsIGNvbmZpZzogWzEsIDJdfSwgeTogMn0gaW50byB7eDogMSwgeTogMn1cblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzdHJpcFN0eWxlO1xuXG5mdW5jdGlvbiBzdHJpcFN0eWxlKHN0eWxlKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0W2tleV0gPSBzdHlsZVtrZXldLnZhbCA9PSBudWxsID8gc3R5bGVba2V5XSA6IHN0eWxlW2tleV0udmFsO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9zdHJpcFN0eWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSByZW9yZGVyS2V5cztcblxuZnVuY3Rpb24gcmVvcmRlcktleXMob2JqLCBmKSB7XG4gIHZhciBuZXdLZXlzID0gZihPYmplY3Qua2V5cyhvYmopKTtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gbmV3S2V5c1tpXTtcbiAgICByZXRba2V5XSA9IG9ialtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHNwcmluZztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3ByZXNldHMgPSByZXF1aXJlKCcuL3ByZXNldHMnKTtcblxudmFyIF9wcmVzZXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldHMpO1xuXG4vLyBpbnN0ZWFkIG9mIGV4cG9zaW5nIHt2YWw6IGJsYSwgY29uZmlnOiBibGF9LCB1c2UgYSBoZWxwZXJcblxuZnVuY3Rpb24gc3ByaW5nKHZhbCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gX3ByZXNldHMyWydkZWZhdWx0J10ubm9Xb2JibGUgOiBhcmd1bWVudHNbMV07XG5cbiAgcmV0dXJuIHsgdmFsOiB2YWwsIGNvbmZpZzogY29uZmlnIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvc3ByaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFtzdGlmZm5lc3MsIGRhbXBpbmddXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0ge1xuICBub1dvYmJsZTogWzE3MCwgMjZdLCAvLyB0aGUgZGVmYXVsdFxuICBnZW50bGU6IFsxMjAsIDE0XSxcbiAgd29iYmx5OiBbMTgwLCAxMl0sXG4gIHN0aWZmOiBbMjEwLCAyMF1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvcHJlc2V0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBDbGltYkJhZGdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBsb2dvID0gcmVxdWlyZSgnLi4vLi4vaW1nL2NsaW1iX2xvZ28uc3ZnJyk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vY2xpbWIuc29jaWFsL1wiXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGltYi1zb2NpYWwtYmFkZ2VcIlxuICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGxvZ299fT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsaW1iQmFkZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3dhbGwvQ2xpbWJCYWRnZS5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMjY4MSA4MTRcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeG1sbnM6c2tldGNoPVxcXCJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnNcXFwiPjx0aXRsZT5DbGltYiBMb2dvIEJldGE8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxkZWZzPjwvZGVmcz48ZyBpZD1cXFwiUGFnZS0xXFxcIiBzdHJva2U9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBza2V0Y2g6dHlwZT1cXFwiTVNQYWdlXFxcIj48ZyBpZD1cXFwiQ2xpbWItTG9nby1CZXRhXFxcIiBza2V0Y2g6dHlwZT1cXFwiTVNBcnRib2FyZEdyb3VwXFxcIiBmaWxsPVxcXCIjMTkzNzREXFxcIj48ZyBpZD1cXFwiY2xpLS0tLWIuc29jaWFsLSstUGF0aC1Db3B5LSstVHlwZS1zb21ldGhpbmctQ29weS1Db3B5LUNvcHktQ29weS1Db3B5XFxcIiBza2V0Y2g6dHlwZT1cXFwiTVNMYXllckdyb3VwXFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgyMDYuMDAwMDAwLCAyNDkuMDAwMDAwKVxcXCI+PGcgaWQ9XFxcImNsaS0tLS1iLnNvY2lhbC0rLVBhdGgtQ29weVxcXCIgc2tldGNoOnR5cGU9XFxcIk1TU2hhcGVHcm91cFxcXCI+PHBhdGggZD1cXFwiTTcyMy4zNzQyMDcsMTg3LjQ0MjIxMSBMNzY3LjAyNzY0MSwzMzcuMzgzNTc1IEM3NjcuNTEwODg5LDM0MS4yNjU1NTIgNzcxLjg2MDEyNCwzNDUuMTQ3NTI5IDc3Ni4yMDkzNTksMzQ1LjE0NzUyOSBMODMzLjIzMjY2NCwzNDUuMTQ3NTI5IEM4MzkuMDMxNjQ0LDM0NS4xNDc1MjkgODQzLjM4MDg3OSwzNDAuNzgwMzA1IDg0Mi40MTQzODMsMzM0LjQ3MjA5MiBMNzM5LjQ4MjQ4NSw4LjM4NjAxOTgyIEM3MzguOTk5MjM3LDQuMDE4Nzk1NjQgNzM0LjY1MDAwMiwwLjYyMjA2NTcyOCA3MzAuNzg0MDE1LDAuNjIyMDY1NzI4IEw3MjMuMDUyMDQxLDAuNjIyMDY1NzI4IEM3MjAuNjM1OCwwLjYyMjA2NTcyOCA3MTYuMjg2NTY1LDIuNTYzMDU0MjUgNzE0LjgzNjgyLDUuNDc0NTM3MDQgTDY0My41MTQzMDIsMjA5LjAxOTA2MiBMNTc2LjQ5NDAwMywxMDUuNDMxNzg4IEM1NzMuNzIxMDU4LDEwMS4xNDU4OTUgNTY3LjM0MjUzOSw5Ny42NzE0OTE5IDU2Mi4yNTU2LDk3LjY3MTQ5MTkgTDU1Mi4xNzkwMzMsOTcuNjcxNDkxOSBDNTQ3LjA4ODMyNiw5Ny42NzE0OTE5IDU0MS41MjkzODQsMTAxLjU1ODc0OSA1MzkuNzcwMDYxLDEwNi4zMzQxODcgTDQ1NC45ODAwNjgsMzM2LjQ4NDgzMyBDNDUzLjIxNzQ5LDM0MS4yNjkxMDggNDU1LjkyNzA4NiwzNDUuMTQ3NTI5IDQ2MS4wMTQxMDIsMzQ1LjE0NzUyOSBMNTIyLjEzODA2NywzNDUuMTQ3NTI5IEM1MjcuMjMzMTUsMzQ1LjE0NzUyOSA1MzIuNzkxMDU0LDM0MS4yNjE3MzMgNTM0LjU1Mjc5NywzMzYuNDY2MTcxIEw1NzEuNDczMTQ0LDIzNS45NjY5MjQgTDY0Mi4xMDg1MjgsMzQ2LjEwNzcxMiBDNjQzLjQ4NzE0MSwzNDguMjU3MzYzIDY0Ni42NjcwOTIsMzUwIDY0OS4yMTIzMDcsMzUwIEw2NTkuOTcxNDEyLDM1MCBDNjYyLjUxNjEwOCwzNTAgNjY1LjI4MjA0NCwzNDguMDQ1MDc4IDY2Ni4xNDE5ODIsMzQ1LjY1MzkxOCBMNjgzLjgyNzI2MSwyOTYuNDc3ODcyIEw3MjMuMzc0MjA3LDE4Ny40NDIyMTEgWlxcXCIgaWQ9XFxcIlBhdGgtQ29weVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0wLjE0NTIxMzQ0MSwyNDcuMDg1MTAxIEMwLjE0NTIxMzQ0MSwzMDUuMjM0MDQgNDkuMDg3MjM3NywzNDguODQ1NzQ1IDEwNC4zMjg3MywzNDguODQ1NzQ1IEMxMzkuMjE4MDk0LDM0OC44NDU3NDUgMTY0LjQxNTk2OCwzMzUuMjc3NjU5IDE4Mi4zNDUyMjQsMzA4LjE0MTQ4NyBDMTg1LjczNzI0NiwzMDMuMjk1NzQyIDE4My4zMTQzNzMsMjk4LjQ0OTk5NyAxNzguOTUzMjAzLDI5NC41NzM0MDEgTDE0OS44Nzg3MzMsMjY5LjM3NTUyNyBDMTQ2Ljk3MTI4NiwyNjYuOTUyNjU1IDE0Mi42MTAxMTYsMjY3LjkyMTgwNCAxMzkuMjE4MDk0LDI3MS4zMTM4MjUgQzEzMS40NjQ5MDIsMjc5LjA2NzAxNyAxMjMuMjI3MTM2LDI4Ni4zMzU2MzUgMTA2LjI2NzAyOCwyODYuMzM1NjM1IEM4NC45NDU3NTA1LDI4Ni4zMzU2MzUgNjguNDcwMjE3NiwyNjguODkwOTUzIDY4LjQ3MDIxNzYsMjQ3LjA4NTEwMSBDNjguNDcwMjE3NiwyMjUuNzYzODIzIDg1LjkxNDg5OTUsMjA3LjgzNDU2NiAxMDcuMjM2MTc3LDIwNy44MzQ1NjYgQzExOC4zODEzOTEsMjA3LjgzNDU2NiAxMjguNTU3NDU1LDIxMy4xNjQ4ODYgMTM1LjM0MTQ5OCwyMjAuNDMzNTAzIEMxMzcuNzY0MzcxLDIyMi44NTYzNzYgMTQzLjU3OTI2NSwyMjMuODI1NTI1IDE0Ni4wMDIxMzcsMjIxLjQwMjY1MiBMMTc1LjA3NjYwNywxOTMuNzgxOTA2IEMxNzkuNDM3Nzc3LDE4OS45MDUzMSAxODAuODkxNTAxLDE4NC41NzQ5OSAxNzcuNDk5NDgsMTgwLjIxMzgyIEMxNTkuMDg1NjQ5LDE1Ny45MjMzOTMgMTM1LjM0MTQ5OCwxNDUuMzI0NDU2IDEwNC44MTMzMDUsMTQ1LjMyNDQ1NiBDNDkuNTcxODEyMiwxNDUuMzI0NDU2IDAuMTQ1MjEzNDQxLDE4OS45MDUzMSAwLjE0NTIxMzQ0MSwyNDcuMDg1MTAxIEwwLjE0NTIxMzQ0MSwyNDcuMDg1MTAxIFogTTIxOC42ODgzMTIsMzM0Ljc5MzA4NSBDMjE4LjY4ODMxMiwzMzkuNjM4ODMgMjIzLjA0OTQ4MiwzNDQgMjI3Ljg5NTIyNywzNDQgTDI4MS4xOTg0MjIsMzQ0IEMyODYuMDQ0MTY3LDM0NCAyOTAuNDA1MzM3LDMzOS42Mzg4MyAyOTAuNDA1MzM3LDMzNC43OTMwODUgTDI5MC40MDUzMzcsMTQuMDA0NzY3MiBDMjkwLjQwNTMzNyw5LjE1OTAyMjI2IDI4Ni4wNDQxNjcsNC43OTc4NTE3OSAyODEuMTk4NDIyLDQuNzk3ODUxNzkgTDIyNy44OTUyMjcsNC43OTc4NTE3OSBDMjIzLjA0OTQ4Miw0Ljc5Nzg1MTc5IDIxOC42ODgzMTIsOS4xNTkwMjIyNiAyMTguNjg4MzEyLDE0LjAwNDc2NzIgTDIxOC42ODgzMTIsMzM0Ljc5MzA4NSBaIE0zNzguMTEzMzIxLDkxLjUzNjY4NjggQzM5OS40MzQ1OTksOTEuNTM2Njg2OCA0MTYuODc5MjgxLDc0LjU3NjU3OTQgNDE2Ljg3OTI4MSw1My4yNTUzMDE1IEM0MTYuODc5MjgxLDMxLjkzNDAyMzYgMzk5LjQzNDU5OSwxNC40ODkzNDE3IDM3OC4xMTMzMjEsMTQuNDg5MzQxNyBDMzU2Ljc5MjA0NCwxNC40ODkzNDE3IDMzOS44MzE5MzYsMzEuOTM0MDIzNiAzMzkuODMxOTM2LDUzLjI1NTMwMTUgQzMzOS44MzE5MzYsNzQuNTc2NTc5NCAzNTYuNzkyMDQ0LDkxLjUzNjY4NjggMzc4LjExMzMyMSw5MS41MzY2ODY4IEwzNzguMTEzMzIxLDkxLjUzNjY4NjggWiBNMzQyLjczOTM4MywzMzQuNzkzMDg1IEMzNDIuNzM5MzgzLDMzOS42Mzg4MyAzNDcuMTAwNTU0LDM0NCAzNTEuOTQ2Mjk5LDM0NCBMNDA1LjI0OTQ5MywzNDQgQzQxMC4wOTUyMzgsMzQ0IDQxNC40NTY0MDksMzM5LjYzODgzIDQxNC40NTY0MDksMzM0Ljc5MzA4NSBMNDE0LjQ1NjQwOSwxNTkuMzc3MTE2IEM0MTQuNDU2NDA5LDE1NC4wNDY3OTcgNDEwLjA5NTIzOCwxNTAuMTcwMjAxIDQwNS4yNDk0OTMsMTUwLjE3MDIwMSBMMzUxLjk0NjI5OSwxNTAuMTcwMjAxIEMzNDcuMTAwNTU0LDE1MC4xNzAyMDEgMzQyLjczOTM4MywxNTQuMDQ2Nzk3IDM0Mi43MzkzODMsMTU5LjM3NzExNiBMMzQyLjczOTM4MywzMzQuNzkzMDg1IFogTTg4OS4xNTQzMSwzMzQuNzkzMDg1IEM4ODkuMTU0MzEsMzM5LjYzODgzIDg5My41MTU0ODEsMzQ0IDg5OC4zNjEyMjYsMzQ0IEw5MjEuMTM2MjI3LDM0NCBDOTI1Ljk4MTk3MiwzNDQgOTI5LjM3Mzk5NCwzMzkuNjM4ODMgOTMxLjMxMjI5MiwzMzQuMzA4NTEgTDkzNy4xMjcxODUsMzE4LjMxNzU1MiBDOTM3LjEyNzE4NSwzMTguMzE3NTUyIDk1OS40MTc2MTIsMzQ4Ljg0NTc0NSAxMDAyLjA2MDE3LDM0OC44NDU3NDUgQzEwNTYuODE3MDksMzQ4Ljg0NTc0NSAxMDk4LjAwNTkyLDMwMi44MTExNjggMTA5OC4wMDU5MiwyNDcuMDg1MTAxIEMxMDk4LjAwNTkyLDE3OC43NjAwOTYgMTA1My40MjUwNiwxNDUuMzI0NDU2IDEwMDEuNTc1NTksMTQ1LjMyNDQ1NiBDOTg1LjEwMDA2MSwxNDUuMzI0NDU2IDk2Ny4xNzA4MDQsMTUxLjEzOTM1IDk2MS4zNTU5MSwxNTQuNTMxMzcxIEw5NjEuMzU1OTEsMTQuMDA0NzY3MiBDOTYxLjM1NTkxLDkuMTU5MDIyMjYgOTU2Ljk5NDc0LDQuNzk3ODUxNzkgOTUyLjE0ODk5NSw0Ljc5Nzg1MTc5IEw4OTguMzYxMjI2LDQuNzk3ODUxNzkgQzg5My41MTU0ODEsNC43OTc4NTE3OSA4ODkuMTU0MzEsOS4xNTkwMjIyNiA4ODkuMTU0MzEsMTQuMDA0NzY3MiBMODg5LjE1NDMxLDMzNC43OTMwODUgWiBNOTUzLjYwMjcxOCwyNDYuNjAwNTI2IEM5NTMuNjAyNzE4LDIyNC43OTQ2NzQgOTcwLjA3ODI1MSwyMDcuODM0NTY2IDk5Mi4zNjg2NzgsMjA3LjgzNDU2NiBDMTAxNC42NTkxMSwyMDcuODM0NTY2IDEwMzEuNjE5MjEsMjI0Ljc5NDY3NCAxMDMxLjYxOTIxLDI0Ni42MDA1MjYgQzEwMzEuNjE5MjEsMjY4Ljg5MDk1MyAxMDE0LjY1OTExLDI4Ni4zMzU2MzUgOTkyLjM2ODY3OCwyODYuMzM1NjM1IEM5NzAuMDc4MjUxLDI4Ni4zMzU2MzUgOTUzLjYwMjcxOCwyNjguODkwOTUzIDk1My42MDI3MTgsMjQ2LjYwMDUyNiBMOTUzLjYwMjcxOCwyNDYuNjAwNTI2IFogTTExMzQuMjU2NDUsMzIxLjIyNDk5OSBDMTEzNC4yNTY0NSwzMzYuMjQ2ODA4IDExNDYuODU1MzksMzQ4Ljg0NTc0NSAxMTYxLjg3NzIsMzQ4Ljg0NTc0NSBDMTE3Ny4zODM1OCwzNDguODQ1NzQ1IDExODkuNDk3OTUsMzM2LjI0NjgwOCAxMTg5LjQ5Nzk1LDMyMS4yMjQ5OTkgQzExODkuNDk3OTUsMzA1LjcxODYxNSAxMTc3LjM4MzU4LDI5My42MDQyNTIgMTE2MS44NzcyLDI5My42MDQyNTIgQzExNDYuODU1MzksMjkzLjYwNDI1MiAxMTM0LjI1NjQ1LDMwNS43MTg2MTUgMTEzNC4yNTY0NSwzMjEuMjI0OTk5IEwxMTM0LjI1NjQ1LDMyMS4yMjQ5OTkgWiBNMTIzNi4wMTcxLDMzMi44NTQ3ODcgQzEyNDUuNzA4NTksMzQwLjYwNzk3OSAxMjY5LjkzNzMxLDM0OC44NDU3NDUgMTMwMS45MTkyMywzNDguODQ1NzQ1IEMxMzU2LjY3NjE1LDM0OC44NDU3NDUgMTM4My44MTIzMiwzMjEuMjI0OTk5IDEzODMuODEyMzIsMjg3LjMwNDc4NCBDMTM4My44MTIzMiwyNDguNTM4ODI0IDEzNTYuNjc2MTUsMjMzLjAzMjQ0IDEzMTcuNDI1NjEsMjE5LjQ2NDM1NCBDMTMwMC45NTAwOCwyMTMuNjQ5NDYgMTI5NS42MTk3NiwyMDguODAzNzE1IDEyOTUuNjE5NzYsMjAzLjk1Nzk3IEMxMjk1LjYxOTc2LDE5OC42Mjc2NTEgMTI5OS45ODA5MywxOTcuMTczOTI3IDEzMDYuMjgwNCwxOTcuMTczOTI3IEMxMzI1LjE3ODgsMTk3LjE3MzkyNyAxMzQ3LjQ2OTIzLDIwOC4zMTkxNDEgMTM0Ny40NjkyMywyMDguMzE5MTQxIEMxMzUxLjM0NTgzLDIwOS43NzI4NjQgMTM1Ni4xOTE1NywyMDguMzE5MTQxIDEzNTcuNjQ1MywyMDUuNDExNjk0IEwxMzc1LjU3NDU1LDE3Mi40NjA2MjggQzEzNzguNDgyLDE2Ny42MTQ4ODMgMTM3NS4wODk5OCwxNjMuMjUzNzEyIDEzNzAuNzI4ODEsMTYwLjM0NjI2NSBDMTM2MC4wNjgxNywxNTMuNTYyMjIzIDEzMzYuODA4NTksMTQ1LjMyNDQ1NiAxMzA2LjI4MDQsMTQ1LjMyNDQ1NiBDMTI1My45NDYzNSwxNDUuMzI0NDU2IDEyMzAuNjg2NzgsMTcxLjQ5MTQ3OSAxMjMwLjY4Njc4LDIwMy45NTc5NyBDMTIzMC42ODY3OCwyMzQuMDAxNTg5IDEyNDcuMTYyMzEsMjU1LjgwNzQ0MSAxMjg0Ljk1OTEyLDI2OC44OTA5NTMgQzEzMDkuNjcyNDIsMjc3LjYxMzI5NCAxMzEyLjU3OTg3LDI4NC4zOTczMzcgMTMxMi41Nzk4NywyODkuMjQzMDgyIEMxMzEyLjU3OTg3LDI5NS4wNTc5NzYgMTMwOC4yMTg3LDI5Ny45NjU0MjMgMTMwMy4zNzI5NSwyOTcuOTY1NDIzIEMxMjgyLjUzNjI1LDI5Ny45NjU0MjMgMTI1OS43NjEyNSwyODUuMzY2NDg2IDEyNTkuNzYxMjUsMjg1LjM2NjQ4NiBDMTI1NS44ODQ2NSwyODMuNDI4MTg4IDEyNTEuMDM4OTEsMjg2LjMzNTYzNSAxMjQ5LjU4NTE4LDI4OS4yNDMwODIgTDEyMzIuNjI1MDgsMzIyLjY3ODcyMiBDMTIzMC4yMDIyLDMyNy4wMzk4OTMgMTIzMi42MjUwOCwzMjkuOTQ3MzQgMTIzNi4wMTcxLDMzMi44NTQ3ODcgTDEyMzYuMDE3MSwzMzIuODU0Nzg3IFogTTE0MDcuNTU2NDcsMjQ2LjYwMDUyNiBDMTQwNy41NTY0NywzMDIuMzI2NTkzIDE0NTMuMTA2NDcsMzQ4Ljg0NTc0NSAxNTA4LjM0Nzk2LDM0OC44NDU3NDUgQzE1NjMuNTg5NDYsMzQ4Ljg0NTc0NSAxNjA5LjEzOTQ2LDMwMi4zMjY1OTMgMTYwOS4xMzk0NiwyNDYuNjAwNTI2IEMxNjA5LjEzOTQ2LDE5MS44NDM2MDggMTU2My41ODk0NiwxNDUuMzI0NDU2IDE1MDguMzQ3OTYsMTQ1LjMyNDQ1NiBDMTQ1My4xMDY0NywxNDUuMzI0NDU2IDE0MDcuNTU2NDcsMTkxLjg0MzYwOCAxNDA3LjU1NjQ3LDI0Ni42MDA1MjYgTDE0MDcuNTU2NDcsMjQ2LjYwMDUyNiBaIE0xNDcwLjA2NjU4LDI0Ni42MDA1MjYgQzE0NzAuMDY2NTgsMjI1LjI3OTI0OCAxNDg3LjAyNjY5LDIwNy44MzQ1NjYgMTUwOC4zNDc5NiwyMDcuODM0NTY2IEMxNTI5LjY2OTI0LDIwNy44MzQ1NjYgMTU0Ni42MjkzNSwyMjUuMjc5MjQ4IDE1NDYuNjI5MzUsMjQ2LjYwMDUyNiBDMTU0Ni42MjkzNSwyNjguNDA2Mzc4IDE1MjkuNjY5MjQsMjg2LjMzNTYzNSAxNTA4LjM0Nzk2LDI4Ni4zMzU2MzUgQzE0ODcuMDI2NjksMjg2LjMzNTYzNSAxNDcwLjA2NjU4LDI2OC40MDYzNzggMTQ3MC4wNjY1OCwyNDYuNjAwNTI2IEwxNDcwLjA2NjU4LDI0Ni42MDA1MjYgWiBNMTYzMS40Mjk4OSwyNDcuMDg1MTAxIEMxNjMxLjQyOTg5LDMwNS4yMzQwNCAxNjgwLjM3MTkxLDM0OC44NDU3NDUgMTczNS42MTM0LDM0OC44NDU3NDUgQzE3NzAuNTAyNzcsMzQ4Ljg0NTc0NSAxNzk1LjcwMDY0LDMzNS4yNzc2NTkgMTgxMy42Mjk5LDMwOC4xNDE0ODcgQzE4MTcuMDIxOTIsMzAzLjI5NTc0MiAxODE0LjU5OTA1LDI5OC40NDk5OTcgMTgxMC4yMzc4OCwyOTQuNTczNDAxIEwxNzgxLjE2MzQxLDI2OS4zNzU1MjcgQzE3NzguMjU1OTYsMjY2Ljk1MjY1NSAxNzczLjg5NDc5LDI2Ny45MjE4MDQgMTc3MC41MDI3NywyNzEuMzEzODI1IEMxNzYyLjc0OTU4LDI3OS4wNjcwMTcgMTc1NC41MTE4MSwyODYuMzM1NjM1IDE3MzcuNTUxNywyODYuMzM1NjM1IEMxNzE2LjIzMDQyLDI4Ni4zMzU2MzUgMTY5OS43NTQ4OSwyNjguODkwOTUzIDE2OTkuNzU0ODksMjQ3LjA4NTEwMSBDMTY5OS43NTQ4OSwyMjUuNzYzODIzIDE3MTcuMTk5NTcsMjA3LjgzNDU2NiAxNzM4LjUyMDg1LDIwNy44MzQ1NjYgQzE3NDkuNjY2MDYsMjA3LjgzNDU2NiAxNzU5Ljg0MjEzLDIxMy4xNjQ4ODYgMTc2Ni42MjYxNywyMjAuNDMzNTAzIEMxNzY5LjA0OTA0LDIyMi44NTYzNzYgMTc3NC44NjM5NCwyMjMuODI1NTI1IDE3NzcuMjg2ODEsMjIxLjQwMjY1MiBMMTgwNi4zNjEyOCwxOTMuNzgxOTA2IEMxODEwLjcyMjQ1LDE4OS45MDUzMSAxODEyLjE3NjE3LDE4NC41NzQ5OSAxODA4Ljc4NDE1LDE4MC4yMTM4MiBDMTc5MC4zNzAzMiwxNTcuOTIzMzkzIDE3NjYuNjI2MTcsMTQ1LjMyNDQ1NiAxNzM2LjA5Nzk4LDE0NS4zMjQ0NTYgQzE2ODAuODU2NDksMTQ1LjMyNDQ1NiAxNjMxLjQyOTg5LDE4OS45MDUzMSAxNjMxLjQyOTg5LDI0Ny4wODUxMDEgTDE2MzEuNDI5ODksMjQ3LjA4NTEwMSBaIE0xODg1LjM0NjkyLDkxLjUzNjY4NjggQzE5MDYuNjY4Miw5MS41MzY2ODY4IDE5MjQuMTEyODgsNzQuNTc2NTc5NCAxOTI0LjExMjg4LDUzLjI1NTMwMTUgQzE5MjQuMTEyODgsMzEuOTM0MDIzNiAxOTA2LjY2ODIsMTQuNDg5MzQxNyAxODg1LjM0NjkyLDE0LjQ4OTM0MTcgQzE4NjQuMDI1NjUsMTQuNDg5MzQxNyAxODQ3LjA2NTU0LDMxLjkzNDAyMzYgMTg0Ny4wNjU1NCw1My4yNTUzMDE1IEMxODQ3LjA2NTU0LDc0LjU3NjU3OTQgMTg2NC4wMjU2NSw5MS41MzY2ODY4IDE4ODUuMzQ2OTIsOTEuNTM2Njg2OCBMMTg4NS4zNDY5Miw5MS41MzY2ODY4IFogTTE4NDkuOTcyOTksMzM0Ljc5MzA4NSBDMTg0OS45NzI5OSwzMzkuNjM4ODMgMTg1NC4zMzQxNiwzNDQgMTg1OS4xNzk5LDM0NCBMMTkxMi40ODMxLDM0NCBDMTkxNy4zMjg4NCwzNDQgMTkyMS42OTAwMSwzMzkuNjM4ODMgMTkyMS42OTAwMSwzMzQuNzkzMDg1IEwxOTIxLjY5MDAxLDE1OS4zNzcxMTYgQzE5MjEuNjkwMDEsMTU0LjA0Njc5NyAxOTE3LjMyODg0LDE1MC4xNzAyMDEgMTkxMi40ODMxLDE1MC4xNzAyMDEgTDE4NTkuMTc5OSwxNTAuMTcwMjAxIEMxODU0LjMzNDE2LDE1MC4xNzAyMDEgMTg0OS45NzI5OSwxNTQuMDQ2Nzk3IDE4NDkuOTcyOTksMTU5LjM3NzExNiBMMTg0OS45NzI5OSwzMzQuNzkzMDg1IFogTTE5NjAuOTQwNTUsMjg0Ljg4MTkxMSBDMTk2MC45NDA1NSwzMjMuMTYzMjk3IDE5ODkuNTMwNDQsMzQ4Ljg0NTc0NSAyMDI3LjgxMTgzLDM0OC44NDU3NDUgQzIwNTguMzQwMDIsMzQ4Ljg0NTc0NSAyMDc1LjMwMDEzLDMzNC43OTMwODUgMjA4Ni40NDUzNCwzMjQuNjE3MDIgTDIwOTMuMjI5MzgsMzM3LjcwMDUzMiBDMjA5NS42NTIyNiwzNDMuMDMwODUxIDIwOTkuMDQ0MjgsMzQ0IDIxMDEuOTUxNzIsMzQ0IEwyMTIzLjI3MywzNDQgQzIxMjguMTE4NzUsMzQ0IDIxMzIuNDc5OTIsMzM5LjYzODgzIDIxMzIuNDc5OTIsMzM0Ljc5MzA4NSBMMjEzMi40Nzk5MiwyMjcuNzAyMTIxIEMyMTMyLjQ3OTkyLDE3MC41MjIzMyAyMTEwLjY3NDA3LDE0NS4zMjQ0NTYgMjA1MC41ODY4MywxNDUuMzI0NDU2IEMyMDI0LjQxOTgsMTQ1LjMyNDQ1NiAxOTkwLjQ5OTU5LDE1MS4xMzkzNSAxOTg2LjEzODQyLDE1Mi41OTMwNzQgQzE5ODEuNzc3MjUsMTU0LjA0Njc5NyAxOTc3LjQxNjA4LDE1Ny40Mzg4MTggMTk3OC44Njk4LDE2NS42NzY1ODUgTDE5ODMuMjMwOTcsMTk2LjIwNDc3OCBDMTk4NC4yMDAxMiwyMDMuNDczMzk2IDE5ODcuNTkyMTQsMjA4LjgwMzcxNSAxOTk0Ljg2MDc2LDIwNi4zODA4NDMgQzIwMDcuNDU5NywyMDIuNTA0MjQ3IDIwMzAuMjM0NywxOTkuMTEyMjI1IDIwNDMuMzE4MjEsMTk5LjExMjIyNSBDMjA2Ni41Nzc3OSwxOTkuMTEyMjI1IDIwNjkuNDg1MjMsMjA4LjgwMzcxNSAyMDY5LjQ4NTIzLDIyNy43MDIxMjEgQzIwNjkuNDg1MjMsMjI3LjcwMjEyMSAyMDUzLjk3ODg1LDIxOS45NDg5MjkgMjAzMi4xNzMsMjE5Ljk0ODkyOSBDMTk4OC4wNzY3MiwyMTkuOTQ4OTI5IDE5NjAuOTQwNTUsMjQ3LjU2OTY3NSAxOTYwLjk0MDU1LDI4NC44ODE5MTEgTDE5NjAuOTQwNTUsMjg0Ljg4MTkxMSBaIE0yMDIzLjkzNTIzLDI4MC4wMzYxNjYgQzIwMjMuOTM1MjMsMjY4Ljg5MDk1MyAyMDMzLjE0MjE1LDI1OS42ODQwMzcgMjA0NC43NzE5MywyNTkuNjg0MDM3IEMyMDU2LjQwMTcyLDI1OS42ODQwMzcgMjA2NS42MDg2NCwyNjguODkwOTUzIDIwNjYuMDkzMjEsMjgwLjAzNjE2NiBDMjA2Ni4wOTMyMSwyOTEuNjY1OTU0IDIwNTYuNDAxNzIsMzAxLjM1NzQ0NCAyMDQ0Ljc3MTkzLDMwMS4zNTc0NDQgQzIwMzMuMTQyMTUsMzAxLjM1NzQ0NCAyMDIzLjkzNTIzLDI5MS42NjU5NTQgMjAyMy45MzUyMywyODAuMDM2MTY2IEwyMDIzLjkzNTIzLDI4MC4wMzYxNjYgWiBNMjE4MS45MDY1MiwzMzQuNzkzMDg1IEMyMTgxLjkwNjUyLDMzOS42Mzg4MyAyMTg2LjI2NzY5LDM0NCAyMTkxLjExMzQzLDM0NCBMMjI0NC40MTY2MywzNDQgQzIyNDkuMjYyMzcsMzQ0IDIyNTMuNjIzNTQsMzM5LjYzODgzIDIyNTMuNjIzNTQsMzM0Ljc5MzA4NSBMMjI1My42MjM1NCwxNC4wMDQ3NjcyIEMyMjUzLjYyMzU0LDkuMTU5MDIyMjYgMjI0OS4yNjIzNyw0Ljc5Nzg1MTc5IDIyNDQuNDE2NjMsNC43OTc4NTE3OSBMMjE5MS4xMTM0Myw0Ljc5Nzg1MTc5IEMyMTg2LjI2NzY5LDQuNzk3ODUxNzkgMjE4MS45MDY1Miw5LjE1OTAyMjI2IDIxODEuOTA2NTIsMTQuMDA0NzY3MiBMMjE4MS45MDY1MiwzMzQuNzkzMDg1IFpcXFwiIGlkPVxcXCJjbGktLS0tYi5zb2NpYWxcXFwiPjwvcGF0aD48L2c+PC9nPjwvZz48L2c+PC9zdmc+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ltZy9jbGltYl9sb2dvLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsaW1iIGZyb20gJ2NsaW1iLXNvY2lhbCc7XG5pbXBvcnQgU2xpZGVzaG93IGZyb20gJy4vU2xpZGVzaG93JztcblxuXG5jbGFzcyBTbGlkZXNob3dDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBpdGVtczoge31cbiAgICB9O1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY29sbGVjdGlvbklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgY29sbGVjdGlvbklkOiAnNTYxYmE2MzQ0NTI4NGUxNzQwZTAxNmY3J1xuICAgIH07XG5cbiAgICBpbml0KCkge1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5jb2xsZWN0aW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaW1iXG4gICAgICAgICAgICAuZ2V0U3RyZWFtKHRoaXMucHJvcHMuY29sbGVjdGlvbklkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShpdGVtcyA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRJdGVtcyA9IHt9O1xuICAgICAgICAgICAgICAgIGl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkSXRlbXNbaXRlbS5pZF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBtYXBwZWRJdGVtc1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNsaWRlc2hvdyBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc30vPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzaG93Q29udGFpbmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zbGlkZXNob3cvU2xpZGVzaG93Q29udGFpbmVyLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9zbGlkZSc7XG5pbXBvcnQge1RyYW5zaXRpb25Nb3Rpb24sIHNwcmluZ30gZnJvbSAncmVhY3QtbW90aW9uJztcblxuXG5jbGFzcyBTbGlkZXNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBjdXJyZW50SXRlbUluZGV4OiAwXG4gICAgfTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGl0ZW1zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRlbGF5OiA1XG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7ZGVsYXl9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMubmV4dFNsaWRlLmJpbmQodGhpcyksIGRlbGF5ICogMTAwMCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgfVxuXG4gICAgbmV4dFNsaWRlKCkge1xuICAgICAgICBjb25zdCBzbGlkZXNob3dMZW5ndGggPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLml0ZW1zKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2xpZGVzaG93TGVuZ3RoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjdXJyZW50SXRlbUluZGV4OiBuZXdJbmRleFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTdHlsZXMoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRLZXkgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLml0ZW1zKVt0aGlzLnN0YXRlLmN1cnJlbnRJdGVtSW5kZXhdO1xuICAgICAgICBjb25zdCBjb25maWdzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMuaXRlbXMpLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgY29uZmlnc1trZXldID0ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHNwcmluZygwKSxcbiAgICAgICAgICAgICAgICBzY2FsZTogc3ByaW5nKDApLFxuICAgICAgICAgICAgICAgIHpJbmRleDogLTUsXG4gICAgICAgICAgICAgICAgaXRlbTogdGhpcy5wcm9wcy5pdGVtc1trZXldXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBjdXJyZW50S2V5KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb25maWdzW2tleV0sIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogc3ByaW5nKDEpLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogc3ByaW5nKDEpLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZ3M7XG4gICAgfVxuXG4gICAgd2lsbEVudGVyKGtleSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3BhY2l0eTogc3ByaW5nKDApLFxuICAgICAgICAgICAgc2NhbGU6IHNwcmluZygwKSxcbiAgICAgICAgICAgIHpJbmRleDogLTUsXG4gICAgICAgICAgICBpdGVtOiB0aGlzLnByb3BzLml0ZW1zW2tleV1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3aWxsTGVhdmUoa2V5LCBzdHlsZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3BhY2l0eTogc3ByaW5nKDApLFxuICAgICAgICAgICAgc2NhbGU6IHNwcmluZygwKSxcbiAgICAgICAgICAgIHpJbmRleDogLTUsXG4gICAgICAgICAgICBpdGVtOiBzdHlsZS5pdGVtXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyU2xpZGUoa2V5LCBpdGVtVmFsdWVzKSB7XG5cbiAgICAgICAgY29uc3Qge2l0ZW0sIC4uLnN0eWxlQ29uZmlnfSA9IGl0ZW1WYWx1ZXM7XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBvcGFjaXR5OiBzdHlsZUNvbmZpZy5vcGFjaXR5LFxuICAgICAgICAgICAgekluZGV4OiBNYXRoLmZsb29yKHN0eWxlQ29uZmlnLnpJbmRleCksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3N0eWxlQ29uZmlnLnNjYWxlfSlgXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTbGlkZSBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uTW90aW9uXG4gICAgICAgICAgICAgICAgc3R5bGVzPXt0aGlzLmdldFN0eWxlcy5iaW5kKHRoaXMpKCl9XG4gICAgICAgICAgICAgICAgd2lsbEVudGVyPXt0aGlzLndpbGxFbnRlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHdpbGxMZWF2ZT17dGhpcy53aWxsTGVhdmUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAge3ZhbHVlcyA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaW1iX19zbGlkZXNob3dfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHZhbHVlcykubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbVZhbHVlcyA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclNsaWRlKGtleSwgaXRlbVZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uTW90aW9uPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVzaG93O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zbGlkZXNob3cvU2xpZGVzaG93LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuLi9jb21tb24vTWVzc2FnZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vY29tbW9uL0ltYWdlJztcblxuXG5jbGFzcyBTbGlkZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNyZWF0ZUltYWdlKCkge1xuXG4gICAgICAgIGNvbnN0IHtpbWFnZX0gPSB0aGlzLnByb3BzLml0ZW07XG5cbiAgICAgICAgaWYgKGltYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7dXJsOiBzcmMsIHdpZHRoLCBoZWlnaHR9ID0gaW1hZ2U7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9eyBzcmMgfVxuICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17IHdpZHRoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsgaGVpZ2h0IH0vPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge2l0ZW19ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmNyZWF0ZUltYWdlKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpbWItc2xpZGVzaG93X19zbGlkZVwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICB7aW1hZ2V9XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgYm9keT17IGl0ZW0ubWVzc2FnZSB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZTtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3NsaWRlc2hvdy9zbGlkZS5qc3hcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9uIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9uIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanM/YnJvd3NlcnM9bGFzdCAyIHZlcnNpb24hLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGUvbWFpbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNsaW1iX193YWxsIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtc2l6ZTogMTAwJTsgfVxcblxcbi5jbGltYl9fdGlsZSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xcbiAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gIGhlaWdodDogNDI1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4OyB9XFxuXFxuLmNsaW1iX190aWxlX19jb250ZW50IHtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAyNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjsgfVxcbiAgLmNsaW1iX190aWxlLS1oYXMtbm8taW1hZ2UgLmNsaW1iX190aWxlX19jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLmNsaW1iX19pbWFnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTsgfVxcbiAgLmNsaW1iX190aWxlIC5jbGltYl9faW1hZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4OyB9XFxuXFxuLmNsaW1iX190aWxlX19tZXNzYWdlIHtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XFxuICAuY2xpbWJfX3RpbGVfX21lc3NhZ2UgPiBhIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG1heC13aWR0aDogMjYwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTsgfVxcbiAgLmNsaW1iX190aWxlLS1oYXMtbm8taW1hZ2UgLmNsaW1iX190aWxlX19tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAxODUlOyB9XFxuXFxuLmNsaW1iX190aWxlX19hdXRob3Ige1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IC0xMHB4OyB9XFxuICAuY2xpbWJfX3RpbGVfX2F1dGhvciBpbWcge1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICB3aWR0aDogMzRweDsgfVxcbiAgLmNsaW1iX190aWxlX19hdXRob3IgLmNsaW1iX190aWxlX19hdXRob3JfX3VzZXJuYW1lIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XFxuXFxuLmNsaW1iLXNvY2lhbC1iYWRnZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIHotaW5kZXg6IDk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTlDQUUyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA2NnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAuY2xpbWItc29jaWFsLWJhZGdlID4gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgICB0b3A6IC05OTk5cHggIWltcG9ydGFudDtcXG4gICAgbGVmdDogLTk5OTlweCAhaW1wb3J0YW50OyB9XFxuXFxuLmNsaW1iLXNsaWRlc2hvdyB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3OyB9XFxuXFxuLmNsaW1iX19zbGlkZXNob3dfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5jbGltYi1zbGlkZXNob3dfX3NsaWRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAlO1xcbiAgcmlnaHQ6IDEwJTtcXG4gIGJvdHRvbTogMTAlO1xcbiAgbGVmdDogMTAlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vYXV0b3ByZWZpeGVyLWxvYWRlcj9icm93c2Vycz1sYXN0IDIgdmVyc2lvbiEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGUvbWFpbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KCkge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=