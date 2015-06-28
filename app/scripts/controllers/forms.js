'use strict';

angular.module('learnAngularApp')
  .controller('FormsCtrl', function ($scope) {
    $scope.model = {};
    $scope.modelList = [];

    $scope.addModel = function (model){
      $scope.modelList.push(model);
      /*By resetting the model, your view gets updated into a "pristine" view*/
      $scope.model = {};
    };

  });
