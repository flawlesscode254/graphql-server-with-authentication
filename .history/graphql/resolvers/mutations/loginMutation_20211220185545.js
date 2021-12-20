const Register = require("../../../models/Register")
const {loginValidator} = require("..")

module.exports = {
    Mutation: {
        login: async (_, {
            email,
            password
        }) => {

        }
    }
}