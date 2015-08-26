'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.shotCalculator
 * @description
 * # shotCalculator
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('shotCalculator', function (dartboardDistances, difficultyManager, statisticsHelper) {
    return {
      simulateShoot: function( aim ) {
        var limitsForTarget  = difficultyManager.getLimitsForTarget( aim.target ),
            optimalTarget    = dartboardDistances.getOptimalDistanceForTarget( aim.target, aim.points ),
            pulseDistance    = statisticsHelper.getRandomInt( optimalTarget.distance - limitsForTarget, optimalTarget.distance + limitsForTarget ),
            distanceCalc     = statisticsHelper.distribution( pulseDistance, difficultyManager.getDistanceDeviation( aim.target ) , true),
            radiansCalc      = statisticsHelper.distribution( optimalTarget.radians, difficultyManager.getRadiansDeviation() ),
            shotResult       = dartboardDistances.getResult( distanceCalc, radiansCalc );
        return shotResult;
      }
    };
  });
