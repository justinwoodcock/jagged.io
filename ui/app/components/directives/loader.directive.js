'use strict';

jagged.directive('loader', function() {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'components/templates/loader.template.html',
        link: function($scope, $element, $attrs) {
            console.log($scope);
        }
    }
})
