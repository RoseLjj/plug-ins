var http = require('http')
var fs = require('fs')

var server = http.createServer()

// 对于整个 BS 交互模型来说
// 核心编程思想就是：
//    接收请求
//    处理请求
//    响应请求
server.on('request', function (req, res) {
  var method = req.method
  var url = req.url
  console.log('收到请求了：' + method + ' - ' + url)

  if (url === '/index.html') {
    fs.readFile('./index.html', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  }

})

server.listen(3000, function () {
  console.log('服务启动了起来了，监听了 3000 端口')
})
