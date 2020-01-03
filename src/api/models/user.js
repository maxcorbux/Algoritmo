let mongoose = require("mongoose");

module.exports = app => {
    let schema = mongoose.Schema({
        firstName: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            require: true
        },
        category: {
            type: [String]
        },
        isValid: {
            type: Boolean
        },
        registrationDate: {
            type: Date
        },
        pin: {
            type: [String],
            ref: "Pin"
        }
    })
    return mongoose.model("User", schema)
}