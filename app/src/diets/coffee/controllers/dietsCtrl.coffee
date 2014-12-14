'use strict'

angular.module 'dietsApp.controllers', []
  .controller 'dietsCtrl', ['$scope', ($scope) ->

    diets = $scope.diets = $resource 'diets/:diet',
      diet: '',
      update:
        method: 'PATCH'
		
    $scope.create = (newDiets) ->
      if newDiets.isString
        newDiets = [newDiets]
      if Array.isArray newDiets
        (diets.id = newDiet if newDiet) for newDiet, id in newDiets

      diets.$save (newDiets) ->
        return null
      , (err) ->
        $scope.error = err

    $scope.update = (dietIds) ->
      if $.isNumeric dietIds
        dietIds = [dietIds]
      if Array.isArray dietIds
        (newDiets[id] = diets[id]) for id in dietIds

      diet.$update (newDiets) ->
        return null
      , (err) ->
        $scope.error = err

    $scope.remove = (dietIds) ->
      if $isNumeric dietIds
        dietIds = [dietIds]
      if Array.isArray dietIds
        (diets.id = null) for id in dietIds

      diet.$remove (dietIds) ->
        return null
      , (err) ->
        $scope.error = err
	]