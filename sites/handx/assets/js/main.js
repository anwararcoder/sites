/*
::
:: Template Name: Handx - Personal Portfolio HTML5 Template
:: Author: codetheme144
:: Email: codetheme144@gmail.com
:: Developed By: codetheme144
:: Version: 1.0
::
*/

(function () {
	'use strict';
// :: Add Class Active To Navbar
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > ($('.navbar').height())) {
			$('.navbar').addClass('active');
		} else {
			$('.navbar').removeClass('active');
		}
	});
	
// :: Scroll Smooth To Go Section
	$('.sendtosection').on('click', function (e) {
		e.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top + 1
		}, 1000);
	});
	
// :: Sync Link Navbar
	$('body').scrollspy({
		target: '#navtoggleid',
		offset: 66
	});
	
// :: Tilt Plugin
	$('.tilt').tilt({
		maxTilt: 30,
		perspective: 5000,
		easing: "cubic-bezier(.05,.88,.62,.79)",
		speed: 500,
		transition: false,
		reset: false
	});
	
// :: Function SkillsLine()
	function skillsLine() {
		$('.skill .line .background-line').each(function () {
			var value = $(this).data('degree');
			$(this).css({
				width: value + '%',
				transition: 'width 2s cubic-bezier(0.82, 0.03, 0.46, 0.99) 0s'
			});
		});
	}
	
// :: Play Function SkillsLine()
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > $('.skill').offset().top - 200) {
			skillsLine();
		}
	});

// :: Services Box Owl Carousel
	$('.services-box').owlCarousel({
		center: true,
		items: 3,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		margin: 15,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			991: {
				items: 3
			}
		}
	});
	
// :: Add Class Active For Ul Link Portfolio
	$('.portfolio .portfolio-link li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
// :: Setup Mixitup
	var containerHandx = document.querySelector('.portfolio .row');
	var mixer = mixitup(containerHandx);
	
// :: Magnific Popup Plugin
	$('.portfolio .box .info').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	
// :: Cleints Box Owl Carousel
	$('.client-box').owlCarousel({
		center: true,
		items: 2,
		loop: true,
		margin: 30,
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
	
// :: Sponsor Box Owl Carousel
	$('.sponsor-box').owlCarousel({
		loop: true,
		margin: 15,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 4
			}
		}
	});
	
// :: Add Class Active On Go To Header
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 400) {
			$('.go-to-header').addClass('active');
		} else {
			$('.go-to-header').removeClass('active');
		}
	});
    
// :: Setup CounterUp
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
    
}());