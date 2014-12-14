'use strict'

angular.module 'welcomeApp.routes', ['ui.router']
  .config ['$stateProvider', ($stateProvider) ->
		$stateProvider
		.state 'welcome',
			url: '/'
			templateUrl: '/app/src/welcome/views/index.html'
	]