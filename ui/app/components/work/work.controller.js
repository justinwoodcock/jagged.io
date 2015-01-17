'use strict';

jagged.controller('WorkController', ['$scope', 'JaggedFactory',
    function($scope, JaggedFactory) {

        JaggedFactory.createEntity('project').then(function(data) {
            $scope.ProjectEntity = data;
            $scope.projects = data.plain();
        });
    }
]);