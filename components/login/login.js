/**
 * Created by 205 on 4/23/2016.
 */

var app = angular.module("login",[]);

app.controller("loginController",function($scope,mainService){

    var ref = new Firebase("https://teamofteam.firebaseio.com");

    $scope.userName = "";
    $scope.message = "";

    $scope.showHints = true;
    $scope.signup = function(signupData){
        ref.createUser({
            email    : signupData.email,
            password : signupData.password
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
                $scope.message = "Error creating user already exist";
                $scope.$apply();

            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                $scope.message = "Successfully created user account";
                $scope.$apply();
            }
        });
    };

    $scope.login = function(loginData){

        ref.authWithPassword({
            email    : loginData.email,
            password : loginData.password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
                $scope.message = "Login Failed!" + error;
                $scope.$apply();

            } else {
                console.log("Authenticated successfully with payload:", authData);
                $scope.message = "Authenticated successfully";
                $scope.$apply();
            }
        });
    };
});
