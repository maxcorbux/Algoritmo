module.exports = function(app) {
    app.get("/teste", (req, resp) => {
        resp.send("OK!");
    });
}