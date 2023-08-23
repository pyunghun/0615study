const getConnection = require('../database/connection');
const MenuRepository = require('../repositories/menu-repo');

exports.findAllMenus = () => {

    return new Promise((resolve, reject) => {
        console.log('findAllMenus service fuc called');
    const connection = getConnection();
    
    const results = MenuRepository.findAllMenus(connection);
    

    connection.end();

    resolve(results);
    })

    
};

exports.findMenuByMenuCode = (menuCode) => {

    return new Promise((resolve, reject) => {
        const connection = getConnection();

        const results = MenuRepository.findMenuByMenuCode(connection, menuCode);

        connection.end();

        resolve(results);
    })
}

exports.registNewMenu = (menu) => {
    
    return new Promise( async (resolve, reject) => {
        const connection = getConnection();
        // 롤백 커밋 등이 필요함.
        connection.beginTransaction();

        try {

            const result = await MenuRepository.registNewMenu(connection, menu);
            console.log('result : ', result.insertId);

            const insertedMenu = await MenuRepository.findMenuByMenuCode(connection, result.insertId);
            console.log('insertedMenu : ', insertedMenu);

            connection.commit();
            console.log('commit successfully');

            resolve(insertedMenu);

        } catch(err) {
            connection.rollback();
            console.log('rollback is successfully');

            reject(err);
        } finally {
            connection.end();
            console.log('connection is closed successfully')
        };
    });
}