module.exports = function (router) {
    // Set our main route - All traffic set to receive /public/index.html
    router.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
}