angular.module( 'ngReporter.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'partials/about.tpl.html'
      }
    },
    data:{ pageTitle: 'About' }
  });
}])

.controller('AboutCtrl', ['$scope', function AboutCtrl($scope) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
}])

;
