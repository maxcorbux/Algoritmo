let express = require("express");
let consign = require("consign");
let session = require("express-session");
let passport = require("passport");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");

module.exports = function() {
    let app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(session({
        secret: "homem avestruz",
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    consign()
        .include("models")
        .then('rotas')
        .then('libs')
        .into(app);

    return app;
}