// 通过路径加载文件模块是不受任何环境影响的
// 也就是说永远相对于当前文件模块
// var bModule = require('./b')

// / 会去当前文件的所属磁盘根目录去查找
// 这种情况基本不用
// require('/b')

var bModule = require('./b')
bModule()
