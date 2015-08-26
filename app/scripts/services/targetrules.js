'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.targetRules
 * @description
 * # targetRules
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('targetRules', function (cricketScoreManager) {
    return {
      pickTarget: function() {
        var scores = cricketScoreManager.getScores(),
            pcWinningOrEqual      = scores['pc']['points'] > scores['user']['points'] ||
                                    scores['pc']['points'] === scores['user']['points'],
            userLessThan225       = scores['user']['points'] < 225,
            differenceLessThan100 = scores['user']['points'] - scores['pc']['points'] < 100,
            userReadyToSum20      = scores['user']['20'] === 3 && scores['pc']['20'] < 3,
            userReadyToSum19      = scores['user']['19'] === 3 && scores['pc']['19'] < 3,
            userReadyToSum18      = scores['user']['18'] === 3 && scores['pc']['18'] < 3,
            userReadyToSum17      = scores['user']['17'] === 3 && scores['pc']['17'] < 3,
            userReadyToSum16      = scores['user']['16'] === 3 && scores['pc']['16'] < 3,
            userReadyToSum15      = scores['user']['15'] === 3 && scores['pc']['15'] < 3,
            userReadyToSumCenter  = scores['user']['center'] === 3 && scores['pc']['center'] < 3,
            pcReadyToSum20        = scores['pc']['20'] === 3 && scores['user']['20'] < 3,
            pcReadyToSum19        = scores['pc']['19'] === 3 && scores['user']['19'] < 3,
            pcReadyToSum18        = scores['pc']['18'] === 3 && scores['user']['18'] < 3,
            pcReadyToSum17        = scores['pc']['17'] === 3 && scores['user']['17'] < 3,
            pcReadyToSum16        = scores['pc']['16'] === 3 && scores['user']['16'] < 3,
            pcReadyToSum15        = scores['pc']['15'] === 3 && scores['user']['15'] < 3,
            pcReadyToSumCenter    = scores['pc']['center'] === 3 && scores['user']['center'] < 3,
            is20Open              = scores['user']['20'] < 3 && scores['pc']['20'] < 3,
            is19Open              = scores['user']['19'] < 3 && scores['pc']['19'] < 3,
            is18Open              = scores['user']['18'] < 3 && scores['pc']['18'] < 3,
            is17Open              = scores['user']['17'] < 3 && scores['pc']['17'] < 3,
            is16Open              = scores['user']['16'] < 3 && scores['pc']['16'] < 3,
            is15Open              = scores['user']['15'] < 3 && scores['pc']['15'] < 3,
            isCenterOpen          = scores['user']['center'] < 3 && scores['pc']['center'] < 3;
        //PC WINNING AND READY TO SUM
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225) ||
             (!pcWinningOrEqual && differenceLessThan100) ) && pcReadyToSum20 ) {
          return this.buildResponse( 20, 'triple' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225) ||
             (!pcWinningOrEqual && differenceLessThan100) ) && pcReadyToSum19 ) {
          return this.buildResponse( 19, 'triple' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225) ||
             (!pcWinningOrEqual && differenceLessThan100) ) && pcReadyToSum18 ) {
          return this.buildResponse( 18, 'triple' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225) ||
             (!pcWinningOrEqual && differenceLessThan100) ) && pcReadyToSum17 ) {
          return this.buildResponse( 17, 'triple' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225) ||
             (!pcWinningOrEqual && differenceLessThan100) ) && pcReadyToSum16 ) {
          return this.buildResponse( 16, 'triple' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225) ||
             (!pcWinningOrEqual && differenceLessThan100) ) && pcReadyToSumCenter ) {
          return this.buildResponse( 14, 'bull' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225) ||
             (!pcWinningOrEqual && differenceLessThan100) ) && pcReadyToSum15 ) {
          return this.buildResponse( 15, 'triple' );
        }

        //PC WINNING AND NUMBER IS OPEN
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225 && differenceLessThan100) ) && is20Open ) {
          return this.buildResponse( 20, 'triple' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225 && differenceLessThan100) ) && is19Open ) {
          return this.buildResponse( 19, 'triple' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225 && differenceLessThan100) ) && is18Open ) {
          return this.buildResponse( 18, 'triple' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225 && differenceLessThan100) ) && is17Open ) {
          return this.buildResponse( 17, 'triple' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225 && differenceLessThan100) ) && is16Open ) {
          return this.buildResponse( 16, 'triple' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225 && differenceLessThan100) ) && isCenterOpen ) {
          return this.buildResponse( 14, 'bull' );
        }
        if ( ( pcWinningOrEqual ||
             (!pcWinningOrEqual && userLessThan225 && differenceLessThan100) ) && is15Open ) {
          return this.buildResponse( 15, 'triple' );
        }

        // User winning for more than 100 or points > 225
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && userReadyToSum20 ) {
          return this.buildResponse( 20, 'triple' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && userReadyToSum19 ) {
          return this.buildResponse( 19, 'triple' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && userReadyToSum18 ) {
          return this.buildResponse( 18, 'triple' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && userReadyToSum17 ) {
          return this.buildResponse( 17, 'triple' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && userReadyToSum16 ) {
          return this.buildResponse( 16, 'triple' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && userReadyToSumCenter ) {
          return this.buildResponse( 20, 'bull' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && userReadyToSum15 ) {
          return this.buildResponse( 15, 'triple' );
        }

        // User winning for more than 100 or points > 225 && user ready to sum
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && is20Open ) {
          return this.buildResponse( 20, 'triple' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && is19Open ) {
          return this.buildResponse( 19, 'triple' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && is18Open ) {
          return this.buildResponse( 18, 'triple' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && is17Open ) {
          return this.buildResponse( 17, 'triple' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && is16Open ) {
          return this.buildResponse( 16, 'triple' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && isCenterOpen ) {
          return this.buildResponse( 20, 'bull' );
        }
        if ( ( !pcWinningOrEqual && ( !userLessThan225 || !differenceLessThan100 ) )
               && is15Open ) {
          return this.buildResponse( 15, 'triple' );
        }
      },
      buildResponse : function (points, target) {
        return {
          'points' : points,
          'target' : target
        }
      }
    }
  });
