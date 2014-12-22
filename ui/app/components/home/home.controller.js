'use strict';

jagged.controller('HomeController', ['$scope', '$anchorScroll', '$state', '$timeout',
    function($scope, $anchorScroll, $state, $timeout) {
        $scope.navigateTo = function(state) {
            console.log(state);
            $scope.showContact = false;
            $anchorScroll();
            $state.go(state);
        };
        //$scope.showContact = false;
        $scope.technologies = [
            {
                title: 'HTML5',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-html5',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'CSS3',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-css3',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Javascript',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-javascript_badge',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Angular',
                description: 'HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.',
                url: 'http://angularjs.org',
                icon: 'devicons-angular',
                experience: '.9',
                tags: ['javascript', 'js', 'frontend', 'framework', 'angular', 'google', 'SPA']
            },
            {
                title: 'Node',
                description: 'Node.js® is a platform built on Chrome\'s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.',
                url: 'http://nodejs.org',
                icon: 'devicons-nodejs_small',
                experience: '.9',
                tags: ['node', 'nodejs', 'Node.js®', 'node.js', 'javascript', 'js', 'backend', 'server', 'api', 'REST', 'javascript', 'js', 'MVC', 'framework']
            },
            {
                title: 'mongoDB',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-mongodb',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Git',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-git',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Responsive',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-responsive',
                experience: '.9',
                tags: ['tag']
            }
        ];
        $scope.projects = [
            {
                title: 'Sony store',
                client: 'Sony',
                description: 'Things and stuff...',
                url: 'http://store.sony.com',
                icon: 'icon-sony',
                tech: ['javascript', 'html', 'css'],
                tags: [],
                attachments: [],
                screenshots: [
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-1.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-2.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-3.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-4.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-5.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-6.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-7.jpg'
                ]
            },
            {
                title: 'Inside Endurance',
                client: 'Gatorade',
                description: 'Things and stuff...',
                url: 'http://endurance.universalsports.com/',
                icon: 'icon-gatorade',
                tech: ['javascript', 'html', 'css'],
                tags: [],
                attachments: [],
                screenshots: [
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/inside-endurance-1.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/inside-endurance-2.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/inside-endurance-3.jpg'
                ]
            },
            {
                title: 'TurboTax',
                client: 'Intuit',
                description: 'Things and stuff...',
                url: 'http://turbotax.com/',
                icon: 'icon-intuit',
                tech: ['javascript', 'html', 'css'],
                tags: [],
                attachments: [],
                //thumbnail: 'http://digitaluprisingdesign.com/wp-content/uploads/2013/01/turbo-tax-thumb.jpg',
                screenshots: [
                    'http://digitaluprisingdesign.com/wp-content/uploads/2013/01/turbo-tax-1.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2013/01/turbo-tax-2.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2013/01/turbo-tax-3.jpg'
                ]
            },
            {
                title: 'Sony store',
                client: 'Sony',
                description: 'Things and stuff...',
                url: 'http://store.sony.com',
                icon: 'icon-sony',
                tech: ['javascript', 'html', 'css'],
                tags: [],
                attachments: [],
                screenshots: [
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-1.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-2.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-3.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-4.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-5.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-6.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/sony-7.jpg'
                ]
            },
            {
                title: 'Inside Endurance',
                client: 'Gatorade',
                description: 'Things and stuff...',
                url: 'http://endurance.universalsports.com/',
                icon: 'icon-gatorade',
                tech: ['javascript', 'html', 'css'],
                tags: [],
                attachments: [],
                screenshots: [
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/inside-endurance-1.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/inside-endurance-2.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2012/10/inside-endurance-3.jpg'
                ]
            },
            {
                title: 'TurboTax',
                client: 'Intuit',
                description: 'Things and stuff...',
                url: 'http://turbotax.com/',
                icon: 'icon-intuit',
                tech: ['javascript', 'html', 'css'],
                tags: [],
                attachments: [],
                //thumbnail: 'http://digitaluprisingdesign.com/wp-content/uploads/2013/01/turbo-tax-thumb.jpg',
                screenshots: [
                    'http://digitaluprisingdesign.com/wp-content/uploads/2013/01/turbo-tax-1.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2013/01/turbo-tax-2.jpg',
                    'http://digitaluprisingdesign.com/wp-content/uploads/2013/01/turbo-tax-3.jpg'
                ]
            }
        ];
    }
]);