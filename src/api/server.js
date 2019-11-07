let app = require("./config/custom-express")();
let config = app.libs.config;

require("./persistencia/connectionFactory.js")(config.uri());