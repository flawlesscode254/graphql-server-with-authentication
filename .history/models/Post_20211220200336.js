const {model, Schema} = require("mongoose")

const postSchema = new Schema({
    username: String,
    email: String,
    body: String,
    comments: [
        {
            body: String,
            username: Strin
        }
    ]
})

module.exports = model("postModel", postSchema)