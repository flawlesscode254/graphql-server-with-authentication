const Register = require("../../models/Register")

module.exports = {
    Mutation: {
        register: async (_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }}) => {
            const data = await new R({
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