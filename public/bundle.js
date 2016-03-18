(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stores = [{ name: 'Head', constructor: require('./catberry_stores/Head.js') }, { name: 'Main', constructor: require('./catberry_stores/Main.js') }];

var components = [{
	name: 'document',
	constructor: require('./catberry_components/document/Document.js'),
	properties: { "name": "document", "template": "./document.jade", "logic": "./Document.js" },
	templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n\nbuf.push("<!DOCTYPE html><html><head cat-store=\\"Head\\"></head><body><cat-hello-world id=\\"unique\\" cat-store=\\"Main\\"></cat-hello-world></body></html>");;return buf.join("");\n}',
	errorTemplateSource: null
}, {
	name: 'head',
	constructor: require('./catberry_components/head/Head.js'),
	properties: { "name": "head", "template": "./head.jade", "logic": "./Head.js" },
	templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (description, title) {\nbuf.push("<title>" + (jade.escape((jade_interp = title) == null ? \'\' : jade_interp)) + "</title><meta charset=\\"utf-8\\"/><meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\"/><meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1, user-scalable=no\\"/><meta name=\\"keywords\\" content=\\"\\"/><meta name=\\"description\\"" + (jade.attr("content", description, true, false)) + "/><link href=\\"/styles.css\\" rel=\\"stylesheet\\"/><link rel=\\"shortcut icon\\" href=\\"/images/favicon.ico\\"/><script src=\\"/bundle.js\\"></script>");}.call(this,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");\n}',
	errorTemplateSource: null
}, {
	name: 'hello-world',
	constructor: require('./catberry_components/hello-world/HelloWorld.js'),
	properties: { "name": "hello-world", "template": "./hello.jade", "errorTemplate": "./error.jade", "logic": "./HelloWorld.js" },
	templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (who) {\nbuf.push("<h1>Hello, " + (jade.escape((jade_interp = who) == null ? \'\' : jade_interp)) + "!</h1><a href=\\"/index\\">Index</a><br/><a href=\\"/second\\">Second</a>");}.call(this,"who" in locals_for_with?locals_for_with.who:typeof who!=="undefined"?who:undefined));;return buf.join("");\n}',
	errorTemplateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n\nbuf.push("<h1>Oops!</h1>");;return buf.join("");\n}'
}];

var routeDefinitions = require('./routes.js') || [];

var Catberry = require('./node_modules/catberry/browser/Catberry.js');
var BootstrapperBase = require('./node_modules/catberry/lib/base/BootstrapperBase.js');
var StoreDispatcher = require('./node_modules/catberry/lib/StoreDispatcher');
var ModuleApiProvider = require('./node_modules/catberry/browser/providers/ModuleApiProvider');
var CookieWrapper = require('./node_modules/catberry/browser/CookieWrapper');

var Bootstrapper = function (_BootstrapperBase) {
	_inherits(Bootstrapper, _BootstrapperBase);

	function Bootstrapper() {
		_classCallCheck(this, Bootstrapper);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Bootstrapper).call(this, Catberry));
	}

	_createClass(Bootstrapper, [{
		key: 'configure',
		value: function configure(configObject, locator) {
			_get(Object.getPrototypeOf(Bootstrapper.prototype), 'configure', this).call(this, configObject, locator);

			locator.register('storeDispatcher', StoreDispatcher, true);
			locator.register('moduleApiProvider', ModuleApiProvider, true);
			locator.register('cookieWrapper', CookieWrapper, true);

			locator.registerInstance('window', window);

			routeDefinitions.forEach(function (routeDefinition) {
				return locator.registerInstance('routeDefinition', routeDefinition);
			});

			stores.forEach(function (store) {
				return locator.registerInstance('store', store);
			});

			components.forEach(function (component) {
				return locator.registerInstance('component', component);
			});
		}
	}]);

	return Bootstrapper;
}(BootstrapperBase);

module.exports = new Bootstrapper();

},{"./catberry_components/document/Document.js":3,"./catberry_components/head/Head.js":4,"./catberry_components/hello-world/HelloWorld.js":5,"./catberry_stores/Head.js":6,"./catberry_stores/Main.js":7,"./node_modules/catberry/browser/Catberry.js":29,"./node_modules/catberry/browser/CookieWrapper":30,"./node_modules/catberry/browser/providers/ModuleApiProvider":36,"./node_modules/catberry/lib/StoreDispatcher":40,"./node_modules/catberry/lib/base/BootstrapperBase.js":41,"./routes.js":65}],2:[function(require,module,exports){
'use strict';

var config = require('./config/environment.json');

var catberry = require('catberry');
var cat = catberry.create(config);

var templateEngine = require('catberry-jade');
templateEngine.register(cat.locator);

var loggerPlugin = require('catberry-logger');
loggerPlugin.register(cat.locator);

var uhrPlugin = require('catberry-uhr');
uhrPlugin.register(cat.locator);

cat.startWhenReady();

},{"./config/environment.json":8,"catberry":37,"catberry-jade":15,"catberry-logger":18,"catberry-uhr":21}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Document = function Document() {
  _classCallCheck(this, Document);
};

module.exports = Document;

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Head = function () {
	function Head(locator) {
		_classCallCheck(this, Head);

		this._config = locator.resolve('config');
	}

	_createClass(Head, [{
		key: 'render',
		value: function render() {
			return this._config;
		}
	}]);

	return Head;
}();

module.exports = Head;

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HelloWorld = function () {
	function HelloWorld() {
		_classCallCheck(this, HelloWorld);
	}

	_createClass(HelloWorld, [{
		key: 'render',
		value: function render() {
			return this.$context.getStoreData();
		}
	}]);

	return HelloWorld;
}();

module.exports = HelloWorld;

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PAGES = {
	index: {
		title: '',
		description: 'ewfe'
	},
	second: {
		title: 'second',
		description: 'second'
	}
};

var Head = function () {
	function Head() {
		_classCallCheck(this, Head);
	}

	_createClass(Head, [{
		key: 'load',
		value: function load() {
			return PAGES[this.$context.state];
		}
	}]);

	return Head;
}();

module.exports = Head;

},{}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
	function Main() {
		_classCallCheck(this, Main);
	}

	_createClass(Main, [{
		key: 'load',
		value: function load() {
			return {
				who: 'World'
			};
		}
	}]);

	return Main;
}();

module.exports = Main;

},{}],8:[function(require,module,exports){
module.exports={
	"title": "Catberry Project",
	"logger": {
		"level": 0
	}
}

},{}],9:[function(require,module,exports){
"use strict";

var rawAsap = require("./raw");

var freeTasks = [];

var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

function RawTask() {
    this.task = null;
}

RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            asap.onerror(error);
        } else {
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};

},{"./raw":10}],10:[function(require,module,exports){
(function (global){
"use strict";

module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }

    queue[queue.length] = task;
}

var queue = [];

var flushing = false;

var requestFlush;

var index = 0;

var capacity = 1024;

function flush() {
    while (index < queue.length) {
        var currentIndex = index;

        index = index + 1;
        queue[currentIndex].call();

        if (index > capacity) {
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;

if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);
} else {
        requestFlush = makeRequestCallFromTimer(flush);
    }

rawAsap.requestFlush = requestFlush;

function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, { characterData: true });
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        var timeoutHandle = setTimeout(handleTimer, 0);

        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],11:[function(require,module,exports){
(function (process,global){
"use strict";

module.exports = process.hrtime || hrtime;

var performance = global.performance || {};
var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
  return new Date().getTime();
};

function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":56}],12:[function(require,module,exports){
"use strict";

},{}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateProvider = function () {
	function TemplateProvider(locator) {
		_classCallCheck(this, TemplateProvider);

		var config = locator.resolve('config') || {};

		this._jade = locator.resolve('jade');

		this._jadeOptions = config.jadeOptions || {};

		this._templates = Object.create(null);
	}

	_createClass(TemplateProvider, [{
		key: 'registerCompiled',
		value: function registerCompiled(name, compiled) {
			var getTemplate = new Function('jade', 'return ' + compiled + ';');
			this._templates[name] = getTemplate(this._jade);
		}
	}, {
		key: 'render',
		value: function render(name, data) {
			if (!(name in this._templates)) {
				return Promise.reject(new Error('"' + name + '" not found among registered templates'));
			}

			var promise = void 0;
			try {
				promise = Promise.resolve(this._templates[name](data));
			} catch (e) {
				promise = Promise.reject(e);
			}
			return promise;
		}
	}]);

	return TemplateProvider;
}();

module.exports = TemplateProvider;

},{}],14:[function(require,module,exports){
'use strict';

module.exports = require('jade/runtime.js');

},{"jade/runtime.js":53}],15:[function(require,module,exports){
'use strict';

var Jade = require('./lib/jade.js');
var TemplateProvider = require('./lib/TemplateProvider');

module.exports = {
	register: function register(locator) {
		locator.registerInstance('jade', Jade);
		locator.register('templateProvider', TemplateProvider, true);
	},

	Jade: Jade,
	TemplateProvider: TemplateProvider
};

},{"./lib/TemplateProvider":13,"./lib/jade.js":14}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceLocator = function () {
	function ServiceLocator() {
		_classCallCheck(this, ServiceLocator);

		this._registrations = Object.create(null);
	}

	_createClass(ServiceLocator, [{
		key: 'register',
		value: function register(type, implementation, isSingleton) {
			this._throwIfNotFunction(type, implementation);
			this._throwIfNotString(type);

			this._initializeRegistration(type);

			this._registrations[type].unshift({
				Implementation: implementation,
				isSingleton: Boolean(isSingleton),
				singleInstance: null
			});
		}
	}, {
		key: 'registerInstance',
		value: function registerInstance(type, instance) {
			this._throwIfNotString(type);
			this._initializeRegistration(type, this);

			this._registrations[type].unshift({
				Implementation: instance.constructor,
				isSingleton: true,
				singleInstance: instance
			});
		}
	}, {
		key: 'resolve',
		value: function resolve(type) {
			this._throwIfNotString(type);
			this._throwIfNoType(type);
			var firstRegistration = this._registrations[type][0];
			return this._createInstance(firstRegistration);
		}
	}, {
		key: 'resolveAll',
		value: function resolveAll(type) {
			var _this = this;

			this._throwIfNotString(type);
			this._throwIfNoType(type);
			return this._registrations[type].map(function (registration) {
				return _this._createInstance(registration);
			});
		}
	}, {
		key: 'unregister',
		value: function unregister(type) {
			this._throwIfNotString(type);
			this._registrations[type] = [];
		}
	}, {
		key: '_createInstance',
		value: function _createInstance(registration) {
			if (registration.isSingleton && registration.singleInstance !== null) {
				return registration.singleInstance;
			}

			var instance = new registration.Implementation(this);

			if (registration.isSingleton) {
				registration.singleInstance = instance;
			}

			return instance;
		}
	}, {
		key: '_initializeRegistration',
		value: function _initializeRegistration(type) {
			if (type in this._registrations) {
				return;
			}
			this._registrations[type] = [];
		}
	}, {
		key: '_throwIfNoType',
		value: function _throwIfNoType(type) {
			if (type in this._registrations && this._registrations[type].length > 0) {
				return;
			}
			throw new Error('Type "' + type + '" not registered');
		}
	}, {
		key: '_throwIfNotFunction',
		value: function _throwIfNotFunction(type, Implementation) {
			if (Implementation instanceof Function) {
				return;
			}

			throw new Error('Constructor for type ' + type + ' should be a function');
		}
	}, {
		key: '_throwIfNotString',
		value: function _throwIfNotString(type) {
			if (typeof type === 'string') {
				return;
			}

			throw new Error('Type name "' + type + '" should be a string');
		}
	}]);

	return ServiceLocator;
}();

module.exports = ServiceLocator;

},{}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoggerBase = require('../lib/LoggerBase');

var Logger = function (_LoggerBase) {
	_inherits(Logger, _LoggerBase);

	function Logger() {
		_classCallCheck(this, Logger);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Logger).apply(this, arguments));
	}

	_createClass(Logger, [{
		key: 'write',
		value: function write(level, message) {
			if (level < this._level) {
				return;
			}

			if (level >= 50) {
				var errorMessage = message instanceof Error ? message.name + ': ' + message.message + '\n' + message.stack : message;
				console.error(errorMessage);
			} else if (level >= 40) {
				console.warn(message);
			} else if (level >= 30) {
				console.info(message);
			} else {
				console.log(message);
			}
		}
	}, {
		key: 'wrapEventBus',
		value: function wrapEventBus(eventBus) {
			var _this2 = this;

			_get(Object.getPrototypeOf(Logger.prototype), 'wrapEventBus', this).call(this, eventBus);

			var window = this._locator.resolve('window');

			window.onerror = function (msg, uri, line) {
				_this2.fatal(uri + ':' + line + ' ' + msg);
				return true;
			};

			if (this._level > 20) {
				return;
			}

			eventBus.on('documentUpdated', function (args) {
				return _this2.debug('Document updated (' + args.length + ' store(s) changed)');
			}).on('componentBound', function (args) {
				var id = args.id ? '#' + args.id : '';
				_this2.debug('Component "' + args.element.tagName + id + '" is bound');
			}).on('componentUnbound', function (args) {
				var id = args.id ? '#' + args.id : '';
				_this2.debug('Component "' + args.element.tagName + id + '" is unbound');
			});
		}
	}]);

	return Logger;
}(LoggerBase);

module.exports = Logger;

},{"../lib/LoggerBase":19}],18:[function(require,module,exports){
'use strict';

var Logger = require('./lib/Logger');

module.exports = {
	register: function register(locator) {
		var logger = new Logger(locator);
		locator.registerInstance('logger', logger);
	},

	Logger: Logger
};

},{"./lib/Logger":17}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_LEVEL = 30;
var DEFAULT_NAME = 'catberry';

var prettyHrTime = require('pretty-hrtime');

var LoggerBase = function () {
	function LoggerBase(locator) {
		_classCallCheck(this, LoggerBase);

		var config = locator.resolve('config').logger || {};

		this._locator = locator;

		this._level = typeof config.level === 'number' ? config.level : DEFAULT_LEVEL;

		this._name = typeof config.name === 'string' ? config.name : DEFAULT_NAME;

		var eventBus = locator.resolve('eventBus');
		this.wrapEventBus(eventBus);
	}

	_createClass(LoggerBase, [{
		key: 'trace',
		value: function trace(message) {
			this.write(10, message);
		}
	}, {
		key: 'debug',
		value: function debug(message) {
			this.write(20, message);
		}
	}, {
		key: 'info',
		value: function info(message) {
			this.write(30, message);
		}
	}, {
		key: 'warn',
		value: function warn(message) {
			this.write(40, message);
		}
	}, {
		key: 'error',
		value: function error(message) {
			this.write(50, message);
		}
	}, {
		key: 'fatal',
		value: function fatal(message) {
			this.write(60, message);
		}
	}, {
		key: 'wrapEventBus',
		value: function wrapEventBus(eventBus) {
			var _this = this;

			if (this._level > 50) {
				return;
			}
			eventBus.on('error', function (error) {
				return _this.error(error);
			});

			if (this._level > 40) {
				return;
			}
			eventBus.on('warn', function (msg) {
				return _this.warn(msg);
			});

			if (this._level > 30) {
				return;
			}

			eventBus.on('info', function (msg) {
				return _this.info(msg);
			}).on('componentLoaded', function (args) {
				return _this.info('Component "' + args.name + '" loaded');
			}).on('storeLoaded', function (args) {
				return _this.info('Store "' + args.name + '" loaded');
			}).on('allStoresLoaded', function () {
				return _this.info('All stores loaded');
			}).on('allComponentsLoaded', function () {
				return _this.info('All components loaded');
			});

			if (this._level > 20) {
				return;
			}

			eventBus.on('debug', function (msg) {
				return _this.debug(msg);
			}).on('componentRender', function (args) {
				var id = getId(args.context);
				var tagName = getTagNameForComponentName(args.name);
				_this.debug('Component "' + tagName + id + '" is being rendered...');
			}).on('componentRendered', function (args) {
				var id = getId(args.context);
				var tagName = getTagNameForComponentName(args.name);
				var time = Array.isArray(args.hrTime) ? ' (' + prettyHrTime(args.hrTime) + ')' : '';
				_this.debug('Component "' + tagName + id + '" rendered' + time);
			}).on('documentRendered', function (args) {
				return _this.debug('Document rendered for URI ' + args.location.toString());
			});

			if (this._level > 10) {
				return;
			}

			eventBus.on('trace', function (msg) {
				return _this.trace(msg);
			});
		}
	}]);

	return LoggerBase;
}();

function getId(context) {
	var id = context.attributes.id;
	return id ? '#' + id : '';
}

function getTagNameForComponentName(componentName) {
	if (typeof componentName !== 'string') {
		return '';
	}
	var upperComponentName = componentName.toUpperCase();
	if (componentName === 'HEAD') {
		return upperComponentName;
	}
	if (componentName === 'DOCUMENT') {
		return 'HTML';
	}
	return 'CAT-' + upperComponentName;
}

module.exports = LoggerBase;

},{"pretty-hrtime":55}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UHRBase = require('../lib/UHRBase');

var NON_SAFE_HEADERS = {
	cookie: true,
	'accept-charset': true
};

var UHR = function (_UHRBase) {
	_inherits(UHR, _UHRBase);

	function UHR(locator) {
		_classCallCheck(this, UHR);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UHR).call(this));

		_this.window = locator.resolve('window');
		return _this;
	}

	_createClass(UHR, [{
		key: '_doRequest',
		value: function _doRequest(parameters) {
			var _this2 = this;

			Object.keys(parameters.headers).forEach(function (name) {
				if (NON_SAFE_HEADERS.hasOwnProperty(name.toLowerCase())) {
					delete parameters.headers[name];
				}
			});

			return new Promise(function (fulfill, reject) {
				var xhr = new _this2.window.XMLHttpRequest();
				var requestError = null;

				xhr.onabort = function () {
					requestError = new Error('Request aborted');
					reject(requestError);
				};
				xhr.ontimeout = function () {
					requestError = new Error('Request timeout');
					reject(requestError);
				};
				xhr.onerror = function () {
					requestError = new Error(xhr.statusText || 'Connection error');
					reject(requestError);
				};
				xhr.onreadystatechange = function () {
					if (xhr.readyState !== 4) {
						return;
					}
					if (requestError) {
						return;
					}
					var status = _this2._getStatusObject(xhr);
					var content = _this2.convertResponse(status.headers, xhr.responseText);
					fulfill({
						status: status,
						content: content
					});
				};

				var user = parameters.uri.authority.userInfo ? parameters.uri.authority.userInfo.user : null;
				var password = parameters.uri.authority.userInfo ? parameters.uri.authority.userInfo.password : null;
				xhr.open(parameters.method, parameters.uri.toString(), true, user || undefined, password || undefined);
				xhr.timeout = parameters.timeout;

				if (parameters.withCredentials) {
					xhr.withCredentials = true;
				}

				Object.keys(parameters.headers).forEach(function (headerName) {
					return xhr.setRequestHeader(headerName, parameters.headers[headerName]);
				});

				xhr.send(parameters.data);
			});
		}
	}, {
		key: '_getStatusObject',
		value: function _getStatusObject(xhr) {
			var headers = {};

			if (!xhr) {
				return {
					code: 0,
					text: '',
					headers: headers
				};
			}

			xhr.getAllResponseHeaders().split('\n').forEach(function (header) {
				var delimiterIndex = header.indexOf(':');
				if (delimiterIndex <= 0) {
					return;
				}
				var headerName = header.substring(0, delimiterIndex).trim().toLowerCase();
				headers[headerName] = header.substring(delimiterIndex + 1).trim();
			});

			return {
				code: xhr.status === 1223 ? 204 : xhr.status,
				text: xhr.status === 1223 ? 'No Content' : xhr.statusText,
				headers: headers
			};
		}
	}]);

	return UHR;
}(UHRBase);

module.exports = UHR;

},{"../lib/UHRBase":22}],21:[function(require,module,exports){
'use strict';

var UHR = require('./lib/UHR');

module.exports = {
	register: function register(locator) {
		locator.register('uhr', UHR, true);
	},
	UHR: UHR
};

},{"./lib/UHR":20}],22:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var catberryUri = require('catberry-uri');
var Query = catberryUri.Query;
var URI = catberryUri.URI;

var DEFAULT_TIMEOUT = 30000;
var HTTP_PROTOCOL_REGEXP = /^(http)s?$/i;

var UHRBase = function () {
	function UHRBase() {
		_classCallCheck(this, UHRBase);
	}

	_createClass(UHRBase, [{
		key: 'get',
		value: function get(url, parameters) {
			return this.request(this._normalizeOptions(UHRBase.METHODS.GET, url, parameters));
		}
	}, {
		key: 'post',
		value: function post(url, parameters) {
			return this.request(this._normalizeOptions(UHRBase.METHODS.POST, url, parameters));
		}
	}, {
		key: 'put',
		value: function put(url, parameters) {
			return this.request(this._normalizeOptions(UHRBase.METHODS.PUT, url, parameters));
		}
	}, {
		key: 'patch',
		value: function patch(url, parameters) {
			return this.request(this._normalizeOptions(UHRBase.METHODS.PATCH, url, parameters));
		}
	}, {
		key: 'delete',
		value: function _delete(url, parameters) {
			return this.request(this._normalizeOptions(UHRBase.METHODS.DELETE, url, parameters));
		}
	}, {
		key: 'request',
		value: function request(parameters) {
			var _this = this;

			return this._validateRequest(parameters).then(function (validated) {
				return _this._doRequest(validated);
			});
		}
	}, {
		key: '_validateRequest',
		value: function _validateRequest(parameters) {
			if (!parameters || (typeof parameters === 'undefined' ? 'undefined' : _typeof(parameters)) !== 'object') {
				return Promise.reject(new Error('Request parameters argument should be an object'));
			}

			var validated = Object.create(parameters);

			if (typeof parameters.url !== 'string') {
				return Promise.reject(new Error('"parameters.url" is a required parameter'));
			}

			validated.uri = new URI(validated.url);
			if (!validated.uri.scheme) {
				return Promise.reject(new Error('"parameters.url" should contain a protocol (scheme)'));
			}
			if (!HTTP_PROTOCOL_REGEXP.test(validated.uri.scheme)) {
				return Promise.reject(new Error('"' + validated.uri.scheme + '" protocol (scheme) is unsupported'));
			}
			if (!validated.uri.authority || !validated.uri.authority.host) {
				return Promise.reject(new Error('"parameters.url" should contain a host'));
			}
			if (typeof validated.method !== 'string' || !(validated.method in UHRBase.METHODS)) {
				return Promise.reject(new Error('HTTP method is a required parameter'));
			}

			validated.timeout = validated.timeout || DEFAULT_TIMEOUT;
			if (typeof validated.timeout !== 'number') {
				return Promise.reject(new Error('Timeout should be a number'));
			}

			validated.headers = this.createHeaders(validated.headers);

			if (!this._isUpstreamRequest(parameters.method) && validated.data && _typeof(validated.data) === 'object') {

				var dataKeys = Object.keys(validated.data);

				if (dataKeys.length > 0 && !validated.uri.query) {
					validated.uri.query = new Query('');
				}

				dataKeys.forEach(function (key) {
					validated.uri.query.values[key] = validated.data[key];
				});
				validated.data = null;
			} else {
				var dataAndHeaders = this._getDataToSend(validated.headers, validated.data);
				validated.headers = dataAndHeaders.headers;
				validated.data = dataAndHeaders.data;
			}

			return Promise.resolve(validated);
		}
	}, {
		key: '_getDataToSend',
		value: function _getDataToSend(headers, data) {
			var found = this._findContentType(headers);
			var contentTypeHeader = found.name;
			var contentType = found.type;

			if (!data || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
				data = data ? String(data) : '';
				if (!contentType) {
					headers[contentTypeHeader] = UHRBase.PLAIN_TEXT_ENTITY_CONTENT_TYPE;
				}
				return {
					headers: headers,
					data: data
				};
			}

			if (contentType === UHRBase.TYPES.JSON) {
				return {
					headers: headers,
					data: JSON.stringify(data)
				};
			}

			headers[contentTypeHeader] = UHRBase.URL_ENCODED_ENTITY_CONTENT_TYPE;

			var query = new Query();
			query.values = data;
			return {
				headers: headers,
				data: query.toString().replace(/\+/g, '%2B').replace(/%20/g, '+')
			};
		}
	}, {
		key: 'createHeaders',
		value: function createHeaders(parameterHeaders) {
			if (!parameterHeaders || (typeof parameterHeaders === 'undefined' ? 'undefined' : _typeof(parameterHeaders)) !== 'object') {
				parameterHeaders = {};
			}

			var headers = {};

			Object.keys(UHRBase.DEFAULT_GENERAL_HEADERS).forEach(function (headerName) {
				headers[headerName] = UHRBase.DEFAULT_GENERAL_HEADERS[headerName];
			});

			Object.keys(parameterHeaders).forEach(function (headerName) {
				if (parameterHeaders[headerName] === null || parameterHeaders[headerName] === undefined) {
					delete headers[headerName];
					return;
				}
				headers[headerName] = parameterHeaders[headerName];
			});

			return headers;
		}
	}, {
		key: '_doRequest',
		value: function _doRequest(parameters) {}
	}, {
		key: 'convertResponse',
		value: function convertResponse(headers, responseData) {
			if (typeof responseData !== 'string') {
				responseData = '';
			}
			var found = this._findContentType(headers);
			var contentType = found.type || UHRBase.TYPES.PLAIN_TEXT;

			switch (contentType) {
				case UHRBase.TYPES.JSON:
					try {
						return JSON.parse(responseData) || {};
					} catch (e) {
						return {};
					}
				case UHRBase.TYPES.URL_ENCODED:
					try {
						var query = new Query(responseData.replace('+', '%20'));
						return query.values || {};
					} catch (e) {
						return {};
					}
				default:
					return responseData;
			}
		}
	}, {
		key: '_isUpstreamRequest',
		value: function _isUpstreamRequest(method) {
			return method === UHRBase.METHODS.POST || method === UHRBase.METHODS.PUT || method === UHRBase.METHODS.PATCH;
		}
	}, {
		key: '_normalizeOptions',
		value: function _normalizeOptions(method, url, parameters) {
			parameters = parameters || {};
			var normalParameters = Object.create(parameters);
			normalParameters.method = method;
			normalParameters.url = url;
			return normalParameters;
		}
	}, {
		key: '_findContentType',
		value: function _findContentType(headers) {
			var contentTypeString = '';
			var contentTypeHeader = 'Content-Type';

			Object.keys(headers).forEach(function (key) {
				if (key.toLowerCase() !== 'content-type') {
					return;
				}
				contentTypeHeader = key;
				contentTypeString = headers[key];
			});

			var typeAndParameters = contentTypeString.split(';');
			var contentType = typeAndParameters[0].toLowerCase();
			return {
				name: contentTypeHeader,
				type: contentType
			};
		}
	}], [{
		key: 'METHODS',
		get: function get() {
			return {
				GET: 'GET',
				HEAD: 'HEAD',
				POST: 'POST',
				PUT: 'PUT',
				PATCH: 'PATCH',
				DELETE: 'DELETE',
				OPTIONS: 'OPTIONS',
				TRACE: 'TRACE',
				CONNECT: 'CONNECT'
			};
		}
	}, {
		key: 'TYPES',
		get: function get() {
			return {
				URL_ENCODED: 'application/x-www-form-urlencoded',
				JSON: 'application/json',
				PLAIN_TEXT: 'text/plain',
				HTML: 'text/html'
			};
		}
	}, {
		key: 'CHARSET',
		get: function get() {
			return 'UTF-8';
		}
	}, {
		key: 'DEFAULT_GENERAL_HEADERS',
		get: function get() {
			return {
				Accept: UHRBase.TYPES.JSON + '; q=0.7, ' + UHRBase.TYPES.HTML + '; q=0.2, ' + UHRBase.TYPES.PLAIN_TEXT + '; q=0.1',
				'Accept-Charset': UHRBase.CHARSET + '; q=1'
			};
		}
	}, {
		key: 'CHARSET_PARAMETER',
		get: function get() {
			return '; charset=' + UHRBase.CHARSET;
		}
	}, {
		key: 'URL_ENCODED_ENTITY_CONTENT_TYPE',
		get: function get() {
			return UHRBase.TYPES.URL_ENCODED + UHRBase.CHARSET_PARAMETER;
		}
	}, {
		key: 'JSON_ENTITY_CONTENT_TYPE',
		get: function get() {
			return UHRBase.TYPES.JSON + UHRBase.CHARSET_PARAMETER;
		}
	}, {
		key: 'PLAIN_TEXT_ENTITY_CONTENT_TYPE',
		get: function get() {
			return UHRBase.TYPES.PLAIN_TEXT + UHRBase.CHARSET_PARAMETER;
		}
	}]);

	return UHRBase;
}();

module.exports = UHRBase;

},{"catberry-uri":23}],23:[function(require,module,exports){
'use strict';

module.exports = {
	URI: require('./lib/URI'),
	Authority: require('./lib/Authority'),
	UserInfo: require('./lib/UserInfo'),
	Query: require('./lib/Query')
};

},{"./lib/Authority":24,"./lib/Query":25,"./lib/URI":26,"./lib/UserInfo":27}],24:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserInfo = require('./UserInfo');
var percentEncodingHelper = require('./percentEncodingHelper');

var PORT_REGEXP = /^\d+$/;
var ERROR_PORT = 'URI authority port must satisfy expression ' + PORT_REGEXP.toString();

var Authority = function () {
	_createClass(Authority, [{
		key: 'createUserInfo',
		value: function createUserInfo(string) {
			return Authority.createUserInfo(string);
		}
	}], [{
		key: 'createUserInfo',
		value: function createUserInfo(string) {
			return new UserInfo(string);
		}
	}]);

	function Authority(authorityString) {
		_classCallCheck(this, Authority);

		this.userInfo = null;

		this.port = null;

		this.host = null;

		if (typeof authorityString === 'string' && authorityString.length > 0) {
			var firstAtIndex = authorityString.indexOf('@');
			if (firstAtIndex !== -1) {
				var userInfoString = authorityString.substring(0, firstAtIndex);
				this.userInfo = new UserInfo(userInfoString);
				authorityString = authorityString.substring(firstAtIndex + 1);
			}

			var lastColonIndex = authorityString.lastIndexOf(':');
			if (lastColonIndex !== -1) {
				var portString = authorityString.substring(lastColonIndex + 1);
				if (lastColonIndex === authorityString.length - 1) {
					this.port = '';
					authorityString = authorityString.substring(0, lastColonIndex);
				} else if (PORT_REGEXP.test(portString)) {
					this.port = portString;
					authorityString = authorityString.substring(0, lastColonIndex);
				}
			}

			this.host = percentEncodingHelper.decode(authorityString);
		}
	}

	_createClass(Authority, [{
		key: 'clone',
		value: function clone() {
			var authority = new Authority();
			if (this.userInfo) {
				authority.userInfo = this.userInfo.clone();
			}
			if (typeof this.host === 'string') {
				authority.host = this.host;
			}
			if (typeof this.port === 'string') {
				authority.port = this.port;
			}
			return authority;
		}
	}, {
		key: 'toString',
		value: function toString() {
			var result = '';
			if (this.userInfo instanceof UserInfo) {
				result += this.userInfo.toString() + '@';
			}
			if (this.host !== undefined && this.host !== null) {
				var host = String(this.host);
				result += percentEncodingHelper.encodeHost(host);
			}
			if (this.port !== undefined && this.port !== null) {
				var port = String(this.port);
				if (port.length > 0 && !PORT_REGEXP.test(port)) {
					throw new Error(ERROR_PORT);
				}
				result += ':' + port;
			}
			return result;
		}
	}]);

	return Authority;
}();

module.exports = Authority;

},{"./UserInfo":27,"./percentEncodingHelper":28}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var percentEncodingHelper = require('./percentEncodingHelper');

var Query = function () {
	function Query(queryString) {
		var _this = this;

		_classCallCheck(this, Query);

		this.values = null;

		if (typeof queryString === 'string') {
			this.values = {};

			queryString.split('&').forEach(function (pair) {
				var parts = pair.split('=');
				var key = percentEncodingHelper.decode(parts[0]);
				if (!key) {
					return;
				}
				if (key in _this.values && !(_this.values[key] instanceof Array)) {
					_this.values[key] = [_this.values[key]];
				}

				var value = typeof parts[1] === 'string' ? percentEncodingHelper.decode(parts[1]) : null;

				if (_this.values[key] instanceof Array) {
					_this.values[key].push(value);
				} else {
					_this.values[key] = value;
				}
			}, this);
		}
	}

	_createClass(Query, [{
		key: 'clone',
		value: function clone() {
			var _this2 = this;

			var query = new Query();
			if (this.values) {
				query.values = {};
				Object.keys(this.values).forEach(function (key) {
					query.values[key] = _this2.values[key];
				}, this);
			}
			return query;
		}
	}, {
		key: 'toString',
		value: function toString() {
			var _this3 = this;

			if (!this.values) {
				return '';
			}

			var queryString = '';
			Object.keys(this.values).forEach(function (key) {
				var values = _this3.values[key] instanceof Array ? _this3.values[key] : [_this3.values[key]];

				values.forEach(function (value) {
					queryString += '&' + percentEncodingHelper.encodeQuerySubComponent(key);
					if (value === undefined || value === null) {
						return;
					}
					value = String(value);
					queryString += '=' + percentEncodingHelper.encodeQuerySubComponent(value);
				});
			}, this);

			return queryString.replace(/^&/, '');
		}
	}]);

	return Query;
}();

module.exports = Query;

},{"./percentEncodingHelper":28}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var percentEncodingHelper = require('./percentEncodingHelper');

var Authority = require('./Authority');
var Query = require('./Query');

var URI_PARSE_REGEXP = new RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?');

var SCHEME_REGEXP = /^[a-z]+[a-z\d\+\.-]*$/i;
var ERROR_SCHEME = 'URI scheme must satisfy expression ' + SCHEME_REGEXP.toString();

var URI = function () {
	_createClass(URI, [{
		key: 'createAuthority',
		value: function createAuthority(string) {
			return URI.createAuthority(string);
		}
	}, {
		key: 'createUserInfo',
		value: function createUserInfo(string) {
			return URI.createUserInfo(string);
		}
	}, {
		key: 'createQuery',
		value: function createQuery(string) {
			return URI.createQuery(string);
		}
	}], [{
		key: 'createAuthority',
		value: function createAuthority(string) {
			return new Authority(string);
		}
	}, {
		key: 'createUserInfo',
		value: function createUserInfo(string) {
			return Authority.createUserInfo(string);
		}
	}, {
		key: 'createQuery',
		value: function createQuery(string) {
			return new Query(string);
		}
	}]);

	function URI(uriString) {
		_classCallCheck(this, URI);

		this.scheme = null;

		this.authority = null;

		this.path = null;

		this.query = null;

		this.fragment = null;

		if (typeof uriString !== 'string') {
			uriString = '';
		}

		var matches = uriString.match(URI_PARSE_REGEXP);

		if (matches) {
			if (typeof matches[2] === 'string') {
				this.scheme = percentEncodingHelper.decode(matches[2]);
			}
			if (typeof matches[4] === 'string') {
				this.authority = URI.createAuthority(matches[4]);
			}
			if (typeof matches[5] === 'string') {
				this.path = percentEncodingHelper.decodePath(matches[5]);
			}
			if (typeof matches[7] === 'string') {
				this.query = URI.createQuery(matches[7]);
			}
			if (typeof matches[9] === 'string') {
				this.fragment = percentEncodingHelper.decode(matches[9]);
			}
		}
	}

	_createClass(URI, [{
		key: 'resolveRelative',
		value: function resolveRelative(baseUri) {
			if (!baseUri.scheme) {
				throw new Error('Scheme component is required to be present in a base URI');
			}

			return transformReference(baseUri, this);
		}
	}, {
		key: 'clone',
		value: function clone() {
			var uri = new URI();

			if (typeof this.scheme === 'string') {
				uri.scheme = this.scheme;
			}

			if (this.authority) {
				uri.authority = this.authority.clone();
			}

			if (typeof this.path === 'string') {
				uri.path = this.path;
			}

			if (this.query) {
				uri.query = this.query.clone();
			}

			if (typeof this.fragment === 'string') {
				uri.fragment = this.fragment;
			}

			return uri;
		}
	}, {
		key: 'toString',
		value: function toString() {
			var result = '';

			if (this.scheme !== undefined && this.scheme !== null) {
				var scheme = String(this.scheme);
				if (!SCHEME_REGEXP.test(scheme)) {
					throw new Error(ERROR_SCHEME);
				}
				result += scheme + ':';
			}

			if (this.authority instanceof Authority) {
				result += '//' + this.authority.toString();
			}

			var path = this.path === undefined || this.path === null ? '' : String(this.path);
			result += percentEncodingHelper.encodePath(path);

			if (this.query instanceof Query) {
				result += '?' + this.query.toString();
			}

			if (this.fragment !== undefined && this.fragment !== null) {
				var fragment = String(this.fragment);
				result += '#' + percentEncodingHelper.encodeFragment(fragment);
			}

			return result;
		}
	}]);

	return URI;
}();

function transformReference(baseUri, referenceUri) {
	var targetUri = new URI('');

	if (referenceUri.scheme) {
		targetUri.scheme = referenceUri.scheme;
		targetUri.authority = referenceUri.authority ? referenceUri.authority.clone() : referenceUri.authority;
		targetUri.path = removeDotSegments(referenceUri.path);
		targetUri.query = referenceUri.query ? referenceUri.query.clone() : referenceUri.query;
	} else {
		if (referenceUri.authority) {
			targetUri.authority = referenceUri.authority ? referenceUri.authority.clone() : referenceUri.authority;
			targetUri.path = removeDotSegments(referenceUri.path);
			targetUri.query = referenceUri.query ? referenceUri.query.clone() : referenceUri.query;
		} else {
			if (referenceUri.path === '') {
				targetUri.path = baseUri.path;
				if (referenceUri.query) {
					targetUri.query = referenceUri.query.clone();
				} else {
					targetUri.query = baseUri.query ? baseUri.query.clone() : baseUri.query;
				}
			} else {
				if (referenceUri.path[0] === '/') {
					targetUri.path = removeDotSegments(referenceUri.path);
				} else {
					targetUri.path = merge(baseUri, referenceUri);
					targetUri.path = removeDotSegments(targetUri.path);
				}
				targetUri.query = referenceUri.query ? referenceUri.query.clone() : referenceUri.query;
			}
			targetUri.authority = baseUri.authority ? baseUri.authority.clone() : baseUri.authority;
		}
		targetUri.scheme = baseUri.scheme;
	}

	targetUri.fragment = referenceUri.fragment;
	return targetUri;
}

function merge(baseUri, referenceUri) {
	if (baseUri.authority && baseUri.path === '') {
		return '/' + referenceUri.path;
	}

	var segmentsString = baseUri.path.indexOf('/') !== -1 ? baseUri.path.replace(/\/[^\/]+$/, '/') : '';

	return segmentsString + referenceUri.path;
}

function removeDotSegments(uriPath) {
	if (!uriPath) {
		return '';
	}

	var inputBuffer = uriPath;
	var newBuffer = '';
	var nextSegment = '';
	var outputBuffer = '';

	while (inputBuffer.length !== 0) {
		newBuffer = inputBuffer.replace(/^\.?\.\//, '');
		if (newBuffer !== inputBuffer) {
			inputBuffer = newBuffer;
			continue;
		}

		newBuffer = inputBuffer.replace(/^((\/\.\/)|(\/\.$))/, '/');
		if (newBuffer !== inputBuffer) {
			inputBuffer = newBuffer;
			continue;
		}

		newBuffer = inputBuffer.replace(/^((\/\.\.\/)|(\/\.\.$))/, '/');
		if (newBuffer !== inputBuffer) {
			outputBuffer = outputBuffer.replace(/\/[^\/]+$/, '');
			inputBuffer = newBuffer;
			continue;
		}

		if (inputBuffer === '.' || inputBuffer === '..') {
			break;
		}

		nextSegment = /^\/?[^\/]*(\/|$)/.exec(inputBuffer)[0];
		nextSegment = nextSegment.replace(/([^\/])(\/$)/, '$1');
		inputBuffer = inputBuffer.substring(nextSegment.length);
		outputBuffer += nextSegment;
	}

	return outputBuffer;
}

module.exports = URI;

},{"./Authority":24,"./Query":25,"./percentEncodingHelper":28}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var percentEncodingHelper = require('./percentEncodingHelper');

var UserInfo = function () {
	function UserInfo(userInfoString) {
		_classCallCheck(this, UserInfo);

		this.user = null;

		this.password = null;

		if (typeof userInfoString === 'string' && userInfoString.length > 0) {
			var parts = userInfoString.split(':');
			if (typeof parts[0] === 'string') {
				this.user = percentEncodingHelper.decode(parts[0]);
			}
			if (typeof parts[1] === 'string') {
				this.password = percentEncodingHelper.decode(parts[1]);
			}
		}
	}

	_createClass(UserInfo, [{
		key: 'clone',
		value: function clone() {
			var userInfo = new UserInfo();
			if (typeof this.user === 'string') {
				userInfo.user = this.user;
			}
			if (typeof this.password === 'string') {
				userInfo.password = this.password;
			}
			return userInfo;
		}
	}, {
		key: 'toString',
		value: function toString() {
			var result = '';
			if (this.user !== undefined && this.user !== null) {
				var user = String(this.user);
				result += percentEncodingHelper.encodeUserInfoSubComponent(user);
			}
			if (this.password !== undefined && this.password !== null) {
				var password = String(this.password);
				result += ':' + percentEncodingHelper.encodeUserInfoSubComponent(password);
			}

			return result;
		}
	}]);

	return UserInfo;
}();

module.exports = UserInfo;

},{"./percentEncodingHelper":28}],28:[function(require,module,exports){
'use strict';

module.exports = {
	encodeUserInfoSubComponent: function encodeUserInfoSubComponent(string) {
		return string.replace(/[^\w\.~\-!\$&'\(\)\*\+,;=\uD800-\uDBFF\uDC00-\uDFFF]/g, encodeURIComponent);
	},
	encodeHost: function encodeHost(string) {
		return string.replace(/[^\w\.~\-!\$&'\(\)\*\+,;=:\[\]\uD800-\uDBFF\uDC00-\uDFFF]/g, encodeURIComponent);
	},
	encodePath: function encodePath(string) {
		return string.split(/%2f/i).map(function (part) {
			return part.replace(/[^\w\.~\-!\$&'\(\)\*\+,;=:@\/\uD800-\uDBFF\uDC00-\uDFFF]/g, encodeURIComponent);
		}).reduce(function (prev, current) {
			if (!prev) {
				return current;
			}
			if (!current) {
				return prev;
			}
			return prev + '%2F' + current;
		}, '');
	},
	encodeQuerySubComponent: function encodeQuerySubComponent(string) {
		return string.replace(/[^\w\.~\-!\$'\(\)\*\+,;:@\/\?\uD800-\uDBFF\uDC00-\uDFFF]/g, encodeURIComponent);
	},
	encodeFragment: function encodeFragment(string) {
		return string.replace(/[^\w\.~\-!\$&'\(\)\*\+,;=:@\/\?\uD800-\uDBFF\uDC00-\uDFFF]/g, encodeURIComponent);
	},
	decode: function decode(string) {
		return decodeURIComponent(string);
	},
	decodePath: function decodePath(string) {
		return string.split(/%2f/i).map(decodeURIComponent).reduce(function (prev, current) {
			if (!prev) {
				return current;
			}
			if (!current) {
				return prev;
			}
			return prev + '%2F' + current;
		}, '');
	}
};

},{}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CatberryBase = require('../lib/base/CatberryBase');

var Promise = require('promise');

if (!('Promise' in window)) {
	window.Promise = Promise;
}

var Catberry = function (_CatberryBase) {
	_inherits(Catberry, _CatberryBase);

	function Catberry() {
		_classCallCheck(this, Catberry);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Catberry).call(this));

		_this._router = null;
		return _this;
	}

	_createClass(Catberry, [{
		key: 'wrapDocument',
		value: function wrapDocument() {
			this._router = this.locator.resolve('requestRouter');
		}
	}, {
		key: 'startWhenReady',
		value: function startWhenReady() {
			var _this2 = this;

			if (window.catberry) {
				return Promise.resolve();
			}

			return new Promise(function (fulfill, reject) {
				window.document.addEventListener('DOMContentLoaded', function () {
					try {
						_this2.wrapDocument();
						window.catberry = _this2;
						fulfill();
					} catch (e) {
						reject(e);
					}
				});
			});
		}
	}]);

	return Catberry;
}(CatberryBase);

module.exports = Catberry;

},{"../lib/base/CatberryBase":42,"promise":57}],30:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CookieWrapperBase = require('../lib/base/CookieWrapperBase');

var CookieWrapper = function (_CookieWrapperBase) {
	_inherits(CookieWrapper, _CookieWrapperBase);

	function CookieWrapper(locator) {
		_classCallCheck(this, CookieWrapper);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CookieWrapper).call(this));

		_this._window = locator.resolve('window');
		return _this;
	}

	_createClass(CookieWrapper, [{
		key: 'getCookieString',
		value: function getCookieString() {
			return this._window.document.cookie ? this._window.document.cookie.toString() : '';
		}
	}, {
		key: 'set',
		value: function set(cookieSetup) {
			var cookie = this._convertToCookieSetup(cookieSetup);
			this._window.document.cookie = cookie;
			return cookie;
		}
	}]);

	return CookieWrapper;
}(CookieWrapperBase);

module.exports = CookieWrapper;

},{"../lib/base/CookieWrapperBase":43}],31:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var morphdom = require('morphdom');
var errorHelper = require('../lib/helpers/errorHelper');
var moduleHelper = require('../lib/helpers/moduleHelper');
var hrTimeHelper = require('../lib/helpers/hrTimeHelper');
var DocumentRendererBase = require('../lib/base/DocumentRendererBase');

var SPECIAL_IDS = {
	$$head: '$$head',
	$$document: '$$document'
};
var TAG_NAMES = {
	TITLE: 'TITLE',
	HTML: 'HTML',
	HEAD: 'HEAD',
	BASE: 'BASE',
	STYLE: 'STYLE',
	SCRIPT: 'SCRIPT',
	NOSCRIPT: 'NOSCRIPT',
	META: 'META',
	LINK: 'LINK'
};
var NODE_TYPES = {
	ELEMENT_NODE: 1,
	TEXT_NODE: 3,
	PROCESSING_INSTRUCTION_NODE: 7,
	COMMENT_NODE: 8
};

var NON_BUBBLING_EVENTS = {
	abort: true,
	blur: true,
	error: true,
	focus: true,
	load: true,
	mouseenter: true,
	mouseleave: true,
	resize: true,
	unload: true
};

var DocumentRenderer = function (_DocumentRendererBase) {
	_inherits(DocumentRenderer, _DocumentRendererBase);

	function DocumentRenderer(locator) {
		_classCallCheck(this, DocumentRenderer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DocumentRenderer).call(this, locator));

		_this._componentInstances = Object.create(null);

		_this._componentElements = Object.create(null);

		_this._componentBindings = Object.create(null);

		_this._currentChangedStores = Object.create(null);

		_this._window = locator.resolve('window');

		_this._config = locator.resolve('config');

		_this._storeDispatcher = locator.resolve('storeDispatcher');

		_this._renderedPromise = null;

		_this._isUpdating = false;

		_this._awaitingRouting = null;

		_this._currentRoutingContext = null;

		_this._eventBus.on('storeChanged', function (storeName) {
			_this._currentChangedStores[storeName] = true;
			if (_this._isStateChanging) {
				return;
			}
			_this._updateStoreComponents();
		});
		return _this;
	}

	_createClass(DocumentRenderer, [{
		key: 'initWithState',
		value: function initWithState(state, routingContext) {
			var _this2 = this;

			return this._getPromiseForReadyState().then(function () {
				_this2._currentRoutingContext = routingContext;
				return _this2._storeDispatcher.setState(state, routingContext);
			}).then(function () {
				var components = _this2._componentLoader.getComponentsByNames();
				var elements = _this2._findComponentElements(_this2._window.document.documentElement, components, true);
				elements.unshift(_this2._window.document.head);
				elements.unshift(_this2._window.document.documentElement);
				return _this2._initialWrap(components, elements);
			});
		}
	}, {
		key: 'render',
		value: function render(state, routingContext) {
			var _this3 = this;

			this._awaitingRouting = {
				state: state,
				routingContext: routingContext
			};
			if (this._isStateChanging) {
				return this._renderedPromise;
			}

			this._isStateChanging = true;

			this._renderedPromise = this._getPromiseForReadyState().then(function () {
				return _this3._updateStoreComponents();
			}).catch(function (reason) {
				return _this3._eventBus.emit('error', reason);
			}).then(function () {
				_this3._isStateChanging = false;
			});

			return this._renderedPromise;
		}
	}, {
		key: 'renderComponent',
		value: function renderComponent(element, renderingContext) {
			var _this4 = this;

			return this._getPromiseForReadyState().then(function () {
				var id = _this4._getId(element);
				var componentName = moduleHelper.getOriginalComponentName(element.tagName);

				if (!id) {
					_this4._eventBus.emit('warn', 'Component "' + componentName + '" does not have an ID, skipping...');
					return null;
				}

				if (!renderingContext) {
					renderingContext = _this4._createRenderingContext([]);
					renderingContext.rootIds[id] = true;
				}

				var hadChildren = element.hasChildNodes();
				var component = renderingContext.components[componentName];
				if (!component) {
					return null;
				}

				if (id in renderingContext.renderedIds) {
					_this4._eventBus.emit('warn', 'The duplicated ID "' + id + '" has been found, skipping component "' + componentName + '"...');
					return null;
				}

				renderingContext.renderedIds[id] = true;

				var instance = _this4._componentInstances[id];
				if (!instance) {
					component.constructor.prototype.$context = _this4._getComponentContext(component, element);
					instance = new component.constructor(_this4._serviceLocator);
					instance.$context = component.constructor.prototype.$context;
					_this4._componentInstances[id] = instance;
				}

				var eventArgs = {
					name: componentName,
					context: instance.$context
				};

				_this4._componentElements[id] = element;

				var startTime = hrTimeHelper.get();
				_this4._eventBus.emit('componentRender', eventArgs);

				return Promise.resolve().then(function () {
					if (!(id in renderingContext.rootIds) || !hadChildren) {
						return [];
					}

					return _this4._unbindAll(element, renderingContext);
				}).catch(function (reason) {
					return _this4._eventBus.emit('error', reason);
				}).then(function () {
					if (instance.$context.element !== element) {
						instance.$context = _this4._getComponentContext(component, element);
					}
					var renderMethod = moduleHelper.getMethodToInvoke(instance, 'render');
					return moduleHelper.getSafePromise(renderMethod);
				}).then(function (dataContext) {
					return component.template.render(dataContext);
				}).catch(function (reason) {
					return _this4._handleRenderError(element, component, reason);
				}).then(function (html) {
					var isHead = element.tagName === TAG_NAMES.HEAD;
					if (html === '' && isHead) {
						return [];
					}

					var tmpElement = _this4._createTemporaryElement(element);
					tmpElement.innerHTML = html;

					if (isHead) {
						_this4._mergeHead(element, tmpElement);
						return [];
					}

					morphdom(element, tmpElement, {
						onBeforeMorphElChildren: function onBeforeMorphElChildren(foundElement) {
							return foundElement === element || !_this4._isComponent(renderingContext.components, foundElement);
						}
					});

					var promises = _this4._findComponentElements(element, renderingContext.components, false).map(function (child) {
						return _this4.renderComponent(child, renderingContext);
					});

					return Promise.all(promises);
				}).then(function () {
					eventArgs.hrTime = hrTimeHelper.get(startTime);
					eventArgs.time = hrTimeHelper.toMilliseconds(eventArgs.hrTime);
					_this4._eventBus.emit('componentRendered', eventArgs);
					return _this4._bindComponent(element);
				}).then(function () {
					if (!(id in renderingContext.rootIds) || !hadChildren) {
						return;
					}
					_this4._collectRenderingGarbage(renderingContext);
				}).catch(function (reason) {
					return _this4._eventBus.emit('error', reason);
				});
			});
		}
	}, {
		key: 'getComponentById',
		value: function getComponentById(id) {
			return this._componentInstances[id] || null;
		}
	}, {
		key: 'getComponentByElement',
		value: function getComponentByElement(element) {
			if (!element) {
				return null;
			}
			var id = this._getId(element);
			return this.getComponentById(id);
		}
	}, {
		key: 'collectGarbage',
		value: function collectGarbage() {
			var _this5 = this;

			return this._getPromiseForReadyState().then(function () {
				var promises = [];
				Object.keys(_this5._componentElements).forEach(function (id) {
					if (SPECIAL_IDS.hasOwnProperty(id)) {
						return;
					}
					var element = _this5._window.document.getElementById(id);
					if (element) {
						return;
					}

					var promise = _this5._unbindComponent(_this5._componentElements[id]).then(function () {
						return _this5._removeComponent(id);
					});
					promises.push(promise);
				});
				return Promise.all(promises);
			});
		}
	}, {
		key: 'createComponent',
		value: function createComponent(tagName, attributes) {
			var _this6 = this;

			if (typeof tagName !== 'string' || !attributes || (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) !== 'object') {
				return Promise.reject(new Error('Tag name should be a string and attributes should be an object'));
			}

			return this._getPromiseForReadyState().then(function () {
				var components = _this6._componentLoader.getComponentsByNames();
				var componentName = moduleHelper.getOriginalComponentName(tagName);

				if (moduleHelper.isHeadComponent(componentName) || moduleHelper.isDocumentComponent(componentName) || !(componentName in components)) {
					return Promise.reject(new Error('Component for tag "' + tagName + '" not found'));
				}

				var safeTagName = moduleHelper.getTagNameForComponentName(componentName);

				var id = attributes[moduleHelper.ATTRIBUTE_ID];
				if (!id || id in _this6._componentInstances) {
					return Promise.reject(new Error('The ID is not specified or already used'));
				}

				var element = _this6._window.document.createElement(safeTagName);
				Object.keys(attributes).forEach(function (attributeName) {
					element.setAttribute(attributeName, attributes[attributeName]);
				});

				return _this6.renderComponent(element).then(function () {
					return element;
				});
			});
		}
	}, {
		key: '_collectRenderingGarbage',
		value: function _collectRenderingGarbage(renderingContext) {
			var _this7 = this;

			Object.keys(renderingContext.unboundIds).forEach(function (id) {
				if (id in renderingContext.renderedIds) {
					return;
				}

				if (_this7._window.document.getElementById(id) !== null) {
					return;
				}

				_this7._removeComponent(id);
			});
		}
	}, {
		key: '_unbindAll',
		value: function _unbindAll(element, renderingContext) {
			var _this8 = this;

			var rootId = this._getId(element);
			var promises = [];

			this._findComponentElements(element, renderingContext.components, true).forEach(function (innerElement) {
				var id = _this8._getId(innerElement);
				renderingContext.unboundIds[id] = true;
				promises.push(_this8._unbindComponent(innerElement));
			});

			renderingContext.unboundIds[rootId] = true;
			promises.push(this._unbindComponent(element));

			return Promise.all(promises);
		}
	}, {
		key: '_unbindComponent',
		value: function _unbindComponent(element) {
			var _this9 = this;

			var id = this._getId(element);
			var instance = this._componentInstances[id];

			if (!instance) {
				return Promise.resolve();
			}
			if (id in this._componentBindings) {
				Object.keys(this._componentBindings[id]).forEach(function (eventName) {
					element.removeEventListener(eventName, _this9._componentBindings[id][eventName].handler, NON_BUBBLING_EVENTS.hasOwnProperty(eventName));
				});
				delete this._componentBindings[id];
			}

			var unbindMethod = moduleHelper.getMethodToInvoke(instance, 'unbind');
			return moduleHelper.getSafePromise(unbindMethod).then(function () {
				_this9._eventBus.emit('componentUnbound', {
					element: element,
					id: !SPECIAL_IDS.hasOwnProperty(id) ? id : null
				});
			}).catch(function (reason) {
				return _this9._eventBus.emit('error', reason);
			});
		}
	}, {
		key: '_removeComponent',
		value: function _removeComponent(id) {
			delete this._componentElements[id];
			delete this._componentInstances[id];
			delete this._componentBindings[id];
		}
	}, {
		key: '_bindComponent',
		value: function _bindComponent(element) {
			var _this10 = this;

			var id = this._getId(element);
			var instance = this._componentInstances[id];
			if (!instance) {
				return Promise.resolve();
			}

			var bindMethod = moduleHelper.getMethodToInvoke(instance, 'bind');
			return moduleHelper.getSafePromise(bindMethod).then(function (bindings) {
				if (!bindings || (typeof bindings === 'undefined' ? 'undefined' : _typeof(bindings)) !== 'object') {
					_this10._eventBus.emit('componentBound', {
						element: element,
						id: !SPECIAL_IDS.hasOwnProperty(id) ? id : null
					});
					return;
				}
				_this10._componentBindings[id] = Object.create(null);
				Object.keys(bindings).forEach(function (eventName) {
					eventName = eventName.toLowerCase();
					if (eventName in _this10._componentBindings[id]) {
						return;
					}
					var selectorHandlers = Object.create(null);
					Object.keys(bindings[eventName]).forEach(function (selector) {
						var handler = bindings[eventName][selector];
						if (typeof handler !== 'function') {
							return;
						}
						selectorHandlers[selector] = handler.bind(instance);
					});
					_this10._componentBindings[id][eventName] = {
						handler: _this10._createBindingHandler(element, selectorHandlers),
						selectorHandlers: selectorHandlers
					};
					element.addEventListener(eventName, _this10._componentBindings[id][eventName].handler, NON_BUBBLING_EVENTS.hasOwnProperty(eventName));
				});
				_this10._eventBus.emit('componentBound', {
					element: element,
					id: id
				});
			});
		}
	}, {
		key: '_createBindingHandler',
		value: function _createBindingHandler(componentRoot, selectorHandlers) {
			var selectors = Object.keys(selectorHandlers);
			return function (event) {
				var element = event.target;
				var dispatchedEvent = createCustomEvent(event, function () {
					return element;
				});
				var targetMatches = getMatchesMethod(element);
				var isHandled = selectors.some(function (selector) {
					if (targetMatches(selector)) {
						selectorHandlers[selector](dispatchedEvent);
						return true;
					}
					return false;
				});

				if (isHandled || !event.bubbles) {
					return;
				}

				while (element.parentElement && element !== componentRoot) {
					element = element.parentElement;
					targetMatches = getMatchesMethod(element);
					for (var i = 0; i < selectors.length; i++) {
						var selector = selectors[i];
						if (!targetMatches(selector)) {
							continue;
						}
						isHandled = true;
						selectorHandlers[selector](dispatchedEvent);
						break;
					}

					if (isHandled) {
						break;
					}
				}
			};
		}
	}, {
		key: '_isComponent',
		value: function _isComponent(components, element) {
			var currentNodeName = element.nodeName;
			return moduleHelper.COMPONENT_PREFIX_REGEXP.test(currentNodeName) && moduleHelper.getOriginalComponentName(currentNodeName) in components;
		}
	}, {
		key: '_findComponentElements',
		value: function _findComponentElements(element, components, goInComponents) {
			var elements = [];
			var queue = [element];

			while (queue.length > 0) {
				var currentChildren = queue.shift().childNodes;
				for (var i = 0; i < currentChildren.length; i++) {
					var currentChild = currentChildren[i];

					if (currentChild.nodeType !== 1) {
						continue;
					}

					if (!this._isComponent(components, currentChild)) {
						queue.push(currentChild);
						continue;
					}

					if (goInComponents) {
						queue.push(currentChild);
					}
					elements.push(currentChild);
				}
			}
			return elements;
		}
	}, {
		key: '_handleRenderError',
		value: function _handleRenderError(element, component, error) {
			var _this11 = this;

			this._eventBus.emit('error', error);

			return Promise.resolve().then(function () {
				if (element.tagName === TAG_NAMES.HEAD) {
					return '';
				}

				if (!_this11._config.isRelease && error instanceof Error) {
					return errorHelper.prettyPrint(error, _this11._window.navigator.userAgent);
				} else if (component.errorTemplate) {
					return component.errorTemplate.render(error);
				}

				return '';
			}).catch(function () {
				return '';
			});
		}
	}, {
		key: '_updateStoreComponents',
		value: function _updateStoreComponents() {
			var _this12 = this;

			if (this._isUpdating) {
				return Promise.resolve();
			}

			var documentStore = this._window.document.documentElement.getAttribute(moduleHelper.ATTRIBUTE_STORE);
			if (documentStore in this._currentChangedStores) {
				var newLocation = this._currentRoutingContext.location.toString();
				if (newLocation === this._window.location.toString()) {
					this._window.location.reload();
					return Promise.resolve();
				}
				this._window.location.assign(newLocation);
				return Promise.resolve();
			}

			this._isUpdating = true;

			if (this._awaitingRouting) {
				(function () {
					var components = _this12._componentLoader.getComponentsByNames();
					var changedByState = _this12._storeDispatcher.setState(_this12._awaitingRouting.state, _this12._awaitingRouting.routingContext);

					changedByState.forEach(function (name) {
						_this12._currentChangedStores[name] = true;
					});

					_this12._currentRoutingContext = _this12._awaitingRouting.routingContext;
					Object.keys(_this12._componentInstances).forEach(function (id) {
						var instance = _this12._componentInstances[id];
						instance.$context = _this12._getComponentContext(components[instance.$context.name], instance.$context.element);
					});
					_this12._awaitingRouting = null;
				})();
			}

			var changedStores = Object.keys(this._currentChangedStores);
			if (changedStores.length === 0) {
				this._isUpdating = false;
				return Promise.resolve();
			}

			this._currentChangedStores = Object.create(null);

			var renderingContext = this._createRenderingContext(changedStores);
			var promises = renderingContext.roots.map(function (root) {
				renderingContext.rootIds[_this12._getId(root)] = true;
				return _this12.renderComponent(root, renderingContext);
			});

			return Promise.all(promises).catch(function (reason) {
				return _this12._eventBus.emit('error', reason);
			}).then(function () {
				_this12._isUpdating = false;
				_this12._eventBus.emit('documentUpdated', changedStores);
				return _this12._updateStoreComponents();
			});
		}
	}, {
		key: '_mergeHead',
		value: function _mergeHead(head, newHead) {
			if (!newHead) {
				return;
			}

			var headSet = Object.create(null);

			for (var i = 0; i < head.children.length; i++) {
				if (!isTagImmutable(head.children[i])) {
					continue;
				}
				var key = this._getElementKey(head.children[i]);
				headSet[key] = true;
			}

			for (var _i = 0; _i < newHead.children.length; _i++) {
				var _key = this._getElementKey(newHead.children[_i]);
				if (_key in headSet) {
					newHead.removeChild(newHead.children[_i]);
					_i--;
				}
			}

			morphdom(head, newHead, {
				childrenOnly: true,

				onBeforeMorphElChildren: function onBeforeMorphElChildren(newElement, oldElement) {
					return !isTagImmutable(oldElement);
				},

				onBeforeNodeDiscarded: function onBeforeNodeDiscarded(node) {
					return !isTagImmutable(node);
				}
			});
		}
	}, {
		key: '_getElementKey',
		value: function _getElementKey(element) {
			if (element.nodeType !== NODE_TYPES.ELEMENT_NODE) {
				return '';
			}

			var attributes = [];
			if (element.hasAttributes()) {
				for (var i = 0; i < element.attributes.length; i++) {
					var current = element.attributes[i];
					attributes.push(current.name + '="' + current.value + '"');
				}
			}

			return '<' + element.nodeName + ' ' + attributes.sort().join(' ') + '>' + element.textContent + '</' + element.nodeName + '>';
		}
	}, {
		key: '_initialWrap',
		value: function _initialWrap(components, elements) {
			var _this13 = this;

			var current = elements.pop();

			return Promise.resolve().then(function () {
				var id = _this13._getId(current);
				if (!id) {
					return null;
				}

				var componentName = moduleHelper.getOriginalComponentName(current.nodeName);
				if (!(componentName in components)) {
					return null;
				}
				var ComponentConstructor = components[componentName].constructor;
				ComponentConstructor.prototype.$context = _this13._getComponentContext(components[componentName], current);

				var instance = new ComponentConstructor(_this13._serviceLocator);
				instance.$context = ComponentConstructor.prototype.$context;
				_this13._componentElements[id] = current;
				_this13._componentInstances[id] = instance;

				_this13._storeDispatcher.getStore(current.getAttribute(moduleHelper.ATTRIBUTE_STORE));
				_this13._eventBus.emit('componentRendered', {
					name: componentName,
					attributes: instance.$context.attributes,
					context: instance.$context
				});
				return _this13._bindComponent(current);
			}).then(function () {
				if (elements.length > 0) {
					return _this13._initialWrap(components, elements);
				}

				_this13._eventBus.emit('documentRendered', _this13._currentRoutingContext);
				return null;
			});
		}
	}, {
		key: '_getComponentContext',
		value: function _getComponentContext(component, element) {
			var _this14 = this;

			var storeName = element.getAttribute(moduleHelper.ATTRIBUTE_STORE);
			var componentContext = Object.create(this._currentRoutingContext);

			this._storeDispatcher.getStore(storeName);

			Object.defineProperties(componentContext, {
				name: {
					get: function get() {
						return component.name;
					},
					enumerable: true
				},
				attributes: {
					get: function get() {
						return attributesToObject(element.attributes);
					},
					enumerable: true
				}
			});

			componentContext.element = element;
			componentContext.getComponentById = function (id) {
				return _this14.getComponentById(id);
			};
			componentContext.getComponentByElement = function (element) {
				return _this14.getComponentByElement(element);
			};
			componentContext.createComponent = function (tagName, attributes) {
				return _this14.createComponent(tagName, attributes);
			};
			componentContext.collectGarbage = function () {
				return _this14.collectGarbage();
			};
			componentContext.getStoreData = function () {
				var currentStoreName = element.getAttribute(moduleHelper.ATTRIBUTE_STORE);
				return _this14._storeDispatcher.getStoreData(currentStoreName);
			};
			componentContext.sendAction = function (name, args) {
				var currentStoreName = element.getAttribute(moduleHelper.ATTRIBUTE_STORE);
				return _this14._storeDispatcher.sendAction(currentStoreName, name, args);
			};
			componentContext.sendBroadcastAction = function (name, args) {
				return _this14._storeDispatcher.sendBroadcastAction(name, args);
			};

			return Object.freeze(componentContext);
		}
	}, {
		key: '_findRenderingRoots',
		value: function _findRenderingRoots(changedStoreNames) {
			var _this15 = this;

			var headStore = this._window.document.head.getAttribute(moduleHelper.ATTRIBUTE_STORE);
			var components = this._componentLoader.getComponentsByNames();
			var componentElements = Object.create(null);
			var storeNamesSet = Object.create(null);
			var rootsSet = Object.create(null);
			var roots = [];

			changedStoreNames.forEach(function (storeName) {
				storeNamesSet[storeName] = true;
				componentElements[storeName] = _this15._window.document.querySelectorAll('[' + moduleHelper.ATTRIBUTE_ID + '][' + moduleHelper.ATTRIBUTE_STORE + '="' + storeName + '"]');
			});

			if (moduleHelper.HEAD_COMPONENT_NAME in components && headStore in storeNamesSet) {
				rootsSet[this._getId(this._window.document.head)] = true;
				roots.push(this._window.document.head);
			}

			changedStoreNames.forEach(function (storeName) {
				for (var i = 0; i < componentElements[storeName].length; i++) {
					var current = componentElements[storeName][i];
					var currentRoot = current;
					var lastRoot = currentRoot;
					var lastRootId = _this15._getId(current);

					while (currentRoot.parentElement) {
						currentRoot = currentRoot.parentElement;

						var currentId = _this15._getId(currentRoot);
						var currentStore = currentRoot.getAttribute(moduleHelper.ATTRIBUTE_STORE);
						var currentComponentName = moduleHelper.getOriginalComponentName(currentRoot.tagName);

						if (!currentStore || !(currentStore in storeNamesSet)) {
							continue;
						}

						if (!(currentComponentName in components)) {
							continue;
						}

						lastRoot = currentRoot;
						lastRootId = currentId;
					}

					if (lastRootId in rootsSet) {
						continue;
					}
					rootsSet[lastRootId] = true;
					roots.push(lastRoot);
				}
			});

			return roots;
		}
	}, {
		key: '_createRenderingContext',
		value: function _createRenderingContext(changedStores) {
			var components = this._componentLoader.getComponentsByNames();

			return {
				config: this._config,
				renderedIds: Object.create(null),
				unboundIds: Object.create(null),
				isHeadRendered: false,
				bindMethods: [],
				routingContext: this._currentRoutingContext,
				components: components,
				rootIds: Object.create(null),
				roots: changedStores ? this._findRenderingRoots(changedStores) : []
			};
		}
	}, {
		key: '_getId',
		value: function _getId(element) {
			if (element === this._window.document.documentElement) {
				return SPECIAL_IDS.$$document;
			}
			if (element === this._window.document.head) {
				return SPECIAL_IDS.$$head;
			}
			return element.getAttribute(moduleHelper.ATTRIBUTE_ID);
		}
	}, {
		key: '_createTemporaryElement',
		value: function _createTemporaryElement(element) {
			var tmp = this._window.document.createElement(element.tagName);

			for (var i = 0; i < element.attributes.length; i++) {
				var current = element.attributes[i];
				tmp.setAttribute(current.name, current.value);
			}
			return tmp;
		}
	}]);

	return DocumentRenderer;
}(DocumentRendererBase);

function attributesToObject(attributes) {
	var result = Object.create(null);
	for (var i = 0; i < attributes.length; i++) {
		var current = attributes[i];
		result[current.name] = current.value;
	}
	return result;
}

function getMatchesMethod(element) {
	var method = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.msMatchesSelector;

	return method.bind(element);
}

function createCustomEvent(event, currentTargetGetter) {
	var catEvent = Object.create(event);
	var keys = [];
	var properties = {};

	for (var key in event) {
		keys.push(key);
	}
	keys.forEach(function (key) {
		if (typeof event[key] === 'function') {
			properties[key] = {
				get: function get() {
					return event[key].bind(event);
				}
			};
			return;
		}

		properties[key] = {
			get: function get() {
				return event[key];
			},
			set: function set(value) {
				event[key] = value;
			}
		};
	});

	properties.currentTarget = {
		get: currentTargetGetter
	};
	Object.defineProperties(catEvent, properties);
	Object.seal(catEvent);
	Object.freeze(catEvent);
	return catEvent;
}

function isTagImmutable(element) {
	return element.nodeName === TAG_NAMES.SCRIPT || element.nodeName === TAG_NAMES.STYLE || element.nodeName === TAG_NAMES.LINK && element.getAttribute('rel') === 'stylesheet';
}

module.exports = DocumentRenderer;

},{"../lib/base/DocumentRendererBase":44,"../lib/helpers/errorHelper":47,"../lib/helpers/hrTimeHelper":33,"../lib/helpers/moduleHelper":48,"morphdom":54}],32:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URI = require('catberry-uri').URI;

var MOUSE_PRIMARY_KEY = 0;
var HREF_ATTRIBUTE_NAME = 'href';
var TARGET_ATTRIBUTE_NAME = 'target';
var A_TAG_NAME = 'A';
var BODY_TAG_NAME = 'BODY';

var RequestRouter = function () {
	function RequestRouter(locator) {
		var _this = this;

		_classCallCheck(this, RequestRouter);

		this._eventBus = locator.resolve('eventBus');

		this._window = locator.resolve('window');

		this._documentRenderer = locator.resolve('documentRenderer');

		this._stateProvider = locator.resolve('stateProvider');

		this._contextFactory = locator.resolve('contextFactory');

		this._isHistorySupported = this._window.history && this._window.history.pushState instanceof Function;

		this._wrapDocument();

		this._location = new URI(this._window.location.toString());

		this._state = this._stateProvider.getStateByUri(this._location);

		this._isStateInitialized = false;

		this._referrer = '';

		this._changeState(this._state).catch(function (reason) {
			return _this._handleError(reason);
		});
	}

	_createClass(RequestRouter, [{
		key: 'route',
		value: function route(newLocation) {
			var _this2 = this;

			return Promise.resolve().then(function () {
				var state = _this2._stateProvider.getStateByUri(newLocation);
				var newLocationString = newLocation.toString();

				if (!state) {
					_this2._window.location.assign(newLocationString);
					return null;
				}

				var newQuery = newLocation.query ? newLocation.query.toString() : null;
				var currentQuery = _this2._location.query ? _this2._location.query.toString() : null;
				if (newLocation.path === _this2._location.path && newQuery === currentQuery) {
					_this2._location = newLocation;
					return null;
				}
				_this2._location = newLocation;
				return _this2._changeState(state);
			});
		}
	}, {
		key: 'go',
		value: function go(locationString) {
			var _this3 = this;

			return Promise.resolve().then(function () {
				var newLocation = new URI(locationString).resolveRelative(_this3._location);
				var newLocationString = newLocation.toString();
				var currentAuthority = _this3._location.authority ? _this3._location.authority.toString() : null;
				var newAuthority = newLocation.authority ? newLocation.authority.toString() : null;

				if (!_this3._isHistorySupported || newLocation.scheme !== _this3._location.scheme || newAuthority !== currentAuthority) {
					_this3._window.location.assign(newLocationString);
					return null;
				}

				return _this3.route(newLocation).then(function () {
					return _this3._window.history.pushState(_this3._state, '', _this3._location.toString());
				});
			});
		}
	}, {
		key: '_changeState',
		value: function _changeState(state) {
			var _this4 = this;

			return Promise.resolve().then(function () {
				var routingContext = _this4._contextFactory.create({
					referrer: _this4._referrer || _this4._window.document.referrer,
					location: _this4._location,
					userAgent: _this4._window.navigator.userAgent
				});

				if (state === null) {
					_this4._window.location.reload();
					return null;
				}

				if (!_this4._isStateInitialized) {
					_this4._isStateInitialized = true;
					return _this4._documentRenderer.initWithState(state, routingContext);
				}

				return _this4._documentRenderer.render(state, routingContext);
			}).then(function () {
				_this4._state = state;
				_this4._referrer = _this4._location;
			});
		}
	}, {
		key: '_wrapDocument',
		value: function _wrapDocument() {
			var _this5 = this;

			if (!this._isHistorySupported) {
				return;
			}

			this._window.addEventListener('popstate', function () {
				return _this5.route(new URI(_this5._window.location.toString())).catch(function (reason) {
					return _this5._handleError(reason);
				});
			});

			this._window.document.body.addEventListener('click', function (event) {
				if (event.defaultPrevented) {
					return;
				}
				if (event.target.tagName === A_TAG_NAME) {
					_this5._linkClickHandler(event, event.target);
				} else {
					var link = closestLink(event.target);
					if (!link) {
						return;
					}
					_this5._linkClickHandler(event, link);
				}
			});
		}
	}, {
		key: '_linkClickHandler',
		value: function _linkClickHandler(event, element) {
			var _this6 = this;

			var targetAttribute = element.getAttribute(TARGET_ATTRIBUTE_NAME);
			if (targetAttribute) {
				return;
			}

			if (event.button !== MOUSE_PRIMARY_KEY || event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
				return;
			}

			var locationString = element.getAttribute(HREF_ATTRIBUTE_NAME);
			if (!locationString) {
				return;
			}
			if (locationString[0] === '#') {
				return;
			}

			event.preventDefault();
			this.go(locationString).catch(function (reason) {
				return _this6._handleError(reason);
			});
		}
	}, {
		key: '_handleError',
		value: function _handleError(error) {
			this._eventBus.emit('error', error);
		}
	}]);

	return RequestRouter;
}();

function closestLink(element) {
	while (element && element.nodeName !== A_TAG_NAME && element.nodeName !== BODY_TAG_NAME) {
		element = element.parentNode;
	}
	return element && element.nodeName === A_TAG_NAME ? element : null;
}

module.exports = RequestRouter;

},{"catberry-uri":23}],33:[function(require,module,exports){
'use strict';

module.exports = {
	get: require('browser-process-hrtime'),

	toMessage: require('pretty-hrtime'),

	toMilliseconds: function toMilliseconds(hrTime) {
		return hrTime[0] * 1e3 + Math.round(hrTime[1] / 1e6);
	}
};

},{"browser-process-hrtime":11,"pretty-hrtime":55}],34:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleHelper = require('../../lib/helpers/moduleHelper');
var LoaderBase = require('../../lib/base/LoaderBase');

var ComponentLoader = function (_LoaderBase) {
	_inherits(ComponentLoader, _LoaderBase);

	function ComponentLoader(locator) {
		_classCallCheck(this, ComponentLoader);

		var componentTransforms;
		try {
			componentTransforms = locator.resolveAll('componentTransform');
		} catch (e) {
			componentTransforms = [];
		}

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ComponentLoader).call(this, locator, componentTransforms));

		_this._serviceLocator = locator;

		_this._eventBus = locator.resolve('eventBus');

		_this._templateProvider = locator.resolve('templateProvider');

		_this._loadedComponents = null;
		return _this;
	}

	_createClass(ComponentLoader, [{
		key: 'load',
		value: function load() {
			var _this2 = this;

			if (this._loadedComponents) {
				return Promise.resolve(this._loadedComponents);
			}

			this._loadedComponents = Object.create(null);

			return Promise.resolve().then(function () {
				return _this2._serviceLocator.resolveAll('component');
			}).catch(function () {
				return [];
			}).then(function (components) {
				var componentPromises = [];

				components.forEach(function (component) {
					if (!component || (typeof component === 'undefined' ? 'undefined' : _typeof(component)) !== 'object') {
						return;
					}
					componentPromises.unshift(_this2._processComponent(component));
				});
				return Promise.all(componentPromises);
			}).then(function (components) {
				components.forEach(function (component) {
					if (!component) {
						return;
					}
					_this2._loadedComponents[component.name] = component;
				});
				_this2._eventBus.emit('allComponentsLoaded', components);
				return _this2._loadedComponents;
			});
		}
	}, {
		key: '_processComponent',
		value: function _processComponent(componentDetails) {
			var _this3 = this;

			var component = Object.create(componentDetails);

			return this._applyTransforms(component).then(function (transformed) {
				if (!transformed) {
					throw new Error('Transformation for the "' + componentDetails.name + '" component returned a bad result');
				}
				component = transformed;
				_this3._templateProvider.registerCompiled(component.name, component.templateSource);
				component.template = {
					render: function render(dataContext) {
						return _this3._templateProvider.render(component.name, dataContext);
					}
				};
				if (typeof component.errorTemplateSource === 'string') {
					(function () {
						var errorTemplateName = moduleHelper.getNameForErrorTemplate(component.name);
						_this3._templateProvider.registerCompiled(errorTemplateName, component.errorTemplateSource);
						component.errorTemplate = {
							render: function render(dataContext) {
								return _this3._templateProvider.render(errorTemplateName, dataContext);
							}
						};
					})();
				}
				_this3._eventBus.emit('componentLoaded', component);
				return component;
			}).catch(function (reason) {
				_this3._eventBus.emit('error', reason);
				return null;
			});
		}
	}, {
		key: 'getComponentsByNames',
		value: function getComponentsByNames() {
			return this._loadedComponents || Object.create(null);
		}
	}]);

	return ComponentLoader;
}(LoaderBase);

module.exports = ComponentLoader;

},{"../../lib/base/LoaderBase":45,"../../lib/helpers/moduleHelper":48}],35:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoaderBase = require('../../lib/base/LoaderBase');

var StoreLoader = function (_LoaderBase) {
	_inherits(StoreLoader, _LoaderBase);

	function StoreLoader(locator) {
		_classCallCheck(this, StoreLoader);

		var storeTransforms;
		try {
			storeTransforms = locator.resolveAll('storeTransform');
		} catch (e) {
			storeTransforms = [];
		}

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StoreLoader).call(this, locator, storeTransforms));

		_this._serviceLocator = locator;

		_this._eventBus = locator.resolve('eventBus');

		_this._loadedStores = null;
		return _this;
	}

	_createClass(StoreLoader, [{
		key: 'load',
		value: function load() {
			var _this2 = this;

			if (this._loadedStores) {
				return Promise.resolve(this._loadedStores);
			}

			this._loadedStores = Object.create(null);

			return Promise.resolve().then(function () {
				return _this2._serviceLocator.resolveAll('store');
			}).catch(function () {
				return [];
			}).then(function (stores) {
				var storePromises = [];

				stores.forEach(function (store) {
					if (!store || (typeof store === 'undefined' ? 'undefined' : _typeof(store)) !== 'object') {
						return;
					}
					storePromises.unshift(_this2._getStore(store));
				});
				return Promise.all(storePromises);
			}).then(function (stores) {
				stores.forEach(function (store) {
					if (!store) {
						return;
					}
					_this2._loadedStores[store.name] = store;
				});
				_this2._eventBus.emit('allStoresLoaded', _this2._loadedStores);
				return Promise.resolve(_this2._loadedStores);
			});
		}
	}, {
		key: '_getStore',
		value: function _getStore(storeDetails) {
			var _this3 = this;

			return this._applyTransforms(storeDetails).then(function (transformed) {
				if (!transformed) {
					throw new Error('Transformation for the "' + storeDetails.name + '" store returned a bad result');
				}
				_this3._eventBus.emit('storeLoaded', transformed);
				return transformed;
			}).catch(function (reason) {
				_this3._eventBus.emit('error', reason);
				return null;
			});
		}
	}, {
		key: 'getStoresByNames',
		value: function getStoresByNames() {
			return this._loadedStores || Object.create(null);
		}
	}]);

	return StoreLoader;
}(LoaderBase);

module.exports = StoreLoader;

},{"../../lib/base/LoaderBase":45}],36:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propertyHelper = require('../../lib/helpers/propertyHelper');
var ModuleApiProviderBase = require('../../lib/base/ModuleApiProviderBase');

var ModuleApiProvider = function (_ModuleApiProviderBas) {
	_inherits(ModuleApiProvider, _ModuleApiProviderBas);

	function ModuleApiProvider(locator) {
		_classCallCheck(this, ModuleApiProvider);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ModuleApiProvider).call(this, locator));
	}

	_createClass(ModuleApiProvider, [{
		key: 'notFound',
		value: function notFound() {
			var window = this.locator.resolve('window');
			window.location.reload();
			return Promise.resolve();
		}
	}, {
		key: 'redirect',
		value: function redirect(uriString) {
			var requestRouter = this.locator.resolve('requestRouter');
			return requestRouter.go(uriString);
		}
	}, {
		key: 'clearFragment',
		value: function clearFragment() {
			var window = this.locator.resolve('window');
			var position = window.document.body.scrollTop;
			window.location.hash = '';
			window.document.body.scrollTop = position;
			return Promise.resolve();
		}
	}, {
		key: 'isBrowser',
		get: function get() {
			return true;
		}
	}, {
		key: 'isServer',
		get: function get() {
			return false;
		}
	}]);

	return ModuleApiProvider;
}(ModuleApiProviderBase);

module.exports = ModuleApiProvider;

},{"../../lib/base/ModuleApiProviderBase":46,"../../lib/helpers/propertyHelper":49}],37:[function(require,module,exports){
'use strict';

module.exports = require('./lib/Bootstrapper');

},{"./lib/Bootstrapper":1}],38:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var propertyHelper = require('./helpers/propertyHelper');

var ContextFactory = function () {
	function ContextFactory(locator) {
		_classCallCheck(this, ContextFactory);

		this._serviceLocator = locator;
	}

	_createClass(ContextFactory, [{
		key: 'create',
		value: function create(additional) {
			var apiProvider = this._serviceLocator.resolve('moduleApiProvider');
			var context = Object.create(apiProvider);
			Object.keys(additional).forEach(function (key) {
				return propertyHelper.defineReadOnly(context, key, additional[key]);
			});
			return context;
		}
	}]);

	return ContextFactory;
}();

module.exports = ContextFactory;

},{"./helpers/propertyHelper":49}],39:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var events = require('events');

var SerialWrapper = function () {
	function SerialWrapper() {
		_classCallCheck(this, SerialWrapper);

		this._emitter = new events.EventEmitter();
		this._emitter.setMaxListeners(0);

		this._toInvoke = Object.create(null);

		this._inProgress = Object.create(null);
	}

	_createClass(SerialWrapper, [{
		key: 'add',
		value: function add(name, toInvoke) {
			this._toInvoke[name] = toInvoke;
		}
	}, {
		key: 'isRegistered',
		value: function isRegistered(name) {
			return typeof this._toInvoke[name] === 'function';
		}
	}, {
		key: 'invoke',
		value: function invoke(name) {
			var _this = this;

			if (!this.isRegistered(name)) {
				return Promise.reject(new Error('There is no such registered method'));
			}

			if (this._inProgress[name]) {
				return new Promise(function (fulfill, reject) {
					_this._emitter.once(name, fulfill);
					_this._emitter.once(name + '--error', reject);
				});
			}

			this._inProgress[name] = true;
			this._toInvoke[name]().then(function (result) {
				_this._emitter.emit(name, result);
				_this._inProgress[name] = null;
			}).catch(function (reason) {
				_this._emitter.emit(name + '--error', reason);
				_this._inProgress[name] = null;
			});

			return this.invoke(name);
		}
	}]);

	return SerialWrapper;
}();

module.exports = SerialWrapper;

},{"events":52}],40:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SerialWrapper = require('./SerialWrapper');
var moduleHelper = require('./helpers/moduleHelper');
var propertyHelper = require('./helpers/propertyHelper');

var DEFAULT_LIFETIME = 60000;

var StoreDispatcher = function () {
	function StoreDispatcher(locator) {
		_classCallCheck(this, StoreDispatcher);

		this._serviceLocator = locator;

		this._storeLoader = locator.resolve('storeLoader');

		this._eventBus = locator.resolve('eventBus');

		this._storeInstances = Object.create(null);

		this._lastData = Object.create(null);

		this._lastState = null;

		this._dependants = Object.create(null);

		this._serialWrapper = new SerialWrapper();

		this._currentBasicContext = null;
	}

	_createClass(StoreDispatcher, [{
		key: 'getStoreData',
		value: function getStoreData(storeName) {
			var _this = this;

			if (!this._lastState) {
				return this._errorState();
			}
			if (typeof storeName !== 'string') {
				return Promise.resolve(null);
			}
			if (storeName in this._lastData) {
				var existTime = Date.now() - this._lastData[storeName].createdAt;
				if (existTime <= this._lastData[storeName].lifetime) {
					return Promise.resolve(this._lastData[storeName].data);
				}
				delete this._lastData[storeName];
			}
			this._eventBus.emit('storeDataLoad', {
				name: storeName
			});

			var store = this.getStore(storeName);
			if (!store) {
				return this._errorStoreNotFound(storeName);
			}

			var lifetime = typeof store.$lifetime === 'number' ? store.$lifetime : DEFAULT_LIFETIME;

			return this._serialWrapper.invoke(storeName).then(function (data) {
				_this._lastData[storeName] = {
					data: data,
					lifetime: lifetime,
					createdAt: Date.now()
				};
				_this._eventBus.emit('storeDataLoaded', {
					name: storeName,
					data: data,
					lifetime: lifetime
				});
				return data;
			});
		}
	}, {
		key: 'sendAction',
		value: function sendAction(storeName, actionName, args) {
			var _this2 = this;

			if (!this._lastState) {
				return this._errorState();
			}
			var actionDetails = {
				storeName: storeName,
				actionName: actionName,
				args: args
			};
			this._eventBus.emit('actionSend', actionDetails);

			var store = this.getStore(storeName);
			if (!store) {
				return this._errorStoreNotFound(storeName);
			}

			var handleMethod = moduleHelper.getMethodToInvoke(store, 'handle', actionName);
			return moduleHelper.getSafePromise(function () {
				return handleMethod(args);
			}).then(function (result) {
				_this2._eventBus.emit('actionSent', actionDetails);
				return result;
			});
		}
	}, {
		key: 'sendBroadcastAction',
		value: function sendBroadcastAction(actionName, arg) {
			var _this3 = this;

			var promises = [];
			var storesByNames = this._storeLoader.getStoresByNames();
			var methodName = moduleHelper.getCamelCaseName('handle', actionName);

			Object.keys(storesByNames).forEach(function (storeName) {
				var store = storesByNames[storeName];
				var protoMethod = store.constructor.prototype[methodName];
				if (typeof protoMethod !== 'function') {
					return;
				}
				var sendActionPromise = _this3.sendAction(store.name, actionName, arg);
				promises.push(sendActionPromise);
			});
			return Promise.all(promises);
		}
	}, {
		key: 'setState',
		value: function setState(parameters, basicContext) {
			var _this4 = this;

			parameters = parameters || Object.create(null);
			if (!this._lastState) {
				this._currentBasicContext = basicContext;
				this._lastState = parameters;
				return [];
			}

			var changed = Object.create(null);

			Object.keys(this._lastState).filter(function (storeName) {
				return !(storeName in parameters);
			}).forEach(function (name) {
				changed[name] = true;
			});

			Object.keys(parameters).forEach(function (storeName) {
				if (!(storeName in _this4._lastState)) {
					changed[storeName] = true;
					return;
				}

				var lastParameterNames = Object.keys(_this4._lastState[storeName]);
				var currentParameterNames = Object.keys(parameters[storeName]);

				if (currentParameterNames.length !== lastParameterNames.length) {
					changed[storeName] = true;
					return;
				}

				currentParameterNames.every(function (parameterName) {
					if (parameters[storeName][parameterName] !== _this4._lastState[storeName][parameterName]) {
						changed[storeName] = true;
						return false;
					}
					return true;
				});
			});

			this._lastState = parameters;
			if (this._currentBasicContext !== basicContext) {
				this._currentBasicContext = basicContext;
				Object.keys(this._storeInstances).forEach(function (storeName) {
					_this4._storeInstances[storeName].$context = _this4._getStoreContext(storeName);
				});
			}

			var changedStoreNames = Object.create(null);
			Object.keys(changed).forEach(function (storeName) {
				var store = _this4.getStore(storeName);
				if (!store) {
					return;
				}
				store.$context.changed().forEach(function (name) {
					changedStoreNames[name] = true;
				});
			});

			this._eventBus.emit('stateChanged', {
				oldState: this._lastState,
				newState: parameters
			});
			return Object.keys(changedStoreNames);
		}
	}, {
		key: '_getStoreContext',
		value: function _getStoreContext(storeName) {
			var _this5 = this;

			var storeContext = Object.create(this._currentBasicContext);
			propertyHelper.defineReadOnly(storeContext, 'name', storeName);
			propertyHelper.defineReadOnly(storeContext, 'state', this._lastState[storeName] || Object.create(null));

			storeContext.changed = function () {
				var walked = Object.create(null);
				var toChange = [storeName];

				while (toChange.length > 0) {
					var current = toChange.shift();
					if (current in walked) {
						continue;
					}
					walked[current] = true;
					if (current in _this5._dependants) {
						toChange = toChange.concat(Object.keys(_this5._dependants[current]));
					}
					delete _this5._lastData[current];
					_this5._eventBus.emit('storeChanged', current);
				}
				return Object.keys(walked);
			};

			storeContext.getStoreData = function (sourceStoreName) {
				return sourceStoreName === storeName ? Promise.resolve(null) : _this5.getStoreData(sourceStoreName);
			};

			storeContext.setDependency = function (name) {
				if (!(name in _this5._dependants)) {
					_this5._dependants[name] = Object.create(null);
				}
				_this5._dependants[name][storeName] = true;
			};
			storeContext.unsetDependency = function (name) {
				if (!(name in _this5._dependants)) {
					return;
				}
				delete _this5._dependants[name][storeName];
			};
			storeContext.sendAction = function (storeName, name, args) {
				return _this5.sendAction(storeName, name, args);
			};
			storeContext.sendBroadcastAction = function (name, args) {
				return _this5.sendBroadcastAction(name, args);
			};

			return storeContext;
		}
	}, {
		key: 'getStore',
		value: function getStore(storeName) {
			var _this6 = this;

			if (!storeName) {
				return null;
			}
			var store = this._storeInstances[storeName];
			if (store) {
				return store;
			}

			var stores = this._storeLoader.getStoresByNames();
			var config = this._serviceLocator.resolve('config');
			if (!(storeName in stores)) {
				return null;
			}

			var ComponentConstructor = stores[storeName].constructor;
			ComponentConstructor.prototype.$context = this._getStoreContext(storeName);
			this._storeInstances[storeName] = new ComponentConstructor(this._serviceLocator);
			this._storeInstances[storeName].$context = ComponentConstructor.prototype.$context;

			this._serialWrapper.add(storeName, function () {
				var loadMethod = moduleHelper.getMethodToInvoke(_this6._storeInstances[storeName], 'load');
				return moduleHelper.getSafePromise(loadMethod);
			});
			return this._storeInstances[storeName];
		}
	}, {
		key: '_errorStoreNotFound',
		value: function _errorStoreNotFound(name) {
			return Promise.reject(new Error('Store "' + name + '" not found'));
		}
	}, {
		key: '_errorState',
		value: function _errorState() {
			return Promise.reject(new Error('State should be set before any request'));
		}
	}]);

	return StoreDispatcher;
}();

module.exports = StoreDispatcher;

},{"./SerialWrapper":39,"./helpers/moduleHelper":48,"./helpers/propertyHelper":49}],41:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var moduleHelper = require('../helpers/moduleHelper');
var StateProvider = require('../providers/StateProvider');
var StoreLoader = require('../loaders/StoreLoader');
var ComponentLoader = require('../loaders/ComponentLoader');
var DocumentRenderer = require('../DocumentRenderer');
var RequestRouter = require('../RequestRouter');
var ModuleApiProviderBase = require('../base/ModuleApiProviderBase');
var ContextFactory = require('../ContextFactory');
var EventEmitter = require('events').EventEmitter;

var BootstrapperBase = function () {
	function BootstrapperBase(catberryConstructor) {
		_classCallCheck(this, BootstrapperBase);

		this._catberryConstructor = catberryConstructor;
	}

	_createClass(BootstrapperBase, [{
		key: 'create',
		value: function create(configObject) {
			var currentConfig = configObject || {};
			var catberry = new this._catberryConstructor();

			this.configure(currentConfig, catberry.locator);
			catberry.events = new ModuleApiProviderBase(catberry.locator);
			return catberry;
		}
	}, {
		key: 'configure',
		value: function configure(configObject, locator) {
			var eventBus = new EventEmitter();
			eventBus.setMaxListeners(0);
			locator.registerInstance('eventBus', eventBus);
			locator.registerInstance('config', configObject);
			locator.register('stateProvider', StateProvider, true);
			locator.register('contextFactory', ContextFactory, true);
			locator.register('storeLoader', StoreLoader, true);
			locator.register('componentLoader', ComponentLoader, true);
			locator.register('documentRenderer', DocumentRenderer, true);
			locator.register('requestRouter', RequestRouter, true);
		}
	}]);

	return BootstrapperBase;
}();

module.exports = BootstrapperBase;

},{"../ContextFactory":38,"../DocumentRenderer":31,"../RequestRouter":32,"../base/ModuleApiProviderBase":46,"../helpers/moduleHelper":48,"../loaders/ComponentLoader":34,"../loaders/StoreLoader":35,"../providers/StateProvider":51,"events":52}],42:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceLocator = require('catberry-locator');

var CatberryBase = function CatberryBase() {
	_classCallCheck(this, CatberryBase);

	this.locator = new ServiceLocator();

	this.version = '8.0.2';

	this.events = null;

	this.locator.registerInstance('serviceLocator', this.locator);
	this.locator.registerInstance('catberry', this);
};

module.exports = CatberryBase;

},{"catberry-locator":16}],43:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CookieWrapperBase = function () {
	function CookieWrapperBase() {
		_classCallCheck(this, CookieWrapperBase);
	}

	_createClass(CookieWrapperBase, [{
		key: 'getAll',
		value: function getAll() {
			var string = this.getCookieString();
			return this._parseCookieString(string);
		}
	}, {
		key: 'get',
		value: function get(name) {
			if (typeof name !== 'string') {
				return '';
			}

			return this.getAll()[name] || '';
		}
	}, {
		key: '_parseCookieString',
		value: function _parseCookieString(string) {
			var cookie = Object.create(null);

			if (typeof string !== 'string') {
				return cookie;
			}
			string.split(/; */).forEach(function (cookiePair) {
				var equalsIndex = cookiePair.indexOf('=');
				if (equalsIndex < 0) {
					return;
				}

				var key = cookiePair.substring(0, equalsIndex).trim();

				cookie[key] = cookiePair.substring(equalsIndex + 1).trim().replace(/^"|"$/g, '');
			});

			return cookie;
		}
	}, {
		key: '_convertToCookieSetup',
		value: function _convertToCookieSetup(cookieSetup) {
			if (typeof cookieSetup.key !== 'string' || typeof cookieSetup.value !== 'string') {
				throw new Error('Wrong key or value');
			}

			var cookie = cookieSetup.key + '=' + cookieSetup.value;

			if (typeof cookieSetup.maxAge === 'number') {
				cookie += '; Max-Age=' + cookieSetup.maxAge.toFixed();
				if (!cookieSetup.expires) {
					cookieSetup.expires = new Date(Date.now() + cookieSetup.maxAge * 1000);
				}
			}
			if (cookieSetup.expires instanceof Date) {
				cookie += '; Expires=' + cookieSetup.expires.toUTCString();
			}
			if (typeof cookieSetup.path === 'string') {
				cookie += '; Path=' + cookieSetup.path;
			}
			if (typeof cookieSetup.domain === 'string') {
				cookie += '; Domain=' + cookieSetup.domain;
			}
			if (typeof cookieSetup.secure === 'boolean' && cookieSetup.secure) {
				cookie += '; Secure';
			}
			if (typeof cookieSetup.httpOnly === 'boolean' && cookieSetup.httpOnly) {
				cookie += '; HttpOnly';
			}

			return cookie;
		}
	}]);

	return CookieWrapperBase;
}();

module.exports = CookieWrapperBase;

},{}],44:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DocumentRendererBase = function () {
	function DocumentRendererBase(locator) {
		var _this = this;

		_classCallCheck(this, DocumentRendererBase);

		this._serviceLocator = locator;

		this._contextFactory = locator.resolve('contextFactory');

		this._componentLoader = locator.resolve('componentLoader');

		this._eventBus = locator.resolve('eventBus');

		var storeLoader = locator.resolve('storeLoader');

		this._loading = Promise.all([this._componentLoader.load(), storeLoader.load()]).then(function () {
			_this._loading = null;
			_this._eventBus.emit('ready');
		}).catch(function (reason) {
			return _this._eventBus.emit('error', reason);
		});
	}

	_createClass(DocumentRendererBase, [{
		key: '_getPromiseForReadyState',
		value: function _getPromiseForReadyState() {
			return this._loading ? this._loading : Promise.resolve();
		}
	}]);

	return DocumentRendererBase;
}();

module.exports = DocumentRendererBase;

},{}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoaderBase = function () {
	function LoaderBase(locator, transforms) {
		_classCallCheck(this, LoaderBase);

		this._transforms = transforms;
		this._eventBus = locator.resolve('eventBus');
	}

	_createClass(LoaderBase, [{
		key: '_applyTransforms',
		value: function _applyTransforms(module, index) {
			var _this = this;

			if (index === undefined) {
				index = this._transforms.length - 1;
			}

			if (index < 0) {
				return Promise.resolve(module);
			}

			var transformation = this._transforms[index];

			return Promise.resolve().then(function () {
				return transformation.transform(module);
			}).catch(function (reason) {
				_this._eventBus.emit('error', reason);
				return module;
			}).then(function (transformedModule) {
				return _this._applyTransforms(transformedModule, index - 1);
			});
		}
	}]);

	return LoaderBase;
}();

module.exports = LoaderBase;

},{}],46:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleApiProviderBase = function () {
	function ModuleApiProviderBase(locator) {
		_classCallCheck(this, ModuleApiProviderBase);

		this.locator = locator;

		this.cookie = locator.resolve('cookieWrapper');

		this._eventBus = locator.resolve('eventBus');
	}

	_createClass(ModuleApiProviderBase, [{
		key: 'on',
		value: function on(eventName, handler) {
			checkEventNameAndHandler(eventName, handler);
			this._eventBus.on(eventName, handler);
			return this;
		}
	}, {
		key: 'once',
		value: function once(eventName, handler) {
			checkEventNameAndHandler(eventName, handler);
			this._eventBus.once(eventName, handler);
			return this;
		}
	}, {
		key: 'removeListener',
		value: function removeListener(eventName, handler) {
			checkEventNameAndHandler(eventName, handler);
			this._eventBus.removeListener(eventName, handler);
			return this;
		}
	}, {
		key: 'removeAllListeners',
		value: function removeAllListeners(eventName) {
			checkEventNameAndHandler(eventName, stub);
			this._eventBus.removeAllListeners(eventName);
			return this;
		}
	}]);

	return ModuleApiProviderBase;
}();

function checkEventNameAndHandler(eventName, handler) {
	if (typeof eventName !== 'string') {
		throw new Error('Event name should be a string');
	}

	if (typeof handler !== 'function') {
		throw new Error('Event handler should be a function');
	}
}

function stub() {}

module.exports = ModuleApiProviderBase;

},{}],47:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var ERROR_MESSAGE_REGEXP = /^(?:[\w$]+): (?:.+)\r?\n/i;

module.exports = {
	prettyPrint: function prettyPrint(error, userAgent) {
		if (!error || (typeof error === 'undefined' ? 'undefined' : _typeof(error)) !== 'object') {
			return '';
		}
		return '\n<div style="background-color: white; font-size: 12pt;">\n\t' + new Date().toUTCString() + ';<br/>\n\t' + (userAgent || 'Unknown browser') + ';<br/>\n\tCatberry@8.0.2 (\n\t<a href="https://github.com/catberry/catberry/issues" target="_blank">\n\t\treport an issue\n\t</a>)\n\t<br/><br/>\n\t<span style="color: red; font-size: 16pt; font-weight: bold;">\n\t\t' + escape(error.name) + ': ' + escape(error.message) + '\n\t</span>\n\t<br/><br/>\n\t' + escape(error.stack).replace(ERROR_MESSAGE_REGEXP, '') + '\n</div>\n';
	}
};

function escape(value) {
	value = String(value || '');
	return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/\'/g, '&#39;').replace(/\r?\n/g, '<br/>');
}

},{}],48:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var helper = {
	COMPONENT_PREFIX: 'cat-',
	COMPONENT_PREFIX_REGEXP: /^cat-/i,
	COMPONENT_ERROR_TEMPLATE_POSTFIX: '--error',
	DOCUMENT_COMPONENT_NAME: 'document',
	DOCUMENT_ELEMENT_NAME: 'html',
	HEAD_COMPONENT_NAME: 'head',
	ATTRIBUTE_ID: 'id',
	ATTRIBUTE_STORE: 'cat-store',
	DEFAULT_LOGIC_FILENAME: 'index.js',

	getNameForErrorTemplate: function getNameForErrorTemplate(componentName) {
		if (typeof componentName !== 'string') {
			return '';
		}
		return componentName + helper.COMPONENT_ERROR_TEMPLATE_POSTFIX;
	},

	isDocumentComponent: function isDocumentComponent(componentName) {
		return componentName.toLowerCase() === helper.DOCUMENT_COMPONENT_NAME;
	},

	isHeadComponent: function isHeadComponent(componentName) {
		return componentName.toLowerCase() === helper.HEAD_COMPONENT_NAME;
	},

	getOriginalComponentName: function getOriginalComponentName(fullComponentName) {
		if (typeof fullComponentName !== 'string') {
			return '';
		}
		fullComponentName = fullComponentName.toLowerCase();
		if (fullComponentName === helper.HEAD_COMPONENT_NAME) {
			return fullComponentName;
		}
		if (fullComponentName === helper.DOCUMENT_COMPONENT_NAME || fullComponentName === helper.DOCUMENT_ELEMENT_NAME) {
			return helper.DOCUMENT_COMPONENT_NAME;
		}
		return fullComponentName.replace(helper.COMPONENT_PREFIX_REGEXP, '');
	},

	getTagNameForComponentName: function getTagNameForComponentName(componentName) {
		if (typeof componentName !== 'string') {
			return '';
		}
		var upperComponentName = componentName.toUpperCase();
		if (componentName === helper.HEAD_COMPONENT_NAME) {
			return upperComponentName;
		}
		if (componentName === helper.DOCUMENT_COMPONENT_NAME) {
			return helper.DOCUMENT_ELEMENT_NAME.toUpperCase();
		}
		return helper.COMPONENT_PREFIX.toUpperCase() + upperComponentName;
	},

	getMethodToInvoke: function getMethodToInvoke(module, prefix, name) {
		if (!module || (typeof module === 'undefined' ? 'undefined' : _typeof(module)) !== 'object') {
			return defaultPromiseMethod;
		}
		var methodName = helper.getCamelCaseName(prefix, name);
		if (typeof module[methodName] === 'function') {
			return module[methodName].bind(module);
		}
		if (typeof module[prefix] === 'function') {
			return module[prefix].bind(module, name);
		}

		return defaultPromiseMethod;
	},

	getCamelCaseName: function getCamelCaseName(prefix, name) {
		if (!name) {
			return '';
		}
		if (prefix) {
			name = prefix + '-' + name;
		}
		return name.replace(/(?:[^a-z0-9]+)(\w)/gi, function (space, letter) {
			return letter.toUpperCase();
		}).replace(/(^[^a-z0-9])|([^a-z0-9]$)/gi, '');
	},

	getSafePromise: function getSafePromise(action) {
		try {
			return Promise.resolve(action());
		} catch (e) {
			return Promise.reject(e);
		}
	}
};

function defaultPromiseMethod() {
	return Promise.resolve();
}

module.exports = helper;

},{}],49:[function(require,module,exports){
'use strict';

module.exports = {
	defineReadOnly: function defineReadOnly(object, name, value) {
		Object.defineProperty(object, name, {
			enumerable: false,
			configurable: false,
			writable: false,
			value: value
		});
	}
};

},{}],50:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var URI_PATH_REPLACEMENT_REG_EXP_SOURCE = '([^\\/\\\\]*)';
var URI_QUERY_REPLACEMENT_REG_EXP_SOURCE = '([^&?=]*)';

var PATH_END_SLASH_REG_EXP = /(.+)\/($|\?|#)/;
var IDENTIFIER_REG_EXP_SOURCE = '[$A-Z_][\\dA-Z_$]*';
var STORE_LIST_REG_EXP_SOURCE = '(?:(?:\\\\[[ ]*' + '[^\\[\\],]+' + '([ ]*,[ ]*' + '[^\\[\\],]+' + ')*[ ]*\\\\])|(?:\\\\[[ ]*\\\\]))?';
var PARAMETER_REG_EXP_SOURCE = ':' + IDENTIFIER_REG_EXP_SOURCE + STORE_LIST_REG_EXP_SOURCE;
var SLASHED_BRACKETS_REG_EXP = /\\\[|\\\]/;
var STORE_LIST_SEPARATOR = ',';

module.exports = {
	removeEndSlash: function removeEndSlash(uriPath) {
		if (!uriPath || typeof uriPath !== 'string') {
			return '';
		}
		if (uriPath === '/') {
			return uriPath;
		}
		return uriPath.replace(PATH_END_SLASH_REG_EXP, '$1$2');
	},

	compileRoute: function compileRoute(routeUri) {
		if (!routeUri) {
			return null;
		}

		var escaped = escapeExpression(routeUri.path);

		var regExpSource = '^' + escaped.replace(new RegExp(PARAMETER_REG_EXP_SOURCE, 'gi'), URI_PATH_REPLACEMENT_REG_EXP_SOURCE) + '$';
		var expression = new RegExp(regExpSource, 'i');
		var pathParameterMatches = escaped.match(new RegExp(PARAMETER_REG_EXP_SOURCE, 'gi'));
		var pathParameters = pathParameterMatches ? pathParameterMatches.map(getParameterDescriptor) : null;

		var queryMapper, pathMapper;

		if (pathParameters) {
			pathMapper = createUriPathMapper(expression, pathParameters);
		}

		if (routeUri.query) {
			(function () {
				var queryParameters = Object.create(null);

				Object.keys(routeUri.query.values).forEach(function (name) {
					if (Array.isArray(routeUri.query.values[name])) {
						return;
					}

					var escaped = escapeExpression(routeUri.query.values[name]);

					var regExpSource = '^' + escaped.replace(new RegExp(PARAMETER_REG_EXP_SOURCE, 'gi'), URI_QUERY_REPLACEMENT_REG_EXP_SOURCE) + '$';
					var queryParameterMatches = escaped.match(new RegExp(PARAMETER_REG_EXP_SOURCE, 'gi'));
					if (!queryParameterMatches || queryParameterMatches.length === 0) {
						return;
					}

					var parameter = getParameterDescriptor(queryParameterMatches[queryParameterMatches.length - 1]);
					var expression = new RegExp(regExpSource, 'i');
					parameter.map = createUriQueryValueMapper(expression);
					queryParameters[name] = parameter;
				});
				queryMapper = createUriQueryMapper(queryParameters);
			})();
		}

		return {
			expression: expression,
			map: function map(uri) {
				var state = Object.create(null);
				if (pathMapper) {
					pathMapper(uri.path, state);
				}

				if (queryMapper && uri.query) {
					queryMapper(uri.query.values, state);
				}

				return state;
			}
		};
	}
};

function escapeExpression(expression) {
	return expression.replace(/[\-\[\]\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

function createUriPathMapper(expression, parameters) {
	return function (uriPath, state) {
		var matches = uriPath.match(expression);
		if (!matches || matches.length < 2) {
			return state;
		}

		matches = matches.splice(1);

		parameters.forEach(function (parameter, index) {
			var value = matches[index];
			try {
				value = decodeURIComponent(value);
			} catch (e) {}
			parameter.storeNames.forEach(function (storeName) {
				if (!(storeName in state)) {
					state[storeName] = Object.create(null);
				}
				state[storeName][parameter.name] = value;
			});
		});

		return state;
	};
}

function createUriQueryMapper(parameters) {
	return function (queryValues, state) {
		queryValues = queryValues || Object.create(null);

		Object.keys(queryValues).forEach(function (queryKey) {
			var parameter = parameters[queryKey];
			if (!parameter) {
				return;
			}

			var value = Array.isArray(queryValues[queryKey]) ? queryValues[queryKey].map(parameter.map).filter(function (value) {
				return value !== null;
			}) : parameter.map(queryValues[queryKey]);

			if (value === null) {
				return;
			}
			parameter.storeNames.forEach(function (storeName) {
				if (state[storeName] === null || _typeof(state[storeName]) !== 'object') {
					state[storeName] = Object.create(null);
				}
				state[storeName][parameter.name] = value;
			});
		});
	};
}

function createUriQueryValueMapper(expression) {
	return function (value) {
		value = value.toString().replace(/=/g, '%3D').replace(/\?/g, '%3F').replace(/&/g, '%26');

		var matches = value.match(expression);
		if (!matches || matches.length === 0) {
			return null;
		}

		var mappedValue = matches[matches.length - 1];
		try {
			mappedValue = decodeURIComponent(mappedValue);
		} catch (e) {}

		return mappedValue;
	};
}

function getParameterDescriptor(parameter) {
	var parts = parameter.split(SLASHED_BRACKETS_REG_EXP);

	return {
		name: parts[0].trim().substring(1),
		storeNames: (parts[1] ? parts[1] : '').split(STORE_LIST_SEPARATOR).map(function (storeName) {
			return storeName.trim();
		}).filter(function (storeName) {
			return storeName.length > 0;
		})
	};
}

},{}],51:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var routeHelper = require('./../helpers/routeHelper');
var catberryUri = require('catberry-uri');
var URI = catberryUri.URI;

var StateProvider = function () {
	function StateProvider(locator) {
		_classCallCheck(this, StateProvider);

		this._uriMappers = this._getUriMappers(locator);
	}

	_createClass(StateProvider, [{
		key: 'getStateByUri',
		value: function getStateByUri(location) {
			if (this._uriMappers.length === 0) {
				return null;
			}

			location = location.clone();

			location.path = routeHelper.removeEndSlash(location.path);
			var state = this._mapState(location);
			if (!state) {
				return null;
			}

			Object.keys(state).forEach(function (storeName) {
				return Object.freeze(state[storeName]);
			});
			Object.freeze(state);

			return state;
		}
	}, {
		key: '_mapState',
		value: function _mapState(location) {
			var state = null;

			this._uriMappers.some(function (mapper) {
				if (mapper.expression.test(location.path)) {
					state = mapper.map(location) || Object.create(null);
					return true;
				}
				return false;
			});

			return state;
		}
	}, {
		key: '_getUriMappers',
		value: function _getUriMappers(serviceLocator) {
			var uriMappers = [];

			var routeDefinitions;

			try {
				routeDefinitions = serviceLocator.resolveAll('routeDefinition');
			} catch (e) {
				routeDefinitions = [];
			}

			routeDefinitions.forEach(function (route) {
				if (typeof route === 'string') {
					var routeUri = new URI(route);
					routeUri.path = routeHelper.removeEndSlash(routeUri.path);
					uriMappers.push(routeHelper.compileRoute(routeUri));
					return;
				}

				if ((typeof route === 'undefined' ? 'undefined' : _typeof(route)) === 'object' && typeof route.expression === 'string' && route.map instanceof Function) {
					var _ret = function () {

						var mapperUri = new URI(route.expression);
						mapperUri.path = routeHelper.removeEndSlash(mapperUri.path);

						var mapper = routeHelper.compileRoute(mapperUri);

						uriMappers.push({
							expression: mapper.expression,
							map: function map(uri) {
								var state = mapper.map(uri);
								return route.map(state);
							}
						});
						return {
							v: void 0
						};
					}();

					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				}

				if ((typeof route === 'undefined' ? 'undefined' : _typeof(route)) === 'object' && route.expression instanceof RegExp && route.map instanceof Function) {
					uriMappers.push(route);
				}
			});
			return uriMappers;
		}
	}]);

	return StateProvider;
}();

module.exports = StateProvider;

},{"./../helpers/routeHelper":50,"catberry-uri":23}],52:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

EventEmitter.defaultMaxListeners = 10;

EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;

  if (!this._events) this._events = {};

  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er;
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;

      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++) {
      listeners[i].apply(this, args);
    }
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events) this._events = {};

  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

  if (!this._events[type]) this._events[type] = listener;else if (isObject(this._events[type])) this._events[type].push(listener);else this._events[type] = [this._events[type], listener];

  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
      if (typeof console.trace === 'function') {
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events || !this._events[type]) return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;

  if (!this._events) return this;

  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  }

  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    while (listeners.length) {
      this.removeListener(type, listeners[listeners.length - 1]);
    }
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],53:[function(require,module,exports){
(function (global){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.jade = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (require, module, exports) {
      'use strict';

      exports.merge = function merge(a, b) {
        if (arguments.length === 1) {
          var attrs = a[0];
          for (var i = 1; i < a.length; i++) {
            attrs = merge(attrs, a[i]);
          }
          return attrs;
        }
        var ac = a['class'];
        var bc = b['class'];

        if (ac || bc) {
          ac = ac || [];
          bc = bc || [];
          if (!Array.isArray(ac)) ac = [ac];
          if (!Array.isArray(bc)) bc = [bc];
          a['class'] = ac.concat(bc).filter(nulls);
        }

        for (var key in b) {
          if (key != 'class') {
            a[key] = b[key];
          }
        }

        return a;
      };

      function nulls(val) {
        return val != null && val !== '';
      }

      exports.joinClasses = joinClasses;
      function joinClasses(val) {
        return (Array.isArray(val) ? val.map(joinClasses) : val && (typeof val === "undefined" ? "undefined" : _typeof(val)) === 'object' ? Object.keys(val).filter(function (key) {
          return val[key];
        }) : [val]).filter(nulls).join(' ');
      }

      exports.cls = function cls(classes, escaped) {
        var buf = [];
        for (var i = 0; i < classes.length; i++) {
          if (escaped && escaped[i]) {
            buf.push(exports.escape(joinClasses([classes[i]])));
          } else {
            buf.push(joinClasses(classes[i]));
          }
        }
        var text = joinClasses(buf);
        if (text.length) {
          return ' class="' + text + '"';
        } else {
          return '';
        }
      };

      exports.style = function (val) {
        if (val && (typeof val === "undefined" ? "undefined" : _typeof(val)) === 'object') {
          return Object.keys(val).map(function (style) {
            return style + ':' + val[style];
          }).join(';');
        } else {
          return val;
        }
      };

      exports.attr = function attr(key, val, escaped, terse) {
        if (key === 'style') {
          val = exports.style(val);
        }
        if ('boolean' == typeof val || null == val) {
          if (val) {
            return ' ' + (terse ? key : key + '="' + key + '"');
          } else {
            return '';
          }
        } else if (0 == key.indexOf('data') && 'string' != typeof val) {
          if (JSON.stringify(val).indexOf('&') !== -1) {
            console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' + 'will be escaped to `&amp;`');
          };
          if (val && typeof val.toISOString === 'function') {
            console.warn('Jade will eliminate the double quotes around dates in ' + 'ISO form after 2.0.0');
          }
          return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
        } else if (escaped) {
          if (val && typeof val.toISOString === 'function') {
            console.warn('Jade will stringify dates in ISO form after 2.0.0');
          }
          return ' ' + key + '="' + exports.escape(val) + '"';
        } else {
          if (val && typeof val.toISOString === 'function') {
            console.warn('Jade will stringify dates in ISO form after 2.0.0');
          }
          return ' ' + key + '="' + val + '"';
        }
      };

      exports.attrs = function attrs(obj, terse) {
        var buf = [];

        var keys = Object.keys(obj);

        if (keys.length) {
          for (var i = 0; i < keys.length; ++i) {
            var key = keys[i],
                val = obj[key];

            if ('class' == key) {
              if (val = joinClasses(val)) {
                buf.push(' ' + key + '="' + val + '"');
              }
            } else {
              buf.push(exports.attr(key, val, false, terse));
            }
          }
        }

        return buf.join('');
      };

      var jade_encode_html_rules = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      };
      var jade_match_html = /[&<>"]/g;

      function jade_encode_char(c) {
        return jade_encode_html_rules[c] || c;
      }

      exports.escape = jade_escape;
      function jade_escape(html) {
        var result = String(html).replace(jade_match_html, jade_encode_char);
        if (result === '' + html) return html;else return result;
      };

      exports.rethrow = function rethrow(err, filename, lineno, str) {
        if (!(err instanceof Error)) throw err;
        if ((typeof window != 'undefined' || !filename) && !str) {
          err.message += ' on line ' + lineno;
          throw err;
        }
        try {
          str = str || require('fs').readFileSync(filename, 'utf8');
        } catch (ex) {
          rethrow(err, null, lineno);
        }
        var context = 3,
            lines = str.split('\n'),
            start = Math.max(lineno - context, 0),
            end = Math.min(lines.length, lineno + context);

        var context = lines.slice(start, end).map(function (line, i) {
          var curr = i + start + 1;
          return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
        }).join('\n');

        err.path = filename;
        err.message = (filename || 'Jade') + ':' + lineno + '\n' + context + '\n\n' + err.message;
        throw err;
      };

      exports.DebugItem = function DebugItem(lineno, filename) {
        this.lineno = lineno;
        this.filename = filename;
      };
    }, { "fs": 2 }], 2: [function (require, module, exports) {}, {}] }, {}, [1])(1);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"fs":12}],54:[function(require,module,exports){
'use strict';

var range;

var testEl = typeof document !== 'undefined' ? document.body || document.createElement('div') : {};

var hasAttribute;
if (testEl.hasAttribute) {
    hasAttribute = function hasAttribute(el, name) {
        return el.hasAttribute(name);
    };
} else {
    hasAttribute = function hasAttribute(el, name) {
        return el.getAttributeNode(name);
    };
}

function empty(o) {
    for (var k in o) {
        if (o.hasOwnProperty(k)) {
            return false;
        }
    }

    return true;
}
function toElement(str) {
    if (!range && document.createRange) {
        range = document.createRange();
        range.selectNode(document.body);
    }

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(str);
    } else {
        fragment = document.createElement('body');
        fragment.innerHTML = str;
    }
    return fragment.childNodes[0];
}

var specialElHandlers = {
    OPTION: function OPTION(fromEl, toEl) {
        if (fromEl.selected = toEl.selected) {
            fromEl.setAttribute('selected', '');
        } else {
            fromEl.removeAttribute('selected', '');
        }
    },

    INPUT: function INPUT(fromEl, toEl) {
        fromEl.checked = toEl.checked;

        if (fromEl.value != toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!hasAttribute(toEl, 'checked')) {
            fromEl.removeAttribute('checked');
        }

        if (!hasAttribute(toEl, 'value')) {
            fromEl.removeAttribute('value');
        }
    },

    TEXTAREA: function TEXTAREA(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value != newValue) {
            fromEl.value = newValue;
        }

        if (fromEl.firstChild) {
            fromEl.firstChild.nodeValue = newValue;
        }
    }
};

function noop() {}

function morphAttrs(fromNode, toNode) {
    var attrs = toNode.attributes;
    var i;
    var attr;
    var attrName;
    var attrValue;
    var foundAttrs = {};

    for (i = attrs.length - 1; i >= 0; i--) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrValue = attr.value;
            foundAttrs[attrName] = true;

            if (fromNode.getAttribute(attrName) !== attrValue) {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    attrs = fromNode.attributes;

    for (i = attrs.length - 1; i >= 0; i--) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            if (!foundAttrs.hasOwnProperty(attrName)) {
                fromNode.removeAttribute(attrName);
            }
        }
    }
}

function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdom(fromNode, toNode, options) {
    if (!options) {
        options = {};
    }

    if (typeof toNode === 'string') {
        toNode = toElement(toNode);
    }

    var savedEls = {};
    var unmatchedEls = {};
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeMorphEl = options.onBeforeMorphEl || noop;
    var onBeforeMorphElChildren = options.onBeforeMorphElChildren || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var childrenOnly = options.childrenOnly === true;
    var movedEls = [];

    function removeNodeHelper(node, nestedInSavedEl) {
        var id = getNodeKey(node);

        if (id) {
            savedEls[id] = node;
        } else if (!nestedInSavedEl) {
            onNodeDiscarded(node);
        }

        if (node.nodeType === 1) {
            var curChild = node.firstChild;
            while (curChild) {
                removeNodeHelper(curChild, nestedInSavedEl || id);
                curChild = curChild.nextSibling;
            }
        }
    }

    function walkDiscardedChildNodes(node) {
        if (node.nodeType === 1) {
            var curChild = node.firstChild;
            while (curChild) {

                if (!getNodeKey(curChild)) {

                    onNodeDiscarded(curChild);

                    walkDiscardedChildNodes(curChild);
                }

                curChild = curChild.nextSibling;
            }
        }
    }

    function removeNode(node, parentNode, alreadyVisited) {
        if (onBeforeNodeDiscarded(node) === false) {
            return;
        }

        parentNode.removeChild(node);
        if (alreadyVisited) {
            if (!getNodeKey(node)) {
                onNodeDiscarded(node);
                walkDiscardedChildNodes(node);
            }
        } else {
            removeNodeHelper(node);
        }
    }

    function morphEl(fromEl, toEl, alreadyVisited, childrenOnly) {
        var toElKey = getNodeKey(toEl);
        if (toElKey) {
            delete savedEls[toElKey];
        }

        if (!childrenOnly) {
            if (onBeforeMorphEl(fromEl, toEl) === false) {
                return;
            }

            morphAttrs(fromEl, toEl);

            if (onBeforeMorphElChildren(fromEl, toEl) === false) {
                return;
            }
        }

        if (fromEl.tagName != 'TEXTAREA') {
            var curToNodeChild = toEl.firstChild;
            var curFromNodeChild = fromEl.firstChild;
            var curToNodeId;

            var fromNextSibling;
            var toNextSibling;
            var savedEl;
            var unmatchedEl;

            outer: while (curToNodeChild) {
                toNextSibling = curToNodeChild.nextSibling;
                curToNodeId = getNodeKey(curToNodeChild);

                while (curFromNodeChild) {
                    var curFromNodeId = getNodeKey(curFromNodeChild);
                    fromNextSibling = curFromNodeChild.nextSibling;

                    if (!alreadyVisited) {
                        if (curFromNodeId && (unmatchedEl = unmatchedEls[curFromNodeId])) {
                            unmatchedEl.parentNode.replaceChild(curFromNodeChild, unmatchedEl);
                            morphEl(curFromNodeChild, unmatchedEl, alreadyVisited);
                            curFromNodeChild = fromNextSibling;
                            continue;
                        }
                    }

                    var curFromNodeType = curFromNodeChild.nodeType;

                    if (curFromNodeType === curToNodeChild.nodeType) {
                        var isCompatible = false;

                        if (curFromNodeType === 1) {
                            if (curFromNodeChild.tagName === curToNodeChild.tagName) {
                                if (curFromNodeId || curToNodeId) {
                                    if (curToNodeId === curFromNodeId) {
                                        isCompatible = true;
                                    }
                                } else {
                                    isCompatible = true;
                                }
                            }

                            if (isCompatible) {
                                morphEl(curFromNodeChild, curToNodeChild, alreadyVisited);
                            }
                        } else if (curFromNodeType === 3) {
                            isCompatible = true;

                            curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                        }

                        if (isCompatible) {
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }
                    }

                    removeNode(curFromNodeChild, fromEl, alreadyVisited);
                    curFromNodeChild = fromNextSibling;
                }

                if (curToNodeId) {
                    if (savedEl = savedEls[curToNodeId]) {
                        morphEl(savedEl, curToNodeChild, true);
                        curToNodeChild = savedEl;
                    } else {
                            unmatchedEls[curToNodeId] = curToNodeChild;
                        }
                }

                fromEl.appendChild(curToNodeChild);

                if (curToNodeChild.nodeType === 1 && (curToNodeId || curToNodeChild.firstChild)) {
                    movedEls.push(curToNodeChild);
                }

                curToNodeChild = toNextSibling;
                curFromNodeChild = fromNextSibling;
            }

            while (curFromNodeChild) {
                fromNextSibling = curFromNodeChild.nextSibling;
                removeNode(curFromNodeChild, fromEl, alreadyVisited);
                curFromNodeChild = fromNextSibling;
            }
        }

        var specialElHandler = specialElHandlers[fromEl.tagName];
        if (specialElHandler) {
            specialElHandler(fromEl, toEl);
        }
    }

    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;

    if (!childrenOnly) {
        if (morphedNodeType === 1) {
            if (toNodeType === 1) {
                if (fromNode.tagName !== toNode.tagName) {
                    onNodeDiscarded(fromNode);
                    morphedNode = moveChildren(fromNode, document.createElement(toNode.tagName));
                }
            } else {
                morphedNode = toNode;
            }
        } else if (morphedNodeType === 3) {
            if (toNodeType === 3) {
                morphedNode.nodeValue = toNode.nodeValue;
                return morphedNode;
            } else {
                morphedNode = toNode;
            }
        }
    }

    if (morphedNode === toNode) {
        onNodeDiscarded(fromNode);
    } else {
        morphEl(morphedNode, toNode, false, childrenOnly);

        var handleMovedEl = function handleMovedEl(el) {
            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var savedEl = savedEls[key];
                    if (savedEl && curChild.tagName === savedEl.tagName) {
                        curChild.parentNode.replaceChild(savedEl, curChild);
                        morphEl(savedEl, curChild, true);
                        curChild = nextSibling;
                        if (empty(savedEls)) {
                            return false;
                        }
                        continue;
                    }
                }

                if (curChild.nodeType === 1) {
                    handleMovedEl(curChild);
                }

                curChild = nextSibling;
            }
        };

        if (!empty(savedEls)) {
            handleMovedElsLoop: while (movedEls.length) {
                var movedElsTemp = movedEls;
                movedEls = [];
                for (var i = 0; i < movedElsTemp.length; i++) {
                    if (handleMovedEl(movedElsTemp[i]) === false) {
                        break handleMovedElsLoop;
                    }
                }
            }
        }

        for (var savedElId in savedEls) {
            if (savedEls.hasOwnProperty(savedElId)) {
                var savedEl = savedEls[savedElId];
                onNodeDiscarded(savedEl);
                walkDiscardedChildNodes(savedEl);
            }
        }
    }

    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
        fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }

    return morphedNode;
}

module.exports = morphdom;

},{}],55:[function(require,module,exports){


"use strict";

var minimalDesc = ['h', 'min', 's', 'ms', 'μs', 'ns'];
var verboseDesc = ['hour', 'minute', 'second', 'millisecond', 'microsecond', 'nanosecond'];
var convert = [60 * 60, 60, 1, 1e6, 1e3, 1];

module.exports = function (source, opts) {
	var verbose, precise, i, spot, sourceAtStep, valAtStep, decimals, strAtStep, results, totalSeconds;

	verbose = false;
	precise = false;
	if (opts) {
		verbose = opts.verbose || false;
		precise = opts.precise || false;
	}

	if (!Array.isArray(source) || source.length !== 2) {
		return '';
	}
	if (typeof source[0] !== 'number' || typeof source[1] !== 'number') {
		return '';
	}

	if (source[1] < 0) {
		totalSeconds = source[0] + source[1] / 1e9;
		source[0] = parseInt(totalSeconds);
		source[1] = parseFloat((totalSeconds % 1).toPrecision(9)) * 1e9;
	}

	results = '';

	for (i = 0; i < 6; i++) {
		spot = i < 3 ? 0 : 1;
		sourceAtStep = source[spot];
		if (i !== 3 && i !== 0) {
			sourceAtStep = sourceAtStep % convert[i - 1];
		}
		if (i === 2) {
			sourceAtStep += source[1] / 1e9;
		}
		valAtStep = sourceAtStep / convert[i];
		if (valAtStep >= 1) {
			if (verbose) {
				valAtStep = Math.floor(valAtStep);
			}
			if (!precise) {
				decimals = valAtStep >= 10 ? 0 : 2;
				strAtStep = valAtStep.toFixed(decimals);
			} else {
				strAtStep = valAtStep.toString();
			}
			if (strAtStep.indexOf('.') > -1 && strAtStep[strAtStep.length - 1] === '0') {
				strAtStep = strAtStep.replace(/\.?0+$/, '');
			}
			if (results) {
				results += ' ';
			}
			results += strAtStep;
			if (verbose) {
				results += ' ' + verboseDesc[i];
				if (strAtStep !== '1') {
					results += 's';
				}
			} else {
				results += ' ' + minimalDesc[i];
			}
			if (!verbose) {
				break;
			}
		}
	}

	return results;
};

},{}],56:[function(require,module,exports){
'use strict';

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
    while (len) {
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
process.version = '';
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

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

},{}],57:[function(require,module,exports){
'use strict';

module.exports = require('./lib');

},{"./lib":62}],58:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var asap = require('asap/raw');

function noop() {}

var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (_typeof(this) !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('not a function');
  }
  this._45 = 0;
  this._81 = 0;
  this._65 = null;
  this._54 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._10 = null;
Promise._97 = null;
Promise._61 = noop;

Promise.prototype.then = function (onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
};
function handle(self, deferred) {
  while (self._81 === 3) {
    self = self._65;
  }
  if (Promise._10) {
    Promise._10(self);
  }
  if (self._81 === 0) {
    if (self._45 === 0) {
      self._45 = 1;
      self._54 = deferred;
      return;
    }
    if (self._45 === 1) {
      self._45 = 2;
      self._54 = [self._54, deferred];
      return;
    }
    self._54.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function () {
    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._81 === 1) {
        resolve(deferred.promise, self._65);
      } else {
        reject(deferred.promise, self._65);
      }
      return;
    }
    var ret = tryCallOne(cb, self._65);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  if (newValue === self) {
    return reject(self, new TypeError('A promise cannot be resolved with itself.'));
  }
  if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (then === self.then && newValue instanceof Promise) {
      self._81 = 3;
      self._65 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._81 = 1;
  self._65 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._81 = 2;
  self._65 = newValue;
  if (Promise._97) {
    Promise._97(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._45 === 1) {
    handle(self, self._54);
    self._54 = null;
  }
  if (self._45 === 2) {
    for (var i = 0; i < self._54.length; i++) {
      handle(self, self._54[i]);
    }
    self._54 = null;
  }
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}

},{"asap/raw":10}],59:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this;
  self.then(null, function (err) {
    setTimeout(function () {
      throw err;
    }, 0);
  });
};

},{"./core.js":58}],60:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var Promise = require('./core.js');

module.exports = Promise;

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._61);
  p._81 = 1;
  p._65 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._81 === 3) {
            val = val._65;
          }
          if (val._81 === 1) return res(i, val._65);
          if (val._81 === 2) reject(val._65);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function (value) {
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

},{"./core.js":58}],61:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.prototype['finally'] = function (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};

},{"./core.js":58}],62:[function(require,module,exports){
'use strict';

module.exports = require('./core.js');
require('./done.js');
require('./finally.js');
require('./es6-extensions.js');
require('./node-extensions.js');
require('./synchronous.js');

},{"./core.js":58,"./done.js":59,"./es6-extensions.js":60,"./finally.js":61,"./node-extensions.js":63,"./synchronous.js":64}],63:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');
var asap = require('asap');

module.exports = Promise;

Promise.denodeify = function (fn, argumentCount) {
  if (typeof argumentCount === 'number' && argumentCount !== Infinity) {
    return denodeifyWithCount(fn, argumentCount);
  } else {
    return denodeifyWithoutCount(fn);
  }
};

var callbackFn = 'function (err, res) {' + 'if (err) { rj(err); } else { rs(res); }' + '}';
function denodeifyWithCount(fn, argumentCount) {
  var args = [];
  for (var i = 0; i < argumentCount; i++) {
    args.push('a' + i);
  }
  var body = ['return function (' + args.join(',') + ') {', 'var self = this;', 'return new Promise(function (rs, rj) {', 'var res = fn.call(', ['self'].concat(args).concat([callbackFn]).join(','), ');', 'if (res &&', '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ') {rs(res);}', '});', '};'].join('');
  return Function(['Promise', 'fn'], body)(Promise, fn);
}
function denodeifyWithoutCount(fn) {
  var fnLength = Math.max(fn.length - 1, 3);
  var args = [];
  for (var i = 0; i < fnLength; i++) {
    args.push('a' + i);
  }
  var body = ['return function (' + args.join(',') + ') {', 'var self = this;', 'var args;', 'var argLength = arguments.length;', 'if (arguments.length > ' + fnLength + ') {', 'args = new Array(arguments.length + 1);', 'for (var i = 0; i < arguments.length; i++) {', 'args[i] = arguments[i];', '}', '}', 'return new Promise(function (rs, rj) {', 'var cb = ' + callbackFn + ';', 'var res;', 'switch (argLength) {', args.concat(['extra']).map(function (_, index) {
    return 'case ' + index + ':' + 'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' + 'break;';
  }).join(''), 'default:', 'args[argLength] = cb;', 'res = fn.apply(self, args);', '}', 'if (res &&', '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ') {rs(res);}', '});', '};'].join('');

  return Function(['Promise', 'fn'], body)(Promise, fn);
}

Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var callback = typeof args[args.length - 1] === 'function' ? args.pop() : null;
    var ctx = this;
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx);
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) {
          reject(ex);
        });
      } else {
        asap(function () {
          callback.call(ctx, ex);
        });
      }
    }
  };
};

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this;

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value);
    });
  }, function (err) {
    asap(function () {
      callback.call(ctx, err);
    });
  });
};

},{"./core.js":58,"asap":9}],64:[function(require,module,exports){
'use strict';

var Promise = require('./core.js');

module.exports = Promise;
Promise.enableSynchronous = function () {
  Promise.prototype.isPending = function () {
    return this.getState() == 0;
  };

  Promise.prototype.isFulfilled = function () {
    return this.getState() == 1;
  };

  Promise.prototype.isRejected = function () {
    return this.getState() == 2;
  };

  Promise.prototype.getValue = function () {
    if (this._81 === 3) {
      return this._65.getValue();
    }

    if (!this.isFulfilled()) {
      throw new Error('Cannot get a value of an unfulfilled promise.');
    }

    return this._65;
  };

  Promise.prototype.getReason = function () {
    if (this._81 === 3) {
      return this._65.getReason();
    }

    if (!this.isRejected()) {
      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
    }

    return this._65;
  };

  Promise.prototype.getState = function () {
    if (this._81 === 3) {
      return this._65.getState();
    }
    if (this._81 === -1 || this._81 === -2) {
      return 0;
    }

    return this._81;
  };
};

Promise.disableSynchronous = function () {
  Promise.prototype.isPending = undefined;
  Promise.prototype.isFulfilled = undefined;
  Promise.prototype.isRejected = undefined;
  Promise.prototype.getValue = undefined;
  Promise.prototype.getReason = undefined;
  Promise.prototype.getState = undefined;
};

},{"./core.js":58}],65:[function(require,module,exports){
'use strict';

module.exports = ['/:page[Head]'];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfX0Jyb3dzZXJCdW5kbGUuanMiLCJicm93c2VyLmpzIiwiY2F0YmVycnlfY29tcG9uZW50cy9kb2N1bWVudC9Eb2N1bWVudC5qcyIsImNhdGJlcnJ5X2NvbXBvbmVudHMvaGVhZC9IZWFkLmpzIiwiY2F0YmVycnlfY29tcG9uZW50cy9oZWxsby13b3JsZC9IZWxsb1dvcmxkLmpzIiwiY2F0YmVycnlfc3RvcmVzL0hlYWQuanMiLCJjYXRiZXJyeV9zdG9yZXMvTWFpbi5qcyIsImNvbmZpZy9icm93c2VyLmpzb24iLCJub2RlX21vZHVsZXMvYXNhcC9icm93c2VyLWFzYXAuanMiLCJub2RlX21vZHVsZXMvYXNhcC9icm93c2VyLXJhdy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXByb2Nlc3MtaHJ0aW1lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcmVzb2x2ZS9lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS1qYWRlL2Jyb3dzZXIvVGVtcGxhdGVQcm92aWRlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS1qYWRlL2Jyb3dzZXIvamFkZS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS1qYWRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LWxvY2F0b3IvbGliL1NlcnZpY2VMb2NhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LWxvZ2dlci9icm93c2VyL0xvZ2dlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS1sb2dnZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnktbG9nZ2VyL2xpYi9Mb2dnZXJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVoci9icm93c2VyL1VIUi5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS11aHIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnktdWhyL2xpYi9VSFJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVyaS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS11cmkvbGliL0F1dGhvcml0eS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS11cmkvbGliL1F1ZXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVyaS9saWIvVVJJLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5LXVyaS9saWIvVXNlckluZm8uanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnktdXJpL2xpYi9wZXJjZW50RW5jb2RpbmdIZWxwZXIuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9DYXRiZXJyeS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL0Nvb2tpZVdyYXBwZXIuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9Eb2N1bWVudFJlbmRlcmVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvUmVxdWVzdFJvdXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL2hlbHBlcnMvaHJUaW1lSGVscGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvbG9hZGVycy9Db21wb25lbnRMb2FkZXIuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvYnJvd3Nlci9sb2FkZXJzL1N0b3JlTG9hZGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvcHJvdmlkZXJzL01vZHVsZUFwaVByb3ZpZGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9Db250ZXh0RmFjdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvU2VyaWFsV3JhcHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvU3RvcmVEaXNwYXRjaGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0Jvb3RzdHJhcHBlckJhc2UuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvbGliL2Jhc2UvQ2F0YmVycnlCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0Nvb2tpZVdyYXBwZXJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0RvY3VtZW50UmVuZGVyZXJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9iYXNlL0xvYWRlckJhc2UuanMiLCJub2RlX21vZHVsZXMvY2F0YmVycnkvbGliL2Jhc2UvTW9kdWxlQXBpUHJvdmlkZXJCYXNlLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9oZWxwZXJzL2Vycm9ySGVscGVyLmpzIiwibm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2xpYi9oZWxwZXJzL21vZHVsZUhlbHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvaGVscGVycy9wcm9wZXJ0eUhlbHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvaGVscGVycy9yb3V0ZUhlbHBlci5qcyIsIm5vZGVfbW9kdWxlcy9jYXRiZXJyeS9saWIvcHJvdmlkZXJzL1N0YXRlUHJvdmlkZXIuanMiLCJub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9qYWRlL3J1bnRpbWUuanMiLCJub2RlX21vZHVsZXMvbW9ycGhkb20vbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ByZXR0eS1ocnRpbWUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3Byb21pc2UvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9saWIvY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9wcm9taXNlL2xpYi9kb25lLmpzIiwibm9kZV9tb2R1bGVzL3Byb21pc2UvbGliL2VzNi1leHRlbnNpb25zLmpzIiwibm9kZV9tb2R1bGVzL3Byb21pc2UvbGliL2ZpbmFsbHkuanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvbWlzZS9saWIvbm9kZS1leHRlbnNpb25zLmpzIiwibm9kZV9tb2R1bGVzL3Byb21pc2UvbGliL3N5bmNocm9ub3VzLmpzIiwicm91dGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxTQUFTLENBR2YsRUFBQyxNQUFNLE1BQU4sRUFBYyxhQUFhLFFBQVEsMkJBQVIsQ0FBYixFQUhBLEVBSWYsRUFBQyxNQUFNLE1BQU4sRUFBYyxhQUFhLFFBQVEsMkJBQVIsQ0FBYixFQUpBLENBQVQ7O0FBUU4sSUFBTSxhQUFhLENBR25CO0FBQ0MsT0FBTSxVQUFOO0FBQ0EsY0FBYSxRQUFRLDRDQUFSLENBQWI7QUFDQSxhQUFZLEVBQUMsUUFBTyxVQUFQLEVBQWtCLFlBQVcsaUJBQVgsRUFBNkIsU0FBUSxlQUFSLEVBQTVEO0FBQ0EsaUJBQWdCLGlSQUFoQjtBQUNBLHNCQUFxQixJQUFyQjtDQVJrQixFQVVuQjtBQUNDLE9BQU0sTUFBTjtBQUNBLGNBQWEsUUFBUSxvQ0FBUixDQUFiO0FBQ0EsYUFBWSxFQUFDLFFBQU8sTUFBUCxFQUFjLFlBQVcsYUFBWCxFQUF5QixTQUFRLFdBQVIsRUFBcEQ7QUFDQSxpQkFBZ0IseThCQUFoQjtBQUNBLHNCQUFxQixJQUFyQjtDQWZrQixFQWlCbkI7QUFDQyxPQUFNLGFBQU47QUFDQSxjQUFhLFFBQVEsaURBQVIsQ0FBYjtBQUNBLGFBQVksRUFBQyxRQUFPLGFBQVAsRUFBcUIsWUFBVyxjQUFYLEVBQTBCLGlCQUFnQixjQUFoQixFQUErQixTQUFRLGlCQUFSLEVBQTNGO0FBQ0EsaUJBQWdCLGtiQUFoQjtBQUNBLHNCQUFxQiw0SUFBckI7Q0F0QmtCLENBQWI7O0FBMkJOLElBQU0sbUJBQW1CLFFBQVEsYUFBUixLQUEwQixFQUExQjs7QUFFekIsSUFBTSxXQUFXLFFBQVEsNkNBQVIsQ0FBWDtBQUNOLElB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OztBQUlBLFdBQU8sS0FBSyxHQUFMLENBVGlDO0dBQVosQ0F6QlE7O0FBcUN0QyxVQUFRLFNBQVIsQ0FBa0IsUUFBbEIsR0FBNkIsWUFBWTtBQUN2QyxRQUFJLEtBQUssR0FBTCxLQUFhLENBQWIsRUFBZ0I7QUFDbEIsYUFBTyxLQUFLLEdBQUwsQ0FBUyxRQUFULEVBQVAsQ0FEa0I7S0FBcEI7QUFHQSxRQUFJLEtBQUssR0FBTCxLQUFhLENBQUMsQ0FBRCxJQUFNLEtBQUssR0FBTCxLQUFhLENBQUMsQ0FBRCxFQUFJO0FBQ3RDLGFBQU8sQ0FBUCxDQURzQztLQUF4Qzs7QUFJQSxXQUFPLEtBQUssR0FBTCxDQVJnQztHQUFaLENBckNTO0NBQVo7O0FBaUQ1QixRQUFRLGtCQUFSLEdBQTZCLFlBQVc7QUFDdEMsVUFBUSxTQUFSLENBQWtCLFNBQWxCLEdBQThCLFNBQTlCLENBRHNDO0FBRXRDLFVBQVEsU0FBUixDQUFrQixXQUFsQixHQUFnQyxTQUFoQyxDQUZzQztBQUd0QyxVQUFRLFNBQVIsQ0FBa0IsVUFBbEIsR0FBK0IsU0FBL0IsQ0FIc0M7QUFJdEMsVUFBUSxTQUFSLENBQWtCLFFBQWxCLEdBQTZCLFNBQTdCLENBSnNDO0FBS3RDLFVBQVEsU0FBUixDQUFrQixTQUFsQixHQUE4QixTQUE5QixDQUxzQztBQU10QyxVQUFRLFNBQVIsQ0FBa0IsUUFBbEIsR0FBNkIsU0FBN0IsQ0FOc0M7Q0FBWDs7O0FDdEQ3Qjs7QUFXQSxPQUFPLE9BQVAsR0FBaUIsQ0FDaEIsY0FEZ0IsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBUaGlzIGZpbGUgaXMgYSB0ZW1wbGF0ZSBhbmQgaXQgaXMgdXNlZCBvbmx5IGZvciBzb21lIHN0cmluZyByZXBsYWNlc1xuICogYnkgQnJvd3NlckJ1bmRsZUJ1aWxkZXIgbW9kdWxlLiBJdCBkb2VzIG5vdCB3b3JrIGJ5IGl0c2VsZi5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN0b3JlcyA9IFtcblxuXG57bmFtZTogJ0hlYWQnLCBjb25zdHJ1Y3RvcjogcmVxdWlyZSgnLi9jYXRiZXJyeV9zdG9yZXMvSGVhZC5qcycpfSxcbntuYW1lOiAnTWFpbicsIGNvbnN0cnVjdG9yOiByZXF1aXJlKCcuL2NhdGJlcnJ5X3N0b3Jlcy9NYWluLmpzJyl9XG5cbl07XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbXG5cblxue1xuXHRuYW1lOiAnZG9jdW1lbnQnLFxuXHRjb25zdHJ1Y3RvcjogcmVxdWlyZSgnLi9jYXRiZXJyeV9jb21wb25lbnRzL2RvY3VtZW50L0RvY3VtZW50LmpzJyksXG5cdHByb3BlcnRpZXM6IHtcIm5hbWVcIjpcImRvY3VtZW50XCIsXCJ0ZW1wbGF0ZVwiOlwiLi9kb2N1bWVudC5qYWRlXCIsXCJsb2dpY1wiOlwiLi9Eb2N1bWVudC5qc1wifSxcblx0dGVtcGxhdGVTb3VyY2U6ICdmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcXG52YXIgYnVmID0gW107XFxudmFyIGphZGVfbWl4aW5zID0ge307XFxudmFyIGphZGVfaW50ZXJwO1xcblxcbmJ1Zi5wdXNoKFwiPCFET0NUWVBFIGh0bWw+PGh0bWw+PGhlYWQgY2F0LXN0b3JlPVxcXFxcIkhlYWRcXFxcXCI+PC9oZWFkPjxib2R5PjxjYXQtaGVsbG8td29ybGQgaWQ9XFxcXFwidW5pcXVlXFxcXFwiIGNhdC1zdG9yZT1cXFxcXCJNYWluXFxcXFwiPjwvY2F0LWhlbGxvLXdvcmxkPjwvYm9keT48L2h0bWw+XCIpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XFxufScsXG5cdGVycm9yVGVtcGxhdGVTb3VyY2U6IG51bGxcbn0sXG57XG5cdG5hbWU6ICdoZWFkJyxcblx0Y29uc3RydWN0b3I6IHJlcXVpcmUoJy4vY2F0YmVycnlfY29tcG9uZW50cy9oZWFkL0hlYWQuanMnKSxcblx0cHJvcGVydGllczoge1wibmFtZVwiOlwiaGVhZFwiLFwidGVtcGxhdGVcIjpcIi4vaGVhZC5qYWRlXCIsXCJsb2dpY1wiOlwiLi9IZWFkLmpzXCJ9LFxuXHR0ZW1wbGF0ZVNvdXJjZTogJ2Z1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xcbnZhciBidWYgPSBbXTtcXG52YXIgamFkZV9taXhpbnMgPSB7fTtcXG52YXIgamFkZV9pbnRlcnA7XFxuO3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGRlc2NyaXB0aW9uLCB0aXRsZSkge1xcbmJ1Zi5wdXNoKFwiPHRpdGxlPlwiICsgKGphZGUuZXNjYXBlKChqYWRlX2ludGVycCA9IHRpdGxlKSA9PSBudWxsID8gXFwnXFwnIDogamFkZV9pbnRlcnApKSArIFwiPC90aXRsZT48bWV0YSBjaGFyc2V0PVxcXFxcInV0Zi04XFxcXFwiLz48bWV0YSBodHRwLWVxdWl2PVxcXFxcIlgtVUEtQ29tcGF0aWJsZVxcXFxcIiBjb250ZW50PVxcXFxcIklFPWVkZ2VcXFxcXCIvPjxtZXRhIG5hbWU9XFxcXFwidmlld3BvcnRcXFxcXCIgY29udGVudD1cXFxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ub1xcXFxcIi8+PG1ldGEgbmFtZT1cXFxcXCJrZXl3b3Jkc1xcXFxcIiBjb250ZW50PVxcXFxcIlxcXFxcIi8+PG1ldGEgbmFtZT1cXFxcXCJkZXNjcmlwdGlvblxcXFxcIlwiICsgKGphZGUuYXR0cihcImNvbnRlbnRcIiwgZGVzY3JpcHRpb24sIHRydWUsIGZhbHNlKSkgKyBcIi8+PGxpbmsgaHJlZj1cXFxcXCIvc3R5bGVzLmNzc1xcXFxcIiByZWw9XFxcXFwic3R5bGVzaGVldFxcXFxcIi8+PGxpbmsgcmVsPVxcXFxcInNob3J0Y3V0IGljb25cXFxcXCIgaHJlZj1cXFxcXCIvaW1hZ2VzL2Zhdmljb24uaWNvXFxcXFwiLz48c2NyaXB0IHNyYz1cXFxcXCIvYnVuZGxlLmpzXFxcXFwiPjwvc2NyaXB0PlwiKTt9LmNhbGwodGhpcyxcImRlc2NyaXB0aW9uXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5kZXNjcmlwdGlvbjp0eXBlb2YgZGVzY3JpcHRpb24hPT1cInVuZGVmaW5lZFwiP2Rlc2NyaXB0aW9uOnVuZGVmaW5lZCxcInRpdGxlXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC50aXRsZTp0eXBlb2YgdGl0bGUhPT1cInVuZGVmaW5lZFwiP3RpdGxlOnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XFxufScsXG5cdGVycm9yVGVtcGxhdGVTb3VyY2U6IG51bGxcbn0sXG57XG5cdG5hbWU6ICdoZWxsby13b3JsZCcsXG5cdGNvbnN0cnVjdG9yOiByZXF1aXJlKCcuL2NhdGJlcnJ5X2NvbXBvbmVudHMvaGVsbG8td29ybGQvSGVsbG9Xb3JsZC5qcycpLFxuXHRwcm9wZXJ0aWVzOiB7XCJuYW1lXCI6XCJoZWxsby13b3JsZFwiLFwidGVtcGxhdGVcIjpcIi4vaGVsbG8uamFkZVwiLFwiZXJyb3JUZW1wbGF0ZVwiOlwiLi9lcnJvci5qYWRlXCIsXCJsb2dpY1wiOlwiLi9IZWxsb1dvcmxkLmpzXCJ9LFxuXHR0ZW1wbGF0ZVNvdXJjZTogJ2Z1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge1xcbnZhciBidWYgPSBbXTtcXG52YXIgamFkZV9taXhpbnMgPSB7fTtcXG52YXIgamFkZV9pbnRlcnA7XFxuO3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKHdobykge1xcbmJ1Zi5wdXNoKFwiPGgxPkhlbGxvLCBcIiArIChqYWRlLmVzY2FwZSgoamFkZV9pbnRlcnAgPSB3aG8pID09IG51bGwgPyBcXCdcXCcgOiBqYWRlX2ludGVycCkpICsgXCIhPC9oMT48YSBocmVmPVxcXFxcIi9pbmRleFxcXFxcIj5JbmRleDwvYT48YnIvPjxhIGhyZWY9XFxcXFwiL3NlY29uZFxcXFxcIj5TZWNvbmQ8L2E+XCIpO30uY2FsbCh0aGlzLFwid2hvXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC53aG86dHlwZW9mIHdobyE9PVwidW5kZWZpbmVkXCI/d2hvOnVuZGVmaW5lZCkpOztyZXR1cm4gYnVmLmpvaW4oXCJcIik7XFxufScsXG5cdGVycm9yVGVtcGxhdGVTb3VyY2U6ICdmdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHtcXG52YXIgYnVmID0gW107XFxudmFyIGphZGVfbWl4aW5zID0ge307XFxudmFyIGphZGVfaW50ZXJwO1xcblxcbmJ1Zi5wdXNoKFwiPGgxPk9vcHMhPC9oMT5cIik7O3JldHVybiBidWYuam9pbihcIlwiKTtcXG59J1xufVxuXG5dO1xuXG5jb25zdCByb3V0ZURlZmluaXRpb25zID0gcmVxdWlyZSgnLi9yb3V0ZXMuanMnKSB8fCBbXTtcblxuY29uc3QgQ2F0YmVycnkgPSByZXF1aXJlKCcuL25vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL0NhdGJlcnJ5LmpzJyk7XG5jb25zdCBCb290c3RyYXBwZXJCYXNlID0gcmVxdWlyZSgnLi9ub2RlX21vZHVsZXMvY2F0YmVycnkvbGliL2Jhc2UvQm9vdHN0cmFwcGVyQmFzZS5qcycpO1xuY29uc3QgU3RvcmVEaXNwYXRjaGVyID0gcmVxdWlyZSgnLi9ub2RlX21vZHVsZXMvY2F0YmVycnkvbGliL1N0b3JlRGlzcGF0Y2hlcicpO1xuY29uc3QgTW9kdWxlQXBpUHJvdmlkZXIgPSByZXF1aXJlKCcuL25vZGVfbW9kdWxlcy9jYXRiZXJyeS9icm93c2VyL3Byb3ZpZGVycy9Nb2R1bGVBcGlQcm92aWRlcicpO1xuY29uc3QgQ29va2llV3JhcHBlciA9IHJlcXVpcmUoJy4vbm9kZV9tb2R1bGVzL2NhdGJlcnJ5L2Jyb3dzZXIvQ29va2llV3JhcHBlcicpO1xuXG5jbGFzcyBCb290c3RyYXBwZXIgZXh0ZW5kcyBCb290c3RyYXBwZXJCYXNlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgYnJvd3NlciBDYXRiZXJyeSdzIGJvb3RzdHJhcHBlci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKENhdGJlcnJ5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb25maWd1cmVzIGEgQ2F0YmVycnkncyBzZXJ2aWNlIGxvY2F0b3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdPYmplY3QgVGhlIGFwcGxpY2F0aW9uIGNvbmZpZyBvYmplY3QuXG5cdCAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGxvY2F0b3IgVGhlIHNlcnZpY2UgbG9jYXRvciB0byBjb25maWd1cmUuXG5cdCAqL1xuXHRjb25maWd1cmUoY29uZmlnT2JqZWN0LCBsb2NhdG9yKSB7XG5cdFx0c3VwZXIuY29uZmlndXJlKGNvbmZpZ09iamVjdCwgbG9jYXRvcik7XG5cblx0XHRsb2NhdG9yLnJlZ2lzdGVyKCdzdG9yZURpc3BhdGNoZXInLCBTdG9yZURpc3BhdGNoZXIsIHRydWUpO1xuXHRcdGxvY2F0b3IucmVnaXN0ZXIoJ21vZHVsZUFwaVByb3ZpZGVyJywgTW9kdWxlQXBpUHJvdmlkZXIsIHRydWUpO1xuXHRcdGxvY2F0b3IucmVnaXN0ZXIoJ2Nvb2tpZVdyYXBwZXInLCBDb29raWVXcmFwcGVyLCB0cnVlKTtcblxuXHRcdGxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgnd2luZG93Jywgd2luZG93KTtcblxuXHRcdHJvdXRlRGVmaW5pdGlvbnMuZm9yRWFjaChyb3V0ZURlZmluaXRpb24gPT5cblx0XHRcdGxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgncm91dGVEZWZpbml0aW9uJywgcm91dGVEZWZpbml0aW9uKSk7XG5cblx0XHRzdG9yZXMuZm9yRWFjaChzdG9yZSA9PiBsb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ3N0b3JlJywgc3RvcmUpKTtcblxuXHRcdGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gbG9jYXRvci5yZWdpc3Rlckluc3RhbmNlKCdjb21wb25lbnQnLCBjb21wb25lbnQpKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBCb290c3RyYXBwZXIoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gdGhpcyBjb25maWcgd2lsbCBiZSByZXBsYWNlZCBieSBgLi9jb25maWcvYnJvd3Nlci5qc29uYCB3aGVuIGJ1aWxkaW5nXG4vLyBiZWNhdXNlIG9mIGBicm93c2VyYCBmaWVsZCBpbiBgcGFja2FnZS5qc29uYFxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvZW52aXJvbm1lbnQuanNvbicpO1xuXG4vLyBjYXRiZXJyeSBhcHBsaWNhdGlvblxuY29uc3QgY2F0YmVycnkgPSByZXF1aXJlKCdjYXRiZXJyeScpO1xuY29uc3QgY2F0ID0gY2F0YmVycnkuY3JlYXRlKGNvbmZpZyk7XG5cbi8vIHJlZ2lzdGVyIENhdGJlcnJ5IHBsdWdpbnMgbmVlZGVkIGluIGEgYnJvd3NlclxuY29uc3QgdGVtcGxhdGVFbmdpbmUgPSByZXF1aXJlKCdjYXRiZXJyeS1qYWRlJyk7XG50ZW1wbGF0ZUVuZ2luZS5yZWdpc3RlcihjYXQubG9jYXRvcik7XG5cbmNvbnN0IGxvZ2dlclBsdWdpbiA9IHJlcXVpcmUoJ2NhdGJlcnJ5LWxvZ2dlcicpO1xubG9nZ2VyUGx1Z2luLnJlZ2lzdGVyKGNhdC5sb2NhdG9yKTtcblxuY29uc3QgdWhyUGx1Z2luID0gcmVxdWlyZSgnY2F0YmVycnktdWhyJyk7XG51aHJQbHVnaW4ucmVnaXN0ZXIoY2F0LmxvY2F0b3IpO1xuXG4vLyBzdGFydHMgdGhlIGFwcGxpY2F0aW9uIHdoZW4gRE9NIGlzIHJlYWR5XG5jYXQuc3RhcnRXaGVuUmVhZHkoKTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuICogVGhpcyBpcyBhIENhdGJlcnJ5IENhdC1jb21wb25lbnQgZmlsZS5cbiAqIE1vcmUgZGV0YWlscyBjYW4gYmUgZm91bmQgaGVyZVxuICogaHR0cDovL2NhdGJlcnJ5Lm9yZy9kb2N1bWVudGF0aW9uI2NhdC1jb21wb25lbnRzLWludGVyZmFjZVxuICovXG5cbmNsYXNzIERvY3VtZW50IHsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvY3VtZW50O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qXG4gKiBUaGlzIGlzIGEgQ2F0YmVycnkgQ2F0LWNvbXBvbmVudCBmaWxlLlxuICogTW9yZSBkZXRhaWxzIGNhbiBiZSBmb3VuZCBoZXJlXG4gKiBodHRwOi8vY2F0YmVycnkub3JnL2RvY3VtZW50YXRpb24jY2F0LWNvbXBvbmVudHMtaW50ZXJmYWNlXG4gKi9cblxuY2xhc3MgSGVhZCB7XG5cblx0LyoqXG5cdCogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgXCJoZWFkXCIgY29tcG9uZW50LlxuXHQqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGxvY2F0b3IgQ2F0YmVycnkncyBzZXJ2aWNlIGxvY2F0b3IuXG5cdCovXG5cdGNvbnN0cnVjdG9yKGxvY2F0b3IpIHtcblxuXHRcdC8qKlxuXHRcdCogQ3VycmVudCBjb25maWcuXG5cdFx0KiBAdHlwZSB7T2JqZWN0fVxuXHRcdCogQHByaXZhdGVcblx0XHQqL1xuXHRcdHRoaXMuX2NvbmZpZyA9IGxvY2F0b3IucmVzb2x2ZSgnY29uZmlnJyk7XG5cdH1cblxuXHQvKipcblx0KiBHZXRzIGRhdGEgZm9yIHRlbXBsYXRlLlxuXHQqIEByZXR1cm5zIHtPYmplY3R9IERhdGEgb2JqZWN0LlxuXHQqL1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLypcbiAqIFRoaXMgaXMgYSBDYXRiZXJyeSBDYXQtY29tcG9uZW50IGZpbGUuXG4gKiBNb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIGhlcmVcbiAqIGh0dHA6Ly9jYXRiZXJyeS5vcmcvZG9jdW1lbnRhdGlvbiNjYXQtY29tcG9uZW50cy1pbnRlcmZhY2VcbiAqL1xuXG5jbGFzcyBIZWxsb1dvcmxkIHtcblxuXHQvKipcblx0ICogR2V0cyBkYXRhIGZvciB0aGUgY29tcG9uZW50J3MgdGVtcGxhdGUuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFByb21pc2Ugb2YgZGF0YS5cblx0ICovXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gdGhpcy4kY29udGV4dC5nZXRTdG9yZURhdGEoKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhlbGxvV29ybGQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUEFHRVMgPSB7XG5cdGluZGV4OiB7XG5cdFx0dGl0bGU6ICcnLFxuXHRcdGRlc2NyaXB0aW9uOiAnZXdmZSdcblx0fSxcblx0c2Vjb25kOiB7XG5cdFx0dGl0bGU6ICdzZWNvbmQnLFxuXHRcdGRlc2NyaXB0aW9uOiAnc2Vjb25kJ1xuXHR9XG59O1xuXG5jbGFzcyBIZWFkIHtcblxuXHQvKipcblx0ICogTG9hZHMgZGF0YSBmcm9tIHNvbWV3aGVyZS5cblx0ICogQHJldHVybnMge09iamVjdH0gRGF0YSBvYmplY3QuXG5cdCAqL1xuXHRsb2FkKCkge1xuXHRcdHJldHVybiBQQUdFU1t0aGlzLiRjb250ZXh0LnN0YXRlXTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTWFpbiB7XG5cblx0LyoqXG5cdCAqIExvYWRzIGRhdGEgZnJvbSBzb21ld2hlcmUuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IERhdGEgb2JqZWN0LlxuXHQgKi9cblx0bG9hZCgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0d2hvOiAnV29ybGQnXG5cdFx0fTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1haW47XG5cbiIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJ0aXRsZVwiOiBcIkNhdGJlcnJ5IFByb2plY3RcIixcblx0XCJsb2dnZXJcIjoge1xuXHRcdFwibGV2ZWxcIjogMFxuXHR9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmF3QXNhcCBwcm92aWRlcyBldmVyeXRoaW5nIHdlIG5lZWQgZXhjZXB0IGV4Y2VwdGlvbiBtYW5hZ2VtZW50LlxudmFyIHJhd0FzYXAgPSByZXF1aXJlKFwiLi9yYXdcIik7XG4vLyBSYXdUYXNrcyBhcmUgcmVjeWNsZWQgdG8gcmVkdWNlIEdDIGNodXJuLlxudmFyIGZyZWVUYXNrcyA9IFtdO1xuLy8gV2UgcXVldWUgZXJyb3JzIHRvIGVuc3VyZSB0aGV5IGFyZSB0aHJvd24gaW4gcmlnaHQgb3JkZXIgKEZJRk8pLlxuLy8gQXJyYXktYXMtcXVldWUgaXMgZ29vZCBlbm91Z2ggaGVyZSwgc2luY2Ugd2UgYXJlIGp1c3QgZGVhbGluZyB3aXRoIGV4Y2VwdGlvbnMuXG52YXIgcGVuZGluZ0Vycm9ycyA9IFtdO1xudmFyIHJlcXVlc3RFcnJvclRocm93ID0gcmF3QXNhcC5tYWtlUmVxdWVzdENhbGxGcm9tVGltZXIodGhyb3dGaXJzdEVycm9yKTtcblxuZnVuY3Rpb24gdGhyb3dGaXJzdEVycm9yKCkge1xuICAgIGlmIChwZW5kaW5nRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBwZW5kaW5nRXJyb3JzLnNoaWZ0KCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENhbGxzIGEgdGFzayBhcyBzb29uIGFzIHBvc3NpYmxlIGFmdGVyIHJldHVybmluZywgaW4gaXRzIG93biBldmVudCwgd2l0aCBwcmlvcml0eVxuICogb3ZlciBvdGhlciBldmVudHMgbGlrZSBhbmltYXRpb24sIHJlZmxvdywgYW5kIHJlcGFpbnQuIEFuIGVycm9yIHRocm93biBmcm9tIGFuXG4gKiBldmVudCB3aWxsIG5vdCBpbnRlcnJ1cHQsIG5vciBldmVuIHN1YnN0YW50aWFsbHkgc2xvdyBkb3duIHRoZSBwcm9jZXNzaW5nIG9mXG4gKiBvdGhlciBldmVudHMsIGJ1dCB3aWxsIGJlIHJhdGhlciBwb3N0cG9uZWQgdG8gYSBsb3dlciBwcmlvcml0eSBldmVudC5cbiAqIEBwYXJhbSB7e2NhbGx9fSB0YXNrIEEgY2FsbGFibGUgb2JqZWN0LCB0eXBpY2FsbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXG4gKiBhcmd1bWVudHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYXNhcDtcbmZ1bmN0aW9uIGFzYXAodGFzaykge1xuICAgIHZhciByYXdUYXNrO1xuICAgIGlmIChmcmVlVGFza3MubGVuZ3RoKSB7XG4gICAgICAgIHJhd1Rhc2sgPSBmcmVlVGFza3MucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmF3VGFzayA9IG5ldyBSYXdUYXNrKCk7XG4gICAgfVxuICAgIHJhd1Rhc2sudGFzayA9IHRhc2s7XG4gICAgcmF3QXNhcChyYXdUYXNrKTtcbn1cblxuLy8gV2Ugd3JhcCB0YXNrcyB3aXRoIHJlY3ljbGFibGUgdGFzayBvYmplY3RzLiAgQSB0YXNrIG9iamVjdCBpbXBsZW1lbnRzXG4vLyBgY2FsbGAsIGp1c3QgbGlrZSBhIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUmF3VGFzaygpIHtcbiAgICB0aGlzLnRhc2sgPSBudWxsO1xufVxuXG4vLyBUaGUgc29sZSBwdXJwb3NlIG9mIHdyYXBwaW5nIHRoZSB0YXNrIGlzIHRvIGNhdGNoIHRoZSBleGNlcHRpb24gYW5kIHJlY3ljbGVcbi8vIHRoZSB0YXNrIG9iamVjdCBhZnRlciBpdHMgc2luZ2xlIHVzZS5cblJhd1Rhc2sucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdGhpcy50YXNrLmNhbGwoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoYXNhcC5vbmVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGhvb2sgZXhpc3RzIHB1cmVseSBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAgICAgICAgICAgIC8vIEl0cyBuYW1lIHdpbGwgYmUgcGVyaW9kaWNhbGx5IHJhbmRvbWl6ZWQgdG8gYnJlYWsgYW55IGNvZGUgdGhhdFxuICAgICAgICAgICAgLy8gZGVwZW5kcyBvbiBpdHMgZXhpc3RlbmNlLlxuICAgICAgICAgICAgYXNhcC5vbmVycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEluIGEgd2ViIGJyb3dzZXIsIGV4Y2VwdGlvbnMgYXJlIG5vdCBmYXRhbC4gSG93ZXZlciwgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHNsb3dpbmcgZG93biB0aGUgcXVldWUgb2YgcGVuZGluZyB0YXNrcywgd2UgcmV0aHJvdyB0aGUgZXJyb3IgaW4gYVxuICAgICAgICAgICAgLy8gbG93ZXIgcHJpb3JpdHkgdHVybi5cbiAgICAgICAgICAgIHBlbmRpbmdFcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgICByZXF1ZXN0RXJyb3JUaHJvdygpO1xuICAgICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy50YXNrID0gbnVsbDtcbiAgICAgICAgZnJlZVRhc2tzW2ZyZWVUYXNrcy5sZW5ndGhdID0gdGhpcztcbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFVzZSB0aGUgZmFzdGVzdCBtZWFucyBwb3NzaWJsZSB0byBleGVjdXRlIGEgdGFzayBpbiBpdHMgb3duIHR1cm4sIHdpdGhcbi8vIHByaW9yaXR5IG92ZXIgb3RoZXIgZXZlbnRzIGluY2x1ZGluZyBJTywgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZWRyYXdcbi8vIGV2ZW50cyBpbiBicm93c2Vycy5cbi8vXG4vLyBBbiBleGNlcHRpb24gdGhyb3duIGJ5IGEgdGFzayB3aWxsIHBlcm1hbmVudGx5IGludGVycnVwdCB0aGUgcHJvY2Vzc2luZyBvZlxuLy8gc3Vic2VxdWVudCB0YXNrcy4gVGhlIGhpZ2hlciBsZXZlbCBgYXNhcGAgZnVuY3Rpb24gZW5zdXJlcyB0aGF0IGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duIGJ5IGEgdGFzaywgdGhhdCB0aGUgdGFzayBxdWV1ZSB3aWxsIGNvbnRpbnVlIGZsdXNoaW5nIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLCBidXQgaWYgeW91IHVzZSBgcmF3QXNhcGAgZGlyZWN0bHksIHlvdSBhcmUgcmVzcG9uc2libGUgdG9cbi8vIGVpdGhlciBlbnN1cmUgdGhhdCBubyBleGNlcHRpb25zIGFyZSB0aHJvd24gZnJvbSB5b3VyIHRhc2ssIG9yIHRvIG1hbnVhbGx5XG4vLyBjYWxsIGByYXdBc2FwLnJlcXVlc3RGbHVzaGAgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93bi5cbm1vZHVsZS5leHBvcnRzID0gcmF3QXNhcDtcbmZ1bmN0aW9uIHJhd0FzYXAodGFzaykge1xuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHJlcXVlc3RGbHVzaCgpO1xuICAgICAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgfVxuICAgIC8vIEVxdWl2YWxlbnQgdG8gcHVzaCwgYnV0IGF2b2lkcyBhIGZ1bmN0aW9uIGNhbGwuXG4gICAgcXVldWVbcXVldWUubGVuZ3RoXSA9IHRhc2s7XG59XG5cbnZhciBxdWV1ZSA9IFtdO1xuLy8gT25jZSBhIGZsdXNoIGhhcyBiZWVuIHJlcXVlc3RlZCwgbm8gZnVydGhlciBjYWxscyB0byBgcmVxdWVzdEZsdXNoYCBhcmVcbi8vIG5lY2Vzc2FyeSB1bnRpbCB0aGUgbmV4dCBgZmx1c2hgIGNvbXBsZXRlcy5cbnZhciBmbHVzaGluZyA9IGZhbHNlO1xuLy8gYHJlcXVlc3RGbHVzaGAgaXMgYW4gaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgbWV0aG9kIHRoYXQgYXR0ZW1wdHMgdG8ga2lja1xuLy8gb2ZmIGEgYGZsdXNoYCBldmVudCBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLiBgZmx1c2hgIHdpbGwgYXR0ZW1wdCB0byBleGhhdXN0XG4vLyB0aGUgZXZlbnQgcXVldWUgYmVmb3JlIHlpZWxkaW5nIHRvIHRoZSBicm93c2VyJ3Mgb3duIGV2ZW50IGxvb3AuXG52YXIgcmVxdWVzdEZsdXNoO1xuLy8gVGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IHRhc2sgdG8gZXhlY3V0ZSBpbiB0aGUgdGFzayBxdWV1ZS4gVGhpcyBpc1xuLy8gcHJlc2VydmVkIGJldHdlZW4gY2FsbHMgdG8gYGZsdXNoYCBzbyB0aGF0IGl0IGNhbiBiZSByZXN1bWVkIGlmXG4vLyBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbnZhciBpbmRleCA9IDA7XG4vLyBJZiBhIHRhc2sgc2NoZWR1bGVzIGFkZGl0aW9uYWwgdGFza3MgcmVjdXJzaXZlbHksIHRoZSB0YXNrIHF1ZXVlIGNhbiBncm93XG4vLyB1bmJvdW5kZWQuIFRvIHByZXZlbnQgbWVtb3J5IGV4aGF1c3Rpb24sIHRoZSB0YXNrIHF1ZXVlIHdpbGwgcGVyaW9kaWNhbGx5XG4vLyB0cnVuY2F0ZSBhbHJlYWR5LWNvbXBsZXRlZCB0YXNrcy5cbnZhciBjYXBhY2l0eSA9IDEwMjQ7XG5cbi8vIFRoZSBmbHVzaCBmdW5jdGlvbiBwcm9jZXNzZXMgYWxsIHRhc2tzIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB3aXRoXG4vLyBgcmF3QXNhcGAgdW5sZXNzIGFuZCB1bnRpbCBvbmUgb2YgdGhvc2UgdGFza3MgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbi8vIElmIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBgZmx1c2hgIGVuc3VyZXMgdGhhdCBpdHMgc3RhdGUgd2lsbCByZW1haW5cbi8vIGNvbnNpc3RlbnQgYW5kIHdpbGwgcmVzdW1lIHdoZXJlIGl0IGxlZnQgb2ZmIHdoZW4gY2FsbGVkIGFnYWluLlxuLy8gSG93ZXZlciwgYGZsdXNoYCBkb2VzIG5vdCBtYWtlIGFueSBhcnJhbmdlbWVudHMgdG8gYmUgY2FsbGVkIGFnYWluIGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duLlxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8gQWR2YW5jZSB0aGUgaW5kZXggYmVmb3JlIGNhbGxpbmcgdGhlIHRhc2suIFRoaXMgZW5zdXJlcyB0aGF0IHdlIHdpbGxcbiAgICAgICAgLy8gYmVnaW4gZmx1c2hpbmcgb24gdGhlIG5leHQgdGFzayB0aGUgdGFzayB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICAgIGluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICBxdWV1ZVtjdXJyZW50SW5kZXhdLmNhbGwoKTtcbiAgICAgICAgLy8gUHJldmVudCBsZWFraW5nIG1lbW9yeSBmb3IgbG9uZyBjaGFpbnMgb2YgcmVjdXJzaXZlIGNhbGxzIHRvIGBhc2FwYC5cbiAgICAgICAgLy8gSWYgd2UgY2FsbCBgYXNhcGAgd2l0aGluIHRhc2tzIHNjaGVkdWxlZCBieSBgYXNhcGAsIHRoZSBxdWV1ZSB3aWxsXG4gICAgICAgIC8vIGdyb3csIGJ1dCB0byBhdm9pZCBhbiBPKG4pIHdhbGsgZm9yIGV2ZXJ5IHRhc2sgd2UgZXhlY3V0ZSwgd2UgZG9uJ3RcbiAgICAgICAgLy8gc2hpZnQgdGFza3Mgb2ZmIHRoZSBxdWV1ZSBhZnRlciB0aGV5IGhhdmUgYmVlbiBleGVjdXRlZC5cbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgcGVyaW9kaWNhbGx5IHNoaWZ0IDEwMjQgdGFza3Mgb2ZmIHRoZSBxdWV1ZS5cbiAgICAgICAgaWYgKGluZGV4ID4gY2FwYWNpdHkpIHtcbiAgICAgICAgICAgIC8vIE1hbnVhbGx5IHNoaWZ0IGFsbCB2YWx1ZXMgc3RhcnRpbmcgYXQgdGhlIGluZGV4IGJhY2sgdG8gdGhlXG4gICAgICAgICAgICAvLyBiZWdpbm5pbmcgb2YgdGhlIHF1ZXVlLlxuICAgICAgICAgICAgZm9yICh2YXIgc2NhbiA9IDAsIG5ld0xlbmd0aCA9IHF1ZXVlLmxlbmd0aCAtIGluZGV4OyBzY2FuIDwgbmV3TGVuZ3RoOyBzY2FuKyspIHtcbiAgICAgICAgICAgICAgICBxdWV1ZVtzY2FuXSA9IHF1ZXVlW3NjYW4gKyBpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggLT0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICBpbmRleCA9IDA7XG4gICAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgaXMgaW1wbGVtZW50ZWQgdXNpbmcgYSBzdHJhdGVneSBiYXNlZCBvbiBkYXRhIGNvbGxlY3RlZCBmcm9tXG4vLyBldmVyeSBhdmFpbGFibGUgU2F1Y2VMYWJzIFNlbGVuaXVtIHdlYiBkcml2ZXIgd29ya2VyIGF0IHRpbWUgb2Ygd3JpdGluZy5cbi8vIGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzFtRy01VVlHdXA1cXhHZEVNV2toUDZCV0N6MDUzTlViMkUxUW9VVFUxNnVBL2VkaXQjZ2lkPTc4MzcyNDU5M1xuXG4vLyBTYWZhcmkgNiBhbmQgNi4xIGZvciBkZXNrdG9wLCBpUGFkLCBhbmQgaVBob25lIGFyZSB0aGUgb25seSBicm93c2VycyB0aGF0XG4vLyBoYXZlIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgYnV0IG5vdCB1bi1wcmVmaXhlZCBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXVzdCB1c2UgYGdsb2JhbGAgaW5zdGVhZCBvZiBgd2luZG93YCB0byB3b3JrIGluIGJvdGggZnJhbWVzIGFuZCB3ZWJcbi8vIHdvcmtlcnMuIGBnbG9iYWxgIGlzIGEgcHJvdmlzaW9uIG9mIEJyb3dzZXJpZnksIE1yLCBNcnMsIG9yIE1vcC5cbnZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuXG4vLyBNdXRhdGlvbk9ic2VydmVycyBhcmUgZGVzaXJhYmxlIGJlY2F1c2UgdGhleSBoYXZlIGhpZ2ggcHJpb3JpdHkgYW5kIHdvcmtcbi8vIHJlbGlhYmx5IGV2ZXJ5d2hlcmUgdGhleSBhcmUgaW1wbGVtZW50ZWQuXG4vLyBUaGV5IGFyZSBpbXBsZW1lbnRlZCBpbiBhbGwgbW9kZXJuIGJyb3dzZXJzLlxuLy9cbi8vIC0gQW5kcm9pZCA0LTQuM1xuLy8gLSBDaHJvbWUgMjYtMzRcbi8vIC0gRmlyZWZveCAxNC0yOVxuLy8gLSBJbnRlcm5ldCBFeHBsb3JlciAxMVxuLy8gLSBpUGFkIFNhZmFyaSA2LTcuMVxuLy8gLSBpUGhvbmUgU2FmYXJpIDctNy4xXG4vLyAtIFNhZmFyaSA2LTdcbmlmICh0eXBlb2YgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGZsdXNoKTtcblxuLy8gTWVzc2FnZUNoYW5uZWxzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGdpdmUgZGlyZWN0IGFjY2VzcyB0byB0aGUgSFRNTFxuLy8gdGFzayBxdWV1ZSwgYXJlIGltcGxlbWVudGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLCBTYWZhcmkgNS4wLTEsIGFuZCBPcGVyYVxuLy8gMTEtMTIsIGFuZCBpbiB3ZWIgd29ya2VycyBpbiBtYW55IGVuZ2luZXMuXG4vLyBBbHRob3VnaCBtZXNzYWdlIGNoYW5uZWxzIHlpZWxkIHRvIGFueSBxdWV1ZWQgcmVuZGVyaW5nIGFuZCBJTyB0YXNrcywgdGhleVxuLy8gd291bGQgYmUgYmV0dGVyIHRoYW4gaW1wb3NpbmcgdGhlIDRtcyBkZWxheSBvZiB0aW1lcnMuXG4vLyBIb3dldmVyLCB0aGV5IGRvIG5vdCB3b3JrIHJlbGlhYmx5IGluIEludGVybmV0IEV4cGxvcmVyIG9yIFNhZmFyaS5cblxuLy8gSW50ZXJuZXQgRXhwbG9yZXIgMTAgaXMgdGhlIG9ubHkgYnJvd3NlciB0aGF0IGhhcyBzZXRJbW1lZGlhdGUgYnV0IGRvZXNcbi8vIG5vdCBoYXZlIE11dGF0aW9uT2JzZXJ2ZXJzLlxuLy8gQWx0aG91Z2ggc2V0SW1tZWRpYXRlIHlpZWxkcyB0byB0aGUgYnJvd3NlcidzIHJlbmRlcmVyLCBpdCB3b3VsZCBiZVxuLy8gcHJlZmVycmFibGUgdG8gZmFsbGluZyBiYWNrIHRvIHNldFRpbWVvdXQgc2luY2UgaXQgZG9lcyBub3QgaGF2ZVxuLy8gdGhlIG1pbmltdW0gNG1zIHBlbmFsdHkuXG4vLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGFwcGVhcnMgdG8gYmUgYSBidWcgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAgTW9iaWxlIChhbmRcbi8vIERlc2t0b3AgdG8gYSBsZXNzZXIgZXh0ZW50KSB0aGF0IHJlbmRlcnMgYm90aCBzZXRJbW1lZGlhdGUgYW5kXG4vLyBNZXNzYWdlQ2hhbm5lbCB1c2VsZXNzIGZvciB0aGUgcHVycG9zZXMgb2YgQVNBUC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rcmlza293YWwvcS9pc3N1ZXMvMzk2XG5cbi8vIFRpbWVycyBhcmUgaW1wbGVtZW50ZWQgdW5pdmVyc2FsbHkuXG4vLyBXZSBmYWxsIGJhY2sgdG8gdGltZXJzIGluIHdvcmtlcnMgaW4gbW9zdCBlbmdpbmVzLCBhbmQgaW4gZm9yZWdyb3VuZFxuLy8gY29udGV4dHMgaW4gdGhlIGZvbGxvd2luZyBicm93c2Vycy5cbi8vIEhvd2V2ZXIsIG5vdGUgdGhhdCBldmVuIHRoaXMgc2ltcGxlIGNhc2UgcmVxdWlyZXMgbnVhbmNlcyB0byBvcGVyYXRlIGluIGFcbi8vIGJyb2FkIHNwZWN0cnVtIG9mIGJyb3dzZXJzLlxuLy9cbi8vIC0gRmlyZWZveCAzLTEzXG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDYtOVxuLy8gLSBpUGFkIFNhZmFyaSA0LjNcbi8vIC0gTHlueCAyLjguN1xufSBlbHNlIHtcbiAgICByZXF1ZXN0Rmx1c2ggPSBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoZmx1c2gpO1xufVxuXG4vLyBgcmVxdWVzdEZsdXNoYCByZXF1ZXN0cyB0aGF0IHRoZSBoaWdoIHByaW9yaXR5IGV2ZW50IHF1ZXVlIGJlIGZsdXNoZWQgYXNcbi8vIHNvb24gYXMgcG9zc2libGUuXG4vLyBUaGlzIGlzIHVzZWZ1bCB0byBwcmV2ZW50IGFuIGVycm9yIHRocm93biBpbiBhIHRhc2sgZnJvbSBzdGFsbGluZyB0aGUgZXZlbnRcbi8vIHF1ZXVlIGlmIHRoZSBleGNlcHRpb24gaGFuZGxlZCBieSBOb2RlLmpz4oCZc1xuLy8gYHByb2Nlc3Mub24oXCJ1bmNhdWdodEV4Y2VwdGlvblwiKWAgb3IgYnkgYSBkb21haW4uXG5yYXdBc2FwLnJlcXVlc3RGbHVzaCA9IHJlcXVlc3RGbHVzaDtcblxuLy8gVG8gcmVxdWVzdCBhIGhpZ2ggcHJpb3JpdHkgZXZlbnQsIHdlIGluZHVjZSBhIG11dGF0aW9uIG9ic2VydmVyIGJ5IHRvZ2dsaW5nXG4vLyB0aGUgdGV4dCBvZiBhIHRleHQgbm9kZSBiZXR3ZWVuIFwiMVwiIGFuZCBcIi0xXCIuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykge1xuICAgIHZhciB0b2dnbGUgPSAxO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuICAgICAgICB0b2dnbGUgPSAtdG9nZ2xlO1xuICAgICAgICBub2RlLmRhdGEgPSB0b2dnbGU7XG4gICAgfTtcbn1cblxuLy8gVGhlIG1lc3NhZ2UgY2hhbm5lbCB0ZWNobmlxdWUgd2FzIGRpc2NvdmVyZWQgYnkgTWFsdGUgVWJsIGFuZCB3YXMgdGhlXG4vLyBvcmlnaW5hbCBmb3VuZGF0aW9uIGZvciB0aGlzIGxpYnJhcnkuXG4vLyBodHRwOi8vd3d3Lm5vbmJsb2NraW5nLmlvLzIwMTEvMDYvd2luZG93bmV4dHRpY2suaHRtbFxuXG4vLyBTYWZhcmkgNi4wLjUgKGF0IGxlYXN0KSBpbnRlcm1pdHRlbnRseSBmYWlscyB0byBjcmVhdGUgbWVzc2FnZSBwb3J0cyBvbiBhXG4vLyBwYWdlJ3MgZmlyc3QgbG9hZC4gVGhhbmtmdWxseSwgdGhpcyB2ZXJzaW9uIG9mIFNhZmFyaSBzdXBwb3J0c1xuLy8gTXV0YXRpb25PYnNlcnZlcnMsIHNvIHdlIGRvbid0IG5lZWQgdG8gZmFsbCBiYWNrIGluIHRoYXQgY2FzZS5cblxuLy8gZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbU1lc3NhZ2VDaGFubmVsKGNhbGxiYWNrKSB7XG4vLyAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbi8vICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbi8vICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBGb3IgcmVhc29ucyBleHBsYWluZWQgYWJvdmUsIHdlIGFyZSBhbHNvIHVuYWJsZSB0byB1c2UgYHNldEltbWVkaWF0ZWBcbi8vIHVuZGVyIGFueSBjaXJjdW1zdGFuY2VzLlxuLy8gRXZlbiBpZiB3ZSB3ZXJlLCB0aGVyZSBpcyBhbm90aGVyIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbi8vIEl0IGlzIG5vdCBzdWZmaWNpZW50IHRvIGFzc2lnbiBgc2V0SW1tZWRpYXRlYCB0byBgcmVxdWVzdEZsdXNoYCBiZWNhdXNlXG4vLyBgc2V0SW1tZWRpYXRlYCBtdXN0IGJlIGNhbGxlZCAqYnkgbmFtZSogYW5kIHRoZXJlZm9yZSBtdXN0IGJlIHdyYXBwZWQgaW4gYVxuLy8gY2xvc3VyZS5cbi8vIE5ldmVyIGZvcmdldC5cblxuLy8gZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbVNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiByZXF1ZXN0Q2FsbCgpIHtcbi8vICAgICAgICAgc2V0SW1tZWRpYXRlKGNhbGxiYWNrKTtcbi8vICAgICB9O1xuLy8gfVxuXG4vLyBTYWZhcmkgNi4wIGhhcyBhIHByb2JsZW0gd2hlcmUgdGltZXJzIHdpbGwgZ2V0IGxvc3Qgd2hpbGUgdGhlIHVzZXIgaXNcbi8vIHNjcm9sbGluZy4gVGhpcyBwcm9ibGVtIGRvZXMgbm90IGltcGFjdCBBU0FQIGJlY2F1c2UgU2FmYXJpIDYuMCBzdXBwb3J0c1xuLy8gbXV0YXRpb24gb2JzZXJ2ZXJzLCBzbyB0aGF0IGltcGxlbWVudGF0aW9uIGlzIHVzZWQgaW5zdGVhZC5cbi8vIEhvd2V2ZXIsIGlmIHdlIGV2ZXIgZWxlY3QgdG8gdXNlIHRpbWVycyBpbiBTYWZhcmksIHRoZSBwcmV2YWxlbnQgd29yay1hcm91bmRcbi8vIGlzIHRvIGFkZCBhIHNjcm9sbCBldmVudCBsaXN0ZW5lciB0aGF0IGNhbGxzIGZvciBhIGZsdXNoLlxuXG4vLyBgc2V0VGltZW91dGAgZG9lcyBub3QgY2FsbCB0aGUgcGFzc2VkIGNhbGxiYWNrIGlmIHRoZSBkZWxheSBpcyBsZXNzIHRoYW5cbi8vIGFwcHJveGltYXRlbHkgNyBpbiB3ZWIgd29ya2VycyBpbiBGaXJlZm94IDggdGhyb3VnaCAxOCwgYW5kIHNvbWV0aW1lcyBub3Rcbi8vIGV2ZW4gdGhlbi5cblxuZnVuY3Rpb24gbWFrZVJlcXVlc3RDYWxsRnJvbVRpbWVyKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuICAgICAgICAvLyBXZSBkaXNwYXRjaCBhIHRpbWVvdXQgd2l0aCBhIHNwZWNpZmllZCBkZWxheSBvZiAwIGZvciBlbmdpbmVzIHRoYXRcbiAgICAgICAgLy8gY2FuIHJlbGlhYmx5IGFjY29tbW9kYXRlIHRoYXQgcmVxdWVzdC4gVGhpcyB3aWxsIHVzdWFsbHkgYmUgc25hcHBlZFxuICAgICAgICAvLyB0byBhIDQgbWlsaXNlY29uZCBkZWxheSwgYnV0IG9uY2Ugd2UncmUgZmx1c2hpbmcsIHRoZXJlJ3Mgbm8gZGVsYXlcbiAgICAgICAgLy8gYmV0d2VlbiBldmVudHMuXG4gICAgICAgIHZhciB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChoYW5kbGVUaW1lciwgMCk7XG4gICAgICAgIC8vIEhvd2V2ZXIsIHNpbmNlIHRoaXMgdGltZXIgZ2V0cyBmcmVxdWVudGx5IGRyb3BwZWQgaW4gRmlyZWZveFxuICAgICAgICAvLyB3b3JrZXJzLCB3ZSBlbmxpc3QgYW4gaW50ZXJ2YWwgaGFuZGxlIHRoYXQgd2lsbCB0cnkgdG8gZmlyZVxuICAgICAgICAvLyBhbiBldmVudCAyMCB0aW1lcyBwZXIgc2Vjb25kIHVudGlsIGl0IHN1Y2NlZWRzLlxuICAgICAgICB2YXIgaW50ZXJ2YWxIYW5kbGUgPSBzZXRJbnRlcnZhbChoYW5kbGVUaW1lciwgNTApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRpbWVyKCkge1xuICAgICAgICAgICAgLy8gV2hpY2hldmVyIHRpbWVyIHN1Y2NlZWRzIHdpbGwgY2FuY2VsIGJvdGggdGltZXJzIGFuZFxuICAgICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSGFuZGxlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyBUaGlzIGlzIGZvciBgYXNhcC5qc2Agb25seS5cbi8vIEl0cyBuYW1lIHdpbGwgYmUgcGVyaW9kaWNhbGx5IHJhbmRvbWl6ZWQgdG8gYnJlYWsgYW55IGNvZGUgdGhhdCBkZXBlbmRzIG9uXG4vLyBpdHMgZXhpc3RlbmNlLlxucmF3QXNhcC5tYWtlUmVxdWVzdENhbGxGcm9tVGltZXIgPSBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXI7XG5cbi8vIEFTQVAgd2FzIG9yaWdpbmFsbHkgYSBuZXh0VGljayBzaGltIGluY2x1ZGVkIGluIFEuIFRoaXMgd2FzIGZhY3RvcmVkIG91dFxuLy8gaW50byB0aGlzIEFTQVAgcGFja2FnZS4gSXQgd2FzIGxhdGVyIGFkYXB0ZWQgdG8gUlNWUCB3aGljaCBtYWRlIGZ1cnRoZXJcbi8vIGFtZW5kbWVudHMuIFRoZXNlIGRlY2lzaW9ucywgcGFydGljdWxhcmx5IHRvIG1hcmdpbmFsaXplIE1lc3NhZ2VDaGFubmVsIGFuZFxuLy8gdG8gY2FwdHVyZSB0aGUgTXV0YXRpb25PYnNlcnZlciBpbXBsZW1lbnRhdGlvbiBpbiBhIGNsb3N1cmUsIHdlcmUgaW50ZWdyYXRlZFxuLy8gYmFjayBpbnRvIEFTQVAgcHJvcGVyLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qcy9ibG9iL2NkZGY3MjMyNTQ2YTljZjg1ODUyNGI3NWNkZTZmOWVkZjcyNjIwYTcvbGliL3JzdnAvYXNhcC5qc1xuIiwibW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzLmhydGltZSB8fCBocnRpbWVcblxuLy8gcG9seWZpbCBmb3Igd2luZG93LnBlcmZvcm1hbmNlLm5vd1xudmFyIHBlcmZvcm1hbmNlID0gZ2xvYmFsLnBlcmZvcm1hbmNlIHx8IHt9XG52YXIgcGVyZm9ybWFuY2VOb3cgPVxuICBwZXJmb3JtYW5jZS5ub3cgICAgICAgIHx8XG4gIHBlcmZvcm1hbmNlLm1vek5vdyAgICAgfHxcbiAgcGVyZm9ybWFuY2UubXNOb3cgICAgICB8fFxuICBwZXJmb3JtYW5jZS5vTm93ICAgICAgIHx8XG4gIHBlcmZvcm1hbmNlLndlYmtpdE5vdyAgfHxcbiAgZnVuY3Rpb24oKXsgcmV0dXJuIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgfVxuXG4vLyBnZW5lcmF0ZSB0aW1lc3RhbXAgb3IgZGVsdGFcbi8vIHNlZSBodHRwOi8vbm9kZWpzLm9yZy9hcGkvcHJvY2Vzcy5odG1sI3Byb2Nlc3NfcHJvY2Vzc19ocnRpbWVcbmZ1bmN0aW9uIGhydGltZShwcmV2aW91c1RpbWVzdGFtcCl7XG4gIHZhciBjbG9ja3RpbWUgPSBwZXJmb3JtYW5jZU5vdy5jYWxsKHBlcmZvcm1hbmNlKSoxZS0zXG4gIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcihjbG9ja3RpbWUpXG4gIHZhciBuYW5vc2Vjb25kcyA9IE1hdGguZmxvb3IoKGNsb2NrdGltZSUxKSoxZTkpXG4gIGlmIChwcmV2aW91c1RpbWVzdGFtcCkge1xuICAgIHNlY29uZHMgPSBzZWNvbmRzIC0gcHJldmlvdXNUaW1lc3RhbXBbMF1cbiAgICBuYW5vc2Vjb25kcyA9IG5hbm9zZWNvbmRzIC0gcHJldmlvdXNUaW1lc3RhbXBbMV1cbiAgICBpZiAobmFub3NlY29uZHM8MCkge1xuICAgICAgc2Vjb25kcy0tXG4gICAgICBuYW5vc2Vjb25kcyArPSAxZTlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtzZWNvbmRzLG5hbm9zZWNvbmRzXVxufSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKbGJYQjBlUzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYlhYMD0iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRlbXBsYXRlUHJvdmlkZXIge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBKYWRlIHRlbXBsYXRlIHByb3ZpZGVyLlxuXHQgKiBAcGFyYW0ge0xvY2F0b3J9IGxvY2F0b3IgVGhlIHNlcnZpY2UgbG9jYXRvciBmb3IgcmVzb2x2aW5nIGRlcGVuZGVuY2llcy5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihsb2NhdG9yKSB7XG5cdFx0Y29uc3QgY29uZmlnID0gbG9jYXRvci5yZXNvbHZlKCdjb25maWcnKSB8fCB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgSmFkZSBmYWN0b3J5LlxuXHRcdCAqIEB0eXBlIHtKYWRlfVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5famFkZSA9IGxvY2F0b3IucmVzb2x2ZSgnamFkZScpO1xuXG5cdFx0LyoqXG5cdFx0ICogQ29uZmlnIGZvciBKYWRlXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2phZGVPcHRpb25zID0gY29uZmlnLmphZGVPcHRpb25zIHx8IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzZXQgb2YgcmVnaXN0ZXJlZCB0ZW1wbGF0ZXMuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3RlbXBsYXRlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGNvbXBpbGVkIChwcmVjb21waWxlZCkgSmFkZSB0ZW1wbGF0ZS5cblx0ICogaHR0cDovL2phZGVqcy5jb20vcmVmZXJlbmNlLmh0bWxcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGVtcGxhdGUgbmFtZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbXBpbGVkIENvbXBpbGVkIHRlbXBsYXRlIHNvdXJjZS5cblx0ICovXG5cdHJlZ2lzdGVyQ29tcGlsZWQobmFtZSwgY29tcGlsZWQpIHtcblxuXHRcdC8qIGVzbGludCBuby1uZXctZnVuYzogMCAqL1xuXHRcdGNvbnN0IGdldFRlbXBsYXRlID0gbmV3IEZ1bmN0aW9uKCdqYWRlJywgYHJldHVybiAke2NvbXBpbGVkfTtgKTtcblx0XHR0aGlzLl90ZW1wbGF0ZXNbbmFtZV0gPSBnZXRUZW1wbGF0ZSh0aGlzLl9qYWRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW5kZXJzIHRlbXBsYXRlIHdpdGggc3BlY2lmaWVkIGRhdGEuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGVtcGxhdGUuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIERhdGEgY29udGV4dCBmb3IgdGVtcGxhdGUuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFByb21pc2UgZm9yIHJlbmRlcmVkIEhUTUwuXG5cdCAqL1xuXHRyZW5kZXIobmFtZSwgZGF0YSkge1xuXHRcdGlmICghKG5hbWUgaW4gdGhpcy5fdGVtcGxhdGVzKSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgXCIke25hbWV9XCIgbm90IGZvdW5kIGFtb25nIHJlZ2lzdGVyZWQgdGVtcGxhdGVzYCkpO1xuXHRcdH1cblxuXHRcdGxldCBwcm9taXNlO1xuXHRcdHRyeSB7XG5cdFx0XHRwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3RlbXBsYXRlc1tuYW1lXShkYXRhKSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cHJvbWlzZSA9IFByb21pc2UucmVqZWN0KGUpO1xuXHRcdH1cblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlbXBsYXRlUHJvdmlkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnamFkZS9ydW50aW1lLmpzJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEphZGUgPSByZXF1aXJlKCcuL2xpYi9qYWRlLmpzJyk7XG5jb25zdCBUZW1wbGF0ZVByb3ZpZGVyID0gcmVxdWlyZSgnLi9saWIvVGVtcGxhdGVQcm92aWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0cmVnaXN0ZXIobG9jYXRvcikge1xuXHRcdGxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgnamFkZScsIEphZGUpO1xuXHRcdGxvY2F0b3IucmVnaXN0ZXIoJ3RlbXBsYXRlUHJvdmlkZXInLCBUZW1wbGF0ZVByb3ZpZGVyLCB0cnVlKTtcblx0fSxcblx0SmFkZSxcblx0VGVtcGxhdGVQcm92aWRlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgU2VydmljZSBMb2NhdG9yIHBhdHRlcm4uXG4gKi9cbmNsYXNzIFNlcnZpY2VMb2NhdG9yIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgc2VydmljZSBsb2NhdG9yIGNsYXNzLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHR5cGUgcmVnaXN0cmF0aW9ucy5cblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fcmVnaXN0cmF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbmV3IHR5cGUgbmFtZSBpbiB0aGUgc2VydmljZSBsb2NhdG9yLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBuYW1lIHVzZWQgYXMgYSBrZXkgZm9yIHJlc29sdmluZyBpbnN0YW5jZXMuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGltcGxlbWVudGF0aW9uIFRoZSBpbXBsZW1lbnRhdGlvbiAoY29uc3RydWN0b3Igb3IgY2xhc3MpXG5cdCAqIHdoaWNoIGNyZWF0ZXMgaW5zdGFuY2VzIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBuYW1lLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW4/fSBpc1NpbmdsZXRvbiBJZiB0cnVlIHRoZW4gdGhlIG9ubHkgaW5zdGFuY2Ugd2lsbFxuXHQgKiBiZSBjcmVhdGVkIG9uIHRoZSBmaXJzdCBcInJlc29sdmVcIiBjYWxsIGFuZCBuZXh0IGNhbGxzIHdpbGxcblx0ICogcmV0dXJuIHRoaXMgaW5zdGFuY2UuXG5cdCAqL1xuXHRyZWdpc3Rlcih0eXBlLCBpbXBsZW1lbnRhdGlvbiwgaXNTaW5nbGV0b24pIHtcblx0XHR0aGlzLl90aHJvd0lmTm90RnVuY3Rpb24odHlwZSwgaW1wbGVtZW50YXRpb24pO1xuXHRcdHRoaXMuX3Rocm93SWZOb3RTdHJpbmcodHlwZSk7XG5cblx0XHR0aGlzLl9pbml0aWFsaXplUmVnaXN0cmF0aW9uKHR5cGUpO1xuXG5cdFx0dGhpcy5fcmVnaXN0cmF0aW9uc1t0eXBlXS51bnNoaWZ0KHtcblx0XHRcdEltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0XHRcdGlzU2luZ2xldG9uOiBCb29sZWFuKGlzU2luZ2xldG9uKSxcblx0XHRcdHNpbmdsZUluc3RhbmNlOiBudWxsXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgc2luZ2xlIGluc3RhbmNlIGZvciB0aGUgc3BlY2lmaWVkIHR5cGUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG5hbWUgZm9yIHJlc29sdmluZyB0aGUgaW5zdGFuY2UuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZSBUaGUgaW5zdGFuY2UgdG8gcmVnaXN0ZXIuXG5cdCAqL1xuXHRyZWdpc3Rlckluc3RhbmNlKHR5cGUsIGluc3RhbmNlKSB7XG5cdFx0dGhpcy5fdGhyb3dJZk5vdFN0cmluZyh0eXBlKTtcblx0XHR0aGlzLl9pbml0aWFsaXplUmVnaXN0cmF0aW9uKHR5cGUsIHRoaXMpO1xuXG5cdFx0dGhpcy5fcmVnaXN0cmF0aW9uc1t0eXBlXS51bnNoaWZ0KHtcblx0XHRcdEltcGxlbWVudGF0aW9uOiBpbnN0YW5jZS5jb25zdHJ1Y3Rvcixcblx0XHRcdGlzU2luZ2xldG9uOiB0cnVlLFxuXHRcdFx0c2luZ2xlSW5zdGFuY2U6IGluc3RhbmNlXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVzb2x2ZXMgdGhlIGxhc3QgcmVnaXN0ZXJlZCBpbXBsZW1lbnRhdGlvbiBieSB0aGUgdHlwZSBuYW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBuYW1lIHRvIHJlc29sdmUuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBpbnN0YW5jZSBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgbmFtZS5cblx0ICovXG5cdHJlc29sdmUodHlwZSkge1xuXHRcdHRoaXMuX3Rocm93SWZOb3RTdHJpbmcodHlwZSk7XG5cdFx0dGhpcy5fdGhyb3dJZk5vVHlwZSh0eXBlKTtcblx0XHRjb25zdCBmaXJzdFJlZ2lzdHJhdGlvbiA9IHRoaXMuX3JlZ2lzdHJhdGlvbnNbdHlwZV1bMF07XG5cdFx0cmV0dXJuIHRoaXMuX2NyZWF0ZUluc3RhbmNlKGZpcnN0UmVnaXN0cmF0aW9uKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXNvbHZlcyBhbGwgcmVnaXN0ZXJlZCBpbXBsZW1lbnRhdGlvbnMgYnkgdGhlIHR5cGUgbmFtZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgbmFtZSBmb3IgcmVzb2x2aW5nIGluc3RhbmNlcy5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgbGlzdCBvZiBpbnN0YW5jZXMgb2YgdGhlIHNwZWNpZmllZCB0eXBlIG5hbWUuXG5cdCAqL1xuXHRyZXNvbHZlQWxsKHR5cGUpIHtcblx0XHR0aGlzLl90aHJvd0lmTm90U3RyaW5nKHR5cGUpO1xuXHRcdHRoaXMuX3Rocm93SWZOb1R5cGUodHlwZSk7XG5cdFx0cmV0dXJuIHRoaXMuX3JlZ2lzdHJhdGlvbnNbdHlwZV1cblx0XHRcdC5tYXAocmVnaXN0cmF0aW9uID0+IHRoaXMuX2NyZWF0ZUluc3RhbmNlKHJlZ2lzdHJhdGlvbikpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVucmVnaXN0ZXJzIGFsbCByZWdpc3RyYXRpb25zIG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBuYW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBuYW1lIGZvciBkZWxldGluZyB0aGUgcmVnaXN0cmF0aW9ucy5cblx0ICovXG5cdHVucmVnaXN0ZXIodHlwZSkge1xuXHRcdHRoaXMuX3Rocm93SWZOb3RTdHJpbmcodHlwZSk7XG5cdFx0dGhpcy5fcmVnaXN0cmF0aW9uc1t0eXBlXSA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gaW5zdGFuY2UgZm9yIHRoZSBzcGVjaWZpZWQgcmVnaXN0cmF0aW9uIGRlc2NyaXB0b3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSByZWdpc3RyYXRpb24gVGhlIHJlZ2lzdHJhdGlvbiBkZXNjcmlwdG9yIG9iamVjdC5cblx0ICogQHJldHVybnMge09iamVjdH0gVGhlIGluc3RhbmNlIG9mIHRoZSBpbXBsZW1lbnRhdGlvbiBmb3VuZCBpblxuXHQgKiB0aGUgc3BlY2lmaWVkIHJlZ2lzdHJhdGlvbiBkZXNjcmlwdG9yLlxuXHQgKi9cblx0X2NyZWF0ZUluc3RhbmNlKHJlZ2lzdHJhdGlvbikge1xuXHRcdGlmIChyZWdpc3RyYXRpb24uaXNTaW5nbGV0b24gJiYgcmVnaXN0cmF0aW9uLnNpbmdsZUluc3RhbmNlICE9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVnaXN0cmF0aW9uLnNpbmdsZUluc3RhbmNlO1xuXHRcdH1cblxuXHRcdC8vIGluamVjdCBTZXJ2aWNlIExvY2F0b3IgYXMgdGhlIG9ubHkgYXJndW1lbnQgb2YgdGhlIGNvc3RydWN0b3IuXG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBuZXcgcmVnaXN0cmF0aW9uLkltcGxlbWVudGF0aW9uKHRoaXMpO1xuXG5cdFx0aWYgKHJlZ2lzdHJhdGlvbi5pc1NpbmdsZXRvbikge1xuXHRcdFx0cmVnaXN0cmF0aW9uLnNpbmdsZUluc3RhbmNlID0gaW5zdGFuY2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIGEgcmVnaXN0cmF0aW9uIGxpc3QgZm9yIHRoZSBzcGVjaWZpZWQgdHlwZSBuYW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBuYW1lIGZvciB0aGUgcmVnaXN0cmF0aW9uIGxpc3QuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfaW5pdGlhbGl6ZVJlZ2lzdHJhdGlvbih0eXBlKSB7XG5cdFx0aWYgKHR5cGUgaW4gdGhpcy5fcmVnaXN0cmF0aW9ucykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLl9yZWdpc3RyYXRpb25zW3R5cGVdID0gW107XG5cdH1cblxuXHQvKipcblx0ICogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBzcGVjaWZpZWQgcmVnaXN0cmF0aW9uIGlzIG5vdCBmb3VuZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgbmFtZSB0byBjaGVjay5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF90aHJvd0lmTm9UeXBlKHR5cGUpIHtcblx0XHRpZiAodHlwZSBpbiB0aGlzLl9yZWdpc3RyYXRpb25zICYmXG5cdFx0XHR0aGlzLl9yZWdpc3RyYXRpb25zW3R5cGVdLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBUeXBlIFwiJHt0eXBlfVwiIG5vdCByZWdpc3RlcmVkYCk7XG5cdH1cblxuXHQvKipcblx0ICogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBzcGVjaWZpZWQgaW1wbGVtZW50YXRpb24gaXMgbm90IGEgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG5hbWUgb2YgdGhlIGltcGxlbWVudGF0aW9uLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBJbXBsZW1lbnRhdGlvbiBUaGUgaW1wbGVtZW50YXRpb24gdG8gY2hlY2suXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfdGhyb3dJZk5vdEZ1bmN0aW9uKHR5cGUsIEltcGxlbWVudGF0aW9uKSB7XG5cdFx0aWYgKEltcGxlbWVudGF0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbnN0cnVjdG9yIGZvciB0eXBlICR7dHlwZX0gc2hvdWxkIGJlIGEgZnVuY3Rpb25gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHNwZWNpZmllZCB0eXBlIG5hbWUgaXMgbm90IGEgc3RyaW5nLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG5hbWUgdG8gY2hlY2suXG5cdCAqL1xuXHRfdGhyb3dJZk5vdFN0cmluZyh0eXBlKSB7XG5cdFx0aWYgKHR5cGVvZiAodHlwZSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhyb3cgbmV3IEVycm9yKGBUeXBlIG5hbWUgXCIke3R5cGV9XCIgc2hvdWxkIGJlIGEgc3RyaW5nYCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXJ2aWNlTG9jYXRvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTG9nZ2VyQmFzZSA9IHJlcXVpcmUoJy4uL2xpYi9Mb2dnZXJCYXNlJyk7XG5cbmNsYXNzIExvZ2dlciBleHRlbmRzIExvZ2dlckJhc2Uge1xuXG5cdC8qKlxuXHQgKiBXcml0ZXMgYSBsb2cgbWVzc2FnZS5cblx0ICogQHBhcmFtICB7bnVtYmVyfSBsZXZlbCAgIFRoZSBsb2cgbGV2ZWwuXG5cdCAqIEBwYXJhbSAge3N0cmluZ3xFcnJvcn0gbWVzc2FnZSBNZXNzYWdlIHRvIHdyaXRlLlxuXHQgKi9cblx0LyogZXNsaW50IG5vLWNvbnNvbGU6IDAgKi9cblx0d3JpdGUobGV2ZWwsIG1lc3NhZ2UpIHtcblx0XHRpZiAobGV2ZWwgPCB0aGlzLl9sZXZlbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChsZXZlbCA+PSA1MCkge1xuXHRcdFx0Y29uc3QgZXJyb3JNZXNzYWdlID0gbWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yID9cblx0XHRcdFx0YCR7bWVzc2FnZS5uYW1lfTogJHttZXNzYWdlLm1lc3NhZ2V9XFxuJHttZXNzYWdlLnN0YWNrfWAgOlxuXHRcdFx0XHRtZXNzYWdlO1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPj0gNDApIHtcblx0XHRcdGNvbnNvbGUud2FybihtZXNzYWdlKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID49IDMwKSB7XG5cdFx0XHRjb25zb2xlLmluZm8obWVzc2FnZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBXcmFwcyB0aGUgZXZlbnQgYnVzIHdpdGggbG9nIG1lc3NhZ2VzLlxuXHQgKiBAcGFyYW0gIHtFdmVudEVtaXR0ZXJ9IGV2ZW50QnVzIFRoZSBldmVudCBidXMgdG8gd3JhcC5cblx0ICovXG5cdHdyYXBFdmVudEJ1cyhldmVudEJ1cykge1xuXHRcdHN1cGVyLndyYXBFdmVudEJ1cyhldmVudEJ1cyk7XG5cblx0XHRjb25zdCB3aW5kb3cgPSB0aGlzLl9sb2NhdG9yLnJlc29sdmUoJ3dpbmRvdycpO1xuXG5cdFx0d2luZG93Lm9uZXJyb3IgPSAobXNnLCB1cmksIGxpbmUpID0+IHtcblx0XHRcdHRoaXMuZmF0YWwoYCR7dXJpfToke2xpbmV9ICR7bXNnfWApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblxuXHRcdGlmICh0aGlzLl9sZXZlbCA+IDIwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnRCdXNcblx0XHRcdC5vbignZG9jdW1lbnRVcGRhdGVkJywgYXJncyA9PlxuXHRcdFx0XHR0aGlzLmRlYnVnKGBEb2N1bWVudCB1cGRhdGVkICgke2FyZ3MubGVuZ3RofSBzdG9yZShzKSBjaGFuZ2VkKWApKVxuXHRcdFx0Lm9uKCdjb21wb25lbnRCb3VuZCcsIGFyZ3MgPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IGFyZ3MuaWQgPyBgIyR7YXJncy5pZH1gIDogJyc7XG5cdFx0XHRcdHRoaXMuZGVidWcoYENvbXBvbmVudCBcIiR7YXJncy5lbGVtZW50LnRhZ05hbWV9JHtpZH1cIiBpcyBib3VuZGApO1xuXHRcdFx0fSlcblx0XHRcdC5vbignY29tcG9uZW50VW5ib3VuZCcsIGFyZ3MgPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IGFyZ3MuaWQgPyBgIyR7YXJncy5pZH1gIDogJyc7XG5cdFx0XHRcdHRoaXMuZGVidWcoYENvbXBvbmVudCBcIiR7YXJncy5lbGVtZW50LnRhZ05hbWV9JHtpZH1cIiBpcyB1bmJvdW5kYCk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2dlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgTG9nZ2VyID0gcmVxdWlyZSgnLi9saWIvTG9nZ2VyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRyZWdpc3Rlcihsb2NhdG9yKSB7XG5cdFx0Y29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihsb2NhdG9yKTtcblx0XHRsb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ2xvZ2dlcicsIGxvZ2dlcik7XG5cdH0sXG5cdExvZ2dlclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgREVGQVVMVF9MRVZFTCA9IDMwO1xuY29uc3QgREVGQVVMVF9OQU1FID0gJ2NhdGJlcnJ5JztcblxuY29uc3QgcHJldHR5SHJUaW1lID0gcmVxdWlyZSgncHJldHR5LWhydGltZScpO1xuXG5jbGFzcyBMb2dnZXJCYXNlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBiYXNpYyB0aGlzLlxuXHQgKiBAcGFyYW0gIHtTZXJ2aWNlTG9jYXRvcn0gbG9jYXRvciBMb2NhdG9yIGZvciByZXNvbHZpbmcgZGVwZW5kZW5jaWVzLlxuXHQgKi9cblx0Y29uc3RydWN0b3IobG9jYXRvcikge1xuXHRcdGNvbnN0IGNvbmZpZyA9IGxvY2F0b3IucmVzb2x2ZSgnY29uZmlnJykubG9nZ2VyIHx8IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBTZXJ2aWNlIExvY2F0b3IuXG5cdFx0ICogQHR5cGUge1NlcnZpY2VMb2NhdG9yfVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9sb2NhdG9yID0gbG9jYXRvcjtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgbG9nZ2luZyBsZXZlbC5cblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9sZXZlbCA9IHR5cGVvZiAoY29uZmlnLmxldmVsKSA9PT0gJ251bWJlcicgPyBjb25maWcubGV2ZWwgOiBERUZBVUxUX0xFVkVMO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBsb2dnZXIgbmFtZS5cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9uYW1lID0gdHlwZW9mIChjb25maWcubmFtZSkgPT09ICdzdHJpbmcnID8gY29uZmlnLm5hbWUgOiBERUZBVUxUX05BTUU7XG5cblx0XHRjb25zdCBldmVudEJ1cyA9IGxvY2F0b3IucmVzb2x2ZSgnZXZlbnRCdXMnKTtcblx0XHR0aGlzLndyYXBFdmVudEJ1cyhldmVudEJ1cyk7XG5cdH1cblxuXHQvKipcblx0ICogTG9ncyBhIHRyYWNlIG1lc3NhZ2UuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHdyaXRlLlxuXHQgKi9cblx0dHJhY2UobWVzc2FnZSkge1xuXHRcdHRoaXMud3JpdGUoMTAsIG1lc3NhZ2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIExvZ3MgYSBkZWJ1ZyBtZXNzYWdlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byB3cml0ZS5cblx0ICovXG5cdGRlYnVnKG1lc3NhZ2UpIHtcblx0XHR0aGlzLndyaXRlKDIwLCBtZXNzYWdlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2dzIGFuIGluZm8gbWVzc2FnZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gd3JpdGUuXG5cdCAqL1xuXHRpbmZvKG1lc3NhZ2UpIHtcblx0XHR0aGlzLndyaXRlKDMwLCBtZXNzYWdlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2dzIGEgd2FybmluZyBtZXNzYWdlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byB3cml0ZS5cblx0ICovXG5cdHdhcm4obWVzc2FnZSkge1xuXHRcdHRoaXMud3JpdGUoNDAsIG1lc3NhZ2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIExvZ3MgYW4gZXJyb3IgbWVzc2FnZS5cblx0ICogQHBhcmFtIHtzdHJpbmd8RXJyb3J9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gd3JpdGUuXG5cdCAqL1xuXHRlcnJvcihtZXNzYWdlKSB7XG5cdFx0dGhpcy53cml0ZSg1MCwgbWVzc2FnZSk7XG5cdH1cblxuXHQvKipcblx0ICogTG9ncyBhIGZhdGFsIGVycm9yIG1lc3NhZ2UuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfEVycm9yfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHdyaXRlLlxuXHQgKi9cblx0ZmF0YWwobWVzc2FnZSkge1xuXHRcdHRoaXMud3JpdGUoNjAsIG1lc3NhZ2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdyYXBzIHRoZSBldmVudCBidXMgd2l0aCBsb2cgbWVzc2FnZXMuXG5cdCAqIEBwYXJhbSAge0V2ZW50RW1pdHRlcn0gZXZlbnRCdXMgVGhlIGV2ZW50IGJ1cyB0byB3cmFwLlxuXHQgKi9cblx0d3JhcEV2ZW50QnVzKGV2ZW50QnVzKSB7XG5cdFx0aWYgKHRoaXMuX2xldmVsID4gNTApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZXZlbnRCdXMub24oJ2Vycm9yJywgZXJyb3IgPT4gdGhpcy5lcnJvcihlcnJvcikpO1xuXG5cdFx0aWYgKHRoaXMuX2xldmVsID4gNDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZXZlbnRCdXMub24oJ3dhcm4nLCBtc2cgPT4gdGhpcy53YXJuKG1zZykpO1xuXG5cdFx0aWYgKHRoaXMuX2xldmVsID4gMzApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudEJ1c1xuXHRcdFx0Lm9uKCdpbmZvJywgbXNnID0+IHRoaXMuaW5mbyhtc2cpKVxuXHRcdFx0Lm9uKCdjb21wb25lbnRMb2FkZWQnLCBhcmdzID0+IHRoaXMuaW5mbyhgQ29tcG9uZW50IFwiJHthcmdzLm5hbWV9XCIgbG9hZGVkYCkpXG5cdFx0XHQub24oJ3N0b3JlTG9hZGVkJywgYXJncyA9PiB0aGlzLmluZm8oYFN0b3JlIFwiJHthcmdzLm5hbWV9XCIgbG9hZGVkYCkpXG5cdFx0XHQub24oJ2FsbFN0b3Jlc0xvYWRlZCcsICgpID0+IHRoaXMuaW5mbygnQWxsIHN0b3JlcyBsb2FkZWQnKSlcblx0XHRcdC5vbignYWxsQ29tcG9uZW50c0xvYWRlZCcsICgpID0+IHRoaXMuaW5mbygnQWxsIGNvbXBvbmVudHMgbG9hZGVkJykpO1xuXG5cdFx0aWYgKHRoaXMuX2xldmVsID4gMjApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudEJ1c1xuXHRcdFx0Lm9uKCdkZWJ1ZycsIG1zZyA9PiB0aGlzLmRlYnVnKG1zZykpXG5cdFx0XHQub24oJ2NvbXBvbmVudFJlbmRlcicsIGFyZ3MgPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IGdldElkKGFyZ3MuY29udGV4dCk7XG5cdFx0XHRcdGNvbnN0IHRhZ05hbWUgPSBnZXRUYWdOYW1lRm9yQ29tcG9uZW50TmFtZShhcmdzLm5hbWUpO1xuXHRcdFx0XHR0aGlzLmRlYnVnKGBDb21wb25lbnQgXCIke3RhZ05hbWV9JHtpZH1cIiBpcyBiZWluZyByZW5kZXJlZC4uLmApO1xuXHRcdFx0fSlcblx0XHRcdC5vbignY29tcG9uZW50UmVuZGVyZWQnLCBhcmdzID0+IHtcblx0XHRcdFx0Y29uc3QgaWQgPSBnZXRJZChhcmdzLmNvbnRleHQpO1xuXHRcdFx0XHRjb25zdCB0YWdOYW1lID0gZ2V0VGFnTmFtZUZvckNvbXBvbmVudE5hbWUoYXJncy5uYW1lKTtcblx0XHRcdFx0Y29uc3QgdGltZSA9IEFycmF5LmlzQXJyYXkoYXJncy5oclRpbWUpID9cblx0XHRcdFx0XHRgICgke3ByZXR0eUhyVGltZShhcmdzLmhyVGltZSl9KWAgOiAnJztcblx0XHRcdFx0dGhpcy5kZWJ1ZyhgQ29tcG9uZW50IFwiJHt0YWdOYW1lfSR7aWR9XCIgcmVuZGVyZWQke3RpbWV9YCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdkb2N1bWVudFJlbmRlcmVkJyxcblx0XHRcdFx0YXJncyA9PiB0aGlzLmRlYnVnKGBEb2N1bWVudCByZW5kZXJlZCBmb3IgVVJJICR7YXJncy5sb2NhdGlvbi50b1N0cmluZygpfWApKTtcblxuXHRcdGlmICh0aGlzLl9sZXZlbCA+IDEwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnRCdXMub24oJ3RyYWNlJywgbXNnID0+IHRoaXMudHJhY2UobXNnKSk7XG5cdH1cbn1cblxuLyoqXG4gKiBHZXRzIGFuIElEIGZvciBsb2dnaW5nIGNvbXBvbmVudC1yZWxhdGVkIG1lc3NhZ2VzLlxuICogQHBhcmFtICB7T2JqZWN0fSBjb250ZXh0IFRoZSBjb21wb25lbnQncyBjb250ZXh0LlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgSUQgb2YgdGhlIGVsZW1lbnQgc3RhcnRpbmcgd2l0aCAnIycuXG4gKi9cbmZ1bmN0aW9uIGdldElkKGNvbnRleHQpIHtcblx0Y29uc3QgaWQgPSBjb250ZXh0LmF0dHJpYnV0ZXMuaWQ7XG5cdHJldHVybiBpZCA/IGAjJHtpZH1gIDogJyc7XG59XG5cbi8qKlxuICogR2V0cyBhIHRhZyBuYW1lIGZvciBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSAge3N0cmluZ30gY29tcG9uZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgY29tcG9uZW50LlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgdGFnIG5hbWUgb2YgdGhlIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gZ2V0VGFnTmFtZUZvckNvbXBvbmVudE5hbWUoY29tcG9uZW50TmFtZSkge1xuXHRpZiAodHlwZW9mIChjb21wb25lbnROYW1lKSAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Y29uc3QgdXBwZXJDb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpO1xuXHRpZiAoY29tcG9uZW50TmFtZSA9PT0gJ0hFQUQnKSB7XG5cdFx0cmV0dXJuIHVwcGVyQ29tcG9uZW50TmFtZTtcblx0fVxuXHRpZiAoY29tcG9uZW50TmFtZSA9PT0gJ0RPQ1VNRU5UJykge1xuXHRcdHJldHVybiAnSFRNTCc7XG5cdH1cblx0cmV0dXJuIGBDQVQtJHt1cHBlckNvbXBvbmVudE5hbWV9YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2dnZXJCYXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVSFJCYXNlID0gcmVxdWlyZSgnLi4vbGliL1VIUkJhc2UnKTtcblxuY29uc3QgTk9OX1NBRkVfSEVBREVSUyA9IHtcblx0Y29va2llOiB0cnVlLFxuXHQnYWNjZXB0LWNoYXJzZXQnOiB0cnVlXG59O1xuXG5jbGFzcyBVSFIgZXh0ZW5kcyBVSFJCYXNlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY2xpZW50LXNpZGUgSFRUUChTKSByZXF1ZXN0IGltcGxlbWVudGF0aW9uLlxuXHQgKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSBsb2NhdG9yIFRoZSBzZXJ2aWNlIGxvY2F0b3IgZm9yIHJlc29sdmluZyBkZXBlbmRlbmNpZXMuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihsb2NhdG9yKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgaW5zdGFuY2Ugb2Ygd2luZG93LlxuXHRcdCAqIEB0eXBlIHtXaW5kb3d9XG5cdFx0ICovXG5cdFx0dGhpcy53aW5kb3cgPSBsb2NhdG9yLnJlc29sdmUoJ3dpbmRvdycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERvZXMgcmVxdWVzdCB3aXRoIHNwZWNpZmllZCBwYXJhbWV0ZXJzIHVzaW5nIHByb3RvY29sIGltcGxlbWVudGF0aW9uLlxuXHQgKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMgVGhlIHJlcXVlc3QgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtzdHJpbmc/fSBwYXJhbWV0ZXJzLm1ldGhvZCBUaGUgSFRUUCBtZXRob2QgZm9yIHRoZSByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge3N0cmluZz99IHBhcmFtZXRlcnMudXJsIFRoZSBVUkwgZm9yIHRoZSByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge1VSSX0gcGFyYW1ldGVycy51cmkgVGhlIFVSSSBvYmplY3QuXG5cdCAqIEBwYXJhbSB7T2JqZWN0P30gcGFyYW1ldGVycy5oZWFkZXJzIFRoZSBIVFRQIGhlYWRlcnMgdG8gc2VuZC5cblx0ICogQHBhcmFtIHsoc3RyaW5nfE9iamVjdCk/fSBwYXJhbWV0ZXJzLmRhdGEgVGhlIGRhdGEgdG8gc2VuZC5cblx0ICogQHBhcmFtIHtudW1iZXI/fSBwYXJhbWV0ZXJzLnRpbWVvdXQgVGhlIHJlcXVlc3QgdGltZW91dC5cblx0ICogQHBhcmFtIHtib29sZWFuP30gcGFyYW1ldGVycy51bnNhZmVIVFRQUyBJZiB0cnVlIHRoZW4gcmVxdWVzdHMgdG8gc2VydmVycyB3aXRoXG5cdCAqIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBQcm9taXNlIGZvciB0aGUgcmVzdWx0IHdpdGggYSBzdGF0dXMgb2JqZWN0IGFuZCBjb250ZW50LlxuXHQgKi9cblx0X2RvUmVxdWVzdChwYXJhbWV0ZXJzKSB7XG5cdFx0T2JqZWN0LmtleXMocGFyYW1ldGVycy5oZWFkZXJzKVxuXHRcdFx0LmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRcdGlmIChOT05fU0FGRV9IRUFERVJTLmhhc093blByb3BlcnR5KG5hbWUudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0XHRkZWxldGUgcGFyYW1ldGVycy5oZWFkZXJzW25hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCB4aHIgPSBuZXcgdGhpcy53aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdHZhciByZXF1ZXN0RXJyb3IgPSBudWxsO1xuXG5cdFx0XHR4aHIub25hYm9ydCA9ICgpID0+IHtcblx0XHRcdFx0cmVxdWVzdEVycm9yID0gbmV3IEVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnKTtcblx0XHRcdFx0cmVqZWN0KHJlcXVlc3RFcnJvcik7XG5cdFx0XHR9O1xuXHRcdFx0eGhyLm9udGltZW91dCA9ICgpID0+IHtcblx0XHRcdFx0cmVxdWVzdEVycm9yID0gbmV3IEVycm9yKCdSZXF1ZXN0IHRpbWVvdXQnKTtcblx0XHRcdFx0cmVqZWN0KHJlcXVlc3RFcnJvcik7XG5cdFx0XHR9O1xuXHRcdFx0eGhyLm9uZXJyb3IgPSAoKSA9PiB7XG5cdFx0XHRcdHJlcXVlc3RFcnJvciA9IG5ldyBFcnJvcih4aHIuc3RhdHVzVGV4dCB8fCAnQ29ubmVjdGlvbiBlcnJvcicpO1xuXHRcdFx0XHRyZWplY3QocmVxdWVzdEVycm9yKTtcblx0XHRcdH07XG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT09IDQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlcXVlc3RFcnJvcikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzdGF0dXMgPSB0aGlzLl9nZXRTdGF0dXNPYmplY3QoeGhyKTtcblx0XHRcdFx0Y29uc3QgY29udGVudCA9IHRoaXMuY29udmVydFJlc3BvbnNlKHN0YXR1cy5oZWFkZXJzLCB4aHIucmVzcG9uc2VUZXh0KTtcblx0XHRcdFx0ZnVsZmlsbCh7XG5cdFx0XHRcdFx0c3RhdHVzLFxuXHRcdFx0XHRcdGNvbnRlbnRcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCB1c2VyID0gcGFyYW1ldGVycy51cmkuYXV0aG9yaXR5LnVzZXJJbmZvID9cblx0XHRcdFx0XHRwYXJhbWV0ZXJzLnVyaS5hdXRob3JpdHkudXNlckluZm8udXNlciA6IG51bGw7XG5cdFx0XHRjb25zdCBwYXNzd29yZCA9IHBhcmFtZXRlcnMudXJpLmF1dGhvcml0eS51c2VySW5mbyA/XG5cdFx0XHRcdFx0cGFyYW1ldGVycy51cmkuYXV0aG9yaXR5LnVzZXJJbmZvLnBhc3N3b3JkIDogbnVsbDtcblx0XHRcdHhoci5vcGVuKFxuXHRcdFx0XHRwYXJhbWV0ZXJzLm1ldGhvZCwgcGFyYW1ldGVycy51cmkudG9TdHJpbmcoKSwgdHJ1ZSxcblx0XHRcdFx0dXNlciB8fCB1bmRlZmluZWQsIHBhc3N3b3JkIHx8IHVuZGVmaW5lZFxuXHRcdFx0KTtcblx0XHRcdHhoci50aW1lb3V0ID0gcGFyYW1ldGVycy50aW1lb3V0O1xuXG5cdFx0XHRpZiAocGFyYW1ldGVycy53aXRoQ3JlZGVudGlhbHMpIHtcblx0XHRcdFx0eGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdE9iamVjdC5rZXlzKHBhcmFtZXRlcnMuaGVhZGVycylcblx0XHRcdFx0LmZvckVhY2goaGVhZGVyTmFtZSA9PiB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJOYW1lLCBwYXJhbWV0ZXJzLmhlYWRlcnNbaGVhZGVyTmFtZV0pKTtcblxuXHRcdFx0eGhyLnNlbmQocGFyYW1ldGVycy5kYXRhKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBzdGF0dXMgb2JqZWN0IGZvciB0aGUgc3BlY2lmaWVkIFhIUiBvYmplY3QuXG5cdCAqIEBwYXJhbSB7WG1sSHR0cFJlcXVlc3R9IHhociBYSFIgb2JqZWN0LlxuXHQgKiBAcmV0dXJucyB7e2NvZGU6IG51bWJlciwgdGV4dDogc3RyaW5nLCBoZWFkZXJzOiBPYmplY3R9fSBUaGUgc3RhdHVzIG9iamVjdC5cblx0ICovXG5cdF9nZXRTdGF0dXNPYmplY3QoeGhyKSB7XG5cdFx0Y29uc3QgaGVhZGVycyA9IHt9O1xuXG5cdFx0aWYgKCF4aHIpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNvZGU6IDAsXG5cdFx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0XHRoZWFkZXJzXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHhoclxuXHRcdFx0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG5cdFx0XHQuc3BsaXQoJ1xcbicpXG5cdFx0XHQuZm9yRWFjaChoZWFkZXIgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWxpbWl0ZXJJbmRleCA9IGhlYWRlci5pbmRleE9mKCc6Jyk7XG5cdFx0XHRcdGlmIChkZWxpbWl0ZXJJbmRleCA8PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGhlYWRlck5hbWUgPSBoZWFkZXJcblx0XHRcdFx0XHQuc3Vic3RyaW5nKDAsIGRlbGltaXRlckluZGV4KVxuXHRcdFx0XHRcdC50cmltKClcblx0XHRcdFx0XHQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0aGVhZGVyc1toZWFkZXJOYW1lXSA9IGhlYWRlclxuXHRcdFx0XHRcdC5zdWJzdHJpbmcoZGVsaW1pdGVySW5kZXggKyAxKVxuXHRcdFx0XHRcdC50cmltKCk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQvLyBoYW5kbGUgSUU5IGJ1ZzogaHR0cDovL2dvby5nbC9pZHNwU3Jcblx0XHRcdGNvZGU6IHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzLFxuXHRcdFx0dGV4dDogeGhyLnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHhoci5zdGF0dXNUZXh0LFxuXHRcdFx0aGVhZGVyc1xuXHRcdH07XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVSFI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVIUiA9IHJlcXVpcmUoJy4vbGliL1VIUicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIFVIUiBpbiB0aGUgc2VydmljZSBsb2NhdG9yLlxuXHQgKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSBsb2NhdG9yIENhdGJlcnJ5J3Mgc2VydmljZSBsb2NhdG9yLlxuXHQgKi9cblx0cmVnaXN0ZXI6IGxvY2F0b3IgPT4ge1xuXHRcdGxvY2F0b3IucmVnaXN0ZXIoJ3VocicsIFVIUiwgdHJ1ZSk7XG5cdH0sXG5cdFVIUlxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY2F0YmVycnlVcmkgPSByZXF1aXJlKCdjYXRiZXJyeS11cmknKTtcbmNvbnN0IFF1ZXJ5ID0gY2F0YmVycnlVcmkuUXVlcnk7XG5jb25zdCBVUkkgPSBjYXRiZXJyeVVyaS5VUkk7XG5cbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDMwMDAwO1xuY29uc3QgSFRUUF9QUk9UT0NPTF9SRUdFWFAgPSAvXihodHRwKXM/JC9pO1xuXG4vLyBUaGlzIG1vZHVsZSB3ZXJlIGRldmVsb3BlZCB1c2luZyBIVFRQLzEuMXYyIFJGQyAyNjE2XG4vLyAoaHR0cDovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvKVxuY2xhc3MgVUhSQmFzZSB7XG5cblx0c3RhdGljIGdldCBNRVRIT0RTKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRHRVQ6ICdHRVQnLFxuXHRcdFx0SEVBRDogJ0hFQUQnLFxuXHRcdFx0UE9TVDogJ1BPU1QnLFxuXHRcdFx0UFVUOiAnUFVUJyxcblx0XHRcdFBBVENIOiAnUEFUQ0gnLFxuXHRcdFx0REVMRVRFOiAnREVMRVRFJyxcblx0XHRcdE9QVElPTlM6ICdPUFRJT05TJyxcblx0XHRcdFRSQUNFOiAnVFJBQ0UnLFxuXHRcdFx0Q09OTkVDVDogJ0NPTk5FQ1QnXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgVFlQRVMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFVSTF9FTkNPREVEOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcblx0XHRcdEpTT046ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFBMQUlOX1RFWFQ6ICd0ZXh0L3BsYWluJyxcblx0XHRcdEhUTUw6ICd0ZXh0L2h0bWwnXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgQ0hBUlNFVCgpIHtcblx0XHRyZXR1cm4gJ1VURi04Jztcblx0fVxuXG5cdHN0YXRpYyBnZXQgREVGQVVMVF9HRU5FUkFMX0hFQURFUlMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdEFjY2VwdDogYCR7VUhSQmFzZS5UWVBFUy5KU09OfTsgcT0wLjcsICR7VUhSQmFzZS5UWVBFUy5IVE1MfTsgcT0wLjIsICR7VUhSQmFzZS5UWVBFUy5QTEFJTl9URVhUfTsgcT0wLjFgLFxuXHRcdFx0J0FjY2VwdC1DaGFyc2V0JzogYCR7VUhSQmFzZS5DSEFSU0VUfTsgcT0xYFxuXHRcdH07XG5cdH1cblxuXHRzdGF0aWMgZ2V0IENIQVJTRVRfUEFSQU1FVEVSKCkge1xuXHRcdHJldHVybiBgOyBjaGFyc2V0PSR7VUhSQmFzZS5DSEFSU0VUfWA7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IFVSTF9FTkNPREVEX0VOVElUWV9DT05URU5UX1RZUEUoKSB7XG5cdFx0cmV0dXJuIFVIUkJhc2UuVFlQRVMuVVJMX0VOQ09ERUQgKyBVSFJCYXNlLkNIQVJTRVRfUEFSQU1FVEVSO1xuXHR9XG5cblx0c3RhdGljIGdldCBKU09OX0VOVElUWV9DT05URU5UX1RZUEUoKSB7XG5cdFx0cmV0dXJuIFVIUkJhc2UuVFlQRVMuSlNPTiArIFVIUkJhc2UuQ0hBUlNFVF9QQVJBTUVURVI7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IFBMQUlOX1RFWFRfRU5USVRZX0NPTlRFTlRfVFlQRSgpIHtcblx0XHRyZXR1cm4gVUhSQmFzZS5UWVBFUy5QTEFJTl9URVhUICsgVUhSQmFzZS5DSEFSU0VUX1BBUkFNRVRFUjtcblx0fVxuXG5cdC8qKlxuXHQgKiBEb2VzIGEgR0VUIHJlcXVlc3QgdG8gdGhlIEhUVFAgc2VydmVyLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCB0byByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMgVGhlIHJlcXVlc3QgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbWV0ZXJzLmhlYWRlcnMgVGhlIEhUVFAgaGVhZGVycyB0byBzZW5kLlxuXHQgKiBAcGFyYW0geyhzdHJpbmd8T2JqZWN0KT99IHBhcmFtZXRlcnMuZGF0YSBUaGUgZGF0YSB0byBzZW5kLlxuXHQgKiBAcGFyYW0ge251bWJlcj99IHBhcmFtZXRlcnMudGltZW91dCBUaGUgcmVxdWVzdCB0aW1lb3V0LlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW4/fSBwYXJhbWV0ZXJzLnVuc2FmZUhUVFBTIElmIHRydWUgdGhlbiByZXF1ZXN0cyB0byBzZXJ2ZXJzIHdpdGhcblx0ICogaW52YWxpZCBIVFRQUyBjZXJ0aWZpY2F0ZXMgYXJlIGFsbG93ZWQuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFRoZSBwcm9taXNlIGZvciBhIHJlc3VsdCB3aXRoIHRoZSBzdGF0dXMgb2JqZWN0IGFuZCBjb250ZW50LlxuXHQgKi9cblx0Z2V0KHVybCwgcGFyYW1ldGVycykge1xuXHRcdHJldHVybiB0aGlzLnJlcXVlc3QodGhpcy5fbm9ybWFsaXplT3B0aW9ucyhVSFJCYXNlLk1FVEhPRFMuR0VULCB1cmwsIHBhcmFtZXRlcnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEb2VzIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBIVFRQIHNlcnZlci5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHVybCBVUkwgdG8gcmVxdWVzdC5cblx0ICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbWV0ZXJzIFRoZSByZXF1ZXN0IHBhcmFtZXRlcnMuXG5cdCAqIEBwYXJhbSB7T2JqZWN0P30gcGFyYW1ldGVycy5oZWFkZXJzIFRoZSBIVFRQIGhlYWRlcnMgdG8gc2VuZC5cblx0ICogQHBhcmFtIHsoc3RyaW5nfE9iamVjdCk/fSBwYXJhbWV0ZXJzLmRhdGEgVGhlIGRhdGEgdG8gc2VuZC5cblx0ICogQHBhcmFtIHtudW1iZXI/fSBwYXJhbWV0ZXJzLnRpbWVvdXQgVGhlIHJlcXVlc3QgdGltZW91dC5cblx0ICogQHBhcmFtIHtib29sZWFuP30gcGFyYW1ldGVycy51bnNhZmVIVFRQUyBJZiB0cnVlIHRoZW4gcmVxdWVzdHMgdG8gc2VydmVycyB3aXRoXG5cdCAqIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBUaGUgcHJvbWlzZSBmb3IgYSByZXN1bHQgd2l0aCB0aGUgc3RhdHVzIG9iamVjdCBhbmQgY29udGVudC5cblx0ICovXG5cdHBvc3QodXJsLCBwYXJhbWV0ZXJzKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdCh0aGlzLl9ub3JtYWxpemVPcHRpb25zKFVIUkJhc2UuTUVUSE9EUy5QT1NULCB1cmwsIHBhcmFtZXRlcnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEb2VzIGEgUFVUIHJlcXVlc3QgdG8gdGhlIEhUVFAgc2VydmVyLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCB0byByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMgVGhlIHJlcXVlc3QgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbWV0ZXJzLmhlYWRlcnMgVGhlIEhUVFAgaGVhZGVycyB0byBzZW5kLlxuXHQgKiBAcGFyYW0geyhzdHJpbmd8T2JqZWN0KT99IHBhcmFtZXRlcnMuZGF0YSBUaGUgZGF0YSB0byBzZW5kLlxuXHQgKiBAcGFyYW0ge251bWJlcj99IHBhcmFtZXRlcnMudGltZW91dCBUaGUgcmVxdWVzdCB0aW1lb3V0LlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW4/fSBwYXJhbWV0ZXJzLnVuc2FmZUhUVFBTIElmIHRydWUgdGhlbiByZXF1ZXN0cyB0byBzZXJ2ZXJzIHdpdGhcblx0ICogaW52YWxpZCBIVFRQUyBjZXJ0aWZpY2F0ZXMgYXJlIGFsbG93ZWQuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFRoZSBwcm9taXNlIGZvciBhIHJlc3VsdCB3aXRoIHRoZSBzdGF0dXMgb2JqZWN0IGFuZCBjb250ZW50LlxuXHQgKi9cblx0cHV0KHVybCwgcGFyYW1ldGVycykge1xuXHRcdHJldHVybiB0aGlzLnJlcXVlc3QodGhpcy5fbm9ybWFsaXplT3B0aW9ucyhVSFJCYXNlLk1FVEhPRFMuUFVULCB1cmwsIHBhcmFtZXRlcnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEb2VzIGEgUEFUQ0ggcmVxdWVzdCB0byB0aGUgSFRUUCBzZXJ2ZXIuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIHRvIHJlcXVlc3QuXG5cdCAqIEBwYXJhbSB7T2JqZWN0P30gcGFyYW1ldGVycyBUaGUgcmVxdWVzdCBwYXJhbWV0ZXJzLlxuXHQgKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMuaGVhZGVycyBUaGUgSFRUUCBoZWFkZXJzIHRvIHNlbmQuXG5cdCAqIEBwYXJhbSB7KHN0cmluZ3xPYmplY3QpP30gcGFyYW1ldGVycy5kYXRhIFRoZSBkYXRhIHRvIHNlbmQuXG5cdCAqIEBwYXJhbSB7bnVtYmVyP30gcGFyYW1ldGVycy50aW1lb3V0IFRoZSByZXF1ZXN0IHRpbWVvdXQuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbj99IHBhcmFtZXRlcnMudW5zYWZlSFRUUFMgSWYgdHJ1ZSB0aGVuIHJlcXVlc3RzIHRvIHNlcnZlcnMgd2l0aFxuXHQgKiBpbnZhbGlkIEhUVFBTIGNlcnRpZmljYXRlcyBhcmUgYWxsb3dlZC5cblx0ICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gVGhlIHByb21pc2UgZm9yIGEgcmVzdWx0IHdpdGggdGhlIHN0YXR1cyBvYmplY3QgYW5kIGNvbnRlbnQuXG5cdCAqL1xuXHRwYXRjaCh1cmwsIHBhcmFtZXRlcnMpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KHRoaXMuX25vcm1hbGl6ZU9wdGlvbnMoVUhSQmFzZS5NRVRIT0RTLlBBVENILCB1cmwsIHBhcmFtZXRlcnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEb2VzIGEgREVMRVRFIHJlcXVlc3QgdG8gdGhlIEhUVFAgc2VydmVyLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCB0byByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMgVGhlIHJlcXVlc3QgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbWV0ZXJzLmhlYWRlcnMgVGhlIEhUVFAgaGVhZGVycyB0byBzZW5kLlxuXHQgKiBAcGFyYW0geyhzdHJpbmd8T2JqZWN0KT99IHBhcmFtZXRlcnMuZGF0YSBUaGUgZGF0YSB0byBzZW5kLlxuXHQgKiBAcGFyYW0ge251bWJlcj99IHBhcmFtZXRlcnMudGltZW91dCBUaGUgcmVxdWVzdCB0aW1lb3V0LlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW4/fSBwYXJhbWV0ZXJzLnVuc2FmZUhUVFBTIElmIHRydWUgdGhlbiByZXF1ZXN0cyB0byBzZXJ2ZXJzIHdpdGhcblx0ICogaW52YWxpZCBIVFRQUyBjZXJ0aWZpY2F0ZXMgYXJlIGFsbG93ZWQuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFRoZSBwcm9taXNlIGZvciBhIHJlc3VsdCB3aXRoIHRoZSBzdGF0dXMgb2JqZWN0IGFuZCBjb250ZW50LlxuXHQgKi9cblx0ZGVsZXRlKHVybCwgcGFyYW1ldGVycykge1xuXHRcdHJldHVybiB0aGlzLnJlcXVlc3QodGhpcy5fbm9ybWFsaXplT3B0aW9ucyhVSFJCYXNlLk1FVEhPRFMuREVMRVRFLCB1cmwsIHBhcmFtZXRlcnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEb2VzIGEgcmVxdWVzdCB0byB0aGUgSFRUUCBzZXJ2ZXIuXG5cdCAqIEBwYXJhbSB7T2JqZWN0P30gcGFyYW1ldGVycyBUaGUgcmVxdWVzdCBwYXJhbWV0ZXJzLlxuXHQgKiBAcGFyYW0ge3N0cmluZz99IHBhcmFtZXRlcnMubWV0aG9kIFRoZSBIVFRQIG1ldGhvZCBmb3IgdGhlIHJlcXVlc3QuXG5cdCAqIEBwYXJhbSB7c3RyaW5nP30gcGFyYW1ldGVycy51cmwgVGhlIFVSTCBmb3IgdGhlIHJlcXVlc3QuXG5cdCAqIEBwYXJhbSB7T2JqZWN0P30gcGFyYW1ldGVycy5oZWFkZXJzIFRoZSBIVFRQIGhlYWRlcnMgdG8gc2VuZC5cblx0ICogQHBhcmFtIHsoc3RyaW5nfE9iamVjdCk/fSBwYXJhbWV0ZXJzLmRhdGEgVGhlIGRhdGEgdG8gc2VuZC5cblx0ICogQHBhcmFtIHtudW1iZXI/fSBwYXJhbWV0ZXJzLnRpbWVvdXQgVGhlIHJlcXVlc3QgdGltZW91dC5cblx0ICogQHBhcmFtIHtib29sZWFuP30gcGFyYW1ldGVycy51bnNhZmVIVFRQUyBJZiB0cnVlIHRoZW4gcmVxdWVzdHMgdG8gc2VydmVycyB3aXRoXG5cdCAqIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBUaGUgcHJvbWlzZSBmb3IgYSByZXN1bHQgd2l0aCB0aGUgc3RhdHVzIG9iamVjdCBhbmQgY29udGVudC5cblx0ICovXG5cdHJlcXVlc3QocGFyYW1ldGVycykge1xuXHRcdHJldHVybiB0aGlzLl92YWxpZGF0ZVJlcXVlc3QocGFyYW1ldGVycylcblx0XHRcdC50aGVuKHZhbGlkYXRlZCA9PiB0aGlzLl9kb1JlcXVlc3QodmFsaWRhdGVkKSk7XG5cdH1cblxuXHQvKipcblx0ICogVmFsaWRhdGVzIFVIUiBwYXJhbWV0ZXJzLlxuXHQgKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMgVGhlIHJlcXVlc3QgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtzdHJpbmc/fSBwYXJhbWV0ZXJzLm1ldGhvZCBUaGUgSFRUUCBtZXRob2QgZm9yIHRoZSByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge3N0cmluZz99IHBhcmFtZXRlcnMudXJsIFRoZSBVUkwgZm9yIHRoZSByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMuaGVhZGVycyBUaGUgSFRUUCBoZWFkZXJzIHRvIHNlbmQuXG5cdCAqIEBwYXJhbSB7KHN0cmluZ3xPYmplY3QpP30gcGFyYW1ldGVycy5kYXRhIFRoZSBkYXRhIHRvIHNlbmQuXG5cdCAqIEBwYXJhbSB7bnVtYmVyP30gcGFyYW1ldGVycy50aW1lb3V0IFRoZSByZXF1ZXN0IHRpbWVvdXQuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbj99IHBhcmFtZXRlcnMudW5zYWZlSFRUUFMgSWYgdHJ1ZSB0aGVuIHJlcXVlc3RzIHRvIHNlcnZlcnMgd2l0aFxuXHQgKiBpbnZhbGlkIEhUVFBTIGNlcnRpZmljYXRlcyBhcmUgYWxsb3dlZC5cblx0ICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIHRoZSBmaW5pc2hlZCB3b3JrLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0LyogZXNsaW50IGNvbXBsZXhpdHk6IDAgKi9cblx0X3ZhbGlkYXRlUmVxdWVzdChwYXJhbWV0ZXJzKSB7XG5cdFx0aWYgKCFwYXJhbWV0ZXJzIHx8IHR5cGVvZiAocGFyYW1ldGVycykgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdSZXF1ZXN0IHBhcmFtZXRlcnMgYXJndW1lbnQgc2hvdWxkIGJlIGFuIG9iamVjdCcpKTtcblx0XHR9XG5cblx0XHRjb25zdCB2YWxpZGF0ZWQgPSBPYmplY3QuY3JlYXRlKHBhcmFtZXRlcnMpO1xuXG5cdFx0aWYgKHR5cGVvZiAocGFyYW1ldGVycy51cmwpICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignXCJwYXJhbWV0ZXJzLnVybFwiIGlzIGEgcmVxdWlyZWQgcGFyYW1ldGVyJykpO1xuXHRcdH1cblxuXHRcdHZhbGlkYXRlZC51cmkgPSBuZXcgVVJJKHZhbGlkYXRlZC51cmwpO1xuXHRcdGlmICghdmFsaWRhdGVkLnVyaS5zY2hlbWUpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1wicGFyYW1ldGVycy51cmxcIiBzaG91bGQgY29udGFpbiBhIHByb3RvY29sIChzY2hlbWUpJykpO1xuXHRcdH1cblx0XHRpZiAoIUhUVFBfUFJPVE9DT0xfUkVHRVhQLnRlc3QodmFsaWRhdGVkLnVyaS5zY2hlbWUpKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBcIiR7dmFsaWRhdGVkLnVyaS5zY2hlbWV9XCIgcHJvdG9jb2wgKHNjaGVtZSkgaXMgdW5zdXBwb3J0ZWRgKSk7XG5cdFx0fVxuXHRcdGlmICghdmFsaWRhdGVkLnVyaS5hdXRob3JpdHkgfHwgIXZhbGlkYXRlZC51cmkuYXV0aG9yaXR5Lmhvc3QpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1wicGFyYW1ldGVycy51cmxcIiBzaG91bGQgY29udGFpbiBhIGhvc3QnKSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgKHZhbGlkYXRlZC5tZXRob2QpICE9PSAnc3RyaW5nJyB8fFxuXHRcdFx0ISh2YWxpZGF0ZWQubWV0aG9kIGluIFVIUkJhc2UuTUVUSE9EUykpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0hUVFAgbWV0aG9kIGlzIGEgcmVxdWlyZWQgcGFyYW1ldGVyJykpO1xuXHRcdH1cblxuXHRcdHZhbGlkYXRlZC50aW1lb3V0ID0gdmFsaWRhdGVkLnRpbWVvdXQgfHwgREVGQVVMVF9USU1FT1VUO1xuXHRcdGlmICh0eXBlb2YgKHZhbGlkYXRlZC50aW1lb3V0KSAhPT0gJ251bWJlcicpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1RpbWVvdXQgc2hvdWxkIGJlIGEgbnVtYmVyJykpO1xuXHRcdH1cblxuXHRcdHZhbGlkYXRlZC5oZWFkZXJzID0gdGhpcy5jcmVhdGVIZWFkZXJzKHZhbGlkYXRlZC5oZWFkZXJzKTtcblxuXHRcdGlmICghdGhpcy5faXNVcHN0cmVhbVJlcXVlc3QocGFyYW1ldGVycy5tZXRob2QpICYmXG5cdFx0XHR2YWxpZGF0ZWQuZGF0YSAmJiB0eXBlb2YgKHZhbGlkYXRlZC5kYXRhKSA9PT0gJ29iamVjdCcpIHtcblxuXHRcdFx0Y29uc3QgZGF0YUtleXMgPSBPYmplY3Qua2V5cyh2YWxpZGF0ZWQuZGF0YSk7XG5cblx0XHRcdGlmIChkYXRhS2V5cy5sZW5ndGggPiAwICYmICF2YWxpZGF0ZWQudXJpLnF1ZXJ5KSB7XG5cdFx0XHRcdHZhbGlkYXRlZC51cmkucXVlcnkgPSBuZXcgUXVlcnkoJycpO1xuXHRcdFx0fVxuXG5cdFx0XHRkYXRhS2V5cy5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRcdHZhbGlkYXRlZC51cmkucXVlcnkudmFsdWVzW2tleV0gPSB2YWxpZGF0ZWQuZGF0YVtrZXldO1xuXHRcdFx0fSk7XG5cdFx0XHR2YWxpZGF0ZWQuZGF0YSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGRhdGFBbmRIZWFkZXJzID0gdGhpcy5fZ2V0RGF0YVRvU2VuZCh2YWxpZGF0ZWQuaGVhZGVycywgdmFsaWRhdGVkLmRhdGEpO1xuXHRcdFx0dmFsaWRhdGVkLmhlYWRlcnMgPSBkYXRhQW5kSGVhZGVycy5oZWFkZXJzO1xuXHRcdFx0dmFsaWRhdGVkLmRhdGEgPSBkYXRhQW5kSGVhZGVycy5kYXRhO1xuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGRhdGEgZm9yIHNlbmRpbmcgdmlhIHRoZSBIVFRQIHJlcXVlc3QgdXNpbmcgXCJDb250ZW50IFR5cGVcIiBIVFRQIGhlYWRlci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnMgVGhlIEhUVFAgaGVhZGVycy5cblx0ICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIHNlbmQuXG5cdCAqIEByZXR1cm5zIHt7aGVhZGVyczogT2JqZWN0LCBkYXRhOiBPYmplY3R8c3RyaW5nfX0gVGhlIGRhdGEgYW5kIGhlYWRlcnMgdG8gc2VuZC5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXREYXRhVG9TZW5kKGhlYWRlcnMsIGRhdGEpIHtcblx0XHRjb25zdCBmb3VuZCA9IHRoaXMuX2ZpbmRDb250ZW50VHlwZShoZWFkZXJzKTtcblx0XHRjb25zdCBjb250ZW50VHlwZUhlYWRlciA9IGZvdW5kLm5hbWU7XG5cdFx0Y29uc3QgY29udGVudFR5cGUgPSBmb3VuZC50eXBlO1xuXG5cdFx0aWYgKCFkYXRhIHx8IHR5cGVvZiAoZGF0YSkgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRkYXRhID0gZGF0YSA/IFN0cmluZyhkYXRhKSA6ICcnO1xuXHRcdFx0aWYgKCFjb250ZW50VHlwZSkge1xuXHRcdFx0XHRoZWFkZXJzW2NvbnRlbnRUeXBlSGVhZGVyXSA9IFVIUkJhc2UuUExBSU5fVEVYVF9FTlRJVFlfQ09OVEVOVF9UWVBFO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aGVhZGVycyxcblx0XHRcdFx0ZGF0YVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAoY29udGVudFR5cGUgPT09IFVIUkJhc2UuVFlQRVMuSlNPTikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aGVhZGVycyxcblx0XHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gb3RoZXJ3aXNlIG9iamVjdCB3aWxsIGJlIHNlbnQgd2l0aFxuXHRcdC8vIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFxuXHRcdGhlYWRlcnNbY29udGVudFR5cGVIZWFkZXJdID0gVUhSQmFzZS5VUkxfRU5DT0RFRF9FTlRJVFlfQ09OVEVOVF9UWVBFO1xuXG5cdFx0Y29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcblx0XHRxdWVyeS52YWx1ZXMgPSBkYXRhO1xuXHRcdHJldHVybiB7XG5cdFx0XHRoZWFkZXJzLFxuXHRcdFx0ZGF0YTogcXVlcnkudG9TdHJpbmcoKVxuXHRcdFx0XHQucmVwbGFjZSgvXFwrL2csICclMkInKVxuXHRcdFx0XHQucmVwbGFjZSgvJTIwL2csICcrJylcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgSFRUUCBoZWFkZXJzIGZvciBhIHJlcXVlc3QgdXNpbmcgZGVmYXVsdHMgYW5kIGN1cnJlbnQgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmFtZXRlckhlYWRlcnMgVGhlIEhUVFAgaGVhZGVycyBmb3IgVUhSLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRjcmVhdGVIZWFkZXJzKHBhcmFtZXRlckhlYWRlcnMpIHtcblx0XHRpZiAoIXBhcmFtZXRlckhlYWRlcnMgfHwgdHlwZW9mIChwYXJhbWV0ZXJIZWFkZXJzKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHBhcmFtZXRlckhlYWRlcnMgPSB7fTtcblx0XHR9XG5cblx0XHRjb25zdCBoZWFkZXJzID0ge307XG5cblx0XHRPYmplY3Qua2V5cyhVSFJCYXNlLkRFRkFVTFRfR0VORVJBTF9IRUFERVJTKVxuXHRcdFx0LmZvckVhY2goaGVhZGVyTmFtZSA9PiB7XG5cdFx0XHRcdGhlYWRlcnNbaGVhZGVyTmFtZV0gPSBVSFJCYXNlLkRFRkFVTFRfR0VORVJBTF9IRUFERVJTW2hlYWRlck5hbWVdO1xuXHRcdFx0fSk7XG5cblx0XHRPYmplY3Qua2V5cyhwYXJhbWV0ZXJIZWFkZXJzKVxuXHRcdFx0LmZvckVhY2goaGVhZGVyTmFtZSA9PiB7XG5cdFx0XHRcdGlmIChwYXJhbWV0ZXJIZWFkZXJzW2hlYWRlck5hbWVdID09PSBudWxsIHx8XG5cdFx0XHRcdFx0cGFyYW1ldGVySGVhZGVyc1toZWFkZXJOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0ZGVsZXRlIGhlYWRlcnNbaGVhZGVyTmFtZV07XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhlYWRlcnNbaGVhZGVyTmFtZV0gPSBwYXJhbWV0ZXJIZWFkZXJzW2hlYWRlck5hbWVdO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gaGVhZGVycztcblx0fVxuXG5cdC8qKlxuXHQgKiBEb2VzIHJlcXVlc3Qgd2l0aCBzcGVjaWZpZWQgcGFyYW1ldGVycyB1c2luZyBwcm90b2NvbCBpbXBsZW1lbnRhdGlvbi5cblx0ICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbWV0ZXJzIFRoZSByZXF1ZXN0IHBhcmFtZXRlcnMuXG5cdCAqIEBwYXJhbSB7c3RyaW5nP30gcGFyYW1ldGVycy5tZXRob2QgVGhlIEhUVFAgbWV0aG9kIGZvciB0aGUgcmVxdWVzdC5cblx0ICogQHBhcmFtIHtzdHJpbmc/fSBwYXJhbWV0ZXJzLnVybCBUaGUgVVJMIGZvciB0aGUgcmVxdWVzdC5cblx0ICogQHBhcmFtIHtVUkl9IHBhcmFtZXRlcnMudXJpIFRoZSBVUkkgb2JqZWN0LlxuXHQgKiBAcGFyYW0ge09iamVjdD99IHBhcmFtZXRlcnMuaGVhZGVycyBUaGUgSFRUUCBoZWFkZXJzIHRvIHNlbmQuXG5cdCAqIEBwYXJhbSB7KHN0cmluZ3xPYmplY3QpP30gcGFyYW1ldGVycy5kYXRhIFRoZSBkYXRhIHRvIHNlbmQuXG5cdCAqIEBwYXJhbSB7bnVtYmVyP30gcGFyYW1ldGVycy50aW1lb3V0IFRoZSByZXF1ZXN0IHRpbWVvdXQuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbj99IHBhcmFtZXRlcnMudW5zYWZlSFRUUFMgSWYgdHJ1ZSB0aGVuIHJlcXVlc3RzIHRvIHNlcnZlcnMgd2l0aFxuXHQgKiBpbnZhbGlkIEhUVFBTIGNlcnRpZmljYXRlcyBhcmUgYWxsb3dlZC5cblx0ICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gUHJvbWlzZSBmb3IgdGhlIHJlc3VsdCB3aXRoIGEgc3RhdHVzIG9iamVjdCBhbmQgY29udGVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAYWJzdHJhY3Rcblx0ICovXG5cdF9kb1JlcXVlc3QocGFyYW1ldGVycykgeyB9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIHJlc3BvbnNlIGRhdGEgYWNjb3JkaW5nIHRvIHRoZSBjb250ZW50IHR5cGUuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzIFRoZSBIVFRQIGhlYWRlcnMuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSByZXNwb25zZURhdGEgVGhlIGRhdGEgZnJvbSByZXNwb25zZS5cblx0ICogQHJldHVybnMge3N0cmluZ3xPYmplY3R9IFRoZSBjb252ZXJ0ZWQgZGF0YS5cblx0ICovXG5cdGNvbnZlcnRSZXNwb25zZShoZWFkZXJzLCByZXNwb25zZURhdGEpIHtcblx0XHRpZiAodHlwZW9mIChyZXNwb25zZURhdGEpICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmVzcG9uc2VEYXRhID0gJyc7XG5cdFx0fVxuXHRcdGNvbnN0IGZvdW5kID0gdGhpcy5fZmluZENvbnRlbnRUeXBlKGhlYWRlcnMpO1xuXHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gZm91bmQudHlwZSB8fCBVSFJCYXNlLlRZUEVTLlBMQUlOX1RFWFQ7XG5cblx0XHRzd2l0Y2ggKGNvbnRlbnRUeXBlKSB7XG5cdFx0XHRjYXNlIFVIUkJhc2UuVFlQRVMuSlNPTjpcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShyZXNwb25zZURhdGEpIHx8IHt9O1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0XHR9XG5cdFx0XHRjYXNlIFVIUkJhc2UuVFlQRVMuVVJMX0VOQ09ERUQ6XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcXVlcnkgPSBuZXcgUXVlcnkocmVzcG9uc2VEYXRhLnJlcGxhY2UoJysnLCAnJTIwJykpO1xuXHRcdFx0XHRcdHJldHVybiBxdWVyeS52YWx1ZXMgfHwge307XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHRcdH1cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiByZXNwb25zZURhdGE7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcXVlcnkgbmVlZHMgdXNpbmcgdXBzdHJlYW0uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgVGhlIEhUVFAgbWV0aG9kLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBjdXJyZW50IEhUVFAgbWV0aG9kIG5lZWRzIHVwc3RyZWFtIHVzYWdlLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRfaXNVcHN0cmVhbVJlcXVlc3QobWV0aG9kKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdG1ldGhvZCA9PT0gVUhSQmFzZS5NRVRIT0RTLlBPU1QgfHxcblx0XHRcdG1ldGhvZCA9PT0gVUhSQmFzZS5NRVRIT0RTLlBVVCB8fFxuXHRcdFx0bWV0aG9kID09PSBVSFJCYXNlLk1FVEhPRFMuUEFUQ0hcblx0XHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogTm9ybWFsaXplcyBwYXJhbWV0ZXJzIHBhc3NlZCB0byBhIHJlcXVlc3QgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgVGhlIEhUVFAgbWV0aG9kLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gcmVxdWVzdC5cblx0ICogQHBhcmFtIHtPYmplY3Q/fSBwYXJhbWV0ZXJzIFRoZSByZXF1ZXN0IHBhcmFtZXRlcnMuXG5cdCAqIEBwYXJhbSB7T2JqZWN0P30gcGFyYW1ldGVycy5oZWFkZXJzIFRoZSBIVFRQIGhlYWRlcnMgdG8gc2VuZC5cblx0ICogQHBhcmFtIHsoc3RyaW5nfE9iamVjdCk/fSBwYXJhbWV0ZXJzLmRhdGEgVGhlIGRhdGEgdG8gc2VuZC5cblx0ICogQHBhcmFtIHtudW1iZXI/fSBwYXJhbWV0ZXJzLnRpbWVvdXQgVGhlIHJlcXVlc3QgdGltZW91dC5cblx0ICogQHBhcmFtIHtib29sZWFuP30gcGFyYW1ldGVycy51bnNhZmVIVFRQUyBJZiB0cnVlIHRoZW4gcmVxdWVzdHMgdG8gc2VydmVycyB3aXRoXG5cdCAqIGludmFsaWQgSFRUUFMgY2VydGlmaWNhdGVzIGFyZSBhbGxvd2VkLlxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBub3JtYWxpemVkIHBhcmFtZXRlcnMgb2JqZWN0IHdpdGggVVJMIGFuZCBtZXRob2Rcblx0ICovXG5cdF9ub3JtYWxpemVPcHRpb25zKG1ldGhvZCwgdXJsLCBwYXJhbWV0ZXJzKSB7XG5cdFx0cGFyYW1ldGVycyA9IHBhcmFtZXRlcnMgfHwge307XG5cdFx0Y29uc3Qgbm9ybWFsUGFyYW1ldGVycyA9IE9iamVjdC5jcmVhdGUocGFyYW1ldGVycyk7XG5cdFx0bm9ybWFsUGFyYW1ldGVycy5tZXRob2QgPSBtZXRob2Q7XG5cdFx0bm9ybWFsUGFyYW1ldGVycy51cmwgPSB1cmw7XG5cdFx0cmV0dXJuIG5vcm1hbFBhcmFtZXRlcnM7XG5cdH1cblxuXHQvKipcblx0ICogRmluZHMgdGhlIGNvbnRlbnQgdHlwZSBoZWFkZXIgaW4gdGhlIGhlYWRlcnMgb2JqZWN0LlxuXHQgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVycyBUaGUgSFRUUCBoZWFkZXJzLlxuXHQgKiBAcmV0dXJucyB7e25hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nfX0gVGhlIG5hbWUgb2YgdGhlIGhlYWRlciBhbmQgdGhlIGNvbnRlbnQgdHlwZS5cblx0ICovXG5cdF9maW5kQ29udGVudFR5cGUoaGVhZGVycykge1xuXHRcdHZhciBjb250ZW50VHlwZVN0cmluZyA9ICcnO1xuXHRcdHZhciBjb250ZW50VHlwZUhlYWRlciA9ICdDb250ZW50LVR5cGUnO1xuXG5cdFx0T2JqZWN0LmtleXMoaGVhZGVycylcblx0XHRcdC5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRcdGlmIChrZXkudG9Mb3dlckNhc2UoKSAhPT0gJ2NvbnRlbnQtdHlwZScpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGVudFR5cGVIZWFkZXIgPSBrZXk7XG5cdFx0XHRcdGNvbnRlbnRUeXBlU3RyaW5nID0gaGVhZGVyc1trZXldO1xuXHRcdFx0fSk7XG5cblx0XHRjb25zdCB0eXBlQW5kUGFyYW1ldGVycyA9IGNvbnRlbnRUeXBlU3RyaW5nLnNwbGl0KCc7Jyk7XG5cdFx0Y29uc3QgY29udGVudFR5cGUgPSB0eXBlQW5kUGFyYW1ldGVyc1swXS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRuYW1lOiBjb250ZW50VHlwZUhlYWRlcixcblx0XHRcdHR5cGU6IGNvbnRlbnRUeXBlXG5cdFx0fTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVIUkJhc2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRVUkk6IHJlcXVpcmUoJy4vbGliL1VSSScpLFxuXHRBdXRob3JpdHk6IHJlcXVpcmUoJy4vbGliL0F1dGhvcml0eScpLFxuXHRVc2VySW5mbzogcmVxdWlyZSgnLi9saWIvVXNlckluZm8nKSxcblx0UXVlcnk6IHJlcXVpcmUoJy4vbGliL1F1ZXJ5Jylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVzZXJJbmZvID0gcmVxdWlyZSgnLi9Vc2VySW5mbycpO1xuY29uc3QgcGVyY2VudEVuY29kaW5nSGVscGVyID0gcmVxdWlyZSgnLi9wZXJjZW50RW5jb2RpbmdIZWxwZXInKTtcblxuY29uc3QgUE9SVF9SRUdFWFAgPSAvXlxcZCskLztcbmNvbnN0IEVSUk9SX1BPUlQgPSBgVVJJIGF1dGhvcml0eSBwb3J0IG11c3Qgc2F0aXNmeSBleHByZXNzaW9uICR7UE9SVF9SRUdFWFAudG9TdHJpbmcoKX1gO1xuXG5jbGFzcyBBdXRob3JpdHkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IFVSSSB1c2VyIGluZm8gY29tcG9uZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZz99IEV4aXN0aW5nIHN0cmluZy5cblx0ICogQHJldHVybiB7VXNlckluZm99IFRoZSB1c2VyIGluZm8gY29tcG9uZW50LlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZVVzZXJJbmZvKHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgVXNlckluZm8oc3RyaW5nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IFVSSSB1c2VyIGluZm8gY29tcG9uZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZz99IEV4aXN0aW5nIHN0cmluZy5cblx0ICogQHJldHVybiB7VXNlckluZm99IFRoZSB1c2VyIGluZm8gY29tcG9uZW50LlxuXHQgKi9cblx0Y3JlYXRlVXNlckluZm8oc3RyaW5nKSB7XG5cdFx0cmV0dXJuIEF1dGhvcml0eS5jcmVhdGVVc2VySW5mbyhzdHJpbmcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIFVSSSBhdXRob3JpdHkgY29tcG9uZW50IHBhcnNlci5cblx0ICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjJcblx0ICogQHBhcmFtIHtzdHJpbmc/fSBhdXRob3JpdHlTdHJpbmcgVVJJIGF1dGhvcml0eSBjb21wb25lbnQgc3RyaW5nLlxuXHQgKi9cblx0Y29uc3RydWN0b3IoYXV0aG9yaXR5U3RyaW5nKSB7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHVzZXIgaW5mb3JtYXRpb24uXG5cdFx0ICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjIuMVxuXHRcdCAqIEB0eXBlIHtVc2VySW5mb31cblx0XHQgKi9cblx0XHR0aGlzLnVzZXJJbmZvID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgcG9ydC5cblx0XHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMi4zXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnBvcnQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBob3N0LlxuXHRcdCAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4yLjJcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuaG9zdCA9IG51bGw7XG5cblx0XHRpZiAodHlwZW9mIChhdXRob3JpdHlTdHJpbmcpID09PSAnc3RyaW5nJyAmJiBhdXRob3JpdHlTdHJpbmcubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgZmlyc3RBdEluZGV4ID0gYXV0aG9yaXR5U3RyaW5nLmluZGV4T2YoJ0AnKTtcblx0XHRcdGlmIChmaXJzdEF0SW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdGNvbnN0IHVzZXJJbmZvU3RyaW5nID0gYXV0aG9yaXR5U3RyaW5nLnN1YnN0cmluZygwLCBmaXJzdEF0SW5kZXgpO1xuXHRcdFx0XHR0aGlzLnVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHVzZXJJbmZvU3RyaW5nKTtcblx0XHRcdFx0YXV0aG9yaXR5U3RyaW5nID0gYXV0aG9yaXR5U3RyaW5nLnN1YnN0cmluZyhmaXJzdEF0SW5kZXggKyAxKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbGFzdENvbG9uSW5kZXggPSBhdXRob3JpdHlTdHJpbmcubGFzdEluZGV4T2YoJzonKTtcblx0XHRcdGlmIChsYXN0Q29sb25JbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0Y29uc3QgcG9ydFN0cmluZyA9IGF1dGhvcml0eVN0cmluZy5zdWJzdHJpbmcobGFzdENvbG9uSW5kZXggKyAxKTtcblx0XHRcdFx0aWYgKGxhc3RDb2xvbkluZGV4ID09PSBhdXRob3JpdHlTdHJpbmcubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdHRoaXMucG9ydCA9ICcnO1xuXHRcdFx0XHRcdGF1dGhvcml0eVN0cmluZyA9IGF1dGhvcml0eVN0cmluZy5zdWJzdHJpbmcoMCwgbGFzdENvbG9uSW5kZXgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKFBPUlRfUkVHRVhQLnRlc3QocG9ydFN0cmluZykpIHtcblx0XHRcdFx0XHR0aGlzLnBvcnQgPSBwb3J0U3RyaW5nO1xuXHRcdFx0XHRcdGF1dGhvcml0eVN0cmluZyA9IGF1dGhvcml0eVN0cmluZy5zdWJzdHJpbmcoMCwgbGFzdENvbG9uSW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuaG9zdCA9IHBlcmNlbnRFbmNvZGluZ0hlbHBlci5kZWNvZGUoYXV0aG9yaXR5U3RyaW5nKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xvbmVzIGN1cnJlbnQgYXV0aG9yaXR5LlxuXHQgKiBAcmV0dXJucyB7QXV0aG9yaXR5fSBOZXcgY2xvbmUgb2YgY3VycmVudCBvYmplY3QuXG5cdCAqL1xuXHRjbG9uZSgpIHtcblx0XHRjb25zdCBhdXRob3JpdHkgPSBuZXcgQXV0aG9yaXR5KCk7XG5cdFx0aWYgKHRoaXMudXNlckluZm8pIHtcblx0XHRcdGF1dGhvcml0eS51c2VySW5mbyA9IHRoaXMudXNlckluZm8uY2xvbmUoKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiAodGhpcy5ob3N0KSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGF1dGhvcml0eS5ob3N0ID0gdGhpcy5ob3N0O1xuXHRcdH1cblx0XHRpZiAodHlwZW9mICh0aGlzLnBvcnQpID09PSAnc3RyaW5nJykge1xuXHRcdFx0YXV0aG9yaXR5LnBvcnQgPSB0aGlzLnBvcnQ7XG5cdFx0fVxuXHRcdHJldHVybiBhdXRob3JpdHk7XG5cdH1cblxuXHQvKipcblx0ICogUmVjb21iaW5lIGFsbCBhdXRob3JpdHkgY29tcG9uZW50cyBpbnRvIGF1dGhvcml0eSBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IEF1dGhvcml0eSBjb21wb25lbnQgc3RyaW5nLlxuXHQgKi9cblx0dG9TdHJpbmcoKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGlmICh0aGlzLnVzZXJJbmZvIGluc3RhbmNlb2YgVXNlckluZm8pIHtcblx0XHRcdHJlc3VsdCArPSBgJHt0aGlzLnVzZXJJbmZvLnRvU3RyaW5nKCl9QGA7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmhvc3QgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmhvc3QgIT09IG51bGwpIHtcblx0XHRcdGNvbnN0IGhvc3QgPSBTdHJpbmcodGhpcy5ob3N0KTtcblx0XHRcdHJlc3VsdCArPSBwZXJjZW50RW5jb2RpbmdIZWxwZXIuZW5jb2RlSG9zdChob3N0KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMucG9ydCAhPT0gdW5kZWZpbmVkICYmIHRoaXMucG9ydCAhPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgcG9ydCA9IFN0cmluZyh0aGlzLnBvcnQpO1xuXHRcdFx0aWYgKHBvcnQubGVuZ3RoID4gMCAmJiAhUE9SVF9SRUdFWFAudGVzdChwb3J0KSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoRVJST1JfUE9SVCk7XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQgKz0gYDoke3BvcnR9YDtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGhvcml0eTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGVyY2VudEVuY29kaW5nSGVscGVyID0gcmVxdWlyZSgnLi9wZXJjZW50RW5jb2RpbmdIZWxwZXInKTtcblxuY2xhc3MgUXVlcnkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBVUkkgcXVlcnkgY29tcG9uZW50IHBhcnNlci5cblx0ICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjRcblx0ICogQHBhcmFtIHtzdHJpbmc/fSBxdWVyeVN0cmluZyBVUkkgcXVlcnkgY29tcG9uZW50IHN0cmluZy5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHF1ZXJ5U3RyaW5nKSB7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHNldCBvZiB2YWx1ZXMgb2YgcXVlcnkuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLnZhbHVlcyA9IG51bGw7XG5cblx0XHRpZiAodHlwZW9mIChxdWVyeVN0cmluZykgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLnZhbHVlcyA9IHt9O1xuXG5cdFx0XHRxdWVyeVN0cmluZ1xuXHRcdFx0XHQuc3BsaXQoJyYnKVxuXHRcdFx0XHQuZm9yRWFjaChwYWlyID0+IHtcblx0XHRcdFx0XHRjb25zdCBwYXJ0cyA9IHBhaXIuc3BsaXQoJz0nKTtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBwZXJjZW50RW5jb2RpbmdIZWxwZXIuZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRpZiAoIWtleSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoa2V5IGluIHRoaXMudmFsdWVzICYmXG5cdFx0XHRcdFx0XHQhKHRoaXMudmFsdWVzW2tleV0gaW5zdGFuY2VvZiBBcnJheSkpIHtcblx0XHRcdFx0XHRcdHRoaXMudmFsdWVzW2tleV0gPSBbdGhpcy52YWx1ZXNba2V5XV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSB0eXBlb2YgKHBhcnRzWzFdKSA9PT0gJ3N0cmluZycgP1xuXHRcdFx0XHRcdFx0cGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZShwYXJ0c1sxXSkgOiBudWxsO1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMudmFsdWVzW2tleV0gaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0XHRcdFx0dGhpcy52YWx1ZXNba2V5XS5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy52YWx1ZXNba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgdGhpcyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb25lcyBjdXJyZW50IHF1ZXJ5IHRvIGEgbmV3IG9iamVjdC5cblx0ICogQHJldHVybnMge1F1ZXJ5fSBOZXcgY2xvbmUgb2YgY3VycmVudCBvYmplY3QuXG5cdCAqL1xuXHRjbG9uZSgpIHtcblx0XHRjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuXHRcdGlmICh0aGlzLnZhbHVlcykge1xuXHRcdFx0cXVlcnkudmFsdWVzID0ge307XG5cdFx0XHRPYmplY3Qua2V5cyh0aGlzLnZhbHVlcylcblx0XHRcdFx0LmZvckVhY2goa2V5ID0+IHtcblx0XHRcdFx0XHRxdWVyeS52YWx1ZXNba2V5XSA9IHRoaXMudmFsdWVzW2tleV07XG5cdFx0XHRcdH0sIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gcXVlcnk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgY3VycmVudCBzZXQgb2YgcXVlcnkgdmFsdWVzIHRvIHN0cmluZy5cblx0ICogQHJldHVybnMge3N0cmluZ30gUXVlcnkgY29tcG9uZW50IHN0cmluZy5cblx0ICovXG5cdHRvU3RyaW5nKCkge1xuXHRcdGlmICghdGhpcy52YWx1ZXMpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRsZXQgcXVlcnlTdHJpbmcgPSAnJztcblx0XHRPYmplY3Qua2V5cyh0aGlzLnZhbHVlcylcblx0XHRcdC5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzW2tleV0gaW5zdGFuY2VvZiBBcnJheSA/XG5cdFx0XHRcdFx0dGhpcy52YWx1ZXNba2V5XSA6IFt0aGlzLnZhbHVlc1trZXldXTtcblxuXHRcdFx0XHR2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG5cdFx0XHRcdFx0cXVlcnlTdHJpbmcgKz0gYCYke3BlcmNlbnRFbmNvZGluZ0hlbHBlci5lbmNvZGVRdWVyeVN1YkNvbXBvbmVudChrZXkpfWA7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuXHRcdFx0XHRcdHF1ZXJ5U3RyaW5nICs9IGA9JHtwZXJjZW50RW5jb2RpbmdIZWxwZXIuZW5jb2RlUXVlcnlTdWJDb21wb25lbnQodmFsdWUpfWA7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSwgdGhpcyk7XG5cblx0XHRyZXR1cm4gcXVlcnlTdHJpbmcucmVwbGFjZSgvXiYvLCAnJyk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGVyY2VudEVuY29kaW5nSGVscGVyID0gcmVxdWlyZSgnLi9wZXJjZW50RW5jb2RpbmdIZWxwZXInKTtcblxuY29uc3QgQXV0aG9yaXR5ID0gcmVxdWlyZSgnLi9BdXRob3JpdHknKTtcbmNvbnN0IFF1ZXJ5ID0gcmVxdWlyZSgnLi9RdWVyeScpO1xuXG4vLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNhcHBlbmRpeC1CXG5jb25zdCBVUklfUEFSU0VfUkVHRVhQID0gbmV3IFJlZ0V4cChcblx0J14oKFteOi8/I10rKTopPygvLyhbXi8/I10qKSk/KFtePyNdKikoXFxcXD8oW14jXSopKT8oIyguKikpPydcblx0KTtcbi8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4xXG5jb25zdCBTQ0hFTUVfUkVHRVhQID0gL15bYS16XStbYS16XFxkXFwrXFwuLV0qJC9pO1xuY29uc3QgRVJST1JfU0NIRU1FID0gYFVSSSBzY2hlbWUgbXVzdCBzYXRpc2Z5IGV4cHJlc3Npb24gJHtTQ0hFTUVfUkVHRVhQLnRvU3RyaW5nKCl9YDtcblxuY2xhc3MgVVJJIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBVUkkgYXV0aG9yaXR5IGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHtzdHJpbmc/fSBFeGlzdGluZyBzdHJpbmcuXG5cdCAqIEByZXR1cm4ge0F1dGhvcml0eX0gVGhlIGF1dGhvcml0eSBjb21wb25lbnQuXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlQXV0aG9yaXR5KHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgQXV0aG9yaXR5KHN0cmluZyk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBVUkkgYXV0aG9yaXR5IGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHtzdHJpbmc/fSBFeGlzdGluZyBzdHJpbmcuXG5cdCAqIEByZXR1cm4ge0F1dGhvcml0eX0gVGhlIGF1dGhvcml0eSBjb21wb25lbnQuXG5cdCAqL1xuXHRjcmVhdGVBdXRob3JpdHkoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIFVSSS5jcmVhdGVBdXRob3JpdHkoc3RyaW5nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IFVSSSB1c2VyIGluZm8gY29tcG9uZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZz99IEV4aXN0aW5nIHN0cmluZy5cblx0ICogQHJldHVybiB7VXNlckluZm99IFRoZSB1c2VyIGluZm8gY29tcG9uZW50LlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZVVzZXJJbmZvKHN0cmluZykge1xuXHRcdHJldHVybiBBdXRob3JpdHkuY3JlYXRlVXNlckluZm8oc3RyaW5nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IFVSSSB1c2VyIGluZm8gY29tcG9uZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZz99IEV4aXN0aW5nIHN0cmluZy5cblx0ICogQHJldHVybiB7VXNlckluZm99IFRoZSB1c2VyIGluZm8gY29tcG9uZW50LlxuXHQgKi9cblx0Y3JlYXRlVXNlckluZm8oc3RyaW5nKSB7XG5cdFx0cmV0dXJuIFVSSS5jcmVhdGVVc2VySW5mbyhzdHJpbmcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgVVJJIHF1ZXJ5IGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHtzdHJpbmc/fSBFeGlzdGluZyBzdHJpbmcuXG5cdCAqIEByZXR1cm4ge1F1ZXJ5fSBUaGUgcXVlcnkgY29tcG9uZW50LlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZVF1ZXJ5KHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgUXVlcnkoc3RyaW5nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IFVSSSBxdWVyeSBjb21wb25lbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nP30gRXhpc3Rpbmcgc3RyaW5nLlxuXHQgKiBAcmV0dXJuIHtRdWVyeX0gVGhlIHF1ZXJ5IGNvbXBvbmVudC5cblx0ICovXG5cdGNyZWF0ZVF1ZXJ5KHN0cmluZykge1xuXHRcdHJldHVybiBVUkkuY3JlYXRlUXVlcnkoc3RyaW5nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIG5ldyBpbnN0YW5jZSBvZiBVUkkgYWNjb3JkaW5nIHRvIFJGQyAzOTg2LlxuXHQgKiBAcGFyYW0ge3N0cmluZz99IHVyaVN0cmluZyBVUkkgc3RyaW5nIHRvIHBhcnNlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih1cmlTdHJpbmcpIHtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgVVJJIHNjaGVtZS5cblx0XHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5zY2hlbWUgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBVUkkgYXV0aG9yaXR5LlxuXHRcdCAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4yXG5cdFx0ICogQHR5cGUge0F1dGhvcml0eX1cblx0XHQgKi9cblx0XHR0aGlzLmF1dGhvcml0eSA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IFVSSSBwYXRoLlxuXHRcdCAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4zXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnBhdGggPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBVUkkgcXVlcnkuXG5cdFx0ICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjRcblx0XHQgKiBAdHlwZSB7UXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5xdWVyeSA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IFVSSSBmcmFnbWVudC5cblx0XHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuNVxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5mcmFnbWVudCA9IG51bGw7XG5cblx0XHRpZiAodHlwZW9mICh1cmlTdHJpbmcpICE9PSAnc3RyaW5nJykge1xuXHRcdFx0dXJpU3RyaW5nID0gJyc7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjYXBwZW5kaXgtQlxuXHRcdGNvbnN0IG1hdGNoZXMgPSB1cmlTdHJpbmcubWF0Y2goVVJJX1BBUlNFX1JFR0VYUCk7XG5cblx0XHRpZiAobWF0Y2hlcykge1xuXHRcdFx0aWYgKHR5cGVvZiAobWF0Y2hlc1syXSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHRoaXMuc2NoZW1lID0gcGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZShtYXRjaGVzWzJdKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgKG1hdGNoZXNbNF0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aGlzLmF1dGhvcml0eSA9IFVSSS5jcmVhdGVBdXRob3JpdHkobWF0Y2hlc1s0XSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIChtYXRjaGVzWzVdKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGhpcy5wYXRoID0gcGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZVBhdGgobWF0Y2hlc1s1XSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIChtYXRjaGVzWzddKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGhpcy5xdWVyeSA9IFVSSS5jcmVhdGVRdWVyeShtYXRjaGVzWzddKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgKG1hdGNoZXNbOV0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aGlzLmZyYWdtZW50ID0gcGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZShtYXRjaGVzWzldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBVUkkgcmVmZXJlbmNlIHRoYXQgbWlnaHQgYmUgcmVsYXRpdmUgdG8gYSBnaXZlbiBiYXNlIFVSSVxuXHQgKiBpbnRvIHRoZSByZWZlcmVuY2UncyB0YXJnZXQgVVJJLlxuXHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTUuMlxuXHQgKiBAcGFyYW0ge1VSSX0gYmFzZVVyaSBCYXNlIFVSSS5cblx0ICogQHJldHVybnMge1VSSX0gUmVzb2x2ZWQgVVJJLlxuXHQgKi9cblx0cmVzb2x2ZVJlbGF0aXZlKGJhc2VVcmkpIHtcblx0XHRpZiAoIWJhc2VVcmkuc2NoZW1lKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1NjaGVtZSBjb21wb25lbnQgaXMgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBpbiBhIGJhc2UgVVJJJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRyYW5zZm9ybVJlZmVyZW5jZShiYXNlVXJpLCB0aGlzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9uZXMgY3VycmVudCBVUkkgdG8gYSBuZXcgb2JqZWN0LlxuXHQgKiBAcmV0dXJucyB7VVJJfSBOZXcgY2xvbmUgb2YgY3VycmVudCBvYmplY3QuXG5cdCAqL1xuXHRjbG9uZSgpIHtcblx0XHRjb25zdCB1cmkgPSBuZXcgVVJJKCk7XG5cblx0XHRpZiAodHlwZW9mICh0aGlzLnNjaGVtZSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR1cmkuc2NoZW1lID0gdGhpcy5zY2hlbWU7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuYXV0aG9yaXR5KSB7XG5cdFx0XHR1cmkuYXV0aG9yaXR5ID0gdGhpcy5hdXRob3JpdHkuY2xvbmUoKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mICh0aGlzLnBhdGgpID09PSAnc3RyaW5nJykge1xuXHRcdFx0dXJpLnBhdGggPSB0aGlzLnBhdGg7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucXVlcnkpIHtcblx0XHRcdHVyaS5xdWVyeSA9IHRoaXMucXVlcnkuY2xvbmUoKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mICh0aGlzLmZyYWdtZW50KSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHVyaS5mcmFnbWVudCA9IHRoaXMuZnJhZ21lbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVyaTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWNvbXBvc2VzIFVSSSBjb21wb25lbnRzIHRvIFVSSSBzdHJpbmcsXG5cdCAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tNS4zXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFVSSSBzdHJpbmcuXG5cdCAqL1xuXHR0b1N0cmluZygpIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cblx0XHRpZiAodGhpcy5zY2hlbWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNjaGVtZSAhPT0gbnVsbCkge1xuXHRcdFx0Y29uc3Qgc2NoZW1lID0gU3RyaW5nKHRoaXMuc2NoZW1lKTtcblx0XHRcdGlmICghU0NIRU1FX1JFR0VYUC50ZXN0KHNjaGVtZSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKEVSUk9SX1NDSEVNRSk7XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQgKz0gYCR7c2NoZW1lfTpgO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmF1dGhvcml0eSBpbnN0YW5jZW9mIEF1dGhvcml0eSkge1xuXHRcdFx0cmVzdWx0ICs9IGAvLyR7dGhpcy5hdXRob3JpdHkudG9TdHJpbmcoKX1gO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhdGggPSB0aGlzLnBhdGggPT09IHVuZGVmaW5lZCB8fCB0aGlzLnBhdGggPT09IG51bGwgP1xuXHRcdFx0JycgOiBTdHJpbmcodGhpcy5wYXRoKTtcblx0XHRyZXN1bHQgKz0gcGVyY2VudEVuY29kaW5nSGVscGVyLmVuY29kZVBhdGgocGF0aCk7XG5cblx0XHRpZiAodGhpcy5xdWVyeSBpbnN0YW5jZW9mIFF1ZXJ5KSB7XG5cdFx0XHRyZXN1bHQgKz0gYD8ke3RoaXMucXVlcnkudG9TdHJpbmcoKX1gO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmZyYWdtZW50ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5mcmFnbWVudCAhPT0gbnVsbCkge1xuXHRcdFx0Y29uc3QgZnJhZ21lbnQgPSBTdHJpbmcodGhpcy5mcmFnbWVudCk7XG5cdFx0XHRyZXN1bHQgKz0gYCMke3BlcmNlbnRFbmNvZGluZ0hlbHBlci5lbmNvZGVGcmFnbWVudChmcmFnbWVudCl9YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyByZWZlcmVuY2UgZm9yIHJlbGF0aXZlIHJlc29sdXRpb24uXG4gKiBXaG9sZSBhbGdvcml0aG0gaGFzIGJlZW4gdGFrZW4gZnJvbVxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi01LjIuMlxuICogQHBhcmFtIHtVUkl9IGJhc2VVcmkgQmFzZSBVUkkgZm9yIHJlc29sdXRpb24uXG4gKiBAcGFyYW0ge1VSSX0gcmVmZXJlbmNlVXJpIFJlZmVyZW5jZSBVUkkgdG8gcmVzb2x2ZS5cbiAqIEByZXR1cm5zIHtVUkl9IENvbXBvbmVudHMgb2YgdGFyZ2V0IFVSSS5cbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtUmVmZXJlbmNlKGJhc2VVcmksIHJlZmVyZW5jZVVyaSkge1xuXG5cdC8qIGVzbGludCBjb21wbGV4aXR5OiBbMiwgMTNdKi9cblx0Y29uc3QgdGFyZ2V0VXJpID0gbmV3IFVSSSgnJyk7XG5cblx0aWYgKHJlZmVyZW5jZVVyaS5zY2hlbWUpIHtcblx0XHR0YXJnZXRVcmkuc2NoZW1lID0gcmVmZXJlbmNlVXJpLnNjaGVtZTtcblx0XHR0YXJnZXRVcmkuYXV0aG9yaXR5ID0gcmVmZXJlbmNlVXJpLmF1dGhvcml0eSA/XG5cdFx0XHRyZWZlcmVuY2VVcmkuYXV0aG9yaXR5LmNsb25lKCkgOiByZWZlcmVuY2VVcmkuYXV0aG9yaXR5O1xuXHRcdHRhcmdldFVyaS5wYXRoID0gcmVtb3ZlRG90U2VnbWVudHMocmVmZXJlbmNlVXJpLnBhdGgpO1xuXHRcdHRhcmdldFVyaS5xdWVyeSA9IHJlZmVyZW5jZVVyaS5xdWVyeSA/XG5cdFx0XHRyZWZlcmVuY2VVcmkucXVlcnkuY2xvbmUoKSA6IHJlZmVyZW5jZVVyaS5xdWVyeTtcblx0fSBlbHNlIHtcblx0XHRpZiAocmVmZXJlbmNlVXJpLmF1dGhvcml0eSkge1xuXHRcdFx0dGFyZ2V0VXJpLmF1dGhvcml0eSA9IHJlZmVyZW5jZVVyaS5hdXRob3JpdHkgP1xuXHRcdFx0XHRyZWZlcmVuY2VVcmkuYXV0aG9yaXR5LmNsb25lKCkgOiByZWZlcmVuY2VVcmkuYXV0aG9yaXR5O1xuXHRcdFx0dGFyZ2V0VXJpLnBhdGggPSByZW1vdmVEb3RTZWdtZW50cyhyZWZlcmVuY2VVcmkucGF0aCk7XG5cdFx0XHR0YXJnZXRVcmkucXVlcnkgPSByZWZlcmVuY2VVcmkucXVlcnkgP1xuXHRcdFx0XHRyZWZlcmVuY2VVcmkucXVlcnkuY2xvbmUoKSA6IHJlZmVyZW5jZVVyaS5xdWVyeTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHJlZmVyZW5jZVVyaS5wYXRoID09PSAnJykge1xuXHRcdFx0XHR0YXJnZXRVcmkucGF0aCA9IGJhc2VVcmkucGF0aDtcblx0XHRcdFx0aWYgKHJlZmVyZW5jZVVyaS5xdWVyeSkge1xuXHRcdFx0XHRcdHRhcmdldFVyaS5xdWVyeSA9IHJlZmVyZW5jZVVyaS5xdWVyeS5jbG9uZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldFVyaS5xdWVyeSA9IGJhc2VVcmkucXVlcnkgP1xuXHRcdFx0XHRcdFx0YmFzZVVyaS5xdWVyeS5jbG9uZSgpIDogYmFzZVVyaS5xdWVyeTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHJlZmVyZW5jZVVyaS5wYXRoWzBdID09PSAnLycpIHtcblx0XHRcdFx0XHR0YXJnZXRVcmkucGF0aCA9IHJlbW92ZURvdFNlZ21lbnRzKHJlZmVyZW5jZVVyaS5wYXRoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXRVcmkucGF0aCA9IG1lcmdlKGJhc2VVcmksIHJlZmVyZW5jZVVyaSk7XG5cdFx0XHRcdFx0dGFyZ2V0VXJpLnBhdGggPSByZW1vdmVEb3RTZWdtZW50cyh0YXJnZXRVcmkucGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFyZ2V0VXJpLnF1ZXJ5ID0gcmVmZXJlbmNlVXJpLnF1ZXJ5ID9cblx0XHRcdFx0XHRyZWZlcmVuY2VVcmkucXVlcnkuY2xvbmUoKSA6IHJlZmVyZW5jZVVyaS5xdWVyeTtcblx0XHRcdH1cblx0XHRcdHRhcmdldFVyaS5hdXRob3JpdHkgPSBiYXNlVXJpLmF1dGhvcml0eSA/XG5cdFx0XHRcdGJhc2VVcmkuYXV0aG9yaXR5LmNsb25lKCkgOiBiYXNlVXJpLmF1dGhvcml0eTtcblx0XHR9XG5cdFx0dGFyZ2V0VXJpLnNjaGVtZSA9IGJhc2VVcmkuc2NoZW1lO1xuXHR9XG5cblx0dGFyZ2V0VXJpLmZyYWdtZW50ID0gcmVmZXJlbmNlVXJpLmZyYWdtZW50O1xuXHRyZXR1cm4gdGFyZ2V0VXJpO1xufVxuXG4vKipcbiAqIE1lcmdlcyBhIHJlbGF0aXZlLXBhdGggcmVmZXJlbmNlIHdpdGggdGhlIHBhdGggb2YgdGhlIGJhc2UgVVJJLlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi01LjIuM1xuICogQHBhcmFtIHtVUkl9IGJhc2VVcmkgQ29tcG9uZW50cyBvZiBiYXNlIFVSSS5cbiAqIEBwYXJhbSB7VVJJfSByZWZlcmVuY2VVcmkgQ29tcG9uZW50cyBvZiByZWZlcmVuY2UgVVJJLlxuICogQHJldHVybnMge3N0cmluZ30gTWVyZ2VkIHBhdGguXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKGJhc2VVcmksIHJlZmVyZW5jZVVyaSkge1xuXHRpZiAoYmFzZVVyaS5hdXRob3JpdHkgJiYgYmFzZVVyaS5wYXRoID09PSAnJykge1xuXHRcdHJldHVybiBgLyR7cmVmZXJlbmNlVXJpLnBhdGh9YDtcblx0fVxuXG5cdGNvbnN0IHNlZ21lbnRzU3RyaW5nID0gYmFzZVVyaS5wYXRoLmluZGV4T2YoJy8nKSAhPT0gLTEgP1xuXHRcdGJhc2VVcmkucGF0aC5yZXBsYWNlKC9cXC9bXlxcL10rJC8sICcvJykgOiAnJztcblxuXHRyZXR1cm4gc2VnbWVudHNTdHJpbmcgKyByZWZlcmVuY2VVcmkucGF0aDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGRvdHMgc2VnbWVudHMgZnJvbSBVUkkgcGF0aC5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tNS4yLjRcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmlQYXRoIFVSSSBwYXRoIHdpdGggcG9zc2libGUgZG90IHNlZ21lbnRzLlxuICogQHJldHVybnMge3N0cmluZ30gVVJJIHBhdGggd2l0aG91dCBkb3Qgc2VnbWVudHMuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZURvdFNlZ21lbnRzKHVyaVBhdGgpIHtcblx0aWYgKCF1cmlQYXRoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0bGV0IGlucHV0QnVmZmVyID0gdXJpUGF0aDtcblx0bGV0IG5ld0J1ZmZlciA9ICcnO1xuXHRsZXQgbmV4dFNlZ21lbnQgPSAnJztcblx0bGV0IG91dHB1dEJ1ZmZlciA9ICcnO1xuXG5cdHdoaWxlIChpbnB1dEJ1ZmZlci5sZW5ndGggIT09IDApIHtcblxuXHRcdC8vIElmIHRoZSBpbnB1dCBidWZmZXIgYmVnaW5zIHdpdGggYSBwcmVmaXggb2YgXCIuLi9cIiBvciBcIi4vXCIsXG5cdFx0Ly8gdGhlbiByZW1vdmUgdGhhdCBwcmVmaXggZnJvbSB0aGUgaW5wdXQgYnVmZmVyXG5cdFx0bmV3QnVmZmVyID0gaW5wdXRCdWZmZXIucmVwbGFjZSgvXlxcLj9cXC5cXC8vLCAnJyk7XG5cdFx0aWYgKG5ld0J1ZmZlciAhPT0gaW5wdXRCdWZmZXIpIHtcblx0XHRcdGlucHV0QnVmZmVyID0gbmV3QnVmZmVyO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgdGhlIGlucHV0IGJ1ZmZlciBiZWdpbnMgd2l0aCBhIHByZWZpeCBvZiBcIi8uL1wiIG9yIFwiLy5cIixcblx0XHQvLyB3aGVyZSBcIi5cIiBpcyBhIGNvbXBsZXRlIHBhdGggc2VnbWVudCwgdGhlbiByZXBsYWNlIHRoYXRcblx0XHQvLyBwcmVmaXggd2l0aCBcIi9cIiBpbiB0aGUgaW5wdXQgYnVmZmVyXG5cdFx0bmV3QnVmZmVyID0gaW5wdXRCdWZmZXIucmVwbGFjZSgvXigoXFwvXFwuXFwvKXwoXFwvXFwuJCkpLywgJy8nKTtcblx0XHRpZiAobmV3QnVmZmVyICE9PSBpbnB1dEJ1ZmZlcikge1xuXHRcdFx0aW5wdXRCdWZmZXIgPSBuZXdCdWZmZXI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpZiB0aGUgaW5wdXQgYnVmZmVyIGJlZ2lucyB3aXRoIGEgcHJlZml4IG9mIFwiLy4uL1wiIG9yIFwiLy4uXCIsXG5cdFx0Ly8gd2hlcmUgXCIuLlwiIGlzIGEgY29tcGxldGUgcGF0aCBzZWdtZW50LCB0aGVuIHJlcGxhY2UgdGhhdFxuXHRcdC8vIHByZWZpeCB3aXRoIFwiL1wiIGluIHRoZSBpbnB1dCBidWZmZXIgYW5kIHJlbW92ZSB0aGUgbGFzdFxuXHRcdC8vIHNlZ21lbnQgYW5kIGl0cyBwcmVjZWRpbmcgXCIvXCIgKGlmIGFueSkgZnJvbSB0aGUgb3V0cHV0XG5cdFx0Ly8gYnVmZmVyXG5cdFx0bmV3QnVmZmVyID0gaW5wdXRCdWZmZXIucmVwbGFjZSgvXigoXFwvXFwuXFwuXFwvKXwoXFwvXFwuXFwuJCkpLywgJy8nKTtcblx0XHRpZiAobmV3QnVmZmVyICE9PSBpbnB1dEJ1ZmZlcikge1xuXHRcdFx0b3V0cHV0QnVmZmVyID0gb3V0cHV0QnVmZmVyLnJlcGxhY2UoL1xcL1teXFwvXSskLywgJycpO1xuXHRcdFx0aW5wdXRCdWZmZXIgPSBuZXdCdWZmZXI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpZiB0aGUgaW5wdXQgYnVmZmVyIGNvbnNpc3RzIG9ubHkgb2YgXCIuXCIgb3IgXCIuLlwiLCB0aGVuIHJlbW92ZVxuXHRcdC8vIHRoYXQgZnJvbSB0aGUgaW5wdXQgYnVmZmVyXG5cdFx0aWYgKGlucHV0QnVmZmVyID09PSAnLicgfHwgaW5wdXRCdWZmZXIgPT09ICcuLicpIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdC8vIG1vdmUgdGhlIGZpcnN0IHBhdGggc2VnbWVudCBpbiB0aGUgaW5wdXQgYnVmZmVyIHRvIHRoZSBlbmQgb2Zcblx0XHQvLyB0aGUgb3V0cHV0IGJ1ZmZlciwgaW5jbHVkaW5nIHRoZSBpbml0aWFsIFwiL1wiIGNoYXJhY3RlciAoaWZcblx0XHQvLyBhbnkpIGFuZCBhbnkgc3Vic2VxdWVudCBjaGFyYWN0ZXJzIHVwIHRvLCBidXQgbm90IGluY2x1ZGluZyxcblx0XHQvLyB0aGUgbmV4dCBcIi9cIiBjaGFyYWN0ZXIgb3IgdGhlIGVuZCBvZiB0aGUgaW5wdXQgYnVmZmVyXG5cdFx0bmV4dFNlZ21lbnQgPSAvXlxcLz9bXlxcL10qKFxcL3wkKS8uZXhlYyhpbnB1dEJ1ZmZlcilbMF07XG5cdFx0bmV4dFNlZ21lbnQgPSBuZXh0U2VnbWVudC5yZXBsYWNlKC8oW15cXC9dKShcXC8kKS8sICckMScpO1xuXHRcdGlucHV0QnVmZmVyID0gaW5wdXRCdWZmZXIuc3Vic3RyaW5nKG5leHRTZWdtZW50Lmxlbmd0aCk7XG5cdFx0b3V0cHV0QnVmZmVyICs9IG5leHRTZWdtZW50O1xuXHR9XG5cblx0cmV0dXJuIG91dHB1dEJ1ZmZlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVUkk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBlcmNlbnRFbmNvZGluZ0hlbHBlciA9IHJlcXVpcmUoJy4vcGVyY2VudEVuY29kaW5nSGVscGVyJyk7XG5cbmNsYXNzIFVzZXJJbmZvIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBuZXcgaW5zdGFuY2Ugb2YgdXNlciBpbmZvcm1hdGlvbiBjb21wb25lbnQgcGFyc2VyLlxuXHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMi4xXG5cdCAqIEBwYXJhbSB7c3RyaW5nP30gdXNlckluZm9TdHJpbmcgVXNlciBpbmZvcm1hdGlvbiBjb21wb25lbnQgc3RyaW5nLlxuXHQgKi9cblx0Y29uc3RydWN0b3IodXNlckluZm9TdHJpbmcpIHtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgdXNlciBjb21wb25lbnQuXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnVzZXIgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBwYXNzd29yZC5cblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMucGFzc3dvcmQgPSBudWxsO1xuXG5cdFx0aWYgKHR5cGVvZiAodXNlckluZm9TdHJpbmcpID09PSAnc3RyaW5nJyAmJiB1c2VySW5mb1N0cmluZy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBwYXJ0cyA9IHVzZXJJbmZvU3RyaW5nLnNwbGl0KCc6Jyk7XG5cdFx0XHRpZiAodHlwZW9mIChwYXJ0c1swXSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHRoaXMudXNlciA9IHBlcmNlbnRFbmNvZGluZ0hlbHBlci5kZWNvZGUocGFydHNbMF0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiAocGFydHNbMV0pID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aGlzLnBhc3N3b3JkID0gcGVyY2VudEVuY29kaW5nSGVscGVyLmRlY29kZShwYXJ0c1sxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENsb25lcyBjdXJyZW50IHVzZXIgaW5mb3JtYXRpb24uXG5cdCAqIEByZXR1cm5zIHtVc2VySW5mb30gTmV3IGNsb25lIG9mIGN1cnJlbnQgb2JqZWN0LlxuXHQgKi9cblx0Y2xvbmUoKSB7XG5cdFx0Y29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oKTtcblx0XHRpZiAodHlwZW9mICh0aGlzLnVzZXIpID09PSAnc3RyaW5nJykge1xuXHRcdFx0dXNlckluZm8udXNlciA9IHRoaXMudXNlcjtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiAodGhpcy5wYXNzd29yZCkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR1c2VySW5mby5wYXNzd29yZCA9IHRoaXMucGFzc3dvcmQ7XG5cdFx0fVxuXHRcdHJldHVybiB1c2VySW5mbztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWNvbWJpbmVzIHVzZXIgaW5mb3JtYXRpb24gY29tcG9uZW50cyB0byB1c2VySW5mbyBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFVzZXIgaW5mb3JtYXRpb24gY29tcG9uZW50IHN0cmluZy5cblx0ICovXG5cdHRvU3RyaW5nKCkge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRpZiAodGhpcy51c2VyICE9PSB1bmRlZmluZWQgJiYgdGhpcy51c2VyICE9PSBudWxsKSB7XG5cdFx0XHRjb25zdCB1c2VyID0gU3RyaW5nKHRoaXMudXNlcik7XG5cdFx0XHRyZXN1bHQgKz0gcGVyY2VudEVuY29kaW5nSGVscGVyXG5cdFx0XHRcdC5lbmNvZGVVc2VySW5mb1N1YkNvbXBvbmVudCh1c2VyKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFzc3dvcmQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBhc3N3b3JkICE9PSBudWxsKSB7XG5cdFx0XHRjb25zdCBwYXNzd29yZCA9IFN0cmluZyh0aGlzLnBhc3N3b3JkKTtcblx0XHRcdHJlc3VsdCArPSBgOiR7cGVyY2VudEVuY29kaW5nSGVscGVyLmVuY29kZVVzZXJJbmZvU3ViQ29tcG9uZW50KHBhc3N3b3JkKX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVc2VySW5mbztcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0yLjFcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdC8vIFxcdUQ4MDAtXFx1REJGRiBcXHVEQzAwLVxcdURGRkZcblx0Ly8gc3Vycm9nYXRlcyBwYWlycyBsaWtlIGVtb2ppIHdlIHNob3VsZCBpZ25vcmVcblx0LyoqXG5cdCAqIEVuY29kZXMgYXV0aG9yaXR5IHVzZXIgaW5mb3JtYXRpb24gc3ViLWNvbXBvbmVudCBhY2NvcmRpbmcgdG8gUkZDIDM5ODYuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgQ29tcG9uZW50IHRvIGVuY29kZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gRW5jb2RlZCBjb21wb25lbnQuXG5cdCAqL1xuXHRlbmNvZGVVc2VySW5mb1N1YkNvbXBvbmVudChzdHJpbmcpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoXG5cdFx0XHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMi4xXG5cdFx0XHQvW15cXHdcXC5+XFwtIVxcJCYnXFwoXFwpXFwqXFwrLDs9XFx1RDgwMC1cXHVEQkZGXFx1REMwMC1cXHVERkZGXS9nLFxuXHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50XG5cdFx0KTtcblx0fSxcblxuXHQvKipcblx0ICogRW5jb2RlcyBhdXRob3JpdHkgaG9zdCBjb21wb25lbnQgYWNjb3JkaW5nIHRvIFJGQyAzOTg2LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIENvbXBvbmVudCB0byBlbmNvZGUuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IEVuY29kZWQgY29tcG9uZW50LlxuXHQgKi9cblx0ZW5jb2RlSG9zdChzdHJpbmcpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoXG5cdFx0XHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuMi4yXG5cdFx0XHQvW15cXHdcXC5+XFwtIVxcJCYnXFwoXFwpXFwqXFwrLDs9OlxcW1xcXVxcdUQ4MDAtXFx1REJGRlxcdURDMDAtXFx1REZGRl0vZyxcblx0XHRcdGVuY29kZVVSSUNvbXBvbmVudFxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEVuY29kZXMgVVJJIHBhdGggY29tcG9uZW50IGFjY29yZGluZyB0byBSRkMgMzk4Ni5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBDb21wb25lbnQgdG8gZW5jb2RlLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBFbmNvZGVkIGNvbXBvbmVudC5cblx0ICovXG5cdGVuY29kZVBhdGgoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5zcGxpdCgvJTJmL2kpXG5cdFx0XHQubWFwKHBhcnQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcGFydC5yZXBsYWNlKFxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4zXG5cdFx0XHRcdFx0L1teXFx3XFwuflxcLSFcXCQmJ1xcKFxcKVxcKlxcKyw7PTpAXFwvXFx1RDgwMC1cXHVEQkZGXFx1REMwMC1cXHVERkZGXS9nLFxuXHRcdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudFxuXHRcdFx0XHQpO1xuXHRcdFx0fSlcblx0XHRcdC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0aWYgKCFwcmV2KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjdXJyZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByZXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGAke3ByZXZ9JTJGJHtjdXJyZW50fWA7XG5cdFx0XHR9LCAnJyk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEVuY29kZXMgcXVlcnkgc3ViLWNvbXBvbmVudCBhY2NvcmRpbmcgdG8gUkZDIDM5ODYuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgQ29tcG9uZW50IHRvIGVuY29kZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gRW5jb2RlZCBjb21wb25lbnQuXG5cdCAqL1xuXHRlbmNvZGVRdWVyeVN1YkNvbXBvbmVudChzdHJpbmcpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoXG5cdFx0XHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuNFxuXHRcdFx0L1teXFx3XFwuflxcLSFcXCQnXFwoXFwpXFwqXFwrLDs6QFxcL1xcP1xcdUQ4MDAtXFx1REJGRlxcdURDMDAtXFx1REZGRl0vZyxcblx0XHRcdGVuY29kZVVSSUNvbXBvbmVudFxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEVuY29kZXMgVVJJIGZyYWdtZW50IGNvbXBvbmVudCBhY2NvcmRpbmcgdG8gUkZDIDM5ODYuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgQ29tcG9uZW50IHRvIGVuY29kZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gRW5jb2RlZCBjb21wb25lbnQuXG5cdCAqL1xuXHRlbmNvZGVGcmFnbWVudChzdHJpbmcpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoXG5cdFx0XHQvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuNVxuXHRcdFx0L1teXFx3XFwuflxcLSFcXCQmJ1xcKFxcKVxcKlxcKyw7PTpAXFwvXFw/XFx1RDgwMC1cXHVEQkZGXFx1REMwMC1cXHVERkZGXS9nLFxuXHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50XG5cdFx0KTtcblx0fSxcblxuXHQvKipcblx0ICogRGVjb2RlcyBwZXJjZW50IGVuY29kZWQgY29tcG9uZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIENvbXBvbmVudCB0byBkZWNvZGUuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IERlY29kZWQgY29tcG9uZW50LlxuXHQgKi9cblx0ZGVjb2RlKHN0cmluZykge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyaW5nKTtcblx0fSxcblxuXHQvKipcblx0ICogRGVjb2RlcyBwZXJjZW50IGVuY29kZWQgcGF0aCBjb21wb25lbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgQ29tcG9uZW50IHRvIGRlY29kZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gRGVjb2RlZCBwYXRoIGNvbXBvbmVudC5cblx0ICovXG5cdGRlY29kZVBhdGgoc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5zcGxpdCgvJTJmL2kpXG5cdFx0XHQubWFwKGRlY29kZVVSSUNvbXBvbmVudClcblx0XHRcdC5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcblx0XHRcdFx0aWYgKCFwcmV2KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjdXJyZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByZXY7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGAke3ByZXZ9JTJGJHtjdXJyZW50fWA7XG5cdFx0XHR9LCAnJyk7XG5cdH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhdGJlcnJ5QmFzZSA9IHJlcXVpcmUoJy4uL2xpYi9iYXNlL0NhdGJlcnJ5QmFzZScpO1xuXG5jb25zdCBQcm9taXNlID0gcmVxdWlyZSgncHJvbWlzZScpO1xuLy8gaWYgYnJvd3NlciBzdGlsbCBkb2VzIG5vdCBoYXZlIHByb21pc2VzIHRoZW4gYWRkIGl0LlxuaWYgKCEoJ1Byb21pc2UnIGluIHdpbmRvdykpIHtcblx0d2luZG93LlByb21pc2UgPSBQcm9taXNlO1xufVxuXG5jbGFzcyBDYXRiZXJyeSBleHRlbmRzIENhdGJlcnJ5QmFzZSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgbmV3IGluc3RhbmNlIG9mIHRoZSBicm93c2VyIHZlcnNpb24gb2YgQ2F0YmVycnkuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCByZXF1ZXN0IHJvdXRlci5cblx0XHQgKiBAdHlwZSB7UmVxdWVzdFJvdXRlcn1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3JvdXRlciA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogV3JhcHMgY3VycmVudCBIVE1MIGRvY3VtZW50IHdpdGggQ2F0YmVycnkgZXZlbnQgaGFuZGxlcnMuXG5cdCAqL1xuXHR3cmFwRG9jdW1lbnQoKSB7XG5cdFx0dGhpcy5fcm91dGVyID0gdGhpcy5sb2NhdG9yLnJlc29sdmUoJ3JlcXVlc3RSb3V0ZXInKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgQ2F0YmVycnkgYXBwbGljYXRpb24gd2hlbiBET00gaXMgcmVhZHkuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuXHQgKi9cblx0c3RhcnRXaGVuUmVhZHkoKSB7XG5cdFx0aWYgKHdpbmRvdy5jYXRiZXJyeSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG5cdFx0XHR3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLndyYXBEb2N1bWVudCgpO1xuXHRcdFx0XHRcdHdpbmRvdy5jYXRiZXJyeSA9IHRoaXM7XG5cdFx0XHRcdFx0ZnVsZmlsbCgpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhdGJlcnJ5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDb29raWVXcmFwcGVyQmFzZSA9IHJlcXVpcmUoJy4uL2xpYi9iYXNlL0Nvb2tpZVdyYXBwZXJCYXNlJyk7XG5cbmNsYXNzIENvb2tpZVdyYXBwZXIgZXh0ZW5kcyBDb29raWVXcmFwcGVyQmFzZSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJyb3dzZXIgY29va2llIHdyYXBwZXIuXG5cdCAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGxvY2F0b3IgVGhlIHNlcnZpY2UgbG9jYXRvciBmb3IgcmVzb2x2aW5nIGRlcGVuZGVuY2llcy5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGxvY2F0b3IpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBicm93c2VyIHdpbmRvdy5cblx0XHQgKiBAdHlwZSB7V2luZG93fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fd2luZG93ID0gbG9jYXRvci5yZXNvbHZlKCd3aW5kb3cnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGN1cnJlbnQgY29va2llIHN0cmluZy5cblx0ICogQHJldHVybnMge3N0cmluZ30gQ29va2llIHN0cmluZy5cblx0ICovXG5cdGdldENvb2tpZVN0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5fd2luZG93LmRvY3VtZW50LmNvb2tpZSA/XG5cdFx0XHR0aGlzLl93aW5kb3cuZG9jdW1lbnQuY29va2llLnRvU3RyaW5nKCkgOlxuXHRcdFx0Jyc7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBjb29raWUgdG8gdGhpcyB3cmFwcGVyLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29va2llU2V0dXAgQ29va2llIHNldHVwIG9iamVjdC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvb2tpZVNldHVwLmtleSBDb29raWUga2V5LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29va2llU2V0dXAudmFsdWUgQ29va2llIHZhbHVlLlxuXHQgKiBAcGFyYW0ge251bWJlcj99IGNvb2tpZVNldHVwLm1heEFnZSBNYXggY29va2llIGFnZSBpbiBzZWNvbmRzLlxuXHQgKiBAcGFyYW0ge0RhdGU/fSBjb29raWVTZXR1cC5leHBpcmVzIEV4cGlyZSBkYXRlLlxuXHQgKiBAcGFyYW0ge3N0cmluZz99IGNvb2tpZVNldHVwLnBhdGggVVJJIHBhdGggZm9yIGNvb2tpZS5cblx0ICogQHBhcmFtIHtzdHJpbmc/fSBjb29raWVTZXR1cC5kb21haW4gQ29va2llIGRvbWFpbi5cblx0ICogQHBhcmFtIHtib29sZWFuP30gY29va2llU2V0dXAuc2VjdXJlIElzIGNvb2tpZSBzZWN1cmVkLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW4/fSBjb29raWVTZXR1cC5odHRwT25seSBJcyBjb29raWUgSFRUUCBvbmx5LlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBDb29raWUgc2V0dXAgc3RyaW5nLlxuXHQgKi9cblx0c2V0KGNvb2tpZVNldHVwKSB7XG5cdFx0Y29uc3QgY29va2llID0gdGhpcy5fY29udmVydFRvQ29va2llU2V0dXAoY29va2llU2V0dXApO1xuXHRcdHRoaXMuX3dpbmRvdy5kb2N1bWVudC5jb29raWUgPSBjb29raWU7XG5cdFx0cmV0dXJuIGNvb2tpZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvb2tpZVdyYXBwZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1vcnBoZG9tID0gcmVxdWlyZSgnbW9ycGhkb20nKTtcbmNvbnN0IGVycm9ySGVscGVyID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcnMvZXJyb3JIZWxwZXInKTtcbmNvbnN0IG1vZHVsZUhlbHBlciA9IHJlcXVpcmUoJy4uL2xpYi9oZWxwZXJzL21vZHVsZUhlbHBlcicpO1xuY29uc3QgaHJUaW1lSGVscGVyID0gcmVxdWlyZSgnLi4vbGliL2hlbHBlcnMvaHJUaW1lSGVscGVyJyk7XG5jb25zdCBEb2N1bWVudFJlbmRlcmVyQmFzZSA9IHJlcXVpcmUoJy4uL2xpYi9iYXNlL0RvY3VtZW50UmVuZGVyZXJCYXNlJyk7XG5cbmNvbnN0IFNQRUNJQUxfSURTID0ge1xuXHQkJGhlYWQ6ICckJGhlYWQnLFxuXHQkJGRvY3VtZW50OiAnJCRkb2N1bWVudCdcbn07XG5jb25zdCBUQUdfTkFNRVMgPSB7XG5cdFRJVExFOiAnVElUTEUnLFxuXHRIVE1MOiAnSFRNTCcsXG5cdEhFQUQ6ICdIRUFEJyxcblx0QkFTRTogJ0JBU0UnLFxuXHRTVFlMRTogJ1NUWUxFJyxcblx0U0NSSVBUOiAnU0NSSVBUJyxcblx0Tk9TQ1JJUFQ6ICdOT1NDUklQVCcsXG5cdE1FVEE6ICdNRVRBJyxcblx0TElOSzogJ0xJTksnXG59O1xuY29uc3QgTk9ERV9UWVBFUyA9IHtcblx0RUxFTUVOVF9OT0RFOiAxLFxuXHRURVhUX05PREU6IDMsXG5cdFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTogNyxcblx0Q09NTUVOVF9OT0RFOiA4XG59O1xuXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDE1L1dELXVpZXZlbnRzLTIwMTUwMzE5LyNldmVudC10eXBlcy1saXN0XG5jb25zdCBOT05fQlVCQkxJTkdfRVZFTlRTID0ge1xuXHRhYm9ydDogdHJ1ZSxcblx0Ymx1cjogdHJ1ZSxcblx0ZXJyb3I6IHRydWUsXG5cdGZvY3VzOiB0cnVlLFxuXHRsb2FkOiB0cnVlLFxuXHRtb3VzZWVudGVyOiB0cnVlLFxuXHRtb3VzZWxlYXZlOiB0cnVlLFxuXHRyZXNpemU6IHRydWUsXG5cdHVubG9hZDogdHJ1ZVxufTtcblxuY2xhc3MgRG9jdW1lbnRSZW5kZXJlciBleHRlbmRzIERvY3VtZW50UmVuZGVyZXJCYXNlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgZG9jdW1lbnQgcmVuZGVyZXIuXG5cdCAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGxvY2F0b3IgTG9jYXRvciBmb3IgcmVzb2x2aW5nIGRlcGVuZGVuY2llcy5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGxvY2F0b3IpIHtcblx0XHRzdXBlcihsb2NhdG9yKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc2V0IG9mIGNvbXBvbmVudCBpbnN0YW5jZXMgYnkgdW5pcXVlIGtleXMuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvbXBvbmVudEluc3RhbmNlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHNldCBvZiBjb21wb25lbnQgZWxlbWVudHMgYnkgdW5pcXVlIGtleXMuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvbXBvbmVudEVsZW1lbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc2V0IG9mIGNvbXBvbmVudCBiaW5kaW5ncyBieSB1bmlxdWUga2V5cy5cblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fY29tcG9uZW50QmluZGluZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzZXQgb2YgY2hhbmdlZCBzdG9yZXMuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2N1cnJlbnRDaGFuZ2VkU3RvcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgYnJvd3NlcidzIHdpbmRvdy5cblx0XHQgKi9cblx0XHR0aGlzLl93aW5kb3cgPSBsb2NhdG9yLnJlc29sdmUoJ3dpbmRvdycpO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBhcHBsaWNhdGlvbiBjb25maWcuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvbmZpZyA9IGxvY2F0b3IucmVzb2x2ZSgnY29uZmlnJyk7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHN0b3JlIGRpc3BhdGNoZXIuXG5cdFx0ICogQHR5cGUge1N0b3JlRGlzcGF0Y2hlcn1cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fc3RvcmVEaXNwYXRjaGVyID0gbG9jYXRvci5yZXNvbHZlKCdzdG9yZURpc3BhdGNoZXInKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgcHJvbWlzZSBmb3IgcmVuZGVyZWQgcGFnZS5cblx0XHQgKiBAdHlwZSB7UHJvbWlzZX1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3JlbmRlcmVkUHJvbWlzZSA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHN0YXRlIG9mIHVwZGF0aW5nIGNvbXBvbmVudHMuXG5cdFx0ICogQHR5cGUge2Jvb2xlYW59XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9pc1VwZGF0aW5nID0gZmFsc2U7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGF3YWl0aW5nIHJvdXRpbmcuXG5cdFx0ICogQHR5cGUge3tzdGF0ZTogT2JqZWN0LCByb3V0aW5nQ29udGV4dDogT2JqZWN0fX1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2F3YWl0aW5nUm91dGluZyA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHJvdXRpbmcgY29udGV4dC5cblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fY3VycmVudFJvdXRpbmdDb250ZXh0ID0gbnVsbDtcblxuXHRcdHRoaXMuX2V2ZW50QnVzLm9uKCdzdG9yZUNoYW5nZWQnLCBzdG9yZU5hbWUgPT4ge1xuXHRcdFx0dGhpcy5fY3VycmVudENoYW5nZWRTdG9yZXNbc3RvcmVOYW1lXSA9IHRydWU7XG5cdFx0XHRpZiAodGhpcy5faXNTdGF0ZUNoYW5naW5nKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuX3VwZGF0ZVN0b3JlQ29tcG9uZW50cygpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGFwcGxpY2F0aW9uLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgTmV3IHN0YXRlIG9mIHRoZSBhcHBsaWNhdGlvbi5cblx0ICogQHBhcmFtIHtPYmplY3R9IHJvdXRpbmdDb250ZXh0IFJvdXRpbmcgY29udGV4dC5cblx0ICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG5cdCAqL1xuXHRpbml0V2l0aFN0YXRlKHN0YXRlLCByb3V0aW5nQ29udGV4dCkge1xuXHRcdHJldHVybiB0aGlzLl9nZXRQcm9taXNlRm9yUmVhZHlTdGF0ZSgpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX2N1cnJlbnRSb3V0aW5nQ29udGV4dCA9IHJvdXRpbmdDb250ZXh0O1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fc3RvcmVEaXNwYXRjaGVyLnNldFN0YXRlKHN0YXRlLCByb3V0aW5nQ29udGV4dCk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBjb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50TG9hZGVyLmdldENvbXBvbmVudHNCeU5hbWVzKCk7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5fZmluZENvbXBvbmVudEVsZW1lbnRzKFxuXHRcdFx0XHRcdHRoaXMuX3dpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGNvbXBvbmVudHMsIHRydWVcblx0XHRcdFx0KTtcblx0XHRcdFx0ZWxlbWVudHMudW5zaGlmdCh0aGlzLl93aW5kb3cuZG9jdW1lbnQuaGVhZCk7XG5cdFx0XHRcdGVsZW1lbnRzLnVuc2hpZnQodGhpcy5fd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9pbml0aWFsV3JhcChjb21wb25lbnRzLCBlbGVtZW50cyk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW5kZXJzIGEgbmV3IHN0YXRlIG9mIHRoZSBhcHBsaWNhdGlvbi5cblx0ICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIE5ldyBzdGF0ZSBvZiB0aGUgYXBwbGljYXRpb24uXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSByb3V0aW5nQ29udGV4dCBSb3V0aW5nIGNvbnRleHQuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuXHQgKi9cblx0cmVuZGVyKHN0YXRlLCByb3V0aW5nQ29udGV4dCkge1xuXHRcdHRoaXMuX2F3YWl0aW5nUm91dGluZyA9IHtcblx0XHRcdHN0YXRlLFxuXHRcdFx0cm91dGluZ0NvbnRleHRcblx0XHR9O1xuXHRcdGlmICh0aGlzLl9pc1N0YXRlQ2hhbmdpbmcpIHtcblx0XHRcdHJldHVybiB0aGlzLl9yZW5kZXJlZFByb21pc2U7XG5cdFx0fVxuXG5cdFx0Ly8gd2Ugc2hvdWxkIHNldCB0aGlzIGZsYWcgdG8gYXZvaWQgXCJzdG9yZUNoYW5nZWRcIlxuXHRcdC8vIGV2ZW50IGhhbmRsaW5nIGZvciBub3dcblx0XHR0aGlzLl9pc1N0YXRlQ2hhbmdpbmcgPSB0cnVlO1xuXG5cdFx0dGhpcy5fcmVuZGVyZWRQcm9taXNlID0gdGhpcy5fZ2V0UHJvbWlzZUZvclJlYWR5U3RhdGUoKVxuXHRcdFx0Ly8gYW5kIHRoZW4gd2UgdXBkYXRlIGFsbCBjb21wb25lbnRzIG9mIHRoZXNlIHN0b3JlcyBpbiBhIGJhdGNoLlxuXHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5fdXBkYXRlU3RvcmVDb21wb25lbnRzKCkpXG5cdFx0XHQuY2F0Y2gocmVhc29uID0+IHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0dGhpcy5faXNTdGF0ZUNoYW5naW5nID0gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLl9yZW5kZXJlZFByb21pc2U7XG5cdH1cblxuXHQvKipcblx0ICogUmVuZGVycyBhIGNvbXBvbmVudCBpbnRvIHRoZSBIVE1MIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBIVE1MIGVsZW1lbnQgb2YgdGhlIGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHtPYmplY3Q/fSByZW5kZXJpbmdDb250ZXh0IFJlbmRlcmluZyBjb250ZXh0IGZvciBncm91cCByZW5kZXJpbmcuXG5cdCAqL1xuXHRyZW5kZXJDb21wb25lbnQoZWxlbWVudCwgcmVuZGVyaW5nQ29udGV4dCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuX2dldFByb21pc2VGb3JSZWFkeVN0YXRlKClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Y29uc3QgaWQgPSB0aGlzLl9nZXRJZChlbGVtZW50KTtcblx0XHRcdFx0Y29uc3QgY29tcG9uZW50TmFtZSA9IG1vZHVsZUhlbHBlci5nZXRPcmlnaW5hbENvbXBvbmVudE5hbWUoZWxlbWVudC50YWdOYW1lKTtcblxuXHRcdFx0XHRpZiAoIWlkKSB7XG5cdFx0XHRcdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnd2FybicsIGBDb21wb25lbnQgXCIke2NvbXBvbmVudE5hbWV9XCIgZG9lcyBub3QgaGF2ZSBhbiBJRCwgc2tpcHBpbmcuLi5gKTtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghcmVuZGVyaW5nQ29udGV4dCkge1xuXHRcdFx0XHRcdHJlbmRlcmluZ0NvbnRleHQgPSB0aGlzLl9jcmVhdGVSZW5kZXJpbmdDb250ZXh0KFtdKTtcblx0XHRcdFx0XHRyZW5kZXJpbmdDb250ZXh0LnJvb3RJZHNbaWRdID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGhhZENoaWxkcmVuID0gZWxlbWVudC5oYXNDaGlsZE5vZGVzKCk7XG5cdFx0XHRcdGNvbnN0IGNvbXBvbmVudCA9IHJlbmRlcmluZ0NvbnRleHQuY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblx0XHRcdFx0aWYgKCFjb21wb25lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpZCBpbiByZW5kZXJpbmdDb250ZXh0LnJlbmRlcmVkSWRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnd2FybicsXG5cdFx0XHRcdFx0XHRgVGhlIGR1cGxpY2F0ZWQgSUQgXCIke2lkfVwiIGhhcyBiZWVuIGZvdW5kLCBza2lwcGluZyBjb21wb25lbnQgXCIke2NvbXBvbmVudE5hbWV9XCIuLi5gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlbmRlcmluZ0NvbnRleHQucmVuZGVyZWRJZHNbaWRdID0gdHJ1ZTtcblxuXHRcdFx0XHR2YXIgaW5zdGFuY2UgPSB0aGlzLl9jb21wb25lbnRJbnN0YW5jZXNbaWRdO1xuXHRcdFx0XHRpZiAoIWluc3RhbmNlKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LmNvbnN0cnVjdG9yLnByb3RvdHlwZS4kY29udGV4dCA9XG5cdFx0XHRcdFx0XHR0aGlzLl9nZXRDb21wb25lbnRDb250ZXh0KGNvbXBvbmVudCwgZWxlbWVudCk7XG5cdFx0XHRcdFx0aW5zdGFuY2UgPSBuZXcgY29tcG9uZW50LmNvbnN0cnVjdG9yKHRoaXMuX3NlcnZpY2VMb2NhdG9yKTtcblx0XHRcdFx0XHRpbnN0YW5jZS4kY29udGV4dCA9IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUuJGNvbnRleHQ7XG5cdFx0XHRcdFx0dGhpcy5fY29tcG9uZW50SW5zdGFuY2VzW2lkXSA9IGluc3RhbmNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgZXZlbnRBcmdzID0ge1xuXHRcdFx0XHRcdG5hbWU6IGNvbXBvbmVudE5hbWUsXG5cdFx0XHRcdFx0Y29udGV4dDogaW5zdGFuY2UuJGNvbnRleHRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLl9jb21wb25lbnRFbGVtZW50c1tpZF0gPSBlbGVtZW50O1xuXG5cdFx0XHRcdGNvbnN0IHN0YXJ0VGltZSA9IGhyVGltZUhlbHBlci5nZXQoKTtcblx0XHRcdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnY29tcG9uZW50UmVuZGVyJywgZXZlbnRBcmdzKTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBuZWVkIHVuYmluZCB0aGUgd2hvbGUgaGllcmFyY2h5IG9ubHkgYXRcblx0XHRcdFx0XHRcdC8vIHRoZSBiZWdpbm5pbmcgYW5kIG5vdCBmb3IgbmV3IGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRpZiAoIShpZCBpbiByZW5kZXJpbmdDb250ZXh0LnJvb3RJZHMpIHx8ICFoYWRDaGlsZHJlbikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLl91bmJpbmRBbGwoZWxlbWVudCwgcmVuZGVyaW5nQ29udGV4dCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2gocmVhc29uID0+IHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaW5zdGFuY2UuJGNvbnRleHQuZWxlbWVudCAhPT0gZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YW5jZS4kY29udGV4dCA9IHRoaXMuX2dldENvbXBvbmVudENvbnRleHQoY29tcG9uZW50LCBlbGVtZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IHJlbmRlck1ldGhvZCA9IG1vZHVsZUhlbHBlci5nZXRNZXRob2RUb0ludm9rZShpbnN0YW5jZSwgJ3JlbmRlcicpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1vZHVsZUhlbHBlci5nZXRTYWZlUHJvbWlzZShyZW5kZXJNZXRob2QpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oZGF0YUNvbnRleHQgPT4gY29tcG9uZW50LnRlbXBsYXRlLnJlbmRlcihkYXRhQ29udGV4dCkpXG5cdFx0XHRcdFx0LmNhdGNoKHJlYXNvbiA9PiB0aGlzLl9oYW5kbGVSZW5kZXJFcnJvcihlbGVtZW50LCBjb21wb25lbnQsIHJlYXNvbikpXG5cdFx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBpc0hlYWQgPSBlbGVtZW50LnRhZ05hbWUgPT09IFRBR19OQU1FUy5IRUFEO1xuXHRcdFx0XHRcdFx0aWYgKGh0bWwgPT09ICcnICYmIGlzSGVhZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNvbnN0IHRtcEVsZW1lbnQgPSB0aGlzLl9jcmVhdGVUZW1wb3JhcnlFbGVtZW50KGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0dG1wRWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuXG5cdFx0XHRcdFx0XHRpZiAoaXNIZWFkKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX21lcmdlSGVhZChlbGVtZW50LCB0bXBFbGVtZW50KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRtb3JwaGRvbShlbGVtZW50LCB0bXBFbGVtZW50LCB7XG5cdFx0XHRcdFx0XHRcdG9uQmVmb3JlTW9ycGhFbENoaWxkcmVuOiBmb3VuZEVsZW1lbnQgPT5cblx0XHRcdFx0XHRcdFx0XHRmb3VuZEVsZW1lbnQgPT09IGVsZW1lbnQgfHwgIXRoaXMuX2lzQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyaW5nQ29udGV4dC5jb21wb25lbnRzLCBmb3VuZEVsZW1lbnRcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLl9maW5kQ29tcG9uZW50RWxlbWVudHMoXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQsIHJlbmRlcmluZ0NvbnRleHQuY29tcG9uZW50cywgZmFsc2Vcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0Lm1hcChjaGlsZCA9PiB0aGlzLnJlbmRlckNvbXBvbmVudChjaGlsZCwgcmVuZGVyaW5nQ29udGV4dCkpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnRBcmdzLmhyVGltZSA9IGhyVGltZUhlbHBlci5nZXQoc3RhcnRUaW1lKTtcblx0XHRcdFx0XHRcdGV2ZW50QXJncy50aW1lID0gaHJUaW1lSGVscGVyLnRvTWlsbGlzZWNvbmRzKGV2ZW50QXJncy5oclRpbWUpO1xuXHRcdFx0XHRcdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnY29tcG9uZW50UmVuZGVyZWQnLCBldmVudEFyZ3MpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuX2JpbmRDb21wb25lbnQoZWxlbWVudCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHQvLyBjb2xsZWN0aW5nIGdhcmJhZ2Ugb25seSB3aGVuXG5cdFx0XHRcdFx0XHQvLyB0aGUgZW50aXJlIHJlbmRlcmluZyBpcyBmaW5pc2hlZFxuXHRcdFx0XHRcdFx0aWYgKCEoaWQgaW4gcmVuZGVyaW5nQ29udGV4dC5yb290SWRzKSB8fCAhaGFkQ2hpbGRyZW4pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5fY29sbGVjdFJlbmRlcmluZ0dhcmJhZ2UocmVuZGVyaW5nQ29udGV4dCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2gocmVhc29uID0+IHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgY29tcG9uZW50IGluc3RhbmNlIGJ5IElELlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWQgQ29tcG9uZW50IElELlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IENvbXBvbmVudCBpbnN0YW5jZS5cblx0ICovXG5cdGdldENvbXBvbmVudEJ5SWQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5fY29tcG9uZW50SW5zdGFuY2VzW2lkXSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgY29tcG9uZW50IGluc3RhbmNlIGJ5IGEgRE9NIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBDb21wb25lbnQncyBFbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IENvbXBvbmVudCBpbnN0YW5jZS5cblx0ICovXG5cdGdldENvbXBvbmVudEJ5RWxlbWVudChlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgaWQgPSB0aGlzLl9nZXRJZChlbGVtZW50KTtcblx0XHRyZXR1cm4gdGhpcy5nZXRDb21wb25lbnRCeUlkKGlkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgdGhhdCBldmVyeSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGhhcyBhbiBlbGVtZW50IG9uIHRoZSBwYWdlIGFuZFxuXHQgKiByZW1vdmVzIGFsbCByZWZlcmVuY2VzIHRvIHRob3NlIGNvbXBvbmVudHMgd2hpY2ggd2VyZSByZW1vdmVkIGZyb20gRE9NLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cblx0ICovXG5cdC8qIGVzbGludCBtYXgtbmVzdGVkLWNhbGxiYWNrczogMCAqL1xuXHRjb2xsZWN0R2FyYmFnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZ2V0UHJvbWlzZUZvclJlYWR5U3RhdGUoKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBwcm9taXNlcyA9IFtdO1xuXHRcdFx0XHRPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRFbGVtZW50cylcblx0XHRcdFx0XHQuZm9yRWFjaChpZCA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoU1BFQ0lBTF9JRFMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb25zdCBwcm9taXNlID0gdGhpcy5fdW5iaW5kQ29tcG9uZW50KHRoaXMuX2NvbXBvbmVudEVsZW1lbnRzW2lkXSlcblx0XHRcdFx0XHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5fcmVtb3ZlQ29tcG9uZW50KGlkKSk7XG5cdFx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbmQgcmVuZGVycyBhIGNvbXBvbmVudCBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBOYW1lIG9mIHRoZSBIVE1MIHRhZy5cblx0ICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgRWxlbWVudCBhdHRyaWJ1dGVzLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxFbGVtZW50Pn0gUHJvbWlzZSBmb3IgSFRNTCBlbGVtZW50IHdpdGggdGhlIHJlbmRlcmVkIGNvbXBvbmVudC5cblx0ICovXG5cdGNyZWF0ZUNvbXBvbmVudCh0YWdOYW1lLCBhdHRyaWJ1dGVzKSB7XG5cdFx0aWYgKHR5cGVvZiAodGFnTmFtZSkgIT09ICdzdHJpbmcnIHx8ICFhdHRyaWJ1dGVzIHx8XG5cdFx0XHR0eXBlb2YgKGF0dHJpYnV0ZXMpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KFxuXHRcdFx0XHRuZXcgRXJyb3IoJ1RhZyBuYW1lIHNob3VsZCBiZSBhIHN0cmluZyBhbmQgYXR0cmlidXRlcyBzaG91bGQgYmUgYW4gb2JqZWN0Jylcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2dldFByb21pc2VGb3JSZWFkeVN0YXRlKClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Y29uc3QgY29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudExvYWRlci5nZXRDb21wb25lbnRzQnlOYW1lcygpO1xuXHRcdFx0XHRjb25zdCBjb21wb25lbnROYW1lID0gbW9kdWxlSGVscGVyLmdldE9yaWdpbmFsQ29tcG9uZW50TmFtZSh0YWdOYW1lKTtcblxuXHRcdFx0XHRpZiAobW9kdWxlSGVscGVyLmlzSGVhZENvbXBvbmVudChjb21wb25lbnROYW1lKSB8fFxuXHRcdFx0XHRcdG1vZHVsZUhlbHBlci5pc0RvY3VtZW50Q29tcG9uZW50KGNvbXBvbmVudE5hbWUpIHx8XG5cdFx0XHRcdFx0IShjb21wb25lbnROYW1lIGluIGNvbXBvbmVudHMpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihgQ29tcG9uZW50IGZvciB0YWcgXCIke3RhZ05hbWV9XCIgbm90IGZvdW5kYCkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgc2FmZVRhZ05hbWUgPSBtb2R1bGVIZWxwZXIuZ2V0VGFnTmFtZUZvckNvbXBvbmVudE5hbWUoY29tcG9uZW50TmFtZSk7XG5cblx0XHRcdFx0Y29uc3QgaWQgPSBhdHRyaWJ1dGVzW21vZHVsZUhlbHBlci5BVFRSSUJVVEVfSURdO1xuXHRcdFx0XHRpZiAoIWlkIHx8IGlkIGluIHRoaXMuX2NvbXBvbmVudEluc3RhbmNlcykge1xuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1RoZSBJRCBpcyBub3Qgc3BlY2lmaWVkIG9yIGFscmVhZHkgdXNlZCcpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzYWZlVGFnTmFtZSk7XG5cdFx0XHRcdE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpXG5cdFx0XHRcdFx0LmZvckVhY2goYXR0cmlidXRlTmFtZSA9PiB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoZWxlbWVudClcblx0XHRcdFx0XHQudGhlbigoKSA9PiBlbGVtZW50KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENsZWFycyBhbGwgcmVmZXJlbmNlcyB0byByZW1vdmVkIGNvbXBvbmVudHMgZHVyaW5nIHRoZSByZW5kZXJpbmcgcHJvY2Vzcy5cblx0ICogQHBhcmFtIHtPYmplY3R9IHJlbmRlcmluZ0NvbnRleHQgQ29udGV4dCBvZiByZW5kZXJpbmcuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY29sbGVjdFJlbmRlcmluZ0dhcmJhZ2UocmVuZGVyaW5nQ29udGV4dCkge1xuXHRcdE9iamVjdC5rZXlzKHJlbmRlcmluZ0NvbnRleHQudW5ib3VuZElkcylcblx0XHRcdC5mb3JFYWNoKGlkID0+IHtcblx0XHRcdFx0Ly8gdGhpcyBjb21wb25lbnQgaGFzIGJlZW4gcmVuZGVyZWQgYWdhaW4gYW5kIHdlIGRvIG5vdCBuZWVkIHRvXG5cdFx0XHRcdC8vIHJlbW92ZSBpdC5cblx0XHRcdFx0aWYgKGlkIGluIHJlbmRlcmluZ0NvbnRleHQucmVuZGVyZWRJZHMpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiBzb21lb25lIGFkZGVkIGFuIGVsZW1lbnQgd2l0aCB0aGUgc2FtZSBJRCBkdXJpbmcgdGhlXG5cdFx0XHRcdC8vIHJlbmRlcmluZyBwcm9jZXNzXG5cdFx0XHRcdGlmICh0aGlzLl93aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ29tcG9uZW50KGlkKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVuYmluZHMgYWxsIGV2ZW50IGhhbmRsZXJzIGZyb20gdGhlIHNwZWNpZmllZCBjb21wb25lbnQgYW5kIGFsbCBpdCdzIGRlc2NlbmRhbnRzLlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgQ29tcG9uZW50IEhUTUwgZWxlbWVudC5cblx0ICogQHBhcmFtIHtPYmplY3R9IHJlbmRlcmluZ0NvbnRleHQgQ29udGV4dCBvZiByZW5kZXJpbmcuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3VuYmluZEFsbChlbGVtZW50LCByZW5kZXJpbmdDb250ZXh0KSB7XG5cdFx0Y29uc3Qgcm9vdElkID0gdGhpcy5fZ2V0SWQoZWxlbWVudCk7XG5cdFx0Y29uc3QgcHJvbWlzZXMgPSBbXTtcblxuXHRcdHRoaXMuX2ZpbmRDb21wb25lbnRFbGVtZW50cyhlbGVtZW50LCByZW5kZXJpbmdDb250ZXh0LmNvbXBvbmVudHMsIHRydWUpXG5cdFx0XHQuZm9yRWFjaChpbm5lckVsZW1lbnQgPT4ge1xuXHRcdFx0XHRjb25zdCBpZCA9IHRoaXMuX2dldElkKGlubmVyRWxlbWVudCk7XG5cdFx0XHRcdHJlbmRlcmluZ0NvbnRleHQudW5ib3VuZElkc1tpZF0gPSB0cnVlO1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKHRoaXMuX3VuYmluZENvbXBvbmVudChpbm5lckVsZW1lbnQpKTtcblx0XHRcdH0pO1xuXG5cdFx0cmVuZGVyaW5nQ29udGV4dC51bmJvdW5kSWRzW3Jvb3RJZF0gPSB0cnVlO1xuXHRcdHByb21pc2VzLnB1c2godGhpcy5fdW5iaW5kQ29tcG9uZW50KGVsZW1lbnQpKTtcblxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cdH1cblxuXHQvKipcblx0ICogVW5iaW5kcyBhbGwgZXZlbnQgaGFuZGxlcnMgZnJvbSB0aGUgc3BlY2lmaWVkIGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IENvbXBvbmVudCBIVE1MIGVsZW1lbnQuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3VuYmluZENvbXBvbmVudChlbGVtZW50KSB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLl9nZXRJZChlbGVtZW50KTtcblx0XHRjb25zdCBpbnN0YW5jZSA9IHRoaXMuX2NvbXBvbmVudEluc3RhbmNlc1tpZF07XG5cblx0XHRpZiAoIWluc3RhbmNlKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0fVxuXHRcdGlmIChpZCBpbiB0aGlzLl9jb21wb25lbnRCaW5kaW5ncykge1xuXHRcdFx0T2JqZWN0LmtleXModGhpcy5fY29tcG9uZW50QmluZGluZ3NbaWRdKVxuXHRcdFx0XHQuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdGV2ZW50TmFtZSxcblx0XHRcdFx0XHRcdHRoaXMuX2NvbXBvbmVudEJpbmRpbmdzW2lkXVtldmVudE5hbWVdLmhhbmRsZXIsXG5cdFx0XHRcdFx0XHROT05fQlVCQkxJTkdfRVZFTlRTLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdGRlbGV0ZSB0aGlzLl9jb21wb25lbnRCaW5kaW5nc1tpZF07XG5cdFx0fVxuXG5cdFx0Y29uc3QgdW5iaW5kTWV0aG9kID0gbW9kdWxlSGVscGVyLmdldE1ldGhvZFRvSW52b2tlKGluc3RhbmNlLCAndW5iaW5kJyk7XG5cdFx0cmV0dXJuIG1vZHVsZUhlbHBlci5nZXRTYWZlUHJvbWlzZSh1bmJpbmRNZXRob2QpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2NvbXBvbmVudFVuYm91bmQnLCB7XG5cdFx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0XHRpZDogIVNQRUNJQUxfSURTLmhhc093blByb3BlcnR5KGlkKSA/IGlkIDogbnVsbFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2gocmVhc29uID0+IHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlcyBhIGNvbXBvbmVudCBmcm9tIHRoZSBjdXJyZW50IGxpc3QuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCBDb21wb25lbnQncyBJRFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3JlbW92ZUNvbXBvbmVudChpZCkge1xuXHRcdGRlbGV0ZSB0aGlzLl9jb21wb25lbnRFbGVtZW50c1tpZF07XG5cdFx0ZGVsZXRlIHRoaXMuX2NvbXBvbmVudEluc3RhbmNlc1tpZF07XG5cdFx0ZGVsZXRlIHRoaXMuX2NvbXBvbmVudEJpbmRpbmdzW2lkXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCaW5kcyBhbGwgcmVxdWlyZWQgZXZlbnQgaGFuZGxlcnMgdG8gdGhlIGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IENvbXBvbmVudCdzIEhUTUwgZWxlbWVudC5cblx0ICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfYmluZENvbXBvbmVudChlbGVtZW50KSB7XG5cdFx0Y29uc3QgaWQgPSB0aGlzLl9nZXRJZChlbGVtZW50KTtcblx0XHRjb25zdCBpbnN0YW5jZSA9IHRoaXMuX2NvbXBvbmVudEluc3RhbmNlc1tpZF07XG5cdFx0aWYgKCFpbnN0YW5jZSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGJpbmRNZXRob2QgPSBtb2R1bGVIZWxwZXIuZ2V0TWV0aG9kVG9JbnZva2UoaW5zdGFuY2UsICdiaW5kJyk7XG5cdFx0cmV0dXJuIG1vZHVsZUhlbHBlci5nZXRTYWZlUHJvbWlzZShiaW5kTWV0aG9kKVxuXHRcdFx0LnRoZW4oYmluZGluZ3MgPT4ge1xuXHRcdFx0XHRpZiAoIWJpbmRpbmdzIHx8IHR5cGVvZiAoYmluZGluZ3MpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2NvbXBvbmVudEJvdW5kJywge1xuXHRcdFx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0XHRcdGlkOiAhU1BFQ0lBTF9JRFMuaGFzT3duUHJvcGVydHkoaWQpID8gaWQgOiBudWxsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuX2NvbXBvbmVudEJpbmRpbmdzW2lkXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0XHRcdE9iamVjdC5rZXlzKGJpbmRpbmdzKVxuXHRcdFx0XHRcdC5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudE5hbWUgPSBldmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRcdGlmIChldmVudE5hbWUgaW4gdGhpcy5fY29tcG9uZW50QmluZGluZ3NbaWRdKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IHNlbGVjdG9ySGFuZGxlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdFx0XHRcdFx0T2JqZWN0LmtleXMoYmluZGluZ3NbZXZlbnROYW1lXSlcblx0XHRcdFx0XHRcdFx0LmZvckVhY2goc2VsZWN0b3IgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGhhbmRsZXIgPSBiaW5kaW5nc1tldmVudE5hbWVdW3NlbGVjdG9yXTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIChoYW5kbGVyKSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RvckhhbmRsZXJzW3NlbGVjdG9yXSA9IGhhbmRsZXIuYmluZChpbnN0YW5jZSk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0dGhpcy5fY29tcG9uZW50QmluZGluZ3NbaWRdW2V2ZW50TmFtZV0gPSB7XG5cdFx0XHRcdFx0XHRcdGhhbmRsZXI6IHRoaXMuX2NyZWF0ZUJpbmRpbmdIYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9ySGFuZGxlcnMpLFxuXHRcdFx0XHRcdFx0XHRzZWxlY3RvckhhbmRsZXJzXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0XHRldmVudE5hbWUsXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2NvbXBvbmVudEJpbmRpbmdzW2lkXVtldmVudE5hbWVdLmhhbmRsZXIsXG5cdFx0XHRcdFx0XHRcdE5PTl9CVUJCTElOR19FVkVOVFMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnY29tcG9uZW50Qm91bmQnLCB7XG5cdFx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0XHRpZFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSB1bml2ZXJzYWwgZXZlbnQgaGFuZGxlciBmb3IgZGVsZWdhdGVkIGV2ZW50cy5cblx0ICogQHBhcmFtIHtFbGVtZW50fSBjb21wb25lbnRSb290IFJvb3QgZWxlbWVudCBvZiB0aGUgY29tcG9uZW50LlxuXHQgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0b3JIYW5kbGVycyBNYXAgb2YgZXZlbnQgaGFuZGxlcnMgYnkgdGhlaXIgQ1NTIHNlbGVjdG9ycy5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSBVbml2ZXJzYWwgZXZlbnQgaGFuZGxlciBmb3IgZGVsZWdhdGVkIGV2ZW50cy5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9jcmVhdGVCaW5kaW5nSGFuZGxlcihjb21wb25lbnRSb290LCBzZWxlY3RvckhhbmRsZXJzKSB7XG5cdFx0Y29uc3Qgc2VsZWN0b3JzID0gT2JqZWN0LmtleXMoc2VsZWN0b3JIYW5kbGVycyk7XG5cdFx0cmV0dXJuIGV2ZW50ID0+IHtcblx0XHRcdHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0Y29uc3QgZGlzcGF0Y2hlZEV2ZW50ID0gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnQsICgpID0+IGVsZW1lbnQpO1xuXHRcdFx0dmFyIHRhcmdldE1hdGNoZXMgPSBnZXRNYXRjaGVzTWV0aG9kKGVsZW1lbnQpO1xuXHRcdFx0dmFyIGlzSGFuZGxlZCA9IHNlbGVjdG9ycy5zb21lKHNlbGVjdG9yID0+IHtcblx0XHRcdFx0aWYgKHRhcmdldE1hdGNoZXMoc2VsZWN0b3IpKSB7XG5cdFx0XHRcdFx0c2VsZWN0b3JIYW5kbGVyc1tzZWxlY3Rvcl0oZGlzcGF0Y2hlZEV2ZW50KTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGlzSGFuZGxlZCB8fCAhZXZlbnQuYnViYmxlcykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHdoaWxlIChlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudCAhPT0gY29tcG9uZW50Um9vdCkge1xuXHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHR0YXJnZXRNYXRjaGVzID0gZ2V0TWF0Y2hlc01ldGhvZChlbGVtZW50KTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcblx0XHRcdFx0XHRpZiAoIXRhcmdldE1hdGNoZXMoc2VsZWN0b3IpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aXNIYW5kbGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRzZWxlY3RvckhhbmRsZXJzW3NlbGVjdG9yXShkaXNwYXRjaGVkRXZlbnQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzSGFuZGxlZCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgdGhlIGVsZW1lbnQgaXMgYSBjb21wb25lbnQuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb21wb25lbnRzIEN1cnJlbnQgY29tcG9uZW50cy5cblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IERPTSBlbGVtZW50LlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2lzQ29tcG9uZW50KGNvbXBvbmVudHMsIGVsZW1lbnQpIHtcblx0XHRjb25zdCBjdXJyZW50Tm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXHRcdHJldHVybiBtb2R1bGVIZWxwZXIuQ09NUE9ORU5UX1BSRUZJWF9SRUdFWFAudGVzdChjdXJyZW50Tm9kZU5hbWUpICYmXG5cdFx0XHQobW9kdWxlSGVscGVyLmdldE9yaWdpbmFsQ29tcG9uZW50TmFtZShjdXJyZW50Tm9kZU5hbWUpIGluIGNvbXBvbmVudHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmRzIGFsbCBkZXNjZW5kYW50IGNvbXBvbmVudHMgb2YgdGhlIHNwZWNpZmllZCBjb21wb25lbnQgZWxlbWVudC5cblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFJvb3QgY29tcG9uZW50J3MgSFRNTCBlbGVtZW50IHRvIGJlZ2luIHNlYXJjaCB3aXRoLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50cyBNYXAgb2YgY29tcG9uZW50cyBieSB0aGVpciBuYW1lcy5cblx0ICogQHBhcmFtIHtib29sZWFufSBnb0luQ29tcG9uZW50cyBHbyBpbnNpZGUgbmVzdGVkIGNvbXBvbmVudHMuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZmluZENvbXBvbmVudEVsZW1lbnRzKGVsZW1lbnQsIGNvbXBvbmVudHMsIGdvSW5Db21wb25lbnRzKSB7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSBbXTtcblx0XHRjb25zdCBxdWV1ZSA9IFtlbGVtZW50XTtcblxuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50Q2hpbGRyZW4gPSBxdWV1ZS5zaGlmdCgpLmNoaWxkTm9kZXM7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50Q2hpbGQgPSBjdXJyZW50Q2hpbGRyZW5baV07XG5cdFx0XHRcdC8vIHdlIG5lZWQgb25seSBFbGVtZW50IG5vZGVzXG5cdFx0XHRcdGlmIChjdXJyZW50Q2hpbGQubm9kZVR5cGUgIT09IDEpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGFuZCB0aGV5IHNob3VsZCBiZSBjb21wb25lbnRzXG5cdFx0XHRcdGlmICghdGhpcy5faXNDb21wb25lbnQoY29tcG9uZW50cywgY3VycmVudENoaWxkKSkge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goY3VycmVudENoaWxkKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChnb0luQ29tcG9uZW50cykge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goY3VycmVudENoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbGVtZW50cy5wdXNoKGN1cnJlbnRDaGlsZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtZW50cztcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGFuIGVycm9yIHdoaWxlIHJlbmRlcmluZy5cblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IENvbXBvbmVudCdzIEhUTUwgZWxlbWVudC5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudCBDb21wb25lbnQncyBpbnN0YW5jZS5cblx0ICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgRXJyb3IgdG8gaGFuZGxlLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBQcm9taXNlIGZvciBIVE1MIHN0cmluZy5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9oYW5kbGVSZW5kZXJFcnJvcihlbGVtZW50LCBjb21wb25lbnQsIGVycm9yKSB7XG5cdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Ly8gZG8gbm90IGNvcnJ1cHQgZXhpc3RlZCBIRUFEIHdoZW4gZXJyb3Igb2NjdXJzXG5cdFx0XHRcdGlmIChlbGVtZW50LnRhZ05hbWUgPT09IFRBR19OQU1FUy5IRUFEKSB7XG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLl9jb25maWcuaXNSZWxlYXNlICYmIGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdFx0XHRyZXR1cm4gZXJyb3JIZWxwZXIucHJldHR5UHJpbnQoZXJyb3IsIHRoaXMuX3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChjb21wb25lbnQuZXJyb3JUZW1wbGF0ZSkge1xuXHRcdFx0XHRcdHJldHVybiBjb21wb25lbnQuZXJyb3JUZW1wbGF0ZS5yZW5kZXIoZXJyb3IpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoKSA9PiAnJyk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyBhbGwgY29tcG9uZW50cyB0aGF0IGRlcGVuZCBvbiB0aGUgY3VycmVudCBzZXQgb2YgY2hhbmdlZCBzdG9yZXMuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3VwZGF0ZVN0b3JlQ29tcG9uZW50cygpIHtcblx0XHRpZiAodGhpcy5faXNVcGRhdGluZykge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdH1cblxuXHRcdC8vIGlmIGRvY3VtZW50IGNvbXBvbmVudCBpcyBjaGFuZ2VkIHdlIHNob3VsZCByZWxvYWQgdGhlIHBhZ2Vcblx0XHRjb25zdCBkb2N1bWVudFN0b3JlID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXG5cdFx0XHRtb2R1bGVIZWxwZXIuQVRUUklCVVRFX1NUT1JFXG5cdFx0KTtcblx0XHRpZiAoZG9jdW1lbnRTdG9yZSBpbiB0aGlzLl9jdXJyZW50Q2hhbmdlZFN0b3Jlcykge1xuXHRcdFx0Y29uc3QgbmV3TG9jYXRpb24gPSB0aGlzLl9jdXJyZW50Um91dGluZ0NvbnRleHQubG9jYXRpb24udG9TdHJpbmcoKTtcblx0XHRcdGlmIChuZXdMb2NhdGlvbiA9PT0gdGhpcy5fd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpIHtcblx0XHRcdFx0dGhpcy5fd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl93aW5kb3cubG9jYXRpb24uYXNzaWduKG5ld0xvY2F0aW9uKTtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9pc1VwZGF0aW5nID0gdHJ1ZTtcblxuXHRcdC8vIGlmIHdlIGhhdmUgYXdhaXRpbmcgcm91dGluZyB3ZSBzaG91bGQgYXBwbHkgc3RhdGUgdG8gdGhlIHN0b3Jlc1xuXHRcdGlmICh0aGlzLl9hd2FpdGluZ1JvdXRpbmcpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLl9jb21wb25lbnRMb2FkZXIuZ2V0Q29tcG9uZW50c0J5TmFtZXMoKTtcblx0XHRcdGNvbnN0IGNoYW5nZWRCeVN0YXRlID0gdGhpcy5fc3RvcmVEaXNwYXRjaGVyLnNldFN0YXRlKFxuXHRcdFx0XHR0aGlzLl9hd2FpdGluZ1JvdXRpbmcuc3RhdGUsXG5cdFx0XHRcdHRoaXMuX2F3YWl0aW5nUm91dGluZy5yb3V0aW5nQ29udGV4dFxuXHRcdFx0KTtcblxuXHRcdFx0Y2hhbmdlZEJ5U3RhdGUuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0dGhpcy5fY3VycmVudENoYW5nZWRTdG9yZXNbbmFtZV0gPSB0cnVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHdlIHNob3VsZCB1cGRhdGUgY29udGV4dHMgb2YgdGhlIHN0b3JlcyB3aXRoIHRoZSBuZXcgcm91dGluZyBjb250ZXh0XG5cdFx0XHR0aGlzLl9jdXJyZW50Um91dGluZ0NvbnRleHQgPSB0aGlzLl9hd2FpdGluZ1JvdXRpbmcucm91dGluZ0NvbnRleHQ7XG5cdFx0XHRPYmplY3Qua2V5cyh0aGlzLl9jb21wb25lbnRJbnN0YW5jZXMpXG5cdFx0XHRcdC5mb3JFYWNoKGlkID0+IHtcblx0XHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IHRoaXMuX2NvbXBvbmVudEluc3RhbmNlc1tpZF07XG5cdFx0XHRcdFx0aW5zdGFuY2UuJGNvbnRleHQgPSB0aGlzLl9nZXRDb21wb25lbnRDb250ZXh0KFxuXHRcdFx0XHRcdFx0Y29tcG9uZW50c1tpbnN0YW5jZS4kY29udGV4dC5uYW1lXSxcblx0XHRcdFx0XHRcdGluc3RhbmNlLiRjb250ZXh0LmVsZW1lbnRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHRoaXMuX2F3YWl0aW5nUm91dGluZyA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2hhbmdlZFN0b3JlcyA9IE9iamVjdC5rZXlzKHRoaXMuX2N1cnJlbnRDaGFuZ2VkU3RvcmVzKTtcblx0XHRpZiAoY2hhbmdlZFN0b3Jlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuX2lzVXBkYXRpbmcgPSBmYWxzZTtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9jdXJyZW50Q2hhbmdlZFN0b3JlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHRjb25zdCByZW5kZXJpbmdDb250ZXh0ID0gdGhpcy5fY3JlYXRlUmVuZGVyaW5nQ29udGV4dChjaGFuZ2VkU3RvcmVzKTtcblx0XHRjb25zdCBwcm9taXNlcyA9IHJlbmRlcmluZ0NvbnRleHQucm9vdHMubWFwKHJvb3QgPT4ge1xuXHRcdFx0cmVuZGVyaW5nQ29udGV4dC5yb290SWRzW3RoaXMuX2dldElkKHJvb3QpXSA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQocm9vdCwgcmVuZGVyaW5nQ29udGV4dCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHQuY2F0Y2gocmVhc29uID0+IHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2Vycm9yJywgcmVhc29uKSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0dGhpcy5faXNVcGRhdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdkb2N1bWVudFVwZGF0ZWQnLCBjaGFuZ2VkU3RvcmVzKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3VwZGF0ZVN0b3JlQ29tcG9uZW50cygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogTWVyZ2VzIG5ldyBhbmQgZXhpc3RlZCBoZWFkIGVsZW1lbnRzIGFuZCBhcHBsaWVzIG9ubHkgZGlmZmVyZW5jZS5cblx0ICogVGhlIHByb2JsZW0gaGVyZSBpcyB0aGF0IHdlIGNhbid0IHJlLWNyZWF0ZSBvciBjaGFuZ2Ugc2NyaXB0IGFuZCBzdHlsZSB0YWdzLFxuXHQgKiBiZWNhdXNlIGl0IGNhdXNlcyBibGlua2luZyBhbmQgSmF2YVNjcmlwdCByZS1pbml0aWFsaXphdGlvbi4gVGhlcmVmb3JlIHN1Y2hcblx0ICogZWxlbWVudCBtdXN0IGJlIGltbXV0YWJsZSBpbiB0aGUgSEVBRC5cblx0ICogQHBhcmFtIHtFbGVtZW50fSBoZWFkIEhFQUQgRE9NIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gbmV3SGVhZCBOZXcgSEVBRCBlbGVtZW50LlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X21lcmdlSGVhZChoZWFkLCBuZXdIZWFkKSB7XG5cdFx0aWYgKCFuZXdIZWFkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGVhZFNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHQvLyBnZXQgdW5pcXVlIGtleSBmb3IgZXZlcnkgY2hpbGQgZWxlbWVudCBpbiB0aGUgY3VycmVudCBIRUFEXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIWlzVGFnSW1tdXRhYmxlKGhlYWQuY2hpbGRyZW5baV0pKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qga2V5ID0gdGhpcy5fZ2V0RWxlbWVudEtleShoZWFkLmNoaWxkcmVuW2ldKTtcblx0XHRcdGhlYWRTZXRba2V5XSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gdGhlbiByZW1vdmUgZnJvbSB0aGUgbmV3IERPTSBhbGwgdGhlIGVsZW1lbnQgd2hpY2ggd2UgYWxyZWFkeSBoYXZlXG5cdFx0Ly8gaW4gdGhlIGN1cnJlbnQgRE9NLCB0byBza2lwIG1vcnBoaW5nIHRoZW1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld0hlYWQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGtleSA9IHRoaXMuX2dldEVsZW1lbnRLZXkobmV3SGVhZC5jaGlsZHJlbltpXSk7XG5cdFx0XHRpZiAoa2V5IGluIGhlYWRTZXQpIHtcblx0XHRcdFx0bmV3SGVhZC5yZW1vdmVDaGlsZChuZXdIZWFkLmNoaWxkcmVuW2ldKTtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG1vcnBoZG9tKGhlYWQsIG5ld0hlYWQsIHtcblx0XHRcdGNoaWxkcmVuT25seTogdHJ1ZSxcblx0XHRcdC8vIGluIGNhc2Ugd2UgaGF2ZSBhbiBpbW11dGFibGUgdGFnIHdpdGggY2hhbmdlZCBhdHRyaWJ1dGVcblx0XHRcdC8vIHNjcmlwdCB3aXRoIGNoYW5nZWQgXCJzcmNcIiBmb3IgaW5zdGFuY2Vcblx0XHRcdC8vIHdlIGhhdmUgdG8gcHV0IGl0IGF0IHRoZSBlbmQgYW5kIG5vdCBtb3JocGluZyBhbiBleGlzdGluZyBvbmVcblx0XHRcdC8vIG1vcnBoZG9tIHdpbGwgcHV0IGl0IGF0IHRoZSBlbmQgZm9yIHVzXG5cdFx0XHRvbkJlZm9yZU1vcnBoRWxDaGlsZHJlbjogKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpID0+ICFpc1RhZ0ltbXV0YWJsZShvbGRFbGVtZW50KSxcblx0XHRcdC8vIHdlIGNhbiByZW1vdmUgYWxsIGVsZW1lbnRzIGV4Y2VwdCBpbW11dGFibGUgb25lc1xuXHRcdFx0b25CZWZvcmVOb2RlRGlzY2FyZGVkOiBub2RlID0+ICFpc1RhZ0ltbXV0YWJsZShub2RlKVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYW4gdW5pcXVlIGVsZW1lbnQga2V5IHVzaW5nIGVsZW1lbnQncyBhdHRyaWJ1dGVzIGFuZCBpdHMgY29udGVudC5cblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IEhUTUwgZWxlbWVudC5cblx0ICogQHJldHVybnMge3N0cmluZ30gVW5pcXVlIGtleSBmb3IgdGhlIGVsZW1lbnQuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0RWxlbWVudEtleShlbGVtZW50KSB7XG5cdFx0aWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IE5PREVfVFlQRVMuRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG9ubHkgZGlmZmVyZW5jZSB3aXRoIGVsZW1lbnQub3V0ZXJIVE1MIGlzIHRoYXQgYWxsIGF0dHJpYnV0ZXMgYXJlIHNvcnRlZFxuXHRcdGNvbnN0IGF0dHJpYnV0ZXMgPSBbXTtcblx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGVzKCkpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnQgPSBlbGVtZW50LmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdGF0dHJpYnV0ZXMucHVzaChgJHtjdXJyZW50Lm5hbWV9PVwiJHtjdXJyZW50LnZhbHVlfVwiYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGA8JHtlbGVtZW50Lm5vZGVOYW1lfSAke2F0dHJpYnV0ZXMuc29ydCgpLmpvaW4oJyAnKX0+JHtlbGVtZW50LnRleHRDb250ZW50fTwvJHtlbGVtZW50Lm5vZGVOYW1lfT5gO1xuXHR9XG5cblx0LyoqXG5cdCAqIERvZXMgaW5pdGlhbCB3cmFwcGluZyBmb3IgZXZlcnkgY29tcG9uZW50IG9uIHRoZSBwYWdlLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50cyBDdXJyZW50IGNvbXBvbmVudHMgbWFwIGJ5IHRoZWlyIG5hbWVzLlxuXHQgKiBAcGFyYW0ge0FycmF5fSBlbGVtZW50cyBFbGVtZW50cyBsaXN0LlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2luaXRpYWxXcmFwKGNvbXBvbmVudHMsIGVsZW1lbnRzKSB7XG5cdFx0Y29uc3QgY3VycmVudCA9IGVsZW1lbnRzLnBvcCgpO1xuXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlkID0gdGhpcy5fZ2V0SWQoY3VycmVudCk7XG5cdFx0XHRcdGlmICghaWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IGNvbXBvbmVudE5hbWUgPSBtb2R1bGVIZWxwZXIuZ2V0T3JpZ2luYWxDb21wb25lbnROYW1lKGN1cnJlbnQubm9kZU5hbWUpO1xuXHRcdFx0XHRpZiAoIShjb21wb25lbnROYW1lIGluIGNvbXBvbmVudHMpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgQ29tcG9uZW50Q29uc3RydWN0b3IgPSBjb21wb25lbnRzW2NvbXBvbmVudE5hbWVdLmNvbnN0cnVjdG9yO1xuXHRcdFx0XHRDb21wb25lbnRDb25zdHJ1Y3Rvci5wcm90b3R5cGUuJGNvbnRleHQgPSB0aGlzLl9nZXRDb21wb25lbnRDb250ZXh0KFxuXHRcdFx0XHRcdGNvbXBvbmVudHNbY29tcG9uZW50TmFtZV0sIGN1cnJlbnRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRjb25zdCBpbnN0YW5jZSA9IG5ldyBDb21wb25lbnRDb25zdHJ1Y3Rvcih0aGlzLl9zZXJ2aWNlTG9jYXRvcik7XG5cdFx0XHRcdGluc3RhbmNlLiRjb250ZXh0ID0gQ29tcG9uZW50Q29uc3RydWN0b3IucHJvdG90eXBlLiRjb250ZXh0O1xuXHRcdFx0XHR0aGlzLl9jb21wb25lbnRFbGVtZW50c1tpZF0gPSBjdXJyZW50O1xuXHRcdFx0XHR0aGlzLl9jb21wb25lbnRJbnN0YW5jZXNbaWRdID0gaW5zdGFuY2U7XG5cdFx0XHRcdC8vIGluaXRpYWxpemUgdGhlIHN0b3JlIG9mIHRoZSBjb21wb25lbnRcblx0XHRcdFx0dGhpcy5fc3RvcmVEaXNwYXRjaGVyLmdldFN0b3JlKFxuXHRcdFx0XHRcdGN1cnJlbnQuZ2V0QXR0cmlidXRlKG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfU1RPUkUpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2NvbXBvbmVudFJlbmRlcmVkJywge1xuXHRcdFx0XHRcdG5hbWU6IGNvbXBvbmVudE5hbWUsXG5cdFx0XHRcdFx0YXR0cmlidXRlczogaW5zdGFuY2UuJGNvbnRleHQuYXR0cmlidXRlcyxcblx0XHRcdFx0XHRjb250ZXh0OiBpbnN0YW5jZS4kY29udGV4dFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2JpbmRDb21wb25lbnQoY3VycmVudCk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9pbml0aWFsV3JhcChjb21wb25lbnRzLCBlbGVtZW50cyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLl9ldmVudEJ1cy5lbWl0KFxuXHRcdFx0XHRcdCdkb2N1bWVudFJlbmRlcmVkJywgdGhpcy5fY3VycmVudFJvdXRpbmdDb250ZXh0XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIGNvbXBvbmVudCBjb250ZXh0IHVzaW5nIHRoZSBiYXNpYyBjb250ZXh0LlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50IENvbXBvbmVudCBkZXRhaWxzLlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgRE9NIGVsZW1lbnQgb2YgdGhlIGNvbXBvbmVudC5cblx0ICogQHJldHVybnMge09iamVjdH0gQ29tcG9uZW50J3MgY29udGV4dC5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRDb21wb25lbnRDb250ZXh0KGNvbXBvbmVudCwgZWxlbWVudCkge1xuXHRcdGNvbnN0IHN0b3JlTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfU1RPUkUpO1xuXHRcdGNvbnN0IGNvbXBvbmVudENvbnRleHQgPSBPYmplY3QuY3JlYXRlKHRoaXMuX2N1cnJlbnRSb3V0aW5nQ29udGV4dCk7XG5cblx0XHQvLyBpbml0aWFsaXplIHRoZSBzdG9yZSBvZiB0aGUgY29tcG9uZW50XG5cdFx0dGhpcy5fc3RvcmVEaXNwYXRjaGVyLmdldFN0b3JlKHN0b3JlTmFtZSk7XG5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb21wb25lbnRDb250ZXh0LCB7XG5cdFx0XHRuYW1lOiB7XG5cdFx0XHRcdGdldDogKCkgPT4gY29tcG9uZW50Lm5hbWUsXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGdldDogKCkgPT4gYXR0cmlidXRlc1RvT2JqZWN0KGVsZW1lbnQuYXR0cmlidXRlcyksXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbXBvbmVudENvbnRleHQuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0Y29tcG9uZW50Q29udGV4dC5nZXRDb21wb25lbnRCeUlkID0gaWQgPT4gdGhpcy5nZXRDb21wb25lbnRCeUlkKGlkKTtcblx0XHRjb21wb25lbnRDb250ZXh0LmdldENvbXBvbmVudEJ5RWxlbWVudCA9IGVsZW1lbnQgPT5cblx0XHRcdHRoaXMuZ2V0Q29tcG9uZW50QnlFbGVtZW50KGVsZW1lbnQpO1xuXHRcdGNvbXBvbmVudENvbnRleHQuY3JlYXRlQ29tcG9uZW50ID0gKHRhZ05hbWUsIGF0dHJpYnV0ZXMpID0+XG5cdFx0XHR0aGlzLmNyZWF0ZUNvbXBvbmVudCh0YWdOYW1lLCBhdHRyaWJ1dGVzKTtcblx0XHRjb21wb25lbnRDb250ZXh0LmNvbGxlY3RHYXJiYWdlID0gKCkgPT4gdGhpcy5jb2xsZWN0R2FyYmFnZSgpO1xuXHRcdGNvbXBvbmVudENvbnRleHQuZ2V0U3RvcmVEYXRhID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY3VycmVudFN0b3JlTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfU1RPUkUpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX3N0b3JlRGlzcGF0Y2hlci5nZXRTdG9yZURhdGEoY3VycmVudFN0b3JlTmFtZSk7XG5cdFx0fTtcblx0XHRjb21wb25lbnRDb250ZXh0LnNlbmRBY3Rpb24gPSAobmFtZSwgYXJncykgPT4ge1xuXHRcdFx0Y29uc3QgY3VycmVudFN0b3JlTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfU1RPUkUpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX3N0b3JlRGlzcGF0Y2hlci5zZW5kQWN0aW9uKGN1cnJlbnRTdG9yZU5hbWUsIG5hbWUsIGFyZ3MpO1xuXHRcdH07XG5cdFx0Y29tcG9uZW50Q29udGV4dC5zZW5kQnJvYWRjYXN0QWN0aW9uID0gKG5hbWUsIGFyZ3MpID0+XG5cdFx0XHR0aGlzLl9zdG9yZURpc3BhdGNoZXIuc2VuZEJyb2FkY2FzdEFjdGlvbihuYW1lLCBhcmdzKTtcblxuXHRcdHJldHVybiBPYmplY3QuZnJlZXplKGNvbXBvbmVudENvbnRleHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmRzIGFsbCByZW5kZXJpbmcgcm9vdHMgb24gdGhlIHBhZ2UgZm9yIGFsbCBjaGFuZ2VkIHN0b3Jlcy5cblx0ICogQHBhcmFtIHtBcnJheX0gY2hhbmdlZFN0b3JlTmFtZXMgTGlzdCBvZiBjaGFuZ2VkIHN0b3JlJ3MgbmFtZXMuXG5cdCAqIEByZXR1cm5zIHtBcnJheTxFbGVtZW50Pn0gSFRNTCBlbGVtZW50cyB0aGF0IGFyZSByZW5kZXJpbmcgcm9vdHMuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZmluZFJlbmRlcmluZ1Jvb3RzKGNoYW5nZWRTdG9yZU5hbWVzKSB7XG5cdFx0Y29uc3QgaGVhZFN0b3JlID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmhlYWQuZ2V0QXR0cmlidXRlKG1vZHVsZUhlbHBlci5BVFRSSUJVVEVfU1RPUkUpO1xuXHRcdGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLl9jb21wb25lbnRMb2FkZXIuZ2V0Q29tcG9uZW50c0J5TmFtZXMoKTtcblx0XHRjb25zdCBjb21wb25lbnRFbGVtZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0Y29uc3Qgc3RvcmVOYW1lc1NldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0Y29uc3Qgcm9vdHNTZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdGNvbnN0IHJvb3RzID0gW107XG5cblx0XHQvLyB3ZSBzaG91bGQgZmluZCBhbGwgY29tcG9uZW50cyBhbmQgdGhlbiBsb29raW5nIGZvciByb290c1xuXHRcdGNoYW5nZWRTdG9yZU5hbWVzXG5cdFx0XHQuZm9yRWFjaChzdG9yZU5hbWUgPT4ge1xuXHRcdFx0XHRzdG9yZU5hbWVzU2V0W3N0b3JlTmFtZV0gPSB0cnVlO1xuXHRcdFx0XHRjb21wb25lbnRFbGVtZW50c1tzdG9yZU5hbWVdID0gdGhpcy5fd2luZG93LmRvY3VtZW50XG5cdFx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3JBbGwoYFske21vZHVsZUhlbHBlci5BVFRSSUJVVEVfSUR9XVske21vZHVsZUhlbHBlci5BVFRSSUJVVEVfU1RPUkV9PVwiJHtzdG9yZU5hbWV9XCJdYCk7XG5cdFx0XHR9KTtcblxuXHRcdGlmIChtb2R1bGVIZWxwZXIuSEVBRF9DT01QT05FTlRfTkFNRSBpbiBjb21wb25lbnRzICYmIGhlYWRTdG9yZSBpbiBzdG9yZU5hbWVzU2V0KSB7XG5cdFx0XHRyb290c1NldFt0aGlzLl9nZXRJZCh0aGlzLl93aW5kb3cuZG9jdW1lbnQuaGVhZCldID0gdHJ1ZTtcblx0XHRcdHJvb3RzLnB1c2godGhpcy5fd2luZG93LmRvY3VtZW50LmhlYWQpO1xuXHRcdH1cblxuXHRcdGNoYW5nZWRTdG9yZU5hbWVzXG5cdFx0XHQuZm9yRWFjaChzdG9yZU5hbWUgPT4ge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBvbmVudEVsZW1lbnRzW3N0b3JlTmFtZV0ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50ID0gY29tcG9uZW50RWxlbWVudHNbc3RvcmVOYW1lXVtpXTtcblx0XHRcdFx0XHRsZXQgY3VycmVudFJvb3QgPSBjdXJyZW50O1xuXHRcdFx0XHRcdGxldCBsYXN0Um9vdCA9IGN1cnJlbnRSb290O1xuXHRcdFx0XHRcdGxldCBsYXN0Um9vdElkID0gdGhpcy5fZ2V0SWQoY3VycmVudCk7XG5cblx0XHRcdFx0XHR3aGlsZSAoY3VycmVudFJvb3QucGFyZW50RWxlbWVudCkge1xuXHRcdFx0XHRcdFx0Y3VycmVudFJvb3QgPSBjdXJyZW50Um9vdC5wYXJlbnRFbGVtZW50O1xuXG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50SWQgPSB0aGlzLl9nZXRJZChjdXJyZW50Um9vdCk7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50U3RvcmUgPSBjdXJyZW50Um9vdC5nZXRBdHRyaWJ1dGUobW9kdWxlSGVscGVyLkFUVFJJQlVURV9TVE9SRSk7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50Q29tcG9uZW50TmFtZSA9IG1vZHVsZUhlbHBlci5nZXRPcmlnaW5hbENvbXBvbmVudE5hbWUoY3VycmVudFJvb3QudGFnTmFtZSk7XG5cblx0XHRcdFx0XHRcdC8vIHN0b3JlIGRpZCBub3QgY2hhbmdlIHN0YXRlXG5cdFx0XHRcdFx0XHRpZiAoIWN1cnJlbnRTdG9yZSB8fCAhKGN1cnJlbnRTdG9yZSBpbiBzdG9yZU5hbWVzU2V0KSkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gaXMgbm90IGFuIGFjdGl2ZSBjb21wb25lbnRcblx0XHRcdFx0XHRcdGlmICghKGN1cnJlbnRDb21wb25lbnROYW1lIGluIGNvbXBvbmVudHMpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsYXN0Um9vdCA9IGN1cnJlbnRSb290O1xuXHRcdFx0XHRcdFx0bGFzdFJvb3RJZCA9IGN1cnJlbnRJZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAobGFzdFJvb3RJZCBpbiByb290c1NldCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJvb3RzU2V0W2xhc3RSb290SWRdID0gdHJ1ZTtcblx0XHRcdFx0XHRyb290cy5wdXNoKGxhc3RSb290KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gcm9vdHM7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHJlbmRlcmluZyBjb250ZXh0LlxuXHQgKiBAcGFyYW0ge0FycmF5P30gY2hhbmdlZFN0b3JlcyBOYW1lcyBvZiBjaGFuZ2VkIHN0b3Jlcy5cblx0ICogQHJldHVybnMge3tcblx0ICogICBjb25maWc6IE9iamVjdCxcblx0ICogICByZW5kZXJlZElkczoge30sXG5cdCAqICAgdW5ib3VuZElkczoge30sXG5cdCAqICAgaXNIZWFkUmVuZGVyZWQ6IGJvb2xlYW4sXG5cdCAqICAgYmluZE1ldGhvZHM6IEFycmF5LFxuXHQgKiAgIHJvdXRpbmdDb250ZXh0OiBPYmplY3QsXG5cdCAqICAgY29tcG9uZW50czogT2JqZWN0LFxuXHQgKiAgIHJvb3RzOiBBcnJheS48RWxlbWVudD5cblx0ICogfX0gVGhlIGNvbnRleHQgb2JqZWN0LlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2NyZWF0ZVJlbmRlcmluZ0NvbnRleHQoY2hhbmdlZFN0b3Jlcykge1xuXHRcdGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLl9jb21wb25lbnRMb2FkZXIuZ2V0Q29tcG9uZW50c0J5TmFtZXMoKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWc6IHRoaXMuX2NvbmZpZyxcblx0XHRcdHJlbmRlcmVkSWRzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXHRcdFx0dW5ib3VuZElkczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblx0XHRcdGlzSGVhZFJlbmRlcmVkOiBmYWxzZSxcblx0XHRcdGJpbmRNZXRob2RzOiBbXSxcblx0XHRcdHJvdXRpbmdDb250ZXh0OiB0aGlzLl9jdXJyZW50Um91dGluZ0NvbnRleHQsXG5cdFx0XHRjb21wb25lbnRzLFxuXHRcdFx0cm9vdElkczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblx0XHRcdHJvb3RzOiBjaGFuZ2VkU3RvcmVzID8gdGhpcy5fZmluZFJlbmRlcmluZ1Jvb3RzKGNoYW5nZWRTdG9yZXMpIDogW11cblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYW4gSUQgb2YgdGhlIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBIVE1MIGVsZW1lbnQgb2YgdGhlIGNvbXBvbmVudC5cblx0ICogQHJldHVybnMge3N0cmluZ30gSUQuXG5cdCAqL1xuXHRfZ2V0SWQoZWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50ID09PSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gU1BFQ0lBTF9JRFMuJCRkb2N1bWVudDtcblx0XHR9XG5cdFx0aWYgKGVsZW1lbnQgPT09IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5oZWFkKSB7XG5cdFx0XHRyZXR1cm4gU1BFQ0lBTF9JRFMuJCRoZWFkO1xuXHRcdH1cblx0XHRyZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobW9kdWxlSGVscGVyLkFUVFJJQlVURV9JRCk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHRlbXBvcmFyeSBjbG9uZSBvZiB0aGUgZWxlbWVudC5cblx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IERPTSBlbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7RWxlbWVudH0gQ2xvbmUgZWxlbWVudC5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9jcmVhdGVUZW1wb3JhcnlFbGVtZW50KGVsZW1lbnQpIHtcblx0XHRjb25zdCB0bXAgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LnRhZ05hbWUpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBlbGVtZW50LmF0dHJpYnV0ZXNbaV07XG5cdFx0XHR0bXAuc2V0QXR0cmlidXRlKGN1cnJlbnQubmFtZSwgY3VycmVudC52YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0bXA7XG5cdH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBOYW1lZE5vZGVNYXAgb2YgQXR0ciBpdGVtcyB0byB0aGUga2V5LXZhbHVlIG9iamVjdCBtYXAuXG4gKiBAcGFyYW0ge05hbWVkTm9kZU1hcH0gYXR0cmlidXRlcyBMaXN0IG9mIEVsZW1lbnQgYXR0cmlidXRlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IE1hcCBvZiBhdHRyaWJ1dGUgdmFsdWVzIGJ5IHRoZWlyIG5hbWVzLlxuICovXG5mdW5jdGlvbiBhdHRyaWJ1dGVzVG9PYmplY3QoYXR0cmlidXRlcykge1xuXHRjb25zdCByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjdXJyZW50ID0gYXR0cmlidXRlc1tpXTtcblx0XHRyZXN1bHRbY3VycmVudC5uYW1lXSA9IGN1cnJlbnQudmFsdWU7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIGEgY3Jvc3MtYnJvd3NlciBcIm1hdGNoZXNcIiBtZXRob2QgZm9yIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IEhUTUwgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gXCJtYXRjaGVzXCIgbWV0aG9kLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaGVzTWV0aG9kKGVsZW1lbnQpIHtcblx0Y29uc3QgbWV0aG9kID0gKGVsZW1lbnQubWF0Y2hlcyB8fFxuXHRcdGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yKTtcblxuXHRyZXR1cm4gbWV0aG9kLmJpbmQoZWxlbWVudCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpbWl0YXRpb24gb2YgdGhlIG9yaWdpbmFsIEV2ZW50IG9iamVjdCBidXQgd2l0aCBzcGVjaWZpZWQgY3VycmVudFRhcmdldC5cbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IE9yaWdpbmFsIGV2ZW50IG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1cnJlbnRUYXJnZXRHZXR0ZXIgR2V0dGVyIGZvciB0aGUgY3VycmVudFRhcmdldC5cbiAqIEByZXR1cm5zIHtFdmVudH0gV3JhcHBlZCBldmVudC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnQsIGN1cnJlbnRUYXJnZXRHZXR0ZXIpIHtcblx0Y29uc3QgY2F0RXZlbnQgPSBPYmplY3QuY3JlYXRlKGV2ZW50KTtcblx0Y29uc3Qga2V5cyA9IFtdO1xuXHRjb25zdCBwcm9wZXJ0aWVzID0ge307XG5cblx0LyogZXNsaW50IGd1YXJkLWZvci1pbjogMCAqL1xuXHRmb3IgKGNvbnN0IGtleSBpbiBldmVudCkge1xuXHRcdGtleXMucHVzaChrZXkpO1xuXHR9XG5cdGtleXMuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGlmICh0eXBlb2YgKGV2ZW50W2tleV0pID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRwcm9wZXJ0aWVzW2tleV0gPSB7XG5cdFx0XHRcdGdldDogKCkgPT4gZXZlbnRba2V5XS5iaW5kKGV2ZW50KVxuXHRcdFx0fTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRwcm9wZXJ0aWVzW2tleV0gPSB7XG5cdFx0XHRnZXQ6ICgpID0+IGV2ZW50W2tleV0sXG5cdFx0XHRzZXQ6IHZhbHVlID0+IHtcblx0XHRcdFx0ZXZlbnRba2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xuXG5cdHByb3BlcnRpZXMuY3VycmVudFRhcmdldCA9IHtcblx0XHRnZXQ6IGN1cnJlbnRUYXJnZXRHZXR0ZXJcblx0fTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2F0RXZlbnQsIHByb3BlcnRpZXMpO1xuXHRPYmplY3Quc2VhbChjYXRFdmVudCk7XG5cdE9iamVjdC5mcmVlemUoY2F0RXZlbnQpO1xuXHRyZXR1cm4gY2F0RXZlbnQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHdlIGNhbiBtdXRhdGUgdGhlIHNwZWNpZmllZCBIVE1MIHRhZy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBUaGUgRE9NIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBlbGVtZW50IHNob3VsZCBub3QgYmUgbXV0YXRlZC5cbiAqL1xuZnVuY3Rpb24gaXNUYWdJbW11dGFibGUoZWxlbWVudCkge1xuXHQvLyB0aGVzZSAzIGtpbmRzIG9mIHRhZ3Mgb25jZSBsb2FkZWQgY2FuIG5vdCBiZSByZW1vdmVkXG5cdC8vIG90aGVyd2lzZSBpdCB3aWxsIGNhdXNlIHN0eWxlIG9yIHNjcmlwdCByZWxvYWRpbmdcblx0cmV0dXJuIGVsZW1lbnQubm9kZU5hbWUgPT09IFRBR19OQU1FUy5TQ1JJUFQgfHxcblx0XHRlbGVtZW50Lm5vZGVOYW1lID09PSBUQUdfTkFNRVMuU1RZTEUgfHxcblx0XHRlbGVtZW50Lm5vZGVOYW1lID09PSBUQUdfTkFNRVMuTElOSyAmJlxuXHRcdGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyZWwnKSA9PT0gJ3N0eWxlc2hlZXQnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvY3VtZW50UmVuZGVyZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFVSSSA9IHJlcXVpcmUoJ2NhdGJlcnJ5LXVyaScpLlVSSTtcblxuY29uc3QgTU9VU0VfUFJJTUFSWV9LRVkgPSAwO1xuY29uc3QgSFJFRl9BVFRSSUJVVEVfTkFNRSA9ICdocmVmJztcbmNvbnN0IFRBUkdFVF9BVFRSSUJVVEVfTkFNRSA9ICd0YXJnZXQnO1xuY29uc3QgQV9UQUdfTkFNRSA9ICdBJztcbmNvbnN0IEJPRFlfVEFHX05BTUUgPSAnQk9EWSc7XG5cbmNsYXNzIFJlcXVlc3RSb3V0ZXIge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBicm93c2VyIHJlcXVlc3Qgcm91dGVyLlxuXHQgKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSBsb2NhdG9yIFRoZSBzZXJ2aWNlIGxvY2F0b3IgZm9yIHJlc29sdmluZyBkZXBlbmRlbmNpZXMuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihsb2NhdG9yKSB7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGV2ZW50IGJ1cy5cblx0XHQgKiBAdHlwZSB7RXZlbnRFbWl0dGVyfVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fZXZlbnRCdXMgPSBsb2NhdG9yLnJlc29sdmUoJ2V2ZW50QnVzJyk7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGJyb3dzZXIgd2luZG93LlxuXHRcdCAqIEB0eXBlIHtXaW5kb3d9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl93aW5kb3cgPSBsb2NhdG9yLnJlc29sdmUoJ3dpbmRvdycpO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBkb2N1bWVudCByZW5kZXJlci5cblx0XHQgKiBAdHlwZSB7RG9jdW1lbnRSZW5kZXJlcn1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2RvY3VtZW50UmVuZGVyZXIgPSBsb2NhdG9yLnJlc29sdmUoJ2RvY3VtZW50UmVuZGVyZXInKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc3RhdGUgcHJvdmlkZXIuXG5cdFx0ICogQHR5cGUge1N0YXRlUHJvdmlkZXJ9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9zdGF0ZVByb3ZpZGVyID0gbG9jYXRvci5yZXNvbHZlKCdzdGF0ZVByb3ZpZGVyJyk7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGNvbnRleHQgZmFjdG9yeS5cblx0XHQgKiBAdHlwZSB7Q29udGV4dEZhY3Rvcnl9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9jb250ZXh0RmFjdG9yeSA9IGxvY2F0b3IucmVzb2x2ZSgnY29udGV4dEZhY3RvcnknKTtcblxuXHRcdC8qKlxuXHRcdCAqIFRydWUgaWYgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGhpc3RvcnkgQVBJLlxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5faXNIaXN0b3J5U3VwcG9ydGVkID0gdGhpcy5fd2luZG93Lmhpc3RvcnkgJiZcblx0XHRcdHRoaXMuX3dpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuXG5cdFx0Ly8gYWRkIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5fd3JhcERvY3VtZW50KCk7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGxvY2F0aW9uLlxuXHRcdCAqIEB0eXBlIHtVUkl9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9sb2NhdGlvbiA9IG5ldyBVUkkodGhpcy5fd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpO1xuXG5cdFx0Ly8gc2V0IGluaXRpYWwgc3RhdGUgZnJvbSBjdXJyZW50IFVSSVxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc3RhdGUuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3N0YXRlID0gdGhpcy5fc3RhdGVQcm92aWRlci5nZXRTdGF0ZUJ5VXJpKHRoaXMuX2xvY2F0aW9uKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgaW5pdGlhbGl6YXRpb24gZmxhZy5cblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2lzU3RhdGVJbml0aWFsaXplZCA9IGZhbHNlO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCByZWZlcnJlci5cblx0XHQgKiBAdHlwZSB7VVJJfVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fcmVmZXJyZXIgPSAnJztcblxuXHRcdHRoaXMuX2NoYW5nZVN0YXRlKHRoaXMuX3N0YXRlKVxuXHRcdFx0LmNhdGNoKHJlYXNvbiA9PiB0aGlzLl9oYW5kbGVFcnJvcihyZWFzb24pKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSb3V0ZXMgYSBicm93c2VyIHJlbmRlciByZXF1ZXN0LlxuXHQgKiBAcGFyYW0ge1VSSX0gbmV3TG9jYXRpb24gTmV3IGxvY2F0aW9uLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cblx0ICovXG5cdHJvdXRlKG5ld0xvY2F0aW9uKSB7XG5cdFx0Ly8gYmVjYXVzZSBub3cgbG9jYXRpb24gd2FzIG5vdCBjaGFuZ2UgeWV0IGFuZFxuXHRcdC8vIGRpZmZlcmVudCBicm93c2VycyBoYW5kbGUgYHBvcHN0YXRlYCBkaWZmZXJlbnRseVxuXHRcdC8vIHdlIG5lZWQgdG8gZG8gcm91dGUgaW4gbmV4dCBpdGVyYXRpb24gb2YgZXZlbnQgbG9vcFxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IHRoaXMuX3N0YXRlUHJvdmlkZXIuZ2V0U3RhdGVCeVVyaShuZXdMb2NhdGlvbik7XG5cdFx0XHRcdGNvbnN0IG5ld0xvY2F0aW9uU3RyaW5nID0gbmV3TG9jYXRpb24udG9TdHJpbmcoKTtcblxuXHRcdFx0XHRpZiAoIXN0YXRlKSB7XG5cdFx0XHRcdFx0dGhpcy5fd2luZG93LmxvY2F0aW9uLmFzc2lnbihuZXdMb2NhdGlvblN0cmluZyk7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiBvbmx5IFVSSSBmcmFnbWVudCBpcyBjaGFuZ2VkXG5cdFx0XHRcdGNvbnN0IG5ld1F1ZXJ5ID0gbmV3TG9jYXRpb24ucXVlcnkgP1xuXHRcdFx0XHRcdFx0bmV3TG9jYXRpb24ucXVlcnkudG9TdHJpbmcoKSA6IG51bGw7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRRdWVyeSA9IHRoaXMuX2xvY2F0aW9uLnF1ZXJ5ID9cblx0XHRcdFx0XHRcdHRoaXMuX2xvY2F0aW9uLnF1ZXJ5LnRvU3RyaW5nKCkgOiBudWxsO1xuXHRcdFx0XHRpZiAobmV3TG9jYXRpb24ucGF0aCA9PT0gdGhpcy5fbG9jYXRpb24ucGF0aCAmJiBuZXdRdWVyeSA9PT0gY3VycmVudFF1ZXJ5KSB7XG5cdFx0XHRcdFx0dGhpcy5fbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9sb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fY2hhbmdlU3RhdGUoc3RhdGUpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBhbiBhcHBsaWNhdGlvbiBzdGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBVUkkuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblN0cmluZyBVUkkgdG8gZ28uXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuXHQgKi9cblx0Z28obG9jYXRpb25TdHJpbmcpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Y29uc3QgbmV3TG9jYXRpb24gPSAobmV3IFVSSShsb2NhdGlvblN0cmluZykpLnJlc29sdmVSZWxhdGl2ZSh0aGlzLl9sb2NhdGlvbik7XG5cdFx0XHRcdGNvbnN0IG5ld0xvY2F0aW9uU3RyaW5nID0gbmV3TG9jYXRpb24udG9TdHJpbmcoKTtcblx0XHRcdFx0Y29uc3QgY3VycmVudEF1dGhvcml0eSA9IHRoaXMuX2xvY2F0aW9uLmF1dGhvcml0eSA/XG5cdFx0XHRcdFx0XHR0aGlzLl9sb2NhdGlvbi5hdXRob3JpdHkudG9TdHJpbmcoKSA6IG51bGw7XG5cdFx0XHRcdGNvbnN0IG5ld0F1dGhvcml0eSA9IG5ld0xvY2F0aW9uLmF1dGhvcml0eSA/XG5cdFx0XHRcdFx0XHRuZXdMb2NhdGlvbi5hdXRob3JpdHkudG9TdHJpbmcoKSA6IG51bGw7XG5cblx0XHRcdFx0Ly8gd2UgbXVzdCBjaGVjayBpZiB0aGlzIGlzIGFuIGV4dGVybmFsIGxpbmsgYmVmb3JlIG1hcCBVUklcblx0XHRcdFx0Ly8gdG8gaW50ZXJuYWwgYXBwbGljYXRpb24gc3RhdGVcblx0XHRcdFx0aWYgKCF0aGlzLl9pc0hpc3RvcnlTdXBwb3J0ZWQgfHxcblx0XHRcdFx0XHRuZXdMb2NhdGlvbi5zY2hlbWUgIT09IHRoaXMuX2xvY2F0aW9uLnNjaGVtZSB8fFxuXHRcdFx0XHRcdG5ld0F1dGhvcml0eSAhPT0gY3VycmVudEF1dGhvcml0eSkge1xuXHRcdFx0XHRcdHRoaXMuX3dpbmRvdy5sb2NhdGlvbi5hc3NpZ24obmV3TG9jYXRpb25TdHJpbmcpO1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMucm91dGUobmV3TG9jYXRpb24pXG5cdFx0XHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5fd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFxuXHRcdFx0XHRcdFx0dGhpcy5fc3RhdGUsICcnLCB0aGlzLl9sb2NhdGlvbi50b1N0cmluZygpXG5cdFx0XHRcdFx0KSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGFuZ2VzIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIHN0YXRlIHdpdGggdGhlIG5ldyBsb2NhdGlvbi5cblx0ICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIE5ldyBzdGF0ZS5cblx0ICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY2hhbmdlU3RhdGUoc3RhdGUpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Y29uc3Qgcm91dGluZ0NvbnRleHQgPSB0aGlzLl9jb250ZXh0RmFjdG9yeS5jcmVhdGUoe1xuXHRcdFx0XHRcdHJlZmVycmVyOiB0aGlzLl9yZWZlcnJlciB8fCB0aGlzLl93aW5kb3cuZG9jdW1lbnQucmVmZXJyZXIsXG5cdFx0XHRcdFx0bG9jYXRpb246IHRoaXMuX2xvY2F0aW9uLFxuXHRcdFx0XHRcdHVzZXJBZ2VudDogdGhpcy5fd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gZm9yIFwibm90IGZvdW5kXCIgc3RhdGVcblx0XHRcdFx0aWYgKHN0YXRlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy5fd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLl9pc1N0YXRlSW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9pc1N0YXRlSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9kb2N1bWVudFJlbmRlcmVyLmluaXRXaXRoU3RhdGUoc3RhdGUsIHJvdXRpbmdDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0aGlzLl9kb2N1bWVudFJlbmRlcmVyLnJlbmRlcihzdGF0ZSwgcm91dGluZ0NvbnRleHQpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0dGhpcy5fc3RhdGUgPSBzdGF0ZTtcblx0XHRcdFx0dGhpcy5fcmVmZXJyZXIgPSB0aGlzLl9sb2NhdGlvbjtcblx0XHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFdyYXBzIHRoZSBkb2N1bWVudCB3aXRoIHJlcXVpcmVkIGV2ZW50cyB0byByb3V0ZSByZXF1ZXN0cy5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF93cmFwRG9jdW1lbnQoKSB7XG5cdFx0aWYgKCF0aGlzLl9pc0hpc3RvcnlTdXBwb3J0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PlxuXHRcdFx0dGhpcy5yb3V0ZShuZXcgVVJJKHRoaXMuX3dpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKSlcblx0XHRcdFx0LmNhdGNoKHJlYXNvbiA9PiB0aGlzLl9oYW5kbGVFcnJvcihyZWFzb24pKVxuXHRcdCk7XG5cblx0XHR0aGlzLl93aW5kb3cuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcblx0XHRcdGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gQV9UQUdfTkFNRSkge1xuXHRcdFx0XHR0aGlzLl9saW5rQ2xpY2tIYW5kbGVyKGV2ZW50LCBldmVudC50YXJnZXQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgbGluayA9IGNsb3Nlc3RMaW5rKGV2ZW50LnRhcmdldCk7XG5cdFx0XHRcdGlmICghbGluaykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9saW5rQ2xpY2tIYW5kbGVyKGV2ZW50LCBsaW5rKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGEgbGluayBjbGljayBvbiB0aGUgcGFnZS5cblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQtcmVsYXRlZCBvYmplY3QuXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCBMaW5rIGVsZW1lbnQuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfbGlua0NsaWNrSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuXHRcdGNvbnN0IHRhcmdldEF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFRBUkdFVF9BVFRSSUJVVEVfTkFNRSk7XG5cdFx0aWYgKHRhcmdldEF0dHJpYnV0ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGlmIG1pZGRsZSBtb3VzZSBidXR0b24gd2FzIGNsaWNrZWRcblx0XHRpZiAoZXZlbnQuYnV0dG9uICE9PSBNT1VTRV9QUklNQVJZX0tFWSB8fFxuXHRcdFx0ZXZlbnQuY3RybEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQubWV0YUtleSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxvY2F0aW9uU3RyaW5nID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoSFJFRl9BVFRSSUJVVEVfTkFNRSk7XG5cdFx0aWYgKCFsb2NhdGlvblN0cmluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAobG9jYXRpb25TdHJpbmdbMF0gPT09ICcjJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5nbyhsb2NhdGlvblN0cmluZylcblx0XHRcdC5jYXRjaChyZWFzb24gPT4gdGhpcy5faGFuZGxlRXJyb3IocmVhc29uKSk7XG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBhbGwgZXJyb3JzLlxuXHQgKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBFcnJvciB0byBoYW5kbGUuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfaGFuZGxlRXJyb3IoZXJyb3IpIHtcblx0XHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdlcnJvcicsIGVycm9yKTtcblx0fVxufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBjbG9zZXN0IGFzY2VuZGluZyBcIkFcIiBlbGVtZW50IG5vZGUuXG4gKiBAcGFyYW0ge05vZGV9IGVsZW1lbnQgRE9NIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Tm9kZXxudWxsfSBUaGUgY2xvc2VzdCBcIkFcIiBlbGVtZW50IG9yIG51bGwuXG4gKi9cbmZ1bmN0aW9uIGNsb3Nlc3RMaW5rKGVsZW1lbnQpIHtcblx0d2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlTmFtZSAhPT0gQV9UQUdfTkFNRSAmJlxuXHRcdGVsZW1lbnQubm9kZU5hbWUgIT09IEJPRFlfVEFHX05BTUUpIHtcblx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXHR9XG5cdHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQubm9kZU5hbWUgPT09IEFfVEFHX05BTUUgPyBlbGVtZW50IDogbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0Um91dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgaGlnaCByZXNvbHV0aW9uIHRpbWUgb3IgdGhlIGRpZmZlcmVuY2UgYmV0d2VlblxuXHQgKiBwcmV2aW91cyBhbmQgY3VycmVudCB0aW1lLlxuXHQgKiBAcGFyYW0ge0FycmF5P30gUHJldmlvdXMgaGlnaCByZXNvbHV0aW9uIHRpbWVzdGFtcC5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgaGlnaCByZXNvbHV0aW9uIHRpbWUuXG5cdCAqL1xuXHRnZXQ6IHJlcXVpcmUoJ2Jyb3dzZXItcHJvY2Vzcy1ocnRpbWUnKSxcblxuXHQvKipcblx0ICogQ29udmVydHMgdGhlIGhpZ2ggcmVzb2x1dGlvbiB0aW1lc3RhbXAgdG8gdGV4dCBtZXNzYWdlLlxuXHQgKiBAcGFyYW0ge0FycmF5fVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaW1lIG1lc3NhZ2UuXG5cdCAqL1xuXHR0b01lc3NhZ2U6IHJlcXVpcmUoJ3ByZXR0eS1ocnRpbWUnKSxcblxuXHQvKipcblx0ICogQ29udmVydHMgaGlnaCByZXNvbHV0aW9uIHRpbWUgdG8gbWlsbGlzZWNvbmRzIG51bWJlci5cblx0ICogQHBhcmFtIHtBcnJheX0gaHJUaW1lIEhpZ2ggcmVzb2x1dGlvbiB0aW1lIHR1cGxlLlxuXHQgKi9cblx0dG9NaWxsaXNlY29uZHM6IGhyVGltZSA9PiBoclRpbWVbMF0gKiAxZTMgKyBNYXRoLnJvdW5kKGhyVGltZVsxXSAvIDFlNilcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1vZHVsZUhlbHBlciA9IHJlcXVpcmUoJy4uLy4uL2xpYi9oZWxwZXJzL21vZHVsZUhlbHBlcicpO1xuY29uc3QgTG9hZGVyQmFzZSA9IHJlcXVpcmUoJy4uLy4uL2xpYi9iYXNlL0xvYWRlckJhc2UnKTtcblxuY2xhc3MgQ29tcG9uZW50TG9hZGVyIGV4dGVuZHMgTG9hZGVyQmFzZSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBsb2FkZXIuXG5cdCAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGxvY2F0b3IgVGhlIHNlcnZpY2UgbG9jYXRvciBmb3IgcmVzb2x2aW5nIGRlcGVuZGVuY2llcy5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGxvY2F0b3IpIHtcblx0XHR2YXIgY29tcG9uZW50VHJhbnNmb3Jtcztcblx0XHR0cnkge1xuXHRcdFx0Y29tcG9uZW50VHJhbnNmb3JtcyA9IGxvY2F0b3IucmVzb2x2ZUFsbCgnY29tcG9uZW50VHJhbnNmb3JtJyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tcG9uZW50VHJhbnNmb3JtcyA9IFtdO1xuXHRcdH1cblx0XHRzdXBlcihsb2NhdG9yLCBjb21wb25lbnRUcmFuc2Zvcm1zKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc2VydmljZSBsb2NhdG9yLlxuXHRcdCAqIEB0eXBlIHtTZXJ2aWNlTG9jYXRvcn1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3NlcnZpY2VMb2NhdG9yID0gbG9jYXRvcjtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgZXZlbnQgYnVzLlxuXHRcdCAqIEB0eXBlIHtFdmVudEVtaXR0ZXJ9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9ldmVudEJ1cyA9IGxvY2F0b3IucmVzb2x2ZSgnZXZlbnRCdXMnKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgdGVtcGxhdGUgcHJvdmlkZXIuXG5cdFx0ICogQHR5cGUge1RlbXBsYXRlUHJvdmlkZXJ9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl90ZW1wbGF0ZVByb3ZpZGVyID0gbG9jYXRvci5yZXNvbHZlKCd0ZW1wbGF0ZVByb3ZpZGVyJyk7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IG1hcCBvZiBsb2FkZWQgY29tcG9uZW50cyBieSBuYW1lcy5cblx0XHQgKiBAdHlwZSB7T2JqZWN0fSBNYXAgb2YgY29tcG9uZW50cyBieSBuYW1lcy5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2xvYWRlZENvbXBvbmVudHMgPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIExvYWRzIGNvbXBvbmVudHMgaW5zaWRlIHRoZSBicm93c2VyIGJ1bmRsZS5cblx0ICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gVGhlIHByb21pc2UgZm9yIGxvYWRlZCBjb21wb25lbnRzLlxuXHQgKi9cblx0bG9hZCgpIHtcblx0XHRpZiAodGhpcy5fbG9hZGVkQ29tcG9uZW50cykge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sb2FkZWRDb21wb25lbnRzKTtcblx0XHR9XG5cblx0XHR0aGlzLl9sb2FkZWRDb21wb25lbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5fc2VydmljZUxvY2F0b3IucmVzb2x2ZUFsbCgnY29tcG9uZW50JykpXG5cdFx0XHQuY2F0Y2goKCkgPT4gW10pXG5cdFx0XHQudGhlbihjb21wb25lbnRzID0+IHtcblx0XHRcdFx0Y29uc3QgY29tcG9uZW50UHJvbWlzZXMgPSBbXTtcblx0XHRcdFx0Ly8gdGhlIGxpc3QgaXMgYSBzdGFjaywgd2Ugc2hvdWxkIHJldmVyc2UgaXRcblx0XHRcdFx0Y29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFjb21wb25lbnQgfHwgdHlwZW9mIChjb21wb25lbnQpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb21wb25lbnRQcm9taXNlcy51bnNoaWZ0KHRoaXMuX3Byb2Nlc3NDb21wb25lbnQoY29tcG9uZW50KSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoY29tcG9uZW50UHJvbWlzZXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKGNvbXBvbmVudHMgPT4ge1xuXHRcdFx0XHRjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcblx0XHRcdFx0XHRpZiAoIWNvbXBvbmVudCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9sb2FkZWRDb21wb25lbnRzW2NvbXBvbmVudC5uYW1lXSA9IGNvbXBvbmVudDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuX2V2ZW50QnVzLmVtaXQoJ2FsbENvbXBvbmVudHNMb2FkZWQnLCBjb21wb25lbnRzKTtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2xvYWRlZENvbXBvbmVudHM7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQcm9jZXNzZXMgYSBjb21wb25lbnQgYW5kIGFwcGxpZXMgcmVxdWlyZWQgb3BlcmF0aW9ucy5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudERldGFpbHMgVGhlIGxvYWRlZCBjb21wb25lbnQgZGV0YWlscy5cblx0ICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gVGhlIHByb21pc2UgZm9yIHRoZSBjb21wb25lbnQgb2JqZWN0LlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X3Byb2Nlc3NDb21wb25lbnQoY29tcG9uZW50RGV0YWlscykge1xuXHRcdHZhciBjb21wb25lbnQgPSBPYmplY3QuY3JlYXRlKGNvbXBvbmVudERldGFpbHMpO1xuXG5cdFx0cmV0dXJuIHRoaXMuX2FwcGx5VHJhbnNmb3Jtcyhjb21wb25lbnQpXG5cdFx0XHQudGhlbih0cmFuc2Zvcm1lZCA9PiB7XG5cdFx0XHRcdGlmICghdHJhbnNmb3JtZWQpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRyYW5zZm9ybWF0aW9uIGZvciB0aGUgXCIke2NvbXBvbmVudERldGFpbHMubmFtZX1cIiBjb21wb25lbnQgcmV0dXJuZWQgYSBiYWQgcmVzdWx0YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29tcG9uZW50ID0gdHJhbnNmb3JtZWQ7XG5cdFx0XHRcdHRoaXMuX3RlbXBsYXRlUHJvdmlkZXIucmVnaXN0ZXJDb21waWxlZChcblx0XHRcdFx0XHRjb21wb25lbnQubmFtZSwgY29tcG9uZW50LnRlbXBsYXRlU291cmNlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbXBvbmVudC50ZW1wbGF0ZSA9IHtcblx0XHRcdFx0XHRyZW5kZXI6IGRhdGFDb250ZXh0ID0+IHRoaXMuX3RlbXBsYXRlUHJvdmlkZXIucmVuZGVyKGNvbXBvbmVudC5uYW1lLCBkYXRhQ29udGV4dClcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKHR5cGVvZiAoY29tcG9uZW50LmVycm9yVGVtcGxhdGVTb3VyY2UpID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGNvbnN0IGVycm9yVGVtcGxhdGVOYW1lID0gbW9kdWxlSGVscGVyLmdldE5hbWVGb3JFcnJvclRlbXBsYXRlKGNvbXBvbmVudC5uYW1lKTtcblx0XHRcdFx0XHR0aGlzLl90ZW1wbGF0ZVByb3ZpZGVyLnJlZ2lzdGVyQ29tcGlsZWQoZXJyb3JUZW1wbGF0ZU5hbWUsIGNvbXBvbmVudC5lcnJvclRlbXBsYXRlU291cmNlKTtcblx0XHRcdFx0XHRjb21wb25lbnQuZXJyb3JUZW1wbGF0ZSA9IHtcblx0XHRcdFx0XHRcdHJlbmRlcjogZGF0YUNvbnRleHQgPT4gdGhpcy5fdGVtcGxhdGVQcm92aWRlci5yZW5kZXIoZXJyb3JUZW1wbGF0ZU5hbWUsIGRhdGFDb250ZXh0KVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnY29tcG9uZW50TG9hZGVkJywgY29tcG9uZW50KTtcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudDtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2gocmVhc29uID0+IHtcblx0XHRcdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnZXJyb3InLCByZWFzb24pO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBtYXAgb2YgY29tcG9uZW50cyBieSB0aGVpciBuYW1lcy5cblx0ICogQHJldHVybnMge09iamVjdH0gVGhlIG1hcCBvZiB0aGUgY29tcG9uZW50cyBieSB0aGVpciBuYW1lcy5cblx0ICovXG5cdGdldENvbXBvbmVudHNCeU5hbWVzKCkge1xuXHRcdHJldHVybiB0aGlzLl9sb2FkZWRDb21wb25lbnRzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnRMb2FkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExvYWRlckJhc2UgPSByZXF1aXJlKCcuLi8uLi9saWIvYmFzZS9Mb2FkZXJCYXNlJyk7XG5cbmNsYXNzIFN0b3JlTG9hZGVyIGV4dGVuZHMgTG9hZGVyQmFzZSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHN0b3JlIGxvYWRlci5cblx0ICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gbG9jYXRvciBUaGUgc2VydmljZSBsb2NhdG9yIGZvciByZXNvbHZpbmcgc3RvcmVzLlxuXHQgKi9cblx0Y29uc3RydWN0b3IobG9jYXRvcikge1xuXHRcdHZhciBzdG9yZVRyYW5zZm9ybXM7XG5cdFx0dHJ5IHtcblx0XHRcdHN0b3JlVHJhbnNmb3JtcyA9IGxvY2F0b3IucmVzb2x2ZUFsbCgnc3RvcmVUcmFuc2Zvcm0nKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRzdG9yZVRyYW5zZm9ybXMgPSBbXTtcblx0XHR9XG5cdFx0c3VwZXIobG9jYXRvciwgc3RvcmVUcmFuc2Zvcm1zKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc2VydmljZSBsb2NhdG9yLlxuXHRcdCAqIEB0eXBlIHtTZXJ2aWNlTG9jYXRvcn1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3NlcnZpY2VMb2NhdG9yID0gbG9jYXRvcjtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgZXZlbnQgYnVzLlxuXHRcdCAqIEB0eXBlIHtFdmVudEVtaXR0ZXJ9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9ldmVudEJ1cyA9IGxvY2F0b3IucmVzb2x2ZSgnZXZlbnRCdXMnKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc2V0IG9mIGxvYWRlZCBzdG9yZXMuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2xvYWRlZFN0b3JlcyA9IG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogTG9hZHMgYWxsIHN0b3JlcyBpbnNpZGUgdGhlIGJyb3dzZXIgYnVuZGxlLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBUaGUgcHJvbWlzZSBsb2FkZWQgc3RvcmVzLlxuXHQgKi9cblx0bG9hZCgpIHtcblx0XHRpZiAodGhpcy5fbG9hZGVkU3RvcmVzKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2xvYWRlZFN0b3Jlcyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbG9hZGVkU3RvcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5fc2VydmljZUxvY2F0b3IucmVzb2x2ZUFsbCgnc3RvcmUnKSlcblx0XHRcdC5jYXRjaCgoKSA9PiBbXSlcblx0XHRcdC50aGVuKHN0b3JlcyA9PiB7XG5cdFx0XHRcdGNvbnN0IHN0b3JlUHJvbWlzZXMgPSBbXTtcblx0XHRcdFx0Ly8gdGhlIGxpc3QgaXMgYSBzdGFjaywgd2Ugc2hvdWxkIHJldmVyc2UgaXRcblx0XHRcdFx0c3RvcmVzLmZvckVhY2goc3RvcmUgPT4ge1xuXHRcdFx0XHRcdGlmICghc3RvcmUgfHwgdHlwZW9mIChzdG9yZSkgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0b3JlUHJvbWlzZXMudW5zaGlmdCh0aGlzLl9nZXRTdG9yZShzdG9yZSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHN0b3JlUHJvbWlzZXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKHN0b3JlcyA9PiB7XG5cdFx0XHRcdHN0b3Jlcy5mb3JFYWNoKHN0b3JlID0+IHtcblx0XHRcdFx0XHRpZiAoIXN0b3JlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuX2xvYWRlZFN0b3Jlc1tzdG9yZS5uYW1lXSA9IHN0b3JlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnYWxsU3RvcmVzTG9hZGVkJywgdGhpcy5fbG9hZGVkU3RvcmVzKTtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sb2FkZWRTdG9yZXMpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhc3RvcmUgZnJvbSBzdG9yZSBkZXRhaWxzLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gc3RvcmVEZXRhaWxzIFRoZSBzdG9yZSBkZXRhaWxzLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBUaGUgcHJvbWlzZSBmb3IgdGhlIHN0b3JlLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2dldFN0b3JlKHN0b3JlRGV0YWlscykge1xuXHRcdHJldHVybiB0aGlzLl9hcHBseVRyYW5zZm9ybXMoc3RvcmVEZXRhaWxzKVxuXHRcdFx0LnRoZW4odHJhbnNmb3JtZWQgPT4ge1xuXHRcdFx0XHRpZiAoIXRyYW5zZm9ybWVkKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUcmFuc2Zvcm1hdGlvbiBmb3IgdGhlIFwiJHtzdG9yZURldGFpbHMubmFtZX1cIiBzdG9yZSByZXR1cm5lZCBhIGJhZCByZXN1bHRgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdzdG9yZUxvYWRlZCcsIHRyYW5zZm9ybWVkKTtcblx0XHRcdFx0cmV0dXJuIHRyYW5zZm9ybWVkO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChyZWFzb24gPT4ge1xuXHRcdFx0XHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdlcnJvcicsIHJlYXNvbik7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHN0b3JlcyBtYXAgYnkgdGhlaXIgbmFtZXMuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtYXAgb2Ygc3RvcmVzIGJ5IHRoZWlyIG5hbWVzLlxuXHQgKi9cblx0Z2V0U3RvcmVzQnlOYW1lcygpIHtcblx0XHRyZXR1cm4gdGhpcy5fbG9hZGVkU3RvcmVzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdG9yZUxvYWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcHJvcGVydHlIZWxwZXIgPSByZXF1aXJlKCcuLi8uLi9saWIvaGVscGVycy9wcm9wZXJ0eUhlbHBlcicpO1xuY29uc3QgTW9kdWxlQXBpUHJvdmlkZXJCYXNlID0gcmVxdWlyZSgnLi4vLi4vbGliL2Jhc2UvTW9kdWxlQXBpUHJvdmlkZXJCYXNlJyk7XG5cbmNsYXNzIE1vZHVsZUFwaVByb3ZpZGVyIGV4dGVuZHMgTW9kdWxlQXBpUHJvdmlkZXJCYXNlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgbW9kdWxlIEFQSSBwcm92aWRlci5cblx0ICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gbG9jYXRvciBUaGUgc2VydmljZSBsb2NhdG9yIGZvciByZXNvbHZpbmcgZGVwZW5kZW5jaWVzLlxuXHQgKi9cblx0Y29uc3RydWN0b3IobG9jYXRvcikge1xuXHRcdHN1cGVyKGxvY2F0b3IpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdHJ1ZSBiZWNhdXNlIHdvcmtzIGluIGEgYnJvd3Nlci5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRnZXQgaXNCcm93c2VyKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgZmFsc2UgYmVjYXVzZSB3b3JrcyBpbiBhIGJyb3dzZXIuXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0Z2V0IGlzU2VydmVyKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWxvYWRzIHRoZSBwYWdlIGZvciBoYW5kbGluZyBcIm5vdCBmb3VuZFwiIGVycm9yLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBmb3Igbm90aGluZy5cblx0ICovXG5cdG5vdEZvdW5kKCkge1xuXHRcdGNvbnN0IHdpbmRvdyA9IHRoaXMubG9jYXRvci5yZXNvbHZlKCd3aW5kb3cnKTtcblx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZGlyZWN0cyBjdXJyZW50IHBhZ2UgdG8gc3BlY2lmaWVkIFVSSS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHVyaVN0cmluZyBVUkkgdG8gcmVkaXJlY3QuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIGZvciBub3RoaW5nLlxuXHQgKi9cblx0cmVkaXJlY3QodXJpU3RyaW5nKSB7XG5cdFx0Y29uc3QgcmVxdWVzdFJvdXRlciA9IHRoaXMubG9jYXRvci5yZXNvbHZlKCdyZXF1ZXN0Um91dGVyJyk7XG5cdFx0cmV0dXJuIHJlcXVlc3RSb3V0ZXIuZ28odXJpU3RyaW5nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbGVhcnMgY3VycmVudCBsb2NhdGlvbiBVUkkncyBmcmFnbWVudC5cblx0ICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG5cdCAqL1xuXHRjbGVhckZyYWdtZW50KCkge1xuXHRcdGNvbnN0IHdpbmRvdyA9IHRoaXMubG9jYXRvci5yZXNvbHZlKCd3aW5kb3cnKTtcblx0XHRjb25zdCBwb3NpdGlvbiA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuXHRcdHdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHBvc2l0aW9uO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZUFwaVByb3ZpZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL0Jvb3RzdHJhcHBlcicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwcm9wZXJ0eUhlbHBlciA9IHJlcXVpcmUoJy4vaGVscGVycy9wcm9wZXJ0eUhlbHBlcicpO1xuXG5jbGFzcyBDb250ZXh0RmFjdG9yeSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbnRleHQgZmFjdG9yeS5cblx0ICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gbG9jYXRvciBMb2NhdG9yIGZvciByZXNvbHZpbmcgZGVwZW5kZW5jaWVzLlxuXHQgKi9cblx0Y29uc3RydWN0b3IobG9jYXRvcikge1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzZXJ2aWNlIGxvY2F0b3IuXG5cdFx0ICogQHR5cGUge1NlcnZpY2VMb2NhdG9yfVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fc2VydmljZUxvY2F0b3IgPSBsb2NhdG9yO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgY29udGV4dCBmb3IgbW9kdWxlcy5cblx0ICogQHBhcmFtIHtPYmplY3R9IGFkZGl0aW9uYWwgQWRkaXRpb25hbCBwYXJhbWV0ZXJzLlxuXHQgKiBAcGFyYW0ge1VSSX0gYWRkaXRpb25hbC5yZWZlcnJlciBDdXJyZW50IHJlZmVycmVyLlxuXHQgKiBAcGFyYW0ge1VSSX0gYWRkaXRpb25hbC5sb2NhdGlvbiBDdXJyZW50IGxvY2F0aW9uLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkaXRpb25hbC51c2VyQWdlbnQgQ3VycmVudCB1c2VyIGFnZW50LlxuXHQgKi9cblx0Y3JlYXRlKGFkZGl0aW9uYWwpIHtcblx0XHRjb25zdCBhcGlQcm92aWRlciA9IHRoaXMuX3NlcnZpY2VMb2NhdG9yLnJlc29sdmUoJ21vZHVsZUFwaVByb3ZpZGVyJyk7XG5cdFx0Y29uc3QgY29udGV4dCA9IE9iamVjdC5jcmVhdGUoYXBpUHJvdmlkZXIpO1xuXHRcdE9iamVjdC5rZXlzKGFkZGl0aW9uYWwpXG5cdFx0XHQuZm9yRWFjaChrZXkgPT4gcHJvcGVydHlIZWxwZXIuZGVmaW5lUmVhZE9ubHkoY29udGV4dCwga2V5LCBhZGRpdGlvbmFsW2tleV0pKTtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRleHRGYWN0b3J5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBldmVudHMgPSByZXF1aXJlKCdldmVudHMnKTtcblxuY2xhc3MgU2VyaWFsV3JhcHBlciB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHNlcmlhbCB3cmFwcGVyIGZvciBwcm9taXNlcy5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBldmVudCBlbWl0dGVyLlxuXHRcdCAqIEB0eXBlIHtFdmVudEVtaXR0ZXJ9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9lbWl0dGVyID0gbmV3IGV2ZW50cy5FdmVudEVtaXR0ZXIoKTtcblx0XHR0aGlzLl9lbWl0dGVyLnNldE1heExpc3RlbmVycygwKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc2V0IG9mIG5hbWVkIG1ldGhvZHMgdG8gaW52b2tlLlxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl90b0ludm9rZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHNldCBvZiBmbGFncyBpZiB0aGUgbWV0aG9kIGlzIGluIHByb2dyZXNzLlxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9pblByb2dyZXNzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGEgbWV0aG9kIHRvIHRoZSBzZXQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE1ldGhvZCBuYW1lLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0b0ludm9rZSBGdW5jdGlvbiB0aGF0IHJldHVybnMgcHJvbWlzZS5cblx0ICovXG5cdGFkZChuYW1lLCB0b0ludm9rZSkge1xuXHRcdHRoaXMuX3RvSW52b2tlW25hbWVdID0gdG9JbnZva2U7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0cnVlIGlmIHRoZSBtZXRob2Qgd2l0aCBzdWNoIG5hbWUgd2FzIHJlZ2lzdGVyZWQgdG8gdGhlIHNldC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiBtZXRob2QuXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIG1ldGhvZCBuYW1lIGlzIHJlZ2lzdGVyZWQuXG5cdCAqL1xuXHRpc1JlZ2lzdGVyZWQobmFtZSkge1xuXHRcdHJldHVybiB0eXBlb2YgKHRoaXMuX3RvSW52b2tlW25hbWVdKSA9PT0gJ2Z1bmN0aW9uJztcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnZva2VzIGEgbWV0aG9kIHdpdGhvdXQgY29uY3VycmVuY3kuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE1ldGhvZCBuYW1lLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSBQcm9taXNlIGZvciByZXN1bHQuXG5cdCAqL1xuXHRpbnZva2UobmFtZSkge1xuXHRcdGlmICghdGhpcy5pc1JlZ2lzdGVyZWQobmFtZSkpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1RoZXJlIGlzIG5vIHN1Y2ggcmVnaXN0ZXJlZCBtZXRob2QnKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2luUHJvZ3Jlc3NbbmFtZV0pIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgoZnVsZmlsbCwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMuX2VtaXR0ZXIub25jZShuYW1lLCBmdWxmaWxsKTtcblx0XHRcdFx0dGhpcy5fZW1pdHRlci5vbmNlKGAke25hbWV9LS1lcnJvcmAsIHJlamVjdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aGlzLl9pblByb2dyZXNzW25hbWVdID0gdHJ1ZTtcblx0XHR0aGlzLl90b0ludm9rZVtuYW1lXSgpXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xuXHRcdFx0XHR0aGlzLl9lbWl0dGVyLmVtaXQobmFtZSwgcmVzdWx0KTtcblx0XHRcdFx0dGhpcy5faW5Qcm9ncmVzc1tuYW1lXSA9IG51bGw7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKHJlYXNvbiA9PiB7XG5cdFx0XHRcdHRoaXMuX2VtaXR0ZXIuZW1pdChgJHtuYW1lfS0tZXJyb3JgLCByZWFzb24pO1xuXHRcdFx0XHR0aGlzLl9pblByb2dyZXNzW25hbWVdID0gbnVsbDtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuaW52b2tlKG5hbWUpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VyaWFsV3JhcHBlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2VyaWFsV3JhcHBlciA9IHJlcXVpcmUoJy4vU2VyaWFsV3JhcHBlcicpO1xuY29uc3QgbW9kdWxlSGVscGVyID0gcmVxdWlyZSgnLi9oZWxwZXJzL21vZHVsZUhlbHBlcicpO1xuY29uc3QgcHJvcGVydHlIZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcnMvcHJvcGVydHlIZWxwZXInKTtcblxuY29uc3QgREVGQVVMVF9MSUZFVElNRSA9IDYwMDAwO1xuXG5jbGFzcyBTdG9yZURpc3BhdGNoZXIge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBzdG9yZSBkaXNwYXRjaGVyLlxuXHQgKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSBsb2NhdG9yIExvY2F0b3IgZm9yIHJlc29sdmluZyBkZXBlbmRlbmNpZXMuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihsb2NhdG9yKSB7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHNlcnZpY2UgbG9jYXRvci5cblx0XHQgKiBAdHlwZSB7U2VydmljZUxvY2F0b3J9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9zZXJ2aWNlTG9jYXRvciA9IGxvY2F0b3I7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHN0b3JlIGxvYWRlci5cblx0XHQgKiBAdHlwZSB7U3RvcmVMb2FkZXJ9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9zdG9yZUxvYWRlciA9IGxvY2F0b3IucmVzb2x2ZSgnc3RvcmVMb2FkZXInKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgZXZlbnQgYnVzLlxuXHRcdCAqIEB0eXBlIHtFdmVudEVtaXR0ZXJ9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9ldmVudEJ1cyA9IGxvY2F0b3IucmVzb2x2ZSgnZXZlbnRCdXMnKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgbWFwIG9mIGFsbCBzdG9yZSBpbnN0YW5jZXMuXG5cdFx0ICogQHR5cGUge251bGx9XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR0aGlzLl9zdG9yZUluc3RhbmNlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IG1hcCBvZiBsYXN0IGRhdGEgZm9yIGVhY2ggc3RvcmUuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2xhc3REYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgbWFwIG9mIGxhc3Qgc3RhdGUgb2Ygc3RvcmUgZGlzcGF0Y2hlci5cblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fbGFzdFN0YXRlID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc2V0IG9mIHN0b3JlIGRlcGVuZGVuY3kgZ3JhcGguXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2RlcGVuZGFudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzZXJpYWwgd3JhcHBlci5cblx0XHQgKiBAdHlwZSB7U2VyaWFsV3JhcHBlcn1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3NlcmlhbFdyYXBwZXIgPSBuZXcgU2VyaWFsV3JhcHBlcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBiYXNpYyBjb250ZXh0IGZvciBhbGwgc3RvcmUgY29udGV4dHMuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX2N1cnJlbnRCYXNpY0NvbnRleHQgPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgc3RvcmUgZGF0YSBhbmQgY3JlYXRlcyBhIHN0b3JlIGluc3RhbmNlIGlmIHJlcXVpcmVkLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RvcmVOYW1lIE5hbWUgb2Ygc3RvcmUuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFN0b3JlJ3MgZGF0YS5cblx0ICovXG5cdGdldFN0b3JlRGF0YShzdG9yZU5hbWUpIHtcblx0XHRpZiAoIXRoaXMuX2xhc3RTdGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2Vycm9yU3RhdGUoKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiAoc3RvcmVOYW1lKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG5cdFx0fVxuXHRcdGlmIChzdG9yZU5hbWUgaW4gdGhpcy5fbGFzdERhdGEpIHtcblx0XHRcdGNvbnN0IGV4aXN0VGltZSA9IERhdGUubm93KCkgLSB0aGlzLl9sYXN0RGF0YVtzdG9yZU5hbWVdLmNyZWF0ZWRBdDtcblx0XHRcdGlmIChleGlzdFRpbWUgPD0gdGhpcy5fbGFzdERhdGFbc3RvcmVOYW1lXS5saWZldGltZSkge1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2xhc3REYXRhW3N0b3JlTmFtZV0uZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgdGhpcy5fbGFzdERhdGFbc3RvcmVOYW1lXTtcblx0XHR9XG5cdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnc3RvcmVEYXRhTG9hZCcsIHtcblx0XHRcdG5hbWU6IHN0b3JlTmFtZVxuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgc3RvcmUgPSB0aGlzLmdldFN0b3JlKHN0b3JlTmFtZSk7XG5cdFx0aWYgKCFzdG9yZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2Vycm9yU3RvcmVOb3RGb3VuZChzdG9yZU5hbWUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxpZmV0aW1lID0gdHlwZW9mIChzdG9yZS4kbGlmZXRpbWUpID09PSAnbnVtYmVyJyA/XG5cdFx0XHRzdG9yZS4kbGlmZXRpbWUgOlxuXHRcdFx0REVGQVVMVF9MSUZFVElNRTtcblxuXHRcdHJldHVybiB0aGlzLl9zZXJpYWxXcmFwcGVyLmludm9rZShzdG9yZU5hbWUpXG5cdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0dGhpcy5fbGFzdERhdGFbc3RvcmVOYW1lXSA9IHtcblx0XHRcdFx0XHRkYXRhLFxuXHRcdFx0XHRcdGxpZmV0aW1lLFxuXHRcdFx0XHRcdGNyZWF0ZWRBdDogRGF0ZS5ub3coKVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdzdG9yZURhdGFMb2FkZWQnLCB7XG5cdFx0XHRcdFx0bmFtZTogc3RvcmVOYW1lLFxuXHRcdFx0XHRcdGRhdGEsXG5cdFx0XHRcdFx0bGlmZXRpbWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogU2VuZHMgYW4gYWN0aW9uIHRvIHRoZSBzcGVjaWZpZWQgc3RvcmUgYW5kIHJlc29sdmVzIHByb21pc2VzIGluIHRoZSBzZXJpYWwgbW9kZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0b3JlTmFtZSBOYW1lIG9mIHRoZSBzdG9yZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbk5hbWUgTmFtZSBvZiB0aGUgYWN0aW9uLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gYXJncyBBY3Rpb24gYXJndW1lbnRzLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTwqPn0gUHJvbWlzZSBmb3IgYW4gYWN0aW9uIGhhbmRsaW5nIHJlc3VsdC5cblx0ICovXG5cdHNlbmRBY3Rpb24oc3RvcmVOYW1lLCBhY3Rpb25OYW1lLCBhcmdzKSB7XG5cdFx0aWYgKCF0aGlzLl9sYXN0U3RhdGUpIHtcblx0XHRcdHJldHVybiB0aGlzLl9lcnJvclN0YXRlKCk7XG5cdFx0fVxuXHRcdGNvbnN0IGFjdGlvbkRldGFpbHMgPSB7XG5cdFx0XHRzdG9yZU5hbWUsXG5cdFx0XHRhY3Rpb25OYW1lLFxuXHRcdFx0YXJnc1xuXHRcdH07XG5cdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnYWN0aW9uU2VuZCcsIGFjdGlvbkRldGFpbHMpO1xuXG5cdFx0Y29uc3Qgc3RvcmUgPSB0aGlzLmdldFN0b3JlKHN0b3JlTmFtZSk7XG5cdFx0aWYgKCFzdG9yZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2Vycm9yU3RvcmVOb3RGb3VuZChzdG9yZU5hbWUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhhbmRsZU1ldGhvZCA9IG1vZHVsZUhlbHBlci5nZXRNZXRob2RUb0ludm9rZShcblx0XHRcdHN0b3JlLCAnaGFuZGxlJywgYWN0aW9uTmFtZVxuXHRcdCk7XG5cdFx0cmV0dXJuIG1vZHVsZUhlbHBlci5nZXRTYWZlUHJvbWlzZSgoKSA9PiBoYW5kbGVNZXRob2QoYXJncykpXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xuXHRcdFx0XHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdhY3Rpb25TZW50JywgYWN0aW9uRGV0YWlscyk7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZW5kcyBhbiBhY3Rpb24gdG8gZXZlcnkgc3RvcmUgdGhhdCBoYXMgYSBcImhhbmRsZVwiIG1ldGhvZCBmb3Igc3VjaCBhY3Rpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25OYW1lIE5hbWUgb2YgdGhlIGFjdGlvbi5cblx0ICogQHBhcmFtIHtPYmplY3R9IGFyZyBBY3Rpb24gYXJndW1lbnRzLlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTwqPj59IFByb21pc2UgZm9yIHRoZSBhY3Rpb24gaGFuZGxpbmcgcmVzdWx0LlxuXHQgKi9cblx0c2VuZEJyb2FkY2FzdEFjdGlvbihhY3Rpb25OYW1lLCBhcmcpIHtcblx0XHRjb25zdCBwcm9taXNlcyA9IFtdO1xuXHRcdGNvbnN0IHN0b3Jlc0J5TmFtZXMgPSB0aGlzLl9zdG9yZUxvYWRlci5nZXRTdG9yZXNCeU5hbWVzKCk7XG5cdFx0Y29uc3QgbWV0aG9kTmFtZSA9IG1vZHVsZUhlbHBlci5nZXRDYW1lbENhc2VOYW1lKCdoYW5kbGUnLCBhY3Rpb25OYW1lKTtcblxuXHRcdE9iamVjdC5rZXlzKHN0b3Jlc0J5TmFtZXMpXG5cdFx0XHQuZm9yRWFjaChzdG9yZU5hbWUgPT4ge1xuXHRcdFx0XHRjb25zdCBzdG9yZSA9IHN0b3Jlc0J5TmFtZXNbc3RvcmVOYW1lXTtcblx0XHRcdFx0Y29uc3QgcHJvdG9NZXRob2QgPSBzdG9yZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG5cdFx0XHRcdGlmICh0eXBlb2YgKHByb3RvTWV0aG9kKSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzZW5kQWN0aW9uUHJvbWlzZSA9IHRoaXMuc2VuZEFjdGlvbihzdG9yZS5uYW1lLCBhY3Rpb25OYW1lLCBhcmcpO1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKHNlbmRBY3Rpb25Qcm9taXNlKTtcblx0XHRcdH0pO1xuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyBhIG5ldyBzdGF0ZSB0byB0aGUgc3RvcmUgZGlzcGF0Y2hlciBhbmQgaW52b2tlcyB0aGUgXCJjaGFuZ2VkXCIgbWV0aG9kIGZvciBhbGxcblx0ICogc3RvcmVzIHdoaWNoIHN0YXRlIGhhcyBiZWVuIGNoYW5nZWQuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzIE1hcCBvZiBuZXcgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtIHtPYmplY3R9IGJhc2ljQ29udGV4dCBCYXNpYyBjb250ZXh0IGZvciBhbGwgc3RvcmVzLlxuXHQgKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn0gTmFtZXMgb2Ygc3RvcmVzIHRoYXQgaGF2ZSBiZWVuIGNoYW5nZWQuXG5cdCAqL1xuXHRzZXRTdGF0ZShwYXJhbWV0ZXJzLCBiYXNpY0NvbnRleHQpIHtcblx0XHRwYXJhbWV0ZXJzID0gcGFyYW1ldGVycyB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdGlmICghdGhpcy5fbGFzdFN0YXRlKSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50QmFzaWNDb250ZXh0ID0gYmFzaWNDb250ZXh0O1xuXHRcdFx0dGhpcy5fbGFzdFN0YXRlID0gcGFyYW1ldGVycztcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHQvLyBzb21lIHN0b3JlJ3MgcGFyYW1ldGVycyBjYW4gYmUgcmVtb3ZlZCBzaW5jZSBsYXN0IHRpbWVcblx0XHRjb25zdCBjaGFuZ2VkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRcdE9iamVjdC5rZXlzKHRoaXMuX2xhc3RTdGF0ZSlcblx0XHRcdC5maWx0ZXIoc3RvcmVOYW1lID0+ICEoc3RvcmVOYW1lIGluIHBhcmFtZXRlcnMpKVxuXHRcdFx0LmZvckVhY2gobmFtZSA9PiB7XG5cdFx0XHRcdGNoYW5nZWRbbmFtZV0gPSB0cnVlO1xuXHRcdFx0fSk7XG5cblx0XHRPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKVxuXHRcdFx0LmZvckVhY2goc3RvcmVOYW1lID0+IHtcblx0XHRcdFx0Ly8gbmV3IHBhcmFtZXRlcnMgd2VyZSBzZXQgZm9yIHN0b3JlXG5cdFx0XHRcdGlmICghKHN0b3JlTmFtZSBpbiB0aGlzLl9sYXN0U3RhdGUpKSB7XG5cdFx0XHRcdFx0Y2hhbmdlZFtzdG9yZU5hbWVdID0gdHJ1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBuZXcgYW5kIGxhc3QgcGFyYW1ldGVycyBoYXMgZGlmZmVyZW50IHZhbHVlc1xuXHRcdFx0XHRjb25zdCBsYXN0UGFyYW1ldGVyTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLl9sYXN0U3RhdGVbc3RvcmVOYW1lXSk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRQYXJhbWV0ZXJOYW1lcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnNbc3RvcmVOYW1lXSk7XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRQYXJhbWV0ZXJOYW1lcy5sZW5ndGggIT09IGxhc3RQYXJhbWV0ZXJOYW1lcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRjaGFuZ2VkW3N0b3JlTmFtZV0gPSB0cnVlO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGN1cnJlbnRQYXJhbWV0ZXJOYW1lcy5ldmVyeShwYXJhbWV0ZXJOYW1lID0+IHtcblx0XHRcdFx0XHRpZiAocGFyYW1ldGVyc1tzdG9yZU5hbWVdW3BhcmFtZXRlck5hbWVdICE9PVxuXHRcdFx0XHRcdFx0dGhpcy5fbGFzdFN0YXRlW3N0b3JlTmFtZV1bcGFyYW1ldGVyTmFtZV0pIHtcblx0XHRcdFx0XHRcdGNoYW5nZWRbc3RvcmVOYW1lXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5fbGFzdFN0YXRlID0gcGFyYW1ldGVycztcblx0XHRpZiAodGhpcy5fY3VycmVudEJhc2ljQ29udGV4dCAhPT0gYmFzaWNDb250ZXh0KSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50QmFzaWNDb250ZXh0ID0gYmFzaWNDb250ZXh0O1xuXHRcdFx0T2JqZWN0LmtleXModGhpcy5fc3RvcmVJbnN0YW5jZXMpXG5cdFx0XHRcdC5mb3JFYWNoKHN0b3JlTmFtZSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fc3RvcmVJbnN0YW5jZXNbc3RvcmVOYW1lXS4kY29udGV4dCA9IHRoaXMuX2dldFN0b3JlQ29udGV4dChzdG9yZU5hbWUpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zdCBjaGFuZ2VkU3RvcmVOYW1lcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0T2JqZWN0LmtleXMoY2hhbmdlZClcblx0XHRcdC5mb3JFYWNoKHN0b3JlTmFtZSA9PiB7XG5cdFx0XHRcdGNvbnN0IHN0b3JlID0gdGhpcy5nZXRTdG9yZShzdG9yZU5hbWUpO1xuXHRcdFx0XHRpZiAoIXN0b3JlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0b3JlLiRjb250ZXh0LmNoYW5nZWQoKVxuXHRcdFx0XHRcdC5mb3JFYWNoKG5hbWUgPT4ge1xuXHRcdFx0XHRcdFx0Y2hhbmdlZFN0b3JlTmFtZXNbbmFtZV0gPSB0cnVlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdzdGF0ZUNoYW5nZWQnLCB7XG5cdFx0XHRvbGRTdGF0ZTogdGhpcy5fbGFzdFN0YXRlLFxuXHRcdFx0bmV3U3RhdGU6IHBhcmFtZXRlcnNcblx0XHR9KTtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMoY2hhbmdlZFN0b3JlTmFtZXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBjb250ZXh0IGZvciBhIHN0b3JlIHVzaW5nIGNvbXBvbmVudCdzIGNvbnRleHQgYXMgYSBwcm90b3R5cGUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFN0b3JlIGNvbnRleHQuXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZ2V0U3RvcmVDb250ZXh0KHN0b3JlTmFtZSkge1xuXHRcdGNvbnN0IHN0b3JlQ29udGV4dCA9IE9iamVjdC5jcmVhdGUodGhpcy5fY3VycmVudEJhc2ljQ29udGV4dCk7XG5cdFx0cHJvcGVydHlIZWxwZXIuZGVmaW5lUmVhZE9ubHkoc3RvcmVDb250ZXh0LCAnbmFtZScsIHN0b3JlTmFtZSk7XG5cdFx0cHJvcGVydHlIZWxwZXIuZGVmaW5lUmVhZE9ubHkoXG5cdFx0XHRzdG9yZUNvbnRleHQsICdzdGF0ZScsIHRoaXMuX2xhc3RTdGF0ZVtzdG9yZU5hbWVdIHx8IE9iamVjdC5jcmVhdGUobnVsbClcblx0XHQpO1xuXG5cdFx0c3RvcmVDb250ZXh0LmNoYW5nZWQgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCB3YWxrZWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdFx0dmFyIHRvQ2hhbmdlID0gW3N0b3JlTmFtZV07XG5cblx0XHRcdHdoaWxlICh0b0NoYW5nZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnQgPSB0b0NoYW5nZS5zaGlmdCgpO1xuXHRcdFx0XHRpZiAoY3VycmVudCBpbiB3YWxrZWQpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR3YWxrZWRbY3VycmVudF0gPSB0cnVlO1xuXHRcdFx0XHRpZiAoY3VycmVudCBpbiB0aGlzLl9kZXBlbmRhbnRzKSB7XG5cdFx0XHRcdFx0dG9DaGFuZ2UgPSB0b0NoYW5nZS5jb25jYXQoT2JqZWN0LmtleXModGhpcy5fZGVwZW5kYW50c1tjdXJyZW50XSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLl9sYXN0RGF0YVtjdXJyZW50XTtcblx0XHRcdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnc3RvcmVDaGFuZ2VkJywgY3VycmVudCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMod2Fsa2VkKTtcblx0XHR9O1xuXG5cdFx0c3RvcmVDb250ZXh0LmdldFN0b3JlRGF0YSA9IHNvdXJjZVN0b3JlTmFtZSA9PiBzb3VyY2VTdG9yZU5hbWUgPT09IHN0b3JlTmFtZSA/XG5cdFx0XHRQcm9taXNlLnJlc29sdmUobnVsbCkgOlxuXHRcdFx0dGhpcy5nZXRTdG9yZURhdGEoc291cmNlU3RvcmVOYW1lKTtcblxuXHRcdHN0b3JlQ29udGV4dC5zZXREZXBlbmRlbmN5ID0gbmFtZSA9PiB7XG5cdFx0XHRpZiAoIShuYW1lIGluIHRoaXMuX2RlcGVuZGFudHMpKSB7XG5cdFx0XHRcdHRoaXMuX2RlcGVuZGFudHNbbmFtZV0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZGVwZW5kYW50c1tuYW1lXVtzdG9yZU5hbWVdID0gdHJ1ZTtcblx0XHR9O1xuXHRcdHN0b3JlQ29udGV4dC51bnNldERlcGVuZGVuY3kgPSBuYW1lID0+IHtcblx0XHRcdGlmICghKG5hbWUgaW4gdGhpcy5fZGVwZW5kYW50cykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHRoaXMuX2RlcGVuZGFudHNbbmFtZV1bc3RvcmVOYW1lXTtcblx0XHR9O1xuXHRcdHN0b3JlQ29udGV4dC5zZW5kQWN0aW9uID0gKHN0b3JlTmFtZSwgbmFtZSwgYXJncykgPT4gdGhpcy5zZW5kQWN0aW9uKHN0b3JlTmFtZSwgbmFtZSwgYXJncyk7XG5cdFx0c3RvcmVDb250ZXh0LnNlbmRCcm9hZGNhc3RBY3Rpb24gPSAobmFtZSwgYXJncykgPT4gdGhpcy5zZW5kQnJvYWRjYXN0QWN0aW9uKG5hbWUsIGFyZ3MpO1xuXG5cdFx0cmV0dXJuIHN0b3JlQ29udGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc3RvcmUgaW5zdGFuY2UgYW5kIGNyZWF0ZXMgaXQgaWYgcmVxdWlyZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yZU5hbWUgTmFtZSBvZiB0aGUgc3RvcmUuXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFByb21pc2UgZm9yIHRoZSBzdG9yZS5cblx0ICovXG5cdGdldFN0b3JlKHN0b3JlTmFtZSkge1xuXHRcdGlmICghc3RvcmVOYW1lKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3Qgc3RvcmUgPSB0aGlzLl9zdG9yZUluc3RhbmNlc1tzdG9yZU5hbWVdO1xuXHRcdGlmIChzdG9yZSkge1xuXHRcdFx0cmV0dXJuIHN0b3JlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHN0b3JlcyA9IHRoaXMuX3N0b3JlTG9hZGVyLmdldFN0b3Jlc0J5TmFtZXMoKTtcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLl9zZXJ2aWNlTG9jYXRvci5yZXNvbHZlKCdjb25maWcnKTtcblx0XHRpZiAoIShzdG9yZU5hbWUgaW4gc3RvcmVzKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Y29uc3QgQ29tcG9uZW50Q29uc3RydWN0b3IgPSBzdG9yZXNbc3RvcmVOYW1lXS5jb25zdHJ1Y3Rvcjtcblx0XHRDb21wb25lbnRDb25zdHJ1Y3Rvci5wcm90b3R5cGUuJGNvbnRleHQgPSB0aGlzLl9nZXRTdG9yZUNvbnRleHQoc3RvcmVOYW1lKTtcblx0XHR0aGlzLl9zdG9yZUluc3RhbmNlc1tzdG9yZU5hbWVdID0gbmV3IENvbXBvbmVudENvbnN0cnVjdG9yKHRoaXMuX3NlcnZpY2VMb2NhdG9yKTtcblx0XHR0aGlzLl9zdG9yZUluc3RhbmNlc1tzdG9yZU5hbWVdLiRjb250ZXh0ID0gQ29tcG9uZW50Q29uc3RydWN0b3IucHJvdG90eXBlLiRjb250ZXh0O1xuXG5cdFx0dGhpcy5fc2VyaWFsV3JhcHBlci5hZGQoc3RvcmVOYW1lLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBsb2FkTWV0aG9kID0gbW9kdWxlSGVscGVyLmdldE1ldGhvZFRvSW52b2tlKFxuXHRcdFx0XHR0aGlzLl9zdG9yZUluc3RhbmNlc1tzdG9yZU5hbWVdLCAnbG9hZCdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gbW9kdWxlSGVscGVyLmdldFNhZmVQcm9taXNlKGxvYWRNZXRob2QpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzLl9zdG9yZUluc3RhbmNlc1tzdG9yZU5hbWVdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYW4gZXJyb3IgbWVzc2FnZSBhYm91dCBhIG5vdCBmb3VuZCBzdG9yZS5cblx0ICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIFRoZSBzdG9yZSBuYW1lLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPEVycm9yPn0gVGhlIHByb21pc2UgZm9yIHRoZSBlcnJvci5cblx0ICovXG5cdF9lcnJvclN0b3JlTm90Rm91bmQobmFtZSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoYFN0b3JlIFwiJHtuYW1lfVwiIG5vdCBmb3VuZGApKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuIGVycm9yIG1lc3NhZ2UgYWJvdXQgYW4gdW5pbml0aWFsaXplZCBzdGF0ZS5cblx0ICogQHJldHVybiB7UHJvbWlzZTxFcnJvcj59IFRoZSBwcm9taXNlIGZvciB0aGUgZXJyb3IuXG5cdCAqL1xuXHRfZXJyb3JTdGF0ZSgpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdTdGF0ZSBzaG91bGQgYmUgc2V0IGJlZm9yZSBhbnkgcmVxdWVzdCcpKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0b3JlRGlzcGF0Y2hlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbW9kdWxlSGVscGVyID0gcmVxdWlyZSgnLi4vaGVscGVycy9tb2R1bGVIZWxwZXInKTtcbmNvbnN0IFN0YXRlUHJvdmlkZXIgPSByZXF1aXJlKCcuLi9wcm92aWRlcnMvU3RhdGVQcm92aWRlcicpO1xuY29uc3QgU3RvcmVMb2FkZXIgPSByZXF1aXJlKCcuLi9sb2FkZXJzL1N0b3JlTG9hZGVyJyk7XG5jb25zdCBDb21wb25lbnRMb2FkZXIgPSByZXF1aXJlKCcuLi9sb2FkZXJzL0NvbXBvbmVudExvYWRlcicpO1xuY29uc3QgRG9jdW1lbnRSZW5kZXJlciA9IHJlcXVpcmUoJy4uL0RvY3VtZW50UmVuZGVyZXInKTtcbmNvbnN0IFJlcXVlc3RSb3V0ZXIgPSByZXF1aXJlKCcuLi9SZXF1ZXN0Um91dGVyJyk7XG5jb25zdCBNb2R1bGVBcGlQcm92aWRlckJhc2UgPSByZXF1aXJlKCcuLi9iYXNlL01vZHVsZUFwaVByb3ZpZGVyQmFzZScpO1xuY29uc3QgQ29udGV4dEZhY3RvcnkgPSByZXF1aXJlKCcuLi9Db250ZXh0RmFjdG9yeScpO1xuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuXG4vKipcbiAqIEltcGxlbWVudHMgdGhlIGJhc2ljIGJvb3RzdHJhcHBlciBjbGFzc1xuICogZm9yIGJvdGggc2VydmVyIGFuZCBicm93c2VyIGVudmlyb25tZW50cy5cbiAqL1xuY2xhc3MgQm9vdHN0cmFwcGVyQmFzZSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJhc2ljIENhdGJlcnJ5IGJvb3RzdHJhcHBlci5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2F0YmVycnlDb25zdHJ1Y3RvciBDb25zdHJ1Y3RvclxuXHQgKiBvZiB0aGUgQ2F0YmVycnkncyBtYWluIG1vZHVsZS5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGNhdGJlcnJ5Q29uc3RydWN0b3IpIHtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgY29uc3RydWN0b3Igb2YgdGhlIENhdGJlcnJ5J3MgbWFpbiBtb2R1bGUuXG5cdFx0ICogQHR5cGUge0Z1bmN0aW9ufVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fY2F0YmVycnlDb25zdHJ1Y3RvciA9IGNhdGJlcnJ5Q29uc3RydWN0b3I7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBmdWxsLWNvbmZpZ3VyZWQgaW5zdGFuY2Ugb2YgdGhlIENhdGJlcnJ5IGFwcGxpY2F0aW9uLlxuXHQgKiBAcGFyYW0ge09iamVjdD99IGNvbmZpZ09iamVjdCBUaGUgY29uZmlndXJhdGlvbiBvYmplY3QuXG5cdCAqIEByZXR1cm5zIHtDYXRiZXJyeX0gVGhlIENhdGJlcnJ5IGFwcGxpY2F0aW9uIGluc3RhbmNlLlxuXHQgKi9cblx0Y3JlYXRlKGNvbmZpZ09iamVjdCkge1xuXHRcdGNvbnN0IGN1cnJlbnRDb25maWcgPSBjb25maWdPYmplY3QgfHwge307XG5cdFx0Y29uc3QgY2F0YmVycnkgPSBuZXcgdGhpcy5fY2F0YmVycnlDb25zdHJ1Y3RvcigpO1xuXG5cdFx0dGhpcy5jb25maWd1cmUoY3VycmVudENvbmZpZywgY2F0YmVycnkubG9jYXRvcik7XG5cdFx0Y2F0YmVycnkuZXZlbnRzID0gbmV3IE1vZHVsZUFwaVByb3ZpZGVyQmFzZShjYXRiZXJyeS5sb2NhdG9yKTtcblx0XHRyZXR1cm4gY2F0YmVycnk7XG5cdH1cblxuXHQvKipcblx0ICogQ29uZmlndXJlcyBhIGxvY2F0b3Igd2l0aCBhbGwgcmVxdWlyZWQgdHlwZSByZWdpc3RyYXRpb25zLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnT2JqZWN0IFRoZSBjb25maWd1cmF0aW9uIG9iamVjdC5cblx0ICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gbG9jYXRvciBUaGUgU2VydmljZSBsb2NhdG9yIHRvIGNvbmZpZ3VyZS5cblx0ICovXG5cdGNvbmZpZ3VyZShjb25maWdPYmplY3QsIGxvY2F0b3IpIHtcblx0XHRjb25zdCBldmVudEJ1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0XHRldmVudEJ1cy5zZXRNYXhMaXN0ZW5lcnMoMCk7XG5cdFx0bG9jYXRvci5yZWdpc3Rlckluc3RhbmNlKCdldmVudEJ1cycsIGV2ZW50QnVzKTtcblx0XHRsb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ2NvbmZpZycsIGNvbmZpZ09iamVjdCk7XG5cdFx0bG9jYXRvci5yZWdpc3Rlcignc3RhdGVQcm92aWRlcicsIFN0YXRlUHJvdmlkZXIsIHRydWUpO1xuXHRcdGxvY2F0b3IucmVnaXN0ZXIoJ2NvbnRleHRGYWN0b3J5JywgQ29udGV4dEZhY3RvcnksIHRydWUpO1xuXHRcdGxvY2F0b3IucmVnaXN0ZXIoJ3N0b3JlTG9hZGVyJywgU3RvcmVMb2FkZXIsIHRydWUpO1xuXHRcdGxvY2F0b3IucmVnaXN0ZXIoJ2NvbXBvbmVudExvYWRlcicsIENvbXBvbmVudExvYWRlciwgdHJ1ZSk7XG5cdFx0bG9jYXRvci5yZWdpc3RlcignZG9jdW1lbnRSZW5kZXJlcicsIERvY3VtZW50UmVuZGVyZXIsIHRydWUpO1xuXHRcdGxvY2F0b3IucmVnaXN0ZXIoJ3JlcXVlc3RSb3V0ZXInLCBSZXF1ZXN0Um91dGVyLCB0cnVlKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvb3RzdHJhcHBlckJhc2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNlcnZpY2VMb2NhdG9yID0gcmVxdWlyZSgnY2F0YmVycnktbG9jYXRvcicpO1xuXG4vKipcbiAqIEltcGxlbWVudHMgdGhlIGJhc2ljIENhdGJlcnJ5IGNsYXNzIGZvciBib3RoIHNlcnZlciBhbmQgYnJvd3NlciBlbnZpcm9ubWVudHMuXG4gKi9cbmNsYXNzIENhdGJlcnJ5QmFzZSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJhc2ljIENhdGJlcnJ5IGFwcGxpY2F0aW9uIG1vZHVsZS5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzZXJ2aWNlIGxvY2F0b3IuXG5cdFx0ICogQHR5cGUge1NlcnZpY2VMb2NhdG9yfVxuXHRcdCAqL1xuXHRcdHRoaXMubG9jYXRvciA9IG5ldyBTZXJ2aWNlTG9jYXRvcigpO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCB2ZXJzaW9uIG9mIENhdGJlcnJ5LlxuXHRcdCAqL1xuXHRcdHRoaXMudmVyc2lvbiA9ICc4LjAuMic7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IG9iamVjdCB3aXRoIGV2ZW50cy5cblx0XHQgKiBAdHlwZSB7TW9kdWxlQXBpUHJvdmlkZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5ldmVudHMgPSBudWxsO1xuXG5cdFx0dGhpcy5sb2NhdG9yLnJlZ2lzdGVySW5zdGFuY2UoJ3NlcnZpY2VMb2NhdG9yJywgdGhpcy5sb2NhdG9yKTtcblx0XHR0aGlzLmxvY2F0b3IucmVnaXN0ZXJJbnN0YW5jZSgnY2F0YmVycnknLCB0aGlzKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhdGJlcnJ5QmFzZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBJbXBsZW1lbnRzIHRoZSBiYXNpYyBDb29raWUgV3JhcHBlciBjbGFzcyBmb3IgYm90aCBzZXJ2ZXJcbiAqIGFuZCBicm93c2VyIGVudmlyb25tZW50cy5cbiAqL1xuY2xhc3MgQ29va2llV3JhcHBlckJhc2Uge1xuXG5cdC8qKlxuXHQgKiBHZXRzIGEgbWFwIG9mIGNvb2tpZSB2YWx1ZXMgYnkgdGhlaXIgbmFtZXMuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjb29raWVzIG1hcCBieSB0aGVpciBuYW1lcy5cblx0ICovXG5cdGdldEFsbCgpIHtcblx0XHRjb25zdCBzdHJpbmcgPSB0aGlzLmdldENvb2tpZVN0cmluZygpO1xuXHRcdHJldHVybiB0aGlzLl9wYXJzZUNvb2tpZVN0cmluZyhzdHJpbmcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgYSBjb29raWUgdmFsdWUgYnkgaXRzIG5hbWUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBjb29raWUgbmFtZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvb2tpZSB2YWx1ZS5cblx0ICovXG5cdGdldChuYW1lKSB7XG5cdFx0aWYgKHR5cGVvZiAobmFtZSkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWxsKClbbmFtZV0gfHwgJyc7XG5cdH1cblxuXHQvKipcblx0ICogUGFyc2VzIGEgY29va2llIHN0cmluZyBpbnRvIHRoZSBtYXAgb2YgY29va2llIGtleS92YWx1ZSBwYWlycy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgY29va2llIHN0cmluZy5cblx0ICogQHJldHVybnMge09iamVjdH0gVGhlIG9iamVjdCB3aXRoIGNvb2tpZSB2YWx1ZXMgYnkgdGhlaXIgbmFtZXMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9wYXJzZUNvb2tpZVN0cmluZyhzdHJpbmcpIHtcblx0XHRjb25zdCBjb29raWUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdFx0aWYgKHR5cGVvZiAoc3RyaW5nKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBjb29raWU7XG5cdFx0fVxuXHRcdHN0cmluZ1xuXHRcdFx0LnNwbGl0KC87ICovKVxuXHRcdFx0LmZvckVhY2goY29va2llUGFpciA9PiB7XG5cdFx0XHRcdGNvbnN0IGVxdWFsc0luZGV4ID0gY29va2llUGFpci5pbmRleE9mKCc9Jyk7XG5cdFx0XHRcdGlmIChlcXVhbHNJbmRleCA8IDApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBrZXkgPSBjb29raWVQYWlyXG5cdFx0XHRcdFx0LnN1YnN0cmluZygwLCBlcXVhbHNJbmRleClcblx0XHRcdFx0XHQudHJpbSgpO1xuXG5cdFx0XHRcdGNvb2tpZVtrZXldID0gY29va2llUGFpclxuXHRcdFx0XHRcdC5zdWJzdHJpbmcoZXF1YWxzSW5kZXggKyAxKVxuXHRcdFx0XHRcdC50cmltKClcblx0XHRcdFx0XHQucmVwbGFjZSgvXlwifFwiJC9nLCAnJyk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiBjb29raWU7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBjb29raWUgc2V0dXAgb2JqZWN0IHRvIHRoZSBjb29raWUgc3RyaW5nLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29va2llU2V0dXAgVGhlIGNvb2tpZSBzZXR1cCBvYmplY3QuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb29raWVTZXR1cC5rZXkgVGhlIGNvb2tpZSBrZXkuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb29raWVTZXR1cC52YWx1ZSBUaGUgY29va2llJ3MgdmFsdWUuXG5cdCAqIEBwYXJhbSB7bnVtYmVyP30gY29va2llU2V0dXAubWF4QWdlIFRoZSBjb29raWUncyBtYXggYWdlIGluIHNlY29uZHMuXG5cdCAqIEBwYXJhbSB7RGF0ZT99IGNvb2tpZVNldHVwLmV4cGlyZXMgVGhlIGV4cGlyYXRpb24gZGF0ZS5cblx0ICogQHBhcmFtIHtzdHJpbmc/fSBjb29raWVTZXR1cC5wYXRoIFRoZSBjb29raWUncyBVUkkgcGF0aC5cblx0ICogQHBhcmFtIHtzdHJpbmc/fSBjb29raWVTZXR1cC5kb21haW4gVGhlIGNvb2tpZSdzIGRvbWFpbi5cblx0ICogQHBhcmFtIHtib29sZWFuP30gY29va2llU2V0dXAuc2VjdXJlIElzIHRoZSBjb29raWUgc2VjdXJlZC5cblx0ICogQHBhcmFtIHtib29sZWFuP30gY29va2llU2V0dXAuaHR0cE9ubHkgSXMgdGhlIGNvb2tpZSBIVFRQIG9ubHkuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb29raWUgc3RyaW5nLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRfY29udmVydFRvQ29va2llU2V0dXAoY29va2llU2V0dXApIHtcblx0XHRpZiAodHlwZW9mIChjb29raWVTZXR1cC5rZXkpICE9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIChjb29raWVTZXR1cC52YWx1ZSkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIGtleSBvciB2YWx1ZScpO1xuXHRcdH1cblxuXHRcdHZhciBjb29raWUgPSBgJHtjb29raWVTZXR1cC5rZXl9PSR7Y29va2llU2V0dXAudmFsdWV9YDtcblxuXHRcdC8vIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzYyNjUjc2VjdGlvbi00LjEuMVxuXHRcdGlmICh0eXBlb2YgKGNvb2tpZVNldHVwLm1heEFnZSkgPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb29raWUgKz0gYDsgTWF4LUFnZT0ke2Nvb2tpZVNldHVwLm1heEFnZS50b0ZpeGVkKCl9YDtcblx0XHRcdGlmICghY29va2llU2V0dXAuZXhwaXJlcykge1xuXHRcdFx0XHQvLyBieSBkZWZhdWx0IGV4cGlyZSBkYXRlID0gY3VycmVudCBkYXRlICsgbWF4LWFnZSBpbiBzZWNvbmRzXG5cdFx0XHRcdGNvb2tpZVNldHVwLmV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICtcblx0XHRcdFx0XHRjb29raWVTZXR1cC5tYXhBZ2UgKiAxMDAwKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGNvb2tpZVNldHVwLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRjb29raWUgKz0gYDsgRXhwaXJlcz0ke2Nvb2tpZVNldHVwLmV4cGlyZXMudG9VVENTdHJpbmcoKX1gO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIChjb29raWVTZXR1cC5wYXRoKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGNvb2tpZSArPSBgOyBQYXRoPSR7Y29va2llU2V0dXAucGF0aH1gO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIChjb29raWVTZXR1cC5kb21haW4pID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y29va2llICs9IGA7IERvbWFpbj0ke2Nvb2tpZVNldHVwLmRvbWFpbn1gO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIChjb29raWVTZXR1cC5zZWN1cmUpID09PSAnYm9vbGVhbicgJiZcblx0XHRcdGNvb2tpZVNldHVwLnNlY3VyZSkge1xuXHRcdFx0Y29va2llICs9ICc7IFNlY3VyZSc7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgKGNvb2tpZVNldHVwLmh0dHBPbmx5KSA9PT0gJ2Jvb2xlYW4nICYmXG5cdFx0XHRjb29raWVTZXR1cC5odHRwT25seSkge1xuXHRcdFx0Y29va2llICs9ICc7IEh0dHBPbmx5Jztcblx0XHR9XG5cblx0XHRyZXR1cm4gY29va2llO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29va2llV3JhcHBlckJhc2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW1wbGVtZW50cyB0aGUgYmFzaWMgQ29va2llIFdyYXBwZXIgY2xhc3MgZm9yIGJvdGggc2VydmVyXG4gKiBhbmQgYnJvd3NlciBlbnZpcm9ubWVudHMuXG4gKi9cbmNsYXNzIERvY3VtZW50UmVuZGVyZXJCYXNlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgYmFzaWMgZG9jdW1lbnQgcmVuZGVyZXIuXG5cdCAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGxvY2F0b3IgVGhlIGxvY2F0b3IgZm9yIHJlc29sdmluZyBkZXBlbmRlbmNpZXMuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihsb2NhdG9yKSB7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHNlcnZpY2UgbG9jYXRvci5cblx0XHQgKiBAdHlwZSB7U2VydmljZUxvY2F0b3J9XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3NlcnZpY2VMb2NhdG9yID0gbG9jYXRvcjtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgY29udGV4dCBmYWN0b3J5LlxuXHRcdCAqIEB0eXBlIHtDb250ZXh0RmFjdG9yeX1cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fY29udGV4dEZhY3RvcnkgPSBsb2NhdG9yLnJlc29sdmUoJ2NvbnRleHRGYWN0b3J5Jyk7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGNvbXBvbmVudCBsb2FkZXIuXG5cdFx0ICogQHR5cGUge0NvbXBvbmVudExvYWRlcn1cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fY29tcG9uZW50TG9hZGVyID0gbG9jYXRvci5yZXNvbHZlKCdjb21wb25lbnRMb2FkZXInKTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgZXZlbnQgYnVzLlxuXHRcdCAqIEBwYXJhbSAge0V2ZW50RW1pdHRlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9ldmVudEJ1cyA9IGxvY2F0b3IucmVzb2x2ZSgnZXZlbnRCdXMnKTtcblxuXHRcdGNvbnN0IHN0b3JlTG9hZGVyID0gbG9jYXRvci5yZXNvbHZlKCdzdG9yZUxvYWRlcicpO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBtb2R1bGUgbG9hZGluZyBwcm9taXNlLlxuXHRcdCAqIEB0eXBlIHtQcm9taXNlfVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9sb2FkaW5nID0gUHJvbWlzZS5hbGwoW1xuXHRcdFx0dGhpcy5fY29tcG9uZW50TG9hZGVyLmxvYWQoKSxcblx0XHRcdHN0b3JlTG9hZGVyLmxvYWQoKVxuXHRcdF0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX2xvYWRpbmcgPSBudWxsO1xuXHRcdFx0XHR0aGlzLl9ldmVudEJ1cy5lbWl0KCdyZWFkeScpO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChyZWFzb24gPT4gdGhpcy5fZXZlbnRCdXMuZW1pdCgnZXJyb3InLCByZWFzb24pKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgcHJvbWlzZSBmb3IgdGhlIHN0YXRlIHdoZW4gQ2F0YmVycnkgd2lsbCBiZSBhYmxlIHRvIGhhbmRsZSByZXF1ZXN0cy5cblx0ICogQHJldHVybnMge1Byb21pc2V9IFByb21pc2UgZm9yIG5vdGhpbmcuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdF9nZXRQcm9taXNlRm9yUmVhZHlTdGF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbG9hZGluZyA/XG5cdFx0XHR0aGlzLl9sb2FkaW5nIDpcblx0XHRcdFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jdW1lbnRSZW5kZXJlckJhc2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW1wbGVtZW50cyB0aGUgYmFzaWMgTG9hZGVyIGNsYXNzIGZvciBib3RoIHNlcnZlclxuICogYW5kIGJyb3dzZXIgZW52aXJvbm1lbnRzLlxuICovXG5jbGFzcyBMb2FkZXJCYXNlIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgYmFzaWMgbG9hZGVyLlxuXHQgKiBAcGFyYW0ge1NlcnZpY2VMb2NhdG9yfSBsb2NhdG9yIFRoZSBzZXJ2aWNlIGxvY2F0b3IgZm9yIHJlc29sdmluZyBkZXBlbmRlbmNpZXMuXG5cdCAqIEBwYXJhbSB7QXJyYXl9IHRyYW5zZm9ybXMgVGhlIGxpc3Qgb2YgbW9kdWxlIHRyYW5zZm9ybWF0aW9ucy5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGxvY2F0b3IsIHRyYW5zZm9ybXMpIHtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgbGlzdCBvZiBtb2R1bGUgdHJhbnNmb3JtYXRpb25zLlxuXHRcdCAqIEB0eXBlIHtBcnJheX1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHRoaXMuX3RyYW5zZm9ybXMgPSB0cmFuc2Zvcm1zO1xuXHRcdHRoaXMuX2V2ZW50QnVzID0gbG9jYXRvci5yZXNvbHZlKCdldmVudEJ1cycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgYWxsIHRoZSB0cmFuc2Zvcm1hdGlvbnMgZm9yIHRoZSBsb2FkZWQgbW9kdWxlLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gbW9kdWxlIFRoZSBsb2FkZWQgbW9kdWxlLlxuXHQgKiBAcGFyYW0ge251bWJlcj99IGluZGV4IFRoZSB0cmFuc2Zvcm1hdGlvbiBpbmRleCBpbiB0aGUgbGlzdC5cblx0ICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0gVGhlIHRyYW5zZm9ybWVkIG1vZHVsZS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0X2FwcGx5VHJhbnNmb3Jtcyhtb2R1bGUsIGluZGV4KSB7XG5cdFx0aWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIHRoZSBsaXN0IGlzIGEgc3RhY2ssIHdlIHNob3VsZCByZXZlcnNlIGl0XG5cdFx0XHRpbmRleCA9IHRoaXMuX3RyYW5zZm9ybXMubGVuZ3RoIC0gMTtcblx0XHR9XG5cblx0XHRpZiAoaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1vZHVsZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdHJhbnNmb3JtYXRpb24gPSB0aGlzLl90cmFuc2Zvcm1zW2luZGV4XTtcblxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0LnRoZW4oKCkgPT4gdHJhbnNmb3JtYXRpb24udHJhbnNmb3JtKG1vZHVsZSkpXG5cdFx0XHQuY2F0Y2gocmVhc29uID0+IHtcblx0XHRcdFx0dGhpcy5fZXZlbnRCdXMuZW1pdCgnZXJyb3InLCByZWFzb24pO1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKHRyYW5zZm9ybWVkTW9kdWxlID0+IHRoaXMuX2FwcGx5VHJhbnNmb3Jtcyh0cmFuc2Zvcm1lZE1vZHVsZSwgaW5kZXggLSAxKSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2FkZXJCYXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEltcGxlbWVudHMgdGhlIGJhc2ljIE1vZHVsZSBBUEkgUHJvdmlkZXIgY2xhc3MgZm9yIGJvdGggc2VydmVyXG4gKiBhbmQgYnJvd3NlciBlbnZpcm9ubWVudHMuXG4gKi9cbmNsYXNzIE1vZHVsZUFwaVByb3ZpZGVyQmFzZSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGJhc2ljIEFQSSBwcm92aWRlci5cblx0ICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gbG9jYXRvciBTZXJ2aWNlIGxvY2F0b3IgZm9yIHJlc29sdmluZyBkZXBlbmRlbmNpZXMuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihsb2NhdG9yKSB7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHNlcnZpY2UgbG9jYXRvci5cblx0XHQgKiBAdHlwZSB7U2VydmljZUxvY2F0b3J9XG5cdFx0ICovXG5cdFx0dGhpcy5sb2NhdG9yID0gbG9jYXRvcjtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgY29va2llIHByb3ZpZGVyLlxuXHRcdCAqIEB0eXBlIHtDb29raWVXcmFwcGVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuY29va2llID0gbG9jYXRvci5yZXNvbHZlKCdjb29raWVXcmFwcGVyJyk7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGV2ZW50IGJ1cy5cblx0XHQgKiBAdHlwZSB7RXZlbnRFbWl0dGVyfVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fZXZlbnRCdXMgPSBsb2NhdG9yLnJlc29sdmUoJ2V2ZW50QnVzJyk7XG5cdH1cblxuXHQvKipcblx0ICogU3Vic2NyaWJlcyBvbiB0aGUgc3BlY2lmaWVkIGV2ZW50IGluIENhdGJlcnJ5LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgZXZlbnQgaGFuZGxlci5cblx0ICogQHJldHVybnMge01vZHVsZUFwaVByb3ZpZGVyQmFzZX0gVGhpcyBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHQgKi9cblx0b24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdFx0Y2hlY2tFdmVudE5hbWVBbmRIYW5kbGVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG5cdFx0dGhpcy5fZXZlbnRCdXMub24oZXZlbnROYW1lLCBoYW5kbGVyKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBTdWJzY3JpYmVzIG9uIHRoZSBzcGVjaWZpZWQgZXZlbnQgaW4gQ2F0YmVycnkgdG8gaGFuZGxlIGl0IG9uY2UuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50LlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBldmVudCBoYW5kbGVyLlxuXHQgKiBAcmV0dXJucyB7TW9kdWxlQXBpUHJvdmlkZXJCYXNlfSBUaGlzIG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdCAqL1xuXHRvbmNlKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXHRcdGNoZWNrRXZlbnROYW1lQW5kSGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpO1xuXHRcdHRoaXMuX2V2ZW50QnVzLm9uY2UoZXZlbnROYW1lLCBoYW5kbGVyKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgaGFuZGxlciBmcm9tIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50LlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBldmVudCBoYW5kbGVyLlxuXHQgKiBAcmV0dXJucyB7TW9kdWxlQXBpUHJvdmlkZXJCYXNlfSBUaGlzIG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdCAqL1xuXHRyZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0XHRjaGVja0V2ZW50TmFtZUFuZEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcblx0XHR0aGlzLl9ldmVudEJ1cy5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgYWxsIGhhbmRsZXJzIGZyb20gdGhlIHNwZWNpZmllZCBldmVudCBpbiBDYXRiZXJyeS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuXG5cdCAqIEByZXR1cm5zIHtNb2R1bGVBcGlQcm92aWRlckJhc2V9IFRoaXMgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0ICovXG5cdHJlbW92ZUFsbExpc3RlbmVycyhldmVudE5hbWUpIHtcblx0XHRjaGVja0V2ZW50TmFtZUFuZEhhbmRsZXIoZXZlbnROYW1lLCBzdHViKTtcblx0XHR0aGlzLl9ldmVudEJ1cy5yZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnROYW1lKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBldmVudCBuYW1lIGlzIGEgc3RyaW5nIGFuZCBoYW5kbGVyIGlzIGEgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gY2hlY2suXG4gKiBAcGFyYW0geyp9IGhhbmRsZXIgVGhlIGV2ZW50IGhhbmRsZXIgdG8gY2hlY2suXG4gKi9cbmZ1bmN0aW9uIGNoZWNrRXZlbnROYW1lQW5kSGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcblx0aWYgKHR5cGVvZiAoZXZlbnROYW1lKSAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IG5hbWUgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIChoYW5kbGVyKSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBFcnJvcignRXZlbnQgaGFuZGxlciBzaG91bGQgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG59XG5cbi8qKlxuICogRG9lcyBub3RoaW5nLiBJdCBpcyB1c2VkIGFzIGEgZGVmYXVsdCBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gc3R1YigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlQXBpUHJvdmlkZXJCYXNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFUlJPUl9NRVNTQUdFX1JFR0VYUCA9IC9eKD86W1xcdyRdKyk6ICg/Oi4rKVxccj9cXG4vaTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0LyoqXG5cdCAqIFByaW50cyBhbiBlcnJvciB3aXRoIHByZXR0eSBmb3JtYXR0aW5nLlxuXHQgKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gcHJpbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWdlbnQgVGhlIHVzZXIgYWdlbnQgaW5mb3JtYXRpb24uXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IEhUTUwgdGV4dCB3aXRoIGFsbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXJyb3IuXG5cdCAqL1xuXHRwcmV0dHlQcmludDogKGVycm9yLCB1c2VyQWdlbnQpID0+IHtcblx0XHRpZiAoIWVycm9yIHx8IHR5cGVvZiAoZXJyb3IpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gYFxuPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBmb250LXNpemU6IDEycHQ7XCI+XG5cdCR7KG5ldyBEYXRlKCkpLnRvVVRDU3RyaW5nKCl9Ozxici8+XG5cdCR7dXNlckFnZW50IHx8ICdVbmtub3duIGJyb3dzZXInfTs8YnIvPlxuXHRDYXRiZXJyeUA4LjAuMiAoXG5cdDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2F0YmVycnkvY2F0YmVycnkvaXNzdWVzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0cmVwb3J0IGFuIGlzc3VlXG5cdDwvYT4pXG5cdDxici8+PGJyLz5cblx0PHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkOyBmb250LXNpemU6IDE2cHQ7IGZvbnQtd2VpZ2h0OiBib2xkO1wiPlxuXHRcdCR7ZXNjYXBlKGVycm9yLm5hbWUpfTogJHtlc2NhcGUoZXJyb3IubWVzc2FnZSl9XG5cdDwvc3Bhbj5cblx0PGJyLz48YnIvPlxuXHQke2VzY2FwZShlcnJvci5zdGFjaykucmVwbGFjZShFUlJPUl9NRVNTQUdFX1JFR0VYUCwgJycpfVxuPC9kaXY+XG5gO1xuXHR9XG59O1xuXG4vKipcbiAqIEVzY2FwZXMgdGhlIGVycm9yIHRleHQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIGVycm9yIHRleHQgdG8gZXNjYXBlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVzY2FwZWQgYW5kIGZvcm1hdHRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZSh2YWx1ZSkge1xuXHR2YWx1ZSA9IFN0cmluZyh2YWx1ZSB8fCAnJyk7XG5cdHJldHVybiB2YWx1ZVxuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvXFxcIi9nLCAnJnF1b3Q7Jylcblx0XHQucmVwbGFjZSgvXFwnL2csICcmIzM5OycpXG5cdFx0LnJlcGxhY2UoL1xccj9cXG4vZywgJzxici8+Jyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhlbHBlciA9IHtcblx0Q09NUE9ORU5UX1BSRUZJWDogJ2NhdC0nLFxuXHRDT01QT05FTlRfUFJFRklYX1JFR0VYUDogL15jYXQtL2ksXG5cdENPTVBPTkVOVF9FUlJPUl9URU1QTEFURV9QT1NURklYOiAnLS1lcnJvcicsXG5cdERPQ1VNRU5UX0NPTVBPTkVOVF9OQU1FOiAnZG9jdW1lbnQnLFxuXHRET0NVTUVOVF9FTEVNRU5UX05BTUU6ICdodG1sJyxcblx0SEVBRF9DT01QT05FTlRfTkFNRTogJ2hlYWQnLFxuXHRBVFRSSUJVVEVfSUQ6ICdpZCcsXG5cdEFUVFJJQlVURV9TVE9SRTogJ2NhdC1zdG9yZScsXG5cdERFRkFVTFRfTE9HSUNfRklMRU5BTUU6ICdpbmRleC5qcycsXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuYW1lIGZvciB0aGUgZXJyb3IgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudC5cblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGVycm9yIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnQuXG5cdCAqL1xuXHRnZXROYW1lRm9yRXJyb3JUZW1wbGF0ZTogY29tcG9uZW50TmFtZSA9PiB7XG5cdFx0aWYgKHR5cGVvZiAoY29tcG9uZW50TmFtZSkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnROYW1lICsgaGVscGVyLkNPTVBPTkVOVF9FUlJPUl9URU1QTEFURV9QT1NURklYO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIGlmIHRoZSBzcGVjaWZpZWQgY29tcG9uZW50IG5hbWUgaXMgYSBcImRvY3VtZW50XCIgY29tcG9uZW50J3MgbmFtZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudC5cblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBjb21wb25lbnQncyBuYW1lXG5cdCAqIGlzIGEgXCJkb2N1bWVudFwiIGNvbXBvbmVudCdzIG5hbWUuXG5cdCAqL1xuXHRpc0RvY3VtZW50Q29tcG9uZW50OiBjb21wb25lbnROYW1lID0+XG5cdFx0Y29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSBoZWxwZXIuRE9DVU1FTlRfQ09NUE9ORU5UX05BTUUsXG5cblx0LyoqXG5cdCAqIERldGVybWluZXMgaWYgdGhlIHNwZWNpZmllZCBjb21wb25lbnQgbmFtZSBpcyBhIFwiaGVhZFwiIGNvbXBvbmVudCBuYW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgY29tcG9uZW50LlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIGNvbXBvbmVudCdzIG5hbWVcblx0ICogaXMgYSBcImhlYWRcIiBjb21wb25lbnQncyBuYW1lLlxuXHQgKi9cblx0aXNIZWFkQ29tcG9uZW50OiBjb21wb25lbnROYW1lID0+XG5cdFx0Y29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpID09PSBoZWxwZXIuSEVBRF9DT01QT05FTlRfTkFNRSxcblxuXHQvKipcblx0ICogR2V0cyBhIG9yaWdpbmFsIGNvbXBvbmVudCdzIG5hbWUgd2l0aG91dCBhIHByZWZpeC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZ1bGxDb21wb25lbnROYW1lIFRoZSBmdWxsIGNvbXBvbmVudCdzIG5hbWUgKHRhZyBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIG9yaWdpbmFsIGNvbXBvbmVudCdzIG5hbWUgd2l0aG91dCBhIHByZWZpeC5cblx0ICovXG5cdGdldE9yaWdpbmFsQ29tcG9uZW50TmFtZTogZnVsbENvbXBvbmVudE5hbWUgPT4ge1xuXHRcdGlmICh0eXBlb2YgKGZ1bGxDb21wb25lbnROYW1lKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0ZnVsbENvbXBvbmVudE5hbWUgPSBmdWxsQ29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmIChmdWxsQ29tcG9uZW50TmFtZSA9PT0gaGVscGVyLkhFQURfQ09NUE9ORU5UX05BTUUpIHtcblx0XHRcdHJldHVybiBmdWxsQ29tcG9uZW50TmFtZTtcblx0XHR9XG5cdFx0aWYgKGZ1bGxDb21wb25lbnROYW1lID09PSBoZWxwZXIuRE9DVU1FTlRfQ09NUE9ORU5UX05BTUUgfHxcblx0XHRcdGZ1bGxDb21wb25lbnROYW1lID09PSBoZWxwZXIuRE9DVU1FTlRfRUxFTUVOVF9OQU1FKSB7XG5cdFx0XHRyZXR1cm4gaGVscGVyLkRPQ1VNRU5UX0NPTVBPTkVOVF9OQU1FO1xuXHRcdH1cblx0XHRyZXR1cm4gZnVsbENvbXBvbmVudE5hbWUucmVwbGFjZShoZWxwZXIuQ09NUE9ORU5UX1BSRUZJWF9SRUdFWFAsICcnKTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0cyBhIHZhbGlkIHRhZyBuYW1lIGZvciBhIGNvbXBvbmVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudC5cblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIHRhZy5cblx0ICovXG5cdGdldFRhZ05hbWVGb3JDb21wb25lbnROYW1lOiBjb21wb25lbnROYW1lID0+IHtcblx0XHRpZiAodHlwZW9mIChjb21wb25lbnROYW1lKSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgdXBwZXJDb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpO1xuXHRcdGlmIChjb21wb25lbnROYW1lID09PSBoZWxwZXIuSEVBRF9DT01QT05FTlRfTkFNRSkge1xuXHRcdFx0cmV0dXJuIHVwcGVyQ29tcG9uZW50TmFtZTtcblx0XHR9XG5cdFx0aWYgKGNvbXBvbmVudE5hbWUgPT09IGhlbHBlci5ET0NVTUVOVF9DT01QT05FTlRfTkFNRSkge1xuXHRcdFx0cmV0dXJuIGhlbHBlci5ET0NVTUVOVF9FTEVNRU5UX05BTUUudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGhlbHBlci5DT01QT05FTlRfUFJFRklYLnRvVXBwZXJDYXNlKCkgKyB1cHBlckNvbXBvbmVudE5hbWU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgYSBwcmVmaXhlZCBtZXRob2Qgb2YgdGhlIG1vZHVsZSB0aGF0IGNhbiBiZSBpbnZva2VkLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gbW9kdWxlIFRoZSBtb2R1bGUgaW1wbGVtZW50YXRpb24uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggVGhlIG1ldGhvZCBwcmVmaXggKGkuZS4gaGFuZGxlKS5cblx0ICogQHBhcmFtIHtzdHJpbmc/fSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBlbnRpdHkgdG8gaW52b2tlIG1ldGhvZCBmb3Jcblx0ICogKHdpbGwgYmUgY29udmVydGVkIHRvIGEgY2FtZWwgY2FzZSkuXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIG1ldGhvZCB0byBpbnZva2UuXG5cdCAqL1xuXHRnZXRNZXRob2RUb0ludm9rZTogKG1vZHVsZSwgcHJlZml4LCBuYW1lKSA9PiB7XG5cdFx0aWYgKCFtb2R1bGUgfHwgdHlwZW9mIChtb2R1bGUpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRQcm9taXNlTWV0aG9kO1xuXHRcdH1cblx0XHRjb25zdCBtZXRob2ROYW1lID0gaGVscGVyLmdldENhbWVsQ2FzZU5hbWUocHJlZml4LCBuYW1lKTtcblx0XHRpZiAodHlwZW9mIChtb2R1bGVbbWV0aG9kTmFtZV0pID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gbW9kdWxlW21ldGhvZE5hbWVdLmJpbmQobW9kdWxlKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiAobW9kdWxlW3ByZWZpeF0pID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gbW9kdWxlW3ByZWZpeF0uYmluZChtb2R1bGUsIG5hbWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWZhdWx0UHJvbWlzZU1ldGhvZDtcblx0fSxcblxuXHQvKipcblx0ICogR2V0cyBhIG5hbWUgaW4gdGhlIGNhbWVsIGNhc2UgZm9yIGFueXRoaW5nLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IFRoZSBwcmVmaXggZm9yIHRoZSBuYW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSB0byBjb252ZXJ0LlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBOYW1lIGluIHRoZSBjYW1lbCBjYXNlLlxuXHQgKi9cblx0Z2V0Q2FtZWxDYXNlTmFtZTogKHByZWZpeCwgbmFtZSkgPT4ge1xuXHRcdGlmICghbmFtZSkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRpZiAocHJlZml4KSB7XG5cdFx0XHRuYW1lID0gYCR7cHJlZml4fS0ke25hbWV9YDtcblx0XHR9XG5cdFx0cmV0dXJuIG5hbWVcblx0XHRcdC5yZXBsYWNlKC8oPzpbXmEtejAtOV0rKShcXHcpL2dpLCAoc3BhY2UsIGxldHRlcikgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpXG5cdFx0XHQucmVwbGFjZSgvKF5bXmEtejAtOV0pfChbXmEtejAtOV0kKS9naSwgJycpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgc2FmZSBwcm9taXNlIHJlc29sdmVkIGJ5IHRoZSBhY3Rpb24uXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvbiBUaGUgYWN0aW9uIHRvIHdyYXAgd2l0aCBhIHNhZmUgcHJvbWlzZS5cblx0ICogQHJldHVybnMge1Byb21pc2V9IFRoZSBwcm9taXNlIGZvciB0aGUgZG9uZSBhY3Rpb24uXG5cdCAqL1xuXHRnZXRTYWZlUHJvbWlzZTogYWN0aW9uID0+IHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhY3Rpb24oKSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBKdXN0IHJldHVybnMgYSByZXNvbHZlZCBwcm9taXNlLlxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBwcm9taXNlIGZvciBub3RoaW5nLlxuICovXG5mdW5jdGlvbiBkZWZhdWx0UHJvbWlzZU1ldGhvZCgpIHtcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0LyoqXG5cdCAqIERlZmluZXMgYSByZWFkLW9ubHkgcHJvcGVydHkuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBkZWZpbmUgYSBwcm9wZXJ0eSBpbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5LlxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHkuXG5cdCAqL1xuXHRkZWZpbmVSZWFkT25seTogKG9iamVjdCwgbmFtZSwgdmFsdWUpID0+IHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBuYW1lLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZVxuXHRcdH0pO1xuXHR9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBVUklfUEFUSF9SRVBMQUNFTUVOVF9SRUdfRVhQX1NPVVJDRSA9ICcoW15cXFxcL1xcXFxcXFxcXSopJztcbmNvbnN0IFVSSV9RVUVSWV9SRVBMQUNFTUVOVF9SRUdfRVhQX1NPVVJDRSA9ICcoW14mPz1dKiknO1xuXG5jb25zdCBQQVRIX0VORF9TTEFTSF9SRUdfRVhQID0gLyguKylcXC8oJHxcXD98IykvO1xuY29uc3QgSURFTlRJRklFUl9SRUdfRVhQX1NPVVJDRSA9ICdbJEEtWl9dW1xcXFxkQS1aXyRdKic7XG5jb25zdCBTVE9SRV9MSVNUX1JFR19FWFBfU09VUkNFID0gJyg/Oig/OlxcXFxcXFxcW1sgXSonICtcblx0XHQnW15cXFxcW1xcXFxdLF0rJyArXG5cdFx0JyhbIF0qLFsgXSonICtcblx0XHQnW15cXFxcW1xcXFxdLF0rJyArXG5cdFx0JykqWyBdKlxcXFxcXFxcXSl8KD86XFxcXFxcXFxbWyBdKlxcXFxcXFxcXSkpPyc7XG5jb25zdCBQQVJBTUVURVJfUkVHX0VYUF9TT1VSQ0UgPSBgOiR7SURFTlRJRklFUl9SRUdfRVhQX1NPVVJDRX0ke1NUT1JFX0xJU1RfUkVHX0VYUF9TT1VSQ0V9YDtcbmNvbnN0IFNMQVNIRURfQlJBQ0tFVFNfUkVHX0VYUCA9IC9cXFxcXFxbfFxcXFxcXF0vO1xuY29uc3QgU1RPUkVfTElTVF9TRVBBUkFUT1IgPSAnLCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIGEgc2xhc2ggZnJvbSB0aGUgZW5kIG9mIHRoZSBVUkkgcGF0aC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHVyaVBhdGggVGhlIFVSSSBwYXRoLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgVVJJIHdpdGhvdXQgYSBzbGFzaCBhdCB0aGUgZW5kLlxuXHQgKi9cblx0cmVtb3ZlRW5kU2xhc2g6IHVyaVBhdGggPT4ge1xuXHRcdGlmICghdXJpUGF0aCB8fCB0eXBlb2YgKHVyaVBhdGgpICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRpZiAodXJpUGF0aCA9PT0gJy8nKSB7XG5cdFx0XHRyZXR1cm4gdXJpUGF0aDtcblx0XHR9XG5cdFx0cmV0dXJuIHVyaVBhdGgucmVwbGFjZShQQVRIX0VORF9TTEFTSF9SRUdfRVhQLCAnJDEkMicpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgVVJJIG1hcHBlciBmcm9tIHRoZSBhIHJvdXRlIGV4cHJlc3Npb24gbGlrZTpcblx0ICogL3NvbWUvOmlkW3N0b3JlMSwgc3RvcmUyLCBzdG9yZTNdL2RldGFpbHM/ZmlsdGVyPTpmaWx0ZXJbc3RvcmUzXS5cblx0ICogQHBhcmFtIHtVUkl9IHJvdXRlVXJpIFRoZSBleHByZXNzaW9uIHRoYXQgZGVmaW5lcyBhIHJvdXRlLlxuXHQgKiBAcmV0dXJucyB7e2V4cHJlc3Npb246IFJlZ0V4cCwgbWFwOiBGdW5jdGlvbn18bnVsbH0gVGhlIFVSSSBtYXBwZXIgb2JqZWN0LlxuXHQgKi9cblx0Y29tcGlsZVJvdXRlOiByb3V0ZVVyaSA9PiB7XG5cdFx0aWYgKCFyb3V0ZVVyaSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gZXNjYXBlIHJlZ3VsYXIgZXhwcmVzc2lvbiBjaGFyYWN0ZXJzXG5cdFx0Y29uc3QgZXNjYXBlZCA9IGVzY2FwZUV4cHJlc3Npb24ocm91dGVVcmkucGF0aCk7XG5cblx0XHQvLyBnZXQgYWxsIG9jY3VycmVuY2VzIG9mIHJvdXRpbmcgcGFyYW1ldGVycyBpbiBVUkkgcGF0aFxuXHRcdGNvbnN0IHJlZ0V4cFNvdXJjZSA9IGBeJHtlc2NhcGVkLnJlcGxhY2UoXG5cdFx0XHRuZXcgUmVnRXhwKFBBUkFNRVRFUl9SRUdfRVhQX1NPVVJDRSwgJ2dpJyksIFVSSV9QQVRIX1JFUExBQ0VNRU5UX1JFR19FWFBfU09VUkNFXG5cdFx0KX0kYDtcblx0XHRjb25zdCBleHByZXNzaW9uID0gbmV3IFJlZ0V4cChyZWdFeHBTb3VyY2UsICdpJyk7XG5cdFx0Y29uc3QgcGF0aFBhcmFtZXRlck1hdGNoZXMgPSBlc2NhcGVkLm1hdGNoKG5ldyBSZWdFeHAoUEFSQU1FVEVSX1JFR19FWFBfU09VUkNFLCAnZ2knKSk7XG5cdFx0Y29uc3QgcGF0aFBhcmFtZXRlcnMgPSBwYXRoUGFyYW1ldGVyTWF0Y2hlcyA/XG5cdFx0XHRwYXRoUGFyYW1ldGVyTWF0Y2hlcy5tYXAoZ2V0UGFyYW1ldGVyRGVzY3JpcHRvcikgOlxuXHRcdFx0bnVsbDtcblxuXHRcdHZhciBxdWVyeU1hcHBlciwgcGF0aE1hcHBlcjtcblxuXHRcdGlmIChwYXRoUGFyYW1ldGVycykge1xuXHRcdFx0cGF0aE1hcHBlciA9IGNyZWF0ZVVyaVBhdGhNYXBwZXIoZXhwcmVzc2lvbiwgcGF0aFBhcmFtZXRlcnMpO1xuXHRcdH1cblxuXHRcdGlmIChyb3V0ZVVyaS5xdWVyeSkge1xuXHRcdFx0Y29uc3QgcXVlcnlQYXJhbWV0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRcdFx0T2JqZWN0LmtleXMocm91dGVVcmkucXVlcnkudmFsdWVzKVxuXHRcdFx0XHQuZm9yRWFjaChuYW1lID0+IHtcblx0XHRcdFx0XHQvLyBhcnJheXMgaW4gcm91dGluZyBkZWZpbml0aW9ucyBhcmUgbm90IHN1cHBvcnRlZFxuXHRcdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHJvdXRlVXJpLnF1ZXJ5LnZhbHVlc1tuYW1lXSkpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBlc2NhcGUgcmVndWxhciBleHByZXNzaW9uIGNoYXJhY3RlcnNcblx0XHRcdFx0XHRjb25zdCBlc2NhcGVkID0gZXNjYXBlRXhwcmVzc2lvbihyb3V0ZVVyaS5xdWVyeS52YWx1ZXNbbmFtZV0pO1xuXG5cdFx0XHRcdFx0Ly8gZ2V0IGFsbCBvY2N1cnJlbmNlcyBvZiByb3V0aW5nIHBhcmFtZXRlcnMgaW4gVVJJIHBhdGhcblx0XHRcdFx0XHRjb25zdCByZWdFeHBTb3VyY2UgPSBgXiR7ZXNjYXBlZC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0bmV3IFJlZ0V4cChQQVJBTUVURVJfUkVHX0VYUF9TT1VSQ0UsICdnaScpLCBVUklfUVVFUllfUkVQTEFDRU1FTlRfUkVHX0VYUF9TT1VSQ0Vcblx0XHRcdFx0XHQpfSRgO1xuXHRcdFx0XHRcdGNvbnN0IHF1ZXJ5UGFyYW1ldGVyTWF0Y2hlcyA9IGVzY2FwZWQubWF0Y2gobmV3IFJlZ0V4cChQQVJBTUVURVJfUkVHX0VYUF9TT1VSQ0UsICdnaScpKTtcblx0XHRcdFx0XHRpZiAoIXF1ZXJ5UGFyYW1ldGVyTWF0Y2hlcyB8fCBxdWVyeVBhcmFtZXRlck1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgcGFyYW1ldGVyID0gZ2V0UGFyYW1ldGVyRGVzY3JpcHRvcihcblx0XHRcdFx0XHRcdHF1ZXJ5UGFyYW1ldGVyTWF0Y2hlc1txdWVyeVBhcmFtZXRlck1hdGNoZXMubGVuZ3RoIC0gMV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHJlZ0V4cFNvdXJjZSwgJ2knKTtcblx0XHRcdFx0XHRwYXJhbWV0ZXIubWFwID0gY3JlYXRlVXJpUXVlcnlWYWx1ZU1hcHBlcihleHByZXNzaW9uKTtcblx0XHRcdFx0XHRxdWVyeVBhcmFtZXRlcnNbbmFtZV0gPSBwYXJhbWV0ZXI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0cXVlcnlNYXBwZXIgPSBjcmVhdGVVcmlRdWVyeU1hcHBlcihxdWVyeVBhcmFtZXRlcnMpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRleHByZXNzaW9uLFxuXHRcdFx0bWFwOiB1cmkgPT4ge1xuXHRcdFx0XHRjb25zdCBzdGF0ZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0XHRcdGlmIChwYXRoTWFwcGVyKSB7XG5cdFx0XHRcdFx0cGF0aE1hcHBlcih1cmkucGF0aCwgc3RhdGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHF1ZXJ5TWFwcGVyICYmIHVyaS5xdWVyeSkge1xuXHRcdFx0XHRcdHF1ZXJ5TWFwcGVyKHVyaS5xdWVyeS52YWx1ZXMsIHN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG59O1xuXG4vKipcbiAqIEVzY2FwZXMgdGhlIHJvdXRpbmcgZXhwcmVzc2lvbi5cbiAqIEBwYXJhbSAge3N0cmluZ30gZXhwcmVzc2lvbiBUaGUgZXhwcmVzc2lvbiB0byBlc2NhcGUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBlc2NhcGVzIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG5cdHJldHVybiBleHByZXNzaW9uLnJlcGxhY2UoL1tcXC1cXFtcXF1cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJyk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkkgcGF0aC10by1zdGF0ZSBvYmplY3QgbWFwcGVyLlxuICogQHBhcmFtIHtSZWdFeHB9IGV4cHJlc3Npb24gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBVUkkgcGF0aC5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtZXRlcnMgVGhlIGxpc3Qgb2YgcGFyYW1ldGVyIGRlc2NyaXB0b3JzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgVVJJIG1hcHBlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlVXJpUGF0aE1hcHBlcihleHByZXNzaW9uLCBwYXJhbWV0ZXJzKSB7XG5cdHJldHVybiAodXJpUGF0aCwgc3RhdGUpID0+IHtcblx0XHR2YXIgbWF0Y2hlcyA9IHVyaVBhdGgubWF0Y2goZXhwcmVzc2lvbik7XG5cdFx0aWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoIDwgMikge1xuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdH1cblxuXHRcdC8vIHN0YXJ0IHdpdGggc2Vjb25kIG1hdGNoIGJlY2F1c2UgZmlyc3QgbWF0Y2ggaXMgYWx3YXlzXG5cdFx0Ly8gdGhlIHdob2xlIFVSSSBwYXRoXG5cdFx0bWF0Y2hlcyA9IG1hdGNoZXMuc3BsaWNlKDEpO1xuXG5cdFx0cGFyYW1ldGVycy5mb3JFYWNoKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG5cdFx0XHR2YXIgdmFsdWUgPSBtYXRjaGVzW2luZGV4XTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0Ly8gbm90aGluZyB0byBkb1xuXHRcdFx0fVxuXHRcdFx0cGFyYW1ldGVyLnN0b3JlTmFtZXMuZm9yRWFjaChzdG9yZU5hbWUgPT4ge1xuXHRcdFx0XHRpZiAoIShzdG9yZU5hbWUgaW4gc3RhdGUpKSB7XG5cdFx0XHRcdFx0c3RhdGVbc3RvcmVOYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RhdGVbc3RvcmVOYW1lXVtwYXJhbWV0ZXIubmFtZV0gPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJJIHF1ZXJ5LXRvLXN0YXRlIG9iamVjdCBtYXBwZXIuXG4gKiBAcGFyYW0ge01hcH0gcGFyYW1ldGVycyBUaGUgTWFwIG9mIHBvc3NpYmxlIHF1ZXJ5IHBhcmFtZXRlclxuICogZGVzY3JpcHRvcnMgYnkgdGhlaXIgbmFtZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFVSSSBtYXBwZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVVyaVF1ZXJ5TWFwcGVyKHBhcmFtZXRlcnMpIHtcblx0cmV0dXJuIChxdWVyeVZhbHVlcywgc3RhdGUpID0+IHtcblx0XHRxdWVyeVZhbHVlcyA9IHF1ZXJ5VmFsdWVzIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHRPYmplY3Qua2V5cyhxdWVyeVZhbHVlcylcblx0XHRcdC5mb3JFYWNoKHF1ZXJ5S2V5ID0+IHtcblx0XHRcdFx0Y29uc3QgcGFyYW1ldGVyID0gcGFyYW1ldGVyc1txdWVyeUtleV07XG5cdFx0XHRcdGlmICghcGFyYW1ldGVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBBcnJheS5pc0FycmF5KHF1ZXJ5VmFsdWVzW3F1ZXJ5S2V5XSkgP1xuXHRcdFx0XHRcdHF1ZXJ5VmFsdWVzW3F1ZXJ5S2V5XVxuXHRcdFx0XHRcdFx0Lm1hcChwYXJhbWV0ZXIubWFwKVxuXHRcdFx0XHRcdFx0LmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gbnVsbCkgOlxuXHRcdFx0XHRcdHBhcmFtZXRlci5tYXAocXVlcnlWYWx1ZXNbcXVlcnlLZXldKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1ldGVyLnN0b3JlTmFtZXMuZm9yRWFjaChzdG9yZU5hbWUgPT4ge1xuXHRcdFx0XHRcdGlmIChzdGF0ZVtzdG9yZU5hbWVdID09PSBudWxsIHx8XG5cdFx0XHRcdFx0XHR0eXBlb2YgKHN0YXRlW3N0b3JlTmFtZV0pICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdFx0c3RhdGVbc3RvcmVOYW1lXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0YXRlW3N0b3JlTmFtZV1bcGFyYW1ldGVyLm5hbWVdID0gdmFsdWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH07XG59XG5cbi8qKlxuICogTWFwcyBhIHF1ZXJ5IHBhcmFtZXRlcidzIHZhbHVlIHVzaW5nIHRoZSBwYXJhbWV0ZXJzIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0ge1JlZ0V4cH0gZXhwcmVzc2lvbiBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIGdldCBhIHBhcmFtZXRlciB2YWx1ZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gVGhlIGZ1bmN0aW9uIGZvciBtYXBwaW5nIHRoZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyJ3MgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVVyaVF1ZXJ5VmFsdWVNYXBwZXIoZXhwcmVzc2lvbikge1xuXHRyZXR1cm4gdmFsdWUgPT4ge1xuXHRcdHZhbHVlID0gdmFsdWVcblx0XHRcdC50b1N0cmluZygpXG5cdFx0XHQvLyB3ZSBoYXZlIHRvIHRlbXBvcmFyeSBlbmNvZGUgdGhlc2UgY2hhcmFjdGVycyBmb3Igbm90IGJyZWFraW5nXG5cdFx0XHQvLyBleHByZXNzaW9uIHBhcnNpbmcsIGJlY2F1c2UgaXQncyB0ZXJtaW5hdGVkIGJ5IHF1ZXJ5IHNlcGFyYXRvclxuXHRcdFx0LnJlcGxhY2UoLz0vZywgJyUzRCcpXG5cdFx0XHQucmVwbGFjZSgvXFw/L2csICclM0YnKVxuXHRcdFx0LnJlcGxhY2UoLyYvZywgJyUyNicpO1xuXG5cdFx0Y29uc3QgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKGV4cHJlc3Npb24pO1xuXHRcdGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gdGhlIHZhbHVlIGlzIHRoZSBzZWNvbmQgaXRlbSwgdGhlIGZpcnN0IGlzIGEgd2hvbGUgc3RyaW5nXG5cdFx0dmFyIG1hcHBlZFZhbHVlID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuXHRcdHRyeSB7XG5cdFx0XHRtYXBwZWRWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXBwZWRWYWx1ZSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gbm90aGluZyB0byBkb1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXBwZWRWYWx1ZTtcblx0fTtcbn1cblxuLyoqXG4gKiBHZXRzIGRlc2NyaXB0aW9uIGZvciBhIHBhcmFtZXRlciBmcm9tIGl0cyBleHByZXNzaW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtZXRlciBUaGUgcGFyYW1ldGVyIGV4cHJlc3Npb24uXG4gKiBAcmV0dXJucyB7e25hbWU6IHN0cmluZywgc3RvcmVOYW1lczogQXJyYXl9fSBUaGUgcGFyYW1ldGVyIGRlc2NyaXB0b3IuXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtZXRlckRlc2NyaXB0b3IocGFyYW1ldGVyKSB7XG5cdGNvbnN0IHBhcnRzID0gcGFyYW1ldGVyLnNwbGl0KFNMQVNIRURfQlJBQ0tFVFNfUkVHX0VYUCk7XG5cblx0cmV0dXJuIHtcblx0XHRuYW1lOiBwYXJ0c1swXVxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnN1YnN0cmluZygxKSxcblx0XHRzdG9yZU5hbWVzOiAocGFydHNbMV0gPyBwYXJ0c1sxXSA6ICcnKVxuXHRcdFx0LnNwbGl0KFNUT1JFX0xJU1RfU0VQQVJBVE9SKVxuXHRcdFx0Lm1hcChzdG9yZU5hbWUgPT4gc3RvcmVOYW1lLnRyaW0oKSlcblx0XHRcdC5maWx0ZXIoc3RvcmVOYW1lID0+IHN0b3JlTmFtZS5sZW5ndGggPiAwKVxuXHR9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByb3V0ZUhlbHBlciA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9yb3V0ZUhlbHBlcicpO1xuY29uc3QgY2F0YmVycnlVcmkgPSByZXF1aXJlKCdjYXRiZXJyeS11cmknKTtcbmNvbnN0IFVSSSA9IGNhdGJlcnJ5VXJpLlVSSTtcblxuLyoqXG4gKiBJbXBsZW1lbnRzIHRoZSBzdGF0ZSBwcm92aWRlciBmb3IgdGhlIHNlcnZlciBlbnZpcm9ubWVudC5cbiAqL1xuY2xhc3MgU3RhdGVQcm92aWRlciB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgc3RhdGUgcHJvdmlkZXIuXG5cdCAqIEBwYXJhbSB7U2VydmljZUxvY2F0b3J9IGxvY2F0b3IgU2VydmljZSBsb2NhdG9yIGZvciByZXNvbHZpbmcgVVJJIG1hcHBlcnMuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihsb2NhdG9yKSB7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGxpc3Qgb2YgVVJJIG1hcHBlcnMuXG5cdFx0ICogQHR5cGUge0FycmF5fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dGhpcy5fdXJpTWFwcGVycyA9IHRoaXMuX2dldFVyaU1hcHBlcnMobG9jYXRvcik7XG5cdH1cblxuXHQvKipcblx0ICogR2V0cyBhIHN0YXRlIGJ5IHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gVVJJLlxuXHQgKiBAcGFyYW0ge1VSSX0gbG9jYXRpb24gVGhlIFVSSSBsb2NhdGlvbi5cblx0ICogQHJldHVybnMge09iamVjdHxudWxsfSBUaGUgc3RhdGUgb2JqZWN0LlxuXHQgKi9cblx0Z2V0U3RhdGVCeVVyaShsb2NhdGlvbikge1xuXHRcdGlmICh0aGlzLl91cmlNYXBwZXJzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bG9jYXRpb24gPSBsb2NhdGlvbi5jbG9uZSgpO1xuXG5cdFx0bG9jYXRpb24ucGF0aCA9IHJvdXRlSGVscGVyLnJlbW92ZUVuZFNsYXNoKGxvY2F0aW9uLnBhdGgpO1xuXHRcdGNvbnN0IHN0YXRlID0gdGhpcy5fbWFwU3RhdGUobG9jYXRpb24pO1xuXHRcdGlmICghc3RhdGUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdC8vIG1ha2Ugc3RhdGUgb2JqZWN0IGltbXV0YWJsZVxuXHRcdE9iamVjdC5rZXlzKHN0YXRlKS5mb3JFYWNoKHN0b3JlTmFtZSA9PiBPYmplY3QuZnJlZXplKHN0YXRlW3N0b3JlTmFtZV0pKTtcblx0XHRPYmplY3QuZnJlZXplKHN0YXRlKTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYXBzIHRoZSBzdGF0ZS5cblx0ICogQHBhcmFtIHtVUkl9IGxvY2F0aW9uIFVSSSB0aGF0IGRlc2NyaWJlcyB0aGUgc3RhdGUuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0gVGhlIHN0YXRlIGZyb20gVVJJLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X21hcFN0YXRlKGxvY2F0aW9uKSB7XG5cdFx0dmFyIHN0YXRlID0gbnVsbDtcblxuXHRcdHRoaXMuX3VyaU1hcHBlcnMuc29tZShtYXBwZXIgPT4ge1xuXHRcdFx0aWYgKG1hcHBlci5leHByZXNzaW9uLnRlc3QobG9jYXRpb24ucGF0aCkpIHtcblx0XHRcdFx0c3RhdGUgPSBtYXBwZXIubWFwKGxvY2F0aW9uKSB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXRzIGEgbGlzdCBvZiBVUkkgbWFwcGVycy5cblx0ICogQHBhcmFtIHtTZXJ2aWNlTG9jYXRvcn0gc2VydmljZUxvY2F0b3IgVGhlIFNlcnZpY2UgbG9jYXRvclxuXHQgKiBmb3IgZ2V0dGluZyByb3V0ZSBkZWZpbml0aW9ucy5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgbGlzdCBvZiBVUkkgbWFwcGVycy5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9nZXRVcmlNYXBwZXJzKHNlcnZpY2VMb2NhdG9yKSB7XG5cdFx0Y29uc3QgdXJpTWFwcGVycyA9IFtdO1xuXG5cdFx0dmFyIHJvdXRlRGVmaW5pdGlvbnM7XG5cblx0XHR0cnkge1xuXHRcdFx0cm91dGVEZWZpbml0aW9ucyA9IHNlcnZpY2VMb2NhdG9yLnJlc29sdmVBbGwoJ3JvdXRlRGVmaW5pdGlvbicpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJvdXRlRGVmaW5pdGlvbnMgPSBbXTtcblx0XHR9XG5cblx0XHRyb3V0ZURlZmluaXRpb25zXG5cdFx0XHQuZm9yRWFjaChyb3V0ZSA9PiB7XG5cdFx0XHRcdC8vIGp1c3QgY29sb24tcGFyYW1ldHJpemVkIHN0cmluZ1xuXHRcdFx0XHRpZiAodHlwZW9mIChyb3V0ZSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29uc3Qgcm91dGVVcmkgPSBuZXcgVVJJKHJvdXRlKTtcblx0XHRcdFx0XHRyb3V0ZVVyaS5wYXRoID0gcm91dGVIZWxwZXIucmVtb3ZlRW5kU2xhc2gocm91dGVVcmkucGF0aCk7XG5cdFx0XHRcdFx0dXJpTWFwcGVycy5wdXNoKHJvdXRlSGVscGVyLmNvbXBpbGVSb3V0ZShyb3V0ZVVyaSkpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGV4dGVuZGVkIGNvbG9uLXBhcmFtZXRyaXplZCBtYXBwZXJcblx0XHRcdFx0aWYgKHR5cGVvZiAocm91dGUpID09PSAnb2JqZWN0JyAmJlxuXHRcdFx0XHRcdCh0eXBlb2YgKHJvdXRlLmV4cHJlc3Npb24pID09PSAnc3RyaW5nJykgJiZcblx0XHRcdFx0XHQocm91dGUubWFwIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG5cblx0XHRcdFx0XHRjb25zdCBtYXBwZXJVcmkgPSBuZXcgVVJJKHJvdXRlLmV4cHJlc3Npb24pO1xuXHRcdFx0XHRcdG1hcHBlclVyaS5wYXRoID0gcm91dGVIZWxwZXIucmVtb3ZlRW5kU2xhc2gobWFwcGVyVXJpLnBhdGgpO1xuXG5cdFx0XHRcdFx0Y29uc3QgbWFwcGVyID0gcm91dGVIZWxwZXIuY29tcGlsZVJvdXRlKG1hcHBlclVyaSk7XG5cblx0XHRcdFx0XHR1cmlNYXBwZXJzLnB1c2goe1xuXHRcdFx0XHRcdFx0ZXhwcmVzc2lvbjogbWFwcGVyLmV4cHJlc3Npb24sXG5cdFx0XHRcdFx0XHRtYXA6IHVyaSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN0YXRlID0gbWFwcGVyLm1hcCh1cmkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcm91dGUubWFwKHN0YXRlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyByZWd1bGFyIGV4cHJlc3Npb24gbWFwcGVyXG5cdFx0XHRcdGlmICh0eXBlb2YgKHJvdXRlKSA9PT0gJ29iamVjdCcgJiZcblx0XHRcdFx0XHQocm91dGUuZXhwcmVzc2lvbiBpbnN0YW5jZW9mIFJlZ0V4cCkgJiZcblx0XHRcdFx0XHQocm91dGUubWFwIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG5cdFx0XHRcdFx0dXJpTWFwcGVycy5wdXNoKHJvdXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIHVyaU1hcHBlcnM7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZVByb3ZpZGVyO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbihuKSB7XG4gIGlmICghaXNOdW1iZXIobikgfHwgbiA8IDAgfHwgaXNOYU4obikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHZhciBlciwgaGFuZGxlciwgbGVuLCBhcmdzLCBpLCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIGlmICghdGhpcy5fZXZlbnRzLmVycm9yIHx8XG4gICAgICAgIChpc09iamVjdCh0aGlzLl9ldmVudHMuZXJyb3IpICYmICF0aGlzLl9ldmVudHMuZXJyb3IubGVuZ3RoKSkge1xuICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICAgIH1cbiAgICAgIHRocm93IFR5cGVFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudC4nKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSlcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIGZhc3QgY2FzZXNcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHNsb3dlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbih0eXBlKSB7XG4gIGlmICh0aGlzLl9ldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV2bGlzdGVuZXIpKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoZXZsaXN0ZW5lcilcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xufTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuIiwiKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcuamFkZSA9IGYoKX19KShmdW5jdGlvbigpe3ZhciBkZWZpbmUsbW9kdWxlLGV4cG9ydHM7cmV0dXJuIChmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNZXJnZSB0d28gYXR0cmlidXRlIG9iamVjdHMgZ2l2aW5nIHByZWNlZGVuY2VcbiAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gKiBhbGxvd2luZyBmb3IgYXJyYXlzIGFuZCBtZXJnaW5nL2pvaW5pbmcgYXBwcm9wcmlhdGVseVxuICogcmVzdWx0aW5nIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fSBhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IG1lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG4gIHZhciBhYyA9IGFbJ2NsYXNzJ107XG4gIHZhciBiYyA9IGJbJ2NsYXNzJ107XG5cbiAgaWYgKGFjIHx8IGJjKSB7XG4gICAgYWMgPSBhYyB8fCBbXTtcbiAgICBiYyA9IGJjIHx8IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhYykpIGFjID0gW2FjXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYmMpKSBiYyA9IFtiY107XG4gICAgYVsnY2xhc3MnXSA9IGFjLmNvbmNhdChiYykuZmlsdGVyKG51bGxzKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSAhPSAnY2xhc3MnKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIEZpbHRlciBudWxsIGB2YWxgcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG51bGxzKHZhbCkge1xuICByZXR1cm4gdmFsICE9IG51bGwgJiYgdmFsICE9PSAnJztcbn1cblxuLyoqXG4gKiBqb2luIGFycmF5IGFzIGNsYXNzZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5qb2luQ2xhc3NlcyA9IGpvaW5DbGFzc2VzO1xuZnVuY3Rpb24gam9pbkNsYXNzZXModmFsKSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsLm1hcChqb2luQ2xhc3NlcykgOlxuICAgICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpID8gT2JqZWN0LmtleXModmFsKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdmFsW2tleV07IH0pIDpcbiAgICBbdmFsXSkuZmlsdGVyKG51bGxzKS5qb2luKCcgJyk7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBjbGFzc2VzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXNcbiAqIEBwYXJhbSB7QXJyYXkuPEJvb2xlYW4+fSBlc2NhcGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xzID0gZnVuY3Rpb24gY2xzKGNsYXNzZXMsIGVzY2FwZWQpIHtcbiAgdmFyIGJ1ZiA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZXNjYXBlZCAmJiBlc2NhcGVkW2ldKSB7XG4gICAgICBidWYucHVzaChleHBvcnRzLmVzY2FwZShqb2luQ2xhc3NlcyhbY2xhc3Nlc1tpXV0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5wdXNoKGpvaW5DbGFzc2VzKGNsYXNzZXNbaV0pKTtcbiAgICB9XG4gIH1cbiAgdmFyIHRleHQgPSBqb2luQ2xhc3NlcyhidWYpO1xuICBpZiAodGV4dC5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyBjbGFzcz1cIicgKyB0ZXh0ICsgJ1wiJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cblxuZXhwb3J0cy5zdHlsZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWwpLm1hcChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIHJldHVybiBzdHlsZSArICc6JyArIHZhbFtzdHlsZV07XG4gICAgfSkuam9pbignOycpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn07XG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBmdW5jdGlvbiBhdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgdmFsID0gZXhwb3J0cy5zdHlsZSh2YWwpO1xuICB9XG4gIGlmICgnYm9vbGVhbicgPT0gdHlwZW9mIHZhbCB8fCBudWxsID09IHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9IGVsc2UgaWYgKDAgPT0ga2V5LmluZGV4T2YoJ2RhdGEnKSAmJiAnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KHZhbCkuaW5kZXhPZignJicpICE9PSAtMSkge1xuICAgICAgY29uc29sZS53YXJuKCdTaW5jZSBKYWRlIDIuMC4wLCBhbXBlcnNhbmRzIChgJmApIGluIGRhdGEgYXR0cmlidXRlcyAnICtcbiAgICAgICAgICAgICAgICAgICAnd2lsbCBiZSBlc2NhcGVkIHRvIGAmYW1wO2AnKTtcbiAgICB9O1xuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbC50b0lTT1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdKYWRlIHdpbGwgZWxpbWluYXRlIHRoZSBkb3VibGUgcXVvdGVzIGFyb3VuZCBkYXRlcyBpbiAnICtcbiAgICAgICAgICAgICAgICAgICAnSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArIFwiPSdcIiArIEpTT04uc3RyaW5naWZ5KHZhbCkucmVwbGFjZSgvJy9nLCAnJmFwb3M7JykgKyBcIidcIjtcbiAgfSBlbHNlIGlmIChlc2NhcGVkKSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBzdHJpbmdpZnkgZGF0ZXMgaW4gSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgZXhwb3J0cy5lc2NhcGUodmFsKSArICdcIic7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0phZGUgd2lsbCBzdHJpbmdpZnkgZGF0ZXMgaW4gSVNPIGZvcm0gYWZ0ZXIgMi4wLjAnKTtcbiAgICB9XG4gICAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSBlc2NhcGVkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBmdW5jdGlvbiBhdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGJ1ZiA9IFtdO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldXG4gICAgICAgICwgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09IGtleSkge1xuICAgICAgICBpZiAodmFsID0gam9pbkNsYXNzZXModmFsKSkge1xuICAgICAgICAgIGJ1Zi5wdXNoKCcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1Zi5wdXNoKGV4cG9ydHMuYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1Zi5qb2luKCcnKTtcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgamFkZV9lbmNvZGVfaHRtbF9ydWxlcyA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnXG59O1xudmFyIGphZGVfbWF0Y2hfaHRtbCA9IC9bJjw+XCJdL2c7XG5cbmZ1bmN0aW9uIGphZGVfZW5jb2RlX2NoYXIoYykge1xuICByZXR1cm4gamFkZV9lbmNvZGVfaHRtbF9ydWxlc1tjXSB8fCBjO1xufVxuXG5leHBvcnRzLmVzY2FwZSA9IGphZGVfZXNjYXBlO1xuZnVuY3Rpb24gamFkZV9lc2NhcGUoaHRtbCl7XG4gIHZhciByZXN1bHQgPSBTdHJpbmcoaHRtbCkucmVwbGFjZShqYWRlX21hdGNoX2h0bWwsIGphZGVfZW5jb2RlX2NoYXIpO1xuICBpZiAocmVzdWx0ID09PSAnJyArIGh0bWwpIHJldHVybiBodG1sO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIGphZGUgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IGZ1bmN0aW9uIHJldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHJldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdKYWRlJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG5cbmV4cG9ydHMuRGVidWdJdGVtID0gZnVuY3Rpb24gRGVidWdJdGVtKGxpbmVubywgZmlsZW5hbWUpIHtcbiAgdGhpcy5saW5lbm8gPSBsaW5lbm87XG4gIHRoaXMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcbn1cblxufSx7XCJmc1wiOjJ9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblxufSx7fV19LHt9LFsxXSkoMSlcbn0pOyIsIi8vIENyZWF0ZSBhIHJhbmdlIG9iamVjdCBmb3IgZWZmaWNlbnRseSByZW5kZXJpbmcgc3RyaW5ncyB0byBlbGVtZW50cy5cbnZhciByYW5nZTtcblxudmFyIHRlc3RFbCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDoge307XG5cbi8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXRyaWNrLXN0ZWVsZS1pZGVtL21vcnBoZG9tL2lzc3Vlcy8zMiAoSUU3KyBzdXBwb3J0KVxuLy8gPD1JRTcgZG9lcyBub3Qgc3VwcG9ydCBlbC5oYXNBdHRyaWJ1dGUobmFtZSlcbnZhciBoYXNBdHRyaWJ1dGU7XG5pZiAodGVzdEVsLmhhc0F0dHJpYnV0ZSkge1xuICAgIGhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShlbCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKG5hbWUpO1xuICAgIH07XG59IGVsc2Uge1xuICAgIGhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShlbCwgbmFtZSkge1xuICAgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlTm9kZShuYW1lKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eShvKSB7XG4gICAgZm9yICh2YXIgayBpbiBvKSB7XG4gICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHRvRWxlbWVudChzdHIpIHtcbiAgICBpZiAoIXJhbmdlICYmIGRvY3VtZW50LmNyZWF0ZVJhbmdlKSB7XG4gICAgICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZShkb2N1bWVudC5ib2R5KTtcbiAgICB9XG5cbiAgICB2YXIgZnJhZ21lbnQ7XG4gICAgaWYgKHJhbmdlICYmIHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCkge1xuICAgICAgICBmcmFnbWVudCA9IHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9keScpO1xuICAgICAgICBmcmFnbWVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudC5jaGlsZE5vZGVzWzBdO1xufVxuXG52YXIgc3BlY2lhbEVsSGFuZGxlcnMgPSB7XG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciBJRS4gQXBwYXJlbnRseSBJRSBkb2Vzbid0IHRoaW5rXG4gICAgICogdGhhdCBcInNlbGVjdGVkXCIgaXMgYW4gYXR0cmlidXRlIHdoZW4gcmVhZGluZ1xuICAgICAqIG92ZXIgdGhlIGF0dHJpYnV0ZXMgdXNpbmcgc2VsZWN0RWwuYXR0cmlidXRlc1xuICAgICAqL1xuICAgIE9QVElPTjogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIGlmICgoZnJvbUVsLnNlbGVjdGVkID0gdG9FbC5zZWxlY3RlZCkpIHtcbiAgICAgICAgICAgIGZyb21FbC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbUVsLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBcInZhbHVlXCIgYXR0cmlidXRlIGlzIHNwZWNpYWwgZm9yIHRoZSA8aW5wdXQ+IGVsZW1lbnRcbiAgICAgKiBzaW5jZSBpdCBzZXRzIHRoZSBpbml0aWFsIHZhbHVlLiBDaGFuZ2luZyB0aGUgXCJ2YWx1ZVwiXG4gICAgICogYXR0cmlidXRlIHdpdGhvdXQgY2hhbmdpbmcgdGhlIFwidmFsdWVcIiBwcm9wZXJ0eSB3aWxsIGhhdmVcbiAgICAgKiBubyBlZmZlY3Qgc2luY2UgaXQgaXMgb25seSB1c2VkIHRvIHRoZSBzZXQgdGhlIGluaXRpYWwgdmFsdWUuXG4gICAgICogU2ltaWxhciBmb3IgdGhlIFwiY2hlY2tlZFwiIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBJTlBVVDogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4gICAgICAgIGZyb21FbC5jaGVja2VkID0gdG9FbC5jaGVja2VkO1xuXG4gICAgICAgIGlmIChmcm9tRWwudmFsdWUgIT0gdG9FbC52YWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzQXR0cmlidXRlKHRvRWwsICdjaGVja2VkJykpIHtcbiAgICAgICAgICAgIGZyb21FbC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzQXR0cmlidXRlKHRvRWwsICd2YWx1ZScpKSB7XG4gICAgICAgICAgICBmcm9tRWwucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIFRFWFRBUkVBOiBmdW5jdGlvbihmcm9tRWwsIHRvRWwpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdG9FbC52YWx1ZTtcbiAgICAgICAgaWYgKGZyb21FbC52YWx1ZSAhPSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgZnJvbUVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJvbUVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGZyb21FbC5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8qKlxuICogTG9vcCBvdmVyIGFsbCBvZiB0aGUgYXR0cmlidXRlcyBvbiB0aGUgdGFyZ2V0IG5vZGUgYW5kIG1ha2Ugc3VyZSB0aGVcbiAqIG9yaWdpbmFsIERPTSBub2RlIGhhcyB0aGUgc2FtZSBhdHRyaWJ1dGVzLiBJZiBhbiBhdHRyaWJ1dGVcbiAqIGZvdW5kIG9uIHRoZSBvcmlnaW5hbCBub2RlIGlzIG5vdCBvbiB0aGUgbmV3IG5vZGUgdGhlbiByZW1vdmUgaXQgZnJvbVxuICogdGhlIG9yaWdpbmFsIG5vZGVcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBmcm9tTm9kZVxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHRvTm9kZVxuICovXG5mdW5jdGlvbiBtb3JwaEF0dHJzKGZyb21Ob2RlLCB0b05vZGUpIHtcbiAgICB2YXIgYXR0cnMgPSB0b05vZGUuYXR0cmlidXRlcztcbiAgICB2YXIgaTtcbiAgICB2YXIgYXR0cjtcbiAgICB2YXIgYXR0ck5hbWU7XG4gICAgdmFyIGF0dHJWYWx1ZTtcbiAgICB2YXIgZm91bmRBdHRycyA9IHt9O1xuXG4gICAgZm9yIChpPWF0dHJzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgYXR0ciA9IGF0dHJzW2ldO1xuICAgICAgICBpZiAoYXR0ci5zcGVjaWZpZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBhdHRyTmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgICAgIGF0dHJWYWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgICAgICAgICBmb3VuZEF0dHJzW2F0dHJOYW1lXSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChmcm9tTm9kZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpICE9PSBhdHRyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmcm9tTm9kZS5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWxldGUgYW55IGV4dHJhIGF0dHJpYnV0ZXMgZm91bmQgb24gdGhlIG9yaWdpbmFsIERPTSBlbGVtZW50IHRoYXQgd2VyZW4ndFxuICAgIC8vIGZvdW5kIG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICBhdHRycyA9IGZyb21Ob2RlLmF0dHJpYnV0ZXM7XG5cbiAgICBmb3IgKGk9YXR0cnMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICBhdHRyID0gYXR0cnNbaV07XG4gICAgICAgIGlmIChhdHRyLnNwZWNpZmllZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICAgICAgaWYgKCFmb3VuZEF0dHJzLmhhc093blByb3BlcnR5KGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgICAgIGZyb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSBjaGlsZHJlbiBvZiBvbmUgRE9NIGVsZW1lbnQgdG8gYW5vdGhlciBET00gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtb3ZlQ2hpbGRyZW4oZnJvbUVsLCB0b0VsKSB7XG4gICAgdmFyIGN1ckNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHRDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB0b0VsLmFwcGVuZENoaWxkKGN1ckNoaWxkKTtcbiAgICAgICAgY3VyQ2hpbGQgPSBuZXh0Q2hpbGQ7XG4gICAgfVxuICAgIHJldHVybiB0b0VsO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0Tm9kZUtleShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuaWQ7XG59XG5cbmZ1bmN0aW9uIG1vcnBoZG9tKGZyb21Ob2RlLCB0b05vZGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdG9Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0b05vZGUgPSB0b0VsZW1lbnQodG9Ob2RlKTtcbiAgICB9XG5cbiAgICB2YXIgc2F2ZWRFbHMgPSB7fTsgLy8gVXNlZCB0byBzYXZlIG9mZiBET00gZWxlbWVudHMgd2l0aCBJRHNcbiAgICB2YXIgdW5tYXRjaGVkRWxzID0ge307XG4gICAgdmFyIGdldE5vZGVLZXkgPSBvcHRpb25zLmdldE5vZGVLZXkgfHwgZGVmYXVsdEdldE5vZGVLZXk7XG4gICAgdmFyIG9uTm9kZURpc2NhcmRlZCA9IG9wdGlvbnMub25Ob2RlRGlzY2FyZGVkIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlTW9ycGhFbCA9IG9wdGlvbnMub25CZWZvcmVNb3JwaEVsIHx8IG5vb3A7XG4gICAgdmFyIG9uQmVmb3JlTW9ycGhFbENoaWxkcmVuID0gb3B0aW9ucy5vbkJlZm9yZU1vcnBoRWxDaGlsZHJlbiB8fCBub29wO1xuICAgIHZhciBvbkJlZm9yZU5vZGVEaXNjYXJkZWQgPSBvcHRpb25zLm9uQmVmb3JlTm9kZURpc2NhcmRlZCB8fCBub29wO1xuICAgIHZhciBjaGlsZHJlbk9ubHkgPSBvcHRpb25zLmNoaWxkcmVuT25seSA9PT0gdHJ1ZTtcbiAgICB2YXIgbW92ZWRFbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGVIZWxwZXIobm9kZSwgbmVzdGVkSW5TYXZlZEVsKSB7XG4gICAgICAgIHZhciBpZCA9IGdldE5vZGVLZXkobm9kZSk7XG4gICAgICAgIC8vIElmIHRoZSBub2RlIGhhcyBhbiBJRCB0aGVuIHNhdmUgaXQgb2ZmIHNpbmNlIHdlIHdpbGwgd2FudFxuICAgICAgICAvLyB0byByZXVzZSBpdCBpbiBjYXNlIHRoZSB0YXJnZXQgRE9NIHRyZWUgaGFzIGEgRE9NIGVsZW1lbnRcbiAgICAgICAgLy8gd2l0aCB0aGUgc2FtZSBJRFxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIHNhdmVkRWxzW2lkXSA9IG5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5lc3RlZEluU2F2ZWRFbCkge1xuICAgICAgICAgICAgLy8gSWYgd2UgYXJlIG5vdCBuZXN0ZWQgaW4gYSBzYXZlZCBlbGVtZW50IHRoZW4gd2Uga25vdyB0aGF0IHRoaXMgbm9kZSBoYXMgYmVlblxuICAgICAgICAgICAgLy8gY29tcGxldGVseSBkaXNjYXJkZWQgYW5kIHdpbGwgbm90IGV4aXN0IGluIHRoZSBmaW5hbCBET00uXG4gICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIGN1ckNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVOb2RlSGVscGVyKGN1ckNoaWxkLCBuZXN0ZWRJblNhdmVkRWwgfHwgaWQpO1xuICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gY3VyQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YWxrRGlzY2FyZGVkQ2hpbGROb2Rlcyhub2RlKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB3aGlsZShjdXJDaGlsZCkge1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoIWdldE5vZGVLZXkoY3VyQ2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgd2FudCB0byBoYW5kbGUgbm9kZXMgdGhhdCBkb24ndCBoYXZlIGFuIElEIHRvIGF2b2lkIGRvdWJsZVxuICAgICAgICAgICAgICAgICAgICAvLyB3YWxraW5nIHRoZSBzYW1lIHNhdmVkIGVsZW1lbnQuXG5cbiAgICAgICAgICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGN1ckNoaWxkKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBXYWxrIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgICAgICAgICAgIHdhbGtEaXNjYXJkZWRDaGlsZE5vZGVzKGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJDaGlsZCA9IGN1ckNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlLCBwYXJlbnROb2RlLCBhbHJlYWR5VmlzaXRlZCkge1xuICAgICAgICBpZiAob25CZWZvcmVOb2RlRGlzY2FyZGVkKG5vZGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgaWYgKGFscmVhZHlWaXNpdGVkKSB7XG4gICAgICAgICAgICBpZiAoIWdldE5vZGVLZXkobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBvbk5vZGVEaXNjYXJkZWQobm9kZSk7XG4gICAgICAgICAgICAgICAgd2Fsa0Rpc2NhcmRlZENoaWxkTm9kZXMobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVOb2RlSGVscGVyKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9ycGhFbChmcm9tRWwsIHRvRWwsIGFscmVhZHlWaXNpdGVkLCBjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgdmFyIHRvRWxLZXkgPSBnZXROb2RlS2V5KHRvRWwpO1xuICAgICAgICBpZiAodG9FbEtleSkge1xuICAgICAgICAgICAgLy8gSWYgYW4gZWxlbWVudCB3aXRoIGFuIElEIGlzIGJlaW5nIG1vcnBoZWQgdGhlbiBpdCBpcyB3aWxsIGJlIGluIHRoZSBmaW5hbFxuICAgICAgICAgICAgLy8gRE9NIHNvIGNsZWFyIGl0IG91dCBvZiB0aGUgc2F2ZWQgZWxlbWVudHMgY29sbGVjdGlvblxuICAgICAgICAgICAgZGVsZXRlIHNhdmVkRWxzW3RvRWxLZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjaGlsZHJlbk9ubHkpIHtcbiAgICAgICAgICAgIGlmIChvbkJlZm9yZU1vcnBoRWwoZnJvbUVsLCB0b0VsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vcnBoQXR0cnMoZnJvbUVsLCB0b0VsKTtcblxuICAgICAgICAgICAgaWYgKG9uQmVmb3JlTW9ycGhFbENoaWxkcmVuKGZyb21FbCwgdG9FbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyb21FbC50YWdOYW1lICE9ICdURVhUQVJFQScpIHtcbiAgICAgICAgICAgIHZhciBjdXJUb05vZGVDaGlsZCA9IHRvRWwuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbUVsLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgY3VyVG9Ob2RlSWQ7XG5cbiAgICAgICAgICAgIHZhciBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB2YXIgdG9OZXh0U2libGluZztcbiAgICAgICAgICAgIHZhciBzYXZlZEVsO1xuICAgICAgICAgICAgdmFyIHVubWF0Y2hlZEVsO1xuXG4gICAgICAgICAgICBvdXRlcjogd2hpbGUoY3VyVG9Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB0b05leHRTaWJsaW5nID0gY3VyVG9Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgY3VyVG9Ob2RlSWQgPSBnZXROb2RlS2V5KGN1clRvTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgIHdoaWxlKGN1ckZyb21Ob2RlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1ckZyb21Ob2RlSWQgPSBnZXROb2RlS2V5KGN1ckZyb21Ob2RlQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBmcm9tTmV4dFNpYmxpbmcgPSBjdXJGcm9tTm9kZUNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeVZpc2l0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJGcm9tTm9kZUlkICYmICh1bm1hdGNoZWRFbCA9IHVubWF0Y2hlZEVsc1tjdXJGcm9tTm9kZUlkXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hdGNoZWRFbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjdXJGcm9tTm9kZUNoaWxkLCB1bm1hdGNoZWRFbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhFbChjdXJGcm9tTm9kZUNoaWxkLCB1bm1hdGNoZWRFbCwgYWxyZWFkeVZpc2l0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyRnJvbU5vZGVUeXBlID0gY3VyRnJvbU5vZGVDaGlsZC5ub2RlVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSBjdXJUb05vZGVDaGlsZC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzQ29tcGF0aWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVUeXBlID09PSAxKSB7IC8vIEJvdGggbm9kZXMgYmVpbmcgY29tcGFyZWQgYXJlIEVsZW1lbnQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyRnJvbU5vZGVDaGlsZC50YWdOYW1lID09PSBjdXJUb05vZGVDaGlsZC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgY29tcGF0aWJsZSBET00gZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckZyb21Ob2RlSWQgfHwgY3VyVG9Ob2RlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGVpdGhlciBET00gZWxlbWVudCBoYXMgYW4gSUQgdGhlbiB3ZSBoYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRob3NlIGRpZmZlcmVudGx5IHNpbmNlIHdlIHdhbnQgdG8gbWF0Y2ggdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ5IElEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VyVG9Ob2RlSWQgPT09IGN1ckZyb21Ob2RlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBhdGlibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wYXRpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXBhdGlibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgY29tcGF0aWJsZSBET00gZWxlbWVudHMgc28gdHJhbnNmb3JtIHRoZSBjdXJyZW50IFwiZnJvbVwiIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gbWF0Y2ggdGhlIGN1cnJlbnQgdGFyZ2V0IERPTSBub2RlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKGN1ckZyb21Ob2RlQ2hpbGQsIGN1clRvTm9kZUNoaWxkLCBhbHJlYWR5VmlzaXRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJGcm9tTm9kZVR5cGUgPT09IDMpIHsgLy8gQm90aCBub2RlcyBiZWluZyBjb21wYXJlZCBhcmUgVGV4dCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGF0aWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltcGx5IHVwZGF0ZSBub2RlVmFsdWUgb24gdGhlIG9yaWdpbmFsIG5vZGUgdG8gY2hhbmdlIHRoZSB0ZXh0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZC5ub2RlVmFsdWUgPSBjdXJUb05vZGVDaGlsZC5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXBhdGlibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJUb05vZGVDaGlsZCA9IHRvTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyRnJvbU5vZGVDaGlsZCA9IGZyb21OZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGNvbXBhdGlibGUgbWF0Y2ggc28gcmVtb3ZlIHRoZSBvbGQgbm9kZSBmcm9tIHRoZSBET00gYW5kIGNvbnRpbnVlIHRyeWluZ1xuICAgICAgICAgICAgICAgICAgICAvLyB0byBmaW5kIGEgbWF0Y2ggaW4gdGhlIG9yaWdpbmFsIERPTVxuICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGN1ckZyb21Ob2RlQ2hpbGQsIGZyb21FbCwgYWxyZWFkeVZpc2l0ZWQpO1xuICAgICAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVJZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHNhdmVkRWwgPSBzYXZlZEVsc1tjdXJUb05vZGVJZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JwaEVsKHNhdmVkRWwsIGN1clRvTm9kZUNoaWxkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clRvTm9kZUNoaWxkID0gc2F2ZWRFbDsgLy8gV2Ugd2FudCB0byBhcHBlbmQgdGhlIHNhdmVkIGVsZW1lbnQgaW5zdGVhZFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGN1cnJlbnQgRE9NIGVsZW1lbnQgaW4gdGhlIHRhcmdldCB0cmVlIGhhcyBhbiBJRFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHdlIGRpZCBub3QgZmluZCBhIG1hdGNoIGluIGFueSBvZiB0aGUgY29ycmVzcG9uZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2libGluZ3MuIFdlIGp1c3QgcHV0IHRoZSB0YXJnZXQgZWxlbWVudCBpbiB0aGUgb2xkIERPTSB0cmVlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgaWYgd2UgbGF0ZXIgZmluZCBhbiBlbGVtZW50IGluIHRoZSBvbGQgRE9NIHRyZWUgdGhhdCBoYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgbWF0Y2hpbmcgSUQgdGhlbiB3ZSB3aWxsIHJlcGxhY2UgdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIG9sZCBlbGVtZW50IGFuZCBtb3JwaCB0aGUgb2xkIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubWF0Y2hlZEVsc1tjdXJUb05vZGVJZF0gPSBjdXJUb05vZGVDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGdvdCB0aGlzIGZhciB0aGVuIHdlIGRpZCBub3QgZmluZCBhIGNhbmRpZGF0ZSBtYXRjaCBmb3Igb3VyIFwidG8gbm9kZVwiXG4gICAgICAgICAgICAgICAgLy8gYW5kIHdlIGV4aGF1c3RlZCBhbGwgb2YgdGhlIGNoaWxkcmVuIFwiZnJvbVwiIG5vZGVzLiBUaGVyZWZvcmUsIHdlIHdpbGwganVzdFxuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgY3VycmVudCBcInRvIG5vZGVcIiB0byB0aGUgZW5kXG4gICAgICAgICAgICAgICAgZnJvbUVsLmFwcGVuZENoaWxkKGN1clRvTm9kZUNoaWxkKTtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJUb05vZGVDaGlsZC5ub2RlVHlwZSA9PT0gMSAmJiAoY3VyVG9Ob2RlSWQgfHwgY3VyVG9Ob2RlQ2hpbGQuZmlyc3RDaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgdGhhdCB3YXMganVzdCBhZGRlZCB0byB0aGUgb3JpZ2luYWwgRE9NIG1heSBoYXZlXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWUgbmVzdGVkIGVsZW1lbnRzIHdpdGggYSBrZXkvSUQgdGhhdCBuZWVkcyB0byBiZSBtYXRjaGVkIHVwXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpdGggb3RoZXIgZWxlbWVudHMuIFdlJ2xsIGFkZCB0aGUgZWxlbWVudCB0byBhIGxpc3Qgc28gdGhhdCB3ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjYW4gbGF0ZXIgcHJvY2VzcyB0aGUgbmVzdGVkIGVsZW1lbnRzIGlmIHRoZXJlIGFyZSBhbnkgdW5tYXRjaGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGtleWVkIGVsZW1lbnRzIHRoYXQgd2VyZSBkaXNjYXJkZWRcbiAgICAgICAgICAgICAgICAgICAgbW92ZWRFbHMucHVzaChjdXJUb05vZGVDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyVG9Ob2RlQ2hpbGQgPSB0b05leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGN1ckZyb21Ob2RlQ2hpbGQgPSBmcm9tTmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdlIGhhdmUgcHJvY2Vzc2VkIGFsbCBvZiB0aGUgXCJ0byBub2Rlc1wiLiBJZiBjdXJGcm9tTm9kZUNoaWxkIGlzIG5vbi1udWxsIHRoZW5cbiAgICAgICAgICAgIC8vIHdlIHN0aWxsIGhhdmUgc29tZSBmcm9tIG5vZGVzIGxlZnQgb3ZlciB0aGF0IG5lZWQgdG8gYmUgcmVtb3ZlZFxuICAgICAgICAgICAgd2hpbGUoY3VyRnJvbU5vZGVDaGlsZCkge1xuICAgICAgICAgICAgICAgIGZyb21OZXh0U2libGluZyA9IGN1ckZyb21Ob2RlQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTm9kZShjdXJGcm9tTm9kZUNoaWxkLCBmcm9tRWwsIGFscmVhZHlWaXNpdGVkKTtcbiAgICAgICAgICAgICAgICBjdXJGcm9tTm9kZUNoaWxkID0gZnJvbU5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNwZWNpYWxFbEhhbmRsZXIgPSBzcGVjaWFsRWxIYW5kbGVyc1tmcm9tRWwudGFnTmFtZV07XG4gICAgICAgIGlmIChzcGVjaWFsRWxIYW5kbGVyKSB7XG4gICAgICAgICAgICBzcGVjaWFsRWxIYW5kbGVyKGZyb21FbCwgdG9FbCk7XG4gICAgICAgIH1cbiAgICB9IC8vIEVORDogbW9ycGhFbCguLi4pXG5cbiAgICB2YXIgbW9ycGhlZE5vZGUgPSBmcm9tTm9kZTtcbiAgICB2YXIgbW9ycGhlZE5vZGVUeXBlID0gbW9ycGhlZE5vZGUubm9kZVR5cGU7XG4gICAgdmFyIHRvTm9kZVR5cGUgPSB0b05vZGUubm9kZVR5cGU7XG5cbiAgICBpZiAoIWNoaWxkcmVuT25seSkge1xuICAgICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgd2UgYXJlIGdpdmVuIHR3byBET00gbm9kZXMgdGhhdCBhcmUgbm90XG4gICAgICAgIC8vIGNvbXBhdGlibGUgKGUuZy4gPGRpdj4gLS0+IDxzcGFuPiBvciA8ZGl2PiAtLT4gVEVYVClcbiAgICAgICAgaWYgKG1vcnBoZWROb2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbU5vZGUudGFnTmFtZSAhPT0gdG9Ob2RlLnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Ob2RlRGlzY2FyZGVkKGZyb21Ob2RlKTtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSBtb3ZlQ2hpbGRyZW4oZnJvbU5vZGUsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9Ob2RlLnRhZ05hbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEdvaW5nIGZyb20gYW4gZWxlbWVudCBub2RlIHRvIGEgdGV4dCBub2RlXG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobW9ycGhlZE5vZGVUeXBlID09PSAzKSB7IC8vIFRleHQgbm9kZVxuICAgICAgICAgICAgaWYgKHRvTm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBtb3JwaGVkTm9kZS5ub2RlVmFsdWUgPSB0b05vZGUubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGV4dCBub2RlIHRvIHNvbWV0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgbW9ycGhlZE5vZGUgPSB0b05vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9ycGhlZE5vZGUgPT09IHRvTm9kZSkge1xuICAgICAgICAvLyBUaGUgXCJ0byBub2RlXCIgd2FzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlIFwiZnJvbSBub2RlXCJcbiAgICAgICAgLy8gc28gd2UgaGFkIHRvIHRvc3Mgb3V0IHRoZSBcImZyb20gbm9kZVwiIGFuZCB1c2UgdGhlIFwidG8gbm9kZVwiXG4gICAgICAgIG9uTm9kZURpc2NhcmRlZChmcm9tTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9ycGhFbChtb3JwaGVkTm9kZSwgdG9Ob2RlLCBmYWxzZSwgY2hpbGRyZW5Pbmx5KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hhdCB3ZSB3aWxsIGRvIGhlcmUgaXMgd2FsayB0aGUgdHJlZSBmb3IgdGhlIERPTSBlbGVtZW50XG4gICAgICAgICAqIHRoYXQgd2FzIG1vdmVkIGZyb20gdGhlIHRhcmdldCBET00gdHJlZSB0byB0aGUgb3JpZ2luYWxcbiAgICAgICAgICogRE9NIHRyZWUgYW5kIHdlIHdpbGwgbG9vayBmb3Iga2V5ZWQgZWxlbWVudHMgdGhhdCBjb3VsZFxuICAgICAgICAgKiBiZSBtYXRjaGVkIHRvIGtleWVkIGVsZW1lbnRzIHRoYXQgd2VyZSBlYXJsaWVyIGRpc2NhcmRlZC5cbiAgICAgICAgICogSWYgd2UgZmluZCBhIG1hdGNoIHRoZW4gd2Ugd2lsbCBtb3ZlIHRoZSBzYXZlZCBlbGVtZW50XG4gICAgICAgICAqIGludG8gdGhlIGZpbmFsIERPTSB0cmVlXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgaGFuZGxlTW92ZWRFbCA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICB2YXIgY3VyQ2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICAgICAgICAgICAgd2hpbGUoY3VyQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBjdXJDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBnZXROb2RlS2V5KGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzYXZlZEVsID0gc2F2ZWRFbHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNhdmVkRWwgJiYgKGN1ckNoaWxkLnRhZ05hbWUgPT09IHNhdmVkRWwudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHNhdmVkRWwsIGN1ckNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcnBoRWwoc2F2ZWRFbCwgY3VyQ2hpbGQsIHRydWUgLyogYWxyZWFkeSB2aXNpdGVkIHRoZSBzYXZlZCBlbCB0cmVlICovKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1ckNoaWxkID0gbmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1wdHkoc2F2ZWRFbHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VyQ2hpbGQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW92ZWRFbChjdXJDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VyQ2hpbGQgPSBuZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBUaGUgbG9vcCBiZWxvdyBpcyB1c2VkIHRvIHBvc3NpYmx5IG1hdGNoIHVwIGFueSBkaXNjYXJkZWRcbiAgICAgICAgLy8gZWxlbWVudHMgaW4gdGhlIG9yaWdpbmFsIERPTSB0cmVlIHdpdGggZWxlbWVuZXRzIGZyb20gdGhlXG4gICAgICAgIC8vIHRhcmdldCB0cmVlIHRoYXQgd2VyZSBtb3ZlZCBvdmVyIHdpdGhvdXQgdmlzaXRpbmcgdGhlaXJcbiAgICAgICAgLy8gY2hpbGRyZW5cbiAgICAgICAgaWYgKCFlbXB0eShzYXZlZEVscykpIHtcbiAgICAgICAgICAgIGhhbmRsZU1vdmVkRWxzTG9vcDpcbiAgICAgICAgICAgIHdoaWxlIChtb3ZlZEVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW92ZWRFbHNUZW1wID0gbW92ZWRFbHM7XG4gICAgICAgICAgICAgICAgbW92ZWRFbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8bW92ZWRFbHNUZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVNb3ZlZEVsKG1vdmVkRWxzVGVtcFtpXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZSBhcmUgbm8gbW9yZSB1bm1hdGNoZWQgZWxlbWVudHMgc28gY29tcGxldGVseSBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBoYW5kbGVNb3ZlZEVsc0xvb3A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIHRoZSBcIm9uTm9kZURpc2NhcmRlZFwiIGV2ZW50IGZvciBhbnkgc2F2ZWQgZWxlbWVudHNcbiAgICAgICAgLy8gdGhhdCBuZXZlciBmb3VuZCBhIG5ldyBob21lIGluIHRoZSBtb3JwaGVkIERPTVxuICAgICAgICBmb3IgKHZhciBzYXZlZEVsSWQgaW4gc2F2ZWRFbHMpIHtcbiAgICAgICAgICAgIGlmIChzYXZlZEVscy5oYXNPd25Qcm9wZXJ0eShzYXZlZEVsSWQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNhdmVkRWwgPSBzYXZlZEVsc1tzYXZlZEVsSWRdO1xuICAgICAgICAgICAgICAgIG9uTm9kZURpc2NhcmRlZChzYXZlZEVsKTtcbiAgICAgICAgICAgICAgICB3YWxrRGlzY2FyZGVkQ2hpbGROb2RlcyhzYXZlZEVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2hpbGRyZW5Pbmx5ICYmIG1vcnBoZWROb2RlICE9PSBmcm9tTm9kZSAmJiBmcm9tTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgIC8vIElmIHdlIGhhZCB0byBzd2FwIG91dCB0aGUgZnJvbSBub2RlIHdpdGggYSBuZXcgbm9kZSBiZWNhdXNlIHRoZSBvbGRcbiAgICAgICAgLy8gbm9kZSB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgdGFyZ2V0IG5vZGUgdGhlbiB3ZSBuZWVkIHRvXG4gICAgICAgIC8vIHJlcGxhY2UgdGhlIG9sZCBET00gbm9kZSBpbiB0aGUgb3JpZ2luYWwgRE9NIHRyZWUuIFRoaXMgaXMgb25seVxuICAgICAgICAvLyBwb3NzaWJsZSBpZiB0aGUgb3JpZ2luYWwgRE9NIG5vZGUgd2FzIHBhcnQgb2YgYSBET00gdHJlZSB3aGljaFxuICAgICAgICAvLyB3ZSBrbm93IGlzIHRoZSBjYXNlIGlmIGl0IGhhcyBhIHBhcmVudCBub2RlLlxuICAgICAgICBmcm9tTm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtb3JwaGVkTm9kZSwgZnJvbU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtb3JwaGVkTm9kZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb3JwaGRvbTtcbiIsIi8qanNoaW50IG5vZGU6dHJ1ZSAqL1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWluaW1hbERlc2MgPSBbJ2gnLCAnbWluJywgJ3MnLCAnbXMnLCAnzrxzJywgJ25zJ107XHJcbnZhciB2ZXJib3NlRGVzYyA9IFsnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgJ21pbGxpc2Vjb25kJywgJ21pY3Jvc2Vjb25kJywgJ25hbm9zZWNvbmQnXTtcclxudmFyIGNvbnZlcnQgPSBbNjAqNjAsIDYwLCAxLCAxZTYsIDFlMywgMV07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzb3VyY2UsIG9wdHMpIHtcclxuXHR2YXIgdmVyYm9zZSwgcHJlY2lzZSwgaSwgc3BvdCwgc291cmNlQXRTdGVwLCB2YWxBdFN0ZXAsIGRlY2ltYWxzLCBzdHJBdFN0ZXAsIHJlc3VsdHMsIHRvdGFsU2Vjb25kcztcclxuXHJcblx0dmVyYm9zZSA9IGZhbHNlO1xyXG5cdHByZWNpc2UgPSBmYWxzZTtcclxuXHRpZiAob3B0cykge1xyXG5cdFx0dmVyYm9zZSA9IG9wdHMudmVyYm9zZSB8fCBmYWxzZTtcclxuXHRcdHByZWNpc2UgPSBvcHRzLnByZWNpc2UgfHwgZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpZiAoIUFycmF5LmlzQXJyYXkoc291cmNlKSB8fCBzb3VyY2UubGVuZ3RoICE9PSAyKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cdGlmICh0eXBlb2Ygc291cmNlWzBdICE9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygc291cmNlWzFdICE9PSAnbnVtYmVyJykge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Ly8gbm9ybWFsaXplIHNvdXJjZSBhcnJheSBkdWUgdG8gY2hhbmdlcyBpbiBub2RlIHY1LjQrXHJcblx0aWYgKHNvdXJjZVsxXSA8IDApIHtcclxuXHRcdHRvdGFsU2Vjb25kcyA9IHNvdXJjZVswXSArIHNvdXJjZVsxXSAvIDFlOTtcclxuXHRcdHNvdXJjZVswXSA9IHBhcnNlSW50KHRvdGFsU2Vjb25kcyk7XHJcblx0XHRzb3VyY2VbMV0gPSBwYXJzZUZsb2F0KCh0b3RhbFNlY29uZHMgJSAxKS50b1ByZWNpc2lvbig5KSkgKiAxZTk7XHJcblx0fVxyXG5cclxuXHRyZXN1bHRzID0gJyc7XHJcblxyXG5cdC8vIGZvcmVhY2ggdW5pdFxyXG5cdGZvciAoaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuXHRcdHNwb3QgPSBpIDwgMyA/IDAgOiAxOyAvLyBncmFiYmluZyBmaXJzdCBvciBzZWNvbmQgc3BvdCBpbiBzb3VyY2UgYXJyYXlcclxuXHRcdHNvdXJjZUF0U3RlcCA9IHNvdXJjZVtzcG90XTtcclxuXHRcdGlmIChpICE9PSAzICYmIGkgIT09IDApIHtcclxuXHRcdFx0c291cmNlQXRTdGVwID0gc291cmNlQXRTdGVwICUgY29udmVydFtpLTFdOyAvLyB0cmltIG9mZiBwcmV2aW91cyBwb3J0aW9uc1xyXG5cdFx0fVxyXG5cdFx0aWYgKGkgPT09IDIpIHtcclxuXHRcdFx0c291cmNlQXRTdGVwICs9IHNvdXJjZVsxXS8xZTk7IC8vIGdldCBwYXJ0aWFsIHNlY29uZHMgZnJvbSBvdGhlciBwb3J0aW9uIG9mIHRoZSBhcnJheVxyXG5cdFx0fVxyXG5cdFx0dmFsQXRTdGVwID0gc291cmNlQXRTdGVwIC8gY29udmVydFtpXTsgLy8gdmFsIGF0IHRoaXMgdW5pdFxyXG5cdFx0aWYgKHZhbEF0U3RlcCA+PSAxKSB7XHJcblx0XHRcdGlmICh2ZXJib3NlKSB7XHJcblx0XHRcdFx0dmFsQXRTdGVwID0gTWF0aC5mbG9vcih2YWxBdFN0ZXApOyAvLyBkZWFsIGluIHdob2xlIHVuaXRzLCBzdWJzZXF1ZW50IGxhcHMgd2lsbCBnZXQgdGhlIGRlY2ltYWwgcG9ydGlvblxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghcHJlY2lzZSkge1xyXG5cdFx0XHRcdC8vIGRvbid0IGZsaW5nIHRvbyBtYW55IGRlY2ltYWxzXHJcblx0XHRcdFx0ZGVjaW1hbHMgPSB2YWxBdFN0ZXAgPj0gMTAgPyAwIDogMjtcclxuXHRcdFx0XHRzdHJBdFN0ZXAgPSB2YWxBdFN0ZXAudG9GaXhlZChkZWNpbWFscyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3RyQXRTdGVwID0gdmFsQXRTdGVwLnRvU3RyaW5nKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHN0ckF0U3RlcC5pbmRleE9mKCcuJykgPiAtMSAmJiBzdHJBdFN0ZXBbc3RyQXRTdGVwLmxlbmd0aC0xXSA9PT0gJzAnKSB7XHJcblx0XHRcdFx0c3RyQXRTdGVwID0gc3RyQXRTdGVwLnJlcGxhY2UoL1xcLj8wKyQvLCcnKTsgLy8gcmVtb3ZlIHRyYWlsaW5nIHplcm9zXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHJlc3VsdHMpIHtcclxuXHRcdFx0XHRyZXN1bHRzICs9ICcgJzsgLy8gYXBwZW5kIHNwYWNlIGlmIHdlIGhhdmUgYSBwcmV2aW91cyB2YWx1ZVxyXG5cdFx0XHR9XHJcblx0XHRcdHJlc3VsdHMgKz0gc3RyQXRTdGVwOyAvLyBhcHBlbmQgdGhlIHZhbHVlXHJcblx0XHRcdC8vIGFwcGVuZCB1bml0c1xyXG5cdFx0XHRpZiAodmVyYm9zZSkge1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gJyAnK3ZlcmJvc2VEZXNjW2ldO1xyXG5cdFx0XHRcdGlmIChzdHJBdFN0ZXAgIT09ICcxJykge1xyXG5cdFx0XHRcdFx0cmVzdWx0cyArPSAncyc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gJyAnK21pbmltYWxEZXNjW2ldO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghdmVyYm9zZSkge1xyXG5cdFx0XHRcdGJyZWFrOyAvLyB2ZXJib3NlIGdldHMgYXMgbWFueSBncm91cHMgYXMgbmVjZXNzYXJ5LCB0aGUgcmVzdCBnZXQgb25seSBvbmVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliJylcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFzYXAgPSByZXF1aXJlKCdhc2FwL3JhdycpO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuLy8gU3RhdGVzOlxuLy9cbi8vIDAgLSBwZW5kaW5nXG4vLyAxIC0gZnVsZmlsbGVkIHdpdGggX3ZhbHVlXG4vLyAyIC0gcmVqZWN0ZWQgd2l0aCBfdmFsdWVcbi8vIDMgLSBhZG9wdGVkIHRoZSBzdGF0ZSBvZiBhbm90aGVyIHByb21pc2UsIF92YWx1ZVxuLy9cbi8vIG9uY2UgdGhlIHN0YXRlIGlzIG5vIGxvbmdlciBwZW5kaW5nICgwKSBpdCBpcyBpbW11dGFibGVcblxuLy8gQWxsIGBfYCBwcmVmaXhlZCBwcm9wZXJ0aWVzIHdpbGwgYmUgcmVkdWNlZCB0byBgX3tyYW5kb20gbnVtYmVyfWBcbi8vIGF0IGJ1aWxkIHRpbWUgdG8gb2JmdXNjYXRlIHRoZW0gYW5kIGRpc2NvdXJhZ2UgdGhlaXIgdXNlLlxuLy8gV2UgZG9uJ3QgdXNlIHN5bWJvbHMgb3IgT2JqZWN0LmRlZmluZVByb3BlcnR5IHRvIGZ1bGx5IGhpZGUgdGhlbVxuLy8gYmVjYXVzZSB0aGUgcGVyZm9ybWFuY2UgaXNuJ3QgZ29vZCBlbm91Z2guXG5cblxuLy8gdG8gYXZvaWQgdXNpbmcgdHJ5L2NhdGNoIGluc2lkZSBjcml0aWNhbCBmdW5jdGlvbnMsIHdlXG4vLyBleHRyYWN0IHRoZW0gdG8gaGVyZS5cbnZhciBMQVNUX0VSUk9SID0gbnVsbDtcbnZhciBJU19FUlJPUiA9IHt9O1xuZnVuY3Rpb24gZ2V0VGhlbihvYmopIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gb2JqLnRoZW47XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgTEFTVF9FUlJPUiA9IGV4O1xuICAgIHJldHVybiBJU19FUlJPUjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYWxsT25lKGZuLCBhKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZuKGEpO1xuICB9IGNhdGNoIChleCkge1xuICAgIExBU1RfRVJST1IgPSBleDtcbiAgICByZXR1cm4gSVNfRVJST1I7XG4gIH1cbn1cbmZ1bmN0aW9uIHRyeUNhbGxUd28oZm4sIGEsIGIpIHtcbiAgdHJ5IHtcbiAgICBmbihhLCBiKTtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBMQVNUX0VSUk9SID0gZXg7XG4gICAgcmV0dXJuIElTX0VSUk9SO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuZnVuY3Rpb24gUHJvbWlzZShmbikge1xuICBpZiAodHlwZW9mIHRoaXMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZXMgbXVzdCBiZSBjb25zdHJ1Y3RlZCB2aWEgbmV3Jyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdGhpcy5fNDUgPSAwO1xuICB0aGlzLl84MSA9IDA7XG4gIHRoaXMuXzY1ID0gbnVsbDtcbiAgdGhpcy5fNTQgPSBudWxsO1xuICBpZiAoZm4gPT09IG5vb3ApIHJldHVybjtcbiAgZG9SZXNvbHZlKGZuLCB0aGlzKTtcbn1cblByb21pc2UuXzEwID0gbnVsbDtcblByb21pc2UuXzk3ID0gbnVsbDtcblByb21pc2UuXzYxID0gbm9vcDtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIGlmICh0aGlzLmNvbnN0cnVjdG9yICE9PSBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHNhZmVUaGVuKHRoaXMsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgfVxuICB2YXIgcmVzID0gbmV3IFByb21pc2Uobm9vcCk7XG4gIGhhbmRsZSh0aGlzLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzKSk7XG4gIHJldHVybiByZXM7XG59O1xuXG5mdW5jdGlvbiBzYWZlVGhlbihzZWxmLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICByZXR1cm4gbmV3IHNlbGYuY29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXMgPSBuZXcgUHJvbWlzZShub29wKTtcbiAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIGhhbmRsZShzZWxmLCBuZXcgSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcmVzKSk7XG4gIH0pO1xufTtcbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fODEgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fNjU7XG4gIH1cbiAgaWYgKFByb21pc2UuXzEwKSB7XG4gICAgUHJvbWlzZS5fMTAoc2VsZik7XG4gIH1cbiAgaWYgKHNlbGYuXzgxID09PSAwKSB7XG4gICAgaWYgKHNlbGYuXzQ1ID09PSAwKSB7XG4gICAgICBzZWxmLl80NSA9IDE7XG4gICAgICBzZWxmLl81NCA9IGRlZmVycmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2VsZi5fNDUgPT09IDEpIHtcbiAgICAgIHNlbGYuXzQ1ID0gMjtcbiAgICAgIHNlbGYuXzU0ID0gW3NlbGYuXzU0LCBkZWZlcnJlZF07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNlbGYuXzU0LnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBoYW5kbGVSZXNvbHZlZChzZWxmLCBkZWZlcnJlZCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc29sdmVkKHNlbGYsIGRlZmVycmVkKSB7XG4gIGFzYXAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fODEgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICBpZiAoc2VsZi5fODEgPT09IDEpIHtcbiAgICAgICAgcmVzb2x2ZShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl82NSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgc2VsZi5fNjUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcmV0ID0gdHJ5Q2FsbE9uZShjYiwgc2VsZi5fNjUpO1xuICAgIGlmIChyZXQgPT09IElTX0VSUk9SKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgTEFTVF9FUlJPUik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVzb2x2ZShzZWxmLCBuZXdWYWx1ZSkge1xuICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICBpZiAobmV3VmFsdWUgPT09IHNlbGYpIHtcbiAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgc2VsZixcbiAgICAgIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJylcbiAgICApO1xuICB9XG4gIGlmIChcbiAgICBuZXdWYWx1ZSAmJlxuICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgKSB7XG4gICAgdmFyIHRoZW4gPSBnZXRUaGVuKG5ld1ZhbHVlKTtcbiAgICBpZiAodGhlbiA9PT0gSVNfRVJST1IpIHtcbiAgICAgIHJldHVybiByZWplY3Qoc2VsZiwgTEFTVF9FUlJPUik7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoZW4gPT09IHNlbGYudGhlbiAmJlxuICAgICAgbmV3VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlXG4gICAgKSB7XG4gICAgICBzZWxmLl84MSA9IDM7XG4gICAgICBzZWxmLl82NSA9IG5ld1ZhbHVlO1xuICAgICAgZmluYWxlKHNlbGYpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRvUmVzb2x2ZSh0aGVuLmJpbmQobmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgc2VsZi5fODEgPSAxO1xuICBzZWxmLl82NSA9IG5ld1ZhbHVlO1xuICBmaW5hbGUoc2VsZik7XG59XG5cbmZ1bmN0aW9uIHJlamVjdChzZWxmLCBuZXdWYWx1ZSkge1xuICBzZWxmLl84MSA9IDI7XG4gIHNlbGYuXzY1ID0gbmV3VmFsdWU7XG4gIGlmIChQcm9taXNlLl85Nykge1xuICAgIFByb21pc2UuXzk3KHNlbGYsIG5ld1ZhbHVlKTtcbiAgfVxuICBmaW5hbGUoc2VsZik7XG59XG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fNDUgPT09IDEpIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fNTQpO1xuICAgIHNlbGYuXzU0ID0gbnVsbDtcbiAgfVxuICBpZiAoc2VsZi5fNDUgPT09IDIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuXzU0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBoYW5kbGUoc2VsZiwgc2VsZi5fNTRbaV0pO1xuICAgIH1cbiAgICBzZWxmLl81NCA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gSGFuZGxlcihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgcHJvbWlzZSl7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBwcm9taXNlKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHZhciByZXMgPSB0cnlDYWxsVHdvKGZuLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIGRvbmUgPSB0cnVlO1xuICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgfSlcbiAgaWYgKCFkb25lICYmIHJlcyA9PT0gSVNfRVJST1IpIHtcbiAgICBkb25lID0gdHJ1ZTtcbiAgICByZWplY3QocHJvbWlzZSwgTEFTVF9FUlJPUik7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCcuL2NvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuUHJvbWlzZS5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICB2YXIgc2VsZiA9IGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRoZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKSA6IHRoaXM7XG4gIHNlbGYudGhlbihudWxsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSwgMCk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy9UaGlzIGZpbGUgY29udGFpbnMgdGhlIEVTNiBleHRlbnNpb25zIHRvIHRoZSBjb3JlIFByb21pc2VzL0ErIEFQSVxuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJy4vY29yZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cbi8qIFN0YXRpYyBGdW5jdGlvbnMgKi9cblxudmFyIFRSVUUgPSB2YWx1ZVByb21pc2UodHJ1ZSk7XG52YXIgRkFMU0UgPSB2YWx1ZVByb21pc2UoZmFsc2UpO1xudmFyIE5VTEwgPSB2YWx1ZVByb21pc2UobnVsbCk7XG52YXIgVU5ERUZJTkVEID0gdmFsdWVQcm9taXNlKHVuZGVmaW5lZCk7XG52YXIgWkVSTyA9IHZhbHVlUHJvbWlzZSgwKTtcbnZhciBFTVBUWVNUUklORyA9IHZhbHVlUHJvbWlzZSgnJyk7XG5cbmZ1bmN0aW9uIHZhbHVlUHJvbWlzZSh2YWx1ZSkge1xuICB2YXIgcCA9IG5ldyBQcm9taXNlKFByb21pc2UuXzYxKTtcbiAgcC5fODEgPSAxO1xuICBwLl82NSA9IHZhbHVlO1xuICByZXR1cm4gcDtcbn1cblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSByZXR1cm4gdmFsdWU7XG5cbiAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gTlVMTDtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBVTkRFRklORUQ7XG4gIGlmICh2YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuIFRSVUU7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHJldHVybiBGQUxTRTtcbiAgaWYgKHZhbHVlID09PSAwKSByZXR1cm4gWkVSTztcbiAgaWYgKHZhbHVlID09PSAnJykgcmV0dXJuIEVNUFRZU1RSSU5HO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdGhlbiA9IHZhbHVlLnRoZW47XG4gICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHRoZW4uYmluZCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZWplY3QoZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVByb21pc2UodmFsdWUpO1xufTtcblxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc29sdmUoW10pO1xuICAgIHZhciByZW1haW5pbmcgPSBhcmdzLmxlbmd0aDtcbiAgICBmdW5jdGlvbiByZXMoaSwgdmFsKSB7XG4gICAgICBpZiAodmFsICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWwudGhlbiA9PT0gUHJvbWlzZS5wcm90b3R5cGUudGhlbikge1xuICAgICAgICAgIHdoaWxlICh2YWwuXzgxID09PSAzKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuXzY1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmFsLl84MSA9PT0gMSkgcmV0dXJuIHJlcyhpLCB2YWwuXzY1KTtcbiAgICAgICAgICBpZiAodmFsLl84MSA9PT0gMikgcmVqZWN0KHZhbC5fNjUpO1xuICAgICAgICAgIHZhbC50aGVuKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0aGVuID0gdmFsLnRoZW47XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKHRoZW4uYmluZCh2YWwpKTtcbiAgICAgICAgICAgIHAudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cblByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVqZWN0KHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpe1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyogUHJvdG90eXBlIE1ldGhvZHMgKi9cblxuUHJvbWlzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFByb21pc2UgPSByZXF1aXJlKCcuL2NvcmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb3JlLmpzJyk7XG5yZXF1aXJlKCcuL2RvbmUuanMnKTtcbnJlcXVpcmUoJy4vZmluYWxseS5qcycpO1xucmVxdWlyZSgnLi9lczYtZXh0ZW5zaW9ucy5qcycpO1xucmVxdWlyZSgnLi9ub2RlLWV4dGVuc2lvbnMuanMnKTtcbnJlcXVpcmUoJy4vc3luY2hyb25vdXMuanMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIHRoZW4vcHJvbWlzZSBzcGVjaWZpYyBleHRlbnNpb25zIHRoYXQgYXJlIG9ubHkgdXNlZnVsXG4vLyBmb3Igbm9kZS5qcyBpbnRlcm9wXG5cbnZhciBQcm9taXNlID0gcmVxdWlyZSgnLi9jb3JlLmpzJyk7XG52YXIgYXNhcCA9IHJlcXVpcmUoJ2FzYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG4vKiBTdGF0aWMgRnVuY3Rpb25zICovXG5cblByb21pc2UuZGVub2RlaWZ5ID0gZnVuY3Rpb24gKGZuLCBhcmd1bWVudENvdW50KSB7XG4gIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnRDb3VudCA9PT0gJ251bWJlcicgJiYgYXJndW1lbnRDb3VudCAhPT0gSW5maW5pdHlcbiAgKSB7XG4gICAgcmV0dXJuIGRlbm9kZWlmeVdpdGhDb3VudChmbiwgYXJndW1lbnRDb3VudCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRlbm9kZWlmeVdpdGhvdXRDb3VudChmbik7XG4gIH1cbn1cblxudmFyIGNhbGxiYWNrRm4gPSAoXG4gICdmdW5jdGlvbiAoZXJyLCByZXMpIHsnICtcbiAgJ2lmIChlcnIpIHsgcmooZXJyKTsgfSBlbHNlIHsgcnMocmVzKTsgfScgK1xuICAnfSdcbik7XG5mdW5jdGlvbiBkZW5vZGVpZnlXaXRoQ291bnQoZm4sIGFyZ3VtZW50Q291bnQpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudENvdW50OyBpKyspIHtcbiAgICBhcmdzLnB1c2goJ2EnICsgaSk7XG4gIH1cbiAgdmFyIGJvZHkgPSBbXG4gICAgJ3JldHVybiBmdW5jdGlvbiAoJyArIGFyZ3Muam9pbignLCcpICsgJykgeycsXG4gICAgJ3ZhciBzZWxmID0gdGhpczsnLFxuICAgICdyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJzLCByaikgeycsXG4gICAgJ3ZhciByZXMgPSBmbi5jYWxsKCcsXG4gICAgWydzZWxmJ10uY29uY2F0KGFyZ3MpLmNvbmNhdChbY2FsbGJhY2tGbl0pLmpvaW4oJywnKSxcbiAgICAnKTsnLFxuICAgICdpZiAocmVzICYmJyxcbiAgICAnKHR5cGVvZiByZXMgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHJlcyA9PT0gXCJmdW5jdGlvblwiKSAmJicsXG4gICAgJ3R5cGVvZiByZXMudGhlbiA9PT0gXCJmdW5jdGlvblwiJyxcbiAgICAnKSB7cnMocmVzKTt9JyxcbiAgICAnfSk7JyxcbiAgICAnfTsnXG4gIF0uam9pbignJyk7XG4gIHJldHVybiBGdW5jdGlvbihbJ1Byb21pc2UnLCAnZm4nXSwgYm9keSkoUHJvbWlzZSwgZm4pO1xufVxuZnVuY3Rpb24gZGVub2RlaWZ5V2l0aG91dENvdW50KGZuKSB7XG4gIHZhciBmbkxlbmd0aCA9IE1hdGgubWF4KGZuLmxlbmd0aCAtIDEsIDMpO1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZuTGVuZ3RoOyBpKyspIHtcbiAgICBhcmdzLnB1c2goJ2EnICsgaSk7XG4gIH1cbiAgdmFyIGJvZHkgPSBbXG4gICAgJ3JldHVybiBmdW5jdGlvbiAoJyArIGFyZ3Muam9pbignLCcpICsgJykgeycsXG4gICAgJ3ZhciBzZWxmID0gdGhpczsnLFxuICAgICd2YXIgYXJnczsnLFxuICAgICd2YXIgYXJnTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsnLFxuICAgICdpZiAoYXJndW1lbnRzLmxlbmd0aCA+ICcgKyBmbkxlbmd0aCArICcpIHsnLFxuICAgICdhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggKyAxKTsnLFxuICAgICdmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeycsXG4gICAgJ2FyZ3NbaV0gPSBhcmd1bWVudHNbaV07JyxcbiAgICAnfScsXG4gICAgJ30nLFxuICAgICdyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJzLCByaikgeycsXG4gICAgJ3ZhciBjYiA9ICcgKyBjYWxsYmFja0ZuICsgJzsnLFxuICAgICd2YXIgcmVzOycsXG4gICAgJ3N3aXRjaCAoYXJnTGVuZ3RoKSB7JyxcbiAgICBhcmdzLmNvbmNhdChbJ2V4dHJhJ10pLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICdjYXNlICcgKyAoaW5kZXgpICsgJzonICtcbiAgICAgICAgJ3JlcyA9IGZuLmNhbGwoJyArIFsnc2VsZiddLmNvbmNhdChhcmdzLnNsaWNlKDAsIGluZGV4KSkuY29uY2F0KCdjYicpLmpvaW4oJywnKSArICcpOycgK1xuICAgICAgICAnYnJlYWs7J1xuICAgICAgKTtcbiAgICB9KS5qb2luKCcnKSxcbiAgICAnZGVmYXVsdDonLFxuICAgICdhcmdzW2FyZ0xlbmd0aF0gPSBjYjsnLFxuICAgICdyZXMgPSBmbi5hcHBseShzZWxmLCBhcmdzKTsnLFxuICAgICd9JyxcbiAgICBcbiAgICAnaWYgKHJlcyAmJicsXG4gICAgJyh0eXBlb2YgcmVzID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiByZXMgPT09IFwiZnVuY3Rpb25cIikgJiYnLFxuICAgICd0eXBlb2YgcmVzLnRoZW4gPT09IFwiZnVuY3Rpb25cIicsXG4gICAgJykge3JzKHJlcyk7fScsXG4gICAgJ30pOycsXG4gICAgJ307J1xuICBdLmpvaW4oJycpO1xuXG4gIHJldHVybiBGdW5jdGlvbihcbiAgICBbJ1Byb21pc2UnLCAnZm4nXSxcbiAgICBib2R5XG4gICkoUHJvbWlzZSwgZm4pO1xufVxuXG5Qcm9taXNlLm5vZGVpZnkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgdmFyIGNhbGxiYWNrID1cbiAgICAgIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicgPyBhcmdzLnBvcCgpIDogbnVsbDtcbiAgICB2YXIgY3R4ID0gdGhpcztcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykubm9kZWlmeShjYWxsYmFjaywgY3R4KTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgaWYgKGNhbGxiYWNrID09PSBudWxsIHx8IHR5cGVvZiBjYWxsYmFjayA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHJlamVjdChleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGV4KTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUHJvbWlzZS5wcm90b3R5cGUubm9kZWlmeSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgY3R4KSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHRoaXM7XG5cbiAgdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2suY2FsbChjdHgsIG51bGwsIHZhbHVlKTtcbiAgICB9KTtcbiAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2suY2FsbChjdHgsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJy4vY29yZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5Qcm9taXNlLmVuYWJsZVN5bmNocm9ub3VzID0gZnVuY3Rpb24gKCkge1xuICBQcm9taXNlLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZSgpID09IDA7XG4gIH07XG5cbiAgUHJvbWlzZS5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0ZSgpID09IDE7XG4gIH07XG5cbiAgUHJvbWlzZS5wcm90b3R5cGUuaXNSZWplY3RlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXRlKCkgPT0gMjtcbiAgfTtcblxuICBQcm9taXNlLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fODEgPT09IDMpIHtcbiAgICAgIHJldHVybiB0aGlzLl82NS5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgYSB2YWx1ZSBvZiBhbiB1bmZ1bGZpbGxlZCBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl82NTtcbiAgfTtcblxuICBQcm9taXNlLnByb3RvdHlwZS5nZXRSZWFzb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuXzgxID09PSAzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fNjUuZ2V0UmVhc29uKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IGEgcmVqZWN0aW9uIHJlYXNvbiBvZiBhIG5vbi1yZWplY3RlZCBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl82NTtcbiAgfTtcblxuICBQcm9taXNlLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fODEgPT09IDMpIHtcbiAgICAgIHJldHVybiB0aGlzLl82NS5nZXRTdGF0ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fODEgPT09IC0xIHx8IHRoaXMuXzgxID09PSAtMikge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuXzgxO1xuICB9O1xufTtcblxuUHJvbWlzZS5kaXNhYmxlU3luY2hyb25vdXMgPSBmdW5jdGlvbigpIHtcbiAgUHJvbWlzZS5wcm90b3R5cGUuaXNQZW5kaW5nID0gdW5kZWZpbmVkO1xuICBQcm9taXNlLnByb3RvdHlwZS5pc0Z1bGZpbGxlZCA9IHVuZGVmaW5lZDtcbiAgUHJvbWlzZS5wcm90b3R5cGUuaXNSZWplY3RlZCA9IHVuZGVmaW5lZDtcbiAgUHJvbWlzZS5wcm90b3R5cGUuZ2V0VmFsdWUgPSB1bmRlZmluZWQ7XG4gIFByb21pc2UucHJvdG90eXBlLmdldFJlYXNvbiA9IHVuZGVmaW5lZDtcbiAgUHJvbWlzZS5wcm90b3R5cGUuZ2V0U3RhdGUgPSB1bmRlZmluZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGlzIGZpbGUgY29udGFpbnMgcm91dGUgZGVmaW5pdGlvbnMg4oCTIHRoZSBydWxlcyBob3cgbG9jYXRpb24gVVJMcyBhcmUgdHJhbnNsYXRlZFxuLy8gdG8gcGFyYW1ldGVycyBmb3Igc3RvcmVzIGluIHRoZSBDYXRiZXJyeSBhcHBsaWNhdGlvbi5cbi8vXG4vLyBGb3JtYXQ6XG4vLyAvc29tZS86cGFyYW1ldGVyW3N0b3JlMSxzdG9yZTIsc3RvcmUzXT9xdWVyeVBhcmFtZXRlcj06cXVlcnlWYWx1ZVtzdG9yZTEsc3RvcmUyXVxuLy9cbi8vIE1vcmUgZGV0YWlscyBoZXJlOlxuLy8gaHR0cDovL2NhdGJlcnJ5Lm9yZy9kb2N1bWVudGF0aW9uI3JvdXRpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBbXG5cdCcvOnBhZ2VbSGVhZF0nXG5dO1xuXG4iXX0=
