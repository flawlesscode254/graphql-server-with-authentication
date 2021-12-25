const {UserInputError} = require("apollo-server")

const Post = require("../../../models/Post")
const checkAuth = require("../../../validators/checkAuth")

module.exports = {
    Mutation: {
        likePost: async (_, { postId }, context) => {
            const {username, email} = checkAuth(context)

            const post = await Post.findById(postId)
            if (post) {
                if (post.likes.find(like => like.username === username)) {
                    post.likes = post.likes.filter(like => like.username !== username)
                }
                else {
                    post.likes.push({
                        username,
                        email
                    })
                }
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