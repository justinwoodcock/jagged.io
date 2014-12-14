'use strict';

jagged.controller('QuoteController', ['$scope', '$state',
    function($scope, $state) {
        $scope.keypress = function(event) {
            if(event.keyCode === 13) {
                $state.go($scope.state.current.next);
            }
        }
    }
]);