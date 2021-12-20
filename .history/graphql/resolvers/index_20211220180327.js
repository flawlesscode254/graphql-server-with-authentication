const registerResolver = require("./registerMutation")
const postMuat
const queriesResolver = require("./queries")

module.exports = {
    Query: {
        ...mutationsResolver.Query
    },
    Mutation: {
        ...queriesResolver.Mutation
    }
}