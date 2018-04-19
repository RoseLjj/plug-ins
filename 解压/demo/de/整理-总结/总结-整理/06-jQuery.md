# jQuery

## 版本介绍

最常用的两个版本：`1.12.x和最新推出的3.0.0`<br>
两个版本的区别：`3.0版本，不支持IE6、7、8`=====` PC端的开发主要使用1.12.x版本`

## 入口函数

jQuery的入口函数:

- 第一种：`$(document).ready(function(){ //内容 });`
- 第二种：`$(function(){ //内容 });`

## 链式编程

```js
// 链式编程代码示例
$(“li”).parent(“ul”).parent().siblings(“div”).children(“div”).html(“内容”);
```

链式编程原理：return this; <br>
通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 this
`end(); // 结束当前链最近的一次过滤操作，并且返回匹配元素之前的一次状态`


## jQuery对象和DOM对象的转换

### jQuery对象转DOM对象

- 第一种方式
`var btn1 = $btn[0]; //通过索引的方式把DOM对象取出来（推荐使用此方式）`
- 第二种方式
`var btn2 = $btn.get(0);//调用get()方法也可以`

### DOM对象转jQuery对象

`$(普通的DOM对象)`

## jQuery选择器

### 基本选择器

- \#  : Id选择器   
    + `$(“#btnShow”).css(“color”, “red”);`
    + 选择id为btnShow的一个元素（返回值为jQuery对象，下同）
- **.**  : 类名选择器   
    + `$(“.liItem”).css(“color”, “red”);`
    + 选择含有类liItem的所有元素
- 标签名 : 标签选择器   
    + `$(“li”).css(“color”, “red”);`
    + 选择标签名为li的所有元素
- 用逗号隔开  : 并集选择器   
    + `$(“div,p,li”).css(“color”, “red”);`
    + div、p、li都会被选中
- 挨在一起  : 交集选择器   
    + `$(“li.current”).css(“color”, “red”);`
    + 选择标签名为li并且类名为current的元素

### 层级选择器

- 空格 : 后代选择器   
- `$(“#j_wrap li”).css(“color”, “red”);`
选择id为j_wrap的元素的所有后代元素li
- > : 子代选择器   
- `$(“#j_wrap > ul > li”).css(“color”, “red”);`
选择id为j_wrap的元素的所有子元素ul的所有子元素li

### 常用的过滤选择器

- :eq(index) : 选择匹配元素中索引号为index的一个元素，index从0开始 
    + `$(“li:eq(2)”).css(“color”, ”red”);`
    + 选择li元素中索引号为2的一个元素
- :odd  :  选择匹配元素中索引号为奇数的所有元素，index从0开始    
    + `$(“li:odd”).css(“color”, “red”);`
    + 选择li元素中索引号为奇数的所有元素
- :even  : 选择匹配元素中索引号为偶数的所有元素，index从0开始    
    + `$(“li:odd”).css(“color”, “red”);`
    + 选择li元素中索引号为偶数的所有元素

- 筛选选择器（注：都是方法）

- find(selector) : 查找指定元素的所有后代元素（子子孙孙） 
    + `$(“#j_wrap”).find(“li”).css(“color”, “red”);`
    + 选择id为j_wrap的所有后代元素li
- children(selector) : 查找指定元素的直接子元素（亲儿子元素） 
    + `$(“#j_wrap”).children(“ul”).css(“color”, “red”);`
    + 选择id为j_wrap的所有子代元素ul
- siblings(selector) : 查找所有其他的兄弟元素（不包括自己）  
    + `$(“#j_liItem”).siblings().css(“color”, “red”);`
    + 选择id为j_liItem的所有兄弟元素
- next(selector) : 查找下一个兄弟元素   
    + `$(“#j_liItem”).next().css(“color”, “red”);`
    + 选择id为j_liItem的下一个兄弟元素
- prev(selector) : 查找前一个兄弟元素   
    + `$(“#j_liItem”).prev().css(“color”, “red”);`
    + 选择id为j_liItem的前一个兄弟元素
- parent(selector)  :  查找父元素（亲的）   
    + `$(“#j_liItem”).parent(“ul”).css(“color”, “red”);`
    + 选择id为j_liItem的父元素
- eq(index) :  查找指定元素的第index个元素，index是索引号，从0开始 
    + `$(“li”).eq(2).css(“color”, “red”);`
    + 选择所有li元素中的第二个

## jQuery-DOM事件

### 添加事件

1. `on("事件名",响应函数)`
```js
$("div").on("click",function() {
    console.log("哈哈!");
})
```
2. 给多个事件添加同一个响应函数,事件名与事件名之间用空格隔开<br>
`on("事件名 事件名",响应函数)`
```js
$("div").on("mouseover click",function() {
    console.log("哈哈!");
})
```
3. 一次性添加多个事件的响应<br>
`on({"事件名1":"响应函数1","事件名2":"响应函数2","事件名3":"响应函数3"})`
```js
$("div").on(
    {"click",function() {console.log("哈哈!");},
    {"mouseover",function() {console.log("哈哈!");},
    {"mouseout",function() {console.log("哈哈!");}
})
```
4. 可以向响应函数中传参<br>
参数写在函数名的后面,用逗号分隔<br>
参数为对象或者数字<br>
```js
$("div").on("click",{"小明":"哈哈"},function(event){
    console.log(event.data);
})
```
5.链式操作<br>
```js
$("div").on("click",function(){console.log("click");}
        .on("mouseover",function(){console.log("mouseover");}
        .on("click",hand)
function hand(){console.log("click222");}
)
```

### 移除事件

1. 移除所有事件<br>
`off()`
```js
$("div").off();
```
2. 移除某一事件<br>
`off(事件名)`
```js
$("div").off("click");
```
3. 移除某一响应函数<br>
`off("事件名",函数名)`
```js
$("div").off("click",hand);
```

### 绑定事件

事件的发展历程: 简单事件绑定 >> bind事件绑定 >> delegate事件绑定 >> on

#### bind

作用：给匹配到的元素直接绑定事件（不推荐，1.7以后的jQuery版本被on取代）

- $("p").bind("click mouseenter", function(e){});
    + 第一个参数：事件类型
    + 第二个参数：事件处理程序

#### delegate

作用: 给匹配到的元素绑定事件，对支持动态创建的元素有效（特点：节省资源，支持动态创建的元素）（不推荐，1.7以后的jQuery版本被on取代）

- $(".parentBox").delegate("p", "click", function(){});
    + 第一个参数：selector，要绑定事件的元素
    + 第二个参数：事件类型
    + 第三个参数：事件处理函数

与前两种方式最大的优势：减少事件绑定次数提高效率，支持动态创建出来的元素绑定事件

#### on

作用:给匹配的元素绑定事件，包括了上面所有绑定事件方式的优点

语法:
- $(selector).on(events[,selector][,data],handler);
    + 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）
    + 第二个参数：selector, (可选)执行事件的后代元素, 有此参数是事件委托
    + 第三个参数：data，(可选)传递给处理函数的数据，事件触发的时候通过event.data来使用
    + 第四个参数：handler，事件处理函数

```js
// 表示给$(selector)绑定事件，当必须是它的内部元素span才能执行这个事件
$(selector).on( "click",“span”, function() {});

// 绑定多个事件
// 表示给$(selector)匹配的元素绑定单击和鼠标进入事件
$(selector).on(“click mouseenter”, function(){});
```

事件委托
```js
$("div").on("click","p",function(){
    console.log(this);
})
```

### 解绑事件 off

off解绑on方式绑定的事件
- `$(selector).off(); `: 解绑 所有类型 所有事件（直接绑定的和委托的都解绑）

- `$(selector).off(“click”);`:解绑 click事件 所有事件（直接绑定的和委托的都解绑）

- `$(selector).off( “click”, “**” );`: 解绑 click事件 只解绑委托的
    + 第二个参数表示的是要找委托的 选择器“**”表示选择所有委托的



### 页面载入

1. `$(document).ready(function(){});` : 页面加载完毕会触发
2. 简写 : `$(function(){ 代码 })`
3. load事件与ready事件的区别<br>
    - load是指页面中所有元素加载完毕之后就会触发(所有文件图片都下载完毕)
    - ready是指DOM元素加载完毕之后就会触发(此时图片不一定加载完)

### 合成事件

1. mouseover和mouseout的合成
2. `hover()`
    `$("").hover(mouseover的事件函数,mouseout的事件函数)`
    ```js
    $(function(){
        //hover 是mouseover和mouseout的合成
        // $("").hover(mouseover的事件函数,mouseout的事件函数)
        $("div").hover(function(){
            $(this).css("background-color","red")
        }),function(){
            $(this).css("background-color","green")
        }
    })
    ```

### 常见事件

1. `foucus` : 聚焦
2. `fouseout` : 离焦
3. 案例:
```html
<style>
    .oo {
        display:none;
    }
</style>
<body>
    <pre>
        用户名合法性检测
        点击input:在input的后面提示度要求
            1. 必须由字母,数字,下划线组成
            2. 不能以数字开头
            3. 长度需要在6-18之间
            4. input失去焦点,检测输入是否合法,合法显示"输入正确"(绿色字体)
            5. 否则"输入错误"(红色字体)
    </pre>
    <div></div>
    用户名: <input type="text"><span class="oo">必须由字母,数字,下划线组成</span>
</body>
<script>
    $(function(){
        $("input").focus(function(){
            $(".oo").css("display","block")
        });
        $("input").focusout(function(){
            $(".oo").css("display","none")
            var i = $("input").val();

            if(rel.test(i)){
                $("div").html("<span style='color:green'>输入正确</span>")
            }else{
                $("div").html("<span style='color:red'>输入错误</span>")
            }
        });
    })
</script>
```

### toggle()

如果被选元素可见,则隐藏这些元素,如果被选元素隐藏,则显示这些元素. <br>
```html
<body>
    <ul>
        <p class="nav">快速导航</p>
        <li>热卖商品</li><div class="div1"></div>
        <li>热卖商品</li><div class="div2"></div>
        <li>热卖商品</li><div class="div3"></div>
        <li>热卖商品</li><div class="div4"></div>
    </ul>
    <script type="text/javascript">
    $("li").click(function(){
        $(this).next("div").toggle(500);
        $(this).next("div").siblings("div").hide(400);
    })
    </script>
</body>
```

### 添加元素样式

1. `addClass` : 添加样式
```js
$("#b1").click(function(){
    $("div").addClass("c1");
})
$("#b2").click(function(){
    $("div").addClass("c2");
})
```
2. `removeClass` : 添加样式
```js
$("#b2").click(function(){
    $("div").removeClass("c1");
})
```
1. `toggleClass` : 添加样式
```js
$("#b1").click(function(){
    $("div").toggleClass("c2");
})
```

### 事件对象

1. event就是事件对象
2. 事件对象只需要获取,不需要创建,每触发一次事件,就会触发这个事件的所有信息
3. 事件对象常用的属性与方法
    - `event.pageX`: 鼠标相对于页面左边的位置
    - `event.target` : 触发该事件的元素(事件目标)
    - `event.currentTarget` :当前对象(相当于this)
    - `event.delegateTarget` : 代理对象
    - `event.keyCode` : 键盘按键代码
    - `event.data` : 传递给事件处理程序的额外数据
    - `stopPropagation()` : 阻止冒泡  ... return false //阻止默认行为和冒泡
    - `preventDafault()` : 阻止默认行为
    - `target`: 触发事件的元素
    - `which`
        + 在鼠标事件中获取的滚轮键 --->  左滚右(1,2,3)
        + 在键盘事件中获取的是按下的键
    - `type` : 获取事件名: click,dbclick...
4.案例
```js
$("body").click(function(event){
    console.log("body!");
    console.log(event.target);
    console.log(event.pageX,event.pageY)
})
$("body").mousedown(function(event){
    console.log(event.which)
})
$(document).keydown(function(event){
    console.log(event.which)
})
```

## DOM操作

### 样式操作

#### 获取样式

```js
// 参数表示要获取的 样式属性名称
$(selector).css(“font-size”);
```

#### 设置样式

- 设置单个样式
```js
// 第一个参数表示：样式属性名称
// 第二个参数表示：样式属性值
$(selector).css(“color”, “red”);
```

- 设置多个样式
```js
// 参数为对象
$(selector).css({“color”: “red”,“font-size”:“30px”});
```

### 类名操作

#### 添加类名 addClass

```js
$(selector).addClass('liItem');
```

#### 移除类名 removeClass

```js
$(selector).removeClass(“liItem”);  //移除指定类名
$(selector).removeClass();         //不指定参数，表示移除所有类名
```

#### 判断有没有某个类名  hasClass

```js
$(selector).hasClass(“liItem”);//返回true或false
```

#### 切换类名 toggleClass

```js
//如果没有指定类名就添加,有就移除
$(selector).toggleClass(“liItem”);
```

### 获取设置节点的属性

#### $(" ").attr("属性值"):设置或返回被选元素的属性值

1. 获取属性值 : 获取的时候只能获取第一个
    - 解决方法
       ```js
       $(".box").each(function(){
           console.log($(this).attr("id"))
       })
       ```
       <br>
       ```js
       $(".box").each(function(index.element){
           console.log(index,element)
       })
       ```
    - `$(".box").attr("title")`
2. 设置属性值
    - 设置元素指定属性的属性值:`attr("属性名","属性值")`
        ```js
        $(".box").attr("myattr","定义");
        ```
    - 设置多个属性的属性值:`attr({"属性名1":"属性值1","属性名2":"属性值2"}`
        ```js
        $(".box").attr({"title":"111","my":"222"})
        ```

#### $(" ").removeAttr("属性") : 从每一个匹配的元素中删除一个属性

```js
$(".box").removeAttr("my");
```

#### $(" ").prop("属性"):获取在匹配的元素集中的第一个元素的属性值

```js
$(":checkbox").prop("checked")
```

设置属性 : 获取checked、selected、disabled(禁用)、readOnly 属性的时候,可以用prop(),只有true和false
```js
$(".checkbox").attr("checked","checked")
$(".checkbox").prop("checked",true)
```

#### $(" ").removeProp("属性") : 用来删除由.prop()方法设置的属性集

### HTML代码/文本/值

#### $(" ").html()

- 获取: `$("div").html()`
- 设置:`$("div").html("<button>点我</button>")`
相当于js中的innerHTML <br>
取得第一个匹配元素的html内容 <br>

#### $(" ").text()

- 获取: `$("div").text()`
- 设置: `$("div").text("123")`
相当于js中的innerText <br>
取得所有匹配元素的内容 <br>

#### $(" ").val()

- 获取: `$("textarea").val()`
- 设置: `$("textarea").val($("#city").val())`
相当于js中的value <br>
取得匹配元素的当前值 <br>

### 常用的css相关的属性

#### $(" ").scrollTop()

- 获取: 获取元素垂直方向滚动的位置
- 设置:` $("#demo").scrollTop(100);`

#### $(" ").scrollLeft()

- 获取: 获取元素水平方向滚动的位置
- 设置:` $("#demo").scrollLeft(100);`

#### $(" ").offset()

- 获取:获取匹配元素在当前适口的相对偏移
- 设置: `$("#parent").offset({left:300,top:300});//offset --> 可以获取`

**注意** : 使用offset操作，如果元素没有设置定位(默认position:static)，则会把position修改为relative.会修改left,top

#### $(" ").position()

- 获取: 匹配元素相对父元素(非静态)的偏移:`$("#son").position();`
- 设置: 只可以获取 不能设置

#### $(" ").height()

- 获取: `$("#parent").height()` 取得匹配元素当前计算的高度值(px). <br>
- 设置: `$("#parent").height(300)`

#### $(" ").width()

- 获取: `$("#parent").width()` 取得匹配元素当前计算的宽度值(px). <br>
- 设置:`$("#parent").width(300)`

### 节点操作

#### 创建元素节点

```js
//$()函数的另外一个作用:动态创建元素
var $Div = $("<div class='box'></div>");
```

#### html创建元素

作用：设置或返回所选元素的html内容（包括 HTML 标记）<br>
设置内容的时候，如果是html标记，会动态创建元素，此时作用跟JS里面的 innerHTML属性相同
```js
// 动态创建元素
$(selector).html(‘<span>传智播客</span>’);
// 获取html内容
$(selector).html();
```

#### 清空元素

清空指定元素的所有子元素<br>
- `$(selector).empty();`: 清空内部内容,selector标签不被清除
- `$(selector).html(“”);`:但是这样无法清除对象身上的事件，造成内存泄漏（少量的无所谓）
- `$(selector).remove();` ”自杀”把自己（包括所有内部元素）从文档中删除掉

#### 插入元素节点

- 在所有孩子列表的末尾插入
    + 父节点.append(子节点):`$("body").append($Div)`或者`$("body").append("<div>div</div>")`
        * 如果是页面中存在的元素，那么调用append()后，会把这个元素从原先的位置移除，然后再插入到新的位置。
        * 如果给多个目标追加一个元素，append()方法内部会将这个元素复制多份，然后追加到多个目标中。（最好不要这么做）
    + 子节点.appendTo(父节点):`$Div.appendTo($("body"))`
- 在所有孩子列表的首部插入
    + 父节点.prepend(子节点):`$("body").prepend($div)`
    + 子节点.prependTo(父节点):`$div.prependTo($("body"))` 
- 在每个匹配的元素之后插入内容
    + 旧节点.after(新节点):`$("#p1").after($p)`
- 把所有匹配的元素插入到另一个、指定的元素元素集合的后面
    + 新节点.insertAfter(旧节点):`$("#p1").insertAfter($p)`
- 在每个匹配的元素之前插入内容
    + 旧节点.before(新节点):`$("#p1").before("<p>p</p>")`
- 把所有匹配的元素插入到另一个、指定的元素元素集合的前面
    + 新节点.insertBefore(旧节点):`$("<p>p</p>").insertBefore("#p1")`

#### 移除节点

- `$(".del").remove()` : 从DOM中删除所有匹配的元素
- `$(".del").remove(#d2)` : 找出class为del的元素,然后筛选出id为d2的元素把其移除
- `$(".del").detach()` : 从DOM中删除所有匹配的元素
- `$(".del").empty()` : 删除匹配的元素集合中所有的子节点

**注意**
remove() 移除节点之后,会保存jQuery对象,不会保存该对象上添加的事件<br>
detach() 移除节点之后,会保存jQuery对象并保存该对象上添加的事件

### 克隆节点

**clone( true | false )**
传入参数true,同时克隆该节点关联的事件,false,只克隆该元素节点,不克隆元素事件<br>
```js
$("button").click(function(){
    var $clone = $("div").clone(true);
    $clone.appendTo($("body"));
})
```

### 替换节点

所有匹配的节点都可以替换
1. 旧节点.replaceWith(新节点) : `$("div").replaceWith($p);`
1. 新节点.replaceAll(旧节点) : `$p.replaceWith($("div"));`

### 包裹节点

#### wrap()

把所有匹配的元素用其他元素的结构化标记包裹起来<br>
**参数写在括号里**
`$("span").wrap("<p></p>")`

#### unwrap()

把所有匹配的元素用单个元素包裹起来<br>
**不用传参数**
`$("span").unwrap()`

#### wrapAll()

将所有匹配的元素用单个元素包裹起来 
**参数写在括号里**
`$("span").wrapAll("<p></p>")`

#### wrapInner()

将每一个匹配的元素的子内容(包括文本节点)用一个HTML解构包裹起来
**参数写在括号里**
`$("span").wrapInner("<p></p>")`

### 遍历DOM树

#### 父子关系

- children() : 取得一个包含匹配的元素集合中每一个元素的所有子元素的元素集合
- parent() : 获取匹配到的每一个节点的父节点

#### 祖先节点

- parents() : 取得一个包含着所有匹配元素的祖先元素的元素集合(不包含根元素).可以通过一个可选的表达式进行筛选
- closest("筛选条件") : 从元素本身开始,逐级向上级元素匹配,并返回最先匹配的元素

#### 兄弟节点

- `prev()` : 前一个兄弟
- `prevAll()` : 前面所有的兄弟
- `next()` : 后一个兄弟节点
- `nextAll()` : 后面所有的兄弟节点
- `siblings()` : 除本身以外的所有兄弟节点

#### find("筛选条件")

把匹配到的每一个元素的后代在进行一次筛选

#### 例子

```js
$("ul").children() ; // 获取匹配到的每一个节点的子节点
$("li").parent() ; // 获取匹配导弹每一个节点的父节点
$("li").parents() ; // 获取祖先节点 起点 父节点
$("li:first").parents(".test") ; // 在父节点开始找.test
$("li:first").closest(".test") ; // 从当前节点找距离最近的.test

$("#test").prev() ; // 前一个兄弟
$("#test").prevAll() ; // 前面所有的兄弟
$("#test").next() ; // 后一个兄弟节点
$("#test").nextAll() ; // 后面的所有兄弟
$("#test").siblings() ; // 所有的兄弟

$("ul").find("#test") ;// 把匹配到的每一个元素的后代再进行一次筛选
```

## 中心主题

### 触发事件

.trigger("事件名") : 在每一个匹配的元素上触发某类事件
```js
$("button").trigger("click")
$("input").trigger("focus")
```

### 自定义事件

必须通过on bind绑定<br>
通过trigger()触发函数<br>
```js
$("div").on("slideup",function(){$(this).html("上滑");})
        .on("slidedown",function(){$(this).html("下滑");})
        .on("slideleft",function(){$(this).html("左滑");})
        .on("slideright",function(){$(this).html("右滑");})

var startX;
var startY;
var endX;
var endY;

$("div").on("mousedown",function(event){
    startX = event.pageX;
    startY = event.pageY;
})
$("div").on("mouseup",function(event){
    endX = event.pageX;
    endY = event.pageY;
    if(endY < satartY-50 && Math.abs(endX - startX) < 50){
        $(this).trigger("slideup")
    }
    if(endY > satartY+50 && Math.abs(endX - startX) < 50){
        $(this).trigger("slidedown")
    }
    if(endX < satartX-50 && Math.abs(endY - startY) < 50){
        $(this).trigger("slideleft")
    }
    if(endX > satartX-50 && Math.abs(endY - startY) < 50){
        $(this).trigger("slideright")
    }
})
```

### 事件委托

是叫事件代理,利用事件冒泡给父元素添加事件处理程序从而使所有子元素都可以处理该事件

优点 :
- 减少DOM操作,提高交互效率
- 新添加的子元素同样可以响应事件
- 适用场景:如果所有的子元素要求实现同样的效果这个时候可以考虑添加到父元素,让父元素代替子元素去响应事件
```js
$("table").click(function(e){
    $(e.target).not("tbody,tr,table").css("background-color","red");
})
```

### 动画函数

#### show()和hide() : 隐藏和显示动画

- `show(参数1,参数2)`:让元素显示,相当于.css("display","block");
- `hide(参数1,参数2)` : 让元素隐藏,相当于.css("display","none");
- `toggle(参数1,参数2)` : 显示隐藏切换
    + 无参: 立即执行,没有缓动效果
    + 参数1 : 可选, 值可以是 `slow|normal|fast` , 也可以是具体的值(单位毫秒ms)
    + 参数2 : 可选, 回调函数,动画执行完成后立即执行的函数
```js
$("button:eq(0)").click(function(){
    if($("div").css("display")=="none"){
        $("div").show(1000);
    }else{
        $("div").hide(1000);
    }
})
```

#### fade : 淡入淡出动画

- fadeIn(参数1,参数2)  : 淡入
- fadeOut(参数1,参数2) : 淡出
- fadeToggle(参数1,参数2) : 淡入淡出切换
- 通过不透明度的变化来开关所有匹配元素的淡入和淡出效果,并在动画完成后可选地触发一个回调函数
    + 无参: 立即执行,没有缓动效果
    + 参数1 : 可选, 值可以是 `slow|normal|fast` , 也可以是具体的值(单位毫秒ms)
    + 参数2 : 可选, 回调函数,动画执行完成后立即执行的函数
```js
$("button:eq(1)").click(function(){
    if($("div").css("display")=="none"){
        $("div").fadeIn(1000);
    }else{
        $("div").fadeOut(1000);
    }
})
```

**注意**:通过修改元素的透明度来使元素出现或隐藏 

**fadeTo(时长,不透明度,回调函数)**可以指定元素不透明度的具体值.并且时间参数是必需的<br>


作用: 调节匹配元素的不透明度
```js
// 用法有别于其他动画效果

// 第一个参数表示：时长
// 第二个参数表示：不透明度值，取值范围：0-1
$(selector).fadeTo(1000, .5); //0全透，1全不透

// 第一个参数为0，此时作用相当于：.css(“opacity”, .5);
$(selector).fadeTo(0, .5);
```

#### slide : 滑入滑出动画

- slideDown() : 滑入
- slideUp() : 滑出
- slideToggle() : 滑入滑出切换
- 通过高度变化来切换所有匹配元素的可见性,并在切换完成后可选地触发一个回调函数.
    + 无参: 立即执行,没有缓动效果
    + 参数1 : 可选, 值可以是 `slow|normal|fast` , 也可以是具体的值(单位毫秒ms)
    + 参数2 : 可选, 回调函数,动画执行完成后立即执行的函数

### 自定义动画

$("div").animate(最终状态,执行时间,回调函数);

- 第一个参数:要执行动画的css属性(必选)
- 第二个参数:执行动画时长(可选)
- 第三个参数:动画执行完后立即执行的回调函数(可选)

#### 顺序执行

```js
$("div").animate({"left":"500px"},2000,function(){ console.log("over");});
$("div").animate({"top":"500px"},2000,function(){ console.log("down");});
```

#### 同时执行

```js
$("div").animate({"left":"500px","top":"500px"},2000)
```

#### 累加动画

```js
$("div").delay(2000).animate({"left":"+=500"},2000)
```

#### 延迟动画

delay(时间): 多长时间之后执行动画
```js
$("div").delay(2000).animate({"left":"+=500"},2000)
```

#### 停止动画

```js
//stop(是否清空动画队列,是否显示最终效果)
$("div").hover(function(){
    $(this).stop(true);
    $(this).animate({"width":"400px"},1000)
           .animate({"height":"400px"},1000)
}).function(){
    $(this).stop(true);//停止动画
    $(this).animate({"width":"200px"},1000)
           .animate({"height":"400px"},1000)
}
```

### index()事件

获取该元素在当前集合的下标
```js
$("li").click(function(){
    //获取当前点击的li是集合中第几个元素,li的索引
    console.log($(this),index());
})
```

## Ajax

### load()

经常用于加载一段代码<br>
- $obj.load(url)
    + url : 指的是服务器的一个html文件的路径
    + 功能: 向服务器请求一段html代码加载到(appendTo)$obj
- $obj.load(url,回调函数) 
    + url: 指的是服务器的一个html文件的路径
    + 回调函数 : 可以在数据加载完毕之后进行一些处理

```js
//点击按钮,加载服务器的xi.html文件,将其添加到id为cont的标签里,并且xi.html中的li的背景颜色为红色
$("button").click(function(){
    $("#cont").load("xi.html",function(){
        $("li").css("background-color","red")
    })
})
```

### &.get()

全局函数<br>
$.get(URL,[data],[fn],[dataType]) : 以get的方式向服务器请求数据
    - URL : 请求文件的地址
    - data : 请求参数()
    - fn : 回调函数
    - dataType : 文件类型(html | json | script | text)

公式:
```js
$.get("fan.txt",function(data,textStatus,fn){
    //textStatus:三种状态:
    // success | error | not found | notModified()
    //   成功  |  失败 |   没有找到|  没有修改
    if(textStatus == "success"){
        console.log(data)
    }
},"text")
```

例子:
```js
//点击按钮,向服务器请求一个php文件,并将请求的内容添加到页面上
$("button").click(function(){
    $.get("get_html.php",
        {
            "username":$("#name").val(),
            "content":$("#cont").val()
        },
        function(data,textStatus,fn){
            if(textStatus == "success"){
                $(data).appendTo("#msg")
            }
        },
        "html"
    );
})
```

### &.post()

全局函数<br>
$.post(URL,data,fn,dataType) : 以post的方式向服务器请求数据
    - URL : 请求文件的地址
    - data : 请求参数()
    - fn : 回调函数
    - dataType : 文件类型(html | xml | json | script | text)

例子:
```js
//点击按钮,向服务器请求一个json文件,数据结果就为对象,并将请求的内容添加到页面上
$("button").click(function(){
    $.post("get_json.php",
        {
            "username":$("#name").val(),
            "content":$("#content").val()
        },
        function(data,textStatus,fn){
            if(textStatus == "success"){
                //请求到的json文件是一个对象
                //访问对象的属性用点语法
                $("<p>"+data.username+"</p>").appendTo($("#msg"));
                $("<p>"+data.content+"</p>").appendTo($("#msg"));
            }
        },
        "json"
    );
})
```

### get 与post 的区别

1. 安全性:post的安全性高于get;如果以get方式请求,请求参数会拼接到url后面,安全性较低,以post方式请求,请求参数会包裹在请求体重,安全性更高
2. 数量区别: get方式传输的数据量小,规定不能超过2kb,post方式请求数据量大,没有限制
3. 传输速度: get的传输速度高于post

### $.getScript()

$.getScript(url,fn) : 向服务器请求脚步文件
    - url : 地址
    - fn : 回调函数 --> function(){ 脚本文件加载完毕之后会调用 }

```js
//点击按钮,向服务器请求一个js文件,无需导入js文件,就可以正常使用
$("button").click(function(){
    $.getScript("basejs.js",function(){
        $("body").click(function(){
            $(this).css("background-round","red")
        })
    })
})
```

### $.getJson()

#### $.getJson("url",data,fn) : 请求json数据

#### 原生js的json跨域请求
1. 第一步: 创建script标签,并将其添加到body中
2. 请求数据
```js
// 第一步
var sc = document.createElement("script");
sc.setAttribute("type","text/javascript");
//jsoncallback=callBack 是和服务器商量好的,callBack是自己定义函数名
//等号两边不可以空格
sc.src = "http://loaclhost/jsonp.php?jsoncallback=callBack"

//第二步
function callBack(data){
    console.log(data);
}

// 注意: 在文件服务器路径后面加一个问号,后台的函数名字和自己定义的函数名字要进行对应的赋值
```

#### jQuery的json请求

```js
//后面的函数会自动生成一个函数名用来等于jsoncallback
//等号两边不可以空格
$.getJson("http://localhost/jsonp.php?jsoncallback=?",function(data){
    console.log(data)
})
````

### $.ajax({字面量对象})

jQuery 底层 AJAX 实现

对象内容:
- url: 请求地址
- type:"get | post | put |delete " 默认是get
- data : 请求参数 { "id" : "123","pwd":"123456"}
- dataType : 请求数据类型 " html | text | json | xml | script | jsonp(指json文件在其他的服务器上 是json的扩展)"
- success : function(data,dataTextStatus,jqxhr){}
- error : error:function(jqxhr,textStatus,error)
```js
$.ajax({
    url:"tom.php",
    type:"get",
    //data:请求参数 { "id" : "123","pwd":"123456"},
    dataType: "text",
    success : function(data,dataTextStatus,jqxhr){
        console.log(data + textStatus + jqxhr)
    },
    error: function(jqxhr,textStatus,error){
        console.log(jqxhr + textStatus + error)
    }
})
```

## jQuery 方法

### each() 遍历

大部分情况下是不需要使用each方法的，因为jQuery的隐式迭代特性。但是如果要对每个元素做不同的处理，这时候就要用each方法了。<br>
作用：遍历jQuery对象集合，为每个匹配的元素执行一次指定函数
```js
// 参数一表示当前元素在所有匹配元素中的索引号
// 参数二表示当前元素（DOM对象）
$(selector).each(function(index,element){});
```

### 字符串操作 trim

去掉字符串起始和结尾的空格。

```
$.trim("  hello, how are you?  ");//"hello, how are you?"
```