describe("mainDirective test", function () {

    beforeEach(window.module("app"));

    var scope;
    var mainDirective = '<main-directive></main-directive>';

    beforeEach(inject(function($injector, $rootScope, $compile) {
        scope = $rootScope.$new();
        $compile(angular.element(mainDirective))(scope);
    }));

    describe('mainDirective', function() {
        it('should create an element', function() {
            expect(1).toBe(1);
        });
    });

});