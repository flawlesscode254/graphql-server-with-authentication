const registerMutation = require("./mutations/registerMutation")
const postMutation = require("./mutations/postMutation")
const queriesResolver = require("./queries/postsQuery")

module.exports = {
    Query: {
        ...queriesResolver.Query
    },
    Mutation: {
        ...registerMutation.Mutation,
        ...postMutation.Mutation
    }
}