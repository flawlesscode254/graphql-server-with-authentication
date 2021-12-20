const Post = require("../../models/Post")

module.exports = {
    Query: {
        getPosts: async () => {
            const get = await Post.find()
            return get
        }
    }
}