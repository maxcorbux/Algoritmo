const app = require("express")()
const consign = require("consign")
const db = require('./config/db')
const mongosee = null

app.db = db

consign()
    .then('./api/validation.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then("./config/routes.js")
    .into(app)

app.listen(4000, () => {
    console.log('backend executando')
});