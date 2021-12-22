const Post = require("../../../models/Post")

module.exports = {
    Query: {
        getPosts: async () => {
            try {
                            const get = await Post.find()
            return get
            } catch (error) {
                throw new Error
            }

        }
    }
}