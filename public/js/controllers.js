'use strict';

/* Controllers */

angular.module('loveNote.controllers', [])
    .controller('HomeController', ['$scope', function($scope) {
        $scope.image1 = true;

        $scope.toggle = function() {
            $scope.image1 = !$scope.image1;
        };
        $scope.onYouTubePlayerReady = function() {

        }
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