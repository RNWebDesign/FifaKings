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

 	$scope.alert = null;

 	function showAlert(style,message){
 		$scope.alert = {
 			style:style,
 			message:message
 		};
 		setTimeout(function(){
 			$scope.alert = {};
 		},2000);
 	}

 	$scope.editTeam = function(team){
 		showAlert('success','Team Edited Succesfully!');
 		console.log(team);
 	};
 }]);
