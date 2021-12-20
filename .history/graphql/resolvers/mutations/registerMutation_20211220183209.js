const Register = require("../../../models/Register")
const {registerValidator} = require("../../../validators/registerValidator")
const {UserInputError} = require("apollo-server")
const b

module.exports = {
    Mutation: {
        register: async (_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }}) => {
            const {errors, valid} = registerValidator(
                username,
                email,
                password,
                confirmPassword
            )
            if (!valid) {
                throw new UserInputError("Errors", { errors })
            } 
            const findUsername = await Register.findOne({
                username
            })
            if (findUsername) {
                throw new UserInputError("Username is taken", {
                    errors: {
                        username: "The username is taken"
                    }
                })
            }
            const findEmail = await Register.findOne({
                email
            })
            if (findEmail) {
                throw new UserInputError("Email is taken", {
                    errors: {
                        username: "The email is taken"
                    }
                })
            }
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