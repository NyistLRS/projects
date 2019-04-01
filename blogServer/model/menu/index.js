const db = require("../../db/index.js")
const sqls = require("../../sql/index.js")
exports.getAdminMenu = async function (ctx, next) {
    let sql = sqls.menu.getAdminMenu
    let msg = '请求成功！', code = 200
    console.log(sql, 'sql')
    let result = await db(sql, [])
    ctx.body = {
        code: code,
        msg: msg,
        data: getMenu(result)
    }
}

exports.getMenuInfo = async function(ctx, netx) {
    let sql = sqls.menu.getMenuInfo
    let msg = "请求成功！",code=200,params = ctx.request.body
    if (JSON.stringify(ctx.request.body) !== '{}') {
        sql = `${sql} WHERE ${params.name} Like ${params.value}`
    }
    let result = await db(sql, [])
    ctx.body = {
        code: code,
        msg: msg,
        data: result
    }
}

const getMenu = (menus) => {
    let newArr = []
    menus.map(res => {
        let newO = res
        if(!res.parentId) {
            newO.children = getSubMenu(res.id, menus)
            newArr.push(res)
        }
    })
    return newArr
}

const getSubMenu = (parentId,menus) => {
    let children = []
    menus.map(res => {
        if(res.parentId === parentId){
            res.children = getSubMenu(res.id, menus)
            children.push(res)
        }
    })
    return children
}