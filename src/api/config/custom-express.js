let express = require("express");
let consign = require("consign");
let mongodb = require("mongodb");

module.exports = function() {
    let app = express();
    consign()
        .include("models")
        .then('rotas')
        .then('libs')
        .then('persistencia')
        .into(app);

    return app;
}