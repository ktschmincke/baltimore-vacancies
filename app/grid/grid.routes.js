(function() {
    'use strict';

    angular.module('myApp.grid')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider']
    function routeConfig($routeProvider) {
        $routeProvider.when('/grid', {
            templateUrl: 'grid/grid.html',
            controller: 'myApp.grid.GridCtrl'
        });
    }
})();
