const Router = require('express');
const categoriesControllers = require("../controllers/categoriesControllers")

const router = new Router();

router.get('/', categoriesControllers.getAll);
router.get('/:id', categoriesControllers.getOne);
router.post('/', categoriesControllers.create);
router.put('/:id', categoriesControllers.updateForKey);
router.put('/', categoriesControllers.updateForQuery);
router.delete('/:id', categoriesControllers.delete);

module.exports = router;