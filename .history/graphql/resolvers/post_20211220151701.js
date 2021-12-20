const Post = require("./")

const resolvers = {
    Query: {
        sayHello: () => "Hello world"
    }
}

module.exports = resolvers