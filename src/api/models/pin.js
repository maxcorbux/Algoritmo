let mongoose = require("mongoose");

module.exports = app => {
    let schema = mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        email: {
            type: String
        },
        phone: {
            type: String
        },
        desciption: {
            type: String,
            require: true
        },
        link1: {
            type: String
        },
        link2: {
            type: String
        },
        link3: {
            type: String
        },
        image: {
            type: String
        },
        category: {
            type: [String]
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            require: true
        }
    });
    return mongoose.model("Pin", schema);
};