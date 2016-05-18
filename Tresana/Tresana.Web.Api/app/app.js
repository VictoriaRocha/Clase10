(function() {
    'use-strict';

    var app = angular.module('Tresana', ['ngMessages', 'ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider

        .when('/tasks', {
            templateUrl: 'app/tasks/tasks.html',
            controller: 'Tasks.Controller'
        })
        .when('/users', {
            templateUrl: 'app/users/users.html',
            controller: 'Users.Controller'
        })
        .otherwise({
            redirectTo: '/tasks'
        });
    });


})();