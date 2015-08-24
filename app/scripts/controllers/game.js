'use strict';

/**
 * @ngdoc function
 * @name dartTrainningApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the dartTrainningApp
 */
angular.module('dartTrainningApp')
  .controller('GameCtrl', function ($scope, cricketScoreManager, difficultyManager, strategyHandler, shotCalculator, $ionicPopup) {
    $scope.players = {
      p1 : cricketScoreManager.getPlayer1(),
      p2 : cricketScoreManager.getPlayer2()
    };
    $scope.totals = {
      p1 : cricketScoreManager.getUserScore,
      p2 : cricketScoreManager.getUserScore
    }
    $scope.pcDifficulty = {
      value : difficultyManager.getDifficulty()
    }
    $scope.simulatePcShoot = function () {
      var aim, result;
      strategyHandler.changeStrategyIfNeccesary();
      aim = strategyHandler.pickTarget();
      result = shotCalculator.simulateShoot( aim );
      cricketScoreManager.processPoint('pc', result.points, result.target);
      if ( cricketScoreManager.hasUserWon( 'pc' ) ) {
        var alertPopup = $ionicPopup.alert({
           title: 'Game finished',
           template: 'Pc has won'
        });
        alertPopup.then(function(res) {
          cricketScoreManager.startMatch('user', 'pc');
        });
      }
    }
  });
