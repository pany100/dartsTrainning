'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.shotCalculator
 * @description
 * # shotCalculator
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('shotCalculator', function (dartboardDistances, difficultyManager) {
    return {
      simulateShoot: function( aim ) {
        console.log( difficultyManager.getRadiansDeviation() );
        console.log( difficultyManager.getDistanceDeviation() );
        var optimalTarget = dartboardDistances.getOptimalDistanceForTarget( aim.target, aim.points ),
            distanceCalc  = this.distribution( optimalTarget.distance, difficultyManager.getDistanceDeviation() , true),
            radiansCalc   = this.distribution( optimalTarget.radians, difficultyManager.getRadiansDeviation() );
        var shotResult    = dartboardDistances.getResult( distanceCalc, radiansCalc );
        return shotResult;
      },
      distribution : function ( media, desvio , withModule) {
        var rand      = Math.random(),
            logRes    = Math.log( rand + 0.00001 ),
            varianza  = Math.pow( desvio, 2 ),
            firstTerm = Math.sqrt( -2 * varianza * logRes ),
            cosTerm   = 2 * Math.PI * rand,
            secTerm   = Math.cos( cosTerm ),
            randFin   = firstTerm * secTerm + media;
        if ( withModule ) {
          return Math.abs( randFin );
        }
        return randFin;
      }
    };
  });
