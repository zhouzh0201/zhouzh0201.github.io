// JavaScript Document
jQuery(document).ready(function ($) {


	$('#full-width-slider').royalSlider({
		arrowsNav: true,
		loop: false,
		keyboardNavEnabled: true,
		controlsInside: false,
		imageScaleMode: 'fill',
		arrowsNavAutoHide: false,
		autoScaleSlider: true,
		autoScaleSliderWidth: 1920,
		// autoScaleSliderHeight: 838,
                autoScaleSliderHeight: 945,
		controlNavigation: 'bullets',
		thumbsFitInViewport: false,
		navigateByClick: true,
		startSlideId: 0,
		slidesSpacing: 1,
		transitionSpeed: 400,
		autoPlay: {
			enabled: true,
			pauseOnHover: true,
			delay: 3000
		},
		transitionType: 'move',
		globalCaption: true,
		deeplinking: {
			enabled: true,
			change: false
		},
		imgWidth: 1920,
		// imgHeight: 838
                imgHeight: 945
	});

$("#full-width-slider .rsBullets").wrap("<div class='banner-dian'><div class='container'></div></div>");

        var swiper = new Swiper(".mySwiper", {
            loop: true,
             autoplay: {
               delay: 4000,
                stopOnLastSlide: false,
               disableOnInteraction: true,
             },
            slidesPerView: 3,
            spaceBetween: 24,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            breakpoints: {
                1550: {
                    spaceBetween: 24
                },

                1400: {
                    spaceBetween: 20
                },

                1200: {
                    spaceBetween: 18
                },
                992: {

                    spaceBetween: 15
                },
                768: {
                    spaceBetween: 10
                },
                420: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },

                380: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                360: {
                    slidesPerView: 2,
                    spaceBetween: 5
                },
                340: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }, 320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        });

        $("#full-width-slider .rsBullets span").html('');

	 // 通知公告
	 $('.index-notice .item li').mouseenter(function () {
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$(".index-notice .cont div.cont-box").stop().hide();
		$(".index-notice .cont div.cont-box").eq(index).stop().show();
	  });

});