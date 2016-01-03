(function(){
    var app = angular.module('githubViewer',[]);

     var MainController = function($scope,$http){

     var onUserComplete = function(response){
         $scope.user = response.data;
     }
     
     $http.get("https://api.github.com/users/supercoja").then(onUserComplete);
     
     $scope.message = ' Angular JS';

     };
     
     app.controller('MainController',["$scope","$http",MainController]);
}());

