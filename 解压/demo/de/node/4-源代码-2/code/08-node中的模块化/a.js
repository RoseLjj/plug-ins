// 模块系统
// 由很多的小文件组成的一个系统就是模块系统
// 而这些小文件之间相互依赖，相互通信，互相引用和调度完成一些列功能
// 这里模块指的是 JavaScript 文件
// 1. 模块与模块之间不能有污染
// 2. 模块与模块之间通过特定的规则相互通信
//    require 函数用来加载一个模块
//        被加载的文件模块后缀名可以省略，建议省略
//        模块天生就是一个私有作用域，外部都拿不到
//        用户自己编写的模块，一定要通过 ./ 或者 ../ 或者 绝对路径的 的形式进行加载
//        1. 执行该模块中的代码
//        2. 获取被加载模块中的 module.exports 接口对象
//    module.exports 是暴露的接口对象
//    详细笔记见 README.md 中的 【Node中的模块化】部分

var foo = 'bar'
var bModule = require('./b')

// console.log('a里面的foo：' + foo)

console.log(bModule)

console.log(bModule.foo)
bModule.a()
