(function ($) {
  "use strict";

  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });

  if ($('.preloader').length > 0) {
    $('.preloaderCls').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.preloader').css('display', 'none');
      })
    });
  };

  function onePageNav(element) {
    if ($(element).length > 0) {
      $(element).each(function () {
        $(this).find('a').each(function () {
          $(this).on('click', function () {
            var target = $(this.getAttribute('href'));
            if (target.length) {
              event.preventDefault();
              $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
              }, 1000);
            };

          });
        });
      })
    }
  };
  onePageNav('.onepage-nav');


  $('.mobile-menu-active').vsmobilemenu({
    menuContainer: '.themeholy-mobile-menu',
    expandScreenWidth: 992,
    menuToggleBtn: '.themeholy-menu-toggle',
  });


  
  // Scroll To top Button Select 
  var scrollToTopBtn = '.scrollToTop'
  $(window).on("scroll", function () {

    //Check to see if the window is top if not then display button
    if ($(this).scrollTop() > 50) {
      $('header').addClass('show');
    } else {
      $('header').removeClass('show');
    }

    //Check to see if the window is top if not then display button
    if ($(this).scrollTop() > 400) {
      $(scrollToTopBtn).addClass('show');
    } else {
      $(scrollToTopBtn).removeClass('show');
    }

  });


  $(scrollToTopBtn).on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });



  if ($('.background-image').length > 0) {
    $('.background-image').each(function () {
      var src = $(this).attr('data-as-img');
      $(this).css({
        'background-image': 'url(' + src + ')'
      });
    });
  };

  window.addEventListener('contextmenu', function (e) {
    // do something here... 
    e.preventDefault();
  }, false);


  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
  }

})(jQuery);