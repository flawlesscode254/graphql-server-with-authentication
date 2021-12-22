const {model, Schema} = require("mongoose")

const postSchema = new Schema({
    username: String,
    email: String,
    body: String,
    comments: [
        {
            body: String,
            username: String,
            email: String
        }
    ],
    likes: [
        {
            username: String,
            
        }
    ]
})

module.exports = model("postModel", postSchema)