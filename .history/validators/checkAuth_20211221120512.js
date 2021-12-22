const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');

module.exports = (context) => {
  const authHeader = context.req.headers.authorization?.split(' ')[1]
  if (authHeader) {
    const token = authHeader
    const idr = jwt.verify(token, "secret monster")
    console.log(idr)
    if (token) {
      try {
        const user = jwt.verify(token, "secret monster")
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid/Expired token');
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error('Authorization header must be provided');
};