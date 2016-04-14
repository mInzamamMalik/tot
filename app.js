angular.module("myApp", ["ngMaterial","angular-sortable-view","ngMdIcons"])

.controller("appController",[ "$scope", "$mdDialog",  appController ]);


function appController($scope,$mdDialog){


    $scope.project = {

        Todo :["chiken tikka","tandoori chargha","malai boti"],
        Doing : [],
        Review : [  "nihaari","chicken karahi" , "ui design"],
        Done : [ ]
    };

}