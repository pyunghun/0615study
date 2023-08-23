const MenuService = require('../service/menu-service');
const HttpStatus = require('http-status');
const MenuDTO = require('../dto/menu-dto');


exports.findAllMenus = (res, req, next) => {

    const menus = MenuService.findAllMenus();

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'ok',
        results: menus
    });
}

exports.findMenuByMenuCode = (req, res, next) => {
    // console.log(req.params.menuCode);
    const menu = MenuService.findMenuByMenuCode(req.params.menuCode);

    if(menu && menu.length === 0) {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'NOT_FOUND',
            code: -99999,
            results: [],
            links: [
                {
                    rel:'menuRegist',
                    method: 'POST',
                    href: 'https://api.ohgiraffers.com/api/v1/menus'
                }
            ]
        });
    }
}

exports.registMenu = (req, res, next) => {
    const result = MenuService.registMenu(new MenuDTO(req.body));

    if(result) {
        res.status(HttpStatus.CREATED).send({
            status: HttpStatus.CREATED,
            message: 'CREATED',
            results: {
                menuCode: result.menuCode,
                menuName: result.menuName
            },
            contentLocation: `/menus/${result.menuCode}`
        });
    } else {
        // 실패 시의 내용
        res.status(HttpStatus.BAD_REQUEST).send({
            status: HttpStatus.BAD_REQUEST,
            message: 'BAD_REQUEST',
            code: -99999,
            results: [],
            links: [
                {
                    rel:'menuRegist',
                    method: 'POST',
                    href: 'https://api.ohgiraffers.com/api/v1/menus'

                }
            ]
        });
    }
}
