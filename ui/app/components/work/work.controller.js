'use strict';

jagged.controller('WorkController', ['$scope', 'JaggedFactory', '$state', '$timeout',
    function($scope, JaggedFactory, $state, $timeout) {
        $scope.loading = true;
        JaggedFactory.createEntity('project').then(function(data) {
            $scope.ProjectEntity = data;
            if($state.current.name === 'home') {
                $scope.projects = _.where(data.plain(), {'featured':true});
            } else {
                $scope.projects = data.plain();
            }
        });

        $timeout(function() {
            var container = document.querySelector('#project-list');
            var pckry = new Packery( container, {
                // options
                itemSelector: '.card',
                gutter: 30
            });
            $scope.loading = false;
        }, 1500);
        
    }
]);