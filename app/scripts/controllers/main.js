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

    shotCalculator.simulateShoot( {
      'points' : 'triple',
      'target' : 1
    } );

  });
