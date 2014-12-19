'use strict';

jagged.controller('HeaderController', ['$scope', '$state', '$anchorScroll',
    function($scope, $state, $anchorScroll) {
        $scope.openMenu = function() {
            $anchorScroll();
            $state.go('menu');
        };
        $scope.close = function() {
            window.history.back();
        };
    }
]);