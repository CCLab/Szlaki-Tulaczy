/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var browser = __webpack_require__(6);
var emitter = __webpack_require__(1);
var eventQueue = __webpack_require__(3);
var file = __webpack_require__(7);
var loadIcons = __webpack_require__(13);
var normalise = __webpack_require__(14);
var onResize = __webpack_require__(15);
var utils = __webpack_require__(2);

module.exports = {
    browser: browser.browser,

    Emitter: emitter.Emitter,

    eventQueue,

    loadFile: file.loadFile,
    dataUrlToBlob: file.dataUrlToBlob,

    loadIcons: loadIcons.loadIcons,

    normalise,

    onResize,

    getEl: utils.getEl,
    getEls: utils.getEls,
    getViewportDimensions: utils.getViewportDimensions,
    debounce: utils.debounce,
    extend: utils.extend,
    isObject: utils.isObject,
    deepObjectExtend: utils.deepObjectExtend,
    forEach: utils.forEach,
    filter: utils.filter,
    indexOf: utils.indexOf,
    insertAfter: utils.insertAfter,
    render: utils.render,
    random: utils.random,
    getParent: utils.getParent,
    getClosest: utils.getClosest,
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
// source https://github.com/JFusco/es6-event-emitter/
const emitter = new WeakMap();

class Emitter {
	constructor(){
		emitter.set(this, {
			events: {}
		});

		this.eventLength = 0;
	}

	on(event, cb){

		if(typeof cb === 'undefined') {
			throw new Error('You must provide a callback method.');
		}

		if(typeof cb !== 'function') {
			throw new TypeError('Listener must be a function');
		}

		this.events[event] = this.events[event] || [];
		this.events[event].push(cb);

		this.eventLength++;

		return this;
	}

	off(event, cb){
		if(typeof cb === 'undefined') {
			throw new Error('You must provide a callback method.');
		}

		if(typeof cb !== 'function') {
			throw new TypeError('Listener must be a function');
		}

		if(typeof this.events[event] === 'undefined'){
			throw new Error(`Event not found - the event you provided is: ${event}`);
		}

		const listeners = this.events[event];

		listeners.forEach((v, i) => {
			if(v === cb) {
				listeners.splice(i, 1);
			}
		});

		if(listeners.length === 0){
			delete this.events[event];

			this.eventLength--;
		}

		return this;
	}

	trigger(event, ...args){
		if(typeof event === 'undefined'){
			throw new Error('You must provide an event to trigger.');
		}

		let listeners = this.events[event];

		if(typeof listeners !== 'undefined') {
			listeners = listeners.slice(0);


			listeners.forEach((v) => {
				v.apply(this, args);
			});
		}

		return this;
	}

	get events(){
		return emitter.get(this).events;
	}
}


/* harmony default export */ __webpack_exports__["default"] = (Emitter);	


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getEl"] = getEl;
/* harmony export (immutable) */ __webpack_exports__["getEls"] = getEls;
/* harmony export (immutable) */ __webpack_exports__["getViewportDimensions"] = getViewportDimensions;
/* harmony export (immutable) */ __webpack_exports__["debounce"] = debounce;
/* harmony export (immutable) */ __webpack_exports__["extend"] = extend;
/* harmony export (immutable) */ __webpack_exports__["isObject"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["deepObjectExtend"] = deepObjectExtend;
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;
/* harmony export (immutable) */ __webpack_exports__["filter"] = filter;
/* harmony export (immutable) */ __webpack_exports__["indexOf"] = indexOf;
/* harmony export (immutable) */ __webpack_exports__["insertAfter"] = insertAfter;
/* harmony export (immutable) */ __webpack_exports__["render"] = render;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["getParent"] = getParent;
/* harmony export (immutable) */ __webpack_exports__["getClosest"] = getClosest;
/**
 * A shorthand function to get elements whether a single dom element is passed or a string is passed
 * @param  {string or DOMElement} el
 * @param  {DOMElement under which we will look for elements} context
 * @return {DOMElement} A single element returned by our query
 */
function getEl(el, context = document){

    if (typeof el === 'string'){
        if(el.indexOf('#') == 0 && el.indexOf(' ') <= 0 ){
            return document.getElementById(el.substr(1));
        }else{
            return context.querySelector(el);
        }
    } else if (el instanceof HTMLElement){
        return el;
    } else {
        console.log('passed el is not HTML Element');
        return;
    }
}

/**
 * A shorthand function to get elements whether a single dom element is passed or a string is passed
 * @param  {string} el
 * @param  {DOMElement under which we will look for elements} context
 * @return {DOMElement} Iterable elements returned by our query
 */
function getEls(el, context = document){

    if (typeof el === 'string'){
        if( el.indexOf('.') == 0 && el.indexOf(' ') <= 0 ){
            return context.getElementsByClassName(el.substr(1));
        }else{
            return context.querySelectorAll(el);
        }
    }
}

/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
 */
function getViewportDimensions() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = g.clientWidth,
        y = e.clientHeight ;
    return {
        width: x,
        height: y
    }
}


/**
 * event throttling
 * @param  {Object} ) { var timers [description]
 * @return {void}
 */
function debounce (func, wait, immediate) {
     var timeout;
     return function() {
         var context = this, args = arguments;
         var later = function() {
                 timeout = null;
                 if (!immediate) func.apply(context, args);
         };
         var callNow = immediate && !timeout;
         clearTimeout(timeout);
         timeout = setTimeout(later, wait);
         if (callNow) func.apply(context, args);
     };
};

/**
 * Merge defaults with user options
 * @param {Object} defaults Default settings
 * @param {Object} options User options
 * @returns {Object} Merged values of defaults and options
 */
function extend( defaults, options ) {
    // ES6
    if (typeof Object.assign === 'function'){
        return Object.assign({},defaults,options);
    // ES5
    }else{
        var extended = {};
        var prop;
        for (prop in defaults) {
            if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
                extended[prop] = defaults[prop];
            }
        }
        for (prop in options) {
            if (Object.prototype.hasOwnProperty.call(options, prop)) {
                extended[prop] = options[prop];
            }
        }
        return extended;
    }
};
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function deepObjectExtend(target, source) {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = deepObjectExtend(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

/**
 * implements foreach for given iterable
 * @param  {iterable} arr      any iterable object
 * @return {undefined}
 */
function forEach(arr, funct){
    Array.prototype.forEach.call(arr, function(a,b){
        funct(a,b);
    });
}

/**
 * implements foreach for given iterable object/array
 * @param  {iterable} arr any iterable object
 * @return {[type]}            [description]
 */
function filter( arr, funct ) {

	return Array.prototype.filter.call(arr, function( a, b ) {

		return funct( a, b );

	} );

}

/**
 * implements indexOf for given iterable object/array
 * @param  {iterable} arr any iterable object
 * @return {[type]}            [description]
 */
function indexOf(arr) {
    Array.prototype.indexOf.call(arr);
}

/**
 * inserts element after specified element
 * @param  {Node} newNode         the node we want added after referenceNode
 * @param  {Node} referenceNode   the node after which we add newNode
 * @return {Node}                 the new node (in different context?)
 */
function insertAfter(newNode, referenceNode) {
   return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



function render(string){

    const wrap = document.createElement('div');
    wrap.innerHTML = string;
    return wrap.children[0];

}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Travers up the node's parents and get first element
 * that matches the selector query
 * @param  {string} selector     CSS type selector
 * @param  {DOMElement} el       A base Element
 * @return {DOMElement}          Parent Element
 */
function getParent( selector, el ) {

	while ( ( el = el.parentElement ) && !( ( el.matches || el.matchesSelector ).call( el, selector ) ) );
	return el;

}

/*! getClosest.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/getClosest */
/**
 * Get the closest parent element that matches a selector.
 * @param  {Element} elem     Starting element
 * @param  {String}  selector Selector to match against
 * @return {Boolean|Element}  Returns null if not match found
 */
function getClosest(elem, selector) {
   // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }

    return null;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class EventQueue {

	constructor(){
		this.queue = [];
	}
  	add(callback){
  		this.queue.push(callback);
  	}
  	run(data){
		this.queue.forEach((callback)=>{
			if (typeof callback === 'function') callback(data);
		});
  	}

}
/* harmony export (immutable) */ __webpack_exports__["default"] = EventQueue;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _emitter = __webpack_require__(1);

window.eventBus = new _emitter.Emitter();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sutils = __webpack_require__(0);

eventBus.on('audio:register', function () {
    (0, _sutils.forEach)((0, _sutils.getEls)('.audio'), function (el) {
        el.onclick = onAudioClick;
        var audio = (0, _sutils.getEl)('audio', el);
        audio.play().then(function () {
            audio.pause();
            (0, _sutils.getEl)('.audio--duration', el).innerText = getDurationString(audio.duration);
        });
        el.addEventListener("timeupdate", function (e) {
            var s = Math.round(e.target.currentTime);
            (0, _sutils.getEl)('.audio--time', this).innerText = getDurationString(s);
        }, true);
    });
});

function getDurationString(duration) {
    var sec = Math.round(duration);
    var min = sec >= 60 ? ~~(sec / 60) + '\' ' : '';

    return '[' + min + sec % 60 + '"]';
}

function onAudioClick(e) {
    var audio = (0, _sutils.getEl)('audio', this);
    if (e.target.classList.contains('svg-icon')) {
        playAudio(this, audio);
    }
    if (e.target.classList.contains('audio--stop')) {
        stopAudio(this, audio);
    }
}

function playAudio(audioContainer, audio) {

    audioContainer.classList.toggle('audio__playing');

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function stopAudio(audioContainer, audio) {

    if (!audio.paused) {
        audio.currentTime = 0;
        audio.pause();
        audioContainer.classList.remove('audio__playing');
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return browser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emitter__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);



class Browser extends __WEBPACK_IMPORTED_MODULE_0__emitter__["default"] {

	constructor(){

		super();

      this.resizeHandler = __WEBPACK_IMPORTED_MODULE_1__utils__["debounce"]( this.resizeHandler.bind(this), 200);

      this.scrollHandler = __WEBPACK_IMPORTED_MODULE_1__utils__["debounce"]( this.scrollHandler.bind( this ), 80, false );
      this.mouseWheelHandler = __WEBPACK_IMPORTED_MODULE_1__utils__["debounce"]( this.mouseWheelHandler.bind(this), 100, true) ;
``
      this.initEvents();

  }

  initEvents(){

    this.resizeThrottleTime = 200;

    window.addEventListener('resize', this.resizeHandler );
    window.addEventListener('load', this.loadHandler.bind(this) );
    document.addEventListener('DOMContentLoaded', this.readyHandler.bind(this));

    window.addEventListener('scroll', this.scrollHandler );
    window.addEventListener('mouseWheel', this.mouseWheelHandler );
    window.addEventListener('wheel', this.mouseWheelHandler);

    document.addEventListener('touchstart', this.touchStartHandler.bind(this) );
    document.addEventListener('touchmove', this.touchMoveHandler.bind(this) );

  }

  get height(){
    return __WEBPACK_IMPORTED_MODULE_1__utils__["getViewportDimensions"]().height;
  }
  get width(){
    return __WEBPACK_IMPORTED_MODULE_1__utils__["getViewportDimensions"]().width;
  }

  resizeHandler(){

    let vw = __WEBPACK_IMPORTED_MODULE_1__utils__["getViewportDimensions"]();

    this.trigger('browser:resize', {
      width: vw.width,
      height: vw.height
    });

  }

  readyHandler(){
    this.trigger('browser:ready');
  }

  loadHandler(){
    this.trigger('browser:load');
  }

  scrollHandler(){
    this.trigger('browser:scroll');
  }

 mouseWheelHandler(e){

    const direction = (e.detail<0 || e.wheelDelta>0) > 0 ? 'up':'down';

    this.trigger('browser:mouseWheel', {
      direction:direction,
      e:e
    });

  }

  touchStartHandler(e){
    this.xDown = e.touches[0].clientX;                                      
    this.yDown = e.touches[0].clientY;    
  }

  touchMoveHandler(e){

    // e.preventDefault();

    if ( ! this.xDown || ! this.yDown ) {
      return;
    }

    var xUp = e.touches[0].clientX;                                    
    var yUp = e.touches[0].clientY;

    var xDiff = this.xDown - xUp;
    var yDiff = this.yDown - yUp;

    if ( yDiff > 0 ) {
    /* up swipe */
      this.trigger('browser:swipe',{
        direction:'up'
      })
    } else if ( yDiff < 0 ) {
      this.trigger('browser:swipe',{
        direction:'down'
      })
    /* down swipe */
    } else if ( xDiff > 0 ) {
      this.trigger('browser:swipe',{
        direction:'left'
      })
    /* left swipe */
    } else if ( xDiff < 0 ) {
      this.trigger('browser:swipe',{
        direction:'right'
      })
    /* right swipe */
    }                                                                

    /* reset values */
    this.xDown = null;
    this.yDown = null;                       
  }
	
}

const browser = new Browser();




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony export (immutable) */ __webpack_exports__["loadFile"] = loadFile;
/* harmony export (immutable) */ __webpack_exports__["dataUrlToBlob"] = dataUrlToBlob;

function loadFile( file ) {

	const fr = new FileReader();

	return new Promise( resolve => {

		fr.readAsDataURL( file );

		fr.addEventListener( 'load', ( e ) => {

			const rawImage = e.target.result;
			const image = new Image();

			image.addEventListener( 'load', () => {

				resolve( image );

			} );

			image.src = rawImage;

		} );

	} );

}

/**
 * @param  {dataUrl} dataUrl
 * @return {Blob} a Blob containing the data to Save
 */
function dataUrlToBlob(dataUrl){
    
    var arr = dataUrl.split(','), 
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    
    while(n--){
            u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], {type:mime});

}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9).Promise;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  return function () {
    vertxNext(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(12);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

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

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

polyfill();
// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(11)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
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
    var timeout = runTimeout(cleanUpNextTick);
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
    runClearTimeout(timeout);
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
        runTimeout(drainQueue);
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["loadIcons"] = loadIcons;
/**
 *  Load Icons ASYNC
 */
function loadIcons(cb) {
    var siteUrl = superskrypt.assetsUrl;
    var svgurl = siteUrl + '/svg/icons.svg';
    console.log( svgurl );
    var c = new XMLHttpRequest();
    c.open('GET', svgurl, true);
    c.setRequestHeader('Content-Type', 'text/xml');
    c.send();

    c.onreadystatechange = function(){
        if (c.readyState==4 && c.status==200){
            var svg = c.responseXML.getElementsByTagName('svg')[0];
            svg.style.position = 'absolute';
            svg.style.marginLeft = '-100%';
            document.body.insertBefore(svg, document.body.firstChild);
            if (typeof cb === "function"){
                cb();
            }
        }
    }
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = normalise;
function normalise(value, type){
	switch(type){
		case 'tel':

			// first let's replace signs and spaces;
			let val = value.replace(/-|\(|\)|\s/g, '');

			// then let's normalise country code (remove it in this case)
			if (val.indexOf('00') == 0) val = val.replace('00','');
			if (val.indexOf('0') == 0) val = val.replace('0','');
			if (val.indexOf('+48') == 0) val = val.replace('+48','');

			return val;
		default:
			return value;
	}
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventQueue__ = __webpack_require__(3);



class onResize extends __WEBPACK_IMPORTED_MODULE_1__eventQueue__["default"] {

  constructor(){

    super();
    this.throttleTime = 200;

    this.listener();

  }

  listener(){

    window.addEventListener('resize', () => {

      // throttle the events
      __WEBPACK_IMPORTED_MODULE_0__utils__["debounce"]( () => {

        this.run();

      }, this.throttleTime, "resizerFunc"); 

    });


  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = onResize;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.activatePhase = activatePhase;
exports.animateMap = animateMap;

var _sutils = __webpack_require__(0);

(0, _sutils.forEach)((0, _sutils.getEls)('.phases--phase'), function (el) {
    return el.onclick = onPhaseClick;
});

function onPhaseClick() {
    var phase = this.dataset.phase;
    var oldActivePhase = getActivePhase();
    if (!oldActivePhase || oldActivePhase.dataset.phase != phase) {
        activatePhase(phase);
    }
}

function activatePhase(phase) {
    var delayPlaceAnimation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    setTimeout(function () {
        (0, _sutils.forEach)((0, _sutils.getEls)('.phases--phase'), function (el) {
            return el.classList.remove('active');
        });
        (0, _sutils.getEl)('.phases--phase[data-phase=\'' + phase + '\']').classList.add('active');

        showPoints(phase);
        showDashboard(phase);

        // FIXME
        (0, _sutils.getEl)('.details').classList.remove('active');
        (0, _sutils.getEl)('.details').dataset.active = '';
        var mapPlaceActive = (0, _sutils.getEl)('.map--place__active');
        if (mapPlaceActive) mapPlaceActive.classList.remove('map--place__active');
        setTimeout(function () {
            return history.replaceState(null, "", '#' + getActivePhase().dataset.phaseName);
        }, 100);
    }, delayPlaceAnimation);
    animateMap(phase);
}

function showDashboard(phase) {
    (0, _sutils.forEach)((0, _sutils.getEls)('.dashboard--phase'), function (el) {
        el.classList.remove('active');
    });

    (0, _sutils.getEl)('.dashboard--phase[data-phase=\'' + phase + '\']').classList.add('active');
}

function showPoints(phase) {
    (0, _sutils.forEach)((0, _sutils.getEls)('.map--phase'), function (el) {
        el.classList.remove('activeExit');
        el.classList.remove('activeEntry');
    });

    (0, _sutils.getEl)('.map--phase[data-phase=\'' + (phase - 1) + '\']').classList.add('activeExit');
    (0, _sutils.getEl)('.map--phase[data-phase=\'' + phase + '\']').classList.add('activeEntry');
}

function animateMap(phase) {
    switch (phase) {
        case '0':
            var scale = getScale(5000, 1500);
            var center = { x: -10, y: 0 };
            break;
        case '2':
            var scale = getScale(800, 300);
            var center = { x: -35, y: -30 };
            break;
        case '3':
            var scale = getScale(1000, 500);
            var center = { x: -28, y: -27 };
            break;
        case '4':
            var scale = getScale(650, 400);
            var center = { x: -28, y: -15 };
            break;
        case '5':
            var scale = getScale(5000, 1500);
            var center = { x: -13, y: 0 };
            break;
    }

    var map = (0, _sutils.getEl)('.map');
    map.style.transform = 'scale(' + scale + ') translate(' + (-50 - center.x) + '%, ' + (-50 - center.y) + '%)';
    map.style.fontSize = 'calc(1em / ' + scale + ')';
}

function getScale(visibleW, visibleH) {
    var scaleX = window.innerWidth / visibleW;
    var scaleY = window.innerHeight / visibleH;

    return Math.min(scaleX, scaleY);
}

window.addEventListener("resize", onResize);

function onResize() {
    var activePhase = getActivePhase();
    if (activePhase) animateMap(activePhase.dataset.phase);
}

function getActivePhase() {
    return (0, _sutils.getEl)('.phases--phase.active');
}

function createPaths() {
    createPathsForPhase(2);
    createPathsForPhase(3);
    createPathsForPhase(4);
    createPathsForPhase(5);
}
function createPathsForPhase(phase) {
    var froms = (0, _sutils.getEls)('.map--phase[data-phase=\'' + (phase - 1) + '\'] .map--place');
    var tos = (0, _sutils.getEls)('.map--phase[data-phase=\'' + phase + '\'] .map--place');
    (0, _sutils.forEach)(froms, createPathsForExit(tos));
}
function createPathsForExit(tos) {
    return function (from) {
        (0, _sutils.forEach)(tos, function (to) {
            from.appendChild(createPathElement(from, to));
        });
    };
}
function createPathElement(from, to) {
    var path = document.createElement('div');
    path.classList.add('map--path');

    var offsetTop = to.offsetTop - from.offsetTop;
    var offsetLeft = to.offsetLeft - from.offsetLeft;
    var deg = Math.atan2(offsetTop, offsetLeft) * 180 / Math.PI;
    var dist = Math.sqrt(offsetTop * offsetTop + offsetLeft * offsetLeft);
    path.style.transform = 'rotate(' + deg + 'deg) translate(0, -50%)';
    path.style.width = dist - to.offsetWidth / 2 - 28 + 'px';
    path.style.height = from.style.width;
    return path;
}
createPaths();

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

__webpack_require__(21);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(23);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sutils = __webpack_require__(0);

var _siema = __webpack_require__(22);

var _siema2 = _interopRequireDefault(_siema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sutils.forEach)((0, _sutils.getEls)('.map--place'), function (e) {
    return e.onclick = onMapPlaceClick;
});
(0, _sutils.getEl)('.details--hide').onclick = detailsClose;

function onMapPlaceClick() {
    var link = this.dataset.link;

    if (isDetailsOpenForPoint(link)) {
        detailsClose();
    } else {
        var type = this.parentNode.classList.contains('activeEntry') ? 'entry' : 'exit';

        if (isDetailsOpen()) detailsClose();
        setTimeout(function () {
            return detailsOpen(link, type);
        }, 300);
    }
}

function detailsClose() {
    (0, _sutils.getEl)('.details').classList.remove('active');
    (0, _sutils.getEl)('.details').dataset.active = '';
    var activePlace = (0, _sutils.getEl)('.map--place__active');
    if (activePlace) activePlace.classList.remove('map--place__active');
    var newLocation = window.location.hash.split('#')[1];
    history.replaceState(null, "", '#' + newLocation);
}

function detailsOpen(link, type) {
    (0, _sutils.getEl)('.details').dataset.active = link;
    (0, _sutils.getEl)('.details').dataset.type = type;
    var oldActive = (0, _sutils.getEl)('.map--place__active');
    if (oldActive) oldActive.classList.remove('map--place__active');
    (0, _sutils.getEl)('.map--place[data-link="' + link + '"]').classList.add('map--place__active');

    (0, _sutils.getEl)('.details--content').innerHTML = placesDetails[link];
    eventBus.trigger('audio:register');

    (0, _sutils.getEl)('.details').classList.add('active');
    (0, _sutils.getEl)('.details').scrollTo(0, 0);

    (0, _sutils.forEach)((0, _sutils.getEls)('.details.active .details--gallery'), function (gallery) {
        var siema = new _siema2.default({
            selector: (0, _sutils.getEl)('.details--gallery--content', gallery),
            loop: true,
            perPage: 1
        });

        (0, _sutils.getEl)('.details--gallery--previous', gallery).onclick = function () {
            return siema.prev();
        };
        (0, _sutils.getEl)('.details--gallery--next', gallery).onclick = function () {
            return siema.next();
        };
    });

    if (window.location.hash.split('#').length == 2) {
        history.replaceState(null, "", window.location.hash + ('#' + link.split('/')[2]));
    }
}

function isDetailsOpenForPoint(link) {
    return (0, _sutils.getEl)('.details').dataset.active == link;
}
function isDetailsOpen() {
    return (0, _sutils.getEl)('.details').dataset.active != "";
}

(0, _sutils.forEach)((0, _sutils.getEls)('.map--place'), getDetailsForPlace);

window.placesDetails = {};

function getDetailsForPlace(el) {
    var link = el.dataset.link;

    var request = new XMLHttpRequest();
    request.open('GET', link, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            placesDetails[link] = resp;
        } else {}
    };
    request.onerror = function () {};

    request.send();
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("Siema",[],t):"object"==typeof exports?exports.Siema=t():e.Siema=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),l=function(){function e(t){var i=this;if(r(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return s(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var i=document.createDocumentFragment();if(this.config.loop)for(var r=this.innerElements.length-this.perPage;r<this.innerElements.length;r++){var n=this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));i.appendChild(n)}for(var s=0;s<this.innerElements.length;s++){var l=this.buildSliderFrameItem(this.innerElements[s]);i.appendChild(l)}if(this.config.loop)for(var o=0;o<this.perPage;o++){var a=this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));i.appendChild(a)}this.sliderFrame.appendChild(i),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===n(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop){if(this.currentSlide-e<0){this.disableTransition();var r=this.currentSlide+this.innerElements.length,n=this.perPage,s=r+n,l=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(l+o)+"px, 0, 0)",this.currentSlide=r-e}else this.currentSlide=this.currentSlide-e}else this.currentSlide=Math.max(this.currentSlide-e,0);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop){if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var r=this.currentSlide-this.innerElements.length,n=this.perPage,s=r+n,l=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(l+o)+"px, 0, 0)",this.currentSlide=r+e}else this.currentSlide=this.currentSlide+e}else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(e){var t=this,i=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,r=(this.config.rtl?1:-1)*i*(this.selectorWidth/this.perPage);e?requestAnimationFrame(function(){requestAnimationFrame(function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+r+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+r+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),i=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,r=e>0&&this.currentSlide-i<0,n=e<0&&this.currentSlide+i>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent(r||n)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var i=e<this.currentSlide,r=this.currentSlide+this.perPage-1===e;(i||r)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var r=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=r?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",e){for(var i=document.createDocumentFragment(),r=0;r<this.innerElements.length;r++)i.appendChild(this.innerElements[r]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},i=e;for(var r in i)t[r]=i[r];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=l,e.exports=t.default}])});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sutils = __webpack_require__(0);

var _dashboardHide = __webpack_require__(24);

var _dashboardHide2 = _interopRequireDefault(_dashboardHide);

var _map = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var introButton = (0, _sutils.getEl)('.intro--button');

var initialPhase = getInitialPhase();

function getInitialPhase() {
    var hashes = window.location.hash.split("#");

    if (hashes.length == 1) {
        return false;
    }

    var phaseToInit = (0, _sutils.getEl)(".phases--phase[data-phase-name=" + hashes[1] + "]");
    var placeToInit = (0, _sutils.getEl)(".map--place[data-link=\"/place/" + hashes[2] + "/\"");

    if (!phaseToInit) {
        return false;
    }

    return {
        phase: phaseToInit.dataset.phase,
        place: placeToInit
    };
}

if (!initialPhase && introButton) {
    prepareIntro();
} else {
    animateInitialPhase(initialPhase);
}
(0, _sutils.getEl)('body').style.opacity = '1';

function prepareIntro() {
    (0, _sutils.getEl)('body').classList.add('intro-on');
    (0, _map.animateMap)('0');
    (0, _sutils.getEl)('.map').style.opacity = 1;
    introButton.onclick = onIntroButtonClick;
    (0, _sutils.getEl)('body').classList.add('home__visible');
}

function animateInitialPhase(initialPhase) {
    (0, _map.animateMap)(initialPhase.phase);
    removeIntro();
    setTimeout(function () {
        removeIntroActivatePhase(initialPhase.phase);
        (0, _sutils.getEl)('body').classList.add('home__visible');
    }, 100);

    if (initialPhase.place) {
        setTimeout(function () {
            return initialPhase.place.click();
        }, 2000);
    }
}

function onIntroButtonClick() {

    (0, _sutils.getEl)('.intro--button').classList.add('clicked');
    (0, _sutils.getEl)('.intro--hero').style.opacity = 0;
    (0, _sutils.getEl)('.intro--lead').style.opacity = 0;

    setTimeout(function () {
        (0, _sutils.getEl)('.intro--background').style.borderWidth = '0';
        (0, _sutils.getEl)('.intro--background-2').style.opacity = 0;

        setTimeout(function () {
            removeIntroActivatePhase('2', 2000, 700);
        }, 1300);
    }, 300);
}

function removeIntro() {
    if ((0, _sutils.getEl)('.intro')) {
        (0, _sutils.getEl)('.intro').style.opacity = 0;
        (0, _sutils.getEl)('.intro').remove();
        (0, _sutils.getEl)('.intro--background-2').remove();
    }
}

function removeIntroActivatePhase(phase, delay, delay2) {
    if (delay2) setTimeout(removeIntro, delay2);else removeIntro();

    (0, _sutils.getEl)('body').classList.add('map-active');
    (0, _sutils.getEl)('body').classList.add('map-animations-active');
    (0, _map.activatePhase)(phase, delay);
    (0, _dashboardHide2.default)();
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = initDashboardHiding;

var _sutils = __webpack_require__(0);

function hideDashboard() {
    (0, _sutils.getEl)('main .dashboard').classList.add('dashboard__hidden');
}

function unhideDashboard() {
    (0, _sutils.getEl)('main .dashboard').classList.remove('dashboard__hidden');
}

function initDashboardHiding() {
    var dashboard = (0, _sutils.getEl)('main .dashboard');

    setTimeout(function () {
        return (0, _sutils.getEl)('main .dashboard').style.transitionDelay = '0.01s';
    }, 2000);

    (0, _sutils.getEl)('.map-container').addEventListener('mousemove', function (e) {
        if (e.x <= dashboard.clientWidth) {
            if (!dashboard.classList.contains('dashboard__hidden')) {
                hideDashboard();
            }
        } else {
            if (dashboard.classList.contains('dashboard__hidden')) {
                unhideDashboard();
            }
        }
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTBhMTI0NzdhNDliMjg3YzVlMTIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdXBlcnNrcnlwdC9zdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdXBlcnNrcnlwdC9zdXRpbHMvc3JjL2VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdXBlcnNrcnlwdC9zdXRpbHMvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3VwZXJza3J5cHQvc3V0aWxzL3NyYy9ldmVudFF1ZXVlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2V2ZW50QnVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL2F1ZGlvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3VwZXJza3J5cHQvc3V0aWxzL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3VwZXJza3J5cHQvc3V0aWxzL3NyYy9maWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS1wcm9taXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vdmVydHggKGlnbm9yZWQpIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3VwZXJza3J5cHQvc3V0aWxzL3NyYy9sb2FkSWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdXBlcnNrcnlwdC9zdXRpbHMvc3JjL25vcm1hbGlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN1cGVyc2tyeXB0L3N1dGlscy9zcmMvb25SZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2llbWEvZGlzdC9zaWVtYS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvaW50cm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvZGFzaGJvYXJkSGlkZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJldmVudEJ1cyIsIkVtaXR0ZXIiLCJvbiIsImVsIiwib25jbGljayIsIm9uQXVkaW9DbGljayIsImF1ZGlvIiwicGxheSIsInRoZW4iLCJwYXVzZSIsImlubmVyVGV4dCIsImdldER1cmF0aW9uU3RyaW5nIiwiZHVyYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInMiLCJNYXRoIiwicm91bmQiLCJ0YXJnZXQiLCJjdXJyZW50VGltZSIsInNlYyIsIm1pbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGxheUF1ZGlvIiwic3RvcEF1ZGlvIiwiYXVkaW9Db250YWluZXIiLCJ0b2dnbGUiLCJwYXVzZWQiLCJyZW1vdmUiLCJhY3RpdmF0ZVBoYXNlIiwiYW5pbWF0ZU1hcCIsIm9uUGhhc2VDbGljayIsInBoYXNlIiwiZGF0YXNldCIsIm9sZEFjdGl2ZVBoYXNlIiwiZ2V0QWN0aXZlUGhhc2UiLCJkZWxheVBsYWNlQW5pbWF0aW9uIiwic2V0VGltZW91dCIsImFkZCIsInNob3dQb2ludHMiLCJzaG93RGFzaGJvYXJkIiwiYWN0aXZlIiwibWFwUGxhY2VBY3RpdmUiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicGhhc2VOYW1lIiwic2NhbGUiLCJnZXRTY2FsZSIsImNlbnRlciIsIngiLCJ5IiwibWFwIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJmb250U2l6ZSIsInZpc2libGVXIiwidmlzaWJsZUgiLCJzY2FsZVgiLCJpbm5lcldpZHRoIiwic2NhbGVZIiwiaW5uZXJIZWlnaHQiLCJvblJlc2l6ZSIsImFjdGl2ZVBoYXNlIiwiY3JlYXRlUGF0aHMiLCJjcmVhdGVQYXRoc0ZvclBoYXNlIiwiZnJvbXMiLCJ0b3MiLCJjcmVhdGVQYXRoc0ZvckV4aXQiLCJmcm9tIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVQYXRoRWxlbWVudCIsInRvIiwicGF0aCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJkZWciLCJhdGFuMiIsIlBJIiwiZGlzdCIsInNxcnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib25NYXBQbGFjZUNsaWNrIiwiZGV0YWlsc0Nsb3NlIiwibGluayIsImlzRGV0YWlsc09wZW5Gb3JQb2ludCIsInR5cGUiLCJwYXJlbnROb2RlIiwiaXNEZXRhaWxzT3BlbiIsImRldGFpbHNPcGVuIiwiYWN0aXZlUGxhY2UiLCJuZXdMb2NhdGlvbiIsImxvY2F0aW9uIiwiaGFzaCIsInNwbGl0Iiwib2xkQWN0aXZlIiwiaW5uZXJIVE1MIiwicGxhY2VzRGV0YWlscyIsInRyaWdnZXIiLCJzY3JvbGxUbyIsInNpZW1hIiwiU2llbWEiLCJzZWxlY3RvciIsImdhbGxlcnkiLCJsb29wIiwicGVyUGFnZSIsInByZXYiLCJuZXh0IiwibGVuZ3RoIiwiZ2V0RGV0YWlsc0ZvclBsYWNlIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3AiLCJyZXNwb25zZVRleHQiLCJvbmVycm9yIiwic2VuZCIsImludHJvQnV0dG9uIiwiaW5pdGlhbFBoYXNlIiwiZ2V0SW5pdGlhbFBoYXNlIiwiaGFzaGVzIiwicGhhc2VUb0luaXQiLCJwbGFjZVRvSW5pdCIsInBsYWNlIiwicHJlcGFyZUludHJvIiwiYW5pbWF0ZUluaXRpYWxQaGFzZSIsIm9wYWNpdHkiLCJvbkludHJvQnV0dG9uQ2xpY2siLCJyZW1vdmVJbnRybyIsInJlbW92ZUludHJvQWN0aXZhdGVQaGFzZSIsImNsaWNrIiwiYm9yZGVyV2lkdGgiLCJkZWxheSIsImRlbGF5MiIsImluaXREYXNoYm9hcmRIaWRpbmciLCJoaWRlRGFzaGJvYXJkIiwidW5oaWRlRGFzaGJvYXJkIiwiZGFzaGJvYXJkIiwidHJhbnNpdGlvbkRlbGF5IiwiY2xpZW50V2lkdGgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxjQUFjLG1CQUFPLENBQUMsQ0FBZTtBQUNyQyxjQUFjLG1CQUFPLENBQUMsQ0FBZTtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxDQUFrQjtBQUMzQyxXQUFXLG1CQUFPLENBQUMsQ0FBWTtBQUMvQixnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFpQjtBQUN6QyxnQkFBZ0IsbUJBQU8sQ0FBQyxFQUFpQjtBQUN6QyxlQUFlLG1CQUFPLENBQUMsRUFBZ0I7QUFDdkMsWUFBWSxtQkFBTyxDQUFDLENBQWE7O0FBRWpDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBSTtBQUNkO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHVDQUF1QztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFVBQVUsTUFBTTtBQUNoQixVQUFVLE9BQU87QUFDakI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxNQUFNO0FBQ2hCO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQUk7QUFDZDtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksU0FBUztBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRCxvQzs7Ozs7OztBQ2pvQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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bGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTBhMTI0NzdhNDliMjg3YzVlMTIiLCJ2YXIgYnJvd3NlciA9IHJlcXVpcmUoJy4vc3JjL2Jyb3dzZXInKTtcbnZhciBlbWl0dGVyID0gcmVxdWlyZSgnLi9zcmMvZW1pdHRlcicpO1xudmFyIGV2ZW50UXVldWUgPSByZXF1aXJlKCcuL3NyYy9ldmVudFF1ZXVlJyk7XG52YXIgZmlsZSA9IHJlcXVpcmUoJy4vc3JjL2ZpbGUnKTtcbnZhciBsb2FkSWNvbnMgPSByZXF1aXJlKCcuL3NyYy9sb2FkSWNvbnMnKTtcbnZhciBub3JtYWxpc2UgPSByZXF1aXJlKCcuL3NyYy9ub3JtYWxpc2UnKTtcbnZhciBvblJlc2l6ZSA9IHJlcXVpcmUoJy4vc3JjL29uUmVzaXplJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3NyYy91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBicm93c2VyOiBicm93c2VyLmJyb3dzZXIsXG5cbiAgICBFbWl0dGVyOiBlbWl0dGVyLkVtaXR0ZXIsXG5cbiAgICBldmVudFF1ZXVlLFxuXG4gICAgbG9hZEZpbGU6IGZpbGUubG9hZEZpbGUsXG4gICAgZGF0YVVybFRvQmxvYjogZmlsZS5kYXRhVXJsVG9CbG9iLFxuXG4gICAgbG9hZEljb25zOiBsb2FkSWNvbnMubG9hZEljb25zLFxuXG4gICAgbm9ybWFsaXNlLFxuXG4gICAgb25SZXNpemUsXG5cbiAgICBnZXRFbDogdXRpbHMuZ2V0RWwsXG4gICAgZ2V0RWxzOiB1dGlscy5nZXRFbHMsXG4gICAgZ2V0Vmlld3BvcnREaW1lbnNpb25zOiB1dGlscy5nZXRWaWV3cG9ydERpbWVuc2lvbnMsXG4gICAgZGVib3VuY2U6IHV0aWxzLmRlYm91bmNlLFxuICAgIGV4dGVuZDogdXRpbHMuZXh0ZW5kLFxuICAgIGlzT2JqZWN0OiB1dGlscy5pc09iamVjdCxcbiAgICBkZWVwT2JqZWN0RXh0ZW5kOiB1dGlscy5kZWVwT2JqZWN0RXh0ZW5kLFxuICAgIGZvckVhY2g6IHV0aWxzLmZvckVhY2gsXG4gICAgZmlsdGVyOiB1dGlscy5maWx0ZXIsXG4gICAgaW5kZXhPZjogdXRpbHMuaW5kZXhPZixcbiAgICBpbnNlcnRBZnRlcjogdXRpbHMuaW5zZXJ0QWZ0ZXIsXG4gICAgcmVuZGVyOiB1dGlscy5yZW5kZXIsXG4gICAgcmFuZG9tOiB1dGlscy5yYW5kb20sXG4gICAgZ2V0UGFyZW50OiB1dGlscy5nZXRQYXJlbnQsXG4gICAgZ2V0Q2xvc2VzdDogdXRpbHMuZ2V0Q2xvc2VzdCxcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Ac3VwZXJza3J5cHQvc3V0aWxzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gc291cmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9KRnVzY28vZXM2LWV2ZW50LWVtaXR0ZXIvXG5jb25zdCBlbWl0dGVyID0gbmV3IFdlYWtNYXAoKTtcblxuY2xhc3MgRW1pdHRlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0ZW1pdHRlci5zZXQodGhpcywge1xuXHRcdFx0ZXZlbnRzOiB7fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5ldmVudExlbmd0aCA9IDA7XG5cdH1cblxuXHRvbihldmVudCwgY2Ipe1xuXG5cdFx0aWYodHlwZW9mIGNiID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwcm92aWRlIGEgY2FsbGJhY2sgbWV0aG9kLicpO1xuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdIHx8IFtdO1xuXHRcdHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGNiKTtcblxuXHRcdHRoaXMuZXZlbnRMZW5ndGgrKztcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0b2ZmKGV2ZW50LCBjYil7XG5cdFx0aWYodHlwZW9mIGNiID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwcm92aWRlIGEgY2FsbGJhY2sgbWV0aG9kLicpO1xuXHRcdH1cblxuXHRcdGlmKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXG5cdFx0aWYodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50XSA9PT0gJ3VuZGVmaW5lZCcpe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBFdmVudCBub3QgZm91bmQgLSB0aGUgZXZlbnQgeW91IHByb3ZpZGVkIGlzOiAke2V2ZW50fWApO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxpc3RlbmVycyA9IHRoaXMuZXZlbnRzW2V2ZW50XTtcblxuXHRcdGxpc3RlbmVycy5mb3JFYWNoKCh2LCBpKSA9PiB7XG5cdFx0XHRpZih2ID09PSBjYikge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCl7XG5cdFx0XHRkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuXG5cdFx0XHR0aGlzLmV2ZW50TGVuZ3RoLS07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0cmlnZ2VyKGV2ZW50LCAuLi5hcmdzKXtcblx0XHRpZih0eXBlb2YgZXZlbnQgPT09ICd1bmRlZmluZWQnKXtcblx0XHRcdHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcHJvdmlkZSBhbiBldmVudCB0byB0cmlnZ2VyLicpO1xuXHRcdH1cblxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmV2ZW50c1tldmVudF07XG5cblx0XHRpZih0eXBlb2YgbGlzdGVuZXJzICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0bGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKDApO1xuXG5cblx0XHRcdGxpc3RlbmVycy5mb3JFYWNoKCh2KSA9PiB7XG5cdFx0XHRcdHYuYXBwbHkodGhpcywgYXJncyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldCBldmVudHMoKXtcblx0XHRyZXR1cm4gZW1pdHRlci5nZXQodGhpcykuZXZlbnRzO1xuXHR9XG59XG5cbmV4cG9ydCB7IEVtaXR0ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IEVtaXR0ZXI7XHRcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BzdXBlcnNrcnlwdC9zdXRpbHMvc3JjL2VtaXR0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIEEgc2hvcnRoYW5kIGZ1bmN0aW9uIHRvIGdldCBlbGVtZW50cyB3aGV0aGVyIGEgc2luZ2xlIGRvbSBlbGVtZW50IGlzIHBhc3NlZCBvciBhIHN0cmluZyBpcyBwYXNzZWRcbiAqIEBwYXJhbSAge3N0cmluZyBvciBET01FbGVtZW50fSBlbFxuICogQHBhcmFtICB7RE9NRWxlbWVudCB1bmRlciB3aGljaCB3ZSB3aWxsIGxvb2sgZm9yIGVsZW1lbnRzfSBjb250ZXh0XG4gKiBAcmV0dXJuIHtET01FbGVtZW50fSBBIHNpbmdsZSBlbGVtZW50IHJldHVybmVkIGJ5IG91ciBxdWVyeVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWwoZWwsIGNvbnRleHQgPSBkb2N1bWVudCl7XG5cbiAgICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyl7XG4gICAgICAgIGlmKGVsLmluZGV4T2YoJyMnKSA9PSAwICYmIGVsLmluZGV4T2YoJyAnKSA8PSAwICl7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuc3Vic3RyKDEpKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygncGFzc2VkIGVsIGlzIG5vdCBIVE1MIEVsZW1lbnQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBIHNob3J0aGFuZCBmdW5jdGlvbiB0byBnZXQgZWxlbWVudHMgd2hldGhlciBhIHNpbmdsZSBkb20gZWxlbWVudCBpcyBwYXNzZWQgb3IgYSBzdHJpbmcgaXMgcGFzc2VkXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVsXG4gKiBAcGFyYW0gIHtET01FbGVtZW50IHVuZGVyIHdoaWNoIHdlIHdpbGwgbG9vayBmb3IgZWxlbWVudHN9IGNvbnRleHRcbiAqIEByZXR1cm4ge0RPTUVsZW1lbnR9IEl0ZXJhYmxlIGVsZW1lbnRzIHJldHVybmVkIGJ5IG91ciBxdWVyeVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxzKGVsLCBjb250ZXh0ID0gZG9jdW1lbnQpe1xuXG4gICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpe1xuICAgICAgICBpZiggZWwuaW5kZXhPZignLicpID09IDAgJiYgZWwuaW5kZXhPZignICcpIDw9IDAgKXtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWwuc3Vic3RyKDEpKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKGVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLypcbiAqIEdldCBWaWV3cG9ydCBEaW1lbnNpb25zXG4gKiByZXR1cm5zIG9iamVjdCB3aXRoIHZpZXdwb3J0IGRpbWVuc2lvbnMgdG8gbWF0Y2ggY3NzIGluIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllc1xuICogKCBzb3VyY2U6IGh0dHA6Ly9hbmR5bGFuZ3Rvbi5jby51ay9ibG9nL2RldmVsb3BtZW50L2dldC12aWV3cG9ydC1zaXplLXdpZHRoLWFuZC1oZWlnaHQtamF2YXNjcmlwdCApXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9ydERpbWVuc2lvbnMoKSB7XG4gICAgdmFyIHcgPSB3aW5kb3csXG4gICAgICAgIGQgPSBkb2N1bWVudCxcbiAgICAgICAgZSA9IGQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICBnID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLFxuICAgICAgICB4ID0gZy5jbGllbnRXaWR0aCxcbiAgICAgICAgeSA9IGUuY2xpZW50SGVpZ2h0IDtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogeCxcbiAgICAgICAgaGVpZ2h0OiB5XG4gICAgfVxufVxuXG5cbi8qKlxuICogZXZlbnQgdGhyb3R0bGluZ1xuICogQHBhcmFtICB7T2JqZWN0fSApIHsgdmFyIHRpbWVycyBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UgKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgICB2YXIgdGltZW91dDtcbiAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgIH07XG4gICAgICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICB9O1xufTtcblxuLyoqXG4gKiBNZXJnZSBkZWZhdWx0cyB3aXRoIHVzZXIgb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIERlZmF1bHQgc2V0dGluZ3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFVzZXIgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gTWVyZ2VkIHZhbHVlcyBvZiBkZWZhdWx0cyBhbmQgb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKCBkZWZhdWx0cywgb3B0aW9ucyApIHtcbiAgICAvLyBFUzZcbiAgICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpe1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxkZWZhdWx0cyxvcHRpb25zKTtcbiAgICAvLyBFUzVcbiAgICB9ZWxzZXtcbiAgICAgICAgdmFyIGV4dGVuZGVkID0ge307XG4gICAgICAgIHZhciBwcm9wO1xuICAgICAgICBmb3IgKHByb3AgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVmYXVsdHMsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBkZWZhdWx0c1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHByb3AgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIGV4dGVuZGVkW3Byb3BdID0gb3B0aW9uc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXh0ZW5kZWQ7XG4gICAgfVxufTtcbi8qKlxuICogU2ltcGxlIG9iamVjdCBjaGVjay5cbiAqIEBwYXJhbSBpdGVtXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWVwT2JqZWN0RXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG4gIGxldCBvdXRwdXQgPSBPYmplY3QuYXNzaWduKHt9LCB0YXJnZXQpO1xuICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKVxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG91dHB1dFtrZXldID0gZGVlcE9iamVjdEV4dGVuZCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogaW1wbGVtZW50cyBmb3JlYWNoIGZvciBnaXZlbiBpdGVyYWJsZVxuICogQHBhcmFtICB7aXRlcmFibGV9IGFyciAgICAgIGFueSBpdGVyYWJsZSBvYmplY3RcbiAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyLCBmdW5jdCl7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcnIsIGZ1bmN0aW9uKGEsYil7XG4gICAgICAgIGZ1bmN0KGEsYik7XG4gICAgfSk7XG59XG5cbi8qKlxuICogaW1wbGVtZW50cyBmb3JlYWNoIGZvciBnaXZlbiBpdGVyYWJsZSBvYmplY3QvYXJyYXlcbiAqIEBwYXJhbSAge2l0ZXJhYmxlfSBhcnIgYW55IGl0ZXJhYmxlIG9iamVjdFxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlciggYXJyLCBmdW5jdCApIHtcblxuXHRyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGFyciwgZnVuY3Rpb24oIGEsIGIgKSB7XG5cblx0XHRyZXR1cm4gZnVuY3QoIGEsIGIgKTtcblxuXHR9ICk7XG5cbn1cblxuLyoqXG4gKiBpbXBsZW1lbnRzIGluZGV4T2YgZm9yIGdpdmVuIGl0ZXJhYmxlIG9iamVjdC9hcnJheVxuICogQHBhcmFtICB7aXRlcmFibGV9IGFyciBhbnkgaXRlcmFibGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnIpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFycik7XG59XG5cbi8qKlxuICogaW5zZXJ0cyBlbGVtZW50IGFmdGVyIHNwZWNpZmllZCBlbGVtZW50XG4gKiBAcGFyYW0gIHtOb2RlfSBuZXdOb2RlICAgICAgICAgdGhlIG5vZGUgd2Ugd2FudCBhZGRlZCBhZnRlciByZWZlcmVuY2VOb2RlXG4gKiBAcGFyYW0gIHtOb2RlfSByZWZlcmVuY2VOb2RlICAgdGhlIG5vZGUgYWZ0ZXIgd2hpY2ggd2UgYWRkIG5ld05vZGVcbiAqIEByZXR1cm4ge05vZGV9ICAgICAgICAgICAgICAgICB0aGUgbmV3IG5vZGUgKGluIGRpZmZlcmVudCBjb250ZXh0PylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgIHJldHVybiByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihzdHJpbmcpe1xuXG4gICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXAuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgIHJldHVybiB3cmFwLmNoaWxkcmVuWzBdO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpe1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG4vKipcbiAqIFRyYXZlcnMgdXAgdGhlIG5vZGUncyBwYXJlbnRzIGFuZCBnZXQgZmlyc3QgZWxlbWVudFxuICogdGhhdCBtYXRjaGVzIHRoZSBzZWxlY3RvciBxdWVyeVxuICogQHBhcmFtICB7c3RyaW5nfSBzZWxlY3RvciAgICAgQ1NTIHR5cGUgc2VsZWN0b3JcbiAqIEBwYXJhbSAge0RPTUVsZW1lbnR9IGVsICAgICAgIEEgYmFzZSBFbGVtZW50XG4gKiBAcmV0dXJuIHtET01FbGVtZW50fSAgICAgICAgICBQYXJlbnQgRWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50KCBzZWxlY3RvciwgZWwgKSB7XG5cblx0d2hpbGUgKCAoIGVsID0gZWwucGFyZW50RWxlbWVudCApICYmICEoICggZWwubWF0Y2hlcyB8fCBlbC5tYXRjaGVzU2VsZWN0b3IgKS5jYWxsKCBlbCwgc2VsZWN0b3IgKSApICk7XG5cdHJldHVybiBlbDtcblxufVxuXG4vKiEgZ2V0Q2xvc2VzdC5qcyB8IChjKSAyMDE3IENocmlzIEZlcmRpbmFuZGkgfCBNSVQgTGljZW5zZSB8IGh0dHA6Ly9naXRodWIuY29tL2NmZXJkaW5hbmRpL2dldENsb3Nlc3QgKi9cbi8qKlxuICogR2V0IHRoZSBjbG9zZXN0IHBhcmVudCBlbGVtZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICogQHBhcmFtICB7RWxlbWVudH0gZWxlbSAgICAgU3RhcnRpbmcgZWxlbWVudFxuICogQHBhcmFtICB7U3RyaW5nfSAgc2VsZWN0b3IgU2VsZWN0b3IgdG8gbWF0Y2ggYWdhaW5zdFxuICogQHJldHVybiB7Qm9vbGVhbnxFbGVtZW50fSAgUmV0dXJucyBudWxsIGlmIG5vdCBtYXRjaCBmb3VuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xvc2VzdChlbGVtLCBzZWxlY3Rvcikge1xuICAgLy8gRWxlbWVudC5tYXRjaGVzKCkgcG9seWZpbGxcbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gKHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHMpLFxuICAgICAgICAgICAgICAgICAgICBpID0gbWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gdGhpcykge31cbiAgICAgICAgICAgICAgICByZXR1cm4gaSA+IC0xO1xuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY2xvc2VzdCBtYXRjaFxuICAgIGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSByZXR1cm4gZWxlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0BzdXBlcnNrcnlwdC9zdXRpbHMvc3JjL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRRdWV1ZSB7XG5cblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLnF1ZXVlID0gW107XG5cdH1cbiAgXHRhZGQoY2FsbGJhY2spe1xuICBcdFx0dGhpcy5xdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgXHR9XG4gIFx0cnVuKGRhdGEpe1xuXHRcdHRoaXMucXVldWUuZm9yRWFjaCgoY2FsbGJhY2spPT57XG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhkYXRhKTtcblx0XHR9KTtcbiAgXHR9XG5cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Ac3VwZXJza3J5cHQvc3V0aWxzL3NyYy9ldmVudFF1ZXVlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHsgRW1pdHRlciB9IGZyb20gJ0BzdXBlcnNrcnlwdC9zdXRpbHMvc3JjL2VtaXR0ZXInO1xuXG53aW5kb3cuZXZlbnRCdXMgPSBuZXcgRW1pdHRlcigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21vZHVsZXMvZXZlbnRCdXMuanMiLCJpbXBvcnQgeyBnZXRFbCwgZ2V0RWxzLCBmb3JFYWNoLCBnZXRDbG9zZXN0IH0gZnJvbSAnQHN1cGVyc2tyeXB0L3N1dGlscyc7XG5cbmV2ZW50QnVzLm9uKCdhdWRpbzpyZWdpc3RlcicsICgpID0+IHtcbiAgICBmb3JFYWNoKGdldEVscygnLmF1ZGlvJyksIGVsID0+IHtcbiAgICAgICAgZWwub25jbGljayA9IG9uQXVkaW9DbGljaztcbiAgICAgICAgdmFyIGF1ZGlvID0gZ2V0RWwoJ2F1ZGlvJywgZWwpO1xuICAgICAgICBhdWRpby5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgICAgICAgZ2V0RWwoJy5hdWRpby0tZHVyYXRpb24nLCBlbCkuaW5uZXJUZXh0ID0gZ2V0RHVyYXRpb25TdHJpbmcoYXVkaW8uZHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBzID0gTWF0aC5yb3VuZChlLnRhcmdldC5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICBnZXRFbCgnLmF1ZGlvLS10aW1lJywgdGhpcykuaW5uZXJUZXh0ID0gZ2V0RHVyYXRpb25TdHJpbmcocyk7XG4gICAgICAgIH0sIHRydWUpO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGdldER1cmF0aW9uU3RyaW5nKGR1cmF0aW9uKSB7XG4gICAgbGV0IHNlYyA9IE1hdGgucm91bmQoZHVyYXRpb24pO1xuICAgIGxldCBtaW4gPSBzZWMgPj0gNjAgPyBgJHt+fihzZWMgLyA2MCl9JyBgIDogJyc7XG5cbiAgICByZXR1cm4gYFske21pbn0ke3NlYyAlIDYwfVwiXWA7XG59XG5cbmZ1bmN0aW9uIG9uQXVkaW9DbGljayhlKSB7XG4gICAgbGV0IGF1ZGlvID0gZ2V0RWwoJ2F1ZGlvJywgdGhpcyk7XG4gICAgaWYgKCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N2Zy1pY29uJykgKSB7XG4gICAgICAgIHBsYXlBdWRpbyggdGhpcywgYXVkaW8gKTtcbiAgICB9XG4gICAgaWYgKCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2F1ZGlvLS1zdG9wJykgKSB7XG4gICAgICAgIHN0b3BBdWRpbyggdGhpcywgYXVkaW8gKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gcGxheUF1ZGlvKCBhdWRpb0NvbnRhaW5lciwgYXVkaW8pIHtcblxuICAgIGF1ZGlvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2F1ZGlvX19wbGF5aW5nJyk7XG5cbiAgICBpZiAoYXVkaW8ucGF1c2VkKSB7XG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhdWRpby5wYXVzZSgpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBzdG9wQXVkaW8oIGF1ZGlvQ29udGFpbmVyLCBhdWRpbykge1xuXG4gICAgaWYgKCFhdWRpby5wYXVzZWQpIHtcbiAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSAwXG4gICAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIGF1ZGlvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2F1ZGlvX19wbGF5aW5nJyk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlcy9hdWRpby5qcyIsImltcG9ydCBFbWl0dGVyIGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgQnJvd3NlciBleHRlbmRzIEVtaXR0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKCl7XG5cblx0XHRzdXBlcigpO1xuXG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSB1dGlscy5kZWJvdW5jZSggdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyksIDIwMCk7XG5cbiAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IHV0aWxzLmRlYm91bmNlKCB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZCggdGhpcyApLCA4MCwgZmFsc2UgKTtcbiAgICAgIHRoaXMubW91c2VXaGVlbEhhbmRsZXIgPSB1dGlscy5kZWJvdW5jZSggdGhpcy5tb3VzZVdoZWVsSGFuZGxlci5iaW5kKHRoaXMpLCAxMDAsIHRydWUpIDtcbmBgXG4gICAgICB0aGlzLmluaXRFdmVudHMoKTtcblxuICB9XG5cbiAgaW5pdEV2ZW50cygpe1xuXG4gICAgdGhpcy5yZXNpemVUaHJvdHRsZVRpbWUgPSAyMDA7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyICk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmxvYWRIYW5kbGVyLmJpbmQodGhpcykgKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5yZWFkeUhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyICk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlV2hlZWwnLCB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyICk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5tb3VzZVdoZWVsSGFuZGxlcik7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy50b3VjaFN0YXJ0SGFuZGxlci5iaW5kKHRoaXMpICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy50b3VjaE1vdmVIYW5kbGVyLmJpbmQodGhpcykgKTtcblxuICB9XG5cbiAgZ2V0IGhlaWdodCgpe1xuICAgIHJldHVybiB1dGlscy5nZXRWaWV3cG9ydERpbWVuc2lvbnMoKS5oZWlnaHQ7XG4gIH1cbiAgZ2V0IHdpZHRoKCl7XG4gICAgcmV0dXJuIHV0aWxzLmdldFZpZXdwb3J0RGltZW5zaW9ucygpLndpZHRoO1xuICB9XG5cbiAgcmVzaXplSGFuZGxlcigpe1xuXG4gICAgbGV0IHZ3ID0gdXRpbHMuZ2V0Vmlld3BvcnREaW1lbnNpb25zKCk7XG5cbiAgICB0aGlzLnRyaWdnZXIoJ2Jyb3dzZXI6cmVzaXplJywge1xuICAgICAgd2lkdGg6IHZ3LndpZHRoLFxuICAgICAgaGVpZ2h0OiB2dy5oZWlnaHRcbiAgICB9KTtcblxuICB9XG5cbiAgcmVhZHlIYW5kbGVyKCl7XG4gICAgdGhpcy50cmlnZ2VyKCdicm93c2VyOnJlYWR5Jyk7XG4gIH1cblxuICBsb2FkSGFuZGxlcigpe1xuICAgIHRoaXMudHJpZ2dlcignYnJvd3Nlcjpsb2FkJyk7XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyKCl7XG4gICAgdGhpcy50cmlnZ2VyKCdicm93c2VyOnNjcm9sbCcpO1xuICB9XG5cbiBtb3VzZVdoZWVsSGFuZGxlcihlKXtcblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IChlLmRldGFpbDwwIHx8IGUud2hlZWxEZWx0YT4wKSA+IDAgPyAndXAnOidkb3duJztcblxuICAgIHRoaXMudHJpZ2dlcignYnJvd3Nlcjptb3VzZVdoZWVsJywge1xuICAgICAgZGlyZWN0aW9uOmRpcmVjdGlvbixcbiAgICAgIGU6ZVxuICAgIH0pO1xuXG4gIH1cblxuICB0b3VjaFN0YXJ0SGFuZGxlcihlKXtcbiAgICB0aGlzLnhEb3duID0gZS50b3VjaGVzWzBdLmNsaWVudFg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB0aGlzLnlEb3duID0gZS50b3VjaGVzWzBdLmNsaWVudFk7ICAgIFxuICB9XG5cbiAgdG91Y2hNb3ZlSGFuZGxlcihlKXtcblxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICggISB0aGlzLnhEb3duIHx8ICEgdGhpcy55RG93biApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgeFVwID0gZS50b3VjaGVzWzBdLmNsaWVudFg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgdmFyIHlVcCA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuXG4gICAgdmFyIHhEaWZmID0gdGhpcy54RG93biAtIHhVcDtcbiAgICB2YXIgeURpZmYgPSB0aGlzLnlEb3duIC0geVVwO1xuXG4gICAgaWYgKCB5RGlmZiA+IDAgKSB7XG4gICAgLyogdXAgc3dpcGUgKi9cbiAgICAgIHRoaXMudHJpZ2dlcignYnJvd3Nlcjpzd2lwZScse1xuICAgICAgICBkaXJlY3Rpb246J3VwJ1xuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKCB5RGlmZiA8IDAgKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2Jyb3dzZXI6c3dpcGUnLHtcbiAgICAgICAgZGlyZWN0aW9uOidkb3duJ1xuICAgICAgfSlcbiAgICAvKiBkb3duIHN3aXBlICovXG4gICAgfSBlbHNlIGlmICggeERpZmYgPiAwICkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdicm93c2VyOnN3aXBlJyx7XG4gICAgICAgIGRpcmVjdGlvbjonbGVmdCdcbiAgICAgIH0pXG4gICAgLyogbGVmdCBzd2lwZSAqL1xuICAgIH0gZWxzZSBpZiAoIHhEaWZmIDwgMCApIHtcbiAgICAgIHRoaXMudHJpZ2dlcignYnJvd3Nlcjpzd2lwZScse1xuICAgICAgICBkaXJlY3Rpb246J3JpZ2h0J1xuICAgICAgfSlcbiAgICAvKiByaWdodCBzd2lwZSAqL1xuICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAvKiByZXNldCB2YWx1ZXMgKi9cbiAgICB0aGlzLnhEb3duID0gbnVsbDtcbiAgICB0aGlzLnlEb3duID0gbnVsbDsgICAgICAgICAgICAgICAgICAgICAgIFxuICB9XG5cdFxufVxuXG5jb25zdCBicm93c2VyID0gbmV3IEJyb3dzZXIoKTtcblxuZXhwb3J0IHticm93c2VyfVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHN1cGVyc2tyeXB0L3N1dGlscy9zcmMvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlKCBmaWxlICkge1xuXG5cdGNvbnN0IGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4ge1xuXG5cdFx0ZnIucmVhZEFzRGF0YVVSTCggZmlsZSApO1xuXG5cdFx0ZnIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCAoIGUgKSA9PiB7XG5cblx0XHRcdGNvbnN0IHJhd0ltYWdlID0gZS50YXJnZXQucmVzdWx0O1xuXHRcdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdFx0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCAoKSA9PiB7XG5cblx0XHRcdFx0cmVzb2x2ZSggaW1hZ2UgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRpbWFnZS5zcmMgPSByYXdJbWFnZTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0gIHtkYXRhVXJsfSBkYXRhVXJsXG4gKiBAcmV0dXJuIHtCbG9ifSBhIEJsb2IgY29udGFpbmluZyB0aGUgZGF0YSB0byBTYXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRhVXJsVG9CbG9iKGRhdGFVcmwpe1xuICAgIFxuICAgIHZhciBhcnIgPSBkYXRhVXJsLnNwbGl0KCcsJyksIFxuICAgICAgICBtaW1lID0gYXJyWzBdLm1hdGNoKC86KC4qPyk7LylbMV0sXG4gICAgICAgIGJzdHIgPSBhdG9iKGFyclsxXSksIFxuICAgICAgICBuID0gYnN0ci5sZW5ndGgsIFxuICAgICAgICB1OGFyciA9IG5ldyBVaW50OEFycmF5KG4pO1xuICAgIFxuICAgIHdoaWxlKG4tLSl7XG4gICAgICAgICAgICB1OGFycltuXSA9IGJzdHIuY2hhckNvZGVBdChuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEJsb2IoW3U4YXJyXSwge3R5cGU6bWltZX0pO1xuXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHN1cGVyc2tyeXB0L3N1dGlscy9zcmMvZmlsZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXM2LXByb21pc2UtcHJvbWlzZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIVxuICogQG92ZXJ2aWV3IGVzNi1wcm9taXNlIC0gYSB0aW55IGltcGxlbWVudGF0aW9uIG9mIFByb21pc2VzL0ErLlxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTQgWWVodWRhIEthdHosIFRvbSBEYWxlLCBTdGVmYW4gUGVubmVyIGFuZCBjb250cmlidXRvcnMgKENvbnZlcnNpb24gdG8gRVM2IEFQSSBieSBKYWtlIEFyY2hpYmFsZClcbiAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2VcbiAqICAgICAgICAgICAgU2VlIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zdGVmYW5wZW5uZXIvZXM2LXByb21pc2UvbWFzdGVyL0xJQ0VOU0VcbiAqIEB2ZXJzaW9uICAgMy4zLjFcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwuRVM2UHJvbWlzZSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxudmFyIF9pc0FycmF5ID0gdW5kZWZpbmVkO1xuaWYgKCFBcnJheS5pc0FycmF5KSB7XG4gIF9pc0FycmF5ID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xufSBlbHNlIHtcbiAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xufVxuXG52YXIgaXNBcnJheSA9IF9pc0FycmF5O1xuXG52YXIgbGVuID0gMDtcbnZhciB2ZXJ0eE5leHQgPSB1bmRlZmluZWQ7XG52YXIgY3VzdG9tU2NoZWR1bGVyRm4gPSB1bmRlZmluZWQ7XG5cbnZhciBhc2FwID0gZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gIHF1ZXVlW2xlbl0gPSBjYWxsYmFjaztcbiAgcXVldWVbbGVuICsgMV0gPSBhcmc7XG4gIGxlbiArPSAyO1xuICBpZiAobGVuID09PSAyKSB7XG4gICAgLy8gSWYgbGVuIGlzIDIsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgIC8vIElmIGFkZGl0aW9uYWwgY2FsbGJhY2tzIGFyZSBxdWV1ZWQgYmVmb3JlIHRoZSBxdWV1ZSBpcyBmbHVzaGVkLCB0aGV5XG4gICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgIGlmIChjdXN0b21TY2hlZHVsZXJGbikge1xuICAgICAgY3VzdG9tU2NoZWR1bGVyRm4oZmx1c2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlZHVsZUZsdXNoKCk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICBjdXN0b21TY2hlZHVsZXJGbiA9IHNjaGVkdWxlRm47XG59XG5cbmZ1bmN0aW9uIHNldEFzYXAoYXNhcEZuKSB7XG4gIGFzYXAgPSBhc2FwRm47XG59XG5cbnZhciBicm93c2VyV2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG52YXIgYnJvd3Nlckdsb2JhbCA9IGJyb3dzZXJXaW5kb3cgfHwge307XG52YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIGlzTm9kZSA9IHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHt9KS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbi8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG52YXIgaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBub2RlXG5mdW5jdGlvbiB1c2VOZXh0VGljaygpIHtcbiAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY3Vqb2pzL3doZW4vaXNzdWVzLzQxMCBmb3IgZGV0YWlsc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgfTtcbn1cblxuLy8gdmVydHhcbmZ1bmN0aW9uIHVzZVZlcnR4VGltZXIoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmVydHhOZXh0KGZsdXNoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLmRhdGEgPSBpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMjtcbiAgfTtcbn1cblxuLy8gd2ViIHdvcmtlclxuZnVuY3Rpb24gdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZmx1c2g7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVNldFRpbWVvdXQoKSB7XG4gIC8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIGVzNi1wcm9taXNlIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuICAvLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbiAgdmFyIGdsb2JhbFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnbG9iYWxTZXRUaW1lb3V0KGZsdXNoLCAxKTtcbiAgfTtcbn1cblxudmFyIHF1ZXVlID0gbmV3IEFycmF5KDEwMDApO1xuZnVuY3Rpb24gZmx1c2goKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcbiAgICB2YXIgYXJnID0gcXVldWVbaSArIDFdO1xuXG4gICAgY2FsbGJhY2soYXJnKTtcblxuICAgIHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgIHF1ZXVlW2kgKyAxXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxlbiA9IDA7XG59XG5cbmZ1bmN0aW9uIGF0dGVtcHRWZXJ0eCgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgciA9IHJlcXVpcmU7XG4gICAgdmFyIHZlcnR4ID0gcigndmVydHgnKTtcbiAgICB2ZXJ0eE5leHQgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuICAgIHJldHVybiB1c2VWZXJ0eFRpbWVyKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdXNlU2V0VGltZW91dCgpO1xuICB9XG59XG5cbnZhciBzY2hlZHVsZUZsdXNoID0gdW5kZWZpbmVkO1xuLy8gRGVjaWRlIHdoYXQgYXN5bmMgbWV0aG9kIHRvIHVzZSB0byB0cmlnZ2VyaW5nIHByb2Nlc3Npbmcgb2YgcXVldWVkIGNhbGxiYWNrczpcbmlmIChpc05vZGUpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZU5leHRUaWNrKCk7XG59IGVsc2UgaWYgKEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG59IGVsc2UgaWYgKGlzV29ya2VyKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VNZXNzYWdlQ2hhbm5lbCgpO1xufSBlbHNlIGlmIChicm93c2VyV2luZG93ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IGF0dGVtcHRWZXJ0eCgpO1xufSBlbHNlIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZVNldFRpbWVvdXQoKTtcbn1cblxuZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICB2YXIgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcblxuICB2YXIgcGFyZW50ID0gdGhpcztcblxuICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblxuICBpZiAoY2hpbGRbUFJPTUlTRV9JRF0gPT09IHVuZGVmaW5lZCkge1xuICAgIG1ha2VQcm9taXNlKGNoaWxkKTtcbiAgfVxuXG4gIHZhciBfc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXG4gIGlmIChfc3RhdGUpIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gX2FyZ3VtZW50c1tfc3RhdGUgLSAxXTtcbiAgICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaW52b2tlQ2FsbGJhY2soX3N0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHBhcmVudC5fcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH0gZWxzZSB7XG4gICAgc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZDtcbn1cblxuLyoqXG4gIGBQcm9taXNlLnJlc29sdmVgIHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCBiZWNvbWUgcmVzb2x2ZWQgd2l0aCB0aGVcbiAgcGFzc2VkIGB2YWx1ZWAuIEl0IGlzIHNob3J0aGFuZCBmb3IgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICByZXNvbHZlKDEpO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIHZhbHVlID09PSAxXG4gIH0pO1xuICBgYGBcblxuICBJbnN0ZWFkIG9mIHdyaXRpbmcgdGhlIGFib3ZlLCB5b3VyIGNvZGUgbm93IHNpbXBseSBiZWNvbWVzIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgxKTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIHZhbHVlID09PSAxXG4gIH0pO1xuICBgYGBcblxuICBAbWV0aG9kIHJlc29sdmVcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FueX0gdmFsdWUgdmFsdWUgdGhhdCB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGhcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2UgdGhhdCB3aWxsIGJlY29tZSBmdWxmaWxsZWQgd2l0aCB0aGUgZ2l2ZW5cbiAgYHZhbHVlYFxuKi9cbmZ1bmN0aW9uIHJlc29sdmUob2JqZWN0KSB7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuICBfcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxudmFyIFBST01JU0VfSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTYpO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIFBFTkRJTkcgPSB2b2lkIDA7XG52YXIgRlVMRklMTEVEID0gMTtcbnZhciBSRUpFQ1RFRCA9IDI7XG5cbnZhciBHRVRfVEhFTl9FUlJPUiA9IG5ldyBFcnJvck9iamVjdCgpO1xuXG5mdW5jdGlvbiBzZWxmRnVsZmlsbG1lbnQoKSB7XG4gIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKTtcbn1cblxuZnVuY3Rpb24gY2Fubm90UmV0dXJuT3duKCkge1xuICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xufVxuXG5mdW5jdGlvbiBnZXRUaGVuKHByb21pc2UpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIEdFVF9USEVOX0VSUk9SLmVycm9yID0gZXJyb3I7XG4gICAgcmV0dXJuIEdFVF9USEVOX0VSUk9SO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVRoZW4odGhlbiwgdmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICB0cnkge1xuICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICBhc2FwKGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgdmFyIHNlYWxlZCA9IGZhbHNlO1xuICAgIHZhciBlcnJvciA9IHRyeVRoZW4odGhlbiwgdGhlbmFibGUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHNlYWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBpZiAoc2VhbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlYWxlZCA9IHRydWU7XG5cbiAgICAgIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9LCAnU2V0dGxlOiAnICsgKHByb21pc2UuX2xhYmVsIHx8ICcgdW5rbm93biBwcm9taXNlJykpO1xuXG4gICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICB9XG4gIH0sIHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSkge1xuICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBGVUxGSUxMRUQpIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICB9IGVsc2UgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICBfcmVqZWN0KHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICB9IGVsc2Uge1xuICAgIHN1YnNjcmliZSh0aGVuYWJsZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcmV0dXJuIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4kJCkge1xuICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3RvciAmJiB0aGVuJCQgPT09IHRoZW4gJiYgbWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3Rvci5yZXNvbHZlID09PSByZXNvbHZlKSB7XG4gICAgaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoZW4kJCA9PT0gR0VUX1RIRU5fRVJST1IpIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgR0VUX1RIRU5fRVJST1IuZXJyb3IpO1xuICAgIH0gZWxzZSBpZiAodGhlbiQkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoZW4kJCkpIHtcbiAgICAgIGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuJCQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICBfcmVqZWN0KHByb21pc2UsIHNlbGZGdWxmaWxsbWVudCgpKTtcbiAgfSBlbHNlIGlmIChvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuICAgIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUsIGdldFRoZW4odmFsdWUpKTtcbiAgfSBlbHNlIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX29uZXJyb3IpIHtcbiAgICBwcm9taXNlLl9vbmVycm9yKHByb21pc2UuX3Jlc3VsdCk7XG4gIH1cblxuICBwdWJsaXNoKHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICBwcm9taXNlLl9zdGF0ZSA9IEZVTEZJTExFRDtcblxuICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgYXNhcChwdWJsaXNoLCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcbiAgcHJvbWlzZS5fcmVzdWx0ID0gcmVhc29uO1xuXG4gIGFzYXAocHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICB2YXIgX3N1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgdmFyIGxlbmd0aCA9IF9zdWJzY3JpYmVycy5sZW5ndGg7XG5cbiAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuICBfc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICBfc3Vic2NyaWJlcnNbbGVuZ3RoICsgRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gIF9zdWJzY3JpYmVyc1tsZW5ndGggKyBSRUpFQ1RFRF0gPSBvblJlamVjdGlvbjtcblxuICBpZiAobGVuZ3RoID09PSAwICYmIHBhcmVudC5fc3RhdGUpIHtcbiAgICBhc2FwKHB1Ymxpc2gsIHBhcmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVibGlzaChwcm9taXNlKSB7XG4gIHZhciBzdWJzY3JpYmVycyA9IHByb21pc2UuX3N1YnNjcmliZXJzO1xuICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY2hpbGQgPSB1bmRlZmluZWQsXG4gICAgICBjYWxsYmFjayA9IHVuZGVmaW5lZCxcbiAgICAgIGRldGFpbCA9IHByb21pc2UuX3Jlc3VsdDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICBjYWxsYmFjayA9IHN1YnNjcmliZXJzW2kgKyBzZXR0bGVkXTtcblxuICAgIGlmIChjaGlsZCkge1xuICAgICAgaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhkZXRhaWwpO1xuICAgIH1cbiAgfVxuXG4gIHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG59XG5cbmZ1bmN0aW9uIEVycm9yT2JqZWN0KCkge1xuICB0aGlzLmVycm9yID0gbnVsbDtcbn1cblxudmFyIFRSWV9DQVRDSF9FUlJPUiA9IG5ldyBFcnJvck9iamVjdCgpO1xuXG5mdW5jdGlvbiB0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKGRldGFpbCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBUUllfQ0FUQ0hfRVJST1IuZXJyb3IgPSBlO1xuICAgIHJldHVybiBUUllfQ0FUQ0hfRVJST1I7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICB2YXIgaGFzQ2FsbGJhY2sgPSBpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkLFxuICAgICAgZXJyb3IgPSB1bmRlZmluZWQsXG4gICAgICBzdWNjZWVkZWQgPSB1bmRlZmluZWQsXG4gICAgICBmYWlsZWQgPSB1bmRlZmluZWQ7XG5cbiAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgdmFsdWUgPSB0cnlDYXRjaChjYWxsYmFjaywgZGV0YWlsKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gVFJZX0NBVENIX0VSUk9SKSB7XG4gICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgZXJyb3IgPSB2YWx1ZS5lcnJvcjtcbiAgICAgIHZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgY2Fubm90UmV0dXJuT3duKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgLy8gbm9vcFxuICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgICAgX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoZmFpbGVkKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IEZVTEZJTExFRCkge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBSRUpFQ1RFRCkge1xuICAgICAgX3JlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuICB0cnkge1xuICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKSB7XG4gICAgICBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIF9yZWplY3QocHJvbWlzZSwgZSk7XG4gIH1cbn1cblxudmFyIGlkID0gMDtcbmZ1bmN0aW9uIG5leHRJZCgpIHtcbiAgcmV0dXJuIGlkKys7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9taXNlKHByb21pc2UpIHtcbiAgcHJvbWlzZVtQUk9NSVNFX0lEXSA9IGlkKys7XG4gIHByb21pc2UuX3N0YXRlID0gdW5kZWZpbmVkO1xuICBwcm9taXNlLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gIHByb21pc2UuX3N1YnNjcmliZXJzID0gW107XG59XG5cbmZ1bmN0aW9uIEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0KSB7XG4gIHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuXG4gIGlmICghdGhpcy5wcm9taXNlW1BST01JU0VfSURdKSB7XG4gICAgbWFrZVByb21pc2UodGhpcy5wcm9taXNlKTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5sZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgdGhpcy5fcmVtYWluaW5nID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgIHRoaXMuX2VudW1lcmF0ZSgpO1xuICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgX3JlamVjdCh0aGlzLnByb21pc2UsIHZhbGlkYXRpb25FcnJvcigpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBuZXcgRXJyb3IoJ0FycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheScpO1xufTtcblxuRW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICB2YXIgX2lucHV0ID0gdGhpcy5faW5wdXQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IHRoaXMuX3N0YXRlID09PSBQRU5ESU5HICYmIGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHRoaXMuX2VhY2hFbnRyeShfaW5wdXRbaV0sIGkpO1xuICB9XG59O1xuXG5FbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24gKGVudHJ5LCBpKSB7XG4gIHZhciBjID0gdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcbiAgdmFyIHJlc29sdmUkJCA9IGMucmVzb2x2ZTtcblxuICBpZiAocmVzb2x2ZSQkID09PSByZXNvbHZlKSB7XG4gICAgdmFyIF90aGVuID0gZ2V0VGhlbihlbnRyeSk7XG5cbiAgICBpZiAoX3RoZW4gPT09IHRoZW4gJiYgZW50cnkuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG4gICAgICB0aGlzLl9yZXN1bHRbaV0gPSBlbnRyeTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IFByb21pc2UpIHtcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IGMobm9vcCk7XG4gICAgICBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIGVudHJ5LCBfdGhlbik7XG4gICAgICB0aGlzLl93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChuZXcgYyhmdW5jdGlvbiAocmVzb2x2ZSQkKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlJCQoZW50cnkpO1xuICAgICAgfSksIGkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl93aWxsU2V0dGxlQXQocmVzb2x2ZSQkKGVudHJ5KSwgaSk7XG4gIH1cbn07XG5cbkVudW1lcmF0b3IucHJvdG90eXBlLl9zZXR0bGVkQXQgPSBmdW5jdGlvbiAoc3RhdGUsIGksIHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG4gIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuXG4gICAgaWYgKHN0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgX3JlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gIH1cbn07XG5cbkVudW1lcmF0b3IucHJvdG90eXBlLl93aWxsU2V0dGxlQXQgPSBmdW5jdGlvbiAocHJvbWlzZSwgaSkge1xuICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgc3Vic2NyaWJlKHByb21pc2UsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGVudW1lcmF0b3IuX3NldHRsZWRBdChGVUxGSUxMRUQsIGksIHZhbHVlKTtcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHJldHVybiBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoUkVKRUNURUQsIGksIHJlYXNvbik7XG4gIH0pO1xufTtcblxuLyoqXG4gIGBQcm9taXNlLmFsbGAgYWNjZXB0cyBhbiBhcnJheSBvZiBwcm9taXNlcywgYW5kIHJldHVybnMgYSBuZXcgcHJvbWlzZSB3aGljaFxuICBpcyBmdWxmaWxsZWQgd2l0aCBhbiBhcnJheSBvZiBmdWxmaWxsbWVudCB2YWx1ZXMgZm9yIHRoZSBwYXNzZWQgcHJvbWlzZXMsIG9yXG4gIHJlamVjdGVkIHdpdGggdGhlIHJlYXNvbiBvZiB0aGUgZmlyc3QgcGFzc2VkIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQuIEl0IGNhc3RzIGFsbFxuICBlbGVtZW50cyBvZiB0aGUgcGFzc2VkIGl0ZXJhYmxlIHRvIHByb21pc2VzIGFzIGl0IHJ1bnMgdGhpcyBhbGdvcml0aG0uXG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG4gIGxldCBwcm9taXNlMiA9IHJlc29sdmUoMik7XG4gIGxldCBwcm9taXNlMyA9IHJlc29sdmUoMyk7XG4gIGxldCBwcm9taXNlcyA9IFsgcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlMyBdO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFycmF5KXtcbiAgICAvLyBUaGUgYXJyYXkgaGVyZSB3b3VsZCBiZSBbIDEsIDIsIDMgXTtcbiAgfSk7XG4gIGBgYFxuXG4gIElmIGFueSBvZiB0aGUgYHByb21pc2VzYCBnaXZlbiB0byBgYWxsYCBhcmUgcmVqZWN0ZWQsIHRoZSBmaXJzdCBwcm9taXNlXG4gIHRoYXQgaXMgcmVqZWN0ZWQgd2lsbCBiZSBnaXZlbiBhcyBhbiBhcmd1bWVudCB0byB0aGUgcmV0dXJuZWQgcHJvbWlzZXMnc1xuICByZWplY3Rpb24gaGFuZGxlci4gRm9yIGV4YW1wbGU6XG5cbiAgRXhhbXBsZTpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG4gIGxldCBwcm9taXNlMiA9IHJlamVjdChuZXcgRXJyb3IoXCIyXCIpKTtcbiAgbGV0IHByb21pc2UzID0gcmVqZWN0KG5ldyBFcnJvcihcIjNcIikpO1xuICBsZXQgcHJvbWlzZXMgPSBbIHByb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMgXTtcblxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihhcnJheSl7XG4gICAgLy8gQ29kZSBoZXJlIG5ldmVyIHJ1bnMgYmVjYXVzZSB0aGVyZSBhcmUgcmVqZWN0ZWQgcHJvbWlzZXMhXG4gIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgLy8gZXJyb3IubWVzc2FnZSA9PT0gXCIyXCJcbiAgfSk7XG4gIGBgYFxuXG4gIEBtZXRob2QgYWxsXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBcnJheX0gZW50cmllcyBhcnJheSBvZiBwcm9taXNlc1xuICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gYWxsIGBwcm9taXNlc2AgaGF2ZSBiZWVuXG4gIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQgaWYgYW55IG9mIHRoZW0gYmVjb21lIHJlamVjdGVkLlxuICBAc3RhdGljXG4qL1xuZnVuY3Rpb24gYWxsKGVudHJpZXMpIHtcbiAgcmV0dXJuIG5ldyBFbnVtZXJhdG9yKHRoaXMsIGVudHJpZXMpLnByb21pc2U7XG59XG5cbi8qKlxuICBgUHJvbWlzZS5yYWNlYCByZXR1cm5zIGEgbmV3IHByb21pc2Ugd2hpY2ggaXMgc2V0dGxlZCBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlXG4gIGZpcnN0IHBhc3NlZCBwcm9taXNlIHRvIHNldHRsZS5cblxuICBFeGFtcGxlOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXNvbHZlKCdwcm9taXNlIDEnKTtcbiAgICB9LCAyMDApO1xuICB9KTtcblxuICBsZXQgcHJvbWlzZTIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMicpO1xuICAgIH0sIDEwMCk7XG4gIH0pO1xuXG4gIFByb21pc2UucmFjZShbcHJvbWlzZTEsIHByb21pc2UyXSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgIC8vIHJlc3VsdCA9PT0gJ3Byb21pc2UgMicgYmVjYXVzZSBpdCB3YXMgcmVzb2x2ZWQgYmVmb3JlIHByb21pc2UxXG4gICAgLy8gd2FzIHJlc29sdmVkLlxuICB9KTtcbiAgYGBgXG5cbiAgYFByb21pc2UucmFjZWAgaXMgZGV0ZXJtaW5pc3RpYyBpbiB0aGF0IG9ubHkgdGhlIHN0YXRlIG9mIHRoZSBmaXJzdFxuICBzZXR0bGVkIHByb21pc2UgbWF0dGVycy4gRm9yIGV4YW1wbGUsIGV2ZW4gaWYgb3RoZXIgcHJvbWlzZXMgZ2l2ZW4gdG8gdGhlXG4gIGBwcm9taXNlc2AgYXJyYXkgYXJndW1lbnQgYXJlIHJlc29sdmVkLCBidXQgdGhlIGZpcnN0IHNldHRsZWQgcHJvbWlzZSBoYXNcbiAgYmVjb21lIHJlamVjdGVkIGJlZm9yZSB0aGUgb3RoZXIgcHJvbWlzZXMgYmVjYW1lIGZ1bGZpbGxlZCwgdGhlIHJldHVybmVkXG4gIHByb21pc2Ugd2lsbCBiZWNvbWUgcmVqZWN0ZWQ6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMScpO1xuICAgIH0sIDIwMCk7XG4gIH0pO1xuXG4gIGxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcigncHJvbWlzZSAyJykpO1xuICAgIH0sIDEwMCk7XG4gIH0pO1xuXG4gIFByb21pc2UucmFjZShbcHJvbWlzZTEsIHByb21pc2UyXSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdwcm9taXNlIDInIGJlY2F1c2UgcHJvbWlzZSAyIGJlY2FtZSByZWplY3RlZCBiZWZvcmVcbiAgICAvLyBwcm9taXNlIDEgYmVjYW1lIGZ1bGZpbGxlZFxuICB9KTtcbiAgYGBgXG5cbiAgQW4gZXhhbXBsZSByZWFsLXdvcmxkIHVzZSBjYXNlIGlzIGltcGxlbWVudGluZyB0aW1lb3V0czpcblxuICBgYGBqYXZhc2NyaXB0XG4gIFByb21pc2UucmFjZShbYWpheCgnZm9vLmpzb24nKSwgdGltZW91dCg1MDAwKV0pXG4gIGBgYFxuXG4gIEBtZXRob2QgcmFjZVxuICBAc3RhdGljXG4gIEBwYXJhbSB7QXJyYXl9IHByb21pc2VzIGFycmF5IG9mIHByb21pc2VzIHRvIG9ic2VydmVcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2Ugd2hpY2ggc2V0dGxlcyBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlIGZpcnN0IHBhc3NlZFxuICBwcm9taXNlIHRvIHNldHRsZS5cbiovXG5mdW5jdGlvbiByYWNlKGVudHJpZXMpIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICBpZiAoIWlzQXJyYXkoZW50cmllcykpIHtcbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIChfLCByZWplY3QpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQ29uc3RydWN0b3IucmVzb2x2ZShlbnRyaWVzW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gIGBQcm9taXNlLnJlamVjdGAgcmV0dXJucyBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCB0aGUgcGFzc2VkIGByZWFzb25gLlxuICBJdCBpcyBzaG9ydGhhbmQgZm9yIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgcmVqZWN0KG5ldyBFcnJvcignV0hPT1BTJykpO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAnV0hPT1BTJ1xuICB9KTtcbiAgYGBgXG5cbiAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAnV0hPT1BTJ1xuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCByZWplY3RcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FueX0gcmVhc29uIHZhbHVlIHRoYXQgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZCB3aXRoLlxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIHRoZSBnaXZlbiBgcmVhc29uYC5cbiovXG5mdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG4gIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuICBfcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBuZWVkc1Jlc29sdmVyKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG59XG5cbmZ1bmN0aW9uIG5lZWRzTmV3KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xufVxuXG4vKipcbiAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cbiAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgVGVybWlub2xvZ3lcbiAgLS0tLS0tLS0tLS1cblxuICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cbiAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG4gIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cbiAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG4gIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcbiAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cbiAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3NcbiAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG4gIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuICBCYXNpYyBVc2FnZTpcbiAgLS0tLS0tLS0tLS0tXG5cbiAgYGBganNcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBvbiBzdWNjZXNzXG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICAvLyBvbiBmYWlsdXJlXG4gICAgcmVqZWN0KHJlYXNvbik7XG4gIH0pO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgIC8vIG9uIHJlamVjdGlvblxuICB9KTtcbiAgYGBgXG5cbiAgQWR2YW5jZWQgVXNhZ2U6XG4gIC0tLS0tLS0tLS0tLS0tLVxuXG4gIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cbiAgYGBganNcbiAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgLy8gb24gcmVqZWN0aW9uXG4gIH0pO1xuICBgYGBcblxuICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG4gIGBgYGpzXG4gIFByb21pc2UuYWxsKFtcbiAgICBnZXRKU09OKCcvcG9zdHMnKSxcbiAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG4gICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH0pO1xuICBgYGBcblxuICBAY2xhc3MgUHJvbWlzZVxuICBAcGFyYW0ge2Z1bmN0aW9ufSByZXNvbHZlclxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEBjb25zdHJ1Y3RvclxuKi9cbmZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgdGhpc1tQUk9NSVNFX0lEXSA9IG5leHRJZCgpO1xuICB0aGlzLl9yZXN1bHQgPSB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuICBpZiAobm9vcCAhPT0gcmVzb2x2ZXIpIHtcbiAgICB0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicgJiYgbmVlZHNSZXNvbHZlcigpO1xuICAgIHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlID8gaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpIDogbmVlZHNOZXcoKTtcbiAgfVxufVxuXG5Qcm9taXNlLmFsbCA9IGFsbDtcblByb21pc2UucmFjZSA9IHJhY2U7XG5Qcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuUHJvbWlzZS5yZWplY3QgPSByZWplY3Q7XG5Qcm9taXNlLl9zZXRTY2hlZHVsZXIgPSBzZXRTY2hlZHVsZXI7XG5Qcm9taXNlLl9zZXRBc2FwID0gc2V0QXNhcDtcblByb21pc2UuX2FzYXAgPSBhc2FwO1xuXG5Qcm9taXNlLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFByb21pc2UsXG5cbiAgLyoqXG4gICAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gICAgd2hpY2ggcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGVcbiAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuICAgICAgLy8gdXNlciBpcyBhdmFpbGFibGVcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQ2hhaW5pbmdcbiAgICAtLS0tLS0tLVxuICBcbiAgICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICAgIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9taXNlJ3MgZnVsZmlsbG1lbnRcbiAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAgXG4gICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHJldHVybiB1c2VyLm5hbWU7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2BcbiAgICB9KTtcbiAgXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgICAgLy8gSWYgYGZpbmRVc2VyYCByZWplY3RlZCwgYHJlYXNvbmAgd2lsbCBiZSAnYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScuXG4gICAgfSk7XG4gICAgYGBgXG4gICAgSWYgdGhlIGRvd25zdHJlYW0gcHJvbWlzZSBkb2VzIG5vdCBzcGVjaWZ5IGEgcmVqZWN0aW9uIGhhbmRsZXIsIHJlamVjdGlvbiByZWFzb25zIHdpbGwgYmUgcHJvcGFnYXRlZCBmdXJ0aGVyIGRvd25zdHJlYW0uXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIEFzc2ltaWxhdGlvblxuICAgIC0tLS0tLS0tLS0tLVxuICBcbiAgICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICAgIHJldHJpZXZlZCBhc3luY2hyb25vdXNseS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmV0dXJuaW5nIGEgcHJvbWlzZSBpbiB0aGVcbiAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICAgIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIGZ1bGZpbGxzLCB3ZSdsbCBoYXZlIHRoZSB2YWx1ZSBoZXJlXG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBTaW1wbGUgRXhhbXBsZVxuICAgIC0tLS0tLS0tLS0tLS0tXG4gIFxuICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcbiAgXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCByZXN1bHQ7XG4gIFxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBmaW5kUmVzdWx0KCk7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9XG4gICAgYGBgXG4gIFxuICAgIEVycmJhY2sgRXhhbXBsZVxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9XG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIFByb21pc2UgRXhhbXBsZTtcbiAgXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQWR2YW5jZWQgRXhhbXBsZVxuICAgIC0tLS0tLS0tLS0tLS0tXG4gIFxuICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcbiAgXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBhdXRob3IsIGJvb2tzO1xuICBcbiAgICB0cnkge1xuICAgICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgICAgYm9va3MgID0gZmluZEJvb2tzQnlBdXRob3IoYXV0aG9yKTtcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH1cbiAgICBgYGBcbiAgXG4gICAgRXJyYmFjayBFeGFtcGxlXG4gIFxuICAgIGBgYGpzXG4gIFxuICAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcbiAgXG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuICBcbiAgICB9XG4gIFxuICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvdW5kQm9va3MoYm9va3MpO1xuICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH1cbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgUHJvbWlzZSBFeGFtcGxlO1xuICBcbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgZmluZEF1dGhvcigpLlxuICAgICAgdGhlbihmaW5kQm9va3NCeUF1dGhvcikuXG4gICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgICAgLy8gZm91bmQgYm9va3NcbiAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQG1ldGhvZCB0aGVuXG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gb25GdWxmaWxsZWRcbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICovXG4gIHRoZW46IHRoZW4sXG5cbiAgLyoqXG4gICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgIGFzIHRoZSBjYXRjaCBibG9jayBvZiBhIHRyeS9jYXRjaCBzdGF0ZW1lbnQuXG4gIFxuICAgIGBgYGpzXG4gICAgZnVuY3Rpb24gZmluZEF1dGhvcigpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgfVxuICBcbiAgICAvLyBzeW5jaHJvbm91c1xuICAgIHRyeSB7XG4gICAgICBmaW5kQXV0aG9yKCk7XG4gICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgfVxuICBcbiAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBAbWV0aG9kIGNhdGNoXG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3Rpb25cbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQHJldHVybiB7UHJvbWlzZX1cbiAgKi9cbiAgJ2NhdGNoJzogZnVuY3Rpb24gX2NhdGNoKG9uUmVqZWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIHZhciBsb2NhbCA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsb2NhbCA9IGdsb2JhbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBsb2NhbCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvY2FsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBQID0gbG9jYWwuUHJvbWlzZTtcblxuICAgIGlmIChQKSB7XG4gICAgICAgIHZhciBwcm9taXNlVG9TdHJpbmcgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcHJvbWlzZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFAucmVzb2x2ZSgpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gc2lsZW50bHkgaWdub3JlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb21pc2VUb1N0cmluZyA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nICYmICFQLmNhc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvY2FsLlByb21pc2UgPSBQcm9taXNlO1xufVxuXG5wb2x5ZmlsbCgpO1xuLy8gU3RyYW5nZSBjb21wYXQuLlxuUHJvbWlzZS5wb2x5ZmlsbCA9IHBvbHlmaWxsO1xuUHJvbWlzZS5Qcm9taXNlID0gUHJvbWlzZTtcblxucmV0dXJuIFByb21pc2U7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lczYtcHJvbWlzZS5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lczYtcHJvbWlzZS9kaXN0L2VzNi1wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyogKGlnbm9yZWQpICovXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gdmVydHggKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogIExvYWQgSWNvbnMgQVNZTkNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJY29ucyhjYikge1xuICAgIHZhciBzaXRlVXJsID0gc3VwZXJza3J5cHQuYXNzZXRzVXJsO1xuICAgIHZhciBzdmd1cmwgPSBzaXRlVXJsICsgJy9zdmcvaWNvbnMuc3ZnJztcbiAgICBjb25zb2xlLmxvZyggc3ZndXJsICk7XG4gICAgdmFyIGMgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjLm9wZW4oJ0dFVCcsIHN2Z3VybCwgdHJ1ZSk7XG4gICAgYy5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC94bWwnKTtcbiAgICBjLnNlbmQoKTtcblxuICAgIGMub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKGMucmVhZHlTdGF0ZT09NCAmJiBjLnN0YXR1cz09MjAwKXtcbiAgICAgICAgICAgIHZhciBzdmcgPSBjLnJlc3BvbnNlWE1MLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKVswXTtcbiAgICAgICAgICAgIHN2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICBzdmcuc3R5bGUubWFyZ2luTGVmdCA9ICctMTAwJSc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShzdmcsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Ac3VwZXJza3J5cHQvc3V0aWxzL3NyYy9sb2FkSWNvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXNlKHZhbHVlLCB0eXBlKXtcblx0c3dpdGNoKHR5cGUpe1xuXHRcdGNhc2UgJ3RlbCc6XG5cblx0XHRcdC8vIGZpcnN0IGxldCdzIHJlcGxhY2Ugc2lnbnMgYW5kIHNwYWNlcztcblx0XHRcdGxldCB2YWwgPSB2YWx1ZS5yZXBsYWNlKC8tfFxcKHxcXCl8XFxzL2csICcnKTtcblxuXHRcdFx0Ly8gdGhlbiBsZXQncyBub3JtYWxpc2UgY291bnRyeSBjb2RlIChyZW1vdmUgaXQgaW4gdGhpcyBjYXNlKVxuXHRcdFx0aWYgKHZhbC5pbmRleE9mKCcwMCcpID09IDApIHZhbCA9IHZhbC5yZXBsYWNlKCcwMCcsJycpO1xuXHRcdFx0aWYgKHZhbC5pbmRleE9mKCcwJykgPT0gMCkgdmFsID0gdmFsLnJlcGxhY2UoJzAnLCcnKTtcblx0XHRcdGlmICh2YWwuaW5kZXhPZignKzQ4JykgPT0gMCkgdmFsID0gdmFsLnJlcGxhY2UoJys0OCcsJycpO1xuXG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Ac3VwZXJza3J5cHQvc3V0aWxzL3NyYy9ub3JtYWxpc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgRXZlbnRRdWV1ZSBmcm9tICcuL2V2ZW50UXVldWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvblJlc2l6ZSBleHRlbmRzIEV2ZW50UXVldWUge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICBzdXBlcigpO1xuICAgIHRoaXMudGhyb3R0bGVUaW1lID0gMjAwO1xuXG4gICAgdGhpcy5saXN0ZW5lcigpO1xuXG4gIH1cblxuICBsaXN0ZW5lcigpe1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcblxuICAgICAgLy8gdGhyb3R0bGUgdGhlIGV2ZW50c1xuICAgICAgdXRpbHMuZGVib3VuY2UoICgpID0+IHtcblxuICAgICAgICB0aGlzLnJ1bigpO1xuXG4gICAgICB9LCB0aGlzLnRocm90dGxlVGltZSwgXCJyZXNpemVyRnVuY1wiKTsgXG5cbiAgICB9KTtcblxuXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Ac3VwZXJza3J5cHQvc3V0aWxzL3NyYy9vblJlc2l6ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBnZXRFbCwgZ2V0RWxzLCBmb3JFYWNoIH0gZnJvbSAnQHN1cGVyc2tyeXB0L3N1dGlscyc7XG5cbmZvckVhY2goZ2V0RWxzKCcucGhhc2VzLS1waGFzZScpLCBlbCA9PiBlbC5vbmNsaWNrID0gb25QaGFzZUNsaWNrKTtcblxuZnVuY3Rpb24gb25QaGFzZUNsaWNrKCkge1xuICAgIHZhciBwaGFzZSA9IHRoaXMuZGF0YXNldC5waGFzZVxuICAgIHZhciBvbGRBY3RpdmVQaGFzZSA9IGdldEFjdGl2ZVBoYXNlKCk7XG4gICAgaWYgKCFvbGRBY3RpdmVQaGFzZSB8fCBvbGRBY3RpdmVQaGFzZS5kYXRhc2V0LnBoYXNlICE9IHBoYXNlKSB7XG4gICAgICAgIGFjdGl2YXRlUGhhc2UocGhhc2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlUGhhc2UocGhhc2UsIGRlbGF5UGxhY2VBbmltYXRpb24gPSAwKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZvckVhY2goZ2V0RWxzKCcucGhhc2VzLS1waGFzZScpLCBlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgIGdldEVsKGAucGhhc2VzLS1waGFzZVtkYXRhLXBoYXNlPScke3BoYXNlfSddYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgICAgICBzaG93UG9pbnRzKHBoYXNlKVxuICAgICAgICBzaG93RGFzaGJvYXJkKHBoYXNlKVxuXG4gICAgICAgIC8vIEZJWE1FXG4gICAgICAgIGdldEVsKCcuZGV0YWlscycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBnZXRFbCgnLmRldGFpbHMnKS5kYXRhc2V0LmFjdGl2ZSA9ICcnO1xuICAgICAgICB2YXIgbWFwUGxhY2VBY3RpdmUgPSBnZXRFbCgnLm1hcC0tcGxhY2VfX2FjdGl2ZScpXG4gICAgICAgIGlmIChtYXBQbGFjZUFjdGl2ZSkgbWFwUGxhY2VBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnbWFwLS1wbGFjZV9fYWN0aXZlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9Pmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIGAjJHtnZXRBY3RpdmVQaGFzZSgpLmRhdGFzZXQucGhhc2VOYW1lfWApLCAxMDApO1xuXG4gICAgfSwgZGVsYXlQbGFjZUFuaW1hdGlvbik7XG4gICAgYW5pbWF0ZU1hcChwaGFzZSlcbn1cblxuZnVuY3Rpb24gc2hvd0Rhc2hib2FyZChwaGFzZSkge1xuICAgIGZvckVhY2goZ2V0RWxzKCcuZGFzaGJvYXJkLS1waGFzZScpLCBlbCA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfSlcblxuICAgIGdldEVsKGAuZGFzaGJvYXJkLS1waGFzZVtkYXRhLXBoYXNlPScke3BoYXNlfSddYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbn1cblxuZnVuY3Rpb24gc2hvd1BvaW50cyhwaGFzZSkge1xuICAgIGZvckVhY2goZ2V0RWxzKCcubWFwLS1waGFzZScpLCBlbCA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUV4aXQnKVxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVFbnRyeScpXG4gICAgfSlcblxuICAgIGdldEVsKGAubWFwLS1waGFzZVtkYXRhLXBoYXNlPScke3BoYXNlLTF9J11gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVFeGl0JylcbiAgICBnZXRFbChgLm1hcC0tcGhhc2VbZGF0YS1waGFzZT0nJHtwaGFzZX0nXWApLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUVudHJ5JylcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZU1hcChwaGFzZSkge1xuICAgIHN3aXRjaCAocGhhc2UpIHtcbiAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBnZXRTY2FsZSg1MDAwLCAxNTAwKTtcbiAgICAgICAgICAgIHZhciBjZW50ZXIgPSB7IHg6IC0xMCwgeTogMCB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgdmFyIHNjYWxlID0gZ2V0U2NhbGUoODAwLCAzMDApO1xuICAgICAgICAgICAgdmFyIGNlbnRlciA9IHt4Oi0zNSwgeTotMzB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBnZXRTY2FsZSgxMDAwLCA1MDApO1xuICAgICAgICAgICAgdmFyIGNlbnRlciA9IHt4Oi0yOCwgeTotMjd9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBnZXRTY2FsZSg2NTAsIDQwMCk7XG4gICAgICAgICAgICB2YXIgY2VudGVyID0ge3g6LTI4LCB5Oi0xNX1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICc1JzpcbiAgICAgICAgICAgIHZhciBzY2FsZSA9IGdldFNjYWxlKDUwMDAsIDE1MDApO1xuICAgICAgICAgICAgdmFyIGNlbnRlciA9IHt4Oi0xMywgeTowfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIG1hcCA9IGdldEVsKCcubWFwJyk7XG4gICAgbWFwLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlfSkgdHJhbnNsYXRlKCR7LTUwLWNlbnRlci54fSUsICR7LTUwLWNlbnRlci55fSUpYFxuICAgIG1hcC5zdHlsZS5mb250U2l6ZSA9IGBjYWxjKDFlbSAvICR7c2NhbGV9KWBcbn1cblxuZnVuY3Rpb24gZ2V0U2NhbGUodmlzaWJsZVcsIHZpc2libGVIKSB7XG4gICAgdmFyIHNjYWxlWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gdmlzaWJsZVc7XG4gICAgdmFyIHNjYWxlWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIHZpc2libGVIO1xuXG4gICAgcmV0dXJuIE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpO1xuXG5mdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgICB2YXIgYWN0aXZlUGhhc2UgPSBnZXRBY3RpdmVQaGFzZSgpO1xuICAgIGlmIChhY3RpdmVQaGFzZSkgYW5pbWF0ZU1hcChhY3RpdmVQaGFzZS5kYXRhc2V0LnBoYXNlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlUGhhc2UoKSB7XG4gICAgcmV0dXJuIGdldEVsKCcucGhhc2VzLS1waGFzZS5hY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0aHMoKSB7XG4gICAgY3JlYXRlUGF0aHNGb3JQaGFzZSgyKVxuICAgIGNyZWF0ZVBhdGhzRm9yUGhhc2UoMylcbiAgICBjcmVhdGVQYXRoc0ZvclBoYXNlKDQpXG4gICAgY3JlYXRlUGF0aHNGb3JQaGFzZSg1KVxufVxuZnVuY3Rpb24gY3JlYXRlUGF0aHNGb3JQaGFzZShwaGFzZSkge1xuICAgIHZhciBmcm9tcyA9IGdldEVscyhgLm1hcC0tcGhhc2VbZGF0YS1waGFzZT0nJHtwaGFzZS0xfSddIC5tYXAtLXBsYWNlYClcbiAgICB2YXIgdG9zID0gZ2V0RWxzKGAubWFwLS1waGFzZVtkYXRhLXBoYXNlPScke3BoYXNlfSddIC5tYXAtLXBsYWNlYClcbiAgICBmb3JFYWNoKGZyb21zLCBjcmVhdGVQYXRoc0ZvckV4aXQodG9zKSlcbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhdGhzRm9yRXhpdCh0b3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGZyb20pIHtcbiAgICAgICAgZm9yRWFjaCh0b3MsIHRvID0+IHtcbiAgICAgICAgICAgIGZyb20uYXBwZW5kQ2hpbGQoY3JlYXRlUGF0aEVsZW1lbnQoZnJvbSwgdG8pKVxuICAgICAgICB9KVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhdGhFbGVtZW50KGZyb20sIHRvKSB7XG4gICAgdmFyIHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHBhdGguY2xhc3NMaXN0LmFkZCgnbWFwLS1wYXRoJylcblxuICAgIHZhciBvZmZzZXRUb3AgPSB0by5vZmZzZXRUb3AgLSBmcm9tLm9mZnNldFRvcFxuICAgIHZhciBvZmZzZXRMZWZ0ID0gdG8ub2Zmc2V0TGVmdCAtIGZyb20ub2Zmc2V0TGVmdFxuICAgIHZhciBkZWcgPSBNYXRoLmF0YW4yKG9mZnNldFRvcCwgb2Zmc2V0TGVmdCkgKiAxODAgLyBNYXRoLlBJXG4gICAgdmFyIGRpc3QgPSBNYXRoLnNxcnQob2Zmc2V0VG9wICogb2Zmc2V0VG9wICsgb2Zmc2V0TGVmdCAqIG9mZnNldExlZnQpXG4gICAgcGF0aC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7ZGVnfWRlZykgdHJhbnNsYXRlKDAsIC01MCUpYFxuICAgIHBhdGguc3R5bGUud2lkdGggPSBgJHtkaXN0IC0gdG8ub2Zmc2V0V2lkdGgvMiAtIDI4fXB4YFxuICAgIHBhdGguc3R5bGUuaGVpZ2h0ID0gZnJvbS5zdHlsZS53aWR0aFxuICAgIHJldHVybiBwYXRoXG59XG5jcmVhdGVQYXRocygpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlcy9tYXAuanMiLCJpbXBvcnQgXCIuL21vZHVsZXMvbWFwLmpzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvZGV0YWlscy5qc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2V2ZW50QnVzLmpzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvYXVkaW8uanNcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9pbnRyby5qc1wiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21hcC5qcyIsImltcG9ydCB7IGdldEVsLCBnZXRFbHMsIGZvckVhY2ggfSBmcm9tICdAc3VwZXJza3J5cHQvc3V0aWxzJztcbmltcG9ydCBTaWVtYSBmcm9tICdzaWVtYSc7XG5cbmZvckVhY2goZ2V0RWxzKCcubWFwLS1wbGFjZScpLCBlID0+IGUub25jbGljayA9IG9uTWFwUGxhY2VDbGljayk7XG5nZXRFbCgnLmRldGFpbHMtLWhpZGUnKS5vbmNsaWNrID0gZGV0YWlsc0Nsb3NlO1xuXG5mdW5jdGlvbiBvbk1hcFBsYWNlQ2xpY2soKSB7XG4gICAgdmFyIGxpbmsgPSB0aGlzLmRhdGFzZXQubGluaztcblxuICAgIGlmIChpc0RldGFpbHNPcGVuRm9yUG9pbnQobGluaykpIHtcbiAgICAgICAgZGV0YWlsc0Nsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVFbnRyeScpID8gJ2VudHJ5JyA6ICdleGl0JztcblxuICAgICAgICBpZiAoaXNEZXRhaWxzT3BlbigpKSBkZXRhaWxzQ2xvc2UoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkZXRhaWxzT3BlbihsaW5rLCB0eXBlKSwgMzAwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRldGFpbHNDbG9zZSgpIHtcbiAgICBnZXRFbCgnLmRldGFpbHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBnZXRFbCgnLmRldGFpbHMnKS5kYXRhc2V0LmFjdGl2ZSA9ICcnO1xuICAgIGxldCBhY3RpdmVQbGFjZSA9IGdldEVsKCcubWFwLS1wbGFjZV9fYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZVBsYWNlKSBhY3RpdmVQbGFjZS5jbGFzc0xpc3QucmVtb3ZlKCdtYXAtLXBsYWNlX19hY3RpdmUnKTtcbiAgICBsZXQgbmV3TG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnIycpWzFdO1xuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIGAjJHtuZXdMb2NhdGlvbn1gKTtcbn1cblxuZnVuY3Rpb24gZGV0YWlsc09wZW4obGluaywgdHlwZSkge1xuICAgIGdldEVsKCcuZGV0YWlscycpLmRhdGFzZXQuYWN0aXZlID0gbGluaztcbiAgICBnZXRFbCgnLmRldGFpbHMnKS5kYXRhc2V0LnR5cGUgPSB0eXBlO1xuICAgIHZhciBvbGRBY3RpdmUgPSBnZXRFbCgnLm1hcC0tcGxhY2VfX2FjdGl2ZScpO1xuICAgIGlmIChvbGRBY3RpdmUpIG9sZEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdtYXAtLXBsYWNlX19hY3RpdmUnKTtcbiAgICBnZXRFbChgLm1hcC0tcGxhY2VbZGF0YS1saW5rPVwiJHtsaW5rfVwiXWApLmNsYXNzTGlzdC5hZGQoJ21hcC0tcGxhY2VfX2FjdGl2ZScpO1xuXG4gICAgZ2V0RWwoJy5kZXRhaWxzLS1jb250ZW50JykuaW5uZXJIVE1MID0gcGxhY2VzRGV0YWlsc1tsaW5rXTtcbiAgICBldmVudEJ1cy50cmlnZ2VyKCdhdWRpbzpyZWdpc3RlcicpO1xuXG4gICAgZ2V0RWwoJy5kZXRhaWxzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgZ2V0RWwoJy5kZXRhaWxzJykuc2Nyb2xsVG8oMCwgMCk7XG5cbiAgICBmb3JFYWNoKGdldEVscygnLmRldGFpbHMuYWN0aXZlIC5kZXRhaWxzLS1nYWxsZXJ5JyksIGdhbGxlcnkgPT4ge1xuICAgICAgICB2YXIgc2llbWEgPSBuZXcgU2llbWEoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IGdldEVsKCcuZGV0YWlscy0tZ2FsbGVyeS0tY29udGVudCcsIGdhbGxlcnkpLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIHBlclBhZ2U6IDEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdldEVsKCcuZGV0YWlscy0tZ2FsbGVyeS0tcHJldmlvdXMnLCBnYWxsZXJ5KS5vbmNsaWNrID0gKCkgPT4gc2llbWEucHJldigpO1xuICAgICAgICBnZXRFbCgnLmRldGFpbHMtLWdhbGxlcnktLW5leHQnLCBnYWxsZXJ5KS5vbmNsaWNrID0gKCkgPT4gc2llbWEubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcjJykubGVuZ3RoID09IDIpIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgd2luZG93LmxvY2F0aW9uLmhhc2ggKyBgIyR7bGluay5zcGxpdCgnLycpWzJdfWApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNEZXRhaWxzT3BlbkZvclBvaW50KGxpbmspIHtcbiAgICByZXR1cm4gZ2V0RWwoJy5kZXRhaWxzJykuZGF0YXNldC5hY3RpdmUgPT0gbGluaztcbn1cbmZ1bmN0aW9uIGlzRGV0YWlsc09wZW4oKSB7XG4gICAgcmV0dXJuIGdldEVsKCcuZGV0YWlscycpLmRhdGFzZXQuYWN0aXZlICE9IFwiXCI7XG59XG5cbmZvckVhY2goZ2V0RWxzKCcubWFwLS1wbGFjZScpLCBnZXREZXRhaWxzRm9yUGxhY2UpO1xuXG53aW5kb3cucGxhY2VzRGV0YWlscyA9IHt9O1xuXG5mdW5jdGlvbiBnZXREZXRhaWxzRm9yUGxhY2UoZWwpIHtcbiAgICB2YXIgbGluayA9IGVsLmRhdGFzZXQubGluaztcblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBsaW5rLCB0cnVlKTtcblxuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgIHZhciByZXNwID0gcmVxdWVzdC5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICBwbGFjZXNEZXRhaWxzW2xpbmtdID0gcmVzcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgfTtcblxuICAgIHJlcXVlc3Quc2VuZCgpO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlcy9kZXRhaWxzLmpzIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJTaWVtYVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuU2llbWE9dCgpOmUuU2llbWE9dCgpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihpW3JdKXJldHVybiBpW3JdLmV4cG9ydHM7dmFyIG49aVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sPSEwLG4uZXhwb3J0c312YXIgaT17fTtyZXR1cm4gdC5tPWUsdC5jPWksdC5kPWZ1bmN0aW9uKGUsaSxyKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciByPXRbaV07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxpLHIpe3JldHVybiBpJiZlKHQucHJvdG90eXBlLGkpLHImJmUodCxyKSx0fX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXt2YXIgaT10aGlzO2lmKHIodGhpcyxlKSx0aGlzLmNvbmZpZz1lLm1lcmdlU2V0dGluZ3ModCksdGhpcy5zZWxlY3Rvcj1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5jb25maWcuc2VsZWN0b3I/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5zZWxlY3Rvcik6dGhpcy5jb25maWcuc2VsZWN0b3IsbnVsbD09PXRoaXMuc2VsZWN0b3IpdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdyb25nIHdpdGggeW91ciBzZWxlY3RvciDwn5itXCIpO3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuaW5uZXJFbGVtZW50cz1bXS5zbGljZS5jYWxsKHRoaXMuc2VsZWN0b3IuY2hpbGRyZW4pLHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY29uZmlnLmxvb3A/dGhpcy5jb25maWcuc3RhcnRJbmRleCV0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoOk1hdGgubWF4KDAsTWF0aC5taW4odGhpcy5jb25maWcuc3RhcnRJbmRleCx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZSkpLHRoaXMudHJhbnNmb3JtUHJvcGVydHk9ZS53ZWJraXRPck5vdCgpLFtcInJlc2l6ZUhhbmRsZXJcIixcInRvdWNoc3RhcnRIYW5kbGVyXCIsXCJ0b3VjaGVuZEhhbmRsZXJcIixcInRvdWNobW92ZUhhbmRsZXJcIixcIm1vdXNlZG93bkhhbmRsZXJcIixcIm1vdXNldXBIYW5kbGVyXCIsXCJtb3VzZWxlYXZlSGFuZGxlclwiLFwibW91c2Vtb3ZlSGFuZGxlclwiLFwiY2xpY2tIYW5kbGVyXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7aVtlXT1pW2VdLmJpbmQoaSl9KSx0aGlzLmluaXQoKX1yZXR1cm4gcyhlLFt7a2V5OlwiYXR0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5jb25maWcuZHJhZ2dhYmxlJiYodGhpcy5wb2ludGVyRG93bj0hMSx0aGlzLmRyYWc9e3N0YXJ0WDowLGVuZFg6MCxzdGFydFk6MCxsZXRJdEdvOm51bGwscHJldmVudENsaWNrOiExfSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy50b3VjaHN0YXJ0SGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIix0aGlzLnRvdWNoZW5kSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsdGhpcy50b3VjaG1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0aGlzLm1vdXNlZG93bkhhbmRsZXIpLHRoaXMuc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIix0aGlzLm1vdXNldXBIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsdGhpcy5tb3VzZWxlYXZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZW1vdmVIYW5kbGVyKSx0aGlzLnNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2tIYW5kbGVyKSl9fSx7a2V5OlwiZGV0YWNoRXZlbnRzXCIsdmFsdWU6ZnVuY3Rpb24oKXt3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHRoaXMucmVzaXplSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMudG91Y2hzdGFydEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsdGhpcy50b3VjaGVuZEhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMudG91Y2htb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdGhpcy5tb3VzZWRvd25IYW5kbGVyKSx0aGlzLnNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsdGhpcy5tb3VzZXVwSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLHRoaXMubW91c2VsZWF2ZUhhbmRsZXIpLHRoaXMuc2VsZWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMubW91c2Vtb3ZlSGFuZGxlciksdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrSGFuZGxlcil9fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5hdHRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCIsdGhpcy5zZWxlY3Rvci5zdHlsZS5kaXJlY3Rpb249dGhpcy5jb25maWcucnRsP1wicnRsXCI6XCJsdHJcIix0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSx0aGlzLmNvbmZpZy5vbkluaXQuY2FsbCh0aGlzKX19LHtrZXk6XCJidWlsZFNsaWRlckZyYW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlLHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlOnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7dGhpcy5zbGlkZXJGcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2lkdGg9ZSp0K1wicHhcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmNvbmZpZy5kcmFnZ2FibGUmJih0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cIi13ZWJraXQtZ3JhYlwiKTt2YXIgaT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYodGhpcy5jb25maWcubG9vcClmb3IodmFyIHI9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2U7cjx0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3IrKyl7dmFyIG49dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbcl0uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChuKX1mb3IodmFyIHM9MDtzPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cysrKXt2YXIgbD10aGlzLmJ1aWxkU2xpZGVyRnJhbWVJdGVtKHRoaXMuaW5uZXJFbGVtZW50c1tzXSk7aS5hcHBlbmRDaGlsZChsKX1pZih0aGlzLmNvbmZpZy5sb29wKWZvcih2YXIgbz0wO288dGhpcy5wZXJQYWdlO28rKyl7dmFyIGE9dGhpcy5idWlsZFNsaWRlckZyYW1lSXRlbSh0aGlzLmlubmVyRWxlbWVudHNbb10uY2xvbmVOb2RlKCEwKSk7aS5hcHBlbmRDaGlsZChhKX10aGlzLnNsaWRlckZyYW1lLmFwcGVuZENoaWxkKGkpLHRoaXMuc2VsZWN0b3IuaW5uZXJIVE1MPVwiXCIsdGhpcy5zZWxlY3Rvci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlckZyYW1lKSx0aGlzLnNsaWRlVG9DdXJyZW50KCl9fSx7a2V5OlwiYnVpbGRTbGlkZXJGcmFtZUl0ZW1cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LnN0eWxlLmNzc0Zsb2F0PXRoaXMuY29uZmlnLnJ0bD9cInJpZ2h0XCI6XCJsZWZ0XCIsdC5zdHlsZS5mbG9hdD10aGlzLmNvbmZpZy5ydGw/XCJyaWdodFwiOlwibGVmdFwiLHQuc3R5bGUud2lkdGg9KHRoaXMuY29uZmlnLmxvb3A/MTAwLyh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoKzIqdGhpcy5wZXJQYWdlKToxMDAvdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCkrXCIlXCIsdC5hcHBlbmRDaGlsZChlKSx0fX0se2tleTpcInJlc29sdmVTbGlkZXNOdW1iZXJcIix2YWx1ZTpmdW5jdGlvbigpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLmNvbmZpZy5wZXJQYWdlKXRoaXMucGVyUGFnZT10aGlzLmNvbmZpZy5wZXJQYWdlO2Vsc2UgaWYoXCJvYmplY3RcIj09PW4odGhpcy5jb25maWcucGVyUGFnZSkpe3RoaXMucGVyUGFnZT0xO2Zvcih2YXIgZSBpbiB0aGlzLmNvbmZpZy5wZXJQYWdlKXdpbmRvdy5pbm5lcldpZHRoPj1lJiYodGhpcy5wZXJQYWdlPXRoaXMuY29uZmlnLnBlclBhZ2VbZV0pfX19LHtrZXk6XCJwcmV2XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06MSx0PWFyZ3VtZW50c1sxXTtpZighKHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg8PXRoaXMucGVyUGFnZSkpe3ZhciBpPXRoaXMuY3VycmVudFNsaWRlO2lmKHRoaXMuY29uZmlnLmxvb3Ape2lmKHRoaXMuY3VycmVudFNsaWRlLWU8MCl7dGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO3ZhciByPXRoaXMuY3VycmVudFNsaWRlK3RoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgsbj10aGlzLnBlclBhZ2Uscz1yK24sbD0odGhpcy5jb25maWcucnRsPzE6LTEpKnMqKHRoaXMuc2VsZWN0b3JXaWR0aC90aGlzLnBlclBhZ2UpLG89dGhpcy5jb25maWcuZHJhZ2dhYmxlP3RoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFg6MDt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKGwrbykrXCJweCwgMCwgMClcIix0aGlzLmN1cnJlbnRTbGlkZT1yLWV9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmN1cnJlbnRTbGlkZS1lfWVsc2UgdGhpcy5jdXJyZW50U2xpZGU9TWF0aC5tYXgodGhpcy5jdXJyZW50U2xpZGUtZSwwKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwibmV4dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjEsdD1hcmd1bWVudHNbMV07aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTtpZih0aGlzLmNvbmZpZy5sb29wKXtpZih0aGlzLmN1cnJlbnRTbGlkZStlPnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKXt0aGlzLmRpc2FibGVUcmFuc2l0aW9uKCk7dmFyIHI9dGhpcy5jdXJyZW50U2xpZGUtdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCxuPXRoaXMucGVyUGFnZSxzPXIrbixsPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqcyoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSksbz10aGlzLmNvbmZpZy5kcmFnZ2FibGU/dGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WDowO3RoaXMuc2xpZGVyRnJhbWUuc3R5bGVbdGhpcy50cmFuc2Zvcm1Qcm9wZXJ0eV09XCJ0cmFuc2xhdGUzZChcIisobCtvKStcInB4LCAwLCAwKVwiLHRoaXMuY3VycmVudFNsaWRlPXIrZX1lbHNlIHRoaXMuY3VycmVudFNsaWRlPXRoaXMuY3VycmVudFNsaWRlK2V9ZWxzZSB0aGlzLmN1cnJlbnRTbGlkZT1NYXRoLm1pbih0aGlzLmN1cnJlbnRTbGlkZStlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKTtpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KHRoaXMuY29uZmlnLmxvb3ApLHRoaXMuY29uZmlnLm9uQ2hhbmdlLmNhbGwodGhpcyksdCYmdC5jYWxsKHRoaXMpKX19fSx7a2V5OlwiZGlzYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nLHRoaXMuc2xpZGVyRnJhbWUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwbXMgXCIrdGhpcy5jb25maWcuZWFzaW5nfX0se2tleTpcImVuYWJsZVRyYW5zaXRpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2xpZGVyRnJhbWUuc3R5bGUud2Via2l0VHJhbnNpdGlvbj1cImFsbCBcIit0aGlzLmNvbmZpZy5kdXJhdGlvbitcIm1zIFwiK3RoaXMuY29uZmlnLmVhc2luZyx0aGlzLnNsaWRlckZyYW1lLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgXCIrdGhpcy5jb25maWcuZHVyYXRpb24rXCJtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmd9fSx7a2V5OlwiZ29Ub1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPD10aGlzLnBlclBhZ2UpKXt2YXIgaT10aGlzLmN1cnJlbnRTbGlkZTt0aGlzLmN1cnJlbnRTbGlkZT10aGlzLmNvbmZpZy5sb29wP2UldGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDpNYXRoLm1pbihNYXRoLm1heChlLDApLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgtdGhpcy5wZXJQYWdlKSxpIT09dGhpcy5jdXJyZW50U2xpZGUmJih0aGlzLnNsaWRlVG9DdXJyZW50KCksdGhpcy5jb25maWcub25DaGFuZ2UuY2FsbCh0aGlzKSx0JiZ0LmNhbGwodGhpcykpfX19LHtrZXk6XCJzbGlkZVRvQ3VycmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMsaT10aGlzLmNvbmZpZy5sb29wP3RoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZTp0aGlzLmN1cnJlbnRTbGlkZSxyPSh0aGlzLmNvbmZpZy5ydGw/MTotMSkqaSoodGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSk7ZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt0LmVuYWJsZVRyYW5zaXRpb24oKSx0LnNsaWRlckZyYW1lLnN0eWxlW3QudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifSl9KTp0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrcitcInB4LCAwLCAwKVwifX0se2tleTpcInVwZGF0ZUFmdGVyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9KHRoaXMuY29uZmlnLnJ0bD8tMToxKSoodGhpcy5kcmFnLmVuZFgtdGhpcy5kcmFnLnN0YXJ0WCksdD1NYXRoLmFicyhlKSxpPXRoaXMuY29uZmlnLm11bHRpcGxlRHJhZz9NYXRoLmNlaWwodC8odGhpcy5zZWxlY3RvcldpZHRoL3RoaXMucGVyUGFnZSkpOjEscj1lPjAmJnRoaXMuY3VycmVudFNsaWRlLWk8MCxuPWU8MCYmdGhpcy5jdXJyZW50U2xpZGUraT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoLXRoaXMucGVyUGFnZTtlPjAmJnQ+dGhpcy5jb25maWcudGhyZXNob2xkJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoPnRoaXMucGVyUGFnZT90aGlzLnByZXYoaSk6ZTwwJiZ0PnRoaXMuY29uZmlnLnRocmVzaG9sZCYmdGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aD50aGlzLnBlclBhZ2UmJnRoaXMubmV4dChpKSx0aGlzLnNsaWRlVG9DdXJyZW50KHJ8fG4pfX0se2tleTpcInJlc2l6ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZVNsaWRlc051bWJlcigpLHRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZT50aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoJiYodGhpcy5jdXJyZW50U2xpZGU9dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aDw9dGhpcy5wZXJQYWdlPzA6dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aC10aGlzLnBlclBhZ2UpLHRoaXMuc2VsZWN0b3JXaWR0aD10aGlzLnNlbGVjdG9yLm9mZnNldFdpZHRoLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpfX0se2tleTpcImNsZWFyRHJhZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kcmFnPXtzdGFydFg6MCxlbmRYOjAsc3RhcnRZOjAsbGV0SXRHbzpudWxsLHByZXZlbnRDbGljazp0aGlzLmRyYWcucHJldmVudENsaWNrfX19LHtrZXk6XCJ0b3VjaHN0YXJ0SGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpey0xIT09W1wiVEVYVEFSRUFcIixcIk9QVElPTlwiLFwiSU5QVVRcIixcIlNFTEVDVFwiXS5pbmRleE9mKGUudGFyZ2V0Lm5vZGVOYW1lKXx8KGUuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5wb2ludGVyRG93bj0hMCx0aGlzLmRyYWcuc3RhcnRYPWUudG91Y2hlc1swXS5wYWdlWCx0aGlzLmRyYWcuc3RhcnRZPWUudG91Y2hlc1swXS5wYWdlWSl9fSx7a2V5OlwidG91Y2hlbmRIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSExLHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpLHRoaXMuZHJhZy5lbmRYJiZ0aGlzLnVwZGF0ZUFmdGVyRHJhZygpLHRoaXMuY2xlYXJEcmFnKCl9fSx7a2V5OlwidG91Y2htb3ZlSGFuZGxlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUuc3RvcFByb3BhZ2F0aW9uKCksbnVsbD09PXRoaXMuZHJhZy5sZXRJdEdvJiYodGhpcy5kcmFnLmxldEl0R289TWF0aC5hYnModGhpcy5kcmFnLnN0YXJ0WS1lLnRvdWNoZXNbMF0ucGFnZVkpPE1hdGguYWJzKHRoaXMuZHJhZy5zdGFydFgtZS50b3VjaGVzWzBdLnBhZ2VYKSksdGhpcy5wb2ludGVyRG93biYmdGhpcy5kcmFnLmxldEl0R28pe2UucHJldmVudERlZmF1bHQoKSx0aGlzLmRyYWcuZW5kWD1lLnRvdWNoZXNbMF0ucGFnZVgsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlZG93bkhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXstMSE9PVtcIlRFWFRBUkVBXCIsXCJPUFRJT05cIixcIklOUFVUXCIsXCJTRUxFQ1RcIl0uaW5kZXhPZihlLnRhcmdldC5ub2RlTmFtZSl8fChlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSx0aGlzLnBvaW50ZXJEb3duPSEwLHRoaXMuZHJhZy5zdGFydFg9ZS5wYWdlWCl9fSx7a2V5OlwibW91c2V1cEhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmVuYWJsZVRyYW5zaXRpb24oKSx0aGlzLmRyYWcuZW5kWCYmdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpfX0se2tleTpcIm1vdXNlbW92ZUhhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksdGhpcy5wb2ludGVyRG93bil7XCJBXCI9PT1lLnRhcmdldC5ub2RlTmFtZSYmKHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITApLHRoaXMuZHJhZy5lbmRYPWUucGFnZVgsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJiaW5nXCIsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmcsdGhpcy5zbGlkZXJGcmFtZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDBtcyBcIit0aGlzLmNvbmZpZy5lYXNpbmc7dmFyIHQ9dGhpcy5jb25maWcubG9vcD90aGlzLmN1cnJlbnRTbGlkZSt0aGlzLnBlclBhZ2U6dGhpcy5jdXJyZW50U2xpZGUsaT10Kih0aGlzLnNlbGVjdG9yV2lkdGgvdGhpcy5wZXJQYWdlKSxyPXRoaXMuZHJhZy5lbmRYLXRoaXMuZHJhZy5zdGFydFgsbj10aGlzLmNvbmZpZy5ydGw/aStyOmktcjt0aGlzLnNsaWRlckZyYW1lLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJvcGVydHldPVwidHJhbnNsYXRlM2QoXCIrKHRoaXMuY29uZmlnLnJ0bD8xOi0xKSpuK1wicHgsIDAsIDApXCJ9fX0se2tleTpcIm1vdXNlbGVhdmVIYW5kbGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyRG93biYmKHRoaXMucG9pbnRlckRvd249ITEsdGhpcy5zZWxlY3Rvci5zdHlsZS5jdXJzb3I9XCItd2Via2l0LWdyYWJcIix0aGlzLmRyYWcuZW5kWD1lLnBhZ2VYLHRoaXMuZHJhZy5wcmV2ZW50Q2xpY2s9ITEsdGhpcy5lbmFibGVUcmFuc2l0aW9uKCksdGhpcy51cGRhdGVBZnRlckRyYWcoKSx0aGlzLmNsZWFyRHJhZygpKX19LHtrZXk6XCJjbGlja0hhbmRsZXJcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmRyYWcucHJldmVudENsaWNrJiZlLnByZXZlbnREZWZhdWx0KCksdGhpcy5kcmFnLnByZXZlbnRDbGljaz0hMX19LHtrZXk6XCJyZW1vdmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKGU8MHx8ZT49dGhpcy5pbm5lckVsZW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJdGVtIHRvIHJlbW92ZSBkb2Vzbid0IGV4aXN0IPCfmK1cIik7dmFyIGk9ZTx0aGlzLmN1cnJlbnRTbGlkZSxyPXRoaXMuY3VycmVudFNsaWRlK3RoaXMucGVyUGFnZS0xPT09ZTsoaXx8cikmJnRoaXMuY3VycmVudFNsaWRlLS0sdGhpcy5pbm5lckVsZW1lbnRzLnNwbGljZShlLDEpLHRoaXMuYnVpbGRTbGlkZXJGcmFtZSgpLHQmJnQuY2FsbCh0aGlzKX19LHtrZXk6XCJpbnNlcnRcIix2YWx1ZTpmdW5jdGlvbihlLHQsaSl7aWYodDwwfHx0PnRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5zZXQgaXQgYXQgdGhpcyBpbmRleCDwn5itXCIpO2lmKC0xIT09dGhpcy5pbm5lckVsZW1lbnRzLmluZGV4T2YoZSkpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNhbWUgaXRlbSBpbiBhIGNhcm91c2VsPyBSZWFsbHk/IE5vcGUg8J+YrVwiKTt2YXIgcj10PD10aGlzLmN1cnJlbnRTbGlkZT4wJiZ0aGlzLmlubmVyRWxlbWVudHMubGVuZ3RoO3RoaXMuY3VycmVudFNsaWRlPXI/dGhpcy5jdXJyZW50U2xpZGUrMTp0aGlzLmN1cnJlbnRTbGlkZSx0aGlzLmlubmVyRWxlbWVudHMuc3BsaWNlKHQsMCxlKSx0aGlzLmJ1aWxkU2xpZGVyRnJhbWUoKSxpJiZpLmNhbGwodGhpcyl9fSx7a2V5OlwicHJlcGVuZFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5pbnNlcnQoZSwwKSx0JiZ0LmNhbGwodGhpcyl9fSx7a2V5OlwiYXBwZW5kXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLmluc2VydChlLHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGgrMSksdCYmdC5jYWxsKHRoaXMpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0sdD1hcmd1bWVudHNbMV07aWYodGhpcy5kZXRhY2hFdmVudHMoKSx0aGlzLnNlbGVjdG9yLnN0eWxlLmN1cnNvcj1cImF1dG9cIixlKXtmb3IodmFyIGk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHI9MDtyPHRoaXMuaW5uZXJFbGVtZW50cy5sZW5ndGg7cisrKWkuYXBwZW5kQ2hpbGQodGhpcy5pbm5lckVsZW1lbnRzW3JdKTt0aGlzLnNlbGVjdG9yLmlubmVySFRNTD1cIlwiLHRoaXMuc2VsZWN0b3IuYXBwZW5kQ2hpbGQoaSksdGhpcy5zZWxlY3Rvci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKX10JiZ0LmNhbGwodGhpcyl9fV0sW3trZXk6XCJtZXJnZVNldHRpbmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3NlbGVjdG9yOlwiLnNpZW1hXCIsZHVyYXRpb246MjAwLGVhc2luZzpcImVhc2Utb3V0XCIscGVyUGFnZToxLHN0YXJ0SW5kZXg6MCxkcmFnZ2FibGU6ITAsbXVsdGlwbGVEcmFnOiEwLHRocmVzaG9sZDoyMCxsb29wOiExLHJ0bDohMSxvbkluaXQ6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fX0saT1lO2Zvcih2YXIgciBpbiBpKXRbcl09aVtyXTtyZXR1cm4gdH19LHtrZXk6XCJ3ZWJraXRPck5vdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0/XCJ0cmFuc2Zvcm1cIjpcIldlYmtpdFRyYW5zZm9ybVwifX1dKSxlfSgpO3QuZGVmYXVsdD1sLGUuZXhwb3J0cz10LmRlZmF1bHR9XSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zaWVtYS9kaXN0L3NpZW1hLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ2V0RWwsIGdldEVscywgZm9yRWFjaCB9IGZyb20gJ0BzdXBlcnNrcnlwdC9zdXRpbHMnO1xuaW1wb3J0IGluaXREYXNoYm9hcmRIaWRpbmcgZnJvbSBcIi4vZGFzaGJvYXJkSGlkZVwiXG5pbXBvcnQgeyBhbmltYXRlTWFwLCBhY3RpdmF0ZVBoYXNlIH0gZnJvbSBcIi4vbWFwXCI7XG5cbnZhciBpbnRyb0J1dHRvbiA9IGdldEVsKCcuaW50cm8tLWJ1dHRvbicpO1xuXG52YXIgaW5pdGlhbFBoYXNlID0gZ2V0SW5pdGlhbFBoYXNlKCk7XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxQaGFzZSgpIHtcbiAgICBsZXQgaGFzaGVzID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoXCIjXCIpO1xuXG4gICAgaWYgKGhhc2hlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHBoYXNlVG9Jbml0ID0gZ2V0RWwoYC5waGFzZXMtLXBoYXNlW2RhdGEtcGhhc2UtbmFtZT0ke2hhc2hlc1sxXX1dYCk7XG4gICAgbGV0IHBsYWNlVG9Jbml0ID0gZ2V0RWwoYC5tYXAtLXBsYWNlW2RhdGEtbGluaz1cIi9wbGFjZS8ke2hhc2hlc1syXX0vXCJgKTtcblxuICAgIGlmICghcGhhc2VUb0luaXQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBoYXNlOiBwaGFzZVRvSW5pdC5kYXRhc2V0LnBoYXNlLFxuICAgICAgICBwbGFjZTogcGxhY2VUb0luaXRcbiAgICB9O1xufVxuXG5pZiAoIWluaXRpYWxQaGFzZSAmJiBpbnRyb0J1dHRvbikge1xuICAgIHByZXBhcmVJbnRybygpO1xufSBlbHNlIHtcbiAgICBhbmltYXRlSW5pdGlhbFBoYXNlKGluaXRpYWxQaGFzZSk7XG59XG5nZXRFbCgnYm9keScpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbmZ1bmN0aW9uIHByZXBhcmVJbnRybygpIHtcbiAgICBnZXRFbCgnYm9keScpLmNsYXNzTGlzdC5hZGQoJ2ludHJvLW9uJyk7XG4gICAgYW5pbWF0ZU1hcCgnMCcpO1xuICAgIGdldEVsKCcubWFwJykuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgaW50cm9CdXR0b24ub25jbGljayA9IG9uSW50cm9CdXR0b25DbGljaztcbiAgICBnZXRFbCgnYm9keScpLmNsYXNzTGlzdC5hZGQoJ2hvbWVfX3Zpc2libGUnKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZUluaXRpYWxQaGFzZShpbml0aWFsUGhhc2UpIHtcbiAgICBhbmltYXRlTWFwKGluaXRpYWxQaGFzZS5waGFzZSk7XG4gICAgcmVtb3ZlSW50cm8oKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVtb3ZlSW50cm9BY3RpdmF0ZVBoYXNlKGluaXRpYWxQaGFzZS5waGFzZSk7XG4gICAgICAgIGdldEVsKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnaG9tZV9fdmlzaWJsZScpO1xuICAgIH0sIDEwMCk7XG5cbiAgICBpZiAoaW5pdGlhbFBoYXNlLnBsYWNlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5pdGlhbFBoYXNlLnBsYWNlLmNsaWNrKCksIDIwMDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25JbnRyb0J1dHRvbkNsaWNrKCkge1xuXG4gICAgZ2V0RWwoJy5pbnRyby0tYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgIGdldEVsKCcuaW50cm8tLWhlcm8nKS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBnZXRFbCgnLmludHJvLS1sZWFkJykuc3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZ2V0RWwoJy5pbnRyby0tYmFja2dyb3VuZCcpLnN0eWxlLmJvcmRlcldpZHRoID0gJzAnO1xuICAgICAgICBnZXRFbCgnLmludHJvLS1iYWNrZ3JvdW5kLTInKS5zdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUludHJvQWN0aXZhdGVQaGFzZSgnMicsIDIwMDAsIDcwMCk7XG4gICAgICAgIH0sIDEzMDApO1xuXG4gICAgfSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSW50cm8oKSB7XG4gICAgaWYgKGdldEVsKCcuaW50cm8nKSkge1xuICAgICAgICBnZXRFbCgnLmludHJvJykuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIGdldEVsKCcuaW50cm8nKS5yZW1vdmUoKTtcbiAgICAgICAgZ2V0RWwoJy5pbnRyby0tYmFja2dyb3VuZC0yJykucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVJbnRyb0FjdGl2YXRlUGhhc2UocGhhc2UsIGRlbGF5LCBkZWxheTIpIHtcbiAgICBpZiAoZGVsYXkyKVxuICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZUludHJvLCBkZWxheTIpO1xuICAgIGVsc2VcbiAgICAgICAgcmVtb3ZlSW50cm8oKTtcblxuICAgIGdldEVsKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbWFwLWFjdGl2ZScpO1xuICAgIGdldEVsKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbWFwLWFuaW1hdGlvbnMtYWN0aXZlJyk7XG4gICAgYWN0aXZhdGVQaGFzZShwaGFzZSwgZGVsYXkpO1xuICAgIGluaXREYXNoYm9hcmRIaWRpbmcoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tb2R1bGVzL2ludHJvLmpzIiwiaW1wb3J0IHsgZ2V0RWwgfSBmcm9tICdAc3VwZXJza3J5cHQvc3V0aWxzJztcblxuZnVuY3Rpb24gaGlkZURhc2hib2FyZCgpIHtcbiAgICBnZXRFbCgnbWFpbiAuZGFzaGJvYXJkJykuY2xhc3NMaXN0LmFkZCgnZGFzaGJvYXJkX19oaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gdW5oaWRlRGFzaGJvYXJkKCkge1xuICAgIGdldEVsKCdtYWluIC5kYXNoYm9hcmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdkYXNoYm9hcmRfX2hpZGRlbicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0RGFzaGJvYXJkSGlkaW5nKCkge1xuICAgIGxldCBkYXNoYm9hcmQgPSBnZXRFbCgnbWFpbiAuZGFzaGJvYXJkJyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGdldEVsKCdtYWluIC5kYXNoYm9hcmQnKS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnMC4wMXMnLCAyMDAwKTtcblxuICAgIGdldEVsKCcubWFwLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnggPD0gZGFzaGJvYXJkLmNsaWVudFdpZHRoKSB7XG4gICAgICAgICAgICBpZiAoIWRhc2hib2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rhc2hib2FyZF9faGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICBoaWRlRGFzaGJvYXJkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGFzaGJvYXJkLmNsYXNzTGlzdC5jb250YWlucygnZGFzaGJvYXJkX19oaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIHVuaGlkZURhc2hib2FyZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSApO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvbW9kdWxlcy9kYXNoYm9hcmRIaWRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==