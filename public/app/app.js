var app = angular.module('app',['ngResource','ngRoute']);
angular.module('app').config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.when('/',{templateUrl: '/partials/main',controller: 'mainCtrl'});
    $routeProvider.when('/profile',{templateUrl: '/partials/profile',controller: 'profile',controllerAs: 'profile'});
});

app.controller('mainCtrl',function($scope){
    $scope.frameworkName = "Angular";
});

app.controller('profile',function(){
    this.name = 'Anand Mutyala';
    this.profession = 'Interactive Developer';
});