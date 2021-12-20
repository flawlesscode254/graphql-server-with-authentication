module.exports.registerValidator = ({
    username,
    email,
    password,
    confirmPassword
}) => {
    // Validate username
    const errors = {}
    if (username.trim() === "") {
        errors.username = "The username cannot be empty!!"
    }
}