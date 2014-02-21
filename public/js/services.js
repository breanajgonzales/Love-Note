'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('loveNote.services', [])
    .factory('LoveNoteListService', function($http) {
        return $http.get('/public/json/portfolio-data.json');
    });