var app = angular.module('app',['ngResource','ngRoute']);
angular.module('app').config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.when('/',{templateUrl: '/partials/main/main',controller: 'mvMainCtrl'});
    $routeProvider.when('/profile',{templateUrl: '/partials/profile',controller: 'profile',controllerAs: 'profile'});
});

app.controller('profile',function(){
    this.name = 'Anand Mutyala';
    this.profession = 'Interactive Developer';
});