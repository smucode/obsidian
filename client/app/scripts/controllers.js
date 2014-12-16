'use strict';
/* global facebookConnectPlugin */

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

  .controller('UsersCtrl', function($scope, TestService) {
    TestService.users(function(users) {
      $scope.users = users;
    });
  })

  .controller('AuthCtrl', function($scope, $state, TestService) {
    var errorCallback = function(data) {
      $scope.error = data;
    };

    var successCallback = function(data) {
      console.log('facebookConnectPlugin.login response', data);
      TestService.postToken(data.authResponse.accessToken, data.authResponse.userID, function(user) {
        console.log('got user', user);
        $state.go('page.me');
      }, errorCallback);
    };

    $scope.login = function() {
      facebookConnectPlugin.login(['email'], successCallback, errorCallback);
    };
  })

  .controller('MeCtrl', function($scope, $state, $timeout, TestService) {
    var promise = null;

    TestService.getMe(function(user) {
      $scope.user = user;
      $timeout(function() {
        $state.go('tab.lessons');
      }, 2000);
    }, function() {
      $timeout.cancel(promise);
      console.error(arguments);
      $state.go('page.auth');
    });
  })

  .controller('DevCtrl', function($scope, $state) {
    $scope.go = function(location) {
      $state.go(location);
    };
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
