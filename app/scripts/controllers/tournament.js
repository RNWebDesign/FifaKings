'use strict';

/**
 * @ngdoc function
 * @name fifaKingsV2App.controller:TournamentCtrl
 * @description
 * # TournamentCtrl
 * Controller of the fifaKingsV2App
 */
angular.module('fifaKingsV2App')
  .controller('TournamentCtrl',['$scope','TournamentService','$routeParams', function ($scope,TournamentService,$routeParams) {
        $scope.tid = $routeParams.tid;
  }]);
