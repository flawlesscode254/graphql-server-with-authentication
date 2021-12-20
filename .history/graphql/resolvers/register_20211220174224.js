const LogIn = require("../../models/LogIn")
r = {
    Mutation: {
        register(_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }})
    }
}