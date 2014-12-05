'use strict';

jagged.controller('JaggedController', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $scope.state = toState;
        });
    }
]);