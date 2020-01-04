const app = require("express")()
const consign = require("consign")
const db = null
const mongosee = null

consign()
    .then("./config")
    .into(app)

app.listen(4000, () => {
    console.log('backend executando')
});