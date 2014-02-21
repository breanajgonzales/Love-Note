'use strict';

var loveNote = angular.module('loveNote', [
        'ngRoute',
        'loveNote.services',
        'loveNote.controllers',
        'loveNote.constants',
        'loveNote.filters',
        'loveNote.directives'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home',
            {templateUrl: 'partials/home.html',
                controller: 'HomeController',
                title: 'Home'});
        $routeProvider.otherwise(
            {redirectTo: '/home'});
    }])
    .run(['$location', '$rootScope', 'baseTitle', function ($location, $rootScope, baseTitle) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = baseTitle + current.$$route.title;
        });
    }]);