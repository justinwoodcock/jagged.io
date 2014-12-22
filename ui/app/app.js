'use strict';

var jagged = angular.module('Jagged', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'restangular',
    'vr.directives.slider',
    'angularFileUpload',
    'angular-inview'
]);

jagged.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('home', {
        url: '/',
        views: {
            header: {
                templateUrl: '/components/header/header.index.html',
                controller: 'HeaderController'
            },
            content: {
                templateUrl: '/components/home/home.index.html',
                controller: 'HomeController'
            },
            footer: {
                templateUrl: '/components/footer/footer.index.html'
            }
        }
    })
        .state('menu', {
            url: '/menu',
            views: {
                header: {
                    templateUrl: '/components/header/header.menu.html',
                    controller: 'HeaderController'
                },
                content: {
                    templateUrl: '/components/menu/menu.index.html',
                    controller: 'MenuController'
                },
                footer: {
                    templateUrl: '/components/footer/footer.index.html'
                }
            }
        })
        .state('tech', {
            url: '/tech',
            views: {
                header: {
                    templateUrl: '/components/header/header.index.html',
                    controller: 'HeaderController'
                },
                content: {
                    templateUrl: '/components/tech/tech.index.html',
                    controller: 'TechController'
                },
                footer: {
                    templateUrl: '/components/footer/footer.index.html'
                }
            }
        })
        .state('work', {
            url: '/work',
            views: {
                header: {
                    templateUrl: '/components/header/header.index.html',
                    controller: 'HeaderController'
                },
                content: {
                    templateUrl: '/components/work/work.index.html',
                    controller: 'WorkController'
                },
                footer: {
                    templateUrl: '/components/footer/footer.index.html'
                }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                header: {
                    templateUrl: '/components/header/header.index.html',
                    controller: 'HeaderController'
                },
                content: {
                    templateUrl: '/components/about/about.index.html',
                    //controller: 'AboutController'
                },
                footer: {
                    templateUrl: '/components/footer/footer.index.html'
                }
            }
        })
        .state('contact', {
            url: '/contact',
            views: {
                header: {
                    templateUrl: '/components/header/header.index.html',
                    controller: 'HeaderController'
                },
                content: {
                    templateUrl: '/components/contact/contact.index.html',
                    controller: 'WorkController'
                },
                footer: {
                    templateUrl: '/components/footer/footer.index.html'
                }
            }
        })
        .state('quote', {
            url: '/quote',
            views: {
                header: {
                    templateUrl: '/components/header/header.index.html',
                    controller: 'HeaderController'
                },
                content: {
                    templateUrl: '/components/quote/quote.index.html',
                    controller: 'QuoteController'
                },
                footer: {
                    templateUrl: '/components/footer/footer.index.html'
                }
            }
        })
        .state('quote.name', {
            url: '/name',
            views: {
                quote: {
                    templateUrl: '/components/quote/quote.name.html'
                }
            },
            next: 'quote.email'
        })
        .state('quote.email', {
            url: '/email',
            views: {
                quote: {
                    templateUrl: '/components/quote/quote.email.html'
                }
            },
            back: 'quote.name',
            next: 'quote.phone'
        })
        .state('quote.phone', {
            url: '/phone',
            views: {
                quote: {
                    templateUrl: '/components/quote/quote.phone.html'
                }
            },
            back: 'quote.email',
            next: 'quote.preference'
        })
        .state('quote.preference', {
            url: '/preference',
            views: {
                quote: {
                    templateUrl: '/components/quote/quote.preference.html'
                }
            },
            back: 'quote.phone',
            next: 'quote.budget'
        })
        .state('quote.budget', {
            url: '/budget',
            views: {
                quote: {
                    templateUrl: '/components/quote/quote.budget.html'
                }
            },
            back: 'quote.preference',
            next: 'quote.details'
        })
        .state('quote.details', {
            url: '/details',
            views: {
                quote: {
                    templateUrl: '/components/quote/quote.details.html'
                }
            },
            back: 'quote.budget',
            next: 'quote.files'
        })
        .state('quote.files', {
            url: '/files',
            views: {
                quote: {
                    templateUrl: '/components/quote/quote.files.html'
                }
            },
            back: 'quote.details',
            next: 'quote.name'
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

jagged.directive('disableNgAnimate', ['$animate',
    function($animate) {
        return {
            restrict: 'A',
            link: function($scope, $element) {
                $animate.enabled(false, $element);
            }
        };
    }
]);
