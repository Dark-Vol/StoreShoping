const Router = require('express');
const countriesControllers = require("../controllers/countriesControllers");

const router = new Router();

router.get('/', countriesControllers.getAll);
router.get('/:id', countriesControllers.getOne);
router.post('/', countriesControllers.create);
router.put('/:id', countriesControllers.updateForKey);
router.put('/', countriesControllers.updateForQuery);
router.delete('/:id', countriesControllers.delete);

module.exports = router;