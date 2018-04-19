// path 是 node 内置的一个核心模块，专门用来处理路径的，例如路径拼接
var path = require('path')

console.log(path.join('a', '../c', 'b'))

console.log(path.join(__dirname, 'data/a.txt'))
