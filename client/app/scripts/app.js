'use strict';
/* global facebookConnectPlugin */

angular
  .module('Obsidian', ['ionic', 'angular-md5', 'config', 'Obsidian.services', 'Obsidian.controllers'])

  .run(function($ionicPlatform, $http, $state, TestService) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      if (!window.cordova) {
        // console.log('facebookConnectPlugin.browserInit');
        facebookConnectPlugin.browserInit('1578416892394084');
      }
      $http.defaults.withCredentials = true;

      // check auth status
      TestService.getMe(function() {
        // all good
      }, function() {
        // not logged in
        $state.go('page.auth');
      });
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      .state('page', {
        url: '/page',
        abstract: true,
        templateUrl: 'templates/page.html'
      })

      .state('tab.lessons', {
        url: '/lessons',
        views: {
          'lessons-tab': {
            templateUrl: 'templates/lessons.html',
            controller: 'LessonsCtrl'
          }
        }
      })

      .state('tab.lesson', {
        url: '/lesson/:lessonId',
        views: {
          'lessons-tab': {
            templateUrl: 'templates/lesson.html',
            controller: 'LessonCtrl'
          }
        }
      })

      .state('tab.create', {
        url: '/create',
        views: {
          'create-tab': {
            templateUrl: 'templates/create.html',
            controller: 'CreateCtrl'
          }
        }
      })

      .state('page.auth', {
        url: '/auth',
        views: {
          'auth-page': {
            templateUrl: 'templates/auth.html',
            controller: 'AuthCtrl'
          }
        }
      })

      .state('page.me', {
        url: '/me',
        views: {
          'me-page': {
            templateUrl: 'templates/me.html',
            controller: 'MeCtrl'
          }
        }
      })

      .state('tab.dev', {
        url: '/dev',
        views: {
          'dev-tab': {
            templateUrl: 'templates/dev.html',
            controller: 'DevCtrl'
          }
        }
      })

      .state('tab.people', {
        url: '/people',
        views: {
          'people-tab': {
            templateUrl: 'templates/users.html',
            controller: 'UsersCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/lessons');

  });
