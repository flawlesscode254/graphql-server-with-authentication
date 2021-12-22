const jwt = require("jsonwebtoken")

const secret = "scary monster"

module.exports = (context) => {
    const authHeader = context.req.headers.authorization
    if (authHeader) {
        const token = authHeader.split("Bearer ")[1]
        if (token) {
            const user = jwt.verify(token, secret)
            return user
        }
    }
}