# 课程笔记

## 反馈

- require.js和sea.js讲不讲啊 看招聘的很多要求这个
  + 项目中会介绍
- 老师,为什么听课的时候懵,看视频的时候感觉讲的通俗易懂,豁然开朗啊,这样太浪费时间了,有啥方法能讲课的时候让人豁然开朗吗? 祝大家元宵节快乐
- 感觉不难，Angela 难吗？？？？
  + AngularJS
  + Angela
  + 把服务端编程思想移植到了前端
- 希望老师早上多讲点东西,早上精力充沛能听进去,下午东西感觉太多,难以吸收
-  下去基本废了,操作数据库开始就跟丢了...
  +  API
  +  mongoose
- 上课能听懂,但是要是让自己写的时候写不出来,只有看着你的代码抄着才能一步步写出
  + 1. 听懂 2. 写出来 3. 自己去尝试实现某个功能

---

## 复习

---

## 知识点

- 广告管理
- 文件上传
- 异步无刷新删除
- 异步无刷新分页
- 编辑功能
- 注册登陆

## 在 Node 中使用 formidable 处理文件上传

> 具体使用方式参照官方文档：https://www.npmjs.com/package/formidable

第一：安装：

```bash
# npm install --save formidable
yarn add formidable
```

第二：基本使用：

```js
var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
 
http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload 
    var form = new formidable.IncomingForm();
 
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
 
    return;
  }
 
  // show a file upload form 
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(8080);
```
