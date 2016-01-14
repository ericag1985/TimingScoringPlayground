'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'racersMain'
      })
      .when('/addRacer', {
        templateUrl: 'views/racer-add.html',
        controller: 'RacerAddCtrl'
      })
      .when('/racer/:id', {
        templateUrl: 'views/racer-view.html',
        controller: 'RacerViewCtrl',
        controllerAs: 'racerView'
      })
      .when('/racer/:id/delete', {
        templateUrl: 'views/racer-delete.html',
        controller: 'RacerDeleteCtrl',
        controllerAs: 'racerDelete'
      })
      .when('/racer/:id/edit', {
        templateUrl: 'views/racer-edit.html',
        controller: 'RacerEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('RacerRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
       id: '_id'
      });
    });
  })
  .factory('Racer', function(RacerRestangular) {
    return RacerRestangular.service('racers');
  });
