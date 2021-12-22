const { AuthenticationError } = require("apollo-server");

const jwt = require("jsonwebtoken");

const secret = "scary monster";

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, secret);
        return user;
      } catch (error) {
        throw new AuthenticationError("Invalid / Expired token");
      }
    }
    throw new Error("Authentication error must be \"Bearer [token]")
  }
  throw new Error("Authorization header must be provided")
};
