'use strict';

describe('Controller: LessonsCtrl', function () {

  var should = chai.should();

  // load the controller's module
  beforeEach(module('Obsidian'));

  var LessonsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LessonsCtrl = $controller('LessonsCtrl', {
      $scope: scope
    });
  }));

  it('should not fail', function () {
    // scope.lessons.should.have.length(2);
  });

});
