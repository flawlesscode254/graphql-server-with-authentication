const {AuthenticationError, UserInputError} = require("apollo-server")

const Post = require("../../../models/Post")
const checkAuth = require("../../../validators/checkAuth")

module.exports = {
    Mutation: {
        deleteComment: async (_, { postId, commentId }, context) => {
            const { email } = checkAuth(context)
            const post = await Post.findById(postId)

            if (post) {
                const commentIndex = post.comments.findIndex(c => c.id === commentId)
                if (post.comments[commentIndex].email === email) {
                    post.comments.splice(commentIndex, 1)
                    await post.save()
                    context.pubsub.publish("NEW_POST", {
                        newPost: post
                      })
                    return post
                }
                else {
                    throw new AuthenticationError("Action not allowed!!")
                }  
            }
            else {
                throw new UserInputError("Post was not found!!")
            }
        }
    }
}