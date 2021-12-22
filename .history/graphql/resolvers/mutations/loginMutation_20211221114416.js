const Register = require("../../../models/Register");
const { loginValidator } = require("../../../validators/loginValidator");
const { UserInputError } = require("apollo-server");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  Mutation: {
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const user = await User.findOne({ username });

      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong crendetials';
        throw new UserInputError('Wrong crendetials', { errors });
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
        token
      };
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
      if (!match) {
        errors.general = "Wrong credentials";
        throw new UserInputError("Wrong credentials", { errors });
      }


      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
  },
};
