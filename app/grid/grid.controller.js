(function() {
    'use strict';

    angular.module('myApp.grid')
        .controller('myApp.grid.GridCtrl', GridCtrl)
        .filter('dateFilter', () => {
            return (value) => moment(value).format('l');
        });

    GridCtrl.$inject = ['$scope', 'myApp.common.dataService', 'uiGridConstants']
    function GridCtrl($scope, dataService, uiGridConstants) {
        $scope.gridConfig = {
            paginationPageSize: 25,
            paginationPageSizes: [25],
            paginationCurrentPage: 1,
            enableHorizontalScrollbar: 0,
            enableFiltering: true,
            columnDefs: [{
                field: 'block',
                displayName: 'Block'
            }, {
                field: 'buildingaddress',
                displayName: 'Building Address'
            }, {
                field: 'councildistrict',
                displayName: 'Council District'
            }, {
                field: 'lot',
                displayName: 'Lot'
            }, {
                field: 'neighborhood',
                displayName: 'Neighborhood'
            }, {
                field: 'noticedate',
                cellFilter: 'dateFilter',
                displayName: 'Notice Date'
            }, {
                field: 'policedistrict',
                displayName: 'Police District'
            }],
            onRegisterApi: function(gridApi) {
                $scope.gridApi = gridApi;
            }
        };

        dataService.getData()
            .then((data) => {
                console.log('Data loaded successfully: %o', data);
                $scope.gridConfig.data = data;
                $scope.totalItems = data.length;
            }, (faultData) => {
                console.error(faultData);
            });
    }
})();
