var fs = require('fs')
var path = require('path')
var mime = require('mime')

module.exports = function (req, res) {
  var pathname = req.pathname
  if (pathname.startsWith('/static/')) {
    var filePath = path.join(__dirname, pathname)
    fs.readFile(filePath, function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.writeHead(200, {
        'Content-Type': mime.lookup(filePath)
      })
      res.end(data)
    })
  } else if (pathname === '/') {
    fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      data = JSON.parse(data)
      res.render('index', {
        title: '黑客新闻',
        list: data.list
      })
    })
  } else if (pathname === '/submit') {
    res.render('submit')
  } else if (pathname == '/login') {
    res.render('login', {
      title: '登陆标题'
    })
  } else if (pathname === '/add') {
    fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      data = JSON.parse(data)
      data.list.push(req.query)
      data = JSON.stringify(data)
      fs.writeFile(path.join(__dirname, 'data.txt'), data, function (err) {
        if (err) {
          throw err
        }
        // 处理完毕，根据这里的规则，让客户端跳转到 / 首页
        res.writeHead(302, {
          'Location': '/'
        })
        res.end()
      })
    })
  }

}
