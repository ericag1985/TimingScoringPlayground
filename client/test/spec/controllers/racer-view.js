'use strict';

describe('Controller: RacerViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RacerViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RacerViewCtrl = $controller('RacerViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RacerViewCtrl.awesomeThings.length).toBe(3);
  });
});
