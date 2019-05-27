var mongoose = require('mongoose');
var config = require('./index');
mongoose.Promise = global.Promise
module.exports = (app) => {
    //Init connection to the database
    mongoose.connect(config.getDbConnectionString(), { useMongoClient: true });
}