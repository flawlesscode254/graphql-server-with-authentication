module.exports.loginValidator = (
    email,
    password
) => {
    const errors = {}
    if (email.trim() === "") {
        errors.email = "The email must not be empty"
    }
    
}