'use strict';

/**
 * @ngdoc service
 * @name fifaKingsV2App.teamService
 * @description
 * # teamService
 * Service in the fifaKingsV2App.
 */
 angular.module('fifaKingsV2App')
 .service('TeamService', ['Team',function (Team) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var svc = this;



    svc.getTeams = function() {
    	var teams = [
    	{name:'Arsenal',country:'ENG',quality:'4.5',att:78,mid:80,def:79},
    	{name:'Barcelona',country:'ES',quality:'5',att:88,mid:86,def:79},
    	{name:'Manchester City',country:'ENG',quality:'5',att:83,mid:84,def:82},
    	{name:'Manchester United',country:'ENG',quality:'5',att:83,mid:84,def:82},
    	{name:'Bayern Munchen',country:'DE',quality:'5',att:83,mid:84,def:82},
    	{name:'Juventus',country:'IT',quality:'5',att:83,mid:84,def:82}
    	],resp = [];

    	_.forEach(teams,function(team){
    		resp.push(new Team(team.name,team.country,team.quality,team.att,team.mid,team.def));
    	});

    	return resp;
    };


}])
 .factory('Team', function() {
//Class Define
function Team(name,country,quality,att,mid,def){
	this.name = name;
	this.country = country;
	this.quality = quality;
	this.att= att;
	this.mid = mid;
	this.def = def;
}

return Team;
});
