function heima_tap(dom,callBack){
	// 定义变量
	  
	// 手指是否移动
	var isMove = false;
	
	// 代码中 直接写死 某些具体的数字 非常不利于后期维护  magic number
	// 而是通过定义变量方式 解决
	var delayTime = 200;
	
	// 记录 开始的时间
	var startTime = 0;

	// 开始触摸
	dom.addEventListener('touchstart',function(event){
		
		// 将 isMove 设置为初始值 false
		isMove = false;
		
		startTime = Date.now();
	})
	dom.addEventListener('touchmove',function(event){
		isMove = true;
	})
	dom.addEventListener('touchend',function(event){
		// 如果移动了 失效
		if(isMove == true){
			return;
		}
		// 超时 也算失败
		else if(Date.now()-startTime>delayTime){
			return;
		}
		
		// 如果代码能够执行到这里
		// 调用传入的 callback回调函数
		callBack(event);
		
		// 阻止冒泡
//		event.stopPropagation();
	})
}
