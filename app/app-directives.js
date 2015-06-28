'use strict';

(function () {

  var app = angular.module('app-directives',[]);

  /*Directives*/
  /*A dash in HTML translates to camelCase in Javascript */
  app.directive('modelDirective', function () {
    /*A configuration object defining the directive should be returned*/
    return {
      /*Type of directive (E for Element)*/
      restrict: 'E',
      templateUrl: 'views/model.html'
    };

  });
  app.directive('modelTitle', function () {
    return {
      /*Type of directive (A for Attribute)*/
      restrict: 'A',
      templateUrl: 'views/model.html'
    };

  });
  app.directive('panels', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/panels.html',
      controller: function () {
        this.tab = 2;
        this.isPanelSelected = function (checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panels'
    };

  });

})();
