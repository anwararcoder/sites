/*
::
:: Theme Name: Supreme - SEO & Digital Marketing HTML5 Template
:: Email: arcoder14@gmail.com
:: Author URI: https://themeforest.net/user/ar-coder
:: Author: ar-coder
:: Version: 1.0
:: 
*/

(function () {
	'use strict';

	// :: Loading
	$(window).on('load', function () {
		$('.loading').fadeOut();
	});

	// :: Scroll Smooth To Go Section
	$('.move-section').on('click', function (e) {
		e.preventDefault();
		var anchorLink = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchorLink.attr('href')).offset().top + 1
		}, 1000);
	});

	// :: Add Class Active For ('.nav-bar')
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > $('.all-navbar').height() + 30) {
			$('.nav-bar, .top-navbar').addClass('active');
		} else {
			$('.nav-bar, .top-navbar').removeClass('active');
		}
	});

	// :: Varables Navbar
	var headerBar = $('.nav-bar'),
		$navbarMenu = $('#open-nav-bar-menu'),
		$menuLink = $('.open-nav-bar'),
		$menuTriggerLink = $('.has-menu > a');

	// :: Add Class Active For $menuLink And $navbarMenu
	$menuLink.on('click', function (e) {
		e.preventDefault();
		$menuLink.toggleClass('active');
		$navbarMenu.toggleClass('active');
	});

	// :: Add Class Active For $menuTriggerLink
	$menuTriggerLink.on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active').next('ul').toggleClass('active');
	});

	// :: Remove Class Active To [.nav-bar .nav-bar-links]
	$('.nav-bar .nav-bar-links, .nav-bar .nav-bar-links .inner-links .head i').on('click', function () {
		$('.nav-bar .nav-bar-links').removeClass('active');
	});
	$('.nav-bar .nav-bar-links .inner-links').on('click', function (e) {
		e.stopPropagation();
	});

	// :: Add Class Active To Search Box
	$('.search-icon.open').on('click', function () {
		$('.search-box').fadeIn();
	});
	$('.search-box, .search-box-icon.exit').on('click', function () {
		$('.search-box').fadeOut();
	});
	$('.search-box form').on('click', function (e) {
		e.stopPropagation();
	});

	// :: Open And Close Menu
	$('.menu-icon.open').on('click', function () {
		$('.menu-box').fadeIn().addClass('active');
	});
	$('.menu-box').on('click', function () {
		$(this).fadeOut().removeClass('active');
	});
	$('.menu-box-icon.exit').on('click', function () {
		$('.menu-box').fadeOut().removeClass('active');
	});
	$('.menu-box .inner-menu').on('click', function (e) {
		e.stopPropagation();
	});

	// :: Swiper Header
	var swiper = new Swiper(".header-swiper", {
		spaceBetween: 0,
		centeredSlides: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// :: Counter Up Js
	$('.counter').counterUp({
		delay: 20,
		time: 1000
	});

	// :: Swiper Services
	var swiper = new Swiper(".services-swiper", {
		slidesPerView: 1,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true
		},
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		breakpoints: {
			575: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: -1,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: -1,
			},
			1199: {
				slidesPerView: 3,
				spaceBetween: -1,
			},
			1399: {
				slidesPerView: 4,
				spaceBetween: -1,
			}
		}
	});

	// :: Swiper Projects
	var swiper = new Swiper(".projects-swiper", {
		slidesPerView: 1,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true
		},
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		breakpoints: {
			575: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1199: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1399: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	});

	// :: Magnific Popup Plugin
	$('.project-item .img-box .img-tools li a.popup').magnificPopup({
		type: 'image',
		projects: {
			enabled: true
		}
	});

	// :: Swiper Testimonial
	var swiper = new Swiper(".testimonial-swiper", {
		slidesPerView: 1,
		spaceBetween: 1,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		}
	});

	// :: Swiper Sponsors
	var swiper = new Swiper(".sponsors-swiper", {
		slidesPerView: 1,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			475: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			575: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 5,
				spaceBetween: 30,
			},
			991: {
				slidesPerView: 6,
				spaceBetween: 30,
			},
			1199: {
				slidesPerView: 6,
				spaceBetween: 30,
			},
			1399: {
				slidesPerView: 6,
				spaceBetween: 0,
			}
		}
	});

	// :: Swiper Benifit
	var swiper = new Swiper(".benifit-swiper", {
		//		slidesPerView: 1,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			450: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			991: {
				slidesPerView: 4,
				spaceBetween: 0,
			},
			1199: {
				slidesPerView: 5,
				spaceBetween: 0,
			},
			1399: {
				slidesPerView: 5,
				spaceBetween: 0,
			}
		}
	});

	// :: Swiper Statistic
	var swiper = new Swiper(".statistic-swiper", {
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		}
	});

	// :: Add Class Active To Gallery
	$('.projects-list .list-name-projects li').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});

	// :: Add Class Active On Go To Header
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 400) {
			$('.scroll-up').addClass('active');
		} else {
			$('.scroll-up').removeClass('active');
		}
	});

	// :: Skills Data Value
	$(window).on('scroll', function () {
		$('.skills .skill-box .skill-line .line').each(function () {
			var toQuestionsAndSkills =
				$(this).offset().top + $(this).outerHeight();
			var goToBottom =
				$(window).scrollTop() + $(window).height();
			var widthValue = $(this).attr('data-value');
			if (goToBottom > toQuestionsAndSkills) {
				$(this).css({
					width: widthValue,
					transition: 'all 2s ease'
				});
			}
		});
	});

}());