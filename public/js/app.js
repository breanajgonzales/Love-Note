'use strict';

var portfolioApp = angular.module('portfolioApp', [
        'ngRoute',
        'portfolioApp.services',
        'portfolioApp.controllers',
        'portfolioApp.constants',
        'portfolioApp.filters',
        'portfolioApp.directives'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.tpl.html', controller: 'HomeController', title: 'Home Page'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.tpl.html', controller: 'AboutController', title: 'About Page'});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.tpl.html', controller: 'ContactController', title: 'Contact Page'});
        $routeProvider.when('/portfolio', {templateUrl: 'partials/portfolio.tpl.html', controller: 'PortfolioController', title: 'Portfolio Page'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .run(['$location', '$rootScope', 'baseTitle', function ($location, $rootScope, baseTitle) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = baseTitle + current.$$route.title;
        });
    }]);