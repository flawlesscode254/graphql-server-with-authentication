const gql = require("graphql-tag")

const typeDefs = gql`
    type Query {
        sayHello: String
    }
`

module.exports = typeDefs