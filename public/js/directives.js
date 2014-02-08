'use strict';

/* Directives */


angular.module('portfolioApp.directives', [])
    .directive('ngToggle', function() {
        return {
            replace: true,
            restrict: 'A',
            link: function(scope, element, attr) {
                scope.$watch(attr.ngToggle, function(value) {
                    element.css('display', value ? '' : 'none');
                })
            }
        }
    });