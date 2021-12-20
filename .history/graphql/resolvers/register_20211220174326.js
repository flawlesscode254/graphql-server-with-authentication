const LogIn = require("../../models/LogIn")

module.exports = {
    Mutation: {
        register = (_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }}) => {

        }
    }
}