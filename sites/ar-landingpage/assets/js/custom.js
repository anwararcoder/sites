/*
++
++ Template Name: AR-Coder - Personal Portfolio & Resume
++ Version: 1.0
++
*/

(function () {
	'use strict';
    
    
    //  Preload
	$(window).on('load',function () {
		$('.preload').fadeOut(1000, function () {
			$('body').css('overflow','auto');
		});
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
	$('.scrollsmooth').on('click', function (e) {
		e.preventDefault();
		var target = this.hash,
			$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});
	//	Scroll To Section
	$(window).on('scroll', function () {
		$('.sectionScrollId').each(function () {
			if ($(window).scrollTop() > $(this).offset().top - 10) {
				var sectionScrollId = $(this).attr('id');
				$('.navbar .navbar-nav .nav-link').removeClass('active');
				$('.navbar .navbar-nav .nav-link[data-scroll="' + sectionScrollId + '"]').addClass('active');
			}
		});
	});
	//	Skills Data Value
	$(window).on('scroll', function () {
		$('.skills .skills-box .line').each(function () {
			var goToSkillBar =
				$(this).offset().top + $(this).outerHeight();
			var windowGoBottom =
				$(window).scrollTop() + $(window).height();
			var widthValue = $(this).attr('data-value');
			if (windowGoBottom > goToSkillBar) {
				$(this).css({
					width: widthValue
				});
			}
		});
	});
	//	Portfolio Link Add Active
	$('.portfolio .portfolio-link li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	//	Scroll Top
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 500) {
			$('.scroll-top').addClass('active');
		} else {
			$('.scroll-top').removeClass('active');
		}
	});
	//	Typed Plugin
	var typed = new Typed('.job-typed', {
		strings: ["Web Developer.", "Ui/UX Designer."],
		typeSpeed: 60,
		backSpeed: 30,
		loop: true,
	});
	//	Tilt Plugin
	$('.tilt').tilt({
		maxTilt: 10,
	});
	//	CounterUp
	$('.counter').counterUp();
	//	MixItUp Plugin
	var containerEl = document.querySelector(".portfolio-box");
	var mixer = mixitup(containerEl);
	//	Magnific Popup Plugin
	$('.portfolio .portfolio-item .item-overlay').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	//	OWL Carousel Plugin
	$('.testimonials-carousel').owlCarousel({
		center: true,
		items: 2,
		loop: true,
		margin: 30,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			}
		}
	});
	$('.carousel-sponsors').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
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