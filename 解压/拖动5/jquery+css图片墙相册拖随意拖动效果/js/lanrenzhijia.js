// 代码整理：懒人之家 www.lanrenzhijia.com
var imgs;
		
	$(document).ready(function () {
	var drag = {};
		$('h1').remove();
		$('#images').append('<li id="instructions"><h4>Toss the images around; if you see one you like, click on it!</h4></li>');
		
		imgs = $("#images li");

		imgs.draggable({ 
			stack : { group : '#images li', min : 1},
			start : function () {
				$this = $(this);
				if($this.attr('id') === 'instructions') { $this.fadeOut().remove(); }
				
				imgs.each(function () {
					var $this = $(this);
					if($this.width() !== 256) {
						$this.stop().animate({width : 256 }).removeClass('top');
					}
				});
				
				drag.startTime = new Date();
				drag.startPos = $this.position();
			},
			stop : function () {
				var $this = $(this), top, left, time;
				drag.endTime = new Date();
				drag.endPos = $this.position();
				drag.leftOffset = drag.endPos.left - drag.startPos.left;
				drag.topOffset  = drag.endPos.top  - drag.startPos.top;

				time = (drag.endTime.getTime() - drag.startTime.getTime()) /60;
				
				top  = (drag.topOffset / time).toString();
				left = (drag.leftOffset / time).toString();
				
				$this.animate({
					top : '+=' + top, 
					left: '+=' + left 
				});
			}
		});

		imgs.click(function () {
			var $this = $(this);
		
			if ($this.attr('id') == 'instructions') {
				$this.fadeOut().remove();
			}
			else {
				if($this.width() !== 256) {
					$this.stop().animate({width : 256 }).removeClass('top');
				}
				else {
					if (!($this.find('.info').length)) {
						$.ajax({
							url : $this.find('a').attr('href'),
							dataType : 'html',
							success : function (data) {
								var $d = $(data),
									head = $d.filter('h1'),
									para = $d.filter('p');
									
								$this.children('div').append('<div class="info"></div>').find(".info").append(head, para);
							},
							error : function () {
								var msg = '<h1>Oops!</h1><p>It looks like there been a problem; we can\'t get this info right now.</p>';
								$this.children('div').append('<div class="info"></div>').find(".info").html(msg);
							}
						});
					}
					$this.css({'zIndex' :8 })
							 .stop()
							 .animate({ width : 512})
							 .addClass('top')
								.siblings().removeClass('top')
										   .stop()
										   .animate({width : 256})
												.filter(function () { return $(this).css('zIndex') >= '8' }).css({'zIndex' : 7});
				}
			}
			return false;
		});
		
	});

$(window).load(function () {
	$w = $(window);
	imgs.css({
			position : 'absolute',
			left : $w.width() / 2 - imgs.width(),
			top  : $w.height() / 2- imgs.height()
		});
	for(var i = 0; imgs[i]; i++ ) {
		$(imgs[i]).animate({
				left : '+=' + Math.random()*150,
				top  : '+=' + Math.random()*150
			});
	}
});//*/