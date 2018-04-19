var db = require('./db')


exports.index = function (req, res) {
  res.render('student/list', {
    foo: 'bar'
  })
}

exports.list = function (req, res) {
  db.find('students', {}, function (err, docs) {
    if (err) {
      return res.json({
        err_no: 500,
        message: '查询数据失败，请稍后重试'
      })
    }
    res.json({
      err_no: 0,
      data: docs
    })
  })
}

exports.new = function (req, res) {
  res.render('student/new')
}

exports.doNew = function (req, res) {
  db.insertOne('students', req.body, function (err, result) {
    if (err) {
      return res.json({
        err_no: 500,
        message: '服务器忙，请稍后重试'
      })
    }
    res.json({
      err_no: 0,
      message: 'insert success'
    })
  })
}

exports.info = function (req, res) {
  var id = req.query.id
  db.findOne('students', {
    _id: db.ObjectID(id)
  }, function (err, doc) {
    if (err) {
      return res.json({
        err_no: 500,
        message: '操作数据库失败了'
      })
    }
    console.log(doc)
    res.render('student/info', {
      student: doc
    })
  })
}

exports.remove = function (req, res) {
  var id = req.query.id
  db.deleteOne('students', {
    _id: db.ObjectID(id)
  }, function (err, result) {
    if (err) {
      return res.json({
        err_no: 500,
        message: '操作数据库失败'
      })
    }

    res.json({
      err_no: 0,
      message: 'success'
    })

    // res.redirect 就是重定向方法
    // 用来告诉客户端浏览器，你重新请求这个路径吧
    // 对于异步请求来说，服务端的 redirect 是不管用的
    // res.redirect('/students')
  })
}
