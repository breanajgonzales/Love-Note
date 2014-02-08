'use strict';

/* jasmine specs for services go here */

describe('service', function () {
    var scope;

    beforeEach(module('portfolioApp.services'));

    //mock the service for the same reason and include $rootScope and $service
    beforeEach(angular.mock.inject(function ($rootScope) {
        //create an empty scope
        scope = $rootScope.$new();
    }));

    it('portfolio list should have 2 items'), inject(['PortfolioListService', function(PortfolioListService) {
        scope.portfolioList = {};

        PortfolioListService.success(function(data) {
            scope.portfolioList = data;
        });

        expect(scope.portfolioList).count(2);
    }]);
});
