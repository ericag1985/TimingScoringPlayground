'use strict';

describe('Controller: RacerEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RacerEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RacerEditCtrl = $controller('RacerEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RacerEditCtrl.awesomeThings.length).toBe(3);
  });
});
