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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _slide = __webpack_require__(34);
	
	var _slide2 = _interopRequireDefault(_slide);
	
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
	        key: 'render',
	        value: function render() {
	
	            var key = Object.keys(this.props.items)[this.state.currentItemIndex];
	
	            if (!key) {
	                return null;
	            }
	
	            var item = this.props.items[key];
	
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_slide2['default'], { key: key, item: item })
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
	            delay: 3
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
	                { className: 'climb-slideshow__slide' },
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
	exports.push([module.id, ".climb__wall {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  font-size: 100%; }\n\n.climb__tile {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  height: 425px;\n  box-sizing: border-box;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 20px;\n  overflow: hidden;\n  text-align: left;\n  border-radius: 7px;\n  background-color: #f6f6f6;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n\n.climb__tile__content {\n  z-index: 1;\n  padding: 26px;\n  background-color: #f6f6f6; }\n  .climb__tile--has-no-image .climb__tile__content {\n    height: 100%;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    box-sizing: border-box; }\n\n.climb__image {\n  display: block;\n  max-width: 100%; }\n  .climb__tile .climb__image {\n    position: absolute;\n    top: 0;\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px; }\n\n.climb__tile__message {\n  z-index: 1;\n  margin-bottom: 24px; }\n  .climb__tile__message > a {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 260px;\n    display: inline-block;\n    vertical-align: bottom; }\n  .climb__tile--has-no-image .climb__tile__message {\n    font-size: 185%; }\n\n.climb__tile__author {\n  display: block;\n  margin: -10px; }\n  .climb__tile__author img {\n    border-radius: 25px;\n    width: 34px; }\n  .climb__tile__author .climb__tile__author__username {\n    display: inline-block;\n    margin: 0 0 0 10px;\n    line-height: 34px;\n    vertical-align: top; }\n\n.climb-social-badge {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 9;\n  background-color: #A9CAE2;\n  width: 200px;\n  height: 66px;\n  border-radius: 5px; }\n  .climb-social-badge > span {\n    position: absolute !important;\n    top: -9999px !important;\n    left: -9999px !important; }\n\n.climb-slideshow {\n  height: 100vh;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.climb-slideshow__slide {\n  display: block;\n  width: 70%;\n  margin: 0 auto;\n  background-color: #f6f6f6; }\n", ""]);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0YTVjZDdlMDdjYjdlYWM1MWZiZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn0iLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93YWxsL1dhbGxDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL34vY2xpbWItc29jaWFsL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jbGltYi1zb2NpYWwvfi9yeC1saXRlL3J4LmxpdGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mZXRjaC1qc29ucC9idWlsZC9mZXRjaC1qc29ucC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy93YWxsL1dhbGwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3dhbGwvVGlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0ltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vTWVzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0F1dGhvci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3JlYWN0LW1vdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvbm9WZWxvY2l0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvaGFzUmVhY2hlZFN0eWxlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9tZXJnZURpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL2FuaW1hdGlvbkxvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9+L3JhZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvemVyby5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvdXBkYXRlVHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvZGVwcmVjYXRlZFNwcmluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3N0cmlwU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9zcHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3ByZXNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvd2FsbC9DbGltYkJhZGdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2NsaW1iX2xvZ28uc3ZnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlc2hvdy9TbGlkZXNob3dDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlc2hvdy9TbGlkZXNob3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWRlc2hvdy9zbGlkZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL21haW4uc2Nzcz8zYWRiIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7a0NDdENrQixDQUFPOzs7O3FDQUNKLENBQVc7Ozs7d0RBRU4sQ0FBaUM7Ozs7a0VBQzVCLEVBQTJDOzs7O3FCQUVuRSxFQUFtQjs7QUFFMUIsS0FBSSxNQUFNLEVBQUU7QUFDUixXQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDOztBQUVsQyxTQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRXhELFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQ3BDLGFBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixhQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUNoRCxhQUFNLEtBQUssR0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFtQyxnQ0FBZ0M7QUFDbkUsd0NBQXVDLG9DQUFvQztBQUMzRSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBLDhCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLFdBQVU7QUFDVjs7QUFFQSxxQzs7Ozs7O0FDcmNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ25CQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUMzQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDNUdBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esd0VBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1Asd0JBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDL0lBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7Ozs7Ozs7O0FDL0JEO0FBQ0EsZ0RBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLHNDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDVkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzNGQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUMvQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVILFdBQVU7QUFDVjs7QUFFQSxxQzs7Ozs7O0FDL0NBLFVBQVMsSUFBSSx1QkFBdUIsT0FBTyxPQUFPO0FBQ2xEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUM7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjs7QUFFQTs7QUFFQSx5QkFBd0Isc0JBQXNCOztBQUU5QztBQUNBOztBQUVBLFdBQVU7QUFDVjs7QUFFQSxxQzs7Ozs7O0FDbkJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NWK0IsQ0FBTzs7OztLQUdoQyxVQUFVO2VBQVYsVUFBVTs7Y0FBVixVQUFVOytCQUFWLFVBQVU7O29DQUFWLFVBQVU7OztrQkFBVixVQUFVOztnQkFFTixrQkFBRzs7QUFFTCxpQkFBTSxJQUFJLEdBQUcsbUJBQU8sQ0FBQyxFQUEwQixDQUFDLENBQUM7O0FBRWpELG9CQUNJLHdDQUFHLElBQUksRUFBQyxzQkFBc0I7QUFDM0IsMEJBQVMsRUFBQyxvQkFBb0I7QUFDOUIsd0NBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQ3ZDLENBQ047VUFDTDs7O1lBWkMsVUFBVTs7O3NCQWVELFVBQVU7Ozs7Ozs7QUNsQnpCLG9wVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NBMEMsQ0FBTzs7Ozt3Q0FDL0IsQ0FBYzs7OztzQ0FDVixFQUFhOzs7O0tBRzdCLGtCQUFrQjtlQUFsQixrQkFBa0I7O0FBRVQsY0FGVCxrQkFBa0IsQ0FFUixLQUFLLEVBQUU7K0JBRmpCLGtCQUFrQjs7QUFHaEIsb0NBSEYsa0JBQWtCLDZDQUdWLEtBQUssRUFBRTtjQUdqQixLQUFLLEdBQUc7QUFDSixrQkFBSyxFQUFFLEVBQUU7VUFDWjtNQUpBOztrQkFKQyxrQkFBa0I7O2dCQWtCaEIsZ0JBQUc7OztBQUVILGlCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFDMUIsd0JBQU87Y0FDVjs7QUFFRCxzQ0FDSyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FDbEMsU0FBUyxDQUFDLGVBQUssRUFBSTs7QUFFaEIscUJBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUN2QixzQkFBSyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUk7QUFDZCxnQ0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7a0JBQy9CLENBQUMsQ0FBQzs7QUFFSCx1QkFBSyxRQUFRLENBQUM7QUFDViwwQkFBSyxFQUFFLFdBQVc7a0JBQ3JCLENBQUMsQ0FBQztjQUVOLENBQUMsQ0FBQztVQUNWOzs7Z0JBRWdCLDZCQUFHO0FBQ2hCLGlCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7VUFDZjs7O2dCQUVLLGtCQUFHO0FBQ0wsb0JBQ0ksMkRBQVcsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBTSxHQUFFLENBQ3ZDO1VBQ0w7OztnQkF0Q2tCO0FBQ2YseUJBQVksRUFBRSxpQkFBVSxNQUFNLENBQUMsVUFBVTtVQUM1Qzs7OztnQkFFcUI7QUFDbEIseUJBQVksRUFBRSwwQkFBMEI7VUFDM0M7Ozs7WUFoQkMsa0JBQWtCOzs7c0JBbURULGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDeERTLENBQU87Ozs7a0NBQy9CLEVBQVM7Ozs7S0FHckIsU0FBUztlQUFULFNBQVM7O0FBRUEsY0FGVCxTQUFTLENBRUMsS0FBSyxFQUFFOytCQUZqQixTQUFTOztBQUdQLG9DQUhGLFNBQVMsNkNBR0QsS0FBSyxFQUFFO2NBR2pCLEtBQUssR0FBRztBQUNKLDZCQUFnQixFQUFFLENBQUM7VUFDdEI7TUFKQTs7a0JBSkMsU0FBUzs7Z0JBbUJNLDZCQUFHO2lCQUNULEtBQUssR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFuQixLQUFLOztBQUNaLGlCQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7VUFDckU7OztnQkFFbUIsZ0NBQUc7QUFDbkIsMEJBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7VUFDN0I7OztnQkFFUSxxQkFBRztBQUNSLGlCQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQzdELGlCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxlQUFlLENBQUMsQ0FBQztBQUM3RCxpQkFBSSxDQUFDLFFBQVEsQ0FBQztBQUNWLGlDQUFnQixFQUFFLFFBQVE7Y0FDN0IsQ0FBQyxDQUFDO1VBQ047OztnQkFFSyxrQkFBRzs7QUFFTCxpQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7QUFFdkUsaUJBQUksQ0FBQyxHQUFHLEVBQUU7QUFDTix3QkFBTyxJQUFJLENBQUM7Y0FDZjs7QUFFRCxpQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRW5DLG9CQUNJOzs7aUJBQ0ksdURBQU8sR0FBRyxFQUFFLEdBQUksRUFBQyxJQUFJLEVBQUUsSUFBSyxHQUFHO2NBQzdCLENBQ1I7VUFDTDs7O2dCQXpDa0I7QUFDZixrQkFBSyxFQUFFLGlCQUFVLE1BQU0sQ0FBQyxVQUFVO0FBQ2xDLGtCQUFLLEVBQUUsaUJBQVUsTUFBTTtVQUMxQjs7OztnQkFFcUI7QUFDbEIsa0JBQUssRUFBRSxDQUFDO1VBQ1g7Ozs7WUFqQkMsU0FBUzs7O3NCQXNEQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0MxRGtCLENBQU87Ozs7MENBQzdCLEVBQW1COzs7O3dDQUNyQixFQUFpQjs7OztLQUc3QixLQUFLO2VBQUwsS0FBSzs7QUFFSSxjQUZULEtBQUssQ0FFSyxLQUFLLEVBQUU7K0JBRmpCLEtBQUs7O0FBR0gsb0NBSEYsS0FBSyw2Q0FHRyxLQUFLLEVBQUU7TUFDaEI7O2tCQUpDLEtBQUs7O2dCQVVJLHVCQUFHO2lCQUVILEtBQUssR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBeEIsS0FBSzs7QUFFWixpQkFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO3FCQUNKLEdBQUcsR0FBbUIsS0FBSyxDQUFoQyxHQUFHO3FCQUFPLEtBQUssR0FBWSxLQUFLLENBQXRCLEtBQUs7cUJBQUUsTUFBTSxHQUFJLEtBQUssQ0FBZixNQUFNOztBQUM5Qix3QkFDSSw2REFBTyxHQUFHLEVBQUcsR0FBSztBQUNYLDBCQUFLLEVBQUcsS0FBTztBQUNmLDJCQUFNLEVBQUcsTUFBUSxHQUFFLENBQzVCO2NBQ0w7QUFDRCxvQkFBTyxJQUFJLENBQUM7VUFDZjs7O2dCQUVLLGtCQUFHO2lCQUVFLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFsQixJQUFJOztBQUNYLGlCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O0FBRWpDLG9CQUNJOzttQkFBSyxTQUFTLEVBQUMsd0JBQXdCO2lCQUNsQyxLQUFLO2lCQUNOLCtEQUFTLElBQUksRUFBRyxJQUFJLENBQUMsT0FBUyxHQUFFO2NBQzlCLENBQ1I7VUFDTDs7O2dCQTlCa0I7QUFDZixpQkFBSSxFQUFFLGlCQUFVLE1BQU0sQ0FBQyxVQUFVO1VBQ3BDOzs7O1lBUkMsS0FBSzs7O3NCQXVDSSxLQUFLOzs7Ozs7O0FDNUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EseUNBQXdDLDBCQUEwQix5QkFBeUIsa0JBQWtCLGdCQUFnQixlQUFlLGNBQWMsb0NBQW9DLDhCQUE4QixvQ0FBb0MsZ0NBQWdDLGdDQUFnQyxnQ0FBZ0MsNEJBQTRCLDRCQUE0Qiw0QkFBNEIsb0JBQW9CLEVBQUUsa0JBQWtCLDBCQUEwQix5QkFBeUIsa0JBQWtCLDJCQUEyQiw2QkFBNkIsMkJBQTJCLGtCQUFrQiwyQkFBMkIsc0NBQXNDLDJCQUEyQixzQ0FBc0MsbUNBQW1DLG1DQUFtQyxtQ0FBbUMsd0JBQXdCLHFCQUFxQixxQkFBcUIsdUJBQXVCLDhCQUE4Qix3Q0FBd0Msd0NBQXdDLGdDQUFnQyxnQ0FBZ0MsRUFBRSwyQkFBMkIsZUFBZSxrQkFBa0IsOEJBQThCLEVBQUUsc0RBQXNELG1CQUFtQiw0QkFBNEIsMkJBQTJCLG9CQUFvQixxQ0FBcUMscUNBQXFDLHFDQUFxQyw2Q0FBNkMsaUNBQWlDLDZDQUE2Qyw2QkFBNkIsRUFBRSxtQkFBbUIsbUJBQW1CLG9CQUFvQixFQUFFLGdDQUFnQyx5QkFBeUIsYUFBYSxrQ0FBa0MsbUNBQW1DLEVBQUUsMkJBQTJCLGVBQWUsd0JBQXdCLEVBQUUsK0JBQStCLDBCQUEwQix1QkFBdUIsOEJBQThCLHVCQUF1Qiw0QkFBNEIsNkJBQTZCLEVBQUUsc0RBQXNELHNCQUFzQixFQUFFLDBCQUEwQixtQkFBbUIsa0JBQWtCLEVBQUUsOEJBQThCLDBCQUEwQixrQkFBa0IsRUFBRSx5REFBeUQsNEJBQTRCLHlCQUF5Qix3QkFBd0IsMEJBQTBCLEVBQUUseUJBQXlCLG9CQUFvQixpQkFBaUIsZ0JBQWdCLGVBQWUsOEJBQThCLGlCQUFpQixpQkFBaUIsdUJBQXVCLEVBQUUsZ0NBQWdDLG9DQUFvQyw4QkFBOEIsK0JBQStCLEVBQUUsc0JBQXNCLGtCQUFrQiwwQkFBMEIseUJBQXlCLGtCQUFrQixnQ0FBZ0MsZ0NBQWdDLGdDQUFnQyxnQ0FBZ0MsK0JBQStCLGdDQUFnQyxvQ0FBb0MsOEJBQThCLG9DQUFvQyxFQUFFLDZCQUE2QixtQkFBbUIsZUFBZSxtQkFBbUIsOEJBQThCLEVBQUU7O0FBRTV2Rzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0EsbUJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxTQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0Esa0JBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBLGlDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZEOztBQUVBLDhCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJyZWFjdC1jbGltYi1zb2NpYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIlJlYWN0RE9NXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwiUmVhY3RET01cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhY3QtY2xpbWItc29jaWFsXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJSZWFjdERPTVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVhY3QtY2xpbWItc29jaWFsXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0sIHJvb3RbXCJSZWFjdERPTVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0YTVjZDdlMDdjYjdlYWM1MWZiZVxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IFdhbGxDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL3dhbGwvV2FsbENvbnRhaW5lcic7XG5pbXBvcnQgU2xpZGVzaG93Q29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXNob3cvU2xpZGVzaG93Q29udGFpbmVyJztcblxuaW1wb3J0ICcuL3N0eWxlL21haW4uc2Nzcyc7XG5cbmlmICh3aW5kb3cpIHtcbiAgICB3aW5kb3cuQ2xpbWIgPSB3aW5kb3cuQ2xpbWIgfHwge307XG5cbiAgICBjb25zdCAkd2FsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xpbWItd2FsbCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkd2FsbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSAkd2FsbHNbaV07XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25JZCA9ICRpdGVtLmRhdGFzZXQuY29sbGVjdGlvbklkO1xuICAgICAgICBjb25zdCBsaW1pdCA9ICRpdGVtLmRhdGFzZXQubGltaXQ7XG5cbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsQ29udGFpbmVyLCB7Y29sbGVjdGlvbklkLCBsaW1pdH0pLFxuICAgICAgICAgICAgJGl0ZW1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCAkc2xpZGVzaG93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGltYi1zbGlkZXNob3cnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJHNsaWRlc2hvd3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSAkc2xpZGVzaG93c1tpXTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbklkID0gJGl0ZW0uZGF0YXNldC5jb2xsZWN0aW9uSWQ7XG5cbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTbGlkZXNob3dDb250YWluZXIsIHtjb2xsZWN0aW9uSWR9KSxcbiAgICAgICAgICAgICRpdGVtXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQge1dhbGxDb250YWluZXJ9O1xuZXhwb3J0IHtXYWxsfSBmcm9tICcuL2NvbXBvbmVudHMvd2FsbC9XYWxsJztcbmV4cG9ydCB7VGlsZX0gZnJvbSAnLi9jb21wb25lbnRzL3dhbGwvVGlsZSc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RET01cIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xpbWIgZnJvbSAnY2xpbWItc29jaWFsJztcbmltcG9ydCBXYWxsIGZyb20gJy4vV2FsbCc7XG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi9DbGltYkJhZGdlJztcblxuXG5jbGFzcyBXYWxsQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaXRlbXM6IHt9XG4gICAgfTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNvbGxlY3Rpb25JZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBsaW1pdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgICAgUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgICBdKVxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBjb2xsZWN0aW9uSWQ6ICc1NjFiYTYzNDQ1Mjg0ZTE3NDBlMDE2ZjcnLFxuICAgICAgICBsaW1pdDogMzBcbiAgICB9O1xuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuY29sbGVjdGlvbklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjbGltYlxuICAgICAgICAgICAgLmdldFN0cmVhbSh0aGlzLnByb3BzLmNvbGxlY3Rpb25JZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoaXRlbXMgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4U2l6ZSA9IHBhcnNlSW50KHRoaXMucHJvcHMubGltaXQsIDApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkSXRlbXMgPSB7fTtcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoMCwgbWF4U2l6ZSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYXBwZWRJdGVtc1tpdGVtLmlkXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IG1hcHBlZEl0ZW1zXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGxldCBjYjtcbiAgICAgICAgaWYgKHdpbmRvdy5DbGltYiAmJiB3aW5kb3cuQ2xpbWIub25VcGRhdGUpIHtcbiAgICAgICAgICAgIGNiID0gd2luZG93LkNsaW1iLm9uVXBkYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICAgICAgY2IgPSAoKSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNiKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8V2FsbCBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc30vPlxuICAgICAgICAgICAgICAgIDxCYWRnZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYWxsQ29udGFpbmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy93YWxsL1dhbGxDb250YWluZXIuanN4XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcnhMaXRlID0gcmVxdWlyZSgncngtbGl0ZScpO1xuXG52YXIgX2ZldGNoSnNvbnAgPSByZXF1aXJlKCdmZXRjaC1qc29ucCcpO1xuXG52YXIgX2ZldGNoSnNvbnAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmV0Y2hKc29ucCk7XG5cbnZhciBnZXRTdHJlYW0gPSBmdW5jdGlvbiBnZXRTdHJlYW0oY29sbGVjdGlvbklkKSB7XG5cbiAgICB2YXIgcG9sbFJhdGUgPSA1ICogMTAwMDtcblxuICAgIHZhciByZXF1ZXN0U3RyZWFtID0gX3J4TGl0ZS5PYnNlcnZhYmxlLmp1c3QoJ2h0dHA6Ly9hcHAuY2xpbWIuc29jaWFsL2FwaS92MS9jb2xsZWN0aW9ucy8nICsgY29sbGVjdGlvbklkKTtcblxuICAgIHZhciB1cGRhdGVTdHJlYW0gPSBfcnhMaXRlLk9ic2VydmFibGUuaW50ZXJ2YWwocG9sbFJhdGUpLnN0YXJ0V2l0aChudWxsKTtcblxuICAgIHZhciByZXNwb25zZVN0cmVhbSA9IHVwZGF0ZVN0cmVhbS5jb21iaW5lTGF0ZXN0KHJlcXVlc3RTdHJlYW0sIGZ1bmN0aW9uICh0aWNrLCB1cmwpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9KS5mbGF0TWFwKGZ1bmN0aW9uIChiYXNlVXJsKSB7XG5cbiAgICAgICAgdmFyIHJlcXVlc3RVcmwgPSAnJyArIGJhc2VVcmw7XG5cbiAgICAgICAgcmV0dXJuIF9yeExpdGUuT2JzZXJ2YWJsZS5mcm9tUHJvbWlzZSgoMCwgX2ZldGNoSnNvbnAyWydkZWZhdWx0J10pKHJlcXVlc3RVcmwpLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlU3RyZWFtO1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICAgIGdldFN0cmVhbTogZ2V0U3RyZWFtXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGltYi1zb2NpYWwvZGlzdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0LCBBbGwgcmlnaHRzIHJlc2VydmVkLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuOyhmdW5jdGlvbiAodW5kZWZpbmVkKSB7XG5cbiAgdmFyIG9iamVjdFR5cGVzID0ge1xuICAgICdmdW5jdGlvbic6IHRydWUsXG4gICAgJ29iamVjdCc6IHRydWVcbiAgfTtcblxuICBmdW5jdGlvbiBjaGVja0dsb2JhbCh2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuT2JqZWN0ID09PSBPYmplY3QpID8gdmFsdWUgOiBudWxsO1xuICB9XG5cbiAgdmFyIGZyZWVFeHBvcnRzID0gKG9iamVjdFR5cGVzW3R5cGVvZiBleHBvcnRzXSAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlKSA/IGV4cG9ydHMgOiBudWxsO1xuICB2YXIgZnJlZU1vZHVsZSA9IChvYmplY3RUeXBlc1t0eXBlb2YgbW9kdWxlXSAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSkgPyBtb2R1bGUgOiBudWxsO1xuICB2YXIgZnJlZUdsb2JhbCA9IGNoZWNrR2xvYmFsKGZyZWVFeHBvcnRzICYmIGZyZWVNb2R1bGUgJiYgdHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgZ2xvYmFsKTtcbiAgdmFyIGZyZWVTZWxmID0gY2hlY2tHbG9iYWwob2JqZWN0VHlwZXNbdHlwZW9mIHNlbGZdICYmIHNlbGYpO1xuICB2YXIgZnJlZVdpbmRvdyA9IGNoZWNrR2xvYmFsKG9iamVjdFR5cGVzW3R5cGVvZiB3aW5kb3ddICYmIHdpbmRvdyk7XG4gIHZhciBtb2R1bGVFeHBvcnRzID0gKGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cykgPyBmcmVlRXhwb3J0cyA6IG51bGw7XG4gIHZhciB0aGlzR2xvYmFsID0gY2hlY2tHbG9iYWwob2JqZWN0VHlwZXNbdHlwZW9mIHRoaXNdICYmIHRoaXMpO1xuICB2YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgKChmcmVlV2luZG93ICE9PSAodGhpc0dsb2JhbCAmJiB0aGlzR2xvYmFsLndpbmRvdykpICYmIGZyZWVXaW5kb3cpIHx8IGZyZWVTZWxmIHx8IHRoaXNHbG9iYWwgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuICB2YXIgUnggPSB7XG4gICAgaW50ZXJuYWxzOiB7fSxcbiAgICBjb25maWc6IHtcbiAgICAgIFByb21pc2U6IHJvb3QuUHJvbWlzZVxuICAgIH0sXG4gICAgaGVscGVyczogeyB9XG4gIH07XG5cbiAgLy8gRGVmYXVsdHNcbiAgdmFyIG5vb3AgPSBSeC5oZWxwZXJzLm5vb3AgPSBmdW5jdGlvbiAoKSB7IH0sXG4gICAgaWRlbnRpdHkgPSBSeC5oZWxwZXJzLmlkZW50aXR5ID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0sXG4gICAgZGVmYXVsdE5vdyA9IFJ4LmhlbHBlcnMuZGVmYXVsdE5vdyA9IERhdGUubm93LFxuICAgIGRlZmF1bHRDb21wYXJlciA9IFJ4LmhlbHBlcnMuZGVmYXVsdENvbXBhcmVyID0gZnVuY3Rpb24gKHgsIHkpIHsgcmV0dXJuIGlzRXF1YWwoeCwgeSk7IH0sXG4gICAgZGVmYXVsdFN1YkNvbXBhcmVyID0gUnguaGVscGVycy5kZWZhdWx0U3ViQ29tcGFyZXIgPSBmdW5jdGlvbiAoeCwgeSkgeyByZXR1cm4geCA+IHkgPyAxIDogKHggPCB5ID8gLTEgOiAwKTsgfSxcbiAgICBkZWZhdWx0S2V5U2VyaWFsaXplciA9IFJ4LmhlbHBlcnMuZGVmYXVsdEtleVNlcmlhbGl6ZXIgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC50b1N0cmluZygpOyB9LFxuICAgIGRlZmF1bHRFcnJvciA9IFJ4LmhlbHBlcnMuZGVmYXVsdEVycm9yID0gZnVuY3Rpb24gKGVycikgeyB0aHJvdyBlcnI7IH0sXG4gICAgaXNQcm9taXNlID0gUnguaGVscGVycy5pc1Byb21pc2UgPSBmdW5jdGlvbiAocCkgeyByZXR1cm4gISFwICYmIHR5cGVvZiBwLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcC50aGVuID09PSAnZnVuY3Rpb24nOyB9LFxuICAgIGlzRnVuY3Rpb24gPSBSeC5oZWxwZXJzLmlzRnVuY3Rpb24gPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgaXNGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuICAgICAgaWYgKGlzRm4oL3gvKSkge1xuICAgICAgICBpc0ZuID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzRm47XG4gICAgfSgpKTtcblxuICAgIGZ1bmN0aW9uIGNsb25lQXJyYXkoYXJyKSB7XG4gICAgICB2YXIgbGVuID0gYXJyLmxlbmd0aCwgYSA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFbaV0gPSBhcnJbaV07IH1cbiAgICAgIHJldHVybiBhO1xuICAgIH1cblxuICB2YXIgZXJyb3JPYmogPSB7ZToge319O1xuICBcbiAgZnVuY3Rpb24gdHJ5Q2F0Y2hlckdlbih0cnlDYXRjaFRhcmdldCkge1xuICAgIHJldHVybiBmdW5jdGlvbiB0cnlDYXRjaGVyKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHRyeUNhdGNoVGFyZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciB0cnlDYXRjaCA9IFJ4LmludGVybmFscy50cnlDYXRjaCA9IGZ1bmN0aW9uIHRyeUNhdGNoKGZuKSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGZuKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdmbiBtdXN0IGJlIGEgZnVuY3Rpb24nKTsgfVxuICAgIHJldHVybiB0cnlDYXRjaGVyR2VuKGZuKTtcbiAgfTtcblxuICBmdW5jdGlvbiB0aHJvd2VyKGUpIHtcbiAgICB0aHJvdyBlO1xuICB9XG5cbiAgUnguY29uZmlnLmxvbmdTdGFja1N1cHBvcnQgPSBmYWxzZTtcbiAgdmFyIGhhc1N0YWNrcyA9IGZhbHNlLCBzdGFja3MgPSB0cnlDYXRjaChmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcigpOyB9KSgpO1xuICBoYXNTdGFja3MgPSAhIXN0YWNrcy5lICYmICEhc3RhY2tzLmUuc3RhY2s7XG5cbiAgLy8gQWxsIGNvZGUgYWZ0ZXIgdGhpcyBwb2ludCB3aWxsIGJlIGZpbHRlcmVkIGZyb20gc3RhY2sgdHJhY2VzIHJlcG9ydGVkIGJ5IFJ4SlNcbiAgdmFyIHJTdGFydGluZ0xpbmUgPSBjYXB0dXJlTGluZSgpLCByRmlsZU5hbWU7XG5cbiAgdmFyIFNUQUNLX0pVTVBfU0VQQVJBVE9SID0gJ0Zyb20gcHJldmlvdXMgZXZlbnQ6JztcblxuICBmdW5jdGlvbiBtYWtlU3RhY2tUcmFjZUxvbmcoZXJyb3IsIG9ic2VydmFibGUpIHtcbiAgICAvLyBJZiBwb3NzaWJsZSwgdHJhbnNmb3JtIHRoZSBlcnJvciBzdGFjayB0cmFjZSBieSByZW1vdmluZyBOb2RlIGFuZCBSeEpTXG4gICAgLy8gY3J1ZnQsIHRoZW4gY29uY2F0ZW5hdGluZyB3aXRoIHRoZSBzdGFjayB0cmFjZSBvZiBgb2JzZXJ2YWJsZWAuXG4gICAgaWYgKGhhc1N0YWNrcyAmJlxuICAgICAgICBvYnNlcnZhYmxlLnN0YWNrICYmXG4gICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgZXJyb3IgIT09IG51bGwgJiZcbiAgICAgICAgZXJyb3Iuc3RhY2sgJiZcbiAgICAgICAgZXJyb3Iuc3RhY2suaW5kZXhPZihTVEFDS19KVU1QX1NFUEFSQVRPUikgPT09IC0xXG4gICAgKSB7XG4gICAgICB2YXIgc3RhY2tzID0gW107XG4gICAgICBmb3IgKHZhciBvID0gb2JzZXJ2YWJsZTsgISFvOyBvID0gby5zb3VyY2UpIHtcbiAgICAgICAgaWYgKG8uc3RhY2spIHtcbiAgICAgICAgICBzdGFja3MudW5zaGlmdChvLnN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3RhY2tzLnVuc2hpZnQoZXJyb3Iuc3RhY2spO1xuXG4gICAgICB2YXIgY29uY2F0ZWRTdGFja3MgPSBzdGFja3Muam9pbignXFxuJyArIFNUQUNLX0pVTVBfU0VQQVJBVE9SICsgJ1xcbicpO1xuICAgICAgZXJyb3Iuc3RhY2sgPSBmaWx0ZXJTdGFja1N0cmluZyhjb25jYXRlZFN0YWNrcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyU3RhY2tTdHJpbmcoc3RhY2tTdHJpbmcpIHtcbiAgICB2YXIgbGluZXMgPSBzdGFja1N0cmluZy5zcGxpdCgnXFxuJyksIGRlc2lyZWRMaW5lcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaW5lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGxpbmUgPSBsaW5lc1tpXTtcblxuICAgICAgaWYgKCFpc0ludGVybmFsRnJhbWUobGluZSkgJiYgIWlzTm9kZUZyYW1lKGxpbmUpICYmIGxpbmUpIHtcbiAgICAgICAgZGVzaXJlZExpbmVzLnB1c2gobGluZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXNpcmVkTGluZXMuam9pbignXFxuJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0ludGVybmFsRnJhbWUoc3RhY2tMaW5lKSB7XG4gICAgdmFyIGZpbGVOYW1lQW5kTGluZU51bWJlciA9IGdldEZpbGVOYW1lQW5kTGluZU51bWJlcihzdGFja0xpbmUpO1xuICAgIGlmICghZmlsZU5hbWVBbmRMaW5lTnVtYmVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBmaWxlTmFtZSA9IGZpbGVOYW1lQW5kTGluZU51bWJlclswXSwgbGluZU51bWJlciA9IGZpbGVOYW1lQW5kTGluZU51bWJlclsxXTtcblxuICAgIHJldHVybiBmaWxlTmFtZSA9PT0gckZpbGVOYW1lICYmXG4gICAgICBsaW5lTnVtYmVyID49IHJTdGFydGluZ0xpbmUgJiZcbiAgICAgIGxpbmVOdW1iZXIgPD0gckVuZGluZ0xpbmU7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGVGcmFtZShzdGFja0xpbmUpIHtcbiAgICByZXR1cm4gc3RhY2tMaW5lLmluZGV4T2YoJyhtb2R1bGUuanM6JykgIT09IC0xIHx8XG4gICAgICBzdGFja0xpbmUuaW5kZXhPZignKG5vZGUuanM6JykgIT09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FwdHVyZUxpbmUoKSB7XG4gICAgaWYgKCFoYXNTdGFja3MpIHsgcmV0dXJuOyB9XG5cbiAgICB0cnkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdmFyIGxpbmVzID0gZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgZmlyc3RMaW5lID0gbGluZXNbMF0uaW5kZXhPZignQCcpID4gMCA/IGxpbmVzWzFdIDogbGluZXNbMl07XG4gICAgICB2YXIgZmlsZU5hbWVBbmRMaW5lTnVtYmVyID0gZ2V0RmlsZU5hbWVBbmRMaW5lTnVtYmVyKGZpcnN0TGluZSk7XG4gICAgICBpZiAoIWZpbGVOYW1lQW5kTGluZU51bWJlcikgeyByZXR1cm47IH1cblxuICAgICAgckZpbGVOYW1lID0gZmlsZU5hbWVBbmRMaW5lTnVtYmVyWzBdO1xuICAgICAgcmV0dXJuIGZpbGVOYW1lQW5kTGluZU51bWJlclsxXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGaWxlTmFtZUFuZExpbmVOdW1iZXIoc3RhY2tMaW5lKSB7XG4gICAgLy8gTmFtZWQgZnVuY3Rpb25zOiAnYXQgZnVuY3Rpb25OYW1lIChmaWxlbmFtZTpsaW5lTnVtYmVyOmNvbHVtbk51bWJlciknXG4gICAgdmFyIGF0dGVtcHQxID0gL2F0IC4rIFxcKCguKyk6KFxcZCspOig/OlxcZCspXFwpJC8uZXhlYyhzdGFja0xpbmUpO1xuICAgIGlmIChhdHRlbXB0MSkgeyByZXR1cm4gW2F0dGVtcHQxWzFdLCBOdW1iZXIoYXR0ZW1wdDFbMl0pXTsgfVxuXG4gICAgLy8gQW5vbnltb3VzIGZ1bmN0aW9uczogJ2F0IGZpbGVuYW1lOmxpbmVOdW1iZXI6Y29sdW1uTnVtYmVyJ1xuICAgIHZhciBhdHRlbXB0MiA9IC9hdCAoW14gXSspOihcXGQrKTooPzpcXGQrKSQvLmV4ZWMoc3RhY2tMaW5lKTtcbiAgICBpZiAoYXR0ZW1wdDIpIHsgcmV0dXJuIFthdHRlbXB0MlsxXSwgTnVtYmVyKGF0dGVtcHQyWzJdKV07IH1cblxuICAgIC8vIEZpcmVmb3ggc3R5bGU6ICdmdW5jdGlvbkBmaWxlbmFtZTpsaW5lTnVtYmVyIG9yIEBmaWxlbmFtZTpsaW5lTnVtYmVyJ1xuICAgIHZhciBhdHRlbXB0MyA9IC8uKkAoLispOihcXGQrKSQvLmV4ZWMoc3RhY2tMaW5lKTtcbiAgICBpZiAoYXR0ZW1wdDMpIHsgcmV0dXJuIFthdHRlbXB0M1sxXSwgTnVtYmVyKGF0dGVtcHQzWzJdKV07IH1cbiAgfVxuXG4gIHZhciBFbXB0eUVycm9yID0gUnguRW1wdHlFcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubWVzc2FnZSA9ICdTZXF1ZW5jZSBjb250YWlucyBubyBlbGVtZW50cy4nO1xuICAgIEVycm9yLmNhbGwodGhpcyk7XG4gIH07XG4gIEVtcHR5RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICBFbXB0eUVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0VtcHR5RXJyb3InO1xuXG4gIHZhciBPYmplY3REaXNwb3NlZEVycm9yID0gUnguT2JqZWN0RGlzcG9zZWRFcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubWVzc2FnZSA9ICdPYmplY3QgaGFzIGJlZW4gZGlzcG9zZWQnO1xuICAgIEVycm9yLmNhbGwodGhpcyk7XG4gIH07XG4gIE9iamVjdERpc3Bvc2VkRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICBPYmplY3REaXNwb3NlZEVycm9yLnByb3RvdHlwZS5uYW1lID0gJ09iamVjdERpc3Bvc2VkRXJyb3InO1xuXG4gIHZhciBBcmd1bWVudE91dE9mUmFuZ2VFcnJvciA9IFJ4LkFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubWVzc2FnZSA9ICdBcmd1bWVudCBvdXQgb2YgcmFuZ2UnO1xuICAgIEVycm9yLmNhbGwodGhpcyk7XG4gIH07XG4gIEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnQXJndW1lbnRPdXRPZlJhbmdlRXJyb3InO1xuXG4gIHZhciBOb3RTdXBwb3J0ZWRFcnJvciA9IFJ4Lk5vdFN1cHBvcnRlZEVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdUaGlzIG9wZXJhdGlvbiBpcyBub3Qgc3VwcG9ydGVkJztcbiAgICBFcnJvci5jYWxsKHRoaXMpO1xuICB9O1xuICBOb3RTdXBwb3J0ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gIE5vdFN1cHBvcnRlZEVycm9yLnByb3RvdHlwZS5uYW1lID0gJ05vdFN1cHBvcnRlZEVycm9yJztcblxuICB2YXIgTm90SW1wbGVtZW50ZWRFcnJvciA9IFJ4Lk5vdEltcGxlbWVudGVkRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ1RoaXMgb3BlcmF0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZCc7XG4gICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgfTtcbiAgTm90SW1wbGVtZW50ZWRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG4gIE5vdEltcGxlbWVudGVkRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnTm90SW1wbGVtZW50ZWRFcnJvcic7XG5cbiAgdmFyIG5vdEltcGxlbWVudGVkID0gUnguaGVscGVycy5ub3RJbXBsZW1lbnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICB9O1xuXG4gIHZhciBub3RTdXBwb3J0ZWQgPSBSeC5oZWxwZXJzLm5vdFN1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgTm90U3VwcG9ydGVkRXJyb3IoKTtcbiAgfTtcblxuICAvLyBTaGltIGluIGl0ZXJhdG9yIHN1cHBvcnRcbiAgdmFyICRpdGVyYXRvciQgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3IpIHx8XG4gICAgJ19lczZzaGltX2l0ZXJhdG9yXyc7XG4gIC8vIEJ1ZyBmb3IgbW96aWxsYSB2ZXJzaW9uXG4gIGlmIChyb290LlNldCAmJiB0eXBlb2YgbmV3IHJvb3QuU2V0KClbJ0BAaXRlcmF0b3InXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICRpdGVyYXRvciQgPSAnQEBpdGVyYXRvcic7XG4gIH1cblxuICB2YXIgZG9uZUVudW1lcmF0b3IgPSBSeC5kb25lRW51bWVyYXRvciA9IHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuZGVmaW5lZCB9O1xuXG4gIHZhciBpc0l0ZXJhYmxlID0gUnguaGVscGVycy5pc0l0ZXJhYmxlID0gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBvWyRpdGVyYXRvciRdICE9PSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgdmFyIGlzQXJyYXlMaWtlID0gUnguaGVscGVycy5pc0FycmF5TGlrZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgby5sZW5ndGggIT09IHVuZGVmaW5lZDtcbiAgfTtcblxuICBSeC5oZWxwZXJzLml0ZXJhdG9yID0gJGl0ZXJhdG9yJDtcblxuICB2YXIgYmluZENhbGxiYWNrID0gUnguaW50ZXJuYWxzLmJpbmRDYWxsYmFjayA9IGZ1bmN0aW9uIChmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCkge1xuICAgIGlmICh0eXBlb2YgdGhpc0FyZyA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGZ1bmM7IH1cbiAgICBzd2l0Y2goYXJnQ291bnQpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZylcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnKTtcbiAgICAgICAgfVxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9O1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICAvKiogVXNlZCB0byBkZXRlcm1pbmUgaWYgdmFsdWVzIGFyZSBvZiB0aGUgbGFuZ3VhZ2UgdHlwZSBPYmplY3QgKi9cbiAgdmFyIGRvbnRFbnVtcyA9IFsndG9TdHJpbmcnLFxuICAgICd0b0xvY2FsZVN0cmluZycsXG4gICAgJ3ZhbHVlT2YnLFxuICAgICdoYXNPd25Qcm9wZXJ0eScsXG4gICAgJ2lzUHJvdG90eXBlT2YnLFxuICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICAgJ2NvbnN0cnVjdG9yJ10sXG4gIGRvbnRFbnVtc0xlbmd0aCA9IGRvbnRFbnVtcy5sZW5ndGg7XG5cbiAgLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCBzaG9ydGN1dHMgKi9cbiAgdmFyIGFyZ3NDbGFzcyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5Q2xhc3MgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xDbGFzcyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlQ2xhc3MgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JDbGFzcyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY0NsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBudW1iZXJDbGFzcyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdENsYXNzID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwQ2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzdHJpbmdDbGFzcyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4gIHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgIHN1cHBvcnRzQXJnc0NsYXNzID0gdG9TdHJpbmcuY2FsbChhcmd1bWVudHMpID09IGFyZ3NDbGFzcywgLy8gRm9yIGxlc3MgPElFOSAmJiBGRjw0XG4gICAgc3VwcG9ydE5vZGVDbGFzcyxcbiAgICBlcnJvclByb3RvID0gRXJyb3IucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICBzdHJpbmdQcm90byA9IFN0cmluZy5wcm90b3R5cGUsXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuICB0cnkge1xuICAgIHN1cHBvcnROb2RlQ2xhc3MgPSAhKHRvU3RyaW5nLmNhbGwoZG9jdW1lbnQpID09IG9iamVjdENsYXNzICYmICEoeyAndG9TdHJpbmcnOiAwIH0gKyAnJykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc3VwcG9ydE5vZGVDbGFzcyA9IHRydWU7XG4gIH1cblxuICB2YXIgbm9uRW51bVByb3BzID0ge307XG4gIG5vbkVudW1Qcm9wc1thcnJheUNsYXNzXSA9IG5vbkVudW1Qcm9wc1tkYXRlQ2xhc3NdID0gbm9uRW51bVByb3BzW251bWJlckNsYXNzXSA9IHsgJ2NvbnN0cnVjdG9yJzogdHJ1ZSwgJ3RvTG9jYWxlU3RyaW5nJzogdHJ1ZSwgJ3RvU3RyaW5nJzogdHJ1ZSwgJ3ZhbHVlT2YnOiB0cnVlIH07XG4gIG5vbkVudW1Qcm9wc1tib29sQ2xhc3NdID0gbm9uRW51bVByb3BzW3N0cmluZ0NsYXNzXSA9IHsgJ2NvbnN0cnVjdG9yJzogdHJ1ZSwgJ3RvU3RyaW5nJzogdHJ1ZSwgJ3ZhbHVlT2YnOiB0cnVlIH07XG4gIG5vbkVudW1Qcm9wc1tlcnJvckNsYXNzXSA9IG5vbkVudW1Qcm9wc1tmdW5jQ2xhc3NdID0gbm9uRW51bVByb3BzW3JlZ2V4cENsYXNzXSA9IHsgJ2NvbnN0cnVjdG9yJzogdHJ1ZSwgJ3RvU3RyaW5nJzogdHJ1ZSB9O1xuICBub25FbnVtUHJvcHNbb2JqZWN0Q2xhc3NdID0geyAnY29uc3RydWN0b3InOiB0cnVlIH07XG5cbiAgdmFyIHN1cHBvcnQgPSB7fTtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3RvciA9IGZ1bmN0aW9uKCkgeyB0aGlzLnggPSAxOyB9LFxuICAgICAgcHJvcHMgPSBbXTtcblxuICAgIGN0b3IucHJvdG90eXBlID0geyAndmFsdWVPZic6IDEsICd5JzogMSB9O1xuICAgIGZvciAodmFyIGtleSBpbiBuZXcgY3RvcikgeyBwcm9wcy5wdXNoKGtleSk7IH1cbiAgICBmb3IgKGtleSBpbiBhcmd1bWVudHMpIHsgfVxuXG4gICAgLy8gRGV0ZWN0IGlmIGBuYW1lYCBvciBgbWVzc2FnZWAgcHJvcGVydGllcyBvZiBgRXJyb3IucHJvdG90eXBlYCBhcmUgZW51bWVyYWJsZSBieSBkZWZhdWx0LlxuICAgIHN1cHBvcnQuZW51bUVycm9yUHJvcHMgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGVycm9yUHJvdG8sICdtZXNzYWdlJykgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlcnJvclByb3RvLCAnbmFtZScpO1xuXG4gICAgLy8gRGV0ZWN0IGlmIGBwcm90b3R5cGVgIHByb3BlcnRpZXMgYXJlIGVudW1lcmFibGUgYnkgZGVmYXVsdC5cbiAgICBzdXBwb3J0LmVudW1Qcm90b3R5cGVzID0gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChjdG9yLCAncHJvdG90eXBlJyk7XG5cbiAgICAvLyBEZXRlY3QgaWYgYGFyZ3VtZW50c2Agb2JqZWN0IGluZGV4ZXMgYXJlIG5vbi1lbnVtZXJhYmxlXG4gICAgc3VwcG9ydC5ub25FbnVtQXJncyA9IGtleSAhPSAwO1xuXG4gICAgLy8gRGV0ZWN0IGlmIHByb3BlcnRpZXMgc2hhZG93aW5nIHRob3NlIG9uIGBPYmplY3QucHJvdG90eXBlYCBhcmUgbm9uLWVudW1lcmFibGUuXG4gICAgc3VwcG9ydC5ub25FbnVtU2hhZG93cyA9ICEvdmFsdWVPZi8udGVzdChwcm9wcyk7XG4gIH0oMSkpO1xuXG4gIHZhciBpc09iamVjdCA9IFJ4LmludGVybmFscy5pc09iamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlICYmICh0eXBlID09ICdmdW5jdGlvbicgfHwgdHlwZSA9PSAnb2JqZWN0JykgfHwgZmFsc2U7XG4gIH07XG5cbiAgZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGlmIChzdXBwb3J0Lm5vbkVudW1BcmdzICYmIG9iamVjdC5sZW5ndGggJiYgaXNBcmd1bWVudHMob2JqZWN0KSkge1xuICAgICAgb2JqZWN0ID0gc2xpY2UuY2FsbChvYmplY3QpO1xuICAgIH1cbiAgICB2YXIgc2tpcFByb3RvID0gc3VwcG9ydC5lbnVtUHJvdG90eXBlcyAmJiB0eXBlb2Ygb2JqZWN0ID09ICdmdW5jdGlvbicsXG4gICAgICAgIHNraXBFcnJvclByb3BzID0gc3VwcG9ydC5lbnVtRXJyb3JQcm9wcyAmJiAob2JqZWN0ID09PSBlcnJvclByb3RvIHx8IG9iamVjdCBpbnN0YW5jZW9mIEVycm9yKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGlmICghKHNraXBQcm90byAmJiBrZXkgPT0gJ3Byb3RvdHlwZScpICYmXG4gICAgICAgICAgIShza2lwRXJyb3JQcm9wcyAmJiAoa2V5ID09ICdtZXNzYWdlJyB8fCBrZXkgPT0gJ25hbWUnKSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ub25FbnVtU2hhZG93cyAmJiBvYmplY3QgIT09IG9iamVjdFByb3RvKSB7XG4gICAgICB2YXIgY3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICAgIGxlbmd0aCA9IGRvbnRFbnVtc0xlbmd0aDtcblxuICAgICAgaWYgKG9iamVjdCA9PT0gKGN0b3IgJiYgY3Rvci5wcm90b3R5cGUpKSB7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBvYmplY3QgPT09IHN0cmluZ1Byb3RvID8gc3RyaW5nQ2xhc3MgOiBvYmplY3QgPT09IGVycm9yUHJvdG8gPyBlcnJvckNsYXNzIDogdG9TdHJpbmcuY2FsbChvYmplY3QpLFxuICAgICAgICAgICAgbm9uRW51bSA9IG5vbkVudW1Qcm9wc1tjbGFzc05hbWVdO1xuICAgICAgfVxuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAga2V5ID0gZG9udEVudW1zW2luZGV4XTtcbiAgICAgICAgaWYgKCEobm9uRW51bSAmJiBub25FbnVtW2tleV0pICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gaW50ZXJuYWxGb3Iob2JqZWN0LCBjYWxsYmFjaywga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgICAgaWYgKGNhbGxiYWNrKG9iamVjdFtrZXldLCBrZXksIG9iamVjdCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gaW50ZXJuYWxGb3JJbihvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGludGVybmFsRm9yKG9iamVjdCwgY2FsbGJhY2ssIGtleXNJbik7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUodmFsdWUpIHtcbiAgICAvLyBJRSA8IDkgcHJlc2VudHMgRE9NIG5vZGVzIGFzIGBPYmplY3RgIG9iamVjdHMgZXhjZXB0IHRoZXkgaGF2ZSBgdG9TdHJpbmdgXG4gICAgLy8gbWV0aG9kcyB0aGF0IGFyZSBgdHlwZW9mYCBcInN0cmluZ1wiIGFuZCBzdGlsbCBjYW4gY29lcmNlIG5vZGVzIHRvIHN0cmluZ3NcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicgJiYgdHlwZW9mICh2YWx1ZSArICcnKSA9PSAnc3RyaW5nJztcbiAgfVxuXG4gIHZhciBpc0FyZ3VtZW50cyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc0NsYXNzIDogZmFsc2U7XG4gIH1cblxuICAvLyBmYWxsYmFjayBmb3IgYnJvd3NlcnMgdGhhdCBjYW4ndCBkZXRlY3QgYGFyZ3VtZW50c2Agb2JqZWN0cyBieSBbW0NsYXNzXV1cbiAgaWYgKCFzdXBwb3J0c0FyZ3NDbGFzcykge1xuICAgIGlzQXJndW1lbnRzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSA/IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSA6IGZhbHNlO1xuICAgIH07XG4gIH1cblxuICB2YXIgaXNFcXVhbCA9IFJ4LmludGVybmFscy5pc0VxdWFsID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4gZGVlcEVxdWFscyh4LCB5LCBbXSwgW10pO1xuICB9O1xuXG4gIC8qKiBAcHJpdmF0ZVxuICAgKiBVc2VkIGZvciBkZWVwIGNvbXBhcmlzb25cbiAgICoqL1xuICBmdW5jdGlvbiBkZWVwRXF1YWxzKGEsIGIsIHN0YWNrQSwgc3RhY2tCKSB7XG4gICAgLy8gZXhpdCBlYXJseSBmb3IgaWRlbnRpY2FsIHZhbHVlc1xuICAgIGlmIChhID09PSBiKSB7XG4gICAgICAvLyB0cmVhdCBgKzBgIHZzLiBgLTBgIGFzIG5vdCBlcXVhbFxuICAgICAgcmV0dXJuIGEgIT09IDAgfHwgKDEgLyBhID09IDEgLyBiKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBhLFxuICAgICAgICBvdGhlclR5cGUgPSB0eXBlb2YgYjtcblxuICAgIC8vIGV4aXQgZWFybHkgZm9yIHVubGlrZSBwcmltaXRpdmUgdmFsdWVzXG4gICAgaWYgKGEgPT09IGEgJiYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwgfHxcbiAgICAgICAgKHR5cGUgIT0gJ2Z1bmN0aW9uJyAmJiB0eXBlICE9ICdvYmplY3QnICYmIG90aGVyVHlwZSAhPSAnZnVuY3Rpb24nICYmIG90aGVyVHlwZSAhPSAnb2JqZWN0JykpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY29tcGFyZSBbW0NsYXNzXV0gbmFtZXNcbiAgICB2YXIgY2xhc3NOYW1lID0gdG9TdHJpbmcuY2FsbChhKSxcbiAgICAgICAgb3RoZXJDbGFzcyA9IHRvU3RyaW5nLmNhbGwoYik7XG5cbiAgICBpZiAoY2xhc3NOYW1lID09IGFyZ3NDbGFzcykge1xuICAgICAgY2xhc3NOYW1lID0gb2JqZWN0Q2xhc3M7XG4gICAgfVxuICAgIGlmIChvdGhlckNsYXNzID09IGFyZ3NDbGFzcykge1xuICAgICAgb3RoZXJDbGFzcyA9IG9iamVjdENsYXNzO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lICE9IG90aGVyQ2xhc3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIGNhc2UgYm9vbENsYXNzOlxuICAgICAgY2FzZSBkYXRlQ2xhc3M6XG4gICAgICAgIC8vIGNvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtYmVycywgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzIGFuZCBib29sZWFuc1xuICAgICAgICAvLyB0byBgMWAgb3IgYDBgIHRyZWF0aW5nIGludmFsaWQgZGF0ZXMgY29lcmNlZCB0byBgTmFOYCBhcyBub3QgZXF1YWxcbiAgICAgICAgcmV0dXJuICthID09ICtiO1xuXG4gICAgICBjYXNlIG51bWJlckNsYXNzOlxuICAgICAgICAvLyB0cmVhdCBgTmFOYCB2cy4gYE5hTmAgYXMgZXF1YWxcbiAgICAgICAgcmV0dXJuIChhICE9ICthKSA/XG4gICAgICAgICAgYiAhPSArYiA6XG4gICAgICAgICAgLy8gYnV0IHRyZWF0IGAtMGAgdnMuIGArMGAgYXMgbm90IGVxdWFsXG4gICAgICAgICAgKGEgPT0gMCA/ICgxIC8gYSA9PSAxIC8gYikgOiBhID09ICtiKTtcblxuICAgICAgY2FzZSByZWdleHBDbGFzczpcbiAgICAgIGNhc2Ugc3RyaW5nQ2xhc3M6XG4gICAgICAgIC8vIGNvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgKGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuMTAuNi40KVxuICAgICAgICAvLyB0cmVhdCBzdHJpbmcgcHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3QgaW5zdGFuY2VzIGFzIGVxdWFsXG4gICAgICAgIHJldHVybiBhID09IFN0cmluZyhiKTtcbiAgICB9XG4gICAgdmFyIGlzQXJyID0gY2xhc3NOYW1lID09IGFycmF5Q2xhc3M7XG4gICAgaWYgKCFpc0Fycikge1xuXG4gICAgICAvLyBleGl0IGZvciBmdW5jdGlvbnMgYW5kIERPTSBub2Rlc1xuICAgICAgaWYgKGNsYXNzTmFtZSAhPSBvYmplY3RDbGFzcyB8fCAoIXN1cHBvcnQubm9kZUNsYXNzICYmIChpc05vZGUoYSkgfHwgaXNOb2RlKGIpKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gaW4gb2xkZXIgdmVyc2lvbnMgb2YgT3BlcmEsIGBhcmd1bWVudHNgIG9iamVjdHMgaGF2ZSBgQXJyYXlgIGNvbnN0cnVjdG9yc1xuICAgICAgdmFyIGN0b3JBID0gIXN1cHBvcnQuYXJnc09iamVjdCAmJiBpc0FyZ3VtZW50cyhhKSA/IE9iamVjdCA6IGEuY29uc3RydWN0b3IsXG4gICAgICAgICAgY3RvckIgPSAhc3VwcG9ydC5hcmdzT2JqZWN0ICYmIGlzQXJndW1lbnRzKGIpID8gT2JqZWN0IDogYi5jb25zdHJ1Y3RvcjtcblxuICAgICAgLy8gbm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWxcbiAgICAgIGlmIChjdG9yQSAhPSBjdG9yQiAmJlxuICAgICAgICAgICAgIShoYXNPd25Qcm9wZXJ0eS5jYWxsKGEsICdjb25zdHJ1Y3RvcicpICYmIGhhc093blByb3BlcnR5LmNhbGwoYiwgJ2NvbnN0cnVjdG9yJykpICYmXG4gICAgICAgICAgICAhKGlzRnVuY3Rpb24oY3RvckEpICYmIGN0b3JBIGluc3RhbmNlb2YgY3RvckEgJiYgaXNGdW5jdGlvbihjdG9yQikgJiYgY3RvckIgaW5zdGFuY2VvZiBjdG9yQikgJiZcbiAgICAgICAgICAgICgnY29uc3RydWN0b3InIGluIGEgJiYgJ2NvbnN0cnVjdG9yJyBpbiBiKVxuICAgICAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGFzc3VtZSBjeWNsaWMgc3RydWN0dXJlcyBhcmUgZXF1YWxcbiAgICAvLyB0aGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMVxuICAgIC8vIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AgKGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuMTIuMylcbiAgICB2YXIgaW5pdGVkU3RhY2sgPSAhc3RhY2tBO1xuICAgIHN0YWNrQSB8fCAoc3RhY2tBID0gW10pO1xuICAgIHN0YWNrQiB8fCAoc3RhY2tCID0gW10pO1xuXG4gICAgdmFyIGxlbmd0aCA9IHN0YWNrQS5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICBpZiAoc3RhY2tBW2xlbmd0aF0gPT0gYSkge1xuICAgICAgICByZXR1cm4gc3RhY2tCW2xlbmd0aF0gPT0gYjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNpemUgPSAwO1xuICAgIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gICAgLy8gYWRkIGBhYCBhbmQgYGJgIHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0c1xuICAgIHN0YWNrQS5wdXNoKGEpO1xuICAgIHN0YWNrQi5wdXNoKGIpO1xuXG4gICAgLy8gcmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKVxuICAgIGlmIChpc0Fycikge1xuICAgICAgLy8gY29tcGFyZSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnlcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgc2l6ZSA9IGIubGVuZ3RoO1xuICAgICAgcmVzdWx0ID0gc2l6ZSA9PSBsZW5ndGg7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gZGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllc1xuICAgICAgICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gbGVuZ3RoLFxuICAgICAgICAgICAgICB2YWx1ZSA9IGJbc2l6ZV07XG5cbiAgICAgICAgICBpZiAoIShyZXN1bHQgPSBkZWVwRXF1YWxzKGFbc2l6ZV0sIHZhbHVlLCBzdGFja0EsIHN0YWNrQikpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBkZWVwIGNvbXBhcmUgb2JqZWN0cyB1c2luZyBgZm9ySW5gLCBpbnN0ZWFkIG9mIGBmb3JPd25gLCB0byBhdm9pZCBgT2JqZWN0LmtleXNgXG4gICAgICAvLyB3aGljaCwgaW4gdGhpcyBjYXNlLCBpcyBtb3JlIGNvc3RseVxuICAgICAgaW50ZXJuYWxGb3JJbihiLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBiKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleSkpIHtcbiAgICAgICAgICAvLyBjb3VudCB0aGUgbnVtYmVyIG9mIHByb3BlcnRpZXMuXG4gICAgICAgICAgc2l6ZSsrO1xuICAgICAgICAgIC8vIGRlZXAgY29tcGFyZSBlYWNoIHByb3BlcnR5IHZhbHVlLlxuICAgICAgICAgIHJldHVybiAocmVzdWx0ID0gaGFzT3duUHJvcGVydHkuY2FsbChhLCBrZXkpICYmIGRlZXBFcXVhbHMoYVtrZXldLCB2YWx1ZSwgc3RhY2tBLCBzdGFja0IpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gZW5zdXJlIGJvdGggb2JqZWN0cyBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzXG4gICAgICAgIGludGVybmFsRm9ySW4oYSwgZnVuY3Rpb24odmFsdWUsIGtleSwgYSkge1xuICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGtleSkpIHtcbiAgICAgICAgICAgIC8vIGBzaXplYCB3aWxsIGJlIGAtMWAgaWYgYGFgIGhhcyBtb3JlIHByb3BlcnRpZXMgdGhhbiBgYmBcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0ID0gLS1zaXplID4gLTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YWNrQS5wb3AoKTtcbiAgICBzdGFja0IucG9wKCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gIHZhciBpbmhlcml0cyA9IFJ4LmludGVybmFscy5pbmhlcml0cyA9IGZ1bmN0aW9uIChjaGlsZCwgcGFyZW50KSB7XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfVxuICAgIF9fLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gICAgY2hpbGQucHJvdG90eXBlID0gbmV3IF9fKCk7XG4gIH07XG5cbiAgdmFyIGFkZFByb3BlcnRpZXMgPSBSeC5pbnRlcm5hbHMuYWRkUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBmb3IodmFyIHNvdXJjZXMgPSBbXSwgaSA9IDEsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykgeyBzb3VyY2VzLnB1c2goYXJndW1lbnRzW2ldKTsgfVxuICAgIGZvciAodmFyIGlkeCA9IDAsIGxuID0gc291cmNlcy5sZW5ndGg7IGlkeCA8IGxuOyBpZHgrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaWR4XTtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gUnggVXRpbHNcbiAgdmFyIGFkZFJlZiA9IFJ4LmludGVybmFscy5hZGRSZWYgPSBmdW5jdGlvbiAoeHMsIHIpIHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoci5nZXREaXNwb3NhYmxlKCksIHhzLnN1YnNjcmliZShvYnNlcnZlcikpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFycmF5SW5pdGlhbGl6ZShjb3VudCwgZmFjdG9yeSkge1xuICAgIHZhciBhID0gbmV3IEFycmF5KGNvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGFbaV0gPSBmYWN0b3J5KCk7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBncm91cCBvZiBkaXNwb3NhYmxlIHJlc291cmNlcyB0aGF0IGFyZSBkaXNwb3NlZCB0b2dldGhlci5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICB2YXIgQ29tcG9zaXRlRGlzcG9zYWJsZSA9IFJ4LkNvbXBvc2l0ZURpc3Bvc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSwgbGVuO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHNbMF07XG4gICAgICBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgIGZvcihpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICB9XG4gICAgdGhpcy5kaXNwb3NhYmxlcyA9IGFyZ3M7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5sZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgfTtcblxuICB2YXIgQ29tcG9zaXRlRGlzcG9zYWJsZVByb3RvdHlwZSA9IENvbXBvc2l0ZURpc3Bvc2FibGUucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgZGlzcG9zYWJsZSB0byB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZSBvciBkaXNwb3NlcyB0aGUgZGlzcG9zYWJsZSBpZiB0aGUgQ29tcG9zaXRlRGlzcG9zYWJsZSBpcyBkaXNwb3NlZC5cbiAgICogQHBhcmFtIHtNaXhlZH0gaXRlbSBEaXNwb3NhYmxlIHRvIGFkZC5cbiAgICovXG4gIENvbXBvc2l0ZURpc3Bvc2FibGVQcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICBpdGVtLmRpc3Bvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwb3NhYmxlcy5wdXNoKGl0ZW0pO1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW5kIGRpc3Bvc2VzIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGEgZGlzcG9zYWJsZSBmcm9tIHRoZSBDb21wb3NpdGVEaXNwb3NhYmxlLlxuICAgKiBAcGFyYW0ge01peGVkfSBpdGVtIERpc3Bvc2FibGUgdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiBmb3VuZDsgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZVByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBzaG91bGREaXNwb3NlID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHZhciBpZHggPSB0aGlzLmRpc3Bvc2FibGVzLmluZGV4T2YoaXRlbSk7XG4gICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICBzaG91bGREaXNwb3NlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNwb3NhYmxlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgdGhpcy5sZW5ndGgtLTtcbiAgICAgICAgaXRlbS5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaG91bGREaXNwb3NlO1xuICB9O1xuXG4gIC8qKlxuICAgKiAgRGlzcG9zZXMgYWxsIGRpc3Bvc2FibGVzIGluIHRoZSBncm91cCBhbmQgcmVtb3ZlcyB0aGVtIGZyb20gdGhlIGdyb3VwLlxuICAgKi9cbiAgQ29tcG9zaXRlRGlzcG9zYWJsZVByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgdmFyIGxlbiA9IHRoaXMuZGlzcG9zYWJsZXMubGVuZ3RoLCBjdXJyZW50RGlzcG9zYWJsZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBjdXJyZW50RGlzcG9zYWJsZXNbaV0gPSB0aGlzLmRpc3Bvc2FibGVzW2ldOyB9XG4gICAgICB0aGlzLmRpc3Bvc2FibGVzID0gW107XG4gICAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjdXJyZW50RGlzcG9zYWJsZXNbaV0uZGlzcG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBzZXQgb2Ygc3RhdGljIG1ldGhvZHMgZm9yIGNyZWF0aW5nIERpc3Bvc2FibGVzLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwb3NlIEFjdGlvbiB0byBydW4gZHVyaW5nIHRoZSBmaXJzdCBjYWxsIHRvIGRpc3Bvc2UuIFRoZSBhY3Rpb24gaXMgZ3VhcmFudGVlZCB0byBiZSBydW4gYXQgbW9zdCBvbmNlLlxuICAgKi9cbiAgdmFyIERpc3Bvc2FibGUgPSBSeC5EaXNwb3NhYmxlID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uIHx8IG5vb3A7XG4gIH07XG5cbiAgLyoqIFBlcmZvcm1zIHRoZSB0YXNrIG9mIGNsZWFuaW5nIHVwIHJlc291cmNlcy4gKi9cbiAgRGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgdGhpcy5hY3Rpb24oKTtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZGlzcG9zYWJsZSBvYmplY3QgdGhhdCBpbnZva2VzIHRoZSBzcGVjaWZpZWQgYWN0aW9uIHdoZW4gZGlzcG9zZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3Bvc2UgQWN0aW9uIHRvIHJ1biBkdXJpbmcgdGhlIGZpcnN0IGNhbGwgdG8gZGlzcG9zZS4gVGhlIGFjdGlvbiBpcyBndWFyYW50ZWVkIHRvIGJlIHJ1biBhdCBtb3N0IG9uY2UuXG4gICAqIEByZXR1cm4ge0Rpc3Bvc2FibGV9IFRoZSBkaXNwb3NhYmxlIG9iamVjdCB0aGF0IHJ1bnMgdGhlIGdpdmVuIGFjdGlvbiB1cG9uIGRpc3Bvc2FsLlxuICAgKi9cbiAgdmFyIGRpc3Bvc2FibGVDcmVhdGUgPSBEaXNwb3NhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIG5ldyBEaXNwb3NhYmxlKGFjdGlvbik7IH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGRpc3Bvc2FibGUgdGhhdCBkb2VzIG5vdGhpbmcgd2hlbiBkaXNwb3NlZC5cbiAgICovXG4gIHZhciBkaXNwb3NhYmxlRW1wdHkgPSBEaXNwb3NhYmxlLmVtcHR5ID0geyBkaXNwb3NlOiBub29wIH07XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBkaXNwb3NhYmxlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBPYmplY3QgdG8gdGVzdCB3aGV0aGVyIGl0IGhhcyBhIGRpc3Bvc2UgbWV0aG9kXG4gICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGEgZGlzcG9zYWJsZSBvYmplY3QsIGVsc2UgZmFsc2UuXG4gICAqL1xuICB2YXIgaXNEaXNwb3NhYmxlID0gRGlzcG9zYWJsZS5pc0Rpc3Bvc2FibGUgPSBmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkICYmIGlzRnVuY3Rpb24oZC5kaXNwb3NlKTtcbiAgfTtcblxuICB2YXIgY2hlY2tEaXNwb3NlZCA9IERpc3Bvc2FibGUuY2hlY2tEaXNwb3NlZCA9IGZ1bmN0aW9uIChkaXNwb3NhYmxlKSB7XG4gICAgaWYgKGRpc3Bvc2FibGUuaXNEaXNwb3NlZCkgeyB0aHJvdyBuZXcgT2JqZWN0RGlzcG9zZWRFcnJvcigpOyB9XG4gIH07XG5cbiAgdmFyIGRpc3Bvc2FibGVGaXh1cCA9IERpc3Bvc2FibGUuX2ZpeHVwID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIHJldHVybiBpc0Rpc3Bvc2FibGUocmVzdWx0KSA/IHJlc3VsdCA6IGRpc3Bvc2FibGVFbXB0eTtcbiAgfTtcblxuICAvLyBTaW5nbGUgYXNzaWdubWVudFxuICB2YXIgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUgPSBSeC5TaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICB9O1xuICBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZS5wcm90b3R5cGUuZ2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuICBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZS5wcm90b3R5cGUuc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQpIHsgdGhyb3cgbmV3IEVycm9yKCdEaXNwb3NhYmxlIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQnKTsgfVxuICAgIHZhciBzaG91bGREaXNwb3NlID0gdGhpcy5pc0Rpc3Bvc2VkO1xuICAgICFzaG91bGREaXNwb3NlICYmICh0aGlzLmN1cnJlbnQgPSB2YWx1ZSk7XG4gICAgc2hvdWxkRGlzcG9zZSAmJiB2YWx1ZSAmJiB2YWx1ZS5kaXNwb3NlKCk7XG4gIH07XG4gIFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgdmFyIG9sZCA9IHRoaXMuY3VycmVudDtcbiAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gICAgICBvbGQgJiYgb2xkLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gTXVsdGlwbGUgYXNzaWdubWVudCBkaXNwb3NhYmxlXG4gIHZhciBTZXJpYWxEaXNwb3NhYmxlID0gUnguU2VyaWFsRGlzcG9zYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICB9O1xuICBTZXJpYWxEaXNwb3NhYmxlLnByb3RvdHlwZS5nZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG4gIFNlcmlhbERpc3Bvc2FibGUucHJvdG90eXBlLnNldERpc3Bvc2FibGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgc2hvdWxkRGlzcG9zZSA9IHRoaXMuaXNEaXNwb3NlZDtcbiAgICBpZiAoIXNob3VsZERpc3Bvc2UpIHtcbiAgICAgIHZhciBvbGQgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgb2xkICYmIG9sZC5kaXNwb3NlKCk7XG4gICAgc2hvdWxkRGlzcG9zZSAmJiB2YWx1ZSAmJiB2YWx1ZS5kaXNwb3NlKCk7XG4gIH07XG4gIFNlcmlhbERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICB2YXIgb2xkID0gdGhpcy5jdXJyZW50O1xuICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG4gICAgb2xkICYmIG9sZC5kaXNwb3NlKCk7XG4gIH07XG5cbiAgdmFyIEJpbmFyeURpc3Bvc2FibGUgPSBSeC5CaW5hcnlEaXNwb3NhYmxlID0gZnVuY3Rpb24gKGZpcnN0LCBzZWNvbmQpIHtcbiAgICB0aGlzLl9maXJzdCA9IGZpcnN0O1xuICAgIHRoaXMuX3NlY29uZCA9IHNlY29uZDtcbiAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgfTtcblxuICBCaW5hcnlEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgdmFyIG9sZDEgPSB0aGlzLl9maXJzdDtcbiAgICAgIHRoaXMuX2ZpcnN0ID0gbnVsbDtcbiAgICAgIG9sZDEgJiYgb2xkMS5kaXNwb3NlKCk7XG4gICAgICB2YXIgb2xkMiA9IHRoaXMuX3NlY29uZDtcbiAgICAgIHRoaXMuX3NlY29uZCA9IG51bGw7XG4gICAgICBvbGQyICYmIG9sZDIuZGlzcG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgTkFyeURpc3Bvc2FibGUgPSBSeC5OQXJ5RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIChkaXNwb3NhYmxlcykge1xuICAgIHRoaXMuX2Rpc3Bvc2FibGVzID0gZGlzcG9zYWJsZXM7XG4gICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gIH07XG5cbiAgTkFyeURpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5fZGlzcG9zYWJsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXNbaV0uZGlzcG9zZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGlzcG9zYWJsZXMubGVuZ3RoID0gMDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBkaXNwb3NhYmxlIHJlc291cmNlIHRoYXQgb25seSBkaXNwb3NlcyBpdHMgdW5kZXJseWluZyBkaXNwb3NhYmxlIHJlc291cmNlIHdoZW4gYWxsIGRlcGVuZGVudCBkaXNwb3NhYmxlIG9iamVjdHMgaGF2ZSBiZWVuIGRpc3Bvc2VkLlxuICAgKi9cbiAgdmFyIFJlZkNvdW50RGlzcG9zYWJsZSA9IFJ4LlJlZkNvdW50RGlzcG9zYWJsZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBJbm5lckRpc3Bvc2FibGUoZGlzcG9zYWJsZSkge1xuICAgICAgdGhpcy5kaXNwb3NhYmxlID0gZGlzcG9zYWJsZTtcbiAgICAgIHRoaXMuZGlzcG9zYWJsZS5jb3VudCsrO1xuICAgICAgdGhpcy5pc0lubmVyRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBJbm5lckRpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuZGlzcG9zYWJsZS5pc0Rpc3Bvc2VkICYmICF0aGlzLmlzSW5uZXJEaXNwb3NlZCkge1xuICAgICAgICB0aGlzLmlzSW5uZXJEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzcG9zYWJsZS5jb3VudC0tO1xuICAgICAgICBpZiAodGhpcy5kaXNwb3NhYmxlLmNvdW50ID09PSAwICYmIHRoaXMuZGlzcG9zYWJsZS5pc1ByaW1hcnlEaXNwb3NlZCkge1xuICAgICAgICAgIHRoaXMuZGlzcG9zYWJsZS5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmRpc3Bvc2FibGUudW5kZXJseWluZ0Rpc3Bvc2FibGUuZGlzcG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBSZWZDb3VudERpc3Bvc2FibGUgd2l0aCB0aGUgc3BlY2lmaWVkIGRpc3Bvc2FibGUuXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtEaXNwb3NhYmxlfSBkaXNwb3NhYmxlIFVuZGVybHlpbmcgZGlzcG9zYWJsZS5cbiAgICAgICovXG4gICAgZnVuY3Rpb24gUmVmQ291bnREaXNwb3NhYmxlKGRpc3Bvc2FibGUpIHtcbiAgICAgIHRoaXMudW5kZXJseWluZ0Rpc3Bvc2FibGUgPSBkaXNwb3NhYmxlO1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUHJpbWFyeURpc3Bvc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwb3NlcyB0aGUgdW5kZXJseWluZyBkaXNwb3NhYmxlIG9ubHkgd2hlbiBhbGwgZGVwZW5kZW50IGRpc3Bvc2FibGVzIGhhdmUgYmVlbiBkaXNwb3NlZFxuICAgICAqL1xuICAgIFJlZkNvdW50RGlzcG9zYWJsZS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkICYmICF0aGlzLmlzUHJpbWFyeURpc3Bvc2VkKSB7XG4gICAgICAgIHRoaXMuaXNQcmltYXJ5RGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5jb3VudCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy51bmRlcmx5aW5nRGlzcG9zYWJsZS5kaXNwb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGRlcGVuZGVudCBkaXNwb3NhYmxlIHRoYXQgd2hlbiBkaXNwb3NlZCBkZWNyZWFzZXMgdGhlIHJlZmNvdW50IG9uIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUuXG4gICAgICogQHJldHVybnMge0Rpc3Bvc2FibGV9IEEgZGVwZW5kZW50IGRpc3Bvc2FibGUgY29udHJpYnV0aW5nIHRvIHRoZSByZWZlcmVuY2UgY291bnQgdGhhdCBtYW5hZ2VzIHRoZSB1bmRlcmx5aW5nIGRpc3Bvc2FibGUncyBsaWZldGltZS5cbiAgICAgKi9cbiAgICBSZWZDb3VudERpc3Bvc2FibGUucHJvdG90eXBlLmdldERpc3Bvc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0Rpc3Bvc2VkID8gZGlzcG9zYWJsZUVtcHR5IDogbmV3IElubmVyRGlzcG9zYWJsZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlZkNvdW50RGlzcG9zYWJsZTtcbiAgfSkoKTtcblxuICB2YXIgU2NoZWR1bGVkSXRlbSA9IFJ4LmludGVybmFscy5TY2hlZHVsZWRJdGVtID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgc3RhdGUsIGFjdGlvbiwgZHVlVGltZSwgY29tcGFyZXIpIHtcbiAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICB0aGlzLmNvbXBhcmVyID0gY29tcGFyZXIgfHwgZGVmYXVsdFN1YkNvbXBhcmVyO1xuICAgIHRoaXMuZGlzcG9zYWJsZSA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICB9XG5cbiAgU2NoZWR1bGVkSXRlbS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGlzcG9zYWJsZS5zZXREaXNwb3NhYmxlKHRoaXMuaW52b2tlQ29yZSgpKTtcbiAgfTtcblxuICBTY2hlZHVsZWRJdGVtLnByb3RvdHlwZS5jb21wYXJlVG8gPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wYXJlcih0aGlzLmR1ZVRpbWUsIG90aGVyLmR1ZVRpbWUpO1xuICB9O1xuXG4gIFNjaGVkdWxlZEl0ZW0ucHJvdG90eXBlLmlzQ2FuY2VsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3Bvc2FibGUuaXNEaXNwb3NlZDtcbiAgfTtcblxuICBTY2hlZHVsZWRJdGVtLnByb3RvdHlwZS5pbnZva2VDb3JlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwb3NhYmxlRml4dXAodGhpcy5hY3Rpb24odGhpcy5zY2hlZHVsZXIsIHRoaXMuc3RhdGUpKTtcbiAgfTtcblxuICAvKiogUHJvdmlkZXMgYSBzZXQgb2Ygc3RhdGljIHByb3BlcnRpZXMgdG8gYWNjZXNzIGNvbW1vbmx5IHVzZWQgc2NoZWR1bGVycy4gKi9cbiAgdmFyIFNjaGVkdWxlciA9IFJ4LlNjaGVkdWxlciA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBTY2hlZHVsZXIoKSB7IH1cblxuICAgIC8qKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhIHNjaGVkdWxlciAqL1xuICAgIFNjaGVkdWxlci5pc1NjaGVkdWxlciA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gcyBpbnN0YW5jZW9mIFNjaGVkdWxlcjtcbiAgICB9O1xuXG4gICAgdmFyIHNjaGVkdWxlclByb3RvID0gU2NoZWR1bGVyLnByb3RvdHlwZTtcblxuICAgIC8qKlxuICAgKiBTY2hlZHVsZXMgYW4gYWN0aW9uIHRvIGJlIGV4ZWN1dGVkLlxuICAgKiBAcGFyYW0gc3RhdGUgU3RhdGUgcGFzc2VkIHRvIHRoZSBhY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBBY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXG4gICAqIEByZXR1cm5zIHtEaXNwb3NhYmxlfSBUaGUgZGlzcG9zYWJsZSBvYmplY3QgdXNlZCB0byBjYW5jZWwgdGhlIHNjaGVkdWxlZCBhY3Rpb24gKGJlc3QgZWZmb3J0KS5cbiAgICovXG4gICAgc2NoZWR1bGVyUHJvdG8uc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoKTtcbiAgICB9O1xuXG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgYW4gYWN0aW9uIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIGR1ZVRpbWUuXG4gICAqIEBwYXJhbSBzdGF0ZSBTdGF0ZSBwYXNzZWQgdG8gdGhlIGFjdGlvbiB0byBiZSBleGVjdXRlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIEFjdGlvbiB0byBiZSBleGVjdXRlZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGR1ZVRpbWUgUmVsYXRpdmUgdGltZSBhZnRlciB3aGljaCB0byBleGVjdXRlIHRoZSBhY3Rpb24uXG4gICAqIEByZXR1cm5zIHtEaXNwb3NhYmxlfSBUaGUgZGlzcG9zYWJsZSBvYmplY3QgdXNlZCB0byBjYW5jZWwgdGhlIHNjaGVkdWxlZCBhY3Rpb24gKGJlc3QgZWZmb3J0KS5cbiAgICovXG4gICAgc2NoZWR1bGVyUHJvdG8uc2NoZWR1bGVGdXR1cmUgPSBmdW5jdGlvbiAoc3RhdGUsIGR1ZVRpbWUsIGFjdGlvbikge1xuICAgICAgdmFyIGR0ID0gZHVlVGltZTtcbiAgICAgIGR0IGluc3RhbmNlb2YgRGF0ZSAmJiAoZHQgPSBkdCAtIHRoaXMubm93KCkpO1xuICAgICAgZHQgPSBTY2hlZHVsZXIubm9ybWFsaXplKGR0KTtcblxuICAgICAgaWYgKGR0ID09PSAwKSB7IHJldHVybiB0aGlzLnNjaGVkdWxlKHN0YXRlLCBhY3Rpb24pOyB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9zY2hlZHVsZUZ1dHVyZShzdGF0ZSwgZHQsIGFjdGlvbik7XG4gICAgfTtcblxuICAgIHNjaGVkdWxlclByb3RvLl9zY2hlZHVsZUZ1dHVyZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZHVlVGltZSwgYWN0aW9uKSB7XG4gICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICAgIH07XG5cbiAgICAvKiogR2V0cyB0aGUgY3VycmVudCB0aW1lIGFjY29yZGluZyB0byB0aGUgbG9jYWwgbWFjaGluZSdzIHN5c3RlbSBjbG9jay4gKi9cbiAgICBTY2hlZHVsZXIubm93ID0gZGVmYXVsdE5vdztcblxuICAgIC8qKiBHZXRzIHRoZSBjdXJyZW50IHRpbWUgYWNjb3JkaW5nIHRvIHRoZSBsb2NhbCBtYWNoaW5lJ3Mgc3lzdGVtIGNsb2NrLiAqL1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUubm93ID0gZGVmYXVsdE5vdztcblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZXMgdGhlIHNwZWNpZmllZCBUaW1lU3BhbiB2YWx1ZSB0byBhIHBvc2l0aXZlIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lU3BhbiBUaGUgdGltZSBzcGFuIHZhbHVlIHRvIG5vcm1hbGl6ZS5cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgc3BlY2lmaWVkIFRpbWVTcGFuIHZhbHVlIGlmIGl0IGlzIHplcm8gb3IgcG9zaXRpdmU7IG90aGVyd2lzZSwgMFxuICAgICAqL1xuICAgIFNjaGVkdWxlci5ub3JtYWxpemUgPSBmdW5jdGlvbiAodGltZVNwYW4pIHtcbiAgICAgIHRpbWVTcGFuIDwgMCAmJiAodGltZVNwYW4gPSAwKTtcbiAgICAgIHJldHVybiB0aW1lU3BhbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNjaGVkdWxlcjtcbiAgfSgpKTtcblxuICB2YXIgbm9ybWFsaXplVGltZSA9IFNjaGVkdWxlci5ub3JtYWxpemUsIGlzU2NoZWR1bGVyID0gU2NoZWR1bGVyLmlzU2NoZWR1bGVyO1xuXG4gIChmdW5jdGlvbiAoc2NoZWR1bGVyUHJvdG8pIHtcblxuICAgIGZ1bmN0aW9uIGludm9rZVJlY0ltbWVkaWF0ZShzY2hlZHVsZXIsIHBhaXIpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHBhaXJbMF0sIGFjdGlvbiA9IHBhaXJbMV0sIGdyb3VwID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGUoKTtcbiAgICAgIGFjdGlvbihzdGF0ZSwgaW5uZXJBY3Rpb24pO1xuICAgICAgcmV0dXJuIGdyb3VwO1xuXG4gICAgICBmdW5jdGlvbiBpbm5lckFjdGlvbihzdGF0ZTIpIHtcbiAgICAgICAgdmFyIGlzQWRkZWQgPSBmYWxzZSwgaXNEb25lID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGQgPSBzY2hlZHVsZXIuc2NoZWR1bGUoc3RhdGUyLCBzY2hlZHVsZVdvcmspO1xuICAgICAgICBpZiAoIWlzRG9uZSkge1xuICAgICAgICAgIGdyb3VwLmFkZChkKTtcbiAgICAgICAgICBpc0FkZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNjaGVkdWxlV29yayhfLCBzdGF0ZTMpIHtcbiAgICAgICAgICBpZiAoaXNBZGRlZCkge1xuICAgICAgICAgICAgZ3JvdXAucmVtb3ZlKGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb24oc3RhdGUzLCBpbm5lckFjdGlvbik7XG4gICAgICAgICAgcmV0dXJuIGRpc3Bvc2FibGVFbXB0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludm9rZVJlY0RhdGUoc2NoZWR1bGVyLCBwYWlyKSB7XG4gICAgICB2YXIgc3RhdGUgPSBwYWlyWzBdLCBhY3Rpb24gPSBwYWlyWzFdLCBncm91cCA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKCk7XG4gICAgICBhY3Rpb24oc3RhdGUsIGlubmVyQWN0aW9uKTtcbiAgICAgIHJldHVybiBncm91cDtcblxuICAgICAgZnVuY3Rpb24gaW5uZXJBY3Rpb24oc3RhdGUyLCBkdWVUaW1lMSkge1xuICAgICAgICB2YXIgaXNBZGRlZCA9IGZhbHNlLCBpc0RvbmUgPSBmYWxzZTtcblxuICAgICAgICB2YXIgZCA9IHNjaGVkdWxlci5zY2hlZHVsZUZ1dHVyZShzdGF0ZTIsIGR1ZVRpbWUxLCBzY2hlZHVsZVdvcmspO1xuICAgICAgICBpZiAoIWlzRG9uZSkge1xuICAgICAgICAgIGdyb3VwLmFkZChkKTtcbiAgICAgICAgICBpc0FkZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNjaGVkdWxlV29yayhfLCBzdGF0ZTMpIHtcbiAgICAgICAgICBpZiAoaXNBZGRlZCkge1xuICAgICAgICAgICAgZ3JvdXAucmVtb3ZlKGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb24oc3RhdGUzLCBpbm5lckFjdGlvbik7XG4gICAgICAgICAgcmV0dXJuIGRpc3Bvc2FibGVFbXB0eTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjaGVkdWxlcyBhbiBhY3Rpb24gdG8gYmUgZXhlY3V0ZWQgcmVjdXJzaXZlbHkuXG4gICAgICogQHBhcmFtIHtNaXhlZH0gc3RhdGUgU3RhdGUgcGFzc2VkIHRvIHRoZSBhY3Rpb24gdG8gYmUgZXhlY3V0ZWQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gYWN0aW9uIEFjdGlvbiB0byBleGVjdXRlIHJlY3Vyc2l2ZWx5LiBUaGUgbGFzdCBwYXJhbWV0ZXIgcGFzc2VkIHRvIHRoZSBhY3Rpb24gaXMgdXNlZCB0byB0cmlnZ2VyIHJlY3Vyc2l2ZSBzY2hlZHVsaW5nIG9mIHRoZSBhY3Rpb24sIHBhc3NpbmcgaW4gcmVjdXJzaXZlIGludm9jYXRpb24gc3RhdGUuXG4gICAgICogQHJldHVybnMge0Rpc3Bvc2FibGV9IFRoZSBkaXNwb3NhYmxlIG9iamVjdCB1c2VkIHRvIGNhbmNlbCB0aGUgc2NoZWR1bGVkIGFjdGlvbiAoYmVzdCBlZmZvcnQpLlxuICAgICAqL1xuICAgIHNjaGVkdWxlclByb3RvLnNjaGVkdWxlUmVjdXJzaXZlID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlKFtzdGF0ZSwgYWN0aW9uXSwgaW52b2tlUmVjSW1tZWRpYXRlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGFuIGFjdGlvbiB0byBiZSBleGVjdXRlZCByZWN1cnNpdmVseSBhZnRlciBhIHNwZWNpZmllZCByZWxhdGl2ZSBvciBhYnNvbHV0ZSBkdWUgdGltZS5cbiAgICAgKiBAcGFyYW0ge01peGVkfSBzdGF0ZSBTdGF0ZSBwYXNzZWQgdG8gdGhlIGFjdGlvbiB0byBiZSBleGVjdXRlZC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY3Rpb24gQWN0aW9uIHRvIGV4ZWN1dGUgcmVjdXJzaXZlbHkuIFRoZSBsYXN0IHBhcmFtZXRlciBwYXNzZWQgdG8gdGhlIGFjdGlvbiBpcyB1c2VkIHRvIHRyaWdnZXIgcmVjdXJzaXZlIHNjaGVkdWxpbmcgb2YgdGhlIGFjdGlvbiwgcGFzc2luZyBpbiB0aGUgcmVjdXJzaXZlIGR1ZSB0aW1lIGFuZCBpbnZvY2F0aW9uIHN0YXRlLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyIHwgRGF0ZX0gZHVlVGltZSBSZWxhdGl2ZSBvciBhYnNvbHV0ZSB0aW1lIGFmdGVyIHdoaWNoIHRvIGV4ZWN1dGUgdGhlIGFjdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAgICogQHJldHVybnMge0Rpc3Bvc2FibGV9IFRoZSBkaXNwb3NhYmxlIG9iamVjdCB1c2VkIHRvIGNhbmNlbCB0aGUgc2NoZWR1bGVkIGFjdGlvbiAoYmVzdCBlZmZvcnQpLlxuICAgICAqL1xuICAgIHNjaGVkdWxlclByb3RvLnNjaGVkdWxlUmVjdXJzaXZlRnV0dXJlID0gZnVuY3Rpb24gKHN0YXRlLCBkdWVUaW1lLCBhY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlRnV0dXJlKFtzdGF0ZSwgYWN0aW9uXSwgZHVlVGltZSwgaW52b2tlUmVjRGF0ZSk7XG4gICAgfTtcblxuICB9KFNjaGVkdWxlci5wcm90b3R5cGUpKTtcblxuICAoZnVuY3Rpb24gKHNjaGVkdWxlclByb3RvKSB7XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYSBwZXJpb2RpYyBwaWVjZSBvZiB3b3JrIGJ5IGR5bmFtaWNhbGx5IGRpc2NvdmVyaW5nIHRoZSBzY2hlZHVsZXIncyBjYXBhYmlsaXRpZXMuIFRoZSBwZXJpb2RpYyB0YXNrIHdpbGwgYmUgc2NoZWR1bGVkIHVzaW5nIHdpbmRvdy5zZXRJbnRlcnZhbCBmb3IgdGhlIGJhc2UgaW1wbGVtZW50YXRpb24uXG4gICAgICogQHBhcmFtIHtNaXhlZH0gc3RhdGUgSW5pdGlhbCBzdGF0ZSBwYXNzZWQgdG8gdGhlIGFjdGlvbiB1cG9uIHRoZSBmaXJzdCBpdGVyYXRpb24uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBlcmlvZCBQZXJpb2QgZm9yIHJ1bm5pbmcgdGhlIHdvcmsgcGVyaW9kaWNhbGx5LlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBBY3Rpb24gdG8gYmUgZXhlY3V0ZWQsIHBvdGVudGlhbGx5IHVwZGF0aW5nIHRoZSBzdGF0ZS5cbiAgICAgKiBAcmV0dXJucyB7RGlzcG9zYWJsZX0gVGhlIGRpc3Bvc2FibGUgb2JqZWN0IHVzZWQgdG8gY2FuY2VsIHRoZSBzY2hlZHVsZWQgcmVjdXJyaW5nIGFjdGlvbiAoYmVzdCBlZmZvcnQpLlxuICAgICAqL1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGVQZXJpb2RpYyA9IGZ1bmN0aW9uKHN0YXRlLCBwZXJpb2QsIGFjdGlvbikge1xuICAgICAgaWYgKHR5cGVvZiByb290LnNldEludGVydmFsID09PSAndW5kZWZpbmVkJykgeyB0aHJvdyBuZXcgTm90U3VwcG9ydGVkRXJyb3IoKTsgfVxuICAgICAgcGVyaW9kID0gbm9ybWFsaXplVGltZShwZXJpb2QpO1xuICAgICAgdmFyIHMgPSBzdGF0ZSwgaWQgPSByb290LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgcyA9IGFjdGlvbihzKTsgfSwgcGVyaW9kKTtcbiAgICAgIHJldHVybiBkaXNwb3NhYmxlQ3JlYXRlKGZ1bmN0aW9uICgpIHsgcm9vdC5jbGVhckludGVydmFsKGlkKTsgfSk7XG4gICAgfTtcblxuICB9KFNjaGVkdWxlci5wcm90b3R5cGUpKTtcblxuICAvKiogR2V0cyBhIHNjaGVkdWxlciB0aGF0IHNjaGVkdWxlcyB3b3JrIGltbWVkaWF0ZWx5IG9uIHRoZSBjdXJyZW50IHRocmVhZC4gKi9cbiAgIHZhciBJbW1lZGlhdGVTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEltbWVkaWF0ZVNjaGVkdWxlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBJbW1lZGlhdGVTY2hlZHVsZXIoKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBJbW1lZGlhdGVTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHJldHVybiBkaXNwb3NhYmxlRml4dXAoYWN0aW9uKHRoaXMsIHN0YXRlKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBJbW1lZGlhdGVTY2hlZHVsZXI7XG4gIH0oU2NoZWR1bGVyKSk7XG5cbiAgdmFyIGltbWVkaWF0ZVNjaGVkdWxlciA9IFNjaGVkdWxlci5pbW1lZGlhdGUgPSBuZXcgSW1tZWRpYXRlU2NoZWR1bGVyKCk7XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzY2hlZHVsZXIgdGhhdCBzY2hlZHVsZXMgd29yayBhcyBzb29uIGFzIHBvc3NpYmxlIG9uIHRoZSBjdXJyZW50IHRocmVhZC5cbiAgICovXG4gIHZhciBDdXJyZW50VGhyZWFkU2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICB2YXIgcXVldWU7XG5cbiAgICBmdW5jdGlvbiBydW5UcmFtcG9saW5lICgpIHtcbiAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWUuZGVxdWV1ZSgpO1xuICAgICAgICAhaXRlbS5pc0NhbmNlbGxlZCgpICYmIGl0ZW0uaW52b2tlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5oZXJpdHMoQ3VycmVudFRocmVhZFNjaGVkdWxlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDdXJyZW50VGhyZWFkU2NoZWR1bGVyKCkge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgQ3VycmVudFRocmVhZFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgICAgdmFyIHNpID0gbmV3IFNjaGVkdWxlZEl0ZW0odGhpcywgc3RhdGUsIGFjdGlvbiwgdGhpcy5ub3coKSk7XG5cbiAgICAgIGlmICghcXVldWUpIHtcbiAgICAgICAgcXVldWUgPSBuZXcgUHJpb3JpdHlRdWV1ZSg0KTtcbiAgICAgICAgcXVldWUuZW5xdWV1ZShzaSk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHJ1blRyYW1wb2xpbmUpKCk7XG4gICAgICAgIHF1ZXVlID0gbnVsbDtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHsgdGhyb3dlcihyZXN1bHQuZSk7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlLmVucXVldWUoc2kpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNpLmRpc3Bvc2FibGU7XG4gICAgfTtcblxuICAgIEN1cnJlbnRUaHJlYWRTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlUmVxdWlyZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAhcXVldWU7IH07XG5cbiAgICByZXR1cm4gQ3VycmVudFRocmVhZFNjaGVkdWxlcjtcbiAgfShTY2hlZHVsZXIpKTtcblxuICB2YXIgY3VycmVudFRocmVhZFNjaGVkdWxlciA9IFNjaGVkdWxlci5jdXJyZW50VGhyZWFkID0gbmV3IEN1cnJlbnRUaHJlYWRTY2hlZHVsZXIoKTtcblxuICB2YXIgU2NoZWR1bGVQZXJpb2RpY1JlY3Vyc2l2ZSA9IFJ4LmludGVybmFscy5TY2hlZHVsZVBlcmlvZGljUmVjdXJzaXZlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVUaWNrKHNlbGYpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiB0aWNrKGNvbW1hbmQsIHJlY3Vyc2UpIHtcbiAgICAgICAgcmVjdXJzZSgwLCBzZWxmLl9wZXJpb2QpO1xuICAgICAgICB2YXIgc3RhdGUgPSB0cnlDYXRjaChzZWxmLl9hY3Rpb24pKHNlbGYuX3N0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlID09PSBlcnJvck9iaikge1xuICAgICAgICAgIHNlbGYuX2NhbmNlbC5kaXNwb3NlKCk7XG4gICAgICAgICAgdGhyb3dlcihzdGF0ZS5lKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLl9zdGF0ZSA9IHN0YXRlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTY2hlZHVsZVBlcmlvZGljUmVjdXJzaXZlKHNjaGVkdWxlciwgc3RhdGUsIHBlcmlvZCwgYWN0aW9uKSB7XG4gICAgICB0aGlzLl9zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgICAgdGhpcy5fcGVyaW9kID0gcGVyaW9kO1xuICAgICAgdGhpcy5fYWN0aW9uID0gYWN0aW9uO1xuICAgIH1cblxuICAgIFNjaGVkdWxlUGVyaW9kaWNSZWN1cnNpdmUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIHRoaXMuX2NhbmNlbCA9IGQ7XG4gICAgICBkLnNldERpc3Bvc2FibGUodGhpcy5fc2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlRnV0dXJlKDAsIHRoaXMuX3BlcmlvZCwgY3JlYXRlVGljayh0aGlzKSkpO1xuXG4gICAgICByZXR1cm4gZDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNjaGVkdWxlUGVyaW9kaWNSZWN1cnNpdmU7XG4gIH0oKSk7XG5cbiAgdmFyIHNjaGVkdWxlTWV0aG9kLCBjbGVhck1ldGhvZDtcblxuICB2YXIgbG9jYWxUaW1lciA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxvY2FsU2V0VGltZW91dCwgbG9jYWxDbGVhclRpbWVvdXQgPSBub29wO1xuICAgIGlmICghIXJvb3Quc2V0VGltZW91dCkge1xuICAgICAgbG9jYWxTZXRUaW1lb3V0ID0gcm9vdC5zZXRUaW1lb3V0O1xuICAgICAgbG9jYWxDbGVhclRpbWVvdXQgPSByb290LmNsZWFyVGltZW91dDtcbiAgICB9IGVsc2UgaWYgKCEhcm9vdC5XU2NyaXB0KSB7XG4gICAgICBsb2NhbFNldFRpbWVvdXQgPSBmdW5jdGlvbiAoZm4sIHRpbWUpIHtcbiAgICAgICAgcm9vdC5XU2NyaXB0LlNsZWVwKHRpbWUpO1xuICAgICAgICBmbigpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IE5vdFN1cHBvcnRlZEVycm9yKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNldFRpbWVvdXQ6IGxvY2FsU2V0VGltZW91dCxcbiAgICAgIGNsZWFyVGltZW91dDogbG9jYWxDbGVhclRpbWVvdXRcbiAgICB9O1xuICB9KCkpO1xuICB2YXIgbG9jYWxTZXRUaW1lb3V0ID0gbG9jYWxUaW1lci5zZXRUaW1lb3V0LFxuICAgIGxvY2FsQ2xlYXJUaW1lb3V0ID0gbG9jYWxUaW1lci5jbGVhclRpbWVvdXQ7XG5cbiAgKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBuZXh0SGFuZGxlID0gMSwgdGFza3NCeUhhbmRsZSA9IHt9LCBjdXJyZW50bHlSdW5uaW5nID0gZmFsc2U7XG5cbiAgICBjbGVhck1ldGhvZCA9IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJ1blRhc2soaGFuZGxlKSB7XG4gICAgICBpZiAoY3VycmVudGx5UnVubmluZykge1xuICAgICAgICBsb2NhbFNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBydW5UYXNrKGhhbmRsZSk7IH0sIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgY3VycmVudGx5UnVubmluZyA9IHRydWU7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRhc2spKCk7XG4gICAgICAgICAgY2xlYXJNZXRob2QoaGFuZGxlKTtcbiAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHsgdGhyb3dlcihyZXN1bHQuZSk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciByZU5hdGl2ZSA9IG5ldyBSZWdFeHAoJ14nICtcbiAgICAgIFN0cmluZyh0b1N0cmluZylcbiAgICAgICAgLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJylcbiAgICAgICAgLnJlcGxhY2UoL3RvU3RyaW5nfCBmb3IgW15cXF1dKy9nLCAnLio/JykgKyAnJCdcbiAgICApO1xuXG4gICAgdmFyIHNldEltbWVkaWF0ZSA9IHR5cGVvZiAoc2V0SW1tZWRpYXRlID0gZnJlZUdsb2JhbCAmJiBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwuc2V0SW1tZWRpYXRlKSA9PSAnZnVuY3Rpb24nICYmXG4gICAgICAhcmVOYXRpdmUudGVzdChzZXRJbW1lZGlhdGUpICYmIHNldEltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlU3VwcG9ydGVkICgpIHtcbiAgICAgIC8vIEVuc3VyZSBub3QgaW4gYSB3b3JrZXJcbiAgICAgIGlmICghcm9vdC5wb3N0TWVzc2FnZSB8fCByb290LmltcG9ydFNjcmlwdHMpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICB2YXIgaXNBc3luYyA9IGZhbHNlLCBvbGRIYW5kbGVyID0gcm9vdC5vbm1lc3NhZ2U7XG4gICAgICAvLyBUZXN0IGZvciBhc3luY1xuICAgICAgcm9vdC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7IGlzQXN5bmMgPSB0cnVlOyB9O1xuICAgICAgcm9vdC5wb3N0TWVzc2FnZSgnJywgJyonKTtcbiAgICAgIHJvb3Qub25tZXNzYWdlID0gb2xkSGFuZGxlcjtcblxuICAgICAgcmV0dXJuIGlzQXN5bmM7XG4gICAgfVxuXG4gICAgLy8gVXNlIGluIG9yZGVyLCBzZXRJbW1lZGlhdGUsIG5leHRUaWNrLCBwb3N0TWVzc2FnZSwgTWVzc2FnZUNoYW5uZWwsIHNjcmlwdCByZWFkeXN0YXRlY2hhbmdlZCwgc2V0VGltZW91dFxuICAgIGlmIChpc0Z1bmN0aW9uKHNldEltbWVkaWF0ZSkpIHtcbiAgICAgIHNjaGVkdWxlTWV0aG9kID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgaWQgPSBuZXh0SGFuZGxlKys7XG4gICAgICAgIHRhc2tzQnlIYW5kbGVbaWRdID0gYWN0aW9uO1xuICAgICAgICBzZXRJbW1lZGlhdGUoZnVuY3Rpb24gKCkgeyBydW5UYXNrKGlkKTsgfSk7XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAgIHNjaGVkdWxlTWV0aG9kID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgaWQgPSBuZXh0SGFuZGxlKys7XG4gICAgICAgIHRhc2tzQnlIYW5kbGVbaWRdID0gYWN0aW9uO1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuVGFzayhpZCk7IH0pO1xuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChwb3N0TWVzc2FnZVN1cHBvcnRlZCgpKSB7XG4gICAgICB2YXIgTVNHX1BSRUZJWCA9ICdtcy5yeC5zY2hlZHVsZScgKyBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICB2YXIgb25HbG9iYWxQb3N0TWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBPbmx5IGlmIHdlJ3JlIGEgbWF0Y2ggdG8gYXZvaWQgYW55IG90aGVyIGdsb2JhbCBldmVudHNcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudC5kYXRhID09PSAnc3RyaW5nJyAmJiBldmVudC5kYXRhLnN1YnN0cmluZygwLCBNU0dfUFJFRklYLmxlbmd0aCkgPT09IE1TR19QUkVGSVgpIHtcbiAgICAgICAgICBydW5UYXNrKGV2ZW50LmRhdGEuc3Vic3RyaW5nKE1TR19QUkVGSVgubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uR2xvYmFsUG9zdE1lc3NhZ2UsIGZhbHNlKTtcblxuICAgICAgc2NoZWR1bGVNZXRob2QgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpZCA9IG5leHRIYW5kbGUrKztcbiAgICAgICAgdGFza3NCeUhhbmRsZVtpZF0gPSBhY3Rpb247XG4gICAgICAgIHJvb3QucG9zdE1lc3NhZ2UoTVNHX1BSRUZJWCArIGN1cnJlbnRJZCwgJyonKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCEhcm9vdC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgcm9vdC5NZXNzYWdlQ2hhbm5lbCgpO1xuXG4gICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7IHJ1blRhc2soZS5kYXRhKTsgfTtcblxuICAgICAgc2NoZWR1bGVNZXRob2QgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpZCA9IG5leHRIYW5kbGUrKztcbiAgICAgICAgdGFza3NCeUhhbmRsZVtpZF0gPSBhY3Rpb247XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaWQpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoJ2RvY3VtZW50JyBpbiByb290ICYmICdvbnJlYWR5c3RhdGVjaGFuZ2UnIGluIHJvb3QuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpIHtcblxuICAgICAgc2NoZWR1bGVNZXRob2QgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBzY3JpcHRFbGVtZW50ID0gcm9vdC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgdmFyIGlkID0gbmV4dEhhbmRsZSsrO1xuICAgICAgICB0YXNrc0J5SGFuZGxlW2lkXSA9IGFjdGlvbjtcblxuICAgICAgICBzY3JpcHRFbGVtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBydW5UYXNrKGlkKTtcbiAgICAgICAgICBzY3JpcHRFbGVtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgc2NyaXB0RWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdEVsZW1lbnQpO1xuICAgICAgICAgIHNjcmlwdEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9O1xuICAgICAgICByb290LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZU1ldGhvZCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGlkID0gbmV4dEhhbmRsZSsrO1xuICAgICAgICB0YXNrc0J5SGFuZGxlW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgbG9jYWxTZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBydW5UYXNrKGlkKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfTtcbiAgICB9XG4gIH0oKSk7XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzY2hlZHVsZXIgdGhhdCBzY2hlZHVsZXMgd29yayB2aWEgYSB0aW1lZCBjYWxsYmFjayBiYXNlZCB1cG9uIHBsYXRmb3JtLlxuICAgKi9cbiAgIHZhciBEZWZhdWx0U2NoZWR1bGVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICAgaW5oZXJpdHMoRGVmYXVsdFNjaGVkdWxlciwgX19zdXBlcl9fKTtcbiAgICAgZnVuY3Rpb24gRGVmYXVsdFNjaGVkdWxlcigpIHtcbiAgICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICAgfVxuXG4gICAgIGZ1bmN0aW9uIHNjaGVkdWxlQWN0aW9uKGRpc3Bvc2FibGUsIGFjdGlvbiwgc2NoZWR1bGVyLCBzdGF0ZSkge1xuICAgICAgIHJldHVybiBmdW5jdGlvbiBzY2hlZHVsZSgpIHtcbiAgICAgICAgICFkaXNwb3NhYmxlLmlzRGlzcG9zZWQgJiYgZGlzcG9zYWJsZS5zZXREaXNwb3NhYmxlKERpc3Bvc2FibGUuX2ZpeHVwKGFjdGlvbihzY2hlZHVsZXIsIHN0YXRlKSkpO1xuICAgICAgIH07XG4gICAgIH1cblxuICAgICBmdW5jdGlvbiBDbGVhckRpc3Bvc2FibGUobWV0aG9kLCBpZCkge1xuICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgdGhpcy5fbWV0aG9kID0gbWV0aG9kO1xuICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICB9XG5cbiAgICAgQ2xlYXJEaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICAgdGhpcy5fbWV0aG9kLmNhbGwobnVsbCwgdGhpcy5faWQpO1xuICAgICAgIH1cbiAgICAgfTtcblxuICAgIERlZmF1bHRTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIHZhciBkaXNwb3NhYmxlID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCksXG4gICAgICAgICAgaWQgPSBzY2hlZHVsZU1ldGhvZChzY2hlZHVsZUFjdGlvbihkaXNwb3NhYmxlLCBhY3Rpb24sIHRoaXMsIHN0YXRlKSk7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoZGlzcG9zYWJsZSwgbmV3IENsZWFyRGlzcG9zYWJsZShjbGVhck1ldGhvZCwgaWQpKTtcbiAgICB9O1xuXG4gICAgRGVmYXVsdFNjaGVkdWxlci5wcm90b3R5cGUuX3NjaGVkdWxlRnV0dXJlID0gZnVuY3Rpb24gKHN0YXRlLCBkdWVUaW1lLCBhY3Rpb24pIHtcbiAgICAgIGlmIChkdWVUaW1lID09PSAwKSB7IHJldHVybiB0aGlzLnNjaGVkdWxlKHN0YXRlLCBhY3Rpb24pOyB9XG4gICAgICB2YXIgZGlzcG9zYWJsZSA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpLFxuICAgICAgICAgIGlkID0gbG9jYWxTZXRUaW1lb3V0KHNjaGVkdWxlQWN0aW9uKGRpc3Bvc2FibGUsIGFjdGlvbiwgdGhpcywgc3RhdGUpLCBkdWVUaW1lKTtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShkaXNwb3NhYmxlLCBuZXcgQ2xlYXJEaXNwb3NhYmxlKGxvY2FsQ2xlYXJUaW1lb3V0LCBpZCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGVmYXVsdFNjaGVkdWxlcjtcbiAgfShTY2hlZHVsZXIpKTtcblxuICB2YXIgZGVmYXVsdFNjaGVkdWxlciA9IFNjaGVkdWxlclsnZGVmYXVsdCddID0gU2NoZWR1bGVyLmFzeW5jID0gbmV3IERlZmF1bHRTY2hlZHVsZXIoKTtcblxuICBmdW5jdGlvbiBJbmRleGVkSXRlbShpZCwgdmFsdWUpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgSW5kZXhlZEl0ZW0ucHJvdG90eXBlLmNvbXBhcmVUbyA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHZhciBjID0gdGhpcy52YWx1ZS5jb21wYXJlVG8ob3RoZXIudmFsdWUpO1xuICAgIGMgPT09IDAgJiYgKGMgPSB0aGlzLmlkIC0gb3RoZXIuaWQpO1xuICAgIHJldHVybiBjO1xuICB9O1xuXG4gIHZhciBQcmlvcml0eVF1ZXVlID0gUnguaW50ZXJuYWxzLlByaW9yaXR5UXVldWUgPSBmdW5jdGlvbiAoY2FwYWNpdHkpIHtcbiAgICB0aGlzLml0ZW1zID0gbmV3IEFycmF5KGNhcGFjaXR5KTtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgdmFyIHByaW9yaXR5UHJvdG8gPSBQcmlvcml0eVF1ZXVlLnByb3RvdHlwZTtcbiAgcHJpb3JpdHlQcm90by5pc0hpZ2hlclByaW9yaXR5ID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbbGVmdF0uY29tcGFyZVRvKHRoaXMuaXRlbXNbcmlnaHRdKSA8IDA7XG4gIH07XG5cbiAgcHJpb3JpdHlQcm90by5wZXJjb2xhdGUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGggfHwgaW5kZXggPCAwKSB7IHJldHVybjsgfVxuICAgIHZhciBwYXJlbnQgPSBpbmRleCAtIDEgPj4gMTtcbiAgICBpZiAocGFyZW50IDwgMCB8fCBwYXJlbnQgPT09IGluZGV4KSB7IHJldHVybjsgfVxuICAgIGlmICh0aGlzLmlzSGlnaGVyUHJpb3JpdHkoaW5kZXgsIHBhcmVudCkpIHtcbiAgICAgIHZhciB0ZW1wID0gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IHRoaXMuaXRlbXNbcGFyZW50XTtcbiAgICAgIHRoaXMuaXRlbXNbcGFyZW50XSA9IHRlbXA7XG4gICAgICB0aGlzLnBlcmNvbGF0ZShwYXJlbnQpO1xuICAgIH1cbiAgfTtcblxuICBwcmlvcml0eVByb3RvLmhlYXBpZnkgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAraW5kZXggfHwgKGluZGV4ID0gMCk7XG4gICAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoIHx8IGluZGV4IDwgMCkgeyByZXR1cm47IH1cbiAgICB2YXIgbGVmdCA9IDIgKiBpbmRleCArIDEsXG4gICAgICAgIHJpZ2h0ID0gMiAqIGluZGV4ICsgMixcbiAgICAgICAgZmlyc3QgPSBpbmRleDtcbiAgICBpZiAobGVmdCA8IHRoaXMubGVuZ3RoICYmIHRoaXMuaXNIaWdoZXJQcmlvcml0eShsZWZ0LCBmaXJzdCkpIHtcbiAgICAgIGZpcnN0ID0gbGVmdDtcbiAgICB9XG4gICAgaWYgKHJpZ2h0IDwgdGhpcy5sZW5ndGggJiYgdGhpcy5pc0hpZ2hlclByaW9yaXR5KHJpZ2h0LCBmaXJzdCkpIHtcbiAgICAgIGZpcnN0ID0gcmlnaHQ7XG4gICAgfVxuICAgIGlmIChmaXJzdCAhPT0gaW5kZXgpIHtcbiAgICAgIHZhciB0ZW1wID0gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IHRoaXMuaXRlbXNbZmlyc3RdO1xuICAgICAgdGhpcy5pdGVtc1tmaXJzdF0gPSB0ZW1wO1xuICAgICAgdGhpcy5oZWFwaWZ5KGZpcnN0KTtcbiAgICB9XG4gIH07XG5cbiAgcHJpb3JpdHlQcm90by5wZWVrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5pdGVtc1swXS52YWx1ZTsgfTtcblxuICBwcmlvcml0eVByb3RvLnJlbW92ZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgdGhpcy5pdGVtc1tpbmRleF0gPSB0aGlzLml0ZW1zWy0tdGhpcy5sZW5ndGhdO1xuICAgIHRoaXMuaXRlbXNbdGhpcy5sZW5ndGhdID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGVhcGlmeSgpO1xuICB9O1xuXG4gIHByaW9yaXR5UHJvdG8uZGVxdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5wZWVrKCk7XG4gICAgdGhpcy5yZW1vdmVBdCgwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHByaW9yaXR5UHJvdG8uZW5xdWV1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5sZW5ndGgrKztcbiAgICB0aGlzLml0ZW1zW2luZGV4XSA9IG5ldyBJbmRleGVkSXRlbShQcmlvcml0eVF1ZXVlLmNvdW50KyssIGl0ZW0pO1xuICAgIHRoaXMucGVyY29sYXRlKGluZGV4KTtcbiAgfTtcblxuICBwcmlvcml0eVByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5pdGVtc1tpXS52YWx1ZSA9PT0gaXRlbSkge1xuICAgICAgICB0aGlzLnJlbW92ZUF0KGkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBQcmlvcml0eVF1ZXVlLmNvdW50ID0gMDtcblxuICAvKipcbiAgICogIFJlcHJlc2VudHMgYSBub3RpZmljYXRpb24gdG8gYW4gb2JzZXJ2ZXIuXG4gICAqL1xuICB2YXIgTm90aWZpY2F0aW9uID0gUnguTm90aWZpY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RpZmljYXRpb24oKSB7XG5cbiAgICB9XG5cbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLl9hY2NlcHQgPSBmdW5jdGlvbiAob25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCkge1xuICAgICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoKTtcbiAgICB9O1xuXG4gICAgTm90aWZpY2F0aW9uLnByb3RvdHlwZS5fYWNjZXB0T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKSB7XG4gICAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcigpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VzIHRoZSBkZWxlZ2F0ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBub3RpZmljYXRpb24gb3IgdGhlIG9ic2VydmVyJ3MgbWV0aG9kIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG5vdGlmaWNhdGlvbiBhbmQgcmV0dXJucyB0aGUgcHJvZHVjZWQgcmVzdWx0LlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIE5vdGlmaWNhdGlvblxuICAgICAqIEBwYXJhbSB7QW55fSBvYnNlcnZlck9yT25OZXh0IERlbGVnYXRlIHRvIGludm9rZSBmb3IgYW4gT25OZXh0IG5vdGlmaWNhdGlvbiBvciBPYnNlcnZlciB0byBpbnZva2UgdGhlIG5vdGlmaWNhdGlvbiBvbi4uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25FcnJvciBEZWxlZ2F0ZSB0byBpbnZva2UgZm9yIGFuIE9uRXJyb3Igbm90aWZpY2F0aW9uLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVkIERlbGVnYXRlIHRvIGludm9rZSBmb3IgYW4gT25Db21wbGV0ZWQgbm90aWZpY2F0aW9uLlxuICAgICAqIEByZXR1cm5zIHtBbnl9IFJlc3VsdCBwcm9kdWNlZCBieSB0aGUgb2JzZXJ2YXRpb24uXG4gICAgICovXG4gICAgTm90aWZpY2F0aW9uLnByb3RvdHlwZS5hY2NlcHQgPSBmdW5jdGlvbiAob2JzZXJ2ZXJPck9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlck9yT25OZXh0ICYmIHR5cGVvZiBvYnNlcnZlck9yT25OZXh0ID09PSAnb2JqZWN0JyA/XG4gICAgICAgIHRoaXMuX2FjY2VwdE9ic2VydmFibGUob2JzZXJ2ZXJPck9uTmV4dCkgOlxuICAgICAgICB0aGlzLl9hY2NlcHQob2JzZXJ2ZXJPck9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2Ugd2l0aCBhIHNpbmdsZSBub3RpZmljYXRpb24uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgTm90aWZpY2F0aW9uc1xuICAgICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBTY2hlZHVsZXIgdG8gc2VuZCBvdXQgdGhlIG5vdGlmaWNhdGlvbiBjYWxscyBvbi5cbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBzdXJmYWNlcyB0aGUgYmVoYXZpb3Igb2YgdGhlIG5vdGlmaWNhdGlvbiB1cG9uIHN1YnNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLnRvT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGltbWVkaWF0ZVNjaGVkdWxlcik7XG4gICAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShzZWxmLCBmdW5jdGlvbiAoXywgbm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgbm90aWZpY2F0aW9uLl9hY2NlcHRPYnNlcnZhYmxlKG8pO1xuICAgICAgICAgIG5vdGlmaWNhdGlvbi5raW5kID09PSAnTicgJiYgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gTm90aWZpY2F0aW9uO1xuICB9KSgpO1xuXG4gIHZhciBPbk5leHROb3RpZmljYXRpb24gPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE9uTmV4dE5vdGlmaWNhdGlvbiwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBPbk5leHROb3RpZmljYXRpb24odmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMua2luZCA9ICdOJztcbiAgICB9XG5cbiAgICBPbk5leHROb3RpZmljYXRpb24ucHJvdG90eXBlLl9hY2NlcHQgPSBmdW5jdGlvbiAob25OZXh0KSB7XG4gICAgICByZXR1cm4gb25OZXh0KHRoaXMudmFsdWUpO1xuICAgIH07XG5cbiAgICBPbk5leHROb3RpZmljYXRpb24ucHJvdG90eXBlLl9hY2NlcHRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBvLm9uTmV4dCh0aGlzLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgT25OZXh0Tm90aWZpY2F0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAnT25OZXh0KCcgKyB0aGlzLnZhbHVlICsgJyknO1xuICAgIH07XG5cbiAgICByZXR1cm4gT25OZXh0Tm90aWZpY2F0aW9uO1xuICB9KE5vdGlmaWNhdGlvbikpO1xuXG4gIHZhciBPbkVycm9yTm90aWZpY2F0aW9uID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhPbkVycm9yTm90aWZpY2F0aW9uLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIE9uRXJyb3JOb3RpZmljYXRpb24oZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIHRoaXMua2luZCA9ICdFJztcbiAgICB9XG5cbiAgICBPbkVycm9yTm90aWZpY2F0aW9uLnByb3RvdHlwZS5fYWNjZXB0ID0gZnVuY3Rpb24gKG9uTmV4dCwgb25FcnJvcikge1xuICAgICAgcmV0dXJuIG9uRXJyb3IodGhpcy5lcnJvcik7XG4gICAgfTtcblxuICAgIE9uRXJyb3JOb3RpZmljYXRpb24ucHJvdG90eXBlLl9hY2NlcHRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBvLm9uRXJyb3IodGhpcy5lcnJvcik7XG4gICAgfTtcblxuICAgIE9uRXJyb3JOb3RpZmljYXRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdPbkVycm9yKCcgKyB0aGlzLmVycm9yICsgJyknO1xuICAgIH07XG5cbiAgICByZXR1cm4gT25FcnJvck5vdGlmaWNhdGlvbjtcbiAgfShOb3RpZmljYXRpb24pKTtcblxuICB2YXIgT25Db21wbGV0ZWROb3RpZmljYXRpb24gPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE9uQ29tcGxldGVkTm90aWZpY2F0aW9uLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIE9uQ29tcGxldGVkTm90aWZpY2F0aW9uKCkge1xuICAgICAgdGhpcy5raW5kID0gJ0MnO1xuICAgIH1cblxuICAgIE9uQ29tcGxldGVkTm90aWZpY2F0aW9uLnByb3RvdHlwZS5fYWNjZXB0ID0gZnVuY3Rpb24gKG9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpIHtcbiAgICAgIHJldHVybiBvbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICBPbkNvbXBsZXRlZE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuX2FjY2VwdE9ic2VydmFibGUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIG8ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgT25Db21wbGV0ZWROb3RpZmljYXRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdPbkNvbXBsZXRlZCgpJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9uQ29tcGxldGVkTm90aWZpY2F0aW9uO1xuICB9KE5vdGlmaWNhdGlvbikpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgYW4gT25OZXh0IG5vdGlmaWNhdGlvbiB0byBhbiBvYnNlcnZlci5cbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlIFRoZSB2YWx1ZSBjb250YWluZWQgaW4gdGhlIG5vdGlmaWNhdGlvbi5cbiAgICogQHJldHVybnMge05vdGlmaWNhdGlvbn0gVGhlIE9uTmV4dCBub3RpZmljYXRpb24gY29udGFpbmluZyB0aGUgdmFsdWUuXG4gICAqL1xuICB2YXIgbm90aWZpY2F0aW9uQ3JlYXRlT25OZXh0ID0gTm90aWZpY2F0aW9uLmNyZWF0ZU9uTmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgT25OZXh0Tm90aWZpY2F0aW9uKHZhbHVlKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIGFuIE9uRXJyb3Igbm90aWZpY2F0aW9uIHRvIGFuIG9ic2VydmVyLlxuICAgKiBAcGFyYW0ge0FueX0gZXJyb3IgVGhlIGV4Y2VwdGlvbiBjb250YWluZWQgaW4gdGhlIG5vdGlmaWNhdGlvbi5cbiAgICogQHJldHVybnMge05vdGlmaWNhdGlvbn0gVGhlIE9uRXJyb3Igbm90aWZpY2F0aW9uIGNvbnRhaW5pbmcgdGhlIGV4Y2VwdGlvbi5cbiAgICovXG4gIHZhciBub3RpZmljYXRpb25DcmVhdGVPbkVycm9yID0gTm90aWZpY2F0aW9uLmNyZWF0ZU9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IE9uRXJyb3JOb3RpZmljYXRpb24oZXJyb3IpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgYW4gT25Db21wbGV0ZWQgbm90aWZpY2F0aW9uIHRvIGFuIG9ic2VydmVyLlxuICAgKiBAcmV0dXJucyB7Tm90aWZpY2F0aW9ufSBUaGUgT25Db21wbGV0ZWQgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgdmFyIG5vdGlmaWNhdGlvbkNyZWF0ZU9uQ29tcGxldGVkID0gTm90aWZpY2F0aW9uLmNyZWF0ZU9uQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgT25Db21wbGV0ZWROb3RpZmljYXRpb24oKTtcbiAgfTtcblxuICAvKipcbiAgICogU3VwcG9ydHMgcHVzaC1zdHlsZSBpdGVyYXRpb24gb3ZlciBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKi9cbiAgdmFyIE9ic2VydmVyID0gUnguT2JzZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7IH07XG5cbiAgLyoqXG4gICAqICBDcmVhdGVzIGFuIG9ic2VydmVyIGZyb20gdGhlIHNwZWNpZmllZCBPbk5leHQsIGFsb25nIHdpdGggb3B0aW9uYWwgT25FcnJvciwgYW5kIE9uQ29tcGxldGVkIGFjdGlvbnMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbk5leHRdIE9ic2VydmVyJ3MgT25OZXh0IGFjdGlvbiBpbXBsZW1lbnRhdGlvbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRXJyb3JdIE9ic2VydmVyJ3MgT25FcnJvciBhY3Rpb24gaW1wbGVtZW50YXRpb24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkNvbXBsZXRlZF0gT2JzZXJ2ZXIncyBPbkNvbXBsZXRlZCBhY3Rpb24gaW1wbGVtZW50YXRpb24uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZlcn0gVGhlIG9ic2VydmVyIG9iamVjdCBpbXBsZW1lbnRlZCB1c2luZyB0aGUgZ2l2ZW4gYWN0aW9ucy5cbiAgICovXG4gIHZhciBvYnNlcnZlckNyZWF0ZSA9IE9ic2VydmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChvbk5leHQsIG9uRXJyb3IsIG9uQ29tcGxldGVkKSB7XG4gICAgb25OZXh0IHx8IChvbk5leHQgPSBub29wKTtcbiAgICBvbkVycm9yIHx8IChvbkVycm9yID0gZGVmYXVsdEVycm9yKTtcbiAgICBvbkNvbXBsZXRlZCB8fCAob25Db21wbGV0ZWQgPSBub29wKTtcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmVyKG9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBYnN0cmFjdCBiYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIE9ic2VydmVyIGNsYXNzLlxuICAgKiBUaGlzIGJhc2UgY2xhc3MgZW5mb3JjZXMgdGhlIGdyYW1tYXIgb2Ygb2JzZXJ2ZXJzIHdoZXJlIE9uRXJyb3IgYW5kIE9uQ29tcGxldGVkIGFyZSB0ZXJtaW5hbCBtZXNzYWdlcy5cbiAgICovXG4gIHZhciBBYnN0cmFjdE9ic2VydmVyID0gUnguaW50ZXJuYWxzLkFic3RyYWN0T2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEFic3RyYWN0T2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IG9ic2VydmVyIGluIGEgbm9uLXN0b3BwZWQgc3RhdGUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQWJzdHJhY3RPYnNlcnZlcigpIHtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gTXVzdCBiZSBpbXBsZW1lbnRlZCBieSBvdGhlciBvYnNlcnZlcnNcbiAgICBBYnN0cmFjdE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gbm90SW1wbGVtZW50ZWQ7XG4gICAgQWJzdHJhY3RPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBub3RJbXBsZW1lbnRlZDtcbiAgICBBYnN0cmFjdE9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBub3RJbXBsZW1lbnRlZDtcblxuICAgIC8qKlxuICAgICAqIE5vdGlmaWVzIHRoZSBvYnNlcnZlciBvZiBhIG5ldyBlbGVtZW50IGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgKiBAcGFyYW0ge0FueX0gdmFsdWUgTmV4dCBlbGVtZW50IGluIHRoZSBzZXF1ZW5jZS5cbiAgICAgKi9cbiAgICBBYnN0cmFjdE9ic2VydmVyLnByb3RvdHlwZS5vbk5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICF0aGlzLmlzU3RvcHBlZCAmJiB0aGlzLm5leHQodmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZmllcyB0aGUgb2JzZXJ2ZXIgdGhhdCBhbiBleGNlcHRpb24gaGFzIG9jY3VycmVkLlxuICAgICAqIEBwYXJhbSB7QW55fSBlcnJvciBUaGUgZXJyb3IgdGhhdCBoYXMgb2NjdXJyZWQuXG4gICAgICovXG4gICAgQWJzdHJhY3RPYnNlcnZlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZmllcyB0aGUgb2JzZXJ2ZXIgb2YgdGhlIGVuZCBvZiB0aGUgc2VxdWVuY2UuXG4gICAgICovXG4gICAgQWJzdHJhY3RPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGlzcG9zZXMgdGhlIG9ic2VydmVyLCBjYXVzaW5nIGl0IHRvIHRyYW5zaXRpb24gdG8gdGhlIHN0b3BwZWQgc3RhdGUuXG4gICAgICovXG4gICAgQWJzdHJhY3RPYnNlcnZlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5pc1N0b3BwZWQgPSB0cnVlOyB9O1xuXG4gICAgQWJzdHJhY3RPYnNlcnZlci5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFic3RyYWN0T2JzZXJ2ZXI7XG4gIH0oT2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogQ2xhc3MgdG8gY3JlYXRlIGFuIE9ic2VydmVyIGluc3RhbmNlIGZyb20gZGVsZWdhdGUtYmFzZWQgaW1wbGVtZW50YXRpb25zIG9mIHRoZSBvbiogbWV0aG9kcy5cbiAgICovXG4gIHZhciBBbm9ueW1vdXNPYnNlcnZlciA9IFJ4LkFub255bW91c09ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhBbm9ueW1vdXNPYnNlcnZlciwgX19zdXBlcl9fKTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gb2JzZXJ2ZXIgZnJvbSB0aGUgc3BlY2lmaWVkIE9uTmV4dCwgT25FcnJvciwgYW5kIE9uQ29tcGxldGVkIGFjdGlvbnMuXG4gICAgICogQHBhcmFtIHtBbnl9IG9uTmV4dCBPYnNlcnZlcidzIE9uTmV4dCBhY3Rpb24gaW1wbGVtZW50YXRpb24uXG4gICAgICogQHBhcmFtIHtBbnl9IG9uRXJyb3IgT2JzZXJ2ZXIncyBPbkVycm9yIGFjdGlvbiBpbXBsZW1lbnRhdGlvbi5cbiAgICAgKiBAcGFyYW0ge0FueX0gb25Db21wbGV0ZWQgT2JzZXJ2ZXIncyBPbkNvbXBsZXRlZCBhY3Rpb24gaW1wbGVtZW50YXRpb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gQW5vbnltb3VzT2JzZXJ2ZXIob25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCkge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLl9vbk5leHQgPSBvbk5leHQ7XG4gICAgICB0aGlzLl9vbkVycm9yID0gb25FcnJvcjtcbiAgICAgIHRoaXMuX29uQ29tcGxldGVkID0gb25Db21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgdGhlIG9uTmV4dCBhY3Rpb24uXG4gICAgICogQHBhcmFtIHtBbnl9IHZhbHVlIE5leHQgZWxlbWVudCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICovXG4gICAgQW5vbnltb3VzT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX29uTmV4dCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBvbkVycm9yIGFjdGlvbi5cbiAgICAgKiBAcGFyYW0ge0FueX0gZXJyb3IgVGhlIGVycm9yIHRoYXQgaGFzIG9jY3VycmVkLlxuICAgICAqL1xuICAgIEFub255bW91c09ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgdGhpcy5fb25FcnJvcihlcnJvcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBDYWxscyB0aGUgb25Db21wbGV0ZWQgYWN0aW9uLlxuICAgICAqL1xuICAgIEFub255bW91c09ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQW5vbnltb3VzT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIHZhciBvYnNlcnZhYmxlUHJvdG87XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSBwdXNoLXN0eWxlIGNvbGxlY3Rpb24uXG4gICAqL1xuICB2YXIgT2JzZXJ2YWJsZSA9IFJ4Lk9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gbWFrZVN1YnNjcmliZShzZWxmLCBzdWJzY3JpYmUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobykge1xuICAgICAgICB2YXIgb2xkT25FcnJvciA9IG8ub25FcnJvcjtcbiAgICAgICAgby5vbkVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBtYWtlU3RhY2tUcmFjZUxvbmcoZSwgc2VsZik7XG4gICAgICAgICAgb2xkT25FcnJvci5jYWxsKG8sIGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBzdWJzY3JpYmUuY2FsbChzZWxmLCBvKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZSgpIHtcbiAgICAgIGlmIChSeC5jb25maWcubG9uZ1N0YWNrU3VwcG9ydCAmJiBoYXNTdGFja3MpIHtcbiAgICAgICAgdmFyIG9sZFN1YnNjcmliZSA9IHRoaXMuX3N1YnNjcmliZTtcbiAgICAgICAgdmFyIGUgPSB0cnlDYXRjaCh0aHJvd2VyKShuZXcgRXJyb3IoKSkuZTtcbiAgICAgICAgdGhpcy5zdGFjayA9IGUuc3RhY2suc3Vic3RyaW5nKGUuc3RhY2suaW5kZXhPZignXFxuJykgKyAxKTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlID0gbWFrZVN1YnNjcmliZSh0aGlzLCBvbGRTdWJzY3JpYmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG9ic2VydmFibGVQcm90byA9IE9ic2VydmFibGUucHJvdG90eXBlO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBPYnNlcnZhYmxlXG4gICAgKiBAcGFyYW0ge0FueX0gQW4gb2JqZWN0IHRvIGRldGVybWluZSB3aGV0aGVyIGl0IGlzIGFuIE9ic2VydmFibGVcbiAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGFuIE9ic2VydmFibGUsIGVsc2UgZmFsc2UuXG4gICAgKi9cbiAgICBPYnNlcnZhYmxlLmlzT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gbyAmJiBpc0Z1bmN0aW9uKG8uc3Vic2NyaWJlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIFN1YnNjcmliZXMgYW4gbyB0byB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICAgKiAgQHBhcmFtIHtNaXhlZH0gW29Pck9uTmV4dF0gVGhlIG9iamVjdCB0aGF0IGlzIHRvIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBvciBhbiBhY3Rpb24gdG8gaW52b2tlIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAgICogIEBwYXJhbSB7RnVuY3Rpb259IFtvbkVycm9yXSBBY3Rpb24gdG8gaW52b2tlIHVwb24gZXhjZXB0aW9uYWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAgICogIEBwYXJhbSB7RnVuY3Rpb259IFtvbkNvbXBsZXRlZF0gQWN0aW9uIHRvIGludm9rZSB1cG9uIGdyYWNlZnVsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgICAqICBAcmV0dXJucyB7RGlwb3NhYmxlfSBBIGRpc3Bvc2FibGUgaGFuZGxpbmcgdGhlIHN1YnNjcmlwdGlvbnMgYW5kIHVuc3Vic2NyaXB0aW9ucy5cbiAgICAgKi9cbiAgICBvYnNlcnZhYmxlUHJvdG8uc3Vic2NyaWJlID0gb2JzZXJ2YWJsZVByb3RvLmZvckVhY2ggPSBmdW5jdGlvbiAob09yT25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZSh0eXBlb2Ygb09yT25OZXh0ID09PSAnb2JqZWN0JyA/XG4gICAgICAgIG9Pck9uTmV4dCA6XG4gICAgICAgIG9ic2VydmVyQ3JlYXRlKG9Pck9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0byB0aGUgbmV4dCB2YWx1ZSBpbiB0aGUgc2VxdWVuY2Ugd2l0aCBhbiBvcHRpb25hbCBcInRoaXNcIiBhcmd1bWVudC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbk5leHQgVGhlIGZ1bmN0aW9uIHRvIGludm9rZSBvbiBlYWNoIGVsZW1lbnQgaW4gdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAgICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBPYmplY3QgdG8gdXNlIGFzIHRoaXMgd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICAgICogQHJldHVybnMge0Rpc3Bvc2FibGV9IEEgZGlzcG9zYWJsZSBoYW5kbGluZyB0aGUgc3Vic2NyaXB0aW9ucyBhbmQgdW5zdWJzY3JpcHRpb25zLlxuICAgICAqL1xuICAgIG9ic2VydmFibGVQcm90by5zdWJzY3JpYmVPbk5leHQgPSBmdW5jdGlvbiAob25OZXh0LCB0aGlzQXJnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlKG9ic2VydmVyQ3JlYXRlKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJyA/IGZ1bmN0aW9uKHgpIHsgb25OZXh0LmNhbGwodGhpc0FyZywgeCk7IH0gOiBvbk5leHQpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0byBhbiBleGNlcHRpb25hbCBjb25kaXRpb24gaW4gdGhlIHNlcXVlbmNlIHdpdGggYW4gb3B0aW9uYWwgXCJ0aGlzXCIgYXJndW1lbnQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25FcnJvciBUaGUgZnVuY3Rpb24gdG8gaW52b2tlIHVwb24gZXhjZXB0aW9uYWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAgICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBPYmplY3QgdG8gdXNlIGFzIHRoaXMgd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICAgICogQHJldHVybnMge0Rpc3Bvc2FibGV9IEEgZGlzcG9zYWJsZSBoYW5kbGluZyB0aGUgc3Vic2NyaXB0aW9ucyBhbmQgdW5zdWJzY3JpcHRpb25zLlxuICAgICAqL1xuICAgIG9ic2VydmFibGVQcm90by5zdWJzY3JpYmVPbkVycm9yID0gZnVuY3Rpb24gKG9uRXJyb3IsIHRoaXNBcmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUob2JzZXJ2ZXJDcmVhdGUobnVsbCwgdHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24oZSkgeyBvbkVycm9yLmNhbGwodGhpc0FyZywgZSk7IH0gOiBvbkVycm9yKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdG8gdGhlIG5leHQgdmFsdWUgaW4gdGhlIHNlcXVlbmNlIHdpdGggYW4gb3B0aW9uYWwgXCJ0aGlzXCIgYXJndW1lbnQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZWQgVGhlIGZ1bmN0aW9uIHRvIGludm9rZSB1cG9uIGdyYWNlZnVsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgICAqIEBwYXJhbSB7QW55fSBbdGhpc0FyZ10gT2JqZWN0IHRvIHVzZSBhcyB0aGlzIHdoZW4gZXhlY3V0aW5nIGNhbGxiYWNrLlxuICAgICAqIEByZXR1cm5zIHtEaXNwb3NhYmxlfSBBIGRpc3Bvc2FibGUgaGFuZGxpbmcgdGhlIHN1YnNjcmlwdGlvbnMgYW5kIHVuc3Vic2NyaXB0aW9ucy5cbiAgICAgKi9cbiAgICBvYnNlcnZhYmxlUHJvdG8uc3Vic2NyaWJlT25Db21wbGV0ZWQgPSBmdW5jdGlvbiAob25Db21wbGV0ZWQsIHRoaXNBcmcpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUob2JzZXJ2ZXJDcmVhdGUobnVsbCwgbnVsbCwgdHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24oKSB7IG9uQ29tcGxldGVkLmNhbGwodGhpc0FyZyk7IH0gOiBvbkNvbXBsZXRlZCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbiAgfSkoKTtcblxuICB2YXIgU2NoZWR1bGVkT2JzZXJ2ZXIgPSBSeC5pbnRlcm5hbHMuU2NoZWR1bGVkT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNjaGVkdWxlZE9ic2VydmVyLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gU2NoZWR1bGVkT2JzZXJ2ZXIoc2NoZWR1bGVyLCBvYnNlcnZlcikge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgIHRoaXMuaXNBY3F1aXJlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXNGYXVsdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICB0aGlzLmRpc3Bvc2FibGUgPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgIH1cblxuICAgIFNjaGVkdWxlZE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goZnVuY3Rpb24gKCkgeyBzZWxmLm9ic2VydmVyLm9uTmV4dCh2YWx1ZSk7IH0pO1xuICAgIH07XG5cbiAgICBTY2hlZHVsZWRPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHsgc2VsZi5vYnNlcnZlci5vbkVycm9yKGUpOyB9KTtcbiAgICB9O1xuXG4gICAgU2NoZWR1bGVkT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMucXVldWUucHVzaChmdW5jdGlvbiAoKSB7IHNlbGYub2JzZXJ2ZXIub25Db21wbGV0ZWQoKTsgfSk7XG4gICAgfTtcblxuICAgIFNjaGVkdWxlZE9ic2VydmVyLnByb3RvdHlwZS5lbnN1cmVBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaXNPd25lciA9IGZhbHNlO1xuICAgICAgaWYgKCF0aGlzLmhhc0ZhdWx0ZWQgJiYgdGhpcy5xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlzT3duZXIgPSAhdGhpcy5pc0FjcXVpcmVkO1xuICAgICAgICB0aGlzLmlzQWNxdWlyZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGlzT3duZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwb3NhYmxlLnNldERpc3Bvc2FibGUodGhpcy5zY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmUodGhpcywgZnVuY3Rpb24gKHBhcmVudCwgc2VsZikge1xuICAgICAgICAgIHZhciB3b3JrO1xuICAgICAgICAgIGlmIChwYXJlbnQucXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgd29yayA9IHBhcmVudC5xdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuaXNBY3F1aXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcmVzID0gdHJ5Q2F0Y2god29yaykoKTtcbiAgICAgICAgICBpZiAocmVzID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgcGFyZW50LnF1ZXVlID0gW107XG4gICAgICAgICAgICBwYXJlbnQuaGFzRmF1bHRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dlcihyZXMuZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYocGFyZW50KTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBTY2hlZHVsZWRPYnNlcnZlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF9fc3VwZXJfXy5wcm90b3R5cGUuZGlzcG9zZS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5kaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNjaGVkdWxlZE9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICB2YXIgT2JzZXJ2YWJsZUJhc2UgPSBSeC5PYnNlcnZhYmxlQmFzZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoT2JzZXJ2YWJsZUJhc2UsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBmaXhTdWJzY3JpYmVyKHN1YnNjcmliZXIpIHtcbiAgICAgIHJldHVybiBzdWJzY3JpYmVyICYmIGlzRnVuY3Rpb24oc3Vic2NyaWJlci5kaXNwb3NlKSA/IHN1YnNjcmliZXIgOlxuICAgICAgICBpc0Z1bmN0aW9uKHN1YnNjcmliZXIpID8gZGlzcG9zYWJsZUNyZWF0ZShzdWJzY3JpYmVyKSA6IGRpc3Bvc2FibGVFbXB0eTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREaXNwb3NhYmxlKHMsIHN0YXRlKSB7XG4gICAgICB2YXIgYWRvID0gc3RhdGVbMF0sIHNlbGYgPSBzdGF0ZVsxXTtcbiAgICAgIHZhciBzdWIgPSB0cnlDYXRjaChzZWxmLnN1YnNjcmliZUNvcmUpLmNhbGwoc2VsZiwgYWRvKTtcbiAgICAgIGlmIChzdWIgPT09IGVycm9yT2JqICYmICFhZG8uZmFpbChlcnJvck9iai5lKSkgeyB0aHJvd2VyKGVycm9yT2JqLmUpOyB9XG4gICAgICBhZG8uc2V0RGlzcG9zYWJsZShmaXhTdWJzY3JpYmVyKHN1YikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVCYXNlKCkge1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgT2JzZXJ2YWJsZUJhc2UucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGFkbyA9IG5ldyBBdXRvRGV0YWNoT2JzZXJ2ZXIobyksIHN0YXRlID0gW2FkbywgdGhpc107XG5cbiAgICAgIGlmIChjdXJyZW50VGhyZWFkU2NoZWR1bGVyLnNjaGVkdWxlUmVxdWlyZWQoKSkge1xuICAgICAgICBjdXJyZW50VGhyZWFkU2NoZWR1bGVyLnNjaGVkdWxlKHN0YXRlLCBzZXREaXNwb3NhYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpc3Bvc2FibGUobnVsbCwgc3RhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFkbztcbiAgICB9O1xuXG4gICAgT2JzZXJ2YWJsZUJhc2UucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBub3RJbXBsZW1lbnRlZDtcblxuICAgIHJldHVybiBPYnNlcnZhYmxlQmFzZTtcbiAgfShPYnNlcnZhYmxlKSk7XG5cbnZhciBGbGF0TWFwT2JzZXJ2YWJsZSA9IFJ4LkZsYXRNYXBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuXG4gICAgaW5oZXJpdHMoRmxhdE1hcE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBGbGF0TWFwT2JzZXJ2YWJsZShzb3VyY2UsIHNlbGVjdG9yLCByZXN1bHRTZWxlY3RvciwgdGhpc0FyZykge1xuICAgICAgdGhpcy5yZXN1bHRTZWxlY3RvciA9IGlzRnVuY3Rpb24ocmVzdWx0U2VsZWN0b3IpID8gcmVzdWx0U2VsZWN0b3IgOiBudWxsO1xuICAgICAgdGhpcy5zZWxlY3RvciA9IGJpbmRDYWxsYmFjayhpc0Z1bmN0aW9uKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogZnVuY3Rpb24oKSB7IHJldHVybiBzZWxlY3RvcjsgfSwgdGhpc0FyZywgMyk7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIEZsYXRNYXBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24obykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihvLCB0aGlzLnNlbGVjdG9yLCB0aGlzLnJlc3VsdFNlbGVjdG9yLCB0aGlzKSk7XG4gICAgfTtcblxuICAgIGluaGVyaXRzKElubmVyT2JzZXJ2ZXIsIEFic3RyYWN0T2JzZXJ2ZXIpO1xuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIob2JzZXJ2ZXIsIHNlbGVjdG9yLCByZXN1bHRTZWxlY3Rvciwgc291cmNlKSB7XG4gICAgICB0aGlzLmkgPSAwO1xuICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgdGhpcy5yZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLm8gPSBvYnNlcnZlcjtcbiAgICAgIEFic3RyYWN0T2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5fd3JhcFJlc3VsdCA9IGZ1bmN0aW9uKHJlc3VsdCwgeCwgaSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdWx0U2VsZWN0b3IgP1xuICAgICAgICByZXN1bHQubWFwKGZ1bmN0aW9uKHksIGkyKSB7IHJldHVybiB0aGlzLnJlc3VsdFNlbGVjdG9yKHgsIHksIGksIGkyKTsgfSwgdGhpcykgOlxuICAgICAgICByZXN1bHQ7XG4gICAgfTtcblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih4KSB7XG4gICAgICB2YXIgaSA9IHRoaXMuaSsrO1xuICAgICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMuc2VsZWN0b3IpKHgsIGksIHRoaXMuc291cmNlKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLm8ub25FcnJvcihyZXN1bHQuZSk7IH1cblxuICAgICAgaXNQcm9taXNlKHJlc3VsdCkgJiYgKHJlc3VsdCA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShyZXN1bHQpKTtcbiAgICAgIChpc0FycmF5TGlrZShyZXN1bHQpIHx8IGlzSXRlcmFibGUocmVzdWx0KSkgJiYgKHJlc3VsdCA9IE9ic2VydmFibGUuZnJvbShyZXN1bHQpKTtcbiAgICAgIHRoaXMuby5vbk5leHQodGhpcy5fd3JhcFJlc3VsdChyZXN1bHQsIHgsIGkpKTtcbiAgICB9O1xuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbihlKSB7IHRoaXMuby5vbkVycm9yKGUpOyB9O1xuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbigpIHsgdGhpcy5vLm9uQ29tcGxldGVkKCk7IH07XG5cbiAgICByZXR1cm4gRmxhdE1hcE9ic2VydmFibGU7XG5cbn0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgRW51bWVyYWJsZSA9IFJ4LmludGVybmFscy5FbnVtZXJhYmxlID0gZnVuY3Rpb24gKCkgeyB9O1xuXG4gIGZ1bmN0aW9uIElzRGlzcG9zZWREaXNwb3NhYmxlKHN0YXRlKSB7XG4gICAgdGhpcy5fcyA9IHN0YXRlO1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICB9XG5cbiAgSXNEaXNwb3NlZERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLl9zLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICB2YXIgQ29uY2F0RW51bWVyYWJsZU9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQ29uY2F0RW51bWVyYWJsZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ29uY2F0RW51bWVyYWJsZU9ic2VydmFibGUoc291cmNlcykge1xuICAgICAgdGhpcy5zb3VyY2VzID0gc291cmNlcztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIENvbmNhdEVudW1lcmFibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBzdGF0ZSA9IHsgaXNEaXNwb3NlZDogZmFsc2UgfSwgc3Vic2NyaXB0aW9uID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKTtcbiAgICAgIHZhciBjYW5jZWxhYmxlID0gY3VycmVudFRocmVhZFNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZSh0aGlzLnNvdXJjZXNbJGl0ZXJhdG9yJF0oKSwgZnVuY3Rpb24gKGUsIHNlbGYpIHtcbiAgICAgICAgaWYgKHN0YXRlLmlzRGlzcG9zZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHZhciBjdXJyZW50SXRlbSA9IHRyeUNhdGNoKGUubmV4dCkuY2FsbChlKTtcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKGN1cnJlbnRJdGVtLmUpOyB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgcHJvbWlzZVxuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudEl0ZW0udmFsdWU7XG4gICAgICAgIGlzUHJvbWlzZShjdXJyZW50VmFsdWUpICYmIChjdXJyZW50VmFsdWUgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UoY3VycmVudFZhbHVlKSk7XG5cbiAgICAgICAgdmFyIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUoZCk7XG4gICAgICAgIGQuc2V0RGlzcG9zYWJsZShjdXJyZW50VmFsdWUuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKG8sIHNlbGYsIGUpKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBOQXJ5RGlzcG9zYWJsZShbc3Vic2NyaXB0aW9uLCBjYW5jZWxhYmxlLCBuZXcgSXNEaXNwb3NlZERpc3Bvc2FibGUoc3RhdGUpXSk7XG4gICAgfTtcblxuICAgIGluaGVyaXRzKElubmVyT2JzZXJ2ZXIsIEFic3RyYWN0T2JzZXJ2ZXIpO1xuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIobywgcywgZSkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9zID0gcztcbiAgICAgIHRoaXMuX2UgPSBlO1xuICAgICAgQWJzdHJhY3RPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbk5leHQgPSBmdW5jdGlvbiAoeCkgeyB0aGlzLl9vLm9uTmV4dCh4KTsgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGUpIHsgdGhpcy5fby5vbkVycm9yKGUpOyB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9zKHRoaXMuX2UpOyB9O1xuXG4gICAgcmV0dXJuIENvbmNhdEVudW1lcmFibGVPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgRW51bWVyYWJsZS5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQ29uY2F0RW51bWVyYWJsZU9ic2VydmFibGUodGhpcyk7XG4gIH07XG5cbiAgdmFyIENhdGNoRXJyb3JPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKENhdGNoRXJyb3JPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIENhdGNoRXJyb3JPYnNlcnZhYmxlKHNvdXJjZXMpIHtcbiAgICAgIHRoaXMuc291cmNlcyA9IHNvdXJjZXM7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBDYXRjaEVycm9yT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuc291cmNlc1skaXRlcmF0b3IkXSgpO1xuXG4gICAgICB2YXIgc3RhdGUgPSB7IGlzRGlzcG9zZWQ6IGZhbHNlIH0sIHN1YnNjcmlwdGlvbiA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCk7XG4gICAgICB2YXIgY2FuY2VsYWJsZSA9IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmUobnVsbCwgZnVuY3Rpb24gKGxhc3RFeGNlcHRpb24sIHNlbGYpIHtcbiAgICAgICAgaWYgKHN0YXRlLmlzRGlzcG9zZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHZhciBjdXJyZW50SXRlbSA9IHRyeUNhdGNoKGUubmV4dCkuY2FsbChlKTtcbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKGN1cnJlbnRJdGVtLmUpOyB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gbGFzdEV4Y2VwdGlvbiAhPT0gbnVsbCA/IG8ub25FcnJvcihsYXN0RXhjZXB0aW9uKSA6IG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHByb21pc2VcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRJdGVtLnZhbHVlO1xuICAgICAgICBpc1Byb21pc2UoY3VycmVudFZhbHVlKSAmJiAoY3VycmVudFZhbHVlID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKGN1cnJlbnRWYWx1ZSkpO1xuXG4gICAgICAgIHZhciBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKGQpO1xuICAgICAgICBkLnNldERpc3Bvc2FibGUoY3VycmVudFZhbHVlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihvLCBzZWxmKSkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IE5BcnlEaXNwb3NhYmxlKFtzdWJzY3JpcHRpb24sIGNhbmNlbGFibGUsIG5ldyBJc0Rpc3Bvc2VkRGlzcG9zYWJsZShzdGF0ZSldKTtcbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoSW5uZXJPYnNlcnZlciwgQWJzdHJhY3RPYnNlcnZlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihvLCByZWN1cnNlKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX3JlY3Vyc2UgPSByZWN1cnNlO1xuICAgICAgQWJzdHJhY3RPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkgeyB0aGlzLl9vLm9uTmV4dCh4KTsgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7IHRoaXMuX3JlY3Vyc2UoZSk7IH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9vLm9uQ29tcGxldGVkKCk7IH07XG5cbiAgICByZXR1cm4gQ2F0Y2hFcnJvck9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICBFbnVtZXJhYmxlLnByb3RvdHlwZS5jYXRjaEVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQ2F0Y2hFcnJvck9ic2VydmFibGUodGhpcyk7XG4gIH07XG5cbiAgRW51bWVyYWJsZS5wcm90b3R5cGUuY2F0Y2hFcnJvcldoZW4gPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uSGFuZGxlcikge1xuICAgIHZhciBzb3VyY2VzID0gdGhpcztcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBleGNlcHRpb25zID0gbmV3IFN1YmplY3QoKSxcbiAgICAgICAgbm90aWZpZXIgPSBuZXcgU3ViamVjdCgpLFxuICAgICAgICBoYW5kbGVkID0gbm90aWZpY2F0aW9uSGFuZGxlcihleGNlcHRpb25zKSxcbiAgICAgICAgbm90aWZpY2F0aW9uRGlzcG9zYWJsZSA9IGhhbmRsZWQuc3Vic2NyaWJlKG5vdGlmaWVyKTtcblxuICAgICAgdmFyIGUgPSBzb3VyY2VzWyRpdGVyYXRvciRdKCk7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHsgaXNEaXNwb3NlZDogZmFsc2UgfSxcbiAgICAgICAgbGFzdEV4Y2VwdGlvbixcbiAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKTtcbiAgICAgIHZhciBjYW5jZWxhYmxlID0gY3VycmVudFRocmVhZFNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZShudWxsLCBmdW5jdGlvbiAoXywgc2VsZikge1xuICAgICAgICBpZiAoc3RhdGUuaXNEaXNwb3NlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gdHJ5Q2F0Y2goZS5uZXh0KS5jYWxsKGUpO1xuICAgICAgICBpZiAoY3VycmVudEl0ZW0gPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IoY3VycmVudEl0ZW0uZSk7IH1cblxuICAgICAgICBpZiAoY3VycmVudEl0ZW0uZG9uZSkge1xuICAgICAgICAgIGlmIChsYXN0RXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBvLm9uRXJyb3IobGFzdEV4Y2VwdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgcHJvbWlzZVxuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudEl0ZW0udmFsdWU7XG4gICAgICAgIGlzUHJvbWlzZShjdXJyZW50VmFsdWUpICYmIChjdXJyZW50VmFsdWUgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UoY3VycmVudFZhbHVlKSk7XG5cbiAgICAgICAgdmFyIG91dGVyID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgIHZhciBpbm5lciA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShuZXcgQmluYXJ5RGlzcG9zYWJsZShpbm5lciwgb3V0ZXIpKTtcbiAgICAgICAgb3V0ZXIuc2V0RGlzcG9zYWJsZShjdXJyZW50VmFsdWUuc3Vic2NyaWJlKFxuICAgICAgICAgIGZ1bmN0aW9uKHgpIHsgby5vbk5leHQoeCk7IH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGV4bikge1xuICAgICAgICAgICAgaW5uZXIuc2V0RGlzcG9zYWJsZShub3RpZmllci5zdWJzY3JpYmUoc2VsZiwgZnVuY3Rpb24oZXgpIHtcbiAgICAgICAgICAgICAgby5vbkVycm9yKGV4KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIGV4Y2VwdGlvbnMub25OZXh0KGV4bik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbigpIHsgby5vbkNvbXBsZXRlZCgpOyB9KSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBOQXJ5RGlzcG9zYWJsZShbbm90aWZpY2F0aW9uRGlzcG9zYWJsZSwgc3Vic2NyaXB0aW9uLCBjYW5jZWxhYmxlLCBuZXcgSXNEaXNwb3NlZERpc3Bvc2FibGUoc3RhdGUpXSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIFJlcGVhdEVudW1lcmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFJlcGVhdEVudW1lcmFibGUsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBSZXBlYXRFbnVtZXJhYmxlKHYsIGMpIHtcbiAgICAgIHRoaXMudiA9IHY7XG4gICAgICB0aGlzLmMgPSBjID09IG51bGwgPyAtMSA6IGM7XG4gICAgfVxuICAgIFJlcGVhdEVudW1lcmFibGUucHJvdG90eXBlWyRpdGVyYXRvciRdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBSZXBlYXRFbnVtZXJhdG9yKHRoaXMpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBSZXBlYXRFbnVtZXJhdG9yKHApIHtcbiAgICAgIHRoaXMudiA9IHAudjtcbiAgICAgIHRoaXMubCA9IHAuYztcbiAgICB9XG4gICAgUmVwZWF0RW51bWVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmwgPT09IDApIHsgcmV0dXJuIGRvbmVFbnVtZXJhdG9yOyB9XG4gICAgICBpZiAodGhpcy5sID4gMCkgeyB0aGlzLmwtLTsgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiB0aGlzLnYgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlcGVhdEVudW1lcmFibGU7XG4gIH0oRW51bWVyYWJsZSkpO1xuXG4gIHZhciBlbnVtZXJhYmxlUmVwZWF0ID0gRW51bWVyYWJsZS5yZXBlYXQgPSBmdW5jdGlvbiAodmFsdWUsIHJlcGVhdENvdW50KSB7XG4gICAgcmV0dXJuIG5ldyBSZXBlYXRFbnVtZXJhYmxlKHZhbHVlLCByZXBlYXRDb3VudCk7XG4gIH07XG5cbiAgdmFyIE9mRW51bWVyYWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhPZkVudW1lcmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gT2ZFbnVtZXJhYmxlKHMsIGZuLCB0aGlzQXJnKSB7XG4gICAgICB0aGlzLnMgPSBzO1xuICAgICAgdGhpcy5mbiA9IGZuID8gYmluZENhbGxiYWNrKGZuLCB0aGlzQXJnLCAzKSA6IG51bGw7XG4gICAgfVxuICAgIE9mRW51bWVyYWJsZS5wcm90b3R5cGVbJGl0ZXJhdG9yJF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IE9mRW51bWVyYXRvcih0aGlzKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gT2ZFbnVtZXJhdG9yKHApIHtcbiAgICAgIHRoaXMuaSA9IC0xO1xuICAgICAgdGhpcy5zID0gcC5zO1xuICAgICAgdGhpcy5sID0gdGhpcy5zLmxlbmd0aDtcbiAgICAgIHRoaXMuZm4gPSBwLmZuO1xuICAgIH1cbiAgICBPZkVudW1lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgIHJldHVybiArK3RoaXMuaSA8IHRoaXMubCA/XG4gICAgICAgeyBkb25lOiBmYWxzZSwgdmFsdWU6ICF0aGlzLmZuID8gdGhpcy5zW3RoaXMuaV0gOiB0aGlzLmZuKHRoaXMuc1t0aGlzLmldLCB0aGlzLmksIHRoaXMucykgfSA6XG4gICAgICAgZG9uZUVudW1lcmF0b3I7XG4gICAgfTtcblxuICAgIHJldHVybiBPZkVudW1lcmFibGU7XG4gIH0oRW51bWVyYWJsZSkpO1xuXG4gIHZhciBlbnVtZXJhYmxlT2YgPSBFbnVtZXJhYmxlLm9mID0gZnVuY3Rpb24gKHNvdXJjZSwgc2VsZWN0b3IsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gbmV3IE9mRW51bWVyYWJsZShzb3VyY2UsIHNlbGVjdG9yLCB0aGlzQXJnKTtcbiAgfTtcblxuICB2YXIgVG9BcnJheU9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVG9BcnJheU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gVG9BcnJheU9ic2VydmFibGUoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRvQXJyYXlPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24obykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihvKSk7XG4gICAgfTtcblxuICAgIGluaGVyaXRzKElubmVyT2JzZXJ2ZXIsIEFic3RyYWN0T2JzZXJ2ZXIpO1xuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIobykge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMuYSA9IFtdO1xuICAgICAgQWJzdHJhY3RPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHsgdGhpcy5hLnB1c2goeCk7IH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkgeyB0aGlzLm8ub25FcnJvcihlKTsgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkgeyB0aGlzLm8ub25OZXh0KHRoaXMuYSk7IHRoaXMuby5vbkNvbXBsZXRlZCgpOyB9O1xuXG4gICAgcmV0dXJuIFRvQXJyYXlPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICogQ3JlYXRlcyBhbiBhcnJheSBmcm9tIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyBhIHNpbmdsZSBlbGVtZW50IHdpdGggYSBsaXN0IGNvbnRhaW5pbmcgYWxsIHRoZSBlbGVtZW50cyBvZiB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG8udG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFRvQXJyYXlPYnNlcnZhYmxlKHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAgQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGZyb20gYSBzcGVjaWZpZWQgc3Vic2NyaWJlIG1ldGhvZCBpbXBsZW1lbnRhdGlvbi5cbiAgICogQGV4YW1wbGVcbiAgICogIHZhciByZXMgPSBSeC5PYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgfSApO1xuICAgKiAgdmFyIHJlcyA9IFJ4Lk9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikgeyByZXR1cm4gUnguRGlzcG9zYWJsZS5lbXB0eTsgfSApO1xuICAgKiAgdmFyIHJlcyA9IFJ4Lk9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikgeyB9ICk7XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YnNjcmliZSBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgcmVzdWx0aW5nIG9ic2VydmFibGUgc2VxdWVuY2UncyBzdWJzY3JpYmUgbWV0aG9kLCByZXR1cm5pbmcgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgd3JhcHBlZCBpbiBhIERpc3Bvc2FibGUuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aXRoIHRoZSBzcGVjaWZpZWQgaW1wbGVtZW50YXRpb24gZm9yIHRoZSBTdWJzY3JpYmUgbWV0aG9kLlxuICAgKi9cbiAgT2JzZXJ2YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlLCBwYXJlbnQpIHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoc3Vic2NyaWJlLCBwYXJlbnQpO1xuICB9O1xuXG4gIHZhciBEZWZlciA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhEZWZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBEZWZlcihmYWN0b3J5KSB7XG4gICAgICB0aGlzLl9mID0gZmFjdG9yeTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIERlZmVyLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLl9mKSgpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG9ic2VydmFibGVUaHJvdyhyZXN1bHQuZSkuc3Vic2NyaWJlKG8pO31cbiAgICAgIGlzUHJvbWlzZShyZXN1bHQpICYmIChyZXN1bHQgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UocmVzdWx0KSk7XG4gICAgICByZXR1cm4gcmVzdWx0LnN1YnNjcmliZShvKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIERlZmVyO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBpbnZva2VzIHRoZSBzcGVjaWZpZWQgZmFjdG9yeSBmdW5jdGlvbiB3aGVuZXZlciBhIG5ldyBvYnNlcnZlciBzdWJzY3JpYmVzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgdmFyIHJlcyA9IFJ4Lk9ic2VydmFibGUuZGVmZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gUnguT2JzZXJ2YWJsZS5mcm9tQXJyYXkoWzEsMiwzXSk7IH0pO1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvYnNlcnZhYmxlRmFjdG9yeSBPYnNlcnZhYmxlIGZhY3RvcnkgZnVuY3Rpb24gdG8gaW52b2tlIGZvciBlYWNoIG9ic2VydmVyIHRoYXQgc3Vic2NyaWJlcyB0byB0aGUgcmVzdWx0aW5nIHNlcXVlbmNlIG9yIFByb21pc2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHdob3NlIG9ic2VydmVycyB0cmlnZ2VyIGFuIGludm9jYXRpb24gb2YgdGhlIGdpdmVuIG9ic2VydmFibGUgZmFjdG9yeSBmdW5jdGlvbi5cbiAgICovXG4gIHZhciBvYnNlcnZhYmxlRGVmZXIgPSBPYnNlcnZhYmxlLmRlZmVyID0gZnVuY3Rpb24gKG9ic2VydmFibGVGYWN0b3J5KSB7XG4gICAgcmV0dXJuIG5ldyBEZWZlcihvYnNlcnZhYmxlRmFjdG9yeSk7XG4gIH07XG5cbiAgdmFyIEVtcHR5T2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhFbXB0eU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRW1wdHlPYnNlcnZhYmxlKHNjaGVkdWxlcikge1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBFbXB0eU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBzaW5rID0gbmV3IEVtcHR5U2luayhvYnNlcnZlciwgdGhpcy5zY2hlZHVsZXIpO1xuICAgICAgcmV0dXJuIHNpbmsucnVuKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIEVtcHR5U2luayhvYnNlcnZlciwgc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZUl0ZW0ocywgc3RhdGUpIHtcbiAgICAgIHN0YXRlLm9uQ29tcGxldGVkKCk7XG4gICAgICByZXR1cm4gZGlzcG9zYWJsZUVtcHR5O1xuICAgIH1cblxuICAgIEVtcHR5U2luay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5vYnNlcnZlcjtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlciA9PT0gaW1tZWRpYXRlU2NoZWR1bGVyID9cbiAgICAgICAgc2NoZWR1bGVJdGVtKG51bGwsIHN0YXRlKSA6XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKHN0YXRlLCBzY2hlZHVsZUl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gRW1wdHlPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIEVNUFRZX09CU0VSVkFCTEUgPSBuZXcgRW1wdHlPYnNlcnZhYmxlKGltbWVkaWF0ZVNjaGVkdWxlcik7XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIGFuIGVtcHR5IG9ic2VydmFibGUgc2VxdWVuY2UsIHVzaW5nIHRoZSBzcGVjaWZpZWQgc2NoZWR1bGVyIHRvIHNlbmQgb3V0IHRoZSBzaW5nbGUgT25Db21wbGV0ZWQgbWVzc2FnZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogIHZhciByZXMgPSBSeC5PYnNlcnZhYmxlLmVtcHR5KCk7XG4gICAqICB2YXIgcmVzID0gUnguT2JzZXJ2YWJsZS5lbXB0eShSeC5TY2hlZHVsZXIudGltZW91dCk7XG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBTY2hlZHVsZXIgdG8gc2VuZCB0aGUgdGVybWluYXRpb24gY2FsbCBvbi5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2Ugd2l0aCBubyBlbGVtZW50cy5cbiAgICovXG4gIHZhciBvYnNlcnZhYmxlRW1wdHkgPSBPYnNlcnZhYmxlLmVtcHR5ID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGltbWVkaWF0ZVNjaGVkdWxlcik7XG4gICAgcmV0dXJuIHNjaGVkdWxlciA9PT0gaW1tZWRpYXRlU2NoZWR1bGVyID8gRU1QVFlfT0JTRVJWQUJMRSA6IG5ldyBFbXB0eU9ic2VydmFibGUoc2NoZWR1bGVyKTtcbiAgfTtcblxuICB2YXIgRnJvbU9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRnJvbU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRnJvbU9ic2VydmFibGUoaXRlcmFibGUsIG1hcHBlciwgc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLml0ZXJhYmxlID0gaXRlcmFibGU7XG4gICAgICB0aGlzLm1hcHBlciA9IG1hcHBlcjtcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRnJvbU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIHNpbmsgPSBuZXcgRnJvbVNpbmsobywgdGhpcyk7XG4gICAgICByZXR1cm4gc2luay5ydW4oKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEZyb21PYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIEZyb21TaW5rID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGcm9tU2luayhvLCBwYXJlbnQpIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB9XG5cbiAgICBGcm9tU2luay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxpc3QgPSBPYmplY3QodGhpcy5wYXJlbnQuaXRlcmFibGUpLFxuICAgICAgICAgIGl0ID0gZ2V0SXRlcmFibGUobGlzdCksXG4gICAgICAgICAgbyA9IHRoaXMubyxcbiAgICAgICAgICBtYXBwZXIgPSB0aGlzLnBhcmVudC5tYXBwZXI7XG5cbiAgICAgIGZ1bmN0aW9uIGxvb3BSZWN1cnNpdmUoaSwgcmVjdXJzZSkge1xuICAgICAgICB2YXIgbmV4dCA9IHRyeUNhdGNoKGl0Lm5leHQpLmNhbGwoaXQpO1xuICAgICAgICBpZiAobmV4dCA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihuZXh0LmUpOyB9XG4gICAgICAgIGlmIChuZXh0LmRvbmUpIHsgcmV0dXJuIG8ub25Db21wbGV0ZWQoKTsgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXh0LnZhbHVlO1xuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG1hcHBlcikpIHtcbiAgICAgICAgICByZXN1bHQgPSB0cnlDYXRjaChtYXBwZXIpKHJlc3VsdCwgaSk7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihyZXN1bHQuZSk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIG8ub25OZXh0KHJlc3VsdCk7XG4gICAgICAgIHJlY3Vyc2UoaSArIDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlKDAsIGxvb3BSZWN1cnNpdmUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRnJvbVNpbms7XG4gIH0oKSk7XG5cbiAgdmFyIG1heFNhZmVJbnRlZ2VyID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcblxuICBmdW5jdGlvbiBTdHJpbmdJdGVyYWJsZShzKSB7XG4gICAgdGhpcy5fcyA9IHM7XG4gIH1cblxuICBTdHJpbmdJdGVyYWJsZS5wcm90b3R5cGVbJGl0ZXJhdG9yJF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBTdHJpbmdJdGVyYXRvcih0aGlzLl9zKTtcbiAgfTtcblxuICBmdW5jdGlvbiBTdHJpbmdJdGVyYXRvcihzKSB7XG4gICAgdGhpcy5fcyA9IHM7XG4gICAgdGhpcy5fbCA9IHMubGVuZ3RoO1xuICAgIHRoaXMuX2kgPSAwO1xuICB9XG5cbiAgU3RyaW5nSXRlcmF0b3IucHJvdG90eXBlWyRpdGVyYXRvciRdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFN0cmluZ0l0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9pIDwgdGhpcy5fbCA/IHsgZG9uZTogZmFsc2UsIHZhbHVlOiB0aGlzLl9zLmNoYXJBdCh0aGlzLl9pKyspIH0gOiBkb25lRW51bWVyYXRvcjtcbiAgfTtcblxuICBmdW5jdGlvbiBBcnJheUl0ZXJhYmxlKGEpIHtcbiAgICB0aGlzLl9hID0gYTtcbiAgfVxuXG4gIEFycmF5SXRlcmFibGUucHJvdG90eXBlWyRpdGVyYXRvciRdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcih0aGlzLl9hKTtcbiAgfTtcblxuICBmdW5jdGlvbiBBcnJheUl0ZXJhdG9yKGEpIHtcbiAgICB0aGlzLl9hID0gYTtcbiAgICB0aGlzLl9sID0gdG9MZW5ndGgoYSk7XG4gICAgdGhpcy5faSA9IDA7XG4gIH1cblxuICBBcnJheUl0ZXJhdG9yLnByb3RvdHlwZVskaXRlcmF0b3IkXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBcnJheUl0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9pIDwgdGhpcy5fbCA/IHsgZG9uZTogZmFsc2UsIHZhbHVlOiB0aGlzLl9hW3RoaXMuX2krK10gfSA6IGRvbmVFbnVtZXJhdG9yO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG51bWJlcklzRmluaXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgcm9vdC5pc0Zpbml0ZSh2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05hbihuKSB7XG4gICAgcmV0dXJuIG4gIT09IG47XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJdGVyYWJsZShvKSB7XG4gICAgdmFyIGkgPSBvWyRpdGVyYXRvciRdLCBpdDtcbiAgICBpZiAoIWkgJiYgdHlwZW9mIG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpdCA9IG5ldyBTdHJpbmdJdGVyYWJsZShvKTtcbiAgICAgIHJldHVybiBpdFskaXRlcmF0b3IkXSgpO1xuICAgIH1cbiAgICBpZiAoIWkgJiYgby5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaXQgPSBuZXcgQXJyYXlJdGVyYWJsZShvKTtcbiAgICAgIHJldHVybiBpdFskaXRlcmF0b3IkXSgpO1xuICAgIH1cbiAgICBpZiAoIWkpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0IGlzIG5vdCBpdGVyYWJsZScpOyB9XG4gICAgcmV0dXJuIG9bJGl0ZXJhdG9yJF0oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNpZ24odmFsdWUpIHtcbiAgICB2YXIgbnVtYmVyID0gK3ZhbHVlO1xuICAgIGlmIChudW1iZXIgPT09IDApIHsgcmV0dXJuIG51bWJlcjsgfVxuICAgIGlmIChpc05hTihudW1iZXIpKSB7IHJldHVybiBudW1iZXI7IH1cbiAgICByZXR1cm4gbnVtYmVyIDwgMCA/IC0xIDogMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvTGVuZ3RoKG8pIHtcbiAgICB2YXIgbGVuID0gK28ubGVuZ3RoO1xuICAgIGlmIChpc05hTihsZW4pKSB7IHJldHVybiAwOyB9XG4gICAgaWYgKGxlbiA9PT0gMCB8fCAhbnVtYmVySXNGaW5pdGUobGVuKSkgeyByZXR1cm4gbGVuOyB9XG4gICAgbGVuID0gc2lnbihsZW4pICogTWF0aC5mbG9vcihNYXRoLmFicyhsZW4pKTtcbiAgICBpZiAobGVuIDw9IDApIHsgcmV0dXJuIDA7IH1cbiAgICBpZiAobGVuID4gbWF4U2FmZUludGVnZXIpIHsgcmV0dXJuIG1heFNhZmVJbnRlZ2VyOyB9XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxuXG4gIC8qKlxuICAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgT2JzZXJ2YWJsZSBzZXF1ZW5jZSBmcm9tIGFuIGFycmF5LWxpa2Ugb3IgaXRlcmFibGUgb2JqZWN0LlxuICAqIEBwYXJhbSB7QW55fSBhcnJheUxpa2UgQW4gYXJyYXktbGlrZSBvciBpdGVyYWJsZSBvYmplY3QgdG8gY29udmVydCB0byBhbiBPYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IFttYXBGbl0gTWFwIGZ1bmN0aW9uIHRvIGNhbGwgb24gZXZlcnkgZWxlbWVudCBvZiB0aGUgYXJyYXkuXG4gICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBUaGUgY29udGV4dCB0byB1c2UgY2FsbGluZyB0aGUgbWFwRm4gaWYgcHJvdmlkZWQuXG4gICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIE9wdGlvbmFsIHNjaGVkdWxlciB0byB1c2UgZm9yIHNjaGVkdWxpbmcuICBJZiBub3QgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIFNjaGVkdWxlci5jdXJyZW50VGhyZWFkLlxuICAqL1xuICB2YXIgb2JzZXJ2YWJsZUZyb20gPSBPYnNlcnZhYmxlLmZyb20gPSBmdW5jdGlvbiAoaXRlcmFibGUsIG1hcEZuLCB0aGlzQXJnLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoaXRlcmFibGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpdGVyYWJsZSBjYW5ub3QgYmUgbnVsbC4nKVxuICAgIH1cbiAgICBpZiAobWFwRm4gJiYgIWlzRnVuY3Rpb24obWFwRm4pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hcEZuIHdoZW4gcHJvdmlkZWQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIGlmIChtYXBGbikge1xuICAgICAgdmFyIG1hcHBlciA9IGJpbmRDYWxsYmFjayhtYXBGbiwgdGhpc0FyZywgMik7XG4gICAgfVxuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIpO1xuICAgIHJldHVybiBuZXcgRnJvbU9ic2VydmFibGUoaXRlcmFibGUsIG1hcHBlciwgc2NoZWR1bGVyKTtcbiAgfVxuXG4gIHZhciBGcm9tQXJyYXlPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEZyb21BcnJheU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRnJvbUFycmF5T2JzZXJ2YWJsZShhcmdzLCBzY2hlZHVsZXIpIHtcbiAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIEZyb21BcnJheU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBzaW5rID0gbmV3IEZyb21BcnJheVNpbmsob2JzZXJ2ZXIsIHRoaXMpO1xuICAgICAgcmV0dXJuIHNpbmsucnVuKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBGcm9tQXJyYXlPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgZnVuY3Rpb24gRnJvbUFycmF5U2luayhvYnNlcnZlciwgcGFyZW50KSB7XG4gICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gbG9vcFJlY3Vyc2l2ZShhcmdzLCBvYnNlcnZlcikge1xuICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICByZXR1cm4gZnVuY3Rpb24gbG9vcCAoaSwgcmVjdXJzZSkge1xuICAgICAgaWYgKGkgPCBsZW4pIHtcbiAgICAgICAgb2JzZXJ2ZXIub25OZXh0KGFyZ3NbaV0pO1xuICAgICAgICByZWN1cnNlKGkgKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ic2VydmVyLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIEZyb21BcnJheVNpbmsucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlKDAsIGxvb3BSZWN1cnNpdmUodGhpcy5wYXJlbnQuYXJncywgdGhpcy5vYnNlcnZlcikpO1xuICB9O1xuXG4gIC8qKlxuICAqICBDb252ZXJ0cyBhbiBhcnJheSB0byBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLCB1c2luZyBhbiBvcHRpb25hbCBzY2hlZHVsZXIgdG8gZW51bWVyYXRlIHRoZSBhcnJheS5cbiAgKiBAZGVwcmVjYXRlZCB1c2UgT2JzZXJ2YWJsZS5mcm9tIG9yIE9ic2VydmFibGUub2ZcbiAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gU2NoZWR1bGVyIHRvIHJ1biB0aGUgZW51bWVyYXRpb24gb2YgdGhlIGlucHV0IHNlcXVlbmNlIG9uLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aG9zZSBlbGVtZW50cyBhcmUgcHVsbGVkIGZyb20gdGhlIGdpdmVuIGVudW1lcmFibGUgc2VxdWVuY2UuXG4gICovXG4gIHZhciBvYnNlcnZhYmxlRnJvbUFycmF5ID0gT2JzZXJ2YWJsZS5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoYXJyYXksIHNjaGVkdWxlcikge1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIpO1xuICAgIHJldHVybiBuZXcgRnJvbUFycmF5T2JzZXJ2YWJsZShhcnJheSwgc2NoZWR1bGVyKVxuICB9O1xuXG4gIHZhciBOZXZlck9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoTmV2ZXJPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIE5ldmVyT2JzZXJ2YWJsZSgpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIE5ldmVyT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgcmV0dXJuIGRpc3Bvc2FibGVFbXB0eTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE5ldmVyT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBORVZFUl9PQlNFUlZBQkxFID0gbmV3IE5ldmVyT2JzZXJ2YWJsZSgpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbm9uLXRlcm1pbmF0aW5nIG9ic2VydmFibGUgc2VxdWVuY2UsIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGRlbm90ZSBhbiBpbmZpbml0ZSBkdXJhdGlvbiAoZS5nLiB3aGVuIHVzaW5nIHJlYWN0aXZlIGpvaW5zKS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hvc2Ugb2JzZXJ2ZXJzIHdpbGwgbmV2ZXIgZ2V0IGNhbGxlZC5cbiAgICovXG4gIHZhciBvYnNlcnZhYmxlTmV2ZXIgPSBPYnNlcnZhYmxlLm5ldmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBORVZFUl9PQlNFUlZBQkxFO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGVPZiAoc2NoZWR1bGVyLCBhcnJheSkge1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIpO1xuICAgIHJldHVybiBuZXcgRnJvbUFycmF5T2JzZXJ2YWJsZShhcnJheSwgc2NoZWR1bGVyKTtcbiAgfVxuXG4gIC8qKlxuICAqICBUaGlzIG1ldGhvZCBjcmVhdGVzIGEgbmV3IE9ic2VydmFibGUgaW5zdGFuY2Ugd2l0aCBhIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHMsIHJlZ2FyZGxlc3Mgb2YgbnVtYmVyIG9yIHR5cGUgb2YgdGhlIGFyZ3VtZW50cy5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hvc2UgZWxlbWVudHMgYXJlIHB1bGxlZCBmcm9tIHRoZSBnaXZlbiBhcmd1bWVudHMuXG4gICovXG4gIE9ic2VydmFibGUub2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIHJldHVybiBuZXcgRnJvbUFycmF5T2JzZXJ2YWJsZShhcmdzLCBjdXJyZW50VGhyZWFkU2NoZWR1bGVyKTtcbiAgfTtcblxuICAvKipcbiAgKiAgVGhpcyBtZXRob2QgY3JlYXRlcyBhIG5ldyBPYnNlcnZhYmxlIGluc3RhbmNlIHdpdGggYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLCByZWdhcmRsZXNzIG9mIG51bWJlciBvciB0eXBlIG9mIHRoZSBhcmd1bWVudHMuXG4gICogQHBhcmFtIHtTY2hlZHVsZXJ9IHNjaGVkdWxlciBBIHNjaGVkdWxlciB0byB1c2UgZm9yIHNjaGVkdWxpbmcgdGhlIGFyZ3VtZW50cy5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hvc2UgZWxlbWVudHMgYXJlIHB1bGxlZCBmcm9tIHRoZSBnaXZlbiBhcmd1bWVudHMuXG4gICovXG4gIE9ic2VydmFibGUub2ZXaXRoU2NoZWR1bGVyID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBsZW47IGkrKykgeyBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIHJldHVybiBuZXcgRnJvbUFycmF5T2JzZXJ2YWJsZShhcmdzLCBzY2hlZHVsZXIpO1xuICB9O1xuXG4gIHZhciBQYWlyc09ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoUGFpcnNPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFBhaXJzT2JzZXJ2YWJsZShvYmosIHNjaGVkdWxlcikge1xuICAgICAgdGhpcy5vYmogPSBvYmo7XG4gICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBQYWlyc09ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBzaW5rID0gbmV3IFBhaXJzU2luayhvYnNlcnZlciwgdGhpcyk7XG4gICAgICByZXR1cm4gc2luay5ydW4oKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBhaXJzT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIGZ1bmN0aW9uIFBhaXJzU2luayhvYnNlcnZlciwgcGFyZW50KSB7XG4gICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG5cbiAgUGFpcnNTaW5rLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9ic2VydmVyID0gdGhpcy5vYnNlcnZlciwgb2JqID0gdGhpcy5wYXJlbnQub2JqLCBrZXlzID0gdGhpcy5wYXJlbnQua2V5cywgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgZnVuY3Rpb24gbG9vcFJlY3Vyc2l2ZShpLCByZWN1cnNlKSB7XG4gICAgICBpZiAoaSA8IGxlbikge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgb2JzZXJ2ZXIub25OZXh0KFtrZXksIG9ialtrZXldXSk7XG4gICAgICAgIHJlY3Vyc2UoaSArIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JzZXJ2ZXIub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlKDAsIGxvb3BSZWN1cnNpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFuIG9iamVjdCBpbnRvIGFuIG9ic2VydmFibGUgc2VxdWVuY2Ugb2YgW2tleSwgdmFsdWVdIHBhaXJzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIFNjaGVkdWxlciB0byBydW4gdGhlIGVudW1lcmF0aW9uIG9mIHRoZSBpbnB1dCBzZXF1ZW5jZSBvbi5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2Ugb2YgW2tleSwgdmFsdWVdIHBhaXJzIGZyb20gdGhlIG9iamVjdC5cbiAgICovXG4gIE9ic2VydmFibGUucGFpcnMgPSBmdW5jdGlvbiAob2JqLCBzY2hlZHVsZXIpIHtcbiAgICBzY2hlZHVsZXIgfHwgKHNjaGVkdWxlciA9IGN1cnJlbnRUaHJlYWRTY2hlZHVsZXIpO1xuICAgIHJldHVybiBuZXcgUGFpcnNPYnNlcnZhYmxlKG9iaiwgc2NoZWR1bGVyKTtcbiAgfTtcblxuICAgIHZhciBSYW5nZU9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoUmFuZ2VPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFJhbmdlT2JzZXJ2YWJsZShzdGFydCwgY291bnQsIHNjaGVkdWxlcikge1xuICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgdGhpcy5yYW5nZUNvdW50ID0gY291bnQ7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFJhbmdlT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIHNpbmsgPSBuZXcgUmFuZ2VTaW5rKG9ic2VydmVyLCB0aGlzKTtcbiAgICAgIHJldHVybiBzaW5rLnJ1bigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUmFuZ2VPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIFJhbmdlU2luayA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmFuZ2VTaW5rKG9ic2VydmVyLCBwYXJlbnQpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvb3BSZWN1cnNpdmUoc3RhcnQsIGNvdW50LCBvYnNlcnZlcikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGxvb3AgKGksIHJlY3Vyc2UpIHtcbiAgICAgICAgaWYgKGkgPCBjb3VudCkge1xuICAgICAgICAgIG9ic2VydmVyLm9uTmV4dChzdGFydCArIGkpO1xuICAgICAgICAgIHJlY3Vyc2UoaSArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgUmFuZ2VTaW5rLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2NoZWR1bGVyLnNjaGVkdWxlUmVjdXJzaXZlKFxuICAgICAgICAwLFxuICAgICAgICBsb29wUmVjdXJzaXZlKHRoaXMucGFyZW50LnN0YXJ0LCB0aGlzLnBhcmVudC5yYW5nZUNvdW50LCB0aGlzLm9ic2VydmVyKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJhbmdlU2luaztcbiAgfSgpKTtcblxuICAvKipcbiAgKiAgR2VuZXJhdGVzIGFuIG9ic2VydmFibGUgc2VxdWVuY2Ugb2YgaW50ZWdyYWwgbnVtYmVycyB3aXRoaW4gYSBzcGVjaWZpZWQgcmFuZ2UsIHVzaW5nIHRoZSBzcGVjaWZpZWQgc2NoZWR1bGVyIHRvIHNlbmQgb3V0IG9ic2VydmVyIG1lc3NhZ2VzLlxuICAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCBUaGUgdmFsdWUgb2YgdGhlIGZpcnN0IGludGVnZXIgaW4gdGhlIHNlcXVlbmNlLlxuICAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIHNlcXVlbnRpYWwgaW50ZWdlcnMgdG8gZ2VuZXJhdGUuXG4gICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIFNjaGVkdWxlciB0byBydW4gdGhlIGdlbmVyYXRvciBsb29wIG9uLiBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byBTY2hlZHVsZXIuY3VycmVudFRocmVhZC5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIGEgcmFuZ2Ugb2Ygc2VxdWVudGlhbCBpbnRlZ3JhbCBudW1iZXJzLlxuICAqL1xuICBPYnNlcnZhYmxlLnJhbmdlID0gZnVuY3Rpb24gKHN0YXJ0LCBjb3VudCwgc2NoZWR1bGVyKSB7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gY3VycmVudFRocmVhZFNjaGVkdWxlcik7XG4gICAgcmV0dXJuIG5ldyBSYW5nZU9ic2VydmFibGUoc3RhcnQsIGNvdW50LCBzY2hlZHVsZXIpO1xuICB9O1xuXG4gIHZhciBSZXBlYXRPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFJlcGVhdE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gUmVwZWF0T2JzZXJ2YWJsZSh2YWx1ZSwgcmVwZWF0Q291bnQsIHNjaGVkdWxlcikge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5yZXBlYXRDb3VudCA9IHJlcGVhdENvdW50ID09IG51bGwgPyAtMSA6IHJlcGVhdENvdW50O1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBSZXBlYXRPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICB2YXIgc2luayA9IG5ldyBSZXBlYXRTaW5rKG9ic2VydmVyLCB0aGlzKTtcbiAgICAgIHJldHVybiBzaW5rLnJ1bigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUmVwZWF0T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIGZ1bmN0aW9uIFJlcGVhdFNpbmsob2JzZXJ2ZXIsIHBhcmVudCkge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIFJlcGVhdFNpbmsucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb2JzZXJ2ZXIgPSB0aGlzLm9ic2VydmVyLCB2YWx1ZSA9IHRoaXMucGFyZW50LnZhbHVlO1xuICAgIGZ1bmN0aW9uIGxvb3BSZWN1cnNpdmUoaSwgcmVjdXJzZSkge1xuICAgICAgaWYgKGkgPT09IC0xIHx8IGkgPiAwKSB7XG4gICAgICAgIG9ic2VydmVyLm9uTmV4dCh2YWx1ZSk7XG4gICAgICAgIGkgPiAwICYmIGktLTtcbiAgICAgIH1cbiAgICAgIGlmIChpID09PSAwKSB7IHJldHVybiBvYnNlcnZlci5vbkNvbXBsZXRlZCgpOyB9XG4gICAgICByZWN1cnNlKGkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBhcmVudC5zY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmUodGhpcy5wYXJlbnQucmVwZWF0Q291bnQsIGxvb3BSZWN1cnNpdmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAgR2VuZXJhdGVzIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCByZXBlYXRzIHRoZSBnaXZlbiBlbGVtZW50IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHRpbWVzLCB1c2luZyB0aGUgc3BlY2lmaWVkIHNjaGVkdWxlciB0byBzZW5kIG91dCBvYnNlcnZlciBtZXNzYWdlcy5cbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgRWxlbWVudCB0byByZXBlYXQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByZXBlYXRDb3VudCBbT3B0aW9uYV0gTnVtYmVyIG9mIHRpbWVzIHRvIHJlcGVhdCB0aGUgZWxlbWVudC4gSWYgbm90IHNwZWNpZmllZCwgcmVwZWF0cyBpbmRlZmluaXRlbHkuXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBzY2hlZHVsZXIgU2NoZWR1bGVyIHRvIHJ1biB0aGUgcHJvZHVjZXIgbG9vcCBvbi4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gU2NoZWR1bGVyLmltbWVkaWF0ZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCByZXBlYXRzIHRoZSBnaXZlbiBlbGVtZW50IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHRpbWVzLlxuICAgKi9cbiAgT2JzZXJ2YWJsZS5yZXBlYXQgPSBmdW5jdGlvbiAodmFsdWUsIHJlcGVhdENvdW50LCBzY2hlZHVsZXIpIHtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBjdXJyZW50VGhyZWFkU2NoZWR1bGVyKTtcbiAgICByZXR1cm4gbmV3IFJlcGVhdE9ic2VydmFibGUodmFsdWUsIHJlcGVhdENvdW50LCBzY2hlZHVsZXIpO1xuICB9O1xuXG4gIHZhciBKdXN0T2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhKdXN0T2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBKdXN0T2JzZXJ2YWJsZSh2YWx1ZSwgc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIEp1c3RPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICB2YXIgc2luayA9IG5ldyBKdXN0U2luayhvYnNlcnZlciwgdGhpcy52YWx1ZSwgdGhpcy5zY2hlZHVsZXIpO1xuICAgICAgcmV0dXJuIHNpbmsucnVuKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIEp1c3RTaW5rKG9ic2VydmVyLCB2YWx1ZSwgc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZUl0ZW0ocywgc3RhdGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0YXRlWzBdLCBvYnNlcnZlciA9IHN0YXRlWzFdO1xuICAgICAgb2JzZXJ2ZXIub25OZXh0KHZhbHVlKTtcbiAgICAgIG9ic2VydmVyLm9uQ29tcGxldGVkKCk7XG4gICAgICByZXR1cm4gZGlzcG9zYWJsZUVtcHR5O1xuICAgIH1cblxuICAgIEp1c3RTaW5rLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBbdGhpcy52YWx1ZSwgdGhpcy5vYnNlcnZlcl07XG4gICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZXIgPT09IGltbWVkaWF0ZVNjaGVkdWxlciA/XG4gICAgICAgIHNjaGVkdWxlSXRlbShudWxsLCBzdGF0ZSkgOlxuICAgICAgICB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShzdGF0ZSwgc2NoZWR1bGVJdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEp1c3RPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyBhIHNpbmdsZSBlbGVtZW50LCB1c2luZyB0aGUgc3BlY2lmaWVkIHNjaGVkdWxlciB0byBzZW5kIG91dCBvYnNlcnZlciBtZXNzYWdlcy5cbiAgICogIFRoZXJlIGlzIGFuIGFsaWFzIGNhbGxlZCAnanVzdCcgb3IgYnJvd3NlcnMgPElFOS5cbiAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgU2luZ2xlIGVsZW1lbnQgaW4gdGhlIHJlc3VsdGluZyBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gc2NoZWR1bGVyIFNjaGVkdWxlciB0byBzZW5kIHRoZSBzaW5nbGUgZWxlbWVudCBvbi4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gU2NoZWR1bGVyLmltbWVkaWF0ZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgc2luZ2xlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgKi9cbiAgdmFyIG9ic2VydmFibGVSZXR1cm4gPSBPYnNlcnZhYmxlWydyZXR1cm4nXSA9IE9ic2VydmFibGUuanVzdCA9IGZ1bmN0aW9uICh2YWx1ZSwgc2NoZWR1bGVyKSB7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gaW1tZWRpYXRlU2NoZWR1bGVyKTtcbiAgICByZXR1cm4gbmV3IEp1c3RPYnNlcnZhYmxlKHZhbHVlLCBzY2hlZHVsZXIpO1xuICB9O1xuXG4gIHZhciBUaHJvd09ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGhyb3dPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFRocm93T2JzZXJ2YWJsZShlcnJvciwgc2NoZWR1bGVyKSB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRocm93T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgc2luayA9IG5ldyBUaHJvd1NpbmsobywgdGhpcyk7XG4gICAgICByZXR1cm4gc2luay5ydW4oKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gVGhyb3dTaW5rKG8sIHApIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLnAgPSBwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlSXRlbShzLCBzdGF0ZSkge1xuICAgICAgdmFyIGUgPSBzdGF0ZVswXSwgbyA9IHN0YXRlWzFdO1xuICAgICAgby5vbkVycm9yKGUpO1xuICAgIH1cblxuICAgIFRocm93U2luay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucC5zY2hlZHVsZXIuc2NoZWR1bGUoW3RoaXMucC5lcnJvciwgdGhpcy5vXSwgc2NoZWR1bGVJdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRocm93T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgdGVybWluYXRlcyB3aXRoIGFuIGV4Y2VwdGlvbiwgdXNpbmcgdGhlIHNwZWNpZmllZCBzY2hlZHVsZXIgdG8gc2VuZCBvdXQgdGhlIHNpbmdsZSBvbkVycm9yIG1lc3NhZ2UuXG4gICAqICBUaGVyZSBpcyBhbiBhbGlhcyB0byB0aGlzIG1ldGhvZCBjYWxsZWQgJ3Rocm93RXJyb3InIGZvciBicm93c2VycyA8SUU5LlxuICAgKiBAcGFyYW0ge01peGVkfSBlcnJvciBBbiBvYmplY3QgdXNlZCBmb3IgdGhlIHNlcXVlbmNlJ3MgdGVybWluYXRpb24uXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBzY2hlZHVsZXIgU2NoZWR1bGVyIHRvIHNlbmQgdGhlIGV4Y2VwdGlvbmFsIHRlcm1pbmF0aW9uIGNhbGwgb24uIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFNjaGVkdWxlci5pbW1lZGlhdGUuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHRlcm1pbmF0ZXMgZXhjZXB0aW9uYWxseSB3aXRoIHRoZSBzcGVjaWZpZWQgZXhjZXB0aW9uIG9iamVjdC5cbiAgICovXG4gIHZhciBvYnNlcnZhYmxlVGhyb3cgPSBPYnNlcnZhYmxlWyd0aHJvdyddID0gZnVuY3Rpb24gKGVycm9yLCBzY2hlZHVsZXIpIHtcbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBpbW1lZGlhdGVTY2hlZHVsZXIpO1xuICAgIHJldHVybiBuZXcgVGhyb3dPYnNlcnZhYmxlKGVycm9yLCBzY2hlZHVsZXIpO1xuICB9O1xuXG4gIHZhciBDYXRjaE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKENhdGNoT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDYXRjaE9ic2VydmFibGUoc291cmNlLCBmbikge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgQ2F0Y2hPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBkMSA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpLCBzdWJzY3JpcHRpb24gPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpO1xuICAgICAgc3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUoZDEpO1xuICAgICAgZDEuc2V0RGlzcG9zYWJsZSh0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IENhdGNoT2JzZXJ2ZXIobywgc3Vic2NyaXB0aW9uLCB0aGlzLl9mbikpKTtcbiAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcblxuICAgIHJldHVybiBDYXRjaE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgQ2F0Y2hPYnNlcnZlciA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhDYXRjaE9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIENhdGNoT2JzZXJ2ZXIobywgcywgZm4pIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fcyA9IHM7XG4gICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgQ2F0Y2hPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7IHRoaXMuX28ub25OZXh0KHgpOyB9O1xuICAgIENhdGNoT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX28ub25Db21wbGV0ZWQoKTsgfTtcbiAgICBDYXRjaE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godGhpcy5fZm4pKGUpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuX28ub25FcnJvcihyZXN1bHQuZSk7IH1cbiAgICAgIGlzUHJvbWlzZShyZXN1bHQpICYmIChyZXN1bHQgPSBvYnNlcnZhYmxlRnJvbVByb21pc2UocmVzdWx0KSk7XG5cbiAgICAgIHZhciBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICB0aGlzLl9zLnNldERpc3Bvc2FibGUoZCk7XG4gICAgICBkLnNldERpc3Bvc2FibGUocmVzdWx0LnN1YnNjcmliZSh0aGlzLl9vKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBDYXRjaE9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogQ29udGludWVzIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBpcyB0ZXJtaW5hdGVkIGJ5IGFuIGV4Y2VwdGlvbiB3aXRoIHRoZSBuZXh0IG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGhhbmRsZXJPclNlY29uZCBFeGNlcHRpb24gaGFuZGxlciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBnaXZlbiB0aGUgZXJyb3IgdGhhdCBvY2N1cnJlZCBpbiB0aGUgZmlyc3Qgc2VxdWVuY2UsIG9yIGEgc2Vjb25kIG9ic2VydmFibGUgc2VxdWVuY2UgdXNlZCB0byBwcm9kdWNlIHJlc3VsdHMgd2hlbiBhbiBlcnJvciBvY2N1cnJlZCBpbiB0aGUgZmlyc3Qgc2VxdWVuY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIGZpcnN0IHNlcXVlbmNlJ3MgZWxlbWVudHMsIGZvbGxvd2VkIGJ5IHRoZSBlbGVtZW50cyBvZiB0aGUgaGFuZGxlciBzZXF1ZW5jZSBpbiBjYXNlIGFuIGV4Y2VwdGlvbiBvY2N1cnJlZC5cbiAgICovXG4gIG9ic2VydmFibGVQcm90b1snY2F0Y2gnXSA9IGZ1bmN0aW9uIChoYW5kbGVyT3JTZWNvbmQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihoYW5kbGVyT3JTZWNvbmQpID8gbmV3IENhdGNoT2JzZXJ2YWJsZSh0aGlzLCBoYW5kbGVyT3JTZWNvbmQpIDogb2JzZXJ2YWJsZUNhdGNoKFt0aGlzLCBoYW5kbGVyT3JTZWNvbmRdKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udGludWVzIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBpcyB0ZXJtaW5hdGVkIGJ5IGFuIGV4Y2VwdGlvbiB3aXRoIHRoZSBuZXh0IG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEBwYXJhbSB7QXJyYXkgfCBBcmd1bWVudHN9IGFyZ3MgQXJndW1lbnRzIG9yIGFuIGFycmF5IHRvIHVzZSBhcyB0aGUgbmV4dCBzZXF1ZW5jZSBpZiBhbiBlcnJvciBvY2N1cnMuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgZWxlbWVudHMgZnJvbSBjb25zZWN1dGl2ZSBzb3VyY2Ugc2VxdWVuY2VzIHVudGlsIGEgc291cmNlIHNlcXVlbmNlIHRlcm1pbmF0ZXMgc3VjY2Vzc2Z1bGx5LlxuICAgKi9cbiAgdmFyIG9ic2VydmFibGVDYXRjaCA9IE9ic2VydmFibGVbJ2NhdGNoJ10gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGl0ZW1zO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgIGl0ZW1zID0gYXJndW1lbnRzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGl0ZW1zID0gbmV3IEFycmF5KGxlbik7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgaXRlbXNbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICB9XG4gICAgcmV0dXJuIGVudW1lcmFibGVPZihpdGVtcykuY2F0Y2hFcnJvcigpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNZXJnZXMgdGhlIHNwZWNpZmllZCBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIG9uZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGJ5IHVzaW5nIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB3aGVuZXZlciBhbnkgb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2VzIG9yIFByb21pc2VzIHByb2R1Y2VzIGFuIGVsZW1lbnQuXG4gICAqIFRoaXMgY2FuIGJlIGluIHRoZSBmb3JtIG9mIGFuIGFyZ3VtZW50IGxpc3Qgb2Ygb2JzZXJ2YWJsZXMgb3IgYW4gYXJyYXkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIDEgLSBvYnMgPSBvYnNlcnZhYmxlLmNvbWJpbmVMYXRlc3Qob2JzMSwgb2JzMiwgb2JzMywgZnVuY3Rpb24gKG8xLCBvMiwgbzMpIHsgcmV0dXJuIG8xICsgbzIgKyBvMzsgfSk7XG4gICAqIDIgLSBvYnMgPSBvYnNlcnZhYmxlLmNvbWJpbmVMYXRlc3QoW29iczEsIG9iczIsIG9iczNdLCBmdW5jdGlvbiAobzEsIG8yLCBvMykgeyByZXR1cm4gbzEgKyBvMiArIG8zOyB9KTtcbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgcmVzdWx0IG9mIGNvbWJpbmluZyBlbGVtZW50cyBvZiB0aGUgc291cmNlcyB1c2luZyB0aGUgc3BlY2lmaWVkIHJlc3VsdCBzZWxlY3RvciBmdW5jdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5jb21iaW5lTGF0ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgYXJnc1swXS51bnNoaWZ0KHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzLnVuc2hpZnQodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZhbHNlRmFjdG9yeSgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGZ1bmN0aW9uIGFyZ3VtZW50c1RvQXJyYXkoKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIHJldHVybiBhcmdzO1xuICB9XG5cbiAgdmFyIENvbWJpbmVMYXRlc3RPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKENvbWJpbmVMYXRlc3RPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIENvbWJpbmVMYXRlc3RPYnNlcnZhYmxlKHBhcmFtcywgY2IpIHtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICAgIHRoaXMuX2NiID0gY2I7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBDb21iaW5lTGF0ZXN0T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICB2YXIgbGVuID0gdGhpcy5fcGFyYW1zLmxlbmd0aCxcbiAgICAgICAgICBzdWJzY3JpcHRpb25zID0gbmV3IEFycmF5KGxlbik7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgaGFzVmFsdWU6IGFycmF5SW5pdGlhbGl6ZShsZW4sIGZhbHNlRmFjdG9yeSksXG4gICAgICAgIGhhc1ZhbHVlQWxsOiBmYWxzZSxcbiAgICAgICAgaXNEb25lOiBhcnJheUluaXRpYWxpemUobGVuLCBmYWxzZUZhY3RvcnkpLFxuICAgICAgICB2YWx1ZXM6IG5ldyBBcnJheShsZW4pXG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLl9wYXJhbXNbaV0sIHNhZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICBzdWJzY3JpcHRpb25zW2ldID0gc2FkO1xuICAgICAgICBpc1Byb21pc2Uoc291cmNlKSAmJiAoc291cmNlID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHNvdXJjZSkpO1xuICAgICAgICBzYWQuc2V0RGlzcG9zYWJsZShzb3VyY2Uuc3Vic2NyaWJlKG5ldyBDb21iaW5lTGF0ZXN0T2JzZXJ2ZXIob2JzZXJ2ZXIsIGksIHRoaXMuX2NiLCBzdGF0ZSkpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBOQXJ5RGlzcG9zYWJsZShzdWJzY3JpcHRpb25zKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENvbWJpbmVMYXRlc3RPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIENvbWJpbmVMYXRlc3RPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQ29tYmluZUxhdGVzdE9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIENvbWJpbmVMYXRlc3RPYnNlcnZlcihvLCBpLCBjYiwgc3RhdGUpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5faSA9IGk7XG4gICAgICB0aGlzLl9jYiA9IGNiO1xuICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vdFRoZVNhbWUoaSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh4LCBqKSB7XG4gICAgICAgIHJldHVybiBqICE9PSBpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBDb21iaW5lTGF0ZXN0T2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fc3RhdGUudmFsdWVzW3RoaXMuX2ldID0geDtcbiAgICAgIHRoaXMuX3N0YXRlLmhhc1ZhbHVlW3RoaXMuX2ldID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLl9zdGF0ZS5oYXNWYWx1ZUFsbCB8fCAodGhpcy5fc3RhdGUuaGFzVmFsdWVBbGwgPSB0aGlzLl9zdGF0ZS5oYXNWYWx1ZS5ldmVyeShpZGVudGl0eSkpKSB7XG4gICAgICAgIHZhciByZXMgPSB0cnlDYXRjaCh0aGlzLl9jYikuYXBwbHkobnVsbCwgdGhpcy5fc3RhdGUudmFsdWVzKTtcbiAgICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuX28ub25FcnJvcihyZXMuZSk7IH1cbiAgICAgICAgdGhpcy5fby5vbk5leHQocmVzKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUuaXNEb25lLmZpbHRlcihub3RUaGVTYW1lKHRoaXMuX2kpKS5ldmVyeShpZGVudGl0eSkpIHtcbiAgICAgICAgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb21iaW5lTGF0ZXN0T2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgQ29tYmluZUxhdGVzdE9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc0RvbmVbdGhpcy5faV0gPSB0cnVlO1xuICAgICAgdGhpcy5fc3RhdGUuaXNEb25lLmV2ZXJ5KGlkZW50aXR5KSAmJiB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb21iaW5lTGF0ZXN0T2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAqIE1lcmdlcyB0aGUgc3BlY2lmaWVkIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gb25lIG9ic2VydmFibGUgc2VxdWVuY2UgYnkgdXNpbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHdoZW5ldmVyIGFueSBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgb3IgUHJvbWlzZXMgcHJvZHVjZXMgYW4gZWxlbWVudC5cbiAgKlxuICAqIEBleGFtcGxlXG4gICogMSAtIG9icyA9IFJ4Lk9ic2VydmFibGUuY29tYmluZUxhdGVzdChvYnMxLCBvYnMyLCBvYnMzLCBmdW5jdGlvbiAobzEsIG8yLCBvMykgeyByZXR1cm4gbzEgKyBvMiArIG8zOyB9KTtcbiAgKiAyIC0gb2JzID0gUnguT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KFtvYnMxLCBvYnMyLCBvYnMzXSwgZnVuY3Rpb24gKG8xLCBvMiwgbzMpIHsgcmV0dXJuIG8xICsgbzIgKyBvMzsgfSk7XG4gICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgcmVzdWx0IG9mIGNvbWJpbmluZyBlbGVtZW50cyBvZiB0aGUgc291cmNlcyB1c2luZyB0aGUgc3BlY2lmaWVkIHJlc3VsdCBzZWxlY3RvciBmdW5jdGlvbi5cbiAgKi9cbiAgdmFyIGNvbWJpbmVMYXRlc3QgPSBPYnNlcnZhYmxlLmNvbWJpbmVMYXRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIHZhciByZXN1bHRTZWxlY3RvciA9IGlzRnVuY3Rpb24oYXJnc1tsZW4gLSAxXSkgPyBhcmdzLnBvcCgpIDogYXJndW1lbnRzVG9BcnJheTtcbiAgICBBcnJheS5pc0FycmF5KGFyZ3NbMF0pICYmIChhcmdzID0gYXJnc1swXSk7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lTGF0ZXN0T2JzZXJ2YWJsZShhcmdzLCByZXN1bHRTZWxlY3Rvcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbmNhdGVuYXRlcyBhbGwgdGhlIG9ic2VydmFibGUgc2VxdWVuY2VzLiAgVGhpcyB0YWtlcyBpbiBlaXRoZXIgYW4gYXJyYXkgb3IgdmFyaWFibGUgYXJndW1lbnRzIHRvIGNvbmNhdGVuYXRlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBlYWNoIGdpdmVuIHNlcXVlbmNlLCBpbiBzZXF1ZW50aWFsIG9yZGVyLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmNvbmNhdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IodmFyIGFyZ3MgPSBbXSwgaSA9IDAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykgeyBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTsgfVxuICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZUNvbmNhdC5hcHBseShudWxsLCBhcmdzKTtcbiAgfTtcblxuICB2YXIgQ29uY2F0T2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhDb25jYXRPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIENvbmNhdE9ic2VydmFibGUoc291cmNlcykge1xuICAgICAgdGhpcy5zb3VyY2VzID0gc291cmNlcztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIENvbmNhdE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvKSB7XG4gICAgICB2YXIgc2luayA9IG5ldyBDb25jYXRTaW5rKHRoaXMuc291cmNlcywgbyk7XG4gICAgICByZXR1cm4gc2luay5ydW4oKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gQ29uY2F0U2luayhzb3VyY2VzLCBvKSB7XG4gICAgICB0aGlzLnNvdXJjZXMgPSBzb3VyY2VzO1xuICAgICAgdGhpcy5vID0gbztcbiAgICB9XG4gICAgQ29uY2F0U2luay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlzRGlzcG9zZWQsIHN1YnNjcmlwdGlvbiA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCksIHNvdXJjZXMgPSB0aGlzLnNvdXJjZXMsIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLCBvID0gdGhpcy5vO1xuICAgICAgdmFyIGNhbmNlbGFibGUgPSBpbW1lZGlhdGVTY2hlZHVsZXIuc2NoZWR1bGVSZWN1cnNpdmUoMCwgZnVuY3Rpb24gKGksIHNlbGYpIHtcbiAgICAgICAgaWYgKGlzRGlzcG9zZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmIChpID09PSBsZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgcHJvbWlzZVxuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gc291cmNlc1tpXTtcbiAgICAgICAgaXNQcm9taXNlKGN1cnJlbnRWYWx1ZSkgJiYgKGN1cnJlbnRWYWx1ZSA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShjdXJyZW50VmFsdWUpKTtcblxuICAgICAgICB2YXIgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShkKTtcbiAgICAgICAgZC5zZXREaXNwb3NhYmxlKGN1cnJlbnRWYWx1ZS5zdWJzY3JpYmUoXG4gICAgICAgICAgZnVuY3Rpb24gKHgpIHsgby5vbk5leHQoeCk7IH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHsgby5vbkVycm9yKGUpOyB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgpIHsgc2VsZihpICsgMSk7IH1cbiAgICAgICAgKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKHN1YnNjcmlwdGlvbiwgY2FuY2VsYWJsZSwgZGlzcG9zYWJsZUNyZWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgfSkpO1xuICAgIH07XG5cblxuICAgIHJldHVybiBDb25jYXRPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICAqIENvbmNhdGVuYXRlcyBhbGwgdGhlIG9ic2VydmFibGUgc2VxdWVuY2VzLlxuICAgKiBAcGFyYW0ge0FycmF5IHwgQXJndW1lbnRzfSBhcmdzIEFyZ3VtZW50cyBvciBhbiBhcnJheSB0byBjb25jYXQgdG8gdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGVhY2ggZ2l2ZW4gc2VxdWVuY2UsIGluIHNlcXVlbnRpYWwgb3JkZXIuXG4gICAqL1xuICB2YXIgb2JzZXJ2YWJsZUNvbmNhdCA9IE9ic2VydmFibGUuY29uY2F0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICBmb3IodmFyIGkgPSAwLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IENvbmNhdE9ic2VydmFibGUoYXJncyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbmNhdGVuYXRlcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIG9mIG9ic2VydmFibGUgc2VxdWVuY2VzLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBlYWNoIG9ic2VydmVkIGlubmVyIHNlcXVlbmNlLCBpbiBzZXF1ZW50aWFsIG9yZGVyLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmNvbmNhdEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXJnZSgxKTtcbiAgfTtcblxuICB2YXIgTWVyZ2VPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhNZXJnZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBNZXJnZU9ic2VydmFibGUoc291cmNlLCBtYXhDb25jdXJyZW50KSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IG1heENvbmN1cnJlbnQ7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBNZXJnZU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbihvYnNlcnZlcikge1xuICAgICAgdmFyIGcgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpO1xuICAgICAgZy5hZGQodGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBNZXJnZU9ic2VydmVyKG9ic2VydmVyLCB0aGlzLm1heENvbmN1cnJlbnQsIGcpKSk7XG4gICAgICByZXR1cm4gZztcbiAgICB9O1xuXG4gICAgcmV0dXJuIE1lcmdlT2JzZXJ2YWJsZTtcblxuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIE1lcmdlT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lcmdlT2JzZXJ2ZXIobywgbWF4LCBnKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5tYXggPSBtYXg7XG4gICAgICB0aGlzLmcgPSBnO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLnEgPSBbXTtcbiAgICAgIHRoaXMuYWN0aXZlQ291bnQgPSAwO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgTWVyZ2VPYnNlcnZlci5wcm90b3R5cGUuaGFuZGxlU3Vic2NyaWJlID0gZnVuY3Rpb24gKHhzKSB7XG4gICAgICB2YXIgc2FkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICB0aGlzLmcuYWRkKHNhZCk7XG4gICAgICBpc1Byb21pc2UoeHMpICYmICh4cyA9IG9ic2VydmFibGVGcm9tUHJvbWlzZSh4cykpO1xuICAgICAgc2FkLnNldERpc3Bvc2FibGUoeHMuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKHRoaXMsIHNhZCkpKTtcbiAgICB9O1xuICAgIE1lcmdlT2JzZXJ2ZXIucHJvdG90eXBlLm9uTmV4dCA9IGZ1bmN0aW9uIChpbm5lclNvdXJjZSkge1xuICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgICBpZih0aGlzLmFjdGl2ZUNvdW50IDwgdGhpcy5tYXgpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNvdW50Kys7XG4gICAgICAgICAgdGhpcy5oYW5kbGVTdWJzY3JpYmUoaW5uZXJTb3VyY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucS5wdXNoKGlubmVyU291cmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIE1lcmdlT2JzZXJ2ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuby5vbkVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgTWVyZ2VPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNvdW50ID09PSAwICYmIHRoaXMuby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgTWVyZ2VPYnNlcnZlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmlzU3RvcHBlZCA9IHRydWU7IH07XG4gICAgICBNZXJnZU9ic2VydmVyLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm8ub25FcnJvcihlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIocGFyZW50LCBzYWQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuc2FkID0gc2FkO1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25OZXh0ID0gZnVuY3Rpb24gKHgpIHsgaWYoIXRoaXMuaXNTdG9wcGVkKSB7IHRoaXMucGFyZW50Lm8ub25OZXh0KHgpOyB9IH07XG4gICAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnBhcmVudC5vLm9uRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgICBwYXJlbnQuZy5yZW1vdmUodGhpcy5zYWQpO1xuICAgICAgICAgIGlmIChwYXJlbnQucS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXJlbnQuaGFuZGxlU3Vic2NyaWJlKHBhcmVudC5xLnNoaWZ0KCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuYWN0aXZlQ291bnQtLTtcbiAgICAgICAgICAgIHBhcmVudC5kb25lICYmIHBhcmVudC5hY3RpdmVDb3VudCA9PT0gMCAmJiBwYXJlbnQuby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdGhpcy5pc1N0b3BwZWQgPSB0cnVlOyB9O1xuICAgICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wYXJlbnQuby5vbkVycm9yKGUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIE1lcmdlT2JzZXJ2ZXI7XG4gIH0oKSk7XG5cblxuXG5cblxuICAvKipcbiAgKiBNZXJnZXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvZiBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIGFuIG9ic2VydmFibGUgc2VxdWVuY2UsIGxpbWl0aW5nIHRoZSBudW1iZXIgb2YgY29uY3VycmVudCBzdWJzY3JpcHRpb25zIHRvIGlubmVyIHNlcXVlbmNlcy5cbiAgKiBPciBtZXJnZXMgdHdvIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gYSBzaW5nbGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKlxuICAqIEBleGFtcGxlXG4gICogMSAtIG1lcmdlZCA9IHNvdXJjZXMubWVyZ2UoMSk7XG4gICogMiAtIG1lcmdlZCA9IHNvdXJjZS5tZXJnZShvdGhlclNvdXJjZSk7XG4gICogQHBhcmFtIHtNaXhlZH0gW21heENvbmN1cnJlbnRPck90aGVyXSBNYXhpbXVtIG51bWJlciBvZiBpbm5lciBvYnNlcnZhYmxlIHNlcXVlbmNlcyBiZWluZyBzdWJzY3JpYmVkIHRvIGNvbmN1cnJlbnRseSBvciB0aGUgc2Vjb25kIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgbWVyZ2VzIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5uZXIgc2VxdWVuY2VzLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ubWVyZ2UgPSBmdW5jdGlvbiAobWF4Q29uY3VycmVudE9yT3RoZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIG1heENvbmN1cnJlbnRPck90aGVyICE9PSAnbnVtYmVyJyA/XG4gICAgICBvYnNlcnZhYmxlTWVyZ2UodGhpcywgbWF4Q29uY3VycmVudE9yT3RoZXIpIDpcbiAgICAgIG5ldyBNZXJnZU9ic2VydmFibGUodGhpcywgbWF4Q29uY3VycmVudE9yT3RoZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNZXJnZXMgYWxsIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIGEgc2luZ2xlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIFRoZSBzY2hlZHVsZXIgaXMgb3B0aW9uYWwgYW5kIGlmIG5vdCBzcGVjaWZpZWQsIHRoZSBpbW1lZGlhdGUgc2NoZWR1bGVyIGlzIHVzZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IG1lcmdlcyB0aGUgZWxlbWVudHMgb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2VzLlxuICAgKi9cbiAgdmFyIG9ic2VydmFibGVNZXJnZSA9IE9ic2VydmFibGUubWVyZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNjaGVkdWxlciwgc291cmNlcyA9IFtdLCBpLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmICghYXJndW1lbnRzWzBdKSB7XG4gICAgICBzY2hlZHVsZXIgPSBpbW1lZGlhdGVTY2hlZHVsZXI7XG4gICAgICBmb3IoaSA9IDE7IGkgPCBsZW47IGkrKykgeyBzb3VyY2VzLnB1c2goYXJndW1lbnRzW2ldKTsgfVxuICAgIH0gZWxzZSBpZiAoaXNTY2hlZHVsZXIoYXJndW1lbnRzWzBdKSkge1xuICAgICAgc2NoZWR1bGVyID0gYXJndW1lbnRzWzBdO1xuICAgICAgZm9yKGkgPSAxOyBpIDwgbGVuOyBpKyspIHsgc291cmNlcy5wdXNoKGFyZ3VtZW50c1tpXSk7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVyID0gaW1tZWRpYXRlU2NoZWR1bGVyO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgc291cmNlcy5wdXNoKGFyZ3VtZW50c1tpXSk7IH1cbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlc1swXSkpIHtcbiAgICAgIHNvdXJjZXMgPSBzb3VyY2VzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHNjaGVkdWxlciwgc291cmNlcykubWVyZ2VBbGwoKTtcbiAgfTtcblxuICB2YXIgQ29tcG9zaXRlRXJyb3IgPSBSeC5Db21wb3NpdGVFcnJvciA9IGZ1bmN0aW9uKGVycm9ycykge1xuICAgIHRoaXMuaW5uZXJFcnJvcnMgPSBlcnJvcnM7XG4gICAgdGhpcy5tZXNzYWdlID0gJ1RoaXMgY29udGFpbnMgbXVsdGlwbGUgZXJyb3JzLiBDaGVjayB0aGUgaW5uZXJFcnJvcnMnO1xuICAgIEVycm9yLmNhbGwodGhpcyk7XG4gIH07XG4gIENvbXBvc2l0ZUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbiAgQ29tcG9zaXRlRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnQ29tcG9zaXRlRXJyb3InO1xuXG4gIHZhciBNZXJnZURlbGF5RXJyb3JPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE1lcmdlRGVsYXlFcnJvck9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gTWVyZ2VEZWxheUVycm9yT2JzZXJ2YWJsZShzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTWVyZ2VEZWxheUVycm9yT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgZ3JvdXAgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZSgpLFxuICAgICAgICBtID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCksXG4gICAgICAgIHN0YXRlID0geyBpc1N0b3BwZWQ6IGZhbHNlLCBlcnJvcnM6IFtdLCBvOiBvIH07XG5cbiAgICAgIGdyb3VwLmFkZChtKTtcbiAgICAgIG0uc2V0RGlzcG9zYWJsZSh0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IE1lcmdlRGVsYXlFcnJvck9ic2VydmVyKGdyb3VwLCBzdGF0ZSkpKTtcblxuICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH07XG5cbiAgICByZXR1cm4gTWVyZ2VEZWxheUVycm9yT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBNZXJnZURlbGF5RXJyb3JPYnNlcnZlciA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhNZXJnZURlbGF5RXJyb3JPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBNZXJnZURlbGF5RXJyb3JPYnNlcnZlcihncm91cCwgc3RhdGUpIHtcbiAgICAgIHRoaXMuX2dyb3VwID0gZ3JvdXA7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q29tcGxldGlvbihvLCBlcnJvcnMpIHtcbiAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvLm9uRXJyb3IoZXJyb3JzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG8ub25FcnJvcihuZXcgQ29tcG9zaXRlRXJyb3IoZXJyb3JzKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTWVyZ2VEZWxheUVycm9yT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdmFyIGlubmVyID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICB0aGlzLl9ncm91cC5hZGQoaW5uZXIpO1xuXG4gICAgICAvLyBDaGVjayBmb3IgcHJvbWlzZXMgc3VwcG9ydFxuICAgICAgaXNQcm9taXNlKHgpICYmICh4ID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHgpKTtcbiAgICAgIGlubmVyLnNldERpc3Bvc2FibGUoeC5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIoaW5uZXIsIHRoaXMuX2dyb3VwLCB0aGlzLl9zdGF0ZSkpKTtcbiAgICB9O1xuXG4gICAgTWVyZ2VEZWxheUVycm9yT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX3N0YXRlLmVycm9ycy5wdXNoKGUpO1xuICAgICAgdGhpcy5fc3RhdGUuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2dyb3VwLmxlbmd0aCA9PT0gMSAmJiBzZXRDb21wbGV0aW9uKHRoaXMuX3N0YXRlLm8sIHRoaXMuX3N0YXRlLmVycm9ycyk7XG4gICAgfTtcblxuICAgIE1lcmdlRGVsYXlFcnJvck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZ3JvdXAubGVuZ3RoID09PSAxICYmIHNldENvbXBsZXRpb24odGhpcy5fc3RhdGUubywgdGhpcy5fc3RhdGUuZXJyb3JzKTtcbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoSW5uZXJPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKGlubmVyLCBncm91cCwgc3RhdGUpIHtcbiAgICAgIHRoaXMuX2lubmVyID0gaW5uZXI7XG4gICAgICB0aGlzLl9ncm91cCA9IGdyb3VwO1xuICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkgeyB0aGlzLl9zdGF0ZS5vLm9uTmV4dCh4KTsgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9zdGF0ZS5lcnJvcnMucHVzaChlKTtcbiAgICAgIHRoaXMuX2dyb3VwLnJlbW92ZSh0aGlzLl9pbm5lcik7XG4gICAgICB0aGlzLl9zdGF0ZS5pc1N0b3BwZWQgJiYgdGhpcy5fZ3JvdXAubGVuZ3RoID09PSAxICYmIHNldENvbXBsZXRpb24odGhpcy5fc3RhdGUubywgdGhpcy5fc3RhdGUuZXJyb3JzKTtcbiAgICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2dyb3VwLnJlbW92ZSh0aGlzLl9pbm5lcik7XG4gICAgICB0aGlzLl9zdGF0ZS5pc1N0b3BwZWQgJiYgdGhpcy5fZ3JvdXAubGVuZ3RoID09PSAxICYmIHNldENvbXBsZXRpb24odGhpcy5fc3RhdGUubywgdGhpcy5fc3RhdGUuZXJyb3JzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE1lcmdlRGVsYXlFcnJvck9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgKiBGbGF0dGVucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgT2JzZXJ2YWJsZXMgaW50byBvbmUgT2JzZXJ2YWJsZSwgaW4gYSB3YXkgdGhhdCBhbGxvd3MgYW4gT2JzZXJ2ZXIgdG9cbiAgKiByZWNlaXZlIGFsbCBzdWNjZXNzZnVsbHkgZW1pdHRlZCBpdGVtcyBmcm9tIGFsbCBvZiB0aGUgc291cmNlIE9ic2VydmFibGVzIHdpdGhvdXQgYmVpbmcgaW50ZXJydXB0ZWQgYnlcbiAgKiBhbiBlcnJvciBub3RpZmljYXRpb24gZnJvbSBvbmUgb2YgdGhlbS5cbiAgKlxuICAqIFRoaXMgYmVoYXZlcyBsaWtlIE9ic2VydmFibGUucHJvdG90eXBlLm1lcmdlQWxsIGV4Y2VwdCB0aGF0IGlmIGFueSBvZiB0aGUgbWVyZ2VkIE9ic2VydmFibGVzIG5vdGlmeSBvZiBhblxuICAqIGVycm9yIHZpYSB0aGUgT2JzZXJ2ZXIncyBvbkVycm9yLCBtZXJnZURlbGF5RXJyb3Igd2lsbCByZWZyYWluIGZyb20gcHJvcGFnYXRpbmcgdGhhdFxuICAqIGVycm9yIG5vdGlmaWNhdGlvbiB1bnRpbCBhbGwgb2YgdGhlIG1lcmdlZCBPYnNlcnZhYmxlcyBoYXZlIGZpbmlzaGVkIGVtaXR0aW5nIGl0ZW1zLlxuICAqIEBwYXJhbSB7QXJyYXkgfCBBcmd1bWVudHN9IGFyZ3MgQXJndW1lbnRzIG9yIGFuIGFycmF5IHRvIG1lcmdlLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYWxsIG9mIHRoZSBpdGVtcyBlbWl0dGVkIGJ5IHRoZSBPYnNlcnZhYmxlcyBlbWl0dGVkIGJ5IHRoZSBPYnNlcnZhYmxlXG4gICovXG4gIE9ic2VydmFibGUubWVyZ2VEZWxheUVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3M7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSkge1xuICAgICAgYXJncyA9IGFyZ3VtZW50c1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIH1cbiAgICB2YXIgc291cmNlID0gb2JzZXJ2YWJsZU9mKG51bGwsIGFyZ3MpO1xuICAgIHJldHVybiBuZXcgTWVyZ2VEZWxheUVycm9yT2JzZXJ2YWJsZShzb3VyY2UpO1xuICB9O1xuXG4gIHZhciBNZXJnZUFsbE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE1lcmdlQWxsT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIE1lcmdlQWxsT2JzZXJ2YWJsZShzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTWVyZ2VBbGxPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICB2YXIgZyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKCksIG0gPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIGcuYWRkKG0pO1xuICAgICAgbS5zZXREaXNwb3NhYmxlKHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgTWVyZ2VBbGxPYnNlcnZlcihvYnNlcnZlciwgZykpKTtcbiAgICAgIHJldHVybiBnO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBNZXJnZUFsbE9ic2VydmVyKG8sIGcpIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLmcgPSBnO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIH1cbiAgICBNZXJnZUFsbE9ic2VydmVyLnByb3RvdHlwZS5vbk5leHQgPSBmdW5jdGlvbihpbm5lclNvdXJjZSkge1xuICAgICAgaWYodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICB2YXIgc2FkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICB0aGlzLmcuYWRkKHNhZCk7XG5cbiAgICAgIGlzUHJvbWlzZShpbm5lclNvdXJjZSkgJiYgKGlubmVyU291cmNlID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKGlubmVyU291cmNlKSk7XG5cbiAgICAgIHNhZC5zZXREaXNwb3NhYmxlKGlubmVyU291cmNlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcih0aGlzLCBzYWQpKSk7XG4gICAgfTtcbiAgICBNZXJnZUFsbE9ic2VydmVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuby5vbkVycm9yKGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgTWVyZ2VBbGxPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZighdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmcubGVuZ3RoID09PSAxICYmIHRoaXMuby5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgTWVyZ2VBbGxPYnNlcnZlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmlzU3RvcHBlZCA9IHRydWU7IH07XG4gICAgTWVyZ2VBbGxPYnNlcnZlci5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vLm9uRXJyb3IoZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIocGFyZW50LCBzYWQpIHtcbiAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgdGhpcy5zYWQgPSBzYWQ7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbk5leHQgPSBmdW5jdGlvbiAoeCkgeyBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7IHRoaXMucGFyZW50Lm8ub25OZXh0KHgpOyB9IH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZighdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhcmVudC5vLm9uRXJyb3IoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgcGFyZW50LmcucmVtb3ZlKHRoaXMuc2FkKTtcbiAgICAgICAgcGFyZW50LmRvbmUgJiYgcGFyZW50LmcubGVuZ3RoID09PSAxICYmIHBhcmVudC5vLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTsgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhcmVudC5vLm9uRXJyb3IoZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiBNZXJnZUFsbE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgKiBNZXJnZXMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvZiBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogQHJldHVybnMge09ic2VydmFibGV9IFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgbWVyZ2VzIHRoZSBlbGVtZW50cyBvZiB0aGUgaW5uZXIgc2VxdWVuY2VzLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ubWVyZ2VBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBNZXJnZUFsbE9ic2VydmFibGUodGhpcyk7XG4gIH07XG5cbiAgdmFyIFNraXBVbnRpbE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2tpcFVudGlsT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIFNraXBVbnRpbE9ic2VydmFibGUoc291cmNlLCBvdGhlcikge1xuICAgICAgdGhpcy5fcyA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX28gPSBpc1Byb21pc2Uob3RoZXIpID8gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKG90aGVyKSA6IG90aGVyO1xuICAgICAgdGhpcy5fb3BlbiA9IGZhbHNlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU2tpcFVudGlsT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgIHZhciBsZWZ0U3Vic2NyaXB0aW9uID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICBsZWZ0U3Vic2NyaXB0aW9uLnNldERpc3Bvc2FibGUodGhpcy5fcy5zdWJzY3JpYmUobmV3IFNraXBVbnRpbFNvdXJjZU9ic2VydmVyKG8sIHRoaXMpKSk7XG5cbiAgICAgIGlzUHJvbWlzZSh0aGlzLl9vKSAmJiAodGhpcy5fbyA9IG9ic2VydmFibGVGcm9tUHJvbWlzZSh0aGlzLl9vKSk7XG5cbiAgICAgIHZhciByaWdodFN1YnNjcmlwdGlvbiA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgcmlnaHRTdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZSh0aGlzLl9vLnN1YnNjcmliZShuZXcgU2tpcFVudGlsT3RoZXJPYnNlcnZlcihvLCB0aGlzLCByaWdodFN1YnNjcmlwdGlvbikpKTtcblxuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKGxlZnRTdWJzY3JpcHRpb24sIHJpZ2h0U3Vic2NyaXB0aW9uKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNraXBVbnRpbE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgU2tpcFVudGlsU291cmNlT2JzZXJ2ZXIgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2tpcFVudGlsU291cmNlT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gU2tpcFVudGlsU291cmNlT2JzZXJ2ZXIobywgcCkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9wID0gcDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFNraXBVbnRpbFNvdXJjZU9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX3AuX29wZW4gJiYgdGhpcy5fby5vbk5leHQoeCk7XG4gICAgfTtcblxuICAgIFNraXBVbnRpbFNvdXJjZU9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlcnIpO1xuICAgIH07XG5cbiAgICBTa2lwVW50aWxTb3VyY2VPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9wLl9vcGVuICYmIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNraXBVbnRpbFNvdXJjZU9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICB2YXIgU2tpcFVudGlsT3RoZXJPYnNlcnZlciA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTa2lwVW50aWxPdGhlck9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFNraXBVbnRpbE90aGVyT2JzZXJ2ZXIobywgcCwgcikge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9wID0gcDtcbiAgICAgIHRoaXMuX3IgPSByO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU2tpcFVudGlsT3RoZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3AuX29wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5fci5kaXNwb3NlKCk7XG4gICAgfTtcblxuICAgIFNraXBVbnRpbE90aGVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGVycik7XG4gICAgfTtcblxuICAgIFNraXBVbnRpbE90aGVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fci5kaXNwb3NlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBTa2lwVW50aWxPdGhlck9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWVzIGZyb20gdGhlIHNvdXJjZSBvYnNlcnZhYmxlIHNlcXVlbmNlIG9ubHkgYWZ0ZXIgdGhlIG90aGVyIG9ic2VydmFibGUgc2VxdWVuY2UgcHJvZHVjZXMgYSB2YWx1ZS5cbiAgICogQHBhcmFtIHtPYnNlcnZhYmxlIHwgUHJvbWlzZX0gb3RoZXIgVGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugb3IgUHJvbWlzZSB0aGF0IHRyaWdnZXJzIHByb3BhZ2F0aW9uIG9mIGVsZW1lbnRzIG9mIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoZSBzb3VyY2Ugc2VxdWVuY2Ugc3RhcnRpbmcgZnJvbSB0aGUgcG9pbnQgdGhlIG90aGVyIHNlcXVlbmNlIHRyaWdnZXJlZCBwcm9wYWdhdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5za2lwVW50aWwgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gbmV3IFNraXBVbnRpbE9ic2VydmFibGUodGhpcywgb3RoZXIpO1xuICB9O1xuXG4gIHZhciBTd2l0Y2hPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFN3aXRjaE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gU3dpdGNoT2JzZXJ2YWJsZShzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU3dpdGNoT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgaW5uZXIgPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpLCBzID0gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBTd2l0Y2hPYnNlcnZlcihvLCBpbm5lcikpO1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKHMsIGlubmVyKTtcbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoU3dpdGNoT2JzZXJ2ZXIsIEFic3RyYWN0T2JzZXJ2ZXIpO1xuICAgIGZ1bmN0aW9uIFN3aXRjaE9ic2VydmVyKG8sIGlubmVyKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5pbm5lciA9IGlubmVyO1xuICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmxhdGVzdCA9IDA7XG4gICAgICB0aGlzLmhhc0xhdGVzdCA9IGZhbHNlO1xuICAgICAgQWJzdHJhY3RPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFN3aXRjaE9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGlubmVyU291cmNlKSB7XG4gICAgICB2YXIgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpLCBpZCA9ICsrdGhpcy5sYXRlc3Q7XG4gICAgICB0aGlzLmhhc0xhdGVzdCA9IHRydWU7XG4gICAgICB0aGlzLmlubmVyLnNldERpc3Bvc2FibGUoZCk7XG4gICAgICBpc1Byb21pc2UoaW5uZXJTb3VyY2UpICYmIChpbm5lclNvdXJjZSA9IG9ic2VydmFibGVGcm9tUHJvbWlzZShpbm5lclNvdXJjZSkpO1xuICAgICAgZC5zZXREaXNwb3NhYmxlKGlubmVyU291cmNlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcih0aGlzLCBpZCkpKTtcbiAgICB9O1xuXG4gICAgU3dpdGNoT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBTd2l0Y2hPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICF0aGlzLmhhc0xhdGVzdCAmJiB0aGlzLm8ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoSW5uZXJPYnNlcnZlciwgQWJzdHJhY3RPYnNlcnZlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihwYXJlbnQsIGlkKSB7XG4gICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgIEFic3RyYWN0T2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLnBhcmVudC5sYXRlc3QgPT09IHRoaXMuaWQgJiYgdGhpcy5wYXJlbnQuby5vbk5leHQoeCk7XG4gICAgfTtcblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMucGFyZW50LmxhdGVzdCA9PT0gdGhpcy5pZCAmJiB0aGlzLnBhcmVudC5vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnBhcmVudC5sYXRlc3QgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuaGFzTGF0ZXN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFyZW50LmlzU3RvcHBlZCAmJiB0aGlzLnBhcmVudC5vLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBTd2l0Y2hPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICogVHJhbnNmb3JtcyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIG9mIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBwcm9kdWNpbmcgdmFsdWVzIG9ubHkgZnJvbSB0aGUgbW9zdCByZWNlbnQgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBhdCBhbnkgcG9pbnQgaW4gdGltZSBwcm9kdWNlcyB0aGUgZWxlbWVudHMgb2YgdGhlIG1vc3QgcmVjZW50IGlubmVyIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBoYXMgYmVlbiByZWNlaXZlZC5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvWydzd2l0Y2gnXSA9IG9ic2VydmFibGVQcm90by5zd2l0Y2hMYXRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBTd2l0Y2hPYnNlcnZhYmxlKHRoaXMpO1xuICB9O1xuXG4gIHZhciBUYWtlVW50aWxPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRha2VVbnRpbE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBUYWtlVW50aWxPYnNlcnZhYmxlKHNvdXJjZSwgb3RoZXIpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5vdGhlciA9IGlzUHJvbWlzZShvdGhlcikgPyBvYnNlcnZhYmxlRnJvbVByb21pc2Uob3RoZXIpIDogb3RoZXI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUYWtlVW50aWxPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24obykge1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKFxuICAgICAgICB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobyksXG4gICAgICAgIHRoaXMub3RoZXIuc3Vic2NyaWJlKG5ldyBUYWtlVW50aWxPYnNlcnZlcihvKSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiBUYWtlVW50aWxPYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIFRha2VVbnRpbE9ic2VydmVyID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRha2VVbnRpbE9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFRha2VVbnRpbE9ic2VydmVyKG8pIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVGFrZVVudGlsT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIFRha2VVbnRpbE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlcnIpO1xuICAgIH07XG5cbiAgICBUYWtlVW50aWxPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBub29wO1xuXG4gICAgcmV0dXJuIFRha2VVbnRpbE9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWVzIGZyb20gdGhlIHNvdXJjZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHVudGlsIHRoZSBvdGhlciBvYnNlcnZhYmxlIHNlcXVlbmNlIHByb2R1Y2VzIGEgdmFsdWUuXG4gICAqIEBwYXJhbSB7T2JzZXJ2YWJsZSB8IFByb21pc2V9IG90aGVyIE9ic2VydmFibGUgc2VxdWVuY2Ugb3IgUHJvbWlzZSB0aGF0IHRlcm1pbmF0ZXMgcHJvcGFnYXRpb24gb2YgZWxlbWVudHMgb2YgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgZWxlbWVudHMgb2YgdGhlIHNvdXJjZSBzZXF1ZW5jZSB1cCB0byB0aGUgcG9pbnQgdGhlIG90aGVyIHNlcXVlbmNlIGludGVycnVwdGVkIGZ1cnRoZXIgcHJvcGFnYXRpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8udGFrZVVudGlsID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgcmV0dXJuIG5ldyBUYWtlVW50aWxPYnNlcnZhYmxlKHRoaXMsIG90aGVyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBmYWxzZUZhY3RvcnkoKSB7IHJldHVybiBmYWxzZTsgfVxuICBmdW5jdGlvbiBhcmd1bWVudHNUb0FycmF5KCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICByZXR1cm4gYXJncztcbiAgfVxuXG4gIHZhciBXaXRoTGF0ZXN0RnJvbU9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoV2l0aExhdGVzdEZyb21PYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFdpdGhMYXRlc3RGcm9tT2JzZXJ2YWJsZShzb3VyY2UsIHNvdXJjZXMsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICB0aGlzLl9zID0gc291cmNlO1xuICAgICAgdGhpcy5fc3MgPSBzb3VyY2VzO1xuICAgICAgdGhpcy5fY2IgPSByZXN1bHRTZWxlY3RvcjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFdpdGhMYXRlc3RGcm9tT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgbGVuID0gdGhpcy5fc3MubGVuZ3RoO1xuICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICBoYXNWYWx1ZTogYXJyYXlJbml0aWFsaXplKGxlbiwgZmFsc2VGYWN0b3J5KSxcbiAgICAgICAgaGFzVmFsdWVBbGw6IGZhbHNlLFxuICAgICAgICB2YWx1ZXM6IG5ldyBBcnJheShsZW4pXG4gICAgICB9O1xuXG4gICAgICB2YXIgbiA9IHRoaXMuX3NzLmxlbmd0aCwgc3Vic2NyaXB0aW9ucyA9IG5ldyBBcnJheShuICsgMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YXIgb3RoZXIgPSB0aGlzLl9zc1tpXSwgc2FkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgIGlzUHJvbWlzZShvdGhlcikgJiYgKG90aGVyID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKG90aGVyKSk7XG4gICAgICAgIHNhZC5zZXREaXNwb3NhYmxlKG90aGVyLnN1YnNjcmliZShuZXcgV2l0aExhdGVzdEZyb21PdGhlck9ic2VydmVyKG8sIGksIHN0YXRlKSkpO1xuICAgICAgICBzdWJzY3JpcHRpb25zW2ldID0gc2FkO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2FkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICBzYWQuc2V0RGlzcG9zYWJsZSh0aGlzLl9zLnN1YnNjcmliZShuZXcgV2l0aExhdGVzdEZyb21Tb3VyY2VPYnNlcnZlcihvLCB0aGlzLl9jYiwgc3RhdGUpKSk7XG4gICAgICBzdWJzY3JpcHRpb25zW25dID0gc2FkO1xuXG4gICAgICByZXR1cm4gbmV3IE5BcnlEaXNwb3NhYmxlKHN1YnNjcmlwdGlvbnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gV2l0aExhdGVzdEZyb21PYnNlcnZhYmxlO1xuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgdmFyIFdpdGhMYXRlc3RGcm9tT3RoZXJPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoV2l0aExhdGVzdEZyb21PdGhlck9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFdpdGhMYXRlc3RGcm9tT3RoZXJPYnNlcnZlcihvLCBpLCBzdGF0ZSkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9pID0gaTtcbiAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBXaXRoTGF0ZXN0RnJvbU90aGVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fc3RhdGUudmFsdWVzW3RoaXMuX2ldID0geDtcbiAgICAgIHRoaXMuX3N0YXRlLmhhc1ZhbHVlW3RoaXMuX2ldID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3N0YXRlLmhhc1ZhbHVlQWxsID0gdGhpcy5fc3RhdGUuaGFzVmFsdWUuZXZlcnkoaWRlbnRpdHkpO1xuICAgIH07XG5cbiAgICBXaXRoTGF0ZXN0RnJvbU90aGVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgV2l0aExhdGVzdEZyb21PdGhlck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBub29wO1xuXG4gICAgcmV0dXJuIFdpdGhMYXRlc3RGcm9tT3RoZXJPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgdmFyIFdpdGhMYXRlc3RGcm9tU291cmNlT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFdpdGhMYXRlc3RGcm9tU291cmNlT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gV2l0aExhdGVzdEZyb21Tb3VyY2VPYnNlcnZlcihvLCBjYiwgc3RhdGUpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fY2IgPSBjYjtcbiAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBXaXRoTGF0ZXN0RnJvbVNvdXJjZU9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHZhciBhbGxWYWx1ZXMgPSBbeF0uY29uY2F0KHRoaXMuX3N0YXRlLnZhbHVlcyk7XG4gICAgICBpZiAoIXRoaXMuX3N0YXRlLmhhc1ZhbHVlQWxsKSB7IHJldHVybjsgfVxuICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoKHRoaXMuX2NiKS5hcHBseShudWxsLCBhbGxWYWx1ZXMpO1xuICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuX28ub25FcnJvcihyZXMuZSk7IH1cbiAgICAgIHRoaXMuX28ub25OZXh0KHJlcyk7XG4gICAgfTtcblxuICAgIFdpdGhMYXRlc3RGcm9tU291cmNlT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgV2l0aExhdGVzdEZyb21Tb3VyY2VPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gV2l0aExhdGVzdEZyb21Tb3VyY2VPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqIE1lcmdlcyB0aGUgc3BlY2lmaWVkIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gb25lIG9ic2VydmFibGUgc2VxdWVuY2UgYnkgdXNpbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIG9ubHkgd2hlbiB0aGUgKGZpcnN0KSBzb3VyY2Ugb2JzZXJ2YWJsZSBzZXF1ZW5jZSBwcm9kdWNlcyBhbiBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSByZXN1bHQgb2YgY29tYmluaW5nIGVsZW1lbnRzIG9mIHRoZSBzb3VyY2VzIHVzaW5nIHRoZSBzcGVjaWZpZWQgcmVzdWx0IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLndpdGhMYXRlc3RGcm9tID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBhcmd1bWVudHMnKTsgfVxuXG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIHZhciByZXN1bHRTZWxlY3RvciA9IGlzRnVuY3Rpb24oYXJnc1tsZW4gLSAxXSkgPyBhcmdzLnBvcCgpIDogYXJndW1lbnRzVG9BcnJheTtcbiAgICBBcnJheS5pc0FycmF5KGFyZ3NbMF0pICYmIChhcmdzID0gYXJnc1swXSk7XG5cbiAgICByZXR1cm4gbmV3IFdpdGhMYXRlc3RGcm9tT2JzZXJ2YWJsZSh0aGlzLCBhcmdzLCByZXN1bHRTZWxlY3Rvcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gZmFsc2VGYWN0b3J5KCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgZnVuY3Rpb24gZW1wdHlBcnJheUZhY3RvcnkoKSB7IHJldHVybiBbXTsgfVxuXG4gIHZhciBaaXBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFppcE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gWmlwT2JzZXJ2YWJsZShzb3VyY2VzLCByZXN1bHRTZWxlY3Rvcikge1xuICAgICAgdGhpcy5fcyA9IHNvdXJjZXM7XG4gICAgICB0aGlzLl9jYiA9IHJlc3VsdFNlbGVjdG9yO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgWmlwT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG9ic2VydmVyKSB7XG4gICAgICB2YXIgbiA9IHRoaXMuX3MubGVuZ3RoLFxuICAgICAgICAgIHN1YnNjcmlwdGlvbnMgPSBuZXcgQXJyYXkobik7XG4gICAgICAgICAgZG9uZSA9IGFycmF5SW5pdGlhbGl6ZShuLCBmYWxzZUZhY3RvcnkpLFxuICAgICAgICAgIHEgPSBhcnJheUluaXRpYWxpemUobiwgZW1wdHlBcnJheUZhY3RvcnkpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gdGhpcy5fc1tpXSwgc2FkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgIHN1YnNjcmlwdGlvbnNbaV0gPSBzYWQ7XG4gICAgICAgIGlzUHJvbWlzZShzb3VyY2UpICYmIChzb3VyY2UgPSBvYnNlcnZhYmxlRnJvbVByb21pc2Uoc291cmNlKSk7XG4gICAgICAgIHNhZC5zZXREaXNwb3NhYmxlKHNvdXJjZS5zdWJzY3JpYmUobmV3IFppcE9ic2VydmVyKG9ic2VydmVyLCBpLCB0aGlzLCBxLCBkb25lKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IE5BcnlEaXNwb3NhYmxlKHN1YnNjcmlwdGlvbnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gWmlwT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBaaXBPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoWmlwT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gWmlwT2JzZXJ2ZXIobywgaSwgcCwgcSwgZCkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9pID0gaTtcbiAgICAgIHRoaXMuX3AgPSBwO1xuICAgICAgdGhpcy5fcSA9IHE7XG4gICAgICB0aGlzLl9kID0gZDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vdEVtcHR5KHgpIHsgcmV0dXJuIHgubGVuZ3RoID4gMDsgfVxuICAgIGZ1bmN0aW9uIHNoaWZ0RWFjaCh4KSB7IHJldHVybiB4LnNoaWZ0KCk7IH1cbiAgICBmdW5jdGlvbiBub3RUaGVTYW1lKGkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoeCwgaikge1xuICAgICAgICByZXR1cm4gaiAhPT0gaTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgWmlwT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fcVt0aGlzLl9pXS5wdXNoKHgpO1xuICAgICAgaWYgKHRoaXMuX3EuZXZlcnkobm90RW1wdHkpKSB7XG4gICAgICAgIHZhciBxdWV1ZWRWYWx1ZXMgPSB0aGlzLl9xLm1hcChzaGlmdEVhY2gpO1xuICAgICAgICB2YXIgcmVzID0gdHJ5Q2F0Y2godGhpcy5fcC5fY2IpLmFwcGx5KG51bGwsIHF1ZXVlZFZhbHVlcyk7XG4gICAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLl9vLm9uRXJyb3IocmVzLmUpOyB9XG4gICAgICAgIHRoaXMuX28ub25OZXh0KHJlcyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2QuZmlsdGVyKG5vdFRoZVNhbWUodGhpcy5faSkpLmV2ZXJ5KGlkZW50aXR5KSkge1xuICAgICAgICB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFppcE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIFppcE9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9kW3RoaXMuX2ldID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2QuZXZlcnkoaWRlbnRpdHkpICYmIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFppcE9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogTWVyZ2VzIHRoZSBzcGVjaWZpZWQgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgaW50byBvbmUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBieSB1c2luZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gd2hlbmV2ZXIgYWxsIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlcyBvciBhbiBhcnJheSBoYXZlIHByb2R1Y2VkIGFuIGVsZW1lbnQgYXQgYSBjb3JyZXNwb25kaW5nIGluZGV4LlxuICAgKiBUaGUgbGFzdCBlbGVtZW50IGluIHRoZSBhcmd1bWVudHMgbXVzdCBiZSBhIGZ1bmN0aW9uIHRvIGludm9rZSBmb3IgZWFjaCBzZXJpZXMgb2YgZWxlbWVudHMgYXQgY29ycmVzcG9uZGluZyBpbmRleGVzIGluIHRoZSBhcmdzLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSByZXN1bHQgb2YgY29tYmluaW5nIGVsZW1lbnRzIG9mIHRoZSBhcmdzIHVzaW5nIHRoZSBzcGVjaWZpZWQgcmVzdWx0IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnppcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXJndW1lbnRzJyk7IH1cblxuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBpc0Z1bmN0aW9uKGFyZ3NbbGVuIC0gMV0pID8gYXJncy5wb3AoKSA6IGFyZ3VtZW50c1RvQXJyYXk7XG4gICAgQXJyYXkuaXNBcnJheShhcmdzWzBdKSAmJiAoYXJncyA9IGFyZ3NbMF0pO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXM7XG4gICAgYXJncy51bnNoaWZ0KHBhcmVudCk7XG5cbiAgICByZXR1cm4gbmV3IFppcE9ic2VydmFibGUoYXJncywgcmVzdWx0U2VsZWN0b3IpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNZXJnZXMgdGhlIHNwZWNpZmllZCBvYnNlcnZhYmxlIHNlcXVlbmNlcyBpbnRvIG9uZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGJ5IHVzaW5nIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB3aGVuZXZlciBhbGwgb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2VzIGhhdmUgcHJvZHVjZWQgYW4gZWxlbWVudCBhdCBhIGNvcnJlc3BvbmRpbmcgaW5kZXguXG4gICAqIEBwYXJhbSBhcmd1bWVudHMgT2JzZXJ2YWJsZSBzb3VyY2VzLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXN1bHRTZWxlY3RvciBGdW5jdGlvbiB0byBpbnZva2UgZm9yIGVhY2ggc2VyaWVzIG9mIGVsZW1lbnRzIGF0IGNvcnJlc3BvbmRpbmcgaW5kZXhlcyBpbiB0aGUgc291cmNlcy5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgcmVzdWx0IG9mIGNvbWJpbmluZyBlbGVtZW50cyBvZiB0aGUgc291cmNlcyB1c2luZyB0aGUgc3BlY2lmaWVkIHJlc3VsdCBzZWxlY3RvciBmdW5jdGlvbi5cbiAgICovXG4gIE9ic2VydmFibGUuemlwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07IH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgYXJncyA9IGlzRnVuY3Rpb24oYXJnc1sxXSkgPyBhcmdzWzBdLmNvbmNhdChhcmdzWzFdKSA6IGFyZ3NbMF07XG4gICAgfVxuICAgIHZhciBmaXJzdCA9IGFyZ3Muc2hpZnQoKTtcbiAgICByZXR1cm4gZmlyc3QuemlwLmFwcGx5KGZpcnN0LCBhcmdzKTtcbiAgfTtcblxuZnVuY3Rpb24gZmFsc2VGYWN0b3J5KCkgeyByZXR1cm4gZmFsc2U7IH1cbmZ1bmN0aW9uIGVtcHR5QXJyYXlGYWN0b3J5KCkgeyByZXR1cm4gW107IH1cbmZ1bmN0aW9uIGFyZ3VtZW50c1RvQXJyYXkoKSB7XG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gIHJldHVybiBhcmdzO1xufVxuXG4vKipcbiAqIE1lcmdlcyB0aGUgc3BlY2lmaWVkIG9ic2VydmFibGUgc2VxdWVuY2VzIGludG8gb25lIG9ic2VydmFibGUgc2VxdWVuY2UgYnkgdXNpbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIHdoZW5ldmVyIGFsbCBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZXMgb3IgYW4gYXJyYXkgaGF2ZSBwcm9kdWNlZCBhbiBlbGVtZW50IGF0IGEgY29ycmVzcG9uZGluZyBpbmRleC5cbiAqIFRoZSBsYXN0IGVsZW1lbnQgaW4gdGhlIGFyZ3VtZW50cyBtdXN0IGJlIGEgZnVuY3Rpb24gdG8gaW52b2tlIGZvciBlYWNoIHNlcmllcyBvZiBlbGVtZW50cyBhdCBjb3JyZXNwb25kaW5nIGluZGV4ZXMgaW4gdGhlIGFyZ3MuXG4gKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSByZXN1bHQgb2YgY29tYmluaW5nIGVsZW1lbnRzIG9mIHRoZSBhcmdzIHVzaW5nIHRoZSBzcGVjaWZpZWQgcmVzdWx0IHNlbGVjdG9yIGZ1bmN0aW9uLlxuICovXG5vYnNlcnZhYmxlUHJvdG8uemlwSXRlcmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignaW52YWxpZCBhcmd1bWVudHMnKTsgfVxuXG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gIHZhciByZXN1bHRTZWxlY3RvciA9IGlzRnVuY3Rpb24oYXJnc1tsZW4gLSAxXSkgPyBhcmdzLnBvcCgpIDogYXJndW1lbnRzVG9BcnJheTtcblxuICB2YXIgcGFyZW50ID0gdGhpcztcbiAgYXJncy51bnNoaWZ0KHBhcmVudCk7XG4gIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgIHZhciBuID0gYXJncy5sZW5ndGgsXG4gICAgICBxdWV1ZXMgPSBhcnJheUluaXRpYWxpemUobiwgZW1wdHlBcnJheUZhY3RvcnkpLFxuICAgICAgaXNEb25lID0gYXJyYXlJbml0aWFsaXplKG4sIGZhbHNlRmFjdG9yeSk7XG5cbiAgICB2YXIgc3Vic2NyaXB0aW9ucyA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBuOyBpZHgrKykge1xuICAgICAgKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmdzW2ldLCBzYWQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcblxuICAgICAgICAoaXNBcnJheUxpa2Uoc291cmNlKSB8fCBpc0l0ZXJhYmxlKHNvdXJjZSkpICYmIChzb3VyY2UgPSBvYnNlcnZhYmxlRnJvbShzb3VyY2UpKTtcblxuICAgICAgICBzYWQuc2V0RGlzcG9zYWJsZShzb3VyY2Uuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcXVldWVzW2ldLnB1c2goeCk7XG4gICAgICAgICAgaWYgKHF1ZXVlcy5ldmVyeShmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5sZW5ndGggPiAwOyB9KSkge1xuICAgICAgICAgICAgdmFyIHF1ZXVlZFZhbHVlcyA9IHF1ZXVlcy5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguc2hpZnQoKTsgfSksXG4gICAgICAgICAgICAgICAgcmVzID0gdHJ5Q2F0Y2gocmVzdWx0U2VsZWN0b3IpLmFwcGx5KHBhcmVudCwgcXVldWVkVmFsdWVzKTtcbiAgICAgICAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IocmVzLmUpOyB9XG4gICAgICAgICAgICBvLm9uTmV4dChyZXMpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNEb25lLmZpbHRlcihmdW5jdGlvbiAoeCwgaikgeyByZXR1cm4gaiAhPT0gaTsgfSkuZXZlcnkoaWRlbnRpdHkpKSB7XG4gICAgICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoZSkgeyBvLm9uRXJyb3IoZSk7IH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpc0RvbmVbaV0gPSB0cnVlO1xuICAgICAgICAgIGlzRG9uZS5ldmVyeShpZGVudGl0eSkgJiYgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHN1YnNjcmlwdGlvbnNbaV0gPSBzYWQ7XG4gICAgICB9KShpZHgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZShzdWJzY3JpcHRpb25zKTtcbiAgfSwgcGFyZW50KTtcbn07XG5cbiAgZnVuY3Rpb24gYXNPYnNlcnZhYmxlKHNvdXJjZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBzdWJzY3JpYmUobykgeyByZXR1cm4gc291cmNlLnN1YnNjcmliZShvKTsgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgSGlkZXMgdGhlIGlkZW50aXR5IG9mIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgaGlkZXMgdGhlIGlkZW50aXR5IG9mIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uYXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShhc09ic2VydmFibGUodGhpcyksIHRoaXMpO1xuICB9O1xuXG4gIHZhciBEZW1hdGVyaWFsaXplT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRGVtYXRlcmlhbGl6ZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRGVtYXRlcmlhbGl6ZU9ic2VydmFibGUoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIERlbWF0ZXJpYWxpemVPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IERlbWF0ZXJpYWxpemVPYnNlcnZlcihvKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBEZW1hdGVyaWFsaXplT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBEZW1hdGVyaWFsaXplT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKERlbWF0ZXJpYWxpemVPYnNlcnZlciwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIERlbWF0ZXJpYWxpemVPYnNlcnZlcihvKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIERlbWF0ZXJpYWxpemVPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7IHguYWNjZXB0KHRoaXMuX28pOyB9O1xuICAgIERlbWF0ZXJpYWxpemVPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkgeyB0aGlzLl9vLm9uRXJyb3IoZSk7IH07XG4gICAgRGVtYXRlcmlhbGl6ZU9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX28ub25Db21wbGV0ZWQoKTsgfTtcblxuICAgIHJldHVybiBEZW1hdGVyaWFsaXplT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIC8qKlxuICAgKiBEZW1hdGVyaWFsaXplcyB0aGUgZXhwbGljaXQgbm90aWZpY2F0aW9uIHZhbHVlcyBvZiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGFzIGltcGxpY2l0IG5vdGlmaWNhdGlvbnMuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGV4aGliaXRpbmcgdGhlIGJlaGF2aW9yIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHNvdXJjZSBzZXF1ZW5jZSdzIG5vdGlmaWNhdGlvbiB2YWx1ZXMuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uZGVtYXRlcmlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IERlbWF0ZXJpYWxpemVPYnNlcnZhYmxlKHRoaXMpO1xuICB9O1xuXG4gIHZhciBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2YWJsZShzb3VyY2UsIGtleUZuLCBjb21wYXJlcikge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLmtleUZuID0ga2V5Rm47XG4gICAgICB0aGlzLmNvbXBhcmVyID0gY29tcGFyZXI7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZlcihvLCB0aGlzLmtleUZuLCB0aGlzLmNvbXBhcmVyKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZlciA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIERpc3RpbmN0VW50aWxDaGFuZ2VkT2JzZXJ2ZXIobywga2V5Rm4sIGNvbXBhcmVyKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5rZXlGbiA9IGtleUZuO1xuICAgICAgdGhpcy5jb21wYXJlciA9IGNvbXBhcmVyO1xuICAgICAgdGhpcy5oYXNDdXJyZW50S2V5ID0gZmFsc2U7XG4gICAgICB0aGlzLmN1cnJlbnRLZXkgPSBudWxsO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB2YXIga2V5ID0geCwgY29tcGFyZXJFcXVhbHM7XG4gICAgICBpZiAoaXNGdW5jdGlvbih0aGlzLmtleUZuKSkge1xuICAgICAgICBrZXkgPSB0cnlDYXRjaCh0aGlzLmtleUZuKSh4KTtcbiAgICAgICAgaWYgKGtleSA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuby5vbkVycm9yKGtleS5lKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaGFzQ3VycmVudEtleSkge1xuICAgICAgICBjb21wYXJlckVxdWFscyA9IHRyeUNhdGNoKHRoaXMuY29tcGFyZXIpKHRoaXMuY3VycmVudEtleSwga2V5KTtcbiAgICAgICAgaWYgKGNvbXBhcmVyRXF1YWxzID09PSBlcnJvck9iaikgeyByZXR1cm4gdGhpcy5vLm9uRXJyb3IoY29tcGFyZXJFcXVhbHMuZSk7IH1cbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5oYXNDdXJyZW50S2V5IHx8ICFjb21wYXJlckVxdWFscykge1xuICAgICAgICB0aGlzLmhhc0N1cnJlbnRLZXkgPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRLZXkgPSBrZXk7XG4gICAgICAgIHRoaXMuby5vbk5leHQoeCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuby5vbkVycm9yKGUpO1xuICAgIH07XG4gICAgRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBEaXN0aW5jdFVudGlsQ2hhbmdlZE9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgKiAgUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgb25seSBkaXN0aW5jdCBjb250aWd1b3VzIGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGUga2V5Rm4gYW5kIHRoZSBjb21wYXJlci5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBba2V5Rm5dIEEgZnVuY3Rpb24gdG8gY29tcHV0ZSB0aGUgY29tcGFyaXNvbiBrZXkgZm9yIGVhY2ggZWxlbWVudC4gSWYgbm90IHByb3ZpZGVkLCBpdCBwcm9qZWN0cyB0aGUgdmFsdWUuXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmVyXSBFcXVhbGl0eSBjb21wYXJlciBmb3IgY29tcHV0ZWQga2V5IHZhbHVlcy4gSWYgbm90IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBhbiBlcXVhbGl0eSBjb21wYXJlciBmdW5jdGlvbi5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvbmx5IGNvbnRhaW5pbmcgdGhlIGRpc3RpbmN0IGNvbnRpZ3VvdXMgZWxlbWVudHMsIGJhc2VkIG9uIGEgY29tcHV0ZWQga2V5IHZhbHVlLCBmcm9tIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICovXG4gIG9ic2VydmFibGVQcm90by5kaXN0aW5jdFVudGlsQ2hhbmdlZCA9IGZ1bmN0aW9uIChrZXlGbiwgY29tcGFyZXIpIHtcbiAgICBjb21wYXJlciB8fCAoY29tcGFyZXIgPSBkZWZhdWx0Q29tcGFyZXIpO1xuICAgIHJldHVybiBuZXcgRGlzdGluY3RVbnRpbENoYW5nZWRPYnNlcnZhYmxlKHRoaXMsIGtleUZuLCBjb21wYXJlcik7XG4gIH07XG5cbiAgdmFyIFRhcE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGFwT2JzZXJ2YWJsZSxfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFRhcE9ic2VydmFibGUoc291cmNlLCBvYnNlcnZlck9yT25OZXh0LCBvbkVycm9yLCBvbkNvbXBsZXRlZCkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9vTiA9IG9ic2VydmVyT3JPbk5leHQ7XG4gICAgICB0aGlzLl9vRSA9IG9uRXJyb3I7XG4gICAgICB0aGlzLl9vQyA9IG9uQ29tcGxldGVkO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVGFwT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIobywgdGhpcykpO1xuICAgIH07XG5cbiAgICBpbmhlcml0cyhJbm5lck9ic2VydmVyLCBBYnN0cmFjdE9ic2VydmVyKTtcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKG8sIHApIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLnQgPSAhcC5fb04gfHwgaXNGdW5jdGlvbihwLl9vTikgP1xuICAgICAgICBvYnNlcnZlckNyZWF0ZShwLl9vTiB8fCBub29wLCBwLl9vRSB8fCBub29wLCBwLl9vQyB8fCBub29wKSA6XG4gICAgICAgIHAuX29OO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgIEFic3RyYWN0T2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHZhciByZXMgPSB0cnlDYXRjaCh0aGlzLnQub25OZXh0KS5jYWxsKHRoaXMudCwgeCk7XG4gICAgICBpZiAocmVzID09PSBlcnJvck9iaikgeyB0aGlzLm8ub25FcnJvcihyZXMuZSk7IH1cbiAgICAgIHRoaXMuby5vbk5leHQoeCk7XG4gICAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoKHRoaXMudC5vbkVycm9yKS5jYWxsKHRoaXMudCwgZXJyKTtcbiAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLm8ub25FcnJvcihyZXMuZSk7IH1cbiAgICAgIHRoaXMuby5vbkVycm9yKGVycik7XG4gICAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXMgPSB0cnlDYXRjaCh0aGlzLnQub25Db21wbGV0ZWQpLmNhbGwodGhpcy50KTtcbiAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLm8ub25FcnJvcihyZXMuZSk7IH1cbiAgICAgIHRoaXMuby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGFwT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAqICBJbnZva2VzIGFuIGFjdGlvbiBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGFuZCBpbnZva2VzIGFuIGFjdGlvbiB1cG9uIGdyYWNlZnVsIG9yIGV4Y2VwdGlvbmFsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqICBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCBmb3IgZGVidWdnaW5nLCBsb2dnaW5nLCBldGMuIG9mIHF1ZXJ5IGJlaGF2aW9yIGJ5IGludGVyY2VwdGluZyB0aGUgbWVzc2FnZSBzdHJlYW0gdG8gcnVuIGFyYml0cmFyeSBhY3Rpb25zIGZvciBtZXNzYWdlcyBvbiB0aGUgcGlwZWxpbmUuXG4gICogQHBhcmFtIHtGdW5jdGlvbiB8IE9ic2VydmVyfSBvYnNlcnZlck9yT25OZXh0IEFjdGlvbiB0byBpbnZva2UgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBvciBhbiBvLlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkVycm9yXSAgQWN0aW9uIHRvIGludm9rZSB1cG9uIGV4Y2VwdGlvbmFsIHRlcm1pbmF0aW9uIG9mIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLiBVc2VkIGlmIG9ubHkgdGhlIG9ic2VydmVyT3JPbk5leHQgcGFyYW1ldGVyIGlzIGFsc28gYSBmdW5jdGlvbi5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25Db21wbGV0ZWRdICBBY3Rpb24gdG8gaW52b2tlIHVwb24gZ3JhY2VmdWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuIFVzZWQgaWYgb25seSB0aGUgb2JzZXJ2ZXJPck9uTmV4dCBwYXJhbWV0ZXIgaXMgYWxzbyBhIGZ1bmN0aW9uLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgc291cmNlIHNlcXVlbmNlIHdpdGggdGhlIHNpZGUtZWZmZWN0aW5nIGJlaGF2aW9yIGFwcGxpZWQuXG4gICovXG4gIG9ic2VydmFibGVQcm90b1snZG8nXSA9IG9ic2VydmFibGVQcm90by50YXAgPSBvYnNlcnZhYmxlUHJvdG8uZG9BY3Rpb24gPSBmdW5jdGlvbiAob2JzZXJ2ZXJPck9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpIHtcbiAgICByZXR1cm4gbmV3IFRhcE9ic2VydmFibGUodGhpcywgb2JzZXJ2ZXJPck9uTmV4dCwgb25FcnJvciwgb25Db21wbGV0ZWQpO1xuICB9O1xuXG4gIC8qKlxuICAqICBJbnZva2VzIGFuIGFjdGlvbiBmb3IgZWFjaCBlbGVtZW50IGluIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAqICBUaGlzIG1ldGhvZCBjYW4gYmUgdXNlZCBmb3IgZGVidWdnaW5nLCBsb2dnaW5nLCBldGMuIG9mIHF1ZXJ5IGJlaGF2aW9yIGJ5IGludGVyY2VwdGluZyB0aGUgbWVzc2FnZSBzdHJlYW0gdG8gcnVuIGFyYml0cmFyeSBhY3Rpb25zIGZvciBtZXNzYWdlcyBvbiB0aGUgcGlwZWxpbmUuXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gb25OZXh0IEFjdGlvbiB0byBpbnZva2UgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIE9iamVjdCB0byB1c2UgYXMgdGhpcyB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIHNvdXJjZSBzZXF1ZW5jZSB3aXRoIHRoZSBzaWRlLWVmZmVjdGluZyBiZWhhdmlvciBhcHBsaWVkLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uZG9Pbk5leHQgPSBvYnNlcnZhYmxlUHJvdG8udGFwT25OZXh0ID0gZnVuY3Rpb24gKG9uTmV4dCwgdGhpc0FyZykge1xuICAgIHJldHVybiB0aGlzLnRhcCh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbiAoeCkgeyBvbk5leHQuY2FsbCh0aGlzQXJnLCB4KTsgfSA6IG9uTmV4dCk7XG4gIH07XG5cbiAgLyoqXG4gICogIEludm9rZXMgYW4gYWN0aW9uIHVwb24gZXhjZXB0aW9uYWwgdGVybWluYXRpb24gb2YgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICogIFRoaXMgbWV0aG9kIGNhbiBiZSB1c2VkIGZvciBkZWJ1Z2dpbmcsIGxvZ2dpbmcsIGV0Yy4gb2YgcXVlcnkgYmVoYXZpb3IgYnkgaW50ZXJjZXB0aW5nIHRoZSBtZXNzYWdlIHN0cmVhbSB0byBydW4gYXJiaXRyYXJ5IGFjdGlvbnMgZm9yIG1lc3NhZ2VzIG9uIHRoZSBwaXBlbGluZS5cbiAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkVycm9yIEFjdGlvbiB0byBpbnZva2UgdXBvbiBleGNlcHRpb25hbCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIE9iamVjdCB0byB1c2UgYXMgdGhpcyB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIHNvdXJjZSBzZXF1ZW5jZSB3aXRoIHRoZSBzaWRlLWVmZmVjdGluZyBiZWhhdmlvciBhcHBsaWVkLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uZG9PbkVycm9yID0gb2JzZXJ2YWJsZVByb3RvLnRhcE9uRXJyb3IgPSBmdW5jdGlvbiAob25FcnJvciwgdGhpc0FyZykge1xuICAgIHJldHVybiB0aGlzLnRhcChub29wLCB0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbiAoZSkgeyBvbkVycm9yLmNhbGwodGhpc0FyZywgZSk7IH0gOiBvbkVycm9yKTtcbiAgfTtcblxuICAvKipcbiAgKiAgSW52b2tlcyBhbiBhY3Rpb24gdXBvbiBncmFjZWZ1bCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiAgVGhpcyBtZXRob2QgY2FuIGJlIHVzZWQgZm9yIGRlYnVnZ2luZywgbG9nZ2luZywgZXRjLiBvZiBxdWVyeSBiZWhhdmlvciBieSBpbnRlcmNlcHRpbmcgdGhlIG1lc3NhZ2Ugc3RyZWFtIHRvIHJ1biBhcmJpdHJhcnkgYWN0aW9ucyBmb3IgbWVzc2FnZXMgb24gdGhlIHBpcGVsaW5lLlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVkIEFjdGlvbiB0byBpbnZva2UgdXBvbiBncmFjZWZ1bCB0ZXJtaW5hdGlvbiBvZiB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgKiBAcGFyYW0ge0FueX0gW3RoaXNBcmddIE9iamVjdCB0byB1c2UgYXMgdGhpcyB3aGVuIGV4ZWN1dGluZyBjYWxsYmFjay5cbiAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIHNvdXJjZSBzZXF1ZW5jZSB3aXRoIHRoZSBzaWRlLWVmZmVjdGluZyBiZWhhdmlvciBhcHBsaWVkLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uZG9PbkNvbXBsZXRlZCA9IG9ic2VydmFibGVQcm90by50YXBPbkNvbXBsZXRlZCA9IGZ1bmN0aW9uIChvbkNvbXBsZXRlZCwgdGhpc0FyZykge1xuICAgIHJldHVybiB0aGlzLnRhcChub29wLCBudWxsLCB0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbiAoKSB7IG9uQ29tcGxldGVkLmNhbGwodGhpc0FyZyk7IH0gOiBvbkNvbXBsZXRlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqICBJbnZva2VzIGEgc3BlY2lmaWVkIGFjdGlvbiBhZnRlciB0aGUgc291cmNlIG9ic2VydmFibGUgc2VxdWVuY2UgdGVybWluYXRlcyBncmFjZWZ1bGx5IG9yIGV4Y2VwdGlvbmFsbHkuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZpbmFsbHlBY3Rpb24gQWN0aW9uIHRvIGludm9rZSBhZnRlciB0aGUgc291cmNlIG9ic2VydmFibGUgc2VxdWVuY2UgdGVybWluYXRlcy5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFNvdXJjZSBzZXF1ZW5jZSB3aXRoIHRoZSBhY3Rpb24taW52b2tpbmcgdGVybWluYXRpb24gYmVoYXZpb3IgYXBwbGllZC5cbiAgICovXG4gIG9ic2VydmFibGVQcm90b1snZmluYWxseSddID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0cnlDYXRjaChzb3VyY2Uuc3Vic2NyaWJlKS5jYWxsKHNvdXJjZSwgb2JzZXJ2ZXIpO1xuICAgICAgaWYgKHN1YnNjcmlwdGlvbiA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYWN0aW9uKCk7XG4gICAgICAgIHJldHVybiB0aHJvd2VyKHN1YnNjcmlwdGlvbi5lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkaXNwb3NhYmxlQ3JlYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSB0cnlDYXRjaChzdWJzY3JpcHRpb24uZGlzcG9zZSkuY2FsbChzdWJzY3JpcHRpb24pO1xuICAgICAgICBhY3Rpb24oKTtcbiAgICAgICAgciA9PT0gZXJyb3JPYmogJiYgdGhyb3dlcihyLmUpO1xuICAgICAgfSk7XG4gICAgfSwgdGhpcyk7XG4gIH07XG5cbiAgdmFyIElnbm9yZUVsZW1lbnRzT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhJZ25vcmVFbGVtZW50c09ic2VydmFibGUsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBJZ25vcmVFbGVtZW50c09ic2VydmFibGUoc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIElnbm9yZUVsZW1lbnRzT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBJbm5lck9ic2VydmVyKG8pKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihvKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25OZXh0ID0gbm9vcDtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vLm9uRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm9uQ29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTsgfTtcbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5mYWlsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9uRXJyb3IoZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiBJZ25vcmVFbGVtZW50c09ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgICogIElnbm9yZXMgYWxsIGVsZW1lbnRzIGluIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgbGVhdmluZyBvbmx5IHRoZSB0ZXJtaW5hdGlvbiBtZXNzYWdlcy5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIGVtcHR5IG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBzaWduYWxzIHRlcm1pbmF0aW9uLCBzdWNjZXNzZnVsIG9yIGV4Y2VwdGlvbmFsLCBvZiB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmlnbm9yZUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgSWdub3JlRWxlbWVudHNPYnNlcnZhYmxlKHRoaXMpO1xuICB9O1xuXG4gIHZhciBNYXRlcmlhbGl6ZU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE1hdGVyaWFsaXplT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBNYXRlcmlhbGl6ZU9ic2VydmFibGUoc291cmNlLCBmbikge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBNYXRlcmlhbGl6ZU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgTWF0ZXJpYWxpemVPYnNlcnZlcihvKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBNYXRlcmlhbGl6ZU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgTWF0ZXJpYWxpemVPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoTWF0ZXJpYWxpemVPYnNlcnZlciwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIE1hdGVyaWFsaXplT2JzZXJ2ZXIobykge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBNYXRlcmlhbGl6ZU9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHsgdGhpcy5fby5vbk5leHQobm90aWZpY2F0aW9uQ3JlYXRlT25OZXh0KHgpKSB9O1xuICAgIE1hdGVyaWFsaXplT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHsgdGhpcy5fby5vbk5leHQobm90aWZpY2F0aW9uQ3JlYXRlT25FcnJvcihlKSk7IHRoaXMuX28ub25Db21wbGV0ZWQoKTsgfTtcbiAgICBNYXRlcmlhbGl6ZU9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX28ub25OZXh0KG5vdGlmaWNhdGlvbkNyZWF0ZU9uQ29tcGxldGVkKCkpOyB0aGlzLl9vLm9uQ29tcGxldGVkKCk7IH07XG5cbiAgICByZXR1cm4gTWF0ZXJpYWxpemVPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqICBNYXRlcmlhbGl6ZXMgdGhlIGltcGxpY2l0IG5vdGlmaWNhdGlvbnMgb2YgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBhcyBleHBsaWNpdCBub3RpZmljYXRpb24gdmFsdWVzLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSBtYXRlcmlhbGl6ZWQgbm90aWZpY2F0aW9uIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ubWF0ZXJpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRlcmlhbGl6ZU9ic2VydmFibGUodGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICBSZXBlYXRzIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGEgc3BlY2lmaWVkIG51bWJlciBvZiB0aW1lcy4gSWYgdGhlIHJlcGVhdCBjb3VudCBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgc2VxdWVuY2UgcmVwZWF0cyBpbmRlZmluaXRlbHkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbcmVwZWF0Q291bnRdICBOdW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBzZXF1ZW5jZS4gSWYgbm90IHByb3ZpZGVkLCByZXBlYXRzIHRoZSBzZXF1ZW5jZSBpbmRlZmluaXRlbHkuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBwcm9kdWNpbmcgdGhlIGVsZW1lbnRzIG9mIHRoZSBnaXZlbiBzZXF1ZW5jZSByZXBlYXRlZGx5LlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnJlcGVhdCA9IGZ1bmN0aW9uIChyZXBlYXRDb3VudCkge1xuICAgIHJldHVybiBlbnVtZXJhYmxlUmVwZWF0KHRoaXMsIHJlcGVhdENvdW50KS5jb25jYXQoKTtcbiAgfTtcblxuICAvKipcbiAgICogIFJlcGVhdHMgdGhlIHNvdXJjZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHRpbWVzIG9yIHVudGlsIGl0IHN1Y2Nlc3NmdWxseSB0ZXJtaW5hdGVzLiBJZiB0aGUgcmV0cnkgY291bnQgaXMgbm90IHNwZWNpZmllZCwgaXQgcmV0cmllcyBpbmRlZmluaXRlbHkuXG4gICAqICBOb3RlIGlmIHlvdSBlbmNvdW50ZXIgYW4gZXJyb3IgYW5kIHdhbnQgaXQgdG8gcmV0cnkgb25jZSwgdGhlbiB5b3UgbXVzdCB1c2UgLnJldHJ5KDIpO1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgdmFyIHJlcyA9IHJldHJpZWQgPSByZXRyeS5yZXBlYXQoKTtcbiAgICogIHZhciByZXMgPSByZXRyaWVkID0gcmV0cnkucmVwZWF0KDIpO1xuICAgKiBAcGFyYW0ge051bWJlcn0gW3JldHJ5Q291bnRdICBOdW1iZXIgb2YgdGltZXMgdG8gcmV0cnkgdGhlIHNlcXVlbmNlLiBJZiBub3QgcHJvdmlkZWQsIHJldHJ5IHRoZSBzZXF1ZW5jZSBpbmRlZmluaXRlbHkuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHByb2R1Y2luZyB0aGUgZWxlbWVudHMgb2YgdGhlIGdpdmVuIHNlcXVlbmNlIHJlcGVhdGVkbHkgdW50aWwgaXQgdGVybWluYXRlcyBzdWNjZXNzZnVsbHkuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucmV0cnkgPSBmdW5jdGlvbiAocmV0cnlDb3VudCkge1xuICAgIHJldHVybiBlbnVtZXJhYmxlUmVwZWF0KHRoaXMsIHJldHJ5Q291bnQpLmNhdGNoRXJyb3IoKTtcbiAgfTtcblxuICAvKipcbiAgICogIFJlcGVhdHMgdGhlIHNvdXJjZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHVwb24gZXJyb3IgZWFjaCB0aW1lIHRoZSBub3RpZmllciBlbWl0cyBvciB1bnRpbCBpdCBzdWNjZXNzZnVsbHkgdGVybWluYXRlcy4gXG4gICAqICBpZiB0aGUgbm90aWZpZXIgY29tcGxldGVzLCB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb21wbGV0ZXMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICB2YXIgdGltZXIgPSBPYnNlcnZhYmxlLnRpbWVyKDUwMCk7XG4gICAqICB2YXIgc291cmNlID0gb2JzZXJ2YWJsZS5yZXRyeVdoZW4odGltZXIpO1xuICAgKiBAcGFyYW0ge09ic2VydmFibGV9IFtub3RpZmllcl0gQW4gb2JzZXJ2YWJsZSB0aGF0IHRyaWdnZXJzIHRoZSByZXRyaWVzIG9yIGNvbXBsZXRlcyB0aGUgb2JzZXJ2YWJsZSB3aXRoIG9uTmV4dCBvciBvbkNvbXBsZXRlZCByZXNwZWN0aXZlbHkuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHByb2R1Y2luZyB0aGUgZWxlbWVudHMgb2YgdGhlIGdpdmVuIHNlcXVlbmNlIHJlcGVhdGVkbHkgdW50aWwgaXQgdGVybWluYXRlcyBzdWNjZXNzZnVsbHkuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucmV0cnlXaGVuID0gZnVuY3Rpb24gKG5vdGlmaWVyKSB7XG4gICAgcmV0dXJuIGVudW1lcmFibGVSZXBlYXQodGhpcykuY2F0Y2hFcnJvcldoZW4obm90aWZpZXIpO1xuICB9O1xuICB2YXIgU2Nhbk9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2Nhbk9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gU2Nhbk9ic2VydmFibGUoc291cmNlLCBhY2N1bXVsYXRvciwgaGFzU2VlZCwgc2VlZCkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLmFjY3VtdWxhdG9yID0gYWNjdW11bGF0b3I7XG4gICAgICB0aGlzLmhhc1NlZWQgPSBoYXNTZWVkO1xuICAgICAgdGhpcy5zZWVkID0gc2VlZDtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFNjYW5PYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24obykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgU2Nhbk9ic2VydmVyKG8sdGhpcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2Nhbk9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgU2Nhbk9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTY2FuT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gU2Nhbk9ic2VydmVyKG8sIHBhcmVudCkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9wID0gcGFyZW50O1xuICAgICAgdGhpcy5fZm4gPSBwYXJlbnQuYWNjdW11bGF0b3I7XG4gICAgICB0aGlzLl9ocyA9IHBhcmVudC5oYXNTZWVkO1xuICAgICAgdGhpcy5fcyA9IHBhcmVudC5zZWVkO1xuICAgICAgdGhpcy5faGEgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2EgPSBudWxsO1xuICAgICAgdGhpcy5faHYgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2kgPSAwO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU2Nhbk9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICF0aGlzLl9odiAmJiAodGhpcy5faHYgPSB0cnVlKTtcbiAgICAgIGlmICh0aGlzLl9oYSkge1xuICAgICAgICB0aGlzLl9hID0gdHJ5Q2F0Y2godGhpcy5fZm4pKHRoaXMuX2EsIHgsIHRoaXMuX2ksIHRoaXMuX3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYSA9IHRoaXMuX2hzID8gdHJ5Q2F0Y2godGhpcy5fZm4pKHRoaXMuX3MsIHgsIHRoaXMuX2ksIHRoaXMuX3ApIDogeDtcbiAgICAgICAgdGhpcy5faGEgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2EgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLl9vLm9uRXJyb3IodGhpcy5fYS5lKTsgfVxuICAgICAgdGhpcy5fby5vbk5leHQodGhpcy5fYSk7XG4gICAgICB0aGlzLl9pKys7XG4gICAgfTtcblxuICAgIFNjYW5PYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fby5vbkVycm9yKGUpO1xuICAgIH07XG5cbiAgICBTY2FuT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICF0aGlzLl9odiAmJiB0aGlzLl9ocyAmJiB0aGlzLl9vLm9uTmV4dCh0aGlzLl9zKTtcbiAgICAgIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNjYW5PYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICogIEFwcGxpZXMgYW4gYWNjdW11bGF0b3IgZnVuY3Rpb24gb3ZlciBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGFuZCByZXR1cm5zIGVhY2ggaW50ZXJtZWRpYXRlIHJlc3VsdC4gVGhlIG9wdGlvbmFsIHNlZWQgdmFsdWUgaXMgdXNlZCBhcyB0aGUgaW5pdGlhbCBhY2N1bXVsYXRvciB2YWx1ZS5cbiAgKiAgRm9yIGFnZ3JlZ2F0aW9uIGJlaGF2aW9yIHdpdGggbm8gaW50ZXJtZWRpYXRlIHJlc3VsdHMsIHNlZSBPYnNlcnZhYmxlLmFnZ3JlZ2F0ZS5cbiAgKiBAcGFyYW0ge01peGVkfSBbc2VlZF0gVGhlIGluaXRpYWwgYWNjdW11bGF0b3IgdmFsdWUuXG4gICogQHBhcmFtIHtGdW5jdGlvbn0gYWNjdW11bGF0b3IgQW4gYWNjdW11bGF0b3IgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbiBlYWNoIGVsZW1lbnQuXG4gICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgYWNjdW11bGF0ZWQgdmFsdWVzLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uc2NhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFzU2VlZCA9IGZhbHNlLCBzZWVkLCBhY2N1bXVsYXRvciA9IGFyZ3VtZW50c1swXTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgaGFzU2VlZCA9IHRydWU7XG4gICAgICBzZWVkID0gYXJndW1lbnRzWzFdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFNjYW5PYnNlcnZhYmxlKHRoaXMsIGFjY3VtdWxhdG9yLCBoYXNTZWVkLCBzZWVkKTtcbiAgfTtcblxuICB2YXIgU2tpcExhc3RPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTa2lwTGFzdE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gU2tpcExhc3RPYnNlcnZhYmxlKHNvdXJjZSwgYykge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9jID0gYztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFNraXBMYXN0T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG5ldyBTa2lwTGFzdE9ic2VydmVyKG8sIHRoaXMuX2MpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNraXBMYXN0T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBTa2lwTGFzdE9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhTa2lwTGFzdE9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFNraXBMYXN0T2JzZXJ2ZXIobywgYykge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9jID0gYztcbiAgICAgIHRoaXMuX3EgPSBbXTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFNraXBMYXN0T2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdGhpcy5fcS5wdXNoKHgpO1xuICAgICAgdGhpcy5fcS5sZW5ndGggPiB0aGlzLl9jICYmIHRoaXMuX28ub25OZXh0KHRoaXMuX3Euc2hpZnQoKSk7XG4gICAgfTtcblxuICAgIFNraXBMYXN0T2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHRoaXMuX28ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgU2tpcExhc3RPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2tpcExhc3RPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqICBCeXBhc3NlcyBhIHNwZWNpZmllZCBudW1iZXIgb2YgZWxlbWVudHMgYXQgdGhlIGVuZCBvZiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFRoaXMgb3BlcmF0b3IgYWNjdW11bGF0ZXMgYSBxdWV1ZSB3aXRoIGEgbGVuZ3RoIGVub3VnaCB0byBzdG9yZSB0aGUgZmlyc3QgYGNvdW50YCBlbGVtZW50cy4gQXMgbW9yZSBlbGVtZW50cyBhcmVcbiAgICogIHJlY2VpdmVkLCBlbGVtZW50cyBhcmUgdGFrZW4gZnJvbSB0aGUgZnJvbnQgb2YgdGhlIHF1ZXVlIGFuZCBwcm9kdWNlZCBvbiB0aGUgcmVzdWx0IHNlcXVlbmNlLiBUaGlzIGNhdXNlcyBlbGVtZW50cyB0byBiZSBkZWxheWVkLlxuICAgKiBAcGFyYW0gY291bnQgTnVtYmVyIG9mIGVsZW1lbnRzIHRvIGJ5cGFzcyBhdCB0aGUgZW5kIG9mIHRoZSBzb3VyY2Ugc2VxdWVuY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGNvbnRhaW5pbmcgdGhlIHNvdXJjZSBzZXF1ZW5jZSBlbGVtZW50cyBleGNlcHQgZm9yIHRoZSBieXBhc3NlZCBvbmVzIGF0IHRoZSBlbmQuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uc2tpcExhc3QgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICBpZiAoY291bnQgPCAwKSB7IHRocm93IG5ldyBBcmd1bWVudE91dE9mUmFuZ2VFcnJvcigpOyB9XG4gICAgcmV0dXJuIG5ldyBTa2lwTGFzdE9ic2VydmFibGUodGhpcywgY291bnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiAgUHJlcGVuZHMgYSBzZXF1ZW5jZSBvZiB2YWx1ZXMgdG8gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aXRoIGFuIG9wdGlvbmFsIHNjaGVkdWxlciBhbmQgYW4gYXJndW1lbnQgbGlzdCBvZiB2YWx1ZXMgdG8gcHJlcGVuZC5cbiAgICogIEBleGFtcGxlXG4gICAqICB2YXIgcmVzID0gc291cmNlLnN0YXJ0V2l0aCgxLCAyLCAzKTtcbiAgICogIHZhciByZXMgPSBzb3VyY2Uuc3RhcnRXaXRoKFJ4LlNjaGVkdWxlci50aW1lb3V0LCAxLCAyLCAzKTtcbiAgICogQHBhcmFtIHtBcmd1bWVudHN9IGFyZ3MgVGhlIHNwZWNpZmllZCB2YWx1ZXMgdG8gcHJlcGVuZCB0byB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGhlIHNvdXJjZSBzZXF1ZW5jZSBwcmVwZW5kZWQgd2l0aCB0aGUgc3BlY2lmaWVkIHZhbHVlcy5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5zdGFydFdpdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlcywgc2NoZWR1bGVyLCBzdGFydCA9IDA7XG4gICAgaWYgKCEhYXJndW1lbnRzLmxlbmd0aCAmJiBpc1NjaGVkdWxlcihhcmd1bWVudHNbMF0pKSB7XG4gICAgICBzY2hlZHVsZXIgPSBhcmd1bWVudHNbMF07XG4gICAgICBzdGFydCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlciA9IGltbWVkaWF0ZVNjaGVkdWxlcjtcbiAgICB9XG4gICAgZm9yKHZhciBhcmdzID0gW10sIGkgPSBzdGFydCwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7IGFyZ3MucHVzaChhcmd1bWVudHNbaV0pOyB9XG4gICAgcmV0dXJuIGVudW1lcmFibGVPZihbb2JzZXJ2YWJsZUZyb21BcnJheShhcmdzLCBzY2hlZHVsZXIpLCB0aGlzXSkuY29uY2F0KCk7XG4gIH07XG5cbiAgdmFyIFRha2VMYXN0T2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRha2VMYXN0T2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gVGFrZUxhc3RPYnNlcnZlcihvLCBjKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX2MgPSBjO1xuICAgICAgdGhpcy5fcSA9IFtdO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVGFrZUxhc3RPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9xLnB1c2goeCk7XG4gICAgICB0aGlzLl9xLmxlbmd0aCA+IHRoaXMuX2MgJiYgdGhpcy5fcS5zaGlmdCgpO1xuICAgIH07XG5cbiAgICBUYWtlTGFzdE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIFRha2VMYXN0T2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdoaWxlICh0aGlzLl9xLmxlbmd0aCA+IDApIHsgdGhpcy5fby5vbk5leHQodGhpcy5fcS5zaGlmdCgpKTsgfVxuICAgICAgdGhpcy5fby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGFrZUxhc3RPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIGEgc3BlY2lmaWVkIG51bWJlciBvZiBjb250aWd1b3VzIGVsZW1lbnRzIGZyb20gdGhlIGVuZCBvZiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFRoaXMgb3BlcmF0b3IgYWNjdW11bGF0ZXMgYSBidWZmZXIgd2l0aCBhIGxlbmd0aCBlbm91Z2ggdG8gc3RvcmUgZWxlbWVudHMgY291bnQgZWxlbWVudHMuIFVwb24gY29tcGxldGlvbiBvZlxuICAgKiAgdGhlIHNvdXJjZSBzZXF1ZW5jZSwgdGhpcyBidWZmZXIgaXMgZHJhaW5lZCBvbiB0aGUgcmVzdWx0IHNlcXVlbmNlLiBUaGlzIGNhdXNlcyB0aGUgZWxlbWVudHMgdG8gYmUgZGVsYXllZC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiBlbGVtZW50cyB0byB0YWtlIGZyb20gdGhlIGVuZCBvZiB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBjb250YWluaW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gdGhlIGVuZCBvZiB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnRha2VMYXN0ID0gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgaWYgKGNvdW50IDwgMCkgeyB0aHJvdyBuZXcgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IoKTsgfVxuICAgIHZhciBzb3VyY2UgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IFRha2VMYXN0T2JzZXJ2ZXIobywgY291bnQpKTtcbiAgICB9LCBzb3VyY2UpO1xuICB9O1xuXG5vYnNlcnZhYmxlUHJvdG8uZmxhdE1hcENvbmNhdCA9IG9ic2VydmFibGVQcm90by5jb25jYXRNYXAgPSBmdW5jdGlvbihzZWxlY3RvciwgcmVzdWx0U2VsZWN0b3IsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gbmV3IEZsYXRNYXBPYnNlcnZhYmxlKHRoaXMsIHNlbGVjdG9yLCByZXN1bHRTZWxlY3RvciwgdGhpc0FyZykubWVyZ2UoMSk7XG59O1xuICB2YXIgTWFwT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoTWFwT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcblxuICAgIGZ1bmN0aW9uIE1hcE9ic2VydmFibGUoc291cmNlLCBzZWxlY3RvciwgdGhpc0FyZykge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLnNlbGVjdG9yID0gYmluZENhbGxiYWNrKHNlbGVjdG9yLCB0aGlzQXJnLCAzKTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlubmVyTWFwKHNlbGVjdG9yLCBzZWxmKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHgsIGksIG8pIHsgcmV0dXJuIHNlbGVjdG9yLmNhbGwodGhpcywgc2VsZi5zZWxlY3Rvcih4LCBpLCBvKSwgaSwgbyk7IH1cbiAgICB9XG5cbiAgICBNYXBPYnNlcnZhYmxlLnByb3RvdHlwZS5pbnRlcm5hbE1hcCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgdGhpc0FyZykge1xuICAgICAgcmV0dXJuIG5ldyBNYXBPYnNlcnZhYmxlKHRoaXMuc291cmNlLCBpbm5lck1hcChzZWxlY3RvciwgdGhpcyksIHRoaXNBcmcpO1xuICAgIH07XG5cbiAgICBNYXBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIobywgdGhpcy5zZWxlY3RvciwgdGhpcykpO1xuICAgIH07XG5cbiAgICBpbmhlcml0cyhJbm5lck9ic2VydmVyLCBBYnN0cmFjdE9ic2VydmVyKTtcbiAgICBmdW5jdGlvbiBJbm5lck9ic2VydmVyKG8sIHNlbGVjdG9yLCBzb3VyY2UpIHtcbiAgICAgIHRoaXMubyA9IG87XG4gICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuaSA9IDA7XG4gICAgICBBYnN0cmFjdE9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLnNlbGVjdG9yKSh4LCB0aGlzLmkrKywgdGhpcy5zb3VyY2UpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuby5vbkVycm9yKHJlc3VsdC5lKTsgfVxuICAgICAgdGhpcy5vLm9uTmV4dChyZXN1bHQpO1xuICAgIH07XG5cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLm8ub25FcnJvcihlKTtcbiAgICB9O1xuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBNYXBPYnNlcnZhYmxlO1xuXG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgKiBQcm9qZWN0cyBlYWNoIGVsZW1lbnQgb2YgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSBpbnRvIGEgbmV3IGZvcm0gYnkgaW5jb3Jwb3JhdGluZyB0aGUgZWxlbWVudCdzIGluZGV4LlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IHNlbGVjdG9yIEEgdHJhbnNmb3JtIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggc291cmNlIGVsZW1lbnQ7IHRoZSBzZWNvbmQgcGFyYW1ldGVyIG9mIHRoZSBmdW5jdGlvbiByZXByZXNlbnRzIHRoZSBpbmRleCBvZiB0aGUgc291cmNlIGVsZW1lbnQuXG4gICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBPYmplY3QgdG8gdXNlIGFzIHRoaXMgd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hvc2UgZWxlbWVudHMgYXJlIHRoZSByZXN1bHQgb2YgaW52b2tpbmcgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiBvbiBlYWNoIGVsZW1lbnQgb2Ygc291cmNlLlxuICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ubWFwID0gb2JzZXJ2YWJsZVByb3RvLnNlbGVjdCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgdGhpc0FyZykge1xuICAgIHZhciBzZWxlY3RvckZuID0gdHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nID8gc2VsZWN0b3IgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxlY3RvcjsgfTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIE1hcE9ic2VydmFibGUgP1xuICAgICAgdGhpcy5pbnRlcm5hbE1hcChzZWxlY3RvckZuLCB0aGlzQXJnKSA6XG4gICAgICBuZXcgTWFwT2JzZXJ2YWJsZSh0aGlzLCBzZWxlY3RvckZuLCB0aGlzQXJnKTtcbiAgfTtcblxuICBmdW5jdGlvbiBwbHVja2VyKGFyZ3MsIGxlbikge1xuICAgIHJldHVybiBmdW5jdGlvbiBtYXBwZXIoeCkge1xuICAgICAgdmFyIGN1cnJlbnRQcm9wID0geDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIHAgPSBjdXJyZW50UHJvcFthcmdzW2ldXTtcbiAgICAgICAgaWYgKHR5cGVvZiBwICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGN1cnJlbnRQcm9wID0gcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudFByb3A7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgb2YgYSBzcGVjaWZpZWQgbmVzdGVkIHByb3BlcnR5IGZyb20gYWxsIGVsZW1lbnRzIGluXG4gICAqIHRoZSBPYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0ge0FyZ3VtZW50c30gYXJndW1lbnRzIFRoZSBuZXN0ZWQgcHJvcGVydGllcyB0byBwbHVjay5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFJldHVybnMgYSBuZXcgT2JzZXJ2YWJsZSBzZXF1ZW5jZSBvZiBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucGx1Y2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBpZiAobGVuID09PSAwKSB7IHRocm93IG5ldyBFcnJvcignTGlzdCBvZiBwcm9wZXJ0aWVzIGNhbm5vdCBiZSBlbXB0eS4nKTsgfVxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykgeyBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyB9XG4gICAgcmV0dXJuIHRoaXMubWFwKHBsdWNrZXIoYXJncywgbGVuKSk7XG4gIH07XG5cbm9ic2VydmFibGVQcm90by5mbGF0TWFwID0gb2JzZXJ2YWJsZVByb3RvLnNlbGVjdE1hbnkgPSBmdW5jdGlvbihzZWxlY3RvciwgcmVzdWx0U2VsZWN0b3IsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gbmV3IEZsYXRNYXBPYnNlcnZhYmxlKHRoaXMsIHNlbGVjdG9yLCByZXN1bHRTZWxlY3RvciwgdGhpc0FyZykubWVyZ2VBbGwoKTtcbn07XG5cblxuLy9cbi8vUnguT2JzZXJ2YWJsZS5wcm90b3R5cGUuZmxhdE1hcFdpdGhNYXhDb25jdXJyZW50ID0gZnVuY3Rpb24obGltaXQsIHNlbGVjdG9yLCByZXN1bHRTZWxlY3RvciwgdGhpc0FyZykge1xuLy8gICAgcmV0dXJuIG5ldyBGbGF0TWFwT2JzZXJ2YWJsZSh0aGlzLCBzZWxlY3RvciwgcmVzdWx0U2VsZWN0b3IsIHRoaXNBcmcpLm1lcmdlKGxpbWl0KTtcbi8vfTtcbi8vXG5cblJ4Lk9ic2VydmFibGUucHJvdG90eXBlLmZsYXRNYXBMYXRlc3QgPSBmdW5jdGlvbihzZWxlY3RvciwgcmVzdWx0U2VsZWN0b3IsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gbmV3IEZsYXRNYXBPYnNlcnZhYmxlKHRoaXMsIHNlbGVjdG9yLCByZXN1bHRTZWxlY3RvciwgdGhpc0FyZykuc3dpdGNoTGF0ZXN0KCk7XG59O1xuICB2YXIgU2tpcE9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoU2tpcE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gU2tpcE9ic2VydmFibGUoc291cmNlLCBjb3VudCkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLnNraXBDb3VudCA9IGNvdW50O1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIFNraXBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIobywgdGhpcy5za2lwQ291bnQpKTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIElubmVyT2JzZXJ2ZXIobywgYykge1xuICAgICAgdGhpcy5jID0gYztcbiAgICAgIHRoaXMuciA9IGM7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25OZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgIGlmICh0aGlzLnIgPD0gMCkgeyBcbiAgICAgICAgdGhpcy5vLm9uTmV4dCh4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuci0tO1xuICAgICAgfVxuICAgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHsgdGhpcy5pc1N0b3BwZWQgPSB0cnVlOyB0aGlzLm8ub25FcnJvcihlKTsgfVxuICAgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUub25Db21wbGV0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHsgdGhpcy5pc1N0b3BwZWQgPSB0cnVlOyB0aGlzLm8ub25Db21wbGV0ZWQoKTsgfVxuICAgIH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmlzU3RvcHBlZCA9IHRydWU7IH07XG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm8ub25FcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gU2tpcE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTsgIFxuICBcbiAgLyoqXG4gICAqIEJ5cGFzc2VzIGEgc3BlY2lmaWVkIG51bWJlciBvZiBlbGVtZW50cyBpbiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlbWFpbmluZyBlbGVtZW50cy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBiZWZvcmUgcmV0dXJuaW5nIHRoZSByZW1haW5pbmcgZWxlbWVudHMuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIHRoYXQgb2NjdXIgYWZ0ZXIgdGhlIHNwZWNpZmllZCBpbmRleCBpbiB0aGUgaW5wdXQgc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uc2tpcCA9IGZ1bmN0aW9uIChjb3VudCkge1xuICAgIGlmIChjb3VudCA8IDApIHsgdGhyb3cgbmV3IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yKCk7IH1cbiAgICByZXR1cm4gbmV3IFNraXBPYnNlcnZhYmxlKHRoaXMsIGNvdW50KTtcbiAgfTtcbiAgdmFyIFNraXBXaGlsZU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNraXBXaGlsZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gU2tpcFdoaWxlT2JzZXJ2YWJsZShzb3VyY2UsIGZuKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX2ZuID0gZm47XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBTa2lwV2hpbGVPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IFNraXBXaGlsZU9ic2VydmVyKG8sIHRoaXMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNraXBXaGlsZU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgU2tpcFdoaWxlT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFNraXBXaGlsZU9ic2VydmVyLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gU2tpcFdoaWxlT2JzZXJ2ZXIobywgcCkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl9wID0gcDtcbiAgICAgIHRoaXMuX2kgPSAwO1xuICAgICAgdGhpcy5fciA9IGZhbHNlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgU2tpcFdoaWxlT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgaWYgKCF0aGlzLl9yKSB7XG4gICAgICAgIHZhciByZXMgPSB0cnlDYXRjaCh0aGlzLl9wLl9mbikoeCwgdGhpcy5faSsrLCB0aGlzLl9wKTtcbiAgICAgICAgaWYgKHJlcyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIHRoaXMuX28ub25FcnJvcihyZXMuZSk7IH1cbiAgICAgICAgdGhpcy5fciA9ICFyZXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9yICYmIHRoaXMuX28ub25OZXh0KHgpO1xuICAgIH07XG4gICAgU2tpcFdoaWxlT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHsgdGhpcy5fby5vbkVycm9yKGUpOyB9O1xuICAgIFNraXBXaGlsZU9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7IHRoaXMuX28ub25Db21wbGV0ZWQoKTsgfTtcblxuICAgIHJldHVybiBTa2lwV2hpbGVPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqICBCeXBhc3NlcyBlbGVtZW50cyBpbiBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGFzIGxvbmcgYXMgYSBzcGVjaWZpZWQgY29uZGl0aW9uIGlzIHRydWUgYW5kIHRoZW4gcmV0dXJucyB0aGUgcmVtYWluaW5nIGVsZW1lbnRzLlxuICAgKiAgVGhlIGVsZW1lbnQncyBpbmRleCBpcyB1c2VkIGluIHRoZSBsb2dpYyBvZiB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICAgKlxuICAgKiAgdmFyIHJlcyA9IHNvdXJjZS5za2lwV2hpbGUoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA8IDEwOyB9KTtcbiAgICogIHZhciByZXMgPSBzb3VyY2Uuc2tpcFdoaWxlKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHsgcmV0dXJuIHZhbHVlIDwgMTAgfHwgaW5kZXggPCAxMDsgfSk7XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBBIGZ1bmN0aW9uIHRvIHRlc3QgZWFjaCBlbGVtZW50IGZvciBhIGNvbmRpdGlvbjsgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgdGhlIGZ1bmN0aW9uIHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIHRoZSBzb3VyY2UgZWxlbWVudC5cbiAgICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBPYmplY3QgdG8gdXNlIGFzIHRoaXMgd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIGZyb20gdGhlIGlucHV0IHNlcXVlbmNlIHN0YXJ0aW5nIGF0IHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaW5lYXIgc2VyaWVzIHRoYXQgZG9lcyBub3QgcGFzcyB0aGUgdGVzdCBzcGVjaWZpZWQgYnkgcHJlZGljYXRlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnNraXBXaGlsZSA9IGZ1bmN0aW9uIChwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICB2YXIgZm4gPSBiaW5kQ2FsbGJhY2socHJlZGljYXRlLCB0aGlzQXJnLCAzKTtcbiAgICByZXR1cm4gbmV3IFNraXBXaGlsZU9ic2VydmFibGUodGhpcywgZm4pO1xuICB9O1xuXG4gIHZhciBUYWtlT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUYWtlT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBcbiAgICBmdW5jdGlvbiBUYWtlT2JzZXJ2YWJsZShzb3VyY2UsIGNvdW50KSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMudGFrZUNvdW50ID0gY291bnQ7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgVGFrZU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgSW5uZXJPYnNlcnZlcihvLCB0aGlzLnRha2VDb3VudCkpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihvLCBjKSB7XG4gICAgICB0aGlzLm8gPSBvO1xuICAgICAgdGhpcy5jID0gYztcbiAgICAgIHRoaXMuciA9IGM7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBJbm5lck9ic2VydmVyLnByb3RvdHlwZSA9IHtcbiAgICAgIG9uTmV4dDogZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAodGhpcy5yLS0gPiAwKSB7XG4gICAgICAgICAgdGhpcy5vLm9uTmV4dCh4KTtcbiAgICAgICAgICB0aGlzLnIgPD0gMCAmJiB0aGlzLm8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm8ub25FcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Db21wbGV0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHsgdGhpcy5pc1N0b3BwZWQgPSB0cnVlOyB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm8ub25FcnJvcihlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gVGFrZU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTsgIFxuICBcbiAgLyoqXG4gICAqICBSZXR1cm5zIGEgc3BlY2lmaWVkIG51bWJlciBvZiBjb250aWd1b3VzIGVsZW1lbnRzIGZyb20gdGhlIHN0YXJ0IG9mIGFuIG9ic2VydmFibGUgc2VxdWVuY2UsIHVzaW5nIHRoZSBzcGVjaWZpZWQgc2NoZWR1bGVyIGZvciB0aGUgZWRnZSBjYXNlIG9mIHRha2UoMCkuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHJldHVybi5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIFNjaGVkdWxlciB1c2VkIHRvIHByb2R1Y2UgYW4gT25Db21wbGV0ZWQgbWVzc2FnZSBpbiBjYXNlIDxwYXJhbXJlZiBuYW1lPVwiY291bnQgY291bnQ8L3BhcmFtcmVmPiBpcyBzZXQgdG8gMC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBlbGVtZW50cyBmcm9tIHRoZSBzdGFydCBvZiB0aGUgaW5wdXQgc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8udGFrZSA9IGZ1bmN0aW9uIChjb3VudCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKGNvdW50IDwgMCkgeyB0aHJvdyBuZXcgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IoKTsgfVxuICAgIGlmIChjb3VudCA9PT0gMCkgeyByZXR1cm4gb2JzZXJ2YWJsZUVtcHR5KHNjaGVkdWxlcik7IH1cbiAgICByZXR1cm4gbmV3IFRha2VPYnNlcnZhYmxlKHRoaXMsIGNvdW50KTtcbiAgfTtcblxuICB2YXIgVGFrZVdoaWxlT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGFrZVdoaWxlT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBUYWtlV2hpbGVPYnNlcnZhYmxlKHNvdXJjZSwgZm4pIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fZm4gPSBmbjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRha2VXaGlsZU9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgVGFrZVdoaWxlT2JzZXJ2ZXIobywgdGhpcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGFrZVdoaWxlT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIHZhciBUYWtlV2hpbGVPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGFrZVdoaWxlT2JzZXJ2ZXIsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBUYWtlV2hpbGVPYnNlcnZlcihvLCBwKSB7XG4gICAgICB0aGlzLl9vID0gbztcbiAgICAgIHRoaXMuX3AgPSBwO1xuICAgICAgdGhpcy5faSA9IDA7XG4gICAgICB0aGlzLl9yID0gdHJ1ZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFRha2VXaGlsZU9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIGlmICh0aGlzLl9yKSB7XG4gICAgICAgIHRoaXMuX3IgPSB0cnlDYXRjaCh0aGlzLl9wLl9mbikoeCwgdGhpcy5faSsrLCB0aGlzLl9wKTtcbiAgICAgICAgaWYgKHRoaXMuX3IgPT09IGVycm9yT2JqKSB7IHJldHVybiB0aGlzLl9vLm9uRXJyb3IodGhpcy5fci5lKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3IpIHtcbiAgICAgICAgdGhpcy5fby5vbk5leHQoeCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBUYWtlV2hpbGVPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkgeyB0aGlzLl9vLm9uRXJyb3IoZSk7IH07XG4gICAgVGFrZVdoaWxlT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fby5vbkNvbXBsZXRlZCgpOyB9O1xuXG4gICAgcmV0dXJuIFRha2VXaGlsZU9ic2VydmVyO1xuICB9KEFic3RyYWN0T2JzZXJ2ZXIpKTtcblxuICAvKipcbiAgICogIFJldHVybnMgZWxlbWVudHMgZnJvbSBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGFzIGxvbmcgYXMgYSBzcGVjaWZpZWQgY29uZGl0aW9uIGlzIHRydWUuXG4gICAqICBUaGUgZWxlbWVudCdzIGluZGV4IGlzIHVzZWQgaW4gdGhlIGxvZ2ljIG9mIHRoZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBBIGZ1bmN0aW9uIHRvIHRlc3QgZWFjaCBlbGVtZW50IGZvciBhIGNvbmRpdGlvbjsgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgdGhlIGZ1bmN0aW9uIHJlcHJlc2VudHMgdGhlIGluZGV4IG9mIHRoZSBzb3VyY2UgZWxlbWVudC5cbiAgICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBPYmplY3QgdG8gdXNlIGFzIHRoaXMgd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIGZyb20gdGhlIGlucHV0IHNlcXVlbmNlIHRoYXQgb2NjdXIgYmVmb3JlIHRoZSBlbGVtZW50IGF0IHdoaWNoIHRoZSB0ZXN0IG5vIGxvbmdlciBwYXNzZXMuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8udGFrZVdoaWxlID0gZnVuY3Rpb24gKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIHZhciBmbiA9IGJpbmRDYWxsYmFjayhwcmVkaWNhdGUsIHRoaXNBcmcsIDMpO1xuICAgIHJldHVybiBuZXcgVGFrZVdoaWxlT2JzZXJ2YWJsZSh0aGlzLCBmbik7XG4gIH07XG5cbiAgdmFyIEZpbHRlck9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEZpbHRlck9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG5cbiAgICBmdW5jdGlvbiBGaWx0ZXJPYnNlcnZhYmxlKHNvdXJjZSwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMucHJlZGljYXRlID0gYmluZENhbGxiYWNrKHByZWRpY2F0ZSwgdGhpc0FyZywgMyk7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBGaWx0ZXJPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IElubmVyT2JzZXJ2ZXIobywgdGhpcy5wcmVkaWNhdGUsIHRoaXMpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaW5uZXJQcmVkaWNhdGUocHJlZGljYXRlLCBzZWxmKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oeCwgaSwgbykgeyByZXR1cm4gc2VsZi5wcmVkaWNhdGUoeCwgaSwgbykgJiYgcHJlZGljYXRlLmNhbGwodGhpcywgeCwgaSwgbyk7IH1cbiAgICB9XG5cbiAgICBGaWx0ZXJPYnNlcnZhYmxlLnByb3RvdHlwZS5pbnRlcm5hbEZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgICAgcmV0dXJuIG5ldyBGaWx0ZXJPYnNlcnZhYmxlKHRoaXMuc291cmNlLCBpbm5lclByZWRpY2F0ZShwcmVkaWNhdGUsIHRoaXMpLCB0aGlzQXJnKTtcbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoSW5uZXJPYnNlcnZlciwgQWJzdHJhY3RPYnNlcnZlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJPYnNlcnZlcihvLCBwcmVkaWNhdGUsIHNvdXJjZSkge1xuICAgICAgdGhpcy5vID0gbztcbiAgICAgIHRoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLmkgPSAwO1xuICAgICAgQWJzdHJhY3RPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih4KSB7XG4gICAgICB2YXIgc2hvdWxkWWllbGQgPSB0cnlDYXRjaCh0aGlzLnByZWRpY2F0ZSkoeCwgdGhpcy5pKyssIHRoaXMuc291cmNlKTtcbiAgICAgIGlmIChzaG91bGRZaWVsZCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuby5vbkVycm9yKHNob3VsZFlpZWxkLmUpO1xuICAgICAgfVxuICAgICAgc2hvdWxkWWllbGQgJiYgdGhpcy5vLm9uTmV4dCh4KTtcbiAgICB9O1xuXG4gICAgSW5uZXJPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIElubmVyT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuby5vbkNvbXBsZXRlZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRmlsdGVyT2JzZXJ2YWJsZTtcblxuICB9KE9ic2VydmFibGVCYXNlKSk7XG5cbiAgLyoqXG4gICogIEZpbHRlcnMgdGhlIGVsZW1lbnRzIG9mIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgYmFzZWQgb24gYSBwcmVkaWNhdGUgYnkgaW5jb3Jwb3JhdGluZyB0aGUgZWxlbWVudCdzIGluZGV4LlxuICAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBBIGZ1bmN0aW9uIHRvIHRlc3QgZWFjaCBzb3VyY2UgZWxlbWVudCBmb3IgYSBjb25kaXRpb247IHRoZSBzZWNvbmQgcGFyYW1ldGVyIG9mIHRoZSBmdW5jdGlvbiByZXByZXNlbnRzIHRoZSBpbmRleCBvZiB0aGUgc291cmNlIGVsZW1lbnQuXG4gICogQHBhcmFtIHtBbnl9IFt0aGlzQXJnXSBPYmplY3QgdG8gdXNlIGFzIHRoaXMgd2hlbiBleGVjdXRpbmcgY2FsbGJhY2suXG4gICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyBlbGVtZW50cyBmcm9tIHRoZSBpbnB1dCBzZXF1ZW5jZSB0aGF0IHNhdGlzZnkgdGhlIGNvbmRpdGlvbi5cbiAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmZpbHRlciA9IG9ic2VydmFibGVQcm90by53aGVyZSA9IGZ1bmN0aW9uIChwcmVkaWNhdGUsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEZpbHRlck9ic2VydmFibGUgPyB0aGlzLmludGVybmFsRmlsdGVyKHByZWRpY2F0ZSwgdGhpc0FyZykgOlxuICAgICAgbmV3IEZpbHRlck9ic2VydmFibGUodGhpcywgcHJlZGljYXRlLCB0aGlzQXJnKTtcbiAgfTtcblxuZnVuY3Rpb24gY3JlYXRlQ2JPYnNlcnZhYmxlKGZuLCBjdHgsIHNlbGVjdG9yLCBhcmdzKSB7XG4gIHZhciBvID0gbmV3IEFzeW5jU3ViamVjdCgpO1xuXG4gIGFyZ3MucHVzaChjcmVhdGVDYkhhbmRsZXIobywgY3R4LCBzZWxlY3RvcikpO1xuICBmbi5hcHBseShjdHgsIGFyZ3MpO1xuXG4gIHJldHVybiBvLmFzT2JzZXJ2YWJsZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYkhhbmRsZXIobywgY3R4LCBzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlciAoKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3VsdHMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgcmVzdWx0c1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpKSB7XG4gICAgICByZXN1bHRzID0gdHJ5Q2F0Y2goc2VsZWN0b3IpLmFwcGx5KGN0eCwgcmVzdWx0cyk7XG4gICAgICBpZiAocmVzdWx0cyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihyZXN1bHRzLmUpOyB9XG4gICAgICBvLm9uTmV4dChyZXN1bHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgby5vbk5leHQocmVzdWx0c1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvLm9uTmV4dChyZXN1bHRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvLm9uQ29tcGxldGVkKCk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHdpdGggYSBjYWxsYmFjayBhcyB0aGUgbGFzdCBwYXJhbWV0ZXIgdG8gY29udmVydCB0byBhbiBPYnNlcnZhYmxlIHNlcXVlbmNlLlxuICogQHBhcmFtIHtNaXhlZH0gW2N0eF0gVGhlIGNvbnRleHQgZm9yIHRoZSBmdW5jIHBhcmFtZXRlciB0byBiZSBleGVjdXRlZC4gIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtzZWxlY3Rvcl0gQSBzZWxlY3RvciB3aGljaCB0YWtlcyB0aGUgYXJndW1lbnRzIGZyb20gdGhlIGNhbGxiYWNrIHRvIHByb2R1Y2UgYSBzaW5nbGUgaXRlbSB0byB5aWVsZCBvbiBuZXh0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uLCB3aGVuIGV4ZWN1dGVkIHdpdGggdGhlIHJlcXVpcmVkIHBhcmFtZXRlcnMgbWludXMgdGhlIGNhbGxiYWNrLCBwcm9kdWNlcyBhbiBPYnNlcnZhYmxlIHNlcXVlbmNlIHdpdGggYSBzaW5nbGUgdmFsdWUgb2YgdGhlIGFyZ3VtZW50cyB0byB0aGUgY2FsbGJhY2sgYXMgYW4gYXJyYXkuXG4gKi9cbk9ic2VydmFibGUuZnJvbUNhbGxiYWNrID0gZnVuY3Rpb24gKGZuLCBjdHgsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdHlwZW9mIGN0eCA9PT0gJ3VuZGVmaW5lZCcgJiYgKGN0eCA9IHRoaXMpOyBcblxuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KGxlbilcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIHJldHVybiBjcmVhdGVDYk9ic2VydmFibGUoZm4sIGN0eCwgc2VsZWN0b3IsIGFyZ3MpO1xuICB9O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlTm9kZU9ic2VydmFibGUoZm4sIGN0eCwgc2VsZWN0b3IsIGFyZ3MpIHtcbiAgdmFyIG8gPSBuZXcgQXN5bmNTdWJqZWN0KCk7XG5cbiAgYXJncy5wdXNoKGNyZWF0ZU5vZGVIYW5kbGVyKG8sIGN0eCwgc2VsZWN0b3IpKTtcbiAgZm4uYXBwbHkoY3R4LCBhcmdzKTtcblxuICByZXR1cm4gby5hc09ic2VydmFibGUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9kZUhhbmRsZXIobywgY3R4LCBzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlciAoKSB7XG4gICAgdmFyIGVyciA9IGFyZ3VtZW50c1swXTtcbiAgICBpZiAoZXJyKSB7IHJldHVybiBvLm9uRXJyb3IoZXJyKTsgfVxuXG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHsgcmVzdWx0c1tpIC0gMV0gPSBhcmd1bWVudHNbaV07IH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgdmFyIHJlc3VsdHMgPSB0cnlDYXRjaChzZWxlY3RvcikuYXBwbHkoY3R4LCByZXN1bHRzKTtcbiAgICAgIGlmIChyZXN1bHRzID09PSBlcnJvck9iaikgeyByZXR1cm4gby5vbkVycm9yKHJlc3VsdHMuZSk7IH1cbiAgICAgIG8ub25OZXh0KHJlc3VsdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPD0gMSkge1xuICAgICAgICBvLm9uTmV4dChyZXN1bHRzWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG8ub25OZXh0KHJlc3VsdHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIE5vZGUuanMgY2FsbGJhY2sgc3R5bGUgZnVuY3Rpb24gdG8gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZS4gIFRoaXMgbXVzdCBiZSBpbiBmdW5jdGlvbiAoZXJyLCAuLi4pIGZvcm1hdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsXG4gKiBAcGFyYW0ge01peGVkfSBbY3R4XSBUaGUgY29udGV4dCBmb3IgdGhlIGZ1bmMgcGFyYW1ldGVyIHRvIGJlIGV4ZWN1dGVkLiAgSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gdW5kZWZpbmVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3NlbGVjdG9yXSBBIHNlbGVjdG9yIHdoaWNoIHRha2VzIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgY2FsbGJhY2sgbWludXMgdGhlIGVycm9yIHRvIHByb2R1Y2UgYSBzaW5nbGUgaXRlbSB0byB5aWVsZCBvbiBuZXh0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBbiBhc3luYyBmdW5jdGlvbiB3aGljaCB3aGVuIGFwcGxpZWQsIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aXRoIHRoZSBjYWxsYmFjayBhcmd1bWVudHMgYXMgYW4gYXJyYXkuXG4gKi9cbk9ic2VydmFibGUuZnJvbU5vZGVDYWxsYmFjayA9IGZ1bmN0aW9uIChmbiwgY3R4LCBzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHR5cGVvZiBjdHggPT09ICd1bmRlZmluZWQnICYmIChjdHggPSB0aGlzKTsgXG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkobGVuKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHsgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTsgfVxuICAgIHJldHVybiBjcmVhdGVOb2RlT2JzZXJ2YWJsZShmbiwgY3R4LCBzZWxlY3RvciwgYXJncyk7XG4gIH07XG59O1xuXG4gIGZ1bmN0aW9uIGlzTm9kZUxpc3QoZWwpIHtcbiAgICBpZiAocm9vdC5TdGF0aWNOb2RlTGlzdCkge1xuICAgICAgLy8gSUU4IFNwZWNpZmljXG4gICAgICAvLyBpbnN0YW5jZW9mIGlzIHNsb3dlciB0aGFuIE9iamVjdCN0b1N0cmluZywgYnV0IE9iamVjdCN0b1N0cmluZyB3aWxsIG5vdCB3b3JrIGFzIGludGVuZGVkIGluIElFOFxuICAgICAgcmV0dXJuIGVsIGluc3RhbmNlb2Ygcm9vdC5TdGF0aWNOb2RlTGlzdCB8fCBlbCBpbnN0YW5jZW9mIHJvb3QuTm9kZUxpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZWwpID09PSAnW29iamVjdCBOb2RlTGlzdF0nO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIExpc3RlbkRpc3Bvc2FibGUoZSwgbiwgZm4pIHtcbiAgICB0aGlzLl9lID0gZTtcbiAgICB0aGlzLl9uID0gbjtcbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX2UuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9uLCB0aGlzLl9mbiwgZmFsc2UpO1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICB9XG4gIExpc3RlbkRpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgIHRoaXMuX2UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9uLCB0aGlzLl9mbiwgZmFsc2UpO1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lciAoZWwsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIHZhciBkaXNwb3NhYmxlcyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKCk7XG5cbiAgICAvLyBBc3VtZSBOb2RlTGlzdCBvciBIVE1MQ29sbGVjdGlvblxuICAgIHZhciBlbGVtVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZWwpO1xuICAgIGlmIChpc05vZGVMaXN0KGVsKSB8fCBlbGVtVG9TdHJpbmcgPT09ICdbb2JqZWN0IEhUTUxDb2xsZWN0aW9uXScpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBlbC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBkaXNwb3NhYmxlcy5hZGQoY3JlYXRlRXZlbnRMaXN0ZW5lcihlbC5pdGVtKGkpLCBldmVudE5hbWUsIGhhbmRsZXIpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsKSB7XG4gICAgICBkaXNwb3NhYmxlcy5hZGQobmV3IExpc3RlbkRpc3Bvc2FibGUoZWwsIGV2ZW50TmFtZSwgaGFuZGxlcikpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXNwb3NhYmxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbiB0byBkZXRlcm1pbmUgd2hldGhlciB0byB1c2UgbmF0aXZlIGV2ZW50cyBvbmx5XG4gICAqL1xuICBSeC5jb25maWcudXNlTmF0aXZlRXZlbnRzID0gZmFsc2U7XG5cbiAgdmFyIEV2ZW50T2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhFdmVudE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRXZlbnRPYnNlcnZhYmxlKGVsLCBuYW1lLCBmbikge1xuICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgIHRoaXMuX24gPSBuYW1lO1xuICAgICAgdGhpcy5fZm4gPSBmbjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhhbmRsZXIobywgZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBhcmd1bWVudHNbMF07XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgIHJlc3VsdHMgPSB0cnlDYXRjaChmbikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICBpZiAocmVzdWx0cyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihyZXN1bHRzLmUpOyB9XG4gICAgICAgIH1cbiAgICAgICAgby5vbk5leHQocmVzdWx0cyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIEV2ZW50T2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgdGhpcy5fZWwsXG4gICAgICAgIHRoaXMuX24sXG4gICAgICAgIGNyZWF0ZUhhbmRsZXIobywgdGhpcy5fZm4pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEV2ZW50T2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgYnkgYWRkaW5nIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBtYXRjaGluZyBET01FbGVtZW50IG9yIGVhY2ggaXRlbSBpbiB0aGUgTm9kZUxpc3QuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IFRoZSBET01FbGVtZW50IG9yIE5vZGVMaXN0IHRvIGF0dGFjaCBhIGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lIFRoZSBldmVudCBuYW1lIHRvIGF0dGFjaCB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3NlbGVjdG9yXSBBIHNlbGVjdG9yIHdoaWNoIHRha2VzIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgZXZlbnQgaGFuZGxlciB0byBwcm9kdWNlIGEgc2luZ2xlIGl0ZW0gdG8geWllbGQgb24gbmV4dC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2Ugb2YgZXZlbnRzIGZyb20gdGhlIHNwZWNpZmllZCBlbGVtZW50IGFuZCB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgKi9cbiAgT2JzZXJ2YWJsZS5mcm9tRXZlbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lLCBzZWxlY3Rvcikge1xuICAgIC8vIE5vZGUuanMgc3BlY2lmaWNcbiAgICBpZiAoZWxlbWVudC5hZGRMaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGZyb21FdmVudFBhdHRlcm4oXG4gICAgICAgIGZ1bmN0aW9uIChoKSB7IGVsZW1lbnQuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBoKTsgfSxcbiAgICAgICAgZnVuY3Rpb24gKGgpIHsgZWxlbWVudC5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGgpOyB9LFxuICAgICAgICBzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgLy8gVXNlIG9ubHkgaWYgbm9uLW5hdGl2ZSBldmVudHMgYXJlIGFsbG93ZWRcbiAgICBpZiAoIVJ4LmNvbmZpZy51c2VOYXRpdmVFdmVudHMpIHtcbiAgICAgIC8vIEhhbmRsZXMganEsIEFuZ3VsYXIuanMsIFplcHRvLCBNYXJpb25ldHRlLCBFbWJlci5qc1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm9uID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbGVtZW50Lm9mZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZnJvbUV2ZW50UGF0dGVybihcbiAgICAgICAgICBmdW5jdGlvbiAoaCkgeyBlbGVtZW50Lm9uKGV2ZW50TmFtZSwgaCk7IH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGgpIHsgZWxlbWVudC5vZmYoZXZlbnROYW1lLCBoKTsgfSxcbiAgICAgICAgICBzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBFdmVudE9ic2VydmFibGUoZWxlbWVudCwgZXZlbnROYW1lLCBzZWxlY3RvcikucHVibGlzaCgpLnJlZkNvdW50KCk7XG4gIH07XG5cbiAgdmFyIEV2ZW50UGF0dGVybk9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRXZlbnRQYXR0ZXJuT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBFdmVudFBhdHRlcm5PYnNlcnZhYmxlKGFkZCwgZGVsLCBmbikge1xuICAgICAgdGhpcy5fYWRkID0gYWRkO1xuICAgICAgdGhpcy5fZGVsID0gZGVsO1xuICAgICAgdGhpcy5fZm4gPSBmbjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhhbmRsZXIobywgZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBhcmd1bWVudHNbMF07XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgIHJlc3VsdHMgPSB0cnlDYXRjaChmbikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICBpZiAocmVzdWx0cyA9PT0gZXJyb3JPYmopIHsgcmV0dXJuIG8ub25FcnJvcihyZXN1bHRzLmUpOyB9XG4gICAgICAgIH1cbiAgICAgICAgby5vbk5leHQocmVzdWx0cyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIEV2ZW50UGF0dGVybk9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGZuID0gY3JlYXRlSGFuZGxlcihvLCB0aGlzLl9mbik7XG4gICAgICB2YXIgcmV0dXJuVmFsdWUgPSB0aGlzLl9hZGQoZm4pO1xuICAgICAgcmV0dXJuIG5ldyBFdmVudFBhdHRlcm5EaXNwb3NhYmxlKHRoaXMuX2RlbCwgZm4sIHJldHVyblZhbHVlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gRXZlbnRQYXR0ZXJuRGlzcG9zYWJsZShkZWwsIGZuLCByZXQpIHtcbiAgICAgIHRoaXMuX2RlbCA9IGRlbDtcbiAgICAgIHRoaXMuX2ZuID0gZm47XG4gICAgICB0aGlzLl9yZXQgPSByZXQ7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBFdmVudFBhdHRlcm5EaXNwb3NhYmxlLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICBpc0Z1bmN0aW9uKHRoaXMuX2RlbCkgJiYgdGhpcy5fZGVsKHRoaXMuX2ZuLCB0aGlzLl9yZXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRXZlbnRQYXR0ZXJuT2JzZXJ2YWJsZTtcbiAgfShPYnNlcnZhYmxlQmFzZSkpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgZnJvbSBhbiBldmVudCBlbWl0dGVyIHZpYSBhbiBhZGRIYW5kbGVyL3JlbW92ZUhhbmRsZXIgcGFpci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gYWRkSGFuZGxlciBUaGUgZnVuY3Rpb24gdG8gYWRkIGEgaGFuZGxlciB0byB0aGUgZW1pdHRlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3JlbW92ZUhhbmRsZXJdIFRoZSBvcHRpb25hbCBmdW5jdGlvbiB0byByZW1vdmUgYSBoYW5kbGVyIGZyb20gYW4gZW1pdHRlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3NlbGVjdG9yXSBBIHNlbGVjdG9yIHdoaWNoIHRha2VzIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgZXZlbnQgaGFuZGxlciB0byBwcm9kdWNlIGEgc2luZ2xlIGl0ZW0gdG8geWllbGQgb24gbmV4dC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hpY2ggd3JhcHMgYW4gZXZlbnQgZnJvbSBhbiBldmVudCBlbWl0dGVyXG4gICAqL1xuICB2YXIgZnJvbUV2ZW50UGF0dGVybiA9IE9ic2VydmFibGUuZnJvbUV2ZW50UGF0dGVybiA9IGZ1bmN0aW9uIChhZGRIYW5kbGVyLCByZW1vdmVIYW5kbGVyLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBuZXcgRXZlbnRQYXR0ZXJuT2JzZXJ2YWJsZShhZGRIYW5kbGVyLCByZW1vdmVIYW5kbGVyLCBzZWxlY3RvcikucHVibGlzaCgpLnJlZkNvdW50KCk7XG4gIH07XG5cbiAgdmFyIEZyb21Qcm9taXNlT2JzZXJ2YWJsZSA9IChmdW5jdGlvbihfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhGcm9tUHJvbWlzZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRnJvbVByb21pc2VPYnNlcnZhYmxlKHAsIHMpIHtcbiAgICAgIHRoaXMuX3AgPSBwO1xuICAgICAgdGhpcy5fcyA9IHM7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZU5leHQocywgc3RhdGUpIHtcbiAgICAgIHZhciBvID0gc3RhdGVbMF0sIGRhdGEgPSBzdGF0ZVsxXTtcbiAgICAgIG8ub25OZXh0KGRhdGEpO1xuICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlRXJyb3Iocywgc3RhdGUpIHtcbiAgICAgIHZhciBvID0gc3RhdGVbMF0sIGVyciA9IHN0YXRlWzFdO1xuICAgICAgby5vbkVycm9yKGVycik7XG4gICAgfVxuXG4gICAgRnJvbVByb21pc2VPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24obykge1xuICAgICAgdmFyIHNhZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpLCBzZWxmID0gdGhpcztcblxuICAgICAgdGhpcy5fcFxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHNhZC5zZXREaXNwb3NhYmxlKHNlbGYuX3Muc2NoZWR1bGUoW28sIGRhdGFdLCBzY2hlZHVsZU5leHQpKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIHNhZC5zZXREaXNwb3NhYmxlKHNlbGYuX3Muc2NoZWR1bGUoW28sIGVycl0sIHNjaGVkdWxlRXJyb3IpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzYWQ7XG4gICAgfTtcblxuICAgIHJldHVybiBGcm9tUHJvbWlzZU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgKiBDb252ZXJ0cyBhIFByb21pc2UgdG8gYW4gT2JzZXJ2YWJsZSBzZXF1ZW5jZVxuICAqIEBwYXJhbSB7UHJvbWlzZX0gQW4gRVM2IENvbXBsaWFudCBwcm9taXNlLlxuICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHNlcXVlbmNlIHdoaWNoIHdyYXBzIHRoZSBleGlzdGluZyBwcm9taXNlIHN1Y2Nlc3MgYW5kIGZhaWx1cmUuXG4gICovXG4gIHZhciBvYnNlcnZhYmxlRnJvbVByb21pc2UgPSBPYnNlcnZhYmxlLmZyb21Qcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2UsIHNjaGVkdWxlcikge1xuICAgIHNjaGVkdWxlciB8fCAoc2NoZWR1bGVyID0gZGVmYXVsdFNjaGVkdWxlcik7XG4gICAgcmV0dXJuIG5ldyBGcm9tUHJvbWlzZU9ic2VydmFibGUocHJvbWlzZSwgc2NoZWR1bGVyKTtcbiAgfTtcblxuICAvKlxuICAgKiBDb252ZXJ0cyBhbiBleGlzdGluZyBvYnNlcnZhYmxlIHNlcXVlbmNlIHRvIGFuIEVTNiBDb21wYXRpYmxlIFByb21pc2VcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIHByb21pc2UgPSBSeC5PYnNlcnZhYmxlLnJldHVybig0MikudG9Qcm9taXNlKFJTVlAuUHJvbWlzZSk7XG4gICAqXG4gICAqIC8vIFdpdGggY29uZmlnXG4gICAqIFJ4LmNvbmZpZy5Qcm9taXNlID0gUlNWUC5Qcm9taXNlO1xuICAgKiB2YXIgcHJvbWlzZSA9IFJ4Lk9ic2VydmFibGUucmV0dXJuKDQyKS50b1Byb21pc2UoKTtcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb21pc2VDdG9yXSBUaGUgY29uc3RydWN0b3Igb2YgdGhlIHByb21pc2UuIElmIG5vdCBwcm92aWRlZCwgaXQgbG9va3MgZm9yIGl0IGluIFJ4LmNvbmZpZy5Qcm9taXNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gQW4gRVM2IGNvbXBhdGlibGUgcHJvbWlzZSB3aXRoIHRoZSBsYXN0IHZhbHVlIGZyb20gdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8udG9Qcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2VDdG9yKSB7XG4gICAgcHJvbWlzZUN0b3IgfHwgKHByb21pc2VDdG9yID0gUnguY29uZmlnLlByb21pc2UpO1xuICAgIGlmICghcHJvbWlzZUN0b3IpIHsgdGhyb3cgbmV3IE5vdFN1cHBvcnRlZEVycm9yKCdQcm9taXNlIHR5cGUgbm90IHByb3ZpZGVkIG5vciBpbiBSeC5jb25maWcuUHJvbWlzZScpOyB9XG4gICAgdmFyIHNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBwcm9taXNlQ3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBObyBjYW5jZWxsYXRpb24gY2FuIGJlIGRvbmVcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIHNvdXJjZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFsdWUgPSB2O1xuICAgICAgfSwgcmVqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEludm9rZXMgdGhlIGFzeW5jaHJvbm91cyBmdW5jdGlvbiwgc3VyZmFjaW5nIHRoZSByZXN1bHQgdGhyb3VnaCBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jdGlvbkFzeW5jIEFzeW5jaHJvbm91cyBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgUHJvbWlzZSB0byBydW4uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGV4cG9zaW5nIHRoZSBmdW5jdGlvbidzIHJlc3VsdCB2YWx1ZSwgb3IgYW4gZXhjZXB0aW9uLlxuICAgKi9cbiAgT2JzZXJ2YWJsZS5zdGFydEFzeW5jID0gZnVuY3Rpb24gKGZ1bmN0aW9uQXN5bmMpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRyeUNhdGNoKGZ1bmN0aW9uQXN5bmMpKCk7XG4gICAgaWYgKHByb21pc2UgPT09IGVycm9yT2JqKSB7IHJldHVybiBvYnNlcnZhYmxlVGhyb3cocHJvbWlzZS5lKTsgfVxuICAgIHJldHVybiBvYnNlcnZhYmxlRnJvbVByb21pc2UocHJvbWlzZSk7XG4gIH07XG5cbiAgdmFyIE11bHRpY2FzdE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKE11bHRpY2FzdE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gTXVsdGljYXN0T2JzZXJ2YWJsZShzb3VyY2UsIGZuMSwgZm4yKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX2ZuMSA9IGZuMTtcbiAgICAgIHRoaXMuX2ZuMiA9IGZuMjtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIE11bHRpY2FzdE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZUNvcmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGNvbm5lY3RhYmxlID0gdGhpcy5zb3VyY2UubXVsdGljYXN0KHRoaXMuX2ZuMSgpKTtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZSh0aGlzLl9mbjIoY29ubmVjdGFibGUpLnN1YnNjcmliZShvKSwgY29ubmVjdGFibGUuY29ubmVjdCgpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE11bHRpY2FzdE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICAvKipcbiAgICogTXVsdGljYXN0cyB0aGUgc291cmNlIHNlcXVlbmNlIG5vdGlmaWNhdGlvbnMgdGhyb3VnaCBhbiBpbnN0YW50aWF0ZWQgc3ViamVjdCBpbnRvIGFsbCB1c2VzIG9mIHRoZSBzZXF1ZW5jZSB3aXRoaW4gYSBzZWxlY3RvciBmdW5jdGlvbi4gRWFjaFxuICAgKiBzdWJzY3JpcHRpb24gdG8gdGhlIHJlc3VsdGluZyBzZXF1ZW5jZSBjYXVzZXMgYSBzZXBhcmF0ZSBtdWx0aWNhc3QgaW52b2NhdGlvbiwgZXhwb3NpbmcgdGhlIHNlcXVlbmNlIHJlc3VsdGluZyBmcm9tIHRoZSBzZWxlY3RvciBmdW5jdGlvbidzXG4gICAqIGludm9jYXRpb24uIEZvciBzcGVjaWFsaXphdGlvbnMgd2l0aCBmaXhlZCBzdWJqZWN0IHR5cGVzLCBzZWUgUHVibGlzaCwgUHVibGlzaExhc3QsIGFuZCBSZXBsYXkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIDEgLSByZXMgPSBzb3VyY2UubXVsdGljYXN0KG9ic2VydmFibGUpO1xuICAgKiAyIC0gcmVzID0gc291cmNlLm11bHRpY2FzdChmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgU3ViamVjdCgpOyB9LCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7XG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb258U3ViamVjdH0gc3ViamVjdE9yU3ViamVjdFNlbGVjdG9yXG4gICAqIEZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGFuIGludGVybWVkaWF0ZSBzdWJqZWN0IHRocm91Z2ggd2hpY2ggdGhlIHNvdXJjZSBzZXF1ZW5jZSdzIGVsZW1lbnRzIHdpbGwgYmUgbXVsdGljYXN0IHRvIHRoZSBzZWxlY3RvciBmdW5jdGlvbi5cbiAgICogT3I6XG4gICAqIFN1YmplY3QgdG8gcHVzaCBzb3VyY2UgZWxlbWVudHMgaW50by5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3NlbGVjdG9yXSBPcHRpb25hbCBzZWxlY3RvciBmdW5jdGlvbiB3aGljaCBjYW4gdXNlIHRoZSBtdWx0aWNhc3RlZCBzb3VyY2Ugc2VxdWVuY2Ugc3ViamVjdCB0byB0aGUgcG9saWNpZXMgZW5mb3JjZWQgYnkgdGhlIGNyZWF0ZWQgc3ViamVjdC4gU3BlY2lmaWVkIG9ubHkgaWYgPHBhcmFtcmVmIG5hbWU9XCJzdWJqZWN0T3JTdWJqZWN0U2VsZWN0b3JcIiBpcyBhIGZhY3RvcnkgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgY29udGFpbnMgdGhlIGVsZW1lbnRzIG9mIGEgc2VxdWVuY2UgcHJvZHVjZWQgYnkgbXVsdGljYXN0aW5nIHRoZSBzb3VyY2Ugc2VxdWVuY2Ugd2l0aGluIGEgc2VsZWN0b3IgZnVuY3Rpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ubXVsdGljYXN0ID0gZnVuY3Rpb24gKHN1YmplY3RPclN1YmplY3RTZWxlY3Rvciwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihzdWJqZWN0T3JTdWJqZWN0U2VsZWN0b3IpID9cbiAgICAgIG5ldyBNdWx0aWNhc3RPYnNlcnZhYmxlKHRoaXMsIHN1YmplY3RPclN1YmplY3RTZWxlY3Rvciwgc2VsZWN0b3IpIDpcbiAgICAgIG5ldyBDb25uZWN0YWJsZU9ic2VydmFibGUodGhpcywgc3ViamVjdE9yU3ViamVjdFNlbGVjdG9yKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgaXMgdGhlIHJlc3VsdCBvZiBpbnZva2luZyB0aGUgc2VsZWN0b3Igb24gYSBjb25uZWN0YWJsZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgc2hhcmVzIGEgc2luZ2xlIHN1YnNjcmlwdGlvbiB0byB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZS5cbiAgICogVGhpcyBvcGVyYXRvciBpcyBhIHNwZWNpYWxpemF0aW9uIG9mIE11bHRpY2FzdCB1c2luZyBhIHJlZ3VsYXIgU3ViamVjdC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIHJlc3JlcyA9IHNvdXJjZS5wdWJsaXNoKCk7XG4gICAqIHZhciByZXMgPSBzb3VyY2UucHVibGlzaChmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7XG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtzZWxlY3Rvcl0gU2VsZWN0b3IgZnVuY3Rpb24gd2hpY2ggY2FuIHVzZSB0aGUgbXVsdGljYXN0ZWQgc291cmNlIHNlcXVlbmNlIGFzIG1hbnkgdGltZXMgYXMgbmVlZGVkLCB3aXRob3V0IGNhdXNpbmcgbXVsdGlwbGUgc3Vic2NyaXB0aW9ucyB0byB0aGUgc291cmNlIHNlcXVlbmNlLiBTdWJzY3JpYmVycyB0byB0aGUgZ2l2ZW4gc291cmNlIHdpbGwgcmVjZWl2ZSBhbGwgbm90aWZpY2F0aW9ucyBvZiB0aGUgc291cmNlIGZyb20gdGhlIHRpbWUgb2YgdGhlIHN1YnNjcmlwdGlvbiBvbi5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBwcm9kdWNlZCBieSBtdWx0aWNhc3RpbmcgdGhlIHNvdXJjZSBzZXF1ZW5jZSB3aXRoaW4gYSBzZWxlY3RvciBmdW5jdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5wdWJsaXNoID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yICYmIGlzRnVuY3Rpb24oc2VsZWN0b3IpID9cbiAgICAgIHRoaXMubXVsdGljYXN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBTdWJqZWN0KCk7IH0sIHNlbGVjdG9yKSA6XG4gICAgICB0aGlzLm11bHRpY2FzdChuZXcgU3ViamVjdCgpKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgc2hhcmVzIGEgc2luZ2xlIHN1YnNjcmlwdGlvbiB0byB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZS5cbiAgICogVGhpcyBvcGVyYXRvciBpcyBhIHNwZWNpYWxpemF0aW9uIG9mIHB1Ymxpc2ggd2hpY2ggY3JlYXRlcyBhIHN1YnNjcmlwdGlvbiB3aGVuIHRoZSBudW1iZXIgb2Ygb2JzZXJ2ZXJzIGdvZXMgZnJvbSB6ZXJvIHRvIG9uZSwgdGhlbiBzaGFyZXMgdGhhdCBzdWJzY3JpcHRpb24gd2l0aCBhbGwgc3Vic2VxdWVudCBvYnNlcnZlcnMgdW50aWwgdGhlIG51bWJlciBvZiBvYnNlcnZlcnMgcmV0dXJucyB0byB6ZXJvLCBhdCB3aGljaCBwb2ludCB0aGUgc3Vic2NyaXB0aW9uIGlzIGRpc3Bvc2VkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHByb2R1Y2VkIGJ5IG11bHRpY2FzdGluZyB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnNoYXJlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnB1Ymxpc2goKS5yZWZDb3VudCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGludm9raW5nIHRoZSBzZWxlY3RvciBvbiBhIGNvbm5lY3RhYmxlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBzaGFyZXMgYSBzaW5nbGUgc3Vic2NyaXB0aW9uIHRvIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlIGNvbnRhaW5pbmcgb25seSB0aGUgbGFzdCBub3RpZmljYXRpb24uXG4gICAqIFRoaXMgb3BlcmF0b3IgaXMgYSBzcGVjaWFsaXphdGlvbiBvZiBNdWx0aWNhc3QgdXNpbmcgYSBBc3luY1N1YmplY3QuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciByZXMgPSBzb3VyY2UucHVibGlzaExhc3QoKTtcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5wdWJsaXNoTGFzdChmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7XG4gICAqXG4gICAqIEBwYXJhbSBzZWxlY3RvciBbT3B0aW9uYWxdIFNlbGVjdG9yIGZ1bmN0aW9uIHdoaWNoIGNhbiB1c2UgdGhlIG11bHRpY2FzdGVkIHNvdXJjZSBzZXF1ZW5jZSBhcyBtYW55IHRpbWVzIGFzIG5lZWRlZCwgd2l0aG91dCBjYXVzaW5nIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMgdG8gdGhlIHNvdXJjZSBzZXF1ZW5jZS4gU3Vic2NyaWJlcnMgdG8gdGhlIGdpdmVuIHNvdXJjZSB3aWxsIG9ubHkgcmVjZWl2ZSB0aGUgbGFzdCBub3RpZmljYXRpb24gb2YgdGhlIHNvdXJjZS5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBwcm9kdWNlZCBieSBtdWx0aWNhc3RpbmcgdGhlIHNvdXJjZSBzZXF1ZW5jZSB3aXRoaW4gYSBzZWxlY3RvciBmdW5jdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5wdWJsaXNoTGFzdCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHJldHVybiBzZWxlY3RvciAmJiBpc0Z1bmN0aW9uKHNlbGVjdG9yKSA/XG4gICAgICB0aGlzLm11bHRpY2FzdChmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgQXN5bmNTdWJqZWN0KCk7IH0sIHNlbGVjdG9yKSA6XG4gICAgICB0aGlzLm11bHRpY2FzdChuZXcgQXN5bmNTdWJqZWN0KCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBpcyB0aGUgcmVzdWx0IG9mIGludm9raW5nIHRoZSBzZWxlY3RvciBvbiBhIGNvbm5lY3RhYmxlIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBzaGFyZXMgYSBzaW5nbGUgc3Vic2NyaXB0aW9uIHRvIHRoZSB1bmRlcmx5aW5nIHNlcXVlbmNlIGFuZCBzdGFydHMgd2l0aCBpbml0aWFsVmFsdWUuXG4gICAqIFRoaXMgb3BlcmF0b3IgaXMgYSBzcGVjaWFsaXphdGlvbiBvZiBNdWx0aWNhc3QgdXNpbmcgYSBCZWhhdmlvclN1YmplY3QuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciByZXMgPSBzb3VyY2UucHVibGlzaFZhbHVlKDQyKTtcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5wdWJsaXNoVmFsdWUoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguc2VsZWN0KGZ1bmN0aW9uICh5KSB7IHJldHVybiB5ICogeTsgfSkgfSwgNDIpO1xuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbc2VsZWN0b3JdIE9wdGlvbmFsIHNlbGVjdG9yIGZ1bmN0aW9uIHdoaWNoIGNhbiB1c2UgdGhlIG11bHRpY2FzdGVkIHNvdXJjZSBzZXF1ZW5jZSBhcyBtYW55IHRpbWVzIGFzIG5lZWRlZCwgd2l0aG91dCBjYXVzaW5nIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMgdG8gdGhlIHNvdXJjZSBzZXF1ZW5jZS4gU3Vic2NyaWJlcnMgdG8gdGhlIGdpdmVuIHNvdXJjZSB3aWxsIHJlY2VpdmUgaW1tZWRpYXRlbHkgcmVjZWl2ZSB0aGUgaW5pdGlhbCB2YWx1ZSwgZm9sbG93ZWQgYnkgYWxsIG5vdGlmaWNhdGlvbnMgb2YgdGhlIHNvdXJjZSBmcm9tIHRoZSB0aW1lIG9mIHRoZSBzdWJzY3JpcHRpb24gb24uXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGluaXRpYWxWYWx1ZSBJbml0aWFsIHZhbHVlIHJlY2VpdmVkIGJ5IG9ic2VydmVycyB1cG9uIHN1YnNjcmlwdGlvbi5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBwcm9kdWNlZCBieSBtdWx0aWNhc3RpbmcgdGhlIHNvdXJjZSBzZXF1ZW5jZSB3aXRoaW4gYSBzZWxlY3RvciBmdW5jdGlvbi5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5wdWJsaXNoVmFsdWUgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlT3JTZWxlY3RvciwgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDIgP1xuICAgICAgdGhpcy5tdWx0aWNhc3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChpbml0aWFsVmFsdWUpO1xuICAgICAgfSwgaW5pdGlhbFZhbHVlT3JTZWxlY3RvcikgOlxuICAgICAgdGhpcy5tdWx0aWNhc3QobmV3IEJlaGF2aW9yU3ViamVjdChpbml0aWFsVmFsdWVPclNlbGVjdG9yKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHNoYXJlcyBhIHNpbmdsZSBzdWJzY3JpcHRpb24gdG8gdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UgYW5kIHN0YXJ0cyB3aXRoIGFuIGluaXRpYWxWYWx1ZS5cbiAgICogVGhpcyBvcGVyYXRvciBpcyBhIHNwZWNpYWxpemF0aW9uIG9mIHB1Ymxpc2hWYWx1ZSB3aGljaCBjcmVhdGVzIGEgc3Vic2NyaXB0aW9uIHdoZW4gdGhlIG51bWJlciBvZiBvYnNlcnZlcnMgZ29lcyBmcm9tIHplcm8gdG8gb25lLCB0aGVuIHNoYXJlcyB0aGF0IHN1YnNjcmlwdGlvbiB3aXRoIGFsbCBzdWJzZXF1ZW50IG9ic2VydmVycyB1bnRpbCB0aGUgbnVtYmVyIG9mIG9ic2VydmVycyByZXR1cm5zIHRvIHplcm8sIGF0IHdoaWNoIHBvaW50IHRoZSBzdWJzY3JpcHRpb24gaXMgZGlzcG9zZWQuXG4gICAqIEBwYXJhbSB7TWl4ZWR9IGluaXRpYWxWYWx1ZSBJbml0aWFsIHZhbHVlIHJlY2VpdmVkIGJ5IG9ic2VydmVycyB1cG9uIHN1YnNjcmlwdGlvbi5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudHMgb2YgYSBzZXF1ZW5jZSBwcm9kdWNlZCBieSBtdWx0aWNhc3RpbmcgdGhlIHNvdXJjZSBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5zaGFyZVZhbHVlID0gZnVuY3Rpb24gKGluaXRpYWxWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnB1Ymxpc2hWYWx1ZShpbml0aWFsVmFsdWUpLnJlZkNvdW50KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGlzIHRoZSByZXN1bHQgb2YgaW52b2tpbmcgdGhlIHNlbGVjdG9yIG9uIGEgY29ubmVjdGFibGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IHNoYXJlcyBhIHNpbmdsZSBzdWJzY3JpcHRpb24gdG8gdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UgcmVwbGF5aW5nIG5vdGlmaWNhdGlvbnMgc3ViamVjdCB0byBhIG1heGltdW0gdGltZSBsZW5ndGggZm9yIHRoZSByZXBsYXkgYnVmZmVyLlxuICAgKiBUaGlzIG9wZXJhdG9yIGlzIGEgc3BlY2lhbGl6YXRpb24gb2YgTXVsdGljYXN0IHVzaW5nIGEgUmVwbGF5U3ViamVjdC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5yZXBsYXkobnVsbCwgMyk7XG4gICAqIHZhciByZXMgPSBzb3VyY2UucmVwbGF5KG51bGwsIDMsIDUwMCk7XG4gICAqIHZhciByZXMgPSBzb3VyY2UucmVwbGF5KG51bGwsIDMsIDUwMCwgc2NoZWR1bGVyKTtcbiAgICogdmFyIHJlcyA9IHNvdXJjZS5yZXBsYXkoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgudGFrZSg2KS5yZXBlYXQoKTsgfSwgMywgNTAwLCBzY2hlZHVsZXIpO1xuICAgKlxuICAgKiBAcGFyYW0gc2VsZWN0b3IgW09wdGlvbmFsXSBTZWxlY3RvciBmdW5jdGlvbiB3aGljaCBjYW4gdXNlIHRoZSBtdWx0aWNhc3RlZCBzb3VyY2Ugc2VxdWVuY2UgYXMgbWFueSB0aW1lcyBhcyBuZWVkZWQsIHdpdGhvdXQgY2F1c2luZyBtdWx0aXBsZSBzdWJzY3JpcHRpb25zIHRvIHRoZSBzb3VyY2Ugc2VxdWVuY2UuIFN1YnNjcmliZXJzIHRvIHRoZSBnaXZlbiBzb3VyY2Ugd2lsbCByZWNlaXZlIGFsbCB0aGUgbm90aWZpY2F0aW9ucyBvZiB0aGUgc291cmNlIHN1YmplY3QgdG8gdGhlIHNwZWNpZmllZCByZXBsYXkgYnVmZmVyIHRyaW1taW5nIHBvbGljeS5cbiAgICogQHBhcmFtIGJ1ZmZlclNpemUgW09wdGlvbmFsXSBNYXhpbXVtIGVsZW1lbnQgY291bnQgb2YgdGhlIHJlcGxheSBidWZmZXIuXG4gICAqIEBwYXJhbSB3aW5kb3dTaXplIFtPcHRpb25hbF0gTWF4aW11bSB0aW1lIGxlbmd0aCBvZiB0aGUgcmVwbGF5IGJ1ZmZlci5cbiAgICogQHBhcmFtIHNjaGVkdWxlciBbT3B0aW9uYWxdIFNjaGVkdWxlciB3aGVyZSBjb25uZWN0ZWQgb2JzZXJ2ZXJzIHdpdGhpbiB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIG9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHByb2R1Y2VkIGJ5IG11bHRpY2FzdGluZyB0aGUgc291cmNlIHNlcXVlbmNlIHdpdGhpbiBhIHNlbGVjdG9yIGZ1bmN0aW9uLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnJlcGxheSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYnVmZmVyU2l6ZSwgd2luZG93U2l6ZSwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yICYmIGlzRnVuY3Rpb24oc2VsZWN0b3IpID9cbiAgICAgIHRoaXMubXVsdGljYXN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBSZXBsYXlTdWJqZWN0KGJ1ZmZlclNpemUsIHdpbmRvd1NpemUsIHNjaGVkdWxlcik7IH0sIHNlbGVjdG9yKSA6XG4gICAgICB0aGlzLm11bHRpY2FzdChuZXcgUmVwbGF5U3ViamVjdChidWZmZXJTaXplLCB3aW5kb3dTaXplLCBzY2hlZHVsZXIpKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgc2hhcmVzIGEgc2luZ2xlIHN1YnNjcmlwdGlvbiB0byB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZSByZXBsYXlpbmcgbm90aWZpY2F0aW9ucyBzdWJqZWN0IHRvIGEgbWF4aW11bSB0aW1lIGxlbmd0aCBmb3IgdGhlIHJlcGxheSBidWZmZXIuXG4gICAqIFRoaXMgb3BlcmF0b3IgaXMgYSBzcGVjaWFsaXphdGlvbiBvZiByZXBsYXkgd2hpY2ggY3JlYXRlcyBhIHN1YnNjcmlwdGlvbiB3aGVuIHRoZSBudW1iZXIgb2Ygb2JzZXJ2ZXJzIGdvZXMgZnJvbSB6ZXJvIHRvIG9uZSwgdGhlbiBzaGFyZXMgdGhhdCBzdWJzY3JpcHRpb24gd2l0aCBhbGwgc3Vic2VxdWVudCBvYnNlcnZlcnMgdW50aWwgdGhlIG51bWJlciBvZiBvYnNlcnZlcnMgcmV0dXJucyB0byB6ZXJvLCBhdCB3aGljaCBwb2ludCB0aGUgc3Vic2NyaXB0aW9uIGlzIGRpc3Bvc2VkLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcmVzID0gc291cmNlLnNoYXJlUmVwbGF5KDMpO1xuICAgKiB2YXIgcmVzID0gc291cmNlLnNoYXJlUmVwbGF5KDMsIDUwMCk7XG4gICAqIHZhciByZXMgPSBzb3VyY2Uuc2hhcmVSZXBsYXkoMywgNTAwLCBzY2hlZHVsZXIpO1xuICAgKlxuXG4gICAqIEBwYXJhbSBidWZmZXJTaXplIFtPcHRpb25hbF0gTWF4aW11bSBlbGVtZW50IGNvdW50IG9mIHRoZSByZXBsYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0gd2luZG93IFtPcHRpb25hbF0gTWF4aW11bSB0aW1lIGxlbmd0aCBvZiB0aGUgcmVwbGF5IGJ1ZmZlci5cbiAgICogQHBhcmFtIHNjaGVkdWxlciBbT3B0aW9uYWxdIFNjaGVkdWxlciB3aGVyZSBjb25uZWN0ZWQgb2JzZXJ2ZXJzIHdpdGhpbiB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIG9uLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50cyBvZiBhIHNlcXVlbmNlIHByb2R1Y2VkIGJ5IG11bHRpY2FzdGluZyB0aGUgc291cmNlIHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnNoYXJlUmVwbGF5ID0gZnVuY3Rpb24gKGJ1ZmZlclNpemUsIHdpbmRvd1NpemUsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiB0aGlzLnJlcGxheShudWxsLCBidWZmZXJTaXplLCB3aW5kb3dTaXplLCBzY2hlZHVsZXIpLnJlZkNvdW50KCk7XG4gIH07XG5cbiAgdmFyIFJlZkNvdW50T2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoUmVmQ291bnRPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFJlZkNvdW50T2JzZXJ2YWJsZShzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fY291bnQgPSAwO1xuICAgICAgdGhpcy5fY29ubmVjdGFibGVTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgUmVmQ291bnRPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBzaG91bGRDb25uZWN0ID0gKyt0aGlzLl9jb3VudCA9PT0gMSwgc3Vic2NyaXB0aW9uID0gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKG8pO1xuICAgICAgc2hvdWxkQ29ubmVjdCAmJiAodGhpcy5fY29ubmVjdGFibGVTdWJzY3JpcHRpb24gPSB0aGlzLnNvdXJjZS5jb25uZWN0KCkpO1xuICAgICAgcmV0dXJuIG5ldyBSZWZDb3VudERpc3Bvc2FibGUodGhpcywgc3Vic2NyaXB0aW9uKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gUmVmQ291bnREaXNwb3NhYmxlKHAsIHMpIHtcbiAgICAgIHRoaXMuX3AgPSBwO1xuICAgICAgdGhpcy5fcyA9IHM7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBSZWZDb3VudERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zLmRpc3Bvc2UoKTtcbiAgICAgICAgLS10aGlzLl9wLl9jb3VudCA9PT0gMCAmJiB0aGlzLl9wLl9jb25uZWN0YWJsZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBSZWZDb3VudE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgQ29ubmVjdGFibGVPYnNlcnZhYmxlID0gUnguQ29ubmVjdGFibGVPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhDb25uZWN0YWJsZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGFibGVPYnNlcnZhYmxlKHNvdXJjZSwgc3ViamVjdCkge1xuICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aGlzLl9oYXNTdWJzY3JpcHRpb24gID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgdGhpcy5fc291cmNlT2JzZXJ2YWJsZSA9IHNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgICAgIHRoaXMuX3N1YmplY3QgPSBzdWJqZWN0O1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQ29ubmVjdERpc3Bvc2FibGUocGFyZW50KSB7XG4gICAgICB0aGlzLl9wID0gcGFyZW50O1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQ29ubmVjdERpc3Bvc2FibGUucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wLl9oYXNTdWJzY3JpcHRpb24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29ubmVjdGFibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLl9oYXNTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5faGFzU3Vic2NyaXB0aW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gbmV3IEJpbmFyeURpc3Bvc2FibGUoXG4gICAgICAgICAgdGhpcy5fc291cmNlT2JzZXJ2YWJsZS5zdWJzY3JpYmUodGhpcy5fc3ViamVjdCksXG4gICAgICAgICAgbmV3IENvbm5lY3REaXNwb3NhYmxlKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fc3Vic2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1YmplY3Quc3Vic2NyaWJlKG8pO1xuICAgIH07XG5cbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLnJlZkNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWZDb3VudE9ic2VydmFibGUodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb25uZWN0YWJsZU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIHZhciBUaW1lck9ic2VydmFibGUgPSAoZnVuY3Rpb24oX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoVGltZXJPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFRpbWVyT2JzZXJ2YWJsZShkdCwgcykge1xuICAgICAgdGhpcy5fZHQgPSBkdDtcbiAgICAgIHRoaXMuX3MgPSBzO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVGltZXJPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zLnNjaGVkdWxlRnV0dXJlKG8sIHRoaXMuX2R0LCBzY2hlZHVsZU1ldGhvZCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlTWV0aG9kKHMsIG8pIHtcbiAgICAgIG8ub25OZXh0KDApO1xuICAgICAgby5vbkNvbXBsZXRlZCgpO1xuICAgIH1cblxuICAgIHJldHVybiBUaW1lck9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICBmdW5jdGlvbiBfb2JzZXJ2YWJsZVRpbWVyKGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgVGltZXJPYnNlcnZhYmxlKGR1ZVRpbWUsIHNjaGVkdWxlcik7XG4gIH1cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlVGltZXJEYXRlQW5kUGVyaW9kKGR1ZVRpbWUsIHBlcmlvZCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIGQgPSBkdWVUaW1lLCBwID0gbm9ybWFsaXplVGltZShwZXJpb2QpO1xuICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZUZ1dHVyZSgwLCBkLCBmdW5jdGlvbiAoY291bnQsIHNlbGYpIHtcbiAgICAgICAgaWYgKHAgPiAwKSB7XG4gICAgICAgICAgdmFyIG5vdyA9IHNjaGVkdWxlci5ub3coKTtcbiAgICAgICAgICBkID0gbmV3IERhdGUoZC5nZXRUaW1lKCkgKyBwKTtcbiAgICAgICAgICBkLmdldFRpbWUoKSA8PSBub3cgJiYgKGQgPSBuZXcgRGF0ZShub3cgKyBwKSk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIub25OZXh0KGNvdW50KTtcbiAgICAgICAgc2VsZihjb3VudCArIDEsIG5ldyBEYXRlKGQpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZVRpbWVyVGltZVNwYW5BbmRQZXJpb2QoZHVlVGltZSwgcGVyaW9kLCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gZHVlVGltZSA9PT0gcGVyaW9kID9cbiAgICAgIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlUGVyaW9kaWMoMCwgcGVyaW9kLCBmdW5jdGlvbiAoY291bnQpIHtcbiAgICAgICAgICBvYnNlcnZlci5vbk5leHQoY291bnQpO1xuICAgICAgICAgIHJldHVybiBjb3VudCArIDE7XG4gICAgICAgIH0pO1xuICAgICAgfSkgOlxuICAgICAgb2JzZXJ2YWJsZURlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVUaW1lckRhdGVBbmRQZXJpb2QobmV3IERhdGUoc2NoZWR1bGVyLm5vdygpICsgZHVlVGltZSksIHBlcmlvZCwgc2NoZWR1bGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBwcm9kdWNlcyBhIHZhbHVlIGFmdGVyIGVhY2ggcGVyaW9kLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgMSAtIHJlcyA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCk7XG4gICAqICAyIC0gcmVzID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwLCBSeC5TY2hlZHVsZXIudGltZW91dCk7XG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBwZXJpb2QgUGVyaW9kIGZvciBwcm9kdWNpbmcgdGhlIHZhbHVlcyBpbiB0aGUgcmVzdWx0aW5nIHNlcXVlbmNlIChzcGVjaWZpZWQgYXMgYW4gaW50ZWdlciBkZW5vdGluZyBtaWxsaXNlY29uZHMpLlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gU2NoZWR1bGVyIHRvIHJ1biB0aGUgdGltZXIgb24uIElmIG5vdCBzcGVjaWZpZWQsIFJ4LlNjaGVkdWxlci50aW1lb3V0IGlzIHVzZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHRoYXQgcHJvZHVjZXMgYSB2YWx1ZSBhZnRlciBlYWNoIHBlcmlvZC5cbiAgICovXG4gIHZhciBvYnNlcnZhYmxlaW50ZXJ2YWwgPSBPYnNlcnZhYmxlLmludGVydmFsID0gZnVuY3Rpb24gKHBlcmlvZCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVUaW1lclRpbWVTcGFuQW5kUGVyaW9kKHBlcmlvZCwgcGVyaW9kLCBpc1NjaGVkdWxlcihzY2hlZHVsZXIpID8gc2NoZWR1bGVyIDogZGVmYXVsdFNjaGVkdWxlcik7XG4gIH07XG5cbiAgLyoqXG4gICAqICBSZXR1cm5zIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBwcm9kdWNlcyBhIHZhbHVlIGFmdGVyIGR1ZVRpbWUgaGFzIGVsYXBzZWQgYW5kIHRoZW4gYWZ0ZXIgZWFjaCBwZXJpb2QuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkdWVUaW1lIEFic29sdXRlIChzcGVjaWZpZWQgYXMgYSBEYXRlIG9iamVjdCkgb3IgcmVsYXRpdmUgdGltZSAoc3BlY2lmaWVkIGFzIGFuIGludGVnZXIgZGVub3RpbmcgbWlsbGlzZWNvbmRzKSBhdCB3aGljaCB0byBwcm9kdWNlIHRoZSBmaXJzdCB2YWx1ZS5cbiAgICogQHBhcmFtIHtNaXhlZH0gW3BlcmlvZE9yU2NoZWR1bGVyXSAgUGVyaW9kIHRvIHByb2R1Y2Ugc3Vic2VxdWVudCB2YWx1ZXMgKHNwZWNpZmllZCBhcyBhbiBpbnRlZ2VyIGRlbm90aW5nIG1pbGxpc2Vjb25kcyksIG9yIHRoZSBzY2hlZHVsZXIgdG8gcnVuIHRoZSB0aW1lciBvbi4gSWYgbm90IHNwZWNpZmllZCwgdGhlIHJlc3VsdGluZyB0aW1lciBpcyBub3QgcmVjdXJyaW5nLlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gIFNjaGVkdWxlciB0byBydW4gdGhlIHRpbWVyIG9uLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgdGltZW91dCBzY2hlZHVsZXIgaXMgdXNlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIG9ic2VydmFibGUgc2VxdWVuY2UgdGhhdCBwcm9kdWNlcyBhIHZhbHVlIGFmdGVyIGR1ZSB0aW1lIGhhcyBlbGFwc2VkIGFuZCB0aGVuIGVhY2ggcGVyaW9kLlxuICAgKi9cbiAgdmFyIG9ic2VydmFibGVUaW1lciA9IE9ic2VydmFibGUudGltZXIgPSBmdW5jdGlvbiAoZHVlVGltZSwgcGVyaW9kT3JTY2hlZHVsZXIsIHNjaGVkdWxlcikge1xuICAgIHZhciBwZXJpb2Q7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gZGVmYXVsdFNjaGVkdWxlcik7XG4gICAgaWYgKHBlcmlvZE9yU2NoZWR1bGVyICE9IG51bGwgJiYgdHlwZW9mIHBlcmlvZE9yU2NoZWR1bGVyID09PSAnbnVtYmVyJykge1xuICAgICAgcGVyaW9kID0gcGVyaW9kT3JTY2hlZHVsZXI7XG4gICAgfSBlbHNlIGlmIChpc1NjaGVkdWxlcihwZXJpb2RPclNjaGVkdWxlcikpIHtcbiAgICAgIHNjaGVkdWxlciA9IHBlcmlvZE9yU2NoZWR1bGVyO1xuICAgIH1cbiAgICBpZiAoKGR1ZVRpbWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBkdWVUaW1lID09PSAnbnVtYmVyJykgJiYgcGVyaW9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBfb2JzZXJ2YWJsZVRpbWVyKGR1ZVRpbWUsIHNjaGVkdWxlcik7XG4gICAgfVxuICAgIGlmIChkdWVUaW1lIGluc3RhbmNlb2YgRGF0ZSAmJiBwZXJpb2QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVUaW1lckRhdGVBbmRQZXJpb2QoZHVlVGltZS5nZXRUaW1lKCksIHBlcmlvZE9yU2NoZWR1bGVyLCBzY2hlZHVsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gb2JzZXJ2YWJsZVRpbWVyVGltZVNwYW5BbmRQZXJpb2QoZHVlVGltZSwgcGVyaW9kLCBzY2hlZHVsZXIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGVEZWxheVJlbGF0aXZlKHNvdXJjZSwgZHVlVGltZSwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgYWN0aXZlID0gZmFsc2UsXG4gICAgICAgIGNhbmNlbGFibGUgPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpLFxuICAgICAgICBleGNlcHRpb24gPSBudWxsLFxuICAgICAgICBxID0gW10sXG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZSxcbiAgICAgICAgc3Vic2NyaXB0aW9uO1xuICAgICAgc3Vic2NyaXB0aW9uID0gc291cmNlLm1hdGVyaWFsaXplKCkudGltZXN0YW1wKHNjaGVkdWxlcikuc3Vic2NyaWJlKGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgdmFyIGQsIHNob3VsZFJ1bjtcbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi52YWx1ZS5raW5kID09PSAnRScpIHtcbiAgICAgICAgICBxID0gW107XG4gICAgICAgICAgcS5wdXNoKG5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgZXhjZXB0aW9uID0gbm90aWZpY2F0aW9uLnZhbHVlLmVycm9yO1xuICAgICAgICAgIHNob3VsZFJ1biA9ICFydW5uaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHEucHVzaCh7IHZhbHVlOiBub3RpZmljYXRpb24udmFsdWUsIHRpbWVzdGFtcDogbm90aWZpY2F0aW9uLnRpbWVzdGFtcCArIGR1ZVRpbWUgfSk7XG4gICAgICAgICAgc2hvdWxkUnVuID0gIWFjdGl2ZTtcbiAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRSdW4pIHtcbiAgICAgICAgICBpZiAoZXhjZXB0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBvLm9uRXJyb3IoZXhjZXB0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgICAgICAgICAgY2FuY2VsYWJsZS5zZXREaXNwb3NhYmxlKGQpO1xuICAgICAgICAgICAgZC5zZXREaXNwb3NhYmxlKHNjaGVkdWxlci5zY2hlZHVsZVJlY3Vyc2l2ZUZ1dHVyZShudWxsLCBkdWVUaW1lLCBmdW5jdGlvbiAoXywgc2VsZikge1xuICAgICAgICAgICAgICB2YXIgZSwgcmVjdXJzZUR1ZVRpbWUsIHJlc3VsdCwgc2hvdWxkUmVjdXJzZTtcbiAgICAgICAgICAgICAgaWYgKGV4Y2VwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHEubGVuZ3RoID4gMCAmJiBxWzBdLnRpbWVzdGFtcCAtIHNjaGVkdWxlci5ub3coKSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSBxLnNoaWZ0KCkudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5hY2NlcHQobyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IHdoaWxlIChyZXN1bHQgIT09IG51bGwpO1xuICAgICAgICAgICAgICBzaG91bGRSZWN1cnNlID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJlY3Vyc2VEdWVUaW1lID0gMDtcbiAgICAgICAgICAgICAgaWYgKHEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNob3VsZFJlY3Vyc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlY3Vyc2VEdWVUaW1lID0gTWF0aC5tYXgoMCwgcVswXS50aW1lc3RhbXAgLSBzY2hlZHVsZXIubm93KCkpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGUgPSBleGNlcHRpb247XG4gICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkUmVjdXJzZSkge1xuICAgICAgICAgICAgICAgIHNlbGYobnVsbCwgcmVjdXJzZUR1ZVRpbWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShzdWJzY3JpcHRpb24sIGNhbmNlbGFibGUpO1xuICAgIH0sIHNvdXJjZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlRGVsYXlBYnNvbHV0ZShzb3VyY2UsIGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBvYnNlcnZhYmxlRGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9ic2VydmFibGVEZWxheVJlbGF0aXZlKHNvdXJjZSwgZHVlVGltZSAtIHNjaGVkdWxlci5ub3coKSwgc2NoZWR1bGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGF5V2l0aFNlbGVjdG9yKHNvdXJjZSwgc3Vic2NyaXB0aW9uRGVsYXksIGRlbGF5RHVyYXRpb25TZWxlY3Rvcikge1xuICAgIHZhciBzdWJEZWxheSwgc2VsZWN0b3I7XG4gICAgaWYgKGlzRnVuY3Rpb24oc3Vic2NyaXB0aW9uRGVsYXkpKSB7XG4gICAgICBzZWxlY3RvciA9IHN1YnNjcmlwdGlvbkRlbGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJEZWxheSA9IHN1YnNjcmlwdGlvbkRlbGF5O1xuICAgICAgc2VsZWN0b3IgPSBkZWxheUR1cmF0aW9uU2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGRlbGF5cyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKCksIGF0RW5kID0gZmFsc2UsIHN1YnNjcmlwdGlvbiA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCk7XG5cbiAgICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgICAgIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB2YXIgZGVsYXkgPSB0cnlDYXRjaChzZWxlY3RvcikoeCk7XG4gICAgICAgICAgICBpZiAoZGVsYXkgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IoZGVsYXkuZSk7IH1cbiAgICAgICAgICAgIHZhciBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgICAgICBkZWxheXMuYWRkKGQpO1xuICAgICAgICAgICAgZC5zZXREaXNwb3NhYmxlKGRlbGF5LnN1YnNjcmliZShcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG8ub25OZXh0KHgpO1xuICAgICAgICAgICAgICAgIGRlbGF5cy5yZW1vdmUoZCk7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkgeyBvLm9uRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvLm9uTmV4dCh4KTtcbiAgICAgICAgICAgICAgICBkZWxheXMucmVtb3ZlKGQpO1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoZSkgeyBvLm9uRXJyb3IoZSk7IH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXRFbmQgPSB0cnVlO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICkpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBkb25lICgpIHtcbiAgICAgICAgYXRFbmQgJiYgZGVsYXlzLmxlbmd0aCA9PT0gMCAmJiBvLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghc3ViRGVsYXkpIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKHN1YkRlbGF5LnN1YnNjcmliZShzdGFydCwgZnVuY3Rpb24gKGUpIHsgby5vbkVycm9yKGUpOyB9LCBzdGFydCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoc3Vic2NyaXB0aW9uLCBkZWxheXMpO1xuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBUaW1lIHNoaWZ0cyB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSBieSBkdWVUaW1lLlxuICAgKiAgVGhlIHJlbGF0aXZlIHRpbWUgaW50ZXJ2YWxzIGJldHdlZW4gdGhlIHZhbHVlcyBhcmUgcHJlc2VydmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gZHVlVGltZSBBYnNvbHV0ZSAoc3BlY2lmaWVkIGFzIGEgRGF0ZSBvYmplY3QpIG9yIHJlbGF0aXZlIHRpbWUgKHNwZWNpZmllZCBhcyBhbiBpbnRlZ2VyIGRlbm90aW5nIG1pbGxpc2Vjb25kcykgYnkgd2hpY2ggdG8gc2hpZnQgdGhlIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBTY2hlZHVsZXIgdG8gcnVuIHRoZSBkZWxheSB0aW1lcnMgb24uIElmIG5vdCBzcGVjaWZpZWQsIHRoZSB0aW1lb3V0IHNjaGVkdWxlciBpcyB1c2VkLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gVGltZS1zaGlmdGVkIHNlcXVlbmNlLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLmRlbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaXJzdEFyZyA9IGFyZ3VtZW50c1swXTtcbiAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnbnVtYmVyJyB8fCBmaXJzdEFyZyBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHZhciBkdWVUaW1lID0gZmlyc3RBcmcsIHNjaGVkdWxlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGRlZmF1bHRTY2hlZHVsZXIpO1xuICAgICAgcmV0dXJuIGR1ZVRpbWUgaW5zdGFuY2VvZiBEYXRlID9cbiAgICAgICAgb2JzZXJ2YWJsZURlbGF5QWJzb2x1dGUodGhpcywgZHVlVGltZSwgc2NoZWR1bGVyKSA6XG4gICAgICAgIG9ic2VydmFibGVEZWxheVJlbGF0aXZlKHRoaXMsIGR1ZVRpbWUsIHNjaGVkdWxlcik7XG4gICAgfSBlbHNlIGlmIChPYnNlcnZhYmxlLmlzT2JzZXJ2YWJsZShmaXJzdEFyZykgfHwgaXNGdW5jdGlvbihmaXJzdEFyZykpIHtcbiAgICAgIHJldHVybiBkZWxheVdpdGhTZWxlY3Rvcih0aGlzLCBmaXJzdEFyZywgYXJndW1lbnRzWzFdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgRGVib3VuY2VPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhEZWJvdW5jZU9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gRGVib3VuY2VPYnNlcnZhYmxlKHNvdXJjZSwgZHQsIHMpIHtcbiAgICAgIGlzU2NoZWR1bGVyKHMpIHx8IChzID0gZGVmYXVsdFNjaGVkdWxlcik7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX2R0ID0gZHQ7XG4gICAgICB0aGlzLl9zID0gcztcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIERlYm91bmNlT2JzZXJ2YWJsZS5wcm90b3R5cGUuc3Vic2NyaWJlQ29yZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgY2FuY2VsYWJsZSA9IG5ldyBTZXJpYWxEaXNwb3NhYmxlKCk7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoXG4gICAgICAgIHRoaXMuc291cmNlLnN1YnNjcmliZShuZXcgRGVib3VuY2VPYnNlcnZlcihvLCB0aGlzLnNvdXJjZSwgdGhpcy5fZHQsIHRoaXMuX3MsIGNhbmNlbGFibGUpKSxcbiAgICAgICAgY2FuY2VsYWJsZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBEZWJvdW5jZU9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgRGVib3VuY2VPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoRGVib3VuY2VPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBEZWJvdW5jZU9ic2VydmVyKG9ic2VydmVyLCBzb3VyY2UsIGR1ZVRpbWUsIHNjaGVkdWxlciwgY2FuY2VsYWJsZSkge1xuICAgICAgdGhpcy5fbyA9IG9ic2VydmVyO1xuICAgICAgdGhpcy5fcyA9IHNvdXJjZTtcbiAgICAgIHRoaXMuX2QgPSBkdWVUaW1lO1xuICAgICAgdGhpcy5fc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgdGhpcy5fYyA9IGNhbmNlbGFibGU7XG4gICAgICB0aGlzLl92ID0gbnVsbDtcbiAgICAgIHRoaXMuX2h2ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pZCA9IDA7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBEZWJvdW5jZU9ic2VydmVyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHRoaXMuX2h2ID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3YgPSB4O1xuICAgICAgdmFyIGN1cnJlbnRJZCA9ICsrdGhpcy5faWQsIGQgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIHRoaXMuX2Muc2V0RGlzcG9zYWJsZShkKTtcbiAgICAgIGQuc2V0RGlzcG9zYWJsZSh0aGlzLl9zY2hlZHVsZXIuc2NoZWR1bGVGdXR1cmUodGhpcywgdGhpcy5fZCwgZnVuY3Rpb24gKF8sIHNlbGYpIHtcbiAgICAgICAgc2VsZi5faHYgJiYgc2VsZi5faWQgPT09IGN1cnJlbnRJZCAmJiBzZWxmLl9vLm9uTmV4dCh4KTtcbiAgICAgICAgc2VsZi5faHYgPSBmYWxzZTtcbiAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgRGVib3VuY2VPYnNlcnZlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5fYy5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZSk7XG4gICAgICB0aGlzLl9odiA9IGZhbHNlO1xuICAgICAgdGhpcy5faWQrKztcbiAgICB9O1xuXG4gICAgRGVib3VuY2VPYnNlcnZlci5wcm90b3R5cGUuY29tcGxldGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fYy5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9odiAmJiB0aGlzLl9vLm9uTmV4dCh0aGlzLl92KTtcbiAgICAgIHRoaXMuX28ub25Db21wbGV0ZWQoKTtcbiAgICAgIHRoaXMuX2h2ID0gZmFsc2U7XG4gICAgICB0aGlzLl9pZCsrO1xuICAgIH07XG5cbiAgICByZXR1cm4gRGVib3VuY2VPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VXaXRoU2VsZWN0b3Ioc291cmNlLCBkdXJhdGlvblNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgdmFsdWUsIGhhc1ZhbHVlID0gZmFsc2UsIGNhbmNlbGFibGUgPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpLCBpZCA9IDA7XG4gICAgICB2YXIgc3Vic2NyaXB0aW9uID0gc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICB2YXIgdGhyb3R0bGUgPSB0cnlDYXRjaChkdXJhdGlvblNlbGVjdG9yKSh4KTtcbiAgICAgICAgICBpZiAodGhyb3R0bGUgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IodGhyb3R0bGUuZSk7IH1cblxuICAgICAgICAgIGlzUHJvbWlzZSh0aHJvdHRsZSkgJiYgKHRocm90dGxlID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKHRocm90dGxlKSk7XG5cbiAgICAgICAgICBoYXNWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgdmFsdWUgPSB4O1xuICAgICAgICAgIGlkKys7XG4gICAgICAgICAgdmFyIGN1cnJlbnRpZCA9IGlkLCBkID0gbmV3IFNpbmdsZUFzc2lnbm1lbnREaXNwb3NhYmxlKCk7XG4gICAgICAgICAgY2FuY2VsYWJsZS5zZXREaXNwb3NhYmxlKGQpO1xuICAgICAgICAgIGQuc2V0RGlzcG9zYWJsZSh0aHJvdHRsZS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGhhc1ZhbHVlICYmIGlkID09PSBjdXJyZW50aWQgJiYgby5vbk5leHQodmFsdWUpO1xuICAgICAgICAgICAgICBoYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBkLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkgeyBvLm9uRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGhhc1ZhbHVlICYmIGlkID09PSBjdXJyZW50aWQgJiYgby5vbk5leHQodmFsdWUpO1xuICAgICAgICAgICAgICBoYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBkLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjYW5jZWxhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgICBvLm9uRXJyb3IoZSk7XG4gICAgICAgICAgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICBpZCsrO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FuY2VsYWJsZS5kaXNwb3NlKCk7XG4gICAgICAgICAgaGFzVmFsdWUgJiYgby5vbk5leHQodmFsdWUpO1xuICAgICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICBoYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgIGlkKys7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoc3Vic2NyaXB0aW9uLCBjYW5jZWxhYmxlKTtcbiAgICB9LCBzb3VyY2UpO1xuICB9XG5cbiAgb2JzZXJ2YWJsZVByb3RvLmRlYm91bmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0Z1bmN0aW9uIChhcmd1bWVudHNbMF0pKSB7XG4gICAgICByZXR1cm4gZGVib3VuY2VXaXRoU2VsZWN0b3IodGhpcywgYXJndW1lbnRzWzBdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gbmV3IERlYm91bmNlT2JzZXJ2YWJsZSh0aGlzLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIFRpbWVzdGFtcE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRpbWVzdGFtcE9ic2VydmFibGUsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gVGltZXN0YW1wT2JzZXJ2YWJsZShzb3VyY2UsIHMpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5fcyA9IHM7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUaW1lc3RhbXBPYnNlcnZhYmxlLnByb3RvdHlwZS5zdWJzY3JpYmVDb3JlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zdWJzY3JpYmUobmV3IFRpbWVzdGFtcE9ic2VydmVyKG8sIHRoaXMuX3MpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRpbWVzdGFtcE9ic2VydmFibGU7XG4gIH0oT2JzZXJ2YWJsZUJhc2UpKTtcblxuICB2YXIgVGltZXN0YW1wT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFRpbWVzdGFtcE9ic2VydmVyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFRpbWVzdGFtcE9ic2VydmVyKG8sIHMpIHtcbiAgICAgIHRoaXMuX28gPSBvO1xuICAgICAgdGhpcy5fcyA9IHM7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBUaW1lc3RhbXBPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICB0aGlzLl9vLm9uTmV4dCh7IHZhbHVlOiB4LCB0aW1lc3RhbXA6IHRoaXMuX3Mubm93KCkgfSk7XG4gICAgfTtcblxuICAgIFRpbWVzdGFtcE9ic2VydmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB0aGlzLl9vLm9uRXJyb3IoZSk7XG4gICAgfTtcblxuICAgIFRpbWVzdGFtcE9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl9vLm9uQ29tcGxldGVkKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBUaW1lc3RhbXBPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgLyoqXG4gICAqICBSZWNvcmRzIHRoZSB0aW1lc3RhbXAgZm9yIGVhY2ggdmFsdWUgaW4gYW4gb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogIDEgLSByZXMgPSBzb3VyY2UudGltZXN0YW1wKCk7IC8vIHByb2R1Y2VzIHsgdmFsdWU6IHgsIHRpbWVzdGFtcDogdHMgfVxuICAgKiAgMiAtIHJlcyA9IHNvdXJjZS50aW1lc3RhbXAoUnguU2NoZWR1bGVyLmRlZmF1bHQpO1xuICAgKlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gIFNjaGVkdWxlciB1c2VkIHRvIGNvbXB1dGUgdGltZXN0YW1wcy4gSWYgbm90IHNwZWNpZmllZCwgdGhlIGRlZmF1bHQgc2NoZWR1bGVyIGlzIHVzZWQuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBBbiBvYnNlcnZhYmxlIHNlcXVlbmNlIHdpdGggdGltZXN0YW1wIGluZm9ybWF0aW9uIG9uIHZhbHVlcy5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by50aW1lc3RhbXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gICAgaXNTY2hlZHVsZXIoc2NoZWR1bGVyKSB8fCAoc2NoZWR1bGVyID0gZGVmYXVsdFNjaGVkdWxlcik7XG4gICAgcmV0dXJuIG5ldyBUaW1lc3RhbXBPYnNlcnZhYmxlKHRoaXMsIHNjaGVkdWxlcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2FtcGxlT2JzZXJ2YWJsZShzb3VyY2UsIHNhbXBsZXIpIHtcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBhdEVuZCA9IGZhbHNlLCB2YWx1ZSwgaGFzVmFsdWUgPSBmYWxzZTtcblxuICAgICAgZnVuY3Rpb24gc2FtcGxlU3Vic2NyaWJlKCkge1xuICAgICAgICBpZiAoaGFzVmFsdWUpIHtcbiAgICAgICAgICBoYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgIG8ub25OZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBhdEVuZCAmJiBvLm9uQ29tcGxldGVkKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VTdWJzY3JpcHRpb24gPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKTtcbiAgICAgIHNvdXJjZVN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKHNvdXJjZS5zdWJzY3JpYmUoXG4gICAgICAgIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgIGhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZSkgeyBvLm9uRXJyb3IoZSk7IH0sXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhdEVuZCA9IHRydWU7XG4gICAgICAgICAgc291cmNlU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgKSk7XG5cbiAgICAgIHJldHVybiBuZXcgQmluYXJ5RGlzcG9zYWJsZShcbiAgICAgICAgc291cmNlU3Vic2NyaXB0aW9uLFxuICAgICAgICBzYW1wbGVyLnN1YnNjcmliZShzYW1wbGVTdWJzY3JpYmUsIGZ1bmN0aW9uIChlKSB7IG8ub25FcnJvcihlKTsgfSwgc2FtcGxlU3Vic2NyaWJlKVxuICAgICAgKTtcbiAgICB9LCBzb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqICBTYW1wbGVzIHRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIGF0IGVhY2ggaW50ZXJ2YWwuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAxIC0gcmVzID0gc291cmNlLnNhbXBsZShzYW1wbGVPYnNlcnZhYmxlKTsgLy8gU2FtcGxlciB0aWNrIHNlcXVlbmNlXG4gICAqICAyIC0gcmVzID0gc291cmNlLnNhbXBsZSg1MDAwKTsgLy8gNSBzZWNvbmRzXG4gICAqICAyIC0gcmVzID0gc291cmNlLnNhbXBsZSg1MDAwLCBSeC5TY2hlZHVsZXIudGltZW91dCk7IC8vIDUgc2Vjb25kc1xuICAgKlxuICAgKiBAcGFyYW0ge01peGVkfSBpbnRlcnZhbE9yU2FtcGxlciBJbnRlcnZhbCBhdCB3aGljaCB0byBzYW1wbGUgKHNwZWNpZmllZCBhcyBhbiBpbnRlZ2VyIGRlbm90aW5nIG1pbGxpc2Vjb25kcykgb3IgU2FtcGxlciBPYnNlcnZhYmxlLlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcl0gIFNjaGVkdWxlciB0byBydW4gdGhlIHNhbXBsaW5nIHRpbWVyIG9uLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgdGltZW91dCBzY2hlZHVsZXIgaXMgdXNlZC5cbiAgICogQHJldHVybnMge09ic2VydmFibGV9IFNhbXBsZWQgb2JzZXJ2YWJsZSBzZXF1ZW5jZS5cbiAgICovXG4gIG9ic2VydmFibGVQcm90by5zYW1wbGUgPSBvYnNlcnZhYmxlUHJvdG8udGhyb3R0bGVMYXRlc3QgPSBmdW5jdGlvbiAoaW50ZXJ2YWxPclNhbXBsZXIsIHNjaGVkdWxlcikge1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGRlZmF1bHRTY2hlZHVsZXIpO1xuICAgIHJldHVybiB0eXBlb2YgaW50ZXJ2YWxPclNhbXBsZXIgPT09ICdudW1iZXInID9cbiAgICAgIHNhbXBsZU9ic2VydmFibGUodGhpcywgb2JzZXJ2YWJsZWludGVydmFsKGludGVydmFsT3JTYW1wbGVyLCBzY2hlZHVsZXIpKSA6XG4gICAgICBzYW1wbGVPYnNlcnZhYmxlKHRoaXMsIGludGVydmFsT3JTYW1wbGVyKTtcbiAgfTtcblxuICB2YXIgVGltZW91dEVycm9yID0gUnguVGltZW91dEVycm9yID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ1RpbWVvdXQgaGFzIG9jY3VycmVkJztcbiAgICB0aGlzLm5hbWUgPSAnVGltZW91dEVycm9yJztcbiAgICBFcnJvci5jYWxsKHRoaXMpO1xuICB9O1xuICBUaW1lb3V0RXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIHRpbWVvdXRXaXRoU2VsZWN0b3Ioc291cmNlLCBmaXJzdFRpbWVvdXQsIHRpbWVvdXREdXJhdGlvblNlbGVjdG9yLCBvdGhlcikge1xuICAgIGlmIChpc0Z1bmN0aW9uKGZpcnN0VGltZW91dCkpIHtcbiAgICAgIG90aGVyID0gdGltZW91dER1cmF0aW9uU2VsZWN0b3I7XG4gICAgICB0aW1lb3V0RHVyYXRpb25TZWxlY3RvciA9IGZpcnN0VGltZW91dDtcbiAgICAgIGZpcnN0VGltZW91dCA9IG9ic2VydmFibGVOZXZlcigpO1xuICAgIH1cbiAgICBvdGhlciB8fCAob3RoZXIgPSBvYnNlcnZhYmxlVGhyb3cobmV3IFRpbWVvdXRFcnJvcigpKSk7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKSxcbiAgICAgICAgdGltZXIgPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpLFxuICAgICAgICBvcmlnaW5hbCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuXG4gICAgICBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShvcmlnaW5hbCk7XG5cbiAgICAgIHZhciBpZCA9IDAsIHN3aXRjaGVkID0gZmFsc2U7XG5cbiAgICAgIGZ1bmN0aW9uIHNldFRpbWVyKHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIG15SWQgPSBpZCwgZCA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRpbWVyV2lucygpIHtcbiAgICAgICAgICBzd2l0Y2hlZCA9IChteUlkID09PSBpZCk7XG4gICAgICAgICAgcmV0dXJuIHN3aXRjaGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZXIuc2V0RGlzcG9zYWJsZShkKTtcbiAgICAgICAgZC5zZXREaXNwb3NhYmxlKHRpbWVvdXQuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aW1lcldpbnMoKSAmJiBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShvdGhlci5zdWJzY3JpYmUobykpO1xuICAgICAgICAgIGQuZGlzcG9zZSgpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHRpbWVyV2lucygpICYmIG8ub25FcnJvcihlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRpbWVyV2lucygpICYmIHN1YnNjcmlwdGlvbi5zZXREaXNwb3NhYmxlKG90aGVyLnN1YnNjcmliZShvKSk7XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIHNldFRpbWVyKGZpcnN0VGltZW91dCk7XG5cbiAgICAgIGZ1bmN0aW9uIG9XaW5zKCkge1xuICAgICAgICB2YXIgcmVzID0gIXN3aXRjaGVkO1xuICAgICAgICBpZiAocmVzKSB7IGlkKys7IH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgb3JpZ2luYWwuc2V0RGlzcG9zYWJsZShzb3VyY2Uuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGlmIChvV2lucygpKSB7XG4gICAgICAgICAgby5vbk5leHQoeCk7XG4gICAgICAgICAgdmFyIHRpbWVvdXQgPSB0cnlDYXRjaCh0aW1lb3V0RHVyYXRpb25TZWxlY3RvcikoeCk7XG4gICAgICAgICAgaWYgKHRpbWVvdXQgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IodGltZW91dC5lKTsgfVxuICAgICAgICAgIHNldFRpbWVyKGlzUHJvbWlzZSh0aW1lb3V0KSA/IG9ic2VydmFibGVGcm9tUHJvbWlzZSh0aW1lb3V0KSA6IHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBvV2lucygpICYmIG8ub25FcnJvcihlKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb1dpbnMoKSAmJiBvLm9uQ29tcGxldGVkKCk7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gbmV3IEJpbmFyeURpc3Bvc2FibGUoc3Vic2NyaXB0aW9uLCB0aW1lcik7XG4gICAgfSwgc291cmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVvdXQoc291cmNlLCBkdWVUaW1lLCBvdGhlciwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKGlzU2NoZWR1bGVyKG90aGVyKSkge1xuICAgICAgc2NoZWR1bGVyID0gb3RoZXI7XG4gICAgICBvdGhlciA9IG9ic2VydmFibGVUaHJvdyhuZXcgVGltZW91dEVycm9yKCkpO1xuICAgIH1cbiAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBFcnJvcikgeyBvdGhlciA9IG9ic2VydmFibGVUaHJvdyhvdGhlcik7IH1cbiAgICBpc1NjaGVkdWxlcihzY2hlZHVsZXIpIHx8IChzY2hlZHVsZXIgPSBkZWZhdWx0U2NoZWR1bGVyKTtcblxuICAgIHJldHVybiBuZXcgQW5vbnltb3VzT2JzZXJ2YWJsZShmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGlkID0gMCxcbiAgICAgICAgb3JpZ2luYWwgPSBuZXcgU2luZ2xlQXNzaWdubWVudERpc3Bvc2FibGUoKSxcbiAgICAgICAgc3Vic2NyaXB0aW9uID0gbmV3IFNlcmlhbERpc3Bvc2FibGUoKSxcbiAgICAgICAgc3dpdGNoZWQgPSBmYWxzZSxcbiAgICAgICAgdGltZXIgPSBuZXcgU2VyaWFsRGlzcG9zYWJsZSgpO1xuXG4gICAgICBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShvcmlnaW5hbCk7XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZVRpbWVyKCkge1xuICAgICAgICB2YXIgbXlJZCA9IGlkO1xuICAgICAgICB0aW1lci5zZXREaXNwb3NhYmxlKHNjaGVkdWxlci5zY2hlZHVsZUZ1dHVyZShudWxsLCBkdWVUaW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3dpdGNoZWQgPSBpZCA9PT0gbXlJZDtcbiAgICAgICAgICBpZiAoc3dpdGNoZWQpIHtcbiAgICAgICAgICAgIGlzUHJvbWlzZShvdGhlcikgJiYgKG90aGVyID0gb2JzZXJ2YWJsZUZyb21Qcm9taXNlKG90aGVyKSk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24uc2V0RGlzcG9zYWJsZShvdGhlci5zdWJzY3JpYmUobykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBjcmVhdGVUaW1lcigpO1xuXG4gICAgICBvcmlnaW5hbC5zZXREaXNwb3NhYmxlKHNvdXJjZS5zdWJzY3JpYmUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgaWYgKCFzd2l0Y2hlZCkge1xuICAgICAgICAgIGlkKys7XG4gICAgICAgICAgby5vbk5leHQoeCk7XG4gICAgICAgICAgY3JlYXRlVGltZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFzd2l0Y2hlZCkge1xuICAgICAgICAgIGlkKys7XG4gICAgICAgICAgby5vbkVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghc3dpdGNoZWQpIHtcbiAgICAgICAgICBpZCsrO1xuICAgICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKHN1YnNjcmlwdGlvbiwgdGltZXIpO1xuICAgIH0sIHNvdXJjZSk7XG4gIH1cblxuICBvYnNlcnZhYmxlUHJvdG8udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlyc3RBcmcgPSBhcmd1bWVudHNbMF07XG4gICAgaWYgKGZpcnN0QXJnIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgZmlyc3RBcmcgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdGltZW91dCh0aGlzLCBmaXJzdEFyZywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgIH0gZWxzZSBpZiAoT2JzZXJ2YWJsZS5pc09ic2VydmFibGUoZmlyc3RBcmcpIHx8IGlzRnVuY3Rpb24oZmlyc3RBcmcpKSB7XG4gICAgICByZXR1cm4gdGltZW91dFdpdGhTZWxlY3Rvcih0aGlzLCBmaXJzdEFyZywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmx5IHRoZSBmaXJzdCBpdGVtIGVtaXR0ZWQgYnkgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIGR1cmluZyBzZXF1ZW50aWFsIHRpbWUgd2luZG93cyBvZiBhIHNwZWNpZmllZCBkdXJhdGlvbi5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHdpbmRvd0R1cmF0aW9uIHRpbWUgdG8gd2FpdCBiZWZvcmUgZW1pdHRpbmcgYW5vdGhlciBpdGVtIGFmdGVyIGVtaXR0aW5nIHRoZSBsYXN0IGl0ZW1cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIHRoZSBTY2hlZHVsZXIgdG8gdXNlIGludGVybmFsbHkgdG8gbWFuYWdlIHRoZSB0aW1lcnMgdGhhdCBoYW5kbGUgdGltZW91dCBmb3IgZWFjaCBpdGVtLiBJZiBub3QgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIFNjaGVkdWxlci50aW1lb3V0LlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSB0aGF0IHBlcmZvcm1zIHRoZSB0aHJvdHRsZSBvcGVyYXRpb24uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8udGhyb3R0bGUgPSBmdW5jdGlvbiAod2luZG93RHVyYXRpb24sIHNjaGVkdWxlcikge1xuICAgIGlzU2NoZWR1bGVyKHNjaGVkdWxlcikgfHwgKHNjaGVkdWxlciA9IGRlZmF1bHRTY2hlZHVsZXIpO1xuICAgIHZhciBkdXJhdGlvbiA9ICt3aW5kb3dEdXJhdGlvbiB8fCAwO1xuICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7IHRocm93IG5ldyBSYW5nZUVycm9yKCd3aW5kb3dEdXJhdGlvbiBjYW5ub3QgYmUgbGVzcyBvciBlcXVhbCB6ZXJvLicpOyB9XG4gICAgdmFyIHNvdXJjZSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgbGFzdE9uTmV4dCA9IDA7XG4gICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShcbiAgICAgICAgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICB2YXIgbm93ID0gc2NoZWR1bGVyLm5vdygpO1xuICAgICAgICAgIGlmIChsYXN0T25OZXh0ID09PSAwIHx8IG5vdyAtIGxhc3RPbk5leHQgPj0gZHVyYXRpb24pIHtcbiAgICAgICAgICAgIGxhc3RPbk5leHQgPSBub3c7XG4gICAgICAgICAgICBvLm9uTmV4dCh4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sZnVuY3Rpb24gKGUpIHsgby5vbkVycm9yKGUpOyB9LCBmdW5jdGlvbiAoKSB7IG8ub25Db21wbGV0ZWQoKTsgfVxuICAgICAgKTtcbiAgICB9LCBzb3VyY2UpO1xuICB9O1xuXG4gIHZhciBQYXVzYWJsZU9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFBhdXNhYmxlT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBQYXVzYWJsZU9ic2VydmFibGUoc291cmNlLCBwYXVzZXIpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IFN1YmplY3QoKTtcblxuICAgICAgaWYgKHBhdXNlciAmJiBwYXVzZXIuc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMucGF1c2VyID0gdGhpcy5jb250cm9sbGVyLm1lcmdlKHBhdXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhdXNlciA9IHRoaXMuY29udHJvbGxlcjtcbiAgICAgIH1cblxuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgUGF1c2FibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBjb25uID0gdGhpcy5zb3VyY2UucHVibGlzaCgpLFxuICAgICAgICBzdWJzY3JpcHRpb24gPSBjb25uLnN1YnNjcmliZShvKSxcbiAgICAgICAgY29ubmVjdGlvbiA9IGRpc3Bvc2FibGVFbXB0eTtcblxuICAgICAgdmFyIHBhdXNhYmxlID0gdGhpcy5wYXVzZXIuZGlzdGluY3RVbnRpbENoYW5nZWQoKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICBjb25uZWN0aW9uID0gY29ubi5jb25uZWN0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29ubmVjdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgICAgY29ubmVjdGlvbiA9IGRpc3Bvc2FibGVFbXB0eTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXcgTkFyeURpc3Bvc2FibGUoW3N1YnNjcmlwdGlvbiwgY29ubmVjdGlvbiwgcGF1c2FibGVdKTtcbiAgICB9O1xuXG4gICAgUGF1c2FibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuY29udHJvbGxlci5vbk5leHQoZmFsc2UpO1xuICAgIH07XG5cbiAgICBQYXVzYWJsZU9ic2VydmFibGUucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuY29udHJvbGxlci5vbk5leHQodHJ1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBQYXVzYWJsZU9ic2VydmFibGU7XG5cbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgLyoqXG4gICAqIFBhdXNlcyB0aGUgdW5kZXJseWluZyBvYnNlcnZhYmxlIHNlcXVlbmNlIGJhc2VkIHVwb24gdGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hpY2ggeWllbGRzIHRydWUvZmFsc2UuXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBwYXVzZXIgPSBuZXcgUnguU3ViamVjdCgpO1xuICAgKiB2YXIgc291cmNlID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDApLnBhdXNhYmxlKHBhdXNlcik7XG4gICAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gcGF1c2VyIFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHVzZWQgdG8gcGF1c2UgdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aGljaCBpcyBwYXVzZWQgYmFzZWQgdXBvbiB0aGUgcGF1c2VyLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnBhdXNhYmxlID0gZnVuY3Rpb24gKHBhdXNlcikge1xuICAgIHJldHVybiBuZXcgUGF1c2FibGVPYnNlcnZhYmxlKHRoaXMsIHBhdXNlcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gY29tYmluZUxhdGVzdFNvdXJjZShzb3VyY2UsIHN1YmplY3QsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBBbm9ueW1vdXNPYnNlcnZhYmxlKGZ1bmN0aW9uIChvKSB7XG4gICAgICB2YXIgaGFzVmFsdWUgPSBbZmFsc2UsIGZhbHNlXSxcbiAgICAgICAgaGFzVmFsdWVBbGwgPSBmYWxzZSxcbiAgICAgICAgaXNEb25lID0gZmFsc2UsXG4gICAgICAgIHZhbHVlcyA9IG5ldyBBcnJheSgyKSxcbiAgICAgICAgZXJyO1xuXG4gICAgICBmdW5jdGlvbiBuZXh0KHgsIGkpIHtcbiAgICAgICAgdmFsdWVzW2ldID0geDtcbiAgICAgICAgaGFzVmFsdWVbaV0gPSB0cnVlO1xuICAgICAgICBpZiAoaGFzVmFsdWVBbGwgfHwgKGhhc1ZhbHVlQWxsID0gaGFzVmFsdWUuZXZlcnkoaWRlbnRpdHkpKSkge1xuICAgICAgICAgIGlmIChlcnIpIHsgcmV0dXJuIG8ub25FcnJvcihlcnIpOyB9XG4gICAgICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoKHJlc3VsdFNlbGVjdG9yKS5hcHBseShudWxsLCB2YWx1ZXMpO1xuICAgICAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7IHJldHVybiBvLm9uRXJyb3IocmVzLmUpOyB9XG4gICAgICAgICAgby5vbk5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBpc0RvbmUgJiYgdmFsdWVzWzFdICYmIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBCaW5hcnlEaXNwb3NhYmxlKFxuICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKFxuICAgICAgICAgIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICBuZXh0KHgsIDApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXNbMV0pIHtcbiAgICAgICAgICAgICAgby5vbkVycm9yKGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXJyID0gZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlzRG9uZSA9IHRydWU7XG4gICAgICAgICAgICB2YWx1ZXNbMV0gJiYgby5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgIH0pLFxuICAgICAgICBzdWJqZWN0LnN1YnNjcmliZShcbiAgICAgICAgICBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgbmV4dCh4LCAxKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7IG8ub25FcnJvcihlKTsgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgICAgICAgbmV4dCh0cnVlLCAxKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH0sIHNvdXJjZSk7XG4gIH1cblxuICB2YXIgUGF1c2FibGVCdWZmZXJlZE9ic2VydmFibGUgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFBhdXNhYmxlQnVmZmVyZWRPYnNlcnZhYmxlLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFBhdXNhYmxlQnVmZmVyZWRPYnNlcnZhYmxlKHNvdXJjZSwgcGF1c2VyKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICAgIGlmIChwYXVzZXIgJiYgcGF1c2VyLnN1YnNjcmliZSkge1xuICAgICAgICB0aGlzLnBhdXNlciA9IHRoaXMuY29udHJvbGxlci5tZXJnZShwYXVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXVzZXIgPSB0aGlzLmNvbnRyb2xsZXI7XG4gICAgICB9XG5cbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIFBhdXNhYmxlQnVmZmVyZWRPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBxID0gW10sIHByZXZpb3VzU2hvdWxkRmlyZTtcblxuICAgICAgZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHsgd2hpbGUgKHEubGVuZ3RoID4gMCkgeyBvLm9uTmV4dChxLnNoaWZ0KCkpOyB9IH1cblxuICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9XG4gICAgICAgIGNvbWJpbmVMYXRlc3RTb3VyY2UoXG4gICAgICAgICAgdGhpcy5zb3VyY2UsXG4gICAgICAgICAgdGhpcy5wYXVzZXIuc3RhcnRXaXRoKGZhbHNlKS5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzaG91bGRGaXJlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBkYXRhLCBzaG91bGRGaXJlOiBzaG91bGRGaXJlIH07XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgaWYgKHByZXZpb3VzU2hvdWxkRmlyZSAhPT0gdW5kZWZpbmVkICYmIHJlc3VsdHMuc2hvdWxkRmlyZSAhPT0gcHJldmlvdXNTaG91bGRGaXJlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNTaG91bGRGaXJlID0gcmVzdWx0cy5zaG91bGRGaXJlO1xuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBpbiBzaG91bGRGaXJlXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMuc2hvdWxkRmlyZSkgeyBkcmFpblF1ZXVlKCk7IH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c1Nob3VsZEZpcmUgPSByZXN1bHRzLnNob3VsZEZpcmU7XG4gICAgICAgICAgICAgICAgLy8gbmV3IGRhdGFcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5zaG91bGRGaXJlKSB7XG4gICAgICAgICAgICAgICAgICBvLm9uTmV4dChyZXN1bHRzLmRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBxLnB1c2gocmVzdWx0cy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgIGRyYWluUXVldWUoKTtcbiAgICAgICAgICAgICAgby5vbkVycm9yKGVycik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgICAgICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjsgICAgICBcbiAgICB9O1xuXG4gICAgUGF1c2FibGVCdWZmZXJlZE9ic2VydmFibGUucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jb250cm9sbGVyLm9uTmV4dChmYWxzZSk7XG4gICAgfTtcblxuICAgIFBhdXNhYmxlQnVmZmVyZWRPYnNlcnZhYmxlLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIub25OZXh0KHRydWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUGF1c2FibGVCdWZmZXJlZE9ic2VydmFibGU7XG5cbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgLyoqXG4gICAqIFBhdXNlcyB0aGUgdW5kZXJseWluZyBvYnNlcnZhYmxlIHNlcXVlbmNlIGJhc2VkIHVwb24gdGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugd2hpY2ggeWllbGRzIHRydWUvZmFsc2UsXG4gICAqIGFuZCB5aWVsZHMgdGhlIHZhbHVlcyB0aGF0IHdlcmUgYnVmZmVyZWQgd2hpbGUgcGF1c2VkLlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcGF1c2VyID0gbmV3IFJ4LlN1YmplY3QoKTtcbiAgICogdmFyIHNvdXJjZSA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwKS5wYXVzYWJsZUJ1ZmZlcmVkKHBhdXNlcik7XG4gICAqIEBwYXJhbSB7T2JzZXJ2YWJsZX0gcGF1c2VyIFRoZSBvYnNlcnZhYmxlIHNlcXVlbmNlIHVzZWQgdG8gcGF1c2UgdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aGljaCBpcyBwYXVzZWQgYmFzZWQgdXBvbiB0aGUgcGF1c2VyLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnBhdXNhYmxlQnVmZmVyZWQgPSBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBuZXcgUGF1c2FibGVCdWZmZXJlZE9ic2VydmFibGUodGhpcywgc3ViamVjdCk7XG4gIH07XG5cbiAgdmFyIENvbnRyb2xsZWRPYnNlcnZhYmxlID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhDb250cm9sbGVkT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBDb250cm9sbGVkT2JzZXJ2YWJsZSAoc291cmNlLCBlbmFibGVRdWV1ZSwgc2NoZWR1bGVyKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuc3ViamVjdCA9IG5ldyBDb250cm9sbGVkU3ViamVjdChlbmFibGVRdWV1ZSwgc2NoZWR1bGVyKTtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlLm11bHRpY2FzdCh0aGlzLnN1YmplY3QpLnJlZkNvdW50KCk7XG4gICAgfVxuXG4gICAgQ29udHJvbGxlZE9ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShvKTtcbiAgICB9O1xuXG4gICAgQ29udHJvbGxlZE9ic2VydmFibGUucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAobnVtYmVyT2ZJdGVtcykge1xuICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5yZXF1ZXN0KG51bWJlck9mSXRlbXMgPT0gbnVsbCA/IC0xIDogbnVtYmVyT2ZJdGVtcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb250cm9sbGVkT2JzZXJ2YWJsZTtcblxuICB9KE9ic2VydmFibGUpKTtcblxuICB2YXIgQ29udHJvbGxlZFN1YmplY3QgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKENvbnRyb2xsZWRTdWJqZWN0LCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZWRTdWJqZWN0KGVuYWJsZVF1ZXVlLCBzY2hlZHVsZXIpIHtcbiAgICAgIGVuYWJsZVF1ZXVlID09IG51bGwgJiYgKGVuYWJsZVF1ZXVlID0gdHJ1ZSk7XG5cbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5zdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcbiAgICAgIHRoaXMuZW5hYmxlUXVldWUgPSBlbmFibGVRdWV1ZTtcbiAgICAgIHRoaXMucXVldWUgPSBlbmFibGVRdWV1ZSA/IFtdIDogbnVsbDtcbiAgICAgIHRoaXMucmVxdWVzdGVkQ291bnQgPSAwO1xuICAgICAgdGhpcy5yZXF1ZXN0ZWREaXNwb3NhYmxlID0gbnVsbDtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgdGhpcy5oYXNGYWlsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlciB8fCBjdXJyZW50VGhyZWFkU2NoZWR1bGVyO1xuICAgIH1cblxuICAgIGFkZFByb3BlcnRpZXMoQ29udHJvbGxlZFN1YmplY3QucHJvdG90eXBlLCBPYnNlcnZlciwge1xuICAgICAgX3N1YnNjcmliZTogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5zdWJzY3JpYmUobyk7XG4gICAgICB9LFxuICAgICAgb25Db21wbGV0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlUXVldWUgfHwgdGhpcy5xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnN1YmplY3Qub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICB0aGlzLmRpc3Bvc2VDdXJyZW50UmVxdWVzdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucXVldWUucHVzaChOb3RpZmljYXRpb24uY3JlYXRlT25Db21wbGV0ZWQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5oYXNGYWlsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIGlmICghdGhpcy5lbmFibGVRdWV1ZSB8fCB0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc3ViamVjdC5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICB0aGlzLmRpc3Bvc2VDdXJyZW50UmVxdWVzdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucXVldWUucHVzaChOb3RpZmljYXRpb24uY3JlYXRlT25FcnJvcihlcnJvcikpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25OZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdGVkQ291bnQgPD0gMCkge1xuICAgICAgICAgIHRoaXMuZW5hYmxlUXVldWUgJiYgdGhpcy5xdWV1ZS5wdXNoKE5vdGlmaWNhdGlvbi5jcmVhdGVPbk5leHQodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAodGhpcy5yZXF1ZXN0ZWRDb3VudC0tID09PSAwKSAmJiB0aGlzLmRpc3Bvc2VDdXJyZW50UmVxdWVzdCgpO1xuICAgICAgICAgIHRoaXMuc3ViamVjdC5vbk5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3Byb2Nlc3NSZXF1ZXN0OiBmdW5jdGlvbiAobnVtYmVyT2ZJdGVtcykge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVRdWV1ZSkge1xuICAgICAgICAgIHdoaWxlICh0aGlzLnF1ZXVlLmxlbmd0aCA+IDAgJiYgKG51bWJlck9mSXRlbXMgPiAwIHx8IHRoaXMucXVldWVbMF0ua2luZCAhPT0gJ04nKSkge1xuICAgICAgICAgICAgdmFyIGZpcnN0ID0gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgZmlyc3QuYWNjZXB0KHRoaXMuc3ViamVjdCk7XG4gICAgICAgICAgICBpZiAoZmlyc3Qua2luZCA9PT0gJ04nKSB7XG4gICAgICAgICAgICAgIG51bWJlck9mSXRlbXMtLTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcG9zZUN1cnJlbnRSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVtYmVyT2ZJdGVtcztcbiAgICAgIH0sXG4gICAgICByZXF1ZXN0OiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGlzcG9zZUN1cnJlbnRSZXF1ZXN0KCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlcXVlc3RlZERpc3Bvc2FibGUgPSB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShudW1iZXIsXG4gICAgICAgIGZ1bmN0aW9uKHMsIGkpIHtcbiAgICAgICAgICB2YXIgcmVtYWluaW5nID0gc2VsZi5fcHJvY2Vzc1JlcXVlc3QoaSk7XG4gICAgICAgICAgdmFyIHN0b3BwZWQgPSBzZWxmLmhhc0NvbXBsZXRlZCB8fCBzZWxmLmhhc0ZhaWxlZDtcbiAgICAgICAgICBpZiAoIXN0b3BwZWQgJiYgcmVtYWluaW5nID4gMCkge1xuICAgICAgICAgICAgc2VsZi5yZXF1ZXN0ZWRDb3VudCA9IHJlbWFpbmluZztcblxuICAgICAgICAgICAgcmV0dXJuIGRpc3Bvc2FibGVDcmVhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLnJlcXVlc3RlZENvdW50ID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAvLyBTY2hlZHVsZWQgaXRlbSBpcyBzdGlsbCBpbiBwcm9ncmVzcy4gUmV0dXJuIGEgbmV3XG4gICAgICAgICAgICAgIC8vIGRpc3Bvc2FibGUgdG8gYWxsb3cgdGhlIHJlcXVlc3QgdG8gYmUgaW50ZXJydXB0ZWRcbiAgICAgICAgICAgICAgLy8gdmlhIGRpc3Bvc2UuXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0ZWREaXNwb3NhYmxlO1xuICAgICAgfSxcbiAgICAgIGRpc3Bvc2VDdXJyZW50UmVxdWVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0ZWREaXNwb3NhYmxlKSB7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0ZWREaXNwb3NhYmxlLmRpc3Bvc2UoKTtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RlZERpc3Bvc2FibGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ29udHJvbGxlZFN1YmplY3Q7XG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBhIGNvbnRyb2xsZXIgdG8gdGhlIG9ic2VydmFibGUgc2VxdWVuY2Ugd2l0aCB0aGUgYWJpbGl0eSB0byBxdWV1ZS5cbiAgICogQGV4YW1wbGVcbiAgICogdmFyIHNvdXJjZSA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwKS5jb250cm9sbGVkKCk7XG4gICAqIHNvdXJjZS5yZXF1ZXN0KDMpOyAvLyBSZWFkcyAzIHZhbHVlc1xuICAgKiBAcGFyYW0ge2Jvb2x9IGVuYWJsZVF1ZXVlIHRydXRoeSB2YWx1ZSB0byBkZXRlcm1pbmUgaWYgdmFsdWVzIHNob3VsZCBiZSBxdWV1ZWQgcGVuZGluZyB0aGUgbmV4dCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBzY2hlZHVsZXIgZGV0ZXJtaW5lcyBob3cgdGhlIHJlcXVlc3RzIHdpbGwgYmUgc2NoZWR1bGVkXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlfSBUaGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZSB3aGljaCBvbmx5IHByb3BhZ2F0ZXMgdmFsdWVzIG9uIHJlcXVlc3QuXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8uY29udHJvbGxlZCA9IGZ1bmN0aW9uIChlbmFibGVRdWV1ZSwgc2NoZWR1bGVyKSB7XG5cbiAgICBpZiAoZW5hYmxlUXVldWUgJiYgaXNTY2hlZHVsZXIoZW5hYmxlUXVldWUpKSB7XG4gICAgICBzY2hlZHVsZXIgPSBlbmFibGVRdWV1ZTtcbiAgICAgIGVuYWJsZVF1ZXVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZW5hYmxlUXVldWUgPT0gbnVsbCkgeyAgZW5hYmxlUXVldWUgPSB0cnVlOyB9XG4gICAgcmV0dXJuIG5ldyBDb250cm9sbGVkT2JzZXJ2YWJsZSh0aGlzLCBlbmFibGVRdWV1ZSwgc2NoZWR1bGVyKTtcbiAgfTtcblxuICAvKipcbiAgICogUGlwZXMgdGhlIGV4aXN0aW5nIE9ic2VydmFibGUgc2VxdWVuY2UgaW50byBhIE5vZGUuanMgU3RyZWFtLlxuICAgKiBAcGFyYW0ge1N0cmVhbX0gZGVzdCBUaGUgZGVzdGluYXRpb24gTm9kZS5qcyBzdHJlYW0uXG4gICAqIEByZXR1cm5zIHtTdHJlYW19IFRoZSBkZXN0aW5hdGlvbiBzdHJlYW0uXG4gICAqL1xuICBvYnNlcnZhYmxlUHJvdG8ucGlwZSA9IGZ1bmN0aW9uIChkZXN0KSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMucGF1c2FibGVCdWZmZXJlZCgpO1xuXG4gICAgZnVuY3Rpb24gb25EcmFpbigpIHtcbiAgICAgIHNvdXJjZS5yZXN1bWUoKTtcbiAgICB9XG5cbiAgICBkZXN0LmFkZExpc3RlbmVyKCdkcmFpbicsIG9uRHJhaW4pO1xuXG4gICAgc291cmNlLnN1YnNjcmliZShcbiAgICAgIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICFkZXN0LndyaXRlKFN0cmluZyh4KSkgJiYgc291cmNlLnBhdXNlKCk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBkZXN0LmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEhhY2sgY2hlY2sgYmVjYXVzZSBTVERJTyBpcyBub3QgY2xvc2FibGVcbiAgICAgICAgIWRlc3QuX2lzU3RkaW8gJiYgZGVzdC5lbmQoKTtcbiAgICAgICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZHJhaW4nLCBvbkRyYWluKTtcbiAgICAgIH0pO1xuXG4gICAgc291cmNlLnJlc3VtZSgpO1xuXG4gICAgcmV0dXJuIGRlc3Q7XG4gIH07XG5cbiAgdmFyIFRyYW5zZHVjZU9ic2VydmVyID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcbiAgICBpbmhlcml0cyhUcmFuc2R1Y2VPYnNlcnZlciwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBUcmFuc2R1Y2VPYnNlcnZlcihvLCB4Zm9ybSkge1xuICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB0aGlzLl94Zm9ybSA9IHhmb3JtO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgVHJhbnNkdWNlT2JzZXJ2ZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoKHRoaXMuX3hmb3JtWydAQHRyYW5zZHVjZXIvc3RlcCddKS5jYWxsKHRoaXMuX3hmb3JtLCB0aGlzLl9vLCB4KTtcbiAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7IHRoaXMuX28ub25FcnJvcihyZXMuZSk7IH1cbiAgICB9O1xuXG4gICAgVHJhbnNkdWNlT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGUpIHsgdGhpcy5fby5vbkVycm9yKGUpOyB9O1xuXG4gICAgVHJhbnNkdWNlT2JzZXJ2ZXIucHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3hmb3JtWydAQHRyYW5zZHVjZXIvcmVzdWx0J10odGhpcy5fbyk7XG4gICAgfTtcblxuICAgIHJldHVybiBUcmFuc2R1Y2VPYnNlcnZlcjtcbiAgfShBYnN0cmFjdE9ic2VydmVyKSk7XG5cbiAgZnVuY3Rpb24gdHJhbnNmb3JtRm9yT2JzZXJ2ZXIobykge1xuICAgIHJldHVybiB7XG4gICAgICAnQEB0cmFuc2R1Y2VyL2luaXQnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9LFxuICAgICAgJ0BAdHJhbnNkdWNlci9zdGVwJzogZnVuY3Rpb24ob2JzLCBpbnB1dCkge1xuICAgICAgICByZXR1cm4gb2JzLm9uTmV4dChpbnB1dCk7XG4gICAgICB9LFxuICAgICAgJ0BAdHJhbnNkdWNlci9yZXN1bHQnOiBmdW5jdGlvbihvYnMpIHtcbiAgICAgICAgcmV0dXJuIG9icy5vbkNvbXBsZXRlZCgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgYSB0cmFuc2R1Y2VyIHRvIHRyYW5zZm9ybSB0aGUgb2JzZXJ2YWJsZSBzZXF1ZW5jZVxuICAgKiBAcGFyYW0ge1RyYW5zZHVjZXJ9IHRyYW5zZHVjZXIgQSB0cmFuc2R1Y2VyIHRvIGV4ZWN1dGVcbiAgICogQHJldHVybnMge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgc2VxdWVuY2UgY29udGFpbmluZyB0aGUgcmVzdWx0cyBmcm9tIHRoZSB0cmFuc2R1Y2VyLlxuICAgKi9cbiAgb2JzZXJ2YWJsZVByb3RvLnRyYW5zZHVjZSA9IGZ1bmN0aW9uKHRyYW5zZHVjZXIpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcztcbiAgICByZXR1cm4gbmV3IEFub255bW91c09ic2VydmFibGUoZnVuY3Rpb24obykge1xuICAgICAgdmFyIHhmb3JtID0gdHJhbnNkdWNlcih0cmFuc2Zvcm1Gb3JPYnNlcnZlcihvKSk7XG4gICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgVHJhbnNkdWNlT2JzZXJ2ZXIobywgeGZvcm0pKTtcbiAgICB9LCBzb3VyY2UpO1xuICB9O1xuXG4gIHZhciBBbm9ueW1vdXNPYnNlcnZhYmxlID0gUnguQW5vbnltb3VzT2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQW5vbnltb3VzT2JzZXJ2YWJsZSwgX19zdXBlcl9fKTtcblxuICAgIC8vIEZpeCBzdWJzY3JpYmVyIHRvIGNoZWNrIGZvciB1bmRlZmluZWQgb3IgZnVuY3Rpb24gcmV0dXJuZWQgdG8gZGVjb3JhdGUgYXMgRGlzcG9zYWJsZVxuICAgIGZ1bmN0aW9uIGZpeFN1YnNjcmliZXIoc3Vic2NyaWJlcikge1xuICAgICAgcmV0dXJuIHN1YnNjcmliZXIgJiYgaXNGdW5jdGlvbihzdWJzY3JpYmVyLmRpc3Bvc2UpID8gc3Vic2NyaWJlciA6XG4gICAgICAgIGlzRnVuY3Rpb24oc3Vic2NyaWJlcikgPyBkaXNwb3NhYmxlQ3JlYXRlKHN1YnNjcmliZXIpIDogZGlzcG9zYWJsZUVtcHR5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldERpc3Bvc2FibGUocywgc3RhdGUpIHtcbiAgICAgIHZhciBhZG8gPSBzdGF0ZVswXSwgc2VsZiA9IHN0YXRlWzFdO1xuICAgICAgdmFyIHN1YiA9IHRyeUNhdGNoKHNlbGYuX19zdWJzY3JpYmUpLmNhbGwoc2VsZiwgYWRvKTtcbiAgICAgIGlmIChzdWIgPT09IGVycm9yT2JqICYmICFhZG8uZmFpbChlcnJvck9iai5lKSkgeyB0aHJvd2VyKGVycm9yT2JqLmUpOyB9XG4gICAgICBhZG8uc2V0RGlzcG9zYWJsZShmaXhTdWJzY3JpYmVyKHN1YikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIEFub255bW91c09ic2VydmFibGUoc3Vic2NyaWJlLCBwYXJlbnQpIHtcbiAgICAgIHRoaXMuc291cmNlID0gcGFyZW50O1xuICAgICAgdGhpcy5fX3N1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIEFub255bW91c09ic2VydmFibGUucHJvdG90eXBlLl9zdWJzY3JpYmUgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGFkbyA9IG5ldyBBdXRvRGV0YWNoT2JzZXJ2ZXIobyksIHN0YXRlID0gW2FkbywgdGhpc107XG5cbiAgICAgIGlmIChjdXJyZW50VGhyZWFkU2NoZWR1bGVyLnNjaGVkdWxlUmVxdWlyZWQoKSkge1xuICAgICAgICBjdXJyZW50VGhyZWFkU2NoZWR1bGVyLnNjaGVkdWxlKHN0YXRlLCBzZXREaXNwb3NhYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldERpc3Bvc2FibGUobnVsbCwgc3RhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFkbztcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFub255bW91c09ic2VydmFibGU7XG5cbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgdmFyIEF1dG9EZXRhY2hPYnNlcnZlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQXV0b0RldGFjaE9ic2VydmVyLCBfX3N1cGVyX18pO1xuXG4gICAgZnVuY3Rpb24gQXV0b0RldGFjaE9ic2VydmVyKG9ic2VydmVyKSB7XG4gICAgICBfX3N1cGVyX18uY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgIHRoaXMubSA9IG5ldyBTaW5nbGVBc3NpZ25tZW50RGlzcG9zYWJsZSgpO1xuICAgIH1cblxuICAgIHZhciBBdXRvRGV0YWNoT2JzZXJ2ZXJQcm90b3R5cGUgPSBBdXRvRGV0YWNoT2JzZXJ2ZXIucHJvdG90eXBlO1xuXG4gICAgQXV0b0RldGFjaE9ic2VydmVyUHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLm9ic2VydmVyLm9uTmV4dCkuY2FsbCh0aGlzLm9ic2VydmVyLCB2YWx1ZSk7XG4gICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikge1xuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhyb3dlcihyZXN1bHQuZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEF1dG9EZXRhY2hPYnNlcnZlclByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLm9ic2VydmVyLm9uRXJyb3IpLmNhbGwodGhpcy5vYnNlcnZlciwgZXJyKTtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgcmVzdWx0ID09PSBlcnJvck9iaiAmJiB0aHJvd2VyKHJlc3VsdC5lKTtcbiAgICB9O1xuXG4gICAgQXV0b0RldGFjaE9ic2VydmVyUHJvdG90eXBlLmNvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLm9ic2VydmVyLm9uQ29tcGxldGVkKS5jYWxsKHRoaXMub2JzZXJ2ZXIpO1xuICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICByZXN1bHQgPT09IGVycm9yT2JqICYmIHRocm93ZXIocmVzdWx0LmUpO1xuICAgIH07XG5cbiAgICBBdXRvRGV0YWNoT2JzZXJ2ZXJQcm90b3R5cGUuc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyB0aGlzLm0uc2V0RGlzcG9zYWJsZSh2YWx1ZSk7IH07XG4gICAgQXV0b0RldGFjaE9ic2VydmVyUHJvdG90eXBlLmdldERpc3Bvc2FibGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLm0uZ2V0RGlzcG9zYWJsZSgpOyB9O1xuXG4gICAgQXV0b0RldGFjaE9ic2VydmVyUHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfX3N1cGVyX18ucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMubS5kaXNwb3NlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBBdXRvRGV0YWNoT2JzZXJ2ZXI7XG4gIH0oQWJzdHJhY3RPYnNlcnZlcikpO1xuXG4gIHZhciBJbm5lclN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uIChzLCBvKSB7XG4gICAgdGhpcy5fcyA9IHM7XG4gICAgdGhpcy5fbyA9IG87XG4gIH07XG5cbiAgSW5uZXJTdWJzY3JpcHRpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9zLmlzRGlzcG9zZWQgJiYgdGhpcy5fbyAhPT0gbnVsbCkge1xuICAgICAgdmFyIGlkeCA9IHRoaXMuX3Mub2JzZXJ2ZXJzLmluZGV4T2YodGhpcy5fbyk7XG4gICAgICB0aGlzLl9zLm9ic2VydmVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHRoaXMuX28gPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogIFJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgaXMgYm90aCBhbiBvYnNlcnZhYmxlIHNlcXVlbmNlIGFzIHdlbGwgYXMgYW4gb2JzZXJ2ZXIuXG4gICAqICBFYWNoIG5vdGlmaWNhdGlvbiBpcyBicm9hZGNhc3RlZCB0byBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMuXG4gICAqL1xuICB2YXIgU3ViamVjdCA9IFJ4LlN1YmplY3QgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKFN1YmplY3QsIF9fc3VwZXJfXyk7XG4gICAgZnVuY3Rpb24gU3ViamVjdCgpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRQcm9wZXJ0aWVzKFN1YmplY3QucHJvdG90eXBlLCBPYnNlcnZlci5wcm90b3R5cGUsIHtcbiAgICAgIF9zdWJzY3JpYmU6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG8pO1xuICAgICAgICAgIHJldHVybiBuZXcgSW5uZXJTdWJzY3JpcHRpb24odGhpcywgbyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICBvLm9uRXJyb3IodGhpcy5lcnJvcik7XG4gICAgICAgICAgcmV0dXJuIGRpc3Bvc2FibGVFbXB0eTtcbiAgICAgICAgfVxuICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIHJldHVybiBkaXNwb3NhYmxlRW1wdHk7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3ViamVjdCBoYXMgb2JzZXJ2ZXJzIHN1YnNjcmliZWQgdG8gaXQuXG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1YmplY3QgaGFzIG9ic2VydmVycyBzdWJzY3JpYmVkIHRvIGl0LlxuICAgICAgICovXG4gICAgICBoYXNPYnNlcnZlcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7IH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgZW5kIG9mIHRoZSBzZXF1ZW5jZS5cbiAgICAgICAqL1xuICAgICAgb25Db21wbGV0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIG9zW2ldLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge01peGVkfSBlcnJvciBUaGUgZXhjZXB0aW9uIHRvIHNlbmQgdG8gYWxsIG9ic2VydmVycy5cbiAgICAgICAqL1xuICAgICAgb25FcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgb3NbaV0ub25FcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBhcnJpdmFsIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VuZCB0byBhbGwgb2JzZXJ2ZXJzLlxuICAgICAgICovXG4gICAgICBvbk5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBvc1tpXS5vbk5leHQodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogVW5zdWJzY3JpYmUgYWxsIG9ic2VydmVycyBhbmQgcmVsZWFzZSByZXNvdXJjZXMuXG4gICAgICAgKi9cbiAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN1YmplY3QgZnJvbSB0aGUgc3BlY2lmaWVkIG9ic2VydmVyIGFuZCBvYnNlcnZhYmxlLlxuICAgICAqIEBwYXJhbSB7T2JzZXJ2ZXJ9IG9ic2VydmVyIFRoZSBvYnNlcnZlciB1c2VkIHRvIHNlbmQgbWVzc2FnZXMgdG8gdGhlIHN1YmplY3QuXG4gICAgICogQHBhcmFtIHtPYnNlcnZhYmxlfSBvYnNlcnZhYmxlIFRoZSBvYnNlcnZhYmxlIHVzZWQgdG8gc3Vic2NyaWJlIHRvIG1lc3NhZ2VzIHNlbnQgZnJvbSB0aGUgc3ViamVjdC5cbiAgICAgKiBAcmV0dXJucyB7U3ViamVjdH0gU3ViamVjdCBpbXBsZW1lbnRlZCB1c2luZyB0aGUgZ2l2ZW4gb2JzZXJ2ZXIgYW5kIG9ic2VydmFibGUuXG4gICAgICovXG4gICAgU3ViamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAob2JzZXJ2ZXIsIG9ic2VydmFibGUpIHtcbiAgICAgIHJldHVybiBuZXcgQW5vbnltb3VzU3ViamVjdChvYnNlcnZlciwgb2JzZXJ2YWJsZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBTdWJqZWN0O1xuICB9KE9ic2VydmFibGUpKTtcblxuICAvKipcbiAgICogIFJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLlxuICAgKiAgVGhlIGxhc3QgdmFsdWUgYmVmb3JlIHRoZSBPbkNvbXBsZXRlZCBub3RpZmljYXRpb24sIG9yIHRoZSBlcnJvciByZWNlaXZlZCB0aHJvdWdoIE9uRXJyb3IsIGlzIHNlbnQgdG8gYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzLlxuICAgKi9cbiAgdmFyIEFzeW5jU3ViamVjdCA9IFJ4LkFzeW5jU3ViamVjdCA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQXN5bmNTdWJqZWN0LCBfX3N1cGVyX18pO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHN1YmplY3QgdGhhdCBjYW4gb25seSByZWNlaXZlIG9uZSB2YWx1ZSBhbmQgdGhhdCB2YWx1ZSBpcyBjYWNoZWQgZm9yIGFsbCBmdXR1cmUgb2JzZXJ2YXRpb25zLlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEFzeW5jU3ViamVjdCgpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRQcm9wZXJ0aWVzKEFzeW5jU3ViamVjdC5wcm90b3R5cGUsIE9ic2VydmVyLnByb3RvdHlwZSwge1xuICAgICAgX3N1YnNjcmliZTogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvKTtcbiAgICAgICAgICByZXR1cm4gbmV3IElubmVyU3Vic2NyaXB0aW9uKHRoaXMsIG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICBvLm9uRXJyb3IodGhpcy5lcnJvcik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgIG8ub25OZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlzcG9zYWJsZUVtcHR5O1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1YmplY3QgaGFzIG9ic2VydmVycyBzdWJzY3JpYmVkIHRvIGl0LlxuICAgICAgICogQHJldHVybnMge0Jvb2xlYW59IEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdWJqZWN0IGhhcyBvYnNlcnZlcnMgc3Vic2NyaWJlZCB0byBpdC5cbiAgICAgICAqL1xuICAgICAgaGFzT2JzZXJ2ZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBlbmQgb2YgdGhlIHNlcXVlbmNlLCBhbHNvIGNhdXNpbmcgdGhlIGxhc3QgcmVjZWl2ZWQgdmFsdWUgdG8gYmUgc2VudCBvdXQgKGlmIGFueSkuXG4gICAgICAgKi9cbiAgICAgIG9uQ29tcGxldGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpLCBsZW47XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgdmFyIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDtcblxuICAgICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIG8gPSBvc1tpXTtcbiAgICAgICAgICAgICAgby5vbk5leHQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgIG8ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIG9zW2ldLm9uQ29tcGxldGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBlcnJvci5cbiAgICAgICAqIEBwYXJhbSB7TWl4ZWR9IGVycm9yIFRoZSBFcnJvciB0byBzZW5kIHRvIGFsbCBvYnNlcnZlcnMuXG4gICAgICAgKi9cbiAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBvcyA9IGNsb25lQXJyYXkodGhpcy5vYnNlcnZlcnMpLCBsZW4gPSBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgb3NbaV0ub25FcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogU2VuZHMgYSB2YWx1ZSB0byB0aGUgc3ViamVjdC4gVGhlIGxhc3QgdmFsdWUgcmVjZWl2ZWQgYmVmb3JlIHN1Y2Nlc3NmdWwgdGVybWluYXRpb24gd2lsbCBiZSBzZW50IHRvIGFsbCBzdWJzY3JpYmVkIGFuZCBmdXR1cmUgb2JzZXJ2ZXJzLlxuICAgICAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgVGhlIHZhbHVlIHRvIHN0b3JlIGluIHRoZSBzdWJqZWN0LlxuICAgICAgICovXG4gICAgICBvbk5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBVbnN1YnNjcmliZSBhbGwgb2JzZXJ2ZXJzIGFuZCByZWxlYXNlIHJlc291cmNlcy5cbiAgICAgICAqL1xuICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBBc3luY1N1YmplY3Q7XG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIHZhciBBbm9ueW1vdXNTdWJqZWN0ID0gUnguQW5vbnltb3VzU3ViamVjdCA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoQW5vbnltb3VzU3ViamVjdCwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBBbm9ueW1vdXNTdWJqZWN0KG9ic2VydmVyLCBvYnNlcnZhYmxlKSB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICB0aGlzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgYWRkUHJvcGVydGllcyhBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZSwgT2JzZXJ2ZXIucHJvdG90eXBlLCB7XG4gICAgICBfc3Vic2NyaWJlOiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZhYmxlLnN1YnNjcmliZShvKTtcbiAgICAgIH0sXG4gICAgICBvbkNvbXBsZXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9uQ29tcGxldGVkKCk7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25FcnJvcihlcnJvcik7XG4gICAgICB9LFxuICAgICAgb25OZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vbk5leHQodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIEFub255bW91c1N1YmplY3Q7XG4gIH0oT2JzZXJ2YWJsZSkpO1xuXG4gIC8qKlxuICAgKiAgUmVwcmVzZW50cyBhIHZhbHVlIHRoYXQgY2hhbmdlcyBvdmVyIHRpbWUuXG4gICAqICBPYnNlcnZlcnMgY2FuIHN1YnNjcmliZSB0byB0aGUgc3ViamVjdCB0byByZWNlaXZlIHRoZSBsYXN0IChvciBpbml0aWFsKSB2YWx1ZSBhbmQgYWxsIHN1YnNlcXVlbnQgbm90aWZpY2F0aW9ucy5cbiAgICovXG4gIHZhciBCZWhhdmlvclN1YmplY3QgPSBSeC5CZWhhdmlvclN1YmplY3QgPSAoZnVuY3Rpb24gKF9fc3VwZXJfXykge1xuICAgIGluaGVyaXRzKEJlaGF2aW9yU3ViamVjdCwgX19zdXBlcl9fKTtcbiAgICBmdW5jdGlvbiBCZWhhdmlvclN1YmplY3QodmFsdWUpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRQcm9wZXJ0aWVzKEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUsIE9ic2VydmVyLnByb3RvdHlwZSwge1xuICAgICAgX3N1YnNjcmliZTogZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gobyk7XG4gICAgICAgICAgby5vbk5leHQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBJbm5lclN1YnNjcmlwdGlvbih0aGlzLCBvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgIG8ub25FcnJvcih0aGlzLmVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvLm9uQ29tcGxldGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc3Bvc2FibGVFbXB0eTtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEdldHMgdGhlIGN1cnJlbnQgdmFsdWUgb3IgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIFZhbHVlIGlzIGZyb3plbiBhZnRlciBvbkNvbXBsZXRlZCBpcyBjYWxsZWQuXG4gICAgICAgKiBBZnRlciBvbkVycm9yIGlzIGNhbGxlZCBhbHdheXMgdGhyb3dzIHRoZSBzcGVjaWZpZWQgZXhjZXB0aW9uLlxuICAgICAgICogQW4gZXhjZXB0aW9uIGlzIGFsd2F5cyB0aHJvd24gYWZ0ZXIgZGlzcG9zZSBpcyBjYWxsZWQuXG4gICAgICAgKiBAcmV0dXJucyB7TWl4ZWR9IFRoZSBpbml0aWFsIHZhbHVlIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IgdW50aWwgb25OZXh0IGlzIGNhbGxlZDsgYWZ0ZXIgd2hpY2gsIHRoZSBsYXN0IHZhbHVlIHBhc3NlZCB0byBvbk5leHQuXG4gICAgICAgKi9cbiAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgICB0aHJvdyB0aGlzLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdWJqZWN0IGhhcyBvYnNlcnZlcnMgc3Vic2NyaWJlZCB0byBpdC5cbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3ViamVjdCBoYXMgb2JzZXJ2ZXJzIHN1YnNjcmliZWQgdG8gaXQuXG4gICAgICAgKi9cbiAgICAgIGhhc09ic2VydmVyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5vYnNlcnZlcnMubGVuZ3RoID4gMDsgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBlbmQgb2YgdGhlIHNlcXVlbmNlLlxuICAgICAgICovXG4gICAgICBvbkNvbXBsZXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgb3NbaV0ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBOb3RpZmllcyBhbGwgc3Vic2NyaWJlZCBvYnNlcnZlcnMgYWJvdXQgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7TWl4ZWR9IGVycm9yIFRoZSBleGNlcHRpb24gdG8gc2VuZCB0byBhbGwgb2JzZXJ2ZXJzLlxuICAgICAgICovXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgb3NbaV0ub25FcnJvcihlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVycy5sZW5ndGggPSAwO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBhcnJpdmFsIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBpbiB0aGUgc2VxdWVuY2UuXG4gICAgICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VuZCB0byBhbGwgb2JzZXJ2ZXJzLlxuICAgICAgICovXG4gICAgICBvbk5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgb3NbaV0ub25OZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogVW5zdWJzY3JpYmUgYWxsIG9ic2VydmVycyBhbmQgcmVsZWFzZSByZXNvdXJjZXMuXG4gICAgICAgKi9cbiAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQmVoYXZpb3JTdWJqZWN0O1xuICB9KE9ic2VydmFibGUpKTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBpcyBib3RoIGFuIG9ic2VydmFibGUgc2VxdWVuY2UgYXMgd2VsbCBhcyBhbiBvYnNlcnZlci5cbiAgICogRWFjaCBub3RpZmljYXRpb24gaXMgYnJvYWRjYXN0ZWQgdG8gYWxsIHN1YnNjcmliZWQgYW5kIGZ1dHVyZSBvYnNlcnZlcnMsIHN1YmplY3QgdG8gYnVmZmVyIHRyaW1taW5nIHBvbGljaWVzLlxuICAgKi9cbiAgdmFyIFJlcGxheVN1YmplY3QgPSBSeC5SZXBsYXlTdWJqZWN0ID0gKGZ1bmN0aW9uIChfX3N1cGVyX18pIHtcblxuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSZW1vdmFibGVEaXNwb3NhYmxlKHN1YmplY3QsIG9ic2VydmVyKSB7XG4gICAgICByZXR1cm4gZGlzcG9zYWJsZUNyZWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgIXN1YmplY3QuaXNEaXNwb3NlZCAmJiBzdWJqZWN0Lm9ic2VydmVycy5zcGxpY2Uoc3ViamVjdC5vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlciksIDEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5oZXJpdHMoUmVwbGF5U3ViamVjdCwgX19zdXBlcl9fKTtcblxuICAgIC8qKlxuICAgICAqICBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgUmVwbGF5U3ViamVjdCBjbGFzcyB3aXRoIHRoZSBzcGVjaWZpZWQgYnVmZmVyIHNpemUsIHdpbmRvdyBzaXplIGFuZCBzY2hlZHVsZXIuXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBbYnVmZmVyU2l6ZV0gTWF4aW11bSBlbGVtZW50IGNvdW50IG9mIHRoZSByZXBsYXkgYnVmZmVyLlxuICAgICAqICBAcGFyYW0ge051bWJlcn0gW3dpbmRvd1NpemVdIE1heGltdW0gdGltZSBsZW5ndGggb2YgdGhlIHJlcGxheSBidWZmZXIuXG4gICAgICogIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBTY2hlZHVsZXIgdGhlIG9ic2VydmVycyBhcmUgaW52b2tlZCBvbi5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSZXBsYXlTdWJqZWN0KGJ1ZmZlclNpemUsIHdpbmRvd1NpemUsIHNjaGVkdWxlcikge1xuICAgICAgdGhpcy5idWZmZXJTaXplID0gYnVmZmVyU2l6ZSA9PSBudWxsID8gbWF4U2FmZUludGVnZXIgOiBidWZmZXJTaXplO1xuICAgICAgdGhpcy53aW5kb3dTaXplID0gd2luZG93U2l6ZSA9PSBudWxsID8gbWF4U2FmZUludGVnZXIgOiB3aW5kb3dTaXplO1xuICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXIgfHwgY3VycmVudFRocmVhZFNjaGVkdWxlcjtcbiAgICAgIHRoaXMucSA9IFtdO1xuICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgX19zdXBlcl9fLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgYWRkUHJvcGVydGllcyhSZXBsYXlTdWJqZWN0LnByb3RvdHlwZSwgT2JzZXJ2ZXIucHJvdG90eXBlLCB7XG4gICAgICBfc3Vic2NyaWJlOiBmdW5jdGlvbiAobykge1xuICAgICAgICBjaGVja0Rpc3Bvc2VkKHRoaXMpO1xuICAgICAgICB2YXIgc28gPSBuZXcgU2NoZWR1bGVkT2JzZXJ2ZXIodGhpcy5zY2hlZHVsZXIsIG8pLCBzdWJzY3JpcHRpb24gPSBjcmVhdGVSZW1vdmFibGVEaXNwb3NhYmxlKHRoaXMsIHNvKTtcblxuICAgICAgICB0aGlzLl90cmltKHRoaXMuc2NoZWR1bGVyLm5vdygpKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChzbyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMucS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHNvLm9uTmV4dCh0aGlzLnFbaV0udmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICBzby5vbkVycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgc28ub25Db21wbGV0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvLmVuc3VyZUFjdGl2ZSgpO1xuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHN1YmplY3QgaGFzIG9ic2VydmVycyBzdWJzY3JpYmVkIHRvIGl0LlxuICAgICAgICogQHJldHVybnMge0Jvb2xlYW59IEluZGljYXRlcyB3aGV0aGVyIHRoZSBzdWJqZWN0IGhhcyBvYnNlcnZlcnMgc3Vic2NyaWJlZCB0byBpdC5cbiAgICAgICAqL1xuICAgICAgaGFzT2JzZXJ2ZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICAgICAgfSxcbiAgICAgIF90cmltOiBmdW5jdGlvbiAobm93KSB7XG4gICAgICAgIHdoaWxlICh0aGlzLnEubGVuZ3RoID4gdGhpcy5idWZmZXJTaXplKSB7XG4gICAgICAgICAgdGhpcy5xLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRoaXMucS5sZW5ndGggPiAwICYmIChub3cgLSB0aGlzLnFbMF0uaW50ZXJ2YWwpID4gdGhpcy53aW5kb3dTaXplKSB7XG4gICAgICAgICAgdGhpcy5xLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgYXJyaXZhbCBvZiB0aGUgc3BlY2lmaWVkIGVsZW1lbnQgaW4gdGhlIHNlcXVlbmNlLlxuICAgICAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlbmQgdG8gYWxsIG9ic2VydmVycy5cbiAgICAgICAqL1xuICAgICAgb25OZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgICB2YXIgbm93ID0gdGhpcy5zY2hlZHVsZXIubm93KCk7XG4gICAgICAgIHRoaXMucS5wdXNoKHsgaW50ZXJ2YWw6IG5vdywgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB0aGlzLl90cmltKG5vdyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIG9ic2VydmVyID0gb3NbaV07XG4gICAgICAgICAgb2JzZXJ2ZXIub25OZXh0KHZhbHVlKTtcbiAgICAgICAgICBvYnNlcnZlci5lbnN1cmVBY3RpdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogTm90aWZpZXMgYWxsIHN1YnNjcmliZWQgb2JzZXJ2ZXJzIGFib3V0IHRoZSBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge01peGVkfSBlcnJvciBUaGUgZXhjZXB0aW9uIHRvIHNlbmQgdG8gYWxsIG9ic2VydmVycy5cbiAgICAgICAqL1xuICAgICAgb25FcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNoZWNrRGlzcG9zZWQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB2YXIgbm93ID0gdGhpcy5zY2hlZHVsZXIubm93KCk7XG4gICAgICAgIHRoaXMuX3RyaW0obm93KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG9zID0gY2xvbmVBcnJheSh0aGlzLm9ic2VydmVycyksIGxlbiA9IG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIG9ic2VydmVyID0gb3NbaV07XG4gICAgICAgICAgb2JzZXJ2ZXIub25FcnJvcihlcnJvcik7XG4gICAgICAgICAgb2JzZXJ2ZXIuZW5zdXJlQWN0aXZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIE5vdGlmaWVzIGFsbCBzdWJzY3JpYmVkIG9ic2VydmVycyBhYm91dCB0aGUgZW5kIG9mIHRoZSBzZXF1ZW5jZS5cbiAgICAgICAqL1xuICAgICAgb25Db21wbGV0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hlY2tEaXNwb3NlZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHZhciBub3cgPSB0aGlzLnNjaGVkdWxlci5ub3coKTtcbiAgICAgICAgdGhpcy5fdHJpbShub3cpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgb3MgPSBjbG9uZUFycmF5KHRoaXMub2JzZXJ2ZXJzKSwgbGVuID0gb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBvc1tpXTtcbiAgICAgICAgICBvYnNlcnZlci5vbkNvbXBsZXRlZCgpO1xuICAgICAgICAgIG9ic2VydmVyLmVuc3VyZUFjdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBVbnN1YnNjcmliZSBhbGwgb2JzZXJ2ZXJzIGFuZCByZWxlYXNlIHJlc291cmNlcy5cbiAgICAgICAqL1xuICAgICAgZGlzcG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUmVwbGF5U3ViamVjdDtcbiAgfShPYnNlcnZhYmxlKSk7XG5cbiAgLyoqXG4gICogVXNlZCB0byBwYXVzZSBhbmQgcmVzdW1lIHN0cmVhbXMuXG4gICovXG4gIFJ4LlBhdXNlciA9IChmdW5jdGlvbiAoX19zdXBlcl9fKSB7XG4gICAgaW5oZXJpdHMoUGF1c2VyLCBfX3N1cGVyX18pO1xuICAgIGZ1bmN0aW9uIFBhdXNlcigpIHtcbiAgICAgIF9fc3VwZXJfXy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlcyB0aGUgdW5kZXJseWluZyBzZXF1ZW5jZS5cbiAgICAgKi9cbiAgICBQYXVzZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkgeyB0aGlzLm9uTmV4dChmYWxzZSk7IH07XG5cbiAgICAvKipcbiAgICAqIFJlc3VtZXMgdGhlIHVuZGVybHlpbmcgc2VxdWVuY2UuXG4gICAgKi9cbiAgICBQYXVzZXIucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHsgdGhpcy5vbk5leHQodHJ1ZSk7IH07XG5cbiAgICByZXR1cm4gUGF1c2VyO1xuICB9KFN1YmplY3QpKTtcblxuICBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcbiAgICByb290LlJ4ID0gUng7XG5cbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUng7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSkge1xuICAgIC8vIGluIE5vZGUuanMgb3IgUmluZ29KU1xuICAgIGlmIChtb2R1bGVFeHBvcnRzKSB7XG4gICAgICAoZnJlZU1vZHVsZS5leHBvcnRzID0gUngpLlJ4ID0gUng7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZyZWVFeHBvcnRzLlJ4ID0gUng7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGluIGEgYnJvd3NlciBvciBSaGlub1xuICAgIHJvb3QuUnggPSBSeDtcbiAgfVxuXG4gIC8vIEFsbCBjb2RlIGJlZm9yZSB0aGlzIHBvaW50IHdpbGwgYmUgZmlsdGVyZWQgZnJvbSBzdGFjayB0cmFjZXMuXG4gIHZhciByRW5kaW5nTGluZSA9IGNhcHR1cmVMaW5lKCk7XG5cbn0uY2FsbCh0aGlzKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jbGltYi1zb2NpYWwvfi9yeC1saXRlL3J4LmxpdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnLCAnbW9kdWxlJ10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgbW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIG1vZCk7XG4gICAgZ2xvYmFsLmZldGNoSnNvbnAgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIG1vZHVsZSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAganNvbnBDYWxsYmFjazogJ2NhbGxiYWNrJ1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2FsbGJhY2tGdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJ2pzb25wXycgKyBEYXRlLm5vdygpICsgJ18nICsgTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApO1xuICB9XG5cbiAgLy8gS25vd24gaXNzdWU6IFdpbGwgdGhyb3cgJ1VuY2F1Z2h0IFJlZmVyZW5jZUVycm9yOiBjYWxsYmFja18qKiogaXMgbm90IGRlZmluZWQnIGVycm9yIGlmIHJlcXVlc3QgdGltZW91dFxuICBmdW5jdGlvbiBjbGVhckZ1bmN0aW9uKGZ1bmN0aW9uTmFtZSkge1xuICAgIC8vIElFOCB0aHJvd3MgYW4gZXhjZXB0aW9uIHdoZW4geW91IHRyeSB0byBkZWxldGUgYSBwcm9wZXJ0eSBvbiB3aW5kb3dcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODI0MjI4Lzc1MTA4OVxuICAgIHRyeSB7XG4gICAgICBkZWxldGUgd2luZG93W2Z1bmN0aW9uTmFtZV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgd2luZG93W2Z1bmN0aW9uTmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2NyaXB0KHNjcmlwdElkKSB7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNjcmlwdElkKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0ucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgfVxuXG4gIHZhciBmZXRjaEpzb25wID0gZnVuY3Rpb24gZmV0Y2hKc29ucCh1cmwpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgIT0gbnVsbCA/IG9wdGlvbnMudGltZW91dCA6IGRlZmF1bHRPcHRpb25zLnRpbWVvdXQ7XG4gICAgdmFyIGpzb25wQ2FsbGJhY2sgPSBvcHRpb25zLmpzb25wQ2FsbGJhY2sgIT0gbnVsbCA/IG9wdGlvbnMuanNvbnBDYWxsYmFjayA6IGRlZmF1bHRPcHRpb25zLmpzb25wQ2FsbGJhY2s7XG5cbiAgICB2YXIgdGltZW91dElkID0gdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBjYWxsYmFja0Z1bmN0aW9uID0gZ2VuZXJhdGVDYWxsYmFja0Z1bmN0aW9uKCk7XG5cbiAgICAgIHdpbmRvd1tjYWxsYmFja0Z1bmN0aW9uXSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBvazogdHJ1ZSxcbiAgICAgICAgICAvLyBrZWVwIGNvbnNpc3RlbnQgd2l0aCBmZXRjaCBBUElcbiAgICAgICAgICBqc29uOiBmdW5jdGlvbiBqc29uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGltZW91dElkKSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcblxuICAgICAgICByZW1vdmVTY3JpcHQoanNvbnBDYWxsYmFjayArICdfJyArIGNhbGxiYWNrRnVuY3Rpb24pO1xuXG4gICAgICAgIGNsZWFyRnVuY3Rpb24oY2FsbGJhY2tGdW5jdGlvbik7XG4gICAgICB9O1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBzZXQgdGhlaXIgb3duIHBhcmFtcywgYW5kIGlmIG5vdCBhZGQgYSA/IHRvIHN0YXJ0IGEgbGlzdCBvZiBwYXJhbXNcbiAgICAgIHVybCArPSB1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJztcblxuICAgICAgdmFyIGpzb25wU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBqc29ucFNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdXJsICsganNvbnBDYWxsYmFjayArICc9JyArIGNhbGxiYWNrRnVuY3Rpb24pO1xuICAgICAganNvbnBTY3JpcHQuaWQgPSBqc29ucENhbGxiYWNrICsgJ18nICsgY2FsbGJhY2tGdW5jdGlvbjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChqc29ucFNjcmlwdCk7XG5cbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdKU09OUCByZXF1ZXN0IHRvICcgKyB1cmwgKyAnIHRpbWVkIG91dCcpKTtcblxuICAgICAgICBjbGVhckZ1bmN0aW9uKGNhbGxiYWNrRnVuY3Rpb24pO1xuICAgICAgICByZW1vdmVTY3JpcHQoanNvbnBDYWxsYmFjayArICdfJyArIGNhbGxiYWNrRnVuY3Rpb24pO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gZXhwb3J0IGFzIGdsb2JhbCBmdW5jdGlvblxuICAvKlxuICBsZXQgbG9jYWw7XG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2FsID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2FsID0gc2VsZjtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgfVxuICB9XG4gIFxuICBsb2NhbC5mZXRjaEpzb25wID0gZmV0Y2hKc29ucDtcbiAgKi9cblxuICBtb2R1bGUuZXhwb3J0cyA9IGZldGNoSnNvbnA7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9mZXRjaC1qc29ucC9idWlsZC9mZXRjaC1qc29ucC5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGlsZSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHtUcmFuc2l0aW9uTW90aW9uLCBzcHJpbmd9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cblxuY2xhc3MgV2FsbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpdGVtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGdldFN0eWxlcygpIHtcbiAgICAgICAgY29uc3QgY29uZmlncyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzLml0ZW1zKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbmZpZ3Nba2V5XSA9IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBzcHJpbmcoMSksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNwcmluZygzMCksXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBzcHJpbmcoMSksXG4gICAgICAgICAgICAgICAgaXRlbTogdGhpcy5wcm9wcy5pdGVtc1trZXldXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZ3M7XG4gICAgfVxuXG4gICAgd2lsbEVudGVyKGtleSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3BhY2l0eTogc3ByaW5nKDApLFxuICAgICAgICAgICAgd2lkdGg6IHNwcmluZygwKSxcbiAgICAgICAgICAgIG1hcmdpbjogc3ByaW5nKDApLFxuICAgICAgICAgICAgaXRlbTogdGhpcy5wcm9wcy5pdGVtc1trZXldXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd2lsbExlYXZlKGtleSwgc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IHNwcmluZygwKSxcbiAgICAgICAgICAgIHdpZHRoOiBzcHJpbmcoMCksXG4gICAgICAgICAgICBtYXJnaW46IHNwcmluZygwKSxcbiAgICAgICAgICAgIGl0ZW06IHN0eWxlLml0ZW1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXJUaWxlKGtleSwgaXRlbVZhbHVlcykge1xuXG4gICAgICAgIGNvbnN0IHtpdGVtLCAuLi5zdHlsZUNvbmZpZ30gPSBpdGVtVmFsdWVzO1xuICAgICAgICBjb25zdCB7Li4uaXRlbVByb3BzfSA9IGl0ZW07XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBvcGFjaXR5OiBzdHlsZUNvbmZpZy5vcGFjaXR5LFxuICAgICAgICAgICAgd2lkdGg6IGAke3N0eWxlQ29uZmlnLndpZHRofSVgLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogYCR7c3R5bGVDb25maWcubWFyZ2lufSVgLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IGAke3N0eWxlQ29uZmlnLm1hcmdpbn0lYFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGlsZSBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICB7Li4uaXRlbVByb3BzIH0gLz5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uTW90aW9uXG4gICAgICAgICAgICAgICAgc3R5bGVzPXt0aGlzLmdldFN0eWxlcy5iaW5kKHRoaXMpKCl9XG4gICAgICAgICAgICAgICAgd2lsbEVudGVyPXt0aGlzLndpbGxFbnRlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHdpbGxMZWF2ZT17dGhpcy53aWxsTGVhdmUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAge3ZhbHVlcyA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaW1iX193YWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModmFsdWVzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtVmFsdWVzID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGlsZShrZXksIGl0ZW1WYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbk1vdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3dhbGwvV2FsbC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vLi4vY29tbW9uL0ltYWdlJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vLi4vY29tbW9uL01lc3NhZ2UnO1xuaW1wb3J0IEF1dGhvciBmcm9tICcuLy4uL2NvbW1vbi9BdXRob3InO1xuXG5cbmNsYXNzIFRpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUltYWdlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmltYWdlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7dXJsOiBzcmMsIHdpZHRoLCBoZWlnaHR9ID0gdGhpcy5wcm9wcy5pbWFnZTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17IHNyYyB9XG4gICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgd2lkdGggfVxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9eyBoZWlnaHQgfS8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNyZWF0ZU1lc3NhZ2UoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBib2R5PXsgdGhpcy5wcm9wcy5tZXNzYWdlIH0vPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzc1N0cmluZygpIHtcblxuICAgICAgICBsZXQgY2xhc3NTdHJpbmcgPSBgY2xpbWJfX3RpbGUgY2xpbWJfX3RpbGUtLSR7dGhpcy5wcm9wcy5zb3VyY2VfdHlwZX1gO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmltYWdlKSB7XG4gICAgICAgICAgICBjbGFzc1N0cmluZyArPSAnIGNsaW1iX190aWxlLS1oYXMtbWVkaWEgY2xpbWJfX3RpbGUtLWhhcy1pbWFnZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGFzc1N0cmluZyArPSAnIGNsaW1iX190aWxlLS1oYXMtbm8taW1hZ2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmlkZW9fdXJsKSB7XG4gICAgICAgICAgICBjbGFzc1N0cmluZyArPSAnIGNsaW1iX190aWxlLS1oYXMtbWVkaWEgY2xpbWJfX3RpbGUtLWhhcy12aWRlbyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGFzc1N0cmluZyArPSAnIGNsaW1iX190aWxlLS1oYXMtbm8tdmlkZW8nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzU3RyaW5nO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuY3JlYXRlSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY3JlYXRlTWVzc2FnZSgpO1xuICAgICAgICBjb25zdCBjbGFzc1N0cmluZyA9IHRoaXMuY3JlYXRlQ2xhc3NTdHJpbmcoKTtcbiAgICAgICAgY29uc3Qge2F1dGhvcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzU3RyaW5nIH1cbiAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17IHRoaXMucHJvcHMubGluayB9PlxuICAgICAgICAgICAgICAgICAgICB7IGltYWdlIH1cbiAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaW1iX190aWxlX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHsgbWVzc2FnZSB9XG5cbiAgICAgICAgICAgICAgICAgICAgPEF1dGhvciB7Li4uYXV0aG9yfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblRpbGUucHJvcFR5cGVzID0ge1xuXG4gICAgLy8gUmVxdWlyZWQgYXR0cnNcbiAgICBsaW5rOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc291cmNlX3R5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0aW1lc3RhbXA6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBhdXRob3I6IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHVzZXJuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHBpY3R1cmU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgbGluazogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSksXG5cbiAgICAvLyBPcHRpb25hbCBhdHRyc1xuICAgIG1lc3NhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmlkZW9fc3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGltYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB1cmw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgICB9KVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaWxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy93YWxsL1RpbGUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNsaW1iX19pbWFnZVwiXG4gICAgICAgICAgICAgICAgIHNyYz17IHRoaXMucHJvcHMuc3JjIH0gZGF0YS13aWR0aD17IHRoaXMucHJvcHMud2lkdGggfSBkYXRhLWhlaWdodD17IHRoaXMucHJvcHMuaGVpZ2h0IH0vPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuSW1hZ2UucHJvcFR5cGVzID0ge1xuICAgIHNyYzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2NvbW1vbi9JbWFnZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLmJvZHlcbiAgICAgICAgICAgIC5yZXBsYWNlKC88YSBocmVmPVwiaHR0cDpcXC9cXC9waWMudHdpdHRlci5jb21cXC9bXj5dKj4oW148XSspPFxcL2E+L2csICcnKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGltYl9fdGlsZV9fbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBtZXNzYWdlfX0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1lc3NhZ2UucHJvcFR5cGVzID0ge1xuICAgIGJvZHk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvY29tbW9uL01lc3NhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBBdXRob3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbGltYl9fdGlsZV9fYXV0aG9yXCJcbiAgICAgICAgICAgICAgIGhyZWY9eyB0aGlzLnByb3BzLmxpbmsgfT5cblxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgdGhpcy5wcm9wcy5waWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICAgYWx0PXsgYFByb2ZpbGUgcGljIG9mICR7dGhpcy5wcm9wcy5uYW1lfWAgfS8+XG5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2xpbWJfX3RpbGVfX2F1dGhvcl9fdXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnVzZXJuYW1lIH1cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXV0aG9yLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRob3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2NvbW1vbi9BdXRob3IuanN4XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jb21wb25lbnRzMiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cycpO1xuXG52YXIgX2NvbXBvbmVudHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50czIpO1xuXG52YXIgX3Jlb3JkZXJLZXlzID0gcmVxdWlyZSgnLi9yZW9yZGVyS2V5cycpO1xuXG52YXIgX3Jlb3JkZXJLZXlzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlb3JkZXJLZXlzKTtcblxudmFyIF9jb21wb25lbnRzID0gX2NvbXBvbmVudHMzWydkZWZhdWx0J10oX3JlYWN0MlsnZGVmYXVsdCddKTtcblxudmFyIFNwcmluZyA9IF9jb21wb25lbnRzLlNwcmluZztcbnZhciBUcmFuc2l0aW9uU3ByaW5nID0gX2NvbXBvbmVudHMuVHJhbnNpdGlvblNwcmluZztcbnZhciBNb3Rpb24gPSBfY29tcG9uZW50cy5Nb3Rpb247XG52YXIgU3RhZ2dlcmVkTW90aW9uID0gX2NvbXBvbmVudHMuU3RhZ2dlcmVkTW90aW9uO1xudmFyIFRyYW5zaXRpb25Nb3Rpb24gPSBfY29tcG9uZW50cy5UcmFuc2l0aW9uTW90aW9uO1xuZXhwb3J0cy5TcHJpbmcgPSBTcHJpbmc7XG5leHBvcnRzLlRyYW5zaXRpb25TcHJpbmcgPSBUcmFuc2l0aW9uU3ByaW5nO1xuZXhwb3J0cy5Nb3Rpb24gPSBNb3Rpb247XG5leHBvcnRzLlN0YWdnZXJlZE1vdGlvbiA9IFN0YWdnZXJlZE1vdGlvbjtcbmV4cG9ydHMuVHJhbnNpdGlvbk1vdGlvbiA9IFRyYW5zaXRpb25Nb3Rpb247XG5cbnZhciBfc3ByaW5nMiA9IHJlcXVpcmUoJy4vc3ByaW5nJyk7XG5cbnZhciBfc3ByaW5nMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NwcmluZzIpO1xuXG5leHBvcnRzLnNwcmluZyA9IF9zcHJpbmczWydkZWZhdWx0J107XG5cbnZhciBfcHJlc2V0czIgPSByZXF1aXJlKCcuL3ByZXNldHMnKTtcblxudmFyIF9wcmVzZXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldHMyKTtcblxuZXhwb3J0cy5wcmVzZXRzID0gX3ByZXNldHMzWydkZWZhdWx0J107XG52YXIgdXRpbHMgPSB7XG4gIHJlb3JkZXJLZXlzOiBfcmVvcmRlcktleXMyWydkZWZhdWx0J11cbn07XG5leHBvcnRzLnV0aWxzID0gdXRpbHM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9yZWFjdC1tb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjb21wb25lbnRzO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfbm9WZWxvY2l0eSA9IHJlcXVpcmUoJy4vbm9WZWxvY2l0eScpO1xuXG52YXIgX25vVmVsb2NpdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbm9WZWxvY2l0eSk7XG5cbnZhciBfaGFzUmVhY2hlZFN0eWxlID0gcmVxdWlyZSgnLi9oYXNSZWFjaGVkU3R5bGUnKTtcblxudmFyIF9oYXNSZWFjaGVkU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzUmVhY2hlZFN0eWxlKTtcblxudmFyIF9tZXJnZURpZmYgPSByZXF1aXJlKCcuL21lcmdlRGlmZicpO1xuXG52YXIgX21lcmdlRGlmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZURpZmYpO1xuXG52YXIgX2FuaW1hdGlvbkxvb3AgPSByZXF1aXJlKCcuL2FuaW1hdGlvbkxvb3AnKTtcblxudmFyIF9hbmltYXRpb25Mb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuaW1hdGlvbkxvb3ApO1xuXG52YXIgX3plcm8gPSByZXF1aXJlKCcuL3plcm8nKTtcblxudmFyIF96ZXJvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3plcm8pO1xuXG52YXIgX3VwZGF0ZVRyZWUgPSByZXF1aXJlKCcuL3VwZGF0ZVRyZWUnKTtcblxudmFyIF9kZXByZWNhdGVkU3ByaW5nczIgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZWRTcHJpbmdzJyk7XG5cbnZhciBfZGVwcmVjYXRlZFNwcmluZ3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlZFNwcmluZ3MyKTtcblxudmFyIF9zdHJpcFN0eWxlID0gcmVxdWlyZSgnLi9zdHJpcFN0eWxlJyk7XG5cbnZhciBfc3RyaXBTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpcFN0eWxlKTtcblxudmFyIHN0YXJ0QW5pbWF0aW9uID0gX2FuaW1hdGlvbkxvb3AyWydkZWZhdWx0J10oKTtcblxuZnVuY3Rpb24gbWFwT2JqZWN0KGYsIG9iaikge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0W2tleV0gPSBmKG9ialtrZXldLCBrZXkpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5T2JqKGYsIG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghZihvYmpba2V5XSwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50cyhSZWFjdCkge1xuICB2YXIgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG4gIHZhciBNb3Rpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdNb3Rpb24nLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBhIGNvbmZpZyBpbiBoZXJlXG4gICAgICBkZWZhdWx0VmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRWYWx1ZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdTcHJpbmdcXCdzIGBkZWZhdWx0VmFsdWVgIGhhcyBiZWVuIGNoYW5nZWQgdG8gYGRlZmF1bHRTdHlsZWAuICcgKyAnSXRzIGZvcm1hdCByZWNlaXZlZCBhIGZldyAoZWFzeSB0byB1cGRhdGUhKSBjaGFuZ2VzIGFzIHdlbGwuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbmRWYWx1ZTogZnVuY3Rpb24gZW5kVmFsdWUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignU3ByaW5nXFwncyBgZW5kVmFsdWVgIGhhcyBiZWVuIGNoYW5nZWQgdG8gYHN0eWxlYC4gSXRzIGZvcm1hdCAnICsgJ3JlY2VpdmVkIGEgZmV3IChlYXN5IHRvIHVwZGF0ZSEpIGNoYW5nZXMgYXMgd2VsbC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG5cbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGRlZmF1bHRTdHlsZSA9IF9wcm9wcy5kZWZhdWx0U3R5bGU7XG4gICAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG5cbiAgICAgIHZhciBjdXJyZW50U3R5bGUgPSBkZWZhdWx0U3R5bGUgfHwgc3R5bGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3R5bGU6IGN1cnJlbnRTdHlsZSxcbiAgICAgICAgY3VycmVudFZlbG9jaXR5OiBtYXBPYmplY3QoX3plcm8yWydkZWZhdWx0J10sIGN1cnJlbnRTdHlsZSlcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpbmcoKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uU3RlcDogZnVuY3Rpb24gYW5pbWF0aW9uU3RlcCh0aW1lc3RlcCwgc3RhdGUpIHtcbiAgICAgIHZhciBjdXJyZW50U3R5bGUgPSBzdGF0ZS5jdXJyZW50U3R5bGU7XG4gICAgICB2YXIgY3VycmVudFZlbG9jaXR5ID0gc3RhdGUuY3VycmVudFZlbG9jaXR5O1xuICAgICAgdmFyIHN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcblxuICAgICAgdmFyIG5ld0N1cnJlbnRTdHlsZSA9IF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJlbnRTdHlsZSh0aW1lc3RlcCwgY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdHksIHN0eWxlKTtcbiAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdHkgPSBfdXBkYXRlVHJlZS51cGRhdGVDdXJyZW50VmVsb2NpdHkodGltZXN0ZXAsIGN1cnJlbnRTdHlsZSwgY3VycmVudFZlbG9jaXR5LCBzdHlsZSk7XG5cbiAgICAgIC8vIFRPT0Q6IHRoaXMgaXNuJ3QgbmVjZXNzYXJ5IGFueW1vcmUuIEl0IHdhcyB1c2VkIG9ubHkgYWdhaW5zdCBlbmRWYWx1ZSBmdW5jXG4gICAgICBpZiAoX25vVmVsb2NpdHkyWydkZWZhdWx0J10oY3VycmVudFZlbG9jaXR5LCBuZXdDdXJyZW50U3R5bGUpICYmIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKG5ld0N1cnJlbnRWZWxvY2l0eSwgbmV3Q3VycmVudFN0eWxlKSkge1xuICAgICAgICAvLyBjaGVjayBleHBsYW5hdGlvbiBpbiBgTW90aW9uLmFuaW1hdGlvblJlbmRlcmBcbiAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7IC8vIE5hc3R5IHNpZGUgZWZmZWN0cy4uLi5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0eWxlOiBuZXdDdXJyZW50U3R5bGUsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0eTogbmV3Q3VycmVudFZlbG9jaXR5XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBzdG9wQW5pbWF0aW9uOiBudWxsLFxuXG4gICAgLy8gdXNlZCBpbiBhbmltYXRpb25SZW5kZXJcbiAgICBoYXNVbm1vdW50ZWQ6IGZhbHNlLFxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLmhhc1VubW91bnRlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0YXJ0QW5pbWF0aW5nOiBmdW5jdGlvbiBzdGFydEFuaW1hdGluZygpIHtcbiAgICAgIC8vIElzIHNtYXJ0IGVub3VnaCB0byBub3Qgc3RhcnQgaXQgdHdpY2VcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbiA9IHN0YXJ0QW5pbWF0aW9uKHRoaXMuc3RhdGUsIHRoaXMuYW5pbWF0aW9uU3RlcCwgdGhpcy5hbmltYXRpb25SZW5kZXIpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25SZW5kZXI6IGZ1bmN0aW9uIGFuaW1hdGlvblJlbmRlcihhbHBoYSwgbmV4dFN0YXRlLCBwcmV2U3RhdGUpIHtcbiAgICAgIC8vIGB0aGlzLmhhc1VubW91bnRlZGAgbWlnaHQgYmUgdHJ1ZSBpbiB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbjpcbiAgICAgIC8vIHVzZXIgZG9lcyBzb21lIGNoZWNrcyBpbiBgc3R5bGVgIGFuZCBjYWxscyBhbiBvd25lciBoYW5kbGVyXG4gICAgICAvLyBvd25lciBzZXRzIHN0YXRlIGluIHRoZSBjYWxsYmFjaywgdHJpZ2dlcmluZyBhIHJlLXJlbmRlclxuICAgICAgLy8gdW5tb3VudHMgTW90aW9uXG4gICAgICBpZiAoIXRoaXMuaGFzVW5tb3VudGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRTdHlsZTogX3VwZGF0ZVRyZWUuaW50ZXJwb2xhdGVWYWx1ZShhbHBoYSwgbmV4dFN0YXRlLmN1cnJlbnRTdHlsZSwgcHJldlN0YXRlLmN1cnJlbnRTdHlsZSksXG4gICAgICAgICAgY3VycmVudFZlbG9jaXR5OiBuZXh0U3RhdGUuY3VycmVudFZlbG9jaXR5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBzdHJpcHBlZFN0eWxlID0gX3N0cmlwU3R5bGUyWydkZWZhdWx0J10odGhpcy5zdGF0ZS5jdXJyZW50U3R5bGUpO1xuICAgICAgdmFyIHJlbmRlcmVkQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuKHN0cmlwcGVkU3R5bGUpO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGRyZW4gJiYgUmVhY3QuQ2hpbGRyZW4ub25seShyZW5kZXJlZENoaWxkcmVuKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBTdGFnZ2VyZWRNb3Rpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdTdGFnZ2VyZWRNb3Rpb24nLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBkZWZhdWx0U3R5bGU6IGZ1bmN0aW9uIGRlZmF1bHRTdHlsZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgZm9yZ290IHRoZSBcInNcIiBmb3IgYFN0YWdnZXJlZE1vdGlvbmBcXCdzIGBkZWZhdWx0U3R5bGVzYC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0eWxlOiBmdW5jdGlvbiBzdHlsZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgZm9yZ290IHRoZSBcInNcIiBmb3IgYFN0YWdnZXJlZE1vdGlvbmBcXCdzIGBzdHlsZXNgLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gVE9PRDogd2FybiBhZ2FpbnN0IHB1dHRpbmcgY29uZmlncyBpbiBoZXJlXG4gICAgICBkZWZhdWx0U3R5bGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICAgIHN0eWxlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHN0eWxlcyA9IF9wcm9wczIuc3R5bGVzO1xuICAgICAgdmFyIGRlZmF1bHRTdHlsZXMgPSBfcHJvcHMyLmRlZmF1bHRTdHlsZXM7XG5cbiAgICAgIHZhciBjdXJyZW50U3R5bGVzID0gZGVmYXVsdFN0eWxlcyA/IGRlZmF1bHRTdHlsZXMgOiBzdHlsZXMoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBjdXJyZW50U3R5bGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgIHJldHVybiBtYXBPYmplY3QoX3plcm8yWydkZWZhdWx0J10sIHMpO1xuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25TdGVwOiBmdW5jdGlvbiBhbmltYXRpb25TdGVwKHRpbWVzdGVwLCBzdGF0ZSkge1xuICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBzdGF0ZS5jdXJyZW50U3R5bGVzO1xuICAgICAgdmFyIGN1cnJlbnRWZWxvY2l0aWVzID0gc3RhdGUuY3VycmVudFZlbG9jaXRpZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSB0aGlzLnByb3BzLnN0eWxlcyhjdXJyZW50U3R5bGVzLm1hcChfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXSkpO1xuXG4gICAgICB2YXIgbmV3Q3VycmVudFN0eWxlcyA9IGN1cnJlbnRTdHlsZXMubWFwKGZ1bmN0aW9uIChjdXJyZW50U3R5bGUsIGkpIHtcbiAgICAgICAgcmV0dXJuIF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJlbnRTdHlsZSh0aW1lc3RlcCwgY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdGllc1tpXSwgc3R5bGVzW2ldKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0aWVzID0gY3VycmVudFN0eWxlcy5tYXAoZnVuY3Rpb24gKGN1cnJlbnRTdHlsZSwgaSkge1xuICAgICAgICByZXR1cm4gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFZlbG9jaXR5KHRpbWVzdGVwLCBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0aWVzW2ldLCBzdHlsZXNbaV0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRPRE86IGlzIHRoaXMgcmlnaHQ/XG4gICAgICBpZiAoY3VycmVudFZlbG9jaXRpZXMuZXZlcnkoZnVuY3Rpb24gKHYsIGspIHtcbiAgICAgICAgcmV0dXJuIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKHYsIGN1cnJlbnRTdHlsZXNba10pO1xuICAgICAgfSkgJiYgbmV3Q3VycmVudFZlbG9jaXRpZXMuZXZlcnkoZnVuY3Rpb24gKHYsIGspIHtcbiAgICAgICAgcmV0dXJuIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKHYsIG5ld0N1cnJlbnRTdHlsZXNba10pO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXM6IG5ld0N1cnJlbnRTdHlsZXMsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXdDdXJyZW50VmVsb2NpdGllc1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgc3RvcEFuaW1hdGlvbjogbnVsbCxcblxuICAgIC8vIHVzZWQgaW4gYW5pbWF0aW9uUmVuZGVyXG4gICAgaGFzVW5tb3VudGVkOiBmYWxzZSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5oYXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBzdGFydEFuaW1hdGluZzogZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSBzdGFydEFuaW1hdGlvbih0aGlzLnN0YXRlLCB0aGlzLmFuaW1hdGlvblN0ZXAsIHRoaXMuYW5pbWF0aW9uUmVuZGVyKTtcbiAgICB9LFxuXG4gICAgYW5pbWF0aW9uUmVuZGVyOiBmdW5jdGlvbiBhbmltYXRpb25SZW5kZXIoYWxwaGEsIG5leHRTdGF0ZSwgcHJldlN0YXRlKSB7XG4gICAgICAvLyBTZWUgY29tbWVudCBpbiBNb3Rpb24uXG4gICAgICBpZiAoIXRoaXMuaGFzVW5tb3VudGVkKSB7XG4gICAgICAgIHZhciBjdXJyZW50U3R5bGVzID0gbmV4dFN0YXRlLmN1cnJlbnRTdHlsZXMubWFwKGZ1bmN0aW9uIChzdHlsZSwgaSkge1xuICAgICAgICAgIHJldHVybiBfdXBkYXRlVHJlZS5pbnRlcnBvbGF0ZVZhbHVlKGFscGhhLCBzdHlsZSwgcHJldlN0YXRlLmN1cnJlbnRTdHlsZXNbaV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdGllczogbmV4dFN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBzdHJpcHBlZFN0eWxlID0gdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzLm1hcChfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXSk7XG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4oc3RyaXBwZWRTdHlsZSk7XG4gICAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBSZWFjdC5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIFRyYW5zaXRpb25Nb3Rpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdUcmFuc2l0aW9uTW90aW9uJyxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgZGVmYXVsdFZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VmFsdWUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignVHJhbnNpdGlvblNwcmluZ1xcJ3MgYGRlZmF1bHRWYWx1ZWAgaGFzIGJlZW4gY2hhbmdlZCB0byAnICsgJ2BkZWZhdWx0U3R5bGVzYC4gSXRzIGZvcm1hdCByZWNlaXZlZCBhIGZldyAoZWFzeSB0byB1cGRhdGUhKSAnICsgJ2NoYW5nZXMgYXMgd2VsbC4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVuZFZhbHVlOiBmdW5jdGlvbiBlbmRWYWx1ZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdUcmFuc2l0aW9uU3ByaW5nXFwncyBgZW5kVmFsdWVgIGhhcyBiZWVuIGNoYW5nZWQgdG8gYHN0eWxlc2AuICcgKyAnSXRzIGZvcm1hdCByZWNlaXZlZCBhIGZldyAoZWFzeSB0byB1cGRhdGUhKSBjaGFuZ2VzIGFzIHdlbGwuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWZhdWx0U3R5bGU6IGZ1bmN0aW9uIGRlZmF1bHRTdHlsZShwcm9wLCBwcm9wTmFtZSkge1xuICAgICAgICBpZiAocHJvcFtwcm9wTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdZb3UgZm9yZ290IHRoZSBcInNcIiBmb3IgYFRyYW5zaXRpb25Nb3Rpb25gXFwncyBgZGVmYXVsdFN0eWxlc2AuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdHlsZTogZnVuY3Rpb24gc3R5bGUocHJvcCwgcHJvcE5hbWUpIHtcbiAgICAgICAgaWYgKHByb3BbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignWW91IGZvcmdvdCB0aGUgXCJzXCIgZm9yIGBUcmFuc2l0aW9uTW90aW9uYFxcJ3MgYHN0eWxlc2AuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBjb25maWdzIGluIGhlcmVcbiAgICAgIGRlZmF1bHRTdHlsZXM6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcbiAgICAgIHN0eWxlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQpXSkuaXNSZXF1aXJlZCxcbiAgICAgIHdpbGxMZWF2ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIC8vIFRPT0Q6IHdhcm4gYWdhaW5zdCBwdXR0aW5nIGNvbmZpZ3MgaW4gaGVyZVxuICAgICAgd2lsbEVudGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9LFxuXG4gICAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWxsRW50ZXI6IGZ1bmN0aW9uIHdpbGxFbnRlcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICB3aWxsTGVhdmU6IGZ1bmN0aW9uIHdpbGxMZWF2ZSgpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgc3R5bGVzID0gX3Byb3BzMy5zdHlsZXM7XG4gICAgICB2YXIgZGVmYXVsdFN0eWxlcyA9IF9wcm9wczMuZGVmYXVsdFN0eWxlcztcblxuICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoZGVmYXVsdFN0eWxlcyA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3VycmVudFN0eWxlcyA9IHN0eWxlcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRTdHlsZXMgPSBzdHlsZXM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRTdHlsZXMgPSBkZWZhdWx0U3R5bGVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG1hcE9iamVjdChmdW5jdGlvbiAocykge1xuICAgICAgICAgIHJldHVybiBtYXBPYmplY3QoX3plcm8yWydkZWZhdWx0J10sIHMpO1xuICAgICAgICB9LCBjdXJyZW50U3R5bGVzKVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGluZygpO1xuICAgIH0sXG5cbiAgICBhbmltYXRpb25TdGVwOiBmdW5jdGlvbiBhbmltYXRpb25TdGVwKHRpbWVzdGVwLCBzdGF0ZSkge1xuICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBzdGF0ZS5jdXJyZW50U3R5bGVzO1xuICAgICAgdmFyIGN1cnJlbnRWZWxvY2l0aWVzID0gc3RhdGUuY3VycmVudFZlbG9jaXRpZXM7XG4gICAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgc3R5bGVzID0gX3Byb3BzNC5zdHlsZXM7XG4gICAgICB2YXIgd2lsbEVudGVyID0gX3Byb3BzNC53aWxsRW50ZXI7XG4gICAgICB2YXIgd2lsbExlYXZlID0gX3Byb3BzNC53aWxsTGVhdmU7XG5cbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHN0eWxlcyA9IHN0eWxlcyhjdXJyZW50U3R5bGVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogaHVoP1xuICAgICAgdmFyIG1lcmdlZFN0eWxlcyA9IHN0eWxlczsgLy8gc2V0IG1lcmdlZFN0eWxlcyB0byBzdHlsZXMgYXMgdGhlIGRlZmF1bHRcbiAgICAgIHZhciBoYXNOZXdLZXkgPSBmYWxzZTtcblxuICAgICAgbWVyZ2VkU3R5bGVzID0gX21lcmdlRGlmZjJbJ2RlZmF1bHQnXShjdXJyZW50U3R5bGVzLCBzdHlsZXMsXG4gICAgICAvLyBUT0RPOiBzdG9wIGFsbG9jYXRpbmcgbGlrZSBjcmF6eSBpbiB0aGlzIHdob2xlIGNvZGUgcGF0aFxuICAgICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgcmVzID0gd2lsbExlYXZlKGtleSwgY3VycmVudFN0eWxlc1trZXldLCBzdHlsZXMsIGN1cnJlbnRTdHlsZXMsIGN1cnJlbnRWZWxvY2l0aWVzKTtcbiAgICAgICAgaWYgKHJlcyA9PSBudWxsKSB7XG4gICAgICAgICAgLy8gRm9yIGxlZ2FjeSByZWFzb24uIFdlIHdvbid0IGFsbG93IHJldHVybmluZyBudWxsIHNvb25cbiAgICAgICAgICAvLyBUT0RPOiByZW1vdmUsIGFmdGVyIG5leHQgcmVsZWFzZVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKGN1cnJlbnRWZWxvY2l0aWVzW2tleV0sIGN1cnJlbnRTdHlsZXNba2V5XSkgJiYgX2hhc1JlYWNoZWRTdHlsZTJbJ2RlZmF1bHQnXShjdXJyZW50U3R5bGVzW2tleV0sIHJlcykpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5rZXlzKG1lcmdlZFN0eWxlcykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICFjdXJyZW50U3R5bGVzLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9leHRlbmRzMiwgX2V4dGVuZHMzO1xuXG4gICAgICAgIGhhc05ld0tleSA9IHRydWU7XG4gICAgICAgIHZhciBlbnRlclN0eWxlID0gd2lsbEVudGVyKGtleSwgbWVyZ2VkU3R5bGVzW2tleV0sIHN0eWxlcywgY3VycmVudFN0eWxlcywgY3VycmVudFZlbG9jaXRpZXMpO1xuXG4gICAgICAgIC8vIFdlIGNhbiBtdXRhdGUgdGhpcyBoZXJlIGJlY2F1c2UgbWVyZ2VEaWZmIHJldHVybnMgYSBuZXcgT2JqXG4gICAgICAgIG1lcmdlZFN0eWxlc1trZXldID0gZW50ZXJTdHlsZTtcblxuICAgICAgICBjdXJyZW50U3R5bGVzID0gX2V4dGVuZHMoe30sIGN1cnJlbnRTdHlsZXMsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2tleV0gPSBlbnRlclN0eWxlLCBfZXh0ZW5kczIpKTtcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXMgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFZlbG9jaXRpZXMsIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW2tleV0gPSBtYXBPYmplY3QoX3plcm8yWydkZWZhdWx0J10sIGVudGVyU3R5bGUpLCBfZXh0ZW5kczMpKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgbmV3Q3VycmVudFN0eWxlcyA9IG1hcE9iamVjdChmdW5jdGlvbiAobWVyZ2VkU3R5bGUsIGtleSkge1xuICAgICAgICByZXR1cm4gX3VwZGF0ZVRyZWUudXBkYXRlQ3VycmVudFN0eWxlKHRpbWVzdGVwLCBjdXJyZW50U3R5bGVzW2tleV0sIGN1cnJlbnRWZWxvY2l0aWVzW2tleV0sIG1lcmdlZFN0eWxlKTtcbiAgICAgIH0sIG1lcmdlZFN0eWxlcyk7XG4gICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXRpZXMgPSBtYXBPYmplY3QoZnVuY3Rpb24gKG1lcmdlZFN0eWxlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIF91cGRhdGVUcmVlLnVwZGF0ZUN1cnJlbnRWZWxvY2l0eSh0aW1lc3RlcCwgY3VycmVudFN0eWxlc1trZXldLCBjdXJyZW50VmVsb2NpdGllc1trZXldLCBtZXJnZWRTdHlsZSk7XG4gICAgICB9LCBtZXJnZWRTdHlsZXMpO1xuXG4gICAgICBpZiAoIWhhc05ld0tleSAmJiBldmVyeU9iaihmdW5jdGlvbiAodiwgaykge1xuICAgICAgICByZXR1cm4gX25vVmVsb2NpdHkyWydkZWZhdWx0J10odiwgY3VycmVudFN0eWxlc1trXSk7XG4gICAgICB9LCBjdXJyZW50VmVsb2NpdGllcykgJiYgZXZlcnlPYmooZnVuY3Rpb24gKHYsIGspIHtcbiAgICAgICAgcmV0dXJuIF9ub1ZlbG9jaXR5MlsnZGVmYXVsdCddKHYsIG5ld0N1cnJlbnRTdHlsZXNba10pO1xuICAgICAgfSwgbmV3Q3VycmVudFZlbG9jaXRpZXMpKSB7XG4gICAgICAgIC8vIGNoZWNrIGV4cGxhbmF0aW9uIGluIGBNb3Rpb24uYW5pbWF0aW9uUmVuZGVyYFxuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTsgLy8gTmFzdHkgc2lkZSBlZmZlY3RzLi4uLlxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50U3R5bGVzOiBuZXdDdXJyZW50U3R5bGVzLFxuICAgICAgICBjdXJyZW50VmVsb2NpdGllczogbmV3Q3VycmVudFZlbG9jaXRpZXNcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHN0b3BBbmltYXRpb246IG51bGwsXG5cbiAgICAvLyB1c2VkIGluIGFuaW1hdGlvblJlbmRlclxuICAgIGhhc1VubW91bnRlZDogZmFsc2UsXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BBbmltYXRpb24oKTtcbiAgICAgIHRoaXMuaGFzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgc3RhcnRBbmltYXRpbmc6IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW5nKCkge1xuICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uID0gc3RhcnRBbmltYXRpb24odGhpcy5zdGF0ZSwgdGhpcy5hbmltYXRpb25TdGVwLCB0aGlzLmFuaW1hdGlvblJlbmRlcik7XG4gICAgfSxcblxuICAgIGFuaW1hdGlvblJlbmRlcjogZnVuY3Rpb24gYW5pbWF0aW9uUmVuZGVyKGFscGhhLCBuZXh0U3RhdGUsIHByZXZTdGF0ZSkge1xuICAgICAgLy8gU2VlIGNvbW1lbnQgaW4gTW90aW9uLlxuICAgICAgaWYgKCF0aGlzLmhhc1VubW91bnRlZCkge1xuICAgICAgICB2YXIgY3VycmVudFN0eWxlcyA9IG1hcE9iamVjdChmdW5jdGlvbiAoc3R5bGUsIGtleSkge1xuICAgICAgICAgIHJldHVybiBfdXBkYXRlVHJlZS5pbnRlcnBvbGF0ZVZhbHVlKGFscGhhLCBzdHlsZSwgcHJldlN0YXRlLmN1cnJlbnRTdHlsZXNba2V5XSk7XG4gICAgICAgIH0sIG5leHRTdGF0ZS5jdXJyZW50U3R5bGVzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcyxcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdGllczogbmV4dFN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBzdHJpcHBlZFN0eWxlID0gbWFwT2JqZWN0KF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddLCB0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMpO1xuICAgICAgdmFyIHJlbmRlcmVkQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuKHN0cmlwcGVkU3R5bGUpO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGRyZW4gJiYgUmVhY3QuQ2hpbGRyZW4ub25seShyZW5kZXJlZENoaWxkcmVuKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBfZGVwcmVjYXRlZFNwcmluZ3MgPSBfZGVwcmVjYXRlZFNwcmluZ3MzWydkZWZhdWx0J10oUmVhY3QpO1xuXG4gIHZhciBTcHJpbmcgPSBfZGVwcmVjYXRlZFNwcmluZ3MuU3ByaW5nO1xuICB2YXIgVHJhbnNpdGlvblNwcmluZyA9IF9kZXByZWNhdGVkU3ByaW5ncy5UcmFuc2l0aW9uU3ByaW5nO1xuXG4gIHJldHVybiB7IFNwcmluZzogU3ByaW5nLCBUcmFuc2l0aW9uU3ByaW5nOiBUcmFuc2l0aW9uU3ByaW5nLCBNb3Rpb246IE1vdGlvbiwgU3RhZ2dlcmVkTW90aW9uOiBTdGFnZ2VyZWRNb3Rpb24sIFRyYW5zaXRpb25Nb3Rpb246IFRyYW5zaXRpb25Nb3Rpb24gfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9jb21wb25lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGN1cnJlbnRTdHlsZSBrZWVwcyB0aGUgaW5mbyBhYm91dCB3aGV0aGVyIGEgcHJvcCBpcyBjb25maWd1cmVkIGFzIGEgc3ByaW5nXG4vLyBvciBpZiBpdCdzIGp1c3QgYSByYW5kb20gcHJvcCB0aGF0IGhhcHBlbnMgdG8gYmUgcHJlc2VudCBvbiB0aGUgc3R5bGVcblwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBub1ZlbG9jaXR5O1xuXG5mdW5jdGlvbiBub1ZlbG9jaXR5KGN1cnJlbnRWZWxvY2l0eSwgY3VycmVudFN0eWxlKSB7XG4gIGZvciAodmFyIGtleSBpbiBjdXJyZW50VmVsb2NpdHkpIHtcbiAgICBpZiAoIWN1cnJlbnRWZWxvY2l0eS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRTdHlsZVtrZXldLmNvbmZpZyAmJiBjdXJyZW50VmVsb2NpdHlba2V5XSAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL25vVmVsb2NpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGhhc1JlYWNoZWRTdHlsZTtcblxuZnVuY3Rpb24gaGFzUmVhY2hlZFN0eWxlKGN1cnJlbnRTdHlsZSwgc3R5bGUpIHtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGN1cnJlbnRTdHlsZVtrZXldO1xuICAgIHZhciBkZXN0VmFsdWUgPSBzdHlsZVtrZXldO1xuICAgIGlmICghZGVzdFZhbHVlLmNvbmZpZykge1xuICAgICAgLy8gbm90IGEgc3ByaW5nIGNvbmZpZ1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChjdXJyZW50VmFsdWUuY29uZmlnICYmIGN1cnJlbnRWYWx1ZS52YWwgIT09IGRlc3RWYWx1ZS52YWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFjdXJyZW50VmFsdWUuY29uZmlnICYmIGN1cnJlbnRWYWx1ZSAhPT0gZGVzdFZhbHVlLnZhbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvaGFzUmVhY2hlZFN0eWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHRoaXMgZnVuY3Rpb24gaXMgYWxsb2NhdGlvbi1sZXNzIHRoYW5rcyB0byBiYWJlbCwgd2hpY2ggdHJhbnNmb3JtcyB0aGUgdGFpbFxuLy8gY2FsbHMgaW50byBsb29wc1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1lcmdlRGlmZjtcbmZ1bmN0aW9uIG1lcmdlRGlmZkFycihfeCwgX3gyLCBfeDMsIF94NCwgX3g1LCBfeDYsIF94Nykge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICB2YXIgYXJyQSA9IF94LFxuICAgICAgICBhcnJCID0gX3gyLFxuICAgICAgICBjb2xsQiA9IF94MyxcbiAgICAgICAgaW5kZXhBID0gX3g0LFxuICAgICAgICBpbmRleEIgPSBfeDUsXG4gICAgICAgIG9uUmVtb3ZlID0gX3g2LFxuICAgICAgICBhY2N1bSA9IF94NztcbiAgICBlbmRBID0gZW5kQiA9IGtleUEgPSBrZXlCID0gZmlsbCA9IGZpbGwgPSB1bmRlZmluZWQ7XG4gICAgX2FnYWluID0gZmFsc2U7XG5cbiAgICB2YXIgZW5kQSA9IGluZGV4QSA9PT0gYXJyQS5sZW5ndGg7XG4gICAgdmFyIGVuZEIgPSBpbmRleEIgPT09IGFyckIubGVuZ3RoO1xuICAgIHZhciBrZXlBID0gYXJyQVtpbmRleEFdO1xuICAgIHZhciBrZXlCID0gYXJyQltpbmRleEJdO1xuICAgIGlmIChlbmRBICYmIGVuZEIpIHtcbiAgICAgIC8vIHJldHVybmluZyBudWxsIGhlcmUsIG90aGVyd2lzZSBsaW50IGNvbXBsYWlucyB0aGF0IHdlJ3JlIG5vdCBleHBlY3RpbmdcbiAgICAgIC8vIGEgcmV0dXJuIHZhbHVlIGluIHN1YnNlcXVlbnQgY2FsbHMuIFdlIGtub3cgd2hhdCB3ZSdyZSBkb2luZy5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChlbmRBKSB7XG4gICAgICBhY2N1bVtrZXlCXSA9IGNvbGxCW2tleUJdO1xuICAgICAgX3ggPSBhcnJBO1xuICAgICAgX3gyID0gYXJyQjtcbiAgICAgIF94MyA9IGNvbGxCO1xuICAgICAgX3g0ID0gaW5kZXhBO1xuICAgICAgX3g1ID0gaW5kZXhCICsgMTtcbiAgICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgICAgX3g3ID0gYWNjdW07XG4gICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgIH1cblxuICAgIGlmIChlbmRCKSB7XG4gICAgICB2YXIgZmlsbCA9IG9uUmVtb3ZlKGtleUEpO1xuICAgICAgaWYgKGZpbGwgIT0gbnVsbCkge1xuICAgICAgICBhY2N1bVtrZXlBXSA9IGZpbGw7XG4gICAgICB9XG4gICAgICBfeCA9IGFyckE7XG4gICAgICBfeDIgPSBhcnJCO1xuICAgICAgX3gzID0gY29sbEI7XG4gICAgICBfeDQgPSBpbmRleEEgKyAxO1xuICAgICAgX3g1ID0gaW5kZXhCO1xuICAgICAgX3g2ID0gb25SZW1vdmU7XG4gICAgICBfeDcgPSBhY2N1bTtcbiAgICAgIF9hZ2FpbiA9IHRydWU7XG4gICAgICBjb250aW51ZSBfZnVuY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKGtleUEgPT09IGtleUIpIHtcbiAgICAgIGFjY3VtW2tleUFdID0gY29sbEJba2V5QV07XG4gICAgICBfeCA9IGFyckE7XG4gICAgICBfeDIgPSBhcnJCO1xuICAgICAgX3gzID0gY29sbEI7XG4gICAgICBfeDQgPSBpbmRleEEgKyAxO1xuICAgICAgX3g1ID0gaW5kZXhCICsgMTtcbiAgICAgIF94NiA9IG9uUmVtb3ZlO1xuICAgICAgX3g3ID0gYWNjdW07XG4gICAgICBfYWdhaW4gPSB0cnVlO1xuICAgICAgY29udGludWUgX2Z1bmN0aW9uO1xuICAgIH1cblxuICAgIGlmICghY29sbEIuaGFzT3duUHJvcGVydHkoa2V5QSkpIHtcbiAgICAgIHZhciBmaWxsID0gb25SZW1vdmUoa2V5QSk7XG4gICAgICBpZiAoZmlsbCAhPSBudWxsKSB7XG4gICAgICAgIGFjY3VtW2tleUFdID0gZmlsbDtcbiAgICAgIH1cbiAgICAgIF94ID0gYXJyQTtcbiAgICAgIF94MiA9IGFyckI7XG4gICAgICBfeDMgPSBjb2xsQjtcbiAgICAgIF94NCA9IGluZGV4QSArIDE7XG4gICAgICBfeDUgPSBpbmRleEI7XG4gICAgICBfeDYgPSBvblJlbW92ZTtcbiAgICAgIF94NyA9IGFjY3VtO1xuICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICB9XG5cbiAgICBfeCA9IGFyckE7XG4gICAgX3gyID0gYXJyQjtcbiAgICBfeDMgPSBjb2xsQjtcbiAgICBfeDQgPSBpbmRleEEgKyAxO1xuICAgIF94NSA9IGluZGV4QjtcbiAgICBfeDYgPSBvblJlbW92ZTtcbiAgICBfeDcgPSBhY2N1bTtcbiAgICBfYWdhaW4gPSB0cnVlO1xuICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZURpZmYoYSwgYiwgb25SZW1vdmUpIHtcbiAgdmFyIHJldCA9IHt9O1xuICAvLyBpZiBhbnlvbmUgY2FuIG1ha2UgdGhpcyB3b3JrIHdpdGhvdXQgYWxsb2NhdGluZyB0aGUgYXJyYXlzIGhlcmUsIHdlJ2xsXG4gIC8vIGdpdmUgeW91IGEgbWVkYWxcbiAgbWVyZ2VEaWZmQXJyKE9iamVjdC5rZXlzKGEpLCBPYmplY3Qua2V5cyhiKSwgYiwgMCwgMCwgb25SZW1vdmUsIHJldCk7XG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9tZXJnZURpZmYuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY29uZmlnQW5pbWF0aW9uO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfcGVyZm9ybWFuY2VOb3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wZXJmb3JtYW5jZU5vdyk7XG5cbnZhciBfcmFmID0gcmVxdWlyZSgncmFmJyk7XG5cbnZhciBfcmFmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhZik7XG5cbmZ1bmN0aW9uIGNvbmZpZ0FuaW1hdGlvbigpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgX2NvbmZpZyR0aW1lU3RlcCA9IGNvbmZpZy50aW1lU3RlcDtcbiAgdmFyIHRpbWVTdGVwID0gX2NvbmZpZyR0aW1lU3RlcCA9PT0gdW5kZWZpbmVkID8gMSAvIDYwICogMTAwMCA6IF9jb25maWckdGltZVN0ZXA7XG4gIHZhciBfY29uZmlnJHRpbWVTY2FsZSA9IGNvbmZpZy50aW1lU2NhbGU7XG4gIHZhciB0aW1lU2NhbGUgPSBfY29uZmlnJHRpbWVTY2FsZSA9PT0gdW5kZWZpbmVkID8gMSA6IF9jb25maWckdGltZVNjYWxlO1xuICB2YXIgX2NvbmZpZyRtYXhTdGVwcyA9IGNvbmZpZy5tYXhTdGVwcztcbiAgdmFyIG1heFN0ZXBzID0gX2NvbmZpZyRtYXhTdGVwcyA9PT0gdW5kZWZpbmVkID8gMTAgOiBfY29uZmlnJG1heFN0ZXBzO1xuICB2YXIgX2NvbmZpZyRyYWYgPSBjb25maWcucmFmO1xuICB2YXIgcmFmID0gX2NvbmZpZyRyYWYgPT09IHVuZGVmaW5lZCA/IF9yYWYyWydkZWZhdWx0J10gOiBfY29uZmlnJHJhZjtcbiAgdmFyIF9jb25maWckbm93ID0gY29uZmlnLm5vdztcbiAgdmFyIG5vdyA9IF9jb25maWckbm93ID09PSB1bmRlZmluZWQgPyBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10gOiBfY29uZmlnJG5vdztcblxuICB2YXIgYW5pbVJ1bm5pbmcgPSBbXTtcbiAgdmFyIHJ1bm5pbmcgPSBmYWxzZTtcbiAgdmFyIHByZXZUaW1lID0gMDtcbiAgdmFyIGFjY3VtdWxhdGVkVGltZSA9IDA7XG5cbiAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICB2YXIgY3VycmVudFRpbWUgPSBub3coKTtcbiAgICB2YXIgZnJhbWVUaW1lID0gY3VycmVudFRpbWUgLSBwcmV2VGltZTsgLy8gZGVsdGFcblxuICAgIHByZXZUaW1lID0gY3VycmVudFRpbWU7XG4gICAgYWNjdW11bGF0ZWRUaW1lICs9IGZyYW1lVGltZSAqIHRpbWVTY2FsZTtcblxuICAgIGlmIChhY2N1bXVsYXRlZFRpbWUgPiB0aW1lU3RlcCAqIG1heFN0ZXBzKSB7XG4gICAgICBhY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgIH1cblxuICAgIHZhciBmcmFtZU51bWJlciA9IE1hdGguY2VpbChhY2N1bXVsYXRlZFRpbWUgLyB0aW1lU3RlcCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmltUnVubmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIF9hbmltUnVubmluZyRpID0gYW5pbVJ1bm5pbmdbaV07XG4gICAgICB2YXIgYWN0aXZlID0gX2FuaW1SdW5uaW5nJGkuYWN0aXZlO1xuICAgICAgdmFyIGFuaW1hdGlvblN0ZXAgPSBfYW5pbVJ1bm5pbmckaS5hbmltYXRpb25TdGVwO1xuICAgICAgdmFyIHByZXZQcmV2U3RhdGUgPSBfYW5pbVJ1bm5pbmckaS5wcmV2U3RhdGU7XG4gICAgICB2YXIgcHJldk5leHRTdGF0ZSA9IGFuaW1SdW5uaW5nW2ldLm5leHRTdGF0ZTtcblxuICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlZW1zIGxpa2UgYmVjYXVzZSB0aGUgVFMgc2V0cyBkZXN0VmFscyBhcyBlbnRlclZhbHMgZm9yIHRoZSBmaXJzdFxuICAgICAgLy8gdGljaywgd2UgbWlnaHQgcmVuZGVyIHRoYXQgdmFsdWUgdHdpY2UuIFdlIHJlbmRlciBpdCBvbmNlLCBjdXJyVmFsdWUgaXNcbiAgICAgIC8vIGVudGVyVmFsIGFuZCBkZXN0VmFsIGlzIGVudGVyVmFsLiBUaGUgbmV4dCB0aWNrIGlzIGZhc3RlciB0aGFuIDE2bXMsXG4gICAgICAvLyBzbyBhY2N1bXVsYXRlZFRpbWUgKHdoaWNoIHdvdWxkIGJlIGFib3V0IC0xNm1zIGZyb20gdGhlIHByZXZpb3VzIHRpY2spXG4gICAgICAvLyBpcyBuZWdhdGl2ZSAoLTE2bXMgKyBhbnkgbnVtYmVyIGxlc3MgdGhhbiAxNm1zIDwgMCkuIFNvIHdlIGp1c3QgcmVuZGVyXG4gICAgICAvLyBwYXJ0IHdheXMgdG93YXJkcyB0aGUgbmV4dFN0YXRlLCBidXQgdGhhdCdzIGVudGVyVmFsIHN0aWxsLiBXZSByZW5kZXJcbiAgICAgIC8vIHNheSA3NSUgYmV0d2VlbiBjdXJyVmFsdWUgKD09PSBlbnRlclZhbCkgYW5kIGRlc3RWYWx1ZSAoPT09IGVudGVyVmFsKS5cbiAgICAgIC8vIFNvIHdlIHJlbmRlciB0aGUgc2FtZSB2YWx1ZSBhIHNlY29uZCB0aW1lLlxuICAgICAgLy8gVGhlIHNvbHV0aW9uIGJlbG93IGlzIHRvIHJlY2FsY3VsYXRlIHRoZSBkZXN0aW5hdGlvbiBzdGF0ZSBldmVuIHdoZW5cbiAgICAgIC8vIHlvdSdyZSBtb3ZpbmcgcGFydGlhbGx5IHRvd2FyZHMgaXQuXG4gICAgICBpZiAoYWNjdW11bGF0ZWRUaW1lIDw9IDApIHtcbiAgICAgICAgYW5pbVJ1bm5pbmdbaV0ubmV4dFN0YXRlID0gYW5pbWF0aW9uU3RlcCh0aW1lU3RlcCAvIDEwMDAsIHByZXZQcmV2U3RhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmcmFtZU51bWJlcjsgaisrKSB7XG4gICAgICAgICAgYW5pbVJ1bm5pbmdbaV0ubmV4dFN0YXRlID0gYW5pbWF0aW9uU3RlcCh0aW1lU3RlcCAvIDEwMDAsIHByZXZOZXh0U3RhdGUpO1xuICAgICAgICAgIHZhciBfcmVmID0gW3ByZXZOZXh0U3RhdGUsIGFuaW1SdW5uaW5nW2ldLm5leHRTdGF0ZV07XG4gICAgICAgICAgYW5pbVJ1bm5pbmdbaV0ucHJldlN0YXRlID0gX3JlZlswXTtcbiAgICAgICAgICBwcmV2TmV4dFN0YXRlID0gX3JlZlsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGFjY3VtdWxhdGVkVGltZSA9IGFjY3VtdWxhdGVkVGltZSAtIGZyYW1lTnVtYmVyICogdGltZVN0ZXA7XG5cbiAgICAvLyBSZW5kZXIgYW5kIGZpbHRlciBpbiBvbmUgaXRlcmF0aW9uLlxuICAgIHZhciBhbHBoYSA9IDEgKyBhY2N1bXVsYXRlZFRpbWUgLyB0aW1lU3RlcDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1SdW5uaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgX2FuaW1SdW5uaW5nJGkyID0gYW5pbVJ1bm5pbmdbaV07XG4gICAgICB2YXIgYW5pbWF0aW9uUmVuZGVyID0gX2FuaW1SdW5uaW5nJGkyLmFuaW1hdGlvblJlbmRlcjtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSBfYW5pbVJ1bm5pbmckaTIubmV4dFN0YXRlO1xuICAgICAgdmFyIHByZXZTdGF0ZSA9IF9hbmltUnVubmluZyRpMi5wcmV2U3RhdGU7XG5cbiAgICAgIC8vIE1pZ2h0IG11dGF0ZSBhbmltUnVubmluZy4uLi4uLi4uXG4gICAgICBhbmltYXRpb25SZW5kZXIoYWxwaGEsIG5leHRTdGF0ZSwgcHJldlN0YXRlKTtcbiAgICB9XG5cbiAgICBhbmltUnVubmluZyA9IGFuaW1SdW5uaW5nLmZpbHRlcihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBhY3RpdmUgPSBfcmVmMi5hY3RpdmU7XG4gICAgICByZXR1cm4gYWN0aXZlO1xuICAgIH0pO1xuXG4gICAgaWYgKGFuaW1SdW5uaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByYWYobG9vcCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICAgIHByZXZUaW1lID0gbm93KCk7XG4gICAgICBhY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgICAgcmFmKGxvb3ApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbihzdGF0ZSwgYW5pbWF0aW9uU3RlcCwgYW5pbWF0aW9uUmVuZGVyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmltUnVubmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbCA9IGFuaW1SdW5uaW5nW2ldO1xuICAgICAgaWYgKHZhbC5hbmltYXRpb25TdGVwID09PSBhbmltYXRpb25TdGVwKSB7XG4gICAgICAgIHZhbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB2YWwucHJldlN0YXRlID0gc3RhdGU7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB2YWwuc3RvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3QW5pbSA9IHtcbiAgICAgIGFuaW1hdGlvblN0ZXA6IGFuaW1hdGlvblN0ZXAsXG4gICAgICBhbmltYXRpb25SZW5kZXI6IGFuaW1hdGlvblJlbmRlcixcbiAgICAgIHByZXZTdGF0ZTogc3RhdGUsXG4gICAgICBuZXh0U3RhdGU6IHN0YXRlLFxuICAgICAgYWN0aXZlOiB0cnVlXG4gICAgfTtcblxuICAgIG5ld0FuaW0uc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXdBbmltLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG4gICAgYW5pbVJ1bm5pbmcucHVzaChuZXdBbmltKTtcblxuICAgIHN0YXJ0KCk7XG5cbiAgICByZXR1cm4gbmV3QW5pbS5zdG9wO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL2FuaW1hdGlvbkxvb3AuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjcuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8ge30gOiB3aW5kb3dcbiAgLCB2ZW5kb3JzID0gWydtb3onLCAnd2Via2l0J11cbiAgLCBzdWZmaXggPSAnQW5pbWF0aW9uRnJhbWUnXG4gICwgcmFmID0gZ2xvYmFsWydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSBnbG9iYWxbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IGdsb2JhbFsnY2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG5cbmZvcih2YXIgaSA9IDA7IGkgPCB2ZW5kb3JzLmxlbmd0aCAmJiAhcmFmOyBpKyspIHtcbiAgcmFmID0gZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCBnbG9iYWxbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cbn1cblxuLy8gU29tZSB2ZXJzaW9ucyBvZiBGRiBoYXZlIHJBRiBidXQgbm90IGNBRlxuaWYoIXJhZiB8fCAhY2FmKSB7XG4gIHZhciBsYXN0ID0gMFxuICAgICwgaWQgPSAwXG4gICAgLCBxdWV1ZSA9IFtdXG4gICAgLCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwXG5cbiAgcmFmID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZihxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBfbm93ID0gbm93KClcbiAgICAgICAgLCBuZXh0ID0gTWF0aC5tYXgoMCwgZnJhbWVEdXJhdGlvbiAtIChfbm93IC0gbGFzdCkpXG4gICAgICBsYXN0ID0gbmV4dCArIF9ub3dcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjcCA9IHF1ZXVlLnNsaWNlKDApXG4gICAgICAgIC8vIENsZWFyIHF1ZXVlIGhlcmUgdG8gcHJldmVudFxuICAgICAgICAvLyBjYWxsYmFja3MgZnJvbSBhcHBlbmRpbmcgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRvIHRoZSBjdXJyZW50IGZyYW1lJ3MgcXVldWVcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZighY3BbaV0uY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNwW2ldLmNhbGxiYWNrKGxhc3QpXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgdGhyb3cgZSB9LCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5yb3VuZChuZXh0KSlcbiAgICB9XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBoYW5kbGU6ICsraWQsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjYW5jZWxsZWQ6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gaWRcbiAgfVxuXG4gIGNhZiA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYocXVldWVbaV0uaGFuZGxlID09PSBoYW5kbGUpIHtcbiAgICAgICAgcXVldWVbaV0uY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuKSB7XG4gIC8vIFdyYXAgaW4gYSBuZXcgZnVuY3Rpb24gdG8gcHJldmVudFxuICAvLyBgY2FuY2VsYCBwb3RlbnRpYWxseSBiZWluZyBhc3NpZ25lZFxuICAvLyB0byB0aGUgbmF0aXZlIHJBRiBmdW5jdGlvblxuICByZXR1cm4gcmFmLmNhbGwoZ2xvYmFsLCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkoZ2xvYmFsLCBhcmd1bWVudHMpXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vfi9yYWYvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gdXNlZCBieSB0aGUgdHJlZS13YWxraW5nIHVwZGF0ZXMgYW5kIHNwcmluZ3MuIEF2b2lkcyBzb21lIGFsbG9jYXRpb25zXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gemVybztcblxuZnVuY3Rpb24gemVybygpIHtcbiAgcmV0dXJuIDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi96ZXJvLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuaW50ZXJwb2xhdGVWYWx1ZSA9IGludGVycG9sYXRlVmFsdWU7XG5leHBvcnRzLnVwZGF0ZUN1cnJlbnRTdHlsZSA9IHVwZGF0ZUN1cnJlbnRTdHlsZTtcbmV4cG9ydHMudXBkYXRlQ3VycmVudFZlbG9jaXR5ID0gdXBkYXRlQ3VycmVudFZlbG9jaXR5O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfc3RlcHBlciA9IHJlcXVpcmUoJy4vc3RlcHBlcicpO1xuXG52YXIgX3N0ZXBwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RlcHBlcik7XG5cbi8vIFRPRE86IHJlZmFjdG9yIGNvbW1vbiBsb2dpYyB3aXRoIHVwZGF0ZUN1cnJWYWx1ZSBhbmQgdXBkYXRlQ3VyclZlbG9jaXR5XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlVmFsdWUoYWxwaGEsIG5leHRTdHlsZSwgcHJldlN0eWxlKSB7XG4gIC8vIG1pZ2h0IGJlIHVzZWQgYnkgYSBUcmFuc2l0aW9uTW90aW9uLCB3aGVyZSBwcmV2U3R5bGUgbWlnaHQgbm90IGV4aXN0IGFueW1vcmVcbiAgaWYgKCFwcmV2U3R5bGUpIHtcbiAgICByZXR1cm4gbmV4dFN0eWxlO1xuICB9XG5cbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gbmV4dFN0eWxlKSB7XG4gICAgaWYgKCFuZXh0U3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFuZXh0U3R5bGVba2V5XS5jb25maWcpIHtcbiAgICAgIHJldFtrZXldID0gbmV4dFN0eWxlW2tleV07XG4gICAgICAvLyBub3QgYSBzcHJpbmcgY29uZmlnLCBub3Qgc29tZXRoaW5nIHdlIHdhbnQgdG8gaW50ZXJwb2xhdGVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgcHJldlZhbHVlID0gcHJldlN0eWxlW2tleV0uY29uZmlnID8gcHJldlN0eWxlW2tleV0udmFsIDogcHJldlN0eWxlW2tleV07XG4gICAgcmV0W2tleV0gPSB7XG4gICAgICB2YWw6IG5leHRTdHlsZVtrZXldLnZhbCAqIGFscGhhICsgcHJldlZhbHVlICogKDEgLSBhbHBoYSksXG4gICAgICBjb25maWc6IG5leHRTdHlsZVtrZXldLmNvbmZpZ1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBUT0RPOiByZWZhY3RvciBjb21tb24gbG9naWMgd2l0aCB1cGRhdGVDdXJyZW50VmVsb2NpdHlcblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFN0eWxlKGZyYW1lUmF0ZSwgY3VycmVudFN0eWxlLCBjdXJyZW50VmVsb2NpdHksIHN0eWxlKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFzdHlsZVtrZXldLmNvbmZpZykge1xuICAgICAgcmV0W2tleV0gPSBzdHlsZVtrZXldO1xuICAgICAgLy8gbm90IGEgc3ByaW5nIGNvbmZpZywgbm90IHNvbWV0aGluZyB3ZSB3YW50IHRvIGludGVycG9sYXRlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIF9zdHlsZSRrZXkkY29uZmlnID0gc3R5bGVba2V5XS5jb25maWc7XG4gICAgdmFyIGsgPSBfc3R5bGUka2V5JGNvbmZpZ1swXTtcbiAgICB2YXIgYiA9IF9zdHlsZSRrZXkkY29uZmlnWzFdO1xuXG4gICAgdmFyIHZhbCA9IF9zdGVwcGVyMlsnZGVmYXVsdCddKGZyYW1lUmF0ZSxcbiAgICAvLyBtaWdodCBoYXZlIGJlZW4gYSBub24tc3ByaW5nZWQgcHJvcCB0aGF0IGp1c3QgYmVjYW1lIG9uZVxuICAgIGN1cnJlbnRTdHlsZVtrZXldLnZhbCA9PSBudWxsID8gY3VycmVudFN0eWxlW2tleV0gOiBjdXJyZW50U3R5bGVba2V5XS52YWwsIGN1cnJlbnRWZWxvY2l0eVtrZXldLCBzdHlsZVtrZXldLnZhbCwgaywgYilbMF07XG4gICAgcmV0W2tleV0gPSB7XG4gICAgICB2YWw6IHZhbCxcbiAgICAgIGNvbmZpZzogc3R5bGVba2V5XS5jb25maWdcbiAgICB9O1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRWZWxvY2l0eShmcmFtZVJhdGUsIGN1cnJlbnRTdHlsZSwgY3VycmVudFZlbG9jaXR5LCBzdHlsZSkge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBzdHlsZSkge1xuICAgIGlmICghc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghc3R5bGVba2V5XS5jb25maWcpIHtcbiAgICAgIC8vIG5vdCBhIHNwcmluZyBjb25maWcsIG5vdCBzb21ldGhpbmcgd2Ugd2FudCB0byBpbnRlcnBvbGF0ZVxuICAgICAgcmV0W2tleV0gPSAwO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBfc3R5bGUka2V5JGNvbmZpZzIgPSBzdHlsZVtrZXldLmNvbmZpZztcbiAgICB2YXIgayA9IF9zdHlsZSRrZXkkY29uZmlnMlswXTtcbiAgICB2YXIgYiA9IF9zdHlsZSRrZXkkY29uZmlnMlsxXTtcblxuICAgIHZhciB2YWwgPSBfc3RlcHBlcjJbJ2RlZmF1bHQnXShmcmFtZVJhdGUsXG4gICAgLy8gbWlnaHQgaGF2ZSBiZWVuIGEgbm9uLXNwcmluZ2VkIHByb3AgdGhhdCBqdXN0IGJlY2FtZSBvbmVcbiAgICBjdXJyZW50U3R5bGVba2V5XS52YWwgPT0gbnVsbCA/IGN1cnJlbnRTdHlsZVtrZXldIDogY3VycmVudFN0eWxlW2tleV0udmFsLCBjdXJyZW50VmVsb2NpdHlba2V5XSwgc3R5bGVba2V5XS52YWwsIGssIGIpWzFdO1xuICAgIHJldFtrZXldID0gdmFsO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi91cGRhdGVUcmVlLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzdGVwcGVyO1xudmFyIGVycm9yTWFyZ2luID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBzdGVwcGVyKGZyYW1lUmF0ZSwgeCwgdiwgZGVzdFgsIGssIGIpIHtcbiAgLy8gU3ByaW5nIHN0aWZmbmVzcywgaW4ga2cgLyBzXjJcblxuICAvLyBmb3IgYW5pbWF0aW9ucywgZGVzdFggaXMgcmVhbGx5IHNwcmluZyBsZW5ndGggKHNwcmluZyBhdCByZXN0KS4gaW5pdGlhbFxuICAvLyBwb3NpdGlvbiBpcyBjb25zaWRlcmVkIGFzIHRoZSBzdHJldGNoZWQvY29tcHJlc3NlZCBwb3NpdGlvbiBvZiBhIHNwcmluZ1xuICB2YXIgRnNwcmluZyA9IC1rICogKHggLSBkZXN0WCk7XG5cbiAgLy8gRGFtcGluZywgaW4ga2cgLyBzXG4gIHZhciBGZGFtcGVyID0gLWIgKiB2O1xuXG4gIC8vIHVzdWFsbHkgd2UgcHV0IG1hc3MgaGVyZSwgYnV0IGZvciBhbmltYXRpb24gcHVycG9zZXMsIHNwZWNpZnlpbmcgbWFzcyBpcyBhXG4gIC8vIGJpdCByZWR1bmRhbnQuIHlvdSBjb3VsZCBzaW1wbHkgYWRqdXN0IGsgYW5kIGIgYWNjb3JkaW5nbHlcbiAgLy8gbGV0IGEgPSAoRnNwcmluZyArIEZkYW1wZXIpIC8gbWFzcztcbiAgdmFyIGEgPSBGc3ByaW5nICsgRmRhbXBlcjtcblxuICB2YXIgbmV3ViA9IHYgKyBhICogZnJhbWVSYXRlO1xuICB2YXIgbmV3WCA9IHggKyBuZXdWICogZnJhbWVSYXRlO1xuXG4gIGlmIChNYXRoLmFicyhuZXdWIC0gdikgPCBlcnJvck1hcmdpbiAmJiBNYXRoLmFicyhuZXdYIC0geCkgPCBlcnJvck1hcmdpbikge1xuICAgIHJldHVybiBbZGVzdFgsIDBdO1xuICB9XG5cbiAgcmV0dXJuIFtuZXdYLCBuZXdWXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3N0ZXBwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZGVwcmVjYXRlZFNwcmluZ3M7XG52YXIgaGFzV2FybmVkRm9yU3ByaW5nID0ge307XG52YXIgaGFzV2FybmVkRm9yVHJhbnNpdGlvblNwcmluZyA9IHt9O1xuXG5mdW5jdGlvbiBkZXByZWNhdGVkU3ByaW5ncyhSZWFjdCkge1xuICB2YXIgU3ByaW5nID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnU3ByaW5nJyxcblxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHZhciBvd25lck5hbWUgPSB0aGlzLl9yZWFjdEludGVybmFsSW5zdGFuY2UuX2N1cnJlbnRFbGVtZW50Ll9vd25lciAmJiB0aGlzLl9yZWFjdEludGVybmFsSW5zdGFuY2UuX2N1cnJlbnRFbGVtZW50Ll9vd25lci5nZXROYW1lKCk7XG4gICAgICAgIGlmICghaGFzV2FybmVkRm9yU3ByaW5nW293bmVyTmFtZV0pIHtcbiAgICAgICAgICBoYXNXYXJuZWRGb3JTcHJpbmdbb3duZXJOYW1lXSA9IHRydWU7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignU3ByaW5nICh1c2VkIGluICVzcmVuZGVyKSBoYXMgbm93IGJlZW4gcmVuYW1lZCB0byBNb3Rpb24uICcgKyAnUGxlYXNlIHNlZSB0aGUgcmVsZWFzZSBub3RlIGZvciB0aGUgdXBncmFkZSBwYXRoLiBUaGFuayB5b3UhJywgb3duZXJOYW1lID8gb3duZXJOYW1lICsgJ1xcJ3MgJyA6ICdSZWFjdC4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIFRyYW5zaXRpb25TcHJpbmcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdUcmFuc2l0aW9uU3ByaW5nJyxcblxuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHZhciBvd25lck5hbWUgPSB0aGlzLl9yZWFjdEludGVybmFsSW5zdGFuY2UuX2N1cnJlbnRFbGVtZW50Ll9vd25lciAmJiB0aGlzLl9yZWFjdEludGVybmFsSW5zdGFuY2UuX2N1cnJlbnRFbGVtZW50Ll9vd25lci5nZXROYW1lKCk7XG4gICAgICAgIGlmICghaGFzV2FybmVkRm9yVHJhbnNpdGlvblNwcmluZ1tvd25lck5hbWVdKSB7XG4gICAgICAgICAgaGFzV2FybmVkRm9yVHJhbnNpdGlvblNwcmluZ1tvd25lck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2l0aW9uU3ByaW5nICh1c2VkIGluICVzcmVuZGVyKSBoYXMgbm93IGJlZW4gcmVuYW1lZCB0byAnICsgJ1RyYW5zaXRpb25Nb3Rpb24uIFBsZWFzZSBzZWUgdGhlIHJlbGVhc2Ugbm90ZSBmb3IgdGhlIHVwZ3JhZGUgJyArICdwYXRoLiBUaGFuayB5b3UhJywgb3duZXJOYW1lID8gb3duZXJOYW1lICsgJ1xcJ3MgJyA6ICdSZWFjdC4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHsgU3ByaW5nOiBTcHJpbmcsIFRyYW5zaXRpb25TcHJpbmc6IFRyYW5zaXRpb25TcHJpbmcgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9kZXByZWNhdGVkU3ByaW5ncy5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0dXJuIHt4OiB7dmFsOiAxLCBjb25maWc6IFsxLCAyXX0sIHk6IDJ9IGludG8ge3g6IDEsIHk6IDJ9XG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gc3RyaXBTdHlsZTtcblxuZnVuY3Rpb24gc3RyaXBTdHlsZShzdHlsZSkge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBzdHlsZSkge1xuICAgIGlmICghc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJldFtrZXldID0gc3R5bGVba2V5XS52YWwgPT0gbnVsbCA/IHN0eWxlW2tleV0gOiBzdHlsZVtrZXldLnZhbDtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RyaXBTdHlsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gcmVvcmRlcktleXM7XG5cbmZ1bmN0aW9uIHJlb3JkZXJLZXlzKG9iaiwgZikge1xuICB2YXIgbmV3S2V5cyA9IGYoT2JqZWN0LmtleXMob2JqKSk7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IG5ld0tleXNbaV07XG4gICAgcmV0W2tleV0gPSBvYmpba2V5XTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtbW90aW9uL2xpYi9yZW9yZGVyS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzcHJpbmc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9wcmVzZXRzID0gcmVxdWlyZSgnLi9wcmVzZXRzJyk7XG5cbnZhciBfcHJlc2V0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRzKTtcblxuLy8gaW5zdGVhZCBvZiBleHBvc2luZyB7dmFsOiBibGEsIGNvbmZpZzogYmxhfSwgdXNlIGEgaGVscGVyXG5cbmZ1bmN0aW9uIHNwcmluZyh2YWwpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IF9wcmVzZXRzMlsnZGVmYXVsdCddLm5vV29iYmxlIDogYXJndW1lbnRzWzFdO1xuXG4gIHJldHVybiB7IHZhbDogdmFsLCBjb25maWc6IGNvbmZpZyB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3NwcmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBbc3RpZmZuZXNzLCBkYW1waW5nXVxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHtcbiAgbm9Xb2JibGU6IFsxNzAsIDI2XSwgLy8gdGhlIGRlZmF1bHRcbiAgZ2VudGxlOiBbMTIwLCAxNF0sXG4gIHdvYmJseTogWzE4MCwgMTJdLFxuICBzdGlmZjogWzIxMCwgMjBdXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1tb3Rpb24vbGliL3ByZXNldHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgQ2xpbWJCYWRnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbG9nbyA9IHJlcXVpcmUoJy4uLy4uL2ltZy9jbGltYl9sb2dvLnN2ZycpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2NsaW1iLnNvY2lhbC9cIlxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpbWItc29jaWFsLWJhZGdlXCJcbiAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBsb2dvfX0+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGltYkJhZGdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy93YWxsL0NsaW1iQmFkZ2UuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDI2ODEgODE0XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHhtbG5zOnNrZXRjaD1cXFwiaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zXFxcIj48dGl0bGU+Q2xpbWIgTG9nbyBCZXRhPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZGVmcz48L2RlZnM+PGcgaWQ9XFxcIlBhZ2UtMVxcXCIgc3Ryb2tlPVxcXCJub25lXFxcIiBzdHJva2Utd2lkdGg9XFxcIjFcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgc2tldGNoOnR5cGU9XFxcIk1TUGFnZVxcXCI+PGcgaWQ9XFxcIkNsaW1iLUxvZ28tQmV0YVxcXCIgc2tldGNoOnR5cGU9XFxcIk1TQXJ0Ym9hcmRHcm91cFxcXCIgZmlsbD1cXFwiIzE5Mzc0RFxcXCI+PGcgaWQ9XFxcImNsaS0tLS1iLnNvY2lhbC0rLVBhdGgtQ29weS0rLVR5cGUtc29tZXRoaW5nLUNvcHktQ29weS1Db3B5LUNvcHktQ29weVxcXCIgc2tldGNoOnR5cGU9XFxcIk1TTGF5ZXJHcm91cFxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMjA2LjAwMDAwMCwgMjQ5LjAwMDAwMClcXFwiPjxnIGlkPVxcXCJjbGktLS0tYi5zb2NpYWwtKy1QYXRoLUNvcHlcXFwiIHNrZXRjaDp0eXBlPVxcXCJNU1NoYXBlR3JvdXBcXFwiPjxwYXRoIGQ9XFxcIk03MjMuMzc0MjA3LDE4Ny40NDIyMTEgTDc2Ny4wMjc2NDEsMzM3LjM4MzU3NSBDNzY3LjUxMDg4OSwzNDEuMjY1NTUyIDc3MS44NjAxMjQsMzQ1LjE0NzUyOSA3NzYuMjA5MzU5LDM0NS4xNDc1MjkgTDgzMy4yMzI2NjQsMzQ1LjE0NzUyOSBDODM5LjAzMTY0NCwzNDUuMTQ3NTI5IDg0My4zODA4NzksMzQwLjc4MDMwNSA4NDIuNDE0MzgzLDMzNC40NzIwOTIgTDczOS40ODI0ODUsOC4zODYwMTk4MiBDNzM4Ljk5OTIzNyw0LjAxODc5NTY0IDczNC42NTAwMDIsMC42MjIwNjU3MjggNzMwLjc4NDAxNSwwLjYyMjA2NTcyOCBMNzIzLjA1MjA0MSwwLjYyMjA2NTcyOCBDNzIwLjYzNTgsMC42MjIwNjU3MjggNzE2LjI4NjU2NSwyLjU2MzA1NDI1IDcxNC44MzY4Miw1LjQ3NDUzNzA0IEw2NDMuNTE0MzAyLDIwOS4wMTkwNjIgTDU3Ni40OTQwMDMsMTA1LjQzMTc4OCBDNTczLjcyMTA1OCwxMDEuMTQ1ODk1IDU2Ny4zNDI1MzksOTcuNjcxNDkxOSA1NjIuMjU1Niw5Ny42NzE0OTE5IEw1NTIuMTc5MDMzLDk3LjY3MTQ5MTkgQzU0Ny4wODgzMjYsOTcuNjcxNDkxOSA1NDEuNTI5Mzg0LDEwMS41NTg3NDkgNTM5Ljc3MDA2MSwxMDYuMzM0MTg3IEw0NTQuOTgwMDY4LDMzNi40ODQ4MzMgQzQ1My4yMTc0OSwzNDEuMjY5MTA4IDQ1NS45MjcwODYsMzQ1LjE0NzUyOSA0NjEuMDE0MTAyLDM0NS4xNDc1MjkgTDUyMi4xMzgwNjcsMzQ1LjE0NzUyOSBDNTI3LjIzMzE1LDM0NS4xNDc1MjkgNTMyLjc5MTA1NCwzNDEuMjYxNzMzIDUzNC41NTI3OTcsMzM2LjQ2NjE3MSBMNTcxLjQ3MzE0NCwyMzUuOTY2OTI0IEw2NDIuMTA4NTI4LDM0Ni4xMDc3MTIgQzY0My40ODcxNDEsMzQ4LjI1NzM2MyA2NDYuNjY3MDkyLDM1MCA2NDkuMjEyMzA3LDM1MCBMNjU5Ljk3MTQxMiwzNTAgQzY2Mi41MTYxMDgsMzUwIDY2NS4yODIwNDQsMzQ4LjA0NTA3OCA2NjYuMTQxOTgyLDM0NS42NTM5MTggTDY4My44MjcyNjEsMjk2LjQ3Nzg3MiBMNzIzLjM3NDIwNywxODcuNDQyMjExIFpcXFwiIGlkPVxcXCJQYXRoLUNvcHlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMC4xNDUyMTM0NDEsMjQ3LjA4NTEwMSBDMC4xNDUyMTM0NDEsMzA1LjIzNDA0IDQ5LjA4NzIzNzcsMzQ4Ljg0NTc0NSAxMDQuMzI4NzMsMzQ4Ljg0NTc0NSBDMTM5LjIxODA5NCwzNDguODQ1NzQ1IDE2NC40MTU5NjgsMzM1LjI3NzY1OSAxODIuMzQ1MjI0LDMwOC4xNDE0ODcgQzE4NS43MzcyNDYsMzAzLjI5NTc0MiAxODMuMzE0MzczLDI5OC40NDk5OTcgMTc4Ljk1MzIwMywyOTQuNTczNDAxIEwxNDkuODc4NzMzLDI2OS4zNzU1MjcgQzE0Ni45NzEyODYsMjY2Ljk1MjY1NSAxNDIuNjEwMTE2LDI2Ny45MjE4MDQgMTM5LjIxODA5NCwyNzEuMzEzODI1IEMxMzEuNDY0OTAyLDI3OS4wNjcwMTcgMTIzLjIyNzEzNiwyODYuMzM1NjM1IDEwNi4yNjcwMjgsMjg2LjMzNTYzNSBDODQuOTQ1NzUwNSwyODYuMzM1NjM1IDY4LjQ3MDIxNzYsMjY4Ljg5MDk1MyA2OC40NzAyMTc2LDI0Ny4wODUxMDEgQzY4LjQ3MDIxNzYsMjI1Ljc2MzgyMyA4NS45MTQ4OTk1LDIwNy44MzQ1NjYgMTA3LjIzNjE3NywyMDcuODM0NTY2IEMxMTguMzgxMzkxLDIwNy44MzQ1NjYgMTI4LjU1NzQ1NSwyMTMuMTY0ODg2IDEzNS4zNDE0OTgsMjIwLjQzMzUwMyBDMTM3Ljc2NDM3MSwyMjIuODU2Mzc2IDE0My41NzkyNjUsMjIzLjgyNTUyNSAxNDYuMDAyMTM3LDIyMS40MDI2NTIgTDE3NS4wNzY2MDcsMTkzLjc4MTkwNiBDMTc5LjQzNzc3NywxODkuOTA1MzEgMTgwLjg5MTUwMSwxODQuNTc0OTkgMTc3LjQ5OTQ4LDE4MC4yMTM4MiBDMTU5LjA4NTY0OSwxNTcuOTIzMzkzIDEzNS4zNDE0OTgsMTQ1LjMyNDQ1NiAxMDQuODEzMzA1LDE0NS4zMjQ0NTYgQzQ5LjU3MTgxMjIsMTQ1LjMyNDQ1NiAwLjE0NTIxMzQ0MSwxODkuOTA1MzEgMC4xNDUyMTM0NDEsMjQ3LjA4NTEwMSBMMC4xNDUyMTM0NDEsMjQ3LjA4NTEwMSBaIE0yMTguNjg4MzEyLDMzNC43OTMwODUgQzIxOC42ODgzMTIsMzM5LjYzODgzIDIyMy4wNDk0ODIsMzQ0IDIyNy44OTUyMjcsMzQ0IEwyODEuMTk4NDIyLDM0NCBDMjg2LjA0NDE2NywzNDQgMjkwLjQwNTMzNywzMzkuNjM4ODMgMjkwLjQwNTMzNywzMzQuNzkzMDg1IEwyOTAuNDA1MzM3LDE0LjAwNDc2NzIgQzI5MC40MDUzMzcsOS4xNTkwMjIyNiAyODYuMDQ0MTY3LDQuNzk3ODUxNzkgMjgxLjE5ODQyMiw0Ljc5Nzg1MTc5IEwyMjcuODk1MjI3LDQuNzk3ODUxNzkgQzIyMy4wNDk0ODIsNC43OTc4NTE3OSAyMTguNjg4MzEyLDkuMTU5MDIyMjYgMjE4LjY4ODMxMiwxNC4wMDQ3NjcyIEwyMTguNjg4MzEyLDMzNC43OTMwODUgWiBNMzc4LjExMzMyMSw5MS41MzY2ODY4IEMzOTkuNDM0NTk5LDkxLjUzNjY4NjggNDE2Ljg3OTI4MSw3NC41NzY1Nzk0IDQxNi44NzkyODEsNTMuMjU1MzAxNSBDNDE2Ljg3OTI4MSwzMS45MzQwMjM2IDM5OS40MzQ1OTksMTQuNDg5MzQxNyAzNzguMTEzMzIxLDE0LjQ4OTM0MTcgQzM1Ni43OTIwNDQsMTQuNDg5MzQxNyAzMzkuODMxOTM2LDMxLjkzNDAyMzYgMzM5LjgzMTkzNiw1My4yNTUzMDE1IEMzMzkuODMxOTM2LDc0LjU3NjU3OTQgMzU2Ljc5MjA0NCw5MS41MzY2ODY4IDM3OC4xMTMzMjEsOTEuNTM2Njg2OCBMMzc4LjExMzMyMSw5MS41MzY2ODY4IFogTTM0Mi43MzkzODMsMzM0Ljc5MzA4NSBDMzQyLjczOTM4MywzMzkuNjM4ODMgMzQ3LjEwMDU1NCwzNDQgMzUxLjk0NjI5OSwzNDQgTDQwNS4yNDk0OTMsMzQ0IEM0MTAuMDk1MjM4LDM0NCA0MTQuNDU2NDA5LDMzOS42Mzg4MyA0MTQuNDU2NDA5LDMzNC43OTMwODUgTDQxNC40NTY0MDksMTU5LjM3NzExNiBDNDE0LjQ1NjQwOSwxNTQuMDQ2Nzk3IDQxMC4wOTUyMzgsMTUwLjE3MDIwMSA0MDUuMjQ5NDkzLDE1MC4xNzAyMDEgTDM1MS45NDYyOTksMTUwLjE3MDIwMSBDMzQ3LjEwMDU1NCwxNTAuMTcwMjAxIDM0Mi43MzkzODMsMTU0LjA0Njc5NyAzNDIuNzM5MzgzLDE1OS4zNzcxMTYgTDM0Mi43MzkzODMsMzM0Ljc5MzA4NSBaIE04ODkuMTU0MzEsMzM0Ljc5MzA4NSBDODg5LjE1NDMxLDMzOS42Mzg4MyA4OTMuNTE1NDgxLDM0NCA4OTguMzYxMjI2LDM0NCBMOTIxLjEzNjIyNywzNDQgQzkyNS45ODE5NzIsMzQ0IDkyOS4zNzM5OTQsMzM5LjYzODgzIDkzMS4zMTIyOTIsMzM0LjMwODUxIEw5MzcuMTI3MTg1LDMxOC4zMTc1NTIgQzkzNy4xMjcxODUsMzE4LjMxNzU1MiA5NTkuNDE3NjEyLDM0OC44NDU3NDUgMTAwMi4wNjAxNywzNDguODQ1NzQ1IEMxMDU2LjgxNzA5LDM0OC44NDU3NDUgMTA5OC4wMDU5MiwzMDIuODExMTY4IDEwOTguMDA1OTIsMjQ3LjA4NTEwMSBDMTA5OC4wMDU5MiwxNzguNzYwMDk2IDEwNTMuNDI1MDYsMTQ1LjMyNDQ1NiAxMDAxLjU3NTU5LDE0NS4zMjQ0NTYgQzk4NS4xMDAwNjEsMTQ1LjMyNDQ1NiA5NjcuMTcwODA0LDE1MS4xMzkzNSA5NjEuMzU1OTEsMTU0LjUzMTM3MSBMOTYxLjM1NTkxLDE0LjAwNDc2NzIgQzk2MS4zNTU5MSw5LjE1OTAyMjI2IDk1Ni45OTQ3NCw0Ljc5Nzg1MTc5IDk1Mi4xNDg5OTUsNC43OTc4NTE3OSBMODk4LjM2MTIyNiw0Ljc5Nzg1MTc5IEM4OTMuNTE1NDgxLDQuNzk3ODUxNzkgODg5LjE1NDMxLDkuMTU5MDIyMjYgODg5LjE1NDMxLDE0LjAwNDc2NzIgTDg4OS4xNTQzMSwzMzQuNzkzMDg1IFogTTk1My42MDI3MTgsMjQ2LjYwMDUyNiBDOTUzLjYwMjcxOCwyMjQuNzk0Njc0IDk3MC4wNzgyNTEsMjA3LjgzNDU2NiA5OTIuMzY4Njc4LDIwNy44MzQ1NjYgQzEwMTQuNjU5MTEsMjA3LjgzNDU2NiAxMDMxLjYxOTIxLDIyNC43OTQ2NzQgMTAzMS42MTkyMSwyNDYuNjAwNTI2IEMxMDMxLjYxOTIxLDI2OC44OTA5NTMgMTAxNC42NTkxMSwyODYuMzM1NjM1IDk5Mi4zNjg2NzgsMjg2LjMzNTYzNSBDOTcwLjA3ODI1MSwyODYuMzM1NjM1IDk1My42MDI3MTgsMjY4Ljg5MDk1MyA5NTMuNjAyNzE4LDI0Ni42MDA1MjYgTDk1My42MDI3MTgsMjQ2LjYwMDUyNiBaIE0xMTM0LjI1NjQ1LDMyMS4yMjQ5OTkgQzExMzQuMjU2NDUsMzM2LjI0NjgwOCAxMTQ2Ljg1NTM5LDM0OC44NDU3NDUgMTE2MS44NzcyLDM0OC44NDU3NDUgQzExNzcuMzgzNTgsMzQ4Ljg0NTc0NSAxMTg5LjQ5Nzk1LDMzNi4yNDY4MDggMTE4OS40OTc5NSwzMjEuMjI0OTk5IEMxMTg5LjQ5Nzk1LDMwNS43MTg2MTUgMTE3Ny4zODM1OCwyOTMuNjA0MjUyIDExNjEuODc3MiwyOTMuNjA0MjUyIEMxMTQ2Ljg1NTM5LDI5My42MDQyNTIgMTEzNC4yNTY0NSwzMDUuNzE4NjE1IDExMzQuMjU2NDUsMzIxLjIyNDk5OSBMMTEzNC4yNTY0NSwzMjEuMjI0OTk5IFogTTEyMzYuMDE3MSwzMzIuODU0Nzg3IEMxMjQ1LjcwODU5LDM0MC42MDc5NzkgMTI2OS45MzczMSwzNDguODQ1NzQ1IDEzMDEuOTE5MjMsMzQ4Ljg0NTc0NSBDMTM1Ni42NzYxNSwzNDguODQ1NzQ1IDEzODMuODEyMzIsMzIxLjIyNDk5OSAxMzgzLjgxMjMyLDI4Ny4zMDQ3ODQgQzEzODMuODEyMzIsMjQ4LjUzODgyNCAxMzU2LjY3NjE1LDIzMy4wMzI0NCAxMzE3LjQyNTYxLDIxOS40NjQzNTQgQzEzMDAuOTUwMDgsMjEzLjY0OTQ2IDEyOTUuNjE5NzYsMjA4LjgwMzcxNSAxMjk1LjYxOTc2LDIwMy45NTc5NyBDMTI5NS42MTk3NiwxOTguNjI3NjUxIDEyOTkuOTgwOTMsMTk3LjE3MzkyNyAxMzA2LjI4MDQsMTk3LjE3MzkyNyBDMTMyNS4xNzg4LDE5Ny4xNzM5MjcgMTM0Ny40NjkyMywyMDguMzE5MTQxIDEzNDcuNDY5MjMsMjA4LjMxOTE0MSBDMTM1MS4zNDU4MywyMDkuNzcyODY0IDEzNTYuMTkxNTcsMjA4LjMxOTE0MSAxMzU3LjY0NTMsMjA1LjQxMTY5NCBMMTM3NS41NzQ1NSwxNzIuNDYwNjI4IEMxMzc4LjQ4MiwxNjcuNjE0ODgzIDEzNzUuMDg5OTgsMTYzLjI1MzcxMiAxMzcwLjcyODgxLDE2MC4zNDYyNjUgQzEzNjAuMDY4MTcsMTUzLjU2MjIyMyAxMzM2LjgwODU5LDE0NS4zMjQ0NTYgMTMwNi4yODA0LDE0NS4zMjQ0NTYgQzEyNTMuOTQ2MzUsMTQ1LjMyNDQ1NiAxMjMwLjY4Njc4LDE3MS40OTE0NzkgMTIzMC42ODY3OCwyMDMuOTU3OTcgQzEyMzAuNjg2NzgsMjM0LjAwMTU4OSAxMjQ3LjE2MjMxLDI1NS44MDc0NDEgMTI4NC45NTkxMiwyNjguODkwOTUzIEMxMzA5LjY3MjQyLDI3Ny42MTMyOTQgMTMxMi41Nzk4NywyODQuMzk3MzM3IDEzMTIuNTc5ODcsMjg5LjI0MzA4MiBDMTMxMi41Nzk4NywyOTUuMDU3OTc2IDEzMDguMjE4NywyOTcuOTY1NDIzIDEzMDMuMzcyOTUsMjk3Ljk2NTQyMyBDMTI4Mi41MzYyNSwyOTcuOTY1NDIzIDEyNTkuNzYxMjUsMjg1LjM2NjQ4NiAxMjU5Ljc2MTI1LDI4NS4zNjY0ODYgQzEyNTUuODg0NjUsMjgzLjQyODE4OCAxMjUxLjAzODkxLDI4Ni4zMzU2MzUgMTI0OS41ODUxOCwyODkuMjQzMDgyIEwxMjMyLjYyNTA4LDMyMi42Nzg3MjIgQzEyMzAuMjAyMiwzMjcuMDM5ODkzIDEyMzIuNjI1MDgsMzI5Ljk0NzM0IDEyMzYuMDE3MSwzMzIuODU0Nzg3IEwxMjM2LjAxNzEsMzMyLjg1NDc4NyBaIE0xNDA3LjU1NjQ3LDI0Ni42MDA1MjYgQzE0MDcuNTU2NDcsMzAyLjMyNjU5MyAxNDUzLjEwNjQ3LDM0OC44NDU3NDUgMTUwOC4zNDc5NiwzNDguODQ1NzQ1IEMxNTYzLjU4OTQ2LDM0OC44NDU3NDUgMTYwOS4xMzk0NiwzMDIuMzI2NTkzIDE2MDkuMTM5NDYsMjQ2LjYwMDUyNiBDMTYwOS4xMzk0NiwxOTEuODQzNjA4IDE1NjMuNTg5NDYsMTQ1LjMyNDQ1NiAxNTA4LjM0Nzk2LDE0NS4zMjQ0NTYgQzE0NTMuMTA2NDcsMTQ1LjMyNDQ1NiAxNDA3LjU1NjQ3LDE5MS44NDM2MDggMTQwNy41NTY0NywyNDYuNjAwNTI2IEwxNDA3LjU1NjQ3LDI0Ni42MDA1MjYgWiBNMTQ3MC4wNjY1OCwyNDYuNjAwNTI2IEMxNDcwLjA2NjU4LDIyNS4yNzkyNDggMTQ4Ny4wMjY2OSwyMDcuODM0NTY2IDE1MDguMzQ3OTYsMjA3LjgzNDU2NiBDMTUyOS42NjkyNCwyMDcuODM0NTY2IDE1NDYuNjI5MzUsMjI1LjI3OTI0OCAxNTQ2LjYyOTM1LDI0Ni42MDA1MjYgQzE1NDYuNjI5MzUsMjY4LjQwNjM3OCAxNTI5LjY2OTI0LDI4Ni4zMzU2MzUgMTUwOC4zNDc5NiwyODYuMzM1NjM1IEMxNDg3LjAyNjY5LDI4Ni4zMzU2MzUgMTQ3MC4wNjY1OCwyNjguNDA2Mzc4IDE0NzAuMDY2NTgsMjQ2LjYwMDUyNiBMMTQ3MC4wNjY1OCwyNDYuNjAwNTI2IFogTTE2MzEuNDI5ODksMjQ3LjA4NTEwMSBDMTYzMS40Mjk4OSwzMDUuMjM0MDQgMTY4MC4zNzE5MSwzNDguODQ1NzQ1IDE3MzUuNjEzNCwzNDguODQ1NzQ1IEMxNzcwLjUwMjc3LDM0OC44NDU3NDUgMTc5NS43MDA2NCwzMzUuMjc3NjU5IDE4MTMuNjI5OSwzMDguMTQxNDg3IEMxODE3LjAyMTkyLDMwMy4yOTU3NDIgMTgxNC41OTkwNSwyOTguNDQ5OTk3IDE4MTAuMjM3ODgsMjk0LjU3MzQwMSBMMTc4MS4xNjM0MSwyNjkuMzc1NTI3IEMxNzc4LjI1NTk2LDI2Ni45NTI2NTUgMTc3My44OTQ3OSwyNjcuOTIxODA0IDE3NzAuNTAyNzcsMjcxLjMxMzgyNSBDMTc2Mi43NDk1OCwyNzkuMDY3MDE3IDE3NTQuNTExODEsMjg2LjMzNTYzNSAxNzM3LjU1MTcsMjg2LjMzNTYzNSBDMTcxNi4yMzA0MiwyODYuMzM1NjM1IDE2OTkuNzU0ODksMjY4Ljg5MDk1MyAxNjk5Ljc1NDg5LDI0Ny4wODUxMDEgQzE2OTkuNzU0ODksMjI1Ljc2MzgyMyAxNzE3LjE5OTU3LDIwNy44MzQ1NjYgMTczOC41MjA4NSwyMDcuODM0NTY2IEMxNzQ5LjY2NjA2LDIwNy44MzQ1NjYgMTc1OS44NDIxMywyMTMuMTY0ODg2IDE3NjYuNjI2MTcsMjIwLjQzMzUwMyBDMTc2OS4wNDkwNCwyMjIuODU2Mzc2IDE3NzQuODYzOTQsMjIzLjgyNTUyNSAxNzc3LjI4NjgxLDIyMS40MDI2NTIgTDE4MDYuMzYxMjgsMTkzLjc4MTkwNiBDMTgxMC43MjI0NSwxODkuOTA1MzEgMTgxMi4xNzYxNywxODQuNTc0OTkgMTgwOC43ODQxNSwxODAuMjEzODIgQzE3OTAuMzcwMzIsMTU3LjkyMzM5MyAxNzY2LjYyNjE3LDE0NS4zMjQ0NTYgMTczNi4wOTc5OCwxNDUuMzI0NDU2IEMxNjgwLjg1NjQ5LDE0NS4zMjQ0NTYgMTYzMS40Mjk4OSwxODkuOTA1MzEgMTYzMS40Mjk4OSwyNDcuMDg1MTAxIEwxNjMxLjQyOTg5LDI0Ny4wODUxMDEgWiBNMTg4NS4zNDY5Miw5MS41MzY2ODY4IEMxOTA2LjY2ODIsOTEuNTM2Njg2OCAxOTI0LjExMjg4LDc0LjU3NjU3OTQgMTkyNC4xMTI4OCw1My4yNTUzMDE1IEMxOTI0LjExMjg4LDMxLjkzNDAyMzYgMTkwNi42NjgyLDE0LjQ4OTM0MTcgMTg4NS4zNDY5MiwxNC40ODkzNDE3IEMxODY0LjAyNTY1LDE0LjQ4OTM0MTcgMTg0Ny4wNjU1NCwzMS45MzQwMjM2IDE4NDcuMDY1NTQsNTMuMjU1MzAxNSBDMTg0Ny4wNjU1NCw3NC41NzY1Nzk0IDE4NjQuMDI1NjUsOTEuNTM2Njg2OCAxODg1LjM0NjkyLDkxLjUzNjY4NjggTDE4ODUuMzQ2OTIsOTEuNTM2Njg2OCBaIE0xODQ5Ljk3Mjk5LDMzNC43OTMwODUgQzE4NDkuOTcyOTksMzM5LjYzODgzIDE4NTQuMzM0MTYsMzQ0IDE4NTkuMTc5OSwzNDQgTDE5MTIuNDgzMSwzNDQgQzE5MTcuMzI4ODQsMzQ0IDE5MjEuNjkwMDEsMzM5LjYzODgzIDE5MjEuNjkwMDEsMzM0Ljc5MzA4NSBMMTkyMS42OTAwMSwxNTkuMzc3MTE2IEMxOTIxLjY5MDAxLDE1NC4wNDY3OTcgMTkxNy4zMjg4NCwxNTAuMTcwMjAxIDE5MTIuNDgzMSwxNTAuMTcwMjAxIEwxODU5LjE3OTksMTUwLjE3MDIwMSBDMTg1NC4zMzQxNiwxNTAuMTcwMjAxIDE4NDkuOTcyOTksMTU0LjA0Njc5NyAxODQ5Ljk3Mjk5LDE1OS4zNzcxMTYgTDE4NDkuOTcyOTksMzM0Ljc5MzA4NSBaIE0xOTYwLjk0MDU1LDI4NC44ODE5MTEgQzE5NjAuOTQwNTUsMzIzLjE2MzI5NyAxOTg5LjUzMDQ0LDM0OC44NDU3NDUgMjAyNy44MTE4MywzNDguODQ1NzQ1IEMyMDU4LjM0MDAyLDM0OC44NDU3NDUgMjA3NS4zMDAxMywzMzQuNzkzMDg1IDIwODYuNDQ1MzQsMzI0LjYxNzAyIEwyMDkzLjIyOTM4LDMzNy43MDA1MzIgQzIwOTUuNjUyMjYsMzQzLjAzMDg1MSAyMDk5LjA0NDI4LDM0NCAyMTAxLjk1MTcyLDM0NCBMMjEyMy4yNzMsMzQ0IEMyMTI4LjExODc1LDM0NCAyMTMyLjQ3OTkyLDMzOS42Mzg4MyAyMTMyLjQ3OTkyLDMzNC43OTMwODUgTDIxMzIuNDc5OTIsMjI3LjcwMjEyMSBDMjEzMi40Nzk5MiwxNzAuNTIyMzMgMjExMC42NzQwNywxNDUuMzI0NDU2IDIwNTAuNTg2ODMsMTQ1LjMyNDQ1NiBDMjAyNC40MTk4LDE0NS4zMjQ0NTYgMTk5MC40OTk1OSwxNTEuMTM5MzUgMTk4Ni4xMzg0MiwxNTIuNTkzMDc0IEMxOTgxLjc3NzI1LDE1NC4wNDY3OTcgMTk3Ny40MTYwOCwxNTcuNDM4ODE4IDE5NzguODY5OCwxNjUuNjc2NTg1IEwxOTgzLjIzMDk3LDE5Ni4yMDQ3NzggQzE5ODQuMjAwMTIsMjAzLjQ3MzM5NiAxOTg3LjU5MjE0LDIwOC44MDM3MTUgMTk5NC44NjA3NiwyMDYuMzgwODQzIEMyMDA3LjQ1OTcsMjAyLjUwNDI0NyAyMDMwLjIzNDcsMTk5LjExMjIyNSAyMDQzLjMxODIxLDE5OS4xMTIyMjUgQzIwNjYuNTc3NzksMTk5LjExMjIyNSAyMDY5LjQ4NTIzLDIwOC44MDM3MTUgMjA2OS40ODUyMywyMjcuNzAyMTIxIEMyMDY5LjQ4NTIzLDIyNy43MDIxMjEgMjA1My45Nzg4NSwyMTkuOTQ4OTI5IDIwMzIuMTczLDIxOS45NDg5MjkgQzE5ODguMDc2NzIsMjE5Ljk0ODkyOSAxOTYwLjk0MDU1LDI0Ny41Njk2NzUgMTk2MC45NDA1NSwyODQuODgxOTExIEwxOTYwLjk0MDU1LDI4NC44ODE5MTEgWiBNMjAyMy45MzUyMywyODAuMDM2MTY2IEMyMDIzLjkzNTIzLDI2OC44OTA5NTMgMjAzMy4xNDIxNSwyNTkuNjg0MDM3IDIwNDQuNzcxOTMsMjU5LjY4NDAzNyBDMjA1Ni40MDE3MiwyNTkuNjg0MDM3IDIwNjUuNjA4NjQsMjY4Ljg5MDk1MyAyMDY2LjA5MzIxLDI4MC4wMzYxNjYgQzIwNjYuMDkzMjEsMjkxLjY2NTk1NCAyMDU2LjQwMTcyLDMwMS4zNTc0NDQgMjA0NC43NzE5MywzMDEuMzU3NDQ0IEMyMDMzLjE0MjE1LDMwMS4zNTc0NDQgMjAyMy45MzUyMywyOTEuNjY1OTU0IDIwMjMuOTM1MjMsMjgwLjAzNjE2NiBMMjAyMy45MzUyMywyODAuMDM2MTY2IFogTTIxODEuOTA2NTIsMzM0Ljc5MzA4NSBDMjE4MS45MDY1MiwzMzkuNjM4ODMgMjE4Ni4yNjc2OSwzNDQgMjE5MS4xMTM0MywzNDQgTDIyNDQuNDE2NjMsMzQ0IEMyMjQ5LjI2MjM3LDM0NCAyMjUzLjYyMzU0LDMzOS42Mzg4MyAyMjUzLjYyMzU0LDMzNC43OTMwODUgTDIyNTMuNjIzNTQsMTQuMDA0NzY3MiBDMjI1My42MjM1NCw5LjE1OTAyMjI2IDIyNDkuMjYyMzcsNC43OTc4NTE3OSAyMjQ0LjQxNjYzLDQuNzk3ODUxNzkgTDIxOTEuMTEzNDMsNC43OTc4NTE3OSBDMjE4Ni4yNjc2OSw0Ljc5Nzg1MTc5IDIxODEuOTA2NTIsOS4xNTkwMjIyNiAyMTgxLjkwNjUyLDE0LjAwNDc2NzIgTDIxODEuOTA2NTIsMzM0Ljc5MzA4NSBaXFxcIiBpZD1cXFwiY2xpLS0tLWIuc29jaWFsXFxcIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbWcvY2xpbWJfbG9nby5zdmdcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGltYiBmcm9tICdjbGltYi1zb2NpYWwnO1xuaW1wb3J0IFNsaWRlc2hvdyBmcm9tICcuL1NsaWRlc2hvdyc7XG5cblxuY2xhc3MgU2xpZGVzaG93Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaXRlbXM6IHt9XG4gICAgfTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNvbGxlY3Rpb25JZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGNvbGxlY3Rpb25JZDogJzU2MWJhNjM0NDUyODRlMTc0MGUwMTZmNydcbiAgICB9O1xuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICBpZiAoIXRoaXMucHJvcHMuY29sbGVjdGlvbklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjbGltYlxuICAgICAgICAgICAgLmdldFN0cmVhbSh0aGlzLnByb3BzLmNvbGxlY3Rpb25JZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoaXRlbXMgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkSXRlbXMgPSB7fTtcbiAgICAgICAgICAgICAgICBpdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zW2l0ZW0uaWRdID0gaXRlbTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogbWFwcGVkSXRlbXNcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTbGlkZXNob3cgaXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvd0NvbnRhaW5lcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9lc2xpbnQtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvc2xpZGVzaG93L1NsaWRlc2hvd0NvbnRhaW5lci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFByb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlIGZyb20gJy4vc2xpZGUnO1xuXG5cbmNsYXNzIFNsaWRlc2hvdyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGN1cnJlbnRJdGVtSW5kZXg6IDBcbiAgICB9O1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaXRlbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZGVsYXk6IDNcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHtkZWxheX0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5uZXh0U2xpZGUuYmluZCh0aGlzKSwgZGVsYXkgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBuZXh0U2xpZGUoKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlc2hvd0xlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMuaXRlbXMpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzbGlkZXNob3dMZW5ndGgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtSW5kZXg6IG5ld0luZGV4XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLml0ZW1zKVt0aGlzLnN0YXRlLmN1cnJlbnRJdGVtSW5kZXhdO1xuXG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnByb3BzLml0ZW1zW2tleV07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNsaWRlIGtleT17a2V5fSBpdGVtPXtpdGVtfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXNob3c7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vZXNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3NsaWRlc2hvdy9TbGlkZXNob3cuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbW1vbi9NZXNzYWdlJztcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21tb24vSW1hZ2UnO1xuXG5cbmNsYXNzIFNsaWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpdGVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY3JlYXRlSW1hZ2UoKSB7XG5cbiAgICAgICAgY29uc3Qge2ltYWdlfSA9IHRoaXMucHJvcHMuaXRlbTtcblxuICAgICAgICBpZiAoaW1hZ2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHt1cmw6IHNyYywgd2lkdGgsIGhlaWdodH0gPSBpbWFnZTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17IHNyYyB9XG4gICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsgd2lkdGggfVxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9eyBoZWlnaHQgfS8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7aXRlbX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuY3JlYXRlSW1hZ2UoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGltYi1zbGlkZXNob3dfX3NsaWRlXCI+XG4gICAgICAgICAgICAgICAge2ltYWdlfVxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGJvZHk9eyBpdGVtLm1lc3NhZ2UgfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2VzbGludC1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGUuanN4XG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz9icm93c2Vycz1sYXN0IDIgdmVyc2lvbiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcz9icm93c2Vycz1sYXN0IDIgdmVyc2lvbiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzP2Jyb3dzZXJzPWxhc3QgMiB2ZXJzaW9uIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlL21haW4uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jbGltYl9fd2FsbCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LXNpemU6IDEwMCU7IH1cXG5cXG4uY2xpbWJfX3RpbGUge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMDtcXG4gICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDQyNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDsgfVxcblxcbi5jbGltYl9fdGlsZV9fY29udGVudCB7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMjZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7IH1cXG4gIC5jbGltYl9fdGlsZS0taGFzLW5vLWltYWdlIC5jbGltYl9fdGlsZV9fY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5jbGltYl9faW1hZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG4gIC5jbGltYl9fdGlsZSAuY2xpbWJfX2ltYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDsgfVxcblxcbi5jbGltYl9fdGlsZV9fbWVzc2FnZSB7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcbiAgLmNsaW1iX190aWxlX19tZXNzYWdlID4gYSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtYXgtd2lkdGg6IDI2MHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cXG4gIC5jbGltYl9fdGlsZS0taGFzLW5vLWltYWdlIC5jbGltYl9fdGlsZV9fbWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMTg1JTsgfVxcblxcbi5jbGltYl9fdGlsZV9fYXV0aG9yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAtMTBweDsgfVxcbiAgLmNsaW1iX190aWxlX19hdXRob3IgaW1nIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgd2lkdGg6IDM0cHg7IH1cXG4gIC5jbGltYl9fdGlsZV9fYXV0aG9yIC5jbGltYl9fdGlsZV9fYXV0aG9yX191c2VybmFtZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzRweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxcblxcbi5jbGltYi1zb2NpYWwtYmFkZ2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICB6LWluZGV4OiA5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E5Q0FFMjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNjZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgLmNsaW1iLXNvY2lhbC1iYWRnZSA+IHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcXG4gICAgdG9wOiAtOTk5OXB4ICFpbXBvcnRhbnQ7XFxuICAgIGxlZnQ6IC05OTk5cHggIWltcG9ydGFudDsgfVxcblxcbi5jbGltYi1zbGlkZXNob3cge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmNsaW1iLXNsaWRlc2hvd19fc2xpZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vYXV0b3ByZWZpeGVyLWxvYWRlcj9icm93c2Vycz1sYXN0IDIgdmVyc2lvbiEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGUvbWFpbi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQoKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KCkge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRoZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=