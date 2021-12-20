const Register = require("../../../models/Register")
const {loginValidator} = require("../../../validators/loginValidator")
const {UserInputError} = require("")

module.exports = {
    Mutation: {
        login: async (_, {
            email,
            password
        }) => {
            const {erros, valid} = loginValidator(email, password)
            if
        }
    }
}