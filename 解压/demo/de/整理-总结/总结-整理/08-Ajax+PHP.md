# Ajax 和 PHP

## PHP了解

### 基础语法

#### 输出

- echo '' : 直接输出
- print_r() : 将复杂数据类型的内容全部输出
- var_dump() : 将数据类型以及数据的值全部输出

```php
echo 'hello world';
echo $number;

print_r($bool); 

var_dump($string);
```

#### 定义变量

$相当于js中的var

```php
$number = 123;
$string = 'abc';
$bool = true;
...
```

#### 字符和变量的拼接 用 .

```php
echo '$key'.$key.'$value'.$value;
```



#### 设置输出内容的编码格式

`header('content-type:text/html;charset=utf-8');`

### 语句

#### 选择语句

- if-else
- switch-case

#### 循环语句

- for
- while
- do-while

### 数组

#### 定义数组

```php
$arr = array('jack', 'rose', 'iceMountain', '葫芦娃');

echo $arr;       //Array
print_r($arr);  //Array ( [0] => jack [1] => rose [2] => iceMountain [3] => 葫芦娃 ) 
var_dump($arr);  
/*array
  0 => string 'jack' (length=4)
  1 => string 'rose' (length=4)
  2 => string 'iceMountain' (length=11)
  3 => string '葫芦娃' (length=9)
*/
```

#### 判断是否存在于数组中

```php
$userArr = array('jack', 'rose', 'iceMountain', '葫芦娃');
$userName = 'jack';

$result = in_array($userName, $userArr);  //返回bool值
```

#### 关系型数组 (键值对)

```php
$person = array('name'=>'jack','age'=>100,'skill'=>'jump');

print_r($person);      //Array ( [name] => jack [age] => 100 [skill] => jump ) 
echo $person['skill']; //jump
```

关系型数组的遍历 

- foreach-as
```php
foreach($person as $key => $value){
    echo '$key'.$key;
    echo '<br>';
    echo '$value'.$value;
    echo '-----';
}
```

- for-in
```php
for($i=0; $i < count($fruitArr); $i++){
    echo $fruitArr[$i];
    echo '<br>';
}
```

### html和php一起使用

```php
<ul>
<?php
    for ($i=0; $i <5 ; $i++) { 
        echo '<li>'.$i.'个小星星</li>';
    }
?>
</ul>

<ul>
<?php for($i=0; $i<5; $i++){?>
    <li><? echo $i; ?></li>
<? } ?>
</ul>

<ul>
    <?php for($i=0; $i<count($person); $i++){?>
        <li><? echo $person[$i]; ?></li>
    <? } ?>
</ul>
```

### 表单提交获取数据

```
<form action="01.php" method="get|post">
    <input type="text" name="name">
    <input type="number" name="age">
    <input type="button" value="提交">
</form>

<?php 
    print_r($_GET); | print_r($_POST);
    echo $_GET['name']; | echo $_POST['name']; 
    echo $_GET['age']; | echo $_POST['name'];
?>
```

### 表单提交文件 /PHP获取文件信息

```html
<!-- 如果想要上传文件  form标签必须设置enctype="multipart/form-data"属性 -->
<form action="02.sendFile.php" method="post" enctype="multipart/form-data">
    <input type="file" name="userFile">
    <input type="submit">
</form>
```

```php
// 1. 获取文件信息 (获得的是关系型数组)
$userFile = $_FILES['userFile'];

// 2. 获取文件路径
$filePath = $userFile['tmp_name'];

// 3. 获取文件的名字
$fileName = $userFile['name'];

// 4. 移动上传的临时文件move_uploaded_file(移动的文件,移动的目标地址(可写相对路径))
move_uploaded_file($filePath, './file/'.$fileName);
```

读取保存在文本中的信息

```php
<?php
    // 读取保存在文本中的数据
    $result = file_get_contents('./info.txt');
   
    // 返回读取的数据
    echo $result;   
?>

```

### C&S 和 B&S

[CS和BS的区别和优缺点](http://www.cnblogs.com/scnuyz/p/5808808.html)


## Ajax

### ajax五部曲

- ajax-get

```js
// 1.创建对象
var ajax = new XMLHttpRequest();

// 2.设置URL
ajax.open('get','01.stars.php?starName='+this.dataset['name']);

// 3.发送请求
ajax.send();

// 4.注册回调函数
ajax.onreadystatechange = function(){
    // 5. 判断是否正确,并使用
    if(ajax.readyState==4 && ajax.status==200){
        console.log(ajax.responseText);
    }
}
```

- ajax-post

```js
// 1.创建
var ajax = new XMLHttpRequest();

// 2.设置
ajax.open('post','01.ajax_post.php');

// 2.1 使用post提交数据的时候一定要添加 请求头
ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

// 3.发送
// post 请求发送的数据 写在 send方法中
ajax.send('name=jack&age=18');

// 4.注册
ajax.onreadystatechange = function (){
    // 5.判断并使用获取的数据
    if(ajax.readyState == 4 && ajax.status == 200){
        console.log(ajax.responseText);
    }
}
```

### 封装Ajax

```js
// ajax 发送get请求
function ajax_get(url,data) {
    // 1.创建
    var ajax = new XMLHttpRequest();
    
    // 判断是否有数据 并修正 url
    if(data){
        // 修改url
        url+='?';
        url+=data;
    }else{
        
    }
    
    // 2.设置
    ajax.open('get',url);

    // 3.发送
    ajax.send();

    // 4.注册
    ajax.onreadystatechange = function (){
        // 5.判断并使用 
        if(ajax.status==200 &&ajax.readyState ==4){
            // 获取数据
            console.log(ajax.responseText);
        }
    }
}


// ajax 发送post请求
function ajax_post(url,data){
    // 1.创建
    var ajax = new XMLHttpRequest();
    
    // 2.设置
    ajax.open('post',url);

    if(data){
        // 设置请求头 如果使用post不发送数据 那么 下面这行代码 不是必须的
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    
        // 3.发送
        // post请求数据 在send中发送
        // 格式 key=value&key2=value2
        ajax.send(data);
    }else{
        // 3.发送
        ajax.send();
    }

    // 4.注册
    ajax.onreadystatechange = function (){
        // 5.判断并使用 
        if(ajax.status==200 &&ajax.readyState ==4){
            // 获取数据
            console.log(ajax.responseText);
        }
    }
}



// 合并
/*
    参数1:请求的类型
    参数2:请求的url
    参数3:请求成功的回调函数
    参数4:发送的数据
    缺点 参数的传递顺序 必须严格按照要求
    $().fullPage({
        afterLoad:function(){
            
        }
    })
 * */

function ajax_tool(type,url,success,data){
    
    // 1.创建
    var ajax = new XMLHttpRequest();
    
    // 如果是get 才需要修改url
    if(type=='get'){
        if(data){
            // 修改url
            url+='?';
            url+=data;
        }
        // 2.设置
        ajax.open(type,url);
        
        // 3.发送
        ajax.send();
    }else{
        // 进入到这里 说明是post请求
        // 2.设置
        ajax.open(type,url);
        
        // 如果data有内容
        if(data){
            // 设置请求头 如果使用post不发送数据 那么 下面这行代码 不是必须的
            ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        
            // 3.发送
            // post请求数据 在send中发送
            // 格式 key=value&key2=value2
            ajax.send(data);
        }else{
            // 3.发送
            ajax.send();
        }
    }

    // 4.注册
    ajax.onreadystatechange = function (){
        // 5.判断并使用 
        if(ajax.status==200 &&ajax.readyState ==4){
            // 获取数据 要把数据给传递出去
//          console.log(ajax.responseText); 

            // 传入一个叫做 success的函数
            success(ajax.responseText);
//          return ajax.responseText;
        }
    }
}


// 升级:修改工具函数 只接受一个参数 对象
/*
    参数
    type:"请求方法"
    url:请求的url
    success:请求成功的回调函数
    data:发送的数据
 * */
function ajax_tool_plus(option){
    // 1.创建
    var ajax = new XMLHttpRequest();
    
    // 如果是get 才需要修改url
    if(option.type=='get'){
        if(option.data){
            // 修改url
            option.url+='?';
            option.url+=option.data;
        }
        // 2.设置
        ajax.open(option.type,option.url);
        // 3.发送
        ajax.send();
    }else{

        ajax.open(option.type,option.url);

        if(option.data){
            ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            ajax.send(option.data);
        }else{
            // 3.发送
            ajax.send();
        }
    }

    // 4.注册
    ajax.onreadystatechange = function (){
        // 5.判断并使用 
        if(ajax.status==200 &&ajax.readyState ==4){

            // 传入一个叫做 success的函数
            option.success(ajax.responseText);
        }
    }
}

```

## XML

- XML文件格式

```xml
//自定义标签,开头必须有,最外层有一个大标签包裹
<?xml version="1.0" encoding="UTF-8"?>
<stars>
    <star>
        <name>高圆圆</name>
        <skill>笑的很美</skill>
        <path>img/gyy.jpg</path>
    </star>
    <star>
        <name>刘诗诗</name>
        <skill>长得很仙,嫁给了四爷</skill>
        <path>img/lss.jpg</path>
    </star>
    <star>
        <name>林宥嘉</name>
        <skill>刚刚求婚,但是爱 '说谎'</skill>
        <path>img/lyj.jpg</path>
    </star>
    <star>
        <name>罗永浩</name>
        <skill>做了个锤子  手机</skill>
        <path>img/lyh.jpg</path>
    </star>
</stars>
```

- ajax获取XML字符串

```js
// ajax.responseText 能够获取  字符串
//console.log(ajax.responseXML)

// 解析 xml数据
// 1.获取 所有的 star标签
var stars = ajax.responseXML.querySelectorAll('star'); 
```

- php获取XML文件

```php
<?php
    // 修改 相应报文 告诉浏览器 返回的内容是 xml
    header('content-type:text/xml;charset=utf-8');
    
    // 读取xml中的数据 // 返回读取出来的数据 
    echo file_get_contents('normal.xml');
?>
```

## json

### json文件格式

**必须使用双引号,不能是单引号**

```json
[
    {
        "name":"葫芦娃",
        "skill":"9爷爷"
    },
    {
        "name":"黑猫警长",
        "skill":"biubiubiu"
    },
    {
        "name":"秦时明月",
        "skill":"3d特效"
    }
]
```

```json
{
    "name":"jack",
    "age":18,
    "skill":"painting"
}
```

### json编码和解码

- 编码:将字符串解析成对象或数组
JSON.parse
- 解码
JSON.stringify

### PHP获取json文件

```php
<?php
    // 读取 标示数组的json格式字符串
    echo file_get_contents('info/arr.json');
?>
```

### ajax获取json数据

```js
reader.onreadystatechange = function(){
    if(ajax.readyState==4&&ajax.status==200){
        // 获取json数据
        console.log(ajax.responseText);
        
        // 转化为 我们使用方便的js对象
        var obj = JSON.parse(ajax.responseText);
        console.log(obj);
    }
}
```

