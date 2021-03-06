# 课程笔记

## 下次课预习内容

- Node 中的模块化
- 学习 CNODE 中【新手入门】板块中的在线教程，例如 【Node包教不包会】

## 课程安排

- Node
- 流行框架
  + AngularJS
  + VueJS
  + Git
  + Gulp
  + Npm
  + Bower
  + Webpack
- 博学谷在线教育项目

## 1. Node.js 介绍

### 1.1 网站开发模型（BS）

- Server
  + 为客户端提交接口：数据
  + Java、.Net、Ruby、Python、PHP、Go、Swift、Lua
  + 学 Node 本质不是在学 Node，在学 服务器（Web后台）编程
  + 请求
    * 处理
  + 响应
  + 大前端时代：JavaScript 语言也可以运行在服务器端
  + 使用 JavaScript 这门语言也可以进行服务器编程
  + JavaScript 通过 Node.js 运行在服务器端
- Browser
  + 客户端：把一坨用户看不懂的数据变成友好的形式给用户体验

### 1.2 什么是 Node.js？

> 简单的说 Node.js 就是运行在服务端的 JavaScript
> Node开发就是利用 Ecmascript + 第三方开源库 + Node平台环境API进行编程

- 什么是 JavaScript
  + JavaScript 一个运行在浏览器端的脚本原因
  + 运行时：浏览器
  + Ecmascript：JavaScript 基本语法：var、if-else、for、Array、Object、String、function
  + BOM
    * Window
    * DOM
  + 渲染引擎
  + JavaScript 解析执行引擎
    * 在所有浏览器中，Google Chrome 的 V8 引擎是最快的 JS 脚本代码解析执行引擎
  + 通过 V8 引擎解析和执行 JavaScript 代码

- Node 官网：https://nodejs.org/en/

- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
  + Node.js 是一个构建与 Chrome V8 引擎之上的一个 JavaScript 运行时（执行环境）
  + Node 使用 JavaScript 进行编程
  + Node 采用了 Chrome 的 V8 引擎解析和执行 JavaScript 脚本代码
  + Node 不是一种语言，Node 可以用来解析和执行 JavaScript 代码
  + 在 Node 没有 DOM、BOM 了，也不用去关心样式、结构问题了
  + Node 在基本的 JavaScript 语言之上，或者在 Node 平台给 Ecmascript 提供了大量的底层编程接口
    * 例如文件IO
    * 例如网络IO
    * 处理数据
    * 操作数据库
    * 构建网络服务
    * 。。。
- Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
  + event-driven：事件驱动
    * 在 Node 中，也采用了类似于浏览器端的编程思想，事件模型编程思想
  + non-blocking I/O model：非阻塞IO模型
    * Node 中大量的通过类似于浏览器中 ajax 的方式进行编程
    * 绝大多数代码都是异步编程模型
  + lightweight & efficient：轻量和高效
- Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
  + Node.js 包生态系统 Npm 是世界上最大的开源库生态系统
  + largest ecosystem：最大的开源库生态系统

### 1.3 使用 Node 可以做什么？

- 开发网站服务器
- 游戏服务器
- 开发命令行工具
  + 软件分为两种：
  + GUI：看得见，鼠标点点点
  + CLI：命令窗口，各种命令，选项参数等

### 1.4 Node 发展史

- Node.js 由 Ryan Dahl 和一些其他的开发者于2009年在 Joyent 工作时发明
- Node 作者当初只是想做一个类似于 Apache 的服务器而已，最初的时候起的名字叫：webjs
- 2009年2月，Ryan Dahl在博客上宣布准备基于V8创建一个轻量级的Web服务器并提供一套库。
- 2009年5月，Ryan Dahl在GitHub上发布了最初版本的部分Node.js包，随后几个月里，有人开始使用Node.js开发应用。
- 2009年11月和2010年4月，两届JSConf大会都安排了Node.js的讲座。
- 2010年年底，Node.js获得云计算服务商Joyent资助，创始人Ryan Dahl加入Joyent全职负责Node.js的发展。
- 2011年7月，Node.js在微软的支持下发布Windows版本。[2] 

### 1.5 学习资源推荐

- 国内NodeJS开发者社区：https://cnodejs.org/
- 《深入浅出Node.js》：作者：阿里巴巴.朴灵

---

## 2. 快速上手

### 2.1 环境安装

- https://nodejs.org/en/download/

### 2.2 Hello World

- 当你在控制台输入：`node 01-hello-world.js` 之后
- 实际上通过你安装目录下的那个 `node.exe` 可执行程序读取了 `01-hello-world.js` 文件中的源代码
- 然后解析和执行文件中的代码
- 最后将结果打印输出到了控制台中

### 2.3 path 环境变量

- 目的：就是为了在终端的任意目录中都可以找到该可执行文件
- 配置方式：
  + 一种在 path 中写路径，通过英文分号分隔
  + 一种先定义变量，给一个变量值，然后在 path 中通过英文分号进行分隔，使用 `%变量名%` 引用该变量

### 2.4 文件操作

### 2.5 HTTP 服务

### 2.6 文件版留言本

---

## 3. Node 基础

### 3.1 Node 中的 JavaScript

- *console*
- *setInterval(callback, delay[, ...args])*
- *setTimeout(callback, delay[, ...args])*
- *clearInterval(intervalObject)*
- *clearTimeout(timeoutObject)*
- clearImmediate(immediateObject)
- setImmediate(callback[, ...args])
- __dirname
- __filename
- module
- exports
- global
- process
- require()

### 3.2 模块化

### 3.3 自定义模块（用户自己编写的模块）

- require
- module.exports
- exports

### 3.4 核心模块（Node 提供）

> 在线文档地址：https://nodejs.org/dist/latest-v6.x/docs/api/

以下是常用的核心模块及作用：

| 核心模块名  |       作用       |
|-------------|------------------|
| fs          | 文件操作         |
| http        | 网络操作         |
| net         | 更底层的网络操作 |
| os          | 操作系统相关     |
| path        | 文件路径操作     |
| querystring | 查询字符串处理   |
| url         | url操作处理      |

### 3.5 第三方模块（也称作包）

### 3.6 包与 Npm

## 目标

1. 能掌握path环境变量的配置
2. 能掌握基本的文件读写操作
3. 能掌握基本的 http 服务构建（路径、静态资源、页面资源）
4. 能掌握在 Node 中处理表单 GET 提交
