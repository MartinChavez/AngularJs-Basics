'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:ExpressionsCtrl
 * @description
 * # ExpressionsCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('ExpressionsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
