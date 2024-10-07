const Router = require('express')
const productsRouter = require("./productsRouter")
const categoryRouter = require("./categoryRouter")
const commentsRouter = require("./commentsRouter")

const router = new Router()

router.use('/category', categoryRouter)
router.use('/products', productsRouter)
router.use('/comments', commentsRouter)

module.exports = router