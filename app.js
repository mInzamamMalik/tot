angular.module("myApp", ["ngMaterial","angular-sortable-view"])

.controller("appController",[ "$scope" ,  appController ]);


function appController($scope){


    $scope.project = {

        Todo : [],
        Doing : [],
        Review : [],
        Done : []

    };


    $scope.modelArray1 = ["6.0", "6.5", "6.4", "6.1"];
    $scope.modelArray2 = ["4.0", "4.1", "4.2", "4.3"];

}