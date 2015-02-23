'use strict';

/**
 * @ngdoc function
 * @name fifaKingsV2App.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the fifaKingsV2App
 */
 angular.module('fifaKingsV2App')
 .controller('TeamsCtrl', ['$scope','TeamService',function ($scope,TeamService) {

 	$scope.teams = TeamService.getTeams();

 	$scope.editTeam = function(team){
 		console.log(team);
 	}
 }]);
