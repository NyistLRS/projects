const db = require("../../db/index.js")
const sqls = require("../../sql/index.js")
exports.checkName = async function(ctx, next) {
    let sql = sqls.login.checkName + `'${ctx.request.query.userName}'`
    let msg, code = 200
    console.log(sql, 'sql')
    let result = await db(sql, [])
    if(result && result.length == 0) {
        code = 0
        msg = "用户名可用！"
    }else{
        code = 1
        msg = "用户名已经存在！"
    }
    ctx.body = {
        code: code,
        msg: msg,
        // data: result
    }
}

exports.login = async function(ctx, next) {
    let params = ctx.request.body,
        code = 200,
        msg,
        token,
        result;
    if (JSON.stringify(params) == "{}") {
        result = null
    }else {
        result = await db(sqls.login.checkLogin(params.name, params.psw), [])
    }
    if (result && result.length == 1) {
        code = 1
        msg = "登录成功！"
        token = '1111111'
    } else {
        code = 0
        msg = "登录失败！"
    }
    ctx.body = {
        code: code,
        msg: msg,
        token: token
    }
}