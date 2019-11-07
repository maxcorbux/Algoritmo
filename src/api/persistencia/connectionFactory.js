let mongoose = require("mongoose");
mongoose.set("debug", true);

module.exports = function(uri) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on("connected", () => {
        console.log("Conectado em " + uri);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("Desconectado de " + uri)
    });
    mongoose.connection.on("error", (erro) => {
        console.log(erro);
    });
    process.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("Mongoose, desconectado!")
        });
        process.exit(0);
    });
}