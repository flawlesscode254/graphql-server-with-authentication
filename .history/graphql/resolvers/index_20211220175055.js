const mutationsResolver = require("./mutations")
import queriesResolver = require()"./queries"

const resolvers = {
    Query: {
        ...mutationsResolver.Query
    },
    Mutation: {
        ...queriesResolver.Mutation
    }
}

module.exports = resolvers