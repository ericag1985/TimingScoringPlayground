'use strict';

describe('Controller: RacerAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RacerAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RacerAddCtrl = $controller('RacerAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RacerAddCtrl.awesomeThings.length).toBe(3);
  });
});
