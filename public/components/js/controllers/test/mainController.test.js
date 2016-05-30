describe("mainController test", function () {

    beforeEach(window.module("app"));

    var mainController, scope;
    beforeEach(inject(function($controller,$rootScope) {
        scope=$rootScope.$new();
        mainController = $controller('mainController', {
            $scope: scope
        });
    }));

    it('scope hey should say hello', function() {
        expect(scope.hey).toBe('hello');
    });
    
});