const Post = require("../../models/Post")

module.exports = {
    Mutation: {
        register: async (_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }}) => {
            const data = await new LogIn({
                username,
                email,
                password,
                confirmPassword
            })
            const saved = await data.save()
            return saved
        }
    },
    Mutation: {
        createPost: async (_, {
            username,
            email
        }) => {
            const data = await new Post({
                username,
                email
            })
            const saved = await data.save()
            return saved
        }
    }
}