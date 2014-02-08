'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('portfolio app', function() {

  beforeEach(function() {
    browser().navigateTo('public/index.html');
  });


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser().navigateTo('#/home');
    });


    it('should render home when user navigates to /home', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for home/);
    });

  });


  describe('about', function() {

    beforeEach(function() {
      browser().navigateTo('#/about');
    });


    it('should render about when user navigates to /about', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for about/);
    });

  });

    describe('contact', function() {

    beforeEach(function() {
      browser().navigateTo('#/contact');
    });


    it('should render contact when user navigates to /contact', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for contact/);
    });

  });

    describe('portfolio', function() {

    beforeEach(function() {
      browser().navigateTo('#/portfolio');
    });


    it('should render portfolio when user navigates to /portfolio', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for portfolio/);
    });

  });
});
