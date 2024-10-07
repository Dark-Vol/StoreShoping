const Router = require('express')
const commentsController = require("../controllers/commentsController")

const router = new Router()

router.post('/', commentsController.getAll)
router.post('/', commentsController.create)

module.exports = router