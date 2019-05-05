require('babel-register')
var Koa = require('koa')
var app = new Koa()
var router = require('koa-router')()
var superagent = require('superagent')
var Jquery = require('cheerio')

router.get('*' , async (ctx, next) => {
    console.log(ctx)
    let res, 
    url = `https://github.com${ctx.originalUrl}`
    try{
        res = await superagent.get(url)
    }catch(error){

    }
    if(!res){
        ctx.body = {
            msg: null
        }
        return
    }
    var $ = Jquery.load(res.text)
    var items = []
    $("#topic_list .topic_title").each((index, el) => {
        var $el = $(el)
        items.push({
            title: $el.attr('title'),
            href: $el.attr('href')
        })
    })
    ctx.res.write($.html())
    ctx.res.end()
})
app.use(router.routes())

app.listen(1213)