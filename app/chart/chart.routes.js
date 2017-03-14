(function() {
    'use strict';

    angular.module('myApp.chart')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider']
    function routeConfig($routeProvider) {
        $routeProvider.when('/chart', {
            templateUrl: 'chart/chart.html',
            controller: 'myApp.chart.ChartCtrl'
        });
    }
})();
