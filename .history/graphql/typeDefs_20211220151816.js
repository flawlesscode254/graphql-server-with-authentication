const gql = require("graphql-tag")

const typeDefs = gql`
    type Post {
        username: String,
        email: String
    }
    type Query {
        getPosts: [Post]
    }
`

module.exports = typeDefs