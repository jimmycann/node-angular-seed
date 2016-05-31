export default ngModule => {
    angular.module('app')
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('base', {
            url: '/',
            templateUrl: 'components/view/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        });
        $locationProvider.html5Mode(true);
        
    });
}
