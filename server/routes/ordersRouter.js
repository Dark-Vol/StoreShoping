const Router = require('express');
const ordersControllers = require("../controllers/ordersControllers");

const router = new Router();

router.get('/', ordersControllers.getAll);
router.get('/:id', ordersControllers.getOne);
router.post('/', ordersControllers.create);
router.put('/:id', ordersControllers.updateForKey);
router.put('/', ordersControllers.updateForQuery);
router.delete('/:id', ordersControllers.delete);

module.exports = router;
