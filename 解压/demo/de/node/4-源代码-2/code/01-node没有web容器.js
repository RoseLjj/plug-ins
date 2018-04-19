var http = require('http')

var server = http.createServer()

var count = 0

// 对于 Node Server 来说
// 只是提供了一个极简的服务模型
// 仅仅可以做到，接收请求
//      任何请求都会触发 server 的 request 请求事件
//      任何一个请求进来之后都会给该请求分配一个所谓的回调处理函数
server.on('request', function () {
  console.log('收到客户端请求了: ' + ++count)
})

server.listen(3000, function () {
  console.log('服务启动了起来了，监听了 3000 端口')
})
