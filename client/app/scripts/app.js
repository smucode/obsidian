'use strict';

angular
  .module('Obsidian', ['ionic', 'config', 'Obsidian.services', 'Obsidian.controllers'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
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
      });

    $urlRouterProvider.otherwise('/tab/lessons');

  });
