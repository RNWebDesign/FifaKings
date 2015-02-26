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

 	$scope.getPlayer = function(pid){
 		PlayerService.getPlayer(1).then(
 		function(records) {
	 		console.log('arrived');
	 		console.log(records);
 		},
	 	function(data) {
	 		console.log('teams retrieval failed.')
	 	});
 }


}]);
