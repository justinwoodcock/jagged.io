'use strict';

jagged.controller('WorkController', ['$scope', 'JaggedFactory',
    function($scope, JaggedFactory) {
        $scope.loading = true;
        console.log($scope);
        JaggedFactory.createEntity('project').then(function(data) {
            $scope.ProjectEntity = data;
            $scope.projects = data.plain();
            //$scope.loading = false;
        });
    }
]);