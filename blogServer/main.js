const Koa = require('koa')  // 加载koa中间件
const app = new Koa()   // 实例化koa中间件

const bodyparser = require("koa-bodyparser")()  // 加载解析数据的中间件

// let router = require("koa-router")() // 加载路由中间件并得到实例
const router = require("./interface/index.js")

app.use(bodyparser) // 应用到整个项目

// router.get("*", (ctx) => {
// 	ctx.body = {
// 		 code: 0,
// 		 msg: '请求成功',
// 		 data: [1,2,3,4]
// 	 }
// })

app.use(router.routes())

app.listen(8083)

console.log("you application on http://localhost:8083")


