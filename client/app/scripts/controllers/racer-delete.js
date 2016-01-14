'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RacerDeleteCtrl
 * @description
 * # RacerDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RacerDeleteCtrl', function ($routeParams, Racer, $location) {
    this.racer = Racer.one($routeParams.id).get().$object;
    this.deleteRacer = function() {
      this.racer.remove().then(function() {
        $location.path('/');
      });
    };
    this.back = function() {
      $location.path('/racer' + $routeParams.id);
    };
  });
