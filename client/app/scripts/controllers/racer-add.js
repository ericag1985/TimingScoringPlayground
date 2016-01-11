'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RacerAddCtrl
 * @description
 * # RacerAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RacerAddCtrl', function ($scope, Racer, $location) {
    $scope.racer = {};
    $scope.saveRacer = function() {
      Racer.post(this.racer).then(function () {
        console.log('add-click');
        $location.path('/#/');
      });
    };
  });
