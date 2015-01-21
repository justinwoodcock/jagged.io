'use strict';

jagged.directive('flipCard', function() {
    return {
        restrict: 'E',
        //scope: false,
        replace: true,
        templateUrl: function($element, $attrs) {
            return $attrs.template;
        },
        link: function($scope, $element, $attrs) {
            $scope.flipped = false;
        }
    }
})