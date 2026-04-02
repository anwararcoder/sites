/*
::
:: Theme Name: Micro - HTML5 Responsive Multi-Purpose Template
:: Email: arcoder14@gmail.com
:: Author URI: http://themeforest.net/user/AnwarRamadan
:: Author: AnwarRamadan
:: Version: 1.0
::
*/

(function () {
	'use strict';
    
// :: Loading
    $(window).on('load', function () {
        $(".loading").fadeOut();
    });
    
// :: Add Class Active To Navbar
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > ($('.navbar').height())) {
			$('.navbar').addClass('active');
		} else {
			$('.navbar').removeClass('active');
		}
	});
    
// :: Scroll Smooth To Go Section
	$('.move-section').on('click', function (e) {
		e.preventDefault();
		var anchorLink = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchorLink.attr('href')).offset().top + 1
		}, 1000);
	});
    
// :: Sync Link Navbar
	$('body').scrollspy({
		target: '#navtoggleid',
		offset: 85
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
    
// :: Add Class Active On Go To Header
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 400) {
			$('.scroll-up').addClass('active');
		} else {
			$('.scroll-up').removeClass('active');
		}
	});
    
// :: Add Class Active To Navbar (.list-name-projects li)
    $('.projects .list-name-projects li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
// :: Setup Mixitup
	var containerEl = document.querySelector('.all-projects');
	var mixer = mixitup(containerEl);
	
// :: Magnific Popup Plugin
	$('.projects .project-img-box .img-box-hover').magnificPopup({
		type: 'image',
		gallery: {enabled: true}
	});
    
// :: CounterUp Plugin
    $('.count').counterUp({
        delay: 20,
        time: 3000
    });
// :: Owl Carousel Plugin
	$('.testimonials-box').owlCarousel({
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
}());