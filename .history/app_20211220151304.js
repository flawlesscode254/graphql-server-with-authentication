const {ApolloServer} = require("apollo-server")
const gql = require("graphql-tag")
const mongoose = require("mongoose")

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

mongoose.connect("mongodb://localhost/trials", { useNewUrlParser: true })
.then(() => {
    console.log("mongodb connected");
    return server.listen({ port: 5000 })
}).then((res) => {
    console.log(`Server running on ${res.url}`);
})