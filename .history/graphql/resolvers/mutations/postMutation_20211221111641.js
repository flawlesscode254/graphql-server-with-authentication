const Post = require("../../../models/Post")
const checkAuth = require("../../../validators/checkAuth")

module.exports = {
    Mutation: {
        createPost: async (_, { body }, context) => {
            const user = checkAuth(context)
            const newPost = await new Post({
                body,
                user: user.id,
                username: user.username
            })
            const post = await newPost.save()
            return saved
        }
    }
}