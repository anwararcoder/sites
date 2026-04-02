/*
* Template Name: Agic One Page Parallax Template
* Author: codetheme144
* Email: codetheme144@gmail.com
* Developed By: codetheme144
* Version: 1.0
*/
(function () {
	'use strict';
	//	Up To Top
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 500) {
			$('.up-to-top').addClass('active');
		} else {
			$('.up-to-top').removeClass('active');
		}
	});
	//	Navbar
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > ($('.navbar').height())) {
			$('.navbar').addClass('active');
		} else {
			$('.navbar').removeClass('active');
		}
	});
	//	Link To Go
	$('.agic-scroll').on('click', function (e) {
		e.preventDefault();
		var target = this.hash,
			$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, function () {
			window.location.hash = target;
		});
	});
	//	Scroll To Section
	$(window).on('scroll', function () {
		$('.sectionScroll').each(function () {
			if ($(window).scrollTop() > $(this).offset().top - 10) {
				var sectionScroll = $(this).attr('id');
				$('.navbar .navbar-nav .nav-link').removeClass('active');
				$('.navbar .navbar-nav .nav-link[data-scroll="' + sectionScroll + '"]').addClass('active');
			}
		});
	});

	//	Skills Data Value
	$(window).on('scroll', function () {
		$('.about .skills .skills-progress .item .line div').each(function () {
			var goSkillProgress =
				$(this).offset().top + $(this).outerHeight();
			var GobottomWindow =
				$(window).scrollTop() + $(window).height();
			var widthValue = $(this).attr('data-value');
			if (GobottomWindow > goSkillProgress) {
				$(this).css({
					width: widthValue
				});
			}
		});
	});
	//	Portfolio Link Add Active
	$('.portfolio .link-list li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	//	Typed Plugin
	var typed = new Typed('.typed', {
		strings: ["Agency", "Works", "Team"],
		typeSpeed: 150,
		backSpeed: 80,
		loop: true,
	});
	//	CountTo Plugin
	$('.timer').countTo();
	//	MixItUp Plugin
	var containerEl = document.querySelector(".portfolio-mix");
	var mixer = mixitup(containerEl);
	//	Magnific Popup Plugin
	$('.portfolio .portfolio-item .over').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	//	OWL Plugin
	$('.cleints-slide').owlCarousel({
		items: 2,
		loop: true,
		margin: 30,
		nav: true,
		autoplay: true,
		autoplayTimeout: 2500,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
	$('.sponsors-slide').owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 2500,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 4
			}
		}
	});
}());