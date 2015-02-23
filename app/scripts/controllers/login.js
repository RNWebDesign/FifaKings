'use strict';

/**
 * @ngdoc function
 * @name fifaKingsV2App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the fifaKingsV2App
 */
 angular.module('fifaKingsV2App')
 .controller('LoginCtrl', ['$scope','UserService',function ($scope,UserService) {

 	$scope.validateLogin = function(user){
 		UserService.login(user.login,user.password);
 	};
 }]);
