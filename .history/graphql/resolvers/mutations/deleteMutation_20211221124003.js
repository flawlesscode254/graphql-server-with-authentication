const Post = require("../../../models/Post")

module.exports = {
    Mutation: {
        deletePost: (_, {postId}) => {
            const check = Post.findOne({
                id: postId
            })
            if (check) {
                query {
                    getPost(
                      postId: "61c19e60e2f4155b5af896c0"
                    ) {
                      id
                      username
                      email
                      body
                      createdAt
                    }
                  }query {
                    getPost(
                      postId: "61c19e60e2f4155b5af896c0"
                    ) {
                      id
                      username
                      email
                      body
                      createdAt
                    }
                  }
                return "Post was deleted"
            }
            throw new Error("Post was not found")
        }
    }
}