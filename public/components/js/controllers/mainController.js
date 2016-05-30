export default ngModule => {

    if(ON_TEST) {
        require('./test/mainController.test');
    }

    ngModule.controller('mainController', ['$scope',
        function ($scope) {
            $scope.hey='hello';
        }]);
}