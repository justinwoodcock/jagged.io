'use strict';

jagged.controller('AdminController', ['$scope', '$timeout',
    function($scope, $timeout) {

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