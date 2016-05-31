'use strict';

export default mainModule => {
    
    if (ON_TEST) {
        require('./test/main.directive.test');
    }

    angular.module('app.main')
        .directive('mainDirective', mainDirective);

    mainDirective.$inject = ['$log'];

    function mainDirective($log) {
        return {
            restrict: 'EA',
            scope: {},
            template: require('./views/main.html'),
            controllerAs: 'vm',
            bindToController: true,
            controller: function() {
                let vm = this;
                vm.greeting = 'Hello Webpack';
                $log.info('I have some info');
            }
        };
    }
};