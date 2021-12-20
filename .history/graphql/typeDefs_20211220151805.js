const gql = require("graphql-tag")

const typeDefs = gql`
    type Post {
        
    }
    type Query {
        getPosts: [Post]
    }
`

module.exports = typeDefs