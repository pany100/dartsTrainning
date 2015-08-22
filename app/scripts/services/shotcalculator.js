'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.shotCalculator
 * @description
 * # shotCalculator
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('shotCalculator', function (dartboardDistances) {
    return {
      simulateShoot: function( aim ) {
        var optimalTarget = dartboardDistances.getOptimalDistanceForTarget( aim.points, aim.target ),
            distanceCalc  = this.distribution( optimalTarget.distance, 10000 );
        if ( optimalTarget.radians != null ) {
          var radiansCalc   = this.distribution( optimalTarget.radians, 10000 );
        }
        var shotResult    = dartboardDistances.getResult( distanceCalc, radiansCalc );
        console.log( shotResult );
      },
      distribution : function ( media, desvio ) {
        var rand      = Math.random(),
            logRes    = Math.log( rand + 0.00001 ),
            varianza  = Math.pow( desvio, 2 ),
            firstTerm = Math.sqrt( -2 * varianza * logRes ),
            cosTerm   = 2 * Math.PI * rand,
            secTerm   = Math.cos( cosTerm ),
            randFin   = firstTerm * secTerm + media;
        return randFin;
      }
    };
  });
