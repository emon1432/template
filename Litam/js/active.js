(function ($) {
    'use strict';

    var preview_window = $(window);

    // :: Preloader Active Code
    preview_window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Menu Active Code
    if ($.fn.classyNav) {
        $('#classyNav').classyNav();
    }

    // :: onePageNav Active JS
    if ($.fn.onePageNav) {
        $('#nav').onePageNav();
    }

    // preventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

})(jQuery);