// routing
angular.module('ProvokeApp').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({
    templateUrl: 'views/home.html',
    controller: 'HomeController as home'
  });
});
