'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.strategyHandler
 * @description
 * # strategyHandler
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('strategyHandler', function (cricketScoreManager) {
    var currentStrategy = {
      'aggresive'     : true,
      'defensive'    : false
    },
    strategyNumberFn = {
      'aggresive' : function(){
        var scores = cricketScoreManager.getScores(),
            readyToSum20     = scores['pc']['20'] === 3 || scores['user']['20'] < 3,
            readyToSum19     = scores['pc']['19'] === 3 || scores['user']['19'] < 3,
            readyToSum18     = scores['pc']['18'] === 3 || scores['user']['18'] < 3,
            readyToSum17     = scores['pc']['17'] === 3 || scores['user']['17'] < 3,
            readyToSum16     = scores['pc']['16'] === 3 || scores['user']['16'] < 3,
            readyToSum15     = scores['pc']['15'] === 3 || scores['user']['15'] < 3,
            readyToSumCenter = scores['pc']['center'] === 3 || scores['user']['center'] < 3;
        if ( readyToSum20 ) {
          return {
            'points' : 20,
            'target' : 'triple'
          }
        } else if ( readyToSum19 ) {
          return {
            'points' : 29,
            'target' : 'triple'
          }
        } else if ( readyToSum18 ) {
          return {
            'points' : 18,
            'target' : 'triple'
          }
        } else if ( readyToSum17 ) {
          return {
            'points' : 17,
            'target' : 'triple'
          }
        } else if ( readyToSum16 ) {
          return {
            'points' : 16,
            'target' : 'triple'
          }
        } else if ( readyToSum15 ) {
          return {
            'points' : 15,
            'target' : 'triple'
          }
        } else {
          return {
            'points' : 14,
            'target' : 'bull'
          };
        }
      },
      'defensive' : function(){
        var scores = cricketScoreManager.getScores(),
            userReadyToSum20     = scores['user']['20'] === 3 && scores['pc']['20'] < 3,
            userReadyToSum19     = scores['user']['19'] === 3 && scores['pc']['19'] < 3,
            userReadyToSum18     = scores['user']['18'] === 3 && scores['pc']['18'] < 3,
            userReadyToSum17     = scores['user']['17'] === 3 && scores['pc']['17'] < 3,
            userReadyToSum16     = scores['user']['16'] === 3 && scores['pc']['16'] < 3,
            userReadyToSum15     = scores['user']['15'] === 3 && scores['pc']['15'] < 3,
            userReadyToSumCenter = scores['user']['center'] === 3 && scores['pc']['center'] < 3;
        if ( userReadyToSum20 ) {
          return {
            'points' : 20,
            'target' : 'triple'
          }
        } else if ( userReadyToSum19 ) {
          return {
            'points' : 29,
            'target' : 'triple'
          }
        } else if ( userReadyToSum18 ) {
          return {
            'points' : 18,
            'target' : 'triple'
          }
        } else if ( userReadyToSum17 ) {
          return {
            'points' : 17,
            'target' : 'triple'
          }
        } else if ( userReadyToSum16 ) {
          return {
            'points' : 16,
            'target' : 'triple'
          }
        } else if ( userReadyToSum15 ) {
          return {
            'points' : 15,
            'target' : 'triple'
          }
        } else {
          return {
            'points' : 14,
            'target' : 'bull'
          };
        }
      }
    };

    return {
      setStrategyToAggresive : function () {
        currentStrategy['aggresive']    = true;
        currentStrategy['defensive']    = false;
      },
      setStrategyToDefensive : function () {
        currentStrategy['aggresive']    = false;
        currentStrategy['defensive']    = true;
      },
      getCurrentStrategy : function() {
        if ( currentStrategy['aggresive'] === true ) {
          return 'aggresive';
        }
        else if ( currentStrategy['defensive'] === true ) {
          return 'defensive';
        }
      },
      changeStrategyIfNeccesary : function() {
        var scores = cricketScoreManager.getScores(),
            pcWinningOrEqual      = scores['pc']['points'] > scores['user']['points'] ||
                                    scores['pc']['points'] === scores['user']['points'],
            userLessThan225       = scores['user']['points'] < 225,
            differenceLessThan100 = scores['user']['points'] - scores['pc']['points'] < 100;
        if ( pcWinningOrEqual || ( !pcWinningOrEqual && userLessThan225 && differenceLessThan100 ) ) {
          this.setStrategyToAggresive();
        } else {
          this.setStrategyToDefensive();
        }
      },
      pickTarget : function () {
        var strategy = this.getCurrentStrategy();
        return strategyNumberFn[strategy]();
      }
    }

  });
