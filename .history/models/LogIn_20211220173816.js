const {model, Schema} = require("mongoose")

const registerSchema = new Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword: String
})

module.exports = model