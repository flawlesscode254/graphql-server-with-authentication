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
            email: String
        }
    ],
    user: {
        type: 
    }
})

module.exports = model("postModel", postSchema)