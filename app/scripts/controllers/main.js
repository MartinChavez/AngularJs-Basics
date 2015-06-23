'use strict';

/**
 * @ngdoc function
 * @name learnAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learnAngularApp
 */
angular.module('learnAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
