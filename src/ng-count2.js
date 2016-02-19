'use strict';

/**
 *  Module
 *
 * Description
 */
angular.module('ngCount2', ['ngCount.directives']);

angular.module('ngCount.directives', [])
    .controller('CountCtrl', ['$scope', '$element', '$interval',
        function($scope, $element, $interval) {
            var targetNum = parseInt($element[0].innerHTML);
            var stepper = parseInt($scope.time) / targetNum;
            $element[0].innerHTML = 0;
            var curr = 0;
            var counter = $interval(function() {
                $element[0].innerHTML = curr++;
            }, stepper, targetNum + 1)
        }
    ])
    .directive('ngCount', [
        function() {
            // Runs during compile
            return {
                name: 'ngCount',
                scope: {
                    time: '@'
                }, // {} = isolate, true = child, false/undefined = no change
                controller: 'CountCtrl',
                restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            };
        }
    ]);