export default ngModule => {

    if (ON_TEST) {
        require('./test/mainService.test');
    }

    ngModule.service('mainService', function () {
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
    });
};