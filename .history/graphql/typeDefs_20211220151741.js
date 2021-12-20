const gql = require("graphql-tag")

const typeDefs = gql`
    
    type Query {
        createPost: String
    }
`

module.exports = typeDefs