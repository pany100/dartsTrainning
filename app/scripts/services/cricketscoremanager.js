'use strict';

/**
 * @ngdoc service
 * @name dartTrainningApp.cricketScoreManager
 * @description
 * # cricketScoreManager
 * Service in the dartTrainningApp.
 */
angular.module('dartTrainningApp')
  .service('cricketScoreManager', function () {
    var scores = {},
    p1,
    p2,
    pointKeys = {
      'triple'      : 3,
      'double'      : 2,
      'smallSingle' : 1,
      'bigSingle'   : 1,
      'bull'        : 2,
      'outer'       : 1,
      'out'         : 0
    };
    return {
      startMatch : function ( player1, player2 ) {
        scores = {};
        p1 = player1,
        p2 = player2,
        scores[p1] = {
          '20'     : 0,
          '19'     : 0,
          '18'     : 0,
          '17'     : 0,
          '16'     : 0,
          '15'     : 0,
          'center' : 0,
          'points' : 0
        };
        scores[p2] = {
          '20'     : 0,
          '19'     : 0,
          '18'     : 0,
          '17'     : 0,
          '16'     : 0,
          '15'     : 0,
          'center' : 0,
          'points' : 0
        };
      },
      getPlayer1 : function () {
        return p1;
      },
      getPlayer2 : function () {
        return p2;
      },
      processPoint : function ( player, target, points ) {
        var pointsObtained         = pointKeys[target],
            conditionToProcess     = scores[player][points] != null,
            isCenter               = target == 'bull' || target == 'outer',
            oponentPlayer          = ( player == p1 ) ? p2 : p1;
        console.log( target );
        console.log( points );
        if ( isCenter ) {
          this.sumPointsToUser( player, oponentPlayer, 'center', pointsObtained);
        } else {
          if ( conditionToProcess ) {
            this.sumPointsToUser( player, oponentPlayer, points, pointsObtained);
          }
        }
      },
      sumPointsToUser : function ( currentPlayer, oponentPlayer, points, pointsObtained ) {
        var oponentScoreInPoint    = scores[oponentPlayer][points],
            playerScoreInPoint     = scores[currentPlayer][points];
        if ( playerScoreInPoint + pointsObtained <= 3 ) {
          scores[currentPlayer][points] += pointsObtained;
        } else {
          scores[currentPlayer][points] = 3;
          if ( !this.assignIfCricketClosed (currentPlayer) ) {
            var extraPoints = ( playerScoreInPoint + pointsObtained - 3 );
            if ( oponentScoreInPoint < 3 ) {
              var pointsToSum = points === 'center' ? 25 : +points;
              pointsToSum = pointsToSum * extraPoints;
              scores[currentPlayer]['points'] += pointsToSum;
            }
          }
        }
        this.assignIfCricketClosed( currentPlayer );
      },
      assignIfCricketClosed : function ( player ) {
        var closed20     = scores[player]['20'] === 3,
            closed19     = scores[player]['19'] === 3,
            closed18     = scores[player]['18'] === 3,
            closed17     = scores[player]['17'] === 3,
            closed16     = scores[player]['16'] === 3,
            closed15     = scores[player]['15'] === 3,
            closedCenter = scores[player]['center'] === 3;
        if ( closed20 && closed19 && closed18 && closed17 && closed16
            && closed15 && closedCenter ) {
          scores[player]['points'] += 50;
          this.resetCricket();
          return true;
        }
        return false;
      },
      hasUserWon : function ( currentPlayer ) {
        return scores[currentPlayer]['points'] > 300;
      },
      getValuesForPoint : function( currentPlayer, number ) {
        return scores[currentPlayer][number];
      },
      getUserScore : function ( player ) {
        return scores[player]['points'];
      },
      getScores : function () {
        return scores;
      },
      resetCricket : function () {
        var p1Points = scores[p1]['points'],
            p2Points = scores[p2]['points'];
        scores[p1] = {
          '20'     : 0,
          '19'     : 0,
          '18'     : 0,
          '17'     : 0,
          '16'     : 0,
          '15'     : 0,
          'center' : 0,
          'points' : p1Points
        };
        scores[p2] = {
          '20'     : 0,
          '19'     : 0,
          '18'     : 0,
          '17'     : 0,
          '16'     : 0,
          '15'     : 0,
          'center' : 0,
          'points' : p2Points
        };
      },
      resetScores : function () {
        scores[p1]['points'] = 0;
        scores[p2]['points'] = 0;
      }
    }
  });
