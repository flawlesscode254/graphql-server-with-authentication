const Post = require("../../models")

const resolvers = {
    Query: {
        sayHello: () => "Hello world"
    }
}

module.exports = resolvers