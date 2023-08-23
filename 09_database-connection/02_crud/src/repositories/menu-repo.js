const MenuQuery = require('../database/menu-query');

exports.findAllMenus = (connection) => {

    return new Promise((resolve, reject) => {

    connection.query(MenuQuery.findAllMenus(), (err, result) => {
        if(err) {
            reject(err);
        }

        resolve(result);
    });

    })   
}

exports.findMenuByMenuCode = (connection, menuCode) => {

    return new Promise((resolve, reject) => {

        connection.query(MenuQuery.findMenuByMenuCode(), [menuCode] ,(err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result);
        })
    })
}

exports.registNewMenu = (connection, menu) => {
    
    return new Promise((resolve, reject) => {
        
        connection.query(MenuQuery.registNewMenu(),
         [
            menu.menuName,
            menu.menuPrice,
            menu.categoryCode,
            menu.orderableStatus
        ], 
         (err, result) => {
            if(err) {
                reject(err);
            }
            console.log('repo result', result);

            resolve(result);
        });

    })
}