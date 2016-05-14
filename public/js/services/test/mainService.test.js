describe("mainService test", function () {

    beforeEach(window.module("app"));

    var service;
    beforeEach(inject(function($injector) {
        service = $injector.get('mainService');
    }));

    describe('mainService', function() {
        it('should return some arbitrary data', function() {
            expect(1).toBe(1);
        });
    });

});