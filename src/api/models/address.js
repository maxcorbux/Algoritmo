let mongoose = require("mongoose");

module.exports = app => {
    let schema = mongoose.Schema({
        street: {
            type: String,
            require: true
        },
        streetNumber: {
            type: String,
            require: true
        },
        zipCode: {
            type: String,
            require: true
        },
        neighborhood: {
            type: String,
            require: true
        }
    });
    return mongoose.model("Address", schema);
}