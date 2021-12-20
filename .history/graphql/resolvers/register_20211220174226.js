const LogIn = require("../../models/LogIn")

= {
    Mutation: {
        register(_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }})
    }
}