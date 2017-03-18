'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:ListadoCtrl
 * @description
 * # ListadoCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('ListadoCtrl', 
  	function ($scope, UserService, OrganizationService) {
    
  		OrganizationService.listado()
  			.then(function(response){
  				console.log(response);
  				if(response.data.status == 1){
  					$scope.empresas = response.data.data;
  				}else{
  					console.log('error', response.data.error);
  				}
  			});

  		UserService.listado()
  			.then(function(response){
  				$scope.usuarios = response.data.data;
  			});

  });
