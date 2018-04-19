var fs = require('fs')

// 在每个文件中都有两个属性成员：
//    __dirname
//    __filename

console.log(__dirname)
console.log(__filename)

// 在操作文件的时候，如果是相对路径，最好将相对路径通过 __dirname 这个属性拼接成绝对路径
// 这样的话就不受 node 执行路径影响了
fs.readFile(__dirname + '/data/a.txt', function (err, data) {
  if (err) {
    throw err
  }
  console.log(data)
})

