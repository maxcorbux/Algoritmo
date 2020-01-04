module.exports = app => {
    app.get("/users", (req, res) => {
        res.status(200).send("OK")
    })
}