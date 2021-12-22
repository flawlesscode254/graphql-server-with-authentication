const Post = require("../../../models/Post")

module.exports = {
    Query: {
        getPosts: async () => {
            try {
                
            } catch (error) {
                
            }
            const get = await Post.find()
            return get
        }
    }
}