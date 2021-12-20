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

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({ port: 5000 })
.then((res) => {
    console.log(`Server running on http://localhost`);
})