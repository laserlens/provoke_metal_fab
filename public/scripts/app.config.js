// routing
angular.module('ProvokeApp').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactController as contact'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutController as about'
  }).when('/quote', {
    templateUrl: 'views/quote.html',
    controller: 'QuoteController as quote'
  }).otherwise({
    templateUrl: 'views/home.html',
    controller: 'HomeController as home'
  });
});
