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
    var difficultyIndex = 20;
    return {
      setDifficulty: function( value ) {
        difficultyIndex = value;
      },
      getDifficulty: function( ) {
        return difficultyIndex;
      },
      getDistanceDeviation: function( target ) {
        if ( target === 'bull' || target === 'outer' ) {
          return ( 31 - difficultyIndex ) * 3000;
        }
        return ( 31 - difficultyIndex ) * 1500;
      },
      getRadiansDeviation: function() {
        return ( 31 - difficultyIndex ) * 1500;
      },
      getLimitsForTarget : function ( target ) {
        if ( target === 'bull' || target === 'outer' ) {
          var coefficient = difficultyIndex - 20;
          return 15875 + ( Math.pow( coefficient, 2 ) * -23.8125 );
        }
        return 15875 - ( 317.5 * difficultyIndex );
      }
    }
  });
