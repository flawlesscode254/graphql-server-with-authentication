const Post = require("../../../models/Post")

module.exports = {
    Query: {
        getPost: async (postId) => {
            const check = await Post.findOne({
                _id: postId
            })
            if (check) {
                return check
            }
            else {
                
            }
        }
    }
}