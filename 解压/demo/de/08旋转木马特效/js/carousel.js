/**
 * Created by jf on 2016/11/11.
 */
window.onload = function () {
    //����
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;//���е�li
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var btn1 = document.getElementById("btn1");
    var immg1 = document.getElementById("immg1");
    var immg2 = document.getElementById("immg2");
    var immg3 = document.getElementById("immg3");
    //1.��꾭������ �ü�ͷ��������ʾ �뿪����������
    wrap.onmouseover = function () {
        //�ü�ͷ��������ʾ
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        //�ü�ͷ����������
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
    ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����
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
    //2.�����õ��е����� ������ø�ÿһ��li
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;//����ִ����ɺ� ���´򿪷���
            });
        }
    }

    assign();

    //3.�����ͷ ��ת ͼƬ
    arrRight.onclick = function () {
        if (flag) {//������ŵĴ򿪵� �Ϳ���ִ�ж���
            flag = false;//���һ�κ� �������Źر�
            config.push(config.shift());//�ѵ�һ���ŵ����
            assign();//���������ɵ����õ� ���·���λ��
        }

    };

    btn1.onclick = function(){
        if (flag) {//������ŵĴ򿪵� �Ϳ���ִ�ж���
            flag = false;//���һ�κ� �������Źر�
            config.push(config.shift());//�ѵ�һ���ŵ����
            assign();//���������ɵ����õ� ���·���λ��
            btn1.classList.add("active");
            /*if($('#immg1').css('opacity') == 1){
                
            }*/
        }
    }
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());//�����ķŵ���ǰ
            assign();//���������ɵ����õ� ���·���λ��
        }
    };

    //4.��ӽ�����
    var flag = true;//���������Ǵ򿪵�

};
