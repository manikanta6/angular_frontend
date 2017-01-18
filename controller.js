 
'use strict'

var app=angular.module('learnapp',['ngRoute']);

 app.controller('senddata',function($scope,$location)
   {
     $http.get("http://localhost:3000/university").success(function(response){
      console.log(response);
      $scope.unives=response;
         $scope.data = {clg : $scope.unives[0].name};
      
     })
      $scope.data={
        fradd1:null,
        fradd2:null,
        frcity:null,
        frstate:null,
        toadd1:null,
        toadd2:null,
        tocity:null,
        tostate:null,

      }

       $scope.Submit= function() {
        console.log($scope.data);
        // console.log('http://localhost:3000/subjects/'+$scope.data.clg);

         //$scope.url = 'http://localhost:3000/subjects/'+$scope.data.clg;

        //myService.set($scope.url);
    
         window.location.href = '#success';
    
        }

   })
 