'use strict';

/**
 * @ngdoc function
 * @name dartTrainningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dartTrainningApp
 */
angular.module('dartTrainningApp')
  .controller('MainCtrl', function (shotCalculator, $scope) {

    var result = shotCalculator.simulateShoot( {
      'points' : 1,
      'target' : 'triple'
    } );
    console.log( result );

  });
