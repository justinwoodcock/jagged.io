'use strict';

jagged.controller('WorkController', ['$scope',
    function($scope) {
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
                title: 'Stampede',
                client: 'Underground Elephant',
                description: 'Things and stuff...',
                url: 'http://turbotax.com/',
                icon: 'icon-ue',
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
                title: 'TurboTax',
                client: 'Intuit',
                description: 'Things and stuff...',
                url: 'http://turbotax.com/',
                icon: 'icon-jagged',
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