const Register = require("../../../models/Register")
const validator = require("../../../validators/registerValidator")

module.exports = {
    Mutation: {
        register: async (_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }}) => {
            const {errors, valid} = validator
            const data = await new Register({
                username,
                email,
                password,
                confirmPassword
            })
            const saved = await data.save()
            return saved
        }
    }
}