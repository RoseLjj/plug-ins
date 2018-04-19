# 课程笔记

## 反馈

-  老师是教过我们的老师里面第二帅的！
- 老师为什么对蒋老师的一些习惯这么了解 :)
-  老师能不能在代码的关键部分写上些注释,便于课后整理.不然得回看视频找思路,浪费时间.
-  又是函数封装！！居然还混合了模块！！那块一听就觉得头疼 我怀疑自己是不是听了假课
  +  作用域
    *  通过特定的交互规则让模块与模块之间相互通信
  +  JavaScript 代码本身就可以加载另一个代码
- 老是，我想上午复习快一点，然后将新东西慢一点；
- 觉得老师讲的挺好的 但是我也不知道为什么上课老是情不自禁的走神 晚自习总是有种无从下手的感觉。。。好伤心啊
- 按前后端分离的思想,接收数据,渲染模板不是前端的工作吗?,所以可以用ajax接收node的响应数据吗?
-  封装部分很模糊.是因为之前的知识没有学好么,在这块听得好吃力...还有一点就是,建议老师最后发给我们的代码最终都是能运行成功的代码..因为上课时候有调整,删除某个文件或者怎样后,代码运行不起来..我比较笨,自己找错误都要找半天......
- 对于模块化这方面有点模糊，就是对于一个项目 根据 什么划分模块，分为 什么模块，为什么要这样分（是习惯还是规定）；
  + 既没有习惯
  + 模块核心就是封装细节，实现功能，有自己的特定职责，不要做太多事儿
- 老师，一个案例有好几个步骤，希望老师有个好习惯，一个步骤一个独立的文件，这样我们看代码的时候，思路清楚些。。。谢谢老师
-  众口难调，老师保持自己的节奏就好！岂能尽如人意，但求无愧于心！！！谢谢！
- 老师的发型挺帅的 ，头发在哪理得，我也要去
-  查看详情页还是不太清楚，希望老师能再讲一遍

---

## 复习

---

## 知识点

- Express
- MongoDB

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

> 一个基于 Node 开发的一个快速 Web 开发框架
> 主要用来构建 Server

- http://expressjs.com/
- http://www.expressjs.com.cn/

### hello-world

```js
var express = require('express')

// 1. 调用 express 方法，得到一个类似于 server 的实例
//    一般称作 app
var app = express()

// 2. 通过 app 根据不同的请求方法及请求路径设定具体的处理函数

// 当用户以 GET 请求 / 的时候，执行对应的回调处理函数
app.get('/', function (req, res) {
  res.end('hello world')
})

// 当用户以 GET 请求 /login 的时候，执行对应的回调处理函数
app.get('/login', function (req, res) {
  res.end('hello login')
})

// 3. 启动监听
app.listen(3000, function () {
  console.log('服务器已启动，请访问：http://127.0.0.1:3000/')
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

### 路由系统

### 在 Express 配置使用 ejs 模板引擎

Express 这个框架很精简，默认是不支持模板引擎的，需要配合一些第三方的模板引擎来结合使用，
例如这里将 `ejs` 和 `express` 结合起来使用：

第一：安装 `ejs`：

```
npm install --save ejs
```

第二：在代码中配置：

```js
app.set('views', 模板文件存储路径) // 注意，这里可以不配置，因为 Express 默认会去项目中的 `views` 目录进行查找
app.set('view engine', 'ejs') // 这里表示让 Express 中的 res.render 方法使用 ejs 模板引擎，这里的 ejs 就是你安装的那个模板引擎的包名
```

只要经过了上面这种配置，然后 res 对象上就会自动多出一个方法：`res.render` ,使用方式和咱们之前
自己封装的一样：`res.render('视图名称', {要解析替换的对象数据})`

注意：使用了 ejs 模板引擎，默认视图文件后缀名必须是 `.ejs`，否则 render 方法找不到。
如果想要修改，可以像下面这样：

```js
// app.set('view enginge', 'ejs')
// 将上面这句配置改为下面的形式，就修改了默认的 .ejs 后缀名
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')
```

### 在 Express 中配置使用 `body-parser` 插件解析处理表单 POST 请求体

第一步：安装 `body-parser`

```
npm install --save body-parser
```

第二步，在代码中进行配置：

```js
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

### 中间件

> 明天会详细讲解

### 错误处理

> 在项目中会详细讲解

### 使用 Express 快速改造 Hacker News 案例

> 见 4-源代码\hacker-news-express 目录

---

## MongoDB

### 数据库概念

> 数据库：一个电子化的文件柜

数据库就是为我们方便的管理数据的一个平台，例如对数据的存储、修改、查询等都非常的方便。

### 数据库分类

数据库产品有很多，以下是一些常见的数据库产品：

- MySQL
- Oracle
- DB2
- SqlServer
- MongoDB
- etc.

数据库没有排名之分，各有各的应用场景，我们这里学习的是 MongoDB 数据库。

### MongoDB 数据库

> 为了更好的学习 MongoDB 数据库，大家可以参考菜鸟教程上的 MongoDB 数据库教程文档，
> 链接地址：http://www.runoob.com/mongodb/mongodb-tutorial.html

### MongoDB 数据库存储结构

![mongodb数据存储结构](img/mongodb数据存储结构.png)

### 安装与配置 MongoDB 数据库环境

详情见视频：`11_安装MongoDB数据库环境`

### 启动 MongoDB 服务实例

可以通过使用安装程序中的 `mongod` CLI应用程序来启动 MongoDB 服务。

直接在控制台输入：`mongod` 敲回车即可。

在启动的时候，可以通过 `--dbpath` 指定数据服务存储数据的目录，
如果不指定该目录，默认 `mongod` 会去 `c:/data/db` 作为自己的数据存储目录。

64 位版本启动 MongoDB 数据服务：

```
mongod --dbpath C:\data\db
```

32 位版本使用下面的命令启动数据服务：

```
mongod --dbpath 数据存储路径 --journal --storageEngine=mmapv1
```

提示：如果不加 `--dbpath`, mongod 会自动使用 `C:\data\db` 目录作为自己的数据存储路径，
所以，如果你已经有了 `C:\data\db` 目录了，可以省略 `--dbpath`。

执行完上面的命令并成功开启 MongoDB 数据服务实例之后，就把该控制台最小化到一边就可以了，
千万不要关闭，否则无法连接，如果对数据库的操作结束，可以打开该控制台通过 `Ctrl + C` 关闭。

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

如果看到类似于如下的字样说明连接成功：

```
MongoDB shell version v3.4.0
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.0
Server has startup warnings:
2017-01-18T18:49:53.865+0800 I CONTROL  [initandlisten]
2017-01-18T18:49:53.865+0800 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-01-18T18:49:53.866+0800 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2017-01-18T18:49:53.866+0800 I CONTROL  [initandlisten]
>
```

如果提示 “无法连接主机”，请检查你的 MongoDB 数据服务实例是否开启。

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

## 使用 Node 操作 MongoDB

安装 MongoDB 官方提供的驱动包：

```
npm install --save mongodb
```

具体操作方式请参考官方文档：https://www.npmjs.com/package/mongodb

## 目标

1. 能概述 package.json 文件的作用并能列举出至少两个该文件内成员的名称及作用
2. 能掌握 Express 的基本使用（配置处理静态资源、配置使用ejs模板引擎、解析处理表单POST请求体）
3. 能完成将 Hacker-News 案例改为 Express 版本
4. 能掌握 MongoDB 数据库的基本使用（添加、删除、修改、查询）
