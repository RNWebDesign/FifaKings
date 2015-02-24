'use strict';

/**
 * @ngdoc function
 * @name fifaKingsV2App.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the fifaKingsV2App
 */
angular.module('fifaKingsV2App')
  .controller('UsersCtrl', ['$scope','PlayerService',function ($scope,PlayerService) {
    $scope.users = PlayerService.getPlayers();

  }]);
