const MenuController = require('./src/controllers/menu-controller');

// MenuController.findAllMenus();
// MenuController.findMenuByMenuCode(23);

MenuController.registNewMenu({
    menuName: '너구리라면',
    menuPrice: 123123,
    categoryCode: 10,
    orderableStatus: 'Y'
});