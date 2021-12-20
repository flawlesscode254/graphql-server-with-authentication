const Register = require("../../../models/Register");
const { loginValidator } = require("../../../validators/loginValidator");
const { UserInputError } = require("apollo-server");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Mutation: {
    login: async (_, { email, password }) => {
      const { errors, valid } = loginValidator(email, password);
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await Register.findOne({ email });
      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("Wrong credentials", { errors });
      }
      await bcrypt.compare(password, user.password).then((res) => {
      });
    },
  },
};
