'use strict';

jagged.controller('HomeController', ['$scope', '$anchorScroll', '$state', '$timeout', 'JaggedFactory',
    function($scope, $anchorScroll, $state, $timeout, JaggedFactory) {
        $scope.navigateTo = function(state) {
            //$scope.showContact = false;
            //$anchorScroll();
            $state.go(state);
        };
        
        JaggedFactory.createEntity('tech').then(function(data) {
            $scope.TechEntity = data;
            $scope.technologies = _.where(data.plain(), {'featured':true});
        });
        // JaggedFactory.createEntity('project').then(function(data) {
        //     $scope.ProjectEntity = data;
        //     $scope.projects = _.where(data.plain(), {'featured':true});
        // });

        $scope.windowHeight = window.innerHeight;
        $scope.scrollLocation = window.pageYOffset;
        var footerHeight = document.getElementById('contact').offsetHeight;
        $timeout(function(){
            var scrollHeight = document.documentElement.scrollHeight;
            $scope.showFooter = (scrollHeight / 2) - footerHeight;
        }, 100);
        var resizeTimer;
        window.onresize = function() {
            $timeout.cancel(resizeTimer);
            resizeTimer = $timeout(function() {
                $scope.windowHeight = window.innerHeight;
            }, 200);
        };
        window.onscroll = function() {
            $scope.scrollLocation = window.pageYOffset;
            $scope.$apply('scrollLocation');
        }
    }
]);