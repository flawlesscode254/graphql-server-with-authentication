const registerResolver = require("./registerMutation")
const postMutation = require("./")
const queriesResolver = require("./queries")

module.exports = {
    Query: {
        ...mutationsResolver.Query
    },
    Mutation: {
        ...queriesResolver.Mutation
    }
}