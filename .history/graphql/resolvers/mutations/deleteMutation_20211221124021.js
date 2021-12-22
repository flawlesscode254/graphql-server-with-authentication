const Post = require("../../../models/Post")

module.exports = {
    Mutation: {
        deletePost: async (_, {postId}) => {
            const check = Post.findOne({
                id: postId
            })
            if (check) {
                check.deleteOne()
                return "Post was deleted"
            }
            throw new Error("Post was not found")
        }
    }
}