'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.difficultyManager
 * @description
 * # difficultyManager
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('difficultyManager', function () {
    var difficultyIndex = 90;
    return {
      setDifficulty: function( value ) {
        difficultyIndex = value;
      },
      getDifficulty: function( ) {
        return difficultyIndex;
      },
      getDistanceDeviation: function(  ) {
        return ( 100 - difficultyIndex ) * 1200;
      },
      getRadiansDeviation: function(  ) {
        return ( 100 - difficultyIndex ) * 1500;
      }
    }
  });