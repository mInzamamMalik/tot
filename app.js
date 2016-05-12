angular.module("myApp", ["ngMaterial","ngMdIcons", "angular-sortable-view", "ui.router", "login", "home"])

    .controller("appController", ["$scope", appController])

    .factory('$exceptionHandler', function() {
        return function(exception, cause) {
            exception.message += ' (caused by "' + cause + '")';
            //console.log(cause);
            //throw exception;
        };
    })

    .config(function ($urlRouterProvider, $stateProvider) {


        $stateProvider.state("login", {
            url: "/login",
            templateUrl: "components/login/login.html",
            controller: "loginController"
        });
        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "components/home/home.html",
            controller: "homeController"
        });
        $urlRouterProvider.otherwise("/home");

    });

function appController($scope) {


}


