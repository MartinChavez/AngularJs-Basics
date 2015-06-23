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

angular /* AngularJS library*/
        /* Application Name*/
  .module('learnAngularApp',
  /* Dependencies*/
  [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
