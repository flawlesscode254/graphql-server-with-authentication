const Post = require("../../models/Post")

const resolvers = {
    Query: {
        sayHello: async () => {
            const get = await Post.find()
        }
    }
}

module.exports = resolvers