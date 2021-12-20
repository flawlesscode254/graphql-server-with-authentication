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
    if (email.trim() === "") {
        errors.email = "The email cannot be empty!!"
    }
    else {
        const regEx = 
    }
}