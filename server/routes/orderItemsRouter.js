const Router = require('express');
const orderItemsControllers = require("../controllers/orderItemsControllers");

const router = new Router();

router.get('/', orderItemsControllers.getAll);
router.get('/:id', orderItemsControllers.getOne);
router.post('/', orderItemsControllers.create);
router.put('/:id', orderItemsControllers.updateForKey);
router.put('/', orderItemsControllers.updateForQuery);
router.delete('/:id', orderItemsControllers.delete);

module.exports = router;
