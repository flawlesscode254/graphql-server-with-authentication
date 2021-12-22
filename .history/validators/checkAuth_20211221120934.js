const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');

module.exports = (context) => {
  const authHeader = context.req.headers.authorization
  if (authHeader) {
    const token = authHeader
    console.log(token)
    if (token) {
      try {
        const user = jwt.verify(token, "secret monster")
        return user;
      } catch (err) {
        const user = jwt.verify(token, "secret monster")
        console.log(user)
        throw new AuthenticationError('Invalid/Expired token');
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error('Authorization header must be provided');
};