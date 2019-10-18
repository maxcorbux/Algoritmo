let express = require("express");
let consign = require("consign");

module.exports = function() {
    let app = express();
    consign().into(app);
    return app;
}