'use strict';

/**
 * @ngdoc function
 * @name fifaKingsV2App.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the fifaKingsV2App
 */
angular.module('fifaKingsV2App')
  .controller('UsersCtrl', ['$scope','UserService',function ($scope,UserService) {
    $scope.users = UserService.getUsers();

  }]);
