'use strict';

angular.module('d3dashApp', [
  'd3dashApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ui.router.tabs'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/overview');

    $locationProvider.html5Mode(true);
  });
