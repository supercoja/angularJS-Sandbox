(function(){
    var app = angular.module('githubViewer',[]);

     var MainController = function($scope,$http,$interval,$log){

     var onUserComplete = function(response){
         $scope.user = response.data;
         $http.get($scope.user.repos_url)
         .then(onRepos, onError)
     };
     
     var onRepos = function(response)
     {
         $scope.repos = response.data;
     };
     
         
     var onError = function(reason){
         $scope.error = "Could Not Fetch Data";
     };
         
     var decrementCountdown = function(){
         $scope.countdown -=1;
         if ($scope.countdown < 1)
             {
                 $scope.search($scope.username);
             }
     };
     
     $scope.search = function(username)
     {
         $log.info("Searching for " + username);
         $http.get("https://api.github.com/users/" + $scope.username).then(onUserComplete, onError); 
         if(countdownInterval){
             $interval.cancel(countdownInterval);
             $scope.countdown = null;
         }
     };
     
     var countdownInterval = null;
     var startCountDown = function(){
           countdownInterval = $interval(decrementCountdown,1000,$scope.countdown);
             
     };

     $scope.username= "angular";
     $scope.message = " GitHub Viewer";
     $scope.repoSortOrder = "-stargazers_count";
     $scope.countdown = 5;
     startCountDown()

     };

     app.controller('MainController',MainController);

}());

