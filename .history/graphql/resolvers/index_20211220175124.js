const mutationsResolver = require("./mutations")
const queriesResolver = require("./queries")

const resolvers = {
    Query: {
        ...mutationsResolver.Query
    },
    Mutation: {
        ...queriesResolver.Mutation
    }
}

 = resolvers