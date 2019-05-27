require("@babel/register");
require("@babel/polyfill");
return new Promise((resolve) => {
    require('./app')
})
