(function(){
    var app = angular.module('store',[]);

     app.controller('MainController',function($scope){
    
       var person = {
           firstName: "Frodo",
           lastName: "Baggins",
           imageSrc: "http://odetocode.com/Images/scott_allen_2.jpg"
       };

       $scope.message = ' Angular JS';
       $scope.person  = person;
     });
}());

