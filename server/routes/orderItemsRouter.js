const Router = require('express');
const orderItemsControllers = require("../controllers/orderItemsControllers");

const router = new Router();

router.get('/', orderItemsControllers.getAll);
router.get('/:id', orderItemsControllers.getOne);
router.post('/', orderItemsControllers.create);
router.put('/:id', orderItemsControllers.update);
router.delete('/:id', orderItemsControllers.delete);

module.exports = router;
