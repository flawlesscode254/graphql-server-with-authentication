module.exports.registerValidator = ({
    username,
    email,
    password,
    confirmPassword
    ) => {
    // Validate username
    const errors = {}
    if (username.trim() === "") {
        errors.username = "The username cannot be empty!!"
    }
    if (email.trim() === "") {
        errors.email = "The email cannot be empty!!"
    }
    else {
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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