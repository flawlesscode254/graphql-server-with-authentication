const Post = require("../../../models/Post")

module.exports = {
    Mutation: {
        deletePost: (_, {postId}) => {
            const check = Post.findOne({
                id: postId
            })
            if (check) {
                Post.dele
            }
        }
    }
}