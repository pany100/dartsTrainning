'use strict';

/**
 * @ngdoc directive
 * @name dartTrainningApp.directive:boardRow
 * @description
 * # boardRow
 */
angular.module('dartTrainningApp')
  .directive('boardRow', function (cricketScoreManager, $ionicPopup) {
    return {
      templateUrl: 'templates/boardRow.html',
      restrict: 'E',
      replace: true,
      scope : {
        type : '@'
      },
      link: function postLink(scope, element, attrs) {
        scope.players = {
          p1 : cricketScoreManager.getPlayer1(),
          p2 : cricketScoreManager.getPlayer2()
        };
        scope.getValuesForPointP1 = cricketScoreManager.getValuesForPoint;
        scope.getValuesForPointP2 = cricketScoreManager.getValuesForPoint;
        scope.addPoint = function () {
          cricketScoreManager.sumPointsToUser( scope.players.p1,
                                               scope.players.p2,
                                               scope.type,
                                               1 );
          if ( cricketScoreManager.hasUserWon( scope.players.p1 ) ) {
            var alertPopup = $ionicPopup.alert({
               title: 'Game finished',
               template: scope.players.p1 + ' has won'
            });
            alertPopup.then(function(res) {
              cricketScoreManager.startMatch( scope.players.p1,
                                              scope.players.p2 );
            });
          }
        }
        scope.addPointIfHuman = function () {
          if ( scope.players.p2 != 'pc' ) {
            cricketScoreManager.sumPointsToUser( scope.players.p2,
                                               scope.players.p1,
                                               scope.type,
                                               1 );
          }
          if ( cricketScoreManager.hasUserWon( 'pc' ) ) {
            var alertPopup = $ionicPopup.alert({
               title: 'Game finished',
               template: scope.players.p1 + ' has won'
            });
            alertPopup.then(function(res) {
              cricketScoreManager.startMatch( scope.players.p1,
                                              scope.players.p2 );
            });
          }
        }
      }
    };
  });
