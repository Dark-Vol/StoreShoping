const Router = require('express')
const productsController = require("../controllers/productsController")

const router = new Router()

router.post('/', productsController.getAll)
router.post('/', productsController.create)

module.exports = router