(function($) {
    'use strict';
        //Load functions
    $(document).ready(function() {
           // post-carausel-2
        $('.post-carausel-1').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: false,
            loop: true,
            adaptiveHeight: true,
            cssEase: 'linear',
            centerPadding: 50,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        });

        $('.featured-slider-2-items').slick({
            fade: true,
            asNavFor: '.featured-slider-2-nav',
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-arrow-right"></i></button>',
            appendArrows: '.arrow-cover',
        });

        $('.featured-slider-2-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.featured-slider-2-items',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: 0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
            ]
        });

        // post-carausel-3
        $('.post-carausel-3').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            loop: true,
            adaptiveHeight: true,
            cssEase: 'linear',
            centerPadding: 50,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        });
        //slide show fade
        $(".slider-fade").each(function(key, item) {
            var id=$(this).attr("id");
            var sliderID='#'+id;
            var appendArrowsClassName = '#'+id+'-slider-arrows'

            $(sliderID).slick({
                fade: true,
                arrows: true,
                dots: true,
                cssEase: 'linear',
                prevArrow: '<button type="button" class="slick-prev box-shadow-outer-2 box-hover-shadow-outer-5"><i class="ti-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next box-shadow-outer-2 box-hover-shadow-outer-5"><i class="ti-angle-right"></i></button>',
                appendArrows: (appendArrowsClassName),
            });
        });

    });
   
})(jQuery);