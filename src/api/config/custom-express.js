let express = require("express");
let consign = require("consign");

module.exports = function() {
    let app = express();
    consign()
        .include("models")
        .then('rotas')
        .then('libs')
        .into(app);

    return app;
}