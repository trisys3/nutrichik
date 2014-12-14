'use strict';

// variables & functions for production environment
module.exports = {
	port: process.env.SERVER_PORT || 3000, // server port
	dbUrl: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || ('mongodb://nutrichik.com:' + (process.env.MONGO_PORT || 27017) + '/nutrichik'), // database URL for MongooseJS
	sessionSecret: 'Nutrition for People', // secret for user sessions

	getJs: function() {
		var scripts = [

			// jQuery
			'/libs/jquery/dist/jquery.min.js',

			// jQuery UI
			'/libs/jquery-ui/jquery-ui.min.js',

			// JavaScript functionality for Bootstrap
			'/libs/bootstrap-css/js/bootstrap.min.js',

			// core Angular scripts
			'/libs/angular/angular.min.js',
			'/libs/angular-route/angular-route.min.js',
			'/libs/angular-resource/angular-resource.min.js',
			'/libs/angular-animate/angular-animate.min.js',
			'/libs/angular-cookies/angular-cookies.min.js'

			
		];

		return scripts;
	},
};