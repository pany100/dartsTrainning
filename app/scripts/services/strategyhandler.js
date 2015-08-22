'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.strategyHandler
 * @description
 * # strategyHandler
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('strategyHandler', function () {
    var currentStrategy = {
      'agresive'     : true,
      'conservative' : false,
      'defensive'    : false
    },
    strategyNumberFn = {
      'aggresive' : function(){
        var readyToSum20         = scores['pc']['20'] === 3 && scores['user']['20'] < 3,
            readyToSum19     = scores['pc']['19'] === 3 && scores['user']['19'] < 3,
            readyToSum18     = scores['pc']['18'] === 3 && scores['user']['18'] < 3,
            readyToSum17     = scores['pc']['17'] === 3 && scores['user']['17'] < 3,
            readyToSum16     = scores['pc']['16'] === 3 && scores['user']['16'] < 3,
            readyToSum15     = scores['pc']['15'] === 3 && scores['user']['15'] < 3,
            readyToSumCenter = scores['pc']['center'] === 3 && scores['user']['center'] < 3;
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
      'conservative' : function(){
        var open20     = scores['pc']['20'] === 3,
            open19     = scores['pc']['19'] === 3,
            open18     = scores['pc']['18'] === 3,
            open17     = scores['pc']['17'] === 3,
            open16     = scores['pc']['16'] === 3,
            open15     = scores['pc']['15'] === 3,
            openCenter = scores['pc']['center'] === 3;
        if ( open20 ) {
          return {
            'points' : 20,
            'target' : 'bigSingle'
          }
        } else if ( open19 ) {
          return {
            'points' : 29,
            'target' : 'bigSingle'
          }
        } else if ( open18 ) {
          return {
            'points' : 18,
            'target' : 'bigSingle'
          }
        } else if ( open17 ) {
          return {
            'points' : 17,
            'target' : 'bigSingle'
          }
        } else if ( open16 ) {
          return {
            'points' : 16,
            'target' : 'bigSingle'
          }
        } else if ( open15 ) {
          return {
            'points' : 15,
            'target' : 'bigSingle'
          }
        } else {
          return {
            'points' : 14,
            'target' : 'outer'
          };
        }
      },
      'defensive' : function(){
        var userReadyToSum20     = scores['user']['20'] === 3 && scores['pc']['20'] < 3,
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
        currentStrategy['conservative'] = false;
        currentStrategy['defensive']    = false;
      },
      setStrategyToConservative : function () {
        currentStrategy['aggresive']    = false;
        currentStrategy['conservative'] = true;
        currentStrategy['defensive']    = false;
      },
      setStrategyToDefensive : function () {
        currentStrategy['aggresive']    = false;
        currentStrategy['conservative'] = false;
        currentStrategy['defensive']    = true;
      },
      getCurrentStrategy : function() {
        if ( currentStrategy['aggresive'] === true ) {
          return 'aggresive';
        }
        else if ( currentStrategy['conservative'] === true ) {
          return 'conservative';
        }
        else if ( currentStrategy['defensive'] === true ) {
          return 'defensive';
        }
      },
      pickTarget : function () {
        var strategy = this.getCurrentStrategy();
        return strategyNumberFn[strategy]();
      }
    }

  });
