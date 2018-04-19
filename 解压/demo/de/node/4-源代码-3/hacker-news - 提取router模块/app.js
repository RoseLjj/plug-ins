var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')
var _ = require('underscore')
var router = require('./router')

http
  .createServer(function (req, res) {
    
    var urlObj = url.parse(decodeURI(req.url), true)
    
    req.pathname = urlObj.pathname
    req.query = urlObj.query

    render(res)

    // 我希望我的 router 里面不要有太多的职责
    // 对于一些公共的处理
    // 例如处理查询字符串
    // 处理 render 方法
    // router 希望它能纯粹一些
    // 只是使用 req 或者 res 中的一些成员
    // 然后只做分发这件事儿
    // 就是根据不同的请求路径分发到具体的请求处理
    router(req, res)
  })
  .listen(3000, function () {
    console.log('服务器已启动，请访问：http://127.0.0.1:3000/')
  })

function render(res) {
  res.render = function (viewName, tplObj) {
    fs.readFile(path.join(__dirname, 'views/' + viewName + '.html'), 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      data = _.template(data)(tplObj || {})
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(data)
    })
  }
}
