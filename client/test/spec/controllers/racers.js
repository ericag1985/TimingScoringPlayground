'use strict';

describe('Controller: RacersCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RacersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RacersCtrl = $controller('RacersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RacersCtrl.awesomeThings.length).toBe(3);
  });
});
