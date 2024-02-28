(function($) {
    'use strict';
    // Page loading
    $(window).on('load', function () {
        $('.preloader-wrap').fadeOut('slow');
        $('body').css({
            'overflow': 'visible'
        });
    });
    // Smart menu
    var headerSticky = function() {
        var lastScrollTop = 0;
        $(window).on('scroll', function() {
            var wScroll = $(this).scrollTop();
            var contentHeight = $('body').height();
            if (contentHeight > 200) {
                if (wScroll > 300) {
                    if (wScroll < lastScrollTop) {
                        $('.header-sticky').removeClass('slide-up').addClass('slide-down');
                    } else {
                        $('.header-sticky').removeClass('slide-down').addClass('slide-up');
                    }
                } else {
                    $('.header-sticky').removeClass('slide-down');
                }
                if (wScroll > $('.main-header').height() + 200) {
                    $('.header-sticky').addClass('sticky-bar');
                } else {
                    $('.header-sticky').removeClass('sticky-bar');
                    $('.header-sticky').removeClass('slide-down');
                }
                lastScrollTop = wScroll;
            }
        });
    }

    // Scroll up to top
    var scrollToTop = function () {        
        var o = $("body").width();
            $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn();
            } else {
            $(".back-to-top").fadeOut();
            }       
        }), $(".back-to-top").on('click', function() {
            return $("html, body").animate({
                scrollTop: 0
            }, 700), !1
        })
        if (o > 450) {
            $(".back-to-top").addClass('animation-shadow-pulse');
        }       
    };

    //Counter Up
    var numberCounter = function () {
        if ($('.counter-number').length) {
            $('.counter-number').counterUp({
                delay: 10,
                time: 2000
            });
        }
    };
    //Countdown
    var numberCountdown = function () {
        if ($('.number-countdown').length) {
            // 15 days from now!
            function get15dayFromNow() {
                return new Date(new Date().valueOf() + 15 * 24 * 60 * 60 * 1000);
            }
            var $clock = $('#countdown');
            $clock.countdown(get15dayFromNow(), function(event) {
                $(this).html(event.strftime('%D days %H:%M:%S'));
            });
            $('#btn-reset').click(function() {
                $clock.countdown(get15dayFromNow());
            });
            $('#btn-pause').click(function() {
                $clock.countdown('pause');
            });
            $('#btn-resume').click(function() {
                $clock.countdown('resume');
            });

            //Date countdown
            $('#date-countdown').countdown('2022/10/10 12:34:56')
            .on('update.countdown', function(event) {
            var format = '%H:%M:%S';
            if(event.offset.totalDays > 0) {
                format = '%-d day%!d ' + format;
            }
            if(event.offset.weeks > 0) {
                format = '%-w week%!w ' + format;
            }
            $(this).html(event.strftime(format));
            })
            .on('finish.countdown', function(event) {
            $(this).html('This offer has expired!')
                .parent().addClass('disabled');

            });

            //Multiple instances on the same page
            $('[data-countdown]').each(function() {
                var $this = $(this), finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function(event) {
                    $this.html(event.strftime('%D days %H:%M:%S'));
                });
            });
        }
    }


    // Mobile menu
    var mobileMenu = function () {
        var menu = $('ul#mobile_menu');
        if (menu.length) {
            menu.slicknav({
                prependTo: ".mobile_menu_cover",
                closedSymbol: '<i class="ti-angle-down"></i>',
                openedSymbol: '<i class="ti-angle-up"></i>'
            });
        };
    };
    //Copy Clipborard    
    if ($('.btn-copy-clipboard').length) {
        $('.btn-copy-clipboard').on('click', function() {
            let theButton = $(this);

            var clipboard = new ClipboardJS('.btn-copy-clipboard', {
                target: function(clipboard) {
                    return clipboard.parentNode.nextElementSibling
                }
            });
            clipboard.on('success', function(e) {
                theButton.addClass('copied');
                e.clearSelection();
            });
            setTimeout(function() {
                theButton.removeClass('copied');
            }, 1000);
        });
    }
    // Nice Select
    var niceSelectBox = function() {
        var nice_Select = $('select.nice-select');
        if (nice_Select.length) {
            nice_Select.niceSelect();
        }
    };

    /*---------------------------------------------- 
                PROGRESS BARS
    ------------------------------------------------*/
    var progressAnimation = function() {
        $(".progress-element").each(function() {
            $(this).waypoint(function() {
                var progressBar = $(".progress-bar");
                progressBar.each(function(indx){
                    $(this).css("width", $(this).attr("aria-valuenow") + "%");
                    $(this).addClass('hieu');
                });
            }, {
            triggerOnce: true,
                offset: 'bottom-in-view'
            });
        })
    };
    
    //Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    /* WOW active */
    if ($('.wow').length) {
        new WOW().init();
    }

    //Load functions
    $(document).ready(function() {
        headerSticky();
        mobileMenu();
        scrollToTop();
        numberCounter();       
        numberCountdown();       
        niceSelectBox();       
        progressAnimation();    
    });
   
})(jQuery);