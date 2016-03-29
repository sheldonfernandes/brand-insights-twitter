'use strict';

angular.module('d3dashApp')
  .directive('banner', function () {
    return {
      templateUrl: 'components/banner/banner.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
