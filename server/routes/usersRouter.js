const Router = require('express');
const usersControllers = require("../controllers/usersControllers");

const router = new Router();

router.get('/', usersControllers.getAll);
router.get("/:id", usersControllers.getOne );
router.post('/', usersControllers.create);
router.put('/:id', usersControllers.updateForKey);
router.put('/', usersControllers.updateForQuery);
router.delete('/:id', usersControllers.delete);

module.exports = router;