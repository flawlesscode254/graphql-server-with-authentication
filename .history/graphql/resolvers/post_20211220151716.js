const Post = require("../../models/Post")

const resolvers = {
    Query: {
        sayHello: () => "Hello world"
    }
}

module.exports = resolvers