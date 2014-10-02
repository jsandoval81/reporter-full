
angular.module( 'ngReporter.home', [
  'ui.router'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'partials/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
}])

/**
 * And of course we define a controller for our route.
 */
.controller('HomeCtrl', ['$scope', function HomeCtrl($scope) {

}])

;

