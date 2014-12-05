'use strict';

jagged.controller('TechController', ['$scope',
    function($scope) {
        
        $scope.hideTech = function(index) {
            console.log($scope.technologies[index])
        };

        $scope.technologies = [
            // {
            //     title: 'title',
            //     description: 'description',
            //     url: 'http://url',
            //     icon: 'devicons-git',
            //     experience: '.9',
            //     tags: ['tag']
            // },
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
                title: 'jQuery',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-jquery',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Bootstrap',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-bootstrap',
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
                title: 'Github',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-github_badge',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Grunt',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-grunt',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Gulp',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-gulp',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Bower',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-bower',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Sass',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-sass',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'npm',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-npm',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Wordpress',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-wordpress',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Nginx',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-nginx',
                experience: '.9',
                tags: ['tag']
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
                title: 'Modernizr',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-modernizr',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'mysql',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-mysql',
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
                title: 'Compass',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-compass',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Markdown',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-markdown',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'requirejs',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-requirejs',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'PHP',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-php',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: '.net',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-dotnet',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Backbone',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-backbone',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'LESS',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-less',
                experience: '.9',
                tags: ['tag']
            },
            {
                title: 'Phonegap',
                description: 'description',
                url: 'http://url',
                icon: 'devicons-phonegap',
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
            },
        ];
    }
]);

// jagged.filter('selectedTags', function() {
//     return function(technologies, tags) {
//         return technologies.filter(function(tech) {

//             for (var i in tech.tags) {
//                 if (tags.indexOf(task.Tags[i]) != -1) {
//                     return true;
//                 }
//             }
//             return false;

//         });
//     };
// });