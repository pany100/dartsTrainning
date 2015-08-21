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
    var distances = {
      'bull' : {
        'min' : 0,
        'max' : 6350
      },
      'outer' : {
        'min' : 6351,
        'max' : 15875
      },
      'smallSingle' : {
        'min' : 15876,
        'max' : 97400
      },
      'triple' : {
        'min' : 97401,
        'max' : 107400
      },
      'bigSingle' : {
        'min' : 107401,
        'max' : 160000
      },
      'double' : {
        'min' : 160001,
        'max' : 170000
      },
      'out'   : {
        'min' : 170001,
        'max' : 1000000
      }
    },
    radians = {
      14 : {
        'min' : 0,
        'max' : 17999
      },
      9 : {
        'min' : 18000,
        'max' : 35999
      },
      12 : {
        'min' : 36000,
        'max' : 53999
      },
      5 : {
        'min' : 54000,
        'max' : 71999
      },
      20 : {
        'min' : 72000,
        'max' : 89999
      },
      1 : {
        'min' : 90000,
        'max' : 107999
      },
      18 : {
        'min' : 108000,
        'max' : 125999
      },
      4 : {
        'min' : 126000,
        'max' : 143999
      },
      13 : {
        'min' : 144000,
        'max' : 161999
      },
      6 : {
        'min' : 162000,
        'max' : 179999
      },
      10 : {
        'min' : 180000,
        'max' : 197999
      },
      15 : {
        'min' : 198000,
        'max' : 215999
      },
      2 : {
        'min' : 216000,
        'max' : 233999
      },
      17 : {
        'min' : 234000,
        'max' : 251999
      },
      3 : {
        'min' : 252000,
        'max' : 269999
      },
      19 : {
        'min' : 270000,
        'max' : 287999
      },
      7 : {
        'min' : 288000,
        'max' : 305999
      },
      16 : {
        'min' : 306000,
        'max' : 323999
      },
      8 : {
        'min' : 324000,
        'max' : 341999
      },
      11 : {
        'min' : 342000,
        'max' : 360000
      }
    };
    return {
      getOptimalDistanceForTarget : function ( points, target ) {
        function calcMedia( object ) {
          var min = object.min,
              max = object.max;
          return ( min + max ) / 2;
        }
        var returnObject = {};
        returnObject.distance = calcMedia( distances[points] );
        if ( target != null ) {
          returnObject.radians = calcMedia( radians[target] );
        }
        return returnObject;
      },
      getResult : function( distanceCalc, radiansCalc ) {
        var points = this.getInterval( distanceCalc, distances ),
            target = this.getInterval( radiansCalc, radians );
        console.log( points );
        console.log( target );
      },
      getInterval : function( pivot, object ) {
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            var obj = object[key];
            if ( obj.min < pivot && obj.max > pivot ) {
              return key;
            }
          }
        }
      }
    }

  });
