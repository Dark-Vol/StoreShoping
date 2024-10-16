const Router = require('express');
const cartsControllers = require("../controllers/cartsControllers");

const router = new Router();

router.get('/', cartsControllers.getAll);
router.get('/:id', cartsControllers.getOne);
router.post('/', cartsControllers.create);
router.put('/:id', cartsControllers.updateForKey);
router.put('/', cartsControllers.updateForQuery);
router.delete('/:id', cartsControllers.delete);

module.exports = router;
