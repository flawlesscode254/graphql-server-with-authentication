const Post = require("../../../models/Post")
const checkAuth = require("../../../validators/checkAuth")

module.exports = {
    Mutation: {
        deletePost: async (_, {postId}, context) => {
            const user = chec
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