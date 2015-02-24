'use strict';

/**
 * @ngdoc function
 * @name fifaKingsV2App.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the fifaKingsV2App
 */
 angular.module('fifaKingsV2App')
 .controller('TeamsCtrl', ['$scope','$timeout','TeamService',function ($scope,$timeout,TeamService) {

 	$scope.teams = TeamService.getTeams();

 	$scope.alert = {};

 	function showAlert(style,message){
 		$scope.alert = {
 			style:style,
 			message:message
 		};
 		$timeout(function(){
 			$scope.alert = {};
 		},3000);
 	}

 	$scope.editTeam = function(team){
 		showAlert('success','Team Edited Succesfully!');
 		console.log(team);
 	};
 }]);
