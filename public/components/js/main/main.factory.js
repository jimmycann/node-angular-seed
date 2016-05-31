'use strict';

export default mainModule => {
    
    if (ON_TEST) {
        require('./test/main.factory.test');
    }

    angular.module('app.main')
        .factory('mainFactory', mainFactory);
            
    mainFactory.$inject = ['$http'];
    
    function mainFactory($http) {
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
    }
    
}