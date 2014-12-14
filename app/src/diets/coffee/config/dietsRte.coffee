'use strict'

angular.module 'dietsApp.routes', ['ui.router']
  .config ['$stateProvider', ($stateProvider) ->
    $stateProvider
    .state 'diets',
      views:
        list:
          url: '/diet/:diet'
          templateUrl: '/diets/views/index.html'
        info:
          templateUrl: '/diets/views/info.html'
        edit:
          url: '/diet/:diet/edit'
          templateUrl: '/diets/views/edit.html'
        add:
          url: '/diet/add'
          templateUrl: '/diets/views/add.html'
  ]