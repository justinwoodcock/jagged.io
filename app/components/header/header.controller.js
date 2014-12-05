'use strict';

jagged.controller('HeaderController', ['$scope',
    function($scope) {
        $scope.close = function() {
            window.history.back();
        }
    }
]);