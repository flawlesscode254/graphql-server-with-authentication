const gql = require("graphql-tag")

const typeDefs = gql`
    type Post {
        username: String,
        email: String
    }
    type Query {
        getPosts: [Post]
    }
    type Mutation {
        createPost: (username: String, email) [Post]
    }
`

module.exports = typeDefs