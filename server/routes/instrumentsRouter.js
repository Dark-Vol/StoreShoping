const Router = require('express');
const instrumentsControllers = require("../controllers/instrumentsControllers");

const router = new Router();

router.get('/', instrumentsControllers.getAll);
router.get('/:id', instrumentsControllers.getOne);
router.post('/', instrumentsControllers.create);
router.put('/:id', instrumentsControllers.updateForKey);
router.put('/', instrumentsControllers.updateForQuery);
router.delete('/:id', instrumentsControllers.delete);

module.exports = router;
