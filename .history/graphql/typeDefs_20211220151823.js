const gql = require("graphql-tag")

const typeDefs = gql`
    type Post {
        username: String,
        email: String
    }
    type Query {
        getPosts: [Post]
    }
    type Mutation
`

module.exports = typeDefs