const Router = require('express');
const cartItemsControllers = require("../controllers/cartItemsControllers");

const router = new Router();

router.get('/', cartItemsControllers.getAll);
router.get('/:id', cartItemsControllers.getOne);
router.post('/', cartItemsControllers.create);
router.put('/:id', cartItemsControllers.updateForKey);
router.put('/', cartItemsControllers.updateForQuery);
router.delete('/:id', cartItemsControllers.delete);

module.exports = router;