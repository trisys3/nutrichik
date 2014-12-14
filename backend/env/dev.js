'use strict';

var _ = require('lodash');

// variables & functions to be used in development environment
module.exports = {
	port: process.env.SERVER_PORT || 3001, // port for the server to listen on
	dbUrl: 'mongodb://nutrichik.com:' + (process.env.MONGO_PORT || 27018) + '/nutrichik-dev', // database URL for mongoose
	sessionSecret: 'Nutrition for the Monkeys', // session secret

	getJs: function() {
		var scripts = [

			// jQuery
			'/libs/jquery/dist/jquery.js',

			// jQuery UI
			'/libs/jquery-ui/jquery-ui.js',

			// JavaScript functionality for Bootstrap
			'/libs/bootstrap-css/js/bootstrap.js',

			// main Angular scripts
			'/libs/angular/angular.js',
			'/libs/angular-route/angular-route.js',
			'/libs/angular-resource/angular-resource.js',
			'/libs/angular-animate/angular-animate.js',
			'libs/angular-cookies/angular-cookies.js',

			// Angular UI
			'/libs/angular-bootstrap/ui-bootstrap.js',
			'/libs/angular-ui-router/release/angular-ui-router.js',
			'/libs/angular-ui-utils/ui-utils.js',

			'/main/js/head.js'
		];

		return scripts;
	},

	getModularJs: function(module) {
		var moduleScripts = [];
		if(_.isString(module)) {
			module = [module];
		}
		if(_.isArray(module)) {
			_.forOwn(module, function(val) {
				moduleScripts.push(
					'/src/' + val + '/js/app.js',
					'/src/' + val + '/js/config/' + val + 'Rte.js',
					'/src/' + val + '/js/controllers/' + val + 'Ctrl.js',
					'/src/' + val + '/js/services/' + val + 'Serv.js',
					'/src/' + val + '/js/filters/' + val + 'Fils.js',
					'/src/' + val + '/js/directives/' + val + 'Direc.js'
				);
			});
		}

		return moduleScripts;
	},

	getCss: function() {
		var styles = [

			// Bootstrap
			'/libs/bootstrap-css/css/bootstrap.css',
			'/libs/bootstrap-css/css/bootstrap-theme.css',

			// jQuery UI themes & other CSS functionality
			'/libs/jquery-ui/themes/base/all.css',

			// Angular CSP-compliant stylesheet
			'/libs/angular/angular-csp.css'
		];

		return styles;
	},

	getModularCss: function(module) {
		var moduleStyles = [];
		if(_.isString(module)) {
			module = [module];
		}
		if(_.isArray(module)) {
			_.forOwn(module, function(val) {
				moduleStyles.push(
					'/src/' + val + '/css/main.css'
				);
			});
		}

		return moduleStyles;
	}
};