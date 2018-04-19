# AngularJS

## 学习资源

- 菜鸟教程：http://www.runoob.com/angularjs/angularjs-tutorial.html
- AngularJS 中文社区：http://angularjs.cn/
- 官方文档：https://docs.angularjs.org/api
- AngularJS 权威教程
- AngularJS 深度剖析与最佳实践
- [AngularJS入门教程](http://www.ituring.com.cn/minibook/303)
- [七步从Angular.JS菜鸟到专家](http://blog.jobbole.com/46779/)

## SPA

&emsp;&emsp;单页Web应用（single page web application，SPA），就是只有一张Web页面的应用。单页应用程序 (SPA) 是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。[1]  浏览器一开始会加载必需的HTML、CSS和JavaScript，所有的操作都在这张页面上完成，都由JavaScript来控制。因此，对单页应用来说模块化的开发和设计显得相当重要。

## AngularJS

### 什么是 AngularJS

- 一款非常优秀的前端高级 **JavaScript 框架**
- 2009 年起先由 Miško Hevery 和Adam Abron 开发
- 后被 Google 收购，用于其多款产品
- 有一个全职的开发团队继续开发和维护这个库
- 可以轻松构建 **SPA 应用程序**
- 通过 **指令** 扩展了 HTML，通过 **表达式** 绑定数据到 HTML
- **最大程度上解放了 DOM 操作**
- 构建更加动感的 HTML 应用程序

### 指令

- `ng-app`:在要被ng管理的HTML元素上加上ng-app指令,表示该元素包裹的所有子元素都可以使用ng的规则,也就是被ng管理;一个页面只能有一个
- `ng-model`:在ng 中被称之为双向数据绑定指令,作用就是,将一个数据模型中的某个成员绑定到表单控件的value上,如果该成员已存在,则直接把成员的值拿过来,赋值给绑定了该元素的value,如果该成员不存在,则直接在数据模型中创建该成员属性

当input的value发生变化的时候,模型中的数据成员也跟着变化
当模型中的数据成员发生变化时候
- `ng-init`:设置默认值,表示在ng应用程序中添加一个属性成员
- `ng-bind`:代替了表达式,解决了页面闪烁问题
    ```
    <div ng-app ng-init="foo='bar'">
        <h1 ng-bind='foo'></h1>    //bar
        //等价于
        <h1>{{ foo }}</h1>        //bar
    </div>
    ```
- `ng-click`: 点击事件
     ```
    <div ng-app ng-init="foo='bar'">
        <h1 ng-bind='foo'></h1>    //bar
        //等价于
        <button ng-click="foo='aaa'"></button>   //上面变成aaa
    </div>
    ```
- `ng-repeat`: 重复一个HTML元素:若遍历的数组中有重复项会报错(解决方法:`ng-repeat="name in friends track by $index"`)
    ```
    <div ng-app ng-init="arr=[1,2,3]">
        <ul>
            <li ng-repeat="item in arr">
                {{ item }}
            </li>
        </ul>
    </div>
    ```
- `ng-class`:专门用来处理样式问题,用法:`ng-class="{样式名:bool值}`(true,表示此样式被作用;false,表示没有作用上)
- `ng-submit` : 给form一个ng-submit指令,当form提交的时候,会触发submit事件,然后执行ng-submit绑定的函数
- `ng-view`:是ng内置的一个指令,占坑标识,用来和ngRoute结合使用的,当when方法中的hash路径匹配成功的时候,会把对应的template渲染到作用了ng-view指令的元素上

### 控制器：Controller

- ng 中的控制器用来对 scope 进行操作
  + 包括初始化数据和定义事件响应函数等
- ng 用来解耦业务逻辑层和视图层的关键
- controller 操作 scope，View 则展现 scope 的内容
- 传统前端程序中大量复杂的 DOM 操作逻辑都被转变成对 scope 的操作

#### 定义控制器的三种方式

第一种：传统方式，使用全局函数定义控制器（1.5 之后已被废弃）：

```js
function DemoCtrl($scope) {
  // code here
}
```

第二种：挂载在某个模块下

```js
angular.module('DemoApp', [])
  .controller('DemoCtrl', function ($scope) {
    // code here
  })
```

第三种：最正确的方式

```js
// 解决因为代码压缩造成注入对象失败问题的方式就是将第二个参数换成一个数组
//模块的第二个参数可写其他模块名,指定对别的模块的依赖,表示继承此模块的性能
angular.module('DemoApp', [])
  .controller('DemoCtrl', ['$scope', '$log', function ($scope, $log) {
    // code here
  }])
```

#### 如何划分控制器

一个页面中，按照不同的功能业务划分不同的控制器。

### 过滤器

ng中提供了过滤器规则,作用就是用来帮你方便的格式化数据的

#### 内置过滤器

- currency : 转换货币格式,不常用(美元,千分位)
- number : 转换成数值
- date : 日期格式化
- json : 数据格式化为json格式
- uppercase : `{{ 'jiedFFF' | uppercase }}`  => JIEDFFF
- lowercase : `{{ 'jiedFFF' | lowercase }}`  => jiedfff
- orderBy : 排序 `"friend in friends | orderBy:'-age'"`
- limitTo : 限定范围
- filter : 
    + 在HTML中:`{{ filter_expression | filter : expression : comparator : anyPropertyKey}}` ,例子: `friendObj in friends | filter:{search:strict}`
    + 在js中自定义过滤器:`$filter('filter')(array, expression, comparator, anyPropertyKey)`
    + 严格过滤 `friendObj in friends | filter:{search:strict}:true`

#### 自定义过滤器

过滤器的本质就是一个方法：你给它一个参数，它帮你返回一个处理过后的数据。

文档：https://docs.angularjs.org/api/ng/type/angular.Module

```js
angular
  .module('module')
  .filter('myFilter', function () {
    return function (传入的数据,可选参数) {
      // code here
      return 过滤结果
    }
  })
```

### RESTful API

学习链接: [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)

### angular-route

- 安装
```
yarn add angular-route
```

- 引包
```
<script src="node_modules/angular-route/angular-route.js"></script>
```

- 使用方法一
```js
angular.module('app',['ngRoute'])
.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/home', {
        //template:'<h1>hehe</h1>'
        templateUrl: 'embedded.home.html',
        controller: 'HomeController'
    }).
    when('/about', {
        templateUrl: 'embedded.about.html',
        controller: 'AboutController'
    }).
    otherwise({
        redirectTo: '/home'
        })
    $locationProvider.html5Mode(true)  //配合<base href='/'>使用
 }]);
```

```html
<head>
  <base href="/">
</head>
<body ng-app="app">
  <ul>
  <!-- 采用HTML5 history 的新模式,url更美观
      ng路由配置步骤:
      1. $locationProvider.html5Mode(true)
      2. 在页面中加入base标签 <base href="/">
      3. a链接的路径直接写相对路径即可,例如<li><a href="/login">login</a></li>
      4. 路由中的匹配判断都以/开头
   -->
    <li><a href="/">主页</a></li>
    <li><a href="home">首页</a></li>
    <li><a href="about">关于</a></li>
    <li><a href="either">其他</a></li>
  </ul>
  <div ng-view></div>
</body>
```

- 使用方法二:

```js
  angular.module('app',['ngRoute'])
  .config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
      $routeProvider.
      when('/home', {
          //template:'<h1>hehe</h1>'
          templateUrl: 'embedded.home.html',  //路径相对于base标签中的路径写
          controller: 'HomeController'
      }).
      when('/about', {
          templateUrl: 'embedded.about.html',
          controller: 'AboutController'
      }).
      otherwise({
          redirectTo: '/home'
          })
      //不使用$locationProvider
      //$locationProvider.html5Mode(true)  //配合<base href='/'>使用
   }]);
```

```html
<head>
  <base href="/">
</head>
<body ng-app="app">
  <ul>
    <!-- hash 方法 -->
    <!-- 更改路径 添加 #!/ -->
    <li><a href="#!//">主页</a></li>
    <li><a href="#!/home">首页</a></li>
    <li><a href="#!/about">关于</a></li>
    <li><a href="#!/either">其他</a></li>
  </ul>
  <div ng-view></div>
</body>
```

### ngResource

- 安装

```
yarn add angular-resource
```

- 引包
```
<script src="node_modules/angular-route/angular-resource.js"></script>
```

- 添加依赖
```

```

### $http

$http是ng内置的一个ajax交互API

```
angular.module('app',['ngRoute'])
.controller('mainController',['$scope','$http',function($scope,$http){
  $scope.contacts = []
  $http.get({
    url:'./data.json',
    method:'get'
  }).then(function(data){
    $scope.contacts = data.data.list
  })
}])
```

**跨域请求**

[跨域资源共享CORS详解](www.ruanyifeng.com/blog/2016/04/cors.html)
[MDN-http访问控制CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS#Access-Control-Allow-Origin)


```js
// http://127.0.0.1:3000=>app.js
// 在浏览器响应头中加入以下首部字段,浏览器就不会有跨域限制了

    res.jsonp({
      err_code:0,
      result:contacts
    })
```

```js
//当前url:  http://127.0.0.1:8080
angular.module('app',['ngRoute'])
.config(['$sceDelegateProvider',function($sceDelegateProvider){
  $sceDelegateProvider.resourceUrlWitelist([
    'self',  //配置支持本站内部的,否则本站内都不允许请求
    'http://127.0.0.1:3000/**'
  ])
}])
.controller('mainController',['$scope','$http',function($scope,$http){
  $scope.contacts = []
  $http
    .jsop('http://127.0.0.1:3000/contacts')
    .then(function(data){
      $scope.contacts = data.data.list
    })
}])
```

### 解决跨域问题

```js
// http://127.0.0.1:3000=>app.js
// 在浏览器响应头中加入以下首部字段,浏览器就不会有跨域限制了
//低版本浏览器不支持
    res.set("Access-Control-Allow-Origin","*")
    res.json({
      err_code:0,
      result:contacts
    })
```

```js
// http://127.0.0.1:8080=>main.js
angular.module('app',['ngRoute'])
.config(['$sceDelegateProvider',function($sceDelegateProvider){
  $sceDelegateProvider.resourceUrlWitelist([
    'self',  //配置支持本站内部的,否则本站内都不允许请求
    'http://127.0.0.1:3000/**'
  ])
}])
.controller('mainController',['$scope','$http',function($scope,$http){
  $scope.contacts = []
  $http
    .get('http://127.0.0.1:3000/contacts')
    .then(function(data){
      $scope.contacts = data.data.list
    })
}])

```

### 代理解决跨域

```js
const http = require('http');

http.get('http://www.baidu.com',res=> {
  let data = ''
  res.on('data',chunk => data += chunk)
  res.on('end',() => {
    console.log(data)
  })
})
```

### cors跨域请求头设置

```js
const express = require('express');
const app = express();
app.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorizaion,Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
})
```

### express 中间件 express-http-proxy

- 安装

`npm install express-http-proxy --save`

- 使用

```js
var proxy = require('express-http-proxy');
var app = require('express')();
app.use('/proxy', proxy('www.google.com'));

```



### angular.bootstrap

```
angular.bootstrap(document,['app2','app'])
```

可以引导加载多个模块,然后在对应的节点中就可以随意的使用被加载的任何一个模块中的所有成员,例如控制器,过滤器

ng中的模块本质上没有什么作用,模块没有私有作用域

正确的加载组织多个模块的方式
  1. 定义一个主模块: 加载依赖的模块
  2. 将主模块作用到具体的HTML节点上
  ```
  angular.module('main',['app','app2'])
  ```


### 新版angular

&emsp;&emsp;AngularJS 提供了一套模块化解决方案,可以有效的避免控制器函数的全局命名空间污染问题
    1. 通过`angular.module(模块名称,空数组)`创建一个模块,注意:不用忘记添加第二个参数,给一个空数组,返回值就是该模块(ng-app="模块名称")
    2. 获取模块,通过调用模块的controller方法为该模块创建一个控制器`angular.controller(控制器名称,回调函数)`,这个控制器只存在于该模块中,在使用该模块的HTML元素中加上`ng-controller='控制器名称'`

### 老版angular

在 ng 中把代码写到 JavaScript 中:
    1. 在 **全局** 定义一个具名的函数
    2. 在函数中传递一个参数：$scope  $scope 就是数据模型，$scope 必须这样写，否则不行
    3. 在该函数内部写你自己的业务代码
       1. 根据视图通过 $scope 初始化模型数据成员
       2. 通过 $scope 提供行为函数
       3. 将数据模型成员和行为函数绑定到具体的元素上

使用注意：
    1. 函数名建议以帕斯卡命名法，同时以 Controller 结尾，目的是为了和普通函数做一个区分
    2. 函数不是由自己的来调用的，ng 通过 ng-controller 指令将该函数和指定的 HTML 节点元素绑定起来，ng 会自动来执行该函数

### 使用总结

- AngularJS 最大程度上减少了页面上的 DOM 操作
- 让开发人员更专注于业务操作
- 通过简洁的指令结合页面结构与逻辑数据
- 通过自定义指令实现组件化编程
- 代码结构更合理
- 维护成本更低
- AngularJS 解放了传统 JavaScript 中频繁的 DOM 操作

### AngularJS 优缺点

优点：

1. AngularJS模板功能强大丰富，自带了极其丰富的angular指令。
2. AngularJS是完全可扩展的，与其他库的兼容效果很好，每一个功能可以修改或更换，以满足开发者独特的开发流程和功能的需求。
3. AngularJS是一个比较完善的前端MVC框架，包含服务，模板，数据双向绑定，模块化，路由，过滤器，依赖注入等所有功能；
4. AngularJS是互联网巨人谷歌开发，这也意味着他有一个坚实的基础和社区支持。

缺点：

1. AngularJS强约束导致学习成本较高，对前端不友好。但遵守 AngularJS 的约定时，生产力会很高，对 后台服务器开发程序员友好。
2. AngularJS不利于SEO，因为所有内容都是动态获取并渲染生成的，搜索引擎没法爬取。
3. AngularJS作为 MVVM 框架，因为实现了数据的双向绑定，对于大数组、复杂对象会存在性能问题。


### AngularJS 表达式

- AngularJS 表达式写在双大括号内：`{{ expression }}`
- AngularJS 表达式把数据绑定到 HTML，与 `ng-bind` 指令基本一致
- AngularJS 将在表达式书写的位置"输出"数据
  + 数字
  + 字符串
  + 对象
  + 数组
- AngularJS 表达式 很像 JavaScript 表达式：它们可以包含字符串、操作符和变量
  + 与 JavaScript 表达式不同，AngularJS 表达式可以写在 HTML 中
  + 与 JavaScript 表达式不同，AngularJS 表达式不支持条件判断，循环及异常
  + 与 JavaScript 表达式不同，AngularJS 表达式支持过滤器
