/*
::
:: Theme Name: Petrol - Industry and Manufacturing HTML5 Template
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
        if ($(window).scrollTop() > $('.nav-bar').height() + 30) {
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

    // :: Add Class Active To Search Box
    $('.open-search-box').on('click', function () {
        $('.search-box').fadeIn();
    });
    $('.search-box, .close-search').on('click', function () {
        $('.search-box').fadeOut();
    });
    $('.search-box form').on('click', function (e) {
        e.stopPropagation();
    });

    // :: Open And Close Menu
    $('.open-menu').on('click', function () {
        $('.menu-box').fadeIn().addClass('active');
    });
    $('.menu-box').on('click', function () {
        $(this).fadeOut().removeClass('active');
    });
    $('.exit-menu-box').on('click', function () {
        $('.menu-box').fadeOut().removeClass('active');
    });
    $('.menu-box .inner-menu').on('click', function (e) {
        e.stopPropagation();
    });
    
    // :: Height Header Section
    $('.header, .header .table-cell').height( $(window).height() + $('.nav-bar').height() + 86 );
    $('.header.header-home-2, .header.header-home-2 .table-cell').height($(window).height() + $('navs-home-2').height() + 100);

    // :: Animation Header
    $('.header-owl').on('translate.owl.carousel', function () {
        $('.header-owl .banner').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .headline-top').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .handline').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .banner .about-website').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header-hero.header-1 .head-info .buttons').removeClass('animated fadeInUp').css('opacity', '0');
        $('.header .petrol-info').removeClass('animated fadeInUp').css('opacity', '0');
    });
    $('.header-owl').on('translated.owl.carousel', function () {
        $('.header-owl .banner').removeClass('animated fadeIn').css('opacity', '1');
        $('.header .banner .headline-top').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .handline').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .about-website').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .banner .btn-1').addClass('animated fadeInUp').css('opacity', '1');
        $('.header .petrol-info').addClass('animated fadeInUp').css('opacity', '1');
    });

    // :: OWL Carousel Js Header Hero
    $('.header-owl').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
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
                items: 5
            }
        }
    });
    // :: OWL Carousel Js Features
    $('.features-owl-2').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 15,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            991: {
                items: 4
            }
        }
    });

    // :: OWL Carousel Js Statistic
    $('.statistic-owl').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        margin: 15,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });

    // :: Counter Up Js
    $('.counter').counterUp({
        delay: 20,
        time: 1000
    });

    // :: NiceSelect Plugin
    $('select').niceSelect();

    // :: OWL Carousel Js Sponsors Carousel
    $('.sponsors-box').owlCarousel({
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

    // :: OWL Carousel Js Testimonial
    $('.owl-testimonial').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        center: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        URLhashListener: true,
        startPosition: 'URLHash',
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
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
    $('.owl-testimonial-home-3').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 30,
        center: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
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

    // :: OWL Carousel Js Work
    $('.work-owl').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: 2000,
        nav: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
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
    
    // :: Add Class Active To Navbar (.list-name-projects li)
    $('.work-list-filter .list-name-work li').on('click', function () {
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
    
    // :: Tap Descriptions
    $('.shop-page .description ul li').on('click', function(){
		var tabsIdDescription = $(this).attr('id');
		$(this).addClass('active').siblings().removeClass('active');
		$('#' + tabsIdDescription + '-content-box').addClass('active').siblings().removeClass('active');
	});

}());

// :: Setup mouseenter On Services Item
$(document).ready(function () {
    $('.services .services-item, .work .item-work, .shop-item .item-img').on('mouseenter', function (e) {
        x = e.pageX - $(this).offset().left,
            y = e.pageY - $(this).offset().top;
        $(this).find('span').css({
            top: y,
            left: x
        });
    });
    $('.services .services-item, .work .item-work, .shop-item .item-img').on('mouseout', function (e) {
        x = e.pageX - $(this).offset().left,
            y = e.pageY - $(this).offset().top;
        $(this).find('span').css({
            top: y,
            left: x
        });
    });
});