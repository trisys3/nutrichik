'use strict'

angular.module 'dietsApp.routes', ['ui.router']
	.config ['$stateProvider', ($stateProvider) ->
		$stateProvider
		.state 'diet'
			url: '/diet/:diet'
			controller: 'dietsCtrl'
			templateUrl: '/diets/views/index.html'
	]