'use strict';

/* Controllers */

angular.module('portfolioApp.controllers', [])
    .controller('HomeController', ['$scope', function($scope) {
        $scope.image1 = true;

        $scope.toggle = function() {
            $scope.image1 = !$scope.image1;
        };
    }])
    .controller('AboutController', ['$scope', function($scope) {

    }])
    .controller('ContactController', ['$scope', function($scope) {

    }])
    .controller('PortfolioController', ['$scope', 'PortfolioListService', function($scope, PortfolioListService) {
        $scope.portfolioList = {};

        PortfolioListService.success(function(data) {
            $scope.portfolioList = data;
        });
    }]);