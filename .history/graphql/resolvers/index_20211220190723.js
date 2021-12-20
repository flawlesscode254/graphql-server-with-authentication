const registerMutation = require("./mutations/registerMutation")
const postMutation = require("./mutations/postMutation")
const postsQuery = require("./queries/postsQuery")
const loginMutatio

module.exports = {
    Query: {
        ...postsQuery.Query
    },
    Mutation: {
        ...registerMutation.Mutation,
        ...postMutation.Mutation
    }
}