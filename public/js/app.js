'use strict';

var darwinFail = angular.module('darwinFail', [
        'ngRoute',
        'darwinFail.services',
        'darwinFail.controllers',
        'darwinFail.constants',
        'darwinFail.filters',
        'darwinFail.directives'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home',
            {templateUrl: 'partials/home.html',
                controller: 'HomeController',
                title: 'Darwin Fail'});
        $routeProvider.when('/about',
            {templateUrl: 'partials/about.html',
                controller: 'AboutController',
                title: 'About Page'});
        $routeProvider.when('/contact',
            {templateUrl: 'partials/contact.html',
                controller: 'ContactController',
                title: 'Contact Page'});
        $routeProvider.when('/portfolio',
            {templateUrl: 'partials/portfolio.html',
                controller: 'PortfolioController',
                title: 'Portfolio Page'});
        $routeProvider.when('/popular',
            {templateUrl: 'partials/mostpopular.html',
                controller: 'MostPopularController',
                title: 'Most Popular'});
        $routeProvider.otherwise(
            {redirectTo: '/home'});
    }])
    .run(['$location', '$rootScope', 'baseTitle', function ($location, $rootScope, baseTitle) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = baseTitle + current.$$route.title;
        });
    }]);