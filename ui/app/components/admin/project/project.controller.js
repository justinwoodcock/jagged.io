'use strict';

jagged.controller('ProjectController', ['$scope', 'AuthFactory', '$state', 'JaggedFactory', '$timeout', '$upload', '$filter', 'ngTableParams',
    function($scope, AuthFactory, $state, JaggedFactory, $timeout, $upload, $filter, ngTableParams) {
        var initialLoad = true;
        console.log($state)
        if(!angular.isDefined($scope.project)) {
            $scope.project = {};
        }
        getEntity();
        function getEntity() {
            JaggedFactory.createEntity('project').then(function(data) {
                $scope.ProjectEntity = data;
                $scope.projects = data.plain();
                if(angular.isDefined($state.params.id)) {
                    $scope.update = true;
                    var project = _.filter($scope.ProjectEntity, {
                        'id': $state.params.id
                    });
                    $scope.project = project[0]
                };
                if($state.current.name === 'admin') {
                    if (initialLoad === true) {
                        initTable();
                        initialLoad = false;
                        return;
                    }
                    $scope.tableParams.reload();
                };                
            });
        };
        
        $scope.addProject = function() {
            if($scope.project.description.length>0) {
                $scope.project.description = marked($scope.project.description);
            }
            $scope.ProjectEntity.post($scope.project).then(function(data) {
                $scope.project = {};
                $scope.alert = {
                    show: true,
                    message: 'The project has been successfully added!',
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

        getImages();
        function getImages() {
            if (!angular.isDefined($scope.ImagesEntity)) {
                JaggedFactory.createEntity('file').then(function(data) {
                    $scope.ImageEntity = data;
                    $scope.images = data.plain();
                    console.log($scope.images);
                });
            } else {
                $scope.ImagesEntity.getList().then(function(data) {
                    $scope.images = data.plain();
                });
            }
        };

        $scope.onFileSelect = function($files) {
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                $scope.upload = $upload.upload({
                    url: 'http://jagged.dev:1337/file/upload',
                    data: {
                        files: file
                    }
                }).progress(function(evt) {
                    $scope.uploadProgress = parseInt(100.0 * evt.loaded / evt.total);
                }).success(function(data, status, headers, config) {
                    console.log(file)
                    var imageObject = data.file[0];
                    imageObject.storedAs = imageObject.fd.replace('/Sites/jagged.io/images/', '');
                    //imageObject.storedAs = imageObject.fd.replace('/Users/justin/Sites/jagged/webapp/ui/app/images/', '');
                    $scope.ImageEntity.post(imageObject).then(function(data) {
                        getImages();
                        if(!angular.isDefined($scope.project.images)) {
                            $scope.project.images = [];
                        }
                        $scope.project.images.push(data);
                        $scope.alert = {
                            show: true,
                            message: imageObject.filename + ' has been uploaded.',
                            type: 'success'
                        }
                        $scope.clearAlert();
                    });
                }).error(function(data, status, headers, config) {
                    console.log('error uploading file.')
                })
            };
        };

        $scope.deleteImage = function(image, $index) {
            console.log(image);
            $scope.project.images.splice($index, 1);
            $scope.ImageEntity[$index].remove().then(function(data) {
                $scope.alert = {
                    show: true,
                    message: image.filename + ' has been deleted.',
                    type: 'success'
                }
                $scope.clearAlert();
                getImages();
            })
        };

        $scope.editItem = function() {
            var restangularItem = _.filter($scope.ProjectEntity, {
                'id': $scope.project.id
            });
            restangularItem[0] = _.merge(restangularItem[0], $scope.project);
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
                total: $scope.projects.length, // length of data
                getData: function($defer, params) {
                    // use build-in angular filter
                    var orderedData = params.sorting() ?
                        $filter('orderBy')($scope.projects, params.orderBy()) :
                        $scope.projects;

                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });

        }
    }
]);