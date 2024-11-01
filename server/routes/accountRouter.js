const Router = require('express')
const AccountController = require('../controllers/AccountController')

const router = new Router()

router.post('/register', AccountController.register)

module.exports = router