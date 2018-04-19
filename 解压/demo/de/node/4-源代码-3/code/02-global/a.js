var foo = 'bar'

console.log('模块内部的：' + foo)

// 挂载到全局，就又有了污染的问题，所以不要这样去使用
global.foo = foo

console.log('global上的：' + global.foo)
