'use strict';
angular
  .module('Obsidian.controllers', [])

  .controller('LessonsCtrl', function($scope, TestService) {
    TestService.all(function(lessons) {
      $scope.lessons = lessons;
    });
  })

  .controller('LessonCtrl', function($scope, $stateParams, TestService) {
    TestService.get($stateParams.lessonId, function(lesson) {
      $scope.lesson = lesson;
    });
  })

  .controller('UsersCtrl', function($scope) {
    $scope.users = [
      {name: 'Stig Murberg', email: 'stig.murberg@gmail.com'},
      {name: 'Hani Mustafa', email: 'hani.mustafa@gmail.com'}
    ];
  })

  .controller('CreateCtrl', function($scope, $state, TestService) {
    $scope.title = '';
    $scope.description = '';
    $scope.create = function(title, description) {
      TestService.create(title, description, function() {
        $state.go('tab.lessons');
      });
    };
  });
