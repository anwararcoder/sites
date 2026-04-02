(function () {
    'use strict';
    
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
            $('.nav-bar').addClass('active');
        } else {
            $('.nav-bar').removeClass('active');
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
	
	// :: Animation OWL Header
    $('.header-carousel').on('translate.owl.carousel', function () {
        $('.header .banner').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .top-handline').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .handline').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .about-website, .header .pulse').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .btn-box').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .btn-box a.btn-1:first-of-type').removeClass('animated rotateInDownLeft').css('opacity', '0');
        $('.header .banner .btn-box a.btn-1:last-of-type').removeClass('animated rotateInDownLeft').css('opacity', '0');
    });
    $('.header-carousel').on('translated.owl.carousel', function () {
        $('.header .banner').removeClass('animated fadeIn').css('opacity', '1');
        $('.header .banner .top-handline').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .handline').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .about-website, .header .pulse').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .btn-box').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .btn-box a.btn-1:first-of-type').addClass('animated rotateInDownLeft').css('opacity', '1');
        $('.header .banner .btn-box a.btn-1:last-of-type').addClass('animated rotateInDownLeft').css('opacity', '1');
    });
	
    // :: OWL Carousel Js Header Hero
    $('.header-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="aricon-9"></i>', '<i class="aricon-10"></i>'],
        dotsClass: ['container','owl-dots'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });
	
	// :: OWL Carousel Js Features
    $('.features-owl').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        margin: 30,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 2
            },
            575: {
                items: 3
            },
            768: {
                items: 4
            },
            991: {
                items: 5
            }
        }
    });
	
	// :: Magnific Popup Plugin
    $('.item-work .hover-box .open-item-work').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
	$('.btn-more .btn-1').on('click', function(){
		$('.item-work').fadeIn();
		$('.btn-more .btn-1').fadeOut();
	});
	
// :: OWL Carousel Js Sponsors Carousel
	$('.sponsors-carousel').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 4000,
		smartSpeed: 1000,
		margin: 30,
		autoplayHoverPause: true,
		mouseDrag: true,
		touchDrag: true,
		responsive: {
			0: {
				items: 2
			},
			575: {
				items: 3
			},
			768: {
				items: 4
			},
			991: {
				items: 6
			}
		}
	});
	
	// :: Add Class Active On Go To Header
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.scroll-up').addClass('active');
        } else {
            $('.scroll-up').removeClass('active');
        }
    });
	
}());

// :: Setup mouseenter On Services Item
$(document).ready(function () {
    $('.services-item, .item-work').on('mouseenter', function (e) {
        x = e.pageX - $(this).offset().left,
            y = e.pageY - $(this).offset().top;
        $(this).find('span.over').css({
            top: y,
            left: x
        });
    });
    $('.services-item, .item-work').on('mouseout', function (e) {
        x = e.pageX - $(this).offset().left,
            y = e.pageY - $(this).offset().top;
        $(this).find('span.over').css({
            top: y,
            left: x
        });
    });
});