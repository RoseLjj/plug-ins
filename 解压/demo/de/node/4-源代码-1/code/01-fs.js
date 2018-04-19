// 加载操作文件的模块包
// fs 是 Node 平台提供的一个核心模块，专门用来操作文件
var fs = require('fs')

// 写入文件
// fs.writeFile(文件路径, 要写入的文件数据, 回调处理函数)
//    如果文件不存在，则直接新建
//    如果文件已处在，直接覆盖
// fs.writeFile('./data/a.txt', 'hello world', function (err) {
//   // 回调函数中的 err 表示一个错误对象
//   // 当写文件完成的时候：回调函数会自动被调用
//   // 如果有错误，err 就是一个错误对象
//   // 如果没有错误，err 就是 null
//   if (err) {
//     return console.log('写入文件失败了')
//   }
//   console.log('写入文件成功了')
// })

// 读取文件
// fs.readFile(文件路径,[内容编码], 回调函数 )
fs.readFile('./data/a.txt', 'utf8', function (err, data) {
  if (err) {
    throw err
  }
  console.log(data)
})
