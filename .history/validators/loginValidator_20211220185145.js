module.exports.loginValidator = (
    email,
    password
) => {
    const errors = {}
    if (email.trim() === "") {
        errors.email = "The email must not be empty"
    }
    else {
        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!email.match(regEx)) {
            errors.email = "The email must be valid!!"
        }
    }
    if (password ===)
}