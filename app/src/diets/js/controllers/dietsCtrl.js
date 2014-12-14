(function() {
  'use strict';
  angular.module('dietsApp.controllers', []).controller('dietsCtrl', [
    '$scope', function($scope) {
      var diets;
      diets = $scope.diets = $resource('diets/:diet', {
        diet: '',
        update: {
          method: 'PATCH'
        }
      });
      $scope.create = function(newDiets) {
        var id, newDiet, _i, _len;
        if (newDiets.isString) {
          newDiets = [newDiets];
        }
        if (Array.isArray(newDiets)) {
          for (id = _i = 0, _len = newDiets.length; _i < _len; id = ++_i) {
            newDiet = newDiets[id];
            if (newDiet) {
              diets.id = newDiet;
            }
          }
        }
        return diets.$save(function(newDiets) {
          return null;
        }, function(err) {
          return $scope.error = err;
        });
      };
      $scope.update = function(dietIds) {
        var id, _i, _len;
        if ($.isNumeric(dietIds)) {
          dietIds = [dietIds];
        }
        if (Array.isArray(dietIds)) {
          for (_i = 0, _len = dietIds.length; _i < _len; _i++) {
            id = dietIds[_i];
            newDiets[id] = diets[id];
          }
        }
        return diet.$update(function(newDiets) {
          return null;
        }, function(err) {
          return $scope.error = err;
        });
      };
      return $scope.remove = function(dietIds) {
        var id, _i, _len;
        if ($isNumeric(dietIds)) {
          dietIds = [dietIds];
        }
        if (Array.isArray(dietIds)) {
          for (_i = 0, _len = dietIds.length; _i < _len; _i++) {
            id = dietIds[_i];
            diets.id = null;
          }
        }
        return diet.$remove(function(dietIds) {
          return null;
        }, function(err) {
          return $scope.error = err;
        });
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=dietsCtrl.js.map
