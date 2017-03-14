(function() {
    'use strict';

    angular.module('myApp', [
        'ngRoute',
        'myApp.home',
        'myApp.common',
        'myApp.grid',
        'myApp.chart',
    ]).
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
})();
