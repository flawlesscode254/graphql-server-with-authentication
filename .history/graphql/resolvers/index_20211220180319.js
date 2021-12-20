const registerResolver = require("./registerMutation")
const queriesResolver = require("./queries")

module.exports = {
    Query: {
        ...mutationsResolver.Query
    },
    Mutation: {
        ...queriesResolver.Mutation
    }
}