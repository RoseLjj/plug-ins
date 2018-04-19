var http = require('http')

var server = http.createServer()

server.on('request', function (req, res) {
  // 1. 通过 req.url 拿到当前请求路径
  var url = req.url

  // 2. 根据不同的请求路径，处理不同的响应
  if (url === '/') {
    // res.writeHead(响应状态码, 响应头对象)
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end('<h1>index page</h1>')
  } else if (url === '/login') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end('<h2>login page</h2>')
  } else if (url === '/register') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end('<strong>register page</strong>')
  } else {
    res.end('404 Not Found.')
  }
})

server.listen(3000, function () {
  console.log('running...')
})
