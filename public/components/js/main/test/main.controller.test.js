describe("mainController test", function () {

    beforeEach(window.module("app.main"));

    var main, scope;
    beforeEach(inject(function($controller,$rootScope) {
        scope=$rootScope.$new();
        //To comply with controllerAs syntax
        main = $controller('MainController');
    }));

    it('scope hey should say hello', function() {
        expect(main.hey).toBe('hello');
    });
    
});