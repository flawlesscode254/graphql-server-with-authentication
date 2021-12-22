const Post = require("../../../models/Post")
const checkAuth = require("../../../validators/checkAuth")

module.exports = {
    Mutation: {
        createPost: async (_, { body }, context) => {
            const user = checkAuth(context)
            const data = await new Post({
                body,
                user
            })
            const saved = await data.save()
            return saved
        }
    }
}