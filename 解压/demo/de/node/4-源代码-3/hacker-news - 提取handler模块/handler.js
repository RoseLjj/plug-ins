var fs = require('fs')
var path = require('path')
var mime = require('mime')
var config = require('./config')

var dataPath = config.dataPath

// handler 模块
// 就是提供处理函数

exports.handleStatic = function (req, res) {
  var filePath = path.join(__dirname, req.pathname)
  fs.readFile(filePath, function (err, data) {
    if (err) {
      return res.end('404')
    }
    res.writeHead(200, {
      'Content-Type': mime.lookup(filePath)
    })
    res.end(data)
  })
}

exports.showIndex = function (req, res) {
  fs.readFile(dataPath, 'utf8', function (err, data) {
    if (err) {
      throw err
    }
    data = JSON.parse(data)
    res.render('index', {
      title: '黑客新闻',
      list: data.list
    })
  })
}

exports.showSubmit = function (req, res) {
  res.render('submit')
}

exports.showLogin = function (req, res) {
  res.render('login', {
    title: '登陆标题'
  })
}

exports.doAdd = function (req, res) {
  fs.readFile(dataPath, 'utf8', function (err, data) {
    if (err) {
      throw err
    }
    data = JSON.parse(data)
    data.list.push(req.query)
    data = JSON.stringify(data)
    fs.writeFile(dataPath, data, function (err) {
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
