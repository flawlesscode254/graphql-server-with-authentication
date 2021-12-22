const {model, Schema} = require("mongoose")

const registerSchema = new Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword: String
}, {
    timestamps: true
})

module.exports = model("user", registerSchema)