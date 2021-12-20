const {model, Schema} = require("mongoose")

const postSchema = new Schema({
    username: String,
    email: String
})

module.exports = model("postModel")