(function() {
    'use strict'

    angular.module('myApp.common')
        .factory('myApp.common.dataService', dataService);

    dataService.$inject = ['$http', '$q'];

    function dataService($http, $q) {
        let data = [];
        return {
            getData: getData
        };

        function getData() {
            let deferred = $q.defer();

            // if data is not yet populated, fetch from api
            if (data.length === 0) {
                $http.get('https://data.baltimorecity.gov/resource/rw5h-nvv4.json')
                    .then((success) => {
                        // store data in service to avoid future calls
                        data = success.data;
                        deferred.resolve(data)
                    }, (error) => {
                        deferred.reject(error)
                    });
            } else {
                // if data exists in service, return it
                deferred.resolve(data);
            }

            return deferred.promise;
        }
    }
})();
