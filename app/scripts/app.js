'use strict';

/**
 * @ngdoc overview
 * @name fifaKingsV2App
 * @description
 * # fifaKingsV2App
 *
 * Main module of the application.
 */
 angular
 .module('fifaKingsV2App', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/users', {
    templateUrl: 'views/users.html',
    controller: 'UsersCtrl'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .when('/teams', {
    templateUrl: 'views/teams.html',
    controller: 'TeamsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
