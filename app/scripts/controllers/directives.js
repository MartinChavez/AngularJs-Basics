

angular.module('learnAngularApp')
  .controller('DirectivesCtrl', function ($scope) {

    /*Single element directives*/
    $scope.showButton = true;

    /*Multiple element directives*/
    $scope.directives = directives;
  });

var directives = [
  {
    name: "ng-show"
  },
  {
    name: "ng-hide"
  }
];
