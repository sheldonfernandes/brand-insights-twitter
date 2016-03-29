'use strict';

describe('Controller: AudienceCtrl', function () {

  // load the controller's module
  beforeEach(module('d3dashApp.audience'));

  var AudienceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AudienceCtrl = $controller('AudienceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
