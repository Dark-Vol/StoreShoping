const Router = require('express')
const productsRouter = require("./productsRouter")

const router = new Router()

router.use('/posts', productsRouter)

module.exports = router