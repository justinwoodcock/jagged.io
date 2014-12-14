'use strict';

jagged.controller('JaggedController', ['$scope', '$rootScope', '$state',
    function($scope, $rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            $scope.state = $state;
        });
    }
]);