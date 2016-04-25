/**
 * Created by 205 on 4/23/2016.
 */


var app = angular.module("home", []);

app.controller("homeController", ["$scope", "$state", "mainService", homeController]);


function homeController($scope, $state, mainService) {

    var ref = new Firebase("https://teamofteam.firebaseio.com");

    $scope.userName = ref.getAuth();

    var projectRef = ref.child("projects");


    $scope.project = {
        Todo: [],
        Doing: [],
        Review: [],
        Done: []
    };


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //when a data is added
    projectRef.child("projectId1234").child("Todo").on("child_added", function (snap) {
        //console.log(snap.key(), snap.val());
        var notFound = true;

        for (i = 0; i < $scope.project.Todo.length; i++) { // checking if the the comming element is already not exist in local array
            if ($scope.project.Todo[i].key == snap.key()) {

                if ($scope.project.Todo[i].value != snap.val()) {
                    $scope.project.Todo[i].value = snap.val();
                }
                notFound = false;
                return;
            }
        }
        if (notFound) {
            var temp = {};
            temp.key = snap.key();
            temp.value = snap.val();

            $scope.project.Todo.push(temp);
            $scope.$apply();
        }
    });

    //when a data is removed
    projectRef.child("projectId1234").child("Todo").on("child_removed", function (snap) {

        for (i = 0; i < $scope.project.Todo.length; i++) {
            if ($scope.project.Todo[i].key == snap.key()) {
                $scope.project.Todo.splice(i, 1);
                console.log("delete executed");
                break;
            }
        }
        $scope.$digest();
    });

    //when removed an item form local list any source or library
    $scope.$watch("project.Todo", function (newValue, oldValue) {
            console.log("this is executed", newValue, oldValue);

            if (newValue.length < oldValue.length) { //if an item is removed from array

                if (!oldValue.length) { // it means array is already empty
                    //alert(oldValue.length);
                    //return;
                } else if (!newValue.length) { // it means array mai aik he element tha or ab array empty ho chuka ahi

                    console.log(oldValue[0], " is deleted");
                    $scope.delete(oldValue[0].key, "Todo"); // also delete from firebase

                } else if (newValue.length < oldValue.length) { // an index is deleted from this list
                    for (i = 0; i < oldValue.length; i++) {

                        if (newValue[i].key != oldValue[i].key) {
                            console.log(oldValue[i], " is deleted");
                            $scope.delete(oldValue[i].key, "Todo"); // also delete from firebase
                            break;
                        }
                    }
                }

            } else if (oldValue.length < newValue.length) {

                if (!oldValue.length) { // it means array was empty but now a value is added
                    $scope.add(newValue[0], "Todo");
                } else {
                    for (i = 0; i < newValue.length; i++) {

                        if (newValue[i].key != oldValue[i].key) {
                            console.log(newValue[i], " is added");
                            $scope.add(newValue[i], "Todo"); // also add to firebase
                            break;
                        }
                    }
                }
            }
        }, true // Object equality (not just projectReference).
    );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //when a data is added
    projectRef.child("projectId1234").child("Doing").on("child_added", function (snap) {
        //console.log(snap.key(), snap.val());
        var notFound = true;

        for (i = 0; i < $scope.project.Doing.length; i++) { // checking if the the comming element is already not exist in local array
            if ($scope.project.Doing[i].key == snap.key()) {

                if ($scope.project.Doing[i].value != snap.val()) {
                    $scope.project.Doing[i].value = snap.val();
                }
                notFound = false;
                return;

            }
        }
        if (notFound) {
            var temp = {};
            temp.key = snap.key();
            temp.value = snap.val();

            $scope.project.Doing.push(temp);
            $scope.$apply();
        }
    });

    //when a data is removed
    projectRef.child("projectId1234").child("Doing").on("child_removed", function (snap) {

        for (i = 0; i < $scope.project.Doing.length; i++) {
            if ($scope.project.Doing[i].key == snap.key()) {
                $scope.project.Doing.splice(i, 1);
                console.log("delete executed");
                break;
            }
        }
        $scope.$digest();
    });

    //when removed an item form local list any source or library
    $scope.$watch("project.Doing", function (newValue, oldValue) {
            console.log("this is executed", newValue, oldValue);

            if (newValue.length < oldValue.length) { //if an item is removed from array

                if (!oldValue.length) { // it means array is already empty
                    //alert(oldValue.length);
                    //return;
                } else if (!newValue.length) { // it means array mai aik he element tha or ab array empty ho chuka ahi

                    console.log(oldValue[0], " is deleted");
                    $scope.delete(oldValue[0].key, "Doing"); // also delete from firebase

                } else if (newValue.length < oldValue.length) { // an index is deleted from this list
                    for (i = 0; i < oldValue.length; i++) {

                        if (newValue[i].key != oldValue[i].key) {
                            console.log(oldValue[i], " is deleted");
                            $scope.delete(oldValue[i].key, "Doing"); // also delete from firebase
                            break;
                        }
                    }
                }

            } else if (oldValue.length < newValue.length) {

                if (!oldValue.length) { // it means array was empty but now a value is added
                    $scope.add(newValue[0], "Doing");
                } else {
                    for (i = 0; i < newValue.length; i++) {

                        if (newValue[i].key != oldValue[i].key) {
                            console.log(newValue[i], " is added");
                            $scope.add(newValue[i], "Doing"); // also add to firebase
                            break;
                        }
                    }
                }
            }
        }, true // Object equality (not just projectReference).
    );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //when a data is added
    projectRef.child("projectId1234").child("Review").on("child_added", function (snap) {
        //console.log(snap.key(), snap.val());
        var notFound = true;

        for (i = 0; i < $scope.project.Review.length; i++) { // checking if the the comming element is already not exist in local array
            if ($scope.project.Review[i].key == snap.key()) {

                if ($scope.project.Review[i].value != snap.val()) {
                    $scope.project.Review[i].value = snap.val();
                }
                notFound = false;
                return;

            }
        }
        if (notFound) {
            var temp = {};
            temp.key = snap.key();
            temp.value = snap.val();

            $scope.project.Review.push(temp);
            $scope.$apply();
        }
    });

    //when a data is removed
    projectRef.child("projectId1234").child("Review").on("child_removed", function (snap) {

        for (i = 0; i < $scope.project.Review.length; i++) {
            if ($scope.project.Review[i].key == snap.key()) {
                $scope.project.Review.splice(i, 1);
                console.log("delete executed");
                break;
            }
        }
        $scope.$digest();
    });

    //when removed an item form local list any source or library
    $scope.$watch("project.Review", function (newValue, oldValue) {
            console.log("this is executed", newValue, oldValue);

            if (newValue.length < oldValue.length) { //if an item is removed from array

                if (!oldValue.length) { // it means array is already empty
                    //alert(oldValue.length);
                    //return;
                } else if (!newValue.length) { // it means array mai aik he element tha or ab array empty ho chuka ahi

                    console.log(oldValue[0], " is deleted");
                    $scope.delete(oldValue[0].key, "Review"); // also delete from firebase

                } else if (newValue.length < oldValue.length) { // an index is deleted from this list
                    for (i = 0; i < oldValue.length; i++) {

                        if (newValue[i].key != oldValue[i].key) {
                            console.log(oldValue[i], " is deleted");
                            $scope.delete(oldValue[i].key, "Review"); // also delete from firebase
                            break;
                        }
                    }
                }

            } else if (oldValue.length < newValue.length) {

                if (!oldValue.length) { // it means array was empty but now a value is added
                    $scope.add(newValue[0], "Review");
                } else {
                    for (i = 0; i < newValue.length; i++) {

                        if (newValue[i].key != oldValue[i].key) {
                            console.log(newValue[i], " is added");
                            $scope.add(newValue[i], "Review"); // also add to firebase
                            break;
                        }
                    }
                }
            }
        }, true // Object equality (not just projectReference).
    );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //when a data is added
    projectRef.child("projectId1234").child("Done").on("child_added", function (snap) {
        //console.log(snap.key(), snap.val());
        var notFound = true;

        for (i = 0; i < $scope.project.Done.length; i++) { // checking if the the comming element is already not exist in local array
            if ($scope.project.Done[i].key == snap.key()) {

                if ($scope.project.Done[i].value != snap.val()) {
                    $scope.project.Done[i].value = snap.val();
                }
                notFound = false;
                return;

            }
        }
        if (notFound) {
            var temp = {};
            temp.key = snap.key();
            temp.value = snap.val();

            $scope.project.Done.push(temp);
            $scope.$apply();
        }
    });

    //when a data is removed
    projectRef.child("projectId1234").child("Done").on("child_removed", function (snap) {

        for (i = 0; i < $scope.project.Done.length; i++) {
            if ($scope.project.Done[i].key == snap.key()) {
                $scope.project.Done.splice(i, 1);
                console.log("delete executed");
                break;
            }
        }
        $scope.$digest();
    });

    //when removed an item form local list any source or library
    $scope.$watch("project.Done", function (newValue, oldValue) {
            console.log("this is executed", newValue, oldValue);

            if (newValue.length < oldValue.length) { //if an item is removed from array

                if (!oldValue.length) { // it means array is already empty
                    //alert(oldValue.length);
                    //return;
                } else if (!newValue.length) { // it means array mai aik he element tha or ab array empty ho chuka ahi

                    console.log(oldValue[0], " is deleted");
                    $scope.delete(oldValue[0].key, "Done"); // also delete from firebase

                } else if (newValue.length < oldValue.length) { // an index is deleted from this list
                    for (i = 0; i < oldValue.length; i++) {

                        if (newValue[i].key != oldValue[i].key) {
                            console.log(oldValue[i], " is deleted");
                            $scope.delete(oldValue[i].key, "Done"); // also delete from firebase
                            break;
                        }
                    }
                }

            } else if (oldValue.length < newValue.length) {

                if (!oldValue.length) { // it means array was empty but now a value is added
                    $scope.add(newValue[0], "Done");
                } else {
                    for (i = 0; i < newValue.length; i++) {

                        if (newValue[i].key != oldValue[i].key) {
                            console.log(newValue[i], " is added");
                            $scope.add(newValue[i], "Done"); // also add to firebase
                            break;
                        }
                    }
                }
            }
        }, true // Object equality (not just projectReference).
    );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //
    //projectRef.child("projectId1234").child("Doing").on("child_added",function(val){
    //
    //
    //});
    //projectRef.child("projectId1234").child("Review").on("child_added",function(val){
    //
    //
    //});
    //projectRef.child("projectId1234").child("Done").on("child_added",function(val){
    //
    //
    //});


    //add a task to firebase "not to local array"
    $scope.addNewTask = function (newTask) {
        projectRef.child("projectId1234").child("Todo").push(newTask);
        $scope.newTask = "";
    };

    $scope.add = function (newTaskObject, state) {

        console.log(newTaskObject);
        projectRef.child("projectId1234").child(state).child(newTaskObject.key).set(newTaskObject.value);
        $scope.newTask = "";
    };

    //remove a task from firebase "not from local array"
    $scope.delete = function (key, state) {
        projectRef.child("projectId1234").child(state).child(key).set(null);
    };


    $scope.logout = function(){
        ref.unauth();
    }

}