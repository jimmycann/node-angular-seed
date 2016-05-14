export default ngModule => {
    ngModule.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('base', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'mainController'
        });
        $locationProvider.html5Mode(true);

    });
}
