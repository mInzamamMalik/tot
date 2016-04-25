/**
 * Created by 205 on 4/23/2016.
 */


var app = angular.module("myApp")

.service("mainService",function($state){

    var ref = new Firebase("https://teamofteam.firebaseio.com");


    function authDataCallback(authData) {
        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
            $state.go("home");
        } else {
            console.log("User is logged out");
            $state.go("login");
        }
    }
    ref.onAuth(authDataCallback);


});