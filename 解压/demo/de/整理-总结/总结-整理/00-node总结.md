# Node.js

Node是一个平台,Node是一个框架,基于ECMAscript语言,在这个平台(或者说框架)之上给ECMAscript提供了很多操作系统级别的编程接口

1. cnodejs.org  ==> nodejs交流网站
2. 可阅读书籍
-《深入浅出Node.js》
-《京东销量高的书》
-《Node与Express开发》
-《Nodejs实战》
3. 文章
作者朴灵:node.js和io.js那些事儿

## node指令

- 打开文件 

```cmd
node 00-笔记.md    // node 文件名
```

- 安装包

```cmd
npm install 包名
```

- 开启服务器:http-server

开启电脑端口,使局域网内其他电脑可以通过IP地址访问你用http-server公开的内容

```cmd
//所在文件夹下
http-server
//或者-o是在本机浏览器中打开  hs是http-server简写
hs -o

//-p:5959 ==> 指定端口号
http-server -p 3000

```

- 其他

```cmd
gulb   browser-sync ......
```

## fs 文件

- 写入文件

```js
var fs = require('fs');
fs.writeFile('./data/a.txt','hello world',function(err){
    if(err){
        throw err;
    }
    console.log('success');
});
```

- 读取文件

```js
var fs = require('fs');
fs.readFile('./data/a.txt','utf-8',function(err,data){
    if(err){
        return console.log('失败');
    }
    console.log(data);
});
```

- 追加文件

```js
fs.appendFile('文件路径',需要追加的内容, function (err){
  if(err){
    throw err;
  }
})
```

## http 
```js
var http = require('http');
var server = http.createServer();
server.on('request',function(){
    var url = req.url;
    if(url === '/'){
        res.end('index');
    }else if(url === '/login'){
        //fs.writeHead(响应状态码,响应头对象)
        res.writeHead(200,{
            'Content-Type':'text/html'  //jpg图片:image/jpeg
        })
        fs.readFile('login.html','utf-8',function(err,data){
            if(err){
                throw err;
            }
            res.end(data);  //渲染页面,res.end('必须是字符串')
        })
    }else if(url === '/register'){
        res.end('register');
    }else {
        res.end('404');
    } //必须写,否则无法显示网页
});
server.listen(8080,function(){
    console.log("running....");
});
```

http链式编程

```js

```

\* **Content-Type**

查询: 开源中国 ==>(右下方)OSTools在线工具 ==> 常用对照表(HTTP Mime-type)

## url

url包中的方法,query可以解析提交的数据

```js
var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer();
server.on ('request',function(req,res){
    var method = req.method.toLowerCase();
    //获得数据,第二个参数为true可获得对象,为false获得字符串
    var dataObj = urlModule.parse(req.url,true); 
    //url中现成的路径 
    var pathname = dataObj.pathname;
    var query = dataObj.query;
    if(method === 'get' && pathname === '/add'){
        fs.readFile('./data/a.txt','utf-8',function(err,data){
            if(err){
                throw err;
            }
            var list = JSON.parse(data);
            list.push(query);
            list = JSON.stringify(list);
            fs.writeFile('./data/a.txt',list,function(err){
                if(err){
                    throw err;
                }
                //跳转到其他路径
                res.writeHead(302,{
                    'Location':'/'
                })
                res.end()
            })
        })
    }
```

## mime

相当于Content-Type

```js
var mime = require('mime');
res.writeHead(200,{
     'Content-Type':mime.lookup(filePath)  //filePath是文件路径
})
```

## underscore

```js
var _ = require('underscore');
var comp = _.template('<ul><%list.forEach(function(item){ %>  <li><%= item %></li>  <% })%></ul>>');

var result = comp('list':['banner','apple']);

```

## querystring

将一个查询字符串转为一个对象

```js
var querystring = require('querystring');

...

var data ='';
req.on('data',function(chunk){
    data += chunk;
})
req.on('end',function(){
    data = querystring.parse(data);
    console.log(data);
})

```

## body-parser

在 Express 中配置使用 `body-parser` 插件解析处理表单 POST 请求体

第一步：安装 `body-parser`

```
npm install --save body-parser
```

第二步，在代码中进行配置：

```js
var bodyParser = require('body-parser');
//配置body-parser 插件,用来解析表单POST请求体
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```

只要经过上面的安装配置，则在任意的 post 处理函数中都可以直接通过 `req.body` 来获取表单 POST 请求体数据。

例如：

```js
app.post('login', function (req, res) {
  // 这里可以直接通过 req.body 来获取表单 POST 请求体数据
  console.log(req.body)
})
```





## webstorm编码风格(node)

英文:
setting ==> Languages & Frameworks ==> Node.js and NPM ===> Enable(启用)

## Node中的模块化

### 模块化概念

- 开发生产效率高
- 可维护性好

每一个模块默认都是一个私有的作用域，互相独立，内部实现某一个具体的功能职责，暴露接口成员，通过特定的规则将不同的模块组织到一起，就构成了一个完整的模块系统。

### 用户自定义模块

### 核心模块

### 第三方模块

-  如果想要向外导出多个接口成员,就使用export.xxx = xxx;
-  如果想要向外导出一个单一的成员(例如函数),就使用module.export = xxx;

### 模块加载机制规则

require 方法中传递的参数叫做模块标识，其中涉及三种情况：

- 以 `./` 后者 `../` 或者 `/` 或者 `C:/demo/a.js` 这种形式的文件模块
- 加载核心模块
  + 核心模块是Node内置的，例如：`fs`、`http`、`url` 等
  + 已经别编译到了可执行文件中了
  + 用的时候，必须通过一个特定的核心模块标识名称加载使用
- 加载第三方模块
  + 通过 npm 下载的模块或者说包
  + 加载第三方模块也是通过指定第三方模块的标识名称加载的
  + Node 会判定如果不是文件路径形式的模块，也不是核心模块
  + Node 会基于当前文件模块同级目录中的node_modules目录去查找该第三方模块标识对应的目录
  + 如果在 node_modules 目录中能找到对应的目录，例如 mime
  + 则 Node 去 mime 目录下找 `package.json` 文件
  + 如果找到 `package.json` 文件，则找该文件中的 `main` 属性，然后根据该属性指向的文件模块进行加载
  + 如果上述条件某一个环节不成立，则 Node 进入上一级目录中的 `node_modules` 进行查找，规则同上
  + 如果一直到当前文件模块所属的磁盘根目录下都没有找到对应的 node_modules 中的第三方模块
    * 则最后报错：`can not find module xxx`

---

## Node 中的 JavaScript

- Ecmascript
- *console*
- *setInterval(callback, delay[, ...args])*
- *setTimeout(callback, delay[, ...args])*
- *clearInterval(intervalObject)*
- *clearTimeout(timeoutObject)*
- clearImmediate(immediateObject)
- setImmediate(callback[, ...args])
- __dirname
  + 用于获取当前文件所属目录的绝对路径
  + 使用场景：常用语将相对路径转为绝对路径，防止执行node命令所处的目录影响路径的问题
- __filename
  + 作用：获取当前文件的绝对路径
- process
  + process 是Node中一个进程对象，可以用来访问当前运行进程的一些信息
  + 击杀程序

    ```cmd
    node ==> process.kill(PID)
    //process.pid
    //PID 可以从任务管理器中查看

    ```

  + 输入输出
    * process.stdout.write('字符串')  //不换行,可加\n来换行
    * process.stdin.write('字符串')
- global
  + 类似于浏览器中的 window，是一个全局对象
  + 唯一的区别在于浏览器中的 window 是全局对象，默认在全局声明的变量成员都属于 window
  + Node 中是模块作用域
  + 在一个模块系统中，所有的模块都共享一个 global
  + 也就是说可以通过给 global 显示的挂载成员在多个模块之间全局共享
  + 虽然可以这样做，了解即可，尽量不要使用
- 模块成员
  + module
    * module 是一个模块对象，里面包含了当前模块的一些信息
    * 例如 exports 就是当前模块对外的导出接口对象
  + exports
    * 在每一个模块中，同时还提供了一个接口成员：`exports`
    * `exports` 是 `module.exports` 接口对象的一个引用
    * 也就是可以把 `module.exports.foo=xxx` 的形式简写为 `exports.foo=xxx`
    * 注意：注重向外的暴露的接口对象是：`module.exports`
  + require()
    * 执行被加载模块中的代码
    * 拿到被加载模块中的 `module.exports` 接口对象

---

## 表单提交

- 表单 GET 提交：
    + 表单会把当前表单中的具有 name 的 input 按照：
                  [input的name的value] = [input的value] & [input的name的value] = [input的value]... 这种格式拼接成一个“查询字符串”，然后放到action中指定的url请求路径之后，以“?”作为分隔
         * 在设计这种请求路径的时候：
                同一个路径可以利用多种请求方法，使用多次
                GET /submit 渲染 submit.html
                POST /submit 处理表单 POST 请求

    ```js
    fs.readFile('./data/a.txt','utf-8',function(err,data){
            if(err){
                throw err;
            }
            var list = JSON.parse(data);
            list.push(query);
            list = JSON.stringify(list);
            fs.writeFile('./data/a.txt',list,function(err){
                if(err){
                    throw err;
                }
                //跳转到其他路径
                res.writeHead(302,{
                    'Location':'/'
                })
                res.end()
            })
        })
    ```

- 普通表单 POST 提交（没有文件）：
    + 表单默认行为会自动将当前表单中具有 name 的 input 按照：
                  [input的name的value] = [input的value] & [input的name的value] = [input的value]... 这种格式拼接成一个“查询字符串”，然后放到 “请求报文的请求体” 中，然后对 表单的 action 指向的路径发起请求
    ```js
    var querystring = require('querystring');

    ...

    var newData ='';
    req.on('data',function(chunk){
        newData += chunk;
    })
    req.on('end',function(){
        newData = querystring.parse(newData);
        fs.readFile('./data/a.txt','utf-8',function(err,data){
            if(err){
                throw err;
            }
            var list = JSON.parse(data);
            list.push(newData);
            list = JSON.stringify(list);
            fs.writeFile('./data/a.txt',list,function(err){
                if(err){
                    throw err;
                }
                //跳转到其他路径
                res.writeHead(302,{
                    'Location':'/'
                })
                res.end()
            })
        })
    })
    ```

## package.json 文件

package.json 文件一般用来描述项目的一些基本信息，例如入口文件、依赖项、项目介绍、开发作者等数据。

目前已知的两个非常重要的属性：

- main
  + main 和模块化中的第三方包加载规则有关系
- dependencies
  + dependencies 和 npm 命令行工具有关系
  + 当你安装包的时候，如果加上 `--save` 参数，则npm会自动把这个第三方包依赖信息写入到 `package.json` 文件中的 `dependencies` 字段中
  + 当你执行 `npm install` 的时候，npm 会找到当前项目中的 `package.json` 文件中的 `dependencies` 依赖项，然后依次将所有的依赖下载下来


这个文件最好每一个项目都有，保存一些项目的基本信息。

这个文件可以通过 `npm init` 以向导的形式生成，也可以加上 `-y` 参数，一步生成。

## Express

一个基于 Node 开发的一个快速 Web 开发框架主要用来构建 Server

- http://expressjs.com/
- http://www.expressjs.com.cn/

```js
var express = require('express');
var path = require('path');

//1.调用express方法,得到一个类似server的事例
var app = express();
// 可以访问static文件夹下的任何资源
//express.static中建议使用绝对路径
app.use('/static/', express.static(path.join(__dirname,'static')));

//get方法访问首页
app.get('/',function(req,res){
    res.end('index')
})

app.listen(8080,function(){
    console.log("running....")
})

```

### 处理静态资源

> 参考文档：http://www.expressjs.com.cn/starter/static-files.html

通过 Express 内置的 `express.static` 可以方便地托管静态文件，
例如图片、CSS、JavaScript 文件等。

配置规则如下：

```js
app.use('路径访问前缀', express.static('资源目录路径'))
```

以下是一些配置示例：

- 将目录 static 资源暴露出来，可以通过 `/static/*` 的形式进行访问
  + `app.use('/static/', express.static('static目录的绝对路径'))`
  + `/static/css/a.css`
  + `/static/css/b.css`
  + `/static/img/ab2.jpg`
- 将目录 public 资源暴露出来，不需要任何前缀就可以访问
  + `app.use(express.static('public 目录的绝对路径'))`
  + `/css/bb.css`
  + `/img/a.jpg`
- 将目录 demo 资源暴露出来，可以通过 `/aa/*` /aa前缀的形式进行访问
  + `app.use('/aa/', express.static('demo 目录的绝对路径'))`
  + `/aa/css/a.css`
  + `/aa/**/*.*`
- 将目录 static 资源暴露出来，可以通过 `/static/*` 或者 `/aa/*` 的形式进行访问 
  + `app.use('/aa/', express.static('static 目录的绝对路径'))`
  + `app.use('/static/', express.static('static 目录的绝对路径'))`
  + 上面的形式就是把 static 目录中的资源提供了两种形式，既能以 `/static/` 为前缀进行访问也可以以 `/aa/` 的前缀进行访问

## 中间件

### 中间件的分类:

- 'app.use(function(req,res,next){})' :不关心请求方法和请求路径,没有具体路由规则,任何请求都能通过
- 'app.use('请求路径',function(req,res,next){})' : 不关心请求方法,只关心请求路径的中间件
  + 如果指定了第一个路径参数,则通过req.path获取到的是不包含该请求路径的字符串,
  + 例如当前请求路径是  `/public/a.jpg` 则通过req.path 拿到的是 `a.jpg`; `/public/a/a.css`则获取到 `a/a.css`
  + 不指定第一个参数,则访问到的是`/public/a.jpg`  , `/public/a/a.css`
- 'app.get('请求路径',function(req,res,next){})' :具体路由规则中间件
- 'app.post('请求路径',function(req,res,next){})' :具体路由规则中间件

回调函数中需要调用next(),才能向下执行,否则停止

带参数的next(err),只能被具有四个参数的处理中间件匹配到

```js
app.use('/a',(req,res,next) => {
  ...

  next(err);
})

app.use((e,req,res,next) => {
  const e_log = '
    错误名:${e.name};
    错误消息:${e.message};
    文件名:${e.fileName};
    行号:${e.lineNumber};
    错误堆栈:${e.stack};
    错误时间:${new Date()}
  '
  fs.appendFile('./err_log.txt' ,e_log, err => {
    ...
  })
})
```

### 中间件的作用

### 404 处理中间件

放在最后一个中间件后

```js
app.use((req,res,next) => {
  res.end("404 Not Found")
})
```

## 错误 Error

```js
try{
  可能发生错误的语句
}catch (e){
  console.log('
    错误名:${e.name};
    错误消息:${e.message};
    文件名:${e.fileName};
    行号:${e.lineNumber};
    错误堆栈:${e.stack};
    错误时间:${new Date()}
  ')
}
```


## ejs 模板引擎

www.ejs.co

模板文件必须是ejs文件:

```js
//配置路径,这句配置可以省略,默认会去views目录查找
app.set('views',path.join(__dirname,'views'))
//固定字符串
app.set('view engine','ejs');
//res.render方法是内置的可以直接使用
// res.render('index',{name:小米})

```

模板文件是html

```
//将app.set('view engine','ejs')替换为以下内容
app.engine('.html',require('ejs').__express);
app.set('view engine','html')
```

## req.method
## req.query

## MongoDB

www.runoob.com

### 启动 MongoDB 服务实例

可以通过使用安装程序中的 `mongod` CLI应用程序来启动 MongoDB 服务。

直接在控制台输入：`mongod` 敲回车即可。

在启动的时候，可以通过 `--dbpath` 指定数据服务存储数据的目录，
如果不指定该目录，默认 `mongod` 会去 `c:/data/db` 作为自己的数据存储目录。

64 位版本启动 MongoDB 数据服务：

```
mongod --dbpath C:\data\db
```

### 连接 MongoDB 数据服务

**注意：在进行连接之前请确保你的服务实例是开启状态的（不要关闭刚才开启的数据服务实例）。**

打开一个新的控制台，在控制台输入以下命令用来连接本机的 MongoDB 服务实例：

```
mongo
```

mongo 命令默认去连接本机上的 MongoDB 服务实例：`127.0.0.1:27017`，可以通过下面的命令
指定连接的主机名和端口号：

```
mongo --host 127.0.0.1 --port 27017
```

### 基本操作命令

- `show dbs`
  + 查看当前服务实例上所有的数据库
- `use 数据库名称`
  + 这个命令表示切换到指定的数据库
  + 如果没有，也不会创建
  + 如果已经有了，则表示切换到这个数据库对该数据库进行操作
- `db`
  + 查看当前所处的数据库
- `db.集合名称.insert(数据文档)`
- `show collections`
  + 查看当前数据库中所有的集合
- `db.集合名称.find()`
  + 查询指定集合中所有的数据
  + 可以通过 `db.集合名称.find().pretty()` 美化输出格式
  + 默认是查询所有，可以通过：`db.集合名称.find({查询条件})` 按条件查询集合中的数据
- `db.集合名称.update({更新条件}, {要更新的字段})`
  + 更新指定集合数据
- `db.集合名称.remove({删除条件})`
  + 删除指定集合中的数据

### mongodb的使用

- 安装

```
npm install --save mongodb
```

- 连接

```js
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var ObjectID = mongo.ObjectID;

var url = 'mongodb://localhost:27017/itcast';

MongoClient.connect(url,function(err,db){
    if(err){
        throw err;
    }
    //操作数据
    db
    .collection('students')   //连接的数据库
    .insertOne({             //进行具体操作:增删改查
        name:'张三',
        gender:'m'
    },function(err,result){
    if(err){
      throw err;
    }
    console.log(result)
    })

    //关闭数据库
    db.close()
})


```


```js
//_id=ObjectID(id) 才能使用
exports.info = function(req, res) {
    // res.render('student/info')
    var id = req.query.id;
    db.findOne('student', {_id:ObjectID(id)}, function(err, doc) {
        if (err) {
            return res.json({
                err_no: 500,
                message: '服务器忙....'
            })
        }
       console.log(doc);
       res.render('student/info',{
        student:doc
       })
    })
}
```

```js
//res.redirect 就是重定向,mongodb自带,用来告诉客户端浏览器,重新请求这个路径
//删除时可使用,用于重新渲染页面
res.redirect('/student')

## 表单验证插件

- 安装
``` 
npm i --save jquery-validation
```

- 查询校验规则
www.runoob.com/jquery/jquery-plugin-validate.html

- 引包
```js
<script src="/node_modules/jquery/dist/jquery.js"></script>
<script src="/node_modules/jquery-validation/dist/jquery.validate.js"></script>
<!-- 中文提示包引入,可在此文件中更改提示信息 -->
<script src="node_modules/jquery-validation/dist/localization/messages_zh.js"></script>
```

- 在表单页
```js
$.validator.setDefaults({
        submitHandler:function(){
            alert("提交事件");
        }
    })
$('#form').validate();
```

### 校验规则在表单中

```html
<input type="text" name="name" value="<%= body.name %>" required>
<!-- min属性限制输入的最小值,当输入小于min值时,报错 -->
<input type="number" name="age"  value="<%= body.age %>" min="0" required>
```

### 校验规则在js中

```js
   // $.validator.setDefaults({
    //    submitHandler:function(){
    //        alert("提交事件");
   //   }
   // }) 
   $('#form').validate({
        //规则
        rules:{
            name:{
                required:true,
                minlength:2
            },
            phone:{
                required:true,
                minlength:11,
                maxlength:11
            },
            major:{
                required:true,
            }
        },
        messages:{
            name:{
                required:'请输入学生姓名'
            },
            phone:{
                required:'请输入电话'
            },
            major:{
                required:'请选择'
            }
        },
        submitHandler:function(form){
            var $form = $(form);
            $.ajax({
                url: $form.attr('action'),
                type: $form.attr('method'),
                data: $form.serialize(),
                dataType: 'json',
                success: function(data) {
                    var err_no = data.err_no;
                    switch (err_no) {
                        case 0:
                            window.location.href = '/student';
                            break;
                        case 500:
                            window.alert(data.message);
                            break;
                        default:
                            alert("未知问题");
                            break;
                    }
                }
            })
        }
    });
```

## 爬虫

- 安装

```
npm install cheerio
```

- 使用

```js
var http = require('http');
var cheerio = require('cheerio')

//http.get(访问的网址,callback)
http.get('http://m.wufazhuce.com/question?page=1',function(res){
    var data = '';
    res.on('data',function(chunk){
        data += chunk;
    })
    res.on('end',function(){
        //data就是访问网址中网页的所有源代码
        //data应该是html的字符串
        //按照使用jquery的方法使用$
        var $ = cheerio.load(data);
    })
})
```










