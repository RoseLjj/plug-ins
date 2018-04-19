var handler = require('./handler')

// router 模块
// 职责：匹配请求路径，分发具体的处理函数
//       这就叫路由

module.exports = function (req, res) {
  var pathname = req.pathname
  if (pathname.startsWith('/static/')) {
    // 调用某个处理函数
    handler.handleStatic(req, res)
  } else if (pathname === '/') {
    handler.showIndex(req, res)
  } else if (pathname === '/submit') {
    handler.showSubmit(req, res)
  } else if (pathname == '/login') {
    handler.showLogin(req, res)
  } else if (pathname === '/add') {
    handler.doAdd(req, res)
  }
}
