const Post = require("../../models/Post")

const resolvers = {
    Query: {
        sayHello: async () => {
            const get = await Post.find()
            return get
        }
    },
    Mutation: {
        createPost: async (_, {
            username,
            email
        }) => {

        }
    }
}

module.exports = resolvers