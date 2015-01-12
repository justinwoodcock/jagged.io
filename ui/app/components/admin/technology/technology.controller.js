'use strict';

jagged.controller('TechnologyController', ['$scope', 'JaggedFactory', '$state', '$filter', 'ngTableParams',
    function($scope, JaggedFactory, $state, $filter, ngTableParams) {
        var initialLoad = true;
        if(!angular.isDefined($scope.tech)) {
            $scope.tech = {};
        }
        getEntity();
        function getEntity() {
            JaggedFactory.createEntity('tech').then(function(data) {
                $scope.TechEntity = data;
                $scope.technologies = data.plain();
                if(angular.isDefined($state.params.id)) {
                    $scope.update = true;
                    var tech = _.filter($scope.TechEntity, {
                        'id': $state.params.id
                    });
                    $scope.tech = tech[0]
                };
                if (initialLoad === true) {
                    initTable();
                    initialLoad = false;
                    return;
                }
                $scope.tableParams.reload();
            });
        };
        
        $scope.addTech = function() {
            $scope.TechEntity.post($scope.tech).then(function(data) {
                $scope.tech = {};
                $scope.alert = {
                    show: true,
                    message: 'The tech has been successfully added!',
                    type: 'success'
                };
                $scope.clearAlert();
            }, function(data) {
                console.log(data);
                $scope.alert = {
                    show: true,
                    message: 'Oops, something went wrong! Please try again.',
                    type: 'danger'
                };
                $scope.clearAlert();
            })
        };

        $scope.clear = function() {
            $scope.tech = {};
        }

        $scope.editItem = function() {
            var restangularItem = _.filter($scope.TechEntity, {
                'id': $scope.tech.id
            });
            restangularItem[0] = _.merge(restangularItem[0], $scope.tech);
            restangularItem[0].put().then(function(data) {
                $scope.alert = {
                    show: true,
                    message: 'The item has been successfully updated!',
                    type: 'success'
                };
                $scope.clearAlert();
                getEntity();
            }, function(data) {
                $scope.alert = {
                    show: true,
                    message: 'Oops, something went wrong! Please try again.',
                    type: 'danger'
                };
                $scope.clearAlert();
            });
        };

        $scope.delete = function(item, entity) {
            var restangularItem = _.filter($scope[entity], {
                'id': item.id
            });
            restangularItem[0].remove().then(function(data) {
                $scope.alert = {
                    show: true,
                    message: 'The special has been successfully deleted.',
                    type: 'success'
                };
                $scope.clearAlert();
                getSpecialEntity();
            }, function(data) {
                console.log(data);
                $scope.alert = {
                    show: true,
                    message: 'Oops, something went wrong! Please try again.',
                    type: 'danger'
                };
                $scope.clearAlert();
            });
        };

        function initTable() {
            $scope.tableParams = new ngTableParams({
                page: 1, // show first page
                count: 10, // count per page
                sorting: {
                    name: 'asc' // initial sorting
                }
            }, {
                total: $scope.technologies.length, // length of data
                getData: function($defer, params) {
                    // use build-in angular filter
                    var orderedData = params.sorting() ?
                        $filter('orderBy')($scope.technologies, params.orderBy()) :
                        $scope.technologies;

                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });

        }
    }
]);