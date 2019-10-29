module.exports = app => {
    const Pin = app.models.Locais;
    app.get("/pin", (req, resp) => {
        Pin.findAll({}, (Pin) => {
            resp.json({ Pin });
        });
    });
}