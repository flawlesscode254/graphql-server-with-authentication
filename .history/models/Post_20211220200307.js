const {model, Schema} = require("mongoose")

const postSchema = new Schema({
    username: String,
    email: String,
    body
})

module.exports = model("postModel", postSchema)