'use strict';
angular
  .module('Obsidian.services', [])
  .factory('TestService', function($http) {

    var apiPath = 'http://tutora-app.herokuapp.com/v1';

    return {
      all: function(success) {
        $http
          .get(apiPath + '/lesson')
          .success(success);
      },
      get: function(id, success) {
        $http
          .get(apiPath + '/lesson/' + id)
          .success(success);
      },
      create: function(title, description, success) {
        $http
          .post(apiPath + '/lesson', {
            id: new Date().getTime().toString(16),
            title: title,
            desc: description
          })
          .success(success);
      }
    };
  });
