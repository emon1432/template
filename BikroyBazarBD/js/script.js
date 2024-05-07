(function ($) {
    ("use strict");
    // Hide the preloader once the page is fully loaded
    /*     window.addEventListener("load", function () {
        const preloader = document.querySelector(".preloader");
        preloader.style.display = "none";
    }); */

    // Sticky Menu
    /*     window.addEventListener("scroll", function () {
        var navbar = document.querySelector(".navbar");
        if (window.scrollY > 100) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }); */

    $(".hero-slider-active").owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplayTimeout: 5000,
        autoplay: true,
        nav: true,
        navText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='bi bi-chevron-right'></i>",
        ],
    });

    $(".product-slider-active").owlCarousel({
        margin: 24,
        dots: false,
        loop: true,
        autoplayTimeout: 2000,
        autoplay: false,
        nav: true,
        navText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='bi bi-chevron-right'></i>",
        ],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            767: {
                items: 3,
            },
            // breakpoint from 992 up
            1191: {
                items: 4,
            },
        },
    });

    // =============================
    $(document).ready(function () {
        $(".slideshow-thumbnails").hover(function () {
            changeSlide($(this));
        });

        $(document).mousemove(function (e) {
            var x = e.clientX;
            var y = e.clientY;

            var x = e.clientX;
            var y = e.clientY;

            var imgx1 = $(".slideshow-items.active").offset().left;
            var imgx2 = $(".slideshow-items.active").outerWidth() + imgx1;
            var imgy1 = $(".slideshow-items.active").offset().top;
            var imgy2 = $(".slideshow-items.active").outerHeight() + imgy1;

            if (x > imgx1 && x < imgx2 && y > imgy1 && y < imgy2) {
                $("#lens").show();
                $("#result").show();
                imageZoom(
                    $(".slideshow-items.active"),
                    $("#result"),
                    $("#lens")
                );
            } else {
                $("#lens").hide();
                $("#result").hide();
            }
        });
    });

    function imageZoom(img, result, lens) {
        result.width(img.innerWidth());
        result.height(img.innerHeight());
        lens.width(img.innerWidth() / 2);
        lens.height(img.innerHeight() / 2);

        result.offset({
            top: img.offset().top,
            left: img.offset().left + img.outerWidth() + 10,
        });

        var cx = img.innerWidth() / lens.innerWidth();
        var cy = img.innerHeight() / lens.innerHeight();

        result.css("backgroundImage", "url(" + img.attr("src") + ")");
        result.css(
            "backgroundSize",
            img.width() * cx + "px " + img.height() * cy + "px"
        );

        lens.mousemove(function (e) {
            moveLens(e);
        });
        img.mousemove(function (e) {
            moveLens(e);
        });
        lens.on("touchmove", function () {
            moveLens();
        });
        img.on("touchmove", function () {
            moveLens();
        });

        function moveLens(e) {
            var x = e.clientX - lens.outerWidth() / 2;
            var y = e.clientY - lens.outerHeight() / 2;
            if (x > img.outerWidth() + img.offset().left - lens.outerWidth()) {
                x = img.outerWidth() + img.offset().left - lens.outerWidth();
            }
            if (x < img.offset().left) {
                x = img.offset().left;
            }
            if (y > img.outerHeight() + img.offset().top - lens.outerHeight()) {
                y = img.outerHeight() + img.offset().top - lens.outerHeight();
            }
            if (y < img.offset().top) {
                y = img.offset().top;
            }
            lens.offset({ top: y, left: x });
            result.css(
                "backgroundPosition",
                "-" +
                    (x - img.offset().left) * cx +
                    "px -" +
                    (y - img.offset().top) * cy +
                    "px"
            );
        }
    }

    function changeSlide(elm) {
        $(".slideshow-items").removeClass("active");
        $(".slideshow-items").eq(elm.index()).addClass("active");
        $(".slideshow-thumbnails").removeClass("active");
        $(".slideshow-thumbnails").eq(elm.index()).addClass("active");
    }

    window.addEventListener("resize", slideImage);
})(jQuery); // End jQuery
