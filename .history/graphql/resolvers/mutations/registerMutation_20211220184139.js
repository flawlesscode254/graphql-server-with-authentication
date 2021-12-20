const Register = require("../../../models/Register")
const {registerValidator} = require("../../../validators/registerValidator")
const {UserInputError} = require("apollo-server")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
            const hashedPassword = bcrypt.hash(password, 12)
            const data = await new Register({
                username,
                email,
                hashedPassword,
                confirmPassword
            })
            const saved = await data.save()
            const token = jwt.sign({
                id: saved.id,
                username: saved.id,
                email: saved.id
            })

            return {
                ...
            }
        }
    }
}