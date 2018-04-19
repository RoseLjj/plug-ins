var http = require('http')
var fs = require('fs')

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
    fs.readFile('./data/index.html', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else if (url === '/login') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    fs.readFile('./data/login.html', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else if (url === '/register') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    fs.readFile('./data/register.html', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else if (url === '/css/main.css') {
    res.writeHead(200, {
      'Content-Type': 'text/css'
    })
    fs.readFile('./data/css/main.css', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else if (url === '/css/login.css') {
    res.writeHead(200, {
      'Content-Type': 'text/css'
    })
    fs.readFile('./data/css/login.css', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else if (url === '/baby') {
    res.writeHead(200, {
      'Content-Type': 'image/jpeg'
    })
    // utf8 是字符编码，读取歌曲、图片、视频等文件的时候，一定不要指定编码，不管用
    // 如果是这种富文本等文件，就不用指定编码，直接发送二进制数据就可以了
    fs.readFile('./data/img/ab2.jpg', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else {
    fs.readFile('./data/404.html', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  }
})

server.listen(3000, function () {
  console.log('running...')
})
