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
    var difficultyIndex = 15;
    return {
      setDifficulty: function( value ) {
        difficultyIndex = value;
      },
      getDifficulty: function( ) {
        return difficultyIndex;
      },
      getDistanceDeviation: function() {
        return ( 31 - difficultyIndex ) * 1500;
      },
      getRadiansDeviation: function() {
        return ( 31 - difficultyIndex ) * 1500;
      }
    }
  });
