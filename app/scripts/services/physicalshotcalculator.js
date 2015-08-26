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
        return result;
      },
      getInitialYSpeed : function ( aim ) {
        var optimalYSpeed = this.getOptimalYSpeed( aim ),
                     axis = 30 - difficultyManager.getDifficulty(),
        standardDeviation = axis * 1.25 + 20,
               simulation = statisticsHelper.distribution( optimalYSpeed, standardDeviation );
        return simulation;
      },
      getInitialXSpeed : function ( ) {
        var          axis = 30 - difficultyManager.getDifficulty(),
        standardDeviation = axis * 1.25 + 25,
               simulation = statisticsHelper.distribution( 0, standardDeviation );
        return simulation;
      },
      getInitialXPos : function ( aim ) {
        var result = physicalDistances.getOptimalDistanceForTarget( aim.target, aim.points );
        return result.x;
      },
      getYFinalSimulation : function ( aim ) {
        var yf = this.getInitialConditions() +
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
      getInitialConditions : function () {
        return 0;
      },
      getDartInAir : function ( ) {
        return 0.4;
      },
      getOptimalYSpeed: function( aim ) {
        var distance = physicalDistances.getOptimalDistanceForTarget( aim.target, aim.points ),
                  yf = distance.y,
       optimalYSpeed = (yf - 0.5 * this.getGravityConstant() * Math.pow( this.getDartInAir(), 2 )) / this.getDartInAir();
        return optimalYSpeed;
      }
    }
  });
