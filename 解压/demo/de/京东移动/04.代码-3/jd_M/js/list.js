window.onload = function (){
	// 左侧 导航栏 滚动代码
	leftSwipe();
}

// 左边的 移动效果
function leftSwipe(){
	
	// 逻辑一. 手指 滑动效果
	// 获取一些必须知道的对象
	
	// 移动的ul
	var move_ul = document.querySelector('.left ul');
	
	// body的高度
	var bodyHeight = document.body.offsetHeight;
	
	// ul的高度
	var ulHeight = move_ul.offsetHeight;
	
	// 获取 顶部通栏的高度
	var headerHeight = document.querySelector('.list_header').offsetHeight;
	
	// 定义 移动中需要使用的变量
	var startY = 0;
	// 当前这次 移动的距离
	var moveY = 0;
	// 上一次移动的距离
	var distanceY =0;
	
	// 计算移动的范围
	
	// 上下移动的 偏移值
	var delayDistance = 100;
	
	// 最大的值
	var maxY = 0;
	
	// 最小的值 还需要 再小一点(通栏的高度)
	var minY = bodyHeight - ulHeight - headerHeight;
	
	
	// 注册touch事件
	
	// start 
	move_ul.addEventListener('touchstart',function(event){
		// 获取起始的y坐标
		startY = event.touches[0].clientY;
		
		// 关闭过渡属性 让move的时候 没有过渡效果
		move_ul.style.transition = 'none';
		move_ul.style.webkitTransition = 'none';
		
	})
	
	// move
	// 获取 偏移值+原始的值 并移动
	move_ul.addEventListener('touchmove',function(event){
		// 获取 偏移值
		moveY = event.touches[0].clientY - startY;
		
		// 判断 是否可以移动 当满足移动条件的时候 才 改变 ul的位置
		if((moveY+distanceY)<=(maxY+delayDistance) && (moveY+distanceY)>=(minY-delayDistance)){
			//  偏移值+原始的值 并移动
			move_ul.style.transform = 'translateY('+(moveY+distanceY)+'px)';
		}else{
			// 在 范围的 两边 不需要更改位置
		}
	})
	
	// end
	// 更新 原始的值 
	move_ul.addEventListener('touchend',function(event){
		// 更新 原始的值 
		distanceY = moveY + distanceY;
		
		// 判断 是否需要吸附回去
		
		// distanceY  maxY 还要大 往下 拉多了一点
		if(distanceY>maxY){
			distanceY = maxY;
			console.log('上吸附');
		}else if(distanceY <minY){
			// distanceY minY 还要小 往上 拉多了一点
			distanceY = minY;
			console.log('下吸附');
		}
		
		// 添加过渡属性 使用动画的方式 进行吸附
		move_ul.style.transition = 'all .5s';
		move_ul.style.webkitTransition = 'all .5s';
		
		// 修改 移动ul的 移动位置
		//  偏移值+原始的值 并移动
			move_ul.style.transform = 'translateY('+distanceY+'px)';
	})
	
	
	// 逻辑二.点击 滑动的效果
	/*	
	 	1.所有的 li标签
	 	2.li标签中 需要保存一个 索引值
	 	3.绑定 tap事件
	 		获取点击的li标签的索引值
	 		索引值*li标签高度
	 * */
	// 获取所有的li标签
	var totalLis = document.querySelectorAll('.left ul li');
	
	// 获取li标签的高度
	var liHeight = totalLis[0].offsetHeight;
	
	// 循环绑定 索引值属性
	for(var i =0;i<totalLis.length;i++){
		totalLis[i].index = i; 
	}
	
	// 循环 绑定 tap事件
	for(var i =0; i<totalLis.length;i++){
		heima_tap(totalLis[i],function(event){
//			console.log(event);
			
			// 点击的li标签
//			console.log(this);
			// 通过事件参数中的 target 获取当前点击的li标签
//			console.log( event.target.parentNode);
//			console.log(event.target.parentNode.index)
			
			// 获取点击的index
			var currentIndex = event.target.parentNode.index;
			
			// 开启 过渡效果
			move_ul.style.transition = 'all .5s';
			move_ul.style.webkitTransition = 'all .5s';
			
			// 使用index * li的高度 设置给ul
			
			// 判断 移动的距离 并修正
			var currentDistance = currentIndex *liHeight*-1;
			
			if(currentDistance>maxY){
				currentDistance = maxY; 
			}else if(currentDistance <minY){
				currentDistance = minY; 
			}
			
			move_ul.style.transform = 'translateY('+currentDistance +'px)';
			
			// 修改点击的li标签的 样式值
			// 清空所有的class
			for(var j=0;j<totalLis.length;j++){
				totalLis[j].querySelector('a').classList.remove('current');
			}
			// 为当前这个li标签 设置该样式
			event.target.classList.add('current');
		})
	}
}
