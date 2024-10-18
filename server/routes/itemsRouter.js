const Router = require('express');
const itemsControllers = require("../controllers/itemsControllers");

const router = new Router();

router.get('/', itemsControllers.getAll);
router.get('/:id', itemsControllers.getOne);
router.post('/', itemsControllers.create);
router.put('/:id', itemsControllers.update); 
router.delete('/:id', itemsControllers.delete);

module.exports = router;
