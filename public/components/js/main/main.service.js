'use strict';

export default mainModule => {
    
    if (ON_TEST) {
        require('./test/main.service.test');
    }

    angular.module('app.main')
        .service('mainService', mainService);
            
    function mainService() {
        let data = undefined;

        return {
            reset: function () {
                data = undefined;
            },
            getData: function () {
                return data;
            },
            setData: function (value) {
                data = value;
            }
        }
    }
};