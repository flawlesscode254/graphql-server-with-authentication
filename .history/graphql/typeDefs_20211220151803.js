const gql = require("graphql-tag")

const typeDefs = gql`
    type Pos
    type Query {
        getPosts: [Post]
    }
`

module.exports = typeDefs