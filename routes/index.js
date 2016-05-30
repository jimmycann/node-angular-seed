var mainRoutes = require('./main');

module.exports = function (app, router) {
    mainRoutes(router);
    app.use('/',router);
};