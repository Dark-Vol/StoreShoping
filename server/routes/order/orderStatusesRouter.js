const Router = require('express');
const orderStatusesControllers = require("../../controllers/order/orderStatusesControllers");

const router = new Router();

router.get('/', orderStatusesControllers.getAll);
router.get('/:id', orderStatusesControllers.getOne);
router.post('/', orderStatusesControllers.create);
router.put('/:id', orderStatusesControllers.update);
router.delete('/:id', orderStatusesControllers.delete);

module.exports = router;