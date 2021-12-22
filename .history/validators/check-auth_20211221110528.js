const jwt = require("jsonwebtoken")

const secret = "scary monster"

module.exports = (context) => {
    const authHeader = context.req.headers.authorization
    
}