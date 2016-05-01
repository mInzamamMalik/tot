/**
 * Created by 205 on 4/23/2016.
 */


var app = angular.module("home", []);

app.controller("homeController", ["$scope", "$state", "mainService", homeController]);


function homeController($scope, $state, mainService) {

    var ref = new Firebase("https://teamofteam.firebaseio.com");

    $scope.userName = ref.getAuth();

    var projectRef = ref.child("projects").child("projectId1234");


    $scope.project = {
        Todo: [],
        Doing: [],
        Review: [],
        Done: []
    };


    var arg = "Todo";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //when a data is added
    projectRef.child(arg).on("child_added", function (snap) {

        var notFound = true;
        for (i = 0; i < $scope.project[arg].length; i++) { // checking if the the comming element is already not exist in local array
            if ($scope.project[arg][i].key == snap.key()) {
                notFound = false;
                break;
            }
        }
        if (notFound) {
            var temp = {
                key: snap.key(),
                value: snap.val()
            };
            $scope.project[arg].push(temp);
            $scope.$apply();
        }
    });

    //when a data is changed
    projectRef.child(arg).on("child_changed", function (snap) {

        for (i = 0; i < $scope.project[arg].length; i++) { // checking if the the comming element is already not exist in local array
            if ($scope.project[arg][i].key == snap.key()) {

                $scope.project[arg][i].value = snap.val();
                $scope.$apply();
                break;
            }
        }
    });

    //when a data is removed
    projectRef.child(arg).on("child_removed", function (snap) {

        for (i = 0; i < $scope.project.Todo.length; i++) {
            if ($scope.project.Todo[i].key == snap.key()) {
                $scope.project.Todo.splice(i, 1);
                $scope.$apply();
                break;
            }
        }
    });

    //when removed an item form local list any source or library
    $scope.$watch("project." + arg, function (newValue, oldValue) {

            $scope.sense(newValue, oldValue, arg)

        }, true // Object equality (not just projectReference).
    );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







    //add a task to firebase "not to local array"
    $scope.addNewTask = function (newTask) {
        projectRef.child("Todo").push(newTask);
        $scope.newTask = {};
    };

    //add a task to firebase "not to local array"
    $scope.add = function (newTaskObject, state) {

        projectRef.child(state).child(newTaskObject.key).set(newTaskObject.value);
        $scope.newTask = {};
    };

    //remove a task from firebase "not from local array"
    $scope.delete = function (key, state) {
        projectRef.child(state).child(key).set(null);
    };

    $scope.logout = function () {
        ref.unauth();
    };


    $scope.sense = function (newValue, oldValue, state) {
        console.log("yes");
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        if (typeof newValue == "undefined" && typeof oldValue != "undefined") { // it means array mai aik he element tha or ab array empty ho chuka ahi

            $scope.delete(oldValue[0].key, state); // also delete from firebase

        } else if (newValue.length < oldValue.length) { // an index is deleted from this list

            var notFound = true;
            for (i = 0; i < newValue.length; i++) {

                if (newValue[i].key != oldValue[i].key) {

                    $scope.delete(oldValue[i].key, state); // also delete from firebase
                    notFound = false;
                    break;
                }
            }
            if (notFound) $scope.delete(oldValue[oldValue.length - 1].key, state);
        } else
        ///////////////////////////////////////////////////////////////////////////////////////////
        if (oldValue.length == 0 && newValue.length != 0) { // it means array was empty but now a value is added
            $scope.add(newValue[0], state);

        } else if (oldValue.length < newValue.length) { // an index is added in this list

            notFound = true;
            for (i = 0; i < oldValue.length; i++) {

                if (newValue[i].key != oldValue[i].key) {
                    $scope.add(newValue[i], state); // also add to firebase
                    notFound = false;
                    break;
                }
            }
            if (notFound) $scope.add(newValue[newValue.length - 1], state);
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////
    }


}