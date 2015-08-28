'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.physicalShotCalculator
 * @description
 * # physicalShotCalculator
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('physicalShotCalculator', function ( statisticsHelper, physicalDistances, difficultyManager ) {
    return {
      simulateShoot: function( aim ) {
        var xf     = this.getXFinalSimulation( aim ),
            yf     = this.getYFinalSimulation( aim ),
            result = physicalDistances.getZoneOnDartboard( xf , yf );
        result.xf = xf;
        result.yf = yf;
        return result;
      },
      getInitialYSpeed : function ( aim ) {
        var optimalYSpeed = this.getOptimalYSpeed( aim ),
        standardDeviation = -2 * difficultyManager.getDifficulty() + 75,
               simulation = statisticsHelper.distribution( optimalYSpeed, standardDeviation );
        return simulation;
      },
      getInitialXSpeed : function ( ) {
        var          axis = difficultyManager.getDifficulty(),
        standardDeviation = -2 * difficultyManager.getDifficulty() + 75,
               simulation = statisticsHelper.distribution( 0, standardDeviation );
        return simulation;
      },
      getInitialXPos : function ( aim ) {
        var result = physicalDistances.getOptimalDistanceForTarget( aim.target, aim.points );
        return result.x;
      },
      getYFinalSimulation : function ( aim ) {
        var yf = this.getInitialYPos( aim ) +
                 this.getInitialYSpeed( aim ) * this.getDartInAir() -
                 0.5 * this.getGravityConstant() * Math.pow( this.getDartInAir(), 2 );
        return yf;
      },
      getXFinalSimulation : function ( aim ) {
        return this.getInitialXPos( aim ) + this.getInitialXSpeed( ) * this.getDartInAir();
      },
      getGravityConstant : function( ) {
        return 9.81;
      },
      getInitialYPos : function ( aim ) {
        var result = physicalDistances.getOptimalDistanceForTarget( aim.target, aim.points );
        return result.y;
      },
      getDartInAir : function ( ) {
        return 0.4;
      },
      getOptimalYSpeed: function( aim ) {
        var  optimalYSpeed = 0.5 * this.getGravityConstant() * this.getDartInAir();
        return optimalYSpeed;
      }
    }
  });
