angular.module("myApp", ["ngMaterial","angular-sortable-view"])

.controller("appController",[ "$scope" ,  appController ]);


function appController($scope){


    $scope.project = {

        Todo : [],
        Doing : [],
        Review : [],
        Done : []

    };


    $scope.list1 = ["5.7", "7.0", "5.6", "5.5", "5.4", "5.3", "5.2", "5.1", "5.0", "7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7"];
    $scope.modelArray1 = ["6.0", "6.3", "6.2", "6.7", "6.6", "6.5", "6.4", "6.1"];


    $scope.modelArray2 = ["4.0", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11", "4.12", "4.13", "4.14", "4.15", "4.16", "4.17", "4.18", "4.19"];

}