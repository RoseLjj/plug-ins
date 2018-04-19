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
    //1.鼠标经过盒子 让箭头渐渐地显示 离开渐渐地隐藏
    wrap.onmouseover = function () {
        //让箭头渐渐地显示
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        //让箭头渐渐地隐藏
        animate(arrow, {"opacity": 0});
    };

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

    //2.把配置单中的配置 逐个设置给每一个li
    for (var i = 0; i < lis.length; i++) {
        animate(lis[i], config[i]);
    }


};