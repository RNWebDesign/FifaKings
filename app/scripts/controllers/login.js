'use strict';

/**
 * @ngdoc function
 * @name fifaKingsV2App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the fifaKingsV2App
 */
 angular.module('fifaKingsV2App')
 .controller('LoginCtrl', ['$scope','PlayerService',function ($scope,PlayerService) {

 	$scope.validateLogin = function(user){
 		UserService.login(user.login,user.password);
 	};
 }]);
