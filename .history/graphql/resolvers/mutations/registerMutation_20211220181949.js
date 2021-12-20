const Register = require("../../../models/Register")
const validator = require("../../../validators/registerValidator")
import {UserInputError} from "apollo-server"

module.exports = {
    Mutation: {
        register: async (_, {registerInput: {
            username,
            email,
            password,
            confirmPassword
        }}) => {
            const {errors, valid} = validator(
                username,
                email,
                password,
                confirmPassword
            )
            if (!valid) {
                throw new UserI
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