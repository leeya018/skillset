
const Comment = require('./models/comment-model')

module.exports = initDb = () => {
    const comments = [
        new Comment({ email: "shai@bigpanda.io", message: "Hello there How are you?" }),
        new Comment({ email: "elik@bigpanda.io", message: "Goood!!!" }),
        new Comment({ email: "noam@bigpanda.io", message: "Goodbye :)" }),
    ]

    for (comment of comments) {
        comment
            .save()
            .then(() => {
                console.log("data has added")
            }).catch(error => {
                console.log(error)
            })
    }
}