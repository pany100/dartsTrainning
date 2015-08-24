'use strict';

/**
 * @ngdoc function
 * @name dartTrainningApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dartTrainningApp
 */
angular.module('dartTrainningApp')
  .controller('MainCtrl', function (cricketScoreManager, $scope, $state) {

    $scope.start1v1Game = function () {
      cricketScoreManager.startMatch('user', 'user2');
      goToGame();
    }

    $scope.start1vPCGame = function () {
      cricketScoreManager.startMatch('user', 'pc');
      goToGame();
    }

    function goToGame() {
      $state.go( "app.game" );
    }

  });
