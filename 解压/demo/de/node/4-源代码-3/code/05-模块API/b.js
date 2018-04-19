// 默认每个模块内部有一个 module 对象
// 而 module 对象内部有一个 exports 属性成员
// var module = { exports: {} }

// 由于导出接口的时候每一次使用 module.exports.xxx = xxx 不太方便
// 为了解决这个问题
// 所以在每一个模块内部还提供了一个成员：exports
// 就好比，在模块中都有这么一句代码：
// var exports = module.exports

// 默认模块是一个私有的模块作用域
// 如果想要被外部访问内部的成员
// 使用 module.exports 接口对象
var foo = 'bar'
console.log('bbb')

// module.exports.foo = foo

// module.exports.f = function () {
//   console.log('fff')
// }

// exports.foo = foo
// exports.f = function () {
//   console.log('fff')
// }

// 如果想向外暴露一个单独的函数、字符串、数字、数组等单个成员
// 这个时候必须通过给 module.exports 重新赋值才行\
// module.exports = function () {
  
// }

// 对于上面的做法，能不能使用 exports 实现呢
// 不行
// 为什么？
//    一旦重新给 exports 赋值，就会导致 exports 和 module.exports 之间的引用关系破裂
//    每一个模块中最终向外暴露的是 module.exports
//    所以给 exports 赋值是不管用的，外部拿不到

// exports.foo = 'bar'
// exports = 'bar' // 不影响原来的 module.exports

// 然后在模块的最后会有一句隐式代码：
// return module.exports

// 使用建议：
//    如果想要向外导出多个接口成员：就使用 exports.xxx = xxx
//    如果想要导出一个单一的成员（例如函数）：就是用 module.exports = xxx
