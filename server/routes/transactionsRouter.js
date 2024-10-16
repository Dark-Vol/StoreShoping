const Router = require('express');
const transactionsControllers = require("../controllers/transactionsControllers");

const router = new Router();

router.get('/', transactionsControllers.getAll);
router.get('/:id', transactionsControllers.getOne);
router.post('/', transactionsControllers.create);
router.put('/:id', transactionsControllers.updateForKey);
router.put('/', transactionsControllers.updateForQuery);
router.delete('/:id', transactionsControllers.delete);

module.exports = router;
