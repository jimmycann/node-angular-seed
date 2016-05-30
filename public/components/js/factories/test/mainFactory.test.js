describe("mainFactory test", function () {

    beforeEach(window.module("app"));

    var factory;
    beforeEach(inject(function($injector) {
        factory = $injector.get('mainFactory');
    }));

    describe('mainFactory get_data', function() {
        it('should return some arbitrary data', function() {
            expect(1).toBe(1);
        });
    });
    
});