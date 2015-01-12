'use strict';

jagged.controller('AdminController', ['$scope', 'AuthFactory', '$state', 'JaggedFactory', '$timeout', '$upload', '$filter', 'ngTableParams',
    function($scope, AuthFactory, $state, JaggedFactory, $timeout, $upload, $filter, ngTableParams) {
        // var initialLoad = {
        //     projects: true,
        //     tech: true
        // };
        // getProjects();
        // getTech();
        // function getProjects() {
        //     JaggedFactory.createEntity('project').then(function(data) {
        //         $scope.ProjectEntity = data;
        //         $scope.projects = data.plain();
        //         if (initialLoad.projects === true) {
        //             initTable('projects');
        //             initialLoad.projects = false;
        //             return;
        //         }
        //         $scope.tableParams.reload();
        //     });
            
        // };
        // function getTech() {
        //     JaggedFactory.createEntity('tech').then(function(data) {
        //         $scope.TechEntity = data;
        //         $scope.tech = data.plain();
        //         if (initialLoad.tech === true) {
        //             initTable('tech');
        //             initialLoad.tech = false;
        //             return;
        //         }
        //         $scope.tableParams.reload();
        //     });  
        // };

        $scope.clearAlert = function(duration) {
            if (!duration) {
                var duration = 5000;
            }
            $timeout(function() {
                $scope.alert = {
                    show: false
                };
            }, duration)
        };

        // $scope.delete = function(item, entity) {
        //     var restangularItem = _.filter($scope[entity], {
        //         'id': item.id
        //     });
        //     restangularItem[0].remove().then(function(data) {
        //         $scope.alert = {
        //             show: true,
        //             message: 'The special has been successfully deleted.',
        //             type: 'success'
        //         };
        //         $scope.clearAlert();
        //         getSpecialEntity();
        //     }, function(data) {
        //         console.log(data);
        //         $scope.alert = {
        //             show: true,
        //             message: 'Oops, something went wrong! Please try again.',
        //             type: 'danger'
        //         };
        //         $scope.clearAlert();
        //     });
        // };

        // function initTable(entity) {
        //     console.log($scope[entity]);
        //     $scope.tableParams = new ngTableParams({
        //         page: 1, // show first page
        //         count: 10, // count per page
        //         sorting: {
        //             name: 'asc' // initial sorting
        //         }
        //     }, {
        //         total: $scope[entity].length, // length of data
        //         getData: function($defer, params) {
        //             // use build-in angular filter
        //             var orderedData = params.sorting() ?
        //                 $filter('orderBy')($scope[entity], params.orderBy()) :
        //                 $scope[entity];

        //             $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        //         }
        //     });

        // }

    }
]);