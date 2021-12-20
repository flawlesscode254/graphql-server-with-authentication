const registerMutation = require("./mutations/registerMutation")
const postMutation = require("./mutations/postMutation")
const postsQuery = require("./queries/postsQuery")

module.exports = {
    Query: {
        ...postsQuery
    },
    Mutation: {
        ...registerMutation,
        ...postMutation.Mutation
    }
}