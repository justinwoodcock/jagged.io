'use strict';

var jagged = angular.module('Jagged', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'restangular'
]);

jagged.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('home', {
        url: '/',
        views: {
            header: {
                templateUrl: '/components/header/index.html',
                controller: 'HeaderController'
            },
            content: {
                templateUrl: '/components/home/index.html',
                controller: 'HomeController'
            },
            footer: {
                templateUrl: '/components/footer/index.html'
            }
        }
    }).state('menu', {
        url: '/menu',
        views: {
            header: {
                templateUrl: '/components/header/menu.html',
                controller: 'HeaderController'
            },
            content: {
                templateUrl: '/components/menu/index.html',
                controller: 'MenuController'
            },
            footer: {
                templateUrl: '/components/footer/index.html'
            }
        }
    }).state('tech', {
        url: '/tech',
        views: {
            header: {
                templateUrl: '/components/header/index.html',
                controller: 'HeaderController'
            },
            content: {
                templateUrl: '/components/tech/index.html',
                controller: 'TechController'
            },
            footer: {
                templateUrl: '/components/footer/index.html'
            }
        }
    }).state('work', {
        url: '/work',
        views: {
            header: {
                templateUrl: '/components/header/index.html',
                controller: 'HeaderController'
            },
            content: {
                templateUrl: '/components/work/index.html',
                controller: 'WorkController'
            },
            footer: {
                templateUrl: '/components/footer/index.html'
            }
        }
    }).state('quote', {
        url: '/quote',
        views: {
            header: {
                templateUrl: '/components/header/index.html',
                controller: 'HeaderController'
            },
            content: {
                templateUrl: '/components/quote/quote.index.html',
                controller: 'QuoteController'
            },
            footer: {
                templateUrl: '/components/footer/index.html'
            }
        }
    }).state('quote.name', {
        url: '/name',
        views: {
            quote: {
                templateUrl: '/components/quote/quote.name.html'
            },
            quoteNavigation: {
                templateUrl: '/components/quote/quote.navigation.html'
            }
        },
        next: 'quote.email'
    }).state('quote.email', {
        url: '/email',
        views: {
            quote: {
                templateUrl: '/components/quote/quote.email.html'
            },
            quoteNavigation: {
                templateUrl: '/components/quote/quote.navigation.html'
            }
        },
        next: 'quote.phone',
        back: 'quote.name'
    });

    $urlRouterProvider.otherwise('/');
});

jagged.config(['RestangularProvider',
    function(RestangularProvider) {
        var apiUrl = 'https://api.ui-base.dev';
        RestangularProvider.setBaseUrl(apiUrl);
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
            var extractedData = data.data;
            return extractedData;
        });
    }
]);

// jagged.config(["$locationProvider", function($locationProvider) {
//     $locationProvider.html5Mode(true);
// }]);
