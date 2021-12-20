const {model, Schema} = require("mongoose")

const postSchema = new Schema({
    username: String,
    email: String,
})