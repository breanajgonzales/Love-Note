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
    }]);