var cModule = require('./c')

console.log(cModule)

var foo = 'baz'
console.log('bbb')

function f() {
  console.log('fff')
}

module.exports.foo = foo
module.exports.a = f
