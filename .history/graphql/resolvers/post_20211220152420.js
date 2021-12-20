const Post = require("../../models/Post")

const resolvers = {
    Query: {
        getPosts: async () => {
            const get = await Post.find()
            return get
        }
    },
    Mutation: {
        createPost: async (_, {
            username,
            email
        }) => {
            const data = await new Post({
                username,
                email
            })
            const saved = await data.save()
            return saved
        }
    }
}

module.exports = resolvers