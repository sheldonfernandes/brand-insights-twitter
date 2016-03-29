'use strict';

angular.module('d3dashApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        //url: '/',
        abstract:true,
        template: '<main></main>'
      })
      .state('main.overview', {
        url:         '/overview',
        templateUrl: 'overview/overview.html'
      })
      .state('main.audience', {
        url:         '/audience',
        templateUrl: 'audience/audience.html'
      });
  });
