'use strict';

jagged.directive('cardHeight', function() {
    return {
        restrict: 'A',
        //scope: false,
        link: function($scope, $element, $attrs) {
            console.log($scope);
            setTimeout(function(){
                var carouselHeight = $element[0].children[0].children[0].clientHeight;
                var infoHeight = $element[0].children[0].children[2].clientHeight;
                var cardHeight = carouselHeight + infoHeight + 'px';
                $element[0].style.height = cardHeight;
                $scope.loading = false;
                $scope.$parent.$parent.loading = false;
                $scope.$apply();
                // $element[0].children[0].style.height = cardHeight;
                // $element[0].children[1].style.height = cardHeight;
            }, 1000);
        }
    }
})
