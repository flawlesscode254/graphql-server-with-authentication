const {ApolloServer} = require("apollo-server")
const mongoose = require("mongoose")

const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers/post")

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