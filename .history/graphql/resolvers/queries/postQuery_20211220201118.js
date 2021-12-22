const Post = require("../../../models/Post")

module.exports = {
    Query: {
        getPost: async (postId) => {
            const check = await Post.findById(postId)
            if (check) {
                return check
            }
            else {

            }
        }
    }
}