(function ($) {
  ("use strict");
  // Page loading
  $(window).on("load", function () {
    $("#preloader-active").fadeOut("slow");
    $("body").css({
      overflow: "visible",
    });
  });

  /*------ ScrollUp -------- */
  $.scrollUp({
    scrollText:
      '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });

  /*------ Wow Active ----*/
  new WOW().init();

  //Disable copy/cut/paste
  $("body").bind("cut copy paste", function (e) {
    e.preventDefault();
  });

  //Disable right click
  $("body").on("contextmenu", function (e) {
    return false;
  });
})(jQuery);
