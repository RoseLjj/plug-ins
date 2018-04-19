var ejs = require('ejs'),
  people = ['geddy', 'neil', 'alex'],
  html = ejs.render('<%= title %> <%= people.join(", "); %>', { title: '你好', people: people });
console.log(html)
