const Register = require("../../../models/Register")
const {loginValidator} = require("../../../validators/")

module.exports = {
    Mutation: {
        login: async (_, {
            email,
            password
        }) => {

        }
    }
}