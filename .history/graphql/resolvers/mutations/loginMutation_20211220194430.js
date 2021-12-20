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
      const match = await bcrypt.compare(password, user.password)
      if (!res) {
        errors.general = "Wrong credentials";
        throw new UserInputError("Wrong credentials", { errors });
      }

      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
          email: user.email,
        },
        "scary monster",
        {
          expiresIn: "1h",
        }
      );

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
  },
};
