const Router = require('express');
const orderStatusesControllers = require("../controllers/orderStatusesControllers");

const router = new Router();

router.get('/', orderStatusesControllers.getAll);
router.get('/:id', orderStatusesControllers.getOne);
router.post('/', orderStatusesControllers.create);
router.put('/:id', orderStatusesControllers.updateForKey);
router.put('/', orderStatusesControllers.updateForQuery);
router.delete('/:id', orderStatusesControllers.delete);

module.exports = router;
