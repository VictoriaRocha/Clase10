(function () {
    'use strict';

    var tresanaApp = angular.module('Tresana');

    tresanaApp.controller('Tasks.Controller', function ($log, $http) {
        var ctrl = this;

        $http.get('/api/tasks')
            .success(function (result) {
                ctrl.tasks = result;
            })
        .error(function (data, status) {
            $log.error(data);
        });


        ctrl.printDate = function printDate(dateString) {
            var date = new Date(dateString)
            return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " at " + date.getUTCHours() + ":" + date.getUTCMinutes();
        }

        console.log(ctrl);

    });
})();