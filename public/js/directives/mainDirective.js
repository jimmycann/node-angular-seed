export default ngModule => {

    if (ON_TEST) {
        require('./test/mainDirective.test');
    }

    ngModule.directive('mainDirective', function($log) {
        return {
            restrict: 'E',
            scope: {},
            template: require('./views/main.html'),
            controllerAs: 'vm',
            controller: function() {
                const vm = this;
                vm.greeting = 'Hello Webpack';
                $log.info('I have some info');
            }
        };
    });
};