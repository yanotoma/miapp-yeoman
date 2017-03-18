'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('RegistroCtrl', 
  	function ($scope, OrganizationService, UserService, $location) {
    
  		OrganizationService.listado()
  			.then(function(response){
  				console.log(response);
  				if(response.data.status == 1){
  					$scope.empresas = response.data.data;
  				}else{
  					console.log('error', response.data.error);
  				}
  			});

  		$scope.onSubmit = function(){
  			if($scope.form.$valid){
  				UserService.grabar($scope.usuario)
  					.then(function(response){
  						if(response.data.status == 1){
  							//se va al listado
  							$location.path('/listado');
  						}else{
  							console.log('error', response.data.error);
  						}
  					});
  			}
  		}

  });
