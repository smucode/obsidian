'use strict';
angular
  .module('Obsidian.services', [])
  .factory('TestService', function() {

    var lessons = [
      {id: 0, title: 'Spanish lesson', description: 'Habla enspañol?'},
      {id: 1, title: 'French lesson', description: 'Parlez vous françias?'}
    ];

    return {
      all: function() {
        return lessons;
      },
      get: function(id) {
        return lessons[id];
      },
      create: function(title, description) {
        lessons.push({
          id: lessons.length,
          title: title,
          description: description
        });
      }
    };
  });
