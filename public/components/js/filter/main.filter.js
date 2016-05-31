export default ngModule => {

    if(ON_TEST) {
        require('./test/main.filter.test');
    }

    angular.module('app')
        .filter('mainFilter', function() {
        return function(input, scope) {
            return true;
        };
    })
}