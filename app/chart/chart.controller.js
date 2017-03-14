(function () {
    'use strict'

    angular.module('myApp.chart')
        .controller('myApp.chart.ChartCtrl', ChartCtrl);

    ChartCtrl.$inject = ['$scope', '$log', 'myApp.common.dataService']
    function ChartCtrl ($scope, $log, dataService) {
        dataService.getData()
            .then((data) => {
                $log.log('Data loaded successfully: %o', data);
                let dateData = data.map((item) => moment(item.noticedate));
                let refDate = moment([2016, 2]);
                let refDates = [];
                while (refDate.isSameOrBefore(moment())) {
                    refDates.push(moment(refDate));
                    refDate.add(1, 'month');
                }

                $scope.vacancyData = [refDates.map((currRefDate) =>
                    dateData.filter((currDate) => currDate.isSame(currRefDate, 'month')).length
                )];
                $scope.monthLabels = refDates.map((currRefDate) => currRefDate.format('M/YY'));
            }, (faultData) => {
                $log.error(faultData);
            });
    }
})();
