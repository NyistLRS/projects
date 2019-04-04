
module.exports = {
    login: {
        checkName: 'SELECT * FROM USER WHERE NAME = ',
        addUser: 'INSERT INTO USER(NAME,PASSWORD) VALUES (?,?) ',
        checkLogin: (name,psw) => {
            return `SELECT * FROM USER WHERE NAME = '${name}' AND PASSWORD = '${psw}'`
        }
    },
    menu: {
        getAdminMenu: 'SELECT * FROM ADMIN_MENU',
        getMenuInfo: 'SELECT * FROM ADMIN_MENU',
        setMenuInfo: 'UPDATE ADMIN_MENU SET ',
        addMenu: 'INSERT INTO ADMIN_MENU SET ?',
        delMenu: 'DELETE FROM ADMIN_MENU WHERE ID ='
    }
}