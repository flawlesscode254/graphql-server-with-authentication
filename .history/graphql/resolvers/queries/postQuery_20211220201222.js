const Post = require("../../../models/Post")

module.exports = {
    Query: {
        getPost: async (postId) => {
            try {
                
            } catch (error) {
                
            }
            const check = await Post.findById(postId)
            if (check) {
                return check
            }
            else {
                throw new Error("Post not found")
            }
        }
    }
}