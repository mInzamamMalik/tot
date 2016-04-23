angular.module("myApp", ["ngMaterial", "angular-sortable-view", "ui.router","login","home"])

    .controller("appController", ["$scope", appController])
    .config(function ($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise("/home");
        $stateProvider.state("login", {
            url: "/login",
            templateUrl: "components/login/login.html",
            controller : "loginController"
        });
        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "components/home/home.html",
            controller:"homeController"
        });


    });

function appController(){

}