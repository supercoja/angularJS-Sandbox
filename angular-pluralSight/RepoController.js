(function(){
     var app= angular.module("githubViewer");

     var RepoController = function($scope,github,$routeParams){
         
     var reponame = $routeParams.reponame;
     var username = $routeParams.username;

     var onUserComplete = function(data){
          $scope.user = data;
          github.getRepos($scope.user).then(onReposDetails, onError)
       };


     
       var onRepo = function(data)
       {
           $scope.reposlist = data;
       };
         
       var onError = function(reason){
          $scope.error = "Could Not Fetch Data";
       };

       $scope.username= $routeParams.username;
       github.getUser($scope.username).then(onUserComplete, onError);
   
     };
     
     app.controller("RepoController",RepoController);
})();