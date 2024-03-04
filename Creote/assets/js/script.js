(function($) {
	
	"use strict";
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('body').addClass('fixed-header');
     
    }
    else {
        $('body').removeClass('fixed-header');
       
    }
});

if ($(".notification-close").length) {
    $(".notification-close").on("click", function(){
        $('body').addClass('notification_en');
    })
}

function creote_preloader() {
    if($('.preloader-wrap').length){
        $('.preloader-wrap').delay(800).fadeOut(100);
    }

}creote_preloader();

function creote_countdown_timer() {
    $(".countdown").countdown();
}creote_countdown_timer();

if($('.prgoress_indicator path').length){
    var progressPath = document.querySelector('.prgoress_indicator path');
    var pathLength = progressPath.getTotalLength();
    
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).on('scroll', updateProgress);
    var offset = 250;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.prgoress_indicator').addClass('active-progress');
      } else {
        jQuery('.prgoress_indicator').removeClass('active-progress');
      }
    });
    jQuery('.prgoress_indicator').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    });
    
    }
    

var selector = '.header .navbar .navbar-nav .dropdown';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');

});

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 4,
    loop: true,
    spaceBetween:0,
    grabCursor: true,
    autoplay: 
    {
      delay: 2000,
    },
    speed:1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        240: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },

        1200: {
          slidesPerView: 2,
      },
        
    }
});

var swiper = new Swiper('.testiswiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween:0,
    grabCursor: true,
    autoplay: 
    {
      delay: 2500,
    },
    speed:1000,
    
    breakpoints: {
        240: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },

        1200: {
          slidesPerView:1,
      },
        
    }
});


	if($('.wow').length){

		var wow = new WOW({

		mobile:       false

		});

		wow.init();

	}

    var image = document.getElementsByClassName('horizontal-parallax');
    new simpleParallax(image, {
      orientation: 'right'
    });
    function creote_funfacts_one() {
        if($('.count-box').length){
            $('.count-box').appear(function(){
        
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                    
                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function() {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }
                
            },{accY: 0});
        }
    }creote_funfacts_one();

})(window.jQuery);