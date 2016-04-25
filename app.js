angular.module("myApp", ["ngMaterial", "angular-sortable-view", "ui.router", "login", "home"])

    .controller("appController", ["$scope","$state", appController])


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

function appController($scope,$state) {


}