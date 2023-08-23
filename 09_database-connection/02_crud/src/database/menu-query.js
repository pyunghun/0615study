exports.findAllMenus = () => {

    return `
        select * from tbl_menu
    `;
}

exports.findMenuByMenuCode = () => {

    return `
        select 
                * 
        from tbl_menu
        where menu_code = ?

    `;
}

exports.registNewMenu = () => {

    return `
        insert
            into tbl_menu
            (menu_name, menu_price, category_code, orderable_status)
            values
            (? ,?, ?, ?)
    `;
}