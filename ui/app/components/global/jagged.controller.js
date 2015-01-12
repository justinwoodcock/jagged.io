'use strict';

jagged.controller('JaggedController', ['$scope', '$rootScope', '$state', '$timeout',
    function($scope, $rootScope, $state, $timeout) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $scope.state = $state;
        });

        $scope.clearAlert = function(duration) {
            if (!duration) {
                var duration = 5000;
            }
            $timeout(function() {
                $scope.alert = {
                    show: false
                };
            }, duration)
        };
    }
]);