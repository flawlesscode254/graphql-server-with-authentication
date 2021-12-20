const {ApolloServer} = require("apollo-server")
const gql = require("graphql")

const typeDefs = gql`
    type Query {
        sayHell
    }
`