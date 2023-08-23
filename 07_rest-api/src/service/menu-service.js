const menus = require('../data/menu-detail.json');

exports.findAllMenus = () => menus;

exports.findMenuByMenuCode = (menuCode) => {
    return menus.filter(menu => menu.menuCode === parseInt(menuCode));
}

exports.registMenu = (menu) => {
    return menu? menu: undefined;
}