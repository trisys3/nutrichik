'use strict'

angular.module 'nutriApp.config', ['ui.router']
  .config ['$stateProvider', ($stateProvider) ->
		
	]

  .config ['$locationProvider', ($locationProvider) ->
    $locationProvider.html5Mode
      enabled: true
      requireBase: false
  ]