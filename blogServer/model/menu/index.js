const db = require("../../db/index.js")
const sqls = require("../../sql/index.js")
const utils = require("../../utils/index.js")
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

exports.updateMenu = async function(ctx, next) {
    let sql = sqls.menu.setMenuInfo
    let msg = "操作成功！",
        code = 200,
        params = ctx.request.body
    if(!params.id){
        ctx.body = {
            code: code,
            msg: '菜单的id不存在!'
        }
        return false
    }
    if(!params.menuName || !params.pathName) {
        ctx.body = {
            code: '200',
            msg: '缺少必要参数或菜单名称和路由名称为空！'
        }
        return false
    }
    if(params.icon){
        sql = `${sql}title='${params.menuName}',pathname='${params.pathName}',icon='${params.icon}' where id ='${params.id}'`
    }else{
        sql = `${sql}title='${params.menuName}',pathname='${params.pathName}' where id ='${params.id}'`
    }
    let result = await db(sql, [])
    ctx.body = {
        code: code,
        msg: msg,
        result: []
    }
}

exports.addMenu = async function(ctx,netx) {
    let sql = sqls.menu.addMenu,
        code = 200,
        msg = '插入成功!',
        params = ctx.request.body
    console.log(params)
    let result = await db(sql, 
        {
            id: new Date().getTime() + utils.getUnique(3),
            title: params.menuName,
            icon: params.icon,
            pathname: params.pathName
        }
        )
    if(result){
        msg = '新增失败!'
    }
    ctx.body = {
        code: code,
        msg: msg
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