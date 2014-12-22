'use strict';

jagged.controller('QuoteController', ['$scope', '$state', '$timeout', '$upload',
    function($scope, $state, $timeout, $upload) {
        if(!angular.isDefined($scope.quote)) {
            $scope.quote = {
                budget: {
                    low: 2500,
                    high: 7500
                },
                files: []
            };
        }
        $scope.shake = false;
        $scope.invalid = false;
        $scope.preferences = [
            {
                title: 'email',
                icon: 'icon-mail'
            },
            {
                title: 'phone',
                icon: 'icon-mobile'
            },
            {
                title: 'meeting',
                icon: 'icon-handshake'
            }
        ];
        $scope.quote.preference = $scope.preferences[0];
        $scope.setPreference = function(preference) {
            $scope.quote.preference = preference;
            $scope.next();
        }

        // set focus on the input after dom is loaded
        $scope.$on('$viewContentLoaded', function(event) {
            var input = document.querySelector('input');
            var textarea = document.querySelector('textarea');
            if(input) {
                input.focus();
            }
            if(textarea) {
                textarea.focus();
            }
            $scope.invalid = false;
        });

        // eval event type
        $scope.isEnter = function(event) {
            if(event.keyCode === 13) {
                $scope.next();
            }
            return false;
        };
        $scope.next = function() {
            if(!isValid()) {
                return false;
            }
            $state.go($scope.state.current.next);
            return true;
        };
        function isValid() {
            if($scope.formQuote.$invalid) {
                $scope.invalid = true;
                $scope.shake = true;
                $timeout(function() {
                    $scope.shake = false;
                }, 1000)
                return false;
            }
            $scope.invalid = false;
            return true;
        };

        $scope.$watch('quote.files', function() {
            for (var i = 0; i < $scope.quote.files.length; i++) {
              var file = $scope.quote.files[i];
              $scope.upload = $upload.upload({
                url: 'server/upload/url', // upload.php script, node.js route, or servlet url
                //method: 'POST' or 'PUT',
                //headers: {'Authorization': 'xxx'}, // only for html5
                //withCredentials: true,
                data: {myObj: $scope.myModelObj},
                file: file, // single file or a list of files. list is only for html5
              }).progress(function(evt) {
                console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :'+ evt.config.file.name);
              }).success(function(data, status, headers, config) {
                console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
              });
            }
        });

    }
]);