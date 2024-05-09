/*--------------------- Copyright (c) 2021 -----------------------
[Master Javascript]
Project: SplashDash
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var SplashDash = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if(!this.initialised) {
				this.initialised = true;
			} 
			else {
				return;
			}
		/*-------------- SplashDash Design Functions Calling ------------------------------------------------*/		    
			this.bottom_top();
			this.loader();			
		},		
		/*-------------- SplashDash Design Functions Calling -------------------------------------------*/		
		// loader			
			loader: function () {
				jQuery(window).on('load', function() {
					$(".loader").fadeOut();
					$(".spinner").delay(500).fadeOut("slow");
				});
			},
		// loader		
		// Bottom To Top
			bottom_top: function(){  
				if($('#button').length > 0){					
					var btn = $('#button');
					$(window).scroll(function() {
					  if ($(window).scrollTop() > 300) {
						btn.addClass('show');
					  } else {
						btn.removeClass('show');
					  }
					});
					btn.on('click', function(e) {
					  e.preventDefault();
					  $('html, body').animate({scrollTop:0}, '300');
					});
				}
			},
		// Bottom To Top
	};
	SplashDash.init();
}(jQuery));	

