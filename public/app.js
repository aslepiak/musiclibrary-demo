var app = angular.module('musicLibrary', ['spinnerDirective', 'ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/albums", {
        templateUrl : "views/albums.html",
        controller: "albumsController"
    })
    .otherwise("/", {
        templateUrl : "views/home.html"
    });
});
