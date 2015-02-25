'use strict';

/**
 * @ngdoc service
 * @name fifaKingsV2App.teamService
 * @description
 * # teamService
 * Service in the fifaKingsV2App.
 */
 angular.module('fifaKingsV2App')
 .service('TeamService', ['Team','$http',function (Team,$http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var svc = this;



    svc.getTeams = function() {
        $http.post('server/server.php?method=getTeams', { }).
        success(function(teams, status) {
            var resp = [];

            _.forEach(teams,function(team){
                resp.push(new Team(team.name,team.country,team.quality,team.att,team.mid,team.def));
            });

            return resp;
        });
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
