// module.exports.foo = 'bar'
// console.log(exports === module.exports)
// exports.foo = 'bar'

// module.exports = function () {
//   console.log('fff')
// }

// 由于 exports 是 module.exports 的一个引用
// 所以一旦给 exports 重新赋值就会导致 exports 和 module.exports 之间的引用关系破裂
// 而每一个模块内部最终向外暴露的是 module.exports，所以给 exports 赋值是不管用
// 使用建议：
//    如果想向外暴露多个成员，肯定是挂载到 module.exports 即可，那这个时候多使用 exports.xxx = xxx
//    如果只是想向外暴露一个单独的函数、字符串、数字等信息，则必须通过给 module.exports 赋值
// exports = function () {
//   console.log('fff')
// }

// var obj1 = {}
// var obj2 = obj1

// // obj2.foo = 'bar'

// obj2 = {a: 'aaa'}


