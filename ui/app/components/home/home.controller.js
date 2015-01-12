'use strict';

jagged.controller('HomeController', ['$scope', '$anchorScroll', '$state', '$timeout', 'JaggedFactory',
    function($scope, $anchorScroll, $state, $timeout, JaggedFactory) {
        $scope.navigateTo = function(state) {
            $scope.showContact = false;
            $anchorScroll();
            $state.go(state);
        };
        //$scope.showContact = false;
        JaggedFactory.createEntity('tech').then(function(data) {
            $scope.TechEntity = data;
            $scope.technologies = _.where(data.plain(), {'featured':true});
        });
        JaggedFactory.createEntity('project').then(function(data) {
            $scope.ProjectEntity = data;
            $scope.projects = _.where(data.plain(), {'featured':true});
        });
    }
]);