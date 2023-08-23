const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menuController');

// /menu
router.get('/', MenuController.getMenus);
// /menu/{menuCode}
router.get('/:menuCode', MenuController.getMenu);

router.post('/', MenuController.registerMenu);

router.put('/', MenuController.modifyMenu);

router.delete('/', MenuController.removeMenu);

module.exports = router;