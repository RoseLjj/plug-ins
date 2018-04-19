var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (req, res) {
  var method = req.method
  var url = decodeURI(req.url)
  console.log('收到请求了：' + method + ' - ' + url)

  if (url === '/') {
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else if (url === '/login') {
    fs.readFile('./views/login.html', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else if (url === '/about') {
    fs.readFile('./views/about.html', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else if (url.startsWith('/static/')) {
    // fs.readFile 读取文件的时候路径如果是：
    //    /   这里的 / 会去当前脚本文件所属磁盘盘符根目录
    //    ./ 或者 ../  就是相对于当前文件路径
    //    如果不是以 / 或者 ./ 或者 ../ ，则默认就是相当于当前文件路径 ./
    //    ./ 或者 ../ 实际上是相对于执行 node 命令所处命令台中的路径的
    //    如果你是真的在当前文件所属目录执行的 node 命令（上面的问题是遇不到的）
    fs.readFile(__dirname + url, function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.end(data)
    })
  }

})

server.listen(3000, function () {
  console.log('服务启动了起来了，监听了 3000 端口')
})
