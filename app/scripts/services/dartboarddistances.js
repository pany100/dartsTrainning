'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.dartboardDistances
 * @description
 * # dartboardDistances
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('dartboardDistances', function () {
    return {
      getOptimalDistanceForTarget : function ( points, target ) {
        function calcMedia( object ) {
          var min = object.min,
              max = object.max;
          return ( min + max ) / 2;
        }
        var returnObject = {};
        if ( points == 'bull' || points == 'outer' ) {
          returnObject.distance = 0;
        } else {
          returnObject.distance = calcMedia( distances[points] );
        }
        if ( points != 'bull' && points != 'outer' ) {
          returnObject.radians = calcMedia( radians[target][0] );
        } else {
          returnObject.radians = 0;
        }
        return returnObject;
      },
      getResult : function( distanceCalc, radiansCalc ) {
        var points = this.getDistanceInterval( distanceCalc, distances ),
            target = this.getRadiansInterval( radiansCalc, radians ),
            result = {
              'points' : points,
              'target' : target
            };
        return result;
      },
      getDistanceInterval : function( pivot, object ) {
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            var obj = object[key];
            if ( obj.min < pivot && obj.max > pivot ) {
              return key;
            }
          }
        }
      },
      getRadiansInterval : function( pivot, object ) {
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            var obj = object[key];
            for (var i = obj.length - 1; i >= 0; i--) {
              var value = obj[i];
              if ( value.min < pivot && value.max > pivot ) {
                return key;
              }
            };
          }
        }
      }
    }
  });
