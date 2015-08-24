// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('dartTrainningApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('').previousTitleText(false);
  $stateProvider

    .state('app', {
      url: '/darts',
      abstract: true,
      templateUrl: "templates/commonView.html"
    })
    .state('app.main', {
      url: '/main',
      views: {
        'mainView': {
          templateUrl: 'templates/main.html',
          controller: 'MainCtrl'
        }
      }
    })
    .state('app.game', {
      url: '/game',
      views: {
        'mainView': {
          templateUrl: 'templates/game.html',
          controller: 'GameCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/darts/main');
});
