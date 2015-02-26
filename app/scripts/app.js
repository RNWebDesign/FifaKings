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
  'ngTouch',
  'ui.bootstrap'
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
  .when('/match', {
    templateUrl: 'views/match.html',
    controller: 'MatchCtrl'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterCtrl'
  })
  .when('/tournaments', {
    templateUrl: 'views/tournaments.html',
    controller: 'TournamentsCtrl'
  })
  .when('/tournament', {
    templateUrl: 'views/tournament.html',
    controller: 'TournamentCtrl'
  })
  .when('/player', {
    templateUrl: 'views/player.html',
    controller: 'PlayerCtrl'
  })
  .when('/player', {
    templateUrl: 'views/player.html',
    controller: 'PlayerCtrl'
  })
  .when('/players', {
    templateUrl: 'views/players.html',
    controller: 'PlayersCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
