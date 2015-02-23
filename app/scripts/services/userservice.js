'use strict';

/**
 * @ngdoc service
 * @name fifaKingsV2App.UserService
 * @description
 * # UserService
 * Service in the fifaKingsV2App.
 */
 angular.module('fifaKingsV2App')
 .service('UserService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var svc = this;

//Class Define
function Player(firstName,lastName,wins,draws,losses){
	this.firstName = firstName;
	this.lastName = lastName;
	this.wins = wins;
	this.draws = draws;
	this.losses = losses;
	this.matches = wins + draws + losses;
}

Player.prototype.getName = function(){
	return this.firstName + ' ' + this.lastName;
};


svc.getUsers = function() {
	var users = [
	{firstName:'Robin',lastName:'Verhulst',Wins:27,Draws:3,Losses:4},
	{firstName:'Bert',lastName:'Van Genechten',Wins:2,Draws:5,Losses:5},
	{firstName:'Ronnie',lastName:'Vandenpoel',Wins:5,Draws:1,Losses:2}
	],resp = [];

	_.forEach(users,function(usr){
		resp.push(new Player(usr.firstName,usr.lastName,usr.Wins,usr.Draws,usr.Losses));
	});

	return resp;
},



svc.login = function(usr,pass){
	console.log('received user ' + usr + ' and pass ' + pass);
	return true;
};

});
