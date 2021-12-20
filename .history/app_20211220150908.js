const {ApolloServer} = require("apollo-server")
const gql = require("graphql")

const typeDefs = gql`
    type Query {
        sayHello: String
    }
`

const resolvers = {
    Query: {
        sayHello: () => "Hello world"
    }
}