const gql = require("graphql-tag")

const typeDefs = gql`
    type Query {
        getPosts: String
    }
`

module.exports = typeDefs