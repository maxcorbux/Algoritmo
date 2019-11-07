let express = require("express");
let consign = require("consign");
let mongodb = require("mongodb");
let mongoose = require("mongoose");

module.exports = function() {
    let app = express();
    consign()
        .include("models")
        .then('rotas')
        .then('libs')
        .into(app);

    return app;
}