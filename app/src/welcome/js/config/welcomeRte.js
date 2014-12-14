(function() {
  'use strict';
  angular.module('welcomeApp.routes', ['ui.router']).config([
    '$stateProvider', function($stateProvider) {}, $stateProvider.state('welcome', {
      url: '/',
      templateUrl: '/app/src/welcome/views/index.html'
    })
  ]);

}).call(this);

//# sourceMappingURL=welcomeRte.js.map
