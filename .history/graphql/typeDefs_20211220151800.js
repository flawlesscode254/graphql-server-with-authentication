const gql = require("graphql-tag")

const typeDefs = gql`
    
    type Query {
        getPosts: [Post]
    }
`

module.exports = typeDefs