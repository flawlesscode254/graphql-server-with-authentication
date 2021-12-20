const mutationsResolver = require("./mutations"
import queriesResolver from "./queries"

const resolvers = {
    Query: {
        ...mutationsResolver.Query
    },
    Mutation: {
        ...queriesResolver.Mutation
    }
}

module.exports = resolvers