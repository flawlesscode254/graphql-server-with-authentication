const Register = require("../../../models/Register")
const {loginValidator} = require("../../../validators/loginValidator")

module.exports = {
    Mutation: {
        login: async (_, {
            email,
            password
        }) => {

        }
    }
}