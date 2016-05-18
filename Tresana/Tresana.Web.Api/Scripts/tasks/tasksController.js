﻿(function () {
    'use strict';

    var tresanaApp = angular.module('Tresana');

    tresanaApp.controller('Tasks.Controller', function ($http, $log) {
        var ctrl = this;

        $http.get('/api/tasks')
            .success(function(result) {
                ctrl.tasks = result;
                $log.info(ctrl.tasks);
            })
            .error(function(data, status) {
                $log.error(data);
            });
        //ctrl.tasks = [
        //    {
        //        Id: 3,
        //        Name: "Crear Proyecto Angular",
        //        Description: "Crear el proyecto Angular dentro del Proyecto de Tresana.Web.Api para enseñar como utlizar la librería",
        //        Priority: 1,
        //        StartDate: new Date("2016-05-11T19:00:00"),
        //        FinishDate: null,
        //        Estimation: 3,
        //        Status: "Todo",
        //        Creator: 1,
        //        CreationDate: new Date("2016-05-09T22:20:00"),
        //        DueDate: new Date("2016-05-11T20:30:00")
        //    },
        //    {
        //        Id: 4,
        //        Name: "Enseñar Angular",
        //        Description: "Describir para que sirve angular, que problema soluciona y los principales componentes",
        //        Priority: 2,
        //        StartDate: new Date("2016-05-11T18:30:00"),
        //        FinishDate: null,
        //        Estimation: 1,
        //        Status: "Todo",
        //        Creator: 1,
        //        CreationDate: new Date("2016-05-09T22:30:00"),
        //        DueDate: new Date("2016-05-11T19:00:00")
        //    }
        //];

        console.log(ctrl);
        ctrl.printDate = function printDate(dateString) {
            var date = new Date(dateString)
            return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " at " + date.getUTCHours() + ":" + date.getUTCMinutes();
        }

        console.log(ctrl);

    });
})();