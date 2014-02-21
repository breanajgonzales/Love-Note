'use strict';

/* Directives */


angular.module('loveNote.directives', [])
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