'use strict';

jagged.controller('QuoteController', ['$scope', '$state', '$timeout',
    function($scope, $state, $timeout) {
        if(!angular.isDefined($scope.quote)) {
            console.log('no quote var yet')
            $scope.quote = {
                budget: {
                    low: 2500,
                    high: 7500
                }
            };
        }
        $scope.shake = false;
        $scope.invalid = false;

        // set focus on the input after dom is loaded
        $scope.$on('$viewContentLoaded', function(event) {
            document.querySelector('input').focus();
            $scope.invalid = false;
            //$scope.formQuote.$invalid = true;
        });
        // eval event type
        $scope.isEnter = function(event) {
            if(event.keyCode === 13) {
                $scope.next();
            }
            return false;
        };
        $scope.next = function() {
            if(!isValid()) {
                return false;
            }
            $state.go($scope.state.current.next);
            return true;
        };
        function isValid() {
            console.log($scope);
            if($scope.formQuote.$invalid) {
                $scope.invalid = true;
                $scope.shake = true;
                $timeout(function() {
                    $scope.shake = false;
                }, 1000)
                return false;
            }
            $scope.invalid = false;
            return true;
        };

    }
]);