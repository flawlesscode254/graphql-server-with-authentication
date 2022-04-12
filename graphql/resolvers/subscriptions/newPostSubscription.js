module.exports = {
    Subscription: {
        newPost: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(['POST_CREATED'])
        }
    }
}