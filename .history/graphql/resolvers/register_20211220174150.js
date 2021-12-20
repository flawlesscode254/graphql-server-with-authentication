const LogIn = require("../../models/LogIn")

const resolver = {
    Mutation: {
        register(_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }})
    }
}