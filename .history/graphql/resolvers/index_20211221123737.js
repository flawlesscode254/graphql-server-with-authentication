const registerMutation = require("./mutations/registerMutation")
const postMutation = require("./mutations/postMutation")
const postsQuery = require("./queries/postsQuery")
const loginMutation = require("./mutations/loginMutation")
const postQuery = require("./queries/postQuery")
const deleteMutation = require("./mutations/deleteMutation")

module.exports = {
    Query: {
        ...postsQuery.Query,
        ...postQuery.Query
    },
    Mutation: {
        ...registerMutation.Mutation,
        ...postMutation.Mutation,
        ...loginMutation.Mutation
        ...
    }
}