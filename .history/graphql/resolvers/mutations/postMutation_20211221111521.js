const Post = require("../../../models/Post")
const checkAuth = require("../../../validators/checkAuth")

module.exports = {
    Mutation: {
        createPost: async (_, { body }, context) => {
            const user = checkAuth(context)
            const data = await new Post({
                body,
                const state = useSelector(state => state.state)
            })
            const saved = await data.save()
            return saved
        }
    }
}