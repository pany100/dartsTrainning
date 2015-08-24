'use strict';

/**
 * @ngdoc function
 * @name dartTrainningApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the dartTrainningApp
 */
angular.module('dartTrainningApp')
  .controller('GameCtrl', function ($scope, cricketScoreManager, difficultyManager,
                                    strategyHandler, shotCalculator, $ionicPopup, $interval, $timeout) {
    var keys = {
      'triple'      : 'triple',
      'double'      : 'double',
      'smallSingle' : 'single',
      'bigSingle'   : 'single',
      'bull'        : 'red center',
      'outer'       : 'green center',
      'out'         : 'out'
    };
    $scope.pcShootResult = [];
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
    function simulateSingleShot() {
        var aim, result, shotResult;
        strategyHandler.changeStrategyIfNeccesary();
        aim = strategyHandler.pickTarget();
        result = shotCalculator.simulateShoot( aim );
        shotResult = keys[result.points];
        if ( shotResult === 'triple' ||
             shotResult === 'double' ||
             shotResult === 'single') {
          $scope.pcShootResult.push({
            'result' : " " + shotResult + " " + result.target,
          });
        } else {
          $scope.pcShootResult.push({
            'result' : " " + result.target
          });
        }
        cricketScoreManager.processPoint('pc', result.points, result.target);
    };

    $scope.simulatePcShoot = function () {
      $scope.pcShootResult = [];
      $scope.enableButtonPopup = false;
      var interval = $interval( function () {
        simulateSingleShot();
      } , 1000);

      $timeout(function(){
        $interval.cancel( interval );
        $scope.enableButtonPopup = true;
      }, 3500)

      var alertPopup = $ionicPopup.show({
        title: 'PC-Shoot',
        templateUrl: 'templates/pcShotView.html',
        scope : $scope
      });

      $scope.closeShotPopup = function(){
        alertPopup.close();
      };

      alertPopup.then(function(res) {
        if ( cricketScoreManager.hasUserWon( 'pc' ) ) {
          var alertPopup = $ionicPopup.alert({
             title: 'Game finished',
             template: 'Pc has won'
          });
          alertPopup.then(function(res) {
            cricketScoreManager.startMatch('user', 'pc');
          });
        }
      });
    }
  });
