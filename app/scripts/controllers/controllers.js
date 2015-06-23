/* Controllers */
/* Controllers are where we define the application behaviour by defining functions and values */

angular.module('learnAngularApp')
  .controller('ControllerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
