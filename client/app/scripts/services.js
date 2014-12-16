'use strict';
angular
  .module('Obsidian.services', [])
  .factory('TestService', function($http) {

    var apiPath = 'http://tutora-app.herokuapp.com/v1';
    // var apiPath = 'http://localhost:3000/v1';

    return {
      all: function(success) {
        $http
          .get(apiPath + '/lessons')
          .success(success);
      },
      users: function(success) {
        $http
          .get(apiPath + '/users')
          .success(success);
      },
      getMe: function(success, error) {
        $http
          .get(apiPath + '/users/me')
          .error(error)
          .success(success);
      },
      get: function(id, success) {
        $http
          .get(apiPath + '/lessons/' + id)
          .success(success);
      },
      create: function(title, description, success) {
        $http
          .post(apiPath + '/lessons', {
            id: new Date().getTime().toString(16),
            title: title,
            desc: description
          })
          .success(success);
      },
      postToken: function(accessToken, userId, success, error) {
        console.log('postToken request', userId, accessToken);
        $http
          .post(apiPath + '/users', {
            'id': userId,
            'access_token': accessToken
          })
          .error(error)
          .success(success);
      }
    };
  });
