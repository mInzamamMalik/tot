angular.module("myApp", ["ngMaterial","angular-sortable-view"])

.controller("appController",[ "$scope" ,  appController ]);


function appController($scope){


    $scope.project = {

        Todo :["1.0", "2.5", "3.0", "4.1"],
        Doing : ["6.0", "7.5", "8.4", "9.1"],
        Review : [],
        Done : []

    };

}