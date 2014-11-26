'use strict';
angular
  .module('Obsidian.controllers', [])

  .controller('LessonsCtrl', function($scope, TestService) {
    $scope.lessons = TestService.all();
  })

  .controller('LessonCtrl', function($scope, $stateParams, TestService) {
    $scope.lesson = TestService.get($stateParams.lessonId);
  })

  .controller('CreateCtrl', function($scope, $state, TestService) {
    $scope.title = '';
    $scope.description = '';
    $scope.create = function(title, description) {
      TestService.create(title, description);
      $state.go('tab.lessons');
    };
  });
