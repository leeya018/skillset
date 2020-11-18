const express = require('express')

const CommentCtrl = require('../controllers/comment-ctrl')
const {validateFields} = require('../middlewares/comment-middleware')


const router = express.Router()

router.post('/comment',validateFields , CommentCtrl.createComment)
router.get('/comments', CommentCtrl.getComments)

module.exports = router