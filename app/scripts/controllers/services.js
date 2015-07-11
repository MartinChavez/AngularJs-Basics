'use strict';

angular.module('learnAngularApp')
  /* In order to use a Service, you need to specify the names of the services that the controller needs */
  /* These services become arguments in the controllers function*/
  /* In order to achieve dependency injection, you need to add the services as an argument*/
  .controller('ServicesCtrl',['$scope','$http', function ($scope,$http) {

    /*It is a good practice to initialize the values that will be receiving values on the callback*/
    /* because the page will render before our data returns from the request*/
    $scope.data = {
      status: "beforeCall"
    };
    /* $http returns a Promise, this means that success() receives the data*/
    $http.get('examples.json').success(function(data){
      $scope.data = data;
    });

  }]);
