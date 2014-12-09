'use strict';
angular
  .module('Obsidian.controllers', [])

  .controller('LessonsCtrl', function($scope, TestService) {
    $scope.lessons = TestService.all();
  })

  .controller('LessonCtrl', function($scope, $stateParams, TestService) {
    $scope.lesson = TestService.get($stateParams.lessonId);
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
      TestService.create(title, description);
      $state.go('tab.lessons');
    };
  });
