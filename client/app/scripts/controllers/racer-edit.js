'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RacerEditCtrl
 * @description
 * # RacerEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RacerEditCtrl', function ($scope, $routeParams, Racer, $location) {
    $scope.editRacer = true;
    $scope.racer = {};
    Racer.one($routeParams.id).get().then(function(racer) {
      $scope.racer = racer;
      $scope.saveRacer = function() {
        $scope.racer.save().then(function() {
          console.log('edit-clicked');
          $location.path('/racer/' + $routeParams.id);
        });
      };
    });
  });
