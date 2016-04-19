angular.module("myApp", ["ngMaterial","angular-sortable-view"])

.controller("appController",[ "$scope",  app ]);


function app($scope){

    $scope.project = {
        Todo :[],
        Doing : [],
        Review : [],
        Done : []
    };

    var ref = new Firebase("https://teamofteam.firebaseio.com/projects");

    //when a data is added
    ref.child("projectId1234").child("Todo").on("child_added",function(snap){
        //console.log(snap.key(), snap.val());
        var temp = {};
        temp.key = snap.key();
        temp.value = snap.val();

        $scope.project.Todo.push(temp);
        $scope.$apply();
    });

    //when a data is removed
    ref.child("projectId1234").child("Todo").on("child_removed",function(snap){

        for(i=0; i<$scope.project.Todo.length; i++){
            if($scope.project.Todo[i].key == snap.key()){
                $scope.project.Todo.splice(i,1);
                console.log("delete executed");
                break;
            }
        }
        $scope.$digest();
    });

    //when removed an item form local list any source or library
    $scope.$watch("project.Todo", function (newValue, oldValue) {

        if(!oldValue.length){ // it means array is already empty
            //alert(oldValue.length);
            //return;
        }else if(!newValue.length){ // it means array mai aik he element tha or ab array empty ho chuka ahi

            $scope.delete(oldValue[0].key); // also delete from firebase

        }else if(newValue.length < oldValue.length){ // an index is deleted from this list
            for(i=0; i< oldValue.length; i++){

                if(newValue[i].key !=  oldValue[i].key){
                    console.log( oldValue[i]," is deleted");
                    $scope.delete(oldValue[i].key); // also delete from firebase
                    break;
                }
            }
        }



        }, true // Object equality (not just reference).
    );

    //
    //ref.child("projectId1234").child("Doing").on("child_added",function(val){
    //
    //
    //});
    //ref.child("projectId1234").child("Review").on("child_added",function(val){
    //
    //
    //});
    //ref.child("projectId1234").child("Done").on("child_added",function(val){
    //
    //
    //});


     //add a task to firebase "not to local array"
     $scope.addNewTask = function(newTask){

        ref.child("projectId1234").child("Todo").push(newTask);
        $scope.newTask = "";
     };

     //remove a task from firebase "not from local array"
     $scope.delete = function(key){
        ref.child("projectId1234").child("Todo").child(key).set(null);
     };

}