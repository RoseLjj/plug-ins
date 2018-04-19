var http = require('http')
var fs = require('fs')
var path = require('path')
var mime = require('mime')
var url = require('url')
var _ = require('underscore')

// 1. 搭建一个基本的 web 服务器，能响应 hello world 即可
// 2. 将静态资源统一处理：处理成能像 Apache 一样，真的能以文件的绝对真实路径去访问
// 3. 给你的页面设计 pathname
//    设计url其实就是设计路由
//    /         views/index.html
//    /submit   views/submit.html
//    /add      处理表单提交请求

// http.createServer 方法可以直接指定一个回调处理函数
// 默认就会被绑定到 server 的 request 请求事件中
http
  .createServer(function (req, res) {

    // 使用 url 模块的 parse 方法解析当前请求路径
    // 拿到请求路径中的不包含查询字符部分以及解析出来的查询字符串对象
    var urlObj = url.parse(decodeURI(req.url), true)
    var pathname = urlObj.pathname
    req.query = urlObj.query

    // 这里表示给 res 对象挂载一个方法：render
    // 目的是为了后面渲染页面的时候使用方便
    render(res)

    if (pathname.startsWith('/static/')) {
      var filePath = path.join(__dirname, pathname)
      fs.readFile(filePath, function (err, data) {
        if (err) {
          // res.write 和 res.end 响应的数据必须是字符串或二进制数据
          //                      字符串也会转成二进制数据再发送
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
      // 处理 表单 GET 提交，按照业务规则来
      // 1. 表单 get 提交是通过url中的查询字符串进行传递的
      //     将 url 中的查询字符串解析出来，拿到 key=value&key=value 的格式字符串
      //     将拿到的查询字符串转换成一个对象，方便操作处理
      //     以上两个子步骤可以通过使用 node 提供的 url 模块中的 parse 方法解析处理
      // 4. 把数据保存到你的文件中
      // 5. 发送响应处理结果
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
