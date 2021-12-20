const LogIn = require("../../models/LogIn")

module.exports = {
    Mutation: {
        async register: ()
        register(_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }})
    }
}