const { UserInputError } = require("apollo-server")

const Post = require("../../../models/Post")
const checkAuth = require("../../../validators/checkAuth")

module.exports = {
    Mutation: {
        createComment: async (_, { postId, body}, context) => {
            const { email, username } = checkAuth(context)
            if (body.trim() === "") {
                throw new UserInputError("Empty comment", {
                    errors: {
                        comment: "Comment must not be empty!!"
                    }
                })
            }
            const post = await Post.findById(postId)
            if (post) {
                post.comments.unshift({
                    body,
                    email,
                    username
                })
                await post.save()
                context.pubsub.publish("NEW_POST", {
                    newPost: post
                  })
                return post
            }
            else {
                throw new UserInputError("Post was not found")
            }
        }
    }
}