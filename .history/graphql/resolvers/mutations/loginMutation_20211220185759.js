const Register = require("../../../models/Register")
const {loginValidator} = require("../../../validators/loginValidator")
const {UserInputError} = require("apollo-server")

module.exports = {
    Mutation: {
        login: async (_, {
            email,
            password
        }) => {
            const {erros, valid} = loginValidator(email, password)
            if ()
        }
    }
}