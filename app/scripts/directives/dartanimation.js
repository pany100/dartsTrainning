'use strict';

/**
 * @ngdoc directive
 * @name dartTrainningApp.directive:dartAnimation
 * @description
 * # dartAnimation
 */
angular.module('dartTrainningApp')
  .directive('dartAnimation', function () {
    return {
      templateUrl: 'templates/dartAnimation.html',
      restrict: 'E',
      scope: {
        results : '='
      },
      link: function postLink(scope, element, attrs) {
        var canvas = document.getElementById('canvas'),
            ctx=canvas.getContext("2d");
        function init() {
          var img=document.getElementById("dartboard-bg");
          ctx.drawImage(img,0,0,350,350);
        }

        scope.$watch('results', function( newValue, oldValue ) {
          redrawElements();
        }, true);

        init();

        function redrawElements(){

          ctx.clearRect(0,0, canvas.width, canvas.height);
          init();
          angular.forEach( scope.results, function( value ) {
            drawDart( value );
          });
        }

        function drawDart( value ) {
          var x = 0.783625731 * value.xf + 175,
              y = 175 - 0.783625731 * value.yf,
              radius= 2,
              color = '#0099FF';
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI*2, true);
          ctx.closePath();
          ctx.fillStyle = color;
          ctx.fill();
        }

      }
    };
  });
