const tool = require("./tool.js")

const mysql = require("mysql")

const pool = mysql.createPool(tool.mysql) // 创建连接池

module.exports = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if(err) {
                console.log("连接失败")
                reject(err)
            }else {
                console.log("连接成功")
                conn.query(sql, [...params], (err1, rows) => {
                    if(err1) {
                        reject(err1)
                    }else {
                        resolve(rows)
                    }
                    conn.release()
                })
            }
        })
    })
}