angular.module( 'ngReporter', [
    'ngReporter.home',
    'ngReporter.reports',
    'ngReporter.about',
    'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
}])

.run(function run() {
})

.controller('AppCtrl', ['$scope', '$location', function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | Reporter' ;
        }
    });
}])

.controller('NavbarCtrl', ['$scope', '$location', function NavbarCtrl($scope, $location) {
    $scope.navMenuObj = [
        {
            routeSREF: 'home',
            display:   'Home'
        },
        {
            routeSREF: 'reports',
            display:   'Reports'
        },
        {
            routeSREF: 'about',
            display:   'About'
        }
    ];
    $scope.isActive = function (viewLocation) { 
        return $location.path().indexOf(viewLocation) === 0;
    };
    $scope.isActiveTopLevel = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}])

;

