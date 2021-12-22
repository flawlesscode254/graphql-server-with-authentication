const Post = require("../../../models/Post")

module.exports = {
    Mutation: {
        deletePost: async (_, {postId}, context) => {
            const check = Post.findOne({
                id: postId
            })
            if (check) {
                await check.deleteOne()
                return "Post was deleted"
            }
            throw new Error("Post was not found")
        }
    }
}