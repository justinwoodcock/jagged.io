'use strict';

jagged.controller('LoginController', ['$scope', 'AuthFactory', '$state', 'JaggedFactory', '$timeout',
    function($scope, AuthFactory, $state, JaggedFactory, $timeout) {
        $scope.hasAuth = AuthFactory.check();
        $scope.login = function() {
            var creds = {
                email: $scope.email,
                password: $scope.password
            };
            AuthFactory.login(creds);
            $timeout(function() {
                if(AuthFactory.check()) {
                    var storage = JaggedFactory.getStorage();
                    storage.session = {
                        hasAuth: true,
                        token: AuthFactory.token()
                    };
                    JaggedFactory.setStorage(storage);
                    $state.go('admin');
                }
            }, 750)
        };

        $scope.logout = function() {
            AuthFactory.logout();
            $state.go('home');
        };

    }
]);