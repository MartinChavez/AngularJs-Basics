

angular.module('learnAngularApp')
  .controller('DirectivesCtrl', function ($scope) {

    /*Single element directives*/
    $scope.showButton = true;

    /*Multiple element directives*/
    $scope.directives = directives;
  });

var directives = [
  {
    name: "ng-show",
    number: 0,
    image: "http://res.cloudinary.com/buddahbelly/image/upload/v1423072364/brilliantbritz/angular-js.png"
  },
  {
    name: "ng-hide",
    number: 1
  },{
    name: "ng-repeat",
    number: 2
  }
];
