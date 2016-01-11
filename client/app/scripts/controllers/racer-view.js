'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RacerViewCtrl
 * @description
 * # RacerViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RacerViewCtrl', function ($routeParams, Racer) {
    this.viewRacer = true;
    this.racer = Racer.one($routeParams.id).get().$object;
  });
