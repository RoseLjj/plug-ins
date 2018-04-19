var http = require('http')
var fs = require('fs')
var url = require('url')

var server = http.createServer()

/**
 * 所有的请求入口都在服务器实例对象的 request 请求事件中
 * 客户端想要访问的服务端资源，都是通过 url 标识来控制的
 * 也就是说，哪些资源可以被客户端请求访问，哪些资源不能被访问
 * 以及资源的 url 标识都是经过服务端处理以及设计过的
 * 不是说你想访问什么就访问什么，至于访问什么以及路径是什么由后台人员说了算
 */

server.on('request', function (req, res) {

  // console.log(req.url)

  // url 核心模块提供了一个 parse 方法
  // 可以将一个 url 转换为一个方便操作使用的对象，例如提取 url 的路径和查询字符串部分就很方便
  // 默认转出来的对象中包含一个 query 属性（查询字符串）是普通的字符串
  // 可以通过指定第二个参数为 true 将转换得到的 query 中的查询字符串自动转为对象方便使用
  // 所有的中文传输的时候都会进行编码传输
  // 后台拿到之后一定要通过 decodeURI 进行解码，然后再使用，否则中文会乱码
  // decodeURI 方法只能解析 utf8 编码的数据，否则报错
  var urlObj = url.parse(decodeURI(req.url), true)

  var pathname = urlObj.pathname
  var query = urlObj.query

  var method = req.method.toLowerCase() // 获取当前请求的请求方法
  if (method === 'get' && pathname === '/') {
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        throw err
      }
      // 对于发送的响应数据
      // 只能是二进制数据或者字符串
      // 如果是字符串会被转为二进制再发送
      //    如果读出来的文本文件内容想要进一步，那你一定要根据编码先转成普通字符串再使用处理
      //    如果读出来的文本文件内容不处理，则可以直接通过 res.end 发送
      // 如果是二进制，则直接发送
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(data)
    })
  } else if (method === 'get' && pathname.startsWith('/static')) {
    var staticFilePath = '.' + pathname
    fs.readFile(staticFilePath, function (err, data) {
      if (err) {
        res.writeHead(404)
        return res.end()
      }
      res.end(data)
    })
  } else if (method === 'get' && pathname === '/submit') {
    fs.readFile('./views/submit.html', function (err, data) {
      if (err) {
        throw err
      }
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(data)
    })
  } else if (method === 'get' && pathname === '/favicon.ico') {
    fs.readFile('./static/img/favicon.ico', function (err, data) {
      if (err) {
        throw err
      }
      res.end(data)
    })
  } else if (method === 'post' && pathname === '/submit') {
    res.end('post submit')
  } else if (method === 'get' && pathname === '/add') {
    // 将解析收到的数据保存起来
    fs.readFile('./data.txt', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      var list = JSON.parse(data)
      list.push(query)
      fs.writeFile('./data.txt', JSON.stringify(list), function (err) {
        if (err) {
          throw err
        }
        // 处理完成，这里的业务是让客户端跳转到 /
        // 这里通过在响应头中设置状态码为 302 重定向
        // 通过在响应头中加入一个 Location 告诉浏览器你往哪儿跳
        res.writeHead(302, {
          'Location': '/'
        })
        res.end()
      })
    })
  } else {
    res.writeHead(404)
    res.end('404 Not Found.')
  }
})

server.listen(3000, function () {
  console.log('Server is running at port 3000.')
  console.log('   Please visit http://127.0.0.1:3000/')
})
