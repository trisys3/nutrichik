(function() {
  'use strict';
  angular.module('dietsApp.routes', ['ui.router']).config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('diet', {
        views: {
          list: {
            url: '/diet/:diet',
            templateUrl: '/diets/views/index.html'
          },
          info: {
            templateUrl: '/diets/views/info.html'
          }
        }
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=dietsRte.js.map
