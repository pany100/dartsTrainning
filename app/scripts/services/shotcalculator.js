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
      getRandomInt: function(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      simulateShoot: function( aim ) {
        var limitsForTarget  = difficultyManager.getLimitsForTarget(),
            optimalTarget    = dartboardDistances.getOptimalDistanceForTarget( aim.target, aim.points ),
            pulseDistance    = this.getRandomInt( optimalTarget.distance - limitsForTarget, optimalTarget.distance + limitsForTarget ),
            distanceCalc     = this.distribution( pulseDistance, difficultyManager.getDistanceDeviation() , true),
            radiansCalc      = this.distribution( optimalTarget.radians, difficultyManager.getRadiansDeviation() ),
            shotResult       = dartboardDistances.getResult( distanceCalc, radiansCalc );
        console.log( limitsForTarget );
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
