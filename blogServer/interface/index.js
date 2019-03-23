const router = require("koa-router")({
    // prefix: 'blog'
})

const login = require("../model/login/index.js")

// router.get("/checkName", (ctx) => {
//     console.log(ctx.request.query.name)
//     let msg = '用户名可用!'
//     if (ctx.request.query.name == 'lrs') {
//         msg = "用户名已经存在！"
//     }
//     ctx.body = {
//         code: '200',
//         msg: msg,
//         data: null
//     }
// })
router.get("/checkName", login.checkName)
router.post("/login", login.login)

module.exports = router



