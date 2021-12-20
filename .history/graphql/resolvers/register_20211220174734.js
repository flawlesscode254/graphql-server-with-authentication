const LogIn = require("../../models/LogIn")

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
                confirm
            })
        }
    }
}