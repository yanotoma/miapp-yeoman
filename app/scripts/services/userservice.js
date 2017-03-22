'use strict';

/**
 * @ngdoc service
 * @name miappApp.UserService
 * @description
 * # UserService
 * Service in the miappApp.
 */
angular.module('miappApp')
  .service('UserService', function (Config, $q, $http, $cookies) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function login(params){
    	var deferred = $q.defer();

    	$http.post(Config.BASE + Config.LOGIN, params)
    		.then(function(response){
    			deferred.resolve(response);
    		});

    	return deferred.promise;
    }

    function listado(){
    	var deferred = $q.defer();

    	var token = $cookies.get('token');
    	var config = {
    		headers:{
    			'Authorization': 'JWT ' + token,
    		}
    	}

    	$http.get(Config.BASE + Config.USERS, config) //config
    		.then(function(response){
    			deferred.resolve(response);
    		});

    	return deferred.promise;
    }

    function registro(params){
        var deferred = $q.defer();

        $http.post(Config.BASE + Config.USERS, params)
            .then(function(response){
                deferred.resolve(response);
            });

        return deferred.promise;
    }

    return {
    	login: login,
    	listado: listado,
        grabar: registro,
    }

  });







