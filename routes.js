const express = require('express');
const router = express.Router();
const menuController = require('./Menu/MenuController');


router.post('/menu', menuController.addMenu);
router.get('/menus', menuController.getMenus);
router.get('/menusdetail/:menuId/items/:itemId', menuController.getItemById);

module.exports = router;
