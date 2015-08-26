'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.statisticsHelper
 * @description
 * # statisticsHelper
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('statisticsHelper', function () {
    return {
      getRandomInt: function(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      normal01 : function() {
        var u1        = Math.random(),
            u2        = Math.random(),
            logRes    = Math.log( u1 + 0.0000001 ),
            firstTerm = Math.sqrt( -2 * logRes ),
            cosTerm   = 2 * Math.PI * u2,
            secTerm   = Math.cos( cosTerm ),
            normalVal = firstTerm * secTerm;
        return normalVal;
      },
      distribution : function ( mean, standardDeviation , withModule) {
        var normalVal = this.normal01(),
            intervalTransformation = normalVal * standardDeviation + mean;

        if ( withModule ) {
          return Math.abs( intervalTransformation );
        } else {
          return intervalTransformation;
        }
      }
    }
  });
