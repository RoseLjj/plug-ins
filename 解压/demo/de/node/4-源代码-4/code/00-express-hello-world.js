var express = require('express')

// 1. 调用 express 方法，得到一个类似于 server 的实例
//    一般称作 app
var app = express()

// 2. 通过 app 根据不同的请求方法及请求路径设定具体的处理函数

// 当用户以 GET 请求 / 的时候，执行对应的回调处理函数
app.get('/', function (req, res) {
  res.end('hello world')
})

// 当用户以 GET 请求 /login 的时候，执行对应的回调处理函数
app.get('/login', function (req, res) {
  res.end('hello login')
})

// 3. 启动监听
app.listen(3000, function () {
  console.log('服务器已启动，请访问：http://127.0.0.1:3000/')
})
