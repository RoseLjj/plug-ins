// onload
window.onload = function() {

	// 依次 调用 封装的方法
	// 通栏
	headerChangeColor();

	// 倒计时
	countDownTime()

	// 轮播图
	//	banner()

	// 调用 封装过的 banner方法
	banner_plus();

}

// 顶部的通栏变色
/*
 	1. 颜色使用 rgba 设置
 	2. 滚动的时候 注册onscroll事件
 	3. 使用滚动的距离 / 定义的 最大距离 获取 0-1的小数
 	4. 设置rgba 中的 a
 * */
function headerChangeColor() {
	// 获取一些 必须知道的值

	// 获取headerdom元素
	var headerDom = document.querySelector('.jd_header');

	// 首先 将 header 变为 透明
	headerDom.style.backgroundColor = 'rgba(201, 21, 35,0)';

	// 轮播图 的高度
	var maxHeight = document.querySelector('.jd_banner').offsetHeight;

	// 注册 滚动事件
	window.onscroll = function() {

		// 获取 滚动的 距离
		var scrollY = document.body.scrollTop;

		// 获取0-1的小数
		var percent = scrollY / maxHeight;

		// 修正 percent的值 让他 真实有效
		if(percent >= 0.8) {
			percent = 0.8;
		}

		// 上下两个判断 只需要保留一个 即可
		//		if(percent<=1){
		// 设置给 rgba 的a
		headerDom.style.backgroundColor = 'rgba(201, 21, 35,' + percent + ')';
		//		}

	}

}

// 倒计时
/*
 	1. 获取必须知道的东西
 		总时间
 		获取需要修改的dom元素
 	2.通过定时器 间隔调用 时间--
 	3.修改页面的显示(更新页面)
 	
 	// 格式化时间分析
 	3789秒
 	一个小时 3600 
 	3789/3600 =  Math.floor(1.xx);
 	
 	1分 60秒
 	3789%3600 =189 秒
 	189 / 60 = Math.floor(3.xxx)
 	
 	秒
 	3789 %60 =9
 	
 	// 十位 个位换算
 	25
 	span1 = 25/10 = Math.floor(2.5)
 	span2 = 25%10 = 5
 * */
function countDownTime() {
	//1. 获取必须知道的东西

	// 总时间 4小时
	var totalSec = 4 * 60 * 60;
	//	var totalSec = 5;

	// 获取 需要修改的span
	var spans = document.querySelectorAll('.cutDownTime span');

	// 将 根据总时间 修改 页面显示的代码 进行封装
	var setTime = function() {
		// 格式化为 时 分 秒
		// 3700 / 3600
		var hour = Math.floor(totalSec / 3600);
		// 3700 % 3600  100 / 60
		var minute = Math.floor(totalSec % 3600 / 60);
		//  3700 % 60
		var second = totalSec % 60;

		// 打印结果
		//		console.log(hour+'|'+minute+'|'+second);

		// 设置给 span标签
		// 设置时 十位  21
		spans[0].innerHTML = Math.floor(hour / 10);
		// 设置时 个位
		spans[1].innerHTML = hour % 10;

		// 设置分 十位  21
		spans[3].innerHTML = Math.floor(minute / 10);
		// 设置分 个位
		spans[4].innerHTML = minute % 10;

		// 设置秒 十位  21
		spans[6].innerHTML = Math.floor(second / 10);
		// 设置秒 个位
		spans[7].innerHTML = second % 10;
	}

	// 开始时 调用一次 让页面默认显示 一个总时间
	setTime();

	// 开启定时器 返回值 定时器的 id
	var interID = setInterval(function() {
		// 递减
		totalSec--;

		// 修改页面显示
		setTime();

		// 时间走完了 关闭定时器  提示用户
		if(totalSec == 0) {
			// 关闭定时器 
			clearInterval(interID);
			// 执行完毕 调用代码
			console.log('时间走完了,哥们你没戏了');
		}
	}, 1000);

}

// 轮播图
/*
 	步骤一: 自动轮播
 		获取一些必须知道的值
 			轮播图ul
 			索引ul
 			屏幕宽度
 			定义变量 记录 索引
 			
 		开启定时器
 			索引++
 			移动轮播图的 transform
 			修改索引ul
 			越界判断
 			
 	
 * */
function banner() {
	// 一. 获取变量
	// 轮播图ul
	var banner_ul = document.querySelector('.banner_imgs');

	// 索引li标签
	var banner_indexs = document.querySelectorAll('.banner_index li');

	// 获取屏幕宽度
	var screenWidth = document.body.offsetWidth;

	// 定义变量 记录索引
	// 我们 需要在 最左边 隐藏一张
	var index = 1;

	// 首先 让 ul标签 移动 一个 屏幕宽度
	// 修改 transform x的正方向是 右边 乘以-1 修改移动的方向
	banner_ul.style.transform = 'translateX(' + index * screenWidth * -1 + 'px)';

	// 二.开启定时器 
	var interId = setInterval(function() {
		// 调用了 定时器
		console.log('调用了定时器');

		// 修改索引
		index++;

		// 增加 过渡属性的 代码
		banner_ul.style.transition = 'all 1s';
		banner_ul.style.webkitTransition = 'all 1s';

		// 修改 transform x的正方向是 右边 乘以-1 修改移动的方向
		banner_ul.style.transform = 'translateX(' + index * screenWidth * -1 + 'px)';

		// 修改 索引值
		// 图片 8+2 = 10   0 1 2 3 4 5 6 7 8 9
		// li标签 8          0 1 2 3 4 5 6 7
		// li标签的索引 跟 index对应关系 为 index -1

		// 清除所有的
		//		for(var i = 0; i < banner_indexs.length; i++) {
		//			banner_indexs[i].classList.remove('current');
		//		}
		//		// 为当前对应的 li标签 添加current
		//		banner_indexs[index - 1].classList.add('current');
	}, 2000);

	// 注册 过渡结束事件
	// 判断 是否越界 瞬间 切换到 第一张 
	banner_ul.addEventListener('transitionend', function() {
		console.log('过渡结束')
			// 判断 index 是否越界
		if(index > 8) {
			index = 1;

			// 关闭过渡
			// 增加 过渡属性的 代码
			banner_ul.style.transition = 'none';
			banner_ul.style.webkitTransition = 'none';

			// 瞬间 跳回 索引为 1的 那一张图片
			// 修改 transform x的正方向是 右边 乘以-1 修改移动的方向
			banner_ul.style.transform = 'translateX(' + index * screenWidth * -1 + 'px)';
		}

		// 修改索引值
		for(var i = 0; i < banner_indexs.length; i++) {
			banner_indexs[i].classList.remove('current');
		}
		// 为当前对应的 li标签 添加current
		banner_indexs[index - 1].classList.add('current');

	})

	// 注册touch事件
	// 定义一些 touch中需要使用的变量 (实际中工作中 变量建议定义在最上方,这里为了代码的可读性 定义在这里)
	var startX = 0;
	var moveX = 0;
	// 由于 使用了index 记录移动的距离 所以 distanceX 这里不再需要
	var distanceX = 0;

	// 触摸开始
	/*
	 	记录开始的x坐标
	 	清除定时器
	 	关闭 过渡效果
	 * */
	banner_ul.addEventListener('touchstart', function(event) {
		// 记录
		startX = event.touches[0].clientX;

		// 清除定时器
		clearInterval(interId);

		// 关闭过渡效果
		banner_ul.style.transition = 'none';
		banner_ul.style.webkitTransition = 'none';
	})

	// 触摸中
	/*
	 	计算moveX
	 	修改banner_ul的transform属性
	 		banner_ul.style.tranfrom = translate((moveX+distanceX)px);
	 		banner_ul.style.tranfrom = translate((moveX+distanceX+index*width*-1)px);
	 * */
	banner_ul.addEventListener('touchmove', function(event) {
		// 计算移动距离
		moveX = event.touches[0].clientX - startX;

		// 修改ul的移动距离
		banner_ul.style.transform = 'translateX(' + (moveX + index * screenWidth * -1) + 'px)';

	})

	// 触摸结束
	/*
	 	开启定时器
	 	修改distanceX的值
	 * */
	banner_ul.addEventListener('touchend', function(event) {

		// 判断 是否需要吸附回去 小于 1/4宽度 吸附回去 大于 1/4宽度 跳一张
		// 计算绝对值
		if(Math.abs(moveX) > (screenWidth / 4)) {
			// 跳转一整张
			if(moveX > 0) {
				index--;
			} else {
				index++;
			}
			// 开启过渡效果
			banner_ul.style.transition = 'all 1s';
			banner_ul.style.webkitTransition = 'all 1s';
			// 吸附回去 不管移动了多少 index*screenWidth *-1
			banner_ul.style.transform = 'translateX(' + index * screenWidth * -1 + 'px)';
		} else {

			// 开启过渡效果
			banner_ul.style.transition = 'all 1s';
			banner_ul.style.webkitTransition = 'all 1s';
			// 吸附回去 不管移动了多少 index*screenWidth *-1
			banner_ul.style.transform = 'translateX(' + index * screenWidth * -1 + 'px)';

		}

		// 开启定时器
		interId = setInterval(function() {
			// 调用了 定时器
			console.log('调用了定时器');

			// 修改索引
			index++;

			// 增加 过渡属性的 代码
			banner_ul.style.transition = 'all 1s';
			banner_ul.style.webkitTransition = 'all 1s';

			// 修改 transform x的正方向是 右边 乘以-1 修改移动的方向
			banner_ul.style.transform = 'translateX(' + index * screenWidth * -1 + 'px)';
		}, 2000);
	})

}

function banner_plus() {
	// 一. 获取变量
	// 轮播图ul
	var banner_ul = document.querySelector('.banner_imgs');

	// 索引li标签
	var banner_indexs = document.querySelectorAll('.banner_index li');

	// 获取屏幕宽度
	var screenWidth = document.body.offsetWidth;

	// 定义变量 记录索引
	var index = 1;

	// 封装 需要重复出现的代码
	// 修改ul的移动距离
	var setTransform = function(distance) {
		banner_ul.style.transform = 'translateX(' + distance + 'px)';
	}
	
	// 开启过渡
	var setTransition = function(){
		banner_ul.style.transition = 'all .5s';
		banner_ul.style.webkitTransition = 'all .5s';
	}
	
	// 关闭过渡
	var clearTransition = function (){
		banner_ul.style.transition = 'none';
		banner_ul.style.webkitTransition = 'none';
	}
	

	// 首先 让 ul标签 移动 一个 屏幕宽度 调用封装的方法
	setTransform(index * screenWidth * -1)

	// 二.开启定时器 
	var interId = setInterval(function() {
		// 修改索引
		index++;

		// 增加 过渡属性的 代码
		setTransition();

		// 修改 transform x的正方向是 右边 乘以-1 修改移动的方向
		setTransform(index * screenWidth * -1);
	}, 2000);

	// 注册 过渡结束事件
	// 判断 是否越界 瞬间 切换到 第一张 
	banner_ul.addEventListener('transitionend', function() {
		// 判断 index 是否越界
		if(index > 8) {
			index = 1;

			// 关闭过渡
			clearTransition();

			// 瞬间 跳回 索引为 1的 那一张图片
			setTransform(index * screenWidth * -1 )
		}
		// 判断是否 到了第一张
		else if(index<1){
			index = 8;

			// 关闭过渡
			clearTransition();

			// 瞬间 跳回 索引为 1的 那一张图片
			setTransform(index * screenWidth * -1 )
		}

		// 修改索引值
		for(var i = 0; i < banner_indexs.length; i++) {
			banner_indexs[i].classList.remove('current');
		}
		// 为当前对应的 li标签 添加current
		banner_indexs[index - 1].classList.add('current');

	})

	// 注册touch事件
	// 定义一些 touch中需要使用的变量 (实际中工作中 变量建议定义在最上方,这里为了代码的可读性 定义在这里)
	var startX = 0;
	// 触摸开始
	banner_ul.addEventListener('touchstart', function(event) {
		
		console.log('start');
		// 记录
		startX = event.touches[0].clientX;

		// 清除定时器
		clearInterval(interId);

		// 关闭过渡效果
		clearTransition()
	})

	// 触摸中
	banner_ul.addEventListener('touchmove', function(event) {
		console.log('move');
		// 计算移动距离
		moveX = event.touches[0].clientX - startX;

		// 修改ul的移动距离
		setTransform(moveX + index * screenWidth * -1);

	})

	// 触摸结束
	/*
	 	开启定时器
	 	修改distanceX的值
	 * */
	banner_ul.addEventListener('touchend', function(event) {
		console.log('end');

		// 判断 是否需要吸附回去 小于 1/4宽度 吸附回去 大于 1/4宽度 跳一张
		// 计算绝对值
		if(Math.abs(moveX) > (screenWidth / 4)) {
			// 跳转一整张
			if(moveX > 0) {
				index--;
			} else {
				index++;
			}
		} else {
			// else中 的代码 已经完成抽取 可以没有任何逻辑了 可以删除
		}
		// 开启过渡效果
		setTransition();
			
		// 吸附回去 不管移动了多少 index*screenWidth *-1
		setTransform(index * screenWidth * -1)

		// 开启定时器
		interId = setInterval(function() {
			// 修改索引
			index++;

			// 增加 过渡属性的 代码
			setTransition();

			// 修改 transform x的正方向是 右边 乘以-1 修改移动的方向
			setTransform(index * screenWidth * -1);
		}, 2000);
	})

}