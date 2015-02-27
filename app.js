var beatDown = angular.module('beatDown', ['ui.router']);

beatDown.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

});
