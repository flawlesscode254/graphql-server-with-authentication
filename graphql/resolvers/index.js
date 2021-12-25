const registerMutation = require("./mutations/registerMutation")
const postMutation = require("./mutations/postMutation")
const postsQuery = require("./queries/postsQuery")
const loginMutation = require("./mutations/loginMutation")
const postQuery = require("./queries/postQuery")
const deletePostMutation = require("./mutations/deletePostMutation")
const commentMutation = require("./mutations/commentMutation")
const deleteCommentMutation = require("./mutations/deleteCommentMutation")
const likePostMutation = require("./mutations/likePostMutation")
const newPostSubscription = require("./subscriptions/newPostSubscription")

module.exports = {
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postsQuery.Query,
        ...postQuery.Query
    },
    Mutation: {
        ...registerMutation.Mutation,
        ...postMutation.Mutation,
        ...loginMutation.Mutation,
        ...deletePostMutation.Mutation,
        ...commentMutation.Mutation,
        ...deleteCommentMutation.Mutation,
        ...likePostMutation.Mutation
    },
    Subscription: {
        ...newPostSubscription.Subscription
    }
}