var _ = require('underscore')
var fs = require('fs')

var arr = [123, 456, 789]

_.each(arr, function (num) {
  console.log(num)
})

console.log(_.map(arr, function (num) {
  return num + 1
}))

// 更具有表意性
console.log(_.first(arr))

console.log(_.random(0, 100))

// var compiled = _.template("<ul><% list.forEach(function (item) { %>  <li><%= item %></li> <% }) %></ul>");
// var result = compiled({
//   list: [
//     '苹果', '香蕉', '橘子'
//   ]
// })
// console.log(result)

fs.readFile('./data/tpl.html', 'utf8', function (err, data) {
  if (err) {
    throw err
  }
  var result = _.template(data)({
    list: [
      '苹果', '香蕉', '橘子'
    ]
  })
  console.log(result)
})
