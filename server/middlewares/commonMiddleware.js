var toobusy = require('toobusy-js');

module.exports = (app) => {
    app.get('*', function (request, response) {
        response.send("API");
    });

    // middleware which blocks requests when we're too busy
    app.use(function (req, res, next) {
        if (toobusy()) {
            res.send(503, "API is busy, please try again later.");
        } else {
            next();
        }
    });
}