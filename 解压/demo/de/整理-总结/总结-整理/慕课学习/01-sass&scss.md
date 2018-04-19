# SASS & SCSS

## 语法格式、编译调试

### 命令编译

#### 单文件编译

```
sass <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css
```

#### 多文件编译

```
sass sass/:css/
```

上面的命令表示将项目中“sass”文件夹中所有“.scss”(“.sass”)文件编译成“.css”文件，并且将这些 CSS 文件都放在项目中“css”文件夹中。

#### 自动监测编译

```
sass --watch <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css
```

例:

```
sass --watch sass/bootstrap.scss:css/bootstrap.css
//把项目中“bootstrap.scss”编译出“bootstrap.css”文件，并且将编译出来的文件放在“css”文件夹中
```

一旦 bootstrap.scss 文件有任何修改，只要我重新保存了修改的文件，命令终端就能监测，并重新编译出文件

#### 软件编译

1. Koala (http://koala-app.com/)
2. CodeKit（https://incident57.com/codekit/index.html）
3. Compass.app（http://compass.kkbox.com/）
4. Scout（http://mhs.github.io/scout-app/）
5. Prepros（https://prepros.io/）

### 自动化编译

使用grunt和gulp编译

#### Grunt配置Sass编译

想了解 Grunt 同学请单击这里学习《Grunt-beginner前端自动化工具》。

```
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'style/style.css' : 'sass/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}
```

#### Gulp配置Sass编译

```
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);
```

### Sass常见错误

1. 最为常见的一个错误就是字符编译引起的。在Sass的编译的过程中，是不是支持“GBK”编码的。所以在创建 Sass 文件时，就需要将文件编码设置为“utf-8”
2. 路径中的中文字符引起的。建议在项目中文件命名或者文件目录命名不要使用中文字符。

### 不同样式风格的输出方法

Sass示例代码:

```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

#### 嵌套输出方式 nested

编译:(添加--style nested)

默认编译输出方式就是nested

```
sass --watch test.scss:test.css --style nested
```

编译后的css:

```
nav ul {
  margin: 0;
  padding: 0;
  list-style: none; }
nav li {
  display: inline-block; }
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none; }
```

#### 展开输出方式 expanded 

在编译的时候带上参数“ --style expanded”:

```
sass --watch test.scss:test.css --style expanded
```

编译后的css

```
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

这个输出的 CSS 样式风格和 nested 类似，只是大括号在另起一行.

#### 紧凑输出方式 compact 

在编译的时候带上参数“ --style compact”:

```
sass --watch test.scss:test.css --style compact
```

该方式适合那些喜欢单行 CSS 样式格式的朋友，编译后的代码如下：

```
nav ul { margin: 0; padding: 0; list-style: none; }
nav li { display: inline-block; }
nav a { display: block; padding: 6px 12px; text-decoration: none; }
```

#### 压缩输出方式 compressed 

在编译的时候带上参数“ --style compressed”:

```
sass --watch test.scss:test.css --style compressed
```

压缩输出方式会去掉标准的 Sass 和 CSS 注释及空格。也就是压缩好的 CSS 

```
nav ul{margin:0;padding:0;list-style:none}nav li{display:inline-block}nav a{display:block;padding:6px 12px;text-decoration:none}
```

### Sass调试

Sass 调试一直以来都是一件头痛的事情，使用 Sass 的同学都希望能在浏览器中直接调试 Sass 文件，能找到对应的行数。值得庆幸的是，现在实现并不是一件难事，只要你的浏览器支持“sourcemap”功能即可。早一点的版本，需要在编译的时候添加“--sourcemap”  参数：

```
sass --watch --scss --sourcemap style.scss:style.css
```

在 Sass3.3 版本之上（我测试使用的版本是 3.4.7），不需要添加这个参数也可以：

```
sass --watch style.scss:style.css
```

在命令终端，你将看到一个信息：

```
>>> Change detected to: style.scss
  write style.css
  write style.css.map

```

## 基本特性 - 基础

### 声明变量

示例:

```
$brand-primary : darken(#428bca, 6.5%) !default; // #337ab7
$btn-primary-color : #fff !default;
$btn-primary-bg : $brand-primary !default;
$btn-primary-border : darken($btn-primary-bg, 5%) !default;
```

如果值后面加上!default则表示默认值。

### 普通变量与默认变量

**普通变量**

```
$brand-primary : darken(#428bca, 6.5%);
```

**默认变量**

!default:sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可。

```
$brand-primary : darken(#428bca, 6.5%) !default;
```

变量默认值： !default

如果该变量已经被赋值， 就不会再次赋值， 但是，如果还没有被赋值，就会被指定一个值，变量的值如果是 null 的话，会被 !default 当做没有值

### 全局变量和局部变量

**全局变量**:全局变量就是定义在元素外面的变量

**局部变量**:定义在元素内部的变量

局部变量只会在局部范围内覆盖全局变量

```css
//SCSS
$color: orange !default;  //定义全局变量(在选择器、函数、混合宏...的外面定义的变量为全局变量)
.block {
  color: $color;     //调用全局变量
}
em {
  $color: red;       //定义局部变量
  a {
    color: $color;   //调用局部变量
  }
}
span {
  color: $color;     //调用全局变量
}
```

### 什么时候声明变量

1. 该值至少重复出现了两次；
2. 该值至少可能会被更新一次；
3. 该值所有的表现都与变量有关（非巧合）。

基本上，没有理由声明一个永远不需要更新或者只在单一地方使用变量。

在线编辑器网址：http://sassmeister.com/

