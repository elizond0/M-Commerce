const Koa = require('koa')
const app = new Koa()

app.use(async ctx=>{
  ctx.body=`<h1>test koa</h1>`
})

app.listen(3000,()=>{
  console.log("koa服务启动 http://localhost:3000 ")
})

