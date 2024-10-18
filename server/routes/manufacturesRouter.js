const Router = require('express');
const manufacturesControllers = require("../controllers/manufacturesControllers");

const router = new Router();

router.get('/', manufacturesControllers.getAll);
router.get('/:id', manufacturesControllers.getOne);
router.post('/', manufacturesControllers.create);
router.put('/:id', manufacturesControllers.update);
router.delete('/:id', manufacturesControllers.delete);

module.exports = router;
