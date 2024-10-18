const Router = require('express');
const transactionsControllers = require("../controllers/transactionsControllers");

const router = new Router();

router.get('/', transactionsControllers.getAll);
router.get('/:id', transactionsControllers.getOne);
router.post('/', transactionsControllers.create);
router.put('/:id', transactionsControllers.update);
router.delete('/:id', transactionsControllers.delete);

module.exports = router;