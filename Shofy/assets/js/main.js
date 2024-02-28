
(function ($) {
	"use strict";

	var windowOn = $(window);

	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});
	
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// 05. Offcanvas Js
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;
	
	
		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");

		$(".tp-main-menu-mobile a").on('click', function(){
			$(".offcanvas__area").removeClass("offcanvas-opened");
			$(".body-overlay").removeClass("opened");
		});
	
		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
	
			self.append(function () {
			  return arrowBtn;
			});
	
			self.find("button").on("click", function (e) {
			  e.preventDefault();
			  let self = $(this);
			  self.toggleClass("dropdown-opened");
			  self.parent().toggleClass("expanded");
			  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			  self.parent().parent().children(".tp-submenu").slideToggle();	
			});
	
		});
	}

	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctoll();

	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});
	
	var postboxSlider = new Swiper('.tp-inner-product-slider-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		observer: true,
		observeParents: true,

		// Navigation arrows
		navigation: {
			nextEl: ".tp-inner-button-next",
			prevEl: ".tp-inner-button-prev",
		},
		scrollbar: {
			el: '.tp-inner-product-scrollbar',
			draggable: true,
			dragClass: 'tp-swiper-scrollbar-drag',
			snapOnRelease: true,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	
	var postboxSlider = new Swiper('.tp-inner-shop-slider-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		observer: true,
		observeParents: true,

		// Navigation arrows
		navigation: {
			nextEl: ".tp-shop-button-next",
			prevEl: ".tp-shop-button-prev",
		},
		scrollbar: {
			el: '.tp-inner-shop-scrollbar',
			draggable: true,
			dragClass: 'tp-swiper-scrollbar-drag',
			snapOnRelease: true,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	
	var postboxSlider = new Swiper('.tp-inner-other-slider-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		observer: true,
		observeParents: true,

		// Navigation arrows
		navigation: {
			nextEl: ".tp-other-button-next",
			prevEl: ".tp-other-button-prev",
		},
		scrollbar: {
			el: '.tp-inner-other-scrollbar',
			draggable: true,
			dragClass: 'tp-swiper-scrollbar-drag',
			snapOnRelease: true,
		  },
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	var slider = new Swiper('.tp-testimonial-slider-active', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: ".tp-testimonial-slider-dot",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: ".tp-testimonial-slider-button-next",
			prevEl: ".tp-testimonial-slider-button-prev",
		},
	});

    new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});


    let SwiperTop = new Swiper('.tp-elements-slider', {
		spaceBetween: 0,
		speed: 10000,
		autoplay: {
		  delay: 0,
		},
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		disableOnInteraction: true
	});

})(jQuery);