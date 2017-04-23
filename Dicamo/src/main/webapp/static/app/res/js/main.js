var dicamoApp = angular.module('dicamoApp', ['ngRoute']);

dicamoApp.controller('IndexController', function ($scope, $http) {
    jQuery('.carousel.carousel-slider').carousel({full_width:true, indicators: true, time_constant: 300});

});

dicamoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/static/app/html/partial/home.html',
            controller: 'IndexController'
        })
        .when('/about', {
            templateUrl : '/static/app/html/partial/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);