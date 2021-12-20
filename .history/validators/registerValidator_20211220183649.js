module.exports.registerValidator = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {}
    if (username.trim() === "") {
        errors.username = "The username cannot be empty!!"
    }
    if (email.trim() === "") {
        errors.email = "The email cannot be empty!!"
    }
    else {
        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!email.match(regEx)) {
            errors.email = "The email must be valid!!"
        }
    }
    if (password === "") {
        errors.password = "The password cannot be empty!!"
    }
    else if (password !== confirmPassword) {
        errors.password = "Passwords must match!!"
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}