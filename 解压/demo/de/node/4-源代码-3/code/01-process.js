// process.stdout.write('hello')
// process.stdout.write('world')
// process.stdout.write('world')
// process.stdout.write('world')
// process.stdout.write('world')
// process.stdout.write('world')
// process.stdout.write('world')
// process.stdout.write('world')

// function log(str) {
//   process.stdout.write(str + '\n')
// }

process.stdin.on('data', function (data) {
  console.log(data.toString())
})
