$(function () {
	"use strict";

	new PerfectScrollbar(".app-container"),
		new PerfectScrollbar(".header-message-list"),
		new PerfectScrollbar(".header-notifications-list"),


		$(".mobile-toggle-icon").on("click", function () {
			$(".wrapper").toggleClass("toggled")
		}),

		/* dark mode button */

		$(".dark-mode").click(function () {
			$("html").attr("data-bs-theme", function (i, v) {
				return v === 'dark' ? 'light' : 'dark';
			})
		})

	$(".dark-mode").on("click", function () {

		if ($(".dark-mode-icon i").attr("class") == 'bx bx-sun') {
			$(".dark-mode-icon i").attr("class", "bx bx-moon");
		} else {
			$(".dark-mode-icon i").attr("class", "bx bx-sun");
		}
	}),



		$(".mobile-toggle-menu").click(function () {
			$(".wrapper").hasClass("toggled") ? ($(".wrapper").removeClass("toggled"), $(".sidebar-wrapper").unbind("hover")) : ($(".wrapper").addClass("toggled"), $(".sidebar-wrapper").hover(function () {
				$(".wrapper").addClass("sidebar-hovered")
			}, function () {
				$(".wrapper").removeClass("sidebar-hovered")
			}))
		}),

		// back to top button
		$(document).ready(function () {
			$(window).on("scroll", function () {
				$(this).scrollTop() > 300 ? $(".back-to-top").fadeIn() : $(".back-to-top").fadeOut()
			}), $(".back-to-top").on("click", function () {
				return $("html, body").animate({
					scrollTop: 0
				}, 600), !1
			})
		}),


		// menu 
		$(function () {
			$("#menu").metisMenu()
		}),

		// active 
		$(function () {
			for (var e = window.location, o = $(".metismenu li a").filter(function () {
				return this.href == e
			}).addClass("").parent().addClass("mm-active"); o.is("li");) o = o.parent("").addClass("mm-show").parent("").addClass("mm-active")
		}),

		// chat process 
		$(".chat-toggle-btn").on("click", function () {
			$(".chat-wrapper").toggleClass("chat-toggled")
		}), $(".chat-toggle-btn-mobile").on("click", function () {
			$(".chat-wrapper").removeClass("chat-toggled")
		}),

		// email
		$(".email-toggle-btn").on("click", function () {
			$(".email-wrapper").toggleClass("email-toggled")
		}), $(".email-toggle-btn-mobile").on("click", function () {
			$(".email-wrapper").removeClass("email-toggled")
		}), $(".compose-mail-btn").on("click", function () {
			$(".compose-mail-popup").show()
		}), $(".compose-mail-close").on("click", function () {
			$(".compose-mail-popup").hide()
		}),


		/* switcher */

		$("#LightTheme").on("click", function () {
			$("html").attr("data-bs-theme", "light")
		}),

		$("#DarkTheme").on("click", function () {
			$("html").attr("data-bs-theme", "dark")
		}),

		$("#SemiDarkTheme").on("click", function () {
			$("html").attr("data-bs-theme", "semi-dark")
		}),

		$("#BoderedTheme").on("click", function () {
			$("html").attr("data-bs-theme", "bodered-theme")
		})


	$(".switcher-btn").on("click", function () {
		$(".switcher-wrapper").toggleClass("switcher-toggled")
	}), $(".close-switcher").on("click", function () {
		$(".switcher-wrapper").removeClass("switcher-toggled")
	})







});