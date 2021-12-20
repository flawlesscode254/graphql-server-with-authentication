const registerResolver = require("./registerMutation")
const postMutation = require("./mutations/postMutation")
const queriesResolver = require("./queries")

module.exports = {
    Query: {
        ...queriesResolver.Query
    },
    Mutation: {
        ...registerResolver.Mutation,
        ...postMutation.Mutation
    }
}