/**
 * Created by jf on 2016/11/11.
 */
window.onload = function () {
    //找人
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;//所有的li
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var btn1 = document.getElementById("btn1");
    var immg1 = document.getElementById("immg1");
    var immg2 = document.getElementById("immg2");
    var immg3 = document.getElementById("immg3");
    //1.鼠标经过盒子 让箭头渐渐地显示 离开渐渐地隐藏
    wrap.onmouseover = function () {
        //让箭头渐渐地显示
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        //让箭头渐渐地隐藏
        animate(arrow, {"opacity": 0});
    };

/*
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
*/

var config = [
        {
            'width': 250,
            'top': 50,
            'left': 0,
            'zIndex': 5,
            opacity: 0.8,
        },
        {
            'width': 300,
            'top': 0,
            'left': 170,
            'zIndex': 10,
            opacity: 1,
        },
        {
            'width': 250,
            'top': 50,
            'left': 400,
            'zIndex': 5,
            opacity: 0.8,
        }
    ];
    //2.把配置单中的配置 逐个设置给每一个li
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;//动画执行完成后 重新打开阀门
            });
        }
    }

    assign();

    //3.点击箭头 旋转 图片
    arrRight.onclick = function () {
        if (flag) {//如果阀门的打开的 就可以执行动画
            flag = false;//点击一次后 马上吗阀门关闭
            config.push(config.shift());//把第一个放到最后
            assign();//按照新生成的配置单 重新分配位置
        }

    };

    btn1.onclick = function(){
        if (flag) {//如果阀门的打开的 就可以执行动画
            flag = false;//点击一次后 马上吗阀门关闭
            config.push(config.shift());//把第一个放到最后
            assign();//按照新生成的配置单 重新分配位置
            btn1.classList.add("active");
            /*if($('#immg1').css('opacity') == 1){
                
            }*/
        }
    }
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());//把最后的放到最前
            assign();//按照新生成的配置单 重新分配位置
        }
    };

    //4.添加节流阀
    var flag = true;//阀门现在是打开的

};
