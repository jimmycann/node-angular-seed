export default ngModule => {

    if(ON_TEST) {
        require('./test/mainFilter.test');
    }

    ngModule.filter('mainFilter', function() {
        return function(input, scope) {
            return true;
        };
    })
}