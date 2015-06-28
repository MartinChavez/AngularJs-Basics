'use strict';

/* AngularJS */
/* A client-side Javascript Framework for adding interactivity to HTML */
/* It is generally used to create dynamic websites*/

/* Angular benefits */
/* It allows you to organize your Javascript code */
/* It allows you to create responsive websites */
/* It allows you to test your application */
/* It allows you to load your application assets at once(vs loading all the assets every time the user clicks a hyperlink)
 /* It allows you to  update the web page with only new information (JSON Data) */
/* It connects well with modern Web API's */

/* Modules */
/* Provide a way to write encapsulated functionality for the Angular application */
/* Promotes maintainability, testability and readability */
/* The dependencies of the application are defined on Modules*/
/* It is a good practice to split Modules around functionality*/

/* Enclosing Javascript in a Closure is a Good Practice*/
(function () {

  var app = angular/* AngularJS library*/
    /* Application Name*/
    .module('learnAngularApp',
    /* Dependencies*/
    [
      'app-directives',
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/expressions.html',
          controller: 'ExpressionsCtrl'
        })
        .when('/controllers', {
          templateUrl: 'views/controllers.html',
          controller: 'ControllerCtrl'
        })
        .when('/directives', {
          templateUrl: 'views/directives.html',
          controller: 'DirectivesCtrl'
        })
        .when('/custom-directives', {
          templateUrl: 'views/custom-directives.html',
          controller: 'CustomDirectivesCtrl'
        })
        .when('/forms', {
          templateUrl: 'views/forms.html',
          controller: 'FormsCtrl'
        })
        .when('/services', {
          templateUrl: 'views/services.html',
          controller: 'ServicesCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

  /* Controllers */
  /* A controller is attached to the application */
  app.controller('FooterController', function () {
    /* Storing Data inside the Controller */
    // In order to achieve this, we need to set an Object to a property in the Controller
    this.footer = footer;
  });

  var footer = {
    projectName: 'AngularJS: Test-Driven Learning'
  };

  app.controller('PanelController', function () {
    this.tabCtrl = 1;
    this.selectTab = function (setTab) {
      this.tabCtrl = setTab;
    };

    this.isSelected = function (checkTab) {
      return this.tabCtrl === checkTab;
    };
  });

  app.controller('NavController', function () {
    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    };
    this.selectTab = function (setTab) {
      this.tab = setTab;
    };
  });

})();
