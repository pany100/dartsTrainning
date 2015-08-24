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
        function getWeightForNumber( number ) {
          var numberWeight = {
            'center' : 1,
            '20'     : 6,
            '19'     : 5,
            '18'     : 4,
            '17'     : 3,
            '16'     : 2,
            '15'     : 1
          },
          scores         = cricketScoreManager.getScores(),
          isClosed       = scores['user'][number] === 3,
          pcClosed       = scores['pc'][number] === 3,
          pcMoreThanUser = scores['pc'][number] > scores['pc'][number],
          weight = 0;
          if ( isClosed ) {
            return weight;
          } else {
            weight += numberWeight[number];
            if ( pcClosed ) {
              weight += 3;
            }
            if ( pcMoreThanUser ) {
              weight += 2;
            }
            return weight;
          }
        };
        function getBestChoice ( weightsArray ) {
          var maxElement, maxValue = 0;
          for (var i = weightsArray.length - 1; i >= 0; i--) {
            var currElement = weightsArray[i];
            if ( currElement['weight'] >  maxValue ||
                 ( currElement['weight'] === maxValue && currElement['number'] > maxElement['number']) ) {
              maxElement = currElement;
              maxValue = currElement['weight'];
            }
          }
          if ( maxElement['number'] === 'center') {
            return {
              'points' : 14,
              'target' : 'bull'
            };
          } else {
            return {
              'points' : parseInt(maxElement['number']),
              'target' : 'triple'
            }
          }
        };
        var weights  = [
          {
            'weight' : getWeightForNumber('20'),
            'number' : '20'
          },
          {
            'weight' : getWeightForNumber('19'),
            'number' : '19'
          },
          {
            'weight' : getWeightForNumber('18'),
            'number' : '18'
          },
          {
            'weight' : getWeightForNumber('17'),
            'number' : '17'
          },
          {
            'weight' : getWeightForNumber('16'),
            'number' : '16'
          },
          {
            'weight' : getWeightForNumber('15'),
            'number' : '15'
          },
          {
            'weight' : getWeightForNumber('center'),
            'number' : 'center'
          }
        ];
        return getBestChoice( weights );
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
            'points' : 19,
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
