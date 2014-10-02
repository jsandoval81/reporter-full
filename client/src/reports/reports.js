angular.module( 'ngReporter.reports', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('reports', {
    url: '/reports',
    views: {
      "main": {
        controller: 'ReportsCtrl',
        templateUrl: 'partials/reports.tpl.html'
      }
    },
    data:{ pageTitle: 'Reports Menu' }
  });
}])

.controller('ReportsCtrl', ['$scope', function CustomCtrl($scope) {
  $scope.selectionItems = [
    { "value": "choice1", "display": "This is Choice 1" },
    { "value": "choice2", "display": "This is Choice 2" },
    { "value": "choice3", "display": "This is Choice 3" }
  ];
}])

;
