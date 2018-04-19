var express = require('express')
var index = require('./controllers/index')
var student = require('./controllers/student')

var router = express.Router()

router
  .get('/', index.index)

router
  .get('/students', student.index)
  .get('/students/info', student.info)
  .get('/students/list', student.list)
  .get('/students/new', student.new)
  .post('/students/new', student.doNew)
  .get('/students/remove', student.remove)

module.exports = router
