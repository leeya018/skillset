
validateFields = (req, res, next) => {
    let { body } = req
    let errMessages = []
    if (!body.email) {
        errMessages.push("Email is missing")
    }
    if (!body.message) {
        errMessages.push("Message is missing")
    }
    if (errMessages.length > 0) {
        return res.status(400).json({
            success: false,
            validation: false,
            errors: errMessages
        })
    }
    next()
}

module.exports = {
    validateFields
}   