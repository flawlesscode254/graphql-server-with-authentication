const LogIn = require("../../models/LogIn")

module.exports = {
    Mutation: {
        async register = (_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }}) => {

        }
    }
}