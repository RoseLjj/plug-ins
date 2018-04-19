var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (req, res) {
  var method = req.method
  var url = decodeURI(req.url)
  console.log('收到请求了：' + method + ' - ' + url)

  if (url === '/') {
    fs.readFile('./index.html', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else {
    // /data/a.txt   /a.js   /b.js
    fs.readFile('.' + url, function (err, data) {
      if (err) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  }

})

server.listen(3000, function () {
  console.log('服务启动了起来了，监听了 3000 端口')
})
