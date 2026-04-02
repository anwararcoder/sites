(function () {
	'use strict';
// =: Preload
	$(window).on('load',function () {
		$('.preload').fadeOut(1000, function () {
			$('body').css('overflow','auto');
		});
	});
	
// =: Add Class 'navbar-top' In Navbar
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 200) {
			$('.navbar').addClass('navbar-top');
		} else {
			$('.navbar').removeClass('navbar-top');
		}
	});
	
// =: Move Smooth To Section
	$('.movesmooth').on('click', function (e) {
		e.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 30
		}, 1000);
	});
	
// =: Sync Link Navbar
	$('body').scrollspy({
		target: '#navmaxisid',
		offset: 70
	});
	
// =: Add Class 'active' In To Top
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 400) {
			$('.to-top').addClass('active');
		} else {
			$('.to-top').removeClass('active');
		}
	});
	
// =: Portfolio Add Class Active In Li
	$('.portfolio .links li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
//	=: Setup WOW Plugin
	new WOW().init();

// =: Setup Mixitup Plugin
	var containerEl = document.querySelector(".box-portfolio");
	var mixBox = mixitup(containerEl);
	
//	=: Setup MagnificPopup Plugin
	$('.portfolio .box-portfolio .box').magnificPopup({
		type: 'image',
		gallery: {enabled: true}
	});
	
//	=: Setup Owl Carousel Plugin
	$('.box-testimonials').owlCarousel({
		items: 2,
		loop: true,
		nav: true,
		autoplay: true,
		autoplayTimeout: 2500,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			}
		}
	});
	$('.box-sponsor').owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 2500,
		responsive: {
			0: {
				items: 2
			},
			500: {
				items: 4
			},
			992: {
				items: 6
			}
		}
	});
}());