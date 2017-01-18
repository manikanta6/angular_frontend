
'use strict'
var app=angular.module('learnapp',['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl:'home.html'

    })
     .when("/work",{
      templateUrl:'work.html'


    })
      .when("/order",{
      templateUrl:'order.html',
      controller:'senddata'

    })
       .when("/home",{
      templateUrl:'home.html'
    })
        .when("/success",{
      templateUrl:'success.html'
    })
  .otherwise("/");
})
  app.controller('senddata',function($scope,$location)
   {
     
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

