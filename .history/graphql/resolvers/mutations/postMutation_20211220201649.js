const Post = require("../../../models/Post")

module.exports = {
    Mutation: {
        createPost: async (_, {}) => {
            const data = await new Post({
                username,
                email
            })
            const saved = await data.save()
            return saved
        }
    }
}