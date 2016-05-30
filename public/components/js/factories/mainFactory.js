export default ngModule => {

    if (ON_TEST) {
        require('./test/mainFactory.test');
    }
    
    ngModule.factory('mainFactory', ['$http', function ($http) {
        const get_data = function(data) {
            return $http({
                method: 'POST',
                data : data,
                url: 'tba'
            });
        };
        return {
            get_data: get_data
        }
    }]);
}