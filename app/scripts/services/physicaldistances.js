'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.physicalDistances
 * @description
 * # physicalDistances
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('physicalDistances', function () {
    return {
      getOptimalDistanceForTarget: function( points, target ) {
        if ( points === 'bull' || points === 'outer' ) {
          return {
            x : 0,
            y : 0
          }
        }
        var degrees  = optimalDegrees[target],
            dist     = optimalDistancesMm[points],
            radians  = degrees * (Math.PI/180);
        return {
          x : Math.cos( radians ) * dist,
          y : Math.sin( radians ) * dist
        }
      },
      getZoneOnDartboard : function ( x, y ) {
        var distance    = Math.pow( x, 2 ) + Math.pow( y, 2 ),
            sqrDistance = Math.sqrt( distance, 2 ),
            degrees     = this.getDegrees( x, y ),
            distanceInt = this.getDistanceInterval( sqrDistance, distanceZones ),
            degreesInt  = this.getDegreesInterval( degrees, degreesZones );
        if ( degreesInt === 'out' || distanceInt === 'out' ){
          return {
            'target' : 'out',
            'points' : 'out'
          };
        }
        return {
          'points' : distanceInt,
          'target' : degreesInt
        };
      },
      getDegrees : function ( x, y ) {
        if ( x === 0 && y > 0 ) {
          return 90;
        }
        if ( x === 0 && y < 0 ) {
          return 270;
        }
        if ( y === 0 && x > 0 ) {
          return 0;
        }
        if ( y === 0 && x < 0 ) {
          return 180
        }
        if ( x > 0 && y > 0 ) {
          return Math.atan(y/x) * (180 / Math.PI);
        }
        if ( x > 0 && y < 0 ) {
          return 360 + (Math.atan(y/x) * (180 / Math.PI));
        }
        if ( x < 0 && y > 0 ) {
          return 180 + (Math.atan(y/x) * (180 / Math.PI));
        }
        if ( x < 0 && y < 0 ) {
          return (Math.atan(y/x) * (180 / Math.PI)) + 180;
        }
      },
      getDistanceInterval : function( pivot, object ) {
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            var obj = object[key];
            if ( obj.min <= pivot && obj.max >= pivot ) {
              return key;
            }
          }
        }
        return 'out';
      },
      getDegreesInterval : function( pivot, object ) {
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            var obj = object[key];
            if ( key === '6' ) {
              for (var i = obj.length - 1; i >= 0; i--) {
                var value = obj[i];
                if ( value.min <= pivot && value.max >= pivot ) {
                  return key;
                }
              }
            } else {
              if ( obj.min <= pivot && obj.max >= pivot ) {
                return key;
              }
            }
          }
        }
        return 'out';
      }
    };
  });
