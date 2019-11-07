let app = require("./config/custom-express")();
let uri = app.libs.config;
console.log(uri.uri());