'use strict';

/**
 * @ngdoc service
 * @name miappApp.OrganizationService
 * @description
 * # OrganizationService
 * Service in the miappApp.
 */
angular.module('miappApp')
  .service('OrganizationService', 
  	function ($http, $q, Config) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function listar(){
    	var deferred = $q.defer();

    	$http.get(Config.BASE + Config.ORGANIZATIONS)
    		.then(function(response){
    			deferred.resolve(response);
    		});

    	return deferred.promise;
    }

    return{
    	listado: listar,
    }


  });
