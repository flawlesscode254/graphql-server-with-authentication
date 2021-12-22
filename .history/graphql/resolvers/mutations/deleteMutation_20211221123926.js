const Post = require("../../../models/Post")

module.exports = {
    Mutation: {
        deletePost: (_, {postId}) => {
            const check = Post.findOne({
                id: postId
            })
            if (check) {
                check.delete()
                return "Post was deleted"
            }
            throw new Error("Post was not found")
        }
    }
}