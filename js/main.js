// JavaScript Document
jQuery(document).ready(function ($) {

	// $(".navbar-toggle").click(function () {
	// 	$(".nav").show();
	// });

$(".navbar-toggle").click(function () {
		if ($(this).hasClass('on')) {

			$(".header").removeClass('on2');
			$(this).removeClass('on');
			$(".nav").removeClass('on');
		
		}
		else{
			$(".header").addClass('on2');
			$(this).addClass('on');
			$(".nav").addClass('on');
		}
	});

	// 滚动头部变色
	var banOffTop = 1;//获取到距离顶部的垂直距离
	var scTop = 0;//初始化垂直滚动的距离
	scTop = $(this).scrollTop();//获取到滚动条拉动的距离
	//console.log(scTop);查看滚动时，垂直方向上，滚动条滚动的距离
	if (scTop >= banOffTop) {
		//核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
		$(".header").addClass("on");
	} else {
		$(".header").removeClass("on");
	}

	var top_height = $(document).height() - $(document).scrollTop;
	$(document).scroll(function () {
		scTop = $(this).scrollTop();//获取到滚动条拉动的距离
		//console.log(scTop);查看滚动时，垂直方向上，滚动条滚动的距离
		if (scTop >= banOffTop) {
			//核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
			$(".header").addClass("on");
		} else {
			$(".header").removeClass("on");
		}
	});


});