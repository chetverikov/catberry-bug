/**
 * This file is a template and it is used only for some string replaces
 * by BrowserBundleBuilder module. It does not work by itself.
 */

'use strict';

const stores = [


{name: 'Head', constructor: require('./catberry_stores/Head.js')},
{name: 'Main', constructor: require('./catberry_stores/Main.js')}

];

const components = [


{
	name: 'document',
	constructor: require('./catberry_components/document/Document.js'),
	properties: {"name":"document","template":"./document.jade","logic":"./Document.js"},
	templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n\nbuf.push("<!DOCTYPE html><html><head cat-store=\\"Head\\"></head><body><cat-hello-world id=\\"unique\\" cat-store=\\"Main\\"></cat-hello-world></body></html>");;return buf.join("");\n}',
	errorTemplateSource: null
},
{
	name: 'head',
	constructor: require('./catberry_components/head/Head.js'),
	properties: {"name":"head","template":"./head.jade","logic":"./Head.js"},
	templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (description, title) {\nbuf.push("<title>" + (jade.escape((jade_interp = title) == null ? \'\' : jade_interp)) + "</title><meta charset=\\"utf-8\\"/><meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\"/><meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1, user-scalable=no\\"/><meta name=\\"keywords\\" content=\\"\\"/><meta name=\\"description\\"" + (jade.attr("content", description, true, false)) + "/><link href=\\"/styles.css\\" rel=\\"stylesheet\\"/><link rel=\\"shortcut icon\\" href=\\"/images/favicon.ico\\"/><script src=\\"/bundle.js\\"></script>");}.call(this,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");\n}',
	errorTemplateSource: null
},
{
	name: 'hello-world',
	constructor: require('./catberry_components/hello-world/HelloWorld.js'),
	properties: {"name":"hello-world","template":"./hello.jade","errorTemplate":"./error.jade","logic":"./HelloWorld.js"},
	templateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n;var locals_for_with = (locals || {});(function (who) {\nbuf.push("<h1>Hello, " + (jade.escape((jade_interp = who) == null ? \'\' : jade_interp)) + "!</h1><a href=\\"/index\\">Index</a><br/><a href=\\"/second\\">Second</a>");}.call(this,"who" in locals_for_with?locals_for_with.who:typeof who!=="undefined"?who:undefined));;return buf.join("");\n}',
	errorTemplateSource: 'function template(locals) {\nvar buf = [];\nvar jade_mixins = {};\nvar jade_interp;\n\nbuf.push("<h1>Oops!</h1>");;return buf.join("");\n}'
}

];

const routeDefinitions = require('./routes.js') || [];

const Catberry = require('./node_modules/catberry/browser/Catberry.js');
const BootstrapperBase = require('./node_modules/catberry/lib/base/BootstrapperBase.js');
const StoreDispatcher = require('./node_modules/catberry/lib/StoreDispatcher');
const ModuleApiProvider = require('./node_modules/catberry/browser/providers/ModuleApiProvider');
const CookieWrapper = require('./node_modules/catberry/browser/CookieWrapper');

class Bootstrapper extends BootstrapperBase {

	/**
	 * Creates a new instance of the browser Catberry's bootstrapper.
	 */
	constructor() {
		super(Catberry);
	}

	/**
	 * Configures a Catberry's service locator.
	 * @param {Object} configObject The application config object.
	 * @param {ServiceLocator} locator The service locator to configure.
	 */
	configure(configObject, locator) {
		super.configure(configObject, locator);

		locator.register('storeDispatcher', StoreDispatcher, true);
		locator.register('moduleApiProvider', ModuleApiProvider, true);
		locator.register('cookieWrapper', CookieWrapper, true);

		locator.registerInstance('window', window);

		routeDefinitions.forEach(routeDefinition =>
			locator.registerInstance('routeDefinition', routeDefinition));

		stores.forEach(store => locator.registerInstance('store', store));

		components.forEach(component => locator.registerInstance('component', component));
	}
}

module.exports = new Bootstrapper();
