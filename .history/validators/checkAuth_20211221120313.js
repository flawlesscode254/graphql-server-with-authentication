const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');

module.exports = (context) => {
  const authHeader = context.req.headers.authorization?.split(' ')[1]
  if (authHeader) {
    const token = authHeader
    console.log(token)
    if (token) {
      const user = jwt.verify(token, "secret monster")
      try {
        console.log(user.token)
        return user;
      } catch (err) {
        console.log(user.token)
        throw new AuthenticationError('Invalid/Expired token');
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error('Authorization header must be provided');
};